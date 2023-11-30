"use strict";(self.webpackChunkterra_ui=self.webpackChunkterra_ui||[]).push([[62415],{49271:function(e,t,n){var o=n(64836),l=n(18698);t.Z=void 0;var a=o(n(27424)),c=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==l(e)&&"function"!=typeof e)return{default:e};var n=f(t);if(n&&n.has(e))return n.get(e);var o={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var c in e)if("default"!==c&&Object.prototype.hasOwnProperty.call(e,c)){var i=a?Object.getOwnPropertyDescriptor(e,c):null;i&&(i.get||i.set)?Object.defineProperty(o,c,i):o[c]=e[c]}o.default=e,n&&n.set(e,o);return o}(n(67294)),i=o(n(45697)),r=o(n(47166)),s=n(21538),u=o(n(33864)),d=o(n(23399)),p=n(51051),m=o(n(53560));function f(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(f=function(e){return e?n:t})(e)}var b=r.default.bind(m.default),y={example:i.default.element,exampleSrc:i.default.element,exampleCssSrc:i.default.element,title:i.default.string,description:i.default.node,isExpanded:i.default.bool},S=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},_=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},v=function(e){var t=e.example,n=e.exampleSrc,o=e.exampleCssSrc,l=e.title,i=e.description,r=e.isExpanded,m=(0,c.useState)(r),f=(0,a.default)(m,2),y=f[0],v=f[1],h=(0,c.useState)(!1),x=(0,a.default)(h,2),C=x[0],T=x[1],O=c.default.useContext(s.ThemeContext),w=void 0!==o,N=function(){T(!C),y&&v(!y)},g=function(){v(!y),C&&T(!C)},E=function(e,t){e.nativeEvent.keyCode!==p.KEY_SPACE&&e.nativeEvent.keyCode!==p.KEY_RETURN||(e.preventDefault(),t())};return c.default.createElement("div",{className:b("template",O.className)},c.default.createElement("div",{className:b("header")},l&&c.default.createElement("h2",{className:b("title")},l)),c.default.createElement("div",{className:b("content")},i&&c.default.createElement("div",{className:b("description")},i),t),c.default.createElement("div",{className:b("footer")},n?c.default.createElement("div",{className:b("button-container")},w&&c.default.createElement("button",{type:"button",className:b("css-toggle","item",{"is-selected":C}),onClick:N,onKeyDown:function(e){return E(e,N)},onBlur:S,onMouseDown:_,tabIndex:0,"data-focus-styles-enabled":!0},c.default.createElement(u.default,{className:b("chevron")}),c.default.createElement("span",null,"CSS"),c.default.createElement(d.default,{className:b("chevron")})),c.default.createElement("button",{type:"button",className:b("code-toggle","item",{"is-selected":y}),onClick:g,onKeyDown:function(e){return E(e,g)},onBlur:S,onMouseDown:_,tabIndex:0,"data-focus-styles-enabled":!0},c.default.createElement(u.default,{className:b("chevron")}),c.default.createElement("span",null,"Code"),c.default.createElement(d.default,{className:b("chevron")}))):null,c.default.createElement("div",null,C&&c.default.createElement("div",{className:b("css")},o),y&&c.default.createElement("div",{className:b("code")},n))))};v.propTypes=y,v.defaultProps={isExpanded:!1};var h=v;t.Z=h},50765:function(e,t,n){var o=n(64836),l=n(18698);t.Z=void 0;var a=o(n(861)),c=o(n(27424)),i=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=l(e)&&"function"!=typeof e)return{default:e};var n=s(t);if(n&&n.has(e))return n.get(e);var o={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var c in e)if("default"!==c&&Object.prototype.hasOwnProperty.call(e,c)){var i=a?Object.getOwnPropertyDescriptor(e,c):null;i&&(i.get||i.set)?Object.defineProperty(o,c,i):o[c]=e[c]}return o.default=e,n&&n.set(e,o),o}(n(67294)),r=o(n(7270));function s(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(s=function(e){return e?n:t})(e)}var u={cols:[{id:"Column-0",displayName:"Patient",sortIndicator:"ascending",isSelectable:!0},{id:"Column-1",displayName:"Location",isSelectable:!0},{id:"Column-2",displayName:"Illness Severity",isSelectable:!0},{id:"Column-3",displayName:"Visit"},{id:"Column-4",displayName:"Allergy"},{id:"Column-5",displayName:"Primary Contact"}],sections:[{id:"section-0",isCollapsible:!0,isCollapsed:!0,text:"Test Section",rows:[{id:"1",cells:[{content:"Fleck, Arthur"},{content:"1007-MTN"},{content:"Unstable"},{content:"Inpatient, 2 months"},{content:""},{content:"Quinzell, Harleen"}]},{id:"2",cells:[{content:"Wayne, Bruce"},{content:"1007-MTN-DR"},{content:"Stable"},{content:"Outpatient, 2 days"},{content:"Phytochemicals"},{content:"Grayson, Richard"}]}]},{id:"section-1",isCollapsible:!0,isCollapsed:!1,text:"Test Section #2",rows:[{id:"3",cells:[{content:"Parker, Peter"},{content:"1007-MTN"},{content:"Unstable"},{content:"Inpatient, 2 months"},{content:""},{content:"Octopus, Doctor"}]},{id:"4",cells:[{content:"Stark, Tony"},{content:"1007-MTN-DR"},{content:"Stable"},{content:"Outpatient, 2 days"},{content:"Phytochemicals"},{content:"America, Captain"}]}]}]};t.Z=function(){var e=(0,i.useState)(u.sections),t=(0,c.default)(e,2),n=t[0],o=t[1];return i.default.createElement(r.default,{id:"table-with-sections",overflowColumns:u.cols,sections:n,onSectionSelect:function(e){var t=(0,a.default)(n),l=t.findIndex((function(t){return t.id===e}));l>-1&&(t[l].isCollapsed=!t[l].isCollapsed),o(t)}})}},92574:function(e,t,n){var o=n(64836),l=n(18698);t.Z=void 0;var a=o(n(861)),c=o(n(27424)),i=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=l(e)&&"function"!=typeof e)return{default:e};var n=s(t);if(n&&n.has(e))return n.get(e);var o={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var c in e)if("default"!==c&&Object.prototype.hasOwnProperty.call(e,c)){var i=a?Object.getOwnPropertyDescriptor(e,c):null;i&&(i.get||i.set)?Object.defineProperty(o,c,i):o[c]=e[c]}return o.default=e,n&&n.set(e,o),o}(n(67294)),r=o(n(7270));function s(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(s=function(e){return e?n:t})(e)}var u={cols:[{id:"Column-0",displayName:"Patient",sortIndicator:"ascending",isSelectable:!0},{id:"Column-1",displayName:"Location",isSelectable:!0},{id:"Column-2",displayName:"Illness Severity",isSelectable:!0},{id:"Column-3",displayName:"Visit"},{id:"Column-4",displayName:"Allergy"},{id:"Column-5",displayName:"Primary Contact"}],sections:[{id:"section-0",text:"Test Section",rows:[{id:"1",cells:[{content:"Fleck, Arthur"},{content:"1007-MTN"},{content:"Unstable"},{content:"Inpatient, 2 months"},{content:""},{content:"Quinzell, Harleen"}]},{id:"2",cells:[{content:"Wayne, Bruce"},{content:"1007-MTN-DR"},{content:"Stable"},{content:"Outpatient, 2 days"},{content:"Phytochemicals"},{content:"Grayson, Richard"}]}]},{id:"section-1",text:"Test Section #2",rows:[{id:"3",cells:[{content:"Parker, Peter"},{content:"1007-MTN"},{content:"Unstable"},{content:"Inpatient, 2 months"},{content:""},{content:"Octopus, Doctor"}]},{id:"4",cells:[{content:"Stark, Tony"},{content:"1007-MTN-DR"},{content:"Stable"},{content:"Outpatient, 2 days"},{content:"Phytochemicals"},{content:"America, Captain"}]}]}]};t.Z=function(){var e=(0,i.useState)(u.sections),t=(0,c.default)(e,2),n=t[0],o=t[1];return i.default.createElement(r.default,{id:"table-with-sections",pinnedColumns:u.cols.slice(0,2),overflowColumns:u.cols.slice(2),sections:n,onSectionSelect:function(e){var t=(0,a.default)(n),l=t.findIndex((function(t){return t.id===e}));l>-1&&(t[l].isCollapsed=!t[l].isCollapsed),o(t)},isStriped:!0})}},62415:function(e,t,n){n.r(t),n.d(t,{default:function(){return w}});var o=n(67294),l=n(81254),a=n(92574),c=["components"];function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},i.apply(this,arguments)}function r(e,t){if(null==e)return{};var n,o,l=function(e,t){if(null==e)return{};var n,o,l={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s={};function u(e){var t=e.components,n=r(e,c);return(0,l.mdx)("wrapper",i({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React, { useState } from 'react';\nimport Table from 'terra-table';\n\nconst tableData = {\n  cols: [\n    {\n      id: 'Column-0', displayName: 'Patient', sortIndicator: 'ascending', isSelectable: true,\n    },\n    {\n      id: 'Column-1', displayName: 'Location', isSelectable: true,\n    },\n    { id: 'Column-2', displayName: 'Illness Severity', isSelectable: true },\n    { id: 'Column-3', displayName: 'Visit' },\n    { id: 'Column-4', displayName: 'Allergy' },\n    { id: 'Column-5', displayName: 'Primary Contact' },\n\n  ],\n  sections: [{\n    id: 'section-0',\n    text: 'Test Section',\n    rows: [\n      {\n        id: '1',\n        cells: [\n          { content: 'Fleck, Arthur' },\n          { content: '1007-MTN' },\n          { content: 'Unstable' },\n          { content: 'Inpatient, 2 months' },\n          { content: '' },\n          { content: 'Quinzell, Harleen' },\n        ],\n      },\n      {\n        id: '2',\n        cells: [\n          { content: 'Wayne, Bruce' },\n          { content: '1007-MTN-DR' },\n          { content: 'Stable' },\n          { content: 'Outpatient, 2 days' },\n          { content: 'Phytochemicals' },\n          { content: 'Grayson, Richard' },\n        ],\n      },\n    ],\n  },\n  {\n    id: 'section-1',\n    text: 'Test Section #2',\n    rows: [\n      {\n        id: '3',\n        cells: [\n          { content: 'Parker, Peter' },\n          { content: '1007-MTN' },\n          { content: 'Unstable' },\n          { content: 'Inpatient, 2 months' },\n          { content: '' },\n          { content: 'Octopus, Doctor' },\n        ],\n      },\n      {\n        id: '4',\n        cells: [\n          { content: 'Stark, Tony' },\n          { content: '1007-MTN-DR' },\n          { content: 'Stable' },\n          { content: 'Outpatient, 2 days' },\n          { content: 'Phytochemicals' },\n          { content: 'America, Captain' },\n        ],\n      },\n    ],\n  }],\n};\n\nconst TableWithSections = () => {\n  const [tableSections, setTableSections] = useState(tableData.sections);\n\n  const handleSectionSelect = (sectionId) => {\n    const newSections = [...tableSections];\n    const sectionIndex = newSections.findIndex(section => section.id === sectionId);\n\n    if (sectionIndex > -1) {\n      newSections[sectionIndex].isCollapsed = !newSections[sectionIndex].isCollapsed;\n    }\n\n    setTableSections(newSections);\n  };\n\n  return (\n    <Table\n      id=\"table-with-sections\"\n      pinnedColumns={tableData.cols.slice(0, 2)}\n      overflowColumns={tableData.cols.slice(2)}\n      sections={tableSections}\n      onSectionSelect={handleSectionSelect}\n      isStriped\n    />\n  );\n};\n\nexport default TableWithSections;\n\n")))}u.isMDXComponent=!0;var d=n(49271),p=function(e){var t=e.title,n=e.description,l=e.isExpanded;return o.createElement(d.Z,{title:t||"Table With Sections",description:n,example:o.createElement(a.Z,null),exampleSrc:o.createElement(u,null),isExpanded:l})},m=n(50765),f=["components"];function b(){return b=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},b.apply(this,arguments)}function y(e,t){if(null==e)return{};var n,o,l=function(e,t){if(null==e)return{};var n,o,l={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var S={};function _(e){var t=e.components,n=y(e,f);return(0,l.mdx)("wrapper",b({},S,n,{components:t,mdxType:"MDXLayout"}),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React, { useState } from 'react';\nimport Table from 'terra-table';\n\nconst tableData = {\n  cols: [\n    {\n      id: 'Column-0', displayName: 'Patient', sortIndicator: 'ascending', isSelectable: true,\n    },\n    {\n      id: 'Column-1', displayName: 'Location', isSelectable: true,\n    },\n    { id: 'Column-2', displayName: 'Illness Severity', isSelectable: true },\n    { id: 'Column-3', displayName: 'Visit' },\n    { id: 'Column-4', displayName: 'Allergy' },\n    { id: 'Column-5', displayName: 'Primary Contact' },\n\n  ],\n  sections: [{\n    id: 'section-0',\n    isCollapsible: true,\n    isCollapsed: true,\n    text: 'Test Section',\n    rows: [\n      {\n        id: '1',\n        cells: [\n          { content: 'Fleck, Arthur' },\n          { content: '1007-MTN' },\n          { content: 'Unstable' },\n          { content: 'Inpatient, 2 months' },\n          { content: '' },\n          { content: 'Quinzell, Harleen' },\n        ],\n      },\n      {\n        id: '2',\n        cells: [\n          { content: 'Wayne, Bruce' },\n          { content: '1007-MTN-DR' },\n          { content: 'Stable' },\n          { content: 'Outpatient, 2 days' },\n          { content: 'Phytochemicals' },\n          { content: 'Grayson, Richard' },\n        ],\n      },\n    ],\n  },\n  {\n    id: 'section-1',\n    isCollapsible: true,\n    isCollapsed: false,\n    text: 'Test Section #2',\n    rows: [\n      {\n        id: '3',\n        cells: [\n          { content: 'Parker, Peter' },\n          { content: '1007-MTN' },\n          { content: 'Unstable' },\n          { content: 'Inpatient, 2 months' },\n          { content: '' },\n          { content: 'Octopus, Doctor' },\n        ],\n      },\n      {\n        id: '4',\n        cells: [\n          { content: 'Stark, Tony' },\n          { content: '1007-MTN-DR' },\n          { content: 'Stable' },\n          { content: 'Outpatient, 2 days' },\n          { content: 'Phytochemicals' },\n          { content: 'America, Captain' },\n        ],\n      },\n    ],\n  }],\n};\n\nconst TableWithCollapsibleSections = () => {\n  const [tableSections, setTableSections] = useState(tableData.sections);\n\n  const handleSectionSelect = (sectionId) => {\n    const newSections = [...tableSections];\n    const sectionIndex = newSections.findIndex(section => section.id === sectionId);\n\n    if (sectionIndex > -1) {\n      newSections[sectionIndex].isCollapsed = !newSections[sectionIndex].isCollapsed;\n    }\n\n    setTableSections(newSections);\n  };\n\n  return (\n    <Table\n      id=\"table-with-sections\"\n      overflowColumns={tableData.cols}\n      sections={tableSections}\n      onSectionSelect={handleSectionSelect}\n    />\n  );\n};\n\nexport default TableWithCollapsibleSections;\n\n")))}_.isMDXComponent=!0;var v=function(e){var t=e.title,n=e.description,l=e.isExpanded;return o.createElement(d.Z,{title:t||"Table With Collapsible Sections",description:n,example:o.createElement(m.Z,null),exampleSrc:o.createElement(_,null),isExpanded:l})},h=["components"];function x(){return x=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},x.apply(this,arguments)}function C(e,t){if(null==e)return{};var n,o,l=function(e,t){if(null==e)return{};var n,o,l={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var T={},O="wrapper";function w(e){var t=e.components,n=C(e,h);return(0,l.mdx)(O,x({},T,n,{components:t,mdxType:"MDXLayout"}),(0,l.mdx)(v,{mdxType:"TableWithCollapsibleSections"}),(0,l.mdx)(p,{mdxType:"TableWithSections"}))}w.isMDXComponent=!0},53560:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___rBbtD","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___GzA23",template:"ExampleTemplate-module__template___a4uPk",header:"ExampleTemplate-module__header___iFXV3",content:"ExampleTemplate-module__content___48m4Q",description:"ExampleTemplate-module__description___NwBJo",footer:"ExampleTemplate-module__footer___GpSoG","button-container":"ExampleTemplate-module__button-container___rAD11",css:"ExampleTemplate-module__css___+jtk1",code:"ExampleTemplate-module__code___7rC6C","css-toggle":"ExampleTemplate-module__css-toggle___chHK7","code-toggle":"ExampleTemplate-module__code-toggle___TGlE-","is-selected":"ExampleTemplate-module__is-selected___0BYwS",item:"ExampleTemplate-module__item___8FTQq",chevron:"ExampleTemplate-module__chevron___VbY7N",title:"ExampleTemplate-module__title___r+nbJ","dynamic-content":"ExampleTemplate-module__dynamic-content___k+1H7"}}}]);