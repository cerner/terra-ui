"use strict";(self.webpackChunkterra_ui=self.webpackChunkterra_ui||[]).push([[61916,45627,37344,33667,96890,14041,27444,85565,3353,80858,17657,5161,45865,85355,3193,33315,4845,20444,26806,46647,85161,38681,17763,15318,40411,18101,38443,78996,39915,33442],{47853:function(e,a,n){a.Z=void 0;var l=m(n(67294)),t=m(n(55281)),r=m(n(7017));function m(e){return e&&e.__esModule?e:{default:e}}n(79912);var d=function(){return l.default.createElement("div",null,l.default.createElement(r.default,{className:"spacerdemodefault",paddingTop:"large+4",paddingBottom:"large+4",paddingLeft:"large+4",paddingRight:"large+4",isInlineBlock:!0},l.default.createElement(t.default,{text:"Default"})),l.default.createElement(r.default,{className:"spacerdemoprimary",paddingTop:"large+2",paddingBottom:"large+2",paddingLeft:"large+2",paddingRight:"large+2",isInlineBlock:!0},l.default.createElement(t.default,{text:"Emphasis",variant:"emphasis"})))};a.Z=d},25655:function(e,a,n){a.Z=void 0;var l=m(n(67294)),t=m(n(55281)),r=m(n(7017));function m(e){return e&&e.__esModule?e:{default:e}}n(79912);var d=function(){return l.default.createElement("div",null,l.default.createElement(r.default,{className:"spacerdemoprimary",padding:"large small",margin:"medium large+1",isInlineBlock:!0},l.default.createElement(t.default,{text:"Shorthand"})),l.default.createElement(r.default,{className:"spacerdemodefault",paddingTop:"large",paddingBottom:"large",paddingLeft:"small",paddingRight:"small",marginTop:"medium",marginBottom:"medium",marginLeft:"large+1",marginRight:"large+1",isInlineBlock:!0},l.default.createElement(t.default,{text:"Longhand"})))};a.Z=d},22863:function(e,a,n){var l=n(64836);a.Z=void 0;var t=l(n(67294)),r=l(n(45697)),m=l(n(47166)),d=l(n(17422)),p=m.default.bind(d.default),o={name:r.default.string.isRequired,src:r.default.string,url:r.default.string,version:r.default.string.isRequired},i=function(e){var a=e.src,n=e.name,l=e.url,r=e.version,m=t.default.createElement("a",{className:p("badge"),href:l||"https://www.npmjs.org/package/".concat(n,"/v/").concat(r)},t.default.createElement("span",{className:p("badge-name")},l?"package":"npm"),t.default.createElement("span",{className:p("badge-version")},"v".concat(r))),d=a?t.default.createElement("a",{className:p("badge"),href:a},t.default.createElement("span",{className:p("badge-name")},"github"),t.default.createElement("span",{className:p("badge-version")},"source")):void 0;return t.default.createElement("div",{className:p("badge-container")},m,d)};i.propTypes=o;var s=i;a.Z=s},49271:function(e,a,n){var l=n(64836),t=n(18698);a.Z=void 0;var r=l(n(27424)),m=function(e,a){if(!a&&e&&e.__esModule)return e;if(null===e||"object"!==t(e)&&"function"!=typeof e)return{default:e};var n=g(a);if(n&&n.has(e))return n.get(e);var l={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var m in e)if("default"!==m&&Object.prototype.hasOwnProperty.call(e,m)){var d=r?Object.getOwnPropertyDescriptor(e,m):null;d&&(d.get||d.set)?Object.defineProperty(l,m,d):l[m]=e[m]}l.default=e,n&&n.set(e,l);return l}(n(67294)),d=l(n(45697)),p=l(n(47166)),o=n(21538),i=l(n(33864)),s=l(n(23399)),u=n(51051),c=l(n(53560));function g(e){if("function"!=typeof WeakMap)return null;var a=new WeakMap,n=new WeakMap;return(g=function(e){return e?n:a})(e)}var x=p.default.bind(c.default),f={example:d.default.element,exampleSrc:d.default.element,exampleCssSrc:d.default.element,title:d.default.string,description:d.default.node,isExpanded:d.default.bool},y=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},N=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},v=function(e){var a=e.example,n=e.exampleSrc,l=e.exampleCssSrc,t=e.title,d=e.description,p=e.isExpanded,c=(0,m.useState)(p),g=(0,r.default)(c,2),f=g[0],v=g[1],b=(0,m.useState)(!1),T=(0,r.default)(b,2),h=T[0],_=T[1],S=m.default.useContext(o.ThemeContext),O=void 0!==l,E=function(){_(!h),f&&v(!f)},C=function(){v(!f),h&&_(!h)},j=function(e,a){e.nativeEvent.keyCode!==u.KEY_SPACE&&e.nativeEvent.keyCode!==u.KEY_RETURN||(e.preventDefault(),a())};return m.default.createElement("div",{className:x("template",S.className)},m.default.createElement("div",{className:x("header")},t&&m.default.createElement("h2",{className:x("title")},t)),m.default.createElement("div",{className:x("content")},d&&m.default.createElement("div",{className:x("description")},d),a),m.default.createElement("div",{className:x("footer")},n?m.default.createElement("div",{className:x("button-container")},O&&m.default.createElement("button",{type:"button",className:x("css-toggle","item",{"is-selected":h}),onClick:E,onKeyDown:function(e){return j(e,E)},onBlur:y,onMouseDown:N,tabIndex:0,"data-focus-styles-enabled":!0},m.default.createElement(i.default,{className:x("chevron")}),m.default.createElement("span",null,"CSS"),m.default.createElement(s.default,{className:x("chevron")})),m.default.createElement("button",{type:"button",className:x("code-toggle","item",{"is-selected":f}),onClick:C,onKeyDown:function(e){return j(e,C)},onBlur:y,onMouseDown:N,tabIndex:0,"data-focus-styles-enabled":!0},m.default.createElement(i.default,{className:x("chevron")}),m.default.createElement("span",null,"Code"),m.default.createElement(s.default,{className:x("chevron")}))):null,m.default.createElement("div",null,h&&m.default.createElement("div",{className:x("css")},l),f&&m.default.createElement("div",{className:x("code")},n))))};v.propTypes=f,v.defaultProps={isExpanded:!1};var b=v;a.Z=b},74216:function(e,a,n){n.r(a),n.d(a,{default:function(){return M}});var l=n(67294),t=n(81254),r=n(34703),m=n(47853),d=["components"];function p(){return p=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var n=arguments[a];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},p.apply(this,arguments)}function o(e,a){if(null==e)return{};var n,l,t=function(e,a){if(null==e)return{};var n,l,t={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],a.indexOf(n)>=0||(t[n]=e[n]);return t}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var i={};function s(e){var a=e.components,n=o(e,d);return(0,t.mdx)("wrapper",p({},i,n,{components:a,mdxType:"MDXLayout"}),(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre",className:"language-jsx"},'import React from \'react\';\nimport Button from \'terra-button\';\nimport Spacer from \'terra-spacer\';\nimport \'./Spacer.module.scss\';\n\nconst SpacerExample = () => (\n  <div>\n    <Spacer className="spacerdemodefault" paddingTop="large+4" paddingBottom="large+4" paddingLeft="large+4" paddingRight="large+4" isInlineBlock>\n      <Button text="Default" />\n    </Spacer>\n    <Spacer className="spacerdemoprimary" paddingTop="large+2" paddingBottom="large+2" paddingLeft="large+2" paddingRight="large+2" isInlineBlock>\n      <Button text="Emphasis" variant="emphasis" />\n    </Spacer>\n  </div>\n);\n\nexport default SpacerExample;\n\n')))}s.isMDXComponent=!0;var u=n(49271),c=["components"];function g(){return g=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var n=arguments[a];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},g.apply(this,arguments)}function x(e,a){if(null==e)return{};var n,l,t=function(e,a){if(null==e)return{};var n,l,t={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],a.indexOf(n)>=0||(t[n]=e[n]);return t}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var f={};function y(e){var a=e.components,n=x(e,c);return(0,t.mdx)("wrapper",g({},f,n,{components:a,mdxType:"MDXLayout"}),(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre",className:"language-scss"},".spacerdemodefault {\n  background: rgb(195, 207, 142);\n}\n\n.spacerdemoprimary {\n  background: rgb(100, 207, 142);\n}\n\n")))}y.isMDXComponent=!0;var N=function(e){var a=e.title,n=e.description,t=e.isExpanded;return l.createElement(u.Z,{title:a||"Spacer Example",description:n,example:l.createElement(m.Z,null),exampleCssSrc:l.createElement(y,null),exampleSrc:l.createElement(s,null),isExpanded:t})},v=n(25655),b=["components"];function T(){return T=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var n=arguments[a];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},T.apply(this,arguments)}function h(e,a){if(null==e)return{};var n,l,t=function(e,a){if(null==e)return{};var n,l,t={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],a.indexOf(n)>=0||(t[n]=e[n]);return t}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var _={};function S(e){var a=e.components,n=h(e,b);return(0,t.mdx)("wrapper",T({},_,n,{components:a,mdxType:"MDXLayout"}),(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre",className:"language-jsx"},'import React from \'react\';\nimport Button from \'terra-button\';\nimport Spacer from \'terra-spacer\';\nimport \'./Spacer.module.scss\';\n\nconst SpacerShortVsLongHandExample = () => (\n  <div>\n    <Spacer className="spacerdemoprimary" padding="large small" margin="medium large+1" isInlineBlock>\n      <Button text="Shorthand" />\n    </Spacer>\n    <Spacer className="spacerdemodefault" paddingTop="large" paddingBottom="large" paddingLeft="small" paddingRight="small" marginTop="medium" marginBottom="medium" marginLeft="large+1" marginRight="large+1" isInlineBlock>\n      <Button text="Longhand" />\n    </Spacer>\n  </div>\n);\n\nexport default SpacerShortVsLongHandExample;\n\n')))}S.isMDXComponent=!0;var O=function(e){var a=e.title,n=e.description,t=e.isExpanded;return l.createElement(u.Z,{title:a||"Spacer Short Vs Long Hand Example",description:n,example:l.createElement(v.Z,null),exampleCssSrc:l.createElement(y,null),exampleSrc:l.createElement(S,null),isExpanded:t})},E=n(78530),C=["components"];function j(){return j=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var n=arguments[a];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},j.apply(this,arguments)}function w(e,a){if(null==e)return{};var n,l,t=function(e,a){if(null==e)return{};var n,l,t={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],a.indexOf(n)>=0||(t[n]=e[n]);return t}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var R={},D="wrapper";function k(e){var a=e.components,n=w(e,C);return(0,t.mdx)(D,j({},R,n,{components:a,mdxType:"MDXLayout"}),(0,t.mdx)(E.ZP,{mdxType:"PropsTable"},(0,t.mdx)(E.X2,{key:"ROW1",mdxType:"Row"},(0,t.mdx)(E.O,{mdxType:"PropNameCell"},"children"),(0,t.mdx)(E.Di,{mdxType:"TypeCell"},(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre",className:"language-javascript"},"node\n"))),(0,t.mdx)(E.dS,{isRequired:!0,mdxType:"RequiredCell"}),(0,t.mdx)(E.mW,{mdxType:"DefaultValueCell"},(0,t.mdx)("p",null,"none")),(0,t.mdx)(E.Ex,{mdxType:"DescriptionCell"},(0,t.mdx)("p",null,"Child Nodes."))),(0,t.mdx)(E.X2,{key:"ROW2",mdxType:"Row"},(0,t.mdx)(E.O,{mdxType:"PropNameCell"},"margin"),(0,t.mdx)(E.Di,{mdxType:"TypeCell"},(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre",className:"language-javascript"},"custom\n"))),(0,t.mdx)(E.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,t.mdx)(E.mW,{mdxType:"DefaultValueCell"},(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre",className:"language-javascript"},"undefined\n"))),(0,t.mdx)(E.Ex,{mdxType:"DescriptionCell"},(0,t.mdx)("p",null,"Sets margin in a syntax similar to the standard CSS spec ",(0,t.mdx)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/margin"},"https://developer.mozilla.org/en-US/docs/Web/CSS/margin"),". One of 'none', 'small-2', 'small-1', 'small', 'medium', 'large', 'large+1', 'large+2', 'large+3', 'large+4'."))),(0,t.mdx)(E.X2,{key:"ROW3",mdxType:"Row"},(0,t.mdx)(E.O,{mdxType:"PropNameCell"},"marginTop"),(0,t.mdx)(E.Di,{mdxType:"TypeCell"},(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre",className:"language-javascript"},"enum: [\n  'none'\n  'small-2'\n  'small-1'\n  'small'\n  'medium'\n  'large'\n  'large+1'\n  'large+2'\n  'large+3'\n  'large+4'\n],\n"))),(0,t.mdx)(E.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,t.mdx)(E.mW,{mdxType:"DefaultValueCell"},(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre",className:"language-javascript"},"SpacerSizes.NONE\n"))),(0,t.mdx)(E.Ex,{mdxType:"DescriptionCell"},(0,t.mdx)("p",null,"Sets top margin. One of 'none', 'small-2', 'small-1', 'small', 'medium', 'large', 'large+1', 'large+2', 'large+3', 'large+4'."))),(0,t.mdx)(E.X2,{key:"ROW4",mdxType:"Row"},(0,t.mdx)(E.O,{mdxType:"PropNameCell"},"marginBottom"),(0,t.mdx)(E.Di,{mdxType:"TypeCell"},(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre",className:"language-javascript"},"enum: [\n  'none'\n  'small-2'\n  'small-1'\n  'small'\n  'medium'\n  'large'\n  'large+1'\n  'large+2'\n  'large+3'\n  'large+4'\n],\n"))),(0,t.mdx)(E.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,t.mdx)(E.mW,{mdxType:"DefaultValueCell"},(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre",className:"language-javascript"},"SpacerSizes.NONE\n"))),(0,t.mdx)(E.Ex,{mdxType:"DescriptionCell"},(0,t.mdx)("p",null,"Sets bottom margin. One of 'none', 'small-2', 'small-1', 'small', 'medium', 'large', 'large+1', 'large+2', 'large+3', 'large+4'."))),(0,t.mdx)(E.X2,{key:"ROW5",mdxType:"Row"},(0,t.mdx)(E.O,{mdxType:"PropNameCell"},"marginLeft"),(0,t.mdx)(E.Di,{mdxType:"TypeCell"},(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre",className:"language-javascript"},"enum: [\n  'none'\n  'small-2'\n  'small-1'\n  'small'\n  'medium'\n  'large'\n  'large+1'\n  'large+2'\n  'large+3'\n  'large+4'\n],\n"))),(0,t.mdx)(E.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,t.mdx)(E.mW,{mdxType:"DefaultValueCell"},(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre",className:"language-javascript"},"SpacerSizes.NONE\n"))),(0,t.mdx)(E.Ex,{mdxType:"DescriptionCell"},(0,t.mdx)("p",null,"Sets left margin One of 'none', 'small-2', 'small-1', 'small', 'medium', 'large', 'large+1', 'large+2', 'large+3', 'large+4'."))),(0,t.mdx)(E.X2,{key:"ROW6",mdxType:"Row"},(0,t.mdx)(E.O,{mdxType:"PropNameCell"},"marginRight"),(0,t.mdx)(E.Di,{mdxType:"TypeCell"},(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre",className:"language-javascript"},"enum: [\n  'none'\n  'small-2'\n  'small-1'\n  'small'\n  'medium'\n  'large'\n  'large+1'\n  'large+2'\n  'large+3'\n  'large+4'\n],\n"))),(0,t.mdx)(E.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,t.mdx)(E.mW,{mdxType:"DefaultValueCell"},(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre",className:"language-javascript"},"SpacerSizes.NONE\n"))),(0,t.mdx)(E.Ex,{mdxType:"DescriptionCell"},(0,t.mdx)("p",null,"Sets right margin. One of 'none', 'small-2', 'small-1', 'small', 'medium', 'large', 'large+1', 'large+2', 'large+3', 'large+4'."))),(0,t.mdx)(E.X2,{key:"ROW7",mdxType:"Row"},(0,t.mdx)(E.O,{mdxType:"PropNameCell"},"padding"),(0,t.mdx)(E.Di,{mdxType:"TypeCell"},(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre",className:"language-javascript"},"custom\n"))),(0,t.mdx)(E.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,t.mdx)(E.mW,{mdxType:"DefaultValueCell"},(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre",className:"language-javascript"},"undefined\n"))),(0,t.mdx)(E.Ex,{mdxType:"DescriptionCell"},(0,t.mdx)("p",null,"Sets padding in a syntax similar to the standard CSS spec ",(0,t.mdx)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/padding"},"https://developer.mozilla.org/en-US/docs/Web/CSS/padding"),". One of 'none', 'small-2', 'small-1', 'small', 'medium', 'large', 'large+1', 'large+2', 'large+3', 'large+4'."))),(0,t.mdx)(E.X2,{key:"ROW8",mdxType:"Row"},(0,t.mdx)(E.O,{mdxType:"PropNameCell"},"paddingTop"),(0,t.mdx)(E.Di,{mdxType:"TypeCell"},(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre",className:"language-javascript"},"enum: [\n  'none'\n  'small-2'\n  'small-1'\n  'small'\n  'medium'\n  'large'\n  'large+1'\n  'large+2'\n  'large+3'\n  'large+4'\n],\n"))),(0,t.mdx)(E.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,t.mdx)(E.mW,{mdxType:"DefaultValueCell"},(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre",className:"language-javascript"},"SpacerSizes.NONE\n"))),(0,t.mdx)(E.Ex,{mdxType:"DescriptionCell"},(0,t.mdx)("p",null,"Sets top padding. One of 'none', 'small-2', 'small-1', 'small', 'medium', 'large', 'large+1', 'large+2', 'large+3', 'large+4'."))),(0,t.mdx)(E.X2,{key:"ROW9",mdxType:"Row"},(0,t.mdx)(E.O,{mdxType:"PropNameCell"},"paddingBottom"),(0,t.mdx)(E.Di,{mdxType:"TypeCell"},(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre",className:"language-javascript"},"enum: [\n  'none'\n  'small-2'\n  'small-1'\n  'small'\n  'medium'\n  'large'\n  'large+1'\n  'large+2'\n  'large+3'\n  'large+4'\n],\n"))),(0,t.mdx)(E.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,t.mdx)(E.mW,{mdxType:"DefaultValueCell"},(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre",className:"language-javascript"},"SpacerSizes.NONE\n"))),(0,t.mdx)(E.Ex,{mdxType:"DescriptionCell"},(0,t.mdx)("p",null,"Sets bottom padding. One of 'none', 'small-2', 'small-1', 'small', 'medium', 'large', 'large+1', 'large+2', 'large+3', 'large+4'."))),(0,t.mdx)(E.X2,{key:"ROW10",mdxType:"Row"},(0,t.mdx)(E.O,{mdxType:"PropNameCell"},"paddingLeft"),(0,t.mdx)(E.Di,{mdxType:"TypeCell"},(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre",className:"language-javascript"},"enum: [\n  'none'\n  'small-2'\n  'small-1'\n  'small'\n  'medium'\n  'large'\n  'large+1'\n  'large+2'\n  'large+3'\n  'large+4'\n],\n"))),(0,t.mdx)(E.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,t.mdx)(E.mW,{mdxType:"DefaultValueCell"},(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre",className:"language-javascript"},"SpacerSizes.NONE\n"))),(0,t.mdx)(E.Ex,{mdxType:"DescriptionCell"},(0,t.mdx)("p",null,"Sets left padding. One of 'none', 'small-2', 'small-1', 'small', 'medium', 'large', 'large+1', 'large+2', 'large+3', 'large+4'."))),(0,t.mdx)(E.X2,{key:"ROW11",mdxType:"Row"},(0,t.mdx)(E.O,{mdxType:"PropNameCell"},"paddingRight"),(0,t.mdx)(E.Di,{mdxType:"TypeCell"},(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre",className:"language-javascript"},"enum: [\n  'none'\n  'small-2'\n  'small-1'\n  'small'\n  'medium'\n  'large'\n  'large+1'\n  'large+2'\n  'large+3'\n  'large+4'\n],\n"))),(0,t.mdx)(E.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,t.mdx)(E.mW,{mdxType:"DefaultValueCell"},(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre",className:"language-javascript"},"SpacerSizes.NONE\n"))),(0,t.mdx)(E.Ex,{mdxType:"DescriptionCell"},(0,t.mdx)("p",null,"Sets right padding. One of 'none', 'small-2', 'small-1', 'small', 'medium', 'large', 'large+1', 'large+2', 'large+3', 'large+4'."))),(0,t.mdx)(E.X2,{key:"ROW12",mdxType:"Row"},(0,t.mdx)(E.O,{mdxType:"PropNameCell"},"isInlineBlock"),(0,t.mdx)(E.Di,{mdxType:"TypeCell"},(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,t.mdx)(E.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,t.mdx)(E.mW,{mdxType:"DefaultValueCell"},(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre",className:"language-javascript"},"false\n"))),(0,t.mdx)(E.Ex,{mdxType:"DescriptionCell"},(0,t.mdx)("p",null,"Sets the display to be inline-block.")))))}k.isMDXComponent=!0;var P=["components"];function B(){return B=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var n=arguments[a];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},B.apply(this,arguments)}function W(e,a){if(null==e)return{};var n,l,t=function(e,a){if(null==e)return{};var n,l,t={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],a.indexOf(n)>=0||(t[n]=e[n]);return t}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var q={},L="wrapper";function M(e){var a=e.components,n=W(e,P);return(0,t.mdx)(L,B({},q,n,{components:a,mdxType:"MDXLayout"}),(0,t.mdx)(r.C,{mdxType:"Badge"}),(0,t.mdx)("h1",{id:"terra-spacer"},"Terra Spacer"),(0,t.mdx)("p",null,"This component is used to provide margin and/or padding space between two components based on the given values."),(0,t.mdx)("h2",{id:"getting-started"},"Getting Started"),(0,t.mdx)("ul",null,(0,t.mdx)("li",{parentName:"ul"},"Install with ",(0,t.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",(0,t.mdx)("ul",{parentName:"li"},(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("inlineCode",{parentName:"li"},"npm install terra-spacer"))))),(0,t.mdx)("h2",{id:"peer-dependencies"},"Peer Dependencies"),(0,t.mdx)("p",null,"This component requires the following peer dependencies be installed in your app for the component to properly function."),(0,t.mdx)("table",null,(0,t.mdx)("thead",{parentName:"table"},(0,t.mdx)("tr",{parentName:"thead"},(0,t.mdx)("th",{parentName:"tr",align:null},"Peer Dependency"),(0,t.mdx)("th",{parentName:"tr",align:null},"Version"))),(0,t.mdx)("tbody",{parentName:"table"},(0,t.mdx)("tr",{parentName:"tbody"},(0,t.mdx)("td",{parentName:"tr",align:null},"react"),(0,t.mdx)("td",{parentName:"tr",align:null},"^16.8.5")),(0,t.mdx)("tr",{parentName:"tbody"},(0,t.mdx)("td",{parentName:"tr",align:null},"react-dom"),(0,t.mdx)("td",{parentName:"tr",align:null},"^16.8.5")))),(0,t.mdx)("h2",{id:"naming-convention"},"Naming Convention"),(0,t.mdx)("table",null,(0,t.mdx)("thead",{parentName:"table"},(0,t.mdx)("tr",{parentName:"thead"},(0,t.mdx)("th",{parentName:"tr",align:null},"Spacing scale values"),(0,t.mdx)("th",{parentName:"tr",align:null},"Computed REM Value"))),(0,t.mdx)("tbody",{parentName:"table"},(0,t.mdx)("tr",{parentName:"tbody"},(0,t.mdx)("td",{parentName:"tr",align:null},"none"),(0,t.mdx)("td",{parentName:"tr",align:null},"0")),(0,t.mdx)("tr",{parentName:"tbody"},(0,t.mdx)("td",{parentName:"tr",align:null},"small-2"),(0,t.mdx)("td",{parentName:"tr",align:null},"0.2142857143rem")),(0,t.mdx)("tr",{parentName:"tbody"},(0,t.mdx)("td",{parentName:"tr",align:null},"small-1"),(0,t.mdx)("td",{parentName:"tr",align:null},"0.3571428571rem")),(0,t.mdx)("tr",{parentName:"tbody"},(0,t.mdx)("td",{parentName:"tr",align:null},"small"),(0,t.mdx)("td",{parentName:"tr",align:null},"0.5rem")),(0,t.mdx)("tr",{parentName:"tbody"},(0,t.mdx)("td",{parentName:"tr",align:null},"medium"),(0,t.mdx)("td",{parentName:"tr",align:null},"0.7142857143rem")),(0,t.mdx)("tr",{parentName:"tbody"},(0,t.mdx)("td",{parentName:"tr",align:null},"large"),(0,t.mdx)("td",{parentName:"tr",align:null},"0.8571428571rem")),(0,t.mdx)("tr",{parentName:"tbody"},(0,t.mdx)("td",{parentName:"tr",align:null},"large+1"),(0,t.mdx)("td",{parentName:"tr",align:null},"1.0714285714rem")),(0,t.mdx)("tr",{parentName:"tbody"},(0,t.mdx)("td",{parentName:"tr",align:null},"large+2"),(0,t.mdx)("td",{parentName:"tr",align:null},"1.4285714286rem")),(0,t.mdx)("tr",{parentName:"tbody"},(0,t.mdx)("td",{parentName:"tr",align:null},"large+3"),(0,t.mdx)("td",{parentName:"tr",align:null},"2.1428571429rem")),(0,t.mdx)("tr",{parentName:"tbody"},(0,t.mdx)("td",{parentName:"tr",align:null},"large+4"),(0,t.mdx)("td",{parentName:"tr",align:null},"3.5714285714rem")))),(0,t.mdx)("h2",{id:"usage"},"Usage"),(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre",className:"language-jsx"},"import Spacer from 'terra-spacer';\n")),(0,t.mdx)("h2",{id:"component-features"},"Component Features"),(0,t.mdx)("ul",null,(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#cross-browser-support"},"Cross-Browser Support")),(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#ltr--rtl"},"LTR/RTL Support"))),(0,t.mdx)("h2",{id:"examples"},"Examples"),(0,t.mdx)(N,{title:"Spacer",description:"Spacing default button with a padding value of large+4 and primary button with padding value of large+2",mdxType:"Spacer"}),(0,t.mdx)(O,{title:"Spacer Short Vs Long Hand",mdxType:"SpacerShortVsLongHand"}),(0,t.mdx)("h2",{id:"spacer-props"},"Spacer Props"),(0,t.mdx)(k,{mdxType:"SpacerPropsTable"}))}M.isMDXComponent=!0},34703:function(e,a,n){n.d(a,{C:function(){return r}});var l=n(67294),t=n(22863),r=function(e){var a=e.url;return l.createElement(t.Z,{src:"https://github.com/cerner/terra-core/tree/main/packages/terra-spacer",name:"terra-spacer",version:"3.61.0",url:a})}},79912:function(e,a,n){n.r(a),a.default={}},17422:function(e,a,n){n.r(a),a.default={badge:"Badges-module__badge___vex-+","badge-container":"Badges-module__badge-container___B13Mv","badge-name":"Badges-module__badge-name___jkN0m","badge-version":"Badges-module__badge-version___agZ+P"}},53560:function(e,a,n){n.r(a),a.default={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___rBbtD","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___GzA23",template:"ExampleTemplate-module__template___a4uPk",header:"ExampleTemplate-module__header___iFXV3",content:"ExampleTemplate-module__content___48m4Q",description:"ExampleTemplate-module__description___NwBJo",footer:"ExampleTemplate-module__footer___GpSoG","button-container":"ExampleTemplate-module__button-container___rAD11",css:"ExampleTemplate-module__css___+jtk1",code:"ExampleTemplate-module__code___7rC6C","css-toggle":"ExampleTemplate-module__css-toggle___chHK7","code-toggle":"ExampleTemplate-module__code-toggle___TGlE-","is-selected":"ExampleTemplate-module__is-selected___0BYwS",item:"ExampleTemplate-module__item___8FTQq",chevron:"ExampleTemplate-module__chevron___VbY7N",title:"ExampleTemplate-module__title___r+nbJ","dynamic-content":"ExampleTemplate-module__dynamic-content___k+1H7"}},33864:function(e,a,n){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var l=r(n(67294)),t=r(n(99139));function r(e){return e&&e.__esModule?e:{default:e}}function m(){return m=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var n=arguments[a];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},m.apply(this,arguments)}var d=function(e){var a=m({},e);return l.default.createElement(t.default,a,l.default.createElement("path",{d:"M10.3 24 33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};d.displayName="IconChevronLeft",d.defaultProps={viewBox:"0 0 48 48","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg"};var p=d;a.default=p}}]);