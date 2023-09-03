"use strict";(self.webpackChunkterra_ui=self.webpackChunkterra_ui||[]).push([[64491,45627,85565,3353,5161,45865,85355,3193,4845,46647,85161],{22863:function(a,r,n){var e=n(64836);r.Z=void 0;var t=e(n(67294)),i=e(n(45697)),l=e(n(47166)),o=e(n(17422)),d=l.default.bind(o.default),m={name:i.default.string.isRequired,src:i.default.string,url:i.default.string,version:i.default.string.isRequired},p=function(a){var r=a.src,n=a.name,e=a.url,i=a.version,l=t.default.createElement("a",{className:d("badge"),href:e||"https://www.npmjs.org/package/".concat(n,"/v/").concat(i)},t.default.createElement("span",{className:d("badge-name")},e?"package":"npm"),t.default.createElement("span",{className:d("badge-version")},"v".concat(i))),o=r?t.default.createElement("a",{className:d("badge"),href:r},t.default.createElement("span",{className:d("badge-name")},"github"),t.default.createElement("span",{className:d("badge-version")},"source")):void 0;return t.default.createElement("div",{className:d("badge-container")},l,o)};p.propTypes=m;var g=p;r.Z=g},64491:function(a,r,n){n.r(r),n.d(r,{default:function(){return p}});n(67294);var e=n(81254),t=n(31400),i=["components"];function l(){return l=Object.assign?Object.assign.bind():function(a){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(a[e]=n[e])}return a},l.apply(this,arguments)}function o(a,r){if(null==a)return{};var n,e,t=function(a,r){if(null==a)return{};var n,e,t={},i=Object.keys(a);for(e=0;e<i.length;e++)n=i[e],r.indexOf(n)>=0||(t[n]=a[n]);return t}(a,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(a);for(e=0;e<i.length;e++)n=i[e],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(a,n)&&(t[n]=a[n])}return t}var d={},m="wrapper";function p(a){var r=a.components,n=o(a,i);return(0,e.mdx)(m,l({},d,n,{components:r,mdxType:"MDXLayout"}),(0,e.mdx)(t.C,{mdxType:"Badge"}),(0,e.mdx)("h1",{id:"terra-paginator-upgrade-guide"},"Terra Paginator Upgrade Guide"),(0,e.mdx)("h2",{id:"changes-from-version-1-to-version-2"},"Changes from version 1 to version 2"),(0,e.mdx)("h3",{id:"changes-to-css-custom-properties"},"Changes to CSS Custom Properties"),(0,e.mdx)("h4",{id:"renamed"},"Renamed"),(0,e.mdx)("table",null,(0,e.mdx)("thead",{parentName:"table"},(0,e.mdx)("tr",{parentName:"thead"},(0,e.mdx)("th",{parentName:"tr",align:null},"Previous"),(0,e.mdx)("th",{parentName:"tr",align:null},"New"))),(0,e.mdx)("tbody",{parentName:"table"},(0,e.mdx)("tr",{parentName:"tbody"},(0,e.mdx)("td",{parentName:"tr",align:null},"--terra-paginator-nav-link-foreground-color"),(0,e.mdx)("td",{parentName:"tr",align:null},"--terra-paginator-nav-link-color")),(0,e.mdx)("tr",{parentName:"tbody"},(0,e.mdx)("td",{parentName:"tr",align:null},"--terra-paginator-nav-link-background-hover"),(0,e.mdx)("td",{parentName:"tr",align:null},"--terra-paginator-nav-link-hover-background")),(0,e.mdx)("tr",{parentName:"tbody"},(0,e.mdx)("td",{parentName:"tr",align:null},"--terra-paginator-nav-link-foreground-color-hover"),(0,e.mdx)("td",{parentName:"tr",align:null},"--terra-paginator-nav-link-hover-color")),(0,e.mdx)("tr",{parentName:"tbody"},(0,e.mdx)("td",{parentName:"tr",align:null},"--terra-paginator-nav-link-text-decoration-hover"),(0,e.mdx)("td",{parentName:"tr",align:null},"--terra-paginator-nav-link-hover-text-decoration")),(0,e.mdx)("tr",{parentName:"tbody"},(0,e.mdx)("td",{parentName:"tr",align:null},"--terra-paginator-nav-link-background-focus"),(0,e.mdx)("td",{parentName:"tr",align:null},"--terra-paginator-nav-link-focus-background")),(0,e.mdx)("tr",{parentName:"tbody"},(0,e.mdx)("td",{parentName:"tr",align:null},"--terra-paginator-nav-link-border-focus"),(0,e.mdx)("td",{parentName:"tr",align:null},"--terra-paginator-nav-link-focus-border")),(0,e.mdx)("tr",{parentName:"tbody"},(0,e.mdx)("td",{parentName:"tr",align:null},"--terra-paginator-nav-link-box-shadow-focus"),(0,e.mdx)("td",{parentName:"tr",align:null},"--terra-paginator-nav-link-focus-box-shadow")),(0,e.mdx)("tr",{parentName:"tbody"},(0,e.mdx)("td",{parentName:"tr",align:null},"--terra-paginator-nav-link-foreground-color-focus"),(0,e.mdx)("td",{parentName:"tr",align:null},"--terra-paginator-nav-link-focus-color")),(0,e.mdx)("tr",{parentName:"tbody"},(0,e.mdx)("td",{parentName:"tr",align:null},"--terra-paginator-nav-link-background-active"),(0,e.mdx)("td",{parentName:"tr",align:null},"--terra-paginator-nav-link-active-background")),(0,e.mdx)("tr",{parentName:"tbody"},(0,e.mdx)("td",{parentName:"tr",align:null},"--terra-paginator-nav-link-foreground-color-active"),(0,e.mdx)("td",{parentName:"tr",align:null},"--terra-paginator-nav-link-active-color")),(0,e.mdx)("tr",{parentName:"tbody"},(0,e.mdx)("td",{parentName:"tr",align:null},"--terra-paginator-nav-link-text-decoration-active"),(0,e.mdx)("td",{parentName:"tr",align:null},"--terra-paginator-nav-link-active-text-decoration")),(0,e.mdx)("tr",{parentName:"tbody"},(0,e.mdx)("td",{parentName:"tr",align:null},"--terra-paginator-nav-link-foreground-color-disabled"),(0,e.mdx)("td",{parentName:"tr",align:null},"--terra-paginator-nav-link-disabled-color")),(0,e.mdx)("tr",{parentName:"tbody"},(0,e.mdx)("td",{parentName:"tr",align:null},"--terra-paginator-nav-link-disabled-box-shadow-focus"),(0,e.mdx)("td",{parentName:"tr",align:null},"--terra-paginator-nav-link-disabled-focus-box-shadow")),(0,e.mdx)("tr",{parentName:"tbody"},(0,e.mdx)("td",{parentName:"tr",align:null},"--terra-paginator-nav-link-icon-previous"),(0,e.mdx)("td",{parentName:"tr",align:null},"--terra-paginator-nav-link-icon-previous-background")),(0,e.mdx)("tr",{parentName:"tbody"},(0,e.mdx)("td",{parentName:"tr",align:null},"--terra-paginator-nav-link-icon-previous-disabled"),(0,e.mdx)("td",{parentName:"tr",align:null},"--terra-paginator-nav-link-icon-previous-disabled-background")),(0,e.mdx)("tr",{parentName:"tbody"},(0,e.mdx)("td",{parentName:"tr",align:null},"--terra-paginator-nav-link-icon-next"),(0,e.mdx)("td",{parentName:"tr",align:null},"--terra-paginator-nav-link-icon-next-background")),(0,e.mdx)("tr",{parentName:"tbody"},(0,e.mdx)("td",{parentName:"tr",align:null},"--terra-paginator-nav-link-icon-next-disabled"),(0,e.mdx)("td",{parentName:"tr",align:null},"--terra-paginator-nav-link-icon-next-disabled-background")))),(0,e.mdx)("h4",{id:"added-200"},"Added 2.0.0"),(0,e.mdx)("ul",null,(0,e.mdx)("li",{parentName:"ul"},"--terra-paginator-progressive-nav-link-previous-margin-left"),(0,e.mdx)("li",{parentName:"ul"},"--terra-paginator-progressive-nav-link-previous-margin-right"),(0,e.mdx)("li",{parentName:"ul"},"--terra-paginator-progressive-nav-link-next-margin-left"),(0,e.mdx)("li",{parentName:"ul"},"--terra-paginator-progressive-nav-link-next-margin-right"),(0,e.mdx)("li",{parentName:"ul"},"--terra-paginator-nav-link-icon-height"),(0,e.mdx)("li",{parentName:"ul"},"--terra-paginator-nav-link-icon-width"),(0,e.mdx)("li",{parentName:"ul"},"--terra-paginator-nav-link-icon-previous-margin-right"),(0,e.mdx)("li",{parentName:"ul"},"--terra-paginator-nav-link-icon-next-margin-left")),(0,e.mdx)("h4",{id:"added-221x"},"Added ~2.21.x"),(0,e.mdx)("ul",null,(0,e.mdx)("li",{parentName:"ul"},"--terra-paginator-nav-link-background-color"),(0,e.mdx)("li",{parentName:"ul"},"--terra-paginator-nav-link-box-shadow"),(0,e.mdx)("li",{parentName:"ul"},"--terra-paginator-nav-link-font-size"),(0,e.mdx)("li",{parentName:"ul"},"--terra-paginator-nav-link-text-decoration"),(0,e.mdx)("li",{parentName:"ul"},"--terra-paginator-nav-link-hover-background-color"),(0,e.mdx)("li",{parentName:"ul"},"--terra-paginator-nav-link-hover-box-shadow"),(0,e.mdx)("li",{parentName:"ul"},"--terra-paginator-nav-link-hover-border"),(0,e.mdx)("li",{parentName:"ul"},"--terra-paginator-nav-link-active-background-color"),(0,e.mdx)("li",{parentName:"ul"},"--terra-paginator-nav-link-active-box-shadow"),(0,e.mdx)("li",{parentName:"ul"},"--terra-paginator-nav-link-active-border"),(0,e.mdx)("li",{parentName:"ul"},"--terra-paginator-nav-link-disabled-background-color"),(0,e.mdx)("li",{parentName:"ul"},"--terra-paginator-nav-link-disabled-box-shadow"),(0,e.mdx)("li",{parentName:"ul"},"--terra-paginator-nav-link-disabled-border"),(0,e.mdx)("li",{parentName:"ul"},"--terra-paginator-nav-link-disabled-opacity"),(0,e.mdx)("li",{parentName:"ul"},"--terra-paginator-nav-link-previous-padding-left"),(0,e.mdx)("li",{parentName:"ul"},"--terra-paginator-nav-link-previous-icon-only-margin-left"),(0,e.mdx)("li",{parentName:"ul"},"--terra-paginator-nav-link-previous-icon-only-margin-right"),(0,e.mdx)("li",{parentName:"ul"},"--terra-paginator-nav-link-next-padding-right"),(0,e.mdx)("li",{parentName:"ul"},"--terra-paginator-nav-link-next-icon-only-margin-left"),(0,e.mdx)("li",{parentName:"ul"},"--terra-paginator-nav-link-next-icon-only-margin-right"),(0,e.mdx)("li",{parentName:"ul"},"--terra-paginator-nav-link-icon-previous-background-image"),(0,e.mdx)("li",{parentName:"ul"},"--terra-paginator-nav-link-icon-previous-disabled-background-image"),(0,e.mdx)("li",{parentName:"ul"},"--terra-paginator-nav-link-icon-next-background-image"),(0,e.mdx)("li",{parentName:"ul"},"--terra-paginator-nav-link-icon-next-disabled-background-image")),(0,e.mdx)("h4",{id:"removed-221x"},"Removed ~2.21.x"),(0,e.mdx)("ul",null,(0,e.mdx)("li",{parentName:"ul"},"--terra-paginator-nav-link-background"),(0,e.mdx)("li",{parentName:"ul"},"--terra-paginator-nav-link-hover-background"),(0,e.mdx)("li",{parentName:"ul"},"--terra-paginator-nav-link-focus-background"),(0,e.mdx)("li",{parentName:"ul"},"--terra-paginator-nav-link-active-background"),(0,e.mdx)("li",{parentName:"ul"},"--terra-paginator-nav-link-disabled-background"),(0,e.mdx)("li",{parentName:"ul"},"--terra-paginator-nav-link-icon-previous-background"),(0,e.mdx)("li",{parentName:"ul"},"--terra-paginator-nav-link-icon-previous-disabled-background"),(0,e.mdx)("li",{parentName:"ul"},"--terra-paginator-nav-link-icon-next-background"),(0,e.mdx)("li",{parentName:"ul"},"--terra-paginator-nav-link-icon-next-disabled-background")))}p.isMDXComponent=!0},31400:function(a,r,n){n.d(r,{C:function(){return i}});var e=n(67294),t=n(22863),i=function(a){var r=a.url;return e.createElement(t.Z,{src:"https://github.com/cerner/terra-core/tree/main/packages/terra-paginator",name:"terra-paginator",version:"2.81.0",url:r})}},17422:function(a,r,n){n.r(r),r.default={badge:"Badges-module__badge___vex-+","badge-container":"Badges-module__badge-container___B13Mv","badge-name":"Badges-module__badge-name___jkN0m","badge-version":"Badges-module__badge-version___agZ+P"}}}]);