(self.webpackChunkterra_ui=self.webpackChunkterra_ui||[]).push([[32395],{42777:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(22678);function o(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var a=0,o=function(){};return{s:o,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var l,i=!0,c=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return i=e.done,e},e:function(e){c=!0,l=e},f:function(){try{i||null==n.return||n.return()}finally{if(c)throw l}}}}function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}var l=function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],l=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],i=arguments.length>5&&void 0!==arguments[5]&&arguments[5],c=[],p=o(Array(arguments.length>4&&void 0!==arguments[4]?arguments[4]:1).keys());try{for(p.s();!(e=p.n()).done;){var s=e.value,d={key:"track ".concat(s),onClick:i?a.loadTrackPopup:void 0,trackLabel:{display:"Project ".concat(String.fromCharCode(65+s)),onClick:a.loadXAndYAxisLabelPopup},tasks:t[s]?t[s]:{},activities:n[s]?n[s]:{},events:r[s]?r[s]:{},actions:l[s]?l[s]:{}};c.push(d)}}catch(e){p.e(e)}finally{p.f()}return c};t.default=l},22678:function(e,t,n){"use strict";var a=n(64836),o=n(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.loadY2AxisLabelPopup=t.loadXAndYAxisLabelPopup=t.loadTrackPopup=t.loadTimelinePopup=t.loadTextLabelPopup=t.loadTaskPopup=t.loadPopup=t.loadPiePopup=t.loadDatelinePopup=t.loadBubblePopup=t.loadBarPopup=void 0;var r=a(n(27424)),l=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==o(e)&&"function"!=typeof e)return{default:e};var n=p(t);if(n&&n.has(e))return n.get(e);var a={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var i=r?Object.getOwnPropertyDescriptor(e,l):null;i&&(i.get||i.set)?Object.defineProperty(a,l,i):a[l]=e[l]}a.default=e,n&&n.set(e,a);return a}(n(66668)),i=a(n(88703)),c=a(n(53334));function p(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(p=function(e){return e?n:t})(e)}var s=function(e){return new Date(e).toLocaleString()},d=function(e){return e?u(e)?s(e):e:null},u=function(e){return e instanceof Date},f=function(e,t,n){var a=e.append("g").classed("popup-item",!0);a.append("label").classed("popup-label",!0).text(t),a.append("g").classed("popup-text",!0).text(n)},v=function(e,t,n){var a=e.append("g").classed("popup-item",!0);a.append("label").classed("popup-label",!0).text(t);for(var o=a.append("g").classed("section",!0),l=function(){var e=c[i],t=o.append("g").classed("content",!0);Object.entries(e).forEach((function(e){var n=(0,r.default)(e,2),a=n[0],o=n[1],l=t.append("g").classed("popup-item",!0);l.append("label").classed("popup-label",!0).text(a.replace(/([a-z0-9])([A-Z])/g,"$1 $2").replace(/(\b[a-z](?!\s))/g,(function(e){return e.toUpperCase()}))),l.append("g").classed("popup-text",!0).text(o)}))},i=0,c=Object.values(n);i<c.length;i++)l()},y=function(e){var t=document.querySelector("#tooltip");return l.select("body").append("div","#tooltip").attr("id","overlay").classed("overlay",!0).on("click",(function n(){l.select(t).attr("style","display:none;").selectAll("g").remove(),c.default.isFunction(e)&&e(),l.select("#overlay").remove(),t.removeEventListener("click",n),window.removeEventListener("resize",n)})),l.select("#tooltip").style("left","".concat(l.event.pageX+5,"px")).style("top","".concat(l.event.pageY+5,"px"))},m=function(){l.select("#overlay").remove(),document.getElementsByClassName("initial-tooltip")[0]&&(document.getElementsByClassName("initial-tooltip")[0].className="tooltip"),l.select("#tooltip").attr("style","").selectAll("g").remove()};t.loadPopup=function(e,t,n,a){m();var o=y(e).append("g"),r=a.x,l=a.y,i=a.label,c=a.high,p=a.mid,v=a.low;r?(f(o,"X axis","".concat(u(r)?s(r):r)),f(o,"".concat(i.display),l)):(f(o,"X axis","".concat(c?d(c.x):p?d(p.x):v?d(v.x):"N/A")),c&&f(o,"High",d(c.y)),p&&f(o,"Mid",d(p.y)),v&&f(o,"Low",d(v.y)))};t.loadBubblePopup=function(e,t,n,a){m();var o=y(e).append("g"),r=a.x,l=a.y,i=a.label,c=a.weight;r&&(f(o,"X axis","".concat(u(r)?s(r):r)),f(o,"year",l)),c&&f(o,"".concat(i.display),"".concat(c))};t.loadBarPopup=function(e,t,n,a){m();var o=y(e).append("g");a.forEach((function(e){return f(o,"".concat(e.label.display),"".concat(e.y))}))};t.loadTextLabelPopup=function(e,t,n){m();var a=y(e).append("g").classed("popup-item",!0).append("g").attr("style","display: inline-block;"),o=t.shape,r=t.label,l=t.color;c.default.notEmpty(o)&&a.append("svg").attr("width","15").attr("height","12").append("path").attr("transform","translate(".concat(0,", ",0,") scale(",o.options.scale,")")).attr("d",o.path.d).attr("fill",o.path.fill||i.default.DEFAULT_COLOR).attr("id",o.path.id),r.display&&a.append("text").classed("popup-text",!0).attr("style","color: ".concat(l,";")).text("".concat(r.display)),r.secondaryDisplay&&a.append("tspan").attr("style","color: ".concat(i.default.DEFAULT_COLOR,";")).text(" ".concat(r.secondaryDisplay))};t.loadXAndYAxisLabelPopup=function(e){m(),y().append("g").append("g").classed("popup-item",!0).append("g").classed("popup-text",!0).text(e)};t.loadY2AxisLabelPopup=function(e){var t,n;m(),(n=document.querySelector("#tooltip"),l.select("body").append("div","#tooltip").attr("id","overlay").classed("overlay",!0).on("click",(function e(){l.select(n).attr("style","display:none;").selectAll("g").remove(),c.default.isFunction(t)&&t(),l.select("#overlay").remove(),n.removeEventListener("click",e),window.removeEventListener("resize",e)})),l.select("#tooltip").style("left","".concat(l.event.pageX-250,"px")).style("top","".concat(l.event.pageY+5,"px"))).append("g").append("g").classed("popup-item",!0).append("g").classed("popup-text",!0).text(e)};t.loadTrackPopup=function(e,t,n){m();var a=y(e).append("g"),o=n.tasks,r=n.activities,l=n.events,i=n.actions;if(o&&o.length>0){var c=[];c.forEach((function(e){c.push({name:e.key,startDate:e.startDate,endDate:e.endDate})})),v(a,"Tasks",c)}if(r&&r.length>0){var p=[];r.forEach((function(e){p.push({name:e.key,startDate:e.startDate,endDate:e.endDate})})),v(a,"Activities",p)}if(l&&l.length>0){var s=[];l.forEach((function(e){s.push({name:e.key,values:e.values.join(", ")})})),v(a,"Events",s)}if(i&&i.length>0){var d=[];i.forEach((function(e){d.push({name:e.key,values:e.values.join(", ")})})),v(a,"Actions",d)}};t.loadTaskPopup=function(e,t,n,a){m();var o=y(e).append("g"),r=a.label,l=a.display,i=a.y,c=a.startDate,p=a.endDate,d=a.percentage;r&&f(o,"Task Name",l),f(o,"Track",i),f(o,"Start Date",s(c)),f(o,"End Date",s(p)),d&&f(o,"Percentage",d)};t.loadDatelinePopup=function(e,t){m();var n=y(e).append("g"),a=t.label,o=t.value;a&&f(n,"Milestone",a.display),f(n,"Date",s(o))};t.loadTimelinePopup=function(e,t,n,a){m();var o=y(e).append("g"),r=a.x,l=(a.y,a.label),i=a.content;f(o,"X axis","".concat(u(r)?s(r):r)),f(o,"".concat(l.display),i)};t.loadPiePopup=function(e,t,n,a){m();var o=y(e).append("g"),r=a.label,l=a.value;f(o,r.display,l)}},93065:function(e,t,n){"use strict";var a=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n(67294)),r=a(n(45697));n(80244);var l={id:r.default.string.isRequired},i=function(e){return o.default.createElement(o.default.Fragment,null,o.default.createElement("div",{id:"tooltip",className:"initial-tooltip"}),o.default.createElement("div",{id:e.id,className:"example-graph-container"}))};i.propTypes=l;var c=i;t.default=c},12437:function(e,t,n){"use strict";n.d(t,{Z:function(){return p}});n(67294);var a=n(81254),o=["components"];function r(){return r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r.apply(this,arguments)}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i={},c="wrapper";function p(e){var t=e.components,n=l(e,o);return(0,a.mdx)(c,r({},i,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-js"},'import {\n  loadTrackPopup,\n  loadXAndYAxisLabelPopup,\n} from \'@cerner/terra-graphs-docs/lib/example-datasets/popup\';\n\nconst loadTracks = (\n  tasks = [],\n  activities = [],\n  events = [],\n  actions = [],\n  totalTracks = 1,\n  isTrackSelectable = false,\n) => {\n  const dataObjects = [];\n  // eslint-disable-next-line no-restricted-syntax\n  for (const each of Array(totalTracks).keys()) {\n    const data = {\n      key: `track ${each}`,\n      onClick: isTrackSelectable ? loadTrackPopup : undefined,\n      trackLabel: {\n        display: `Project ${String.fromCharCode(65 + each)}`,\n        onClick: loadXAndYAxisLabelPopup,\n      },\n      tasks: tasks[each] ? tasks[each] : {},\n      activities: activities[each] ? activities[each] : {},\n      events: events[each] ? events[each] : {},\n      actions: actions[each] ? actions[each] : {},\n    };\n    dataObjects.push(data);\n  }\n  return dataObjects;\n  /* gantt.unloadContent({\n        key: "track 3",\n        trackLabel: {\n            display: "Project C"\n        }\n    }); */\n};\n\nexport default loadTracks;\n\n')))}p.isMDXComponent=!0},51320:function(e,t,n){var a,o;void 0===(o="function"==typeof(a=function(){var e="details",t="summary";function n(e){if("summary"===e.target.nodeName.toLowerCase()){var t=e.target.parentNode;if(!t)return;t.getAttribute("open")?(t.open=!1,t.removeAttribute("open")):(t.open=!0,t.setAttribute("open","open"))}}function a(){var n=document.createElement(e);if(!("open"in n))return!1;n.innerHTML="<"+t+">a</"+t+">b",document.body.appendChild(n);var a=n.offsetHeight;n.open=!0;var o=a!=n.offsetHeight;return document.body.removeChild(n),o}function o(e,t){if(!document.getElementById(e)){var n=document.createElement("style");n.id=e,n.innerHTML=t,document.getElementsByTagName("head")[0].appendChild(n)}}a()||(document.documentElement.className+=" no-details",window.addEventListener("click",n),o("details-polyfill-style","html.no-details "+e+" { display: block; }\nhtml.no-details "+e+":not([open]) > :not("+t+") { display: none; }\nhtml.no-details "+e+" > "+t+':before { content: "▶"; display: inline-block; font-size: .8em; width: 1.5em; }\nhtml.no-details '+e+"[open] > "+t+':before { content: "▼"; }'))})?a.call(t,n,t,e):a)||(e.exports=o)},77449:function(e,t,n){"use strict";n.r(t),t.default={}}}]);