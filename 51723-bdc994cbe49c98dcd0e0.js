"use strict";(self.webpackChunkterra_ui=self.webpackChunkterra_ui||[]).push([[51723],{51723:function(e,n,r){r.r(n),r.d(n,{default:function(){return m}});r(96540);var t=r(36665),a=["components"];function o(){return o=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e},o.apply(this,arguments)}function l(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var d={},i="wrapper";function m(e){var n=e.components,r=l(e,a);return(0,t.mdx)(i,o({},d,r,{components:n,mdxType:"MDXLayout"}),(0,t.mdx)("h1",{id:"logger"},"Logger"),(0,t.mdx)("p",null,(0,t.mdx)("inlineCode",{parentName:"p"},"terra-application")," provides an override-able logger to handle error, info, and warning messages."),(0,t.mdx)("h2",{id:"usage"},"Usage"),(0,t.mdx)("p",null,"The logger works like the ",(0,t.mdx)("inlineCode",{parentName:"p"},"console")," for the ",(0,t.mdx)("inlineCode",{parentName:"p"},"warn"),", ",(0,t.mdx)("inlineCode",{parentName:"p"},"error"),", and ",(0,t.mdx)("inlineCode",{parentName:"p"},"info")," methods. By default the logger will send the messages to the corresponding console methods. In production, info and warning messages will be suppressed."),(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre",className:"language-js"},"import logger from 'terra-application/lib/utils/logger';\n\nlogger.error('error');\nlogger.warn('warning');\nlogger.info('info');\n")),(0,t.mdx)("h2",{id:"overriding"},"Overriding"),(0,t.mdx)("p",null,"It may be desirable to override the default implementation of the logger. For example, logs could be sent to a server side log aggregator. The logger is a singleton and should only be overridden once per application. To override the logger implementation, use the ",(0,t.mdx)("inlineCode",{parentName:"p"},"initializeLogger")," function and provide a new function for the logger. All loggers must have a method signature of ",(0,t.mdx)("inlineCode",{parentName:"p"},"(obj1 [, obj2, ..., objN])"),", the same as the ",(0,t.mdx)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Console/warn"},"console.warn"),", ",(0,t.mdx)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Console/error"},"console.error"),", and ",(0,t.mdx)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Console/info"},"console.info")," methods."),(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre",className:"language-js"},"import { initializeLogger } from 'terra-application/lib/logger';\n\ninitializeLogger({\n  onInfo: (...args) => console.log('[Info] ', ...args),\n  onWarn: (...args) => console.warn('[Warn] ', ...args),\n  onError: (...args) => console.log('[Error] ', ...args),\n});\n")),(0,t.mdx)("h2",{id:"api"},"API"),(0,t.mdx)("h3",{id:"logger-1"},"Logger"),(0,t.mdx)("table",null,(0,t.mdx)("thead",{parentName:"table"},(0,t.mdx)("tr",{parentName:"thead"},(0,t.mdx)("th",{parentName:"tr",align:null},"method"),(0,t.mdx)("th",{parentName:"tr",align:null},"syntax"),(0,t.mdx)("th",{parentName:"tr",align:null},"Default Behavior"))),(0,t.mdx)("tbody",{parentName:"table"},(0,t.mdx)("tr",{parentName:"tbody"},(0,t.mdx)("td",{parentName:"tr",align:null},(0,t.mdx)("inlineCode",{parentName:"td"},"error")),(0,t.mdx)("td",{parentName:"tr",align:null},(0,t.mdx)("inlineCode",{parentName:"td"},"Logger.error(obj1 [, obj2, ..., objN])")),(0,t.mdx)("td",{parentName:"tr",align:null},"Logs an error to the console.")),(0,t.mdx)("tr",{parentName:"tbody"},(0,t.mdx)("td",{parentName:"tr",align:null},(0,t.mdx)("inlineCode",{parentName:"td"},"info")),(0,t.mdx)("td",{parentName:"tr",align:null},(0,t.mdx)("inlineCode",{parentName:"td"},"Logger.info(obj1 [, obj2, ..., objN])")),(0,t.mdx)("td",{parentName:"tr",align:null},"Logs an info message to the console in a non production environment.")),(0,t.mdx)("tr",{parentName:"tbody"},(0,t.mdx)("td",{parentName:"tr",align:null},(0,t.mdx)("inlineCode",{parentName:"td"},"warn")),(0,t.mdx)("td",{parentName:"tr",align:null},(0,t.mdx)("inlineCode",{parentName:"td"},"Logger.warn(obj1 [, obj2, ..., objN])")),(0,t.mdx)("td",{parentName:"tr",align:null},"Logs an warning message to the console in a non production environment.")))),(0,t.mdx)("h3",{id:"initializelogger"},"initializeLogger"),(0,t.mdx)("table",null,(0,t.mdx)("thead",{parentName:"table"},(0,t.mdx)("tr",{parentName:"thead"},(0,t.mdx)("th",{parentName:"tr",align:null},"Key Name"),(0,t.mdx)("th",{parentName:"tr",align:null},"Type"),(0,t.mdx)("th",{parentName:"tr",align:null},"Is Required"),(0,t.mdx)("th",{parentName:"tr",align:null},"DefaultValue"),(0,t.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,t.mdx)("tbody",{parentName:"table"},(0,t.mdx)("tr",{parentName:"tbody"},(0,t.mdx)("td",{parentName:"tr",align:null},(0,t.mdx)("inlineCode",{parentName:"td"},"onInfo")),(0,t.mdx)("td",{parentName:"tr",align:null},"function"),(0,t.mdx)("td",{parentName:"tr",align:null},"optional"),(0,t.mdx)("td",{parentName:"tr",align:null},"undefined"),(0,t.mdx)("td",{parentName:"tr",align:null},"The method to override the default info logging method.")),(0,t.mdx)("tr",{parentName:"tbody"},(0,t.mdx)("td",{parentName:"tr",align:null},(0,t.mdx)("inlineCode",{parentName:"td"},"onWarn")),(0,t.mdx)("td",{parentName:"tr",align:null},"function"),(0,t.mdx)("td",{parentName:"tr",align:null},"optional"),(0,t.mdx)("td",{parentName:"tr",align:null},"undefined"),(0,t.mdx)("td",{parentName:"tr",align:null},"The method to override the default warning logging method.")),(0,t.mdx)("tr",{parentName:"tbody"},(0,t.mdx)("td",{parentName:"tr",align:null},(0,t.mdx)("inlineCode",{parentName:"td"},"onError")),(0,t.mdx)("td",{parentName:"tr",align:null},"function"),(0,t.mdx)("td",{parentName:"tr",align:null},"optional"),(0,t.mdx)("td",{parentName:"tr",align:null},"undefined"),(0,t.mdx)("td",{parentName:"tr",align:null},"The method to override the default error logging method.")))))}m.isMDXComponent=!0}}]);