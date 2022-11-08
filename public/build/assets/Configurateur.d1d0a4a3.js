import{h as F}from"./headerComponent.bf5f320a.js";import{J as p,o as r,e as n,t as c,f as u,a as s,K as S,M as w,F as I,i as k,E as x,G as P,d as v,x as T,L as b,N as z,D as g,b as C,w as D,g as q}from"./app.894e96f3.js";import{_ as A}from"./_plugin-vue_export-helper.cdc0426e.js";import"./DropdownLink.3bcfacf7.js";const O=p("boitiers",{state:()=>({boitiers:[{id:1,marque:"MARS GAMING",name:"MC-U3 Noir",prix:58.31,taille:"43.3 x 19.1 x 36.7 cm",img:!0,lien:"https://www.amazon.fr/dp/B0B7S7PGVZ/ref=sspa_dk_detail_5?psc=1&pd_rd_i=B0B7S7PGVZ&pd_rd_w=1qWZo&content-id=amzn1.sym.844c282f-78f1-4549-b53e-9efd648da0e0&pf_rd_p=844c282f-78f1-4549-b53e-9efd648da0e0&pf_rd_r=7YGWWT81QGFFW2PHPRMX&pd_rd_wg=qoZND&pd_rd_r=f7da6bda-d5cc-4c43-9e27-f12542c7f060&s=computers&sp_csd=d2lkZ2V0TmFtZT1zcF9kZXRhaWw"},{id:2,marque:"EMPIRE GAMING",name:"Gamer WareFare Noir",taille:"42 x 19 x 45 cm",img:!0,prix:63.99,lien:"https://www.amazon.fr/EMPIRE-GAMING-WareFare-Ventilateurs-Transparente/dp/B071JYDDPW/ref=psdc_430338031_t3_B07ZRXPKXY?th=1"},{id:4,marque:"EMPIRE GAMING",name:"Gamer Spartan",taille:"38.6 x 20.4 x 44.6 cm",img:!0,prix:69.99,lien:"https://www.amazon.fr/dp/B07ZRX8CNB/ref=emc_b_5_i"},{id:3,marque:"EMPIRE GAMING",taille:"38.7 x 20.8 x 44.8 cm",name:"Gamer Diamond",img:!0,prix:79.99,lien:"https://www.amazon.fr/EMPIRE-GAMING-Plexiglas-Ventilateurs-Adressables/dp/B07ZRXPKXY/ref=sr_1_3?__mk_fr_FR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&keywords=boitier%2Bpc%2Batx&qid=1665992178&qu=eyJxc2MiOiI3Ljk5IiwicXNhIjoiNy4yNiIsInFzcCI6IjYuNjkifQ%3D%3D&s=computers&sr=1-3&th=1"}]}),getters:{getAllBoitiers:e=>e.boitiers,getOneBoitier:e=>i=>e.boitiers.find(t=>t.id===i)}}),X=p("alims",{state:()=>({alims:[{id:1,name:"Mars Gaming MPIII550",prix:28.9,puissance:"550 W",img:!0,lien:"https://www.amazon.fr/MPIII550-Alimentation-Technologie-Silencieuse-Efficacit%C3%A9/dp/B0B38TPM5H/ref=sr_1_4?__mk_fr_FR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&keywords=alimentation+pc&qid=1666012725&qu=eyJxc2MiOiI2LjU0IiwicXNhIjoiNi4wMyIsInFzcCI6IjUuODEifQ%3D%3D&s=computers&sr=1-4"},{id:2,name:"Mars Gaming MPII650",prix:41.99,puissance:"650 W",img:!0,lien:"https://www.amazon.fr/dp/B01C41OGZC/ref=sspa_dk_detail_0?psc=1&pd_rd_i=B01C41OGZC&pd_rd_w=SSvXM&content-id=amzn1.sym.46f3bd26-124e-4785-b190-ff05ba326c3e&pf_rd_p=46f3bd26-124e-4785-b190-ff05ba326c3e&pf_rd_r=E4E2ZZKEJC9WYVV143KJ&pd_rd_wg=PZgnO&pd_rd_r=a1e8c968-c056-4df9-8cdd-4f63f348ad92&s=computers&sp_csd=d2lkZ2V0TmFtZT1zcF9kZXRhaWxfdGhlbWF0aWM&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEzVDNYOUlJWjJXVEJaJmVuY3J5cHRlZElkPUEwOTUwMzI5Mjk4SE1YNTZSTkdETSZlbmNyeXB0ZWRBZElkPUEwMDYxODU1S1AwV1o4T1BOMlRFJndpZGdldE5hbWU9c3BfZGV0YWlsX3RoZW1hdGljJmFjdGlvbj1jbGlja1JlZGlyZWN0JmRvTm90TG9nQ2xpY2s9dHJ1ZQ=="}]}),getters:{getAllAlims:e=>e.alims,getOneAlim:e=>i=>e.alims.find(t=>t.id===i)}}),B=p("carteMere",{state:()=>({carteMere:[{id:2,name:"MSI A320M-A PRO",prix:44.95,socket:"AM4",ddr:"DDR 4",img:!0,lien:"https://www.ldlc.com/fiche/PB00277939.html"},{id:1,name:"GIGABYTE GA-A320M-S2H",prix:62.89,socket:"AM4",ddr:"DDR 4",img:!0,lien:"https://www.amazon.fr/Giga-Byte-Ga-a320-m-s2h-Am4-A320-mATX-U3-1-SATA-DDR4/dp/B078KBKFZ6/ref=sr_1_4?__mk_fr_FR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&keywords=carte+mere+am4&qid=1665997932&qu=eyJxc2MiOiI1LjgxIiwicXNhIjoiNS4zMyIsInFzcCI6IjQuOTEifQ%3D%3D&s=computers&sr=1-4"},{id:3,name:"Gigabyte H410M S2H V3",prix:74.95,socket:"1200",ddr:"DDR 4",img:!0,lien:"https://www.ldlc.com/fiche/PB00465454.html"}]}),getters:{getAllCarteMeres:e=>e.carteMere,getOneCarteMere:e=>i=>e.carteMere.find(t=>t.id===i),getAllCarteMeresSocket:e=>{console.log("test");const i=h().getAllPanier[2].choisi;if(i!==0){let l=R().getAllProcesseurs.filter(a=>a.id===i)[0].socket;return e.carteMere.filter(a=>a.socket===l)}else return e.carteMere}}}),R=p("processeurs",{state:()=>({processeurs:[{id:2,name:"AMD Ryzen 3 4100 Wraith Stealth",prix:119.95,socket:"AM4",puissanceMini:3.8,puissanceBoost:4,img:!0,lien:"https://www.ldlc.com/fiche/PB00497776.html"},{id:1,name:"AMD Ryzen 5 4500 avec Ventilateur Wraith Stealth",prix:116.64,socket:"AM4",puissanceMini:3.6,puissanceBoost:4.1,img:!0,lien:"https://www.amazon.fr/AMD-Ryzen-4500-Ventilateur-Stealth/dp/B09VCJN7HZ/ref=sr_1_14?__mk_fr_FR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&keywords=processeur&qid=1665997123&qu=eyJxc2MiOiI2LjUyIiwicXNhIjoiNS40NyIsInFzcCI6IjUuMzUifQ%3D%3D&refinements=p_36%3A428409031&rnid=428393031&s=computers&sr=1-14"},{id:3,name:"Intel Core i3-10105F",prix:103.96,socket:"1200",puissanceMini:3.7,puissanceBoost:4.4,img:!0,lien:"https://www.ldlc.com/fiche/PB00437078.html"},{id:4,name:"AMD RYZEN7 2700X",prix:291.38,socket:"AM4",puissanceMini:3.7,puissanceBoost:4.35,img:!0,lien:"https://www.amazon.fr/AMD-YD270XBGAFBOX-Processeur-RYZEN7-4-35Ghz/dp/B07B428M7F"}]}),getters:{getAllProcesseurs:e=>e.processeurs,getOneProcesseur:e=>i=>e.processeurs.find(t=>t.id===i),getAllProcesseursSocket:e=>{const i=h().getAllPanier[3].choisi;if(i!==0){let l=B().getAllCarteMeres.filter(a=>a.id===i)[0].socket;return e.processeurs.filter(a=>a.socket===l)}else return e.processeurs}}}),Z=p("ram",{state:()=>({ram:[{id:2,name:"Corsair Vengeance LPX 16Go (1x16Go)",prix:65.88,taille:"16 GB",img:!0,lien:"https://www.amazon.fr/Corsair-Vengeance-2666MHz-M%C3%A9moire-Performance/dp/B019HVO62A/ref=sr_1_14?__mk_fr_FR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&keywords=ddr4+16go&qid=1666011414&qu=eyJxc2MiOiI1Ljc1IiwicXNhIjoiNS4wNSIsInFzcCI6IjQuOTYifQ%3D%3D&refinements=p_n_feature_twelve_browse-bin%3A11415997031&rnid=188176031&s=computers&sr=1-14"},{id:1,name:"Corsair Vengeance LPX 32GB (2x16GB)",prix:122.14,taille:"32 GB",img:!0,lien:"https://www.amazon.fr/Corsair-Vengeance-32GB-2x16GB-3200MHz/dp/B07RW6Z692/ref=sr_1_4?__mk_fr_FR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&keywords=dd4+16go&qid=1666010912&qu=eyJxc2MiOiIzLjA4IiwicXNhIjoiMi40MyIsInFzcCI6IjAuMDAifQ%3D%3D&s=computers&sr=1-4"}]}),getters:{getAllRam:e=>e.ram,getOneRam:e=>i=>e.ram.find(t=>t.id===i)}}),V=p("cartegraphique",{state:()=>({cartegraphique:[{id:1,name:"MAXSUN AMD Radeon RX 550",prix:149.99,memoire:"4 go",puissance:"1071 Mhz",img:!0,lien:"https://www.amazon.fr/Graphiques-RX-550-Graphique-DisplayPort/dp/B09SKZSDRT/ref=sr_1_12?__mk_fr_FR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&keywords=carte+graphique&qid=1665998342&qu=eyJxc2MiOiI4Ljg0IiwicXNhIjoiNy42MSIsInFzcCI6IjYuOTgifQ%3D%3D&refinements=p_36%3A428409031&rnid=428393031&s=computers&sr=1-12"},{id:2,name:"MSI RX 6500 XT Radeon",prix:174.87,memoire:"4 go",puissance:"2685 Mhz",img:!0,lien:"https://www.amazon.fr/MSI-6500-Radeon-Mech-V508-003R/dp/B09R1RVN3R/ref=sr_1_10?__mk_fr_FR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&keywords=rx+5700&qid=1666014009&qu=eyJxc2MiOiI1LjQ2IiwicXNhIjoiNC4zNiIsInFzcCI6IjIuNzMifQ%3D%3D&s=computers&sr=1-10"},{id:3,name:"ASUS TUF GAMING NVIDIA GeForce GTX 1660",prix:290,memoire:"6 go",puissance:"1815 Mhz",img:!0,lien:"https://www.amazon.fr/ASUS-Gaming-GeForce-Graphique-NVIDIA/dp/B09C8YJZH5/ref=sr_1_15?__mk_fr_FR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&keywords=gtx+1070&qid=1666014227&qu=eyJxc2MiOiI1LjExIiwicXNhIjoiNS4wNCIsInFzcCI6IjIuNjQifQ%3D%3D&s=computers&sr=1-15"}]}),getters:{getAllCartegraphiques:e=>e.cartegraphique,getOnecarteGraphique:e=>i=>e.cartegraphique.find(t=>t.id===i)}}),E=p("ssd",{state:()=>({ssd:[{id:1,name:"Kingston A400 SSD SSD Interne 2.5",prix:25.9,taille:"240 gb",img:!0,lien:"https://www.amazon.fr/Kingston-SSD-A400-240GB-Disque-SATA/dp/B01N5IB20Q/ref=sr_1_3?__mk_fr_FR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&keywords=ssd&qid=1666010044&qu=eyJxc2MiOiI2LjI1IiwicXNhIjoiNS40MyIsInFzcCI6IjQuOTgifQ%3D%3D&s=computers&sr=1-3"},{id:2,name:"Kingston A400 SSD SSD Interne 2.5",prix:40.19,taille:"480 gb",img:!0,lien:"https://www.amazon.fr/Kingston-SSD-A400-480GB-Disque-SATA/dp/B01N5IB20Q/ref=sr_1_3?__mk_fr_FR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&keywords=ssd&qid=1666010044&qu=eyJxc2MiOiI2LjI1IiwicXNhIjoiNS40MyIsInFzcCI6IjQuOTgifQ%3D%3D&s=computers&sr=1-3"},{id:3,name:"Kingston A400 SSD SSD Interne 2.5",prix:81,taille:"960 gb",img:!0,lien:"https://www.amazon.fr/Kingston-SSD-A400-960GB-Disque-SATA/dp/B01N5IB20Q/ref=sr_1_3?__mk_fr_FR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&keywords=ssd&qid=1666010044&qu=eyJxc2MiOiI2LjI1IiwicXNhIjoiNS40MyIsInFzcCI6IjQuOTgifQ%3D%3D&s=computers&sr=1-3"}]}),getters:{getAllSsd:e=>e.ssd,getOneSsd:e=>i=>e.ssd.find(t=>t.id===i)}}),J=p("hdd",{state:()=>({hdd:[{id:1,name:"Western Digital WD Blue Desktop 1 To",prix:48.95,taille:"1 To",img:!0,lien:"https://www.ldlc.com/fiche/PB00134121.html"}]}),getters:{getAllHdd:e=>e.hdd,getOneHdd:e=>i=>e.hdd.find(t=>t.id===i)}}),h=p("panier",{state:()=>({panier:[{id:0,title:"Boitier",prog:"boitiers",choisi:0,article:{}},{id:1,title:"Alimentation",prog:"alim",choisi:0,article:{}},{id:2,title:"Processeur",prog:"processeur",choisi:0,article:{}},{id:3,title:"Carte M\xE8re",prog:"carteMere",choisi:0,article:{}},{id:4,title:"Ram",prog:"ram",choisi:0,article:{}},{id:5,title:"Carte Graphique",prog:"carteGraphique",article:{},choisi:0},{id:6,title:"SSD",prog:"ssd",choisi:0,article:{}},{id:7,title:"Disque Dur Hdd",prog:"hdd",article:{},choisi:0}]}),getters:{getAllPanier:e=>e.panier,getOnePanier:e=>i=>e.panier.find(t=>t.id===i)},actions:{modifStorePanier(e,i){if(isNaN(e)?(e=[e],e=e[0]):(e=Array.from(String(e),Number),i=Array.from(String(i),Number)),i=[i],i=i[0],i===0)this.panier[e].choisi=i,this.panier[e].article={};else for(let t=0;t<e.length;t++)e[t]===0?this.panier[0].article=O().getOneBoitier(i[t]):e[t]===1?this.panier[1].article=X().getOneAlim(i[t]):e[t]===2?this.panier[2].article=R().getOneProcesseur(i[t]):e[t]===3?this.panier[3].article=B().getOneCarteMere(i[t]):e[t]===4?this.panier[4].article=Z().getOneRam(i[t]):e[t]===5?this.panier[5].article=V().getOnecarteGraphique(i[t]):e[t]===6?this.panier[6].article=E().getOneSsd(i[t]):e[t]===7&&(this.panier[7].article=J().getOneHdd(i[t])),this.panier[e[t]].choisi=i[t]}}});const L={props:["composant","categorie"],methods:{toggleAgrandir(){}}},W={key:0},Q={key:1},U={key:2},Y={key:3},H={key:4},K={key:5},$={key:6},ee={class:"prixImage"},te=["src"],ie=["src"],se={class:"prix"};function re(e,i,t,l,a,m){return r(),n("div",{class:"composant",onClick:i[0]||(i[0]=(...d)=>m.toggleAgrandir&&m.toggleAgrandir(...d))},[t.composant.marque?(r(),n("h3",W,c(t.composant.marque),1)):u("",!0),s("h3",null,c(t.composant.name),1),t.composant.socket!==void 0?(r(),n("h4",Q," Socket : "+c(t.composant.socket),1)):u("",!0),t.composant.puissanceMini?(r(),n("h4",U," Puissance mini : "+c(t.composant.puissanceMini)+" Ghz ",1)):u("",!0),t.composant.puissanceBoost?(r(),n("h4",Y," Puissance boost\xE9e : "+c(t.composant.puissanceBoost)+" Ghz ",1)):u("",!0),t.composant.puissance!==void 0?(r(),n("h4",H," Puissance : "+c(t.composant.puissance),1)):u("",!0),t.composant.memoire!==void 0?(r(),n("h4",K," M\xE9moire : "+c(t.composant.memoire),1)):u("",!0),t.composant.taille!==void 0?(r(),n("h4",$," Taille : "+c(t.composant.taille),1)):u("",!0),s("div",ee,[this.categorie.prog!==void 0?(r(),n("img",{key:0,src:"/img/"+t.categorie.prog+"/"+t.composant.id+".jpg"},null,8,te)):u("",!0),this.categorie.prog===void 0?(r(),n("img",{key:1,src:"../img/"+t.categorie+"/"+t.composant.id+".jpg"},null,8,ie)):u("",!0),s("p",se,c(t.composant.prix.toFixed(2)/100)+" \u20AC",1)])])}const ne=A(L,[["render",re],["__scopeId","data-v-765c35fa"]]);const ae={props:["panier"],emits:["composantRetirePanier","reset"],setup(e){return{Panier:S(e.panier)}},data(){return{produitsPanier:this.produitspanier,prixTotalPanier:0}},computed:{fnPrixTotalPanier(){if(this.prixTotalPanier=0,console.log(this.Panier.value),this.Panier.value!==void 0)for(let e=0;e<this.Panier.value.length;e++)console.log(this.Panier.value[e].prix),this.prixTotalPanier+=this.Panier.value[e].prix/100;return this.prixTotalPanier.toFixed(2)}},mounted(){},methods:{async retirerproduit(e,i){await w.put("/panier/1",{categorie:e,composant:i}).then(t=>{this.Panier.value=t.data}).catch(t=>console.log(t))},resetPanier(){this.Panier.$reset(),this.fnPrixTotalPanier,this.$emit("reset")}}},G=e=>(x("data-v-c1f9348d"),e=e(),P(),e),oe={class:"panier"},ce=G(()=>s("p",{class:"selection"},"Votre s\xE9lection",-1)),le={key:0,class:"composant"},ue={class:"col1"},de=["src"],me={class:"col2"},pe={class:"col3"},_e={class:"col4"},he=["onClick"],fe={class:"prixTotal"},ge=G(()=>s("td",null,"Prix total",-1));function Ce(e,i,t,l,a,m){return r(),n("div",oe,[ce,(r(!0),n(I,null,k(l.Panier.value,d=>(r(),n("div",{key:d.id},[d!==""?(r(),n("div",le,[s("tbody",null,[s("tr",null,[s("td",ue,[s("img",{src:"../img/"+d.categorie.prog+"/"+d.id+".jpg"},null,8,de)]),s("td",me,[s("p",null,c(d.name),1)]),s("td",pe,c(d.prix/100)+" \u20AC",1),s("td",_e,[s("button",{onClick:M=>m.retirerproduit(d.categorie.progBDD,null)}," X ",8,he)])])])])):u("",!0)]))),128)),s("div",fe,[s("tr",null,[ge,s("td",null,c(m.fnPrixTotalPanier)+" \u20AC",1)]),s("tr",null,[s("button",{class:"reset",onClick:i[0]||(i[0]=d=>m.resetPanier())},"Reset")])])])}const Ie=A(ae,[["render",Ce],["__scopeId","data-v-c1f9348d"]]);const Me={props:["canLogin","canRegister","alimentations","categories","games","composants","categorieChoisi"],data(){return{categorieChoisie:"",bouton:"+",versionTable:0,jeu:!1,enFctComposants:!1,composantsAffiches:{}}},setup(){let e=S({}),i=v();const t=T(async()=>{await w.get("/panier").then(a=>{e.value=a.data,console.log(e),i.value=!1})});return{panierReact:e,mounted:t,ajoutPanier:async(a,m,d,M)=>{await w.put("/panier/1",{categorie:a,composant:m,categorieProg:d,modelBDD:M}).then(f=>(e.value=f.data,e)).catch(f=>console.log(f))},loading:i}},methods:{composantRetirePanier(){this.enFctComposants=!0},reset(){this.versionTable++,this.panierDetail=h().getAllPanier,this.categorieChoisie="",this.enFctComposants=!1,this.jeu=!1},updateTable(){this.panierDetail=h().getAllPanier,this.versionTable++,this.categorieChoisie=""},panierGtaV(){h().modifStorePanier([0,1,2,3,4,5,6],[1,1,3,3,2,1,1]),this.updateTable()},panierFlight(){h().modifStorePanier([0,1,2,3,4,5,6],[1,1,4,3,2,1,1]),this.updateTable()},composantsAffiche(e){console.log(e),w.get(`/configurateur/composants/choix/${e}`).then(i=>{this.composantsAffiches=i.data.composants,this.categorieChoisie=i.data.categorieChoisi,console.table(this.categorieChoisie)})},affiche(e){if(console.log(e,this.jeu),e==="jeu")return this.jeu===!1?(this.enFctComposants=!1,this.categorieChoisie="",this.jeu=!0,this.jeu):(this.jeu=!1,this.jeu);if(e==="enFctComposants")if(this.enFctComposants===!1)this.categorieChoisie="",this.enFctComposants=!0;else return this.enFctComposants=!1,this.jeu;this.categorieChoisie===e?(this.jeu=!1,this.categorieChoisie=""):(this.jeu=!1,this.categorieChoisie=e)}},components:{headerComponent:F,panierComponent:Ie,composantCard:ne,Link:b,InertiaLink:z}},j=e=>(x("data-v-12546ee5"),e=e(),P(),e),we=j(()=>s("li",{class:"liMenuCategorie"},[s("span",null,"Choix d'une configuration en fonction d'un jeu")],-1)),ke={key:0},Ae=j(()=>s("li",{class:"liMenuCategorie"},[s("span",null," Choix d'une configuration en fonction des composants ")],-1)),De={key:1},Se={key:2},xe={key:0},Pe=["onClick"],Be={class:"liCategorie"},Re={key:0,class:"ulComposant"},Ge={class:"composantBoutons"},je={class:"boutonsComposant"},Ne=["href"],ye=["onClick"];function Fe(e,i,t,l,a,m){const d=g("headerComponent"),M=g("panierComponent"),f=g("Link"),N=g("InertiaLink"),y=g("composant-card");return r(),n(I,null,[C(d,{canLogin:t.canLogin,canRegister:t.canRegister},null,8,["canLogin","canRegister"]),C(M,{onReset:m.reset,onUpdateTable:m.updateTable,onComposantRetirePanier:m.composantRetirePanier,panier:l.panierReact},null,8,["onReset","onUpdateTable","onComposantRetirePanier","panier"]),s("div",null,[s("ul",null,[C(f,{href:"/configurateur/jeux"},{default:D(()=>[we]),_:1})])]),t.games!==null?(r(),n("div",ke,[s("ul",null,[(r(!0),n(I,null,k(t.games,o=>(r(),n("button",{key:o.id,class:"jeu"},c(o.name),1))),128))])])):u("",!0),s("div",null,[s("ul",null,[C(N,{href:"/configurateur/composants"},{default:D(()=>[Ae]),_:1})])]),t.categories!==null?(r(),n("div",De)):u("",!0),l.loading===!1?(r(),n("div",Se,[(r(!0),n(I,null,k(t.categories,o=>(r(),n("ul",{class:"ulCategorie",key:o.id},[l.panierReact.value[o.id-1]===void 0||l.panierReact.value[o.id-1]===null||l.panierReact.value[o.id-1]===""?(r(),n("div",xe,[(r(),n("a",{key:o.prog,onClick:_=>m.composantsAffiche(o.prog)},[s("li",Be,[s("span",null,c(o.name),1),s("p",null,c(l.panierReact.value[o.id-1]),1)])],8,Pe)),o.prog===a.categorieChoisie?(r(),n("ul",Re,[(r(!0),n(I,null,k(a.composantsAffiches,_=>(r(),n("li",{class:"composant",key:_.id},[q(c(_.name)+" ",1),s("div",Ge,[C(y,{composant:_,categorie:o},null,8,["composant","categorie"]),s("div",je,[s("a",{class:"choisir",href:_.lien,target:"_blank"},"\u{1F50D} ",8,Ne),s("button",{alt:"Ajouter au panier",class:"choisir",onClick:ve=>l.ajoutPanier(o.progBDD,_.id,o.prog,o.modelBDD)}," \u{1F6D2} ",8,ye)])])]))),128))])):u("",!0)])):u("",!0)]))),128))])):u("",!0)],64)}const Oe=A(Me,[["render",Fe],["__scopeId","data-v-12546ee5"]]);export{Oe as default};