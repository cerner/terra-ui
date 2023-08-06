"use strict";(self.webpackChunkterra_ui=self.webpackChunkterra_ui||[]).push([[3986],{12045:function(e,t,a){t.Z=void 0;var r=d(a(67294)),n=d(a(28301)),l=d(a(14581)),i=d(a(47166)),o=d(a(48824));function d(e){return e&&e.__esModule?e:{default:e}}var s=i.default.bind(o.default),u=function(){return r.default.createElement(n.default,null,r.default.createElement(n.default.Body,null,r.default.createElement(l.default,{label:"Allergies Hospitals",placeholder:"Select a location",selectId:"Hospital-location-field",className:s("form-select")},r.default.createElement(l.default.Option,{value:"Kansas,MO",display:"Cerner,Kansas City, MO"}),r.default.createElement(l.default.Option,{value:"Riverport Campus, MO",display:"Cerner Corporation - Riverport Campus"}),r.default.createElement(l.default.Option,{value:"Innovations Campus, MO",display:"Cerner Corporation - Innovations Campus"}),r.default.createElement(l.default.Option,{value:"Realization Campus, MO",display:"Cerner Corporation - Realization Campus"}))))};t.Z=u},94331:function(e,t,a){a.r(t),a.d(t,{default:function(){return m}});a(67294);var r=a(81254),n=a(57739),l=a(12045),i=["components"];function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},o.apply(this,arguments)}function d(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}(0,r.mdx)(n.C,null);var s={},u="wrapper";function m(e){var t=e.components,a=d(e,i);return(0,r.mdx)(u,o({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"form-select---single-select-field-accessibility-guide"},"Form Select - Single Select Field Accessibility Guide"),(0,r.mdx)("h2",{id:"why-the-accessibility-of-select-field-is-important"},"Why the accessibility of Select Field is important"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Select Fields are one of the most used controls to gather data within an interface. Because they are so ubiquitous, users need to understand their purpose and be able to interact with them. However, if select Fields are not implemented following best practices, users may fail to understand what the field is for, or worse, may not be able to interact with the select field. It is critical to users that select fields must be accessible to effectively understand and interact with a field."),(0,r.mdx)("li",{parentName:"ul"},"There are many ways a poorly implemented Select Field can make the field unusable to users: ",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},"All users rely on the Select Field label to tell them what must be selected in the field."),(0,r.mdx)("li",{parentName:"ul"},"All users rely upon good error messaging to help the user understand when a field is invalid and what they must do to successfully complete the field."),(0,r.mdx)("li",{parentName:"ul"},"Blind users need the label to be programmatically associated to the select field for the screen reader to read the label, otherwise they won’t know what to doss."),(0,r.mdx)("li",{parentName:"ul"},"Speech input device users will not be able to activate a field if the field label is not unique or programmatically associated to the field."),(0,r.mdx)("li",{parentName:"ul"},"If Select Field don’t provide meaningful helper text or appropriate note a field is required, the user may not understand how to meet the field requirements.")))),(0,r.mdx)("h2",{id:"accessibility-considerations"},"Accessibility Considerations"),(0,r.mdx)("h3",{id:"content-considerations-what-do-content-creators-need-to-do"},"Content Considerations: What do content creators need to do?"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Consider adding instructions at the beginning of the form when content may be complex or out of the ordinary.",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},"Use clear and concise wording that helps the user understand what is expected of them."))),(0,r.mdx)("li",{parentName:"ul"},"Ensure each select Field has a descriptive label that accurately describes its purpose.",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},"Ensure each select field label is unique to the page.",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},"The best practice is to never use the same label for multiple fields that are asking for different data on the same page."),(0,r.mdx)("li",{parentName:"ul"},"Or groups of related fields can be placed inside of a fieldset which will create the necessary programmatic context."))),(0,r.mdx)("li",{parentName:"ul"},"If there is any specific requirement for the user to make a field valid, that requirement must be presented visibly either in the field label or within helper text.",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},"If a form field is required, it must be set as required, have the required red asterisk, and the form itself should have instructions that any item marked with the asterisk is required."))),(0,r.mdx)("li",{parentName:"ul"},"When creating error messaging, ensure the message provides enough context the user can understand what the problem is and how to fix it. Use clear and concise messaging."),(0,r.mdx)("li",{parentName:"ul"},"If any icons are used to convey meaning in conjunction with a Select Field, the icon must have an accessible name (alternate content). For example, a help icon next to a field.",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},"The icon must be intuitive for the functionality it represents."),(0,r.mdx)("li",{parentName:"ul"},"The icon must be named consistently across the product and accurately reflect the purpose of the icon."),(0,r.mdx)("li",{parentName:"ul"},"The icons must be used to consistently represent the same function (don’t use multiple icons for the same functionality)."),(0,r.mdx)("li",{parentName:"ul"},"The icon must have alternate content that reflects the select field it is related to, or it must be programmatically associated to the field. Work with engineers when needed to add programmatic association of icons to the field."))),(0,r.mdx)("li",{parentName:"ul"},"Any purely decorative icon (does not convey ANY meaning) must be marked as decorative."),(0,r.mdx)("li",{parentName:"ul"},"Consider how forms resize and reflow at different breakpoints and form factors.",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},"Convey to engineers how content should resize and reflow."))),(0,r.mdx)("li",{parentName:"ul"},"Do not override default form field colors.",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},"If colors are changed, all select Field content (visible label, required asterisk, helper text, instructions, helper text, and the field itself) must meet color contrast requirements against their respective backgrounds."))))),(0,r.mdx)("li",{parentName:"ul"},"Ensure the engineer understands the logical reading order of the form."),(0,r.mdx)("li",{parentName:"ul"},"After coded:",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},"Ensure nothing unexpected happens on focus or on select of the select Field."),(0,r.mdx)("li",{parentName:"ul"},"Ensure all form field can receive keyboard focus, have a visible keyboard focus indication when in focus, and can be interacted with and acted upon using only the keyboard."),(0,r.mdx)("li",{parentName:"ul"},"Ensure all form field receive focus in the users logical reading order and the focus order does not affect the meaning of content.")))),(0,r.mdx)("h3",{id:"code-considerations-what-do-engineers-need-to-do"},"Code Considerations: What do engineers need to do?"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Do not override the implicit or explicit role of the Select Field."),(0,r.mdx)("li",{parentName:"ul"},"Ensure the code order of form select field matches the users logical reading order.",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},"Ensure that select Field can receive keyboard focus."),(0,r.mdx)("li",{parentName:"ul"},"Do not override the default keyboard focus indicator unless to reverse out of a dark background for perceivability."),(0,r.mdx)("li",{parentName:"ul"},"Do not implement a TABINDEX value of anything greater than zero."),(0,r.mdx)("li",{parentName:"ul"},"Ensure nothing unexpected happens on focus or on select of a Select Field."))),(0,r.mdx)("li",{parentName:"ul"},"Work with Content Creators to understand how content should resize and reflow at different breakpoints and form factors to ensure content is not artificially constrained or cut off at smaller view ports."),(0,r.mdx)("li",{parentName:"ul"},"Ensure that Select Field is implemented correctly to programmatically associate all related content (visible label, helper text, error messaging) to the field",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},"Ensure the visible select Label matches any artificially applied programmatic label."),(0,r.mdx)("li",{parentName:"ul"},"Do not change the placement of any of the related content to other areas around the field. For example, do not move the select label creating large gaps between the field and the label."))),(0,r.mdx)("li",{parentName:"ul"},"Ensure validation can provide users the necessary details to understand any errors.",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},"Ensure invalid fields can be identified with error messaging.",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},"Error messaging should provide error suggestions when the system can programmatically understand what is wrong.")))))),(0,r.mdx)("div",{"aria-label":"Example Demo"},(0,r.mdx)(l.Z,{mdxType:"SelectFieldExample"})),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},'const cx = classNames.bind(styles);\n\nconst SelectFieldExample = () => (\n  <Card>\n    <Card.Body>\n      <SelectField label="Allergies Hospitals" placeholder="Select a location" selectId="Hospital-location-field" className={cx(\'form-select\')}>\n        <SelectField.Option value="Kansas,MO" display="Cerner,Kansas City, MO" />\n        <SelectField.Option value="Riverport Campus, MO" display="Cerner Corporation - Riverport Campus" />\n        <SelectField.Option value="Innovations Campus, MO" display="Cerner Corporation - Innovations Campus" />\n        <SelectField.Option value="Realization Campus, MO" display="Cerner Corporation - Realization Campus" />\n      </SelectField>\n    </Card.Body>\n  </Card>\n);\n')),(0,r.mdx)("h2",{id:"usability-expectations"},"Usability Expectations"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"The user expects to understand the purpose of the select field."),(0,r.mdx)("li",{parentName:"ul"},"The user expects to understand the state (Expand or collapse) of select field."),(0,r.mdx)("li",{parentName:"ul"},"The user expects to understand any requirements of the select field. For example, is it required, etc.")),(0,r.mdx)("h3",{id:"interaction-detail"},"Interaction Detail"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Select field should be able to receive focus and have item selected in them.")),(0,r.mdx)("h3",{id:"keyboard-expectations"},"Keyboard Expectations"),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Key/Sequence"),(0,r.mdx)("th",{parentName:"tr",align:null},"Expectation"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("em",{parentName:"td"},"Tab")),(0,r.mdx)("td",{parentName:"tr",align:null},"Moves forward or backward to any interactive element including form Select Field")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("em",{parentName:"td"},"Space")),(0,r.mdx)("td",{parentName:"tr",align:null},"When Select Field is focused, will open or close the Select Field dropdown menu depending upon its current state.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("em",{parentName:"td"},"Up/Down")),(0,r.mdx)("td",{parentName:"tr",align:null},"With Select Field in focus and dropdown menu closed, will open the dropdown. Moves focus up/down the Select Field list of options.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("em",{parentName:"td"},"Enter")),(0,r.mdx)("td",{parentName:"tr",align:null},"Selects the selected dropdown menu option.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("em",{parentName:"td"},"Escape")),(0,r.mdx)("td",{parentName:"tr",align:null},"When the Select Field dropdown is open, Escape will close the dropdown.")))),(0,r.mdx)("h2",{id:"support-compliance"},"Support Compliance"),(0,r.mdx)("h3",{id:"primary-accessibility-criteria-for-form-select"},"Primary accessibility criteria for Form Select"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships.html"},"1.3.1 Info and Relationships")," — Supports",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},"Terra Form Select Field natively associates the select label, error messaging, and helper text to the field."),(0,r.mdx)("li",{parentName:"ul"},"Engineers must ensure the label, helper text, and the error messaging are correctly hooked up to the select field."),(0,r.mdx)("li",{parentName:"ul"},"Content creators must convey any visible relationships of content to the select field to the engineer."))),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://www.w3.org/WAI/WCAG21/Understanding/meaningful-sequence.html"},"1.3.2 Meaningful Sequence")," - Supports",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},"Terra Form Select Field generally support to have content read in meaningful order."),(0,r.mdx)("li",{parentName:"ul"},"Engineers must ensure content is coded in the user’s logical order. Engineers must not use a TABINDEX value greater than zero."),(0,r.mdx)("li",{parentName:"ul"},"Creators must ensure the keyboard focus order meets the users expected order and does not affect the meaning of content."))),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html"},"1.4.3 Contrast (Minimum)")," - Supports",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},"Terra Form Select Field labels and text meet the required contrast ratios based on the default text and color backgrounds."),(0,r.mdx)("li",{parentName:"ul"},"If colors are changed, engineers and content creators must ensure text colors meet the appropriate contrast ratio based on their font size and the color they appear against. See 1.4.3 Contrast (Minimum) for more information."))),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://www.w3.org/WAI/WCAG21/Understanding/keyboard.html"},"2.1.1 Keyboard")," - Supports",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},"Terra ensures keyboard accessibility is built into the component."),(0,r.mdx)("li",{parentName:"ul"},"Engineer and Content Creators must ensure all form select field can be accessed and acted upon using only the keyboard after implemented within code."))),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://www.w3.org/WAI/WCAG21/Understanding/focus-order.html"},"2.4.3 Focus Order")," - Supports",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},"Form select field can be coded in the user’s logical read order."),(0,r.mdx)("li",{parentName:"ul"},"Engineers must code the form elements to match the users logical reading order. Engineers must not add a TABINDEX greater than zero."),(0,r.mdx)("li",{parentName:"ul"},"Content creators must ensure the form select field receive focus in the users logical reading order."))),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://www.w3.org/WAI/WCAG21/Understanding/headings-and-labels.html"},"2.4.6 Headings and Labels")," - Partially Supports",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},"Terra Form Select Field provides the ability to create unique and descriptive headings and labels."),(0,r.mdx)("li",{parentName:"ul"},"Engineers must implement a meaningful label provided by content creators."),(0,r.mdx)("li",{parentName:"ul"},"Content creators must provide development a label that accurately describes the purpose of the form select field."))),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://www.w3.org/WAI/WCAG21/Understanding/focus-visible.html"},"2.4.7 Focus Visible")," - Supports",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},"Terra Form Select Field ensures a visible keyboard focus is built into the component."),(0,r.mdx)("li",{parentName:"ul"},"Engineer and Content Creators must ensure all form select field have a visible keyboard focus after implemented within code."))),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://www.w3.org/WAI/WCAG21/Understanding/label-in-name.html"},"2.5.3 Label in Name")," - Supports",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},"Terra Form Select Field provides the consuming team the ability to meet this criterion."),(0,r.mdx)("li",{parentName:"ul"},"Engineers must ensure the programmatic name matches that of the visible form select field label."))),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://www.w3.org/WAI/WCAG21/Understanding/on-focus.html"},"3.2.1 On Focus")," - Supports",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},"Terra Form Select Field does not initiate a change of context on its own."),(0,r.mdx)("li",{parentName:"ul"},"Engineer and Content Creators must ensure nothing unexpected happens on focus of the Select Field."))),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://www.w3.org/WAI/WCAG21/Understanding/on-input.html"},"3.2.2 On Input")," - Partially Supports",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},"Terra Form Select Field does not initiate a change of context on Select."),(0,r.mdx)("li",{parentName:"ul"},"Engineers and content creators must not initiate any change of context on focus of the select field."))),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://www.w3.org/WAI/WCAG22/Understanding/error-identification.html"},"3.3.1 Error Identification")," - Supports",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},"Terra Form Select Field provides the ability to validate field."),(0,r.mdx)("li",{parentName:"ul"},"Engineers must ensure validation is hooked up correctly and the error messaging is appropriately associated to the errant field."),(0,r.mdx)("li",{parentName:"ul"},"Content creators must ensure provide engineers with error messaging for any potential validation error of the field."))),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://www.w3.org/WAI/WCAG22/Understanding/labels-or-instructions.html"},"3.3.2 Labels or Instructions")," - Supports",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},"Terra Form Select Field are clearly marked and labeled."),(0,r.mdx)("li",{parentName:"ul"},"Engineers must ensure form select field are coded correctly for helper text or other instructions are properly associated with the field."),(0,r.mdx)("li",{parentName:"ul"},"Content creators must provide engineers with the proper label and any helper text instructions for formatting requirements of the field."))),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://www.w3.org/WAI/WCAG21/Understanding/error-suggestion.html"},"3.3.3 Error Suggestion")," - Supports",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},"Terra Form Select Field provides the ability to include error suggestion when forms are validated."),(0,r.mdx)("li",{parentName:"ul"},"When the cause of the error can be known to the system, engineers must ensure validation is hooked up correctly and can provide the appropriate error messaging to the user."),(0,r.mdx)("li",{parentName:"ul"},"Content creators must provide engineers with appropriate error messaging to account for a known invalid entry. If possible, the error messaging must provide the user guidance on how to correct the issue."))),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://www.w3.org/WAI/WCAG21/Understanding/name-role-value.html"},"4.1.2 Name, Role, Value")," - Supports",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},"Terra Form Select Field ensure that the proper role is applied and provides consuming teams the ability to set appropriate label for the field."),(0,r.mdx)("li",{parentName:"ul"},"Engineers must not overwrite the default role of the form select field."),(0,r.mdx)("li",{parentName:"ul"},"Content creators must provide development an appropriate label for the form select field.")))),(0,r.mdx)("h3",{id:"related-accessibility-criteria-that-apply-when-adding-content-to-action-header"},"Related accessibility criteria that apply when adding content to action header"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://www.w3.org/WAI/WCAG21/Understanding/reflow.html"},"1.4.10 Reflow")," - Supports",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},"Terra Form Select Field can reflow with content by default."),(0,r.mdx)("li",{parentName:"ul"},"Engineers and content creators must ensure their form layouts can reflow without loss of functionality or scrolling in two directions at up to 400% except when used within tables."))),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://www.w3.org/WAI/WCAG21/Understanding/text-spacing.html"},"1.4.12 Text Spacing")," - Supports",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},"Terra Form Select Field meets this criterion by default."),(0,r.mdx)("li",{parentName:"ul"},"Engineers and content creators must ensure support for this criterion."))),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-scale.html"},"1.4.4 Resize text")," - Supports",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},"Terra Form Select Field resizes natively."),(0,r.mdx)("li",{parentName:"ul"},"Engineers and content creators must ensure their form layouts allow users to resize text up to 200% without the loss of content or functionality."))),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://www.w3.org/TR/UNDERSTANDING-WCAG20/ensure-compat-parses.html"},"4.1.1 Parsing")," - Supports",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},"Terra Select field creates valid HTML code."),(0,r.mdx)("li",{parentName:"ul"},"Engineers must ensure their code is valid.")))),(0,r.mdx)("h3",{id:"supported-features-and-technology"},"Supported Features and Technology"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Keyboard Interactions"),(0,r.mdx)("li",{parentName:"ul"},"JAWS Support with Chrome (PC)"),(0,r.mdx)("li",{parentName:"ul"},"VoiceOver Support with Chrome, Safari (MAC)"),(0,r.mdx)("li",{parentName:"ul"},"Speech Input Interactions with assistive technology"),(0,r.mdx)("li",{parentName:"ul"},"Mobile Touch Interactions with Screen Reader assistive technology")),(0,r.mdx)("h3",{id:"partial-support--requiring-further-enhancement"},"Partial Support & Requiring Further Enhancement"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://github.com/cerner/terra-core/issues/new/choose"},"Report a problem with this component on GitHub"))),(0,r.mdx)("h2",{id:"references"},"References:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://www.w3.org/WAI/WCAG21/Understanding/"},"Web Content Accessibility Guidelines (WCAG)")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://webaim.org/techniques/forms/"},"WebAim.org: Creating More Accessible Forms"))))}m.isMDXComponent=!0},57739:function(e,t,a){a.d(t,{C:function(){return l}});var r=a(67294),n=a(22863),l=function(e){var t=e.url;return r.createElement(n.Z,{src:"https://github.com/cerner/terra-core/tree/main/packages/terra-form-select",name:"terra-form-select",version:"6.44.0",url:t})}},48824:function(e,t,a){a.r(t),t.default={"form-select":"FormSelectDocCommon-module__form-select___Tm1QE"}},13234:function(e,t,a){a.r(t),t.default={"orion-fusion-theme":"Card-module__orion-fusion-theme___QgHmr",card:"Card-module__card___n9+A2",default:"Card-module__default___Pvv6U",raised:"Card-module__raised___OPyVO"}},64867:function(e,t,a){a.r(t),t.default={"orion-fusion-theme":"CardBody-module__orion-fusion-theme___Xdg9v","vertical-padding":"CardBody-module__vertical-padding___xyd9u","horizontal-padding":"CardBody-module__horizontal-padding___wGati","center-content":"CardBody-module__center-content___phyuy"}},28301:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=c(a(67294)),n=c(a(45697)),l=c(a(94184)),i=c(a(47166)),o=c(a(29270)),d=c(a(50026)),s=c(a(13234)),u=c(a(52926)),m=["children","variant","visuallyHiddenText"];function c(e){return e&&e.__esModule?e:{default:e}}function p(){return p=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},p.apply(this,arguments)}function f(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var h=i.default.bind(s.default),x={children:n.default.node,variant:n.default.oneOf(["default","raised"]),visuallyHiddenText:n.default.string},g={variant:"default"},b=function(e){var t=e.children,a=e.variant,n=e.visuallyHiddenText,i=f(e,m),s=r.default.useContext(d.default),u=(0,l.default)(h(["card",a,s.className]),i.className),c=n?r.default.createElement(o.default,{text:n}):null;return r.default.createElement("article",p({},i,{className:u}),c,t)};b.propTypes=x,b.defaultProps=g,b.Body=u.default;var v=b;t.default=v},52926:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=u(a(67294)),n=u(a(45697)),l=u(a(94184)),i=u(a(47166)),o=u(a(50026)),d=u(a(64867)),s=["children","hasPaddingVertical","hasPaddingHorizontal","isContentCentered"];function u(e){return e&&e.__esModule?e:{default:e}}function m(){return m=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},m.apply(this,arguments)}function c(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=i.default.bind(d.default),f={children:n.default.node,hasPaddingVertical:n.default.bool,hasPaddingHorizontal:n.default.bool,isContentCentered:n.default.bool},h=function(e){var t=e.children,a=e.hasPaddingVertical,n=e.hasPaddingHorizontal,i=e.isContentCentered,d=c(e,s),u=r.default.useContext(o.default),f=(0,l.default)(p([{"vertical-padding":a},{"horizontal-padding":n},{"center-content":i},u.className]),d.className);return r.default.createElement("div",m({},d,{className:f}),t)};h.propTypes=f,h.defaultProps={hasPaddingHorizontal:!0,hasPaddingVertical:!0,isContentCentered:!1};var x=h;t.default=x},92577:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=v(a(67294)),n=v(a(45697)),l=v(a(44845)),i=v(a(88413)),o=v(a(87786)),d=v(a(30555)),s=v(a(13975)),u=v(a(96788)),m=v(a(97996)),c=v(a(14708)),p=["variant"],f=["maxSelectionCount"],h=["allowClear"],x=["maxSelectionCount"],g=["noResultContent","allowClear"],b=["isTouchAccessible","maxSelectionCount","onSearch","optionFilter"];function v(e){return e&&e.__esModule?e:{default:e}}function y(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var N={allowClear:n.default.bool,children:n.default.node,defaultValue:n.default.oneOfType([n.default.string,n.default.number,n.default.array]),disabled:n.default.bool,dropdownAttrs:n.default.object,isIncomplete:n.default.bool,isInvalid:n.default.bool,isTouchAccessible:n.default.bool,maxHeight:n.default.number,maxSelectionCount:n.default.number,noResultContent:n.default.node,onBlur:n.default.func,onChange:n.default.func,onClick:n.default.func,onDeselect:n.default.func,onFocus:n.default.func,onSearch:n.default.func,onSelect:n.default.func,optionFilter:n.default.func,placeholder:n.default.string,required:n.default.bool,value:n.default.oneOfType([n.default.string,n.default.number,n.default.array]),variant:n.default.oneOf([l.default.COMBOBOX,l.default.DEFAULT,l.default.MULTIPLE,l.default.SEARCH,l.default.TAG])},w={allowClear:!1,children:void 0,defaultValue:void 0,disabled:!1,dropdownAttrs:void 0,isIncomplete:!1,isInvalid:!1,isTouchAccessible:!1,maxSelectionCount:void 0,noResultContent:void 0,onChange:void 0,onDeselect:void 0,onSearch:void 0,onSelect:void 0,optionFilter:void 0,placeholder:void 0,required:!1,value:void 0,variant:"default"};function C(e){var t=e.variant,a=y(e,p);switch(t){case l.default.COMBOBOX:a.maxSelectionCount;var n=y(a,f);return r.default.createElement(d.default,n);case l.default.MULTIPLE:a.allowClear;var i=y(a,h);return r.default.createElement(u.default,i);case l.default.SEARCH:a.maxSelectionCount;var o=y(a,x);return r.default.createElement(m.default,o);case l.default.TAG:a.noResultContent,a.allowClear;var v=y(a,g);return r.default.createElement(c.default,v);case l.default.DEFAULT:default:a.isTouchAccessible,a.maxSelectionCount,a.onSearch,a.optionFilter;var N=y(a,b);return r.default.createElement(s.default,N)}}C.Option=i.default,C.OptGroup=o.default,C.propTypes=N,C.defaultProps=w,C.isSelect=!0;var S=C;t.default=S},14581:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=u(a(67294)),n=u(a(45697)),l=a(25387),i=u(a(47717)),o=u(a(92577)),d=u(a(44845)),s=["allowClear","children","defaultValue","disabled","error","help","hideRequired","intl","isIncomplete","isInline","isInvalid","isLabelHidden","isTouchAccessible","label","labelAttrs","maxSelectionCount","maxHeight","maxWidth","onChange","placeholder","required","selectAttrs","selectId","showOptional","value","variant"];function u(e){return e&&e.__esModule?e:{default:e}}function m(){return m=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},m.apply(this,arguments)}function c(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p={allowClear:n.default.bool,children:n.default.node,label:n.default.string.isRequired,defaultValue:n.default.oneOfType([n.default.array,n.default.number,n.default.string]),disabled:n.default.bool,error:n.default.node,help:n.default.node,hideRequired:n.default.bool,intl:n.default.shape({formatMessage:n.default.func}).isRequired,isIncomplete:n.default.bool,isInline:n.default.bool,isInvalid:n.default.bool,isLabelHidden:n.default.bool,isTouchAccessible:n.default.bool,labelAttrs:n.default.object,maxHeight:n.default.number,maxSelectionCount:n.default.number,maxWidth:n.default.string,onChange:n.default.func,placeholder:n.default.string,required:n.default.bool,selectAttrs:n.default.object,selectId:n.default.string.isRequired,showOptional:n.default.bool,value:n.default.oneOfType([n.default.array,n.default.number,n.default.string]),variant:n.default.oneOf([d.default.COMBOBOX,d.default.DEFAULT,d.default.MULTIPLE,d.default.SEARCH,d.default.TAG])},f={allowClear:!1,children:void 0,defaultValue:void 0,disabled:!1,error:void 0,help:void 0,hideRequired:!1,isIncomplete:!1,isInline:!1,isInvalid:!1,isLabelHidden:!1,isTouchAccessible:!1,labelAttrs:{},maxSelectionCount:void 0,maxHeight:void 0,maxWidth:void 0,onChange:void 0,placeholder:void 0,required:!1,selectAttrs:{},showOptional:!1,value:void 0,variant:"default"},h=function(e){var t,a=e.allowClear,n=e.children,l=e.defaultValue,d=e.disabled,u=e.error,p=e.help,f=e.hideRequired,h=e.intl,x=e.isIncomplete,g=e.isInline,b=e.isInvalid,v=e.isLabelHidden,y=e.isTouchAccessible,N=e.label,w=e.labelAttrs,C=e.maxSelectionCount,S=e.maxHeight,O=e.maxWidth,A=e.onChange,E=e.placeholder,F=e.required,I=e.selectAttrs,T=e.selectId,_=e.showOptional,W=e.value,k=e.variant,j=c(e,s),P=p;if(void 0!==C&&C>=2){var q=h.formatMessage({id:"Terra.form.select.maxSelectionHelp"},{text:C});P=p?r.default.createElement("span",null,q," ",p):q}return p&&u&&b?t="".concat(T,"-error ").concat(T,"-help"):(p&&(t="".concat(T,"-help")),u&&b&&(t="".concat(T,"-error"))),r.default.createElement(i.default,m({},j,{label:N,labelAttrs:w,error:u,help:P,hideRequired:f,required:F,showOptional:_,isInvalid:b,isInline:g,isLabelHidden:v,htmlFor:T,maxWidth:O}),r.default.createElement(o.default,m({},I,{ariaLabel:N,allowClear:a,"aria-describedby":t,disabled:I.disabled||d,id:T,isIncomplete:x,isInvalid:b,isTouchAccessible:y,defaultValue:l,maxHeight:S||I.maxHeight,maxSelectionCount:void 0!==C&&C<2?void 0:C,onChange:A,placeholder:E,required:F,value:W,variant:k}),n))};h.propTypes=p,h.defaultProps=f,h.Option=o.default.Option,h.OptGroup=o.default.OptGroup;var x=(0,l.injectIntl)(h);t.default=x}}]);