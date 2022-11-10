import{h as he}from"./headerComponent.e92c3123.js";import{E as Y,G as fe,I as E,e as q,k as pe,J as Z,K as ge,x as T,M as K,N as Ce,m as Ie,C as we,O as Me,p as Se,o as r,c as o,f as m,t as f,a as n,P as O,F as N,i as z,Q as $,R as ee,l as ke,L as Pe,S as ye,A as j,b as G,w as U}from"./app.3b54a30a.js";import{_ as V}from"./_plugin-vue_export-helper.cdc0426e.js";/*!
  * pinia v2.0.23
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */let te;const J=e=>te=e,xe=Symbol();function L(e){return e&&typeof e=="object"&&Object.prototype.toString.call(e)==="[object Object]"&&typeof e.toJSON!="function"}var F;(function(e){e.direct="direct",e.patchObject="patch object",e.patchFunction="patch function"})(F||(F={}));const ie=()=>{};function H(e,i,t,s=ie){e.push(i);const a=()=>{const c=e.indexOf(i);c>-1&&(e.splice(c,1),s())};return!t&&Y()&&Ie(a),a}function A(e,...i){e.slice().forEach(t=>{t(...i)})}function X(e,i){e instanceof Map&&i instanceof Map&&i.forEach((t,s)=>e.set(s,t)),e instanceof Set&&i instanceof Set&&i.forEach(e.add,e);for(const t in i){if(!i.hasOwnProperty(t))continue;const s=i[t],a=e[t];L(a)&&L(s)&&e.hasOwnProperty(t)&&!T(s)&&!K(s)?e[t]=X(a,s):e[t]=s}return e}const Ae=Symbol();function De(e){return!L(e)||!e.hasOwnProperty(Ae)}const{assign:P}=Object;function be(e){return!!(T(e)&&e.effect)}function Be(e,i,t,s){const{state:a,actions:c,getters:l}=i,h=t.state.value[e];let I;function p(){h||(t.state.value[e]=a?a():{});const w=Me(t.state.value[e]);return P(w,c,Object.keys(l||{}).reduce((u,g)=>(u[g]=E(Se(()=>{J(t);const y=t._s.get(e);return l[g].call(y,y)})),u),{}))}return I=se(e,p,i,t,s,!0),I.$reset=function(){const u=a?a():{};this.$patch(g=>{P(g,u)})},I}function se(e,i,t={},s,a,c){let l;const h=P({actions:{}},t),I={deep:!0};let p,w,u=E([]),g=E([]),y;const x=s.state.value[e];!c&&!x&&(s.state.value[e]={}),q({});let W;function Q(_){let d;p=w=!1,typeof _=="function"?(_(s.state.value[e]),d={type:F.patchFunction,storeId:e,events:y}):(X(s.state.value[e],_),d={type:F.patchObject,payload:_,storeId:e,events:y});const k=W=Symbol();we().then(()=>{W===k&&(p=!0)}),w=!0,A(u,d,s.state.value[e])}const ce=ie;function le(){l.stop(),u=[],g=[],s._s.delete(e)}function ue(_,d){return function(){J(s);const k=Array.from(arguments),B=[],v=[];function me(C){B.push(C)}function _e(C){v.push(C)}A(g,{args:k,name:_,store:M,after:me,onError:_e});let R;try{R=d.apply(this&&this.$id===e?this:M,k)}catch(C){throw A(v,C),C}return R instanceof Promise?R.then(C=>(A(B,C),C)).catch(C=>(A(v,C),Promise.reject(C))):(A(B,R),R)}}const de={_p:s,$id:e,$onAction:H.bind(null,g),$patch:Q,$reset:ce,$subscribe(_,d={}){const k=H(u,_,d.detached,()=>B()),B=l.run(()=>pe(()=>s.state.value[e],v=>{(d.flush==="sync"?w:p)&&_({storeId:e,type:F.direct,events:y},v)},P({},I,d)));return k},$dispose:le},M=Z(de);s._s.set(e,M);const b=s._e.run(()=>(l=ge(),l.run(()=>i())));for(const _ in b){const d=b[_];if(T(d)&&!be(d)||K(d))c||(x&&De(d)&&(T(d)?d.value=x[_]:X(d,x[_])),s.state.value[e][_]=d);else if(typeof d=="function"){const k=ue(_,d);b[_]=k,h.actions[_]=d}}return P(M,b),P(Ce(M),b),Object.defineProperty(M,"$state",{get:()=>s.state.value[e],set:_=>{Q(d=>{P(d,_)})}}),s._p.forEach(_=>{P(M,l.run(()=>_({store:M,app:s._a,pinia:s,options:h})))}),x&&c&&t.hydrate&&t.hydrate(M.$state,x),p=!0,w=!0,M}function S(e,i,t){let s,a;const c=typeof i=="function";typeof e=="string"?(s=e,a=c?t:i):(a=e,s=e.id);function l(h,I){const p=Y();return h=h||p&&fe(xe),h&&J(h),h=te,h._s.has(s)||(c?se(s,i,a,h):Be(s,a,h)),h._s.get(s)}return l.$id=s,l}const ve=S("boitiers",{state:()=>({boitiers:[{id:1,marque:"MARS GAMING",name:"MC-U3 Noir",prix:58.31,taille:"43.3 x 19.1 x 36.7 cm",img:!0,lien:"https://www.amazon.fr/dp/B0B7S7PGVZ/ref=sspa_dk_detail_5?psc=1&pd_rd_i=B0B7S7PGVZ&pd_rd_w=1qWZo&content-id=amzn1.sym.844c282f-78f1-4549-b53e-9efd648da0e0&pf_rd_p=844c282f-78f1-4549-b53e-9efd648da0e0&pf_rd_r=7YGWWT81QGFFW2PHPRMX&pd_rd_wg=qoZND&pd_rd_r=f7da6bda-d5cc-4c43-9e27-f12542c7f060&s=computers&sp_csd=d2lkZ2V0TmFtZT1zcF9kZXRhaWw"},{id:2,marque:"EMPIRE GAMING",name:"Gamer WareFare Noir",taille:"42 x 19 x 45 cm",img:!0,prix:63.99,lien:"https://www.amazon.fr/EMPIRE-GAMING-WareFare-Ventilateurs-Transparente/dp/B071JYDDPW/ref=psdc_430338031_t3_B07ZRXPKXY?th=1"},{id:4,marque:"EMPIRE GAMING",name:"Gamer Spartan",taille:"38.6 x 20.4 x 44.6 cm",img:!0,prix:69.99,lien:"https://www.amazon.fr/dp/B07ZRX8CNB/ref=emc_b_5_i"},{id:3,marque:"EMPIRE GAMING",taille:"38.7 x 20.8 x 44.8 cm",name:"Gamer Diamond",img:!0,prix:79.99,lien:"https://www.amazon.fr/EMPIRE-GAMING-Plexiglas-Ventilateurs-Adressables/dp/B07ZRXPKXY/ref=sr_1_3?__mk_fr_FR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&keywords=boitier%2Bpc%2Batx&qid=1665992178&qu=eyJxc2MiOiI3Ljk5IiwicXNhIjoiNy4yNiIsInFzcCI6IjYuNjkifQ%3D%3D&s=computers&sr=1-3&th=1"}]}),getters:{getAllBoitiers:e=>e.boitiers,getOneBoitier:e=>i=>e.boitiers.find(t=>t.id===i)}}),Re=S("alims",{state:()=>({alims:[{id:1,name:"Mars Gaming MPIII550",prix:28.9,puissance:"550 W",img:!0,lien:"https://www.amazon.fr/MPIII550-Alimentation-Technologie-Silencieuse-Efficacit%C3%A9/dp/B0B38TPM5H/ref=sr_1_4?__mk_fr_FR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&keywords=alimentation+pc&qid=1666012725&qu=eyJxc2MiOiI2LjU0IiwicXNhIjoiNi4wMyIsInFzcCI6IjUuODEifQ%3D%3D&s=computers&sr=1-4"},{id:2,name:"Mars Gaming MPII650",prix:41.99,puissance:"650 W",img:!0,lien:"https://www.amazon.fr/dp/B01C41OGZC/ref=sspa_dk_detail_0?psc=1&pd_rd_i=B01C41OGZC&pd_rd_w=SSvXM&content-id=amzn1.sym.46f3bd26-124e-4785-b190-ff05ba326c3e&pf_rd_p=46f3bd26-124e-4785-b190-ff05ba326c3e&pf_rd_r=E4E2ZZKEJC9WYVV143KJ&pd_rd_wg=PZgnO&pd_rd_r=a1e8c968-c056-4df9-8cdd-4f63f348ad92&s=computers&sp_csd=d2lkZ2V0TmFtZT1zcF9kZXRhaWxfdGhlbWF0aWM&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEzVDNYOUlJWjJXVEJaJmVuY3J5cHRlZElkPUEwOTUwMzI5Mjk4SE1YNTZSTkdETSZlbmNyeXB0ZWRBZElkPUEwMDYxODU1S1AwV1o4T1BOMlRFJndpZGdldE5hbWU9c3BfZGV0YWlsX3RoZW1hdGljJmFjdGlvbj1jbGlja1JlZGlyZWN0JmRvTm90TG9nQ2xpY2s9dHJ1ZQ=="}]}),getters:{getAllAlims:e=>e.alims,getOneAlim:e=>i=>e.alims.find(t=>t.id===i)}}),ne=S("carteMere",{state:()=>({carteMere:[{id:2,name:"MSI A320M-A PRO",prix:44.95,socket:"AM4",ddr:"DDR 4",img:!0,lien:"https://www.ldlc.com/fiche/PB00277939.html"},{id:1,name:"GIGABYTE GA-A320M-S2H",prix:62.89,socket:"AM4",ddr:"DDR 4",img:!0,lien:"https://www.amazon.fr/Giga-Byte-Ga-a320-m-s2h-Am4-A320-mATX-U3-1-SATA-DDR4/dp/B078KBKFZ6/ref=sr_1_4?__mk_fr_FR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&keywords=carte+mere+am4&qid=1665997932&qu=eyJxc2MiOiI1LjgxIiwicXNhIjoiNS4zMyIsInFzcCI6IjQuOTEifQ%3D%3D&s=computers&sr=1-4"},{id:3,name:"Gigabyte H410M S2H V3",prix:74.95,socket:"1200",ddr:"DDR 4",img:!0,lien:"https://www.ldlc.com/fiche/PB00465454.html"}]}),getters:{getAllCarteMeres:e=>e.carteMere,getOneCarteMere:e=>i=>e.carteMere.find(t=>t.id===i),getAllCarteMeresSocket:e=>{console.log("test");const i=D().getAllPanier[2].choisi;if(i!==0){let s=re().getAllProcesseurs.filter(a=>a.id===i)[0].socket;return e.carteMere.filter(a=>a.socket===s)}else return e.carteMere}}}),re=S("processeurs",{state:()=>({processeurs:[{id:2,name:"AMD Ryzen 3 4100 Wraith Stealth",prix:119.95,socket:"AM4",puissanceMini:3.8,puissanceBoost:4,img:!0,lien:"https://www.ldlc.com/fiche/PB00497776.html"},{id:1,name:"AMD Ryzen 5 4500 avec Ventilateur Wraith Stealth",prix:116.64,socket:"AM4",puissanceMini:3.6,puissanceBoost:4.1,img:!0,lien:"https://www.amazon.fr/AMD-Ryzen-4500-Ventilateur-Stealth/dp/B09VCJN7HZ/ref=sr_1_14?__mk_fr_FR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&keywords=processeur&qid=1665997123&qu=eyJxc2MiOiI2LjUyIiwicXNhIjoiNS40NyIsInFzcCI6IjUuMzUifQ%3D%3D&refinements=p_36%3A428409031&rnid=428393031&s=computers&sr=1-14"},{id:3,name:"Intel Core i3-10105F",prix:103.96,socket:"1200",puissanceMini:3.7,puissanceBoost:4.4,img:!0,lien:"https://www.ldlc.com/fiche/PB00437078.html"},{id:4,name:"AMD RYZEN7 2700X",prix:291.38,socket:"AM4",puissanceMini:3.7,puissanceBoost:4.35,img:!0,lien:"https://www.amazon.fr/AMD-YD270XBGAFBOX-Processeur-RYZEN7-4-35Ghz/dp/B07B428M7F"}]}),getters:{getAllProcesseurs:e=>e.processeurs,getOneProcesseur:e=>i=>e.processeurs.find(t=>t.id===i),getAllProcesseursSocket:e=>{const i=D().getAllPanier[3].choisi;if(i!==0){let s=ne().getAllCarteMeres.filter(a=>a.id===i)[0].socket;return e.processeurs.filter(a=>a.socket===s)}else return e.processeurs}}}),je=S("ram",{state:()=>({ram:[{id:2,name:"Corsair Vengeance LPX 16Go (1x16Go)",prix:65.88,taille:"16 GB",img:!0,lien:"https://www.amazon.fr/Corsair-Vengeance-2666MHz-M%C3%A9moire-Performance/dp/B019HVO62A/ref=sr_1_14?__mk_fr_FR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&keywords=ddr4+16go&qid=1666011414&qu=eyJxc2MiOiI1Ljc1IiwicXNhIjoiNS4wNSIsInFzcCI6IjQuOTYifQ%3D%3D&refinements=p_n_feature_twelve_browse-bin%3A11415997031&rnid=188176031&s=computers&sr=1-14"},{id:1,name:"Corsair Vengeance LPX 32GB (2x16GB)",prix:122.14,taille:"32 GB",img:!0,lien:"https://www.amazon.fr/Corsair-Vengeance-32GB-2x16GB-3200MHz/dp/B07RW6Z692/ref=sr_1_4?__mk_fr_FR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&keywords=dd4+16go&qid=1666010912&qu=eyJxc2MiOiIzLjA4IiwicXNhIjoiMi40MyIsInFzcCI6IjAuMDAifQ%3D%3D&s=computers&sr=1-4"}]}),getters:{getAllRam:e=>e.ram,getOneRam:e=>i=>e.ram.find(t=>t.id===i)}}),Ge=S("cartegraphique",{state:()=>({cartegraphique:[{id:1,name:"MAXSUN AMD Radeon RX 550",prix:149.99,memoire:"4 go",puissance:"1071 Mhz",img:!0,lien:"https://www.amazon.fr/Graphiques-RX-550-Graphique-DisplayPort/dp/B09SKZSDRT/ref=sr_1_12?__mk_fr_FR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&keywords=carte+graphique&qid=1665998342&qu=eyJxc2MiOiI4Ljg0IiwicXNhIjoiNy42MSIsInFzcCI6IjYuOTgifQ%3D%3D&refinements=p_36%3A428409031&rnid=428393031&s=computers&sr=1-12"},{id:2,name:"MSI RX 6500 XT Radeon",prix:174.87,memoire:"4 go",puissance:"2685 Mhz",img:!0,lien:"https://www.amazon.fr/MSI-6500-Radeon-Mech-V508-003R/dp/B09R1RVN3R/ref=sr_1_10?__mk_fr_FR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&keywords=rx+5700&qid=1666014009&qu=eyJxc2MiOiI1LjQ2IiwicXNhIjoiNC4zNiIsInFzcCI6IjIuNzMifQ%3D%3D&s=computers&sr=1-10"},{id:3,name:"ASUS TUF GAMING NVIDIA GeForce GTX 1660",prix:290,memoire:"6 go",puissance:"1815 Mhz",img:!0,lien:"https://www.amazon.fr/ASUS-Gaming-GeForce-Graphique-NVIDIA/dp/B09C8YJZH5/ref=sr_1_15?__mk_fr_FR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&keywords=gtx+1070&qid=1666014227&qu=eyJxc2MiOiI1LjExIiwicXNhIjoiNS4wNCIsInFzcCI6IjIuNjQifQ%3D%3D&s=computers&sr=1-15"}]}),getters:{getAllCartegraphiques:e=>e.cartegraphique,getOnecarteGraphique:e=>i=>e.cartegraphique.find(t=>t.id===i)}}),Ne=S("ssd",{state:()=>({ssd:[{id:1,name:"Kingston A400 SSD SSD Interne 2.5",prix:25.9,taille:"240 gb",img:!0,lien:"https://www.amazon.fr/Kingston-SSD-A400-240GB-Disque-SATA/dp/B01N5IB20Q/ref=sr_1_3?__mk_fr_FR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&keywords=ssd&qid=1666010044&qu=eyJxc2MiOiI2LjI1IiwicXNhIjoiNS40MyIsInFzcCI6IjQuOTgifQ%3D%3D&s=computers&sr=1-3"},{id:2,name:"Kingston A400 SSD SSD Interne 2.5",prix:40.19,taille:"480 gb",img:!0,lien:"https://www.amazon.fr/Kingston-SSD-A400-480GB-Disque-SATA/dp/B01N5IB20Q/ref=sr_1_3?__mk_fr_FR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&keywords=ssd&qid=1666010044&qu=eyJxc2MiOiI2LjI1IiwicXNhIjoiNS40MyIsInFzcCI6IjQuOTgifQ%3D%3D&s=computers&sr=1-3"},{id:3,name:"Kingston A400 SSD SSD Interne 2.5",prix:81,taille:"960 gb",img:!0,lien:"https://www.amazon.fr/Kingston-SSD-A400-960GB-Disque-SATA/dp/B01N5IB20Q/ref=sr_1_3?__mk_fr_FR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&keywords=ssd&qid=1666010044&qu=eyJxc2MiOiI2LjI1IiwicXNhIjoiNS40MyIsInFzcCI6IjQuOTgifQ%3D%3D&s=computers&sr=1-3"}]}),getters:{getAllSsd:e=>e.ssd,getOneSsd:e=>i=>e.ssd.find(t=>t.id===i)}}),Fe=S("hdd",{state:()=>({hdd:[{id:1,name:"Western Digital WD Blue Desktop 1 To",prix:48.95,taille:"1 To",img:!0,lien:"https://www.ldlc.com/fiche/PB00134121.html"}]}),getters:{getAllHdd:e=>e.hdd,getOneHdd:e=>i=>e.hdd.find(t=>t.id===i)}}),D=S("panier",{state:()=>({panier:[{id:0,title:"Boitier",prog:"boitiers",choisi:0,article:{}},{id:1,title:"Alimentation",prog:"alim",choisi:0,article:{}},{id:2,title:"Processeur",prog:"processeur",choisi:0,article:{}},{id:3,title:"Carte M\xE8re",prog:"carteMere",choisi:0,article:{}},{id:4,title:"Ram",prog:"ram",choisi:0,article:{}},{id:5,title:"Carte Graphique",prog:"carteGraphique",article:{},choisi:0},{id:6,title:"SSD",prog:"ssd",choisi:0,article:{}},{id:7,title:"Disque Dur Hdd",prog:"hdd",article:{},choisi:0}]}),getters:{getAllPanier:e=>e.panier,getOnePanier:e=>i=>e.panier.find(t=>t.id===i)},actions:{modifStorePanier(e,i){if(isNaN(e)?(e=[e],e=e[0]):(e=Array.from(String(e),Number),i=Array.from(String(i),Number)),i=[i],i=i[0],i===0)this.panier[e].choisi=i,this.panier[e].article={};else for(let t=0;t<e.length;t++)e[t]===0?this.panier[0].article=ve().getOneBoitier(i[t]):e[t]===1?this.panier[1].article=Re().getOneAlim(i[t]):e[t]===2?this.panier[2].article=re().getOneProcesseur(i[t]):e[t]===3?this.panier[3].article=ne().getOneCarteMere(i[t]):e[t]===4?this.panier[4].article=je().getOneRam(i[t]):e[t]===5?this.panier[5].article=Ge().getOnecarteGraphique(i[t]):e[t]===6?this.panier[6].article=Ne().getOneSsd(i[t]):e[t]===7&&(this.panier[7].article=Fe().getOneHdd(i[t])),this.panier[e[t]].choisi=i[t]}}});const Oe={props:["composant","categorie"],methods:{toggleAgrandir(){}}},ze={key:0,class:"gamer"},qe={key:1},Te={key:2},Ee={key:3},Le={key:4},Xe={key:5},Ze={key:6},Ve={key:7},Je={key:8},We={key:9},Qe={class:"prixImage"},Ue=["src"],He=["src"],Ye={class:"prix"};function Ke(e,i,t,s,a,c){return r(),o("div",{class:"composant",onClick:i[0]||(i[0]=(...l)=>c.toggleAgrandir&&c.toggleAgrandir(...l))},[t.composant.gamer==!0?(r(),o("h3",ze," GAMER ")):m("",!0),t.composant.marque!==void 0?(r(),o("h3",qe,f(t.composant.marque),1)):m("",!0),n("h3",null,f(t.composant.name),1),t.composant.socket!==void 0?(r(),o("h4",Te," Socket : "+f(t.composant.socket),1)):m("",!0),t.composant.puissanceMini?(r(),o("h4",Ee," Puissance mini : "+f(t.composant.puissanceMini)+" Ghz ",1)):m("",!0),t.composant.puissanceBoost?(r(),o("h4",Le," Puissance boost\xE9e : "+f(t.composant.puissanceBoost)+" Ghz ",1)):m("",!0),t.composant.puissance!==void 0?(r(),o("h4",Xe," Puissance : "+f(t.composant.puissance),1)):m("",!0),t.composant.memoire!==void 0?(r(),o("h4",Ze," M\xE9moire : "+f(t.composant.memoire),1)):m("",!0),t.composant.taille_text!==void 0?(r(),o("h4",Ve,f(t.composant.taille_text),1)):m("",!0),t.composant.format_cm!==""?(r(),o("h4",Je," Carte m\xE8re : "+f(t.composant.format_cm),1)):m("",!0),t.composant.taille!==void 0?(r(),o("h4",We," Taille : "+f(t.composant.taille),1)):m("",!0),n("div",Qe,[this.categorie.prog!==void 0?(r(),o("img",{key:0,src:"/img/"+t.categorie.prog+"/"+t.composant.id+".jpg"},null,8,Ue)):m("",!0),this.categorie.prog===void 0?(r(),o("img",{key:1,src:"/img/"+t.categorie+"/"+t.composant.id+".jpg"},null,8,He)):m("",!0),n("p",Ye,f((t.composant.prix/100).toFixed(2))+" \u20AC",1)])])}const $e=V(Oe,[["render",Ke],["__scopeId","data-v-d5468aca"]]);const et={props:["panier","loading"],emits:["composantRetirePanier","reset"],setup(e){let i=q(e.loading);return{Panier:Z(e.panier),Loading:i}},data(){return{produitsPanier:this.produitspanier,prixTotalPanier:0}},computed:{fnPrixTotalPanier(){if(this.Loading=!0,this.prixTotalPanier=0,console.log(this.Panier.value),this.Panier.value!==void 0&&this.Panier.value!==null)for(let e=0;e<this.Panier.value.length;e++)this.Panier.value[e]!==null&&this.Panier.value[e]!==""&&(this.prixTotalPanier+=this.Panier.value[e].prix/100),this.Loading=!1;return this.Loading=!1,this.prixTotalPanier.toFixed(2)}},mounted(){},methods:{async retirerproduit(e){await O.put("/panier/1",{categorie:e,undefined:void 0}).then(i=>{this.Panier.value=i.data,this.fnPrixTotalPanier}).catch(i=>console.log(i))},resetPanier(){this.Panier.$reset(),this.fnPrixTotalPanier,this.$emit("reset")}}},oe=e=>($("data-v-3991b1ae"),e=e(),ee(),e),tt={key:0,class:"panier"},it=oe(()=>n("p",{class:"selection"},"Votre s\xE9lection",-1)),st={key:0},nt={key:0},rt={key:0,class:"composant"},ot={class:"col1"},at=["src"],ct={class:"col2"},lt={class:"col3"},ut={class:"col4"},dt=["onClick"],mt={key:0,class:"prixTotal"},_t=oe(()=>n("td",null,"Prix total",-1));function ht(e,i,t,s,a,c){return c.fnPrixTotalPanier!=0?(r(),o("div",tt,[it,s.Loading?m("",!0):(r(),o("div",st,[this.Panier.value!==""?(r(),o("div",nt,[(r(!0),o(N,null,z(s.Panier.value,(l,h)=>(r(),o("div",{key:h},[l!==""&&l!==null?(r(),o("div",rt,[n("tbody",null,[n("tr",null,[n("td",ot,[n("img",{src:"/img/"+l.categorie.prog+"/"+l.id+".jpg"},null,8,at)]),n("td",ct,[n("p",null,f(l.name),1)]),n("td",lt,f(l.prix/100)+" \u20AC",1),n("td",ut,[n("button",{onClick:I=>c.retirerproduit(l.categorie.progBDD)}," X ",8,dt)])])])])):m("",!0)]))),128)),c.fnPrixTotalPanier!==0?(r(),o("div",mt,[n("tr",null,[_t,n("td",null,f(c.fnPrixTotalPanier)+" \u20AC",1)]),n("tr",null,[n("button",{class:"reset",onClick:i[0]||(i[0]=l=>c.resetPanier())}," Reset ")])])):m("",!0)])):m("",!0)]))])):m("",!0)}const ft=V(et,[["render",ht],["__scopeId","data-v-3991b1ae"]]);const pt={props:["canLogin","canRegister","alimentations","categories","games","composants","categorieChoisi"],data(){return{bouton:"+",versionTable:0,jeu:!1,enFctComposants:!1,composantsAffiches:{}}},setup(){let e=Z({}),i=q(),t=q("");const s=ke(async()=>{await O.get("/panier").then(c=>{e.value=c.data,console.log(e),i.value=!1})});return{panierReact:e,mounted:s,ajoutPanier:async(c,l,h,I)=>{await O.put("/panier/1",{categorie:c,composant:l,categorieProg:h,modelBDD:I}).then(p=>(e.value=p.data,t.value="",e)).catch(p=>console.log(p))},loading:i,categorieChoisie:t}},methods:{composantRetirePanier(){this.enFctComposants=!0},reset(){this.versionTable++,this.panierDetail=D().getAllPanier,this.categorieChoisie="",this.enFctComposants=!1,this.jeu=!1},updateTable(){this.panierDetail=D().getAllPanier,this.versionTable++,this.categorieChoisie=""},panierGtaV(){D().modifStorePanier([0,1,2,3,4,5,6],[1,1,3,3,2,1,1]),this.updateTable()},panierFlight(){D().modifStorePanier([0,1,2,3,4,5,6],[1,1,4,3,2,1,1]),this.updateTable()},composantsAffiche(e){console.log(e),O.get(`/configurateur/composants/choix/${e}`).then(i=>{console.log(i),this.composantsAffiches=i.data.composants,this.categorieChoisie=i.data.categorieChoisi,console.table(this.categorieChoisie)})}},components:{headerComponent:he,panierComponent:ft,composantCard:$e,Link:Pe,InertiaLink:ye}},ae=e=>($("data-v-e5d0bac3"),e=e(),ee(),e),gt=ae(()=>n("li",{class:"liMenuCategorie"},[n("span",null,"Choix d'une configuration en fonction d'un jeu")],-1)),Ct={key:0},It=ae(()=>n("li",{class:"liMenuCategorie"},[n("span",null," Choix d'une configuration en fonction des composants ")],-1)),wt={key:1},Mt={key:2},St={key:0},kt=["onClick"],Pt={class:"liCategorie"},yt={key:0,class:"ulComposant"},xt={class:"composantBoutons"},At={class:"boutonsComposant"},Dt=["href"],bt=["onClick"];function Bt(e,i,t,s,a,c){const l=j("headerComponent"),h=j("panierComponent"),I=j("Link"),p=j("InertiaLink"),w=j("composant-card");return r(),o(N,null,[G(l,{canLogin:t.canLogin,canRegister:t.canRegister},null,8,["canLogin","canRegister"]),G(h,{onReset:c.reset,onUpdateTable:c.updateTable,onComposantRetirePanier:c.composantRetirePanier,panier:s.panierReact,loading:s.loading},null,8,["onReset","onUpdateTable","onComposantRetirePanier","panier","loading"]),n("div",null,[n("ul",null,[G(I,{href:"/configurateur/jeux"},{default:U(()=>[gt]),_:1})])]),t.games!==null?(r(),o("div",Ct,[n("ul",null,[(r(!0),o(N,null,z(t.games,u=>(r(),o("button",{key:u.id,class:"jeu"},f(u.name),1))),128))])])):m("",!0),n("div",null,[n("ul",null,[G(p,{href:"/configurateur/composants"},{default:U(()=>[It]),_:1})])]),t.categories!==null?(r(),o("div",wt)):m("",!0),s.loading===!1?(r(),o("div",Mt,[(r(!0),o(N,null,z(t.categories,u=>(r(),o("ul",{class:"ulCategorie",key:u.id},[s.panierReact.value[u.id-1]===void 0||s.panierReact.value[u.id-1]===null||s.panierReact.value[u.id-1]===""?(r(),o("div",St,[(r(),o("a",{key:u.prog,onClick:g=>c.composantsAffiche(u.prog)},[n("li",Pt,[n("span",null,f(u.name),1),n("p",null,f(s.panierReact.value[u.id-1]),1)])],8,kt)),u.prog===s.categorieChoisie?(r(),o("ul",yt,[(r(!0),o(N,null,z(a.composantsAffiches,g=>(r(),o("li",{class:"composant",key:g.id},[n("div",xt,[G(w,{composant:g,categorie:u},null,8,["composant","categorie"]),n("div",At,[n("a",{class:"choisir",href:g.lien,target:"_blank"},"\u{1F50D} ",8,Dt),n("button",{alt:"Ajouter au panier",class:"choisir",onClick:y=>s.ajoutPanier(u.progBDD,g.id,u.prog,u.modelBDD)}," \u{1F6D2} ",8,bt)])])]))),128))])):m("",!0)])):m("",!0)]))),128))])):m("",!0)],64)}const Gt=V(pt,[["render",Bt],["__scopeId","data-v-e5d0bac3"]]);export{Gt as default};
