"use strict";(self.webpackChunkterra_ui=self.webpackChunkterra_ui||[]).push([[3758],{201:function(e,t,n){var l=n(24994),o=n(73738);t.A=void 0;var a=l(n(85715)),r=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=o(e)&&"function"!=typeof e)return{default:e};var n=h(t);if(n&&n.has(e))return n.get(e);var l={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if("default"!==r&&Object.prototype.hasOwnProperty.call(e,r)){var i=a?Object.getOwnPropertyDescriptor(e,r):null;i&&(i.get||i.set)?Object.defineProperty(l,r,i):l[r]=e[r]}return l.default=e,n&&n.set(e,l),l}(n(96540)),i=l(n(5556)),c=l(n(67967)),m=n(92912),u=l(n(49558)),d=l(n(53665)),s=n(25966),p=l(n(89986));function h(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(h=function(e){return e?n:t})(e)}var f=c.default.bind(p.default),g={example:i.default.element,exampleSrc:i.default.element,exampleCssSrc:i.default.element,title:i.default.string,description:i.default.node,isExpanded:i.default.bool},_=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},x=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},b=function(e){var t=e.example,n=e.exampleSrc,l=e.exampleCssSrc,o=e.title,i=e.description,c=e.isExpanded,p=(0,r.useState)(c),h=(0,a.default)(p,2),g=h[0],b=h[1],E=(0,r.useState)(!1),v=(0,a.default)(E,2),y=v[0],C=v[1],w=r.default.useContext(m.ThemeContext),N=void 0!==l,O=function(){C(!y),g&&b(!g)},T=function(){b(!g),y&&C(!y)},D=function(e,t){e.nativeEvent.keyCode!==s.KEY_SPACE&&e.nativeEvent.keyCode!==s.KEY_RETURN||(e.preventDefault(),t())};return r.default.createElement("div",{className:f("template",w.className)},r.default.createElement("div",{className:f("header")},o&&r.default.createElement("h2",{className:f("title")},o)),r.default.createElement("div",{className:f("content")},i&&r.default.createElement("div",{className:f("description")},i),t),r.default.createElement("div",{className:f("footer")},n?r.default.createElement("div",{className:f("button-container")},N&&r.default.createElement("button",{type:"button",className:f("css-toggle","item",{"is-selected":y}),onClick:O,onKeyDown:function(e){return D(e,O)},onBlur:_,onMouseDown:x,tabIndex:0,"data-focus-styles-enabled":!0},r.default.createElement(u.default,{className:f("chevron")}),r.default.createElement("span",null,"CSS"),r.default.createElement(d.default,{className:f("chevron")})),r.default.createElement("button",{type:"button",className:f("code-toggle","item",{"is-selected":g}),onClick:T,onKeyDown:function(e){return D(e,T)},onBlur:_,onMouseDown:x,tabIndex:0,"data-focus-styles-enabled":!0},r.default.createElement(u.default,{className:f("chevron")}),r.default.createElement("span",null,"Code"),r.default.createElement(d.default,{className:f("chevron")}))):null,r.default.createElement("div",null,y&&r.default.createElement("div",{className:f("css")},l),g&&r.default.createElement("div",{className:f("code")},n))))};b.propTypes=g,b.defaultProps={isExpanded:!1};t.A=b},83535:function(e,t,n){var l=n(24994);t.A=void 0;var o=l(n(96540)),a=n(9543);t.A=function(){var e={cols:[{id:"Column-0",displayName:"Vitals"},{id:"Column-1",displayName:"March 16"},{id:"Column-2",displayName:"March 17",columnHighlightColor:a.ColumnHighlightColor.ORANGE,columnHighlightDescription:"Most recent time"},{id:"Column-3",displayName:"March 18",columnHighlightColor:a.ColumnHighlightColor.GREEN,columnHighlightDescription:"Selected time"}],rows:[{id:"1",cells:[{content:"Heart Rate Monitored (bpm)"},{content:"68"},{content:"66"},{content:"67"}]},{id:"2",cells:[{content:"Temperature Oral (degC)"},{content:"36.7"},{content:"36.9"},{content:"37"}]},{id:"3",cells:[{content:"Cardiac Index (L/min/m2)"},{content:"2.25"},{content:"2.28"},{content:"2.8"}]},{id:"4",cells:[{content:"ICP (mmHg)"},{content:"11"},{content:"11"},{content:"12"}]},{id:"5",cells:[{content:"CPP (mmHg)"},{content:"63"},{content:"47"},{content:"48"}]}]},t=e.cols,n=e.rows;return o.default.createElement(a.FlowsheetDataGrid,{id:"terra-flowsheet-data-grid-multi-column-highlight",columns:t,rows:n,ariaLabel:"Flowsheet Data Grid"})}},41535:function(e,t,n){n.r(t),n.d(t,{default:function(){return x}});var l=n(96540),o=n(36665),a=n(83535),r=["components"];function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},i.apply(this,arguments)}function c(e,t){if(null==e)return{};var n,l,o=function(e,t){if(null==e)return{};var n,l,o={},a=Object.keys(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var m={};function u(e){var t=e.components,n=c(e,r);return(0,o.mdx)("wrapper",i({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport { ColumnHighlightColor, FlowsheetDataGrid } from 'terra-data-grid';\n\nconst MultiColumnHighlight = () => {\n  const gridDataJSON = {\n    cols: [\n      { id: 'Column-0', displayName: 'Vitals' },\n      { id: 'Column-1', displayName: 'March 16' },\n      {\n        id: 'Column-2',\n        displayName: 'March 17',\n        columnHighlightColor: ColumnHighlightColor.ORANGE,\n        columnHighlightDescription: 'Most recent time',\n      },\n      {\n        id: 'Column-3',\n        displayName: 'March 18',\n        columnHighlightColor: ColumnHighlightColor.GREEN,\n        columnHighlightDescription: 'Selected time',\n      },\n    ],\n    rows: [\n      {\n        id: '1',\n        cells: [\n          { content: 'Heart Rate Monitored (bpm)' },\n          { content: '68' },\n          { content: '66' },\n          { content: '67' },\n        ],\n      },\n      {\n        id: '2',\n        cells: [\n          { content: 'Temperature Oral (degC)' },\n          { content: '36.7' },\n          { content: '36.9' },\n          { content: '37' },\n        ],\n      },\n      {\n        id: '3',\n        cells: [\n          { content: 'Cardiac Index (L/min/m2)' },\n          { content: '2.25' },\n          { content: '2.28' },\n          { content: '2.8' },\n        ],\n      },\n      {\n        id: '4',\n        cells: [\n          { content: 'ICP (mmHg)' },\n          { content: '11' },\n          { content: '11' },\n          { content: '12' },\n        ],\n      },\n      {\n        id: '5',\n        cells: [\n          { content: 'CPP (mmHg)' },\n          { content: '63' },\n          { content: '47' },\n          { content: '48' },\n        ],\n      },\n    ],\n  };\n\n  const { cols, rows } = gridDataJSON;\n\n  return (\n    <FlowsheetDataGrid\n      id=\"terra-flowsheet-data-grid-multi-column-highlight\"\n      columns={cols}\n      rows={rows}\n      ariaLabel=\"Flowsheet Data Grid\"\n    />\n  );\n};\n\nexport default MultiColumnHighlight;\n\n")))}u.isMDXComponent=!0;var d=n(201),s=function(e){var t=e.title,n=e.description,o=e.isExpanded;return l.createElement(d.A,{title:t||"Multi Column Highlight",description:n,example:l.createElement(a.A,null),exampleSrc:l.createElement(u,null),isExpanded:o})},p=["components"];function h(){return h=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},h.apply(this,arguments)}function f(e,t){if(null==e)return{};var n,l,o=function(e,t){if(null==e)return{};var n,l,o={},a=Object.keys(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var g={},_="wrapper";function x(e){var t=e.components,n=f(e,p);return(0,o.mdx)(_,h({},g,n,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("h1",{id:"flowsheet-data-grid-with-multi-column-highlighting"},"Flowsheet Data Grid with multi-column highlighting"),(0,o.mdx)("h3",{id:"description"},"Description"),(0,o.mdx)("p",null,"This example demonstrates a basic ",(0,o.mdx)("a",{parentName:"p",href:"/terra-ui/components/cerner-terra-framework-docs/data-grid/flowsheet-data-grid/about"},"Flowsheet Data Grid")," with multi-column highlighting."),(0,o.mdx)("p",null,"Below are the attributes used for column highlighting."),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"columnHighlightColor")," can be used to set highlight colour to either Orange or Green."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"columnHighlightDescription")," can be used to provide context regarding the highlighted column to screen readers.")),(0,o.mdx)(s,{title:"Flowsheet Data Grid with orange and green column highlight",mdxType:"MultiColumnHighlight"}))}x.isMDXComponent=!0},89986:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___rBbtD","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___GzA23",template:"ExampleTemplate-module__template___a4uPk",header:"ExampleTemplate-module__header___iFXV3",content:"ExampleTemplate-module__content___48m4Q",description:"ExampleTemplate-module__description___NwBJo",footer:"ExampleTemplate-module__footer___GpSoG","button-container":"ExampleTemplate-module__button-container___rAD11",css:"ExampleTemplate-module__css___+jtk1",code:"ExampleTemplate-module__code___7rC6C","css-toggle":"ExampleTemplate-module__css-toggle___chHK7","code-toggle":"ExampleTemplate-module__code-toggle___TGlE-","is-selected":"ExampleTemplate-module__is-selected___0BYwS",item:"ExampleTemplate-module__item___8FTQq",chevron:"ExampleTemplate-module__chevron___VbY7N",title:"ExampleTemplate-module__title___r+nbJ","dynamic-content":"ExampleTemplate-module__dynamic-content___k+1H7"}}}]);