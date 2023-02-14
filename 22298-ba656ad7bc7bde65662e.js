"use strict";(self.webpackChunkterra_ui=self.webpackChunkterra_ui||[]).push([[22298],{60666:function(e,n,t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=t(22678),r=[{key:"uid_action_1",onClick:a.loadPopup,values:[new Date(2018,2,1,6,15).toISOString()]},{key:"uid_action_2",onClick:a.loadPopup,values:[new Date(2018,7,1,6,15).toISOString()]}];n.default=r},28597:function(e,n){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var t=[{key:"activity1",label:{display:"activity1"},onClick:function(){},color:"#FFDF00",startDate:new Date(2018,1,1).toISOString(),endDate:new Date(2018,4,10).toISOString(),style:{isDotted:!1,isHollow:!1}}];n.default=t},10671:function(e,n,t){var a=t(64836);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=a(t(54520)),o={path:[{id:"triangle",fill:"#E50000",d:"M1.2 45c-1.1 0-1.6-.8-1-1.7L23 3.7c.5-1 1.4-1 2 0l22.8 39.6c.5 1 .1 1.7-1 1.7H1.2z"},{id:"exclamation",fill:"#FFF",d:"M21.5 36.7h5V42h-5v-5.3zm0-22.7h5v17.3h-5V14z"}],options:{x:-6.5,y:-7.5,scale:.35}},l=[{key:"uid_event_1",label:{display:"Defect A"},shape:{path:[{id:"clock",d:"M25.3 25.9l-5.2-5.2v-8.5c.1-.7-.4-1.3-1-1.4-.7-.1-1.3.4-1.4 1V21c0 .5.2.9.5 1.2l5.3 5.3c.5.5 1.2.6 1.8.2.5-.4.6-1.1.3-1.6-.1 0-.2-.1-.3-.2zm7.2-15l1.7-1.7c.6-.6.6-1.7 0-2.3l-1.1-1.1c-.6-.6-1.7-.6-2.3 0L29 7.6c-1.5-1.1-3.3-2-5.1-2.6-.9-.3-1.8-.5-2.7-.6V1.6c0-.9-.7-1.6-1.6-1.6h-1.5c-.9 0-1.6.7-1.6 1.6v2.7C7.2 5.7.9 14.4 2.3 23.7 3.6 32 10.7 38.1 19 38.1c1 0 1.9-.1 2.9-.3l-1.4-1.4c-.2-.2-.4-.5-.5-.8-.3 0-.7.1-1 .1-8.1 0-14.6-6.5-14.6-14.6S10.9 6.5 19 6.5c1.5 0 2.9.2 4.3.7 5.9 1.8 9.9 7.1 10.2 13.2.7-.5 1.6-.6 2.4-.2-.2-3.4-1.4-6.6-3.4-9.3z"},{id:"diamond",fill:"#E50000",d:"M47.6 34.1s0-.1 0 0L35.7 22.2c-.2-.2-.5-.4-.8-.4s-.6.1-.8.3l-12 12c-.5.4-.5 1.2-.1 1.6 0 0 0 .1.1.1L34 47.6c.5.4 1.1.4 1.6 0l11.9-11.9c.5-.4.5-1.2.1-1.6z"},{id:"exclamation",fill:"#FFF",d:"M34 39h2v2h-2v-2zm0-11h2v9h-2v-9z"}],options:{x:-7,y:-7,scale:.35}},values:[new Date(2018,4,30).toISOString()]},{key:"uid_event_2",label:{display:"Defect B"},shape:o,color:r.default.helpers.COLORS.GREEN,values:[new Date(2018,5,4).toISOString()]},{key:"uid_event_3",label:{display:"Defect C"},shape:o,color:r.default.helpers.COLORS.GREEN,values:[new Date(2018,9,5).toISOString()]}];n.default=l},86739:function(e,n,t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=t(22678),r=[{key:"task1",onClick:a.loadTaskPopup,label:{display:"Story Apex"},startDate:new Date(2018,2,1).toISOString(),endDate:new Date(2018,3,10).toISOString()},{key:"task2",onClick:a.loadTaskPopup,label:{display:"Story Broccoli"},startDate:new Date(2018,8,1).toISOString(),endDate:new Date(2018,9,10).toISOString()}];n.default=r},25883:function(e,n,t){var a=t(64836);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=a(t(54520)),o=t(22678),l=function(e){return{bindTo:e,axis:{x:{show:!0,lowerLimit:new Date(2018,1,1,12).toISOString(),upperLimit:new Date(2019,1,1,12).toISOString(),rangeRounding:!0}},clickPassThrough:{task:!1,activity:!1,event:!1,action:!1,dateline:!1},actionLegend:[{key:"uid_action_1",label:{display:"Action A"}},{key:"uid_action_2",label:{display:"Action B"},shape:r.default.helpers.SHAPES.DARK.TRIANGLE,color:r.default.helpers.COLORS.GREEN}],dateline:[{showDatelineIndicator:!0,label:{display:"DST Start"},color:"#405978",shape:r.default.helpers.SHAPES.DARK.DIAMOND,onClick:o.loadDatelinePopup,value:new Date(2018,2,10).toISOString()},{showDatelineIndicator:!0,label:{display:"Current Date"},color:"#C97318",shape:r.default.helpers.SHAPES.DARK.SQUARE,onClick:o.loadDatelinePopup,value:new Date(2018,8,5).toISOString()},{showDatelineIndicator:!0,label:{display:"DST End"},color:"#405978",shape:r.default.helpers.SHAPES.DARK.DIAMOND,onClick:o.loadDatelinePopup,value:new Date(2018,10,3).toISOString()}]}};n.default=l},15681:function(e,n,t){var a=t(64836);n.Z=void 0;var r=a(t(67294)),o=a(t(54520)),l=a(t(53334));t(56867),t(77449);var i=a(t(93065)),c=a(t(25883)),s=a(t(42777)),p=a(t(28597)),d=a(t(86739)),u=a(t(10671)),f=a(t(60666)),m=l.default.deepClone((0,c.default)("#ganttTrackSelection")),b=(0,s.default)([d.default],[p.default],[u.default],[f.default],1,!0),g=function(){return r.default.useEffect((function(){var e=o.default.api.gantt(m);b.forEach((function(n){e.loadContent(n)}))}),[]),r.default.createElement(i.default,{id:"ganttTrackSelection"})};n.Z=g},22298:function(e,n,t){t.r(n),t.d(n,{default:function(){return T}});var a=t(67294),r=t(81254),o=t(15681),l=["components"];function i(){return i=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},i.apply(this,arguments)}function c(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s={},p="wrapper";function d(e){var n=e.components,t=c(e,l);return(0,r.mdx)(p,i({},s,t,{components:n,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport utils from '@cerner/carbon-graphs/lib/js/helpers/utils';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Graph.module.scss';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Gantt/GanttChart.module.scss';\nimport ExampleGraphContainer from '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer';\nimport getGanttDefaultConfig from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Gantt/ganttActionConfig';\nimport loadTracks from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Gantt/loadTracks';\nimport activityDataset1 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Gantt/activityDataset1';\nimport taskDataset1 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Gantt/taskDataset1';\nimport eventDataset2 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Gantt/eventDataset2';\nimport actionDataset1 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Gantt/actionDataset1';\n\n/*\nPlease refer to the documentation below to see the graphConfig and data objects\n*/\n\nconst graphConfig = utils.deepClone(getGanttDefaultConfig('#ganttTrackSelection'));\nconst dataset = loadTracks(\n  [taskDataset1],\n  [activityDataset1],\n  [eventDataset2],\n  [actionDataset1],\n  1,\n  true,\n);\n\nconst GanttTrackSelectionExample = () => {\n  React.useEffect(() => {\n    const graph = Carbon.api.gantt(graphConfig);\n    dataset.forEach((data) => {\n      graph.loadContent(data);\n    });\n  }, []);\n\n  return (\n    <ExampleGraphContainer id=\"ganttTrackSelection\" />\n  );\n};\n\nexport default GanttTrackSelectionExample;\n\n")))}d.isMDXComponent=!0;var u=t(49271),f=t(25005),m=function(e){var n=e.title,t=e.description,r=e.isExpanded;return a.createElement(u.Z,{title:n||"Track Selection",description:t,example:a.createElement(o.Z,null),exampleCssSrc:a.createElement(f.Z,null),exampleSrc:a.createElement(d,null),isExpanded:r})},b=t(24712),g=t(42026),y=t(65092),h=["components"];function v(){return v=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},v.apply(this,arguments)}function O(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var D={},S="wrapper";function x(e){var n=e.components,t=O(e,h);return(0,r.mdx)(S,v({},D,t,{components:n,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/lib/js/carbon';\n\nconst dueSoon = {\n  path: [\n    {\n      id: 'clock',\n      d:\n        'M25.3 25.9l-5.2-5.2v-8.5c.1-.7-.4-1.3-1-1.4-.7-.1-1.3.4-1.4 1V21c0 .5.2.9.5 '\n        + '1.2l5.3 5.3c.5.5 1.2.6 1.8.2.5-.4.6-1.1.3-1.6-.1 0-.2-.1-.3-.2zm7.2-15l1.7-1.7c.6-.6.6-1.7 '\n        + '0-2.3l-1.1-1.1c-.6-.6-1.7-.6-2.3 0L29 7.6c-1.5-1.1-3.3-2-5.1-2.6-.9-.3-1.8-.5-2.7-.6V1.6c0-.9-.7-'\n        + '1.6-1.6-1.6h-1.5c-.9 0-1.6.7-1.6 1.6v2.7C7.2 5.7.9 14.4 2.3 23.7 3.6 32 10.7 38.1 19 38.1c1 0 1.9-.1 2.9'\n        + '-.3l-1.4-1.4c-.2-.2-.4-.5-.5-.8-.3 0-.7.1-1 .1-8.1 0-14.6-6.5-14.6-14.6S10.9 6.5 19 6.5c1.5 0 2.9.2 4.3.7 '\n        + '5.9 1.8 9.9 7.1 10.2 13.2.7-.5 1.6-.6 2.4-.2-.2-3.4-1.4-6.6-3.4-9.3z',\n    },\n    {\n      id: 'diamond',\n      fill: '#E50000',\n      d:\n        'M47.6 34.1s0-.1 0 0L35.7 22.2c-.2-.2-.5-.4-.8-.4s-.6.1-.8.3l-12 12c-.5.4-.5 1.2-.1 1.6 0 0 0 '\n        + '.1.1.1L34 47.6c.5.4 1.1.4 1.6 0l11.9-11.9c.5-.4.5-1.2.1-1.6z',\n    },\n    {\n      id: 'exclamation',\n      fill: '#FFF',\n      d: 'M34 39h2v2h-2v-2zm0-11h2v9h-2v-9z',\n    },\n  ],\n  options: {\n    x: -7,\n    y: -7,\n    scale: 0.35,\n  },\n};\nconst alert = {\n  path: [\n    {\n      id: 'triangle',\n      fill: '#E50000',\n      d:\n        'M1.2 45c-1.1 0-1.6-.8-1-1.7L23 3.7c.5-1 1.4-1 2 0l22.8 39.6c.5 1 .1 1.7-1 1.7H1.2z',\n    },\n    {\n      id: 'exclamation',\n      fill: '#FFF',\n      d: 'M21.5 36.7h5V42h-5v-5.3zm0-22.7h5v17.3h-5V14z',\n    },\n  ],\n  options: {\n    x: -6.5,\n    y: -7.5,\n    scale: 0.35,\n  },\n};\n\nconst eventDataset2 = [\n  {\n    key: 'uid_event_1',\n    label: {\n      display: 'Defect A',\n    },\n    shape: dueSoon,\n    values: [new Date(2018, 4, 30).toISOString()],\n  },\n  {\n    key: 'uid_event_2',\n    label: {\n      display: 'Defect B',\n    },\n    shape: alert,\n    color: Carbon.helpers.COLORS.GREEN,\n    values: [new Date(2018, 5, 4).toISOString()],\n  },\n  {\n    key: 'uid_event_3',\n    label: {\n      display: 'Defect C',\n    },\n    shape: alert,\n    color: Carbon.helpers.COLORS.GREEN,\n    values: [new Date(2018, 9, 5).toISOString()],\n  },\n];\n\nexport default eventDataset2;\n\n")))}x.isMDXComponent=!0;var j=t(48856),k=t(12437),w=["components"];function C(){return C=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},C.apply(this,arguments)}function E(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}t(51320);var P={},I="wrapper";function T(e){var n=e.components,t=E(e,w);return(0,r.mdx)(I,C({},P,t,{components:n,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"simple-gantt"},"Simple Gantt"),(0,r.mdx)("p",null,"This is a simple Gantt chart with track selection."),(0,r.mdx)("h2",{id:"getting-started"},"Getting Started"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Install with ",(0,r.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"npm i @cerner/carbon-graphs --save-dev"))))),(0,r.mdx)("h2",{id:"usage"},"Usage"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/dist/js/carbon-graphs.js';\nimport '@cerner/carbon-graphs/dist/css/carbon-graphs.css';\n")),(0,r.mdx)("h2",{id:"examples"},"Examples"),(0,r.mdx)(m,{mdxType:"GanttChart"}),(0,r.mdx)("details",null,(0,r.mdx)("summary",{style:{fontSize:24}},(0,r.mdx)("b",null,"Data")),(0,r.mdx)("h3",{id:"graph-config-object"},"Graph Config object"),(0,r.mdx)(b.Z,{mdxType:"GraphConfig"}),(0,r.mdx)("h3",{id:"data-object"},"Data object"),(0,r.mdx)("h4",{id:"activity-dataset"},"Activity Dataset"),(0,r.mdx)(g.Z,{mdxType:"ActivityDataObject"}),(0,r.mdx)("h4",{id:"task-dataset"},"Task Dataset"),(0,r.mdx)(y.Z,{mdxType:"TaskDataObject"}),(0,r.mdx)("h4",{id:"event-dataset"},"Event Dataset"),(0,r.mdx)(x,{mdxType:"EventDataObject"}),(0,r.mdx)("h4",{id:"action-dataset"},"Action Dataset"),(0,r.mdx)(j.Z,{mdxType:"ActionDataObject"}),(0,r.mdx)("h3",{id:"load-track"},"Load Track"),(0,r.mdx)(k.Z,{mdxType:"LoadTracks"})))}T.isMDXComponent=!0},48856:function(e,n,t){t.d(n,{Z:function(){return s}});t(67294);var a=t(81254),r=["components"];function o(){return o=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},o.apply(this,arguments)}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i={},c="wrapper";function s(e){var n=e.components,t=l(e,r);return(0,a.mdx)(c,o({},i,t,{components:n,mdxType:"MDXLayout"}),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-js"},"import { loadPopup } from '@cerner/terra-graphs-docs/lib/example-datasets/popup';\n\nconst actionDataset1 = [\n  {\n    key: 'uid_action_1',\n    onClick: loadPopup,\n    values: [new Date(2018, 2, 1, 6, 15).toISOString()],\n  },\n  {\n    key: 'uid_action_2',\n    onClick: loadPopup,\n    values: [new Date(2018, 7, 1, 6, 15).toISOString()],\n  },\n];\n\nexport default actionDataset1;\n\n")))}s.isMDXComponent=!0},42026:function(e,n,t){t.d(n,{Z:function(){return s}});t(67294);var a=t(81254),r=["components"];function o(){return o=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},o.apply(this,arguments)}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i={},c="wrapper";function s(e){var n=e.components,t=l(e,r);return(0,a.mdx)(c,o({},i,t,{components:n,mdxType:"MDXLayout"}),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-js"},"const activityDataset1 = [\n  {\n    key: 'activity1',\n    label: {\n      display: 'activity1',\n    },\n    onClick: () => {},\n    color: '#FFDF00',\n    startDate: new Date(2018, 1, 1).toISOString(),\n    endDate: new Date(2018, 4, 10).toISOString(),\n    style: {\n      isDotted: false,\n      isHollow: false,\n    },\n  },\n];\n\nexport default activityDataset1;\n\n")))}s.isMDXComponent=!0},65092:function(e,n,t){t.d(n,{Z:function(){return s}});t(67294);var a=t(81254),r=["components"];function o(){return o=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},o.apply(this,arguments)}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i={},c="wrapper";function s(e){var n=e.components,t=l(e,r);return(0,a.mdx)(c,o({},i,t,{components:n,mdxType:"MDXLayout"}),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-js"},"import { loadTaskPopup } from '@cerner/terra-graphs-docs/lib/example-datasets/popup';\n\nconst taskDataset1 = [\n  {\n    key: 'task1',\n    onClick: loadTaskPopup,\n    label: {\n      display: 'Story Apex',\n    },\n    startDate: new Date(2018, 2, 1).toISOString(),\n    endDate: new Date(2018, 3, 10).toISOString(),\n  },\n  {\n    key: 'task2',\n    onClick: loadTaskPopup,\n    label: {\n      display: 'Story Broccoli',\n    },\n    startDate: new Date(2018, 8, 1).toISOString(),\n    endDate: new Date(2018, 9, 10).toISOString(),\n  },\n];\n\nexport default taskDataset1;\n\n")))}s.isMDXComponent=!0},24712:function(e,n,t){t.d(n,{Z:function(){return s}});t(67294);var a=t(81254),r=["components"];function o(){return o=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},o.apply(this,arguments)}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i={},c="wrapper";function s(e){var n=e.components,t=l(e,r);return(0,a.mdx)(c,o({},i,t,{components:n,mdxType:"MDXLayout"}),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport {\n  loadDatelinePopup,\n} from '@cerner/terra-graphs-docs/lib/example-datasets/popup';\n\nconst getGanttActionDefaultConfig = (id) => ({\n  bindTo: id,\n  axis: {\n    x: {\n      show: true,\n      lowerLimit: new Date(2018, 1, 1, 12).toISOString(),\n      upperLimit: new Date(2019, 1, 1, 12).toISOString(),\n      rangeRounding: true, // If set to false, we don't extend the domain\n    },\n  },\n  clickPassThrough: {\n    task: false,\n    activity: false,\n    event: false,\n    action: false,\n    dateline: false,\n  },\n  actionLegend: [\n    {\n      key: 'uid_action_1',\n      label: {\n        display: 'Action A',\n      },\n    },\n    {\n      key: 'uid_action_2',\n      label: {\n        display: 'Action B',\n      },\n      shape: Carbon.helpers.SHAPES.DARK.TRIANGLE,\n      color: Carbon.helpers.COLORS.GREEN,\n    },\n  ],\n  dateline: [\n    {\n      showDatelineIndicator: true,\n      label: {\n        display: 'DST Start',\n      },\n      color: '#405978',\n      shape: Carbon.helpers.SHAPES.DARK.DIAMOND,\n      onClick: loadDatelinePopup,\n      value: new Date(2018, 2, 10).toISOString(),\n    },\n    {\n      showDatelineIndicator: true,\n      label: {\n        display: 'Current Date',\n      },\n      color: '#C97318',\n      shape: Carbon.helpers.SHAPES.DARK.SQUARE,\n      onClick: loadDatelinePopup,\n      value: new Date(2018, 8, 5).toISOString(),\n    },\n    {\n      showDatelineIndicator: true,\n      label: {\n        display: 'DST End',\n      },\n      color: '#405978',\n      shape: Carbon.helpers.SHAPES.DARK.DIAMOND,\n      onClick: loadDatelinePopup,\n      value: new Date(2018, 10, 3).toISOString(),\n    },\n  ],\n});\n\nexport default getGanttActionDefaultConfig;\n\n\n")))}s.isMDXComponent=!0}}]);