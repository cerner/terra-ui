"use strict";(self.webpackChunkterra_ui=self.webpackChunkterra_ui||[]).push([[34374],{38116:function(e,a,t){var n=t(64836);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r=n(t(54520)),o=t(22678),i=t(5485),l={key:"uid_8",label:{display:"Data Label 8"},color:r.default.helpers.COLORS.GREEN,shape:r.default.helpers.SHAPES.DARK.X,onClick:o.loadPopup,legendOptions:{showLine:!0,showShape:!0},regions:[{axis:"y",start:2,end:10,color:"#f4f4f4"}],values:(0,i.createGraphValuesWithCos)({length:12,initialX:85,xModifier:17,yModifier:4*Math.PI})};a.default=l},47656:function(e,a,t){var n=t(64836);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r=n(t(54520)),o=t(22678),i=t(5485),l={key:"uid_9",label:{display:"Data Label 9"},color:r.default.helpers.COLORS.ORANGE,shape:r.default.helpers.SHAPES.DARK.SQUARE,onClick:o.loadPopup,yAxis:"y",legendOptions:{showLine:!0,showShape:!0},regions:[{axis:"y",start:2,end:10,color:"#f4f4f4"}],values:(0,i.createGraphValuesWithCos)({length:20,initialX:85,xModifier:10,yModifier:5*Math.PI})};a.default=l},18170:function(e,a){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var t=function(e){return{bindTo:e,bindLegendTo:null,axis:{x:{show:!0,label:"Data",lowerLimit:80,upperLimit:280},y:{show:!0,label:"Line Set A",lowerLimit:-18,upperLimit:18},y2:{show:!0,label:"Line Set B",lowerLimit:0,upperLimit:250}},showLabel:!0,showLegend:!0,showShapes:!0,showVGrid:!0,showHGrid:!0}};a.default=t},75691:function(e,a,t){var n=t(64836);a.Z=void 0;var r=n(t(67294)),o=n(t(54520)),i=n(t(53334));t(56867),t(39003);var l=n(t(93065)),s=n(t(18170)),d=n(t(38269)),p=n(t(38116)),c=n(t(47656)),u=i.default.deepClone((0,s.default)("#datasetRegionIdentical")),m=[i.default.deepClone(d.default),i.default.deepClone(p.default),i.default.deepClone(c.default)],f=function(){return r.default.useEffect((function(){var e=o.default.api.graph(u);m.forEach((function(a){e.loadContent(o.default.api.line(a))}))}),[]),r.default.createElement(l.default,{id:"datasetRegionIdentical"})};a.Z=f},7054:function(e,a,t){t.r(a),t.d(a,{default:function(){return w}});var n=t(67294),r=t(81254),o=t(75691),i=["components"];function l(){return l=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},l.apply(this,arguments)}function s(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var d={};function p(e){var a=e.components,t=s(e,i);return(0,r.mdx)("wrapper",l({},d,t,{components:a,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport utils from '@cerner/carbon-graphs/lib/js/helpers/utils';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Graph.module.scss';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Line/LineGraph.module.scss';\nimport ExampleGraphContainer from '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer';\nimport getLineDefaultY2Config from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Line/lineDefaultY2';\nimport exampleData1 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Line/datasetRegions1';\nimport exampleData2 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Line/datasetRegions8';\nimport exampleData3 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Line/datasetRegions9';\n\n/*\nPlease refer to the documentation below to see the graphConfig and data objects\n*/\n\nconst graphConfig = utils.deepClone(getLineDefaultY2Config('#datasetRegionIdentical'));\nconst dataset = [\n  utils.deepClone(exampleData1),\n  utils.deepClone(exampleData2),\n  utils.deepClone(exampleData3),\n];\n\nconst DatasetRegionIdenticalLineExample = () => {\n  React.useEffect(() => {\n    const graph = Carbon.api.graph(graphConfig);\n    dataset.forEach((data) => {\n      graph.loadContent(Carbon.api.line(data));\n    });\n  }, []);\n  return (\n    <ExampleGraphContainer id=\"datasetRegionIdentical\" />\n  );\n};\n\nexport default DatasetRegionIdenticalLineExample;\n\n\n")))}p.isMDXComponent=!0;var c=t(49271),u=t(25005),m=function(e){var a=e.title,t=e.description,r=e.isExpanded;return n.createElement(c.Z,{title:a||"Dataset Region Identical",description:t,example:n.createElement(o.Z,null),exampleCssSrc:n.createElement(u.Z,null),exampleSrc:n.createElement(p,null),isExpanded:r})},f=t(61775),h=t(74357);var g=["components"];function b(){return b=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},b.apply(this,arguments)}function x(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}t(51320);var y=function(e){return function(a){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.mdx)("div",a)}},v=y("DataObject2"),O=y("DataObject3"),j={},C="wrapper";function w(e){var a=e.components,t=x(e,g);return(0,r.mdx)(C,b({},j,t,{components:a,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"dataset-region-identical"},"Dataset region identical"),(0,r.mdx)("p",null,"This is multiline graph with an identical region associated with each line."),(0,r.mdx)("h2",{id:"getting-started"},"Getting Started"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Install with ",(0,r.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"npm i @cerner/carbon-graphs --save-dev"))))),(0,r.mdx)("h2",{id:"usage"},"Usage"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/dist/js/carbon-graphs.js';\nimport '@cerner/carbon-graphs/dist/css/carbon-graphs.css';\n")),(0,r.mdx)("h2",{id:"example"},"Example"),(0,r.mdx)(m,{mdxType:"LineGraph"}),(0,r.mdx)("details",null,(0,r.mdx)("summary",{style:{fontSize:24}},(0,r.mdx)("b",null,"Data")),(0,r.mdx)("h3",{id:"graph-config-object"},"Graph Config object"),(0,r.mdx)(f.Z,{mdxType:"GraphConfig"}),(0,r.mdx)("h3",{id:"data-object"},"Data object"),(0,r.mdx)("h4",{id:"dataset-1"},"Dataset 1"),(0,r.mdx)(h.Z,{mdxType:"DataObject1"}),(0,r.mdx)("h4",{id:"dataset-8"},"Dataset 8"),(0,r.mdx)(v,{mdxType:"DataObject2"}),(0,r.mdx)("h4",{id:"dataset-9"},"Dataset 9"),(0,r.mdx)(O,{mdxType:"DataObject3"})))}w.isMDXComponent=!0}}]);