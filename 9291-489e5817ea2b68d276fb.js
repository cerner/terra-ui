"use strict";(self.webpackChunkterra_ui=self.webpackChunkterra_ui||[]).push([[9291,45627,85565,3353,5161,45865,85355,3193,4845,46647,85161,38681,15318,40411,18101,38443,11264,34319,20116,33609,12026],{22863:function(e,a,r){var n=r(64836);a.Z=void 0;var t=n(r(67294)),s=n(r(45697)),o=n(r(19845)),c=n(r(17422)),d=o.default.bind(c.default),i={name:s.default.string.isRequired,src:s.default.string,url:s.default.string,version:s.default.string.isRequired},l=function(e){var a=e.src,r=e.name,n=e.url,s=e.version,o=t.default.createElement("a",{className:d("badge"),href:n||"https://www.npmjs.org/package/".concat(r,"/v/").concat(s)},t.default.createElement("span",{className:d("badge-name")},n?"package":"npm"),t.default.createElement("span",{className:d("badge-version")},"v".concat(s))),c=a?t.default.createElement("a",{className:d("badge"),href:a},t.default.createElement("span",{className:d("badge-name")},"github"),t.default.createElement("span",{className:d("badge-version")},"source")):void 0;return t.default.createElement("div",{className:d("badge-container")},o,c)};l.propTypes=i;a.Z=l},9291:function(e,a,r){r.r(a),r.d(a,{default:function(){return l}});r(67294);var n=r(81254),t=r(93626),s=["components"];function o(){return o=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var r=arguments[a];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}function c(e,a){if(null==e)return{};var r,n,t=function(e,a){if(null==e)return{};var r,n,t={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],a.indexOf(r)>=0||(t[r]=e[r]);return t}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],a.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var d={},i="wrapper";function l(e){var a=e.components,r=c(e,s);return(0,n.mdx)(i,o({},d,r,{components:a,mdxType:"MDXLayout"}),(0,n.mdx)(t.C,{mdxType:"Badge"}),(0,n.mdx)("h1",{id:"webpack-config-terra-upgrade-guide"},"webpack-config-terra Upgrade Guide"),(0,n.mdx)("h2",{id:"changes-from-cernerwebpack-config-terra-100-to-cernerwebpack-config-terra-200"},"Changes from @cerner/webpack-config-terra 1.0.0 to @cerner/webpack-config-terra 2.0.0"),(0,n.mdx)("h4",{id:"removed-polyfill-entrypoints"},"Removed Polyfill entrypoints"),(0,n.mdx)("p",null,"In an effort to provide more direct control to consumers we have removed the core-js and regenerator runtime polyfills from webpack-config-terra. Consumers can now decide if those polyfills are required for their sites. We now offer the ",(0,n.mdx)("a",{parentName:"p",href:"/terra-ui/application/cerner-terra-application-docs/polyfills"},"terra-polyfill")," package that can be included in your application as a side effect."),(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-js"},"import '@cerner/terra-polyfill';\n")),(0,n.mdx)("h4",{id:"removed-node-sass"},"Removed node-sass"),(0,n.mdx)("p",null,"We have removed ",(0,n.mdx)("a",{parentName:"p",href:"https://github.com/sass/node-sass"},"node-sass")," from dependencies and switched to ",(0,n.mdx)("a",{parentName:"p",href:"https://github.com/sass/dart-sass"},"sass (dart-sass)"),"."),(0,n.mdx)("h4",{id:"update-wdio-snapshots"},"Update WDIO snapshots"),(0,n.mdx)("p",null,"The previously used ",(0,n.mdx)("inlineCode",{parentName:"p"},"node-sass")," had a precision of 5, whereas ",(0,n.mdx)("inlineCode",{parentName:"p"},"sass")," has an unadjustable precision of 10. Hence consumers may need to regenerate screenshots to account for slightly larger css values."))}l.isMDXComponent=!0},93626:function(e,a,r){r.d(a,{C:function(){return s}});var n=r(67294),t=r(22863),s=function(e){var a=e.url;return n.createElement(t.Z,{src:"https://github.com/cerner/terra-toolk/tree/main/packages/webpack-config-terra",name:"@cerner/webpack-config-terra",version:"3.3.0",url:a})}},17422:function(e,a,r){r.r(a),a.default={badge:"Badges-module__badge___vex-+","badge-container":"Badges-module__badge-container___B13Mv","badge-name":"Badges-module__badge-name___jkN0m","badge-version":"Badges-module__badge-version___agZ+P"}}}]);