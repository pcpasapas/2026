import{h as u}from"./headerComponent.e92c3123.js";import{e as l,A as d,o as a,c as s,b as p,a as n,f as r,F as h}from"./app.3b54a30a.js";import{_ as g}from"./_plugin-vue_export-helper.cdc0426e.js";const C={setup(){let t=l(0),e=l(0);return{categorie:t,changeCat:c=>{t.value=c,e.value=0},categorieSec:e,changeCatSec:c=>{e.value=c}}},components:{headerComponent:u}};const m=n("button",{class:"catTuto"},"Google Firebase",-1),v=n("button",{class:"catTuto"},"Vue js",-1),_={key:1},f=n("p",null,"app/Providers/AppServiceProviders.php",-1),b=n("textarea",{style:{height:"280px"},readonly:"true",class:"code bg-gray-100"},`\r
public function boot()\r
    {\r
{  if (App::environment('production')) {\r
            \\URL::forceScheme('https');\r
        }\r
        else {\r
            \\URL::forceScheme('http');\r
        }\r
    }\r
}`,-1),S=n("p",null,' Vous aurez sans doute a faire un "php artisan config:cache" dans le terminal \xE0 chaque changement ',-1),k=[f,b,S],y={key:1},T=n("a",{href:"https://cssgradient.io/",target:"blank"}," CSS Gradient",-1),V=[T];function $(t,e){const i=d("headerComponent");return a(),s(h,null,[p(i),n("div",null,[n("button",{class:"catTuto",onClick:e[0]||(e[0]=o=>t.changeCat(1))},"Laravel + vite"),m,v,n("button",{class:"catTuto",onClick:e[1]||(e[1]=o=>t.changeCat(4))},"CSS"),n("button",{class:"catTuto",onClick:e[2]||(e[2]=o=>t.changeCat(5))}," Sites incontournables ")]),n("div",null,[t.categorie===1?(a(),s("button",{key:0,onClick:e[3]||(e[3]=o=>t.changeCatSec(11))}," Connexion https ")):r("",!0),t.categorieSec===11?(a(),s("div",_,k)):r("",!0)]),n("div",null,[t.categorie===4?(a(),s("button",{key:0,onClick:e[4]||(e[4]=o=>t.changeCatSec(41))}," Changer la couleur d'une checkbox ")):r("",!0),t.categorie===5?(a(),s("div",y,V)):r("",!0)])],64)}const L=g(C,[["render",$]]);export{L as default};
