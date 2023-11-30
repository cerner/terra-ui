"use strict";(self.webpackChunkterra_ui=self.webpackChunkterra_ui||[]).push([[12389,45627,85565,3353,5161,45865,85355,3193,4845,46647,85161,38681,15318,40411,18101],{22863:function(e,a,n){var t=n(64836);a.Z=void 0;var r=t(n(67294)),d=t(n(45697)),l=t(n(47166)),i=t(n(17422)),m=l.default.bind(i.default),o={name:d.default.string.isRequired,src:d.default.string,url:d.default.string,version:d.default.string.isRequired},s=function(e){var a=e.src,n=e.name,t=e.url,d=e.version,l=r.default.createElement("a",{className:m("badge"),href:t||"https://www.npmjs.org/package/".concat(n,"/v/").concat(d)},r.default.createElement("span",{className:m("badge-name")},t?"package":"npm"),r.default.createElement("span",{className:m("badge-version")},"v".concat(d))),i=a?r.default.createElement("a",{className:m("badge"),href:a},r.default.createElement("span",{className:m("badge-name")},"github"),r.default.createElement("span",{className:m("badge-version")},"source")):void 0;return r.default.createElement("div",{className:m("badge-container")},l,i)};s.propTypes=o;var p=s;a.Z=p},12389:function(e,a,n){n.r(a),n.d(a,{default:function(){return s}});n(67294);var t=n(81254),r=n(77292),d=["components"];function l(){return l=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var n=arguments[a];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},l.apply(this,arguments)}function i(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},d=Object.keys(e);for(t=0;t<d.length;t++)n=d[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(e);for(t=0;t<d.length;t++)n=d[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var m={},o="wrapper";function s(e){var a=e.components,n=i(e,d);return(0,t.mdx)(o,l({},m,n,{components:a,mdxType:"MDXLayout"}),(0,t.mdx)(r.C,{mdxType:"Badge"}),(0,t.mdx)("h1",{id:"package-json-lint-rules"},"Package JSON Lint Rules"),(0,t.mdx)("table",null,(0,t.mdx)("thead",{parentName:"table"},(0,t.mdx)("tr",{parentName:"thead"},(0,t.mdx)("th",{parentName:"tr",align:null},"Rule Name"),(0,t.mdx)("th",{parentName:"tr",align:null},"Severity Type"),(0,t.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,t.mdx)("tbody",{parentName:"table"},(0,t.mdx)("tr",{parentName:"tbody"},(0,t.mdx)("td",{parentName:"tr",align:null},(0,t.mdx)("strong",{parentName:"td"},"require-dependencies-declared-at-appropriate-level")),(0,t.mdx)("td",{parentName:"tr",align:null},"warn"),(0,t.mdx)("td",{parentName:"tr",align:null},"Notifies when there are dependencies declared at an inappropriate level. For example babel compilers and webpack should be devDependencies and not regular dependencies. Doesn't apply for devModule.")),(0,t.mdx)("tr",{parentName:"tbody"},(0,t.mdx)("td",{parentName:"tr",align:null},(0,t.mdx)("strong",{parentName:"td"},"require-ie10-compatible-dependency-versions")),(0,t.mdx)("td",{parentName:"tr",align:null},"warn"),(0,t.mdx)("td",{parentName:"tr",align:null},"Notifies when using dependencies that are not IE10 compatible.")),(0,t.mdx)("tr",{parentName:"tbody"},(0,t.mdx)("td",{parentName:"tr",align:null},(0,t.mdx)("strong",{parentName:"td"},"require-no-hard-coded-dependency-versions")),(0,t.mdx)("td",{parentName:"tr",align:null},"error"),(0,t.mdx)("td",{parentName:"tr",align:null},"Prevents hard-coded dependencies from being specified in the package.json. Only applies for module and devModule.")),(0,t.mdx)("tr",{parentName:"tbody"},(0,t.mdx)("td",{parentName:"tr",align:null},(0,t.mdx)("strong",{parentName:"td"},"require-no-terra-base-peer-dependency-versions")),(0,t.mdx)("td",{parentName:"tr",align:null},"warn"),(0,t.mdx)("td",{parentName:"tr",align:null},"Notifies when using terra packages that require terra-base as a peerDependency.")),(0,t.mdx)("tr",{parentName:"tbody"},(0,t.mdx)("td",{parentName:"tr",align:null},(0,t.mdx)("strong",{parentName:"td"},"require-theme-context-versions")),(0,t.mdx)("td",{parentName:"tr",align:null},"warn"),(0,t.mdx)("td",{parentName:"tr",align:null},"Notifies when using terra packages that don't use terra-theme-context as a dependency.")))))}s.isMDXComponent=!0},77292:function(e,a,n){n.d(a,{C:function(){return d}});var t=n(67294),r=n(22863),d=function(e){var a=e.url;return t.createElement(r.Z,{src:"https://github.com/cerner/terra-toolk/tree/main/packages/package-json-lint",name:"@cerner/package-json-lint",version:"1.5.0",url:a})}},17422:function(e,a,n){n.r(a),a.default={badge:"Badges-module__badge___vex-+","badge-container":"Badges-module__badge-container___B13Mv","badge-name":"Badges-module__badge-name___jkN0m","badge-version":"Badges-module__badge-version___agZ+P"}}}]);