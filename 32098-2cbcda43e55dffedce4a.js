"use strict";(self.webpackChunkterra_ui=self.webpackChunkterra_ui||[]).push([[32098],{49271:function(e,t,n){var a=n(64836),o=n(18698);t.Z=void 0;var r=a(n(27424)),l=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==o(e)&&"function"!=typeof e)return{default:e};var n=h(t);if(n&&n.has(e))return n.get(e);var a={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var m=r?Object.getOwnPropertyDescriptor(e,l):null;m&&(m.get||m.set)?Object.defineProperty(a,l,m):a[l]=e[l]}a.default=e,n&&n.set(e,a);return a}(n(67294)),m=a(n(45697)),i=a(n(47166)),s=n(21538),c=a(n(33864)),p=a(n(23399)),d=n(51051),u=a(n(53560));function h(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(h=function(e){return e?n:t})(e)}var f=i.default.bind(u.default),x={example:m.default.element,exampleSrc:m.default.element,exampleCssSrc:m.default.element,title:m.default.string,description:m.default.node,isExpanded:m.default.bool},b=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},g=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},v=function(e){var t=e.example,n=e.exampleSrc,a=e.exampleCssSrc,o=e.title,m=e.description,i=e.isExpanded,u=(0,l.useState)(i),h=(0,r.default)(u,2),x=h[0],v=h[1],y=(0,l.useState)(!1),_=(0,r.default)(y,2),T=_[0],C=_[1],E=l.default.useContext(s.ThemeContext),O=void 0!==a,w=function(){C(!T),x&&v(!x)},N=function(){v(!x),T&&C(!T)},S=function(e,t){e.nativeEvent.keyCode!==d.KEY_SPACE&&e.nativeEvent.keyCode!==d.KEY_RETURN||(e.preventDefault(),t())};return l.default.createElement("div",{className:f("template",E.className)},l.default.createElement("div",{className:f("header")},o&&l.default.createElement("h2",{className:f("title")},o)),l.default.createElement("div",{className:f("content")},m&&l.default.createElement("div",{className:f("description")},m),t),l.default.createElement("div",{className:f("footer")},n?l.default.createElement("div",{className:f("button-container")},O&&l.default.createElement("button",{type:"button",className:f("css-toggle","item",{"is-selected":T}),onClick:w,onKeyDown:function(e){return S(e,w)},onBlur:b,onMouseDown:g,tabIndex:0,"data-focus-styles-enabled":!0},l.default.createElement(c.default,{className:f("chevron")}),l.default.createElement("span",null,"CSS"),l.default.createElement(p.default,{className:f("chevron")})),l.default.createElement("button",{type:"button",className:f("code-toggle","item",{"is-selected":x}),onClick:N,onKeyDown:function(e){return S(e,N)},onBlur:b,onMouseDown:g,tabIndex:0,"data-focus-styles-enabled":!0},l.default.createElement(c.default,{className:f("chevron")}),l.default.createElement("span",null,"Code"),l.default.createElement(p.default,{className:f("chevron")}))):null,l.default.createElement("div",null,T&&l.default.createElement("div",{className:f("css")},a),x&&l.default.createElement("div",{className:f("code")},n))))};v.propTypes=x,v.defaultProps={isExpanded:!1};var y=v;t.Z=y},32098:function(e,t,n){n.r(t),n.d(t,{default:function(){return L}});var a=n(67294),o=n(81254),r=n(29191),l=["components"];function m(){return m=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},m.apply(this,arguments)}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s={},c="wrapper";function p(e){var t=e.components,n=i(e,l);return(0,o.mdx)(c,m({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport classNames from 'classnames/bind';\nimport { ThemeContext } from 'terra-application/lib/theme';\nimport styles from './ExampleComponent.module.scss';\n\nconst cx = classNames.bind(styles);\n\nconst ExampleComponent = () => {\n  const theme = React.useContext(ThemeContext);\n\n  return (\n    <div className={cx('example-component', theme.className)}>\n      This is an example component.\n    </div>\n  );\n};\n\nexport default ExampleComponent;\n\n")))}p.isMDXComponent=!0;var d=n(49271),u=["components"];function h(){return h=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},h.apply(this,arguments)}function f(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var x={},b="wrapper";function g(e){var t=e.components,n=f(e,u);return(0,o.mdx)(b,h({},x,n,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-scss"},"// Import each theme.\n@import './clinical-lowlight-theme/ExampleComponent.module';\n@import './orion-fusion-theme/ExampleComponent.module';\n\n:local {\n  .example-component {\n    background-color: var(--terra-application-example-component-background-color, #fff);\n    color: var(--terra-application-example-component-color, inherit);\n    font-size: var(--terra-application-example-component-font-size, 1rem);\n  }\n}\n\n")))}g.isMDXComponent=!0;var v=function(e){var t=e.title,n=e.description,o=e.isExpanded;return a.createElement(d.Z,{title:t||"Example Component",description:n,example:a.createElement(r.Z,null),exampleCssSrc:a.createElement(g,null),exampleSrc:a.createElement(p,null),isExpanded:o})},y=["components"];function _(){return _=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},_.apply(this,arguments)}function T(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var C={},E="wrapper";function O(e){var t=e.components,n=T(e,y);return(0,o.mdx)(E,_({},C,n,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-scss"},":local {\n  .clinical-lowlight-theme {\n    --terra-application-example-component-background-color: rgb(34, 42, 46);\n    --terra-application-example-component-color: rgb(178, 181, 182);\n    --terra-application-example-component-font-size: 1rem;\n  }\n}\n\n")))}O.isMDXComponent=!0;var w=["components"];function N(){return N=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},N.apply(this,arguments)}function S(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var j={},k="wrapper";function P(e){var t=e.components,n=S(e,w);return(0,o.mdx)(k,N({},j,n,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-scss"},":local {\n  .orion-fusion-theme {\n    --terra-application-example-component-background-color: #f6f8fa;\n    --terra-application-example-component-color: rgb(36, 41, 46);\n    --terra-application-example-component-font-size: 2rem;\n  }\n}\n\n")))}P.isMDXComponent=!0;var I=["components"];function D(){return D=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},D.apply(this,arguments)}function M(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var A={},z="wrapper";function L(e){var t=e.components,n=M(e,I);return(0,o.mdx)(z,D({},A,n,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("h1",{id:"theming-guide"},"Theming Guide"),(0,o.mdx)("p",null,"Welcome to the Terra theming strategy guide. This guide will walk through the recommended approach for theming custom components."),(0,o.mdx)("h2",{id:"summary"},"Summary"),(0,o.mdx)("p",null,"Terra provides a default, clinical-lowlight-theme, and orion-fusion-theme. This guide is for theming custom components. Custom components are any non Terra-UI component created by teams that need to be integrated into an application using a supported Terra theme. Teams should not create new themes or theme Terra components."),(0,o.mdx)("h2",{id:"getting-started"},"Getting Started"),(0,o.mdx)("p",null,"This guide will walk through theming an example component. The example component is using the base component from terra-application to provide an API for interacting with the theme."),(0,o.mdx)("h2",{id:"theme-context"},"Theme Context"),(0,o.mdx)("p",null,"An application's theme is provided through ",(0,o.mdx)("a",{parentName:"p",href:"https://reactjs.org/docs/context.html"},"React context")," by a theme provider. ",(0,o.mdx)("a",{parentName:"p",href:"/terra-ui/application/terra-application/components/application-base"},"Application Base")," initializes a theme provider automatically. The theme value is accessed using the ",(0,o.mdx)("a",{parentName:"p",href:"/terra-ui/application/terra-application/contexts/theme-context"},"theme context")," from terra-application."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-jsx"},"import { ThemeContext } from 'terra-application/lib/theme';\n")),(0,o.mdx)("p",null,"Use the theme context to read the active theme value."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-jsx"},"import { ThemeContext } from 'terra-application/lib/theme';\n\nconst ExampleComponent = () => {\n  // Access the active theme context value.\n  const theme = React.useContext(ThemeContext);\n};\n")),(0,o.mdx)("p",null,"The active theme's class name is stored in a ",(0,o.mdx)("inlineCode",{parentName:"p"},"className")," key in the context value. To apply the theme, bind the className to the component using ",(0,o.mdx)("a",{parentName:"p",href:"https://github.com/JedWatson/classnames#alternate-bind-version-for-css-modules"},"classnames/bind"),". Some additional documentation for CSS Modules and classNames can be found on the ",(0,o.mdx)("a",{parentName:"p",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/contributing/conventions"},"conventions page"),". Please note that generally an empty or undefined className indicates the default theme is active. The ",(0,o.mdx)("inlineCode",{parentName:"p"},"className")," key maps directly to the anticipated theme css class name. Using the correct theme className is required."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport classNames from 'classnames/bind';\nimport { ThemeContext } from 'terra-application/lib/theme';\nimport styles from './ThemedComponent.module.scss';\n\nconst cx = classNames.bind(styles);\n\nconst ExampleComponent = () => {\n  const theme = React.useContext(ThemeContext);\n\n  return (\n    <div className={cx('example-component', theme.className)}>\n      This is an example component.\n    </div>\n  );\n};\n")),(0,o.mdx)("h2",{id:"scss"},"SCSS"),(0,o.mdx)("p",null,"Once the theme className has been bound, the component can be appropriately themed. Start by defining the variables for the CSS properties that are expected to change between themes. SCSS variables are defined using ",(0,o.mdx)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/--*"},"custom properties"),". These values should utilize the SCSS ",(0,o.mdx)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/var"},"var()")," functionality. The var() function works by applying a variable if the value has been set. If no value has been set the default value is used."),(0,o.mdx)("h3",{id:"examplecomponentmodulescss"},"ExampleComponent.module.scss"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-scss"},"// The values in this file represent the default theme. The default theme is applied using the default values in the var() function.\n:local {\n  .example-component {\n    background-color: var(--terra-application-example-component-background-color, #fff);\n    color: var(--terra-application-example-component-color, inherit);\n    font-size: var(--terra-application-example-component-font-size, 1rem);\n  }\n}\n")),(0,o.mdx)("p",null,"To add themes, create new files for each theme and include them in the original SCSS file. Theme are regular SCSS files that define variables to be applied when the theme becomes active. Themes must be locally scoped and must use a supported theme class name. It is recommended to define all available theme variables for each theme. If the component, example component in this case, defines three themable variables, all three variables should be assigned a value in each of the created theme files. This ensures a more robust theme."),(0,o.mdx)("h3",{id:"orion-fusion-themeexamplecomponentmodulescss"},"orion-fusion-theme/ExampleComponent.module.scss"),(0,o.mdx)(P,{mdxType:"OrionFusionThemeSCSS"}),(0,o.mdx)("h3",{id:"clinical-lowlight-themeexamplecomponentmodulescss"},"clinical-lowlight-theme/ExampleComponent.module.scss"),(0,o.mdx)(O,{mdxType:"ClinicalLowLightSCSS"}),(0,o.mdx)("p",null,"Include the new theme files in the original SCSS file."),(0,o.mdx)(g,{mdxType:"ExampleComponentSCSS"}),(0,o.mdx)("p",null,"The recommended file structure looks like this:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre"},".\n├── example-component\n│   ├── ExampleComponent.jsx\n│   ├── ExampleComponent.module.scss\n│   ├── clinical-lowlight-theme\n│   │   └── ExampleComponent.module.scss\n│   └── orion-fusion-theme\n│       └── ExampleComponent.module.scss\n")),(0,o.mdx)("h2",{id:"webpack"},"Webpack"),(0,o.mdx)("p",null,"To enable themes a ",(0,o.mdx)("inlineCode",{parentName:"p"},"terra-theme.config.js")," configuration file must be defined. This file is read by the ",(0,o.mdx)("a",{parentName:"p",href:"https://github.com/cerner/terra-toolkit-boneyard/tree/main/config/webpack/postcss"},"terra-toolkit postcss loader")," to apply default themes. The loader runs automatically for webpack configurations using ",(0,o.mdx)("a",{parentName:"p",href:"https://github.com/cerner/terra-toolkit-boneyard/blob/main/config/webpack/webpack.config.js"},"terra-toolkit's webpack config"),"."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-js"},"const themeConfig = {\n  theme: 'terra-dark-theme', // The default theme to be enabled on page load.\n  scoped: ['terra-light-theme', 'terra-lowlight-theme'], // An array of scoped themes. Note: Scoped themes do not work in IE 10.\n};\n\nmodule.exports = themeConfig;\n")),(0,o.mdx)("h2",{id:"example"},"Example"),(0,o.mdx)("p",null,"Toggle the theme from the dropdown at the top of the page to see changes."),(0,o.mdx)(v,{isExpanded:!0,mdxType:"ExampleComponent"}),(0,o.mdx)("h2",{id:"testing"},"Testing"),(0,o.mdx)("p",null,"Applications can opt into running WDIO tests against multiple themes."),(0,o.mdx)("p",null,"Themes testing can be enabled via the CLI using ",(0,o.mdx)("inlineCode",{parentName:"p"},"--themes"),"."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-json"},"{\n  \"test:wdio\": \"npm run pack; tt-wdio --config ./wdio.conf.js --locales ['en','es'] --themes ['orion-fusion-theme']; rm -rf ./build\"\n}\n")),(0,o.mdx)("p",null,"See the ",(0,o.mdx)("a",{parentName:"p",href:"https://github.com/cerner/terra-toolkit-boneyard/tree/main/scripts/wdio#terra-toolkit-wdio-helpers"},"WDIO documentation")," for additional configuration options."),(0,o.mdx)("h2",{id:"faq"},"FAQ"),(0,o.mdx)("h3",{id:"are-terra-theme-variables-reusable"},"Are Terra Theme Variables Reusable?"),(0,o.mdx)("p",null,"No, theme variables are considered private and should never be used by consuming applications. Do not use Terra theme variables in custom CSS."),(0,o.mdx)("h3",{id:"is-it-okay-to-override-terra-component-styles"},"Is It Okay To Override Terra Component Styles?"),(0,o.mdx)("p",null,"It is not recommended to override Terra component styles. The exceptions are layout and positioning concerns such as width or margins."),(0,o.mdx)("h3",{id:"do-i-have-to-use-terra-toolkits-webpack-configuration"},"Do I Have To Use Terra Toolkit's Webpack Configuration?"),(0,o.mdx)("p",null,"It is highly recommended that teams use the terra-toolkit webpack configuration to ensure the appropriate loaders are used."),(0,o.mdx)("h3",{id:"can-i-use-multiple-themes-providers-at-once"},"Can I Use Multiple Themes Providers At Once?"),(0,o.mdx)("p",null,"Technically yes, officially no. Multiple themes will apply all CSS styles for all themes to the root element. This will result in style collisions, specifically the base font-size themes depend on. An incorrect font-size will impact all rem based CSS (padding, margins, line-heights, etc...). The theme context supports a single theme in context at a time."),(0,o.mdx)("h3",{id:"can-i-create-an-entirely-new-theme"},"Can I Create An Entirely New Theme?"),(0,o.mdx)("p",null,"No, the internal implementation of Terra components is considered private and changes frequently. All Terra component theme variables must be maintained by the Terra team."))}L.isMDXComponent=!0},53560:function(e,t,n){n.r(t),t.default={"orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___GzA23",template:"ExampleTemplate-module__template___a4uPk",header:"ExampleTemplate-module__header___iFXV3",content:"ExampleTemplate-module__content___48m4Q",description:"ExampleTemplate-module__description___NwBJo",footer:"ExampleTemplate-module__footer___GpSoG","button-container":"ExampleTemplate-module__button-container___rAD11",css:"ExampleTemplate-module__css___+jtk1",code:"ExampleTemplate-module__code___7rC6C","css-toggle":"ExampleTemplate-module__css-toggle___chHK7","code-toggle":"ExampleTemplate-module__code-toggle___TGlE-","is-selected":"ExampleTemplate-module__is-selected___0BYwS",item:"ExampleTemplate-module__item___8FTQq",chevron:"ExampleTemplate-module__chevron___VbY7N",title:"ExampleTemplate-module__title___r+nbJ","dynamic-content":"ExampleTemplate-module__dynamic-content___k+1H7"}},95855:function(e,t,n){n.r(t),t.default={"orion-fusion-theme":"ExampleComponent-module__orion-fusion-theme___h5GJU","example-component":"ExampleComponent-module__example-component___mnmV6"}},29191:function(e,t,n){var a=n(64836);t.Z=void 0;var o=a(n(67294)),r=a(n(47166)),l=n(21538),m=a(n(95855)),i=r.default.bind(m.default),s=function(){var e=o.default.useContext(l.ThemeContext);return o.default.createElement("div",{className:i("example-component",e.className)},"This is an example component.")};t.Z=s},33864:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n(67294)),o=r(n(99139));function r(e){return e&&e.__esModule?e:{default:e}}function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},l.apply(this,arguments)}var m=function(e){var t=l({},e);return a.default.createElement(o.default,t,a.default.createElement("path",{d:"M10.3 24L33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};m.displayName="IconChevronLeft",m.defaultProps={className:"",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg","data-name":"Layer 1",isBidi:!0};var i=m;t.default=i}}]);