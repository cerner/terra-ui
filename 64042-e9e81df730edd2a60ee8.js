"use strict";(self.webpackChunkterra_ui=self.webpackChunkterra_ui||[]).push([[64042],{26159:function(e,a,n){var r=n(64836);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var t=r(n(54520)),o=n(22678),l=n(5485),i={key:"uid_1",label:{display:"Data Label 1"},color:t.default.helpers.COLORS.BLACK,onClick:o.loadPopup,values:(0,l.createGraphValuesWithSin)({length:20,initialX:85,xModifier:10,yModifier:Math.PI})};a.default=i},16921:function(e,a,n){var r=n(64836);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var t=r(n(54520)),o=n(22678),l={key:"uid_1",label:{display:"Data Label 1"},shape:t.default.helpers.SHAPES.DARK.CIRCLE,onClick:o.loadPopup,values:[{x:new Date(2016,0,1,1,5).toISOString(),y:5},{x:new Date(2016,0,1,2,15).toISOString(),y:11},{x:new Date(2016,0,1,3,15).toISOString(),y:12},{x:new Date(2016,0,1,4,15).toISOString(),y:16},{x:new Date(2016,0,1,5,15).toISOString(),y:17},{x:new Date(2016,0,1,6,15).toISOString(),y:9},{x:new Date(2016,0,1,7,0).toISOString(),y:11},{x:new Date(2016,0,1,8,15).toISOString(),y:12},{x:new Date(2016,0,1,9,45).toISOString(),y:16},{x:new Date(2016,0,1,12,15).toISOString(),y:17},{x:new Date(2016,0,1,13,15).toISOString(),y:28},{x:new Date(2016,0,1,14,15).toISOString(),y:12},{x:new Date(2016,0,1,19,45).toISOString(),y:13},{x:new Date(2016,0,1,21,15).toISOString(),y:14}],yAxis:"y"};a.default=l},91466:function(e,a){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=function(e){return{bindTo:e,bindLegendTo:null,axis:{x:{show:!0,label:"Data",lowerLimit:80,upperLimit:280},y:{show:!0,label:"Line Set A",lowerLimit:-18,upperLimit:18},y2:{show:!1,label:"Line Set B",lowerLimit:0,upperLimit:250}},showLabel:!0,showLegend:!0,showShapes:!0,showVGrid:!0,showHGrid:!0}};a.default=n},46146:function(e,a){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=function(e){return{bindTo:e,bindLegendTo:null,axis:{x:{show:!0,label:"Data",lowerLimit:100,upperLimit:150,allowCalibration:!1},y:{show:!0,label:"Line Set A",lowerLimit:-18,upperLimit:18},y2:{show:!1,label:"Line Set B",lowerLimit:0,upperLimit:250}},showLabel:!0,showLegend:!0,showShapes:!0,showVGrid:!0,showHGrid:!0}};a.default=n},96982:function(e,a){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=function(e){return{bindTo:e,bindLegendTo:null,axis:{x:{show:!0,label:"Data",lowerLimit:100,upperLimit:150,allowCalibration:!0},y:{show:!0,label:"Line Set A",lowerLimit:-18,upperLimit:18},y2:{show:!1,label:"Line Set B",lowerLimit:0,upperLimit:250}},showLabel:!0,showLegend:!0,showShapes:!0,showVGrid:!0,showHGrid:!0}};a.default=n},7098:function(e,a){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=function(e){return{bindTo:e,bindLegendTo:null,axis:{x:{show:!0,label:"Data",lowerLimit:80,upperLimit:280},y:{show:!0,label:"Line Set A",lowerLimit:-18,upperLimit:18},y2:{show:!1,label:"Line Set B",lowerLimit:0,upperLimit:250}},showLabel:!0,showLegend:!0,showShapes:!0,showVGrid:!0,showHGrid:!0,allowCalibration:!1}};a.default=n},12037:function(e,a,n){var r=n(64836);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var t=r(n(54520)),o=function(e){return{bindTo:e,axis:{x:{type:t.default.helpers.AXIS_TYPE.TIME_SERIES,label:"Datetime",lowerLimit:new Date(2016,0,1,9,0).toISOString(),upperLimit:new Date(2016,0,1,15,59).toISOString(),allowCalibration:!1},y:{label:"Line Set A",lowerLimit:10,upperLimit:30},y2:{show:!1,label:"Line Set B",lowerLimit:0,upperLimit:250}},showLabel:!0,showLegend:!0,showShapes:!0,showVGrid:!0,showHGrid:!0}};a.default=o},23103:function(e,a,n){var r=n(64836);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var t=r(n(54520)),o=function(e){return{bindTo:e,axis:{x:{type:t.default.helpers.AXIS_TYPE.TIME_SERIES,label:"Datetime",lowerLimit:new Date(2016,0,1,9,0).toISOString(),upperLimit:new Date(2016,0,1,15,59).toISOString(),allowCalibration:!0},y:{label:"Line Set A",lowerLimit:10,upperLimit:30},y2:{show:!1,label:"Line Set B",lowerLimit:0,upperLimit:250}},showLabel:!0,showLegend:!0,showShapes:!0,showVGrid:!0,showHGrid:!0}};a.default=o},803:function(e,a,n){var r=n(64836);a.Z=void 0;var t=r(n(67294)),o=r(n(54520)),l=r(n(53334));n(56867),n(39003);var i=r(n(93065)),s=r(n(12037)),p=r(n(16921)),d=l.default.deepClone((0,s.default)("#allowCalibrationXDisabledTimeseries")),c=l.default.deepClone(p.default),m=function(){return t.default.useEffect((function(){o.default.api.graph(d).loadContent(o.default.api.line(c))}),[]),t.default.createElement(i.default,{id:"allowCalibrationXDisabledTimeseries"})};a.Z=m},98872:function(e,a,n){var r=n(64836);a.Z=void 0;var t=r(n(67294)),o=r(n(54520)),l=r(n(53334));n(56867),n(39003);var i=r(n(93065)),s=r(n(46146)),p=r(n(26159)),d=l.default.deepClone((0,s.default)("#allowCalibrationXDisabled")),c=l.default.deepClone(p.default),m=function(){return t.default.useEffect((function(){o.default.api.graph(d).loadContent(o.default.api.line(c))}),[]),t.default.createElement(i.default,{id:"allowCalibrationXDisabled"})};a.Z=m},13217:function(e,a,n){var r=n(64836);a.Z=void 0;var t=r(n(67294)),o=r(n(54520)),l=r(n(53334));n(56867),n(39003);var i=r(n(93065)),s=r(n(7098)),p=r(n(66177)),d=l.default.deepClone((0,s.default)("#disableCalibration")),c=l.default.deepClone(p.default),m=function(){return t.default.useEffect((function(){o.default.api.graph(d).loadContent(o.default.api.line(c))}),[]),t.default.createElement(i.default,{id:"disableCalibration"})};a.Z=m},24368:function(e,a,n){var r=n(64836);a.Z=void 0;var t=r(n(67294)),o=r(n(54520)),l=r(n(53334));n(56867),n(39003);var i=r(n(93065)),s=r(n(23103)),p=r(n(16921)),d=l.default.deepClone((0,s.default)("#allowCalibrationXTimeseries")),c=l.default.deepClone(p.default),m=function(){return t.default.useEffect((function(){o.default.api.graph(d).loadContent(o.default.api.line(c))}),[]),t.default.createElement(i.default,{id:"allowCalibrationXTimeseries"})};a.Z=m},72894:function(e,a,n){var r=n(64836);a.Z=void 0;var t=r(n(67294)),o=r(n(54520)),l=r(n(53334));n(56867),n(39003);var i=r(n(93065)),s=r(n(96982)),p=r(n(26159)),d=l.default.deepClone((0,s.default)("#allowCalibrationX")),c=l.default.deepClone(p.default),m=function(){return t.default.useEffect((function(){o.default.api.graph(d).loadContent(o.default.api.line(c))}),[]),t.default.createElement(i.default,{id:"allowCalibrationX"})};a.Z=m},31780:function(e,a,n){var r=n(64836);a.Z=void 0;var t=r(n(67294)),o=r(n(54520)),l=r(n(53334));n(56867),n(39003);var i=r(n(93065)),s=r(n(91466)),p=r(n(66177)),d=l.default.deepClone((0,s.default)("#allowYCalibrationExample")),c=l.default.deepClone(p.default),m=function(){return t.default.useEffect((function(){o.default.api.graph(d).loadContent(o.default.api.line(c))}),[]),t.default.createElement(i.default,{id:"allowYCalibrationExample"})};a.Z=m},64042:function(e,a,n){n.r(a),n.d(a,{default:function(){return se}});var r=n(67294),t=n(81254),o=n(31780),l=["components"];function i(){return i=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var n=arguments[a];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i.apply(this,arguments)}function s(e,a){if(null==e)return{};var n,r,t=function(e,a){if(null==e)return{};var n,r,t={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],a.indexOf(n)>=0||(t[n]=e[n]);return t}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var p={},d="wrapper";function c(e){var a=e.components,n=s(e,l);return(0,t.mdx)(d,i({},p,n,{components:a,mdxType:"MDXLayout"}),(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport utils from '@cerner/carbon-graphs/lib/js/helpers/utils';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Graph.module.scss';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Line/LineGraph.module.scss';\nimport ExampleGraphContainer from '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer';\nimport getConfig from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/General/generalDefault';\nimport exampleData from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Line/dataset6';\n\n/*\nPlease refer to the documentation below to see the graphConfig and data objects\n*/\n\nconst graphConfig = utils.deepClone(getConfig('#allowYCalibrationExample'));\nconst dataset = utils.deepClone(exampleData);\n\nconst AllowCalibrationExample = () => {\n  React.useEffect(() => {\n    const graph = Carbon.api.graph(graphConfig);\n    graph.loadContent(Carbon.api.line(dataset));\n  }, []);\n\n  return (\n    <ExampleGraphContainer id=\"allowYCalibrationExample\" />\n  );\n};\n\nexport default AllowCalibrationExample;\n\n\n")))}c.isMDXComponent=!0;var m=n(49271),u=n(25005),f=function(e){var a=e.title,n=e.description,t=e.isExpanded;return r.createElement(m.Z,{title:a||"Allow Calibration Enabled Y Axis",description:n,example:r.createElement(o.Z,null),exampleCssSrc:r.createElement(u.Z,null),exampleSrc:r.createElement(c,null),isExpanded:t})},b=n(13217),h=["components"];function g(){return g=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var n=arguments[a];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},g.apply(this,arguments)}function x(e,a){if(null==e)return{};var n,r,t=function(e,a){if(null==e)return{};var n,r,t={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],a.indexOf(n)>=0||(t[n]=e[n]);return t}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var C={},w="wrapper";function y(e){var a=e.components,n=x(e,h);return(0,t.mdx)(w,g({},C,n,{components:a,mdxType:"MDXLayout"}),(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport utils from '@cerner/carbon-graphs/lib/js/helpers/utils';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Graph.module.scss';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Line/LineGraph.module.scss';\nimport ExampleGraphContainer from '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer';\nimport getLineDefaultNoCalibrationConfig from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/General/generalDefaultYCalibrationDisabled';\nimport exampleData from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Line/dataset6';\n\n/*\nPlease refer to the documentation below to see the graphConfig and data objects\n*/\n\nconst graphConfig = utils.deepClone(getLineDefaultNoCalibrationConfig('#disableCalibration'));\nconst dataset = utils.deepClone(exampleData);\n\nconst AllowCalibrationExample = () => {\n  React.useEffect(() => {\n    const graph = Carbon.api.graph(graphConfig);\n    graph.loadContent(Carbon.api.line(dataset));\n  }, []);\n\n  return (\n    <ExampleGraphContainer id=\"disableCalibration\" />\n  );\n};\n\nexport default AllowCalibrationExample;\n\n\n")))}y.isMDXComponent=!0;var v=function(e){var a=e.title,n=e.description,t=e.isExpanded;return r.createElement(m.Z,{title:a||"Allow Calibration Disabled Y Axis",description:n,example:r.createElement(b.Z,null),exampleCssSrc:r.createElement(u.Z,null),exampleSrc:r.createElement(y,null),isExpanded:t})},O=n(72894),E=["components"];function j(){return j=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var n=arguments[a];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},j.apply(this,arguments)}function L(e,a){if(null==e)return{};var n,r,t=function(e,a){if(null==e)return{};var n,r,t={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],a.indexOf(n)>=0||(t[n]=e[n]);return t}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var S={},D="wrapper";function G(e){var a=e.components,n=L(e,E);return(0,t.mdx)(D,j({},S,n,{components:a,mdxType:"MDXLayout"}),(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport utils from '@cerner/carbon-graphs/lib/js/helpers/utils';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Graph.module.scss';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Line/LineGraph.module.scss';\nimport ExampleGraphContainer from '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer';\nimport getConfig from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/General/generalDefaultXCalibrationEnabled';\nimport exampleData from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Line/dataset1';\n\n/*\nPlease refer to the documentation below to see the graphConfig and data objects\n*/\n\nconst graphConfig = utils.deepClone(getConfig('#allowCalibrationX'));\nconst dataset = utils.deepClone(exampleData);\n\nconst AllowCalibrationExample = () => {\n  React.useEffect(() => {\n    const graph = Carbon.api.graph(graphConfig);\n    graph.loadContent(Carbon.api.line(dataset));\n  }, []);\n\n  return (\n    <ExampleGraphContainer id=\"allowCalibrationX\" />\n  );\n};\n\nexport default AllowCalibrationExample;\n\n\n")))}G.isMDXComponent=!0;var X=function(e){var a=e.title,n=e.description,t=e.isExpanded;return r.createElement(m.Z,{title:a||"Allow Calibration Enabled X Axis",description:n,example:r.createElement(O.Z,null),exampleCssSrc:r.createElement(u.Z,null),exampleSrc:r.createElement(G,null),isExpanded:t})},T=n(98872),A=["components"];function P(){return P=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var n=arguments[a];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},P.apply(this,arguments)}function I(e,a){if(null==e)return{};var n,r,t=function(e,a){if(null==e)return{};var n,r,t={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],a.indexOf(n)>=0||(t[n]=e[n]);return t}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var Z={},M="wrapper";function N(e){var a=e.components,n=I(e,A);return(0,t.mdx)(M,P({},Z,n,{components:a,mdxType:"MDXLayout"}),(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport utils from '@cerner/carbon-graphs/lib/js/helpers/utils';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Graph.module.scss';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Line/LineGraph.module.scss';\nimport ExampleGraphContainer from '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer';\nimport getConfig from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/General/generalDefaultXCalibrationDisabled';\nimport exampleData from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Line/dataset1';\n\n/*\nPlease refer to the documentation below to see the graphConfig and data objects\n*/\n\nconst graphConfig = utils.deepClone(getConfig('#allowCalibrationXDisabled'));\nconst dataset = utils.deepClone(exampleData);\n\nconst AllowCalibrationExample = () => {\n  React.useEffect(() => {\n    const graph = Carbon.api.graph(graphConfig);\n    graph.loadContent(Carbon.api.line(dataset));\n  }, []);\n\n  return (\n    <ExampleGraphContainer id=\"allowCalibrationXDisabled\" />\n  );\n};\n\nexport default AllowCalibrationExample;\n\n\n")))}N.isMDXComponent=!0;var _=function(e){var a=e.title,n=e.description,t=e.isExpanded;return r.createElement(m.Z,{title:a||"Allow Calibration Disabled X Axis",description:n,example:r.createElement(T.Z,null),exampleCssSrc:r.createElement(u.Z,null),exampleSrc:r.createElement(N,null),isExpanded:t})},R=n(24368),k=["components"];function Y(){return Y=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var n=arguments[a];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Y.apply(this,arguments)}function B(e,a){if(null==e)return{};var n,r,t=function(e,a){if(null==e)return{};var n,r,t={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],a.indexOf(n)>=0||(t[n]=e[n]);return t}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var H={},V="wrapper";function K(e){var a=e.components,n=B(e,k);return(0,t.mdx)(V,Y({},H,n,{components:a,mdxType:"MDXLayout"}),(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport utils from '@cerner/carbon-graphs/lib/js/helpers/utils';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Graph.module.scss';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Line/LineGraph.module.scss';\nimport ExampleGraphContainer from '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer';\nimport getConfig from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/General/timeseriesConfigXCalibrationEnabled';\nimport exampleData from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Line/datasetTimeseries1';\n\n/*\nPlease refer to the documentation below to see the graphConfig and data objects\n*/\n\nconst graphConfig = utils.deepClone(getConfig('#allowCalibrationXTimeseries'));\nconst dataset = utils.deepClone(exampleData);\n\nconst AllowCalibrationExample = () => {\n  React.useEffect(() => {\n    const graph = Carbon.api.graph(graphConfig);\n    graph.loadContent(Carbon.api.line(dataset));\n  }, []);\n\n  return (\n    <ExampleGraphContainer id=\"allowCalibrationXTimeseries\" />\n  );\n};\n\nexport default AllowCalibrationExample;\n\n\n")))}K.isMDXComponent=!0;var z=function(e){var a=e.title,n=e.description,t=e.isExpanded;return r.createElement(m.Z,{title:a||"Allow Calibration Enabled Timeseries X Axis",description:n,example:r.createElement(R.Z,null),exampleCssSrc:r.createElement(u.Z,null),exampleSrc:r.createElement(K,null),isExpanded:t})},U=n(803),W=["components"];function q(){return q=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var n=arguments[a];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},q.apply(this,arguments)}function F(e,a){if(null==e)return{};var n,r,t=function(e,a){if(null==e)return{};var n,r,t={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],a.indexOf(n)>=0||(t[n]=e[n]);return t}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var J={},Q="wrapper";function $(e){var a=e.components,n=F(e,W);return(0,t.mdx)(Q,q({},J,n,{components:a,mdxType:"MDXLayout"}),(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport utils from '@cerner/carbon-graphs/lib/js/helpers/utils';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Graph.module.scss';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Line/LineGraph.module.scss';\nimport ExampleGraphContainer from '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer';\nimport getConfig from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/General/timeseriesConfigXCalibrationDisabled';\nimport exampleData from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Line/datasetTimeseries1';\n\n/*\nPlease refer to the documentation below to see the graphConfig and data objects\n*/\n\nconst graphConfig = utils.deepClone(getConfig('#allowCalibrationXDisabledTimeseries'));\nconst dataset = utils.deepClone(exampleData);\n\nconst AllowCalibrationExample = () => {\n  React.useEffect(() => {\n    const graph = Carbon.api.graph(graphConfig);\n    graph.loadContent(Carbon.api.line(dataset));\n  }, []);\n\n  return (\n    <ExampleGraphContainer id=\"allowCalibrationXDisabledTimeseries\" />\n  );\n};\n\nexport default AllowCalibrationExample;\n\n\n")))}$.isMDXComponent=!0;var ee=function(e){var a=e.title,n=e.description,t=e.isExpanded;return r.createElement(m.Z,{title:a||"Allow Calibration Disabled Timeseries X Axis",description:n,example:r.createElement(U.Z,null),exampleCssSrc:r.createElement(u.Z,null),exampleSrc:r.createElement($,null),isExpanded:t})},ae=n(91701),ne=n(32792),re=["components"];function te(){return te=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var n=arguments[a];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},te.apply(this,arguments)}function oe(e,a){if(null==e)return{};var n,r,t=function(e,a){if(null==e)return{};var n,r,t={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],a.indexOf(n)>=0||(t[n]=e[n]);return t}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}n(51320);var le={},ie="wrapper";function se(e){var a=e.components,n=oe(e,re);return(0,t.mdx)(ie,te({},le,n,{components:a,mdxType:"MDXLayout"}),(0,t.mdx)("h1",{id:"calibration"},"Calibration"),(0,t.mdx)("p",null,"Calibration is updating the axis limits to accommodate the graph.\nBy default, it is ",(0,t.mdx)("strong",{parentName:"p"},"enabled for the y-axes")," and ",(0,t.mdx)("strong",{parentName:"p"},"disabled for the x-axis"),".\nIt can by toggled on/off by using the appropriate ",(0,t.mdx)("inlineCode",{parentName:"p"},"allowCalibration")," label."),(0,t.mdx)("h2",{id:"getting-started"},"Getting Started"),(0,t.mdx)("ul",null,(0,t.mdx)("li",{parentName:"ul"},"Install with ",(0,t.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",(0,t.mdx)("ul",{parentName:"li"},(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("inlineCode",{parentName:"li"},"npm i @cerner/carbon-graphs --save-dev"))))),(0,t.mdx)("h2",{id:"usage"},"Usage"),(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/dist/js/carbon-graphs.js';\nimport '@cerner/carbon-graphs/dist/css/carbon-graphs.css';\n")),(0,t.mdx)("h2",{id:"examples"},"Examples"),(0,t.mdx)(f,{mdxType:"AllowCalibrationEnabledY"}),(0,t.mdx)(v,{mdxType:"AllowCalibrationDisabledY"}),(0,t.mdx)(_,{mdxType:"AllowCalibrationDisabledX"}),(0,t.mdx)(X,{mdxType:"AllowCalibrationEnabledX"}),(0,t.mdx)(ee,{mdxType:"AllowCalibrationDisabledXTimeseries"}),(0,t.mdx)(z,{mdxType:"AllowCalibrationEnabledXTimeseries"}),(0,t.mdx)("details",null,(0,t.mdx)("summary",{style:{fontSize:24}},(0,t.mdx)("b",null,"Data")),(0,t.mdx)("h3",{id:"graph-config-object"},"Graph Config object"),(0,t.mdx)(ae.Z,{mdxType:"GraphConfig"}),(0,t.mdx)("h3",{id:"data-object"},"Data object"),(0,t.mdx)(ne.Z,{mdxType:"DataObject"})))}se.isMDXComponent=!0}}]);