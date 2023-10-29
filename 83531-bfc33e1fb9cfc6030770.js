"use strict";(self.webpackChunkterra_ui=self.webpackChunkterra_ui||[]).push([[83531,45627,85565,3353,5161,16835,45865,85355,3193,4845,46647,85161,38681,15318,40411,18101,38443],{22863:function(n,e,t){var a=t(64836);e.Z=void 0;var r=a(t(67294)),o=a(t(45697)),i=a(t(47166)),l=a(t(17422)),s=i.default.bind(l.default),c={name:o.default.string.isRequired,src:o.default.string,url:o.default.string,version:o.default.string.isRequired},d=function(n){var e=n.src,t=n.name,a=n.url,o=n.version,i=r.default.createElement("a",{className:s("badge"),href:a||"https://www.npmjs.org/package/".concat(t,"/v/").concat(o)},r.default.createElement("span",{className:s("badge-name")},a?"package":"npm"),r.default.createElement("span",{className:s("badge-version")},"v".concat(o))),l=e?r.default.createElement("a",{className:s("badge"),href:e},r.default.createElement("span",{className:s("badge-name")},"github"),r.default.createElement("span",{className:s("badge-version")},"source")):void 0;return r.default.createElement("div",{className:s("badge-container")},i,l)};d.propTypes=c;var u=d;e.Z=u},42873:function(n,e,t){var a=t(64836);e.Z=void 0;var r=a(t(67294)),o=a(t(44242)),i={cols:[{id:"Column-0",displayName:"Patient"},{id:"Column-1",displayName:"Location"},{id:"Column-2",displayName:"Illness Severity"},{id:"Column-3",displayName:"Visit"},{id:"Column-4",displayName:"Allergy"},{id:"Column-5",displayName:"Primary Contact"},{id:"Column-6",displayName:"Generic Order Counts"},{id:"Column-7",displayName:"Patient Age"},{id:"Column-8",displayName:"Medication History"},{id:"Column-9",displayName:"My Relationship"}],rows:[{id:"1",cells:[{content:"Fleck, Arthur"},{content:"1007-MTN"},{content:"Unstable"},{content:"Inpatient, 2 months"},{content:""},{content:"Quinzell, Harleen"},{content:""},{isMasked:!0},{isMasked:!0},{content:"Admitting Physician"}]},{id:"2",cells:[{content:"Wayne, Bruce"},{content:"1007-MTN-DR"},{content:"Stable"},{content:"Outpatient, 2 days"},{content:"Phytochemicals"},{content:"Grayson, Richard"},{content:""},{content:""},{isMasked:!0},{content:"Admitting Physician"}]}]};e.Z=function(){return r.default.createElement(o.default,{id:"my-table-id",pinnedColumns:i.cols.slice(0,2),overflowColumns:i.cols.slice(2),rows:i.rows})}},11177:function(n,e,t){t.r(e),t.d(e,{default:function(){return v}});var a=t(67294),r=t(81254),o=(t(69368),t(42873)),i=["components"];function l(){return l=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(n[a]=t[a])}return n},l.apply(this,arguments)}function s(n,e){if(null==n)return{};var t,a,r=function(n,e){if(null==n)return{};var t,a,r={},o=Object.keys(n);for(a=0;a<o.length;a++)t=o[a],e.indexOf(t)>=0||(r[t]=n[t]);return r}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(a=0;a<o.length;a++)t=o[a],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(r[t]=n[t])}return r}var c={};function d(n){var e=n.components,t=s(n,i);return(0,r.mdx)("wrapper",l({},c,t,{components:e,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Table from 'terra-table';\n\nconst tableData = {\n  cols: [\n    { id: 'Column-0', displayName: 'Patient' },\n    { id: 'Column-1', displayName: 'Location' },\n    { id: 'Column-2', displayName: 'Illness Severity' },\n    { id: 'Column-3', displayName: 'Visit' },\n    { id: 'Column-4', displayName: 'Allergy' },\n    { id: 'Column-5', displayName: 'Primary Contact' },\n    { id: 'Column-6', displayName: 'Generic Order Counts' },\n    { id: 'Column-7', displayName: 'Patient Age' },\n    { id: 'Column-8', displayName: 'Medication History' },\n    { id: 'Column-9', displayName: 'My Relationship' },\n  ],\n  rows: [\n    {\n      id: '1',\n      cells: [\n        { content: 'Fleck, Arthur' },\n        { content: '1007-MTN' },\n        { content: 'Unstable' },\n        { content: 'Inpatient, 2 months' },\n        { content: '' },\n        { content: 'Quinzell, Harleen' },\n        { content: '' },\n        { isMasked: true },\n        { isMasked: true },\n        { content: 'Admitting Physician' },\n      ],\n    },\n    {\n      id: '2',\n      cells: [\n        { content: 'Wayne, Bruce' },\n        { content: '1007-MTN-DR' },\n        { content: 'Stable' },\n        { content: 'Outpatient, 2 days' },\n        { content: 'Phytochemicals' },\n        { content: 'Grayson, Richard' },\n        { content: '' },\n        { content: '' },\n        { isMasked: true },\n        { content: 'Admitting Physician' },\n      ],\n    },\n  ],\n};\n\nconst PinnedColumnsTable = () => (\n  <Table\n    id=\"my-table-id\"\n    pinnedColumns={tableData.cols.slice(0, 2)}\n    overflowColumns={tableData.cols.slice(2)}\n    rows={tableData.rows}\n  />\n);\n\nexport default PinnedColumnsTable;\n\n")))}d.isMDXComponent=!0;var u=t(49271),m=function(n){var e=n.title,t=n.description,r=n.isExpanded;return a.createElement(u.Z,{title:e||"Pinned Columns Table",description:t,example:a.createElement(o.Z,null),exampleSrc:a.createElement(d,null),isExpanded:r})},p=["components"];function y(){return y=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(n[a]=t[a])}return n},y.apply(this,arguments)}function f(n,e){if(null==n)return{};var t,a,r=function(n,e){if(null==n)return{};var t,a,r={},o=Object.keys(n);for(a=0;a<o.length;a++)t=o[a],e.indexOf(t)>=0||(r[t]=n[t]);return r}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(a=0;a<o.length;a++)t=o[a],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(r[t]=n[t])}return r}var b={},g="wrapper";function v(n){var e=n.components,t=f(n,p);return(0,r.mdx)(g,y({},b,t,{components:e,mdxType:"MDXLayout"}),(0,r.mdx)(m,{mdxType:"PinnedColumnsTable"}))}v.isMDXComponent=!0},69368:function(n,e,t){t.d(e,{C:function(){return o}});var a=t(67294),r=t(22863),o=function(n){var e=n.url;return a.createElement(r.Z,{src:"https://github.com/cerner/table-framework/tree/main/packages/terra-table",name:"terra-table",version:"5.1.1-alpha.0",url:e})}},17422:function(n,e,t){t.r(e),e.default={badge:"Badges-module__badge___vex-+","badge-container":"Badges-module__badge-container___B13Mv","badge-name":"Badges-module__badge-name___jkN0m","badge-version":"Badges-module__badge-version___agZ+P"}}}]);