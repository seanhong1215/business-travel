import{m as M,D as y}from"./modalMixin-77708e82.js";import{_ as b,o as i,c as d,d as e,v as u,M as r,R as $,t as h,b as m,F as x,r as w,f as _}from"./index-c5efa885.js";const k={props:{coupon:{type:Object,default(){return{}}},isNew:{type:Boolean,default:!1}},data(){return{tempCoupon:{},due_date:""}},emits:["update-coupon"],watch:{coupon(){this.tempCoupon=this.coupon;const s=new Date(this.tempCoupon.due_date*1e3).toISOString().split("T");[this.due_date]=s},due_date(){this.tempCoupon.due_date=Math.floor(new Date(this.due_date)/1e3)}},mixins:[M]},L={class:"modal fade",id:"couponModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"modal"},D={class:"modal-dialog",role:"document"},N={class:"modal-content"},U={class:"modal-header"},V={class:"modal-title",id:"exampleModalLabel"},B={key:0},T={key:1},I=e("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),O={class:"modal-body"},S={class:"mb-3"},j=e("label",{for:"title"},"標題",-1),F={class:"mb-3"},z=e("label",{for:"coupon_code"},"優惠碼",-1),A={class:"mb-3"},E=e("label",{for:"due_date"},"到期日",-1),P={class:"mb-3"},R=e("label",{for:"price"},"折扣百分比",-1),q={class:"mb-3"},G={class:"form-check"},H=e("label",{class:"form-check-label",for:"is_enabled"}," 是否啟用 ",-1),J={class:"modal-footer"},K=e("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"},"取消",-1);function Q(s,o,a,c,t,l){return i(),d("div",L,[e("div",D,[e("div",N,[e("div",U,[e("h5",V,[a.isNew?(i(),d("span",B,"新增優惠卷")):(i(),d("span",T,"編輯優惠卷"))]),I]),e("div",O,[e("div",S,[j,u(e("input",{type:"text",class:"form-control",id:"title","onUpdate:modelValue":o[0]||(o[0]=n=>t.tempCoupon.title=n),placeholder:"請輸入標題"},null,512),[[r,t.tempCoupon.title]])]),e("div",F,[z,u(e("input",{type:"text",class:"form-control",id:"coupon_code","onUpdate:modelValue":o[1]||(o[1]=n=>t.tempCoupon.code=n),placeholder:"請輸入優惠碼"},null,512),[[r,t.tempCoupon.code]])]),e("div",A,[E,u(e("input",{type:"date",class:"form-control",id:"due_date","onUpdate:modelValue":o[2]||(o[2]=n=>t.due_date=n)},null,512),[[r,t.due_date]])]),e("div",P,[R,u(e("input",{type:"number",class:"form-control",id:"price",min:"0","onUpdate:modelValue":o[3]||(o[3]=n=>t.tempCoupon.percent=n),placeholder:"請輸入折扣百分比"},null,512),[[r,t.tempCoupon.percent,void 0,{number:!0}]])]),e("div",q,[e("div",G,[u(e("input",{class:"form-check-input",type:"checkbox","true-value":1,"false-value":0,"onUpdate:modelValue":o[4]||(o[4]=n=>t.tempCoupon.is_enabled=n),id:"is_enabled"},null,512),[[$,t.tempCoupon.is_enabled]]),H])])]),e("div",J,[K,e("button",{type:"button",class:"btn btn-primary",onClick:o[5]||(o[5]=n=>s.$emit("update-coupon",t.tempCoupon))},h(a.isNew?"新增優惠卷":"更新優惠券"),1)])])])],512)}const W=b(k,[["render",Q]]),X={name:"Coupons",components:{CouponModal:W,DelModal:y},props:{config:Object},data(){return{coupons:{},tempCoupon:{title:"",is_enabled:0,percent:100,code:""},isLoading:!1,isNew:!1}},methods:{openCouponModal(s,o){this.isNew=s,this.isNew?this.tempCoupon={due_date:new Date().getTime()/1e3}:this.tempCoupon={...o},this.$refs.couponModal.openModal()},openDelCouponModal(s){this.tempCoupon={...s},this.$refs.delModal.openModal()},getCoupons(){this.isLoading=!0;const s="https://vue3-course-api.hexschool.io/v2/api/shinyhung/admin/coupons";this.$http.get(s,this.tempProduct).then(o=>{this.coupons=o.data.coupons,this.isLoading=!1}).catch(o=>{this.isLoading=!1,this.$swal.fire({icon:"error",title:o.response.data.message})})},updateCoupon(s){this.isLoading=!0;let o="https://vue3-course-api.hexschool.io/v2/api/shinyhung/admin/coupon",a="post",c="新增",t=s;this.isNew||(o=`https://vue3-course-api.hexschool.io/v2/api/shinyhung/admin/coupon/${this.tempCoupon.id}`,a="put",c="更新",t=this.tempCoupon),this.$http[a](o,{data:t}).then(l=>{this.isLoading=!1,this.$swal.fire({icon:"success",title:l.data.message}),this.getCoupons(),this.$refs.couponModal.hideModal()}).catch(l=>{this.isLoading=!1,this.$swal.fire({icon:"error",title:`${c}產品失敗`,html:`<p class="text-danger">${l.response.data.message}</p>`})})},delCoupon(){const s=`https://vue3-course-api.hexschool.io/v2/api/shinyhung/admin/coupon/${this.tempCoupon.id}`;this.isLoading=!0,this.$http.delete(s).then(o=>{this.isLoading=!1,this.$swal.fire({icon:"success",title:o.data.message}),this.$refs.delModal.hideModal(),this.getCoupons()}).catch(o=>{this.isLoading=!1,this.$swal.fire({icon:"error",title:o.response.data.message})})}},created(){this.getCoupons()}},Y={class:"text-end mt-4"},Z={class:"table mt-4"},ee=e("thead",null,[e("tr",null,[e("th",null,"名稱"),e("th",null,"折扣百分比"),e("th",null,"到期日"),e("th",null,"是否啟用"),e("th",null,"編輯")])],-1),oe={key:0,class:"text-success"},te={key:1,class:"text-muted"},se={class:"btn-group"},ne=["onClick"],le=["onClick"];function ie(s,o,a,c,t,l){const n=_("Loading"),f=_("CouponModal"),C=_("DelModal");return i(),d("div",null,[m(n,{active:t.isLoading,"z-index":1e3},null,8,["active"]),e("div",Y,[e("button",{class:"btn btn-primary",type:"button",onClick:o[0]||(o[0]=p=>l.openCouponModal(!0))}," 建立新的優惠券 ")]),e("table",Z,[ee,e("tbody",null,[(i(!0),d(x,null,w(t.coupons,(p,g)=>(i(),d("tr",{key:g},[e("td",null,h(p.title),1),e("td",null,h(p.percent)+"%",1),e("td",null,h(s.$filters.date(p.due_date)),1),e("td",null,[p.is_enabled===1?(i(),d("span",oe,"啟用")):(i(),d("span",te,"未啟用"))]),e("td",null,[e("div",se,[e("button",{class:"btn btn-outline-primary btn-sm",onClick:v=>l.openCouponModal(!1,p)}," 編輯 ",8,ne),e("button",{class:"btn btn-outline-danger btn-sm",onClick:v=>l.openDelCouponModal(p)}," 刪除 ",8,le)])])]))),128))])]),m(f,{coupon:t.tempCoupon,"is-new":t.isNew,ref:"couponModal",onUpdateCoupon:l.updateCoupon},null,8,["coupon","is-new","onUpdateCoupon"]),m(C,{item:t.tempCoupon,ref:"delModal",onDelItem:l.delCoupon},null,8,["item","onDelItem"])])}const pe=b(X,[["render",ie]]);export{pe as default};