const{Readable,Transform}=require('stream');
const express=require('express');
const WebSocket=require('ws');
const axios=require('axios');
const https=require('https');
const http=require('http');
const{URL}=require('url');
const cors=require('cors');

class CachedStream extends Readable{
	constructor(o,options={}){
		super(options);
		this._chunks=[];//存储所有数据块（数组）
		this._completeBuffer=null;//完整的缓冲区缓存
		this._isEnded=false;//原始流是否已结束
		this._error=null;//错误信息
		this._readPosition=0;//当前读取位置
		this._textEncoding=options.encoding||'utf8';//文本编码
		this._isReading=false;//是否正在读取
		//监听原始流
		o.on('data',(chunk)=>{
			//将数据块存入数组
			this._chunks.push(chunk);
			//重置完整缓冲区缓存（因为有了新数据）
			this._completeBuffer=null;
			//如果有监听者在等待数据，推送它
			if(this._isReading){
				this._isReading=false;
				this.push(chunk);
				this._readPosition++;
			}
			this.emit('chunk',chunk);
		});
		o.on('end',()=>{
			this._isEnded=true;
			if(this._isReading)this.push(null);
			this.emit('complete',this.meta_data());
		});
		o.on('error',(error)=>{
			this._error=error;
			this.destroy(error);
			this.emit('error',error);
		});
	}
	_read(size){
		//如果有错误，传递错误
		if(this._error){
			this.destroy(this._error);
			return;
		}
		//如果还有缓冲数据可读
		if(this._readPosition<this._chunks.length){
			const chunk=this._chunks[this._readPosition++];
			this.push(chunk);
		}else if(this._isEnded){
			//所有数据都已读完
			this.push(null);
		}else{
			//等待更多数据
			this._isReading=true;
		}
	}
	toBuffer(){
		if(!this._completeBuffer&&this._chunks.length>0)this._completeBuffer=Buffer.concat(this._chunks);
		return this._completeBuffer||Buffer.alloc(0);
	}
	get_text(encoding=this._textEncoding){
		return this.toBuffer().toString(encoding);
	}
	set_text(text,encoding=this._textEncoding){
		const o=Buffer.from(text,encoding);
		this._chunks=[o];//设置为一个包含新 buffer 的数组
		this._completeBuffer=o;
		this._readPosition=0;
		this._isEnded=true;
		this._isReading=false;
		this.emit('reset');
		return this;
	}
	is_m3u8(){
		const text=this.get_text('utf8',4096);//只检查前4KB
		return [
			'#EXTM3U',
			'#EXT-X-VERSION',
			'#EXT-X-TARGETDURATION',
			'#EXTINF',
			'#EXT-X-STREAM-INF'
		].some(indicator=>text.includes(indicator));
	}
	rewrtie_m3u8_urls(baseUrl,proxyPrefix='/video?url='){
		const text=this.get_text();
		if(!this.is_m3u8())return this;
		const lines=text.split('\n');
		try{
			const baseUrlObj=new URL(baseUrl);
			const basePath=baseUrlObj.origin+baseUrlObj.pathname.substring(0,baseUrlObj.pathname.lastIndexOf('/')+1);
			const rewrittenLines=lines.map(line=>{
				const trimmed=line.trim();
				if(!trimmed||trimmed.startsWith('#'))return line;
				let url=trimmed;
				if(!this._is_abs_url(url)){
					try{
						url=new URL(url,basePath).href;
					}catch(error){
						return line;
					}
				}
				return `${proxyPrefix}${encodeURIComponent(url)}`;
			});
			return this.set_text(rewrittenLines.join('\n'));
		}catch(error){
			console.error('Error rewriting M3U8 URLs:',error);
			return this;
		}
	}
	_is_abs_url(url){
		return url.startsWith('http://')||url.startsWith('https://');
	}
	createReadStream(options={}){
		const{encoding=this._textEncoding,...streamOptions}=options;
		const buffer=this.toBuffer();
		const stream=new Readable({
			...streamOptions,
			read(size){
				if(this._position>=buffer.length){
					this.push(null);
					return;
				}
				const chunk=buffer.slice(this._position,Math.min(this._position+size,buffer.length));
				this._position+=chunk.length;
				this.push(chunk);
			}
		});
		stream._position=0;
		return stream;
	}
	rewind(){
		this._readPosition=0;
		this._isReading=false;
		return this;
	}
	meta_data(){
		const buffer=this.toBuffer();
		return{
			size:buffer.length,
			chunkCount:this._chunks.length,
			isComplete:this._isEnded,
			is_m3u8:this.is_m3u8(),
			encoding:this._textEncoding
		};
	}
}
function get_agent(url,options={}){
	const u=new URL(url);
	const x=u.protocol==='https:';
	const ops={
		rejectUnauthorized:false,//跳过SSL验证
		keepAlive:true,
		maxSockets:50,
		timeout:30000,
		...options
	};
	return x?new https.Agent(ops):new http.Agent(ops);
}

