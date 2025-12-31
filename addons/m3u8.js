class M3U8{

	//内容中文件补充代理
	static proxy(content,url,proxy_prefix){
		if(!content.includes('#EXTM3U'))return content;
		let{origin,pathname,protocol}=new URL(url.startsWith(proxy_prefix)?decodeURIComponent((new URL(url)).searchParams.get('url')):url);
		pathname=pathname.replace(/\/[^/]*$/,'/');
		return content.split('\n').map(_=>{
			if(!/\.(ts|m3u8|mp4|aac|vtt|webvtt|jpg|png|m4s|mpd|key)/.test(_))return _.trim()
			return _.replace(/([^"',;# ]+\.(ts|m3u8|mp4|aac|vtt|webvtt|jpg|png|m4s|mpd|key))/g,u=>{
				if(u.startsWith('http'))return proxy_prefix+'?url='+encodeURIComponent(u)
				if(u.startsWith('//'))return proxy_prefix+'?url='+encodeURIComponent('https:'+u)
				if(u.startsWith('/'))return proxy_prefix+'?url='+encodeURIComponent(origin+u)
				return proxy_prefix+'?url='+encodeURIComponent(origin+pathname+u)
			}).trim()
		}).filter(Boolean).join('\n')
	}

}
