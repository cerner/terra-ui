"use strict";(self.webpackChunkterra_ui=self.webpackChunkterra_ui||[]).push([[97648],{50765:function(n,e,t){var o=t(64836),i=t(18698);e.Z=void 0;var c=o(t(861)),a=o(t(27424)),l=function(n,e){if(!e&&n&&n.__esModule)return n;if(null===n||"object"!=i(n)&&"function"!=typeof n)return{default:n};var t=r(e);if(t&&t.has(n))return t.get(n);var o={__proto__:null},c=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in n)if("default"!==a&&Object.prototype.hasOwnProperty.call(n,a)){var l=c?Object.getOwnPropertyDescriptor(n,a):null;l&&(l.get||l.set)?Object.defineProperty(o,a,l):o[a]=n[a]}return o.default=n,t&&t.set(n,o),o}(t(67294)),s=o(t(44242));function r(n){if("function"!=typeof WeakMap)return null;var e=new WeakMap,t=new WeakMap;return(r=function(n){return n?t:e})(n)}var d={cols:[{id:"Column-0",displayName:"Patient",sortIndicator:"ascending",isSelectable:!0},{id:"Column-1",displayName:"Location",isSelectable:!0},{id:"Column-2",displayName:"Illness Severity",isSelectable:!0},{id:"Column-3",displayName:"Visit"},{id:"Column-4",displayName:"Allergy"},{id:"Column-5",displayName:"Primary Contact"}],sections:[{id:"section-0",isCollapsible:!0,isCollapsed:!0,text:"Test Section",rows:[{id:"1",cells:[{content:"Fleck, Arthur"},{content:"1007-MTN"},{content:"Unstable"},{content:"Inpatient, 2 months"},{content:""},{content:"Quinzell, Harleen"}]},{id:"2",cells:[{content:"Wayne, Bruce"},{content:"1007-MTN-DR"},{content:"Stable"},{content:"Outpatient, 2 days"},{content:"Phytochemicals"},{content:"Grayson, Richard"}]}]},{id:"section-1",isCollapsible:!0,isCollapsed:!1,text:"Test Section #2",rows:[{id:"3",cells:[{content:"Parker, Peter"},{content:"1007-MTN"},{content:"Unstable"},{content:"Inpatient, 2 months"},{content:""},{content:"Octopus, Doctor"}]},{id:"4",cells:[{content:"Stark, Tony"},{content:"1007-MTN-DR"},{content:"Stable"},{content:"Outpatient, 2 days"},{content:"Phytochemicals"},{content:"America, Captain"}]}]}]};e.Z=function(){var n=(0,l.useState)(d.sections),e=(0,a.default)(n,2),t=e[0],o=e[1];return l.default.createElement(s.default,{id:"table-with-sections",overflowColumns:d.cols,sections:t,onSectionSelect:function(n){var e=(0,c.default)(t),i=e.findIndex((function(e){return e.id===n}));i>-1&&(e[i].isCollapsed=!e[i].isCollapsed),o(e)}})}},92574:function(n,e,t){var o=t(64836),i=t(18698);e.Z=void 0;var c=o(t(861)),a=o(t(27424)),l=function(n,e){if(!e&&n&&n.__esModule)return n;if(null===n||"object"!=i(n)&&"function"!=typeof n)return{default:n};var t=r(e);if(t&&t.has(n))return t.get(n);var o={__proto__:null},c=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in n)if("default"!==a&&Object.prototype.hasOwnProperty.call(n,a)){var l=c?Object.getOwnPropertyDescriptor(n,a):null;l&&(l.get||l.set)?Object.defineProperty(o,a,l):o[a]=n[a]}return o.default=n,t&&t.set(n,o),o}(t(67294)),s=o(t(44242));function r(n){if("function"!=typeof WeakMap)return null;var e=new WeakMap,t=new WeakMap;return(r=function(n){return n?t:e})(n)}var d={cols:[{id:"Column-0",displayName:"Patient",sortIndicator:"ascending",isSelectable:!0},{id:"Column-1",displayName:"Location",isSelectable:!0},{id:"Column-2",displayName:"Illness Severity",isSelectable:!0},{id:"Column-3",displayName:"Visit"},{id:"Column-4",displayName:"Allergy"},{id:"Column-5",displayName:"Primary Contact"}],sections:[{id:"section-0",text:"Test Section",rows:[{id:"1",cells:[{content:"Fleck, Arthur"},{content:"1007-MTN"},{content:"Unstable"},{content:"Inpatient, 2 months"},{content:""},{content:"Quinzell, Harleen"}]},{id:"2",cells:[{content:"Wayne, Bruce"},{content:"1007-MTN-DR"},{content:"Stable"},{content:"Outpatient, 2 days"},{content:"Phytochemicals"},{content:"Grayson, Richard"}]}]},{id:"section-1",text:"Test Section #2",rows:[{id:"3",cells:[{content:"Parker, Peter"},{content:"1007-MTN"},{content:"Unstable"},{content:"Inpatient, 2 months"},{content:""},{content:"Octopus, Doctor"}]},{id:"4",cells:[{content:"Stark, Tony"},{content:"1007-MTN-DR"},{content:"Stable"},{content:"Outpatient, 2 days"},{content:"Phytochemicals"},{content:"America, Captain"}]}]}]};e.Z=function(){var n=(0,l.useState)(d.sections),e=(0,a.default)(n,2),t=e[0],o=e[1];return l.default.createElement(s.default,{id:"table-with-sections",overflowColumns:d.cols,sections:t,onSectionSelect:function(n){var e=(0,c.default)(t),i=e.findIndex((function(e){return e.id===n}));i>-1&&(e[i].isCollapsed=!e[i].isCollapsed),o(e)},isStriped:!0})}},62415:function(n,e,t){t.r(e),t.d(e,{default:function(){return N}});var o=t(67294),i=t(81254),c=t(92574),a=["components"];function l(){return l=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o])}return n},l.apply(this,arguments)}function s(n,e){if(null==n)return{};var t,o,i=function(n,e){if(null==n)return{};var t,o,i={},c=Object.keys(n);for(o=0;o<c.length;o++)t=c[o],e.indexOf(t)>=0||(i[t]=n[t]);return i}(n,e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(n);for(o=0;o<c.length;o++)t=c[o],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i}var r={};function d(n){var e=n.components,t=s(n,a);return(0,i.mdx)("wrapper",l({},r,t,{components:e,mdxType:"MDXLayout"}),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React, { useState } from 'react';\nimport Table from 'terra-table';\n\nconst tableData = {\n  cols: [\n    {\n      id: 'Column-0', displayName: 'Patient', sortIndicator: 'ascending', isSelectable: true,\n    },\n    {\n      id: 'Column-1', displayName: 'Location', isSelectable: true,\n    },\n    { id: 'Column-2', displayName: 'Illness Severity', isSelectable: true },\n    { id: 'Column-3', displayName: 'Visit' },\n    { id: 'Column-4', displayName: 'Allergy' },\n    { id: 'Column-5', displayName: 'Primary Contact' },\n\n  ],\n  sections: [{\n    id: 'section-0',\n    text: 'Test Section',\n    rows: [\n      {\n        id: '1',\n        cells: [\n          { content: 'Fleck, Arthur' },\n          { content: '1007-MTN' },\n          { content: 'Unstable' },\n          { content: 'Inpatient, 2 months' },\n          { content: '' },\n          { content: 'Quinzell, Harleen' },\n        ],\n      },\n      {\n        id: '2',\n        cells: [\n          { content: 'Wayne, Bruce' },\n          { content: '1007-MTN-DR' },\n          { content: 'Stable' },\n          { content: 'Outpatient, 2 days' },\n          { content: 'Phytochemicals' },\n          { content: 'Grayson, Richard' },\n        ],\n      },\n    ],\n  },\n  {\n    id: 'section-1',\n    text: 'Test Section #2',\n    rows: [\n      {\n        id: '3',\n        cells: [\n          { content: 'Parker, Peter' },\n          { content: '1007-MTN' },\n          { content: 'Unstable' },\n          { content: 'Inpatient, 2 months' },\n          { content: '' },\n          { content: 'Octopus, Doctor' },\n        ],\n      },\n      {\n        id: '4',\n        cells: [\n          { content: 'Stark, Tony' },\n          { content: '1007-MTN-DR' },\n          { content: 'Stable' },\n          { content: 'Outpatient, 2 days' },\n          { content: 'Phytochemicals' },\n          { content: 'America, Captain' },\n        ],\n      },\n    ],\n  }],\n};\n\nconst TableWithSections = () => {\n  const [tableSections, setTableSections] = useState(tableData.sections);\n\n  const handleSectionSelect = (sectionId) => {\n    const newSections = [...tableSections];\n    const sectionIndex = newSections.findIndex(section => section.id === sectionId);\n\n    if (sectionIndex > -1) {\n      newSections[sectionIndex].isCollapsed = !newSections[sectionIndex].isCollapsed;\n    }\n\n    setTableSections(newSections);\n  };\n\n  return (\n    <Table\n      id=\"table-with-sections\"\n      overflowColumns={tableData.cols}\n      sections={tableSections}\n      onSectionSelect={handleSectionSelect}\n      isStriped\n    />\n  );\n};\n\nexport default TableWithSections;\n\n")))}d.isMDXComponent=!0;var u=t(49271),p=function(n){var e=n.title,t=n.description,i=n.isExpanded;return o.createElement(u.Z,{title:e||"Table With Sections",description:t,example:o.createElement(c.Z,null),exampleSrc:o.createElement(d,null),isExpanded:i})},m=t(50765),f=["components"];function y(){return y=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o])}return n},y.apply(this,arguments)}function b(n,e){if(null==n)return{};var t,o,i=function(n,e){if(null==n)return{};var t,o,i={},c=Object.keys(n);for(o=0;o<c.length;o++)t=c[o],e.indexOf(t)>=0||(i[t]=n[t]);return i}(n,e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(n);for(o=0;o<c.length;o++)t=c[o],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i}var S={};function h(n){var e=n.components,t=b(n,f);return(0,i.mdx)("wrapper",y({},S,t,{components:e,mdxType:"MDXLayout"}),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React, { useState } from 'react';\nimport Table from 'terra-table';\n\nconst tableData = {\n  cols: [\n    {\n      id: 'Column-0', displayName: 'Patient', sortIndicator: 'ascending', isSelectable: true,\n    },\n    {\n      id: 'Column-1', displayName: 'Location', isSelectable: true,\n    },\n    { id: 'Column-2', displayName: 'Illness Severity', isSelectable: true },\n    { id: 'Column-3', displayName: 'Visit' },\n    { id: 'Column-4', displayName: 'Allergy' },\n    { id: 'Column-5', displayName: 'Primary Contact' },\n\n  ],\n  sections: [{\n    id: 'section-0',\n    isCollapsible: true,\n    isCollapsed: true,\n    text: 'Test Section',\n    rows: [\n      {\n        id: '1',\n        cells: [\n          { content: 'Fleck, Arthur' },\n          { content: '1007-MTN' },\n          { content: 'Unstable' },\n          { content: 'Inpatient, 2 months' },\n          { content: '' },\n          { content: 'Quinzell, Harleen' },\n        ],\n      },\n      {\n        id: '2',\n        cells: [\n          { content: 'Wayne, Bruce' },\n          { content: '1007-MTN-DR' },\n          { content: 'Stable' },\n          { content: 'Outpatient, 2 days' },\n          { content: 'Phytochemicals' },\n          { content: 'Grayson, Richard' },\n        ],\n      },\n    ],\n  },\n  {\n    id: 'section-1',\n    isCollapsible: true,\n    isCollapsed: false,\n    text: 'Test Section #2',\n    rows: [\n      {\n        id: '3',\n        cells: [\n          { content: 'Parker, Peter' },\n          { content: '1007-MTN' },\n          { content: 'Unstable' },\n          { content: 'Inpatient, 2 months' },\n          { content: '' },\n          { content: 'Octopus, Doctor' },\n        ],\n      },\n      {\n        id: '4',\n        cells: [\n          { content: 'Stark, Tony' },\n          { content: '1007-MTN-DR' },\n          { content: 'Stable' },\n          { content: 'Outpatient, 2 days' },\n          { content: 'Phytochemicals' },\n          { content: 'America, Captain' },\n        ],\n      },\n    ],\n  }],\n};\n\nconst TableWithCollapsibleSections = () => {\n  const [tableSections, setTableSections] = useState(tableData.sections);\n\n  const handleSectionSelect = (sectionId) => {\n    const newSections = [...tableSections];\n    const sectionIndex = newSections.findIndex(section => section.id === sectionId);\n\n    if (sectionIndex > -1) {\n      newSections[sectionIndex].isCollapsed = !newSections[sectionIndex].isCollapsed;\n    }\n\n    setTableSections(newSections);\n  };\n\n  return (\n    <Table\n      id=\"table-with-sections\"\n      overflowColumns={tableData.cols}\n      sections={tableSections}\n      onSectionSelect={handleSectionSelect}\n    />\n  );\n};\n\nexport default TableWithCollapsibleSections;\n\n")))}h.isMDXComponent=!0;var O=function(n){var e=n.title,t=n.description,i=n.isExpanded;return o.createElement(u.Z,{title:e||"Table With Collapsible Sections",description:t,example:o.createElement(m.Z,null),exampleSrc:o.createElement(h,null),isExpanded:i})},C=["components"];function v(){return v=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o])}return n},v.apply(this,arguments)}function x(n,e){if(null==n)return{};var t,o,i=function(n,e){if(null==n)return{};var t,o,i={},c=Object.keys(n);for(o=0;o<c.length;o++)t=c[o],e.indexOf(t)>=0||(i[t]=n[t]);return i}(n,e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(n);for(o=0;o<c.length;o++)t=c[o],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i}var w={},T="wrapper";function N(n){var e=n.components,t=x(n,C);return(0,i.mdx)(T,v({},w,t,{components:e,mdxType:"MDXLayout"}),(0,i.mdx)(O,{mdxType:"TableWithCollapsibleSections"}),(0,i.mdx)(p,{mdxType:"TableWithSections"}))}N.isMDXComponent=!0}}]);