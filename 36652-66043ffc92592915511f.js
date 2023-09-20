(self.webpackChunkterra_ui=self.webpackChunkterra_ui||[]).push([[36652,19260],{6888:function(e,t,n){"use strict";var a=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(22678),o=a(n(54520)),l={key:"bubble_basic_data",label:{display:"Bubble set A"},onClick:r.loadBubblePopup,color:o.default.helpers.COLORS.PINK,values:[{x:new Date(2016,0,1,12,0).toISOString(),y:70},{x:new Date(2016,0,1,15,45).toISOString(),y:120},{x:new Date(2016,0,1,10,30).toISOString(),y:160},{x:new Date(2016,0,1,18,0).toISOString(),y:180}],yAxis:"y",showShapes:!1};t.default=l},85546:function(e,t,n){"use strict";var a=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(54520)),o=function(e){return{bindTo:e,axis:{x:{type:r.default.helpers.AXIS_TYPE.TIME_SERIES,label:"Datetime",lowerLimit:new Date(2016,0,1,1,0).toISOString(),upperLimit:new Date(2016,0,1,23,59).toISOString()},y:{label:"Bubble",lowerLimit:10,upperLimit:250}}}};t.default=o},22678:function(e,t,n){"use strict";var a=n(64836),r=n(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.loadY2AxisLabelPopup=t.loadXAndYAxisLabelPopup=t.loadTrackPopup=t.loadTimelinePopup=t.loadTextLabelPopup=t.loadTaskPopup=t.loadPopup=t.loadPiePopup=t.loadDatelinePopup=t.loadBubblePopup=t.loadBarPopup=void 0;var o=a(n(27424)),l=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var n=s(t);if(n&&n.has(e))return n.get(e);var a={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var p=o?Object.getOwnPropertyDescriptor(e,l):null;p&&(p.get||p.set)?Object.defineProperty(a,l,p):a[l]=e[l]}a.default=e,n&&n.set(e,a);return a}(n(79590)),p=a(n(88703)),i=a(n(53334));function s(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(s=function(e){return e?n:t})(e)}var c=function(e){return new Date(e).toLocaleString()},u=function(e){return e?d(e)?c(e):e:null},d=function(e){return e instanceof Date},m=function(e,t,n){var a=e.append("g").classed("popup-item",!0);a.append("label").classed("popup-label",!0).text(t),a.append("g").classed("popup-text",!0).text(n)},f=function(e,t,n){var a=e.append("g").classed("popup-item",!0);a.append("label").classed("popup-label",!0).text(t);for(var r=a.append("g").classed("section",!0),l=function(){var e=i[p],t=r.append("g").classed("content",!0);Object.entries(e).forEach((function(e){var n=(0,o.default)(e,2),a=n[0],r=n[1],l=t.append("g").classed("popup-item",!0);l.append("label").classed("popup-label",!0).text(a.replace(/([a-z0-9])([A-Z])/g,"$1 $2").replace(/(\b[a-z](?!\s))/g,(function(e){return e.toUpperCase()}))),l.append("g").classed("popup-text",!0).text(r)}))},p=0,i=Object.values(n);p<i.length;p++)l()},b=function(e){var t=document.querySelector("#tooltip");return l.select("body").append("div","#tooltip").attr("id","overlay").classed("overlay",!0).on("click",(function n(){l.select(t).attr("style","display:none;").selectAll("g").remove(),i.default.isFunction(e)&&e(),l.select("#overlay").remove(),t.removeEventListener("click",n),window.removeEventListener("resize",n)})),l.select("#tooltip").style("left","".concat(l.event.pageX+5,"px")).style("top","".concat(l.event.pageY+5,"px"))},g=function(){l.select("#overlay").remove(),document.getElementsByClassName("initial-tooltip")[0]&&(document.getElementsByClassName("initial-tooltip")[0].className="tooltip"),l.select("#tooltip").attr("style","").selectAll("g").remove()};t.loadPopup=function(e,t,n,a){g();var r=b(e).append("g"),o=a.x,l=a.y,p=a.label,i=a.high,s=a.mid,f=a.low;o?(m(r,"X axis","".concat(d(o)?c(o):o)),m(r,"".concat(p.display),l)):(m(r,"X axis","".concat(i?u(i.x):s?u(s.x):f?u(f.x):"N/A")),i&&m(r,"High",u(i.y)),s&&m(r,"Mid",u(s.y)),f&&m(r,"Low",u(f.y)))};t.loadBubblePopup=function(e,t,n,a){g();var r=b(e).append("g"),o=a.x,l=a.y,p=a.label,i=a.weight;o&&(m(r,"X axis","".concat(d(o)?c(o):o)),m(r,"year",l)),i&&m(r,"".concat(p.display),"".concat(i))};t.loadBarPopup=function(e,t,n,a){g();var r=b(e).append("g");a.forEach((function(e){return m(r,"".concat(e.label.display),"".concat(e.y))}))};t.loadTextLabelPopup=function(e,t,n){g();var a=b(e).append("g").classed("popup-item",!0).append("g").attr("style","display: inline-block;"),r=t.shape,o=t.label,l=t.color;i.default.notEmpty(r)&&a.append("svg").attr("width","15").attr("height","12").append("path").attr("transform","translate(".concat(0,", ",0,") scale(",r.options.scale,")")).attr("d",r.path.d).attr("fill",r.path.fill||p.default.DEFAULT_COLOR).attr("id",r.path.id),o.display&&a.append("text").classed("popup-text",!0).attr("style","color: ".concat(l,";")).text("".concat(o.display)),o.secondaryDisplay&&a.append("tspan").attr("style","color: ".concat(p.default.DEFAULT_COLOR,";")).text(" ".concat(o.secondaryDisplay))};t.loadXAndYAxisLabelPopup=function(e){g(),b().append("g").append("g").classed("popup-item",!0).append("g").classed("popup-text",!0).text(e)};t.loadY2AxisLabelPopup=function(e){var t,n;g(),(n=document.querySelector("#tooltip"),l.select("body").append("div","#tooltip").attr("id","overlay").classed("overlay",!0).on("click",(function e(){l.select(n).attr("style","display:none;").selectAll("g").remove(),i.default.isFunction(t)&&t(),l.select("#overlay").remove(),n.removeEventListener("click",e),window.removeEventListener("resize",e)})),l.select("#tooltip").style("left","".concat(l.event.pageX-250,"px")).style("top","".concat(l.event.pageY+5,"px"))).append("g").append("g").classed("popup-item",!0).append("g").classed("popup-text",!0).text(e)};t.loadTrackPopup=function(e,t,n){g();var a=b(e).append("g"),r=n.tasks,o=n.activities,l=n.events,p=n.actions;if(r&&r.length>0){var i=[];i.forEach((function(e){i.push({name:e.key,startDate:e.startDate,endDate:e.endDate})})),f(a,"Tasks",i)}if(o&&o.length>0){var s=[];o.forEach((function(e){s.push({name:e.key,startDate:e.startDate,endDate:e.endDate})})),f(a,"Activities",s)}if(l&&l.length>0){var c=[];l.forEach((function(e){c.push({name:e.key,values:e.values.join(", ")})})),f(a,"Events",c)}if(p&&p.length>0){var u=[];p.forEach((function(e){u.push({name:e.key,values:e.values.join(", ")})})),f(a,"Actions",u)}};t.loadTaskPopup=function(e,t,n,a){g();var r=b(e).append("g"),o=a.label,l=a.display,p=a.y,i=a.startDate,s=a.endDate,u=a.percentage;o&&m(r,"Task Name",l),m(r,"Track",p),m(r,"Start Date",c(i)),m(r,"End Date",c(s)),u&&m(r,"Percentage",u)};t.loadDatelinePopup=function(e,t){g();var n=b(e).append("g"),a=t.label,r=t.value;a&&m(n,"Milestone",a.display),m(n,"Date",c(r))};t.loadTimelinePopup=function(e,t,n,a){g();var r=b(e).append("g"),o=a.x,l=(a.y,a.label),p=a.content;m(r,"X axis","".concat(d(o)?c(o):o)),m(r,"".concat(l.display),p)};t.loadPiePopup=function(e,t,n,a){g();var r=b(e).append("g"),o=a.label,l=a.value;m(r,o.display,l)}},93065:function(e,t,n){"use strict";var a=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(67294)),o=a(n(45697));n(80244);var l={id:o.default.string.isRequired},p=function(e){return r.default.createElement(r.default.Fragment,null,r.default.createElement("div",{id:"tooltip",className:"initial-tooltip"}),r.default.createElement("div",{id:e.id,className:"example-graph-container"}))};p.propTypes=l;var i=p;t.default=i},644:function(e,t,n){"use strict";var a=n(64836);t.Z=void 0;var r=a(n(67294)),o=a(n(54520)),l=a(n(53334));n(56867);var p=a(n(93065)),i=a(n(85546)),s=a(n(6888)),c=l.default.deepClone((0,i.default)("#customWeightGraph")),u=l.default.deepClone(s.default);t.Z=function(){return r.default.useEffect((function(){o.default.api.graph(c).loadContent(o.default.api.bubbleSingleDataset(u))}),[]),r.default.createElement(p.default,{id:"customWeightGraph"})}},28610:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return O}});var a=n(67294),r=n(81254),o=n(644),l=["components"];function p(){return p=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},p.apply(this,arguments)}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s={};function c(e){var t=e.components,n=i(e,l);return(0,r.mdx)("wrapper",p({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport utils from '@cerner/carbon-graphs/lib/js/helpers/utils';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Graph.module.scss';\nimport ExampleGraphContainer from '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer';\nimport getSimpleAxisData from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Bubble/simpleAxisData';\nimport bubbleDataBasic from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Bubble/bubbleDataBasic.js';\n\n/*\nPlease refer to the documentation below to see graphConfig and data objects.\n*/\n\nconst graphConfig = utils.deepClone(getSimpleAxisData('#customWeightGraph'));\nconst dataset = utils.deepClone(bubbleDataBasic);\n\nexport default () => {\n  React.useEffect(() => {\n    const graph = Carbon.api.graph(graphConfig);\n    graph.loadContent(Carbon.api.bubbleSingleDataset(dataset));\n  }, []);\n\n  return (\n    <ExampleGraphContainer id=\"customWeightGraph\" />\n  );\n};\n\n")))}c.isMDXComponent=!0;var u=n(49271),d=n(25005),m=function(e){var t=e.title,n=e.description,r=e.isExpanded;return a.createElement(u.Z,{title:t||"Custom Weight Graph",description:n,example:a.createElement(o.Z,null),exampleCssSrc:a.createElement(d.Z,null),exampleSrc:a.createElement(c,null),isExpanded:r})},f=n(32597),b=n(87020),g=["components"];function y(){return y=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},y.apply(this,arguments)}function v(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}n(51320);var h={},x="wrapper";function O(e){var t=e.components,n=v(e,g);return(0,r.mdx)(x,y({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"custom-bubble-weight"},"Custom Bubble Weight"),(0,r.mdx)("p",null,"A bubble graph with custom bubble weights."),(0,r.mdx)("h2",{id:"getting-started"},"Getting Started"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Install with ",(0,r.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"npm i @cerner/carbon-graphs --save-dev"))))),(0,r.mdx)("h2",{id:"usage"},"Usage"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},"import Carbon from '@cerner/carbon-graphs/dist/js/carbon-graphs.js';\nimport '@cerner/carbon-graphs/dist/css/carbon-graphs.css';\n")),(0,r.mdx)("h2",{id:"example"},"Example"),(0,r.mdx)(m,{mdxType:"CustomWeightGraphExample"}),(0,r.mdx)("details",null,(0,r.mdx)("summary",{style:{fontSize:24}},(0,r.mdx)("b",null,"Data")),(0,r.mdx)("h3",{id:"graph-config-object"},"Graph Config object"),(0,r.mdx)(f.Z,{mdxType:"GraphConfig"}),(0,r.mdx)("h3",{id:"data-object"},"Data object"),(0,r.mdx)(b.Z,{mdxType:"DataObject"})))}O.isMDXComponent=!0},87020:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});n(67294);var a=n(81254),r=["components"];function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o.apply(this,arguments)}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p={},i="wrapper";function s(e){var t=e.components,n=l(e,r);return(0,a.mdx)(i,o({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-js"},"import { loadBubblePopup } from '@cerner/terra-graphs-docs/lib/example-datasets/popup.js';\nimport Carbon from '@cerner/carbon-graphs/lib/js/carbon';\n\nconst bubbleDataCustomRadius = {\n  key: 'bubble_custom_radius_dataset',\n  label: {\n    display: 'Bubble set B',\n  },\n  color: Carbon.helpers.COLORS.LIGHT_BLUE,\n  onClick: loadBubblePopup,\n  weight: {\n    fixedRadius: 12,\n  },\n  values: [\n    {\n      x: new Date(2016, 0, 1, 6, 0).toISOString(),\n      y: 100,\n    },\n    {\n      x: new Date(2016, 0, 1, 10, 0).toISOString(),\n      y: 120,\n    },\n    {\n      x: new Date(2016, 0, 1, 12, 0).toISOString(),\n      y: 180,\n    },\n    {\n      x: new Date(2016, 0, 1, 18, 0).toISOString(),\n      y: 220,\n    },\n  ],\n  yAxis: 'y',\n};\n\nexport default bubbleDataCustomRadius;\n\n")))}s.isMDXComponent=!0},32597:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});n(67294);var a=n(81254),r=["components"];function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o.apply(this,arguments)}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p={},i="wrapper";function s(e){var t=e.components,n=l(e,r);return(0,a.mdx)(i,o({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/lib/js/carbon';\n\nconst getSimpleAxisData = (id) => ({\n  bindTo: id,\n  axis: {\n    x: {\n      type: Carbon.helpers.AXIS_TYPE.TIME_SERIES,\n      label: 'Datetime',\n      lowerLimit: new Date(2016, 0, 1, 1, 0).toISOString(),\n      upperLimit: new Date(2016, 0, 1, 23, 59).toISOString(),\n    },\n    y: {\n      label: 'Bubble',\n      lowerLimit: 10,\n      upperLimit: 250,\n    },\n  },\n});\n\nexport default getSimpleAxisData;\n\n")))}s.isMDXComponent=!0},51320:function(e,t,n){var a,r;void 0===(r="function"==typeof(a=function(){var e="details",t="summary";function n(e){if("summary"===e.target.nodeName.toLowerCase()){var t=e.target.parentNode;if(!t)return;t.getAttribute("open")?(t.open=!1,t.removeAttribute("open")):(t.open=!0,t.setAttribute("open","open"))}}function a(){var n=document.createElement(e);if(!("open"in n))return!1;n.innerHTML="<"+t+">a</"+t+">b",document.body.appendChild(n);var a=n.offsetHeight;n.open=!0;var r=a!=n.offsetHeight;return document.body.removeChild(n),r}function r(e,t){if(!document.getElementById(e)){var n=document.createElement("style");n.id=e,n.innerHTML=t,document.getElementsByTagName("head")[0].appendChild(n)}}a()||(document.documentElement.className+=" no-details",window.addEventListener("click",n),r("details-polyfill-style","html.no-details "+e+" { display: block; }\nhtml.no-details "+e+":not([open]) > :not("+t+") { display: none; }\nhtml.no-details "+e+" > "+t+':before { content: "▶"; display: inline-block; font-size: .8em; width: 1.5em; }\nhtml.no-details '+e+"[open] > "+t+':before { content: "▼"; }'))})?a.call(t,n,t,e):a)||(e.exports=r)}}]);