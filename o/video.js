H.page_video=async function(){
	if(this.M.classList.contains('loaded'))return;

	const NF=/(抢先|陈翔六点半|大电影|羊羊|没事|燃烧吧|拜托了|热恋|行不通|吃饭|差评女友|不好惹|怎敌她|永不放弃|鹊刀门|量产型|乡村爱情|扑通扑通|二龙湖|小财迷|武侠世界|别怕)/;
	const II=`data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZpZXdCb3g9IjAgMCA0MTkuNTI4IDU5NS4yNzYiPg0KPHJlY3QgeD0iLTkuOTM2IiB5PSItOS43NjYiIHN0eWxlPSJmaWxsOiM3NzciIHdpZHRoPSI0MzkuMTQ5IiBoZWlnaHQ9IjYxMy43ODciLz4NCjxnPg0KCTxnPg0KCQk8cmVjdCB4PSI0Mi4zNzUiIHk9IjgwLjEzNCIgc3R5bGU9ImZpbGw6bm9uZSIgd2lkdGg9IjIwNS4yNzciIGhlaWdodD0iMTguMzgzIi8+DQoJCTx0ZXh0IHRyYW5zZm9ybT0ibWF0cml4KDEgMCAwIDEgNDIuMzc1NSA5Mi4yMDQpIiBzdHlsZT0iZmlsbDojMzYzNjM0O2ZvbnQtZmFtaWx5OidBemVyZXRNb25vLUxpZ2h0Jztmb250LXNpemU6MTdweCI+WU9VIEFSRSBJTlZJVEVEIFRPPC90ZXh0Pg0KCTwvZz4NCgk8Zz4NCgkJPHJlY3QgeD0iNDIuMzc1IiB5PSIxMTIuNTE3IiBzdHlsZT0iZmlsbDpub25lIiB3aWR0aD0iMzE3LjA1IiBoZWlnaHQ9IjExMS44MyIvPg0KCQk8dGV4dCB0cmFuc2Zvcm09Im1hdHJpeCgxIDAgMCAxIDQyLjM3NTUgMTUwLjg1NjMpIj48dHNwYW4geD0iMCIgeT0iMCIgc3R5bGU9ImZpbGw6IzM2MzYzNDtmb250LWZhbWlseTonQXplcmV0TW9uby1CbGFjayc7Zm9udC1zaXplOjU0cHgiPlRIRSBHUkFORCA8L3RzcGFuPjx0c3BhbiB4PSIwIiB5PSI1MCIgc3R5bGU9ImZpbGw6IzM2MzYzNDtmb250LWZhbWlseTonQXplcmV0TW9uby1CbGFjayc7Zm9udC1zaXplOjU0cHgiPk9QRU5JTkc8L3RzcGFuPjwvdGV4dD4NCgk8L2c+DQoJPGc+DQoJCTxyZWN0IHg9IjQwLjM4NCIgeT0iNDQwLjExMyIgc3R5bGU9ImZpbGw6bm9uZSIgd2lkdGg9IjEyNy4xMTciIGhlaWdodD0iMTIyLjA2NCIvPg0KCQk8dGV4dCB0cmFuc2Zvcm09Im1hdHJpeCgxIDAgMCAxIDQwLjM4MzggNTA0LjcwODQpIj48dHNwYW4geD0iMCIgeT0iMCIgc3R5bGU9ImZpbGw6I0ZGRkZGRjtmb250LWZhbWlseTonQXplcmV0TW9uby1CbGFjayc7Zm9udC1zaXplOjkwLjk4MThweCI+MDI8L3RzcGFuPjx0c3BhbiB4PSIwIiB5PSI1NC41ODkiIHN0eWxlPSJmaWxsOiNGRkZGRkY7Zm9udC1mYW1pbHk6J0F6ZXJldE1vbm8tQmxhY2snO2ZvbnQtc2l6ZTo2MS40MTI3cHgiPlNFUDwvdHNwYW4+PC90ZXh0Pg0KCTwvZz4NCgk8Zz4NCgkJPHJlY3QgeD0iMjAxLjYxNyIgeT0iNDQxLjY2NiIgc3R5bGU9ImZpbGw6bm9uZSIgd2lkdGg9IjE4MC4xMDYiIGhlaWdodD0iODYuMDQzIi8+DQoJCTx0ZXh0IHRyYW5zZm9ybT0ibWF0cml4KDEgMCAwIDEgMjAxLjYxNzQgNDUwLjE4NjEpIj48dHNwYW4geD0iMCIgeT0iMCIgc3R5bGU9ImZpbGw6IzM2MzYzNDtmb250LWZhbWlseTonQXplcmV0TW9uby1MaWdodCc7Zm9udC1zaXplOjEycHgiPkpvaW4gdXMgZm9yIGV4Y2x1c2l2ZSBzdXJwcmlzZXMsIDwvdHNwYW4+PHRzcGFuIHg9IjAiIHk9IjE5IiBzdHlsZT0iZmlsbDojMzYzNjM0O2ZvbnQtZmFtaWx5OidBemVyZXRNb25vLVNlbWlCb2xkJztmb250LXNpemU6MTJweCI+YWN0aXZpdGllcywgYW5kIHJlZnJlc2htZW50czwvdHNwYW4+PHRzcGFuIHg9IjEzNy4wMzUiIHk9IjE5IiBzdHlsZT0iZmlsbDojMzYzNjM0O2ZvbnQtZmFtaWx5OidBemVyZXRNb25vLUxpZ2h0Jztmb250LXNpemU6MTJweCI+4oCUZG9u4oCZdCA8L3RzcGFuPjx0c3BhbiB4PSIwIiB5PSIzOCIgc3R5bGU9ImZpbGw6IzM2MzYzNDtmb250LWZhbWlseTonQXplcmV0TW9uby1MaWdodCc7Zm9udC1zaXplOjEycHgiPm1pc3Mgb3V0ITwvdHNwYW4+PC90ZXh0Pg0KCTwvZz4NCgk8Zz4NCgkJPHJlY3QgeD0iMjAxLjYxNyIgeT0iNTUyLjM5NyIgc3R5bGU9ImZpbGw6bm9uZSIgd2lkdGg9IjE2NS41NTMiIGhlaWdodD0iOS42NSIvPg0KCQk8dGV4dCB0cmFuc2Zvcm09Im1hdHJpeCgxIDAgMCAxIDIwMS42MTczIDU2MC45MTY5KSIgc3R5bGU9ImZpbGw6IzM2MzYzNDtmb250LWZhbWlseTonQXplcmV0TW9uby1MaWdodCc7Zm9udC1zaXplOjEycHgiPk9uZSBTdC4gOSBMQSAsQ0EgMTIzNDwvdGV4dD4NCgk8L2c+DQoJPGc+DQoJCTxyZWN0IHg9IjIwMS42MTciIHk9IjUzNC40MTgiIHN0eWxlPSJmaWxsOm5vbmUiIHdpZHRoPSIxNTkuNDI2IiBoZWlnaHQ9IjExLjg0NCIvPg0KCQk8dGV4dCB0cmFuc2Zvcm09Im1hdHJpeCgxIDAgMCAxIDIwMS42MTczIDU0Mi45MzgyKSIgc3R5bGU9ImZpbGw6IzM2MzYzNDtmb250LWZhbWlseTonQXplcmV0TW9uby1MaWdodCc7Zm9udC1zaXplOjEycHgiPnd3dy55b3Vyd2Vic2l0ZS5jb208L3RleHQ+DQoJPC9nPg0KCTxwb2x5bGluZSBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojMzYzNjM0O3N0cm9rZS13aWR0aDoyO3N0cm9rZS1taXRlcmxpbWl0OjEwIiBwb2ludHM9IjQ0LjcwMiw0MDMuMjI1IDQ0LjcwMiwyNTQuNDUzIA0KCQkxOTAuNTMsNDA0Ljg0MyAxOTIuNzczLDI1NC40NTMgMzc3LjEyOCw0MjAuNDc0IDM3Ny4xMjgsODEuMTU1IAkiLz4NCgk8Zz4NCgkJCTxlbGxpcHNlIHRyYW5zZm9ybT0ibWF0cml4KDAuMjQ3MSAtMC45NjkgMC45NjkgMC4yNDcxIC0zNS44MDc1IDUyMi45NTEpIiBzdHlsZT0iZmlsbDojRkZGRkZGIiBjeD0iMzE4LjYwNiIgY3k9IjI4NC41MTciIHJ4PSIzMi41NTMiIHJ5PSIzOS44MyIvPg0KCQkJPHRleHQgdHJhbnNmb3JtPSJtYXRyaXgoMC45Njk5IDAuMjQzMyAtMC4yNDMzIDAuOTY5OSAyOTYuOTM3MSAyNzQuMDEzKSIgc3R5bGU9ImZpbGw6IzM2MzYzNDtmb250LWZhbWlseTonQXplcmV0TW9uby1SZWd1bGFyJztmb250LXNpemU6MTNweCI+MDI6MDBQTTwvdGV4dD4NCgkJCTx0ZXh0IHRyYW5zZm9ybT0ibWF0cml4KDAuOTY5OSAwLjI0MzMgLTAuMjQzMyAwLjk2OTkgMjkyLjg5MSAyODkuNTg4OCkiIHN0eWxlPSJmaWxsOiMzNjM2MzQ7Zm9udC1mYW1pbHk6J0F6ZXJldE1vbm8tUmVndWxhcic7Zm9udC1zaXplOjEzcHgiPjA1OjAwUE08L3RleHQ+DQoJPC9nPg0KCTxnPg0KCQk8cGF0aCBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojMzYzNjM0O3N0cm9rZS1taXRlcmxpbWl0OjEwIiBkPSJNMjU4LjYwMyw1NC4xNDJoLTk3LjY3OGMtNS44MTEsMC0xMC41MjEtNC43MTEtMTAuNTIxLTEwLjUyMQ0KCQkJbDAsMGMwLTUuODExLDQuNzExLTEwLjUyMSwxMC41MjEtMTAuNTIxaDk3LjY3OGM1LjgxMSwwLDEwLjUyMiw0LjcxMSwxMC41MjIsMTAuNTIxbDAsMA0KCQkJQzI2OS4xMjQsNDkuNDMxLDI2NC40MTQsNTQuMTQyLDI1OC42MDMsNTQuMTQyeiIvPg0KCQk8Zz4NCgkJCTxyZWN0IHg9IjE2MS4wNzgiIHk9IjM5LjQzMiIgc3R5bGU9ImZpbGw6bm9uZSIgd2lkdGg9Ijk3LjM3MiIgaGVpZ2h0PSI5LjE5MSIvPg0KCQkJPHRleHQgdHJhbnNmb3JtPSJtYXRyaXgoMSAwIDAgMSAxNzYuNzIyMSA0Ny45NTE5KSIgc3R5bGU9ImZpbGw6IzM2MzYzNDtmb250LWZhbWlseTonQXplcmV0TW9uby1MaWdodCc7Zm9udC1zaXplOjEycHgiPlZJQ1RPUiAmYW1wO1ZJQzwvdGV4dD4NCgkJPC9nPg0KCTwvZz4NCjwvZz4NCjwvc3ZnPg0K`;

	//await this.db_set('drop table video');
	this.db_table(this.page,`
		id INTEGER PRIMARY KEY AUTOINCREMENT,
		X VARCHAR(10) NOT NULL, -- 平台
		T INTEGER CHECK(T IN (1,2,3,4)), -- 主类: 1.电影 2.电视剧 3.动漫 4.综艺
		C VARCHAR(15) NOT NULL, -- 子类
		Z VARCHAR(24) NOT NULL, -- 地区
		Y VARCHAR(4) NOT NULL, -- 年份
		D TEXT DEFAULT '', -- 导演
		A TEXT DEFAULT '', -- 主演
		N VARCHAR(50) NOT NULL, -- 标题
		I TEXT NOT NULL, -- 封面
		B TEXT DEFAULT '', -- 简介
		S TEXT DEFAULT '{}', -- 视频源链
		P TEXT DEFAULT '{}', -- 播放设置
		O INTEGER DEFAULT 0 CHECK(O IN (0,1)), -- 是否已收藏: 0.否 1.是
		CONSTRAINT uq_filter UNIQUE (X,T,C,Z,Y,N)
	`);

	const WS_MAP={ole:'欧乐影院',ayf:'爱一帆',ddz:'蛋蛋赞',ydq:'影视大全'};
	this.X.video={
		favorite_flush:async e=>{
			if(!confirm('确认要清空收藏夹吗？'))return;
			await this.db_set(`update video set O=0 where O=1`);
			'#video_favorite>.grid'.N().innerHTML='';
			e.classList.add('hide');
		},
		favorite_load:()=>{
			const o=this.db_get(`select * from video where O=1`,[],false);
			'#video_favorite>.grid'.N().innerHTML=o.map(_=>`<div X='${_.X}' N='${_.N}' onclick='H.X.video.website_info(this)'><img src='${_.I}'/><div>${_.N.split('$$').pop()}</div></div>`).join('');
			'#favorite_flush'.N().classList[o.length>0?'remove':'add']('hide');
		},
		website:{},
		website_load:()=>{
			'#video_website>.grid'.N().innerHTML=Object.keys(WS_MAP).map(_=>`<div X='${_}' N='${WS_MAP[_]}' onclick='H.X.video.website_init(this)'>${_.V()}</div>`).join('');
		},
		website_back:async e=>{
			const $a='#video_website>[T="A"]'.N(),$f='#video_website>[T="F"]'.N();
			const $w='#video_website>[T="W"]'.N(),$v='#video_website>[T="V"]'.N();
			const $t=Array.from('#video_website>h2'.N().childNodes).find(n=>n.nodeType===Node.TEXT_NODE);
			if(!$v.classList.contains('hide')){
				await H.X.video.website_option(0);
				'#video_website>h2>#website_collect'.N().classList.add('hide');
				$v.innerHTML='';
				$v.classList.add('hide');
				if(!$f.firstChild){
					$a.classList.remove('hide');
					return;
				}
				$f.classList.remove('hide');
				$w.classList.remove('hide');
				$t.textContent=WS_MAP[this.X.video.website.X];
				return;
			}
			if(!$f.classList.contains('hide')){
				$f.classList.add('hide');
				$w.classList.add('hide');
				$a.classList.remove('hide');
				e.classList.add('hide');
				$t.textContent='媒体源';
				$f.innerHTML='';
				$w.innerHTML='';
			}
		},
		website_init:async e=>{
			const X=e.getAttribute('X'),N=e.getAttribute('N');
			const $='iframe'.E('',{style:'height:60vw;position:absolute;top:20vh;width:90vw;z-index:4555666',id:'if_website',src:'',onload:'H.X.video.website.load(this)',crossOrigin:'anonymous'});
			'#if_website'.N()?.remove();
			document.body.append($);
			this.X.video.website={X,$,load:_=>null};
			const $t=Array.from('#video_website>h2'.N().childNodes).find(n=>n.nodeType===Node.TEXT_NODE);
			$t.textContent=N;
			'#video_website>[T="A"]'.N().classList.add('hide');
			'#video_website>[T="F"],#video_website>[T="W"]'.N(true).forEach(_=>_.classList.remove('hide'));
			'#video_website>h2>#website_back'.N().classList.remove('hide');
			const {S:F,P:V}=this.db_get('select S,P from video where X=? and N=?',[X,'.'],true)||{};
			let {T:HT,C:HC,Z:HZ,Y:HY,S:HS}=JSON.parse(V||'{}');
			const O={},todo=o=>{
				const ks=Object.keys(this.X.video.website.filters=o);
				HT=HT&&o[HT]?HT:ks[0];
				const {C,Z,Y,S}=o[HT],cks=Object.keys(C),sks=Object.keys(S);
				if(HC===undefined)HC=cks[0];
				if(HZ===undefined)HZ=Z[0][0];
				if(HY===undefined)HY=Y[0][0];
				if(HS===undefined)HS=sks[0];
				const T=ks.map(_=>`<div onclick='H.X.video.website_list(this)' k='T' v='${_}' class='${_===HT?'active':''}'>${o[_].N}</div>`).join('');
				const c=cks.map(_=>`<div onclick='H.X.video.website_list(this)' k='C' v='${_}' class='${_===HC?'active':''}'>${C[_]}</div>`).join('');
				const z=Z.map(_=>`<div onclick='H.X.video.website_list(this)' k='Z' v='${_[0]}' class='${_[0]===HZ?'active':''}'>${_[1]}</div>`).join('');
				const y=Y.map(_=>`<div onclick='H.X.video.website_list(this)' k='Y' v='${_[0]}' class='${_[0]===HY?'active':''}'>${_[1]}</div>`).join('');
				const s=sks.map(_=>`<div onclick='H.X.video.website_list(this)' k='S' v='${_}' class='${_===HS?'active':''}'>${S[_]}</div>`).join('');
				'#video_website>[T="F"]'.N().innerHTML+=`<div k='T'>${T}</div><div k='C'>${c}</div><div k='Z'>${z}</div><div k='Y'>${y}</div><div k='S'>${s}</div>`;
				'#video_website>[T="F"]>[k="C"]>.active'.N().click();
			}
			//if(F)return todo(JSON.parse(F));
			let C={};
			switch(X){
				case 'ole':
					this.X.video.website.load=async $i=>{
						$i.contentDocument.body.innerHTNL="<video src='https://vip.lzcdn2.com/20220427/4666_328feee8/index.m3u8'/>";
						alert("gvbbbv");
					};
					H.X.video.website.$.src='https://www.olehdtv.com/template/conch/asset/css/white.css';
					return
					this.fetch('https://api.olelive.com/v1/pub/vod/list/type',null,null,null,'json').then(async _=>{
						for(let x of _.o.data.filter(_=>_.typeId<5)){
							C=x.children
								.map(_=>(_.typeId+'').startsWith(x.typeId+'')?[_.typeId+'',_.typeName]:null)
								.filter(_=>_).reduce((x,[k,v])=>{x[k]=v;return x},{});
							x.area=x.area.map(_=>[_,_]);
							x.year=x.year.map(_=>[_+'',_+'']);
							O[x.typeId]={N:x.typeName,Z:[['','全部'],...x.area],Y:[['','全部'],...x.year],C,S:{update:'最新',hot:'最热',desc:'添加'}};
						}
						await this.db_set('replace into video(X,T,C,Z,Y,N,I,S)values(?,?,?,?,?,?,?,?)',[X,1,'.','.','.','.','.',JSON.stringify(O)]);
						todo(O);
					});
					break;
				case 'ayf':
					this.X.video.website.load=async $i=>{
						const fetch=$i.contentWindow.fetch;
						
						
						const o=await fetch('https://api.yfsp.tv/api/list/getfiltertagsdata?SecondaryCode=movie').then(_=>_.json());
						console.log(775,o);
						alert("gvbbbv");
					};
					H.X.video.website.$.src='https://m.yfsp.tv/retrievePassword?RegType=1';
					return
					
					C={movie:'电影',drama:'连续剧',variety:'综艺',anime:'动漫'};
					for(let k in C){
						O[k]={N:C[k],Z:[],Y:[],C:{},S:{}};
						let x=await this.fetch(`https://api.yfsp.tv/api/list/getfiltertagsdata?SecondaryCode=${k}`,null,null,null,'json').then(_=>_.o?.data?.list||[]);
						if(x.length<1)return;
						x.forEach((_,i)=>{
							if(i>4)return;
							for(let v of _.list){
								if(i===0||i==1)O[k][['S','C'][i]][v.classifyId+'']=v.classifyName;
								else if(i==2||i==4)O[k][i==2?'Z':'Y'].push([v.classifyId+'',v.classifyName]);
							}
						});
					}
					await this.db_set('replace into video(X,T,C,Z,Y,N,I,S)values(?,?,?,?,?,?,?,?)',[X,1,'.','.','.','.','.',JSON.stringify(O)]);
					todo(O);
					break;
				case 'ddz':
					C={dianying:'电影',dianshiju:'连续剧',zongyi:'综艺',dongman:'动漫'};
					for(let k in C){
						O[k]={N:C[k],Z:[['','全部']],Y:[['','全部']],C:{},S:{}};
						let x=H.kk=await this.fetch(`https://dandanzan.org/${k}/`,null,null,null,'text');
						if(!x.ok)return;
						x.o.matchAll(new RegExp(`href="\\/${k}\\/\\?genre=([a-z\\-]+)" class="">([^<]+)<\\/a>`,'g')).forEach(_=>(O[k].C[_[1]]=_[2]));
						x.o.matchAll(new RegExp(`href="\\/${k}\\/\\?country=([a-z]+)" class="">([^<]+)<\\/a>`,'g')).forEach(_=>O[k].Z.push([_[1],_[2]]));
						x.o.matchAll(new RegExp(`href="\\/${k}\\/\\?year=([0-9a-z_]+)" class="">([^<]+)<\\/a>`,'g')).forEach(_=>O[k].Y.push([_[1],_[2]]));
						O[k].S={'':'时间',click:'人气',rating:'评分'};
					}
					await this.db_set('replace into video(X,T,C,Z,Y,N,I,S)values(?,?,?,?,?,?,?,?)',[X,1,'.','.','.','.','.',JSON.stringify(O)]);
					todo(O);
					break;
				
			}
		},
		website_list:async(e,p=1)=>{
			const $w=`#video_website>[T='W']`.N();
			`#video_website`.N().classList.add('wait');
			if(e){
				const k=e.getAttribute('k'),v=e.getAttribute('v');
				if(k=='T'&&p==1){
					const {C,Z,Y,S}=this.X.video.website.filters[v];
					'#video_website>[T="F"]>*:not([k="T"])'.N(true).forEach(_=>_.remove());
					const cks=Object.keys(C),sks=Object.keys(S);
					const c=cks.map(_=>`<div onclick='H.X.video.website_list(this)' k='C' v='${_}' class='${_===cks[0]?'active':''}'>${C[_]}</div>`).join('');
					const z=Z.map(_=>`<div onclick='H.X.video.website_list(this)' k='Z' v='${_[0]}' class='${_[0]===Z[0][0]?'active':''}'>${_[1]}</div>`).join('');
					const y=Y.map(_=>`<div onclick='H.X.video.website_list(this)' k='Y' v='${_[0]}' class='${_[0]===Y[0][0]?'active':''}'>${_[1]}</div>`).join('');
					const s=sks.map(_=>`<div onclick='H.X.video.website_list(this)' k='S' v='${_}' class='${_===sks[0]?'active':''}'>${S[_]}</div>`).join('');
					'#video_website>[T="F"]'.N().innerHTML+=`<div k='C'>${c}</div><div k='Z'>${z}</div><div k='Y'>${y}</div><div k='S'>${s}</div>`;
				}
				$w.innerHTML='';
				$w.classList.remove('open');
				`#video_website>[T='F']>[k='${k}']>*`.N(true).forEach(_=>_.classList[_.getAttribute('v')==v?'add':'remove']('active'));
			}
			const X=`#video_website>[T='F']>*>[k].active`.N(true).map(_=>[_.getAttribute('k'),_.getAttribute('v')]).reduce((_,[k,v])=>{_[k]=v;return _},{});
			if(e)await this.db_set('update video set P=? where X=? and N=?',[JSON.stringify(X),this.X.video.website.X,'.']);
			
			let url;
			switch(this.X.video.website.X){
				case 'ole':
					url=`https://api.olelive.com/v1/pub/vod/list/true/3/0/${encodeURIComponent(X.Z)}/${X.T}/${X.C}/${X.Y}/${X.S}/${p}/20`;
					this.fetch(url+`?_vv=${(new Date).vv()}`,null,null,null,'json').then(({ok,o,e:err})=>{
						if(!ok)return this.toast(err,'error');
						const {data:{list,total}}=o;
						if(!list||list.length<1)return;
						const x=list.map(({id,name:n,pic,score,remarks})=>{
							let N=n.trim().replace(/\s*[】]\s*/g,'').replace(/(\s*[【】:：·。～]\s*|\-+|—+)/g,'.').replace(/，/g,',').replace(/！/g,'!').replace(/\s\s/g,' ').replace(/\.{2,}/g,'.').trim().replace(/\s/g,'.').replace(/(\s*\.+$|\.?(剧场|真人)版)/g,'');
							if(X.T=='1')N=N.replace(/\.?电影版/g,'');
							return NF.test(N)?null:'div'.E(`<img src='${II}' s='https://static.olelive.com/${pic}'/><score>${score}</score><tip>${remarks?remarks.trim():''}</tip><div>${N}</div>`,{X:this.X.video.website.X,N:id+'$$'+N,onclick:'H.X.video.website_info(this)'});
						}).filter(_=>_);
						if(x.length<1)return;
						$w.append(...x);
						$w.setAttribute('p',p+1);
					}).then(()=>{
						`#video_website`.N().classList.remove('wait');
					});
					break;
				case 'ayf':
					url=`https://api.yfsp.tv/api/list/getconditionfilterdata?titleid=${X.T}&ids=${X.S},${X.C},${X.Z},,${X.Y}&page=${p}&size=24`;
					this.fetch(url,null,null,null,'json').then(({ok,o,e:err})=>{
						if(!ok)return this.toast(err,'error');
						const {list}=o?.data||{};
						if(!list||list.length<1)return;
						const x=list.map(({mediaKey:id,title:n,coverImgUrl:pic,score})=>{
							let N=n.trim().replace(/\s*[】]\s*/g,'').replace(/(\s*[【】:：·。～]\s*|\-+|—+)/g,'.').replace(/，/g,',').replace(/！/g,'!').replace(/\s\s/g,' ').replace(/\.{2,}/g,'.').trim().replace(/\s/g,'.').replace(/(\s*\.+$|\.?(剧场|真人)版)/g,'');
							if(X.T=='1')N=N.replace(/\.?电影版/g,'');
							return NF.test(N)?null:'div'.E(`<img src='${II}' s='${pic}'/><score>${score}</score><div>${N}</div>`,{X:this.X.video.website.X,N:id+'$$'+N,onclick:'H.X.video.website_info(this)'});
						}).filter(_=>_);
						if(x.length<1)return;
						$w.append(...x);
						$w.setAttribute('p',p+1);
					}).then(()=>{
						`#video_website`.N().classList.remove('wait');
					});
					break;
				case 'ddz':
					url=`https://dandanzan.org/${X.T}?page=${p}${X.S?`&ob=${X.S}`:''}${X.C?`&genre=${X.C}`:''}${X.Z?`&country=${X.Z}`:''}${X.Y?`&year=${X.Y}`:''}`;
					this.fetch(url,null,null,null,'text').then(({ok,o,e:err})=>{
						if(!ok)return this.toast(err,'error');
						console.log(o);
					});
			
			}
			
		},
		website_info:async e=>{
			const X=this.X.video.website.X=e.getAttribute('X'),N=e.getAttribute('N'),[I,NN]=N.split('$$');
			this.X.video.website.N=N;
			const $t=Array.from('#video_website>h2'.N().childNodes).find(n=>n.nodeType===Node.TEXT_NODE);
			$t.textContent=NN;
			const $f='#video_website>[T="F"]'.N(),$w='#video_website>[T="W"]'.N();
			const $='#video_website>[T="V"]'.N();
			$.innerHTML=`
				<svg viewBox='0 0 50 50'>
					<path d='M25,5 a20,20 0 1,1 -20,20' stroke='var(--fg)' stroke-width='1' fill='none' stroke-linecap='round'>
						<animate attributeName='stroke-dasharray' values='10,60;60,10;10,60' dur='1.5s' repeatCount='indefinite'/>
						<animateTransform attributeName='transform' type='rotate' from='0 25 25' to='360 25 25' dur='1s' repeatCount='indefinite'/>
					</path>
				</svg>`;
			`#video_website`.N().classList.add('wait');
			$f.classList.add('hide');
			$w.classList.add('hide');
			$.classList.remove('hide');
			'#video_website>[T="A"]'.N().classList.add('hide');
			'#video_website>h2>#website_back'.N().classList.remove('hide');
			const tm={电影:1,电视剧:2,连续剧:2,动漫:3,综艺:4};
			const todo=async(C,t,area,year,director,actor,urls,brief,pic,fn,np=false)=>{
				const r=this.db_get('select N,P,O from video where N=? AND X=?',[N,X],true);
				if(!r)await this.db_set('replace into video(X,N,T,C,Z,Y,D,A,I,B,S)values(?,?,?,?,?,?,?,?,?,?,?)',[
					X,N,tm[t],C,area,year,director,actor,pic,brief,JSON.stringify(urls)
				]);
				'#video_website>h2>#website_collect>use'.N().setAttribute('xlink:href',r&&r.O?'o.svg#collect_ok':'o.svg#collect_no');
				'#video_website>h2>#website_collect'.N().classList.remove('hide');
				let {start,end,curr,u}=JSON.parse(r?.P||'{}');
				this.X.video.website.start=start||0;
				this.X.video.website.end=end||0;
				this.X.video.website.curr=curr||0;
				$.innerHTML=`<p><span>地区:&emsp;<em>${area}</em>&emsp;&emsp;&emsp;年份:&emsp;<em>${year}</em>&emsp;&emsp;&emsp;类型:&emsp;<em>${C}</em></span></p>
					<p ${director.length>0?'':` class='hide'`}><span>导演: </span>${director.map(_=>`<span><em>${_}</em></span>`).join('')}</p>
					<p><span>主演: </span>${actor.map(_=>`<span><em>${_}</em></span>`).join('')}</p><br>
					<p vs>${urls.map(_=>`<span u='${_[1]}' onclick='H.X.video.website_play(this)'${np?` np='1'`:''} fn='${fn?fn.replace('?',_[1]):''}'>${_[0]}</span>`).join('')}</p>
					<video preload autoplay crossorigin='anonymous' controls></video>
					<p sc><span se s onclick='H.X.video.website_option(1)'>╟ ${this.X.video.website.start}</span><span se e onclick='H.X.video.website_option(-1)'>-${this.X.video.website.end} ╢</span></p>
					<p bf>${brief}</p>`;
				`#video_website`.N().classList.remove('wait');
				const V='video'.N();
				V.ondurationchange=()=>{
					if(V.duration<250)return;
					V.playbackRate=1.25;
					V.currentTime=Math.max(this.X.video.website.curr,this.X.video.website.start);
				};
				V.ontimeupdate=()=>{
					if(V.duration<250)return;
					if(V.duration-V.currentTime>this.X.video.website.end)return;
					const x=$.querySelector('p[vs]>span.active'),xx=x?x.nextElementSibling:null;
					xx&&xx.click();
				};
				$.querySelector(`p[vs]>span${u?`[u='${u}']`:''}`).click();
			};
			switch(X){
				case 'ole':
					this.fetch(`https://api.olelive.com/v1/pub/vod/detail/${I}/true?_vv=${(new Date).vv()}`,null,null,null,'json').then(({ok,o,err})=>{
						if(!ok)return this.toast(err,'error');
						let {typeIdName:C,typeId1Name:t,area,year,director,actor,urls,content:brief,pic}=o.data;
						actor=actor.split(' / ').map(_=>_.trim()).filter(_=>_);
						director=director.split(' / ').map(_=>_.trim()).filter(_=>_);
						pic=`https://static.olelive.com/${pic}`;
						urls=urls.map(_=>[_.title,_.url]);
						todo(C,t,area,year,director,actor,urls,brief,pic,null,true);
					});
					break;
				case 'ayf':
					this.fetch(`https://api.yfsp.tv/api/video/videodetails?mediaKey=${I}`,null,null,null,'json').then(({ok,o,err})=>{
						if(!ok)return this.toast(err,'error');
						console.log(o.data.detailInfo);
						let {contentType:C,typeName:t,regional:area,postTime:year,director,starring:actor,episodes:urls,introduce:brief,coverImgUrl:pic}=o.data.detailInfo;
						year=year.split('-')[0];
						actor=actor.split(',').map(_=>_.trim()).filter(_=>_);
						director=director.split(',').map(_=>_.trim()).filter(_=>_);
						urls=urls.map(v=>[v.episodeTitle,v.episodeId]);
						todo(C,t,area,year,director,actor,urls,brief,pic,`H.X.video.website_pu_ayf("${I}","?")`);
					});
					break;
			}
		},
		website_option:async(e)=>{
			const $=`#video_website video`.N();
			if(!$)return;
			if(e===1)this.X.video.website.start=$.currentTime;
			else if(e===-1)this.X.video.website.end=$.duration-$.currentTime;
			if(e!==0)`#video_website>[T='V']>p>[se][${e==1?'s':'e'}]`.N().innerText=(e==1?'╟ ':'-')+this.X.video.website[e?'start':'end']+(e==-1?' ╢':'');
			const {start,end,u,N,X}=this.X.video.website;
			await this.db_set('update video set P=? where N=? AND X=?',[
				JSON.stringify({start,end,curr:$.currentTime,u}),N,X
			])
		},
		website_pu_ayf:async(vk,pi)=>{
			const u=`https://api.yfsp.tv/api/video/getplaydata?mediaKey=${vk}&videoId=${pi}&videoType=1`;
			return await this.fetch(u,null,null,null,'json').then(_=>_.o?.data?.list?.filter(_=>_.mediaUrl).sort((a,b)=>parseInt(a.resolution)-parseInt(b.resolution))?.pop()).then(_=>_?_.mediaUrl:null);
		},
		website_play:async e=>{
			const u=e.getAttribute('u'),fn=e.getAttribute('fn'),np=e.getAttribute('np')==1;
			e.parentNode.childNodes.forEach(_=>_.classList[_==e?'add':'remove']('active'));
			this.X.video.website.u=u;
			const todo=async url=>{
				if(np&&url&&url.includes('.m3u8'))url=`${H.proxy}o?u=${encodeURIComponent(url)}`;
				`#video_website video`.N().setAttribute('src',url||'');
				await H.X.video.website_option(0);
			};
			if(!fn)return await todo(u);
			const url=await eval(fn);
			console.log(url);
			await todo(url);
		},
		website_collect:async e=>{
			const {N,X}=this.X.video.website;
			const $u=e.firstChild,o=$u.getAttribute('xlink:href').endsWith('_no');
			$u.setAttribute('xlink:href',o?'o.svg#collect_ok':'o.svg#collect_no');
			await this.db_get('update video set O=? where N=? AND X=?',[o?1:0,N,X]);
			this.toast('已'+(o?'添加到收藏夹!':'从收藏夹中删除!'));
			this.X.video.favorite_load();
		},
	}

	const img=`https://static.olelive.com/upload/vod/20251215-1/e0ac3d0e9e6900a61a42ff747eccb699.jpg`;
	this.M.innerHTML=`
		<style>
			#video_favorite>h2>#favorite_flush{margin-left:auto;width:22px;height:22px}
			#video_favorite>.grid>div{display:flex;flex-direction:column;position:relative}
			#video_favorite>.grid>div>img{display:block;width:100%;object-fit:cover;aspect-ratio:9/14;flex:1}
			#video_favorite>.grid>div>div{padding:0 .8rem;height:16px;display:flex;align-items:center;justify-content:center;line-height:1;text-align:center;font-size:.5rem}
		
			#video_website>h2>#website_back{margin-left:auto;width:22px;height:22px}
			#video_website>h2>#website_collect{margin-left:1rem;width:22px;height:22px}
			#video_website>[T='A']>*{aspect-ratio:22/9;padding:2rem}
			#video_website>[T='A']>div>svg{width:100%;height:100%;object-fit:contain}
			
			#video_website>[T='F']{position:sticky;top:36px;z-index:100000;min-height:60px;background:var(--bg);display:flex;flex-direction:column}
			#video_website>[T='F']:empty:after{content:'正在加载筛选项，请耐心等待一下 ...';display:block;width:100%;position:absolute;top:50%;left:0;z-index:10;transform:translateY(-50%);font-size:.8rem;text-align:center}
			#video_website>[T='F']>div{display:block;white-space:nowrap;min-width:100%;overflow-x:auto;overflow-y:hidden}
			#video_website>[T='F']>div::-webkit-scrollbar{height:4px}
			#video_website>[T='F']>div>*{border-bottom:2px solid rgba(0,0,0,0);display:inline-block;width:auto;padding:0 1rem;line-height:24px;font-size:.9rem}
			#video_website>[T='F']>div>.active{border-bottom-color:var(--h-bd);font-size:1rem}
			
			#video_website>[T='W']>div{position:relative}
			#video_website>[T='W']>div>img{display:block;width:100%;object-fit:cover;aspect-ratio:9/14;flex:1}
			#video_website>[T='W']>div>score{position:absolute;top:8px;left:8px;z-index:20;display:block;font-size:.8rem;-webkit-text-stroke:.06rem var(--fg)}
			#video_website>[T='W']>div>tip{position:absolute;top:50%;left:12px;right:12px;transform:translateY(-60%);text-align:center;z-index:20;display:block;font-size:.8rem;-webkit-text-stroke:.01rem var(--bg)}
			#video_website>[T='W']>div>div{padding:0 .8rem;height:16px;display:flex;align-items:center;justify-content:center;line-height:1;text-align:center;font-size:.5rem}
			
			#video_website>[T='V']{display:flex;flex-direction:column;min-height:30vh}
			#video_website>[T='V']>svg{width:24%;margin:1rem auto;object-fit:contain;flex:1}
			
			#video_website>[T='V']>p{line-height:1.2;font-size:.9rem;padding:0 .8rem;margin:0;border-bottom:1px solid var(--h-bd)}
			#video_website>[T='V']>p>span{display:block;float:left;padding:0 4px;margin-right:4px;line-height:1.8}
			#video_website>[T='V']>p[vs]{padding-bottom:.8rem}
			#video_website>[T='V']>video{display:block;border-radius:4px 4px 0 0;border-bottom:1px solid var(--h-bd);margin-top:.8rem}
			#video_website>[T='V']>p[sc]{margin-top:-1px;border-radius:0 0 4px 4px}
			#video_website>[T='V']>p>[se]{display:block;line-height:30px;text-align:left;width:auto}
			#video_website>[T='V']>p>[se]:nth-child(2){float:right;text-align:right}
			#video_website>[T='V']>p[vs]>span[u],#video_website>[T='V']>p[sc],#video_website>[T='V']>p[bf]{background:var(--fg);color:var(--bg);opacity:.32}
			#video_website>[T='V']>p[bf]{font-size:.9rem;line-height:1.5;border-radius:2px;padding:.8rem;margin-top:1rem}
			#video_website>[T='V']>p[vs]>span.active{opacity:.6}
			
			
		</style>
		<card id='video_favorite'><h2>${'favorite'.V()}收藏夹${'trash'.V('X.video.favorite_flush',{id:'favorite_flush',c:'hide'})}</h2><div class='grid' style='--gc:4'></div></card>
		<card id='video_website'><h2>${'website'.V()}媒体源${'back'.V('X.video.website_back',{id:'website_back',c:'hide'})}${'collect_no'.V('X.video.website_collect',{id:'website_collect',c:'hide'})}</h2>
			<div T='A' class='grid' style='--gc:2'></div>
			<div T='F' class='hide'></div>
			<div T='W' class='grid hide' style='--gc:4' more='H.X.video.website_list' p='1'></div>
			<div T='V' class='row hide'></div>
		</card>
	`;
	this.X.video.favorite_load();
	this.X.video.website_load();

	this.M.classList.add('loaded');
	setTimeout(()=>'main>svg'.N().classList.add('hide'),800);
}