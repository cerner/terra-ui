"use strict";(self.webpackChunkterra_ui=self.webpackChunkterra_ui||[]).push([[99632],{99632:function(e,n,t){t.r(n),t.d(n,{default:function(){return s}});t(67294);var a=t(81254),r=["components"];function l(){return l=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},l.apply(this,arguments)}function d(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o={},i="wrapper";function s(e){var n=e.components,t=d(e,r);return(0,a.mdx)(i,l({},o,t,{components:n,mdxType:"MDXLayout"}),(0,a.mdx)("h1",{id:"v100-upgrade-guide"},"v1.0.0 Upgrade Guide"),(0,a.mdx)("p",null,"This document will provide information on upgrading from Terra Dev Site ",(0,a.mdx)("inlineCode",{parentName:"p"},"^0.5.0")," to ",(0,a.mdx)("inlineCode",{parentName:"p"},"1.0.0"),"."),(0,a.mdx)("h2",{id:"new-defaults"},"New Defaults"),(0,a.mdx)("p",null,"The following defaults have been added:"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"readMeContent")," is defaulted to ",(0,a.mdx)("inlineCode",{parentName:"li"},"process.cwd()/README.md")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"appConfig.title")," is defaulted to the package name from package.json"),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"appConfig.extensions.gitHubUrl")," has been defaulted to the repo url from package.json")),(0,a.mdx)("p",null,"Changes:"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},"When providing a ",(0,a.mdx)("inlineCode",{parentName:"li"},"placeholderSrc"),", use a relative path to an image."),(0,a.mdx)("li",{parentName:"ul"},"When providing a custom ",(0,a.mdx)("inlineCode",{parentName:"li"},"appConfig.logo"),", use a relative path to an image.")),(0,a.mdx)("p",null,"These defaults may allow you to delete your site.config file!"),(0,a.mdx)("h2",{id:"generate-config-script"},"generate-config script"),(0,a.mdx)("p",null,"The generate-config script has been removed and is no longer needed."),(0,a.mdx)("h2",{id:"examples"},"Examples"),(0,a.mdx)("p",null,"Examples should be moved from the ",(0,a.mdx)("inlineCode",{parentName:"p"},"examples")," directory into a ",(0,a.mdx)("inlineCode",{parentName:"p"},"terra-dev-site")," directory in your ",(0,a.mdx)("inlineCode",{parentName:"p"},"src")," folder. Examples and test examples need to be transpiled if they are to be released."),(0,a.mdx)("p",null,"Pages using ",(0,a.mdx)("inlineCode",{parentName:"p"},".site-pages")," extensions must be changed to ",(0,a.mdx)("inlineCode",{parentName:"p"},".doc")," and pages using ",(0,a.mdx)("inlineCode",{parentName:"p"},".example")," extensions must be changed to ",(0,a.mdx)("inlineCode",{parentName:"p"},".test"),"."),(0,a.mdx)("h2",{id:"test-routes"},"Test Routes"),(0,a.mdx)("p",null,"The test routes now include the ",(0,a.mdx)("inlineCode",{parentName:"p"},"terra-")," namespace and should be updated accordingly. For example:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-diff"},"-      browser.url('/#/raw/tests/aggregator/aggregator-standalone');\n+      browser.url('/#/raw/tests/terra-aggregator/aggregator/aggregator-standalone');\n")),(0,a.mdx)("p",null,"Previous folder structure"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre"},"examples/\n   test-examples/\n      MyTest.example.jsx\n   index.site-page.jsx\n")),(0,a.mdx)("p",null,"New folder structure"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre"},"src/\n  terra-dev-site/\n    doc/\n      packageName/\n         index.doc.jsx\n    test/\n      packageName/\n         MyTest.test.jsx\n")),(0,a.mdx)("h2",{id:"source-examples"},"Source Examples"),(0,a.mdx)("p",null,"Because our examples are now transpiled, make sure to pull in the example source from the source (src) directory and not the dist (lib) because the doc's source should be the not be transpiled."),(0,a.mdx)("h2",{id:"jest"},"Jest"),(0,a.mdx)("p",null,"If you are using jest to test you will need to update your default jest config to not pull in the .test site pages."),(0,a.mdx)("p",null,"For example:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},'  "testMatch": [\n    "**/jest/**/(*.)(spec|test).js?(x)"\n  ],\n')))}s.isMDXComponent=!0}}]);