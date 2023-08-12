"use strict";(self.webpackChunkterra_ui=self.webpackChunkterra_ui||[]).push([[45948],{10347:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=c(n(67294)),a=c(n(47166)),l=c(n(45697)),o=c(n(13006));function c(e){return e&&e.__esModule?e:{default:e}}var u=a.default.bind(o.default),i={children:l.default.node.isRequired},d=function(e){var t=e.children;return r.default.createElement("div",{className:u("content-wrapper")},t)};d.propTypes=i;var m=d;t.default=m},89366:function(e,t,n){t.Z=void 0;var r=u(n(67294)),a=u(n(55281)),l=u(n(7017)),o=u(n(31601)),c=u(n(10347));function u(e){return e&&e.__esModule?e:{default:e}}t.Z=function(){return r.default.createElement(c.default,null,r.default.createElement(o.default,{center:r.default.createElement(r.default.Fragment,null,r.default.createElement(l.default,{isInlineBlock:!0,marginRight:"medium"},r.default.createElement(a.default,{text:"Action One"})),r.default.createElement(a.default,{text:"Action Two"}))}))}},79505:function(e,t,n){t.Z=void 0;var r=c(n(67294)),a=c(n(34171)),l=c(n(31601)),o=c(n(10347));function c(e){return e&&e.__esModule?e:{default:e}}t.Z=function(){return r.default.createElement(o.default,null,r.default.createElement(l.default,{center:r.default.createElement(a.default,{href:"#"},"A link")}))}},22863:function(e,t,n){var r=n(64836);t.Z=void 0;var a=r(n(67294)),l=r(n(45697)),o=r(n(47166)),c=r(n(17422)),u=o.default.bind(c.default),i={name:l.default.string.isRequired,src:l.default.string,url:l.default.string,version:l.default.string.isRequired},d=function(e){var t=e.src,n=e.name,r=e.url,l=e.version,o=a.default.createElement("a",{className:u("badge"),href:r||"https://www.npmjs.org/package/".concat(n,"/v/").concat(l)},a.default.createElement("span",{className:u("badge-name")},r?"package":"npm"),a.default.createElement("span",{className:u("badge-version")},"v".concat(l))),c=t?a.default.createElement("a",{className:u("badge"),href:t},a.default.createElement("span",{className:u("badge-name")},"github"),a.default.createElement("span",{className:u("badge-version")},"source")):void 0;return a.default.createElement("div",{className:u("badge-container")},o,c)};d.propTypes=i;var m=d;t.Z=m},49271:function(e,t,n){var r=n(64836),a=n(18698);t.Z=void 0;var l=r(n(27424)),o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!=typeof e)return{default:e};var n=f(t);if(n&&n.has(e))return n.get(e);var r={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var c=l?Object.getOwnPropertyDescriptor(e,o):null;c&&(c.get||c.set)?Object.defineProperty(r,o,c):r[o]=e[o]}r.default=e,n&&n.set(e,r);return r}(n(67294)),c=r(n(45697)),u=r(n(47166)),i=n(21538),d=r(n(33864)),m=r(n(23399)),p=n(51051),s=r(n(53560));function f(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(f=function(e){return e?n:t})(e)}var _=u.default.bind(s.default),v={example:c.default.element,exampleSrc:c.default.element,exampleCssSrc:c.default.element,title:c.default.string,description:c.default.node,isExpanded:c.default.bool},b=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},x=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},g=function(e){var t=e.example,n=e.exampleSrc,r=e.exampleCssSrc,a=e.title,c=e.description,u=e.isExpanded,s=(0,o.useState)(u),f=(0,l.default)(s,2),v=f[0],g=f[1],y=(0,o.useState)(!1),E=(0,l.default)(y,2),h=E[0],O=E[1],T=o.default.useContext(i.ThemeContext),j=void 0!==r,w=function(){O(!h),v&&g(!v)},N=function(){g(!v),h&&O(!h)},C=function(e,t){e.nativeEvent.keyCode!==p.KEY_SPACE&&e.nativeEvent.keyCode!==p.KEY_RETURN||(e.preventDefault(),t())};return o.default.createElement("div",{className:_("template",T.className)},o.default.createElement("div",{className:_("header")},a&&o.default.createElement("h2",{className:_("title")},a)),o.default.createElement("div",{className:_("content")},c&&o.default.createElement("div",{className:_("description")},c),t),o.default.createElement("div",{className:_("footer")},n?o.default.createElement("div",{className:_("button-container")},j&&o.default.createElement("button",{type:"button",className:_("css-toggle","item",{"is-selected":h}),onClick:w,onKeyDown:function(e){return C(e,w)},onBlur:b,onMouseDown:x,tabIndex:0,"data-focus-styles-enabled":!0},o.default.createElement(d.default,{className:_("chevron")}),o.default.createElement("span",null,"CSS"),o.default.createElement(m.default,{className:_("chevron")})),o.default.createElement("button",{type:"button",className:_("code-toggle","item",{"is-selected":v}),onClick:N,onKeyDown:function(e){return C(e,N)},onBlur:b,onMouseDown:x,tabIndex:0,"data-focus-styles-enabled":!0},o.default.createElement(d.default,{className:_("chevron")}),o.default.createElement("span",null,"Code"),o.default.createElement(m.default,{className:_("chevron")}))):null,o.default.createElement("div",null,h&&o.default.createElement("div",{className:_("css")},r),v&&o.default.createElement("div",{className:_("code")},n))))};g.propTypes=v,g.defaultProps={isExpanded:!1};var y=g;t.Z=y},45948:function(e,t,n){n.r(t),n.d(t,{default:function(){return M}});var r=n(67294),a=n(81254),l=n(64027),o=n(79505),c=["components"];function u(){return u=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u.apply(this,arguments)}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d={};function m(e){var t=e.components,n=i(e,c);return(0,a.mdx)("wrapper",u({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Hyperlink from 'terra-hyperlink';\nimport CenteredActionFooter from 'terra-action-footer/lib/CenteredActionFooter';\nimport ExampleTemplate from '../../common/ExampleTemplate';\n\nexport default () => (\n  <ExampleTemplate>\n    <CenteredActionFooter\n      center={<Hyperlink href=\"#\">A link</Hyperlink>}\n    />\n  </ExampleTemplate>\n);\n\n")))}m.isMDXComponent=!0;var p=n(49271),s=function(e){var t=e.title,n=e.description,a=e.isExpanded;return r.createElement(p.Z,{title:t||"Single Action",description:n,example:r.createElement(o.Z,null),exampleSrc:r.createElement(m,null),isExpanded:a})},f=n(89366),_=["components"];function v(){return v=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},v.apply(this,arguments)}function b(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var x={};function g(e){var t=e.components,n=b(e,_);return(0,a.mdx)("wrapper",v({},x,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Button from 'terra-button';\nimport Spacer from 'terra-spacer';\nimport CenteredActionFooter from 'terra-action-footer/lib/CenteredActionFooter';\nimport ExampleTemplate from '../../common/ExampleTemplate';\n\nexport default () => (\n  <ExampleTemplate>\n    <CenteredActionFooter\n      center={(\n        <React.Fragment>\n          <Spacer isInlineBlock marginRight=\"medium\">\n            <Button text=\"Action One\" />\n          </Spacer>\n          <Button text=\"Action Two\" />\n        </React.Fragment>\n      )}\n    />\n  </ExampleTemplate>\n);\n\n")))}g.isMDXComponent=!0;var y=function(e){var t=e.title,n=e.description,a=e.isExpanded;return r.createElement(p.Z,{title:t||"Multiple Actions",description:n,example:r.createElement(f.Z,null),exampleSrc:r.createElement(g,null),isExpanded:a})},E=n(78530),h=["components"];function O(){return O=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},O.apply(this,arguments)}function T(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var j={},w="wrapper";function N(e){var t=e.components,n=T(e,h);return(0,a.mdx)(w,O({},j,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)(E.ZP,{mdxType:"PropsTable"},(0,a.mdx)(E.X2,{key:"ROW1",mdxType:"Row"},(0,a.mdx)(E.O,{mdxType:"PropNameCell"},"center"),(0,a.mdx)(E.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"node\n"))),(0,a.mdx)(E.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(E.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"undefined\n"))),(0,a.mdx)(E.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Actions to be displayed in the center socket")))))}N.isMDXComponent=!0;var C=["components"];function k(){return k=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},k.apply(this,arguments)}function P(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var S={},A="wrapper";function M(e){var t=e.components,n=P(e,C);return(0,a.mdx)(A,k({},S,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)(l.C,{mdxType:"Badge"}),(0,a.mdx)("h1",{id:"terra-centered-action-footer"},"Terra Centered Action Footer"),(0,a.mdx)("p",null,"The centered action footer component is a footer bar that contains a single, centered socket for placing actionable items such as buttons and hyperlinks. If no actions are provided, the footer bar collapses to a themeable height and maintains the top border."),(0,a.mdx)("h2",{id:"usage"},"Usage"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-jsx"},"import CenteredActionFooter from 'terra-action-footer/lib/CenteredActionFooter';\n")),(0,a.mdx)("h2",{id:"examples"},"Examples"),(0,a.mdx)(s,{title:"Single Action",mdxType:"SingleActionExample"}),(0,a.mdx)(y,{title:"Multiple Actions",mdxType:"MultipleActionsExample"}),(0,a.mdx)("h2",{id:"centered-action-footer-props"},"Centered Action Footer Props"),(0,a.mdx)(N,{mdxType:"CenteredActionFooterPropsTable"}))}M.isMDXComponent=!0},64027:function(e,t,n){n.d(t,{C:function(){return l}});var r=n(67294),a=n(22863),l=function(e){var t=e.url;return r.createElement(a.Z,{src:"https://github.com/cerner/terra-core/tree/main/packages/terra-action-footer",name:"terra-action-footer",version:"2.65.0",url:t})}},13006:function(e,t,n){n.r(t),t.default={"content-wrapper":"ExampleTemplate__content-wrapper___SChNL"}},17422:function(e,t,n){n.r(t),t.default={badge:"Badges-module__badge___vex-+","badge-container":"Badges-module__badge-container___B13Mv","badge-name":"Badges-module__badge-name___jkN0m","badge-version":"Badges-module__badge-version___agZ+P"}},53560:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___rBbtD","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___GzA23",template:"ExampleTemplate-module__template___a4uPk",header:"ExampleTemplate-module__header___iFXV3",content:"ExampleTemplate-module__content___48m4Q",description:"ExampleTemplate-module__description___NwBJo",footer:"ExampleTemplate-module__footer___GpSoG","button-container":"ExampleTemplate-module__button-container___rAD11",css:"ExampleTemplate-module__css___+jtk1",code:"ExampleTemplate-module__code___7rC6C","css-toggle":"ExampleTemplate-module__css-toggle___chHK7","code-toggle":"ExampleTemplate-module__code-toggle___TGlE-","is-selected":"ExampleTemplate-module__is-selected___0BYwS",item:"ExampleTemplate-module__item___8FTQq",chevron:"ExampleTemplate-module__chevron___VbY7N",title:"ExampleTemplate-module__title___r+nbJ","dynamic-content":"ExampleTemplate-module__dynamic-content___k+1H7"}},78458:function(e,t,n){n.r(t),t.default={"centered-action-footer":"CenteredActionFooter-module__centered-action-footer___K7wE1"}},31601:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(n(67294)),a=i(n(45697)),l=i(n(47166)),o=i(n(56640)),c=i(n(78458)),u=["center"];function i(e){return e&&e.__esModule?e:{default:e}}function d(){return d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},d.apply(this,arguments)}function m(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=l.default.bind(c.default),s={center:a.default.node},f={center:void 0},_=function(e){var t=e.center,n=m(e,u),a=p(["centered-action-footer",n.className]);return r.default.createElement(o.default,d({},n,{className:a}),t)};_.propTypes=s,_.defaultProps=f;var v=_;t.default=v},33864:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=l(n(67294)),a=l(n(99139));function l(e){return e&&e.__esModule?e:{default:e}}function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}var c=function(e){var t=o({},e);return r.default.createElement(a.default,t,r.default.createElement("path",{d:"M10.3 24L33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};c.displayName="IconChevronLeft",c.defaultProps={className:"",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg","data-name":"Layer 1",isBidi:!0};var u=c;t.default=u}}]);