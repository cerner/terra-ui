"use strict";(self.webpackChunkterra_ui=self.webpackChunkterra_ui||[]).push([[16216],{33792:function(e,t,n){var a=n(22411),l=n(59848);t.c=void 0;var o=a(n(97936)),r=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=l(e)&&"function"!=typeof e)return{default:e};var n=f(t);if(n&&n.has(e))return n.get(e);var a={__proto__:null},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if("default"!==r&&Object.prototype.hasOwnProperty.call(e,r)){var c=o?Object.getOwnPropertyDescriptor(e,r):null;c&&(c.get||c.set)?Object.defineProperty(a,r,c):a[r]=e[r]}return a.default=e,n&&n.set(e,a),a}(n(11504)),c=a(n(3268)),i=a(n(74824)),d=n(93048),s=a(n(72672)),u=a(n(3308)),m=n(97196),p=a(n(86896));function f(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(f=function(e){return e?n:t})(e)}var _=i.default.bind(p.default),h={example:c.default.element,exampleSrc:c.default.element,exampleCssSrc:c.default.element,title:c.default.string,description:c.default.node,isExpanded:c.default.bool},b=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},x=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},y=function(e){var t=e.example,n=e.exampleSrc,a=e.exampleCssSrc,l=e.title,c=e.description,i=e.isExpanded,p=(0,r.useState)(i),f=(0,o.default)(p,2),h=f[0],y=f[1],v=(0,r.useState)(!1),E=(0,o.default)(v,2),g=E[0],w=E[1],O=r.default.useContext(d.ThemeContext),C=void 0!==a,N=function(){w(!g),h&&y(!h)},T=function(){y(!h),g&&w(!g)},D=function(e,t){e.nativeEvent.keyCode!==m.KEY_SPACE&&e.nativeEvent.keyCode!==m.KEY_RETURN||(e.preventDefault(),t())};return r.default.createElement("div",{className:_("template",O.className)},r.default.createElement("div",{className:_("header")},l&&r.default.createElement("h2",{className:_("title")},l)),r.default.createElement("div",{className:_("content")},c&&r.default.createElement("div",{className:_("description")},c),t),r.default.createElement("div",{className:_("footer")},n?r.default.createElement("div",{className:_("button-container")},C&&r.default.createElement("button",{type:"button",className:_("css-toggle","item",{"is-selected":g}),onClick:N,onKeyDown:function(e){return D(e,N)},onBlur:b,onMouseDown:x,tabIndex:0,"data-focus-styles-enabled":!0},r.default.createElement(s.default,{className:_("chevron")}),r.default.createElement("span",null,"CSS"),r.default.createElement(u.default,{className:_("chevron")})),r.default.createElement("button",{type:"button",className:_("code-toggle","item",{"is-selected":h}),onClick:T,onKeyDown:function(e){return D(e,T)},onBlur:b,onMouseDown:x,tabIndex:0,"data-focus-styles-enabled":!0},r.default.createElement(s.default,{className:_("chevron")}),r.default.createElement("span",null,"Code"),r.default.createElement(u.default,{className:_("chevron")}))):null,r.default.createElement("div",null,g&&r.default.createElement("div",{className:_("css")},a),h&&r.default.createElement("div",{className:_("code")},n))))};y.propTypes=h,y.defaultProps={isExpanded:!1};t.c=y},17944:function(e,t,n){var a=n(22411);t.c=void 0;var l=a(n(11504)),o=n(14147),r=[{id:"Column-0",displayName:"Vitals"},{id:"Column-1",displayName:"March 16"},{id:"Column-2",displayName:"March 17"},{id:"Column-3",displayName:"March 18"}],c=[{id:"1",cells:[{content:"Heart Rate Monitored (bpm)"},{content:"68"},{content:"66"},{content:"67"}]},{id:"2",cells:[{content:"Temperature Oral (degC)"},{content:"36.7"},{content:"36.9"},{content:"37"}]},{id:"3",cells:[{content:"Cardiac Index (L/min/m2)"},{content:"2.25"},{content:"2.28"},{content:"2.8"}]},{id:"4",cells:[{content:"ICP (mmHg)"},{content:"11"},{content:"11"},{content:"12"}]},{id:"5",cells:[{content:"CPP (mmHg)"},{content:"63"},{content:"47"},{content:"48"}]}];t.c=function(){var e=r,t=c;return l.default.createElement(o.FlowsheetDataGrid,{id:"default-terra-flowsheet-data-grid",columns:e,rows:t,ariaLabel:"Flowsheet Data Grid"})}},28276:function(e,t,n){n.r(t),n.d(t,{default:function(){return x}});var a=n(11504),l=n(69788),o=n(17944),r=["components"];function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},c.apply(this,arguments)}function i(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var d={};function s(e){var t=e.components,n=i(e,r);return(0,l.mdx)("wrapper",c({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport { FlowsheetDataGrid } from 'terra-data-grid';\n\nconst gridDataJSON = {\n  cols: [\n    { id: 'Column-0', displayName: 'Vitals' },\n    { id: 'Column-1', displayName: 'March 16' },\n    { id: 'Column-2', displayName: 'March 17' },\n    { id: 'Column-3', displayName: 'March 18' },\n  ],\n  rows: [\n    {\n      id: '1',\n      cells: [\n        { content: 'Heart Rate Monitored (bpm)' },\n        { content: '68' },\n        { content: '66' },\n        { content: '67' },\n      ],\n    },\n    {\n      id: '2',\n      cells: [\n        { content: 'Temperature Oral (degC)' },\n        { content: '36.7' },\n        { content: '36.9' },\n        { content: '37' },\n      ],\n    },\n    {\n      id: '3',\n      cells: [\n        { content: 'Cardiac Index (L/min/m2)' },\n        { content: '2.25' },\n        { content: '2.28' },\n        { content: '2.8' },\n      ],\n    },\n    {\n      id: '4',\n      cells: [\n        { content: 'ICP (mmHg)' },\n        { content: '11' },\n        { content: '11' },\n        { content: '12' },\n      ],\n    },\n    {\n      id: '5',\n      cells: [\n        { content: 'CPP (mmHg)' },\n        { content: '63' },\n        { content: '47' },\n        { content: '48' },\n      ],\n    },\n  ],\n};\n\nconst BasicFlowsheetDataGrid = () => {\n  const { cols, rows } = gridDataJSON;\n\n  return (\n    <FlowsheetDataGrid\n      id=\"default-terra-flowsheet-data-grid\"\n      columns={cols}\n      rows={rows}\n      ariaLabel=\"Flowsheet Data Grid\"\n    />\n  );\n};\n\nexport default BasicFlowsheetDataGrid;\n\n")))}s.isMDXComponent=!0;var u=n(33792),m=function(e){var t=e.title,n=e.description,l=e.isExpanded;return a.createElement(u.c,{title:t||"Basic Flowsheet Data Grid",description:n,example:a.createElement(o.c,null),exampleSrc:a.createElement(s,null),isExpanded:l})},p=["components"];function f(){return f=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},f.apply(this,arguments)}function _(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var h={},b="wrapper";function x(e){var t=e.components,n=_(e,p);return(0,l.mdx)(b,f({},h,n,{components:t,mdxType:"MDXLayout"}),(0,l.mdx)("h1",{id:"basic-flowsheet-data-grid"},"Basic Flowsheet Data Grid"),(0,l.mdx)("h3",{id:"description"},"Description"),(0,l.mdx)("p",null,"This example demonstrates a basic ",(0,l.mdx)("a",{parentName:"p",href:"/terra-ui/components/cerner-terra-framework-docs/data-grid/flowsheet-data-grid/about"},"Flowsheet Data Grid")," with keyboard interactions."),(0,l.mdx)(m,{title:"Basic Flowsheet Data Grid",mdxType:"BasicFlowsheetDataGrid"}))}x.isMDXComponent=!0},86896:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___rBbtD","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___GzA23",template:"ExampleTemplate-module__template___a4uPk",header:"ExampleTemplate-module__header___iFXV3",content:"ExampleTemplate-module__content___48m4Q",description:"ExampleTemplate-module__description___NwBJo",footer:"ExampleTemplate-module__footer___GpSoG","button-container":"ExampleTemplate-module__button-container___rAD11",css:"ExampleTemplate-module__css___+jtk1",code:"ExampleTemplate-module__code___7rC6C","css-toggle":"ExampleTemplate-module__css-toggle___chHK7","code-toggle":"ExampleTemplate-module__code-toggle___TGlE-","is-selected":"ExampleTemplate-module__is-selected___0BYwS",item:"ExampleTemplate-module__item___8FTQq",chevron:"ExampleTemplate-module__chevron___VbY7N",title:"ExampleTemplate-module__title___r+nbJ","dynamic-content":"ExampleTemplate-module__dynamic-content___k+1H7"}}}]);