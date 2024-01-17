"use strict";(self.webpackChunkterra_ui=self.webpackChunkterra_ui||[]).push([[75494,45627,85565,3353,5161,45865,85355,3193,4845,46647,85161,38681,15318,40411,18101,38443,11264,34319,20116,33609,12026],{22863:function(e,n,t){var a=t(64836);n.Z=void 0;var r=a(t(67294)),i=a(t(45697)),o=a(t(19845)),l=a(t(17422)),d=o.default.bind(l.default),s={name:i.default.string.isRequired,src:i.default.string,url:i.default.string,version:i.default.string.isRequired},m=function(e){var n=e.src,t=e.name,a=e.url,i=e.version,o=r.default.createElement("a",{className:d("badge"),href:a||"https://www.npmjs.org/package/".concat(t,"/v/").concat(i)},r.default.createElement("span",{className:d("badge-name")},a?"package":"npm"),r.default.createElement("span",{className:d("badge-version")},"v".concat(i))),l=n?r.default.createElement("a",{className:d("badge"),href:n},r.default.createElement("span",{className:d("badge-name")},"github"),r.default.createElement("span",{className:d("badge-version")},"source")):void 0;return r.default.createElement("div",{className:d("badge-container")},o,l)};m.propTypes=s;var c=m;n.Z=c},75494:function(e,n,t){t.r(n),t.d(n,{default:function(){return m}});t(67294);var a=t(81254),r=t(70640),i=["components"];function o(){return o=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},o.apply(this,arguments)}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var d={},s="wrapper";function m(e){var n=e.components,t=l(e,i);return(0,a.mdx)(s,o({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.mdx)(r.C,{mdxType:"Badge"}),(0,a.mdx)("h1",{id:"disclosing-content-with-a-header"},"Disclosing Content With a Header"),(0,a.mdx)("p",null,"Implementations of the DisclosureManager must render a header containing controls for the various disclosure management actions (close, back, maximize/minimize, etc.). "),(0,a.mdx)("p",null,"The ",(0,a.mdx)("inlineCode",{parentName:"p"},"DisclosureManagerHeaderAdapter")," can be used to register header information to the disclosing manager. This can be usd to register a title and a collapsibleMenuView."),(0,a.mdx)("h2",{id:"disclosuremanagerheaderadapter"},"DisclosureManagerHeaderAdapter"),(0,a.mdx)("p",null,"The DisclosureManagerHeaderAdapter can be rendered by the disclosed content to inject their own component-specific contents into that header."),(0,a.mdx)("p",null,(0,a.mdx)("inlineCode",{parentName:"p"},"DisclosureManagerHeaderAdapter")," Props:"),(0,a.mdx)("table",null,(0,a.mdx)("thead",{parentName:"table"},(0,a.mdx)("tr",{parentName:"thead"},(0,a.mdx)("th",{parentName:"tr",align:null},"Prop"),(0,a.mdx)("th",{parentName:"tr",align:null},"Is Required"),(0,a.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,a.mdx)("tbody",{parentName:"table"},(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null},(0,a.mdx)("inlineCode",{parentName:"td"},"title")),(0,a.mdx)("td",{parentName:"tr",align:null},"optional"),(0,a.mdx)("td",{parentName:"tr",align:null},"A string to render as the header's title. Used if the title was not provided as a parameter in the disclosure.")),(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null},(0,a.mdx)("inlineCode",{parentName:"td"},"collapsibleMenuView")),(0,a.mdx)("td",{parentName:"tr",align:null},"optional"),(0,a.mdx)("td",{parentName:"tr",align:null},"A CollapsibleMenuView component to render within the header.")))),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-jsx"},"import { DisclosureManagerContext, DisclosureManagerHeaderAdapter } from 'terra-disclosure-manager';\nimport Button from 'terra-button';\nimport CollapsibleMenuView from 'terra-collapsible-menu-view';\n\nconst DisclosedComponent = () => {\n  const disclosureManager = React.useContext(DisclosureManagerContext);\n\n  return (\n    <React.Fragment>\n     <DisclosureManagerHeaderAdapter\n       title=\"My Disclosure Component\"\n       collapsibleMenuView={<CollapsibleMenuView />}\n     />\n      <Button\n        text=\"Close Modal\"\n        onClick={() => {\n          disclosureManager.closeDisclosure();\n        }}\n      />\n    </React.Fragment>\n  );\n};\n")),(0,a.mdx)("p",null,"This will register the header information on mount."),(0,a.mdx)("h2",{id:"providing-a-title-on-disclose"},"Providing a Title on Disclose"),(0,a.mdx)("p",null,"It has been observed that there can be a 'pop-in' affect with the header render in slow domains and using the ",(0,a.mdx)("inlineCode",{parentName:"p"},"DisclosureManagerHeaderAdapter"),". It is recommended to provide a ",(0,a.mdx)("inlineCode",{parentName:"p"},"title")," parameter to the disclose function that will render the disclosed content to ensure the header is rendered immediately. This will render the header with the title, and then the ",(0,a.mdx)("inlineCode",{parentName:"p"},"DisclosureManagerHeaderAdapter")," can be used to add additional button content into the header. While disclosing with a title parameter, the disclose title will have priority, even if a title value is provided through the ",(0,a.mdx)("inlineCode",{parentName:"p"},"DisclosureManagerHeaderAdapter"),"."),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-jsx"},"import { DisclosureManagerContext } from 'terra-disclosure-manager';\nimport Button from 'terra-button';\nconst DisclosingComponent = () => {\n  const disclosureManager = React.useContext(DisclosureManagerContext);\n  return (\n    <Button\n      text=\"Launch Modal\"\n      onClick={() => {\n        disclosureManager.disclose({\n          preferredType: 'modal',\n          content: {\n            key: 'MY-MODAL-DISCLOSURE',\n            title: 'MY-MODAL-DISCLOSURE',\n            component: <MyDisclosureComponent />,\n          }\n        });\n      }}\n    />\n  );\n};\n")))}m.isMDXComponent=!0},70640:function(e,n,t){t.d(n,{C:function(){return i}});var a=t(67294),r=t(22863),i=function(e){var n=e.url;return a.createElement(r.Z,{src:"https://github.com/cerner/terra-framework/tree/main/packages/terra-disclosure-manager",name:"terra-disclosure-manager",version:"4.43.0",url:n})}},17422:function(e,n,t){t.r(n),n.default={badge:"Badges-module__badge___vex-+","badge-container":"Badges-module__badge-container___B13Mv","badge-name":"Badges-module__badge-name___jkN0m","badge-version":"Badges-module__badge-version___agZ+P"}}}]);