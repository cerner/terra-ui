(self.webpackChunkterra_ui=self.webpackChunkterra_ui||[]).push([[85960],{48136:function(e,t,n){"use strict";var a=n(22411);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(27320)),o=n(30660),l=n(70727),i={key:"uid_5",label:{display:"Data Label 5"},shape:r.default.helpers.SHAPES.DARK.SQUARE,color:r.default.helpers.COLORS.ORANGE,onClick:o.loadPopup,values:(0,l.createGraphValuesWithCos)({length:20,initialX:85,xModifier:10,yModifier:5*Math.PI}),legendOptions:{showLine:!0,showShape:!0},regions:[{axis:"y",start:2,end:10,color:"#f4f4f4"},{axis:"y",start:12,end:18,color:"#c8cacb"}]};t.default=i},70727:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.createGraphValuesWithSin=t.createGraphValuesWithCos=void 0;t.createGraphValuesWithSin=function(e){var t=e.length,n=e.initialX,a=e.xModifier,r=e.yModifier;return new Array(t).fill("").map((function(e,t){return{y:Math.sin(t)*r,x:n+t*a}}))},t.createGraphValuesWithCos=function(e){var t=e.length,n=e.initialX,a=e.xModifier,r=e.yModifier;return new Array(t).fill("").map((function(e,t){return{y:Math.cos(t)*r,x:n+t*a}}))}},41964:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default=function(e){return{bindTo:e,bindLegendTo:null,axis:{x:{show:!0,label:"Data",lowerLimit:80,upperLimit:280},y:{show:!0,label:"Line Set A",lowerLimit:-18,upperLimit:18},y2:{show:!1,label:"Line Set B",lowerLimit:0,upperLimit:250}},showLabel:!0,showLegend:!0,showShapes:!0,showVGrid:!0,showHGrid:!0}}},30660:function(e,t,n){"use strict";var a=n(22411),r=n(59848);Object.defineProperty(t,"__esModule",{value:!0}),t.loadY2AxisLabelPopup=t.loadXAndYAxisLabelPopup=t.loadTrackPopup=t.loadTimelinePopup=t.loadTextLabelPopup=t.loadTaskPopup=t.loadPopup=t.loadPiePopup=t.loadDatelinePopup=t.loadBubblePopup=t.loadBarPopup=void 0;var o=a(n(97936)),l=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=r(e)&&"function"!=typeof e)return{default:e};var n=s(t);if(n&&n.has(e))return n.get(e);var a={__proto__:null},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var i=o?Object.getOwnPropertyDescriptor(e,l):null;i&&(i.get||i.set)?Object.defineProperty(a,l,i):a[l]=e[l]}return a.default=e,n&&n.set(e,a),a}(n(32728)),i=a(n(21012)),p=a(n(82452));function s(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(s=function(e){return e?n:t})(e)}var c=function(e){return new Date(e).toLocaleString()},u=function(e){return e?d(e)?c(e):e:null},d=function(e){return e instanceof Date},f=function(e,t,n){var a=e.append("g").classed("popup-item",!0);a.append("label").classed("popup-label",!0).text(t),a.append("g").classed("popup-text",!0).text(n)},m=function(e,t,n){var a=e.append("g").classed("popup-item",!0);a.append("label").classed("popup-label",!0).text(t);for(var r=a.append("g").classed("section",!0),l=function(){var e=p[i],t=r.append("g").classed("content",!0);Object.entries(e).forEach((function(e){var n=(0,o.default)(e,2),a=n[0],r=n[1],l=t.append("g").classed("popup-item",!0);l.append("label").classed("popup-label",!0).text(a.replace(/([a-z0-9])([A-Z])/g,"$1 $2").replace(/(\b[a-z](?!\s))/g,(function(e){return e.toUpperCase()}))),l.append("g").classed("popup-text",!0).text(r)}))},i=0,p=Object.values(n);i<p.length;i++)l()},g=function(e){var t=document.querySelector("#tooltip");return l.select("body").append("div","#tooltip").attr("id","overlay").classed("overlay",!0).on("click",(function n(){l.select(t).attr("style","display:none;").selectAll("g").remove(),p.default.isFunction(e)&&e(),l.select("#overlay").remove(),t.removeEventListener("click",n),window.removeEventListener("resize",n)})),l.select("#tooltip").style("left","".concat(l.event.pageX+5,"px")).style("top","".concat(l.event.pageY+5,"px"))},h=function(){l.select("#overlay").remove(),document.getElementsByClassName("initial-tooltip")[0]&&(document.getElementsByClassName("initial-tooltip")[0].className="tooltip"),l.select("#tooltip").attr("style","").selectAll("g").remove()};t.loadPopup=function(e,t,n,a){h();var r=g(e).append("g"),o=a.x,l=a.y,i=a.label,p=a.high,s=a.mid,m=a.low;o?(f(r,"X axis","".concat(d(o)?c(o):o)),f(r,"".concat(i.display),l)):(f(r,"X axis","".concat(p?u(p.x):s?u(s.x):m?u(m.x):"N/A")),p&&f(r,"High",u(p.y)),s&&f(r,"Mid",u(s.y)),m&&f(r,"Low",u(m.y)))},t.loadBubblePopup=function(e,t,n,a){h();var r=g(e).append("g"),o=a.x,l=a.y,i=a.label,p=a.weight;o&&(f(r,"X axis","".concat(d(o)?c(o):o)),f(r,"year",l)),p&&f(r,"".concat(i.display),"".concat(p))},t.loadBarPopup=function(e,t,n,a){h();var r=g(e).append("g");a.forEach((function(e){return f(r,"".concat(e.label.display),"".concat(e.y))}))},t.loadTextLabelPopup=function(e,t,n){h();var a=g(e).append("g").classed("popup-item",!0).append("g").attr("style","display: inline-block;"),r=t.shape,o=t.label,l=t.color;p.default.notEmpty(r)&&a.append("svg").attr("width","15").attr("height","12").append("path").attr("transform","translate(".concat(0,", ",0,") scale(",r.options.scale,")")).attr("d",r.path.d).attr("fill",r.path.fill||i.default.DEFAULT_COLOR).attr("id",r.path.id),o.display&&a.append("text").classed("popup-text",!0).attr("style","color: ".concat(l,";")).text("".concat(o.display)),o.secondaryDisplay&&a.append("tspan").attr("style","color: ".concat(i.default.DEFAULT_COLOR,";")).text(" ".concat(o.secondaryDisplay))},t.loadXAndYAxisLabelPopup=function(e){h(),g().append("g").append("g").classed("popup-item",!0).append("g").classed("popup-text",!0).text(e)},t.loadY2AxisLabelPopup=function(e){var t,n;h(),(n=document.querySelector("#tooltip"),l.select("body").append("div","#tooltip").attr("id","overlay").classed("overlay",!0).on("click",(function e(){l.select(n).attr("style","display:none;").selectAll("g").remove(),p.default.isFunction(t)&&t(),l.select("#overlay").remove(),n.removeEventListener("click",e),window.removeEventListener("resize",e)})),l.select("#tooltip").style("left","".concat(l.event.pageX-250,"px")).style("top","".concat(l.event.pageY+5,"px"))).append("g").append("g").classed("popup-item",!0).append("g").classed("popup-text",!0).text(e)},t.loadTrackPopup=function(e,t,n){h();var a=g(e).append("g"),r=n.tasks,o=n.activities,l=n.events,i=n.actions;if(r&&r.length>0){var p=[];p.forEach((function(e){p.push({name:e.key,startDate:e.startDate,endDate:e.endDate})})),m(a,"Tasks",p)}if(o&&o.length>0){var s=[];o.forEach((function(e){s.push({name:e.key,startDate:e.startDate,endDate:e.endDate})})),m(a,"Activities",s)}if(l&&l.length>0){var c=[];l.forEach((function(e){c.push({name:e.key,values:e.values.join(", ")})})),m(a,"Events",c)}if(i&&i.length>0){var u=[];i.forEach((function(e){u.push({name:e.key,values:e.values.join(", ")})})),m(a,"Actions",u)}},t.loadTaskPopup=function(e,t,n,a){h();var r=g(e).append("g"),o=a.label,l=a.display,i=a.y,p=a.startDate,s=a.endDate,u=a.percentage;o&&f(r,"Task Name",l),f(r,"Track",i),f(r,"Start Date",c(p)),f(r,"End Date",c(s)),u&&f(r,"Percentage",u)},t.loadDatelinePopup=function(e,t){h();var n=g(e).append("g"),a=t.label,r=t.value;a&&f(n,"Milestone",a.display),f(n,"Date",c(r))},t.loadTimelinePopup=function(e,t,n,a){h();var r=g(e).append("g"),o=a.x,l=(a.y,a.label),i=a.content;f(r,"X axis","".concat(d(o)?c(o):o)),f(r,"".concat(l.display),i)},t.loadPiePopup=function(e,t,n,a){h();var r=g(e).append("g"),o=a.label,l=a.value;f(r,o.display,l)}},2884:function(e,t,n){"use strict";var a=n(22411);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(11504)),o=a(n(3268));n(88140);var l={id:o.default.string.isRequired},i=function(e){return r.default.createElement(r.default.Fragment,null,r.default.createElement("div",{id:"tooltip",className:"initial-tooltip"}),r.default.createElement("div",{id:e.id,className:"example-graph-container"}))};i.propTypes=l;t.default=i},6064:function(e,t,n){"use strict";var a=n(22411);t.c=void 0;var r=a(n(11504)),o=a(n(27320)),l=a(n(82452));n(20512),n(49192);var i=a(n(2884)),p=a(n(41964)),s=a(n(48136)),c=l.default.deepClone((0,p.default)("#multipleRegions")),u=l.default.deepClone(s.default);t.c=function(){return r.default.useEffect((function(){o.default.api.graph(c).loadContent(o.default.api.line(u))}),[]),r.default.createElement(i.default,{id:"multipleRegions"})}},63580:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return O}});var a=n(11504),r=n(69788),o=n(6064),l=["components"];function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},i.apply(this,arguments)}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s={};function c(e){var t=e.components,n=p(e,l);return(0,r.mdx)("wrapper",i({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport utils from '@cerner/carbon-graphs/lib/js/helpers/utils';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Graph.module.scss';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Line/LineGraph.module.scss';\nimport ExampleGraphContainer from '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer';\nimport getLineDefaultConfig from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Line/lineDefault';\nimport exampleData from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Line/datasetRegions5';\n\n/*\nPlease refer to the documentation below to see the graphConfig and data objects\n*/\n\nconst graphConfig = utils.deepClone(getLineDefaultConfig('#multipleRegions'));\nconst dataset = utils.deepClone(exampleData);\n\nconst MultipleRegionsLineExample = () => {\n  React.useEffect(() => {\n    const graph = Carbon.api.graph(graphConfig);\n    graph.loadContent(Carbon.api.line(dataset));\n  }, []);\n  return (\n    <ExampleGraphContainer id=\"multipleRegions\" />\n  );\n};\n\nexport default MultipleRegionsLineExample;\n\n")))}c.isMDXComponent=!0;var u=n(33792),d=n(1208),f=function(e){var t=e.title,n=e.description,r=e.isExpanded;return a.createElement(u.c,{title:t||"Multiple Regions",description:n,example:a.createElement(o.c,null),exampleCssSrc:a.createElement(d.c,null),exampleSrc:a.createElement(c,null),isExpanded:r})};n(88448);var m=["components"];function g(){return g=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},g.apply(this,arguments)}function h(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}n(78704);var v=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.mdx)("div",t)}},y=v("GraphConfig"),b=v("DataObject"),x={},w="wrapper";function O(e){var t=e.components,n=h(e,m);return(0,r.mdx)(w,g({},x,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"multiple-regions"},"Multiple regions"),(0,r.mdx)("p",null,"This is line graph associated with multiple regions."),(0,r.mdx)("h2",{id:"getting-started"},"Getting Started"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Install with ",(0,r.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"npm i @cerner/carbon-graphs --save-dev"))))),(0,r.mdx)("h2",{id:"usage"},"Usage"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/dist/js/carbon-graphs.js';\nimport '@cerner/carbon-graphs/dist/css/carbon-graphs.css';\n")),(0,r.mdx)("h2",{id:"example"},"Example"),(0,r.mdx)(f,{mdxType:"LineGraph"}),(0,r.mdx)("details",null,(0,r.mdx)("summary",{style:{fontSize:24}},(0,r.mdx)("b",null,"Data")),(0,r.mdx)("h3",{id:"graph-config-object"},"Graph Config object"),(0,r.mdx)(y,{mdxType:"GraphConfig"}),(0,r.mdx)("h3",{id:"data-object"},"Data object"),(0,r.mdx)(b,{mdxType:"DataObject"})))}O.isMDXComponent=!0},88448:function(e,t,n){"use strict";n.d(t,{c:function(){return s}});n(11504);var a=n(69788),r=["components"];function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o.apply(this,arguments)}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i={},p="wrapper";function s(e){var t=e.components,n=l(e,r);return(0,a.mdx)(p,o({},i,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-js"},"const getLineDefaultConfig = (id) => ({\n  bindTo: id,\n  bindLegendTo: null,\n  axis: {\n    x: {\n      show: true,\n      label: 'Data',\n      lowerLimit: 80,\n      upperLimit: 280,\n    },\n    y: {\n      show: true,\n      label: 'Line Set A',\n      lowerLimit: -18,\n      upperLimit: 18,\n    },\n    y2: {\n      show: false,\n      label: 'Line Set B',\n      lowerLimit: 0,\n      upperLimit: 250,\n    },\n  },\n  showLabel: true,\n  showLegend: true,\n  showShapes: true,\n  showVGrid: true,\n  showHGrid: true,\n});\n\nexport default getLineDefaultConfig;\n\n\n")))}s.isMDXComponent=!0},78704:function(e,t,n){var a,r;void 0===(r="function"==typeof(a=function(){var e="details",t="summary";function n(e){if("summary"===e.target.nodeName.toLowerCase()){var t=e.target.parentNode;if(!t)return;t.getAttribute("open")?(t.open=!1,t.removeAttribute("open")):(t.open=!0,t.setAttribute("open","open"))}}function a(){var n=document.createElement(e);if(!("open"in n))return!1;n.innerHTML="<"+t+">a</"+t+">b",document.body.appendChild(n);var a=n.offsetHeight;n.open=!0;var r=a!=n.offsetHeight;return document.body.removeChild(n),r}function r(e,t){if(!document.getElementById(e)){var n=document.createElement("style");n.id=e,n.innerHTML=t,document.getElementsByTagName("head")[0].appendChild(n)}}a()||(document.documentElement.className+=" no-details",window.addEventListener("click",n),r("details-polyfill-style","html.no-details "+e+" { display: block; }\nhtml.no-details "+e+":not([open]) > :not("+t+") { display: none; }\nhtml.no-details "+e+" > "+t+':before { content: "▶"; display: inline-block; font-size: .8em; width: 1.5em; }\nhtml.no-details '+e+"[open] > "+t+':before { content: "▼"; }'))})?a.call(t,n,t,e):a)||(e.exports=r)},49192:function(e,t,n){"use strict";n.r(t),t.default={}}}]);