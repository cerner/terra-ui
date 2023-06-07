"use strict";(self.webpackChunkterra_ui=self.webpackChunkterra_ui||[]).push([[22440,45627,85565,3353,5161,45865,85355,3193,4845,46647,85161,38681,15318,40411,18101],{22863:function(e,n,a){var t=a(64836);n.Z=void 0;var r=t(a(67294)),i=t(a(45697)),s=t(a(47166)),l=t(a(17422)),o=s.default.bind(l.default),d={name:i.default.string.isRequired,src:i.default.string,url:i.default.string,version:i.default.string.isRequired},c=function(e){var n=e.src,a=e.name,t=e.url,i=e.version,s=r.default.createElement("a",{className:o("badge"),href:t||"https://www.npmjs.org/package/".concat(a,"/v/").concat(i)},r.default.createElement("span",{className:o("badge-name")},t?"package":"npm"),r.default.createElement("span",{className:o("badge-version")},"v".concat(i))),l=n?r.default.createElement("a",{className:o("badge"),href:n},r.default.createElement("span",{className:o("badge-name")},"github"),r.default.createElement("span",{className:o("badge-version")},"source")):void 0;return r.default.createElement("div",{className:o("badge-container")},s,l)};c.propTypes=d;var m=c;n.Z=m},22440:function(e,n,a){a.r(n),a.d(n,{default:function(){return c}});a(67294);var t=a(81254),r=a(46870),i=["components"];function s(){return s=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var a=arguments[n];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(e[t]=a[t])}return e},s.apply(this,arguments)}function l(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o={},d="wrapper";function c(e){var n=e.components,a=l(e,i);return(0,t.mdx)(d,s({},o,a,{components:n,mdxType:"MDXLayout"}),(0,t.mdx)(r.C,{mdxType:"Badge"}),(0,t.mdx)("h1",{id:"eslint-config-terra"},"Eslint Config Terra"),(0,t.mdx)("p",null,"This configuration reflects Terra's supported eslint policy for javascript."),(0,t.mdx)("p",null,"Features:"),(0,t.mdx)("ul",null,(0,t.mdx)("li",{parentName:"ul"},"extends the  ",(0,t.mdx)("a",{parentName:"li",href:"https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb"},"eslint-config-airbnb"),", which exports ESLint rules, including rules for ECMAScript 6+ and React."),(0,t.mdx)("li",{parentName:"ul"},"checks for proper ReactJS Hooks usage via the ",(0,t.mdx)("a",{parentName:"li",href:"https://reactjs.org/docs/hooks-rules.html"},"eslint-plugin-react-hooks"),"."),(0,t.mdx)("li",{parentName:"ul"},"checks syntax for targeted browsers support via the ",(0,t.mdx)("a",{parentName:"li",href:"https://github.com/amilajack/eslint-plugin-compat"},"eslint-plugin-compat"),". It is recommended to use Terra's targeted browsers which are specified by the ",(0,t.mdx)("a",{parentName:"li",href:"https://github.com/cerner/terra-toolkit/tree/main/packages/browserslist-config-terra"},"browserslist-config-terra")," module."),(0,t.mdx)("li",{parentName:"ul"},"defines the browser and jest environment"),(0,t.mdx)("li",{parentName:"ul"},"defines enzyme globals for ",(0,t.mdx)("inlineCode",{parentName:"li"},"shallow"),", ",(0,t.mdx)("inlineCode",{parentName:"li"},"render")," and ",(0,t.mdx)("inlineCode",{parentName:"li"},"mount")," for jest testing")),(0,t.mdx)("h2",{id:"what-is-eslint"},"What is Eslint"),(0,t.mdx)("p",null,(0,t.mdx)("a",{parentName:"p",href:"https://eslint.org/"},"ESlint")," is a pluggable linting utility for JavaScript and JSX."),(0,t.mdx)("h2",{id:"installation"},"Installation"),(0,t.mdx)("p",null,"Install the module"),(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre",className:"language-shell"},"npm install eslint --save-dev\nnpm install @cerner/eslint-config-terra --save-dev\n")),(0,t.mdx)("h2",{id:"usage"},"Usage"),(0,t.mdx)("p",null,"Include the configuration defined by ",(0,t.mdx)("inlineCode",{parentName:"p"},"@cerner/eslint-config-terra")," via the  ",(0,t.mdx)("a",{parentName:"p",href:"https://eslint.org/docs/user-guide/configuring#extending-configuration-files"},"extends")," property."),(0,t.mdx)("p",null,"To lint based on supported browsers, add browserlist config as specified in the ",(0,t.mdx)("a",{parentName:"p",href:"dev_tools/cerner/browserslist-config-terra/upgrade-guide"},"browserlist config upgrade guide"),"."),(0,t.mdx)("h3",{id:"packagejson"},"package.json"),(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "eslintConfig": {\n    "extends": "@cerner/terra"\n  },\n}\n')))}c.isMDXComponent=!0},46870:function(e,n,a){a.d(n,{C:function(){return i}});var t=a(67294),r=a(22863),i=function(e){var n=e.url;return t.createElement(r.Z,{src:"https://github.com/cerner/terra-toolk/tree/main/packages/eslint-config-terra",name:"@cerner/eslint-config-terra",version:"5.4.0",url:n})}},17422:function(e,n,a){a.r(n),n.default={badge:"Badges-module__badge___vex-+","badge-container":"Badges-module__badge-container___B13Mv","badge-name":"Badges-module__badge-name___jkN0m","badge-version":"Badges-module__badge-version___agZ+P"}}}]);