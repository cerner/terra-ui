"use strict";(self.webpackChunkterra_ui=self.webpackChunkterra_ui||[]).push([[33605,45627,85565,3353,5161,45865,85355,3193,4845,46647,85161,38681,15318,40411,18101,38443],{22863:function(e,n,t){var a=t(64836);n.Z=void 0;var r=a(t(67294)),s=a(t(45697)),i=a(t(47166)),o=a(t(17422)),l=i.default.bind(o.default),d={name:s.default.string.isRequired,src:s.default.string,url:s.default.string,version:s.default.string.isRequired},m=function(e){var n=e.src,t=e.name,a=e.url,s=e.version,i=r.default.createElement("a",{className:l("badge"),href:a||"https://www.npmjs.org/package/".concat(t,"/v/").concat(s)},r.default.createElement("span",{className:l("badge-name")},a?"package":"npm"),r.default.createElement("span",{className:l("badge-version")},"v".concat(s))),o=n?r.default.createElement("a",{className:l("badge"),href:n},r.default.createElement("span",{className:l("badge-name")},"github"),r.default.createElement("span",{className:l("badge-version")},"source")):void 0;return r.default.createElement("div",{className:l("badge-container")},i,o)};m.propTypes=d;var p=m;n.Z=p},33605:function(e,n,t){t.r(n),t.d(n,{default:function(){return m}});t(67294);var a=t(81254),r=t(99150),s=["components"];function i(){return i=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},i.apply(this,arguments)}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l={},d="wrapper";function m(e){var n=e.components,t=o(e,s);return(0,a.mdx)(d,i({},l,t,{components:n,mdxType:"MDXLayout"}),(0,a.mdx)(r.C,{mdxType:"Badge"}),(0,a.mdx)("h1",{id:"jest-config-terra"},"Jest Config Terra"),(0,a.mdx)("p",null,"This package provides Terra's recommended jest configuration."),(0,a.mdx)("p",null,"Features:"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},"An extended Jsdom test environment that:",(0,a.mdx)("ul",{parentName:"li"},(0,a.mdx)("li",{parentName:"ul"},"provides a mock implementation for ",(0,a.mdx)("inlineCode",{parentName:"li"},"matchMedia"),"."),(0,a.mdx)("li",{parentName:"ul"},"provides a mock implementation for ",(0,a.mdx)("inlineCode",{parentName:"li"},"scrollIntoView"),"."),(0,a.mdx)("li",{parentName:"ul"},"Sets the dir tag on the html element."))),(0,a.mdx)("li",{parentName:"ul"},"Clears mocks after every test by default."),(0,a.mdx)("li",{parentName:"ul"},"Sets up code coverage."),(0,a.mdx)("li",{parentName:"ul"},"Specifies test matchers to not match on terra-dev-site files."),(0,a.mdx)("li",{parentName:"ul"},"Supports mono repos using a 'packages' directory."),(0,a.mdx)("li",{parentName:"ul"},"Maps png, css, scss, and svg files to the ",(0,a.mdx)("a",{parentName:"li",href:"https://github.com/keyz/identity-obj-proxy"},"identity-obj-proxy"),"."),(0,a.mdx)("li",{parentName:"ul"},"Maps terra-aggregate-translations locale files to a mock implementation. This removes the need to run terra-aggregate-translations prior to jest testing.")),(0,a.mdx)("h2",{id:"what-is-jest"},"What is Jest"),(0,a.mdx)("p",null,'"Jest is a delightful JavaScript Testing Framework with a focus on simplicity" - ',(0,a.mdx)("a",{parentName:"p",href:"https://jestjs.io/"},"Jest")),(0,a.mdx)("h2",{id:"installation"},"Installation"),(0,a.mdx)("p",null,"To install the module:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-shell"},"npm install jest --save-dev\nnpm install @cerner/jest-config-terra --save-dev\n")),(0,a.mdx)("h2",{id:"usage"},"Usage"),(0,a.mdx)("p",null,"To extend ",(0,a.mdx)("inlineCode",{parentName:"p"},"jest-config-terra")," add a ",(0,a.mdx)("inlineCode",{parentName:"p"},"jest.config.js")," file to the root of your project, require ",(0,a.mdx)("inlineCode",{parentName:"p"},"@cerner/jest-config-terra")," and export the config. ",(0,a.mdx)("inlineCode",{parentName:"p"},"jest-config-terra")," does not support extending configuration in the package.json file."),(0,a.mdx)("h3",{id:"jestconfigjs"},"jest.config.js"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-js"},"const jestConfig = require('@cerner/jest-config-terra');\n\nmodule.exports = jestConfig;\n\n")),(0,a.mdx)("h2",{id:"adding-configuration"},"Adding configuration"),(0,a.mdx)("p",null,"Sometimes it is necessary to add additional configuration. In those instances we've found the cleanest option is to spread the config on a new object and subsequently add overrides where appropriate. For instance this example will import regenerator runtime when setting up test files."),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-js"},"const jestConfig = require('@cerner/jest-config-terra');\n\nmodule.exports = {\n  ...jestConfig,\n  setupFiles: [\n    'regenerator-runtime',\n  ],\n};\n\n")),(0,a.mdx)("h2",{id:"enzyme-and-testing-library-react"},"Enzyme and Testing Library: React"),(0,a.mdx)("p",null,(0,a.mdx)("a",{parentName:"p",href:"https://enzymejs.github.io/enzyme/"},"Enzyme")," and ",(0,a.mdx)("a",{parentName:"p",href:"https://testing-library.com/docs/react-testing-library/intro"},"Testing Library: React")," are two popular packages intended to help test react components. ",(0,a.mdx)("inlineCode",{parentName:"p"},"jest-config-terra")," can support either and the choice of which package to use is left up to consumers. Testing Library: React requires no additional setup. An example of how to setup Enzyme can be seen below."),(0,a.mdx)("h3",{id:"jestconfigjs-1"},"jest.config.js"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-js"},"const jestConfig = require('@cerner/jest-config-terra');\n\nmodule.exports = {\n  ...jestConfig,\n  setupFiles: [\n    './jest.enzymeSetup.js',\n  ],\n  snapshotSerializers: [\n    'enzyme-to-json/serializer',\n  ],\n};\n")),(0,a.mdx)("h3",{id:"jestenzymesetupjs"},"jest.enzymeSetup.js"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-js"},"// Make Enzyme functions available in all test files without importing\n/* eslint-disable import/no-extraneous-dependencies */\nimport Enzyme, { mount, render, shallow } from 'enzyme';\nimport Adapter from 'enzyme-adapter-react-16';\n\nEnzyme.configure({ adapter: new Adapter() });\n\nglobal.shallow = shallow;\nglobal.render = render;\nglobal.mount = mount;\n")))}m.isMDXComponent=!0},99150:function(e,n,t){t.d(n,{C:function(){return s}});var a=t(67294),r=t(22863),s=function(e){var n=e.url;return a.createElement(r.Z,{src:"https://github.com/cerner/terra-toolk/tree/main/packages/jest-config-terra",name:"@cerner/jest-config-terra",version:"2.0.0",url:n})}},17422:function(e,n,t){t.r(n),n.default={badge:"Badges-module__badge___vex-+","badge-container":"Badges-module__badge-container___B13Mv","badge-name":"Badges-module__badge-name___jkN0m","badge-version":"Badges-module__badge-version___agZ+P"}}}]);