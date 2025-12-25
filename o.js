const express=require('express');
const WebSocket=require('ws');
const axios=require('axios');

const PORT=process.env.PORT||4000;

const app=express();

app.get('/',(req,res)=>{
	res.send('WebSocket Proxy Server is running');
});
app.get('/proxy',async(req,res)=>{
	try{
		const{url}=req.query;
		if(!url)return res.status(400).json({error:'URL parameter is required'});
		//使用 responseType:'stream'获取流
		const response=await axios({
			method:'GET',url,responseType:'stream',timeout:10000,
			headers:{
				'User-Agent':req.headers['user-agent']||'Express Proxy/1.0'
			}
		});
		//设置响应头
		Object.keys(response.headers).forEach(key=>{
			if(!['connection','content-encoding'].includes(key.toLowerCase())){
				res.setHeader(key,response.headers[key]);
			}
		});
		//添加代理信息头
		res.setHeader('X-Proxy-By','Express Proxy');
		res.setHeader('X-Original-Status',response.status);
		//管道传输
		response.data.pipe(res);
		//错误处理
		response.data.on('error',(err)=>{
			console.error('Stream error:',err);
			if(!res.headersSent){
				res.status(500).json({error:'Stream error',message:err.message});
			}
		});
	}catch(error){
		console.error('Proxy error:',error.message);
		if(error.response){
			res.status(error.response.status);
			if(error.response.data&&typeof error.response.data.pipe==='function'){
				error.response.data.pipe(res);
			}else{
				res.json({
					error:'Request failed',
					status:error.response.status,
					message:error.response.statusText
				});
			}
		}else{
			res.status(500).json({
				error:'Failed to fetch URL',
				message:error.message 
			});
		}
	}
});


const server=app.listen(PORT,()=>{
	console.log(`Server running on port ${PORT}`);
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