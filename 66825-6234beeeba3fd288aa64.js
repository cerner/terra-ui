"use strict";(self.webpackChunkterra_ui=self.webpackChunkterra_ui||[]).push([[66825],{87063:function(e,n){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=function(e){return{bindTo:e,bindLegendTo:null,axis:{x:{show:!0,label:"Data",lowerLimit:80,upperLimit:280},y:{show:!0,label:"Line Set A",lowerLimit:-18,upperLimit:18},y2:{show:!1,label:"Line Set B",lowerLimit:0,upperLimit:250}},showLabel:!0,showLegend:!0,showShapes:!0,showVGrid:!0,showHGrid:!0}};n.default=r},10851:function(e,n,r){var t=r(64836);n.Z=void 0;var a=t(r(67294)),i=t(r(53334)),o=t(r(54520));r(56867),r(39003);var l=t(r(93065)),p=t(r(87063)),s=t(r(38269)),m=i.default.deepClone((0,p.default)("#simpleRegionLine")),c=i.default.deepClone(s.default),d=function(){return a.default.useEffect((function(){o.default.api.graph(m).loadContent(o.default.api.line(c))}),[]),a.default.createElement(l.default,{id:"simpleRegionLine"})};n.Z=d},66825:function(e,n,r){r.r(n),r.d(n,{default:function(){return v}});var t=r(67294),a=r(81254),i=r(10851),o=["components"];function l(){return l=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e},l.apply(this,arguments)}function p(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s={};function m(e){var n=e.components,r=p(e,o);return(0,a.mdx)("wrapper",l({},s,r,{components:n,mdxType:"MDXLayout"}),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport utils from '@cerner/carbon-graphs/lib/js/helpers/utils';\nimport Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Graph.module.scss';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Line/LineGraph.module.scss';\nimport ExampleGraphContainer from '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer';\nimport getLineDefaultConfig from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Line/lineDefault';\nimport exampleData from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Line/datasetRegions1';\n\n/*\nPlease refer to the documentation below to see the graphConfig and data objects\n*/\n\nconst graphConfig = utils.deepClone(getLineDefaultConfig('#simpleRegionLine'));\nconst dataset = utils.deepClone(exampleData);\n\nconst SimpleRegionLineExample = () => {\n  React.useEffect(() => {\n    const graph = Carbon.api.graph(graphConfig);\n    graph.loadContent(Carbon.api.line(dataset));\n  }, []);\n  return (\n    <ExampleGraphContainer id=\"simpleRegionLine\" />\n  );\n};\n\nexport default SimpleRegionLineExample;\n\n")))}m.isMDXComponent=!0;var c=r(49271),d=r(25005),u=function(e){var n=e.title,r=e.description,a=e.isExpanded;return t.createElement(c.Z,{title:n||"Simple",description:r,example:t.createElement(i.Z,null),exampleCssSrc:t.createElement(d.Z,null),exampleSrc:t.createElement(m,null),isExpanded:a})},f=r(61775),h=r(74357),g=["components"];function b(){return b=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e},b.apply(this,arguments)}function x(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}r(51320);var y={},j="wrapper";function v(e){var n=e.components,r=x(e,g);return(0,a.mdx)(j,b({},y,r,{components:n,mdxType:"MDXLayout"}),(0,a.mdx)("h1",{id:"simple"},"Simple"),(0,a.mdx)("p",null,"This is simple line graph associated with region."),(0,a.mdx)("h2",{id:"getting-started"},"Getting Started"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},"Install with ",(0,a.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",(0,a.mdx)("ul",{parentName:"li"},(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"npm i @cerner/carbon-graphs --save-dev"))))),(0,a.mdx)("h2",{id:"usage"},"Usage"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/dist/js/carbon-graphs.js';\nimport '@cerner/carbon-graphs/dist/css/carbon-graphs.css';\n")),(0,a.mdx)("h2",{id:"example"},"Example"),(0,a.mdx)(u,{mdxType:"LineGraph"}),(0,a.mdx)("details",null,(0,a.mdx)("summary",{style:{fontSize:24}},(0,a.mdx)("b",null,"Data")),(0,a.mdx)("h3",{id:"graph-config-object"},"Graph Config object"),(0,a.mdx)(f.Z,{mdxType:"GraphConfig"}),(0,a.mdx)("h3",{id:"data-object"},"Data object"),(0,a.mdx)(h.Z,{mdxType:"DataObject"})))}v.isMDXComponent=!0}}]);