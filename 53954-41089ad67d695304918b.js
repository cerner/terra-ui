(self.webpackChunkterra_ui=self.webpackChunkterra_ui||[]).push([[53954,19260],{97824:function(e,n,t){"use strict";var r=t(64836);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=r(t(54520)),o=function(e){return{bindTo:e,axis:{x:{type:a.default.helpers.AXIS_TYPE.TIME_SERIES,label:"Datetime",lowerLimit:new Date(2016,0,1,0,0).toISOString(),upperLimit:new Date(2016,0,1,23,59).toISOString(),ticks:{values:[new Date(2016,0,1,1,0).toISOString(),new Date(2016,0,1,5,0).toISOString(),new Date(2016,0,1,10,0).toISOString(),new Date(2016,0,1,15,0).toISOString(),new Date(2016,0,1,20,0).toISOString()],format:"%A %e %B %Y, %X"}},y:{label:"Line Set A",lowerLimit:10,upperLimit:30},y2:{show:!1,label:"Line Set B",lowerLimit:0,upperLimit:250}},showLabel:!0,showLegend:!0,showShapes:!0,showVGrid:!0,showHGrid:!0,locale:a.default.helpers.LOCALE.de_DE}};n.default=o},93065:function(e,n,t){"use strict";var r=t(64836);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=r(t(67294)),o=r(t(45697));t(80244);var i={id:o.default.string.isRequired},l=function(e){return a.default.createElement(a.default.Fragment,null,a.default.createElement("div",{id:"tooltip",className:"initial-tooltip"}),a.default.createElement("div",{id:e.id,className:"example-graph-container"}))};l.propTypes=i;var s=l;n.default=s},38412:function(e,n,t){"use strict";var r=t(64836);n.Z=void 0;var a=r(t(67294)),o=r(t(54520)),i=r(t(53334));t(56867);var l=r(t(93065)),s=r(t(97824)),p=i.default.deepClone((0,s.default)("#xAxisAlternateLocale")),c=function(){return a.default.useEffect((function(){o.default.api.graph(p)}),[]),a.default.createElement(l.default,{id:"xAxisAlternateLocale"})};n.Z=c},86340:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return E}});var r=t(67294),a=t(81254),o=t(38412),i=["components"];function l(){return l=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},l.apply(this,arguments)}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p={};function c(e){var n=e.components,t=s(e,i);return(0,a.mdx)("wrapper",l({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport utils from '@cerner/carbon-graphs/lib/js/helpers/utils';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Graph.module.scss';\nimport ExampleGraphContainer from '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer';\nimport getGraphConfig from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/General/timeseriesConfigAlternateLocale';\n\n/*\nPlease refer to the documentation below to see the graphConfig and data objects\n*/\n\nconst graphConfig = utils.deepClone(getGraphConfig('#xAxisAlternateLocale'));\n\nconst XAxisAlternateLocaleGeneralExample = () => {\n  React.useEffect(() => {\n    Carbon.api.graph(graphConfig);\n  }, []);\n  return (\n    <ExampleGraphContainer id=\"xAxisAlternateLocale\" />\n  );\n};\n\nexport default XAxisAlternateLocaleGeneralExample;\n\n")))}c.isMDXComponent=!0;var u=t(49271),m=t(25005),d=function(e){var n=e.title,t=e.description,a=e.isExpanded;return r.createElement(u.Z,{title:n||"X Axis Alternate Locale",description:t,example:r.createElement(o.Z,null),exampleCssSrc:r.createElement(m.Z,null),exampleSrc:r.createElement(c,null),isExpanded:a})},f=t(11598),g=["components"];function b(){return b=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},b.apply(this,arguments)}function h(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var x={},y="wrapper";function O(e){var n=e.components,t=h(e,g);return(0,a.mdx)(y,b({},x,t,{components:n,mdxType:"MDXLayout"}),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport {\n  loadPopup,\n} from '@cerner/terra-graphs-docs/lib/example-datasets/popup';\n\nconst data = [\n  {\n    key: 'uid_1',\n    label: {\n      display: 'Data Label 1',\n    },\n    shape: Carbon.helpers.SHAPES.DARK.CIRCLE,\n    onClick: loadPopup,\n    values: [\n      {\n        x: new Date(2016, 0, 1, 1, 5).toISOString(),\n        y: 5,\n        isCritical: false,\n      },\n      {\n        x: new Date(2016, 0, 1, 2, 15).toISOString(),\n        y: 11,\n      },\n      {\n        x: new Date(2016, 0, 1, 3, 15).toISOString(),\n        y: 12,\n      },\n      {\n        x: new Date(2016, 0, 1, 4, 15).toISOString(),\n        y: 16,\n      },\n      {\n        x: new Date(2016, 0, 1, 5, 15).toISOString(),\n        y: 17,\n      },\n      {\n        x: new Date(2016, 0, 1, 6, 15).toISOString(),\n        y: 9,\n      },\n      {\n        x: new Date(2016, 0, 1, 7, 0).toISOString(),\n        y: 11,\n      },\n      {\n        x: new Date(2016, 0, 1, 8, 15).toISOString(),\n        y: 12,\n      },\n      {\n        x: new Date(2016, 0, 1, 9, 45).toISOString(),\n        y: 16,\n      },\n      {\n        x: new Date(2016, 0, 1, 12, 15).toISOString(),\n        y: 17,\n      },\n      {\n        x: new Date(2016, 0, 1, 13, 15).toISOString(),\n        y: 28,\n      },\n      {\n        x: new Date(2016, 0, 1, 14, 15).toISOString(),\n        y: 12,\n      },\n      {\n        x: new Date(2016, 0, 1, 19, 45).toISOString(),\n        y: 13,\n      },\n      {\n        x: new Date(2016, 0, 1, 21, 15).toISOString(),\n        y: 14,\n      },\n    ],\n    yAxis: 'y',\n  },\n];\n\nexport default data;\n\n")))}O.isMDXComponent=!0;var S=["components"];function v(){return v=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},v.apply(this,arguments)}function w(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}t(51320);var j={},L="wrapper";function E(e){var n=e.components,t=w(e,S);return(0,a.mdx)(L,v({},j,t,{components:n,mdxType:"MDXLayout"}),(0,a.mdx)("h1",{id:"x-axis-alternate-locale"},"X-Axis alternate locale"),(0,a.mdx)("p",null,"This is a simple timeseries line graph with German(de_DE) locale."),(0,a.mdx)("h2",{id:"getting-started"},"Getting Started"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},"Install with ",(0,a.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",(0,a.mdx)("ul",{parentName:"li"},(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"npm i @cerner/carbon-graphs --save-dev"))))),(0,a.mdx)("h2",{id:"usage"},"Usage"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/dist/js/carbon-graphs.js';\nimport '@cerner/carbon-graphs/dist/css/carbon-graphs.css';\n")),(0,a.mdx)("h2",{id:"example"},"Example"),(0,a.mdx)(d,{mdxType:"LineGraph"}),(0,a.mdx)("details",null,(0,a.mdx)("summary",{style:{fontSize:24}},(0,a.mdx)("b",null,"Data")),(0,a.mdx)("h3",{id:"graph-config-object"},"Graph Config object"),(0,a.mdx)(f.Z,{mdxType:"GraphConfig"}),(0,a.mdx)("h3",{id:"data-object"},"Data object"),(0,a.mdx)(O,{mdxType:"DataObject"})))}E.isMDXComponent=!0},11598:function(e,n,t){"use strict";t.d(n,{Z:function(){return p}});t(67294);var r=t(81254),a=["components"];function o(){return o=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},o.apply(this,arguments)}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l={},s="wrapper";function p(e){var n=e.components,t=i(e,a);return(0,r.mdx)(s,o({},l,t,{components:n,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/lib/js/carbon';\n\nconst getLineTimeseriesConfig = (id) => ({\n  bindTo: id,\n  axis: {\n    x: {\n      type: Carbon.helpers.AXIS_TYPE.TIME_SERIES,\n      label: 'Datetime',\n      lowerLimit: new Date(2016, 0, 1, 1, 0).toISOString(),\n      upperLimit: new Date(2016, 0, 1, 23, 59).toISOString(),\n    },\n    y: {\n      label: 'Line Set A',\n      lowerLimit: 10,\n      upperLimit: 30,\n    },\n    y2: {\n      show: false,\n      label: 'Line Set B',\n      lowerLimit: 0,\n      upperLimit: 250,\n    },\n  },\n  showLabel: true,\n  showLegend: true,\n  showShapes: true,\n  showVGrid: true,\n  showHGrid: true,\n});\n\nexport default getLineTimeseriesConfig;\n\n")))}p.isMDXComponent=!0},51320:function(e,n,t){var r,a;void 0===(a="function"==typeof(r=function(){var e="details",n="summary";function t(e){if("summary"===e.target.nodeName.toLowerCase()){var n=e.target.parentNode;if(!n)return;n.getAttribute("open")?(n.open=!1,n.removeAttribute("open")):(n.open=!0,n.setAttribute("open","open"))}}function r(){var t=document.createElement(e);if(!("open"in t))return!1;t.innerHTML="<"+n+">a</"+n+">b",document.body.appendChild(t);var r=t.offsetHeight;t.open=!0;var a=r!=t.offsetHeight;return document.body.removeChild(t),a}function a(e,n){if(!document.getElementById(e)){var t=document.createElement("style");t.id=e,t.innerHTML=n,document.getElementsByTagName("head")[0].appendChild(t)}}r()||(document.documentElement.className+=" no-details",window.addEventListener("click",t),a("details-polyfill-style","html.no-details "+e+" { display: block; }\nhtml.no-details "+e+":not([open]) > :not("+n+") { display: none; }\nhtml.no-details "+e+" > "+n+':before { content: "▶"; display: inline-block; font-size: .8em; width: 1.5em; }\nhtml.no-details '+e+"[open] > "+n+':before { content: "▼"; }'))})?r.call(n,t,n,e):r)||(e.exports=a)}}]);