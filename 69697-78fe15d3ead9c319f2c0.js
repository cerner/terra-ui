"use strict";(self.webpackChunkterra_ui=self.webpackChunkterra_ui||[]).push([[69697],{74213:function(n,e,t){var a=t(64836);e.Z=void 0;var i=a(t(67294)),o=a(t(44242)),l=[{id:"Column-0",displayName:"Patient"},{id:"Column-1",displayName:"Location"},{id:"Column-2",displayName:"Illness Severity"},{id:"Column-3",displayName:"Visit"},{id:"Column-4",displayName:"Allergy"},{id:"Column-5",displayName:"Primary Contact"},{id:"Column-6",displayName:"Generic Order Counts"},{id:"Column-7",displayName:"Patient Age"},{id:"Column-8",displayName:"Medication History"},{id:"Column-9",displayName:"My Relationship"},{id:"Column-10",displayName:"Not Selectable",isSelectable:!1}],c=[{id:"1",cells:[{content:"Fleck, Arthur"},{content:"1007-MTN"},{content:"Unstable"},{content:"Inpatient, 2 months"},{content:""},{content:"Quinzell, Harleen"},{content:""},{isMasked:!0},{isMasked:!0},{content:"Admitting Physician"},{content:"",isSelectable:!1}]},{id:"2",cells:[{content:"Wayne, Bruce"},{content:"1007-MTN-DR"},{content:"Stable"},{content:"Outpatient, 2 days"},{content:"Phytochemicals"},{content:"Grayson, Richard"},{content:""},{content:""},{isMasked:!0},{content:"Admitting Physician"},{content:"",isSelectable:!1}]},{id:"3",cells:[{content:"McDonald, Ronald"},{content:"1007-MTN-RN"},{content:"Critical"},{content:"Inpatient, 2 days"},{content:"Phytochemicals"},{content:"Smith, Melissa"},{content:""},{content:""},{isMasked:!0},{content:"Family Physician"},{content:"",isSelectable:!1}]},{id:"4",cells:[{content:"Wayne, Bruce"},{content:"1018-MTN-DR"},{content:"Stable"},{content:"Outpatient, 2 days"},{content:"Aspirin"},{content:"Jones, Gary"},{content:""},{content:""},{isMasked:!0},{content:"Primary Care Physician"},{content:"",isSelectable:!1}]}];e.Z=function(){var n=l,e=c;return i.default.createElement(o.default,{id:"zebra-striped-table",overflowColumns:n,rows:e,isStriped:!0})}},37753:function(n,e,t){t.r(e),t.d(e,{default:function(){return N}});var a=t(67294),i=t(81254),o=t(74213),l=["components"];function c(){return c=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(n[a]=t[a])}return n},c.apply(this,arguments)}function r(n,e){if(null==n)return{};var t,a,i=function(n,e){if(null==n)return{};var t,a,i={},o=Object.keys(n);for(a=0;a<o.length;a++)t=o[a],e.indexOf(t)>=0||(i[t]=n[t]);return i}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(a=0;a<o.length;a++)t=o[a],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i}var s={};function d(n){var e=n.components,t=r(n,l);return(0,i.mdx)("wrapper",c({},s,t,{components:e,mdxType:"MDXLayout"}),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Table from 'terra-table';\n\nconst tableDataJSON = {\n  cols: [\n    { id: 'Column-0', displayName: 'Patient' },\n    { id: 'Column-1', displayName: 'Location' },\n    { id: 'Column-2', displayName: 'Illness Severity' },\n    { id: 'Column-3', displayName: 'Visit' },\n    { id: 'Column-4', displayName: 'Allergy' },\n    { id: 'Column-5', displayName: 'Primary Contact' },\n    { id: 'Column-6', displayName: 'Generic Order Counts' },\n    { id: 'Column-7', displayName: 'Patient Age' },\n    { id: 'Column-8', displayName: 'Medication History' },\n    { id: 'Column-9', displayName: 'My Relationship' },\n    { id: 'Column-10', displayName: 'Not Selectable', isSelectable: false },\n  ],\n  rows: [\n    {\n      id: '1',\n      cells: [\n        { content: 'Fleck, Arthur' },\n        { content: '1007-MTN' },\n        { content: 'Unstable' },\n        { content: 'Inpatient, 2 months' },\n        { content: '' },\n        { content: 'Quinzell, Harleen' },\n        { content: '' },\n        { isMasked: true },\n        { isMasked: true },\n        { content: 'Admitting Physician' },\n        { content: '', isSelectable: false },\n      ],\n    },\n    {\n      id: '2',\n      cells: [\n        { content: 'Wayne, Bruce' },\n        { content: '1007-MTN-DR' },\n        { content: 'Stable' },\n        { content: 'Outpatient, 2 days' },\n        { content: 'Phytochemicals' },\n        { content: 'Grayson, Richard' },\n        { content: '' },\n        { content: '' },\n        { isMasked: true },\n        { content: 'Admitting Physician' },\n        { content: '', isSelectable: false },\n      ],\n    },\n    {\n      id: '3',\n      cells: [\n        { content: 'McDonald, Ronald' },\n        { content: '1007-MTN-RN' },\n        { content: 'Critical' },\n        { content: 'Inpatient, 2 days' },\n        { content: 'Phytochemicals' },\n        { content: 'Smith, Melissa' },\n        { content: '' },\n        { content: '' },\n        { isMasked: true },\n        { content: 'Family Physician' },\n        { content: '', isSelectable: false },\n      ],\n    },\n    {\n      id: '4',\n      cells: [\n        { content: 'Wayne, Bruce' },\n        { content: '1018-MTN-DR' },\n        { content: 'Stable' },\n        { content: 'Outpatient, 2 days' },\n        { content: 'Aspirin' },\n        { content: 'Jones, Gary' },\n        { content: '' },\n        { content: '' },\n        { isMasked: true },\n        { content: 'Primary Care Physician' },\n        { content: '', isSelectable: false },\n      ],\n    },\n  ],\n};\n\nconst ZebraStripedTable = () => {\n  const { cols, rows } = tableDataJSON;\n\n  return (\n    <Table\n      id=\"zebra-striped-table\"\n      overflowColumns={cols}\n      rows={rows}\n      isStriped\n    />\n  );\n};\n\nexport default ZebraStripedTable;\n\n")))}d.isMDXComponent=!0;var m=t(49271),u=function(n){var e=n.title,t=n.description,i=n.isExpanded;return a.createElement(m.Z,{title:e||"Zebra Striped Table",description:t,example:a.createElement(o.Z,null),exampleSrc:a.createElement(d,null),isExpanded:i})},p=["components"];function y(){return y=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(n[a]=t[a])}return n},y.apply(this,arguments)}function b(n,e){if(null==n)return{};var t,a,i=function(n,e){if(null==n)return{};var t,a,i={},o=Object.keys(n);for(a=0;a<o.length;a++)t=o[a],e.indexOf(t)>=0||(i[t]=n[t]);return i}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(a=0;a<o.length;a++)t=o[a],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i}var f={},h="wrapper";function N(n){var e=n.components,t=b(n,p);return(0,i.mdx)(h,y({},f,t,{components:e,mdxType:"MDXLayout"}),(0,i.mdx)(u,{title:"Zebra Striped Table Example",mdxType:"ZebraStripedTable"}))}N.isMDXComponent=!0}}]);