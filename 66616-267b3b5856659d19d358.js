"use strict";(self.webpackChunkterra_ui=self.webpackChunkterra_ui||[]).push([[66616],{66616:function(n,a,e){e.r(a),e.d(a,{default:function(){return s}});e(11504);var t=e(69788),r=["components"];function i(){return i=Object.assign?Object.assign.bind():function(n){for(var a=1;a<arguments.length;a++){var e=arguments[a];for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(n[t]=e[t])}return n},i.apply(this,arguments)}function l(n,a){if(null==n)return{};var e,t,r=function(n,a){if(null==n)return{};var e,t,r={},i=Object.keys(n);for(t=0;t<i.length;t++)e=i[t],a.indexOf(e)>=0||(r[e]=n[e]);return r}(n,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(t=0;t<i.length;t++)e=i[t],a.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(n,e)&&(r[e]=n[e])}return r}var o={},p="wrapper";function s(n){var a=n.components,e=l(n,r);return(0,t.mdx)(p,i({},o,e,{components:a,mdxType:"MDXLayout"}),(0,t.mdx)("h1",{id:"panning"},"Panning"),(0,t.mdx)("p",null,"Panning is applied with timeline/custom button."),(0,t.mdx)("ul",null,(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("a",{parentName:"li",href:"#structure"},"Structure")),(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("a",{parentName:"li",href:"#properties"},"Properties")),(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("a",{parentName:"li",href:"#usage"},"Usage"),(0,t.mdx)("ul",{parentName:"li"},(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("a",{parentName:"li",href:"#reflow"},"reflow")),(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("a",{parentName:"li",href:"#reflowmultipledatasets"},"reflowMultipleDatasets"))))),(0,t.mdx)("h2",{id:"structure"},"Structure"),(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre",className:"language-js"},"graphConfig: {\n    ...\n    panning: {\n        enabled: <bool>\n    }\n}\n")),(0,t.mdx)("h2",{id:"properties"},"Properties"),(0,t.mdx)("table",null,(0,t.mdx)("thead",{parentName:"table"},(0,t.mdx)("tr",{parentName:"thead"},(0,t.mdx)("th",{parentName:"tr",align:null},"Property Name"),(0,t.mdx)("th",{parentName:"tr",align:null},"Expected"),(0,t.mdx)("th",{parentName:"tr",align:null},"Default"),(0,t.mdx)("th",{parentName:"tr",align:null},"Required"),(0,t.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,t.mdx)("tbody",{parentName:"table"},(0,t.mdx)("tr",{parentName:"tbody"},(0,t.mdx)("td",{parentName:"tr",align:null},"enabled"),(0,t.mdx)("td",{parentName:"tr",align:null},"boolean"),(0,t.mdx)("td",{parentName:"tr",align:null},(0,t.mdx)("inlineCode",{parentName:"td"},"undefined")),(0,t.mdx)("td",{parentName:"tr",align:null},"no"),(0,t.mdx)("td",{parentName:"tr",align:null},"Set to true when panning is needed")))),(0,t.mdx)("ul",null,(0,t.mdx)("li",{parentName:"ul"},"If ",(0,t.mdx)("inlineCode",{parentName:"li"},"graphConfig.panning")," is not provided then enabled will be false.")),(0,t.mdx)("h2",{id:"usage"},"Usage"),(0,t.mdx)("h3",{id:"reflow"},"reflow"),(0,t.mdx)("p",null,"Panning can only be used with graphs having the construct as Graph, Gantt and Timeline."),(0,t.mdx)("p",null,(0,t.mdx)("strong",{parentName:"p"},"Note:")," Panning with ",(0,t.mdx)("inlineCode",{parentName:"p"},"reflow")," is now deprecated and will be removed in future Major Version Bump. Please use ",(0,t.mdx)("a",{parentName:"p",href:"#reflowmultipledatasets"},"reflowMultipleDatasets"),"."),(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre",className:"language-jsx"},'// axisData\nconst graphConfiguration = {\n    bindTo: "#root",\n    axis: {\n        x: {\n            type: Carbon.helpers.AXIS_TYPE.TIME_SERIES,\n            label: "Datetime",\n            lowerLimit: new Date(2016, 0, 1, 9, 0).toISOString(),\n            upperLimit: new Date(2016, 0, 1, 15, 59).toISOString()\n        },\n        y: {\n            label: "Temperature (degF)",\n            lowerLimit: 90,\n            upperLimit: 106\n        }\n    }\n};\n')),(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre",className:"language-jsx"},'// graphData\nconst dataSet = {\n    key: "uid_1",\n    label: {\n        display: "Oral Temperature"\n    },\n    shape: Carbon.helpers.SHAPES.RHOMBUS,\n    color: Carbon.helpers.COLORS.BLUE,\n    values: [\n        {\n            x: new Date(2016, 0, 1, 10, 5).toISOString(),\n            y: 96.5\n        },\n        {\n            x: new Date(2016, 0, 1, 12, 15).toISOString(),\n            y: 98.7\n        },\n        {\n            x: new Date(2016, 0, 1, 14, 15).toISOString(),\n            y: 97.4\n        }\n    ]\n};\n')),(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre",className:"language-jsx"},'// panData\nconst panData = {\n    key: "uid_1", // key should already be present in the graph\n    values: [\n        {\n            x: new Date(2016, 0, 1, 10, 5).toISOString(),\n            y: 95\n        },\n        {\n            x: new Date(2016, 0, 1, 12, 15).toISOString(),\n            y: 92\n        },\n        {\n            x: new Date(2016, 0, 1, 14, 15).toISOString(),\n            y: 98\n        }\n    ]\n};\n')),(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre",className:"language-javascript"},"export const renderLineWithPanning = (id) => {\n    const axisData = graphConfiguration;\n    axisData.pan = {\n        enabled: true\n    };\n    const graphData = dataSet;\n    graphData.regions = [regions[0]];\n\n    const createGraph = () => {\n        graph.reflow();\n    };\n\n    const graph = Carbon.api.graph(axisData);\n    graph.loadContent(Carbon.api.line(graphData));\n    // Additional data-sets to be loaded here only, like:\n    graph.loadContent(Carbon.api.line(/* Data array */));\n    axisData.axis = graph.config.axis;\n\n    createPanningControls(id, {\n        axisData,\n        creationHandler: createGraph\n    });\n    return graph;\n};\n")),(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre",className:"language-javascript"},"export const renderLinePanningWithDynamicData = (id) => {\n    const axisData = graphConfiguration;\n    axisData.pan = {\n        enabled: true\n    };\n    const graphData = dataSet;\n    graphData.regions = [regions[0]];\n\n    const createGraph = () => {\n        graph.reflow(panData);\n    };\n\n    const graph = Carbon.api.graph(axisData);\n    graph.loadContent(Carbon.api.line(graphData));\n    // Additional data-sets to be loaded here only, like:\n    graph.loadContent(Carbon.api.line(/* Data array */));\n    axisData.axis = graph.config.axis;\n\n    createPanningControls(id, {\n        axisData,\n        creationHandler: createGraph\n    });\n    return graph;\n};\n")),(0,t.mdx)("h3",{id:"reflowmultipledatasets"},"reflowMultipleDatasets"),(0,t.mdx)("p",null,"Panning can be used with all graph types except Pie."),(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre",className:"language-jsx"},'// axisData\nconst graphConfiguration = {\n    bindTo: "#root",\n    axis: {\n        x: {\n            type: Carbon.helpers.AXIS_TYPE.TIME_SERIES,\n            label: "Datetime",\n            lowerLimit: new Date(2016, 0, 1, 9, 0).toISOString(),\n            upperLimit: new Date(2016, 0, 1, 15, 59).toISOString()\n        },\n        y: {\n            label: "Temperature (degF)",\n            lowerLimit: 90,\n            upperLimit: 106\n        }\n    }\n};\n')),(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre",className:"language-jsx"},'// graphData\nconst dataSet = {\n    key: "uid_1",\n    label: {\n        display: "Oral Temperature"\n    },\n    shape: Carbon.helpers.SHAPES.RHOMBUS,\n    color: Carbon.helpers.COLORS.BLUE,\n    values: [\n        {\n            x: new Date(2016, 0, 1, 10, 5).toISOString(),\n            y: 96.5\n        },\n        {\n            x: new Date(2016, 0, 1, 12, 15).toISOString(),\n            y: 98.7\n        },\n        {\n            x: new Date(2016, 0, 1, 14, 15).toISOString(),\n            y: 97.4\n        }\n    ]\n};\n')),(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre",className:"language-jsx"},"// panData\nconst panData = {\n    key: \"uid_1\", // key should already be present in the graph\n    values: [\n        {\n            x: new Date(2016, 0, 1, 10, 5).toISOString(),\n            y: 95\n        },\n        {\n            x: new Date(2016, 0, 1, 12, 15).toISOString(),\n            y: 92\n        },\n        {\n            x: new Date(2016, 0, 1, 14, 15).toISOString(),\n            y: 98\n        }\n    ]\n};\n\n//Eventline\nconst newEventline = [\n  {\n    color: Carbon.helpers.COLORS.GREEN,\n    style: {\n      strokeDashArray: '4,4',\n    },\n    value: new Date(2016, 0, 1, 9, 45).toISOString(),\n  },\n];\n")),(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre",className:"language-javascript"},"export const renderLineWithPanning = (id) => {\n    const axisData = graphConfiguration;\n    axisData.pan = {\n        enabled: true\n    };\n    const graphData = dataSet;\n    graphData.regions = [regions[0]];\n\n    const createGraph = () => {\n        graph.reflowMultipleDatasets();\n    };\n\n    const graph = Carbon.api.graph(axisData);\n    graph.loadContent(Carbon.api.line(graphData));\n    // Additional data-sets to be loaded here only, like:\n    graph.loadContent(Carbon.api.line(/* Data array */));\n    axisData.axis = graph.config.axis;\n\n    createPanningControls(id, {\n        axisData,\n        creationHandler: createGraph\n    });\n    return graph;\n};\n")),(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre",className:"language-javascript"},"export const renderLinePanningWithDynamicDataAndEventline = (id) => {\n    const axisData = graphConfiguration;\n    axisData.pan = {\n        enabled: true\n    };\n    const graphData = dataSet;\n    graphData.regions = [regions[0]];\n\n    const newDataset = {\n      panData: [panData],\n      eventline: newEventline,\n    };\n\n    const createGraph = () => {\n        graph.reflowMultipleDatasets(newDataset);\n    };\n\n    const graph = Carbon.api.graph(axisData);\n    graph.loadContent(Carbon.api.line(graphData));\n    // Additional data-sets to be loaded here only, like:\n    graph.loadContent(Carbon.api.line(/* Data array */));\n    axisData.axis = graph.config.axis;\n\n    createPanningControls(id, {\n        axisData,\n        creationHandler: createGraph\n    });\n    return graph;\n};\n")))}s.isMDXComponent=!0}}]);