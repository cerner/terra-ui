"use strict";(self.webpackChunkterra_ui=self.webpackChunkterra_ui||[]).push([[74975,19260],{33287:function(n,t,e){var r=e(64836);t.Z=void 0;var a=r(e(67294)),o=e(57710),c=[{id:"Column-0",displayName:"Vitals",isSelectable:!1},{id:"Column-1",displayName:"March 16"},{id:"Column-2",displayName:"March 17"},{id:"Column-3",displayName:"March 18"}],l=[{id:"1",cells:[{content:"Heart Rate Monitored (bpm)"},{content:"68"},{content:"66"},{content:"67"}]},{id:"2",cells:[{content:"Temperature Oral (degC)"},{content:"36.7"},{content:"36.9"},{content:"37"}]},{id:"3",cells:[{content:"Cardiac Index (L/min/m2)"},{content:"2.25"},{content:"2.28"},{content:"2.8"}]},{id:"4",cells:[{content:"ICP (mmHg)"},{content:"11"},{content:"11"},{content:"12"}]},{id:"5",cells:[{content:"CPP (mmHg)"},{content:"63"},{content:"47"},{content:"48"}]}];t.Z=function(){var n=c,t=l;return a.default.createElement(o.FlowsheetDataGrid,{id:"default-terra-flowsheet-data-grid",columns:n,rows:t,ariaLabel:"Flowsheet Data Grid"})}},21818:function(n,t,e){e.r(t),e.d(t,{default:function(){return d}});e(67294);var r=e(81254),a=e(10622),o=["components"];function c(){return c=Object.assign?Object.assign.bind():function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r])}return n},c.apply(this,arguments)}function l(n,t){if(null==n)return{};var e,r,a=function(n,t){if(null==n)return{};var e,r,a={},o=Object.keys(n);for(r=0;r<o.length;r++)e=o[r],t.indexOf(e)>=0||(a[e]=n[e]);return a}(n,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(r=0;r<o.length;r++)e=o[r],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(n,e)&&(a[e]=n[e])}return a}var i={},s="wrapper";function d(n){var t=n.components,e=l(n,o);return(0,r.mdx)(s,c({},i,e,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)(a.Z,{title:"Default Flowsheet Data Grid",mdxType:"DefaultFlowsheetDataGrid"}))}d.isMDXComponent=!0},10622:function(n,t,e){e.d(t,{Z:function(){return m}});var r=e(67294),a=e(33287),o=e(81254),c=["components"];function l(){return l=Object.assign?Object.assign.bind():function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r])}return n},l.apply(this,arguments)}function i(n,t){if(null==n)return{};var e,r,a=function(n,t){if(null==n)return{};var e,r,a={},o=Object.keys(n);for(r=0;r<o.length;r++)e=o[r],t.indexOf(e)>=0||(a[e]=n[e]);return a}(n,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(r=0;r<o.length;r++)e=o[r],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(n,e)&&(a[e]=n[e])}return a}var s={};function d(n){var t=n.components,e=i(n,c);return(0,o.mdx)("wrapper",l({},s,e,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport { FlowsheetDataGrid } from 'terra-data-grid';\n\nconst gridDataJSON = {\n  cols: [\n    { id: 'Column-0', displayName: 'Vitals', isSelectable: false },\n    { id: 'Column-1', displayName: 'March 16' },\n    { id: 'Column-2', displayName: 'March 17' },\n    { id: 'Column-3', displayName: 'March 18' },\n  ],\n  rows: [\n    {\n      id: '1',\n      cells: [\n        { content: 'Heart Rate Monitored (bpm)' },\n        { content: '68' },\n        { content: '66' },\n        { content: '67' },\n      ],\n    },\n    {\n      id: '2',\n      cells: [\n        { content: 'Temperature Oral (degC)' },\n        { content: '36.7' },\n        { content: '36.9' },\n        { content: '37' },\n      ],\n    },\n    {\n      id: '3',\n      cells: [\n        { content: 'Cardiac Index (L/min/m2)' },\n        { content: '2.25' },\n        { content: '2.28' },\n        { content: '2.8' },\n      ],\n    },\n    {\n      id: '4',\n      cells: [\n        { content: 'ICP (mmHg)' },\n        { content: '11' },\n        { content: '11' },\n        { content: '12' },\n      ],\n    },\n    {\n      id: '5',\n      cells: [\n        { content: 'CPP (mmHg)' },\n        { content: '63' },\n        { content: '47' },\n        { content: '48' },\n      ],\n    },\n  ],\n};\n\nconst DefaultFlowsheetDataGrid = () => {\n  const { cols, rows } = gridDataJSON;\n\n  return (\n    <FlowsheetDataGrid\n      id=\"default-terra-flowsheet-data-grid\"\n      columns={cols}\n      rows={rows}\n      ariaLabel=\"Flowsheet Data Grid\"\n    />\n  );\n};\n\nexport default DefaultFlowsheetDataGrid;\n\n")))}d.isMDXComponent=!0;var u=e(49271),m=function(n){var t=n.title,e=n.description,o=n.isExpanded;return r.createElement(u.Z,{title:t||"Default Flowsheet Data Grid",description:e,example:r.createElement(a.Z,null),exampleSrc:r.createElement(d,null),isExpanded:o})}}}]);