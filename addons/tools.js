
// 类型判断
window._type=(a,b)=>{
	const t=Object.prototype.toString.call(a).split(' ').pop().replace(/]$/,'').toLowerCase(),ie=b=='element'
	if(ie)return t.includes(b)&&a.isConnected
	return b?t.includes(b):t
}
// 首字母大写
window.fucase=_=> {
	if(!_type(_,'string'))return''
	return _.charAt(0).toUpperCase()+_.slice(1).toLowerCase()
}
// 视频时间进度
Number.prototype.time=function(){
	const s=Math.abs(Math.floor(this)),h=Math.floor(s/3600),m=Math.floor((s%3600)/60),rs=Math.floor(s%60),fh=h>0?String(h).padStart(2,'0')+':':'',fm=String(m).padStart(2,'0'),fs=String(rs).padStart(2,'0');
	return s==0?'00:00':`${this>0?'':'-'}${fh}${fm}:${fs}`
}

// 设置节点特定属性
Element.prototype.s_attr=function(){
	if(arguments.length>0){
		for(let arg of arguments){
			let a=arguments[0]
			if(_type(a,'object')){
				for(let k in a)if((k=k.trim()))this.setAttribute(k,a[k].toString())
				break
			}
			if(typeof arg=='string'&&(arg=arg.trim()))this.setAttribute(arg,'')
		}
	}
	return this
}
// 获取节点特定属性
Element.prototype.g_attr=function(){
	if(arguments.length<1)return null
	let o={},ks=[...(new Set(arguments))].filter(_=>(typeof _=='string')&&_.trim()).map(_=>_.trim())
	if(ks.length==1)return this.getAttribute(ks[0])
	for(let k of ks)o[k]=this.getAttribute(k)
	return o
}
// 判断节点包含属性
Element.prototype.h_attr=function(_){return !_type(_,'string')||!(_=_.trim())?false:this.hasAttribute(_)}
// 删除节点特定属性
Element.prototype.d_attr=function(){(arguments.length>0)&&(new Set(arguments)).forEach(_=>_type(_,'string')&&(_=_.trim())&&this.hasAttribute(_)&&this.removeAttribute(_));return this}
// 元素填充内容
Element.prototype.html=function(_){
	if(undefined===_)return this.innerHTML.trim()
	if(_type(_,'string'))this.innerHTML=_.trim()
	return this
}
// 设置样式
Element.prototype.css=function(){
	if(arguments.length<1||(arguments.length>1&&arguments.length%2>0)||(arguments.length==1&&!(_type(arguments[0],'object')&&Object.keys(arguments[0]).length>0)))return this
	if(arguments.length==1){
		const css=arguments[0]
		for(let k in css)if(k.startsWith('--')||this.style.hasOwnProperty(k))this.style.setProperty(k,css[k].toString(),'important')
		return this
	}
	for(let i=0; i<arguments.length;i+=2){
		const k=arguments[i]
		if(k.startsWith('--')||this.style.hasOwnProperty(k))this.style.setProperty(k,arguments[i+1].toString(),'important')
	}
	return this
}
// 搜索节点
Document.prototype.node=Element.prototype.node=function(_){return this.querySelector(_)}
Document.prototype.nodes=Element.prototype.nodes=function(_){
	if(_=='text'){
		const NS=[],X=document.createNodeIterator(this,NodeFilter.SHOW_TEXT,_=>_.textContent.trim()?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT)
		_=X.nextNode()
		while(_){
			NS.push(_)
			_=X.nextNode()
		}
		return NS
	}
	return Array.from(this.querySelectorAll(_))
}
// 填充内容
Element.prototype.html=function(_){
	if(undefined===_)return this.innerHTML.trim()
	if(_type(_,'string'))this.innerHTML=_.trim()
	return this;
}
// 创建节点
String.prototype.elem=function(){
	const o=document.createElement(this)
	for(let a of arguments){
		if(_type(a,'string'))o.innerHTML=a.trim()
		else if(_type(a,'object'))for(let k in a)o.setAttribute(k,a[k])
	}
	return o
}

// HTML代码转DOM
String.prototype.html=function(){return (new DOMParser()).parseFromString(this,'text/html')}

