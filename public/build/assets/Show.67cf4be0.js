import{_ as p}from"./AppLayout.1f53bf72.js";import c from"./DeleteUserForm.970aec37.js";import l from"./LogoutOtherBrowserSessionsForm.80165713.js";import{S as s}from"./SectionBorder.49d161d4.js";import f from"./TwoFactorAuthenticationForm.3329e8be.js";import u from"./UpdatePasswordForm.1e72e8c6.js";import _ from"./UpdateProfileInformationForm.5f95413e.js";import{o as e,c as d,w as n,a as i,e as r,b as t,f as a,F as h}from"./app.8806dd5b.js";import"./ApplicationMark.e36be95f.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./ResponsiveNavLink.d39017ca.js";import"./DialogModal.baf8a014.js";import"./SectionTitle.5c6719cd.js";import"./DangerButton.b843e922.js";import"./TextInput.ebb00297.js";import"./SecondaryButton.4995a9ce.js";import"./ActionMessage.5a44c5ca.js";import"./PrimaryButton.54908f5f.js";import"./InputLabel.1d4e0b05.js";import"./FormSection.1772a54c.js";const g=i("h2",{class:"font-semibold text-xl text-gray-800 leading-tight"}," Votre profil ",-1),$={class:"max-w-7xl mx-auto py-10 sm:px-6 lg:px-8"},w={key:0},k={key:1},y={key:2},H={__name:"Show",props:{confirmsTwoFactorAuthentication:Boolean,sessions:Array},setup(m){return(o,x)=>(e(),d(p,{title:"Profile"},{header:n(()=>[g]),default:n(()=>[i("div",null,[i("div",$,[o.$page.props.jetstream.canUpdateProfileInformation?(e(),r("div",w,[t(_,{user:o.$page.props.user},null,8,["user"]),t(s)])):a("",!0),o.$page.props.jetstream.canUpdatePassword?(e(),r("div",k,[t(u,{class:"mt-10 sm:mt-0"}),t(s)])):a("",!0),o.$page.props.jetstream.canManageTwoFactorAuthentication?(e(),r("div",y,[t(f,{"requires-confirmation":m.confirmsTwoFactorAuthentication,class:"mt-10 sm:mt-0"},null,8,["requires-confirmation"]),t(s)])):a("",!0),t(l,{sessions:m.sessions,class:"mt-10 sm:mt-0"},null,8,["sessions"]),o.$page.props.jetstream.hasAccountDeletionFeatures?(e(),r(h,{key:3},[t(s),t(c,{class:"mt-10 sm:mt-0"})],64)):a("",!0)])])]),_:1}))}};export{H as default};