
/*
filters

C={movie:'电影',drama:'连续剧',variety:'综艺',anime:'动漫'};
					for(let k in C){
						O[k]={N:C[k],Z:[],Y:[],C:{},S:{}};
						let x=await fetch(`https://api.yfsp.tv/api/list/getfiltertagsdata?SecondaryCode=${k}`,{headers:{'x-up':this.use_proxy}}).then(_=>_.json()).then(_=>_?.data?.list||[]);
						if(x.length<1)return this.toast('请求失败','error');
						x.forEach((_,i)=>{
							if(i>4)return;
							for(let v of _.list){
								if(i===0||i==1)O[k][['S','C'][i]][v.classifyId+'']=v.classifyName;
								else if(i==2||i==4)O[k][i==2?'Z':'Y'].push([v.classifyId+'',v.classifyName]);
							}
						});
					}
					
					
					
					
					
list
url=`https://api.yfsp.tv/api/list/getconditionfilterdata?titleid=${X.T}&ids=${X.S},${X.C},${X.Z},,${X.Y}&page=${p}&size=24`;
					fetch(url,{headers:{'x-up':this.use_proxy}}).then(_=>_.json()).then(o=>{
						const {list}=o?.data||{};
						if(!list||list.length<1)return;
						const x=list.map(({mediaKey:id,title:n,coverImgUrl:pic,score})=>{
							let N=n.trim().replace(/\s*[】]\s/g,'').replace(/(\s*[【】:：·。～]\s*|\-+|—+)/g,'.').replace(/，/g,',').replace(/！/g,'!').replace(/\s\s/g,' ').replace(/\.{2,}/g,'.').trim().replace(/\s/g,'.').replace(/(\s*\.+$|\.?(剧场|真人)版)/g,'');
							if(X.T=='1')N=N.replace(/\.?电影版/g,'');
							return NF.test(N)?null:'div'.E(`<img src='${II}' s='${pic}'/><score>${score}</score><div>${N}</div>`,{T:X.T,C:X.C,X:this.X.video.website.X,N:id+'$$'+N,onclick:'H.X.video.website_info(this)'});
						}).filter(_=>_);
					
					
					
info
fetch(`https://api.yfsp.tv/api/video/videodetails?mediaKey=${I}`,{headers:{'x-up':this.use_proxy}}).then(_=>_.json()).then(o=>{
						console.log(o.data.detailInfo);
						let {contentType:C,regional:area,postTime:year,director,starring:actor,episodes:urls,introduce:brief,coverImgUrl:pic}=o.data.detailInfo;
						year=year.split('-')[0];
						actor=actor.split(',').map(_=>_.trim()).filter(_=>_);
						director=director.split(',').map(_=>_.trim()).filter(_=>_);
						urls=urls.map(v=>[v.episodeTitle,v.episodeId]);
						todo(C,area,year,director,actor,urls,brief,pic,`H.X.video.website_pu_ayf("${I}","?")`);
					});
					
*/