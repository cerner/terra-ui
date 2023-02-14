"use strict";(self.webpackChunkterra_ui=self.webpackChunkterra_ui||[]).push([[32683,45627,85565,3353,5161,45865,85355,3193,4845,46647,85161],{22863:function(e,a,r){var t=r(64836);a.Z=void 0;var n=t(r(67294)),o=t(r(45697)),d=t(r(47166)),s=t(r(17422)),i=d.default.bind(s.default),l={name:o.default.string.isRequired,src:o.default.string,url:o.default.string,version:o.default.string.isRequired},m=function(e){var a=e.src,r=e.name,t=e.url,o=e.version,d=n.default.createElement("a",{className:i("badge"),href:t||"https://www.npmjs.org/package/".concat(r,"/v/").concat(o)},n.default.createElement("span",{className:i("badge-name")},t?"package":"npm"),n.default.createElement("span",{className:i("badge-version")},"v".concat(o))),s=a?n.default.createElement("a",{className:i("badge"),href:a},n.default.createElement("span",{className:i("badge-name")},"github"),n.default.createElement("span",{className:i("badge-version")},"source")):void 0;return n.default.createElement("div",{className:i("badge-container")},d,s)};m.propTypes=l;var u=m;a.Z=u},32683:function(e,a,r){r.r(a),r.d(a,{default:function(){return m}});r(67294);var t=r(81254),n=r(70761),o=["components"];function d(){return d=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var r=arguments[a];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e},d.apply(this,arguments)}function s(e,a){if(null==e)return{};var r,t,n=function(e,a){if(null==e)return{};var r,t,n={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],a.indexOf(r)>=0||(n[r]=e[r]);return n}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],a.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i={},l="wrapper";function m(e){var a=e.components,r=s(e,o);return(0,t.mdx)(l,d({},i,r,{components:a,mdxType:"MDXLayout"}),(0,t.mdx)(n.C,{mdxType:"Badge"}),(0,t.mdx)("h1",{id:"terra-base-upgrade-guide"},"Terra Base Upgrade Guide"),(0,t.mdx)("h2",{id:"changes-from-40-to-50"},"Changes from 4.0 to 5.0"),(0,t.mdx)("ul",null,(0,t.mdx)("li",{parentName:"ul"},"To upgrade to terra-base v5, you now need to define a locale via the locale prop when using the ",(0,t.mdx)("inlineCode",{parentName:"li"},"<Base>")," component."),(0,t.mdx)("li",{parentName:"ul"},"Any react-intl based exports that you were importing from terra-base should now be imported directly from react-intl.")),(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre",className:"language-diff"},"- import { injectIntl, intlShape, FormattedMessage, IntlProvider } from terra-base;\n+ import { injectIntl, intlShape, FormattedMessage, IntlProvider } from react-intl;\n")),(0,t.mdx)("p",null,"Terra-base v5.x depends on terra-i18n v4.x. It is recommended to ",(0,t.mdx)("a",{parentName:"p",href:"https://github.com/cerner/terra-core/blob/main/packages/terra-i18n/docs/UPGRADEGUIDE.md"},"review the terra-i18n v3 to v4 upgrade guide")," when updating terra-base to v5."),(0,t.mdx)("h2",{id:"changes-from-30-to-40"},"Changes from 3.0 to 4.0"),(0,t.mdx)("h3",{id:"changes-to-css-custom-properties"},"Changes to CSS Custom Properties"),(0,t.mdx)("p",null,"The following transitive dependency had breaking changes. See its upgrade guide for more information."),(0,t.mdx)("ul",null,(0,t.mdx)("li",{parentName:"ul"},"terra-doc-template")))}m.isMDXComponent=!0},70761:function(e,a,r){r.d(a,{C:function(){return o}});var t=r(67294),n=r(22863),o=function(e){var a=e.url;return t.createElement(n.Z,{src:"https://github.com/cerner/terra-core/tree/main/packages/terra-base",name:"terra-base",version:"5.49.0",url:a})}},17422:function(e,a,r){r.r(a),a.default={badge:"Badges-module__badge___vex-+","badge-container":"Badges-module__badge-container___B13Mv","badge-name":"Badges-module__badge-name___jkN0m","badge-version":"Badges-module__badge-version___agZ+P"}}}]);