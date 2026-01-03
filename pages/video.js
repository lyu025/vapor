class Video extends Page{
	static #o=null;
	static open(){
		if (!this.#o)this.#o=new Video();
		return this.#o
	}
	define(){
		this.w={}
		this.ph='/assets/poster.jpg'
		this.wm={ymt:'茅台',yhn:'红牛',yhy:'虎牙',ydb:'豆瓣'}
		this.loader=`<svg class='video_loader' viewBox='0 0 50 50'><path d='M25,5 a20,20 0 1,1 -20,20' stroke='var(--fg)' stroke-width='1' fill='none' stroke-linecap='round'><animate attributeName='stroke-dasharray' values='10,60;60,10;10,60' dur='1.5s' repeatCount='indefinite'/><animateTransform attributeName='transform' type='rotate' from='0 25 25' to='360 25 25' dur='1s' repeatCount='indefinite'/></path></svg>`
	}
	constructor(){
		if(Video.#o)return
		super('video')
		this.favorite_load()
	}
	nodes(){
		return[
			this.N('card',{id:'favorite',cc:'favorite'},
				this.N('h2',this.N('svg',{path:'icon'}),'收藏夹',
					this.N('svg',{id:'fv_flush',path:'trash',h:true,click:'App.pages.video.favorite_flush(this)'})
				),
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
			'ᝰ>[cc="website"]>[T="V"]>video{aspect-ratio:16/9;object-fit:contain;display:block;border-radius:4px 4px 0 0;margin-top:.8rem;border:.1rem solid rgba(180,180,180,.3)}',
			'ᝰ>[cc="website"]>[T="V"]>div{border-radius:0 0 4px 4px;background:rgba(180,180,180,.3)}',
			'ᝰ>[cc="website"]>[T="V"]>div>*{width:auto;margin:.4rem;background:rgba(120,120,120,.3);border-radius:30px;line-height:22px;text-align:left;padding:0 .3rem;float:left}',
			'ᝰ>[cc="website"]>[T="V"]>div>*:nth-child(2){float:right;text-align:right}',
			'ᝰ>[cc="website"]>[T="V"]>links>[u],ᝰ>[cc="website"]>[T="V"]>brief{background:var(--fg);color:var(--bg);opacity:.3;border-radius:3px}',
			'ᝰ>[cc="website"]>[T="V"]>brief{display:block;font-size:.9rem;line-height:1.5;border-radius:2px;padding:.8rem;margin-top:1rem}',
			'ᝰ>[cc="website"]>[T="V"]>links{padding:1.5rem 0;display:grid;grid-template-columns:repeat(5,1fr);gap:3px;align-items:center;justify-content:center}',
			'ᝰ>[cc="website"]>[T="V"]>links>*{min-height:30px;text-align:center;display:flex;align-items:center;justify-content:center}',
			'ᝰ>[cc="website"]>[T="V"]>links>[active]{background:var(--primary);opacity:.5}',
		]
	}
	favorite_flush(e){
		for(let x in this.wm)this.cache(`${x}_favorites`,'{}')
		e.s_attr('hide')
		this.E('fv_list').html('')
		toast.success('收藏夹已清空')
	}
	favorite_load(e){
		const $=[]
		for(let x in this.wm){
			const s=JSON.parse(this.cache(`${x}_favorites`)||'{}')
			for(let i in s){
				const o=s[i],a={i,x,o:JSON.stringify(o),click:'App.pages.video.website_info(this,true)'}
				$.push(this.N('div',a,this.N('img',{src:this.ph,ss:this.link(o.cover)}),this.N('title',o.title)))
			}
		}
		this.E('fv_list').html('').append(...$)
		this.E('fv_flush')[$.length>0?'d_attr':'s_attr']('hide')
	}
	website_collect(e){
		const i=this.E('wb_info').g_attr('i')
		const k=`${this.w.X}_favorites`
		const s=JSON.parse(this.cache(k)||'{}')
		if(i in s)delete s[i]
		else s[i]=this.w.s[i]
		this.cache(k,JSON.stringify(s))
		this.E('wb_collect').firstChild.s_attr({'xlink:href':i in s?'/assets/icon.svg#collect_ok':'/assets/icon.svg#collect_no'})
		this.favorite_load()
	}
	website_back(e){
		const $=this.E('website').d_attr('wait')
		const $t=$.node('h2').childNodes[1]
		const $v=this.E('wb_info').html('')
		const ifv=$v.h_attr('fv')
		const id=$v.h_attr('hide')?0:parseInt($v.g_attr('i')+'')
		$v.s_attr('hide').d_attr('i','fv')
		this.E('wb_collect').s_attr('hide')
		// 详情页转到列表页
		if(id>0&&!ifv){
			$t.textContent=this.wm[this.w.X]
			this.E('wb_search').d_attr('hide')
			this.E('wb_filters').d_attr('hide')
			const $u=this.E('wb_list').d_attr('hide').node(`[i="${id}"]`)
			console.log(id,$u);
			$u&&$u.scrollIntoView({block:'center'})
			const {X,o,s,_}=this.w
			this.w={X,o,s,_}
			return
		}
		// 收藏夹打开的详情页/列表页 返回到主面板
		this.w={}
		e.s_attr('hide')
		$t.textContent='媒体源'
		this.E('wb_home').d_attr('hide')
		this.E('wb_search').s_attr('hide')
		this.E('wb_list').s_attr('hide').html('')
		this.E('wb_filters').s_attr('hide').html('')
	}
	async website_filters(X){
		const C=fucase(X)
		if(eval(`typeof ${C}`)=='undefined'){
			this.script(`/addons/${X}.js`,`${C}&&App.pages.video.website_filters("${X}")`)
			return
		}
		this.w={X}
		this.E('website').node('h2').childNodes[1].textContent=this.wm[X]
		this.E('wb_home').s_attr('hide')
		this.E('wb_info').html('').s_attr('hide')
		this.E('wb_back').d_attr('hide')
		this.E('wb_search').d_attr('hide')
		this.E('wb_list').html('').d_attr('hide')
		this.E('wb_filters').html('').d_attr('hide')
		eval(fucase(X)).filters(()=>this.w.X==X,s=>{
			this.w={X,o:{},_:s}
			const ts=Object.keys(s),t=this.w.o.type=ts[0]||null
			let $c,$a,$y,$s,$t=ts.map(v=>this.N('div',{v,k:'type',click:'App.pages.video.website_list(this)'},s[v].title))
			if(s[t]&&_type(s[t].subt,'object')){
				const ks=Object.keys(s[t].subt)
				this.w.o.subt=ks[0]
				$c=ks.map(v=>this.N('div',{v,k:'subt',a:v==ks[0],click:'App.pages.video.website_list(this)'},s[t].subt[v]))
			}
			if(s[t]&&_type(s[t].area,'array')){
				this.w.o.area=s[t].area[0][0]
				$a=s[t].area.map(([v,n])=>this.N('div',{v,k:'area',a:v===s[t].area[0][0],click:'App.pages.video.website_list(this)'},n))
			}
			if(s[t]&&_type(s[t].year,'array')){
				this.w.o.year=s[t].year[0][0]
				$y=s[t].year.map(([v,n])=>this.N('div',{v,k:'year',a:v===s[t].year[0][0],click:'App.pages.video.website_list(this)'},n))
			}
			if(s[t]&&_type(s[t].sort,'object')){
				const ks=Object.keys(s[t].sort)
				this.w.o.sort=ks[0]
				$s=ks.map(v=>this.N('div',{v,k:'sort',a:v===ks[0],click:'App.pages.video.website_list(this)'},s[t].sort[v]))
			}
			if($t)this.E('wb_filters').append(this.N('div',...$t))
			if($c)this.E('wb_filters').append(this.N('div',...$c))
			if($a)this.E('wb_filters').append(this.N('div',...$a))
			if($y)this.E('wb_filters').append(this.N('div',...$y))
			if($s)this.E('wb_filters').append(this.N('div',...$s))
			const $=this.E('wb_filters').node(`div>[k='type']`)
			$&&$.click()
		})
	}
	async website_list(e,p=1){
		if(p=='..')return
		if(e){
			this.w.s={}
			this.E('wb_list').html('').s_attr({p:1})
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
		this.E('website').s_attr('wait')
		const oo=JSON.stringify(this.w.o)
		const filters=this.w.o,next=await eval(fucase(this.w.X)).list(()=>oo==JSON.stringify(filters),x=>{
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
		},$=>this.E('wb_list').append(...$),filters,p)
		if(next=='✘')return
		this.E('website').d_attr('wait')
		this.E('wb_list').s_attr({p:next})
	}
	website_info(e,ifv=false){
		const id=this.w.id=e.g_attr('i').trim()
		if(ifv){
			this.w.X=e.g_attr('x')
			this.w.s={[id]:JSON.parse(e.g_attr('o'))}
			this.E('wb_info').s_attr('fv')
			this.E('website').node('h2').childNodes[1].textContent=this.wm[this.w.X]
		}
		this.E('wb_back').d_attr('hide')
		this.E('wb_search').s_attr('hide')
		this.E('wb_collect').d_attr('hide')
		this.E('wb_list').s_attr('hide')
		this.E('wb_filters').s_attr('hide')
		this.E('wb_home').s_attr('hide')
		this.E('wb_info').html(this.loader).d_attr('hide').s_attr({i:id})
		const cover=e.node('img').g_attr('ss')
		const fs=JSON.parse(this.cache(`${this.w.X}_favorites`)||'{}')
		this.E('wb_collect').d_attr('hide').firstChild.s_attr({'xlink:href':id in fs?'/assets/icon.svg#collect_ok':'/assets/icon.svg#collect_no'})
		const h=JSON.parse(this.cache(`${this.w.X}_history_${id}`)||'{}')
		this.w.u=h.u||''
		this.w.end=isNaN(h.end)?0:parseInt(h.end)
		this.w.curr=isNaN(h.curr)?0:parseInt(h.curr)
		this.w.start=isNaN(h.start)?0:parseInt(h.start)
		const todo=v=>{
			this.E('wb_info').s_attr({i:v.id,n:v.title,c:v.cover}).append(
				this.N('title',v.title),
				this.N('p',`类型: ${v.subt||'未知'}　　　语言: ${v.lang||'未知'}`),
				this.N('p',`地区: ${v.area||'未知'}　　　时间: ${v.year||'未知'}`),
				v.directors.length>0?this.N('p',`导演: ${v.directors.join(', ')}`):'',
				v.actors.length>0?this.N('p',`主演: ${v.actors.join(', ')}`):'',
				this.N('video',{preload:'',autoplay:'',crossorigin:'anonymous',controls:'',poster:this.ph,s:'transform:translateZ(0)'}),
				this.N('div',
					this.N('div',{click:'App.pages.video.website_seek("start",this)'},'🟢 '+this.w.start.time()),
					this.N('div',{click:'App.pages.video.website_seek("end",this)'},'-'+this.w.end.time()+' 🔴'),
				),
				v.brief?this.N('brief',v.brief):'',
				this.N('links',...v.links.map(([n,u])=>this.N('div',{u,click:'App.pages.video.website_play(this)'},n=='立即播放'?'默认':n))),
			)
			this.w.cs=Math.floor(Date.now()/1000)
			const $=this.E('wb_info').node('video')
			$.ondurationchange=()=>{
				if(!$.isConnected||isNaN($.duration)||$.duration<250)return
				$.playbackRate=1.25
				const $c=this.E('wb_info').node('links>[active]')
				const uu=$c?$c.g_attr('u'):null
				const cc=$.currentTime=Math.max(this.w.curr,this.w.start)
				this.cache(`${this.w.X}_history_${id}`,JSON.stringify({u:uu,curr:cc,start:this.w.start,end:this.w.end}))
			}
			$.ontimeupdate=()=>{
				if(!$.isConnected||isNaN($.duration)||$.duration<250)return
				const ns=Math.floor(Date.now()/1000)
				if(ns-this.w.cs>=4){
					this.w.cs=ns
					const $c=this.E('wb_info').node('links>[active]')
					const uu=$c?$c.g_attr('u'):null,cc=$.currentTime
					this.cache(`${this.w.X}_history_${id}`,JSON.stringify({u:uu,curr:cc,start:this.w.start,end:this.w.end}))
				}
				if($.duration-$.currentTime>this.w.end)return
				const $o=this.E('wb_info').node('links>[active]'),$n=$o?$o.nextElementSibling:null
				$n&&$n.click()
			}
			this.E('wb_info').node('title').scrollIntoView({block:'start'})
			this.E('wb_info').node('.video_loader')?.remove()
			const $u=this.E('wb_info').node(`links>[u${this.w.u?('="'+this.w.u+'"'):''}]`)
			$u&&$u.click()
		}
		if(id in this.w.s)return todo(this.w.s[id])
		eval(fucase(this.w.X)).info(()=>this.w.id==id,o=>todo(o),id)
	}
	website_seek(_,e){
		const $=this.E('wb_info').node('video')
		const ct=$.currentTime,tc=$.duration
		this.w[_]=_=='end'?(tc-ct):ct
		e.innerText=e.innerText.replace(/\d+:\d+(:\d+)?/,this.w[_].time())
	}
	async website_play(e){
		const cu=e.g_attr('u'),uu=e.g_attr('uu')
		if(this.w.u!=cu){
			this.w.u=cu
			this.w.curr=0
		}
		this.E('wb_info').nodes('links>*').forEach(_=>_[_==e?'s_attr':'d_attr']('active'))
		const $=this.E('wb_info').node('video')
		if(uu&&uu.startsWith('http'))return $.s_attr({src:uu})
		if(cu.startsWith('http'))return $.s_attr({src:cu})
		await eval(fucase(this.w.X)).src(()=>this.w.u==cu,(u,nu)=>{
			if(u&&u.startsWith('http'))$.s_attr({src:u})
			if(nu&&nu.startsWith('http'))e.nextElementSibling.s_attr({uu:nu})
		},cu)
	}
}
