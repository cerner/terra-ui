"use strict";(self.webpackChunkterra_ui=self.webpackChunkterra_ui||[]).push([[10706],{28597:function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=[{key:"activity1",label:{display:"activity1"},onClick:function(){},color:"#FFDF00",startDate:new Date(2018,1,1).toISOString(),endDate:new Date(2018,4,10).toISOString(),style:{isDotted:!1,isHollow:!1}}];e.default=n},95043:function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=[{key:"activity2-hashed",label:{display:"Story Apex Hashed Activity"},color:"#000",startDate:new Date(2018,0,1).toISOString(),endDate:new Date(2018,3,1).toISOString(),style:{isDotted:!1,isHollow:!1,isHashed:!0}},{key:"activity3",color:"#ff0000",label:{display:"Story Apex Activity"},startDate:new Date(2018,3,1).toISOString(),endDate:new Date(2018,9,10).toISOString(),style:{isDotted:!1,isHollow:!1}}];e.default=n},50679:function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n(88703),r=n(22678),o=[{key:"activity4",color:a.COLORS.LIGHT_BLUE,onMouseEnter:r.loadTaskPopup,onMouseMove:r.loadTaskPopup,label:{display:"Story Charming Activity"},startDate:new Date(2016,0,1,10,30).toISOString(),endDate:new Date(2016,0,1,12,30).toISOString(),style:{isDotted:!1,isHollow:!1}}];e.default=o},45469:function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=[{key:"activity5",label:{display:"activity5"},onClick:function(){},color:"#FFDF00",startDate:new Date(2016,0,1,12).toISOString(),endDate:new Date(2016,0,1,15).toISOString(),style:{isDotted:!1,isHollow:!1}}];e.default=n},86739:function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n(22678),r=[{key:"task1",onClick:a.loadTaskPopup,label:{display:"Story Apex"},startDate:new Date(2018,2,1).toISOString(),endDate:new Date(2018,3,10).toISOString()},{key:"task2",onClick:a.loadTaskPopup,label:{display:"Story Broccoli"},startDate:new Date(2018,8,1).toISOString(),endDate:new Date(2018,9,10).toISOString()}];e.default=r},43015:function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=[{key:"task3",onClick:n(22678).loadTaskPopup,label:{display:"Story Apex"},startDate:new Date(2018,3,1).toISOString(),endDate:new Date(2018,7,10).toISOString()}];e.default=a},4216:function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n(22678),r=[{key:"task4",onClick:a.loadTaskPopup,label:{display:"Story Charming"},startDate:new Date(2018,6,1).toISOString(),endDate:new Date(2018,7,10).toISOString()},{key:"task5",onClick:a.loadTaskPopup,label:{display:"Story Broccoli"},startDate:new Date(2018,10,1).toISOString(),endDate:new Date(2018,10,1).toISOString()}];e.default=r},42765:function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=[{key:"task6",onClick:n(22678).loadTaskPopup,label:{display:"Story Apex"},startDate:new Date(2018,6,1).toISOString(),endDate:new Date(2018,9,10).toISOString()}];e.default=a},58234:function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;e.default=function(t){return{bindTo:t,axis:{x:{show:!0,lowerLimit:new Date(2018,1,1,12).toISOString(),upperLimit:new Date(2019,1,1,12).toISOString(),rangeRounding:!0}}}}},54574:function(t,e,n){var a=n(64836);e.Z=void 0;var r=a(n(67294)),o=a(n(54520)),s=a(n(53334));n(56867),n(77449);var i=a(n(93065)),l=a(n(58234)),p=a(n(42777)),c=a(n(86739)),d=a(n(43015)),u=a(n(4216)),f=a(n(42765)),m=a(n(28597)),y=a(n(95043)),g=a(n(50679)),O=a(n(45469)),b=s.default.deepClone((0,l.default)("#ganttTasksAndActivities")),v=[s.default.deepClone(c.default),s.default.deepClone(d.default),s.default.deepClone(u.default),s.default.deepClone(f.default)],D=[s.default.deepClone(m.default),s.default.deepClone(y.default),s.default.deepClone(g.default),s.default.deepClone(O.default)],x=(0,p.default)(v,D,[],[],4);e.Z=function(){return r.default.useEffect((function(){var t=o.default.api.gantt(b);x.forEach((function(e){t.loadContent(e)}))}),[]),r.default.createElement(i.default,{id:"ganttTasksAndActivities"})}},10706:function(t,e,n){n.r(e),n.d(e,{default:function(){return U}});var a=n(67294),r=n(81254),o=n(54574),s=["components"];function i(){return i=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},i.apply(this,arguments)}function l(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p={};function c(t){var e=t.components,n=l(t,s);return(0,r.mdx)("wrapper",i({},p,n,{components:e,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport utils from '@cerner/carbon-graphs/lib/js/helpers/utils';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Graph.module.scss';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Gantt/GanttChart.module.scss';\nimport ExampleGraphContainer from '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer';\nimport getGanttDefaultConfig from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Gantt/ganttDefaultConfig';\nimport loadTracks from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Gantt/loadTracks';\nimport taskDataset1 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Gantt/taskDataset1';\nimport taskDataset2 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Gantt/taskDataset2';\nimport taskDataset3 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Gantt/taskDataset3';\nimport taskDataset4 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Gantt/taskDataset4';\nimport activityDataset1 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Gantt/activityDataset1';\nimport activityDataset2 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Gantt/activityDataset2';\nimport activityDataset3 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Gantt/activityDataset3';\nimport activityDataset4 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Gantt/activityDataset4';\n\n/*\nPlease refer to the documentation below to see the graphConfig and data objects\n*/\n\nconst graphConfig = utils.deepClone(getGanttDefaultConfig('#ganttTasksAndActivities'));\nconst tasksData = [utils.deepClone(taskDataset1), utils.deepClone(taskDataset2), utils.deepClone(taskDataset3), utils.deepClone(taskDataset4)];\nconst activitiesData = [utils.deepClone(activityDataset1), utils.deepClone(activityDataset2), utils.deepClone(activityDataset3), utils.deepClone(activityDataset4)];\nconst dataset = loadTracks(tasksData, activitiesData, [], [], 4);\n\nconst GanttTasksAndActivitiesExample = () => {\n  React.useEffect(() => {\n    const graph = Carbon.api.gantt(graphConfig);\n    dataset.forEach((data) => {\n      graph.loadContent(data);\n    });\n  }, []);\n\n  return (\n    <ExampleGraphContainer id=\"ganttTasksAndActivities\" />\n  );\n};\n\nexport default GanttTasksAndActivitiesExample;\n\n")))}c.isMDXComponent=!0;var d=n(49271),u=n(25005),f=function(t){var e=t.title,n=t.description,r=t.isExpanded;return a.createElement(d.Z,{title:e||"Tasks And Activities",description:n,example:a.createElement(o.Z,null),exampleCssSrc:a.createElement(u.Z,null),exampleSrc:a.createElement(c,null),isExpanded:r})},m=n(75831),y=n(65092),g=n(47530),O=n(29890),b=n(67517),v=n(42026),D=["components"];function x(){return x=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},x.apply(this,arguments)}function S(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var h={},k="wrapper";function j(t){var e=t.components,n=S(t,D);return(0,r.mdx)(k,x({},h,n,{components:e,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-js"},"const activityDataset2 = [\n  {\n    key: 'activity2-hashed',\n    label: {\n      display: 'Story Apex Hashed Activity',\n    },\n    color: '#000',\n    startDate: new Date(2018, 0, 1).toISOString(),\n    endDate: new Date(2018, 3, 1).toISOString(),\n    style: {\n      isDotted: false,\n      isHollow: false,\n      isHashed: true,\n    },\n  },\n  {\n    key: 'activity3',\n    color: '#ff0000',\n    label: {\n      display: 'Story Apex Activity',\n    },\n    startDate: new Date(2018, 3, 1).toISOString(),\n    endDate: new Date(2018, 9, 10).toISOString(),\n    style: {\n      isDotted: false,\n      isHollow: false,\n    },\n  },\n];\n\nexport default activityDataset2;\n\n")))}j.isMDXComponent=!0;var w=["components"];function C(){return C=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},C.apply(this,arguments)}function T(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var P={},I="wrapper";function A(t){var e=t.components,n=T(t,w);return(0,r.mdx)(I,C({},P,n,{components:e,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-js"},"import { COLORS } from '@cerner/carbon-graphs/lib/js/helpers/constants';\nimport { loadTaskPopup } from '@cerner/terra-graphs-docs/lib/example-datasets/popup';\n\nconst activityDataset3 = [\n  {\n    key: 'activity4',\n    color: COLORS.LIGHT_BLUE,\n    onMouseEnter: loadTaskPopup,\n    onMouseMove: loadTaskPopup,\n    label: {\n      display: 'Story Charming Activity',\n    },\n    startDate: new Date(2016, 0, 1, 10, 30).toISOString(),\n    endDate: new Date(2016, 0, 1, 12, 30).toISOString(),\n    style: {\n      isDotted: false,\n      isHollow: false,\n    },\n  },\n];\n\nexport default activityDataset3;\n\n")))}A.isMDXComponent=!0;var M=["components"];function E(){return E=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},E.apply(this,arguments)}function G(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var N={},L="wrapper";function X(t){var e=t.components,n=G(t,M);return(0,r.mdx)(L,E({},N,n,{components:e,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-js"},"const activityDataset4 = [\n  {\n    key: 'activity5',\n    label: {\n      display: 'activity5',\n    },\n    onClick: () => {},\n    color: '#FFDF00',\n    startDate: new Date(2016, 0, 1, 12).toISOString(),\n    endDate: new Date(2016, 0, 1, 15).toISOString(),\n    style: {\n      isDotted: false,\n      isHollow: false,\n    },\n  },\n];\n\nexport default activityDataset4;\n\n")))}X.isMDXComponent=!0;var _=n(12437),Z=["components"];function H(){return H=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},H.apply(this,arguments)}function F(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}n(51320);var R={},B="wrapper";function U(t){var e=t.components,n=F(t,Z);return(0,r.mdx)(B,H({},R,n,{components:e,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"simple-gantt"},"Simple Gantt"),(0,r.mdx)("p",null,"This is a simple Gantt chart with tasks and Activities."),(0,r.mdx)("h2",{id:"getting-started"},"Getting Started"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Install with ",(0,r.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"npm i @cerner/carbon-graphs --save-dev"))))),(0,r.mdx)("h2",{id:"usage"},"Usage"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/dist/js/carbon-graphs.js';\nimport '@cerner/carbon-graphs/dist/css/carbon-graphs.css';\n")),(0,r.mdx)("h2",{id:"examples"},"Examples"),(0,r.mdx)(f,{mdxType:"GanttChart"}),(0,r.mdx)("details",null,(0,r.mdx)("summary",{style:{fontSize:24}},(0,r.mdx)("b",null,"Data")),(0,r.mdx)("h3",{id:"graph-config-object"},"Graph Config object"),(0,r.mdx)(m.Z,{mdxType:"GraphConfig"}),(0,r.mdx)("h4",{id:"task-dataset-1"},"Task Dataset 1"),(0,r.mdx)(y.Z,{mdxType:"TaskDataObject1"}),(0,r.mdx)("h4",{id:"task-dataset-2"},"Task Dataset 2"),(0,r.mdx)(g.Z,{mdxType:"TaskDataObject2"}),(0,r.mdx)("h4",{id:"task-dataset-3"},"Task Dataset 3"),(0,r.mdx)(O.Z,{mdxType:"TaskDataObject3"}),(0,r.mdx)("h4",{id:"task-dataset-4"},"Task Dataset 4"),(0,r.mdx)(b.Z,{mdxType:"TaskDataObject4"}),(0,r.mdx)("h4",{id:"activity-dataset-1"},"Activity Dataset 1"),(0,r.mdx)(v.Z,{mdxType:"ActivityDataObject1"}),(0,r.mdx)("h4",{id:"activity-dataset-2"},"Activity Dataset 2"),(0,r.mdx)(j,{mdxType:"ActivityDataObject2"}),(0,r.mdx)("h4",{id:"activity-dataset-3"},"Activity Dataset 3"),(0,r.mdx)(A,{mdxType:"ActivityDataObject3"}),(0,r.mdx)("h4",{id:"activity-dataset-4"},"Activity Dataset 4"),(0,r.mdx)(X,{mdxType:"ActivityDataObject4"}),(0,r.mdx)("h3",{id:"load-track"},"Load Track"),(0,r.mdx)(_.Z,{mdxType:"LoadTracks"})))}U.isMDXComponent=!0},42026:function(t,e,n){n.d(e,{Z:function(){return p}});n(67294);var a=n(81254),r=["components"];function o(){return o=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},o.apply(this,arguments)}function s(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var i={},l="wrapper";function p(t){var e=t.components,n=s(t,r);return(0,a.mdx)(l,o({},i,n,{components:e,mdxType:"MDXLayout"}),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-js"},"const activityDataset1 = [\n  {\n    key: 'activity1',\n    label: {\n      display: 'activity1',\n    },\n    onClick: () => {},\n    color: '#FFDF00',\n    startDate: new Date(2018, 1, 1).toISOString(),\n    endDate: new Date(2018, 4, 10).toISOString(),\n    style: {\n      isDotted: false,\n      isHollow: false,\n    },\n  },\n];\n\nexport default activityDataset1;\n\n")))}p.isMDXComponent=!0},65092:function(t,e,n){n.d(e,{Z:function(){return p}});n(67294);var a=n(81254),r=["components"];function o(){return o=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},o.apply(this,arguments)}function s(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var i={},l="wrapper";function p(t){var e=t.components,n=s(t,r);return(0,a.mdx)(l,o({},i,n,{components:e,mdxType:"MDXLayout"}),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-js"},"import { loadTaskPopup } from '@cerner/terra-graphs-docs/lib/example-datasets/popup';\n\nconst taskDataset1 = [\n  {\n    key: 'task1',\n    onClick: loadTaskPopup,\n    label: {\n      display: 'Story Apex',\n    },\n    startDate: new Date(2018, 2, 1).toISOString(),\n    endDate: new Date(2018, 3, 10).toISOString(),\n  },\n  {\n    key: 'task2',\n    onClick: loadTaskPopup,\n    label: {\n      display: 'Story Broccoli',\n    },\n    startDate: new Date(2018, 8, 1).toISOString(),\n    endDate: new Date(2018, 9, 10).toISOString(),\n  },\n];\n\nexport default taskDataset1;\n\n")))}p.isMDXComponent=!0},47530:function(t,e,n){n.d(e,{Z:function(){return p}});n(67294);var a=n(81254),r=["components"];function o(){return o=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},o.apply(this,arguments)}function s(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var i={},l="wrapper";function p(t){var e=t.components,n=s(t,r);return(0,a.mdx)(l,o({},i,n,{components:e,mdxType:"MDXLayout"}),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-js"},"import { loadTaskPopup } from '@cerner/terra-graphs-docs/lib/example-datasets/popup';\n\nconst taskDataset2 = [\n  {\n    key: 'task3',\n    onClick: loadTaskPopup,\n    label: {\n      display: 'Story Apex',\n    },\n    startDate: new Date(2018, 3, 1).toISOString(),\n    endDate: new Date(2018, 7, 10).toISOString(),\n  },\n];\n\nexport default taskDataset2;\n\n")))}p.isMDXComponent=!0},29890:function(t,e,n){n.d(e,{Z:function(){return p}});n(67294);var a=n(81254),r=["components"];function o(){return o=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},o.apply(this,arguments)}function s(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var i={},l="wrapper";function p(t){var e=t.components,n=s(t,r);return(0,a.mdx)(l,o({},i,n,{components:e,mdxType:"MDXLayout"}),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-js"},"import { loadTaskPopup } from '@cerner/terra-graphs-docs/lib/example-datasets/popup';\n\nconst taskDataset3 = [\n  {\n    key: 'task4',\n    onClick: loadTaskPopup,\n    label: {\n      display: 'Story Charming',\n    },\n    startDate: new Date(2018, 6, 1).toISOString(),\n    endDate: new Date(2018, 7, 10).toISOString(),\n  },\n  {\n    key: 'task5',\n    onClick: loadTaskPopup,\n    label: {\n      display: 'Story Broccoli',\n    },\n    startDate: new Date(2018, 10, 1).toISOString(),\n    endDate: new Date(2018, 10, 1).toISOString(),\n  },\n];\n\nexport default taskDataset3;\n\n")))}p.isMDXComponent=!0},67517:function(t,e,n){n.d(e,{Z:function(){return p}});n(67294);var a=n(81254),r=["components"];function o(){return o=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},o.apply(this,arguments)}function s(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var i={},l="wrapper";function p(t){var e=t.components,n=s(t,r);return(0,a.mdx)(l,o({},i,n,{components:e,mdxType:"MDXLayout"}),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-js"},"import { loadTaskPopup } from '@cerner/terra-graphs-docs/lib/example-datasets/popup';\n\nconst taskDataset4 = [\n  {\n    key: 'task6',\n    onClick: loadTaskPopup,\n    label: {\n      display: 'Story Apex',\n    },\n    startDate: new Date(2018, 6, 1).toISOString(),\n    endDate: new Date(2018, 9, 10).toISOString(),\n  },\n];\n\nexport default taskDataset4;\n\n")))}p.isMDXComponent=!0},75831:function(t,e,n){n.d(e,{Z:function(){return p}});n(67294);var a=n(81254),r=["components"];function o(){return o=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},o.apply(this,arguments)}function s(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var i={},l="wrapper";function p(t){var e=t.components,n=s(t,r);return(0,a.mdx)(l,o({},i,n,{components:e,mdxType:"MDXLayout"}),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-js"},"const getGanttDefaultConfig = (id) => ({\n  bindTo: id,\n  axis: {\n    x: {\n      show: true,\n      lowerLimit: new Date(2018, 1, 1, 12).toISOString(),\n      upperLimit: new Date(2019, 1, 1, 12).toISOString(),\n      rangeRounding: true, // If set to false, we don't extend the domain\n    },\n  },\n});\n\nexport default getGanttDefaultConfig;\n\n\n")))}p.isMDXComponent=!0}}]);