"use strict";(self.webpackChunkterra_ui=self.webpackChunkterra_ui||[]).push([[45684,45627,85565,3353,5161,45865,85355,3193,4845,46647,85161,38681,15318,40411,18101,38443,11264,34319,20116,33609],{22863:function(e,a,r){var t=r(64836);a.Z=void 0;var n=t(r(67294)),o=t(r(45697)),l=t(r(47166)),s=t(r(17422)),u=l.default.bind(s.default),c={name:o.default.string.isRequired,src:o.default.string,url:o.default.string,version:o.default.string.isRequired},i=function(e){var a=e.src,r=e.name,t=e.url,o=e.version,l=n.default.createElement("a",{className:u("badge"),href:t||"https://www.npmjs.org/package/".concat(r,"/v/").concat(o)},n.default.createElement("span",{className:u("badge-name")},t?"package":"npm"),n.default.createElement("span",{className:u("badge-version")},"v".concat(o))),s=a?n.default.createElement("a",{className:u("badge"),href:a},n.default.createElement("span",{className:u("badge-name")},"github"),n.default.createElement("span",{className:u("badge-version")},"source")):void 0;return n.default.createElement("div",{className:u("badge-container")},l,s)};i.propTypes=c;var d=i;a.Z=d},45684:function(e,a,r){r.r(a),r.d(a,{default:function(){return i}});r(67294);var t=r(81254),n=r(20249),o=["components"];function l(){return l=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var r=arguments[a];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e},l.apply(this,arguments)}function s(e,a){if(null==e)return{};var r,t,n=function(e,a){if(null==e)return{};var r,t,n={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],a.indexOf(r)>=0||(n[r]=e[r]);return n}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],a.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u={},c="wrapper";function i(e){var a=e.components,r=s(e,o);return(0,t.mdx)(c,l({},u,r,{components:a,mdxType:"MDXLayout"}),(0,t.mdx)(n.C,{mdxType:"Badge"}),(0,t.mdx)("h1",{id:"terra-table-upgrade-guide"},"Terra Table Upgrade Guide"),(0,t.mdx)("h2",{id:"changes-from-4x-to-50"},"Changes from 4.x to 5.0"),(0,t.mdx)("p",null,"Terra table will no longer support grid-like (focus, keyboard navigation, etc) functionality and now behaves more like a native, accessible table. See the Docs for new functionality."))}i.isMDXComponent=!0},20249:function(e,a,r){r.d(a,{C:function(){return o}});var t=r(67294),n=r(22863),o=function(e){var a=e.url;return t.createElement(n.Z,{src:"https://github.com/cerner/terra-framework/tree/main/packages/terra-table",name:"terra-table",version:"5.3.2",url:a})}},17422:function(e,a,r){r.r(a),a.default={badge:"Badges-module__badge___vex-+","badge-container":"Badges-module__badge-container___B13Mv","badge-name":"Badges-module__badge-name___jkN0m","badge-version":"Badges-module__badge-version___agZ+P"}}}]);