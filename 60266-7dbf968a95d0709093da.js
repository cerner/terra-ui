(self.webpackChunkterra_ui=self.webpackChunkterra_ui||[]).push([[60266],{59051:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(22678),r={key:"track 1",trackLabel:{display:"Project A",onClick:a.loadXAndYAxisLabelPopup},tasks:[{key:"task1",onClick:a.loadTaskPopup,label:{display:"Story Apex"},startDate:new Date(2018,1,2,9).toISOString(),endDate:new Date(2018,1,2,19).toISOString()}]};t.default=r},47337:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=[new Date(2018,1,2,6).toISOString(),new Date(2018,1,2,12).toISOString(),new Date(2018,1,2,18).toISOString()],a=[new Date(2018,1,2,3).toISOString(),new Date(2018,1,2,9).toISOString(),new Date(2018,1,2,15).toISOString(),new Date(2018,1,2,21).toISOString()],r=[new Date(2018,1,2,0).toISOString(),new Date(2018,1,2,24).toISOString()],o=function(e){return{bindTo:e,axis:{x:{show:!0,lowerLimit:new Date(2018,1,1,23).toISOString(),upperLimit:new Date(2018,1,3,1).toISOString(),rangeRounding:!0,ticks:{format:"%H",lowerStepTickValues:n,midpointTickValues:a,upperStepTickValues:r}}},dateline:[]}};t.default=o},22678:function(e,t,n){"use strict";var a=n(64836),r=n(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.loadY2AxisLabelPopup=t.loadXAndYAxisLabelPopup=t.loadTrackPopup=t.loadTimelinePopup=t.loadTextLabelPopup=t.loadTaskPopup=t.loadPopup=t.loadPiePopup=t.loadDatelinePopup=t.loadBubblePopup=t.loadBarPopup=void 0;var o=a(n(27424)),l=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var n=c(t);if(n&&n.has(e))return n.get(e);var a={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var i=o?Object.getOwnPropertyDescriptor(e,l):null;i&&(i.get||i.set)?Object.defineProperty(a,l,i):a[l]=e[l]}a.default=e,n&&n.set(e,a);return a}(n(66668)),i=a(n(88703)),p=a(n(53334));function c(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(c=function(e){return e?n:t})(e)}var s=function(e){return new Date(e).toLocaleString()},d=function(e){return e?u(e)?s(e):e:null},u=function(e){return e instanceof Date},m=function(e,t,n){var a=e.append("g").classed("popup-item",!0);a.append("label").classed("popup-label",!0).text(t),a.append("g").classed("popup-text",!0).text(n)},f=function(e,t,n){var a=e.append("g").classed("popup-item",!0);a.append("label").classed("popup-label",!0).text(t);for(var r=a.append("g").classed("section",!0),l=function(){var e=p[i],t=r.append("g").classed("content",!0);Object.entries(e).forEach((function(e){var n=(0,o.default)(e,2),a=n[0],r=n[1],l=t.append("g").classed("popup-item",!0);l.append("label").classed("popup-label",!0).text(a.replace(/([a-z0-9])([A-Z])/g,"$1 $2").replace(/(\b[a-z](?!\s))/g,(function(e){return e.toUpperCase()}))),l.append("g").classed("popup-text",!0).text(r)}))},i=0,p=Object.values(n);i<p.length;i++)l()},g=function(e){var t=document.querySelector("#tooltip");return l.select("body").append("div","#tooltip").attr("id","overlay").classed("overlay",!0).on("click",(function n(){l.select(t).attr("style","display:none;").selectAll("g").remove(),p.default.isFunction(e)&&e(),l.select("#overlay").remove(),t.removeEventListener("click",n),window.removeEventListener("resize",n)})),l.select("#tooltip").style("left","".concat(l.event.pageX+5,"px")).style("top","".concat(l.event.pageY+5,"px"))},y=function(){l.select("#overlay").remove(),document.getElementsByClassName("initial-tooltip")[0]&&(document.getElementsByClassName("initial-tooltip")[0].className="tooltip"),l.select("#tooltip").attr("style","").selectAll("g").remove()};t.loadPopup=function(e,t,n,a){y();var r=g(e).append("g"),o=a.x,l=a.y,i=a.label,p=a.high,c=a.mid,f=a.low;o?(m(r,"X axis","".concat(u(o)?s(o):o)),m(r,"".concat(i.display),l)):(m(r,"X axis","".concat(p?d(p.x):c?d(c.x):f?d(f.x):"N/A")),p&&m(r,"High",d(p.y)),c&&m(r,"Mid",d(c.y)),f&&m(r,"Low",d(f.y)))};t.loadBubblePopup=function(e,t,n,a){y();var r=g(e).append("g"),o=a.x,l=a.y,i=a.label,p=a.weight;o&&(m(r,"X axis","".concat(u(o)?s(o):o)),m(r,"year",l)),p&&m(r,"".concat(i.display),"".concat(p))};t.loadBarPopup=function(e,t,n,a){y();var r=g(e).append("g");a.forEach((function(e){return m(r,"".concat(e.label.display),"".concat(e.y))}))};t.loadTextLabelPopup=function(e,t,n){y();var a=g(e).append("g").classed("popup-item",!0).append("g").attr("style","display: inline-block;"),r=t.shape,o=t.label,l=t.color;p.default.notEmpty(r)&&a.append("svg").attr("width","15").attr("height","12").append("path").attr("transform","translate(".concat(0,", ",0,") scale(",r.options.scale,")")).attr("d",r.path.d).attr("fill",r.path.fill||i.default.DEFAULT_COLOR).attr("id",r.path.id),o.display&&a.append("text").classed("popup-text",!0).attr("style","color: ".concat(l,";")).text("".concat(o.display)),o.secondaryDisplay&&a.append("tspan").attr("style","color: ".concat(i.default.DEFAULT_COLOR,";")).text(" ".concat(o.secondaryDisplay))};t.loadXAndYAxisLabelPopup=function(e){y(),g().append("g").append("g").classed("popup-item",!0).append("g").classed("popup-text",!0).text(e)};t.loadY2AxisLabelPopup=function(e){var t,n;y(),(n=document.querySelector("#tooltip"),l.select("body").append("div","#tooltip").attr("id","overlay").classed("overlay",!0).on("click",(function e(){l.select(n).attr("style","display:none;").selectAll("g").remove(),p.default.isFunction(t)&&t(),l.select("#overlay").remove(),n.removeEventListener("click",e),window.removeEventListener("resize",e)})),l.select("#tooltip").style("left","".concat(l.event.pageX-250,"px")).style("top","".concat(l.event.pageY+5,"px"))).append("g").append("g").classed("popup-item",!0).append("g").classed("popup-text",!0).text(e)};t.loadTrackPopup=function(e,t,n){y();var a=g(e).append("g"),r=n.tasks,o=n.activities,l=n.events,i=n.actions;if(r&&r.length>0){var p=[];p.forEach((function(e){p.push({name:e.key,startDate:e.startDate,endDate:e.endDate})})),f(a,"Tasks",p)}if(o&&o.length>0){var c=[];o.forEach((function(e){c.push({name:e.key,startDate:e.startDate,endDate:e.endDate})})),f(a,"Activities",c)}if(l&&l.length>0){var s=[];l.forEach((function(e){s.push({name:e.key,values:e.values.join(", ")})})),f(a,"Events",s)}if(i&&i.length>0){var d=[];i.forEach((function(e){d.push({name:e.key,values:e.values.join(", ")})})),f(a,"Actions",d)}};t.loadTaskPopup=function(e,t,n,a){y();var r=g(e).append("g"),o=a.label,l=a.display,i=a.y,p=a.startDate,c=a.endDate,d=a.percentage;o&&m(r,"Task Name",l),m(r,"Track",i),m(r,"Start Date",s(p)),m(r,"End Date",s(c)),d&&m(r,"Percentage",d)};t.loadDatelinePopup=function(e,t){y();var n=g(e).append("g"),a=t.label,r=t.value;a&&m(n,"Milestone",a.display),m(n,"Date",s(r))};t.loadTimelinePopup=function(e,t,n,a){y();var r=g(e).append("g"),o=a.x,l=(a.y,a.label),i=a.content;m(r,"X axis","".concat(u(o)?s(o):o)),m(r,"".concat(l.display),i)};t.loadPiePopup=function(e,t,n,a){y();var r=g(e).append("g"),o=a.label,l=a.value;m(r,o.display,l)}},93065:function(e,t,n){"use strict";var a=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(67294)),o=a(n(45697));n(80244);var l={id:o.default.string.isRequired},i=function(e){return r.default.createElement(r.default.Fragment,null,r.default.createElement("div",{id:"tooltip",className:"initial-tooltip"}),r.default.createElement("div",{id:e.id,className:"example-graph-container"}))};i.propTypes=l;var p=i;t.default=p},9529:function(e,t,n){"use strict";var a=n(64836);t.Z=void 0;var r=a(n(67294)),o=a(n(54520)),l=a(n(53334));n(56867),n(77449);var i=a(n(93065)),p=a(n(47337)),c=a(n(59051)),s=l.default.deepClone((0,p.default)("#ganttDatetimeBucket")),d=[l.default.deepClone(c.default)],u=function(){return r.default.useEffect((function(){var e=o.default.api.gantt(s);d.forEach((function(t){e.loadContent(t)}))}),[]),r.default.createElement(i.default,{id:"ganttDatetimeBucket"})};t.Z=u},60266:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return I}});var a=n(67294),r=n(81254),o=n(9529),l=["components"];function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},i.apply(this,arguments)}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c={};function s(e){var t=e.components,n=p(e,l);return(0,r.mdx)("wrapper",i({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport utils from '@cerner/carbon-graphs/lib/js/helpers/utils';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Graph.module.scss';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Gantt/GanttChart.module.scss';\nimport ExampleGraphContainer from '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer';\nimport getGanttDatetimeBucketConfig from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Gantt/ganttDatetimeBucketConfig';\nimport dateTimeBucketData from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Gantt/dateTimeBucketData';\n\n/*\nPlease refer to the documentation below to see the graphConfig and data objects\n*/\n\nconst graphConfig = utils.deepClone(getGanttDatetimeBucketConfig('#ganttDatetimeBucket'));\nconst dataset = [utils.deepClone(dateTimeBucketData)];\n\nconst GanttDatetimeBucketExample = () => {\n  React.useEffect(() => {\n    const graph = Carbon.api.gantt(graphConfig);\n    dataset.forEach((data) => {\n      graph.loadContent(data);\n    });\n  }, []);\n\n  return (\n    <ExampleGraphContainer id=\"ganttDatetimeBucket\" />\n  );\n};\n\nexport default GanttDatetimeBucketExample;\n\n")))}s.isMDXComponent=!0;var d=n(49271),u=n(25005),m=function(e){var t=e.title,n=e.description,r=e.isExpanded;return a.createElement(d.Z,{title:t||"Datetime Bucket",description:n,example:a.createElement(o.Z,null),exampleCssSrc:a.createElement(u.Z,null),exampleSrc:a.createElement(s,null),isExpanded:r})},f=["components"];function g(){return g=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},g.apply(this,arguments)}function y(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var v={},b="wrapper";function h(e){var t=e.components,n=y(e,f);return(0,r.mdx)(b,g({},v,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-js"},"const lowerStepTickValues = [\n  new Date(2018, 1, 2, 6).toISOString(),\n  new Date(2018, 1, 2, 12).toISOString(),\n  new Date(2018, 1, 2, 18).toISOString(),\n];\nconst midpointTickValues = [\n  new Date(2018, 1, 2, 3).toISOString(),\n  new Date(2018, 1, 2, 9).toISOString(),\n  new Date(2018, 1, 2, 15).toISOString(),\n  new Date(2018, 1, 2, 21).toISOString(),\n];\nconst upperStepTickValues = [\n  new Date(2018, 1, 2, 0).toISOString(),\n  new Date(2018, 1, 2, 24).toISOString(),\n];\n\nconst getGanttDatetimeBucketConfig = (id) => ({\n  bindTo: id,\n  axis: {\n    x: {\n      show: true,\n      lowerLimit: new Date(2018, 1, 1, 23).toISOString(),\n      upperLimit: new Date(2018, 1, 3, 1).toISOString(),\n      rangeRounding: true, // If set to false, we don't extend the domain\n      ticks: {\n        format: '%H',\n        lowerStepTickValues,\n        midpointTickValues,\n        upperStepTickValues,\n      },\n    },\n  },\n  dateline: [],\n});\n\nexport default getGanttDatetimeBucketConfig;\n\n\n")))}h.isMDXComponent=!0;var x=["components"];function O(){return O=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},O.apply(this,arguments)}function D(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var k={},S="wrapper";function w(e){var t=e.components,n=D(e,x);return(0,r.mdx)(S,O({},k,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-js"},"import { loadXAndYAxisLabelPopup, loadTaskPopup } from '@cerner/terra-graphs-docs/lib/example-datasets/popup';\n\nconst dateTimeBucketData = {\n  key: 'track 1',\n  trackLabel: {\n    display: 'Project A',\n    onClick: loadXAndYAxisLabelPopup,\n  },\n  tasks: [\n    {\n      key: 'task1',\n      onClick: loadTaskPopup,\n      label: {\n        display: 'Story Apex',\n      },\n      startDate: new Date(2018, 1, 2, 9).toISOString(),\n      endDate: new Date(2018, 1, 2, 19).toISOString(),\n    },\n  ],\n};\n\nexport default dateTimeBucketData;\n\n")))}w.isMDXComponent=!0;var j=["components"];function P(){return P=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},P.apply(this,arguments)}function E(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}n(51320);var C={},T="wrapper";function I(e){var t=e.components,n=E(e,j);return(0,r.mdx)(T,P({},C,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"simple-gantt"},"Simple Gantt"),(0,r.mdx)("p",null,"This is a simple Gantt chart with datetime formatted bucket."),(0,r.mdx)("h2",{id:"getting-started"},"Getting Started"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Install with ",(0,r.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"npm i @cerner/carbon-graphs --save-dev"))))),(0,r.mdx)("h2",{id:"usage"},"Usage"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/dist/js/carbon-graphs.js';\nimport '@cerner/carbon-graphs/dist/css/carbon-graphs.css';\n")),(0,r.mdx)("h2",{id:"examples"},"Examples"),(0,r.mdx)(m,{mdxType:"GanttChart"}),(0,r.mdx)("details",null,(0,r.mdx)("summary",{style:{fontSize:24}},(0,r.mdx)("b",null,"Data")),(0,r.mdx)("h3",{id:"graph-config-object"},"Graph Config object"),(0,r.mdx)(h,{mdxType:"GraphConfig"}),(0,r.mdx)("h3",{id:"data-object"},"Data object"),(0,r.mdx)(w,{mdxType:"DataObject"})))}I.isMDXComponent=!0},51320:function(e,t,n){var a,r;void 0===(r="function"==typeof(a=function(){var e="details",t="summary";function n(e){if("summary"===e.target.nodeName.toLowerCase()){var t=e.target.parentNode;if(!t)return;t.getAttribute("open")?(t.open=!1,t.removeAttribute("open")):(t.open=!0,t.setAttribute("open","open"))}}function a(){var n=document.createElement(e);if(!("open"in n))return!1;n.innerHTML="<"+t+">a</"+t+">b",document.body.appendChild(n);var a=n.offsetHeight;n.open=!0;var r=a!=n.offsetHeight;return document.body.removeChild(n),r}function r(e,t){if(!document.getElementById(e)){var n=document.createElement("style");n.id=e,n.innerHTML=t,document.getElementsByTagName("head")[0].appendChild(n)}}a()||(document.documentElement.className+=" no-details",window.addEventListener("click",n),r("details-polyfill-style","html.no-details "+e+" { display: block; }\nhtml.no-details "+e+":not([open]) > :not("+t+") { display: none; }\nhtml.no-details "+e+" > "+t+':before { content: "▶"; display: inline-block; font-size: .8em; width: 1.5em; }\nhtml.no-details '+e+"[open] > "+t+':before { content: "▼"; }'))})?a.call(t,n,t,e):a)||(e.exports=r)},77449:function(e,t,n){"use strict";n.r(t),t.default={}}}]);