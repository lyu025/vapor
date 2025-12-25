H.page_img=function(){
	if(this.M.classList.contains('loaded'))return;

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
			this.fetch(u,'POST',x.toString(),{'Content-Type':'application/x-www-form-urlencoded;charset=UTF-8'},'json').then(_=>{
				let {ok,o,e}=_;
				if(!ok)return this.toast(e,'error');
				const r=/viewBox\s*=\s*["']\s*(-?\d+(?:\.\d+)?)\s+(-?\d+(?:\.\d+)?)\s+(-?\d+(?:\.\d+)?)\s+(-?\d+(?:\.\d+)?)\s*["']/i;
				o=(o?.data?.icons||[]).map(v=>{
					let s=v.show_svg,m=s.match(r),x=m.length>4?(m[3]+'x'+m[4]):'';
					s=s.replace(/ +(xlmns|style|class|version)=['"][^'"]+['"]/ig,'').replace(/(\<path [^\>]+)\>[\t\r\n ]*<\/path\>[\t\r\n ]*/ig,'$1/>').replace(/ +\/\>/g,'/>').replace(/ +fill=""/g,'');
					return `<div onclick='H.X.img.copy(this)'><i>${x}</i>${s}<div>${v.name}</div></div>`;
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
			#img_icons>h2>#toggle_copy{margin-left:auto;width:22px;height:22px}
			#img_icons>.grid>div{aspect-ratio:9/12;display:flex;flex-direction:column;position:relative}
			#img_icons>.grid>div>i{display:block;width:auto;line-height:.8rem;font-size:.8rem;position:absolute;top:4px;left:4px;border-bottom:1px solid var(--h-bg);border-radius:2px}
			#img_icons>.grid>div>svg{flex:1;display:block;width:80%;object-fit:contain;margin:0 auto}
			#img_icons>.grid>div>div{padding:0 1rem;height:16px;font-size:1.1rem;text-align:center;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
			
			#img_vector>div{display:flex;flex-direction:column}
			#img_vector>div>*{padding:..6rem 1rem 0 1.5rem}
			#img_vector>div>.option{border-bottom:1px solid var(--h-bd);}
			#img_vector>div>.option>div:first-child{line-height:30px;font-size:1.2rem}
			#img_vector>div>.option>div:first-child>i{font-size:.9rem;margin:0 .6rem}
			#img_vector>div>.option>div:first-child>span{width:30vw;padding:0 1rem;align-items:center}
			#img_vector>div>.option>div:first-child>span>svg{width:18px;height:18px;object-fit:contain;margin:6px .5rem -4px 0}
			#img_vector>div>.option>div:first-child>input{width:46vw;float:right;margin-top:10px}
			#img_vector>div>.option>div:first-child>svg{float:right;width:50px;height:50px;object-fit:contain;margin-top:4px}
			#img_vector>div>.option>div:nth-child(2){line-height:20px;font-size:.8rem}
			#img_vector>div>.todo{display:flex;margin:.5rem 0}
			#img_vector>div>.todo>span{display:block;width:100px;line-height:30px;height:30px;padding:0 .4rem;margin-right:1rem;font-size:.8rem;border:1px solid var(--h-bd);border-radius:4px}
			#img_vector>div>.todo>span>svg{display:block;float:left;width:20px;height:20px;object-fit:contain;margin:5px .6rem 0 0}
			#img_vector>div>.todo>div{flex:1;background:var(--bg);mix-blend-mode:difference;opacity:.6;border-radius:4px;text-align:center;line-height:30px}
			#img_vector>div>.todo>*:hover{box-shadow:0 1px 2px var(--g-bg),0 2px 4px var(--g-bg),0 4px 8px var(--g-bg)}
			#img_vector>div>.output{display:flex;flex-direction:column;border:1px solid var(--h-bd);border-radius:6px;overflow:hidden;height:auto}
			#img_vector>div>.output>div:first-child{display:flex;line-height:26px;font-size:.8rem;margin:4px 4px 0 4px;text-align:center;border:1px solid var(--h-bd);border-radius:4px 4px 0 0}
			#img_vector>div>.output>div:first-child>*{flex:1}
			#img_vector>div>.output>div:first-child>*:not(#img_vector>div>.output>div:first-child>*:last-child){border-right:1px solid var(--h-bd)}
			#img_vector>div>.output>div:first-child>*.active{background:var(--bg);mix-blend-mode:difference;opacity:.6}
			#img_vector>div>.output>*:not(#img_vector>div>.output>*:first-child){display:none;min-height:200px;border-top:1px solid var(--h-bd);line-hright:20px;font-size:14px;margin:-1px 4px 4px 4px;padding:2px;background:var(--bg);border:1px solid var(--h-bd);border-radius:0 0 4px 4px}
			#img_vector>div>.output>*:not(#img_vector>div>.output>*:first-child).active{display:flex;align-items:center}
			#img_vector>div>.output>*:not(#img_vector>div>.output>*:first-child)>*{display:block;width:100%;height:100%;object:contain}
			#img_vector>div>.output>div:not(#img_vector>div>.output>*:first-child){background:url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDIwIDIwIj48cmVjdCB3aWR0aD0iMTAiIGhlaWdodD0iMTAiIGZpbGw9IiNmMGYwZjAiLz48cmVjdCB4PSIxMCIgeT0iMTAiIHdpZHRoPSIxMCIgaGVpZ2h0PSIxMCIgZmlsbD0iI2YwZjBmMCIvPjwvc3ZnPg==') repeat}
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