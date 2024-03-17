(self.webpackChunkterra_ui=self.webpackChunkterra_ui||[]).push([[36635],{44602:function(e,t,n){"use strict";var a=n(24994);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(39139)),i=n(86006),l=n(74013),o={key:"uid_1",label:{display:"Data Label 1"},color:r.default.helpers.COLORS.BLACK,onClick:i.loadPopup,values:(0,l.createGraphValuesWithSin)({length:20,initialX:85,xModifier:10,yModifier:Math.PI})};o.values[1].isCritical=!0,o.values[11].isCritical=!0;t.default=o},76184:function(e,t,n){"use strict";var a=n(24994);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(39139)),i=n(86006),l=n(74013),o={key:"uid_3",label:{display:"Data Label 3"},shape:r.default.helpers.SHAPES.DARK.X,color:r.default.helpers.COLORS.GREEN,onClick:i.loadPopup,values:(0,l.createGraphValuesWithSin)({length:8,initialX:85,xModifier:25,yModifier:4*Math.PI})};o.values[2].isCritical=!0,o.values[6].isCritical=!0;t.default=o},24881:function(e,t,n){"use strict";var a=n(24994);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(39139)),i=n(86006),l={key:"uid_4",label:{display:"Data Label 4"},shape:r.default.helpers.SHAPES.DARK.CROSS,color:r.default.helpers.COLORS.LIGHT_PURPLE,onClick:i.loadPopup,values:new Array(15).fill("").map((function(e,t){return{y:Math.sin(t)*Math.PI*4,x:85+10*t,region:{start:Math.sin(t)*Math.PI*4-Math.PI,end:Math.sin(t)*Math.PI*4+Math.PI}}}))};l.values[4].isCritical=!0,l.values[8].isCritical=!0;t.default=l},74013:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.createGraphValuesWithSin=t.createGraphValuesWithCos=void 0;t.createGraphValuesWithSin=function(e){var t=e.length,n=e.initialX,a=e.xModifier,r=e.yModifier;return new Array(t).fill("").map((function(e,t){return{y:Math.sin(t)*r,x:n+t*a}}))},t.createGraphValuesWithCos=function(e){var t=e.length,n=e.initialX,a=e.xModifier,r=e.yModifier;return new Array(t).fill("").map((function(e,t){return{y:Math.cos(t)*r,x:n+t*a}}))}},32213:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default=function(e){return{bindTo:e,bindLegendTo:null,axis:{x:{show:!0,label:"Data",lowerLimit:80,upperLimit:280},y:{show:!0,label:"Line Set A",lowerLimit:-18,upperLimit:18},y2:{show:!1,label:"Line Set B",lowerLimit:0,upperLimit:250}},showLabel:!0,showLegend:!0,showShapes:!0,showVGrid:!0,showHGrid:!0}}},86006:function(e,t,n){"use strict";var a=n(24994),r=n(73738);Object.defineProperty(t,"__esModule",{value:!0}),t.loadY2AxisLabelPopup=t.loadXAndYAxisLabelPopup=t.loadTrackPopup=t.loadTimelinePopup=t.loadTextLabelPopup=t.loadTaskPopup=t.loadPopup=t.loadPiePopup=t.loadDatelinePopup=t.loadBubblePopup=t.loadBarPopup=void 0;var i=a(n(85715)),l=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=r(e)&&"function"!=typeof e)return{default:e};var n=s(t);if(n&&n.has(e))return n.get(e);var a={__proto__:null},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var o=i?Object.getOwnPropertyDescriptor(e,l):null;o&&(o.get||o.set)?Object.defineProperty(a,l,o):a[l]=e[l]}return a.default=e,n&&n.set(e,a),a}(n(37332)),o=a(n(22639)),p=a(n(45839));function s(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(s=function(e){return e?n:t})(e)}var c=function(e){return new Date(e).toLocaleString()},u=function(e){return e?d(e)?c(e):e:null},d=function(e){return e instanceof Date},f=function(e,t,n){var a=e.append("g").classed("popup-item",!0);a.append("label").classed("popup-label",!0).text(t),a.append("g").classed("popup-text",!0).text(n)},m=function(e,t,n){var a=e.append("g").classed("popup-item",!0);a.append("label").classed("popup-label",!0).text(t);for(var r=a.append("g").classed("section",!0),l=function(){var e=p[o],t=r.append("g").classed("content",!0);Object.entries(e).forEach((function(e){var n=(0,i.default)(e,2),a=n[0],r=n[1],l=t.append("g").classed("popup-item",!0);l.append("label").classed("popup-label",!0).text(a.replace(/([a-z0-9])([A-Z])/g,"$1 $2").replace(/(\b[a-z](?!\s))/g,(function(e){return e.toUpperCase()}))),l.append("g").classed("popup-text",!0).text(r)}))},o=0,p=Object.values(n);o<p.length;o++)l()},h=function(e){var t=document.querySelector("#tooltip");return l.select("body").append("div","#tooltip").attr("id","overlay").classed("overlay",!0).on("click",(function n(){l.select(t).attr("style","display:none;").selectAll("g").remove(),p.default.isFunction(e)&&e(),l.select("#overlay").remove(),t.removeEventListener("click",n),window.removeEventListener("resize",n)})),l.select("#tooltip").style("left","".concat(l.event.pageX+5,"px")).style("top","".concat(l.event.pageY+5,"px"))},b=function(){l.select("#overlay").remove(),document.getElementsByClassName("initial-tooltip")[0]&&(document.getElementsByClassName("initial-tooltip")[0].className="tooltip"),l.select("#tooltip").attr("style","").selectAll("g").remove()};t.loadPopup=function(e,t,n,a){b();var r=h(e).append("g"),i=a.x,l=a.y,o=a.label,p=a.high,s=a.mid,m=a.low;i?(f(r,"X axis","".concat(d(i)?c(i):i)),f(r,"".concat(o.display),l)):(f(r,"X axis","".concat(p?u(p.x):s?u(s.x):m?u(m.x):"N/A")),p&&f(r,"High",u(p.y)),s&&f(r,"Mid",u(s.y)),m&&f(r,"Low",u(m.y)))},t.loadBubblePopup=function(e,t,n,a){b();var r=h(e).append("g"),i=a.x,l=a.y,o=a.label,p=a.weight;i&&(f(r,"X axis","".concat(d(i)?c(i):i)),f(r,"year",l)),p&&f(r,"".concat(o.display),"".concat(p))},t.loadBarPopup=function(e,t,n,a){b();var r=h(e).append("g");a.forEach((function(e){return f(r,"".concat(e.label.display),"".concat(e.y))}))},t.loadTextLabelPopup=function(e,t,n){b();var a=h(e).append("g").classed("popup-item",!0).append("g").attr("style","display: inline-block;"),r=t.shape,i=t.label,l=t.color;p.default.notEmpty(r)&&a.append("svg").attr("width","15").attr("height","12").append("path").attr("transform","translate(".concat(0,", ",0,") scale(",r.options.scale,")")).attr("d",r.path.d).attr("fill",r.path.fill||o.default.DEFAULT_COLOR).attr("id",r.path.id),i.display&&a.append("text").classed("popup-text",!0).attr("style","color: ".concat(l,";")).text("".concat(i.display)),i.secondaryDisplay&&a.append("tspan").attr("style","color: ".concat(o.default.DEFAULT_COLOR,";")).text(" ".concat(i.secondaryDisplay))},t.loadXAndYAxisLabelPopup=function(e){b(),h().append("g").append("g").classed("popup-item",!0).append("g").classed("popup-text",!0).text(e)},t.loadY2AxisLabelPopup=function(e){var t,n;b(),(n=document.querySelector("#tooltip"),l.select("body").append("div","#tooltip").attr("id","overlay").classed("overlay",!0).on("click",(function e(){l.select(n).attr("style","display:none;").selectAll("g").remove(),p.default.isFunction(t)&&t(),l.select("#overlay").remove(),n.removeEventListener("click",e),window.removeEventListener("resize",e)})),l.select("#tooltip").style("left","".concat(l.event.pageX-250,"px")).style("top","".concat(l.event.pageY+5,"px"))).append("g").append("g").classed("popup-item",!0).append("g").classed("popup-text",!0).text(e)},t.loadTrackPopup=function(e,t,n){b();var a=h(e).append("g"),r=n.tasks,i=n.activities,l=n.events,o=n.actions;if(r&&r.length>0){var p=[];p.forEach((function(e){p.push({name:e.key,startDate:e.startDate,endDate:e.endDate})})),m(a,"Tasks",p)}if(i&&i.length>0){var s=[];i.forEach((function(e){s.push({name:e.key,startDate:e.startDate,endDate:e.endDate})})),m(a,"Activities",s)}if(l&&l.length>0){var c=[];l.forEach((function(e){c.push({name:e.key,values:e.values.join(", ")})})),m(a,"Events",c)}if(o&&o.length>0){var u=[];o.forEach((function(e){u.push({name:e.key,values:e.values.join(", ")})})),m(a,"Actions",u)}},t.loadTaskPopup=function(e,t,n,a){b();var r=h(e).append("g"),i=a.label,l=a.display,o=a.y,p=a.startDate,s=a.endDate,u=a.percentage;i&&f(r,"Task Name",l),f(r,"Track",o),f(r,"Start Date",c(p)),f(r,"End Date",c(s)),u&&f(r,"Percentage",u)},t.loadDatelinePopup=function(e,t){b();var n=h(e).append("g"),a=t.label,r=t.value;a&&f(n,"Milestone",a.display),f(n,"Date",c(r))},t.loadTimelinePopup=function(e,t,n,a){b();var r=h(e).append("g"),i=a.x,l=(a.y,a.label),o=a.content;f(r,"X axis","".concat(d(i)?c(i):i)),f(r,"".concat(l.display),o)},t.loadPiePopup=function(e,t,n,a){b();var r=h(e).append("g"),i=a.label,l=a.value;f(r,i.display,l)}},29683:function(e,t,n){"use strict";var a=n(24994);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(96540)),i=a(n(5556));n(16939);var l={id:i.default.string.isRequired},o=function(e){return r.default.createElement(r.default.Fragment,null,r.default.createElement("div",{id:"tooltip",className:"initial-tooltip"}),r.default.createElement("div",{id:e.id,className:"example-graph-container"}))};o.propTypes=l;t.default=o},33054:function(e,t,n){"use strict";var a=n(24994);t.A=void 0;var r=a(n(96540)),i=a(n(39139)),l=a(n(45839));n(14388),n(45633);var o=a(n(29683)),p=a(n(32213)),s=a(n(44602)),c=a(n(76184)),u=a(n(24881)),d=l.default.deepClone((0,p.default)("#criticalityMultiLine")),f=[l.default.deepClone(s.default),l.default.deepClone(c.default),l.default.deepClone(u.default)];t.A=function(){return r.default.useEffect((function(){var e=i.default.api.graph(d);f.forEach((function(t){e.loadContent(i.default.api.line(t))}))}),[]),r.default.createElement(o.default,{id:"criticalityMultiLine"})}},44809:function(e,t,n){"use strict";var a=n(24994);t.A=void 0;var r=a(n(96540)),i=a(n(39139)),l=a(n(45839));n(14388),n(45633);var o=a(n(29683)),p=a(n(32213)),s=a(n(44602)),c=l.default.deepClone((0,p.default)("#criticalitySimpleLine")),u=l.default.deepClone(s.default);t.A=function(){return r.default.useEffect((function(){i.default.api.graph(c).loadContent(i.default.api.line(u))}),[]),r.default.createElement(o.default,{id:"criticalitySimpleLine"})}},36635:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return K}});var a=n(96540),r=n(36665),i=n(44809),l=["components"];function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o.apply(this,arguments)}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s={};function c(e){var t=e.components,n=p(e,l);return(0,r.mdx)("wrapper",o({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport utils from '@cerner/carbon-graphs/lib/js/helpers/utils';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Graph.module.scss';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Line/LineGraph.module.scss';\nimport ExampleGraphContainer from '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer';\nimport getLineDefaultConfig from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Line/lineDefault';\nimport exampleData from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Line/dataset1critical';\n\n/*\nPlease refer to the documentation below to see the graphConfig and data objects\n*/\n\nconst graphConfig = utils.deepClone(getLineDefaultConfig('#criticalitySimpleLine'));\nconst dataset = utils.deepClone(exampleData);\n\nconst CriticalitySimpleLineExample = () => {\n  React.useEffect(() => {\n    const graph = Carbon.api.graph(graphConfig);\n    graph.loadContent(Carbon.api.line(dataset));\n  }, []);\n\n  return (\n    <ExampleGraphContainer id=\"criticalitySimpleLine\" />\n  );\n};\n\nexport default CriticalitySimpleLineExample;\n\n\n")))}c.isMDXComponent=!0;var u=n(201),d=n(10502),f=function(e){var t=e.title,n=e.description,r=e.isExpanded;return a.createElement(u.A,{title:t||"Simple Line",description:n,example:a.createElement(i.A,null),exampleCssSrc:a.createElement(d.A,null),exampleSrc:a.createElement(c,null),isExpanded:r})},m=n(49462),h=["components"];function b(){return b=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},b.apply(this,arguments)}function y(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var g={},v="wrapper";function x(e){var t=e.components,n=y(e,h);return(0,r.mdx)(v,b({},g,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport { loadPopup } from '@cerner/terra-graphs-docs/lib/example-datasets/popup';\nimport { createGraphValuesWithSin } from '../createGraphValues';\n\nconst data = {\n  key: 'uid_1',\n  label: {\n    display: 'Data Label 1',\n  },\n  color: Carbon.helpers.COLORS.BLACK,\n  onClick: loadPopup,\n  values: createGraphValuesWithSin({\n    length: 20, initialX: 85, xModifier: 10, yModifier: Math.PI,\n  }),\n};\n\ndata.values[1].isCritical = true;\ndata.values[11].isCritical = true;\n\nexport default data;\n\n")))}x.isMDXComponent=!0;var O=n(33054),C=["components"];function j(){return j=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},j.apply(this,arguments)}function L(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var P={};function w(e){var t=e.components,n=L(e,C);return(0,r.mdx)("wrapper",j({},P,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport utils from '@cerner/carbon-graphs/lib/js/helpers/utils';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Graph.module.scss';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Line/LineGraph.module.scss';\nimport ExampleGraphContainer from '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer';\nimport getLineDefaultConfig from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Line/lineDefault';\nimport exampleData1 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Line/dataset1critical';\nimport exampleData2 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Line/dataset3critical';\nimport exampleData3 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Line/dataset4critical';\n\n/*\nPlease refer to the documentation below to see the graphConfig and data objects\n*/\n\nconst graphConfig = utils.deepClone(getLineDefaultConfig('#criticalityMultiLine'));\nconst dataset = [\n  utils.deepClone(exampleData1),\n  utils.deepClone(exampleData2),\n  utils.deepClone(exampleData3),\n];\n\nconst CriticalityMultiLineExample = () => {\n  React.useEffect(() => {\n    const graph = Carbon.api.graph(graphConfig);\n    dataset.forEach((data) => {\n      graph.loadContent(Carbon.api.line(data));\n    });\n  }, []);\n  return (\n    <ExampleGraphContainer id=\"criticalityMultiLine\" />\n  );\n};\n\nexport default CriticalityMultiLineExample;\n\n\n")))}w.isMDXComponent=!0;var D=function(e){var t=e.title,n=e.description,r=e.isExpanded;return a.createElement(u.A,{title:t||"Multi Line",description:n,example:a.createElement(O.A,null),exampleCssSrc:a.createElement(d.A,null),exampleSrc:a.createElement(w,null),isExpanded:r})},E=["components"];function M(){return M=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},M.apply(this,arguments)}function S(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var A={},k="wrapper";function G(e){var t=e.components,n=S(e,E);return(0,r.mdx)(k,M({},A,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport { loadPopup } from '@cerner/terra-graphs-docs/lib/example-datasets/popup';\nimport { createGraphValuesWithSin } from '../createGraphValues';\n\nconst data = {\n  key: 'uid_3',\n  label: {\n    display: 'Data Label 3',\n  },\n  shape: Carbon.helpers.SHAPES.DARK.X,\n  color: Carbon.helpers.COLORS.GREEN,\n  onClick: loadPopup,\n  values: createGraphValuesWithSin({\n    length: 8, initialX: 85, xModifier: 25, yModifier: Math.PI * 4,\n  }),\n};\n\ndata.values[2].isCritical = true;\ndata.values[6].isCritical = true;\n\nexport default data;\n\n")))}G.isMDXComponent=!0;var T=["components"];function _(){return _=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},_.apply(this,arguments)}function N(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var X={},I="wrapper";function R(e){var t=e.components,n=N(e,T);return(0,r.mdx)(I,_({},X,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport { loadPopup } from '@cerner/terra-graphs-docs/lib/example-datasets/popup';\n\nconst data = {\n  key: 'uid_4',\n  label: {\n    display: 'Data Label 4',\n  },\n  shape: Carbon.helpers.SHAPES.DARK.CROSS,\n  color: Carbon.helpers.COLORS.LIGHT_PURPLE,\n  onClick: loadPopup,\n  values: new Array(15).fill('').map((_, i) => ({\n    y: Math.sin(i) * Math.PI * 4,\n    x: 85 + i * 10,\n    region: {\n      start: Math.sin(i) * Math.PI * 4 - Math.PI,\n      end: Math.sin(i) * Math.PI * 4 + Math.PI,\n    },\n  })),\n};\n\ndata.values[4].isCritical = true;\ndata.values[8].isCritical = true;\n\nexport default data;\n\n")))}R.isMDXComponent=!0;var V=["components"];function H(){return H=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},H.apply(this,arguments)}function W(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}n(27647);var B={},z="wrapper";function K(e){var t=e.components,n=W(e,V);return(0,r.mdx)(z,H({},B,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"criticality"},"Criticality"),(0,r.mdx)("p",null,"Criticality consists of line graph examples with simple and multi critical points(highlighted with red circles)."),(0,r.mdx)("h2",{id:"getting-started"},"Getting Started"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Install with ",(0,r.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"npm i @cerner/carbon-graphs --save-dev"))))),(0,r.mdx)("h2",{id:"usage"},"Usage"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/dist/js/carbon-graphs.js';\nimport '@cerner/carbon-graphs/dist/css/carbon-graphs.css';\n")),(0,r.mdx)("h2",{id:"examples"},"Examples"),(0,r.mdx)(f,{mdxType:"SimpleCriticalLineGraph"}),(0,r.mdx)("details",null,(0,r.mdx)("summary",{style:{fontSize:24}},(0,r.mdx)("b",null,"Data used for simple criticality")),(0,r.mdx)("h3",{id:"graph-config-object"},"Graph Config object"),(0,r.mdx)(m.A,{mdxType:"SimpleCriticalGraphConfig"}),(0,r.mdx)("h3",{id:"data-object"},"Data object"),(0,r.mdx)(x,{mdxType:"SimpleCriticalDataObject"})),(0,r.mdx)("br",null),(0,r.mdx)("br",null),(0,r.mdx)("br",null),(0,r.mdx)(D,{mdxType:"MultiCriticalityLineGraph"}),(0,r.mdx)("details",null,(0,r.mdx)("summary",{style:{fontSize:24}},(0,r.mdx)("b",null,"Data used for multiple criticality")),(0,r.mdx)("h3",{id:"graph-config-object-1"},"Graph Config object"),(0,r.mdx)(m.A,{mdxType:"MultiCriticalityGraphConfig"}),(0,r.mdx)("h3",{id:"data-object-1"},"Data object"),(0,r.mdx)("h4",{id:"dataset-1"},"Dataset 1"),(0,r.mdx)(x,{mdxType:"MultiCriticalityDataObject1"}),(0,r.mdx)("h4",{id:"dataset-2"},"Dataset 2"),(0,r.mdx)(G,{mdxType:"MultiCriticalityDataObject2"}),(0,r.mdx)("h4",{id:"dataset-3"},"Dataset 3"),(0,r.mdx)(R,{mdxType:"MultiCriticalityDataObject3"})))}K.isMDXComponent=!0},49462:function(e,t,n){"use strict";n.d(t,{A:function(){return s}});n(96540);var a=n(36665),r=["components"];function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},i.apply(this,arguments)}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o={},p="wrapper";function s(e){var t=e.components,n=l(e,r);return(0,a.mdx)(p,i({},o,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-js"},"const getLineDefaultConfig = (id) => ({\n  bindTo: id,\n  bindLegendTo: null,\n  axis: {\n    x: {\n      show: true,\n      label: 'Data',\n      lowerLimit: 80,\n      upperLimit: 280,\n    },\n    y: {\n      show: true,\n      label: 'Line Set A',\n      lowerLimit: -18,\n      upperLimit: 18,\n    },\n    y2: {\n      show: false,\n      label: 'Line Set B',\n      lowerLimit: 0,\n      upperLimit: 250,\n    },\n  },\n  showLabel: true,\n  showLegend: true,\n  showShapes: true,\n  showVGrid: true,\n  showHGrid: true,\n});\n\nexport default getLineDefaultConfig;\n\n\n")))}s.isMDXComponent=!0},27647:function(e,t,n){var a,r;void 0===(r="function"==typeof(a=function(){var e="details",t="summary";function n(e){if("summary"===e.target.nodeName.toLowerCase()){var t=e.target.parentNode;if(!t)return;t.getAttribute("open")?(t.open=!1,t.removeAttribute("open")):(t.open=!0,t.setAttribute("open","open"))}}function a(){var n=document.createElement(e);if(!("open"in n))return!1;n.innerHTML="<"+t+">a</"+t+">b",document.body.appendChild(n);var a=n.offsetHeight;n.open=!0;var r=a!=n.offsetHeight;return document.body.removeChild(n),r}function r(e,t){if(!document.getElementById(e)){var n=document.createElement("style");n.id=e,n.innerHTML=t,document.getElementsByTagName("head")[0].appendChild(n)}}a()||(document.documentElement.className+=" no-details",window.addEventListener("click",n),r("details-polyfill-style","html.no-details "+e+" { display: block; }\nhtml.no-details "+e+":not([open]) > :not("+t+") { display: none; }\nhtml.no-details "+e+" > "+t+':before { content: "▶"; display: inline-block; font-size: .8em; width: 1.5em; }\nhtml.no-details '+e+"[open] > "+t+':before { content: "▼"; }'))})?a.call(t,n,t,e):a)||(e.exports=r)},45633:function(e,t,n){"use strict";n.r(t),t.default={}}}]);