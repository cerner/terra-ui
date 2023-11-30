"use strict";(self.webpackChunkterra_ui=self.webpackChunkterra_ui||[]).push([[57054,45627,85565,3353,5161,45865,85355,3193,4845,46647,85161,38681,15318,40411,18101,38443,11264,34319],{22863:function(e,a,t){var n=t(64836);a.Z=void 0;var r=n(t(67294)),o=n(t(45697)),s=n(t(47166)),l=n(t(17422)),i=s.default.bind(l.default),d={name:o.default.string.isRequired,src:o.default.string,url:o.default.string,version:o.default.string.isRequired},u=function(e){var a=e.src,t=e.name,n=e.url,o=e.version,s=r.default.createElement("a",{className:i("badge"),href:n||"https://www.npmjs.org/package/".concat(t,"/v/").concat(o)},r.default.createElement("span",{className:i("badge-name")},n?"package":"npm"),r.default.createElement("span",{className:i("badge-version")},"v".concat(o))),l=a?r.default.createElement("a",{className:i("badge"),href:a},r.default.createElement("span",{className:i("badge-name")},"github"),r.default.createElement("span",{className:i("badge-version")},"source")):void 0;return r.default.createElement("div",{className:i("badge-container")},s,l)};u.propTypes=d;var m=u;a.Z=m},57054:function(e,a,t){t.r(a),t.d(a,{default:function(){return u}});t(67294);var n=t(81254),r=t(35953),o=["components"];function s(){return s=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},s.apply(this,arguments)}function l(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i={},d="wrapper";function u(e){var a=e.components,t=l(e,o);return(0,n.mdx)(d,s({},i,t,{components:a,mdxType:"MDXLayout"}),(0,n.mdx)(r.C,{mdxType:"Badge"}),(0,n.mdx)("h1",{id:"terra-i18n-upgrade-guide"},"Terra i18n Upgrade Guide"),(0,n.mdx)("h2",{id:"changes-from-30-to-40"},"Changes from 3.0 to 4.0"),(0,n.mdx)("p",null,"The terra-i18n ",(0,n.mdx)("inlineCode",{parentName:"p"},"aggregate-translations")," pre-build tool has been removed from this package."),(0,n.mdx)("p",null,"Along with this, the post-install script which wrote default intl and translation loaders has been removed."),(0,n.mdx)("p",null,"To upgrade, use the ",(0,n.mdx)("a",{parentName:"p",href:"https://github.com/cerner/terra-aggregate-translations#--terra-aggregate-translations"},(0,n.mdx)("inlineCode",{parentName:"a"},"aggregate-translations")," pre-build tool")," to generate ",(0,n.mdx)("inlineCode",{parentName:"p"},"intlLoaders")," and ",(0,n.mdx)("inlineCode",{parentName:"p"},"translationLoaders")," files needed for internationalizing terra components instead of relying on the ",(0,n.mdx)("inlineCode",{parentName:"p"},"intlLoaders")," and ",(0,n.mdx)("inlineCode",{parentName:"p"},"translationLoaders")," files being generated by the terra-i18n postinstall step."),(0,n.mdx)("p",null,"If you require translations in your Jest tests, you can create a ",(0,n.mdx)("inlineCode",{parentName:"p"},"jestglobalsetup.js")," file for your app to call the aggregate-translations pre-build tool."),(0,n.mdx)("p",null,"Add the following code to ",(0,n.mdx)("inlineCode",{parentName:"p"},"jestglobalsetup.js"),":"),(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-js"},"const aggregateTranslations = require('terra-aggregate-translations');\n\nmodule.exports = () => {\n  aggregateTranslations();\n};\n")),(0,n.mdx)("p",null,"In your app's jest config file, add the following:"),(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-js"},"globalSetup: './jestglobalsetup.js',\n// This allows jest to resolve files from the generated aggregated-translations in addition to node_modules\nmoduleDirectories: [\n  'aggregated-translations',\n  'node_modules',\n],\n")),(0,n.mdx)("p",null,"Alternatively, you can use ",(0,n.mdx)("a",{parentName:"p",href:"https://github.com/cerner/terra-enzyme-intl"},"terra-enzyme-intl"),", which will make aggregating translations for Jest tests unnecessary. The ",(0,n.mdx)("a",{parentName:"p",href:"https://github.com/cerner/terra-enzyme-intl"},"terra-enzyme-intl")," package will use the translation keys for the translation strings instead of the actual translations. If you want to test the actual translation string values, we recommend testing translations with a tool like webdriver.io."),(0,n.mdx)("h2",{id:"changes-from-20-to-30"},"Changes from 2.0 to 3.0"),(0,n.mdx)("h3",{id:"changes-to-css-custom-properties"},"Changes to CSS Custom Properties"),(0,n.mdx)("p",null,"The following transitive dependency had breaking changes. See its upgrade guide for more information."),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"terra-doc-template")))}u.isMDXComponent=!0},35953:function(e,a,t){t.d(a,{C:function(){return o}});var n=t(67294),r=t(22863),o=function(e){var a=e.url;return n.createElement(r.Z,{src:"https://github.com/cerner/terra-core/tree/main/packages/terra-i18n",name:"terra-i18n",version:"4.41.0",url:a})}},17422:function(e,a,t){t.r(a),a.default={badge:"Badges-module__badge___vex-+","badge-container":"Badges-module__badge-container___B13Mv","badge-name":"Badges-module__badge-name___jkN0m","badge-version":"Badges-module__badge-version___agZ+P"}}}]);