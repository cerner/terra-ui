"use strict";(self.webpackChunkterra_ui=self.webpackChunkterra_ui||[]).push([[47979],{78165:function(e,t,a){var n=a(64836),l=a(18698);t.Z=void 0;var r=n(a(27424)),d=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==l(e)&&"function"!=typeof e)return{default:e};var a=p(t);if(a&&a.has(e))return a.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var d in e)if("default"!==d&&Object.prototype.hasOwnProperty.call(e,d)){var i=r?Object.getOwnPropertyDescriptor(e,d):null;i&&(i.get||i.set)?Object.defineProperty(n,d,i):n[d]=e[d]}n.default=e,a&&a.set(e,n);return n}(a(67294)),i=n(a(47166)),m=n(a(26719)),o=n(a(16312));function p(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(p=function(e){return e?a:t})(e)}var u=i.default.bind(o.default),s=function(){var e=(0,d.useState)(""),t=(0,r.default)(e,2),a=t[0],n=t[1],l=(0,d.useState)(!1),i=(0,r.default)(l,2),o=i[0],p=i[1];return d.default.createElement("div",null,d.default.createElement("p",null,"Selected ISO Date:",d.default.createElement("span",{className:u("date-wrapper")},a)),d.default.createElement(m.default,{label:"Enter Date",name:"date-input",datePickerId:"default-field",onChange:function(e,t){n(t),p(!1)},onChangeRaw:function(e,t,a){a.isValidValue||10!==a.inputValue.length||(n(null),p(!0))},isInvalid:o,error:d.default.createElement("p",null,"Enter valid date")}))};t.Z=s},15553:function(e,t,a){a.r(t),a.d(t,{default:function(){return w}});var n=a(67294),l=a(81254),r=a(72509),d=a(78530),i=["components"];function m(){return m=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},m.apply(this,arguments)}function o(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var p={},u="wrapper";function s(e){var t=e.components,a=o(e,i);return(0,l.mdx)(u,m({},p,a,{components:t,mdxType:"MDXLayout"}),(0,l.mdx)(d.ZP,{mdxType:"PropsTable"},(0,l.mdx)(d.X2,{key:"ROW1",mdxType:"Row"},(0,l.mdx)(d.O,{mdxType:"PropNameCell"},"datePickerId"),(0,l.mdx)(d.Di,{mdxType:"TypeCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,l.mdx)(d.dS,{isRequired:!0,mdxType:"RequiredCell"}),(0,l.mdx)(d.mW,{mdxType:"DefaultValueCell"},(0,l.mdx)("p",null,"none")),(0,l.mdx)(d.Ex,{mdxType:"DescriptionCell"},(0,l.mdx)("p",null,"The DatePicker identifier. Links the htmlFor of the field to the select identifier."))),(0,l.mdx)(d.X2,{key:"ROW2",mdxType:"Row"},(0,l.mdx)(d.O,{mdxType:"PropNameCell"},"disabled"),(0,l.mdx)(d.Di,{mdxType:"TypeCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,l.mdx)(d.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,l.mdx)(d.mW,{mdxType:"DefaultValueCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"false\n"))),(0,l.mdx)(d.Ex,{mdxType:"DescriptionCell"},(0,l.mdx)("p",null,"Whether the date input should be disabled."))),(0,l.mdx)(d.X2,{key:"ROW3",mdxType:"Row"},(0,l.mdx)(d.O,{mdxType:"PropNameCell"},"error"),(0,l.mdx)(d.Di,{mdxType:"TypeCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"node\n"))),(0,l.mdx)(d.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,l.mdx)(d.mW,{mdxType:"DefaultValueCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"null\n"))),(0,l.mdx)(d.Ex,{mdxType:"DescriptionCell"},(0,l.mdx)("p",null,"Error message for when the input is invalid. This will only be displayed if isInvalid is true."))),(0,l.mdx)(d.X2,{key:"ROW4",mdxType:"Row"},(0,l.mdx)(d.O,{mdxType:"PropNameCell"},"errorIcon"),(0,l.mdx)(d.Di,{mdxType:"TypeCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"element\n"))),(0,l.mdx)(d.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,l.mdx)(d.mW,{mdxType:"DefaultValueCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"<IconError />\n"))),(0,l.mdx)(d.Ex,{mdxType:"DescriptionCell"},(0,l.mdx)("p",null,"Error Icon to display when the input is invalid."))),(0,l.mdx)(d.X2,{key:"ROW5",mdxType:"Row"},(0,l.mdx)(d.O,{mdxType:"PropNameCell"},"excludeDates"),(0,l.mdx)(d.Di,{mdxType:"TypeCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"arrayOf: [{\n  type: 'string',\n}],\n"))),(0,l.mdx)(d.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,l.mdx)(d.mW,{mdxType:"DefaultValueCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"undefined\n"))),(0,l.mdx)(d.Ex,{mdxType:"DescriptionCell"},(0,l.mdx)("p",null,"An array of ISO 8601 string representation of the dates to disable in the picker."))),(0,l.mdx)(d.X2,{key:"ROW6",mdxType:"Row"},(0,l.mdx)(d.O,{mdxType:"PropNameCell"},"filterDate"),(0,l.mdx)(d.Di,{mdxType:"TypeCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"func\n"))),(0,l.mdx)(d.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,l.mdx)(d.mW,{mdxType:"DefaultValueCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"undefined\n"))),(0,l.mdx)(d.Ex,{mdxType:"DescriptionCell"},(0,l.mdx)("p",null,"A function that gets called for each date in the picker to evaluate which date should be disabled.\nA return value of true will be enabled and false will be disabled."))),(0,l.mdx)(d.X2,{key:"ROW7",mdxType:"Row"},(0,l.mdx)(d.O,{mdxType:"PropNameCell"},"help"),(0,l.mdx)(d.Di,{mdxType:"TypeCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"node\n"))),(0,l.mdx)(d.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,l.mdx)(d.mW,{mdxType:"DefaultValueCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"null\n"))),(0,l.mdx)(d.Ex,{mdxType:"DescriptionCell"},(0,l.mdx)("p",null,"Help element to display with the input."))),(0,l.mdx)(d.X2,{key:"ROW8",mdxType:"Row"},(0,l.mdx)(d.O,{mdxType:"PropNameCell"},"hideRequired"),(0,l.mdx)(d.Di,{mdxType:"TypeCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,l.mdx)(d.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,l.mdx)(d.mW,{mdxType:"DefaultValueCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"false\n"))),(0,l.mdx)(d.Ex,{mdxType:"DescriptionCell"},(0,l.mdx)("p",null,"Whether or not to hide the required indicator on the label."))),(0,l.mdx)(d.X2,{key:"ROW9",mdxType:"Row"},(0,l.mdx)(d.O,{mdxType:"PropNameCell"},"includeDates"),(0,l.mdx)(d.Di,{mdxType:"TypeCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"arrayOf: [{\n  type: 'string',\n}],\n"))),(0,l.mdx)(d.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,l.mdx)(d.mW,{mdxType:"DefaultValueCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"undefined\n"))),(0,l.mdx)(d.Ex,{mdxType:"DescriptionCell"},(0,l.mdx)("p",null,"An array of ISO 8601 string representation of the dates to enable in the picker. All Other dates will be disabled."))),(0,l.mdx)(d.X2,{key:"ROW10",mdxType:"Row"},(0,l.mdx)(d.O,{mdxType:"PropNameCell"},"inputAttributes"),(0,l.mdx)(d.Di,{mdxType:"TypeCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"object\n"))),(0,l.mdx)(d.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,l.mdx)(d.mW,{mdxType:"DefaultValueCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"undefined\n"))),(0,l.mdx)(d.Ex,{mdxType:"DescriptionCell"},(0,l.mdx)("p",null,"Custom input attributes to apply to the date input. Use the name prop to set the name for the input.\nDo not set the name in inputAttribute as it will be ignored."))),(0,l.mdx)(d.X2,{key:"ROW11",mdxType:"Row"},(0,l.mdx)(d.O,{mdxType:"PropNameCell"},"isIncomplete"),(0,l.mdx)(d.Di,{mdxType:"TypeCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,l.mdx)(d.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,l.mdx)(d.mW,{mdxType:"DefaultValueCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"false\n"))),(0,l.mdx)(d.Ex,{mdxType:"DescriptionCell"},(0,l.mdx)("p",null,"Whether the field displays as Incomplete. Use when no value has been provided. ",(0,l.mdx)("em",{parentName:"p"},"(usage note: ",(0,l.mdx)("inlineCode",{parentName:"em"},"required")," must also be set)"),"."))),(0,l.mdx)(d.X2,{key:"ROW12",mdxType:"Row"},(0,l.mdx)(d.O,{mdxType:"PropNameCell"},"isInline"),(0,l.mdx)(d.Di,{mdxType:"TypeCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,l.mdx)(d.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,l.mdx)(d.mW,{mdxType:"DefaultValueCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"false\n"))),(0,l.mdx)(d.Ex,{mdxType:"DescriptionCell"},(0,l.mdx)("p",null,"Whether or not the field is an inline field."))),(0,l.mdx)(d.X2,{key:"ROW13",mdxType:"Row"},(0,l.mdx)(d.O,{mdxType:"PropNameCell"},"isInvalid"),(0,l.mdx)(d.Di,{mdxType:"TypeCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,l.mdx)(d.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,l.mdx)(d.mW,{mdxType:"DefaultValueCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"false\n"))),(0,l.mdx)(d.Ex,{mdxType:"DescriptionCell"},(0,l.mdx)("p",null,"Whether the field displays as Invalid. Use when value does not meet validation pattern."))),(0,l.mdx)(d.X2,{key:"ROW14",mdxType:"Row"},(0,l.mdx)(d.O,{mdxType:"PropNameCell"},"isLabelHidden"),(0,l.mdx)(d.Di,{mdxType:"TypeCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,l.mdx)(d.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,l.mdx)(d.mW,{mdxType:"DefaultValueCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"false\n"))),(0,l.mdx)(d.Ex,{mdxType:"DescriptionCell"},(0,l.mdx)("p",null,"Whether or not the label is visible. Use this props to hide a label while still creating it on the DOM for accessibility."))),(0,l.mdx)(d.X2,{key:"ROW15",mdxType:"Row"},(0,l.mdx)(d.O,{mdxType:"PropNameCell"},"label"),(0,l.mdx)(d.Di,{mdxType:"TypeCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"node\n"))),(0,l.mdx)(d.dS,{isRequired:!0,mdxType:"RequiredCell"}),(0,l.mdx)(d.mW,{mdxType:"DefaultValueCell"},(0,l.mdx)("p",null,"none")),(0,l.mdx)(d.Ex,{mdxType:"DescriptionCell"},(0,l.mdx)("p",null,"The label of the form control children."))),(0,l.mdx)(d.X2,{key:"ROW16",mdxType:"Row"},(0,l.mdx)(d.O,{mdxType:"PropNameCell"},"labelAttrs"),(0,l.mdx)(d.Di,{mdxType:"TypeCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"object\n"))),(0,l.mdx)(d.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,l.mdx)(d.mW,{mdxType:"DefaultValueCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"{}\n"))),(0,l.mdx)(d.Ex,{mdxType:"DescriptionCell"},(0,l.mdx)("p",null,"Attributes to attach to the label."))),(0,l.mdx)(d.X2,{key:"ROW17",mdxType:"Row"},(0,l.mdx)(d.O,{mdxType:"PropNameCell"},"maxDate"),(0,l.mdx)(d.Di,{mdxType:"TypeCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,l.mdx)(d.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,l.mdx)(d.mW,{mdxType:"DefaultValueCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"undefined\n"))),(0,l.mdx)(d.Ex,{mdxType:"DescriptionCell"},(0,l.mdx)("p",null,"An ISO 8601 string representation of the maximum date that can be selected. The value must be in the ",(0,l.mdx)("inlineCode",{parentName:"p"},"YYYY-MM-DD")," format. Must be on or before ",(0,l.mdx)("inlineCode",{parentName:"p"},"12/31/2100"),"."))),(0,l.mdx)(d.X2,{key:"ROW18",mdxType:"Row"},(0,l.mdx)(d.O,{mdxType:"PropNameCell"},"minDate"),(0,l.mdx)(d.Di,{mdxType:"TypeCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,l.mdx)(d.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,l.mdx)(d.mW,{mdxType:"DefaultValueCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"undefined\n"))),(0,l.mdx)(d.Ex,{mdxType:"DescriptionCell"},(0,l.mdx)("p",null,"An ISO 8601 string representation of the minimum date that can be selected. The value must be in the ",(0,l.mdx)("inlineCode",{parentName:"p"},"YYYY-MM-DD")," format. Must be on or after ",(0,l.mdx)("inlineCode",{parentName:"p"},"01/01/1900")))),(0,l.mdx)(d.X2,{key:"ROW19",mdxType:"Row"},(0,l.mdx)(d.O,{mdxType:"PropNameCell"},"name"),(0,l.mdx)(d.Di,{mdxType:"TypeCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,l.mdx)(d.dS,{isRequired:!0,mdxType:"RequiredCell"}),(0,l.mdx)(d.mW,{mdxType:"DefaultValueCell"},(0,l.mdx)("p",null,"none")),(0,l.mdx)(d.Ex,{mdxType:"DescriptionCell"},(0,l.mdx)("p",null,"Name of the date input. The name should be unique."))),(0,l.mdx)(d.X2,{key:"ROW20",mdxType:"Row"},(0,l.mdx)(d.O,{mdxType:"PropNameCell"},"onBlur"),(0,l.mdx)(d.Di,{mdxType:"TypeCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"func\n"))),(0,l.mdx)(d.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,l.mdx)(d.mW,{mdxType:"DefaultValueCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"undefined\n"))),(0,l.mdx)(d.Ex,{mdxType:"DescriptionCell"},(0,l.mdx)("p",null,"A callback function triggered when the date picker component loses focus.\nThis event does not get triggered when the focus is moved from the date input to the calendar button since the focus is still within the main date picker component.\nThe first parameter is the event. The second parameter is the metadata to describe the current state of the input value at the time when the onBlur callback is triggered."))),(0,l.mdx)(d.X2,{key:"ROW21",mdxType:"Row"},(0,l.mdx)(d.O,{mdxType:"PropNameCell"},"onChange"),(0,l.mdx)(d.Di,{mdxType:"TypeCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"func\n"))),(0,l.mdx)(d.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,l.mdx)(d.mW,{mdxType:"DefaultValueCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"undefined\n"))),(0,l.mdx)(d.Ex,{mdxType:"DescriptionCell"},(0,l.mdx)("p",null,"A callback function to execute when a valid date is selected or entered.\nThe first parameter is the event. The second parameter is the changed date value. The third parameter is the metadata to describe the current state of the input value at the time when the onChange callback is triggered."))),(0,l.mdx)(d.X2,{key:"ROW22",mdxType:"Row"},(0,l.mdx)(d.O,{mdxType:"PropNameCell"},"onChangeRaw"),(0,l.mdx)(d.Di,{mdxType:"TypeCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"func\n"))),(0,l.mdx)(d.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,l.mdx)(d.mW,{mdxType:"DefaultValueCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"undefined\n"))),(0,l.mdx)(d.Ex,{mdxType:"DescriptionCell"},(0,l.mdx)("p",null,"A callback function to execute when a change is made in the date input.\nThe first parameter is the event. The second parameter is the changed date value. The third parameter is the metadata to describe the current state of the input value at the time when the onChangeRaw callback is triggered."))),(0,l.mdx)(d.X2,{key:"ROW23",mdxType:"Row"},(0,l.mdx)(d.O,{mdxType:"PropNameCell"},"onClickOutside"),(0,l.mdx)(d.Di,{mdxType:"TypeCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"func\n"))),(0,l.mdx)(d.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,l.mdx)(d.mW,{mdxType:"DefaultValueCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"undefined\n"))),(0,l.mdx)(d.Ex,{mdxType:"DescriptionCell"},(0,l.mdx)("p",null,(0,l.mdx)("strong",{parentName:"p"},"Deprecated"),", A callback function to execute when clicking outside of the picker to dismiss it. Resolves to ",(0,l.mdx)("inlineCode",{parentName:"p"},"onRequestClose"),"."))),(0,l.mdx)(d.X2,{key:"ROW24",mdxType:"Row"},(0,l.mdx)(d.O,{mdxType:"PropNameCell"},"onFocus"),(0,l.mdx)(d.Di,{mdxType:"TypeCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"func\n"))),(0,l.mdx)(d.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,l.mdx)(d.mW,{mdxType:"DefaultValueCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"undefined\n"))),(0,l.mdx)(d.Ex,{mdxType:"DescriptionCell"},(0,l.mdx)("p",null,"A callback function triggered when the date picker component receives focus.\nThis event does not get triggered when the focus is moved from the date input to the calendar button since the focus is still within the main date picker component."))),(0,l.mdx)(d.X2,{key:"ROW25",mdxType:"Row"},(0,l.mdx)(d.O,{mdxType:"PropNameCell"},"onRequestClose"),(0,l.mdx)(d.Di,{mdxType:"TypeCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"func\n"))),(0,l.mdx)(d.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,l.mdx)(d.mW,{mdxType:"DefaultValueCell"},(0,l.mdx)("p",null,"none")),(0,l.mdx)(d.Ex,{mdxType:"DescriptionCell"},(0,l.mdx)("p",null,"A callback function to execute when picker is dismissed. onRequestClose(event)"))),(0,l.mdx)(d.X2,{key:"ROW26",mdxType:"Row"},(0,l.mdx)(d.O,{mdxType:"PropNameCell"},"onSelect"),(0,l.mdx)(d.Di,{mdxType:"TypeCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"func\n"))),(0,l.mdx)(d.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,l.mdx)(d.mW,{mdxType:"DefaultValueCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"undefined\n"))),(0,l.mdx)(d.Ex,{mdxType:"DescriptionCell"},(0,l.mdx)("p",null,"A callback function to execute when a date is selected from within the picker."))),(0,l.mdx)(d.X2,{key:"ROW27",mdxType:"Row"},(0,l.mdx)(d.O,{mdxType:"PropNameCell"},"required"),(0,l.mdx)(d.Di,{mdxType:"TypeCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,l.mdx)(d.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,l.mdx)(d.mW,{mdxType:"DefaultValueCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"false\n"))),(0,l.mdx)(d.Ex,{mdxType:"DescriptionCell"},(0,l.mdx)("p",null,"Whether or not the date field is required."))),(0,l.mdx)(d.X2,{key:"ROW28",mdxType:"Row"},(0,l.mdx)(d.O,{mdxType:"PropNameCell"},"maxWidth"),(0,l.mdx)(d.Di,{mdxType:"TypeCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,l.mdx)(d.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,l.mdx)(d.mW,{mdxType:"DefaultValueCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"undefined\n"))),(0,l.mdx)(d.Ex,{mdxType:"DescriptionCell"},(0,l.mdx)("p",null,"Set the max-width of a field using ",(0,l.mdx)("inlineCode",{parentName:"p"},"length")," or ",(0,l.mdx)("inlineCode",{parentName:"p"},"%"),".  Best practice recommendation to never exceed\na rendered value of 1020px. ",(0,l.mdx)("em",{parentName:"p"},"(Note: Providing custom inline styles will take precedence.)")))),(0,l.mdx)(d.X2,{key:"ROW29",mdxType:"Row"},(0,l.mdx)(d.O,{mdxType:"PropNameCell"},"selectedDate"),(0,l.mdx)(d.Di,{mdxType:"TypeCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,l.mdx)(d.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,l.mdx)(d.mW,{mdxType:"DefaultValueCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"undefined\n"))),(0,l.mdx)(d.Ex,{mdxType:"DescriptionCell"},(0,l.mdx)("p",null,"An ISO 8601 string representation of the initial value to show in the date input.\nThis prop name is derived from react-datepicker but is analogous to value in a form input field."))),(0,l.mdx)(d.X2,{key:"ROW30",mdxType:"Row"},(0,l.mdx)(d.O,{mdxType:"PropNameCell"},"showOptional"),(0,l.mdx)(d.Di,{mdxType:"TypeCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,l.mdx)(d.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,l.mdx)(d.mW,{mdxType:"DefaultValueCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"false\n"))),(0,l.mdx)(d.Ex,{mdxType:"DescriptionCell"},(0,l.mdx)("p",null,"Whether or not to append the 'optional' label to a non-required field label."))),(0,l.mdx)(d.X2,{key:"ROW31",mdxType:"Row"},(0,l.mdx)(d.O,{mdxType:"PropNameCell"},"value"),(0,l.mdx)(d.Di,{mdxType:"TypeCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,l.mdx)(d.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,l.mdx)(d.mW,{mdxType:"DefaultValueCell"},(0,l.mdx)("p",null,"none")),(0,l.mdx)(d.Ex,{mdxType:"DescriptionCell"},(0,l.mdx)("p",null,"The date value. This prop should only be used for a controlled date picker field.\nWhen this prop is set a handler is needed for both the ",(0,l.mdx)("inlineCode",{parentName:"p"},"onChange")," and ",(0,l.mdx)("inlineCode",{parentName:"p"},"onChangeRaw")," props to manage the date value.\nIf both ",(0,l.mdx)("inlineCode",{parentName:"p"},"selectedDate")," and this prop are set, then ",(0,l.mdx)("inlineCode",{parentName:"p"},"selectedDate")," will have no effect.\nThe value must be in the ",(0,l.mdx)("inlineCode",{parentName:"p"},"YYYY-MM-DD")," format or the all-numeric date format based on the locale.")))))}s.isMDXComponent=!0;var c=a(78165),x=["components"];function f(){return f=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},f.apply(this,arguments)}function y(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var h={};function g(e){var t=e.components,a=y(e,x);return(0,l.mdx)("wrapper",f({},h,a,{components:t,mdxType:"MDXLayout"}),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React, { useState } from 'react';\nimport classNames from 'classnames/bind';\nimport DatePickerField from 'terra-date-picker/lib/DatePickerField';\nimport styles from './DatePickerExampleCommon.module.scss';\n\nconst cx = classNames.bind(styles);\n\nconst DatePickerFieldExample = () => {\n  const [date, setDate] = useState('');\n  const [invalid, setInValid] = useState(false);\n\n  const handleDateChange = (event, dateValue) => {\n    setDate(dateValue);\n    setInValid(false);\n  };\n\n  const handleDateChangeRaw = (event, dateValue, metadata) => {\n    if (!metadata.isValidValue && metadata.inputValue.length === 10) {\n      setDate(null);\n      setInValid(true);\n    }\n  };\n\n  return (\n    <div>\n      <p>\n        Selected ISO Date:\n        <span className={cx('date-wrapper')}>{date}</span>\n      </p>\n      <DatePickerField\n        label=\"Enter Date\"\n        name=\"date-input\"\n        datePickerId=\"default-field\"\n        onChange={handleDateChange}\n        onChangeRaw={handleDateChangeRaw}\n        isInvalid={invalid}\n        error={<p>Enter valid date</p>}\n      />\n    </div>\n  );\n};\n\nexport default DatePickerFieldExample;\n\n")))}g.isMDXComponent=!0;var b=a(49271),v=a(81093),T=function(e){var t=e.title,a=e.description,l=e.isExpanded;return n.createElement(b.Z,{title:t||"Date Picker Field",description:a,example:n.createElement(c.Z,null),exampleCssSrc:n.createElement(v.Z,null),exampleSrc:n.createElement(g,null),isExpanded:l})},C=["components"];function O(){return O=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},O.apply(this,arguments)}function N(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var D={},R="wrapper";function w(e){var t=e.components,a=N(e,C);return(0,l.mdx)(R,O({},D,a,{components:t,mdxType:"MDXLayout"}),(0,l.mdx)(r.C,{mdxType:"Badge"}),(0,l.mdx)("h1",{id:"terra-date-picker-field"},"Terra Date Picker Field"),(0,l.mdx)("p",null,(0,l.mdx)("a",{parentName:"p",href:"https://github.com/cerner/terra-framework/tree/main/packages/terra-date-picker"},"terra-date-picker")," component that is wrapped inside a\n",(0,l.mdx)("a",{parentName:"p",href:"https://github.com/cerner/terra-core/tree/main/packages/terra-form-field"},"terra-form-field")," component."),(0,l.mdx)("h2",{id:"getting-started"},"Getting Started"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"Install with ",(0,l.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"npm install terra-date-picker"))))),(0,l.mdx)("h2",{id:"component-features"},"Component Features"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#cross-browser-support"},"Cross-Browser Support")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#responsive-support"},"Responsive Support")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#mobile-support"},"Mobile Support")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#internationalization-i18n"},"Internationalization Support")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#internationalization-i18n"},"Localization Support"))),(0,l.mdx)("h2",{id:"examples"},"Examples"),(0,l.mdx)(T,{title:"Date Picker Field",mdxType:"DatePickerFieldExample"}),(0,l.mdx)("h2",{id:"date-picker-field-props-table"},"Date Picker field props table"),(0,l.mdx)(s,{mdxType:"DatePickerFieldPropsTable"}))}w.isMDXComponent=!0},81093:function(e,t,a){a.d(t,{Z:function(){return o}});a(67294);var n=a(81254),l=["components"];function r(){return r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r.apply(this,arguments)}function d(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var i={},m="wrapper";function o(e){var t=e.components,a=d(e,l);return(0,n.mdx)(m,r({},i,a,{components:t,mdxType:"MDXLayout"}),(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-scss"},":local {\n  .date-wrapper {\n    display: inline-block;\n  }\n}\n\n")))}o.isMDXComponent=!0},72509:function(e,t,a){a.d(t,{C:function(){return r}});var n=a(67294),l=a(22863),r=function(e){var t=e.url;return n.createElement(l.Z,{src:"https://github.com/cerner/terra-framework/tree/main/packages/terra-date-picker",name:"terra-date-picker",version:"4.90.0",url:t})}},16312:function(e,t,a){a.r(t),t.default={"date-wrapper":"DatePickerExampleCommon-module__date-wrapper___UWblk"}},68586:function(e,t,a){a.r(t),t.default={"clinical-lowlight-theme":"Input-module__clinical-lowlight-theme___clY96","orion-fusion-theme":"Input-module__orion-fusion-theme___phvH5","form-input":"Input-module__form-input___Fk8kb","form-error":"Input-module__form-error___aU4hq","form-incomplete":"Input-module__form-incomplete___h4I7H"}},26719:function(e,t,a){var n=a(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(a(10434)),r=n(a(38416)),d=n(a(70215)),i=n(a(67294)),m=n(a(45697)),o=n(a(47717)),p=a(25387),u=n(a(51331)),s=n(a(50754)),c=["datePickerId","disabled","inputAttributes","error","errorIcon","excludeDates","filterDate","help","hideRequired","isIncomplete","isInvalid","isInline","isLabelHidden","includeDates","intl","label","labelAttrs","maxDate","minDate","maxWidth","name","onBlur","onChange","onChangeRaw","onClickOutside","onFocus","onRequestClose","onSelect","required","selectedDate","showOptional","value"];function x(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function f(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?x(Object(a),!0).forEach((function(t){(0,r.default)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):x(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var y={datePickerId:m.default.string.isRequired,disabled:m.default.bool,error:m.default.node,errorIcon:m.default.element,excludeDates:m.default.arrayOf(m.default.string),filterDate:m.default.func,help:m.default.node,hideRequired:m.default.bool,includeDates:m.default.arrayOf(m.default.string),inputAttributes:m.default.object,intl:m.default.shape({formatMessage:m.default.func,locale:m.default.string}).isRequired,isIncomplete:m.default.bool,isInline:m.default.bool,isInvalid:m.default.bool,isLabelHidden:m.default.bool,label:m.default.node.isRequired,labelAttrs:m.default.object,maxDate:m.default.string,minDate:m.default.string,name:m.default.string.isRequired,onBlur:m.default.func,onChange:m.default.func,onChangeRaw:m.default.func,onClickOutside:m.default.func,onFocus:m.default.func,onRequestClose:m.default.func,onSelect:m.default.func,required:m.default.bool,maxWidth:m.default.string,selectedDate:m.default.string,showOptional:m.default.bool,value:m.default.string},h={disabled:!1,error:null,errorIcon:i.default.createElement(u.default,null),excludeDates:void 0,filterDate:void 0,help:null,hideRequired:!1,includeDates:void 0,inputAttributes:void 0,isIncomplete:!1,isInline:!1,isInvalid:!1,isLabelHidden:!1,labelAttrs:{},maxDate:void 0,maxWidth:void 0,minDate:void 0,onBlur:void 0,onChange:void 0,onChangeRaw:void 0,onClickOutside:void 0,onFocus:void 0,onSelect:void 0,required:!1,selectedDate:void 0,showOptional:!1},g=function(e){var t=e.datePickerId,a=e.disabled,n=e.inputAttributes,r=e.error,m=(e.errorIcon,e.excludeDates),p=e.filterDate,u=e.help,x=e.hideRequired,y=e.isIncomplete,h=e.isInvalid,g=e.isInline,b=e.isLabelHidden,v=e.includeDates,T=e.intl,C=e.label,O=e.labelAttrs,N=e.maxDate,D=e.minDate,R=e.maxWidth,w=e.name,j=e.onBlur,k=e.onChange,P=e.onChangeRaw,q=e.onClickOutside,S=e.onFocus,W=e.onRequestClose,E=e.onSelect,I=e.required,V=e.selectedDate,_=e.showOptional,X=e.value,M=(0,d.default)(e,c),F="".concat(t,"-help");r&&h&&(F="".concat(t,"-error ").concat(t,"-help"));var A=n&&n["aria-describedby"],L=n;F&&(L=f(f({},n),{},{"aria-describedby":A?"".concat(F," ").concat(A):F}));var B=T.formatMessage({id:"Terra.datePicker.dateFormat"}),Y=u?i.default.createElement("div",{"aria-label":"".concat(T.formatMessage({id:"Terra.datePicker.dateFormatLabel"})," ").concat(B,", ").concat(u)},"(".concat(B,")")," ",u):i.default.createElement("div",{"aria-label":"".concat(T.formatMessage({id:"Terra.datePicker.dateFormatLabel"})," ").concat(B)},"(".concat(B,")"));return i.default.createElement(o.default,(0,l.default)({},M,{label:C,labelAttrs:O,error:r,help:Y,hideRequired:x,required:I,showOptional:_,isInvalid:h,isInline:g,isLabelHidden:b,htmlFor:t,maxWidth:R}),i.default.createElement(s.default,{disabled:a,id:t,inputAttributes:L,excludeDates:m,filterDate:p,useExternalFormatMask:!0,includeDates:v,isInvalid:h,isIncomplete:y,maxDate:N,minDate:D,ariaLabel:C,name:w,onBlur:j,onChange:k,onChangeRaw:P,onRequestClose:W,onClickOutside:q,onFocus:S,onSelect:E,required:I,selectedDate:V,value:X}))};g.propTypes=y,g.defaultProps=h;var b=(0,p.injectIntl)(g);t.default=b},55142:function(e,t,a){function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=u(a(67294)),r=u(a(45697)),d=u(a(94184)),i=u(a(47166)),m=u(a(50026)),o=u(a(68586)),p=["defaultValue","disabled","isIncomplete","isInvalid","onBlur","onChange","onFocus","onInput","name","pattern","refCallback","required","type","ariaLabel","value"];function u(e){return e&&e.__esModule?e:{default:e}}function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},s.apply(this,arguments)}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function x(e,t,a){return(t=h(t))in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function f(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}function y(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,h(n.key),n)}}function h(e){var t=function(e,t){if("object"!==n(e)||null===e)return e;var a=e[Symbol.toPrimitive];if(void 0!==a){var l=a.call(e,t||"default");if("object"!==n(l))return l;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===n(t)?t:String(t)}function g(e,t){return g=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},g(e,t)}function b(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,l=v(e);if(t){var r=v(this).constructor;a=Reflect.construct(l,arguments,r)}else a=l.apply(this,arguments);return function(e,t){if(t&&("object"===n(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,a)}}function v(e){return v=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},v(e)}var T=i.default.bind(o.default),C={defaultValue:r.default.oneOfType([r.default.string,r.default.number]),disabled:r.default.bool,isIncomplete:r.default.bool,isInvalid:r.default.bool,onBlur:r.default.func,onChange:r.default.func,onFocus:r.default.func,onInput:r.default.func,name:r.default.string,pattern:r.default.string,refCallback:r.default.func,required:r.default.bool,type:r.default.string,value:r.default.oneOfType([r.default.string,r.default.number]),ariaLabel:r.default.string},O={defaultValue:void 0,disabled:!1,isIncomplete:!1,isInvalid:!1,onBlur:void 0,onChange:void 0,onFocus:void 0,onInput:void 0,name:null,pattern:void 0,required:!1,refCallback:void 0,type:void 0,value:void 0},N=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&g(e,t)}(i,e);var t,a,n,r=b(i);function i(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),r.apply(this,arguments)}return t=i,a=[{key:"render",value:function(){var e,t=this.props,a=t.defaultValue,n=t.disabled,r=t.isIncomplete,i=t.isInvalid,m=t.onBlur,o=t.onChange,u=t.onFocus,y=t.onInput,h=t.name,g=t.pattern,b=t.refCallback,v=t.required,C=t.type,O=t.ariaLabel,N=t.value,D=function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){x(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},f(t,p)),R=this.context,w=(void 0===C||["text","number","password","email","search","tel","url","hidden"].includes(C))&&T("form-input",{"form-error":i},{"form-incomplete":r&&v&&!i},R.className),j=(0,d.default)(w,D.className);return D&&Object.prototype.hasOwnProperty.call(D,"aria-label")?e=O||D["aria-label"]:O&&(e=O),D["aria-label"]=e,v&&(D["aria-required"]="true"),void 0!==N?D.value=N:void 0!==a&&(D.defaultValue=a),D.placeholder&&!D.showMpageFusionPlaceholder&&(D.placeholder=null),delete D.showMpageFusionPlaceholder,l.default.createElement("input",s({},D,{ref:function(e){b&&b(e)},name:h,type:C,pattern:g,onBlur:m,onChange:o,onFocus:u,onInput:y,disabled:n,required:v,className:j}))}}],a&&y(t.prototype,a),n&&y(t,n),Object.defineProperty(t,"prototype",{writable:!1}),i}(l.default.Component);N.propTypes=C,N.defaultProps=O,N.contextType=m.default,N.isInput=!0;var D=N;t.default=D}}]);