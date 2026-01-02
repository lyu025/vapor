class Cls{
	static #u='https://m.cls.cn/nodeapi'
	static async filters(is_run,o_parser){
		return o_parser([
			{id:'telegraphs',title:'实时报道'},
			{id:'themes',title:'题材'},
			{id:'depths',title:'深度'},
		])
	}
	static async list(is_run,o_parser,tid,page=''){
		const url=`${Cls.#u}/${tid}?app=CailianpressWap&refresh_type=1&rn=10${!page||page==1?'':('&last_time='+page)}`
		return await fetch(Vapor.link(url)).then(_=>_.json()).then(({data})=>{
			if(!is_run()||!(data.list||data.roll_data))return '✘'
			const list=data.list||data.roll_data,o=list.map(({id,article_id:aid,content:abrief,title,img,brief,ctime,is_ad})=>{
				if(is_ad)return null
				const s=new Date(parseInt(`${parseInt(ctime)}`.substring(0,10))*1000);
				const Y=s.getFullYear(),M=s.getMonth()+1,D=s.getDate(),H=s.getHours(),I=s.getMinutes(),S=s.getSeconds();
				const time=`${Y}-${(M+'').padStart(2,'0')}-${(D+'').padStart(2,'0')} ${(H+'').padStart(2,'0')}:${(I+'').padStart(2,'0')}:${(S+'').padStart(2,'0')}`;
				const nid=data.list?`${tid.replace(/s$/,'')}/${aid}`:''
				if(title)title=title.replace(/^【[^】]+】/,'').trim()
				if(tid=='themes')img=''
				return title?{x:id||aid,ni:data.list?'0':'1',id:nid,time,title,img}:null
			}).filter(Boolean)
			o_parser(o)
			return list.length>0?list.pop().sort_score:'..'
		}).catch(_=>{
			toast.error('网络请求失败!')
			return '..'
		})
	}
	static async info(is_run,o_parser,id){
		const url=`https://m.cls.cn/${id}`;
		return await fetch(Vapor.link(url)).then(_=>_.text()).then(_=>{
			if(!is_run())return
			let [,title]=_.split('class="f-s-26 f-f-pm l-h-123077 title-box">')
			if(title)title=title.split('</div>').shift().trim()
			if(!title)return null
			let [,time]=_.split('class="f-s-13 flex-shrink-0 time">')
			if(time)time=time.split('</div>').shift().trim()
			let [,x]=_.split('<div class="content"')
			if(x)x=x.split('<div class="w-100p bottom-tips-box">').shift()
			if(!x)return null
			const box=Array.from(`<div id='o'${x.replace(/<\/div>$/,'')}`.html().node('#o').childNodes).map(v=>{
				let o,t=_type(v).replace(/(html|element)/g,'')
				let text=t=='text'?v.textContent.trim():v.innerText,html=t=='text'?'':v.innerHTML
				if(text)text=text.trim()
				if(html)html=html.trim()
				switch(t){
					case 'br':break
					case 'text':
						if(text)o=`<p>&emsp;&emsp;${text}</p>`
						break
					default:
						if(!text||html=='<br>')break
						const img=v.node('img')
						if((v.childNodes.length==1&&v.firstChild.tagName=='STRONG')||v.tagName=='STRONG'||t=='heading')o=`<strong>${text}</strong>`
						else if(img){
							const src=img.g_attr('src')
							if(src)o=`<img src='${Vapor.link(src)}'/>`
							if(text)o=(o||'')+`<p>&emsp;&emsp;${text}</p>`
						}else o=`<p>&emsp;&emsp;${text}</p>`
						break
				}
				return o
			}).filter(Boolean)
			if(box[0]&&box[0].startsWith('<p>&emsp;&emsp;'))box[0]=box[0].replace('<p>&emsp;&emsp;','<p>')
			return o_parser({title,time,box})
		}).catch(_=>{
			toast.error('网络请求失败!')
			return null
		})
	}
}