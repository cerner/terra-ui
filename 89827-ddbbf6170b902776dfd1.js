"use strict";(self.webpackChunkterra_ui=self.webpackChunkterra_ui||[]).push([[89827],{3987:function(e,n,t){var r=t(24994);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=r(t(39139)),o=t(86006),l=t(74013),i={key:"uid_2",label:{display:"Data Label 2"},color:a.default.helpers.COLORS.YELLOW,shape:a.default.helpers.SHAPES.DARK.SQUARE,onClick:o.loadPopup,values:(0,l.createGraphValuesWithCos)({length:20,initialX:85,xModifier:10,yModifier:5*Math.PI}),legendOptions:{showLine:!0,showShape:!0},regions:[{start:10,end:10,color:"#bcbfc0"}]};n.default=i},15116:function(e,n,t){var r=t(24994);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=r(t(39139)),o=t(86006),l=t(74013),i={key:"uid_3",label:{display:"Data Label 3"},shape:a.default.helpers.SHAPES.DARK.SQUARE,color:a.default.helpers.COLORS.ORANGE,onClick:o.loadPopup,values:(0,l.createGraphValuesWithCos)({length:20,initialX:85,xModifier:10,yModifier:Math.PI}),legendOptions:{showLine:!0,showShape:!0},regions:[{end:10}]};n.default=i},97698:function(e,n){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;n.default=function(e){return{bindTo:e,bindLegendTo:null,axis:{x:{show:!0,label:"Data",lowerLimit:80,upperLimit:280},y:{show:!0,label:"Line Set A",lowerLimit:-18,upperLimit:18},y2:{show:!0,label:"Line Set B",lowerLimit:0,upperLimit:250}},showLabel:!0,showLegend:!0,showShapes:!0,showVGrid:!0,showHGrid:!0}}},34332:function(e,n,t){var r=t(24994);n.A=void 0;var a=r(t(96540)),o=r(t(39139)),l=r(t(45839));t(14388),t(45633);var i=r(t(29683)),p=r(t(97698)),s=r(t(26870)),d=r(t(3987)),c=r(t(15116)),u=l.default.deepClone((0,p.default)("#multipleline")),m=[l.default.deepClone(s.default),l.default.deepClone(d.default),l.default.deepClone(c.default)];n.A=function(){return a.default.useEffect((function(){var e=o.default.api.graph(u);m.forEach((function(n){e.loadContent(o.default.api.line(n))}))}),[]),a.default.createElement(i.default,{id:"multipleline"})}},89827:function(e,n,t){t.r(n),t.d(n,{default:function(){return j}});var r=t(96540),a=t(36665),o=t(34332),l=["components"];function i(){return i=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},i.apply(this,arguments)}function p(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s={};function d(e){var n=e.components,t=p(e,l);return(0,a.mdx)("wrapper",i({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport utils from '@cerner/carbon-graphs/lib/js/helpers/utils';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Graph.module.scss';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Line/LineGraph.module.scss';\nimport ExampleGraphContainer from '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer';\nimport getLineDefaultY2Config from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Line/lineDefaultY2';\nimport exampleData1 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Line/datasetRegions1';\nimport exampleData2 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Line/datasetRegions2';\nimport exampleData3 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Line/datasetRegions3';\n\n/*\nPlease refer to the documentation below to see the graphConfig and data objects\n*/\n\nconst graphConfig = utils.deepClone(getLineDefaultY2Config('#multipleline'));\nconst dataset = [\n  utils.deepClone(exampleData1),\n  utils.deepClone(exampleData2),\n  utils.deepClone(exampleData3),\n];\n\nconst MultipleLineExample = () => {\n  React.useEffect(() => {\n    const graph = Carbon.api.graph(graphConfig);\n    dataset.forEach((data) => {\n      graph.loadContent(Carbon.api.line(data));\n    });\n  }, []);\n  return (\n    <ExampleGraphContainer id=\"multipleline\" />\n  );\n};\n\nexport default MultipleLineExample;\n\n\n")))}d.isMDXComponent=!0;var c=t(201),u=t(10502),m=function(e){var n=e.title,t=e.description,a=e.isExpanded;return r.createElement(c.A,{title:n||"Multiple Line Regions",description:t,example:r.createElement(o.A,null),exampleCssSrc:r.createElement(u.A,null),exampleSrc:r.createElement(d,null),isExpanded:a})},f=t(49462),h=t(17727),b=t(60964),g=t(13437),x=["components"];function O(){return O=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},O.apply(this,arguments)}function y(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}t(27647);var v={},C="wrapper";function j(e){var n=e.components,t=y(e,x);return(0,a.mdx)(C,O({},v,t,{components:n,mdxType:"MDXLayout"}),(0,a.mdx)("h1",{id:"multiple-line-regions"},"Multiple line regions"),(0,a.mdx)("p",null,"This is timeseries graph with region associated to each line."),(0,a.mdx)("h4",{id:"note-hover-onto-the-legend-to-see-the-region-associated-with-each-line"},"NOTE: Hover onto the legend to see the region associated with each line."),(0,a.mdx)("h2",{id:"getting-started"},"Getting Started"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},"Install with ",(0,a.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",(0,a.mdx)("ul",{parentName:"li"},(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"npm i @cerner/carbon-graphs --save-dev"))))),(0,a.mdx)("h2",{id:"usage"},"Usage"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/dist/js/carbon-graphs.js';\nimport '@cerner/carbon-graphs/dist/css/carbon-graphs.css';\n")),(0,a.mdx)("h2",{id:"example"},"Example"),(0,a.mdx)(m,{mdxType:"LineGraph"}),(0,a.mdx)("details",null,(0,a.mdx)("summary",{style:{fontSize:24}},(0,a.mdx)("b",null,"Data")),(0,a.mdx)("h3",{id:"graph-config-object"},"Graph Config object"),(0,a.mdx)(f.A,{mdxType:"GraphConfig"}),(0,a.mdx)("h4",{id:"dataset-1"},"Dataset 1"),(0,a.mdx)(h.A,{mdxType:"DataObject1"}),(0,a.mdx)("h4",{id:"dataset-2"},"Dataset 2"),(0,a.mdx)(b.A,{mdxType:"DataObject2"}),(0,a.mdx)("h4",{id:"dataset-3"},"Dataset 3"),(0,a.mdx)(g.A,{mdxType:"DataObject3"})))}j.isMDXComponent=!0},60964:function(e,n,t){t.d(n,{A:function(){return s}});t(96540);var r=t(36665),a=["components"];function o(){return o=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},o.apply(this,arguments)}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i={},p="wrapper";function s(e){var n=e.components,t=l(e,a);return(0,r.mdx)(p,o({},i,t,{components:n,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport { loadPopup } from '@cerner/terra-graphs-docs/lib/example-datasets/popup';\nimport { createGraphValuesWithCos } from '../createGraphValues';\n\nconst data = {\n  key: 'uid_2',\n  label: {\n    display: 'Data Label 2',\n  },\n  color: Carbon.helpers.COLORS.YELLOW,\n  shape: Carbon.helpers.SHAPES.DARK.SQUARE,\n  onClick: loadPopup,\n  values: createGraphValuesWithCos({\n    length: 20, initialX: 85, xModifier: 10, yModifier: Math.PI * 5,\n  }),\n  legendOptions: {\n    showLine: true,\n    showShape: true,\n  },\n  regions: [\n    {\n      start: 10,\n      end: 10,\n      color: '#bcbfc0',\n    },\n  ],\n};\n\nexport default data;\n\n")))}s.isMDXComponent=!0},13437:function(e,n,t){t.d(n,{A:function(){return s}});t(96540);var r=t(36665),a=["components"];function o(){return o=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},o.apply(this,arguments)}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i={},p="wrapper";function s(e){var n=e.components,t=l(e,a);return(0,r.mdx)(p,o({},i,t,{components:n,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport { loadPopup } from '@cerner/terra-graphs-docs/lib/example-datasets/popup';\nimport { createGraphValuesWithCos } from '../createGraphValues';\n\nconst data = {\n  key: 'uid_3',\n  label: {\n    display: 'Data Label 3',\n  },\n  shape: Carbon.helpers.SHAPES.DARK.SQUARE,\n  color: Carbon.helpers.COLORS.ORANGE,\n  onClick: loadPopup,\n  values: createGraphValuesWithCos({\n    length: 20, initialX: 85, xModifier: 10, yModifier: Math.PI,\n  }),\n  legendOptions: {\n    showLine: true,\n    showShape: true,\n  },\n  regions: [\n    {\n      end: 10,\n    },\n  ],\n};\n\nexport default data;\n\n")))}s.isMDXComponent=!0}}]);