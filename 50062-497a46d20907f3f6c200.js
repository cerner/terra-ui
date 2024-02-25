"use strict";(self.webpackChunkterra_ui=self.webpackChunkterra_ui||[]).push([[50062,17711,40092,72949,95330,7235,29616,62473,84854,38663,61044,92260,69879,47498,25117,81784,59403,37022,14641,71308,48927],{55713:function(e,n,a){var r=a(24994);n.A=void 0;var t=r(a(96540)),o=r(a(5556)),s=r(a(67967)),c=r(a(25642)),i=s.default.bind(c.default),l={name:o.default.string.isRequired,src:o.default.string,url:o.default.string,version:o.default.string.isRequired},d=function(e){var n=e.src,a=e.name,r=e.url,o=e.version,s=t.default.createElement("a",{className:i("badge"),href:r||"https://www.npmjs.org/package/".concat(a,"/v/").concat(o)},t.default.createElement("span",{className:i("badge-name")},r?"package":"npm"),t.default.createElement("span",{className:i("badge-version")},"v".concat(o))),c=n?t.default.createElement("a",{className:i("badge"),href:n},t.default.createElement("span",{className:i("badge-name")},"github"),t.default.createElement("span",{className:i("badge-version")},"source")):void 0;return t.default.createElement("div",{className:i("badge-container")},s,c)};d.propTypes=l;n.A=d},50062:function(e,n,a){a.r(n),a.d(n,{default:function(){return d}});a(96540);var r=a(36665),t=a(83696),o=["components"];function s(){return s=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var a=arguments[n];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},s.apply(this,arguments)}function c(e,n){if(null==e)return{};var a,r,t=function(e,n){if(null==e)return{};var a,r,t={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],n.indexOf(a)>=0||(t[a]=e[a]);return t}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}var i={},l="wrapper";function d(e){var n=e.components,a=c(e,o);return(0,r.mdx)(l,s({},i,a,{components:n,mdxType:"MDXLayout"}),(0,r.mdx)(t.E,{mdxType:"Badge"}),(0,r.mdx)("h1",{id:"interacting-with-the-disclosure-manager"},"Interacting with the Disclosure Manager"),(0,r.mdx)("p",null,"The DisclosureManager wraps its contents in a context provider that exposes an instance of a DisclosureManagerDelegate. The DisclosureManagerDelegate is an object containing DisclosureManager APIs that reflect where a component has been rendered in the disclosure stack."),(0,r.mdx)("p",null,"The Disclosure Manager exposes the DisclosureManagerDelegate via the DisclosureManagerContext. This context can be used directly via the ",(0,r.mdx)("inlineCode",{parentName:"p"},"DisclosureManagerContext")," or it can be consumed with the HOC ",(0,r.mdx)("inlineCode",{parentName:"p"},"withDisclosureManager")," wrapper."),(0,r.mdx)("h2",{id:"disclosuremanagercontext"},"DisclosureManagerContext"),(0,r.mdx)("p",null,"The ",(0,r.mdx)("inlineCode",{parentName:"p"},"DisclosureManagerContext")," can be used directly to access the available DisclosureManager APIs."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport ModalManager from 'terra-modal-manager'; \nimport { DisclosureManagerContext } from 'terra-disclosure-manager';\n\nconst DisclosedComponent = () => {\nconst disclosureManager = React.useContext(DisclosureManagerContext);\n\n  return (\n    <Button\n      text=\"Close Modal\"\n      onClick={() => { \n        disclosureManager.closeDisclosure();\n      }}\n    />\n  );\n};\n\nconst DisclosingComponent = () => {\n  const disclosureManager = React.useContext(DisclosureManagerContext);\n\n  return (\n    <ModalManager>\n      <Button\n        text=\"Launch Modal\"\n        onClick={() => { \n          disclosureManager.disclose({\n            preferredType: 'modal',\n            content: {\n              key: 'DISCLOSED-COMPONENT',\n              title: 'My Disclosed Component',\n              component: <DisclosedComponent />,\n            }\n          });\n        }}\n      />\n    </ModalManager>\n  );\n};\n")),(0,r.mdx)("h4",{id:"withdisclosuremanager"},"withDisclosureManager"),(0,r.mdx)("p",null,"Components can also use the higher order component ",(0,r.mdx)("inlineCode",{parentName:"p"},"withDisclosureManager()")," to automatically wrap themselves in a context consumer and receive a prop named ",(0,r.mdx)("inlineCode",{parentName:"p"},"disclosureManager")," containing a DisclosureManagerDelegate instance."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},"import Base from 'terra-base';\nimport ModalManager from 'terra-modal-manager';\nimport { withDisclosureManager, disclosureManagerShape } from 'terra-disclosure-manager';\n\nconst DisclosedComponent = withDisclosureManager(({ disclosureManager }) => (\n  <Button\n    text=\"Close Modal\"\n    onClick={() => {\n      disclosureManager.closeDisclosure();\n    }}\n  />\n));\n\nDisclosedComponent.propTypes = {\n  disclosureManager: disclosureManagerShape,\n};\n\nconst DisclosingComponent = withDisclosureManager({ disclosureManager }) => (\n  <Button\n    text=\"Launch Modal\"\n    onClick={() => {\n      disclosureManager.disclose({\n        preferredType: 'modal',\n        content: {\n          key: 'MY-MODAL-DISCLOSURE',\n          component: <MyDisclosureComponent />,\n        }\n      });\n    }}\n  />\n);\n\nDisclosingComponent.propTypes = {\n  disclosureManager: disclosureManagerShape,\n};\n")))}d.isMDXComponent=!0},83696:function(e,n,a){a.d(n,{E:function(){return o}});var r=a(96540),t=a(55713),o=function(e){var n=e.url;return r.createElement(t.A,{src:"https://github.com/cerner/terra-framework/tree/main/packages/terra-disclosure-manager",name:"terra-disclosure-manager",version:"4.43.0",url:n})}},25642:function(e,n,a){a.r(n),n.default={badge:"Badges-module__badge___vex-+","badge-container":"Badges-module__badge-container___B13Mv","badge-name":"Badges-module__badge-name___jkN0m","badge-version":"Badges-module__badge-version___agZ+P"}}}]);