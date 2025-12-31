class Ole{
	static #u='https://api.olelive.com/v1/pub/vod/'
	static #nf=/(抢先|陈翔六点半|大电影|羊羊|没事|燃烧吧|拜托了|热恋|行不通|吃饭|差评女友|不好惹|怎敌她|永不放弃|鹊刀门|量产型|乡村爱情|扑通扑通|二龙湖|小财迷|武侠世界|别怕)/
	static async filters(is_run,o_parser){
		await fetch(`${Ole.#u}list/type`,{headers:{'x-up':'true'}}).then(_=>_.json()).then(async _=>{
			if(!is_run())return
			const o={}
			for(let x of _.data.filter(_=>_.typeId<5)){
				const subt=x.children
					.map(_=>(_.typeId+'').startsWith(x.typeId+'')?[_.typeId+'',_.typeName]:null)
					.filter(Boolean).reduce((x,[k,v])=>{x[k]=v;return x},{})
				x.area=x.area.map(_=>[_,_])
				x.year=x.year.map(_=>[_+'',_+''])
				o[x.typeId]={title:x.typeName,area:[['','全部'],...x.area],year:[['','全部'],...x.year],subt,sort:{update:'最新',hot:'最热',desc:'添加'}}
			}
			o_parser(o)
		})
	}
	static async list(is_run,o_builder,o_parser,filters,page=1){
		const url=`${Ole.#u}list/true/3/0/${encodeURIComponent(filters.area)}/${filters.type}/${filters.subt}/${filters.year}/${filters.sort}/${page}/20?_vv=${(new Date).vv()}`
		return await fetch(url,{headers:{'x-up':'true'}}).then(_=>_.json()).then(({data:{list,total}})=>{
			if(!is_run())return
			if(!list||list.length<1){
				o_parser([])
				return '..'
			}
			const o=list.map(({id:i,name,pic,score:s,remarks:tip})=>{
				const title=name.trim().replace(/\s*[】]\s/g,'').replace(/(\s*[【】:：·。～]\s*|\-+|—+)/g,'.').replace(/，/g,',').replace(/！/g,'!').replace(/\s\s/g,' ').replace(/\.{2,}/g,'.').trim().replace(/\s/g,'.').replace(/(\s*\.+$|\.?(剧场|真人)版)/g,'')
				return Ole.#nf.test(title)?null:o_builder({id:i+'',title,cover:`https://static.olelive.com/${pic}`,score:s+'',tip})
			}).filter(Boolean)
			o_parser(o)
			return o.length<1?'..':(page+1)
		})
	}
	static async info(is_run,o_parser,id){
		await fetch(`${Ole.#u}detail/${id}/true?_vv=${(new Date).vv()}`,{headers:{'x-up':'true'}}).then(_=>_.json()).then(({data})=>{
			if(!is_run())return
			const {name:title,typeId1Name:type,typeIdName:subt,lang,area,year,director:d,actor:a,urls,content:brief,pic}=data
			const actors=a.split(' / ').map(_=>_.trim()).filter(Boolean)
			const directors=d.split(' / ').map(_=>_.trim()).filter(Boolean)
			const cover=`https://static.olelive.com/${pic}`
			const links=urls.map(_=>[_.title,_.url])
			o_parser({title,type,subt,lang,area,year,directors,actors,brief,links})
		})
	}
}