"use strict";(self.webpackChunkterra_ui=self.webpackChunkterra_ui||[]).push([[24815,45627,85565,3353,5161,45865,85355,3193,4845,46647,85161,38681,15318,40411,18101,38443,11264,34319,20116,33609,12026],{40996:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=s(a(67294)),r=s(a(45697)),l=s(a(19845)),o=s(a(50026)),i=s(a(66983)),d=["children"];function s(e){return e&&e.__esModule?e:{default:e}}function u(){return u=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},u.apply(this,arguments)}function m(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=l.default.bind(i.default),p=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},h=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},f={children:r.default.string},b=function(e){var t=e.children,a=m(e,d),r=n.default.useContext(o.default),i=(0,l.default)(c(["button",r.className]),a.className);return n.default.createElement("button",u({},a,{type:"button",className:i,onBlur:p,onMouseDown:h,"data-focus-styles-enabled":!0}),t)};b.propTypes=f;t.default=b},59278:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=d(a(67294)),r=d(a(45697)),l=d(a(19845)),o=d(a(50026)),i=d(a(30866));function d(e){return e&&e.__esModule?e:{default:e}}var s=l.default.bind(i.default),u={ariaLevel:r.default.oneOf(["2","3","4","5","6"]),children:r.default.node,variant:r.default.oneOf(["ux-recommendation","caution","deprecation","maintenance","important","not-supported"])},m=function(e){var t=e.ariaLevel,a=e.variant,r=e.children,l=n.default.useContext(o.default);return n.default.createElement("div",{className:s("notice",a,l.className)},n.default.createElement("div",{className:s("accessory"),"aria-hidden":"true",focusable:"false"}),n.default.createElement("div",{role:"heading",className:s("title"),"aria-level":t},n.default.createElement("span",null,function(e){return"ux-recommendation"===e?"UX Recommendation":"caution"===e?"Caution":"deprecation"===e?"Deprecation Notice":"maintenance"===e?"In Maintenance":"important"===e?"Important":"not-supported"===e?"Hazards for Incorrect Usage":"error"}(a))),n.default.createElement("div",{className:s("children")},function(e){return"not-supported"===e?n.default.createElement(n.default.Fragment,null,n.default.createElement("p",{className:s("paragraph")},"This component was designed and tested according to the documented implementation."),n.default.createElement("p",{className:s("paragraph")},"Using the component incorrectly:",n.default.createElement("ul",{className:s("list")},n.default.createElement("li",null,"will likely result in improper composition and create accessibility issues"),n.default.createElement("li",null,"may cause erratic or broken behaviors and styles"),n.default.createElement("li",null,n.default.createElement("strong",null,"will not be supported "),"or enhanced to allow for incorrect use")))):null}(a),n.default.Children.map(r,(function(e){return"string"==typeof e?n.default.createElement("p",null,e):e}))))};m.propTypes=u,m.defaultProps={ariaLevel:"2",variant:"important"};t.default=m},47306:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=u(a(67294)),r=u(a(45697)),l=u(a(93967)),o=u(a(19845)),i=u(a(50026)),d=u(a(42620)),s=["title"];function u(e){return e&&e.__esModule?e:{default:e}}function m(){return m=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},m.apply(this,arguments)}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=o.default.bind(d.default),h={title:r.default.string},f=function(e){var t=e.title,a=c(e,s),r=n.default.useContext(i.default),o=(0,l.default)(p(["placeholder",r.className]),a.className),d=p(["inner"]);return n.default.createElement("div",m({},a,{className:o}),n.default.createElement("div",{className:d},n.default.createElement("p",{className:p("title")},t)))};f.propTypes=h,f.defaultProps={title:""};t.default=f},34261:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Button",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(t,"Notice",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(t,"Placeholder",{enumerable:!0,get:function(){return r.default}});var n=o(a(59278)),r=o(a(47306)),l=o(a(40996));function o(e){return e&&e.__esModule?e:{default:e}}},19279:function(e,t,a){a.r(t),a.d(t,{default:function(){return c}});a(67294);var n=a(81254),r=a(44592),l=a(34261),o=a(57204),i=["components"];function d(){return d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},d.apply(this,arguments)}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u={},m="wrapper";function c(e){var t=e.components,a=s(e,i);return(0,n.mdx)(m,d({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.mdx)(r.C,{mdxType:"Badge"}),(0,n.mdx)("h1",{id:"accessibility-guide-for-html-table"},"Accessibility Guide for HTML-Table"),(0,n.mdx)("h2",{id:"why-the-accessibility-of-html-table-is-important"},"Why the accessibility of HTML Table is important?"),(0,n.mdx)("p",null,"Tables are a simple and intuitive way to display tabular information that is related. However, if tables are not made to be accessible, they may not provide the necessary context to understand that tabular data. Inaccessible tables can be confusing and severely cumbersome to understand for some users, especially screen reader users."),(0,n.mdx)("h2",{id:"accessibility-considerations"},"Accessibility Considerations"),(0,n.mdx)("h3",{id:"content-considerations-what-do-content-creators-need-to-do"},"Content Considerations: What do content creators need to do?"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"Consider using a heading before the table or adding a table caption to help users understand the purpose of the table. "),(0,n.mdx)("li",{parentName:"ul"},"Always provide both a table row header and a column header when displaying tabular data. ",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Provide engineers with text for each row and column header where applicable.  "),(0,n.mdx)("li",{parentName:"ul"},"Ensure all headings appropriately describe the content they represent. ",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Row headers should be used to describe the content of a row.  ",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"For example, in a patient list the patient’s name in the first column of the row should be the row header because it describes what the other content is referring to. "),(0,n.mdx)("li",{parentName:"ul"},"In most instances, row headers should be the first column of the table but may be the second column if there are checkboxes in the first. Very rarely should the row header be in a column after the first or second column. "))),(0,n.mdx)("li",{parentName:"ul"},"Each column header must also describe the content within the column. ",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"It is appropriate to have a column header that describes the column filled with all the row headers. For example, the column with a patient name as row header would have a column header “Patient” or “Patient Name” – whatever would best describe the content and purpose of the column."))))),(0,n.mdx)("li",{parentName:"ul"},"Communicate to engineers which column should within a row if it is not the first column. ",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"It is best practice is to have the first or second column used to display row headers.  "),(0,n.mdx)("li",{parentName:"ul"},"Most tables at Cerner should use both row headers and column headers, though there may be a an extremely few instances where a table only requires headers on only one axis. "))))),(0,n.mdx)("li",{parentName:"ul"},"Never use color as the only way to convey information within a table. Instead, use color combined with an icon or text to communicate any meaning. "),(0,n.mdx)("li",{parentName:"ul"},"Ensure all content (text or graphics) added within a table meet the appropriate contrast rations against their background colors. See ",(0,n.mdx)("a",{parentName:"li",href:"https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html"},"1.4.3 Contrast (Minimum)")," and ",(0,n.mdx)("a",{parentName:"li",href:"https://www.w3.org/WAI/WCAG21/Understanding/non-text-contrast.html"},"1.4.10 Non-text Contrast")," for more information. "),(0,n.mdx)("li",{parentName:"ul"},"Consider how content can resize or reflow within the table at smaller breakpoints and screen sizes. ",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Communicate to engineers any guidance for content resizing or reflowing at different breakpoints. ")))),(0,n.mdx)("h3",{id:"code-considerations-what-do-engineers-need-to-do"},"Code Considerations: What do engineers need to do?"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"Do not override the role of any HTML Table, table header, column, row, cell, or other native HTML element that make up an HTML Table. "),(0,n.mdx)("li",{parentName:"ul"},"Do not use Terra HTML-Table to display non-tabular content. For example, do not use tables to layout content for layout purposes only where there is no relationship of data between the columns and rows. "),(0,n.mdx)("li",{parentName:"ul"},"Do not make a table cell, row, or column receive keyboard focus. Only actionable elements within a table should receive keyboard focus. "),(0,n.mdx)("li",{parentName:"ul"},"Do NOT make any part of the HTML Table (rows, columns, cells, etc.) receive keyboard focus - only interactive content within the cells should receive focus. "),(0,n.mdx)("li",{parentName:"ul"},"Engineers are responsible for ensuring all interactive elements within a table can receive keyboard focus, can be interacted with, and acted upon. "),(0,n.mdx)("li",{parentName:"ul"},"Most tables at Cerner will require both column and row headers to ensure tabular relationships can be understood programmatically.")),(0,n.mdx)(l.Notice,{ariaLevel:"4",mdxType:"Notice"},(0,n.mdx)("p",null,"  ",(0,n.mdx)("strong",{parentName:"p"},"Accessibility Guidance: Adding table with offset row header")),(0,n.mdx)("div",{"aria-label":"Example Demo"},(0,n.mdx)(o.Z,{mdxType:"RowHeaderTable"})),(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-jsx"},'  <Table paddingStyle="compact" disableStripes>\n  <caption>\n    Requested Quantities of Aspirin from the Last Six Months (table with row header cells in an offset column)\n  </caption>\n  <Header>\n    <HeaderCell key="ID"><abbr title="Identification Number">Patient ID</abbr></HeaderCell>\n    <HeaderCell key="NAME">Patient Name</HeaderCell>\n    <HeaderCell key="JUL">July</HeaderCell>\n    <HeaderCell key="AUG">August</HeaderCell>\n    <HeaderCell key="SEPT">September</HeaderCell>\n    <HeaderCell key="OCT">October</HeaderCell>\n    <HeaderCell key="NOV">November</HeaderCell>\n    <HeaderCell key="DEC">December</HeaderCell>\n  </Header>\n  <Body>\n    <Row>\n      <Cell key="ID">215</Cell>\n      <HeaderCell key="NAME">Abel</HeaderCell>\n      <Cell key="JUL">5</Cell>\n      <Cell key="AUG">2</Cell>\n      <Cell key="SEPT">0</Cell>\n      <Cell key="OCT">0</Cell>\n      <Cell key="NOV">0</Cell>\n      <Cell key="DEC">3</Cell>\n    </Row>\n    <Row>\n      <Cell key="ID">231</Cell>\n      <HeaderCell key="NAME">Annette </HeaderCell>\n      <Cell key="JUL">0</Cell>\n      <Cell key="AUG">5</Cell>\n      <Cell key="SEPT">3</Cell>\n      <Cell key="OCT">0</Cell>\n      <Cell key="NOV">0</Cell>\n      <Cell key="DEC">6</Cell>\n    </Row>\n    <Row>\n      <Cell key="ID">173</Cell>\n      <HeaderCell key="NAME">Bernard</HeaderCell>\n      <Cell key="JUL">2</Cell>\n      <Cell key="AUG">0</Cell>\n      <Cell key="SEPT">0</Cell>\n      <Cell key="OCT">5</Cell>\n      <Cell key="NOV">0</Cell>\n      <Cell key="DEC">0</Cell>\n    </Row>\n    <Row>\n      <Cell key="ID">141</Cell>\n      <HeaderCell key="NAME">Gerald</HeaderCell>\n      <Cell key="JUL">0</Cell>\n      <Cell key="AUG">10</Cell>\n      <Cell key="SEPT">0</Cell>\n      <Cell key="OCT">0</Cell>\n      <Cell key="NOV">0</Cell>\n      <Cell key="DEC">8</Cell>\n    </Row>\n    <Row>\n      <Cell key="ID">99</Cell>\n      <HeaderCell key="NAME">Michael</HeaderCell>\n      <Cell key="JUL">8</Cell>\n      <Cell key="AUG">8</Cell>\n      <Cell key="SEPT">8</Cell>\n      <Cell key="OCT">8</Cell>\n      <Cell key="NOV">0</Cell>\n      <Cell key="DEC">4</Cell>\n    </Row>\n  </Body>\n</Table>\n'))),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"By default, row headers should be the first column but may be the second column if the first column contains checkboxes to select a row. ",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Work with content creators to understand placement of row headers should the need be different. "),(0,n.mdx)("li",{parentName:"ul"},"Very rarely should row headers be assigned beyond the second column. "))),(0,n.mdx)("li",{parentName:"ul"},"Work with content creators to understand how, if any, resizing or reflow of content may happen at different breakpoints or screen sizes. "),(0,n.mdx)("li",{parentName:"ul"},"Ensure content is coded in the user’s logical reading order of the page. Generally, this is top left to the right and down in a zig zag pattern.")),(0,n.mdx)("h2",{id:"usability-expectations"},"Usability Expectations"),(0,n.mdx)("p",null,"Users expect to understand the relationship of content by using column and row headers that describe cell content."),(0,n.mdx)("h3",{id:"interaction-details"},"Interaction Details"),(0,n.mdx)("p",null,"HTML Table itself is not interactive nor does it receive keyboard focus. "),(0,n.mdx)("h3",{id:"keyboard-expectations"},"Keyboard Expectations"),(0,n.mdx)("p",null,"Users do not have any keyboard expectations from Terra HTML Table because the table, rows, columns, and cells are not actionable. Users would, however, expect all actionable elements within the table to be keyboard accessible."),(0,n.mdx)("h2",{id:"support-compliance"},"Support Compliance"),(0,n.mdx)("p",null,"Terra is committed to ensuring its components provide maximum possible accessibility. Terra provides the ability to make accessibility products. However, using Terra components will not automatically make a product accessible.\nFinal responsibility lies with the consumers of Terra components — ensuring proper usage, programmatic context where needed, the words used to label elements, engineers following correct implementation patterns, and authors crafting content that follows best practice guidance — to make a product fully accessible."),(0,n.mdx)("h3",{id:"primary-criteria"},"Primary Criteria"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("p",{parentName:"li"},(0,n.mdx)("a",{parentName:"p",href:"https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships.html"},"1.3.1 Info and Relationships")," – Supports "),(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Terra HTML tables provides the ability to set column and row headers to appropriately provide necessary context of data. "),(0,n.mdx)("li",{parentName:"ul"},"Engineers must appropriately assign row headers and or column headers to ensure appropriate programmatic context can be conveyed to screen reader users so they may understand the relationships of the table data.  "),(0,n.mdx)("li",{parentName:"ul"},"Work with content creators to understand which columns and rows should be used for the column/row headers. "),(0,n.mdx)("li",{parentName:"ul"},"Engineers must NOT use Terra Table to layout or display content other than tabular content. Tables should only be used with tabular data. "),(0,n.mdx)("li",{parentName:"ul"},"Content creators must communicate to the engineers which content that should be used for column and row headers.  "))),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("p",{parentName:"li"},(0,n.mdx)("a",{parentName:"p",href:"https://www.w3.org/WAI/WCAG21/Understanding/name-role-value.html"},"4.1.2 Name, Role, Value")," – Supports "),(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Terra HTML tables are created using the native HTML components that implicitly have roles defined and can have names assigned by the consuming team. "),(0,n.mdx)("li",{parentName:"ul"},"Engineers must not override the role of any HTML Table, column, row, or other native HTML elements that make up HTML Table.  "),(0,n.mdx)("li",{parentName:"ul"},"Content creators must provide the appropriate names of column and row headers.")))),(0,n.mdx)("h3",{id:"secondary-criteria"},"Secondary Criteria"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("p",{parentName:"li"},(0,n.mdx)("a",{parentName:"p",href:"https://www.w3.org/WAI/WCAG21/Understanding/use-of-color.html"},"1.4.1 Use of Color")," – Supports "),(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Terra HTML Table does not use color to convey information. "),(0,n.mdx)("li",{parentName:"ul"},"Content creators must not use color as the only way to convey meaningful information to the user. "))),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("p",{parentName:"li"},(0,n.mdx)("a",{parentName:"p",href:"https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html"},"1.4.3 Contrast (Minimum)")," – Supports "),(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Terra text meets the appropriate color contrast requirements against default background colors.  "),(0,n.mdx)("li",{parentName:"ul"},"If the default text or background color is not used, content creators are responsible for ensuring all text colors meet the appropriate contrast ratio based upon the background the text appears on top of. "))),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("p",{parentName:"li"},(0,n.mdx)("a",{parentName:"p",href:"https://www.w3.org/WAI/WCAG21/Understanding/resize-text"},"1.4.4 Resize text")," – Supports"),(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Terra HTML table does not restrict the resizing of text. "),(0,n.mdx)("li",{parentName:"ul"},"Engineers must not artificially constrict content and prevent text from resizing. Work with the content creators to understand how content resizes and reflows at various breakpoints. "),(0,n.mdx)("li",{parentName:"ul"},"Content creators must consider how the table and its content would resize and reflow if text is resized by the user up to 200%. "))),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("p",{parentName:"li"},(0,n.mdx)("a",{parentName:"p",href:"https://www.w3.org/WAI/WCAG21/Understanding/keyboard.html"},"2.1.1 Keyboard")," – Supports "),(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Terra Tables nor their cells do not receive keyboard focus by default. This is the user’s expected behavior. "),(0,n.mdx)("li",{parentName:"ul"},"Engineers are responsible for ensuring all interactive elements within a HTML table can receive keyboard focus, can be interacted with, and acted upon.  "),(0,n.mdx)("li",{parentName:"ul"},"Do NOT make HTML Table cells receive keyboard focus - only interactive content within the cells should receive focus. "))),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("p",{parentName:"li"},(0,n.mdx)("a",{parentName:"p",href:"https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-focus-order.html"},"2.4.3 Focus Order")," – Supports "),(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Terra Tables by default do not set the focus order. "),(0,n.mdx)("li",{parentName:"ul"},"Engineers must ensure their code is created in the order of the users logical reading order.  "))),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("p",{parentName:"li"},(0,n.mdx)("a",{parentName:"p",href:"https://www.w3.org/TR/UNDERSTANDING-WCAG20/meaning-other-lang-id.html"},"3.1.2 Language of Parts")," – Does Not Support "),(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Terra HTML Table does not support cell content in a language different than that of the page being used.")))),(0,n.mdx)("h3",{id:"supported-features-and-technology"},"Supported Features and Technology"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"Keyboard Interactions "),(0,n.mdx)("li",{parentName:"ul"},"JAWS Support with Chrome (PC) "),(0,n.mdx)("li",{parentName:"ul"},"NVDA tested (PC) "),(0,n.mdx)("li",{parentName:"ul"},"VoiceOver Support with Chrome, Safari (MAC) ")),(0,n.mdx)("h3",{id:"partial-support--requiring-further-enhancement"},"Partial Support & Requiring Further Enhancement"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("p",{parentName:"li"},"Mobile Touch Interactions with Screen Reader assistive technology ")),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("p",{parentName:"li"},"Speech Input Interactions with assistive technology ")),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("p",{parentName:"li"},(0,n.mdx)("a",{parentName:"p",href:"https://github.com/cerner/terra-core/issues/new/choose"},"Report a problem with this component on GitHub")))),(0,n.mdx)("h3",{id:"linked-references"},"Linked References:"),(0,n.mdx)("ol",null,(0,n.mdx)("li",{parentName:"ol"},(0,n.mdx)("a",{parentName:"li",href:"https://www.w3.org/WAI/tips/writing/#use-headings-to-convey-meaning-and-structure"},"W3C WAI Aria: Table")),(0,n.mdx)("li",{parentName:"ol"},(0,n.mdx)("a",{parentName:"li",href:"https://webaim.org/techniques/tables/"},"WebAim.org: Creating Accessible Tables"))))}c.isMDXComponent=!0},66983:function(e,t,a){a.r(t),t.default={"clinical-lowlight-theme":"Button-module__clinical-lowlight-theme___TyZWB","orion-fusion-theme":"Button-module__orion-fusion-theme___q-FcQ",button:"Button-module__button___QuCn2","is-active":"Button-module__is-active___Z8AuK"}},30866:function(e,t,a){a.r(t),t.default={"clinical-lowlight-theme":"Notice-module__clinical-lowlight-theme___aa5xV","orion-fusion-theme":"Notice-module__orion-fusion-theme___QAE-T",notice:"Notice-module__notice___GWkPA",children:"Notice-module__children___lDYsm",accessory:"Notice-module__accessory___wkLOG",title:"Notice-module__title___6H5tc","ux-recommendation":"Notice-module__ux-recommendation___N8BuK",caution:"Notice-module__caution___hPrVl",deprecation:"Notice-module__deprecation___g1drA",maintenance:"Notice-module__maintenance___kWLIZ",important:"Notice-module__important___p5DiF","not-supported":"Notice-module__not-supported___34bHd",paragraph:"Notice-module__paragraph___5h-w1",list:"Notice-module__list___M2Kxj"}},42620:function(e,t,a){a.r(t),t.default={"clinical-lowlight-theme":"Placeholder-module__clinical-lowlight-theme___Obm9K","orion-fusion-theme":"Placeholder-module__orion-fusion-theme___svHY+",placeholder:"Placeholder-module__placeholder___ZZDXd",inner:"Placeholder-module__inner___fJq9o",title:"Placeholder-module__title___teBSo"}}}]);