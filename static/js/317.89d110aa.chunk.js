"use strict";(self.webpackChunkkeycloakify_advanced_starter=self.webpackChunkkeycloakify_advanced_starter||[]).push([[317],{9317:function(e,t,a){a.r(t);var s=a(2791),c=a(2981),l=a(2228),n=a(6196),r=a(2138),o=function(e,t){var a={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.indexOf(s)<0&&(a[s]=e[s]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var c=0;for(s=Object.getOwnPropertySymbols(e);c<s.length;c++)t.indexOf(s[c])<0&&Object.prototype.propertyIsEnumerable.call(e,s[c])&&(a[s[c]]=e[s[c]])}return a},i=(0,s.memo)((function(e){var t=e.kcContext,a=e.i18n,i=e.doFetchDefaultThemeResources,m=void 0===i||i,u=o(e,["kcContext","i18n","doFetchDefaultThemeResources"]),d=t.otpLogin,p=t.url,k=(0,r.R)().cx,f=a.msg,v=a.msgStr;return(0,s.useEffect)((function(){var e=!1;return(0,l.t)({type:"javascript",src:(0,n.pathJoin)(t.url.resourcesCommonPath,"node_modules/jquery/dist/jquery.min.js")}).then((function(){e||$(document).ready((function(){$(".card-pf-view-single-select").click((function(){$(this).hasClass("active")?($(this).removeClass("active"),$(this).children().removeAttr("name")):($(".card-pf-view-single-select").removeClass("active"),$(".card-pf-view-single-select").children().removeAttr("name"),$(this).addClass("active"),$(this).children().attr("name","selectedCredentialId"))}));var e=$(".card-pf-view-single-select")[0];e&&e.click()}))})),function(){e=!0}}),[]),s.createElement(c.Z,Object.assign({},Object.assign({kcContext:t,i18n:a,doFetchDefaultThemeResources:m},u),{headerNode:f("doLogIn"),formNode:s.createElement("form",{id:"kc-otp-login-form",className:k(u.kcFormClass),action:p.loginAction,method:"post"},d.userOtpCredentials.length>1&&s.createElement("div",{className:k(u.kcFormGroupClass)},s.createElement("div",{className:k(u.kcInputWrapperClass)},d.userOtpCredentials.map((function(e){return s.createElement("div",{key:e.id,className:k(u.kcSelectOTPListClass)},s.createElement("input",{type:"hidden",value:"${otpCredential.id}"}),s.createElement("div",{className:k(u.kcSelectOTPListItemClass)},s.createElement("span",{className:k(u.kcAuthenticatorOtpCircleClass)}),s.createElement("h2",{className:k(u.kcSelectOTPItemHeadingClass)},e.userLabel)))})))),s.createElement("div",{className:k(u.kcFormGroupClass)},s.createElement("div",{className:k(u.kcLabelWrapperClass)},s.createElement("label",{htmlFor:"otp",className:k(u.kcLabelClass)},f("loginOtpOneTime"))),s.createElement("div",{className:k(u.kcInputWrapperClass)},s.createElement("input",{id:"otp",name:"otp",autoComplete:"off",type:"text",className:k(u.kcInputClass),autoFocus:!0}))),s.createElement("div",{className:k(u.kcFormGroupClass)},s.createElement("div",{id:"kc-form-options",className:k(u.kcFormOptionsClass)},s.createElement("div",{className:k(u.kcFormOptionsWrapperClass)})),s.createElement("div",{id:"kc-form-buttons",className:k(u.kcFormButtonsClass)},s.createElement("input",{className:k(u.kcButtonClass,u.kcButtonPrimaryClass,u.kcButtonBlockClass,u.kcButtonLargeClass),name:"login",id:"kc-login",type:"submit",value:v("doLogIn")}))))}))}));t.default=i}}]);
//# sourceMappingURL=317.89d110aa.chunk.js.map