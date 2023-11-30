"use strict";(self.webpackChunkterra_ui=self.webpackChunkterra_ui||[]).push([[43698,45627,85565,3353,5161,45865,85355,3193,4845,46647,85161,38681,15318,40411,18101,38443,11264],{42002:function(e,t,r){function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}t.Z=void 0;var n=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=a(e)&&"function"!=typeof e)return{default:e};var r=d(t);if(r&&r.has(e))return r.get(e);var n={__proto__:null},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in e)if("default"!==s&&Object.prototype.hasOwnProperty.call(e,s)){var l=o?Object.getOwnPropertyDescriptor(e,s):null;l&&(l.get||l.set)?Object.defineProperty(n,s,l):n[s]=e[s]}return n.default=e,r&&r.set(e,n),n}(r(67294)),o=i(r(28301)),s=i(r(77559)),l=i(r(55281));function i(e){return e&&e.__esModule?e:{default:e}}function d(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(d=function(e){return e?r:t})(e)}function u(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var a,n,o,s,l=[],i=!0,d=!1;try{if(o=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;i=!1}else for(;!(i=(a=o.call(r)).done)&&(l.push(a.value),l.length!==t);i=!0);}catch(e){d=!0,n=e}finally{try{if(!i&&null!=r.return&&(s=r.return(),Object(s)!==s))return}finally{if(d)throw n}}return l}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return c(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return c(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,a=new Array(t);r<t;r++)a[r]=e[r];return a}t.Z=function(){var e,t,r=u((0,n.useState)(10),2),a=r[0],i=r[1];t=10;var d=function(){i((function(e){return t=e+10,e+10})),100===t&&clearInterval(e)};return n.default.createElement("div",null,n.default.createElement(o.default,null,n.default.createElement(o.default.Body,null,n.default.createElement("label",null,"Progress bar: ".concat(a,"%")),n.default.createElement(s.default,{id:"progressbar",value:a,valueText:"Loading ".concat(a,"%")}),n.default.createElement("br",null),n.default.createElement(l.default,{text:"Start",onClick:function(){e=setInterval(d,2e3)}})," ",n.default.createElement(l.default,{text:"Reset",onClick:function(){i(10)}}))))}},22863:function(e,t,r){var a=r(64836);t.Z=void 0;var n=a(r(67294)),o=a(r(45697)),s=a(r(47166)),l=a(r(17422)),i=s.default.bind(l.default),d={name:o.default.string.isRequired,src:o.default.string,url:o.default.string,version:o.default.string.isRequired},u=function(e){var t=e.src,r=e.name,a=e.url,o=e.version,s=n.default.createElement("a",{className:i("badge"),href:a||"https://www.npmjs.org/package/".concat(r,"/v/").concat(o)},n.default.createElement("span",{className:i("badge-name")},a?"package":"npm"),n.default.createElement("span",{className:i("badge-version")},"v".concat(o))),l=t?n.default.createElement("a",{className:i("badge"),href:t},n.default.createElement("span",{className:i("badge-name")},"github"),n.default.createElement("span",{className:i("badge-version")},"source")):void 0;return n.default.createElement("div",{className:i("badge-container")},s,l)};u.propTypes=d;var c=u;t.Z=c},43698:function(e,t,r){r.r(t),r.d(t,{default:function(){return c}});r(67294);var a=r(81254),n=r(19467),o=r(42002),s=["components"];function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},l.apply(this,arguments)}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var d={},u="wrapper";function c(e){var t=e.components,r=i(e,s);return(0,a.mdx)(u,l({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)(n.C,{mdxType:"Badge"}),(0,a.mdx)("h1",{id:"terra-progress-bar-accessibility-guide"},"Terra Progress Bar Accessibility Guide"),(0,a.mdx)("h2",{id:"why-the-accessibility-of-progress-bar-is-important"},"Why the accessibility of Progress Bar is important"),(0,a.mdx)("blockquote",null,(0,a.mdx)("p",{parentName:"blockquote"},"Because Progress Bar is a component that helps users understand the status of a process or activity users must understand, it is critical that each progress bar be implemented correctly to be accessible to all users. Users with color blindness or low vision may not perceive the progress bar status if the colors don’t have enough contrast to be seen against each other or the background color. Non-sighted users require programmatic context to be conveyed by the screen reader; without that context, the user cannot understand the status.")),(0,a.mdx)("h2",{id:"accessibility-considerations"},"Accessibility Considerations"),(0,a.mdx)("h3",{id:"code-considerations-what-do-engineers-need-to-do"},"Code Considerations: What do engineers need to do?"),(0,a.mdx)("div",{"aria-label":"Example Demo"},(0,a.mdx)(o.Z,{mdxType:"ProgressBarExampleAccess"})),(0,a.mdx)("blockquote",null,(0,a.mdx)("pre",{parentName:"blockquote"},(0,a.mdx)("code",{parentName:"pre",className:"language-jsx"},'const ProgressBarExampleAccess = () => {\n  const [val, setVal] = useState(10);\n  let intervalId; let\n  curVal;\n  curVal = 10;\n\n  const updateProgress = () => {\n  setVal((_val) => {\n    curVal = _val + 10;\n    return _val + 10;\n  });\n\n      if (curVal === 100) {\n        clearInterval(intervalId);\n      }\n  };\n\n  const start = () => {\n    intervalId = setInterval(updateProgress, 2000);\n  };\n\n  return (\n      <div>\n          <Card>\n          <Card.Body>\n              <label>{`Progress bar: ${val}%`}</label>\n              <ProgressBar id="progressbar" value={val} valueText={`Loading ${val}%`} />\n              <br />\n              <Button text="Start" onClick={start} />\n              &nbsp;\n              <Button text="Reset" onClick={() => { setVal(10); }} />\n          </Card.Body>\n          </Card>\n      </div>\n  );\n};\n'))),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},"Work with content creators to understand if any extra programmatic context is required when implanting the progress bar."),(0,a.mdx)("li",{parentName:"ul"},"If words that describe the purpose of the progress bar are also added, ensure the progress bar is programmatically associated to the content. (PROVIDE EXAMPLE)"),(0,a.mdx)("li",{parentName:"ul"},"If no other text is used visually on the page to describe the content, work with the content creator to understand what text to use as the programmatic label to ensure proper context can be communicated to assistive technology users. (PROVIDE EXAMPLE)"),(0,a.mdx)("li",{parentName:"ul"},"Do not override the implicit or explicit role of the progress bar as implemented by Terra.")),(0,a.mdx)("h3",{id:"content-considerations-what-do-content-creators-need-to-do"},"Content Considerations: What do content creators need to do?"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},"Ensure the progress bar has a descriptive label that describes what the status is related to."),(0,a.mdx)("li",{parentName:"ul"},"Convey to the engineer the programmatic label for the engineer to use so the progress bar can communicate what is loading or what the status is related to."),(0,a.mdx)("li",{parentName:"ul"},"After coded, check the code with a screen reader to ensure what is read by the screen reader conveys the proper context of the situation. Think about if you couldn’t see what was happening on screen, with what was communicated by the screen reader would it be enough for you to understand?"),(0,a.mdx)("li",{parentName:"ul"},"Consider how content will adjust to resizing text or reflowing content at different viewpoints. Users may have settings that change the font size, style, or other text attributes. They may also resize a window or zoom into the content. All these things can cause content to resize or reflow, and when it does, content must not overlap, be cut off, or become unusable."),(0,a.mdx)("li",{parentName:"ul"},"Ensure all content is perceivable by meeting all the color contrast requirements."),(0,a.mdx)("li",{parentName:"ul"},"Ensure the colors used for both parts of the progress bar meet the 3:1 color contrast ratio between each other and the background the progress bar appears on or provide the value as text on the page with the progress bar."),(0,a.mdx)("li",{parentName:"ul"},"Ensure the color of any text presented with the progress bar (e.g., the current status or value, the visual label that describes the purpose of the progress bar) meets the proper contrast ratio against the background it appears on based upon the size of the text."),(0,a.mdx)("li",{parentName:"ul"},"Ensure color is not the only way meaning is conveyed."),(0,a.mdx)("li",{parentName:"ul"},"After development, ensure the progress bar and its content is keyboard accessible and works as expected."),(0,a.mdx)("li",{parentName:"ul"},"Ensure text resizes and reflows without losing content or functionality when users alter their view through different methods (e.g., increasing font sizes, zooming in or out of the page, or changing their viewport).")),(0,a.mdx)("h2",{id:"usability-expectations"},"Usability Expectations"),(0,a.mdx)("h3",{id:"interaction-detail"},"Interaction Detail"),(0,a.mdx)("p",null,"Terra Progress bar is not interactable."),(0,a.mdx)("h3",{id:"keyboard-expectations"},"Keyboard Expectations"),(0,a.mdx)("p",null,"Because Terra Progress bar is not interactable, it does not get tab focus."),(0,a.mdx)("table",null,(0,a.mdx)("thead",{parentName:"table"},(0,a.mdx)("tr",{parentName:"thead"},(0,a.mdx)("th",{parentName:"tr",align:null},"Key/Sequence"),(0,a.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,a.mdx)("tbody",{parentName:"table"},(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null},(0,a.mdx)("strong",{parentName:"td"},"Arrow keys")),(0,a.mdx)("td",{parentName:"tr",align:null},"Moves focus on and off the progress bar. User expects elements to receive keyboard focus in the logical reading order of the page.")))),(0,a.mdx)("h2",{id:"support-compliance"},"Support Compliance"),(0,a.mdx)("h3",{id:"how-does-progress-bar-support-compliance"},"How does Progress Bar support compliance?"),(0,a.mdx)("p",null,"Terra is committed to ensuring its components provide the maximum possible accessibility. Terra provides the ability to make accessibility products. However, using Terra components will not automatically make a product accessible.\nThe final responsibility lies with the consumers of Terra components — ensuring proper usage, programmatic context where needed, the words used to label elements, engineers following correct implementation patterns, and authors crafting content that follows best practice guidance — to make a product fully accessible."),(0,a.mdx)("h3",{id:"primary-accessibility-criteria-for-progress-bar"},"Primary accessibility criteria for Progress Bar"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships.html"},"1.3.1 Info and Relationships")," — Supports",(0,a.mdx)("ul",{parentName:"li"},(0,a.mdx)("li",{parentName:"ul"},"Terra provides a basic label for the progress bar to ensure the programmatic context of the progress bar and the current state of the progress bar."),(0,a.mdx)("li",{parentName:"ul"},"Engineers must provide a text value that reflects the purpose of the progress bar and ensure it accurately reflects the current state."),(0,a.mdx)("li",{parentName:"ul"},"Content creators should provide the engineers with text reflecting the progress bar’s purpose. For instance, if the progress bar is related to the status of a particular file loading, the content creator should instruct the engineer to use the name of the file so users can understand that the progress bar indicates the status of how much of the file has loaded.",(0,a.mdx)("ul",{parentName:"li"},(0,a.mdx)("li",{parentName:"ul"},"In addition to the progress bar, consider including text that presents the progress bar's description and current value."),(0,a.mdx)("li",{parentName:"ul"},"If visual text is added to the progress bar, the additional programmatic label may not be needed."))),(0,a.mdx)("li",{parentName:"ul"},"Ensure the colors used for both bars within the progress bar meet the 3:1 contrast ratio against each other and the background they appear on."))),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"https://www.w3.org/WAI/WCAG21/Understanding/use-of-color.html"},"1.4.1 Use of Color")," – Does Not Support",(0,a.mdx)("ul",{parentName:"li"},(0,a.mdx)("li",{parentName:"ul"},"Terra Progress Bar alone does not support the use of color because it conveys the progress using only color, and the default colors don't meet the 3:1 contrast ratio and does not have text that supports the current value."),(0,a.mdx)("li",{parentName:"ul"},"Engineers must work with content creators and implement colors that meet the 3:1 color contrast ratio between each other and the backgrounds the progress bar appears on or provide the value as text on the page with the progress bar."),(0,a.mdx)("li",{parentName:"ul"},"Content creators should design progress bars that include text that presents the progress bar's current value or ensure the foreground and background colors meet the 3:1 contrast ratio against each other and the background they appear on."))),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"https://www.w3.org/WAI/WCAG21/Understanding/non-text-contrast.html"},"1.4.11 Non-Text Contrast")," – Does Not Support",(0,a.mdx)("ul",{parentName:"li"},(0,a.mdx)("li",{parentName:"ul"},"Terra progress bar does not currently support non-text contrast but will be remediated in future iterations."),(0,a.mdx)("li",{parentName:"ul"},"Engineers must work with content creators to implement progress bars with colors that meet the 3:1 non-text contrast ratio threshold."),(0,a.mdx)("li",{parentName:"ul"},"Content creators must implement progress bars with colors that meet the 3:1 non-text contrast ratio threshold to ensure both the progress bar and the static full percentage bar can meet 3:1 against their background color and each other. To ensure the content and progress can be understood, incorporate text with the progress bar that can be easily perceived and understood."),(0,a.mdx)("li",{parentName:"ul"},"Primary"))),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"https://www.w3.org/WAI/WCAG21/Understanding/status-messages"},"4.1.3 Status Messages")," – Supports",(0,a.mdx)("ul",{parentName:"li"},(0,a.mdx)("li",{parentName:"ul"},"Terra provides the ability for consuming teams to add programmatically knowable status messages."),(0,a.mdx)("li",{parentName:"ul"},"Engineers must ensure any status messages are implemented correctly to ensure programmatic availability")))),(0,a.mdx)("h3",{id:"related-accessibility-criteria-that-apply-when-adding-content-to-progress-bar"},"Related accessibility criteria that apply when adding content to Progress Bar"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"https://www.w3.org/WAI/WCAG21/Understanding/reflow.html"},"1.4.10 Reflow")," — Supports",(0,a.mdx)("ul",{parentName:"li"},(0,a.mdx)("li",{parentName:"ul"},"Terra Progress bar supports the ability for content to reflow without loss of content or function."),(0,a.mdx)("li",{parentName:"ul"},"Engineers should work with content creators to understand how content will reflow at different sizes and viewports. Ensure code allows for content to reflow without loss of content or function when zoomed in at 400%."),(0,a.mdx)("li",{parentName:"ul"},"Content creators should consider and convey to engineers how content resizes and reflows at different sizes and viewports to ensure content is not lost or become unusable."))),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-scale.html"},"1.4.4 Resize text")," – Supports",(0,a.mdx)("ul",{parentName:"li"},(0,a.mdx)("li",{parentName:"ul"},"Terra Progress bar supports the ability to resize the text without losing function."),(0,a.mdx)("li",{parentName:"ul"},"Engineers must not implement artificial height constraints that could prevent text from resizing unexpectedly, making content unusable or losing functionality."),(0,a.mdx)("li",{parentName:"ul"},"Content creators should consider how content resizes and reflows at different sizes and viewports."))),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"https://www.w3.org/WAI/WCAG21/Understanding/name-role-value.html"},"4.1.2 Name, Role, Value")," – Supports",(0,a.mdx)("ul",{parentName:"li"},(0,a.mdx)("li",{parentName:"ul"},"Terra provides property to set the name, sets the role, and value of the progress bar."),(0,a.mdx)("li",{parentName:"ul"},"Engineers must ensure the value conveyed is accurate via the screen reader.")))),(0,a.mdx)("h3",{id:"supported-features-and-technology"},"Supported Features and Technology"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},"Keyboard Interactions"),(0,a.mdx)("li",{parentName:"ul"},"JAWS Support with Chrome (PC)"),(0,a.mdx)("li",{parentName:"ul"},"VoiceOver Support with Chrome, Safari (MAC)")),(0,a.mdx)("h2",{id:"linked-references"},"Linked References:"),(0,a.mdx)("ol",null,(0,a.mdx)("li",{parentName:"ol"},(0,a.mdx)("a",{parentName:"li",href:"https://www.w3.org/WAI/tips/writing/#use-headings-to-convey-meaning-and-structure"},"W3C WAI Aria: Use heading to convey meaning and structure")),(0,a.mdx)("li",{parentName:"ol"},(0,a.mdx)("a",{parentName:"li",href:"https://www.w3.org/WAI/WCAG21/Understanding/"},"Web Content Accessibility Guidelines (WCAG)")),(0,a.mdx)("li",{parentName:"ol"},(0,a.mdx)("a",{parentName:"li",href:"https://github.com/cerner/terra-core/issues/new/choose"},"Report a problem with this component on GitHub"))))}c.isMDXComponent=!0},19467:function(e,t,r){r.d(t,{C:function(){return o}});var a=r(67294),n=r(22863),o=function(e){var t=e.url;return a.createElement(n.Z,{src:"https://github.com/cerner/terra-core/tree/main/packages/terra-progress-bar",name:"terra-progress-bar",version:"4.35.0",url:t})}},17422:function(e,t,r){r.r(t),t.default={badge:"Badges-module__badge___vex-+","badge-container":"Badges-module__badge-container___B13Mv","badge-name":"Badges-module__badge-name___jkN0m","badge-version":"Badges-module__badge-version___agZ+P"}},13234:function(e,t,r){r.r(t),t.default={"clinical-lowlight-theme":"Card-module__clinical-lowlight-theme___rpqXf","orion-fusion-theme":"Card-module__orion-fusion-theme___QgHmr",card:"Card-module__card___n9+A2",default:"Card-module__default___Pvv6U",raised:"Card-module__raised___OPyVO"}},64867:function(e,t,r){r.r(t),t.default={"orion-fusion-theme":"CardBody-module__orion-fusion-theme___Xdg9v","clinical-lowlight-theme":"CardBody-module__clinical-lowlight-theme___2YDc3","vertical-padding":"CardBody-module__vertical-padding___xyd9u","horizontal-padding":"CardBody-module__horizontal-padding___wGati","center-content":"CardBody-module__center-content___phyuy"}},13559:function(e,t,r){r.r(t),t.default={"clinical-lowlight-theme":"ProgressBar-module__clinical-lowlight-theme___2R-V2","orion-fusion-theme":"ProgressBar-module__orion-fusion-theme___HjiAn","progress-bar":"ProgressBar-module__progress-bar___ldMCP","default-color":"ProgressBar-module__default-color___-XUpG",tiny:"ProgressBar-module__tiny___arTaR",small:"ProgressBar-module__small___aIbie",medium:"ProgressBar-module__medium___DIoxZ",large:"ProgressBar-module__large___KiWFK",huge:"ProgressBar-module__huge___G3Q0C"}},28301:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=m(r(67294)),n=m(r(45697)),o=m(r(94184)),s=m(r(47166)),l=m(r(29270)),i=m(r(50026)),d=m(r(13234)),u=m(r(52926)),c=["children","variant","visuallyHiddenText"];function m(e){return e&&e.__esModule?e:{default:e}}function p(){return p=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},p.apply(this,arguments)}function h(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var f=s.default.bind(d.default),g={children:n.default.node,variant:n.default.oneOf(["default","raised"]),visuallyHiddenText:n.default.string},b={variant:"default"},x=function(e){var t=e.children,r=e.variant,n=e.visuallyHiddenText,s=h(e,c),d=a.default.useContext(i.default),u=(0,o.default)(f(["card",r,d.className]),s.className),m=n?a.default.createElement(l.default,{text:n}):null;return a.default.createElement("article",p({},s,{className:u}),m,t)};x.propTypes=g,x.defaultProps=b,x.Body=u.default;t.default=x},52926:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=u(r(67294)),n=u(r(45697)),o=u(r(94184)),s=u(r(47166)),l=u(r(50026)),i=u(r(64867)),d=["children","hasPaddingVertical","hasPaddingHorizontal","isContentCentered"];function u(e){return e&&e.__esModule?e:{default:e}}function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},c.apply(this,arguments)}function m(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=s.default.bind(i.default),h={children:n.default.node,hasPaddingVertical:n.default.bool,hasPaddingHorizontal:n.default.bool,isContentCentered:n.default.bool},f=function(e){var t=e.children,r=e.hasPaddingVertical,n=e.hasPaddingHorizontal,s=e.isContentCentered,i=m(e,d),u=a.default.useContext(l.default),h=(0,o.default)(p([{"vertical-padding":r},{"horizontal-padding":n},{"center-content":s},u.className]),i.className);return a.default.createElement("div",c({},i,{className:h}),t)};f.propTypes=h,f.defaultProps={hasPaddingHorizontal:!0,hasPaddingVertical:!0,isContentCentered:!1};t.default=f},77559:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.ProgressBarHeightSize=void 0;var a=u(r(67294)),n=u(r(45697)),o=u(r(94184)),s=u(r(47166)),l=u(r(50026)),i=u(r(13559)),d=["heightSize","value","max","valueText","colorClass","intl"];function u(e){return e&&e.__esModule?e:{default:e}}function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},c.apply(this,arguments)}function m(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=s.default.bind(i.default),h=(t.ProgressBarHeightSize={TINY:"tiny",SMALL:"small",MEDIUM:"medium",LARGE:"large",HUGE:"huge"},{heightSize:n.default.oneOf(["tiny","small","medium","large","huge"]),value:n.default.number.isRequired,max:n.default.number,valueText:n.default.string,colorClass:n.default.string,intl:n.default.shape({formatMessage:n.default.func})}),f={heightSize:"small",max:100,valueText:void 0,colorClass:"default-color"},g=function(e){var t=e.heightSize,r=e.value,n=e.max,s=(e.valueText,e.colorClass),i=(e.intl,m(e,d)),u=a.default.useContext(l.default),h=(0,o.default)(p("progress-bar",t,s,u.className),i.className),f=r/n*100;return a.default.createElement("div",null,a.default.createElement("progress",c({},i,{className:h,max:100,value:f,"aria-valuemax":100,"aria-valuemin":0,"aria-valuenow":f,"aria-valuetext":-1===navigator.userAgent.indexOf("Mac")||-1!==navigator.userAgent.indexOf("Win")?"".concat(f,"%"):void 0,tabIndex:"-1"})))};g.propTypes=h,g.defaultProps=f;t.default=g}}]);