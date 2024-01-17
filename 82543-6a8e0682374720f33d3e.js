"use strict";(self.webpackChunkterra_ui=self.webpackChunkterra_ui||[]).push([[82543],{30630:function(e,n){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;n.default=function(e,n){return{bindTo:e,bindLegendTo:n,axis:{x:{show:!0,label:"Data",lowerLimit:80,upperLimit:280},y:{show:!0,label:"Line Set A",lowerLimit:-18,upperLimit:18},y2:{show:!1,label:"Line Set B",lowerLimit:0,upperLimit:250}},legendPadding:!0,removeContainerPadding:{left:2.5,right:2.5,top:2.5,bottom:2.5},showLabel:!0,showLegend:!0,showShapes:!0,showVGrid:!0,showHGrid:!0}}},46466:function(e,n,a){var t=a(64836);n.Z=void 0;var r=t(a(67294)),i=t(a(54520)),o=t(a(53334));a(56867),a(39003),a(80244);var d=t(a(30630)),l=t(a(20326)),s=t(a(10507)),p=t(a(14450)),c=o.default.deepClone((0,d.default)("#graphContainer","#legendContainer")),m=[o.default.deepClone(l.default),o.default.deepClone(s.default),o.default.deepClone(p.default)];n.Z=function(){return r.default.useEffect((function(){var e=i.default.api.graph(c);m.forEach((function(n){e.loadContent(i.default.api.line(n))}))}),[]),r.default.createElement("div",{id:"graphAndLegendPaddingReduced",className:"custom-container-legend-style"},r.default.createElement("div",{id:"tooltip",className:"initial-tooltip"}),r.default.createElement("div",{className:"bindto-container"},r.default.createElement("div",{id:"legendContainer",className:"legend-bindto-container"}),r.default.createElement("div",{id:"graphContainer",className:"legend-bindto-graph-container"})),r.default.createElement("div",{id:"graphContainer"}))}},82543:function(e,n,a){a.r(n),a.d(n,{default:function(){return y}});var t=a(67294),r=a(81254),i=a(46466),o=["components"];function d(){return d=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var a=arguments[n];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(e[t]=a[t])}return e},d.apply(this,arguments)}function l(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s={};function p(e){var n=e.components,a=l(e,o);return(0,r.mdx)("wrapper",d({},s,a,{components:n,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport utils from '@cerner/carbon-graphs/lib/js/helpers/utils';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Graph.module.scss';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Line/LineGraph.module.scss';\nimport '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer.module.scss';\nimport getGraphConfig from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/General/generalDefaultCustomLegend';\nimport exampleData1 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/General/dataset1';\nimport exampleData2 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/General/dataset2';\nimport exampleData3 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/General/dataset3';\n\n/*\nPlease refer to the documentation below to see the graphConfig and data objects\n*/\n\nconst graphConfig = utils.deepClone(getGraphConfig('#graphContainer', '#legendContainer'));\nconst dataset = [\n  utils.deepClone(exampleData1),\n  utils.deepClone(exampleData2),\n  utils.deepClone(exampleData3),\n];\n\nconst GraphAndLegendPaddingReducedGeneralExample = () => {\n  React.useEffect(() => {\n    const graph = Carbon.api.graph(graphConfig);\n    dataset.forEach((data) => {\n      graph.loadContent(Carbon.api.line(data));\n    });\n  }, []);\n  return (\n    <div id=\"graphAndLegendPaddingReduced\" className=\"custom-container-legend-style\">\n      <div id=\"tooltip\" className=\"initial-tooltip\" />\n      <div className=\"bindto-container\">\n        <div id=\"legendContainer\" className=\"legend-bindto-container\" />\n        <div id=\"graphContainer\" className=\"legend-bindto-graph-container\" />\n      </div>\n      <div id=\"graphContainer\" />\n    </div>\n  );\n};\n\nexport default GraphAndLegendPaddingReducedGeneralExample;\n\n")))}p.isMDXComponent=!0;var c=a(49271),m=a(25005),u=function(e){var n=e.title,a=e.description,r=e.isExpanded;return t.createElement(c.Z,{title:n||"Graph And Legend Padding Reduced",description:a,example:t.createElement(i.Z,null),exampleCssSrc:t.createElement(m.Z,null),exampleSrc:t.createElement(p,null),isExpanded:r})},g=a(11598),f=a(45494),h=["components"];function b(){return b=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var a=arguments[n];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(e[t]=a[t])}return e},b.apply(this,arguments)}function x(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}a(51320);var v={},C="wrapper";function y(e){var n=e.components,a=x(e,h);return(0,r.mdx)(C,b({},v,a,{components:n,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"custom-legend-placement"},"Custom legend placement"),(0,r.mdx)("p",null,"This is timeseries line graph with reduced padding."),(0,r.mdx)("h2",{id:"getting-started"},"Getting Started"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Install with ",(0,r.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"npm i @cerner/carbon-graphs --save-dev"))))),(0,r.mdx)("h2",{id:"usage"},"Usage"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/dist/js/carbon-graphs.js';\nimport '@cerner/carbon-graphs/dist/css/carbon-graphs.css';\n")),(0,r.mdx)("h2",{id:"example"},"Example"),(0,r.mdx)(u,{mdxType:"LineGraph"}),(0,r.mdx)("details",null,(0,r.mdx)("summary",{style:{fontSize:24}},(0,r.mdx)("b",null,"Data")),(0,r.mdx)("h3",{id:"graph-config-object"},"Graph Config object"),(0,r.mdx)(g.Z,{mdxType:"GraphConfig"}),(0,r.mdx)("h3",{id:"data-object"},"Data object"),(0,r.mdx)(f.Z,{mdxType:"DataObject"})))}y.isMDXComponent=!0}}]);