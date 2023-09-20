"use strict";(self.webpackChunkterra_ui=self.webpackChunkterra_ui||[]).push([[97344,19260],{76116:function(e,t,n){t.Z=void 0;var l=o(n(67294)),a=o(n(7270)),r=o(n(20993));function o(e){return e&&e.__esModule?e:{default:e}}var c=function(){return l.default.createElement(a.default,{summaryId:"example-percentage-table",summary:"This table shows an implementation of percentage width table columns.",numberOfColumns:4,cellPaddingStyle:"standard",columnWidths:[{percentage:20},{percentage:40},{percentage:10},{percentage:30}],dividerStyle:"horizontal",headerData:{cells:[{key:"cell-0",id:"unique-cell-0",children:"20%"},{key:"cell-1",id:"unique-cell-1",children:"40%"},{key:"cell-2",id:"unique-cell-2",children:"10%"},{key:"cell-3",id:"unique-cell-3",children:"30%"}]},bodyData:[{rows:(e=r.default,e.map((function(e){return{key:(t=e).key,cells:(n=t.cells,n.map((function(e){return function(e){return{key:e.key,children:e.title}}(e)})))};var t,n})))}]});var e};t.Z=c},20993:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=[{key:"unique-0",toggleText:"Toggle Power Row 0",discloseText:"Power Row 0 - Details",primaryIndex:1,cells:[{key:"unique-0-0",title:"Dave Smith"},{key:"unique-0-1",title:"123 Adams Drive"},{key:"unique-0-2",title:"123-456-7890"},{key:"unique-0-3",title:"dave.smith@gmail.com"}]},{key:"unique-1",toggleText:"Toggle Power Row 1",discloseText:"Power Row 1 - Details",primaryIndex:1,cells:[{key:"unique-1-0",title:"Michael Smith"},{key:"unique-1-1",title:"345 Raymond Road"},{key:"unique-1-2",title:"111-222-3333"},{key:"unique-1-3",title:"michael.smith@gmail.com"}]},{key:"unique-2",toggleText:"Toggle Power Row 2",discloseText:"Power Row 2 - Details",primaryIndex:1,cells:[{key:"unique-2-0",title:"Jack Smith"},{key:"unique-2-1",title:"567 Drive Street"},{key:"unique-2-2",title:"222-333-4444"},{key:"unique-2-3",title:"jack.smith@gmail.com"}]},{key:"unique-3",toggleText:"Toggle Power Row 3",discloseText:"Power Row 3 - Details",primaryIndex:1,cells:[{key:"unique-3-0",title:"Tom Smith"},{key:"unique-3-1",title:"789 Bay Road"},{key:"unique-3-2",title:"555-666-7777"},{key:"unique-3-3",title:"tom.smith@gmail.com"}]},{key:"unique-4",toggleText:"Toggle Power Row 4",discloseText:"Power Row 4 - Details",primaryIndex:1,cells:[{key:"unique-4-0",title:"Paul Smith"},{key:"unique-4-1",title:"123 Adams Drive"},{key:"unique-4-2",title:"777-888-9999"},{key:"unique-4-3",title:"paul.smith@gmail.com"}]}];t.default=n},49271:function(e,t,n){var l=n(64836),a=n(18698);t.Z=void 0;var r=l(n(27424)),o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!=typeof e)return{default:e};var n=f(t);if(n&&n.has(e))return n.get(e);var l={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var c=r?Object.getOwnPropertyDescriptor(e,o):null;c&&(c.get||c.set)?Object.defineProperty(l,o,c):l[o]=e[o]}l.default=e,n&&n.set(e,l);return l}(n(67294)),c=l(n(45697)),i=l(n(47166)),u=n(21538),d=l(n(33864)),s=l(n(23399)),m=n(51051),p=l(n(53560));function f(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(f=function(e){return e?n:t})(e)}var y=i.default.bind(p.default),h={example:c.default.element,exampleSrc:c.default.element,exampleCssSrc:c.default.element,title:c.default.string,description:c.default.node,isExpanded:c.default.bool},g=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},_=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},w=function(e){var t=e.example,n=e.exampleSrc,l=e.exampleCssSrc,a=e.title,c=e.description,i=e.isExpanded,p=(0,o.useState)(i),f=(0,r.default)(p,2),h=f[0],w=f[1],b=(0,o.useState)(!1),x=(0,r.default)(b,2),v=x[0],k=x[1],T=o.default.useContext(u.ThemeContext),E=void 0!==l,q=function(){k(!v),h&&w(!h)},O=function(){w(!h),v&&k(!v)},D=function(e,t){e.nativeEvent.keyCode!==m.KEY_SPACE&&e.nativeEvent.keyCode!==m.KEY_RETURN||(e.preventDefault(),t())};return o.default.createElement("div",{className:y("template",T.className)},o.default.createElement("div",{className:y("header")},a&&o.default.createElement("h2",{className:y("title")},a)),o.default.createElement("div",{className:y("content")},c&&o.default.createElement("div",{className:y("description")},c),t),o.default.createElement("div",{className:y("footer")},n?o.default.createElement("div",{className:y("button-container")},E&&o.default.createElement("button",{type:"button",className:y("css-toggle","item",{"is-selected":v}),onClick:q,onKeyDown:function(e){return D(e,q)},onBlur:g,onMouseDown:_,tabIndex:0,"data-focus-styles-enabled":!0},o.default.createElement(d.default,{className:y("chevron")}),o.default.createElement("span",null,"CSS"),o.default.createElement(s.default,{className:y("chevron")})),o.default.createElement("button",{type:"button",className:y("code-toggle","item",{"is-selected":h}),onClick:O,onKeyDown:function(e){return D(e,O)},onBlur:g,onMouseDown:_,tabIndex:0,"data-focus-styles-enabled":!0},o.default.createElement(d.default,{className:y("chevron")}),o.default.createElement("span",null,"Code"),o.default.createElement(s.default,{className:y("chevron")}))):null,o.default.createElement("div",null,v&&o.default.createElement("div",{className:y("css")},l),h&&o.default.createElement("div",{className:y("code")},n))))};w.propTypes=h,w.defaultProps={isExpanded:!1};var b=w;t.Z=b},97344:function(e,t,n){n.r(t),n.d(t,{default:function(){return _}});var l=n(67294),a=n(81254),r=n(76116),o=["components"];function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},c.apply(this,arguments)}function i(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u={};function d(e){var t=e.components,n=i(e,o);return(0,a.mdx)("wrapper",c({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Table from 'terra-table';\nimport mockData from './mock-data/mock-select';\n\nconst createCell = cell => ({ key: cell.key, children: cell.title });\n\nconst createCellsForRow = cells => cells.map(cell => createCell(cell));\n\nconst createRow = rowData => (\n  {\n    key: rowData.key,\n    cells: createCellsForRow(rowData.cells),\n  }\n);\n\nconst createRows = data => data.map(childItem => createRow(childItem));\n\nconst PercentageWidthTable = () => (\n  <Table\n    summaryId=\"example-percentage-table\"\n    summary=\"This table shows an implementation of percentage width table columns.\"\n    numberOfColumns={4}\n    cellPaddingStyle=\"standard\"\n    columnWidths={[\n      { percentage: 20 },\n      { percentage: 40 },\n      { percentage: 10 },\n      { percentage: 30 },\n    ]}\n    dividerStyle=\"horizontal\"\n    headerData={{\n      cells: [\n        { key: 'cell-0', id: 'unique-cell-0', children: '20%' },\n        { key: 'cell-1', id: 'unique-cell-1', children: '40%' },\n        { key: 'cell-2', id: 'unique-cell-2', children: '10%' },\n        { key: 'cell-3', id: 'unique-cell-3', children: '30%' },\n      ],\n    }}\n    bodyData={[{\n      rows: createRows(mockData),\n    }]}\n  />\n);\n\nexport default PercentageWidthTable;\n\n")))}d.isMDXComponent=!0;var s=n(49271),m=function(e){var t=e.title,n=e.description,a=e.isExpanded;return l.createElement(s.Z,{title:t||"Percentage Width Table",description:n,example:l.createElement(r.Z,null),exampleSrc:l.createElement(d,null),isExpanded:a})},p=["components"];function f(){return f=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},f.apply(this,arguments)}function y(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var h={},g="wrapper";function _(e){var t=e.components,n=y(e,p);return(0,a.mdx)(g,f({},h,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("h1",{id:"terra-table---percentage-width-columns"},"Terra Table - Percentage Width Columns"),(0,a.mdx)("h2",{id:"create-row-and-cell-generation-functions"},"Create Row and Cell Generation Functions"),(0,a.mdx)("p",null,"First we declare our method of creating our rows."),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-diff"},"+ const createRow = rowData => (\n+   {\n+     key: rowData.key,\n+     cells: createCellsForRow(rowData.cells),\n+   }\n+ );\n\n+ const createRows = data => data.map(childItem => createRow(childItem));\n")),(0,a.mdx)("p",null,"Followed by unpacking our cell data into those rows."),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-diff"},"+ const createCell = cell => ({ key: cell.key, children: cell.title });\n\n+ const createCellsForRow = cells => cells.map(cell => createCell(cell));\n")),(0,a.mdx)("p",null,"And then we define the functional component returning our table."),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-diff"},"+ const ScalarWidthTable = () => (\n+   <Table\n+     summaryId=\"example-percentage-table\"\n+     summary=\"This table shows an implementation of percentage width table columns.\"\n+     numberOfColumns={4}\n+     cellPaddingStyle=\"standard\"\n+     headerData={{\n+       cells: [\n+         { key: 'cell-0', id: `unique-cell-0`, children: '20%' },\n+         { key: 'cell-1', id: `unique-cell-1`, children: '40%' },\n+         { key: 'cell-2', id: `unique-cell-2`, children: '10%' },\n+         { key: 'cell-3', id: `unique-cell-3`, children: '30%' },\n+       ],\n+     }}\n+     bodyData={[{\n+       rows: createRows(mockData),\n+     }]}\n+   />\n+ );\n")),(0,a.mdx)("p",null,"Then in order to adjust our columns, we set the ",(0,a.mdx)("inlineCode",{parentName:"p"},"columnWidths")," prop with your appropriate index based width values."),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-diff"},"const ScalarWidthTable = () => (\n  <Table\n    summaryId=\"example-percentage-table\"\n    summary=\"This table shows an implementation of percentage width table columns.\"\n    numberOfColumns={4}\n    cellPaddingStyle=\"standard\"\n+   columnWidths={[\n+     { percentage: 20 },\n+     { percentage: 40 },\n+     { percentage: 10 },\n+     { percentage: 30 },\n+   ]}\n    headerData={{\n      cells: [\n        { key: 'cell-0', id: `unique-cell-0`, children: '20%' },\n        { key: 'cell-1', id: `unique-cell-1`, children: '40%' },\n        { key: 'cell-2', id: `unique-cell-2`, children: '10%' },\n        { key: 'cell-3', id: `unique-cell-3`, children: '30%' },\n      ],\n    }}\n    bodyData={[{\n      rows: createRows(mockData),\n    }]}\n  />\n);\n")),(0,a.mdx)("p",null,"Using these steps we get the following example:"),(0,a.mdx)(m,{mdxType:"PercentageWidthTable"}))}_.isMDXComponent=!0},53560:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___rBbtD","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___GzA23",template:"ExampleTemplate-module__template___a4uPk",header:"ExampleTemplate-module__header___iFXV3",content:"ExampleTemplate-module__content___48m4Q",description:"ExampleTemplate-module__description___NwBJo",footer:"ExampleTemplate-module__footer___GpSoG","button-container":"ExampleTemplate-module__button-container___rAD11",css:"ExampleTemplate-module__css___+jtk1",code:"ExampleTemplate-module__code___7rC6C","css-toggle":"ExampleTemplate-module__css-toggle___chHK7","code-toggle":"ExampleTemplate-module__code-toggle___TGlE-","is-selected":"ExampleTemplate-module__is-selected___0BYwS",item:"ExampleTemplate-module__item___8FTQq",chevron:"ExampleTemplate-module__chevron___VbY7N",title:"ExampleTemplate-module__title___r+nbJ","dynamic-content":"ExampleTemplate-module__dynamic-content___k+1H7"}},33864:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=r(n(67294)),a=r(n(99139));function r(e){return e&&e.__esModule?e:{default:e}}function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},o.apply(this,arguments)}var c=function(e){var t=o({},e);return l.default.createElement(a.default,t,l.default.createElement("path",{d:"M10.3 24 33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};c.displayName="IconChevronLeft",c.defaultProps={viewBox:"0 0 48 48","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg"};var i=c;t.default=i}}]);