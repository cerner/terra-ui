(self.webpackChunkterra_ui=self.webpackChunkterra_ui||[]).push([[41547],{38743:function(e,n,t){"use strict";var a=t(64836);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=a(t(54520)),o=t(22678),l={key:"simple_region_line_dataset",graphType:"Line",label:{display:"Line Data Label"},shape:r.default.helpers.SHAPES.DARK.RHOMBUS,color:r.default.helpers.COLORS.BLUE,onClick:o.loadPopup,values:new Array(50).fill("").map((function(e,n){return{y:5*Math.sin(n)+10,x:10+5*n}})),regions:[{axis:"y",start:6,end:18}]};n.default=l},25868:function(e,n,t){"use strict";var a=t(64836);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=a(t(54520)),o=t(22678),l={key:"identical_region_paired_result_dataset",graphType:"Paired Result",label:{high:{display:"Paired Result High"},mid:{display:"Paired Result Median"},low:{display:"Paired Result Low"}},yAxis:"y2",shape:{high:r.default.helpers.SHAPES.DARK.TEAR_ALT,mid:r.default.helpers.SHAPES.DARK.RHOMBUS,low:r.default.helpers.SHAPES.DARK.TEAR_DROP},color:{high:r.default.helpers.COLORS.BLACK,mid:r.default.helpers.COLORS.BLACK,low:r.default.helpers.COLORS.BLACK},onClick:o.loadPopup,values:[{high:{x:45,y:200},mid:{x:45,y:146},low:{x:45,y:75}},{high:{x:160,y:110},mid:{x:160,y:70},low:{x:160,y:30}},{high:{x:220,y:110},mid:{x:220,y:70},low:{x:220,y:30}}],regions:{high:[{axis:"y2",start:120,end:180,color:"#c8cacb"}],low:[{axis:"y2",start:20,end:80}]}};n.default=l},52637:function(e,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var t=function(e){return{bindTo:e,axis:{x:{show:!0,label:"Data",lowerLimit:0,upperLimit:300},y:{show:!0,label:"Combination Set A",lowerLimit:0,upperLimit:20},y2:{show:!0,label:"Combination Set B",lowerLimit:40,upperLimit:180}},showLabel:!0,showLegend:!0,showVGrid:!0,showHGrid:!0}};n.default=t},22678:function(e,n,t){"use strict";var a=t(64836),r=t(18698);Object.defineProperty(n,"__esModule",{value:!0}),n.loadY2AxisLabelPopup=n.loadXAndYAxisLabelPopup=n.loadTrackPopup=n.loadTimelinePopup=n.loadTextLabelPopup=n.loadTaskPopup=n.loadPopup=n.loadPiePopup=n.loadDatelinePopup=n.loadBubblePopup=n.loadBarPopup=void 0;var o=a(t(27424)),l=function(e,n){if(!n&&e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var t=s(n);if(t&&t.has(e))return t.get(e);var a={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var i=o?Object.getOwnPropertyDescriptor(e,l):null;i&&(i.get||i.set)?Object.defineProperty(a,l,i):a[l]=e[l]}a.default=e,t&&t.set(e,a);return a}(t(66668)),i=a(t(88703)),p=a(t(53334));function s(e){if("function"!=typeof WeakMap)return null;var n=new WeakMap,t=new WeakMap;return(s=function(e){return e?t:n})(e)}var d=function(e){return new Date(e).toLocaleString()},c=function(e){return e?u(e)?d(e):e:null},u=function(e){return e instanceof Date},m=function(e,n,t){var a=e.append("g").classed("popup-item",!0);a.append("label").classed("popup-label",!0).text(n),a.append("g").classed("popup-text",!0).text(t)},f=function(e,n,t){var a=e.append("g").classed("popup-item",!0);a.append("label").classed("popup-label",!0).text(n);for(var r=a.append("g").classed("section",!0),l=function(){var e=p[i],n=r.append("g").classed("content",!0);Object.entries(e).forEach((function(e){var t=(0,o.default)(e,2),a=t[0],r=t[1],l=n.append("g").classed("popup-item",!0);l.append("label").classed("popup-label",!0).text(a.replace(/([a-z0-9])([A-Z])/g,"$1 $2").replace(/(\b[a-z](?!\s))/g,(function(e){return e.toUpperCase()}))),l.append("g").classed("popup-text",!0).text(r)}))},i=0,p=Object.values(t);i<p.length;i++)l()},h=function(e){var n=document.querySelector("#tooltip");return l.select("body").append("div","#tooltip").attr("id","overlay").classed("overlay",!0).on("click",(function t(){l.select(n).attr("style","display:none;").selectAll("g").remove(),p.default.isFunction(e)&&e(),l.select("#overlay").remove(),n.removeEventListener("click",t),window.removeEventListener("resize",t)})),l.select("#tooltip").style("left","".concat(l.event.pageX+5,"px")).style("top","".concat(l.event.pageY+5,"px"))},y=function(){l.select("#overlay").remove(),document.getElementsByClassName("initial-tooltip")[0]&&(document.getElementsByClassName("initial-tooltip")[0].className="tooltip"),l.select("#tooltip").attr("style","").selectAll("g").remove()};n.loadPopup=function(e,n,t,a){y();var r=h(e).append("g"),o=a.x,l=a.y,i=a.label,p=a.high,s=a.mid,f=a.low;o?(m(r,"X axis","".concat(u(o)?d(o):o)),m(r,"".concat(i.display),l)):(m(r,"X axis","".concat(p?c(p.x):s?c(s.x):f?c(f.x):"N/A")),p&&m(r,"High",c(p.y)),s&&m(r,"Mid",c(s.y)),f&&m(r,"Low",c(f.y)))};n.loadBubblePopup=function(e,n,t,a){y();var r=h(e).append("g"),o=a.x,l=a.y,i=a.label,p=a.weight;o&&(m(r,"X axis","".concat(u(o)?d(o):o)),m(r,"year",l)),p&&m(r,"".concat(i.display),"".concat(p))};n.loadBarPopup=function(e,n,t,a){y();var r=h(e).append("g");a.forEach((function(e){return m(r,"".concat(e.label.display),"".concat(e.y))}))};n.loadTextLabelPopup=function(e,n,t){y();var a=h(e).append("g").classed("popup-item",!0).append("g").attr("style","display: inline-block;"),r=n.shape,o=n.label,l=n.color;p.default.notEmpty(r)&&a.append("svg").attr("width","15").attr("height","12").append("path").attr("transform","translate(".concat(0,", ",0,") scale(",r.options.scale,")")).attr("d",r.path.d).attr("fill",r.path.fill||i.default.DEFAULT_COLOR).attr("id",r.path.id),o.display&&a.append("text").classed("popup-text",!0).attr("style","color: ".concat(l,";")).text("".concat(o.display)),o.secondaryDisplay&&a.append("tspan").attr("style","color: ".concat(i.default.DEFAULT_COLOR,";")).text(" ".concat(o.secondaryDisplay))};n.loadXAndYAxisLabelPopup=function(e){y(),h().append("g").append("g").classed("popup-item",!0).append("g").classed("popup-text",!0).text(e)};n.loadY2AxisLabelPopup=function(e){var n,t;y(),(t=document.querySelector("#tooltip"),l.select("body").append("div","#tooltip").attr("id","overlay").classed("overlay",!0).on("click",(function e(){l.select(t).attr("style","display:none;").selectAll("g").remove(),p.default.isFunction(n)&&n(),l.select("#overlay").remove(),t.removeEventListener("click",e),window.removeEventListener("resize",e)})),l.select("#tooltip").style("left","".concat(l.event.pageX-250,"px")).style("top","".concat(l.event.pageY+5,"px"))).append("g").append("g").classed("popup-item",!0).append("g").classed("popup-text",!0).text(e)};n.loadTrackPopup=function(e,n,t){y();var a=h(e).append("g"),r=t.tasks,o=t.activities,l=t.events,i=t.actions;if(r&&r.length>0){var p=[];p.forEach((function(e){p.push({name:e.key,startDate:e.startDate,endDate:e.endDate})})),f(a,"Tasks",p)}if(o&&o.length>0){var s=[];o.forEach((function(e){s.push({name:e.key,startDate:e.startDate,endDate:e.endDate})})),f(a,"Activities",s)}if(l&&l.length>0){var d=[];l.forEach((function(e){d.push({name:e.key,values:e.values.join(", ")})})),f(a,"Events",d)}if(i&&i.length>0){var c=[];i.forEach((function(e){c.push({name:e.key,values:e.values.join(", ")})})),f(a,"Actions",c)}};n.loadTaskPopup=function(e,n,t,a){y();var r=h(e).append("g"),o=a.label,l=a.display,i=a.y,p=a.startDate,s=a.endDate,c=a.percentage;o&&m(r,"Task Name",l),m(r,"Track",i),m(r,"Start Date",d(p)),m(r,"End Date",d(s)),c&&m(r,"Percentage",c)};n.loadDatelinePopup=function(e,n){y();var t=h(e).append("g"),a=n.label,r=n.value;a&&m(t,"Milestone",a.display),m(t,"Date",d(r))};n.loadTimelinePopup=function(e,n,t,a){y();var r=h(e).append("g"),o=a.x,l=(a.y,a.label),i=a.content;m(r,"X axis","".concat(u(o)?d(o):o)),m(r,"".concat(l.display),i)};n.loadPiePopup=function(e,n,t,a){y();var r=h(e).append("g"),o=a.label,l=a.value;m(r,o.display,l)}},93065:function(e,n,t){"use strict";var a=t(64836);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=a(t(67294)),o=a(t(45697));t(80244);var l={id:o.default.string.isRequired},i=function(e){return r.default.createElement(r.default.Fragment,null,r.default.createElement("div",{id:"tooltip",className:"initial-tooltip"}),r.default.createElement("div",{id:e.id,className:"example-graph-container"}))};i.propTypes=l;var p=i;n.default=p},80205:function(e,n,t){"use strict";var a=t(64836);n.Z=void 0;var r=a(t(67294)),o=a(t(54520)),l=a(t(53334));t(56867),t(39003),t(379);var i=a(t(93065)),p=a(t(52637)),s=a(t(38743)),d=a(t(25868)),c=l.default.deepClone((0,p.default)("#lineWithPairedResultRegion")),u=[l.default.deepClone(s.default),l.default.deepClone(d.default)],m=function(){return r.default.useEffect((function(){var e=o.default.api.graph(c);e.loadContent(o.default.api.line(u[0])),e.loadContent(o.default.api.pairedResult(u[1]))}),[]),r.default.createElement(i.default,{id:"lineWithPairedResultRegion"})};n.Z=m},41547:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return k}});var a=t(67294),r=t(81254),o=t(80205),l=["components"];function i(){return i=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},i.apply(this,arguments)}function p(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s={};function d(e){var n=e.components,t=p(e,l);return(0,r.mdx)("wrapper",i({},s,t,{components:n,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport utils from '@cerner/carbon-graphs/lib/js/helpers/utils';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Graph.module.scss';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Line/LineGraph.module.scss';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/PairedResult/PairedResultGraph.module.scss';\nimport ExampleGraphContainer from '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer';\nimport lineAndPairedResultConfig from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Combination/lineAndPairedResultConfig';\nimport lineDataset from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Combination/lineSimpleRegionDataset';\nimport pairedResultDataset from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Combination/pairedResultSimpleRegionDataset';\n\n/*\nPlease refer to the documentation below to see the graphConfig and data objects\n*/\nconst graphConfig = utils.deepClone(lineAndPairedResultConfig('#lineWithPairedResultRegion'));\nconst dataset = [\n  utils.deepClone(lineDataset),\n  utils.deepClone(pairedResultDataset),\n];\n\nconst LineWithPairedResultRegionCombinationExample = () => {\n  React.useEffect(() => {\n    const graph = Carbon.api.graph(graphConfig);\n    graph.loadContent(Carbon.api.line(dataset[0]));\n    graph.loadContent(Carbon.api.pairedResult(dataset[1]));\n  }, []);\n  return (\n    <ExampleGraphContainer id=\"lineWithPairedResultRegion\" />\n  );\n};\n\nexport default LineWithPairedResultRegionCombinationExample;\n\n")))}d.isMDXComponent=!0;var c=t(49271),u=t(25005),m=function(e){var n=e.title,t=e.description,r=e.isExpanded;return a.createElement(c.Z,{title:n||"Simple",description:t,example:a.createElement(o.Z,null),exampleCssSrc:a.createElement(u.Z,null),exampleSrc:a.createElement(d,null),isExpanded:r})},f=t(99024),h=["components"];function y(){return y=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},y.apply(this,arguments)}function g(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var b={},v="wrapper";function x(e){var n=e.components,t=g(e,h);return(0,r.mdx)(v,y({},b,t,{components:n,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport { loadPopup } from '@cerner/terra-graphs-docs/lib/example-datasets/popup';\n\nconst data = {\n  key: 'simple_region_line_dataset',\n  graphType: 'Line',\n  label: {\n    display: 'Line Data Label',\n  },\n  shape: Carbon.helpers.SHAPES.DARK.RHOMBUS,\n  color: Carbon.helpers.COLORS.BLUE,\n  onClick: loadPopup,\n  values: new Array(50).fill('').map((_, i) => ({\n    y: Math.sin(i) * 5 + 10,\n    x: 10 + i * 5,\n  })),\n  regions: [\n    {\n      axis: 'y',\n      start: 6,\n      end: 18,\n    },\n  ],\n};\n\nexport default data;\n\n")))}x.isMDXComponent=!0;var O=["components"];function P(){return P=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},P.apply(this,arguments)}function C(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var w={},j="wrapper";function L(e){var n=e.components,t=C(e,O);return(0,r.mdx)(j,P({},w,t,{components:n,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport { loadPopup } from '@cerner/terra-graphs-docs/lib/example-datasets/popup';\n\nconst data = {\n  key: 'identical_region_paired_result_dataset',\n  graphType: 'Paired Result',\n  label: {\n    high: {\n      display: 'Paired Result High',\n    },\n    mid: {\n      display: 'Paired Result Median',\n    },\n    low: {\n      display: 'Paired Result Low',\n    },\n  },\n  yAxis: 'y2',\n  shape: {\n    high: Carbon.helpers.SHAPES.DARK.TEAR_ALT,\n    mid: Carbon.helpers.SHAPES.DARK.RHOMBUS,\n    low: Carbon.helpers.SHAPES.DARK.TEAR_DROP,\n  },\n  color: {\n    high: Carbon.helpers.COLORS.BLACK,\n    mid: Carbon.helpers.COLORS.BLACK,\n    low: Carbon.helpers.COLORS.BLACK,\n  },\n  onClick: loadPopup,\n  values: [\n    {\n      high: {\n        x: 45,\n        y: 200,\n      },\n      mid: {\n        x: 45,\n        y: 146,\n      },\n      low: {\n        x: 45,\n        y: 75,\n      },\n    },\n    {\n      high: {\n        x: 160,\n        y: 110,\n      },\n      mid: {\n        x: 160,\n        y: 70,\n      },\n      low: {\n        x: 160,\n        y: 30,\n      },\n    },\n    {\n      high: {\n        x: 220,\n        y: 110,\n      },\n      mid: {\n        x: 220,\n        y: 70,\n      },\n      low: {\n        x: 220,\n        y: 30,\n      },\n    },\n  ],\n  regions: {\n    high: [\n      {\n        axis: 'y2',\n        start: 120,\n        end: 180,\n        color: '#c8cacb',\n      },\n    ],\n    low: [\n      {\n        axis: 'y2',\n        start: 20,\n        end: 80,\n      },\n    ],\n  },\n};\n\nexport default data;\n\n")))}L.isMDXComponent=!0;var R=["components"];function E(){return E=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},E.apply(this,arguments)}function D(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}t(51320);var A={},S="wrapper";function k(e){var n=e.components,t=D(e,R);return(0,r.mdx)(S,E({},A,t,{components:n,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"line-with-paired-result"},"Line With Paired Result"),(0,r.mdx)("p",null,"This is a combination graph associated with simple region."),(0,r.mdx)("h2",{id:"getting-started"},"Getting Started"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Install with ",(0,r.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"npm i @cerner/carbon-graphs --save-dev"))))),(0,r.mdx)("h2",{id:"usage"},"Usage"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/dist/js/carbon-graphs.js';\nimport '@cerner/carbon-graphs/dist/css/carbon-graphs.css';\n")),(0,r.mdx)("h2",{id:"example"},"Example"),(0,r.mdx)(m,{mdxType:"CombinationGraph"}),(0,r.mdx)("details",null,(0,r.mdx)("summary",{style:{fontSize:24}},(0,r.mdx)("b",null,"Data")),(0,r.mdx)("h3",{id:"graph-config-object"},"Graph Config object"),(0,r.mdx)(f.Z,{mdxType:"GraphConfig"}),(0,r.mdx)("h3",{id:"data-object"},"Data object"),(0,r.mdx)("h4",{id:"line-dataset"},"Line Dataset"),(0,r.mdx)(x,{mdxType:"DataObject1"}),(0,r.mdx)("h4",{id:"paired-result-dataset"},"Paired Result Dataset"),(0,r.mdx)(L,{mdxType:"DataObject2"})))}k.isMDXComponent=!0},99024:function(e,n,t){"use strict";t.d(n,{Z:function(){return s}});t(67294);var a=t(81254),r=["components"];function o(){return o=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},o.apply(this,arguments)}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i={},p="wrapper";function s(e){var n=e.components,t=l(e,r);return(0,a.mdx)(p,o({},i,t,{components:n,mdxType:"MDXLayout"}),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-js"},"const getlineAndPairdResultConfig = (id) => ({\n  bindTo: id,\n  axis: {\n    x: {\n      show: true,\n      label: 'Data',\n      lowerLimit: 0,\n      upperLimit: 300,\n    },\n    y: {\n      show: true,\n      label: 'Combination Set A',\n      lowerLimit: 0,\n      upperLimit: 20,\n    },\n    y2: {\n      show: true,\n      label: 'Combination Set B',\n      lowerLimit: 40,\n      upperLimit: 180,\n    },\n  },\n  showLabel: true,\n  showLegend: true,\n  showVGrid: true,\n  showHGrid: true,\n});\n\nexport default getlineAndPairdResultConfig;\n\n")))}s.isMDXComponent=!0},51320:function(e,n,t){var a,r;void 0===(r="function"==typeof(a=function(){var e="details",n="summary";function t(e){if("summary"===e.target.nodeName.toLowerCase()){var n=e.target.parentNode;if(!n)return;n.getAttribute("open")?(n.open=!1,n.removeAttribute("open")):(n.open=!0,n.setAttribute("open","open"))}}function a(){var t=document.createElement(e);if(!("open"in t))return!1;t.innerHTML="<"+n+">a</"+n+">b",document.body.appendChild(t);var a=t.offsetHeight;t.open=!0;var r=a!=t.offsetHeight;return document.body.removeChild(t),r}function r(e,n){if(!document.getElementById(e)){var t=document.createElement("style");t.id=e,t.innerHTML=n,document.getElementsByTagName("head")[0].appendChild(t)}}a()||(document.documentElement.className+=" no-details",window.addEventListener("click",t),r("details-polyfill-style","html.no-details "+e+" { display: block; }\nhtml.no-details "+e+":not([open]) > :not("+n+") { display: none; }\nhtml.no-details "+e+" > "+n+':before { content: "▶"; display: inline-block; font-size: .8em; width: 1.5em; }\nhtml.no-details '+e+"[open] > "+n+':before { content: "▼"; }'))})?a.call(n,t,n,e):a)||(e.exports=r)},39003:function(e,n,t){"use strict";t.r(n),n.default={}},379:function(e,n,t){"use strict";t.r(n),n.default={}}}]);