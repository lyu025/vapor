class M3U8{

	//内容中文件补充代理
	static proxy(content,url,proxy_prefix){
		if(!content.includes('#EXTM3U'))return content;
		let{origin,pathname,protocol}=new URL(url.startsWith(proxy_prefix)?decodeURIComponent((new URL(url)).query.url):url);
		pathname=pathname.replace(/\/[^/]*$/,'/');
		return content.replace(/(^|\n)([^#\n\r]+\.(ts|m3u8|mp4|aac|vtt|webvtt|jpg|png|m4s|mpd|key)(?:\?[^\n\r]*)?)(?=\r?\n|$)/gmi,(match,line_start,file_path)=>{
			const text=file_path.trim();
			if(!text)return match;
			try{
				let url;
				if(/^https?:\/\//i.test(text))url=text;
				else if(/^\/\//.test(text))url=`${protocol}//${text.substring(2)}`;
				else if(/^\//.test(text))url=`${origin}${text}`;
				else if(/^\.\.\//.test(text)){
					const x=pathname.split('/').filter(Boolean);
					const rx=text.split('/');
					for(const v of rx){
						if(v==='..')x.pop();
						else if(v!=='.')x.push(v);
					}
					url=`${origin}/${x.join('/')}`;
				}else if(/^\.\//.test(text))url=`${origin}${pathname}${text.substring(2)}`;
				else url=`${origin}${pathname}${text}`;
				return line_start+proxy_prefix+'?url='+encodeURIComponent(url);
			}catch(_){
				return match;
			}
		})
	}

}