"use strict";(self.webpackChunkterra_ui=self.webpackChunkterra_ui||[]).push([[8129,45627,37344,85565,33667,96890,79482,3353,5161,45865,80858,14041,85355,16835,3193,4845,46647,27444,17657,85161,16873,38681,15318,66097,90941,40411,18101,38443,11264,79057,33315,34319,20116,33609,78996,39915,33442],{22863:function(e,t,a){var l=a(64836);t.Z=void 0;var n=l(a(67294)),r=l(a(45697)),i=l(a(19845)),o=l(a(17422)),d=i.default.bind(o.default),u={name:r.default.string.isRequired,src:r.default.string,url:r.default.string,version:r.default.string.isRequired},s=function(e){var t=e.src,a=e.name,l=e.url,r=e.version,i=n.default.createElement("a",{className:d("badge"),href:l||"https://www.npmjs.org/package/".concat(a,"/v/").concat(r)},n.default.createElement("span",{className:d("badge-name")},l?"package":"npm"),n.default.createElement("span",{className:d("badge-version")},"v".concat(r))),o=t?n.default.createElement("a",{className:d("badge"),href:t},n.default.createElement("span",{className:d("badge-name")},"github"),n.default.createElement("span",{className:d("badge-version")},"source")):void 0;return n.default.createElement("div",{className:d("badge-container")},i,o)};s.propTypes=u;var c=s;t.Z=c},49271:function(e,t,a){var l=a(64836),n=a(18698);t.Z=void 0;var r=l(a(27424)),i=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var a=f(t);if(a&&a.has(e))return a.get(e);var l={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var o=r?Object.getOwnPropertyDescriptor(e,i):null;o&&(o.get||o.set)?Object.defineProperty(l,i,o):l[i]=e[i]}l.default=e,a&&a.set(e,l);return l}(a(67294)),o=l(a(45697)),d=l(a(19845)),u=a(21538),s=l(a(33864)),c=l(a(23399)),m=a(51051),p=l(a(53560));function f(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(f=function(e){return e?a:t})(e)}var b=d.default.bind(p.default),x={example:o.default.element,exampleSrc:o.default.element,exampleCssSrc:o.default.element,title:o.default.string,description:o.default.node,isExpanded:o.default.bool},v=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},h=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},y=function(e){var t=e.example,a=e.exampleSrc,l=e.exampleCssSrc,n=e.title,o=e.description,d=e.isExpanded,p=(0,i.useState)(d),f=(0,r.default)(p,2),x=f[0],y=f[1],g=(0,i.useState)(!1),_=(0,r.default)(g,2),w=_[0],V=_[1],O=i.default.useContext(u.ThemeContext),E=void 0!==l,N=function(){V(!w),x&&y(!x)},C=function(){y(!x),w&&V(!w)},T=function(e,t){e.nativeEvent.keyCode!==m.KEY_SPACE&&e.nativeEvent.keyCode!==m.KEY_RETURN||(e.preventDefault(),t())};return i.default.createElement("div",{className:b("template",O.className)},i.default.createElement("div",{className:b("header")},n&&i.default.createElement("h2",{className:b("title")},n)),i.default.createElement("div",{className:b("content")},o&&i.default.createElement("div",{className:b("description")},o),t),i.default.createElement("div",{className:b("footer")},a?i.default.createElement("div",{className:b("button-container")},E&&i.default.createElement("button",{type:"button",className:b("css-toggle","item",{"is-selected":w}),onClick:N,onKeyDown:function(e){return T(e,N)},onBlur:v,onMouseDown:h,tabIndex:0,"data-focus-styles-enabled":!0},i.default.createElement(s.default,{className:b("chevron")}),i.default.createElement("span",null,"CSS"),i.default.createElement(c.default,{className:b("chevron")})),i.default.createElement("button",{type:"button",className:b("code-toggle","item",{"is-selected":x}),onClick:C,onKeyDown:function(e){return T(e,C)},onBlur:v,onMouseDown:h,tabIndex:0,"data-focus-styles-enabled":!0},i.default.createElement(s.default,{className:b("chevron")}),i.default.createElement("span",null,"Code"),i.default.createElement(c.default,{className:b("chevron")}))):null,i.default.createElement("div",null,w&&i.default.createElement("div",{className:b("css")},l),x&&i.default.createElement("div",{className:b("code")},a))))};y.propTypes=x,y.defaultProps={isExpanded:!1};var g=y;t.Z=g},20335:function(e,t,a){a.r(t),a.d(t,{default:function(){return Q}});var l=a(67294),n=a(81254),r=a(54341),i=a(4821),o=["components"];function d(){return d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e},d.apply(this,arguments)}function u(e,t){if(null==e)return{};var a,l,n=function(e,t){if(null==e)return{};var a,l,n={},r=Object.keys(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s={};function c(e){var t=e.components,a=u(e,o);return(0,n.mdx)("wrapper",d({},s,a,{components:t,mdxType:"MDXLayout"}),(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-jsx"},'import React from \'react\';\nimport LabelValueView from \'terra-clinical-label-value-view\';\n\nconst LabelValueViewText = () => (\n  <div>\n    <style>\n      {`\n        #dl-wrapper > dd {\n          margin-bottom: 14px;\n        }\n\n        #dl-wrapper {\n          margin-bottom: 0;\n          margin-top: 0;\n        }\n      `}\n    </style>\n    <h4 id="topicText">Vitals</h4>\n    <dl id="dl-wrapper" aria-labelledby="topicText">\n      <LabelValueView label="Collected By" textValue="Noah Brown" isChildOfDescriptionList />\n      <LabelValueView label="Date" textValue="12/12/12 00:00AM" isChildOfDescriptionList />\n      <LabelValueView label="Blood Pressure" textValue="110/60 mmHg" isChildOfDescriptionList />\n      <LabelValueView label="Temperature" textValue="97 F" isChildOfDescriptionList />\n      <LabelValueView label="Heart Rate" textValue="80 BPM" isChildOfDescriptionList />\n    </dl>\n  </div>\n);\n\nexport default LabelValueViewText;\n\n')))}c.isMDXComponent=!0;var m=a(49271),p=function(e){var t=e.title,a=e.description,n=e.isExpanded;return l.createElement(m.Z,{title:t||"Label Value View Text Term And Def",description:a,example:l.createElement(i.Z,null),exampleSrc:l.createElement(c,null),isExpanded:n})},f=a(47889),b=["components"];function x(){return x=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e},x.apply(this,arguments)}function v(e,t){if(null==e)return{};var a,l,n=function(e,t){if(null==e)return{};var a,l,n={},r=Object.keys(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var h={};function y(e){var t=e.components,a=v(e,b);return(0,n.mdx)("wrapper",x({},h,a,{components:t,mdxType:"MDXLayout"}),(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-jsx"},'import React from \'react\';\nimport LabelValueView from \'terra-clinical-label-value-view\';\n\nconst LabelValueViewText = () => (\n  <div>\n    <h4 id="topic">Topic text for the LabelValueView</h4>\n    <LabelValueView label="Label" textValue="Sample Text as Value" ariaLabelledBy="topic" />\n  </div>\n);\n\nexport default LabelValueViewText;\n\n')))}y.isMDXComponent=!0;var g=function(e){var t=e.title,a=e.description,n=e.isExpanded;return l.createElement(m.Z,{title:t||"Label Value View Text Definition List",description:a,example:l.createElement(f.Z,null),exampleSrc:l.createElement(y,null),isExpanded:n})},_=a(20538),w=["components"];function V(){return V=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e},V.apply(this,arguments)}function O(e,t){if(null==e)return{};var a,l,n=function(e,t){if(null==e)return{};var a,l,n={},r=Object.keys(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var E={};function N(e){var t=e.components,a=O(e,w);return(0,n.mdx)("wrapper",V({},E,a,{components:t,mdxType:"MDXLayout"}),(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport classNames from 'classnames/bind';\nimport IconCritical from 'terra-icon/lib/icon/IconCritical';\nimport LabelValueView from 'terra-clinical-label-value-view';\nimport styles from './LabelValueView.module.scss';\n\nconst cx = classNames.bind(styles);\n\nconst LabelValueViewNode = () => (\n  <div>\n    <LabelValueView label=\"Alert\">\n      <div className={cx('container')}>\n        <div className={cx('icon')}>\n          <IconCritical />\n        </div>\n        <div className={cx('text')}>\n          Critical Alert: Blood Pressure is high.\n        </div>\n      </div>\n    </LabelValueView>\n  </div>\n);\n\nexport default LabelValueViewNode;\n\n")))}N.isMDXComponent=!0;var C=["components"];function T(){return T=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e},T.apply(this,arguments)}function L(e,t){if(null==e)return{};var a,l,n=function(e,t){if(null==e)return{};var a,l,n={},r=Object.keys(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var j={};function D(e){var t=e.components,a=L(e,C);return(0,n.mdx)("wrapper",T({},j,a,{components:t,mdxType:"MDXLayout"}),(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-scss"},":local {\n  .label-value-view-content {\n    border: 1px solid #d3d4d5;\n    border-radius: 5px;\n    padding: 0 20px;\n    width: 280px;\n  }\n\n  .container {\n    display: flex;\n    font-size: 1rem;\n    line-height: 1.4285714285714286;\n    max-width: 100%;  // Needed for IE10 truncation\n    overflow: hidden; // VERY IMPORTANT FOR IE10\n  }\n\n  .icon {\n    flex: 0 0 auto;\n    overflow: hidden;\n    padding-right: 0.357142857142857rem;\n  }\n\n  .text {\n    color: #c00;\n    flex: 1 1 auto;\n    font-weight: 700;\n    min-width: 10px; // Need min-width, as IE10 will completely squish display\n  }\n}\n\n")))}D.isMDXComponent=!0;var P=function(e){var t=e.title,a=e.description,n=e.isExpanded;return l.createElement(m.Z,{title:t||"Label Value View Node",description:a,example:l.createElement(_.Z,null),exampleCssSrc:l.createElement(D,null),exampleSrc:l.createElement(N,null),isExpanded:n})},S=a(27908),M=["components"];function I(){return I=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e},I.apply(this,arguments)}function k(e,t){if(null==e)return{};var a,l,n=function(e,t){if(null==e)return{};var a,l,n={},r=Object.keys(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var R={};function B(e){var t=e.components,a=k(e,M);return(0,n.mdx)("wrapper",I({},R,a,{components:t,mdxType:"MDXLayout"}),(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport LabelValueView from 'terra-clinical-label-value-view';\nimport classNames from 'classnames/bind';\nimport styles from './LabelValueView.module.scss';\n\nconst cx = classNames.bind(styles);\n\nconst LabelValueViewNodeCustom = () => (\n  <div>\n    <LabelValueView label=\"Daily Feeds\">\n      <div className={cx('label-value-view-content')}>\n        <h3>Critical Alert: Covid-19 Outbreak</h3>\n        <p>Due to recent Covid-19 outbreakm out healthcare facility has implemented strict protocals to ensure the safety and well-being of our patients and staff.</p>\n      </div>\n    </LabelValueView>\n  </div>\n);\n\nexport default LabelValueViewNodeCustom;\n\n")))}B.isMDXComponent=!0;var Z=function(e){var t=e.title,a=e.description,n=e.isExpanded;return l.createElement(m.Z,{title:t||"Label Value View Node Custom",description:a,example:l.createElement(S.Z,null),exampleCssSrc:l.createElement(D,null),exampleSrc:l.createElement(B,null),isExpanded:n})},X=a(78530),A=["components"];function q(){return q=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e},q.apply(this,arguments)}function F(e,t){if(null==e)return{};var a,l,n=function(e,t){if(null==e)return{};var a,l,n={},r=Object.keys(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var W={},H="wrapper";function z(e){var t=e.components,a=F(e,A);return(0,n.mdx)(H,q({},W,a,{components:t,mdxType:"MDXLayout"}),(0,n.mdx)(X.ZP,{mdxType:"PropsTable"},(0,n.mdx)(X.X2,{key:"ROW1",mdxType:"Row"},(0,n.mdx)(X.O,{mdxType:"PropNameCell"},"label"),(0,n.mdx)(X.Di,{mdxType:"TypeCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,n.mdx)(X.dS,{isRequired:!0,mdxType:"RequiredCell"}),(0,n.mdx)(X.mW,{mdxType:"DefaultValueCell"},(0,n.mdx)("p",null,"none")),(0,n.mdx)(X.Ex,{mdxType:"DescriptionCell"},(0,n.mdx)("p",null,"The label of the LabelValueView."))),(0,n.mdx)(X.X2,{key:"ROW2",mdxType:"Row"},(0,n.mdx)(X.O,{mdxType:"PropNameCell"},"textValue"),(0,n.mdx)(X.Di,{mdxType:"TypeCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,n.mdx)(X.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,n.mdx)(X.mW,{mdxType:"DefaultValueCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"''\n"))),(0,n.mdx)(X.Ex,{mdxType:"DescriptionCell"},(0,n.mdx)("p",null,"The text to be displayed underneath the label with the provided styling."))),(0,n.mdx)(X.X2,{key:"ROW3",mdxType:"Row"},(0,n.mdx)(X.O,{mdxType:"PropNameCell"},"isChildOfDescriptionList"),(0,n.mdx)(X.Di,{mdxType:"TypeCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,n.mdx)(X.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,n.mdx)(X.mW,{mdxType:"DefaultValueCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"false\n"))),(0,n.mdx)(X.Ex,{mdxType:"DescriptionCell"},(0,n.mdx)("p",null,"Indicates if the LabelValueView is created inside a description list or not.\nIf it is not valued, it will take false as a default, meaning that is is not a child of a description list."))),(0,n.mdx)(X.X2,{key:"ROW4",mdxType:"Row"},(0,n.mdx)(X.O,{mdxType:"PropNameCell"},"ariaLabelledBy"),(0,n.mdx)(X.Di,{mdxType:"TypeCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,n.mdx)(X.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,n.mdx)(X.mW,{mdxType:"DefaultValueCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"undefined\n"))),(0,n.mdx)(X.Ex,{mdxType:"DescriptionCell"},(0,n.mdx)("p",null,"The id of the element to be used as the accessible label for LabelValueView."))),(0,n.mdx)(X.X2,{key:"ROW5",mdxType:"Row"},(0,n.mdx)(X.O,{mdxType:"PropNameCell"},"children"),(0,n.mdx)(X.Di,{mdxType:"TypeCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"node\n"))),(0,n.mdx)(X.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,n.mdx)(X.mW,{mdxType:"DefaultValueCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"undefined\n"))),(0,n.mdx)(X.Ex,{mdxType:"DescriptionCell"},(0,n.mdx)("p",null,"Child component(s) to display underneath the label.")))))}z.isMDXComponent=!0;var U=["components"];function Y(){return Y=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e},Y.apply(this,arguments)}function G(e,t){if(null==e)return{};var a,l,n=function(e,t){if(null==e)return{};var a,l,n={},r=Object.keys(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var K={},J="wrapper";function Q(e){var t=e.components,a=G(e,U);return(0,n.mdx)(J,Y({},K,a,{components:t,mdxType:"MDXLayout"}),(0,n.mdx)(r.C,{mdxType:"Badge"}),(0,n.mdx)("h1",{id:"terra-clinical-label-value-view"},"Terra Clinical Label Value View"),(0,n.mdx)("p",null,"The LabelValueView component creates a visual and programmatic association of a label-value pair. An HTML description list is used to create the programmatic structure of the label to a value. This semantic structure is critical to support users of assistive technology. "),(0,n.mdx)("p",null,"LabelValueView can be used as a single description list with one label-value pair or as a group of related label-value pairs."),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"To use LabelValueView as a description list with a single label-value pair, ensure the ",(0,n.mdx)("inlineCode",{parentName:"li"},"isChildOfDescriptionList")," prop is ",(0,n.mdx)("inlineCode",{parentName:"li"},"false"),"."),(0,n.mdx)("li",{parentName:"ul"},"If multiple LabelValueViews are used as a group, then the best practice is to encapsulate them within a single description list ",(0,n.mdx)("inlineCode",{parentName:"li"},"<dl>")," element. LabelValueView does not need a dedicated description list and can be added to an existing one. To use LabelValueView as a child of a description list, the ",(0,n.mdx)("inlineCode",{parentName:"li"},"isChildOfDescriptionList")," prop needs to be set to ",(0,n.mdx)("inlineCode",{parentName:"li"},"true")," .")),(0,n.mdx)("p",null,"It is highly recommended to add an element that describes the topic of the description list, such as a heading."),(0,n.mdx)("p",null,"LabelValueViews and the encapsulating description lists are often visually associated with a topic on the page. It is best practice to programmatically associate the LabelValueView with the ID of the element that labels it on the page by using one of the following methods:"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"If the ",(0,n.mdx)("inlineCode",{parentName:"li"},"isChildOfDescriptionList")," prop is set to ",(0,n.mdx)("inlineCode",{parentName:"li"},"false"),", associate the list by setting the ",(0,n.mdx)("inlineCode",{parentName:"li"},"ariaLabelledBy")," prop to the ID of the topic."),(0,n.mdx)("li",{parentName:"ul"},"If the ",(0,n.mdx)("inlineCode",{parentName:"li"},"isChildOfDescriptionList")," prop is set to ",(0,n.mdx)("inlineCode",{parentName:"li"},"true")," associate the description list with the label using the ",(0,n.mdx)("inlineCode",{parentName:"li"},"aria-labelledby")," attribute on the description list that points to the ID of the topic.")),(0,n.mdx)("h2",{id:"getting-started"},"Getting Started"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"Install with ",(0,n.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("inlineCode",{parentName:"li"},"npm install terra-clinical-label-value-view"))))),(0,n.mdx)("h2",{id:"usage"},"Usage"),(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-jsx"},"import LabelValueView from 'terra-clinical-label-value-view';\n")),(0,n.mdx)("h2",{id:"component-features"},"Component Features"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#cross-browser-support"},"Cross-Browser Support")),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#responsive-support"},"Responsive Support")),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#mobile-support"},"Mobile Support"))),(0,n.mdx)("h2",{id:"examples"},"Examples"),(0,n.mdx)(p,{title:"Label Value View with a Text Input (as a term and definition)",mdxType:"LabelValueViewTextTermAndDef"}),(0,n.mdx)(g,{title:"Label Value View with a Text Input (as a description list)",mdxType:"LabelValueViewTextDefinitionList"}),(0,n.mdx)(P,{title:"Label Value View with a Node Input",mdxType:"LabelValueViewNode"}),(0,n.mdx)(Z,{title:"Label Value View with a Node Input (Custom)",mdxType:"LabelValueViewNodeCustom"}),(0,n.mdx)("h2",{id:"label-value-view-props"},"Label Value View Props"),(0,n.mdx)(z,{mdxType:"LabelValueViewPropsTable"}))}Q.isMDXComponent=!0},54341:function(e,t,a){a.d(t,{C:function(){return r}});var l=a(67294),n=a(22863),r=function(e){var t=e.url;return l.createElement(n.Z,{src:"https://github.com/cerner/terra-clinical/tree/main/packages/terra-clinical-label-value-view",name:"terra-clinical-label-value-view",version:"3.31.1",url:t})}},17422:function(e,t,a){a.r(t),t.default={badge:"Badges-module__badge___vex-+","badge-container":"Badges-module__badge-container___B13Mv","badge-name":"Badges-module__badge-name___jkN0m","badge-version":"Badges-module__badge-version___agZ+P"}},53560:function(e,t,a){a.r(t),t.default={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___rBbtD","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___GzA23",template:"ExampleTemplate-module__template___a4uPk",header:"ExampleTemplate-module__header___iFXV3",content:"ExampleTemplate-module__content___48m4Q",description:"ExampleTemplate-module__description___NwBJo",footer:"ExampleTemplate-module__footer___GpSoG","button-container":"ExampleTemplate-module__button-container___rAD11",css:"ExampleTemplate-module__css___+jtk1",code:"ExampleTemplate-module__code___7rC6C","css-toggle":"ExampleTemplate-module__css-toggle___chHK7","code-toggle":"ExampleTemplate-module__code-toggle___TGlE-","is-selected":"ExampleTemplate-module__is-selected___0BYwS",item:"ExampleTemplate-module__item___8FTQq",chevron:"ExampleTemplate-module__chevron___VbY7N",title:"ExampleTemplate-module__title___r+nbJ","dynamic-content":"ExampleTemplate-module__dynamic-content___k+1H7"}},15147:function(e,t,a){a.r(t),t.default={"clinical-lowlight-theme":"LabelValueView-module__clinical-lowlight-theme___joOcR","orion-fusion-theme":"LabelValueView-module__orion-fusion-theme___UFkm2","label-value-view":"LabelValueView-module__label-value-view___n5UCS",label:"LabelValueView-module__label___YCXrR",value:"LabelValueView-module__value___1wzfL","value-wrapper":"LabelValueView-module__value-wrapper___JePAZ"}},31851:function(e,t,a){a.r(t),t.default={"label-value-view-content":"LabelValueView-module__label-value-view-content___3c-is",container:"LabelValueView-module__container___2ae6F",icon:"LabelValueView-module__icon___H7n4Z",text:"LabelValueView-module__text___6kyhU"}},83664:function(e,t,a){a.r(t),t.default={"orion-fusion-theme":"IconCritical-module__orion-fusion-theme___DJnrc","clinical-lowlight-theme":"IconCritical-module__clinical-lowlight-theme___RujMT",IconCritical:"IconCritical-module__IconCritical___yXOuU"}},818:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=s(a(67294)),n=s(a(45697)),r=s(a(93967)),i=s(a(19845)),o=s(a(50026)),d=s(a(15147)),u=["label","textValue","isChildOfDescriptionList","ariaLabelledBy","children"];function s(e){return e&&e.__esModule?e:{default:e}}function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e},c.apply(this,arguments)}function m(e,t){if(null==e)return{};var a,l,n=function(e,t){if(null==e)return{};var a,l,n={},r=Object.keys(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=i.default.bind(d.default),f={label:n.default.string.isRequired,textValue:n.default.string,isChildOfDescriptionList:n.default.bool,ariaLabelledBy:n.default.string,children:n.default.node},b={textValue:"",children:void 0,isChildOfDescriptionList:!1,ariaLabelledBy:void 0},x=function(e){var t,a=e.label,n=e.textValue,i=e.isChildOfDescriptionList,d=e.ariaLabelledBy,s=e.children,f=m(e,u),b=l.default.useContext(o.default),x=(0,r.default)(p("label-value-view",b.className),f.className);n||s?n&&(t=l.default.createElement("div",{className:p("value")},n)):t=l.default.createElement("div",{className:p("value")},"--");var v=l.default.createElement(l.default.Fragment,null,l.default.createElement("dt",{className:p("label")},a),l.default.createElement("dd",{className:p("value-wrapper")},t,s));return i?l.default.createElement(l.default.Fragment,null,v):l.default.createElement("dl",c({},f,{className:x,"aria-labelledby":d}),v)};x.propTypes=f,x.defaultProps=b;var v=x;t.default=v},20538:function(e,t,a){t.Z=void 0;var l=d(a(67294)),n=d(a(19845)),r=d(a(46510)),i=d(a(818)),o=d(a(31851));function d(e){return e&&e.__esModule?e:{default:e}}var u=n.default.bind(o.default),s=function(){return l.default.createElement("div",null,l.default.createElement(i.default,{label:"Alert"},l.default.createElement("div",{className:u("container")},l.default.createElement("div",{className:u("icon")},l.default.createElement(r.default,null)),l.default.createElement("div",{className:u("text")},"Critical Alert: Blood Pressure is high."))))};t.Z=s},27908:function(e,t,a){t.Z=void 0;var l=o(a(67294)),n=o(a(818)),r=o(a(19845)),i=o(a(31851));function o(e){return e&&e.__esModule?e:{default:e}}var d=r.default.bind(i.default),u=function(){return l.default.createElement("div",null,l.default.createElement(n.default,{label:"Daily Feeds"},l.default.createElement("div",{className:d("label-value-view-content")},l.default.createElement("h3",null,"Critical Alert: Covid-19 Outbreak"),l.default.createElement("p",null,"Due to recent Covid-19 outbreakm out healthcare facility has implemented strict protocals to ensure the safety and well-being of our patients and staff."))))};t.Z=u},47889:function(e,t,a){t.Z=void 0;var l=r(a(67294)),n=r(a(818));function r(e){return e&&e.__esModule?e:{default:e}}var i=function(){return l.default.createElement("div",null,l.default.createElement("h4",{id:"topic"},"Topic text for the LabelValueView"),l.default.createElement(n.default,{label:"Label",textValue:"Sample Text as Value",ariaLabelledBy:"topic"}))};t.Z=i},4821:function(e,t,a){t.Z=void 0;var l=r(a(67294)),n=r(a(818));function r(e){return e&&e.__esModule?e:{default:e}}var i=function(){return l.default.createElement("div",null,l.default.createElement("style",null,"\n        #dl-wrapper > dd {\n          margin-bottom: 14px;\n        }\n\n        #dl-wrapper {\n          margin-bottom: 0;\n          margin-top: 0;\n        }\n      "),l.default.createElement("h4",{id:"topicText"},"Vitals"),l.default.createElement("dl",{id:"dl-wrapper","aria-labelledby":"topicText"},l.default.createElement(n.default,{label:"Collected By",textValue:"Noah Brown",isChildOfDescriptionList:!0}),l.default.createElement(n.default,{label:"Date",textValue:"12/12/12 00:00AM",isChildOfDescriptionList:!0}),l.default.createElement(n.default,{label:"Blood Pressure",textValue:"110/60 mmHg",isChildOfDescriptionList:!0}),l.default.createElement(n.default,{label:"Temperature",textValue:"97 F",isChildOfDescriptionList:!0}),l.default.createElement(n.default,{label:"Heart Rate",textValue:"80 BPM",isChildOfDescriptionList:!0})))};t.Z=i},33864:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=r(a(67294)),n=r(a(99139));function r(e){return e&&e.__esModule?e:{default:e}}function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e},i.apply(this,arguments)}var o=function(e){var t=i({},e);return l.default.createElement(n.default,t,l.default.createElement("path",{d:"M10.3 24 33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};o.displayName="IconChevronLeft",o.defaultProps={viewBox:"0 0 48 48","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg"};t.default=o},46510:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=u(a(67294)),n=u(a(93967)),r=u(a(19845)),i=u(a(50026)),o=u(a(99139)),d=u(a(83664));function u(e){return e&&e.__esModule?e:{default:e}}function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e},s.apply(this,arguments)}var c=r.default.bind(d.default),m=function(e){var t=s({},e),a=l.default.useContext(i.default),r=(0,n.default)(c("IconCritical",a.className),e.className);return l.default.createElement(o.default,s({},t,{className:r}),l.default.createElement("path",{fill:"#E50000",d:"M47.7 23.2 24.8.3c-.4-.4-1.1-.4-1.6 0L.3 23.2c-.4.4-.4 1.1 0 1.6l22.9 22.9c.4.4 1.1.4 1.6 0l22.9-22.9c.4-.4.4-1.2 0-1.6z"}),l.default.createElement("path",{fill:"#FFF",d:"M27 39h-6v-6h6v6zm0-11h-6V8h6v20z"}))};m.displayName="IconCritical",m.defaultProps={viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg"};t.default=m}}]);