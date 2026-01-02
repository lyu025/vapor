class Article extends Page{
	static #o=null;
	static open(){
		if (!this.#o)this.#o=new Article();
		return this.#o
	}
	constructor(){
		if(Article.#o)return
		super('article')
		this.loader=`<svg class='article_loader' viewBox='0 0 50 50'><path d='M25,5 a20,20 0 1,1 -20,20' stroke='var(--fg)' stroke-width='1' fill='none' stroke-linecap='round'><animate attributeName='stroke-dasharray' values='10,60;60,10;10,60' dur='1.5s' repeatCount='indefinite'/><animateTransform attributeName='transform' type='rotate' from='0 25 25' to='360 25 25' dur='1s' repeatCount='indefinite'/></path></svg>`
		this.pholder='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTAyNCAxMDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik01MTUuNDU2IDI5OC42NjY2NjdsMi45NDQgMC4wNDI2NjZjNTQuMTg2NjY3IDEuMDAyNjY3IDEwMy44MjkzMzMgOS4zNDQgMTQzLjQ2NjY2NyAyMi43MmwyLjI0IDAuNzQ2NjY3LTE5MC42MTMzMzQgMTAuMzI1MzMzYTEwLjk0NCAxMC45NDQgMCAwIDAtMTAuMzQ2NjY2IDExLjExNDY2NyAxMS44MTg2NjcgMTEuODE4NjY3IDAgMCAwIDEwLjcwOTMzMyAxMS41NDEzMzNsMTE4LjI5MzMzMyAxMS4wOTMzMzR2MjMuNTUybC0xNzUuODI5MzMzIDQuMTM4NjY2YTExLjE3ODY2NyAxMS4xNzg2NjcgMCAwIDAtMTAuOTAxMzMzIDExLjE3ODY2N2MwIDYuMTAxMzMzIDQuOCAxMS4xNTczMzMgMTAuODggMTEuNDU2bDI0Ny40MjQgMTIuMDc0NjY3djE4LjcwOTMzM2wtMjAwIDYuMDhhMTEuNzMzMzMzIDExLjczMzMzMyAwIDAgMCAwIDIzLjUzMDY2N2wxMjguNDI2NjY2IDQuNDM3MzMzdjIzLjUwOTMzM2wtMjE4LjU2IDQuNDhhMTEuNzEyIDExLjcxMiAwIDAgMC0xMS40NzczMzMgMTEuNzMzMzM0YzAgNi4zNzg2NjcgNS4wNzczMzMgMTEuNjA1MzMzIDExLjQ3NzMzMyAxMS43OTczMzNsMjkwLjA0OCA4LjQyNjY2N3YxOS4zMDY2NjZsLTIxMy45NzMzMzMgOS4xMDkzMzRhMTEuMzkyIDExLjM5MiAwIDAgMC0xMC45MjI2NjcgMTEuMzkyYzAgNi4wOCA0Ljg0MjY2NyAxMS4wNzIgMTAuOTIyNjY3IDExLjI2NGwxNDIuNTA2NjY3IDQuNDM3MzMzdjI0LjEyOGwtMTc5LjUyIDUuNDE4NjY3YTExLjQ5ODY2NyAxMS40OTg2NjcgMCAwIDAtMTEuMTU3MzM0IDExLjQ5ODY2NmMwIDYuMjI5MzMzIDQuOTA2NjY3IDExLjM0OTMzMyAxMS4xNTczMzQgMTEuNTg0bDI1MS4zOTIgOS42NDI2Njd2MjEuOTMwNjY3bC0xNzYuODUzMzM0IDcuODkzMzMzYTEyLjIwMjY2NyAxMi4yMDI2NjcgMCAwIDAtMTEuNjQ4IDEyLjIwMjY2N2MwIDYuNTQ5MzMzIDUuMTIgMTEuOTQ2NjY3IDExLjY0OCAxMi4zMDkzMzNsMTc4Ljk0NCA5LjY4NTMzMy0yLjI0IDAuNzQ2NjY3Yy0zOS42MzczMzMgMTMuMzc2LTg5LjI4IDIxLjcxNzMzMy0xNDMuNDY2NjY2IDIyLjcybC0yLjk2NTMzNCAwLjA0MjY2Ny0xLjM0NC0wLjAyMTMzNGgtMTZsLTQuMTM4NjY2LTAuMDg1MzMzYTU2OS44NzczMzMgNTY5Ljg3NzMzMyAwIDAgMS00NS44NjY2NjctMi44NTg2NjdsLTMuMi0wLjM0MTMzM2EyMjkuNDYxMzMzIDIyOS40NjEzMzMgMCAwIDEtNzkuOTE0NjY3LTI5LjU0NjY2N0MzMDAuNDM3MzMzIDY3NC43NzMzMzMgMjU2IDYwMy41MiAyNTYgNTIyLjExMmMwLTExMC4zMTQ2NjcgODEuNi0yMDEuOTYyNjY3IDE4OC44ODUzMzMtMjIwLjE2bDMuMi0wLjMyYTU2OS44NzczMzMgNTY5Ljg3NzMzMyAwIDAgMSA0NS44NjY2NjctMi44NTg2NjdsNC4yODgtMC4wODUzMzNoMTUuODUwNjY3bDEuMzY1MzMzLTAuMDIxMzMzeiBtMTc5LjQzNDY2NyAzNjEuMDg4bDE0Mi4yMDggMTAuMDI2NjY2LTE0Mi4yMDggOS44MzQ2Njd2LTE5Ljg2MTMzM3ogbS03MS40NjY2NjctNjEuMzMzMzM0bDIzNC4yODI2NjcgMTEuNzk3MzM0LTIzNC4yODI2NjcgMTEuNzk3MzMzVjU5OC40eiBtNzEuNDY2NjY3LTU2LjU5NzMzM2wyMjEuNDgyNjY2IDguNzY4LTIyMS40ODI2NjYgOC43ODkzMzN6TTkzOC42NjY2NjcgNDkzLjE0MTMzM2gtMC4zNDEzMzRjLTYuNjU2IDAuMjU2LTExMS42MzczMzMgNC4wNTMzMzMtMzE0LjkwMTMzMyAxMS4zNzA2Njd2LTIyLjcyTDkzOC42NjY2NjcgNDkzLjE0MTMzM3pNNjk0Ljg5MDY2NyA0MjkuMjI2NjY3bDE3Ny4zODY2NjYgOC43NjgtMTc3LjM4NjY2NiA4Ljc4OTMzM3ogbTEzMC44MTYtNTAuOTAxMzM0bC0yMDIuMjgyNjY3IDEwLjQxMDY2N3YtMjAuODQyNjY3bDIwMi4yODI2NjcgMTAuNDMyeiI+PC9wYXRoPjwvc3ZnPg=='
	}
	nodes(){
		return[
			this.N('card',{id:'fortune',cc:'one'},
				this.N('h2',this.N('svg',{path:'fortune'}),'今日运势',
					this.N('svg',{id:'ft_load',path:'refresh',click:'App.pages.article.fortune_load(this)'}),
				),
				this.N('div',
					this.N('div',{c:'tab'},
						this.N('div',{a:true,k:'zodiac',click:'App.pages.article.fortune_tab(this)'},'生肖'),
						this.N('div',{k:'star',click:'App.pages.article.fortune_tab(this)'},'星座'),
					),
					this.N('div',{id:'ft_zodiac',c:'row fortune'}),
					this.N('div',{id:'ft_star',h:true,c:'row fortune'}),
				),
			),
			this.N('card',{id:'joke',cc:'one'},
				this.N('h2',this.N('svg',{path:'joke'}),'开心一刻',
					this.N('svg',{id:'jk_load',path:'refresh',click:'App.pages.article.joke_load(this)'}),
				),
				this.N('div',{id:'jk_info',c:'row'}),
			),
			this.N('card',{id:'saying',cc:'one'},
				this.N('h2',this.N('svg',{path:'saying'}),'深度语录',
					this.N('svg',{id:'sy_load',path:'refresh',click:'App.pages.article.saying_load(this)'}),
				),
				this.N('div',{id:'sy_info',c:'row'}),
			),
			this.N('card',{id:'poetry',cc:'one'},
				this.N('h2',this.N('svg',{path:'poetry'}),'诗词歌赋',
					this.N('svg',{id:'pt_load',path:'refresh',click:'App.pages.article.poetry_load(this)'}),
				),
				this.N('div',{id:'pt_info',c:'row'}),
			),
			this.N('card',{id:'car',cc:'one'},
				this.N('h2',this.N('svg',{path:'random'}),'车标大全',
					this.N('svg',{id:'rd_load',path:'refresh',click:'App.pages.article.car_load(this)'}),
				),
				this.N('div',{id:'cr_info',c:'row list'}),
			),
		]
	}
	styles(){
		return[
			'@keyframes article_svg_spin{100%{transform:rotate(360deg)}}',
			'ᝰ>[cc="one"]>h2>svg:nth-child(2){margin-left:auto;width:22px;height:22px}',
			'ᝰ>[cc="one"]>div{display:flex;flex-direction:column;min-height:16vw;padding:1rem}',
			'ᝰ>[cc="one"]>div>.tab{display:flex;border-bottom:1px solid rgba(155,155,155,.1);padding-bottom:.2rem}',
			'ᝰ>[cc="one"]>div>.tab>*{flex:1;line-height:2rem;text-align:center;font-size:1rem}',
			'ᝰ>[cc="one"]>div>.tab>[active]{font-size:1.3rem;border-bottom:1px solid var(--ph)}',
			'ᝰ>[cc="one"]>div .fortune{position:relative}',
			'ᝰ>[cc="one"]>div .fortune>h3{display:block;font-size:1.2rem;border-bottom:1px solid var(--ph);line-height:1.6;margin-bottom:1rem}',
			'ᝰ>[cc="one"]>div .fortune>h4{display:block;font-size:1.1rem;margin-top:.02rem;background:rgba(199,199,199,.2);line-height:2.3rem}',
			'ᝰ>[cc="one"]>div .fortune>h4>img{float:left;display:block;margin-left:.3rem;margin-top:.2rem;width:1.9rem;height:1.9rem;margin-right:1rem;object-fit:contain}',
			'ᝰ>[cc="one"]>div .fortune>div{margin:.5rem 0;line-height:1.2;font-size:1.1rem}',
			'ᝰ>[cc="one"] .row{line-height:1.8;font-size:1.2rem}',
			'ᝰ>[cc="one"] .row>svg{display:block;width:24%;margin:1rem auto;object-fit:contain;flex:1}',
			`ᝰ>[cc="one"] .row:empty{height:16vw}`,
			`ᝰ>[cc="one"] .row:empty::after{
				content:'';display:block;height:21vw;width:30vw;
				position:absolute;top:50%;left:50%;transform:translate(-50%,-60%);
				background:url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1462 1024"><path fill="var(--fg)" d="M1271.222857 677.302857c-52.662857 0-114.102857-5.851429-179.931428-19.017143-90.697143-19.017143-172.617143-48.274286-232.594286-81.92-61.44-36.571429-92.16-74.605714-84.845714-106.788571 7.314286-38.034286 58.514286-61.44 143.36-67.291429 4.388571 0 7.314286 2.925714 7.314285 7.314286s-2.925714 7.314286-7.314285 7.314286c-76.068571 5.851429-124.342857 26.331429-130.194286 55.588571-5.851429 26.331429 23.405714 59.977143 77.531428 92.16 58.514286 33.645714 138.971429 62.902857 228.205715 80.457143 196.022857 40.96 337.92 13.165714 348.16-38.034286 5.851429-30.72-32.182857-70.217143-103.862857-105.325714-2.925714-1.462857-4.388571-5.851429-2.925715-10.24s5.851429-4.388571 10.24-2.925714c78.994286 39.497143 118.491429 83.382857 111.177143 121.417143-5.851429 42.422857-78.994286 67.291429-184.32 67.291428"/><path d="M1228.8 576.365714c-38.034286 0-78.994286-4.388571-119.954286-13.165714-57.051429-11.702857-109.714286-30.72-149.211428-51.2-40.96-23.405714-59.977143-46.811429-55.588572-68.754286 1.462857-4.388571 4.388571-5.851429 8.777143-5.851428 4.388571 1.462857 5.851429 4.388571 5.851429 8.777143-2.925714 14.628571 14.628571 35.108571 48.274285 52.662857 36.571429 20.48 87.771429 38.034286 144.822858 49.737143 121.417143 24.868571 212.114286 10.24 217.965714-19.017143 1.462857-4.388571 4.388571-5.851429 8.777143-5.851429 4.388571 1.462857 5.851429 4.388571 5.851428 8.777143-5.851429 30.72-54.125714 43.885714-115.565714 43.885714"/><path d="M1338.514286 536.868571h-1.462857c-4.388571-1.462857-5.851429-4.388571-5.851429-8.777142 17.554286-87.771429-59.977143-177.005714-174.08-200.411429-55.588571-11.702857-109.714286-5.851429-155.062857 16.091429-43.885714 21.942857-73.142857 57.051429-81.92 98.011428-1.462857 4.388571-4.388571 5.851429-8.777143 5.851429-4.388571-1.462857-5.851429-4.388571-5.851429-8.777143 8.777143-46.811429 40.96-84.845714 90.697143-108.251429 48.274286-23.405714 106.788571-29.257143 165.302857-17.554285 121.417143 24.868571 204.8 122.88 184.32 217.965714-1.462857 2.925714-4.388571 5.851429-7.314285 5.851428M846.994286 463.725714c-5.851429 0-10.24 4.388571-10.24 8.777143-1.462857 5.851429 2.925714 11.702857 8.777143 13.165714 5.851429 1.462857 11.702857-2.925714 13.165714-8.777142 0-2.925714 0-5.851429-1.462857-8.777143-1.462857-2.925714-4.388571-4.388571-7.314286-4.388572h-2.925714m0 29.257143h-4.388572c-10.24-1.462857-16.091429-11.702857-14.628571-21.942857 1.462857-10.24 11.702857-16.091429 21.942857-14.628571 4.388571 1.462857 8.777143 4.388571 11.702857 7.314285 2.925714 4.388571 2.925714 8.777143 2.925714 13.165715-1.462857 8.777143-8.777143 16.091429-17.554285 16.091428M974.262857 552.96c-5.851429 0-10.24 4.388571-10.24 8.777143 0 2.925714 0 5.851429 1.462857 8.777143 1.462857 2.925714 4.388571 4.388571 7.314286 4.388571 5.851429 1.462857 11.702857-2.925714 13.165714-8.777143 0-2.925714 0-5.851429-1.462857-8.777143-1.462857-2.925714-4.388571-4.388571-7.314286-4.388571h-2.925714m0 29.257143h-4.388571c-4.388571-1.462857-8.777143-4.388571-11.702857-7.314286-2.925714-4.388571-2.925714-8.777143-2.925715-13.165714 1.462857-10.24 11.702857-16.091429 21.942857-14.628572 4.388571 1.462857 8.777143 4.388571 11.702858 7.314286 2.925714 4.388571 2.925714 8.777143 2.925714 13.165714-1.462857 7.314286-8.777143 14.628571-17.554286 14.628572M1187.84 598.308571c-5.851429 0-10.24 4.388571-10.24 8.777143-1.462857 5.851429 2.925714 11.702857 8.777143 13.165715 5.851429 1.462857 11.702857-2.925714 13.165714-8.777143 1.462857-5.851429-2.925714-11.702857-8.777143-13.165715h-2.925714m0 29.257143h-4.388571c-10.24-1.462857-16.091429-11.702857-14.628572-21.942857 1.462857-10.24 11.702857-16.091429 21.942857-14.628571 10.24 1.462857 16.091429 11.702857 14.628572 21.942857-1.462857 8.777143-8.777143 14.628571-17.554286 14.628571M1397.028571 579.291429c-5.851429 0-10.24 4.388571-10.24 8.777142-1.462857 5.851429 2.925714 11.702857 8.777143 13.165715 5.851429 1.462857 11.702857-2.925714 13.165715-8.777143 0-2.925714 0-5.851429-1.462858-8.777143-1.462857-2.925714-4.388571-4.388571-7.314285-4.388571h-2.925715m0 29.257142h-4.388571c-4.388571-1.462857-8.777143-4.388571-11.702857-7.314285-2.925714-4.388571-2.925714-8.777143-2.925714-13.165715 1.462857-10.24 11.702857-16.091429 21.942857-14.628571 4.388571 1.462857 8.777143 4.388571 11.702857 7.314286 2.925714 4.388571 2.925714 8.777143 2.925714 13.165714-1.462857 8.777143-8.777143 14.628571-17.554286 14.628571M1228.8 722.651429c-45.348571 0-96.548571-5.851429-149.211429-16.091429-70.217143-14.628571-134.582857-36.571429-181.394285-61.44-49.737143-27.794286-73.142857-54.125714-68.754286-78.994286 1.462857-4.388571 4.388571-7.314286 8.777143-5.851428 4.388571 1.462857 5.851429 4.388571 5.851428 8.777143-2.925714 17.554286 19.017143 40.96 61.44 62.902857 45.348571 24.868571 108.251429 45.348571 177.005715 59.977143 68.754286 14.628571 134.582857 19.017143 185.782857 14.628571 46.811429-4.388571 77.531429-17.554286 80.457143-33.645714 1.462857-4.388571 4.388571-5.851429 8.777143-5.851429 4.388571 1.462857 5.851429 4.388571 5.851428 8.777143-4.388571 24.868571-38.034286 40.96-93.622857 45.348571-11.702857 1.462857-26.331429 1.462857-40.96 1.462858M851.382857 806.034286c-1.462857 0-2.925714-1.462857-2.925714-2.925715s0-4.388571 2.925714-4.388571c65.828571-16.091429 109.714286-99.474286 109.714286-100.937143 1.462857-1.462857 2.925714-2.925714 4.388571-1.462857 1.462857 1.462857 2.925714 2.925714 1.462857 4.388571-1.462857 4.388571-45.348571 87.771429-115.565714 105.325715 1.462857 0 1.462857 0 0 0M949.394286 794.331429c-1.462857 0-2.925714-1.462857-2.925715-2.925715s0-4.388571 2.925715-4.388571c73.142857-20.48 109.714286-54.125714 109.714285-54.125714 1.462857-1.462857 4.388571-1.462857 5.851429 0 1.462857 1.462857 1.462857 4.388571 0 5.851428-2.925714 1.462857-39.497143 33.645714-115.565714 55.588572 1.462857 0 0 0 0 0M940.617143 835.291429c-1.462857 0-2.925714-1.462857-2.925714-2.925715s1.462857-4.388571 2.925714-4.388571c130.194286-13.165714 198.948571-99.474286 198.948571-99.474286 1.462857-1.462857 2.925714-1.462857 5.851429 0 1.462857 1.462857 1.462857 2.925714 0 5.851429-1.462857-1.462857-71.68 86.308571-204.8 100.937143M367.177143 775.314286c-2.925714 0-5.851429-2.925714-7.314286-5.851429l-20.48-84.845714c-1.462857-4.388571-1.462857-8.777143-2.925714-13.165714-17.554286-64.365714-55.588571-108.251429-86.308572-100.937143-33.645714 7.314286-48.274286 67.291429-32.182857 136.045714 1.462857 4.388571-1.462857 7.314286-5.851428 8.777143-4.388571 1.462857-7.314286-1.462857-8.777143-5.851429-17.554286-77.531429 1.462857-143.36 43.885714-153.6 39.497143-8.777143 83.382857 39.497143 103.862857 111.177143 1.462857 4.388571 2.925714 8.777143 2.925715 13.165714l20.48 84.845715c1.462857 4.388571-1.462857 7.314286-5.851429 8.777143 0 1.462857 0 1.462857-1.462857 1.462857"/><path d="M169.691429 842.605714c-2.925714 0-5.851429-2.925714-7.314286-5.851428l-5.851429-32.182857c-11.702857-54.125714 1.462857-100.937143 30.72-108.251429 27.794286-5.851429 57.051429 24.868571 71.68 74.605714 0 2.925714 5.851429 21.942857 5.851429 24.868572 1.462857 4.388571-1.462857 7.314286-5.851429 8.777143-4.388571 1.462857-7.314286-1.462857-8.777143-5.851429 0-2.925714-5.851429-20.48-5.851428-23.405714-11.702857-39.497143-35.108571-68.754286-54.125714-64.365715-17.554286 4.388571-29.257143 42.422857-19.017143 90.697143l5.851428 33.645715c1.462857 1.462857-1.462857 5.851429-7.314285 7.314285 1.462857 0 0 0 0 0M1307.794286 890.88c-1.462857 0-2.925714 0-2.925715-1.462857-2.925714-1.462857-4.388571-5.851429-2.925714-10.24 1.462857-2.925714 2.925714-4.388571 4.388572-7.314286 19.017143-36.571429 19.017143-74.605714 2.925714-84.845714-16.091429-8.777143-49.737143 11.702857-74.605714 54.125714-1.462857 2.925714-5.851429 4.388571-10.24 2.925714-2.925714-1.462857-4.388571-5.851429-2.925715-10.24 26.331429-48.274286 68.754286-74.605714 93.622857-59.977142 24.868571 13.165714 26.331429 57.051429 2.925715 103.862857l-4.388572 8.777143c-1.462857 2.925714-2.925714 4.388571-5.851428 4.388571"/><path d="M1361.92 946.468571c-1.462857 0-4.388571 0-4.388571-1.462857-64.365714-62.902857-156.525714-112.64-277.942858-149.211428-4.388571-1.462857-5.851429-5.851429-4.388571-8.777143 1.462857-4.388571 5.851429-5.851429 8.777143-4.388572 124.342857 36.571429 217.965714 87.771429 283.794286 152.137143 2.925714 2.925714 2.925714 7.314286 0 10.24-2.925714 0-4.388571 1.462857-5.851429 1.462857M21.942857 936.228571c-1.462857 0-4.388571-1.462857-5.851428-2.925714-2.925714-2.925714-2.925714-7.314286 0-10.24 134.582857-121.417143 392.045714-196.022857 668.525714-196.022857 81.92 0 160.914286 5.851429 238.445714 19.017143 4.388571 0 7.314286 4.388571 5.851429 8.777143 0 4.388571-4.388571 7.314286-8.777143 5.851428-76.068571-13.165714-153.6-17.554286-235.52-17.554285-273.554286 0-526.628571 74.605714-659.748572 193.097142 0-1.462857-1.462857 0-2.925714 0M402.285714 689.005714c-5.851429 0-10.24-1.462857-14.628571-4.388571-5.851429-5.851429-7.314286-11.702857-7.314286-14.628572l-10.24-46.811428c-1.462857-4.388571 1.462857-7.314286 5.851429-8.777143 4.388571-1.462857 7.314286 1.462857 8.777143 5.851429l10.24 46.811428v1.462857s0 2.925714 2.925714 2.925715c1.462857 1.462857 5.851429 1.462857 10.24 1.462857l11.702857-2.925715c4.388571-1.462857 7.314286 1.462857 8.777143 5.851429 1.462857 4.388571-1.462857 7.314286-5.851429 8.777143l-11.702857 2.925714c-2.925714 1.462857-5.851429 1.462857-8.777143 1.462857"/><path d="M440.32 762.148571c-2.925714 0-5.851429-2.925714-7.314286-5.851428l-32.182857-153.6c-1.462857-4.388571 1.462857-7.314286 5.851429-8.777143 4.388571-1.462857 7.314286 1.462857 8.777143 5.851429l32.182857 153.6c1.462857 4.388571-1.462857 7.314286-5.851429 8.777142h-1.462857"/><path d="M433.005714 722.651429c-2.925714 0-5.851429-1.462857-7.314285-5.851429-1.462857-4.388571 1.462857-7.314286 5.851428-8.777143l17.554286-4.388571h1.462857s1.462857 0 2.925714-1.462857 1.462857-5.851429 0-10.24l-11.702857-59.977143c-1.462857-4.388571 1.462857-7.314286 5.851429-8.777143 4.388571-1.462857 7.314286 1.462857 8.777143 5.851428l11.702857 59.977143c1.462857 8.777143 1.462857 16.091429-2.925715 20.48-4.388571 5.851429-10.24 7.314286-11.702857 7.314286l-17.554285 4.388571c-1.462857 1.462857-2.925714 1.462857-2.925715 1.462858M428.617143 874.788571c-24.868571 0-43.885714-11.702857-43.885714-26.331428 0-4.388571 2.925714-7.314286 7.314285-7.314286s7.314286 2.925714 7.314286 7.314286 11.702857 11.702857 29.257143 11.702857 29.257143-7.314286 29.257143-11.702857c0-4.388571-11.702857-11.702857-29.257143-11.702857-4.388571 0-7.314286-2.925714-7.314286-7.314286s2.925714-7.314286 7.314286-7.314286c24.868571 0 43.885714 11.702857 43.885714 26.331429-1.462857 14.628571-19.017143 26.331429-43.885714 26.331428M614.4 870.4c-45.348571 0-80.457143-19.017143-80.457143-43.885714s35.108571-43.885714 80.457143-43.885715 80.457143 19.017143 80.457143 43.885715c0 4.388571-2.925714 7.314286-7.314286 7.314285s-7.314286-2.925714-7.314286-7.314285c0-14.628571-26.331429-29.257143-65.828571-29.257143-38.034286 0-65.828571 16.091429-65.828571 29.257143s26.331429 29.257143 65.828571 29.257143c4.388571 0 7.314286 2.925714 7.314286 7.314285s-4.388571 7.314286-7.314286 7.314286"/></svg>') center / contain no-repeat;
			}`,
			'[theme="dark"] ᝰ>[cc="one"] .row:empty::after{filter:invert(1)}',
			`ᝰ>[cc="one"] .list{display:block}`,
			`ᝰ>[cc="one"] .list>div{aspect-ratio:9/14;display:flex;flex-direction:column;width:19%;margin:0.5%;height:auto;float:left;text-align:center;line-height:1.1;font-size:.9rem;border:1px solid rgba(155,155,155,.1);box-shadow:1px 1px rgba(155,155,155,.2)}`,
			`ᝰ>[cc="one"] .list>div>img{display:block;width:100%;object-fit:contain;margin-bottom:1rem}`,
			
		]
	}
	fortune_tab(e){
		const k=e.g_attr('k')
		this.E('ft_'+k).d_attr('hide')
		this.E('ft_'+(k=='star'?'zodiac':'star')).s_attr('hide')
		e.parentNode.childNodes.forEach(_=>_[_==e?'s_attr':'d_attr']('active'))
	}
	async fortune_load(e){
		e.style.animation='article_svg_spin 1s infinite linear'
		this.E('ft_zodiac').html(this.loader)
		this.E('ft_star').html(this.loader)
		const $=[],zs=[['shu','子鼠'],['niu','丑牛'],['hu','寅虎'],['tu','卯兔'],['long','辰龙'],['she','巳蛇'],['ma','午马'],['yang','未羊'],['hou','申猴'],['ji','酉鸡'],['gou','戌狗'],['zhu','亥猪']]
		for(let [k,n] of zs){
			const _=await fetch(this.link(`https://m.smxs.com/shengxiaoriyun/${k}`)).then(_=>_.text()).catch(_=>{
				toast.error('网络请求失败!')
				return null
			})
			if(_){
				const yl=_.split('<div class="hlinfoitem">阳历：<span>').pop().split('</span></div>').shift()
				const nl=_.split('<div class="hlinfoitem">农历：<span>').pop().split('</span></div>').shift()
				const gz=_.split('<div class="hlinfoitem">干支：<span>').pop().split('</span></div>').shift()
				const [,sy,cy,aq]=_.split('<div class="ysdesc">').map(_=>_.split('</div>').shift().trim())
				if($.length<1)$.push(this.N('h3',`阳历：${yl}`),this.N('h3',`农历：${nl}`),this.N('h3',`干支：${gz}`))
				$.push(this.N('h4',{click:'this.nextElementSibling.toggleAttribute("hide")'},this.N('img',{src:this.link(`https://cdnsm.leyunge.com/Public/Home/images/shengxiao/${k}.png`)}),n))
				$.push(this.N('div',{h:true},this.N('div',this.N('strong','事业运程：'),sy),this.N('div',this.N('strong','财运运程：'),cy),this.N('div',this.N('strong','爱情运程：'),aq)))
			}
		}
		this.E('ft_zodiac').html('').append(...$)
		const xm=[
			['baiyang','03/21-04/19','白羊座'],['jinniu','04/20-05/20','金牛座'],
			['shuangzi','05/21-06/21','双子座'],['juxie','06/22-07/22','巨蟹座'],
			['shizi','07/23-08/22','狮子座'],['chunv','08/23-09/22','处女座'],
			['tiancheng','09/23-10/23','天秤座'],['tianxie','10/24-11/22','天蝎座'],
			['sheshou','11/23-12/21','射手座'],['mojie','12/22-01/19','摩羯座'],
			['shuiping','01/20-02/18','水瓶座'],['shuangyu','02/19-03/20','双鱼座'],
		]
		$.length=0
		for(let [k,t,n] of xm){
			const _=await fetch(this.link(`https://m.smxs.com/xingzuoriyun/${k}`)).then(_=>_.text()).catch(_=>{
				toast.error('网络请求失败!')
				return ''
			})
			if(_){
				const zt=_.split('div class="ztystit">整体运势</div>').pop().split('<div class="ztysdesc">')[1].split('</div>').shift().trim()
				const aq=_.split('div class="ztystit">爱情运势</div>').pop().split('<div class="ztysdesc">')[1].split('</div>').shift().trim()
				const sy=_.split('div class="ztystit">事业学业</div>').pop().split('<div class="ztysdesc">')[1].split('</div>').shift().trim()
				const cf=_.split('div class="ztystit">财富运势</div>').pop().split('<div class="ztysdesc">')[1].split('</div>').shift().trim()
				const jk=_.split('div class="ztystit">健康运势</div>').pop().split('<div class="ztysdesc">')[1].split('</div>').shift().trim()
				$.push(this.N('h4',{click:'this.nextElementSibling.toggleAttribute("hide")'},this.N('img',{src:this.link(`https://cdnsm.leyunge.com/Public/static/mobile/images/xz/xz-${k}.png`)}),n+'：'+t))
				$.push(this.N('div',{h:true},this.N('div',this.N('strong','整体运势：'),zt),this.N('div',this.N('strong','爱情运势：'),aq),this.N('div',this.N('strong','事业学业：'),sy),this.N('div',this.N('strong','财富运势：'),cf),this.N('div',this.N('strong','健康运势：'),jk)))
			}
		}
		this.E('ft_star').html('').append(...$)
		e.style.animation='unset'
	}
	async joke_load(e){
		e.style.animation='article_svg_spin 1s infinite linear'
		this.E('jk_info').html(this.loader)
		const decoder=new TextDecoder('gb2312')
		const {duanzi}=await fetch(this.link('https://www.yduanzi.com/duanzi/getduanzi?_='+(Date.now()))).then(_=>_.json()).catch(_=>{
			toast.error('网络请求失败!')
			return {}
		})
		this.E('jk_info').html(duanzi||'')
		e.style.animation='unset'
	}
	async saying_load(e){
		e.style.animation='article_svg_spin 1s infinite linear'
		this.E('sy_info').html(this.loader)
		let {data:o}=await fetch(this.link('https://v2.xxapi.cn/api/yiyan?type=hitokoto&_='+(Date.now()))).then(_=>_.json()).catch(_=>{
			toast.error('网络请求失败!')
			return {}
		})
		if(o){
			const {data:x}=await fetch(this.link('https://v2.xxapi.cn/api/dujitang?_='+(Date.now()))).then(_=>_.json()).catch(_=>{
				toast.error('网络请求失败!')
				return {}
			})
			o+='<br><br>'+b
		}
		this.E('sy_info').html(o||'')
		e.style.animation='unset'
	}
	async poetry_load(e){
		e.style.animation='article_svg_spin 1s infinite linear'
		this.E('pt_info').html(this.loader)
		const o=await fetch(this.link('https://tixbay.net/poeman/getPoemText?_='+(Date.now()))).then(_=>_.text()).catch(_=>{
			toast.error('网络请求失败!')
			return ''
		})
		this.E('pt_info').html(o.replaceAll('\n','<br>'))
		e.style.animation='unset'
	}
	async car_load(e){
		e.style.animation='article_svg_spin 1s infinite linear'
		this.E('cr_info').html(this.loader)
		const _=await fetch(this.link('https://www.qhsou.com/car?_='+(Date.now()))).then(_=>_.text()).catch(_=>{
			toast.error('网络请求失败!')
			return null
		}
		const o=_?_.split('<dd> <a> <img src="').map(_=>_.startsWith('https')?_.split('</p> </a> </dd>').shift().split('"> <p>'):null).filter(Boolean):[]
		this.E('cr_info').html(o.map(([u,n])=>`<div><img src='${this.pholder}' ss='${this.link(u)}'/>${n}</div>`).join(''))
		e.style.animation='unset'
	}
}