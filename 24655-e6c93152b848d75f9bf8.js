"use strict";(self.webpackChunkterra_ui=self.webpackChunkterra_ui||[]).push([[24655],{14269:function(e,t,r){var a=r(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(r(54520)),i=r(22678),l={key:"uid_1",label:{display:"Data Label 1"},color:n.default.helpers.COLORS.BLACK,onClick:i.loadPopup,values:[{x:85,y:5},{x:90,y:11},{x:92,y:12,isCritical:!0},{x:101,y:16},{x:107,y:17},{x:107,y:9,isCritical:!0},{x:135,y:11},{x:139,y:12},{x:143,y:16},{x:155,y:17,isCritical:!0},{x:161,y:28},{x:164,y:12},{x:168,y:13},{x:170,y:14}]};t.default=l},2125:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=function(e){return{bindTo:e,bindLegendTo:null,axis:{x:{show:!0,label:"Data",lowerLimit:80,upperLimit:180},y:{show:!0,label:"Line Set A",lowerLimit:0,upperLimit:18},y2:{show:!1,label:"Line Set B",lowerLimit:0,upperLimit:250}},showLabel:!0,showLegend:!0,showShapes:!0,showVGrid:!0,showHGrid:!0}};t.default=r},76289:function(e,t,r){var a=r(64836);t.Z=void 0;var n=a(r(67294)),i=a(r(54520)),l=a(r(53334));r(56867),r(379);var o=a(r(93065)),p=a(r(2125)),s=a(r(14269)),c=l.default.deepClone((0,p.default)("#simpleCriticalScattergraph")),d=l.default.deepClone(s.default),m=function(){return n.default.useEffect((function(){i.default.api.graph(c).loadContent(i.default.api.scatter(d))}),[]),n.default.createElement(o.default,{id:"simpleCriticalScattergraph"})};t.Z=m},24655:function(e,t,r){r.r(t),r.d(t,{default:function(){return j}});var a=r(67294),n=r(81254),i=r(76289),l=["components"];function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},o.apply(this,arguments)}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s={},c="wrapper";function d(e){var t=e.components,r=p(e,l);return(0,n.mdx)(c,o({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport utils from '@cerner/carbon-graphs/lib/js/helpers/utils';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Graph.module.scss';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/PairedResult/PairedResultGraph.module.scss';\nimport ExampleGraphContainer from '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer';\nimport getGraphConfig from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Scatter/scatterDefault';\nimport exampleData from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Scatter/dataset1critical';\n\n/*\nPlease refer documentation below to see graphConfig and data objects.\n*/\n\nconst graphConfig = utils.deepClone(getGraphConfig('#simpleCriticalScattergraph'));\nconst dataset = utils.deepClone(exampleData);\n\nconst SimpleCriticalityScatterExample = () => {\n  React.useEffect(() => {\n    const graph = Carbon.api.graph(graphConfig);\n    graph.loadContent(Carbon.api.scatter(dataset));\n  }, []);\n  return (\n    <ExampleGraphContainer id=\"simpleCriticalScattergraph\" />\n  );\n};\n\nexport default SimpleCriticalityScatterExample;\n\n")))}d.isMDXComponent=!0;var m=r(49271),u=r(25005),f=function(e){var t=e.title,r=e.description,n=e.isExpanded;return a.createElement(m.Z,{title:t||"Simple",description:r,example:a.createElement(i.Z,null),exampleCssSrc:a.createElement(u.Z,null),exampleSrc:a.createElement(d,null),isExpanded:n})},h=r(81544),x=r(57433),g=["components"];function b(){return b=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},b.apply(this,arguments)}function y(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}r(51320);var C={},v="wrapper";function j(e){var t=e.components,r=y(e,g);return(0,n.mdx)(v,b({},C,r,{components:t,mdxType:"MDXLayout"}),(0,n.mdx)("h1",{id:"simple-scatter-graph"},"Simple Scatter Graph"),(0,n.mdx)("p",null,"This is Simple Scatter graph with critical points(highlighted with red circle) in it."),(0,n.mdx)("h2",{id:"getting-started"},"Getting Started"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"Install with ",(0,n.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("inlineCode",{parentName:"li"},"npm i @cerner/carbon-graphs --save-dev"))))),(0,n.mdx)("h2",{id:"usage"},"Usage"),(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/dist/js/carbon-graphs.js';\nimport '@cerner/carbon-graphs/dist/css/carbon-graphs.css';\n")),(0,n.mdx)("h2",{id:"example"},"Example"),(0,n.mdx)(f,{mdxType:"ScatterGraph"}),(0,n.mdx)("details",null,(0,n.mdx)("summary",{style:{fontSize:24}},(0,n.mdx)("b",null,"Example Data")),(0,n.mdx)("h3",{id:"graph-config-object"},"Graph Config object"),(0,n.mdx)(h.Z,{mdxType:"GraphConfig"}),(0,n.mdx)("h3",{id:"data-object"},"Data object"),(0,n.mdx)(x.Z,{mdxType:"DataObject"})))}j.isMDXComponent=!0}}]);