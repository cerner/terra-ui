(self.webpackChunkterra_ui=self.webpackChunkterra_ui||[]).push([[97964],{17152:function(e,t,n){"use strict";var a=n(22411);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(30660),o=a(n(27320)),l={key:"bubble_dynamic_panning_data",label:{display:"Bubble set A"},onClick:r.loadBubblePopup,color:o.default.helpers.COLORS.PINK,values:[{x:new Date(2016,0,1,12,0).toISOString(),y:70},{x:new Date(2016,0,1,15,45).toISOString(),y:120},{x:new Date(2016,0,1,10,30).toISOString(),y:160},{x:new Date(2016,0,1,18,0).toISOString(),y:180}],yAxis:"y",showShapes:!1};t.default=l},30628:function(e,t,n){"use strict";var a=n(22411);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(30660),o=a(n(27320)),l={key:"bubble_dynamic_panning_data",label:{display:"Bubble set A"},onClick:r.loadBubblePopup,color:o.default.helpers.COLORS.PINK,values:[{x:new Date(2016,0,1,12,0).toISOString(),y:20},{x:new Date(2016,0,1,15,45).toISOString(),y:40},{x:new Date(2016,0,1,10,30).toISOString(),y:50},{x:new Date(2016,0,1,18,0).toISOString(),y:60}],yAxis:"y",showShapes:!1};t.default=l},55376:function(e,t,n){"use strict";var a=n(22411);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(27320));t.default=function(e){return{bindTo:e,axis:{x:{type:r.default.helpers.AXIS_TYPE.TIME_SERIES,label:"Datetime",lowerLimit:new Date(2016,0,1,1,0).toISOString(),upperLimit:new Date(2016,0,1,23,59).toISOString()},y:{label:"Bubble",lowerLimit:10,upperLimit:250}},pan:{enabled:!0}}}},30660:function(e,t,n){"use strict";var a=n(22411),r=n(59848);Object.defineProperty(t,"__esModule",{value:!0}),t.loadY2AxisLabelPopup=t.loadXAndYAxisLabelPopup=t.loadTrackPopup=t.loadTimelinePopup=t.loadTextLabelPopup=t.loadTaskPopup=t.loadPopup=t.loadPiePopup=t.loadDatelinePopup=t.loadBubblePopup=t.loadBarPopup=void 0;var o=a(n(97936)),l=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=r(e)&&"function"!=typeof e)return{default:e};var n=c(t);if(n&&n.has(e))return n.get(e);var a={__proto__:null},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var i=o?Object.getOwnPropertyDescriptor(e,l):null;i&&(i.get||i.set)?Object.defineProperty(a,l,i):a[l]=e[l]}return a.default=e,n&&n.set(e,a),a}(n(32728)),i=a(n(21012)),p=a(n(82452));function c(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(c=function(e){return e?n:t})(e)}var s=function(e){return new Date(e).toLocaleString()},u=function(e){return e?d(e)?s(e):e:null},d=function(e){return e instanceof Date},f=function(e,t,n){var a=e.append("g").classed("popup-item",!0);a.append("label").classed("popup-label",!0).text(t),a.append("g").classed("popup-text",!0).text(n)},m=function(e,t,n){var a=e.append("g").classed("popup-item",!0);a.append("label").classed("popup-label",!0).text(t);for(var r=a.append("g").classed("section",!0),l=function(){var e=p[i],t=r.append("g").classed("content",!0);Object.entries(e).forEach((function(e){var n=(0,o.default)(e,2),a=n[0],r=n[1],l=t.append("g").classed("popup-item",!0);l.append("label").classed("popup-label",!0).text(a.replace(/([a-z0-9])([A-Z])/g,"$1 $2").replace(/(\b[a-z](?!\s))/g,(function(e){return e.toUpperCase()}))),l.append("g").classed("popup-text",!0).text(r)}))},i=0,p=Object.values(n);i<p.length;i++)l()},b=function(e){var t=document.querySelector("#tooltip");return l.select("body").append("div","#tooltip").attr("id","overlay").classed("overlay",!0).on("click",(function n(){l.select(t).attr("style","display:none;").selectAll("g").remove(),p.default.isFunction(e)&&e(),l.select("#overlay").remove(),t.removeEventListener("click",n),window.removeEventListener("resize",n)})),l.select("#tooltip").style("left","".concat(l.event.pageX+5,"px")).style("top","".concat(l.event.pageY+5,"px"))},g=function(){l.select("#overlay").remove(),document.getElementsByClassName("initial-tooltip")[0]&&(document.getElementsByClassName("initial-tooltip")[0].className="tooltip"),l.select("#tooltip").attr("style","").selectAll("g").remove()};t.loadPopup=function(e,t,n,a){g();var r=b(e).append("g"),o=a.x,l=a.y,i=a.label,p=a.high,c=a.mid,m=a.low;o?(f(r,"X axis","".concat(d(o)?s(o):o)),f(r,"".concat(i.display),l)):(f(r,"X axis","".concat(p?u(p.x):c?u(c.x):m?u(m.x):"N/A")),p&&f(r,"High",u(p.y)),c&&f(r,"Mid",u(c.y)),m&&f(r,"Low",u(m.y)))},t.loadBubblePopup=function(e,t,n,a){g();var r=b(e).append("g"),o=a.x,l=a.y,i=a.label,p=a.weight;o&&(f(r,"X axis","".concat(d(o)?s(o):o)),f(r,"year",l)),p&&f(r,"".concat(i.display),"".concat(p))},t.loadBarPopup=function(e,t,n,a){g();var r=b(e).append("g");a.forEach((function(e){return f(r,"".concat(e.label.display),"".concat(e.y))}))},t.loadTextLabelPopup=function(e,t,n){g();var a=b(e).append("g").classed("popup-item",!0).append("g").attr("style","display: inline-block;"),r=t.shape,o=t.label,l=t.color;p.default.notEmpty(r)&&a.append("svg").attr("width","15").attr("height","12").append("path").attr("transform","translate(".concat(0,", ",0,") scale(",r.options.scale,")")).attr("d",r.path.d).attr("fill",r.path.fill||i.default.DEFAULT_COLOR).attr("id",r.path.id),o.display&&a.append("text").classed("popup-text",!0).attr("style","color: ".concat(l,";")).text("".concat(o.display)),o.secondaryDisplay&&a.append("tspan").attr("style","color: ".concat(i.default.DEFAULT_COLOR,";")).text(" ".concat(o.secondaryDisplay))},t.loadXAndYAxisLabelPopup=function(e){g(),b().append("g").append("g").classed("popup-item",!0).append("g").classed("popup-text",!0).text(e)},t.loadY2AxisLabelPopup=function(e){var t,n;g(),(n=document.querySelector("#tooltip"),l.select("body").append("div","#tooltip").attr("id","overlay").classed("overlay",!0).on("click",(function e(){l.select(n).attr("style","display:none;").selectAll("g").remove(),p.default.isFunction(t)&&t(),l.select("#overlay").remove(),n.removeEventListener("click",e),window.removeEventListener("resize",e)})),l.select("#tooltip").style("left","".concat(l.event.pageX-250,"px")).style("top","".concat(l.event.pageY+5,"px"))).append("g").append("g").classed("popup-item",!0).append("g").classed("popup-text",!0).text(e)},t.loadTrackPopup=function(e,t,n){g();var a=b(e).append("g"),r=n.tasks,o=n.activities,l=n.events,i=n.actions;if(r&&r.length>0){var p=[];p.forEach((function(e){p.push({name:e.key,startDate:e.startDate,endDate:e.endDate})})),m(a,"Tasks",p)}if(o&&o.length>0){var c=[];o.forEach((function(e){c.push({name:e.key,startDate:e.startDate,endDate:e.endDate})})),m(a,"Activities",c)}if(l&&l.length>0){var s=[];l.forEach((function(e){s.push({name:e.key,values:e.values.join(", ")})})),m(a,"Events",s)}if(i&&i.length>0){var u=[];i.forEach((function(e){u.push({name:e.key,values:e.values.join(", ")})})),m(a,"Actions",u)}},t.loadTaskPopup=function(e,t,n,a){g();var r=b(e).append("g"),o=a.label,l=a.display,i=a.y,p=a.startDate,c=a.endDate,u=a.percentage;o&&f(r,"Task Name",l),f(r,"Track",i),f(r,"Start Date",s(p)),f(r,"End Date",s(c)),u&&f(r,"Percentage",u)},t.loadDatelinePopup=function(e,t){g();var n=b(e).append("g"),a=t.label,r=t.value;a&&f(n,"Milestone",a.display),f(n,"Date",s(r))},t.loadTimelinePopup=function(e,t,n,a){g();var r=b(e).append("g"),o=a.x,l=(a.y,a.label),i=a.content;f(r,"X axis","".concat(d(o)?s(o):o)),f(r,"".concat(l.display),i)},t.loadPiePopup=function(e,t,n,a){g();var r=b(e).append("g"),o=a.label,l=a.value;f(r,o.display,l)}},2884:function(e,t,n){"use strict";var a=n(22411);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(11504)),o=a(n(3268));n(88140);var l={id:o.default.string.isRequired},i=function(e){return r.default.createElement(r.default.Fragment,null,r.default.createElement("div",{id:"tooltip",className:"initial-tooltip"}),r.default.createElement("div",{id:e.id,className:"example-graph-container"}))};i.propTypes=l;t.default=i},46723:function(e,t,n){"use strict";var a=n(22411);t.c=void 0;var r=a(n(97936)),o=a(n(11504)),l=a(n(58848)),i=a(n(27320)),p=a(n(82452));n(20512);var c,s=a(n(2884)),u=a(n(55376)),d=a(n(17152)),f=a(n(30628)),m={initial:0,factor:3},b=p.default.deepClone(d.default),g=p.default.deepClone((0,u.default)("#BubbleDynamicDataPanning"));t.c=function(){o.default.useEffect((function(){(c=i.default.api.graph(g)).loadContent(i.default.api.bubbleSingleDataset(b))}),[]);var e=o.default.useReducer((function(e,t){var n;switch(t.type){case"panLeft":n=e.initial-e.factor;break;case"panRight":n=e.initial+e.factor;break;default:return e}return{initial:n,factor:e.factor}}),m),t=(0,r.default)(e,2),n=t[0],a=t[1];return o.default.useLayoutEffect((function(){if(c){var e={panData:[f.default]};c.config.axis.x.lowerLimit=new Date(2016,0,1,n.initial).toISOString(),c.config.axis.x.upperLimit=new Date(2016,0,2,n.initial).toISOString(),c.reflowMultipleDatasets(e)}}),[n.initial]),o.default.createElement(o.default.Fragment,null,o.default.createElement(l.default,{className:"button-pan-left",text:"<",onClick:function(){return a({type:"panLeft"})}}),o.default.createElement(l.default,{className:"button-pan-right",text:">",onClick:function(){return a({type:"panRight"})}}),o.default.createElement(s.default,{id:"BubbleDynamicDataPanning"}))}},1300:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return j}});var a=n(11504),r=n(69788),o=n(46723),l=["components"];function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},i.apply(this,arguments)}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c={};function s(e){var t=e.components,n=p(e,l);return(0,r.mdx)("wrapper",i({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Button from 'terra-button/lib/Button';\nimport Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport utils from '@cerner/carbon-graphs/lib/js/helpers/utils';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Graph.module.scss';\nimport ExampleGraphContainer from '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer';\nimport getSimpleAxisData from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Bubble/simplePanningAxisData';\nimport bubbleDynamicPanningData1 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Bubble/bubbleDynamicPanningData1.js';\nimport bubbleDynamicPanningData2 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Bubble/bubbleDynamicPanningData2.js';\n\n/*\nPlease refer to the documentation below to see the graphConfig and data objects\n*/\n\nconst state = {\n  initial: 0,\n  factor: 3,\n};\n\nconst dataset = utils.deepClone(bubbleDynamicPanningData1);\nconst graphConfig = utils.deepClone(getSimpleAxisData('#BubbleDynamicDataPanning'));\nlet graph;\n\nconst BubblePanningExample = () => {\n  React.useEffect(() => {\n    graph = Carbon.api.graph(graphConfig);\n    graph.loadContent(Carbon.api.bubbleSingleDataset(dataset));\n  }, []);\n\n  const reducer = (panState, action) => {\n    let hour;\n\n    switch (action.type) {\n      case 'panLeft':\n        hour = panState.initial - panState.factor;\n        break;\n      case 'panRight':\n        hour = panState.initial + panState.factor;\n        break;\n      default:\n        return panState;\n    }\n\n    return {\n      initial: hour,\n      factor: panState.factor,\n    };\n  };\n\n  const [panState, dispatch] = React.useReducer(reducer, state);\n\n  React.useLayoutEffect(() => {\n    if (!graph) { return; }\n    const newDataset = { panData: [bubbleDynamicPanningData2] };\n\n    graph.config.axis.x.lowerLimit = new Date(2016, 0, 1, panState.initial).toISOString();\n    graph.config.axis.x.upperLimit = new Date(2016, 0, 2, panState.initial).toISOString();\n\n    graph.reflowMultipleDatasets(newDataset);\n  }, [panState.initial]);\n\n  return (\n    <>\n      <Button className=\"button-pan-left\" text=\"<\" onClick={() => dispatch({ type: 'panLeft' })} />\n      <Button className=\"button-pan-right\" text=\">\" onClick={() => dispatch({ type: 'panRight' })} />\n      <ExampleGraphContainer id=\"BubbleDynamicDataPanning\" />\n    </>\n  );\n};\n\nexport default BubblePanningExample;\n\n")))}s.isMDXComponent=!0;var u=n(33792),d=n(1208),f=function(e){var t=e.title,n=e.description,r=e.isExpanded;return a.createElement(u.c,{title:t||"Dynamic Data",description:n,example:a.createElement(o.c,null),exampleCssSrc:a.createElement(d.c,null),exampleSrc:a.createElement(s,null),isExpanded:r})},m=n(40340),b=["components"];function g(){return g=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},g.apply(this,arguments)}function y(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var v={},h="wrapper";function x(e){var t=e.components,n=y(e,b);return(0,r.mdx)(h,g({},v,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-js"},"import { loadBubblePopup } from '@cerner/terra-graphs-docs/lib/example-datasets/popup.js';\nimport Carbon from '@cerner/carbon-graphs/lib/js/carbon';\n\nconst bubbleDynamicPanningData = {\n  key: 'bubble_dynamic_panning_data',\n  label: {\n    display: 'Bubble set A',\n  },\n  onClick: loadBubblePopup,\n  color: Carbon.helpers.COLORS.PINK,\n  values: [\n    {\n      x: new Date(2016, 0, 1, 12, 0).toISOString(),\n      y: 70,\n    },\n    {\n      x: new Date(2016, 0, 1, 15, 45).toISOString(),\n      y: 120,\n    },\n    {\n      x: new Date(2016, 0, 1, 10, 30).toISOString(),\n      y: 160,\n    },\n    {\n      x: new Date(2016, 0, 1, 18, 0).toISOString(),\n      y: 180,\n    },\n  ],\n  yAxis: 'y',\n  showShapes: false,\n};\n\nexport default bubbleDynamicPanningData;\n\n")))}x.isMDXComponent=!0;var D=["components"];function O(){return O=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},O.apply(this,arguments)}function S(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}n(78704);var w={},P="wrapper";function j(e){var t=e.components,n=S(e,D);return(0,r.mdx)(P,O({},w,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"bubble-graph-panning---dynamic-data"},"Bubble Graph Panning - Dynamic data"),(0,r.mdx)("p",null,"This is a Bubble graph example that implements panning with dynamic data."),(0,r.mdx)("h2",{id:"getting-started"},"Getting Started"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Install with ",(0,r.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"npm i @cerner/carbon-graphs --save-dev"))))),(0,r.mdx)("h2",{id:"usage"},"Usage"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},"import Carbon from '@cerner/carbon-graphs/dist/js/carbon-graphs.js';\nimport '@cerner/carbon-graphs/dist/css/carbon-graphs.css';\n")),(0,r.mdx)("h2",{id:"example"},"Example"),(0,r.mdx)(f,{mdxType:"BubbleSingleDatasetExample"}),(0,r.mdx)("details",null,(0,r.mdx)("summary",{style:{fontSize:24}},(0,r.mdx)("b",null,"Data")),(0,r.mdx)("h3",{id:"graph-config-object"},"Graph Config object"),(0,r.mdx)(m.c,{mdxType:"GraphConfig"}),(0,r.mdx)("h3",{id:"data-object"},"Data object"),(0,r.mdx)("h4",{id:"initial-dataset"},"Initial Dataset"),(0,r.mdx)(x,{mdxType:"DataObject1"}),(0,r.mdx)("h4",{id:"updated-dataset"},"Updated Dataset"),(0,r.mdx)(x,{mdxType:"DataObject2"})))}j.isMDXComponent=!0},40340:function(e,t,n){"use strict";n.d(t,{c:function(){return c}});n(11504);var a=n(69788),r=["components"];function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o.apply(this,arguments)}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i={},p="wrapper";function c(e){var t=e.components,n=l(e,r);return(0,a.mdx)(p,o({},i,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/lib/js/carbon';\n\nconst getSimpleAxisData = (id) => ({\n  bindTo: id,\n  axis: {\n    x: {\n      type: Carbon.helpers.AXIS_TYPE.TIME_SERIES,\n      label: 'Datetime',\n      lowerLimit: new Date(2016, 0, 1, 1, 0).toISOString(),\n      upperLimit: new Date(2016, 0, 1, 23, 59).toISOString(),\n    },\n    y: {\n      label: 'Bubble',\n      lowerLimit: 10,\n      upperLimit: 250,\n    },\n  },\n  pan: {\n    enabled: true,\n  },\n});\n\nexport default getSimpleAxisData;\n\n")))}c.isMDXComponent=!0},78704:function(e,t,n){var a,r;void 0===(r="function"==typeof(a=function(){var e="details",t="summary";function n(e){if("summary"===e.target.nodeName.toLowerCase()){var t=e.target.parentNode;if(!t)return;t.getAttribute("open")?(t.open=!1,t.removeAttribute("open")):(t.open=!0,t.setAttribute("open","open"))}}function a(){var n=document.createElement(e);if(!("open"in n))return!1;n.innerHTML="<"+t+">a</"+t+">b",document.body.appendChild(n);var a=n.offsetHeight;n.open=!0;var r=a!=n.offsetHeight;return document.body.removeChild(n),r}function r(e,t){if(!document.getElementById(e)){var n=document.createElement("style");n.id=e,n.innerHTML=t,document.getElementsByTagName("head")[0].appendChild(n)}}a()||(document.documentElement.className+=" no-details",window.addEventListener("click",n),r("details-polyfill-style","html.no-details "+e+" { display: block; }\nhtml.no-details "+e+":not([open]) > :not("+t+") { display: none; }\nhtml.no-details "+e+" > "+t+':before { content: "▶"; display: inline-block; font-size: .8em; width: 1.5em; }\nhtml.no-details '+e+"[open] > "+t+':before { content: "▼"; }'))})?a.call(t,n,t,e):a)||(e.exports=r)}}]);