"use strict";(self.webpackChunkterra_ui=self.webpackChunkterra_ui||[]).push([[48819],{48819:function(e,n,r){r.r(n),r.d(n,{default:function(){return s}});r(67294);var t=r(81254),a=["components"];function o(){return o=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e},o.apply(this,arguments)}function i(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var d={},p="wrapper";function s(e){var n=e.components,r=i(e,a);return(0,t.mdx)(p,o({},d,r,{components:n,mdxType:"MDXLayout"}),(0,t.mdx)("h1",{id:"terra-functional-testing---version-2-upgrade-guide"},"Terra Functional Testing - Version 2 Upgrade Guide"),(0,t.mdx)("p",null,"The only change in this version is the upgrade to WebDriverIO v7. This should cause very little disruption to consuming projects."),(0,t.mdx)("h2",{id:"breaking-changes"},"Breaking Changes"),(0,t.mdx)("h3",{id:"wdio-v6-to-v7"},"WDIO v6 to v7"),(0,t.mdx)("p",null,"A complete list of breaking changes can be found here:"),(0,t.mdx)("ul",null,(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("a",{parentName:"li",href:"https://github.com/webdriverio/webdriverio/blob/main/CHANGELOG.md#boom-breaking-change"},"WebdriverIO v7 Breaking Changes")),(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("a",{parentName:"li",href:"https://webdriver.io/docs/v7-migration"},"WebdriverIO v6 to v7 Upgrade Guide"))),(0,t.mdx)("p",null,"If you are using ",(0,t.mdx)("inlineCode",{parentName:"p"},"@cerner/terra-functional-testing")," along with it's ",(0,t.mdx)("inlineCode",{parentName:"p"},"wdio.config.js")," most of these changes should not apply."),(0,t.mdx)("h3",{id:"node-10-support-dropped"},"Node 10 support dropped"),(0,t.mdx)("p",null,"WDIO v7 updates to fibers v5 which drops support for Node 10. Node 12 and above are recommended."),(0,t.mdx)("h4",{id:"update-packagejson"},"Update package.json"),(0,t.mdx)("p",null,"You will need to update the ",(0,t.mdx)("inlineCode",{parentName:"p"},"@cerner/terra-functional-testing")," version in your ",(0,t.mdx)("inlineCode",{parentName:"p"},"package.json"),":"),(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre",className:"language-diff"},'// package.json\n{\n  "devDependencies": {\n+   "@cerner/terra-functional-testing": "^2.0.0",\n-   "@cerner/terra-functional-testing": "^1.0.0"\n  }\n}\n')))}s.isMDXComponent=!0}}]);