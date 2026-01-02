class Books extends Page{
	static #o=null;
	static open(){
		if (!this.#o)this.#o=new Books();
		return this.#o
	}
	define(){
		this.w={}
		this.cm={
			'75e48243889111e7a2df00163e2ed6f9':'数理',
			'57ed86a0889211e7a2df00163e2ed6f9':'化学材料',
			'6a4dcb6a889211e7a2df00163e2ed6f9':'生命',
			'7dee8d8a889211e7a2df00163e2ed6f9':'地球',
			'8ab2fb16889211e7a2df00163e2ed6f9':'资源环境',
			'99603fad889211e7a2df00163e2ed6f9':'农林',
			'a95a1a87889211e7a2df00163e2ed6f9':'医药',
			'c57f833d889211e7a2df00163e2ed6f9':'信息',
			'd97783da889211e7a2df00163e2ed6f9':'工程',
			'e689625e889211e7a2df00163e2ed6f9':'管理',
			'f4fe63b3889211e7a2df00163e2ed6f9':'历史考古',
			'04f8a72b889311e7a2df00163e2ed6f9':'经济',
			'1208204e889311e7a2df00163e2ed6f9':'教育传播',
			'219dfba2889311e7a2df00163e2ed6f9':'法哲社会',
			'2dd606e6889311e7a2df00163e2ed6f9':'公共阅读',
		}
		this.pholder='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTAyNCAxMDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik04NDguMDMzMTQ2IDAuMDI5MDEzYTIxLjMzMjcyOSAyMS4zMzI3MjkgMCAwIDAtMTMuNDgyMjg1IDMuOTI1MjIyYy0xLjM2NTI5NSAwLjg1MzMwOS0xMzEuNTgwMjcyIDg4LjgyOTQ4My00ODYuOTgzNTM1IDg4LjgyOTQ4M2EyMS43NTkzODMgMjEuNzU5MzgzIDAgMCAwLTE5LjQ1NTQ0OSAxMi4zNzI5ODNMNC4xMTAzOSA3NjYuOTgzMjgyYTIyLjUyNzM2MiAyMi41MjczNjIgMCAwIDAgMi4zODkyNjYgMjguNzU2NTE5bDEuMTk0NjMzIDEuMTA5MzAyYTEwLjIzOTcxIDEwLjIzOTcxIDAgMCAwIDEuMTA5MzAyIDAuOTM4NjRDMTQuODYyMDg2IDgwMy4wNzgyNTkgMjcxLjExMDgyNSAxMDI0IDY5NC44NjQxNTIgMTAyNGEyMS42NzQwNTMgMjEuNjc0MDUzIDAgMCAwIDE5LjU0MDc4LTEyLjQ1ODMxNGwyODIuNTMwNjYxLTU4OS42MzY2MjdhMjIuNjEyNjkzIDIyLjYxMjY5MyAwIDAgMC0wLjY4MjY0Ny0yMS4zMzI3MjkgMjEuNjc0MDUzIDIxLjY3NDA1MyAwIDAgMC0xNy43NDg4My0xMC45MjIzNTcgMjEuNjc0MDUzIDIxLjY3NDA1MyAwIDAgMC0yMC41NjQ3NTEgMTIuNjI4OTc2TDY4MS43MjMxOTEgOTc4Ljc3NDYxNWExMTMzLjE5NDU1OSAxMTMzLjE5NDU1OSAwIDAgMS0zNTAuNzEwMDYzLTU5LjM5MDMxOGM3Ny4wNTM4MTcgMTEuMDkzMDE5IDE2NS4zNzEzMTQgMTIuNzk5NjM3IDI2My4xNjA1NDQtNC42MDc4NjlhMjEuOTMwMDQ1IDIxLjkzMDA0NSAwIDAgMCAxNS43ODYyMTktMTIuMTE2OTlsMzQ3LjcyMzQ4MS03MjUuNzM5NDM3YTIyLjY5ODAyNCAyMi42OTgwMjQgMCAwIDAtMS4xOTQ2MzMtMjIuMTg2MDM4IDIxLjU4ODcyMiAyMS41ODg3MjIgMCAwIDAtMzcuNzE2MjY0IDIuNTU5OTI3bC0zNDIuNjAzNjI2IDcxNC45MDI0MTFhNzc2Ljg1MjY1NiA3NzYuODUyNjU2IDAgMCAxLTM5Ny44MTI3MjktMzYuNDM2MzAxYzMyLjI1NTA4NiA0LjAxMDU1MyA2Ny4wNzAxIDYuODI2NDczIDEwMy4xNjUwNzcgNi44MjY0NzMgNzEuMjUxMzE1IDAgMTQ2LjU5ODUxMy0xMC41ODEwMzQgMjExLjUzNTM0LTQyLjU4MDEyN2EyMi4zNTY3IDIyLjM1NjcgMCAwIDAgMTAuMjM5NzEtMTAuMjM5NzA5TDg2Ni4yOTM5NjIgMzEuODU3NDQ0YTIyLjM1NjcgMjIuMzU2NyAwIDAgMC01LjM3NTg0OC0yNi40NTI1ODRBMjEuMzMyNzI5IDIxLjMzMjcyOSAwIDAgMCA4NDguMDMzMTQ2IDAuMDI5MDEzeiIgZmlsbC1vcGFjaXR5PSIuNjUiPjwvcGF0aD48L3N2Zz4='
		this.loader=`<svg class='books_loader' viewBox='0 0 50 50'><path d='M25,5 a20,20 0 1,1 -20,20' stroke='var(--fg)' stroke-width='1' fill='none' stroke-linecap='round'><animate attributeName='stroke-dasharray' values='10,60;60,10;10,60' dur='1.5s' repeatCount='indefinite'/><animateTransform attributeName='transform' type='rotate' from='0 25 25' to='360 25 25' dur='1s' repeatCount='indefinite'/></path></svg>`
	}
	constructor(){
		if(Books.#o)return
		super('books')
	}
	nodes(){
		return[
			this.N('card',{id:'favorite',cc:'favorite'},
				this.N('h2',this.N('svg',{path:'icon'}),'收藏夹',
					this.N('svg',{id:'fv_flush',path:'trash',h:true,click:'App.pages.books.favorite_flush(this)'})
				),
				this.N('div',{id:'fv_list',c:'grid',s:'--gc:4'})
			),
			this.N('card',{id:'kxwk',cc:'kxwk'},
				this.N('h2',this.N('svg',{path:'category'}),'科学文库',
					this.N('svg',{id:'kx_back',path:'back',h:true,click:'App.pages.books.kxwk_back(this)'}),
				),
				this.N('div',{id:'kx_home',T:'A',c:'grid',s:'--gc:3'},
					...Object.keys(this.cm).map(_=>this.N('div',{X:_,click:`App.pages.books.kxwk_filters("${_}",this)`},this.cm[_]))
				),
				this.N('div',{id:'kx_filters',T:'F',h:true}),
				this.N('div',{id:'kx_list',T:'W',h:true,c:'grid',s:'--gc:3',more:'App.pages.books.kxwk_list'}),
				this.N('div',{id:'kx_info',T:'O',h:true,c:'row'}),
			),
		]
	}
	styles(){
		return[
			'ᝰ>[cc="favorite"]>h2>svg:last-child{margin-left:auto;width:22px;height:22px}',
			'ᝰ>[cc="favorite"]>.grid>div{position:relative;aspect-ratio:unset;height:auto}',
			'ᝰ>[cc="favorite"]>.grid>div>img{display:block;width:100%;object-fit:cover;aspect-ratio:9/13.5;flex:1}',
			'ᝰ>[cc="favorite"]>.grid>div>title{display:block;padding:.2rem 0;display:flex;align-items:center;justify-content:center;line-height:1;height:1.6rem;text-align:center;font-size:.54rem;flex:1}',
			
			'ᝰ>[cc="kxwk"]>h2>svg:nth-child(2){margin-left:auto;width:22px;height:22px}',
			'ᝰ>[cc="kxwk"]>[T="A"]>*{aspect-ratio:unset;padding:2rem;text-align:center;font-size:1.2rem}',
			
			'ᝰ>[cc="kxwk"]>[T="F"]{position:sticky;top:36px;z-index:100000;min-height:20px;background:var(--bg);display:flex;flex-direction:column}',
			'ᝰ>[cc="kxwk"]>[T="F"]:empty:after{content:"正在加载筛选项，请耐心等待一下 ...";display:block;width:100%;position:absolute;top:50%;left:0;z-index:10;transform:translateY(-50%);font-size:.8rem;text-align:center}',
			'ᝰ>[cc="kxwk"]>[T="F"]>div{display:block;white-space:nowrap;min-width:100%;overflow-x:auto;overflow-y:hidden}',
			'ᝰ>[cc="kxwk"]>[T="F"]>div::-webkit-scrollbar{height:4px}',
			'ᝰ>[cc="kxwk"]>[T="F"]>div>*{border-bottom:2px solid rgba(0,0,0,0);display:inline-block;width:auto;padding:0 1rem;line-height:24px;font-size:.9rem}',
			'ᝰ>[cc="kxwk"]>[T="F"]>div>[active]{border-bottom-color:var(--h-bd);font-size:1rem}',
			
			'ᝰ>[cc="kxwk"]>[T="W"]>div{display:flex;flex-direction:column;height:auto;aspect-ratio:7/14.5;border:.02rem solid var(--h-bd);box-shadow:4px 2px rgba(100,100,100,.3)}',
			'ᝰ>[cc="kxwk"]>[T="W"]>div>img{display:block;aspect-ratio:7/10;width:100%;object-fit:cover}',
			'ᝰ>[cc="kxwk"]>[T="W"]>div>title{display:block;text-align:center;font-size:.85rem;line-height:1.05;padding:.5rem 4px}',
			'ᝰ>[cc="kxwk"]>[T="W"]>div>div{displsy:flex;flex-direction:column;align-items:center;flex:1;padding:0 4px}',
			'ᝰ>[cc="kxwk"]>[T="W"]>div>div>div{flex:1;text-align:center;color:var(--ph);font-size:.7rem;line-height:1.05;padding:0 4px}',
			
			'ᝰ>[cc="kxwk"]>[T="O"]{display:flex;flex-direction:column;min-height:70vh;padding:1rem}',
			'ᝰ>[cc="kxwk"]>[T="O"]>iframe{display:block;flex:1;height:100%;outline:0}',
			
			'ᝰ>[cc="kxwk"]>[T="O"]>svg{width:24%;margin:1rem auto;object-fit:contain;flex:1}',
			'ᝰ>[cc="kxwk"]>[T="O"]>title{display:block;width:100%;line-height:1.2;margin-top:6px;font-size:1.1rem;font-weight:bold}',
			'ᝰ>[cc="kxwk"]>[T="O"]>p{display:block;margin-top:6px;color:var(--ph)}',
			'ᝰ>[cc="kxwk"]>[T="O"]>div{padding:8px;background:rgba(150,150,150,.2);border-radius:3px;margin-top:6px;font-size:.9rem}',
			
		]
	}
	kxwk_back(e){
		this.E('kxwk').d_attr('wait')
		if(!this.E('kx_info').h_attr('hide')){
			const id=this.E('kx_info').g_attr('i')
			this.E('kx_info').s_attr('hide').d_attr('i').html('')
			this.E('kx_filters').d_attr('hide')
			this.E('kx_list').d_attr('hide').node('[i="'+id+'"]').scrollIntoView({block:'center'})
			return
		}
		this.E('kxwk').node('h2').childNodes[1].textContent='科学文库'
		this.E('kx_filters').s_attr('hide').html('')
		this.E('kx_info').s_attr('hide').html('')
		this.E('kx_list').s_attr('hide').html('')
		this.E('kx_home').d_attr('hide')
		e.s_attr('hide')
		this.w={}
	}
	async kxwk_filters(X){
		this.w={X,st:'dd'}
		this.E('kx_back').d_attr('hide')
		this.E('kx_home').s_attr('hide')
		this.E('kx_list').d_attr('hide').html('')
		this.E('kx_info').s_attr('hide').html('')
		this.E('kx_filters').html('').d_attr('hide')
		this.E('kxwk').node('h2').childNodes[1].textContent=this.cm[X]
		
		const _=await fetch(`https://book.sciencereading.cn/shop/book/Booksimple/list.do?showQueryModel.dp1Value=${X}&showQueryModel.pageSplit.showRow=0`,{headers:{'x-up':'true'}}).then(_=>_.text())
		const C=_.split('xueke="').map((_,i)=>i<1?null:[_.split('"').shift(),_.split('<span>')[1].split('<').shift().trim()]).filter(Boolean)
		C.unshift(['','全部'])
		const T=_.split('bookType="').map((_,i)=>i<1?null:_.split('"').shift()).filter(Boolean)
		T.unshift('')
		const Y=_.split('year="').map((_,i)=>i<1?null:_.split('"').shift()).filter(Boolean)
		Y.unshift('')
		const $c=C.map(([k,title])=>this.N('div',{k:'xk',v:k,n:title,a:k=='',click:'App.pages.books.kxwk_list(this)'},title))
		const $t=T.map(_=>this.N('div',{k:'bt',v:_,n:_,a:_=='',click:'App.pages.books.kxwk_list(this)'},_||'全部'))
		const $y=Y.map(_=>this.N('div',{k:'yr',v:_,n:_,a:_=='',click:'App.pages.books.kxwk_list(this)'},_||'全部'))
		const $s=[['','默认'],['dd','出版日期降序'],['du','出版日期升序'],['nm','书名'],['at','作者'],].map(([v,n])=>this.N('div',{k:'st',v,n,a:v=='dd',click:'App.pages.books.kxwk_list(this)'},n))
		this.E('kx_filters').append(this.N('div',...$c),this.N('div',...$t),this.N('div',...$y),this.N('div',...$s))
		this.E('kx_filters').node('div>[k="xk"][active]').click()
	}
	async kxwk_list(e,p=1){
		if(p=='..')return
		if(e){
			this.w[e.g_attr('k')]=e.g_attr('v')
			this.E('kx_list').s_attr({p:1}).html('')
			e.parentNode.childNodes.forEach(_=>_[_==e?'s_attr':'d_attr']('active'))
		}
		this.E('kxwk').s_attr('wait')
		const sm={dd:'booksimple.publishDate+desc',du:'booksimple.publishDate',nm:'booksimple.name',at:'booksimple.author'}
		let q=`showQueryModel.dp1Value=${this.w.X}&pageSplit.nowPageNumber=${p}&pageSplit.showRow=24`
		if(!!this.w.xk)q+=`&book_xueke=on&showQueryModel.dp3Value=${this.w.xk}`
		if(!!this.w.yr)q+=`&book_xueke=on&showQueryModel.publishYear=${this.w.yr}`
		if(this.w.st&&this.w.st in sm)q+=`&showQueryModel.bookOrderColumn=${sm[this.w.st]}`
		if(!!this.w.bt)q+=`&book_publishYear=on&showQueryModel.bookType=${encodeURIComponent("'"+this.w.bt+"'")}`
		let _=await fetch(`https://book.sciencereading.cn/shop/book/Booksimple/list.do?${q}`,{headers:{'x-up':'true'}}).then(_=>_.text())
		const next=parseInt(_.split(`');">末页</a>`)[0].split("'").pop().trim())>Number(p)?(Number(p)+1):'..'
		const $=_.split('<a href="/shop/book/Booksimple/show.do?id=').map((v,i)=>{
			if(i<1)return null
			const id=v.split('"').shift()
			let [,isbn]=v.split('kc_ISBN keyContent">')
			if(isbn)isbn=isbn.split('</span>')[0].trim()
			let [,title]=v.split('kc_title keyContent">')
			if(title)title=title.split('</b>')[0].replace(/ {2,}/g,' ').trim()
			let [,author]=v.split('kc_author keyContent book_list_title_right lwq_info_right">')
			if(author)author=author.split('</span>')[0].trim()
			let [,,right]=v.split('keyContent book_list_title_right lwq_info_right">')
			if(right)right=right.split('</span>')[0].trim()
			let [,time]=v.split('<span class="keyContent">')
			if(time)time=time.split('</span>')[0].trim()
			let [,img]=v.split('/kxwk4/bookImages/')
			if(img)img=img.split('"')[0].trim()
			if(!id||!isbn||!title)return null
			return this.N('div',{x:this.w.X,i:id,n:title,u:author,click:'App.pages.books.kxwk_info(this)'},
				this.N('img',{src:this.pholder,ss:this.link(`https://book.sciencereading.cn/kxwk4/bookImages/${img}`)}),
				this.N('title',title),this.N('div',this.N('div',author),this.N('div',right),this.N('div',time)),
			)
			return{id,isbn,title,author}
		}).filter(Boolean)
		this.E('kx_list').append(...$)
		this.E('kxwk').d_attr('wait')
		this.E('kx_list').s_attr({p:next})
	}
	async kxwk_info(e){
		const id=e.g_attr('i').trim()
		this.E('kx_filters').s_attr('hide')
		this.E('kx_list').s_attr('hide')
		this.E('kx_home').s_attr('hide')
		this.E('kx_info').html(this.loader).d_attr('hide').s_attr({i:id})
		this.E('kx_info').html(`<iframe crossorigin='anonymous' src='https://book.sciencereading.cn/shop/book/Booksimple/onlineRead.do?id=${id}&readMark=0'></iframe>`)
		return
		
		
		const _=await fetch(`https://book.sciencereading.cn/shop/book/Booksimple/onlineRead.do?id=${id}&readMark=0`,{headers:{'x-up':'true'}}).then(_=>_.text())
		const aes=_.split('id="AESCode" value="')[1].split('"')[0]
		console.log(aes);
		const body=new FormData()
		body.append('text',aes)
		const x=await fetch(`https://cws-wkreader.sciencereading.cn/cpdfapi/v2/documents/science-server-info-decrypt`,{method:'POST',body,headers:{'x-up':'true'}}).then(_=>_.json())
		console.log(x);
		const u=x.data.docHttp+'/cpdfapi/v1/documents/download-file?cmisdoc='+x.data.cmisdoc
		console.log(u);
		const headers={'x-up':'true','Access-Token':x.data.userToken||'','Foxit-App-Name':'Creader_client_mobile','Origin':'https://book.sciencereading.cn'}
		const xx=await fetch(u,{headers}).then(_=>_.arrayBuffer())
		
		return
		eval(fucase(this.w.X)).info(()=>this.w.T==T,async({title,time,box})=>{
			let oo
			if(this.w.X=='fxb'){
				oo=await this.trans([title,...box])
				for(let i in oo)if(i>0){
					const v=oo[i].trim()
					if(!v.startsWith('<'))oo[i]=(i==1?'<p>':'<p>&emsp;&emsp;')+v+'</p>'
					else if(!v.split('>')[1].startsWith('&emsp;')){
						const [vf,...ov]=v.split('>')
						oo[i]=vf+(i==1?'>':'>&emsp;&emsp;')+ov.join('>')
					}
				}
			}
			this.E('kx_info').append(
				this.N('title',oo?oo.shift():title),
				this.N('time',time),
				this.N('div'),
			)
			this.E('kx_info').node('title').scrollIntoView({block:'start'})
			const list=oo||box
			if(this.use_proxy)for(let i in list)if(list[i].includes('<img src')){
				const [a,x]=list[i].split(`<img src='`),[u,...m]=x.split("'")
				list[i]=`${a}<img src='${this.link(u)}'${m.join("'")}`
			}
			this.E('kx_info').node('.news_loader')?.remove()
			this.E('kx_info').node('div').innerHTML=list.join('').trim()
		},id)
	}
}