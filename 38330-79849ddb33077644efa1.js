"use strict";(self.webpackChunkterra_ui=self.webpackChunkterra_ui||[]).push([[38330],{81497:function(t,n){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={key:"dynamic_dataset_1",values:[{x:new Date(2016,0,1,3).toISOString(),y:1},{x:new Date(2016,0,1,6).toISOString(),y:5},{x:new Date(2016,0,1,9).toISOString(),y:8},{x:new Date(2016,0,1,12).toISOString(),y:20},{x:new Date(2016,0,1,15).toISOString(),y:6}]};n.default=e},92118:function(t,n,e){var a=e(64836);n.Z=void 0;var r=a(e(27424)),i=a(e(67294)),o=a(e(55281)),p=a(e(54520)),l=a(e(53334));e(56867),e(83054);var c,s=a(e(93065)),u=a(e(62758)),d=a(e(74772)),m=a(e(81497)),f=l.default.deepClone((0,u.default)("#BarPanningDynamicData")),g=l.default.deepClone(d.default),h={initial:0,factor:3},x=function(){i.default.useEffect((function(){(c=p.default.api.graph(f)).loadContent(p.default.api.bar(g))}),[]);var t=i.default.useReducer((function(t,n){var e;switch(n.type){case"panLeft":e=t.initial-t.factor;break;case"panRight":e=t.initial+t.factor;break;default:return t}return{initial:e,factor:t.factor}}),h),n=(0,r.default)(t,2),e=n[0],a=n[1];return i.default.useLayoutEffect((function(){if(c){c.config.axis.x.lowerLimit=new Date(2016,0,1,e.initial).toISOString(),c.config.axis.x.upperLimit=new Date(2016,0,2,e.initial).toISOString();var t={panData:[l.default.deepClone(m.default)]};c.reflowMultipleDatasets(t)}}),[e.initial]),i.default.createElement(i.default.Fragment,null,i.default.createElement(o.default,{className:"button-pan-left",text:"<",onClick:function(){return a({type:"panLeft"})}}),i.default.createElement(o.default,{className:"button-pan-right",text:">",onClick:function(){return a({type:"panRight"})}}),i.default.createElement(s.default,{id:"BarPanningDynamicData"}))};n.Z=x},38330:function(t,n,e){e.r(n),e.d(n,{default:function(){return E}});var a=e(67294),r=e(81254),i=e(92118),o=["components"];function p(){return p=Object.assign?Object.assign.bind():function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a])}return t},p.apply(this,arguments)}function l(t,n){if(null==t)return{};var e,a,r=function(t,n){if(null==t)return{};var e,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)e=i[a],n.indexOf(e)>=0||(r[e]=t[e]);return r}(t,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)e=i[a],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(r[e]=t[e])}return r}var c={};function s(t){var n=t.components,e=l(t,o);return(0,r.mdx)("wrapper",p({},c,e,{components:n,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Button from 'terra-button/lib/Button';\nimport Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport utils from '@cerner/carbon-graphs/lib/js/helpers/utils';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Graph.module.scss';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Bar/BarGraph.module.scss';\nimport ExampleGraphContainer from '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer';\nimport getBarConfig from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Bar/barPanning';\nimport initialData from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Bar/datasetTimeseries1';\nimport updatedData from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Bar/datasetTimeseries1newData';\n\n/*\nPlease refer to the documentation below to see the graphConfig and data objects\n*/\n\nconst graphConfig = utils.deepClone(getBarConfig('#BarPanningDynamicData'));\nconst dataset = utils.deepClone(initialData);\nconst initialState = {\n  initial: 0,\n  factor: 3,\n};\n\nlet graph;\n\nconst BarPanningExample = () => {\n  React.useEffect(() => {\n    graph = Carbon.api.graph(graphConfig);\n    graph.loadContent(Carbon.api.bar(dataset));\n  }, []);\n\n  const reducer = (panState, action) => {\n    let hour;\n\n    switch (action.type) {\n      case 'panLeft':\n        hour = panState.initial - panState.factor;\n        break;\n      case 'panRight':\n        hour = panState.initial + panState.factor;\n        break;\n      default:\n        return panState;\n    }\n\n    return {\n      initial: hour,\n      factor: panState.factor,\n    };\n  };\n\n  const [panState, dispatch] = React.useReducer(reducer, initialState);\n\n  React.useLayoutEffect(() => {\n    if (!graph) { return; }\n\n    graph.config.axis.x.lowerLimit = new Date(2016, 0, 1, panState.initial).toISOString();\n    graph.config.axis.x.upperLimit = new Date(2016, 0, 2, panState.initial).toISOString();\n\n    const newDataset = { panData: [utils.deepClone(updatedData)] };\n\n    graph.reflowMultipleDatasets(newDataset);\n  }, [panState.initial]);\n\n  return (\n    <>\n      <Button className=\"button-pan-left\" text=\"<\" onClick={() => dispatch({ type: 'panLeft' })} />\n      <Button className=\"button-pan-right\" text=\">\" onClick={() => dispatch({ type: 'panRight' })} />\n      <ExampleGraphContainer id=\"BarPanningDynamicData\" />\n    </>\n  );\n};\n\nexport default BarPanningExample;\n\n")))}s.isMDXComponent=!0;var u=e(49271),d=e(25005),m=function(t){var n=t.title,e=t.description,r=t.isExpanded;return a.createElement(u.Z,{title:n||"Dynamic Data",description:e,example:a.createElement(i.Z,null),exampleCssSrc:a.createElement(d.Z,null),exampleSrc:a.createElement(s,null),isExpanded:r})},f=e(14791),g=e(97842),h=["components"];function x(){return x=Object.assign?Object.assign.bind():function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a])}return t},x.apply(this,arguments)}function b(t,n){if(null==t)return{};var e,a,r=function(t,n){if(null==t)return{};var e,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)e=i[a],n.indexOf(e)>=0||(r[e]=t[e]);return r}(t,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)e=i[a],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(r[e]=t[e])}return r}var y={},O="wrapper";function S(t){var n=t.components,e=b(t,h);return(0,r.mdx)(O,x({},y,e,{components:n,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-js"},"const data = {\n  key: 'dynamic_dataset_1',\n  values: [\n    {\n      x: new Date(2016, 0, 1, 3).toISOString(),\n      y: 1,\n    },\n    {\n      x: new Date(2016, 0, 1, 6).toISOString(),\n      y: 5,\n    },\n    {\n      x: new Date(2016, 0, 1, 9).toISOString(),\n      y: 8,\n    },\n    {\n      x: new Date(2016, 0, 1, 12).toISOString(),\n      y: 20,\n    },\n    {\n      x: new Date(2016, 0, 1, 15).toISOString(),\n      y: 6,\n    },\n  ],\n};\n\nexport default data;\n\n")))}S.isMDXComponent=!0;var D=["components"];function v(){return v=Object.assign?Object.assign.bind():function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a])}return t},v.apply(this,arguments)}function w(t,n){if(null==t)return{};var e,a,r=function(t,n){if(null==t)return{};var e,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)e=i[a],n.indexOf(e)>=0||(r[e]=t[e]);return r}(t,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)e=i[a],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(r[e]=t[e])}return r}e(51320);var j={},C="wrapper";function E(t){var n=t.components,e=w(t,D);return(0,r.mdx)(C,v({},j,e,{components:n,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"bar-graph-panning---dynamic-data"},"Bar graph panning - Dynamic data"),(0,r.mdx)("p",null,"This is a bar graph example that implements panning with dynamic data."),(0,r.mdx)("h2",{id:"getting-started"},"Getting Started"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Install with ",(0,r.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"npm i @cerner/carbon-graphs --save-dev"))))),(0,r.mdx)("h2",{id:"usage"},"Usage"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},"import Carbon from '@cerner/carbon-graphs/dist/js/carbon-graphs.js';\nimport '@cerner/carbon-graphs/dist/css/carbon-graphs.css';\n")),(0,r.mdx)("h2",{id:"examples"},"Examples"),(0,r.mdx)(m,{mdxType:"BarGraphPanning"}),(0,r.mdx)("details",null,(0,r.mdx)("summary",{style:{fontSize:24}},(0,r.mdx)("b",null,"Data")),(0,r.mdx)("h3",{id:"graph-config-object"},"Graph Config object"),(0,r.mdx)(f.Z,{mdxType:"GraphConfig"}),(0,r.mdx)("h3",{id:"data-object"},"Data object"),(0,r.mdx)("h4",{id:"initial-data"},"Initial Data"),(0,r.mdx)(g.Z,{mdxType:"DataObject1"}),(0,r.mdx)("h4",{id:"updated-data"},"Updated Data"),(0,r.mdx)(S,{mdxType:"DataObject2"})))}E.isMDXComponent=!0}}]);