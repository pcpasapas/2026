import{_ as p}from"./AppLayout.17dc731b.js";import c from"./DeleteUserForm.8c3e773b.js";import l from"./LogoutOtherBrowserSessionsForm.17e3b251.js";import{S as s}from"./SectionBorder.1b77a988.js";import f from"./TwoFactorAuthenticationForm.c0f0225d.js";import u from"./UpdatePasswordForm.9aaaa6fd.js";import _ from"./UpdateProfileInformationForm.cee5a0b1.js";import{o as e,c as d,w as n,a as i,e as r,b as t,f as a,F as h}from"./app.a153dea6.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./DropdownLink.4654ba4f.js";import"./DialogModal.1dde0532.js";import"./SectionTitle.7bcc9e51.js";import"./DangerButton.fc711c57.js";import"./TextInput.bb39766a.js";import"./SecondaryButton.3bd255ba.js";import"./ActionMessage.18feb7f0.js";import"./PrimaryButton.5d207e38.js";import"./InputLabel.60515844.js";import"./FormSection.8fb4cde0.js";const g=i("h2",{class:"font-semibold text-xl text-gray-800 leading-tight"}," Votre profil ",-1),$={class:"max-w-7xl mx-auto py-10 sm:px-6 lg:px-8"},w={key:0},k={key:1},y={key:2},G={__name:"Show",props:{confirmsTwoFactorAuthentication:Boolean,sessions:Array},setup(m){return(o,x)=>(e(),d(p,{title:"Profile"},{header:n(()=>[g]),default:n(()=>[i("div",null,[i("div",$,[o.$page.props.jetstream.canUpdateProfileInformation?(e(),r("div",w,[t(_,{user:o.$page.props.user},null,8,["user"]),t(s)])):a("",!0),o.$page.props.jetstream.canUpdatePassword?(e(),r("div",k,[t(u,{class:"mt-10 sm:mt-0"}),t(s)])):a("",!0),o.$page.props.jetstream.canManageTwoFactorAuthentication?(e(),r("div",y,[t(f,{"requires-confirmation":m.confirmsTwoFactorAuthentication,class:"mt-10 sm:mt-0"},null,8,["requires-confirmation"]),t(s)])):a("",!0),t(l,{sessions:m.sessions,class:"mt-10 sm:mt-0"},null,8,["sessions"]),o.$page.props.jetstream.hasAccountDeletionFeatures?(e(),r(h,{key:3},[t(s),t(c,{class:"mt-10 sm:mt-0"})],64)):a("",!0)])])]),_:1}))}};export{G as default};