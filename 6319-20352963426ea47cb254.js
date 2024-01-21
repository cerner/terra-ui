"use strict";(self.webpackChunkterra_ui=self.webpackChunkterra_ui||[]).push([[6319,45627,85565,3353,5161,45865,85355,3193,4845,46647,85161,38681,15318,40411,18101,38443,11264,34319,20116,33609,12026],{22863:function(e,n,a){var r=a(64836);n.Z=void 0;var t=r(a(67294)),o=r(a(45697)),s=r(a(19845)),l=r(a(17422)),c=s.default.bind(l.default),d={name:o.default.string.isRequired,src:o.default.string,url:o.default.string,version:o.default.string.isRequired},i=function(e){var n=e.src,a=e.name,r=e.url,o=e.version,s=t.default.createElement("a",{className:c("badge"),href:r||"https://www.npmjs.org/package/".concat(a,"/v/").concat(o)},t.default.createElement("span",{className:c("badge-name")},r?"package":"npm"),t.default.createElement("span",{className:c("badge-version")},"v".concat(o))),l=n?t.default.createElement("a",{className:c("badge"),href:n},t.default.createElement("span",{className:c("badge-name")},"github"),t.default.createElement("span",{className:c("badge-version")},"source")):void 0;return t.default.createElement("div",{className:c("badge-container")},s,l)};i.propTypes=d;n.Z=i},6319:function(e,n,a){a.r(n),a.d(n,{default:function(){return i}});a(67294);var r=a(81254),t=a(69160),o=["components"];function s(){return s=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var a=arguments[n];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},s.apply(this,arguments)}function l(e,n){if(null==e)return{};var a,r,t=function(e,n){if(null==e)return{};var a,r,t={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],n.indexOf(a)>=0||(t[a]=e[a]);return t}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}var c={},d="wrapper";function i(e){var n=e.components,a=l(e,o);return(0,r.mdx)(d,s({},c,a,{components:n,mdxType:"MDXLayout"}),(0,r.mdx)(t.C,{mdxType:"Badge"}),(0,r.mdx)("h1",{id:"terra-modal-manager---upgrade-guide"},"Terra Modal Manager - Upgrade Guide"),(0,r.mdx)("h2",{id:"upgrading-from-v3x-to-v4x"},"Upgrading from v3.x to v4.x"),(0,r.mdx)("p",null,"With the release of terra-disclosure-manager v3.x, the ModalManager now provides its APIs through context instead of prop injection. Please view the terra-disclosure-manager documentation/upgrade guide for more information. "),(0,r.mdx)("p",null,"The below example code details the changes necessary to interact with terra-modal-manager v4.x."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-diff"},"/**\n * v3.x to v4.x\n */\n import Base from 'terra-base';\n import ModalManager from 'terra-modal-manager'; \n- import AppDelegate from 'terra-app-delegate';\n+ import { withDisclosureManager, disclosureManagerShape } from 'terra-disclosure-manager';\n\n- const MyDisclosureComponent = ({ app }) => (\n+ const MyDisclosureComponent = withDisclosureManager(({ disclosureManager }) => (\n   <Button\n     text=\"Close Modal\"\n     onClick={() => { \n-      app.closeDisclosure();\n+      disclosureManager.closeDisclosure();\n     }}\n   />\n- );\n+ ));\n\n MyDisclosureComponent.propType = {\n-   app: AppDelegate.propType,\n+   disclosureManager: disclosureManagerShape,\n };\n\n- const MyComponent = ({ app }) => (\n+ const MyComponent = withDisclosureManager(({ disclosureManager }) => (\n    <Button\n      text=\"Launch Modal\"\n      onClick={() => { \n-       app.disclose({\n+       disclosureManager.disclose({\n          preferredType: 'modal',\n          content: {\n            key: 'MY-MODAL-DISCLOSURE',\n            component: <MyDisclosureComponent />,\n          }\n        });\n      }}\n   />\n- );\n+ ));\n \n MyComponent.propType = {\n-   app: AppDelegate.propType,\n+   disclosureManager: disclosureManagerShape,\n };\n\n const MyApp = () => (\n   <Base locale=\"en\">\n     <ModalManager>\n       <MyComponent />\n     </ModalManager>\n   </Base>\n );\n")))}i.isMDXComponent=!0},69160:function(e,n,a){a.d(n,{C:function(){return o}});var r=a(67294),t=a(22863),o=function(e){var n=e.url;return r.createElement(t.Z,{src:"https://github.com/cerner/terra-framework/tree/main/packages/terra-modal-manager",name:"terra-modal-manager",version:"6.69.0",url:n})}},17422:function(e,n,a){a.r(n),n.default={badge:"Badges-module__badge___vex-+","badge-container":"Badges-module__badge-container___B13Mv","badge-name":"Badges-module__badge-name___jkN0m","badge-version":"Badges-module__badge-version___agZ+P"}}}]);