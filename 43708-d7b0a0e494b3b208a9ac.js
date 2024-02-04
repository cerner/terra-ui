(self.webpackChunkterra_ui=self.webpackChunkterra_ui||[]).push([[43708],{76315:function(e,t,n){"use strict";var a=n(22411);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(27320)),o=n(30660),l={key:"dataset_bar_1",label:{display:"Dataset 1"},color:r.default.helpers.COLORS.LIGHT_PURPLE,onClick:o.loadBarPopup,values:[{x:1,y:10},{x:2,y:15},{x:3,y:18},{x:4,y:6},{x:6,y:10}]};t.default=l},8840:function(e,t,n){"use strict";var a=n(22411);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(27320)),o=n(30660),l={key:"dataset_bar_2",label:{display:"Dataset 1"},color:r.default.helpers.COLORS.GREEN,onClick:o.loadBarPopup,values:[{x:1,y:30},{x:2,y:10},{x:3,y:13},{x:4,y:15},{x:5,y:18}]};t.default=l},21140:function(e,t,n){"use strict";var a=n(22411);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(27320)),o=n(30660),l={key:"grouped_bar_3",label:{display:"Dataset 3"},color:r.default.helpers.COLORS.BLUE,onClick:o.loadBarPopup,values:[{x:1,y:15},{x:2,y:10},{x:3,y:13},{x:4,y:8}]};t.default=l},24996:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default=function(e){return{bindTo:e,bindLegendTo:null,axis:{x:{show:!0,label:"Data",lowerLimit:0,upperLimit:8,ticks:{values:[1,2,3,4,5,6,7],format:".0f"}},y:{show:!0,label:"Bar Set A",lowerLimit:0,upperLimit:35},y2:{show:!1,label:"Bar Set B",lowerLimit:0,upperLimit:30}},showLabel:!0,showLegend:!0,showShapes:!0,showVGrid:!1,showHGrid:!0}}},30660:function(e,t,n){"use strict";var a=n(22411),r=n(59848);Object.defineProperty(t,"__esModule",{value:!0}),t.loadY2AxisLabelPopup=t.loadXAndYAxisLabelPopup=t.loadTrackPopup=t.loadTimelinePopup=t.loadTextLabelPopup=t.loadTaskPopup=t.loadPopup=t.loadPiePopup=t.loadDatelinePopup=t.loadBubblePopup=t.loadBarPopup=void 0;var o=a(n(97936)),l=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=r(e)&&"function"!=typeof e)return{default:e};var n=s(t);if(n&&n.has(e))return n.get(e);var a={__proto__:null},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var p=o?Object.getOwnPropertyDescriptor(e,l):null;p&&(p.get||p.set)?Object.defineProperty(a,l,p):a[l]=e[l]}return a.default=e,n&&n.set(e,a),a}(n(32728)),p=a(n(21012)),i=a(n(82452));function s(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(s=function(e){return e?n:t})(e)}var c=function(e){return new Date(e).toLocaleString()},d=function(e){return e?u(e)?c(e):e:null},u=function(e){return e instanceof Date},f=function(e,t,n){var a=e.append("g").classed("popup-item",!0);a.append("label").classed("popup-label",!0).text(t),a.append("g").classed("popup-text",!0).text(n)},m=function(e,t,n){var a=e.append("g").classed("popup-item",!0);a.append("label").classed("popup-label",!0).text(t);for(var r=a.append("g").classed("section",!0),l=function(){var e=i[p],t=r.append("g").classed("content",!0);Object.entries(e).forEach((function(e){var n=(0,o.default)(e,2),a=n[0],r=n[1],l=t.append("g").classed("popup-item",!0);l.append("label").classed("popup-label",!0).text(a.replace(/([a-z0-9])([A-Z])/g,"$1 $2").replace(/(\b[a-z](?!\s))/g,(function(e){return e.toUpperCase()}))),l.append("g").classed("popup-text",!0).text(r)}))},p=0,i=Object.values(n);p<i.length;p++)l()},b=function(e){var t=document.querySelector("#tooltip");return l.select("body").append("div","#tooltip").attr("id","overlay").classed("overlay",!0).on("click",(function n(){l.select(t).attr("style","display:none;").selectAll("g").remove(),i.default.isFunction(e)&&e(),l.select("#overlay").remove(),t.removeEventListener("click",n),window.removeEventListener("resize",n)})),l.select("#tooltip").style("left","".concat(l.event.pageX+5,"px")).style("top","".concat(l.event.pageY+5,"px"))},y=function(){l.select("#overlay").remove(),document.getElementsByClassName("initial-tooltip")[0]&&(document.getElementsByClassName("initial-tooltip")[0].className="tooltip"),l.select("#tooltip").attr("style","").selectAll("g").remove()};t.loadPopup=function(e,t,n,a){y();var r=b(e).append("g"),o=a.x,l=a.y,p=a.label,i=a.high,s=a.mid,m=a.low;o?(f(r,"X axis","".concat(u(o)?c(o):o)),f(r,"".concat(p.display),l)):(f(r,"X axis","".concat(i?d(i.x):s?d(s.x):m?d(m.x):"N/A")),i&&f(r,"High",d(i.y)),s&&f(r,"Mid",d(s.y)),m&&f(r,"Low",d(m.y)))},t.loadBubblePopup=function(e,t,n,a){y();var r=b(e).append("g"),o=a.x,l=a.y,p=a.label,i=a.weight;o&&(f(r,"X axis","".concat(u(o)?c(o):o)),f(r,"year",l)),i&&f(r,"".concat(p.display),"".concat(i))},t.loadBarPopup=function(e,t,n,a){y();var r=b(e).append("g");a.forEach((function(e){return f(r,"".concat(e.label.display),"".concat(e.y))}))},t.loadTextLabelPopup=function(e,t,n){y();var a=b(e).append("g").classed("popup-item",!0).append("g").attr("style","display: inline-block;"),r=t.shape,o=t.label,l=t.color;i.default.notEmpty(r)&&a.append("svg").attr("width","15").attr("height","12").append("path").attr("transform","translate(".concat(0,", ",0,") scale(",r.options.scale,")")).attr("d",r.path.d).attr("fill",r.path.fill||p.default.DEFAULT_COLOR).attr("id",r.path.id),o.display&&a.append("text").classed("popup-text",!0).attr("style","color: ".concat(l,";")).text("".concat(o.display)),o.secondaryDisplay&&a.append("tspan").attr("style","color: ".concat(p.default.DEFAULT_COLOR,";")).text(" ".concat(o.secondaryDisplay))},t.loadXAndYAxisLabelPopup=function(e){y(),b().append("g").append("g").classed("popup-item",!0).append("g").classed("popup-text",!0).text(e)},t.loadY2AxisLabelPopup=function(e){var t,n;y(),(n=document.querySelector("#tooltip"),l.select("body").append("div","#tooltip").attr("id","overlay").classed("overlay",!0).on("click",(function e(){l.select(n).attr("style","display:none;").selectAll("g").remove(),i.default.isFunction(t)&&t(),l.select("#overlay").remove(),n.removeEventListener("click",e),window.removeEventListener("resize",e)})),l.select("#tooltip").style("left","".concat(l.event.pageX-250,"px")).style("top","".concat(l.event.pageY+5,"px"))).append("g").append("g").classed("popup-item",!0).append("g").classed("popup-text",!0).text(e)},t.loadTrackPopup=function(e,t,n){y();var a=b(e).append("g"),r=n.tasks,o=n.activities,l=n.events,p=n.actions;if(r&&r.length>0){var i=[];i.forEach((function(e){i.push({name:e.key,startDate:e.startDate,endDate:e.endDate})})),m(a,"Tasks",i)}if(o&&o.length>0){var s=[];o.forEach((function(e){s.push({name:e.key,startDate:e.startDate,endDate:e.endDate})})),m(a,"Activities",s)}if(l&&l.length>0){var c=[];l.forEach((function(e){c.push({name:e.key,values:e.values.join(", ")})})),m(a,"Events",c)}if(p&&p.length>0){var d=[];p.forEach((function(e){d.push({name:e.key,values:e.values.join(", ")})})),m(a,"Actions",d)}},t.loadTaskPopup=function(e,t,n,a){y();var r=b(e).append("g"),o=a.label,l=a.display,p=a.y,i=a.startDate,s=a.endDate,d=a.percentage;o&&f(r,"Task Name",l),f(r,"Track",p),f(r,"Start Date",c(i)),f(r,"End Date",c(s)),d&&f(r,"Percentage",d)},t.loadDatelinePopup=function(e,t){y();var n=b(e).append("g"),a=t.label,r=t.value;a&&f(n,"Milestone",a.display),f(n,"Date",c(r))},t.loadTimelinePopup=function(e,t,n,a){y();var r=b(e).append("g"),o=a.x,l=(a.y,a.label),p=a.content;f(r,"X axis","".concat(u(o)?c(o):o)),f(r,"".concat(l.display),p)},t.loadPiePopup=function(e,t,n,a){y();var r=b(e).append("g"),o=a.label,l=a.value;f(r,o.display,l)}},2884:function(e,t,n){"use strict";var a=n(22411);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(11504)),o=a(n(3268));n(88140);var l={id:o.default.string.isRequired},p=function(e){return r.default.createElement(r.default.Fragment,null,r.default.createElement("div",{id:"tooltip",className:"initial-tooltip"}),r.default.createElement("div",{id:e.id,className:"example-graph-container"}))};p.propTypes=l;t.default=p},52491:function(e,t,n){"use strict";var a=n(22411);t.c=void 0;var r=a(n(11504)),o=a(n(27320)),l=a(n(82452));n(20512),n(57732);var p=a(n(2884)),i=a(n(24996)),s=a(n(76315)),c=a(n(8840)),d=a(n(21140)),u=l.default.deepClone((0,i.default)("#groupedBarGraph")),f=[l.default.deepClone(s.default),l.default.deepClone(c.default),l.default.deepClone(d.default)];t.c=function(){return r.default.useEffect((function(){var e=o.default.api.graph(u);f.forEach((function(t){e.loadContent(o.default.api.bar(t))}))}),[]),r.default.createElement(p.default,{id:"groupedBarGraph"})}},43708:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return S}});var a=n(11504),r=n(69788),o=n(52491),l=["components"];function p(){return p=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},p.apply(this,arguments)}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s={};function c(e){var t=e.components,n=i(e,l);return(0,r.mdx)("wrapper",p({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport utils from '@cerner/carbon-graphs/lib/js/helpers/utils';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Graph.module.scss';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Bar/BarGraph.module.scss';\nimport ExampleGraphContainer from '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer';\nimport getBarConfig from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Bar/barDefault';\nimport exampleData1 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Bar/dataset1';\nimport exampleData2 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Bar/dataset2';\nimport exampleData3 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Bar/dataset3';\n\n/*\nPlease refer to the documentation below to see the graphConfig and data objects\n*/\n\nconst graphConfig = utils.deepClone(getBarConfig('#groupedBarGraph'));\nconst dataset = [\n  utils.deepClone(exampleData1),\n  utils.deepClone(exampleData2),\n  utils.deepClone(exampleData3),\n];\n\nexport default () => {\n  React.useEffect(() => {\n    const graph = Carbon.api.graph(graphConfig);\n    dataset.forEach((data) => {\n      graph.loadContent(Carbon.api.bar(data));\n    });\n  }, []);\n\n  return (\n    <ExampleGraphContainer id=\"groupedBarGraph\" />\n  );\n};\n\n")))}c.isMDXComponent=!0;var d=n(33792),u=n(1208),f=function(e){var t=e.title,n=e.description,r=e.isExpanded;return a.createElement(d.c,{title:t||"Grouped Bars",description:n,example:a.createElement(o.c,null),exampleCssSrc:a.createElement(u.c,null),exampleSrc:a.createElement(c,null),isExpanded:r})},m=n(31840),b=n(79600),y=["components"];function g(){return g=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},g.apply(this,arguments)}function v(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var h={},x="wrapper";function O(e){var t=e.components,n=v(e,y);return(0,r.mdx)(x,g({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport { loadBarPopup } from '@cerner/terra-graphs-docs/lib/example-datasets/popup';\n\nconst data = {\n  key: 'dataset_bar_2',\n  label: {\n    display: 'Dataset 1',\n  },\n  color: Carbon.helpers.COLORS.GREEN,\n  onClick: loadBarPopup,\n  values: [\n    {\n      x: 1,\n      y: 30,\n    },\n    {\n      x: 2,\n      y: 10,\n    },\n    {\n      x: 3,\n      y: 13,\n    },\n    {\n      x: 4,\n      y: 15,\n    },\n    {\n      x: 5,\n      y: 18,\n    },\n  ],\n};\n\nexport default data;\n\n")))}O.isMDXComponent=!0;var j=["components"];function w(){return w=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},w.apply(this,arguments)}function P(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var C={},D="wrapper";function E(e){var t=e.components,n=P(e,j);return(0,r.mdx)(D,w({},C,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport { loadBarPopup } from '@cerner/terra-graphs-docs/lib/example-datasets/popup';\n\nconst data = {\n  key: 'grouped_bar_3',\n  label: {\n    display: 'Dataset 3',\n  },\n  color: Carbon.helpers.COLORS.BLUE,\n  onClick: loadBarPopup,\n  values: [\n    {\n      x: 1,\n      y: 15,\n    },\n    {\n      x: 2,\n      y: 10,\n    },\n    {\n      x: 3,\n      y: 13,\n    },\n    {\n      x: 4,\n      y: 8,\n    },\n  ],\n};\n\nexport default data;\n\n")))}E.isMDXComponent=!0;var L=["components"];function k(){return k=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},k.apply(this,arguments)}function B(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}n(78704);var _={},T="wrapper";function S(e){var t=e.components,n=B(e,L);return(0,r.mdx)(T,k({},_,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"grouped-bar-graph"},"Grouped Bar Graph"),(0,r.mdx)("p",null,"This is the graph with multiple bar contents grouped together."),(0,r.mdx)("h2",{id:"getting-started"},"Getting Started"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Install with ",(0,r.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"npm i @cerner/carbon-graphs --save-dev"))))),(0,r.mdx)("h2",{id:"usage"},"Usage"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},"import Carbon from '@cerner/carbon-graphs/dist/js/carbon-graphs.js';\nimport '@cerner/carbon-graphs/dist/css/carbon-graphs.css';\n")),(0,r.mdx)("h2",{id:"examples"},"Examples"),(0,r.mdx)(f,{mdxType:"BarGraph"}),(0,r.mdx)("details",null,(0,r.mdx)("summary",{style:{fontSize:24}},(0,r.mdx)("b",null,"Data")),(0,r.mdx)("h3",{id:"graph-config-object"},"Graph Config object"),(0,r.mdx)(m.c,{mdxType:"GraphConfig"}),(0,r.mdx)("h3",{id:"data-object"},"Data object"),(0,r.mdx)("h4",{id:"dataset-1"},"Dataset 1"),(0,r.mdx)(b.c,{mdxType:"DataObject1"}),(0,r.mdx)("h4",{id:"dataset-2"},"Dataset 2"),(0,r.mdx)(O,{mdxType:"DataObject2"}),(0,r.mdx)("h4",{id:"dataset-3"},"Dataset 3"),(0,r.mdx)(E,{mdxType:"DataObject3"})))}S.isMDXComponent=!0},79600:function(e,t,n){"use strict";n.d(t,{c:function(){return s}});n(11504);var a=n(69788),r=["components"];function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o.apply(this,arguments)}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p={},i="wrapper";function s(e){var t=e.components,n=l(e,r);return(0,a.mdx)(i,o({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport { loadBarPopup } from '@cerner/terra-graphs-docs/lib/example-datasets/popup';\n\nconst data = {\n  key: 'dataset_bar_1',\n  label: {\n    display: 'Dataset 1',\n  },\n  color: Carbon.helpers.COLORS.LIGHT_PURPLE,\n  onClick: loadBarPopup,\n  values: [\n    {\n      x: 1,\n      y: 10,\n    },\n    {\n      x: 2,\n      y: 15,\n    },\n    {\n      x: 3,\n      y: 18,\n    },\n    {\n      x: 4,\n      y: 6,\n    },\n    {\n      x: 6,\n      y: 10,\n    },\n  ],\n};\n\nexport default data;\n\n")))}s.isMDXComponent=!0},31840:function(e,t,n){"use strict";n.d(t,{c:function(){return s}});n(11504);var a=n(69788),r=["components"];function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o.apply(this,arguments)}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p={},i="wrapper";function s(e){var t=e.components,n=l(e,r);return(0,a.mdx)(i,o({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-js"},"const getbarConfig = (id) => ({\n  bindTo: id,\n  bindLegendTo: null,\n  axis: {\n    x: {\n      show: true,\n      label: 'Data',\n      lowerLimit: 0,\n      upperLimit: 8,\n      ticks: {\n        values: [1, 2, 3, 4, 5, 6, 7],\n        format: '.0f',\n      },\n    },\n    y: {\n      show: true,\n      label: 'Bar Set A',\n      lowerLimit: 0,\n      upperLimit: 35,\n    },\n    y2: {\n      show: false,\n      label: 'Bar Set B',\n      lowerLimit: 0,\n      upperLimit: 30,\n    },\n  },\n  showLabel: true,\n  showLegend: true,\n  showShapes: true,\n  showVGrid: false,\n  showHGrid: true,\n});\n\nexport default getbarConfig;\n\n\n")))}s.isMDXComponent=!0},78704:function(e,t,n){var a,r;void 0===(r="function"==typeof(a=function(){var e="details",t="summary";function n(e){if("summary"===e.target.nodeName.toLowerCase()){var t=e.target.parentNode;if(!t)return;t.getAttribute("open")?(t.open=!1,t.removeAttribute("open")):(t.open=!0,t.setAttribute("open","open"))}}function a(){var n=document.createElement(e);if(!("open"in n))return!1;n.innerHTML="<"+t+">a</"+t+">b",document.body.appendChild(n);var a=n.offsetHeight;n.open=!0;var r=a!=n.offsetHeight;return document.body.removeChild(n),r}function r(e,t){if(!document.getElementById(e)){var n=document.createElement("style");n.id=e,n.innerHTML=t,document.getElementsByTagName("head")[0].appendChild(n)}}a()||(document.documentElement.className+=" no-details",window.addEventListener("click",n),r("details-polyfill-style","html.no-details "+e+" { display: block; }\nhtml.no-details "+e+":not([open]) > :not("+t+") { display: none; }\nhtml.no-details "+e+" > "+t+':before { content: "▶"; display: inline-block; font-size: .8em; width: 1.5em; }\nhtml.no-details '+e+"[open] > "+t+':before { content: "▼"; }'))})?a.call(t,n,t,e):a)||(e.exports=r)},57732:function(e,t,n){"use strict";n.r(t),t.default={}}}]);