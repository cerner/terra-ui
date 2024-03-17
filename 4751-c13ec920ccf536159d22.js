"use strict";(self.webpackChunkterra_ui=self.webpackChunkterra_ui||[]).push([[4751,17711,40092,72949,95330,7235,29616,62473,84854,38663,61044,92260,69879,47498,25117,81784,59403,37022,14641,71308,48927,98463,20844],{55713:function(e,t,a){var n=a(24994);t.A=void 0;var r=n(a(96540)),o=n(a(5556)),s=n(a(67967)),i=n(a(25642)),d=s.default.bind(i.default),l={name:o.default.string.isRequired,src:o.default.string,url:o.default.string,version:o.default.string.isRequired},u=function(e){var t=e.src,a=e.name,n=e.url,o=e.version,s=r.default.createElement("a",{className:d("badge"),href:n||"https://www.npmjs.org/package/".concat(a,"/v/").concat(o)},r.default.createElement("span",{className:d("badge-name")},n?"package":"npm"),r.default.createElement("span",{className:d("badge-version")},"v".concat(o))),i=t?r.default.createElement("a",{className:d("badge"),href:t},r.default.createElement("span",{className:d("badge-name")},"github"),r.default.createElement("span",{className:d("badge-version")},"source")):void 0;return r.default.createElement("div",{className:d("badge-container")},s,i)};u.propTypes=l;t.A=u},4751:function(e,t,a){a.r(t),a.d(t,{default:function(){return u}});a(96540);var n=a(36665),r=a(92410),o=["components"];function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},s.apply(this,arguments)}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d={},l="wrapper";function u(e){var t=e.components,a=i(e,o);return(0,n.mdx)(l,s({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.mdx)(r.E,{mdxType:"Badge"}),(0,n.mdx)("h1",{id:"keyboard-shortcuts-for-terra-date-input"},"Keyboard Shortcuts for Terra Date Input"),(0,n.mdx)("p",null,"The Terra Date Input offers additional functionality with specific keyboard shortcuts to save time when interacting with date inputs."),(0,n.mdx)("p",null,"Pressing any of the supported keys while the input is in focus will populate the inputs with the listed shortcut response."),(0,n.mdx)("table",null,(0,n.mdx)("thead",{parentName:"table"},(0,n.mdx)("tr",{parentName:"thead"},(0,n.mdx)("th",{parentName:"tr",align:null},"Key / Sequence"),(0,n.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,n.mdx)("tbody",{parentName:"table"},(0,n.mdx)("tr",{parentName:"tbody"},(0,n.mdx)("td",{parentName:"tr",align:null},"T"),(0,n.mdx)("td",{parentName:"tr",align:null},"Sets the date value to the current date (Today).")),(0,n.mdx)("tr",{parentName:"tbody"},(0,n.mdx)("td",{parentName:"tr",align:null},"-"),(0,n.mdx)("td",{parentName:"tr",align:null},"Decrements the date value by 1 day. If blank or not a valid date, input will set value to Yesterday.")),(0,n.mdx)("tr",{parentName:"tbody"},(0,n.mdx)("td",{parentName:"tr",align:null},"+"),(0,n.mdx)("td",{parentName:"tr",align:null},"Increments the date value by 1 day. If blank or not a valid date, input will set value to Tomorrow.")))),(0,n.mdx)("p",null,(0,n.mdx)("em",{parentName:"p"},"Note: For any key listed, pressing the designated keyboard character key is not specific to uppercase or lowercase and works for both cases (e.g. if capslock or shift key is also being applied). Uppercase-only usage is not required.")),(0,n.mdx)("h2",{id:"release-notes-for-specific-versions"},"Release notes for specific versions"),(0,n.mdx)("h3",{id:"1320"},"1.32.0"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"Initial release. This adds the key listeners to the day number input and the year number input, but does not add the listeners or shortcut responses to the month dropdown select input, since pressing keys with the dropdown in focus will contradict with the select's existing behavior of attempting to match the localized month name strings. This will continue to be explored with how to best add the keyboard shortcut behavior for the month dropdown potentially in a future release.")))}u.isMDXComponent=!0},92410:function(e,t,a){a.d(t,{E:function(){return o}});var n=a(96540),r=a(55713),o=function(e){var t=e.url;return n.createElement(r.A,{src:"https://github.com/cerner/terra-framework/tree/main/packages/terra-date-input",name:"terra-date-input",version:"1.55.0",url:t})}},25642:function(e,t,a){a.r(t),t.default={badge:"Badges-module__badge___vex-+","badge-container":"Badges-module__badge-container___B13Mv","badge-name":"Badges-module__badge-name___jkN0m","badge-version":"Badges-module__badge-version___agZ+P"}}}]);