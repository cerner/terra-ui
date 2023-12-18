"use strict";(self.webpackChunkterra_ui=self.webpackChunkterra_ui||[]).push([[44013,45627,85565,3353,5161,45865,85355,3193,4845,46647,85161,38681,15318,40411,18101,38443,11264,34319,20116,33609],{54451:function(e,t,n){t.Z=void 0;var a=o(n(67294)),r=o(n(28301)),i=o(n(54120));function o(e){return e&&e.__esModule?e:{default:e}}t.Z=function(){return a.default.createElement("div",null,a.default.createElement(r.default,null,a.default.createElement(r.default.Body,null,a.default.createElement("div",null,a.default.createElement("p",null,"For over four decades, Cerner has pursued breakthrough innovation that’s helped shape the health care industry as we know it."),a.default.createElement(i.default,{text:"1979 Cerner is founded",level:3}),a.default.createElement("p",null,"Before leaving Arthur Andersen & Co. to form their own company, three young friends and co-workers sat around a picnic table at Loose Creek Park in Kansas City, Missouri brainstorming business ideas. It was here that Neal Patterson, Paul Gorup and Cliff Illig conceived PGI & Associates, the company that would eventually become Cerner."),a.default.createElement(i.default,{text:"2006 Cerner opens Healthe Clinic",level:3}),a.default.createElement("p",null,"The company’s first on-site health clinic opened on its World Headquarters campus."),a.default.createElement(i.default,null),a.default.createElement("p",null,"Since 1979, we’ve been proud to work at the intersection of health care and information technology to connect people and systems around the world.")))))}},22863:function(e,t,n){var a=n(64836);t.Z=void 0;var r=a(n(67294)),i=a(n(45697)),o=a(n(47166)),d=a(n(17422)),l=o.default.bind(d.default),s={name:i.default.string.isRequired,src:i.default.string,url:i.default.string,version:i.default.string.isRequired},u=function(e){var t=e.src,n=e.name,a=e.url,i=e.version,o=r.default.createElement("a",{className:l("badge"),href:a||"https://www.npmjs.org/package/".concat(n,"/v/").concat(i)},r.default.createElement("span",{className:l("badge-name")},a?"package":"npm"),r.default.createElement("span",{className:l("badge-version")},"v".concat(i))),d=t?r.default.createElement("a",{className:l("badge"),href:t},r.default.createElement("span",{className:l("badge-name")},"github"),r.default.createElement("span",{className:l("badge-version")},"source")):void 0;return r.default.createElement("div",{className:l("badge-container")},o,d)};u.propTypes=s;var c=u;t.Z=c},44013:function(e,t,n){n.r(t),n.d(t,{default:function(){return c}});n(67294);var a=n(81254),r=n(35300),i=n(54451),o=["components"];function d(){return d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},d.apply(this,arguments)}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s={},u="wrapper";function c(e){var t=e.components,n=l(e,o);return(0,a.mdx)(u,d({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)(r.C,{mdxType:"Badge"}),(0,a.mdx)("h1",{id:"accessibility-guide-for-terra--divider"},"Accessibility Guide for Terra  Divider"),(0,a.mdx)("h2",{id:"why-is-accessibility-of-divider-important"},"Why is accessibility of Divider important"),(0,a.mdx)("blockquote",null,(0,a.mdx)("p",{parentName:"blockquote"},"The Divider component helps break content into logical sections. Dividers can be visual or have heading text assigned to describe the new content section. This component must be coded correctly and utilize proper content strategy when applicable to ensure understanding of the content section. At best inaccessible Dividers can cause confusion to people with disabilities. At worst, they can prevent users from navigating the page and understanding the proper context headings afford.")),(0,a.mdx)("h2",{id:"accessibility-considerations"},"Accessibility Considerations"),(0,a.mdx)("h3",{id:"code-considerations-what-do-engineers-need-to-do"},"Code Considerations: What do engineers need to do?"),(0,a.mdx)("div",{"aria-label":"Example Demo"},(0,a.mdx)(i.Z,{mdxType:"DividerExampleAccess"})),(0,a.mdx)("blockquote",null,(0,a.mdx)("pre",{parentName:"blockquote"},(0,a.mdx)("code",{parentName:"pre",className:"language-jsx"},"const date1 = '1979 Cerner is founded';\nconst date2 = '2006 Cerner opens Healthe Clinic';\n\nconst DividerExampleAccess = () => (\n<div>\n   <Card>\n       <Card.Body>\n           <div>\n               <p>\n                   For over four decades, Cerner has pursued breakthrough innovation that’s helped shape the health care\n                   industry as we know it.\n               </p>\n               <Divider text={date1} level={3} />\n               <p>\n                   Before leaving Arthur Andersen & Co. to form their own company, three young friends and co-workers\n                   sat around a picnic table at Loose Creek Park in Kansas City, Missouri brainstorming business\n                   ideas. It was here that Neal Patterson, Paul Gorup and Cliff Illig conceived PGI & Associates, the\n                   company that would eventually become Cerner.\n               </p>\n               <Divider text={date2} level={3} />\n               <p>The company’s first on-site health clinic opened on its World Headquarters campus.</p>\n               <Divider />\n               <p>\n                   Since 1979, we’ve been proud to work at the intersection of health care and information technology to\n                   connect people and systems around the world.\n               </p>\n           </div>\n       </Card.Body>\n   </Card>\n</div>\n);\n"))),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},"Engineers must work with content creators to ensure heading levels for all Dividers are appropriate for their placement on the page."),(0,a.mdx)("li",{parentName:"ul"},"Dividers with text cannot be heading level 1. Heading level 1 is reserved for the page’s title."),(0,a.mdx)("li",{parentName:"ul"},"Engineers must assign the proper heading level prop (H2-H6) to a Divider."),(0,a.mdx)("li",{parentName:"ul"},"Dividers with text must follow the correct heading level order based on its relationship to other headings in the flow of the page’s content.")),(0,a.mdx)("h3",{id:"content-considerations-what-do-content-creators-need-to-do"},"Content Considerations: What do content creators need to do?"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},"Dividers with text must act as a heading to describe the section.",(0,a.mdx)("ul",{parentName:"li"},(0,a.mdx)("li",{parentName:"ul"},"Ensure that the divider text accurately describes the content it represents."))),(0,a.mdx)("li",{parentName:"ul"},"Content creators must provide engineers with the desired heading text.",(0,a.mdx)("ul",{parentName:"li"},(0,a.mdx)("li",{parentName:"ul"},"Work with engineers to understand the content structure of the page to ensure heading levels for all Dividers are appropriate for their placement within the page.",(0,a.mdx)("ul",{parentName:"li"},(0,a.mdx)("li",{parentName:"ul"},"Dividers with text should never be a heading level 1."))))),(0,a.mdx)("li",{parentName:"ul"},"Best practice dictates that headings should be used to identify sections of content.",(0,a.mdx)("ul",{parentName:"li"},(0,a.mdx)("li",{parentName:"ul"},"If a Divider is used with text, the Divider text will act as the appropriate heading."),(0,a.mdx)("li",{parentName:"ul"},"If no heading text is provided within the Divider, best practice would be to include a heading within the content after the divider.",(0,a.mdx)("ul",{parentName:"li"},(0,a.mdx)("li",{parentName:"ul"},"Dividers with no text should not have a heading level assigned to the Divider itself."))))),(0,a.mdx)("li",{parentName:"ul"},"If default theme colors are overridden, custom colors must meet proper contrast ratios.")),(0,a.mdx)("h2",{id:"usability-expectations"},"Usability Expectations"),(0,a.mdx)("h3",{id:"interaction-detail"},"Interaction Detail"),(0,a.mdx)("p",null,"Terra Divider is not interactable."),(0,a.mdx)("h3",{id:"keyboard-interactions"},"Keyboard Interactions"),(0,a.mdx)("p",null,"Because Terra Divider is not interactable, it does not get keyboard focus."),(0,a.mdx)("h2",{id:"support-compliance"},"Support Compliance"),(0,a.mdx)("h3",{id:"primary-accessibility-criteria-for-divider"},"Primary accessibility criteria for Divider"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships.html"},"1.3.1 Info and Relationships")," — Supports",(0,a.mdx)("ul",{parentName:"li"},(0,a.mdx)("li",{parentName:"ul"},"Terra provides consuming teams the ability to set the appropriate heading level."),(0,a.mdx)("li",{parentName:"ul"},"Engineers and content creators must ensure appropriate heading levels are applied to Dividers to convey proper content structure."),(0,a.mdx)("li",{parentName:"ul"},"Content creators must provide divider heading level to match the page structure."))),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"https://www.w3.org/WAI/WCAG21/Understanding/headings-and-labels.html"},"2.4.6 Headings and Labels")," — Supports",(0,a.mdx)("ul",{parentName:"li"},(0,a.mdx)("li",{parentName:"ul"},"Content creators must ensure headings and labels accurately describe the content the Divider is delineating."))),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"https://www.w3.org/WAI/WCAG21/Understanding/name-role-value.html"},"4.1.2 Name, Role, Value")," — Supports",(0,a.mdx)("ul",{parentName:"li"},(0,a.mdx)("li",{parentName:"ul"},"Terra provides teams ability set the appropriate heading level when Dividers use text."),(0,a.mdx)("li",{parentName:"ul"},"Engineers must assign a heading level to the Divider text.")))),(0,a.mdx)("h3",{id:"secondary-accessibility-criteria-for-divider"},"Secondary accessibility criteria for Divider"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"https://www.w3.org/WAI/WCAG21/Understanding/reflow.html"},"1.4.10 Reflow")," — Supports",(0,a.mdx)("ul",{parentName:"li"},(0,a.mdx)("li",{parentName:"ul"},"Terra Divider supports reflow when the viewport is resized to 320x256 pixels without losing information or function."),(0,a.mdx)("li",{parentName:"ul"},"Content creators must consider how content resizes and reflows at different viewpoints."))),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html"},"1.4.3 Contrast(Minimum)")," — Supports",(0,a.mdx)("ul",{parentName:"li"},(0,a.mdx)("li",{parentName:"ul"},"Text content within Divider must meet proper color contrast ratios for text."),(0,a.mdx)("li",{parentName:"ul"},"Content creators must ensure that text colors assigned to a Divider meet proper color contrast ratios.")))),(0,a.mdx)("h3",{id:"supported-features-and-technology-terra-to-update-as-needed-after-updates"},"Supported Features and Technology (TERRA TO UPDATE AS NEEDED AFTER UPDATES)"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},"Keyboard Interactions"),(0,a.mdx)("li",{parentName:"ul"},"JAWS Support with Chrome (PC)"),(0,a.mdx)("li",{parentName:"ul"},"VoiceOver Support with Chrome, Safari (MAC)")),(0,a.mdx)("h2",{id:"linked-references"},"Linked References:"),(0,a.mdx)("ol",null,(0,a.mdx)("li",{parentName:"ol"},(0,a.mdx)("a",{parentName:"li",href:"https://www.w3.org/WAI/tips/writing/#use-headings-to-convey-meaning-and-structure"},"W3C WAI Aria: Use heading to convey meaning and structure")),(0,a.mdx)("li",{parentName:"ol"},(0,a.mdx)("a",{parentName:"li",href:"https://www.w3.org/WAI/WCAG21/Understanding/"},"Web Content Accessibility Guidelines (WCAG)"))))}c.isMDXComponent=!0},35300:function(e,t,n){n.d(t,{C:function(){return i}});var a=n(67294),r=n(22863),i=function(e){var t=e.url;return a.createElement(r.Z,{src:"https://github.com/cerner/terra-core/tree/main/packages/terra-divider",name:"terra-divider",version:"3.39.0",url:t})}},17422:function(e,t,n){n.r(t),t.default={badge:"Badges-module__badge___vex-+","badge-container":"Badges-module__badge-container___B13Mv","badge-name":"Badges-module__badge-name___jkN0m","badge-version":"Badges-module__badge-version___agZ+P"}},13234:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"Card-module__clinical-lowlight-theme___rpqXf","orion-fusion-theme":"Card-module__orion-fusion-theme___QgHmr",card:"Card-module__card___n9+A2",default:"Card-module__default___Pvv6U",raised:"Card-module__raised___OPyVO"}},64867:function(e,t,n){n.r(t),t.default={"orion-fusion-theme":"CardBody-module__orion-fusion-theme___Xdg9v","clinical-lowlight-theme":"CardBody-module__clinical-lowlight-theme___2YDc3","vertical-padding":"CardBody-module__vertical-padding___xyd9u","horizontal-padding":"CardBody-module__horizontal-padding___wGati","center-content":"CardBody-module__center-content___phyuy"}},28301:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=m(n(67294)),r=m(n(45697)),i=m(n(94184)),o=m(n(47166)),d=m(n(29270)),l=m(n(50026)),s=m(n(13234)),u=m(n(52926)),c=["children","variant","visuallyHiddenText"];function m(e){return e&&e.__esModule?e:{default:e}}function p(){return p=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},p.apply(this,arguments)}function h(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var f=o.default.bind(s.default),v={children:r.default.node,variant:r.default.oneOf(["default","raised"]),visuallyHiddenText:r.default.string},g={variant:"default"},x=function(e){var t=e.children,n=e.variant,r=e.visuallyHiddenText,o=h(e,c),s=a.default.useContext(l.default),u=(0,i.default)(f(["card",n,s.className]),o.className),m=r?a.default.createElement(d.default,{text:r}):null;return a.default.createElement("article",p({},o,{className:u}),m,t)};x.propTypes=v,x.defaultProps=g,x.Body=u.default;t.default=x},52926:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=u(n(67294)),r=u(n(45697)),i=u(n(94184)),o=u(n(47166)),d=u(n(50026)),l=u(n(64867)),s=["children","hasPaddingVertical","hasPaddingHorizontal","isContentCentered"];function u(e){return e&&e.__esModule?e:{default:e}}function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},c.apply(this,arguments)}function m(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=o.default.bind(l.default),h={children:r.default.node,hasPaddingVertical:r.default.bool,hasPaddingHorizontal:r.default.bool,isContentCentered:r.default.bool},f=function(e){var t=e.children,n=e.hasPaddingVertical,r=e.hasPaddingHorizontal,o=e.isContentCentered,l=m(e,s),u=a.default.useContext(d.default),h=(0,i.default)(p([{"vertical-padding":n},{"horizontal-padding":r},{"center-content":o},u.className]),l.className);return a.default.createElement("div",c({},l,{className:h}),t)};f.propTypes=h,f.defaultProps={hasPaddingHorizontal:!0,hasPaddingVertical:!0,isContentCentered:!1};t.default=f}}]);