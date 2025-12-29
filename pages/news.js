class News extends Page{
	static #o=null;
	static open(){
		if (!this.#o)this.#o=new News();
		return this.#o
	}
	define(){
		this.wm={flw:'菲龙网',fxb:'菲星报',jssj:'金十数据',cls:'财联社'};
		
	}
	constructor(){
		if(News.#o)return
		super('home')
	}
	nodes(){
		return[
			this.N('card',{id:'website',cc:'website'},
				this.N('h2',this.N('svg',{path:'website'}),'媒体源',
					this.N('svg',{path:'back',h:true,click:'App.pages.news.website_back(this)'}),
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
			'ᝰ>[cc="website"]>h2>#website_back{margin-left:auto;width:22px;height:22px}',
			'ᝰ>[cc="website"]>h2>#website_collect{margin-left:1rem;width:22px;height:22px}',
			'ᝰ>[cc="website"]>[T="A"]>*{aspect-ratio:22/9;padding:2rem}',
			'ᝰ>[cc="website"]>[T="A"]>div>svg{width:100%;height:100%;object-fit:contain}',
			
			'ᝰ>[cc="website"]>[T="F"]{position:sticky;top:36px;z-index:100000;min-height:60px;background:var(--bg);display:flex;flex-direction:column}',
			'ᝰ>[cc="website"]>[T="F"]:empty:after{content:"正在加载筛选项，请耐心等待一下 ...";display:block;width:100%;position:absolute;top:50%;left:0;z-index:10;transform:translateY(-50%);font-size:.8rem;text-align:center}',
			'ᝰ>[cc="website"]>[T="F"]>div{display:block;white-space:nowrap;min-width:100%;overflow-x:auto;overflow-y:hidden}',
			'ᝰ>[cc="website"]>[T="F"]>div::-webkit-scrollbar{height:4px}',
			'ᝰ>[cc="website"]>[T="F"]>div>*{border-bottom:2px solid rgba(0,0,0,0);display:inline-block;width:auto;padding:0 1rem;line-height:24px;font-size:.9rem}',
			'ᝰ>[cc="website"]>[T="F"]>div>.active{border-bottom-color:var(--h-bd);font-size:1rem}',
			
			'ᝰ>[cc="website"]>[T="W"]>div{position:relative}',
			'ᝰ>[cc="website"]>[T="W"]>div>img{display:block;width:100%;object-fit:cover;aspect-ratio:9/14;flex:1}',
			'ᝰ>[cc="website"]>[T="W"]>div>score{position:absolute;top:8px;left:8px;z-index:20;display:block;font-size:.8rem;-webkit-text-stroke:.06rem var(--fg)}',
			'ᝰ>[cc="website"]>[T="W"]>div>tip{position:absolute;top:50%;left:12px;right:12px;transform:translateY(-60%);text-align:center;z-index:20;display:block;font-size:.8rem;-webkit-text-stroke:.01rem var(--bg)}',
			'ᝰ>[cc="website"]>[T="W"]>div>div{padding:0 .8rem;height:16px;display:flex;align-items:center;justify-content:center;line-height:1;text-align:center;font-size:.5rem}',
			
			'ᝰ>[cc="website"]>[T="V"]{display:flex;flex-direction:column;min-height:30vh}',
			'ᝰ>[cc="website"]>[T="V"]>svg{width:24%;margin:1rem auto;object-fit:contain;flex:1}',
			
			'ᝰ>[cc="website"]>[T="V"]>p{line-height:1.2;font-size:.9rem;padding:0 .8rem;margin:0;border-bottom:1px solid var(--h-bd)}',
		]
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