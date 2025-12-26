
importScripts('./x.js');

const CN='vapor';
const CC=['/','/index.html','/512.png','/192.png',...'json,woff2,css'.split(',').map(_=>'/o.'+_)];

const csize=async(c)=>{
	const s=await c.keys();
	let o=0;
	for(const k of s){
		const x=await cache.match(k);
		if(!x)continue;
		const b=await x.blob();
		o+=b.size;
	}
	if(o==0)return '0 Bytes';
	const m=['Bytes','KB','MB','GB','TB'];
	const i=Math.floor(Math.log(o)/Math.log(1024));
	return parseFloat((o/Math.pow(1024,i)).toFixed(2))+' '+m[i];
}
const clean=async()=>{
	const s=await caches.keys();
	await Promise.all(s.map(_=>caches.delete(_)));
}

'install'.B(e=>e.waitUntil(caches.open(CN).then(c=>c.addAll(CC)).then(()=>clean()).then(()=>self.skipWaiting()).catch(_=>console.log('SW 安装失败!',_))));
'activate'.B(e=>e.waitUntil(clean().then(()=>self.clients.claim()).catch(_=>console.log('SW 激活失败!',_))));

'fetch'.B(e=>{
	let r=e.request,u=new URL(r.url);
	if(r.method!='GET')return;

	const ia=/\.(js|css|json|png|jpg|svg)$/.test(u.pathname);
	if(ia&&u.hash){
		u.hash='';
		r=new Request(u);
	}
	let cc=/\.(js|css|png|jpg|svg)$/.test(u.pathname);
	if(!((ia&&u.origin==self.location.origin)||(cc&&u.origin!=self.location.origin)))return;
	e.respondWith((async()=>{
		const c=await caches.open(CN),x=await c.match(r);
		if(x)return x;
		try{
			const o=await fetch(r);
			if(o.ok)c.put(r,o.clone());
			return o;
		}catch(_){
			return new Response('网络错误',{status:503});
		}
		const o=await fetch(r);
		if(o.ok)c.put(r,o.clone());
		return o;
	})());
});

'push'.B(e=>{
	let o={};
	console.log(e);
	try{
		o=e.data?e.data.json():{};
	}catch(_){
		o.body=e.data?.text();
	}
	if(!o.body)return;
	e.waitUntil(notify(o));
});

'message'.B(e=>{
	const {title,body,tag,data,notify}=e.data,cc=e.source,id=cc?.id;
	console.log('SW 接收消息:',e.data);
	if(notify)return e.waitUntil(_notify(cc,{tag,title,body}));
/*
	e.waitUntil((async()=>{
		const c=await caches.open(CN),s=await c.keys();
		cc.postMessage({type:'CACHE_INFO',data:{total:s.length,size:await csize(c)}});
	})());
*/
});

'notificationclick'.B(async e=>{
	const n=e.notification,o=n.data||{},a=e.action,url=o.url||'/';
	console.log('SW 通知被点击:',n.tag);
	n.close();
	switch(a){
	case 'view':
		const cs=await self.clients.matchAll({type:'window',includeUncontrolled:true});
		for(const c of cs){
			if(c.url.includes(url)||c.url.includes(self.location.origin)){
				await c.focus();
				return c.navigate?.(url)||c.postMessage({type:'NAVIGATE',url});
			}
		}
		self.clients.openWindow(url);
		break;
	case 'dismiss':
		// 什么都不做
		break;
	default:
		console.log(`SW 未知通知动作: ${a}`);
	}
});

'error'.B(e=>console.error('SW 全局错误:',e.error));

//'unhandledrejection'.B(e=>console.error('SW 未处理的 Promise 拒绝:',e.reason));