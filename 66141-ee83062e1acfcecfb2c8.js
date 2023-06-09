"use strict";(self.webpackChunkterra_ui=self.webpackChunkterra_ui||[]).push([[66141,26196],{32836:function(e,a,r){var n=r(64836);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var t=n(r(54520)),o=r(22678),p={key:"stacked_bar_1",label:{display:"Dataset 1"},color:t.default.helpers.COLORS.GREEN,onClick:o.loadBarPopup,values:[{x:1,y:30},{x:2,y:10},{x:3,y:13},{x:4,y:15},{x:5,y:18}]};a.default=p},47826:function(e,a,r){var n=r(64836);a.Z=void 0;var t=n(r(67294)),o=n(r(54520)),p=n(r(53334));r(56867),r(83054);var l=n(r(93065)),s=n(r(13512)),c=n(r(32836)),d=n(r(89958)),i=n(r(34962)),m=p.default.deepClone((0,s.default)("#stackedBarGraph")),u=[p.default.deepClone(c.default),p.default.deepClone(d.default),p.default.deepClone(i.default)];a.Z=function(){return t.default.useEffect((function(){var e=o.default.api.graph(m);u.forEach((function(a){e.loadContent(o.default.api.bar(a))}))}),[]),t.default.createElement(l.default,{id:"stackedBarGraph"})}},72297:function(e,a,r){r.r(a),r.d(a,{default:function(){return _}});var n=r(67294),t=r(81254),o=r(47826),p=["components"];function l(){return l=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var r=arguments[a];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},l.apply(this,arguments)}function s(e,a){if(null==e)return{};var r,n,t=function(e,a){if(null==e)return{};var r,n,t={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],a.indexOf(r)>=0||(t[r]=e[r]);return t}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],a.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var c={};function d(e){var a=e.components,r=s(e,p);return(0,t.mdx)("wrapper",l({},c,r,{components:a,mdxType:"MDXLayout"}),(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport utils from '@cerner/carbon-graphs/lib/js/helpers/utils';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Graph.module.scss';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Bar/BarGraph.module.scss';\nimport ExampleGraphContainer from '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer';\nimport getBarConfig from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Bar/barDefault';\nimport exampleData1 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Bar/stackedBarData1';\nimport exampleData2 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Bar/stackedBarData2';\nimport exampleData3 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Bar/stackedBarData3';\n\n/*\nPlease refer to the documentation below to see the graphConfig and data objects\n*/\n\nconst graphConfig = utils.deepClone(getBarConfig('#stackedBarGraph'));\nconst dataset = [\n  utils.deepClone(exampleData1),\n  utils.deepClone(exampleData2),\n  utils.deepClone(exampleData3),\n];\n\nexport default () => {\n  React.useEffect(() => {\n    const graph = Carbon.api.graph(graphConfig);\n    dataset.forEach((data) => {\n      graph.loadContent(Carbon.api.bar(data));\n    });\n  }, []);\n\n  return (\n    <ExampleGraphContainer id=\"stackedBarGraph\" />\n  );\n};\n\n")))}d.isMDXComponent=!0;var i=r(49271),m=r(25005),u=function(e){var a=e.title,r=e.description,t=e.isExpanded;return n.createElement(i.Z,{title:a||"Stacked Bars",description:r,example:n.createElement(o.Z,null),exampleCssSrc:n.createElement(m.Z,null),exampleSrc:n.createElement(d,null),isExpanded:t})},f=r(50298),b=["components"];function x(){return x=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var r=arguments[a];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},x.apply(this,arguments)}function h(e,a){if(null==e)return{};var r,n,t=function(e,a){if(null==e)return{};var r,n,t={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],a.indexOf(r)>=0||(t[r]=e[r]);return t}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],a.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var g={},y="wrapper";function O(e){var a=e.components,r=h(e,b);return(0,t.mdx)(y,x({},g,r,{components:a,mdxType:"MDXLayout"}),(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport { loadBarPopup } from '@cerner/terra-graphs-docs/lib/example-datasets/popup';\n\nconst data = {\n  key: 'stacked_bar_1',\n  label: {\n    display: 'Dataset 1',\n  },\n  color: Carbon.helpers.COLORS.GREEN,\n  onClick: loadBarPopup,\n  values: [\n    {\n      x: 1,\n      y: 30,\n    },\n    {\n      x: 2,\n      y: 10,\n    },\n    {\n      x: 3,\n      y: 13,\n    },\n    {\n      x: 4,\n      y: 15,\n    },\n    {\n      x: 5,\n      y: 18,\n    },\n  ],\n};\n\nexport default data;\n\n")))}O.isMDXComponent=!0;var j=r(14327),v=["components"];function C(){return C=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var r=arguments[a];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},C.apply(this,arguments)}function k(e,a){if(null==e)return{};var r,n,t=function(e,a){if(null==e)return{};var r,n,t={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],a.indexOf(r)>=0||(t[r]=e[r]);return t}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],a.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var D={},E="wrapper";function w(e){var a=e.components,r=k(e,v);return(0,t.mdx)(E,C({},D,r,{components:a,mdxType:"MDXLayout"}),(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport { loadBarPopup } from '@cerner/terra-graphs-docs/lib/example-datasets/popup';\n\nconst data = {\n  key: 'stacked_bar_3',\n  label: {\n    display: 'Dataset 3',\n  },\n  group: 'stacked_bar_1',\n  color: Carbon.helpers.COLORS.BLUE,\n  onClick: loadBarPopup,\n  values: [\n    {\n      x: 1,\n      y: 30,\n    },\n    {\n      x: 2,\n      y: 8,\n    },\n    {\n      x: 3,\n      y: 9,\n    },\n    {\n      x: 4,\n      y: 10,\n    },\n    {\n      x: 5,\n      y: 7,\n    },\n  ],\n};\n\nexport default data;\n\n")))}w.isMDXComponent=!0;var B=["components"];function P(){return P=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var r=arguments[a];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},P.apply(this,arguments)}function G(e,a){if(null==e)return{};var r,n,t=function(e,a){if(null==e)return{};var r,n,t={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],a.indexOf(r)>=0||(t[r]=e[r]);return t}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],a.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}r(51320);var S={},N="wrapper";function _(e){var a=e.components,r=G(e,B);return(0,t.mdx)(N,P({},S,r,{components:a,mdxType:"MDXLayout"}),(0,t.mdx)("h1",{id:"stacked-bar-graph"},"Stacked Bar Graph"),(0,t.mdx)("p",null,"This is graph with multiple datasets stacked up."),(0,t.mdx)("h2",{id:"getting-started"},"Getting Started"),(0,t.mdx)("ul",null,(0,t.mdx)("li",{parentName:"ul"},"Install with ",(0,t.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",(0,t.mdx)("ul",{parentName:"li"},(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("inlineCode",{parentName:"li"},"npm i @cerner/carbon-graphs --save-dev"))))),(0,t.mdx)("h2",{id:"usage"},"Usage"),(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre",className:"language-jsx"},"import Carbon from '@cerner/carbon-graphs/dist/js/carbon-graphs.js';\nimport '@cerner/carbon-graphs/dist/css/carbon-graphs.css';\n")),(0,t.mdx)("h2",{id:"examples"},"Examples"),(0,t.mdx)(u,{mdxType:"BarGraph"}),(0,t.mdx)("details",null,(0,t.mdx)("summary",{style:{fontSize:24}},(0,t.mdx)("b",null,"Data")),(0,t.mdx)("h3",{id:"graph-config-object"},"Graph Config object"),(0,t.mdx)(f.Z,{mdxType:"GraphConfig"}),(0,t.mdx)("h3",{id:"data-objects"},"Data objects"),(0,t.mdx)("h4",{id:"dataset-1"},"Dataset 1"),(0,t.mdx)(O,{mdxType:"DataObject1"}),(0,t.mdx)("h4",{id:"dataset-2"},"Dataset 2"),(0,t.mdx)(j.Z,{mdxType:"DataObject2"}),(0,t.mdx)("h4",{id:"dataset-3"},"Dataset 3"),(0,t.mdx)(w,{mdxType:"DataObject3"})))}_.isMDXComponent=!0}}]);