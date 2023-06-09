"use strict";(self.webpackChunkterra_ui=self.webpackChunkterra_ui||[]).push([[85070],{46701:function(e,n){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var t=function(e,n){return{bindTo:e,bindLegendTo:n,axis:{x:{show:!0,label:"Data",lowerLimit:80,upperLimit:280},y:{show:!0,label:"Line Set A",lowerLimit:-18,upperLimit:18},y2:{show:!1,label:"Line Set B",lowerLimit:0,upperLimit:250}},showLabel:!0,showLegend:!0,showShapes:!0,showVGrid:!0,showHGrid:!0}};n.default=t},4784:function(e,n,t){var a=t(64836);n.Z=void 0;var r=a(t(67294)),o=a(t(54520)),l=a(t(53334));t(56867),t(39003),t(80244);var i=a(t(46701)),s=a(t(20326)),d=a(t(10507)),p=a(t(14450)),c=l.default.deepClone((0,i.default)("#graphContainer","#legendContainer")),m=[l.default.deepClone(s.default),l.default.deepClone(d.default),l.default.deepClone(p.default)],u=function(){return r.default.useEffect((function(){var e=o.default.api.graph(c);m.forEach((function(n){e.loadContent(o.default.api.line(n))}))}),[]),r.default.createElement("div",{id:"customLegendPlacement"},r.default.createElement("div",{id:"tooltip",className:"initial-tooltip"}),r.default.createElement("div",{className:"bindto-container"},r.default.createElement("div",{id:"legendContainer",className:"legend-bindto-container"}),r.default.createElement("div",{id:"graphContainer",className:"legend-bindto-graph-container"})),r.default.createElement("div",{id:"graphContainer"}))};n.Z=u},85070:function(e,n,t){t.r(n),t.d(n,{default:function(){return j}});var a=t(67294),r=t(81254),o=t(4784),l=["components"];function i(){return i=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},i.apply(this,arguments)}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var d={};function p(e){var n=e.components,t=s(e,l);return(0,r.mdx)("wrapper",i({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport utils from '@cerner/carbon-graphs/lib/js/helpers/utils';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Graph.module.scss';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Line/LineGraph.module.scss';\nimport '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer.module.scss';\nimport getGraphConfig from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/General/generalDefaultCustomLegendPlacement';\nimport exampleData1 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/General/dataset1';\nimport exampleData2 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/General/dataset2';\nimport exampleData3 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/General/dataset3';\n\n/*\nPlease refer to the documentation below to see the graphConfig and data objects\n*/\n\nconst graphConfig = utils.deepClone(getGraphConfig('#graphContainer', '#legendContainer'));\nconst dataset = [\n  utils.deepClone(exampleData1),\n  utils.deepClone(exampleData2),\n  utils.deepClone(exampleData3),\n];\n\nconst CustomLegendPlacementGeneralExample = () => {\n  React.useEffect(() => {\n    const graph = Carbon.api.graph(graphConfig);\n    dataset.forEach((data) => {\n      graph.loadContent(Carbon.api.line(data));\n    });\n  }, []);\n  return (\n    <div id=\"customLegendPlacement\">\n      <div id=\"tooltip\" className=\"initial-tooltip\" />\n      <div className=\"bindto-container\">\n        <div id=\"legendContainer\" className=\"legend-bindto-container\" />\n        <div id=\"graphContainer\" className=\"legend-bindto-graph-container\" />\n      </div>\n      <div id=\"graphContainer\" />\n    </div>\n  );\n};\n\nexport default CustomLegendPlacementGeneralExample;\n\n\n")))}p.isMDXComponent=!0;var c=t(49271),m=t(25005),u=function(e){var n=e.title,t=e.description,r=e.isExpanded;return a.createElement(c.Z,{title:n||"Custom Legend Placement",description:t,example:a.createElement(o.Z,null),exampleCssSrc:a.createElement(m.Z,null),exampleSrc:a.createElement(p,null),isExpanded:r})},f=t(11598),g=t(45494),h=["components"];function b(){return b=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},b.apply(this,arguments)}function x(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}t(51320);var C={},v="wrapper";function j(e){var n=e.components,t=x(e,h);return(0,r.mdx)(v,b({},C,t,{components:n,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"custom-legend-placement"},"Custom legend placement"),(0,r.mdx)("p",null,"This is timeseries line graph with custom legend placement."),(0,r.mdx)("h2",{id:"getting-started"},"Getting Started"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Install with ",(0,r.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"npm i @cerner/carbon-graphs --save-dev"))))),(0,r.mdx)("h2",{id:"usage"},"Usage"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/dist/js/carbon-graphs.js';\nimport '@cerner/carbon-graphs/dist/css/carbon-graphs.css';\n")),(0,r.mdx)("h2",{id:"example"},"Example"),(0,r.mdx)(u,{mdxType:"LineGraph"}),(0,r.mdx)("details",null,(0,r.mdx)("summary",{style:{fontSize:24}},(0,r.mdx)("b",null,"Data")),(0,r.mdx)("h3",{id:"graph-config-object"},"Graph Config object"),(0,r.mdx)(f.Z,{mdxType:"GraphConfig"}),(0,r.mdx)("h3",{id:"data-object"},"Data object"),(0,r.mdx)(g.Z,{mdxType:"DataObject"})))}j.isMDXComponent=!0}}]);