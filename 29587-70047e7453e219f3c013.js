"use strict";(self.webpackChunkterra_ui=self.webpackChunkterra_ui||[]).push([[29587],{10357:function(e,n,a){var t=a(64836);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=t(a(54520)),l=a(22678),i={key:"simple_paired_result_data",label:{high:{display:"High"},mid:{display:"Median"},low:{display:"Low"}},shape:{high:r.default.helpers.SHAPES.DARK.TEAR_ALT,mid:r.default.helpers.SHAPES.DARK.RHOMBUS,low:r.default.helpers.SHAPES.DARK.TEAR_DROP},color:{high:r.default.helpers.COLORS.BLACK,mid:r.default.helpers.COLORS.PURPLE,low:r.default.helpers.COLORS.BLACK},onClick:l.loadPopup,values:[{high:{x:20,y:150},mid:{x:20,y:40},low:{x:20,y:10}},{high:{x:80,y:100},mid:{x:80,y:75},low:{x:80,y:50}},{high:{x:150,y:110},mid:{x:150,y:70},low:{x:150,y:30}},{high:{x:175,y:160},mid:{x:175,y:120},low:{x:175,y:100}},{high:{x:300,y:190},mid:{x:300,y:90},low:{x:300,y:60}},{high:{x:560,y:150},mid:{x:560,y:40},low:{x:560,y:10}},{high:{x:800,y:180},mid:{x:800,y:100},low:{x:800,y:100}}]};n.default=i},31263:function(e,n){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=function(e){return{bindTo:e,axis:{x:{label:"Data",lowerLimit:0,upperLimit:1e3},y:{label:"Paired",lowerLimit:0,upperLimit:200}},showLabel:!0,showLegend:!0,showVGrid:!0,showHGrid:!0}};n.default=a},3663:function(e,n,a){var t=a(64836);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=t(a(54520)),l=function(e){return{bindTo:e,axis:{x:{type:r.default.helpers.AXIS_TYPE.TIME_SERIES,label:"Datetime",lowerLimit:"2016-03-02T12:00:00Z",upperLimit:"2018-12-10T12:00:00Z",ticks:{format:"%b %Y"}},y:{label:"Paired Set A",lowerLimit:0,upperLimit:200},y2:{show:!1,label:"Paired Set B",lowerLimit:100,upperLimit:350}},showLabel:!0,showLegend:!0,showVGrid:!0,showHGrid:!0}};n.default=l},18346:function(e,n,a){var t=a(64836);n.Z=void 0;var r=t(a(67294)),l=t(a(54520)),i=t(a(53334));a(56867),a(379);var d=t(a(93065)),m=t(a(31263)),o=t(a(10357)),p=i.default.deepClone((0,m.default)("#simplePairedResultGraph")),s=[i.default.deepClone(o.default)],u=function(){return r.default.useEffect((function(){var e=l.default.api.graph(p);s.forEach((function(n){e.loadContent(l.default.api.pairedResult(n))}))}),[]),r.default.createElement(d.default,{id:"simplePairedResultGraph"})};n.Z=u},8417:function(e,n,a){var t=a(64836);n.Z=void 0;var r=t(a(67294)),l=t(a(54520)),i=t(a(53334));a(56867),a(379);var d=t(a(93065)),m=t(a(3663)),o=t(a(33997)),p=i.default.deepClone((0,m.default)("#timeseriesPairedResultGraph")),s=[i.default.deepClone(o.default)],u=function(){return r.default.useEffect((function(){var e=l.default.api.graph(p);s.forEach((function(n){e.loadContent(l.default.api.pairedResult(n))}))}),[]),r.default.createElement(d.default,{id:"timeseriesPairedResultGraph"})};n.Z=u},29587:function(e,n,a){a.r(n),a.d(n,{default:function(){return T}});var t=a(67294),r=a(81254),l=a(18346),i=["components"];function d(){return d=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var a=arguments[n];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(e[t]=a[t])}return e},d.apply(this,arguments)}function m(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},l=Object.keys(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o={},p="wrapper";function s(e){var n=e.components,a=m(e,i);return(0,r.mdx)(p,d({},o,a,{components:n,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport utils from '@cerner/carbon-graphs/lib/js/helpers/utils';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Graph.module.scss';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/PairedResult/PairedResultGraph.module.scss';\nimport ExampleGraphContainer from '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer';\nimport getPairedResultConfig from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/PairedResult/pairedResultDefault';\nimport exampleData from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/PairedResult/pairedResultSimpleData';\n\n/*\nPlease refer to the documentation below to see the graphConfig and data objects\n*/\nconst graphConfig = utils.deepClone(getPairedResultConfig('#simplePairedResultGraph'));\nconst dataset = [utils.deepClone(exampleData)];\n\nconst SimplePiaredResultExample = () => {\n  React.useEffect(() => {\n    const graph = Carbon.api.graph(graphConfig);\n    dataset.forEach((data) => {\n      graph.loadContent(Carbon.api.pairedResult(data));\n    });\n  }, []);\n  return (\n    <ExampleGraphContainer id=\"simplePairedResultGraph\" />\n  );\n};\n\nexport default SimplePiaredResultExample;\n\n")))}s.isMDXComponent=!0;var u=a(49271),x=a(25005),g=function(e){var n=e.title,a=e.description,r=e.isExpanded;return t.createElement(u.Z,{title:n||"Simple Paired Result",description:a,example:t.createElement(l.Z,null),exampleCssSrc:t.createElement(x.Z,null),exampleSrc:t.createElement(s,null),isExpanded:r})},c=a(88990),h=a(31476),N=a(8417),b=["components"];function f(){return f=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var a=arguments[n];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(e[t]=a[t])}return e},f.apply(this,arguments)}function y(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},l=Object.keys(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var C={},w="wrapper";function v(e){var n=e.components,a=y(e,b);return(0,r.mdx)(w,f({},C,a,{components:n,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport utils from '@cerner/carbon-graphs/lib/js/helpers/utils';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Graph.module.scss';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/PairedResult/PairedResultGraph.module.scss';\nimport ExampleGraphContainer from '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer';\nimport getPairedResultTimeseriesConfig from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/PairedResult/pairedResultTimeseries';\nimport exampleData from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/PairedResult/pairedResultTimeseriesData';\n\n/*\nPlease refer to the documentation below to see the graphConfig and data objects\n*/\nconst graphConfig = utils.deepClone(getPairedResultTimeseriesConfig('#timeseriesPairedResultGraph'));\nconst dataset = [utils.deepClone(exampleData)];\n\nconst TimeseriesPiaredResultExample = () => {\n  React.useEffect(() => {\n    const graph = Carbon.api.graph(graphConfig);\n    dataset.forEach((data) => {\n      graph.loadContent(Carbon.api.pairedResult(data));\n    });\n  }, []);\n  return (\n    <ExampleGraphContainer id=\"timeseriesPairedResultGraph\" />\n  );\n};\n\nexport default TimeseriesPiaredResultExample;\n\n")))}v.isMDXComponent=!0;var O=function(e){var n=e.title,a=e.description,r=e.isExpanded;return t.createElement(u.Z,{title:n||"Timeseries",description:a,example:t.createElement(N.Z,null),exampleCssSrc:t.createElement(x.Z,null),exampleSrc:t.createElement(v,null),isExpanded:r})},j=a(32910),P=a(53897),R=["components"];function S(){return S=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var a=arguments[n];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(e[t]=a[t])}return e},S.apply(this,arguments)}function E(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},l=Object.keys(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}a(51320);var L={},D="wrapper";function T(e){var n=e.components,a=E(e,R);return(0,r.mdx)(D,S({},L,a,{components:n,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"paired-result"},"Paired Result"),(0,r.mdx)("p",null,"A native paired result graph, representing a pair of result with an optional median value. A ",(0,r.mdx)("inlineCode",{parentName:"p"},"pair")," can be represented in any co-ordinate on a graph. Most common pattern used is charting a Blood Pressure graph where the ",(0,r.mdx)("inlineCode",{parentName:"p"},"pair")," - high, low, mid are vertical data points connected by a vertical line."),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"#paired-result"},"Paired Result"),(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"#usage"},"Usage")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"#configuration-structure"},"Configuration structure")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"#configuration-properties"},"Configuration Properties")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"#dataset-structure"},"Dataset structure")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"#dataset-properties"},"Dataset properties"),(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"#legendoptions"},"Legend options")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"#style"},"Style")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"#values"},"Values")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"#regions"},"Regions")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"#constraints"},"Constraints")))),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"#examples"},"Examples"))))),(0,r.mdx)("h2",{id:"usage"},"Usage"),(0,r.mdx)("p",null,"An instance of Paired result graph is obtained as follows:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-js"},"Carbon.api.pairedResult(/* dataset */)\n")),(0,r.mdx)("p",null,"A Paired result graph can be plotted as follows:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/dist/js/carbon-graphs.js';\nimport '@cerner/carbon-graphs/dist/css/carbon-graphs.css';\nconst graph = Carbon.api.graph(/* graph config JSON */);\ngraph.loadContent(Carbon.api.pairedResult(/* dataset 1 */));\n\n// Multiple datasets can be added:\ngraph.loadContent(Carbon.api.pairedResult(/* dataset 2 */));\ngraph.loadContent(Carbon.api.pairedResult(/* dataset 3 */));\n")),(0,r.mdx)("h2",{id:"configuration-structure"},"Configuration Structure"),(0,r.mdx)("p",null,"You will ",(0,r.mdx)("strong",{parentName:"p"},"not")," need all the properties in the example below.\nCheck ",(0,r.mdx)("a",{parentName:"p",href:"../core-configuration/Documentation/Graph"},"Graph")," for graph configuration properties."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"var root = {\n    bindTo: <string>,\n    axis: {\n        x: {\n            label: <string>,\n            lowerLimit: <number> or <Date>,\n            upperLimit: <number> or <Date>,\n        },\n        y: {\n            label: <string>,\n            lowerLimit: <number>,\n            upperLimit: <number>,\n        }\n    },\n    showLabel: <bool>,\n    showLegend: <bool>,\n    showVGrid: <bool>,\n    showHGrid: <bool>\n};\n")),(0,r.mdx)("h2",{id:"configuration-properties"},"Configuration Properties"),(0,r.mdx)("p",null,"See ",(0,r.mdx)("a",{parentName:"p",href:"../core-configuration/Documentation/Graph"},"Graph")," for graph configuration properties."),(0,r.mdx)("h2",{id:"dataset-structure"},"Dataset Structure"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-js"},'var data = {\n    key: <string>,\n    regions: {\n        high: [\n            {\n                axis: <"y" or "y2">,\n                start: <number>,\n                end: <number>,\n                color: <hex value as string>,\n            }\n        ],\n        low: [\n            {\n                axis: <"y" or "y2">,\n                start: <number>,\n                end: <number>,\n            }\n        ]\n    },\n    onClick: <function>,\n    values: [\n        {\n            high: {\n                x: <number>,\n                y: <number>,\n                isCritical: <bool>,\n                region: {\n                    start: <number>,\n                    end: <number>,\n                    color: <hex value as string>,\n                }\n            },\n            low: {\n                x: <number>,\n                y: <number>,\n            },\n            mid: {\n                x: <number>,\n                y: <number>,\n            }\n        }\n    ]\n};\n')),(0,r.mdx)("h2",{id:"dataset-properties"},"Dataset properties"),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Property Name"),(0,r.mdx)("th",{parentName:"tr",align:null},"Type"),(0,r.mdx)("th",{parentName:"tr",align:null},"Required"),(0,r.mdx)("th",{parentName:"tr",align:null},"Default"),(0,r.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"key"),(0,r.mdx)("td",{parentName:"tr",align:null},"string"),(0,r.mdx)("td",{parentName:"tr",align:null},"yes"),(0,r.mdx)("td",{parentName:"tr",align:null},"-"),(0,r.mdx)("td",{parentName:"tr",align:null},"A unique ",(0,r.mdx)("inlineCode",{parentName:"td"},"id")," to identify the dataset. Adding two datasets with the same ",(0,r.mdx)("inlineCode",{parentName:"td"},"key")," will result in an error.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"values"),(0,r.mdx)("td",{parentName:"tr",align:null},"Array"),(0,r.mdx)("td",{parentName:"tr",align:null},"yes"),(0,r.mdx)("td",{parentName:"tr",align:null},"-"),(0,r.mdx)("td",{parentName:"tr",align:null},"See Values](#values).")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"color"),(0,r.mdx)("td",{parentName:"tr",align:null},"string"),(0,r.mdx)("td",{parentName:"tr",align:null},"no"),(0,r.mdx)("td",{parentName:"tr",align:null},"COLORS.BLACK"),(0,r.mdx)("td",{parentName:"tr",align:null},"Color for the data points. Can be a hex value (",(0,r.mdx)("inlineCode",{parentName:"td"},"#ffffff"),") or a constant from ",(0,r.mdx)("a",{parentName:"td",href:"../core-configuration/documentation/colors"},"colors"),".")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"label"),(0,r.mdx)("td",{parentName:"tr",align:null},"object"),(0,r.mdx)("td",{parentName:"tr",align:null},"no"),(0,r.mdx)("td",{parentName:"tr",align:null},"{}"),(0,r.mdx)("td",{parentName:"tr",align:null},"Label for the dataset in the Legend. If it is not provided then it will not be shown in the legend.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"legendOptions"),(0,r.mdx)("td",{parentName:"tr",align:null},"object"),(0,r.mdx)("td",{parentName:"tr",align:null},"no"),(0,r.mdx)("td",{parentName:"tr",align:null},"undefined"),(0,r.mdx)("td",{parentName:"tr",align:null},"Toggle to show shape, line and legend. See ",(0,r.mdx)("a",{parentName:"td",href:"#legendoptions"},"LegendOptions"),".")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"onClick"),(0,r.mdx)("td",{parentName:"tr",align:null},"Function"),(0,r.mdx)("td",{parentName:"tr",align:null},"no"),(0,r.mdx)("td",{parentName:"tr",align:null},"undefined"),(0,r.mdx)("td",{parentName:"tr",align:null},"Function to execute upon clicking a datapoint, such as, to display a popup.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"regions"),(0,r.mdx)("td",{parentName:"tr",align:null},"object"),(0,r.mdx)("td",{parentName:"tr",align:null},"no"),(0,r.mdx)("td",{parentName:"tr",align:null},"{}"),(0,r.mdx)("td",{parentName:"tr",align:null},"See ",(0,r.mdx)("a",{parentName:"td",href:"#regions"},"Regions"),".")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"shape"),(0,r.mdx)("td",{parentName:"tr",align:null},"string"),(0,r.mdx)("td",{parentName:"tr",align:null},"no"),(0,r.mdx)("td",{parentName:"tr",align:null},"SHAPES.DARK.CIRCLE"),(0,r.mdx)("td",{parentName:"tr",align:null},"Shape for representing the data points.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"yAxis"),(0,r.mdx)("td",{parentName:"tr",align:null},"string"),(0,r.mdx)("td",{parentName:"tr",align:null},"no"),(0,r.mdx)("td",{parentName:"tr",align:null},'"y"'),(0,r.mdx)("td",{parentName:"tr",align:null},"Prop to select either the Y or Y2 axis for the dataset. Valid values are ",(0,r.mdx)("inlineCode",{parentName:"td"},"y")," or ",(0,r.mdx)("inlineCode",{parentName:"td"},"y2"),".")))),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("h3",{parentName:"li",id:"legendoptions"},(0,r.mdx)("inlineCode",{parentName:"h3"},"legendOptions")),(0,r.mdx)("p",{parentName:"li"},"  Each paired result can have a legendOptions object in ",(0,r.mdx)("a",{parentName:"p",href:"#values"},"Values")," level."),(0,r.mdx)("pre",{parentName:"li"},(0,r.mdx)("code",{parentName:"pre"},"```js\nlegendOptions: {\n  showLine: <bool>,\n  showShape: <bool>,\n  style: <object>,\n}\n```\n")),(0,r.mdx)("table",{parentName:"li"},(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Property Name"),(0,r.mdx)("th",{parentName:"tr",align:null},"Type"),(0,r.mdx)("th",{parentName:"tr",align:null},"Required"),(0,r.mdx)("th",{parentName:"tr",align:null},"Default"),(0,r.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"showLine"),(0,r.mdx)("td",{parentName:"tr",align:null},"boolean"),(0,r.mdx)("td",{parentName:"tr",align:null},"no"),(0,r.mdx)("td",{parentName:"tr",align:null},"false"),(0,r.mdx)("td",{parentName:"tr",align:null},"Display Line in the legend.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"showShape"),(0,r.mdx)("td",{parentName:"tr",align:null},"boolean"),(0,r.mdx)("td",{parentName:"tr",align:null},"no"),(0,r.mdx)("td",{parentName:"tr",align:null},"true"),(0,r.mdx)("td",{parentName:"tr",align:null},"Display Shape in the legend.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"style"),(0,r.mdx)("td",{parentName:"tr",align:null},"object"),(0,r.mdx)("td",{parentName:"tr",align:null},"no"),(0,r.mdx)("td",{parentName:"tr",align:null},"{}"),(0,r.mdx)("td",{parentName:"tr",align:null},"Any style that can be applied. See ",(0,r.mdx)("a",{parentName:"td",href:"#style"},"Styles"),".")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"showElement"),(0,r.mdx)("td",{parentName:"tr",align:null},"boolean"),(0,r.mdx)("td",{parentName:"tr",align:null},"no"),(0,r.mdx)("td",{parentName:"tr",align:null},"true"),(0,r.mdx)("td",{parentName:"tr",align:null},"Toggle to hide legend when legend item has no data."))))),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("h3",{parentName:"li",id:"style"},(0,r.mdx)("inlineCode",{parentName:"h3"},"style")),(0,r.mdx)("p",{parentName:"li"},"  Each paired result can have a style object in ",(0,r.mdx)("a",{parentName:"p",href:"#values"},"Values")," level."),(0,r.mdx)("pre",{parentName:"li"},(0,r.mdx)("code",{parentName:"pre",className:"language-js"},"style: { strokeDashArray: '2,2' }\n")),(0,r.mdx)("table",{parentName:"li"},(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Property Name"),(0,r.mdx)("th",{parentName:"tr",align:null},"Type"),(0,r.mdx)("th",{parentName:"tr",align:null},"Required"),(0,r.mdx)("th",{parentName:"tr",align:null},"Default"),(0,r.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"strokeDashArray"),(0,r.mdx)("td",{parentName:"tr",align:null},"string"),(0,r.mdx)("td",{parentName:"tr",align:null},"no"),(0,r.mdx)("td",{parentName:"tr",align:null},'"0"'),(0,r.mdx)("td",{parentName:"tr",align:null},"Applies stroke-dasharray CSS property to the SVG line."))))),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("h3",{parentName:"li",id:"values"},(0,r.mdx)("inlineCode",{parentName:"h3"},"values")),(0,r.mdx)("pre",{parentName:"li"},(0,r.mdx)("code",{parentName:"pre",className:"language-js"},"values: [\n    {\n      high: {\n        x: <number>,\n        y: <number>,\n      },\n      mid: {\n        x: <number>,\n        y: <number>,\n      },\n      low: {\n        x: <number>,\n        y: <number>,\n      },\n    }\n   ]\n")),(0,r.mdx)("table",{parentName:"li"},(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Property Name"),(0,r.mdx)("th",{parentName:"tr",align:null},"Type"),(0,r.mdx)("th",{parentName:"tr",align:null},"Value"),(0,r.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"high"),(0,r.mdx)("td",{parentName:"tr",align:null},"object"),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("em",{parentName:"td"},'{x: "", y: "", isCritical: ',(0,r.mdx)("inlineCode",{parentName:"em"},"true"),", region: {}}")),(0,r.mdx)("td",{parentName:"tr",align:null},"Data point co-ordinate x and y, See ",(0,r.mdx)("a",{parentName:"td",href:"#regions"},"Regions"),".")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"low"),(0,r.mdx)("td",{parentName:"tr",align:null},"object"),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("em",{parentName:"td"},'{x: "", y: "", isCritical: ',(0,r.mdx)("inlineCode",{parentName:"em"},"true"),", region: {}}")),(0,r.mdx)("td",{parentName:"tr",align:null},"Data point co-ordinate x and y, See ",(0,r.mdx)("a",{parentName:"td",href:"#regions"},"Regions"),".")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"mid"),(0,r.mdx)("td",{parentName:"tr",align:null},"object"),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("em",{parentName:"td"},'{x: "", y: "", isCritical: ',(0,r.mdx)("inlineCode",{parentName:"em"},"true"),", region: {}}")),(0,r.mdx)("td",{parentName:"tr",align:null},"Data point co-ordinate x and y, See ",(0,r.mdx)("a",{parentName:"td",href:"#regions"},"Regions"),".")))),(0,r.mdx)("p",{parentName:"li"},"  ",(0,r.mdx)("inlineCode",{parentName:"p"},"Note:")),(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},"At least one of the high/low/medium should be provided with valid data."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"isCritical")," toggle is disabled by default."),(0,r.mdx)("li",{parentName:"ul"},"When ",(0,r.mdx)("inlineCode",{parentName:"li"},"isCritical")," toggle is enabled, an indicator will be shown surrounding the data point."),(0,r.mdx)("li",{parentName:"ul"},"Providing invalid data to x or y will lead to an error.")))),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("h3",{parentName:"li",id:"regions"},(0,r.mdx)("inlineCode",{parentName:"h3"},"regions")),(0,r.mdx)("p",{parentName:"li"},"  Draws a Horizontal area along the X-Axis."),(0,r.mdx)("pre",{parentName:"li"},(0,r.mdx)("code",{parentName:"pre",className:"language-js"},'  regions: {\n    high: [\n      {\n        axis: <"y or y2">,\n        start: <number>,\n        end: <number>,\n        color: <hex value as string>,\n      },\n    ],\n    mid: [\n      {\n        axis: <"y or y2">,\n        start: <number>,\n        end: <number>,\n        color: <hex value as string>,\n      },\n    ],\n    low: [\n      {\n        axis: <"y or y2">,\n        start: <number>,\n        end: <number>,\n      },\n    ],\n  }\n')),(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},"Each dataset can have 1 or more regions for ",(0,r.mdx)("inlineCode",{parentName:"p"},"high"),", ",(0,r.mdx)("inlineCode",{parentName:"p"},"low")," and/or ",(0,r.mdx)("inlineCode",{parentName:"p"},"mid"),",")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},"Each value can have a region object for ",(0,r.mdx)("inlineCode",{parentName:"p"},"high"),", ",(0,r.mdx)("inlineCode",{parentName:"p"},"low")," and/or ",(0,r.mdx)("inlineCode",{parentName:"p"},"mid"),",")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},"Each pair type mentioned above needs to have a ",(0,r.mdx)("inlineCode",{parentName:"p"},"start")," and ",(0,r.mdx)("inlineCode",{parentName:"p"},"end"),",")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},"If at least one region is defined for a value in the element, it will take precedence over the element's region and the element's region will not be displayed."),(0,r.mdx)("table",{parentName:"li"},(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Property Name"),(0,r.mdx)("th",{parentName:"tr",align:null},"Type"),(0,r.mdx)("th",{parentName:"tr",align:null},"Value"),(0,r.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"high"),(0,r.mdx)("td",{parentName:"tr",align:null},"object"),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("em",{parentName:"td"},"{start: ",(0,r.mdx)("inlineCode",{parentName:"em"},"number"),", end: ",(0,r.mdx)("inlineCode",{parentName:"em"},"number"),"}")),(0,r.mdx)("td",{parentName:"tr",align:null},"Start and end ",(0,r.mdx)("inlineCode",{parentName:"td"},"@type: number"),".")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"low"),(0,r.mdx)("td",{parentName:"tr",align:null},"object"),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("em",{parentName:"td"},"{start: ",(0,r.mdx)("inlineCode",{parentName:"em"},"number"),", end: ",(0,r.mdx)("inlineCode",{parentName:"em"},"number"),"}")),(0,r.mdx)("td",{parentName:"tr",align:null},"Start and end ",(0,r.mdx)("inlineCode",{parentName:"td"},"@type: number"),".")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"mid"),(0,r.mdx)("td",{parentName:"tr",align:null},"object"),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("em",{parentName:"td"},"{start: ",(0,r.mdx)("inlineCode",{parentName:"em"},"number"),", end: ",(0,r.mdx)("inlineCode",{parentName:"em"},"number"),"}")),(0,r.mdx)("td",{parentName:"tr",align:null},"Start and end ",(0,r.mdx)("inlineCode",{parentName:"td"},"@type: number"),".")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"axis"),(0,r.mdx)("td",{parentName:"tr",align:null},"string"),(0,r.mdx)("td",{parentName:"tr",align:null},'"y"'),(0,r.mdx)("td",{parentName:"tr",align:null},"Defines which axis if represents from.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"color"),(0,r.mdx)("td",{parentName:"tr",align:null},"string"),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("img",{width:"16px",height:"16px",src:"https://placehold.it/15/f4f4f4/000000?text=+"})," ",(0,r.mdx)("inlineCode",{parentName:"td"},"#f4f4f4")),(0,r.mdx)("td",{parentName:"tr",align:null},"Default color of the region area."))))))),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("h3",{parentName:"li",id:"constraints"},"Constraints"),(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},"If dataset ",(0,r.mdx)("inlineCode",{parentName:"li"},"label")," display is not provided for ",(0,r.mdx)("inlineCode",{parentName:"li"},"high"),", ",(0,r.mdx)("inlineCode",{parentName:"li"},"low")," and ",(0,r.mdx)("inlineCode",{parentName:"li"},"mid"),", the legend item will not be shown as well.")))),(0,r.mdx)("h2",{id:"examples"},"Examples"),(0,r.mdx)(g,{mdxType:"SimplePairedResultGraph"}),(0,r.mdx)("details",null,(0,r.mdx)("summary",{style:{fontSize:24}},(0,r.mdx)("b",null,"Data used for simple graph")),(0,r.mdx)("h3",{id:"graph-config-object"},"Graph Config object"),(0,r.mdx)(c.Z,{mdxType:"SimplePairedResultGraphConfig"}),(0,r.mdx)("h3",{id:"data-object"},"Data object"),(0,r.mdx)(h.Z,{mdxType:"SimplePairedResultDataObject"})),(0,r.mdx)("br",null),(0,r.mdx)("br",null),(0,r.mdx)("br",null),(0,r.mdx)(O,{mdxType:"TimeseriesPairedResultGraph"}),(0,r.mdx)("details",null,(0,r.mdx)("summary",{style:{fontSize:24}},(0,r.mdx)("b",null,"Data used for timeseries graph")),(0,r.mdx)("h3",{id:"graph-config-object-1"},"Graph Config object"),(0,r.mdx)(j.Z,{mdxType:"TimeseriesPairedResultGraphConfig"}),(0,r.mdx)("h3",{id:"data-object-1"},"Data object"),(0,r.mdx)(P.Z,{mdxType:"TimeseriesPairedResultDataObject"})))}T.isMDXComponent=!0},31476:function(e,n,a){a.d(n,{Z:function(){return o}});a(67294);var t=a(81254),r=["components"];function l(){return l=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var a=arguments[n];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(e[t]=a[t])}return e},l.apply(this,arguments)}function i(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},l=Object.keys(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d={},m="wrapper";function o(e){var n=e.components,a=i(e,r);return(0,t.mdx)(m,l({},d,a,{components:n,mdxType:"MDXLayout"}),(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport {\n  loadPopup,\n} from '@cerner/terra-graphs-docs/lib/example-datasets/popup';\n\nconst data = {\n  key: 'simple_paired_result_data',\n  label: {\n    high: {\n      display: 'High',\n    },\n    mid: {\n      display: 'Median',\n    },\n    low: {\n      display: 'Low',\n    },\n  },\n  shape: {\n    high: Carbon.helpers.SHAPES.DARK.TEAR_ALT,\n    mid: Carbon.helpers.SHAPES.DARK.RHOMBUS,\n    low: Carbon.helpers.SHAPES.DARK.TEAR_DROP,\n  },\n  color: {\n    high: Carbon.helpers.COLORS.BLACK,\n    mid: Carbon.helpers.COLORS.PURPLE,\n    low: Carbon.helpers.COLORS.BLACK,\n  },\n  onClick: loadPopup,\n  values: [\n    {\n      high: {\n        x: 20,\n        y: 150,\n      },\n      mid: {\n        x: 20,\n        y: 40,\n      },\n      low: {\n        x: 20,\n        y: 10,\n      },\n    },\n    {\n      high: {\n        x: 80,\n        y: 100,\n      },\n      mid: {\n        x: 80,\n        y: 75,\n      },\n      low: {\n        x: 80,\n        y: 50,\n      },\n    },\n    {\n      high: {\n        x: 150,\n        y: 110,\n      },\n      mid: {\n        x: 150,\n        y: 70,\n      },\n      low: {\n        x: 150,\n        y: 30,\n      },\n    },\n    {\n      high: {\n        x: 175,\n        y: 160,\n      },\n      mid: {\n        x: 175,\n        y: 120,\n      },\n      low: {\n        x: 175,\n        y: 100,\n      },\n    },\n    {\n      high: {\n        x: 300,\n        y: 190,\n      },\n      mid: {\n        x: 300,\n        y: 90,\n      },\n      low: {\n        x: 300,\n        y: 60,\n      },\n    },\n    {\n      high: {\n        x: 560,\n        y: 150,\n      },\n      mid: {\n        x: 560,\n        y: 40,\n      },\n      low: {\n        x: 560,\n        y: 10,\n      },\n    },\n    {\n      high: {\n        x: 800,\n        y: 180,\n      },\n      mid: {\n        x: 800,\n        y: 100,\n      },\n      low: {\n        x: 800,\n        y: 100,\n      },\n    },\n  ],\n};\n\nexport default data;\n\n")))}o.isMDXComponent=!0},88990:function(e,n,a){a.d(n,{Z:function(){return o}});a(67294);var t=a(81254),r=["components"];function l(){return l=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var a=arguments[n];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(e[t]=a[t])}return e},l.apply(this,arguments)}function i(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},l=Object.keys(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d={},m="wrapper";function o(e){var n=e.components,a=i(e,r);return(0,t.mdx)(m,l({},d,a,{components:n,mdxType:"MDXLayout"}),(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre",className:"language-js"},"const getPairedResultConfig = (id) => ({\n  bindTo: id,\n  axis: {\n    x: {\n      label: 'Data',\n      lowerLimit: 0,\n      upperLimit: 1000,\n    },\n    y: {\n      label: 'Paired',\n      lowerLimit: 0,\n      upperLimit: 200,\n    },\n  },\n  showLabel: true,\n  showLegend: true,\n  showVGrid: true,\n  showHGrid: true,\n});\n\nexport default getPairedResultConfig;\n\n")))}o.isMDXComponent=!0},32910:function(e,n,a){a.d(n,{Z:function(){return o}});a(67294);var t=a(81254),r=["components"];function l(){return l=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var a=arguments[n];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(e[t]=a[t])}return e},l.apply(this,arguments)}function i(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},l=Object.keys(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d={},m="wrapper";function o(e){var n=e.components,a=i(e,r);return(0,t.mdx)(m,l({},d,a,{components:n,mdxType:"MDXLayout"}),(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/lib/js/carbon';\n\nconst getPairedResultTimeseriesConfig = (id) => ({\n  bindTo: id,\n  axis: {\n    x: {\n      type: Carbon.helpers.AXIS_TYPE.TIME_SERIES,\n      label: 'Datetime',\n      lowerLimit: '2016-03-02T12:00:00Z',\n      upperLimit: '2018-12-10T12:00:00Z',\n      ticks: {\n        format: '%b %Y',\n      },\n    },\n    y: {\n      label: 'Paired Set A',\n      lowerLimit: 0,\n      upperLimit: 200,\n    },\n    y2: {\n      show: false,\n      label: 'Paired Set B',\n      lowerLimit: 100,\n      upperLimit: 350,\n    },\n  },\n  showLabel: true,\n  showLegend: true,\n  showVGrid: true,\n  showHGrid: true,\n});\n\nexport default getPairedResultTimeseriesConfig;\n\n")))}o.isMDXComponent=!0}}]);