async function video_proxy(req,res,next){
	try{
		const url=req.query.url||req.body.url;
		if(!url)return res.status(400).json({error:'视频链接不能为空'});
		let u;
		try{
			u=new URL(decodeURIComponent(url))
		}catch(error){
			return res.status(400).json({error:'视频链接不合法'});
		}
		if(!['http:','https:'].includes(u.protocol))return res.status(400).json({
			error:'Only HTTP and HTTPS protocols are supported'
		});
		const headers={
			'User-Agent':'Video-Proxy/1.0','Accept':'*/*',
			'Accept-Encoding':'identity',//避免压缩视频
		},bp=new URL(u);
		if(req.headers.range)headers['Range']=req.headers.range;
		if(req.headers['if-range'])headers['If-Range']=req.headers['if-range'];
		const agent=get_agent(url);
		const response=await axios({
			method:'GET',url,headers,
			responseType:'stream',//关键：使用stream模式
			timeout:60000,//长超时时间
			maxRedirects:5,
			httpsAgent:u.protocol==='https:'?agent:undefined,
			httpAgent:u.protocol==='http:'?agent:undefined,
			validateStatus:null//接受所有状态码
		});
		const status=response.status;
		const nh={...response.headers};
		delete nh['content-encoding'];
		delete nh['transfer-encoding'];
		delete nh['connection'];
		delete nh['keep-alive'];
		nh['x-proxied-by']='express-video-proxy';
		nh['x-original-url']=url;
		Object.keys(nh).forEach(k=>(nh[k])&&res.setHeader(k,nh[k]));
		res.status(status);
		const cs=new CachedStream(response.data);
		await new Promise(resolve=>cs.once('complete',resolve));
		if(cs.is_m3u8()){
			cs.rewrtie_m3u8_urls(url,`https://${req.get('host')}/video?url=`);
			response.data=cs.createReadStream();
		}
		response.data.pipe(res);
		response.data.on('error',(error)=>{
			console.error('视频流传输错误:',error.message);
			if(!res.headersSent){
				res.status(500).json({
					error:'流传输错误',
					message:error.message
				});
			}else{
				res.end();//如果头部已经发送，只能结束响应
			}
		});
		req.on('close',()=>(response.data.destroy)&&response.data.destroy());
		//请求超时处理
		req.setTimeout(120000,()=>{
			if(!res.headersSent)res.status(504).json({
				error:'Request timeout'
			});
			if(response.data.destroy)response.data.destroy();
		});
	}catch(error){
		if(!res.headersSent){
			const status=error.response?.status||500;
			const message=error.message;
			res.status(status).json({
				error:'Failed to proxy video',
				message:message,
				code:error.code
			});
		}
	}
}


const PORT=process.env.PORT||4000;
const app=express();
app.use(cors());
app.get('/',(req,res)=>{
	res.send('WebSocket 代理服务运行中 ...');
});
app.get('/video',video_proxy);
const server=app.listen(PORT,()=>{
	console.log(`服务运行端口为 ${PORT}`);
});


const wss=new WebSocket.Server({server});
wss.on('connection',(ws)=>{
	ws.on('message',async(message)=>{
		try{
			const data=JSON.parse(message);
			if(data.type==='fetch'){
				const{url,options}=data.payload;
				try{
					const response=await fetch(url,{
						method:options?.method||'GET',
						headers:options?.headers||{},
						body:options?.body,...options
					});
					const text=await response.text();
					ws.send(JSON.stringify({
						id:data.id,
						type:'fetch-response',
						payload:{
							ok:response.ok,
							status:response.status,
							statusText:response.statusText,
							headers:Object.fromEntries(response.headers.entries()),
							body:text
						}
					}));
				}catch(error){
					console.log("出差了:",error);
					ws.send(JSON.stringify({
						id:data.id,type:'fetch-error',
						payload:{error:error.message}
					}));
				}
			}
		}catch(error){
			console.error('运行时错误:',error);
		}
	});
	ws.on('close',()=>{
		console.log('客户端已断开');
	});
});