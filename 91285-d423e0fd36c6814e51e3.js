"use strict";(self.webpackChunkterra_ui=self.webpackChunkterra_ui||[]).push([[91285,45627,85565,3353,5161,45865,85355,3193,4845,46647,85161,38681,15318,40411,18101,38443,11264,34319,20116,33609],{22863:function(a,e,r){var t=r(64836);e.Z=void 0;var n=t(r(67294)),l=t(r(45697)),d=t(r(19845)),i=t(r(17422)),c=d.default.bind(i.default),o={name:l.default.string.isRequired,src:l.default.string,url:l.default.string,version:l.default.string.isRequired},m=function(a){var e=a.src,r=a.name,t=a.url,l=a.version,d=n.default.createElement("a",{className:c("badge"),href:t||"https://www.npmjs.org/package/".concat(r,"/v/").concat(l)},n.default.createElement("span",{className:c("badge-name")},t?"package":"npm"),n.default.createElement("span",{className:c("badge-version")},"v".concat(l))),i=e?n.default.createElement("a",{className:c("badge"),href:e},n.default.createElement("span",{className:c("badge-name")},"github"),n.default.createElement("span",{className:c("badge-version")},"source")):void 0;return n.default.createElement("div",{className:c("badge-container")},d,i)};m.propTypes=o;var s=m;e.Z=s},91285:function(a,e,r){r.r(e),r.d(e,{default:function(){return m}});r(67294);var t=r(81254),n=r(70279),l=["components"];function d(){return d=Object.assign?Object.assign.bind():function(a){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(a[t]=r[t])}return a},d.apply(this,arguments)}function i(a,e){if(null==a)return{};var r,t,n=function(a,e){if(null==a)return{};var r,t,n={},l=Object.keys(a);for(t=0;t<l.length;t++)r=l[t],e.indexOf(r)>=0||(n[r]=a[r]);return n}(a,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(a);for(t=0;t<l.length;t++)r=l[t],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(a,r)&&(n[r]=a[r])}return n}var c={},o="wrapper";function m(a){var e=a.components,r=i(a,l);return(0,t.mdx)(o,d({},c,r,{components:e,mdxType:"MDXLayout"}),(0,t.mdx)(n.C,{mdxType:"Badge"}),(0,t.mdx)("h1",{id:"terra-clinical-data-grid-upgrade-guide"},"Terra Clinical Data Grid Upgrade Guide"),(0,t.mdx)("h2",{id:"changes-from-version-1-to-version-2"},"Changes from version 1 to version 2"),(0,t.mdx)("h3",{id:"changes-to-css-custom-properties"},"Changes to CSS Custom Properties"),(0,t.mdx)("h4",{id:"renamed"},"Renamed"),(0,t.mdx)("table",null,(0,t.mdx)("thead",{parentName:"table"},(0,t.mdx)("tr",{parentName:"thead"},(0,t.mdx)("th",{parentName:"tr",align:null},"Previous"),(0,t.mdx)("th",{parentName:"tr",align:null},"New"))),(0,t.mdx)("tbody",{parentName:"table"},(0,t.mdx)("tr",{parentName:"tbody"},(0,t.mdx)("td",{parentName:"tr",align:null},"--terra-clinical-data-grid-column-header-text-color"),(0,t.mdx)("td",{parentName:"tr",align:null},"--terra-clinical-data-grid-column-header-sort-indicator-color")),(0,t.mdx)("tr",{parentName:"tbody"},(0,t.mdx)("td",{parentName:"tr",align:null},"--terra-clinical-data-grid-row-selection-icon"),(0,t.mdx)("td",{parentName:"tr",align:null},"--terra-clinical-data-grid-row-selection-icon-background")),(0,t.mdx)("tr",{parentName:"tbody"},(0,t.mdx)("td",{parentName:"tr",align:null},"--terra-clinical-data-grid-selected-row-selection-icon"),(0,t.mdx)("td",{parentName:"tr",align:null},"--terra-clinical-data-grid-selected-row-selection-icon-background")),(0,t.mdx)("tr",{parentName:"tbody"},(0,t.mdx)("td",{parentName:"tr",align:null},"--terra-clinical-data-grid-scrollbar-color"),(0,t.mdx)("td",{parentName:"tr",align:null},"--terra-clinical-data-grid-scrollbar-handle-background-color")),(0,t.mdx)("tr",{parentName:"tbody"},(0,t.mdx)("td",{parentName:"tr",align:null},"--terra-clinical-data-grid-scrollbar-border-radius"),(0,t.mdx)("td",{parentName:"tr",align:null},"--terra-clinical-data-grid-scrollbar-handle-border-radius")),(0,t.mdx)("tr",{parentName:"tbody"},(0,t.mdx)("td",{parentName:"tr",align:null},"--terra-clinical-data-grid-scrollbar-active-color"),(0,t.mdx)("td",{parentName:"tr",align:null},"--terra-clinical-data-grid-scrollbar-handle-active-background-color")))),(0,t.mdx)("h4",{id:"added"},"Added"),(0,t.mdx)("ul",null,(0,t.mdx)("li",{parentName:"ul"},"--terra-clinical-data-grid-cell-focus-background-color"),(0,t.mdx)("li",{parentName:"ul"},"--terra-clinical-data-grid-cell-focus-box-shadow"),(0,t.mdx)("li",{parentName:"ul"},"--terra-clinical-data-grid-cell-active-box-shadow"),(0,t.mdx)("li",{parentName:"ul"},"--terra-clinical-data-grid-cell-selected-box-shadow"),(0,t.mdx)("li",{parentName:"ul"},"--terra-clinical-data-grid-cell-selected-focus-background-color"),(0,t.mdx)("li",{parentName:"ul"},"--terra-clinical-data-grid-cell-selected-focus-box-shadow"),(0,t.mdx)("li",{parentName:"ul"},"--terra-clinical-data-grid-section-header-border-top"),(0,t.mdx)("li",{parentName:"ul"},"--terra-clinical-data-grid-section-header-color"),(0,t.mdx)("li",{parentName:"ul"},"--terra-clinical-data-grid-section-header-collapsible-icon-color"),(0,t.mdx)("li",{parentName:"ul"},"--terra-clinical-data-grid-section-header-focus-box-shadow")))}m.isMDXComponent=!0},70279:function(a,e,r){r.d(e,{C:function(){return l}});var t=r(67294),n=r(22863),l=function(a){var e=a.url;return t.createElement(n.Z,{src:"https://github.com/cerner/terra-clinical/tree/main/packages/terra-clinical-data-grid",name:"terra-clinical-data-grid",version:"2.49.0",url:e})}},17422:function(a,e,r){r.r(e),e.default={badge:"Badges-module__badge___vex-+","badge-container":"Badges-module__badge-container___B13Mv","badge-name":"Badges-module__badge-name___jkN0m","badge-version":"Badges-module__badge-version___agZ+P"}}}]);