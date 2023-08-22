"use strict";(self.webpackChunkterra_ui=self.webpackChunkterra_ui||[]).push([[56152,45627,37344,33667,96890,14041,27444,85565,3353,80858,17657,5161,45865,85355,3193,33315,4845,20444,26806,46647,85161,38681,17763,15318,40411,18101,38443,78996,39915,33442],{22863:function(e,n,t){var a=t(64836);n.Z=void 0;var l=a(t(67294)),r=a(t(45697)),d=a(t(47166)),i=a(t(17422)),o=d.default.bind(i.default),m={name:r.default.string.isRequired,src:r.default.string,url:r.default.string,version:r.default.string.isRequired},s=function(e){var n=e.src,t=e.name,a=e.url,r=e.version,d=l.default.createElement("a",{className:o("badge"),href:a||"https://www.npmjs.org/package/".concat(t,"/v/").concat(r)},l.default.createElement("span",{className:o("badge-name")},a?"package":"npm"),l.default.createElement("span",{className:o("badge-version")},"v".concat(r))),i=n?l.default.createElement("a",{className:o("badge"),href:n},l.default.createElement("span",{className:o("badge-name")},"github"),l.default.createElement("span",{className:o("badge-version")},"source")):void 0;return l.default.createElement("div",{className:o("badge-container")},d,i)};s.propTypes=m;var u=s;n.Z=u},40996:function(e,n,t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=m(t(67294)),l=m(t(45697)),r=m(t(47166)),d=m(t(50026)),i=m(t(66983)),o=["children"];function m(e){return e&&e.__esModule?e:{default:e}}function s(){return s=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},s.apply(this,arguments)}function u(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var c=r.default.bind(i.default),p=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},x=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},y={children:l.default.string},f=function(e){var n=e.children,t=u(e,o),l=a.default.useContext(d.default),i=(0,r.default)(c(["button",l.className]),t.className);return a.default.createElement("button",s({},t,{type:"button",className:i,onBlur:p,onMouseDown:x,"data-focus-styles-enabled":!0}),n)};f.propTypes=y;var g=f;n.default=g},59278:function(e,n,t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=o(t(67294)),l=o(t(45697)),r=o(t(47166)),d=o(t(50026)),i=o(t(30866));function o(e){return e&&e.__esModule?e:{default:e}}var m=r.default.bind(i.default),s={ariaLevel:l.default.oneOf(["2","3","4","5","6"]),children:l.default.node,variant:l.default.oneOf(["ux-recommendation","caution","deprecation","maintenance","important","not-supported"])},u=function(e){var n=e.ariaLevel,t=e.variant,l=e.children,r=a.default.useContext(d.default);return a.default.createElement("div",{className:m("notice",t,r.className)},a.default.createElement("div",{className:m("accessory"),"aria-hidden":"true",focusable:"false"}),a.default.createElement("div",{role:"heading",className:m("title"),"aria-level":n},a.default.createElement("span",null,function(e){return"ux-recommendation"===e?"UX Recommendation":"caution"===e?"Caution":"deprecation"===e?"Deprecation Notice":"maintenance"===e?"In Maintenance":"important"===e?"Important":"not-supported"===e?"Hazards for Incorrect Usage":"error"}(t))),a.default.createElement("div",{className:m("children")},function(e){return"not-supported"===e?a.default.createElement(a.default.Fragment,null,a.default.createElement("p",{className:m("paragraph")},"This component was designed and tested according to the documented implementation."),a.default.createElement("p",{className:m("paragraph")},"Using the component incorrectly:",a.default.createElement("ul",{className:m("list")},a.default.createElement("li",null,"will likely result in improper composition and create accessibility issues"),a.default.createElement("li",null,"may cause erratic or broken behaviors and styles"),a.default.createElement("li",null,a.default.createElement("strong",null,"will not be supported "),"or enhanced to allow for incorrect use")))):null}(t),a.default.Children.map(l,(function(e){return"string"==typeof e?a.default.createElement("p",null,e):e}))))};u.propTypes=s,u.defaultProps={ariaLevel:"2",variant:"important"};var c=u;n.default=c},47306:function(e,n,t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=s(t(67294)),l=s(t(45697)),r=s(t(94184)),d=s(t(47166)),i=s(t(50026)),o=s(t(42620)),m=["title"];function s(e){return e&&e.__esModule?e:{default:e}}function u(){return u=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},u.apply(this,arguments)}function c(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var p=d.default.bind(o.default),x={title:l.default.string},y=function(e){var n=e.title,t=c(e,m),l=a.default.useContext(i.default),d=(0,r.default)(p(["placeholder",l.className]),t.className),o=p(["inner"]);return a.default.createElement("div",u({},t,{className:d}),a.default.createElement("div",{className:o},a.default.createElement("p",{className:p("title")},n)))};y.propTypes=x,y.defaultProps={title:""};var f=y;n.default=f},34261:function(e,n,t){Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"Button",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(n,"Notice",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(n,"Placeholder",{enumerable:!0,get:function(){return l.default}});var a=d(t(59278)),l=d(t(47306)),r=d(t(40996));function d(e){return e&&e.__esModule?e:{default:e}}},42057:function(e,n,t){var a=t(64836);n.Z=void 0;var l=a(t(67294)),r=a(t(14312)),d=[{id:"Column-0",displayName:"Patient"},{id:"Column-1",displayName:"Location"},{id:"Column-2",displayName:"Illness Severity"},{id:"Column-3",displayName:"Visit"},{id:"Column-4",displayName:"Allergy"},{id:"Column-5",displayName:"Primary Contact"},{id:"Column-6",displayName:"Generic Order Counts"},{id:"Column-7",displayName:"Patient Age"},{id:"Column-8",displayName:"Medication History"},{id:"Column-9",displayName:"My Relationship"},{id:"Column-10",displayName:"Not Selectable",isSelectable:!1}],i=[{id:"1",cells:[{content:"Fleck, Arthur"},{content:"1007-MTN"},{content:"Unstable"},{content:"Inpatient, 2 months"},{content:""},{content:"Quinzell, Harleen"},{content:""},{isMasked:!0},{isMasked:!0},{content:"Admitting Physician"},{content:"",isSelectable:!1}]},{id:"2",cells:[{content:"Wayne, Bruce"},{content:"1007-MTN-DR"},{content:"Stable"},{content:"Outpatient, 2 days"},{content:"Phytochemicals"},{content:"Grayson, Richard"},{content:""},{content:""},{isMasked:!0},{content:"Admitting Physician"},{content:"",isSelectable:!1}]}],o=function(){var e=d,n=i;return l.default.createElement(r.default,{id:"default-terra-worklist-data-grid",overflowColumns:e,rows:n,rowHeaderIndex:0,ariaLabel:"Worklist Data Grid"})};n.Z=o},5116:function(e,n,t){var a=t(64836),l=t(18698);n.Z=void 0;var r=a(t(861)),d=a(t(38416)),i=a(t(27424)),o=function(e,n){if(!n&&e&&e.__esModule)return e;if(null===e||"object"!==l(e)&&"function"!=typeof e)return{default:e};var t=s(n);if(t&&t.has(e))return t.get(e);var a={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var d in e)if("default"!==d&&Object.prototype.hasOwnProperty.call(e,d)){var i=r?Object.getOwnPropertyDescriptor(e,d):null;i&&(i.get||i.set)?Object.defineProperty(a,d,i):a[d]=e[d]}a.default=e,t&&t.set(e,a);return a}(t(67294)),m=a(t(14312));function s(e){if("function"!=typeof WeakMap)return null;var n=new WeakMap,t=new WeakMap;return(s=function(e){return e?t:n})(e)}function u(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}var c=[{id:"Column-0",displayName:"Patient",sortIndicator:"ascending",hasError:!0},{id:"Column-1",displayName:"Location"},{id:"Column-2",displayName:"Illness Severity"},{id:"Column-3",displayName:"Visit"},{id:"Column-4",displayName:"Allergy",hasError:!0},{id:"Column-5",displayName:"Primary Contact"},{id:"Column-6",displayName:"Generic Order Counts"},{id:"Column-7",displayName:"Patient Age"},{id:"Column-8",displayName:"Medication History"},{id:"Column-9",displayName:"My Relationship"},{id:"Column-10",displayName:"Not Selectable",isSelectable:!1}],p=[{id:"1",cells:[{content:"Fleck, Arthur"},{content:"1007-MTN"},{content:"Unstable"},{content:"Inpatient, 2 months"},{content:""},{content:"Quinzell, Harleen"},{content:""},{isMasked:!0},{isMasked:!0},{content:"Admitting Physician"},{content:"",isSelectable:!1}]},{id:"2",cells:[{content:"Wayne, Bruce"},{content:"1007-MTN-DR"},{content:"Stable"},{content:"Outpatient, 2 days"},{content:"Phytochemicals"},{content:"Grayson, Richard"},{content:""},{content:""},{isMasked:!0},{content:"Admitting Physician"},{content:"",isSelectable:!1}]}],x=function(){var e=c,n=p,t=(0,o.useState)(e),a=(0,i.default)(t,2),l=a[0],s=a[1],x=(0,o.useState)(n),y=(0,i.default)(x,2),f=y[0],g=y[1];return o.default.createElement(m.default,{id:"default-terra-worklist-data-grid",overflowColumns:l,rows:f,rowHeaderIndex:0,rowHeight:"50px",defaultColumnWidth:100,columnHeaderHeight:"50px",onColumnSelect:function(e){var n=l.map((function(n,t){var a=function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?u(Object(t),!0).forEach((function(n){(0,d.default)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):u(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}({},n);if(n.id===e){a.sortIndicator="ascending"===n.sortIndicator?"descending":"ascending";var l=(0,r.default)(f);l.sort((function(e,n){var l=e.cells[t].content||"",r=n.cells[t].content||"";return"ascending"===a.sortIndicator?l.localeCompare(r):r.localeCompare(l)})),g(l)}else a.sortIndicator=void 0;return a}));s(n)},ariaLabel:"Worklist Data Grid"})};n.Z=x},84086:function(e,n,t){t.r(n),t.d(n,{default:function(){return N}});t(67294);var a=t(81254),l=t(34261),r=t(5101),d=t(78530),i=["components"];function o(){return o=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},o.apply(this,arguments)}function m(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var s={},u="wrapper";function c(e){var n=e.components,t=m(e,i);return(0,a.mdx)(u,o({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.mdx)(d.ZP,{mdxType:"PropsTable"},(0,a.mdx)(d.X2,{key:"ROW1",mdxType:"Row"},(0,a.mdx)(d.O,{mdxType:"PropNameCell"},"ariaLabelledBy"),(0,a.mdx)(d.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,a.mdx)(d.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(d.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(d.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"String that identifies the element (or elements) that labels the grid."))),(0,a.mdx)(d.X2,{key:"ROW2",mdxType:"Row"},(0,a.mdx)(d.O,{mdxType:"PropNameCell"},"ariaLabel"),(0,a.mdx)(d.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,a.mdx)(d.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(d.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(d.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"String that labels the grid for accessibility. If ariaLabelledBy is specified, ariaLabel will not be used."))),(0,a.mdx)(d.X2,{key:"ROW3",mdxType:"Row"},(0,a.mdx)(d.O,{mdxType:"PropNameCell"},"id"),(0,a.mdx)(d.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,a.mdx)(d.dS,{isRequired:!0,mdxType:"RequiredCell"}),(0,a.mdx)(d.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(d.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"String that will be used to identify the Grid. If multiple grids are on the same page, each grid should have\na unique id."))),(0,a.mdx)(d.X2,{key:"ROW4",mdxType:"Row"},(0,a.mdx)(d.O,{mdxType:"PropNameCell"},"rows"),(0,a.mdx)(d.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"arrayOf: [{\n  type: 'custom',\n}],\n"))),(0,a.mdx)(d.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(d.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(d.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Data for content in the body of the Grid. Rows will be rendered in the order given."))),(0,a.mdx)(d.X2,{key:"ROW5",mdxType:"Row"},(0,a.mdx)(d.O,{mdxType:"PropNameCell"},"pinnedColumns"),(0,a.mdx)(d.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"arrayOf: [{\n  type: 'custom',\n}],\n"))),(0,a.mdx)(d.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(d.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"[]\n"))),(0,a.mdx)(d.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Data for pinned columns. Pinned columns are the stickied leftmost columns of the grid.\nColumns will be presented in the order given."))),(0,a.mdx)(d.X2,{key:"ROW6",mdxType:"Row"},(0,a.mdx)(d.O,{mdxType:"PropNameCell"},"overflowColumns"),(0,a.mdx)(d.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"arrayOf: [{\n  type: 'custom',\n}],\n"))),(0,a.mdx)(d.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(d.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"[]\n"))),(0,a.mdx)(d.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Data for overflow columns. Overflow columns are rendered in the Worklist Data Grid's horizontal overflow.\nColumns will be presented in the order given."))),(0,a.mdx)(d.X2,{key:"ROW7",mdxType:"Row"},(0,a.mdx)(d.O,{mdxType:"PropNameCell"},"defaultColumnWidth"),(0,a.mdx)(d.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"number\n"))),(0,a.mdx)(d.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(d.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"200\n"))),(0,a.mdx)(d.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Number indicating the default column width in px. This value will be used if no overriding width value is provided on a per-column basis."))),(0,a.mdx)(d.X2,{key:"ROW8",mdxType:"Row"},(0,a.mdx)(d.O,{mdxType:"PropNameCell"},"columnHeaderHeight"),(0,a.mdx)(d.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,a.mdx)(d.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(d.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"'2.5rem'\n"))),(0,a.mdx)(d.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"String that specifies the column height. Any valid CSS height value is accepted."))),(0,a.mdx)(d.X2,{key:"ROW9",mdxType:"Row"},(0,a.mdx)(d.O,{mdxType:"PropNameCell"},"rowHeight"),(0,a.mdx)(d.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,a.mdx)(d.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(d.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"'2.5rem'\n"))),(0,a.mdx)(d.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"String that specifies the height for the rows in the grid. Any valid CSS value is accepted."))),(0,a.mdx)(d.X2,{key:"ROW10",mdxType:"Row"},(0,a.mdx)(d.O,{mdxType:"PropNameCell"},"rowHeaderIndex"),(0,a.mdx)(d.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"custom\n"))),(0,a.mdx)(d.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(d.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"0\n"))),(0,a.mdx)(d.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Number indicating the index of the column that represents row header. Index is 0 based and cannot exceed one less than the number of columns in the grid."))),(0,a.mdx)(d.X2,{key:"ROW11",mdxType:"Row"},(0,a.mdx)(d.O,{mdxType:"PropNameCell"},"onColumnResize"),(0,a.mdx)(d.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"func\n"))),(0,a.mdx)(d.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(d.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(d.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Function that is called when a resizable column is resized. Parameters:\n@param {string} columnId columnId\n@param {string} requestedWidth requestedWidth"))),(0,a.mdx)(d.X2,{key:"ROW12",mdxType:"Row"},(0,a.mdx)(d.O,{mdxType:"PropNameCell"},"onCellSelect"),(0,a.mdx)(d.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"func\n"))),(0,a.mdx)(d.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(d.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(d.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Callback function that is called when a selectable cell is selected. Parameters:\n@param {string} rowId rowId\n@param {string} columnId columnId"))),(0,a.mdx)(d.X2,{key:"ROW13",mdxType:"Row"},(0,a.mdx)(d.O,{mdxType:"PropNameCell"},"onRowSelect"),(0,a.mdx)(d.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"func\n"))),(0,a.mdx)(d.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(d.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(d.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Callback function that is called when a row is selected. Parameters:\n@param {string} rowId rowId"))),(0,a.mdx)(d.X2,{key:"ROW14",mdxType:"Row"},(0,a.mdx)(d.O,{mdxType:"PropNameCell"},"onRowSelectAll"),(0,a.mdx)(d.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"func\n"))),(0,a.mdx)(d.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(d.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(d.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Callback function that is called when all rows are selected. Parameters: none."))),(0,a.mdx)(d.X2,{key:"ROW15",mdxType:"Row"},(0,a.mdx)(d.O,{mdxType:"PropNameCell"},"onColumnSelect"),(0,a.mdx)(d.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"func\n"))),(0,a.mdx)(d.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(d.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(d.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Callback function that is called when a selectable column is selected. Parameters:\n@param {string} columnId columnId"))),(0,a.mdx)(d.X2,{key:"ROW16",mdxType:"Row"},(0,a.mdx)(d.O,{mdxType:"PropNameCell"},"onClearSelectedRows"),(0,a.mdx)(d.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"func\n"))),(0,a.mdx)(d.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(d.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(d.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Callback function that is called when all selected rows need to be unselected. Parameters: none."))),(0,a.mdx)(d.X2,{key:"ROW17",mdxType:"Row"},(0,a.mdx)(d.O,{mdxType:"PropNameCell"},"onDisableSelectableRows"),(0,a.mdx)(d.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"func\n"))),(0,a.mdx)(d.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(d.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(d.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Callback function that is called when no row is selected and the row selection mode needs to be disabled. Parameters: none."))),(0,a.mdx)(d.X2,{key:"ROW18",mdxType:"Row"},(0,a.mdx)(d.O,{mdxType:"PropNameCell"},"hasSelectableRows"),(0,a.mdx)(d.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,a.mdx)(d.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(d.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(d.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Boolean indicating whether or not the DataGrid should allow entire rows to be selected. An additional column will be\nrendered to allow for row selection to occur.")))))}c.isMDXComponent=!0;var p=t(18113),x=(t(5282),["components"]);function y(){return y=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},y.apply(this,arguments)}function f(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var g={},h="wrapper";function N(e){var n=e.components,t=f(e,x);return(0,a.mdx)(h,y({},g,t,{components:n,mdxType:"MDXLayout"}),(0,a.mdx)(r.C,{mdxType:"Badge"}),(0,a.mdx)("h1",{id:"terra-worklistdatagrid"},"Terra WorklistDataGrid"),(0,a.mdx)(l.Notice,{variant:"caution",ariaLevel:"2",mdxType:"Notice"},"Terra Worklist Data Grid is currently under alpha release. There may be breaking changes between releases until it is stable with the 1.0 release."),(0,a.mdx)("h2",{id:"getting-started"},"Getting Started"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},"Install with ",(0,a.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",(0,a.mdx)("ul",{parentName:"li"},(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"npm install terra-worklist-data-grid"))))),(0,a.mdx)("h2",{id:"peer-dependencies"},"Peer Dependencies"),(0,a.mdx)("p",null,"This component requires the following peer dependencies be installed in your app for the component to properly function."),(0,a.mdx)("table",null,(0,a.mdx)("thead",{parentName:"table"},(0,a.mdx)("tr",{parentName:"thead"},(0,a.mdx)("th",{parentName:"tr",align:null},"Peer Dependency"),(0,a.mdx)("th",{parentName:"tr",align:null},"Version"))),(0,a.mdx)("tbody",{parentName:"table"},(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null},"react"),(0,a.mdx)("td",{parentName:"tr",align:null},"^16.8.5")),(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null},"react-dom"),(0,a.mdx)("td",{parentName:"tr",align:null},"^16.8.5")),(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null},"react-intl"),(0,a.mdx)("td",{parentName:"tr",align:null},"^2.8.0")))),(0,a.mdx)("h2",{id:"component-features"},"Component Features"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#cross-browser-support"},"Cross-Browser Support")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#mobile-support"},"Mobile Support")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#internationalization-i18n"},"Internationalization Support")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#ltr--rtl"},"LTR/RTL Support"))),(0,a.mdx)("h2",{id:"examples"},"Examples"),(0,a.mdx)(p.Z,{title:"Default Worklist Data Grid",mdxType:"DefaultWorklistDataGrid"}),(0,a.mdx)("h2",{id:"grid-props-table"},"Grid props table"),(0,a.mdx)(c,{mdxType:"WorklistDataGridPropsTable"}),(0,a.mdx)("h3",{id:"rows"},"Rows"),(0,a.mdx)("p",null,"Rows define the cells rendered within the row as well as the row's selection properties.\nThe order in which the rows are provided will be the order in which they are rendered."),(0,a.mdx)("table",null,(0,a.mdx)("thead",{parentName:"table"},(0,a.mdx)("tr",{parentName:"thead"},(0,a.mdx)("th",{parentName:"tr",align:null},"Name"),(0,a.mdx)("th",{parentName:"tr",align:null},"Type"),(0,a.mdx)("th",{parentName:"tr",align:null},"Is Required"),(0,a.mdx)("th",{parentName:"tr",align:null},"Default Value"),(0,a.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,a.mdx)("tbody",{parentName:"table"},(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null},(0,a.mdx)("strong",{parentName:"td"},"id")),(0,a.mdx)("td",{parentName:"tr",align:null},"string"),(0,a.mdx)("td",{parentName:"tr",align:null},"required"),(0,a.mdx)("td",{parentName:"tr",align:null},"none"),(0,a.mdx)("td",{parentName:"tr",align:null},"An identifier for the row. This identifier should be unique across the set of rows provided to the Grid.")),(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null},(0,a.mdx)("strong",{parentName:"td"},"ariaLabel")),(0,a.mdx)("td",{parentName:"tr",align:null},"string"),(0,a.mdx)("td",{parentName:"tr",align:null},"optional"),(0,a.mdx)("td",{parentName:"tr",align:null},"none"),(0,a.mdx)("td",{parentName:"tr",align:null},"A string identifier used to describe the row contents. This value will be used for accessibilty when announcing the row that is selected or deselected.")),(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null},(0,a.mdx)("strong",{parentName:"td"},"isSelectable")),(0,a.mdx)("td",{parentName:"tr",align:null},"bool"),(0,a.mdx)("td",{parentName:"tr",align:null},"optional"),(0,a.mdx)("td",{parentName:"tr",align:null},"none"),(0,a.mdx)("td",{parentName:"tr",align:null},"A boolean indicating whether or not the row is selectable.")),(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null},(0,a.mdx)("strong",{parentName:"td"},"isSelected")),(0,a.mdx)("td",{parentName:"tr",align:null},"bool"),(0,a.mdx)("td",{parentName:"tr",align:null},"optional"),(0,a.mdx)("td",{parentName:"tr",align:null},"none"),(0,a.mdx)("td",{parentName:"tr",align:null},"A boolean indicating whether or not the row should render as selected.")),(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null},(0,a.mdx)("strong",{parentName:"td"},"cells")),(0,a.mdx)("td",{parentName:"tr",align:null},"array"),(0,a.mdx)("td",{parentName:"tr",align:null},"optional"),(0,a.mdx)("td",{parentName:"tr",align:null},"[]"),(0,a.mdx)("td",{parentName:"tr",align:null},"An array of cell objects that define the content to be rendered in the row. The order in which the cells are rendered is determined by the order in which they are provided.")))),(0,a.mdx)("h3",{id:"cells"},"Cells"),(0,a.mdx)("p",null,"Cells define the content rendered in a given row, and column. Cells will be rendered in the order given and are expected to be in the same order as the column."),(0,a.mdx)("table",null,(0,a.mdx)("thead",{parentName:"table"},(0,a.mdx)("tr",{parentName:"thead"},(0,a.mdx)("th",{parentName:"tr",align:null},"Name"),(0,a.mdx)("th",{parentName:"tr",align:null},"Type"),(0,a.mdx)("th",{parentName:"tr",align:null},"Is Required"),(0,a.mdx)("th",{parentName:"tr",align:null},"Default Value"),(0,a.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,a.mdx)("tbody",{parentName:"table"},(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null},(0,a.mdx)("strong",{parentName:"td"},"isSelectable")),(0,a.mdx)("td",{parentName:"tr",align:null},"bool"),(0,a.mdx)("td",{parentName:"tr",align:null},"optional"),(0,a.mdx)("td",{parentName:"tr",align:null},"none"),(0,a.mdx)("td",{parentName:"tr",align:null},"A boolean indicating whether or not the cell is selectable.")),(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null},(0,a.mdx)("strong",{parentName:"td"},"isMasked")),(0,a.mdx)("td",{parentName:"tr",align:null},"bool"),(0,a.mdx)("td",{parentName:"tr",align:null},"optional"),(0,a.mdx)("td",{parentName:"tr",align:null},"none"),(0,a.mdx)("td",{parentName:"tr",align:null},"A boolean indicating whether or not the cell is masked.")),(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null},(0,a.mdx)("strong",{parentName:"td"},"content")),(0,a.mdx)("td",{parentName:"tr",align:null},"content"),(0,a.mdx)("td",{parentName:"tr",align:null},"optional"),(0,a.mdx)("td",{parentName:"tr",align:null},"none"),(0,a.mdx)("td",{parentName:"tr",align:null},"The content to render within the cell.")))),(0,a.mdx)("h2",{id:"testing"},"Testing"))}N.isMDXComponent=!0},18113:function(e,n,t){t.d(n,{Z:function(){return c}});var a=t(67294),l=t(42057),r=t(81254),d=["components"];function i(){return i=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},i.apply(this,arguments)}function o(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var m={};function s(e){var n=e.components,t=o(e,d);return(0,r.mdx)("wrapper",i({},m,t,{components:n,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport WorklistDataGrid from 'terra-worklist-data-grid';\n\nconst gridDataJSON = {\n  cols: [\n    { id: 'Column-0', displayName: 'Patient' },\n    { id: 'Column-1', displayName: 'Location' },\n    { id: 'Column-2', displayName: 'Illness Severity' },\n    { id: 'Column-3', displayName: 'Visit' },\n    { id: 'Column-4', displayName: 'Allergy' },\n    { id: 'Column-5', displayName: 'Primary Contact' },\n    { id: 'Column-6', displayName: 'Generic Order Counts' },\n    { id: 'Column-7', displayName: 'Patient Age' },\n    { id: 'Column-8', displayName: 'Medication History' },\n    { id: 'Column-9', displayName: 'My Relationship' },\n    { id: 'Column-10', displayName: 'Not Selectable', isSelectable: false },\n  ],\n  rows: [\n    {\n      id: '1',\n      cells: [\n        { content: 'Fleck, Arthur' },\n        { content: '1007-MTN' },\n        { content: 'Unstable' },\n        { content: 'Inpatient, 2 months' },\n        { content: '' },\n        { content: 'Quinzell, Harleen' },\n        { content: '' },\n        { isMasked: true },\n        { isMasked: true },\n        { content: 'Admitting Physician' },\n        { content: '', isSelectable: false },\n      ],\n    },\n    {\n      id: '2',\n      cells: [\n        { content: 'Wayne, Bruce' },\n        { content: '1007-MTN-DR' },\n        { content: 'Stable' },\n        { content: 'Outpatient, 2 days' },\n        { content: 'Phytochemicals' },\n        { content: 'Grayson, Richard' },\n        { content: '' },\n        { content: '' },\n        { isMasked: true },\n        { content: 'Admitting Physician' },\n        { content: '', isSelectable: false },\n      ],\n    },\n  ],\n};\n\nconst DefaultWorklistDataGrid = () => {\n  const rowHeaderIndex = 0;\n  const { cols, rows } = gridDataJSON;\n\n  return (\n    <WorklistDataGrid\n      id=\"default-terra-worklist-data-grid\"\n      overflowColumns={cols}\n      rows={rows}\n      rowHeaderIndex={rowHeaderIndex}\n      ariaLabel=\"Worklist Data Grid\"\n    />\n  );\n};\n\nexport default DefaultWorklistDataGrid;\n\n")))}s.isMDXComponent=!0;var u=t(49271),c=function(e){var n=e.title,t=e.description,r=e.isExpanded;return a.createElement(u.Z,{title:n||"Default Worklist Data Grid",description:t,example:a.createElement(l.Z,null),exampleSrc:a.createElement(s,null),isExpanded:r})}},5282:function(e,n,t){t.d(n,{Z:function(){return c}});var a=t(67294),l=t(5116),r=t(81254),d=["components"];function i(){return i=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},i.apply(this,arguments)}function o(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var m={};function s(e){var n=e.components,t=o(e,d);return(0,r.mdx)("wrapper",i({},m,t,{components:n,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React, { useState } from 'react';\nimport WorklistDataGrid from 'terra-worklist-data-grid';\n\nconst gridDataJSON = {\n  cols: [\n    {\n      id: 'Column-0', displayName: 'Patient', sortIndicator: 'ascending', hasError: true,\n    },\n    { id: 'Column-1', displayName: 'Location' },\n    { id: 'Column-2', displayName: 'Illness Severity' },\n    { id: 'Column-3', displayName: 'Visit' },\n    { id: 'Column-4', displayName: 'Allergy', hasError: true },\n    { id: 'Column-5', displayName: 'Primary Contact' },\n    { id: 'Column-6', displayName: 'Generic Order Counts' },\n    { id: 'Column-7', displayName: 'Patient Age' },\n    { id: 'Column-8', displayName: 'Medication History' },\n    { id: 'Column-9', displayName: 'My Relationship' },\n    { id: 'Column-10', displayName: 'Not Selectable', isSelectable: false },\n  ],\n  rows: [\n    {\n      id: '1',\n      cells: [\n        { content: 'Fleck, Arthur' },\n        { content: '1007-MTN' },\n        { content: 'Unstable' },\n        { content: 'Inpatient, 2 months' },\n        { content: '' },\n        { content: 'Quinzell, Harleen' },\n        { content: '' },\n        { isMasked: true },\n        { isMasked: true },\n        { content: 'Admitting Physician' },\n        { content: '', isSelectable: false },\n      ],\n    },\n    {\n      id: '2',\n      cells: [\n        { content: 'Wayne, Bruce' },\n        { content: '1007-MTN-DR' },\n        { content: 'Stable' },\n        { content: 'Outpatient, 2 days' },\n        { content: 'Phytochemicals' },\n        { content: 'Grayson, Richard' },\n        { content: '' },\n        { content: '' },\n        { isMasked: true },\n        { content: 'Admitting Physician' },\n        { content: '', isSelectable: false },\n      ],\n    },\n  ],\n};\n\nconst DefaultWorklistDataGrid = () => {\n  const rowHeaderIndex = 0;\n  const { cols, rows } = gridDataJSON;\n\n  const [gridColumns, setGridColumns] = useState(cols);\n  const [gridRows, setGridRows] = useState(rows);\n\n  const onColumnSelect = (columnId) => {\n    const newColumnArray = gridColumns.map((column, columnIndex) => {\n      const newColumn = { ...column };\n\n      if (column.id === columnId) {\n        newColumn.sortIndicator = column.sortIndicator === 'ascending' ? 'descending' : 'ascending';\n\n        const newGridRows = [...gridRows];\n        newGridRows.sort((rowA, rowB) => {\n          const firstRowContent = rowA.cells[columnIndex].content || '';\n          const secondRowContent = rowB.cells[columnIndex].content || '';\n\n          if (newColumn.sortIndicator === 'ascending') {\n            return firstRowContent.localeCompare(secondRowContent);\n          }\n          return secondRowContent.localeCompare(firstRowContent);\n        });\n\n        setGridRows(newGridRows);\n      } else {\n        newColumn.sortIndicator = undefined;\n      }\n\n      return newColumn;\n    });\n\n    setGridColumns(newColumnArray);\n  };\n\n  return (\n    <WorklistDataGrid\n      id=\"default-terra-worklist-data-grid\"\n      overflowColumns={gridColumns}\n      rows={gridRows}\n      rowHeaderIndex={rowHeaderIndex}\n      rowHeight=\"50px\"\n      defaultColumnWidth={100}\n      columnHeaderHeight=\"50px\"\n      onColumnSelect={onColumnSelect}\n      ariaLabel=\"Worklist Data Grid\"\n    />\n  );\n};\n\nexport default DefaultWorklistDataGrid;\n\n")))}s.isMDXComponent=!0;var u=t(49271),c=function(e){var n=e.title,t=e.description,r=e.isExpanded;return a.createElement(u.Z,{title:n||"Worklist Data Grid Column States",description:t,example:a.createElement(l.Z,null),exampleSrc:a.createElement(s,null),isExpanded:r})}},5101:function(e,n,t){t.d(n,{C:function(){return r}});var a=t(67294),l=t(22863),r=function(e){var n=e.url;return a.createElement(l.Z,{src:"https://github.com/cerner/terra-core/tree/main/packages/terra-grid",name:"terra-grid",version:"6.34.0",url:n})}},17422:function(e,n,t){t.r(n),n.default={badge:"Badges-module__badge___vex-+","badge-container":"Badges-module__badge-container___B13Mv","badge-name":"Badges-module__badge-name___jkN0m","badge-version":"Badges-module__badge-version___agZ+P"}},66983:function(e,n,t){t.r(n),n.default={"clinical-lowlight-theme":"Button-module__clinical-lowlight-theme___TyZWB","orion-fusion-theme":"Button-module__orion-fusion-theme___q-FcQ",button:"Button-module__button___QuCn2","is-active":"Button-module__is-active___Z8AuK"}},30866:function(e,n,t){t.r(n),n.default={"clinical-lowlight-theme":"Notice-module__clinical-lowlight-theme___aa5xV","orion-fusion-theme":"Notice-module__orion-fusion-theme___QAE-T",notice:"Notice-module__notice___GWkPA",children:"Notice-module__children___lDYsm",accessory:"Notice-module__accessory___wkLOG",title:"Notice-module__title___6H5tc","ux-recommendation":"Notice-module__ux-recommendation___N8BuK",caution:"Notice-module__caution___hPrVl",deprecation:"Notice-module__deprecation___g1drA",maintenance:"Notice-module__maintenance___kWLIZ",important:"Notice-module__important___p5DiF","not-supported":"Notice-module__not-supported___34bHd",paragraph:"Notice-module__paragraph___5h-w1",list:"Notice-module__list___M2Kxj"}},42620:function(e,n,t){t.r(n),n.default={"clinical-lowlight-theme":"Placeholder-module__clinical-lowlight-theme___Obm9K","orion-fusion-theme":"Placeholder-module__orion-fusion-theme___svHY+",placeholder:"Placeholder-module__placeholder___ZZDXd",inner:"Placeholder-module__inner___fJq9o",title:"Placeholder-module__title___teBSo"}}}]);