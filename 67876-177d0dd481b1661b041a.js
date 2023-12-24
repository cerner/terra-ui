"use strict";(self.webpackChunkterra_ui=self.webpackChunkterra_ui||[]).push([[67876,45627,85565,3353,5161,45865,85355,3193,4845,46647,85161,38681,15318,40411,18101,38443,11264,34319,20116,33609],{22863:function(e,a,r){var t=r(64836);a.Z=void 0;var n=t(r(67294)),d=t(r(45697)),m=t(r(47166)),o=t(r(17422)),l=m.default.bind(o.default),i={name:d.default.string.isRequired,src:d.default.string,url:d.default.string,version:d.default.string.isRequired},s=function(e){var a=e.src,r=e.name,t=e.url,d=e.version,m=n.default.createElement("a",{className:l("badge"),href:t||"https://www.npmjs.org/package/".concat(r,"/v/").concat(d)},n.default.createElement("span",{className:l("badge-name")},t?"package":"npm"),n.default.createElement("span",{className:l("badge-version")},"v".concat(d))),o=a?n.default.createElement("a",{className:l("badge"),href:a},n.default.createElement("span",{className:l("badge-name")},"github"),n.default.createElement("span",{className:l("badge-version")},"source")):void 0;return n.default.createElement("div",{className:l("badge-container")},m,o)};s.propTypes=i;var u=s;a.Z=u},67876:function(e,a,r){r.r(a),r.d(a,{default:function(){return s}});r(67294);var t=r(81254),n=r(91607),d=["components"];function m(){return m=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var r=arguments[a];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e},m.apply(this,arguments)}function o(e,a){if(null==e)return{};var r,t,n=function(e,a){if(null==e)return{};var r,t,n={},d=Object.keys(e);for(t=0;t<d.length;t++)r=d[t],a.indexOf(r)>=0||(n[r]=e[r]);return n}(e,a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(e);for(t=0;t<d.length;t++)r=d[t],a.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l={},i="wrapper";function s(e){var a=e.components,r=o(e,d);return(0,t.mdx)(i,m({},l,r,{components:a,mdxType:"MDXLayout"}),(0,t.mdx)(n.C,{mdxType:"Badge"}),(0,t.mdx)("h1",{id:"terra-theme-provider-upgrade-guide"},"Terra Theme Provider Upgrade Guide"),(0,t.mdx)("h2",{id:"changes-from-version-3-to-version-4"},"Changes from version 3 to version 4"),(0,t.mdx)("h3",{id:"removed-props"},"Removed Props"),(0,t.mdx)("ul",null,(0,t.mdx)("li",{parentName:"ul"},"Removed ",(0,t.mdx)("inlineCode",{parentName:"li"},"isGlobalTheme"))),(0,t.mdx)("h3",{id:"changes-in-functionality"},"Changes in functionality"),(0,t.mdx)("ul",null,(0,t.mdx)("li",{parentName:"ul"},"With the removal ",(0,t.mdx)("inlineCode",{parentName:"li"},"isGlobalTheme")," prop, the theme is now applied to the ",(0,t.mdx)("inlineCode",{parentName:"li"},"html")," element instead of the wrapping ",(0,t.mdx)("inlineCode",{parentName:"li"},"div")," element."),(0,t.mdx)("li",{parentName:"ul"},"The ",(0,t.mdx)("inlineCode",{parentName:"li"},"div")," element wrapping the children has been removed.")),(0,t.mdx)("h2",{id:"changes-from-version-2-to-version-3"},"Changes from version 2 to version 3"),(0,t.mdx)("h3",{id:"changes-to-css-custom-properties"},"Changes to CSS Custom Properties"),(0,t.mdx)("h4",{id:"renamed"},"Renamed"),(0,t.mdx)("table",null,(0,t.mdx)("thead",{parentName:"table"},(0,t.mdx)("tr",{parentName:"thead"},(0,t.mdx)("th",{parentName:"tr",align:null},"Previous"),(0,t.mdx)("th",{parentName:"tr",align:null},"New"))),(0,t.mdx)("tbody",{parentName:"table"},(0,t.mdx)("tr",{parentName:"tbody"},(0,t.mdx)("td",{parentName:"tr",align:null},"--terra-mock-background-color"),(0,t.mdx)("td",{parentName:"tr",align:null},"--terra-theme-provider-mock-background-color")),(0,t.mdx)("tr",{parentName:"tbody"},(0,t.mdx)("td",{parentName:"tr",align:null},"--terra-mock-color"),(0,t.mdx)("td",{parentName:"tr",align:null},"--terra-theme-provider-mock-color")),(0,t.mdx)("tr",{parentName:"tbody"},(0,t.mdx)("td",{parentName:"tr",align:null},"--terra-mock-display"),(0,t.mdx)("td",{parentName:"tr",align:null},"--terra-theme-provider-mock-display")))))}s.isMDXComponent=!0},91607:function(e,a,r){r.d(a,{C:function(){return d}});var t=r(67294),n=r(22863),d=function(e){var a=e.url;return t.createElement(n.Z,{src:"https://github.com/cerner/terra-framework/tree/main/packages/terra-theme-provider",name:"terra-theme-provider",version:"4.14.0",url:a})}},17422:function(e,a,r){r.r(a),a.default={badge:"Badges-module__badge___vex-+","badge-container":"Badges-module__badge-container___B13Mv","badge-name":"Badges-module__badge-name___jkN0m","badge-version":"Badges-module__badge-version___agZ+P"}}}]);