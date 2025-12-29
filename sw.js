
// 缓存版本
const VERSION='v1.0.0'

// 缓存名称
const CNAME=`vapor-${VERSION}`

// 代理前缀
const PROXY='https://corsproxy.io/';

// 预缓存资源（关键路径）
const ASSETS=[
	'/',
	'/index.html',
	'/mf.json',
	'/sw.js',
	'/index.js',
	'/addons/tools.js',
	'/assets/icon.svg',
	'/assets/512.png',
	'/assets/192.png',
	'/assets/style.css',
]


// 运行时缓存资源（匹配模式）
const PATTERNS=[
	/\.js$/,
	/\.(woff|woff2|eot|ttf|otf)$/,
	/\.(png|jpg|jpeg|gif|svg|ico|webp)$/,
]

// 绑定事件
String.prototype.bind=function(_){self.addEventListener(this,_)}

'install'.bind(event=>{
	console.log(`[SW] 安装版本: ${VERSION}`)
	event.waitUntil(
		Promise.all([ // 预缓存关键资源
			caches.open(CNAME).then(c=>c.addAll(ASSETS)),
			self.skipWaiting() // 立即激活
		]).then(()=>console.log('[SW] 安装完成'))
	)
})

// 激活阶段
'activate'.bind(event=>{
	console.log('[SW] 激活中...')
	event.waitUntil(
		Promise.all([
			flush_caches(), // 清理缓存
			files_watcher(), // 文件监听
			self.clients.claim() // 控制所有客户端
		]).then(()=>{
			console.log('[SW] 已激活并控制客户端')
			nofify_to_update() // 通知客户端更新
		})
	)
})


// 清理缓存
async function flush_caches(){
	const keys=(await caches.keys()).filter(k=>k.startsWith('Vapor-')&&k!==CNAME)
	return Promise.all(
		keys.map(_=>{
			console.log(`[SW] 删除旧缓存: ${_}`)
			return caches.delete(_)
		})
	)
}

// 文件监听
async function files_watcher(){
	console.log("------");
	
}

// 网络请求拦截
'fetch'.bind(e=>{
	let r=e.request
	const {hash,origin,pathname}=new URL(r.url)
	if(r.method!='GET'&&origin==self.location.origin)return
	if(origin==self.location.origin){
		if(!/\.(js|css|json|png|jpg|svg)$/.test(pathname))return
		if(hash&&!pathname=='/assets/icon.svg')r=new Request(pathname)
	}
	const is_proxy=origin==PROXY;
	if(r.headers.get('x-up')==='true'&&!is_proxy)r=new Request(PROXY+'?url='+encodeURIComponent(r.url),{
		duplex:'half',method:r.method,headers:r.headers,body:r.body
	})
	e.respondWith(
		caches.match(r).then(o=>{
			if(o)return o
			return fetch(r).then(async _=>{
				if(_.ok&&r.url.includes('.m3u8')){
					let o=_.clone()
					let text=await (_.clone()).text();
					if(text.includes('#EXTM3U')){
						text=M3U8.proxy(text,req.url,PROXY)
						return new Response(text,{status:_.status,statusText:_.statusText,headers:_.headers})
					}
					return _
				}
				// 检查是否需要缓存
				const cache=await caches.open(CNAME)
				if(should_cache_req(r,o))await cache_req(e.clientId,cache,r,o)
				return _
			}).catch(async({message:err})=>{
				const c=await self.clients.get(e.clientId)
				if(c)c.postMessage({
					type:'SW_NET_ERROR',
					message:err,data:r.url,
					timestamp:Date.now()
				})
				return new Response('',{
					status:503,
					statusText:'Service Unavailable',
					headers:{'Content-Type':'text/plain'}
				})
			})
		})
	)
})

function should_cache_req(req,rep){
	if(!rep||rep.status!==200)return false
	const {pathname}=new URL(req.url)
	const c_type=rep.headers.get('content-type')||''
	// 检查是否匹配缓存模式
	for(let P of PATTERNS)if(P.test(pathname))return true
	// 检查内容类型
	if(/(text|javascript|image)/.test(c_type))return true
	return false
}

async function cache_req(id,cache,req,rep){
	try{
		await cache.put(req,rep)
		console.log(`[SW] 已缓存: ${req.url}`)
	}catch({message:err}){
		const c=await self.clients.get(id);
		if(c)c.postMessage({
			type:'SW_C_SET_ERR',
			message:err,data:req.url,
			timestamp:Date.now()
		})
		console.warn(`[SW] 缓存失败: ${req.url}`,err)
	}
}

// 发送更新通知给客户端
function nofify_to_update(){
	self.clients.matchAll().then(clients=>{
		clients.forEach(c=>{
			c.postMessage({
				type:'SW_UPDATED',
				version:VERSION,
				timestamp:new Date().toISOString()
			})
		})
	})
}

// 监听消息
'message'.bind(event=>{
	console.log('[SW] 收到消息:',event.data)

	switch(event.data.type){
		case 'SKIP_WAITING':
			self.skipWaiting()
			break
		case 'UPDATE_CACHE':
			update_cache(event)
			break
		case 'CLEAR_CACHE':
			caches.delete(CNAME)
			event.source.postMessage({
				type:'SW_C_CLEAR_OK',
				timestamp:Date.now()
			})
			break
	}
})

// 更新缓存
async function update_cache(event){
	console.log('[SW] 手动更新缓存...')

	const cache=await caches.open(CNAME)
	for(const url of ASSETS){
		try{
			const rep=await fetch(url)
			if(rep.ok)await cache.put(url,rep)
		}catch({message:err}){
			event.source.postMessage({
				type:'SW_C_UPDATE_ERR',
				message:err,data:req.url,
				timestamp:Date.now()
			})
			console.warn(`[SW] 更新 ${url} 失败:`,err)
		}
	}
}

'notificationclick'.bind(async event=>{
	const o=event.notification,action=event.action,data=o.data||{},url=data?.url||'/';
	console.log('SW 通知被点击:',o.tag);
	o.close();
	switch(action){
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
		console.log(`SW 未知通知动作: ${action}`);
	}
})

/*
'error'.bind(event=>console.error('SW 全局错误:',event.error))
'unhandledrejection'.bind(event=>console.error('SW 未处理的 Promise 拒绝:',event.reason))
*/