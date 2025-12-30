class Flw{
	static #u='https://www.flw.ph/forum.php'
	static async filters(is_run,o_parser){
		return o_parser([
			{id:'40',title:'本地'},{id:'82',title:'华人'},
			{id:'157',title:'国内'},{id:'91',title:'国际'},
			{id:'89',title:'科技'}
		])
	}
	static async list(is_run,o_parser,tid,page=1){
		const url=`${Flw.#u}?mod=forumdisplay&fid=${tid}&filter=lastpost&orderby=dateline&mobile=2&page=${page}`
		return await fetch(url,{headers:{'x-up':'true'}}).then(_=>_.text()).then(_=>{
			if(!is_run())return '✘'
			const [,...$]=_.split('<li id="thread_')
			const o=$.map(_=>{
				const id=_.split('">').shift().trim()
				const title=_.split('<h3 class="">')[1].split('<').shift().trim()
				const brief=_.split('<div class="art-title">')[1].split('</div>').shift().replace(/[\r\n\s]/g,'').replace(/^(【[^】]+】|[^：]+报：) */,'')
				if(!id||!title)return null
				return {id,title,brief}
			}).filter(Boolean)
			o_parser(o)
			return o.length<1?'..':(page+1)
		})
	}
	static async info(is_run,o_parser,id){
		const url=`${Flw.#u}?mod=viewthread&tid=${id}&mobile=2`;
		return await fetch(url,{headers:{'x-up':'true'}}).then(_=>_.text()).then(_=>{
			if(!is_run())return
			let [,title]=_.split('<h3 style="font-size:18px;">')
			if(title)title=title.split('</h3>').shift().trim()
			if(!title)return null
			let [,time]=_.split('<p class="time">')
			if(time)time=time.split('</p>').shift().trim()
			let [,x]=_.split(' class="message"')
			if(x)x=x.split('<!--[diy=main2x]-->').shift()
			if(!x)return null
			const box=`<div id='o'${x.replace(/<\/div>$/,'')}`.html().nodes('#o>*').map(v=>{
				let o,t=_type(v).replace(/(html|element)/g,'')
				const text=v.innerText.trim(),html=v.html().trim()
				switch(t){
					case 'br':break
					case 'div':
						const img=v.node('img')
						if(img){
							const src=img.g_attr('src')
							if(src)o=`<img src='${Flw.#u}${src.replace('forum.php','')}'/>`
						}
						if(text)o=(o||'')+`<p>&emsp;&emsp;${text}</p>`
						break
					case 'heading':
						if(!text||html=='<br>')break
						o=`<strong>${text}</strong>`
						break
					default:
						if(!text||html=='<br>')break
						if(v.childNodes.length==1&&v.firstChild.tagName=='STRONG')o=`<strong>${text}</strong>`
						else o=`<p>&emsp;&emsp;${text}</p>`
						break
				}
				return o
			}).filter(Boolean)
			return o_parser({title,time,box})
		})
	}
}