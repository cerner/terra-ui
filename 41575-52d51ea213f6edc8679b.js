"use strict";(self.webpackChunkterra_ui=self.webpackChunkterra_ui||[]).push([[41575,45627,85565,3353,5161,45865,85355,3193,4845,46647,85161,38681,15318,40411,18101,38443,11264,34319,20116,33609,12026],{22863:function(e,n,a){var r=a(64836);n.Z=void 0;var t=r(a(67294)),o=r(a(45697)),s=r(a(19845)),l=r(a(17422)),i=s.default.bind(l.default),p={name:o.default.string.isRequired,src:o.default.string,url:o.default.string,version:o.default.string.isRequired},c=function(e){var n=e.src,a=e.name,r=e.url,o=e.version,s=t.default.createElement("a",{className:i("badge"),href:r||"https://www.npmjs.org/package/".concat(a,"/v/").concat(o)},t.default.createElement("span",{className:i("badge-name")},r?"package":"npm"),t.default.createElement("span",{className:i("badge-version")},"v".concat(o))),l=n?t.default.createElement("a",{className:i("badge"),href:n},t.default.createElement("span",{className:i("badge-name")},"github"),t.default.createElement("span",{className:i("badge-version")},"source")):void 0;return t.default.createElement("div",{className:i("badge-container")},s,l)};c.propTypes=p;n.Z=c},41575:function(e,n,a){a.r(n),a.d(n,{default:function(){return c}});a(67294);var r=a(81254),t=a(20917),o=["components"];function s(){return s=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var a=arguments[n];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},s.apply(this,arguments)}function l(e,n){if(null==e)return{};var a,r,t=function(e,n){if(null==e)return{};var a,r,t={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],n.indexOf(a)>=0||(t[a]=e[a]);return t}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}var i={},p="wrapper";function c(e){var n=e.components,a=l(e,o);return(0,r.mdx)(p,s({},i,a,{components:n,mdxType:"MDXLayout"}),(0,r.mdx)(t.C,{mdxType:"Badge"}),(0,r.mdx)("h1",{id:"terra-slide-panel-manager---upgrade-guide"},"Terra Slide Panel Manager - Upgrade Guide"),(0,r.mdx)("h2",{id:"upgrading-from-v2x-to-v3x"},"Upgrading from v2.x to v3.x"),(0,r.mdx)("p",null,"With the release of terra-disclosure-manager v3.x, the SlidePanelManager now provides its APIs through context instead of prop injection. Please view the terra-disclosure-manager documentation/upgrade guide for more information. "),(0,r.mdx)("p",null,"The below example code details the changes necessary to interact with terra-slide-panel-manager v3.x."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-diff"},"/**\n * v2.x to v3.x\n */\n import Base from 'terra-base';\n import SlidePanelManager from 'terra-slide-panel-manager'; \n- import AppDelegate from 'terra-app-delegate';\n+ import { withDisclosureManager, disclosureManagerShape } from 'terra-disclosure-manager';\n\n- const MyDisclosureComponent = ({ app }) => (\n+ const MyDisclosureComponent = withDisclosureManager(({ disclosureManager }) => (\n   <Button\n     text=\"Close Panel\"\n     onClick={() => { \n-      app.closeDisclosure();\n+      disclosureManager.closeDisclosure();\n     }}\n   />\n- );\n+ ));\n\n MyDisclosureComponent.propType = {\n-   app: AppDelegate.propType,\n+   disclosureManager: disclosureManagerShape,\n };\n\n- const MyComponent = ({ app }) => (\n+ const MyComponent = withDisclosureManager(({ disclosureManager }) => (\n    <Button\n      text=\"Launch Panel\"\n      onClick={() => { \n-       app.disclose({\n+       disclosureManager.disclose({\n          preferredType: 'panel',\n          content: {\n            key: 'MY-PANEL-DISCLOSURE',\n            component: <MyDisclosureComponent />,\n          }\n        });\n      }}\n   />\n- );\n+ ));\n \n MyComponent.propType = {\n-   app: AppDelegate.propType,\n+   disclosureManager: disclosureManagerShape,\n };\n\n const MyApp = () => (\n   <Base locale=\"en\">\n     <SlidePanelManager>\n       <MyComponent />\n     </SlidePanelManager>\n   </Base>\n );\n")))}c.isMDXComponent=!0},20917:function(e,n,a){a.d(n,{C:function(){return o}});var r=a(67294),t=a(22863),o=function(e){var n=e.url;return r.createElement(t.Z,{src:"https://github.com/cerner/terra-framework/tree/main/packages/terra-slide-panel-manager",name:"terra-slide-panel-manager",version:"5.89.0",url:n})}},17422:function(e,n,a){a.r(n),n.default={badge:"Badges-module__badge___vex-+","badge-container":"Badges-module__badge-container___B13Mv","badge-name":"Badges-module__badge-name___jkN0m","badge-version":"Badges-module__badge-version___agZ+P"}}}]);