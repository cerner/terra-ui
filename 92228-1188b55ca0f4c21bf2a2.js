(self.webpackChunkterra_ui=self.webpackChunkterra_ui||[]).push([[92228],{54970:function(e,n,t){"use strict";var a=t(22411);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=a(t(27320)),o=t(30660),i={key:"uid_7",label:{display:"Data Label 7"},shape:r.default.helpers.SHAPES.DARK.CIRCLE,onClick:o.loadPopup,yAxis:"y",values:[{x:new Date(2016,0,1,1,5).toISOString(),y:5,isCritical:!1,region:{start:3,end:8,color:r.default.helpers.COLORS.GREY}},{x:new Date(2016,0,1,2,15).toISOString(),y:11,region:{start:4,end:14,color:r.default.helpers.COLORS.GREY}},{x:new Date(2016,0,1,3,15).toISOString(),y:12,region:{start:5,end:15,color:r.default.helpers.COLORS.GREY}},{x:new Date(2016,0,1,4,15).toISOString(),y:16,region:{start:10,end:20,color:r.default.helpers.COLORS.GREY}},{x:new Date(2016,0,1,5,15).toISOString(),y:17,region:{start:10,end:20,color:r.default.helpers.COLORS.GREY}},{x:new Date(2016,0,1,6,15).toISOString(),y:9},{x:new Date(2016,0,1,7,0).toISOString(),y:11,region:{start:8,end:15}},{x:new Date(2016,0,1,8,15).toISOString(),y:12,region:{start:8,end:15}},{x:new Date(2016,0,1,9,45).toISOString(),y:16,region:{start:10,end:20}},{x:new Date(2016,0,1,12,15).toISOString(),y:17,region:{start:10,end:20}},{x:new Date(2016,0,1,13,15).toISOString(),y:28,region:{start:10,end:20},isCritical:!0},{x:new Date(2016,0,1,14,15).toISOString(),y:12,region:{start:8,end:15}},{x:new Date(2016,0,1,19,45).toISOString(),y:13,region:{start:9,end:16}},{x:new Date(2016,0,1,21,15).toISOString(),y:14,region:{start:9,end:16,color:r.default.helpers.COLORS.GREY}}]};n.default=i},16064:function(e,n,t){"use strict";var a=t(22411);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=a(t(27320));n.default=function(e){return{bindTo:e,axis:{x:{type:r.default.helpers.AXIS_TYPE.TIME_SERIES,label:"Datetime",lowerLimit:new Date(2016,0,1,1,0).toISOString(),upperLimit:new Date(2016,0,1,23,59).toISOString()},y:{label:"Line Set A",lowerLimit:10,upperLimit:30},y2:{show:!1,label:"Line Set B",lowerLimit:0,upperLimit:250}},showLabel:!0,showLegend:!0,showShapes:!0,showVGrid:!0,showHGrid:!0}}},30660:function(e,n,t){"use strict";var a=t(22411),r=t(59848);Object.defineProperty(n,"__esModule",{value:!0}),n.loadY2AxisLabelPopup=n.loadXAndYAxisLabelPopup=n.loadTrackPopup=n.loadTimelinePopup=n.loadTextLabelPopup=n.loadTaskPopup=n.loadPopup=n.loadPiePopup=n.loadDatelinePopup=n.loadBubblePopup=n.loadBarPopup=void 0;var o=a(t(97936)),i=function(e,n){if(!n&&e&&e.__esModule)return e;if(null===e||"object"!=r(e)&&"function"!=typeof e)return{default:e};var t=s(n);if(t&&t.has(e))return t.get(e);var a={__proto__:null},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var l=o?Object.getOwnPropertyDescriptor(e,i):null;l&&(l.get||l.set)?Object.defineProperty(a,i,l):a[i]=e[i]}return a.default=e,t&&t.set(e,a),a}(t(32728)),l=a(t(21012)),p=a(t(82452));function s(e){if("function"!=typeof WeakMap)return null;var n=new WeakMap,t=new WeakMap;return(s=function(e){return e?t:n})(e)}var c=function(e){return new Date(e).toLocaleString()},d=function(e){return e?u(e)?c(e):e:null},u=function(e){return e instanceof Date},f=function(e,n,t){var a=e.append("g").classed("popup-item",!0);a.append("label").classed("popup-label",!0).text(n),a.append("g").classed("popup-text",!0).text(t)},m=function(e,n,t){var a=e.append("g").classed("popup-item",!0);a.append("label").classed("popup-label",!0).text(n);for(var r=a.append("g").classed("section",!0),i=function(){var e=p[l],n=r.append("g").classed("content",!0);Object.entries(e).forEach((function(e){var t=(0,o.default)(e,2),a=t[0],r=t[1],i=n.append("g").classed("popup-item",!0);i.append("label").classed("popup-label",!0).text(a.replace(/([a-z0-9])([A-Z])/g,"$1 $2").replace(/(\b[a-z](?!\s))/g,(function(e){return e.toUpperCase()}))),i.append("g").classed("popup-text",!0).text(r)}))},l=0,p=Object.values(t);l<p.length;l++)i()},g=function(e){var n=document.querySelector("#tooltip");return i.select("body").append("div","#tooltip").attr("id","overlay").classed("overlay",!0).on("click",(function t(){i.select(n).attr("style","display:none;").selectAll("g").remove(),p.default.isFunction(e)&&e(),i.select("#overlay").remove(),n.removeEventListener("click",t),window.removeEventListener("resize",t)})),i.select("#tooltip").style("left","".concat(i.event.pageX+5,"px")).style("top","".concat(i.event.pageY+5,"px"))},y=function(){i.select("#overlay").remove(),document.getElementsByClassName("initial-tooltip")[0]&&(document.getElementsByClassName("initial-tooltip")[0].className="tooltip"),i.select("#tooltip").attr("style","").selectAll("g").remove()};n.loadPopup=function(e,n,t,a){y();var r=g(e).append("g"),o=a.x,i=a.y,l=a.label,p=a.high,s=a.mid,m=a.low;o?(f(r,"X axis","".concat(u(o)?c(o):o)),f(r,"".concat(l.display),i)):(f(r,"X axis","".concat(p?d(p.x):s?d(s.x):m?d(m.x):"N/A")),p&&f(r,"High",d(p.y)),s&&f(r,"Mid",d(s.y)),m&&f(r,"Low",d(m.y)))},n.loadBubblePopup=function(e,n,t,a){y();var r=g(e).append("g"),o=a.x,i=a.y,l=a.label,p=a.weight;o&&(f(r,"X axis","".concat(u(o)?c(o):o)),f(r,"year",i)),p&&f(r,"".concat(l.display),"".concat(p))},n.loadBarPopup=function(e,n,t,a){y();var r=g(e).append("g");a.forEach((function(e){return f(r,"".concat(e.label.display),"".concat(e.y))}))},n.loadTextLabelPopup=function(e,n,t){y();var a=g(e).append("g").classed("popup-item",!0).append("g").attr("style","display: inline-block;"),r=n.shape,o=n.label,i=n.color;p.default.notEmpty(r)&&a.append("svg").attr("width","15").attr("height","12").append("path").attr("transform","translate(".concat(0,", ",0,") scale(",r.options.scale,")")).attr("d",r.path.d).attr("fill",r.path.fill||l.default.DEFAULT_COLOR).attr("id",r.path.id),o.display&&a.append("text").classed("popup-text",!0).attr("style","color: ".concat(i,";")).text("".concat(o.display)),o.secondaryDisplay&&a.append("tspan").attr("style","color: ".concat(l.default.DEFAULT_COLOR,";")).text(" ".concat(o.secondaryDisplay))},n.loadXAndYAxisLabelPopup=function(e){y(),g().append("g").append("g").classed("popup-item",!0).append("g").classed("popup-text",!0).text(e)},n.loadY2AxisLabelPopup=function(e){var n,t;y(),(t=document.querySelector("#tooltip"),i.select("body").append("div","#tooltip").attr("id","overlay").classed("overlay",!0).on("click",(function e(){i.select(t).attr("style","display:none;").selectAll("g").remove(),p.default.isFunction(n)&&n(),i.select("#overlay").remove(),t.removeEventListener("click",e),window.removeEventListener("resize",e)})),i.select("#tooltip").style("left","".concat(i.event.pageX-250,"px")).style("top","".concat(i.event.pageY+5,"px"))).append("g").append("g").classed("popup-item",!0).append("g").classed("popup-text",!0).text(e)},n.loadTrackPopup=function(e,n,t){y();var a=g(e).append("g"),r=t.tasks,o=t.activities,i=t.events,l=t.actions;if(r&&r.length>0){var p=[];p.forEach((function(e){p.push({name:e.key,startDate:e.startDate,endDate:e.endDate})})),m(a,"Tasks",p)}if(o&&o.length>0){var s=[];o.forEach((function(e){s.push({name:e.key,startDate:e.startDate,endDate:e.endDate})})),m(a,"Activities",s)}if(i&&i.length>0){var c=[];i.forEach((function(e){c.push({name:e.key,values:e.values.join(", ")})})),m(a,"Events",c)}if(l&&l.length>0){var d=[];l.forEach((function(e){d.push({name:e.key,values:e.values.join(", ")})})),m(a,"Actions",d)}},n.loadTaskPopup=function(e,n,t,a){y();var r=g(e).append("g"),o=a.label,i=a.display,l=a.y,p=a.startDate,s=a.endDate,d=a.percentage;o&&f(r,"Task Name",i),f(r,"Track",l),f(r,"Start Date",c(p)),f(r,"End Date",c(s)),d&&f(r,"Percentage",d)},n.loadDatelinePopup=function(e,n){y();var t=g(e).append("g"),a=n.label,r=n.value;a&&f(t,"Milestone",a.display),f(t,"Date",c(r))},n.loadTimelinePopup=function(e,n,t,a){y();var r=g(e).append("g"),o=a.x,i=(a.y,a.label),l=a.content;f(r,"X axis","".concat(u(o)?c(o):o)),f(r,"".concat(i.display),l)},n.loadPiePopup=function(e,n,t,a){y();var r=g(e).append("g"),o=a.label,i=a.value;f(r,o.display,i)}},2884:function(e,n,t){"use strict";var a=t(22411);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=a(t(11504)),o=a(t(3268));t(88140);var i={id:o.default.string.isRequired},l=function(e){return r.default.createElement(r.default.Fragment,null,r.default.createElement("div",{id:"tooltip",className:"initial-tooltip"}),r.default.createElement("div",{id:e.id,className:"example-graph-container"}))};l.propTypes=i;n.default=l},52248:function(e,n,t){"use strict";var a=t(22411);n.c=void 0;var r=a(t(11504)),o=a(t(27320)),i=a(t(82452));t(20512),t(49192);var l=a(t(2884)),p=a(t(16064)),s=a(t(54970)),c=i.default.deepClone((0,p.default)("#valueRegion")),d=i.default.deepClone(s.default);n.c=function(){return r.default.useEffect((function(){o.default.api.graph(c).loadContent(o.default.api.line(d))}),[]),r.default.createElement(l.default,{id:"valueRegion"})}},92228:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return L}});var a=t(11504),r=t(69788),o=t(52248),i=["components"];function l(){return l=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},l.apply(this,arguments)}function p(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s={};function c(e){var n=e.components,t=p(e,i);return(0,r.mdx)("wrapper",l({},s,t,{components:n,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport utils from '@cerner/carbon-graphs/lib/js/helpers/utils';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Graph.module.scss';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Line/LineGraph.module.scss';\nimport ExampleGraphContainer from '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer';\nimport getLineTimeseriesConfig from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Line/lineTimeseries';\nimport exampleData from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Line/datasetRegions7';\n\n/*\nPlease refer to the documentation below to see the graphConfig and data objects\n*/\n\nconst graphConfig = utils.deepClone(getLineTimeseriesConfig('#valueRegion'));\nconst dataset = utils.deepClone(exampleData);\n\nconst ValueRegionLineExample = () => {\n  React.useEffect(() => {\n    const graph = Carbon.api.graph(graphConfig);\n    graph.loadContent(Carbon.api.line(dataset));\n  }, []);\n  return (\n    <ExampleGraphContainer id=\"valueRegion\" />\n  );\n};\n\nexport default ValueRegionLineExample;\n\n\n")))}c.isMDXComponent=!0;var d=t(33792),u=t(1208),f=function(e){var n=e.title,t=e.description,r=e.isExpanded;return a.createElement(d.c,{title:n||"Value Region",description:t,example:a.createElement(o.c,null),exampleCssSrc:a.createElement(u.c,null),exampleSrc:a.createElement(c,null),isExpanded:r})},m=t(17900),g=["components"];function y(){return y=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},y.apply(this,arguments)}function b(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var v={},h="wrapper";function x(e){var n=e.components,t=b(e,g);return(0,r.mdx)(h,y({},v,t,{components:n,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport { loadPopup } from '@cerner/terra-graphs-docs/lib/example-datasets/popup';\n\nconst data = {\n  key: 'uid_7',\n  label: {\n    display: 'Data Label 7',\n  },\n  shape: Carbon.helpers.SHAPES.DARK.CIRCLE,\n  onClick: loadPopup,\n  yAxis: 'y',\n  values: [\n    {\n      x: new Date(2016, 0, 1, 1, 5).toISOString(),\n      y: 5,\n      isCritical: false,\n      region: {\n        start: 3,\n        end: 8,\n        color: Carbon.helpers.COLORS.GREY,\n      },\n    },\n    {\n      x: new Date(2016, 0, 1, 2, 15).toISOString(),\n      y: 11,\n      region: {\n        start: 4,\n        end: 14,\n        color: Carbon.helpers.COLORS.GREY,\n      },\n    },\n    {\n      x: new Date(2016, 0, 1, 3, 15).toISOString(),\n      y: 12,\n      region: {\n        start: 5,\n        end: 15,\n        color: Carbon.helpers.COLORS.GREY,\n      },\n    },\n    {\n      x: new Date(2016, 0, 1, 4, 15).toISOString(),\n      y: 16,\n      region: {\n        start: 10,\n        end: 20,\n        color: Carbon.helpers.COLORS.GREY,\n      },\n    },\n    {\n      x: new Date(2016, 0, 1, 5, 15).toISOString(),\n      y: 17,\n      region: {\n        start: 10,\n        end: 20,\n        color: Carbon.helpers.COLORS.GREY,\n      },\n    },\n    {\n      x: new Date(2016, 0, 1, 6, 15).toISOString(),\n      y: 9,\n    },\n    {\n      x: new Date(2016, 0, 1, 7, 0).toISOString(),\n      y: 11,\n      region: {\n        start: 8,\n        end: 15,\n      },\n    },\n    {\n      x: new Date(2016, 0, 1, 8, 15).toISOString(),\n      y: 12,\n      region: {\n        start: 8,\n        end: 15,\n      },\n    },\n    {\n      x: new Date(2016, 0, 1, 9, 45).toISOString(),\n      y: 16,\n      region: {\n        start: 10,\n        end: 20,\n      },\n    },\n    {\n      x: new Date(2016, 0, 1, 12, 15).toISOString(),\n      y: 17,\n      region: {\n        start: 10,\n        end: 20,\n      },\n    },\n    {\n      x: new Date(2016, 0, 1, 13, 15).toISOString(),\n      y: 28,\n      region: {\n        start: 10,\n        end: 20,\n      },\n      isCritical: true,\n    },\n    {\n      x: new Date(2016, 0, 1, 14, 15).toISOString(),\n      y: 12,\n      region: {\n        start: 8,\n        end: 15,\n      },\n    },\n    {\n      x: new Date(2016, 0, 1, 19, 45).toISOString(),\n      y: 13,\n      region: {\n        start: 9,\n        end: 16,\n      },\n    },\n    {\n      x: new Date(2016, 0, 1, 21, 15).toISOString(),\n      y: 14,\n      region: {\n        start: 9,\n        end: 16,\n        color: Carbon.helpers.COLORS.GREY,\n      },\n    },\n  ],\n};\n\nexport default data;\n\n")))}x.isMDXComponent=!0;var O=["components"];function S(){return S=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},S.apply(this,arguments)}function w(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}t(78704);var D={},C="wrapper";function L(e){var n=e.components,t=w(e,O);return(0,r.mdx)(C,S({},D,t,{components:n,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"value-region"},"Value region"),(0,r.mdx)("p",null,"This is timeseries line graph with value based region."),(0,r.mdx)("h2",{id:"getting-started"},"Getting Started"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Install with ",(0,r.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"npm i @cerner/carbon-graphs --save-dev"))))),(0,r.mdx)("h2",{id:"usage"},"Usage"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/dist/js/carbon-graphs.js';\nimport '@cerner/carbon-graphs/dist/css/carbon-graphs.css';\n")),(0,r.mdx)("h2",{id:"example"},"Example"),(0,r.mdx)(f,{mdxType:"LineGraph"}),(0,r.mdx)("details",null,(0,r.mdx)("summary",{style:{fontSize:24}},(0,r.mdx)("b",null,"Data")),(0,r.mdx)("h3",{id:"graph-config-object"},"Graph Config object"),(0,r.mdx)(m.c,{mdxType:"GraphConfig"}),(0,r.mdx)("h3",{id:"data-object"},"Data object"),(0,r.mdx)(x,{mdxType:"DataObject"})))}L.isMDXComponent=!0},17900:function(e,n,t){"use strict";t.d(n,{c:function(){return s}});t(11504);var a=t(69788),r=["components"];function o(){return o=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},o.apply(this,arguments)}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l={},p="wrapper";function s(e){var n=e.components,t=i(e,r);return(0,a.mdx)(p,o({},l,t,{components:n,mdxType:"MDXLayout"}),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/lib/js/carbon';\n\nconst getLineTimeseriesConfig = (id) => ({\n  bindTo: id,\n  axis: {\n    x: {\n      type: Carbon.helpers.AXIS_TYPE.TIME_SERIES,\n      label: 'Datetime',\n      lowerLimit: new Date(2016, 0, 1, 1, 0).toISOString(),\n      upperLimit: new Date(2016, 0, 1, 23, 59).toISOString(),\n    },\n    y: {\n      label: 'Line Set A',\n      lowerLimit: 10,\n      upperLimit: 30,\n    },\n    y2: {\n      show: false,\n      label: 'Line Set B',\n      lowerLimit: 0,\n      upperLimit: 250,\n    },\n  },\n  showLabel: true,\n  showLegend: true,\n  showShapes: true,\n  showVGrid: true,\n  showHGrid: true,\n});\n\nexport default getLineTimeseriesConfig;\n\n")))}s.isMDXComponent=!0},78704:function(e,n,t){var a,r;void 0===(r="function"==typeof(a=function(){var e="details",n="summary";function t(e){if("summary"===e.target.nodeName.toLowerCase()){var n=e.target.parentNode;if(!n)return;n.getAttribute("open")?(n.open=!1,n.removeAttribute("open")):(n.open=!0,n.setAttribute("open","open"))}}function a(){var t=document.createElement(e);if(!("open"in t))return!1;t.innerHTML="<"+n+">a</"+n+">b",document.body.appendChild(t);var a=t.offsetHeight;t.open=!0;var r=a!=t.offsetHeight;return document.body.removeChild(t),r}function r(e,n){if(!document.getElementById(e)){var t=document.createElement("style");t.id=e,t.innerHTML=n,document.getElementsByTagName("head")[0].appendChild(t)}}a()||(document.documentElement.className+=" no-details",window.addEventListener("click",t),r("details-polyfill-style","html.no-details "+e+" { display: block; }\nhtml.no-details "+e+":not([open]) > :not("+n+") { display: none; }\nhtml.no-details "+e+" > "+n+':before { content: "▶"; display: inline-block; font-size: .8em; width: 1.5em; }\nhtml.no-details '+e+"[open] > "+n+':before { content: "▼"; }'))})?a.call(n,t,n,e):a)||(e.exports=r)},49192:function(e,n,t){"use strict";t.r(n),n.default={}}}]);