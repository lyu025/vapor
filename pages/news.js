class News extends Page{
	static #o=null;
	static open(){
		if (!this.#o)this.#o=new News();
		return this.#o
	}
	define(){
		this.w={}
		this.wm={flw:'菲龙网',fxb:'菲星报',jssj:'金十数据',cls:'财联社'};
		this.pholder='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTAyNCAxMDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik01MTUuNDU2IDI5OC42NjY2NjdsMi45NDQgMC4wNDI2NjZjNTQuMTg2NjY3IDEuMDAyNjY3IDEwMy44MjkzMzMgOS4zNDQgMTQzLjQ2NjY2NyAyMi43MmwyLjI0IDAuNzQ2NjY3LTE5MC42MTMzMzQgMTAuMzI1MzMzYTEwLjk0NCAxMC45NDQgMCAwIDAtMTAuMzQ2NjY2IDExLjExNDY2NyAxMS44MTg2NjcgMTEuODE4NjY3IDAgMCAwIDEwLjcwOTMzMyAxMS41NDEzMzNsMTE4LjI5MzMzMyAxMS4wOTMzMzR2MjMuNTUybC0xNzUuODI5MzMzIDQuMTM4NjY2YTExLjE3ODY2NyAxMS4xNzg2NjcgMCAwIDAtMTAuOTAxMzMzIDExLjE3ODY2N2MwIDYuMTAxMzMzIDQuOCAxMS4xNTczMzMgMTAuODggMTEuNDU2bDI0Ny40MjQgMTIuMDc0NjY3djE4LjcwOTMzM2wtMjAwIDYuMDhhMTEuNzMzMzMzIDExLjczMzMzMyAwIDAgMCAwIDIzLjUzMDY2N2wxMjguNDI2NjY2IDQuNDM3MzMzdjIzLjUwOTMzM2wtMjE4LjU2IDQuNDhhMTEuNzEyIDExLjcxMiAwIDAgMC0xMS40NzczMzMgMTEuNzMzMzM0YzAgNi4zNzg2NjcgNS4wNzczMzMgMTEuNjA1MzMzIDExLjQ3NzMzMyAxMS43OTczMzNsMjkwLjA0OCA4LjQyNjY2N3YxOS4zMDY2NjZsLTIxMy45NzMzMzMgOS4xMDkzMzRhMTEuMzkyIDExLjM5MiAwIDAgMC0xMC45MjI2NjcgMTEuMzkyYzAgNi4wOCA0Ljg0MjY2NyAxMS4wNzIgMTAuOTIyNjY3IDExLjI2NGwxNDIuNTA2NjY3IDQuNDM3MzMzdjI0LjEyOGwtMTc5LjUyIDUuNDE4NjY3YTExLjQ5ODY2NyAxMS40OTg2NjcgMCAwIDAtMTEuMTU3MzM0IDExLjQ5ODY2NmMwIDYuMjI5MzMzIDQuOTA2NjY3IDExLjM0OTMzMyAxMS4xNTczMzQgMTEuNTg0bDI1MS4zOTIgOS42NDI2Njd2MjEuOTMwNjY3bC0xNzYuODUzMzM0IDcuODkzMzMzYTEyLjIwMjY2NyAxMi4yMDI2NjcgMCAwIDAtMTEuNjQ4IDEyLjIwMjY2N2MwIDYuNTQ5MzMzIDUuMTIgMTEuOTQ2NjY3IDExLjY0OCAxMi4zMDkzMzNsMTc4Ljk0NCA5LjY4NTMzMy0yLjI0IDAuNzQ2NjY3Yy0zOS42MzczMzMgMTMuMzc2LTg5LjI4IDIxLjcxNzMzMy0xNDMuNDY2NjY2IDIyLjcybC0yLjk2NTMzNCAwLjA0MjY2Ny0xLjM0NC0wLjAyMTMzNGgtMTZsLTQuMTM4NjY2LTAuMDg1MzMzYTU2OS44NzczMzMgNTY5Ljg3NzMzMyAwIDAgMS00NS44NjY2NjctMi44NTg2NjdsLTMuMi0wLjM0MTMzM2EyMjkuNDYxMzMzIDIyOS40NjEzMzMgMCAwIDEtNzkuOTE0NjY3LTI5LjU0NjY2N0MzMDAuNDM3MzMzIDY3NC43NzMzMzMgMjU2IDYwMy41MiAyNTYgNTIyLjExMmMwLTExMC4zMTQ2NjcgODEuNi0yMDEuOTYyNjY3IDE4OC44ODUzMzMtMjIwLjE2bDMuMi0wLjMyYTU2OS44NzczMzMgNTY5Ljg3NzMzMyAwIDAgMSA0NS44NjY2NjctMi44NTg2NjdsNC4yODgtMC4wODUzMzNoMTUuODUwNjY3bDEuMzY1MzMzLTAuMDIxMzMzeiBtMTc5LjQzNDY2NyAzNjEuMDg4bDE0Mi4yMDggMTAuMDI2NjY2LTE0Mi4yMDggOS44MzQ2Njd2LTE5Ljg2MTMzM3ogbS03MS40NjY2NjctNjEuMzMzMzM0bDIzNC4yODI2NjcgMTEuNzk3MzM0LTIzNC4yODI2NjcgMTEuNzk3MzMzVjU5OC40eiBtNzEuNDY2NjY3LTU2LjU5NzMzM2wyMjEuNDgyNjY2IDguNzY4LTIyMS40ODI2NjYgOC43ODkzMzN6TTkzOC42NjY2NjcgNDkzLjE0MTMzM2gtMC4zNDEzMzRjLTYuNjU2IDAuMjU2LTExMS42MzczMzMgNC4wNTMzMzMtMzE0LjkwMTMzMyAxMS4zNzA2Njd2LTIyLjcyTDkzOC42NjY2NjcgNDkzLjE0MTMzM3pNNjk0Ljg5MDY2NyA0MjkuMjI2NjY3bDE3Ny4zODY2NjYgOC43NjgtMTc3LjM4NjY2NiA4Ljc4OTMzM3ogbTEzMC44MTYtNTAuOTAxMzM0bC0yMDIuMjgyNjY3IDEwLjQxMDY2N3YtMjAuODQyNjY3bDIwMi4yODI2NjcgMTAuNDMyeiI+PC9wYXRoPjwvc3ZnPg=='
		this.loader=`<svg class='news_loader' viewBox='0 0 50 50'><path d='M25,5 a20,20 0 1,1 -20,20' stroke='var(--fg)' stroke-width='1' fill='none' stroke-linecap='round'><animate attributeName='stroke-dasharray' values='10,60;60,10;10,60' dur='1.5s' repeatCount='indefinite'/><animateTransform attributeName='transform' type='rotate' from='0 25 25' to='360 25 25' dur='1s' repeatCount='indefinite'/></path></svg>`
	}
	constructor(){
		if(News.#o)return
		super('news')
		Vapor.loader.s_attr('hide')
	}
	nodes(){
		return[
			this.N('card',{id:'website',cc:'website'},
				this.N('h2',this.N('svg',{path:'website'}),'媒体源',
					this.N('svg',{id:'wb_back',path:'back',h:true,click:'App.pages.news.website_back(this)'}),
				),
				this.N('div',{id:'wb_home',T:'A',c:'grid',s:'--gc:2'},
					...Object.keys(this.wm).map(_=>this.N('div',{X:_,N:this.wm[_],click:`App.pages.news.website_filters("${_}",this)`},this.N('svg',{path:_})))
				),
				this.N('div',{id:'wb_filters',T:'F',h:true}),
				this.N('div',{id:'wb_list',T:'W',h:true,c:'grid',s:'--gc:1',more:'App.pages.news.website_list'}),
				this.N('div',{id:'wb_info',T:'O',h:true,c:'row'}),
			),
		]
	}
	styles(){
		return[
			'ᝰ>[cc="website"]>h2>svg:nth-child(2){margin-left:auto;width:22px;height:22px}',
			'ᝰ>[cc="website"]>[T="A"]>*{aspect-ratio:22/9;padding:0 3rem}',
			'ᝰ>[cc="website"]>[T="A"]>div>svg{width:100%;height:100%;object-fit:contain}',
			
			'ᝰ>[cc="website"]>[T="F"]{position:sticky;top:36px;z-index:100000;min-height:20px;background:var(--bg);display:flex;flex-direction:column}',
			'ᝰ>[cc="website"]>[T="F"]:empty:after{content:"正在加载筛选项，请耐心等待一下 ...";display:block;width:100%;position:absolute;top:50%;left:0;z-index:10;transform:translateY(-50%);font-size:.8rem;text-align:center}',
			'ᝰ>[cc="website"]>[T="F"]>div{display:block;white-space:nowrap;min-width:100%;overflow-x:auto;overflow-y:hidden}',
			'ᝰ>[cc="website"]>[T="F"]>div::-webkit-scrollbar{height:4px}',
			'ᝰ>[cc="website"]>[T="F"]>div>*{border-bottom:2px solid rgba(0,0,0,0);display:inline-block;width:auto;padding:0 1rem;line-height:24px;font-size:.9rem}',
			'ᝰ>[cc="website"]>[T="F"]>div>[active]{border-bottom-color:var(--h-bd);font-size:1rem}',
			
			'ᝰ>[cc="website"]>[T="W"]>div{display:flex;flex-direction:column;height:auto;aspect-ratio:unset;border:.02rem solid var(--h-bd);box-shadow:4px 2px rgba(100,100,100,.3)}',
			'ᝰ>[cc="website"]>[T="W"]>div[in="1"]{border:.02rem solid var(--success);box-shadow:4px 2px var(--success)}',
			'ᝰ>[cc="website"]>[T="W"]>div>div:first-child{font-size:1.1rem;padding:8px 0 2px 3px;line-height:1.2;background:rgba(200,200,200,.1)}',
			'ᝰ>[cc="website"]>[T="W"]>div>div:first-child>svg{display:block;float:left;width:28px;height:16px;object-fit:contain;margin-right:5px}',
			'ᝰ>[cc="website"]>[T="W"]>div>brief{display:block;border-radius:2px;background:rgba(150,150,150,.1);color:var(--success);font-size:.8rem;line-height:1.05;padding:4px}',
			'ᝰ>[cc="website"]>[T="W"]>div>time{display:block;color:var(--ph);font-size:.9rem;line-height:1.05;padding:4px}',
			'ᝰ>[cc="website"]>[T="W"]>div>.imgs{height:90px;overflow:hidden}',
			'ᝰ>[cc="website"]>[T="W"]>div>.imgs>img{display:block;float:left;height:90px;object-fit:contain}',
			
			'ᝰ>[cc="website"]>[T="O"]{display:flex;flex-direction:column;min-height:30vh;padding:1rem}',
			'ᝰ>[cc="website"]>[T="O"]>svg{width:24%;margin:1rem auto;object-fit:contain;flex:1}',
			'ᝰ>[cc="website"]>[T="O"]>title{display:block;width:100%;line-height:1.2;margin-top:6px;font-size:1.1rem;font-weight:bold}',
			'ᝰ>[cc="website"]>[T="O"]>time{display:block;width:100%;margin-top:6px;color:var(--ph)}',
			'ᝰ>[cc="website"]>[T="O"]>div{padding:8px;background:rgba(150,150,150,.2);border-radius:3px;margin-top:6px;font-size:.9rem}',
			'ᝰ>[cc="website"]>[T="O"]>div>p{line-height:1.3;font-size:.9rem;margin:10px 0 0 0}',
			'ᝰ>[cc="website"]>[T="O"]>div>strong{display:block;line-height:1.6;font-size:1.1rem;margin-top:14px;font-weight:bold}',
			'ᝰ>[cc="website"]>[T="O"] img{display:block;width:100%;object-fit:contain;margin-top:6px}',
		]
	}
	website_back(e){
		this.E('website').d_attr('wait')
		if(!this.E('wb_info').h_attr('hide')){
			const id=this.E('wb_info').g_attr('i')
			this.E('wb_info').s_attr('hide').d_attr('i').html('')
			this.E('wb_filters').d_attr('hide')
			this.E('wb_list').d_attr('hide').node('[i="'+id+'"]').scrollIntoView({block:'center'})
			return
		}
		this.E('website').node('h2').childNodes[1].textContent='媒体源'
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
			this.script(`/addons/${X}.js`,`App.pages.news.website_filters("${X}")`)
			return
		}
		this.w={X}
		this.E('wb_back').d_attr('hide')
		this.E('wb_home').s_attr('hide')
		this.E('wb_list').d_attr('hide').html('')
		this.E('wb_info').s_attr('hide').html('')
		this.E('wb_filters').html('').d_attr('hide')
		this.E('website').node('h2').childNodes[1].textContent=this.wm[X]
		eval(fucase(X)).filters(()=>this.w.X==X,o=>{
			const $=o.map(({id,title})=>this.N('div',{t:id,n:title,click:'App.pages.news.website_list(this)'},title))
			this.E('wb_filters').append(this.N('div',...$))
			this.E('wb_filters').node('div>[t]').click()
		})
	}
	async website_list(e,p=1){
		if(p=='..')return
		if(e){
			this.w.T=e.g_attr('t')
			this.E('wb_list').s_attr({p:1}).html('')
			e.parentNode.childNodes.forEach(_=>_[_==e?'s_attr':'d_attr']('active'))
		}
		this.E('website').s_attr('wait')
		const T=this.w.T,next=await eval(fucase(this.w.X)).list(()=>this.w.T==T,async o=>{
			let oo
			if(this.w.X=='fxb'){
				const x=[]
				o.forEach(({title,brief})=>x.push(title,brief))
				oo=await this.trans(x)
			}
			const sid=(this.cache(`news_${this.w.X}_${this.w.T}`)||'')+','
			const $=o.map(({x,id,ni,url,title,brief,img,time,red},i)=>{
				const tt=this.N('div',red?this.N('svg',{path:'important'}):'')
				tt.innerHTML+=oo?oo[i*2]:title
				const n=sid===','?true:!(sid+',').includes(`,${x},`)
				return this.N('div',{i:id,x,in:n?'1':'0',ni,click:'App.pages.news.website_info(this)'},
					tt,brief?this.N('brief',oo?oo[i*2+1]:brief):'',
					img?this.N('div',{c:'imgs'},this.N('img',{src:this.pholder,ss:this.link(img)})):'',
					time?this.N('time',time):'',
				)
			})
			this.E('wb_list').append(...$)
		},this.w.T,p)
		if(next=='✘')return
		this.E('website').d_attr('wait')
		this.E('wb_list').s_attr({p:next})
	}
	async website_info(e){
		const x=e.g_attr('x').trim()
		const xs=this.cache(`news_${this.w.X}_${this.w.T}`)||''
		this.cache(`news_${this.w.X}_${this.w.T}`,`${xs},${x}`)
		e.d_attr('in')
		if(e.g_attr('ni')=='1')return
		const id=e.g_attr('i').trim(),T=this.w.T
		this.E('wb_filters').s_attr('hide')
		this.E('wb_list').s_attr('hide')
		this.E('wb_home').s_attr('hide')
		this.E('wb_info').html(this.loader).d_attr('hide').s_attr({i:id})
		
		eval(fucase(this.w.X)).info(()=>this.w.T==T,async({title,time,box})=>{
			let oo
			if(this.w.X=='fxb'){
				oo=await this.trans([title,...box])
				for(let i in oo)if(i>0){
					const v=oo[i].trim()
					if(!v.startsWith('<'))oo[i]=(i==1?'<p>':'<p>&emsp;&emsp;')+v+'</p>'
					else if(!v.split('>')[1].startsWith('&emsp;')){
						const [vf,...ov]=v.split('>')
						oo[i]=vf+(i==1?'>':'>&emsp;&emsp;')+ov.join('>')
					}
				}
			}
			this.E('wb_info').append(
				this.N('title',oo?oo.shift():title),
				this.N('time',time),
				this.N('div'),
			)
			this.E('wb_info').node('title').scrollIntoView({block:'start'})
			this.E('wb_info').node('.news_loader')?.remove()
			this.E('wb_info').node('div').innerHTML=(oo||box).join('').trim()
		},id)
	}
}