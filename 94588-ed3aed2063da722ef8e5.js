"use strict";(self.webpackChunkterra_ui=self.webpackChunkterra_ui||[]).push([[94588],{49824:function(e,a,n){n.r(a),n.d(a,{default:function(){return s}});n(11504);var t=n(69788),r=n.p+"79b2ba6be2c7a957573284c905bab1bc.png",l=["components"];function i(){return i=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var n=arguments[a];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},i.apply(this,arguments)}function o(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},l=Object.keys(e);for(t=0;t<l.length;t++)n=l[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)n=l[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p={},d="wrapper";function s(e){var a=e.components,n=o(e,l);return(0,t.mdx)(d,i({},p,n,{components:a,mdxType:"MDXLayout"}),(0,t.mdx)("h1",{id:"getting-started"},"Getting Started"),(0,t.mdx)("ul",null,(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("a",{parentName:"li",href:"#getting-started"},"Getting Started"),(0,t.mdx)("ul",{parentName:"li"},(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("a",{parentName:"li",href:"#install-carbon-graphs"},"Install Carbon-Graphs")),(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("a",{parentName:"li",href:"#add-carbon-to-a-website"},"Add Carbon to a Website")),(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("a",{parentName:"li",href:"#add-carbon-in-your-application"},"Add Carbon in your application")),(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("a",{parentName:"li",href:"#drawing-a-line-graph"},"Drawing a Line Graph"))))),(0,t.mdx)("h2",{id:"install-carbon-graphs"},"Install Carbon-Graphs"),(0,t.mdx)("p",null,"Install with ",(0,t.mdx)("a",{parentName:"p",href:"https://www.npmjs.com/"},"npmjs"),":"),(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre",className:"language-html"},"  npm i @cerner/carbon-graphs --save-dev\n")),(0,t.mdx)("p",null,"Now that you have installed ",(0,t.mdx)("inlineCode",{parentName:"p"},"Carbon Graphs"),", let's see how we can integrate it with your source-code."),(0,t.mdx)("h2",{id:"add-carbon-to-a-website"},"Add Carbon to a Website"),(0,t.mdx)("p",null,"You can use Carbon in a ",(0,t.mdx)("inlineCode",{parentName:"p"},"<script>")," tag."),(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre",className:"language-html"},'<script src="dist/js/carbon-graphs.js"><\/script>\n<link rel="stylesheet" type="text/css" href="dist/css/carbon-graphs.css" />\n')),(0,t.mdx)("h2",{id:"add-carbon-in-your-application"},"Add Carbon in your application"),(0,t.mdx)("p",null,"Carbon is written using ",(0,t.mdx)("inlineCode",{parentName:"p"},"ES2015")," modules. Create a custom bundle using Rollup, Webpack, or your preferred bundler. To import Carbon into an ES2015 application:"),(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre",className:"language-js"},'import Carbon from "@cerner/carbon-graphs/dist/js/carbon-graphs.js";\nimport "@cerner/carbon-graphs/dist/css/carbon-graphs.css";\n')),(0,t.mdx)("h2",{id:"drawing-a-line-graph"},"Drawing a Line Graph"),(0,t.mdx)("p",null,"Let’s see how easy it can be to get started!"),(0,t.mdx)("p",null,"To create a line graph, first create an HTML element that will hold the graph. Here, we are specifying a main element with an id of root."),(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre",className:"language-html"},'<main id="root"></main>\n')),(0,t.mdx)("p",null,"From there, we will initialize a JavaScript object that configures various aspects of the graph, including where the graph will be drawn and how the axes should appear."),(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre",className:"language-js"},'const graphConfiguration = {\n    bindTo: "#root",\n    axis: {\n        x: {\n            type: Carbon.helpers.AXIS_TYPE.TIME_SERIES,\n            label: "Datetime",\n            lowerLimit: new Date(2016, 0, 1, 9, 0).toISOString(),\n            upperLimit: new Date(2016, 0, 1, 15, 59).toISOString()\n        },\n        y: {\n            label: "Temperature (degF)",\n            lowerLimit: 90,\n            upperLimit: 106\n        }\n    }\n};\n')),(0,t.mdx)("p",null,"Next, we’ll configure the data-set we want to plot."),(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre",className:"language-js"},'const dataset = {\n    key: "uid_1",\n    label: {\n        display: "Oral Temperature"\n    },\n    shape: Carbon.helpers.SHAPES.RHOMBUS,\n    color: Carbon.helpers.COLORS.BLUE,\n    values: [\n        {\n            x: new Date(2016, 0, 1, 10, 5).toISOString(),\n            y: 96.5\n        },\n        {\n            x: new Date(2016, 0, 1, 12, 15).toISOString(),\n            y: 98.7\n        },\n        {\n            x: new Date(2016, 0, 1, 14, 15).toISOString(),\n            y: 97.4\n        }\n    ]\n};\n')),(0,t.mdx)("p",null,"And to wrap it all up, we’ll call ",(0,t.mdx)("inlineCode",{parentName:"p"},"loadContent")," to draw the content."),(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre",className:"language-js"},"const graph = Carbon.api.graph(graphConfiguration);\ngraph.loadContent(Carbon.api.line(dataset));\n")),(0,t.mdx)("p",null,"That’s it!"),(0,t.mdx)("img",{src:r,alt:"Getting Started",style:{width:600,height:400,paddingLeft:380}}))}s.isMDXComponent=!0}}]);