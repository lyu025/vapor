const express=require('express');
const WebSocket=require('ws');

const app=express();
app.get('/',(req,res)=>{
	res.send('WebSocket Proxy Server is running');
});

const PORT = process.env.PORT || 4000;
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
						type:'fetch-error',
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