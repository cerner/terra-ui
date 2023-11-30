"use strict";(self.webpackChunkterra_ui=self.webpackChunkterra_ui||[]).push([[93754],{49271:function(e,t,n){var l=n(64836),a=n(18698);t.Z=void 0;var o=l(n(27424)),r=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!=typeof e)return{default:e};var n=f(t);if(n&&n.has(e))return n.get(e);var l={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if("default"!==r&&Object.prototype.hasOwnProperty.call(e,r)){var c=o?Object.getOwnPropertyDescriptor(e,r):null;c&&(c.get||c.set)?Object.defineProperty(l,r,c):l[r]=e[r]}l.default=e,n&&n.set(e,l);return l}(n(67294)),c=l(n(45697)),s=l(n(47166)),i=n(21538),u=l(n(33864)),d=l(n(23399)),m=n(51051),p=l(n(53560));function f(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(f=function(e){return e?n:t})(e)}var _=s.default.bind(p.default),b={example:c.default.element,exampleSrc:c.default.element,exampleCssSrc:c.default.element,title:c.default.string,description:c.default.node,isExpanded:c.default.bool},v=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},y=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},g=function(e){var t=e.example,n=e.exampleSrc,l=e.exampleCssSrc,a=e.title,c=e.description,s=e.isExpanded,p=(0,r.useState)(s),f=(0,o.default)(p,2),b=f[0],g=f[1],h=(0,r.useState)(!1),E=(0,o.default)(h,2),x=E[0],w=E[1],C=r.default.useContext(i.ThemeContext),N=void 0!==l,O=function(){w(!x),b&&g(!b)},T=function(){g(!b),x&&w(!x)},j=function(e,t){e.nativeEvent.keyCode!==m.KEY_SPACE&&e.nativeEvent.keyCode!==m.KEY_RETURN||(e.preventDefault(),t())};return r.default.createElement("div",{className:_("template",C.className)},r.default.createElement("div",{className:_("header")},a&&r.default.createElement("h2",{className:_("title")},a)),r.default.createElement("div",{className:_("content")},c&&r.default.createElement("div",{className:_("description")},c),t),r.default.createElement("div",{className:_("footer")},n?r.default.createElement("div",{className:_("button-container")},N&&r.default.createElement("button",{type:"button",className:_("css-toggle","item",{"is-selected":x}),onClick:O,onKeyDown:function(e){return j(e,O)},onBlur:v,onMouseDown:y,tabIndex:0,"data-focus-styles-enabled":!0},r.default.createElement(u.default,{className:_("chevron")}),r.default.createElement("span",null,"CSS"),r.default.createElement(d.default,{className:_("chevron")})),r.default.createElement("button",{type:"button",className:_("code-toggle","item",{"is-selected":b}),onClick:T,onKeyDown:function(e){return j(e,T)},onBlur:v,onMouseDown:y,tabIndex:0,"data-focus-styles-enabled":!0},r.default.createElement(u.default,{className:_("chevron")}),r.default.createElement("span",null,"Code"),r.default.createElement(d.default,{className:_("chevron")}))):null,r.default.createElement("div",null,x&&r.default.createElement("div",{className:_("css")},l),b&&r.default.createElement("div",{className:_("code")},n))))};g.propTypes=b,g.defaultProps={isExpanded:!1};var h=g;t.Z=h},67393:function(e,t,n){var l=n(64836);t.Z=void 0;var a=l(n(67294)),o=n(57710),r=[{id:"Column-0",displayName:"Vitals",isSelectable:!1},{id:"Column-1",displayName:"March 16"},{id:"Column-2",displayName:"March 17"},{id:"Column-3",displayName:"March 18"}],c=[{id:"1",cells:[{content:"Heart Rate Monitored (bpm)"},{content:"68"},{content:null},{content:"67"}]},{id:"2",cells:[{content:"Temperature Oral (degC)"},{content:null},{content:"36.9"},{content:null}]},{id:"3",cells:[{content:"Cardiac Index (L/min/m2)"},{content:"2.25"},{content:null},{content:null}]},{id:"4",cells:[{content:"ICP (mmHg)"},{content:null},{content:"11"},{content:"12"}]},{id:"5",cells:[{content:"CPP (mmHg)"},{content:"63"},{content:null},{content:"48"}]}];t.Z=function(){var e=r,t=c;return a.default.createElement(o.FlowsheetDataGrid,{id:"default-terra-flowsheet-data-grid-results-missing",columns:e,rows:t,ariaLabel:"Flowsheet Data Grid with Results Missing"})}},42483:function(e,t,n){n.r(t),n.d(t,{default:function(){return y}});var l=n(67294),a=n(81254),o=n(67393),r=["components"];function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},c.apply(this,arguments)}function s(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},o=Object.keys(e);for(l=0;l<o.length;l++)n=o[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(l=0;l<o.length;l++)n=o[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i={};function u(e){var t=e.components,n=s(e,r);return(0,a.mdx)("wrapper",c({},i,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport { FlowsheetDataGrid } from 'terra-data-grid';\n\nconst gridDataJSON = {\n  cols: [\n    { id: 'Column-0', displayName: 'Vitals', isSelectable: false },\n    { id: 'Column-1', displayName: 'March 16' },\n    { id: 'Column-2', displayName: 'March 17' },\n    { id: 'Column-3', displayName: 'March 18' },\n  ],\n  rows: [\n    {\n      id: '1',\n      cells: [\n        { content: 'Heart Rate Monitored (bpm)' },\n        { content: '68' },\n        { content: null },\n        { content: '67' },\n      ],\n    },\n    {\n      id: '2',\n      cells: [\n        { content: 'Temperature Oral (degC)' },\n        { content: null },\n        { content: '36.9' },\n        { content: null },\n      ],\n    },\n    {\n      id: '3',\n      cells: [\n        { content: 'Cardiac Index (L/min/m2)' },\n        { content: '2.25' },\n        { content: null },\n        { content: null },\n      ],\n    },\n    {\n      id: '4',\n      cells: [\n        { content: 'ICP (mmHg)' },\n        { content: null },\n        { content: '11' },\n        { content: '12' },\n      ],\n    },\n    {\n      id: '5',\n      cells: [\n        { content: 'CPP (mmHg)' },\n        { content: '63' },\n        { content: null },\n        { content: '48' },\n      ],\n    },\n  ],\n};\n\nconst NoResultCells = () => {\n  const { cols, rows } = gridDataJSON;\n\n  return (\n    <FlowsheetDataGrid\n      id=\"default-terra-flowsheet-data-grid-results-missing\"\n      columns={cols}\n      rows={rows}\n      ariaLabel=\"Flowsheet Data Grid with Results Missing\"\n    />\n  );\n};\n\nexport default NoResultCells;\n\n")))}u.isMDXComponent=!0;var d=n(49271),m=function(e){var t=e.title,n=e.description,a=e.isExpanded;return l.createElement(d.Z,{title:t||"No Result Cells",description:n,example:l.createElement(o.Z,null),exampleSrc:l.createElement(u,null),isExpanded:a})},p=["components"];function f(){return f=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},f.apply(this,arguments)}function _(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},o=Object.keys(e);for(l=0;l<o.length;l++)n=o[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(l=0;l<o.length;l++)n=o[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b={},v="wrapper";function y(e){var t=e.components,n=_(e,p);return(0,a.mdx)(v,f({},b,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)(m,{title:'Flowsheet Data Grid with "No Result" Cells',description:'If the content of a cell is an empty string, "--", or null, it will be represented by a dash and presented to assistive technologies as "No result."',mdxType:"NoResultCells"}))}y.isMDXComponent=!0},53560:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___rBbtD","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___GzA23",template:"ExampleTemplate-module__template___a4uPk",header:"ExampleTemplate-module__header___iFXV3",content:"ExampleTemplate-module__content___48m4Q",description:"ExampleTemplate-module__description___NwBJo",footer:"ExampleTemplate-module__footer___GpSoG","button-container":"ExampleTemplate-module__button-container___rAD11",css:"ExampleTemplate-module__css___+jtk1",code:"ExampleTemplate-module__code___7rC6C","css-toggle":"ExampleTemplate-module__css-toggle___chHK7","code-toggle":"ExampleTemplate-module__code-toggle___TGlE-","is-selected":"ExampleTemplate-module__is-selected___0BYwS",item:"ExampleTemplate-module__item___8FTQq",chevron:"ExampleTemplate-module__chevron___VbY7N",title:"ExampleTemplate-module__title___r+nbJ","dynamic-content":"ExampleTemplate-module__dynamic-content___k+1H7"}}}]);