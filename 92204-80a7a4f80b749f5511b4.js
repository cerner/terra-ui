"use strict";(self.webpackChunkterra_ui=self.webpackChunkterra_ui||[]).push([[92204,17711,40092,72949,95330,7235,29616,62473,84854,38663,61044,92260,69879,47498,25117,81784,59403,37022,14641,71308,48927,98463,20844,53701],{55713:function(e,n,a){var r=a(24994);n.A=void 0;var t=r(a(96540)),o=r(a(5556)),s=r(a(67967)),i=r(a(25642)),d=s.default.bind(i.default),l={name:o.default.string.isRequired,src:o.default.string,url:o.default.string,version:o.default.string.isRequired},c=function(e){var n=e.src,a=e.name,r=e.url,o=e.version,s=t.default.createElement("a",{className:d("badge"),href:r||"https://www.npmjs.org/package/".concat(a,"/v/").concat(o)},t.default.createElement("span",{className:d("badge-name")},r?"package":"npm"),t.default.createElement("span",{className:d("badge-version")},"v".concat(o))),i=n?t.default.createElement("a",{className:d("badge"),href:n},t.default.createElement("span",{className:d("badge-name")},"github"),t.default.createElement("span",{className:d("badge-version")},"source")):void 0;return t.default.createElement("div",{className:d("badge-container")},s,i)};c.propTypes=l;n.A=c},92204:function(e,n,a){a.r(n),a.d(n,{default:function(){return c}});a(96540);var r=a(36665),t=a(98957),o=["components"];function s(){return s=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var a=arguments[n];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},s.apply(this,arguments)}function i(e,n){if(null==e)return{};var a,r,t=function(e,n){if(null==e)return{};var a,r,t={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],n.indexOf(a)>=0||(t[a]=e[a]);return t}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}var d={},l="wrapper";function c(e){var n=e.components,a=i(e,o);return(0,r.mdx)(l,s({},d,a,{components:n,mdxType:"MDXLayout"}),(0,r.mdx)(t.E,{mdxType:"Badge"}),(0,r.mdx)("h1",{id:"package-json-lint"},"Package Json Lint"),(0,r.mdx)("p",null,"The package provide lint rules that can be used to flag problems that are present in a package.json."),(0,r.mdx)("h2",{id:"installation"},"Installation"),(0,r.mdx)("p",null,"To install the module:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-shell"},"npm install @cerner/package-json-lint --save-dev\nnpm install @cerner/package-json-lint-config-terra --save-dev\n")),(0,r.mdx)("h2",{id:"usage"},"Usage"),(0,r.mdx)("h3",{id:"packagejson"},"package.json"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-js"},'  "package-json-lint": {\n    "extends": "./packages/package-json-lint-config-terra/package-json-lint.config.js",\n    "projectType": "devModule | module | application",\n  },\n')),(0,r.mdx)("h3",{id:"npm-script"},"npm script"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-js"},'"lint:package-json": "npm run terra -- package-json-lint",\n')),(0,r.mdx)("h2",{id:"upgrade-guide-for-package-json-lint"},"Upgrade Guide for package-json-lint"),(0,r.mdx)("h3",{id:"upgrading-to-version-2"},"Upgrading to version 2"),(0,r.mdx)("p",null,"Package JSON Lint v2 mainly removes rules for IE10 support since it is no longer supported.\nIf you have IE10 based dependencies in your project, please upgrade or remove them.\nOtherwise, no additional action is needed to upgrade to v2."),(0,r.mdx)("h2",{id:"upgrade-guide-for-package-json-lint-config-terra"},"Upgrade Guide for package-json-lint-config-terra"),(0,r.mdx)("h3",{id:"upgrading-to-version-2-1"},"Upgrading to version 2"),(0,r.mdx)("p",null,(0,r.mdx)("inlineCode",{parentName:"p"},"package-json-lint-config-terra@2")," now requires ",(0,r.mdx)("inlineCode",{parentName:"p"},"package-json-lint@2")," as a peer dependency.\nMake sure the correct version is used to prevent any peer dependency conflicts."))}c.isMDXComponent=!0},98957:function(e,n,a){a.d(n,{E:function(){return o}});var r=a(96540),t=a(55713),o=function(e){var n=e.url;return r.createElement(t.A,{src:"https://github.com/cerner/terra-toolk/tree/main/packages/package-json-lint",name:"@cerner/package-json-lint",version:"2.2.0",url:n})}},25642:function(e,n,a){a.r(n),n.default={badge:"Badges-module__badge___vex-+","badge-container":"Badges-module__badge-container___B13Mv","badge-name":"Badges-module__badge-name___jkN0m","badge-version":"Badges-module__badge-version___agZ+P"}}}]);