"use strict";(self.webpackChunkterra_ui=self.webpackChunkterra_ui||[]).push([[24340],{1960:function(e,n,a){a.r(n),a.d(n,{default:function(){return o}});a(11504);var t=a(69788),r=["components"];function l(){return l=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var a=arguments[n];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(e[t]=a[t])}return e},l.apply(this,arguments)}function i(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},l=Object.keys(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d={},m="wrapper";function o(e){var n=e.components,a=i(e,r);return(0,t.mdx)(m,l({},d,a,{components:n,mdxType:"MDXLayout"}),(0,t.mdx)("h1",{id:"axes"},"Axes"),(0,t.mdx)("p",null,"Any graph that inherits from ",(0,t.mdx)("inlineCode",{parentName:"p"},"Graph")," API will inherit the following ",(0,t.mdx)("inlineCode",{parentName:"p"},"Axis")," and ",(0,t.mdx)("inlineCode",{parentName:"p"},"Tick")," properties as well."),(0,t.mdx)("ul",null,(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("a",{parentName:"li",href:"#structure"},"Structure")),(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("a",{parentName:"li",href:"#properties"},"Properties"),(0,t.mdx)("ul",{parentName:"li"},(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("a",{parentName:"li",href:"#allowCalibration"},"allowCalibration")),(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("a",{parentName:"li",href:"#type"},"type")),(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("a",{parentName:"li",href:"#orientation"},"orientation")),(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("a",{parentName:"li",href:"#note"},"Note")))),(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("a",{parentName:"li",href:"#x-axis-domain-padding"},"X Axis Domain Padding"))),(0,t.mdx)("h2",{id:"structure"},"Structure"),(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre",className:"language-json"},"axis: {\n    x: <x-axis object>,\n    y: <y-axis object>,\n    y2: <y2-axis object>,\n}\n\n\naxis: {\n    x: {\n        lowerLimit: <number> or <Date>,\n        upperLimit: <number> or <Date>,\n        label: <string>,\n        allowCalibration: <bool>\n        onLabelClick: <Function>,\n        orientation: <string>\n        rangeRounding: <bool>,\n        show: <boolean>,\n        suppressingTrailingZeros: <bool>,\n        ticks: <Ticks object>,\n        type: <string>\n        rotateAngle: <integer>,\n    },\n    y: {\n        lowerLimit: <number> or <Date>,\n        upperLimit: <number> or <Date>,\n        label: <string>,\n        onLabelClick: <Function>,\n        padDomain: <bool>,\n        rangeRounding: <bool>,\n        show: <boolean>,\n        suppressingTrailingZeros: <bool>,\n        ticks: <Ticks object>,\n        type: <string>\n    },\n    y2:{\n        lowerLimit: <number> or <Date>,\n        upperLimit: <number> or <Date>,\n        label: <string>,\n        onLabelClick: <Function>,\n        padDomain: <bool>,\n        rangeRounding: <bool>,\n        show: <boolean>,\n        suppressingTrailingZeros: <bool>,\n        ticks: <Ticks object>,\n        type: <string>\n    }\n\n}\n\n")),(0,t.mdx)("h2",{id:"properties"},"Properties"),(0,t.mdx)("table",null,(0,t.mdx)("thead",{parentName:"table"},(0,t.mdx)("tr",{parentName:"thead"},(0,t.mdx)("th",{parentName:"tr",align:null},"Property Name"),(0,t.mdx)("th",{parentName:"tr",align:null},"Type"),(0,t.mdx)("th",{parentName:"tr",align:null},"Default"),(0,t.mdx)("th",{parentName:"tr",align:null},"Required"),(0,t.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,t.mdx)("tbody",{parentName:"table"},(0,t.mdx)("tr",{parentName:"tbody"},(0,t.mdx)("td",{parentName:"tr",align:null},"lowerLimit"),(0,t.mdx)("td",{parentName:"tr",align:null},"number or Date"),(0,t.mdx)("td",{parentName:"tr",align:null},"-"),(0,t.mdx)("td",{parentName:"tr",align:null},"yes"),(0,t.mdx)("td",{parentName:"tr",align:null},"Lower bound for the axis. This is inclusive.")),(0,t.mdx)("tr",{parentName:"tbody"},(0,t.mdx)("td",{parentName:"tr",align:null},"upperLimit"),(0,t.mdx)("td",{parentName:"tr",align:null},"number or Date"),(0,t.mdx)("td",{parentName:"tr",align:null},"-"),(0,t.mdx)("td",{parentName:"tr",align:null},"yes"),(0,t.mdx)("td",{parentName:"tr",align:null},"Upper bound for the axis. This is inclusive.")),(0,t.mdx)("tr",{parentName:"tbody"},(0,t.mdx)("td",{parentName:"tr",align:null},"label"),(0,t.mdx)("td",{parentName:"tr",align:null},"string"),(0,t.mdx)("td",{parentName:"tr",align:null},"-"),(0,t.mdx)("td",{parentName:"tr",align:null},"yes"),(0,t.mdx)("td",{parentName:"tr",align:null},"Axis label value. Will not be rendered if nothing is provided.")),(0,t.mdx)("tr",{parentName:"tbody"},(0,t.mdx)("td",{parentName:"tr",align:null},"allowCalibration"),(0,t.mdx)("td",{parentName:"tr",align:null},"bool"),(0,t.mdx)("td",{parentName:"tr",align:null},(0,t.mdx)("inlineCode",{parentName:"td"},"false")),(0,t.mdx)("td",{parentName:"tr",align:null},"no"),(0,t.mdx)("td",{parentName:"tr",align:null},"See ",(0,t.mdx)("a",{parentName:"td",href:"#allowCalibration"},"allowCalibration"),".")),(0,t.mdx)("tr",{parentName:"tbody"},(0,t.mdx)("td",{parentName:"tr",align:null},"onLabelClick"),(0,t.mdx)("td",{parentName:"tr",align:null},"Function"),(0,t.mdx)("td",{parentName:"tr",align:null},(0,t.mdx)("inlineCode",{parentName:"td"},"undefined")),(0,t.mdx)("td",{parentName:"tr",align:null},"no"),(0,t.mdx)("td",{parentName:"tr",align:null},"Any action that can be performed when clicking on label.")),(0,t.mdx)("tr",{parentName:"tbody"},(0,t.mdx)("td",{parentName:"tr",align:null},"orientation"),(0,t.mdx)("td",{parentName:"tr",align:null},"Function"),(0,t.mdx)("td",{parentName:"tr",align:null},(0,t.mdx)("inlineCode",{parentName:"td"},"AXES_ORIENTATION.DEFAULT")),(0,t.mdx)("td",{parentName:"tr",align:null},"no"),(0,t.mdx)("td",{parentName:"tr",align:null},"See ",(0,t.mdx)("a",{parentName:"td",href:"#orientation"},"orientation"),".")),(0,t.mdx)("tr",{parentName:"tbody"},(0,t.mdx)("td",{parentName:"tr",align:null},"padDomain"),(0,t.mdx)("td",{parentName:"tr",align:null},"boolean"),(0,t.mdx)("td",{parentName:"tr",align:null},(0,t.mdx)("inlineCode",{parentName:"td"},"true")),(0,t.mdx)("td",{parentName:"tr",align:null},"no"),(0,t.mdx)("td",{parentName:"tr",align:null},"Toggle for disabling the padding (only for Y and Y2 axes).")),(0,t.mdx)("tr",{parentName:"tbody"},(0,t.mdx)("td",{parentName:"tr",align:null},"rangeRounding"),(0,t.mdx)("td",{parentName:"tr",align:null},"boolean"),(0,t.mdx)("td",{parentName:"tr",align:null},(0,t.mdx)("inlineCode",{parentName:"td"},"true")),(0,t.mdx)("td",{parentName:"tr",align:null},"no"),(0,t.mdx)("td",{parentName:"tr",align:null},"Toggle for range rounding.")),(0,t.mdx)("tr",{parentName:"tbody"},(0,t.mdx)("td",{parentName:"tr",align:null},"show"),(0,t.mdx)("td",{parentName:"tr",align:null},"boolean"),(0,t.mdx)("td",{parentName:"tr",align:null},(0,t.mdx)("inlineCode",{parentName:"td"},"true")),(0,t.mdx)("td",{parentName:"tr",align:null},"no"),(0,t.mdx)("td",{parentName:"tr",align:null},"Toggle for showing the axis.")),(0,t.mdx)("tr",{parentName:"tbody"},(0,t.mdx)("td",{parentName:"tr",align:null},"suppressTrailingZeros"),(0,t.mdx)("td",{parentName:"tr",align:null},"boolean"),(0,t.mdx)("td",{parentName:"tr",align:null},(0,t.mdx)("inlineCode",{parentName:"td"},"false")),(0,t.mdx)("td",{parentName:"tr",align:null},"no"),(0,t.mdx)("td",{parentName:"tr",align:null},"Toggle to suppress tick values's trailing zeros when default d3 tick formatting is used. For X axis, this property works only when X axis type is set to AXIS_TYPE.DEFAULT. Specifying ",(0,t.mdx)("inlineCode",{parentName:"td"},"~")," in the tick format takes precedence over ",(0,t.mdx)("inlineCode",{parentName:"td"},"suppressTrailingZeros")," property.")),(0,t.mdx)("tr",{parentName:"tbody"},(0,t.mdx)("td",{parentName:"tr",align:null},"ticks"),(0,t.mdx)("td",{parentName:"tr",align:null},"object"),(0,t.mdx)("td",{parentName:"tr",align:null},(0,t.mdx)("inlineCode",{parentName:"td"},"null")),(0,t.mdx)("td",{parentName:"tr",align:null},"no"),(0,t.mdx)("td",{parentName:"tr",align:null},"See ",(0,t.mdx)("a",{parentName:"td",href:"./Ticks"},"Ticks"),".")),(0,t.mdx)("tr",{parentName:"tbody"},(0,t.mdx)("td",{parentName:"tr",align:null},"type"),(0,t.mdx)("td",{parentName:"tr",align:null},"string"),(0,t.mdx)("td",{parentName:"tr",align:null},(0,t.mdx)("inlineCode",{parentName:"td"},"AXIS_TYPE.DEFAULT")),(0,t.mdx)("td",{parentName:"tr",align:null},"no"),(0,t.mdx)("td",{parentName:"tr",align:null},"See ",(0,t.mdx)("a",{parentName:"td",href:"#type"},"type"),". Normal number value or time-based. Only for x-axis.")),(0,t.mdx)("tr",{parentName:"tbody"},(0,t.mdx)("td",{parentName:"tr",align:null},"tickLabelsRotation"),(0,t.mdx)("td",{parentName:"tr",align:null},"integer"),(0,t.mdx)("td",{parentName:"tr",align:null},"-"),(0,t.mdx)("td",{parentName:"tr",align:null},"no"),(0,t.mdx)("td",{parentName:"tr",align:null},"Sets the rotation of the x-axis tick labels to ",(0,t.mdx)("inlineCode",{parentName:"td"},"0º")," or ",(0,t.mdx)("inlineCode",{parentName:"td"},"-45º"),". Accepted values: 0 or -45. Only for x-axis.")))),(0,t.mdx)("ul",null,(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("h3",{parentName:"li",id:"allowcalibration"},(0,t.mdx)("inlineCode",{parentName:"h3"},"allowCalibration")),(0,t.mdx)("p",{parentName:"li"},"  Set calibration for the axis.\nIf ",(0,t.mdx)("inlineCode",{parentName:"p"},"true"),", then the axis upper and lower limits will update to fit the entire graph on the x-axis.\nThis feature can ",(0,t.mdx)("em",{parentName:"p"},"not")," be used in conjunction with panning.\nIf panning is enabled then this property will be ignored if ",(0,t.mdx)("inlineCode",{parentName:"p"},"true"),"."),(0,t.mdx)("p",{parentName:"li"},"  NOTE: This property is only implemented for the x-axis (",(0,t.mdx)("inlineCode",{parentName:"p"},"config.axis.x.allowCalibration"),").\nPlease refer to ",(0,t.mdx)("a",{parentName:"p",href:"./Graph/##configuration-properties"},"config.allowCalibration")," for calibrating the y-axes."))),(0,t.mdx)("ul",null,(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("h3",{parentName:"li",id:"type"},(0,t.mdx)("inlineCode",{parentName:"h3"},"type")),(0,t.mdx)("p",{parentName:"li"},"  Property to set the type of the axis."),(0,t.mdx)("table",{parentName:"li"},(0,t.mdx)("thead",{parentName:"table"},(0,t.mdx)("tr",{parentName:"thead"},(0,t.mdx)("th",{parentName:"tr",align:null},"Constant"),(0,t.mdx)("th",{parentName:"tr",align:null},"Value"))),(0,t.mdx)("tbody",{parentName:"table"},(0,t.mdx)("tr",{parentName:"tbody"},(0,t.mdx)("td",{parentName:"tr",align:null},(0,t.mdx)("inlineCode",{parentName:"td"},"AXIS_TYPE.DEFAULT")),(0,t.mdx)("td",{parentName:"tr",align:null},"Numeric based x-axis. Will take a ",(0,t.mdx)("inlineCode",{parentName:"td"},"<number>")," for tick values.")),(0,t.mdx)("tr",{parentName:"tbody"},(0,t.mdx)("td",{parentName:"tr",align:null},(0,t.mdx)("inlineCode",{parentName:"td"},"AXIS_TYPE.TIME_SERIES")),(0,t.mdx)("td",{parentName:"tr",align:null},"Timeseries based x-axis. Will take a ",(0,t.mdx)("inlineCode",{parentName:"td"},"<Date>")," for tick values.")))))),(0,t.mdx)("ul",null,(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("h3",{parentName:"li",id:"orientation"},(0,t.mdx)("inlineCode",{parentName:"h3"},"orientation")),(0,t.mdx)("p",{parentName:"li"},"  Sets the orientation for the x-axis.\nCan be accessed through ",(0,t.mdx)("inlineCode",{parentName:"p"},"AXES_ORIENTATION"),".\nValid values are:"),(0,t.mdx)("ul",{parentName:"li"},(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("inlineCode",{parentName:"li"},"AXES_ORIENTATION.TOP")),(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("inlineCode",{parentName:"li"},"AXES_ORIENTATION.BOTTOM"))))),(0,t.mdx)("h4",{id:"note"},"Note:"),(0,t.mdx)("ul",null,(0,t.mdx)("li",{parentName:"ul"},"y2 axis is mandatory if the ",(0,t.mdx)("strong",{parentName:"li"},"y2.show")," is enabled."),(0,t.mdx)("li",{parentName:"ul"},"Ticks are mandatory for Bar graphs."),(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("inlineCode",{parentName:"li"},"rangeRounding")," property extends the domain so that it starts and ends on nice round values. This method typically modifies the scale’s domain, and may only extend the bounds to the nearest round value."),(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("inlineCode",{parentName:"li"},"padDomain")," property is only for Y and Y2 axes."),(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("inlineCode",{parentName:"li"},"onLabelClick")," property will override default onClick functionality provided by Carbon-graphs."),(0,t.mdx)("li",{parentName:"ul"},"For Bar Graphs, ",(0,t.mdx)("inlineCode",{parentName:"li"},"padDomain")," property will be overridden to false.")),(0,t.mdx)("h2",{id:"x-axis-domain-padding"},"X Axis Domain Padding"),(0,t.mdx)("p",null,"Unlike Y Axis, X Axis can have different types of values as ticks namely numeric, datetime etc. By design, domain padding has not been provided for this reason. Consumers however who are more acquainted with their dataset can judge how much value padding is necessary and achieve similar results as Y Axis."),(0,t.mdx)("p",null,"Example:"),(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre",className:"language-js"},"const padXAxisLimits = (extent) => {\n    const range = extent[1] - extent[0];\n    return [extent[0] - range * 0.05, extent[1] + range * 0.05];\n};\n\nconst datetime = padXAxisLimits(\n    d3.extent([\n        /* Array containing all the datetime in RFC3339 format*/\n    ])\n);\n")))}o.isMDXComponent=!0}}]);