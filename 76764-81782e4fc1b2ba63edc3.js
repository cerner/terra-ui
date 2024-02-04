(self.webpackChunkterra_ui=self.webpackChunkterra_ui||[]).push([[76764,83532,61152,38768,79316,16388,73056,50676,28296,5912,4484,82104,96528,74148,51768,56936,34552,7004,9492,84624,12172,68840,62240,39860,46460,95100,76480,54100,60588,24080,38208,15824,93444,50112],{98372:function(e,a,l){"use strict";var t=l(22411),n=l(59848);a.c=void 0;var d=t(l(97936)),r=function(e,a){if(!a&&e&&e.__esModule)return e;if(null===e||"object"!=n(e)&&"function"!=typeof e)return{default:e};var l=s(a);if(l&&l.has(e))return l.get(e);var t={__proto__:null},d=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if("default"!==r&&Object.prototype.hasOwnProperty.call(e,r)){var m=d?Object.getOwnPropertyDescriptor(e,r):null;m&&(m.get||m.set)?Object.defineProperty(t,r,m):t[r]=e[r]}return t.default=e,l&&l.set(e,t),t}(l(11504)),m=t(l(74824)),i=t(l(33300)),p=t(l(86448));function s(e){if("function"!=typeof WeakMap)return null;var a=new WeakMap,l=new WeakMap;return(s=function(e){return e?l:a})(e)}var o=m.default.bind(p.default);a.c=function(){var e=(0,r.useState)(""),a=(0,d.default)(e,2),l=a[0],t=a[1],n=(0,r.useState)(!1),m=(0,d.default)(n,2),p=m[0],s=m[1];return r.default.createElement("div",null,r.default.createElement("p",null,"Selected ISO Date:",r.default.createElement("span",{className:o("date-wrapper")},l)),r.default.createElement(i.default,{label:"Enter Date",name:"date-input",datePickerId:"default-field",onChange:function(e,a){t(a),s(!1)},onChangeRaw:function(e,a,l){l.isValidValue||10!==l.inputValue.length||(t(null),s(!0))},isInvalid:p,error:r.default.createElement("p",null,"Enter valid date")}))}},24648:function(e,a,l){"use strict";l.r(a),l.d(a,{default:function(){return D}});var t=l(11504),n=l(69788),d=l(35236),r=l(28744),m=["components"];function i(){return i=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var l=arguments[a];for(var t in l)Object.prototype.hasOwnProperty.call(l,t)&&(e[t]=l[t])}return e},i.apply(this,arguments)}function p(e,a){if(null==e)return{};var l,t,n=function(e,a){if(null==e)return{};var l,t,n={},d=Object.keys(e);for(t=0;t<d.length;t++)l=d[t],a.indexOf(l)>=0||(n[l]=e[l]);return n}(e,a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(e);for(t=0;t<d.length;t++)l=d[t],a.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(n[l]=e[l])}return n}var s={},o="wrapper";function u(e){var a=e.components,l=p(e,m);return(0,n.mdx)(o,i({},s,l,{components:a,mdxType:"MDXLayout"}),(0,n.mdx)(r.cp,{mdxType:"PropsTable"},(0,n.mdx)(r.WA,{key:"ROW1",mdxType:"Row"},(0,n.mdx)(r.qe,{mdxType:"PropNameCell"},"datePickerId"),(0,n.mdx)(r.aI,{mdxType:"TypeCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,n.mdx)(r.Ke,{isRequired:!0,mdxType:"RequiredCell"}),(0,n.mdx)(r._w,{mdxType:"DefaultValueCell"},(0,n.mdx)("p",null,"none")),(0,n.mdx)(r.uC,{mdxType:"DescriptionCell"},(0,n.mdx)("p",null,"The DatePicker identifier. Links the htmlFor of the field to the select identifier."))),(0,n.mdx)(r.WA,{key:"ROW2",mdxType:"Row"},(0,n.mdx)(r.qe,{mdxType:"PropNameCell"},"disabled"),(0,n.mdx)(r.aI,{mdxType:"TypeCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,n.mdx)(r.Ke,{isRequired:!1,mdxType:"RequiredCell"}),(0,n.mdx)(r._w,{mdxType:"DefaultValueCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"false\n"))),(0,n.mdx)(r.uC,{mdxType:"DescriptionCell"},(0,n.mdx)("p",null,"Whether the date input should be disabled."))),(0,n.mdx)(r.WA,{key:"ROW3",mdxType:"Row"},(0,n.mdx)(r.qe,{mdxType:"PropNameCell"},"error"),(0,n.mdx)(r.aI,{mdxType:"TypeCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"node\n"))),(0,n.mdx)(r.Ke,{isRequired:!1,mdxType:"RequiredCell"}),(0,n.mdx)(r._w,{mdxType:"DefaultValueCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"null\n"))),(0,n.mdx)(r.uC,{mdxType:"DescriptionCell"},(0,n.mdx)("p",null,"Error message for when the input is invalid. This will only be displayed if isInvalid is true."))),(0,n.mdx)(r.WA,{key:"ROW4",mdxType:"Row"},(0,n.mdx)(r.qe,{mdxType:"PropNameCell"},"errorIcon"),(0,n.mdx)(r.aI,{mdxType:"TypeCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"element\n"))),(0,n.mdx)(r.Ke,{isRequired:!1,mdxType:"RequiredCell"}),(0,n.mdx)(r._w,{mdxType:"DefaultValueCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"<IconError />\n"))),(0,n.mdx)(r.uC,{mdxType:"DescriptionCell"},(0,n.mdx)("p",null,"Error Icon to display when the input is invalid."))),(0,n.mdx)(r.WA,{key:"ROW5",mdxType:"Row"},(0,n.mdx)(r.qe,{mdxType:"PropNameCell"},"excludeDates"),(0,n.mdx)(r.aI,{mdxType:"TypeCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"arrayOf: [{\n  type: 'string',\n}],\n"))),(0,n.mdx)(r.Ke,{isRequired:!1,mdxType:"RequiredCell"}),(0,n.mdx)(r._w,{mdxType:"DefaultValueCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"undefined\n"))),(0,n.mdx)(r.uC,{mdxType:"DescriptionCell"},(0,n.mdx)("p",null,"An array of ISO 8601 string representation of the dates to disable in the picker."))),(0,n.mdx)(r.WA,{key:"ROW6",mdxType:"Row"},(0,n.mdx)(r.qe,{mdxType:"PropNameCell"},"filterDate"),(0,n.mdx)(r.aI,{mdxType:"TypeCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"func\n"))),(0,n.mdx)(r.Ke,{isRequired:!1,mdxType:"RequiredCell"}),(0,n.mdx)(r._w,{mdxType:"DefaultValueCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"undefined\n"))),(0,n.mdx)(r.uC,{mdxType:"DescriptionCell"},(0,n.mdx)("p",null,"A function that gets called for each date in the picker to evaluate which date should be disabled.\nA return value of true will be enabled and false will be disabled."))),(0,n.mdx)(r.WA,{key:"ROW7",mdxType:"Row"},(0,n.mdx)(r.qe,{mdxType:"PropNameCell"},"help"),(0,n.mdx)(r.aI,{mdxType:"TypeCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"node\n"))),(0,n.mdx)(r.Ke,{isRequired:!1,mdxType:"RequiredCell"}),(0,n.mdx)(r._w,{mdxType:"DefaultValueCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"null\n"))),(0,n.mdx)(r.uC,{mdxType:"DescriptionCell"},(0,n.mdx)("p",null,"Help element to display with the input."))),(0,n.mdx)(r.WA,{key:"ROW8",mdxType:"Row"},(0,n.mdx)(r.qe,{mdxType:"PropNameCell"},"hideRequired"),(0,n.mdx)(r.aI,{mdxType:"TypeCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,n.mdx)(r.Ke,{isRequired:!1,mdxType:"RequiredCell"}),(0,n.mdx)(r._w,{mdxType:"DefaultValueCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"false\n"))),(0,n.mdx)(r.uC,{mdxType:"DescriptionCell"},(0,n.mdx)("p",null,"Whether or not to hide the required indicator on the label."))),(0,n.mdx)(r.WA,{key:"ROW9",mdxType:"Row"},(0,n.mdx)(r.qe,{mdxType:"PropNameCell"},"includeDates"),(0,n.mdx)(r.aI,{mdxType:"TypeCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"arrayOf: [{\n  type: 'string',\n}],\n"))),(0,n.mdx)(r.Ke,{isRequired:!1,mdxType:"RequiredCell"}),(0,n.mdx)(r._w,{mdxType:"DefaultValueCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"undefined\n"))),(0,n.mdx)(r.uC,{mdxType:"DescriptionCell"},(0,n.mdx)("p",null,"An array of ISO 8601 string representation of the dates to enable in the picker. All Other dates will be disabled."))),(0,n.mdx)(r.WA,{key:"ROW10",mdxType:"Row"},(0,n.mdx)(r.qe,{mdxType:"PropNameCell"},"inputAttributes"),(0,n.mdx)(r.aI,{mdxType:"TypeCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"object\n"))),(0,n.mdx)(r.Ke,{isRequired:!1,mdxType:"RequiredCell"}),(0,n.mdx)(r._w,{mdxType:"DefaultValueCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"undefined\n"))),(0,n.mdx)(r.uC,{mdxType:"DescriptionCell"},(0,n.mdx)("p",null,"Custom input attributes to apply to the date input. Use the name prop to set the name for the input.\nDo not set the name in inputAttribute as it will be ignored."))),(0,n.mdx)(r.WA,{key:"ROW11",mdxType:"Row"},(0,n.mdx)(r.qe,{mdxType:"PropNameCell"},"isIncomplete"),(0,n.mdx)(r.aI,{mdxType:"TypeCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,n.mdx)(r.Ke,{isRequired:!1,mdxType:"RequiredCell"}),(0,n.mdx)(r._w,{mdxType:"DefaultValueCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"false\n"))),(0,n.mdx)(r.uC,{mdxType:"DescriptionCell"},(0,n.mdx)("p",null,"Whether the field displays as Incomplete. Use when no value has been provided. ",(0,n.mdx)("em",{parentName:"p"},"(usage note: ",(0,n.mdx)("inlineCode",{parentName:"em"},"required")," must also be set)"),"."))),(0,n.mdx)(r.WA,{key:"ROW12",mdxType:"Row"},(0,n.mdx)(r.qe,{mdxType:"PropNameCell"},"isInline"),(0,n.mdx)(r.aI,{mdxType:"TypeCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,n.mdx)(r.Ke,{isRequired:!1,mdxType:"RequiredCell"}),(0,n.mdx)(r._w,{mdxType:"DefaultValueCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"false\n"))),(0,n.mdx)(r.uC,{mdxType:"DescriptionCell"},(0,n.mdx)("p",null,"Whether or not the field is an inline field."))),(0,n.mdx)(r.WA,{key:"ROW13",mdxType:"Row"},(0,n.mdx)(r.qe,{mdxType:"PropNameCell"},"isInvalid"),(0,n.mdx)(r.aI,{mdxType:"TypeCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,n.mdx)(r.Ke,{isRequired:!1,mdxType:"RequiredCell"}),(0,n.mdx)(r._w,{mdxType:"DefaultValueCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"false\n"))),(0,n.mdx)(r.uC,{mdxType:"DescriptionCell"},(0,n.mdx)("p",null,"Whether the field displays as Invalid. Use when value does not meet validation pattern."))),(0,n.mdx)(r.WA,{key:"ROW14",mdxType:"Row"},(0,n.mdx)(r.qe,{mdxType:"PropNameCell"},"isLabelHidden"),(0,n.mdx)(r.aI,{mdxType:"TypeCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,n.mdx)(r.Ke,{isRequired:!1,mdxType:"RequiredCell"}),(0,n.mdx)(r._w,{mdxType:"DefaultValueCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"false\n"))),(0,n.mdx)(r.uC,{mdxType:"DescriptionCell"},(0,n.mdx)("p",null,"Whether or not the label is visible. Use this props to hide a label while still creating it on the DOM for accessibility."))),(0,n.mdx)(r.WA,{key:"ROW15",mdxType:"Row"},(0,n.mdx)(r.qe,{mdxType:"PropNameCell"},"label"),(0,n.mdx)(r.aI,{mdxType:"TypeCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"node\n"))),(0,n.mdx)(r.Ke,{isRequired:!0,mdxType:"RequiredCell"}),(0,n.mdx)(r._w,{mdxType:"DefaultValueCell"},(0,n.mdx)("p",null,"none")),(0,n.mdx)(r.uC,{mdxType:"DescriptionCell"},(0,n.mdx)("p",null,"The label of the form control children."))),(0,n.mdx)(r.WA,{key:"ROW16",mdxType:"Row"},(0,n.mdx)(r.qe,{mdxType:"PropNameCell"},"labelAttrs"),(0,n.mdx)(r.aI,{mdxType:"TypeCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"object\n"))),(0,n.mdx)(r.Ke,{isRequired:!1,mdxType:"RequiredCell"}),(0,n.mdx)(r._w,{mdxType:"DefaultValueCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"{}\n"))),(0,n.mdx)(r.uC,{mdxType:"DescriptionCell"},(0,n.mdx)("p",null,"Attributes to attach to the label."))),(0,n.mdx)(r.WA,{key:"ROW17",mdxType:"Row"},(0,n.mdx)(r.qe,{mdxType:"PropNameCell"},"maxDate"),(0,n.mdx)(r.aI,{mdxType:"TypeCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,n.mdx)(r.Ke,{isRequired:!1,mdxType:"RequiredCell"}),(0,n.mdx)(r._w,{mdxType:"DefaultValueCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"undefined\n"))),(0,n.mdx)(r.uC,{mdxType:"DescriptionCell"},(0,n.mdx)("p",null,"An ISO 8601 string representation of the maximum date that can be selected. The value must be in the ",(0,n.mdx)("inlineCode",{parentName:"p"},"YYYY-MM-DD")," format. Must be on or before ",(0,n.mdx)("inlineCode",{parentName:"p"},"12/31/2100"),"."))),(0,n.mdx)(r.WA,{key:"ROW18",mdxType:"Row"},(0,n.mdx)(r.qe,{mdxType:"PropNameCell"},"minDate"),(0,n.mdx)(r.aI,{mdxType:"TypeCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,n.mdx)(r.Ke,{isRequired:!1,mdxType:"RequiredCell"}),(0,n.mdx)(r._w,{mdxType:"DefaultValueCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"undefined\n"))),(0,n.mdx)(r.uC,{mdxType:"DescriptionCell"},(0,n.mdx)("p",null,"An ISO 8601 string representation of the minimum date that can be selected. The value must be in the ",(0,n.mdx)("inlineCode",{parentName:"p"},"YYYY-MM-DD")," format. Must be on or after ",(0,n.mdx)("inlineCode",{parentName:"p"},"01/01/1900")))),(0,n.mdx)(r.WA,{key:"ROW19",mdxType:"Row"},(0,n.mdx)(r.qe,{mdxType:"PropNameCell"},"name"),(0,n.mdx)(r.aI,{mdxType:"TypeCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,n.mdx)(r.Ke,{isRequired:!0,mdxType:"RequiredCell"}),(0,n.mdx)(r._w,{mdxType:"DefaultValueCell"},(0,n.mdx)("p",null,"none")),(0,n.mdx)(r.uC,{mdxType:"DescriptionCell"},(0,n.mdx)("p",null,"Name of the date input. The name should be unique."))),(0,n.mdx)(r.WA,{key:"ROW20",mdxType:"Row"},(0,n.mdx)(r.qe,{mdxType:"PropNameCell"},"onBlur"),(0,n.mdx)(r.aI,{mdxType:"TypeCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"func\n"))),(0,n.mdx)(r.Ke,{isRequired:!1,mdxType:"RequiredCell"}),(0,n.mdx)(r._w,{mdxType:"DefaultValueCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"undefined\n"))),(0,n.mdx)(r.uC,{mdxType:"DescriptionCell"},(0,n.mdx)("p",null,"A callback function triggered when the date picker component loses focus.\nThis event does not get triggered when the focus is moved from the date input to the calendar button since the focus is still within the main date picker component.\nThe first parameter is the event. The second parameter is the metadata to describe the current state of the input value at the time when the onBlur callback is triggered."))),(0,n.mdx)(r.WA,{key:"ROW21",mdxType:"Row"},(0,n.mdx)(r.qe,{mdxType:"PropNameCell"},"onChange"),(0,n.mdx)(r.aI,{mdxType:"TypeCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"func\n"))),(0,n.mdx)(r.Ke,{isRequired:!1,mdxType:"RequiredCell"}),(0,n.mdx)(r._w,{mdxType:"DefaultValueCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"undefined\n"))),(0,n.mdx)(r.uC,{mdxType:"DescriptionCell"},(0,n.mdx)("p",null,"A callback function to execute when a valid date is selected or entered.\nThe first parameter is the event. The second parameter is the changed date value. The third parameter is the metadata to describe the current state of the input value at the time when the onChange callback is triggered."))),(0,n.mdx)(r.WA,{key:"ROW22",mdxType:"Row"},(0,n.mdx)(r.qe,{mdxType:"PropNameCell"},"onChangeRaw"),(0,n.mdx)(r.aI,{mdxType:"TypeCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"func\n"))),(0,n.mdx)(r.Ke,{isRequired:!1,mdxType:"RequiredCell"}),(0,n.mdx)(r._w,{mdxType:"DefaultValueCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"undefined\n"))),(0,n.mdx)(r.uC,{mdxType:"DescriptionCell"},(0,n.mdx)("p",null,"A callback function to execute when a change is made in the date input.\nThe first parameter is the event. The second parameter is the changed date value. The third parameter is the metadata to describe the current state of the input value at the time when the onChangeRaw callback is triggered."))),(0,n.mdx)(r.WA,{key:"ROW23",mdxType:"Row"},(0,n.mdx)(r.qe,{mdxType:"PropNameCell"},"onClickOutside"),(0,n.mdx)(r.aI,{mdxType:"TypeCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"func\n"))),(0,n.mdx)(r.Ke,{isRequired:!1,mdxType:"RequiredCell"}),(0,n.mdx)(r._w,{mdxType:"DefaultValueCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"undefined\n"))),(0,n.mdx)(r.uC,{mdxType:"DescriptionCell"},(0,n.mdx)("p",null,(0,n.mdx)("strong",{parentName:"p"},"Deprecated"),", A callback function to execute when clicking outside of the picker to dismiss it. Resolves to ",(0,n.mdx)("inlineCode",{parentName:"p"},"onRequestClose"),"."))),(0,n.mdx)(r.WA,{key:"ROW24",mdxType:"Row"},(0,n.mdx)(r.qe,{mdxType:"PropNameCell"},"onFocus"),(0,n.mdx)(r.aI,{mdxType:"TypeCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"func\n"))),(0,n.mdx)(r.Ke,{isRequired:!1,mdxType:"RequiredCell"}),(0,n.mdx)(r._w,{mdxType:"DefaultValueCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"undefined\n"))),(0,n.mdx)(r.uC,{mdxType:"DescriptionCell"},(0,n.mdx)("p",null,"A callback function triggered when the date picker component receives focus.\nThis event does not get triggered when the focus is moved from the date input to the calendar button since the focus is still within the main date picker component."))),(0,n.mdx)(r.WA,{key:"ROW25",mdxType:"Row"},(0,n.mdx)(r.qe,{mdxType:"PropNameCell"},"onRequestClose"),(0,n.mdx)(r.aI,{mdxType:"TypeCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"func\n"))),(0,n.mdx)(r.Ke,{isRequired:!1,mdxType:"RequiredCell"}),(0,n.mdx)(r._w,{mdxType:"DefaultValueCell"},(0,n.mdx)("p",null,"none")),(0,n.mdx)(r.uC,{mdxType:"DescriptionCell"},(0,n.mdx)("p",null,"A callback function to execute when picker is dismissed. onRequestClose(event)"))),(0,n.mdx)(r.WA,{key:"ROW26",mdxType:"Row"},(0,n.mdx)(r.qe,{mdxType:"PropNameCell"},"onSelect"),(0,n.mdx)(r.aI,{mdxType:"TypeCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"func\n"))),(0,n.mdx)(r.Ke,{isRequired:!1,mdxType:"RequiredCell"}),(0,n.mdx)(r._w,{mdxType:"DefaultValueCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"undefined\n"))),(0,n.mdx)(r.uC,{mdxType:"DescriptionCell"},(0,n.mdx)("p",null,"A callback function to execute when a date is selected from within the picker."))),(0,n.mdx)(r.WA,{key:"ROW27",mdxType:"Row"},(0,n.mdx)(r.qe,{mdxType:"PropNameCell"},"required"),(0,n.mdx)(r.aI,{mdxType:"TypeCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,n.mdx)(r.Ke,{isRequired:!1,mdxType:"RequiredCell"}),(0,n.mdx)(r._w,{mdxType:"DefaultValueCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"false\n"))),(0,n.mdx)(r.uC,{mdxType:"DescriptionCell"},(0,n.mdx)("p",null,"Whether or not the date field is required."))),(0,n.mdx)(r.WA,{key:"ROW28",mdxType:"Row"},(0,n.mdx)(r.qe,{mdxType:"PropNameCell"},"maxWidth"),(0,n.mdx)(r.aI,{mdxType:"TypeCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,n.mdx)(r.Ke,{isRequired:!1,mdxType:"RequiredCell"}),(0,n.mdx)(r._w,{mdxType:"DefaultValueCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"undefined\n"))),(0,n.mdx)(r.uC,{mdxType:"DescriptionCell"},(0,n.mdx)("p",null,"Set the max-width of a field using ",(0,n.mdx)("inlineCode",{parentName:"p"},"length")," or ",(0,n.mdx)("inlineCode",{parentName:"p"},"%"),".  Best practice recommendation to never exceed\na rendered value of 1020px. ",(0,n.mdx)("em",{parentName:"p"},"(Note: Providing custom inline styles will take precedence.)")))),(0,n.mdx)(r.WA,{key:"ROW29",mdxType:"Row"},(0,n.mdx)(r.qe,{mdxType:"PropNameCell"},"selectedDate"),(0,n.mdx)(r.aI,{mdxType:"TypeCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,n.mdx)(r.Ke,{isRequired:!1,mdxType:"RequiredCell"}),(0,n.mdx)(r._w,{mdxType:"DefaultValueCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"undefined\n"))),(0,n.mdx)(r.uC,{mdxType:"DescriptionCell"},(0,n.mdx)("p",null,"An ISO 8601 string representation of the initial value to show in the date input.\nThis prop name is derived from react-datepicker but is analogous to value in a form input field."))),(0,n.mdx)(r.WA,{key:"ROW30",mdxType:"Row"},(0,n.mdx)(r.qe,{mdxType:"PropNameCell"},"showOptional"),(0,n.mdx)(r.aI,{mdxType:"TypeCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,n.mdx)(r.Ke,{isRequired:!1,mdxType:"RequiredCell"}),(0,n.mdx)(r._w,{mdxType:"DefaultValueCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"false\n"))),(0,n.mdx)(r.uC,{mdxType:"DescriptionCell"},(0,n.mdx)("p",null,"Whether or not to append the 'optional' label to a non-required field label."))),(0,n.mdx)(r.WA,{key:"ROW31",mdxType:"Row"},(0,n.mdx)(r.qe,{mdxType:"PropNameCell"},"value"),(0,n.mdx)(r.aI,{mdxType:"TypeCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,n.mdx)(r.Ke,{isRequired:!1,mdxType:"RequiredCell"}),(0,n.mdx)(r._w,{mdxType:"DefaultValueCell"},(0,n.mdx)("p",null,"none")),(0,n.mdx)(r.uC,{mdxType:"DescriptionCell"},(0,n.mdx)("p",null,"The date value. This prop should only be used for a controlled date picker field.\nWhen this prop is set a handler is needed for both the ",(0,n.mdx)("inlineCode",{parentName:"p"},"onChange")," and ",(0,n.mdx)("inlineCode",{parentName:"p"},"onChangeRaw")," props to manage the date value.\nIf both ",(0,n.mdx)("inlineCode",{parentName:"p"},"selectedDate")," and this prop are set, then ",(0,n.mdx)("inlineCode",{parentName:"p"},"selectedDate")," will have no effect.\nThe value must be in the ",(0,n.mdx)("inlineCode",{parentName:"p"},"YYYY-MM-DD")," format or the all-numeric date format based on the locale.")))))}u.isMDXComponent=!0;var c=l(98372),x=["components"];function f(){return f=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var l=arguments[a];for(var t in l)Object.prototype.hasOwnProperty.call(l,t)&&(e[t]=l[t])}return e},f.apply(this,arguments)}function y(e,a){if(null==e)return{};var l,t,n=function(e,a){if(null==e)return{};var l,t,n={},d=Object.keys(e);for(t=0;t<d.length;t++)l=d[t],a.indexOf(l)>=0||(n[l]=e[l]);return n}(e,a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(e);for(t=0;t<d.length;t++)l=d[t],a.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(n[l]=e[l])}return n}var h={};function g(e){var a=e.components,l=y(e,x);return(0,n.mdx)("wrapper",f({},h,l,{components:a,mdxType:"MDXLayout"}),(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React, { useState } from 'react';\nimport classNames from 'classnames/bind';\nimport DatePickerField from 'terra-date-picker/lib/DatePickerField';\nimport styles from './DatePickerExampleCommon.module.scss';\n\nconst cx = classNames.bind(styles);\n\nconst DatePickerFieldExample = () => {\n  const [date, setDate] = useState('');\n  const [invalid, setInValid] = useState(false);\n\n  const handleDateChange = (event, dateValue) => {\n    setDate(dateValue);\n    setInValid(false);\n  };\n\n  const handleDateChangeRaw = (event, dateValue, metadata) => {\n    if (!metadata.isValidValue && metadata.inputValue.length === 10) {\n      setDate(null);\n      setInValid(true);\n    }\n  };\n\n  return (\n    <div>\n      <p>\n        Selected ISO Date:\n        <span className={cx('date-wrapper')}>{date}</span>\n      </p>\n      <DatePickerField\n        label=\"Enter Date\"\n        name=\"date-input\"\n        datePickerId=\"default-field\"\n        onChange={handleDateChange}\n        onChangeRaw={handleDateChangeRaw}\n        isInvalid={invalid}\n        error={<p>Enter valid date</p>}\n      />\n    </div>\n  );\n};\n\nexport default DatePickerFieldExample;\n\n")))}g.isMDXComponent=!0;var T=l(33792),C=l(903),j=function(e){var a=e.title,l=e.description,n=e.isExpanded;return t.createElement(T.c,{title:a||"Date Picker Field",description:l,example:t.createElement(c.c,null),exampleCssSrc:t.createElement(C.c,null),exampleSrc:t.createElement(g,null),isExpanded:n})},b=["components"];function v(){return v=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var l=arguments[a];for(var t in l)Object.prototype.hasOwnProperty.call(l,t)&&(e[t]=l[t])}return e},v.apply(this,arguments)}function N(e,a){if(null==e)return{};var l,t,n=function(e,a){if(null==e)return{};var l,t,n={},d=Object.keys(e);for(t=0;t<d.length;t++)l=d[t],a.indexOf(l)>=0||(n[l]=e[l]);return n}(e,a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(e);for(t=0;t<d.length;t++)l=d[t],a.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(n[l]=e[l])}return n}var R={},w="wrapper";function D(e){var a=e.components,l=N(e,b);return(0,n.mdx)(w,v({},R,l,{components:a,mdxType:"MDXLayout"}),(0,n.mdx)(d.k,{mdxType:"Badge"}),(0,n.mdx)("h1",{id:"terra-date-picker-field"},"Terra Date Picker Field"),(0,n.mdx)("p",null,(0,n.mdx)("a",{parentName:"p",href:"https://github.com/cerner/terra-framework/tree/main/packages/terra-date-picker"},"terra-date-picker")," component that is wrapped inside a\n",(0,n.mdx)("a",{parentName:"p",href:"https://github.com/cerner/terra-core/tree/main/packages/terra-form-field"},"terra-form-field")," component."),(0,n.mdx)("h2",{id:"getting-started"},"Getting Started"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"Install with ",(0,n.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("inlineCode",{parentName:"li"},"npm install terra-date-picker"))))),(0,n.mdx)("h2",{id:"component-features"},"Component Features"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#cross-browser-support"},"Cross-Browser Support")),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#responsive-support"},"Responsive Support")),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#mobile-support"},"Mobile Support")),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#internationalization-i18n"},"Internationalization Support")),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#internationalization-i18n"},"Localization Support"))),(0,n.mdx)("h2",{id:"examples"},"Examples"),(0,n.mdx)(j,{title:"Date Picker Field",mdxType:"DatePickerFieldExample"}),(0,n.mdx)("h2",{id:"date-picker-field-props-table"},"Date Picker field props table"),(0,n.mdx)(u,{mdxType:"DatePickerFieldPropsTable"}))}D.isMDXComponent=!0},92348:function(e,a,l){var t={"./af":36024,"./af.js":36024,"./ar":5164,"./ar-dz":11736,"./ar-dz.js":11736,"./ar-kw":47888,"./ar-kw.js":47888,"./ar-ly":22892,"./ar-ly.js":22892,"./ar-ma":89688,"./ar-ma.js":89688,"./ar-ps":65280,"./ar-ps.js":65280,"./ar-sa":44948,"./ar-sa.js":44948,"./ar-tn":61992,"./ar-tn.js":61992,"./ar.js":5164,"./az":95777,"./az.js":95777,"./be":69940,"./be.js":69940,"./bg":86107,"./bg.js":86107,"./bm":63544,"./bm.js":63544,"./bn":94952,"./bn-bd":92876,"./bn-bd.js":92876,"./bn.js":94952,"./bo":56576,"./bo.js":56576,"./br":7392,"./br.js":7392,"./bs":43584,"./bs.js":43584,"./ca":17396,"./ca.js":17396,"./cs":36560,"./cs.js":36560,"./cv":67716,"./cv.js":67716,"./cy":70956,"./cy.js":70956,"./da":15188,"./da.js":15188,"./de":78960,"./de-at":52131,"./de-at.js":52131,"./de-ch":46128,"./de-ch.js":46128,"./de.js":78960,"./dv":43284,"./dv.js":43284,"./el":32972,"./el.js":32972,"./en-au":64356,"./en-au.js":64356,"./en-ca":28440,"./en-ca.js":28440,"./en-gb":2448,"./en-gb.js":2448,"./en-ie":16320,"./en-ie.js":16320,"./en-il":74360,"./en-il.js":74360,"./en-in":80632,"./en-in.js":80632,"./en-nz":81140,"./en-nz.js":81140,"./en-sg":63004,"./en-sg.js":63004,"./eo":65620,"./eo.js":65620,"./es":32348,"./es-do":76528,"./es-do.js":76528,"./es-mx":98544,"./es-mx.js":98544,"./es-us":71208,"./es-us.js":71208,"./es.js":32348,"./et":20373,"./et.js":20373,"./eu":69912,"./eu.js":69912,"./fa":74984,"./fa.js":74984,"./fi":52819,"./fi.js":52819,"./fil":50131,"./fil.js":50131,"./fo":18571,"./fo.js":18571,"./fr":8405,"./fr-ca":93220,"./fr-ca.js":93220,"./fr-ch":45720,"./fr-ch.js":45720,"./fr.js":8405,"./fy":58116,"./fy.js":58116,"./ga":9916,"./ga.js":9916,"./gd":9288,"./gd.js":9288,"./gl":54088,"./gl.js":54088,"./gom-deva":15064,"./gom-deva.js":15064,"./gom-latn":96300,"./gom-latn.js":96300,"./gu":51208,"./gu.js":51208,"./he":55910,"./he.js":55910,"./hi":648,"./hi.js":648,"./hr":38864,"./hr.js":38864,"./hu":28164,"./hu.js":28164,"./hy-am":62528,"./hy-am.js":62528,"./id":63400,"./id.js":63400,"./is":23912,"./is.js":23912,"./it":77088,"./it-ch":77988,"./it-ch.js":77988,"./it.js":77088,"./ja":52501,"./ja.js":52501,"./jv":40376,"./jv.js":40376,"./ka":44668,"./ka.js":44668,"./kk":56416,"./kk.js":56416,"./km":58288,"./km.js":58288,"./kn":84833,"./kn.js":84833,"./ko":10972,"./ko.js":10972,"./ku":76376,"./ku-kmr":5192,"./ku-kmr.js":5192,"./ku.js":76376,"./ky":92832,"./ky.js":92832,"./lb":61448,"./lb.js":61448,"./lo":34116,"./lo.js":34116,"./lt":20296,"./lt.js":20296,"./lv":76136,"./lv.js":76136,"./me":28019,"./me.js":28019,"./mi":41320,"./mi.js":41320,"./mk":47720,"./mk.js":47720,"./ml":81228,"./ml.js":81228,"./mn":49564,"./mn.js":49564,"./mr":78496,"./mr.js":78496,"./ms":88512,"./ms-my":69676,"./ms-my.js":69676,"./ms.js":88512,"./mt":7444,"./mt.js":7444,"./my":82792,"./my.js":82792,"./nb":23444,"./nb.js":23444,"./ne":77860,"./ne.js":77860,"./nl":39940,"./nl-be":63760,"./nl-be.js":63760,"./nl.js":39940,"./nn":28888,"./nn.js":28888,"./oc-lnc":18096,"./oc-lnc.js":18096,"./pa-in":78837,"./pa-in.js":78837,"./pl":35904,"./pl.js":35904,"./pt":96840,"./pt-br":11048,"./pt-br.js":11048,"./pt.js":96840,"./ro":33060,"./ro.js":33060,"./ru":80775,"./ru.js":80775,"./sd":96595,"./sd.js":96595,"./se":94560,"./se.js":94560,"./si":38668,"./si.js":38668,"./sk":69500,"./sk.js":69500,"./sl":90024,"./sl.js":90024,"./sq":84192,"./sq.js":84192,"./sr":56832,"./sr-cyrl":58728,"./sr-cyrl.js":58728,"./sr.js":56832,"./ss":28692,"./ss.js":28692,"./sv":63252,"./sv.js":63252,"./sw":98904,"./sw.js":98904,"./ta":71120,"./ta.js":71120,"./te":46688,"./te.js":46688,"./tet":37176,"./tet.js":37176,"./tg":46868,"./tg.js":46868,"./th":27172,"./th.js":27172,"./tk":30208,"./tk.js":30208,"./tl-ph":91744,"./tl-ph.js":91744,"./tlh":331,"./tlh.js":331,"./tr":43920,"./tr.js":43920,"./tzl":61980,"./tzl.js":61980,"./tzm":97524,"./tzm-latn":81732,"./tzm-latn.js":81732,"./tzm.js":97524,"./ug-cn":71124,"./ug-cn.js":71124,"./uk":69328,"./uk.js":69328,"./ur":88968,"./ur.js":88968,"./uz":51516,"./uz-latn":19388,"./uz-latn.js":19388,"./uz.js":51516,"./vi":59664,"./vi.js":59664,"./x-pseudo":46236,"./x-pseudo.js":46236,"./yo":85436,"./yo.js":85436,"./zh-cn":3820,"./zh-cn.js":3820,"./zh-hk":60112,"./zh-hk.js":60112,"./zh-mo":99504,"./zh-mo.js":99504,"./zh-tw":15660,"./zh-tw.js":15660};function n(e){var a=d(e);return l(a)}function d(e){if(!l.o(t,e)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return t[e]}n.keys=function(){return Object.keys(t)},n.resolve=d,e.exports=n,n.id=92348},33300:function(e,a,l){"use strict";var t=l(22411);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=t(l(82048)),d=t(l(2676)),r=t(l(97676)),m=t(l(11504)),i=t(l(3268)),p=t(l(57775)),s=l(93627),o=t(l(91280)),u=t(l(10240)),c=["datePickerId","disabled","inputAttributes","error","errorIcon","excludeDates","filterDate","help","hideRequired","isIncomplete","isInvalid","isInline","isLabelHidden","includeDates","intl","label","labelAttrs","maxDate","minDate","maxWidth","name","onBlur","onChange","onChangeRaw","onClickOutside","onFocus","onRequestClose","onSelect","required","selectedDate","showOptional","value"];function x(e,a){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),l.push.apply(l,t)}return l}function f(e){for(var a=1;a<arguments.length;a++){var l=null!=arguments[a]?arguments[a]:{};a%2?x(Object(l),!0).forEach((function(a){(0,d.default)(e,a,l[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):x(Object(l)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(l,a))}))}return e}var y={datePickerId:i.default.string.isRequired,disabled:i.default.bool,error:i.default.node,errorIcon:i.default.element,excludeDates:i.default.arrayOf(i.default.string),filterDate:i.default.func,help:i.default.node,hideRequired:i.default.bool,includeDates:i.default.arrayOf(i.default.string),inputAttributes:i.default.object,intl:i.default.shape({formatMessage:i.default.func,locale:i.default.string}).isRequired,isIncomplete:i.default.bool,isInline:i.default.bool,isInvalid:i.default.bool,isLabelHidden:i.default.bool,label:i.default.node.isRequired,labelAttrs:i.default.object,maxDate:i.default.string,minDate:i.default.string,name:i.default.string.isRequired,onBlur:i.default.func,onChange:i.default.func,onChangeRaw:i.default.func,onClickOutside:i.default.func,onFocus:i.default.func,onRequestClose:i.default.func,onSelect:i.default.func,required:i.default.bool,maxWidth:i.default.string,selectedDate:i.default.string,showOptional:i.default.bool,value:i.default.string},h={disabled:!1,error:null,errorIcon:m.default.createElement(o.default,null),excludeDates:void 0,filterDate:void 0,help:null,hideRequired:!1,includeDates:void 0,inputAttributes:void 0,isIncomplete:!1,isInline:!1,isInvalid:!1,isLabelHidden:!1,labelAttrs:{},maxDate:void 0,maxWidth:void 0,minDate:void 0,onBlur:void 0,onChange:void 0,onChangeRaw:void 0,onClickOutside:void 0,onFocus:void 0,onSelect:void 0,required:!1,selectedDate:void 0,showOptional:!1},g=function(e){var a=e.datePickerId,l=e.disabled,t=e.inputAttributes,d=e.error,i=(e.errorIcon,e.excludeDates),s=e.filterDate,o=e.help,x=e.hideRequired,y=e.isIncomplete,h=e.isInvalid,g=e.isInline,T=e.isLabelHidden,C=e.includeDates,j=e.intl,b=e.label,v=e.labelAttrs,N=e.maxDate,R=e.minDate,w=e.maxWidth,D=e.name,k=e.onBlur,q=e.onChange,O=e.onChangeRaw,I=e.onClickOutside,P=e.onFocus,W=e.onRequestClose,A=e.onSelect,V=e.required,_=e.selectedDate,E=e.showOptional,S=e.value,K=(0,r.default)(e,c),z="".concat(a,"-help");d&&h&&(z="".concat(a,"-error ").concat(a,"-help"));var M=t&&t["aria-describedby"],F=t;z&&(F=f(f({},t),{},{"aria-describedby":M?"".concat(z," ").concat(M):z}));var L=j.formatMessage({id:"Terra.datePicker.dateFormat"}),Y=o?m.default.createElement("div",{"aria-label":"".concat(j.formatMessage({id:"Terra.datePicker.dateFormatLabel"})," ").concat(L,", ").concat(o)},"(".concat(L,")"),m.default.createElement("br",null),o):m.default.createElement("div",{"aria-label":"".concat(j.formatMessage({id:"Terra.datePicker.dateFormatLabel"})," ").concat(L)},"(".concat(L,")"));return m.default.createElement(p.default,(0,n.default)({},K,{label:b,labelAttrs:v,error:d,help:Y,hideRequired:x,required:V,showOptional:E,isInvalid:h,isInline:g,isLabelHidden:T,htmlFor:a,maxWidth:w}),m.default.createElement(u.default,{disabled:l,id:a,inputAttributes:F,excludeDates:i,filterDate:s,useExternalFormatMask:!0,includeDates:C,isInvalid:h,isIncomplete:y,maxDate:N,minDate:R,ariaLabel:b,name:D,onBlur:k,onChange:q,onChangeRaw:O,onRequestClose:W,onClickOutside:I,onFocus:P,onSelect:A,required:V,selectedDate:_,value:S}))};g.propTypes=y,g.defaultProps=h;a.default=(0,s.injectIntl)(g)}}]);