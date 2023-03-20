import{_ as u,n as p,c as i,b as f,d as s,F as v,r as g,f as b,o,g as m,h as y,t as n,p as L,i as k}from"./index-5e667ba6.js";const w={name:"FavoriteList",data(){return{products:[],favoritesList:[],isLoading:!1,id:"",favorite:JSON.parse(localStorage.getItem("favorite"))||[]}},methods:{getProducts(){this.isLoading=!0,p().then(t=>{this.isLoading=!1,this.products=t.data.products,this.getFavorites()}).catch(t=>{this.isLoading=!1,this.$swal.fire({icon:"danger",title:"找不到收藏清單"})})},getFavorites(){this.favoritesList=this.products.filter(t=>this.favorite.indexOf(t.id)>-1)},toggleFavorite(t){const c=this.favorite.findIndex(r=>r===t);c===-1?(this.favorite.push(t),this.$swal.fire({icon:"success",title:"已加入收藏"})):(this.favorite.splice(c,1),this.$swal.fire({icon:"success",title:"已移除收藏"})),this.getFavorites()}},watch:{favorite:{handler(){localStorage.setItem("favorite",JSON.stringify(this.favorite))},deep:!0}},mounted(){this.getProducts()}},d=t=>(L("data-v-1c92a2b6"),t=t(),k(),t),x=d(()=>s("section",{class:"banner"},[s("div",{class:"banner-content-wrap"},[s("h3",{class:"banner-title"},"收藏列表")])],-1)),F={class:"container"},I={class:"products"},S={key:0,class:"row g-0 py-4"},C=["src"],N={class:"product-feature-btn"},$=["onClick"],B=["onClick"],O={key:0},P={key:0,class:"bi bi-suit-heart-fill"},V={key:1,class:"bi bi-suit-heart"},J={class:"product-feature-text"},z={class:"city-sub-name"},D={class:"city-name"},E={key:1,class:"row g-0 py-4"},G=d(()=>s("h4",{class:"title w-100 text-center mb-4"},"還沒有任何收藏唷!",-1)),M=[G];function U(t,c,r,j,a,l){const _=b("Loading");return o(),i("div",null,[f(_,{active:a.isLoading,"z-index":1e3},null,8,["active"]),x,s("div",F,[s("section",I,[a.favoritesList?(o(),i("div",S,[(o(!0),i(v,null,g(a.favoritesList,e=>(o(),i("div",{key:e.id,class:"col-md-4 product-feature my-3 mx-3"},[s("img",{src:e.imageUrl,alt:"product-img"},null,8,C),s("div",N,[s("button",{ref_for:!0,ref:"product-detail",button:"",type:"button",class:"btn btn-primary btn-lg",onClick:h=>t.$router.push({path:`/productList/${e.id}`})}," 查看商品 ",8,$)]),s("a",{href:"#",class:"like",onClick:m(h=>l.toggleFavorite(e.id),["prevent"])},[a.favorite.includes(e.id)?(o(),i("span",O,[a.favorite.includes(e.id)?(o(),i("i",P)):y("",!0)])):(o(),i("i",V))],8,B),s("div",J,[s("small",z,n(e.category),1),s("p",D,n(e.title),1)])]))),128))])):(o(),i("div",E,M))])])])}const A=u(w,[["render",U],["__scopeId","data-v-1c92a2b6"]]);export{A as default};
