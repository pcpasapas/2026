import{d as w,s as $,x as C,j as g,o as n,e as i,a as u,r as o,A as f,h as s,q as b,v as m,b as S,w as y,n as d,T as L,c as h,L as k}from"./app.0c96c2f7.js";const B={class:"relative"},N={__name:"Dropdown",props:{align:{type:String,default:"right"},width:{type:String,default:"48"},contentClasses:{type:Array,default:()=>["py-1","bg-white"]}},setup(t){const a=t;let e=w(!1);const l=c=>{e.value&&c.key==="Escape"&&(e.value=!1)};$(()=>document.addEventListener("keydown",l)),C(()=>document.removeEventListener("keydown",l));const p=g(()=>({48:"w-48"})[a.width.toString()]),x=g(()=>a.align==="left"?"origin-top-left left-0":a.align==="right"?"origin-top-right right-0":"origin-top");return(c,r)=>(n(),i("div",B,[u("div",{onClick:r[0]||(r[0]=v=>f(e)?e.value=!s(e):e=!s(e))},[o(c.$slots,"trigger")]),b(u("div",{class:"fixed inset-0 z-40",onClick:r[1]||(r[1]=v=>f(e)?e.value=!1:e=!1)},null,512),[[m,s(e)]]),S(L,{"enter-active-class":"transition ease-out duration-200","enter-from-class":"transform opacity-0 scale-95","enter-to-class":"transform opacity-100 scale-100","leave-active-class":"transition ease-in duration-75","leave-from-class":"transform opacity-100 scale-100","leave-to-class":"transform opacity-0 scale-95"},{default:y(()=>[b(u("div",{class:d(["absolute z-50 mt-2 rounded-md shadow-lg",[s(p),s(x)]]),style:{display:"none"},onClick:r[2]||(r[2]=v=>f(e)?e.value=!1:e=!1)},[u("div",{class:d(["rounded-md ring-1 ring-black ring-opacity-5",t.contentClasses])},[o(c.$slots,"content")],2)],2),[[m,s(e)]])]),_:3})]))}},E={key:0,type:"submit",class:"block w-full px-4 py-2 text-sm leading-5 text-gray-700 text-left hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition"},z=["href"],_={__name:"DropdownLink",props:{href:String,as:String},setup(t){return(a,e)=>(n(),i("div",null,[t.as=="button"?(n(),i("button",E,[o(a.$slots,"default")])):t.as=="a"?(n(),i("a",{key:1,href:t.href,class:"block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition"},[o(a.$slots,"default")],8,z)):(n(),h(s(k),{key:2,href:t.href,class:"block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition"},{default:y(()=>[o(a.$slots,"default")]),_:3},8,["href"]))]))}},A={__name:"ResponsiveNavLink",props:{active:Boolean,href:String,as:String},setup(t){const a=t,e=g(()=>a.active?"block pl-3 pr-4 py-2 border-l-4 border-indigo-400 text-base font-medium text-indigo-700 bg-indigo-50 focus:outline-none focus:text-indigo-800 focus:bg-indigo-100 focus:border-indigo-700 transition":"block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition");return(l,p)=>(n(),i("div",null,[t.as=="button"?(n(),i("button",{key:0,class:d([s(e),"w-full text-left"])},[o(l.$slots,"default")],2)):(n(),h(s(k),{key:1,href:t.href,class:d(s(e))},{default:y(()=>[o(l.$slots,"default")]),_:3},8,["href","class"]))]))}};export{_,N as a,A as b};
