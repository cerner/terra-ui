"use strict";(self.webpackChunkterra_ui=self.webpackChunkterra_ui||[]).push([[4666],{33792:function(e,t,n){var a=n(22411),l=n(59848);t.c=void 0;var r=a(n(97936)),o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=l(e)&&"function"!=typeof e)return{default:e};var n=f(t);if(n&&n.has(e))return n.get(e);var a={__proto__:null},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var m=r?Object.getOwnPropertyDescriptor(e,o):null;m&&(m.get||m.set)?Object.defineProperty(a,o,m):a[o]=e[o]}return a.default=e,n&&n.set(e,a),a}(n(11504)),m=a(n(3268)),d=a(n(74824)),c=n(93048),i=a(n(72672)),u=a(n(3308)),s=n(97196),p=a(n(86896));function f(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(f=function(e){return e?n:t})(e)}var h=d.default.bind(p.default),_={example:m.default.element,exampleSrc:m.default.element,exampleCssSrc:m.default.element,title:m.default.string,description:m.default.node,isExpanded:m.default.bool},x=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},b=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},v=function(e){var t=e.example,n=e.exampleSrc,a=e.exampleCssSrc,l=e.title,m=e.description,d=e.isExpanded,p=(0,o.useState)(d),f=(0,r.default)(p,2),_=f[0],v=f[1],g=(0,o.useState)(!1),y=(0,r.default)(g,2),N=y[0],E=y[1],T=o.default.useContext(c.ThemeContext),O=void 0!==a,w=function(){E(!N),_&&v(!_)},C=function(){v(!_),N&&E(!N)},j=function(e,t){e.nativeEvent.keyCode!==s.KEY_SPACE&&e.nativeEvent.keyCode!==s.KEY_RETURN||(e.preventDefault(),t())};return o.default.createElement("div",{className:h("template",T.className)},o.default.createElement("div",{className:h("header")},l&&o.default.createElement("h2",{className:h("title")},l)),o.default.createElement("div",{className:h("content")},m&&o.default.createElement("div",{className:h("description")},m),t),o.default.createElement("div",{className:h("footer")},n?o.default.createElement("div",{className:h("button-container")},O&&o.default.createElement("button",{type:"button",className:h("css-toggle","item",{"is-selected":N}),onClick:w,onKeyDown:function(e){return j(e,w)},onBlur:x,onMouseDown:b,tabIndex:0,"data-focus-styles-enabled":!0},o.default.createElement(i.default,{className:h("chevron")}),o.default.createElement("span",null,"CSS"),o.default.createElement(u.default,{className:h("chevron")})),o.default.createElement("button",{type:"button",className:h("code-toggle","item",{"is-selected":_}),onClick:C,onKeyDown:function(e){return j(e,C)},onBlur:x,onMouseDown:b,tabIndex:0,"data-focus-styles-enabled":!0},o.default.createElement(i.default,{className:h("chevron")}),o.default.createElement("span",null,"Code"),o.default.createElement(u.default,{className:h("chevron")}))):null,o.default.createElement("div",null,N&&o.default.createElement("div",{className:h("css")},a),_&&o.default.createElement("div",{className:h("code")},n))))};v.propTypes=_,v.defaultProps={isExpanded:!1};t.c=v},4666:function(e,t,n){n.r(t),n.d(t,{default:function(){return E}});var a=n(11504),l=n(69788),r=n(72756),o=["components"];function m(){return m=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},m.apply(this,arguments)}function d(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var c={};function i(e){var t=e.components,n=d(e,o);return(0,l.mdx)("wrapper",m({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport classNames from 'classnames/bind';\nimport { ThemeContext } from 'terra-application/lib/theme';\n\nimport styles from './ThemedComponent.module.scss';\n\nconst cx = classNames.bind(styles);\n\nconst Themed = () => {\n  const theme = React.useContext(ThemeContext);\n  return (\n    <div className={cx('themed', theme.className)}>\n      <h1>\n        {`Theme Name: ${theme.name}`}\n      </h1>\n      <div className={cx('themed-block')} />\n    </div>\n  );\n};\n\nexport default Themed;\n\n")))}i.isMDXComponent=!0;var u=n(33792),s=["components"];function p(){return p=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},p.apply(this,arguments)}function f(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var h={};function _(e){var t=e.components,n=f(e,s);return(0,l.mdx)("wrapper",p({},h,n,{components:t,mdxType:"MDXLayout"}),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-scss"},"//Themes\n@import './clinical-lowlight-theme/ThemedComponent.module';\n@import './orion-fusion-theme/ThemedComponent.module';\n\n:local {\n  .themed {\n    height: 100%;\n    overflow: auto;\n    padding: 24px;\n    position: relative;\n  }\n\n  .themed-block {\n    background-color: var(--terra-application-themed-component-block-background-color, #0079be);\n    height: 24px;\n  }\n}\n\n")))}_.isMDXComponent=!0;var x=function(e){var t=e.title,n=e.description,l=e.isExpanded;return a.createElement(u.c,{title:t||"Themed Component",description:n,example:a.createElement(r.c,null),exampleCssSrc:a.createElement(_,null),exampleSrc:a.createElement(i,null),isExpanded:l})},b=["components"];function v(){return v=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},v.apply(this,arguments)}function g(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var y={},N="wrapper";function E(e){var t=e.components,n=g(e,b);return(0,l.mdx)(N,v({},y,n,{components:t,mdxType:"MDXLayout"}),(0,l.mdx)("h1",{id:"themecontext"},"ThemeContext"),(0,l.mdx)("p",null,"The ThemeContext defines an interface for access to the framework's current theme."),(0,l.mdx)("p",null,"This context can be used to apply any theme related changes to a component."),(0,l.mdx)("p",null,"The most common use would be to apply a theme class to the root tag of the component to apply theme variables. See below for an example."),(0,l.mdx)("blockquote",null,(0,l.mdx)("p",{parentName:"blockquote"},"Note: An ThemeContextProvider is rendered by ",(0,l.mdx)("a",{parentName:"p",href:"/terra-ui/application/terra-application/components/application-base"},"ApplicationBase"),".\nAny components rendered within ApplicationBase can access a ThemeContext without rendering additional providers.")),(0,l.mdx)("h2",{id:"usage"},"Usage"),(0,l.mdx)(x,{description:"This example pulls the current theme from the theme context and adds the theme class name to apply theme variables.",isExpanded:!0,mdxType:"ThemedComponent"}),(0,l.mdx)("h2",{id:"context-value"},"Context Value"),(0,l.mdx)("p",null,"The ThemeContext provides an object with the following values:"),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"Key Name"),(0,l.mdx)("th",{parentName:"tr",align:null},"Type"),(0,l.mdx)("th",{parentName:"tr",align:null},"Is Required"),(0,l.mdx)("th",{parentName:"tr",align:null},"DefaultValue"),(0,l.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"name")),(0,l.mdx)("td",{parentName:"tr",align:null},"String"),(0,l.mdx)("td",{parentName:"tr",align:null},"optional"),(0,l.mdx)("td",{parentName:"tr",align:null},"undefined"),(0,l.mdx)("td",{parentName:"tr",align:null},"The current application theme name. This field requires use of the terra-toolkit webpack config.")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"className")),(0,l.mdx)("td",{parentName:"tr",align:null},"String"),(0,l.mdx)("td",{parentName:"tr",align:null},"optional"),(0,l.mdx)("td",{parentName:"tr",align:null},"undefined"),(0,l.mdx)("td",{parentName:"tr",align:null},"The current application theme className. The default theme is indicated as undefined or empty string.")))))}E.isMDXComponent=!0},86896:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___rBbtD","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___GzA23",template:"ExampleTemplate-module__template___a4uPk",header:"ExampleTemplate-module__header___iFXV3",content:"ExampleTemplate-module__content___48m4Q",description:"ExampleTemplate-module__description___NwBJo",footer:"ExampleTemplate-module__footer___GpSoG","button-container":"ExampleTemplate-module__button-container___rAD11",css:"ExampleTemplate-module__css___+jtk1",code:"ExampleTemplate-module__code___7rC6C","css-toggle":"ExampleTemplate-module__css-toggle___chHK7","code-toggle":"ExampleTemplate-module__code-toggle___TGlE-","is-selected":"ExampleTemplate-module__is-selected___0BYwS",item:"ExampleTemplate-module__item___8FTQq",chevron:"ExampleTemplate-module__chevron___VbY7N",title:"ExampleTemplate-module__title___r+nbJ","dynamic-content":"ExampleTemplate-module__dynamic-content___k+1H7"}},26256:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"ThemedComponent-module__clinical-lowlight-theme___Q4Ykg","orion-fusion-theme":"ThemedComponent-module__orion-fusion-theme___JV4HB",themed:"ThemedComponent-module__themed___PVCyt","themed-block":"ThemedComponent-module__themed-block___W8bx8"}},72756:function(e,t,n){var a=n(22411);t.c=void 0;var l=a(n(11504)),r=a(n(74824)),o=n(93048),m=a(n(26256)),d=r.default.bind(m.default);t.c=function(){var e=l.default.useContext(o.ThemeContext);return l.default.createElement("div",{className:d("themed",e.className)},l.default.createElement("h1",null,"Theme Name: ".concat(e.name)),l.default.createElement("div",{className:d("themed-block")}))}},72672:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n(11504)),l=r(n(22728));function r(e){return e&&e.__esModule?e:{default:e}}function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o.apply(this,arguments)}var m=function(e){var t=o({},e);return a.default.createElement(l.default,t,a.default.createElement("path",{d:"M10.3 24 33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};m.displayName="IconChevronLeft",m.defaultProps={viewBox:"0 0 48 48","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg"};t.default=m}}]);