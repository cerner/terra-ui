"use strict";(self.webpackChunkterra_ui=self.webpackChunkterra_ui||[]).push([[75656,6204],{29416:function(e,r,t){var n=t(22411);Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var a=n(t(27320));r.default=function(e){return{bindTo:e,bindLegendTo:null,axis:{x:{show:!0,type:a.default.helpers.AXIS_TYPE.TIME_SERIES,label:"Data",lowerLimit:new Date(2016,0,1,0).toISOString(),upperLimit:new Date(2016,0,2,0).toISOString(),ticks:{values:[new Date(2016,0,1,3).toISOString(),new Date(2016,0,1,6).toISOString(),new Date(2016,0,1,9).toISOString(),new Date(2016,0,1,12).toISOString(),new Date(2016,0,1,15).toISOString()],format:"%H"}},y:{show:!0,label:"Bar Set A",lowerLimit:0,upperLimit:20},y2:{show:!1,label:"Line Set B",lowerLimit:0,upperLimit:20}},showLabel:!0,showLegend:!0,showShapes:!0,showVGrid:!1,showHGrid:!0,eventline:[{color:a.default.helpers.COLORS.GREY,style:{strokeDashArray:"4,4"},value:new Date(2016,0,1,6).toISOString()},{color:a.default.helpers.COLORS.BLACK,style:{strokeDashArray:"2,2"},value:new Date(2016,0,1,12).toISOString()}],clickPassThrough:{dateline:!1}}}},60308:function(e,r,t){var n=t(22411);r.c=void 0;var a=n(t(11504)),i=n(t(27320)),o=n(t(82452));t(20512),t(57732);var s=n(t(2884)),l=n(t(29416)),p=n(t(112)),c=o.default.deepClone((0,l.default)("#timeseriesBarWithEventline")),m=o.default.deepClone(p.default);r.c=function(){return a.default.useEffect((function(){i.default.api.graph(c).loadContent(i.default.api.bar(m))}),[]),a.default.createElement(s.default,{id:"timeseriesBarWithEventline"})}},20520:function(e,r,t){t.r(r),t.d(r,{default:function(){return w}});var n=t(11504),a=t(69788),i=t(60308),o=["components"];function s(){return s=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},s.apply(this,arguments)}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p={};function c(e){var r=e.components,t=l(e,o);return(0,a.mdx)("wrapper",s({},p,t,{components:r,mdxType:"MDXLayout"}),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport utils from '@cerner/carbon-graphs/lib/js/helpers/utils';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Graph.module.scss';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Bar/BarGraph.module.scss';\nimport ExampleGraphContainer from '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer';\nimport getBarConfig from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Bar/barTimeseriesEventline';\nimport exampleData from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Bar/datasetTimeseries1';\n\n/*\nPlease refer to the documentation below to see the graphConfig and data objects\n*/\n\nconst graphConfig = utils.deepClone(getBarConfig('#timeseriesBarWithEventline'));\nconst dataset = utils.deepClone(exampleData);\n\nexport default () => {\n  React.useEffect(() => {\n    const graph = Carbon.api.graph(graphConfig);\n    graph.loadContent(Carbon.api.bar(dataset));\n  }, []);\n\n  return (\n    <ExampleGraphContainer id=\"timeseriesBarWithEventline\" />\n  );\n};\n\n")))}c.isMDXComponent=!0;var m=t(33792),d=t(1208),u=function(e){var r=e.title,t=e.description,a=e.isExpanded;return n.createElement(m.c,{title:r||"Timeseries With Eventline",description:t,example:n.createElement(i.c,null),exampleCssSrc:n.createElement(d.c,null),exampleSrc:n.createElement(c,null),isExpanded:a})},h=t(23848),f=t(52876),g=["components"];function b(){return b=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},b.apply(this,arguments)}function x(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}t(78704);var v={},O="wrapper";function w(e){var r=e.components,t=x(e,g);return(0,a.mdx)(O,b({},v,t,{components:r,mdxType:"MDXLayout"}),(0,a.mdx)("h1",{id:"timeseries-bar-graph-with-eventline"},"Timeseries Bar Graph With EventLine"),(0,a.mdx)("p",null,"This is a timeseries bar graph with eventlines."),(0,a.mdx)("h2",{id:"getting-started"},"Getting Started"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},"Install with ",(0,a.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",(0,a.mdx)("ul",{parentName:"li"},(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"npm i @cerner/carbon-graphs --save-dev"))))),(0,a.mdx)("h2",{id:"usage"},"Usage"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-jsx"},"import Carbon from '@cerner/carbon-graphs/dist/js/carbon-graphs.js';\nimport '@cerner/carbon-graphs/dist/css/carbon-graphs.css';\n")),(0,a.mdx)("h2",{id:"examples"},"Examples"),(0,a.mdx)(u,{mdxType:"BarGraph"}),(0,a.mdx)("details",null,(0,a.mdx)("summary",{style:{fontSize:24}},(0,a.mdx)("b",null,"Data")),(0,a.mdx)("h3",{id:"graph-config-object"},"Graph Config object"),(0,a.mdx)(h.c,{mdxType:"GraphConfig"}),(0,a.mdx)("h3",{id:"data-object"},"Data object"),(0,a.mdx)(f.c,{mdxType:"DataObject"})))}w.isMDXComponent=!0}}]);