H.page_news=async function(){
	if(this.M.classList.contains('loaded'))return;
	
	const WS_MAP={flw:'菲龙网',fxb:'菲星报',jssj:'金十数据',cls:'财联社'};
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