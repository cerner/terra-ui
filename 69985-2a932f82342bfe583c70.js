(self.webpackChunkterra_ui=self.webpackChunkterra_ui||[]).push([[69985],{83914:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={key:"track 1",trackLabel:{display:"Really really long project name that cannot be shown realistically"}};t.default=n},61004:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(e){return{bindTo:e,axis:{x:{show:!0,lowerLimit:new Date(2018,1,1,12).toISOString(),upperLimit:new Date(2019,1,1,12).toISOString(),rangeRounding:!0}},dateline:[]}};t.default=n},93065:function(e,t,n){"use strict";var r=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n(67294)),o=r(n(45697));n(80244);var l={id:o.default.string.isRequired},i=function(e){return a.default.createElement(a.default.Fragment,null,a.default.createElement("div",{id:"tooltip",className:"initial-tooltip"}),a.default.createElement("div",{id:e.id,className:"example-graph-container"}))};i.propTypes=l;var c=i;t.default=c},98001:function(e,t,n){"use strict";var r=n(64836);t.Z=void 0;var a=r(n(67294)),o=r(n(54520)),l=r(n(53334));n(56867),n(77449);var i=r(n(93065)),c=r(n(61004)),s=r(n(83914)),p=l.default.deepClone((0,c.default)("#ganttLabelTruncation")),u=[l.default.deepClone(s.default)],d=function(){return a.default.useEffect((function(){var e=o.default.api.gantt(p);u.forEach((function(t){e.loadContent(t)}))}),[]),a.default.createElement(i.default,{id:"ganttLabelTruncation"})};t.Z=d},69985:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return k}});var r=n(67294),a=n(81254),o=n(98001),l=["components"];function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i.apply(this,arguments)}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s={},p="wrapper";function u(e){var t=e.components,n=c(e,l);return(0,a.mdx)(p,i({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport utils from '@cerner/carbon-graphs/lib/js/helpers/utils';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Graph.module.scss';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Gantt/GanttChart.module.scss';\nimport ExampleGraphContainer from '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer';\nimport getGanttLabelTruncationConfig from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Gantt/ganttLabelTruncationConfig';\nimport labelTruncationDataset from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Gantt/labelTruncationDataset';\n\n/*\nPlease refer to the documentation below to see the graphConfig and data objects\n*/\n\nconst graphConfig = utils.deepClone(getGanttLabelTruncationConfig('#ganttLabelTruncation'));\nconst dataset = [utils.deepClone(labelTruncationDataset)];\n\nconst GanttLabelTruncationExample = () => {\n  React.useEffect(() => {\n    const graph = Carbon.api.gantt(graphConfig);\n    dataset.forEach((data) => {\n      graph.loadContent(data);\n    });\n  }, []);\n\n  return (\n    <ExampleGraphContainer id=\"ganttLabelTruncation\" />\n  );\n};\n\nexport default GanttLabelTruncationExample;\n\n")))}u.isMDXComponent=!0;var d=n(49271),m=n(25005),f=function(e){var t=e.title,n=e.description,a=e.isExpanded;return r.createElement(d.Z,{title:t||"Label Truncation",description:n,example:r.createElement(o.Z,null),exampleCssSrc:r.createElement(m.Z,null),exampleSrc:r.createElement(u,null),isExpanded:a})},b=["components"];function g(){return g=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},g.apply(this,arguments)}function h(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var y={},x="wrapper";function v(e){var t=e.components,n=h(e,b);return(0,a.mdx)(x,g({},y,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-js"},"const getGanttLabelTruncationConfig = (id) => ({\n  bindTo: id,\n  axis: {\n    x: {\n      show: true,\n      lowerLimit: new Date(2018, 1, 1, 12).toISOString(),\n      upperLimit: new Date(2019, 1, 1, 12).toISOString(),\n      rangeRounding: true, // If set to false, we don't extend the domain\n    },\n  },\n  dateline: [],\n});\n\nexport default getGanttLabelTruncationConfig;\n\n\n")))}v.isMDXComponent=!0;var O=["components"];function j(){return j=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},j.apply(this,arguments)}function w(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var C={},E="wrapper";function T(e){var t=e.components,n=w(e,O);return(0,a.mdx)(E,j({},C,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-js"},"const labelTruncationDataset = {\n  key: 'track 1',\n  trackLabel: {\n    display:\n      'Really really long project name that cannot be shown realistically',\n  },\n};\n\nexport default labelTruncationDataset;\n\n")))}T.isMDXComponent=!0;var L=["components"];function G(){return G=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},G.apply(this,arguments)}function S(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}n(51320);var D={},N="wrapper";function k(e){var t=e.components,n=S(e,L);return(0,a.mdx)(N,G({},D,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("h1",{id:"simple-gantt"},"Simple Gantt"),(0,a.mdx)("p",null,"This is a simple Gantt chart with truncated label."),(0,a.mdx)("h2",{id:"getting-started"},"Getting Started"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},"Install with ",(0,a.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",(0,a.mdx)("ul",{parentName:"li"},(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"npm i @cerner/carbon-graphs --save-dev"))))),(0,a.mdx)("h2",{id:"usage"},"Usage"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/dist/js/carbon-graphs.js';\nimport '@cerner/carbon-graphs/dist/css/carbon-graphs.css';\n")),(0,a.mdx)("h2",{id:"examples"},"Examples"),(0,a.mdx)(f,{mdxType:"GanttChart"}),(0,a.mdx)("details",null,(0,a.mdx)("summary",{style:{fontSize:24}},(0,a.mdx)("b",null,"Data")),(0,a.mdx)("h3",{id:"graph-config-object"},"Graph Config object"),(0,a.mdx)(v,{mdxType:"GraphConfig"}),(0,a.mdx)("h3",{id:"data-object"},"Data object"),(0,a.mdx)(T,{mdxType:"DataObject"})))}k.isMDXComponent=!0},51320:function(e,t,n){var r,a;void 0===(a="function"==typeof(r=function(){var e="details",t="summary";function n(e){if("summary"===e.target.nodeName.toLowerCase()){var t=e.target.parentNode;if(!t)return;t.getAttribute("open")?(t.open=!1,t.removeAttribute("open")):(t.open=!0,t.setAttribute("open","open"))}}function r(){var n=document.createElement(e);if(!("open"in n))return!1;n.innerHTML="<"+t+">a</"+t+">b",document.body.appendChild(n);var r=n.offsetHeight;n.open=!0;var a=r!=n.offsetHeight;return document.body.removeChild(n),a}function a(e,t){if(!document.getElementById(e)){var n=document.createElement("style");n.id=e,n.innerHTML=t,document.getElementsByTagName("head")[0].appendChild(n)}}r()||(document.documentElement.className+=" no-details",window.addEventListener("click",n),a("details-polyfill-style","html.no-details "+e+" { display: block; }\nhtml.no-details "+e+":not([open]) > :not("+t+") { display: none; }\nhtml.no-details "+e+" > "+t+':before { content: "▶"; display: inline-block; font-size: .8em; width: 1.5em; }\nhtml.no-details '+e+"[open] > "+t+':before { content: "▼"; }'))})?r.call(t,n,t,e):r)||(e.exports=a)},77449:function(e,t,n){"use strict";n.r(t),t.default={}}}]);