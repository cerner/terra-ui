"use strict";(self.webpackChunkterra_ui=self.webpackChunkterra_ui||[]).push([[39907,45627,85565,3353,5161,45865,85355,3193,4845,46647,85161,38681,15318,40411,18101,38443],{55303:function(e,t,a){function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}t.Z=void 0;var r=m(a(67294)),i=m(a(28301)),l=m(a(47717)),o=m(a(55142)),s=m(a(96388)),d=m(a(47166)),u=m(a(70695));function m(e){return e&&e.__esModule?e:{default:e}}function c(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(i=r.key,l=void 0,l=function(e,t){if("object"!==n(e)||null===e)return e;var a=e[Symbol.toPrimitive];if(void 0!==a){var r=a.call(e,t||"default");if("object"!==n(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(i,"string"),"symbol"===n(l)?l:String(l)),r)}var i,l}function p(e,t){return p=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},p(e,t)}function h(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,r=x(e);if(t){var i=x(this).constructor;a=Reflect.construct(r,arguments,i)}else a=r.apply(this,arguments);return function(e,t){if(t&&("object"===n(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return f(e)}(this,a)}}function f(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function x(e){return x=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},x(e)}var b=d.default.bind(u.default),g=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&p(e,t)}(u,e);var t,a,n,d=h(u);function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=d.call(this,e)).state={first:"",middle:"",last:""},t.handleFirstChange=t.handleFirstChange.bind(f(t)),t.handleMiddleChange=t.handleMiddleChange.bind(f(t)),t.handleLastChange=t.handleLastChange.bind(f(t)),t}return t=u,(a=[{key:"handleFirstChange",value:function(e){this.setState({first:e.target.value})}},{key:"handleMiddleChange",value:function(e){this.setState({middle:e.target.value})}},{key:"handleLastChange",value:function(e){this.setState({last:e.target.value})}},{key:"render",value:function(){return r.default.createElement(i.default,null,r.default.createElement(i.default.Body,null,r.default.createElement("div",null,r.default.createElement(s.default,{type:"checkbox",legend:"Please Enter Patient full name here",name:"children_present",value:"children_present",error:"All fields must be filled out",help:"Patient Families are eligible for family package plans",required:!0},r.default.createElement(l.default,{label:"First",isInline:!0,required:!0,htmlFor:"first"},r.default.createElement(o.default,{id:"first",type:"text",name:"first",defaultValue:"",onChange:this.handleFirstChange})),r.default.createElement(l.default,{label:"Middle",isInline:!0,required:!0,htmlFor:"middle"},r.default.createElement(o.default,{id:"middle",type:"text",name:"middle",defaultValue:"",onChange:this.handleMiddleChange})),r.default.createElement(l.default,{label:"Last",isInline:!0,required:!0,htmlFor:"last"},r.default.createElement(o.default,{id:"last",type:"text",name:"last",defaultValue:"",onChange:this.handleLastChange}))),r.default.createElement("hr",null),r.default.createElement("p",null,"Patient Full Name Provided:",r.default.createElement("span",{className:b("fieldset-wrapper")},this.state.first," ",this.state.middle," ",this.state.last)),r.default.createElement("br",null))))}}])&&c(t.prototype,a),n&&c(t,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(r.default.Component);t.Z=g},37921:function(e,t,a){a.r(t),a.d(t,{default:function(){return m}});a(67294);var n=a(81254),r=a(43057),i=a(55303),l=["components"];function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},o.apply(this,arguments)}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d={},u="wrapper";function m(e){var t=e.components,a=s(e,l);return(0,n.mdx)(u,o({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.mdx)(r.C,{mdxType:"Badge"}),(0,n.mdx)("h1",{id:"accessibility-guide-for-terra-fieldset"},"Accessibility Guide for Terra Fieldset"),(0,n.mdx)("h2",{id:"why-the-accessibility-of-fieldset-is-important"},"Why the accessibility of Fieldset is important"),(0,n.mdx)("blockquote",null,(0,n.mdx)("p",{parentName:"blockquote"},"Fieldset are some of the most used controls across products. Because they are so ubiquitous, users need to understand their purpose and be able to interact with them. However, if Fieldset are not implemented following best practices, users may fail to understand what the field is for, or worse, may not be able to interact with the input. It is critical to users that all Fieldset must be accessible to effectively understand and interact with a field.")),(0,n.mdx)("h2",{id:"accessibility-considerations"},"Accessibility Considerations"),(0,n.mdx)("h3",{id:"content-considerations-what-do-content-creators-need-to-do"},"Content Considerations: What do content creators need to do?"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"Consider adding instructions at the beginning of the form or when content may be complex or out of the ordinary.",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Use clear and concise wording that helps the user understand what is expected of them."))),(0,n.mdx)("li",{parentName:"ul"},"Ensure all Fieldset have a descriptive label that accurately describes its purpose.",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Work with the engineer to ensure programmatic field names created using ARIA match the visible label of the field.",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"For example, if the visible input label says, “Where do you live” and the programmatic name is “Address”, some users will not be able to activate the control to edit the field."))),(0,n.mdx)("li",{parentName:"ul"},"Ensure each field label is unique to the page.",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"The best practice is to never use the same label for multiple fields that are asking for different data on the same page. For example, two fields named “Address” would be an accessibility barrier for several users. Instead, provide more specific labels like, “Home Address” and “Business Address”."),(0,n.mdx)("li",{parentName:"ul"},"Or groups of related fields can be placed inside of a fieldset which will create the necessary programmatic context. For example, the same page can have two fields named “Address” if each are in their own respective fieldset labeled “Home” and “Work”."))),(0,n.mdx)("li",{parentName:"ul"},"If there is any specific requirement for the user to make a field valid, that requirement must be presented visibly either in the field label or within helper text.",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"If a Fieldset is required, it must be set as required, have the required red asterisk, and the form itself should have instructions that any item marked with the asterisk is required."),(0,n.mdx)("li",{parentName:"ul"},"If there is a specific format to the field, it must be indicated. For example, MM/DD/YYYY for a date, or XXX-XXX-XXXX for a phone number."),(0,n.mdx)("li",{parentName:"ul"},"If a field only accepts numbers, letters, or a certain number of characters, those requirements must also be available to all users in text associated to the field (in helper text or within the Fieldset label). "))),(0,n.mdx)("li",{parentName:"ul"},"When creating error messaging, ensure the message provides enough context the user can understand what the problem is and how to fix it. Use clear and concise messaging."),(0,n.mdx)("li",{parentName:"ul"},"If any icons are used to convey meaning in conjunction with a Fieldset, the icon must have an accessible name (alternate content). For example, a help icon next to a field.",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"The icon must be intuitive for the functionality it represents."),(0,n.mdx)("li",{parentName:"ul"},"The icon must be named consistently across the product and accurately reflect the purpose of the icon."),(0,n.mdx)("li",{parentName:"ul"},"The icons must be used to consistently represent the same function (don’t use multiple icons for the same functionality)."),(0,n.mdx)("li",{parentName:"ul"},"The icon must have alternate content that reflects the Fieldset it is related to, or it must be programmatically associated to the field. Work with engineers when needed to add programmatic association of icons to the fields."))),(0,n.mdx)("li",{parentName:"ul"},"Any purely decorative icon (does not convey ANY meaning) must be marked as decorative."),(0,n.mdx)("li",{parentName:"ul"},"Consider how forms resize and reflow at different breakpoints and form factors.",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Convey to engineers how content should resize and reflow."))),(0,n.mdx)("li",{parentName:"ul"},"Do not override default Fieldset colors."),(0,n.mdx)("li",{parentName:"ul"},"If colors are changed, all Fieldset content (visible label, required asterisk, helper text, instructions, helper text, and the field itself) must meet color contrast requirements against their respective backgrounds."),(0,n.mdx)("li",{parentName:"ul"},"Ensure the engineer understands the logical reading order of the form."),(0,n.mdx)("li",{parentName:"ul"},"After coded:",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Ensure nothing unexpected happens on focus or on input of the Fieldset."),(0,n.mdx)("li",{parentName:"ul"},"Ensure all Fieldset can receive keyboard focus, have a visible keyboard focus indication when in focus, and can be interacted with and acted upon using only the keyboard."),(0,n.mdx)("li",{parentName:"ul"},"Ensure all Fieldset receive focus in the users logical reading order and the focus order does not affect the meaning of content.")))))),(0,n.mdx)("h3",{id:"code-considerations-what-do-engineers-need-to-do"},"Code Considerations: What do engineers need to do?"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"Ensure the code order of Fieldset match the users logical reading order.",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Ensure all Fieldset can receive keyboard focus."),(0,n.mdx)("li",{parentName:"ul"},"Do not override the default keyboard focus indicator unless to reverse out of a dark background for perceivability. Do not override the visible focus indicator."),(0,n.mdx)("li",{parentName:"ul"},"Never implement a TABINDEX value of anything greater than zero."),(0,n.mdx)("li",{parentName:"ul"},"Ensure nothing unexpected happens on focus or on input of a Fieldset."))),(0,n.mdx)("li",{parentName:"ul"},"Work with Content Creators to understand how content should resize and reflow at different breakpoints and form factors to ensure content is not artificially constrained or cut off at smaller view ports."),(0,n.mdx)("li",{parentName:"ul"},"Ensure all Fieldset are implemented correctly to programmatically associate all related content (visible label, helper text, error messaging) to the field",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Ensure the visible Input Label matches any artificially applied programmatic label.",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"For example, the visible Input label is “Where do you live” and an ARIA-LABEL is “Address” would be a failure. Both should match."))),(0,n.mdx)("li",{parentName:"ul"},"Any requirement of the field must be visible with the field. Work with the content creator to understand any requirements (e.g., “required” field, specific format of the field, number of characters of the field, etc.).",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Required fields must have the red asterisk as a required indicator for the user see next to the Fieldset label."))),(0,n.mdx)("li",{parentName:"ul"},"Do not change the placement of any of the related content to other areas around the field. For example, do not move the input label creating large gaps between the field and the label."))),(0,n.mdx)("li",{parentName:"ul"},"Ensure validation can provide the users necessary details to help them resolve any errors.",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Ensure error messaging should provide error suggestions when possible.")))),(0,n.mdx)("div",{"aria-label":"Example Demo"},(0,n.mdx)(i.Z,{mdxType:"FieldsetExampleAccess"})),(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-jsx"},'<div>\n  <Fieldset\n    type="checkbox"\n    legend="Please Enter Patient full name here"\n    name="children_present"\n    value="children_present"\n    error="All fields must be filled out"\n    help="Patient Families are eligible for family package plans"\n    required\n  >\n      <Field label="First" isInline required htmlFor="first">\n        <Input id="first" type="text" name="first" defaultValue="" onChange={this.handleFirstChange} />\n      </Field>\n      <Field label="Middle" isInline required htmlFor="middle">\n        <Input id="middle" type="text" name="middle" defaultValue="" onChange={this.handleMiddleChange} />\n      </Field>\n      <Field label="Last" isInline required htmlFor="last">\n        <Input id="last" type="text" name="last" defaultValue="" onChange={this.handleLastChange} />\n      </Field>\n  </Fieldset>\n  <hr />\n  <p>\n      Patient Full Name Provided:\n      <span className={cx(\'fieldset-wrapper\')}>\n        {this.state.first}\n        {\' \'}\n        {this.state.middle}\n        {\' \'}\n        {this.state.last}\n      </span>\n  </p>\n  <br />\n</div>\n')),(0,n.mdx)("h2",{id:"usability-expectations"},"Usability Expectations"),(0,n.mdx)("h3",{id:"usability-expectations-1"},"Usability Expectations"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"The user expects to understand the purpose of the field and enter details."),(0,n.mdx)("li",{parentName:"ul"},"The user expects to understand any requirements of the field. For example, is it required, does it have a special format, does it only accept certain number of characters, etc.")),(0,n.mdx)("h3",{id:"keyboard-expectations"},"Keyboard Expectations"),(0,n.mdx)("p",null,"In general, all Fieldset should receive initial keyboard focus by tabbing on to the field. Each Fieldset will its own set of keyboard behaviors. See the individual form elements for specific keyboard expectations of each."),(0,n.mdx)("h2",{id:"support-compliance"},"Support Compliance"),(0,n.mdx)("h3",{id:"how-does-terra-fieldset-support-compliance"},"How does Terra Fieldset support compliance?"),(0,n.mdx)("p",null,"Terra is committed to ensuring its components provide maximum possible accessibility. Terra provides the ability to make accessibility products. However, using Terra components will not automatically make a product accessible."),(0,n.mdx)("p",null,"Final responsibility lies with the consumers of Terra components — ensuring proper usage, programmatic context where needed, the words used to label elements, engineers following correct implementation patterns, and authors crafting content that follows best practice guidance — to make a product fully accessible."),(0,n.mdx)("h3",{id:"primary-accessibility-criteria-for-fieldset"},"Primary accessibility criteria for Fieldset"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships.html"},"1.3.1 Info and Relationships")," — Supports",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Terra Fieldset provides the necessary props to programmatically associate related content to the form element within the Fieldset."),(0,n.mdx)("li",{parentName:"ul"},"Engineers must ensure all related content to the Fieldset (required asterisk, helper text, error messaging, etc.) is appropriately associated to the field using the correct Terra props"),(0,n.mdx)("li",{parentName:"ul"},"Content creators must provide engineers with all the related content for each Fieldset."))),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"https://www.w3.org/WAI/WCAG21/Understanding/reflow.html"},"1.4.10 Reflow")," — Supports",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Terra Fieldset support reflow of content."),(0,n.mdx)("li",{parentName:"ul"},"Engineers should work with the content creators to understand how content should reflow at different view port sizes."),(0,n.mdx)("li",{parentName:"ul"},"Content creators should consider how content should reflow at different user view port sizes."))),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-scale.html"},"1.4.4 Resize text")," – Supports",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Terra Fieldset support resizing of text."),(0,n.mdx)("li",{parentName:"ul"},"Engineers should work with the content creators to understand how content should resize."),(0,n.mdx)("li",{parentName:"ul"},"Content creators should consider how content should resize at different user view ports."))),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"https://www.w3.org/WAI/WCAG21/Understanding/keyboard.html"},"2.1.1 Keyboard")," – Supports",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Terra Fieldset itself does not receive focus, but the form elements within them should."),(0,n.mdx)("li",{parentName:"ul"},"Engineers must ensure they do not interfere with the keyboard accessibility of any component."))),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"https://www.w3.org/WAI/WCAG21/Understanding/headings-and-labels.html"},"2.4.6 Headings and Labels")," – Supports ",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Terra provides consuming teams the ability to have meaningful headings and labels with Fieldset."),(0,n.mdx)("li",{parentName:"ul"},"Content creators must provide engineers with headings and Fieldset labels that are descriptive of the purpose of the field or related fields."))),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"https://www.w3.org/TR/UNDERSTANDING-WCAG20/minimize-error-identified.html"},"3.3.1 Error Identification")," – Supports ",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Terra provides the ability to perform error validation."),(0,n.mdx)("li",{parentName:"ul"},"Engineers must implement error validation and ensure error messaging is provided for invalid fields."),(0,n.mdx)("li",{parentName:"ul"},"Content creators must provide error messaging that helps users identify when a field is invalid."))),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"https://www.w3.org/TR/UNDERSTANDING-WCAG20/minimize-error-cues.html"},"3.3.2 Labels or Instructions"),"– Partially Supports ",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Terra provides consuming teams the ability to have labels and instructions with Fieldset."),(0,n.mdx)("li",{parentName:"ul"},"Content creators must provide engineers with instructions when necessary and Fieldset labels that help the user understand what is required of them to complete the Fieldset."))),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"https://www.w3.org/TR/UNDERSTANDING-WCAG20/minimize-error-suggestions.html"},"3.3.3 Error Suggestion")," – Supports ",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"WHAT DOES TERRA PROVIDE IN VALIDATION?"),(0,n.mdx)("li",{parentName:"ul"},"When possible, engineers must ensure form validation can provide the user suggestions on how to successfully complete an errant field."),(0,n.mdx)("li",{parentName:"ul"},"When possible, Content creators provide error messaging that helps the user understand how to successfully complete a field when error detection can automatically be detected.")))),(0,n.mdx)("h3",{id:"related-accessibility-criteria-that-apply-when-adding-content-to-action-header"},"Related accessibility criteria that apply when adding content to action header"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"https://www.w3.org/WAI/WCAG21/Understanding/use-of-color.html"},"1.4.1 Use of Color")," – Supports ",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Terra Fieldset does not use color as the only method to convey information."),(0,n.mdx)("li",{parentName:"ul"},"Content creators must not use color as the only way to convey information to the user."))),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"https://www.w3.org/WAI/WCAG21/Understanding/non-text-contrast.html"},"1.4.11 Non-Text Contrast")," – Supports",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Terra Fieldset itself passes all non-text contrast thresholds on the default white background."),(0,n.mdx)("li",{parentName:"ul"},"Content creators must ensure all non-text that conveys information passes the necessary contrast ratios when the Fieldset appears on anything other than white background."))),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html"},"1.4.3 Contrast (Minimum)")," – Supports",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Text within Terra Fieldset meets the proper contrast ratios when placed on the default white background."),(0,n.mdx)("li",{parentName:"ul"},"Content creators must ensure all text passes the necessary contrast ratios when Fieldset text appears on anything other than white background."))),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"https://www.w3.org/WAI/WCAG21/Understanding/on-focus.html"},"3.2.1 On Focus")," – Supports",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Terra Fieldset does not cause unexpected changes on focus of a field."),(0,n.mdx)("li",{parentName:"ul"},"Engineers must not implement any behavior that would cause a change of user’s context on focus of the field"),(0,n.mdx)("li",{parentName:"ul"},"Content creators must not ask engineers to implement any behaviors that would cause the user a change of context on focus of a field."))),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"https://www.w3.org/WAI/WCAG21/Understanding/on-input"},"3.2.2 On Input")," – Supports ",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Terra Fieldset does not cause unexpected changes on input of a field."),(0,n.mdx)("li",{parentName:"ul"},"Engineers must not implement any behavior that would cause a change of user’s context on input of the field"),(0,n.mdx)("li",{parentName:"ul"},"Content creators must not ask engineers to implement any behaviors that would cause the user a change of context on input of a field.")))),(0,n.mdx)("h3",{id:"supported-features-and-technology"},"Supported Features and Technology"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"Keyboard Interactions "),(0,n.mdx)("li",{parentName:"ul"},"JAWS Support with Chrome (PC) "),(0,n.mdx)("li",{parentName:"ul"},"VoiceOver Support with Chrome, Safari (MAC)  "),(0,n.mdx)("li",{parentName:"ul"},"Speech Input Interactions with assistive technology "),(0,n.mdx)("li",{parentName:"ul"},"Mobile Touch Interactions with Screen Reader assistive technology ")),(0,n.mdx)("h3",{id:"partial-support--requiring-further-enhancement"},"Partial Support & Requiring Further Enhancement"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"https://github.com/cerner/terra-core/issues/new/choose"},"Report a problem with this component on GitHub"))),(0,n.mdx)("h2",{id:"references"},"References:"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"https://www.w3.org/WAI/WCAG21/Understanding/"},"Web Content Accessibility Guidelines (WCAG)")),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"https://webaim.org/techniques/forms/"},"WebAim.org: Creating More Accessible Forms "))))}m.isMDXComponent=!0},43057:function(e,t,a){a.d(t,{C:function(){return i}});var n=a(67294),r=a(22863),i=function(e){var t=e.url;return n.createElement(r.Z,{src:"https://github.com/cerner/terra-core/tree/main/packages/terra-form-fieldset",name:"terra-form-fieldset",version:"2.75.0",url:t})}},70695:function(e,t,a){a.r(t),t.default={"fieldset-wrapper":"FieldsetExamples-module__fieldset-wrapper___peaDn"}},13234:function(e,t,a){a.r(t),t.default={"clinical-lowlight-theme":"Card-module__clinical-lowlight-theme___rpqXf","orion-fusion-theme":"Card-module__orion-fusion-theme___QgHmr",card:"Card-module__card___n9+A2",default:"Card-module__default___Pvv6U",raised:"Card-module__raised___OPyVO"}},64867:function(e,t,a){a.r(t),t.default={"orion-fusion-theme":"CardBody-module__orion-fusion-theme___Xdg9v","clinical-lowlight-theme":"CardBody-module__clinical-lowlight-theme___2YDc3","vertical-padding":"CardBody-module__vertical-padding___xyd9u","horizontal-padding":"CardBody-module__horizontal-padding___wGati","center-content":"CardBody-module__center-content___phyuy"}},28301:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=c(a(67294)),r=c(a(45697)),i=c(a(94184)),l=c(a(47166)),o=c(a(29270)),s=c(a(50026)),d=c(a(13234)),u=c(a(52926)),m=["children","variant","visuallyHiddenText"];function c(e){return e&&e.__esModule?e:{default:e}}function p(){return p=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},p.apply(this,arguments)}function h(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var f=l.default.bind(d.default),x={children:r.default.node,variant:r.default.oneOf(["default","raised"]),visuallyHiddenText:r.default.string},b={variant:"default"},g=function(e){var t=e.children,a=e.variant,r=e.visuallyHiddenText,l=h(e,m),d=n.default.useContext(s.default),u=(0,i.default)(f(["card",a,d.className]),l.className),c=r?n.default.createElement(o.default,{text:r}):null;return n.default.createElement("article",p({},l,{className:u}),c,t)};g.propTypes=x,g.defaultProps=b,g.Body=u.default;var y=g;t.default=y},52926:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=u(a(67294)),r=u(a(45697)),i=u(a(94184)),l=u(a(47166)),o=u(a(50026)),s=u(a(64867)),d=["children","hasPaddingVertical","hasPaddingHorizontal","isContentCentered"];function u(e){return e&&e.__esModule?e:{default:e}}function m(){return m=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},m.apply(this,arguments)}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=l.default.bind(s.default),h={children:r.default.node,hasPaddingVertical:r.default.bool,hasPaddingHorizontal:r.default.bool,isContentCentered:r.default.bool},f=function(e){var t=e.children,a=e.hasPaddingVertical,r=e.hasPaddingHorizontal,l=e.isContentCentered,s=c(e,d),u=n.default.useContext(o.default),h=(0,i.default)(p([{"vertical-padding":a},{"horizontal-padding":r},{"center-content":l},u.className]),s.className);return n.default.createElement("div",m({},s,{className:h}),t)};f.propTypes=h,f.defaultProps={hasPaddingHorizontal:!0,hasPaddingVertical:!0,isContentCentered:!1};var x=f;t.default=x}}]);