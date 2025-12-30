class Fxb{
	static #u='https://www.philstar.com/'
	static async filters(is_run,o_parser){
		return o_parser([
			{id:'24',key:'headlines',title:'头条'},
			{id:'25',key:'opinion',title:'观点'},
			{id:'28',key:'nation',title:'本地'},
			{id:'27',key:'business',title:'经济'},
			{id:'20679',key:'world',title:'国际'},
		])
	}
	static async list(is_run,o_parser,tid,page=1){
		if(page==1||!page)page=`sid=${tid}&pubid=1`
		return await fetch(`${Fxb.#u}lazy_section.php?${page}`,{headers:{'x-up':'true'}}).then(_=>_.text()).then(_=>{
			if(!is_run())return '✘'
			const [,...$]=_.split('<div class="tiles late article')
			const next=_.split('<div class="next"><a href="https://www.philstar.com/lazy_section.php?').pop().split('"').shift().trim()
			const o=$.map(v=>{
				const id=v.split('"').shift().trim()
				const url=v.split('a href="')[1].split('"').shift()
				let reg
				if(v.includes('<h2>'))reg=/<h2><a href="[^"]+" *>/
				else if(v.includes('news_title'))reg=/ class="news_title"><a href="[^"]+" *>/
				else if(v.includes('titleForFeature'))reg=/ class="titleForFeature"><a href="[^"]+" *>/
				if(!reg)return null
				let [,title]=v.split(reg)
				if(title)title=title.split('</a>').shift().trim()
				let [by,time]=v.split(/ *<\/a> *\| */)
				if(by&&time){
					by=by.split('>').pop().trim()
					time='○ '+by+' ◇ '+time.split('<').shift().trim()
				}else time=''
				let [,brief]=v.split(/<div class="news_summary" *><a href="[^"]+" *>/)
				if(brief)brief=brief.split('</a>').shift().trim()
				if(!id||!url||!title)return null
				return {id:url,title,time,brief}
			}).filter(Boolean)
			o_parser(o)
			return next
		})
	}
	static async info(is_run,o_parser,url){
		return await fetch(url,{headers:{'x-up':'true'}}).then(_=>_.text()).then(_=>{
			if(!is_run())return
			let [,title]=_.split('<div class="article__title"><h1>')
			if(title)title=title.split('</h1>').shift().trim()
			if(!title)return null
			let [,time]=_.split('class="article__date-published">')
			if(time)time=time.split('</div>').shift().trim()
			let [,img]=_.split('id="sports_header_image"><img class="lazy" src="')
			if(img)img=img.split('"').shift()
			let [,ibrief]=_.split(' class="article__lead_photo__caption">')
			if(ibrief)ibrief=ibrief.split('<div').shift()
			let [,x]=_.split(' class="article__writeup">')
			if(x)x=x.split('<div class="clear"></div><div class="facebook-philstar-embed"').shift()
			if(!x)return null
			const box=Array.from(`<div id='o'>${x}</div>`.html().node('#o').childNodes).map(v=>{
				let o,t=_type(v).replace(/(html|element)/g,'')
				let text=t=='text'?v.textContent.trim():v.innerText,html=t=='text'?'':v.innerHTML
				if(text)text=text.trim()
				if(html)html=html.trim()
				switch(t){
					case 'br':break
					case 'text':
						if(text)o=`<p>&emsp;&emsp;${text}</p>`
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
			if(ibrief)box.unshift(`<p>&emsp;&emsp;${ibrief}</p>`)
			if(img)box.unshift(`<img src='${img}'/>`)
			return o_parser({title,time,box})
		})
	}
}