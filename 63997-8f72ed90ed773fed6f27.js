"use strict";(self.webpackChunkterra_ui=self.webpackChunkterra_ui||[]).push([[63997,26196],{75946:function(e,a,n){var r=n(64836);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var l=r(n(54520)),t=n(22678),o={key:"axisinfo_bar_1",label:{display:"Dataset 1"},group:"uid_bar_1",color:l.default.helpers.COLORS.YELLOW,onClick:t.loadBarPopup,values:[{x:1,y:10},{x:2,y:15},{x:3,y:18},{x:4,y:6},{x:5,y:0},{x:6,y:10}],axisInfoRow:[{axis:"x",x:1,value:{onClick:t.loadTextLabelPopup,characterCount:4,color:l.default.helpers.COLORS.ORANGE,shape:{path:{d:"M24,0l24,24L24,48L0,24L24,0z",fill:l.default.helpers.COLORS.ORANGE},options:{x:-6,y:-6,scale:.25}},label:{display:"1234567",secondaryDisplay:"ICU"}}},{axis:"x",x:2,value:{onClick:t.loadTextLabelPopup,color:l.default.helpers.COLORS.BLACK,shape:{path:{d:"M24,0l24,24L24,48L0,24L24,0z",fill:l.default.helpers.COLORS.PURPLE},options:{x:-6,y:-6,scale:.25}},label:{display:"65",secondaryDisplay:"ICU"}}},{axis:"x",x:3,value:{onClick:t.loadTextLabelPopup,color:l.default.helpers.COLORS.GREEN,shape:{path:{d:"M24,0l24,24L24,48L0,24L24,0z"},options:{x:-6,y:-6,scale:.25}},label:{display:"42",secondaryDisplay:"ICU"}}},{axis:"x",x:4,value:{onClick:t.loadTextLabelPopup,color:l.default.helpers.COLORS.BLACK,shape:{},label:{display:"23",secondaryDisplay:""}}},{axis:"x",x:5,value:{onClick:t.loadTextLabelPopup,color:l.default.helpers.COLORS.BLACK,shape:{},label:{display:"",secondaryDisplay:"ICU"}}},{axis:"x",x:6,value:{onClick:t.loadTextLabelPopup,color:l.default.helpers.COLORS.BLACK,shape:{},label:{display:"25",secondaryDisplay:"ICU"}}}]};a.default=o},15575:function(e,a,n){var r=n(64836);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var l=r(n(54520)),t=n(22678),o={key:"stacked_bar_1",label:{display:"Dataset 1"},color:l.default.helpers.COLORS.GREEN,onClick:t.loadBarPopup,values:[{x:1,y:30},{x:2,y:10},{x:3,y:13},{x:4,y:15},{x:5,y:18}],axisInfoRow:[{axis:"x",x:1,value:{onClick:t.loadTextLabelPopup,characterCount:4,color:l.default.helpers.COLORS.ORANGE,shape:{path:{d:"M24,0l24,24L24,48L0,24L24,0z",fill:l.default.helpers.COLORS.ORANGE},options:{x:-6,y:-6,scale:.25}},label:{display:"1234567",secondaryDisplay:"ICU"}}},{axis:"x",x:2,value:{onClick:t.loadTextLabelPopup,color:l.default.helpers.COLORS.BLACK,shape:{path:{d:"M24,0l24,24L24,48L0,24L24,0z",fill:l.default.helpers.COLORS.PURPLE},options:{x:-6,y:-6,scale:.25}},label:{display:"65",secondaryDisplay:"ICU"}}},{axis:"x",x:3,value:{onClick:t.loadTextLabelPopup,color:l.default.helpers.COLORS.GREEN,shape:{path:{d:"M24,0l24,24L24,48L0,24L24,0z"},options:{x:-6,y:-6,scale:.25}},label:{display:"42",secondaryDisplay:"ICU"}}},{axis:"x",x:4,value:{onClick:t.loadTextLabelPopup,color:l.default.helpers.COLORS.BLACK,shape:{},label:{display:"23",secondaryDisplay:""}}},{axis:"x",x:5,value:{onClick:t.loadTextLabelPopup,color:l.default.helpers.COLORS.BLACK,shape:{},label:{display:"",secondaryDisplay:"ICU"}}},{axis:"x",x:6,value:{onClick:t.loadTextLabelPopup,color:l.default.helpers.COLORS.BLACK,shape:{},label:{display:"25",secondaryDisplay:"ICU"}}}]};a.default=o},92749:function(e,a,n){var r=n(64836);a.Z=void 0;var l=r(n(67294)),t=r(n(54520)),o=r(n(53334));n(56867),n(83054);var s=r(n(93065)),p=r(n(13512)),i=r(n(75946)),d=o.default.deepClone((0,p.default)("#axisInfoTextLabelsBarGraph")),c=o.default.deepClone(i.default);a.Z=function(){return l.default.useEffect((function(){t.default.api.graph(d).loadContent(t.default.api.bar(c))}),[]),l.default.createElement(s.default,{id:"axisInfoTextLabelsBarGraph"})}},75113:function(e,a,n){var r=n(64836);a.Z=void 0;var l=r(n(67294)),t=r(n(54520)),o=r(n(53334));n(56867),n(83054);var s=r(n(93065)),p=r(n(13512)),i=r(n(15575)),d=r(n(89958)),c=r(n(34962)),x=o.default.deepClone((0,p.default)("#stackedAxisInfoTextLabelsBarGraph")),u=[o.default.deepClone(i.default),o.default.deepClone(d.default),o.default.deepClone(c.default)];a.Z=function(){return l.default.useEffect((function(){var e=t.default.api.graph(x);u.forEach((function(a){e.loadContent(t.default.api.bar(a))}))}),[]),l.default.createElement(s.default,{id:"stackedAxisInfoTextLabelsBarGraph"})}},47048:function(e,a,n){n.r(a),n.d(a,{default:function(){return z}});var r=n(67294),l=n(81254),t=n(92749),o=["components"];function s(){return s=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var n=arguments[a];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s.apply(this,arguments)}function p(e,a){if(null==e)return{};var n,r,l=function(e,a){if(null==e)return{};var n,r,l={},t=Object.keys(e);for(r=0;r<t.length;r++)n=t[r],a.indexOf(n)>=0||(l[n]=e[n]);return l}(e,a);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(r=0;r<t.length;r++)n=t[r],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var i={},d="wrapper";function c(e){var a=e.components,n=p(e,o);return(0,l.mdx)(d,s({},i,n,{components:a,mdxType:"MDXLayout"}),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport utils from '@cerner/carbon-graphs/lib/js/helpers/utils';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Graph.module.scss';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Bar/BarGraph.module.scss';\nimport ExampleGraphContainer from '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer';\nimport getBarConfig from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Bar/barDefault';\nimport exampleData from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Bar/dataset1axisInfoLabels';\n\n/*\nPlease refer to the documentation below to see the graphConfig and data objects\n*/\n\nconst graphConfig = utils.deepClone(getBarConfig('#axisInfoTextLabelsBarGraph'));\nconst dataset = utils.deepClone(exampleData);\n\nexport default () => {\n  React.useEffect(() => {\n    const graph = Carbon.api.graph(graphConfig);\n    graph.loadContent(Carbon.api.bar(dataset));\n  }, []);\n\n  return (\n    <ExampleGraphContainer id=\"axisInfoTextLabelsBarGraph\" />\n  );\n};\n\n")))}c.isMDXComponent=!0;var x=n(49271),u=n(25005),b=function(e){var a=e.title,n=e.description,l=e.isExpanded;return r.createElement(x.Z,{title:a||"Axis Info Text Labels",description:n,example:r.createElement(t.Z,null),exampleCssSrc:r.createElement(u.Z,null),exampleSrc:r.createElement(c,null),isExpanded:l})},f=n(50298),m=["components"];function h(){return h=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var n=arguments[a];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},h.apply(this,arguments)}function y(e,a){if(null==e)return{};var n,r,l=function(e,a){if(null==e)return{};var n,r,l={},t=Object.keys(e);for(r=0;r<t.length;r++)n=t[r],a.indexOf(n)>=0||(l[n]=e[n]);return l}(e,a);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(r=0;r<t.length;r++)n=t[r],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var C={},O="wrapper";function L(e){var a=e.components,n=y(e,m);return(0,l.mdx)(O,h({},C,n,{components:a,mdxType:"MDXLayout"}),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport { loadBarPopup, loadTextLabelPopup } from '@cerner/terra-graphs-docs/lib/example-datasets/popup';\n\nconst data = {\n  key: 'axisinfo_bar_1',\n  label: {\n    display: 'Dataset 1',\n  },\n  group: 'uid_bar_1',\n  color: Carbon.helpers.COLORS.YELLOW,\n  onClick: loadBarPopup,\n  values: [\n    {\n      x: 1,\n      y: 10,\n    },\n    {\n      x: 2,\n      y: 15,\n    },\n    {\n      x: 3,\n      y: 18,\n    },\n    {\n      x: 4,\n      y: 6,\n    },\n    {\n      x: 5,\n      y: 0,\n    },\n    {\n      x: 6,\n      y: 10,\n    },\n  ],\n  axisInfoRow: [\n    {\n      axis: 'x',\n      x: 1,\n      value: {\n        onClick: loadTextLabelPopup,\n        characterCount: 4,\n        color: Carbon.helpers.COLORS.ORANGE,\n        shape: {\n          path: {\n            d: 'M24,0l24,24L24,48L0,24L24,0z',\n            fill: Carbon.helpers.COLORS.ORANGE,\n          },\n          options: {\n            x: -6,\n            y: -6,\n            scale: 0.25,\n          },\n        },\n        label: {\n          display: '1234567',\n          secondaryDisplay: 'ICU',\n        },\n      },\n    },\n    {\n      axis: 'x',\n      x: 2,\n      value: {\n        onClick: loadTextLabelPopup,\n        color: Carbon.helpers.COLORS.BLACK,\n        shape: {\n          path: {\n            d: 'M24,0l24,24L24,48L0,24L24,0z',\n            fill: Carbon.helpers.COLORS.PURPLE,\n          },\n          options: {\n            x: -6,\n            y: -6,\n            scale: 0.25,\n          },\n        },\n        label: {\n          display: '65',\n          secondaryDisplay: 'ICU',\n        },\n      },\n    },\n    {\n      axis: 'x',\n      x: 3,\n      value: {\n        onClick: loadTextLabelPopup,\n        color: Carbon.helpers.COLORS.GREEN,\n        shape: {\n          path: {\n            d: 'M24,0l24,24L24,48L0,24L24,0z',\n          },\n          options: {\n            x: -6,\n            y: -6,\n            scale: 0.25,\n          },\n        },\n        label: {\n          display: '42',\n          secondaryDisplay: 'ICU',\n        },\n      },\n    },\n    {\n      axis: 'x',\n      x: 4,\n      value: {\n        onClick: loadTextLabelPopup,\n        color: Carbon.helpers.COLORS.BLACK,\n        shape: {},\n        label: {\n          display: '23',\n          secondaryDisplay: '',\n        },\n      },\n    },\n    {\n      axis: 'x',\n      x: 5,\n      value: {\n        onClick: loadTextLabelPopup,\n        color: Carbon.helpers.COLORS.BLACK,\n        shape: {},\n        label: {\n          display: '',\n          secondaryDisplay: 'ICU',\n        },\n      },\n    },\n    {\n      axis: 'x',\n      x: 6,\n      value: {\n        onClick: loadTextLabelPopup,\n        color: Carbon.helpers.COLORS.BLACK,\n        shape: {},\n        label: {\n          display: '25',\n          secondaryDisplay: 'ICU',\n        },\n      },\n    },\n  ],\n};\n\nexport default data;\n\n")))}L.isMDXComponent=!0;var g=n(75113),v=["components"];function j(){return j=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var n=arguments[a];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},j.apply(this,arguments)}function D(e,a){if(null==e)return{};var n,r,l=function(e,a){if(null==e)return{};var n,r,l={},t=Object.keys(e);for(r=0;r<t.length;r++)n=t[r],a.indexOf(n)>=0||(l[n]=e[n]);return l}(e,a);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(r=0;r<t.length;r++)n=t[r],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var R={},S="wrapper";function E(e){var a=e.components,n=D(e,v);return(0,l.mdx)(S,j({},R,n,{components:a,mdxType:"MDXLayout"}),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport utils from '@cerner/carbon-graphs/lib/js/helpers/utils';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Graph.module.scss';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Bar/BarGraph.module.scss';\nimport ExampleGraphContainer from '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer';\nimport getBarConfig from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Bar/barDefault';\nimport exampleData1 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Bar/stackedBarData1AxisInfo';\nimport exampleData2 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Bar/stackedBarData2.js';\nimport exampleData3 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Bar/stackedBarData3.js';\n\n/*\nPlease refer to the documentation below to see the graphConfig and data objects\n*/\n\nconst graphConfig = utils.deepClone(getBarConfig('#stackedAxisInfoTextLabelsBarGraph'));\nconst dataset = [\n  utils.deepClone(exampleData1),\n  utils.deepClone(exampleData2),\n  utils.deepClone(exampleData3),\n];\n\nexport default () => {\n  React.useEffect(() => {\n    const graph = Carbon.api.graph(graphConfig);\n    dataset.forEach((data) => {\n      graph.loadContent(Carbon.api.bar(data));\n    });\n  }, []);\n\n  return (\n    <ExampleGraphContainer id=\"stackedAxisInfoTextLabelsBarGraph\" />\n  );\n};\n\n")))}E.isMDXComponent=!0;var P=function(e){var a=e.title,n=e.description,l=e.isExpanded;return r.createElement(x.Z,{title:a||"Stacked Axis Info Text Labels",description:n,example:r.createElement(g.Z,null),exampleCssSrc:r.createElement(u.Z,null),exampleSrc:r.createElement(E,null),isExpanded:l})},k=["components"];function I(){return I=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var n=arguments[a];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},I.apply(this,arguments)}function B(e,a){if(null==e)return{};var n,r,l=function(e,a){if(null==e)return{};var n,r,l={},t=Object.keys(e);for(r=0;r<t.length;r++)n=t[r],a.indexOf(n)>=0||(l[n]=e[n]);return l}(e,a);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(r=0;r<t.length;r++)n=t[r],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var T={},A="wrapper";function G(e){var a=e.components,n=B(e,k);return(0,l.mdx)(A,I({},T,n,{components:a,mdxType:"MDXLayout"}),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport { loadBarPopup, loadTextLabelPopup } from '@cerner/terra-graphs-docs/lib/example-datasets/popup';\n\nconst data = {\n  key: 'stacked_bar_1',\n  label: {\n    display: 'Dataset 1',\n  },\n  color: Carbon.helpers.COLORS.GREEN,\n  onClick: loadBarPopup,\n  values: [\n    {\n      x: 1,\n      y: 30,\n    },\n    {\n      x: 2,\n      y: 10,\n    },\n    {\n      x: 3,\n      y: 13,\n    },\n    {\n      x: 4,\n      y: 15,\n    },\n    {\n      x: 5,\n      y: 18,\n    },\n  ],\n  axisInfoRow: [\n    {\n      axis: 'x',\n      x: 1,\n      value: {\n        onClick: loadTextLabelPopup,\n        characterCount: 4,\n        color: Carbon.helpers.COLORS.ORANGE,\n        shape: {\n          path: {\n            d: 'M24,0l24,24L24,48L0,24L24,0z',\n            fill: Carbon.helpers.COLORS.ORANGE,\n          },\n          options: {\n            x: -6,\n            y: -6,\n            scale: 0.25,\n          },\n        },\n        label: {\n          display: '1234567',\n          secondaryDisplay: 'ICU',\n        },\n      },\n    },\n    {\n      axis: 'x',\n      x: 2,\n      value: {\n        onClick: loadTextLabelPopup,\n        color: Carbon.helpers.COLORS.BLACK,\n        shape: {\n          path: {\n            d: 'M24,0l24,24L24,48L0,24L24,0z',\n            fill: Carbon.helpers.COLORS.PURPLE,\n          },\n          options: {\n            x: -6,\n            y: -6,\n            scale: 0.25,\n          },\n        },\n        label: {\n          display: '65',\n          secondaryDisplay: 'ICU',\n        },\n      },\n    },\n    {\n      axis: 'x',\n      x: 3,\n      value: {\n        onClick: loadTextLabelPopup,\n        color: Carbon.helpers.COLORS.GREEN,\n        shape: {\n          path: {\n            d: 'M24,0l24,24L24,48L0,24L24,0z',\n          },\n          options: {\n            x: -6,\n            y: -6,\n            scale: 0.25,\n          },\n        },\n        label: {\n          display: '42',\n          secondaryDisplay: 'ICU',\n        },\n      },\n    },\n    {\n      axis: 'x',\n      x: 4,\n      value: {\n        onClick: loadTextLabelPopup,\n        color: Carbon.helpers.COLORS.BLACK,\n        shape: {},\n        label: {\n          display: '23',\n          secondaryDisplay: '',\n        },\n      },\n    },\n    {\n      axis: 'x',\n      x: 5,\n      value: {\n        onClick: loadTextLabelPopup,\n        color: Carbon.helpers.COLORS.BLACK,\n        shape: {},\n        label: {\n          display: '',\n          secondaryDisplay: 'ICU',\n        },\n      },\n    },\n    {\n      axis: 'x',\n      x: 6,\n      value: {\n        onClick: loadTextLabelPopup,\n        color: Carbon.helpers.COLORS.BLACK,\n        shape: {},\n        label: {\n          display: '25',\n          secondaryDisplay: 'ICU',\n        },\n      },\n    },\n  ],\n};\n\nexport default data;\n\n")))}G.isMDXComponent=!0;var w=n(14327),N=["components"];function U(){return U=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var n=arguments[a];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},U.apply(this,arguments)}function M(e,a){if(null==e)return{};var n,r,l=function(e,a){if(null==e)return{};var n,r,l={},t=Object.keys(e);for(r=0;r<t.length;r++)n=t[r],a.indexOf(n)>=0||(l[n]=e[n]);return l}(e,a);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(r=0;r<t.length;r++)n=t[r],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}n(51320);var _={},K="wrapper";function z(e){var a=e.components,n=M(e,N);return(0,l.mdx)(K,U({},_,n,{components:a,mdxType:"MDXLayout"}),(0,l.mdx)("h1",{id:"axis-info-labels"},"Axis Info Labels"),(0,l.mdx)("p",null,"Axis info labels consists of bar graphs with simple bar axis info labels and stacked bar axis info labels."),(0,l.mdx)("h2",{id:"getting-started"},"Getting Started"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"Install with ",(0,l.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"npm i @cerner/carbon-graphs --save-dev"))))),(0,l.mdx)("h2",{id:"usage"},"Usage"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-jsx"},"import Carbon from '@cerner/carbon-graphs/dist/js/carbon-graphs.js';\nimport '@cerner/carbon-graphs/dist/css/carbon-graphs.css';\n")),(0,l.mdx)("h2",{id:"examples"},"Examples"),(0,l.mdx)(b,{mdxType:"SimpleAxisInfoLabelBarGraph"}),(0,l.mdx)("details",null,(0,l.mdx)("summary",{style:{fontSize:24}},(0,l.mdx)("b",null,"Data used for simple bar axis info labels")),(0,l.mdx)("h3",{id:"graph-config-object"},"Graph Config object"),(0,l.mdx)(f.Z,{mdxType:"SimpleAxisInfoLabelGraphConfig"}),(0,l.mdx)("h3",{id:"data-object"},"Data object"),(0,l.mdx)(L,{mdxType:"SimpleAxisInfoLabelDataObject"})),(0,l.mdx)("br",null),(0,l.mdx)("br",null),(0,l.mdx)("br",null),(0,l.mdx)(P,{mdxType:"StackedAxisInfoLabelBarGraph"}),(0,l.mdx)("details",null,(0,l.mdx)("summary",{style:{fontSize:24}},(0,l.mdx)("b",null,"Data used for stacked bar axis info labels")),(0,l.mdx)("h3",{id:"graph-config-object-1"},"Graph Config object"),(0,l.mdx)(f.Z,{mdxType:"StackedAxisInfoLabelGraphConfig"}),(0,l.mdx)("h3",{id:"data-object-1"},"Data object"),(0,l.mdx)("h4",{id:"dataset-1"},"Dataset 1"),(0,l.mdx)(G,{mdxType:"StackedAxisInfoLabelDataObject1"}),(0,l.mdx)("h4",{id:"dataset-2"},"Dataset 2"),(0,l.mdx)(w.Z,{mdxType:"StackedAxisInfoLabelDataObject2"}),(0,l.mdx)("h4",{id:"dataset-3"},"Dataset 3"),(0,l.mdx)(w.Z,{mdxType:"StackedAxisInfoLabelDataObject3"})))}z.isMDXComponent=!0}}]);