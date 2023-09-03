"use strict";(self.webpackChunkterra_ui=self.webpackChunkterra_ui||[]).push([[12953,45627,85565,3353,5161,45865,85355,3193,4845,46647,85161,38681,15318,40411,18101,38443],{22863:function(e,a,n){var r=n(64836);a.Z=void 0;var t=r(n(67294)),i=r(n(45697)),o=r(n(47166)),d=r(n(17422)),c=o.default.bind(d.default),s={name:i.default.string.isRequired,src:i.default.string,url:i.default.string,version:i.default.string.isRequired},l=function(e){var a=e.src,n=e.name,r=e.url,i=e.version,o=t.default.createElement("a",{className:c("badge"),href:r||"https://www.npmjs.org/package/".concat(n,"/v/").concat(i)},t.default.createElement("span",{className:c("badge-name")},r?"package":"npm"),t.default.createElement("span",{className:c("badge-version")},"v".concat(i))),d=a?t.default.createElement("a",{className:c("badge"),href:a},t.default.createElement("span",{className:c("badge-name")},"github"),t.default.createElement("span",{className:c("badge-version")},"source")):void 0;return t.default.createElement("div",{className:c("badge-container")},o,d)};l.propTypes=s;var p=l;a.Z=p},12953:function(e,a,n){n.r(a),n.d(a,{default:function(){return l}});n(67294);var r=n(81254),t=n(93626),i=["components"];function o(){return o=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var n=arguments[a];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function d(e,a){if(null==e)return{};var n,r,t=function(e,a){if(null==e)return{};var n,r,t={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],a.indexOf(n)>=0||(t[n]=e[n]);return t}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var c={},s="wrapper";function l(e){var a=e.components,n=d(e,i);return(0,r.mdx)(s,o({},c,n,{components:a,mdxType:"MDXLayout"}),(0,r.mdx)(t.C,{mdxType:"Badge"}),(0,r.mdx)("h1",{id:"webpack-config-terra-upgrade-guide"},"webpack-config-terra Upgrade Guide"),(0,r.mdx)("h2",{id:"changes-from-cernerwebpack-config-terra-2-to-cernerwebpack-config-terra-3"},"Changes from @cerner/webpack-config-terra 2 to @cerner/webpack-config-terra 3"),(0,r.mdx)("h3",{id:"updated-webpack-dev-server-from-version-3-to-verison-4"},"Updated Webpack-Dev-Server from version 3 to verison 4"),(0,r.mdx)("p",null,"Webpack-dev-server has been updated to the latest version 4.x. This update will fix hot reloading issue on development mode which stopped working after upgrading Webpack to verison 5."),(0,r.mdx)("h3",{id:"breaking-changes"},"Breaking Changes"),(0,r.mdx)("p",null,"Webpack-dev-server v3 will not work with webpack-config-terra  v3. The webpack-dev-server has replaced the configuration options ( listed below ) in v4, These changes will cause webpack-dev-server v3 configurations to fail with webpack-config-terra v3."),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"inline")," has been removed without replacement in webpack-dev-server v4."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"stats"),", ",(0,r.mdx)("inlineCode",{parentName:"li"},"index")," and ",(0,r.mdx)("inlineCode",{parentName:"li"},"publicPath")," has been moved to ",(0,r.mdx)("inlineCode",{parentName:"li"},"devMiddleware")," option.")),(0,r.mdx)("p",null,"Updating webpack-config-terra to v3 would require consuming projects to update webpack-dev-server to v4 in their local dependencies."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-diff"},'  "devDependencies": {\n-   "webpack-dev-server": "^3.x.x"\n+   "webpack-dev-server": "^4.7.2"\n  }\n')))}l.isMDXComponent=!0},93626:function(e,a,n){n.d(a,{C:function(){return i}});var r=n(67294),t=n(22863),i=function(e){var a=e.url;return r.createElement(t.Z,{src:"https://github.com/cerner/terra-toolk/tree/main/packages/webpack-config-terra",name:"@cerner/webpack-config-terra",version:"3.2.0",url:a})}},17422:function(e,a,n){n.r(a),a.default={badge:"Badges-module__badge___vex-+","badge-container":"Badges-module__badge-container___B13Mv","badge-name":"Badges-module__badge-name___jkN0m","badge-version":"Badges-module__badge-version___agZ+P"}}}]);