"use strict";(self.webpackChunkterra_ui=self.webpackChunkterra_ui||[]).push([[1048],{83108:function(n,e,t){var a=t(64836);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=a(t(54520)),o=[{key:"uid_event_1",label:{display:"Defect A"},onClick:t(22678).loadPopup,shape:{path:[{id:"calendar",d:"M31 5V1.8c0-1-.8-1.8-1.8-1.8h-1.5c-1 0-1.8.8-1.8 1.8V5H11V1.8c0-1-.8-1.8-1.8-1.8H7.8C6.8 0 6 .8 6 1.8V5H2v33h19.1c-.1-.7-.1-1.3-.1-2v-1H5V17h27v4.6c1-.3 2-.4 3-.5V5h-4z"},{id:"circle",fill:"#78C346",d:"M36 24c6.6 0 12 5.4 12 12s-5.4 12-12 12-12-5.4-12-12 5.4-12 12-12z"},{id:"check",fill:"#FFF",d:"M34.1 42.4l-6.5-6.5 2.1-2.1 4.4 4.3 8.2-8.1 2.1 2.1-10.3 10.3z"}],options:{x:-7,y:-7,scale:.4}},color:r.default.helpers.COLORS.BLACK,values:[new Date(2018,2,5).toISOString()]},{key:"uid_event_2",label:{display:"Defect B"},shape:{path:[{id:"clock",d:"M25.3 25.9l-5.2-5.2v-8.5c.1-.7-.4-1.3-1-1.4-.7-.1-1.3.4-1.4 1V21c0 .5.2.9.5 1.2l5.3 5.3c.5.5 1.2.6 1.8.2.5-.4.6-1.1.3-1.6-.1 0-.2-.1-.3-.2zm7.2-15l1.7-1.7c.6-.6.6-1.7 0-2.3l-1.1-1.1c-.6-.6-1.7-.6-2.3 0L29 7.6c-1.5-1.1-3.3-2-5.1-2.6-.9-.3-1.8-.5-2.7-.6V1.6c0-.9-.7-1.6-1.6-1.6h-1.5c-.9 0-1.6.7-1.6 1.6v2.7C7.2 5.7.9 14.4 2.3 23.7 3.6 32 10.7 38.1 19 38.1c1 0 1.9-.1 2.9-.3l-1.4-1.4c-.2-.2-.4-.5-.5-.8-.3 0-.7.1-1 .1-8.1 0-14.6-6.5-14.6-14.6S10.9 6.5 19 6.5c1.5 0 2.9.2 4.3.7 5.9 1.8 9.9 7.1 10.2 13.2.7-.5 1.6-.6 2.4-.2-.2-3.4-1.4-6.6-3.4-9.3z"},{id:"diamond",fill:"#E50000",d:"M47.6 34.1s0-.1 0 0L35.7 22.2c-.2-.2-.5-.4-.8-.4s-.6.1-.8.3l-12 12c-.5.4-.5 1.2-.1 1.6 0 0 0 .1.1.1L34 47.6c.5.4 1.1.4 1.6 0l11.9-11.9c.5-.4.5-1.2.1-1.6z"},{id:"exclamation",fill:"#FFF",d:"M34 39h2v2h-2v-2zm0-11h2v9h-2v-9z"}],options:{x:-7,y:-7,scale:.35}},color:r.default.helpers.COLORS.WHITE,values:[new Date(2018,5,4).toISOString()]},{key:"uid_event_3",label:{display:"Defect C"},shape:{path:[{id:"triangle",fill:"#E50000",d:"M1.2 45c-1.1 0-1.6-.8-1-1.7L23 3.7c.5-1 1.4-1 2 0l22.8 39.6c.5 1 .1 1.7-1 1.7H1.2z"},{id:"exclamation",fill:"#FFF",d:"M21.5 36.7h5V42h-5v-5.3zm0-22.7h5v17.3h-5V14z"}],options:{x:-6.5,y:-7.5,scale:.35}},values:[new Date(2018,3,30).toISOString()]}];e.default=o},43015:function(n,e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=[{key:"task3",onClick:t(22678).loadTaskPopup,label:{display:"Story Apex"},startDate:new Date(2018,3,1).toISOString(),endDate:new Date(2018,7,10).toISOString()}];e.default=a},58234:function(n,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;e.default=function(n){return{bindTo:n,axis:{x:{show:!0,lowerLimit:new Date(2018,1,1,12).toISOString(),upperLimit:new Date(2019,1,1,12).toISOString(),rangeRounding:!0}}}}},50487:function(n,e,t){var a=t(64836);e.Z=void 0;var r=a(t(67294)),o=a(t(54520)),l=a(t(53334));t(56867),t(77449);var s=a(t(93065)),c=a(t(58234)),i=a(t(42777)),p=a(t(43015)),d=a(t(83108)),u=l.default.deepClone((0,c.default)("#ganttEvents"));u.showActionLegend=!1,u.dateline=[];var m=(0,i.default)([p.default],[],[d.default],[],1);e.Z=function(){return r.default.useEffect((function(){var n=o.default.api.gantt(u);m.forEach((function(e){n.loadContent(e)}))}),[]),r.default.createElement(s.default,{id:"ganttEvents"})}},45045:function(n,e,t){t.r(e),t.d(e,{default:function(){return E}});var a=t(67294),r=t(81254),o=t(50487),l=["components"];function s(){return s=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(n[a]=t[a])}return n},s.apply(this,arguments)}function c(n,e){if(null==n)return{};var t,a,r=function(n,e){if(null==n)return{};var t,a,r={},o=Object.keys(n);for(a=0;a<o.length;a++)t=o[a],e.indexOf(t)>=0||(r[t]=n[t]);return r}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(a=0;a<o.length;a++)t=o[a],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(r[t]=n[t])}return r}var i={};function p(n){var e=n.components,t=c(n,l);return(0,r.mdx)("wrapper",s({},i,t,{components:e,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport utils from '@cerner/carbon-graphs/lib/js/helpers/utils';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Graph.module.scss';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Gantt/GanttChart.module.scss';\nimport ExampleGraphContainer from '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer';\nimport getGanttDefaultConfig from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Gantt/ganttDefaultConfig';\nimport loadTracks from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Gantt/loadTracks';\nimport taskDataset2 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Gantt/taskDataset2';\nimport eventDataset1 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Gantt/eventDataset1';\n\n/*\nPlease refer to the documentation below to see the graphConfig and data objects\n*/\n\nconst graphConfig = utils.deepClone(getGanttDefaultConfig('#ganttEvents'));\ngraphConfig.showActionLegend = false;\ngraphConfig.dateline = [];\nconst dataset = loadTracks([taskDataset2], [], [eventDataset1], [], 1);\n\nconst GanttEventsExample = () => {\n  React.useEffect(() => {\n    const graph = Carbon.api.gantt(graphConfig);\n    dataset.forEach((data) => {\n      graph.loadContent(data);\n    });\n  }, []);\n\n  return (\n    <ExampleGraphContainer id=\"ganttEvents\" />\n  );\n};\n\nexport default GanttEventsExample;\n\n")))}p.isMDXComponent=!0;var d=t(49271),u=t(25005),m=function(n){var e=n.title,t=n.description,r=n.isExpanded;return a.createElement(d.Z,{title:e||"Events",description:t,example:a.createElement(o.Z,null),exampleCssSrc:a.createElement(u.Z,null),exampleSrc:a.createElement(p,null),isExpanded:r})},f=t(75831),h=t(47530),g=t(12437),v=["components"];function b(){return b=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(n[a]=t[a])}return n},b.apply(this,arguments)}function x(n,e){if(null==n)return{};var t,a,r=function(n,e){if(null==n)return{};var t,a,r={},o=Object.keys(n);for(a=0;a<o.length;a++)t=o[a],e.indexOf(t)>=0||(r[t]=n[t]);return r}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(a=0;a<o.length;a++)t=o[a],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(r[t]=n[t])}return r}var y={},O="wrapper";function j(n){var e=n.components,t=x(n,v);return(0,r.mdx)(O,b({},y,t,{components:e,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport { loadPopup } from '@cerner/terra-graphs-docs/lib/example-datasets/popup';\n\nconst scheduled = {\n  path: [\n    {\n      id: 'calendar',\n      d:\n        'M31 5V1.8c0-1-.8-1.8-1.8-1.8h-1.5c-1 0-1.8.8-1.8 1.8V5H11V1.8c0-1-.8-1.8-1.8-1.8H7.8C6.8'\n        + ' 0 6 .8 6 1.8V5H2v33h19.1c-.1-.7-.1-1.3-.1-2v-1H5V17h27v4.6c1-.3 2-.4 3-.5V5h-4z',\n    },\n    {\n      id: 'circle',\n      fill: '#78C346',\n      d:\n        'M36 24c6.6 0 12 5.4 12 12s-5.4 12-12 12-12-5.4-12-12 5.4-12 12-12z',\n    },\n    {\n      id: 'check',\n      fill: '#FFF',\n      d: 'M34.1 42.4l-6.5-6.5 2.1-2.1 4.4 4.3 8.2-8.1 2.1 2.1-10.3 10.3z',\n    },\n  ],\n  options: {\n    x: -7,\n    y: -7,\n    scale: 0.4,\n  },\n};\n\nconst dueSoon = {\n  path: [\n    {\n      id: 'clock',\n      d:\n        'M25.3 25.9l-5.2-5.2v-8.5c.1-.7-.4-1.3-1-1.4-.7-.1-1.3.4-1.4 1V21c0 .5.2.9.5 '\n        + '1.2l5.3 5.3c.5.5 1.2.6 1.8.2.5-.4.6-1.1.3-1.6-.1 0-.2-.1-.3-.2zm7.2-15l1.7-1.7c.6-.6.6-1.7 '\n        + '0-2.3l-1.1-1.1c-.6-.6-1.7-.6-2.3 0L29 7.6c-1.5-1.1-3.3-2-5.1-2.6-.9-.3-1.8-.5-2.7-.6V1.6c0-.9-.7-'\n        + '1.6-1.6-1.6h-1.5c-.9 0-1.6.7-1.6 1.6v2.7C7.2 5.7.9 14.4 2.3 23.7 3.6 32 10.7 38.1 19 38.1c1 0 1.9-.1 2.9'\n        + '-.3l-1.4-1.4c-.2-.2-.4-.5-.5-.8-.3 0-.7.1-1 .1-8.1 0-14.6-6.5-14.6-14.6S10.9 6.5 19 6.5c1.5 0 2.9.2 4.3.7 '\n        + '5.9 1.8 9.9 7.1 10.2 13.2.7-.5 1.6-.6 2.4-.2-.2-3.4-1.4-6.6-3.4-9.3z',\n    },\n    {\n      id: 'diamond',\n      fill: '#E50000',\n      d:\n        'M47.6 34.1s0-.1 0 0L35.7 22.2c-.2-.2-.5-.4-.8-.4s-.6.1-.8.3l-12 12c-.5.4-.5 1.2-.1 1.6 0 0 0 '\n        + '.1.1.1L34 47.6c.5.4 1.1.4 1.6 0l11.9-11.9c.5-.4.5-1.2.1-1.6z',\n    },\n    {\n      id: 'exclamation',\n      fill: '#FFF',\n      d: 'M34 39h2v2h-2v-2zm0-11h2v9h-2v-9z',\n    },\n  ],\n  options: {\n    x: -7,\n    y: -7,\n    scale: 0.35,\n  },\n};\n\nconst alert = {\n  path: [\n    {\n      id: 'triangle',\n      fill: '#E50000',\n      d:\n        'M1.2 45c-1.1 0-1.6-.8-1-1.7L23 3.7c.5-1 1.4-1 2 0l22.8 39.6c.5 1 .1 1.7-1 1.7H1.2z',\n    },\n    {\n      id: 'exclamation',\n      fill: '#FFF',\n      d: 'M21.5 36.7h5V42h-5v-5.3zm0-22.7h5v17.3h-5V14z',\n    },\n  ],\n  options: {\n    x: -6.5,\n    y: -7.5,\n    scale: 0.35,\n  },\n};\n\nconst eventDataset1 = [\n  {\n    key: 'uid_event_1',\n    label: {\n      display: 'Defect A',\n    },\n    onClick: loadPopup,\n    shape: scheduled,\n    color: Carbon.helpers.COLORS.BLACK,\n    values: [new Date(2018, 2, 5).toISOString()],\n  },\n  {\n    key: 'uid_event_2',\n    label: {\n      display: 'Defect B',\n    },\n    shape: dueSoon,\n    color: Carbon.helpers.COLORS.WHITE,\n    values: [new Date(2018, 5, 4).toISOString()],\n  },\n  {\n    key: 'uid_event_3',\n    label: {\n      display: 'Defect C',\n    },\n    shape: alert,\n    values: [new Date(2018, 3, 30).toISOString()],\n  },\n];\n\nexport default eventDataset1;\n\n")))}j.isMDXComponent=!0;var C=["components"];function D(){return D=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(n[a]=t[a])}return n},D.apply(this,arguments)}function S(n,e){if(null==n)return{};var t,a,r=function(n,e){if(null==n)return{};var t,a,r={},o=Object.keys(n);for(a=0;a<o.length;a++)t=o[a],e.indexOf(t)>=0||(r[t]=n[t]);return r}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(a=0;a<o.length;a++)t=o[a],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(r[t]=n[t])}return r}t(51320);var w={},k="wrapper";function E(n){var e=n.components,t=S(n,C);return(0,r.mdx)(k,D({},w,t,{components:e,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"simple-gantt"},"Simple Gantt"),(0,r.mdx)("p",null,"This is a simple Gantt chart with Events."),(0,r.mdx)("h2",{id:"getting-started"},"Getting Started"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Install with ",(0,r.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"npm i @cerner/carbon-graphs --save-dev"))))),(0,r.mdx)("h2",{id:"usage"},"Usage"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/dist/js/carbon-graphs.js';\nimport '@cerner/carbon-graphs/dist/css/carbon-graphs.css';\n")),(0,r.mdx)("h2",{id:"examples"},"Examples"),(0,r.mdx)(m,{mdxType:"GanttChart"}),(0,r.mdx)("details",null,(0,r.mdx)("summary",{style:{fontSize:24}},(0,r.mdx)("b",null,"Data")),(0,r.mdx)("h3",{id:"graph-config-object"},"Graph Config object"),(0,r.mdx)(f.Z,{mdxType:"GraphConfig"}),(0,r.mdx)("h3",{id:"data-object"},"Data object"),(0,r.mdx)("h4",{id:"task-dataset"},"Task Dataset"),(0,r.mdx)(h.Z,{mdxType:"TasksDataObject"}),(0,r.mdx)("h4",{id:"events-dataset"},"Events Dataset"),(0,r.mdx)(j,{mdxType:"EventsDataObject"}),(0,r.mdx)("h3",{id:"load-track"},"Load Track"),(0,r.mdx)(g.Z,{mdxType:"LoadTracks"})))}E.isMDXComponent=!0},47530:function(n,e,t){t.d(e,{Z:function(){return i}});t(67294);var a=t(81254),r=["components"];function o(){return o=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(n[a]=t[a])}return n},o.apply(this,arguments)}function l(n,e){if(null==n)return{};var t,a,r=function(n,e){if(null==n)return{};var t,a,r={},o=Object.keys(n);for(a=0;a<o.length;a++)t=o[a],e.indexOf(t)>=0||(r[t]=n[t]);return r}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(a=0;a<o.length;a++)t=o[a],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(r[t]=n[t])}return r}var s={},c="wrapper";function i(n){var e=n.components,t=l(n,r);return(0,a.mdx)(c,o({},s,t,{components:e,mdxType:"MDXLayout"}),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-js"},"import { loadTaskPopup } from '@cerner/terra-graphs-docs/lib/example-datasets/popup';\n\nconst taskDataset2 = [\n  {\n    key: 'task3',\n    onClick: loadTaskPopup,\n    label: {\n      display: 'Story Apex',\n    },\n    startDate: new Date(2018, 3, 1).toISOString(),\n    endDate: new Date(2018, 7, 10).toISOString(),\n  },\n];\n\nexport default taskDataset2;\n\n")))}i.isMDXComponent=!0},75831:function(n,e,t){t.d(e,{Z:function(){return i}});t(67294);var a=t(81254),r=["components"];function o(){return o=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(n[a]=t[a])}return n},o.apply(this,arguments)}function l(n,e){if(null==n)return{};var t,a,r=function(n,e){if(null==n)return{};var t,a,r={},o=Object.keys(n);for(a=0;a<o.length;a++)t=o[a],e.indexOf(t)>=0||(r[t]=n[t]);return r}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(a=0;a<o.length;a++)t=o[a],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(r[t]=n[t])}return r}var s={},c="wrapper";function i(n){var e=n.components,t=l(n,r);return(0,a.mdx)(c,o({},s,t,{components:e,mdxType:"MDXLayout"}),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-js"},"const getGanttDefaultConfig = (id) => ({\n  bindTo: id,\n  axis: {\n    x: {\n      show: true,\n      lowerLimit: new Date(2018, 1, 1, 12).toISOString(),\n      upperLimit: new Date(2019, 1, 1, 12).toISOString(),\n      rangeRounding: true, // If set to false, we don't extend the domain\n    },\n  },\n});\n\nexport default getGanttDefaultConfig;\n\n\n")))}i.isMDXComponent=!0}}]);