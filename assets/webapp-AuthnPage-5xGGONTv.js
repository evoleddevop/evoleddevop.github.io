import{_ as f}from"./webapp-index-DCt00hte.js";import{e as d,g as o,b8 as b,f as a,j as g,r,o as u,b9 as v,ba as x,k as B,s as k,u as C}from"./webapp-vendor-DUsfprc-.js";const e=window.Telegram.WebApp,w={name:"AuthnPage",data(){return{value:"",init:!1,data:{pin:"",data:"{}",init:{}}}},mounted(){e.expand(),Telegram.WebApp.onEvent("mainButtonClicked",t=>{e.sendData(JSON.stringify(this.data))}),this.$watch("value",this.onEnterPinCode,{immediate:!0})},methods:{resetPinCode(){this.value="",this.data.pin=""},onEnterPinCode(t){this.data.pin=t,this.data.init=e.initDataUnsafe,this.data.data=e.initData,this.init||(this.init=!0,e.MainButton.setText("Войти"),e.MainButton.disable(),e.MainButton.show()),t.length===7&&e.MainButton.enable(),t.length<7&&e.MainButton.disable()}}},i=t=>(k("data-v-b7f7e53a"),t=t(),C(),t),y={class:"card flex-wrap align-items-center justify-content-center"},P=i(()=>a("div",{class:"font-bold mb-2"},"Аутентификация вашей учетной записи(15)",-1)),I=i(()=>a("p",{class:"text-surface-500 dark:text-surface-400 block mb-8"},"Пожалуйста, введите код карты сотрудника.",-1)),V={key:0,class:"px-1"},M=i(()=>a("i",{class:"pi pi-minus"},null,-1)),S=[M],A={class:"flex justify-content-center mt-8 self-stretch gap-2"},D={class:"mt-4 h-auto"};function E(t,l,N,j,s,p){const m=r("InputOtp"),c=r("Button");return u(),d("div",y,[P,I,o(m,{modelValue:s.value,"onUpdate:modelValue":l[0]||(l[0]=n=>s.value=n),length:7,style:{gap:"0"},"integer-only":!1},{default:b(({attrs:n,events:_,index:h})=>[a("input",v({type:"text"},n,x(_,!0),{class:"custom-otp-input"}),null,16),h===2?(u(),d("div",V,S)):B("",!0)]),_:1},8,["modelValue"]),a("div",A,[o(c,{label:"Сбросить",class:"p-3 w-8rem",onClick:p.resetPinCode},null,8,["onClick"]),o(c,{label:"Отправить",class:"w-8rem"})]),a("div",D,g(s.data),1)])}const U=f(w,[["render",E],["__scopeId","data-v-b7f7e53a"]]);export{U as default};
