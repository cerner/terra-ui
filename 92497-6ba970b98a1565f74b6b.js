"use strict";(self.webpackChunkterra_ui=self.webpackChunkterra_ui||[]).push([[92497],{39806:function(n,t,e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=e(22678),r=e(22678),o=[{key:"task1",onClick:a.loadTaskPopup,label:{display:"Story Apex"},startDate:new Date(2016,0,1,8).toISOString(),endDate:new Date(2016,0,1,12).toISOString()},{key:"task2",onClick:a.loadTaskPopup,label:{display:"Story Broccoli"},startDate:new Date(2016,0,1,15).toISOString(),endDate:new Date(2016,0,1,23).toISOString()}],i=[{key:"uid_action_1",onClick:r.loadPopup,values:[new Date(2016,0,1,6,15).toISOString()]},{key:"uid_action_2",onClick:r.loadPopup,values:[new Date(2016,0,1,7,15).toISOString()]}],l={key:"track 0",trackLabel:{display:"Default",onClick:a.loadXAndYAxisLabelPopup},tasks:o,actions:i};t.default=l},45238:function(n,t,e){var a=e(64836);t.Z=void 0;var r=a(e(27424)),o=a(e(67294)),i=a(e(54520)),l=a(e(55281)),p=a(e(53334));e(56867),e(77449);var s,c=a(e(93065)),u=a(e(92324)),d=a(e(39806)),m=p.default.deepClone((0,u.default)("#simpleGanttPanning")),f=[p.default.deepClone(d.default)],g={initial:0,factor:3},h=function(){o.default.useEffect((function(){s=i.default.api.gantt(m),f.forEach((function(n){s.loadContent(n)}))}),[]);var n=o.default.useReducer((function(n,t){var e;switch(t.type){case"panLeft":e=n.initial-n.factor;break;case"panRight":e=n.initial+n.factor;break;default:return n}return{initial:e,factor:n.factor}}),g),t=(0,r.default)(n,2),e=t[0],a=t[1];return o.default.useLayoutEffect((function(){s&&(s.config.axis.x.lowerLimit=new Date(2016,0,1,e.initial).toISOString(),s.config.axis.x.upperLimit=new Date(2016,0,2,e.initial).toISOString(),s.reflowMultipleDatasets())}),[e.initial]),o.default.createElement(o.default.Fragment,null,o.default.createElement(l.default,{className:"button-pan-left",text:"<",onClick:function(){return a({type:"panLeft"})}}),o.default.createElement(l.default,{className:"button-pan-right",text:">",onClick:function(){return a({type:"panRight"})}}),o.default.createElement(c.default,{id:"simpleGanttPanning"}))};t.Z=h},92497:function(n,t,e){e.r(t),e.d(t,{default:function(){return k}});var a=e(67294),r=e(81254),o=e(45238),i=["components"];function l(){return l=Object.assign?Object.assign.bind():function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a])}return n},l.apply(this,arguments)}function p(n,t){if(null==n)return{};var e,a,r=function(n,t){if(null==n)return{};var e,a,r={},o=Object.keys(n);for(a=0;a<o.length;a++)e=o[a],t.indexOf(e)>=0||(r[e]=n[e]);return r}(n,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(a=0;a<o.length;a++)e=o[a],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(n,e)&&(r[e]=n[e])}return r}var s={},c="wrapper";function u(n){var t=n.components,e=p(n,i);return(0,r.mdx)(c,l({},s,e,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport Button from 'terra-button/lib/Button';\nimport utils from '@cerner/carbon-graphs/lib/js/helpers/utils';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Graph.module.scss';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Gantt/GanttChart.module.scss';\nimport ExampleGraphContainer from '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer';\nimport getGanttPanningConfig from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Gantt/ganttPanning';\nimport graphData from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Gantt/simplePanningData';\n\n/*\nPlease refer to the documentation below to see the graphConfig and data objects\n*/\n\nconst graphConfig = utils.deepClone(getGanttPanningConfig('#simpleGanttPanning'));\nconst dataset = [utils.deepClone(graphData)];\n\nlet graph;\n\nconst initialState = {\n  initial: 0,\n  factor: 3,\n};\n\nconst SimpleGanttPanningExample = () => {\n  React.useEffect(() => {\n    graph = Carbon.api.gantt(graphConfig);\n    dataset.forEach((data) => {\n      graph.loadContent(data);\n    });\n  }, []);\n\n  const reducer = (panState, action) => {\n    let hour;\n\n    switch (action.type) {\n      case 'panLeft':\n        hour = panState.initial - panState.factor;\n        break;\n      case 'panRight':\n        hour = panState.initial + panState.factor;\n        break;\n      default:\n        return panState;\n    }\n\n    return {\n      initial: hour,\n      factor: panState.factor,\n    };\n  };\n\n  const [panState, dispatch] = React.useReducer(reducer, initialState);\n\n  React.useLayoutEffect(() => {\n    if (!graph) { return; }\n\n    graph.config.axis.x.lowerLimit = new Date(2016, 0, 1, panState.initial).toISOString();\n    graph.config.axis.x.upperLimit = new Date(2016, 0, 2, panState.initial).toISOString();\n\n    graph.reflowMultipleDatasets();\n  }, [panState.initial]);\n\n  return (\n    <>\n      <Button className=\"button-pan-left\" text=\"<\" onClick={() => dispatch({ type: 'panLeft' })} />\n      <Button className=\"button-pan-right\" text=\">\" onClick={() => dispatch({ type: 'panRight' })} />\n      <ExampleGraphContainer id=\"simpleGanttPanning\" />\n    </>\n  );\n};\n\nexport default SimpleGanttPanningExample;\n\n")))}u.isMDXComponent=!0;var d=e(49271),m=e(25005),f=function(n){var t=n.title,e=n.description,r=n.isExpanded;return a.createElement(d.Z,{title:t||"Simple Panning",description:e,example:a.createElement(o.Z,null),exampleCssSrc:a.createElement(m.Z,null),exampleSrc:a.createElement(u,null),isExpanded:r})},g=e(13005),h=e(50888),b=["components"];function x(){return x=Object.assign?Object.assign.bind():function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a])}return n},x.apply(this,arguments)}function y(n,t){if(null==n)return{};var e,a,r=function(n,t){if(null==n)return{};var e,a,r={},o=Object.keys(n);for(a=0;a<o.length;a++)e=o[a],t.indexOf(e)>=0||(r[e]=n[e]);return r}(n,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(a=0;a<o.length;a++)e=o[a],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(n,e)&&(r[e]=n[e])}return r}e(51320);var S={},O="wrapper";function k(n){var t=n.components,e=y(n,b);return(0,r.mdx)(O,x({},S,e,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"simple-gantt-chart-panning"},"Simple Gantt chart panning"),(0,r.mdx)("p",null,"This is a simple Gantt chart example that implements panning."),(0,r.mdx)("h2",{id:"getting-started"},"Getting Started"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Install with ",(0,r.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"npm i @cerner/carbon-graphs --save-dev"))))),(0,r.mdx)("h2",{id:"usage"},"Usage"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/dist/js/carbon-graphs.js';\nimport '@cerner/carbon-graphs/dist/css/carbon-graphs.css';\n")),(0,r.mdx)("h2",{id:"examples"},"Examples"),(0,r.mdx)(f,{mdxType:"GanttChart"}),(0,r.mdx)("details",null,(0,r.mdx)("summary",{style:{fontSize:24}},(0,r.mdx)("b",null,"Data")),(0,r.mdx)("h3",{id:"graph-config-object"},"Graph Config object"),(0,r.mdx)(g.Z,{mdxType:"GraphConfig"}),(0,r.mdx)("h3",{id:"data-object"},"Data object"),(0,r.mdx)(h.Z,{mdxType:"DataObject"})))}k.isMDXComponent=!0},50888:function(n,t,e){e.d(t,{Z:function(){return s}});e(67294);var a=e(81254),r=["components"];function o(){return o=Object.assign?Object.assign.bind():function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a])}return n},o.apply(this,arguments)}function i(n,t){if(null==n)return{};var e,a,r=function(n,t){if(null==n)return{};var e,a,r={},o=Object.keys(n);for(a=0;a<o.length;a++)e=o[a],t.indexOf(e)>=0||(r[e]=n[e]);return r}(n,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(a=0;a<o.length;a++)e=o[a],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(n,e)&&(r[e]=n[e])}return r}var l={},p="wrapper";function s(n){var t=n.components,e=i(n,r);return(0,a.mdx)(p,o({},l,e,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-js"},"import { loadTaskPopup, loadXAndYAxisLabelPopup } from '@cerner/terra-graphs-docs/lib/example-datasets/popup';\nimport { loadPopup } from '../../popup';\n\nconst tasksData = [\n  {\n    key: 'task1',\n    onClick: loadTaskPopup,\n    label: {\n      display: 'Story Apex',\n    },\n    startDate: new Date(2016, 0, 1, 8).toISOString(),\n    endDate: new Date(2016, 0, 1, 12).toISOString(),\n  },\n  {\n    key: 'task2',\n    onClick: loadTaskPopup,\n    label: {\n      display: 'Story Broccoli',\n    },\n    startDate: new Date(2016, 0, 1, 15).toISOString(),\n    endDate: new Date(2016, 0, 1, 23).toISOString(),\n  },\n];\n\nconst actionsData = [\n  {\n    key: 'uid_action_1',\n    onClick: loadPopup,\n    values: [new Date(2016, 0, 1, 6, 15).toISOString()],\n  },\n  {\n    key: 'uid_action_2',\n    onClick: loadPopup,\n    values: [new Date(2016, 0, 1, 7, 15).toISOString()],\n  },\n];\n\nconst simplePanningData = {\n  key: 'track 0',\n  trackLabel: {\n    display: 'Default',\n    onClick: loadXAndYAxisLabelPopup,\n  },\n  tasks: tasksData,\n  actions: actionsData,\n};\n\nexport default simplePanningData;\n\n")))}s.isMDXComponent=!0}}]);