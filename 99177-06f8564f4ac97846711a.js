(self.webpackChunkterra_ui=self.webpackChunkterra_ui||[]).push([[99177],{54341:function(e,n,t){"use strict";var a=t(24994);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=a(t(39139)),o=t(86006),l={key:"paired_result_region_dataset_1",label:{high:{display:"Dataset_1_High"},mid:{display:"Dataset_1_Median"},low:{display:"Dataset_1_Low"}},shape:{high:r.default.helpers.SHAPES.DARK.TEAR_ALT,mid:r.default.helpers.SHAPES.DARK.RHOMBUS,low:r.default.helpers.SHAPES.DARK.TEAR_DROP},color:{high:r.default.helpers.COLORS.BLACK,mid:r.default.helpers.COLORS.BLUE,low:r.default.helpers.COLORS.BLACK},onClick:o.loadPopup,regions:{high:[{axis:"y",start:120,end:170,color:"#c8cacb"}],low:[{axis:"y",start:20,end:100}]},values:[{high:{x:"2016-05-01T12:00:00Z",y:150,isCritical:!1},mid:{x:"2016-05-01T12:00:00Z",y:40},low:{x:"2016-05-01T12:00:00Z",y:10,isCritical:!1}},{high:{x:"2016-08-17T12:00:00Z",y:110},mid:{x:"2016-08-17T12:00:00Z",y:70},low:{x:"2016-08-17T12:00:00Z",y:30}},{high:{x:"2016-10-17T12:00:00Z",y:160},mid:{x:"2016-10-17T12:00:00Z",y:120},low:{x:"2016-10-17T12:00:00Z",y:100}},{high:{x:"2017-03-17T12:00:00Z",y:190},mid:{x:"2017-03-17T12:00:00Z",y:90},low:{x:"2017-03-17T12:00:00Z",y:60}},{low:{x:"2017-07-17T12:00:00Z",y:10}},{high:{x:"2018-02-17T12:00:00Z",y:180}}]};n.default=l},8252:function(e,n,t){"use strict";var a=t(24994);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=a(t(39139)),o=t(86006),l={key:"paired_result_region_dataset_2",label:{high:{display:"Dataset_2_High"},mid:{display:"Dataset_2_Median"},low:{display:"Dataset_2_Low"}},shape:{high:r.default.helpers.SHAPES.DARK.TRIANGLE,mid:r.default.helpers.SHAPES.DARK.SQUARE,low:r.default.helpers.SHAPES.DARK.TRIANGLE_DOWN},color:{high:r.default.helpers.COLORS.BLACK,mid:r.default.helpers.COLORS.ORANGE,low:r.default.helpers.COLORS.BLACK},onClick:o.loadPopup,yAxis:"y2",regions:{high:[{axis:"y2",start:210,end:280,color:"#c8cacb"}],low:[{axis:"y2",start:175,end:200}]},values:[{high:{x:"2017-05-01T11:00:00Z",y:300},mid:{x:"2017-05-01T11:00:00Z",y:250},low:{x:"2017-05-01T11:00:00Z",y:175}},{high:{x:"2017-08-17T13:00:00Z",y:300},mid:{x:"2017-08-17T13:00:00Z",y:170},low:{x:"2017-08-17T13:00:00Z",y:130}},{high:{x:"2017-10-17T15:00:00Z",y:250},mid:{x:"2017-10-17T15:00:00Z",y:220},low:{x:"2017-10-17T15:00:00Z",y:200}}]};n.default=l},43872:function(e,n,t){"use strict";var a=t(24994);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=a(t(39139));n.default=function(e){return{bindTo:e,axis:{x:{type:r.default.helpers.AXIS_TYPE.TIME_SERIES,label:"Datetime",lowerLimit:"2016-03-02T12:00:00Z",upperLimit:"2018-12-10T12:00:00Z",ticks:{format:"%b %Y"}},y:{label:"Paired Set A",lowerLimit:0,upperLimit:200},y2:{show:!0,label:"Paired Set B",lowerLimit:100,upperLimit:350}},showLabel:!0,showLegend:!0,showVGrid:!0,showHGrid:!0}}},86006:function(e,n,t){"use strict";var a=t(24994),r=t(73738);Object.defineProperty(n,"__esModule",{value:!0}),n.loadY2AxisLabelPopup=n.loadXAndYAxisLabelPopup=n.loadTrackPopup=n.loadTimelinePopup=n.loadTextLabelPopup=n.loadTaskPopup=n.loadPopup=n.loadPiePopup=n.loadDatelinePopup=n.loadBubblePopup=n.loadBarPopup=void 0;var o=a(t(85715)),l=function(e,n){if(!n&&e&&e.__esModule)return e;if(null===e||"object"!=r(e)&&"function"!=typeof e)return{default:e};var t=s(n);if(t&&t.has(e))return t.get(e);var a={__proto__:null},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var i=o?Object.getOwnPropertyDescriptor(e,l):null;i&&(i.get||i.set)?Object.defineProperty(a,l,i):a[l]=e[l]}return a.default=e,t&&t.set(e,a),a}(t(37332)),i=a(t(22639)),p=a(t(45839));function s(e){if("function"!=typeof WeakMap)return null;var n=new WeakMap,t=new WeakMap;return(s=function(e){return e?t:n})(e)}var d=function(e){return new Date(e).toLocaleString()},c=function(e){return e?u(e)?d(e):e:null},u=function(e){return e instanceof Date},m=function(e,n,t){var a=e.append("g").classed("popup-item",!0);a.append("label").classed("popup-label",!0).text(n),a.append("g").classed("popup-text",!0).text(t)},f=function(e,n,t){var a=e.append("g").classed("popup-item",!0);a.append("label").classed("popup-label",!0).text(n);for(var r=a.append("g").classed("section",!0),l=function(){var e=p[i],n=r.append("g").classed("content",!0);Object.entries(e).forEach((function(e){var t=(0,o.default)(e,2),a=t[0],r=t[1],l=n.append("g").classed("popup-item",!0);l.append("label").classed("popup-label",!0).text(a.replace(/([a-z0-9])([A-Z])/g,"$1 $2").replace(/(\b[a-z](?!\s))/g,(function(e){return e.toUpperCase()}))),l.append("g").classed("popup-text",!0).text(r)}))},i=0,p=Object.values(t);i<p.length;i++)l()},h=function(e){var n=document.querySelector("#tooltip");return l.select("body").append("div","#tooltip").attr("id","overlay").classed("overlay",!0).on("click",(function t(){l.select(n).attr("style","display:none;").selectAll("g").remove(),p.default.isFunction(e)&&e(),l.select("#overlay").remove(),n.removeEventListener("click",t),window.removeEventListener("resize",t)})),l.select("#tooltip").style("left","".concat(l.event.pageX+5,"px")).style("top","".concat(l.event.pageY+5,"px"))},y=function(){l.select("#overlay").remove(),document.getElementsByClassName("initial-tooltip")[0]&&(document.getElementsByClassName("initial-tooltip")[0].className="tooltip"),l.select("#tooltip").attr("style","").selectAll("g").remove()};n.loadPopup=function(e,n,t,a){y();var r=h(e).append("g"),o=a.x,l=a.y,i=a.label,p=a.high,s=a.mid,f=a.low;o?(m(r,"X axis","".concat(u(o)?d(o):o)),m(r,"".concat(i.display),l)):(m(r,"X axis","".concat(p?c(p.x):s?c(s.x):f?c(f.x):"N/A")),p&&m(r,"High",c(p.y)),s&&m(r,"Mid",c(s.y)),f&&m(r,"Low",c(f.y)))},n.loadBubblePopup=function(e,n,t,a){y();var r=h(e).append("g"),o=a.x,l=a.y,i=a.label,p=a.weight;o&&(m(r,"X axis","".concat(u(o)?d(o):o)),m(r,"year",l)),p&&m(r,"".concat(i.display),"".concat(p))},n.loadBarPopup=function(e,n,t,a){y();var r=h(e).append("g");a.forEach((function(e){return m(r,"".concat(e.label.display),"".concat(e.y))}))},n.loadTextLabelPopup=function(e,n,t){y();var a=h(e).append("g").classed("popup-item",!0).append("g").attr("style","display: inline-block;"),r=n.shape,o=n.label,l=n.color;p.default.notEmpty(r)&&a.append("svg").attr("width","15").attr("height","12").append("path").attr("transform","translate(".concat(0,", ",0,") scale(",r.options.scale,")")).attr("d",r.path.d).attr("fill",r.path.fill||i.default.DEFAULT_COLOR).attr("id",r.path.id),o.display&&a.append("text").classed("popup-text",!0).attr("style","color: ".concat(l,";")).text("".concat(o.display)),o.secondaryDisplay&&a.append("tspan").attr("style","color: ".concat(i.default.DEFAULT_COLOR,";")).text(" ".concat(o.secondaryDisplay))},n.loadXAndYAxisLabelPopup=function(e){y(),h().append("g").append("g").classed("popup-item",!0).append("g").classed("popup-text",!0).text(e)},n.loadY2AxisLabelPopup=function(e){var n,t;y(),(t=document.querySelector("#tooltip"),l.select("body").append("div","#tooltip").attr("id","overlay").classed("overlay",!0).on("click",(function e(){l.select(t).attr("style","display:none;").selectAll("g").remove(),p.default.isFunction(n)&&n(),l.select("#overlay").remove(),t.removeEventListener("click",e),window.removeEventListener("resize",e)})),l.select("#tooltip").style("left","".concat(l.event.pageX-250,"px")).style("top","".concat(l.event.pageY+5,"px"))).append("g").append("g").classed("popup-item",!0).append("g").classed("popup-text",!0).text(e)},n.loadTrackPopup=function(e,n,t){y();var a=h(e).append("g"),r=t.tasks,o=t.activities,l=t.events,i=t.actions;if(r&&r.length>0){var p=[];p.forEach((function(e){p.push({name:e.key,startDate:e.startDate,endDate:e.endDate})})),f(a,"Tasks",p)}if(o&&o.length>0){var s=[];o.forEach((function(e){s.push({name:e.key,startDate:e.startDate,endDate:e.endDate})})),f(a,"Activities",s)}if(l&&l.length>0){var d=[];l.forEach((function(e){d.push({name:e.key,values:e.values.join(", ")})})),f(a,"Events",d)}if(i&&i.length>0){var c=[];i.forEach((function(e){c.push({name:e.key,values:e.values.join(", ")})})),f(a,"Actions",c)}},n.loadTaskPopup=function(e,n,t,a){y();var r=h(e).append("g"),o=a.label,l=a.display,i=a.y,p=a.startDate,s=a.endDate,c=a.percentage;o&&m(r,"Task Name",l),m(r,"Track",i),m(r,"Start Date",d(p)),m(r,"End Date",d(s)),c&&m(r,"Percentage",c)},n.loadDatelinePopup=function(e,n){y();var t=h(e).append("g"),a=n.label,r=n.value;a&&m(t,"Milestone",a.display),m(t,"Date",d(r))},n.loadTimelinePopup=function(e,n,t,a){y();var r=h(e).append("g"),o=a.x,l=(a.y,a.label),i=a.content;m(r,"X axis","".concat(u(o)?d(o):o)),m(r,"".concat(l.display),i)},n.loadPiePopup=function(e,n,t,a){y();var r=h(e).append("g"),o=a.label,l=a.value;m(r,o.display,l)}},29683:function(e,n,t){"use strict";var a=t(24994);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=a(t(96540)),o=a(t(5556));t(16939);var l={id:o.default.string.isRequired},i=function(e){return r.default.createElement(r.default.Fragment,null,r.default.createElement("div",{id:"tooltip",className:"initial-tooltip"}),r.default.createElement("div",{id:e.id,className:"example-graph-container"}))};i.propTypes=l;n.default=i},26297:function(e,n,t){"use strict";var a=t(24994);n.A=void 0;var r=a(t(96540)),o=a(t(39139)),l=a(t(45839));t(14388),t(63841);var i=a(t(29683)),p=a(t(43872)),s=a(t(54341)),d=a(t(8252)),c=l.default.deepClone((0,p.default)("#timeseriesPairedResultGraph")),u=[l.default.deepClone(s.default),l.default.deepClone(d.default)];n.A=function(){return r.default.useEffect((function(){var e=o.default.api.graph(c);u.forEach((function(n){e.loadContent(o.default.api.pairedResult(n))}))}),[]),r.default.createElement(i.default,{id:"timeseriesPairedResultGraph"})}},99177:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return _}});var a=t(96540),r=t(36665),o=t(26297),l=["components"];function i(){return i=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},i.apply(this,arguments)}function p(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s={};function d(e){var n=e.components,t=p(e,l);return(0,r.mdx)("wrapper",i({},s,t,{components:n,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport utils from '@cerner/carbon-graphs/lib/js/helpers/utils';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Graph.module.scss';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/PairedResult/PairedResultGraph.module.scss';\nimport ExampleGraphContainer from '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer';\nimport pairedResultTimeseries from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/PairedResult/pairedResultTimeseriesWithY2Axis';\nimport dataset1 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/PairedResult/pairedResultRegionDataset1';\nimport dataset2 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/PairedResult/pairedResultRegionDataset2';\n\n/*\nPlease refer to the documentation below to see the graphConfig and data objects\n*/\nconst graphConfig = utils.deepClone(pairedResultTimeseries('#timeseriesPairedResultGraph'));\nconst dataset = [utils.deepClone(dataset1), utils.deepClone(dataset2)];\n\nconst MultipleRegionPiaredResultExample = () => {\n  React.useEffect(() => {\n    const graph = Carbon.api.graph(graphConfig);\n    dataset.forEach((data) => {\n      graph.loadContent(Carbon.api.pairedResult(data));\n    });\n  }, []);\n  return (\n    <ExampleGraphContainer id=\"timeseriesPairedResultGraph\" />\n  );\n};\n\nexport default MultipleRegionPiaredResultExample;\n\n")))}d.isMDXComponent=!0;var c=t(201),u=t(10502),m=function(e){var n=e.title,t=e.description,r=e.isExpanded;return a.createElement(c.A,{title:n||"Multiple Paired Result",description:t,example:a.createElement(o.A,null),exampleCssSrc:a.createElement(u.A,null),exampleSrc:a.createElement(d,null),isExpanded:r})},f=t(33265),h=["components"];function y(){return y=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},y.apply(this,arguments)}function g(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var b={},x="wrapper";function v(e){var n=e.components,t=g(e,h);return(0,r.mdx)(x,y({},b,t,{components:n,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport {\n  loadPopup,\n} from '@cerner/terra-graphs-docs/lib/example-datasets/popup';\n\nconst data = {\n  key: 'paired_result_region_dataset_1',\n  label: {\n    high: {\n      display: 'Dataset_1_High',\n    },\n    mid: {\n      display: 'Dataset_1_Median',\n    },\n    low: {\n      display: 'Dataset_1_Low',\n    },\n  },\n  shape: {\n    high: Carbon.helpers.SHAPES.DARK.TEAR_ALT,\n    mid: Carbon.helpers.SHAPES.DARK.RHOMBUS,\n    low: Carbon.helpers.SHAPES.DARK.TEAR_DROP,\n  },\n  color: {\n    high: Carbon.helpers.COLORS.BLACK,\n    mid: Carbon.helpers.COLORS.BLUE,\n    low: Carbon.helpers.COLORS.BLACK,\n  },\n  onClick: loadPopup,\n  regions: {\n    high: [\n      {\n        axis: 'y',\n        start: 120,\n        end: 170,\n        color: '#c8cacb',\n      },\n    ],\n    low: [\n      {\n        axis: 'y',\n        start: 20,\n        end: 100,\n      },\n    ],\n  },\n  values: [\n    {\n      high: {\n        x: '2016-05-01T12:00:00Z',\n        y: 150,\n        isCritical: false,\n      },\n      mid: {\n        x: '2016-05-01T12:00:00Z',\n        y: 40,\n      },\n      low: {\n        x: '2016-05-01T12:00:00Z',\n        y: 10,\n        isCritical: false,\n      },\n    },\n    {\n      high: {\n        x: '2016-08-17T12:00:00Z',\n        y: 110,\n      },\n      mid: {\n        x: '2016-08-17T12:00:00Z',\n        y: 70,\n      },\n      low: {\n        x: '2016-08-17T12:00:00Z',\n        y: 30,\n      },\n    },\n    {\n      high: {\n        x: '2016-10-17T12:00:00Z',\n        y: 160,\n      },\n      mid: {\n        x: '2016-10-17T12:00:00Z',\n        y: 120,\n      },\n      low: {\n        x: '2016-10-17T12:00:00Z',\n        y: 100,\n      },\n    },\n    {\n      high: {\n        x: '2017-03-17T12:00:00Z',\n        y: 190,\n      },\n      mid: {\n        x: '2017-03-17T12:00:00Z',\n        y: 90,\n      },\n      low: {\n        x: '2017-03-17T12:00:00Z',\n        y: 60,\n      },\n    },\n    {\n      low: {\n        x: '2017-07-17T12:00:00Z',\n        y: 10,\n      },\n    },\n    {\n      high: {\n        x: '2018-02-17T12:00:00Z',\n        y: 180,\n      },\n    },\n  ],\n};\n\nexport default data;\n\n")))}v.isMDXComponent=!0;var O=["components"];function w(){return w=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},w.apply(this,arguments)}function T(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var P={},C="wrapper";function E(e){var n=e.components,t=T(e,O);return(0,r.mdx)(C,w({},P,t,{components:n,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport {\n  loadPopup,\n} from '@cerner/terra-graphs-docs/lib/example-datasets/popup';\n\nconst data = {\n  key: 'paired_result_region_dataset_2',\n  label: {\n    high: {\n      display: 'Dataset_2_High',\n    },\n    mid: {\n      display: 'Dataset_2_Median',\n    },\n    low: {\n      display: 'Dataset_2_Low',\n    },\n  },\n  shape: {\n    high: Carbon.helpers.SHAPES.DARK.TRIANGLE,\n    mid: Carbon.helpers.SHAPES.DARK.SQUARE,\n    low: Carbon.helpers.SHAPES.DARK.TRIANGLE_DOWN,\n  },\n  color: {\n    high: Carbon.helpers.COLORS.BLACK,\n    mid: Carbon.helpers.COLORS.ORANGE,\n    low: Carbon.helpers.COLORS.BLACK,\n  },\n  onClick: loadPopup,\n  yAxis: 'y2',\n  regions: {\n    high: [\n      {\n        axis: 'y2',\n        start: 210,\n        end: 280,\n        color: '#c8cacb',\n      },\n    ],\n    low: [\n      {\n        axis: 'y2',\n        start: 175,\n        end: 200,\n      },\n    ],\n  },\n  values: [\n    {\n      high: {\n        x: '2017-05-01T11:00:00Z',\n        y: 300,\n      },\n      mid: {\n        x: '2017-05-01T11:00:00Z',\n        y: 250,\n      },\n      low: {\n        x: '2017-05-01T11:00:00Z',\n        y: 175,\n      },\n    },\n    {\n      high: {\n        x: '2017-08-17T13:00:00Z',\n        y: 300,\n      },\n      mid: {\n        x: '2017-08-17T13:00:00Z',\n        y: 170,\n      },\n      low: {\n        x: '2017-08-17T13:00:00Z',\n        y: 130,\n      },\n    },\n    {\n      high: {\n        x: '2017-10-17T15:00:00Z',\n        y: 250,\n      },\n      mid: {\n        x: '2017-10-17T15:00:00Z',\n        y: 220,\n      },\n      low: {\n        x: '2017-10-17T15:00:00Z',\n        y: 200,\n      },\n    },\n  ],\n};\n\nexport default data;\n\n")))}E.isMDXComponent=!0;var A=["components"];function R(){return R=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},R.apply(this,arguments)}function j(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}t(27647);var L={},D="wrapper";function _(e){var n=e.components,t=j(e,A);return(0,r.mdx)(D,R({},L,t,{components:n,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"multiple-region-paired-result-graph"},"Multiple Region Paired Result Graph"),(0,r.mdx)("p",null,"This is a multiple paired result graph associated with multiple regions.\nNOTE: Hover onto legend to see the region associated with each legend."),(0,r.mdx)("h2",{id:"getting-started"},"Getting Started"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Install with ",(0,r.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"npm i @cerner/carbon-graphs --save-dev"))))),(0,r.mdx)("h2",{id:"usage"},"Usage"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/dist/js/carbon-graphs.js';\nimport '@cerner/carbon-graphs/dist/css/carbon-graphs.css';\n")),(0,r.mdx)("h2",{id:"example"},"Example"),(0,r.mdx)(m,{mdxType:"PairedResultGraph"}),(0,r.mdx)("details",null,(0,r.mdx)("summary",{style:{fontSize:24}},(0,r.mdx)("b",null,"Data")),(0,r.mdx)("h3",{id:"graph-config-object"},"Graph Config object"),(0,r.mdx)(f.A,{mdxType:"GraphConfig"}),(0,r.mdx)("h3",{id:"data-object"},"Data object"),(0,r.mdx)("h4",{id:"dataset-1"},"Dataset 1"),(0,r.mdx)(v,{mdxType:"DataObject1"}),(0,r.mdx)("h4",{id:"dataset-2"},"Dataset 2"),(0,r.mdx)(E,{mdxType:"DataObject2"})))}_.isMDXComponent=!0},33265:function(e,n,t){"use strict";t.d(n,{A:function(){return s}});t(96540);var a=t(36665),r=["components"];function o(){return o=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},o.apply(this,arguments)}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i={},p="wrapper";function s(e){var n=e.components,t=l(e,r);return(0,a.mdx)(p,o({},i,t,{components:n,mdxType:"MDXLayout"}),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/lib/js/carbon';\n\nconst getPairedResultY2AxisTimeseriesConfig = (id) => ({\n  bindTo: id,\n  axis: {\n    x: {\n      type: Carbon.helpers.AXIS_TYPE.TIME_SERIES,\n      label: 'Datetime',\n      lowerLimit: '2016-03-02T12:00:00Z',\n      upperLimit: '2018-12-10T12:00:00Z',\n      ticks: {\n        format: '%b %Y',\n      },\n    },\n    y: {\n      label: 'Paired Set A',\n      lowerLimit: 0,\n      upperLimit: 200,\n    },\n    y2: {\n      show: true,\n      label: 'Paired Set B',\n      lowerLimit: 100,\n      upperLimit: 350,\n    },\n  },\n  showLabel: true,\n  showLegend: true,\n  showVGrid: true,\n  showHGrid: true,\n});\n\nexport default getPairedResultY2AxisTimeseriesConfig;\n\n")))}s.isMDXComponent=!0},27647:function(e,n,t){var a,r;void 0===(r="function"==typeof(a=function(){var e="details",n="summary";function t(e){if("summary"===e.target.nodeName.toLowerCase()){var n=e.target.parentNode;if(!n)return;n.getAttribute("open")?(n.open=!1,n.removeAttribute("open")):(n.open=!0,n.setAttribute("open","open"))}}function a(){var t=document.createElement(e);if(!("open"in t))return!1;t.innerHTML="<"+n+">a</"+n+">b",document.body.appendChild(t);var a=t.offsetHeight;t.open=!0;var r=a!=t.offsetHeight;return document.body.removeChild(t),r}function r(e,n){if(!document.getElementById(e)){var t=document.createElement("style");t.id=e,t.innerHTML=n,document.getElementsByTagName("head")[0].appendChild(t)}}a()||(document.documentElement.className+=" no-details",window.addEventListener("click",t),r("details-polyfill-style","html.no-details "+e+" { display: block; }\nhtml.no-details "+e+":not([open]) > :not("+n+") { display: none; }\nhtml.no-details "+e+" > "+n+':before { content: "▶"; display: inline-block; font-size: .8em; width: 1.5em; }\nhtml.no-details '+e+"[open] > "+n+':before { content: "▼"; }'))})?a.call(n,t,n,e):a)||(e.exports=r)},63841:function(e,n,t){"use strict";t.r(n),n.default={}}}]);