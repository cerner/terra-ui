"use strict";(self.webpackChunkterra_ui=self.webpackChunkterra_ui||[]).push([[63980],{63980:function(e,n,t){t.r(n),t.d(n,{default:function(){return l}});t(11504);var r=t(69788),i=["components"];function a(){return a=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},a.apply(this,arguments)}function o(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s={},c="wrapper";function l(e){var n=e.components,t=o(e,i);return(0,r.mdx)(c,a({},s,t,{components:n,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"terra-service"},"Terra Service"),(0,r.mdx)("p",null,"The Terra service integrates ",(0,r.mdx)("a",{parentName:"p",href:"https://github.com/dequelabs/axe-core"},"axe accessibility")," and screenshot comparison testing commands into the test environment. Invoking the axe engine will perform a static analysis of the entire document and dom structure."),(0,r.mdx)("p",null,"A list of available commands can be viewed ",(0,r.mdx)("a",{parentName:"p",href:"../about#test-utilities"},"here"),"."),(0,r.mdx)("h2",{id:"options"},"Options"),(0,r.mdx)("h3",{id:"selector"},"selector"),(0,r.mdx)("p",null,"An optional selector can be configured in the ",(0,r.mdx)("inlineCode",{parentName:"p"},"serviceOptions")," to specify the default element to be captured when taking a screenshot. Accessibility testing ignores this option and always tests the entire document."),(0,r.mdx)("p",null,"Type: ",(0,r.mdx)("inlineCode",{parentName:"p"},"string")),(0,r.mdx)("p",null,"Required: ",(0,r.mdx)("inlineCode",{parentName:"p"},"false")),(0,r.mdx)("p",null,"Default: ",(0,r.mdx)("inlineCode",{parentName:"p"},"[data-terra-test-content] *:first-child")),(0,r.mdx)("p",null,"Example:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-js"},"// wdio.conf.js\nconst { config } = require('@cerner/terra-functional-testing');\n\nconfig.serviceOptions = {\n  selector: '#root',\n};\n\nexports.config = config;\n")))}l.isMDXComponent=!0}}]);