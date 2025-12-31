class Ydq{
	static #u='https://www.zsledzm.com/'
	static #nf=/(抢先|陈翔六点半|大电影|羊羊|没事|燃烧吧|拜托了|热恋|行不通|吃饭|差评女友|不好惹|怎敌她|永不放弃|鹊刀门|量产型|乡村爱情|扑通扑通|二龙湖|小财迷|武侠世界|别怕)/
	static async filters(is_run,o_parser){
		const o={1:'电影',2:'连续剧',3:'动漫',4:'综艺'}
		for(let k in o){
			o[k]={title:o[k],subt:{}}
			const x=await fetch(`${Ydq.#u}type/${k}.html`,{headers:{'x-up':'true'}}).then(_=>_.text())
			x.matchAll(/<a href="\/type\/([^\.]+)\.html">最新([^<]+)<\/a>/g).forEach(_=>(o[k].subt[_[1]]=_[2]))
		}
		if(is_run())o_parser(o)
	}
	static async list(is_run,o_builder,o_parser,filters,page=1){
		const url=`${Ydq.#u}type/${filters.subt}-${page}.html`
		return await fetch(url,{headers:{'x-up':'true'}}).then(_=>_.text()).then(_=>{
			if(!is_run())return
			let m,o=[],reg=/<a[^>]*href="\/detail\/(\d+)\.html"[^>]*title="([^"]+)"[^>]*data-original="([^"]+)"[^>]*>[\s\S]*?<span[^>]*class="[^"]*aecccdfg[^"]*"[^>]*>([\s\S]*?)<\/span>[\s\S]*?<p[^>]*class="[^"]*text[^"]*"[^>]*>([\s\S]*?)<\/p>/g
			while((m=reg.exec(_))!==null){
				let title=m[2].trim().replace(/\s*[】]\s/g,'').replace(/(\s*[【】:：·。～]\s*|\-+|—+)/g,'.').replace(/，/g,',').replace(/！/g,'!').replace(/\s\s/g,' ').replace(/\.{2,}/g,'.').trim().replace(/\s/g,'.').replace(/(\s*\.+$|\.?(剧场|真人)版)/g,'')
				if(!Ydq.#nf.test(title))o.push(o_builder({id:m[1],title,cover:m[3],tip:m[4].trim()}))
			}
			o_parser(o)
			return o.length<1?'..':(page+1)
		})
	}
	static async info(is_run,o_parser,id){
		await fetch(`${Ydq.#u}detail/${id}.html`,{headers:{'x-up':'true'}}).then(_=>_.text()).then(_=>{
			if(!is_run())return
			const title=_.split('<span class="t1e2x3t34s4">《')[1].split('》').shift().trim()
			const subt=_.split('<span class="t1e2x3t34s4">类型：</span>')[1].split('<').shift().trim()
			const directors=_.split('<span class="t1e2x3t34s4">导演：</span>')[1].split('<').shift().split(',').map(_=>_.trim()).filter(Boolean)
			const actors=_.split('<span class="t1e2x3t34s4">主演：</span>')[1].split('<').shift().split(',').map(_=>_.trim()).filter(Boolean)
			const area=_.split('<span class="t1e2x3t34s4 sdf543">地区：</span>')[1].split('<').shift().trim()
			const score=_.split('<span class="score text-red">')[1].split('<').shift().trim()
			const year=_.split('<span class="t1e2x3t34s4 sdf543">年份：</span>')[1].split('<').shift().trim()
			const brief=_.split('<p class="aaas">主要讲述了:</p><p class="aaas">')[1].split('<').shift().trim()
			const links=_.split('免费观看</h3></div></div><div').pop().split('</ul>').shift().split('</a>').map(_=>_.includes('<a href=')?[_.split('>').pop(),_.split('/play/').pop().split('.html').shift()]:null).filter(Boolean)
			o_parser({title,subt,area,year,directors,actors,brief,score,links})
		})
	}
	static async src(is_run,o_parser,id){
		await fetch(`${Ydq.#u}play/${id}.html`,{headers:{'x-up':'true'}}).then(_=>_.text()).then(_=>{
			if(!is_run())return
			console.log(_.split('var player_aaaa=').pop().split('}').shift()+'}');
			const {url,url_next}=JSON.parse(_.split('var player_aaaa=').pop().split('}').shift()+'}')
			o_parser(url,url_next)
		})
	}
}