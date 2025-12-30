class Jssj{
	static #h={
		'x-app-id':'bVBF4FyRTn5NJF5n','x-version':'1.0','x-up':'true','x-token':'',Withcredentials:true,
		cookie:'trend=1; x-token=; did=0574d2ea-5567-40bd-bc5b-fca2635653c4; env=prod; CALENDAR_FAVOR_INDEX_LIST=%5B%5D; kind_g=%5B%223%22%5D',
	}
	static #u='https://4a735ea38f8146198dc205d2e2d1bd28.z3c.jin10.com/'
	static async filters(is_run,o_parser){
		const url=`${Jssj.#u}classify`
		return await fetch(url,{headers:Jssj.#h,credentials:'include'}).then(_=>_.json()).then(({data})=>{
			if(!is_run())return
			o_parser(data.map(({id,name:title})=>({id,title})))
		})
	}
	static async list(is_run,o_parser,tid){
		const url=`${Jssj.#u}flash?channel=-8200&vip=0&classify=[${tid}]`
		return await fetch(url,{headers:Jssj.#h,credentials:'include'}).then(_=>_.json()).then(({data})=>{
			if(!is_run())return '✘'
			const o=data.map(({id,time,data:{content:title,pic:img,source:from},important:red})=>{
				return title?{id,time,title,img:img||'',from:from||'',red:!!red}:null
			}).filter(Boolean)
			o.sort((a,b)=>b.time.localeCompare(a.time))
			o_parser(o)
			return '..'
		})
	}
}