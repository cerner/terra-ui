"use strict";(self.webpackChunkterra_ui=self.webpackChunkterra_ui||[]).push([[18305,17711,40092,72949,95330,7235,29616,62473,84854,38663,61044,92260,69879,47498,25117,81784,59403,37022,14641,71308,48927,98463,20844,53701],{55713:function(a,t,r){var e=r(24994);t.A=void 0;var n=e(r(96540)),l=e(r(5556)),d=e(r(67967)),o=e(r(25642)),m=d.default.bind(o.default),u={name:l.default.string.isRequired,src:l.default.string,url:l.default.string,version:l.default.string.isRequired},s=function(a){var t=a.src,r=a.name,e=a.url,l=a.version,d=n.default.createElement("a",{className:m("badge"),href:e||"https://www.npmjs.org/package/".concat(r,"/v/").concat(l)},n.default.createElement("span",{className:m("badge-name")},e?"package":"npm"),n.default.createElement("span",{className:m("badge-version")},"v".concat(l))),o=t?n.default.createElement("a",{className:m("badge"),href:t},n.default.createElement("span",{className:m("badge-name")},"github"),n.default.createElement("span",{className:m("badge-version")},"source")):void 0;return n.default.createElement("div",{className:m("badge-container")},d,o)};s.propTypes=u;t.A=s},18305:function(a,t,r){r.r(t),r.d(t,{default:function(){return s}});r(96540);var e=r(36665),n=r(39053),l=["components"];function d(){return d=Object.assign?Object.assign.bind():function(a){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var e in r)Object.prototype.hasOwnProperty.call(r,e)&&(a[e]=r[e])}return a},d.apply(this,arguments)}function o(a,t){if(null==a)return{};var r,e,n=function(a,t){if(null==a)return{};var r,e,n={},l=Object.keys(a);for(e=0;e<l.length;e++)r=l[e],t.indexOf(r)>=0||(n[r]=a[r]);return n}(a,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(a);for(e=0;e<l.length;e++)r=l[e],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(a,r)&&(n[r]=a[r])}return n}var m={},u="wrapper";function s(a){var t=a.components,r=o(a,l);return(0,e.mdx)(u,d({},m,r,{components:t,mdxType:"MDXLayout"}),(0,e.mdx)(n.E,{mdxType:"Badge"}),(0,e.mdx)("h1",{id:"terra-tabs-upgrade-guide"},"Terra Tabs Upgrade Guide"),(0,e.mdx)("h2",{id:"changes-from-version-6-to-version-7"},"Changes from version 6 to version 7"),(0,e.mdx)("h3",{id:"removed-props"},"Removed props"),(0,e.mdx)("ul",null,(0,e.mdx)("li",{parentName:"ul"},"Removed responsiveTo")),(0,e.mdx)("h2",{id:"changes-from-version-3-to-version-4"},"Changes from version 3 to version 4"),(0,e.mdx)("h3",{id:"changes-to-css-custom-properties"},"Changes to CSS Custom Properties"),(0,e.mdx)("h4",{id:"renamed"},"Renamed"),(0,e.mdx)("table",null,(0,e.mdx)("thead",{parentName:"table"},(0,e.mdx)("tr",{parentName:"thead"},(0,e.mdx)("th",{parentName:"tr",align:null},"Previous"),(0,e.mdx)("th",{parentName:"tr",align:null},"New"))),(0,e.mdx)("tbody",{parentName:"table"},(0,e.mdx)("tr",{parentName:"tbody"},(0,e.mdx)("td",{parentName:"tr",align:null},"--terra-tabs-collapsed-modular-tab-bar-border-color"),(0,e.mdx)("td",{parentName:"tr",align:null},"--terra-tabs-collapsed-modular-tab-bar-border-bottom-color")),(0,e.mdx)("tr",{parentName:"tbody"},(0,e.mdx)("td",{parentName:"tr",align:null},"--terra-tabs-collapsed-modular-tab-bar-border-width"),(0,e.mdx)("td",{parentName:"tr",align:null},"--terra-tabs-collapsed-modular-tab-bar-border-bottom-width")),(0,e.mdx)("tr",{parentName:"tbody"},(0,e.mdx)("td",{parentName:"tr",align:null},"--terra-tabs-modular-color"),(0,e.mdx)("td",{parentName:"tr",align:null},"--terra-tabs-modular-active-color")),(0,e.mdx)("tr",{parentName:"tbody"},(0,e.mdx)("td",{parentName:"tr",align:null},"--terra-tabs-modular-color"),(0,e.mdx)("td",{parentName:"tr",align:null},"--terra-tabs-modular-hover-color")),(0,e.mdx)("tr",{parentName:"tbody"},(0,e.mdx)("td",{parentName:"tr",align:null},"--terra-tabs-modular-tab-bar-border-color"),(0,e.mdx)("td",{parentName:"tr",align:null},"--terra-tabs-modular-tab-bar-border-bottom-color")),(0,e.mdx)("tr",{parentName:"tbody"},(0,e.mdx)("td",{parentName:"tr",align:null},"--terra-tabs-modular-tab-bar-border-width"),(0,e.mdx)("td",{parentName:"tr",align:null},"--terra-tabs-modular-tab-bar-border-bottom-width")),(0,e.mdx)("tr",{parentName:"tbody"},(0,e.mdx)("td",{parentName:"tr",align:null},"--terra-tabs-modular-disabled-color"),(0,e.mdx)("td",{parentName:"tr",align:null},"--terra-tabs-modular-disabled-hover-color")),(0,e.mdx)("tr",{parentName:"tbody"},(0,e.mdx)("td",{parentName:"tr",align:null},"--terra-tabs-modular-background-image"),(0,e.mdx)("td",{parentName:"tr",align:null},"--terra-tabs-modular-active-focus-background-image")),(0,e.mdx)("tr",{parentName:"tbody"},(0,e.mdx)("td",{parentName:"tr",align:null},"--terra-tabs-modular-focus-border-radius"),(0,e.mdx)("td",{parentName:"tr",align:null},"--terra-tabs-modular-active-focus-border-radius")),(0,e.mdx)("tr",{parentName:"tbody"},(0,e.mdx)("td",{parentName:"tr",align:null},"--terra-tabs-keyboard-focus-rtl-box-shadow"),(0,e.mdx)("td",{parentName:"tr",align:null},"--terra-tabs-active-focus-rtl-box-shadow")),(0,e.mdx)("tr",{parentName:"tbody"},(0,e.mdx)("td",{parentName:"tr",align:null},"--terra-tabs-keyboard-focus-ltr-box-shadow"),(0,e.mdx)("td",{parentName:"tr",align:null},"--terra-tabs-active-focus-ltr-box-shadow")),(0,e.mdx)("tr",{parentName:"tbody"},(0,e.mdx)("td",{parentName:"tr",align:null},"--terra-tabs-modular-selection-bar-color"),(0,e.mdx)("td",{parentName:"tr",align:null},"--terra-tabs-modular-selection-bar-background-color")),(0,e.mdx)("tr",{parentName:"tbody"},(0,e.mdx)("td",{parentName:"tr",align:null},"--terra-tabs-structural-collapsed-menu-bar-border-color"),(0,e.mdx)("td",{parentName:"tr",align:null},"--terra-tabs-structural-collapsed-border-bottom-color")),(0,e.mdx)("tr",{parentName:"tbody"},(0,e.mdx)("td",{parentName:"tr",align:null},"--terra-tabs-structural-collapsed-menu-bar-border-radius"),(0,e.mdx)("td",{parentName:"tr",align:null},"--terra-tabs-structural-collapsed-border-radius")),(0,e.mdx)("tr",{parentName:"tbody"},(0,e.mdx)("td",{parentName:"tr",align:null},"--terra-tabs-structural-tab-bar-border-color"),(0,e.mdx)("td",{parentName:"tr",align:null},"--terra-tabs-structural-tab-bar-border-bottom-color")),(0,e.mdx)("tr",{parentName:"tbody"},(0,e.mdx)("td",{parentName:"tr",align:null},"--terra-tabs-structural-tab-bar-border-width"),(0,e.mdx)("td",{parentName:"tr",align:null},"--terra-tabs-structural-tab-bar-border-bottom-width")),(0,e.mdx)("tr",{parentName:"tbody"},(0,e.mdx)("td",{parentName:"tr",align:null},"--terra-tabs-structural-margin-between-tabs"),(0,e.mdx)("td",{parentName:"tr",align:null},"--terra-tabs-structural-between-tabs-margin-left")),(0,e.mdx)("tr",{parentName:"tbody"},(0,e.mdx)("td",{parentName:"tr",align:null},"--terra-tabs-structural-transition-timing"),(0,e.mdx)("td",{parentName:"tr",align:null},"--terra-tabs-structural-transition-timing-function")),(0,e.mdx)("tr",{parentName:"tbody"},(0,e.mdx)("td",{parentName:"tr",align:null},"--terra-tabs-structural-transition-duration"),(0,e.mdx)("td",{parentName:"tr",align:null},"--terra-tabs-structural-active-before-transition-duration")),(0,e.mdx)("tr",{parentName:"tbody"},(0,e.mdx)("td",{parentName:"tr",align:null},"--terra-tabs-structural-transition-timing"),(0,e.mdx)("td",{parentName:"tr",align:null},"--terra-tabs-structural-active-before-transition-timing-function")),(0,e.mdx)("tr",{parentName:"tbody"},(0,e.mdx)("td",{parentName:"tr",align:null},"--terra-tabs-structural-disabled-background-color"),(0,e.mdx)("td",{parentName:"tr",align:null},"--terra-tabs-structural-disabled-hover-background-color")),(0,e.mdx)("tr",{parentName:"tbody"},(0,e.mdx)("td",{parentName:"tr",align:null},"--terra-tabs-structural-disabled-color"),(0,e.mdx)("td",{parentName:"tr",align:null},"--terra-tabs-structural-disabled-hover-color")),(0,e.mdx)("tr",{parentName:"tbody"},(0,e.mdx)("td",{parentName:"tr",align:null},"--terra-tabs-structural-disabled-opacity"),(0,e.mdx)("td",{parentName:"tr",align:null},"--terra-tabs-structural-disabled-hover-opacity")),(0,e.mdx)("tr",{parentName:"tbody"},(0,e.mdx)("td",{parentName:"tr",align:null},"--terra-tabs-structural-background-image"),(0,e.mdx)("td",{parentName:"tr",align:null},"--terra-tabs-structural-active-focus-background-image")),(0,e.mdx)("tr",{parentName:"tbody"},(0,e.mdx)("td",{parentName:"tr",align:null},"--terra-tabs-keyboard-focus-rtl-box-shadow"),(0,e.mdx)("td",{parentName:"tr",align:null},"--terra-tabs-keyboard-active-focus-rtl-box-shadow")),(0,e.mdx)("tr",{parentName:"tbody"},(0,e.mdx)("td",{parentName:"tr",align:null},"--terra-tabs-keyboard-focus-ltr-box-shadow"),(0,e.mdx)("td",{parentName:"tr",align:null},"--terra-tabs-keyboard-active-focus-ltr-box-shadow")),(0,e.mdx)("tr",{parentName:"tbody"},(0,e.mdx)("td",{parentName:"tr",align:null},"--terra-tabs-label-margin-next-to-icon"),(0,e.mdx)("td",{parentName:"tr",align:null},"--terra-tabs-label-next-to-icon-margin-left")),(0,e.mdx)("tr",{parentName:"tbody"},(0,e.mdx)("td",{parentName:"tr",align:null},"--terra-tabs-menu-arrow-left-margin"),(0,e.mdx)("td",{parentName:"tr",align:null},"--terra-tabs-menu-arrow-margin-left")))),(0,e.mdx)("h4",{id:"added"},"Added"),(0,e.mdx)("ul",null,(0,e.mdx)("li",{parentName:"ul"},"--terra-tabs-structural-content-background-image"),(0,e.mdx)("li",{parentName:"ul"},"--terra-tabs-structural-collapsed-border-bottom-width"),(0,e.mdx)("li",{parentName:"ul"},"--terra-tabs-structural-collapsed-position"),(0,e.mdx)("li",{parentName:"ul"},"--terra-tabs-structural-collapsed-before-content-background"),(0,e.mdx)("li",{parentName:"ul"},"--terra-tabs-structural-collapsed-before-content-height"),(0,e.mdx)("li",{parentName:"ul"},"--terra-tabs-structural-extended-tabs-border-radius"),(0,e.mdx)("li",{parentName:"ul"},"--terra-tabs-structural-active-background-image"),(0,e.mdx)("li",{parentName:"ul"},"--terra-tabs-structural-focus-background-image"),(0,e.mdx)("li",{parentName:"ul"},"--terra-tabs-structural-collapsed-menu-bar-focus-border-bottom-color"),(0,e.mdx)("li",{parentName:"ul"},"--terra-tabs-structural-collapsed-menu-bar-focus-border-bottom-width")))}s.isMDXComponent=!0},39053:function(a,t,r){r.d(t,{E:function(){return l}});var e=r(96540),n=r(55713),l=function(a){var t=a.url;return e.createElement(n.A,{src:"https://github.com/cerner/terra-framework/tree/main/packages/terra-tabs",name:"terra-tabs",version:"7.22.0",url:t})}},25642:function(a,t,r){r.r(t),t.default={badge:"Badges-module__badge___vex-+","badge-container":"Badges-module__badge-container___B13Mv","badge-name":"Badges-module__badge-name___jkN0m","badge-version":"Badges-module__badge-version___agZ+P"}}}]);