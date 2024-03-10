"use strict";(self.webpackChunkterra_ui=self.webpackChunkterra_ui||[]).push([[44693,17711,40092,72949,95330,7235,29616,62473,84854,38663,61044,92260,69879,47498,25117,81784,59403,37022,14641,71308,48927,98463,20844],{55713:function(e,t,a){var n=a(24994);t.A=void 0;var r=n(a(96540)),l=n(a(5556)),d=n(a(67967)),i=n(a(25642)),m=d.default.bind(i.default),o={name:l.default.string.isRequired,src:l.default.string,url:l.default.string,version:l.default.string.isRequired},u=function(e){var t=e.src,a=e.name,n=e.url,l=e.version,d=r.default.createElement("a",{className:m("badge"),href:n||"https://www.npmjs.org/package/".concat(a,"/v/").concat(l)},r.default.createElement("span",{className:m("badge-name")},n?"package":"npm"),r.default.createElement("span",{className:m("badge-version")},"v".concat(l))),i=t?r.default.createElement("a",{className:m("badge"),href:t},r.default.createElement("span",{className:m("badge-name")},"github"),r.default.createElement("span",{className:m("badge-version")},"source")):void 0;return r.default.createElement("div",{className:m("badge-container")},d,i)};u.propTypes=o;t.A=u},44693:function(e,t,a){a.r(t),a.d(t,{default:function(){return u}});a(96540);var n=a(36665),r=a(92988),l=["components"];function d(){return d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},d.apply(this,arguments)}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var m={},o="wrapper";function u(e){var t=e.components,a=i(e,l);return(0,n.mdx)(o,d({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.mdx)(r.E,{mdxType:"Badge"}),(0,n.mdx)("h1",{id:"keyboard-shortcuts-for-terra-date-time-picker"},"Keyboard Shortcuts for Terra Date Time Picker"),(0,n.mdx)("p",null,"The Terra Date Time Picker offers additional functionality with specific keyboard shortcuts to save time when interacting with date and time inputs in terra-date-time-picker."),(0,n.mdx)("p",null,(0,n.mdx)("em",{parentName:"p"},"Note: these commands assume a QWERTY keyboard layout. Other layouts will probably still work, but they have not yet been tested.")),(0,n.mdx)("p",null,"Pressing any of the supported keys while the input is in focus will populate the inputs with the listed shortcut response."),(0,n.mdx)("table",null,(0,n.mdx)("thead",{parentName:"table"},(0,n.mdx)("tr",{parentName:"thead"},(0,n.mdx)("th",{parentName:"tr",align:null},"Key / Sequence"),(0,n.mdx)("th",{parentName:"tr",align:null},"Input"),(0,n.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,n.mdx)("tbody",{parentName:"table"},(0,n.mdx)("tr",{parentName:"tbody"},(0,n.mdx)("td",{parentName:"tr",align:null},"T"),(0,n.mdx)("td",{parentName:"tr",align:null},"Date"),(0,n.mdx)("td",{parentName:"tr",align:null},"Sets the date value to the current date (Today).")),(0,n.mdx)("tr",{parentName:"tbody"},(0,n.mdx)("td",{parentName:"tr",align:null},"-"),(0,n.mdx)("td",{parentName:"tr",align:null},"Date"),(0,n.mdx)("td",{parentName:"tr",align:null},"Decrements the day value by 1 day. If blank or not a valid date, input will set value to current date minus 1 day.")),(0,n.mdx)("tr",{parentName:"tbody"},(0,n.mdx)("td",{parentName:"tr",align:null},"+"),(0,n.mdx)("td",{parentName:"tr",align:null},"Date"),(0,n.mdx)("td",{parentName:"tr",align:null},"Increments the day value by 1 day. If blank or not a valid time, input will set value to current date plus 1 day.")),(0,n.mdx)("tr",{parentName:"tbody"},(0,n.mdx)("td",{parentName:"tr",align:null},"N"),(0,n.mdx)("td",{parentName:"tr",align:null},"Time"),(0,n.mdx)("td",{parentName:"tr",align:null},"Sets the time value to the current time (Now). Also sets date to the current date if there is no date or invalid date")),(0,n.mdx)("tr",{parentName:"tbody"},(0,n.mdx)("td",{parentName:"tr",align:null},"-"),(0,n.mdx)("td",{parentName:"tr",align:null},"Time"),(0,n.mdx)("td",{parentName:"tr",align:null},"Decrements the minute value by 1 minute. If blank or not a valid time or date, input will set date to current date and value to current time minus 1 minute.")),(0,n.mdx)("tr",{parentName:"tbody"},(0,n.mdx)("td",{parentName:"tr",align:null},"+"),(0,n.mdx)("td",{parentName:"tr",align:null},"Time"),(0,n.mdx)("td",{parentName:"tr",align:null},"Increments the minute value by 1 minute. If blank or not a valid time or date, input will set date to current date and value to current time plus 1 minute.")),(0,n.mdx)("tr",{parentName:"tbody"},(0,n.mdx)("td",{parentName:"tr",align:null},"A"),(0,n.mdx)("td",{parentName:"tr",align:null},"Time"),(0,n.mdx)("td",{parentName:"tr",align:null},"In a 12 hour clock, sets meridiem to antemeridiem. If blank or not a valid time or date, input will set date to current date and value to midnight. If not a 12 hour clock, will do nothing.")),(0,n.mdx)("tr",{parentName:"tbody"},(0,n.mdx)("td",{parentName:"tr",align:null},"P"),(0,n.mdx)("td",{parentName:"tr",align:null},"Time"),(0,n.mdx)("td",{parentName:"tr",align:null},"In a 12 hour clock, sets meridiem to postmeridiem. If blank or not a valid time or date, input will set date to current date and value to noon. If not a 12 hour clock, will do nothing.")))),(0,n.mdx)("p",null,(0,n.mdx)("em",{parentName:"p"},"Note: For any key listed, pressing the designated keyboard character key is not specific to uppercase or lowercase and works for both cases (e.g. if capslock or shift key is also being applied). Uppercase-only usage is not required.")),(0,n.mdx)("h2",{id:"release-notes-for-specific-versions"},"Release notes for specific versions"),(0,n.mdx)("h3",{id:"4730"},"4.73.0"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"Initial keyboard shortcut release. This adds the key listeners to the day input, month input, and the year number input.")))}u.isMDXComponent=!0},92988:function(e,t,a){a.d(t,{E:function(){return l}});var n=a(96540),r=a(55713),l=function(e){var t=e.url;return n.createElement(r.A,{src:"https://github.com/cerner/terra-framework/tree/main/packages/terra-date-time-picker",name:"terra-date-time-picker",version:"4.111.0",url:t})}},25642:function(e,t,a){a.r(t),t.default={badge:"Badges-module__badge___vex-+","badge-container":"Badges-module__badge-container___B13Mv","badge-name":"Badges-module__badge-name___jkN0m","badge-version":"Badges-module__badge-version___agZ+P"}}}]);