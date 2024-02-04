"use strict";(self.webpackChunkterra_ui=self.webpackChunkterra_ui||[]).push([[96764],{96764:function(e,n,t){t.r(n),t.d(n,{default:function(){return p}});t(11504);var a=t(69788),l=["components"];function r(){return r=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},r.apply(this,arguments)}function d(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var m={},i="wrapper";function p(e){var n=e.components,t=d(e,l);return(0,a.mdx)(i,r({},m,t,{components:n,mdxType:"MDXLayout"}),(0,a.mdx)("h1",{id:"graph"},"Graph"),(0,a.mdx)("p",null,"The graph configuration object has a set of properties for the underlying grid of a graph.\nIt hold various properties to configure a grid."),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"#valid-graphs"},"Valid Graphs")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"#configuration-structure"},"Configuration Structure")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"#configuration-properties"},"Configuration Properties"),(0,a.mdx)("ul",{parentName:"li"},(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"#clickpassthrough"},"clickPassThrough")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"#dimension"},"dimension")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"#legendpadding"},"legendPadding")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"#tickscount"},"ticksCount"))))),(0,a.mdx)("h2",{id:"valid-graphs"},"Valid Graphs"),(0,a.mdx)("p",null,"It is required for the following graphs:"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"../../bar-graph/about"},"Bar")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"../../bubble-graph/about"},"Bubble")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"../../combination/about"},"Combination")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"../../line-graph/about"},"Line")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"../../paired-result-graph/about"},"Paired Result")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"../../scatter-graph/about"},"Scatter"))),(0,a.mdx)("h2",{id:"configuration-structure"},"Configuration Structure"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-js"},"const graphConfig = {\n    axis: <Axis object>,\n    bindTo: <string>,\n    allowCalibration: <bool>,\n    bindLegendTo: <string>,\n    clickPassThrough: {\n      datelines: <bool>,\n      eventlines: <bool>,\n    }\n    dateline: <Dateline object>,\n    eventline: <Eventlines object>,\n    legendPadding: {\n      top: <number>,\n      bottom: <number>,\n      left: <number>,\n      right: <number>\n    },\n    locale: <locale object>,\n    padding: {\n      top: <number>,\n      bottom: <number>,\n      left: <number>,\n      right: <number>\n    },\n    pan: {\n      enabled: <bool>\n    },\n    removeContainerPadding: <bool>,\n    showHGrid: <bool>,\n    showLabel: <bool>,\n    showLegend: <bool>,\n    showNoDataText: <bool>,\n    showShapes: <bool>,\n    showVGrid: <bool>,\n    showXLabel: <bool>,\n    ticksCount: <number>\n}\n")),(0,a.mdx)("h2",{id:"configuration-properties"},"Configuration Properties"),(0,a.mdx)("table",null,(0,a.mdx)("thead",{parentName:"table"},(0,a.mdx)("tr",{parentName:"thead"},(0,a.mdx)("th",{parentName:"tr",align:null},"Property Name"),(0,a.mdx)("th",{parentName:"tr",align:null},"Expected"),(0,a.mdx)("th",{parentName:"tr",align:null},"Default"),(0,a.mdx)("th",{parentName:"tr",align:null},"Required"),(0,a.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,a.mdx)("tbody",{parentName:"table"},(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null},"axis"),(0,a.mdx)("td",{parentName:"tr",align:null},"object"),(0,a.mdx)("td",{parentName:"tr",align:null},"-"),(0,a.mdx)("td",{parentName:"tr",align:null},"yes"),(0,a.mdx)("td",{parentName:"tr",align:null},"See ",(0,a.mdx)("a",{parentName:"td",href:"./Axes"},"Axis"),".")),(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null},"bindTo"),(0,a.mdx)("td",{parentName:"tr",align:null},"string"),(0,a.mdx)("td",{parentName:"tr",align:null},"-"),(0,a.mdx)("td",{parentName:"tr",align:null},"yes"),(0,a.mdx)("td",{parentName:"tr",align:null},"DOM ID to bind the graph container to.")),(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null},"allowCalibration"),(0,a.mdx)("td",{parentName:"tr",align:null},"boolean"),(0,a.mdx)("td",{parentName:"tr",align:null},(0,a.mdx)("inlineCode",{parentName:"td"},"true")),(0,a.mdx)("td",{parentName:"tr",align:null},"no"),(0,a.mdx)("td",{parentName:"tr",align:null},"Toggle to allow calibration to adjust the y axis.")),(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null},"bindLegendTo"),(0,a.mdx)("td",{parentName:"tr",align:null},"string"),(0,a.mdx)("td",{parentName:"tr",align:null},(0,a.mdx)("inlineCode",{parentName:"td"},"null")),(0,a.mdx)("td",{parentName:"tr",align:null},"no"),(0,a.mdx)("td",{parentName:"tr",align:null},"If DOM id provided, binds legend into that container (Example: ",(0,a.mdx)("inlineCode",{parentName:"td"},'"#legendContainer"'),").")),(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null},"clickPassThrough"),(0,a.mdx)("td",{parentName:"tr",align:null},"object"),(0,a.mdx)("td",{parentName:"tr",align:null},(0,a.mdx)("inlineCode",{parentName:"td"},"{}")),(0,a.mdx)("td",{parentName:"tr",align:null},"no"),(0,a.mdx)("td",{parentName:"tr",align:null},"See ",(0,a.mdx)("a",{parentName:"td",href:"#clickpassthrough"},"clickPassThrough"),".")),(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null},"dateline"),(0,a.mdx)("td",{parentName:"tr",align:null},"array"),(0,a.mdx)("td",{parentName:"tr",align:null},(0,a.mdx)("inlineCode",{parentName:"td"},"[]")),(0,a.mdx)("td",{parentName:"tr",align:null},"no"),(0,a.mdx)("td",{parentName:"tr",align:null},"See ",(0,a.mdx)("a",{parentName:"td",href:"./Dateline"},"Dateline"),".")),(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null},"eventline"),(0,a.mdx)("td",{parentName:"tr",align:null},"array"),(0,a.mdx)("td",{parentName:"tr",align:null},(0,a.mdx)("inlineCode",{parentName:"td"},"[]")),(0,a.mdx)("td",{parentName:"tr",align:null},"no"),(0,a.mdx)("td",{parentName:"tr",align:null},"See ",(0,a.mdx)("a",{parentName:"td",href:"./Eventline"},"Eventline"),".")),(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null},"dimension"),(0,a.mdx)("td",{parentName:"tr",align:null},"object"),(0,a.mdx)("td",{parentName:"tr",align:null},(0,a.mdx)("inlineCode",{parentName:"td"},"{}")),(0,a.mdx)("td",{parentName:"tr",align:null},"no"),(0,a.mdx)("td",{parentName:"tr",align:null},"See ",(0,a.mdx)("a",{parentName:"td",href:"#dimension"},"dimension"),".")),(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null},"legendPadding"),(0,a.mdx)("td",{parentName:"tr",align:null},"object"),(0,a.mdx)("td",{parentName:"tr",align:null},(0,a.mdx)("inlineCode",{parentName:"td"},"{ top: 4, bottom: 4, left: 8, right: 8 }")),(0,a.mdx)("td",{parentName:"tr",align:null},"no"),(0,a.mdx)("td",{parentName:"tr",align:null},"Sets the legend padding and removes the carbon default margin of ",(0,a.mdx)("inlineCode",{parentName:"td"},"8px")," around legend.")),(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null},"locale"),(0,a.mdx)("td",{parentName:"tr",align:null},"object"),(0,a.mdx)("td",{parentName:"tr",align:null},(0,a.mdx)("inlineCode",{parentName:"td"},"LOCALE.en_US")),(0,a.mdx)("td",{parentName:"tr",align:null},"no"),(0,a.mdx)("td",{parentName:"tr",align:null},"Locale object for x-Axis tick values.")),(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null},"opaqueBackground"),(0,a.mdx)("td",{parentName:"tr",align:null},"false"),(0,a.mdx)("td",{parentName:"tr",align:null},(0,a.mdx)("inlineCode",{parentName:"td"},"false")),(0,a.mdx)("td",{parentName:"tr",align:null},"no"),(0,a.mdx)("td",{parentName:"tr",align:null},"Toggle between a ",(0,a.mdx)("inlineCode",{parentName:"td"},"transparent")," or ",(0,a.mdx)("inlineCode",{parentName:"td"},"white")," background for the container.")),(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null},"padding"),(0,a.mdx)("td",{parentName:"tr",align:null},"object"),(0,a.mdx)("td",{parentName:"tr",align:null},(0,a.mdx)("inlineCode",{parentName:"td"},"{ top: 10, bottom: 10, left: 30, right: 50 }")),(0,a.mdx)("td",{parentName:"tr",align:null},"no"),(0,a.mdx)("td",{parentName:"tr",align:null},"See ",(0,a.mdx)("a",{parentName:"td",href:"./Padding"},"Padding"),".")),(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null},"pan"),(0,a.mdx)("td",{parentName:"tr",align:null},"object"),(0,a.mdx)("td",{parentName:"tr",align:null},(0,a.mdx)("inlineCode",{parentName:"td"},"{}")),(0,a.mdx)("td",{parentName:"tr",align:null},"no"),(0,a.mdx)("td",{parentName:"tr",align:null},"See ",(0,a.mdx)("a",{parentName:"td",href:"./Panning"},"Panning"),".")),(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null},"removeContainerPadding"),(0,a.mdx)("td",{parentName:"tr",align:null},"boolean"),(0,a.mdx)("td",{parentName:"tr",align:null},(0,a.mdx)("inlineCode",{parentName:"td"},"false")),(0,a.mdx)("td",{parentName:"tr",align:null},"no"),(0,a.mdx)("td",{parentName:"tr",align:null},"Toggle to remove the top and bottom padding of the carbon container.")),(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null},"showHGrid"),(0,a.mdx)("td",{parentName:"tr",align:null},"boolean"),(0,a.mdx)("td",{parentName:"tr",align:null},(0,a.mdx)("inlineCode",{parentName:"td"},"true")),(0,a.mdx)("td",{parentName:"tr",align:null},"no"),(0,a.mdx)("td",{parentName:"tr",align:null},"Toggle to show horizontal grid.")),(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null},"showLabel"),(0,a.mdx)("td",{parentName:"tr",align:null},"boolean"),(0,a.mdx)("td",{parentName:"tr",align:null},(0,a.mdx)("inlineCode",{parentName:"td"},"true")),(0,a.mdx)("td",{parentName:"tr",align:null},"no"),(0,a.mdx)("td",{parentName:"tr",align:null},"Toggle to show axes labels.")),(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null},"showLegend"),(0,a.mdx)("td",{parentName:"tr",align:null},"boolean"),(0,a.mdx)("td",{parentName:"tr",align:null},(0,a.mdx)("inlineCode",{parentName:"td"},"true")),(0,a.mdx)("td",{parentName:"tr",align:null},"no"),(0,a.mdx)("td",{parentName:"tr",align:null},"Toggle to show graph legend.")),(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null},"showNoDataText"),(0,a.mdx)("td",{parentName:"tr",align:null},"boolean"),(0,a.mdx)("td",{parentName:"tr",align:null},(0,a.mdx)("inlineCode",{parentName:"td"},"true")),(0,a.mdx)("td",{parentName:"tr",align:null},"no"),(0,a.mdx)("td",{parentName:"tr",align:null},"Toggle to show no data text.")),(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null},"showShapes"),(0,a.mdx)("td",{parentName:"tr",align:null},"boolean"),(0,a.mdx)("td",{parentName:"tr",align:null},(0,a.mdx)("inlineCode",{parentName:"td"},"true")),(0,a.mdx)("td",{parentName:"tr",align:null},"no"),(0,a.mdx)("td",{parentName:"tr",align:null},"Toggle to show shapes in the line graph.")),(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null},"showVGrid"),(0,a.mdx)("td",{parentName:"tr",align:null},"boolean"),(0,a.mdx)("td",{parentName:"tr",align:null},(0,a.mdx)("inlineCode",{parentName:"td"},"true")),(0,a.mdx)("td",{parentName:"tr",align:null},"no"),(0,a.mdx)("td",{parentName:"tr",align:null},"Toggle to show vertical grid.")),(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null},"showXLabel"),(0,a.mdx)("td",{parentName:"tr",align:null},"boolean"),(0,a.mdx)("td",{parentName:"tr",align:null},(0,a.mdx)("inlineCode",{parentName:"td"},"true")),(0,a.mdx)("td",{parentName:"tr",align:null},"no"),(0,a.mdx)("td",{parentName:"tr",align:null},"Toggle to show the x-axis label. An x-axis label will be required by default in 3.0.0. Set this property to ",(0,a.mdx)("inlineCode",{parentName:"td"},"false")," for specific use cases where the x-axis label needs to be hidden.")),(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null},"ticksCount"),(0,a.mdx)("td",{parentName:"tr",align:null},"number"),(0,a.mdx)("td",{parentName:"tr",align:null},(0,a.mdx)("inlineCode",{parentName:"td"},"3"),"-",(0,a.mdx)("inlineCode",{parentName:"td"},"7")," depending on the input range"),(0,a.mdx)("td",{parentName:"tr",align:null},"no"),(0,a.mdx)("td",{parentName:"tr",align:null},"See ",(0,a.mdx)("a",{parentName:"td",href:"#tickscount"},"ticksCount"),".")))),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("h3",{parentName:"li",id:"clickpassthrough"},(0,a.mdx)("inlineCode",{parentName:"h3"},"clickPassThrough")),(0,a.mdx)("table",{parentName:"li"},(0,a.mdx)("thead",{parentName:"table"},(0,a.mdx)("tr",{parentName:"thead"},(0,a.mdx)("th",{parentName:"tr",align:null},"Property Name"),(0,a.mdx)("th",{parentName:"tr",align:null},"Expected"),(0,a.mdx)("th",{parentName:"tr",align:null},"Default"),(0,a.mdx)("th",{parentName:"tr",align:null},"Required"),(0,a.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,a.mdx)("tbody",{parentName:"table"},(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null},"datelines"),(0,a.mdx)("td",{parentName:"tr",align:null},"object"),(0,a.mdx)("td",{parentName:"tr",align:null},"null"),(0,a.mdx)("td",{parentName:"tr",align:null},"no"),(0,a.mdx)("td",{parentName:"tr",align:null},"Toggle for allowing click events to items below datelines.")),(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null},"eventlines"),(0,a.mdx)("td",{parentName:"tr",align:null},"object"),(0,a.mdx)("td",{parentName:"tr",align:null},"null"),(0,a.mdx)("td",{parentName:"tr",align:null},"no"),(0,a.mdx)("td",{parentName:"tr",align:null},"Toggle for allowing click events to items below eventlines.")))),(0,a.mdx)("p",{parentName:"li"},"The following is a table of how ",(0,a.mdx)("inlineCode",{parentName:"p"},"clickPassThrough")," works:"),(0,a.mdx)("h5",{parentName:"li",id:"dateline"},(0,a.mdx)("inlineCode",{parentName:"h5"},"dateline")),(0,a.mdx)("table",{parentName:"li"},(0,a.mdx)("thead",{parentName:"table"},(0,a.mdx)("tr",{parentName:"thead"},(0,a.mdx)("th",{parentName:"tr",align:null},(0,a.mdx)("inlineCode",{parentName:"th"},"clickPassThrough.dateline")," Value"),(0,a.mdx)("th",{parentName:"tr",align:null},(0,a.mdx)("inlineCode",{parentName:"th"},"onClick")," function"),(0,a.mdx)("th",{parentName:"tr",align:null},"Result"))),(0,a.mdx)("tbody",{parentName:"table"},(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null},(0,a.mdx)("inlineCode",{parentName:"td"},"true")),(0,a.mdx)("td",{parentName:"tr",align:null},"defined"),(0,a.mdx)("td",{parentName:"tr",align:null},(0,a.mdx)("inlineCode",{parentName:"td"},"onClick")," function is executed  and cursor pointer is visible top of the element.")),(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null},(0,a.mdx)("inlineCode",{parentName:"td"},"true")),(0,a.mdx)("td",{parentName:"tr",align:null},(0,a.mdx)("inlineCode",{parentName:"td"},"undefined")),(0,a.mdx)("td",{parentName:"tr",align:null},"The element beneath it is clickable. If the bottom element is selectable, then the cursor pointer is also visible.")),(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null},(0,a.mdx)("inlineCode",{parentName:"td"},"false")),(0,a.mdx)("td",{parentName:"tr",align:null},"defined"),(0,a.mdx)("td",{parentName:"tr",align:null},(0,a.mdx)("inlineCode",{parentName:"td"},"onClick")," function is executed  and cursor pointer is visible top of the element.")),(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null},(0,a.mdx)("inlineCode",{parentName:"td"},"false")),(0,a.mdx)("td",{parentName:"tr",align:null},(0,a.mdx)("inlineCode",{parentName:"td"},"undefined")),(0,a.mdx)("td",{parentName:"tr",align:null},"All mouse events are disabled.")))),(0,a.mdx)("h5",{parentName:"li",id:"eventline"},(0,a.mdx)("inlineCode",{parentName:"h5"},"eventline")),(0,a.mdx)("table",{parentName:"li"},(0,a.mdx)("thead",{parentName:"table"},(0,a.mdx)("tr",{parentName:"thead"},(0,a.mdx)("th",{parentName:"tr",align:null},(0,a.mdx)("inlineCode",{parentName:"th"},"clickPassThrough.eventline")," Value"),(0,a.mdx)("th",{parentName:"tr",align:null},"Result"))),(0,a.mdx)("tbody",{parentName:"table"},(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null},(0,a.mdx)("inlineCode",{parentName:"td"},"true")),(0,a.mdx)("td",{parentName:"tr",align:null},"Clicking underneath the element is allowed and if bottom element is selectable, then the pointer is visible.")),(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null},(0,a.mdx)("inlineCode",{parentName:"td"},"false")),(0,a.mdx)("td",{parentName:"tr",align:null},"All mouse events are disabled.")))))),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("h3",{parentName:"li",id:"dimension"},(0,a.mdx)("inlineCode",{parentName:"h3"},"dimension")),(0,a.mdx)("p",{parentName:"li"},(0,a.mdx)("strong",{parentName:"p"},"type:")," object"),(0,a.mdx)("table",{parentName:"li"},(0,a.mdx)("thead",{parentName:"table"},(0,a.mdx)("tr",{parentName:"thead"},(0,a.mdx)("th",{parentName:"tr",align:null},"Property Name"),(0,a.mdx)("th",{parentName:"tr",align:null},"Type"),(0,a.mdx)("th",{parentName:"tr",align:null},"Required"),(0,a.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,a.mdx)("tbody",{parentName:"table"},(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null},"height"),(0,a.mdx)("td",{parentName:"tr",align:null},"number"),(0,a.mdx)("td",{parentName:"tr",align:null},"no"),(0,a.mdx)("td",{parentName:"tr",align:null},"Sets the height of the graph.")))))),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("h3",{parentName:"li",id:"legendpadding"},(0,a.mdx)("inlineCode",{parentName:"h3"},"legendPadding")),(0,a.mdx)("p",{parentName:"li"},"  ",(0,a.mdx)("strong",{parentName:"p"},"type:")," object"),(0,a.mdx)("p",{parentName:"li"},"Sets the legend padding and removes the carbon default margin of ",(0,a.mdx)("inlineCode",{parentName:"p"},"8px")," around legend."),(0,a.mdx)("pre",{parentName:"li"},(0,a.mdx)("code",{parentName:"pre",className:"language-json"},"  legendPadding: {\n    top: <number>,\n    bottom: <number>,\n    left: <number>,\n    right: <number>\n  }\n")),(0,a.mdx)("table",{parentName:"li"},(0,a.mdx)("thead",{parentName:"table"},(0,a.mdx)("tr",{parentName:"thead"},(0,a.mdx)("th",{parentName:"tr",align:null},"Property Name"),(0,a.mdx)("th",{parentName:"tr",align:null},"Type"),(0,a.mdx)("th",{parentName:"tr",align:null},"Required"),(0,a.mdx)("th",{parentName:"tr",align:null},"Default"),(0,a.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,a.mdx)("tbody",{parentName:"table"},(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null},"top"),(0,a.mdx)("td",{parentName:"tr",align:null},"number"),(0,a.mdx)("td",{parentName:"tr",align:null},"no"),(0,a.mdx)("td",{parentName:"tr",align:null},(0,a.mdx)("inlineCode",{parentName:"td"},"4")),(0,a.mdx)("td",{parentName:"tr",align:null},"Top padding of legend container.")),(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null},"bottom"),(0,a.mdx)("td",{parentName:"tr",align:null},"number"),(0,a.mdx)("td",{parentName:"tr",align:null},"no"),(0,a.mdx)("td",{parentName:"tr",align:null},(0,a.mdx)("inlineCode",{parentName:"td"},"4")),(0,a.mdx)("td",{parentName:"tr",align:null},"Bottom padding of legend container.")),(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null},"left"),(0,a.mdx)("td",{parentName:"tr",align:null},"number"),(0,a.mdx)("td",{parentName:"tr",align:null},"no"),(0,a.mdx)("td",{parentName:"tr",align:null},(0,a.mdx)("inlineCode",{parentName:"td"},"8")),(0,a.mdx)("td",{parentName:"tr",align:null},"Left padding of legend container.")),(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null},"right"),(0,a.mdx)("td",{parentName:"tr",align:null},"number"),(0,a.mdx)("td",{parentName:"tr",align:null},"no"),(0,a.mdx)("td",{parentName:"tr",align:null},(0,a.mdx)("inlineCode",{parentName:"td"},"8")),(0,a.mdx)("td",{parentName:"tr",align:null},"Right padding of legend container."))))),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("h3",{parentName:"li",id:"tickscount"},(0,a.mdx)("inlineCode",{parentName:"h3"},"ticksCount")),(0,a.mdx)("p",{parentName:"li"},(0,a.mdx)("strong",{parentName:"p"},"type:")," number"),(0,a.mdx)("p",{parentName:"li"},"Number of ticks (0-19) to show on the vertical axes, excluding the upper and lower limits, if not provided, the number of ticks will be set to a value from 3-7, based on the ",(0,a.mdx)("inlineCode",{parentName:"p"},"Y")," & ",(0,a.mdx)("inlineCode",{parentName:"p"},"Y2")," range.\nSee ",(0,a.mdx)("a",{parentName:"p",href:"./Ticks"},"Ticks")," for more information on how this is used with the Ticks object."))))}p.isMDXComponent=!0}}]);