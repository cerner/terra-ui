"use strict";(self.webpackChunkterra_ui=self.webpackChunkterra_ui||[]).push([[17044],{33792:function(e,t,n){var a=n(22411),l=n(59848);t.c=void 0;var o=a(n(97936)),r=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=l(e)&&"function"!=typeof e)return{default:e};var n=f(t);if(n&&n.has(e))return n.get(e);var a={__proto__:null},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if("default"!==r&&Object.prototype.hasOwnProperty.call(e,r)){var i=o?Object.getOwnPropertyDescriptor(e,r):null;i&&(i.get||i.set)?Object.defineProperty(a,r,i):a[r]=e[r]}return a.default=e,n&&n.set(e,a),a}(n(11504)),i=a(n(3268)),c=a(n(74824)),s=n(93048),d=a(n(72672)),m=a(n(3308)),u=n(97196),p=a(n(86896));function f(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(f=function(e){return e?n:t})(e)}var y=c.default.bind(p.default),b={example:i.default.element,exampleSrc:i.default.element,exampleCssSrc:i.default.element,title:i.default.string,description:i.default.node,isExpanded:i.default.bool},_=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},h=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},v=function(e){var t=e.example,n=e.exampleSrc,a=e.exampleCssSrc,l=e.title,i=e.description,c=e.isExpanded,p=(0,r.useState)(c),f=(0,o.default)(p,2),b=f[0],v=f[1],N=(0,r.useState)(!1),x=(0,o.default)(N,2),g=x[0],E=x[1],C=r.default.useContext(s.ThemeContext),S=void 0!==a,T=function(){E(!g),b&&v(!b)},O=function(){v(!b),g&&E(!g)},w=function(e,t){e.nativeEvent.keyCode!==u.KEY_SPACE&&e.nativeEvent.keyCode!==u.KEY_RETURN||(e.preventDefault(),t())};return r.default.createElement("div",{className:y("template",C.className)},r.default.createElement("div",{className:y("header")},l&&r.default.createElement("h2",{className:y("title")},l)),r.default.createElement("div",{className:y("content")},i&&r.default.createElement("div",{className:y("description")},i),t),r.default.createElement("div",{className:y("footer")},n?r.default.createElement("div",{className:y("button-container")},S&&r.default.createElement("button",{type:"button",className:y("css-toggle","item",{"is-selected":g}),onClick:T,onKeyDown:function(e){return w(e,T)},onBlur:_,onMouseDown:h,tabIndex:0,"data-focus-styles-enabled":!0},r.default.createElement(d.default,{className:y("chevron")}),r.default.createElement("span",null,"CSS"),r.default.createElement(m.default,{className:y("chevron")})),r.default.createElement("button",{type:"button",className:y("code-toggle","item",{"is-selected":b}),onClick:O,onKeyDown:function(e){return w(e,O)},onBlur:_,onMouseDown:h,tabIndex:0,"data-focus-styles-enabled":!0},r.default.createElement(d.default,{className:y("chevron")}),r.default.createElement("span",null,"Code"),r.default.createElement(m.default,{className:y("chevron")}))):null,r.default.createElement("div",null,g&&r.default.createElement("div",{className:y("css")},a),b&&r.default.createElement("div",{className:y("code")},n))))};v.propTypes=b,v.defaultProps={isExpanded:!1};t.c=v},69480:function(e,t,n){var a=n(22411);t.c=void 0;var l=a(n(11504)),o=a(n(14745)),r=[{id:"Column-0",displayName:"Patient"},{id:"Column-1",displayName:"Location"},{id:"Column-2",displayName:"Illness Severity"},{id:"Column-3",displayName:"Visit"},{id:"Column-4",displayName:"Allergy"},{id:"Column-5",displayName:"Primary Contact"},{id:"Column-6",displayName:"Generic Order Counts"},{id:"Column-7",displayName:"Patient Age"},{id:"Column-8",displayName:"Medication History"},{id:"Column-9",displayName:"My Relationship"},{id:"Column-10",displayName:"Not Selectable",isSelectable:!1}],i=[{id:"1",cells:[{content:"Fleck, Arthur"},{content:"1007-MTN"},{content:"Unstable"},{content:"Inpatient, 2 months"},{content:""},{content:"Quinzell, Harleen"},{content:""},{isMasked:!0},{isMasked:!0},{content:"Admitting Physician"},{content:"",isSelectable:!1}]},{id:"2",cells:[{content:"Wayne, Bruce"},{content:"1007-MTN-DR"},{content:"Stable"},{content:"Outpatient, 2 days"},{content:"Phytochemicals"},{content:"Grayson, Richard"},{content:""},{content:""},{isMasked:!0},{content:"Admitting Physician"},{content:"",isSelectable:!1}]},{id:"3",cells:[{content:"McDonald, Ronald"},{content:"1007-MTN-RN"},{content:"Critical"},{content:"Inpatient, 2 days"},{content:"Phytochemicals"},{content:"Smith, Melissa"},{content:""},{content:""},{isMasked:!0},{content:"Family Physician"},{content:"",isSelectable:!1}]},{id:"4",cells:[{content:"Wayne, Bruce"},{content:"1018-MTN-DR"},{content:"Stable"},{content:"Outpatient, 2 days"},{content:"Aspirin"},{content:"Jones, Gary"},{content:""},{content:""},{isMasked:!0},{content:"Primary Care Physician"},{content:"",isSelectable:!1}]}];t.c=function(){var e=r,t=i;return l.default.createElement(o.default,{id:"zebra-striped-table",overflowColumns:e,rows:t,isStriped:!0,ariaLabel:"Table with zebra striping"})}},17044:function(e,t,n){n.r(t),n.d(t,{default:function(){return h}});var a=n(11504),l=n(69788),o=n(69480),r=["components"];function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},i.apply(this,arguments)}function c(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s={};function d(e){var t=e.components,n=c(e,r);return(0,l.mdx)("wrapper",i({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Table from 'terra-table';\n\nconst tableDataJSON = {\n  cols: [\n    { id: 'Column-0', displayName: 'Patient' },\n    { id: 'Column-1', displayName: 'Location' },\n    { id: 'Column-2', displayName: 'Illness Severity' },\n    { id: 'Column-3', displayName: 'Visit' },\n    { id: 'Column-4', displayName: 'Allergy' },\n    { id: 'Column-5', displayName: 'Primary Contact' },\n    { id: 'Column-6', displayName: 'Generic Order Counts' },\n    { id: 'Column-7', displayName: 'Patient Age' },\n    { id: 'Column-8', displayName: 'Medication History' },\n    { id: 'Column-9', displayName: 'My Relationship' },\n    { id: 'Column-10', displayName: 'Not Selectable', isSelectable: false },\n  ],\n  rows: [\n    {\n      id: '1',\n      cells: [\n        { content: 'Fleck, Arthur' },\n        { content: '1007-MTN' },\n        { content: 'Unstable' },\n        { content: 'Inpatient, 2 months' },\n        { content: '' },\n        { content: 'Quinzell, Harleen' },\n        { content: '' },\n        { isMasked: true },\n        { isMasked: true },\n        { content: 'Admitting Physician' },\n        { content: '', isSelectable: false },\n      ],\n    },\n    {\n      id: '2',\n      cells: [\n        { content: 'Wayne, Bruce' },\n        { content: '1007-MTN-DR' },\n        { content: 'Stable' },\n        { content: 'Outpatient, 2 days' },\n        { content: 'Phytochemicals' },\n        { content: 'Grayson, Richard' },\n        { content: '' },\n        { content: '' },\n        { isMasked: true },\n        { content: 'Admitting Physician' },\n        { content: '', isSelectable: false },\n      ],\n    },\n    {\n      id: '3',\n      cells: [\n        { content: 'McDonald, Ronald' },\n        { content: '1007-MTN-RN' },\n        { content: 'Critical' },\n        { content: 'Inpatient, 2 days' },\n        { content: 'Phytochemicals' },\n        { content: 'Smith, Melissa' },\n        { content: '' },\n        { content: '' },\n        { isMasked: true },\n        { content: 'Family Physician' },\n        { content: '', isSelectable: false },\n      ],\n    },\n    {\n      id: '4',\n      cells: [\n        { content: 'Wayne, Bruce' },\n        { content: '1018-MTN-DR' },\n        { content: 'Stable' },\n        { content: 'Outpatient, 2 days' },\n        { content: 'Aspirin' },\n        { content: 'Jones, Gary' },\n        { content: '' },\n        { content: '' },\n        { isMasked: true },\n        { content: 'Primary Care Physician' },\n        { content: '', isSelectable: false },\n      ],\n    },\n  ],\n};\n\nconst ZebraStripedTable = () => {\n  const { cols, rows } = tableDataJSON;\n\n  return (\n    <Table\n      id=\"zebra-striped-table\"\n      overflowColumns={cols}\n      rows={rows}\n      isStriped\n      ariaLabel=\"Table with zebra striping\"\n    />\n  );\n};\n\nexport default ZebraStripedTable;\n\n")))}d.isMDXComponent=!0;var m=n(33792),u=function(e){var t=e.title,n=e.description,l=e.isExpanded;return a.createElement(m.c,{title:t||"Zebra Striped Table",description:n,example:a.createElement(o.c,null),exampleSrc:a.createElement(d,null),isExpanded:l})},p=["components"];function f(){return f=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},f.apply(this,arguments)}function y(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var b={},_="wrapper";function h(e){var t=e.components,n=y(e,p);return(0,l.mdx)(_,f({},b,n,{components:t,mdxType:"MDXLayout"}),(0,l.mdx)("h1",{id:"zebra-striping"},"Zebra Striping"),(0,l.mdx)("h3",{id:"description"},"Description"),(0,l.mdx)("p",null,"This example demonstrates a ",(0,l.mdx)("a",{parentName:"p",href:"/terra-ui/components/cerner-terra-framework-docs/table/about"},"Table")," component that has zebra striping enabled for its rows."),(0,l.mdx)("h3",{id:"required-properties"},"Required Properties"),(0,l.mdx)("p",null,(0,l.mdx)("strong",{parentName:"p"},"isStriped"),": A Boolean value specifying whether the table has zebra striping for rows. A value of ",(0,l.mdx)("strong",{parentName:"p"},"true")," enables zebra striping."),(0,l.mdx)(u,{title:"Zebra Striped Table Example",mdxType:"ZebraStripedTable"}))}h.isMDXComponent=!0},86896:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___rBbtD","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___GzA23",template:"ExampleTemplate-module__template___a4uPk",header:"ExampleTemplate-module__header___iFXV3",content:"ExampleTemplate-module__content___48m4Q",description:"ExampleTemplate-module__description___NwBJo",footer:"ExampleTemplate-module__footer___GpSoG","button-container":"ExampleTemplate-module__button-container___rAD11",css:"ExampleTemplate-module__css___+jtk1",code:"ExampleTemplate-module__code___7rC6C","css-toggle":"ExampleTemplate-module__css-toggle___chHK7","code-toggle":"ExampleTemplate-module__code-toggle___TGlE-","is-selected":"ExampleTemplate-module__is-selected___0BYwS",item:"ExampleTemplate-module__item___8FTQq",chevron:"ExampleTemplate-module__chevron___VbY7N",title:"ExampleTemplate-module__title___r+nbJ","dynamic-content":"ExampleTemplate-module__dynamic-content___k+1H7"}}}]);