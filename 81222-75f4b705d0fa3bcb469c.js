"use strict";(self.webpackChunkterra_ui=self.webpackChunkterra_ui||[]).push([[81222],{201:function(e,n,t){var l=t(24994),o=t(73738);n.A=void 0;var a=l(t(85715)),r=function(e,n){if(!n&&e&&e.__esModule)return e;if(null===e||"object"!=o(e)&&"function"!=typeof e)return{default:e};var t=h(n);if(t&&t.has(e))return t.get(e);var l={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if("default"!==r&&Object.prototype.hasOwnProperty.call(e,r)){var i=a?Object.getOwnPropertyDescriptor(e,r):null;i&&(i.get||i.set)?Object.defineProperty(l,r,i):l[r]=e[r]}return l.default=e,t&&t.set(e,l),l}(t(96540)),i=l(t(5556)),c=l(t(67967)),m=t(92912),d=l(t(49558)),s=l(t(53665)),u=t(25966),p=l(t(89986));function h(e){if("function"!=typeof WeakMap)return null;var n=new WeakMap,t=new WeakMap;return(h=function(e){return e?t:n})(e)}var g=c.default.bind(p.default),f={example:i.default.element,exampleSrc:i.default.element,exampleCssSrc:i.default.element,title:i.default.string,description:i.default.node,isExpanded:i.default.bool},_=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},x=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},C=function(e){var n=e.example,t=e.exampleSrc,l=e.exampleCssSrc,o=e.title,i=e.description,c=e.isExpanded,p=(0,r.useState)(c),h=(0,a.default)(p,2),f=h[0],C=h[1],b=(0,r.useState)(!1),w=(0,a.default)(b,2),y=w[0],v=w[1],E=r.default.useContext(m.ThemeContext),O=void 0!==l,N=function(){v(!y),f&&C(!f)},D=function(){C(!f),y&&v(!y)},H=function(e,n){e.nativeEvent.keyCode!==u.KEY_SPACE&&e.nativeEvent.keyCode!==u.KEY_RETURN||(e.preventDefault(),n())};return r.default.createElement("div",{className:g("template",E.className)},r.default.createElement("div",{className:g("header")},o&&r.default.createElement("h2",{className:g("title")},o)),r.default.createElement("div",{className:g("content")},i&&r.default.createElement("div",{className:g("description")},i),n),r.default.createElement("div",{className:g("footer")},t?r.default.createElement("div",{className:g("button-container")},O&&r.default.createElement("button",{type:"button",className:g("css-toggle","item",{"is-selected":y}),onClick:N,onKeyDown:function(e){return H(e,N)},onBlur:_,onMouseDown:x,tabIndex:0,"data-focus-styles-enabled":!0},r.default.createElement(d.default,{className:g("chevron")}),r.default.createElement("span",null,"CSS"),r.default.createElement(s.default,{className:g("chevron")})),r.default.createElement("button",{type:"button",className:g("code-toggle","item",{"is-selected":f}),onClick:D,onKeyDown:function(e){return H(e,D)},onBlur:_,onMouseDown:x,tabIndex:0,"data-focus-styles-enabled":!0},r.default.createElement(d.default,{className:g("chevron")}),r.default.createElement("span",null,"Code"),r.default.createElement(s.default,{className:g("chevron")}))):null,r.default.createElement("div",null,y&&r.default.createElement("div",{className:g("css")},l),f&&r.default.createElement("div",{className:g("code")},t))))};C.propTypes=f,C.defaultProps={isExpanded:!1};n.A=C},19603:function(e,n,t){var l=t(24994);n.A=void 0;var o=l(t(96540)),a=t(9543);n.A=function(){var e={cols:[{id:"Column-0",displayName:"Vitals"},{id:"Column-1",displayName:"March 16"},{id:"Column-2",displayName:"March 17",columnHighlightColor:a.ColumnHighlightColor.GREEN,columnHighlightDescription:"Selected time"},{id:"Column-3",displayName:"March 18"}],rows:[{id:"1",cells:[{content:"Heart Rate Monitored (bpm)"},{content:"68"},{content:"66"},{content:"67"}]},{id:"2",cells:[{content:"Temperature Oral (degC)"},{content:"36.7"},{content:"36.9"},{content:"37"}]},{id:"3",cells:[{content:"Cardiac Index (L/min/m2)"},{content:"2.25"},{content:"2.28"},{content:"2.8"}]},{id:"4",cells:[{content:"ICP (mmHg)"},{content:"11"},{content:"11"},{content:"12"}]},{id:"5",cells:[{content:"CPP (mmHg)"},{content:"63"},{content:"47"},{content:"48"}]}]},n=e.cols,t=e.rows;return o.default.createElement(a.FlowsheetDataGrid,{id:"terra-flowsheet-data-grid-column-highlight-green",columns:n,rows:t,ariaLabel:"Flowsheet Data Grid"})}},44536:function(e,n,t){var l=t(24994);n.A=void 0;var o=l(t(96540)),a=t(9543);n.A=function(){var e={cols:[{id:"Column-0",displayName:"Vitals"},{id:"Column-1",displayName:"March 16"},{id:"Column-2",displayName:"March 17",columnHighlightColor:a.ColumnHighlightColor.ORANGE,columnHighlightDescription:"Most recent time"},{id:"Column-3",displayName:"March 18"}],rows:[{id:"1",cells:[{content:"Heart Rate Monitored (bpm)"},{content:"68"},{content:"66"},{content:"67"}]},{id:"2",cells:[{content:"Temperature Oral (degC)"},{content:"36.7"},{content:"36.9"},{content:"37"}]},{id:"3",cells:[{content:"Cardiac Index (L/min/m2)"},{content:"2.25"},{content:"2.28"},{content:"2.8"}]},{id:"4",cells:[{content:"ICP (mmHg)"},{content:"11"},{content:"11"},{content:"12"}]},{id:"5",cells:[{content:"CPP (mmHg)"},{content:"63"},{content:"47"},{content:"48"}]}]},n=e.cols,t=e.rows;return o.default.createElement(a.FlowsheetDataGrid,{id:"terra-flowsheet-data-grid-column-highlight",columns:n,rows:t,ariaLabel:"Flowsheet Data Grid"})}},7495:function(e,n,t){t.r(n),t.d(n,{default:function(){return O}});var l=t(96540),o=t(36665),a=t(44536),r=["components"];function i(){return i=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l])}return e},i.apply(this,arguments)}function c(e,n){if(null==e)return{};var t,l,o=function(e,n){if(null==e)return{};var t,l,o={},a=Object.keys(e);for(l=0;l<a.length;l++)t=a[l],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)t=a[l],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var m={};function d(e){var n=e.components,t=c(e,r);return(0,o.mdx)("wrapper",i({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport { FlowsheetDataGrid, ColumnHighlightColor } from 'terra-data-grid';\n\nconst ColumnHighlightOrange = () => {\n  const gridDataJSON = {\n    cols: [\n      { id: 'Column-0', displayName: 'Vitals' },\n      { id: 'Column-1', displayName: 'March 16' },\n      {\n        id: 'Column-2',\n        displayName: 'March 17',\n        columnHighlightColor: ColumnHighlightColor.ORANGE,\n        columnHighlightDescription: 'Most recent time',\n      },\n      { id: 'Column-3', displayName: 'March 18' },\n    ],\n    rows: [\n      {\n        id: '1',\n        cells: [\n          { content: 'Heart Rate Monitored (bpm)' },\n          { content: '68' },\n          { content: '66' },\n          { content: '67' },\n        ],\n      },\n      {\n        id: '2',\n        cells: [\n          { content: 'Temperature Oral (degC)' },\n          { content: '36.7' },\n          { content: '36.9' },\n          { content: '37' },\n        ],\n      },\n      {\n        id: '3',\n        cells: [\n          { content: 'Cardiac Index (L/min/m2)' },\n          { content: '2.25' },\n          { content: '2.28' },\n          { content: '2.8' },\n        ],\n      },\n      {\n        id: '4',\n        cells: [\n          { content: 'ICP (mmHg)' },\n          { content: '11' },\n          { content: '11' },\n          { content: '12' },\n        ],\n      },\n      {\n        id: '5',\n        cells: [\n          { content: 'CPP (mmHg)' },\n          { content: '63' },\n          { content: '47' },\n          { content: '48' },\n        ],\n      },\n    ],\n  };\n\n  const { cols, rows } = gridDataJSON;\n\n  return (\n    <FlowsheetDataGrid\n      id=\"terra-flowsheet-data-grid-column-highlight\"\n      columns={cols}\n      rows={rows}\n      ariaLabel=\"Flowsheet Data Grid\"\n    />\n  );\n};\n\nexport default ColumnHighlightOrange;\n\n")))}d.isMDXComponent=!0;var s=t(201),u=function(e){var n=e.title,t=e.description,o=e.isExpanded;return l.createElement(s.A,{title:n||"Column Highlight Orange",description:t,example:l.createElement(a.A,null),exampleSrc:l.createElement(d,null),isExpanded:o})},p=t(19603),h=["components"];function g(){return g=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l])}return e},g.apply(this,arguments)}function f(e,n){if(null==e)return{};var t,l,o=function(e,n){if(null==e)return{};var t,l,o={},a=Object.keys(e);for(l=0;l<a.length;l++)t=a[l],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)t=a[l],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var _={};function x(e){var n=e.components,t=f(e,h);return(0,o.mdx)("wrapper",g({},_,t,{components:n,mdxType:"MDXLayout"}),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport { FlowsheetDataGrid, ColumnHighlightColor } from 'terra-data-grid';\n\nconst ColumnHighlightGreen = () => {\n  const gridDataJSON = {\n    cols: [\n      { id: 'Column-0', displayName: 'Vitals' },\n      { id: 'Column-1', displayName: 'March 16' },\n      {\n        id: 'Column-2',\n        displayName: 'March 17',\n        columnHighlightColor: ColumnHighlightColor.GREEN,\n        columnHighlightDescription: 'Selected time',\n      },\n      { id: 'Column-3', displayName: 'March 18' },\n    ],\n    rows: [\n      {\n        id: '1',\n        cells: [\n          { content: 'Heart Rate Monitored (bpm)' },\n          { content: '68' },\n          { content: '66' },\n          { content: '67' },\n        ],\n      },\n      {\n        id: '2',\n        cells: [\n          { content: 'Temperature Oral (degC)' },\n          { content: '36.7' },\n          { content: '36.9' },\n          { content: '37' },\n        ],\n      },\n      {\n        id: '3',\n        cells: [\n          { content: 'Cardiac Index (L/min/m2)' },\n          { content: '2.25' },\n          { content: '2.28' },\n          { content: '2.8' },\n        ],\n      },\n      {\n        id: '4',\n        cells: [\n          { content: 'ICP (mmHg)' },\n          { content: '11' },\n          { content: '11' },\n          { content: '12' },\n        ],\n      },\n      {\n        id: '5',\n        cells: [\n          { content: 'CPP (mmHg)' },\n          { content: '63' },\n          { content: '47' },\n          { content: '48' },\n        ],\n      },\n    ],\n  };\n\n  const { cols, rows } = gridDataJSON;\n\n  return (\n    <FlowsheetDataGrid\n      id=\"terra-flowsheet-data-grid-column-highlight-green\"\n      columns={cols}\n      rows={rows}\n      ariaLabel=\"Flowsheet Data Grid\"\n    />\n  );\n};\n\nexport default ColumnHighlightGreen;\n\n")))}x.isMDXComponent=!0;var C=function(e){var n=e.title,t=e.description,o=e.isExpanded;return l.createElement(s.A,{title:n||"Column Highlight Green",description:t,example:l.createElement(p.A,null),exampleSrc:l.createElement(x,null),isExpanded:o})},b=["components"];function w(){return w=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l])}return e},w.apply(this,arguments)}function y(e,n){if(null==e)return{};var t,l,o=function(e,n){if(null==e)return{};var t,l,o={},a=Object.keys(e);for(l=0;l<a.length;l++)t=a[l],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)t=a[l],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var v={},E="wrapper";function O(e){var n=e.components,t=y(e,b);return(0,o.mdx)(E,w({},v,t,{components:n,mdxType:"MDXLayout"}),(0,o.mdx)("h1",{id:"flowsheet-data-grid-with-orange-column-highlighting"},"Flowsheet Data Grid with orange column highlighting"),(0,o.mdx)("h3",{id:"description"},"Description"),(0,o.mdx)("p",null,"This example demonstrates a basic ",(0,o.mdx)("a",{parentName:"p",href:"/terra-ui/components/cerner-terra-framework-docs/data-grid/flowsheet-data-grid/about"},"Flowsheet Data Grid")," with orange column highlighting."),(0,o.mdx)("p",null,"Below are the attributes used for column highlighting."),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"columnHighlightColor")," can be used to set highlight colour to either Orange or Green."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"columnHighlightDescription")," can be used to provide context regarding the highlighted column to screen readers.")),(0,o.mdx)(u,{title:"Flowsheet Data Grid with orange column highlight",mdxType:"ColumnHighlightOrange"}),(0,o.mdx)("h1",{id:"flowsheet-data-grid-with-green-column-highlighting"},"Flowsheet Data Grid with green column highlighting"),(0,o.mdx)("p",null,"This example demonstrates a basic ",(0,o.mdx)("a",{parentName:"p",href:"/terra-ui/components/cerner-terra-framework-docs/data-grid/flowsheet-data-grid/about"},"Flowsheet Data Grid")," with green column highlighting."),(0,o.mdx)(C,{title:"Flowsheet Data Grid with green column highlight",mdxType:"ColumnHighlightGreen"}))}O.isMDXComponent=!0},89986:function(e,n,t){t.r(n),n.default={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___rBbtD","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___GzA23",template:"ExampleTemplate-module__template___a4uPk",header:"ExampleTemplate-module__header___iFXV3",content:"ExampleTemplate-module__content___48m4Q",description:"ExampleTemplate-module__description___NwBJo",footer:"ExampleTemplate-module__footer___GpSoG","button-container":"ExampleTemplate-module__button-container___rAD11",css:"ExampleTemplate-module__css___+jtk1",code:"ExampleTemplate-module__code___7rC6C","css-toggle":"ExampleTemplate-module__css-toggle___chHK7","code-toggle":"ExampleTemplate-module__code-toggle___TGlE-","is-selected":"ExampleTemplate-module__is-selected___0BYwS",item:"ExampleTemplate-module__item___8FTQq",chevron:"ExampleTemplate-module__chevron___VbY7N",title:"ExampleTemplate-module__title___r+nbJ","dynamic-content":"ExampleTemplate-module__dynamic-content___k+1H7"}}}]);