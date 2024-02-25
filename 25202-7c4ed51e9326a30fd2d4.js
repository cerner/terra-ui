"use strict";(self.webpackChunkterra_ui=self.webpackChunkterra_ui||[]).push([[25202],{28369:function(e,t,n){var a=n(24994);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(39139)),i=n(86006),o="Just use the old one inch brush. It is so important to do something every day that will make you happy.I sincerely wish for you every possible joy life could bring. Water is like me. It iss laaazy ... Boy, it always looks for the easiest way to do things\n\nWe are trying to teach you a technique here and how to use it. The least little bit can do so much. There we go.\n\nNo worries. No cares. Just float and wait for the wind to blow you around.These trees are so much fun. I get started on them and I have a hard time stopping. We wll make some happy little bushes here. Absolutely no pressure. You are just a whisper floating across a mountain. There are no limits in this world.A thin paint will stick to a thick paint.\n",l={key:"uid_1",label:{display:"Timeline A"},color:r.default.helpers.COLORS.BLUE,onClick:i.loadTimelinePopup,values:[{x:new Date(2016,0,1,1,30).toISOString(),content:o},{x:new Date(2016,0,1,2,15).toISOString(),content:o},{x:new Date(2016,0,1,3,15).toISOString(),content:o},{x:new Date(2016,0,1,4,15).toISOString(),content:o},{x:new Date(2016,0,1,5,15).toISOString(),content:o}]};t.default=l},53688:function(e,t,n){var a=n(24994);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(39139)),i=n(86006),o={key:"uid_2",label:{display:"Timeline B"},shape:r.default.helpers.SHAPES.DARK.RHOMBUS,color:r.default.helpers.COLORS.GREEN,onClick:i.loadTimelinePopup,values:[{x:new Date(2016,0,1,7,15).toISOString(),content:"This is custom value of another unit"},{x:new Date(2016,0,1,9,45).toISOString(),content:"This is custom value of another unit"},{x:new Date(2016,0,1,12).toISOString(),content:"This is custom value of another unit"}]};t.default=o},80568:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default=function(e){return{bindTo:e,bindLegendTo:null,axis:{x:{label:"Datetime",lowerLimit:new Date(2016,0,1,1,0).toISOString(),upperLimit:new Date(2016,0,1,15,59).toISOString(),ticks:{format:""}}},showLabel:!0,showLegend:!0}}},75527:function(e,t,n){var a=n(24994);t.A=void 0;var r=a(n(96540)),i=a(n(39139)),o=a(n(45839));n(14388),n(3929);var l=a(n(29683)),s=a(n(80568)),p=a(n(28369)),c=a(n(53688)),u=o.default.deepClone((0,s.default)("#axisWithNoTickValuesTimelineGraph")),d=[o.default.deepClone(p.default),o.default.deepClone(c.default)];t.A=function(){return r.default.useEffect((function(){var e=i.default.api.timeline(u);d.forEach((function(t){e.loadContent(t)}))}),[]),r.default.createElement(l.default,{id:"axisWithNoTickValuesTimelineGraph"})}},25202:function(e,t,n){n.r(t),n.d(t,{default:function(){return k}});var a=n(96540),r=n(36665),i=n(75527),o=["components"];function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},l.apply(this,arguments)}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p={};function c(e){var t=e.components,n=s(e,o);return(0,r.mdx)("wrapper",l({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport utils from '@cerner/carbon-graphs/lib/js/helpers/utils';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Graph.module.scss';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Timeline/Timeline.module.scss';\nimport ExampleGraphContainer from '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer';\nimport getTimelineConfig from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Timeline/timelineWithNoAxisTicksConfig';\nimport dataset1 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Timeline/defaultDataset1.js';\nimport dataset2 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Timeline/defaultDataset2.js';\n\n/*\nPlease refer to the documentation below to see the graphConfig and data objects\n*/\n\nconst graphConfig = utils.deepClone(getTimelineConfig('#axisWithNoTickValuesTimelineGraph'));\nconst dataset = [utils.deepClone(dataset1), utils.deepClone(dataset2)];\n\nconst AxisWithNoTickValuesTimelineExample = () => {\n  React.useEffect(() => {\n    const graph = Carbon.api.timeline(graphConfig);\n    dataset.forEach((data) => {\n      graph.loadContent(data);\n    });\n  }, []);\n  return (\n    <ExampleGraphContainer id=\"axisWithNoTickValuesTimelineGraph\" />\n  );\n};\n\nexport default AxisWithNoTickValuesTimelineExample;\n\n")))}c.isMDXComponent=!0;var u=n(201),d=n(10502),m=function(e){var t=e.title,n=e.description,r=e.isExpanded;return a.createElement(u.A,{title:t||"Axis With No Tick Values",description:n,example:a.createElement(i.A,null),exampleCssSrc:a.createElement(d.A,null),exampleSrc:a.createElement(c,null),isExpanded:r})},h=["components"];function f(){return f=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},f.apply(this,arguments)}function g(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b={},x="wrapper";function y(e){var t=e.components,n=g(e,h);return(0,r.mdx)(x,f({},b,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-js"},"const getTimelineConfig = (id) => ({\n  bindTo: id,\n  bindLegendTo: null,\n  axis: {\n    x: {\n      label: 'Datetime',\n      lowerLimit: new Date(2016, 0, 1, 1, 0).toISOString(),\n      upperLimit: new Date(2016, 0, 1, 15, 59).toISOString(),\n      ticks: {\n        format: '',\n      },\n    },\n  },\n  showLabel: true,\n  showLegend: true,\n});\n\nexport default getTimelineConfig;\n\n")))}y.isMDXComponent=!0;var O=n(3685),v=n(33721),w=["components"];function T(){return T=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},T.apply(this,arguments)}function j(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}n(27647);var S={},C="wrapper";function k(e){var t=e.components,n=j(e,w);return(0,r.mdx)(C,T({},S,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"timeline-axis-with-no-ticks"},"Timeline axis with no ticks"),(0,r.mdx)("p",null,"This is a basic timeline graph with no axis ticks."),(0,r.mdx)("h2",{id:"getting-started"},"Getting Started"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Install with ",(0,r.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"npm i @cerner/carbon-graphs --save-dev"))))),(0,r.mdx)("h2",{id:"usage"},"Usage"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/dist/js/carbon-graphs.js';\nimport '@cerner/carbon-graphs/dist/css/carbon-graphs.css';\n\n")),(0,r.mdx)("h2",{id:"example"},"Example"),(0,r.mdx)(m,{mdxType:"Timeline"}),(0,r.mdx)("details",null,(0,r.mdx)("summary",{style:{fontSize:24}},(0,r.mdx)("b",null,"Data")),(0,r.mdx)("h3",{id:"graph-config-object"},"Graph Config object"),(0,r.mdx)(y,{mdxType:"GraphConfig"}),(0,r.mdx)("h3",{id:"data-object"},"Data object"),(0,r.mdx)("h4",{id:"timeline-a-dataset"},"Timeline A Dataset"),(0,r.mdx)(O.A,{mdxType:"DataObject1"}),(0,r.mdx)("h4",{id:"timeline-b-dataset"},"Timeline B Dataset"),(0,r.mdx)(v.A,{mdxType:"DataObject2"})))}k.isMDXComponent=!0}}]);