import{_ as c}from"./AppLayout.f1dc37cc.js";import l from"./DeleteUserForm.19bc9d7b.js";import f from"./LogoutOtherBrowserSessionsForm.fd6a4d0e.js";import{S as r}from"./SectionBorder.f7cf5774.js";import u from"./TwoFactorAuthenticationForm.5af3ddf5.js";import d from"./UpdatePasswordForm.b4158697.js";import _ from"./UpdateProfileInformationForm.16ccd9ac.js";import{h}from"./headerComponent.b733bd81.js";import{o as e,e as s,b as t,w as n,F as p,a as m,f as a}from"./app.2ab9c296.js";import"./ApplicationMark.5f943601.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./DropdownLink.cfd21389.js";import"./DialogModal.bed79ef3.js";import"./SectionTitle.61ce496f.js";import"./DangerButton.14b22efb.js";import"./TextInput.4b9401a5.js";import"./SecondaryButton.bf88f423.js";import"./ActionMessage.110b0ae7.js";import"./PrimaryButton.4d2091f0.js";import"./InputLabel.0aca3801.js";import"./FormSection.3ea413e4.js";const g=m("h2",{class:"font-semibold text-xl text-gray-800 leading-tight"}," Votre profil ",-1),$={class:"max-w-7xl mx-auto py-10 sm:px-6 lg:px-8"},w={key:0},y={key:1},k={key:2},J={__name:"Show",props:{confirmsTwoFactorAuthentication:Boolean,sessions:Array},setup(i){return(o,x)=>(e(),s(p,null,[t(h),t(c,{title:"Profile"},{header:n(()=>[g]),default:n(()=>[m("div",null,[m("div",$,[o.$page.props.jetstream.canUpdateProfileInformation?(e(),s("div",w,[t(_,{user:o.$page.props.user},null,8,["user"]),t(r)])):a("",!0),o.$page.props.jetstream.canUpdatePassword?(e(),s("div",y,[t(d,{class:"mt-10 sm:mt-0"}),t(r)])):a("",!0),o.$page.props.jetstream.canManageTwoFactorAuthentication?(e(),s("div",k,[t(u,{"requires-confirmation":i.confirmsTwoFactorAuthentication,class:"mt-10 sm:mt-0"},null,8,["requires-confirmation"]),t(r)])):a("",!0),t(f,{sessions:i.sessions,class:"mt-10 sm:mt-0"},null,8,["sessions"]),o.$page.props.jetstream.hasAccountDeletionFeatures?(e(),s(p,{key:3},[t(r),t(l,{class:"mt-10 sm:mt-0"})],64)):a("",!0)])])]),_:1})],64))}};export{J as default};
