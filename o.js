const express=require('express');
const WebSocket=require('ws');
const axios=require('axios');
const https=require('https');
const http=require('http');
const {URL}=require('url');
const cors=require('cors');

function get_agent(url,options={}){
	const u=new URL(url);
	const x=u.protocol==='https:';
	const ops={
		rejectUnauthorized:false,//跳过SSL验证
		keepAlive:true,maxSockets:50,timeout:30000,
		...options
	};
	return x?new https.Agent(ops):new http.Agent(ops);
}
async function video_proxy(req,res,next){
	try{
		const url=req.query.url||req.body.url;
		if(!url)return res.status(400).json({error:'视频链接不能为空'});
		let u;
		try{u=new URL(url)}catch(error){
			return res.status(400).json({error:'视频链接不合法'});
		}
		if(!['http:','https:'].includes(u.protocol))return res.status(400).json({error:'Only HTTP and HTTPS protocols are supported'});
		const headers={
			'User-Agent':'Video-Proxy/1.0','Accept':'*/*',
			'Accept-Encoding':'identity',//避免压缩视频
		};
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
		response.data.pipe(res);
		response.data.on('error',(error)=>{
			console.error('Video stream error:',error.message);
			if(!res.headersSent){
				res.status(500).json({error:'Stream error',message:error.message});
			}else{
				res.end();//如果头部已经发送，只能结束响应
			}
		});
		req.on('close',()=>(response.data.destroy)&&response.data.destroy());
		//请求超时处理
		req.setTimeout(120000,()=>{
			if(!res.headersSent)res.status(504).json({error:'Request timeout'});
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