import{_ as g,m,q as p,a as f,c as l,d as t,F as h,r as _,h as b,v,M as y,g as C,t as d,o as i,N as k,p as w,i as x}from"./index-c5efa885.js";const S={name:"ShoppingCart",data(){return{loadingStatus:{loadingItem:""},isLoading:!1,finalTotal:0,total:0,couponCode:""}},methods:{...m(p,["getCart","delProduct","selectCartQty"]),getCoupons(){this.isLoading=!0;const s={data:{code:this.couponCode}},e="https://vue3-course-api.hexschool.io/v2/api/shinyhung/coupon";this.$http.post(e,s).then(r=>{this.isLoading=!1,this.$swal.fire({icon:"success",title:"套用折扣碼成功"}),this.finalTotal=r.data.data.final_total,this.couponCode="",this.getCart()}).catch(r=>{this.isLoading=!1,this.$swal.fire({icon:"error",title:r.response.data.message}),this.couponCode=""})}},computed:{...f(p,["cart","length"])},watch:{total(){this.total-this.finalTotal!==0&&(this.couponCode="")}},mounted(){this.couponCode===""&&(this.cart.final_total=this.cart.total)}},n=s=>(w("data-v-10563bfd"),s=s(),x(),s),I=n(()=>t("section",{class:"banner"},[t("div",{class:"banner-content-wrap"},[t("h3",{class:"banner-title"},"購物車")])],-1)),T={class:"container"},L=n(()=>t("div",{class:"order-process-btn py-5"},[t("button",{type:"button",class:"btn btn-primary active col-12 col-md-3"}," Step1 建立訂單 "),t("button",{type:"button",class:"btn btn-outline-primary col-12 col-md-3"}," Step2 確認付款 "),t("button",{type:"button",class:"btn btn-outline-primary col-12 col-md-3"}," Step3 付款完成 ")],-1)),$={class:"row g-5 order"},N={key:0,class:"col-12 bg-light p-4"},B=n(()=>t("h4",{class:"title w-100 text-center mb-4"},"訂單內容",-1)),M={class:"table align-middle"},V=n(()=>t("thead",{class:"text-center"},[t("tr",null,[t("th",{width:"25%"},"圖片"),t("th",{width:"25%"},"商品名稱"),t("th",{width:"25%"},"數量"),t("th",{width:"25%"},"價格")])],-1)),q={style:{width:"200px"}},z={class:"text-center"},D={class:"text-center"},F={class:"input-group input-group-sm"},P={class:"input-group"},Q=["value","onChange"],U=["value"],j={class:"input-group-text",id:"basic-addon2"},A={class:"text-center"},E={class:"text-muted"},G={class:"text-center"},H=["onClick","disabled"],J=n(()=>t("i",{class:"bi bi-x"},null,-1)),K=[J],O={class:"input-group"},R=["placeholder","disabled"],W={class:"discount"},X={class:"text-end"},Y=n(()=>t("small",null,"總金額：",-1)),Z={key:0,class:"text-end"},tt=n(()=>t("small",{class:"text-success"},"折扣價",-1)),st={class:"text-success"},ot={class:"d-flex justify-content-center"},et={key:1,class:"col-12 bg-light p-4"},nt=n(()=>t("h4",{class:"title w-100 text-center mb-4"},"還沒有任何訂單唷!",-1)),at=[nt];function lt(s,e,r,it,a,u){return i(),l("div",null,[I,t("section",T,[L,t("div",$,[s.length?(i(),l("div",N,[B,t("table",M,[V,t("tbody",null,[s.cart.carts?(i(!0),l(h,{key:0},_(s.cart.carts,o=>(i(),l("tr",{key:o.id},[t("td",q,[t("div",{style:k([{height:"100px","background-size":"cover","background-position":"center"},{backgroundImage:`url(${o.product.imageUrl})`}])},null,4)]),t("td",z,d(o.product.title),1),t("td",D,[t("div",F,[t("div",P,[t("select",{class:"form-select",value:o.qty,onChange:c=>s.selectCartQty(o.id,c)},[(i(),l(h,null,_(20,c=>t("option",{value:c,key:c},d(c),9,U)),64))],40,Q),t("span",j,d(o.product.unit),1)])])]),t("td",A,[t("small",E,"NT$"+d(o.total),1)]),t("td",G,[t("button",{type:"button",class:"btn btn-outline-danger btn-sm",onClick:c=>s.delProduct(o.id),disabled:a.loadingStatus.loadingItem===o.id},K,8,H)])]))),128)):b("",!0)])]),t("div",O,[v(t("input",{"onUpdate:modelValue":e[0]||(e[0]=o=>a.couponCode=o),type:"text",placeholder:a.total-a.finalTotal!==0?"已成功套用折扣碼!!":"輸入折扣碼",disabled:a.total-a.finalTotal!==0,class:"form-control"},null,8,R),[[y,a.couponCode]]),t("button",{class:"input-group-text",id:"basic-addon2",onClick:e[1]||(e[1]=C((...o)=>u.getCoupons&&u.getCoupons(...o),["prevent"]))}," 套用 ")]),t("div",null,[t("div",W,[t("p",X,[Y,t("small",null,d(s.cart.total),1)]),s.cart.final_total!==s.cart.total?(i(),l("p",Z,[tt,t("small",st,d(s.cart.final_total),1)])):b("",!0)])]),t("div",ot,[t("button",{class:"btn btn-primary",onClick:e[2]||(e[2]=o=>s.$router.push({path:"/confirmCart"}))}," 下一步 ")])])):(i(),l("div",et,at))])])])}const dt=g(S,[["render",lt],["__scopeId","data-v-10563bfd"]]);export{dt as default};
