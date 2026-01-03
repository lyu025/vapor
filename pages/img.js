class Img extends Page{
	static #o=null;
	static open(){
		if(!this.#o)this.#o=new Img();
		return this.#o
	}
	define(){
		this.ph='data:image/jpeg;base64,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'
		this.icons_can_copy=this.cache('icons_can_copy')==='1'
		this.vector_file=null
	}
	constructor(){
		if(Img.#o)return
		super('img')
		Vapor.loader.s_attr('hide')
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
					this.N('div',{c:'option',k:'despeckle',v:'0'},
						this.N('div','去噪点',
							this.N('svg',{path:'switch_off',click:'App.pages.img.vector_toggle(this)',v:'0'}),
						),
						this.N('div','删除小元素。得到的结果会更干净，但是会丢失一些细节'),
					),
					this.N('div',{c:'option',k:'ignoreWhiteBackground',v:'0'},
						this.N('div','去背景',
							this.N('svg',{path:'switch_off',click:'App.pages.img.vector_toggle(this)',v:'0'}),
						),
						this.N('div','白色背景不会被转化为矢量'),
					),
					this.N('div',{c:'option',k:'smooth',v:'0'},
						this.N('div','平滑度',this.N('i','(正常)'),
							this.N('input',{type:'range',value:0,min:-2,max:2,onchange:'App.pages.img.vector_range(this)'}),
						),
						this.N('div','平滑度: -2.更平滑 -1.平滑 0.正常 1.细致 2.更细致'),
					),
					this.N('div',{c:'option',k:'colorCount',v:'1'},
						this.N('div','颜色数量',this.N('i','(1)'),
							this.N('input',{type:'range',value:1,min:1,max:255,onchange:'App.pages.img.vector_range(this)'}),
						),
						this.N('div','显示最多颜色数量'),
					),
					this.N('div',{c:'todo'},
						this.N('span',{click:'App.pages.img.upload("vector",this)'},this.N('svg',{path:'upload'}),'上传图片'),
						this.N('span',{click:'App.pages.img.vector_copy(this)'},this.N('svg',{path:'copy_ok'}),'复制Svg代码'),
						this.N('div',{id:'vt_build',click:'App.pages.img.vector_build(this)'},'生成Svg图片'),
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
			'ᝰ>[cc="vector"]>div>.todo>div[busy]{background:var(--bg);color:var(--fg)}',
			
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
	async icons_search(is_restart=false){
		const q=this.E('icons_search').value.trim()
		if(q=='')return
		const p=is_restart?1:parseInt(this.E('icons_list').g_attr('p'))
		if(p==1)this.E('icons_list').html('').s_attr({p:1})&&toast.info('搜索图标: '+q)
		this.E('icons').s_attr('wait')
		const body=new URLSearchParams();
		Object.entries({q,sortType:'updated_at',page:p,pageSize:100,sType:'',fills:'',fromCollection:-1,t:Date.now(),ctoken:'null'}).forEach(([k,v])=>body.append(k,v));
		const url='https://www.iconfont.cn/api/icon/search.json';
		const {data:{icons}}=await fetch(this.link(url),{method:'POST',body:body.toString(),headers:{'Content-Type':'application/x-www-form-urlencoded;charset=UTF-8'}}).then(_=>_.json()).catch(_=>{
			toast.error('网络请求失败')
			return {data:{icons:[]}}
		})
		const r=/viewBox\s*=\s*["']\s*(-?\d+(?:\.\d+)?)\s+(-?\d+(?:\.\d+)?)\s+(-?\d+(?:\.\d+)?)\s+(-?\d+(?:\.\d+)?)\s*["']/i
		const o=icons.map(v=>{
			let s=v.show_svg,m=s.match(r),x=m.length>4?(m[3]+'x'+m[4]):''
			s=s.replace(/ +(xlmns|style|class|version)=['"][^'"]+['"]/ig,'').replace(/(\<path [^\>]+)\>[\t\r\n ]*<\/path\>[\t\r\n ]/ig,'$1/>').replace(/ +\/\>/g,'/>').replace(/ +fill=""/g,'')
			return `<div onclick='App.pages.img.icons_copy(this)'><i>${x}</i>${s}<div>${v.name}</div></div>`.html().body.firstChild
		})
		if(o.length>0)this.E('icons_list').s_attr({p:p+1}).append(...o)
		this.E('icons').d_attr('wait')
	}
	icons_copy(e){
		if(!this.icons_can_copy)return;
		this.copy(e.node('svg').outerHTML.trim(),'图标')
	}
	async gallery_search(is_restart=false){
		const q=this.E('gallery_search').value.trim()
		if(q=='')return
		const p=is_restart?1:parseInt(this.E('gallery_list').g_attr('p'))
		if(p==1)this.E('gallery_list').html('').s_attr({p:1})&&toast.info('搜索图片: '+q)
		this.E('gallery').s_attr('wait')
		const qy=`filters[content_type]=photo&filters[orientation]=landscape&order=relevance&locale=zh-CN&page=${p}&term=${encodeURIComponent(q)}`
		const u='https://zh.freepik.com/api/regular/search?'+qy
		const {items:list}=await fetch(this.link(u)).then(_=>_.json()).catch(_=>{
			toast.error('网络请求失败')
			return {list:[]}
		})
		const o=list.map(({id,name:title,preview:{url}})=>{
			if(!url)return null
			return this.N('div',this.N('img',{src:this.ph,ss:this.link(url)}),this.N('div',title))
		}).filter(Boolean)
		if(o.length>0)this.E('gallery_list').s_attr({p:p+1}).append(...o)
		this.E('gallery').d_attr('wait')
	}
	gallery_flush(e){
		this.E('gallery').d_attr('wait')
		this.E('gallery_list').html('').s_attr({p:'1'})
	}
	vector_toggle(e){
		const on=e.firstChild.g_attr('xlink:href').endsWith('_off')
		e.parentNode.parentNode.s_attr({v:on?'1':'0'})
		e.firstChild.s_attr({'xlink:href':on?'assets/icon.svg#switch_on':'assets/icon.svg#switch_off'})
	}
	vector_range(e){
		const k=e.parentNode.parentNode.g_attr('k')
		e.parentNode.parentNode.s_attr({v:e.value})
		if(k=='smooth'){
			const m={'-2':'更平滑','-1':'平滑','0':'正常','1':'细致','2':'更细致'}
			e.previousElementSibling.innerText=`(${m[e.value]})`
		}else if(k=='colorCount'){
			e.previousElementSibling.innerText=`(${e.value})`
		}
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
					this.vector_file=f
				}
			}
			r.readAsDataURL(f)
			this.E('vector').node('[i="c"]').value=''
			this.E('vector').node('[i="s"]').html('')
			this.E('vector').node('[oi]').onclick()
		}
		$.click()
	}
	vector_copy(e){
		if(!this.vector_file)return toast.warn('请先上传图片!');
		const text=this.E('vector').node('[i="c"]').value.trim()
		if(!text)return toast.warn('请将图片转换为svg格式!')
		this.copy(text,'Svg代码')
	}
	async vector_build(){
		if(this.E('vt_build').h_attr('busy'))return toast.error('请先上传图片!')
		if(!this.vector_file)return toast.error('请先上传图片!')
		this.E('vt_build').s_attr('busy')
		this.E('vector').node('.output>[i="s"]').html('')
		this.E('vector').node('.output>[i="c"]').value=''
		const body=new FormData()
		body.append('userfile',this.vector_file)
		body.append('userfile_url','')
		body.append('requiredfile_userfile',1)
		body.append('outFormat','svg')
		body.append('user_screen_width',500)
		this.E('vector').nodes(`.option`).forEach(x=>{
			body.append(x.g_attr('k'),x.g_attr('v'))
		})
		let [,u]=await fetch(this.link('https://www.autotracer.org/zh.html'),{method:'POST',body}).then(_=>_.text()).then(_=>_.split("var url = '/FW/result.php?name=")).catch(_=>{
			toast.error('网络请求失败')
			return []
		})
		if(u)u='https://www.autotracer.org/FW/result.php?name='+u.split("'").shift()
		if(!u)return
		const todo=async()=>{
			let [,o]=await fetch(this.link(u)).then(_=>_.text()).then(_=>_.split('<img src="/FW/getfile.php?file=')).catch(_=>{
				toast.error('网络请求失败')
				return []
			})
			if(!o){
				setTimeout(todo,1000)
				return
			}
			o='https://www.autotracer.org/FW/getfile.php?file='+o.split('"').shift()
			let code=await fetch(this.link(o)).then(_=>_.text()).catch(_=>{
				toast.error('网络请求失败')
				return ''
			})
			if(!code){
				setTimeout(todo,1000)
				return
			}
			code=code.replace(/width="([\.\d]+)" height="([\.\d]+)"/,'viewBox="0 0 $1 $2"')
			this.E('vector').node('.output>[i="c"]').value=code
			this.E('vector').node('.output>[i="s"]').html(code)
			this.E('vector').node('.output [svg]').click()
			this.E('vt_build').d_attr('busy')
		}
		await todo()
	}

}