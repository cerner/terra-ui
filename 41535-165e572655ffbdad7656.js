"use strict";(self.webpackChunkterra_ui=self.webpackChunkterra_ui||[]).push([[41535,45627,85565,3353,5161,45865,85355,3193,4845,46647,85161],{22863:function(e,t,a){var n=a(64836);t.Z=void 0;var r=n(a(67294)),o=n(a(45697)),i=n(a(47166)),l=n(a(17422)),d=i.default.bind(l.default),s={name:o.default.string.isRequired,src:o.default.string,url:o.default.string,version:o.default.string.isRequired},c=function(e){var t=e.src,a=e.name,n=e.url,o=e.version,i=r.default.createElement("a",{className:d("badge"),href:n||"https://www.npmjs.org/package/".concat(a,"/v/").concat(o)},r.default.createElement("span",{className:d("badge-name")},n?"package":"npm"),r.default.createElement("span",{className:d("badge-version")},"v".concat(o))),l=t?r.default.createElement("a",{className:d("badge"),href:t},r.default.createElement("span",{className:d("badge-name")},"github"),r.default.createElement("span",{className:d("badge-version")},"source")):void 0;return r.default.createElement("div",{className:d("badge-container")},i,l)};c.propTypes=s;var m=c;t.Z=m},41535:function(e,t,a){a.r(t),a.d(t,{default:function(){return c}});a(67294);var n=a(81254),r=a(93626),o=["components"];function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},i.apply(this,arguments)}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d={},s="wrapper";function c(e){var t=e.components,a=l(e,o);return(0,n.mdx)(s,i({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.mdx)(r.C,{mdxType:"Badge"}),(0,n.mdx)("h1",{id:"terra-themeconfigjs"},"terra-theme.config.js"),(0,n.mdx)("p",null,"The terra-theme.config.js is used to define the theme for a terra-application. It can be used to specify an default theme, and any scoped themes that can be switched to. Scoped themes are not available in Internet Explorer."),(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-js"},"const themeConfig = {\n  theme: 'orion-fusion-theme', // The default theme.\n  scoped: ['clinical-lowlight-theme'], // An array of scoped themes.\n};\n\nmodule.exports = themeConfig;\n")),(0,n.mdx)("h2",{id:"options"},"Options"),(0,n.mdx)("h3",{id:"theme-optional"},"Theme (Optional)"),(0,n.mdx)("p",null,"The ",(0,n.mdx)("inlineCode",{parentName:"p"},"theme")," option accepts the string name of a default theme. The default theme will be applied directly to the application."),(0,n.mdx)("h3",{id:"scoped-optional"},"Scoped (Optional)"),(0,n.mdx)("p",null,"The ",(0,n.mdx)("inlineCode",{parentName:"p"},"scoped")," option accepts an array of theme names to include in the application for theme switching."),(0,n.mdx)("h2",{id:"supported-themes"},"Supported Themes"),(0,n.mdx)("p",null,"Terra supports the following themes:"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"orion-fusion-theme"),(0,n.mdx)("li",{parentName:"ul"},"clinical-lowlight-theme"),(0,n.mdx)("li",{parentName:"ul"},"terra-default-theme")))}c.isMDXComponent=!0},93626:function(e,t,a){a.d(t,{C:function(){return o}});var n=a(67294),r=a(22863),o=function(e){var t=e.url;return n.createElement(r.Z,{src:"https://github.com/cerner/terra-toolk/tree/main/packages/webpack-config-terra",name:"@cerner/webpack-config-terra",version:"3.0.1",url:t})}},17422:function(e,t,a){a.r(t),t.default={badge:"Badges-module__badge___vex-+","badge-container":"Badges-module__badge-container___B13Mv","badge-name":"Badges-module__badge-name___jkN0m","badge-version":"Badges-module__badge-version___agZ+P"}}}]);