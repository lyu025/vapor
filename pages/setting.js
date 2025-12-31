class Setting extends Page{
	static #o=null;
	static open(){
		if(!this.#o)this.#o=new Setting();
		return this.#o
	}
	define(){
		const {ff,fs,np,nd}=JSON.parse(this.cache('setting')||'{}')
		this.cc={ff:ff||'yozai',fs:fs||12,np:!!np,nd:!!nd}
		this.cache('setting',JSON.stringify(this.cc))
	}
	constructor(){
		if(Setting.#o)return
		super('setting')
	}
	nodes(){
		return[
			this.N('card',{id:'theme',cc:'theme'},
				this.N('h2',this.N('svg',{path:'theme'}),'主题配置'),
				this.N('div',{c:'row'},
					this.N('div',{c:'option'},
						this.N('div','启用深色模式',
							this.N('svg',{path:'switch_'+(this.cc.nd?'off':'on'),click:'App.pages.setting.toggle("nd",this)'}),
						),
						this.N('div','开启后可手动切换是否为深色模式'),
					),
					this.N('div',{c:'option'},
						this.N('div','系统字体',
							this.N('span',{click:'App.pages.setting.select("ff",this)',v:'maocao'},this.N('svg',{path:'check_'+(this.cc.ff=='maocao'?'on':'off')}),'毛草'),
							this.N('span',{click:'App.pages.setting.select("ff",this)',v:'xingshu'},this.N('svg',{path:'check_'+(this.cc.ff=='xingshu'?'on':'off')}),'行书'),
							this.N('span',{click:'App.pages.setting.select("ff",this)',v:'yozai'},this.N('svg',{path:'check_'+(this.cc.ff=='yozai'?'on':'off')}),'Yozai'),
						),
						this.N('div','系统默认字体为Yozai，请根据个人喜好选择 ...'),
					),
					this.N('div',{c:'option'},
						this.N('div','默认字体大小',this.N('i',`(${this.cc.fs}px)`),
							this.N('input',{type:'range',value:this.cc.fs,min:10,max:20,onchange:'App.pages.setting.range("fs",this)'}),
						),
						this.N('div','系统默认字体大小为12像素'),
					),
				),
			),
			this.N('card',{id:'tools',cc:'tools'},
				this.N('h2',this.N('svg',{path:'tools'}),'功能配置'),
				this.N('div',{c:'row'},
					this.N('div',{c:'option'},
						this.N('div','开启网络代理功能',
							this.N('svg',{path:'switch_'+(this.cc.np?'off':'on'),click:'App.pages.setting.toggle("np",this)'}),
						),
						this.N('div','开启后可自动控制一些资源是否走代理模式获取'),
					),
				)
			),
		];
	}
	styles(){
		return[
			'ᝰ>*>div{display:flex;flex-direction:column}',
			'ᝰ>*>div>*{padding:..6rem 1rem 0 1.5rem}',
			'ᝰ>*>div>.option{border-bottom:1px solid var(--h-bd)}',
			'ᝰ>*>div>.option>div:first-child{line-height:30px;font-size:1.2rem}',
			'ᝰ>*>div>.option>div:first-child>i{font-size:.9rem;margin:0 .6rem}',
			'ᝰ>*>div>.option>div:first-child>span{width:30vw;padding:0 1rem;align-items:center}',
			'ᝰ>*>div>.option>div:first-child>span>svg{width:18px;height:18px;object-fit:contain;margin:6px .5rem -4px 0}',
			'ᝰ>*>div>.option>div:first-child>input{width:46vw;float:right;margin-top:10px}',
			'ᝰ>*>div>.option>div:first-child>svg{float:right;width:50px;height:50px;object-fit:contain;margin-top:4px}',
			'ᝰ>*>div>.option>div:nth-child(2){line-height:20px;font-size:.8rem}',
		]
	}
	select(k,e){
		const v=this.cc[k]=e.g_attr('v')
		this.cache('setting',JSON.stringify(this.cc))
		if(k=='ff')document.documentElement.style.setProperty('--ff',v)
		e.parentNode.nodes('span[v]').forEach(_=>_.node('svg').firstChild.s_attr({'xlink:href':_==e?'assets/icon.svg#check_on':'assets/icon.svg#check_off'}))
	}
	toggle(k,e){
		const v=this.cc[k]=e.firstChild.g_attr('xlink:href').endsWith('_on')
		this.cache('setting',JSON.stringify(this.cc))
		e.firstChild.s_attr({'xlink:href':v?'assets/icon.svg#switch_off':'assets/icon.svg#switch_on'})
		if(k=='np'){
			Page.use_proxy=false
			Vapor.E('use_proxy')[v?'s_attr':'d_attr']('hide').firstChild.s_attr({'xlink:href':'assets/icon.svg#proxy_off'})
		}else if(k=='nd'){
			Vapor.theme='light'
			this.cache('theme',Vapor.theme)
			Vapor.$.s_attr({theme:Vapor.theme})
			Vapor.E('theme')[v?'s_attr':'d_attr']('hide')
			;`meta[name='theme-color']`.node().s_attr({content:'#fff'})
		}
	}
	range(k,e){
		const v=this.cc[k]=parseInt(e.value+'')
		this.cache('setting',JSON.stringify(this.cc))
		if(k=='fs'){
			e.previousElementSibling.innerText=`(${v}px)`
			document.documentElement.style.setProperty('--fs',v+'px')
		}
	}
}