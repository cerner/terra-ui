"use strict";(self.webpackChunkterra_ui=self.webpackChunkterra_ui||[]).push([[79222],{58861:function(e,t,a){function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}t.Z=void 0;var r=u(a(67294)),o=u(a(4169)),l=u(a(83864)),i=u(a(47166)),s=u(a(75480));function u(e){return e&&e.__esModule?e:{default:e}}function d(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(o=r.key,l=void 0,l=function(e,t){if("object"!==n(e)||null===e)return e;var a=e[Symbol.toPrimitive];if(void 0!==a){var r=a.call(e,t||"default");if("object"!==n(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(o,"string"),"symbol"===n(l)?l:String(l)),r)}var o,l}function c(e,t){return c=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},c(e,t)}function p(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,r=f(e);if(t){var o=f(this).constructor;a=Reflect.construct(r,arguments,o)}else a=r.apply(this,arguments);return function(e,t){if(t&&("object"===n(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return m(e)}(this,a)}}function m(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function f(e){return f=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},f(e)}var g=i.default.bind(s.default),y=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&c(e,t)}(s,e);var t,a,n,i=p(s);function s(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,s),(t=i.call(this,e)).state={content:[r.default.createElement("p",null,"Patients are requesting greater affordability and efficiency in healthcare. With procedures performed in an ambulatory surgery center costing up to 60% less compared to a hospital outpatient department (1), the demand for these facilities is increasing. In fact, the U.S. ambulatory surgery center market is expected to see a 6.9 % compound annual growth rate, reaching $33 billion by 2028. (2) Cerner understands the urgency to grow in the ambulatory surgery center market while continuing to deliver excellent care. Healthcare IT products can help improve clinician efficiency and patient outcomes, as well as enhance communication and data exchange between ambulatory surgery center providers and patients.")],currentPage:1},t.changePages=t.changePages.bind(m(t)),t}return t=s,(a=[{key:"changePages",value:function(e){this.setState({currentPage:e})}},{key:"render",value:function(){return r.default.createElement("div",{className:g("paginator-wrapper")},r.default.createElement(o.default,{header:r.default.createElement("h1",{id:"progressive_paginator_header_id"},"Progressive Paginator Example"),footer:r.default.createElement(l.default,{onPageChange:this.changePages,selectedPage:this.state.currentPage,totalCount:450,itemCountPerPage:10,ariaLabelledBy:"progressive_paginator_header_id"})},this.state.content))}}])&&d(t.prototype,a),n&&d(t,n),Object.defineProperty(t,"prototype",{writable:!1}),s}(r.default.Component);t.Z=y},76921:function(e,t,a){function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}t.Z=void 0;var r=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var a=d(t);if(a&&a.has(e))return a.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var i=o?Object.getOwnPropertyDescriptor(e,l):null;i&&(i.get||i.set)?Object.defineProperty(r,l,i):r[l]=e[l]}r.default=e,a&&a.set(e,r);return r}(a(67294)),o=u(a(4169)),l=u(a(83864)),i=u(a(47166)),s=u(a(75480));function u(e){return e&&e.__esModule?e:{default:e}}function d(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(d=function(e){return e?a:t})(e)}function c(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var a=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=a){var n,r,o,l,i=[],s=!0,u=!1;try{if(o=(a=a.call(e)).next,0===t){if(Object(a)!==a)return;s=!1}else for(;!(s=(n=o.call(a)).done)&&(i.push(n.value),i.length!==t);s=!0);}catch(e){u=!0,r=e}finally{try{if(!s&&null!=a.return&&(l=a.return(),Object(l)!==l))return}finally{if(u)throw r}}return i}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return p(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return p(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}var m=i.default.bind(s.default),f=function(){var e=c((0,r.useState)([r.default.createElement("p",null,"Cerner Ambulatory Surgery Center integrates our established surgical, anesthesia, inventory, revenue cycle management and patient portal products on a single EHR platform to help simplify the management of an ambulatory surgery center."),r.default.createElement("p",null,"With future growth in mind, Cerner Ambulatory Surgery Center is contemporary, scalable and flexible."),r.default.createElement("p",null,"Cerner Ambulatory Surgery Center aims to enable clinicians and staff to focus on what truly matters – a safe, personal and efficient patient experience.")]),1)[0],t=c((0,r.useState)(1),2),a=t[0],n=t[1];return r.default.createElement("div",{className:m("paginator-wrapper")},r.default.createElement(o.default,{header:r.default.createElement("h1",null,"Progressive Paginator Without Total Count Example"),footer:r.default.createElement(l.default,{onPageChange:function(e){n(e)},selectedPage:a,ariaLabel:"progressive paginator no total count pagination"})},e))};t.Z=f},79222:function(e,t,a){a.r(t),a.d(t,{default:function(){return _}});var n=a(67294),r=a(81254),o=a(31400),l=a(58861),i=["components"];function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},s.apply(this,arguments)}function u(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d={};function c(e){var t=e.components,a=u(e,i);return(0,r.mdx)("wrapper",s({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Dialog from 'terra-dialog';\nimport ProgressivePaginator from 'terra-paginator/lib/ProgressivePaginator';\nimport classNames from 'classnames/bind';\nimport styles from './PaginatorExampleCommon.module.scss';\n\nconst cx = classNames.bind(styles);\nconst totalCount = 450;\n\nconst buildPage = () => {\n  const fullContent = [<p>Patients are requesting greater affordability and efficiency in healthcare. With procedures performed in an ambulatory surgery center costing up to 60% less compared to a hospital outpatient department (1), the demand for these facilities is increasing. In fact, the U.S. ambulatory surgery center market is expected to see a 6.9 % compound annual growth rate, reaching $33 billion by 2028. (2) Cerner understands the urgency to grow in the ambulatory surgery center market while continuing to deliver excellent care. Healthcare IT products can help improve clinician efficiency and patient outcomes, as well as enhance communication and data exchange between ambulatory surgery center providers and patients.</p>];\n\n  return (\n    fullContent\n  );\n};\n\nclass ProgressivePaginatorExample extends React.Component {\n  constructor(props) {\n    super(props);\n\n    this.state = {\n      content: buildPage(),\n      currentPage: 1,\n    };\n\n    this.changePages = this.changePages.bind(this);\n  }\n\n  changePages(index) {\n    this.setState({ currentPage: index });\n  }\n\n  render() {\n    return (\n      <div className={cx('paginator-wrapper')}>\n        <Dialog\n          header={(\n            <h1 id=\"progressive_paginator_header_id\">\n              Progressive Paginator Example\n            </h1>\n)}\n          footer={<ProgressivePaginator onPageChange={this.changePages} selectedPage={this.state.currentPage} totalCount={totalCount} itemCountPerPage={10} ariaLabelledBy=\"progressive_paginator_header_id\" />}\n        >\n          {this.state.content}\n        </Dialog>\n      </div>\n    );\n  }\n}\n\nexport default ProgressivePaginatorExample;\n\n")))}c.isMDXComponent=!0;var p=a(49271),m=a(55889),f=function(e){var t=e.title,a=e.description,r=e.isExpanded;return n.createElement(p.Z,{title:t||"Progressive Paginator Example",description:a,example:n.createElement(l.Z,null),exampleCssSrc:n.createElement(m.Z,null),exampleSrc:n.createElement(c,null),isExpanded:r})},g=a(76921),y=["components"];function b(){return b=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},b.apply(this,arguments)}function h(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var x={};function v(e){var t=e.components,a=h(e,y);return(0,r.mdx)("wrapper",b({},x,a,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React, { useState } from 'react';\nimport Dialog from 'terra-dialog';\nimport ProgressivePaginator from 'terra-paginator/lib/ProgressivePaginator';\nimport classNames from 'classnames/bind';\nimport styles from './PaginatorExampleCommon.module.scss';\n\nconst cx = classNames.bind(styles);\n\nconst buildPage = () => {\n  const fullContent = [<p>Cerner Ambulatory Surgery Center integrates our established surgical, anesthesia, inventory, revenue cycle management and patient portal products on a single EHR platform to help simplify the management of an ambulatory surgery center.</p>,\n    <p>With future growth in mind, Cerner Ambulatory Surgery Center is contemporary, scalable and flexible.</p>,\n    <p>Cerner Ambulatory Surgery Center aims to enable clinicians and staff to focus on what truly matters – a safe, personal and efficient patient experience.</p>];\n\n  return (\n    fullContent\n  );\n};\n\nconst InfiniteProgressivePaginatorExample = () => {\n  const [content] = useState(buildPage());\n  const [currentPage, setCurrentPage] = useState(1);\n\n  const changePages = (index) => {\n    setCurrentPage(index);\n  };\n\n  return (\n    <div className={cx('paginator-wrapper')}>\n      <Dialog\n        header={(\n          <h1>\n            Progressive Paginator Without Total Count Example\n          </h1>\n          )}\n        footer={<ProgressivePaginator onPageChange={changePages} selectedPage={currentPage} ariaLabel=\"progressive paginator no total count pagination\" />}\n      >\n        {content}\n      </Dialog>\n    </div>\n  );\n};\n\nexport default InfiniteProgressivePaginatorExample;\n\n")))}v.isMDXComponent=!0;var P=function(e){var t=e.title,a=e.description,r=e.isExpanded;return n.createElement(p.Z,{title:t||"Progressive Paginator Without Total Count Example",description:a,example:n.createElement(g.Z,null),exampleCssSrc:n.createElement(m.Z,null),exampleSrc:n.createElement(v,null),isExpanded:r})},C=a(78530),O=["components"];function w(){return w=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},w.apply(this,arguments)}function T(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var E={},j="wrapper";function N(e){var t=e.components,a=T(e,O);return(0,r.mdx)(j,w({},E,a,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)(C.ZP,{mdxType:"PropsTable"},(0,r.mdx)(C.X2,{key:"ROW1",mdxType:"Row"},(0,r.mdx)(C.O,{mdxType:"PropNameCell"},"onPageChange"),(0,r.mdx)(C.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"func\n"))),(0,r.mdx)(C.dS,{isRequired:!0,mdxType:"RequiredCell"}),(0,r.mdx)(C.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("p",null,"none")),(0,r.mdx)(C.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"Function to be executed when a navigation element is selected."))),(0,r.mdx)(C.X2,{key:"ROW2",mdxType:"Row"},(0,r.mdx)(C.O,{mdxType:"PropNameCell"},"selectedPage"),(0,r.mdx)(C.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"number\n"))),(0,r.mdx)(C.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(C.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("p",null,"none")),(0,r.mdx)(C.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"The active/selected page."))),(0,r.mdx)(C.X2,{key:"ROW3",mdxType:"Row"},(0,r.mdx)(C.O,{mdxType:"PropNameCell"},"totalCount"),(0,r.mdx)(C.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"number\n"))),(0,r.mdx)(C.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(C.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("p",null,"none")),(0,r.mdx)(C.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"Total number of all items being paginated."))),(0,r.mdx)(C.X2,{key:"ROW4",mdxType:"Row"},(0,r.mdx)(C.O,{mdxType:"PropNameCell"},"itemCountPerPage"),(0,r.mdx)(C.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"number\n"))),(0,r.mdx)(C.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(C.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("p",null,"none")),(0,r.mdx)(C.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"Total number of items per page."))),(0,r.mdx)(C.X2,{key:"ROW5",mdxType:"Row"},(0,r.mdx)(C.O,{mdxType:"PropNameCell"},"ariaLabelledBy"),(0,r.mdx)(C.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,r.mdx)(C.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(C.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("p",null,"none")),(0,r.mdx)(C.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"Allows user to set the heading id of the page."))),(0,r.mdx)(C.X2,{key:"ROW6",mdxType:"Row"},(0,r.mdx)(C.O,{mdxType:"PropNameCell"},"ariaLabel"),(0,r.mdx)(C.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,r.mdx)(C.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(C.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("p",null,"none")),(0,r.mdx)(C.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"Allows user to set the custom paginator label."))),(0,r.mdx)(C.X2,{key:"ROW7",mdxType:"Row"},(0,r.mdx)(C.O,{mdxType:"PropNameCell"},"pageLabel"),(0,r.mdx)(C.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,r.mdx)(C.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(C.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("p",null,"none")),(0,r.mdx)(C.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"Allows user to set custom page label. ",(0,r.mdx)("em",{parentName:"p"},"(usage note: User must pass translated text)"),".")))))}N.isMDXComponent=!0;var S=["components"];function D(){return D=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},D.apply(this,arguments)}function R(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var k={},M="wrapper";function _(e){var t=e.components,a=R(e,S);return(0,r.mdx)(M,D({},k,a,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)(o.C,{mdxType:"Badge"}),(0,r.mdx)("h1",{id:"terra-progressive-paginator"},"Terra Progressive Paginator"),(0,r.mdx)("p",null,"Paginator to be used for ordered data where the size of the data is known. Provides first, last, previous, next, and paged functionality."),(0,r.mdx)("h2",{id:"getting-started"},"Getting Started"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Install with ",(0,r.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"npm install terra-paginator"))))),(0,r.mdx)("h2",{id:"usage"},"Usage"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},"import ProgressivePaginator from 'terra-paginator/lib/ProgressivePaginator';\n")),(0,r.mdx)("h2",{id:"component-features"},"Component Features"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#cross-browser-support"},"Cross-Browser Support")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#responsive-support"},"Responsive Support")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#mobile-support"},"Mobile Support"))),(0,r.mdx)("h2",{id:"examples"},"Examples"),(0,r.mdx)(f,{mdxType:"ProgressivePaginatorExample"}),(0,r.mdx)(P,{mdxType:"ProgressivePaginatorWithoutTotalCountExample"}),(0,r.mdx)("h2",{id:"progressive-paginator-props"},"Progressive Paginator Props"),(0,r.mdx)(N,{mdxType:"ProgressivePaginatorPropsTable"}))}_.isMDXComponent=!0},94841:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,a){if(a&&e)return{messageId:"Terra.paginator.pageCountWithLabel",messageAttributes:{pageLabel:e,pageNumber:t,pageNumberTotal:a}};if(a)return{messageId:"Terra.paginator.pageCount",messageAttributes:{pageNumber:t,pageNumberTotal:a}};if(e)return{messageId:"Terra.paginator.pageIndexWithLabel",messageAttributes:{pageLabel:e,pageNumber:t}};return{messageId:"Terra.paginator.pageIndex",messageAttributes:{pageNumber:t}}}},83864:function(e,t,a){function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=b(a(67294)),o=b(a(45697)),l=b(a(47166)),i=b(a(50026)),s=a(25387),u=b(a(80906)),d=b(a(29270)),c=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var a=y(t);if(a&&a.has(e))return a.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var i=o?Object.getOwnPropertyDescriptor(e,l):null;i&&(i.get||i.set)?Object.defineProperty(r,l,i):r[l]=e[l]}r.default=e,a&&a.set(e,r);return r}(a(51051)),p=b(a(83699)),m=a(45364),f=b(a(62765)),g=b(a(94841));function y(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(y=function(e){return e?a:t})(e)}function b(e){return e&&e.__esModule?e:{default:e}}function h(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(o=r.key,l=void 0,l=function(e,t){if("object"!==n(e)||null===e)return e;var a=e[Symbol.toPrimitive];if(void 0!==a){var r=a.call(e,t||"default");if("object"!==n(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(o,"string"),"symbol"===n(l)?l:String(l)),r)}var o,l}function x(e,t){return x=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},x(e,t)}function v(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,r=C(e);if(t){var o=C(this).constructor;a=Reflect.construct(r,arguments,o)}else a=r.apply(this,arguments);return function(e,t){if(t&&("object"===n(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return P(e)}(this,a)}}function P(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function C(e){return C=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},C(e)}var O=l.default.bind(p.default),w={onPageChange:o.default.func.isRequired,selectedPage:o.default.number,totalCount:o.default.number,itemCountPerPage:o.default.number,ariaLabelledBy:o.default.string,ariaLabel:o.default.string,intl:o.default.shape({formatMessage:o.default.func}).isRequired,pageLabel:o.default.string},T=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&x(e,t)}(l,e);var t,a,n,o=v(l);function l(e){var t;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,l);var a=(t=o.call(this,e)).props.selectedPage;return t.state={selectedPage:a||1,showReducedPaginator:!1,selectedPageMessage:""},t.handlePageChange=t.handlePageChange.bind(P(t)),t.defaultProgressivePaginator=t.defaultProgressivePaginator.bind(P(t)),t.reducedProgressivePaginator=t.reducedProgressivePaginator.bind(P(t)),t.setPaginator=t.setPaginator.bind(P(t)),t}return t=l,(a=[{key:"handlePageChange",value:function(e){var t=this,a=this.props,n=a.intl,r=a.itemCountPerPage,o=a.totalCount;return function(a){var l;a.nativeEvent.keyCode!==c.KEY_RETURN&&a.nativeEvent.keyCode!==c.KEY_SPACE||a.preventDefault(),t.props.onPageChange(e),l=o&&r?n.formatMessage({id:"Terra.paginator.pageSelectedWithCount"},{pageNumber:e,pageNumberTotal:(0,m.calculatePages)(o,r)}):n.formatMessage({id:"Terra.paginator.pageSelected"},{pageNumber:e}),t.setState({selectedPage:e,selectedPageMessage:l})}}},{key:"setPaginator",value:function(e){var t="tiny"===e;this.state.showReducedPaginator!==t&&this.setState({showReducedPaginator:t})}},{key:"defaultProgressivePaginator",value:function(){var e=this.context,t=this.props,a=t.intl,n=t.totalCount,o=t.itemCountPerPage,l=t.ariaLabelledBy,i=t.ariaLabel,s=t.pageLabel,u=n?(0,m.calculatePages)(n,o):0,c=this.state.selectedPage,p=1===c?1:c-1,y=c===u?u:c+1,b=i||"pagination",h=n>0,x=(0,g.default)(s,c,u),v=x.messageId,P=x.messageAttributes,C=r.default.createElement(r.default.Fragment,null,r.default.createElement("div",null,a.formatMessage({id:v},P)),r.default.createElement("ul",{className:O("progressive-list")},h&&r.default.createElement("li",null,r.default.createElement(f.default,{ariaDisabled:1===c,ariaLabel:a.formatMessage({id:"Terra.paginator.first"}),className:O(["nav-link",1===c?"is-disabled":null]),disabled:1===c,onClick:this.handlePageChange(1),onKeyDown:this.handlePageChange(1)},a.formatMessage({id:"Terra.paginator.first"}))),r.default.createElement("li",null,r.default.createElement(f.default,{ariaDisabled:1===c,ariaLabel:a.formatMessage({id:"Terra.paginator.previous"}),className:O(["nav-link","previous",1===c?"is-disabled":null]),disabled:1===c,onClick:this.handlePageChange(p),onKeyDown:this.handlePageChange(p)},r.default.createElement("span",{className:O("icon")}),a.formatMessage({id:"Terra.paginator.previous"}))),r.default.createElement("li",null,r.default.createElement(f.default,{ariaDisabled:c===u,ariaLabel:a.formatMessage({id:"Terra.paginator.next"}),className:O(["nav-link","next",c===u?"is-disabled":null]),disabled:c===u,onClick:this.handlePageChange(y),onKeyDown:this.handlePageChange(y)},a.formatMessage({id:"Terra.paginator.next"}),r.default.createElement("span",{className:O("icon")}))),h&&r.default.createElement("li",null,r.default.createElement(f.default,{ariaDisabled:c===u,ariaLabel:a.formatMessage({id:"Terra.paginator.last"}),className:O(["nav-link",c===u?"is-disabled":null]),disabled:c===u,onClick:this.handlePageChange(u),onKeyDown:this.handlePageChange(u)},a.formatMessage({id:"Terra.paginator.last"}))))),w=r.default.createElement(d.default,{"aria-live":"polite","aria-relevant":"all",text:this.state.selectedPageMessage});return r.default.createElement("nav",{className:O("paginator","progressive",e.className),"aria-labelledby":l,"aria-label":l?void 0:b},w,C)}},{key:"reducedProgressivePaginator",value:function(){var e=this.context,t=this.props,a=t.intl,n=t.totalCount,o=t.itemCountPerPage,l=t.ariaLabelledBy,i=t.ariaLabel,s=t.pageLabel,u=n?(0,m.calculatePages)(n,o):0,c=this.state.selectedPage,p=1===c?1:c-1,y=c===u?u:c+1,b=i||"pagination",h=n>0,x=(0,g.default)(s,c,u),v=x.messageId,P=x.messageAttributes,C=r.default.createElement(r.default.Fragment,null,r.default.createElement("div",null,a.formatMessage({id:v},P)),r.default.createElement("ul",{className:O("progressive-list")},h&&r.default.createElement("li",null,r.default.createElement(f.default,{ariaDisabled:1===c,ariaLabel:a.formatMessage({id:"Terra.paginator.first"}),className:O(["nav-link",1===c?"is-disabled":null]),disabled:1===c,onClick:this.handlePageChange(1),onKeyDown:this.handlePageChange(1)},a.formatMessage({id:"Terra.paginator.first"}))),r.default.createElement("li",null,r.default.createElement(f.default,{ariaDisabled:1===c,ariaLabel:a.formatMessage({id:"Terra.paginator.previous"}),className:O(["nav-link","previous","icon-only",1===c?"is-disabled":null]),disabled:1===c,onClick:this.handlePageChange(p),onKeyDown:this.handlePageChange(p)},r.default.createElement(d.default,{text:a.formatMessage({id:"Terra.paginator.previous"})}),r.default.createElement("span",{className:O("icon")}))),r.default.createElement("li",null,r.default.createElement(f.default,{ariaDisabled:c===u,ariaLabel:a.formatMessage({id:"Terra.paginator.next"}),className:O(["nav-link","next","icon-only",c===u?"is-disabled":null]),disabled:c===u,onClick:this.handlePageChange(y),onKeyDown:this.handlePageChange(y)},r.default.createElement(d.default,{text:a.formatMessage({id:"Terra.paginator.next"})}),r.default.createElement("span",{className:O("icon")}))),h&&r.default.createElement("li",null,r.default.createElement(f.default,{ariaDisabled:c===u,ariaLabel:a.formatMessage({id:"Terra.paginator.last"}),className:O(["nav-link",c===u?"is-disabled":null]),disabled:c===u,onClick:this.handlePageChange(u),onKeyDown:this.handlePageChange(u)},a.formatMessage({id:"Terra.paginator.last"}))))),w=r.default.createElement(d.default,{"aria-live":"polite","aria-relevant":"all",text:this.state.selectedPageMessage});return r.default.createElement("nav",{className:O("paginator","progressive",e.className),"aria-labelledby":l,"aria-label":l?void 0:b},w,C)}},{key:"render",value:function(){return r.default.createElement(u.default,{onChange:this.setPaginator},this.state.showReducedPaginator?this.reducedProgressivePaginator():this.defaultProgressivePaginator())}}])&&h(t.prototype,a),n&&h(t,n),Object.defineProperty(t,"prototype",{writable:!1}),l}(r.default.Component);T.propTypes=w,T.contextType=i.default;var E=(0,s.injectIntl)(T);t.default=E}}]);