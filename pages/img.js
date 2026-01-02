class Img extends Page{
	static #o=null;
	static open(){
		if(!this.#o)this.#o=new Img();
		return this.#o
	}
	define(){
		this.ph='data:image/jpeg;base64,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'
		this.icons_can_copy=this.cache('icons_can_copy')==='1'
		this.vector_is_run=false
		this.vector_img=null
	}
	constructor(){
		if(Img.#o)return
		super('img')
	}
	nodes(){
		return[
			this.N('card',{id:'icons',cc:'list'},
				this.N('h2',this.N('svg',{path:'icon'}),'图标库',
					this.N('input',{id:'icons_search',type:'search',placeholder:'请输入搜索内容...',onsearch:'App.pages.img.icons_search(true)'}),
					this.N('svg',{path:'copy_'+(this.icons_can_copy?'ok':'no'),click:'App.pages.img.icons_toggle_copy(this)'})
				),
				this.N('div',{id:'icons_list',c:'grid',s:'--gc:5',more:'App.pages.img.icons_search',p:1})
			),
			this.N('card',{id:'gallery',cc:'list'},
				this.N('h2',this.N('svg',{path:'gallery'}),'画廊',
					this.N('input',{id:'gallery_search',type:'search',placeholder:'请输入搜索内容...',onsearch:'App.pages.img.gallery_search(true)'}),
					this.N('svg',{path:'trash',click:'App.pages.img.gallery_flush(this)'})
				),
				this.N('div',{id:'gallery_list',c:'grid gallery',s:'--gc:1',more:'App.pages.img.gallery_search',p:1})
			),
			this.N('card',{id:'vector',cc:'vector'},
				this.N('h2',this.N('svg',{path:'vector'}),'矢量化'),
				this.N('div',{c:'row'},
					this.N('div',{c:'option',t:'potrace',k:'plugin',v:'potrace'},
						this.N('div','核心插件',
							this.N('span',{click:'App.pages.img.vector_select(this)',v:'potrace'},this.N('svg',{path:'check_on'}),'Potrace.JS'),
						),
						this.N('div','Protrace.JS生成黑白色图片，...'),
					),
					this.N('div',{c:'option',t:'potrace',k:'cmode',v:'1'},
						this.N('div','彩色模式',
							this.N('svg',{path:'switch_on',click:'App.pages.img.vector_toggle(this)',v:'potrace'}),
						),
						this.N('div','开启后生成彩色图片，否则输出黑白图片'),
					),
					this.N('div',{c:'option',t:'potrace',k:'colors',v:'1'},
						this.N('div','颜色数量',this.N('i','(1)'),
							this.N('input',{type:'range',value:1,min:1,max:255,onchange:'App.pages.img.vector_range(this)'}),
						),
						this.N('div','开启彩色模式后才生效，显示最多颜色数量'),
					),
					this.N('div',{c:'option',t:'potrace',k:'turnpolicy',v:'5'},
						this.N('div','路径解析策略',this.N('i','(minority)'),
							this.N('input',{type:'range',value:5,min:1,max:6,onchange:'App.pages.img.vector_range(this)'}),
						),
						this.N('div','路径解析策略: 1.black 2.white 3.left 4.right 5.minority 6.majority'),
					),
					this.N('div',{c:'option',t:'potrace',k:'turdsize',v:'2'},
						this.N('div','抖动阈值',this.N('i','(2)'),
							this.N('input',{type:'range',value:2,min:0,max:100,onchange:'App.pages.img.vector_range(this)'}),
						),
						this.N('div','控制忽略的小区域大小，值越大细节越少'),
					),
					this.N('div',{c:'option',t:'potrace',k:'alphamax',v:'1'},
						this.N('div','边角阈值',this.N('i','(1)'),
							this.N('input',{type:'range',value:1,min:0,max:12,step:'.1',onchange:'App.pages.img.vector_range(this)'}),
						),
						this.N('div','控制曲线拐角平滑程度，值越小拐角越尖锐'),
					),
					this.N('div',{c:'option',t:'potrace',k:'opticurve',v:'1'},
						this.N('div','优化曲线',
							this.N('svg',{path:'switch_on',click:'App.pages.img.vector_toggle(this)'}),
						),
						this.N('div','开启后生成更平滑的曲线，可能会增加处理时间'),
					),
					this.N('div',{c:'option',t:'potrace',k:'opttolerance',v:'0.2'},
						this.N('div','优化容差',this.N('i','(0.2)'),
							this.N('input',{type:'range',value:0.2,min:0,max:100,step:'.1',onchange:'App.pages.img.vector_range(this)'}),
						),
						this.N('div','值越小精度越高，值越大简化程度越高'),
					),
					this.N('div',{c:'todo'},
						this.N('span',{click:'App.pages.img.upload("vector",this)'},this.N('svg',{path:'upload'}),'上传图片'),
						this.N('span',{click:'App.pages.img.vector_copy(this)'},this.N('svg',{path:'copy_ok'}),'复制Svg代码'),
						this.N('div',{click:'App.pages.img.vector_build(this)'},'生成Svg图片'),
					),
					this.N('div',{c:'output'},
						this.N('div',
							this.N('div',{oi:true,a:true,click:'App.pages.img.vector_tab("y",this)'},'原图'),
							this.N('div',{svg:true,click:'App.pages.img.vector_tab("s",this)'},'Svg图'),
							this.N('div',{click:'App.pages.img.vector_tab("c",this)'},'Svg代码'),
						),
						this.N('div',{i:'y',a:true}),this.N('div',{i:'s'}),
						this.N('textarea',{i:'c',readonly:true}),
					),
				),
			),
			
		];
	}
	styles(){
		return[
			'ᝰ>[cc="list"]>h2>svg{margin-left:auto;width:22px;height:22px}',
			'ᝰ>[cc="list"]>.grid>div{aspect-ratio:9/12;display:flex;flex-direction:column;position:relative}',
			'ᝰ>[cc="list"]>.gallery>div{aspect-ratio:unset}',
			'ᝰ>[cc="list"]>.gallery>div>img{display:block;width:100%;object-fit:contain}',
			'ᝰ>[cc="list"]>.gallery>div>div{font-size:.9rem;line-height:1.1;padding:.8rem}',
			'ᝰ>[cc="list"]>.grid>div>i{display:block;width:auto;line-height:.8rem;font-size:.8rem;position:absolute;top:4px;left:4px;border-bottom:1px solid var(--h-bg);border-radius:2px}',
			'ᝰ>[cc="list"]>.grid>div>svg{flex:1;display:block;width:80%;object-fit:contain;margin:0 auto}',
			'ᝰ>[cc="list"]>.grid>div>div{padding:0 1rem;height:16px;font-size:1.1rem;text-align:center;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}',
			'ᝰ>[cc="vector"]>div{display:flex;flex-direction:column}',
			'ᝰ>[cc="vector"]>div>*{padding:..6rem 1rem 0 1.5rem}',
			'ᝰ>[cc="vector"]>div>.option{border-bottom:1px solid var(--h-bd)}',
			'ᝰ>[cc="vector"]>div>.option>div:first-child{line-height:30px;font-size:1.2rem}',
			'ᝰ>[cc="vector"]>div>.option>div:first-child>i{font-size:.9rem;margin:0 .6rem}',
			'ᝰ>[cc="vector"]>div>.option>div:first-child>span{width:30vw;padding:0 1rem;align-items:center}',
			'ᝰ>[cc="vector"]>div>.option>div:first-child>span>svg{width:18px;height:18px;object-fit:contain;margin:6px .5rem -4px 0}',
			'ᝰ>[cc="vector"]>div>.option>div:first-child>input{width:46vw;float:right;margin-top:10px}',
			'ᝰ>[cc="vector"]>div>.option>div:first-child>svg{float:right;width:50px;height:50px;object-fit:contain;margin-top:4px}',
			'ᝰ>[cc="vector"]>div>.option>div:nth-child(2){line-height:20px;font-size:.8rem}',
			'ᝰ>[cc="vector"]>div>.todo{display:flex;margin:.5rem 0}',
			'ᝰ>[cc="vector"]>div>.todo>span{display:block;width:auto;line-height:30px;height:30px;padding:0 .4rem;margin-right:1rem;font-size:.8rem;border:1px solid var(--h-bd);border-radius:4px}',
			'ᝰ>[cc="vector"]>div>.todo>span>svg{display:block;float:left;width:20px;height:20px;object-fit:contain;margin:5px .6rem 0 0}',
			'ᝰ>[cc="vector"]>div>.todo>div{flex:1;background:var(--primary);color:var(--bg);opacity:.6;border-radius:4px;text-align:center;line-height:30px}',
			'ᝰ>[cc="vector"]>div>.todo>*:hover{box-shadow:0 1px 2px var(--g-bg),0 2px 4px var(--g-bg),0 4px 8px var(--g-bg)}',
			'ᝰ>[cc="vector"]>div>.output{display:flex;flex-direction:column;border:1px solid var(--h-bd);border-radius:6px;overflow:hidden;height:auto}',
			'ᝰ>[cc="vector"]>div>.output>div:first-child{display:flex;line-height:26px;font-size:.8rem;margin:4px 4px 0 4px;text-align:center;border:1px solid var(--h-bd);border-radius:4px 4px 0 0;overflow:hidden}',
			'ᝰ>[cc="vector"]>div>.output>div:first-child>*{flex:1}',
			'ᝰ>[cc="vector"]>div>.output>div:first-child>*:not(ᝰ>[cc="vector"]>div>.output>div:first-child>*:last-child){border-right:1px solid var(--h-bd)}',
			'ᝰ>[cc="vector"]>div>.output>div:first-child>[active]{background:var(--warn);opacity:.6}',
			'ᝰ>[cc="vector"]>div>.output>*:not(ᝰ>[cc="vector"]>div>.output>*:first-child){display:none;min-height:200px;border-top:1px solid var(--h-bd);line-hright:20px;font-size:14px;margin:-1px 4px 4px 4px;padding:2px;background:var(--bg);border:1px solid var(--h-bd);border-radius:0 0 4px 4px}',
			'ᝰ>[cc="vector"]>div>.output>*:not(ᝰ>[cc="vector"]>div>.output>*:first-child)[active]{display:flex;align-items:center}',
			'ᝰ>[cc="vector"]>div>.output>*:not(ᝰ>[cc="vector"]>div>.output>*:first-child)>*{display:block;width:100%;height:100%;object:contain}',
			`ᝰ>[cc="vector"]>div>.output>div:not(ᝰ>[cc="vector"]>div>.output>*:first-child){background:url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDIwIDIwIj48cmVjdCB3aWR0aD0iMTAiIGhlaWdodD0iMTAiIGZpbGw9IiNmMGYwZjAiLz48cmVjdCB4PSIxMCIgeT0iMTAiIHdpZHRoPSIxMCIgaGVpZ2h0PSIxMCIgZmlsbD0iI2YwZjBmMCIvPjwvc3ZnPg==') repeat}`,
			'ᝰ>[cc="code"]>.row>textarea{display:block;height:160px;width:100%;background:rgba(180,180,180,.3);line-height:1.1;font-size:.9rem;box-shadow:0 0 3px rgba(140,140,140,.6);border-radius:3px;padding:6px;margin-bottom:4px}',
			'ᝰ>[cc="code"]>.row>.upload{height:60px;text-align:center;background:rgba(80,80,80,.4);line-height:40px;font-size:30px;box-shadow:0 0 3px rgba(140,140,140,.6);padding:10px;margin-bottom:4px}',
			'ᝰ>[cc="code"]>.row>.grid>*{aspect-ratio:unset;text-align:center;height:auto;line-height:1.6;font-size:1.2rem}',
			
		]
	}
	icons_toggle_copy(e){
		this.cache('icons_can_copy',(this.icons_can_copy=!this.icons_can_copy)?'1':'0')
		e.firstChild.s_attr({'xlink:href':'assets/icon.svg#'+(this.icons_can_copy?'copy_ok':'copy_no')})
		toast.success(`已${this.icons_can_copy?'允许':'禁止'}复制图标!`);
	}
	icons_search(is_restart=false){
		const q=this.E('icons_search').value.trim()
		if(q=='')return
		const p=is_restart?1:parseInt(this.E('icons_list').g_attr('p'))
		if(p==1)this.E('icons_list').html('').s_attr({p:1})&&toast.info('搜索图标: '+q)
		this.E('icons').s_attr('wait')
		const body=new URLSearchParams();
		Object.entries({q,sortType:'updated_at',page:p,pageSize:100,sType:'',fills:'',fromCollection:-1,t:Date.now(),ctoken:'null'}).forEach(([k,v])=>body.append(k,v));
		const url='https://www.iconfont.cn/api/icon/search.json';
		fetch(this.link(url),{method:'POST',body:body.toString(),headers:{'Content-Type':'application/x-www-form-urlencoded;charset=UTF-8'}}).then(_=>_.json()).then(_=>{
			if(!_?.data)return toast.error('请求返回数据为空')
			const r=/viewBox\s*=\s*["']\s*(-?\d+(?:\.\d+)?)\s+(-?\d+(?:\.\d+)?)\s+(-?\d+(?:\.\d+)?)\s+(-?\d+(?:\.\d+)?)\s*["']/i
			const o=(_.data?.icons||[]).map(v=>{
				let s=v.show_svg,m=s.match(r),x=m.length>4?(m[3]+'x'+m[4]):''
				s=s.replace(/ +(xlmns|style|class|version)=['"][^'"]+['"]/ig,'').replace(/(\<path [^\>]+)\>[\t\r\n ]*<\/path\>[\t\r\n ]/ig,'$1/>').replace(/ +\/\>/g,'/>').replace(/ +fill=""/g,'')
				return `<div onclick='App.pages.img.icons_copy(this)'><i>${x}</i>${s}<div>${v.name}</div></div>`.html().body.firstChild
			})
			if(o.length<1)return
			this.E('icons_list').s_attr({p:p+1}).append(...o)
		}).finally(()=>{
			this.E('icons').d_attr('wait')
		});
	}
	icons_copy(e){
		if(!this.icons_can_copy)return;
		this.copy(e.node('svg').outerHTML.trim(),'图标')
	}
	gallery_search(is_restart=false){
		const q=this.E('gallery_search').value.trim()
		if(q=='')return
		const p=is_restart?1:parseInt(this.E('gallery_list').g_attr('p'))
		if(p==1)this.E('gallery_list').html('').s_attr({p:1})&&toast.info('搜索图片: '+q)
		this.E('gallery').s_attr('wait')
		const qy=`filters[content_type]=photo&filters[orientation]=landscape&order=relevance&locale=zh-CN&page=${p}&term=${encodeURIComponent(q)}`
		const u='https://zh.freepik.com/api/regular/search?'+qy
		fetch(this.link(u)).then(_=>_.json()).then(({items:list})=>{
			if(!list||list.length<1)return toast.error('请求返回数据为空')
			const o=list.map(({id,name:title,preview:{url}})=>{
				if(!url)return null
				return this.N('div',this.N('img',{src:this.ph,ss:this.link(url)}),this.N('div',title))
			}).filter(Boolean)
			if(o.length<1)return
			this.E('gallery_list').s_attr({p:p+1}).append(...o)
		}).finally(()=>{
			this.E('gallery').d_attr('wait')
		});
	}
	gallery_flush(e){
		this.E('gallery').d_attr('wait')
		this.E('gallery_list').html('').s_attr({p:'1'})
	}
	vector_select(e){
		e.parentNode.parentNode.s_attr({v:e.g_attr('v')})
		e.parentNode.nodes('span[v]').forEach(_=>_[_==e?'s_attr':'d_attr']('active'))
	}
	vector_toggle(e){
		const on=e.firstChild.g_attr('xlink:href').endsWith('_off')
		e.parentNode.parentNode.s_attr({v:on?'1':'0'})
		e.firstChild.s_attr({'xlink:href':on?'assets/icon.svg#switch_on':'assets/icon.svg#switch_off'})
	}
	vector_range(e){
		e.parentNode.parentNode.s_attr({v:e.value})
	}
	vector_tab(_,e){
		e.parentNode.nodes('div').forEach(v=>v[v==e?'s_attr':'d_attr']('active'))
		e.parentNode.parentNode.nodes('[i]').forEach(v=>v[v.g_attr('i')==_?'s_attr':'d_attr']('active'))
	}
	upload(_,e){
		const $='input'.elem({type:'file'})
		$.onchange=e=>{
			if($.files.length<1)return;
			const f=$.files[0];
			if(!['image/jpeg','image/png','image/webp'].includes(f.type)){
				toast.error('请选择有效的图片格式 (JPEG, PNG, WebP)')
				return
			}
			if(f.size>8*1024*1024) {
				toast.error('文件大小不能超过8MB')
				return
			}
			const r=new FileReader()
			r.onload=x=>{
				if(_=='vector'){
					this.E('vector').node('[i="y"]').html(`<img src='${x.target.result}'/>`)
					this.vector_img=this.E('vector').node('[i="y"]').node('img')
				}
			}
			r.readAsDataURL(f)
			this.E('vector').node('[i="c"]').value=''
			this.E('vector').node('[i="s"]').html('')
			this.E('vector').node('[oi]').onclick()
			this.vector_is_run=false
		};
		$.click()
	}
	vector_copy(e){
		if(!this.vector_img)return toast.warn('请先上传图片!');
		const text=this.E('vector').node('[i="c"]').value.trim()
		if(!text)return toast.warn('请将图片转换为svg格式!')
		this.copy(text,'Svg代码')
	}
	vector_build(){
		if(this.vector_is_run)return;
		const p=this.E('vector').node(`.option[k='plugin']`).g_attr('v')
		if(p=='potrace'&&!window.potrace)return this.script(`/addons/potrace.js`,'App.pages.img.vector_build()')
		//if(p=='primitive'&&!window.PrimitiveJS)return this.script(`/p/PrimitiveJS.js`,'H.X.img.vector_build()');
		if(!this.vector_img)return toast.error('请先上传图片!')
		const o={}
		this.E('vector').nodes(`.option[t='${p}']`).forEach(_=>{
			const v=_.g_attr('v')
			o[_.g_attr('k')]=isNaN(v)?v:Number(v)
		});
		this.E('vector').node('.output>[i="s"]').html('')
		this.E('vector').node('.output>[i="c"]').value=''

		if(p=='potrace'){
			this.vector_is_run=true
			o.turnpolicy=['','black','white','left','right','minority','majority'][o.turnpolicy];
			o.opticurve==o.opticurve==1;
			const layers=[],ps=[],todo=()=>{
				const {$c,fill}=layers.shift();
				potrace.config(o);
				potrace.load($c);
				potrace.process(()=>{
					if(!this.vector_is_run)return;
					if(layers.length<1){
						const code=potrace.get_svg(1,fill).replace(/(<svg [^\>]+\>)/,'$1'+ps.join(''));
						this.E('vector').node('.output>[i="s"]').html(code)
						this.E('vector').node('.output>[i="c"]').value=code
						this.E('vector').node('.output [svg]').click();
						this.vector_is_run=false;
						return;
					}
					ps.push(potrace.get_svg(1,fill,true));
					todo();
				});
			};
			// if(o.cmode==1) todo ...
			const $c='canvas'.elem()
			$c.width=this.vector_img.width
			$c.height=this.vector_img.height
			$c.getContext('2d').drawImage(this.vector_img,0,0)
			layers.push({$c})
			delete o.colors
			delete o.cmode
			todo();
		}
		// do more plugins ...
	}
	
	
}
/*
`
	this.X.img={
		can_copy:true,
		toggle_copy:e=>{
			e.firstChild.setAttribute('xlink:href',(this.X.img.can_copy=!this.X.img.can_copy)?'o.svg#copy_ok':'o.svg#copy_no');
			this.toast(`已${this.X.img.can_copy?'允许':'禁止'}复制图标!`,'success');
		},
		copy:e=>{
			let text,type;
			if(e.parentElement.classList.contains('grid')){
				if(!this.X.img.can_copy)return;
				type='图标';
				text=e.querySelector('svg').outerHTML.trim();
			}else if(e.parentElement.parentElement.parentElement.id=='img_vector'){
				if(!this.X.img.vector_img)return this.toast('请先上传图片!','warn');
				text='#img_vector>div>.output>[i="c"]'.N().value.trim();
				if(!text)return this.toast('请将图片转换为svg格式!','warn');
				type='Svg代码';
			}
			
			if(text)this.copy(text,type);
		},
		icons:($$,p=1)=>{
			const $='#img_icons'.N(),$g='#img_icons>.grid'.N();
			const q='#img_icons>h2>input'.N().value.trim();
			if(p==1)$g.innerHTML='';
			if(q=='')return;
			$.classList.add('wait');
			if(p==1)this.toast('搜索图标: '+q);
			const x=new URLSearchParams();
			const u='https://www.iconfont.cn/api/icon/search.json';
			const $m='#img_icons .grid>#more'.N();
			$m&&$m.remove();
			Object.entries({q,sortType:'updated_at',page:p,pageSize:100,sType:'',fills:'',fromCollection:-1,t:Date.now(),ctoken:'null'}).forEach(([k,v])=>x.append(k,v));
			fetch(u,{method:'POST',body:x.toString(),headers:{'x-up':this.use_proxy,'Content-Type':'application/x-www-form-urlencoded;charset=UTF-8'}}).then(_=>_.json()).then(_=>{
				if(!_.data)return this.toast('请求返回数据为空','error');
				const r=/viewBox\s*=\s*["']\s*(-?\d+(?:\.\d+)?)\s+(-?\d+(?:\.\d+)?)\s+(-?\d+(?:\.\d+)?)\s+(-?\d+(?:\.\d+)?)\s*["']/i;
				const o=(_.data?.icons||[]).map(v=>{
					let s=v.show_svg,m=s.match(r),x=m.length>4?(m[3]+'x'+m[4]):'';
					s=s.replace(/ +(xlmns|style|class|version)=['"][^'"]+['"]/ig,'').replace(/(\<path [^\>]+)\>[\t\r\n ]*<\/path\>[\t\r\n ]/ig,'$1/>').replace(/ +\/\>/g,'/>').replace(/ +fill=""/g,'');
					//return `<div onclick='H.X.img.copy(this)'><i>${x}</i>${s}<div>${v.name}</div></div>`;
				});
				if(o.length<1)return;
				$g.setAttribute('p',p+1);
				$g.innerHTML+=o.join('');
			}).catch(_=>this.toast('加载图标异常: '+_.message,'error')).finally(()=>{
				$.classList.remove('wait');
			});
		},
		vector_plugin:e=>{
			const $=e.parentNode,$u=e.firstChild.firstChild,o=$u.getAttribute('xlink:href').endsWith('_off');
			const $s=$.querySelectorAll('span');
			if($s.length<2)return;
			$s.forEach(_=>{
				const x=o?_==e:_!=e;
				_.firstChild.firstChild.setAttribute('xlink:href',x?'o.svg#check_on':'o.svg#check_off');
				if(!x)return;
				const t=_.getAttribute('v');
				$.parentNode.setAttribute('v',t);
				`#img_vector>div>.option[t]`.N(true).forEach(_=>_.classList[t==_.getAttribute('t')?'remove':'add']('hide'));
			});
		},
		vector_shape:e=>{
			const $=e.parentNode,$u=e.firstChild.firstChild,x=$u.getAttribute('xlink:href').endsWith('_off');
			$u.setAttribute('xlink:href',x?'o.svg#check_on':'o.svg#check_off');
			const o=Array.from($.querySelectorAll('span')).map(_=>{
				if(_.firstChild.firstChild.getAttribute('xlink:href').endsWith('_ofg'))return null;
				return _.getAttribute('v');
			}).filter(_=>_);
			$.setAttribute('v',o.join(','));
		},
		vector_switch:e=>{
			const $=e.parentNode.parentNode,$u=e.firstChild;
			let o=$u.getAttribute('xlink:href').endsWith('_off');
			$u.setAttribute('xlink:href',o?'o.svg#switch_on':'o.svg#switch_off');
			$.setAttribute('v',o?'1':'0');
		},
		vector_range:e=>{
			const $=e.parentNode,$i=$.querySelector('i');
			const x=['','black','white','left','right','minority','majority'];
			if($.parentNode.getAttribute('k')=='turnpolicy')$i.innerHTML='('+x[parseInt(e.value)]+')';
			else $i.innerHTML='('+e.value+')';
			$.parentNode.setAttribute('v',e.value);
		},
		vector_img:null,
		vector_upload:()=>{
			const $='input'.E('',{type:'file'}),$p='#img_vector>div>.output>[i="y"]'.N();
			$.onchange=e=>{
				if($.files.length<1)return;
				const f=$.files[0];
				if (!['image/jpeg','image/png','image/webp'].includes(f.type)){
					this.toast('请选择有效的图片格式 (JPEG, PNG, WebP)','error');
					return;
				}
				if (f.size>8*1024*1024) {
					this.toast('文件大小不能超过8MB','error');
					return;
				}
				const r=new FileReader();
				r.onload=x=>{
					$p.innerHTML=`<img src='${x.target.result}'/>`;
					this.X.img.vector_img=$p.querySelector('img');
				};
				r.readAsDataURL(f);
				'#img_vector>div>.output>[i="s"]'.N().innerHTML='';
				'#img_vector>div>.output>[i="c"]'.N().value='';
				'#img_vector>div>.output>div>[i="y"]'.N().click();
				this.X.img.vector_is_run=false;
			};
			$.click();
		},
		vector_layers:(_,n)=>{
			const c='canvas'.E(),ctx=c.getContext('2d');
			c.width=_.width;
			c.height=_.height;
			ctx.drawImage(_,0,0);
			const d=ctx.getImageData(0,0,c.width,c.height),dd=d.data,lm={};
			for(let i=0;i<dd.length;i+=4){
				const r=dd[i],g=dd[i+1],b=dd[i+2],a=dd[i+3],rgba=[r,g,b,a].join(' ');
				if(!(rgba in lm))lm[rgba]=[];
				lm[rgba].push(i);
			}
			console.log(111,lm);
			const cs=Object.keys(lm);
			return Array(Math.min(cs.length,n)).fill(0).map((_,i)=>{
				const rgba=cs[i],[r,g,b,a]=rgba.split(' ').map(_=>Number(_)),$c='canvas'.E();
				const o=$c.getContext('2d').createImageData(($c.width=c.width),($c.height=c.height));
				for(let i of lm[rgba]){
					o.data[i]=r;
					o.data[i+1]=g;
					o.data[i+2]=b;
					o.data[i+3]=a;
				}
				$c.getContext('2d').putImageData(o,0,0);
				const fill=a==255?`#${r.toString(16)}${g.toString(16)}${b.toString(16)}`:`rgba(${r},${g},${b},${a})`;
				return {fill,$c};
			});
		},
		vector_is_run:false,
		vector_build:()=>{
			if(this.X.img.vector_is_run)return;
			const p='#img_vector>div>.option[k="plugin"]'.N().getAttribute('v');
			if(p=='potrace'&&!H.Potrace)return this.script(`/p/potrace.js`,'H.X.img.vector_build()');
			//if(p=='primitive'&&!window.PrimitiveJS)return this.script(`/p/PrimitiveJS.js`,'H.X.img.vector_build()');
			if(!this.X.img.vector_img)return this.toast('请先上传图片!','warn');
			const o={};
			`#img_vector>div>.option[t='${p}']`.N(true).forEach(_=>{
				const v=_.getAttribute('v');
				o[_.getAttribute('k')]=isNaN(v)?v:Number(v);
			});
			const $a='#img_vector>div>.output>[i="s"]'.N(),$b='#img_vector>div>.output>[i="c"]'.N();
			$a.innerHTML=$b.value='';
			console.log(o);
			
			if(p=='potrace'){
				o.turnpolicy=['','black','white','left','right','minority','majority'][o.turnpolicy];
				o.opticurve==o.opticurve==1;
				let layers=[];
				const ps=[],fn=()=>{
					const {$c,fill}=layers.shift();
					H.Potrace.config(o);
					H.Potrace.load($c);
					H.Potrace.process(()=>{
						if(!this.X.img.vector_is_run)return;
						if(layers.length<1){
							const code=H.Potrace.get_svg(1,fill).replace(/(<svg [^\>]+\>)/,'$1'+ps.join(''));
							console.log(555,code);
							$a.innerHTML=$b.value=code;
							'#img_vector>div>.output>div>[i="s"]'.N().click();
							this.X.img.vector_is_run=false;
							return;
						}
						let p=H.Potrace.get_svg(1,fill,true);
						console.log(444,p);
						ps.push(p);
						fn();
					});
				};
				if(o.cmode==1){
					layers=this.X.img.vector_layers(this.X.img.vector_img,o.colors);
				}else{
					const $c='canvas'.E();
					$c.width=this.X.img.vector_img.width;
					$c.height=this.X.img.vector_img.height;
					$c.getContext('2d').drawImage(this.X.img.vector_img,0,0);
					layers.push({$c});
				}
				console.log(layers);
				delete o.colors;
				delete o.cmode;
				if(layers.length<1)return;
				this.X.img.vector_is_run=true;
				fn();
			}
			
			
		},
		vector_tab:e=>{
			const $=e.parentNode.parentNode,i=e.getAttribute('i');
			$.querySelectorAll('[i]').forEach(_=>_.classList.remove('active'));
			$.querySelectorAll(`[i='${i}']`).forEach(_=>_.classList.add('active'));
		},
	};
	this.M.innerHTML=`
		<style>
			
		</style>
		<card id='img_icons'><h2>${'icon'.V()}图标库<input type='search' placeholder='请输入搜索内容...' onsearch='H.X.img.icons(this,1)'/>${'copy_ok'.V('X.img.toggle_copy',{id:'toggle_copy'})}</h2><div class='grid' style='--gc:5' more='H.X.img.icons' p='1'></div></card>
		<card id='img_vector'><h2>${'vector'.V()}矢量化</h2><div class='row'>
			<div class='option' k='plugin' v='potrace''><div>核心插件<span onclick='H.X.img.vector_plugin(this)' v='potrace'>${'check_on'.V()}Potrace.JS</span> <!-- <span onclick='H.X.img.vector_plugin(this)' v='primitive'>${'check_off'.V()}Primitive.JS</span> --></div><div>Protrace.JS生成黑白色图片，...</div></div>
			
			<div class='option' t='potrace' k='cmode' v='1'><div>彩色模式${'switch_on'.V('X.img.vector_switch')}</div><div>开启后生成彩色图片，否则输出黑白图片</div></div>
			<div class='option' t='potrace' k='colors' v='1'><div>颜色数量<i>(1)</i><input type='range' value='1' min='1' max='255' onchange='H.X.img.vector_range(this)'/></div><div>开启彩色模式后才生效，显示最多颜色数量</div></div>
			<div class='option' t='potrace' k='turnpolicy' v='5'><div>路径解析策略<i>(minority)</i><input type='range' value='5' min='1' max='6' onchange='H.X.img.vector_range(this)'/></div><div>路径解析策略: 1.black 2.white 3.left 4.right 5.minority 6.majority</div></div>
			<div class='option' t='potrace' k='turdsize' v='2'><div>抖动阈值<i>(2)</i><input type='range' value='2' min='0' max='100' onchange='H.X.img.vector_range(this)'/></div><div>控制忽略的小区域大小，值越大细节越少</div></div>
			<div class='option' t='potrace' k='alphamax' v='1'><div>边角阈值<i>(1)</i><input type='range' value='1' min='0' max='12' step='.1' onchange='H.X.img.vector_range(this)'/></div><div>控制曲线拐角平滑程度，值越小拐角越尖锐</div></div>
			<div class='option' t='potrace' k='opticurve' v='1'><div>优化曲线${'switch_on'.V('X.img.vector_switch')}</div><div>开启后生成更平滑的曲线，可能会增加处理时间</div></div>
			<div class='option' t='potrace' k='opttolerance' v='0.2'><div>优化容差<i>(0.2)</i><input type='range' value='0.2' min='0' max='100' step='.1' onchange='H.X.img.vector_range(this)'/></div><div>值越小精度越高，值越大简化程度越高</div></div>
			
			<div class='todo'><span onclick='H.X.img.vector_upload()'>${'upload'.V()}上传图片</span><span onclick='H.X.img.copy(this)'>${'copy_ok'.V()}复制Svg代码</span><div onclick='H.X.img.vector_build(this)'>生成Svg图片</div></div>
			<div class='output'>
				<div>
					<div i='y' class='active' onclick='H.X.img.vector_tab(this)'>原图</div>
					<div i='s' onclick='H.X.img.vector_tab(this)'>Svg图</div>
					<div i='c' onclick='H.X.img.vector_tab(this)'>Svg代码</div>
				</div>
				<div i='y' class='active'></div><div i='s'></div><textarea i='c' readonly></textarea>
			</div>
		</div></card>
	`;

	this.M.classList.add('loaded');
	setTimeout(()=>'main>svg'.N().classList.add('hide'),800);
}

*/