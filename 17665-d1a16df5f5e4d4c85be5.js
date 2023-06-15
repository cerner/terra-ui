"use strict";(self.webpackChunkterra_ui=self.webpackChunkterra_ui||[]).push([[17665,45627,85565,3353,5161,45865,85355,3193,4845,46647,85161,38681,15318,40411,18101,38443],{22863:function(e,n,t){var a=t(64836);n.Z=void 0;var o=a(t(67294)),r=a(t(45697)),s=a(t(47166)),i=a(t(17422)),l=s.default.bind(i.default),m={name:r.default.string.isRequired,src:r.default.string,url:r.default.string,version:r.default.string.isRequired},d=function(e){var n=e.src,t=e.name,a=e.url,r=e.version,s=o.default.createElement("a",{className:l("badge"),href:a||"https://www.npmjs.org/package/".concat(t,"/v/").concat(r)},o.default.createElement("span",{className:l("badge-name")},a?"package":"npm"),o.default.createElement("span",{className:l("badge-version")},"v".concat(r))),i=n?o.default.createElement("a",{className:l("badge"),href:n},o.default.createElement("span",{className:l("badge-name")},"github"),o.default.createElement("span",{className:l("badge-version")},"source")):void 0;return o.default.createElement("div",{className:l("badge-container")},s,i)};d.propTypes=m;var c=d;n.Z=c},17665:function(e,n,t){t.r(n),t.d(n,{default:function(){return d}});t(67294);var a=t(81254),o=t(93626),r=["components"];function s(){return s=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},s.apply(this,arguments)}function i(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l={},m="wrapper";function d(e){var n=e.components,t=i(e,r);return(0,a.mdx)(m,s({},l,t,{components:n,mdxType:"MDXLayout"}),(0,a.mdx)(o.C,{mdxType:"Badge"}),(0,a.mdx)("h1",{id:"terra-postcss-theme-plugin"},"Terra Postcss Theme plugin"),(0,a.mdx)("p",null,"The purpose of this plugin is to create a default theme from a scoped theme and to remove any known themes that are not desired."),(0,a.mdx)("p",null,"The plugin will read from the ",(0,a.mdx)("inlineCode",{parentName:"p"},"terra-theme.config.js")," at root."),(0,a.mdx)("h2",{id:"configuration"},"Configuration"),(0,a.mdx)("h3",{id:"terra-themeconfigjs"},"terra-theme.config.js"),(0,a.mdx)("p",null,"Below is an example of terra-theme.config. See ",(0,a.mdx)("a",{parentName:"p",href:"/terra-ui/dev_tools/cerner-terra-toolkit-docs/webpack-config-terra/terra-theme-config-js"},"theme config")," for more details about the object structure."),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-js"},"const themeConfig = {\n  theme: 'terra-dark-theme', // The default theme.\n  scoped: ['terra-light-theme', 'terra-lowlight-theme'], // An array of scoped themes.\n};\n\nmodule.exports = themeConfig;\n")),(0,a.mdx)("h2",{id:"usage"},"Usage"),(0,a.mdx)("p",null,"To use this plugin you must have strong conventions around your theme name, include the theme class in your css and add the postcss plugin."),(0,a.mdx)("h3",{id:"css"},"CSS"),(0,a.mdx)("p",null,"This plugin makes the assumption that you are declaring theme variables under a global css class i.e. ",(0,a.mdx)("inlineCode",{parentName:"p"},".orion-fusion-theme")," and these theme files are included in such a way that they are processed by webpack."),(0,a.mdx)("p",null,"Consider the following example. The React component, ",(0,a.mdx)("inlineCode",{parentName:"p"},"Component.jsx")," pulls in and applies css styles from ",(0,a.mdx)("inlineCode",{parentName:"p"},"component.module.scss")," to the wrapper div. You will also notice it is getting the current theme set on the application from the ",(0,a.mdx)("inlineCode",{parentName:"p"},"ThemeContext")," and is also applying the current theme name to the div."),(0,a.mdx)("p",null,"If the current theme was ",(0,a.mdx)("inlineCode",{parentName:"p"},"orion-fusion-theme")," the ",(0,a.mdx)("inlineCode",{parentName:"p"},"orion-fusion-theme")," classname would be applied and the styles from ",(0,a.mdx)("inlineCode",{parentName:"p"},"component.orion-fusion-theme.module.scss")," would be applied since it is imported into ",(0,a.mdx)("inlineCode",{parentName:"p"},"component.module.scss")," and was processed by webpack."),(0,a.mdx)("h4",{id:"componentjsx"},"Component.jsx"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport { ThemeContext } from 'terra-application/lib/theme';\n\nimport styles from './component.module.scss';\n\nconst cx = classNames.bind(styles);\n\nconst Component = ({children}) => {\n  const theme = React.useContext(ThemeContext);\n  return (\n    <div className={cx('div', theme.className)}>\n      {children}\n    </div>\n  );\n};\n\nexport default Component;\n")),(0,a.mdx)("p",null,"The scss file includes the themefile and applies the css variable to the css property. Breaking the theme variable out into their own files is purely convention and not required for this plugin. By convention we name the file ",(0,a.mdx)("inlineCode",{parentName:"p"},"<component>.<theme>.module.scss"),"."),(0,a.mdx)("h4",{id:"componentmodulescss"},"component.module.scss"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-scss"},"// Themes\n@import './component.orion-fusion-theme.module';\n\n:local {\n  .div {\n    background-color: var(--component-background-color, orange),\n  }\n}\n")),(0,a.mdx)("p",null,"The theme file declares the ",(0,a.mdx)("inlineCode",{parentName:"p"},".orion-fusion-theme")," as a global class and defines the css variable."),(0,a.mdx)("h4",{id:"componentorion-fusion-thememodulescss"},"component.orion-fusion-theme.module.scss"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-scss"},":local {\n  .orion-fusion-theme {\n    --terra-button-background-color-neutral: purple;\n  }\n}\n")),(0,a.mdx)("h3",{id:"webpack"},"Webpack"),(0,a.mdx)("p",null,"This plugin is already included in the default webpack config. Below is an example of how you could include it in your own webpack config, but we strongly recommend you extend terra's config instead of creating your own. It's intended to be included before css modules are processed."),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-js"},"const ThemePlugin = require('terra-toolkit/scripts/postcss/ThemePlugin');\n...\n  {\n    loader: 'postcss-loader',\n    options: {\n      ident: 'postcss',\n      plugins: [\n        ThemePlugin(themeConfig),\n      ],\n    },\n  },\n...\n")))}d.isMDXComponent=!0},93626:function(e,n,t){t.d(n,{C:function(){return r}});var a=t(67294),o=t(22863),r=function(e){var n=e.url;return a.createElement(o.Z,{src:"https://github.com/cerner/terra-toolk/tree/main/packages/webpack-config-terra",name:"@cerner/webpack-config-terra",version:"3.0.1",url:n})}},17422:function(e,n,t){t.r(n),n.default={badge:"Badges-module__badge___vex-+","badge-container":"Badges-module__badge-container___B13Mv","badge-name":"Badges-module__badge-name___jkN0m","badge-version":"Badges-module__badge-version___agZ+P"}}}]);