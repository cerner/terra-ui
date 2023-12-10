(self.webpackChunkterra_ui=self.webpackChunkterra_ui||[]).push([[77500],{59121:function(e,t,n){"use strict";var a=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(54520)),o=n(22678),i=n(5485),l={key:"uid_2",label:{display:"Data Label 2"},shape:r.default.helpers.SHAPES.DARK.TRIANGLE,color:r.default.helpers.COLORS.BLUE,style:{strokeDashArray:"2,2"},onClick:o.loadPopup,values:(0,i.createGraphValuesWithSin)({length:18,initialX:85,xModifier:10,yModifier:2*Math.PI}),legendOptions:{showLine:!0,showShape:!1,style:{strokeDashArray:"2,2"}},showShapes:!1};t.default=l},32121:function(e,t,n){"use strict";var a=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(54520)),o=n(22678),i=n(5485),l={key:"uid_6",label:{display:"Data Label 6"},color:r.default.helpers.COLORS.ORANGE,shape:r.default.helpers.SHAPES.DARK.SQUARE,onClick:o.loadPopup,yAxis:"y2",legendOptions:{showLine:!0,showShape:!0},regions:[{axis:"y2",start:50,end:150}],values:(0,i.createGraphValuesWithCos)({length:20,initialX:85,xModifier:10,yModifier:5*Math.PI})};t.default=l},5485:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.createGraphValuesWithSin=t.createGraphValuesWithCos=void 0;t.createGraphValuesWithSin=function(e){var t=e.length,n=e.initialX,a=e.xModifier,r=e.yModifier;return new Array(t).fill("").map((function(e,t){return{y:Math.sin(t)*r,x:n+t*a}}))},t.createGraphValuesWithCos=function(e){var t=e.length,n=e.initialX,a=e.xModifier,r=e.yModifier;return new Array(t).fill("").map((function(e,t){return{y:Math.cos(t)*r,x:n+t*a}}))}},18170:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default=function(e){return{bindTo:e,bindLegendTo:null,axis:{x:{show:!0,label:"Data",lowerLimit:80,upperLimit:280},y:{show:!0,label:"Line Set A",lowerLimit:-18,upperLimit:18},y2:{show:!0,label:"Line Set B",lowerLimit:0,upperLimit:250}},showLabel:!0,showLegend:!0,showShapes:!0,showVGrid:!0,showHGrid:!0}}},22678:function(e,t,n){"use strict";var a=n(64836),r=n(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.loadY2AxisLabelPopup=t.loadXAndYAxisLabelPopup=t.loadTrackPopup=t.loadTimelinePopup=t.loadTextLabelPopup=t.loadTaskPopup=t.loadPopup=t.loadPiePopup=t.loadDatelinePopup=t.loadBubblePopup=t.loadBarPopup=void 0;var o=a(n(27424)),i=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=r(e)&&"function"!=typeof e)return{default:e};var n=s(t);if(n&&n.has(e))return n.get(e);var a={__proto__:null},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var l=o?Object.getOwnPropertyDescriptor(e,i):null;l&&(l.get||l.set)?Object.defineProperty(a,i,l):a[i]=e[i]}return a.default=e,n&&n.set(e,a),a}(n(79590)),l=a(n(88703)),p=a(n(53334));function s(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(s=function(e){return e?n:t})(e)}var c=function(e){return new Date(e).toLocaleString()},d=function(e){return e?u(e)?c(e):e:null},u=function(e){return e instanceof Date},f=function(e,t,n){var a=e.append("g").classed("popup-item",!0);a.append("label").classed("popup-label",!0).text(t),a.append("g").classed("popup-text",!0).text(n)},m=function(e,t,n){var a=e.append("g").classed("popup-item",!0);a.append("label").classed("popup-label",!0).text(t);for(var r=a.append("g").classed("section",!0),i=function(){var e=p[l],t=r.append("g").classed("content",!0);Object.entries(e).forEach((function(e){var n=(0,o.default)(e,2),a=n[0],r=n[1],i=t.append("g").classed("popup-item",!0);i.append("label").classed("popup-label",!0).text(a.replace(/([a-z0-9])([A-Z])/g,"$1 $2").replace(/(\b[a-z](?!\s))/g,(function(e){return e.toUpperCase()}))),i.append("g").classed("popup-text",!0).text(r)}))},l=0,p=Object.values(n);l<p.length;l++)i()},h=function(e){var t=document.querySelector("#tooltip");return i.select("body").append("div","#tooltip").attr("id","overlay").classed("overlay",!0).on("click",(function n(){i.select(t).attr("style","display:none;").selectAll("g").remove(),p.default.isFunction(e)&&e(),i.select("#overlay").remove(),t.removeEventListener("click",n),window.removeEventListener("resize",n)})),i.select("#tooltip").style("left","".concat(i.event.pageX+5,"px")).style("top","".concat(i.event.pageY+5,"px"))},y=function(){i.select("#overlay").remove(),document.getElementsByClassName("initial-tooltip")[0]&&(document.getElementsByClassName("initial-tooltip")[0].className="tooltip"),i.select("#tooltip").attr("style","").selectAll("g").remove()};t.loadPopup=function(e,t,n,a){y();var r=h(e).append("g"),o=a.x,i=a.y,l=a.label,p=a.high,s=a.mid,m=a.low;o?(f(r,"X axis","".concat(u(o)?c(o):o)),f(r,"".concat(l.display),i)):(f(r,"X axis","".concat(p?d(p.x):s?d(s.x):m?d(m.x):"N/A")),p&&f(r,"High",d(p.y)),s&&f(r,"Mid",d(s.y)),m&&f(r,"Low",d(m.y)))},t.loadBubblePopup=function(e,t,n,a){y();var r=h(e).append("g"),o=a.x,i=a.y,l=a.label,p=a.weight;o&&(f(r,"X axis","".concat(u(o)?c(o):o)),f(r,"year",i)),p&&f(r,"".concat(l.display),"".concat(p))},t.loadBarPopup=function(e,t,n,a){y();var r=h(e).append("g");a.forEach((function(e){return f(r,"".concat(e.label.display),"".concat(e.y))}))},t.loadTextLabelPopup=function(e,t,n){y();var a=h(e).append("g").classed("popup-item",!0).append("g").attr("style","display: inline-block;"),r=t.shape,o=t.label,i=t.color;p.default.notEmpty(r)&&a.append("svg").attr("width","15").attr("height","12").append("path").attr("transform","translate(".concat(0,", ",0,") scale(",r.options.scale,")")).attr("d",r.path.d).attr("fill",r.path.fill||l.default.DEFAULT_COLOR).attr("id",r.path.id),o.display&&a.append("text").classed("popup-text",!0).attr("style","color: ".concat(i,";")).text("".concat(o.display)),o.secondaryDisplay&&a.append("tspan").attr("style","color: ".concat(l.default.DEFAULT_COLOR,";")).text(" ".concat(o.secondaryDisplay))},t.loadXAndYAxisLabelPopup=function(e){y(),h().append("g").append("g").classed("popup-item",!0).append("g").classed("popup-text",!0).text(e)},t.loadY2AxisLabelPopup=function(e){var t,n;y(),(n=document.querySelector("#tooltip"),i.select("body").append("div","#tooltip").attr("id","overlay").classed("overlay",!0).on("click",(function e(){i.select(n).attr("style","display:none;").selectAll("g").remove(),p.default.isFunction(t)&&t(),i.select("#overlay").remove(),n.removeEventListener("click",e),window.removeEventListener("resize",e)})),i.select("#tooltip").style("left","".concat(i.event.pageX-250,"px")).style("top","".concat(i.event.pageY+5,"px"))).append("g").append("g").classed("popup-item",!0).append("g").classed("popup-text",!0).text(e)},t.loadTrackPopup=function(e,t,n){y();var a=h(e).append("g"),r=n.tasks,o=n.activities,i=n.events,l=n.actions;if(r&&r.length>0){var p=[];p.forEach((function(e){p.push({name:e.key,startDate:e.startDate,endDate:e.endDate})})),m(a,"Tasks",p)}if(o&&o.length>0){var s=[];o.forEach((function(e){s.push({name:e.key,startDate:e.startDate,endDate:e.endDate})})),m(a,"Activities",s)}if(i&&i.length>0){var c=[];i.forEach((function(e){c.push({name:e.key,values:e.values.join(", ")})})),m(a,"Events",c)}if(l&&l.length>0){var d=[];l.forEach((function(e){d.push({name:e.key,values:e.values.join(", ")})})),m(a,"Actions",d)}},t.loadTaskPopup=function(e,t,n,a){y();var r=h(e).append("g"),o=a.label,i=a.display,l=a.y,p=a.startDate,s=a.endDate,d=a.percentage;o&&f(r,"Task Name",i),f(r,"Track",l),f(r,"Start Date",c(p)),f(r,"End Date",c(s)),d&&f(r,"Percentage",d)},t.loadDatelinePopup=function(e,t){y();var n=h(e).append("g"),a=t.label,r=t.value;a&&f(n,"Milestone",a.display),f(n,"Date",c(r))},t.loadTimelinePopup=function(e,t,n,a){y();var r=h(e).append("g"),o=a.x,i=(a.y,a.label),l=a.content;f(r,"X axis","".concat(u(o)?c(o):o)),f(r,"".concat(i.display),l)},t.loadPiePopup=function(e,t,n,a){y();var r=h(e).append("g"),o=a.label,i=a.value;f(r,o.display,i)}},93065:function(e,t,n){"use strict";var a=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(67294)),o=a(n(45697));n(80244);var i={id:o.default.string.isRequired},l=function(e){return r.default.createElement(r.default.Fragment,null,r.default.createElement("div",{id:"tooltip",className:"initial-tooltip"}),r.default.createElement("div",{id:e.id,className:"example-graph-container"}))};l.propTypes=i;t.default=l},44014:function(e,t,n){"use strict";var a=n(64836);t.Z=void 0;var r=a(n(67294)),o=a(n(54520)),i=a(n(53334));n(56867),n(39003);var l=a(n(93065)),p=a(n(18170)),s=a(n(59121)),c=a(n(32121)),d=i.default.deepClone((0,p.default)("#y2Region")),u=[i.default.deepClone(s.default),i.default.deepClone(c.default)];t.Z=function(){return r.default.useEffect((function(){var e=o.default.api.graph(d);u.forEach((function(t){e.loadContent(o.default.api.line(t))}))}),[]),r.default.createElement(l.default,{id:"y2Region"})}},77500:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return C}});var a=n(67294),r=n(81254),o=n(44014),i=["components"];function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},l.apply(this,arguments)}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s={};function c(e){var t=e.components,n=p(e,i);return(0,r.mdx)("wrapper",l({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport utils from '@cerner/carbon-graphs/lib/js/helpers/utils';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Graph.module.scss';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Line/LineGraph.module.scss';\nimport ExampleGraphContainer from '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer';\nimport getLineDefaultY2Config from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Line/lineDefaultY2';\nimport exampleData1 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Line/dataset2';\nimport exampleData2 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Line/datasetRegions6';\n\n/*\nPlease refer to the documentation below to see the graphConfig and data objects\n*/\n\nconst graphConfig = utils.deepClone(getLineDefaultY2Config('#y2Region'));\nconst dataset = [\n  utils.deepClone(exampleData1),\n  utils.deepClone(exampleData2),\n];\n\nconst Y2RegionLineExample = () => {\n  React.useEffect(() => {\n    const graph = Carbon.api.graph(graphConfig);\n    dataset.forEach((data) => {\n      graph.loadContent(Carbon.api.line(data));\n    });\n  }, []);\n  return (\n    <ExampleGraphContainer id=\"y2Region\" />\n  );\n};\n\nexport default Y2RegionLineExample;\n\n\n")))}c.isMDXComponent=!0;var d=n(49271),u=n(25005),f=function(e){var t=e.title,n=e.description,r=e.isExpanded;return a.createElement(d.Z,{title:t||"Y 2 Axis",description:n,example:a.createElement(o.Z,null),exampleCssSrc:a.createElement(u.Z,null),exampleSrc:a.createElement(c,null),isExpanded:r})},m=n(11598),h=n(24407),y=["components"];function g(){return g=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},g.apply(this,arguments)}function b(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var v={},x="wrapper";function O(e){var t=e.components,n=b(e,y);return(0,r.mdx)(x,g({},v,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport { loadPopup } from '@cerner/terra-graphs-docs/lib/example-datasets/popup';\nimport { createGraphValuesWithCos } from '../createGraphValues';\n\nconst data = {\n  key: 'uid_6',\n  label: {\n    display: 'Data Label 6',\n  },\n  color: Carbon.helpers.COLORS.ORANGE,\n  shape: Carbon.helpers.SHAPES.DARK.SQUARE,\n  onClick: loadPopup,\n  yAxis: 'y2',\n  legendOptions: {\n    showLine: true,\n    showShape: true,\n  },\n  regions: [\n    {\n      axis: 'y2',\n      start: 50,\n      end: 150,\n    },\n  ],\n  values: createGraphValuesWithCos({\n    length: 20, initialX: 85, xModifier: 10, yModifier: Math.PI * 5,\n  }),\n};\n\nexport default data;\n\n")))}O.isMDXComponent=!0;var w=["components"];function j(){return j=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},j.apply(this,arguments)}function L(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}n(51320);var P={},E="wrapper";function C(e){var t=e.components,n=L(e,w);return(0,r.mdx)(E,j({},P,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"y2-axis"},"Y2-Axis"),(0,r.mdx)("p",null,"This is timeseries graph with region associated to each line."),(0,r.mdx)("h4",{id:"note-hover-onto-the-legend-to-see-the-region-associated-with-each-line"},"NOTE: Hover onto the legend to see the region associated with each line."),(0,r.mdx)("h2",{id:"getting-started"},"Getting Started"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Install with ",(0,r.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"npm i @cerner/carbon-graphs --save-dev"))))),(0,r.mdx)("h2",{id:"usage"},"Usage"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/dist/js/carbon-graphs.js';\nimport '@cerner/carbon-graphs/dist/css/carbon-graphs.css';\n")),(0,r.mdx)("h2",{id:"example"},"Example"),(0,r.mdx)(f,{mdxType:"LineGraph"}),(0,r.mdx)("details",null,(0,r.mdx)("summary",{style:{fontSize:24}},(0,r.mdx)("b",null,"Data")),(0,r.mdx)("h3",{id:"graph-config-object"},"Graph Config object"),(0,r.mdx)(m.Z,{mdxType:"GraphConfig"}),(0,r.mdx)("h3",{id:"data-object"},"Data object"),(0,r.mdx)("h4",{id:"dataset-1"},"Dataset 1"),(0,r.mdx)(h.Z,{mdxType:"DataObject1"}),(0,r.mdx)("h4",{id:"dataset-2"},"Dataset 2"),(0,r.mdx)(O,{mdxType:"DataObject2"})))}C.isMDXComponent=!0},24407:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});n(67294);var a=n(81254),r=["components"];function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o.apply(this,arguments)}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l={},p="wrapper";function s(e){var t=e.components,n=i(e,r);return(0,a.mdx)(p,o({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport { loadPopup } from '@cerner/terra-graphs-docs/lib/example-datasets/popup';\nimport { createGraphValuesWithSin } from '../createGraphValues';\n\nconst data = {\n  key: 'uid_2',\n  label: {\n    display: 'Data Label 2',\n  },\n  shape: Carbon.helpers.SHAPES.DARK.TRIANGLE,\n  color: Carbon.helpers.COLORS.BLUE,\n  style: { strokeDashArray: '2,2' },\n  onClick: loadPopup,\n  values: createGraphValuesWithSin({\n    length: 18, initialX: 85, xModifier: 10, yModifier: Math.PI * 2,\n  }),\n  legendOptions: {\n    showLine: true,\n    showShape: false,\n    style: { strokeDashArray: '2,2' },\n  },\n  showShapes: false,\n};\n\nexport default data;\n\n")))}s.isMDXComponent=!0},11598:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});n(67294);var a=n(81254),r=["components"];function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o.apply(this,arguments)}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l={},p="wrapper";function s(e){var t=e.components,n=i(e,r);return(0,a.mdx)(p,o({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/lib/js/carbon';\n\nconst getLineTimeseriesConfig = (id) => ({\n  bindTo: id,\n  axis: {\n    x: {\n      type: Carbon.helpers.AXIS_TYPE.TIME_SERIES,\n      label: 'Datetime',\n      lowerLimit: new Date(2016, 0, 1, 1, 0).toISOString(),\n      upperLimit: new Date(2016, 0, 1, 23, 59).toISOString(),\n    },\n    y: {\n      label: 'Line Set A',\n      lowerLimit: 10,\n      upperLimit: 30,\n    },\n    y2: {\n      show: false,\n      label: 'Line Set B',\n      lowerLimit: 0,\n      upperLimit: 250,\n    },\n  },\n  showLabel: true,\n  showLegend: true,\n  showShapes: true,\n  showVGrid: true,\n  showHGrid: true,\n});\n\nexport default getLineTimeseriesConfig;\n\n")))}s.isMDXComponent=!0},51320:function(e,t,n){var a,r;void 0===(r="function"==typeof(a=function(){var e="details",t="summary";function n(e){if("summary"===e.target.nodeName.toLowerCase()){var t=e.target.parentNode;if(!t)return;t.getAttribute("open")?(t.open=!1,t.removeAttribute("open")):(t.open=!0,t.setAttribute("open","open"))}}function a(){var n=document.createElement(e);if(!("open"in n))return!1;n.innerHTML="<"+t+">a</"+t+">b",document.body.appendChild(n);var a=n.offsetHeight;n.open=!0;var r=a!=n.offsetHeight;return document.body.removeChild(n),r}function r(e,t){if(!document.getElementById(e)){var n=document.createElement("style");n.id=e,n.innerHTML=t,document.getElementsByTagName("head")[0].appendChild(n)}}a()||(document.documentElement.className+=" no-details",window.addEventListener("click",n),r("details-polyfill-style","html.no-details "+e+" { display: block; }\nhtml.no-details "+e+":not([open]) > :not("+t+") { display: none; }\nhtml.no-details "+e+" > "+t+':before { content: "▶"; display: inline-block; font-size: .8em; width: 1.5em; }\nhtml.no-details '+e+"[open] > "+t+':before { content: "▼"; }'))})?a.call(t,n,t,e):a)||(e.exports=r)},39003:function(e,t,n){"use strict";n.r(t),t.default={}}}]);