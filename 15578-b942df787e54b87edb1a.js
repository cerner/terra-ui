"use strict";(self.webpackChunkterra_ui=self.webpackChunkterra_ui||[]).push([[15578,78996,39915,33442,50062,78562],{78530:function(e,t,r){var n=r(64836),l=r(18698);t.dS=t.O=t.Ex=t.mW=void 0,Object.defineProperty(t,"X2",{enumerable:!0,get:function(){return i.Row}}),t.ZP=t.Di=void 0;var a=m(r(67294)),o=n(r(45697)),d=n(r(19845)),u=r(21538),i=m(r(98364)),p=n(r(54931));function c(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(c=function(e){return e?r:t})(e)}function m(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=l(e)&&"function"!=typeof e)return{default:e};var r=c(t);if(r&&r.has(e))return r.get(e);var n={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var d=a?Object.getOwnPropertyDescriptor(e,o):null;d&&(d.get||d.set)?Object.defineProperty(n,o,d):n[o]=e[o]}return n.default=e,r&&r.set(e,n),n}var s=d.default.bind(p.default),f={children:o.default.node},y={isRequired:o.default.bool};(t.O=function(e){var t=e.children;return a.default.createElement(i.Cell,{className:s("bold")},t)}).propTypes=f,(t.Di=function(e){var t=e.children;return a.default.createElement(i.Cell,{className:s("code-block-override")},t)}).propTypes=f,(t.dS=function(e){var t=e.isRequired;return a.default.createElement(i.Cell,{className:s([t?["required"]:[]])},t?"required":"optional")}).propTypes=y,(t.mW=function(e){var t=e.children;return a.default.createElement(i.Cell,{className:s("code-block-override")},t)}).propTypes=f,(t.Ex=function(e){var t=e.children;return a.default.createElement(i.Cell,null,t)}).propTypes=f;var b=function(e){var t=e.children,r=(0,a.useContext)(u.ThemeContext);return a.default.createElement(i.default,{paddingStyle:"compact",className:s("table",r.className)},a.default.createElement(i.Header,{className:s("header")},a.default.createElement(i.HeaderCell,null,"Prop"),a.default.createElement(i.HeaderCell,null,"Type"),a.default.createElement(i.HeaderCell,null,"Required"),a.default.createElement(i.HeaderCell,null,"Default"),a.default.createElement(i.HeaderCell,null,"Description")),a.default.createElement(i.Body,null,t))};b.propTypes=f;t.ZP=b},12950:function(e,t,r){r.r(t),r.d(t,{default:function(){return h}});r(67294);var n=r(81254),l=r(31400),a=r(56305),o=r(81715),d=r(78530),u=["components"];function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},i.apply(this,arguments)}function p(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var c={},m="wrapper";function s(e){var t=e.components,r=p(e,u);return(0,n.mdx)(m,i({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.mdx)(d.ZP,{mdxType:"PropsTable"},(0,n.mdx)(d.X2,{key:"ROW1",mdxType:"Row"},(0,n.mdx)(d.O,{mdxType:"PropNameCell"},"onPageChange"),(0,n.mdx)(d.Di,{mdxType:"TypeCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"func\n"))),(0,n.mdx)(d.dS,{isRequired:!0,mdxType:"RequiredCell"}),(0,n.mdx)(d.mW,{mdxType:"DefaultValueCell"},(0,n.mdx)("p",null,"none")),(0,n.mdx)(d.Ex,{mdxType:"DescriptionCell"},(0,n.mdx)("p",null,"Function to be executed when a navigation element is selected."))),(0,n.mdx)(d.X2,{key:"ROW2",mdxType:"Row"},(0,n.mdx)(d.O,{mdxType:"PropNameCell"},"selectedPage"),(0,n.mdx)(d.Di,{mdxType:"TypeCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"number\n"))),(0,n.mdx)(d.dS,{isRequired:!0,mdxType:"RequiredCell"}),(0,n.mdx)(d.mW,{mdxType:"DefaultValueCell"},(0,n.mdx)("p",null,"none")),(0,n.mdx)(d.Ex,{mdxType:"DescriptionCell"},(0,n.mdx)("p",null,"The active/selected page. Used to set the default selected page or maintain selection across renders.\nRequired when using totalCount and itemCountPerPage."))),(0,n.mdx)(d.X2,{key:"ROW3",mdxType:"Row"},(0,n.mdx)(d.O,{mdxType:"PropNameCell"},"totalCount"),(0,n.mdx)(d.Di,{mdxType:"TypeCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"number\n"))),(0,n.mdx)(d.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,n.mdx)(d.mW,{mdxType:"DefaultValueCell"},(0,n.mdx)("p",null,"none")),(0,n.mdx)(d.Ex,{mdxType:"DescriptionCell"},(0,n.mdx)("p",null,"Total number of all items being paginated.\nRequired when using itemCountPerPage and selectedPage."))),(0,n.mdx)(d.X2,{key:"ROW4",mdxType:"Row"},(0,n.mdx)(d.O,{mdxType:"PropNameCell"},"itemCountPerPage"),(0,n.mdx)(d.Di,{mdxType:"TypeCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"number\n"))),(0,n.mdx)(d.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,n.mdx)(d.mW,{mdxType:"DefaultValueCell"},(0,n.mdx)("p",null,"none")),(0,n.mdx)(d.Ex,{mdxType:"DescriptionCell"},(0,n.mdx)("p",null,"Total number of items per page.\nRequired when using selectedPage and totalCount."))),(0,n.mdx)(d.X2,{key:"ROW5",mdxType:"Row"},(0,n.mdx)(d.O,{mdxType:"PropNameCell"},"ariaLabelledBy"),(0,n.mdx)(d.Di,{mdxType:"TypeCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,n.mdx)(d.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,n.mdx)(d.mW,{mdxType:"DefaultValueCell"},(0,n.mdx)("p",null,"none")),(0,n.mdx)(d.Ex,{mdxType:"DescriptionCell"},(0,n.mdx)("p",null,(0,n.mdx)("img",{parentName:"p",src:"https://badgen.net/badge/UX/Accessibility/blue",alt:"IMPORTANT"}),"\nPreferred method: Allows consumers to create an accessible name for the paginator by adding the ID of heading that describes paginator content."))),(0,n.mdx)(d.X2,{key:"ROW6",mdxType:"Row"},(0,n.mdx)(d.O,{mdxType:"PropNameCell"},"ariaLabel"),(0,n.mdx)(d.Di,{mdxType:"TypeCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,n.mdx)(d.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,n.mdx)(d.mW,{mdxType:"DefaultValueCell"},(0,n.mdx)("p",null,"none")),(0,n.mdx)(d.Ex,{mdxType:"DescriptionCell"},(0,n.mdx)("p",null,(0,n.mdx)("img",{parentName:"p",src:"https://badgen.net/badge/UX/Accessibility/blue",alt:"IMPORTANT"}),"\nAllows consumers to create an accessible name for the paginator by adding a meaningful and descriptive text string.")))))}s.isMDXComponent=!0;var f=["components"];function y(){return y=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},y.apply(this,arguments)}function b(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var x={},g="wrapper";function h(e){var t=e.components,r=b(e,f);return(0,n.mdx)(g,y({},x,r,{components:t,mdxType:"MDXLayout"}),(0,n.mdx)(l.C,{mdxType:"Badge"}),(0,n.mdx)("h1",{id:"terra-controlled-paginator"},"Terra Controlled Paginator"),(0,n.mdx)("p",null,"Controlled version of the ",(0,n.mdx)("a",{parentName:"p",href:"https://engineering.cerner.com/terra-core/components/terra-paginator/paginator/paginator"},"Paginator")," for when the pagination state needs to be managed by a parent component. To use this component, the selectedPage must be managed through the state of a parent component, and passed into this paginator through props."),(0,n.mdx)("h2",{id:"getting-started"},"Getting Started"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"Install with ",(0,n.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("inlineCode",{parentName:"li"},"npm install terra-paginator"))))),(0,n.mdx)("h2",{id:"usage"},"Usage"),(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-jsx"},"import ControlledPaginator from 'terra-paginator/lib/ControlledPaginator';\n")),(0,n.mdx)("h2",{id:"component-features"},"Component Features"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#cross-browser-support"},"Cross-Browser Support")),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#responsive-support"},"Responsive Support")),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#mobile-support"},"Mobile Support"))),(0,n.mdx)("h2",{id:"examples"},"Examples"),(0,n.mdx)(a.Z,{mdxType:"ControlledPaginatorExample"}),(0,n.mdx)(o.Z,{mdxType:"ControlledPaginatorNoPagesExample"}),(0,n.mdx)("h2",{id:"controlled-paginator-props"},"Controlled Paginator Props"),(0,n.mdx)(s,{mdxType:"ControlledPaginatorPropsTable"}))}h.isMDXComponent=!0},54931:function(e,t,r){r.r(t),t.default={"clinical-lowlight-theme":"PropsTable-module__clinical-lowlight-theme___3pa8J","orion-fusion-theme":"PropsTable-module__orion-fusion-theme___FtP5r",bold:"PropsTable-module__bold___-z9Sz",table:"PropsTable-module__table___rzW-v",required:"PropsTable-module__required___ev190","code-block-override":"PropsTable-module__code-block-override___fF0JK"}},17893:function(e,t,r){r.r(t),t.default={"clinical-lowlight-theme":"Table-module__clinical-lowlight-theme___PqYJ8","orion-fusion-theme":"Table-module__orion-fusion-theme___d9rxf",table:"Table-module__table___eg2Mi","padding-standard":"Table-module__padding-standard___BfbC-","padding-compact":"Table-module__padding-compact___Yus6Z",striped:"Table-module__striped___n8xJe"}},89650:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=p(r(67294)),l=p(r(45697)),a=p(r(93967)),o=p(r(19845)),d=p(r(50026)),u=p(r(17893)),i=["children","disableStripes","paddingStyle"];function p(e){return e&&e.__esModule?e:{default:e}}function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},c.apply(this,arguments)}function m(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var s=o.default.bind(u.default),f={children:l.default.node.isRequired,disableStripes:l.default.bool,paddingStyle:l.default.oneOf(["none","standard","compact"])},y=function(e){var t=e.children,r=e.disableStripes,l=e.paddingStyle,o=m(e,i),u=n.default.useContext(d.default),p=(0,a.default)(s("table",{striped:!r},{"padding-standard":"standard"===l},{"padding-compact":"compact"===l},u.className),o.className);return n.default.createElement("table",c({},o,{className:p}),t)};y.propTypes=f,y.defaultProps={disableStripes:!1,paddingStyle:"none"};t.default=y},51523:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=o(r(67294)),l=o(r(45697)),a=["children"];function o(e){return e&&e.__esModule?e:{default:e}}function d(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var u={children:l.default.node},i=function(e){var t=e.children,r=d(e,a);return n.default.createElement("tbody",r,t)};i.propTypes=u,i.defaultProps={children:[]};t.default=i},58741:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=o(r(67294)),l=o(r(45697)),a=["children"];function o(e){return e&&e.__esModule?e:{default:e}}function d(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var u={children:l.default.node},i=function(e){var t=e.children,r=d(e,a);return n.default.createElement("td",r,t)};i.propTypes=u,i.defaultProps={children:[]};t.default=i},90703:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=d(r(67294)),l=d(r(45697)),a=d(r(96576)),o=["children"];function d(e){return e&&e.__esModule?e:{default:e}}function u(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var i={children:l.default.node},p=function(e){var t=e.children,r=u(e,o);return n.default.createElement("thead",r,n.default.createElement("tr",null,a.default.addScope(t,"col")))};p.propTypes=i,p.defaultProps={children:[]};t.default=p},8078:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=o(r(67294)),l=o(r(45697)),a=["children"];function o(e){return e&&e.__esModule?e:{default:e}}function d(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var u={children:l.default.node},i=function(e){var t=e.children,r=d(e,a);return n.default.createElement("th",r,t)};i.propTypes=u,i.defaultProps={children:[]};t.default=i},34847:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(r(67294)),l=i(r(45697)),a=i(r(19845)),o=i(r(17893)),d=i(r(96576)),u=["children"];function i(e){return e&&e.__esModule?e:{default:e}}function p(){return p=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},p.apply(this,arguments)}function c(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var m=a.default.bind(o.default),s={children:l.default.node},f=function(e){var t=e.children,r=c(e,u),l=m(["row"]);return n.default.createElement("tr",p({},r,{className:r.className?"".concat(l," ").concat(r.className):l}),d.default.addScope(t,"row"))};f.propTypes=s,f.defaultProps={children:[]};t.default=f},96576:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,l=(n=r(67294))&&n.__esModule?n:{default:n};var a={addScope:function(e,t){var r=[];return l.default.Children.forEach(e,(function(e){r.push(l.default.cloneElement(e,{scope:"TableHeaderCell"===e.type.name?t:void 0}))})),r}};t.default=a},98364:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Body",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(t,"Cell",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"Header",{enumerable:!0,get:function(){return d.default}}),Object.defineProperty(t,"HeaderCell",{enumerable:!0,get:function(){return u.default}}),Object.defineProperty(t,"Row",{enumerable:!0,get:function(){return a.default}}),t.default=void 0;var n=i(r(89650)),l=i(r(51523)),a=i(r(34847)),o=i(r(58741)),d=i(r(90703)),u=i(r(8078));function i(e){return e&&e.__esModule?e:{default:e}}t.default=n.default}}]);