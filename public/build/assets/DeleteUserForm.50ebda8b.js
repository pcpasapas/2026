import{d as m,u as f,o as v,c as w,w as e,g as o,a,b as t,h as r,V as h,n as x}from"./app.331a9616.js";import{a as y,b as g}from"./DialogModal.87efa07c.js";import{_ as u}from"./DangerButton.2805cac9.js";import{_ as k,a as S}from"./TextInput.940b8163.js";import{_ as U}from"./SecondaryButton.6001d653.js";import"./SectionTitle.963fb3ff.js";import"./_plugin-vue_export-helper.cdc0426e.js";const V=a("div",{class:"max-w-xl text-sm text-gray-600"}," Une fois votre compte supprim\xE9, toutes vos informations et votre panier seront supprim\xE9s. ",-1),b={class:"mt-5"},C=a("br",null,null,-1),$=a("p",null,"Entrez votre mot de passe pour supprimer votre compte",-1),B={class:"mt-4"},A={__name:"DeleteUserForm",setup(D){const n=m(!1),p=m(null),s=f({password:""}),d=()=>{n.value=!0,setTimeout(()=>p.value.focus(),250)},i=()=>{s.delete(route("current-user.destroy"),{preserveScroll:!0,onSuccess:()=>l(),onError:()=>p.value.focus(),onFinish:()=>s.reset()})},l=()=>{n.value=!1,s.reset()};return(E,c)=>(v(),w(y,null,{title:e(()=>[o(" Supprimer votre compte ")]),description:e(()=>[o(" Suppression permanente de votre compte ")]),content:e(()=>[V,a("div",b,[t(u,{onClick:d},{default:e(()=>[o(" Suppression du compte ")]),_:1})]),t(g,{show:n.value,onClose:l},{title:e(()=>[o(" Supprimer le compte ")]),content:e(()=>[o(" Etes vous s\xFBr(e) de vouloir supprimer votre compte ? Une fois votre compte supprim\xE9, toutes vos informations et votre panier seront supprim\xE9s. "),C,$,a("div",B,[t(k,{ref_key:"passwordInput",ref:p,modelValue:r(s).password,"onUpdate:modelValue":c[0]||(c[0]=_=>r(s).password=_),type:"password",class:"mt-1 block w-3/4",placeholder:"Mot de passe",onKeyup:h(i,["enter"])},null,8,["modelValue","onKeyup"]),t(S,{message:r(s).errors.password,class:"mt-2"},null,8,["message"])])]),footer:e(()=>[t(U,{onClick:l},{default:e(()=>[o(" Annuler ")]),_:1}),t(u,{class:x(["ml-3",{"opacity-25":r(s).processing}]),disabled:r(s).processing,onClick:i},{default:e(()=>[o(" Supprimer votre compte ")]),_:1},8,["class","disabled"])]),_:1},8,["show"])]),_:1}))}};export{A as default};
