import{o as a,e as l,d as y,j as v,k as w,l as $,h as o,n as u,a as e,f as p,t as _,m as x,c as j,w as i,r as b,L as k,b as n,H as M,g as d,p as S}from"./app.86dbe63b.js";import{_ as B}from"./_plugin-vue_export-helper.cdc0426e.js";import{_ as f,a as C,b as g}from"./ResponsiveNavLink.d60622c4.js";const P={},L=["src"];function N(h,t){return a(),l("img",{src:"../img/PcpasaPas.png"},null,8,L)}const V=B(P,[["render",N],["__scopeId","data-v-0615f086"]]),z={class:"max-w-screen-xl mx-auto py-2 px-3 sm:px-6 lg:px-8"},A={class:"flex items-center justify-between flex-wrap"},D={class:"w-0 flex-1 flex items-center min-w-0"},H={key:0,class:"h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},I=e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"},null,-1),R=[I],T={key:1,class:"h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},E=e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"},null,-1),O=[E],q={class:"ml-3 font-medium text-sm text-white truncate"},F={class:"shrink-0 sm:ml-3"},G=e("svg",{class:"h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"})],-1),J=[G],K={__name:"Banner",setup(h){const t=y(!0),r=v(()=>{var c;return((c=w().props.value.jetstream.flash)==null?void 0:c.bannerStyle)||"success"}),s=v(()=>{var c;return((c=w().props.value.jetstream.flash)==null?void 0:c.banner)||""});return $(s,async()=>{t.value=!0}),(c,m)=>(a(),l("div",null,[t.value&&o(s)?(a(),l("div",{key:0,class:u({"bg-indigo-500":o(r)=="success","bg-red-700":o(r)=="danger"})},[e("div",z,[e("div",A,[e("div",D,[e("span",{class:u(["flex p-2 rounded-lg",{"bg-indigo-600":o(r)=="success","bg-red-600":o(r)=="danger"}])},[o(r)=="success"?(a(),l("svg",H,R)):p("",!0),o(r)=="danger"?(a(),l("svg",T,O)):p("",!0)],2),e("p",q,_(o(s)),1)]),e("div",F,[e("button",{type:"button",class:u(["-mr-1 flex p-2 rounded-md focus:outline-none sm:-mr-2 transition",{"hover:bg-indigo-600 focus:bg-indigo-600":o(r)=="success","hover:bg-red-600 focus:bg-red-600":o(r)=="danger"}]),"aria-label":"Dismiss",onClick:m[0]||(m[0]=x(je=>t.value=!1,["prevent"]))},J,2)])])])],2)):p("",!0)]))}},Q={__name:"NavLink",props:{href:String,active:Boolean},setup(h){const t=h,r=v(()=>t.active?"inline-flex items-center px-1 pt-1 border-b-2 border-indigo-400 text-sm font-medium leading-5 text-gray-900 focus:outline-none focus:border-indigo-700 transition":"inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition");return(s,c)=>(a(),j(o(k),{href:h.href,class:u(o(r))},{default:i(()=>[b(s.$slots,"default")]),_:3},8,["href","class"]))}},U={class:"min-h-screen bg-gray-100"},W={class:"bg-white border-b border-gray-100"},X={class:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"},Y={class:"flex justify-between h-16"},Z={class:"flex"},ee={class:"shrink-0 flex items-center"},se={class:"hidden space-x-8 sm:-my-px sm:ml-10 sm:flex"},te={class:"hidden sm:flex sm:items-center sm:ml-6"},oe=e("div",{class:"ml-3 relative"},null,-1),re={class:"ml-3 relative"},ne={key:0,class:"flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-gray-300 transition"},ae=["src","alt"],ie={key:1,class:"inline-flex rounded-md"},le={type:"button",class:"inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition"},ce=e("svg",{class:"ml-2 -mr-0.5 h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"},[e("path",{"fill-rule":"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z","clip-rule":"evenodd"})],-1),de=e("div",{class:"border-t border-gray-100"},null,-1),ue=["onSubmit"],he={class:"-mr-2 flex items-center"},pe={class:"h-6 w-6",stroke:"currentColor",fill:"none",viewBox:"0 0 24 24"},_e={class:"pt-2 pb-3 space-y-1"},me={class:"pt-4 pb-1 border-t border-gray-200"},fe={class:"flex items-center px-4"},ge={key:0,class:"shrink-0 mr-3"},ve=["src","alt"],xe={class:"font-medium text-base text-gray-800"},be={class:"font-medium text-sm text-gray-500"},we={class:"mt-3 space-y-1"},ye=["onSubmit"],ke={key:0,class:"bg-white shadow"},$e={class:"max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8"},Ce={__name:"AppLayout",props:{title:{type:String,default:""}},setup(h){const t=y(!1),r=()=>{S.Inertia.post(route("logout"))};return(s,c)=>(a(),l("div",null,[n(o(M),{title:"Votre profil"}),n(K),e("div",U,[e("nav",W,[e("div",X,[e("div",Y,[e("div",Z,[e("div",ee,[n(o(k),{href:s.route("accueil")},{default:i(()=>[n(V,{class:"block h-9 w-auto"})]),_:1},8,["href"])]),e("div",se,[n(Q,{href:s.route("accueil"),active:s.route().current("accueil")},{default:i(()=>[d(" Accueil ")]),_:1},8,["href","active"])])]),e("div",te,[oe,e("div",re,[n(C,{align:"right",width:"48"},{trigger:i(()=>[s.$page.props.jetstream.managesProfilePhotos?(a(),l("button",ne,[e("img",{class:"h-8 w-8 rounded-full object-cover",src:s.$page.props.user.profile_photo_url,alt:s.$page.props.user.name},null,8,ae)])):(a(),l("span",ie,[e("button",le,[d(_(s.$page.props.user.name)+" ",1),ce])]))]),content:i(()=>[n(f,{href:s.route("accueil")},{default:i(()=>[d(" Revenir \xE0 l'accueil du site ")]),_:1},8,["href"]),n(f,{href:s.route("profile.show")},{default:i(()=>[d(" Profil ")]),_:1},8,["href"]),de,e("form",{onSubmit:x(r,["prevent"])},[n(f,{as:"button"},{default:i(()=>[d(" Se d\xE9connecter ")]),_:1})],40,ue)]),_:1})])]),e("div",he,[e("button",{class:"inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition",onClick:c[0]||(c[0]=m=>t.value=!t.value)},[(a(),l("svg",pe,[e("path",{class:u({hidden:t.value,"inline-flex":!t.value}),"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h16"},null,2),e("path",{class:u({hidden:!t.value,"inline-flex":t.value}),"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"},null,2)]))])])])]),e("div",{class:u([{block:t.value,hidden:!t.value},"sm:hidden"])},[e("div",_e,[n(g,{href:s.route("accueil"),active:s.route().current("accueil")},{default:i(()=>[d(" Revenir \xE0 l'accueil ")]),_:1},8,["href","active"])]),e("div",me,[e("div",fe,[s.$page.props.jetstream.managesProfilePhotos?(a(),l("div",ge,[e("img",{class:"h-10 w-10 rounded-full object-cover",src:s.$page.props.user.profile_photo_url,alt:s.$page.props.user.name},null,8,ve)])):p("",!0),e("div",null,[e("div",xe,_(s.$page.props.user.name),1),e("div",be,_(s.$page.props.user.email),1)])]),e("div",we,[n(g,{href:s.route("profile.show"),active:s.route().current("profile.show")},{default:i(()=>[d(" Profil ")]),_:1},8,["href","active"]),e("form",{method:"POST",onSubmit:x(r,["prevent"])},[n(g,{as:"button"},{default:i(()=>[d(" Se d\xE9connecter ")]),_:1})],40,ye)])])],2)]),s.$slots.header?(a(),l("header",ke,[e("div",$e,[b(s.$slots,"header")])])):p("",!0),e("main",null,[b(s.$slots,"default")])])]))}};export{Ce as _};