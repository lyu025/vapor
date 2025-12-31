class Video extends Page{
	static #o=null;
	static open(){
		if (!this.#o)this.#o=new Video();
		return this.#o
	}
	define(){
		this.w={}
		this.wm={ymt:'茅台',yhn:'红牛',yhy:'虎牙',ydb:'豆瓣'}
		this.ph=`data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZpZXdCb3g9IjAgMCA0MTkuNTI4IDU5NS4yNzYiPg0KPHJlY3QgeD0iLTkuOTM2IiB5PSItOS43NjYiIHN0eWxlPSJmaWxsOiM3NzciIHdpZHRoPSI0MzkuMTQ5IiBoZWlnaHQ9IjYxMy43ODciLz4NCjxnPg0KCTxnPg0KCQk8cmVjdCB4PSI0Mi4zNzUiIHk9IjgwLjEzNCIgc3R5bGU9ImZpbGw6bm9uZSIgd2lkdGg9IjIwNS4yNzciIGhlaWdodD0iMTguMzgzIi8+DQoJCTx0ZXh0IHRyYW5zZm9ybT0ibWF0cml4KDEgMCAwIDEgNDIuMzc1NSA5Mi4yMDQpIiBzdHlsZT0iZmlsbDojMzYzNjM0O2ZvbnQtZmFtaWx5OidBemVyZXRNb25vLUxpZ2h0Jztmb250LXNpemU6MTdweCI+WU9VIEFSRSBJTlZJVEVEIFRPPC90ZXh0Pg0KCTwvZz4NCgk8Zz4NCgkJPHJlY3QgeD0iNDIuMzc1IiB5PSIxMTIuNTE3IiBzdHlsZT0iZmlsbDpub25lIiB3aWR0aD0iMzE3LjA1IiBoZWlnaHQ9IjExMS44MyIvPg0KCQk8dGV4dCB0cmFuc2Zvcm09Im1hdHJpeCgxIDAgMCAxIDQyLjM3NTUgMTUwLjg1NjMpIj48dHNwYW4geD0iMCIgeT0iMCIgc3R5bGU9ImZpbGw6IzM2MzYzNDtmb250LWZhbWlseTonQXplcmV0TW9uby1CbGFjayc7Zm9udC1zaXplOjU0cHgiPlRIRSBHUkFORCA8L3RzcGFuPjx0c3BhbiB4PSIwIiB5PSI1MCIgc3R5bGU9ImZpbGw6IzM2MzYzNDtmb250LWZhbWlseTonQXplcmV0TW9uby1CbGFjayc7Zm9udC1zaXplOjU0cHgiPk9QRU5JTkc8L3RzcGFuPjwvdGV4dD4NCgk8L2c+DQoJPGc+DQoJCTxyZWN0IHg9IjQwLjM4NCIgeT0iNDQwLjExMyIgc3R5bGU9ImZpbGw6bm9uZSIgd2lkdGg9IjEyNy4xMTciIGhlaWdodD0iMTIyLjA2NCIvPg0KCQk8dGV4dCB0cmFuc2Zvcm09Im1hdHJpeCgxIDAgMCAxIDQwLjM4MzggNTA0LjcwODQpIj48dHNwYW4geD0iMCIgeT0iMCIgc3R5bGU9ImZpbGw6I0ZGRkZGRjtmb250LWZhbWlseTonQXplcmV0TW9uby1CbGFjayc7Zm9udC1zaXplOjkwLjk4MThweCI+MDI8L3RzcGFuPjx0c3BhbiB4PSIwIiB5PSI1NC41ODkiIHN0eWxlPSJmaWxsOiNGRkZGRkY7Zm9udC1mYW1pbHk6J0F6ZXJldE1vbm8tQmxhY2snO2ZvbnQtc2l6ZTo2MS40MTI3cHgiPlNFUDwvdHNwYW4+PC90ZXh0Pg0KCTwvZz4NCgk8Zz4NCgkJPHJlY3QgeD0iMjAxLjYxNyIgeT0iNDQxLjY2NiIgc3R5bGU9ImZpbGw6bm9uZSIgd2lkdGg9IjE4MC4xMDYiIGhlaWdodD0iODYuMDQzIi8+DQoJCTx0ZXh0IHRyYW5zZm9ybT0ibWF0cml4KDEgMCAwIDEgMjAxLjYxNzQgNDUwLjE4NjEpIj48dHNwYW4geD0iMCIgeT0iMCIgc3R5bGU9ImZpbGw6IzM2MzYzNDtmb250LWZhbWlseTonQXplcmV0TW9uby1MaWdodCc7Zm9udC1zaXplOjEycHgiPkpvaW4gdXMgZm9yIGV4Y2x1c2l2ZSBzdXJwcmlzZXMsIDwvdHNwYW4+PHRzcGFuIHg9IjAiIHk9IjE5IiBzdHlsZT0iZmlsbDojMzYzNjM0O2ZvbnQtZmFtaWx5OidBemVyZXRNb25vLVNlbWlCb2xkJztmb250LXNpemU6MTJweCI+YWN0aXZpdGllcywgYW5kIHJlZnJlc2htZW50czwvdHNwYW4+PHRzcGFuIHg9IjEzNy4wMzUiIHk9IjE5IiBzdHlsZT0iZmlsbDojMzYzNjM0O2ZvbnQtZmFtaWx5OidBemVyZXRNb25vLUxpZ2h0Jztmb250LXNpemU6MTJweCI+4oCUZG9u4oCZdCA8L3RzcGFuPjx0c3BhbiB4PSIwIiB5PSIzOCIgc3R5bGU9ImZpbGw6IzM2MzYzNDtmb250LWZhbWlseTonQXplcmV0TW9uby1MaWdodCc7Zm9udC1zaXplOjEycHgiPm1pc3Mgb3V0ITwvdHNwYW4+PC90ZXh0Pg0KCTwvZz4NCgk8Zz4NCgkJPHJlY3QgeD0iMjAxLjYxNyIgeT0iNTUyLjM5NyIgc3R5bGU9ImZpbGw6bm9uZSIgd2lkdGg9IjE2NS41NTMiIGhlaWdodD0iOS42NSIvPg0KCQk8dGV4dCB0cmFuc2Zvcm09Im1hdHJpeCgxIDAgMCAxIDIwMS42MTczIDU2MC45MTY5KSIgc3R5bGU9ImZpbGw6IzM2MzYzNDtmb250LWZhbWlseTonQXplcmV0TW9uby1MaWdodCc7Zm9udC1zaXplOjEycHgiPk9uZSBTdC4gOSBMQSAsQ0EgMTIzNDwvdGV4dD4NCgk8L2c+DQoJPGc+DQoJCTxyZWN0IHg9IjIwMS42MTciIHk9IjUzNC40MTgiIHN0eWxlPSJmaWxsOm5vbmUiIHdpZHRoPSIxNTkuNDI2IiBoZWlnaHQ9IjExLjg0NCIvPg0KCQk8dGV4dCB0cmFuc2Zvcm09Im1hdHJpeCgxIDAgMCAxIDIwMS42MTczIDU0Mi45MzgyKSIgc3R5bGU9ImZpbGw6IzM2MzYzNDtmb250LWZhbWlseTonQXplcmV0TW9uby1MaWdodCc7Zm9udC1zaXplOjEycHgiPnd3dy55b3Vyd2Vic2l0ZS5jb208L3RleHQ+DQoJPC9nPg0KCTxwb2x5bGluZSBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojMzYzNjM0O3N0cm9rZS13aWR0aDoyO3N0cm9rZS1taXRlcmxpbWl0OjEwIiBwb2ludHM9IjQ0LjcwMiw0MDMuMjI1IDQ0LjcwMiwyNTQuNDUzIA0KCQkxOTAuNTMsNDA0Ljg0MyAxOTIuNzczLDI1NC40NTMgMzc3LjEyOCw0MjAuNDc0IDM3Ny4xMjgsODEuMTU1IAkiLz4NCgk8Zz4NCgkJCTxlbGxpcHNlIHRyYW5zZm9ybT0ibWF0cml4KDAuMjQ3MSAtMC45NjkgMC45NjkgMC4yNDcxIC0zNS44MDc1IDUyMi45NTEpIiBzdHlsZT0iZmlsbDojRkZGRkZGIiBjeD0iMzE4LjYwNiIgY3k9IjI4NC41MTciIHJ4PSIzMi41NTMiIHJ5PSIzOS44MyIvPg0KCQkJPHRleHQgdHJhbnNmb3JtPSJtYXRyaXgoMC45Njk5IDAuMjQzMyAtMC4yNDMzIDAuOTY5OSAyOTYuOTM3MSAyNzQuMDEzKSIgc3R5bGU9ImZpbGw6IzM2MzYzNDtmb250LWZhbWlseTonQXplcmV0TW9uby1SZWd1bGFyJztmb250LXNpemU6MTNweCI+MDI6MDBQTTwvdGV4dD4NCgkJCTx0ZXh0IHRyYW5zZm9ybT0ibWF0cml4KDAuOTY5OSAwLjI0MzMgLTAuMjQzMyAwLjk2OTkgMjkyLjg5MSAyODkuNTg4OCkiIHN0eWxlPSJmaWxsOiMzNjM2MzQ7Zm9udC1mYW1pbHk6J0F6ZXJldE1vbm8tUmVndWxhcic7Zm9udC1zaXplOjEzcHgiPjA1OjAwUE08L3RleHQ+DQoJPC9nPg0KCTxnPg0KCQk8cGF0aCBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojMzYzNjM0O3N0cm9rZS1taXRlcmxpbWl0OjEwIiBkPSJNMjU4LjYwMyw1NC4xNDJoLTk3LjY3OGMtNS44MTEsMC0xMC41MjEtNC43MTEtMTAuNTIxLTEwLjUyMQ0KCQkJbDAsMGMwLTUuODExLDQuNzExLTEwLjUyMSwxMC41MjEtMTAuNTIxaDk3LjY3OGM1LjgxMSwwLDEwLjUyMiw0LjcxMSwxMC41MjIsMTAuNTIxbDAsMA0KCQkJQzI2OS4xMjQsNDkuNDMxLDI2NC40MTQsNTQuMTQyLDI1OC42MDMsNTQuMTQyeiIvPg0KCQk8Zz4NCgkJCTxyZWN0IHg9IjE2MS4wNzgiIHk9IjM5LjQzMiIgc3R5bGU9ImZpbGw6bm9uZSIgd2lkdGg9Ijk3LjM3MiIgaGVpZ2h0PSI5LjE5MSIvPg0KCQkJPHRleHQgdHJhbnNmb3JtPSJtYXRyaXgoMSAwIDAgMSAxNzYuNzIyMSA0Ny45NTE5KSIgc3R5bGU9ImZpbGw6IzM2MzYzNDtmb250LWZhbWlseTonQXplcmV0TW9uby1MaWdodCc7Zm9udC1zaXplOjEycHgiPlZJQ1RPUiAmYW1wO1ZJQzwvdGV4dD4NCgkJPC9nPg0KCTwvZz4NCjwvZz4NCjwvc3ZnPg0K`
		this.loader=`<svg class='news_loader' viewBox='0 0 50 50'><path d='M25,5 a20,20 0 1,1 -20,20' stroke='var(--fg)' stroke-width='1' fill='none' stroke-linecap='round'><animate attributeName='stroke-dasharray' values='10,60;60,10;10,60' dur='1.5s' repeatCount='indefinite'/><animateTransform attributeName='transform' type='rotate' from='0 25 25' to='360 25 25' dur='1s' repeatCount='indefinite'/></path></svg>`
	}
	constructor(){
		if(Video.#o)return
		super('video')
		this.favorite_load()
	}
	nodes(){
		return[
			this.N('card',{id:'favorite',cc:'favorite'},
				this.N('h2',this.N('svg',{path:'icon'}),'收藏夹',this.N('svg',{path:'trash',h:true,click:'App.pages.video.favorite_flush(this)'})),
				this.N('div',{id:'fv_list',c:'grid',s:'--gc:4'})
			),
			this.N('card',{id:'website',cc:'website'},
				this.N('h2',this.N('svg',{path:'website'}),'媒体源',
					this.N('input',{id:'wb_search',type:'search',placeholder:'请输入搜索内容...',h:true,k:'q',onsearch:'App.pages.video.website_list(this)'}),
					this.N('svg',{id:'wb_back',path:'back',h:true,click:'App.pages.video.website_back(this)'}),
					this.N('svg',{id:'wb_collect',path:'collect_no',h:true,click:'App.pages.video.website_collect(this)'}),
				),
				this.N('div',{id:'wb_home',T:'A',c:'grid',s:'--gc:2'},
					...Object.keys(this.wm).map(_=>this.N('div',{X:_,N:this.wm[_],click:`App.pages.video.website_filters("${_}")`},this.N('svg',{path:_})))
				),
				this.N('div',{id:'wb_filters',T:'F',h:true}),
				this.N('div',{id:'wb_list',T:'W',h:true,c:'grid',s:'--gc:4',more:'App.pages.video.website_list'}),
				this.N('div',{id:'wb_info',T:'V',h:true,c:'row'}),
			),
		]
	}
	styles(){
		return[
			'ᝰ>[cc="favorite"]>h2>svg:last-child{margin-left:auto;width:22px;height:22px}',
			'ᝰ>[cc="favorite"]>.grid>div{position:relative;aspect-ratio:unset;height:auto}',
			'ᝰ>[cc="favorite"]>.grid>div>img{display:block;width:100%;object-fit:cover;aspect-ratio:9/13.5;flex:1}',
			'ᝰ>[cc="favorite"]>.grid>div>title{display:block;padding:.2rem 0;display:flex;align-items:center;justify-content:center;line-height:1;height:1.6rem;text-align:center;font-size:.54rem;flex:1}',
			
			'ᝰ>[cc="website"]>h2>svg:nth-child(3){margin-left:auto;width:22px;height:22px}',
			'ᝰ>[cc="website"]>h2>svg:nth-child(4){margin-left:1rem;width:22px;height:22px}',
			'ᝰ>[cc="website"]>[T="A"]>*{aspect-ratio:22/9;padding:0 3rem}',
			'ᝰ>[cc="website"]>[T="A"]>div>svg{width:100%;height:100%;object-fit:contain}',
			
			'ᝰ>[cc="website"]>[T="F"]{position:sticky;top:36px;z-index:100000;min-height:60px;background:var(--bg);display:flex;flex-direction:column}',
			'ᝰ>[cc="website"]>[T="F"]:empty:after{content:"正在加载筛选项，请耐心等待一下 ...";display:block;width:100%;position:absolute;top:50%;left:0;z-index:10;transform:translateY(-50%);font-size:.8rem;text-align:center}',
			'ᝰ>[cc="website"]>[T="F"]>div{display:block;white-space:nowrap;min-width:100%;overflow-x:auto;overflow-y:hidden}',
			'ᝰ>[cc="website"]>[T="F"]>div::-webkit-scrollbar{height:4px}',
			'ᝰ>[cc="website"]>[T="F"]>div>*{border-bottom:2px solid rgba(0,0,0,0);display:inline-block;width:auto;padding:0 1rem;line-height:24px;font-size:.9rem}',
			'ᝰ>[cc="website"]>[T="F"]>div>[active]{border-bottom-color:var(--h-bd);font-size:1rem}',
			
			'ᝰ>[cc="website"]>[T="W"]>div{position:relative;aspect-ratio:unset;height:auto}',
			'ᝰ>[cc="website"]>[T="W"]>div>img{display:block;width:100%;object-fit:cover;aspect-ratio:9/13.5;flex:1}',
			'ᝰ>[cc="website"]>[T="W"]>div>score{position:absolute;top:8px;left:8px;z-index:20;display:block;font-size:.8rem;-webkit-text-stroke:.06rem var(--fg)}',
			'ᝰ>[cc="website"]>[T="W"]>div>tip{position:absolute;top:50%;left:12px;right:12px;transform:translateY(-60%);text-align:center;z-index:20;display:block;font-size:.8rem;-webkit-text-stroke:.01rem var(--bg)}',
			'ᝰ>[cc="website"]>[T="W"]>div>title{display:block;padding:.2rem 0;display:flex;align-items:center;justify-content:center;line-height:1;height:1.6rem;text-align:center;font-size:.54rem;flex:1}',
			
			'ᝰ>[cc="website"]>[T="V"]{display:flex;flex-direction:column;min-height:30vh}',
			'ᝰ>[cc="website"]>[T="V"]>svg{width:24%;margin:1rem auto;object-fit:contain;flex:1}',
			
			'ᝰ>[cc="website"]>[T="V"]>title{display:block;line-height:1.1;font-size:1.1rem;padding:1rem .8rem;font-weight:bold;border-bottom:1px dotted var(--ph)}',
			'ᝰ>[cc="website"]>[T="V"]>p{line-height:1.2;font-size:.9rem;padding:.8rem;margin:0;border-bottom:1px dotted var(--ph)}',
			'ᝰ>[cc="website"]>[T="V"]>video{aspect-ratio:16/9;object-fit:contain;display:block;border-radius:4px 4px 0 0;border-bottom:1px solid var(--h-bd);margin-top:.8rem}',
			'ᝰ>[cc="website"]>[T="V"]>div{display:flex;margin-top:-1px;border-radius:0 0 4px 4px;background:rgba(180,180,180,.3)}',
			'ᝰ>[cc="website"]>[T="V"]>div>*{flex:1;line-height:30px;text-align:left}',
			'ᝰ>[cc="website"]>[T="V"]>div>*:nth-child(2){text-align:right}',
			'ᝰ>[cc="website"]>[T="V"]>links>[u],ᝰ>[cc="website"]>[T="V"]>brief{background:var(--fg);color:var(--bg);opacity:.3;border-radius:3px}',
			'ᝰ>[cc="website"]>[T="V"]>brief{display:block;font-size:.9rem;line-height:1.5;border-radius:2px;padding:.8rem;margin-top:1rem}',
			'ᝰ>[cc="website"]>[T="V"]>links{padding:1.5rem 0;display:grid;grid-template-columns:repeat(5,1fr);gap:3px;align-items:center;justify-content:center}',
			'ᝰ>[cc="website"]>[T="V"]>links>*{min-height:30px;text-align:center;display:flex;align-items:center;justify-content:center}',
			'ᝰ>[cc="website"]>[T="V"]>links>[active]{background:var(--primary);opacity:.5}',
		]
	}
	favorite_load(e){
		let ie=true
		this.E('fv_list').html('')
		for(let x in this.wm){
			const o=JSON.parse(this.cache(`${x}_favorites`)||'{}')
			for(let i in o){
				ie=false
				this.E('fv_list').append(this.N('div',{i,x,o:JSON.stringify(o[i]),click:'App.pages.video.website_info(this,true)'},
					this.N('img',{src:this.ph,ss:o[i].cover}),
					this.N('title',o[i].title)
				))
			}
		}
		this.E('favorite').node('h2>svg:last-child')[ie?'s_attr':'d_attr']('hide')
	}
	favorite_flush(e){
		for(let x in this.wm)this.cache(`${x}_favorites`,'{}')
		this.favorite_load()
		toast.success('收藏夹已清空')
	}
	website_collect(e){
		const i=this.E('wb_info').g_attr('i'),o=this.w.s[i]
		const fo=JSON.parse(this.cache(`${this.w.X}_favorites`)||'{}')
		if(i in fo)delete fo[i]
		else fo[i]=o
		this.cache(`${this.w.X}_favorites`,JSON.stringify(fo))
		this.E('wb_collect').firstChild.s_attr({'xlink:href':i in fo?'/assets/icon.svg#collect_ok':'/assets/icon.svg#collect_no'})
		this.favorite_load()
	}
	website_back(e){
		this.E('website').classList.remove('wait')
		if(!this.E('wb_info').h_attr('hide')){
			const id=this.E('wb_info').g_attr('i')
			const {u,curr,start,end}=JSON.parse(this.cache(`${this.w.X}_history_${id}`)||'{}')
			this.cache(`${this.w.X}_history_${id}`,JSON.stringify({u,start,end,curr:this.E('wb_info').node('video').currentTime}))
			if(!this.E('wb_info').h_attr('fv')){
				this.E('wb_info').s_attr('hide').d_attr('i').html('')
				this.E('wb_filters').d_attr('hide')
				this.E('wb_collect').s_attr('hide')
				this.E('wb_list').d_attr('hide').node('[i="'+id+'"]').scrollIntoView({block:'center'})
				this.E('website').node('h2').childNodes[1].textContent=this.wm[this.w.X]
				this.E('website').node('h2').childNodes[2].d_attr('hide')
				this.E('website').node('h2').childNodes[4].s_attr('hide')
				return
			}
		}
		this.E('website').node('h2').childNodes[1].textContent='媒体源'
		this.E('website').node('h2').childNodes[2].s_attr('hide')
		this.E('website').node('h2').childNodes[3].s_attr('hide')
		this.E('website').node('h2').childNodes[4].s_attr('hide')
		this.E('wb_filters').s_attr('hide').html('')
		this.E('wb_info').s_attr('hide').html('')
		this.E('wb_list').s_attr('hide').html('')
		this.E('wb_home').d_attr('hide')
		e.s_attr('hide')
		this.w={}
	}
	async website_filters(X){
		const ct=eval(`typeof ${fucase(X)}`)
		if(ct=='undefined'){
			this.script(`/addons/${X}.js`,`App.pages.video.website_filters("${X}")`)
			return
		}
		this.w={X}
		this.E('wb_back').d_attr('hide')
		this.E('wb_home').s_attr('hide')
		this.E('wb_list').d_attr('hide').html('')
		this.E('wb_info').s_attr('hide').html('')
		this.E('wb_filters').html('').d_attr('hide')
		this.E('website').node('h2').childNodes[1].textContent=this.wm[X]
		this.E('website').node('h2').childNodes[2].d_attr('hide')
		eval(fucase(X)).filters(()=>this.w.X==X,s=>{
			this.w={X,o:{},_:s}
			const ts=Object.keys(s),t=this.w.o.type=ts[0]
			let $c,$a,$y,$s,$t=ts.map(v=>this.N('div',{v,k:'type',click:'App.pages.video.website_list(this)'},s[v].title))
			if(_type(s[t].subt,'object')){
				const ks=Object.keys(s[t].subt)
				this.w.o.subt=ks[0]
				$c=ks.map(v=>this.N('div',{v,k:'subt',a:v==ks[0],click:'App.pages.video.website_list(this)'},s[t].subt[v]))
			}
			if(_type(s[t].area,'array')){
				this.w.o.area=s[t].area[0][0]
				$a=s[t].area.map(([v,n])=>this.N('div',{v,k:'area',a:v===s[t].area[0][0],click:'App.pages.video.website_list(this)'},n))
			}
			if(_type(s[t].year,'array')){
				this.w.o.year=s[t].year[0][0]
				$y=s[t].year.map(([v,n])=>this.N('div',{v,k:'year',a:v===s[t].year[0][0],click:'App.pages.video.website_list(this)'},n))
			}
			if(_type(s[t].sort,'object')){
				const ks=Object.keys(s[t].sort)
				this.w.o.sort=ks[0]
				$s=ks.map(v=>this.N('div',{v,k:'sort',a:v===ks[0],click:'App.pages.video.website_list(this)'},s[t].sort[v]))
			}
			if($t)this.E('wb_filters').append(this.N('div',...$t))
			if($c)this.E('wb_filters').append(this.N('div',...$c))
			if($a)this.E('wb_filters').append(this.N('div',...$a))
			if($y)this.E('wb_filters').append(this.N('div',...$y))
			if($s)this.E('wb_filters').append(this.N('div',...$s))
			this.E('wb_filters').node('div>[k="type"]').click()
		})
	}
	async website_list(e,p=1){
		if(p=='..')return
		if(e){
			this.w.s={}
			this.E('wb_list').s_attr({p:1}).html('')
			const iin=e.tagName=='INPUT'
			const k=e.g_attr('k'),t=iin?e.value.trim():e.g_attr('v')
			if(k=='type'&&t!=this.w.o.type){
				this.E('wb_filters').nodes('[k="subt"],[k="area"],[k="year"],[k="sort"]').forEach(_=>_.remove())
				this.w.o={type:t}
				let $c,$a,$y,$s,s=this.w._
				if(_type(s[t].subt,'object')){
					const ks=Object.keys(s[t].subt)
					this.w.o.subt=ks[0]
					$c=ks.map(v=>this.N('div',{v,k:'subt',a:v==ks[0],click:'App.pages.video.website_list(this)'},s[t].subt[v]))
				}
				if(_type(s[t].area,'array')){
					this.w.o.area=s[t].area[0][0]
					$a=s[t].area.map(([v,n])=>this.N('div',{v,k:'area',a:v===s[t].area[0][0],click:'App.pages.video.website_list(this)'},n))
				}
				if(_type(s[t].year,'array')){
					this.w.o.year=s[t].year[0][0]
					$y=s[t].year.map(([v,n])=>this.N('div',{v,k:'year',a:v===s[t].year[0][0],click:'App.pages.video.website_list(this)'},n))
				}
				if(_type(s[t].sort,'object')){
					const ks=Object.keys(s[t].sort)
					this.w.o.sort=ks[0]
					$s=ks.map(v=>this.N('div',{v,k:'sort',a:v===ks[0],click:'App.pages.video.website_list(this)'},s[t].sort[v]))
				}
				if($c)this.E('wb_filters').append(this.N('div',...$c))
				if($a)this.E('wb_filters').append(this.N('div',...$a))
				if($y)this.E('wb_filters').append(this.N('div',...$y))
				if($s)this.E('wb_filters').append(this.N('div',...$s))
			}else this.w.o[k]=t
			if(!iin)e.parentNode.childNodes.forEach(_=>_[_==e?'s_attr':'d_attr']('active'))
		}
		const fo=JSON.stringify(this.w.o)
		this.E('website').classList.add('wait')
		const filters=this.w.o,next=await eval(fucase(this.w.X)).list(()=>fo==JSON.stringify(filters),x=>{
			const {id,title,cover,score,tip,links}=x
			if(!links)return null
			this.w.s[id]=x
			const o={i:id,click:'App.pages.video.website_info(this)'}
			return this.N('div',o,
				this.N('img',{src:this.ph,ss:this.link(cover)}),
				this.N('title',title),
				tip?this.N('tip',tip):'',
				score?this.N('score',score):'',
			)
		},async $=>this.E('wb_list').append(...$),filters,p)
		if(next=='✘')return
		this.E('wb_list').s_attr({p:next})
		this.E('website').classList.remove('wait')
	}
	website_info(e,ifv=false){
		this.E('website').node('h2').childNodes[2].s_attr('hide')
		const id=this.w.id=e.g_attr('i').trim()
		if(ifv){
			this.w.X=e.g_attr('x')
			this.w.s={[id]:JSON.parse(e.g_attr('o'))}
			this.E('wb_back').d_attr('hide')
			this.E('website').node('h2').childNodes[1].textContent=this.wm[this.w.X]
			this.E('wb_info').s_attr('fv')
		}else this.E('wb_info').d_attr('fv')
		const cover=e.node('img').g_attr('ss')
		this.E('wb_list').s_attr('hide')
		this.E('wb_filters').s_attr('hide')
		this.E('wb_home').s_attr('hide')
		const fo=JSON.parse(this.cache(`${this.w.X}_favorites`)||'{}')
		const {u,curr,start,end}=JSON.parse(this.cache(`${this.w.X}_history_${id}`)||'{}')
		this.w.u=u||''
		this.w.end=isNaN(end)?0:parseInt(end)
		this.w.curr=isNaN(curr)?0:parseInt(curr)
		this.w.start=isNaN(start)?0:parseInt(start)
		this.E('wb_collect').d_attr('hide').firstChild.s_attr({'xlink:href':id in fo?'/assets/icon.svg#collect_ok':'/assets/icon.svg#collect_no'})
		this.E('wb_info').html(this.loader).d_attr('hide').s_attr({i:id})
		const todo=v=>{
			this.E('wb_info').s_attr({i:v.id,n:v.title,c:v.cover}).append(
				this.N('title',v.title),
				this.N('p',`类型: ${v.subt||'未知'}　　　语言: ${v.lang||'未知'}`),
				this.N('p',`地区: ${v.area||'未知'}　　　时间: ${v.year||'未知'}`),
				v.directors.length>0?this.N('p',`导演: ${v.directors.join(', ')}`):'',
				v.actors.length>0?this.N('p',`主演: ${v.actors.join(', ')}`):'',
				this.N('video',{preload:'',autoplay:'',crossorigin:'anonymous',controls:'',poster:v.cover||this.ph}),
				this.N('div',
					this.N('div',{click:'App.pages.video.website_seek("start",this)'},'╟ '+this.w.start.time()),
					this.N('div',{click:'App.pages.video.website_seek("end",this)'},'-'+this.w.end.time()+' ╢'),
				),
				v.brief?this.N('brief',v.brief):'',
				this.N('links',...v.links.map(([n,u])=>this.N('div',{u,click:'App.pages.video.website_play(this)'},n=='立即播放'?'默认':n))),
			)
			const V=this.E('wb_info').node('video')
			V.ondurationchange=()=>{
				if(!V.isConnected||isNaN(V.duration)||V.duration<250)return
				V.playbackRate=1.25
				V.currentTime=Math.max(this.w.curr,this.w.start)
			}
			V.ontimeupdate=()=>{
				if(!V.isConnected||isNaN(V.duration)||V.duration<250)return
				if(V.duration-V.currentTime>this.w.end)return
				const $=this.E('wb_info').node('links>[active]'),$n=$?$.nextElementSibling:null
				$n&&$n.click()
			}
			this.E('wb_info').node('title').scrollIntoView({block:'start'})
			this.E('wb_info').node('.news_loader')?.remove()
			const $v=this.E('wb_info').node(`links>[u${this.w.u?('="'+this.w.u+'"'):''}]`)
			$v&&$v.click()
		}
		if(id in this.w.s)return todo(this.w.s[id])
		eval(fucase(this.w.X)).info(()=>this.w.id==id,o=>todo(o),id)
	}
	website_seek(_,e){
		const o=JSON.parse(this.cache(`${this.w.X}_history_${this.w.id}`)||'{}')
		const v=this.E('wb_info').node('video'),ct=v.currentTime,tc=v.duration
		this.w.u=o.u=this.E('wb_info').node('links>[active]').g_attr('u')
		this.w.u=o.curr=ct
		this.w[_]=o[_]=_=='end'?(tc-ct):ct
		this.cache(`${this.w.X}_history_${this.w.id}`,JSON.stringify(o))
		e.innerText=e.innerText.replace(/\d+:\d+(:\d+)?/,o[_].time())
	}
	async website_play(e){
		const cu=this.w.u=e.g_attr('u'),uu=e.g_attr('uu')
		const {u,curr,start,end}=JSON.parse(this.cache(`${this.w.X}_history_${this.w.id}`)||'{}')
		const o=u!=cu?{u:cu,curr:0,start,end}:{u,curr,start,end}
		this.cache(`${this.w.X}_history_${this.w.id}`,JSON.stringify(o))
		this.E('wb_info').nodes('links>[active]').forEach(_=>_.d_attr('active'))
		e.s_attr('active')
		const V=this.E('wb_info').node('video')
		if(uu&&uu.startsWith('http'))return V.s_attr({src:this.link(uu)})
		if(o.u.startsWith('http'))return V.s_attr({src:this.link(o.u)})
		await eval(fucase(this.w.X)).src(()=>this.w.u==o.u,(cu,nu)=>{
			if(cu&&cu.startsWith('http'))V.s_attr({src:thid.link(cu)})
			if(nu&&nu.startsWith('http'))e.nextElementSibling.s_attr({uu:nu})
		},cu)
	}
}
