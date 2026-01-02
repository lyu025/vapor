
importScripts('./addons/m3u8.js')

// 缓存版本
const VERSION='v1.0.0'

// 缓存名称
const CNAME=`vapor-${VERSION}`

// 代理前缀
const PROXY='https://corsproxy.io';

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
		]).then(()=>console.log('[SW] 安装完成')).catch(_=>console.log(_))
	)
})

// 激活阶段
'activate'.bind(event=>{
	console.log('[SW] 激活中...')
	event.waitUntil(
		Promise.all([
			flush_caches(), // 清理缓存
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

// 网络请求拦截
'fetch'.bind(e=>{
	let r=e.request
	const {hash,origin,pathname}=new URL(r.url)
	// 忽略: 非本地资源 + 非GET请求
	if(r.method!='GET'&&origin==self.location.origin)return
	// 本地资源 忽略非静态资源请求; 图标文件重置请求头
	if(origin==self.location.origin){
		if(!/\.(js|css|json|png|jpg|svg)$/.test(pathname))return
		if(hash&&!pathname=='/assets/icon.svg')r=new Request(pathname)
	}
	// 是否走代理
	const is_proxy=origin==PROXY
	if(r.headers.get('x-up')==='true'&&!is_proxy){
		const h=new Headers(r.headers)
		h.set('Origin',new URL(r.url).origin)
		h.set('Referer',r.url)
		r=new Request(PROXY+'?url='+encodeURIComponent(r.url),{
			duplex:'half',method:r.method,headers:h,body:r.body
		})
	}
	// 返回数据处理
	e.respondWith(
		// 先匹配缓存
		caches.match(r).then(async o=>{
			if(o)return o
			// 无缓存时走常规请求拉数据
			let _=await fetch(r)
			// 如果是走代理的M3U8文件请求，重置返回内容，保证子文件都走代理
			if(is_proxy&&r.url.includes('.m3u8')){
				let text=await (_.clone()).text()
				if(text.includes('#EXTM3U')){
					text=M3U8.proxy(text,r.url,PROXY)
					if(text.startsWith(PROXY)&&text.endsWith('.m3u8')){
						const u=text
						_=await fetch(u)
						text=await (_.clone()).text()
						if(text.includes('#EXTM3U')){
							text=M3U8.proxy(text,u,PROXY)
							const headers=new Headers(Object.fromEntries(_.headers.entries()))
							console.log(`[SW] 已修正M3U8内容: ${u}`)
							return new Response(text,{status:200,statusText:'OK',headers})
						}
						return _
					}
					console.log(`[SW] 已修正M3U8内容: ${r.url}`)
					const headers=new Headers(Object.fromEntries(_.headers.entries()))
					return new Response(text,{status:200,statusText:'OK',headers})
				}
				return _
			}
			// 检查是否需要缓存
			if(r.cache=='no-store')return _
			let nc=false,c_type=r.headers.get('content-type')||''
			// 检查是否匹配缓存模式
			for(let P of PATTERNS)if(P.test(pathname))nc=true
			// 检查内容类型
			if(!nc&&/(text|javascript|image)/.test(c_type))nc=true
			if(!nc)return _
			const cache=await caches.open(CNAME)
			await cache.put(r,_.clone())
			console.log(`[SW] 已缓存: ${r.url}`)
			return _
		})
	)
})

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