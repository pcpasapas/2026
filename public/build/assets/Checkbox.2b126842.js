import{j as r,q as u,z as d,h as l,o as i,e as p,A as f}from"./app.5d90bd77.js";const h=["value"],g={__name:"Checkbox",props:{checked:{type:[Array,Boolean],default:!1},value:{type:String,default:null}},emits:["update:checked"],setup(o,{emit:a}){const c=o,e=r({get(){return c.checked},set(t){a("update:checked",t)}});return(t,s)=>u((i(),p("input",{"onUpdate:modelValue":s[0]||(s[0]=n=>f(e)?e.value=n:null),type:"checkbox",value:o.value,class:"rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"},null,8,h)),[[d,l(e)]])}};export{g as _};
