"use strict";(self.webpackChunkterra_ui=self.webpackChunkterra_ui||[]).push([[90370,45627,85565,3353,5161,45865,85355,3193,4845,46647,85161,38681,15318,40411,18101],{22863:function(e,r,a){var t=a(64836);r.Z=void 0;var n=t(a(67294)),l=t(a(45697)),d=t(a(47166)),i=t(a(17422)),m=d.default.bind(i.default),o={name:l.default.string.isRequired,src:l.default.string,url:l.default.string,version:l.default.string.isRequired},u=function(e){var r=e.src,a=e.name,t=e.url,l=e.version,d=n.default.createElement("a",{className:m("badge"),href:t||"https://www.npmjs.org/package/".concat(a,"/v/").concat(l)},n.default.createElement("span",{className:m("badge-name")},t?"package":"npm"),n.default.createElement("span",{className:m("badge-version")},"v".concat(l))),i=r?n.default.createElement("a",{className:m("badge"),href:r},n.default.createElement("span",{className:m("badge-name")},"github"),n.default.createElement("span",{className:m("badge-version")},"source")):void 0;return n.default.createElement("div",{className:m("badge-container")},d,i)};u.propTypes=o;var p=u;r.Z=p},90370:function(e,r,a){a.r(r),a.d(r,{default:function(){return u}});a(67294);var t=a(81254),n=a(47455),l=["components"];function d(){return d=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var a=arguments[r];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(e[t]=a[t])}return e},d.apply(this,arguments)}function i(e,r){if(null==e)return{};var a,t,n=function(e,r){if(null==e)return{};var a,t,n={},l=Object.keys(e);for(t=0;t<l.length;t++)a=l[t],r.indexOf(a)>=0||(n[a]=e[a]);return n}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)a=l[t],r.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var m={},o="wrapper";function u(e){var r=e.components,a=i(e,l);return(0,t.mdx)(o,d({},m,a,{components:r,mdxType:"MDXLayout"}),(0,t.mdx)(n.C,{mdxType:"Badge"}),(0,t.mdx)("h1",{id:"terra-hyperlink-upgrade-guide"},"Terra Hyperlink Upgrade Guide"),(0,t.mdx)("h2",{id:"changes-from-version-1-to-version-2"},"Changes from version 1 to version 2"),(0,t.mdx)("h3",{id:"changes-to-css-custom-properties"},"Changes to CSS Custom Properties"),(0,t.mdx)("h4",{id:"renamed"},"Renamed"),(0,t.mdx)("table",null,(0,t.mdx)("thead",{parentName:"table"},(0,t.mdx)("tr",{parentName:"thead"},(0,t.mdx)("th",{parentName:"tr",align:null},"Previous"),(0,t.mdx)("th",{parentName:"tr",align:null},"New"))),(0,t.mdx)("tbody",{parentName:"table"},(0,t.mdx)("tr",{parentName:"tbody"},(0,t.mdx)("td",{parentName:"tr",align:null},"--terra-link-color"),(0,t.mdx)("td",{parentName:"tr",align:null},"--terra-hyperlink-color")),(0,t.mdx)("tr",{parentName:"tbody"},(0,t.mdx)("td",{parentName:"tr",align:null},"--terra-link-underline"),(0,t.mdx)("td",{parentName:"tr",align:null},"--terra-hyperlink-text-decoration")),(0,t.mdx)("tr",{parentName:"tbody"},(0,t.mdx)("td",{parentName:"tr",align:null},"--terra-link-visted-color"),(0,t.mdx)("td",{parentName:"tr",align:null},"--terra-hyperlink-visited-color")),(0,t.mdx)("tr",{parentName:"tbody"},(0,t.mdx)("td",{parentName:"tr",align:null},"--terra-link-hover-background-color"),(0,t.mdx)("td",{parentName:"tr",align:null},"--terra-hyperlink-hover-background-color")),(0,t.mdx)("tr",{parentName:"tbody"},(0,t.mdx)("td",{parentName:"tr",align:null},"--terra-link-hover-color"),(0,t.mdx)("td",{parentName:"tr",align:null},"--terra-hyperlink-hover-color")),(0,t.mdx)("tr",{parentName:"tbody"},(0,t.mdx)("td",{parentName:"tr",align:null},"--terra-link-hover-underline"),(0,t.mdx)("td",{parentName:"tr",align:null},"--terra-hyperlink-hover-text-decoration")),(0,t.mdx)("tr",{parentName:"tbody"},(0,t.mdx)("td",{parentName:"tr",align:null},"--terra-link-focus-background-color"),(0,t.mdx)("td",{parentName:"tr",align:null},"--terra-hyperlink-focus-background-color")),(0,t.mdx)("tr",{parentName:"tbody"},(0,t.mdx)("td",{parentName:"tr",align:null},"--terra-link-focus-border-radius"),(0,t.mdx)("td",{parentName:"tr",align:null},"--terra-hyperlink-focus-border-radius")),(0,t.mdx)("tr",{parentName:"tbody"},(0,t.mdx)("td",{parentName:"tr",align:null},"--terra-link-focus-box-shadow"),(0,t.mdx)("td",{parentName:"tr",align:null},"--terra-hyperlink-focus-box-shadow")),(0,t.mdx)("tr",{parentName:"tbody"},(0,t.mdx)("td",{parentName:"tr",align:null},"--terra-link-focus-color"),(0,t.mdx)("td",{parentName:"tr",align:null},"--terra-hyperlink-focus-color")),(0,t.mdx)("tr",{parentName:"tbody"},(0,t.mdx)("td",{parentName:"tr",align:null},"--terra-link-focus-underline"),(0,t.mdx)("td",{parentName:"tr",align:null},"--terra-hyperlink-focus-text-decoration")),(0,t.mdx)("tr",{parentName:"tbody"},(0,t.mdx)("td",{parentName:"tr",align:null},"--terra-link-active-color"),(0,t.mdx)("td",{parentName:"tr",align:null},"--terra-hyperlink-active-color")),(0,t.mdx)("tr",{parentName:"tbody"},(0,t.mdx)("td",{parentName:"tr",align:null},"--terra-link-disabled-color"),(0,t.mdx)("td",{parentName:"tr",align:null},"--terra-hyperlink-disabled-color")),(0,t.mdx)("tr",{parentName:"tbody"},(0,t.mdx)("td",{parentName:"tr",align:null},"--terra-link-external-icon"),(0,t.mdx)("td",{parentName:"tr",align:null},"--terra-hyperlink-external-after-background-image")),(0,t.mdx)("tr",{parentName:"tbody"},(0,t.mdx)("td",{parentName:"tr",align:null},"--terra-link-image-icon"),(0,t.mdx)("td",{parentName:"tr",align:null},"--terra-hyperlink-image-after-background-image")),(0,t.mdx)("tr",{parentName:"tbody"},(0,t.mdx)("td",{parentName:"tr",align:null},"--terra-link-video-icon"),(0,t.mdx)("td",{parentName:"tr",align:null},"--terra-hyperlink-video-after-background-image")),(0,t.mdx)("tr",{parentName:"tbody"},(0,t.mdx)("td",{parentName:"tr",align:null},"--terra-link-audio-icon"),(0,t.mdx)("td",{parentName:"tr",align:null},"--terra-hyperlink-audio-after-background-image")),(0,t.mdx)("tr",{parentName:"tbody"},(0,t.mdx)("td",{parentName:"tr",align:null},"--terra-link-document-icon"),(0,t.mdx)("td",{parentName:"tr",align:null},"--terra-hyperlink-document-after-background-image")))),(0,t.mdx)("h4",{id:"added"},"Added"),(0,t.mdx)("ul",null,(0,t.mdx)("li",{parentName:"ul"},"--terra-hyperlink-disabled-text-decoration"),(0,t.mdx)("li",{parentName:"ul"},"--terra-hyperlink-external-disabled-after-background-image"),(0,t.mdx)("li",{parentName:"ul"},"--terra-hyperlink-image-disabled-after-background-image"),(0,t.mdx)("li",{parentName:"ul"},"--terra-hyperlink-video-disabled-after-background-image"),(0,t.mdx)("li",{parentName:"ul"},"--terra-hyperlink-audio-disabled-after-background-image"),(0,t.mdx)("li",{parentName:"ul"},"--terra-hyperlink-document-disabled-after-background-image")))}u.isMDXComponent=!0},47455:function(e,r,a){a.d(r,{C:function(){return l}});var t=a(67294),n=a(22863),l=function(e){var r=e.url;return t.createElement(n.Z,{src:"https://github.com/cerner/terra-core/tree/main/packages/terra-hyperlink",name:"terra-hyperlink",version:"2.59.0",url:r})}},17422:function(e,r,a){a.r(r),r.default={badge:"Badges-module__badge___vex-+","badge-container":"Badges-module__badge-container___B13Mv","badge-name":"Badges-module__badge-name___jkN0m","badge-version":"Badges-module__badge-version___agZ+P"}}}]);