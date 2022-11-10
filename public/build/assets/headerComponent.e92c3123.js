import{o as l,c as d,a as o,L as y,A as u,b as n,w as a,g as c,e as B,l as N,m as E,p as w,r as g,x as v,h as p,j as k,v as $,n as C,T as z,d as H,B as P,H as T,F as V,t as j,y as A}from"./app.3b54a30a.js";import{_ as x}from"./_plugin-vue_export-helper.cdc0426e.js";const M={},F={class:""},I=["src"];function R(t,s){return l(),d("div",F,[o("img",{src:"/img/PcPasaPas.png"},null,8,I)])}const O=x(M,[["render",R],["__scopeId","data-v-c374c1e5"]]);const U={components:{Link:y}};function q(t,s,e,m,h,f){const r=u("Link");return l(),d("nav",null,[n(r,{href:"/"},{default:a(()=>[c("Accueil")]),_:1}),n(r,{href:"/comparateur"},{default:a(()=>[c("Composants")]),_:1}),n(r,{href:"/configurateur"},{default:a(()=>[c("Configurateur")]),_:1}),n(r,{href:"/tutoriels"},{default:a(()=>[c("Tutoriels")]),_:1})])}const G=x(U,[["render",q]]),J={class:"relative"},K={__name:"Dropdown",props:{align:{type:String,default:"right"},width:{type:String,default:"48"},contentClasses:{type:Array,default:()=>["py-1","bg-white"]}},setup(t){const s=t;let e=B(!1);const m=r=>{e.value&&r.key==="Escape"&&(e.value=!1)};N(()=>document.addEventListener("keydown",m)),E(()=>document.removeEventListener("keydown",m));const h=w(()=>({48:"w-48"})[s.width.toString()]),f=w(()=>s.align==="left"?"origin-top-left left-0":s.align==="right"?"origin-top-right right-0":"origin-top");return(r,i)=>(l(),d("div",J,[o("div",{onClick:i[0]||(i[0]=_=>v(e)?e.value=!p(e):e=!p(e))},[g(r.$slots,"trigger")]),k(o("div",{class:"fixed inset-0 z-40",onClick:i[1]||(i[1]=_=>v(e)?e.value=!1:e=!1)},null,512),[[$,p(e)]]),n(z,{"enter-active-class":"transition ease-out duration-200","enter-from-class":"transform opacity-0 scale-95","enter-to-class":"transform opacity-100 scale-100","leave-active-class":"transition ease-in duration-75","leave-from-class":"transform opacity-100 scale-100","leave-to-class":"transform opacity-0 scale-95"},{default:a(()=>[k(o("div",{class:C(["absolute z-50 mt-2 rounded-md shadow-lg",[p(h),p(f)]]),style:{display:"none"},onClick:i[2]||(i[2]=_=>v(e)?e.value=!1:e=!1)},[o("div",{class:C(["rounded-md ring-1 ring-black ring-opacity-5",t.contentClasses])},[g(r.$slots,"content")],2)],2),[[$,p(e)]])]),_:3})]))}},Q={key:0,type:"submit",class:"block w-full px-4 py-2 text-sm leading-5 text-gray-700 text-left hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition"},W=["href"],X={__name:"DropdownLink",props:{href:String,as:String},setup(t){return(s,e)=>(l(),d("div",null,[t.as=="button"?(l(),d("button",Q,[g(s.$slots,"default")])):t.as=="a"?(l(),d("a",{key:1,href:t.href,class:"block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition"},[g(s.$slots,"default")],8,W)):(l(),H(p(y),{key:2,href:t.href,class:"block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition"},{default:a(()=>[g(s.$slots,"default")]),_:3},8,["href"]))]))}},Y={props:{canLogin:Boolean,canRegister:Boolean},methods:{logout(){P.Inertia.post(route("logout"))}},data(){return{showingNavigationDropdown:!1}},components:{logoComponent:O,NavbarComponent:G,Link:y,Head:T,Dropdown:K,DropdownLink:X}},Z={class:"relative flex items-top justify-center bg-gray-100 dark:bg-gray-900 sm:items-center sm:pt-0"},ee={class:"fixed top-0 right-0 px-0 sm:px-6 py-4"},te={key:0,class:"ml-3 mr-0 relative sm:block"},oe={class:"inline-flex rounded-md"},ne={type:"button",class:"inline-flex items-center m-0 px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition"},se=o("svg",{class:"ml-2 -mr-0.5 h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"},[o("path",{"fill-rule":"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z","clip-rule":"evenodd"})],-1),ae=o("div",{class:"border-t border-gray-100"},null,-1),re={key:1,class:"flex justify-center flex-col"},le={class:""},ie={class:"logoConnect"};function ce(t,s,e,m,h,f){const r=u("Head"),i=u("DropdownLink"),_=u("Dropdown"),b=u("Link"),L=u("logoComponent"),D=u("NavbarComponent");return l(),d(V,null,[n(r,{title:"Bienvenue"}),o("div",Z,[o("div",ee,[t.$page.props.user?(l(),d("div",te,[n(_,{align:"right",width:"48"},{trigger:a(()=>[o("span",oe,[o("button",ne,[c(j(t.$page.props.user.name)+" ",1),se])])]),content:a(()=>[n(i,{href:t.route("profile.show")},{default:a(()=>[c(" Votre profil ")]),_:1},8,["href"]),ae,o("form",{onSubmit:s[0]||(s[0]=A((...S)=>f.logout&&f.logout(...S),["prevent"]))},[n(i,{as:"button"},{default:a(()=>[c(" D\xE9connexion ")]),_:1})],32)]),_:1})])):(l(),d("div",re,[n(b,{href:t.route("login"),class:"text-xl px-3 m-3 text-center text-gray-700 dark:text-gray-500 bg-blue-400 rounded-full"},{default:a(()=>[c(" Se connecter ")]),_:1},8,["href"]),n(b,{href:t.route("register"),class:"text-xl px-3 m-3 text-center text-gray-700 dark:text-gray-500 bg-blue-400 rounded-full"},{default:a(()=>[c(" Cr\xE9er un compte ")]),_:1},8,["href"])]))]),o("div",le,[o("div",ie,[n(L,{msg:"Pc pas \xE0 pas"})]),n(D)])])],64)}const pe=x(Y,[["render",ce]]);export{pe as h};
