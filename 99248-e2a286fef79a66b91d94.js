"use strict";(self.webpackChunkterra_ui=self.webpackChunkterra_ui||[]).push([[99248],{84219:function(e,n,t){var a=t(24994);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=a(t(39139)),l=t(86006),i={key:"uid_1",label:{display:"Data Label 1"},shape:r.default.helpers.SHAPES.DARK.CIRCLE,onClick:l.loadPopup,values:[{x:new Date(2016,0,1,1,5).toISOString(),y:5},{x:new Date(2016,0,1,2,15).toISOString(),y:11},{x:new Date(2016,0,1,3,15).toISOString(),y:12},{x:new Date(2016,0,1,4,15).toISOString(),y:16},{x:new Date(2016,0,1,5,15).toISOString(),y:17},{x:new Date(2016,0,1,6,15).toISOString(),y:9},{x:new Date(2016,0,1,7,0).toISOString(),y:11},{x:new Date(2016,0,1,8,15).toISOString(),y:12},{x:new Date(2016,0,1,9,45).toISOString(),y:16},{x:new Date(2016,0,1,12,15).toISOString(),y:17},{x:new Date(2016,0,1,13,15).toISOString(),y:28},{x:new Date(2016,0,1,14,15).toISOString(),y:12},{x:new Date(2016,0,1,19,45).toISOString(),y:13},{x:new Date(2016,0,1,21,15).toISOString(),y:14}],yAxis:"y"};n.default=i},93414:function(e,n,t){var a=t(24994);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=a(t(39139));n.default=function(e){return{bindTo:e,axis:{x:{type:r.default.helpers.AXIS_TYPE.TIME_SERIES,label:"Datetime",lowerLimit:new Date(2016,0,1,1,0).toISOString(),upperLimit:new Date(2016,0,1,23,59).toISOString()},y:{label:"Line Set A",lowerLimit:10,upperLimit:30},y2:{show:!1,label:"Line Set B",lowerLimit:0,upperLimit:250}},showLabel:!0,showLegend:!0,showShapes:!0,showVGrid:!0,showHGrid:!0}}},44719:function(e,n,t){var a=t(24994);n.A=void 0;var r=a(t(96540)),l=a(t(39139)),i=a(t(45839));t(14388),t(45633);var m=a(t(29683)),d=a(t(32213)),p=a(t(68959)),o=i.default.deepClone((0,d.default)("#simpleLinegraph")),s=i.default.deepClone(p.default);n.A=function(){return r.default.useEffect((function(){l.default.api.graph(o).loadContent(l.default.api.line(s))}),[]),r.default.createElement(m.default,{id:"simpleLinegraph"})}},2203:function(e,n,t){var a=t(24994);n.A=void 0;var r=a(t(96540)),l=a(t(39139)),i=a(t(45839));t(14388),t(45633);var m=a(t(29683)),d=a(t(93414)),p=a(t(84219)),o=i.default.deepClone((0,d.default)("#lineTimeseries")),s=i.default.deepClone(p.default);n.A=function(){return r.default.useEffect((function(){l.default.api.graph(o).loadContent(l.default.api.line(s))}),[]),r.default.createElement(m.default,{id:"lineTimeseries"})}},99248:function(e,n,t){t.r(n),t.d(n,{default:function(){return I}});var a=t(96540),r=t(36665),l=t(44719),i=["components"];function m(){return m=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},m.apply(this,arguments)}function d(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p={};function o(e){var n=e.components,t=d(e,i);return(0,r.mdx)("wrapper",m({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport utils from '@cerner/carbon-graphs/lib/js/helpers/utils';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Graph.module.scss';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Line/LineGraph.module.scss';\nimport ExampleGraphContainer from '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer';\nimport getLineDefaultConfig from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Line/lineDefault';\nimport exampleData from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Line/dataset1';\n\n/*\nPlease refer to the documentation below to see the graphConfig and data objects\n*/\n\nconst graphConfig = utils.deepClone(getLineDefaultConfig('#simpleLinegraph'));\nconst dataset = utils.deepClone(exampleData);\n\nconst SimpleLineExample = () => {\n  React.useEffect(() => {\n    const graph = Carbon.api.graph(graphConfig);\n    graph.loadContent(Carbon.api.line(dataset));\n  }, []);\n\n  return (\n    <ExampleGraphContainer id=\"simpleLinegraph\" />\n  );\n};\n\nexport default SimpleLineExample;\n\n")))}o.isMDXComponent=!0;var s=t(201),u=t(10502),x=function(e){var n=e.title,t=e.description,r=e.isExpanded;return a.createElement(s.A,{title:n||"Simple Line",description:t,example:a.createElement(l.A,null),exampleCssSrc:a.createElement(u.A,null),exampleSrc:a.createElement(o,null),isExpanded:r})},g=t(49462),c=t(99792),h=t(2203),N=["components"];function f(){return f=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},f.apply(this,arguments)}function b(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var y={};function S(e){var n=e.components,t=b(e,N);return(0,r.mdx)("wrapper",f({},y,t,{components:n,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport utils from '@cerner/carbon-graphs/lib/js/helpers/utils';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Graph.module.scss';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Line/LineGraph.module.scss';\nimport ExampleGraphContainer from '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer';\nimport getLineTimeseriesConfig from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Line/lineTimeseries';\nimport exampleData from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Line/datasetTimeseries1';\n\n/*\nPlease refer to the documentation below to see the graphConfig and data objects\n*/\n\nconst graphConfig = utils.deepClone(getLineTimeseriesConfig('#lineTimeseries'));\nconst dataset = utils.deepClone(exampleData);\n\nconst LineTimeseriesExample = () => {\n  React.useEffect(() => {\n    const graph = Carbon.api.graph(graphConfig);\n    graph.loadContent(Carbon.api.line(dataset));\n  }, []);\n\n  return (\n    <ExampleGraphContainer id=\"lineTimeseries\" />\n  );\n};\n\nexport default LineTimeseriesExample;\n\n\n")))}S.isMDXComponent=!0;var w=function(e){var n=e.title,t=e.description,r=e.isExpanded;return a.createElement(s.A,{title:n||"Timeseries",description:t,example:a.createElement(h.A,null),exampleCssSrc:a.createElement(u.A,null),exampleSrc:a.createElement(S,null),isExpanded:r})},O=t(15423),C=t(55020),v=["components"];function D(){return D=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},D.apply(this,arguments)}function j(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}t(27647);var L={},E="wrapper";function I(e){var n=e.components,t=j(e,v);return(0,r.mdx)(E,D({},L,t,{components:n,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"line"},"Line"),(0,r.mdx)("p",null,"A native line graph using D3 based on standard design patterns."),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"#line"},"Line"),(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"#getting-started"},"Getting Started")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"#usage"},"Usage")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"#configuration-structure"},"Configuration Structure")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"#configuration-properties"},"Configuration properties")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"#dataset-structure"},"Dataset Structure"),(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"#line-graph"},"Line graph")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"#spline-graph"},"Spline graph")))),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"#dataset-properties"},"Dataset Properties"),(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"#style"},"Style")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"#legendoptions"},"Legend Options")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"#values"},"Values")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"#regions"},"Regions")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"#constraints"},"Constraints")))),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"#examples"},"Examples"))))),(0,r.mdx)("h2",{id:"getting-started"},"Getting Started"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Install with ",(0,r.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"npm i @cerner/carbon-graphs --save-dev"))))),(0,r.mdx)("h2",{id:"usage"},"Usage"),(0,r.mdx)("p",null,"An instance of Line graph is obtained as follows:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-js"},"Carbon.api.line(/* dataset */)\n")),(0,r.mdx)("p",null,"A Line graph can be plotted as follows:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/dist/js/carbon-graphs.js';\nimport '@cerner/carbon-graphs/dist/css/carbon-graphs.css';\nconst graph = Carbon.api.graph(/* graph config JSON */);\ngraph.loadContent(Carbon.api.line(/* dataset 1 */));\n\n// Multiple datasets can be added:\ngraph.loadContent(Carbon.api.line(/* dataset 1 */));\ngraph.loadContent(Carbon.api.line(/* dataset 2 */));\n")),(0,r.mdx)("h2",{id:"configuration-structure"},"Configuration Structure"),(0,r.mdx)("p",null,"You will ",(0,r.mdx)("strong",{parentName:"p"},"not")," need all the properties in the example below.\nCheck ",(0,r.mdx)("a",{parentName:"p",href:"../core-configuration/Documentation/Graph"},"Graph")," for graph configuration properties."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-js"},"var root = {\n    bindTo: <String>,\n    axis: {\n        x: {\n            type: <string>,\n            label: <string>,\n            lowerLimit: <number> or <Date>,\n            upperLimit: <number> or <Date>,\n        },\n        y: {\n            label: <string>,\n            lowerLimit: <number>,\n            upperLimit: <number>,\n        },\n        y2: {\n            show: <bool>,\n            label: <string>,\n            lowerLimit: <number>,\n            upperLimit: <number>,\n        }\n    },\n    dateline: [\n        {\n            showDatelineIndicator: <bool>,\n            label: {\n                display: <string>\n            },\n            color: <hex value as string>,\n            shape: <shape SVG>,\n            onClick: <function>,\n            value: <date object>\n        }\n    ],\n    clickPassThrough: {\n        datelines: <bool>\n    },\n    showLabel: <bool>,\n    showLegend: <bool>,\n    showShapes: <bool>,\n    showVGrid: <bool>,\n    showHGrid: <bool>,\n};\n")),(0,r.mdx)("h2",{id:"configuration-properties"},"Configuration Properties"),(0,r.mdx)("p",null,"See ",(0,r.mdx)("a",{parentName:"p",href:"../core-configuration/documentation/graph"},"Graph")," for graph configuration properties."),(0,r.mdx)("h2",{id:"dataset-structure"},"Dataset Structure"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("h3",{parentName:"li",id:"line-graph"},"Line graph"),(0,r.mdx)("pre",{parentName:"li"},(0,r.mdx)("code",{parentName:"pre",className:"language-js"},'   var data = {\n       key: <string>,\n       label: {\n           display: <string>,\n       },\n       style: <object>,\n       regions: [\n           {\n               axis: <"y" or "y2">,\n               start: <number>,\n               end: <number>,\n               color: <hex value as string>,\n           }\n       ],\n       shape: <shape SVG>,\n       color: <hex value as string>,\n       onClick: <function>,\n       values: [\n           {\n               x: <number> or <Date>,\n               y: <number>,\n           },\n           {\n               x: <number> or <Date>,\n               y: <number>,\n               isCritical: <bool>\n           },\n       ]\n   };\n'))),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("h3",{parentName:"li",id:"spline-graph"},"Spline graph"),(0,r.mdx)("p",{parentName:"li"},"  For a Spline Graph you can use the same ",(0,r.mdx)("a",{parentName:"p",href:"#usage"},"syntax")," as a line graph and load content as follows:"),(0,r.mdx)("pre",{parentName:"li"},(0,r.mdx)("code",{parentName:"pre",className:"language-js"},'   var splineData = {\n       key: <string>,\n       label: {\n           display: <string>\n       },\n       type: <"SPLINE"> or <"LINEAR">, //SPLINE should be used to create SPLINE graph.\n       values: [\n           {\n               x: <number> or <Date>,\n               y: <number>,\n           },\n           {\n               x: <number> or <Date>,\n               y: <number>,\n           },\n       ]\n   };\n')))),(0,r.mdx)("h2",{id:"dataset-properties"},"Dataset Properties"),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Property Name"),(0,r.mdx)("th",{parentName:"tr",align:null},"Type"),(0,r.mdx)("th",{parentName:"tr",align:null},"Required"),(0,r.mdx)("th",{parentName:"tr",align:null},"Default"),(0,r.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"key"),(0,r.mdx)("td",{parentName:"tr",align:null},"string"),(0,r.mdx)("td",{parentName:"tr",align:null},"yes"),(0,r.mdx)("td",{parentName:"tr",align:null},"-"),(0,r.mdx)("td",{parentName:"tr",align:null},"A unique ",(0,r.mdx)("inlineCode",{parentName:"td"},"id")," to identify the dataset. Adding two datasets with the same ",(0,r.mdx)("inlineCode",{parentName:"td"},"key")," will result in an error.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"values"),(0,r.mdx)("td",{parentName:"tr",align:null},"Array"),(0,r.mdx)("td",{parentName:"tr",align:null},"yes"),(0,r.mdx)("td",{parentName:"tr",align:null},"-"),(0,r.mdx)("td",{parentName:"tr",align:null},"See ",(0,r.mdx)("a",{parentName:"td",href:"#values"},"Values"),".")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"color"),(0,r.mdx)("td",{parentName:"tr",align:null},"string"),(0,r.mdx)("td",{parentName:"tr",align:null},"no"),(0,r.mdx)("td",{parentName:"tr",align:null},"COLORS.BLACK"),(0,r.mdx)("td",{parentName:"tr",align:null},"Color for the data points. Can be a hex value (",(0,r.mdx)("inlineCode",{parentName:"td"},"#ffffff"),") or a constant from ",(0,r.mdx)("a",{parentName:"td",href:"../core-configuration/documentation/colors"},"colors"),".")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"label"),(0,r.mdx)("td",{parentName:"tr",align:null},"object"),(0,r.mdx)("td",{parentName:"tr",align:null},"no"),(0,r.mdx)("td",{parentName:"tr",align:null},"{}"),(0,r.mdx)("td",{parentName:"tr",align:null},"Label for the dataset in the Legend. If it is not provided then it will not be shown in the legend.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"legendOptions"),(0,r.mdx)("td",{parentName:"tr",align:null},"object"),(0,r.mdx)("td",{parentName:"tr",align:null},"no"),(0,r.mdx)("td",{parentName:"tr",align:null},"undefined"),(0,r.mdx)("td",{parentName:"tr",align:null},"Toggle to show shape, line and legend. See ",(0,r.mdx)("a",{parentName:"td",href:"#legendoptions"},"LegendOptions"),".")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"onClick"),(0,r.mdx)("td",{parentName:"tr",align:null},"Function"),(0,r.mdx)("td",{parentName:"tr",align:null},"no"),(0,r.mdx)("td",{parentName:"tr",align:null},"undefined"),(0,r.mdx)("td",{parentName:"tr",align:null},"Function to execute upon clicking a datapoint, such as, to display a popup.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"regions"),(0,r.mdx)("td",{parentName:"tr",align:null},"array"),(0,r.mdx)("td",{parentName:"tr",align:null},"no"),(0,r.mdx)("td",{parentName:"tr",align:null},"[]"),(0,r.mdx)("td",{parentName:"tr",align:null},"See ",(0,r.mdx)("a",{parentName:"td",href:"#regions"},"Regions"),".")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"shape"),(0,r.mdx)("td",{parentName:"tr",align:null},"string"),(0,r.mdx)("td",{parentName:"tr",align:null},"no"),(0,r.mdx)("td",{parentName:"tr",align:null},"SHAPES.DARK.CIRCLE"),(0,r.mdx)("td",{parentName:"tr",align:null},"Shape for representing the data points.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"style"),(0,r.mdx)("td",{parentName:"tr",align:null},"object"),(0,r.mdx)("td",{parentName:"tr",align:null},"no"),(0,r.mdx)("td",{parentName:"tr",align:null},"{}"),(0,r.mdx)("td",{parentName:"tr",align:null},"Any style that can be applied. See ",(0,r.mdx)("a",{parentName:"td",href:"#style"},"styles"),".")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"showShapes"),(0,r.mdx)("td",{parentName:"tr",align:null},"boolean"),(0,r.mdx)("td",{parentName:"tr",align:null},"no"),(0,r.mdx)("td",{parentName:"tr",align:null},"true"),(0,r.mdx)("td",{parentName:"tr",align:null},"Option to show/hide shapes per data set. This option overrides the graph's showShapes property.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"type"),(0,r.mdx)("td",{parentName:"tr",align:null},"string"),(0,r.mdx)("td",{parentName:"tr",align:null},"no"),(0,r.mdx)("td",{parentName:"tr",align:null},"LINE_TYPE.LINEAR"),(0,r.mdx)("td",{parentName:"tr",align:null},"Nature of line that needs to be drawn (Linear or Cardinal).")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"yAxis"),(0,r.mdx)("td",{parentName:"tr",align:null},"string"),(0,r.mdx)("td",{parentName:"tr",align:null},"no"),(0,r.mdx)("td",{parentName:"tr",align:null},'"y"'),(0,r.mdx)("td",{parentName:"tr",align:null},"Function to execute upon clicking a datapoint, such as, to display a popup.")))),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("h3",{parentName:"li",id:"style"},(0,r.mdx)("inlineCode",{parentName:"h3"},"style")),(0,r.mdx)("p",{parentName:"li"},"  Each line can have a style object in the ",(0,r.mdx)("a",{parentName:"p",href:"#values"},"values")," level."),(0,r.mdx)("pre",{parentName:"li"},(0,r.mdx)("code",{parentName:"pre",className:"language-js"},"   style: { strokeDashArray: '2,2' },\n")),(0,r.mdx)("table",{parentName:"li"},(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Property Name"),(0,r.mdx)("th",{parentName:"tr",align:null},"Type"),(0,r.mdx)("th",{parentName:"tr",align:null},"Required"),(0,r.mdx)("th",{parentName:"tr",align:null},"Default"),(0,r.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"strokeDashArray"),(0,r.mdx)("td",{parentName:"tr",align:null},"string"),(0,r.mdx)("td",{parentName:"tr",align:null},"no"),(0,r.mdx)("td",{parentName:"tr",align:null},'"0"'),(0,r.mdx)("td",{parentName:"tr",align:null},"Applies stroke-dasharray CSS property to the SVG line.")))))),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("h3",{parentName:"li",id:"legendoptions"},(0,r.mdx)("inlineCode",{parentName:"h3"},"legendOptions")),(0,r.mdx)("p",{parentName:"li"},"  Each line can have a legendOptions object in ",(0,r.mdx)("a",{parentName:"p",href:"#values"},"Values")," level."),(0,r.mdx)("pre",{parentName:"li"},(0,r.mdx)("code",{parentName:"pre",className:"language-js"},"  legendOptions: {\n    showLine: <bool>,\n    showShape: <bool>,\n    style: <object>,\n  },\n")),(0,r.mdx)("table",{parentName:"li"},(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Property Name"),(0,r.mdx)("th",{parentName:"tr",align:null},"Type"),(0,r.mdx)("th",{parentName:"tr",align:null},"Required"),(0,r.mdx)("th",{parentName:"tr",align:null},"Default"),(0,r.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"showLine"),(0,r.mdx)("td",{parentName:"tr",align:null},"boolean"),(0,r.mdx)("td",{parentName:"tr",align:null},"no"),(0,r.mdx)("td",{parentName:"tr",align:null},"false"),(0,r.mdx)("td",{parentName:"tr",align:null},"Toggle to display the line in the legend.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"showShape"),(0,r.mdx)("td",{parentName:"tr",align:null},"boolean"),(0,r.mdx)("td",{parentName:"tr",align:null},"no"),(0,r.mdx)("td",{parentName:"tr",align:null},"true"),(0,r.mdx)("td",{parentName:"tr",align:null},"Toggle to display the shape in the legend.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"style"),(0,r.mdx)("td",{parentName:"tr",align:null},"object"),(0,r.mdx)("td",{parentName:"tr",align:null},"no"),(0,r.mdx)("td",{parentName:"tr",align:null},"{}"),(0,r.mdx)("td",{parentName:"tr",align:null},"Any style that can be applied. See ",(0,r.mdx)("a",{parentName:"td",href:"#style"},"styles"),".")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"showElement"),(0,r.mdx)("td",{parentName:"tr",align:null},"boolean"),(0,r.mdx)("td",{parentName:"tr",align:null},"no"),(0,r.mdx)("td",{parentName:"tr",align:null},"true"),(0,r.mdx)("td",{parentName:"tr",align:null},"Toggle to hide legend when legend item has no data."))))),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("h3",{parentName:"li",id:"values"},(0,r.mdx)("inlineCode",{parentName:"h3"},"values")),(0,r.mdx)("pre",{parentName:"li"},(0,r.mdx)("code",{parentName:"pre",className:"language-js"},"    values: [\n        {\n            x: <number> or <Date>,\n            y: <number>,\n        },\n        {\n            x: <number> or <Date>,\n            y: <number>,\n            isCritical: <bool>\n        },\n    ]\n")),(0,r.mdx)("table",{parentName:"li"},(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Property Name"),(0,r.mdx)("th",{parentName:"tr",align:null},"Type"),(0,r.mdx)("th",{parentName:"tr",align:null},"Required"),(0,r.mdx)("th",{parentName:"tr",align:null},"Default"),(0,r.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"x"),(0,r.mdx)("td",{parentName:"tr",align:null},"string"),(0,r.mdx)("td",{parentName:"tr",align:null},"yes"),(0,r.mdx)("td",{parentName:"tr",align:null},"-"),(0,r.mdx)("td",{parentName:"tr",align:null},"Co-ordinate x, for plotting the data point.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"y"),(0,r.mdx)("td",{parentName:"tr",align:null},"string"),(0,r.mdx)("td",{parentName:"tr",align:null},"yes"),(0,r.mdx)("td",{parentName:"tr",align:null},"-"),(0,r.mdx)("td",{parentName:"tr",align:null},"Co-ordinate y, for plotting the data point.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"isCritical"),(0,r.mdx)("td",{parentName:"tr",align:null},"boolean"),(0,r.mdx)("td",{parentName:"tr",align:null},"no"),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"false")),(0,r.mdx)("td",{parentName:"tr",align:null},"Shows an indicator surrounding the data point when enabled.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"region"),(0,r.mdx)("td",{parentName:"tr",align:null},"object"),(0,r.mdx)("td",{parentName:"tr",align:null},"no"),(0,r.mdx)("td",{parentName:"tr",align:null},"{}"),(0,r.mdx)("td",{parentName:"tr",align:null},"See ",(0,r.mdx)("a",{parentName:"td",href:"#regions"},"Regions"),"."))))),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("h3",{parentName:"li",id:"regions"},(0,r.mdx)("inlineCode",{parentName:"h3"},"regions")),(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},"Each dataset can have 1 or more regions.")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},"Each value can have a region object.")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},(0,r.mdx)("inlineCode",{parentName:"p"},"start")," and ",(0,r.mdx)("inlineCode",{parentName:"p"},"end")," is necessary for rendering an area.")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},"If at least one region is defined for a value in the element, it will take precedence over the element's region and the element's region will not be displayed."),(0,r.mdx)("pre",{parentName:"li"},(0,r.mdx)("code",{parentName:"pre",className:"language-js"},'  regions: [\n    {\n      axis: <"y" or "y2">,\n      start: <number>,\n      end: <number>,\n      color: <hex value as string>,\n    },\n  ],\n')),(0,r.mdx)("table",{parentName:"li"},(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Property Name"),(0,r.mdx)("th",{parentName:"tr",align:null},"Type"),(0,r.mdx)("th",{parentName:"tr",align:null},"Required"),(0,r.mdx)("th",{parentName:"tr",align:null},"Default"),(0,r.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"start"),(0,r.mdx)("td",{parentName:"tr",align:null},"number"),(0,r.mdx)("td",{parentName:"tr",align:null},"yes"),(0,r.mdx)("td",{parentName:"tr",align:null},"-"),(0,r.mdx)("td",{parentName:"tr",align:null},"Start of the region.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"end"),(0,r.mdx)("td",{parentName:"tr",align:null},"number"),(0,r.mdx)("td",{parentName:"tr",align:null},"yes"),(0,r.mdx)("td",{parentName:"tr",align:null},"-"),(0,r.mdx)("td",{parentName:"tr",align:null},"End of the region.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"axis"),(0,r.mdx)("td",{parentName:"tr",align:null},"string"),(0,r.mdx)("td",{parentName:"tr",align:null},"yes"),(0,r.mdx)("td",{parentName:"tr",align:null},'"y"'),(0,r.mdx)("td",{parentName:"tr",align:null},"Defines which axis if represents from.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"color"),(0,r.mdx)("td",{parentName:"tr",align:null},"string"),(0,r.mdx)("td",{parentName:"tr",align:null},"yes"),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("img",{width:"16px",height:"16px",src:"https://placehold.it/15/f4f4f4/000000?text=+"})," ",(0,r.mdx)("inlineCode",{parentName:"td"},"#f4f4f4"),"."),(0,r.mdx)("td",{parentName:"tr",align:null},"Default color of the region area."))))))),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("h3",{parentName:"li",id:"constraints"},"Constraints"),(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},"If dataset ",(0,r.mdx)("inlineCode",{parentName:"li"},"label")," display is not provided then the legend item will not be shown as well.")))),(0,r.mdx)("h2",{id:"examples"},"Examples"),(0,r.mdx)(x,{mdxType:"DefaultLineGraph"}),(0,r.mdx)("details",null,(0,r.mdx)("summary",{style:{fontSize:24}},(0,r.mdx)("b",null,"Data used for default line graph")),(0,r.mdx)("h3",{id:"graph-config-object"},"Graph Config object"),(0,r.mdx)(g.A,{mdxType:"DefaultGraphConfig"}),(0,r.mdx)("h3",{id:"data-object"},"Data object"),(0,r.mdx)(c.A,{mdxType:"DefaultDataObject"})),(0,r.mdx)("br",null),(0,r.mdx)("br",null),(0,r.mdx)("br",null),(0,r.mdx)(w,{mdxType:"TimeseriesLineGraph"}),(0,r.mdx)("details",null,(0,r.mdx)("summary",{style:{fontSize:24}},(0,r.mdx)("b",null,"Data used for timeseries line graph")),(0,r.mdx)("h3",{id:"graph-config-object-1"},"Graph Config object"),(0,r.mdx)(O.A,{mdxType:"TimeseriesGraphConfig"}),(0,r.mdx)("h3",{id:"data-object-1"},"Data object"),(0,r.mdx)(C.A,{mdxType:"TimeseriesDataObject"})))}I.isMDXComponent=!0},55020:function(e,n,t){t.d(n,{A:function(){return p}});t(96540);var a=t(36665),r=["components"];function l(){return l=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},l.apply(this,arguments)}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var m={},d="wrapper";function p(e){var n=e.components,t=i(e,r);return(0,a.mdx)(d,l({},m,t,{components:n,mdxType:"MDXLayout"}),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport { loadPopup } from '@cerner/terra-graphs-docs/lib/example-datasets/popup';\n\nconst data = {\n  key: 'uid_1',\n  label: {\n    display: 'Data Label 1',\n  },\n  shape: Carbon.helpers.SHAPES.DARK.CIRCLE,\n  onClick: loadPopup,\n  values: [\n    {\n      x: new Date(2016, 0, 1, 1, 5).toISOString(),\n      y: 5,\n    },\n    {\n      x: new Date(2016, 0, 1, 2, 15).toISOString(),\n      y: 11,\n    },\n    {\n      x: new Date(2016, 0, 1, 3, 15).toISOString(),\n      y: 12,\n    },\n    {\n      x: new Date(2016, 0, 1, 4, 15).toISOString(),\n      y: 16,\n    },\n    {\n      x: new Date(2016, 0, 1, 5, 15).toISOString(),\n      y: 17,\n    },\n    {\n      x: new Date(2016, 0, 1, 6, 15).toISOString(),\n      y: 9,\n    },\n    {\n      x: new Date(2016, 0, 1, 7, 0).toISOString(),\n      y: 11,\n    },\n    {\n      x: new Date(2016, 0, 1, 8, 15).toISOString(),\n      y: 12,\n    },\n    {\n      x: new Date(2016, 0, 1, 9, 45).toISOString(),\n      y: 16,\n    },\n    {\n      x: new Date(2016, 0, 1, 12, 15).toISOString(),\n      y: 17,\n    },\n    {\n      x: new Date(2016, 0, 1, 13, 15).toISOString(),\n      y: 28,\n    },\n    {\n      x: new Date(2016, 0, 1, 14, 15).toISOString(),\n      y: 12,\n    },\n    {\n      x: new Date(2016, 0, 1, 19, 45).toISOString(),\n      y: 13,\n    },\n    {\n      x: new Date(2016, 0, 1, 21, 15).toISOString(),\n      y: 14,\n    },\n  ],\n  yAxis: 'y',\n};\n\nexport default data;\n\n")))}p.isMDXComponent=!0},15423:function(e,n,t){t.d(n,{A:function(){return p}});t(96540);var a=t(36665),r=["components"];function l(){return l=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},l.apply(this,arguments)}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var m={},d="wrapper";function p(e){var n=e.components,t=i(e,r);return(0,a.mdx)(d,l({},m,t,{components:n,mdxType:"MDXLayout"}),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/lib/js/carbon';\n\nconst getLineTimeseriesConfig = (id) => ({\n  bindTo: id,\n  axis: {\n    x: {\n      type: Carbon.helpers.AXIS_TYPE.TIME_SERIES,\n      label: 'Datetime',\n      lowerLimit: new Date(2016, 0, 1, 1, 0).toISOString(),\n      upperLimit: new Date(2016, 0, 1, 23, 59).toISOString(),\n    },\n    y: {\n      label: 'Line Set A',\n      lowerLimit: 10,\n      upperLimit: 30,\n    },\n    y2: {\n      show: false,\n      label: 'Line Set B',\n      lowerLimit: 0,\n      upperLimit: 250,\n    },\n  },\n  showLabel: true,\n  showLegend: true,\n  showShapes: true,\n  showVGrid: true,\n  showHGrid: true,\n});\n\nexport default getLineTimeseriesConfig;\n\n")))}p.isMDXComponent=!0}}]);