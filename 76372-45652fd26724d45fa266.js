(self.webpackChunkterra_ui=self.webpackChunkterra_ui||[]).push([[76372],{24779:function(e,n,t){"use strict";var r=t(24994);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=r(t(39139));n.default=function(e){return{bindTo:e,axis:{x:{type:a.default.helpers.AXIS_TYPE.TIME_SERIES,label:"Datetime",lowerLimit:new Date(2016,0,1).toISOString(),upperLimit:new Date(2016,0,12).toISOString(),ticks:{values:[new Date(2016,0,1).toISOString(),new Date(2016,0,2).toISOString(),new Date(2016,0,3).toISOString(),new Date(2016,0,4).toISOString(),new Date(2016,0,5).toISOString(),new Date(2016,0,6).toISOString(),new Date(2016,0,7).toISOString(),new Date(2016,0,8).toISOString(),new Date(2016,0,9).toISOString(),new Date(2016,0,10).toISOString(),new Date(2016,0,11).toISOString()],tickLabelsRotation:-45,format:"%Y, %X"}},y:{label:"Line Set A",lowerLimit:10,upperLimit:30},y2:{show:!1,label:"Line Set B",lowerLimit:0,upperLimit:250}},showLabel:!0,showLegend:!0,showShapes:!0,showVGrid:!0,showHGrid:!0,locale:a.default.helpers.LOCALE.en_US}}},29683:function(e,n,t){"use strict";var r=t(24994);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=r(t(96540)),i=r(t(5556));t(16939);var o={id:i.default.string.isRequired},l=function(e){return a.default.createElement(a.default.Fragment,null,a.default.createElement("div",{id:"tooltip",className:"initial-tooltip"}),a.default.createElement("div",{id:e.id,className:"example-graph-container"}))};l.propTypes=o;n.default=l},96341:function(e,n,t){"use strict";var r=t(24994);n.A=void 0;var a=r(t(96540)),i=r(t(39139)),o=r(t(45839));t(14388);var l=r(t(29683)),s=r(t(24779)),p=o.default.deepClone((0,s.default)("#XAxisTickLabelOrientation"));n.A=function(){return a.default.useEffect((function(){i.default.api.graph(p)}),[]),a.default.createElement(l.default,{id:"XAxisTickLabelOrientation"})}},18033:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return E}});var r=t(96540),a=t(36665),i=t(96341),o=["components"];function l(){return l=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},l.apply(this,arguments)}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p={};function c(e){var n=e.components,t=s(e,o);return(0,a.mdx)("wrapper",l({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport utils from '@cerner/carbon-graphs/lib/js/helpers/utils';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Graph.module.scss';\nimport ExampleGraphContainer from '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer';\nimport getGraphConfig from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/General/generalDefaultXAxisOverlapping';\n\n/*\nPlease refer to the documentation below to see the graphConfig and data objects\n*/\n\nconst graphConfig = utils.deepClone(getGraphConfig('#XAxisTickLabelOrientation'));\n\nconst XAxisTickLabelOrientationGeneralExample = () => {\n  React.useEffect(() => {\n    Carbon.api.graph(graphConfig);\n  }, []);\n  return (\n    <ExampleGraphContainer id=\"XAxisTickLabelOrientation\" />\n  );\n};\n\nexport default XAxisTickLabelOrientationGeneralExample;\n\n")))}c.isMDXComponent=!0;var m=t(201),u=t(10502),d=function(e){var n=e.title,t=e.description,a=e.isExpanded;return r.createElement(m.A,{title:n||"X Axis Tick Label Orientation",description:t,example:r.createElement(i.A,null),exampleCssSrc:r.createElement(u.A,null),exampleSrc:r.createElement(c,null),isExpanded:a})},f=["components"];function g(){return g=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},g.apply(this,arguments)}function b(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var h={},S="wrapper";function O(e){var n=e.components,t=b(e,f);return(0,a.mdx)(S,g({},h,t,{components:n,mdxType:"MDXLayout"}),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/lib/js/carbon';\n\nconst getLineTimeseriesConfig = (id) => ({\n  bindTo: id,\n  axis: {\n    x: {\n      type: Carbon.helpers.AXIS_TYPE.TIME_SERIES,\n      label: 'Datetime',\n      lowerLimit: new Date(2016, 0, 1).toISOString(),\n      upperLimit: new Date(2016, 0, 12).toISOString(),\n      ticks: {\n        values: [\n          new Date(2016, 0, 1).toISOString(),\n          new Date(2016, 0, 2).toISOString(),\n          new Date(2016, 0, 3).toISOString(),\n          new Date(2016, 0, 4).toISOString(),\n          new Date(2016, 0, 5).toISOString(),\n          new Date(2016, 0, 6).toISOString(),\n          new Date(2016, 0, 7).toISOString(),\n          new Date(2016, 0, 8).toISOString(),\n          new Date(2016, 0, 9).toISOString(),\n          new Date(2016, 0, 10).toISOString(),\n          new Date(2016, 0, 11).toISOString(),\n        ],\n        tickLabelsRotation: -45,\n        format: '%Y, %X',\n      },\n    },\n    y: {\n      label: 'Line Set A',\n      lowerLimit: 10,\n      upperLimit: 30,\n    },\n    y2: {\n      show: false,\n      label: 'Line Set B',\n      lowerLimit: 0,\n      upperLimit: 250,\n    },\n  },\n  showLabel: true,\n  showLegend: true,\n  showShapes: true,\n  showVGrid: true,\n  showHGrid: true,\n  locale: Carbon.helpers.LOCALE.en_US,\n});\n\nexport default getLineTimeseriesConfig;\n\n")))}O.isMDXComponent=!0;var x=["components"];function w(){return w=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},w.apply(this,arguments)}function v(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}t(27647);var y={},L="wrapper";function E(e){var n=e.components,t=v(e,x);return(0,a.mdx)(L,w({},y,t,{components:n,mdxType:"MDXLayout"}),(0,a.mdx)("h1",{id:"x-axis-tick-label-orientation"},"X-Axis Tick Label orientation"),(0,a.mdx)("p",null,"This is a simple timeseries line graph with x-axis ticks label orientation ",(0,a.mdx)("inlineCode",{parentName:"p"},"tickLabelsRotation = -45"),". Tick label rotation is used to prevent labels from overlapping in a narrow viewport or due to long tick labels."),(0,a.mdx)("h2",{id:"getting-started"},"Getting Started"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},"Install with ",(0,a.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",(0,a.mdx)("ul",{parentName:"li"},(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"npm i @cerner/carbon-graphs --save-dev"))))),(0,a.mdx)("h2",{id:"usage"},"Usage"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/dist/js/carbon-graphs.js';\nimport '@cerner/carbon-graphs/dist/css/carbon-graphs.css';\n")),(0,a.mdx)("h2",{id:"example"},"Example"),(0,a.mdx)(d,{mdxType:"LineGraph"}),(0,a.mdx)("details",null,(0,a.mdx)("summary",{style:{fontSize:24}},(0,a.mdx)("b",null,"Data")),(0,a.mdx)("h3",{id:"graph-config-object"},"Graph Config object"),(0,a.mdx)(O,{mdxType:"GraphConfig"})))}E.isMDXComponent=!0},27647:function(e,n,t){var r,a;void 0===(a="function"==typeof(r=function(){var e="details",n="summary";function t(e){if("summary"===e.target.nodeName.toLowerCase()){var n=e.target.parentNode;if(!n)return;n.getAttribute("open")?(n.open=!1,n.removeAttribute("open")):(n.open=!0,n.setAttribute("open","open"))}}function r(){var t=document.createElement(e);if(!("open"in t))return!1;t.innerHTML="<"+n+">a</"+n+">b",document.body.appendChild(t);var r=t.offsetHeight;t.open=!0;var a=r!=t.offsetHeight;return document.body.removeChild(t),a}function a(e,n){if(!document.getElementById(e)){var t=document.createElement("style");t.id=e,t.innerHTML=n,document.getElementsByTagName("head")[0].appendChild(t)}}r()||(document.documentElement.className+=" no-details",window.addEventListener("click",t),a("details-polyfill-style","html.no-details "+e+" { display: block; }\nhtml.no-details "+e+":not([open]) > :not("+n+") { display: none; }\nhtml.no-details "+e+" > "+n+':before { content: "▶"; display: inline-block; font-size: .8em; width: 1.5em; }\nhtml.no-details '+e+"[open] > "+n+':before { content: "▼"; }'))})?r.call(n,t,n,e):r)||(e.exports=a)}}]);