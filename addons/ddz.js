class Ddz{
	static #u='https://dandanzan.org/'
	static #nf=/(抢先|陈翔六点半|大电影|羊羊|没事|燃烧吧|拜托了|热恋|行不通|吃饭|差评女友|不好惹|怎敌她|永不放弃|鹊刀门|量产型|乡村爱情|扑通扑通|二龙湖|小财迷|武侠世界|别怕)/
	static async filters(is_run,o_parser){
		const o={dianying:'电影',dianshiju:'连续剧',zongyi:'综艺',dongman:'动漫'}
		for(let k in o){
			o[k]={title:o[k],area:[['','全部']],year:[['','全部']],subt:{},sort:{}}
			const x=await fetch(Ddz.#u+k,{headers:{'x-up':'true'}}).then(_=>_.text())
			x.matchAll(new RegExp(`href="\\/${k}\\/\\?genre=([a-z\\-]+)" class="">([^<]+)<\\/a>`,'g')).forEach(_=>(o[k].subt[_[1]]=_[2]))
			x.matchAll(new RegExp(`href="\\/${k}\\/\\?country=([a-z]+)" class="">([^<]+)<\\/a>`,'g')).forEach(_=>o[k].area.push([_[1],_[2]]))
			x.matchAll(new RegExp(`href="\\/${k}\\/\\?year=([0-9a-z_]+)" class="">([^<]+)<\\/a>`,'g')).forEach(_=>o[k].year.push([_[1],_[2]]))
			o[k].sort={'':'时间',click:'人气',rating:'评分'}
		}
		if(is_run())o_parser(o)
	}
	static async list(is_run,o_builder,o_parser,filters,page=1){
		const url=`${Ddz.#u+filters.type}?page=${page}${filters.sort?`&ob=${filters.sort}`:''}${filters.subt?`&genre=${filters.subt}`:''}${filters.area?`&country=${filters.area}`:''}${filters.year?`&year=${filters.year}`:''}`
		return await fetch(url,{headers:{'x-up':'true'}}).then(_=>_.text()).then(_=>{
			if(!is_run())return
			let m,o=[],reg=/\/(\d+)\.html"[^>]*>([^<]+)<\/a><\/h2>[\s\S]*?<span class="rate">([\d.]+)<\/span>/g
			while((m=reg.exec(_))!==null){
				const [,id,n,score]=m;
				let title=n.trim().replace(/\s*[】]\s/g,'').replace(/(\s*[【】:：·。～]\s*|\-+|—+)/g,'.').replace(/，/g,',').replace(/！/g,'!').replace(/\s\s/g,' ').replace(/\.{2,}/g,'.').trim().replace(/\s/g,'.').replace(/(\s*\.+$|\.?(剧场|真人)版)/g,'')
				if(!Ddz.#nf.test(title))o.push(o_builder({id:`${filters.type}/${id}`,title,cover:`${Ddz.#u}thumbnail/${id}.jpg`,score,tip:''}))
			}
			o_parser(o)
			return o.length<1?'..':(page+1)
		})
	}
	static async info(is_run,o_parser,id){
		await fetch(`${Ddz.#u}${id}.html`,{headers:{'x-up':'true'}}).then(_=>_.text()).then(async _=>{
			if(!is_run())return
			let [,title]=_.split('product-title" style="display: inline-block;">')
			if(title)title=title.split('<').shift().trim()
			let [,subt]=_.split('<div class="product-excerpt">类型')
			if(subt){
				const is=subt.split('</div>').shift().split('</a>')
				is.pop()
				subt=is.map(_=>_.split('>').pop().trim()).filter(Boolean).join(' / ')
			}
			let [,year]=_.split('<span style="font-size:15px;">(')
			if(year)year=year.split(')').shift().trim()
			let [,directors]=_.split('<div class="product-excerpt">导演')
			if(directors){
				const is=directors.split('</div>').shift().split('</a>')
				is.pop()
				directors=is.map(_=>_.split('>').pop().trim()).filter(Boolean)
			}
			let [,actors]=_.split('<div class="product-excerpt">主演')
			if(actors){
				const is=actors.split('</div>').shift().split('</a>')
				is.pop()
				actors=is.map(_=>_.split('>').pop().trim()).filter(Boolean)
			}
			let [,area]=_.split('<div class="product-excerpt">制片国家/地区')
			if(area)area=area.split('</div>').shift().split('</a>')[0].split('>').pop().trim()
			let [,brief]=_.split(/<div class="product-excerpt">[\r\n\t\s]*剧情简介：<span>/)
			if(brief)brief=brief.split('</span>').shift().trim()
			const links=await fetch(`${Ddz.#u}fetch_plays/${id.split('/').pop()}`,{headers:{'x-up':'true'}}).then(_=>_.json()).then(_=>{
				return _.video_plays.map(x=>[x.src_site,x.play_data])
			}).catch(_=>[])
			o_parser({title,subt,area,year,directors,actors,brief,links})
		})
	}
}