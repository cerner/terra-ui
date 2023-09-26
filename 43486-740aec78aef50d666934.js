(self.webpackChunkterra_ui=self.webpackChunkterra_ui||[]).push([[43486,19260],{60864:function(e,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;n.default=function(e){return{bindTo:e,bindLegendTo:null,axis:{x:{show:!1,label:"Data",lowerLimit:80,upperLimit:280},y:{show:!0,label:"Line Set A",lowerLimit:-18,upperLimit:18},y2:{show:!1,label:"Line Set B",lowerLimit:0,upperLimit:250}},showLabel:!0,showLegend:!0,showShapes:!0,showVGrid:!0,showHGrid:!0}}},62304:function(e,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;n.default=function(e){return{bindTo:e,bindLegendTo:null,axis:{x:{show:!0,label:"Data",lowerLimit:80,upperLimit:280},y:{show:!1,label:"Line Set A",lowerLimit:-18,upperLimit:18},y2:{show:!1,label:"Line Set B",lowerLimit:0,upperLimit:250}},showLabel:!0,showLegend:!0,showShapes:!0,showVGrid:!0,showHGrid:!0}}},93065:function(e,n,t){"use strict";var r=t(64836);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=r(t(67294)),i=r(t(45697));t(80244);var o={id:i.default.string.isRequired},l=function(e){return a.default.createElement(a.default.Fragment,null,a.default.createElement("div",{id:"tooltip",className:"initial-tooltip"}),a.default.createElement("div",{id:e.id,className:"example-graph-container"}))};l.propTypes=o;n.default=l},62457:function(e,n,t){"use strict";var r=t(64836);n.Z=void 0;var a=r(t(67294)),i=r(t(54520)),o=r(t(53334));t(56867);var l=r(t(93065)),s=r(t(60864)),d=o.default.deepClone((0,s.default)("#xAxisHidden"));n.Z=function(){return a.default.useEffect((function(){i.default.api.graph(d)}),[]),a.default.createElement(l.default,{id:"xAxisHidden"})}},56555:function(e,n,t){"use strict";var r=t(64836);n.Z=void 0;var a=r(t(67294)),i=r(t(54520)),o=r(t(53334));t(56867);var l=r(t(93065)),s=r(t(62304)),d=o.default.deepClone((0,s.default)("#yAxisHidden"));n.Z=function(){return a.default.useEffect((function(){i.default.api.graph(d)}),[]),a.default.createElement(l.default,{id:"yAxisHidden"})}},13063:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return G}});var r=t(67294),a=t(81254),i=t(62457),o=["components"];function l(){return l=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},l.apply(this,arguments)}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var d={};function p(e){var n=e.components,t=s(e,o);return(0,a.mdx)("wrapper",l({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport utils from '@cerner/carbon-graphs/lib/js/helpers/utils';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Graph.module.scss';\nimport ExampleGraphContainer from '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer';\nimport getGraphConfig from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/General/generalDefaultXAxisHidden';\n\n/*\nPlease refer to the documentation below to see the graphConfig and data objects\n*/\n\nconst graphConfig = utils.deepClone(getGraphConfig('#xAxisHidden'));\n\nconst XAxisHiddenGeneralExample = () => {\n  React.useEffect(() => {\n    Carbon.api.graph(graphConfig);\n  }, []);\n  return (\n    <ExampleGraphContainer id=\"xAxisHidden\" />\n  );\n};\n\nexport default XAxisHiddenGeneralExample;\n\n")))}p.isMDXComponent=!0;var u=t(49271),c=t(25005),m=function(e){var n=e.title,t=e.description,a=e.isExpanded;return r.createElement(u.Z,{title:n||"X Axis Hidden",description:t,example:r.createElement(i.Z,null),exampleCssSrc:r.createElement(c.Z,null),exampleSrc:r.createElement(p,null),isExpanded:a})},f=t(56555),h=["components"];function x(){return x=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},x.apply(this,arguments)}function b(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var g={};function y(e){var n=e.components,t=b(e,h);return(0,a.mdx)("wrapper",x({},g,t,{components:n,mdxType:"MDXLayout"}),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport utils from '@cerner/carbon-graphs/lib/js/helpers/utils';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Graph.module.scss';\nimport ExampleGraphContainer from '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer';\nimport getGraphConfig from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/General/generalDefaultYAxisHidden';\n\n/*\nPlease refer to the documentation below to see the graphConfig and data objects\n*/\n\nconst graphConfig = utils.deepClone(getGraphConfig('#yAxisHidden'));\n\nconst YAxisHiddenGeneralExample = () => {\n  React.useEffect(() => {\n    Carbon.api.graph(graphConfig);\n  }, []);\n  return (\n    <ExampleGraphContainer id=\"yAxisHidden\" />\n  );\n};\n\nexport default YAxisHiddenGeneralExample;\n\n")))}y.isMDXComponent=!0;var v=function(e){var n=e.title,t=e.description,a=e.isExpanded;return r.createElement(u.Z,{title:n||"Y Axis Hidden",description:t,example:r.createElement(f.Z,null),exampleCssSrc:r.createElement(c.Z,null),exampleSrc:r.createElement(y,null),isExpanded:a})},w=t(61775),O=["components"];function j(){return j=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},j.apply(this,arguments)}function C(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}t(51320);var E={},L="wrapper";function G(e){var n=e.components,t=C(e,O);return(0,a.mdx)(L,j({},E,t,{components:n,mdxType:"MDXLayout"}),(0,a.mdx)("h1",{id:"axis-hidden"},"Axis hidden"),(0,a.mdx)("p",null,"Axis hidden contains simple graph examples with hidden x and y axes."),(0,a.mdx)("h2",{id:"getting-started"},"Getting Started"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},"Install with ",(0,a.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",(0,a.mdx)("ul",{parentName:"li"},(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"npm i @cerner/carbon-graphs --save-dev"))))),(0,a.mdx)("h2",{id:"usage"},"Usage"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/dist/js/carbon-graphs.js';\nimport '@cerner/carbon-graphs/dist/css/carbon-graphs.css';\n")),(0,a.mdx)("h2",{id:"examples"},"Examples"),(0,a.mdx)(m,{mdxType:"XAxisHiddenGraph"}),(0,a.mdx)("details",null,(0,a.mdx)("summary",{style:{fontSize:24}},(0,a.mdx)("b",null,"Data used for X-Axis hidden")),(0,a.mdx)("h3",{id:"graph-config-object"},"Graph Config object"),(0,a.mdx)(w.Z,{mdxType:"XAxisHiddenGraphConfig"})),(0,a.mdx)("br",null),(0,a.mdx)("br",null),(0,a.mdx)("br",null),(0,a.mdx)(v,{mdxType:"YAxisHiddenGraph"}),(0,a.mdx)("details",null,(0,a.mdx)("summary",{style:{fontSize:24}},(0,a.mdx)("b",null,"Data used for Y-Axis hidden")),(0,a.mdx)("h3",{id:"graph-config-object-1"},"Graph Config object"),(0,a.mdx)(w.Z,{mdxType:"YAxisHiddenGraphConfig"})))}G.isMDXComponent=!0},61775:function(e,n,t){"use strict";t.d(n,{Z:function(){return d}});t(67294);var r=t(81254),a=["components"];function i(){return i=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},i.apply(this,arguments)}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l={},s="wrapper";function d(e){var n=e.components,t=o(e,a);return(0,r.mdx)(s,i({},l,t,{components:n,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-js"},"const getLineDefaultConfig = (id) => ({\n  bindTo: id,\n  bindLegendTo: null,\n  axis: {\n    x: {\n      show: true,\n      label: 'Data',\n      lowerLimit: 80,\n      upperLimit: 280,\n    },\n    y: {\n      show: true,\n      label: 'Line Set A',\n      lowerLimit: -18,\n      upperLimit: 18,\n    },\n    y2: {\n      show: false,\n      label: 'Line Set B',\n      lowerLimit: 0,\n      upperLimit: 250,\n    },\n  },\n  showLabel: true,\n  showLegend: true,\n  showShapes: true,\n  showVGrid: true,\n  showHGrid: true,\n});\n\nexport default getLineDefaultConfig;\n\n\n")))}d.isMDXComponent=!0},51320:function(e,n,t){var r,a;void 0===(a="function"==typeof(r=function(){var e="details",n="summary";function t(e){if("summary"===e.target.nodeName.toLowerCase()){var n=e.target.parentNode;if(!n)return;n.getAttribute("open")?(n.open=!1,n.removeAttribute("open")):(n.open=!0,n.setAttribute("open","open"))}}function r(){var t=document.createElement(e);if(!("open"in t))return!1;t.innerHTML="<"+n+">a</"+n+">b",document.body.appendChild(t);var r=t.offsetHeight;t.open=!0;var a=r!=t.offsetHeight;return document.body.removeChild(t),a}function a(e,n){if(!document.getElementById(e)){var t=document.createElement("style");t.id=e,t.innerHTML=n,document.getElementsByTagName("head")[0].appendChild(t)}}r()||(document.documentElement.className+=" no-details",window.addEventListener("click",t),a("details-polyfill-style","html.no-details "+e+" { display: block; }\nhtml.no-details "+e+":not([open]) > :not("+n+") { display: none; }\nhtml.no-details "+e+" > "+n+':before { content: "▶"; display: inline-block; font-size: .8em; width: 1.5em; }\nhtml.no-details '+e+"[open] > "+n+':before { content: "▼"; }'))})?r.call(n,t,n,e):r)||(e.exports=a)}}]);