"use strict";(self.webpackChunkterra_ui=self.webpackChunkterra_ui||[]).push([[14698],{14698:function(e,r,n){n.r(r),n.d(r,{default:function(){return v}});n(67294);var o=n(81254),t=["components"];function a(){return a=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},a.apply(this,arguments)}function l(e,r){if(null==e)return{};var n,o,t=function(e,r){if(null==e)return{};var n,o,t={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],r.indexOf(n)>=0||(t[n]=e[n]);return t}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var s={},p="wrapper";function c(e){var r=e.components,n=l(e,t);return(0,o.mdx)(p,a({},s,n,{components:r,mdxType:"MDXLayout"}),(0,o.mdx)("h1",{id:"custom-property-pseudo-selectors"},"custom-property-pseudo-selectors"),(0,o.mdx)("p",null,"Requires custom properties defined within var functions to include all ancestor pseudo selectors in order."),(0,o.mdx)("p",null,"Identifiers may be placed between selectors, but the selectors must appear in order."),(0,o.mdx)("h2",{id:"options"},"Options"),(0,o.mdx)("p",null,(0,o.mdx)("inlineCode",{parentName:"p"},"boolean"),": ",(0,o.mdx)("inlineCode",{parentName:"p"},"true")),(0,o.mdx)("p",null,"The following patterns are considered violations:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-css"},"a:hover {\n  /* Does not contain the hover pseudo selector */\n  color: var(--terra-example-color);\n}\n")),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-css"},"/* Wrong order                               ↓     ↓ */\na:hover:focus { color: var(--terra-example-focus-hover-color); }\n")),(0,o.mdx)("p",null,"The following patterns are ",(0,o.mdx)("em",{parentName:"p"},"not")," considered violations:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-css"},"/*                                    ↓ */\na:hover { color: var(--terra-example-hover-color); }\n")),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-css"},".one:hover {\n  .two:focus {\n    /*                               ↓         ↓ */\n    color: var(--terra-example-one-hover-two-focus-color);\n  }\n}\n")))}c.isMDXComponent=!0;var u=["components"];function i(){return i=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},i.apply(this,arguments)}function m(e,r){if(null==e)return{};var n,o,t=function(e,r){if(null==e)return{};var n,o,t={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],r.indexOf(n)>=0||(t[n]=e[n]);return t}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var d={},f="wrapper";function v(e){var r=e.components,n=m(e,u);return(0,o.mdx)(f,i({},d,n,{components:r,mdxType:"MDXLayout"}),(0,o.mdx)(c,{mdxType:"Readme"}))}v.isMDXComponent=!0}}]);