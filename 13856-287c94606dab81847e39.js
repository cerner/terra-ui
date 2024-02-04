"use strict";(self.webpackChunkterra_ui=self.webpackChunkterra_ui||[]).push([[13856,83532,61152,38768,16388,73056,50676,28296,5912,4484,82104,96528,74148,51768,7004,84624,62240,39860,95100,76480,54100],{11416:function(e,n,t){var i=t(22411);n.c=void 0;var a=i(t(11504)),d=i(t(3268)),r=i(t(74824)),s=i(t(58112)),o=r.default.bind(s.default),l={name:d.default.string.isRequired,src:d.default.string,url:d.default.string,version:d.default.string.isRequired},m=function(e){var n=e.src,t=e.name,i=e.url,d=e.version,r=a.default.createElement("a",{className:o("badge"),href:i||"https://www.npmjs.org/package/".concat(t,"/v/").concat(d)},a.default.createElement("span",{className:o("badge-name")},i?"package":"npm"),a.default.createElement("span",{className:o("badge-version")},"v".concat(d))),s=n?a.default.createElement("a",{className:o("badge"),href:n},a.default.createElement("span",{className:o("badge-name")},"github"),a.default.createElement("span",{className:o("badge-version")},"source")):void 0;return a.default.createElement("div",{className:o("badge-container")},r,s)};m.propTypes=l;n.c=m},13856:function(e,n,t){t.r(n),t.d(n,{default:function(){return m}});t(11504);var i=t(69788),a=t(68104),d=["components"];function r(){return r=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},r.apply(this,arguments)}function s(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},d=Object.keys(e);for(i=0;i<d.length;i++)t=d[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(e);for(i=0;i<d.length;i++)t=d[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o={},l="wrapper";function m(e){var n=e.components,t=s(e,d);return(0,i.mdx)(l,r({},o,t,{components:n,mdxType:"MDXLayout"}),(0,i.mdx)(a.k,{mdxType:"Badge"}),(0,i.mdx)("h1",{id:"disclosure-apis"},"Disclosure APIs"),(0,i.mdx)("p",null,"Both DisclosureManager Children and disclosed content will be provided with a ",(0,i.mdx)("inlineCode",{parentName:"p"},"DisclosureManagerDelegate")," instance via the DisclosureManagerContext. This provides disclose APIs the content can use to manager disclosures."),(0,i.mdx)("h2",{id:"disclose-api"},"disclose API"),(0,i.mdx)("p",null,"The ",(0,i.mdx)("inlineCode",{parentName:"p"},"DisclosureManagerDelegate")," provided to the content contains a ",(0,i.mdx)("inlineCode",{parentName:"p"},"disclose")," function which returns a Promise."),(0,i.mdx)("p",null,"This ",(0,i.mdx)("inlineCode",{parentName:"p"},"disclose")," function can be used by both Disclosure Manager children and disclosed content to disclose new content. The type of disclosure can be specified when ",(0,i.mdx)("inlineCode",{parentName:"p"},"disclose")," is called. The ",(0,i.mdx)("inlineCode",{parentName:"p"},"disclose")," function will validate the specified disclosure type against the set of supported disclosure types that were provided to the DisclosureManager via the ",(0,i.mdx)("inlineCode",{parentName:"p"},"supportedDisclosureTypes")," prop."),(0,i.mdx)("p",null,"If the type is supported, the DisclosureManager will check the currently disclosed component's state to ensure it can be replaced."),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},"If the disclosure is allowed,  then ",(0,i.mdx)("inlineCode",{parentName:"p"},"disclose")," returns a resolved Promise. This Promise will be resolved with an Object containing functions and Promises that can be used to manipulate the disclosure, if necessary. Alternatively, if the additional logic isn't needed, the returned Promise can be completely ignored. The resolve API includes"),(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"dismissDisclosure"),", a function that will dismiss the disclosed content. "),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"afterDismiss"),", a deferred Promise that will be resolved when the disclosed content is dismissed by any means. "))),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},"If the disclosure is denied, then ",(0,i.mdx)("inlineCode",{parentName:"p"},"disclose")," returns a rejected Promise. "))),(0,i.mdx)("p",null,"If the provided type is not supported, and if the DisclosureManager detects another DisclosureManager higher in the component hierarchy, the DisclosureManager will call the disclose function provided by that parent DisclosureManager instance. The parent DisclosureManager will also return also resolve or reject a Promise."),(0,i.mdx)("details",null,(0,i.mdx)("summary",null,"Disclose Arguments in Detail"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-js"},"disclosureManager.disclose({\n  /* REQUIRED: The content information associated to the component to be disclosed. */\n  content: {\n    /* REQUIRED: The React component to be disclosed. */\n    component: PropTypes.node,\n\n    /**\n     * REQUIRED: The unique identifier of the component to disclosed. This key must be unique \n     * amongst the set of all actively disclosed component keys.\n     */\n    key: PropsTypes.string,\n    \n    /**\n     * The title to associated to the component.\n     */\n    title: PropsTypes.string,\n  },\n\n  /**\n   * The preferred disclosure type. This will be used to match the disclosure request to an appropriate\n   * DisclosureManager. Depending on the structuring of managers in a given component, the preferredType\n   * value may not be honored. If the provided preferredType is not supported by any present disclosure managers,\n   * the root disclosure manager will perform the disclosure using its own disclosure type, regardless of the\n   * preferredType value.\n   */\n  preferredType: PropsTypes.string,\n\n  /**\n   * The explicit `height` and `width` values for the disclosure. These values may not be honored due to the\n   * disclosure type or the available viewport size.\n   * `dimensions` should not be provided if a `size` is specified.\n   */\n  dimensions: {\n    /**\n     * Supported `height` values include: `'240'`, `'280'`, `'380'`, `'420'`, `'460'`, `'600'`, `'690'`,\n     * `'780'`, `'870'`, `'960'`, `'1140'`.\n     */\n    height: PropTypes.number,\n\n    /**\n     * Supported `width` values include: `'320'`, `'400'`, `'480'`, `'560'`, `'600'`, `'640'`, `'700'`,\n     * `'800'`, `'960'`, `'1120'`, `'1280'`, `'1440'`, `'1600'`, `'1760'`, `'1920'`.\n     */\n    width: PropsTypes.number,\n  },\n\n  /**\n   * The String size desired for the disclosure. One of `tiny`, `small`, `medium`, `large`, `huge`, or `fullscreen`.\n   * Additional sizes `fusion-small`, `fusion-medium`, and `fusion-large` supported for disclosure type `modal` only.\n   * The functional implementation of this size is determined by the component responsible for\n   * providing the render prop to the DisclosureManager.\n   *   > Note: `size` should not be provided if `dimensions` are specified.\n   */\n  size: PropsTypes.func,\n\n  /**\n   * Additional custom properties to override disclosed component props.\n   * Currently is limited to `panelBehavior` property of slide panel manager. To set\\override panelBehavior we could do `typeConfig: { panelBehavior: 'squish' }`.\n   */\n  typeConfig: PropsTypes.Object\n}).then(() => {\n  // do stuff\n});\n"))),(0,i.mdx)("h3",{id:"example"},"Example"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-jsx"},"<Button\n  text=\"Open Modal\"\n  onClick={() => {\n    disclosureManager.disclose({\n      preferredType: 'modal',\n      size: 'large',\n      content: {\n        key: 'my-disclosed-content',\n        title: 'My Disclosed Content',\n        component: <DisclosedContent />,\n      }\n    }).then({ dismissDisclosure, afterDismiss } => {\n      this.myContentIsDisclosed = true;\n\n      // This function can be cached and triggered as needed.\n      this.myDismissFunction = dismissDisclosure;\n\n      afterDismiss.then(() => {\n        // The afterDismiss will resolve when the content is dismissed, allowing for\n        // cleanup of local state as needed.\n        this.myContentIsDisclosed = false;\n\n        // If the dismissDisclosure function was cached, make sure it gets cleaned up.\n        this.myDismissFunction = false;\n      })\n    }).catch((e) => {\n      // If this function is executed, the disclosure has been denied. You can use this to\n      // clean up any state that may be reliant on the disclosure occurring.\n    })\n  }}\n/>\n")),(0,i.mdx)("h3",{id:"disclose-props"},"Disclose props"),(0,i.mdx)("p",null,(0,i.mdx)("inlineCode",{parentName:"p"},"disclose")," Argument API:"),(0,i.mdx)("table",null,(0,i.mdx)("thead",{parentName:"table"},(0,i.mdx)("tr",{parentName:"thead"},(0,i.mdx)("th",{parentName:"tr",align:null},"Key"),(0,i.mdx)("th",{parentName:"tr",align:null},"Is Required"),(0,i.mdx)("th",{parentName:"tr",align:null},"Value"))),(0,i.mdx)("tbody",{parentName:"table"},(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"preferredType")),(0,i.mdx)("td",{parentName:"tr",align:null},"optional"),(0,i.mdx)("td",{parentName:"tr",align:null},"The String describing the preferred disclosure type. This will be used to match the disclosure request to an appropriate DisclosureManager. Depending on the structuring of managers in a given component, the ",(0,i.mdx)("inlineCode",{parentName:"td"},"preferredType")," value may not be honored. If the provided ",(0,i.mdx)("inlineCode",{parentName:"td"},"preferredType")," is not supported by any present disclosure managers, the root disclosure manager will perform the disclosure using its own disclosure type, regardless of the ",(0,i.mdx)("inlineCode",{parentName:"td"},"preferredType")," value.")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"size")),(0,i.mdx)("td",{parentName:"tr",align:null},"optional"),(0,i.mdx)("td",{parentName:"tr",align:null},"The String size desired for the disclosure. One of ",(0,i.mdx)("inlineCode",{parentName:"td"},"tiny"),", ",(0,i.mdx)("inlineCode",{parentName:"td"},"small"),", ",(0,i.mdx)("inlineCode",{parentName:"td"},"medium"),", ",(0,i.mdx)("inlineCode",{parentName:"td"},"large"),", ",(0,i.mdx)("inlineCode",{parentName:"td"},"huge"),", or ",(0,i.mdx)("inlineCode",{parentName:"td"},"fullscreen"),". Additional sizes ",(0,i.mdx)("inlineCode",{parentName:"td"},"fusion-small"),", ",(0,i.mdx)("inlineCode",{parentName:"td"},"fusion-medium"),", and ",(0,i.mdx)("inlineCode",{parentName:"td"},"fusion-large")," supported for disclosure type ",(0,i.mdx)("inlineCode",{parentName:"td"},"modal")," only. The functional implementation of this size is determined by the rendering component. ",(0,i.mdx)("inlineCode",{parentName:"td"},"size")," should not be provided if ",(0,i.mdx)("inlineCode",{parentName:"td"},"dimensions")," are specified.")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"dimensions")),(0,i.mdx)("td",{parentName:"tr",align:null},"optional"),(0,i.mdx)("td",{parentName:"tr",align:null},"An Object containing explicit ",(0,i.mdx)("inlineCode",{parentName:"td"},"height")," and ",(0,i.mdx)("inlineCode",{parentName:"td"},"width")," values for the disclosure. These values may not be honored due to the disclosure type or the available viewport size. ",(0,i.mdx)("inlineCode",{parentName:"td"},"dimensions")," should not be provided if a ",(0,i.mdx)("inlineCode",{parentName:"td"},"size")," is specified.",(0,i.mdx)("br",null),"Supported ",(0,i.mdx)("inlineCode",{parentName:"td"},"height")," values include: ",(0,i.mdx)("inlineCode",{parentName:"td"},"'240'"),", ",(0,i.mdx)("inlineCode",{parentName:"td"},"'280'"),", ",(0,i.mdx)("inlineCode",{parentName:"td"},"'380'"),", ",(0,i.mdx)("inlineCode",{parentName:"td"},"'420'"),", ",(0,i.mdx)("inlineCode",{parentName:"td"},"'460'"),", ",(0,i.mdx)("inlineCode",{parentName:"td"},"'600'"),", ",(0,i.mdx)("inlineCode",{parentName:"td"},"'690'"),", ",(0,i.mdx)("inlineCode",{parentName:"td"},"'780'"),", ",(0,i.mdx)("inlineCode",{parentName:"td"},"'870'"),", ",(0,i.mdx)("inlineCode",{parentName:"td"},"'960'"),", ",(0,i.mdx)("inlineCode",{parentName:"td"},"'1140'"),".",(0,i.mdx)("br",null),"Supported ",(0,i.mdx)("inlineCode",{parentName:"td"},"width")," values include: ",(0,i.mdx)("inlineCode",{parentName:"td"},"'320'"),", ",(0,i.mdx)("inlineCode",{parentName:"td"},"'400'"),", ",(0,i.mdx)("inlineCode",{parentName:"td"},"'480'"),", ",(0,i.mdx)("inlineCode",{parentName:"td"},"'560'"),", ",(0,i.mdx)("inlineCode",{parentName:"td"},"'600'"),", ",(0,i.mdx)("inlineCode",{parentName:"td"},"'640'"),", ",(0,i.mdx)("inlineCode",{parentName:"td"},"'700'"),", ",(0,i.mdx)("inlineCode",{parentName:"td"},"'800'"),", ",(0,i.mdx)("inlineCode",{parentName:"td"},"'960'"),", ",(0,i.mdx)("inlineCode",{parentName:"td"},"'1120'"),", ",(0,i.mdx)("inlineCode",{parentName:"td"},"'1280'"),", ",(0,i.mdx)("inlineCode",{parentName:"td"},"'1440'"),", ",(0,i.mdx)("inlineCode",{parentName:"td"},"'1600'"),", ",(0,i.mdx)("inlineCode",{parentName:"td"},"'1760'"),", ",(0,i.mdx)("inlineCode",{parentName:"td"},"'1920'"),".")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"content")),(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("strong",{parentName:"td"},"required")),(0,i.mdx)("td",{parentName:"tr",align:null},"An Object containing a key and a component describing the component to be disclosed. See the ",(0,i.mdx)("inlineCode",{parentName:"td"},"content")," API below.")))),(0,i.mdx)("h3",{id:"content-props"},"Content props"),(0,i.mdx)("p",null,(0,i.mdx)("inlineCode",{parentName:"p"},"content")," Object API:"),(0,i.mdx)("table",null,(0,i.mdx)("thead",{parentName:"table"},(0,i.mdx)("tr",{parentName:"thead"},(0,i.mdx)("th",{parentName:"tr",align:null},"Key"),(0,i.mdx)("th",{parentName:"tr",align:null},"Is Required"),(0,i.mdx)("th",{parentName:"tr",align:null},"Value"))),(0,i.mdx)("tbody",{parentName:"table"},(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"key")),(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("strong",{parentName:"td"},"required")),(0,i.mdx)("td",{parentName:"tr",align:null},"A String key identifying the component to the DisclosureManager. This key must be unique amongst the set of all actively disclosed component keys.")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"component")),(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("strong",{parentName:"td"},"required")),(0,i.mdx)("td",{parentName:"tr",align:null},"A React element that will be disclosed.")))),(0,i.mdx)("h2",{id:"other-apis"},"Other APIs"),(0,i.mdx)("p",null,"In addition to a ",(0,i.mdx)("inlineCode",{parentName:"p"},"disclose")," function, a number of other functions are exposed to components rendered in the disclosure mechanism to manage various segments of the disclosure state. The included functions are:"),(0,i.mdx)("table",null,(0,i.mdx)("thead",{parentName:"table"},(0,i.mdx)("tr",{parentName:"thead"},(0,i.mdx)("th",{parentName:"tr",align:null},"Function"),(0,i.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,i.mdx)("tbody",{parentName:"table"},(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"dismiss")),(0,i.mdx)("td",{parentName:"tr",align:null},"Allows a component to remove itself from the disclosure stack. If the component is the only element in the disclosure stack, the disclosure is closed.")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"closeDisclosure")),(0,i.mdx)("td",{parentName:"tr",align:null},"Allows a component to close the entire disclosure stack. This is generally integrated into face-up disclosure controls as a Close button or similar.")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"goBack")),(0,i.mdx)("td",{parentName:"tr",align:null},"Allows a component to remove itself from the disclosure stack. Functionally similar to ",(0,i.mdx)("inlineCode",{parentName:"td"},"dismiss"),", however ",(0,i.mdx)("inlineCode",{parentName:"td"},"onBack")," is only provided to components in the stack that have a previous sibling. This is generally integrated into face-up disclosure controls as a Back button or similar.")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"maximize")),(0,i.mdx)("td",{parentName:"tr",align:null},"Allows a component to maximize its presentation size. This is only provided if the component is not already maximized.")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"minimize")),(0,i.mdx)("td",{parentName:"tr",align:null},"Allows a component to minimize its presentation size. This is only provided if the component is currently maximized.")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"requestFocus")),(0,i.mdx)("td",{parentName:"tr",align:null},"Allows a component to request focus from the disclosure in the event that the disclosure mechanism in use utilizes a focus trap. This can be integrated with the Popup and similar focus-stealing controls.")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"releaseFocus")),(0,i.mdx)("td",{parentName:"tr",align:null},"Allows a component to release focus from itself and return it to the disclosure. This can be integrated with the Popup and similar focus-stealing controls.")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"registerDismissCheck")),(0,i.mdx)("td",{parentName:"tr",align:null},"Allows a component to register a function with the DisclosureManager that will be called before the component is dismissed for any reason.")))),(0,i.mdx)("p",null,"Each of these functions returns a Promise that can be used for chaining, if necessary."),(0,i.mdx)("h5",{id:"a-note-on-registerdismisscheck"},"A Note on registerDismissCheck"),(0,i.mdx)("p",null,"The function given to ",(0,i.mdx)("inlineCode",{parentName:"p"},"registerDismissCheck")," must return a resolved or rejected Promise. If the Promise is resolved, the component is guaranteed to be dismissed. If cleanup logic needs to execute before the component is dismissed, it is a good idea to execute before returning the resolved Promise. If a rejected Promise is returned, the component will not be dismissed. Components can render a prompt or confirmation window to give users control over the dismissal, if desired."),(0,i.mdx)("p",null,"Example:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-jsx"},"// DisclosedComponent.jsx\n\ncomponentDidMount() {\n  const { disclosureManager } = this.props;\n\n  // A dismiss function can be registered multiple times, but it usually makes sense to\n  // register a bound function a single time on mount.\n  disclosureManager.registerDismissCheck(this.unsavedChangesCheck);\n}\n\nunsavedChangesCheck() {\n  const { store } = this.props;\n  const { hasUnsavedChanges } = this.state;\n\n  return new Promise((resolve, reject) => {\n    if (hasUnsavedChanges) {\n      // The dismissal could be outright denied.\n      // reject();\n\n      // Or, a confirmation could allow user control.\n      if (!confirm('MyDisclosedComponent has unsaved changes that will be lost. Do you wish to continue?')) {\n        reject();\n        return;\n      }\n\n      // Otherwise, resolving the Promise will cause the component to be dismissed and unmounted. Any cleanup needed\n      // before dismissal should occur before the Promise is resolved.\n      store.dispatch(myCleanupActionOrSomething());\n\n      resolve();\n    }\n  });\n}\n")))}m.isMDXComponent=!0},68104:function(e,n,t){t.d(n,{k:function(){return d}});var i=t(11504),a=t(11416),d=function(e){var n=e.url;return i.createElement(a.c,{src:"https://github.com/cerner/terra-framework/tree/main/packages/terra-disclosure-manager",name:"terra-disclosure-manager",version:"4.43.0",url:n})}},58112:function(e,n,t){t.r(n),n.default={badge:"Badges-module__badge___vex-+","badge-container":"Badges-module__badge-container___B13Mv","badge-name":"Badges-module__badge-name___jkN0m","badge-version":"Badges-module__badge-version___agZ+P"}}}]);