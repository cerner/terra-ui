"use strict";(self.webpackChunkterra_ui=self.webpackChunkterra_ui||[]).push([[55424],{39324:function(e,n,t){var a=t(64836);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=a(t(54520)),o=t(22678),l={key:"bubble_dataset_1",label:{display:"Bubble Data Label 1"},graphType:"BubbleMultipleDataset",color:r.default.helpers.COLORS.GREEN,onClick:o.loadPopup,values:[{x:1,y:30},{x:2,y:10},{x:3,y:13},{x:4,y:15},{x:5,y:18}]};n.default=l},80264:function(e,n,t){var a=t(64836);n.Z=void 0;var r=a(t(67294)),o=a(t(54520)),l=a(t(53334));t(56867),t(39003);var i=a(t(93065)),p=a(t(9648)),s=a(t(33175)),u=a(t(39324)),c=l.default.deepClone((0,p.default)("#lineWithSingleBubbleData")),d=[l.default.deepClone(u.default),l.default.deepClone(s.default)];n.Z=function(){return r.default.useEffect((function(){var e=o.default.api.graph(c);e.loadContent(o.default.api.bubbleSingleDataset(d[0])),e.loadContent(o.default.api.line(d[1]))}),[]),r.default.createElement(i.default,{id:"lineWithSingleBubbleData"})}},55424:function(e,n,t){t.r(n),t.d(n,{default:function(){return j}});var a=t(67294),r=t(81254),o=t(80264),l=["components"];function i(){return i=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},i.apply(this,arguments)}function p(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s={};function u(e){var n=e.components,t=p(e,l);return(0,r.mdx)("wrapper",i({},s,t,{components:n,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport utils from '@cerner/carbon-graphs/lib/js/helpers/utils';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Graph.module.scss';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Line/LineGraph.module.scss';\nimport ExampleGraphContainer from '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer';\nimport getCombinationGraphConfig from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Combination/combinationDefault';\nimport lineDataset from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Combination/lineDataset1';\nimport singleBubbleDataset from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Combination/bubbleDataset1';\n\n/*\nPlease refer to the documentation below to see the graphConfig and data objects\n*/\nconst graphConfig = utils.deepClone(getCombinationGraphConfig('#lineWithSingleBubbleData'));\nconst dataset = [\n  utils.deepClone(singleBubbleDataset),\n  utils.deepClone(lineDataset),\n];\n\nconst LineWithSingleBubbleDataCombinationExample = () => {\n  React.useEffect(() => {\n    const graph = Carbon.api.graph(graphConfig);\n    graph.loadContent(Carbon.api.bubbleSingleDataset(dataset[0]));\n    graph.loadContent(Carbon.api.line(dataset[1]));\n  }, []);\n  return (\n    <ExampleGraphContainer id=\"lineWithSingleBubbleData\" />\n  );\n};\n\nexport default LineWithSingleBubbleDataCombinationExample;\n\n\n")))}u.isMDXComponent=!0;var c=t(49271),d=t(25005),b=function(e){var n=e.title,t=e.description,r=e.isExpanded;return a.createElement(c.Z,{title:n||"Line With Single Bubble Data",description:t,example:a.createElement(o.Z,null),exampleCssSrc:a.createElement(d.Z,null),exampleSrc:a.createElement(u,null),isExpanded:r})},m=t(84015),f=t(43002),g=t(71726),h=["components"];function x(){return x=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},x.apply(this,arguments)}function y(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}t(51320);var C={},O="wrapper";function j(e){var n=e.components,t=y(e,h);return(0,r.mdx)(O,x({},C,t,{components:n,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"line-with-single-bubble-dataset"},"Line With Single Bubble dataset"),(0,r.mdx)("p",null,"This is a simple Line Graph combined with single Bubble dataset."),(0,r.mdx)("h2",{id:"getting-started"},"Getting Started"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Install with ",(0,r.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"npm i @cerner/carbon-graphs --save-dev"))))),(0,r.mdx)("h2",{id:"usage"},"Usage"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/dist/js/carbon-graphs.js';\nimport '@cerner/carbon-graphs/dist/css/carbon-graphs.css';\n")),(0,r.mdx)("h2",{id:"example"},"Example"),(0,r.mdx)(b,{mdxType:"CombinationGraph"}),(0,r.mdx)("details",null,(0,r.mdx)("summary",{style:{fontSize:24}},(0,r.mdx)("b",null,"Data")),(0,r.mdx)("h3",{id:"graph-config-object"},"Graph Config object"),(0,r.mdx)(m.Z,{mdxType:"GraphConfig"}),(0,r.mdx)("h3",{id:"data-object"},"Data object"),(0,r.mdx)("h4",{id:"bubble-dataset"},"Bubble Dataset"),(0,r.mdx)(f.Z,{mdxType:"DataObject1"}),(0,r.mdx)("h4",{id:"line-dataset"},"Line Dataset"),(0,r.mdx)(g.Z,{mdxType:"DataObject2"})))}j.isMDXComponent=!0},43002:function(e,n,t){t.d(n,{Z:function(){return s}});t(67294);var a=t(81254),r=["components"];function o(){return o=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},o.apply(this,arguments)}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i={},p="wrapper";function s(e){var n=e.components,t=l(e,r);return(0,a.mdx)(p,o({},i,t,{components:n,mdxType:"MDXLayout"}),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport { loadPopup } from '@cerner/terra-graphs-docs/lib/example-datasets/popup';\n\nconst data = {\n  key: 'bubble_dataset_1',\n  label: {\n    display: 'Bubble Data Label 1',\n  },\n  graphType: 'BubbleMultipleDataset',\n  color: Carbon.helpers.COLORS.GREEN,\n  onClick: loadPopup,\n  values: [\n    {\n      x: 1,\n      y: 30,\n    },\n    {\n      x: 2,\n      y: 10,\n    },\n    {\n      x: 3,\n      y: 13,\n    },\n    {\n      x: 4,\n      y: 15,\n    },\n    {\n      x: 5,\n      y: 18,\n    },\n  ],\n};\n\nexport default data;\n\n")))}s.isMDXComponent=!0}}]);