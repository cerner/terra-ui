(self.webpackChunkterra_ui=self.webpackChunkterra_ui||[]).push([[39040],{74772:function(e,t,n){"use strict";var a=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n(54520)),r=n(22678),l={key:"dynamic_dataset_1",label:{display:"Data Label 1"},color:o.default.helpers.COLORS.BLUE,onClick:r.loadBarPopup,values:[{x:new Date(2016,0,1,3).toISOString(),y:15},{x:new Date(2016,0,1,6).toISOString(),y:19},{x:new Date(2016,0,1,9).toISOString(),y:10},{x:new Date(2016,0,1,12).toISOString(),y:13},{x:new Date(2016,0,1,15).toISOString(),y:15}]};t.default=l},22678:function(e,t,n){"use strict";var a=n(64836),o=n(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.loadY2AxisLabelPopup=t.loadXAndYAxisLabelPopup=t.loadTrackPopup=t.loadTimelinePopup=t.loadTextLabelPopup=t.loadTaskPopup=t.loadPopup=t.loadPiePopup=t.loadDatelinePopup=t.loadBubblePopup=t.loadBarPopup=void 0;var r=a(n(27424)),l=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=o(e)&&"function"!=typeof e)return{default:e};var n=c(t);if(n&&n.has(e))return n.get(e);var a={__proto__:null},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var p=r?Object.getOwnPropertyDescriptor(e,l):null;p&&(p.get||p.set)?Object.defineProperty(a,l,p):a[l]=e[l]}return a.default=e,n&&n.set(e,a),a}(n(79590)),p=a(n(88703)),i=a(n(53334));function c(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(c=function(e){return e?n:t})(e)}var s=function(e){return new Date(e).toLocaleString()},u=function(e){return e?d(e)?s(e):e:null},d=function(e){return e instanceof Date},f=function(e,t,n){var a=e.append("g").classed("popup-item",!0);a.append("label").classed("popup-label",!0).text(t),a.append("g").classed("popup-text",!0).text(n)},y=function(e,t,n){var a=e.append("g").classed("popup-item",!0);a.append("label").classed("popup-label",!0).text(t);for(var o=a.append("g").classed("section",!0),l=function(){var e=i[p],t=o.append("g").classed("content",!0);Object.entries(e).forEach((function(e){var n=(0,r.default)(e,2),a=n[0],o=n[1],l=t.append("g").classed("popup-item",!0);l.append("label").classed("popup-label",!0).text(a.replace(/([a-z0-9])([A-Z])/g,"$1 $2").replace(/(\b[a-z](?!\s))/g,(function(e){return e.toUpperCase()}))),l.append("g").classed("popup-text",!0).text(o)}))},p=0,i=Object.values(n);p<i.length;p++)l()},m=function(e){var t=document.querySelector("#tooltip");return l.select("body").append("div","#tooltip").attr("id","overlay").classed("overlay",!0).on("click",(function n(){l.select(t).attr("style","display:none;").selectAll("g").remove(),i.default.isFunction(e)&&e(),l.select("#overlay").remove(),t.removeEventListener("click",n),window.removeEventListener("resize",n)})),l.select("#tooltip").style("left","".concat(l.event.pageX+5,"px")).style("top","".concat(l.event.pageY+5,"px"))},v=function(){l.select("#overlay").remove(),document.getElementsByClassName("initial-tooltip")[0]&&(document.getElementsByClassName("initial-tooltip")[0].className="tooltip"),l.select("#tooltip").attr("style","").selectAll("g").remove()};t.loadPopup=function(e,t,n,a){v();var o=m(e).append("g"),r=a.x,l=a.y,p=a.label,i=a.high,c=a.mid,y=a.low;r?(f(o,"X axis","".concat(d(r)?s(r):r)),f(o,"".concat(p.display),l)):(f(o,"X axis","".concat(i?u(i.x):c?u(c.x):y?u(y.x):"N/A")),i&&f(o,"High",u(i.y)),c&&f(o,"Mid",u(c.y)),y&&f(o,"Low",u(y.y)))},t.loadBubblePopup=function(e,t,n,a){v();var o=m(e).append("g"),r=a.x,l=a.y,p=a.label,i=a.weight;r&&(f(o,"X axis","".concat(d(r)?s(r):r)),f(o,"year",l)),i&&f(o,"".concat(p.display),"".concat(i))},t.loadBarPopup=function(e,t,n,a){v();var o=m(e).append("g");a.forEach((function(e){return f(o,"".concat(e.label.display),"".concat(e.y))}))},t.loadTextLabelPopup=function(e,t,n){v();var a=m(e).append("g").classed("popup-item",!0).append("g").attr("style","display: inline-block;"),o=t.shape,r=t.label,l=t.color;i.default.notEmpty(o)&&a.append("svg").attr("width","15").attr("height","12").append("path").attr("transform","translate(".concat(0,", ",0,") scale(",o.options.scale,")")).attr("d",o.path.d).attr("fill",o.path.fill||p.default.DEFAULT_COLOR).attr("id",o.path.id),r.display&&a.append("text").classed("popup-text",!0).attr("style","color: ".concat(l,";")).text("".concat(r.display)),r.secondaryDisplay&&a.append("tspan").attr("style","color: ".concat(p.default.DEFAULT_COLOR,";")).text(" ".concat(r.secondaryDisplay))},t.loadXAndYAxisLabelPopup=function(e){v(),m().append("g").append("g").classed("popup-item",!0).append("g").classed("popup-text",!0).text(e)},t.loadY2AxisLabelPopup=function(e){var t,n;v(),(n=document.querySelector("#tooltip"),l.select("body").append("div","#tooltip").attr("id","overlay").classed("overlay",!0).on("click",(function e(){l.select(n).attr("style","display:none;").selectAll("g").remove(),i.default.isFunction(t)&&t(),l.select("#overlay").remove(),n.removeEventListener("click",e),window.removeEventListener("resize",e)})),l.select("#tooltip").style("left","".concat(l.event.pageX-250,"px")).style("top","".concat(l.event.pageY+5,"px"))).append("g").append("g").classed("popup-item",!0).append("g").classed("popup-text",!0).text(e)},t.loadTrackPopup=function(e,t,n){v();var a=m(e).append("g"),o=n.tasks,r=n.activities,l=n.events,p=n.actions;if(o&&o.length>0){var i=[];i.forEach((function(e){i.push({name:e.key,startDate:e.startDate,endDate:e.endDate})})),y(a,"Tasks",i)}if(r&&r.length>0){var c=[];r.forEach((function(e){c.push({name:e.key,startDate:e.startDate,endDate:e.endDate})})),y(a,"Activities",c)}if(l&&l.length>0){var s=[];l.forEach((function(e){s.push({name:e.key,values:e.values.join(", ")})})),y(a,"Events",s)}if(p&&p.length>0){var u=[];p.forEach((function(e){u.push({name:e.key,values:e.values.join(", ")})})),y(a,"Actions",u)}},t.loadTaskPopup=function(e,t,n,a){v();var o=m(e).append("g"),r=a.label,l=a.display,p=a.y,i=a.startDate,c=a.endDate,u=a.percentage;r&&f(o,"Task Name",l),f(o,"Track",p),f(o,"Start Date",s(i)),f(o,"End Date",s(c)),u&&f(o,"Percentage",u)},t.loadDatelinePopup=function(e,t){v();var n=m(e).append("g"),a=t.label,o=t.value;a&&f(n,"Milestone",a.display),f(n,"Date",s(o))},t.loadTimelinePopup=function(e,t,n,a){v();var o=m(e).append("g"),r=a.x,l=(a.y,a.label),p=a.content;f(o,"X axis","".concat(d(r)?s(r):r)),f(o,"".concat(l.display),p)},t.loadPiePopup=function(e,t,n,a){v();var o=m(e).append("g"),r=a.label,l=a.value;f(o,r.display,l)}},93065:function(e,t,n){"use strict";var a=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n(67294)),r=a(n(45697));n(80244);var l={id:r.default.string.isRequired},p=function(e){return o.default.createElement(o.default.Fragment,null,o.default.createElement("div",{id:"tooltip",className:"initial-tooltip"}),o.default.createElement("div",{id:e.id,className:"example-graph-container"}))};p.propTypes=l;t.default=p},97842:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});n(67294);var a=n(81254),o=["components"];function r(){return r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r.apply(this,arguments)}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p={},i="wrapper";function c(e){var t=e.components,n=l(e,o);return(0,a.mdx)(i,r({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport { loadBarPopup } from '@cerner/terra-graphs-docs/lib/example-datasets/popup';\n\nconst data = {\n  key: 'dynamic_dataset_1',\n  label: {\n    display: 'Data Label 1',\n  },\n  color: Carbon.helpers.COLORS.BLUE,\n  onClick: loadBarPopup,\n  values: [\n    {\n      x: new Date(2016, 0, 1, 3).toISOString(),\n      y: 15,\n    },\n    {\n      x: new Date(2016, 0, 1, 6).toISOString(),\n      y: 19,\n    },\n    {\n      x: new Date(2016, 0, 1, 9).toISOString(),\n      y: 10,\n    },\n    {\n      x: new Date(2016, 0, 1, 12).toISOString(),\n      y: 13,\n    },\n    {\n      x: new Date(2016, 0, 1, 15).toISOString(),\n      y: 15,\n    },\n  ],\n};\n\nexport default data;\n\n")))}c.isMDXComponent=!0},66826:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});n(67294);var a=n(81254),o=["components"];function r(){return r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r.apply(this,arguments)}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p={},i="wrapper";function c(e){var t=e.components,n=l(e,o);return(0,a.mdx)(i,r({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/lib/js/carbon';\n\nconst getbarConfig = (id) => ({\n  bindTo: id,\n  bindLegendTo: null,\n  axis: {\n    x: {\n      show: true,\n      type: Carbon.helpers.AXIS_TYPE.TIME_SERIES,\n      label: 'Data',\n      lowerLimit: new Date(2016, 0, 1, 0).toISOString(),\n      upperLimit: new Date(2016, 0, 2, 0).toISOString(),\n      ticks: {\n        values: [\n          new Date(2016, 0, 1, 3).toISOString(),\n          new Date(2016, 0, 1, 6).toISOString(),\n          new Date(2016, 0, 1, 9).toISOString(),\n          new Date(2016, 0, 1, 12).toISOString(),\n          new Date(2016, 0, 1, 15).toISOString(),\n        ],\n        format: '%H',\n      },\n    },\n    y: {\n      show: true,\n      label: 'Bar Set A',\n      lowerLimit: 0,\n      upperLimit: 20,\n    },\n    y2: {\n      show: false,\n      label: 'Line Set B',\n      lowerLimit: 0,\n      upperLimit: 20,\n    },\n  },\n  showLabel: true,\n  showLegend: true,\n  showShapes: true,\n  showVGrid: false,\n  showHGrid: true,\n});\n\nexport default getbarConfig;\n\n\n")))}c.isMDXComponent=!0},51320:function(e,t,n){var a,o;void 0===(o="function"==typeof(a=function(){var e="details",t="summary";function n(e){if("summary"===e.target.nodeName.toLowerCase()){var t=e.target.parentNode;if(!t)return;t.getAttribute("open")?(t.open=!1,t.removeAttribute("open")):(t.open=!0,t.setAttribute("open","open"))}}function a(){var n=document.createElement(e);if(!("open"in n))return!1;n.innerHTML="<"+t+">a</"+t+">b",document.body.appendChild(n);var a=n.offsetHeight;n.open=!0;var o=a!=n.offsetHeight;return document.body.removeChild(n),o}function o(e,t){if(!document.getElementById(e)){var n=document.createElement("style");n.id=e,n.innerHTML=t,document.getElementsByTagName("head")[0].appendChild(n)}}a()||(document.documentElement.className+=" no-details",window.addEventListener("click",n),o("details-polyfill-style","html.no-details "+e+" { display: block; }\nhtml.no-details "+e+":not([open]) > :not("+t+") { display: none; }\nhtml.no-details "+e+" > "+t+':before { content: "▶"; display: inline-block; font-size: .8em; width: 1.5em; }\nhtml.no-details '+e+"[open] > "+t+':before { content: "▼"; }'))})?a.call(t,n,t,e):a)||(e.exports=o)},83054:function(e,t,n){"use strict";n.r(t),t.default={}}}]);