const localtunnel=require('localtunnel');
const express=require('express');
const path=require('path');

const app=express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static('o'));
app.use((req,res,next)=>{
	res.header('Access-Control-Allow-Origin','*');
	res.header('Access-Control-Allow-Headers','*');
	res.header('Access-Control-Allow-Methods','*');
	if(req.method==='OPTIONS')return res.sendStatus(200);
	next();
});
app.get('/',(req,res)=>res.sendFile(path.join(__dirname,'o','o.html')));
app.post('/fetch',async(req,res)=>{
	const{url,body,headers,method,otype}=req.body,x={method};
	if(body)x.body=body;
	if(headers)x.headers=headers;
	let e=null,o=await fetch(url,x).catch(_=>(e=_.message));
	if(e){
		console.log(11,url,e);
		return res.json({ok:false,e:'请求异常: '+e});
	}
	if(otype=='json'){
		const x=await o.text();
		if(!/^\s*(\{.*\}|\[.*\])\s*$/.test(x))return res.json({ok:false,e:'请求返回数据Json解析异常!'});
		o=JSON.parse(x);
	}else if(otype=='buffer')o=await o.arrayBuffer();
	else o=await o.text();
	
	res.json({ok:true,o});
});
app.listen(3000,async()=>{
	//const t=await localtunnel({port:3000,subdomain:'vapor'});
	//console.log(`项目地址: ${t.url}`);
	//t.on('close',()=>console.log('Tunnel closed'));
});