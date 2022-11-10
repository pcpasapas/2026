import{h as u}from"./headerComponent.81baf09d.js";import{e as l,A as p,o as a,c as s,b as d,a as t,f as r,F as h}from"./app.73a615d1.js";import{_ as g}from"./_plugin-vue_export-helper.cdc0426e.js";const m={setup(){let n=l(0),e=l(0);return{categorie:n,changeCat:c=>{n.value=c,e.value=0},categorieSec:e,changeCatSec:c=>{e.value=c}}},components:{headerComponent:u}};const v=t("button",{class:"catTuto"},"Google Firebase",-1),C=t("button",{class:"catTuto"},"Vue js",-1),_={key:1},f=t("p",null,"app/Providers/AppServiceProviders.php",-1),b=t("textarea",{style:{height:"280px"},readonly:"true",class:"code bg-gray-100"},`\r
public function boot()\r
    {\r
{  if (App::environment('production')) {\r
            \\URL::forceScheme('https');\r
        }\r
        else {\r
            \\URL::forceScheme('http');\r
        }\r
    }\r
}`,-1),k=t("p",null,' Vous aurez sans doute a faire un "php artisan config:cache" dans le terminal \xE0 chaque changement ',-1),S=[f,b,k],y={key:1},T=t("a",{href:"https://cssgradient.io/",target:"blank"}," CSS Gradient",-1),V=t("a",{href:"https://www.bequiet.com/fr/psucalculator/quick",target:"_blank"},"Evaluer la puissance n\xE9cessaire pour l'alimentation",-1),$=[T,V];function q(n,e){const i=p("headerComponent");return a(),s(h,null,[d(i),t("div",null,[t("button",{class:"catTuto",onClick:e[0]||(e[0]=o=>n.changeCat(1))},"Laravel + vite"),v,C,t("button",{class:"catTuto",onClick:e[1]||(e[1]=o=>n.changeCat(4))},"CSS"),t("button",{class:"catTuto",onClick:e[2]||(e[2]=o=>n.changeCat(5))}," Sites incontournables ")]),t("div",null,[n.categorie===1?(a(),s("button",{key:0,onClick:e[3]||(e[3]=o=>n.changeCatSec(11))}," Connexion https ")):r("",!0),n.categorieSec===11?(a(),s("div",_,S)):r("",!0)]),t("div",null,[n.categorie===4?(a(),s("button",{key:0,onClick:e[4]||(e[4]=o=>n.changeCatSec(41))}," Changer la couleur d'une checkbox ")):r("",!0),n.categorie===5?(a(),s("div",y,$)):r("",!0)])],64)}const F=g(m,[["render",q]]);export{F as default};
