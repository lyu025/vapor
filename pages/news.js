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
	}
	constructor(){
		if(News.#o)return
		super('news')
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
				this.N('div',{id:'wb_info',T:'V',h:true,c:'row'}),
			),
		]
	}
	styles(){
		return[
			'ᝰ>[cc="website"]>h2>svg:nth-child(2){margin-left:auto;width:22px;height:22px}',
			'ᝰ>[cc="website"]>[T="A"]>*{aspect-ratio:22/9;padding:2rem}',
			'ᝰ>[cc="website"]>[T="A"]>div>svg{width:100%;height:100%;object-fit:contain}',
			
			'ᝰ>[cc="website"]>[T="F"]{position:sticky;top:36px;z-index:100000;min-height:20px;background:var(--bg);display:flex;flex-direction:column}',
			'ᝰ>[cc="website"]>[T="F"]:empty:after{content:"正在加载筛选项，请耐心等待一下 ...";display:block;width:100%;position:absolute;top:50%;left:0;z-index:10;transform:translateY(-50%);font-size:.8rem;text-align:center}',
			'ᝰ>[cc="website"]>[T="F"]>div{display:block;white-space:nowrap;min-width:100%;overflow-x:auto;overflow-y:hidden}',
			'ᝰ>[cc="website"]>[T="F"]>div::-webkit-scrollbar{height:4px}',
			'ᝰ>[cc="website"]>[T="F"]>div>*{border-bottom:2px solid rgba(0,0,0,0);display:inline-block;width:auto;padding:0 1rem;line-height:24px;font-size:.9rem}',
			'ᝰ>[cc="website"]>[T="F"]>div>[active]{border-bottom-color:var(--h-bd);font-size:1rem}',
			
			'ᝰ>[cc="website"]>[T="W"]>div{display:flex;flex-direction:column;height:auto;aspect-ratio:unset;box-shadow:3px 6px 1px rgba(100,100,100,.3)}',
			'ᝰ>[cc="website"]>[T="W"]>div>div:first-child{font-size:1.1rem;padding:8px 0 2px 0;line-height:1.1;background:rgba(200,200,200,.1)}',
			'ᝰ>[cc="website"]>[T="W"]>div>brief{display:block;border-radius:2px;background:rgba(150,150,150,.1);color:var(--success);font-size:.8rem;line-height:1.05;padding:4px}',
			'ᝰ>[cc="website"]>[T="W"]>div>div:nth-child(3){height:80px;overflow:hidden}',
			'ᝰ>[cc="website"]>[T="W"]>div>div:nth-child(3)>img{display:block;float:left;height:80px;object-fit:contain;margin-right:2px}',
			
			'ᝰ>[cc="website"]>[T="V"]{display:flex;flex-direction:column;min-height:30vh}',
			'ᝰ>[cc="website"]>[T="V"]>svg{width:24%;margin:1rem auto;object-fit:contain;flex:1}',
			
			'ᝰ>[cc="website"]>[T="V"]>p{line-height:1.2;font-size:.9rem;padding:0 .8rem;margin:0;border-bottom:1px solid var(--h-bd)}',
		]
	}
	website_back(e){
		if(!this.E('wb_info').h_attr('hide'))return this.E('wb_info').s_attr('hide').html('')
		this.E('wb_filters').s_attr('hide').html('')
		this.E('wb_info').s_attr('hide').html('')
		this.E('wb_list').s_attr('hide').html('')
		this.E('wb_home').d_attr('hide')
		e.s_attr('hide')
	}
	website_filters(X,e){
		this.w={X}
		this.E('wb_home').s_attr('hide')
		this.E('wb_back').d_attr('hide')
		this.E('wb_list').d_attr('hide').html('')
		this.E('wb_info').s_attr('hide').html('')
		this.E('wb_filters').html('').d_attr('hide')
		this.E('website').node('h2').childNodes[1].textContent=this.wm[X]
		switch(X){
			case 'flw':
				const $=[
					{v:'40',n:'本地'},{v:'82',n:'华人'},{v:'157',n:'国内'},{v:'91',n:'国际'},{v:'89',n:'科技'}
				].map(_=>this.N('div',{t:_.v,n:_.n,click:'App.pages.news.website_list(this)'},_.n));
				this.E('wb_filters').append(this.N('div',...$))
				this.E('wb_filters').node('div>[t]').click()
				break
			case 'fxb':
				
				break
			case 'jssj':
				
				break
			case 'cls':
				
				break
			
		}
	}
	async website_list(e,p=1){
		if(e){
			this.w.T=e.g_attr('t')
			this.E('wb_list').s_attr({p:1}).html('')
			this.E('website').classList.add('wait')
			e.parentNode.childNodes.forEach(_=>_[_==e?'s_attr':'d_attr']('active'))
		}
		let url
		switch(this.w.X){
			case 'flw':
				url=`https://www.flw.ph/forum.php?mod=forumdisplay&fid=${this.w.T}&filter=lastpost&orderby=dateline&mobile=2&page=${p}`
				await fetch(url,{headers:{'x-up':'true'}}).then(_=>_.text()).then(_=>{
					let $=_.split('<li id="thread_')
					$.shift()
					$=$.map(_=>{
						const id=_.split('">').shift().trim()
						const title=_.split('<h3 class="">')[1].split('<').shift().trim()
						const brief=_.split('<div class="art-title">')[1].split('</div>').shift().replace(/[\r\n\s]/g,'')
						let imgs=_.split('<div class="piclist')
						imgs=imgs[1]?imgs[1].split('</div>').shift().split('<img src="').map(i=>i.split('"').shift().trim()).filter(_=>_.startsWith('http')):null
						if(!id||!title)return null
						return this.N('div',{i:id,click:'App.pages.news.website_info(this)'},
							this.N('div',title),
							brief?this.N('brief',brief):'',
							imgs?this.N('div',...imgs.map(s=>this.N('img',{src:this.pholder,ss:this.pp+encodeURIComponent(s)}))):''
						)
					}).filter(_=>_)
					this.E('wb_list').s_attr({p:p+1}).append(...$)
					this.E('website').classList.remove('wait')
				})
				break
		}
		
	}
	async website_info(e){
		
	}
}

