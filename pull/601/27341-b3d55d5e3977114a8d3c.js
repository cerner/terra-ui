(self.webpackChunkterra_ui=self.webpackChunkterra_ui||[]).push([[27341],{84872:function(e,n,t){"use strict";var a=t(64836);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=a(t(54520)),o=t(22678),i={key:"uid_2",label:{display:"Data Label 2"},shape:r.default.helpers.SHAPES.DARK.RHOMBUS,color:r.default.helpers.COLORS.BLUE,onClick:o.loadPopup,yAxis:"y2",values:[{x:new Date(2016,0,1,1,5).toISOString(),y:0},{x:new Date(2016,0,1,2,15).toISOString(),y:50},{x:new Date(2016,0,1,3,15).toISOString(),y:60},{x:new Date(2016,0,1,4,15).toISOString(),y:80},{x:new Date(2016,0,1,5,15).toISOString(),y:120},{x:new Date(2016,0,1,6,15).toISOString(),y:130},{x:new Date(2016,0,1,7,0).toISOString(),y:180},{x:new Date(2016,0,1,8,15).toISOString(),y:185},{x:new Date(2016,0,1,9,45).toISOString(),y:200},{x:new Date(2016,0,1,12,15).toISOString(),y:220}]};n.default=i},81148:function(e,n,t){"use strict";var a=t(64836);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=a(t(54520));n.default=function(e){return{bindTo:e,axis:{x:{type:r.default.helpers.AXIS_TYPE.TIME_SERIES,label:"Datetime",lowerLimit:new Date(2016,0,1,1,0).toISOString(),upperLimit:new Date(2016,0,1,23,59).toISOString()},y:{label:"Line Set A",lowerLimit:10,upperLimit:30},y2:{show:!0,label:"Line Set B",lowerLimit:0,upperLimit:250}},pan:{enabled:!0},showLabel:!0,showLegend:!0,showShapes:!0,showVGrid:!0,showHGrid:!0}}},22678:function(e,n,t){"use strict";var a=t(64836),r=t(18698);Object.defineProperty(n,"__esModule",{value:!0}),n.loadY2AxisLabelPopup=n.loadXAndYAxisLabelPopup=n.loadTrackPopup=n.loadTimelinePopup=n.loadTextLabelPopup=n.loadTaskPopup=n.loadPopup=n.loadPiePopup=n.loadDatelinePopup=n.loadBubblePopup=n.loadBarPopup=void 0;var o=a(t(27424)),i=function(e,n){if(!n&&e&&e.__esModule)return e;if(null===e||"object"!=r(e)&&"function"!=typeof e)return{default:e};var t=s(n);if(t&&t.has(e))return t.get(e);var a={__proto__:null},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var l=o?Object.getOwnPropertyDescriptor(e,i):null;l&&(l.get||l.set)?Object.defineProperty(a,i,l):a[i]=e[i]}return a.default=e,t&&t.set(e,a),a}(t(79590)),l=a(t(88703)),p=a(t(53334));function s(e){if("function"!=typeof WeakMap)return null;var n=new WeakMap,t=new WeakMap;return(s=function(e){return e?t:n})(e)}var c=function(e){return new Date(e).toLocaleString()},u=function(e){return e?d(e)?c(e):e:null},d=function(e){return e instanceof Date},f=function(e,n,t){var a=e.append("g").classed("popup-item",!0);a.append("label").classed("popup-label",!0).text(n),a.append("g").classed("popup-text",!0).text(t)},m=function(e,n,t){var a=e.append("g").classed("popup-item",!0);a.append("label").classed("popup-label",!0).text(n);for(var r=a.append("g").classed("section",!0),i=function(){var e=p[l],n=r.append("g").classed("content",!0);Object.entries(e).forEach((function(e){var t=(0,o.default)(e,2),a=t[0],r=t[1],i=n.append("g").classed("popup-item",!0);i.append("label").classed("popup-label",!0).text(a.replace(/([a-z0-9])([A-Z])/g,"$1 $2").replace(/(\b[a-z](?!\s))/g,(function(e){return e.toUpperCase()}))),i.append("g").classed("popup-text",!0).text(r)}))},l=0,p=Object.values(t);l<p.length;l++)i()},g=function(e){var n=document.querySelector("#tooltip");return i.select("body").append("div","#tooltip").attr("id","overlay").classed("overlay",!0).on("click",(function t(){i.select(n).attr("style","display:none;").selectAll("g").remove(),p.default.isFunction(e)&&e(),i.select("#overlay").remove(),n.removeEventListener("click",t),window.removeEventListener("resize",t)})),i.select("#tooltip").style("left","".concat(i.event.pageX+5,"px")).style("top","".concat(i.event.pageY+5,"px"))},y=function(){i.select("#overlay").remove(),document.getElementsByClassName("initial-tooltip")[0]&&(document.getElementsByClassName("initial-tooltip")[0].className="tooltip"),i.select("#tooltip").attr("style","").selectAll("g").remove()};n.loadPopup=function(e,n,t,a){y();var r=g(e).append("g"),o=a.x,i=a.y,l=a.label,p=a.high,s=a.mid,m=a.low;o?(f(r,"X axis","".concat(d(o)?c(o):o)),f(r,"".concat(l.display),i)):(f(r,"X axis","".concat(p?u(p.x):s?u(s.x):m?u(m.x):"N/A")),p&&f(r,"High",u(p.y)),s&&f(r,"Mid",u(s.y)),m&&f(r,"Low",u(m.y)))},n.loadBubblePopup=function(e,n,t,a){y();var r=g(e).append("g"),o=a.x,i=a.y,l=a.label,p=a.weight;o&&(f(r,"X axis","".concat(d(o)?c(o):o)),f(r,"year",i)),p&&f(r,"".concat(l.display),"".concat(p))},n.loadBarPopup=function(e,n,t,a){y();var r=g(e).append("g");a.forEach((function(e){return f(r,"".concat(e.label.display),"".concat(e.y))}))},n.loadTextLabelPopup=function(e,n,t){y();var a=g(e).append("g").classed("popup-item",!0).append("g").attr("style","display: inline-block;"),r=n.shape,o=n.label,i=n.color;p.default.notEmpty(r)&&a.append("svg").attr("width","15").attr("height","12").append("path").attr("transform","translate(".concat(0,", ",0,") scale(",r.options.scale,")")).attr("d",r.path.d).attr("fill",r.path.fill||l.default.DEFAULT_COLOR).attr("id",r.path.id),o.display&&a.append("text").classed("popup-text",!0).attr("style","color: ".concat(i,";")).text("".concat(o.display)),o.secondaryDisplay&&a.append("tspan").attr("style","color: ".concat(l.default.DEFAULT_COLOR,";")).text(" ".concat(o.secondaryDisplay))},n.loadXAndYAxisLabelPopup=function(e){y(),g().append("g").append("g").classed("popup-item",!0).append("g").classed("popup-text",!0).text(e)},n.loadY2AxisLabelPopup=function(e){var n,t;y(),(t=document.querySelector("#tooltip"),i.select("body").append("div","#tooltip").attr("id","overlay").classed("overlay",!0).on("click",(function e(){i.select(t).attr("style","display:none;").selectAll("g").remove(),p.default.isFunction(n)&&n(),i.select("#overlay").remove(),t.removeEventListener("click",e),window.removeEventListener("resize",e)})),i.select("#tooltip").style("left","".concat(i.event.pageX-250,"px")).style("top","".concat(i.event.pageY+5,"px"))).append("g").append("g").classed("popup-item",!0).append("g").classed("popup-text",!0).text(e)},n.loadTrackPopup=function(e,n,t){y();var a=g(e).append("g"),r=t.tasks,o=t.activities,i=t.events,l=t.actions;if(r&&r.length>0){var p=[];p.forEach((function(e){p.push({name:e.key,startDate:e.startDate,endDate:e.endDate})})),m(a,"Tasks",p)}if(o&&o.length>0){var s=[];o.forEach((function(e){s.push({name:e.key,startDate:e.startDate,endDate:e.endDate})})),m(a,"Activities",s)}if(i&&i.length>0){var c=[];i.forEach((function(e){c.push({name:e.key,values:e.values.join(", ")})})),m(a,"Events",c)}if(l&&l.length>0){var u=[];l.forEach((function(e){u.push({name:e.key,values:e.values.join(", ")})})),m(a,"Actions",u)}},n.loadTaskPopup=function(e,n,t,a){y();var r=g(e).append("g"),o=a.label,i=a.display,l=a.y,p=a.startDate,s=a.endDate,u=a.percentage;o&&f(r,"Task Name",i),f(r,"Track",l),f(r,"Start Date",c(p)),f(r,"End Date",c(s)),u&&f(r,"Percentage",u)},n.loadDatelinePopup=function(e,n){y();var t=g(e).append("g"),a=n.label,r=n.value;a&&f(t,"Milestone",a.display),f(t,"Date",c(r))},n.loadTimelinePopup=function(e,n,t,a){y();var r=g(e).append("g"),o=a.x,i=(a.y,a.label),l=a.content;f(r,"X axis","".concat(d(o)?c(o):o)),f(r,"".concat(i.display),l)},n.loadPiePopup=function(e,n,t,a){y();var r=g(e).append("g"),o=a.label,i=a.value;f(r,o.display,i)}},93065:function(e,n,t){"use strict";var a=t(64836);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=a(t(67294)),o=a(t(45697));t(80244);var i={id:o.default.string.isRequired},l=function(e){return r.default.createElement(r.default.Fragment,null,r.default.createElement("div",{id:"tooltip",className:"initial-tooltip"}),r.default.createElement("div",{id:e.id,className:"example-graph-container"}))};l.propTypes=i;n.default=l},12868:function(e,n,t){"use strict";var a=t(64836);n.Z=void 0;var r=a(t(27424)),o=a(t(67294)),i=a(t(55281)),l=a(t(54520)),p=a(t(53334));t(56867),t(39003);var s,c=a(t(93065)),u=a(t(81148)),d=a(t(84872)),f=p.default.deepClone((0,u.default)("#linePanningExample")),m=p.default.deepClone(d.default),g={initial:0,factor:3};n.Z=function(){o.default.useEffect((function(){(s=l.default.api.graph(f)).loadContent(l.default.api.line(m))}),[]);var e=o.default.useReducer((function(e,n){var t;switch(n.type){case"panLeft":t=e.initial-e.factor;break;case"panRight":t=e.initial+e.factor;break;default:return e}return{initial:t,factor:e.factor}}),g),n=(0,r.default)(e,2),t=n[0],a=n[1];return o.default.useLayoutEffect((function(){s&&(s.config.axis.x.lowerLimit=new Date(2016,0,1,t.initial).toISOString(),s.config.axis.x.upperLimit=new Date(2016,0,2,t.initial).toISOString(),s.reflowMultipleDatasets())}),[t.initial]),o.default.createElement(o.default.Fragment,null,o.default.createElement(i.default,{className:"button-pan-left",text:"<",onClick:function(){return a({type:"panLeft"})}}),o.default.createElement(i.default,{className:"button-pan-right",text:">",onClick:function(){return a({type:"panRight"})}}),o.default.createElement(c.default,{id:"linePanningExample"}))}},27341:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return k}});var a=t(67294),r=t(81254),o=t(12868),i=["components"];function l(){return l=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},l.apply(this,arguments)}function p(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s={};function c(e){var n=e.components,t=p(e,i);return(0,r.mdx)("wrapper",l({},s,t,{components:n,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Button from 'terra-button/lib/Button';\nimport Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport utils from '@cerner/carbon-graphs/lib/js/helpers/utils';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Graph.module.scss';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Line/LineGraph.module.scss';\nimport ExampleGraphContainer from '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer';\nimport getConfigLineTimeseriesPanning from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Line/lineTimeseriesPanningY2';\nimport initialData from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Line/datasetTimeseries2';\n\n/*\nPlease refer to the documentation below to see the graphConfig and data objects\n*/\n\nconst graphConfig = utils.deepClone(getConfigLineTimeseriesPanning('#linePanningExample'));\nconst dataset = utils.deepClone(initialData);\nconst state = {\n  initial: 0,\n  factor: 3,\n};\n\nlet graph;\n\nconst Y2AxisLinePanningExample = () => {\n  React.useEffect(() => {\n    graph = Carbon.api.graph(graphConfig);\n    graph.loadContent(Carbon.api.line(dataset));\n  }, []);\n\n  const reducer = (panState, action) => {\n    let hour;\n\n    switch (action.type) {\n      case 'panLeft':\n        hour = panState.initial - panState.factor;\n        break;\n      case 'panRight':\n        hour = panState.initial + panState.factor;\n        break;\n      default:\n        return panState;\n    }\n\n    return {\n      initial: hour,\n      factor: panState.factor,\n    };\n  };\n\n  const [panState, dispatch] = React.useReducer(reducer, state);\n\n  React.useLayoutEffect(() => {\n    if (!graph) { return; }\n\n    graph.config.axis.x.lowerLimit = new Date(2016, 0, 1, panState.initial).toISOString();\n    graph.config.axis.x.upperLimit = new Date(2016, 0, 2, panState.initial).toISOString();\n\n    graph.reflowMultipleDatasets();\n  }, [panState.initial]);\n\n  return (\n    <>\n      <Button className=\"button-pan-left\" text=\"<\" onClick={() => dispatch({ type: 'panLeft' })} />\n      <Button className=\"button-pan-right\" text=\">\" onClick={() => dispatch({ type: 'panRight' })} />\n      <ExampleGraphContainer id=\"linePanningExample\" />\n    </>\n  );\n};\n\nexport default Y2AxisLinePanningExample;\n\n")))}c.isMDXComponent=!0;var u=t(49271),d=t(25005),f=function(e){var n=e.title,t=e.description,r=e.isExpanded;return a.createElement(u.Z,{title:n||"Y 2 Panning",description:t,example:a.createElement(o.Z,null),exampleCssSrc:a.createElement(d.Z,null),exampleSrc:a.createElement(c,null),isExpanded:r})},m=["components"];function g(){return g=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},g.apply(this,arguments)}function y(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var b={},x="wrapper";function h(e){var n=e.components,t=y(e,m);return(0,r.mdx)(x,g({},b,t,{components:n,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/lib/js/carbon';\n\nconst getConfigLineTimeseriesPanning = (id) => ({\n  bindTo: id,\n  axis: {\n    x: {\n      type: Carbon.helpers.AXIS_TYPE.TIME_SERIES,\n      label: 'Datetime',\n      lowerLimit: new Date(2016, 0, 1, 1, 0).toISOString(),\n      upperLimit: new Date(2016, 0, 1, 23, 59).toISOString(),\n    },\n    y: {\n      label: 'Line Set A',\n      lowerLimit: 10,\n      upperLimit: 30,\n    },\n    y2: {\n      show: true,\n      label: 'Line Set B',\n      lowerLimit: 0,\n      upperLimit: 250,\n    },\n  },\n  pan: {\n    enabled: true,\n  },\n  showLabel: true,\n  showLegend: true,\n  showShapes: true,\n  showVGrid: true,\n  showHGrid: true,\n});\n\nexport default getConfigLineTimeseriesPanning;\n\n")))}h.isMDXComponent=!0;var S=["components"];function v(){return v=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},v.apply(this,arguments)}function O(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var w={},D="wrapper";function L(e){var n=e.components,t=O(e,S);return(0,r.mdx)(D,v({},w,t,{components:n,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport {\n  loadPopup,\n} from '@cerner/terra-graphs-docs/lib/example-datasets/popup';\n\nconst data = [\n  {\n    key: 'uid_1',\n    label: {\n      display: 'Data Label 1',\n    },\n    shape: Carbon.helpers.SHAPES.DARK.CIRCLE,\n    onClick: loadPopup,\n    values: [\n      {\n        x: new Date(2016, 0, 1, 1, 5).toISOString(),\n        y: 5,\n        isCritical: false,\n      },\n      {\n        x: new Date(2016, 0, 1, 2, 15).toISOString(),\n        y: 11,\n      },\n      {\n        x: new Date(2016, 0, 1, 3, 15).toISOString(),\n        y: 12,\n      },\n      {\n        x: new Date(2016, 0, 1, 4, 15).toISOString(),\n        y: 16,\n      },\n      {\n        x: new Date(2016, 0, 1, 5, 15).toISOString(),\n        y: 17,\n      },\n      {\n        x: new Date(2016, 0, 1, 6, 15).toISOString(),\n        y: 9,\n      },\n      {\n        x: new Date(2016, 0, 1, 7, 0).toISOString(),\n        y: 11,\n      },\n      {\n        x: new Date(2016, 0, 1, 8, 15).toISOString(),\n        y: 12,\n      },\n      {\n        x: new Date(2016, 0, 1, 9, 45).toISOString(),\n        y: 16,\n      },\n      {\n        x: new Date(2016, 0, 1, 12, 15).toISOString(),\n        y: 17,\n      },\n      {\n        x: new Date(2016, 0, 1, 13, 15).toISOString(),\n        y: 28,\n      },\n      {\n        x: new Date(2016, 0, 1, 14, 15).toISOString(),\n        y: 12,\n      },\n      {\n        x: new Date(2016, 0, 1, 19, 45).toISOString(),\n        y: 13,\n      },\n      {\n        x: new Date(2016, 0, 1, 21, 15).toISOString(),\n        y: 14,\n      },\n    ],\n    yAxis: 'y',\n  },\n  {\n    key: 'uid_2',\n    label: {\n      display: 'Data Label 2',\n    },\n    shape: Carbon.helpers.SHAPES.DARK.RHOMBUS,\n    color: Carbon.helpers.COLORS.BLUE,\n    onClick: loadPopup,\n    values: [\n      {\n        x: new Date(2016, 0, 1, 1, 5).toISOString(),\n        y: 0,\n      },\n      {\n        x: new Date(2016, 0, 1, 2, 15).toISOString(),\n        y: 50,\n      },\n      {\n        x: new Date(2016, 0, 1, 3, 15).toISOString(),\n        y: 60,\n      },\n      {\n        x: new Date(2016, 0, 1, 4, 15).toISOString(),\n        y: 80,\n      },\n      {\n        x: new Date(2016, 0, 1, 5, 15).toISOString(),\n        y: 120,\n      },\n      {\n        x: new Date(2016, 0, 1, 6, 15).toISOString(),\n        y: 130,\n      },\n      {\n        x: new Date(2016, 0, 1, 7, 0).toISOString(),\n        y: 180,\n      },\n      {\n        x: new Date(2016, 0, 1, 8, 15).toISOString(),\n        y: 185,\n      },\n      {\n        x: new Date(2016, 0, 1, 9, 45).toISOString(),\n        y: 200,\n      },\n      {\n        x: new Date(2016, 0, 1, 12, 15).toISOString(),\n        y: 220,\n      },\n    ],\n    yAxis: 'y2',\n  },\n];\n\nexport default data;\n\n")))}L.isMDXComponent=!0;t(35862),t(48244);var P=["components"];function E(){return E=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},E.apply(this,arguments)}function j(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}t(51320);var I={},C="wrapper";function k(e){var n=e.components,t=j(e,P);return(0,r.mdx)(C,E({},I,t,{components:n,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"line-graph---panning"},"Line Graph - panning"),(0,r.mdx)("p",null,"This is a line graph example that implements panning with dynamically updating data. Click on the panning buttons to pan the graph."),(0,r.mdx)("h2",{id:"getting-started"},"Getting Started"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Install with ",(0,r.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"npm i @cerner/carbon-graphs --save-dev"))))),(0,r.mdx)("h2",{id:"usage"},"Usage"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/dist/js/carbon-graphs.js';\nimport '@cerner/carbon-graphs/dist/css/carbon-graphs.css';\n")),(0,r.mdx)("h2",{id:"example"},"Example"),(0,r.mdx)(f,{mdxType:"LineGraphPanning"}),(0,r.mdx)("details",null,(0,r.mdx)("summary",{style:{fontSize:24}},(0,r.mdx)("b",null,"Data")),(0,r.mdx)("h3",{id:"graph-config-object"},"Graph Config object"),(0,r.mdx)(h,{mdxType:"GraphConfig"}),(0,r.mdx)("h3",{id:"data-object"},"Data object"),(0,r.mdx)(L,{mdxType:"DataObject"})))}k.isMDXComponent=!0},35862:function(e,n,t){"use strict";t.d(n,{Z:function(){return s}});t(67294);var a=t(81254),r=["components"];function o(){return o=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},o.apply(this,arguments)}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l={},p="wrapper";function s(e){var n=e.components,t=i(e,r);return(0,a.mdx)(p,o({},l,t,{components:n,mdxType:"MDXLayout"}),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport { loadPopup } from '@cerner/terra-graphs-docs/lib/example-datasets/popup';\n\nconst data = {\n  key: 'uid_1',\n  label: {\n    display: 'Data Label 1',\n  },\n  shape: Carbon.helpers.SHAPES.DARK.CIRCLE,\n  onClick: loadPopup,\n  values: [\n    {\n      x: new Date(2016, 0, 1, 1, 5).toISOString(),\n      y: 5,\n    },\n    {\n      x: new Date(2016, 0, 1, 2, 15).toISOString(),\n      y: 11,\n    },\n    {\n      x: new Date(2016, 0, 1, 3, 15).toISOString(),\n      y: 12,\n    },\n    {\n      x: new Date(2016, 0, 1, 4, 15).toISOString(),\n      y: 16,\n    },\n    {\n      x: new Date(2016, 0, 1, 5, 15).toISOString(),\n      y: 17,\n    },\n    {\n      x: new Date(2016, 0, 1, 6, 15).toISOString(),\n      y: 9,\n    },\n    {\n      x: new Date(2016, 0, 1, 7, 0).toISOString(),\n      y: 11,\n    },\n    {\n      x: new Date(2016, 0, 1, 8, 15).toISOString(),\n      y: 12,\n    },\n    {\n      x: new Date(2016, 0, 1, 9, 45).toISOString(),\n      y: 16,\n    },\n    {\n      x: new Date(2016, 0, 1, 12, 15).toISOString(),\n      y: 17,\n    },\n    {\n      x: new Date(2016, 0, 1, 13, 15).toISOString(),\n      y: 28,\n    },\n    {\n      x: new Date(2016, 0, 1, 14, 15).toISOString(),\n      y: 12,\n    },\n    {\n      x: new Date(2016, 0, 1, 19, 45).toISOString(),\n      y: 13,\n    },\n    {\n      x: new Date(2016, 0, 1, 21, 15).toISOString(),\n      y: 14,\n    },\n  ],\n  yAxis: 'y',\n};\n\nexport default data;\n\n")))}s.isMDXComponent=!0},48244:function(e,n,t){"use strict";t(67294),t(81254)},51320:function(e,n,t){var a,r;void 0===(r="function"==typeof(a=function(){var e="details",n="summary";function t(e){if("summary"===e.target.nodeName.toLowerCase()){var n=e.target.parentNode;if(!n)return;n.getAttribute("open")?(n.open=!1,n.removeAttribute("open")):(n.open=!0,n.setAttribute("open","open"))}}function a(){var t=document.createElement(e);if(!("open"in t))return!1;t.innerHTML="<"+n+">a</"+n+">b",document.body.appendChild(t);var a=t.offsetHeight;t.open=!0;var r=a!=t.offsetHeight;return document.body.removeChild(t),r}function r(e,n){if(!document.getElementById(e)){var t=document.createElement("style");t.id=e,t.innerHTML=n,document.getElementsByTagName("head")[0].appendChild(t)}}a()||(document.documentElement.className+=" no-details",window.addEventListener("click",t),r("details-polyfill-style","html.no-details "+e+" { display: block; }\nhtml.no-details "+e+":not([open]) > :not("+n+") { display: none; }\nhtml.no-details "+e+" > "+n+':before { content: "▶"; display: inline-block; font-size: .8em; width: 1.5em; }\nhtml.no-details '+e+"[open] > "+n+':before { content: "▼"; }'))})?a.call(n,t,n,e):a)||(e.exports=r)},39003:function(e,n,t){"use strict";t.r(n),n.default={}}}]);