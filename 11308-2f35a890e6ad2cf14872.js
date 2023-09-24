"use strict";(self.webpackChunkterra_ui=self.webpackChunkterra_ui||[]).push([[11308,45627,37344,33667,96890,14041,27444,85565,3353,80858,17657,5161,19260,45865,85355,33315,3193,4845,20444,26806,46647,85161,38681,17763,15318,40411,18101,38443,78996,39915,33442],{36749:function(e,l,n){l.Z=void 0;var t=r(n(67294)),a=r(n(7270));function r(e){return e&&e.__esModule?e:{default:e}}var d=function(){return t.default.createElement(t.default.Fragment,null,t.default.createElement(a.default,{summaryId:"example-check-cell",summary:"This table displaying a default check column.",rowStyle:"toggle",checkStyle:"icon",numberOfColumns:1,headerData:{selectAllColumn:{checkLabel:"Column Example Title"},cells:[{id:"column-0",key:"key-0",children:"Default"}]}}),t.default.createElement(a.default,{summaryId:"empty-check-cell",summary:"This table displaying a selectable unchecked column.",checkStyle:"toggle",numberOfColumns:1,headerData:{selectAllColumn:{checkLabel:"Column Example Title",onCheckAction:function(){},checkStatus:"empty"},cells:[{id:"column-0",key:"key-0",children:"Selectable Unchecked"}]}}),t.default.createElement(a.default,{summaryId:"checked-check-cell",summary:"This table displaying a selectable checked column.",checkStyle:"toggle",numberOfColumns:1,headerData:{selectAllColumn:{checkLabel:"Column Example Title",onCheckAction:function(){},checkStatus:"checked"},cells:[{id:"column-0",key:"key-0",children:"Selectable Checked"}]}}),t.default.createElement(a.default,{summaryId:"indeterminate-check-cell",summary:"This table displaying a selectable indeterminate column.",checkStyle:"toggle",numberOfColumns:1,headerData:{selectAllColumn:{checkLabel:"Column Example Title",onCheckAction:function(){},checkStatus:"indeterminate"},cells:[{id:"column-0",key:"key-0",children:"Selectable Indeterminate"}]}}),t.default.createElement(a.default,{summaryId:"disabled-check-cell",summary:"This table displaying a disabled check column.",checkStyle:"toggle",numberOfColumns:1,headerData:{selectAllColumn:{checkLabel:"Column Example Title",onCheckAction:function(){},isDisabled:!0},cells:[{id:"column-0",key:"key-0",children:"Disabled"}]}}),t.default.createElement(a.default,{summaryId:"alignment-check-cell",summary:"This table displaying a vertically aligned check column.",checkStyle:"toggle",numberOfColumns:1,headerData:{selectAllColumn:{checkLabel:"Column Example Title",onCheckAction:function(){},checkAlignment:"1rem"},cells:[{id:"column-0",key:"key-0",children:"Vertical Alignment 1rem"}]}}))};l.Z=d},58143:function(e,l,n){l.Z=void 0;var t=r(n(67294)),a=r(n(7270));function r(e){return e&&e.__esModule?e:{default:e}}var d=function(){return t.default.createElement(t.default.Fragment,null,t.default.createElement(a.default,{summaryId:"default-header-table",summary:"This table displays the default layout of table header.",numberOfColumns:2,cellPaddingStyle:"standard",headerData:{cells:[{id:"header-key-0",key:"key-0",children:"Default Header"},{id:"header-key-1",key:"key-1",children:"Default Header"}]}}),t.default.createElement(a.default,{summaryId:"chevron-header-table",summary:"This table displays the chevron layout of table header.",numberOfColumns:2,cellPaddingStyle:"standard",rowStyle:"disclose",hasChevrons:!0,headerData:{cells:[{id:"header-key-0",key:"key-0",children:"Selection Style Chevron"},{id:"header-key-1",key:"key-1",children:"Selection Style Chevron"}]}}),t.default.createElement(a.default,{summaryId:"check-header-table",summary:"This table displays the checkmark layout of table header.",numberOfColumns:2,cellPaddingStyle:"standard",checkStyle:"toggle",headerData:{selectAllColumn:{checkLabel:"Column Title"},cells:[{id:"header-key-0",key:"key-0",children:"Selection Style Checkmark"},{id:"header-key-1",key:"key-1",children:"Selection Style Checkmark"}]}}))};l.Z=d},22863:function(e,l,n){var t=n(64836);l.Z=void 0;var a=t(n(67294)),r=t(n(45697)),d=t(n(47166)),m=t(n(17422)),c=d.default.bind(m.default),o={name:r.default.string.isRequired,src:r.default.string,url:r.default.string,version:r.default.string.isRequired},i=function(e){var l=e.src,n=e.name,t=e.url,r=e.version,d=a.default.createElement("a",{className:c("badge"),href:t||"https://www.npmjs.org/package/".concat(n,"/v/").concat(r)},a.default.createElement("span",{className:c("badge-name")},t?"package":"npm"),a.default.createElement("span",{className:c("badge-version")},"v".concat(r))),m=l?a.default.createElement("a",{className:c("badge"),href:l},a.default.createElement("span",{className:c("badge-name")},"github"),a.default.createElement("span",{className:c("badge-version")},"source")):void 0;return a.default.createElement("div",{className:c("badge-container")},d,m)};i.propTypes=o;var u=i;l.Z=u},49271:function(e,l,n){var t=n(64836),a=n(18698);l.Z=void 0;var r=t(n(27424)),d=function(e,l){if(!l&&e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!=typeof e)return{default:e};var n=x(l);if(n&&n.has(e))return n.get(e);var t={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var d in e)if("default"!==d&&Object.prototype.hasOwnProperty.call(e,d)){var m=r?Object.getOwnPropertyDescriptor(e,d):null;m&&(m.get||m.set)?Object.defineProperty(t,d,m):t[d]=e[d]}t.default=e,n&&n.set(e,t);return t}(n(67294)),m=t(n(45697)),c=t(n(47166)),o=n(21538),i=t(n(33864)),u=t(n(23399)),p=n(51051),s=t(n(53560));function x(e){if("function"!=typeof WeakMap)return null;var l=new WeakMap,n=new WeakMap;return(x=function(e){return e?n:l})(e)}var y=c.default.bind(s.default),h={example:m.default.element,exampleSrc:m.default.element,exampleCssSrc:m.default.element,title:m.default.string,description:m.default.node,isExpanded:m.default.bool},f=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},b=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},T=function(e){var l=e.example,n=e.exampleSrc,t=e.exampleCssSrc,a=e.title,m=e.description,c=e.isExpanded,s=(0,d.useState)(c),x=(0,r.default)(s,2),h=x[0],T=x[1],g=(0,d.useState)(!1),k=(0,r.default)(g,2),C=k[0],v=k[1],O=d.default.useContext(o.ThemeContext),E=void 0!==t,_=function(){v(!C),h&&T(!h)},D=function(){T(!h),C&&v(!C)},S=function(e,l){e.nativeEvent.keyCode!==p.KEY_SPACE&&e.nativeEvent.keyCode!==p.KEY_RETURN||(e.preventDefault(),l())};return d.default.createElement("div",{className:y("template",O.className)},d.default.createElement("div",{className:y("header")},a&&d.default.createElement("h2",{className:y("title")},a)),d.default.createElement("div",{className:y("content")},m&&d.default.createElement("div",{className:y("description")},m),l),d.default.createElement("div",{className:y("footer")},n?d.default.createElement("div",{className:y("button-container")},E&&d.default.createElement("button",{type:"button",className:y("css-toggle","item",{"is-selected":C}),onClick:_,onKeyDown:function(e){return S(e,_)},onBlur:f,onMouseDown:b,tabIndex:0,"data-focus-styles-enabled":!0},d.default.createElement(i.default,{className:y("chevron")}),d.default.createElement("span",null,"CSS"),d.default.createElement(u.default,{className:y("chevron")})),d.default.createElement("button",{type:"button",className:y("code-toggle","item",{"is-selected":h}),onClick:D,onKeyDown:function(e){return S(e,D)},onBlur:f,onMouseDown:b,tabIndex:0,"data-focus-styles-enabled":!0},d.default.createElement(i.default,{className:y("chevron")}),d.default.createElement("span",null,"Code"),d.default.createElement(u.default,{className:y("chevron")}))):null,d.default.createElement("div",null,C&&d.default.createElement("div",{className:y("css")},t),h&&d.default.createElement("div",{className:y("code")},n))))};T.propTypes=h,T.defaultProps={isExpanded:!1};var g=T;l.Z=g},72569:function(e,l,n){n.r(l),n.d(l,{default:function(){return F}});var t=n(67294),a=n(81254),r=n(20249),d=n(58143),m=["components"];function c(){return c=Object.assign?Object.assign.bind():function(e){for(var l=1;l<arguments.length;l++){var n=arguments[l];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},c.apply(this,arguments)}function o(e,l){if(null==e)return{};var n,t,a=function(e,l){if(null==e)return{};var n,t,a={},r=Object.keys(e);for(t=0;t<r.length;t++)n=r[t],l.indexOf(n)>=0||(a[n]=e[n]);return a}(e,l);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)n=r[t],l.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i={};function u(e){var l=e.components,n=o(e,m);return(0,a.mdx)("wrapper",c({},i,n,{components:l,mdxType:"MDXLayout"}),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Table from 'terra-table';\n\nconst HeaderRowExample = () => (\n  <React.Fragment>\n    <Table\n      summaryId=\"default-header-table\"\n      summary=\"This table displays the default layout of table header.\"\n      numberOfColumns={2}\n      cellPaddingStyle=\"standard\"\n      headerData={{\n        cells: [\n          { id: 'header-key-0', key: 'key-0', children: 'Default Header' },\n          { id: 'header-key-1', key: 'key-1', children: 'Default Header' },\n        ],\n      }}\n    />\n    <Table\n      summaryId=\"chevron-header-table\"\n      summary=\"This table displays the chevron layout of table header.\"\n      numberOfColumns={2}\n      cellPaddingStyle=\"standard\"\n      rowStyle=\"disclose\"\n      hasChevrons\n      headerData={{\n        cells: [\n          { id: 'header-key-0', key: 'key-0', children: 'Selection Style Chevron' },\n          { id: 'header-key-1', key: 'key-1', children: 'Selection Style Chevron' },\n        ],\n      }}\n    />\n    <Table\n      summaryId=\"check-header-table\"\n      summary=\"This table displays the checkmark layout of table header.\"\n      numberOfColumns={2}\n      cellPaddingStyle=\"standard\"\n      checkStyle=\"toggle\"\n      headerData={{\n        selectAllColumn: {\n          checkLabel: 'Column Title',\n        },\n        cells: [\n          { id: 'header-key-0', key: 'key-0', children: 'Selection Style Checkmark' },\n          { id: 'header-key-1', key: 'key-1', children: 'Selection Style Checkmark' },\n        ],\n      }}\n    />\n  </React.Fragment>\n);\n\nexport default HeaderRowExample;\n\n")))}u.isMDXComponent=!0;var p=n(49271),s=function(e){var l=e.title,n=e.description,a=e.isExpanded;return t.createElement(p.Z,{title:l||"Header Row Example",description:n,example:t.createElement(d.Z,null),exampleSrc:t.createElement(u,null),isExpanded:a})},x=n(36749),y=["components"];function h(){return h=Object.assign?Object.assign.bind():function(e){for(var l=1;l<arguments.length;l++){var n=arguments[l];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},h.apply(this,arguments)}function f(e,l){if(null==e)return{};var n,t,a=function(e,l){if(null==e)return{};var n,t,a={},r=Object.keys(e);for(t=0;t<r.length;t++)n=r[t],l.indexOf(n)>=0||(a[n]=e[n]);return a}(e,l);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)n=r[t],l.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b={};function T(e){var l=e.components,n=f(e,y);return(0,a.mdx)("wrapper",h({},b,n,{components:l,mdxType:"MDXLayout"}),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Table from 'terra-table';\n\nconst HeaderCheckMarkCellExample = () => (\n  <React.Fragment>\n    <Table\n      summaryId=\"example-check-cell\"\n      summary=\"This table displaying a default check column.\"\n      rowStyle=\"toggle\"\n      checkStyle=\"icon\"\n      numberOfColumns={1}\n      headerData={{\n        selectAllColumn: { checkLabel: 'Column Example Title' },\n        cells: [{ id: 'column-0', key: 'key-0', children: 'Default' }],\n      }}\n    />\n    <Table\n      summaryId=\"empty-check-cell\"\n      summary=\"This table displaying a selectable unchecked column.\"\n      checkStyle=\"toggle\"\n      numberOfColumns={1}\n      headerData={{\n        selectAllColumn: { checkLabel: 'Column Example Title', onCheckAction: () => {}, checkStatus: 'empty' },\n        cells: [{ id: 'column-0', key: 'key-0', children: 'Selectable Unchecked' }],\n      }}\n    />\n    <Table\n      summaryId=\"checked-check-cell\"\n      summary=\"This table displaying a selectable checked column.\"\n      checkStyle=\"toggle\"\n      numberOfColumns={1}\n      headerData={{\n        selectAllColumn: { checkLabel: 'Column Example Title', onCheckAction: () => {}, checkStatus: 'checked' },\n        cells: [{ id: 'column-0', key: 'key-0', children: 'Selectable Checked' }],\n      }}\n    />\n    <Table\n      summaryId=\"indeterminate-check-cell\"\n      summary=\"This table displaying a selectable indeterminate column.\"\n      checkStyle=\"toggle\"\n      numberOfColumns={1}\n      headerData={{\n        selectAllColumn: { checkLabel: 'Column Example Title', onCheckAction: () => {}, checkStatus: 'indeterminate' },\n        cells: [{ id: 'column-0', key: 'key-0', children: 'Selectable Indeterminate' }],\n      }}\n    />\n    <Table\n      summaryId=\"disabled-check-cell\"\n      summary=\"This table displaying a disabled check column.\"\n      checkStyle=\"toggle\"\n      numberOfColumns={1}\n      headerData={{\n        selectAllColumn: { checkLabel: 'Column Example Title', onCheckAction: () => {}, isDisabled: true },\n        cells: [{ id: 'column-0', key: 'key-0', children: 'Disabled' }],\n      }}\n    />\n    <Table\n      summaryId=\"alignment-check-cell\"\n      summary=\"This table displaying a vertically aligned check column.\"\n      checkStyle=\"toggle\"\n      numberOfColumns={1}\n      headerData={{\n        selectAllColumn: { checkLabel: 'Column Example Title', onCheckAction: () => {}, checkAlignment: '1rem' },\n        cells: [{ id: 'column-0', key: 'key-0', children: 'Vertical Alignment 1rem' }],\n      }}\n    />\n  </React.Fragment>\n);\n\nexport default HeaderCheckMarkCellExample;\n\n")))}T.isMDXComponent=!0;var g=function(e){var l=e.title,n=e.description,a=e.isExpanded;return t.createElement(p.Z,{title:l||"Header Check Mark Cell Example",description:n,example:t.createElement(x.Z,null),exampleSrc:t.createElement(T,null),isExpanded:a})},k=n(78530),C=["components"];function v(){return v=Object.assign?Object.assign.bind():function(e){for(var l=1;l<arguments.length;l++){var n=arguments[l];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},v.apply(this,arguments)}function O(e,l){if(null==e)return{};var n,t,a=function(e,l){if(null==e)return{};var n,t,a={},r=Object.keys(e);for(t=0;t<r.length;t++)n=r[t],l.indexOf(n)>=0||(a[n]=e[n]);return a}(e,l);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)n=r[t],l.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var E={},_="wrapper";function D(e){var l=e.components,n=O(e,C);return(0,a.mdx)(_,v({},E,n,{components:l,mdxType:"MDXLayout"}),(0,a.mdx)(k.ZP,{mdxType:"PropsTable"},(0,a.mdx)(k.X2,{key:"ROW1",mdxType:"Row"},(0,a.mdx)(k.O,{mdxType:"PropNameCell"},"cells"),(0,a.mdx)(k.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"arrayOf: [{\n  type: 'custom',\n}],\n"))),(0,a.mdx)(k.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(k.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(k.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"The cells to be displayed within the header."))),(0,a.mdx)(k.X2,{key:"ROW2",mdxType:"Row"},(0,a.mdx)(k.O,{mdxType:"PropNameCell"},"refCallback"),(0,a.mdx)(k.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"func\n"))),(0,a.mdx)(k.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(k.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(k.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Function callback returning the html node for the header."))),(0,a.mdx)(k.X2,{key:"ROW3",mdxType:"Row"},(0,a.mdx)(k.O,{mdxType:"PropNameCell"},"selectAllColumn"),(0,a.mdx)(k.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"custom\n"))),(0,a.mdx)(k.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(k.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(k.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"The select all column header's properties.")))))}D.isMDXComponent=!0;var S=["components"];function w(){return w=Object.assign?Object.assign.bind():function(e){for(var l=1;l<arguments.length;l++){var n=arguments[l];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},w.apply(this,arguments)}function R(e,l){if(null==e)return{};var n,t,a=function(e,l){if(null==e)return{};var n,t,a={},r=Object.keys(e);for(t=0;t<r.length;t++)n=r[t],l.indexOf(n)>=0||(a[n]=e[n]);return a}(e,l);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)n=r[t],l.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var N={},j="wrapper";function P(e){var l=e.components,n=R(e,S);return(0,a.mdx)(j,w({},N,n,{components:l,mdxType:"MDXLayout"}),(0,a.mdx)(k.ZP,{mdxType:"PropsTable"},(0,a.mdx)(k.X2,{key:"ROW1",mdxType:"Row"},(0,a.mdx)(k.O,{mdxType:"PropNameCell"},"id"),(0,a.mdx)(k.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,a.mdx)(k.dS,{isRequired:!0,mdxType:"RequiredCell"}),(0,a.mdx)(k.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(k.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,'The id of the header cell for the row cells to set within their "headers" prop.'))),(0,a.mdx)(k.X2,{key:"ROW2",mdxType:"Row"},(0,a.mdx)(k.O,{mdxType:"PropNameCell"},"key"),(0,a.mdx)(k.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,a.mdx)(k.dS,{isRequired:!0,mdxType:"RequiredCell"}),(0,a.mdx)(k.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(k.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"The react key to apply to the cell."))),(0,a.mdx)(k.X2,{key:"ROW3",mdxType:"Row"},(0,a.mdx)(k.O,{mdxType:"PropNameCell"},"children"),(0,a.mdx)(k.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"node\n"))),(0,a.mdx)(k.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(k.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(k.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Content to be displayed for the column header."))),(0,a.mdx)(k.X2,{key:"ROW4",mdxType:"Row"},(0,a.mdx)(k.O,{mdxType:"PropNameCell"},"isSortDesc"),(0,a.mdx)(k.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,a.mdx)(k.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(k.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(k.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Whether or not the sort indicator is descending."))),(0,a.mdx)(k.X2,{key:"ROW5",mdxType:"Row"},(0,a.mdx)(k.O,{mdxType:"PropNameCell"},"isSortActive"),(0,a.mdx)(k.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,a.mdx)(k.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(k.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(k.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Whether or not the column is to be marked as a sorted column."))),(0,a.mdx)(k.X2,{key:"ROW6",mdxType:"Row"},(0,a.mdx)(k.O,{mdxType:"PropNameCell"},"metaData"),(0,a.mdx)(k.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"object\n"))),(0,a.mdx)(k.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(k.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(k.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"The associated metaData to be provided in the onSelect callback."))),(0,a.mdx)(k.X2,{key:"ROW7",mdxType:"Row"},(0,a.mdx)(k.O,{mdxType:"PropNameCell"},"onCellAction"),(0,a.mdx)(k.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"func\n"))),(0,a.mdx)(k.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(k.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(k.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Function callback for when the appropriate click or key action is performed.\nCallback contains the javascript event and prop metadata, e.g. onCellAction(event, metaData)\nThe presence of this func will indicate that the cell can be interacted with for actions or selections."))),(0,a.mdx)(k.X2,{key:"ROW8",mdxType:"Row"},(0,a.mdx)(k.O,{mdxType:"PropNameCell"},"onSortAction"),(0,a.mdx)(k.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"func\n"))),(0,a.mdx)(k.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(k.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(k.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Function callback for when the appropriate click or key action is performed.\nCallback contains the javascript event and prop metadata, e.g. onSortAction(event, metaData)\nThe presence of this func will indicate that the cell can be interacted with for sorting."))),(0,a.mdx)(k.X2,{key:"ROW9",mdxType:"Row"},(0,a.mdx)(k.O,{mdxType:"PropNameCell"},"refCallback"),(0,a.mdx)(k.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"func\n"))),(0,a.mdx)(k.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(k.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(k.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Function callback returning the html node for the header cell."))),(0,a.mdx)(k.X2,{key:"ROW10",mdxType:"Row"},(0,a.mdx)(k.O,{mdxType:"PropNameCell"},"removeInner"),(0,a.mdx)(k.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,a.mdx)(k.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(k.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(k.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Whether or not the cell's inner containing element responsible for handling table's default padding is removed.\nThis is useful to optimize the DOM for either a table without padding or to optimize a cell whose custom content is providing its own padding."))),(0,a.mdx)(k.X2,{key:"ROW11",mdxType:"Row"},(0,a.mdx)(k.O,{mdxType:"PropNameCell"},"attrs"),(0,a.mdx)(k.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"object\n"))),(0,a.mdx)(k.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(k.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(k.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Additional attributes to be passed to the cell.")))))}P.isMDXComponent=!0;var A=["components"];function W(){return W=Object.assign?Object.assign.bind():function(e){for(var l=1;l<arguments.length;l++){var n=arguments[l];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},W.apply(this,arguments)}function q(e,l){if(null==e)return{};var n,t,a=function(e,l){if(null==e)return{};var n,t,a={},r=Object.keys(e);for(t=0;t<r.length;t++)n=r[t],l.indexOf(n)>=0||(a[n]=e[n]);return a}(e,l);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)n=r[t],l.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var X={},I="wrapper";function M(e){var l=e.components,n=q(e,A);return(0,a.mdx)(I,W({},X,n,{components:l,mdxType:"MDXLayout"}),(0,a.mdx)(k.ZP,{mdxType:"PropsTable"},(0,a.mdx)(k.X2,{key:"ROW1",mdxType:"Row"},(0,a.mdx)(k.O,{mdxType:"PropNameCell"},"checkStatus"),(0,a.mdx)(k.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"enum: [\n  'empty'\n  'checked'\n  'indeterminate'\n],\n"))),(0,a.mdx)(k.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(k.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(k.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"The status of the select all checkbox."))),(0,a.mdx)(k.X2,{key:"ROW2",mdxType:"Row"},(0,a.mdx)(k.O,{mdxType:"PropNameCell"},"checkAlignment"),(0,a.mdx)(k.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,a.mdx)(k.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(k.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(k.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"The alignment prop sets the bottom spacing of the check mar, standard units are valid. This is used when providing your own padding."))),(0,a.mdx)(k.X2,{key:"ROW3",mdxType:"Row"},(0,a.mdx)(k.O,{mdxType:"PropNameCell"},"checkLabel"),(0,a.mdx)(k.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,a.mdx)(k.dS,{isRequired:!0,mdxType:"RequiredCell"}),(0,a.mdx)(k.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(k.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"The text label for the column header's interaction."))),(0,a.mdx)(k.X2,{key:"ROW4",mdxType:"Row"},(0,a.mdx)(k.O,{mdxType:"PropNameCell"},"onCheckAction"),(0,a.mdx)(k.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"func\n"))),(0,a.mdx)(k.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(k.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(k.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"The function callback triggering when the checkbox within the column header has an interaction."))),(0,a.mdx)(k.X2,{key:"ROW5",mdxType:"Row"},(0,a.mdx)(k.O,{mdxType:"PropNameCell"},"isDisabled"),(0,a.mdx)(k.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,a.mdx)(k.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(k.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(k.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Whether or not interaction should be disabled.")))))}M.isMDXComponent=!0;var L=["components"];function V(){return V=Object.assign?Object.assign.bind():function(e){for(var l=1;l<arguments.length;l++){var n=arguments[l];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},V.apply(this,arguments)}function H(e,l){if(null==e)return{};var n,t,a=function(e,l){if(null==e)return{};var n,t,a={},r=Object.keys(e);for(t=0;t<r.length;t++)n=r[t],l.indexOf(n)>=0||(a[n]=e[n]);return a}(e,l);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)n=r[t],l.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var Z={},B="wrapper";function F(e){var l=e.components,n=H(e,L);return(0,a.mdx)(B,V({},Z,n,{components:l,mdxType:"MDXLayout"}),(0,a.mdx)(r.C,{mdxType:"Badge"}),(0,a.mdx)("h1",{id:"terra-table---header"},"Terra Table - Header"),(0,a.mdx)("p",null,"The table's header is comprised of a cells and an optional selectAllColumn. The checkLabel should be provided if the table has toggle behavior."),(0,a.mdx)("h1",{id:"examples"},"Examples"),(0,a.mdx)(s,{mdxType:"HeaderRowExample"}),(0,a.mdx)(g,{mdxType:"HeaderCheckMarkCellExample"}),(0,a.mdx)("h2",{id:"table-header-props"},"Table Header Props"),(0,a.mdx)(D,{mdxType:"HeaderProps"}),(0,a.mdx)("h2",{id:"table-header-cell-props"},"Table Header Cell Props"),(0,a.mdx)(P,{mdxType:"HeaderCellProps"}),(0,a.mdx)("h2",{id:"table-select-all-column-props"},"Table Select All Column Props"),(0,a.mdx)(M,{mdxType:"SelectAllColumnProps"}))}F.isMDXComponent=!0},20249:function(e,l,n){n.d(l,{C:function(){return r}});var t=n(67294),a=n(22863),r=function(e){var l=e.url;return t.createElement(a.Z,{src:"https://github.com/cerner/terra-core/tree/main/packages/terra-table",name:"terra-table",version:"4.36.0",url:l})}},17422:function(e,l,n){n.r(l),l.default={badge:"Badges-module__badge___vex-+","badge-container":"Badges-module__badge-container___B13Mv","badge-name":"Badges-module__badge-name___jkN0m","badge-version":"Badges-module__badge-version___agZ+P"}},53560:function(e,l,n){n.r(l),l.default={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___rBbtD","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___GzA23",template:"ExampleTemplate-module__template___a4uPk",header:"ExampleTemplate-module__header___iFXV3",content:"ExampleTemplate-module__content___48m4Q",description:"ExampleTemplate-module__description___NwBJo",footer:"ExampleTemplate-module__footer___GpSoG","button-container":"ExampleTemplate-module__button-container___rAD11",css:"ExampleTemplate-module__css___+jtk1",code:"ExampleTemplate-module__code___7rC6C","css-toggle":"ExampleTemplate-module__css-toggle___chHK7","code-toggle":"ExampleTemplate-module__code-toggle___TGlE-","is-selected":"ExampleTemplate-module__is-selected___0BYwS",item:"ExampleTemplate-module__item___8FTQq",chevron:"ExampleTemplate-module__chevron___VbY7N",title:"ExampleTemplate-module__title___r+nbJ","dynamic-content":"ExampleTemplate-module__dynamic-content___k+1H7"}},33864:function(e,l,n){Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var t=r(n(67294)),a=r(n(99139));function r(e){return e&&e.__esModule?e:{default:e}}function d(){return d=Object.assign?Object.assign.bind():function(e){for(var l=1;l<arguments.length;l++){var n=arguments[l];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},d.apply(this,arguments)}var m=function(e){var l=d({},e);return t.default.createElement(a.default,l,t.default.createElement("path",{d:"M10.3 24 33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};m.displayName="IconChevronLeft",m.defaultProps={viewBox:"0 0 48 48","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg"};var c=m;l.default=c}}]);