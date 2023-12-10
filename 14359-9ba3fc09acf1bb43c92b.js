(self.webpackChunkterra_ui=self.webpackChunkterra_ui||[]).push([[14359],{97855:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default=function(e){return{bindTo:e,dimension:{height:300},showLegend:!0}}},34397:function(e,t,n){"use strict";var a=n(64836);t.Z=void 0;var r=a(n(67294)),l=a(n(54520)),d=a(n(53334));n(56867),n(45);var m=a(n(93065)),i=a(n(97855)),p=a(n(33430)),o=a(n(59232)),u=a(n(35272)),s=d.default.deepClone((0,i.default)("#simplePie")),x=[d.default.deepClone(p.default),d.default.deepClone(o.default),d.default.deepClone(u.default)];t.Z=function(){return r.default.useEffect((function(){var e=l.default.api.pie(s);x.forEach((function(t){e.loadContent(t)}))}),[]),r.default.createElement(m.default,{id:"simplePie"})}},62855:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return E}});var a=n(67294),r=n(81254),l=n(34397),d=["components"];function m(){return m=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},m.apply(this,arguments)}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p={};function o(e){var t=e.components,n=i(e,d);return(0,r.mdx)("wrapper",m({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport utils from '@cerner/carbon-graphs/lib/js/helpers/utils';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Graph.module.scss';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Pie/PieChart.module.scss';\nimport ExampleGraphContainer from '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer';\nimport getPieConfig from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Pie/simplePieConfig';\nimport dataset1 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Pie/simplePieDataset1';\nimport dataset2 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Pie/simplePieDataset2';\nimport dataset3 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Pie/simplePieDataset3';\n\n/*\nPlease refer to the documentation below to see the graphConfig and data objects\n*/\n\nconst graphConfig = utils.deepClone(getPieConfig('#simplePie'));\nconst dataset = [\n  utils.deepClone(dataset1),\n  utils.deepClone(dataset2),\n  utils.deepClone(dataset3),\n];\n\nconst SimplePieExample = () => {\n  React.useEffect(() => {\n    const graph = Carbon.api.pie(graphConfig);\n    dataset.forEach((data) => {\n      graph.loadContent(data);\n    });\n  }, []);\n  return (\n    <ExampleGraphContainer id=\"simplePie\" />\n  );\n};\n\nexport default SimplePieExample;\n\n")))}o.isMDXComponent=!0;var u=n(49271),s=n(25005),x=function(e){var t=e.title,n=e.description,r=e.isExpanded;return a.createElement(u.Z,{title:t||"Simple Pie",description:n,example:a.createElement(l.Z,null),exampleCssSrc:a.createElement(s.Z,null),exampleSrc:a.createElement(o,null),isExpanded:r})},g=["components"];function N(){return N=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},N.apply(this,arguments)}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var h={},f="wrapper";function b(e){var t=e.components,n=c(e,g);return(0,r.mdx)(f,N({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-js"},"const getPieConfig = (id) => ({\n  bindTo: id,\n  dimension: {\n    height: 300,\n  },\n  showLegend: true,\n});\n\nexport default getPieConfig;\n\n")))}b.isMDXComponent=!0;var y=n(13275),C=n(12959),v=n(57955),j=["components"];function P(){return P=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},P.apply(this,arguments)}function O(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}n(51320);var w={},D="wrapper";function E(e){var t=e.components,n=O(e,j);return(0,r.mdx)(D,P({},w,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"simple-pie"},"Simple Pie"),(0,r.mdx)("p",null,"This is a simple Pie chart."),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"#getting-started"},"Getting Started")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"#usage"},"Usage")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"#configuration-structure"},"Config Structure")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"#configuration-properties"},"Config properties"),(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"#dimension"},"dimension")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"#legendpadding"},"legendPadding")))),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"#dataset-structure"},"Dataset Structure")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"#dataset-properties"},"Dataset Properties"),(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"#label"},"label")))),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"#examples"},"Example"))),(0,r.mdx)("h2",{id:"getting-started"},"Getting Started"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Install with ",(0,r.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"npm i @cerner/carbon-graphs --save-dev"))))),(0,r.mdx)("h2",{id:"usage"},"Usage"),(0,r.mdx)("p",null,"An instance of a pie graph can be accessed though the ",(0,r.mdx)("inlineCode",{parentName:"p"},"Carbon.api.pie()")," function.\nUnlike most of the other graphs, the pie api does not need an instance of ",(0,r.mdx)("inlineCode",{parentName:"p"},"Carbon.api.graph"),".\nInstead, the graph configuration is directly passed as a parameter to the timeline instance,\nwith the dataset object also directly passed to the ",(0,r.mdx)("inlineCode",{parentName:"p"},"loadContent")," function.\nTherefore, the pie graph can not be combined with other graphs."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/dist/js/carbon-graphs.js';\nimport '@cerner/carbon-graphs/dist/css/carbon-graphs.css';\n\nvar pieGraph = Carbon.api.pie(/* config object */);\npieGraph.loadContent(/* dataset */);\n\n// Multiple datasets can be added:\npieGraph.loadContent(/* dataset1 */);\npieGraph.loadContent(/* dataset2 */);\n")),(0,r.mdx)("h2",{id:"configuration-structure"},"Configuration Structure"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-js"},"const pieConfig = {\n    axis: {\n        x: {\n            label: <string>,\n            lowerLimit: <number> or <Date>,\n            upperLimit: <number or <Date>\n        }\n    },\n    bindTo: <string>,\n    bindLegendTo: <string>,\n    dimension: {\n      height: <number>\n    },\n    legendPadding: {\n      top: <number>,\n      bottom: <number>,\n      left: <number>,\n      right: <number>\n    },\n    removeContainerPadding: <bool>,\n    showLegend: <bool>,\n}\n")),(0,r.mdx)("h2",{id:"configuration-properties"},"Configuration Properties"),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Property Name"),(0,r.mdx)("th",{parentName:"tr",align:null},"Type"),(0,r.mdx)("th",{parentName:"tr",align:null},"Required"),(0,r.mdx)("th",{parentName:"tr",align:null},"Default"),(0,r.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"bindTo"),(0,r.mdx)("td",{parentName:"tr",align:null},"string"),(0,r.mdx)("td",{parentName:"tr",align:null},"yes"),(0,r.mdx)("td",{parentName:"tr",align:null},"-"),(0,r.mdx)("td",{parentName:"tr",align:null},"DOM ID to bind the graph container to.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"data"),(0,r.mdx)("td",{parentName:"tr",align:null},"object"),(0,r.mdx)("td",{parentName:"tr",align:null},"yes"),(0,r.mdx)("td",{parentName:"tr",align:null},"-"),(0,r.mdx)("td",{parentName:"tr",align:null},"See ",(0,r.mdx)("a",{parentName:"td",href:"#dataset-structure"},"Dataset-structure"),".")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"bindLegendTo"),(0,r.mdx)("td",{parentName:"tr",align:null},"string"),(0,r.mdx)("td",{parentName:"tr",align:null},"no"),(0,r.mdx)("td",{parentName:"tr",align:null},"null"),(0,r.mdx)("td",{parentName:"tr",align:null},"ID of custom container to bind legend to (Example: ",(0,r.mdx)("inlineCode",{parentName:"td"},'"#legendContainer"'),").")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"dimension"),(0,r.mdx)("td",{parentName:"tr",align:null},"object"),(0,r.mdx)("td",{parentName:"tr",align:null},"no"),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"{ }")),(0,r.mdx)("td",{parentName:"tr",align:null},"See ",(0,r.mdx)("a",{parentName:"td",href:"#dimension"},"dimension"),".")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"legendPadding"),(0,r.mdx)("td",{parentName:"tr",align:null},"object"),(0,r.mdx)("td",{parentName:"tr",align:null},"no"),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"{ top: 4, bottom: 4, left: 8, right: 8 }")),(0,r.mdx)("td",{parentName:"tr",align:null},"See ",(0,r.mdx)("a",{parentName:"td",href:"#legendpadding"},"legendPadding"),".")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"removeContainerPadding"),(0,r.mdx)("td",{parentName:"tr",align:null},"boolean"),(0,r.mdx)("td",{parentName:"tr",align:null},"no"),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"false")),(0,r.mdx)("td",{parentName:"tr",align:null},"Toggle to remove top and bottom padding of the container for the graph.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"showLegend"),(0,r.mdx)("td",{parentName:"tr",align:null},"boolean"),(0,r.mdx)("td",{parentName:"tr",align:null},"no"),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"true")),(0,r.mdx)("td",{parentName:"tr",align:null},"Toggle to show graph legend.")))),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("h3",{parentName:"li",id:"dimension"},(0,r.mdx)("inlineCode",{parentName:"h3"},"dimension")),(0,r.mdx)("strong",{parentName:"li"},"type:")," object")),(0,r.mdx)("p",null,"Timeline is marked only on ",(0,r.mdx)("inlineCode",{parentName:"p"},"X Axis"),", there is no other axis supplied. Axis is set to ",(0,r.mdx)("inlineCode",{parentName:"p"},"show")," by default."),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Property Name"),(0,r.mdx)("th",{parentName:"tr",align:null},"Type"),(0,r.mdx)("th",{parentName:"tr",align:null},"Required"),(0,r.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"height"),(0,r.mdx)("td",{parentName:"tr",align:null},"number"),(0,r.mdx)("td",{parentName:"tr",align:null},"no"),(0,r.mdx)("td",{parentName:"tr",align:null},"Sets the size of pie chart.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"upperLimit"),(0,r.mdx)("td",{parentName:"tr",align:null},"string"),(0,r.mdx)("td",{parentName:"tr",align:null},"yes"),(0,r.mdx)("td",{parentName:"tr",align:null},"Upper bound for X axis. This is inclusive.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"label"),(0,r.mdx)("td",{parentName:"tr",align:null},"string"),(0,r.mdx)("td",{parentName:"tr",align:null},"yes"),(0,r.mdx)("td",{parentName:"tr",align:null},"Axis label value.")))),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("h3",{parentName:"li",id:"legendpadding"},(0,r.mdx)("inlineCode",{parentName:"h3"},"legendPadding")),(0,r.mdx)("p",{parentName:"li"},(0,r.mdx)("strong",{parentName:"p"},"type:")," object"),(0,r.mdx)("p",{parentName:"li"},"  Sets the legend padding and removes the carbon default margin of ",(0,r.mdx)("inlineCode",{parentName:"p"},"8px")," around legend."),(0,r.mdx)("pre",{parentName:"li"},(0,r.mdx)("code",{parentName:"pre",className:"language-json"},"  legendPadding: {\n    top: <number>,\n    bottom: <number>,\n    left: <number>,\n    right: <number>\n  }\n")),(0,r.mdx)("table",{parentName:"li"},(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Property Name"),(0,r.mdx)("th",{parentName:"tr",align:null},"Type"),(0,r.mdx)("th",{parentName:"tr",align:null},"Required"),(0,r.mdx)("th",{parentName:"tr",align:null},"Default"),(0,r.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"top"),(0,r.mdx)("td",{parentName:"tr",align:null},"number"),(0,r.mdx)("td",{parentName:"tr",align:null},"no"),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"4")),(0,r.mdx)("td",{parentName:"tr",align:null},"Top padding of legend container.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"bottom"),(0,r.mdx)("td",{parentName:"tr",align:null},"number"),(0,r.mdx)("td",{parentName:"tr",align:null},"no"),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"4")),(0,r.mdx)("td",{parentName:"tr",align:null},"Bottom padding of legend container.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"left"),(0,r.mdx)("td",{parentName:"tr",align:null},"number"),(0,r.mdx)("td",{parentName:"tr",align:null},"no"),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"8")),(0,r.mdx)("td",{parentName:"tr",align:null},"Left padding of legend container.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"right"),(0,r.mdx)("td",{parentName:"tr",align:null},"number"),(0,r.mdx)("td",{parentName:"tr",align:null},"no"),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"8")),(0,r.mdx)("td",{parentName:"tr",align:null},"Right padding of legend container.")))))),(0,r.mdx)("h2",{id:"dataset-structure"},"Dataset Structure"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-js"},"const dataset = {\n  key: <string>,\n  value: <number>,\n  color: <hex value as string>,\n  label: {\n    display: <string>,\n  },\n  onClick: <function>\n}\n")),(0,r.mdx)("h3",{id:"dataset-properties"},"Dataset Properties"),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Property Name"),(0,r.mdx)("th",{parentName:"tr",align:null},"Type"),(0,r.mdx)("th",{parentName:"tr",align:null},"Required"),(0,r.mdx)("th",{parentName:"tr",align:null},"Default"),(0,r.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"key"),(0,r.mdx)("td",{parentName:"tr",align:null},"string"),(0,r.mdx)("td",{parentName:"tr",align:null},"yes"),(0,r.mdx)("td",{parentName:"tr",align:null},"-"),(0,r.mdx)("td",{parentName:"tr",align:null},"A unique ",(0,r.mdx)("inlineCode",{parentName:"td"},"id")," to identify the dataset. Adding two datasets with the same ",(0,r.mdx)("inlineCode",{parentName:"td"},"key")," will result in an error.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"value"),(0,r.mdx)("td",{parentName:"tr",align:null},"number"),(0,r.mdx)("td",{parentName:"tr",align:null},"yes"),(0,r.mdx)("td",{parentName:"tr",align:null},"-"),(0,r.mdx)("td",{parentName:"tr",align:null},"Value for the slice.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"color"),(0,r.mdx)("td",{parentName:"tr",align:null},"string"),(0,r.mdx)("td",{parentName:"tr",align:null},"no"),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"COLORS.BLUE")),(0,r.mdx)("td",{parentName:"tr",align:null},"Color for the data points. Can be a hex value (",(0,r.mdx)("inlineCode",{parentName:"td"},"#ffffff"),") or a constant from ",(0,r.mdx)("a",{parentName:"td",href:"../core-configuration/documentation/Colors"},"Colors"),".")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"label"),(0,r.mdx)("td",{parentName:"tr",align:null},"object"),(0,r.mdx)("td",{parentName:"tr",align:null},"no"),(0,r.mdx)("td",{parentName:"tr",align:null},"{}"),(0,r.mdx)("td",{parentName:"tr",align:null},"See ",(0,r.mdx)("a",{parentName:"td",href:"#label"},"label"),".")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"onClick"),(0,r.mdx)("td",{parentName:"tr",align:null},"function"),(0,r.mdx)("td",{parentName:"tr",align:null},"no"),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"undefined")),(0,r.mdx)("td",{parentName:"tr",align:null},"Function to execute upon clicking a datapoint, such as to display a popup.")))),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("h3",{parentName:"li",id:"label"},(0,r.mdx)("inlineCode",{parentName:"h3"},"label")),(0,r.mdx)("p",{parentName:"li"},(0,r.mdx)("strong",{parentName:"p"},"type:")," object\n",(0,r.mdx)("strong",{parentName:"p"},"default value:")," ",(0,r.mdx)("inlineCode",{parentName:"p"},"{}")),(0,r.mdx)("p",{parentName:"li"},"  Label for the dataset in the legend. If it is not provided then it will not be shown in the legend."),(0,r.mdx)("pre",{parentName:"li"},(0,r.mdx)("code",{parentName:"pre"},"```json\n  label: {\n    display: <string>\n  }\n```\n")),(0,r.mdx)("table",{parentName:"li"},(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Property Name"),(0,r.mdx)("th",{parentName:"tr",align:null},"Type"),(0,r.mdx)("th",{parentName:"tr",align:null},"Required"),(0,r.mdx)("th",{parentName:"tr",align:null},"Default"),(0,r.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"display"),(0,r.mdx)("td",{parentName:"tr",align:null},"string"),(0,r.mdx)("td",{parentName:"tr",align:null},"no"),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"undefined")),(0,r.mdx)("td",{parentName:"tr",align:null},"Text to display as the label for the dataset.")))))),(0,r.mdx)("h2",{id:"examples"},"Examples"),(0,r.mdx)(x,{mdxType:"PieChart"}),(0,r.mdx)("details",null,(0,r.mdx)("summary",{style:{fontSize:24}},(0,r.mdx)("b",null,"Data")),(0,r.mdx)("h3",{id:"graph-config-object"},"Graph Config object"),(0,r.mdx)(b,{mdxType:"GraphConfig"}),(0,r.mdx)("h3",{id:"data-object"},"Data object"),(0,r.mdx)("h4",{id:"dataset-1"},"Dataset 1"),(0,r.mdx)(y.Z,{mdxType:"DataObject1"}),(0,r.mdx)("h4",{id:"dataset-2"},"Dataset 2"),(0,r.mdx)(C.Z,{mdxType:"DataObject2"}),(0,r.mdx)("h4",{id:"dataset-3"},"Dataset 3"),(0,r.mdx)(v.Z,{mdxType:"DataObject3"})))}E.isMDXComponent=!0},51320:function(e,t,n){var a,r;void 0===(r="function"==typeof(a=function(){var e="details",t="summary";function n(e){if("summary"===e.target.nodeName.toLowerCase()){var t=e.target.parentNode;if(!t)return;t.getAttribute("open")?(t.open=!1,t.removeAttribute("open")):(t.open=!0,t.setAttribute("open","open"))}}function a(){var n=document.createElement(e);if(!("open"in n))return!1;n.innerHTML="<"+t+">a</"+t+">b",document.body.appendChild(n);var a=n.offsetHeight;n.open=!0;var r=a!=n.offsetHeight;return document.body.removeChild(n),r}function r(e,t){if(!document.getElementById(e)){var n=document.createElement("style");n.id=e,n.innerHTML=t,document.getElementsByTagName("head")[0].appendChild(n)}}a()||(document.documentElement.className+=" no-details",window.addEventListener("click",n),r("details-polyfill-style","html.no-details "+e+" { display: block; }\nhtml.no-details "+e+":not([open]) > :not("+t+") { display: none; }\nhtml.no-details "+e+" > "+t+':before { content: "▶"; display: inline-block; font-size: .8em; width: 1.5em; }\nhtml.no-details '+e+"[open] > "+t+':before { content: "▼"; }'))})?a.call(t,n,t,e):a)||(e.exports=r)}}]);