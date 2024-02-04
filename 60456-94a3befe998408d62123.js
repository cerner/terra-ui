"use strict";(self.webpackChunkterra_ui=self.webpackChunkterra_ui||[]).push([[60456,60588,38208,15824,93444,50112],{28744:function(e,t,n){var r=n(22411),l=n(59848);t.Ke=t.qe=t.uC=t._w=void 0,Object.defineProperty(t,"WA",{enumerable:!0,get:function(){return i.Row}}),t.cp=t.aI=void 0;var a=f(n(11504)),o=r(n(3268)),u=r(n(74824)),d=n(93048),i=f(n(30603)),p=r(n(13948));function c(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(c=function(e){return e?n:t})(e)}function f(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=l(e)&&"function"!=typeof e)return{default:e};var n=c(t);if(n&&n.has(e))return n.get(e);var r={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var u=a?Object.getOwnPropertyDescriptor(e,o):null;u&&(u.get||u.set)?Object.defineProperty(r,o,u):r[o]=e[o]}return r.default=e,n&&n.set(e,r),r}var s=u.default.bind(p.default),m={children:o.default.node},y={isRequired:o.default.bool};(t.qe=function(e){var t=e.children;return a.default.createElement(i.Cell,{className:s("bold")},t)}).propTypes=m,(t.aI=function(e){var t=e.children;return a.default.createElement(i.Cell,{className:s("code-block-override")},t)}).propTypes=m,(t.Ke=function(e){var t=e.isRequired;return a.default.createElement(i.Cell,{className:s([t?["required"]:[]])},t?"required":"optional")}).propTypes=y,(t._w=function(e){var t=e.children;return a.default.createElement(i.Cell,{className:s("code-block-override")},t)}).propTypes=m,(t.uC=function(e){var t=e.children;return a.default.createElement(i.Cell,null,t)}).propTypes=m;var b=function(e){var t=e.children,n=(0,a.useContext)(d.ThemeContext);return a.default.createElement(i.default,{paddingStyle:"compact",className:s("table",n.className)},a.default.createElement(i.Header,{className:s("header")},a.default.createElement(i.HeaderCell,null,"Prop"),a.default.createElement(i.HeaderCell,null,"Type"),a.default.createElement(i.HeaderCell,null,"Required"),a.default.createElement(i.HeaderCell,null,"Default"),a.default.createElement(i.HeaderCell,null,"Description")),a.default.createElement(i.Body,null,t))};b.propTypes=m;t.cp=b},60456:function(e,t,n){n.r(t),n.d(t,{default:function(){return b}});n(11504);var r=n(69788),l=n(28744),a=["components"];function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function u(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var d={},i="wrapper";function p(e){var t=e.components,n=u(e,a);return(0,r.mdx)(i,o({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)(l.cp,{mdxType:"PropsTable"},(0,r.mdx)(l.WA,{key:"ROW1",mdxType:"Row"},(0,r.mdx)(l.qe,{mdxType:"PropNameCell"},"buttonAttrs"),(0,r.mdx)(l.aI,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"arrayOf: [{\n  shape: {\n    0: {\n      type: 'undefined',\n    },\n    1: {\n      type: 'undefined',\n    },\n    2: {\n      type: 'undefined',\n    },\n    3: {\n      type: 'undefined',\n    },\n    4: {\n      type: 'undefined',\n    },\n    5: {\n      type: 'undefined',\n    },\n    6: {\n      type: 'undefined',\n    },\n    7: {\n      type: 'undefined',\n    },\n    8: {\n      type: 'undefined',\n    },\n    9: {\n      type: 'undefined',\n    },\n    10: {\n      type: 'undefined',\n    },\n    11: {\n      type: 'undefined',\n    },\n    12: {\n      type: 'undefined',\n    },\n    13: {\n      type: 'undefined',\n    },\n    14: {\n      type: 'undefined',\n    },\n    15: {\n      type: 'undefined',\n    },\n  },\n}],\n"))),(0,r.mdx)(l.Ke,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(l._w,{mdxType:"DefaultValueCell"},(0,r.mdx)("p",null,"none")),(0,r.mdx)(l.uC,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"An array of objects containing terra-button properties. A key attribute is required for each object.\nThis array is used to render buttons in the bottom section.\nExample:",(0,r.mdx)("inlineCode",{parentName:"p"},"[{ text: 'Refresh Application', key: 1, variant: 'neutral', onClick: myRefreshFunction}]")))),(0,r.mdx)(l.WA,{key:"ROW2",mdxType:"Row"},(0,r.mdx)(l.qe,{mdxType:"PropNameCell"},"message"),(0,r.mdx)(l.aI,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,r.mdx)(l.Ke,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(l._w,{mdxType:"DefaultValueCell"},(0,r.mdx)("p",null,"none")),(0,r.mdx)(l.uC,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"The descriptive text, displayed under the title."))),(0,r.mdx)(l.WA,{key:"ROW3",mdxType:"Row"},(0,r.mdx)(l.qe,{mdxType:"PropNameCell"},"variant"),(0,r.mdx)(l.aI,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"enum: [\n  'no-data'\n  'no-matching-results'\n  'not-authorized'\n  'error'\n],\n"))),(0,r.mdx)(l.Ke,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(l._w,{mdxType:"DefaultValueCell"},(0,r.mdx)("p",null,"none")),(0,r.mdx)(l.uC,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"Sets the glyph and title using a pre-baked variant. One of the following: ",(0,r.mdx)("inlineCode",{parentName:"p"},"no-data"),",\n",(0,r.mdx)("inlineCode",{parentName:"p"},"no-matching-results"),", ",(0,r.mdx)("inlineCode",{parentName:"p"},"not-authorized"),", or ",(0,r.mdx)("inlineCode",{parentName:"p"},"error"))))))}p.isMDXComponent=!0;var c=["components"];function f(){return f=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},f.apply(this,arguments)}function s(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var m={},y="wrapper";function b(e){var t=e.components,n=s(e,c);return(0,r.mdx)(y,f({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"applicationstatusoverlay"},"ApplicationStatusOverlay"),(0,r.mdx)("p",null,"The ApplicationStatusOverlay is used to render a Status View within the application."),(0,r.mdx)("p",null,"When mounted, the ApplicationStatusOverlay will communicate with an ancestor\n",(0,r.mdx)("a",{parentName:"p",href:"/terra-ui/application/terra-application/components/application-status-overlay-provider"},"ApplicationStatusOverlayProvider")," to\npresent a staus view."),(0,r.mdx)("blockquote",null,(0,r.mdx)("p",{parentName:"blockquote"},"See the ",(0,r.mdx)("a",{parentName:"p",href:"/terra-ui/application/terra-application/how-to/show-status-overlays"},"How to Show Status Overlay View")," page for usage information.")),(0,r.mdx)("h2",{id:"usage"},"Usage"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},"import ApplicationStatusOverlay from 'terra-application/lib/application-status-overlay';\n")),(0,r.mdx)("h2",{id:"props"},"Props"),(0,r.mdx)(p,{mdxType:"ApplicationStatusOverlayProps"}))}b.isMDXComponent=!0},13948:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"PropsTable-module__clinical-lowlight-theme___3pa8J","orion-fusion-theme":"PropsTable-module__orion-fusion-theme___FtP5r",bold:"PropsTable-module__bold___-z9Sz",table:"PropsTable-module__table___rzW-v",required:"PropsTable-module__required___ev190","code-block-override":"PropsTable-module__code-block-override___fF0JK"}},62008:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"Table-module__clinical-lowlight-theme___PqYJ8","orion-fusion-theme":"Table-module__orion-fusion-theme___d9rxf",table:"Table-module__table___eg2Mi","padding-standard":"Table-module__padding-standard___BfbC-","padding-compact":"Table-module__padding-compact___Yus6Z",striped:"Table-module__striped___n8xJe"}},29988:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=p(n(11504)),l=p(n(3268)),a=p(n(82084)),o=p(n(74824)),u=p(n(99640)),d=p(n(62008)),i=["children","disableStripes","paddingStyle"];function p(e){return e&&e.__esModule?e:{default:e}}function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c.apply(this,arguments)}function f(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=o.default.bind(d.default),m={children:l.default.node.isRequired,disableStripes:l.default.bool,paddingStyle:l.default.oneOf(["none","standard","compact"])},y=function(e){var t=e.children,n=e.disableStripes,l=e.paddingStyle,o=f(e,i),d=r.default.useContext(u.default),p=(0,a.default)(s("table",{striped:!n},{"padding-standard":"standard"===l},{"padding-compact":"compact"===l},d.className),o.className);return r.default.createElement("table",c({},o,{className:p}),t)};y.propTypes=m,y.defaultProps={disableStripes:!1,paddingStyle:"none"};t.default=y},71352:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(n(11504)),l=o(n(3268)),a=["children"];function o(e){return e&&e.__esModule?e:{default:e}}function u(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var d={children:l.default.node},i=function(e){var t=e.children,n=u(e,a);return r.default.createElement("tbody",n,t)};i.propTypes=d,i.defaultProps={children:[]};t.default=i},1320:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(n(11504)),l=o(n(3268)),a=["children"];function o(e){return e&&e.__esModule?e:{default:e}}function u(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var d={children:l.default.node},i=function(e){var t=e.children,n=u(e,a);return r.default.createElement("td",n,t)};i.propTypes=d,i.defaultProps={children:[]};t.default=i},22224:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=u(n(11504)),l=u(n(3268)),a=u(n(52684)),o=["children"];function u(e){return e&&e.__esModule?e:{default:e}}function d(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var i={children:l.default.node},p=function(e){var t=e.children,n=d(e,o);return r.default.createElement("thead",n,r.default.createElement("tr",null,a.default.addScope(t,"col")))};p.propTypes=i,p.defaultProps={children:[]};t.default=p},5908:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(n(11504)),l=o(n(3268)),a=["children"];function o(e){return e&&e.__esModule?e:{default:e}}function u(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var d={children:l.default.node},i=function(e){var t=e.children,n=u(e,a);return r.default.createElement("th",n,t)};i.propTypes=d,i.defaultProps={children:[]};t.default=i},74780:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(n(11504)),l=i(n(3268)),a=i(n(74824)),o=i(n(62008)),u=i(n(52684)),d=["children"];function i(e){return e&&e.__esModule?e:{default:e}}function p(){return p=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},p.apply(this,arguments)}function c(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var f=a.default.bind(o.default),s={children:l.default.node},m=function(e){var t=e.children,n=c(e,d),l=f(["row"]);return r.default.createElement("tr",p({},n,{className:n.className?"".concat(l," ").concat(n.className):l}),u.default.addScope(t,"row"))};m.propTypes=s,m.defaultProps={children:[]};t.default=m},52684:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,l=(r=n(11504))&&r.__esModule?r:{default:r};var a={addScope:function(e,t){var n=[];return l.default.Children.forEach(e,(function(e){n.push(l.default.cloneElement(e,{scope:"TableHeaderCell"===e.type.name?t:void 0}))})),n}};t.default=a},30603:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Body",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(t,"Cell",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"Header",{enumerable:!0,get:function(){return u.default}}),Object.defineProperty(t,"HeaderCell",{enumerable:!0,get:function(){return d.default}}),Object.defineProperty(t,"Row",{enumerable:!0,get:function(){return a.default}}),t.default=void 0;var r=i(n(29988)),l=i(n(71352)),a=i(n(74780)),o=i(n(1320)),u=i(n(22224)),d=i(n(5908));function i(e){return e&&e.__esModule?e:{default:e}}t.default=r.default}}]);