/*
H.page_news=async function(){
	if(this.M.classList.contains('loaded'))return;
	
	iconst WS_MAP={flw:'菲龙网',fxb:'菲星报',jssj:'金十数据',cls:'财联社'};
	this.X.news={
		website:{},
		website_load:()=>{
			'#news_website>.grid'.N().innerHTML=Object.keys(WS_MAP).map(_=>`<div X='${_}' N='${WS_MAP[_]}' onclick='H.X.news.website_init(this)'>${_.V()}</div>`).join('');
		},
		website_back:async e=>{
			const $a='#news_website>[T="A"]'.N(),$f='#news_website>[T="F"]'.N();
			const $w='#news_website>[T="W"]'.N(),$v='#news_website>[T="V"]'.N();
			const $t=Array.from('#news_website>h2'.N().childNodes).find(n=>n.nodeType===Node.TEXT_NODE);
			if(!$v.classList.contains('hide')){
				await H.X.news.website_option(0);
				$v.innerHTML='';
				$v.classList.add('hide');
				if(!$f.firstChild){
					$a.classList.remove('hide');
					return;
				}
				$f.classList.remove('hide');
				$w.classList.remove('hide');
				$t.textContent=WS_MAP[this.X.news.website.X];
				return;
			}
			if(!$f.classList.contains('hide')){
				$f.classList.add('hide');
				$w.classList.add('hide');
				$a.classList.remove('hide');
				e.classList.add('hide');
				$t.textContent='媒体源';
				$f.innerHTML='';
				$w.innerHTML='';
			}
		},
		website_init:async e=>{
			const X=e.getAttribute('X'),N=e.getAttribute('N');
			this.X.news.website={X};
			const $t=Array.from('#news_website>h2'.N().childNodes).find(n=>n.nodeType===Node.TEXT_NODE);
			$t.textContent=N;
			'#news_website>[T="A"]'.N().classList.add('hide');
			'#news_website>[T="F"],#news_website>[T="W"]'.N(true).forEach(_=>_.classList.remove('hide'));
			'#news_website>h2>#website_back'.N().classList.remove('hide');
			
			
		},
		website_list:async(e,p=1)=>{
			const $w=`#news_website>[T='W']`.N();
			`#news_website`.N().classList.add('wait');
			if(e){
				const k=e.getAttribute('k'),v=e.getAttribute('v');
				if(k=='T'&&p==1){
					
				}
				$w.innerHTML='';
				$w.classList.remove('open');
				`#news_website>[T='F']>[k='${k}']>*`.N(true).forEach(_=>_.classList[_.getAttribute('v')==v?'add':'remove']('active'));
			}
			const X=`#news_website>[T='F']>*>[k].active`.N(true).map(_=>[_.getAttribute('k'),_.getAttribute('v')]).reduce((_,[k,v])=>{_[k]=v;return _},{});
			
		},
	};
	
	this.M.innerHTML=`
		<style>
			#news_website>h2>#website_back{margin-left:auto;width:22px;height:22px}
			#news_website>h2>#website_collect{margin-left:1rem;width:22px;height:22px}
			#news_website>[T='A']>*{aspect-ratio:22/9;padding:2rem}
			#news_website>[T='A']>div>svg{width:100%;height:100%;object-fit:contain}
			
		</style>
		<card id='news_website'><h2>${'website'.V()}媒体源${'back'.V('X.news.website_back',{id:'website_back',c:'hide'})}</h2>
			<div T='A' class='grid' style='--gc:2'></div>
			<div T='F' class='hide'></div>
			<div T='W' class='grid hide' style='--gc:1' more='H.X.news.website_list' p='1'></div>
			<div T='V' class='row hide'></div>
		</card>
	`;
	this.X.news.website_load();
	
	this.M.classList.add('loaded');
	setTimeout(()=>'main>svg'.N().classList.add('hide'),800);
}
*/