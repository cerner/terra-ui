(self.webpackChunkterra_ui=self.webpackChunkterra_ui||[]).push([[34235],{91913:function(e,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;n.default=function(e){return{bindTo:e,bindLegendTo:null,axis:{x:{show:!0,label:"Data",lowerLimit:80,upperLimit:280},y:{show:!0,label:"Line Set A",lowerLimit:-18,upperLimit:18},y2:{show:!1,label:"Line Set B",lowerLimit:0,upperLimit:250}},showLabel:!1,showLegend:!0,showShapes:!0,showVGrid:!0,showHGrid:!0}}},13546:function(e,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var t="Project long display value which is only for testing, Project long display value which is only for testing Project long display value which is only for testing, Project long display value which is only for testing";n.default=function(e){return{bindTo:e,bindLegendTo:null,axis:{x:{show:!0,label:t,lowerLimit:80,upperLimit:280},y:{show:!0,label:t,lowerLimit:-18,upperLimit:18},y2:{show:!0,label:t,lowerLimit:0,upperLimit:250}},showLabel:!0,showLegend:!0,showShapes:!0,showVGrid:!0,showHGrid:!0}}},29683:function(e,n,t){"use strict";var r=t(24994);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=r(t(96540)),o=r(t(5556));t(16939);var l={id:o.default.string.isRequired},i=function(e){return a.default.createElement(a.default.Fragment,null,a.default.createElement("div",{id:"tooltip",className:"initial-tooltip"}),a.default.createElement("div",{id:e.id,className:"example-graph-container"}))};i.propTypes=l;n.default=i},97067:function(e,n,t){"use strict";var r=t(24994);n.A=void 0;var a=r(t(96540)),o=r(t(39139)),l=r(t(45839));t(14388);var i=r(t(29683)),s=r(t(91913)),p=l.default.deepClone((0,s.default)("#labelHidden"));p.showLabel=!1;n.A=function(){return a.default.useEffect((function(){o.default.api.graph(p)}),[]),a.default.createElement(i.default,{id:"labelHidden"})}},11740:function(e,n,t){"use strict";var r=t(24994);n.A=void 0;var a=r(t(96540)),o=r(t(39139)),l=r(t(45839));t(14388);var i=r(t(29683)),s=r(t(13546)),p=l.default.deepClone((0,s.default)("#labelTruncation"));n.A=function(){return a.default.useEffect((function(){o.default.api.graph(p)}),[]),a.default.createElement(i.default,{id:"labelTruncation"})}},44874:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return H}});var r=t(96540),a=t(36665),o=t(97067),l=["components"];function i(){return i=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},i.apply(this,arguments)}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p={};function u(e){var n=e.components,t=s(e,l);return(0,a.mdx)("wrapper",i({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport utils from '@cerner/carbon-graphs/lib/js/helpers/utils';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Graph.module.scss';\nimport ExampleGraphContainer from '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer';\nimport getGraphConfig from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/General/generalDefaultLabelHidden';\n\n/*\nPlease refer to the documentation below to see the graphConfig and data objects\n*/\n\nconst graphConfig = utils.deepClone(getGraphConfig('#labelHidden'));\ngraphConfig.showLabel = false;\n\nconst LabelHiddenGeneralExample = () => {\n  React.useEffect(() => {\n    Carbon.api.graph(graphConfig);\n  }, []);\n  return (\n    <ExampleGraphContainer id=\"labelHidden\" />\n  );\n};\n\nexport default LabelHiddenGeneralExample;\n\n")))}u.isMDXComponent=!0;var d=t(201),c=t(10502),m=function(e){var n=e.title,t=e.description,a=e.isExpanded;return r.createElement(d.A,{title:n||"Label Hidden",description:t,example:r.createElement(o.A,null),exampleCssSrc:r.createElement(c.A,null),exampleSrc:r.createElement(u,null),isExpanded:a})},f=t(49462),b=t(11740),h=["components"];function g(){return g=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},g.apply(this,arguments)}function y(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var x={};function v(e){var n=e.components,t=y(e,h);return(0,a.mdx)("wrapper",g({},x,t,{components:n,mdxType:"MDXLayout"}),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport utils from '@cerner/carbon-graphs/lib/js/helpers/utils';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Graph.module.scss';\nimport ExampleGraphContainer from '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer';\nimport getGraphConfig from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/General/generalDefaultLabelTruncation';\n\n/*\nPlease refer to the documentation below to see the graphConfig and data objects\n*/\n\nconst graphConfig = utils.deepClone(getGraphConfig('#labelTruncation'));\n\nconst LabelTruncationGeneralExample = () => {\n  React.useEffect(() => {\n    Carbon.api.graph(graphConfig);\n  }, []);\n  return (\n    <ExampleGraphContainer id=\"labelTruncation\" />\n  );\n};\n\nexport default LabelTruncationGeneralExample;\n\n")))}v.isMDXComponent=!0;var w=function(e){var n=e.title,t=e.description,a=e.isExpanded;return r.createElement(d.A,{title:n||"Label Truncation",description:t,example:r.createElement(b.A,null),exampleCssSrc:r.createElement(c.A,null),exampleSrc:r.createElement(v,null),isExpanded:a})},L=["components"];function j(){return j=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},j.apply(this,arguments)}function O(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var C={},E="wrapper";function G(e){var n=e.components,t=O(e,L);return(0,a.mdx)(E,j({},C,t,{components:n,mdxType:"MDXLayout"}),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-js"},"const largeLabel = 'Project long display value which is only for testing, Project long display value which is only for testing '\n    + 'Project long display value which is only for testing, Project long display value which is only for testing';\n\nconst getDefaultConfig = (id) => ({\n  bindTo: id,\n  bindLegendTo: null,\n  axis: {\n    x: {\n      show: true,\n      label: largeLabel,\n      lowerLimit: 80,\n      upperLimit: 280,\n    },\n    y: {\n      show: true,\n      label: largeLabel,\n      lowerLimit: -18,\n      upperLimit: 18,\n    },\n    y2: {\n      show: true,\n      label: largeLabel,\n      lowerLimit: 0,\n      upperLimit: 250,\n    },\n  },\n  showLabel: true,\n  showLegend: true,\n  showShapes: true,\n  showVGrid: true,\n  showHGrid: true,\n});\n\nexport default getDefaultConfig;\n\n")))}G.isMDXComponent=!0;var T=["components"];function P(){return P=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},P.apply(this,arguments)}function S(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}t(27647);var N={},D="wrapper";function H(e){var n=e.components,t=S(e,T);return(0,a.mdx)(D,P({},N,t,{components:n,mdxType:"MDXLayout"}),(0,a.mdx)("h1",{id:"label-hidden"},"Label Hidden"),(0,a.mdx)("p",null,"Label hidden contains simple graph examples related to label like label hidden and axis label truncation in x, y and y2 axes."),(0,a.mdx)("h2",{id:"getting-started"},"Getting Started"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},"Install with ",(0,a.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",(0,a.mdx)("ul",{parentName:"li"},(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"npm i @cerner/carbon-graphs --save-dev"))))),(0,a.mdx)("h2",{id:"usage"},"Usage"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/dist/js/carbon-graphs.js';\nimport '@cerner/carbon-graphs/dist/css/carbon-graphs.css';\n")),(0,a.mdx)("h2",{id:"examples"},"Examples"),(0,a.mdx)(m,{mdxType:"LabelHiddenGraph"}),(0,a.mdx)("details",null,(0,a.mdx)("summary",{style:{fontSize:24}},(0,a.mdx)("b",null,"Data used for label hidden")),(0,a.mdx)("h3",{id:"graph-config-object"},"Graph Config object"),(0,a.mdx)(f.A,{mdxType:"LabelHiddenGraphConfig"})),(0,a.mdx)("br",null),(0,a.mdx)("br",null),(0,a.mdx)("br",null),(0,a.mdx)(w,{mdxType:"LabelTruncationGraph"}),(0,a.mdx)("details",null,(0,a.mdx)("summary",{style:{fontSize:24}},(0,a.mdx)("b",null,"Data used for label truncation")),(0,a.mdx)("h3",{id:"graph-config-object-1"},"Graph Config object"),(0,a.mdx)(G,{mdxType:"LabelTruncationGraphConfig"})))}H.isMDXComponent=!0},49462:function(e,n,t){"use strict";t.d(n,{A:function(){return p}});t(96540);var r=t(36665),a=["components"];function o(){return o=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},o.apply(this,arguments)}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i={},s="wrapper";function p(e){var n=e.components,t=l(e,a);return(0,r.mdx)(s,o({},i,t,{components:n,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-js"},"const getLineDefaultConfig = (id) => ({\n  bindTo: id,\n  bindLegendTo: null,\n  axis: {\n    x: {\n      show: true,\n      label: 'Data',\n      lowerLimit: 80,\n      upperLimit: 280,\n    },\n    y: {\n      show: true,\n      label: 'Line Set A',\n      lowerLimit: -18,\n      upperLimit: 18,\n    },\n    y2: {\n      show: false,\n      label: 'Line Set B',\n      lowerLimit: 0,\n      upperLimit: 250,\n    },\n  },\n  showLabel: true,\n  showLegend: true,\n  showShapes: true,\n  showVGrid: true,\n  showHGrid: true,\n});\n\nexport default getLineDefaultConfig;\n\n\n")))}p.isMDXComponent=!0},27647:function(e,n,t){var r,a;void 0===(a="function"==typeof(r=function(){var e="details",n="summary";function t(e){if("summary"===e.target.nodeName.toLowerCase()){var n=e.target.parentNode;if(!n)return;n.getAttribute("open")?(n.open=!1,n.removeAttribute("open")):(n.open=!0,n.setAttribute("open","open"))}}function r(){var t=document.createElement(e);if(!("open"in t))return!1;t.innerHTML="<"+n+">a</"+n+">b",document.body.appendChild(t);var r=t.offsetHeight;t.open=!0;var a=r!=t.offsetHeight;return document.body.removeChild(t),a}function a(e,n){if(!document.getElementById(e)){var t=document.createElement("style");t.id=e,t.innerHTML=n,document.getElementsByTagName("head")[0].appendChild(t)}}r()||(document.documentElement.className+=" no-details",window.addEventListener("click",t),a("details-polyfill-style","html.no-details "+e+" { display: block; }\nhtml.no-details "+e+":not([open]) > :not("+n+") { display: none; }\nhtml.no-details "+e+" > "+n+':before { content: "▶"; display: inline-block; font-size: .8em; width: 1.5em; }\nhtml.no-details '+e+"[open] > "+n+':before { content: "▼"; }'))})?r.call(n,t,n,e):r)||(e.exports=a)}}]);