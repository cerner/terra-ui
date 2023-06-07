"use strict";(self.webpackChunkterra_ui=self.webpackChunkterra_ui||[]).push([[41169,26196],{84111:function(e,n,a){var r=a(64836);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var t=r(a(54520)),o=a(22678),s={key:"uid_bar_1",label:{display:"Data Label 1"},color:t.default.helpers.COLORS.GREEN,onClick:o.loadBarPopup,values:[{x:1,y:30},{x:2,y:10},{x:3,y:13},{x:4,y:15},{x:5,y:18}],regions:[{axis:"y",x:1,start:7,end:7},{axis:"y",x:2,start:13,end:13},{axis:"y",x:3,start:17,end:17},{axis:"y",x:4,start:4,end:4}]};n.default=s},10121:function(e,n,a){var r=a(64836);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var t=r(a(54520)),o=a(22678),s={key:"grouped_bar_5",label:{display:"Dataset 5"},color:t.default.helpers.COLORS.BLUE,onClick:o.loadBarPopup,values:[{x:1,y:15},{x:2,y:10},{x:3,y:13},{x:4,y:8}],regions:[{axis:"y",x:1,start:7,end:7},{axis:"y",x:2,start:13,end:13},{axis:"y",x:3,start:17,end:17},{axis:"y",x:4,start:4,end:4}]};n.default=s},45541:function(e,n,a){var r=a(64836);n.Z=void 0;var t=r(a(67294)),o=r(a(54520)),s=r(a(53334));a(56867),a(83054);var p=r(a(93065)),l=r(a(13512)),i=r(a(39358)),d=r(a(84111)),c=r(a(10121)),u=s.default.deepClone((0,l.default)("#groupedGoalLineBarGraph")),m=[s.default.deepClone(i.default),s.default.deepClone(d.default),s.default.deepClone(c.default)];n.Z=function(){return t.default.useEffect((function(){var e=o.default.api.graph(u);m.forEach((function(n){e.loadContent(o.default.api.bar(n))}))}),[]),t.default.createElement(p.default,{id:"groupedGoalLineBarGraph"})}},16194:function(e,n,a){a.r(n),a.d(n,{default:function(){return N}});var r=a(67294),t=a(81254),o=a(45541),s=["components"];function p(){return p=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var a=arguments[n];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},p.apply(this,arguments)}function l(e,n){if(null==e)return{};var a,r,t=function(e,n){if(null==e)return{};var a,r,t={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],n.indexOf(a)>=0||(t[a]=e[a]);return t}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}var i={};function d(e){var n=e.components,a=l(e,s);return(0,t.mdx)("wrapper",p({},i,a,{components:n,mdxType:"MDXLayout"}),(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport utils from '@cerner/carbon-graphs/lib/js/helpers/utils';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Graph.module.scss';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Bar/BarGraph.module.scss';\nimport ExampleGraphContainer from '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer';\nimport getBarConfig from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Bar/barDefault';\nimport exampleData1 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Bar/dataset1regions';\nimport exampleData2 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Bar/dataset2regions';\nimport exampleData3 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Bar/dataset3regions';\n\n/*\nPlease refer to the documentation below to see the graphConfig and data objects\n*/\n\nconst graphConfig = utils.deepClone(getBarConfig('#groupedGoalLineBarGraph'));\n\nconst dataset = [\n  utils.deepClone(exampleData1),\n  utils.deepClone(exampleData2),\n  utils.deepClone(exampleData3),\n];\n\nexport default () => {\n  React.useEffect(() => {\n    const graph = Carbon.api.graph(graphConfig);\n    dataset.forEach((data) => {\n      graph.loadContent(Carbon.api.bar(data));\n    });\n  }, []);\n\n  return (\n    <ExampleGraphContainer id=\"groupedGoalLineBarGraph\" />\n  );\n};\n\n")))}d.isMDXComponent=!0;var c=a(49271),u=a(25005),m=function(e){var n=e.title,a=e.description,t=e.isExpanded;return r.createElement(c.Z,{title:n||"Grouped Goal Lines",description:a,example:r.createElement(o.Z,null),exampleCssSrc:r.createElement(u.Z,null),exampleSrc:r.createElement(d,null),isExpanded:t})},x=a(50298),f=a(44059),b=["components"];function g(){return g=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var a=arguments[n];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},g.apply(this,arguments)}function y(e,n){if(null==e)return{};var a,r,t=function(e,n){if(null==e)return{};var a,r,t={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],n.indexOf(a)>=0||(t[a]=e[a]);return t}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}var h={},O="wrapper";function v(e){var n=e.components,a=y(e,b);return(0,t.mdx)(O,g({},h,a,{components:n,mdxType:"MDXLayout"}),(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport { loadBarPopup } from '@cerner/terra-graphs-docs/lib/example-datasets/popup';\n\nconst data = {\n  key: 'uid_bar_1',\n  label: {\n    display: 'Data Label 1',\n  },\n  color: Carbon.helpers.COLORS.GREEN,\n  onClick: loadBarPopup,\n  values: [\n    {\n      x: 1,\n      y: 30,\n    },\n    {\n      x: 2,\n      y: 10,\n    },\n    {\n      x: 3,\n      y: 13,\n    },\n    {\n      x: 4,\n      y: 15,\n    },\n    {\n      x: 5,\n      y: 18,\n    },\n  ],\n  regions: [\n    {\n      axis: 'y',\n      x: 1,\n      start: 7,\n      end: 7,\n    },\n    {\n      axis: 'y',\n      x: 2,\n      start: 13,\n      end: 13,\n    },\n    {\n      axis: 'y',\n      x: 3,\n      start: 17,\n      end: 17,\n    },\n    {\n      axis: 'y',\n      x: 4,\n      start: 4,\n      end: 4,\n    },\n  ],\n};\n\nexport default data;\n\n")))}v.isMDXComponent=!0;var j=["components"];function C(){return C=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var a=arguments[n];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},C.apply(this,arguments)}function D(e,n){if(null==e)return{};var a,r,t=function(e,n){if(null==e)return{};var a,r,t={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],n.indexOf(a)>=0||(t[a]=e[a]);return t}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}var w={},E="wrapper";function G(e){var n=e.components,a=D(e,j);return(0,t.mdx)(E,C({},w,a,{components:n,mdxType:"MDXLayout"}),(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport { loadBarPopup } from '@cerner/terra-graphs-docs/lib/example-datasets/popup';\n\nconst data = {\n  key: 'grouped_bar_5',\n  label: {\n    display: 'Dataset 5',\n  },\n  color: Carbon.helpers.COLORS.BLUE,\n  onClick: loadBarPopup,\n  values: [\n    {\n      x: 1,\n      y: 15,\n    },\n    {\n      x: 2,\n      y: 10,\n    },\n    {\n      x: 3,\n      y: 13,\n    },\n    {\n      x: 4,\n      y: 8,\n    },\n  ],\n  regions: [\n    {\n      axis: 'y',\n      x: 1,\n      start: 7,\n      end: 7,\n    },\n    {\n      axis: 'y',\n      x: 2,\n      start: 13,\n      end: 13,\n    },\n    {\n      axis: 'y',\n      x: 3,\n      start: 17,\n      end: 17,\n    },\n    {\n      axis: 'y',\n      x: 4,\n      start: 4,\n      end: 4,\n    },\n  ],\n};\n\nexport default data;\n\n")))}G.isMDXComponent=!0;var B=["components"];function P(){return P=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var a=arguments[n];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},P.apply(this,arguments)}function L(e,n){if(null==e)return{};var a,r,t=function(e,n){if(null==e)return{};var a,r,t={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],n.indexOf(a)>=0||(t[a]=e[a]);return t}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}a(51320);var k={},S="wrapper";function N(e){var n=e.components,a=L(e,B);return(0,t.mdx)(S,P({},k,a,{components:n,mdxType:"MDXLayout"}),(0,t.mdx)("h1",{id:"grouped-bar-graph-with-goal-lines"},"Grouped Bar Graph with Goal Lines"),(0,t.mdx)("p",null,"This is a grouped bar graph with goal lines."),(0,t.mdx)("h2",{id:"getting-started"},"Getting Started"),(0,t.mdx)("ul",null,(0,t.mdx)("li",{parentName:"ul"},"Install with ",(0,t.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",(0,t.mdx)("ul",{parentName:"li"},(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("inlineCode",{parentName:"li"},"npm i @cerner/carbon-graphs --save-dev"))))),(0,t.mdx)("h2",{id:"usage"},"Usage"),(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre",className:"language-jsx"},"import Carbon from '@cerner/carbon-graphs/dist/js/carbon-graphs.js';\nimport '@cerner/carbon-graphs/dist/css/carbon-graphs.css';\n")),(0,t.mdx)("h2",{id:"examples"},"Examples"),(0,t.mdx)(m,{mdxType:"BarGraph"}),(0,t.mdx)("details",null,(0,t.mdx)("summary",{style:{fontSize:24}},(0,t.mdx)("b",null,"Data")),(0,t.mdx)("h3",{id:"graph-config-object"},"Graph Config object"),(0,t.mdx)(x.Z,{mdxType:"GraphConfig"}),(0,t.mdx)("h3",{id:"data-object"},"Data object"),(0,t.mdx)("h4",{id:"dataset-1"},"Dataset 1"),(0,t.mdx)(f.Z,{mdxType:"DataObject1"}),(0,t.mdx)("h4",{id:"dataset-2"},"Dataset 2"),(0,t.mdx)(v,{mdxType:"DataObject2"}),(0,t.mdx)("h4",{id:"dataset-3"},"Dataset 3"),(0,t.mdx)(G,{mdxType:"DataObject3"})))}N.isMDXComponent=!0}}]);