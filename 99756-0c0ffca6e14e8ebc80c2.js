"use strict";(self.webpackChunkterra_ui=self.webpackChunkterra_ui||[]).push([[99756],{40996:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=d(a(67294)),r=d(a(45697)),o=d(a(19845)),i=d(a(50026)),l=d(a(66983)),s=["children"];function d(e){return e&&e.__esModule?e:{default:e}}function u(){return u=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},u.apply(this,arguments)}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=o.default.bind(l.default),m=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},h=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},f={children:r.default.string},g=function(e){var t=e.children,a=c(e,s),r=n.default.useContext(i.default),l=(0,o.default)(p(["button",r.className]),a.className);return n.default.createElement("button",u({},a,{type:"button",className:l,onBlur:m,onMouseDown:h,"data-focus-styles-enabled":!0}),t)};g.propTypes=f;t.default=g},59278:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=s(a(67294)),r=s(a(45697)),o=s(a(19845)),i=s(a(50026)),l=s(a(30866));function s(e){return e&&e.__esModule?e:{default:e}}var d=o.default.bind(l.default),u={ariaLevel:r.default.oneOf(["2","3","4","5","6"]),children:r.default.node,variant:r.default.oneOf(["ux-recommendation","caution","deprecation","maintenance","important","not-supported"])},c=function(e){var t=e.ariaLevel,a=e.variant,r=e.children,o=n.default.useContext(i.default);return n.default.createElement("div",{className:d("notice",a,o.className)},n.default.createElement("div",{className:d("accessory"),"aria-hidden":"true",focusable:"false"}),n.default.createElement("div",{role:"heading",className:d("title"),"aria-level":t},n.default.createElement("span",null,function(e){return"ux-recommendation"===e?"UX Recommendation":"caution"===e?"Caution":"deprecation"===e?"Deprecation Notice":"maintenance"===e?"In Maintenance":"important"===e?"Important":"not-supported"===e?"Hazards for Incorrect Usage":"error"}(a))),n.default.createElement("div",{className:d("children")},function(e){return"not-supported"===e?n.default.createElement(n.default.Fragment,null,n.default.createElement("p",{className:d("paragraph")},"This component was designed and tested according to the documented implementation."),n.default.createElement("p",{className:d("paragraph")},"Using the component incorrectly:",n.default.createElement("ul",{className:d("list")},n.default.createElement("li",null,"will likely result in improper composition and create accessibility issues"),n.default.createElement("li",null,"may cause erratic or broken behaviors and styles"),n.default.createElement("li",null,n.default.createElement("strong",null,"will not be supported "),"or enhanced to allow for incorrect use")))):null}(a),n.default.Children.map(r,(function(e){return"string"==typeof e?n.default.createElement("p",null,e):e}))))};c.propTypes=u,c.defaultProps={ariaLevel:"2",variant:"important"};t.default=c},47306:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=u(a(67294)),r=u(a(45697)),o=u(a(93967)),i=u(a(19845)),l=u(a(50026)),s=u(a(42620)),d=["title"];function u(e){return e&&e.__esModule?e:{default:e}}function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},c.apply(this,arguments)}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var m=i.default.bind(s.default),h={title:r.default.string},f=function(e){var t=e.title,a=p(e,d),r=n.default.useContext(l.default),i=(0,o.default)(m(["placeholder",r.className]),a.className),s=m(["inner"]);return n.default.createElement("div",c({},a,{className:i}),n.default.createElement("div",{className:s},n.default.createElement("p",{className:m("title")},t)))};f.propTypes=h,f.defaultProps={title:""};t.default=f},34261:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Button",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"Notice",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(t,"Placeholder",{enumerable:!0,get:function(){return r.default}});var n=i(a(59278)),r=i(a(47306)),o=i(a(40996));function i(e){return e&&e.__esModule?e:{default:e}}},41345:function(e,t,a){a.r(t),a.d(t,{default:function(){return f}});a(67294);var n=a(81254),r=a(31400),o=a(34261),i=a(56305),l=a(81715),s=a(5190),d=a(23198),u=["components"];function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},c.apply(this,arguments)}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var m={},h="wrapper";function f(e){var t=e.components,a=p(e,u);return(0,n.mdx)(h,c({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.mdx)(r.C,{mdxType:"Badge"}),(0,n.mdx)("h1",{id:"accessibility-guide-for-terra-paginator"},"Accessibility Guide for Terra Paginator"),(0,n.mdx)("h2",{id:"why-is-this-important"},"Why is this important?"),(0,n.mdx)("p",null,"Terra Paginator is a simple and effective way to make large amounts of content more manageable and user-friendly. However, it can be problematic to some users if not enough context is provided to convey what content the paginator controls. Therefore, it is critical to always include a visual heading above the paginator content and ensure the ",(0,n.mdx)("inlineCode",{parentName:"p"},"ariaLabelledBy")," prop is linked to the ID of the heading."),(0,n.mdx)("h2",{id:"accessibility-considerations"},"Accessibility Considerations"),(0,n.mdx)("h4",{id:"general-notes"},"General notes"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"All actionable elements must be able to receive focus and be interacted with using a keyboard."),(0,n.mdx)("li",{parentName:"ul"},"Users rely on headings to define the content they are interacting with. Ensuring a heading is above the Paginator will support all sighted users to understand the purpose of the Paginator."),(0,n.mdx)("li",{parentName:"ul"},"Screen reader users may require more context to understand the purpose of the Paginator. A meaningful label should be provided by using either the ",(0,n.mdx)("inlineCode",{parentName:"li"},"ariaLabelledBy"),"(preferred) or ",(0,n.mdx)("inlineCode",{parentName:"li"},"ariaLabel")," prop.")),(0,n.mdx)("hr",null),(0,n.mdx)("h3",{id:"code-considerations"},"Code Considerations"),(0,n.mdx)("h4",{id:"add-a-meaningful-accessible-name-to-the-paginator"},"Add a meaningful accessible name to the paginator"),(0,n.mdx)("p",null,"The paginator needs to provide context for screen reader users to understand what they are controling. Adding a proper label to the container should provide the necessary context. In order to provide an accessible name for the whole container, two optional props are available for the consumer team to pass a meaningful accessible label for the paginator."),(0,n.mdx)(o.Notice,{variant:"important",ariaLevel:"5",mdxType:"Notice"},(0,n.mdx)("p",null,"The ",(0,n.mdx)("inlineCode",{parentName:"p"},"ariaLabelledBy")," and ",(0,n.mdx)("inlineCode",{parentName:"p"},"ariaLabel")," ",(0,n.mdx)("a",{parentName:"p",href:"https://engineering.cerner.com/terra-ui/components/cerner-terra-core-docs/paginator/about#paginator-props"},"props")," must not be used at the same time - only use one of the labeling props. The best practice would be to use only the ",(0,n.mdx)("inlineCode",{parentName:"p"},"ariaLabelledBy")," prop that refers to the id of heading that exists on the page. This will semantically relate the paginator and header as a related group.")),(0,n.mdx)("p",null,"When a visible text header exists on the page, the ",(0,n.mdx)("inlineCode",{parentName:"p"},"ariaLabelledBy")," can be set with using the header id and will be used with the aria-describedby to provide additional context to assistive technology users."),(0,n.mdx)("h5",{id:"code-example"},"Code Example:"),(0,n.mdx)("p",null,"This example shows how to set up the recommended ",(0,n.mdx)("inlineCode",{parentName:"p"},"ariaLabelledBy")," prop to programmatically associate a visible heading on the page with the paginator to create an accessible paginator name:"),(0,n.mdx)(i.Z,{mdxType:"ControlledPaginatorExample"}),(0,n.mdx)("p",null,"The ",(0,n.mdx)("inlineCode",{parentName:"p"},"ariaLabel")," prop can be used to create a non-visible, but programmatically available accessible name for the paginator and will be used with the aria-describedby to provide additional context to assistive technology users."),(0,n.mdx)("h5",{id:"code-example-1"},"Code Example:"),(0,n.mdx)("p",null,"This example shows how to set up the optional ",(0,n.mdx)("inlineCode",{parentName:"p"},"ariaLabel")," prop in order to provide meaningful context for the paginator:"),(0,n.mdx)(l.Z,{mdxType:"ControlledPaginatorNoPagesExample"}),(0,n.mdx)("h4",{id:"provide-additional-context-to-assistive-technology-users-after-page-nagivation"},"Provide additional context to assistive technology users after page nagivation"),(0,n.mdx)("p",null,"From an accessibility perspective, some additional context is required for users to understand what is happening and where they are when interacting with the paginator."),(0,n.mdx)("p",null,"In order to provide the additional context, a visually hidden text string is constructed and associated with the paginator container.\nThis visually hidden string will be read out by a screen reader when the user navigates using the paginator links. The visually hidden string is empty so nothing is read out in the initial status."),(0,n.mdx)("p",null,"Depending on the optional ",(0,n.mdx)("inlineCode",{parentName:"p"},"totalCount")," prop set or not, the constructed visually hidden text varies:"),(0,n.mdx)("h5",{id:"code-example-2"},"Code Example:"),(0,n.mdx)("p",null,"Using the ",(0,n.mdx)("inlineCode",{parentName:"p"},"totalCount")," prop is best practice and should be used if whenever possible. This example shows when the optional ",(0,n.mdx)("inlineCode",{parentName:"p"},"totalCount"),' prop is set, the paginator would read out a string like "Page {pageNumber} selected. Page {pageNumber} of {pageNumberTotal}":'),(0,n.mdx)(s.Z,{mdxType:"ProgressivePaginatorExample"}),(0,n.mdx)("h5",{id:"code-example-3"},"Code Example:"),(0,n.mdx)("p",null,"This example shows when the optional ",(0,n.mdx)("inlineCode",{parentName:"p"},"totalCount"),' prop is not set, the paginator would read out a string like "Page {pageNumber} selected":'),(0,n.mdx)(d.Z,{mdxType:"ProgressivePaginatorWithoutTotalCountExample"}),(0,n.mdx)("h2",{id:"support-compliance"},"Support Compliance"),(0,n.mdx)("p",null,"Terra is committed to ensuring its components provide maximum possible accessibility. However, simply using Terra components will not automatically make a product accessible."),(0,n.mdx)("p",null,"Final responsibility lies with the consumers of Terra components ","—"," ensuring proper usage, engineers following correct implementation patterns, and authors crafting content that follows best practice guidance ","—"," to make a product fully accessible."),(0,n.mdx)("h3",{id:"wcag-resources"},"WCAG Resources"),(0,n.mdx)("h4",{id:"success-criteria"},"Success Criteria"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"https://www.w3.org/WAI/WCAG21/Understanding/non-text-content"},(0,n.mdx)("strong",{parentName:"a"},"1.1.1 Non-text Content"))," - All non-text content that is presented to the user has a text alternative that serves the equivalent purpose."),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships"},(0,n.mdx)("strong",{parentName:"a"},"1.3.1 Info and Relationships"))," - Information, structure, and relationships conveyed through presentation can be programmatically determined or are available in text. (Level A)"),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"https://www.w3.org/WAI/WCAG21/Understanding/consistent-identification"},(0,n.mdx)("strong",{parentName:"a"},"3.2.4 Consistent Identification"))," - Components that have the same functionality within a set of Web pages are identified consistently."),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"https://www.w3.org/WAI/WCAG21/Understanding/name-role-value"},(0,n.mdx)("strong",{parentName:"a"},"4.1.2 Name, Role, Value"))," - For all user interface components (including but not limited to: form elements, links and components generated by scripts), the name and role can be programmatically determined; states, properties, and values that can be set by the user can be programmatically set; and notification of changes to these items is available to user agents, including assistive technologies.")),(0,n.mdx)("h3",{id:"partial-support--requiring-further-enhancement"},"Partial Support & Requiring Further Enhancement"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"None identified"),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"https://github.com/cerner/terra-core/issues/new/choose"},"Report a problem with this component on ",(0,n.mdx)("strong",{parentName:"a"},"GitHub")))),(0,n.mdx)("p",null,(0,n.mdx)("em",{parentName:"p"},"For more information about Accessibility Support with Terra — go to ",(0,n.mdx)("a",{parentName:"em",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#accessibility-a11y"},"Component Standards: Accessibility (A11y)"),".")))}f.isMDXComponent=!0},66983:function(e,t,a){a.r(t),t.default={"clinical-lowlight-theme":"Button-module__clinical-lowlight-theme___TyZWB","orion-fusion-theme":"Button-module__orion-fusion-theme___q-FcQ",button:"Button-module__button___QuCn2","is-active":"Button-module__is-active___Z8AuK"}},30866:function(e,t,a){a.r(t),t.default={"clinical-lowlight-theme":"Notice-module__clinical-lowlight-theme___aa5xV","orion-fusion-theme":"Notice-module__orion-fusion-theme___QAE-T",notice:"Notice-module__notice___GWkPA",children:"Notice-module__children___lDYsm",accessory:"Notice-module__accessory___wkLOG",title:"Notice-module__title___6H5tc","ux-recommendation":"Notice-module__ux-recommendation___N8BuK",caution:"Notice-module__caution___hPrVl",deprecation:"Notice-module__deprecation___g1drA",maintenance:"Notice-module__maintenance___kWLIZ",important:"Notice-module__important___p5DiF","not-supported":"Notice-module__not-supported___34bHd",paragraph:"Notice-module__paragraph___5h-w1",list:"Notice-module__list___M2Kxj"}},42620:function(e,t,a){a.r(t),t.default={"clinical-lowlight-theme":"Placeholder-module__clinical-lowlight-theme___Obm9K","orion-fusion-theme":"Placeholder-module__orion-fusion-theme___svHY+",placeholder:"Placeholder-module__placeholder___ZZDXd",inner:"Placeholder-module__inner___fJq9o",title:"Placeholder-module__title___teBSo"}}}]);