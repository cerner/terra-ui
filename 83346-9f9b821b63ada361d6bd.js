"use strict";(self.webpackChunkterra_ui=self.webpackChunkterra_ui||[]).push([[83346,45627,85565,3353,5161,45865,85355,3193,4845,46647,85161,38681,15318,40411,18101,38443,11264,34319],{22863:function(e,a,t){var n=t(64836);a.Z=void 0;var r=n(t(67294)),d=n(t(45697)),l=n(t(47166)),o=n(t(17422)),i=l.default.bind(o.default),m={name:d.default.string.isRequired,src:d.default.string,url:d.default.string,version:d.default.string.isRequired},s=function(e){var a=e.src,t=e.name,n=e.url,d=e.version,l=r.default.createElement("a",{className:i("badge"),href:n||"https://www.npmjs.org/package/".concat(t,"/v/").concat(d)},r.default.createElement("span",{className:i("badge-name")},n?"package":"npm"),r.default.createElement("span",{className:i("badge-version")},"v".concat(d))),o=a?r.default.createElement("a",{className:i("badge"),href:a},r.default.createElement("span",{className:i("badge-name")},"github"),r.default.createElement("span",{className:i("badge-version")},"source")):void 0;return r.default.createElement("div",{className:i("badge-container")},l,o)};s.propTypes=m;var p=s;a.Z=p},83346:function(e,a,t){t.r(a),t.d(a,{default:function(){return c}});var n=t(67294),r=t(81254),d=t(22863),l=function(e){var a=e.url;return n.createElement(d.Z,{src:"https://github.com/cerner/terra-dev-site/tree/main/src/loader-components",name:"terra-dev-site",version:"6.2.0",url:a})},o=["components"];function i(){return i=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},i.apply(this,arguments)}function m(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},d=Object.keys(e);for(n=0;n<d.length;n++)t=d[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(e);for(n=0;n<d.length;n++)t=d[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s={},p="wrapper";function c(e){var a=e.components,t=m(e,o);return(0,r.mdx)(p,i({},s,t,{components:a,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"package-loader"},"Package Loader"),(0,r.mdx)("p",null,"The Package Loader will take the passed in json file and return a set of react components including a badge component with a customizable url.\nThe file must be a json file."),(0,r.mdx)("h4",{id:"note"},"Note:"),(0,r.mdx)("p",null,"The ",(0,r.mdx)("inlineCode",{parentName:"p"},"github source")," badge will only be displayed if the json file contains the property ",(0,r.mdx)("inlineCode",{parentName:"p"},"repository")," with the sub property ",(0,r.mdx)("inlineCode",{parentName:"p"},"url"),".\nAlso, if the package is not in the root directory, the sub property ",(0,r.mdx)("inlineCode",{parentName:"p"},"directory")," can be added in the following format:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},'"repository": {\n    "type": "git",\n    "url": "git+https://github.com/cerner/terra-dev-site.git",\n    "directory": "src/loader-components"\n  }\n')),(0,r.mdx)("h2",{id:"resource-query"},"Resource query"),(0,r.mdx)("p",null,(0,r.mdx)("inlineCode",{parentName:"p"},"?dev-site-package")),(0,r.mdx)("h2",{id:"badge-props"},"Badge Props"),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Prop"),(0,r.mdx)("th",{parentName:"tr",align:null},"type"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"url"),(0,r.mdx)("td",{parentName:"tr",align:null},"string")))),(0,r.mdx)("h2",{id:"badge-example"},"Badge Example"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},"import { Badge } from './pretendPackage.json?dev-site-package';\n\n<Badge />\n\n<Badge url=\"https://www.google.com\"/>\n")),(0,r.mdx)("h2",{id:"rendered-example"},"Rendered Example"),(0,r.mdx)(l,{mdxType:"Badge"}),(0,r.mdx)(l,{url:"https://www.google.com",mdxType:"Badge"}))}c.isMDXComponent=!0},17422:function(e,a,t){t.r(a),a.default={badge:"Badges-module__badge___vex-+","badge-container":"Badges-module__badge-container___B13Mv","badge-name":"Badges-module__badge-name___jkN0m","badge-version":"Badges-module__badge-version___agZ+P"}}}]);