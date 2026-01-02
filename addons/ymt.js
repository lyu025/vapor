class Ymt{
	static #u='https://caiji.maotaizy.cc/api.php/provide/'
	static #nf=/(抢先|陈翔六点半|大电影|羊羊|没事|燃烧吧|拜托了|热恋|行不通|吃饭|差评女友|不好惹|怎敌她|永不放弃|鹊刀门|量产型|乡村爱情|扑通扑通|二龙湖|小财迷|武侠世界|别怕)/
	static async filters(is_run,o_parser){
		const o={},s=await fetch(Vapor.link(`${Ymt.#u}vod/from/mtm3u8/at/json`)).then(_=>_.json()).then(_=>_.class||[]).catch(_=>{
			toast.error('网络请求失败!')
			return []
		})
		for(let {type_id:id,type_name:title,type_pid:pid} of s){
			if(pid<1){
				if(id==34||id==35)continue
				if(!(id in o))o[id]={title,subt:{}}
			}else if(o[pid]&&!(id in o[pid]))o[pid].subt[id]=title
		}
		if(is_run())o_parser(o)
	}
	static async list(is_run,o_builder,o_parser,filters,page=1){
		const url=`${Ymt.#u}vod/ac/detail/t/${filters.subt||filters.type}/pg/${page}/${filters.q?('wd/'+filters.q+'/'):''}from/mtm3u8/at/json`
		return await fetch(Vapor.link(url)).then(_=>_.json()).then(({list,pagecount:count})=>{
			if(!is_run())return
			const o=list.map(({vod_id:id,vod_name:title,vod_pic:cover,vod_douban_score:score,vod_remarks:tip,type_name:subt,vod_area:area,vod_pubdate:year,vod_play_url:links,vod_lang:lang,vod_blurb:brief,vod_director:directors,vod_actor:actors})=>{
				title=title.trim().replace(/\s*[】]\s/g,'').replace(/(\s*[【】:：·。～]\s*|\-+|—+)/g,'.').replace(/，/g,',').replace(/！/g,'!').replace(/\s\s/g,' ').replace(/\.{2,}/g,'.').trim().replace(/\s/g,'.').replace(/(\s*\.+$|\.?(剧场|真人)版)/g,'')
				if(Ymt.#nf.test(title))return null
				actors=actors.split(',').filter(Boolean)
				directors=directors.split(',').filter(Boolean)
				links=links.split('$$$').shift().split('#').filter(Boolean).map(_=>_.split('$'))
				return o_builder({id,title,cover,tip,subt,area,year,links,lang,brief,directors,actors})
			}).filter(Boolean)
			o_parser(o)
			return page>=count?'..':(page+1)
		}).catch(_=>{
			toast.error('网络请求失败!')
			return '..'
		})
	}
	
}