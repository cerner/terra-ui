(self.webpackChunkterra_ui=self.webpackChunkterra_ui||[]).push([[11058,19260],{54775:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default=function(e){return{bindTo:e,axis:{x:{label:"Data",lowerLimit:20.7,upperLimit:22.7,suppressTrailingZeros:!0},y:{label:"Line Set A",lowerLimit:.2,upperLimit:3.8,suppressTrailingZeros:!0},y2:{show:!0,label:"Line Set B",lowerLimit:10.2,upperLimit:13.8,suppressTrailingZeros:!0}},showLabel:!0,showLegend:!0,showShapes:!0,showVGrid:!0,showHGrid:!0,ticksCount:7}}},15528:function(e,t,n){"use strict";var r=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n(54520));t.default=function(e){return{bindTo:e,axis:{x:{type:a.default.helpers.AXIS_TYPE.TIME_SERIES,label:"Datetime",lowerLimit:new Date(2016,0,1,0,0).toISOString(),upperLimit:new Date(2016,0,1,23,59).toISOString()},y:{label:"Line Set A",lowerLimit:10,upperLimit:30},y2:{show:!1,label:"Line Set B",lowerLimit:0,upperLimit:250}},showLabel:!0,showLegend:!0,showShapes:!0,showVGrid:!0,showHGrid:!0}}},29030:function(e,t,n){"use strict";var r=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n(54520));t.default=function(e){return{bindTo:e,axis:{x:{type:a.default.helpers.AXIS_TYPE.TIME_SERIES,label:"Datetime",lowerLimit:new Date(2016,0,1,0,0).toISOString(),upperLimit:new Date(2016,0,1,23,59).toISOString(),ticks:{values:[new Date(2016,0,1,1,0).toISOString(),new Date(2016,0,1,5,0).toISOString(),new Date(2016,0,1,10,0).toISOString(),new Date(2016,0,1,15,0).toISOString(),new Date(2016,0,1,20,0).toISOString()],format:"%a %b %e %X %Y"}},y:{label:"Line Set A",lowerLimit:10,upperLimit:30},y2:{show:!1,label:"Line Set B",lowerLimit:0,upperLimit:250}},showLabel:!0,showLegend:!0,showShapes:!0,showVGrid:!0,showHGrid:!0}}},93065:function(e,t,n){"use strict";var r=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n(67294)),i=r(n(45697));n(80244);var o={id:i.default.string.isRequired},s=function(e){return a.default.createElement(a.default.Fragment,null,a.default.createElement("div",{id:"tooltip",className:"initial-tooltip"}),a.default.createElement("div",{id:e.id,className:"example-graph-container"}))};s.propTypes=o;t.default=s},27705:function(e,t,n){"use strict";var r=n(64836);t.Z=void 0;var a=r(n(67294)),i=r(n(54520)),o=r(n(53334));n(56867);var s=r(n(93065)),l=r(n(15528)),p=o.default.deepClone((0,l.default)("#staticXAxisTicks"));t.Z=function(){return a.default.useEffect((function(){i.default.api.graph(p)}),[]),a.default.createElement(s.default,{id:"staticXAxisTicks"})}},8188:function(e,t,n){"use strict";var r=n(64836);t.Z=void 0;var a=r(n(67294)),i=r(n(54520)),o=r(n(53334));n(56867);var s=r(n(93065)),l=r(n(54775)),p=o.default.deepClone((0,l.default)("#supressTickValue"));t.Z=function(){return a.default.useEffect((function(){i.default.api.graph(p)}),[]),a.default.createElement(s.default,{id:"supressTickValue"})}},67603:function(e,t,n){"use strict";var r=n(64836);t.Z=void 0;var a=r(n(67294)),i=r(n(54520)),o=r(n(53334));n(56867);var s=r(n(93065)),l=r(n(29030)),p=o.default.deepClone((0,l.default)("#xAxisTicksFormatted"));t.Z=function(){return a.default.useEffect((function(){i.default.api.graph(p)}),[]),a.default.createElement(s.default,{id:"xAxisTicksFormatted"})}},93202:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return V}});var r=n(67294),a=n(81254),i=n(27705),o=["components"];function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s.apply(this,arguments)}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p={};function c(e){var t=e.components,n=l(e,o);return(0,a.mdx)("wrapper",s({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport utils from '@cerner/carbon-graphs/lib/js/helpers/utils';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Graph.module.scss';\nimport ExampleGraphContainer from '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer';\nimport getGraphConfig from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/General/timeseriesConfig';\n\n/*\nPlease refer to the documentation below to see the graphConfig and data objects\n*/\n\nconst graphConfig = utils.deepClone(getGraphConfig('#staticXAxisTicks'));\n\nconst StaticXAxisTicksGeneralExample = () => {\n  React.useEffect(() => {\n    Carbon.api.graph(graphConfig);\n  }, []);\n  return (\n    <ExampleGraphContainer id=\"staticXAxisTicks\" />\n  );\n};\n\nexport default StaticXAxisTicksGeneralExample;\n\n")))}c.isMDXComponent=!0;var u=n(49271),m=n(25005),d=function(e){var t=e.title,n=e.description,a=e.isExpanded;return r.createElement(u.Z,{title:t||"Static X Axis Ticks",description:n,example:r.createElement(i.Z,null),exampleCssSrc:r.createElement(m.Z,null),exampleSrc:r.createElement(c,null),isExpanded:a})},f=n(11598),g=n(67603),h=["components"];function b(){return b=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},b.apply(this,arguments)}function x(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var y={};function v(e){var t=e.components,n=x(e,h);return(0,a.mdx)("wrapper",b({},y,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport utils from '@cerner/carbon-graphs/lib/js/helpers/utils';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Graph.module.scss';\nimport ExampleGraphContainer from '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer';\nimport getGraphConfig from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/General/timeseriesConfigTicksFormatted';\n\n/*\nPlease refer to the documentation below to see the graphConfig and data objects\n*/\n\nconst graphConfig = utils.deepClone(getGraphConfig('#xAxisTicksFormatted'));\n\nconst XAxisTicksFormattedGeneralExample = () => {\n  React.useEffect(() => {\n    Carbon.api.graph(graphConfig);\n  }, []);\n  return (\n    <ExampleGraphContainer id=\"xAxisTicksFormatted\" />\n  );\n};\n\nexport default XAxisTicksFormattedGeneralExample;\n\n")))}v.isMDXComponent=!0;var w=function(e){var t=e.title,n=e.description,a=e.isExpanded;return r.createElement(u.Z,{title:t||"X Axis Ticks Formatted",description:n,example:r.createElement(g.Z,null),exampleCssSrc:r.createElement(m.Z,null),exampleSrc:r.createElement(v,null),isExpanded:a})},O=n(8188),S=["components"];function j(){return j=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},j.apply(this,arguments)}function C(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var E={};function T(e){var t=e.components,n=C(e,S);return(0,a.mdx)("wrapper",j({},E,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport utils from '@cerner/carbon-graphs/lib/js/helpers/utils';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Graph.module.scss';\nimport ExampleGraphContainer from '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer';\nimport getGraphConfig from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/General/generalDefaultDecimalAxes';\n\n/*\nPlease refer to the documentation below to see the graphConfig and data objects\n*/\n\nconst graphConfig = utils.deepClone(getGraphConfig('#supressTickValue'));\n\nconst SupressTickValueGeneralExample = () => {\n  React.useEffect(() => {\n    Carbon.api.graph(graphConfig);\n  }, []);\n  return (\n    <ExampleGraphContainer id=\"supressTickValue\" />\n  );\n};\n\nexport default SupressTickValueGeneralExample;\n\n")))}T.isMDXComponent=!0;var L=function(e){var t=e.title,n=e.description,a=e.isExpanded;return r.createElement(u.Z,{title:t||"Suppress Tick Value Trailing Zero",description:n,example:r.createElement(O.Z,null),exampleCssSrc:r.createElement(m.Z,null),exampleSrc:r.createElement(T,null),isExpanded:a})},k=["components"];function G(){return G=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},G.apply(this,arguments)}function D(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var A={},X="wrapper";function I(e){var t=e.components,n=D(e,k);return(0,a.mdx)(X,G({},A,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-js"},"const getDefaultConfig = (id) => ({\n  bindTo: id,\n  axis: {\n    x: {\n      label: 'Data',\n      lowerLimit: 20.7,\n      upperLimit: 22.7,\n      suppressTrailingZeros: true,\n    },\n    y: {\n      label: 'Line Set A',\n      lowerLimit: 0.2,\n      upperLimit: 3.8,\n      suppressTrailingZeros: true,\n    },\n    y2: {\n      show: true,\n      label: 'Line Set B',\n      lowerLimit: 10.2,\n      upperLimit: 13.8,\n      suppressTrailingZeros: true,\n    },\n  },\n  showLabel: true,\n  showLegend: true,\n  showShapes: true,\n  showVGrid: true,\n  showHGrid: true,\n  ticksCount: 7,\n});\n\nexport default getDefaultConfig;\n\n")))}I.isMDXComponent=!0;var P=["components"];function Z(){return Z=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Z.apply(this,arguments)}function N(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}n(51320);var M={},_="wrapper";function V(e){var t=e.components,n=N(e,P);return(0,a.mdx)(_,Z({},M,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("h1",{id:"axis-ticks"},"Axis Ticks"),(0,a.mdx)("p",null,"Axis ticks contains simple graph examples with static x-axis ticks, formatted ticks and suppress tick values trailing zeros."),(0,a.mdx)("h2",{id:"getting-started"},"Getting Started"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},"Install with ",(0,a.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",(0,a.mdx)("ul",{parentName:"li"},(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"npm i @cerner/carbon-graphs --save-dev"))))),(0,a.mdx)("h2",{id:"usage"},"Usage"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/dist/js/carbon-graphs.js';\nimport '@cerner/carbon-graphs/dist/css/carbon-graphs.css';\n")),(0,a.mdx)("h2",{id:"examples"},"Examples"),(0,a.mdx)(d,{mdxType:"StaticXAxisTicksGraph"}),(0,a.mdx)("details",null,(0,a.mdx)("summary",{style:{fontSize:24}},(0,a.mdx)("b",null,"Data used for static x-axis ticks")),(0,a.mdx)("h3",{id:"graph-config-object"},"Graph Config object"),(0,a.mdx)(f.Z,{mdxType:"StaticXAxisTicksGraphConfig"})),(0,a.mdx)("br",null),(0,a.mdx)("br",null),(0,a.mdx)("br",null),(0,a.mdx)(w,{mdxType:"XAxisTicksFormattedGraph"}),(0,a.mdx)("details",null,(0,a.mdx)("summary",{style:{fontSize:24}},(0,a.mdx)("b",null,"Data used for x-axis ticks formatted ")),(0,a.mdx)("h3",{id:"graph-config-object-1"},"Graph Config object"),(0,a.mdx)(f.Z,{mdxType:"XAxisTicksFormattedGraphConfig"})),(0,a.mdx)("br",null),(0,a.mdx)("br",null),(0,a.mdx)("br",null),(0,a.mdx)(L,{mdxType:"SuppressTickValueTrailingZeroGraph"}),(0,a.mdx)("details",null,(0,a.mdx)("summary",{style:{fontSize:24}},(0,a.mdx)("b",null,"Data used for suppress tick value trailing zero's")),(0,a.mdx)("h3",{id:"graph-config-object-2"},"Graph Config object"),(0,a.mdx)(I,{mdxType:"SuppressTickValueTrailingZeroGraphConfig"})))}V.isMDXComponent=!0},11598:function(e,t,n){"use strict";n.d(t,{Z:function(){return p}});n(67294);var r=n(81254),a=["components"];function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i.apply(this,arguments)}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s={},l="wrapper";function p(e){var t=e.components,n=o(e,a);return(0,r.mdx)(l,i({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/lib/js/carbon';\n\nconst getLineTimeseriesConfig = (id) => ({\n  bindTo: id,\n  axis: {\n    x: {\n      type: Carbon.helpers.AXIS_TYPE.TIME_SERIES,\n      label: 'Datetime',\n      lowerLimit: new Date(2016, 0, 1, 1, 0).toISOString(),\n      upperLimit: new Date(2016, 0, 1, 23, 59).toISOString(),\n    },\n    y: {\n      label: 'Line Set A',\n      lowerLimit: 10,\n      upperLimit: 30,\n    },\n    y2: {\n      show: false,\n      label: 'Line Set B',\n      lowerLimit: 0,\n      upperLimit: 250,\n    },\n  },\n  showLabel: true,\n  showLegend: true,\n  showShapes: true,\n  showVGrid: true,\n  showHGrid: true,\n});\n\nexport default getLineTimeseriesConfig;\n\n")))}p.isMDXComponent=!0},51320:function(e,t,n){var r,a;void 0===(a="function"==typeof(r=function(){var e="details",t="summary";function n(e){if("summary"===e.target.nodeName.toLowerCase()){var t=e.target.parentNode;if(!t)return;t.getAttribute("open")?(t.open=!1,t.removeAttribute("open")):(t.open=!0,t.setAttribute("open","open"))}}function r(){var n=document.createElement(e);if(!("open"in n))return!1;n.innerHTML="<"+t+">a</"+t+">b",document.body.appendChild(n);var r=n.offsetHeight;n.open=!0;var a=r!=n.offsetHeight;return document.body.removeChild(n),a}function a(e,t){if(!document.getElementById(e)){var n=document.createElement("style");n.id=e,n.innerHTML=t,document.getElementsByTagName("head")[0].appendChild(n)}}r()||(document.documentElement.className+=" no-details",window.addEventListener("click",n),a("details-polyfill-style","html.no-details "+e+" { display: block; }\nhtml.no-details "+e+":not([open]) > :not("+t+") { display: none; }\nhtml.no-details "+e+" > "+t+':before { content: "▶"; display: inline-block; font-size: .8em; width: 1.5em; }\nhtml.no-details '+e+"[open] > "+t+':before { content: "▼"; }'))})?r.call(t,n,t,e):r)||(e.exports=a)}}]);