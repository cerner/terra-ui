(self.webpackChunkterra_ui=self.webpackChunkterra_ui||[]).push([[43674],{30272:function(e,t,n){"use strict";var a=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(54520)),o=n(22678),i={key:"uid_1",label:{display:"Data Label 1"},shape:r.default.helpers.SHAPES.DARK.CIRCLE,onClick:o.loadPopup,values:[{x:new Date(2016,0,1,1,5).toISOString(),y:5},{x:new Date(2016,0,1,2,15).toISOString(),y:11},{x:new Date(2016,0,1,3,15).toISOString(),y:12},{x:new Date(2016,0,1,4,15).toISOString(),y:16},{x:new Date(2016,0,1,5,15).toISOString(),y:17},{x:new Date(2016,0,1,6,15).toISOString(),y:9},{x:new Date(2016,0,1,7,0).toISOString(),y:11},{x:new Date(2016,0,1,8,15).toISOString(),y:12},{x:new Date(2016,0,1,9,45).toISOString(),y:16},{x:new Date(2016,0,1,12,15).toISOString(),y:17},{x:new Date(2016,0,1,13,15).toISOString(),y:28},{x:new Date(2016,0,1,14,15).toISOString(),y:12},{x:new Date(2016,0,1,19,45).toISOString(),y:13},{x:new Date(2016,0,1,21,15).toISOString(),y:14}],yAxis:"y"};t.default=i},49810:function(e,t,n){"use strict";var a=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(54520)),o=function(e){return{bindTo:e,axis:{x:{type:r.default.helpers.AXIS_TYPE.TIME_SERIES,label:"Datetime",lowerLimit:new Date(2016,0,0,23,59).toISOString(),upperLimit:new Date(2016,0,2,1,0).toISOString(),ticks:{values:[new Date(2016,0,1,1,0).toISOString(),new Date(2016,0,1,5,0).toISOString(),new Date(2016,0,1,10,0).toISOString(),new Date(2016,0,1,15,0).toISOString(),new Date(2016,0,1,20,0).toISOString()],format:"%H",lowerStepTickValues:[new Date(2016,0,1,6).toISOString(),new Date(2016,0,1,12).toISOString(),new Date(2016,0,1,18).toISOString()],midpointTickValues:[new Date(2016,0,1,3).toISOString(),new Date(2016,0,1,9).toISOString(),new Date(2016,0,1,15).toISOString(),new Date(2016,0,1,21).toISOString()],upperStepTickValues:[new Date(2016,0,1,0).toISOString(),new Date(2016,0,1,24).toISOString()]}},y:{label:"Line Set A",lowerLimit:10,upperLimit:30},y2:{show:!1,label:"Line Set B",lowerLimit:0,upperLimit:250}},showLabel:!0,showLegend:!0,showShapes:!0,showVGrid:!0,showHGrid:!0}};t.default=o},22678:function(e,t,n){"use strict";var a=n(64836),r=n(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.loadY2AxisLabelPopup=t.loadXAndYAxisLabelPopup=t.loadTrackPopup=t.loadTimelinePopup=t.loadTextLabelPopup=t.loadTaskPopup=t.loadPopup=t.loadPiePopup=t.loadDatelinePopup=t.loadBubblePopup=t.loadBarPopup=void 0;var o=a(n(27424)),i=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var n=s(t);if(n&&n.has(e))return n.get(e);var a={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var l=o?Object.getOwnPropertyDescriptor(e,i):null;l&&(l.get||l.set)?Object.defineProperty(a,i,l):a[i]=e[i]}a.default=e,n&&n.set(e,a);return a}(n(66668)),l=a(n(88703)),p=a(n(53334));function s(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(s=function(e){return e?n:t})(e)}var c=function(e){return new Date(e).toLocaleString()},u=function(e){return e?d(e)?c(e):e:null},d=function(e){return e instanceof Date},m=function(e,t,n){var a=e.append("g").classed("popup-item",!0);a.append("label").classed("popup-label",!0).text(t),a.append("g").classed("popup-text",!0).text(n)},f=function(e,t,n){var a=e.append("g").classed("popup-item",!0);a.append("label").classed("popup-label",!0).text(t);for(var r=a.append("g").classed("section",!0),i=function(){var e=p[l],t=r.append("g").classed("content",!0);Object.entries(e).forEach((function(e){var n=(0,o.default)(e,2),a=n[0],r=n[1],i=t.append("g").classed("popup-item",!0);i.append("label").classed("popup-label",!0).text(a.replace(/([a-z0-9])([A-Z])/g,"$1 $2").replace(/(\b[a-z](?!\s))/g,(function(e){return e.toUpperCase()}))),i.append("g").classed("popup-text",!0).text(r)}))},l=0,p=Object.values(n);l<p.length;l++)i()},g=function(e){var t=document.querySelector("#tooltip");return i.select("body").append("div","#tooltip").attr("id","overlay").classed("overlay",!0).on("click",(function n(){i.select(t).attr("style","display:none;").selectAll("g").remove(),p.default.isFunction(e)&&e(),i.select("#overlay").remove(),t.removeEventListener("click",n),window.removeEventListener("resize",n)})),i.select("#tooltip").style("left","".concat(i.event.pageX+5,"px")).style("top","".concat(i.event.pageY+5,"px"))},y=function(){i.select("#overlay").remove(),document.getElementsByClassName("initial-tooltip")[0]&&(document.getElementsByClassName("initial-tooltip")[0].className="tooltip"),i.select("#tooltip").attr("style","").selectAll("g").remove()};t.loadPopup=function(e,t,n,a){y();var r=g(e).append("g"),o=a.x,i=a.y,l=a.label,p=a.high,s=a.mid,f=a.low;o?(m(r,"X axis","".concat(d(o)?c(o):o)),m(r,"".concat(l.display),i)):(m(r,"X axis","".concat(p?u(p.x):s?u(s.x):f?u(f.x):"N/A")),p&&m(r,"High",u(p.y)),s&&m(r,"Mid",u(s.y)),f&&m(r,"Low",u(f.y)))};t.loadBubblePopup=function(e,t,n,a){y();var r=g(e).append("g"),o=a.x,i=a.y,l=a.label,p=a.weight;o&&(m(r,"X axis","".concat(d(o)?c(o):o)),m(r,"year",i)),p&&m(r,"".concat(l.display),"".concat(p))};t.loadBarPopup=function(e,t,n,a){y();var r=g(e).append("g");a.forEach((function(e){return m(r,"".concat(e.label.display),"".concat(e.y))}))};t.loadTextLabelPopup=function(e,t,n){y();var a=g(e).append("g").classed("popup-item",!0).append("g").attr("style","display: inline-block;"),r=t.shape,o=t.label,i=t.color;p.default.notEmpty(r)&&a.append("svg").attr("width","15").attr("height","12").append("path").attr("transform","translate(".concat(0,", ",0,") scale(",r.options.scale,")")).attr("d",r.path.d).attr("fill",r.path.fill||l.default.DEFAULT_COLOR).attr("id",r.path.id),o.display&&a.append("text").classed("popup-text",!0).attr("style","color: ".concat(i,";")).text("".concat(o.display)),o.secondaryDisplay&&a.append("tspan").attr("style","color: ".concat(l.default.DEFAULT_COLOR,";")).text(" ".concat(o.secondaryDisplay))};t.loadXAndYAxisLabelPopup=function(e){y(),g().append("g").append("g").classed("popup-item",!0).append("g").classed("popup-text",!0).text(e)};t.loadY2AxisLabelPopup=function(e){var t,n;y(),(n=document.querySelector("#tooltip"),i.select("body").append("div","#tooltip").attr("id","overlay").classed("overlay",!0).on("click",(function e(){i.select(n).attr("style","display:none;").selectAll("g").remove(),p.default.isFunction(t)&&t(),i.select("#overlay").remove(),n.removeEventListener("click",e),window.removeEventListener("resize",e)})),i.select("#tooltip").style("left","".concat(i.event.pageX-250,"px")).style("top","".concat(i.event.pageY+5,"px"))).append("g").append("g").classed("popup-item",!0).append("g").classed("popup-text",!0).text(e)};t.loadTrackPopup=function(e,t,n){y();var a=g(e).append("g"),r=n.tasks,o=n.activities,i=n.events,l=n.actions;if(r&&r.length>0){var p=[];p.forEach((function(e){p.push({name:e.key,startDate:e.startDate,endDate:e.endDate})})),f(a,"Tasks",p)}if(o&&o.length>0){var s=[];o.forEach((function(e){s.push({name:e.key,startDate:e.startDate,endDate:e.endDate})})),f(a,"Activities",s)}if(i&&i.length>0){var c=[];i.forEach((function(e){c.push({name:e.key,values:e.values.join(", ")})})),f(a,"Events",c)}if(l&&l.length>0){var u=[];l.forEach((function(e){u.push({name:e.key,values:e.values.join(", ")})})),f(a,"Actions",u)}};t.loadTaskPopup=function(e,t,n,a){y();var r=g(e).append("g"),o=a.label,i=a.display,l=a.y,p=a.startDate,s=a.endDate,u=a.percentage;o&&m(r,"Task Name",i),m(r,"Track",l),m(r,"Start Date",c(p)),m(r,"End Date",c(s)),u&&m(r,"Percentage",u)};t.loadDatelinePopup=function(e,t){y();var n=g(e).append("g"),a=t.label,r=t.value;a&&m(n,"Milestone",a.display),m(n,"Date",c(r))};t.loadTimelinePopup=function(e,t,n,a){y();var r=g(e).append("g"),o=a.x,i=(a.y,a.label),l=a.content;m(r,"X axis","".concat(d(o)?c(o):o)),m(r,"".concat(i.display),l)};t.loadPiePopup=function(e,t,n,a){y();var r=g(e).append("g"),o=a.label,i=a.value;m(r,o.display,i)}},93065:function(e,t,n){"use strict";var a=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(67294)),o=a(n(45697));n(80244);var i={id:o.default.string.isRequired},l=function(e){return r.default.createElement(r.default.Fragment,null,r.default.createElement("div",{id:"tooltip",className:"initial-tooltip"}),r.default.createElement("div",{id:e.id,className:"example-graph-container"}))};l.propTypes=i;var p=l;t.default=p},91658:function(e,t,n){"use strict";var a=n(64836);t.Z=void 0;var r=a(n(67294)),o=a(n(54520)),i=a(n(53334));n(56867),n(39003);var l=a(n(93065)),p=a(n(49810)),s=a(n(30272)),c=i.default.deepClone((0,p.default)("#datetimeBucket")),u=i.default.deepClone(s.default),d=function(){return r.default.useEffect((function(){o.default.api.graph(c).loadContent(o.default.api.line(u))}),[]),r.default.createElement(l.default,{id:"datetimeBucket"})};t.Z=d},43674:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return j}});var a=n(67294),r=n(81254),o=n(91658),i=["components"];function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},l.apply(this,arguments)}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s={};function c(e){var t=e.components,n=p(e,i);return(0,r.mdx)("wrapper",l({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport utils from '@cerner/carbon-graphs/lib/js/helpers/utils';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Graph.module.scss';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Line/LineGraph.module.scss';\nimport ExampleGraphContainer from '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer';\nimport getGraphConfig from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/General/timeseriesConfigDateTimeBucket';\nimport exampleData from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/General/datasetTimeseries1';\n\n/*\nPlease refer to the documentation below to see the graphConfig and data objects\n*/\n\nconst graphConfig = utils.deepClone(getGraphConfig('#datetimeBucket'));\nconst dataset = utils.deepClone(exampleData);\n\nconst DatetimeBucketGeneralExample = () => {\n  React.useEffect(() => {\n    const graph = Carbon.api.graph(graphConfig);\n    graph.loadContent(Carbon.api.line(dataset));\n  }, []);\n  return (\n    <ExampleGraphContainer id=\"datetimeBucket\" />\n  );\n};\n\nexport default DatetimeBucketGeneralExample;\n\n")))}c.isMDXComponent=!0;var u=n(49271),d=n(25005),m=function(e){var t=e.title,n=e.description,r=e.isExpanded;return a.createElement(u.Z,{title:t||"Datetime Bucket",description:n,example:a.createElement(o.Z,null),exampleCssSrc:a.createElement(d.Z,null),exampleSrc:a.createElement(c,null),isExpanded:r})},f=["components"];function g(){return g=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},g.apply(this,arguments)}function y(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var S={},b="wrapper";function v(e){var t=e.components,n=y(e,f);return(0,r.mdx)(b,g({},S,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/lib/js/carbon';\n\nconst getGraphConfig = (id) => ({\n  bindTo: id,\n  axis: {\n    x: {\n      type: Carbon.helpers.AXIS_TYPE.TIME_SERIES,\n      label: 'Datetime',\n      lowerLimit: new Date(2016, 0, 0, 23, 59).toISOString(),\n      upperLimit: new Date(2016, 0, 2, 1, 0).toISOString(),\n      ticks: {\n        values: [\n          new Date(2016, 0, 1, 1, 0).toISOString(),\n          new Date(2016, 0, 1, 5, 0).toISOString(),\n          new Date(2016, 0, 1, 10, 0).toISOString(),\n          new Date(2016, 0, 1, 15, 0).toISOString(),\n          new Date(2016, 0, 1, 20, 0).toISOString(),\n        ],\n        format: '%H',\n        lowerStepTickValues: [\n          new Date(2016, 0, 1, 6).toISOString(),\n          new Date(2016, 0, 1, 12).toISOString(),\n          new Date(2016, 0, 1, 18).toISOString(),\n        ],\n        midpointTickValues: [\n          new Date(2016, 0, 1, 3).toISOString(),\n          new Date(2016, 0, 1, 9).toISOString(),\n          new Date(2016, 0, 1, 15).toISOString(),\n          new Date(2016, 0, 1, 21).toISOString(),\n        ],\n        upperStepTickValues: [\n          new Date(2016, 0, 1, 0).toISOString(),\n          new Date(2016, 0, 1, 24).toISOString(),\n        ],\n      },\n    },\n    y: {\n      label: 'Line Set A',\n      lowerLimit: 10,\n      upperLimit: 30,\n    },\n    y2: {\n      show: false,\n      label: 'Line Set B',\n      lowerLimit: 0,\n      upperLimit: 250,\n    },\n  },\n  showLabel: true,\n  showLegend: true,\n  showShapes: true,\n  showVGrid: true,\n  showHGrid: true,\n});\n\nexport default getGraphConfig;\n\n")))}v.isMDXComponent=!0;var x=n(35862),h=["components"];function O(){return O=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},O.apply(this,arguments)}function w(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}n(51320);var D={},I="wrapper";function j(e){var t=e.components,n=w(e,h);return(0,r.mdx)(I,O({},D,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"datetime-bucket"},"Datetime bucket"),(0,r.mdx)("p",null,"This is a timeseries line graph  with datetime formatted bucket."),(0,r.mdx)("h2",{id:"getting-started"},"Getting Started"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Install with ",(0,r.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"npm i @cerner/carbon-graphs --save-dev"))))),(0,r.mdx)("h2",{id:"usage"},"Usage"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/dist/js/carbon-graphs.js';\nimport '@cerner/carbon-graphs/dist/css/carbon-graphs.css';\n")),(0,r.mdx)("h2",{id:"example"},"Example"),(0,r.mdx)(m,{mdxType:"LineGraph"}),(0,r.mdx)("details",null,(0,r.mdx)("summary",{style:{fontSize:24}},(0,r.mdx)("b",null,"Data")),(0,r.mdx)("h3",{id:"graph-config-object"},"Graph Config object"),(0,r.mdx)(v,{mdxType:"GraphConfig"}),(0,r.mdx)("h3",{id:"data-object"},"Data object"),(0,r.mdx)(x.Z,{mdxType:"DataObject"})))}j.isMDXComponent=!0},35862:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});n(67294);var a=n(81254),r=["components"];function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o.apply(this,arguments)}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l={},p="wrapper";function s(e){var t=e.components,n=i(e,r);return(0,a.mdx)(p,o({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport { loadPopup } from '@cerner/terra-graphs-docs/lib/example-datasets/popup';\n\nconst data = {\n  key: 'uid_1',\n  label: {\n    display: 'Data Label 1',\n  },\n  shape: Carbon.helpers.SHAPES.DARK.CIRCLE,\n  onClick: loadPopup,\n  values: [\n    {\n      x: new Date(2016, 0, 1, 1, 5).toISOString(),\n      y: 5,\n    },\n    {\n      x: new Date(2016, 0, 1, 2, 15).toISOString(),\n      y: 11,\n    },\n    {\n      x: new Date(2016, 0, 1, 3, 15).toISOString(),\n      y: 12,\n    },\n    {\n      x: new Date(2016, 0, 1, 4, 15).toISOString(),\n      y: 16,\n    },\n    {\n      x: new Date(2016, 0, 1, 5, 15).toISOString(),\n      y: 17,\n    },\n    {\n      x: new Date(2016, 0, 1, 6, 15).toISOString(),\n      y: 9,\n    },\n    {\n      x: new Date(2016, 0, 1, 7, 0).toISOString(),\n      y: 11,\n    },\n    {\n      x: new Date(2016, 0, 1, 8, 15).toISOString(),\n      y: 12,\n    },\n    {\n      x: new Date(2016, 0, 1, 9, 45).toISOString(),\n      y: 16,\n    },\n    {\n      x: new Date(2016, 0, 1, 12, 15).toISOString(),\n      y: 17,\n    },\n    {\n      x: new Date(2016, 0, 1, 13, 15).toISOString(),\n      y: 28,\n    },\n    {\n      x: new Date(2016, 0, 1, 14, 15).toISOString(),\n      y: 12,\n    },\n    {\n      x: new Date(2016, 0, 1, 19, 45).toISOString(),\n      y: 13,\n    },\n    {\n      x: new Date(2016, 0, 1, 21, 15).toISOString(),\n      y: 14,\n    },\n  ],\n  yAxis: 'y',\n};\n\nexport default data;\n\n")))}s.isMDXComponent=!0},51320:function(e,t,n){var a,r;void 0===(r="function"==typeof(a=function(){var e="details",t="summary";function n(e){if("summary"===e.target.nodeName.toLowerCase()){var t=e.target.parentNode;if(!t)return;t.getAttribute("open")?(t.open=!1,t.removeAttribute("open")):(t.open=!0,t.setAttribute("open","open"))}}function a(){var n=document.createElement(e);if(!("open"in n))return!1;n.innerHTML="<"+t+">a</"+t+">b",document.body.appendChild(n);var a=n.offsetHeight;n.open=!0;var r=a!=n.offsetHeight;return document.body.removeChild(n),r}function r(e,t){if(!document.getElementById(e)){var n=document.createElement("style");n.id=e,n.innerHTML=t,document.getElementsByTagName("head")[0].appendChild(n)}}a()||(document.documentElement.className+=" no-details",window.addEventListener("click",n),r("details-polyfill-style","html.no-details "+e+" { display: block; }\nhtml.no-details "+e+":not([open]) > :not("+t+") { display: none; }\nhtml.no-details "+e+" > "+t+':before { content: "▶"; display: inline-block; font-size: .8em; width: 1.5em; }\nhtml.no-details '+e+"[open] > "+t+':before { content: "▼"; }'))})?a.call(t,n,t,e):a)||(e.exports=r)},39003:function(e,t,n){"use strict";n.r(t),t.default={}}}]);