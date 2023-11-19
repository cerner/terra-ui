"use strict";(self.webpackChunkterra_ui=self.webpackChunkterra_ui||[]).push([[10790,45627,85565,3353,5161,45865,85355,3193,4845,46647,85161,38681,15318,40411,18101,38443,11264],{22863:function(e,n,t){var r=t(64836);n.Z=void 0;var a=r(t(67294)),i=r(t(45697)),l=r(t(47166)),o=r(t(17422)),s=l.default.bind(o.default),d={name:i.default.string.isRequired,src:i.default.string,url:i.default.string,version:i.default.string.isRequired},c=function(e){var n=e.src,t=e.name,r=e.url,i=e.version,l=a.default.createElement("a",{className:s("badge"),href:r||"https://www.npmjs.org/package/".concat(t,"/v/").concat(i)},a.default.createElement("span",{className:s("badge-name")},r?"package":"npm"),a.default.createElement("span",{className:s("badge-version")},"v".concat(i))),o=n?a.default.createElement("a",{className:s("badge"),href:n},a.default.createElement("span",{className:s("badge-name")},"github"),a.default.createElement("span",{className:s("badge-version")},"source")):void 0;return a.default.createElement("div",{className:s("badge-container")},l,o)};c.propTypes=d;var u=c;n.Z=u},10790:function(e,n,t){t.r(n),t.d(n,{default:function(){return c}});t(67294);var r=t(81254),a=t(97583),i=["components"];function l(){return l=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},l.apply(this,arguments)}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s={},d="wrapper";function c(e){var n=e.components,t=o(e,i);return(0,r.mdx)(d,l({},s,t,{components:n,mdxType:"MDXLayout"}),(0,r.mdx)(a.C,{mdxType:"Badge"}),(0,r.mdx)("h1",{id:"stylelint-config-terra-upgrade-guide"},"stylelint-config-terra Upgrade Guide"),(0,r.mdx)("h2",{id:"changes-from-cernerstylelint-config-terra-400-to-cernerstylelint-config-terra-500"},"Changes from @cerner/stylelint-config-terra 4.0.0 to @cerner/stylelint-config-terra 5.0.0"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Stylelint version 15 is now required. Refer to the ",(0,r.mdx)("a",{parentName:"li",href:"https://stylelint.io/migration-guide/to-15"},"Stylelint 15 Migration Guide for more details"),". "),(0,r.mdx)("li",{parentName:"ul"},"Support for IE10 rules has been dropped. Make sure you are no longer using IE10 rules in your project before upgrading."),(0,r.mdx)("li",{parentName:"ul"},"Stylint CLI no longer supports --syntax option. Refer to the ",(0,r.mdx)("a",{parentName:"li",href:"https://stylelint.io/migration-guide/to-14#syntax-option-and-automatic-inferral-of-syntax"},"Stylelint 14 Migration Guide for more details"),".")),(0,r.mdx)("h2",{id:"changes-from-stylelint-config-terra-3x-to-cernerstylelint-config-terra-400"},"Changes from stylelint-config-terra 3.x to @cerner/stylelint-config-terra 4.0.0"),(0,r.mdx)("h3",{id:"node-10"},"Node 10"),(0,r.mdx)("p",null,"Node 10 is not the minimum supported version. Upgrade to node 14."),(0,r.mdx)("h3",{id:"stylelint-13"},"Stylelint 13"),(0,r.mdx)("p",null,"Stylelint version 13 is now required."),(0,r.mdx)("h3",{id:"cerner-scoping"},"@cerner scoping"),(0,r.mdx)("p",null,"The package is now scoped under @cerner."),(0,r.mdx)("h3",{id:"upgrading"},"Upgrading"),(0,r.mdx)("p",null,"Upgrades are confined to the consuming packages package.json file."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-diff"},'{\n  "stylelint": {\n-   "extends": "stylelint-config-terra",\n+   "extends": "@cerner/stylelint-config-terra",\n  },\n  "devDependencies": {\n+   "@cerner/stylelint-config-terra": "^4.0.0",\n-   "stylelint": "^11.0.0",\n+   "stylelint": "^13.0.0",\n-   "stylelint-config-terra": "^3.2.0",\n  }\n}\n')))}c.isMDXComponent=!0},97583:function(e,n,t){t.d(n,{C:function(){return i}});var r=t(67294),a=t(22863),i=function(e){var n=e.url;return r.createElement(a.Z,{src:"https://github.com/cerner/terra-toolk/tree/main/packages/stylelint-config-terra",name:"@cerner/stylelint-config-terra",version:"5.0.1",url:n})}},17422:function(e,n,t){t.r(n),n.default={badge:"Badges-module__badge___vex-+","badge-container":"Badges-module__badge-container___B13Mv","badge-name":"Badges-module__badge-name___jkN0m","badge-version":"Badges-module__badge-version___agZ+P"}}}]);