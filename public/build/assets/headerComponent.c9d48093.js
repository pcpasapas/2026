import{o as n,e as a,D as C,E as L,a as s,L as v,C as i,b as o,w as t,g as r,p as D,H as B,t as N,c as g,f as u,m as P,F as h}from"./app.66e50156.js";import{_ as m}from"./_plugin-vue_export-helper.cdc0426e.js";import{a as I,_ as S}from"./DropdownLink.8a7947e5.js";const V="/build/assets/PcPasaPas.9c332fcf.png";const j={},A=e=>(C("data-v-f06e73fe"),e=e(),L(),e),H={class:""},F=A(()=>s("img",{src:V},null,-1)),T=[F];function E(e,l){return n(),a("div",H,T)}const M=m(j,[["render",E],["__scopeId","data-v-f06e73fe"]]);const R={components:{Link:v}};function z(e,l,d,y,k,p){const c=i("Link");return n(),a("nav",null,[o(c,{href:"/"},{default:t(()=>[r("Accueil")]),_:1}),o(c,{href:"/configurateur"},{default:t(()=>[r("Configurateur ")]),_:1}),o(c,{href:"/tutos"},{default:t(()=>[r("Tutoriels")]),_:1}),o(c,{href:"/alims"},{default:t(()=>[r("Api")]),_:1})])}const W=m(R,[["render",z]]),q={props:{canLogin:Boolean,canRegister:Boolean},methods:{logout(){D.Inertia.post(route("logout"))}},components:{logoComponent:M,NavbarComponent:W,Link:v,Head:B,Dropdown:I,DropdownLink:S}},G={class:"relative flex items-top justify-center bg-gray-100 dark:bg-gray-900 sm:items-center sm:pt-0"},J={key:0,class:"hidden fixed top-0 right-0 px-6 py-4 sm:block"},K={key:0,class:"ml-3 relative"},O={key:0,class:"flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-gray-300 transition"},Q=["src","alt"],U={key:1,class:"inline-flex rounded-md"},X={type:"button",class:"inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition"},Y=s("svg",{class:"ml-2 -mr-0.5 h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"},[s("path",{"fill-rule":"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z","clip-rule":"evenodd"})],-1),Z=s("div",{class:"border-t border-gray-100"},null,-1),ee={class:""},oe={class:"logoConnect"};function te(e,l,d,y,k,p){const c=i("Head"),_=i("DropdownLink"),b=i("Dropdown"),f=i("Link"),w=i("logoComponent"),x=i("NavbarComponent");return n(),a(h,null,[o(c,{title:"Welcome"}),s("div",G,[d.canLogin?(n(),a("div",J,[e.$page.props.user?(n(),a("div",K,[o(b,{align:"right",width:"48"},{trigger:t(()=>[e.$page.props.jetstream.managesProfilePhotos?(n(),a("button",O,[s("img",{class:"h-8 w-8 rounded-full object-cover",src:e.$page.props.user.profile_photo_url,alt:e.$page.props.user.name},null,8,Q)])):(n(),a("span",U,[s("button",X,[r(N(e.$page.props.user.name)+" ",1),Y])]))]),content:t(()=>[o(_,{href:e.route("profile.show")},{default:t(()=>[r(" Votre profil ")]),_:1},8,["href"]),e.$page.props.jetstream.hasApiFeatures?(n(),g(_,{key:0,href:e.route("api-tokens.index")},{default:t(()=>[r(" API Tokens ")]),_:1},8,["href"])):u("",!0),Z,s("form",{onSubmit:l[0]||(l[0]=P((...$)=>p.logout&&p.logout(...$),["prevent"]))},[o(_,{as:"button"},{default:t(()=>[r(" D\xE9connexion ")]),_:1})],32)]),_:1})])):(n(),a(h,{key:1},[o(f,{href:e.route("login"),class:"text-sm text-gray-700 dark:text-gray-500 underline"},{default:t(()=>[r("Se connecter")]),_:1},8,["href"]),d.canRegister?(n(),g(f,{key:0,href:e.route("register"),class:"ml-4 text-sm text-gray-700 dark:text-gray-500 underline"},{default:t(()=>[r("Cr\xE9er un compte")]),_:1},8,["href"])):u("",!0)],64))])):u("",!0),s("div",ee,[s("div",oe,[o(w,{msg:"Pc pas \xE0 pas"})]),o(x)])])],64)}const ae=m(q,[["render",te]]);export{ae as h};
