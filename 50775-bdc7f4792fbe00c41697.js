"use strict";(self.webpackChunkterra_ui=self.webpackChunkterra_ui||[]).push([[50775],{50775:function(e,t,n){n.r(t),n.d(t,{default:function(){return m}});n(67294);var a=n(81254),r=["components"];function p(){return p=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},p.apply(this,arguments)}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},p=Object.keys(e);for(a=0;a<p.length;a++)n=p[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)n=p[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o={},l="wrapper";function m(e){var t=e.components,n=i(e,r);return(0,a.mdx)(l,p({},o,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("h1",{id:"how-to-change-the-application-theme"},"How To Change the Application Theme"),(0,a.mdx)("p",null,"The application theme is set using the ",(0,a.mdx)("inlineCode",{parentName:"p"},"themeName")," prop in ApplicationBase. The ",(0,a.mdx)("inlineCode",{parentName:"p"},"themeName")," is used as the class name for applying styles."),(0,a.mdx)("p",null,"A ",(0,a.mdx)("inlineCode",{parentName:"p"},"terra-theme.config.js")," file must be available to enable themes. Check out the ",(0,a.mdx)("a",{parentName:"p",href:"/terra-ui/guides/terra-application/theme-strategy"},"theme strategy guide")," for more information about using and applying themes."),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-jsx"},"  import React from 'react';\n  import ApplicationBase from 'terra-application/lib/application-base';\n\n  const ExampleApp = () => (\n    <ApplicationBase themeName=\"example-theme-name\">\n      {...}\n    </ApplicationBase>\n  );\n\n  export default ExampleApp;\n")))}m.isMDXComponent=!0}}]);