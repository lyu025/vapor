const express=require('express');
const WebSocket=require('ws');
const axios=require('axios');
const cors=require('cors');
const https=require('https');
const helmet=require('helmet');
const morgan=require('morgan');
const ffmpeg=require('fluent-ffmpeg');
const rateLimit=require('express-rate-limit');

const httpsAgent=new https.Agent({
	rejectUnauthorized:false // 关闭SSL验证
});

const PORT=process.env.PORT||4000;

const app=express();

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(morgan('combined'));
app.use((err,req,res,next)=>{
	res.status(500).json({
		error:'服务器内部错误',
		message:err.message
	});
});
const vlimiter=rateLimit({
	windowMs:15*60*1000,max:50,
	message:'视频转格请求超额'
});
class VQ{
	constructor(mc=3){
		this.queue=[];
		this.active=0;
		this.mc=mc;
	}
	async add(task){
		return new Promise((resolve,reject)=>{
			this.queue.push({task,resolve,reject});
			this.run();
		});
	}
	async run(){
		if(this.active>=this.mc||this.queue.length===0)return;
		this.active++;
		const{task,resolve,reject}=this.queue.shift();
		try{
			const result=await task();
			resolve(result);
		}catch(error){
			reject(error);
		}finally{
			this.active--;
			this.run();
		}
	}
}
const cqueue=new VQ();
const vcache=new Map();
const CACHE_DURATION=300000;//5分钟
async function get_vinfo(url){
	const key=`info:${url}`;
	if(vcache.has(key)){
		const o=vcache.get(key);
		if(Date.now()-o.timestamp<CACHE_DURATION)return o.data;
	}
	const info=await axios.head(url,{
		timeout:5000,httpsAgent,
		headers:{'User-Agent':'Video-Service/1.0'}
	}).catch(()=>null);
	const vinfo={
		url,
		ctype:info?.headers['content-type']||'unknown',
		contentLength:info?.headers['content-length'],
		range:info?.headers['accept-ranges']==='bytes',
		lastModified:info?.headers['last-modified']
	};
	vcache.set(key,{
		data:vinfo,
		timestamp:Date.now()
	});
	return vinfo;
}

app.get('/',(req,res)=>{
	res.send('WebSocket 代理服务运行中 ...');
});
app.get('/video/opt',vlimiter,async(req,res)=>{
	try{
		const{u,q='auto'}=req.query;
		const url=u?decodeURIComponent(u):null;
		const ua=req.headers['user-agent']||'';
		if(!url)return res.status(400).json({error:'视频链接不合法!'});
		const vinfo=await get_vinfo(url);
		const ctype=vinfo.ctype.toLowerCase();
		let nc=false,to='mp4';
		if(ua.includes('Safari')&&!ua.includes('Chrome')){
			to='mp4';
			nc=!ctype.includes('mp4');
		}else if(ua.includes('Firefox')){
			to='webm';
			nc=!ctype.includes('webm');
		}else{
			to='mp4';
			nc=!ctype.includes('mp4')&&!ctype.includes('webm');
		}
		if(ctype.includes('mpegurl')||ctype.includes('x-mpegurl')){
			nc=true;
			to='mp4';
		}
		if(ctype.includes('x-flv')){
			nc=true;
			to='mp4';
		}
		
		console.log(url, nc, to, vinfo);
		if(!nc){
			const rep=await axios({
				method:'GET',url,httpsAgent,responseType:'stream',
				headers:{
					'User-Agent':'Video-Proxy/1.0',
					'Accept':'*/*'
				}
			});
			res.set({
				'Content-Type':vinfo.ctype,
				'Cache-Control':'public, max-age=3600',
				'Accept-Ranges':vinfo.range?'bytes':'none'
			});
			rep.data.pipe(res);
			return;
		}
		await cqueue.add(async()=>{
			const rep=await axios({
				method:'GET',url,httpsAgent,
				responseType:'stream',
				headers:{'User-Agent':'Video-Converter/1.0'}
			});
			res.set({
				'Content-Type':to==='mp4'?'video/mp4':'video/webm',
				'Transfer-Encoding':'chunked',
				'Cache-Control':'public, max-age=7200'
			});
			const cmd=ffmpeg(rep.data);
			if(to==='mp4'){
				cmd.format('mp4')
					.videoCodec('libx264')
					.audioCodec('aac')
					.outputOptions([
						'-movflags +faststart',
						'-preset faster',
						'-crf 23'
					]);
			}else if(to==='webm'){
				cmd.format('webm')
					.videoCodec('libvpx-vp9')
					.audioCodec('libopus')
					.outputOptions([
						'-deadline realtime',
						'-cpu-used 4',
						'-b:v 1M',
						'-b:a 128k'
					]);
			}
			if(q!=='auto'){
				const qm={
					'l':{videoBitrate:'500k',audioBitrate:'64k'},
					'm':{videoBitrate:'1000k',audioBitrate:'128k'},
					'h':{videoBitrate:'2500k',audioBitrate:'192k'}
				};
				const x=qm[q]||qm.m;
				cmd.videoBitrate(x.videoBitrate).audioBitrate(x.audioBitrate);
			}
			const stream=cmd.pipe();
			stream.pipe(res);
			return new Promise((resolve,reject)=>{
				stream.on('end',resolve);
				stream.on('error',reject);
				req.on('close',()=>{
					cmd.kill();
					resolve();
				});
			});
		});
	}catch(error){
		if(!res.headersSent){
			res.status(500).json({
				error:'视频转格失败',
				message:error.message
			});
		}
	}
});
app.get('/video/stats',(req,res)=>{
	res.json({
		queue_length:cqueue.queue.length,
		active_conversions:cqueue.active,
		max_concurrent:cqueue.mc,
		cache_size:vcache.size,
		uptime:process.uptime()
	});
});

const server=app.listen(PORT,()=>{
	console.log(`服务运行端口为 ${PORT}`);
});

const wss=new WebSocket.Server({server});
wss.on('connection',(ws)=>{
	console.log('New client connected');
	ws.on('message',async(message)=>{
		try{
			const data=JSON.parse(message);
			if(data.type==='fetch'){
				const{url,options}=data.payload;
				try{
					const response=await fetch(url,{
						method:options?.method||'GET',
						headers:options?.headers||{},
						body:options?.body,
						...options
					});
					const text=await response.text();
					ws.send(JSON.stringify({
						id:data.id,type:'fetch-response',
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
			console.error('Error processing message:',error);
		}
	});
	ws.on('close',()=>{
		console.log('Client disconnected');
	});
});