"use strict";(self.webpackChunkterra_ui=self.webpackChunkterra_ui||[]).push([[39097,45627,85565,3353,5161,45865,85355,3193,4845,46647,85161,38681,15318,40411,18101,38443,11264,34319,20116,33609],{22863:function(e,a,t){var r=t(64836);a.Z=void 0;var n=r(t(67294)),l=r(t(45697)),d=r(t(19845)),o=r(t(17422)),u=d.default.bind(o.default),i={name:l.default.string.isRequired,src:l.default.string,url:l.default.string,version:l.default.string.isRequired},m=function(e){var a=e.src,t=e.name,r=e.url,l=e.version,d=n.default.createElement("a",{className:u("badge"),href:r||"https://www.npmjs.org/package/".concat(t,"/v/").concat(l)},n.default.createElement("span",{className:u("badge-name")},r?"package":"npm"),n.default.createElement("span",{className:u("badge-version")},"v".concat(l))),o=a?n.default.createElement("a",{className:u("badge"),href:a},n.default.createElement("span",{className:u("badge-name")},"github"),n.default.createElement("span",{className:u("badge-version")},"source")):void 0;return n.default.createElement("div",{className:u("badge-container")},d,o)};m.propTypes=i;var s=m;a.Z=s},39097:function(e,a,t){t.r(a),t.d(a,{default:function(){return m}});t(67294);var r=t(81254),n=t(65911),l=["components"];function d(){return d=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},d.apply(this,arguments)}function o(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var u={},i="wrapper";function m(e){var a=e.components,t=o(e,l);return(0,r.mdx)(i,d({},u,t,{components:a,mdxType:"MDXLayout"}),(0,r.mdx)(n.C,{mdxType:"Badge"}),(0,r.mdx)("h1",{id:"terra-layout-upgrade-guide"},"Terra Layout Upgrade Guide"),(0,r.mdx)("h2",{id:"changes-from-version-2-to-version-3"},"Changes from version 2 to version 3"),(0,r.mdx)("h3",{id:"changes-to-css-custom-properties"},"Changes to CSS Custom Properties"),(0,r.mdx)("h4",{id:"renamed"},"Renamed"),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Previous"),(0,r.mdx)("th",{parentName:"tr",align:null},"New"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"--layout-slide-panel-background-color"),(0,r.mdx)("td",{parentName:"tr",align:null},"--terra-layout-slide-panel-panel-background-color")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"--layout-slide-panel-desktop-panel-width"),(0,r.mdx)("td",{parentName:"tr",align:null},"--terra-layout-slide-panel-panel-width")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"--layout-slide-panel-phone-panel-width"),(0,r.mdx)("td",{parentName:"tr",align:null},"--terra-layout-slide-panel-tiny-panel-width")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"--layout-slide-panel-tablet-panel-width"),(0,r.mdx)("td",{parentName:"tr",align:null},"--terra-layout-slide-panel-small-panel-width")))),(0,r.mdx)("h4",{id:"added"},"Added"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"--terra-layout-slide-panel-overlay-panel-ltr-box-shadow"),(0,r.mdx)("li",{parentName:"ul"},"--terra-layout-slide-panel-overlay-panel-rtl-box-shadow"),(0,r.mdx)("li",{parentName:"ul"},"--terra-layout-slide-panel-squish-panel-background-color"),(0,r.mdx)("li",{parentName:"ul"},"--terra-layout-slide-panel-squish-panel-border-right-color"),(0,r.mdx)("li",{parentName:"ul"},"--terra-layout-slide-panel-squish-panel-border-right-width"),(0,r.mdx)("li",{parentName:"ul"},"--terra-layout-slide-panel-squish-panel-ltr-box-shadow"),(0,r.mdx)("li",{parentName:"ul"},"--terra-layout-slide-panel-squish-panel-rtl-box-shadow")),(0,r.mdx)("h4",{id:"removed"},"Removed"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"--layout-slide-panel-panel-shadow-color"),(0,r.mdx)("li",{parentName:"ul"},"--layout-slide-panel-panel-border-color")))}m.isMDXComponent=!0},65911:function(e,a,t){t.d(a,{C:function(){return l}});var r=t(67294),n=t(22863),l=function(e){var a=e.url;return r.createElement(n.Z,{src:"https://github.com/cerner/terra-framework/tree/main/packages/terra-layout",name:"terra-layout",version:"4.39.0",url:a})}},17422:function(e,a,t){t.r(a),a.default={badge:"Badges-module__badge___vex-+","badge-container":"Badges-module__badge-container___B13Mv","badge-name":"Badges-module__badge-name___jkN0m","badge-version":"Badges-module__badge-version___agZ+P"}}}]);