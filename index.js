class Page{
	static Pdata={} // 页面数据
	static Ntree={} // 节点树

	constructor(id){
		if(id in Page.Ntree)return toast.error(`页面 <${id}> 已经存在，初始失败`)
		this.id=id

		Page.Ntree[this.id]={}
		Page.Pdata[this.id]={}
		this.$=`#${this.id=='app'?'':'page_'}${this.id}`.node()

		if(this.id!='app'&&!this.$)Page.Ntree.app.main.append(this.$='section'.elem({id:`page_${this.id}`}))
		this.define&&this.define()
		const styles=(this.styles&&this.styles()||[]).map(_=>_.replaceAll('ᝰ','#page_'+this.id).trim()).filter(_=>_)
		if(styles.length>0){
			const $='style'.elem()
			$.textContent=styles.join('\n')
			this.$.append($)
		}
		this.$.append(...this.nodes())
		Page.Ntree[this.id].$=this.$
		this.events&&this.events()
	}
	N(tag,...x){
		const a=x.length>0&&_type(x[0],'object')?x.shift():{};
		const o={},nid=a.id?(this.id+'_'+a.id):null
		if(a.id&&a.id in Page.Ntree[this.id]){
			toast.error(`Tag <${tag}> 创建失败`,`#${this.id}_${a.id} 元素已存在`)
			return null
		}
		if(nid)o.id=nid
		let $,m={a:'active',s:'style',h:'hide',c:'class',click:'onclick'}
		if(tag=='svg'){
			if(!_type(a.path,'string')||a.path.trim()==''){
				toast.error(`Tag <svg> 创建失败`,`引用的图标名称不合法`)
				return null
			}
			for(let k in a)if(k!='id'&&k!='path')o[m[k]||k]=a[k]
			if('f' in a)o.style=(o.style?`${o.style};`:'')+'fill;'+a.f
			const z='http://www.w3.org/2000/svg'
			const u=document.createElementNS(z,'use')
			u.setAttributeNS('http://www.w3.org/1999/xlink','xlink:href','assets/icon.svg#'+a.path.trim())
			$=document.createElementNS(z,'svg')
			$.appendChild(u)
			$.s_attr(o)
		}else{
			for(let k in a)if(k!='id')o[m[k]||k]=a[k]
			$=tag.elem(o)
			for(let n of x)$.append(_type(n,'string')?document.createTextNode(n):n);
		}
		if(a.id)Page.Ntree[this.id][a.id]=$
		return $
	}
	get(){
		let ks=arguments.filter(_=>_.trim()).map(_=>(_=_.trim())&&((_.startsWith('[')?'':'.')+_)).join('')
		try{return eval('Page.Pdata'+(ks.startsWith('[')?'':'.')+ks)}
		catch({message:err}){toast.error('页面数据获取失败!',err)}
		return undefined
	}
	set(v,k,...s){
		const o=this.get(s)
		let ks=s.filter(_=>_.trim()).map(_=>(_=_.trim())&&((_.startsWith('[')?'':'.')+_)).join('')
		if(!(_type(k,'number')&&_type(o,'array'))||!_type(o,'object'))return toast.error('页面数据设置失败','路径: Page.Pdata'+(ks.startsWith('[')?'':'.')+ks+`(${k})`)
		o[k]=v
	}
	E(id){
		return Page.Ntree[this.id][id]
	}
	style(_){
		this.$.append(Page.Ntree[this.id].style='style'.elem(_.join('')));
	}
	cache(){
		if(arguments.length==2){
			const [k,v]=arguments
			localStorage.setItem(k,v)
		}else return localStorage.getItem(arguments[0])
	}
	copy(_,x){
		const $='textarea'.elem()
		document.body.appendChild($)
		$.value=_
		$.select()
		$.setSelectionRange(0,$.value.length)
		try{
			const o=document.execCommand('copy')
			if(o)toast.success(x+'已复制到剪切板!')
		}catch({message:err}){
			toast.error(x+'复制到剪切板失败',err)
		}finally{$.remove()}
	}
	tclass(e,c){
		e.classList[e.classList.contains(c)?'remove':'add'](c)
	}
	script(_,onload){
		if(`script[src='${_}']`.node())return eval(onload)
		'head'.node().append('script'.elem('',{src:_,onload}))
	}
}
class App extends Page{
	static name='vapor'
	static #o=null;
	static open(){
		if (!this.#o)this.#o=new App();
		return this.#o
	}
	static pages={}
	static menus={
		home:'首页',video:'影视天地',music:'音乐天地',
		radio:'广播电台',news:'新闻天地',article:'美文欣赏',
		books:'科学书城',trans:'文本翻译',erate:'货币汇率',
		trade:'交易市场',path:'定位导航',ai:'人工智能',
		game:'益智游戏',weather:'天气预报',store:'应用市场',
		img:'图片处理',ocr:'在线识别',tools:'文本工具',
		record:'私人日记',setting:'系统设置',
	};
	define(){
		this.install_prompt=null
		this.page=this.cache('page')||'home'
		this.theme=this.cache('theme')||'dark'
		this.use_proxy=this.cache('use_proxy')==='1'
	}
	constructor(){
		if(App.#o)return
		super('app')
		this.$.s_attr({theme:this.theme})
		;`meta[name='theme-color']`.node().s_attr({content:this.theme=='dark'?'#000':'#fff'})
		if(!navigator||!navigator.serviceWorker)return toast.error('系统不支持SW')
		this.E('main').innerHTML=`<svg viewBox='0 0 50 50'><defs><linearGradient id='svg_loader' x1='0%' y1='0%' x2='100%' y2='100%'><stop offset='0%' stop-color='#60A5FA' stop-opacity='0.2'></stop><stop offset='50%' stop-color='#60A5FA' stop-opacity='0.8'></stop><stop offset='100%' stop-color='#60A5FA' stop-opacity='0.2'></stop><animate attributeName='x1' values='0%;100%;0%' dur='3s' repeatCount='indefinite'></animate></linearGradient></defs><g><path d='M15,15 L35,15 L35,35 L15,35 Z' fill='none' stroke='url(#svg_loader)' stroke-width='2'><animateTransform attributeName='transform' type='rotate' from='0 25 25' to='360 25 25' dur='3s' repeatCount='indefinite'></animateTransform></path><path d='M10,20 L30,20 L30,40 L10,40 Z' fill='none' stroke='url(#svg_loader)' stroke-width='2' opacity='0.5'><animateTransform attributeName='transform' type='rotate' from='360 25 25' to='0 25 25' dur='3s' repeatCount='indefinite'></animateTransform></path></g></svg>`
		this.loader=this.E('main').node('svg').s_attr('hide')
		this.jump_to(this.page)
		setTimeout(()=>this.E('wait').d_attr('hide'),1000)
	}
	nodes(){
		return[
			Page.Ntree[this.id].wait='wait'.elem(`<svg viewBox='0 0 50 50'><path d='M25,5 a20,20 0 1,1 -20,20' stroke='#3498db' stroke-width='1' fill='none' stroke-linecap='round'><animate attributeName='stroke-dasharray' values='10,60;60,10;10,60' dur='1.5s' repeatCount='indefinite'/><animateTransform attributeName='transform' type='rotate' from='0 25 25' to='360 25 25' dur='1s' repeatCount='indefinite'/></path></svg>载入中...`),
			this.N('header',
				this.N('svg',{path:'menu',id:'n_menu',click:'Vapor.toggle("menu",this)'}),
				this.N('div',{id:'title'},'...'),
				this.N('svg',{path:'download',id:'install',click:'Vapor.install()',h:true}),
				this.N('svg',{path:'clean',click:'Vapor.clean()'}),
				this.N('svg',{path:`proxy_${this.use_proxy?'on':'off'}`,click:'Vapor.toggle("proxy",this)'}),
				this.N('svg',{path:'theme',click:'Vapor.toggle("theme",this)'}),
			),
			this.N('nav',{id:'menu'},
				this.N('div',{c:'top'},
					this.N('img',{src:'assets/192.png'}),
					this.N('div',this.N('h2',fucase(App.name)),this.N('div',this.N('br'),'v-1.0.0'))
				),
				this.N('div',{c:'core'},...Object.keys(App.menus).map(p=>this.N('div',{p,a:p==this.page,click:'Vapor.jump_to(this)'},this.N('svg',{path:p}),App.menus[p]))),
			),
			this.N('main',{id:'main'}),
			this.N('footer',{id:'footer'},...['home','img','record','news','setting'].map(p=>this.N('div',{p,a:p==this.page,click:'Vapor.jump_to(this,true)'},this.N('svg',{path:p}),App.menus[p]))),
			this.N('div',{id:'toast'}),
		];
	}
	events(){
		'error'.bind(e=>{
			e.preventDefault()
			let t=e.message.split('Error: ')
			const m={Reference:'引用',Syntax:'语法',Type:'类型',Range:'范围',URI:'URI',Aggregate:'聚合',Internal:'内部'}
			t=m[t[0].split(' ').pop()]+'错误: '+t[1];
			let f=e.filename.includes(location.origin+'/')?e.filename.split(location.origin+'/').pop():e.filename;
			toast.error(t,f,e.lineno||e.colno?`行 ${e.lineno} / 列 ${e.colno}`:null);
		})
		'unhandledrejection'.bind(e=>{
			e.preventDefault()
			const {message,stack}=e.reason
			toast.error(...(stack||'').replaceAll(location.origin+'/','').replaceAll(' ','&nbsp;').split('\n')));
		})
		'beforeinstallprompt'.bind(e=>{
			e.preventDefault()
			this.install_prompt=e
			this.E('install').d_attr('hide')
		})
		setTimeout(()=>{
			this.E('wait').style.opacity=0
			setTimeout(()=>this.E('wait').remove(),300)
		},1600)
	}
	toggle(t,e){
		if(t=='menu')this.tclass(this.E('menu'),'open')
		else if(t=='proxy'){
			this.cache('use_proxy',(this.use_proxy=!this.use_proxy)?'1':'0');
			e.firstChild.s_attr({'xlink:href':this.use_proxy?'assets/icon.svg#proxy_on':'assets/icon.svg#proxy_off'});
		}else if(t=='theme'){
			this.theme=this.theme=='dark'?'light':'dark'
			this.cache('theme',this.theme)
			this.$.s_attr({theme:this.theme})
			;`meta[name='theme-color']`.node().s_attr({content:this.theme=='dark'?'#000':'#fff'})
		}
	}
	install(e){
		if(!this.install_prompt)return
		this.install_prompt.prompt()
		this.install_prompt.userChoice.then(_=>{
			if(_.outcome!='accepted')return
			this.install_prompt=null
			e.remove()
		})
	}
	async clean(){
		const r=await navigator.serviceWorker.ready
		r.active.postMessage({
			type:'CLEAR_CACHE',
			timestamp:new Date().toISOString()
		})
	}
	jump_to(e,quite=false){
		let p=_type(e,'string')?e:e.g_attr('p')
		if(p==this.page&&this.E('title').innerText.trim()!='...')return
		this.loader.d_attr('hide')
		this.cache('page',this.page=p);
		this.E('footer').childNodes.forEach(_=>_[_.g_attr('p')==p?'s_attr':'d_attr']('active'))
		this.E('menu').nodes('.core>*').forEach(_=>_[_.g_attr('p')==p?'s_attr':'d_attr']('active'))
		this.E('title').innerHTML=App.menus[p]
		this.E('menu').classList.remove('open')
		this.E('main').nodes('section').forEach(_=>_[_.id==('page_'+this.page)?'d_attr':'s_attr']('hide'))
		if(!(p in App.pages))this.script(`pages/${p}.js`,`App.pages.${p}=${fucase(p)}.open()`)
		setTimeout(()=>this.loader.s_attr('hide'),1000)
	}
}

'DOMContentLoaded'.bind(()=>(window.Vapor=App.open()),document)
'load'.bind(async()=>{
	try{
		const r=await navigator.serviceWorker.register('sw.js',{updateViaCache:'none'})
		'message'.bind(e=>{
			const {type,message,data}=e.data
			switch(type){
				case 'SW_NET_ERROR':
					toast.error('网络请求失败',message,data)
					break
				case 'SW_C_SET_ERR':
					toast.error('缓存添加失败',data)
					break
				case 'SW_C_UPDATE_ERR':
					toast.error('缓存更新失败',data)
					break
				case 'SW_C_SET_ERR':
					toast.error('缓存添加失败',data)
					break
				case 'SW_C_CLEAR_OK':
					toast.success('缓存已清空')
					setTimeout(()=>location.reload(),900)
					break
				case 'SW_UPDATED':
					toast.success('缓存已更新')
					//setTimeout(()=>location.reload(),900)
					break
			}
		},navigator.serviceWorker);
		setInterval(()=>r.update(),2000);
	}catch(_){toast.error('SW 注册失败',_)}
});



/*
class O{
	constructor(){
		this.app_name='vapor';
		
		this.render();
		this.catcher();
		this.observer();
		if(!navigator||!navigator.serviceWorker)return;
		this.db_init().then(()=>{
			this.X={};
			this.events();
			this.jump_to(`nav>.core>[p='${this.page}']`.N());
		}).catch(e=>this.toast(`初始数据库异常: ${e.message}`,'error'));
	}
	async db_init(){
		return new Promise(async(res,rej)=>{
			const SQL=await initSqlJs({
				locateFile:f=>`https://cdnjs.cloudflare.com/ajax/libs/sql.js/1.13.0/${f}`
			});
			const r=indexedDB.open(this.app_name,1);
			r.onupgradeneeded=e=>{
				const db=e.target.result;
				if(!db.objectStoreNames.contains('sqlite'))db.createObjectStore('sqlite',{keyPath:'name'});
			};
			r.onsuccess=e=>{
				const db=e.target.result;
				const t=db.transaction(['sqlite'],'readonly');
				const s=t.objectStore('sqlite'),rr=s.get('.');
				rr.onsuccess=_=>{
					const x=_.target.result;
					if(x&&x.o&&x.o instanceof Uint8Array){
						this.db=new SQL.Database(x.o);
					}else this.db=new SQL.Database();
					this.db.exec('VACUUM'); // 执行VACUUM压缩数据库
					this.db.exec('REINDEX'); // 重建索引
					this.db.exec('ANALYZE'); // 更新统计信息
					// 调整PRAGMA设置
					this.db.exec('PRAGMA journal_mode = WAL');
					this.db.exec('PRAGMA synchronous = NORMAL');
					this.db.exec('PRAGMA cache_size = -2000'); // 2MB缓存
					res(null);
				};
				rr.onerror=()=>rej(rr.error);
			};
			r.onerror=()=>reject(r.error);
		});
	}
	db_free(){
		try{
			this.db.exec('PRAGMA shrink_memory');
			if(window.gc)window.gc();
		}catch(e){
			this.toast(`数据库释放内存异常: ${e.message}`,'error');
			throw e;
		}
	}
	async db_sync(){
		return new Promise((res,rej)=>{
			const o=this.db.export();
			const r=indexedDB.open(this.app_name,1);
			r.onsuccess=e=>{
				const db=e.target.result;
				const t=db.transaction(['sqlite'],'readwrite');
				const s=t.objectStore('sqlite');
				const rr=s.put({name:'.',o});
				rr.onsuccess=()=>res();
				rr.onerror=()=>rej(rr.error);
			};
			r.onerror=()=>rej(r.error);
		});
	}
	db_table(n,o){
		try{
			this.db.exec(`CREATE TABLE IF NOT EXISTS ${n}(${o});`);
		}catch(e){
			this.toast(`数据库操作异常: ${e.message}`,'error');
			throw e;
		}
	}
	db_get(_,v=[],one=true,field=null){
		try{
			const s=this.db.prepare(_);
			if(v&&v.length>0)s.bind(v);
			const cs=s.getColumnNames(),o=[];
			while(s.step()){
				const x={},r=s.get();
				cs.forEach((n,i)=>(x[n]=r[i]));
				o.push(x);
			}
			s.free();
			if(!one)return o;
			if(o.length<1)return null;
			return field?o[0][field]:o[0];
		}catch(e){
			this.toast(`数据库查询失败: ${e.message}`,'error');
			throw e;
		}
	}
	async db_set(_,v=[]){
		try{
			const s=this.db.prepare(_);
			if(v&&v.length>0)s.bind(v);
			s.step();
			const a=this.db.getRowsModified();
			const b=this.db.exec('SELECT last_insert_rowid()')[0]?.values[0]?.[0];
			s.free();
			await this.db_sync();
			return [a,b];
		}catch(e){
			this.toast(`数据库更新失败: ${e.message}`,'error');
			throw e;
		}
	}
	async db_page(_,v=[],p=1,s=20){
		try{
			const t=parseInt(this.db_get(`SELECT COUNT(*) as o FROM (${_})`,v,true,'o'));
			const list=this.db_get(`${_} LIMIT ? OFFSET ?`,[...v,s,(p-1)*s],false);
			return {list,_:[t,Math.ceil(t/s)]};
		}catch(e){
			this.toast(`分页查询失败: ${e.message}`,'error');
			throw e;
		}
	}
	observer(){
		const ov=new IntersectionObserver((s,o)=>{
			let $=null,mf,p;
			for(let e of s)if(e.target.parentNode&&e.target.parentNode.classList.contains('grid')&&(e.intersectionRatio>=0.7)){
				o.unobserve($=e.target);
				p=$.parentNode.getAttribute('p');
				mf=$.parentNode.getAttribute('more');
				break;
			}
			if(mf&&/^\d+$/.test(p))eval(mf+'(null,'+p+')');
		},{threshold:0.7});
		const oi=new IntersectionObserver((s,o)=>{
			for(let e of s)if((e.target.nodeName=='IMG')&&(e.intersectionRatio>=0.7)){
				const sa=e.target.getAttribute('src'),sb=e.target.getAttribute('s');
				if(sb&&sa!=sb){
					e.target.setAttribute('src',sb);
					e.target.setAttribute('_','');
					o.unobserve(e.target);
				}
			}
		},{threshold:0.7});
		const oo=new MutationObserver(s=>{
			for(let e of s){
				const $s=Array.from(e.addedNodes);
				const x=e.target.classList.contains('grid');
				if(!(x&&$s.length>0))continue;
				const $=$s[$s.length-1];
				$s.map(_=>_.querySelector('img[s]:not(img[_])')).forEach(_=>_?oi.observe(_):null);
				ov.observe($);
			}
		});
		oo.observe(document.body,{subtree:true,childList:true,attributeFilter:['_']});
	}
	script(_,onload){
		if(`script[src='${_}']`.N())return eval(onload);
		'head'.N().append('script'.E('',{src:_,onload}));
	}
	
}
*/