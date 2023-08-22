"use strict";(self.webpackChunkterra_ui=self.webpackChunkterra_ui||[]).push([[50833],{50833:function(e,n,t){t.r(n),t.d(n,{default:function(){return x}});t(67294);var a=t(81254),i=["components"];function r(){return r=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},r.apply(this,arguments)}function d(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var o={},l="wrapper";function s(e){var n=e.components,t=d(e,i);return(0,a.mdx)(l,r({},o,t,{components:n,mdxType:"MDXLayout"}),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\n\nconst DisclosureManagerContext = React.createContext();\n\nexport default DisclosureManagerContext;\n\n")))}s.isMDXComponent=!0;var m=["components"];function p(){return p=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},p.apply(this,arguments)}function c(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var u={},h="wrapper";function x(e){var n=e.components,t=c(e,m);return(0,a.mdx)(h,p({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.mdx)("h1",{id:"disclosuremanagercontext"},"DisclosureManagerContext"),(0,a.mdx)("p",null,"The DisclosureManagerContext defines an communication interface between the ModalManager/SlidePanelManager and application content."),(0,a.mdx)("blockquote",null,(0,a.mdx)("p",{parentName:"blockquote"},"Note: A DisclosureManagerContext.Provider is rendered by the ModalManager and SlidePanelManager. Any components rendered within\nthose managers (or disclosed by them) can access a DisclosureManagerContext value without rendering additional providers.")),(0,a.mdx)("h2",{id:"usage"},"Usage"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-jsx"},"import { DisclosureManagerContext } from 'terra-application/lib/disclosure-manager';\n")),(0,a.mdx)("h2",{id:"context-value"},"Context Value"),(0,a.mdx)(s,{mdxType:"ContextDefinition"}),(0,a.mdx)("h2",{id:"details"},"Details"),(0,a.mdx)("h3",{id:"disclosuremanagerheaderadapter"},"DisclosureManagerHeaderAdapter"),(0,a.mdx)("p",null,"Implementations of the DisclosureManager must render a header containing controls for the various disclosure management actions\n(close, back, maximize/minimize, etc.). The DisclosureManagerHeaderAdapter can be rendered by the disclosed content to inject\ntheir own component-specific contents into that header."),(0,a.mdx)("p",null,(0,a.mdx)("inlineCode",{parentName:"p"},"DisclosureManagerHeaderAdapter")," Props:"),(0,a.mdx)("table",null,(0,a.mdx)("thead",{parentName:"table"},(0,a.mdx)("tr",{parentName:"thead"},(0,a.mdx)("th",{parentName:"tr",align:null},"Prop"),(0,a.mdx)("th",{parentName:"tr",align:null},"Is Required"),(0,a.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,a.mdx)("tbody",{parentName:"table"},(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null},(0,a.mdx)("inlineCode",{parentName:"td"},"title")),(0,a.mdx)("td",{parentName:"tr",align:null},"optional"),(0,a.mdx)("td",{parentName:"tr",align:null},"A string to render as the header's title.")),(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null},(0,a.mdx)("inlineCode",{parentName:"td"},"collapsibleMenuView")),(0,a.mdx)("td",{parentName:"tr",align:null},"optional"),(0,a.mdx)("td",{parentName:"tr",align:null},"A CollapsibleMenuView component to render within the header.")))),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-jsx"},"import { DisclosureManagerContext, DisclosureManagerHeaderAdapter } from 'terra-application/lib/disclosure-manager';\nimport CollapsibleMenuView from 'terra-collapsible-menu-view';\n\nconst MyDisclosureComponent = () => {\n  const disclosureManager = React.useContext(DisclosureManagerContext);\n\n  return (\n    <React.Fragment>\n      <DisclosureManagerHeaderAdapter\n        title=\"My Disclosure Component\"\n        collapsibleMenuView={<CollapsibleMenuView ... />}\n      />\n      <Button\n        text=\"Close Modal\"\n        onClick={() => {\n          disclosureManager.closeDisclosure();\n        }}\n      />\n    </React.Fragment>\n  );\n};\n")),(0,a.mdx)("h3",{id:"children"},"Children"),(0,a.mdx)("p",null,"The DisclosureManagerDelegate provided to the child components contains a ",(0,a.mdx)("inlineCode",{parentName:"p"},"disclose")," function. This ",(0,a.mdx)("inlineCode",{parentName:"p"},"disclose")," function\nvalidates the disclosure type with which it is provided against the set of supported disclosure types given to the DisclosureManager\nas a prop. If the provided type is not supported, and if the DisclosureManager detects another DisclosureManager higher in the\ncomponent hierarchy, the DisclosureManager will call the disclose function provided by that parent DisclosureManager instance."),(0,a.mdx)("p",null,"If the type is supported, the DisclosureManager will check the currently disclosed component's state to ensure it can be replaced.\nIf the disclosure is denied, then ",(0,a.mdx)("inlineCode",{parentName:"p"},"disclose")," returns a rejected Promise. If the disclosure is allowed, then a resolved Promise is returned.\nThis Promise will be resolved with an Object containing functions and Promises that can be used to manipulate the disclosure, if necessary.\nIncluded are ",(0,a.mdx)("inlineCode",{parentName:"p"},"dismissDisclosure"),", a function that will dismiss the disclosed content, and ",(0,a.mdx)("inlineCode",{parentName:"p"},"afterDismiss"),", a deferred Promise that will be\nresolved when the disclosed content is dismissed by any means. Alternatively, if the additional logic isn't needed, the returned Promise\ncan be completely ignored."),(0,a.mdx)("p",null,"Example:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-jsx"},"disclosureManager.disclose({\n  preferredType: 'disclosure-type',\n  size: 'large',\n  content: {\n    key: 'my-disclosed-content',\n    component: <DisclosedContent />,\n  }\n}).then({ dismissDisclosure, afterDismiss } => {\n  this.myContentIsDisclosed = true;\n\n  // This function can be cached and triggered as needed.\n  this.myDismissFunction = dismissDisclosure;\n\n  afterDismiss.then(() => {\n    // The afterDismiss will resolve when the content is dismissed, allowing for\n    // cleanup of local state as needed.\n    this.myContentIsDisclosed = false;\n\n    // If the dismissDisclosure function was cached, make sure it gets cleaned up.\n    this.myDismissFunction = false;\n  })\n}).catch((e) => {\n  // If this function is executed, the disclosure has been denied. You can use this to\n  // clean up any state that may be reliant on the disclosure ocurring.\n})\n")),(0,a.mdx)("p",null,(0,a.mdx)("inlineCode",{parentName:"p"},"disclose")," Argument API:"),(0,a.mdx)("table",null,(0,a.mdx)("thead",{parentName:"table"},(0,a.mdx)("tr",{parentName:"thead"},(0,a.mdx)("th",{parentName:"tr",align:null},"Key"),(0,a.mdx)("th",{parentName:"tr",align:null},"Is Required"),(0,a.mdx)("th",{parentName:"tr",align:null},"Value"))),(0,a.mdx)("tbody",{parentName:"table"},(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null},(0,a.mdx)("inlineCode",{parentName:"td"},"preferredType")),(0,a.mdx)("td",{parentName:"tr",align:null},"optional"),(0,a.mdx)("td",{parentName:"tr",align:null},"The String describing the preferred disclosure type. This will be used to match the disclosure request to an appropriate DisclosureManager. Depending on the structuring of managers in a given component, the ",(0,a.mdx)("inlineCode",{parentName:"td"},"preferredType")," value may not be honored. If the provided ",(0,a.mdx)("inlineCode",{parentName:"td"},"preferredType")," is not supported by any present disclosure managers, the root disclosure manager will perform the disclosure using its own disclosure type, regardless of the ",(0,a.mdx)("inlineCode",{parentName:"td"},"preferredType")," value.")),(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null},(0,a.mdx)("inlineCode",{parentName:"td"},"size")),(0,a.mdx)("td",{parentName:"tr",align:null},"optional"),(0,a.mdx)("td",{parentName:"tr",align:null},"The String size desired for the disclosure. One of ",(0,a.mdx)("inlineCode",{parentName:"td"},"tiny"),", ",(0,a.mdx)("inlineCode",{parentName:"td"},"small"),", ",(0,a.mdx)("inlineCode",{parentName:"td"},"medium"),", ",(0,a.mdx)("inlineCode",{parentName:"td"},"large"),", ",(0,a.mdx)("inlineCode",{parentName:"td"},"huge"),", or ",(0,a.mdx)("inlineCode",{parentName:"td"},"fullscreen"),". The functional implementation of this size is determined by the rendering component. ",(0,a.mdx)("inlineCode",{parentName:"td"},"size")," should not be provided if ",(0,a.mdx)("inlineCode",{parentName:"td"},"dimensions")," are specified.")),(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null},(0,a.mdx)("inlineCode",{parentName:"td"},"dimensions")),(0,a.mdx)("td",{parentName:"tr",align:null},"optional"),(0,a.mdx)("td",{parentName:"tr",align:null},"An Object containing explicit ",(0,a.mdx)("inlineCode",{parentName:"td"},"height")," and ",(0,a.mdx)("inlineCode",{parentName:"td"},"width")," values for the disclosure. These values may not be honored due to the disclosure type or the available viewport size. ",(0,a.mdx)("inlineCode",{parentName:"td"},"dimensions")," should not be provided if a ",(0,a.mdx)("inlineCode",{parentName:"td"},"size")," is specified.",(0,a.mdx)("br",null),"Supported ",(0,a.mdx)("inlineCode",{parentName:"td"},"height")," values include: ",(0,a.mdx)("inlineCode",{parentName:"td"},"'240'"),", ",(0,a.mdx)("inlineCode",{parentName:"td"},"'420'"),", ",(0,a.mdx)("inlineCode",{parentName:"td"},"'600'"),", ",(0,a.mdx)("inlineCode",{parentName:"td"},"'690'"),", ",(0,a.mdx)("inlineCode",{parentName:"td"},"'780'"),", ",(0,a.mdx)("inlineCode",{parentName:"td"},"'870'"),", ",(0,a.mdx)("inlineCode",{parentName:"td"},"'960'"),", ",(0,a.mdx)("inlineCode",{parentName:"td"},"'1140'"),".",(0,a.mdx)("br",null),"Supported ",(0,a.mdx)("inlineCode",{parentName:"td"},"width")," values include: ",(0,a.mdx)("inlineCode",{parentName:"td"},"'320'"),", ",(0,a.mdx)("inlineCode",{parentName:"td"},"'480'"),", ",(0,a.mdx)("inlineCode",{parentName:"td"},"'560'"),", ",(0,a.mdx)("inlineCode",{parentName:"td"},"'640'"),", ",(0,a.mdx)("inlineCode",{parentName:"td"},"'800'"),", ",(0,a.mdx)("inlineCode",{parentName:"td"},"'960'"),", ",(0,a.mdx)("inlineCode",{parentName:"td"},"'1120'"),", ",(0,a.mdx)("inlineCode",{parentName:"td"},"'1280'"),", ",(0,a.mdx)("inlineCode",{parentName:"td"},"'1440'"),", ",(0,a.mdx)("inlineCode",{parentName:"td"},"'1600'"),", ",(0,a.mdx)("inlineCode",{parentName:"td"},"'1760'"),", ",(0,a.mdx)("inlineCode",{parentName:"td"},"'1920'"),".")),(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null},(0,a.mdx)("inlineCode",{parentName:"td"},"content")),(0,a.mdx)("td",{parentName:"tr",align:null},(0,a.mdx)("strong",{parentName:"td"},"required")),(0,a.mdx)("td",{parentName:"tr",align:null},"An Object containing a key and a component describing the component to be disclosed. See the ",(0,a.mdx)("inlineCode",{parentName:"td"},"content")," API below.")))),(0,a.mdx)("p",null,(0,a.mdx)("inlineCode",{parentName:"p"},"content")," Object API:"),(0,a.mdx)("table",null,(0,a.mdx)("thead",{parentName:"table"},(0,a.mdx)("tr",{parentName:"thead"},(0,a.mdx)("th",{parentName:"tr",align:null},"Key"),(0,a.mdx)("th",{parentName:"tr",align:null},"Is Required"),(0,a.mdx)("th",{parentName:"tr",align:null},"Value"))),(0,a.mdx)("tbody",{parentName:"table"},(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null},(0,a.mdx)("inlineCode",{parentName:"td"},"key")),(0,a.mdx)("td",{parentName:"tr",align:null},(0,a.mdx)("strong",{parentName:"td"},"required")),(0,a.mdx)("td",{parentName:"tr",align:null},"A String key identifying the component to the DisclosureManager. This key must be unique amongst the set of all actively disclosed component keys.")),(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null},(0,a.mdx)("inlineCode",{parentName:"td"},"component")),(0,a.mdx)("td",{parentName:"tr",align:null},(0,a.mdx)("strong",{parentName:"td"},"required")),(0,a.mdx)("td",{parentName:"tr",align:null},"A React element that will be disclosed.")))),(0,a.mdx)("h3",{id:"disclosure-content"},"Disclosure Content"),(0,a.mdx)("p",null,"In addition to a ",(0,a.mdx)("inlineCode",{parentName:"p"},"disclose")," function, a number of other functions are exposed to components rendered in the disclosure mechanism to manage various segments of the disclosure state. The included functions are:"),(0,a.mdx)("table",null,(0,a.mdx)("thead",{parentName:"table"},(0,a.mdx)("tr",{parentName:"thead"},(0,a.mdx)("th",{parentName:"tr",align:null},"Function"),(0,a.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,a.mdx)("tbody",{parentName:"table"},(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null},(0,a.mdx)("inlineCode",{parentName:"td"},"disclose")),(0,a.mdx)("td",{parentName:"tr",align:null},"Allows a component to disclose another component. See above for argument API. The DisclosureManager implementation will determine how the next object will be disclosed.")),(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null},(0,a.mdx)("inlineCode",{parentName:"td"},"dismiss")),(0,a.mdx)("td",{parentName:"tr",align:null},"Allows a component to remove itself from the disclosure stack. If the component is the only element in the disclosure stack, the disclosure is closed.")),(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null},(0,a.mdx)("inlineCode",{parentName:"td"},"closeDisclosure")),(0,a.mdx)("td",{parentName:"tr",align:null},"Allows a component to close the entire disclosure stack. This is generally integrated into face-up disclosure controls as a Close button or similar.")),(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null},(0,a.mdx)("inlineCode",{parentName:"td"},"goBack")),(0,a.mdx)("td",{parentName:"tr",align:null},"Allows a component to remove itself from the disclosure stack. Functionally similar to ",(0,a.mdx)("inlineCode",{parentName:"td"},"dismiss"),", however ",(0,a.mdx)("inlineCode",{parentName:"td"},"onBack")," is only provided to components in the stack that have a previous sibling. This is generally integrated into face-up disclosure controls as a Back button or similar.")),(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null},(0,a.mdx)("inlineCode",{parentName:"td"},"maximize")),(0,a.mdx)("td",{parentName:"tr",align:null},"Allows a component to maximize its presentation size. This is only provided if the component is not already maximized.")),(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null},(0,a.mdx)("inlineCode",{parentName:"td"},"minimize")),(0,a.mdx)("td",{parentName:"tr",align:null},"Allows a component to minimize its presentation size. This is only provided if the component is currently maximized.")),(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null},(0,a.mdx)("inlineCode",{parentName:"td"},"requestFocus")),(0,a.mdx)("td",{parentName:"tr",align:null},"Allows a component to request focus from the disclosure in the event that the disclosure mechanism in use utilizes a focus trap. This can be integrated with the Popup and similar focus-stealing controls.")),(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null},(0,a.mdx)("inlineCode",{parentName:"td"},"releaseFocus")),(0,a.mdx)("td",{parentName:"tr",align:null},"Allows a component to release focus from itself and return it to the disclosure. This can be integrated with the Popup and similar focus-stealing controls.")),(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null},(0,a.mdx)("inlineCode",{parentName:"td"},"registerDismissCheck")),(0,a.mdx)("td",{parentName:"tr",align:null},"Allows a component to register a function with the DisclosureManager that will be called before the component is dismissed. Calling this function will override the default implementation that checks for the presence of NavigationPrompts.")))),(0,a.mdx)("p",null,"Each of these functions returns a Promise that can be used for chaining, if necessary."),(0,a.mdx)("h4",{id:"a-note-on-registerdismisscheck"},"A Note on ",(0,a.mdx)("inlineCode",{parentName:"h4"},"registerDismissCheck")),(0,a.mdx)("p",null,"By default, the DisclosureManager monitors its disclosed content for the presence of ",(0,a.mdx)("a",{parentName:"p",href:"/terra-ui/pull/599/application/terra-application/components/navigation-prompt"},"NavigationPrompts"),".\nThe user will be prompted if they attempt to close the dismiss the disclosure while NavigationPrompts are present."),(0,a.mdx)("p",null,"If the modal content calls ",(0,a.mdx)("inlineCode",{parentName:"p"},"registerDismissCheck")," to add its own pre-dismissal logic, the default NavigationPrompt handling will be ",(0,a.mdx)("strong",{parentName:"p"},"disabled"),".\nAny component that uses ",(0,a.mdx)("inlineCode",{parentName:"p"},"registerDismissCheck")," should check for the presence of NavigationPrompts (using a ",(0,a.mdx)("a",{parentName:"p",href:"/terra-ui/pull/599/application/terra-application/components/navigation-prompt-checkpoint"},"NavigationPromptCheckpoint"),")\nin addition to whatever custom logic is required."),(0,a.mdx)("p",null,"Given this complexity, usage of the ",(0,a.mdx)("inlineCode",{parentName:"p"},"registerDismissCheck")," API is ",(0,a.mdx)("strong",{parentName:"p"},"not recommended"),"."),(0,a.mdx)("p",null,"The function provided to ",(0,a.mdx)("inlineCode",{parentName:"p"},"registerDismissCheck")," must return a resolved or rejected Promise.\nIf the Promise is resolved, the component is guaranteed to be dismissed.\nIf cleanup logic needs to execute before the component is dismissed, it is a good idea to execute before returning the resolved Promise.\nIf a rejected Promise is returned, the component will not be dismissed."))}x.isMDXComponent=!0}}]);