"use strict";(self.webpackChunkterra_ui=self.webpackChunkterra_ui||[]).push([[27544,83532,61152,38768,16388,73056,50676,28296,5912,4484,82104,96528,74148,51768,7004,84624,62240,39860,95100,76480,54100],{12816:function(e,t,a){t.c=void 0;var n=s(a(11504)),r=s(a(74824)),i=s(a(61692)),o=s(a(4771)),l=s(a(73972)),d=s(a(73632));function s(e){return e&&e.__esModule?e:{default:e}}var u=r.default.bind(d.default);t.c=function(){return n.default.createElement(i.default,{classNames:u("card")},n.default.createElement(i.default.Body,null,n.default.createElement(o.default,{image:l.default,initials:"JS",alt:"Avatar",size:"1.5em"})))}},63019:function(e,t,a){t.c=void 0;var n=d(a(11504)),r=d(a(74824)),i=d(a(61692)),o=d(a(4771)),l=d(a(73632));function d(e){return e&&e.__esModule?e:{default:e}}var s=r.default.bind(l.default);t.c=function(){return n.default.createElement(i.default,{classNames:s("card")},n.default.createElement(i.default.Body,null,n.default.createElement(o.default,{initials:"JD",alt:"",size:"1.5em",isAriaHidden:!0})))}},11416:function(e,t,a){var n=a(22411);t.c=void 0;var r=n(a(11504)),i=n(a(3268)),o=n(a(74824)),l=n(a(58112)),d=o.default.bind(l.default),s={name:i.default.string.isRequired,src:i.default.string,url:i.default.string,version:i.default.string.isRequired},u=function(e){var t=e.src,a=e.name,n=e.url,i=e.version,o=r.default.createElement("a",{className:d("badge"),href:n||"https://www.npmjs.org/package/".concat(a,"/v/").concat(i)},r.default.createElement("span",{className:d("badge-name")},n?"package":"npm"),r.default.createElement("span",{className:d("badge-version")},"v".concat(i))),l=t?r.default.createElement("a",{className:d("badge"),href:t},r.default.createElement("span",{className:d("badge-name")},"github"),r.default.createElement("span",{className:d("badge-version")},"source")):void 0;return r.default.createElement("div",{className:d("badge-container")},o,l)};u.propTypes=s;t.c=u},27544:function(e,t,a){a.r(t),a.d(t,{default:function(){return c}});a(11504);var n=a(69788),r=a(99376),i=a(12816),o=a(63019),l=["components"];function d(){return d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},d.apply(this,arguments)}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u={},m="wrapper";function c(e){var t=e.components,a=s(e,l);return(0,n.mdx)(m,d({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.mdx)(r.k,{mdxType:"Badge"}),(0,n.mdx)("h1",{id:"avatar-accessibility-guide"},"Avatar Accessibility Guide"),(0,n.mdx)("h2",{id:"why-the-accessibility-of-avatar-is-important"},"Why the accessibility of Avatar is important"),(0,n.mdx)("p",null,"The Avatar component visually represents a person or facility. Poor or improper implementation of this component can render it inaccessible, which can cause the user inability to understand the avatar."),(0,n.mdx)("h2",{id:"accessibility-considerations"},"Accessibility Considerations"),(0,n.mdx)("h3",{id:"content-considerations-what-do-content-creators-need-to-do"},"Content Considerations: What do content creators need to do"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"Images with meaningful content must always be assigned proper alternative text. Content creators should provide engineers with relevant text for the component’s ",(0,n.mdx)("inlineCode",{parentName:"li"},"alt")," prop that conveys the image's meaning.",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"If the image conveys no meaning, instruct the engineer that the avatar is purely decorative."))),(0,n.mdx)("li",{parentName:"ul"},"If the avatar conveys meaning and is used on top of color other than white, ensure the colors meet the 3:1 non-text contrast ratio between the avatar color and its background color.")),(0,n.mdx)("h3",{id:"code-considerations-what-do-engineers-need-to-do"},"Code Considerations: What do engineers need to do"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"Engineers must not override Avatar’s ARIA role.",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Engineers must apply an ",(0,n.mdx)("inlineCode",{parentName:"li"},"alt")," prop for meaningful images."))),(0,n.mdx)("li",{parentName:"ul"},"Avatar with meaningful image assigned with proper alternative text.")),(0,n.mdx)("div",null,(0,n.mdx)(i.c,{mdxType:"A11yExampleAvatar"})),(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-jsx"},"const cx = classNames.bind(styles);\n\nconst AvatarExample = () => (\n    <Card classNames={cx('card')}>\n        <Card.Body>\n            <Avatar image={exampleAvatarImage} initials='JS' alt='Avatar' size='1.5em' />\n        </Card.Body>\n    </Card>\n);\n")),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"Avatars that are purely decorative should have the isAriaHidden prop set to true, effectively hiding the component from assistive technologies."),(0,n.mdx)("li",{parentName:"ul"},"Avatar used for decorative purpose has isAriaHidden prop set.")),(0,n.mdx)("div",null,(0,n.mdx)(o.c,{mdxType:"A11yExampleDecorativeAvatar"})),(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-jsx"},'const cx = classNamesBind.bind(styles);\n\nconst A11yExampleAvatar = () => (\n    <Card classNames={cx(\'card\')}>\n        <Card.Body>\n        <Avatar initials="JD" alt="" size="1.5em" isAriaHidden />\n        </Card.Body>\n    </Card>\n);\n')),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"Work with content creators to understand how content should resize and reflow at different breakpoints and form factors to ensure content is not artificially constrained or cut off at smaller viewports.")),(0,n.mdx)("h2",{id:"usability-expectations"},"Usability Expectations"),(0,n.mdx)("h3",{id:"interaction-detail"},"Interaction Detail"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"Avatar is not interactable.")),(0,n.mdx)("h3",{id:"usability-expectations-1"},"Usability Expectations"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"The user expects to understand the purpose of an Avatar regardless of how they experience the content. Because Avatar is not actionable, it does not receive keyboard focus.")),(0,n.mdx)("h2",{id:"support-compliance"},"Support Compliance"),(0,n.mdx)("p",null,"Terra is committed to ensuring its components provide the maximum possible accessibility. Terra delivers the ability to make accessibility products. However, using Terra components will not automatically make a product accessible."),(0,n.mdx)("p",null,"The final responsibility lies with the consumers of Terra components — ensuring proper usage, a programmatic context where needed, the words used to label elements, engineers following correct implementation patterns, and authors crafting content that follows best practice guidance — to make a product fully accessible."),(0,n.mdx)("h3",{id:"primary-accessibility-criteria-for-avatar"},"Primary accessibility criteria for Avatar"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("p",{parentName:"li"},(0,n.mdx)("a",{parentName:"p",href:"https://www.w3.org/WAI/WCAG21/Understanding/non-text-contrast"},(0,n.mdx)("strong",{parentName:"a"},"1.1.1 Non-text Content"))," - Supports"),(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Terra provides the ability to use alternate content on images and icons."),(0,n.mdx)("li",{parentName:"ul"},"Engineers must ensure that when an Avatar image/icon conveys meaning, to add appropriate ALT text to create a meaningful label."),(0,n.mdx)("li",{parentName:"ul"},"Content creators must provide engineers with meaningful alt-prop text when using icons that convey meaning."))),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("p",{parentName:"li"},(0,n.mdx)("a",{parentName:"p",href:"https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships.html"},(0,n.mdx)("strong",{parentName:"a"},"1.3.1 Info and Relationships"))," - Supports"),(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Terra provides the ability for information, structure, and relationships to be programmatically determined."),(0,n.mdx)("li",{parentName:"ul"},"Engineers must ensure that any visual relationship with an Avatar component that conveys meaning must programmatically set associations to the content for visual relationships to be understood by screen readers."),(0,n.mdx)("li",{parentName:"ul"},"Content creators must express to the engineer any visual relationships of an avatar component to ensure engineers can programmatically convey the visual relationships."))),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("p",{parentName:"li"},(0,n.mdx)("a",{parentName:"p",href:"https://www.w3.org/WAI/WCAG21/Understanding/non-text-contrast"},(0,n.mdx)("strong",{parentName:"a"},"1.4.11 Non-Text Contrast"))," - Supports"),(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Terra avatars provides components that, by default, meet color contrast requirements."),(0,n.mdx)("li",{parentName:"ul"},"Engineers must work with content creators to implement avatar so that the color of any non-text content of the avatar component and the background color meet a 3:1 color contrast ratio."),(0,n.mdx)("li",{parentName:"ul"},"Content creators must ensure that any meaningful non-text content meets a 3:1 color contrast ratio if the avatar appears on colors other than white."),(0,n.mdx)("li",{parentName:"ul"},"Secondary applicable accessibility criteria for Avatar."))),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("p",{parentName:"li"},(0,n.mdx)("a",{parentName:"p",href:"https://www.w3.org/WAI/WCAG21/Understanding/orientation"},(0,n.mdx)("strong",{parentName:"a"},"1.3.4. Orientation"))," - Supports"),(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Terra components operate independently of orientation."),(0,n.mdx)("li",{parentName:"ul"},"Engineers must ensure components operate independently of orientation."))),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("p",{parentName:"li"},(0,n.mdx)("a",{parentName:"p",href:"https://www.w3.org/WAI/WCAG21/Understanding/use-of-color.html"},(0,n.mdx)("strong",{parentName:"a"},"1.4.1 Use of Color"))," - Supports"),(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Terra Avatar does not use color to convey information."),(0,n.mdx)("li",{parentName:"ul"},"Content creators must not use color as the only way to convey information to the user. Instead, use both color and a shape or text.")))),(0,n.mdx)("h3",{id:"supported-features-and-technology"},"Supported Features and Technology"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"JAWS Support with Chrome (PC)"),(0,n.mdx)("li",{parentName:"ul"},"VoiceOver Support with Chrome, Safari (MAC)")),(0,n.mdx)("h3",{id:"partial-support--requiring-further-enhancement"},"Partial Support & Requiring Further Enhancement"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"NVDA not tested (PC)"),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"https://github.com/cerner/terra-core/issues/new/choose"},"Report a problem with this component on GitHub "))),(0,n.mdx)("h3",{id:"linked-references"},"Linked References:"),(0,n.mdx)("p",null,(0,n.mdx)("a",{parentName:"p",href:"https://www.w3.org/WAI/WCAG21/Understanding/"},"Web Content Accessibility Guidelines (WCAG)")))}c.isMDXComponent=!0},99376:function(e,t,a){a.d(t,{k:function(){return i}});var n=a(11504),r=a(11416),i=function(e){var t=e.url;return n.createElement(r.c,{src:"https://github.com/cerner/terra-core/tree/main/packages/terra-avatar",name:"terra-avatar",version:"3.18.0",url:t})}},73972:function(e,t,a){a.r(t),t.default=a.p+"ca1d72ea757e1174daf59bbf91dee4ff.jpg"},73632:function(e,t,a){a.r(t),t.default={card:"A11yExamples-module__card___ESvGo","add-left-margin":"A11yExamples-module__add-left-margin___RqsmV"}},58112:function(e,t,a){a.r(t),t.default={badge:"Badges-module__badge___vex-+","badge-container":"Badges-module__badge-container___B13Mv","badge-name":"Badges-module__badge-name___jkN0m","badge-version":"Badges-module__badge-version___agZ+P"}},51312:function(e,t,a){a.r(t),t.default={"clinical-lowlight-theme":"Card-module__clinical-lowlight-theme___rpqXf","orion-fusion-theme":"Card-module__orion-fusion-theme___QgHmr",card:"Card-module__card___n9+A2",default:"Card-module__default___Pvv6U",raised:"Card-module__raised___OPyVO"}},8096:function(e,t,a){a.r(t),t.default={"orion-fusion-theme":"CardBody-module__orion-fusion-theme___Xdg9v","clinical-lowlight-theme":"CardBody-module__clinical-lowlight-theme___2YDc3","vertical-padding":"CardBody-module__vertical-padding___xyd9u","horizontal-padding":"CardBody-module__horizontal-padding___wGati","center-content":"CardBody-module__center-content___phyuy"}},61692:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=c(a(11504)),r=c(a(3268)),i=c(a(82084)),o=c(a(74824)),l=c(a(56728)),d=c(a(99640)),s=c(a(51312)),u=c(a(51152)),m=["children","variant","visuallyHiddenText"];function c(e){return e&&e.__esModule?e:{default:e}}function p(){return p=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},p.apply(this,arguments)}function f(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var h=o.default.bind(s.default),g={children:r.default.node,variant:r.default.oneOf(["default","raised"]),visuallyHiddenText:r.default.string},x={variant:"default"},v=function(e){var t=e.children,a=e.variant,r=e.visuallyHiddenText,o=f(e,m),s=n.default.useContext(d.default),u=(0,i.default)(h(["card",a,s.className]),o.className),c=r?n.default.createElement(l.default,{text:r}):null;return n.default.createElement("article",p({},o,{className:u}),c,t)};v.propTypes=g,v.defaultProps=x,v.Body=u.default;t.default=v},51152:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=u(a(11504)),r=u(a(3268)),i=u(a(82084)),o=u(a(74824)),l=u(a(99640)),d=u(a(8096)),s=["children","hasPaddingVertical","hasPaddingHorizontal","isContentCentered"];function u(e){return e&&e.__esModule?e:{default:e}}function m(){return m=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},m.apply(this,arguments)}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=o.default.bind(d.default),f={children:r.default.node,hasPaddingVertical:r.default.bool,hasPaddingHorizontal:r.default.bool,isContentCentered:r.default.bool},h=function(e){var t=e.children,a=e.hasPaddingVertical,r=e.hasPaddingHorizontal,o=e.isContentCentered,d=c(e,s),u=n.default.useContext(l.default),f=(0,i.default)(p([{"vertical-padding":a},{"horizontal-padding":r},{"center-content":o},u.className]),d.className);return n.default.createElement("div",m({},d,{className:f}),t)};h.propTypes=f,h.defaultProps={hasPaddingHorizontal:!0,hasPaddingVertical:!0,isContentCentered:!1};t.default=h}}]);