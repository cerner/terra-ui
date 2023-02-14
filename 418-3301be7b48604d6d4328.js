"use strict";(self.webpackChunkterra_ui=self.webpackChunkterra_ui||[]).push([[418],{8537:function(t,n,e){var a=e(64836);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=e(22678),i=a(e(54520)),o=e(22678),l=[{key:"task10",onClick:r.loadTaskPopup,label:{display:"Story Apex"},startDate:new Date(2016,0,1,9).toISOString(),endDate:new Date(2016,0,1,12).toISOString()},{key:"task11",onClick:r.loadTaskPopup,label:{display:"Story Broccoli"},startDate:new Date(2016,0,1,15).toISOString(),endDate:new Date(2016,0,1,23).toISOString()}],s=[{key:"uid_action_1",onClick:o.loadPopup,values:[new Date(2016,0,1,6,15).toISOString()]},{key:"uid_action_2",onClick:o.loadPopup,values:[new Date(2016,0,1,7,15).toISOString()]}],c=[{key:"uid_event_4",label:{display:"Defect A"},onClick:o.loadPopup,shape:{path:[{id:"calendar",d:"M31 5V1.8c0-1-.8-1.8-1.8-1.8h-1.5c-1 0-1.8.8-1.8 1.8V5H11V1.8c0-1-.8-1.8-1.8-1.8H7.8C6.8 0 6 .8 6 1.8V5H2v33h19.1c-.1-.7-.1-1.3-.1-2v-1H5V17h27v4.6c1-.3 2-.4 3-.5V5h-4z"},{id:"circle",fill:"#78C346",d:"M36 24c6.6 0 12 5.4 12 12s-5.4 12-12 12-12-5.4-12-12 5.4-12 12-12z"},{id:"check",fill:"#FFF",d:"M34.1 42.4l-6.5-6.5 2.1-2.1 4.4 4.3 8.2-8.1 2.1 2.1-10.3 10.3z"}],options:{x:-7,y:-7,scale:.4}},color:i.default.helpers.COLORS.BLACK,values:[new Date(2016,0,1,5,15).toISOString()]}],p=[{key:"activity5",label:{display:"activity5"},onClick:function(){},color:"#FFDF00",startDate:new Date(2016,0,1,12).toISOString(),endDate:new Date(2016,0,1,15).toISOString(),style:{isDotted:!1,isHollow:!1}}],d={key:"track 0",trackLabel:{display:"Project A",onClick:r.loadXAndYAxisLabelPopup},tasks:l,actions:s,events:c,activities:p};n.default=d},42366:function(t,n,e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=e(22678),r={actions:[{key:"uid_action_1",values:[new Date(2016,0,1,7,15).toISOString(),new Date(2016,0,1,8,15).toISOString()]},{key:"uid_action_2",values:[new Date(2016,0,1,9,15).toISOString()]}],tasks:[{key:"task10",startDate:new Date(2016,0,1,0).toISOString(),endDate:new Date(2016,0,1,13).toISOString()},{key:"task11",startDate:new Date(2016,0,1,15).toISOString(),endDate:new Date(2016,0,1,20).toISOString()}],events:[{key:"uid_event_4",shape:{path:[{id:"calendar",d:"M31 5V1.8c0-1-.8-1.8-1.8-1.8h-1.5c-1 0-1.8.8-1.8 1.8V5H11V1.8c0-1-.8-1.8-1.8-1.8H7.8C6.8 0 6 .8 6 1.8V5H2v33h19.1c-.1-.7-.1-1.3-.1-2v-1H5V17h27v4.6c1-.3 2-.4 3-.5V5h-4z"},{id:"circle",fill:"#78C346",d:"M36 24c6.6 0 12 5.4 12 12s-5.4 12-12 12-12-5.4-12-12 5.4-12 12-12z"},{id:"check",fill:"#FFF",d:"M34.1 42.4l-6.5-6.5 2.1-2.1 4.4 4.3 8.2-8.1 2.1 2.1-10.3 10.3z"}],options:{x:-7,y:-7,scale:.4}},values:[new Date(2016,0,1,2,15).toISOString()]}]},i={key:"track 1",trackLabel:{display:"Project B",onClick:a.loadXAndYAxisLabelPopup},actions:r.actions,tasks:r.tasks,events:r.events,activities:r.activities};n.default=i},74232:function(t,n,e){var a=e(64836);n.Z=void 0;var r=a(e(27424)),i=a(e(67294)),o=a(e(54520)),l=a(e(55281)),s=a(e(53334));e(56867),e(77449);var c,p=a(e(93065)),d=a(e(92324)),u=a(e(8537)),f=a(e(42366)),m=s.default.deepClone((0,d.default)("#ganttPanningMultipleDatasets")),g=[s.default.deepClone(u.default),s.default.deepClone(f.default)],h={initial:0,factor:3},b=function(){i.default.useEffect((function(){c=o.default.api.gantt(m),g.forEach((function(t){c.loadContent(t)}))}),[]);var t=i.default.useReducer((function(t,n){var e;switch(n.type){case"panLeft":e=t.initial-t.factor;break;case"panRight":e=t.initial+t.factor;break;default:return t}return{initial:e,factor:t.factor}}),h),n=(0,r.default)(t,2),e=n[0],a=n[1];return i.default.useLayoutEffect((function(){c&&(c.config.axis.x.lowerLimit=new Date(2016,0,1,e.initial).toISOString(),c.config.axis.x.upperLimit=new Date(2016,0,2,e.initial).toISOString(),c.reflowMultipleDatasets())}),[e.initial]),i.default.createElement(i.default.Fragment,null,i.default.createElement(l.default,{className:"button-pan-left",text:"<",onClick:function(){return a({type:"panLeft"})}}),i.default.createElement(l.default,{className:"button-pan-right",text:">",onClick:function(){return a({type:"panRight"})}}),i.default.createElement(p.default,{id:"ganttPanningMultipleDatasets"}))};n.Z=b},418:function(t,n,e){e.r(n),e.d(n,{default:function(){return j}});var a=e(67294),r=e(81254),i=e(74232),o=["components"];function l(){return l=Object.assign?Object.assign.bind():function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a])}return t},l.apply(this,arguments)}function s(t,n){if(null==t)return{};var e,a,r=function(t,n){if(null==t)return{};var e,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)e=i[a],n.indexOf(e)>=0||(r[e]=t[e]);return r}(t,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)e=i[a],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(r[e]=t[e])}return r}var c={},p="wrapper";function d(t){var n=t.components,e=s(t,o);return(0,r.mdx)(p,l({},c,e,{components:n,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport Button from 'terra-button/lib/Button';\nimport utils from '@cerner/carbon-graphs/lib/js/helpers/utils';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Graph.module.scss';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Gantt/GanttChart.module.scss';\nimport ExampleGraphContainer from '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer';\nimport getGanttPanningConfig from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Gantt/ganttPanning';\nimport dataset1 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Gantt/panningMultipleDataset1';\nimport dataset2 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Gantt/panningMultipleDataset2';\n\n/*\nPlease refer to the documentation below to see the graphConfig and data objects\n*/\n\nconst graphConfig = utils.deepClone(getGanttPanningConfig('#ganttPanningMultipleDatasets'));\nconst dataset = [utils.deepClone(dataset1), utils.deepClone(dataset2)];\n\nlet graph;\n\nconst initialState = {\n  initial: 0,\n  factor: 3,\n};\n\nconst GanttPanningMultipleDatasetsExample = () => {\n  React.useEffect(() => {\n    graph = Carbon.api.gantt(graphConfig);\n    dataset.forEach((data) => {\n      graph.loadContent(data);\n    });\n  }, []);\n\n  const reducer = (panState, action) => {\n    let hour;\n\n    switch (action.type) {\n      case 'panLeft':\n        hour = panState.initial - panState.factor;\n        break;\n      case 'panRight':\n        hour = panState.initial + panState.factor;\n        break;\n      default:\n        return panState;\n    }\n\n    return {\n      initial: hour,\n      factor: panState.factor,\n    };\n  };\n\n  const [panState, dispatch] = React.useReducer(reducer, initialState);\n\n  React.useLayoutEffect(() => {\n    if (!graph) { return; }\n\n    graph.config.axis.x.lowerLimit = new Date(2016, 0, 1, panState.initial).toISOString();\n    graph.config.axis.x.upperLimit = new Date(2016, 0, 2, panState.initial).toISOString();\n\n    graph.reflowMultipleDatasets();\n  }, [panState.initial]);\n\n  return (\n    <>\n      <Button className=\"button-pan-left\" text=\"<\" onClick={() => dispatch({ type: 'panLeft' })} />\n      <Button className=\"button-pan-right\" text=\">\" onClick={() => dispatch({ type: 'panRight' })} />\n      <ExampleGraphContainer id=\"ganttPanningMultipleDatasets\" />\n    </>\n  );\n};\n\nexport default GanttPanningMultipleDatasetsExample;\n\n")))}d.isMDXComponent=!0;var u=e(49271),f=e(25005),m=function(t){var n=t.title,e=t.description,r=t.isExpanded;return a.createElement(u.Z,{title:n||"Multiple Datasets",description:e,example:a.createElement(i.Z,null),exampleCssSrc:a.createElement(f.Z,null),exampleSrc:a.createElement(d,null),isExpanded:r})},g=e(13005),h=["components"];function b(){return b=Object.assign?Object.assign.bind():function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a])}return t},b.apply(this,arguments)}function y(t,n){if(null==t)return{};var e,a,r=function(t,n){if(null==t)return{};var e,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)e=i[a],n.indexOf(e)>=0||(r[e]=t[e]);return r}(t,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)e=i[a],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(r[e]=t[e])}return r}var S={},x="wrapper";function D(t){var n=t.components,e=y(t,h);return(0,r.mdx)(x,b({},S,e,{components:n,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-js"},"import { loadTaskPopup, loadXAndYAxisLabelPopup } from '@cerner/terra-graphs-docs/lib/example-datasets/popup';\nimport Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport { loadPopup } from '../../popup';\n\nconst scheduled = {\n  path: [\n    {\n      id: 'calendar',\n      d:\n        'M31 5V1.8c0-1-.8-1.8-1.8-1.8h-1.5c-1 0-1.8.8-1.8 1.8V5H11V1.8c0-1-.8-1.8-1.8-1.8H7.8C6.8'\n        + ' 0 6 .8 6 1.8V5H2v33h19.1c-.1-.7-.1-1.3-.1-2v-1H5V17h27v4.6c1-.3 2-.4 3-.5V5h-4z',\n    },\n    {\n      id: 'circle',\n      fill: '#78C346',\n      d:\n        'M36 24c6.6 0 12 5.4 12 12s-5.4 12-12 12-12-5.4-12-12 5.4-12 12-12z',\n    },\n    {\n      id: 'check',\n      fill: '#FFF',\n      d: 'M34.1 42.4l-6.5-6.5 2.1-2.1 4.4 4.3 8.2-8.1 2.1 2.1-10.3 10.3z',\n    },\n  ],\n  options: {\n    x: -7,\n    y: -7,\n    scale: 0.4,\n  },\n};\n\nconst tasksData = [\n  {\n    key: 'task10',\n    onClick: loadTaskPopup,\n    label: {\n      display: 'Story Apex',\n    },\n    startDate: new Date(2016, 0, 1, 9).toISOString(),\n    endDate: new Date(2016, 0, 1, 12).toISOString(),\n  },\n  {\n    key: 'task11',\n    onClick: loadTaskPopup,\n    label: {\n      display: 'Story Broccoli',\n    },\n    startDate: new Date(2016, 0, 1, 15).toISOString(),\n    endDate: new Date(2016, 0, 1, 23).toISOString(),\n  },\n];\nconst actionsData = [\n  {\n    key: 'uid_action_1',\n    onClick: loadPopup,\n    values: [new Date(2016, 0, 1, 6, 15).toISOString()],\n  },\n  {\n    key: 'uid_action_2',\n    onClick: loadPopup,\n    values: [new Date(2016, 0, 1, 7, 15).toISOString()],\n  },\n];\n\nconst eventData = [\n  {\n    key: 'uid_event_4',\n    label: {\n      display: 'Defect A',\n    },\n    onClick: loadPopup,\n    shape: scheduled,\n    color: Carbon.helpers.COLORS.BLACK,\n    values: [new Date(2016, 0, 1, 5, 15).toISOString()],\n  },\n];\n\nconst activitiesData = [\n  {\n    key: 'activity5',\n    label: {\n      display: 'activity5',\n    },\n    onClick: () => {},\n    color: '#FFDF00',\n    startDate: new Date(2016, 0, 1, 12).toISOString(),\n    endDate: new Date(2016, 0, 1, 15).toISOString(),\n    style: {\n      isDotted: false,\n      isHollow: false,\n    },\n  },\n];\n\nconst panningData = {\n  key: 'track 0',\n  trackLabel: {\n    display: 'Project A',\n    onClick: loadXAndYAxisLabelPopup,\n  },\n  tasks: tasksData,\n  actions: actionsData,\n  events: eventData,\n  activities: activitiesData,\n};\n\nexport default panningData;\n\n")))}D.isMDXComponent=!0;var v=["components"];function k(){return k=Object.assign?Object.assign.bind():function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a])}return t},k.apply(this,arguments)}function O(t,n){if(null==t)return{};var e,a,r=function(t,n){if(null==t)return{};var e,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)e=i[a],n.indexOf(e)>=0||(r[e]=t[e]);return r}(t,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)e=i[a],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(r[e]=t[e])}return r}e(51320);var C={},w="wrapper";function j(t){var n=t.components,e=O(t,v);return(0,r.mdx)(w,k({},C,e,{components:n,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"simple-gantt-chart-panning---multiple-dataset"},"Simple Gantt chart panning - Multiple dataset"),(0,r.mdx)("p",null,"This is a simple Gantt chart example that implements panning with multiple datasets."),(0,r.mdx)("h2",{id:"getting-started"},"Getting Started"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Install with ",(0,r.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"npm i @cerner/carbon-graphs --save-dev"))))),(0,r.mdx)("h2",{id:"usage"},"Usage"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/dist/js/carbon-graphs.js';\nimport '@cerner/carbon-graphs/dist/css/carbon-graphs.css';\n")),(0,r.mdx)("h2",{id:"examples"},"Examples"),(0,r.mdx)(m,{mdxType:"GanttChart"}),(0,r.mdx)("details",null,(0,r.mdx)("summary",{style:{fontSize:24}},(0,r.mdx)("b",null,"Data")),(0,r.mdx)("h3",{id:"graph-config-object"},"Graph Config object"),(0,r.mdx)(g.Z,{mdxType:"GraphConfig"}),(0,r.mdx)("h3",{id:"data-object"},"Data object"),(0,r.mdx)("h4",{id:"dataset-1"},"Dataset 1"),(0,r.mdx)(D,{mdxType:"DataObject1"}),(0,r.mdx)("h4",{id:"dataset-2"},"Dataset 2"),(0,r.mdx)(D,{mdxType:"DataObject2"})))}j.isMDXComponent=!0}}]);