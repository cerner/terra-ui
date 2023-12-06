(self.webpackChunkterra_ui=self.webpackChunkterra_ui||[]).push([[68793],{22362:function(e,t,n){"use strict";var a=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(54520)),i=n(22678),l={key:"paired_result_critical_dataset_1",label:{high:{display:"Dataset_1_High"},mid:{display:"Dataset_1_Median"},low:{display:"Dataset_1_Low"}},shape:{high:r.default.helpers.SHAPES.DARK.TEAR_ALT,mid:r.default.helpers.SHAPES.DARK.RHOMBUS,low:r.default.helpers.SHAPES.DARK.TEAR_DROP},color:{high:r.default.helpers.COLORS.BLACK,mid:r.default.helpers.COLORS.BLUE,low:r.default.helpers.COLORS.BLACK},onClick:i.loadPopup,values:[{high:{x:"2016-05-01T12:00:00Z",y:150,isCritical:!1},mid:{x:"2016-05-01T12:00:00Z",y:40},low:{x:"2016-05-01T12:00:00Z",y:10,isCritical:!0}},{high:{x:"2016-08-17T12:00:00Z",y:110},mid:{x:"2016-08-17T12:00:00Z",y:70},low:{x:"2016-08-17T12:00:00Z",y:30}},{high:{x:"2016-10-17T12:00:00Z",y:160},mid:{x:"2016-10-17T12:00:00Z",y:120},low:{x:"2016-10-17T12:00:00Z",y:100}},{high:{x:"2017-03-17T12:00:00Z",y:190,isCritical:!0},mid:{x:"2017-03-17T12:00:00Z",y:90},low:{x:"2017-03-17T12:00:00Z",y:60,isCritical:!0}},{low:{x:"2017-07-17T12:00:00Z",y:10}},{high:{x:"2018-02-17T12:00:00Z",y:180}}]};t.default=l},66492:function(e,t,n){"use strict";var a=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(54520)),i=n(22678),l={key:"paired_result_critical_dataset_2",label:{high:{display:"Dataset_2_High"},mid:{display:"Dataset_2_Median"},low:{display:"Dataset_2_Low"}},shape:{high:r.default.helpers.SHAPES.DARK.TRIANGLE,mid:r.default.helpers.SHAPES.DARK.SQUARE,low:r.default.helpers.SHAPES.DARK.TRIANGLE_DOWN},color:{high:r.default.helpers.COLORS.BLACK,mid:r.default.helpers.COLORS.ORANGE,low:r.default.helpers.COLORS.BLACK},onClick:i.loadPopup,yAxis:"y2",values:[{high:{x:"2017-05-01T11:00:00Z",y:300},mid:{x:"2017-05-01T11:00:00Z",y:250},low:{x:"2017-05-01T11:00:00Z",y:175}},{high:{x:"2017-08-17T13:00:00Z",y:300,isCritical:!0},mid:{x:"2017-08-17T13:00:00Z",y:170,isCritical:!0},low:{x:"2017-08-17T13:00:00Z",y:130,isCritical:!0}},{high:{x:"2017-10-17T15:00:00Z",y:250},mid:{x:"2017-10-17T15:00:00Z",y:220},low:{x:"2017-10-17T15:00:00Z",y:200}}]};t.default=l},3663:function(e,t,n){"use strict";var a=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(54520));t.default=function(e){return{bindTo:e,axis:{x:{type:r.default.helpers.AXIS_TYPE.TIME_SERIES,label:"Datetime",lowerLimit:"2016-03-02T12:00:00Z",upperLimit:"2018-12-10T12:00:00Z",ticks:{format:"%b %Y"}},y:{label:"Paired Set A",lowerLimit:0,upperLimit:200},y2:{show:!1,label:"Paired Set B",lowerLimit:100,upperLimit:350}},showLabel:!0,showLegend:!0,showVGrid:!0,showHGrid:!0}}},98058:function(e,t,n){"use strict";var a=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(54520));t.default=function(e){return{bindTo:e,axis:{x:{type:r.default.helpers.AXIS_TYPE.TIME_SERIES,label:"Datetime",lowerLimit:"2016-03-02T12:00:00Z",upperLimit:"2018-12-10T12:00:00Z",ticks:{format:"%b %Y"}},y:{label:"Paired Set A",lowerLimit:0,upperLimit:200},y2:{show:!0,label:"Paired Set B",lowerLimit:100,upperLimit:350}},showLabel:!0,showLegend:!0,showVGrid:!0,showHGrid:!0}}},22678:function(e,t,n){"use strict";var a=n(64836),r=n(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.loadY2AxisLabelPopup=t.loadXAndYAxisLabelPopup=t.loadTrackPopup=t.loadTimelinePopup=t.loadTextLabelPopup=t.loadTaskPopup=t.loadPopup=t.loadPiePopup=t.loadDatelinePopup=t.loadBubblePopup=t.loadBarPopup=void 0;var i=a(n(27424)),l=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=r(e)&&"function"!=typeof e)return{default:e};var n=s(t);if(n&&n.has(e))return n.get(e);var a={__proto__:null},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var o=i?Object.getOwnPropertyDescriptor(e,l):null;o&&(o.get||o.set)?Object.defineProperty(a,l,o):a[l]=e[l]}return a.default=e,n&&n.set(e,a),a}(n(79590)),o=a(n(88703)),p=a(n(53334));function s(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(s=function(e){return e?n:t})(e)}var d=function(e){return new Date(e).toLocaleString()},c=function(e){return e?u(e)?d(e):e:null},u=function(e){return e instanceof Date},m=function(e,t,n){var a=e.append("g").classed("popup-item",!0);a.append("label").classed("popup-label",!0).text(t),a.append("g").classed("popup-text",!0).text(n)},f=function(e,t,n){var a=e.append("g").classed("popup-item",!0);a.append("label").classed("popup-label",!0).text(t);for(var r=a.append("g").classed("section",!0),l=function(){var e=p[o],t=r.append("g").classed("content",!0);Object.entries(e).forEach((function(e){var n=(0,i.default)(e,2),a=n[0],r=n[1],l=t.append("g").classed("popup-item",!0);l.append("label").classed("popup-label",!0).text(a.replace(/([a-z0-9])([A-Z])/g,"$1 $2").replace(/(\b[a-z](?!\s))/g,(function(e){return e.toUpperCase()}))),l.append("g").classed("popup-text",!0).text(r)}))},o=0,p=Object.values(n);o<p.length;o++)l()},h=function(e){var t=document.querySelector("#tooltip");return l.select("body").append("div","#tooltip").attr("id","overlay").classed("overlay",!0).on("click",(function n(){l.select(t).attr("style","display:none;").selectAll("g").remove(),p.default.isFunction(e)&&e(),l.select("#overlay").remove(),t.removeEventListener("click",n),window.removeEventListener("resize",n)})),l.select("#tooltip").style("left","".concat(l.event.pageX+5,"px")).style("top","".concat(l.event.pageY+5,"px"))},y=function(){l.select("#overlay").remove(),document.getElementsByClassName("initial-tooltip")[0]&&(document.getElementsByClassName("initial-tooltip")[0].className="tooltip"),l.select("#tooltip").attr("style","").selectAll("g").remove()};t.loadPopup=function(e,t,n,a){y();var r=h(e).append("g"),i=a.x,l=a.y,o=a.label,p=a.high,s=a.mid,f=a.low;i?(m(r,"X axis","".concat(u(i)?d(i):i)),m(r,"".concat(o.display),l)):(m(r,"X axis","".concat(p?c(p.x):s?c(s.x):f?c(f.x):"N/A")),p&&m(r,"High",c(p.y)),s&&m(r,"Mid",c(s.y)),f&&m(r,"Low",c(f.y)))},t.loadBubblePopup=function(e,t,n,a){y();var r=h(e).append("g"),i=a.x,l=a.y,o=a.label,p=a.weight;i&&(m(r,"X axis","".concat(u(i)?d(i):i)),m(r,"year",l)),p&&m(r,"".concat(o.display),"".concat(p))},t.loadBarPopup=function(e,t,n,a){y();var r=h(e).append("g");a.forEach((function(e){return m(r,"".concat(e.label.display),"".concat(e.y))}))},t.loadTextLabelPopup=function(e,t,n){y();var a=h(e).append("g").classed("popup-item",!0).append("g").attr("style","display: inline-block;"),r=t.shape,i=t.label,l=t.color;p.default.notEmpty(r)&&a.append("svg").attr("width","15").attr("height","12").append("path").attr("transform","translate(".concat(0,", ",0,") scale(",r.options.scale,")")).attr("d",r.path.d).attr("fill",r.path.fill||o.default.DEFAULT_COLOR).attr("id",r.path.id),i.display&&a.append("text").classed("popup-text",!0).attr("style","color: ".concat(l,";")).text("".concat(i.display)),i.secondaryDisplay&&a.append("tspan").attr("style","color: ".concat(o.default.DEFAULT_COLOR,";")).text(" ".concat(i.secondaryDisplay))},t.loadXAndYAxisLabelPopup=function(e){y(),h().append("g").append("g").classed("popup-item",!0).append("g").classed("popup-text",!0).text(e)},t.loadY2AxisLabelPopup=function(e){var t,n;y(),(n=document.querySelector("#tooltip"),l.select("body").append("div","#tooltip").attr("id","overlay").classed("overlay",!0).on("click",(function e(){l.select(n).attr("style","display:none;").selectAll("g").remove(),p.default.isFunction(t)&&t(),l.select("#overlay").remove(),n.removeEventListener("click",e),window.removeEventListener("resize",e)})),l.select("#tooltip").style("left","".concat(l.event.pageX-250,"px")).style("top","".concat(l.event.pageY+5,"px"))).append("g").append("g").classed("popup-item",!0).append("g").classed("popup-text",!0).text(e)},t.loadTrackPopup=function(e,t,n){y();var a=h(e).append("g"),r=n.tasks,i=n.activities,l=n.events,o=n.actions;if(r&&r.length>0){var p=[];p.forEach((function(e){p.push({name:e.key,startDate:e.startDate,endDate:e.endDate})})),f(a,"Tasks",p)}if(i&&i.length>0){var s=[];i.forEach((function(e){s.push({name:e.key,startDate:e.startDate,endDate:e.endDate})})),f(a,"Activities",s)}if(l&&l.length>0){var d=[];l.forEach((function(e){d.push({name:e.key,values:e.values.join(", ")})})),f(a,"Events",d)}if(o&&o.length>0){var c=[];o.forEach((function(e){c.push({name:e.key,values:e.values.join(", ")})})),f(a,"Actions",c)}},t.loadTaskPopup=function(e,t,n,a){y();var r=h(e).append("g"),i=a.label,l=a.display,o=a.y,p=a.startDate,s=a.endDate,c=a.percentage;i&&m(r,"Task Name",l),m(r,"Track",o),m(r,"Start Date",d(p)),m(r,"End Date",d(s)),c&&m(r,"Percentage",c)},t.loadDatelinePopup=function(e,t){y();var n=h(e).append("g"),a=t.label,r=t.value;a&&m(n,"Milestone",a.display),m(n,"Date",d(r))},t.loadTimelinePopup=function(e,t,n,a){y();var r=h(e).append("g"),i=a.x,l=(a.y,a.label),o=a.content;m(r,"X axis","".concat(u(i)?d(i):i)),m(r,"".concat(l.display),o)},t.loadPiePopup=function(e,t,n,a){y();var r=h(e).append("g"),i=a.label,l=a.value;m(r,i.display,l)}},93065:function(e,t,n){"use strict";var a=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(67294)),i=a(n(45697));n(80244);var l={id:i.default.string.isRequired},o=function(e){return r.default.createElement(r.default.Fragment,null,r.default.createElement("div",{id:"tooltip",className:"initial-tooltip"}),r.default.createElement("div",{id:e.id,className:"example-graph-container"}))};o.propTypes=l;t.default=o},58738:function(e,t,n){"use strict";var a=n(64836);t.Z=void 0;var r=a(n(67294)),i=a(n(54520)),l=a(n(53334));n(56867),n(379);var o=a(n(93065)),p=a(n(98058)),s=a(n(22362)),d=a(n(66492)),c=l.default.deepClone((0,p.default)("#multipleCriticalPairedResultGraph")),u=[l.default.deepClone(s.default),l.default.deepClone(d.default)];t.Z=function(){return r.default.useEffect((function(){var e=i.default.api.graph(c);u.forEach((function(t){e.loadContent(i.default.api.pairedResult(t))}))}),[]),r.default.createElement(o.default,{id:"multipleCriticalPairedResultGraph"})}},65182:function(e,t,n){"use strict";var a=n(64836);t.Z=void 0;var r=a(n(67294)),i=a(n(54520)),l=a(n(53334));n(56867),n(379);var o=a(n(93065)),p=a(n(3663)),s=a(n(22362)),d=l.default.deepClone((0,p.default)("#simplePairedResultGraph")),c=[l.default.deepClone(s.default)];t.Z=function(){return r.default.useEffect((function(){var e=i.default.api.graph(d);c.forEach((function(t){e.loadContent(i.default.api.pairedResult(t))}))}),[]),r.default.createElement(o.default,{id:"simplePairedResultGraph"})}},68793:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return X}});var a=n(67294),r=n(81254),i=n(65182),l=["components"];function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o.apply(this,arguments)}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s={};function d(e){var t=e.components,n=p(e,l);return(0,r.mdx)("wrapper",o({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport utils from '@cerner/carbon-graphs/lib/js/helpers/utils';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Graph.module.scss';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/PairedResult/PairedResultGraph.module.scss';\nimport ExampleGraphContainer from '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer';\nimport getPairedResultTimeseriesConfig from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/PairedResult/pairedResultTimeseries';\nimport exampleData from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/PairedResult/pairedResultCriticalDataset1';\n\n/*\nPlease refer to the documentation below to see the graphConfig and data objects\n*/\nconst graphConfig = utils.deepClone(getPairedResultTimeseriesConfig('#simplePairedResultGraph'));\nconst dataset = [utils.deepClone(exampleData)];\n\nconst SimpleCriticalPiaredResultExample = () => {\n  React.useEffect(() => {\n    const graph = Carbon.api.graph(graphConfig);\n    dataset.forEach((data) => {\n      graph.loadContent(Carbon.api.pairedResult(data));\n    });\n  }, []);\n  return (\n    <ExampleGraphContainer id=\"simplePairedResultGraph\" />\n  );\n};\n\nexport default SimpleCriticalPiaredResultExample;\n\n")))}d.isMDXComponent=!0;var c=n(49271),u=n(25005),m=function(e){var t=e.title,n=e.description,r=e.isExpanded;return a.createElement(c.Z,{title:t||"Simple Paired Result",description:n,example:a.createElement(i.Z,null),exampleCssSrc:a.createElement(u.Z,null),exampleSrc:a.createElement(d,null),isExpanded:r})},f=n(32910),h=["components"];function y(){return y=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},y.apply(this,arguments)}function g(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b={},x="wrapper";function v(e){var t=e.components,n=g(e,h);return(0,r.mdx)(x,y({},b,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport {\n  loadPopup,\n} from '@cerner/terra-graphs-docs/lib/example-datasets/popup';\n\nconst data = {\n  key: 'paired_result_critical_dataset_1',\n  label: {\n    high: {\n      display: 'Dataset_1_High',\n    },\n    mid: {\n      display: 'Dataset_1_Median',\n    },\n    low: {\n      display: 'Dataset_1_Low',\n    },\n  },\n  shape: {\n    high: Carbon.helpers.SHAPES.DARK.TEAR_ALT,\n    mid: Carbon.helpers.SHAPES.DARK.RHOMBUS,\n    low: Carbon.helpers.SHAPES.DARK.TEAR_DROP,\n  },\n  color: {\n    high: Carbon.helpers.COLORS.BLACK,\n    mid: Carbon.helpers.COLORS.BLUE,\n    low: Carbon.helpers.COLORS.BLACK,\n  },\n  onClick: loadPopup,\n  values: [\n    {\n      high: {\n        x: '2016-05-01T12:00:00Z',\n        y: 150,\n        isCritical: false,\n      },\n      mid: {\n        x: '2016-05-01T12:00:00Z',\n        y: 40,\n      },\n      low: {\n        x: '2016-05-01T12:00:00Z',\n        y: 10,\n        isCritical: true,\n      },\n    },\n    {\n      high: {\n        x: '2016-08-17T12:00:00Z',\n        y: 110,\n      },\n      mid: {\n        x: '2016-08-17T12:00:00Z',\n        y: 70,\n      },\n      low: {\n        x: '2016-08-17T12:00:00Z',\n        y: 30,\n      },\n    },\n    {\n      high: {\n        x: '2016-10-17T12:00:00Z',\n        y: 160,\n      },\n      mid: {\n        x: '2016-10-17T12:00:00Z',\n        y: 120,\n      },\n      low: {\n        x: '2016-10-17T12:00:00Z',\n        y: 100,\n      },\n    },\n    {\n      high: {\n        x: '2017-03-17T12:00:00Z',\n        y: 190,\n        isCritical: true,\n      },\n      mid: {\n        x: '2017-03-17T12:00:00Z',\n        y: 90,\n      },\n      low: {\n        x: '2017-03-17T12:00:00Z',\n        y: 60,\n        isCritical: true,\n      },\n    },\n    {\n      low: {\n        x: '2017-07-17T12:00:00Z',\n        y: 10,\n      },\n    },\n    {\n      high: {\n        x: '2018-02-17T12:00:00Z',\n        y: 180,\n      },\n    },\n  ],\n};\n\nexport default data;\n\n")))}v.isMDXComponent=!0;var C=n(58738),O=["components"];function P(){return P=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},P.apply(this,arguments)}function w(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var T={};function E(e){var t=e.components,n=w(e,O);return(0,r.mdx)("wrapper",P({},T,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport utils from '@cerner/carbon-graphs/lib/js/helpers/utils';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Graph.module.scss';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/PairedResult/PairedResultGraph.module.scss';\nimport ExampleGraphContainer from '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer';\nimport getPairedResultTimeseriesConfig from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/PairedResult/pairedResultTimeseriesWithY2Axis';\nimport dataset1 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/PairedResult/pairedResultCriticalDataset1';\nimport dataset2 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/PairedResult/pairedResultCriticalDataset2';\n\n/*\nPlease refer to the documentation below to see the graphConfig and data objects\n*/\nconst graphConfig = utils.deepClone(getPairedResultTimeseriesConfig('#multipleCriticalPairedResultGraph'));\nconst dataset = [utils.deepClone(dataset1), utils.deepClone(dataset2)];\n\nconst MultipleCriticalPiaredResultExample = () => {\n  React.useEffect(() => {\n    const graph = Carbon.api.graph(graphConfig);\n    dataset.forEach((data) => {\n      graph.loadContent(Carbon.api.pairedResult(data));\n    });\n  }, []);\n  return (\n    <ExampleGraphContainer id=\"multipleCriticalPairedResultGraph\" />\n  );\n};\n\nexport default MultipleCriticalPiaredResultExample;\n\n")))}E.isMDXComponent=!0;var j=function(e){var t=e.title,n=e.description,r=e.isExpanded;return a.createElement(c.Z,{title:t||"Multiple Paired Result",description:n,example:a.createElement(C.Z,null),exampleCssSrc:a.createElement(u.Z,null),exampleSrc:a.createElement(E,null),isExpanded:r})},R=n(6146),L=["components"];function S(){return S=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},S.apply(this,arguments)}function D(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var A={},_="wrapper";function Z(e){var t=e.components,n=D(e,L);return(0,r.mdx)(_,S({},A,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport {\n  loadPopup,\n} from '@cerner/terra-graphs-docs/lib/example-datasets/popup';\n\nconst data = {\n  key: 'paired_result_critical_dataset_2',\n  label: {\n    high: {\n      display: 'Dataset_2_High',\n    },\n    mid: {\n      display: 'Dataset_2_Median',\n    },\n    low: {\n      display: 'Dataset_2_Low',\n    },\n  },\n  shape: {\n    high: Carbon.helpers.SHAPES.DARK.TRIANGLE,\n    mid: Carbon.helpers.SHAPES.DARK.SQUARE,\n    low: Carbon.helpers.SHAPES.DARK.TRIANGLE_DOWN,\n  },\n  color: {\n    high: Carbon.helpers.COLORS.BLACK,\n    mid: Carbon.helpers.COLORS.ORANGE,\n    low: Carbon.helpers.COLORS.BLACK,\n  },\n  onClick: loadPopup,\n  yAxis: 'y2',\n  values: [\n    {\n      high: {\n        x: '2017-05-01T11:00:00Z',\n        y: 300,\n      },\n      mid: {\n        x: '2017-05-01T11:00:00Z',\n        y: 250,\n      },\n      low: {\n        x: '2017-05-01T11:00:00Z',\n        y: 175,\n      },\n    },\n    {\n      high: {\n        x: '2017-08-17T13:00:00Z',\n        y: 300,\n        isCritical: true,\n      },\n      mid: {\n        x: '2017-08-17T13:00:00Z',\n        y: 170,\n        isCritical: true,\n      },\n      low: {\n        x: '2017-08-17T13:00:00Z',\n        y: 130,\n        isCritical: true,\n      },\n    },\n    {\n      high: {\n        x: '2017-10-17T15:00:00Z',\n        y: 250,\n      },\n      mid: {\n        x: '2017-10-17T15:00:00Z',\n        y: 220,\n      },\n      low: {\n        x: '2017-10-17T15:00:00Z',\n        y: 200,\n      },\n    },\n  ],\n};\n\nexport default data;\n\n")))}Z.isMDXComponent=!0;var k=["components"];function M(){return M=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},M.apply(this,arguments)}function G(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}n(51320);var N={},H="wrapper";function X(e){var t=e.components,n=G(e,k);return(0,r.mdx)(H,M({},N,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"criticality"},"Criticality"),(0,r.mdx)("p",null,"Criticality consists of simple paired result graphs single dataset critical points and multiple dataset critical points(highlighted with red circle)."),(0,r.mdx)("h2",{id:"getting-started"},"Getting Started"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Install with ",(0,r.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"npm i @cerner/carbon-graphs --save-dev"))))),(0,r.mdx)("h2",{id:"usage"},"Usage"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/dist/js/carbon-graphs.js';\nimport '@cerner/carbon-graphs/dist/css/carbon-graphs.css';\n")),(0,r.mdx)("h2",{id:"examples"},"Examples"),(0,r.mdx)(m,{mdxType:"SimpleCriticalityPairedResultGraph"}),(0,r.mdx)("details",null,(0,r.mdx)("summary",{style:{fontSize:24}},(0,r.mdx)("b",null,"Data used for simple criticality")),(0,r.mdx)("h3",{id:"graph-config-object"},"Graph Config object"),(0,r.mdx)(f.Z,{mdxType:"SimpleCriticalityGraphConfig"}),(0,r.mdx)("h3",{id:"data-object"},"Data object"),(0,r.mdx)(v,{mdxType:"SimpleCriticalityDataObject"})),(0,r.mdx)("br",null),(0,r.mdx)(j,{mdxType:"MultiCriticalityPairedResultGraph"}),(0,r.mdx)("details",null,(0,r.mdx)("summary",{style:{fontSize:24}},(0,r.mdx)("b",null,"Data for multiple criticality")),(0,r.mdx)("h3",{id:"graph-config-object-1"},"Graph Config object"),(0,r.mdx)(R.Z,{mdxType:"MultiCriticalityGraphConfig"}),(0,r.mdx)("h3",{id:"data-object-1"},"Data object"),(0,r.mdx)("h4",{id:"dataset-1"},"Dataset 1"),(0,r.mdx)(v,{mdxType:"MultiCriticalityDataObject1"}),(0,r.mdx)("h4",{id:"dataset-2"},"Dataset 2"),(0,r.mdx)(Z,{mdxType:"MultiCriticalityDataObject2"})))}X.isMDXComponent=!0},32910:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});n(67294);var a=n(81254),r=["components"];function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},i.apply(this,arguments)}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o={},p="wrapper";function s(e){var t=e.components,n=l(e,r);return(0,a.mdx)(p,i({},o,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/lib/js/carbon';\n\nconst getPairedResultTimeseriesConfig = (id) => ({\n  bindTo: id,\n  axis: {\n    x: {\n      type: Carbon.helpers.AXIS_TYPE.TIME_SERIES,\n      label: 'Datetime',\n      lowerLimit: '2016-03-02T12:00:00Z',\n      upperLimit: '2018-12-10T12:00:00Z',\n      ticks: {\n        format: '%b %Y',\n      },\n    },\n    y: {\n      label: 'Paired Set A',\n      lowerLimit: 0,\n      upperLimit: 200,\n    },\n    y2: {\n      show: false,\n      label: 'Paired Set B',\n      lowerLimit: 100,\n      upperLimit: 350,\n    },\n  },\n  showLabel: true,\n  showLegend: true,\n  showVGrid: true,\n  showHGrid: true,\n});\n\nexport default getPairedResultTimeseriesConfig;\n\n")))}s.isMDXComponent=!0},6146:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});n(67294);var a=n(81254),r=["components"];function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},i.apply(this,arguments)}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o={},p="wrapper";function s(e){var t=e.components,n=l(e,r);return(0,a.mdx)(p,i({},o,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/lib/js/carbon';\n\nconst getPairedResultY2AxisTimeseriesConfig = (id) => ({\n  bindTo: id,\n  axis: {\n    x: {\n      type: Carbon.helpers.AXIS_TYPE.TIME_SERIES,\n      label: 'Datetime',\n      lowerLimit: '2016-03-02T12:00:00Z',\n      upperLimit: '2018-12-10T12:00:00Z',\n      ticks: {\n        format: '%b %Y',\n      },\n    },\n    y: {\n      label: 'Paired Set A',\n      lowerLimit: 0,\n      upperLimit: 200,\n    },\n    y2: {\n      show: true,\n      label: 'Paired Set B',\n      lowerLimit: 100,\n      upperLimit: 350,\n    },\n  },\n  showLabel: true,\n  showLegend: true,\n  showVGrid: true,\n  showHGrid: true,\n});\n\nexport default getPairedResultY2AxisTimeseriesConfig;\n\n")))}s.isMDXComponent=!0},51320:function(e,t,n){var a,r;void 0===(r="function"==typeof(a=function(){var e="details",t="summary";function n(e){if("summary"===e.target.nodeName.toLowerCase()){var t=e.target.parentNode;if(!t)return;t.getAttribute("open")?(t.open=!1,t.removeAttribute("open")):(t.open=!0,t.setAttribute("open","open"))}}function a(){var n=document.createElement(e);if(!("open"in n))return!1;n.innerHTML="<"+t+">a</"+t+">b",document.body.appendChild(n);var a=n.offsetHeight;n.open=!0;var r=a!=n.offsetHeight;return document.body.removeChild(n),r}function r(e,t){if(!document.getElementById(e)){var n=document.createElement("style");n.id=e,n.innerHTML=t,document.getElementsByTagName("head")[0].appendChild(n)}}a()||(document.documentElement.className+=" no-details",window.addEventListener("click",n),r("details-polyfill-style","html.no-details "+e+" { display: block; }\nhtml.no-details "+e+":not([open]) > :not("+t+") { display: none; }\nhtml.no-details "+e+" > "+t+':before { content: "▶"; display: inline-block; font-size: .8em; width: 1.5em; }\nhtml.no-details '+e+"[open] > "+t+':before { content: "▼"; }'))})?a.call(t,n,t,e):a)||(e.exports=r)},379:function(e,t,n){"use strict";n.r(t),t.default={}}}]);