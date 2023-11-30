"use strict";(self.webpackChunkterra_ui=self.webpackChunkterra_ui||[]).push([[68239],{68239:function(e,t,n){n.r(t),n.d(t,{default:function(){return p}});n(67294);var a=n(81254),l=["components"];function r(){return r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r.apply(this,arguments)}function d(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var m={},i="wrapper";function p(e){var t=e.components,n=d(e,l);return(0,a.mdx)(i,r({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("h1",{id:"dateline"},"Dateline"),(0,a.mdx)("p",null,"If Dateline is provided then the ",(0,a.mdx)("inlineCode",{parentName:"p"},"value")," property is mandatory."),(0,a.mdx)("p",null,"When using dateline with graph then ",(0,a.mdx)("inlineCode",{parentName:"p"},"x axis type")," must be ",(0,a.mdx)("strong",{parentName:"p"},"timeseries")," it is mandatory."),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"#structure"},"Structure")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"#properties"},"Properties"),(0,a.mdx)("ul",{parentName:"li"},(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"#label"},"label"))))),(0,a.mdx)("h2",{id:"structure"},"Structure"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-js"},"  dateline:[\n    {\n      color: <hex value as string>,\n      shape: <string>,\n      value: <Date>,\n      style: <style object>,\n      label: {\n          display: <string>\n      },\n      onClick: <function>,\n      showDatelineIndicator: <boolshowDatelineIndicator>,\n    }\n  ]\n")),(0,a.mdx)("h2",{id:"properties"},"Properties"),(0,a.mdx)("table",null,(0,a.mdx)("thead",{parentName:"table"},(0,a.mdx)("tr",{parentName:"thead"},(0,a.mdx)("th",{parentName:"tr",align:null},"Property Name"),(0,a.mdx)("th",{parentName:"tr",align:null},"Type"),(0,a.mdx)("th",{parentName:"tr",align:null},"Default"),(0,a.mdx)("th",{parentName:"tr",align:null},"Required"),(0,a.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,a.mdx)("tbody",{parentName:"table"},(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null},"color"),(0,a.mdx)("td",{parentName:"tr",align:null},"string (ISO8601)"),(0,a.mdx)("td",{parentName:"tr",align:null},"-"),(0,a.mdx)("td",{parentName:"tr",align:null},"yes"),(0,a.mdx)("td",{parentName:"tr",align:null},"Value for the color of the dateline. Can be a hex value or constant from ",(0,a.mdx)("a",{parentName:"td",href:"./colors"},"Colors"),".")),(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null},"shape"),(0,a.mdx)("td",{parentName:"tr",align:null},"string (ISO8601)"),(0,a.mdx)("td",{parentName:"tr",align:null},"-"),(0,a.mdx)("td",{parentName:"tr",align:null},"yes"),(0,a.mdx)("td",{parentName:"tr",align:null},(0,a.mdx)("inlineCode",{parentName:"td"},"Shape")," of the indicator above dateline. See ",(0,a.mdx)("a",{parentName:"td",href:"./Shapes"},"Shapes"),".")),(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null},"value"),(0,a.mdx)("td",{parentName:"tr",align:null},"Date"),(0,a.mdx)("td",{parentName:"tr",align:null},"-"),(0,a.mdx)("td",{parentName:"tr",align:null},"yes"),(0,a.mdx)("td",{parentName:"tr",align:null},"Position where eventline needs to be placed.")),(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null},"label"),(0,a.mdx)("td",{parentName:"tr",align:null},"object"),(0,a.mdx)("td",{parentName:"tr",align:null},(0,a.mdx)("inlineCode",{parentName:"td"},"undefined")),(0,a.mdx)("td",{parentName:"tr",align:null},"no"),(0,a.mdx)("td",{parentName:"tr",align:null},"See ",(0,a.mdx)("a",{parentName:"td",href:"#label"},"label"),".")),(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null},"onClick"),(0,a.mdx)("td",{parentName:"tr",align:null},"function"),(0,a.mdx)("td",{parentName:"tr",align:null},(0,a.mdx)("inlineCode",{parentName:"td"},"undefined")),(0,a.mdx)("td",{parentName:"tr",align:null},"no"),(0,a.mdx)("td",{parentName:"tr",align:null},"Function to execute upon clicking the dataline, such as to display a popup.")),(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null},"showDatelineIndicator"),(0,a.mdx)("td",{parentName:"tr",align:null},"bool"),(0,a.mdx)("td",{parentName:"tr",align:null},(0,a.mdx)("inlineCode",{parentName:"td"},"false")),(0,a.mdx)("td",{parentName:"tr",align:null},"no"),(0,a.mdx)("td",{parentName:"tr",align:null},"Shows a clickable indicator above dateline.")))),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"shape")," is required if ",(0,a.mdx)("inlineCode",{parentName:"li"},"showDatelineIndicator")," is ",(0,a.mdx)("inlineCode",{parentName:"li"},"true"),".\nIf ",(0,a.mdx)("inlineCode",{parentName:"li"},"showDatelineIndicator")," is explicitly set to false then ",(0,a.mdx)("inlineCode",{parentName:"li"},"shape")," is optional.")),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("h3",{parentName:"li",id:"label"},(0,a.mdx)("inlineCode",{parentName:"h3"},"label")),(0,a.mdx)("p",{parentName:"li"},(0,a.mdx)("strong",{parentName:"p"},"type:")," object\n",(0,a.mdx)("strong",{parentName:"p"},"default value:")," ",(0,a.mdx)("inlineCode",{parentName:"p"},"{}")),(0,a.mdx)("p",{parentName:"li"},"  Label for the dataset in the legend. If it is not provided then it will not be shown in the legend."),(0,a.mdx)("pre",{parentName:"li"},(0,a.mdx)("code",{parentName:"pre"},"```json\n  label: {\n    display: <string>\n  }\n```\n")),(0,a.mdx)("table",{parentName:"li"},(0,a.mdx)("thead",{parentName:"table"},(0,a.mdx)("tr",{parentName:"thead"},(0,a.mdx)("th",{parentName:"tr",align:null},"Property Name"),(0,a.mdx)("th",{parentName:"tr",align:null},"Type"),(0,a.mdx)("th",{parentName:"tr",align:null},"Required"),(0,a.mdx)("th",{parentName:"tr",align:null},"Default"),(0,a.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,a.mdx)("tbody",{parentName:"table"},(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null},"display"),(0,a.mdx)("td",{parentName:"tr",align:null},"string"),(0,a.mdx)("td",{parentName:"tr",align:null},"no"),(0,a.mdx)("td",{parentName:"tr",align:null},(0,a.mdx)("inlineCode",{parentName:"td"},"undefined")),(0,a.mdx)("td",{parentName:"tr",align:null},"Text to display as the label for the dataset.")))))))}p.isMDXComponent=!0}}]);