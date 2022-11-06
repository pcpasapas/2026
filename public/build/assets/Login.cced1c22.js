import{u as w,o as n,e as d,b as a,h as s,w as m,F as b,H as h,t as k,f as c,a as t,c as x,g as u,L as y,n as V,m as v}from"./app.5d90bd77.js";import{A as $,_ as B}from"./AuthenticationCardLogo.6978bad6.js";import{_ as F}from"./Checkbox.2b126842.js";import{_ as f,a as p}from"./TextInput.ff459bc4.js";import{_}from"./InputLabel.70952a9e.js";import{_ as L}from"./PrimaryButton.e8a558b7.js";import"./_plugin-vue_export-helper.cdc0426e.js";const C={key:0,class:"mb-4 font-medium text-sm text-green-600"},N=["onSubmit"],S={class:"mt-4"},q={class:"block mt-4"},P={class:"flex items-center"},R=t("span",{class:"ml-2 text-sm text-gray-600"},"Remember me",-1),U={class:"flex items-center justify-end mt-4"},T={__name:"Login",props:{canResetPassword:Boolean,status:String},setup(l){const e=w({email:"",password:"",remember:!1}),g=()=>{e.transform(i=>({...i,remember:e.remember?"on":""})).post(route("login"),{onFinish:()=>e.reset("password")})};return(i,o)=>(n(),d(b,null,[a(s(h),{title:"Log in"}),a($,null,{logo:m(()=>[a(B)]),default:m(()=>[l.status?(n(),d("div",C,k(l.status),1)):c("",!0),t("form",{onSubmit:v(g,["prevent"])},[t("div",null,[a(_,{for:"email",value:"Email"}),a(f,{id:"email",modelValue:s(e).email,"onUpdate:modelValue":o[0]||(o[0]=r=>s(e).email=r),type:"email",class:"mt-1 block w-full",required:"",autofocus:""},null,8,["modelValue"]),a(p,{class:"mt-2",message:s(e).errors.email},null,8,["message"])]),t("div",S,[a(_,{for:"password",value:"Password"}),a(f,{id:"password",modelValue:s(e).password,"onUpdate:modelValue":o[1]||(o[1]=r=>s(e).password=r),type:"password",class:"mt-1 block w-full",required:"",autocomplete:"current-password"},null,8,["modelValue"]),a(p,{class:"mt-2",message:s(e).errors.password},null,8,["message"])]),t("div",q,[t("label",P,[a(F,{checked:s(e).remember,"onUpdate:checked":o[2]||(o[2]=r=>s(e).remember=r),name:"remember"},null,8,["checked"]),R])]),t("div",U,[l.canResetPassword?(n(),x(s(y),{key:0,href:i.route("password.request"),class:"underline text-sm text-gray-600 hover:text-gray-900"},{default:m(()=>[u(" Forgot your password? ")]),_:1},8,["href"])):c("",!0),a(L,{class:V(["ml-4",{"opacity-25":s(e).processing}]),disabled:s(e).processing},{default:m(()=>[u(" Log in ")]),_:1},8,["class","disabled"])])],40,N)]),_:1})],64))}};export{T as default};
