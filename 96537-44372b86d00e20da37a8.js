"use strict";(self.webpackChunkterra_ui=self.webpackChunkterra_ui||[]).push([[96537,17711,40092,72949,95330,7235,29616,62473,84854,38663,61044,92260,69879,47498,25117,81784,59403,37022,14641,71308,48927,98463,20844],{55713:function(e,t,r){var a=r(24994);t.A=void 0;var l=a(r(96540)),i=a(r(5556)),d=a(r(67967)),n=a(r(25642)),m=d.default.bind(n.default),o={name:i.default.string.isRequired,src:i.default.string,url:i.default.string,version:i.default.string.isRequired},s=function(e){var t=e.src,r=e.name,a=e.url,i=e.version,d=l.default.createElement("a",{className:m("badge"),href:a||"https://www.npmjs.org/package/".concat(r,"/v/").concat(i)},l.default.createElement("span",{className:m("badge-name")},a?"package":"npm"),l.default.createElement("span",{className:m("badge-version")},"v".concat(i))),n=t?l.default.createElement("a",{className:m("badge"),href:t},l.default.createElement("span",{className:m("badge-name")},"github"),l.default.createElement("span",{className:m("badge-version")},"source")):void 0;return l.default.createElement("div",{className:m("badge-container")},d,n)};s.propTypes=o;t.A=s},96537:function(e,t,r){r.r(t),r.d(t,{default:function(){return s}});r(96540);var a=r(36665),l=r(86273),i=["components"];function d(){return d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},d.apply(this,arguments)}function n(e,t){if(null==e)return{};var r,a,l=function(e,t){if(null==e)return{};var r,a,l={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var m={},o="wrapper";function s(e){var t=e.components,r=n(e,i);return(0,a.mdx)(o,d({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)(l.E,{mdxType:"Badge"}),(0,a.mdx)("h1",{id:"terra-list-theme-upgrade-guide"},"Terra List Theme Upgrade Guide"),(0,a.mdx)("h2",{id:"changes-from-version-3-to-version-4"},"Changes from version 3 to version 4"),(0,a.mdx)("h3",{id:"changes-to-css-custom-properties"},"Changes to CSS Custom Properties"),(0,a.mdx)("h4",{id:"renamed"},"Renamed"),(0,a.mdx)("table",null,(0,a.mdx)("thead",{parentName:"table"},(0,a.mdx)("tr",{parentName:"thead"},(0,a.mdx)("th",{parentName:"tr",align:null},"Previous"),(0,a.mdx)("th",{parentName:"tr",align:null},"New"))),(0,a.mdx)("tbody",{parentName:"table"},(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null},"--terra-list-divider-border-top"),(0,a.mdx)("td",{parentName:"tr",align:null},"--terra-list-item-divider-border-top")),(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null},"--terra-list-last-divider-border-bottom"),(0,a.mdx)("td",{parentName:"tr",align:null},"--terra-list-item-last-divider-border-bottom")))),(0,a.mdx)("h4",{id:"removed"},"Removed"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},"--terra-list-item-chevron-margin-bottom"),(0,a.mdx)("li",{parentName:"ul"},"--terra-list-item-chevron-margin-left"),(0,a.mdx)("li",{parentName:"ul"},"--terra-list-item-chevron-margin-right"),(0,a.mdx)("li",{parentName:"ul"},"--terra-list-item-chevron-margin-top")),(0,a.mdx)("h4",{id:"added"},"Added"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},"--terra-list-item-min-height"),(0,a.mdx)("li",{parentName:"ul"},"--terra-list-item-chevron-padding-right"),(0,a.mdx)("li",{parentName:"ul"},"--terra-list-item-focus-outline"),(0,a.mdx)("li",{parentName:"ul"},"--terra-list-item-focus-border-color"),(0,a.mdx)("li",{parentName:"ul"},"--terra-list-item-focus-box-shadow"),(0,a.mdx)("li",{parentName:"ul"},"--terra-list-section-header-background-color"),(0,a.mdx)("li",{parentName:"ul"},"--terra-list-section-header-border-bottom"),(0,a.mdx)("li",{parentName:"ul"},"--terra-list-section-header-padding-bottom"),(0,a.mdx)("li",{parentName:"ul"},"--terra-list-section-header-padding-left"),(0,a.mdx)("li",{parentName:"ul"},"--terra-list-section-header-padding-top"),(0,a.mdx)("li",{parentName:"ul"},"--terra-list-section-header-title-color"),(0,a.mdx)("li",{parentName:"ul"},"--terra-list-section-header-title-font-size"),(0,a.mdx)("li",{parentName:"ul"},"--terra-list-section-header-title-line-height"),(0,a.mdx)("li",{parentName:"ul"},"--terra-list-section-header-collapsible-padding-left"),(0,a.mdx)("li",{parentName:"ul"},"--terra-list-section-header-focus-background-color"),(0,a.mdx)("li",{parentName:"ul"},"--terra-list-section-header-focus-box-shadow"),(0,a.mdx)("li",{parentName:"ul"},"--terra-list-section-header-focus-outline"),(0,a.mdx)("li",{parentName:"ul"},"--terra-list-section-header-hover-active-background-color"),(0,a.mdx)("li",{parentName:"ul"},"--terra-list-section-header-start-padding-right"),(0,a.mdx)("li",{parentName:"ul"},"--terra-list-subsection-header-background-color"),(0,a.mdx)("li",{parentName:"ul"},"--terra-list-subsection-header-border-bottom"),(0,a.mdx)("li",{parentName:"ul"},"--terra-list-subsection-header-padding-bottom"),(0,a.mdx)("li",{parentName:"ul"},"--terra-list-subsection-header-padding-left"),(0,a.mdx)("li",{parentName:"ul"},"--terra-list-subsection-header-padding-top"),(0,a.mdx)("li",{parentName:"ul"},"--terra-list-subsection-header-title-color"),(0,a.mdx)("li",{parentName:"ul"},"--terra-list-subsection-header-padding-top"),(0,a.mdx)("li",{parentName:"ul"},"--terra-list-subsection-header-title-font-size"),(0,a.mdx)("li",{parentName:"ul"},"--terra-list-subsection-header-title-line-height"),(0,a.mdx)("li",{parentName:"ul"},"--terra-list-subsection-header-collapsible-padding-left"),(0,a.mdx)("li",{parentName:"ul"},"--terra-list-subsection-header-focus-background-color"),(0,a.mdx)("li",{parentName:"ul"},"--terra-list-subsection-header-focus-box-shadow"),(0,a.mdx)("li",{parentName:"ul"},"--terra-list-subsection-header-focus-outline"),(0,a.mdx)("li",{parentName:"ul"},"--terra-list-subsection-header-hover-active-background-color"),(0,a.mdx)("li",{parentName:"ul"},"--terra-list-subsection-header-start-padding-right"),(0,a.mdx)("li",{parentName:"ul"},"--terra-list-standard-item-fill-line-height"),(0,a.mdx)("li",{parentName:"ul"},"--terra-list-standard-item-fill-padding-bottom"),(0,a.mdx)("li",{parentName:"ul"},"--terra-list-standard-item-fill-padding-left"),(0,a.mdx)("li",{parentName:"ul"},"--terra-list-standard-item-fill-padding-right"),(0,a.mdx)("li",{parentName:"ul"},"--terra-list-standard-item-fill-padding-top"),(0,a.mdx)("li",{parentName:"ul"},"--terra-list-compact-item-fill-line-height"),(0,a.mdx)("li",{parentName:"ul"},"--terra-list-compact-item-fill-padding-bottom"),(0,a.mdx)("li",{parentName:"ul"},"--terra-list-compact-item-fill-padding-left"),(0,a.mdx)("li",{parentName:"ul"},"--terra-list-compact-item-fill-padding-right"),(0,a.mdx)("li",{parentName:"ul"},"--terra-list-compact-item-fill-padding-top")),(0,a.mdx)("h2",{id:"changes-from-version-2-to-version-3"},"Changes from version 2 to version 3"),(0,a.mdx)("h3",{id:"changes-to-css-custom-properties-1"},"Changes to CSS Custom Properties"),(0,a.mdx)("h4",{id:"renamed-1"},"Renamed"),(0,a.mdx)("table",null,(0,a.mdx)("thead",{parentName:"table"},(0,a.mdx)("tr",{parentName:"thead"},(0,a.mdx)("th",{parentName:"tr",align:null},"Previous"),(0,a.mdx)("th",{parentName:"tr",align:null},"New"))),(0,a.mdx)("tbody",{parentName:"table"},(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null},"--terra-list-chevron-color"),(0,a.mdx)("td",{parentName:"tr",align:null},"--terra-list-item-chevron-color")),(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null},"--terra-list-item-selected-divider-color"),(0,a.mdx)("td",{parentName:"tr",align:null},"--terra-list-item-selected-divider-border-color")),(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null},"--terra-list-item-selected-divider-color"),(0,a.mdx)("td",{parentName:"tr",align:null},"--terra-list-item-selected-divider-border-top-color")),(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null},"--terra-list-item-selected-hover-background-color"),(0,a.mdx)("td",{parentName:"tr",align:null},"--terra-list-item-selected-focus-background-color")))),(0,a.mdx)("h4",{id:"removed-1"},"Removed"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},"--terra-list-divider-border")),(0,a.mdx)("h4",{id:"added-1"},"Added"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},"--terra-list-divider-border-top"),(0,a.mdx)("li",{parentName:"ul"},"--terra-list-last-divider-border-bottom"),(0,a.mdx)("li",{parentName:"ul"},"--terra-list-item-chevron-margin-bottom"),(0,a.mdx)("li",{parentName:"ul"},"--terra-list-item-chevron-margin-left"),(0,a.mdx)("li",{parentName:"ul"},"--terra-list-item-chevron-margin-right"),(0,a.mdx)("li",{parentName:"ul"},"--terra-list-item-chevron-margin-top"),(0,a.mdx)("li",{parentName:"ul"},"--terra-list-item-chevron-height"),(0,a.mdx)("li",{parentName:"ul"},"--terra-list-item-chevron-width"),(0,a.mdx)("li",{parentName:"ul"},"--terra-list-item-selected-chevron-color")))}s.isMDXComponent=!0},86273:function(e,t,r){r.d(t,{E:function(){return i}});var a=r(96540),l=r(55713),i=function(e){var t=e.url;return a.createElement(l.A,{src:"https://github.com/cerner/terra-core/tree/main/packages/terra-list",name:"terra-list",version:"4.73.0",url:t})}},25642:function(e,t,r){r.r(t),t.default={badge:"Badges-module__badge___vex-+","badge-container":"Badges-module__badge-container___B13Mv","badge-name":"Badges-module__badge-name___jkN0m","badge-version":"Badges-module__badge-version___agZ+P"}}}]);