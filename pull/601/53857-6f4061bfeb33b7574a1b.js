"use strict";(self.webpackChunkterra_ui=self.webpackChunkterra_ui||[]).push([[53857,45627,85565,3353,5161,45865,85355,3193,4845,46647,85161,38681,15318,40411,18101,38443,11264,34319,20116,33609],{22863:function(e,n,a){var r=a(64836);n.Z=void 0;var t=r(a(67294)),l=r(a(45697)),o=r(a(47166)),d=r(a(17422)),i=o.default.bind(d.default),u={name:l.default.string.isRequired,src:l.default.string,url:l.default.string,version:l.default.string.isRequired},m=function(e){var n=e.src,a=e.name,r=e.url,l=e.version,o=t.default.createElement("a",{className:i("badge"),href:r||"https://www.npmjs.org/package/".concat(a,"/v/").concat(l)},t.default.createElement("span",{className:i("badge-name")},r?"package":"npm"),t.default.createElement("span",{className:i("badge-version")},"v".concat(l))),d=n?t.default.createElement("a",{className:i("badge"),href:n},t.default.createElement("span",{className:i("badge-name")},"github"),t.default.createElement("span",{className:i("badge-version")},"source")):void 0;return t.default.createElement("div",{className:i("badge-container")},o,d)};m.propTypes=u;var s=m;n.Z=s},53857:function(e,n,a){a.r(n),a.d(n,{default:function(){return b}});a(67294);var r=a(81254),t=a(63236),l=["components"];function o(){return o=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var a=arguments[n];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},o.apply(this,arguments)}function d(e,n){if(null==e)return{};var a,r,t=function(e,n){if(null==e)return{};var a,r,t={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],n.indexOf(a)>=0||(t[a]=e[a]);return t}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}var i={},u="wrapper";function m(e){var n=e.components,a=d(e,l);return(0,r.mdx)(u,o({},i,a,{components:n,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"changelog"},"Changelog"),(0,r.mdx)("h2",{id:"unreleased"},"Unreleased"),(0,r.mdx)("h2",{id:"120---december-11-2023"},"1.2.0 - (December 11, 2023)"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Changed",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},"Minor dependency version bump.")))),(0,r.mdx)("h2",{id:"110---november-23-2023"},"1.1.0 - (November 23, 2023)"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Changed",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},"Minor dependency version bump")))),(0,r.mdx)("h2",{id:"101---november-9-2023"},"1.0.1 - (November 9, 2023)"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Changed",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},"The component has been marked as deprecated as it is only intended to be used with the fusion passthrough effort."))),(0,r.mdx)("li",{parentName:"ul"},"Fixed",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},"Fixed an issue where ",(0,r.mdx)("inlineCode",{parentName:"li"},"iconText")," was used instead of ",(0,r.mdx)("inlineCode",{parentName:"li"},"menuIconText"),".")))),(0,r.mdx)("h2",{id:"100---october-25-2023"},"1.0.0 - (October 25, 2023)"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Initial working component release.")),(0,r.mdx)("h2",{id:"030---october-17-2023"},"0.3.0 - (October 17, 2023)"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Initial package release.")))}m.isMDXComponent=!0;var s=["components"];function c(){return c=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var a=arguments[n];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},c.apply(this,arguments)}function p(e,n){if(null==e)return{};var a,r,t=function(e,n){if(null==e)return{};var a,r,t={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],n.indexOf(a)>=0||(t[a]=e[a]);return t}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}var f={},g="wrapper";function b(e){var n=e.components,a=p(e,s);return(0,r.mdx)(g,c({},f,a,{components:n,mdxType:"MDXLayout"}),(0,r.mdx)(t.C,{mdxType:"Badge"}),(0,r.mdx)(m,{mdxType:"ChangeLog"}))}b.isMDXComponent=!0},63236:function(e,n,a){a.d(n,{C:function(){return l}});var r=a(67294),t=a(22863),l=function(e){var n=e.url;return r.createElement(t.Z,{src:"https://github.com/cerner/terra-framework/tree/main/packages/terra-file-path",name:"terra-file-path",version:"1.2.0",url:n})}},17422:function(e,n,a){a.r(n),n.default={badge:"Badges-module__badge___vex-+","badge-container":"Badges-module__badge-container___B13Mv","badge-name":"Badges-module__badge-name___jkN0m","badge-version":"Badges-module__badge-version___agZ+P"}}}]);