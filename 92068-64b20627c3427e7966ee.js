"use strict";(self.webpackChunkterra_ui=self.webpackChunkterra_ui||[]).push([[92068],{39360:function(n,t,e){var a=e(22411);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=e(30660),i=a(e(27320)),o=e(30660),c=[{key:"task10",onClick:r.loadTaskPopup,label:{display:"Story Apex"},startDate:new Date(2016,0,1,9).toISOString(),endDate:new Date(2016,0,1,12).toISOString()},{key:"task11",onClick:r.loadTaskPopup,label:{display:"Story Broccoli"},startDate:new Date(2016,0,1,15).toISOString(),endDate:new Date(2016,0,1,23).toISOString()}],l=[{key:"uid_action_1",onClick:o.loadPopup,values:[new Date(2016,0,1,6,15).toISOString()]},{key:"uid_action_2",onClick:o.loadPopup,values:[new Date(2016,0,1,7,15).toISOString()]}],s=[{key:"uid_event_4",label:{display:"Defect A"},onClick:o.loadPopup,shape:{path:[{id:"calendar",d:"M31 5V1.8c0-1-.8-1.8-1.8-1.8h-1.5c-1 0-1.8.8-1.8 1.8V5H11V1.8c0-1-.8-1.8-1.8-1.8H7.8C6.8 0 6 .8 6 1.8V5H2v33h19.1c-.1-.7-.1-1.3-.1-2v-1H5V17h27v4.6c1-.3 2-.4 3-.5V5h-4z"},{id:"circle",fill:"#78C346",d:"M36 24c6.6 0 12 5.4 12 12s-5.4 12-12 12-12-5.4-12-12 5.4-12 12-12z"},{id:"check",fill:"#FFF",d:"M34.1 42.4l-6.5-6.5 2.1-2.1 4.4 4.3 8.2-8.1 2.1 2.1-10.3 10.3z"}],options:{x:-7,y:-7,scale:.4}},color:i.default.helpers.COLORS.BLACK,values:[new Date(2016,0,1,5,15).toISOString()]}],p=[{key:"activity5",label:{display:"activity5"},onClick:function(){},color:"#FFDF00",startDate:new Date(2016,0,1,12).toISOString(),endDate:new Date(2016,0,1,15).toISOString(),style:{isDotted:!1,isHollow:!1}}],d={key:"track 0",trackLabel:{display:"Default",onClick:r.loadXAndYAxisLabelPopup},tasks:c,actions:l,events:s,activities:p};t.default=d},8716:function(n,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e={key:"track 0",actions:[{key:"uid_action_1",values:[new Date(2016,0,1,7,15).toISOString(),new Date(2016,0,1,8,15).toISOString()]},{key:"uid_action_2",values:[new Date(2016,0,1,9,15).toISOString()]}],tasks:[{key:"task10",startDate:new Date(2016,0,1,0).toISOString(),endDate:new Date(2016,0,1,13).toISOString()},{key:"task11",startDate:new Date(2016,0,1,15).toISOString(),endDate:new Date(2016,0,1,20).toISOString()}],events:[{key:"uid_event_4",shape:{path:[{id:"calendar",d:"M31 5V1.8c0-1-.8-1.8-1.8-1.8h-1.5c-1 0-1.8.8-1.8 1.8V5H11V1.8c0-1-.8-1.8-1.8-1.8H7.8C6.8 0 6 .8 6 1.8V5H2v33h19.1c-.1-.7-.1-1.3-.1-2v-1H5V17h27v4.6c1-.3 2-.4 3-.5V5h-4z"},{id:"circle",fill:"#78C346",d:"M36 24c6.6 0 12 5.4 12 12s-5.4 12-12 12-12-5.4-12-12 5.4-12 12-12z"},{id:"check",fill:"#FFF",d:"M34.1 42.4l-6.5-6.5 2.1-2.1 4.4 4.3 8.2-8.1 2.1 2.1-10.3 10.3z"}],options:{x:-7,y:-7,scale:.4}},values:[new Date(2016,0,1,2,15).toISOString()]}],activities:[{key:"activity5",startDate:new Date(2016,0,1,3).toISOString(),endDate:new Date(2016,0,1,6).toISOString()}]};t.default=e},33368:function(n,t,e){var a=e(22411);t.c=void 0;var r=a(e(97936)),i=a(e(11504)),o=a(e(27320)),c=a(e(58848)),l=a(e(82452));e(20512),e(92888);var s,p=a(e(2884)),d=a(e(84880)),u=a(e(39360)),m=a(e(8716)),f=l.default.deepClone((0,d.default)("#GanttPanningDynamicData")),g=[l.default.deepClone(u.default)],y={initial:0,factor:3};t.c=function(){i.default.useEffect((function(){s=o.default.api.gantt(f),g.forEach((function(n){s.loadContent(n)}))}),[]);var n=i.default.useReducer((function(n,t){var e;switch(t.type){case"panLeft":e=n.initial-n.factor;break;case"panRight":e=n.initial+n.factor;break;default:return n}return{initial:e,factor:n.factor}}),y),t=(0,r.default)(n,2),e=t[0],a=t[1];return i.default.useLayoutEffect((function(){if(s){s.config.axis.x.lowerLimit=new Date(2016,0,1,e.initial).toISOString(),s.config.axis.x.upperLimit=new Date(2016,0,2,e.initial).toISOString();var n={panData:[l.default.deepClone(l.default.deepClone(m.default))]};s.reflowMultipleDatasets(n)}}),[e.initial]),i.default.createElement(i.default.Fragment,null,i.default.createElement(c.default,{className:"button-pan-left",text:"<",onClick:function(){return a({type:"panLeft"})}}),i.default.createElement(c.default,{className:"button-pan-right",text:">",onClick:function(){return a({type:"panRight"})}}),i.default.createElement(p.default,{id:"GanttPanningDynamicData"}))}},92068:function(n,t,e){e.r(t),e.d(t,{default:function(){return G}});var a=e(11504),r=e(69788),i=e(33368),o=["components"];function c(){return c=Object.assign?Object.assign.bind():function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a])}return n},c.apply(this,arguments)}function l(n,t){if(null==n)return{};var e,a,r=function(n,t){if(null==n)return{};var e,a,r={},i=Object.keys(n);for(a=0;a<i.length;a++)e=i[a],t.indexOf(e)>=0||(r[e]=n[e]);return r}(n,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(a=0;a<i.length;a++)e=i[a],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(n,e)&&(r[e]=n[e])}return r}var s={};function p(n){var t=n.components,e=l(n,o);return(0,r.mdx)("wrapper",c({},s,e,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport Button from 'terra-button/lib/Button';\nimport utils from '@cerner/carbon-graphs/lib/js/helpers/utils';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Graph.module.scss';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Gantt/GanttChart.module.scss';\nimport ExampleGraphContainer from '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer';\nimport getGanttPanningConfig from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Gantt/ganttPanning';\nimport dynamicPanningDataset1 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Gantt/dynamicPanningDataset1';\nimport dynamicPanningDataset2 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Gantt/dynamicPanningDataset2';\n\n/*\nPlease refer to the documentation below to see the graphConfig and data objects\n*/\n\nconst graphConfig = utils.deepClone(getGanttPanningConfig('#GanttPanningDynamicData'));\nconst dataset = [utils.deepClone(dynamicPanningDataset1)];\n\nconst initialState = {\n  initial: 0,\n  factor: 3,\n};\n\nlet graph;\n\nconst GanttPanningDynamicDataExample = () => {\n  React.useEffect(() => {\n    graph = Carbon.api.gantt(graphConfig);\n    dataset.forEach((data) => {\n      graph.loadContent(data);\n    });\n  }, []);\n\n  const reducer = (panState, action) => {\n    let hour;\n\n    switch (action.type) {\n      case 'panLeft':\n        hour = panState.initial - panState.factor;\n        break;\n      case 'panRight':\n        hour = panState.initial + panState.factor;\n        break;\n      default:\n        return panState;\n    }\n\n    return {\n      initial: hour,\n      factor: panState.factor,\n    };\n  };\n\n  const [panState, dispatch] = React.useReducer(reducer, initialState);\n\n  React.useLayoutEffect(() => {\n    if (!graph) { return; }\n\n    graph.config.axis.x.lowerLimit = new Date(2016, 0, 1, panState.initial).toISOString();\n    graph.config.axis.x.upperLimit = new Date(2016, 0, 2, panState.initial).toISOString();\n\n    const newDataset = {\n      panData: [utils.deepClone(utils.deepClone(dynamicPanningDataset2))],\n    };\n\n    graph.reflowMultipleDatasets(newDataset);\n  }, [panState.initial]);\n\n  return (\n    <>\n      <Button className=\"button-pan-left\" text=\"<\" onClick={() => dispatch({ type: 'panLeft' })} />\n      <Button className=\"button-pan-right\" text=\">\" onClick={() => dispatch({ type: 'panRight' })} />\n      <ExampleGraphContainer id=\"GanttPanningDynamicData\" />\n    </>\n  );\n};\n\nexport default GanttPanningDynamicDataExample;\n\n")))}p.isMDXComponent=!0;var d=e(33792),u=e(1208),m=function(n){var t=n.title,e=n.description,r=n.isExpanded;return a.createElement(d.c,{title:t||"Dynamic Data",description:e,example:a.createElement(i.c,null),exampleCssSrc:a.createElement(u.c,null),exampleSrc:a.createElement(p,null),isExpanded:r})},f=e(3852),g=["components"];function y(){return y=Object.assign?Object.assign.bind():function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a])}return n},y.apply(this,arguments)}function D(n,t){if(null==n)return{};var e,a,r=function(n,t){if(null==n)return{};var e,a,r={},i=Object.keys(n);for(a=0;a<i.length;a++)e=i[a],t.indexOf(e)>=0||(r[e]=n[e]);return r}(n,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(a=0;a<i.length;a++)e=i[a],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(n,e)&&(r[e]=n[e])}return r}var h={},S="wrapper";function b(n){var t=n.components,e=D(n,g);return(0,r.mdx)(S,y({},h,e,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-js"},"import { loadTaskPopup, loadXAndYAxisLabelPopup } from '@cerner/terra-graphs-docs/lib/example-datasets/popup';\nimport Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport { loadPopup } from '../../popup';\n\nconst scheduled = {\n  path: [\n    {\n      id: 'calendar',\n      d:\n        'M31 5V1.8c0-1-.8-1.8-1.8-1.8h-1.5c-1 0-1.8.8-1.8 1.8V5H11V1.8c0-1-.8-1.8-1.8-1.8H7.8C6.8'\n        + ' 0 6 .8 6 1.8V5H2v33h19.1c-.1-.7-.1-1.3-.1-2v-1H5V17h27v4.6c1-.3 2-.4 3-.5V5h-4z',\n    },\n    {\n      id: 'circle',\n      fill: '#78C346',\n      d:\n        'M36 24c6.6 0 12 5.4 12 12s-5.4 12-12 12-12-5.4-12-12 5.4-12 12-12z',\n    },\n    {\n      id: 'check',\n      fill: '#FFF',\n      d: 'M34.1 42.4l-6.5-6.5 2.1-2.1 4.4 4.3 8.2-8.1 2.1 2.1-10.3 10.3z',\n    },\n  ],\n  options: {\n    x: -7,\n    y: -7,\n    scale: 0.4,\n  },\n};\n\nconst tasksData = [\n  {\n    key: 'task10',\n    onClick: loadTaskPopup,\n    label: {\n      display: 'Story Apex',\n    },\n    startDate: new Date(2016, 0, 1, 9).toISOString(),\n    endDate: new Date(2016, 0, 1, 12).toISOString(),\n  },\n  {\n    key: 'task11',\n    onClick: loadTaskPopup,\n    label: {\n      display: 'Story Broccoli',\n    },\n    startDate: new Date(2016, 0, 1, 15).toISOString(),\n    endDate: new Date(2016, 0, 1, 23).toISOString(),\n  },\n];\nconst actionsData = [\n  {\n    key: 'uid_action_1',\n    onClick: loadPopup,\n    values: [new Date(2016, 0, 1, 6, 15).toISOString()],\n  },\n  {\n    key: 'uid_action_2',\n    onClick: loadPopup,\n    values: [new Date(2016, 0, 1, 7, 15).toISOString()],\n  },\n];\n\nconst eventData = [\n  {\n    key: 'uid_event_4',\n    label: {\n      display: 'Defect A',\n    },\n    onClick: loadPopup,\n    shape: scheduled,\n    color: Carbon.helpers.COLORS.BLACK,\n    values: [new Date(2016, 0, 1, 5, 15).toISOString()],\n  },\n];\n\nconst activitiesData = [\n  {\n    key: 'activity5',\n    label: {\n      display: 'activity5',\n    },\n    onClick: () => {},\n    color: '#FFDF00',\n    startDate: new Date(2016, 0, 1, 12).toISOString(),\n    endDate: new Date(2016, 0, 1, 15).toISOString(),\n    style: {\n      isDotted: false,\n      isHollow: false,\n    },\n  },\n];\n\nconst dynamicPanningDataset1 = {\n  key: 'track 0',\n  trackLabel: {\n    display: 'Default',\n    onClick: loadXAndYAxisLabelPopup,\n  },\n  tasks: tasksData,\n  actions: actionsData,\n  events: eventData,\n  activities: activitiesData,\n};\nexport default dynamicPanningDataset1;\n\n")))}b.isMDXComponent=!0;var v=["components"];function O(){return O=Object.assign?Object.assign.bind():function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a])}return n},O.apply(this,arguments)}function x(n,t){if(null==n)return{};var e,a,r=function(n,t){if(null==n)return{};var e,a,r={},i=Object.keys(n);for(a=0;a<i.length;a++)e=i[a],t.indexOf(e)>=0||(r[e]=n[e]);return r}(n,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(a=0;a<i.length;a++)e=i[a],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(n,e)&&(r[e]=n[e])}return r}var k={},w="wrapper";function C(n){var t=n.components,e=x(n,v);return(0,r.mdx)(w,O({},k,e,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-js"},"const scheduled = {\n  path: [\n    {\n      id: 'calendar',\n      d:\n        'M31 5V1.8c0-1-.8-1.8-1.8-1.8h-1.5c-1 0-1.8.8-1.8 1.8V5H11V1.8c0-1-.8-1.8-1.8-1.8H7.8C6.8'\n        + ' 0 6 .8 6 1.8V5H2v33h19.1c-.1-.7-.1-1.3-.1-2v-1H5V17h27v4.6c1-.3 2-.4 3-.5V5h-4z',\n    },\n    {\n      id: 'circle',\n      fill: '#78C346',\n      d:\n        'M36 24c6.6 0 12 5.4 12 12s-5.4 12-12 12-12-5.4-12-12 5.4-12 12-12z',\n    },\n    {\n      id: 'check',\n      fill: '#FFF',\n      d: 'M34.1 42.4l-6.5-6.5 2.1-2.1 4.4 4.3 8.2-8.1 2.1 2.1-10.3 10.3z',\n    },\n  ],\n  options: {\n    x: -7,\n    y: -7,\n    scale: 0.4,\n  },\n};\n\nconst dynamicDataActions = [\n  {\n    key: 'uid_action_1',\n    values: [\n      new Date(2016, 0, 1, 7, 15).toISOString(),\n      new Date(2016, 0, 1, 8, 15).toISOString(),\n    ],\n  },\n  {\n    key: 'uid_action_2',\n    values: [new Date(2016, 0, 1, 9, 15).toISOString()],\n  },\n];\n\nconst dynamicDataTasks = [\n  {\n    key: 'task10',\n    startDate: new Date(2016, 0, 1, 0).toISOString(),\n    endDate: new Date(2016, 0, 1, 13).toISOString(),\n  },\n  {\n    key: 'task11',\n    startDate: new Date(2016, 0, 1, 15).toISOString(),\n    endDate: new Date(2016, 0, 1, 20).toISOString(),\n  },\n];\n\nconst dynamicDataEvents = [\n  {\n    key: 'uid_event_4',\n    shape: scheduled,\n    values: [new Date(2016, 0, 1, 2, 15).toISOString()],\n  },\n];\n\nconst dynamicDataActivities = [\n  {\n    key: 'activity5',\n    startDate: new Date(2016, 0, 1, 3).toISOString(),\n    endDate: new Date(2016, 0, 1, 6).toISOString(),\n  },\n];\n\nconst dynamicPanningDataset2 = {\n  key: 'track 0',\n  actions: dynamicDataActions,\n  tasks: dynamicDataTasks,\n  events: dynamicDataEvents,\n  activities: dynamicDataActivities,\n};\n\nexport default dynamicPanningDataset2;\n\n")))}C.isMDXComponent=!0;var j=["components"];function I(){return I=Object.assign?Object.assign.bind():function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a])}return n},I.apply(this,arguments)}function P(n,t){if(null==n)return{};var e,a,r=function(n,t){if(null==n)return{};var e,a,r={},i=Object.keys(n);for(a=0;a<i.length;a++)e=i[a],t.indexOf(e)>=0||(r[e]=n[e]);return r}(n,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(a=0;a<i.length;a++)e=i[a],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(n,e)&&(r[e]=n[e])}return r}e(78704);var _={},E="wrapper";function G(n){var t=n.components,e=P(n,j);return(0,r.mdx)(E,I({},_,e,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"gantt-chart-panning---dynamic-data"},"Gantt chart panning - dynamic data"),(0,r.mdx)("p",null,"This is a Gantt chart example that implements panning with dynamic data."),(0,r.mdx)("h2",{id:"getting-started"},"Getting Started"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Install with ",(0,r.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"npm i @cerner/carbon-graphs --save-dev"))))),(0,r.mdx)("h2",{id:"usage"},"Usage"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/dist/js/carbon-graphs.js';\nimport '@cerner/carbon-graphs/dist/css/carbon-graphs.css';\n")),(0,r.mdx)("h2",{id:"examples"},"Examples"),(0,r.mdx)(m,{mdxType:"GanttChart"}),(0,r.mdx)("details",null,(0,r.mdx)("summary",{style:{fontSize:24}},(0,r.mdx)("b",null,"Data")),(0,r.mdx)("h3",{id:"graph-config-object"},"Graph Config object"),(0,r.mdx)(f.c,{mdxType:"GraphConfig"}),(0,r.mdx)("h3",{id:"data-object"},"Data object"),(0,r.mdx)("h4",{id:"initial-dataset"},"Initial Dataset"),(0,r.mdx)(b,{mdxType:"InitialDataObject"}),(0,r.mdx)("h4",{id:"dynamic-dataset"},"Dynamic Dataset"),(0,r.mdx)(C,{mdxType:"DynamicDataObject"})))}G.isMDXComponent=!0}}]);