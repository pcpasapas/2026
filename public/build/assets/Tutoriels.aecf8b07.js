import{h as n}from"./headerComponent.4f264b82.js";import{_ as s}from"./_plugin-vue_export-helper.cdc0426e.js";import{C as r,o as a,e as c,b as i,F as p,a as o}from"./app.2efa387a.js";import"./ResponsiveNavLink.35fc2d1a.js";const l={props:["canLogin","canRegister"],components:{headerComponent:n},mounted(){},methods:{auto_grow(e){e.style.height="5px",e.style.height=e.scrollHeight+"px"}}};const _=o("h1",null,"page des tutos",-1),h=o("button",null,"Laravel + vite",-1),d=o("button",null,"Connexion https",-1),u=o("p",null,"app/Providers/AppServiceProviders.php",-1),m=o("textarea",{style:{height:"150px"},readonly:"true",class:"code"},`public function boot() {\r
        { \r
            \\URL::forceScheme('https');\r
         }\r
    }`,-1);function g(e,f){const t=r("headerComponent");return a(),c(p,null,[i(t,{canLogin:e.canLogin,canRegister:e.canRegister},null,8,["canLogin","canRegister"]),_,h,d,u,m],64)}const L=s(l,[["render",g]]);export{L as default};
