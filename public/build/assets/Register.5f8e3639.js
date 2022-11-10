import{u as _,o as c,c as p,b as e,h as a,w as n,F as w,H as g,a as t,g as d,f as h,L as v,n as y,y as V}from"./app.3b54a30a.js";import{A as k}from"./AuthenticationCard.b1571138.js";import{_ as b}from"./Checkbox.a09e608b.js";import{_ as u,a as l}from"./TextInput.38e81f5f.js";import{_ as m}from"./InputLabel.afec0e3d.js";import{_ as x}from"./PrimaryButton.c53c42c4.js";import{h as C}from"./headerComponent.e92c3123.js";import"./_plugin-vue_export-helper.cdc0426e.js";const $=["onSubmit"],q={class:"mt-4"},F={class:"mt-4"},P={class:"mt-4"},U={key:0,class:"mt-4"},N={class:"flex items-center"},j={class:"ml-2"},z=["href"],A=["href"],B={class:"flex items-center justify-end mt-4"},G={__name:"Register",setup(S){const s=_({name:"",email:"",password:"",password_confirmation:"",terms:!1}),f=()=>{s.post(route("register"),{onFinish:()=>s.reset("password","password_confirmation")})};return(i,o)=>(c(),p(w,null,[e(a(g),{title:"Register"}),e(C),e(k,null,{default:n(()=>[t("form",{onSubmit:V(f,["prevent"])},[t("div",null,[e(m,{for:"name",value:"Pr\xE9nom"}),e(u,{id:"name",modelValue:a(s).name,"onUpdate:modelValue":o[0]||(o[0]=r=>a(s).name=r),type:"text",class:"mt-1 block w-full",required:"",autofocus:"",autocomplete:"name"},null,8,["modelValue"]),e(l,{class:"mt-2",message:a(s).errors.name},null,8,["message"])]),t("div",q,[e(m,{for:"email",value:"Email"}),e(u,{id:"email",modelValue:a(s).email,"onUpdate:modelValue":o[1]||(o[1]=r=>a(s).email=r),type:"email",class:"mt-1 block w-full",required:""},null,8,["modelValue"]),e(l,{class:"mt-2",message:a(s).errors.email},null,8,["message"])]),t("div",F,[e(m,{for:"password",value:"Mot de passe"}),e(u,{id:"password",modelValue:a(s).password,"onUpdate:modelValue":o[2]||(o[2]=r=>a(s).password=r),type:"password",class:"mt-1 block w-full",required:"",autocomplete:"new-password"},null,8,["modelValue"]),e(l,{class:"mt-2",message:a(s).errors.password},null,8,["message"])]),t("div",P,[e(m,{for:"password_confirmation",value:"Confirmez le mot de passe"}),e(u,{id:"password_confirmation",modelValue:a(s).password_confirmation,"onUpdate:modelValue":o[3]||(o[3]=r=>a(s).password_confirmation=r),type:"password",class:"mt-1 block w-full",required:"",autocomplete:"new-password"},null,8,["modelValue"]),e(l,{class:"mt-2",message:a(s).errors.password_confirmation},null,8,["message"])]),i.$page.props.jetstream.hasTermsAndPrivacyPolicyFeature?(c(),p("div",U,[e(m,{for:"terms"},{default:n(()=>[t("div",N,[e(b,{id:"terms",checked:a(s).terms,"onUpdate:checked":o[4]||(o[4]=r=>a(s).terms=r),name:"terms",required:""},null,8,["checked"]),t("div",j,[d(" I agree to the "),t("a",{target:"_blank",href:i.route("terms.show"),class:"underline text-sm text-gray-600 hover:text-gray-900"},"Terms of Service",8,z),d(" and "),t("a",{target:"_blank",href:i.route("policy.show"),class:"underline text-sm text-gray-600 hover:text-gray-900"},"Privacy Policy",8,A)])]),e(l,{class:"mt-2",message:a(s).errors.terms},null,8,["message"])]),_:1})])):h("",!0),t("div",B,[e(a(v),{href:i.route("login"),class:"underline text-sm text-gray-600 hover:text-gray-900"},{default:n(()=>[d(" Vous avez d\xE9j\xE0 un compte ? ")]),_:1},8,["href"]),e(x,{class:y(["ml-4",{"opacity-25":a(s).processing}]),disabled:a(s).processing},{default:n(()=>[d(" Cr\xE9er votre compte ")]),_:1},8,["class","disabled"])])],40,$)]),_:1})],64))}};export{G as default};
