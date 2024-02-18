"use strict";(self.webpackChunkterra_ui=self.webpackChunkterra_ui||[]).push([[8454],{90090:function(e,a,n){var t=n(24994);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r=t(n(39139)),l=n(86006),m={key:"dataset_bar_1",label:{display:"Dataset 1"},color:r.default.helpers.COLORS.LIGHT_PURPLE,onClick:l.loadBarPopup,values:[{x:1,y:10},{x:2,y:15},{x:3,y:18},{x:4,y:6},{x:6,y:10}]};a.default=m},87539:function(e,a){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;a.default=function(e){return{bindTo:e,bindLegendTo:null,axis:{x:{show:!0,label:"Data",lowerLimit:0,upperLimit:8,ticks:{values:[1,2,3,4,5,6,7],format:".0f"}},y:{show:!0,label:"Bar Set A",lowerLimit:0,upperLimit:35},y2:{show:!1,label:"Bar Set B",lowerLimit:0,upperLimit:30}},showLabel:!0,showLegend:!0,showShapes:!0,showVGrid:!1,showHGrid:!0}}},13904:function(e,a,n){var t=n(24994);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r=t(n(39139));a.default=function(e){return{bindTo:e,bindLegendTo:null,axis:{x:{show:!0,type:r.default.helpers.AXIS_TYPE.TIME_SERIES,label:"Data",lowerLimit:new Date(2016,0,1,0).toISOString(),upperLimit:new Date(2016,0,2,0).toISOString(),ticks:{values:[new Date(2016,0,1,3).toISOString(),new Date(2016,0,1,6).toISOString(),new Date(2016,0,1,9).toISOString(),new Date(2016,0,1,12).toISOString(),new Date(2016,0,1,15).toISOString()],format:"%H"}},y:{show:!0,label:"Bar Set A",lowerLimit:0,upperLimit:20},y2:{show:!1,label:"Line Set B",lowerLimit:0,upperLimit:20}},showLabel:!0,showLegend:!0,showShapes:!0,showVGrid:!1,showHGrid:!0}}},33570:function(e,a,n){var t=n(24994);a.A=void 0;var r=t(n(96540)),l=t(n(39139)),m=t(n(45839));n(14388),n(11719);var d=t(n(29683)),i=t(n(87539)),p=t(n(90090)),o=m.default.deepClone((0,i.default)("#simpleBarGraph")),s=m.default.deepClone(p.default);a.A=function(){return r.default.useEffect((function(){l.default.api.graph(o).loadContent(l.default.api.bar(s))}),[]),r.default.createElement(d.default,{id:"simpleBarGraph"})}},87017:function(e,a,n){var t=n(24994);a.A=void 0;var r=t(n(96540)),l=t(n(39139)),m=t(n(45839));n(14388),n(11719);var d=t(n(29683)),i=t(n(13904)),p=t(n(2682)),o=m.default.deepClone((0,i.default)("#timeseriesBarGraph")),s=m.default.deepClone(p.default);a.A=function(){return r.default.useEffect((function(){l.default.api.graph(o).loadContent(l.default.api.bar(s))}),[]),r.default.createElement(d.default,{id:"timeseriesBarGraph"})}},8454:function(e,a,n){n.r(a),n.d(a,{default:function(){return B}});var t=n(96540),r=n(36665),l=n(33570),m=["components"];function d(){return d=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var n=arguments[a];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},d.apply(this,arguments)}function i(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},l=Object.keys(e);for(t=0;t<l.length;t++)n=l[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)n=l[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p={};function o(e){var a=e.components,n=i(e,m);return(0,r.mdx)("wrapper",d({},p,n,{components:a,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport utils from '@cerner/carbon-graphs/lib/js/helpers/utils';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Graph.module.scss';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Bar/BarGraph.module.scss';\nimport ExampleGraphContainer from '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer';\nimport getBarConfig from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Bar/barDefault';\nimport exampleData from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Bar/dataset1';\n\n/*\nPlease refer to the documentation below to see the graphConfig and data objects\n*/\n\nconst graphConfig = utils.deepClone(getBarConfig('#simpleBarGraph'));\nconst dataset = utils.deepClone(exampleData);\n\nexport default () => {\n  React.useEffect(() => {\n    const graph = Carbon.api.graph(graphConfig);\n    graph.loadContent(Carbon.api.bar(dataset));\n  }, []);\n\n  return (\n    <ExampleGraphContainer id=\"simpleBarGraph\" />\n  );\n};\n\n")))}o.isMDXComponent=!0;var s=n(201),u=n(10502),x=function(e){var a=e.title,n=e.description,r=e.isExpanded;return t.createElement(s.A,{title:a||"Simple Bar",description:n,example:t.createElement(l.A,null),exampleCssSrc:t.createElement(u.A,null),exampleSrc:t.createElement(o,null),isExpanded:r})},g=n(54308),c=n(19059),N=n(87017),h=["components"];function b(){return b=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var n=arguments[a];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},b.apply(this,arguments)}function f(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},l=Object.keys(e);for(t=0;t<l.length;t++)n=l[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)n=l[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var y={};function v(e){var a=e.components,n=f(e,h);return(0,r.mdx)("wrapper",b({},y,n,{components:a,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport utils from '@cerner/carbon-graphs/lib/js/helpers/utils';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Graph.module.scss';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Bar/BarGraph.module.scss';\nimport ExampleGraphContainer from '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer';\nimport getBarConfig from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Bar/barTimeseries';\nimport exampleData from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Bar/datasetTimeseries1';\n\n/*\nPlease refer to the documentation below to see the graphConfig and data objects\n*/\n\nconst graphConfig = utils.deepClone(getBarConfig('#timeseriesBarGraph'));\nconst dataset = utils.deepClone(exampleData);\n\nexport default () => {\n  React.useEffect(() => {\n    const graph = Carbon.api.graph(graphConfig);\n    graph.loadContent(Carbon.api.bar(dataset));\n  }, []);\n\n  return (\n    <ExampleGraphContainer id=\"timeseriesBarGraph\" />\n  );\n};\n\n")))}v.isMDXComponent=!0;var w=function(e){var a=e.title,n=e.description,r=e.isExpanded;return t.createElement(s.A,{title:a||"Timeseries",description:n,example:t.createElement(N.A,null),exampleCssSrc:t.createElement(u.A,null),exampleSrc:t.createElement(v,null),isExpanded:r})},C=n(24529),j=n(96499),O=["components"];function S(){return S=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var n=arguments[a];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},S.apply(this,arguments)}function D(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},l=Object.keys(e);for(t=0;t<l.length;t++)n=l[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)n=l[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}n(27647);var L={},G="wrapper";function B(e){var a=e.components,n=D(e,O);return(0,r.mdx)(G,S({},L,n,{components:a,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"bar"},"Bar"),(0,r.mdx)("p",null,"A native bar graph using D3 based on standard design patterns."),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"#bar"},"Bar"),(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"#getting-started"},"Getting started")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"#usage"},"Usage")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"#configuration-structure"},"Configuration structure")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"#configuration-properties"},"Configuration properties")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"#dataset-structure"},"Dataset structure"),(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"#simple-bar"},"Simple Bar")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"#negative-bar"},"Negative Bar")))),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"#dataset-properties"},"Dataset properties"),(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"#legendoptions"},"legendOptions")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"#values"},"values")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"#regions"},"regions")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"#style"},"style")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"#group"},"group")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"#axis-info-row"},"Axis Info Row")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"#constraints"},"Constraints")))),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"#examples"},"Examples"))))),(0,r.mdx)("h2",{id:"getting-started"},"Getting Started"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Install with ",(0,r.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"npm i @cerner/carbon-graphs --save-dev"))))),(0,r.mdx)("h2",{id:"usage"},"Usage"),(0,r.mdx)("p",null,"An instance of Bar graph is obtained as follows:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-js"},"Carbon.api.bar(/* dataset */)\n")),(0,r.mdx)("p",null,"A Bar graph can be plotted as follows:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/dist/js/carbon-graphs.js';\nimport '@cerner/carbon-graphs/dist/css/carbon-graphs.css';\nconst graph = Carbon.api.graph(/* graph config JSON */);\ngraph.loadContent(Carbon.api.bar(/* dataset 1 */));\n\n// Multiple datasets can be added:\ngraph.loadContent(Carbon.api.bar(/* dataset 1 */));\ngraph.loadContent(Carbon.api.bar(/* dataset 2 */));\n")),(0,r.mdx)("h2",{id:"configuration-structure"},"Configuration Structure"),(0,r.mdx)("p",null,"You will ",(0,r.mdx)("strong",{parentName:"p"},"not")," need all the properties in the example below. Check ",(0,r.mdx)("a",{parentName:"p",href:"../core-configuration/Documentation/Graph"},"Graph")," for graph configuration properties."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"var root = {\n    bindTo: <string>,\n    axis: {\n        x: {\n            label: <string>,\n            lowerLimit: <number> or <Date>,\n            upperLimit: <number> or <Date>,\n            ticks: {\n                values: <Array>,\n                format: <format string>\n            }\n        },\n        y: {\n            label: <string>,\n            lowerLimit: <number>,\n            upperLimit: <number>,\n        },\n        y2: {\n            show: <bool>,\n            label: <string>,\n            lowerLimit: <number>,\n            upperLimit: <number>,\n        }\n    },\n    showLabel: <bool>,\n    showLegend: <bool>,\n    showShapes: <bool>,\n    showVGrid: <bool>,\n    showHGrid: <bool>,\n};\n")),(0,r.mdx)("h2",{id:"configuration-properties"},"Configuration Properties"),(0,r.mdx)("p",null,"See ",(0,r.mdx)("a",{parentName:"p",href:"../core-configuration/Documentation/Graph"},"Graph")," for more details."),(0,r.mdx)("h2",{id:"dataset-structure"},"Dataset Structure"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("h3",{parentName:"li",id:"simple-bar"},"Simple Bar"),(0,r.mdx)("pre",{parentName:"li"},(0,r.mdx)("code",{parentName:"pre",className:"language-js"},'var data = {\n    key: <string>,\n    label: {\n        display: <string>\n    },\n    regions: [\n        {\n            axis: <"y" or "y2">,\n            start: <number>,\n            end: <number>,\n            x: <number>,\n        }\n    ],\n    color: <hex value as string>,\n    onClick: <function>,\n    axisInfoRow: [\n        {\n            axis: <"x">,\n            x: 1,\n            value: {\n                onClick: <function>,\n                characterCount: <number>,\n                color: <hex value as string>,\n                shape: <shape SVG>,\n                label: {\n                    display: <string>,\n                    secondaryDisplay: <string>,\n                }\n            }\n        },\n        {\n            axis: "x",\n            x: 2,\n            value: {\n                onClick: <function>,\n                color: <hex value as string>,\n                shape: <shape SVG>,\n                label: {\n                    display: <string>,\n                }\n            }\n        }\n    ],\n    values: [\n        {\n            x: <number>,\n            y: <number> or <Date>,\n        },\n        {\n            x: <number>,\n            y: <number> or <Date>,\n            style: {\n                isHashed: <bool>,\n            }\n        },\n        {\n            x: <number>,\n            y: <number> or <Date>\n        },\n    ]\n};\n'))),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("h3",{parentName:"li",id:"negative-bar"},"Negative Bar"),(0,r.mdx)("pre",{parentName:"li"},(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},'var negativeData = {\n    key: <string>,\n    label: {\n        display: <string>,\n    },\n\n    yAxis: <"y" or y2">,\n    color: <hex value as string>,\n    onClick: <function>,\n    values: [\n        {\n            x: <number>,\n            y: <negative number>,\n        },\n        {\n            x: <number>,\n            y: <negative number>,\n        }\n    ]\n};\n')))),(0,r.mdx)("h2",{id:"dataset-properties"},"Dataset Properties"),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Property Name"),(0,r.mdx)("th",{parentName:"tr",align:null},"Type"),(0,r.mdx)("th",{parentName:"tr",align:null},"Required"),(0,r.mdx)("th",{parentName:"tr",align:null},"Default"),(0,r.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"key"),(0,r.mdx)("td",{parentName:"tr",align:null},"string"),(0,r.mdx)("td",{parentName:"tr",align:null},"yes"),(0,r.mdx)("td",{parentName:"tr",align:null},"-"),(0,r.mdx)("td",{parentName:"tr",align:null},"A unique ",(0,r.mdx)("inlineCode",{parentName:"td"},"id")," to identify the dataset. Adding two datasets with the same ",(0,r.mdx)("inlineCode",{parentName:"td"},"key")," will result in an error.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"values"),(0,r.mdx)("td",{parentName:"tr",align:null},"Array"),(0,r.mdx)("td",{parentName:"tr",align:null},"yes"),(0,r.mdx)("td",{parentName:"tr",align:null},"-"),(0,r.mdx)("td",{parentName:"tr",align:null},"See ",(0,r.mdx)("a",{parentName:"td",href:"#values"},"Values"),".")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"label"),(0,r.mdx)("td",{parentName:"tr",align:null},"object"),(0,r.mdx)("td",{parentName:"tr",align:null},"no"),(0,r.mdx)("td",{parentName:"tr",align:null},"-"),(0,r.mdx)("td",{parentName:"tr",align:null},"Label for the dataset in the Legend. If it is not provided then it will not be shown in the legend.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"axisInfoRow"),(0,r.mdx)("td",{parentName:"tr",align:null},"array"),(0,r.mdx)("td",{parentName:"tr",align:null},"no"),(0,r.mdx)("td",{parentName:"tr",align:null},"[]"),(0,r.mdx)("td",{parentName:"tr",align:null},"See ",(0,r.mdx)("a",{parentName:"td",href:"#axis-info-row"},"Axis Info Row"),".")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"color"),(0,r.mdx)("td",{parentName:"tr",align:null},"string"),(0,r.mdx)("td",{parentName:"tr",align:null},"no"),(0,r.mdx)("td",{parentName:"tr",align:null},"COLORS.BLACK"),(0,r.mdx)("td",{parentName:"tr",align:null},"Color for the data points. Can be a hex value (",(0,r.mdx)("inlineCode",{parentName:"td"},"#ffffff"),") or a constant from ",(0,r.mdx)("a",{parentName:"td",href:"../core-configuration/documentation/colors"},"colors"),".")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"group"),(0,r.mdx)("td",{parentName:"tr",align:null},"string"),(0,r.mdx)("td",{parentName:"tr",align:null},"no"),(0,r.mdx)("td",{parentName:"tr",align:null},"key"),(0,r.mdx)("td",{parentName:"tr",align:null},"Used for stacking bar content under another bar content. See ",(0,r.mdx)("a",{parentName:"td",href:"#group"},"Group"),".")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"legendOptions"),(0,r.mdx)("td",{parentName:"tr",align:null},"object"),(0,r.mdx)("td",{parentName:"tr",align:null},"no"),(0,r.mdx)("td",{parentName:"tr",align:null},"undefined"),(0,r.mdx)("td",{parentName:"tr",align:null},"Toggle to show shape, line and legend. See ",(0,r.mdx)("a",{parentName:"td",href:"#legendoptions"},"LegendOptions"),".")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"onClick"),(0,r.mdx)("td",{parentName:"tr",align:null},"Function"),(0,r.mdx)("td",{parentName:"tr",align:null},"no"),(0,r.mdx)("td",{parentName:"tr",align:null},"undefined"),(0,r.mdx)("td",{parentName:"tr",align:null},"Function to execute upon clicking a datapoint, such as, to display a popup.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"regions"),(0,r.mdx)("td",{parentName:"tr",align:null},"array"),(0,r.mdx)("td",{parentName:"tr",align:null},"no"),(0,r.mdx)("td",{parentName:"tr",align:null},"[]"),(0,r.mdx)("td",{parentName:"tr",align:null},"See ",(0,r.mdx)("a",{parentName:"td",href:"#regions"},"regions"),".")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"style"),(0,r.mdx)("td",{parentName:"tr",align:null},"object"),(0,r.mdx)("td",{parentName:"tr",align:null},"no"),(0,r.mdx)("td",{parentName:"tr",align:null},"{}"),(0,r.mdx)("td",{parentName:"tr",align:null},"Any style that can be applied. See ",(0,r.mdx)("a",{parentName:"td",href:"#style"},"style"),".")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"yAxis"),(0,r.mdx)("td",{parentName:"tr",align:null},"string"),(0,r.mdx)("td",{parentName:"tr",align:null},"no"),(0,r.mdx)("td",{parentName:"tr",align:null},'"y"'),(0,r.mdx)("td",{parentName:"tr",align:null},"Function to execute upon clicking a datapoint, such as, to display a popup.")))),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("h3",{parentName:"li",id:"legendoptions"},(0,r.mdx)("inlineCode",{parentName:"h3"},"legendOptions")),(0,r.mdx)("p",{parentName:"li"},"  Each bar can have a legendOptions object in ",(0,r.mdx)("a",{parentName:"p",href:"#values"},"Values")," level."),(0,r.mdx)("pre",{parentName:"li"},(0,r.mdx)("code",{parentName:"pre"},"  ```js\n    legendOptions: {\n      showElement: <bool>,\n    },\n  ```\n")),(0,r.mdx)("table",{parentName:"li"},(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Property Name"),(0,r.mdx)("th",{parentName:"tr",align:null},"Type"),(0,r.mdx)("th",{parentName:"tr",align:null},"Required"),(0,r.mdx)("th",{parentName:"tr",align:null},"Default"),(0,r.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"showElement"),(0,r.mdx)("td",{parentName:"tr",align:null},"boolean"),(0,r.mdx)("td",{parentName:"tr",align:null},"no"),(0,r.mdx)("td",{parentName:"tr",align:null},"true"),(0,r.mdx)("td",{parentName:"tr",align:null},"Toggle to hide legend when legend item has no data."))))),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("h3",{parentName:"li",id:"values"},(0,r.mdx)("inlineCode",{parentName:"h3"},"values")),(0,r.mdx)("pre",{parentName:"li"},(0,r.mdx)("code",{parentName:"pre",className:"language-js"},"    values: [\n        {\n            x: <number>,\n            y: <negative number>,\n        },\n        {\n            x: <number>,\n            y: <negative number>,\n        }\n    ]\n")),(0,r.mdx)("table",{parentName:"li"},(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Property Name"),(0,r.mdx)("th",{parentName:"tr",align:null},"Type"),(0,r.mdx)("th",{parentName:"tr",align:null},"Required"),(0,r.mdx)("th",{parentName:"tr",align:null},"Default"),(0,r.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"x"),(0,r.mdx)("td",{parentName:"tr",align:null},"string"),(0,r.mdx)("td",{parentName:"tr",align:null},"yes"),(0,r.mdx)("td",{parentName:"tr",align:null},"-"),(0,r.mdx)("td",{parentName:"tr",align:null},"Coordinate x, for plotting the bar.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"y"),(0,r.mdx)("td",{parentName:"tr",align:null},"string"),(0,r.mdx)("td",{parentName:"tr",align:null},"yes"),(0,r.mdx)("td",{parentName:"tr",align:null},"-"),(0,r.mdx)("td",{parentName:"tr",align:null},"Coordinate y, for height of bar.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"style"),(0,r.mdx)("td",{parentName:"tr",align:null},"object"),(0,r.mdx)("td",{parentName:"tr",align:null},"no"),(0,r.mdx)("td",{parentName:"tr",align:null},"{}"),(0,r.mdx)("td",{parentName:"tr",align:null},"Any style that can be applied. See ",(0,r.mdx)("a",{parentName:"td",href:"#style"},"style"),".")))))),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Note: Providing invalid data to x or y will lead to an error.")),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("h3",{parentName:"li",id:"regions"},(0,r.mdx)("inlineCode",{parentName:"h3"},"regions")),(0,r.mdx)("p",{parentName:"li"},"  ",(0,r.mdx)("inlineCode",{parentName:"p"},"regions")," in Bar Graph are conceptually different than other graph types, since ",(0,r.mdx)("inlineCode",{parentName:"p"},"goal lines")," are ",(0,r.mdx)("strong",{parentName:"p"},"per bar")," as opposed to ",(0,r.mdx)("inlineCode",{parentName:"p"},"regions lines")," which are ",(0,r.mdx)("strong",{parentName:"p"},"per data-set"),"."),(0,r.mdx)("pre",{parentName:"li"},(0,r.mdx)("code",{parentName:"pre",className:"language-js"},'    regions: [\n        {\n            axis: <"y" or "y2">,\n            start: <number>,\n            end: <number>,\n            x: <number>,\n        }\n    ],\n')),(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},"Each bar can have 1 or more regions. ",(0,r.mdx)("inlineCode",{parentName:"p"},"start")," and ",(0,r.mdx)("inlineCode",{parentName:"p"},"end")," is necessary for rendering a region.")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},"Stacked bars has combined regions. Pass in same regions array for every bar content that is stacked.")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},"Grouped bars has separate region for each content. Pass in different regions for each content."),(0,r.mdx)("table",{parentName:"li"},(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Property Name"),(0,r.mdx)("th",{parentName:"tr",align:null},"Expected"),(0,r.mdx)("th",{parentName:"tr",align:null},"Required"),(0,r.mdx)("th",{parentName:"tr",align:null},"Default"),(0,r.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"start"),(0,r.mdx)("td",{parentName:"tr",align:null},"number"),(0,r.mdx)("td",{parentName:"tr",align:null},"yes"),(0,r.mdx)("td",{parentName:"tr",align:null},"-"),(0,r.mdx)("td",{parentName:"tr",align:null},"Start of the region.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"end"),(0,r.mdx)("td",{parentName:"tr",align:null},"number"),(0,r.mdx)("td",{parentName:"tr",align:null},"yes"),(0,r.mdx)("td",{parentName:"tr",align:null},"-"),(0,r.mdx)("td",{parentName:"tr",align:null},"End of the region.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"x"),(0,r.mdx)("td",{parentName:"tr",align:null},"number"),(0,r.mdx)("td",{parentName:"tr",align:null},"yes"),(0,r.mdx)("td",{parentName:"tr",align:null},"-"),(0,r.mdx)("td",{parentName:"tr",align:null},"X axis tick value for which you want to render region.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"axis"),(0,r.mdx)("td",{parentName:"tr",align:null},"string"),(0,r.mdx)("td",{parentName:"tr",align:null},"no"),(0,r.mdx)("td",{parentName:"tr",align:null},'"y"'),(0,r.mdx)("td",{parentName:"tr",align:null},"Defines which axis if represents from.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"color"),(0,r.mdx)("td",{parentName:"tr",align:null},"string"),(0,r.mdx)("td",{parentName:"tr",align:null},"no"),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"#bcbfc0")),(0,r.mdx)("td",{parentName:"tr",align:null},"Default color of the region area."))))))),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("h3",{parentName:"li",id:"style"},(0,r.mdx)("inlineCode",{parentName:"h3"},"style")),(0,r.mdx)("p",{parentName:"li"},"  Each bar can have 1 or more styles."),(0,r.mdx)("pre",{parentName:"li"},(0,r.mdx)("code",{parentName:"pre",className:"language-js"},"   style: {\n      isHashed: <bool>,\n      isHollow: <bool>,\n      isDotted: <bool>,\n   }\n")),(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},"To apply style to entire content, pass style object in ",(0,r.mdx)("a",{parentName:"p",href:"#dataset-structure"},"Data")," level.")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},"To apply style to a single bar, pass style object in ",(0,r.mdx)("a",{parentName:"p",href:"#values"},"Values")," level.")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},"In case both objects are provided, Value level style object will take precedence over Data level style object."),(0,r.mdx)("table",{parentName:"li"},(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Property Name"),(0,r.mdx)("th",{parentName:"tr",align:null},"Expected"),(0,r.mdx)("th",{parentName:"tr",align:null},"Required"),(0,r.mdx)("th",{parentName:"tr",align:null},"Default"),(0,r.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"isHashed"),(0,r.mdx)("td",{parentName:"tr",align:null},"boolean"),(0,r.mdx)("td",{parentName:"tr",align:null},"no"),(0,r.mdx)("td",{parentName:"tr",align:null},"false"),(0,r.mdx)("td",{parentName:"tr",align:null},"applies hash pattern to bar")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"isHollow"),(0,r.mdx)("td",{parentName:"tr",align:null},"boolean"),(0,r.mdx)("td",{parentName:"tr",align:null},"no"),(0,r.mdx)("td",{parentName:"tr",align:null},"false"),(0,r.mdx)("td",{parentName:"tr",align:null},"creates hollow bar")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"isDotted"),(0,r.mdx)("td",{parentName:"tr",align:null},"boolean"),(0,r.mdx)("td",{parentName:"tr",align:null},"no"),(0,r.mdx)("td",{parentName:"tr",align:null},"false"),(0,r.mdx)("td",{parentName:"tr",align:null},"applies dotted pattern to bar outline"))))))),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("h3",{parentName:"li",id:"group"},(0,r.mdx)("inlineCode",{parentName:"h3"},"group")),(0,r.mdx)("p",{parentName:"li"},"  ",(0,r.mdx)("inlineCode",{parentName:"p"},"group")," property is used to enable stacking of bar content on another content. Each content is assigned a group id (by default this is the ",(0,r.mdx)("inlineCode",{parentName:"p"},"key")," property) when rendering on the graph.\nFor instance:\nIf ",(0,r.mdx)("inlineCode",{parentName:"p"},"Content 2")," needs to be stacked, then ",(0,r.mdx)("inlineCode",{parentName:"p"},"Content 2")," needs to provide the unique ",(0,r.mdx)("inlineCode",{parentName:"p"},"key")," of ",(0,r.mdx)("inlineCode",{parentName:"p"},"Content 1")," as ",(0,r.mdx)("inlineCode",{parentName:"p"},"group"),"."),(0,r.mdx)("pre",{parentName:"li"},(0,r.mdx)("code",{parentName:"pre",className:"language-js"},"   group: <first dataset ID>,\n")),(0,r.mdx)("p",{parentName:"li"},"  Note:"),(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},"Not providing a ",(0,r.mdx)("inlineCode",{parentName:"li"},"group")," will load the content beside ",(0,r.mdx)("inlineCode",{parentName:"li"},"Content 1"),"."))),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("h3",{parentName:"li",id:"axis-info-row"},"Axis Info Row"),(0,r.mdx)("p",{parentName:"li"},"  Each bar can have Axis Info Row Labels. ",(0,r.mdx)("inlineCode",{parentName:"p"},"axis"),", ",(0,r.mdx)("inlineCode",{parentName:"p"},"x")," and ",(0,r.mdx)("inlineCode",{parentName:"p"},"value")," is necessary for rendering an axis info row label."),(0,r.mdx)("pre",{parentName:"li"},(0,r.mdx)("code",{parentName:"pre",className:"language-js"},'    axisInfoRow: [\n        {\n            axis: <"x">,\n            x: 1,\n            value: {\n                onClick: <function>,\n                characterCount: <number>,\n                color: <hex value as string>,\n                shape: <shape SVG>,\n                label: {\n                    display: <string>,\n                    secondaryDisplay: <string>,\n                }\n            }\n        },\n        {\n            axis: "x",\n            x: 2,\n            value: {\n                onClick: <function>,\n                color: <hex value as string>,\n                shape: <shape SVG>,\n                label: {\n                    display: <string>,\n                }\n            }\n        }\n    ],\n')),(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},"Stacked Bar Graph has combined axis info row labels. Pass in ",(0,r.mdx)("inlineCode",{parentName:"p"},"axisInfoRow")," array for first bar content that is stacked.")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},"Grouped Bar Graph has separate axis info row labels for each content. Pass in different axis info row labels for each content.\nNote:")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},"For a Stacked Bar Graph, disable legend items while using Axis Info Row since toggling legend items will not change the Axis Info Row Labels."),(0,r.mdx)("table",{parentName:"li"},(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Property Name"),(0,r.mdx)("th",{parentName:"tr",align:null},"Type"),(0,r.mdx)("th",{parentName:"tr",align:null},"Required"),(0,r.mdx)("th",{parentName:"tr",align:null},"Default"),(0,r.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"x"),(0,r.mdx)("td",{parentName:"tr",align:null},"number"),(0,r.mdx)("td",{parentName:"tr",align:null},"yes"),(0,r.mdx)("td",{parentName:"tr",align:null},"-"),(0,r.mdx)("td",{parentName:"tr",align:null},"X axis tick value for corresponding axis info row label item")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"value"),(0,r.mdx)("td",{parentName:"tr",align:null},"object"),(0,r.mdx)("td",{parentName:"tr",align:null},"yes"),(0,r.mdx)("td",{parentName:"tr",align:null},"-"),(0,r.mdx)("td",{parentName:"tr",align:null},"Values that are used in axis info rows.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"axis"),(0,r.mdx)("td",{parentName:"tr",align:null},"string"),(0,r.mdx)("td",{parentName:"tr",align:null},"no"),(0,r.mdx)("td",{parentName:"tr",align:null},'"x"'),(0,r.mdx)("td",{parentName:"tr",align:null},"Axis where you want to render axis info row labels")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"characterCount"),(0,r.mdx)("td",{parentName:"tr",align:null},"number"),(0,r.mdx)("td",{parentName:"tr",align:null},"no"),(0,r.mdx)("td",{parentName:"tr",align:null},"No Default Value"),(0,r.mdx)("td",{parentName:"tr",align:null},"Maximum character length before truncation")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"color"),(0,r.mdx)("td",{parentName:"tr",align:null},"string"),(0,r.mdx)("td",{parentName:"tr",align:null},"no"),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("img",{width:"16px",height:"16px",src:"https://placehold.it/15/1c1f21/000000?text=+"})," ",(0,r.mdx)("inlineCode",{parentName:"td"},"#1c1f21")),(0,r.mdx)("td",{parentName:"tr",align:null},"Default color of the display (For Primary label only)")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"onClick"),(0,r.mdx)("td",{parentName:"tr",align:null},"Function"),(0,r.mdx)("td",{parentName:"tr",align:null},"no"),(0,r.mdx)("td",{parentName:"tr",align:null},"undefined"),(0,r.mdx)("td",{parentName:"tr",align:null},"Any action that can be performed when clicking on the data point")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"label"),(0,r.mdx)("td",{parentName:"tr",align:null},"object"),(0,r.mdx)("td",{parentName:"tr",align:null},"no"),(0,r.mdx)("td",{parentName:"tr",align:null},"{}"),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"display")," property needs to be provided for label ",(0,r.mdx)("br",null)," ",(0,r.mdx)("inlineCode",{parentName:"td"},"secondaryDisplay")," property can also be provided for label")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"shape"),(0,r.mdx)("td",{parentName:"tr",align:null},"object"),(0,r.mdx)("td",{parentName:"tr",align:null},"no"),(0,r.mdx)("td",{parentName:"tr",align:null},"{}"),(0,r.mdx)("td",{parentName:"tr",align:null},"svg represented as json, which got transpiled from ",(0,r.mdx)("inlineCode",{parentName:"td"},"@cerner/svg-to-carbon"),". See",(0,r.mdx)("a",{parentName:"td",href:"../core-configuration/Documentation/Shapes"},"Shapes")))))))),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("h3",{parentName:"li",id:"constraints"},"Constraints"),(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},"If data-set ",(0,r.mdx)("inlineCode",{parentName:"li"},"label")," display is not provided then the legend item will not be shown as well")))),(0,r.mdx)("h2",{id:"examples"},"Examples"),(0,r.mdx)(x,{mdxType:"SimpleBarGraph"}),(0,r.mdx)("details",null,(0,r.mdx)("summary",{style:{fontSize:24}},(0,r.mdx)("b",null,"Data used for simple bar graph")),(0,r.mdx)("h3",{id:"graph-config-object"},"Graph Config object"),(0,r.mdx)(g.A,{mdxType:"SimpleBarGraphConfig"}),(0,r.mdx)("h3",{id:"data-object"},"Data object"),(0,r.mdx)(c.A,{mdxType:"SimpleBarDataObject"})),(0,r.mdx)("br",null),(0,r.mdx)("br",null),(0,r.mdx)("br",null),(0,r.mdx)(w,{mdxType:"TimeseriesBarGraph"}),(0,r.mdx)("details",null,(0,r.mdx)("summary",{style:{fontSize:24}},(0,r.mdx)("b",null,"Data used for timeseries bar graph")),(0,r.mdx)("h3",{id:"graph-config-object-1"},"Graph Config object"),(0,r.mdx)(C.A,{mdxType:"TimeseriesBarGraphConfig"}),(0,r.mdx)("h3",{id:"data-object-1"},"Data object"),(0,r.mdx)(j.A,{mdxType:"TimeseriesBarDataObject"})))}B.isMDXComponent=!0},19059:function(e,a,n){n.d(a,{A:function(){return p}});n(96540);var t=n(36665),r=["components"];function l(){return l=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var n=arguments[a];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},l.apply(this,arguments)}function m(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},l=Object.keys(e);for(t=0;t<l.length;t++)n=l[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)n=l[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d={},i="wrapper";function p(e){var a=e.components,n=m(e,r);return(0,t.mdx)(i,l({},d,n,{components:a,mdxType:"MDXLayout"}),(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport { loadBarPopup } from '@cerner/terra-graphs-docs/lib/example-datasets/popup';\n\nconst data = {\n  key: 'dataset_bar_1',\n  label: {\n    display: 'Dataset 1',\n  },\n  color: Carbon.helpers.COLORS.LIGHT_PURPLE,\n  onClick: loadBarPopup,\n  values: [\n    {\n      x: 1,\n      y: 10,\n    },\n    {\n      x: 2,\n      y: 15,\n    },\n    {\n      x: 3,\n      y: 18,\n    },\n    {\n      x: 4,\n      y: 6,\n    },\n    {\n      x: 6,\n      y: 10,\n    },\n  ],\n};\n\nexport default data;\n\n")))}p.isMDXComponent=!0},54308:function(e,a,n){n.d(a,{A:function(){return p}});n(96540);var t=n(36665),r=["components"];function l(){return l=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var n=arguments[a];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},l.apply(this,arguments)}function m(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},l=Object.keys(e);for(t=0;t<l.length;t++)n=l[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)n=l[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d={},i="wrapper";function p(e){var a=e.components,n=m(e,r);return(0,t.mdx)(i,l({},d,n,{components:a,mdxType:"MDXLayout"}),(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre",className:"language-js"},"const getbarConfig = (id) => ({\n  bindTo: id,\n  bindLegendTo: null,\n  axis: {\n    x: {\n      show: true,\n      label: 'Data',\n      lowerLimit: 0,\n      upperLimit: 8,\n      ticks: {\n        values: [1, 2, 3, 4, 5, 6, 7],\n        format: '.0f',\n      },\n    },\n    y: {\n      show: true,\n      label: 'Bar Set A',\n      lowerLimit: 0,\n      upperLimit: 35,\n    },\n    y2: {\n      show: false,\n      label: 'Bar Set B',\n      lowerLimit: 0,\n      upperLimit: 30,\n    },\n  },\n  showLabel: true,\n  showLegend: true,\n  showShapes: true,\n  showVGrid: false,\n  showHGrid: true,\n});\n\nexport default getbarConfig;\n\n\n")))}p.isMDXComponent=!0}}]);