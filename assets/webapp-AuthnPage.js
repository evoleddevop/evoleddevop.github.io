import{_ as f}from"./webapp-index.js";import{e as l,g as c,b8 as g,f as n,j as b,r as d,o as r,b9 as v,ba as x,k,s as B,u as C}from"./webapp-vendor.js";const e=window.Telegram.WebView,w={name:"AuthnPage",data(){return{value:"",init:!1,data:{pin:"",init:{}}}},mounted(){Telegram.WebApp.onEvent("mainButtonClicked",t=>{e.sendData(JSON.stringify(this.data))}),e.expand(),this.$watch("value",this.onEnterPinCode,{immediate:!0})},methods:{resetPinCode(){this.data.pin=""},onEnterPinCode(t){t.length===7&&this.init&&(this.data.init=e.initDataUnsafe,e.MainButton.enable()),t.length<7&&this.init&&(this.data.init={},e.MainButton.disable()),t.length>0&&!this.init&&(this.init=!0,e.MainButton.setText("Войти(3)"),e.MainButton.show())}}},i=t=>(B("data-v-1358c957"),t=t(),C(),t),y={class:"card flex-wrap align-items-center justify-content-center"},P=i(()=>n("div",{class:"font-bold mb-2"},"Аутентификация вашей учетной записи",-1)),V=i(()=>n("p",{class:"text-surface-500 dark:text-surface-400 block mb-8"},"Пожалуйста, введите код карты сотрудника.",-1)),I={key:0,class:"px-1"},S=i(()=>n("i",{class:"pi pi-minus"},null,-1)),E=[S],M={class:"flex justify-content-center mt-8 self-stretch gap-2"},N={class:"mt-4"};function j(t,o,A,D,s,p){const u=d("InputOtp"),m=d("Button");return r(),l("div",y,[P,V,c(u,{modelValue:s.data.pin,"onUpdate:modelValue":o[0]||(o[0]=a=>s.data.pin=a),length:7,style:{gap:"0"},"integer-only":!0,variant:"filled"},{default:g(({attrs:a,events:_,index:h})=>[n("input",v({type:"text"},a,x(_,!0),{class:"custom-otp-input"}),null,16),h===2?(r(),l("div",I,E)):k("",!0)]),_:1},8,["modelValue"]),n("div",M,[c(m,{label:"Сбросить",class:"p-3 w-8rem",onClick:p.resetPinCode},null,8,["onClick"])]),n("div",N,b(s.data),1)])}const U=f(w,[["render",j],["__scopeId","data-v-1358c957"]]);export{U as default};