// 图标代码
String.prototype.svg=function(_,o){return `<svg${_?` onclick='${_}(this)'`:''}${o&&o.s?` width='${o.s}' height='${o.s}'`:''}${o&&o.c?` class='${o.c}'`:''}${o&&o.id?` id='${o.id}'`:''} ${o&&o.f?` style='fill:${o.f}'`:''} ><use xlink:href='assets/icon.svg#${this.trim()}'/></svg>`}

// 获取节点
String.prototype.node=function(_){return _?Array.from(document.querySelectorAll(this)):document.querySelector(this)}

// 绑定事件
String.prototype.bind=function(_,o){(o||self).addEventListener(this,_)}

// MD5生成
String.prototype.md5=function(){const s=unescape(encodeURIComponent(this));let l=8*s.length,O=[].fill(0,0,s.length>>2-1);for(let i=0;i<l;i+=8)O[i>>5]|=(255&s.charCodeAt(i/8))<<i%32;O[l>>5]|=128<<l%32;O[14+(l+64>>>9<<4)]=l;const A=(a,b,c,d,e,f)=>F(H(F(F(b,a),F(d,f)),e),c);const B=(a,b,c,d,e,f,h)=>A(b&c| ~b&d,a,b,e,f,h);const C=(a,b,c,d,e,f,h)=>A(b&d|c& ~d,a,b,e,f,h);const D=(a,b,c,d,e,f,h)=>A(b^c^d,a,b,e,f,h);const E=(a,b,c,d,e,f,h)=>A(c^(b| ~d),a,b,e,f,h);const F=(a,b)=>{const c=(65535&a)+(65535&b);return (a>>16)+(b>>16)+(c>>16)<<16|65535&c};const H=(a,b)=>a<<b|a>>>32-b;let a=1732584193,b=-271733879,c=-1732584194,d=271733878,e;for(let i=0; i<O.length; i+=16){const x=a,y=b,z=c,oo=d;b=E(b=E(b=E(b=E(b=D(b=D(b=D(b=D(b=C(b=C(b=C(b=C(b=B(b=B(b=B(b=B(b,c=B(c,d=B(d,a=B(a,b,c,d,O[i],7,-680876936),b,c,O[i+1],12,-389564586),a,b,O[i+2],17,606105819),d,a,O[i+3],22,-1044525330),c=B(c,d=B(d,a=B(a,b,c,d,O[i+4],7,-176418897),b,c,O[i+5],12,1200080426),a,b,O[i+6],17,-1473231341),d,a,O[i+7],22,-45705983),c=B(c,d=B(d,a=B(a,b,c,d,O[i+8],7,1770035416),b,c,O[i+9],12,-1958414417),a,b,O[i+10],17,-42063),d,a,O[i+11],22,-1990404162),c=B(c,d=B(d,a=B(a,b,c,d,O[i+12],7,1804603682),b,c,O[i+13],12,-40341101),a,b,O[i+14],17,-1502002290),d,a,O[i+15],22,1236535329),c=C(c,d=C(d,a=C(a,b,c,d,O[i+1],5,-165796510),b,c,O[i+6],9,-1069501632),a,b,O[i+11],14,643717713),d,a,O[i],20,-373897302),c=C(c,d=C(d,a=C(a,b,c,d,O[i+5],5,-701558691),b,c,O[i+10],9,38016083),a,b,O[i+15],14,-660478335),d,a,O[i+4],20,-405537848),c=C(c,d=C(d,a=C(a,b,c,d,O[i+9],5,568446438),b,c,O[i+14],9,-1019803690),a,b,O[i+3],14,-187363961),d,a,O[i+8],20,1163531501),c=C(c,d=C(d,a=C(a,b,c,d,O[i+13],5,-1444681467),b,c,O[i+2],9,-51403784),a,b,O[i+7],14,1735328473),d,a,O[i+12],20,-1926607734),c=D(c,d=D(d,a=D(a,b,c,d,O[i+5],4,-378558),b,c,O[i+8],11,-2022574463),a,b,O[i+11],16,1839030562),d,a,O[i+14],23,-35309556),c=D(c,d=D(d,a=D(a,b,c,d,O[i+1],4,-1530992060),b,c,O[i+4],11,1272893353),a,b,O[i+7],16,-155497632),d,a,O[i+10],23,-1094730640),c=D(c,d=D(d,a=D(a,b,c,d,O[i+13],4,681279174),b,c,O[i],11,-358537222),a,b,O[i+3],16,-722521979),d,a,O[i+6],23,76029189),c=D(c,d=D(d,a=D(a,b,c,d,O[i+9],4,-640364487),b,c,O[i+12],11,-421815835),a,b,O[i+15],16,530742520),d,a,O[i+2],23,-995338651),c=E(c,d=E(d,a=E(a,b,c,d,O[i],6,-198630844),b,c,O[i+7],10,1126891415),a,b,O[i+14],15,-1416354905),d,a,O[i+5],21,-57434055),c=E(c,d=E(d,a=E(a,b,c,d,O[i+12],6,1700485571),b,c,O[i+3],10,-1894986606),a,b,O[i+10],15,-1051523),d,a,O[i+1],21,-2054922799),c=E(c,d=E(d,a=E(a,b,c,d,O[i+8],6,1873313359),b,c,O[i+15],10,-30611744),a,b,O[i+6],15,-1560198380),d,a,O[i+13],21,1309151649),c=E(c,d=E(d,a=E(a,b,c,d,O[i+4],6,-145523070),b,c,O[i+11],10,-1120210379),a,b,O[i+2],15,718787259),d,a,O[i+9],21,-343485551);a=F(a,x);b=F(b,y);c=F(c,z);d=F(d,oo)}O=Array(a,b,c,d);for(a=0,b='';a<32*O.length;a+=8)b+=String.fromCharCode(O[a>>5]>>>a%32&255);for(O=b,b='0123456789ABCDEF',c=null,d='',e=0;e<O.length;e++){c=O.charCodeAt(e);d+=b.charAt(c>>>4&15)+b.charAt(15&c)}return d.toLowerCase()};

