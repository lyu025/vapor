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
		return await fetch(url,{headers:{'x-up':'true'}}).then(_=>_.json()).then(({data})=>{
			if(!is_run()||!(data.list||data.roll_data))return '✘'
			const list=data.list||data.roll_data,o=list.map(({id,article_id:aid,content:abrief,title,img,brief,ctime,is_ad})=>{
				if(is_ad)return null
				const s=new Date(parseInt(`${parseInt(ctime)}`.substring(0,10))*1000);
				const Y=s.getFullYear(),M=s.getMonth()+1,D=s.getDate(),H=s.getHours(),I=s.getMinutes(),S=s.getSeconds();
				const time=`${Y}-${(M+'').padStart(2,'0')}-${(D+'').padStart(2,'0')} ${(H+'').padStart(2,'0')}:${(I+'').padStart(2,'0')}:${(S+'').padStart(2,'0')}`;
				if(aid){
					id=aid
					brief=abrief
				}
				if(title)title=title.replace(/^【[^】]+】/,'').trim()
				return title?{id,time,title,img}:null
			}).filter(Boolean)
			o_parser(o)
			return list.length>0?list.pop().sort_score:'..'
		})
	}
}