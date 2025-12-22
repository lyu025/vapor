class O{
	constructor(){
		this.app_name='vapor';
		this.page=localStorage.getItem('page')||'home';
		this.theme=localStorage.getItem('theme')||'dark';
		this.P={
			home:'首页',video:'影视天地',music:'音乐天地',
			radio:'广播电台',news:'新闻天地',article:'美文欣赏',
			books:'科学书城',trans:'文本翻译',erate:'货币汇率',
			trade:'交易市场',path:'定位导航',ai:'人工智能',
			game:'益智游戏',weather:'天气预报',store:'应用市场',
			img:'图片处理',ocr:'在线识别',tools:'文本工具',
			record:'私人日记',setting:'系统设置',
		};
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
	catcher(){
		window.addEventListener('error',e=>{
			let m=e.message.split('Error: ');
			const x={Reference:'引用',Syntax:'语法',Type:'类型',Range:'范围',URI:'URI',Aggregate:'聚合',Internal:'内部'};
			m=x[m[0].split(' ').pop()]+'错误: '+m[1];
			let f=e.filename.includes(':3000/')?e.filename.split(':3000/').pop():e.filename;
			if(f)f=`<br><br> > ${f}`;
			this.toast(`${m}${f}<br><br> > 行 ${e.lineno} / 列 ${e.colno}`,'error');
			e.preventDefault();
		});
		window.addEventListener('unhandledrejection',e=>{
			this.toast(`未处理的 Promise 拒绝<br><br> > ${e.reason}`,'error');
			e.preventDefault();
		});
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
	render(){
		this.V='body'.N();
		this.V.setAttribute('theme',this.theme);
		`meta[name='theme-color']`.N().setAttribute('content',this.theme=='dark'?'#000':'#fff');
		this.V.innerHTML=`
<wait>
	<svg viewBox='0 0 50 50'>
		<path d='M25,5 a20,20 0 1,1 -20,20' stroke='#3498db' stroke-width='1' fill='none' stroke-linecap='round'>
			<animate attributeName='stroke-dasharray' values='10,60;60,10;10,60' dur='1.5s' repeatCount='indefinite'/>
			<animateTransform attributeName='transform' type='rotate' from='0 25 25' to='360 25 25' dur='1s' repeatCount='indefinite'/>
		</path>
	</svg>载入中...
</wait>
<app>
	<header>${'menu'.V('toggle_menu')}<div id='ptitle'></div>${'download'.V('install_app',{c:'hide',id:'install_app'})}${'clean'.V('clear_cache')}${'theme'.V('toggle_theme')}</header>
	<nav><div class='top'><img src='192.png'/><div><h2>Vapor</h2><div><br>1.0.0</div></div></div><div class='core'></div></nav>
	<main>
		<svg viewBox='0 0 50 50'>
			<defs>
				<linearGradient id='svg_loader' x1='0%' y1='0%' x2='100%' y2='100%'>
					<stop offset='0%' stop-color='#60A5FA' stop-opacity='0.2'></stop>
					<stop offset='50%' stop-color='#60A5FA' stop-opacity='0.8'></stop>
					<stop offset='100%' stop-color='#60A5FA' stop-opacity='0.2'></stop>
					<animate attributeName='x1' values='0%;100%;0%' dur='3s' repeatCount='indefinite'></animate>
				</linearGradient>
			</defs>
			<g>
				<path d='M15,15 L35,15 L35,35 L15,35 Z' fill='none' stroke='url(#svg_loader)' stroke-width='2'>
					<animateTransform attributeName='transform' type='rotate' from='0 25 25' to='360 25 25' dur='3s' repeatCount='indefinite'></animateTransform>
				</path>
				<path d='M10,20 L30,20 L30,40 L10,40 Z' fill='none' stroke='url(#svg_loader)' stroke-width='2' opacity='0.5'>
					<animateTransform attributeName='transform' type='rotate' from='360 25 25' to='0 25 25' dur='3s' repeatCount='indefinite'></animateTransform>
				</path>
			</g>
		</svg>
		<section id='home'>
			<card><h2>嗨！我是 Vapor</h2><p class='row'>这是一个轻量级但功能全面的PWA应用</p></card>
			<card><h2>${'state'.V()}系统状态</h2>
				<div class='row'>
					<div><label>网络状态:</label><span id='state_net'>检查中...</span></div>
					<div><label>系统缓存:</label><span id='state_cache'>检查中..</span></div>
					<div><label>设备震动:</label><span id='state_vibrate'>检查中..</span></div>
					<div><label>设备定位:</label><span id='state_location'>检查中..</span></div>
					<div><label>系统推送:</label><span id='state_push'>检查中..</span></div>
					<div><label>占用内存:</label><span id='state_memory'>检查中..</span></div>
					<div><label>占用缓存:</label><span id='state_storage'>检查中..</span></div>
				</div>
			</card>
			<card><h2>${'system'.V()}更多信息</h2><div id='system_info' class='row'>加载中...</div></card>
		</section>
	</main>
	<footer></footer>
	<div id='toast'></div>
</app>`;
		'nav>.core'.N().innerHTML=Object.keys(this.P).map(_=>`<div p='${_}' class='${_==this.page?'active':''}' onclick='H.jump_to(this)'>${_.V()+this.P[_]}</div>`).join('');
		'footer'.N().innerHTML=['home','video','record','news','setting'].map(_=>`<div p='${_}' class='${_==this.page?'active':''}' onclick='H.jump_to(this,true)'>${_.V()+this.P[_]}</div>`).join('');
		this.C='app'.N();
		this.W='wait'.N();
		this.T='#toast'.N();
		this.N='app>nav'.N();
	}
	copy(text,m){
		const $='textarea'.E();
		this.V.appendChild($);
		$.value=text;
		$.select();
		$.setSelectionRange(0,$.value.length);
		try{
			const o=document.execCommand('copy');
			if(o)this.toast(m+'已复制到剪切板!','success');
		}catch(_){
			this.toast(m+'复制到剪切板 异常: '+_.message,'error');
		}finally{$.remove()}
	}
	async fetch(url,m,body,headers,otype){
		const x={method:m=='POST'?'POST':'GET'};
		if(body)x.body=body;
		if(headers)x.headers=headers;
		let e=null,o=await fetch(url,x).catch(_=>(e=_.message));
		if(e)return {ok:false,e:'请求异常: '+e};
		if(otype=='json'){
			const x=await o.text();
			if(!/^\s*(\{.*\}|\[.*\])\s*$/.test(x))return {ok:false,e:'请求返回数据Json解析异常!'};
			o=JSON.parse(x);
		}else if(otype=='buffer')o=await o.arrayBuffer();
		else o=await o.text();
		
		return {ok:true,o,e};
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
				if(sa!=sb){
					e.target.setAttribute('src',sb);
					e.target.setAttribute('_','');
					o.unobserve(e.target);
					break;
				}
			}
		},{threshold:0.7});
		const oo=new MutationObserver(s=>{
			for(let e of s){
				const $s=Array.from(e.addedNodes);
				const x=e.target.classList.contains('grid');
				if(!(x&&$s.length>0))continue;
				const $=$s[$s.length-1];
				ov.observe($);
				$s.map(_=>_.querySelector('img[s]:not(img[_])')).forEach(_=>_?oi.observe(_):null);
			}
		});
		oo.observe(document.body,{subtree:true,childList:true,attributeFilter:['_']});
	}
	async notify(body,tag='~',title='',actions=[]){
		let p=Notification.permission;
		if(p=='default')p=await Notification.requestPermission();
		if(p!='granted')return;
		const r=await navigator.serviceWorker.ready;
		// actions: [{action:'test',title:'测试推送',icon:'192.png'}]
		const x={tag,body,icon:'192.png',vibrate:[200,100,200],actions};
		r&&r.showNotification(title,x).catch(_=>console.log('推送消息 异常:',_));
	}
	toast(m,t='info'){
		const $='div'.E(m,{class:'toast',style:`border-left-color:var(--${t})`});
		this.T.appendChild($);
		setTimeout(()=>{
			$.style.opacity='0';
			$.style.transform='translateX(100%)';
			setTimeout(()=>$.remove(),300);
		},3000);
	}
	toggle_theme(e){
		this.theme=(this.theme=='dark')?'light':'dark';
		localStorage.setItem('theme',this.theme);
		this.V.setAttribute('theme',this.theme);
		`meta[name='theme-color']`.N().setAttribute('content',this.theme=='dark'?'#000':'#fff');
	}
	toggle_menu(e){
		const x=this.N.classList.contains('open');
		this.N.classList[x?'remove':'add']('open');
	}
	install_app(e){
		if(!this.install_prompt)return;
		this.install_prompt.prompt();
		this.install_prompt.userChoice.then(o=>{
			if(o.outcome=='accepted')this.notify('应用已成功安装到主屏幕！');
			this.install_prompt=null;
			'#install_app'.N().remove();
		});
	}
	async clear_cache(e){
		const s=await caches.keys();
		await Promise.all(s.map(_=>caches.delete(_)));
		this.toast('缓存已清除','success');
		setTimeout(()=>location.reload(),200);
	}
	script(_,onload){
		if(`script[src='${_}']`.N())return eval(onload);
		'head'.N().append('script'.E('',{src:_,onload}));
	}
	jump_to(e,quite=false){
		let p=e.getAttribute('p'),$='#ptitle'.N(),ii=$.innerText.trim()=='';
		if(p==this.page&&!ii)return;
		console.log('当前页面: ',p);
		localStorage.setItem('page',this.page=p);
		if(!_T(this.X[this.page],'object'))this.X[this.page]={};
		`nav>.core>[p='${p}'],footer>[p='${p}']`.N(true).forEach(_=>_.setAttribute('class','active'));
		'nav>.core'.N().childNodes.forEach(_=>(_.getAttribute('p')!=p)&&_.classList.remove('active'));
		'footer'.N().childNodes.forEach(_=>(_.getAttribute('p')!=p)&&_.classList.remove('active'));
		$.innerHTML=e.innerText.trim();
		quite||ii||this.toggle_menu('header>svg:first-child'.N());
		this.M=`main>#${p}`.N();
		if(this.M)this.M.classList.add('active');
		'main>section'.N(true).forEach(_=>(_.id==p)||_.classList.remove('active'));
		if(!this.M)'main'.N().innerHTML+=`<section id='${p}' class='active'></section>`;
		this.M=`main>#${p}`.N();
		'main>svg'.N().classList.remove('hide');
		if(p=='home'){
			this.monitor();
			this.HM=setInterval(()=>this.monitor(),2000);
			setTimeout(()=>'main>svg'.N().classList.add('hide'),300);
			return;
		}
		if(this.HM)clearInterval(this.HM);
		this.script(`o/${p}.js`,`H.page_${p}()`);
		setTimeout(()=>'main>svg'.N().classList.add('hide'),300);
	}
	events(){
		'online'.B(()=>('#state_net'.N().innerText='在线'));
		'offline'.B(()=>('#state_net'.N().innerText='离线'));
		'beforeinstallprompt'.B(e=>{
			e.preventDefault();
			this.install_prompt=e;
			console.log(e);
			'#install_app'.N().classList.remove('hide');
		});
		setTimeout(()=>{
			this.W.style.opacity=0;
			setTimeout(()=>{
				this.W.remove();
				this.W=null;
			},300);
		},800);
	}
	async monitor(){
		'#state_net'.N().innerHTML=(navigator.onLine?'green':'red').V()+(navigator.onLine?'已连接':'已断开');
		'#state_push'.N().innerHTML=('PushManager' in window?'green':'red').V()+('PushManager' in window?'已支持':'不支持');
		'#state_cache'.N().innerHTML=('caches' in window?'green':'red').V()+('caches' in window?'已支持':'不支持');
		'#state_vibrate'.N().innerHTML=('vibrate' in navigator?'green':'red').V()+('vibrate' in navigator?'已支持':'不支持');
		'#state_location'.N().innerHTML=('geolocation' in navigator?'green':'red').V()+('geolocation' in navigator?'已支持':'不支持');
		if(performance.memory){
			const m=performance.memory;
			const um=Math.round(m.usedJSHeapSize/1024/1024);
			const tm=Math.round(m.totalJSHeapSize/1024/1024);
			'#state_memory'.N().innerHTML=`${um}MB/${tm}MB`;
		}
		if('storage' in navigator&&'estimate' in navigator.storage){
			const e=await navigator.storage.estimate();
			const ug=(e.usage/1024/1024/1024).toFixed(2);
			const tg=(e.quota/1024/1024/1024).toFixed(2);
			const pc=((e.usage/e.quota)*100).toFixed(1);
			'#state_storage'.N().innerHTML=`${pc}% (${ug}GB/${tg}GB)`;
		}
		'#system_info'.N().innerHTML=`
			&emsp;浏览器:&nbsp;&nbsp;${navigator.userAgent.split(' ').shift()}&emsp;&emsp;
			&emsp;平台:&nbsp;&nbsp;${navigator.platform}<br>
			&emsp;语言:&nbsp;&nbsp;${navigator.language}&emsp;&emsp;
			&emsp;核数:&nbsp;&nbsp;${navigator.hardwareConcurrency||'未知'}&emsp;&emsp;
			&emsp;内存:&nbsp;&nbsp;${navigator.deviceMemory||'未知'}GB
		`;
	}
}
'DOMContentLoaded'.B(()=>(self.H=new O()),document);
'load'.B(async()=>{
	try{
		const r=await navigator.serviceWorker.register('s.js',{updateViaCache:'none'});
		'updatefound'.B(()=>{
			const nw=r.installing;
			'statechange'.B(()=>console.log('SW 状态:',nw.state),nw);
		},r);
		'message'.B(e=>{
			const {type,data}=e.data;
			// todo...
		},navigator.serviceWorker);
		setInterval(()=>r.update(),2000);
	}catch(_){console.log('SW 注册失败:',_)}
});
