"use strict";(self.webpackChunkterra_ui=self.webpackChunkterra_ui||[]).push([[95877],{24591:function(e,t,r){var a=r(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(r(54520)),o=r(22678),s={key:"scatter_dataset",graphType:"Scatter",label:{display:"Scatter Data Label"},shape:n.default.helpers.SHAPES.DARK.RHOMBUS,color:n.default.helpers.COLORS.BLUE,onClick:o.loadPopup,values:new Array(50).fill("").map((function(e,t){return{y:5*Math.sin(t)+10,x:10+5*t}}))};t.default=s},32803:function(e,t,r){var a=r(64836);t.Z=void 0;var n=a(r(67294)),o=a(r(54520)),s=a(r(53334));r(56867),r(39003),r(379);var l=a(r(93065)),i=a(r(52637)),p=a(r(24591)),c=a(r(95713)),d=s.default.deepClone((0,i.default)("#pairedResultWithScatter")),u=[s.default.deepClone(p.default),s.default.deepClone(c.default)];t.Z=function(){return n.default.useEffect((function(){var e=o.default.api.graph(d);e.loadContent(o.default.api.scatter(u[0])),e.loadContent(o.default.api.pairedResult(u[1]))}),[]),n.default.createElement(l.default,{id:"pairedResultWithScatter"})}},62609:function(e,t,r){r.r(t),r.d(t,{default:function(){return w}});var a=r(67294),n=r(81254),o=r(32803),s=["components"];function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},l.apply(this,arguments)}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p={};function c(e){var t=e.components,r=i(e,s);return(0,n.mdx)("wrapper",l({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport utils from '@cerner/carbon-graphs/lib/js/helpers/utils';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Graph.module.scss';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Line/LineGraph.module.scss';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/PairedResult/PairedResultGraph.module.scss';\nimport ExampleGraphContainer from '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer';\nimport lineAndPairedResultConfig from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Combination/lineAndPairedResultConfig';\nimport scatterDataset from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Combination/scatterDataset';\nimport pairedResultDataset from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Combination/pairedResultDataset';\n\n/*\nPlease refer to the documentation below to see the graphConfig and data objects\n*/\nconst graphConfig = utils.deepClone(lineAndPairedResultConfig('#pairedResultWithScatter'));\nconst dataset = [\n  utils.deepClone(scatterDataset),\n  utils.deepClone(pairedResultDataset),\n];\n\nconst PairedResultWithScatterCombinationExample = () => {\n  React.useEffect(() => {\n    const graph = Carbon.api.graph(graphConfig);\n    graph.loadContent(Carbon.api.scatter(dataset[0]));\n    graph.loadContent(Carbon.api.pairedResult(dataset[1]));\n  }, []);\n  return (\n    <ExampleGraphContainer id=\"pairedResultWithScatter\" />\n  );\n};\n\nexport default PairedResultWithScatterCombinationExample;\n\n")))}c.isMDXComponent=!0;var d=r(49271),u=r(25005),m=function(e){var t=e.title,r=e.description,n=e.isExpanded;return a.createElement(d.Z,{title:t||"Paired Result With Scatter",description:r,example:a.createElement(o.Z,null),exampleCssSrc:a.createElement(u.Z,null),exampleSrc:a.createElement(c,null),isExpanded:n})},f=r(99024),h=["components"];function b(){return b=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},b.apply(this,arguments)}function g(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var x={},y="wrapper";function C(e){var t=e.components,r=g(e,h);return(0,n.mdx)(y,b({},x,r,{components:t,mdxType:"MDXLayout"}),(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport { loadPopup } from '@cerner/terra-graphs-docs/lib/example-datasets/popup';\n\nconst data = {\n  key: 'scatter_dataset',\n  graphType: 'Scatter',\n  label: {\n    display: 'Scatter Data Label',\n  },\n  shape: Carbon.helpers.SHAPES.DARK.RHOMBUS,\n  color: Carbon.helpers.COLORS.BLUE,\n  onClick: loadPopup,\n  values: new Array(50).fill('').map((_, i) => ({\n    y: Math.sin(i) * 5 + 10,\n    x: 10 + i * 5,\n  })),\n};\n\nexport default data;\n\n")))}C.isMDXComponent=!0;var O=r(15336),j=["components"];function v(){return v=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},v.apply(this,arguments)}function S(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}r(51320);var P={},R="wrapper";function w(e){var t=e.components,r=S(e,j);return(0,n.mdx)(R,v({},P,r,{components:t,mdxType:"MDXLayout"}),(0,n.mdx)("h1",{id:"paired-result-with-scatter"},"Paired result With Scatter"),(0,n.mdx)("p",null,"This is a simple Paired result Graph combined with Scatter."),(0,n.mdx)("h2",{id:"getting-started"},"Getting Started"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"Install with ",(0,n.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("inlineCode",{parentName:"li"},"npm i @cerner/carbon-graphs --save-dev"))))),(0,n.mdx)("h2",{id:"usage"},"Usage"),(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/dist/js/carbon-graphs.js';\nimport '@cerner/carbon-graphs/dist/css/carbon-graphs.css';\n")),(0,n.mdx)("h2",{id:"example"},"Example"),(0,n.mdx)(m,{mdxType:"CombinationGraph"}),(0,n.mdx)("details",null,(0,n.mdx)("summary",{style:{fontSize:24}},(0,n.mdx)("b",null,"Data")),(0,n.mdx)("h3",{id:"graph-config-object"},"Graph Config object"),(0,n.mdx)(f.Z,{mdxType:"GraphConfig"}),(0,n.mdx)("h3",{id:"data-object"},"Data object"),(0,n.mdx)("h4",{id:"scatter-dataset"},"Scatter Dataset"),(0,n.mdx)(C,{mdxType:"DataObject1"}),(0,n.mdx)("h4",{id:"paired-result-dataset"},"Paired Result Dataset"),(0,n.mdx)(O.Z,{mdxType:"DataObject2"})))}w.isMDXComponent=!0}}]);