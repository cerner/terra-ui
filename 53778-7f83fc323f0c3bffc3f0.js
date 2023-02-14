"use strict";(self.webpackChunkterra_ui=self.webpackChunkterra_ui||[]).push([[53778,45627,85565,3353,5161,45865,85355,3193,4845,46647,85161],{22863:function(e,a,n){var t=n(64836);a.Z=void 0;var r=t(n(67294)),s=t(n(45697)),l=t(n(47166)),c=t(n(17422)),o=l.default.bind(c.default),d={name:s.default.string.isRequired,src:s.default.string,url:s.default.string,version:s.default.string.isRequired},i=function(e){var a=e.src,n=e.name,t=e.url,s=e.version,l=r.default.createElement("a",{className:o("badge"),href:t||"https://www.npmjs.org/package/".concat(n,"/v/").concat(s)},r.default.createElement("span",{className:o("badge-name")},t?"package":"npm"),r.default.createElement("span",{className:o("badge-version")},"v".concat(s))),c=a?r.default.createElement("a",{className:o("badge"),href:a},r.default.createElement("span",{className:o("badge-name")},"github"),r.default.createElement("span",{className:o("badge-version")},"source")):void 0;return r.default.createElement("div",{className:o("badge-container")},l,c)};i.propTypes=d;var u=i;a.Z=u},53778:function(e,a,n){n.r(a),n.d(a,{default:function(){return i}});n(67294);var t=n(81254),r=n(77292),s=["components"];function l(){return l=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var n=arguments[a];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},l.apply(this,arguments)}function c(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},s=Object.keys(e);for(t=0;t<s.length;t++)n=s[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)n=s[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o={},d="wrapper";function i(e){var a=e.components,n=c(e,s);return(0,t.mdx)(d,l({},o,n,{components:a,mdxType:"MDXLayout"}),(0,t.mdx)(r.C,{mdxType:"Badge"}),(0,t.mdx)("h1",{id:"package-json-lint"},"Package Json Lint"),(0,t.mdx)("p",null,"The package provide lint rules that can be used to flag problems that are present in a package.json."),(0,t.mdx)("h2",{id:"installation"},"Installation"),(0,t.mdx)("p",null,"To install the module:"),(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre",className:"language-shell"},"npm install @cerner/package-json-lint --save-dev\nnpm install @cerner/package-json-lint-config-terra --save-dev\n")),(0,t.mdx)("h2",{id:"usage"},"Usage"),(0,t.mdx)("h3",{id:"packagejson"},"package.json"),(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre",className:"language-js"},'  "package-json-lint": {\n    "extends": "./packages/package-json-lint-config-terra/package-json-lint.config.js",\n    "projectType": "devModule | module | application",\n  },\n')),(0,t.mdx)("h3",{id:"npm-script"},"npm script"),(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre",className:"language-js"},'"lint:package-json": "npm run terra -- package-json-lint",\n')))}i.isMDXComponent=!0},77292:function(e,a,n){n.d(a,{C:function(){return s}});var t=n(67294),r=n(22863),s=function(e){var a=e.url;return t.createElement(r.Z,{src:"https://github.com/cerner/terra-toolk/tree/main/packages/package-json-lint",name:"@cerner/package-json-lint",version:"1.5.0",url:a})}},17422:function(e,a,n){n.r(a),a.default={badge:"Badges-module__badge___vex-+","badge-container":"Badges-module__badge-container___B13Mv","badge-name":"Badges-module__badge-name___jkN0m","badge-version":"Badges-module__badge-version___agZ+P"}}}]);