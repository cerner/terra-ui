"use strict";(self.webpackChunkterra_ui=self.webpackChunkterra_ui||[]).push([[47389,17711,40092,72949,95330,7235,29616,62473,84854,38663,61044,92260,69879,47498,25117,81784,59403,37022,14641,71308,48927,98463,20844,53701],{55713:function(e,a,n){var r=n(24994);a.A=void 0;var l=r(n(96540)),d=r(n(5556)),t=r(n(67967)),m=r(n(25642)),u=t.default.bind(m.default),i={name:d.default.string.isRequired,src:d.default.string,url:d.default.string,version:d.default.string.isRequired},p=function(e){var a=e.src,n=e.name,r=e.url,d=e.version,t=l.default.createElement("a",{className:u("badge"),href:r||"https://www.npmjs.org/package/".concat(n,"/v/").concat(d)},l.default.createElement("span",{className:u("badge-name")},r?"package":"npm"),l.default.createElement("span",{className:u("badge-version")},"v".concat(d))),m=a?l.default.createElement("a",{className:u("badge"),href:a},l.default.createElement("span",{className:u("badge-name")},"github"),l.default.createElement("span",{className:u("badge-version")},"source")):void 0;return l.default.createElement("div",{className:u("badge-container")},t,m)};p.propTypes=i;a.A=p},47389:function(e,a,n){n.r(a),n.d(a,{default:function(){return N}});n(96540);var r=n(36665),l=n(57254),d=["components"];function t(){return t=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var n=arguments[a];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},t.apply(this,arguments)}function m(e,a){if(null==e)return{};var n,r,l=function(e,a){if(null==e)return{};var n,r,l={},d=Object.keys(e);for(r=0;r<d.length;r++)n=d[r],a.indexOf(n)>=0||(l[n]=e[n]);return l}(e,a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(e);for(r=0;r<d.length;r++)n=d[r],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var u={},i="wrapper";function p(e){var a=e.components,n=m(e,d);return(0,r.mdx)(i,t({},u,n,{components:a,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"changelog"},"Changelog"),(0,r.mdx)("h2",{id:"unreleased"},"Unreleased"),(0,r.mdx)("h2",{id:"340---february-27-2024"},"3.4.0 - (February 27, 2024)"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Added",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},"Explicitly added ",(0,r.mdx)("inlineCode",{parentName:"li"},"fibers@5")," since it's a transient dependency of ",(0,r.mdx)("inlineCode",{parentName:"li"},"sass-loader@10"),".")))),(0,r.mdx)("h2",{id:"330---september-26-2023"},"3.3.0 - (September 26, 2023)"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Changed",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},"Minor dependency version bump")))),(0,r.mdx)("h2",{id:"320---august-31-2023"},"3.2.0 - (August 31, 2023)"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Changed",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},"Minor dependency version bump")))),(0,r.mdx)("h2",{id:"312---august-30-2023"},"3.1.2 - (August 30, 2023)"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Changed",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},"Minor dependency version bump")))),(0,r.mdx)("h2",{id:"311---august-25-2023"},"3.1.1 - (August 25, 2023)"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Fixed",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},"Fixed install failures by removing unnecessary ",(0,r.mdx)("inlineCode",{parentName:"li"},"postinstall")," step.")))),(0,r.mdx)("h2",{id:"310---august-24-2023"},"3.1.0 - (August 24, 2023)"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Changed",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},"Minor dependency version bump.")))),(0,r.mdx)("h2",{id:"301---august-30-2022"},"3.0.1 - (August 30, 2022)"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Changed",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},"Reverts terra-aggregate-translations to v2.")))),(0,r.mdx)("h2",{id:"300---may-12-2022"},"3.0.0 - (May 12, 2022)"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Breaking",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},"Added devMiddleWare to support webpack-dev-server v4.")))),(0,r.mdx)("h2",{id:"240---february-11-2022"},"2.4.0 - (February 11, 2022)"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Changed",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},"Revert limiting upper Node version to 14.")))),(0,r.mdx)("h2",{id:"230---february-8-2022"},"2.3.0 - (February 8, 2022)"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Changed",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},"Updated component to support Node 14.")))),(0,r.mdx)("h2",{id:"220---september-28-2021"},"2.2.0 - (September 28, 2021)"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Changed",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},"Minor dependency version bump")))),(0,r.mdx)("h2",{id:"210---august-25-2021"},"2.1.0 - (August 25, 2021)"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Changed",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},"Minor dependency version bump")))),(0,r.mdx)("h2",{id:"200---august-13-2021"},"2.0.0 - (August 13, 2021)"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Breaking",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},"Upgraded from ",(0,r.mdx)("inlineCode",{parentName:"li"},"node-sass")," to ",(0,r.mdx)("inlineCode",{parentName:"li"},"sass (dart-sass)"),"."),(0,r.mdx)("li",{parentName:"ul"},"Removed polyfill entries.")))),(0,r.mdx)("h2",{id:"131---january-27-2021"},"1.3.1 - (January 27, 2021)"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Changed",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},"Minor dependency version bump")))),(0,r.mdx)("h2",{id:"130---january-27-2021"},"1.3.0 - (January 27, 2021)"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},"Added"),(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},"Added ",(0,r.mdx)("inlineCode",{parentName:"li"},"browser")," to ",(0,r.mdx)("inlineCode",{parentName:"li"},"resolve.mainFields")," in webpack module list."))),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},"Changed"),(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},"Passively consume @cerner/terra-aggregate-translations package.")))),(0,r.mdx)("h2",{id:"120---january-5-2021"},"1.2.0 - (January 5, 2021)"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Changed",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},"Added optional support for aggregate themes."),(0,r.mdx)("li",{parentName:"ul"},"Make postcss a peer dependency."),(0,r.mdx)("li",{parentName:"ul"},"Opened the node version to allow versions higher than node 10.")))),(0,r.mdx)("h2",{id:"110---december-7-2020"},"1.1.0 - (December 7, 2020)"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Changed",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},"Upgrade to postcss 8.",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},"AutoPrefixer to v10"),(0,r.mdx)("li",{parentName:"ul"},"Postcss-rtl to a forked version to support postcss8"))),(0,r.mdx)("li",{parentName:"ul"},"Support webpack 5")))),(0,r.mdx)("h2",{id:"100---november-24-2020"},"1.0.0 - (November 24, 2020)"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Changed",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},"Updated dependencies.")))),(0,r.mdx)("h2",{id:"100-alpha1---october-20-2020"},"1.0.0-alpha.1 - (October 20, 2020)"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},"Changed"),(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},"Removed default source map generation in loaders for prod."))),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},"Added"),(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},"Added the generateLoaderSourceMaps env to re-enable source map generation for loaders on demand.")))),(0,r.mdx)("h2",{id:"100-alpha0---october-1-2020"},"1.0.0-alpha.0 - (October 1, 2020)"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Initial alpha release")))}p.isMDXComponent=!0;var o=["components"];function s(){return s=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var n=arguments[a];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s.apply(this,arguments)}function x(e,a){if(null==e)return{};var n,r,l=function(e,a){if(null==e)return{};var n,r,l={},d=Object.keys(e);for(r=0;r<d.length;r++)n=d[r],a.indexOf(n)>=0||(l[n]=e[n]);return l}(e,a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(e);for(r=0;r<d.length;r++)n=d[r],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var c={},g="wrapper";function N(e){var a=e.components,n=x(e,o);return(0,r.mdx)(g,s({},c,n,{components:a,mdxType:"MDXLayout"}),(0,r.mdx)(l.E,{mdxType:"Badge"}),(0,r.mdx)(p,{mdxType:"ChangeLog"}))}N.isMDXComponent=!0},57254:function(e,a,n){n.d(a,{E:function(){return d}});var r=n(96540),l=n(55713),d=function(e){var a=e.url;return r.createElement(l.A,{src:"https://github.com/cerner/terra-toolk/tree/main/packages/webpack-config-terra",name:"@cerner/webpack-config-terra",version:"3.4.0",url:a})}},25642:function(e,a,n){n.r(a),a.default={badge:"Badges-module__badge___vex-+","badge-container":"Badges-module__badge-container___B13Mv","badge-name":"Badges-module__badge-name___jkN0m","badge-version":"Badges-module__badge-version___agZ+P"}}}]);