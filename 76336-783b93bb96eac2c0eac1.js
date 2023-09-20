(self.webpackChunkterra_ui=self.webpackChunkterra_ui||[]).push([[76336],{41503:function(e,t,a){"use strict";var n=a(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(54520)),i=a(22678),l=a(5485),o={key:"uid_1",label:{display:"Data Label 1"},color:r.default.helpers.COLORS.BLACK,onClick:i.loadPopup,values:(0,l.createGraphValuesWithSin)({length:20,initialX:85,xModifier:10,yModifier:Math.PI})};o.values[1].isCritical=!0,o.values[11].isCritical=!0;var p=o;t.default=p},95926:function(e,t,a){"use strict";var n=a(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(54520)),i=a(22678),l=a(5485),o={key:"uid_3",label:{display:"Data Label 3"},shape:r.default.helpers.SHAPES.DARK.X,color:r.default.helpers.COLORS.GREEN,onClick:i.loadPopup,values:(0,l.createGraphValuesWithSin)({length:8,initialX:85,xModifier:25,yModifier:4*Math.PI})};o.values[2].isCritical=!0,o.values[6].isCritical=!0;var p=o;t.default=p},92696:function(e,t,a){"use strict";var n=a(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(54520)),i=a(22678),l={key:"uid_4",label:{display:"Data Label 4"},shape:r.default.helpers.SHAPES.DARK.CROSS,color:r.default.helpers.COLORS.LIGHT_PURPLE,onClick:i.loadPopup,values:new Array(15).fill("").map((function(e,t){return{y:Math.sin(t)*Math.PI*4,x:85+10*t,region:{start:Math.sin(t)*Math.PI*4-Math.PI,end:Math.sin(t)*Math.PI*4+Math.PI}}}))};l.values[4].isCritical=!0,l.values[8].isCritical=!0;var o=l;t.default=o},5485:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.createGraphValuesWithSin=t.createGraphValuesWithCos=void 0;t.createGraphValuesWithSin=function(e){var t=e.length,a=e.initialX,n=e.xModifier,r=e.yModifier;return new Array(t).fill("").map((function(e,t){return{y:Math.sin(t)*r,x:a+t*n}}))};t.createGraphValuesWithCos=function(e){var t=e.length,a=e.initialX,n=e.xModifier,r=e.yModifier;return new Array(t).fill("").map((function(e,t){return{y:Math.cos(t)*r,x:a+t*n}}))}},87063:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=function(e){return{bindTo:e,bindLegendTo:null,axis:{x:{show:!0,label:"Data",lowerLimit:80,upperLimit:280},y:{show:!0,label:"Line Set A",lowerLimit:-18,upperLimit:18},y2:{show:!1,label:"Line Set B",lowerLimit:0,upperLimit:250}},showLabel:!0,showLegend:!0,showShapes:!0,showVGrid:!0,showHGrid:!0}};t.default=a},22678:function(e,t,a){"use strict";var n=a(64836),r=a(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.loadY2AxisLabelPopup=t.loadXAndYAxisLabelPopup=t.loadTrackPopup=t.loadTimelinePopup=t.loadTextLabelPopup=t.loadTaskPopup=t.loadPopup=t.loadPiePopup=t.loadDatelinePopup=t.loadBubblePopup=t.loadBarPopup=void 0;var i=n(a(27424)),l=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var a=s(t);if(a&&a.has(e))return a.get(e);var n={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var o=i?Object.getOwnPropertyDescriptor(e,l):null;o&&(o.get||o.set)?Object.defineProperty(n,l,o):n[l]=e[l]}n.default=e,a&&a.set(e,n);return n}(a(79590)),o=n(a(88703)),p=n(a(53334));function s(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(s=function(e){return e?a:t})(e)}var c=function(e){return new Date(e).toLocaleString()},u=function(e){return e?d(e)?c(e):e:null},d=function(e){return e instanceof Date},f=function(e,t,a){var n=e.append("g").classed("popup-item",!0);n.append("label").classed("popup-label",!0).text(t),n.append("g").classed("popup-text",!0).text(a)},m=function(e,t,a){var n=e.append("g").classed("popup-item",!0);n.append("label").classed("popup-label",!0).text(t);for(var r=n.append("g").classed("section",!0),l=function(){var e=p[o],t=r.append("g").classed("content",!0);Object.entries(e).forEach((function(e){var a=(0,i.default)(e,2),n=a[0],r=a[1],l=t.append("g").classed("popup-item",!0);l.append("label").classed("popup-label",!0).text(n.replace(/([a-z0-9])([A-Z])/g,"$1 $2").replace(/(\b[a-z](?!\s))/g,(function(e){return e.toUpperCase()}))),l.append("g").classed("popup-text",!0).text(r)}))},o=0,p=Object.values(a);o<p.length;o++)l()},h=function(e){var t=document.querySelector("#tooltip");return l.select("body").append("div","#tooltip").attr("id","overlay").classed("overlay",!0).on("click",(function a(){l.select(t).attr("style","display:none;").selectAll("g").remove(),p.default.isFunction(e)&&e(),l.select("#overlay").remove(),t.removeEventListener("click",a),window.removeEventListener("resize",a)})),l.select("#tooltip").style("left","".concat(l.event.pageX+5,"px")).style("top","".concat(l.event.pageY+5,"px"))},b=function(){l.select("#overlay").remove(),document.getElementsByClassName("initial-tooltip")[0]&&(document.getElementsByClassName("initial-tooltip")[0].className="tooltip"),l.select("#tooltip").attr("style","").selectAll("g").remove()};t.loadPopup=function(e,t,a,n){b();var r=h(e).append("g"),i=n.x,l=n.y,o=n.label,p=n.high,s=n.mid,m=n.low;i?(f(r,"X axis","".concat(d(i)?c(i):i)),f(r,"".concat(o.display),l)):(f(r,"X axis","".concat(p?u(p.x):s?u(s.x):m?u(m.x):"N/A")),p&&f(r,"High",u(p.y)),s&&f(r,"Mid",u(s.y)),m&&f(r,"Low",u(m.y)))};t.loadBubblePopup=function(e,t,a,n){b();var r=h(e).append("g"),i=n.x,l=n.y,o=n.label,p=n.weight;i&&(f(r,"X axis","".concat(d(i)?c(i):i)),f(r,"year",l)),p&&f(r,"".concat(o.display),"".concat(p))};t.loadBarPopup=function(e,t,a,n){b();var r=h(e).append("g");n.forEach((function(e){return f(r,"".concat(e.label.display),"".concat(e.y))}))};t.loadTextLabelPopup=function(e,t,a){b();var n=h(e).append("g").classed("popup-item",!0).append("g").attr("style","display: inline-block;"),r=t.shape,i=t.label,l=t.color;p.default.notEmpty(r)&&n.append("svg").attr("width","15").attr("height","12").append("path").attr("transform","translate(".concat(0,", ",0,") scale(",r.options.scale,")")).attr("d",r.path.d).attr("fill",r.path.fill||o.default.DEFAULT_COLOR).attr("id",r.path.id),i.display&&n.append("text").classed("popup-text",!0).attr("style","color: ".concat(l,";")).text("".concat(i.display)),i.secondaryDisplay&&n.append("tspan").attr("style","color: ".concat(o.default.DEFAULT_COLOR,";")).text(" ".concat(i.secondaryDisplay))};t.loadXAndYAxisLabelPopup=function(e){b(),h().append("g").append("g").classed("popup-item",!0).append("g").classed("popup-text",!0).text(e)};t.loadY2AxisLabelPopup=function(e){var t,a;b(),(a=document.querySelector("#tooltip"),l.select("body").append("div","#tooltip").attr("id","overlay").classed("overlay",!0).on("click",(function e(){l.select(a).attr("style","display:none;").selectAll("g").remove(),p.default.isFunction(t)&&t(),l.select("#overlay").remove(),a.removeEventListener("click",e),window.removeEventListener("resize",e)})),l.select("#tooltip").style("left","".concat(l.event.pageX-250,"px")).style("top","".concat(l.event.pageY+5,"px"))).append("g").append("g").classed("popup-item",!0).append("g").classed("popup-text",!0).text(e)};t.loadTrackPopup=function(e,t,a){b();var n=h(e).append("g"),r=a.tasks,i=a.activities,l=a.events,o=a.actions;if(r&&r.length>0){var p=[];p.forEach((function(e){p.push({name:e.key,startDate:e.startDate,endDate:e.endDate})})),m(n,"Tasks",p)}if(i&&i.length>0){var s=[];i.forEach((function(e){s.push({name:e.key,startDate:e.startDate,endDate:e.endDate})})),m(n,"Activities",s)}if(l&&l.length>0){var c=[];l.forEach((function(e){c.push({name:e.key,values:e.values.join(", ")})})),m(n,"Events",c)}if(o&&o.length>0){var u=[];o.forEach((function(e){u.push({name:e.key,values:e.values.join(", ")})})),m(n,"Actions",u)}};t.loadTaskPopup=function(e,t,a,n){b();var r=h(e).append("g"),i=n.label,l=n.display,o=n.y,p=n.startDate,s=n.endDate,u=n.percentage;i&&f(r,"Task Name",l),f(r,"Track",o),f(r,"Start Date",c(p)),f(r,"End Date",c(s)),u&&f(r,"Percentage",u)};t.loadDatelinePopup=function(e,t){b();var a=h(e).append("g"),n=t.label,r=t.value;n&&f(a,"Milestone",n.display),f(a,"Date",c(r))};t.loadTimelinePopup=function(e,t,a,n){b();var r=h(e).append("g"),i=n.x,l=(n.y,n.label),o=n.content;f(r,"X axis","".concat(d(i)?c(i):i)),f(r,"".concat(l.display),o)};t.loadPiePopup=function(e,t,a,n){b();var r=h(e).append("g"),i=n.label,l=n.value;f(r,i.display,l)}},93065:function(e,t,a){"use strict";var n=a(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(67294)),i=n(a(45697));a(80244);var l={id:i.default.string.isRequired},o=function(e){return r.default.createElement(r.default.Fragment,null,r.default.createElement("div",{id:"tooltip",className:"initial-tooltip"}),r.default.createElement("div",{id:e.id,className:"example-graph-container"}))};o.propTypes=l;var p=o;t.default=p},26195:function(e,t,a){"use strict";var n=a(64836);t.Z=void 0;var r=n(a(67294)),i=n(a(54520)),l=n(a(53334));a(56867),a(39003);var o=n(a(93065)),p=n(a(87063)),s=n(a(41503)),c=n(a(95926)),u=n(a(92696)),d=l.default.deepClone((0,p.default)("#criticalityMultiLine")),f=[l.default.deepClone(s.default),l.default.deepClone(c.default),l.default.deepClone(u.default)],m=function(){return r.default.useEffect((function(){var e=i.default.api.graph(d);f.forEach((function(t){e.loadContent(i.default.api.line(t))}))}),[]),r.default.createElement(o.default,{id:"criticalityMultiLine"})};t.Z=m},28587:function(e,t,a){"use strict";var n=a(64836);t.Z=void 0;var r=n(a(67294)),i=n(a(54520)),l=n(a(53334));a(56867),a(39003);var o=n(a(93065)),p=n(a(87063)),s=n(a(41503)),c=l.default.deepClone((0,p.default)("#criticalitySimpleLine")),u=l.default.deepClone(s.default),d=function(){return r.default.useEffect((function(){i.default.api.graph(c).loadContent(i.default.api.line(u))}),[]),r.default.createElement(o.default,{id:"criticalitySimpleLine"})};t.Z=d},76336:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return z}});var n=a(67294),r=a(81254),i=a(28587),l=["components"];function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},o.apply(this,arguments)}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s={};function c(e){var t=e.components,a=p(e,l);return(0,r.mdx)("wrapper",o({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport utils from '@cerner/carbon-graphs/lib/js/helpers/utils';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Graph.module.scss';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Line/LineGraph.module.scss';\nimport ExampleGraphContainer from '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer';\nimport getLineDefaultConfig from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Line/lineDefault';\nimport exampleData from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Line/dataset1critical';\n\n/*\nPlease refer to the documentation below to see the graphConfig and data objects\n*/\n\nconst graphConfig = utils.deepClone(getLineDefaultConfig('#criticalitySimpleLine'));\nconst dataset = utils.deepClone(exampleData);\n\nconst CriticalitySimpleLineExample = () => {\n  React.useEffect(() => {\n    const graph = Carbon.api.graph(graphConfig);\n    graph.loadContent(Carbon.api.line(dataset));\n  }, []);\n\n  return (\n    <ExampleGraphContainer id=\"criticalitySimpleLine\" />\n  );\n};\n\nexport default CriticalitySimpleLineExample;\n\n\n")))}c.isMDXComponent=!0;var u=a(49271),d=a(25005),f=function(e){var t=e.title,a=e.description,r=e.isExpanded;return n.createElement(u.Z,{title:t||"Simple Line",description:a,example:n.createElement(i.Z,null),exampleCssSrc:n.createElement(d.Z,null),exampleSrc:n.createElement(c,null),isExpanded:r})},m=a(61775),h=["components"];function b(){return b=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},b.apply(this,arguments)}function y(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var g={},v="wrapper";function x(e){var t=e.components,a=y(e,h);return(0,r.mdx)(v,b({},g,a,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport { loadPopup } from '@cerner/terra-graphs-docs/lib/example-datasets/popup';\nimport { createGraphValuesWithSin } from '../createGraphValues';\n\nconst data = {\n  key: 'uid_1',\n  label: {\n    display: 'Data Label 1',\n  },\n  color: Carbon.helpers.COLORS.BLACK,\n  onClick: loadPopup,\n  values: createGraphValuesWithSin({\n    length: 20, initialX: 85, xModifier: 10, yModifier: Math.PI,\n  }),\n};\n\ndata.values[1].isCritical = true;\ndata.values[11].isCritical = true;\n\nexport default data;\n\n")))}x.isMDXComponent=!0;var O=a(26195),C=["components"];function j(){return j=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},j.apply(this,arguments)}function L(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var P={};function w(e){var t=e.components,a=L(e,C);return(0,r.mdx)("wrapper",j({},P,a,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport utils from '@cerner/carbon-graphs/lib/js/helpers/utils';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Graph.module.scss';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Line/LineGraph.module.scss';\nimport ExampleGraphContainer from '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer';\nimport getLineDefaultConfig from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Line/lineDefault';\nimport exampleData1 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Line/dataset1critical';\nimport exampleData2 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Line/dataset3critical';\nimport exampleData3 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Line/dataset4critical';\n\n/*\nPlease refer to the documentation below to see the graphConfig and data objects\n*/\n\nconst graphConfig = utils.deepClone(getLineDefaultConfig('#criticalityMultiLine'));\nconst dataset = [\n  utils.deepClone(exampleData1),\n  utils.deepClone(exampleData2),\n  utils.deepClone(exampleData3),\n];\n\nconst CriticalityMultiLineExample = () => {\n  React.useEffect(() => {\n    const graph = Carbon.api.graph(graphConfig);\n    dataset.forEach((data) => {\n      graph.loadContent(Carbon.api.line(data));\n    });\n  }, []);\n  return (\n    <ExampleGraphContainer id=\"criticalityMultiLine\" />\n  );\n};\n\nexport default CriticalityMultiLineExample;\n\n\n")))}w.isMDXComponent=!0;var D=function(e){var t=e.title,a=e.description,r=e.isExpanded;return n.createElement(u.Z,{title:t||"Multi Line",description:a,example:n.createElement(O.Z,null),exampleCssSrc:n.createElement(d.Z,null),exampleSrc:n.createElement(w,null),isExpanded:r})},E=["components"];function M(){return M=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},M.apply(this,arguments)}function S(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var k={},G="wrapper";function T(e){var t=e.components,a=S(e,E);return(0,r.mdx)(G,M({},k,a,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport { loadPopup } from '@cerner/terra-graphs-docs/lib/example-datasets/popup';\nimport { createGraphValuesWithSin } from '../createGraphValues';\n\nconst data = {\n  key: 'uid_3',\n  label: {\n    display: 'Data Label 3',\n  },\n  shape: Carbon.helpers.SHAPES.DARK.X,\n  color: Carbon.helpers.COLORS.GREEN,\n  onClick: loadPopup,\n  values: createGraphValuesWithSin({\n    length: 8, initialX: 85, xModifier: 25, yModifier: Math.PI * 4,\n  }),\n};\n\ndata.values[2].isCritical = true;\ndata.values[6].isCritical = true;\n\nexport default data;\n\n")))}T.isMDXComponent=!0;var A=["components"];function N(){return N=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},N.apply(this,arguments)}function X(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var _={},I="wrapper";function R(e){var t=e.components,a=X(e,A);return(0,r.mdx)(I,N({},_,a,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport { loadPopup } from '@cerner/terra-graphs-docs/lib/example-datasets/popup';\n\nconst data = {\n  key: 'uid_4',\n  label: {\n    display: 'Data Label 4',\n  },\n  shape: Carbon.helpers.SHAPES.DARK.CROSS,\n  color: Carbon.helpers.COLORS.LIGHT_PURPLE,\n  onClick: loadPopup,\n  values: new Array(15).fill('').map((_, i) => ({\n    y: Math.sin(i) * Math.PI * 4,\n    x: 85 + i * 10,\n    region: {\n      start: Math.sin(i) * Math.PI * 4 - Math.PI,\n      end: Math.sin(i) * Math.PI * 4 + Math.PI,\n    },\n  })),\n};\n\ndata.values[4].isCritical = true;\ndata.values[8].isCritical = true;\n\nexport default data;\n\n")))}R.isMDXComponent=!0;var V=["components"];function Z(){return Z=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},Z.apply(this,arguments)}function H(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}a(51320);var W={},B="wrapper";function z(e){var t=e.components,a=H(e,V);return(0,r.mdx)(B,Z({},W,a,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"criticality"},"Criticality"),(0,r.mdx)("p",null,"Criticality consists of line graph examples with simple and multi critical points(highlighted with red circles)."),(0,r.mdx)("h2",{id:"getting-started"},"Getting Started"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Install with ",(0,r.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"npm i @cerner/carbon-graphs --save-dev"))))),(0,r.mdx)("h2",{id:"usage"},"Usage"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/dist/js/carbon-graphs.js';\nimport '@cerner/carbon-graphs/dist/css/carbon-graphs.css';\n")),(0,r.mdx)("h2",{id:"examples"},"Examples"),(0,r.mdx)(f,{mdxType:"SimpleCriticalLineGraph"}),(0,r.mdx)("details",null,(0,r.mdx)("summary",{style:{fontSize:24}},(0,r.mdx)("b",null,"Data used for simple criticality")),(0,r.mdx)("h3",{id:"graph-config-object"},"Graph Config object"),(0,r.mdx)(m.Z,{mdxType:"SimpleCriticalGraphConfig"}),(0,r.mdx)("h3",{id:"data-object"},"Data object"),(0,r.mdx)(x,{mdxType:"SimpleCriticalDataObject"})),(0,r.mdx)("br",null),(0,r.mdx)("br",null),(0,r.mdx)("br",null),(0,r.mdx)(D,{mdxType:"MultiCriticalityLineGraph"}),(0,r.mdx)("details",null,(0,r.mdx)("summary",{style:{fontSize:24}},(0,r.mdx)("b",null,"Data used for multiple criticality")),(0,r.mdx)("h3",{id:"graph-config-object-1"},"Graph Config object"),(0,r.mdx)(m.Z,{mdxType:"MultiCriticalityGraphConfig"}),(0,r.mdx)("h3",{id:"data-object-1"},"Data object"),(0,r.mdx)("h4",{id:"dataset-1"},"Dataset 1"),(0,r.mdx)(x,{mdxType:"MultiCriticalityDataObject1"}),(0,r.mdx)("h4",{id:"dataset-2"},"Dataset 2"),(0,r.mdx)(T,{mdxType:"MultiCriticalityDataObject2"}),(0,r.mdx)("h4",{id:"dataset-3"},"Dataset 3"),(0,r.mdx)(R,{mdxType:"MultiCriticalityDataObject3"})))}z.isMDXComponent=!0},61775:function(e,t,a){"use strict";a.d(t,{Z:function(){return s}});a(67294);var n=a(81254),r=["components"];function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},i.apply(this,arguments)}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o={},p="wrapper";function s(e){var t=e.components,a=l(e,r);return(0,n.mdx)(p,i({},o,a,{components:t,mdxType:"MDXLayout"}),(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-js"},"const getLineDefaultConfig = (id) => ({\n  bindTo: id,\n  bindLegendTo: null,\n  axis: {\n    x: {\n      show: true,\n      label: 'Data',\n      lowerLimit: 80,\n      upperLimit: 280,\n    },\n    y: {\n      show: true,\n      label: 'Line Set A',\n      lowerLimit: -18,\n      upperLimit: 18,\n    },\n    y2: {\n      show: false,\n      label: 'Line Set B',\n      lowerLimit: 0,\n      upperLimit: 250,\n    },\n  },\n  showLabel: true,\n  showLegend: true,\n  showShapes: true,\n  showVGrid: true,\n  showHGrid: true,\n});\n\nexport default getLineDefaultConfig;\n\n\n")))}s.isMDXComponent=!0},51320:function(e,t,a){var n,r;void 0===(r="function"==typeof(n=function(){var e="details",t="summary";function a(e){if("summary"===e.target.nodeName.toLowerCase()){var t=e.target.parentNode;if(!t)return;t.getAttribute("open")?(t.open=!1,t.removeAttribute("open")):(t.open=!0,t.setAttribute("open","open"))}}function n(){var a=document.createElement(e);if(!("open"in a))return!1;a.innerHTML="<"+t+">a</"+t+">b",document.body.appendChild(a);var n=a.offsetHeight;a.open=!0;var r=n!=a.offsetHeight;return document.body.removeChild(a),r}function r(e,t){if(!document.getElementById(e)){var a=document.createElement("style");a.id=e,a.innerHTML=t,document.getElementsByTagName("head")[0].appendChild(a)}}n()||(document.documentElement.className+=" no-details",window.addEventListener("click",a),r("details-polyfill-style","html.no-details "+e+" { display: block; }\nhtml.no-details "+e+":not([open]) > :not("+t+") { display: none; }\nhtml.no-details "+e+" > "+t+':before { content: "▶"; display: inline-block; font-size: .8em; width: 1.5em; }\nhtml.no-details '+e+"[open] > "+t+':before { content: "▼"; }'))})?n.call(t,a,t,e):n)||(e.exports=r)},39003:function(e,t,a){"use strict";a.r(t),t.default={}}}]);