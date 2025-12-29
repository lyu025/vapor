class Home extends Page{
	static #o=null;
	static open(){
		if (!this.#o)this.#o=new Home();
		return this.#o
	}
	constructor(){
		if(Home.#o)return
		super('home')
		this.monitor()
	}
	nodes(){
		const net=navigator.onLine,cache='caches' in window
		const vibrate='vibrate' in window,location='location' in window
		const push='PushManager' in window
		return [
			this.N('card',this.N('h2','嗨！我是 '+fucase(App.name)),this.N('p',{c:'row'},'这是一个轻量级但功能全面的PWA应用')),
			this.N('card',this.N('h2',this.N('svg',{path:'state'}),'系统状态'),this.N('div',{c:'row'},
				this.N('div',this.N('label','网络状态:'),this.N('span',{id:'net'},this.N('svg',{path:'dot',f:net?'#66B610':'red'}),net?'已连接':'已断开')),
				this.N('div',this.N('label','系统缓存:'),this.N('span',{id:'cache'},this.N('svg',{path:'dot',f:cache?'#66B610':'red'}),cache?'已支持':'不支持')),
				this.N('div',this.N('label','设备震动:'),this.N('span',{id:'vibrate'},this.N('svg',{path:'dot',f:vibrate?'#66B610':'red'}),vibrate?'已支持':'不支持')),
				this.N('div',this.N('label','设备定位:'),this.N('span',{id:'location'},this.N('svg',{path:'dot',f:location?'#66B610':'red'}),location?'已支持':'不支持')),
				this.N('div',this.N('label','系统推送:'),this.N('span',{id:'push'},this.N('svg',{path:'dot',f:push?'#66B610':'red'}),push?'已支持':'不支持')),
				this.N('div',this.N('label','占用内存:'),this.N('span',{id:'memory'},'检查中...')),
				this.N('div',this.N('label','占用缓存:'),this.N('span',{id:'storage'},'检查中...')),
			)),
			this.N('card',this.N('h2',this.N('svg',{path:'system'}),'更多信息'),this.N('div',{id:'system',c:'row'},'加载中...')),
		];
	}
	styles(){
		return[
			'ᝰ>card>div{line-height:2rem}',
			'ᝰ>card>div label{margin:0 1rem}',
			'ᝰ>card>div svg{display:inline;width:10px;height:10px;margin-right:1rem}',
		]
	}
	events(){
		'online'.bind(()=>this.E('net').html('dot'.svg({f:'#66B610'})+'已连接'))
		'offline'.bind(()=>this.E('net').html('dot'.svg({f:'ted'})+'已断开'))
	}
	async monitor(){
		const net=navigator.onLine,cache='caches' in window
		const vibrate='vibrate' in window,location='location' in window
		const push='PushManager' in window
		this.E('net').childNodes.forEach((_,i)=>(i<1)&&_.css({fill:net?'#66B610':'red'})||(_.textContent=net?'已连接':'已断开'))
		this.E('cache').childNodes.forEach((_,i)=>(i<1)&&_.css({fill:cache?'#66B610':'red'})||(_.textContent=cache?'已支持':'不支持'))
		this.E('vibrate').childNodes.forEach((_,i)=>(i<1)&&_.css({fill:vibrate?'#66B610':'red'})||(_.textContent=vibrate?'已支持':'不支持'))
		this.E('location').childNodes.forEach((_,i)=>(i<1)&&_.css({fill:location?'#66B610':'red'})||(_.textContent=location?'已支持':'不支持'))
		this.E('push').childNodes.forEach((_,i)=>(i<1)&&_.css({fill:push?'#66B610':'red'})||(_.textContent=push?'已支持':'不支持'))
		if(performance.memory){
			const m=performance.memory
			const um=Math.round(m.usedJSHeapSize/1024/1024)
			const tm=Math.round(m.totalJSHeapSize/1024/1024)
			this.E('memory').html(`${um}MB/${tm}MB`)
		}
		if('storage' in navigator&&'estimate' in navigator.storage){
			const e=await navigator.storage.estimate()
			const ug=(e.usage/1024/1024/1024).toFixed(2)
			const tg=(e.quota/1024/1024/1024).toFixed(2)
			const pc=((e.usage/e.quota)*100).toFixed(1)
			this.E('storage').html(`${pc}% (${ug}GB/${tg}GB)`)
		}
		this.E('system').html(`
			&emsp;浏览器:&nbsp;&nbsp;${navigator.userAgent.split(' ').shift()}&emsp;&emsp;
			&emsp;平台:&nbsp;&nbsp;${navigator.platform}<br>
			&emsp;语言:&nbsp;&nbsp;${navigator.language}&emsp;&emsp;
			&emsp;核数:&nbsp;&nbsp;${navigator.hardwareConcurrency||'未知'}&emsp;&emsp;
			&emsp;内存:&nbsp;&nbsp;${navigator.deviceMemory||'未知'}GB
		`);
		setTimeout(()=>this.monitor(),1000)
	}
}