// 加密
Date.prototype.vv=function(){const r=Date.parse(this)/1e3;const sb=r=>{let n=[],a=r.split('');for(let i=0;i<a.length;i++){i!=0&&n.push(' ');let u=a[i].charCodeAt().toString(2);n.push(u)}return n.join('')};let n=r.toString(),a=[[],[],[],[]];for(let i=0;i<n.length;i++){let b=sb(n[i]);a[0]+=b.slice(2,3),a[1]+=b.slice(3,4),a[2]+=b.slice(4,5),a[3]+=b.slice(5)}let l=[];for(let i=0;i<a.length;i++){let E=parseInt(a[i],2).toString(16);E.length==2&&(E='0'+E),E.length==1&&(E='00'+E),E.length==0&&(E='000'),l[i]=E}let u=n.md5();return u.slice(0,3)+l[0]+u.slice(6,11)+l[1]+u.slice(14,19)+l[2]+u.slice(22,27)+l[3]+u.slice(30)};


// 弹出提示消息
window.toast={
	_(t,_,...s){
		if(!_&&s.length<1)return
		let $='body>#app_toast'.node(),$$
		if(!$)document.body.append($='div'.elem({id:'app_toast'}))
		$.append($$='div'.elem([_,...s].filter(_=>_).join('<br><br>&emsp;> '),{style:`border-left-color:var(--${t})`,onclick:'this.remove()'}))
		setTimeout(()=>{
			$$.css('opacity',0,'transform','translateX(100%)')
			setTimeout(()=>$$.remove(),300)
		},t=='error'?50000:5000)
	},
	success(...s){this._('success',s.shift(),...s)},
	warn(...s){this._('warn',s.shift(),...s)},
	error(...s){this._('error',s.shift(),...s)},
	info(...s){this._('info',s.shift(),...s)}
}
// 推送通知
window.notify=async(body,tag='~',title='',actions=[])=>{
	let p=Notification.permission;
	if(p=='default')p=await Notification.requestPermission();
	if(p!='granted')return;
	const r=await navigator.serviceWorker.ready;
	// actions: [{action:'test',title:'测试推送',icon:'192.png'}]
	const x={tag,body,icon:'assets/192.png',vibrate:[200,100,200],actions};
	r&&r.showNotification(title,x).catch(_=>toast.error('推送消息 异常',_));
}
