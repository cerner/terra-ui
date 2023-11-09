"use strict";(self.webpackChunkterra_ui=self.webpackChunkterra_ui||[]).push([[64543],{69279:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={key:"uid_1",label:{display:"Data Label 1"},values:[{x:new Date(2016,0,1,2,15).toISOString(),y:11},{x:new Date(2016,0,1,3,15).toISOString(),y:10},{x:new Date(2016,0,1,4,15).toISOString(),y:16},{x:new Date(2016,0,1,5,15).toISOString(),y:10},{x:new Date(2016,0,1,6,15).toISOString(),y:7},{x:new Date(2016,0,1,7,0).toISOString(),y:16},{x:new Date(2016,0,1,8,15).toISOString(),y:9},{x:new Date(2016,0,1,9,45).toISOString(),y:6},{x:new Date(2016,0,1,12,15).toISOString(),y:2},{x:new Date(2016,0,1,13,15).toISOString(),y:3},{x:new Date(2016,0,1,14,15).toISOString(),y:25},{x:new Date(2016,0,1,19,45).toISOString(),y:13},{x:new Date(2016,0,1,21,15).toISOString(),y:14}]};t.default=n},44575:function(e,t,n){var a=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(54520)),i=n(22678),o={key:"uid_3",label:{display:"Data Label 3"},shape:r.default.helpers.SHAPES.DARK.CIRCLE,color:r.default.helpers.COLORS.BLUE,onClick:i.loadPopup,yAxis:"y",values:[{x:new Date(2016,0,1,1,5).toISOString(),y:15},{x:new Date(2016,0,1,2,15).toISOString(),y:21},{x:new Date(2016,0,1,3,15).toISOString(),y:null},{x:new Date(2016,0,1,4,15).toISOString(),y:16},{x:new Date(2016,0,1,5,15).toISOString(),y:17},{x:new Date(2016,0,1,6,15).toISOString(),y:19},{x:new Date(2016,0,1,9,45).toISOString(),y:16},{x:new Date(2016,0,1,12,15).toISOString(),y:17},{x:new Date(2016,0,1,13,15).toISOString(),y:28},{x:new Date(2016,0,1,14,15).toISOString(),y:22},{x:new Date(2016,0,1,19,45).toISOString(),y:23}]};t.default=o},24745:function(e,t,n){var a=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(54520)),i=n(22678),o={key:"uid_3",label:{display:"Data Label 3"},shape:r.default.helpers.SHAPES.DARK.CIRCLE,color:r.default.helpers.COLORS.BLUE,onClick:i.loadPopup,yAxis:"y",values:[{x:new Date(2016,0,1,1,5).toISOString(),y:25},{x:new Date(2016,0,1,2,15).toISOString(),y:5},{x:new Date(2016,0,1,3,15).toISOString(),y:16},{x:new Date(2016,0,1,4,15).toISOString(),y:null},{x:new Date(2016,0,1,5,15).toISOString(),y:3},{x:new Date(2016,0,1,6,15).toISOString(),y:7},{x:new Date(2016,0,1,9,45).toISOString(),y:4},{x:new Date(2016,0,1,12,15).toISOString(),y:12},{x:new Date(2016,0,1,13,15).toISOString(),y:19},{x:new Date(2016,0,1,14,15).toISOString(),y:24}]};t.default=o},62329:function(e,t,n){var a=n(64836);t.Z=void 0;var r=a(n(27424)),i=a(n(67294)),o=a(n(55281)),l=a(n(54520)),p=a(n(53334));n(56867),n(39003);var s,u=a(n(93065)),d=a(n(30405)),c=a(n(16921)),f=a(n(69279)),m=a(n(44575)),g=a(n(24745)),x=p.default.deepClone((0,d.default)("#multipleDatasetsExample")),S=[p.default.deepClone(c.default),p.default.deepClone(m.default)],y={initial:0,factor:3};t.Z=function(){i.default.useEffect((function(){s=l.default.api.graph(x),S.forEach((function(e){s.loadContent(l.default.api.line(e))}))}),[]);var e=i.default.useReducer((function(e,t){var n;switch(t.type){case"panLeft":n=e.initial-e.factor;break;case"panRight":n=e.initial+e.factor;break;default:return e}return{initial:n,factor:e.factor}}),y),t=(0,r.default)(e,2),n=t[0],a=t[1];return i.default.useLayoutEffect((function(){if(s){s.config.axis.x.lowerLimit=new Date(2016,0,1,n.initial).toISOString(),s.config.axis.x.upperLimit=new Date(2016,0,2,n.initial).toISOString();var e={panData:[p.default.deepClone(f.default),p.default.deepClone(g.default)]};s.reflowMultipleDatasets(e)}}),[n.initial]),i.default.createElement(i.default.Fragment,null,i.default.createElement(o.default,{className:"button-pan-left",text:"<",onClick:function(){return a({type:"panLeft"})}}),i.default.createElement(o.default,{className:"button-pan-right",text:">",onClick:function(){return a({type:"panRight"})}}),i.default.createElement(u.default,{id:"multipleDatasetsExample"}))}},64543:function(e,t,n){n.r(t),n.d(t,{default:function(){return h}});var a=n(67294),r=n(81254),i=n(62329),o=["components"];function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},l.apply(this,arguments)}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s={};function u(e){var t=e.components,n=p(e,o);return(0,r.mdx)("wrapper",l({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Button from 'terra-button/lib/Button';\nimport Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport utils from '@cerner/carbon-graphs/lib/js/helpers/utils';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Graph.module.scss';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Line/LineGraph.module.scss';\nimport ExampleGraphContainer from '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer';\nimport getConfigLineTimeseriesPanning from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Line/lineTimeseriesPanning';\nimport initialData1 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Line/datasetTimeseries1';\nimport updatedData1 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Line/datasetTimeseries1newData';\nimport initialData2 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Line/datasetTimeseries3';\nimport updatedData2 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Line/datasetTimeseries3newData';\n\n/*\nPlease refer to the documentation below to see the graphConfig and data objects\n*/\n\nconst graphConfig = utils.deepClone(getConfigLineTimeseriesPanning('#multipleDatasetsExample'));\nconst dataset = [\n  utils.deepClone(initialData1),\n  utils.deepClone(initialData2),\n];\nconst state = {\n  initial: 0,\n  factor: 3,\n};\n\nlet graph;\n\nconst MultipleDatasetsLinePanningExample = () => {\n  React.useEffect(() => {\n    graph = Carbon.api.graph(graphConfig);\n    dataset.forEach((data) => {\n      graph.loadContent(Carbon.api.line(data));\n    });\n  }, []);\n\n  const reducer = (panState, action) => {\n    let hour;\n\n    switch (action.type) {\n      case 'panLeft':\n        hour = panState.initial - panState.factor;\n        break;\n      case 'panRight':\n        hour = panState.initial + panState.factor;\n        break;\n      default:\n        return panState;\n    }\n\n    return {\n      initial: hour,\n      factor: panState.factor,\n    };\n  };\n\n  const [panState, dispatch] = React.useReducer(reducer, state);\n\n  React.useLayoutEffect(() => {\n    if (!graph) { return; }\n\n    graph.config.axis.x.lowerLimit = new Date(2016, 0, 1, panState.initial).toISOString();\n    graph.config.axis.x.upperLimit = new Date(2016, 0, 2, panState.initial).toISOString();\n\n    const newDataset = {\n      panData: [\n        utils.deepClone(updatedData1),\n        utils.deepClone(updatedData2),\n      ],\n    };\n\n    graph.reflowMultipleDatasets(newDataset);\n  }, [panState.initial]);\n  return (\n    <>\n      <Button className=\"button-pan-left\" text=\"<\" onClick={() => dispatch({ type: 'panLeft' })} />\n      <Button className=\"button-pan-right\" text=\">\" onClick={() => dispatch({ type: 'panRight' })} />\n      <ExampleGraphContainer id=\"multipleDatasetsExample\" />\n    </>\n  );\n};\n\nexport default MultipleDatasetsLinePanningExample;\n\n")))}u.isMDXComponent=!0;var d=n(49271),c=n(25005),f=function(e){var t=e.title,n=e.description,r=e.isExpanded;return a.createElement(d.Z,{title:t||"Multiple Datasets",description:n,example:a.createElement(i.Z,null),exampleCssSrc:a.createElement(c.Z,null),exampleSrc:a.createElement(u,null),isExpanded:r})};n(75486);n(35862),n(48244),n(29811);var m=["components"];function g(){return g=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},g.apply(this,arguments)}function x(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}n(51320);var S={},y="wrapper";function h(e){var t=e.components,n=x(e,m);return(0,r.mdx)(y,g({},S,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"line-graph---panning"},"Line Graph - panning"),(0,r.mdx)("p",null,"This is a line graph example that implements panning. Click on the panning buttons to see the updated data."),(0,r.mdx)("h2",{id:"getting-started"},"Getting Started"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Install with ",(0,r.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"npm i @cerner/carbon-graphs --save-dev"))))),(0,r.mdx)("h2",{id:"usage"},"Usage"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/dist/js/carbon-graphs.js';\nimport '@cerner/carbon-graphs/dist/css/carbon-graphs.css';\n")),(0,r.mdx)("h2",{id:"example"},"Example"),(0,r.mdx)(f,{mdxType:"LineGraphPanning"}),(0,r.mdx)("details",null,(0,r.mdx)("summary",{style:{fontSize:24}},(0,r.mdx)("b",null,"Data")),(0,r.mdx)("h3",{id:"graph-config-object"},"Graph Config object"),(0,r.mdx)("h4",{id:"initial-data-1"},"Initial data 1"),(0,r.mdx)("initialData1",null),(0,r.mdx)("h4",{id:"updated-data-1"},"Updated data 1"),(0,r.mdx)("updatedData1",null),(0,r.mdx)("h4",{id:"initial-data-2"},"Initial data 2"),(0,r.mdx)("initialData1",null),(0,r.mdx)("h4",{id:"updated-data-2"},"Updated data 2"),(0,r.mdx)("updatedData1",null)))}h.isMDXComponent=!0},48244:function(e,t,n){n(67294),n(81254)},29811:function(e,t,n){n.d(t,{Z:function(){return s}});n(67294);var a=n(81254),r=["components"];function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},i.apply(this,arguments)}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l={},p="wrapper";function s(e){var t=e.components,n=o(e,r);return(0,a.mdx)(p,i({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport { loadPopup } from '@cerner/terra-graphs-docs/lib/example-datasets/popup';\n\nconst data = {\n  key: 'uid_3',\n  label: {\n    display: 'Data Label 3',\n  },\n  shape: Carbon.helpers.SHAPES.DARK.CIRCLE,\n  color: Carbon.helpers.COLORS.BLUE,\n  onClick: loadPopup,\n  yAxis: 'y',\n  values: [\n    {\n      x: new Date(2016, 0, 1, 1, 5).toISOString(),\n      y: 15,\n    },\n    {\n      x: new Date(2016, 0, 1, 2, 15).toISOString(),\n      y: 21,\n    },\n    {\n      x: new Date(2016, 0, 1, 3, 15).toISOString(),\n      y: null,\n    },\n    {\n      x: new Date(2016, 0, 1, 4, 15).toISOString(),\n      y: 16,\n    },\n    {\n      x: new Date(2016, 0, 1, 5, 15).toISOString(),\n      y: 17,\n    },\n    {\n      x: new Date(2016, 0, 1, 6, 15).toISOString(),\n      y: 19,\n    },\n    {\n      x: new Date(2016, 0, 1, 9, 45).toISOString(),\n      y: 16,\n    },\n    {\n      x: new Date(2016, 0, 1, 12, 15).toISOString(),\n      y: 17,\n    },\n    {\n      x: new Date(2016, 0, 1, 13, 15).toISOString(),\n      y: 28,\n    },\n    {\n      x: new Date(2016, 0, 1, 14, 15).toISOString(),\n      y: 22,\n    },\n    {\n      x: new Date(2016, 0, 1, 19, 45).toISOString(),\n      y: 23,\n    },\n  ],\n};\n\nexport default data;\n\n")))}s.isMDXComponent=!0}}]);