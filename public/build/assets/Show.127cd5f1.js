import p from"./DeleteUserForm.dd185cb3.js";import c from"./LogoutOtherBrowserSessionsForm.b07ccb73.js";import{S as r}from"./SectionBorder.c8b7c0e2.js";import l from"./UpdatePasswordForm.403f27d7.js";import d from"./UpdateProfileInformationForm.6b831046.js";import{h as u}from"./headerComponent.e92c3123.js";import{o as e,c as t,b as s,a as m,f as a,F as i}from"./app.3b54a30a.js";import"./DialogModal.457d6913.js";import"./SectionTitle.97a85b40.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./DangerButton.8324aeb8.js";import"./TextInput.38e81f5f.js";import"./SecondaryButton.ec462a40.js";import"./ActionMessage.c1ea50d0.js";import"./PrimaryButton.c53c42c4.js";import"./FormSection.0cbe0d5a.js";import"./InputLabel.afec0e3d.js";const _={class:"min-h-screen m-3 bg-gray-100"},f={class:"max-w-7xl mx-auto py-10 sm:px-6 lg:px-8"},h={key:0},g={key:1},E={__name:"Show",props:{confirmsTwoFactorAuthentication:Boolean,sessions:Array},setup(n){return(o,$)=>(e(),t(i,null,[s(u),m("div",_,[m("div",null,[m("div",f,[o.$page.props.jetstream.canUpdateProfileInformation?(e(),t("div",h,[s(d,{user:o.$page.props.user},null,8,["user"]),s(r)])):a("",!0),o.$page.props.jetstream.canUpdatePassword?(e(),t("div",g,[s(l,{class:"mt-10 sm:mt-0"}),s(r)])):a("",!0),s(c,{sessions:n.sessions,class:"mt-10 sm:mt-0"},null,8,["sessions"]),o.$page.props.jetstream.hasAccountDeletionFeatures?(e(),t(i,{key:2},[s(r),s(p,{class:"mt-10 sm:mt-0"})],64)):a("",!0)])])])],64))}};export{E as default};
