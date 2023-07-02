"use strict";(self.webpackChunkterra_ui=self.webpackChunkterra_ui||[]).push([[56011],{31026:function(e,n,a){a.r(n),a.d(n,{default:function(){return g}});a(67294);var o=a(81254),t=a(78530),r=["components"];function d(){return d=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var a=arguments[n];for(var o in a)Object.prototype.hasOwnProperty.call(a,o)&&(e[o]=a[o])}return e},d.apply(this,arguments)}function i(e,n){if(null==e)return{};var a,o,t=function(e,n){if(null==e)return{};var a,o,t={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],n.indexOf(a)>=0||(t[a]=e[a]);return t}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)a=r[o],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}var l={},s="wrapper";function p(e){var n=e.components,a=i(e,r);return(0,o.mdx)(s,d({},l,a,{components:n,mdxType:"MDXLayout"}),(0,o.mdx)(t.ZP,{mdxType:"PropsTable"},(0,o.mdx)(t.X2,{key:"ROW1",mdxType:"Row"},(0,o.mdx)(t.O,{mdxType:"PropNameCell"},"children"),(0,o.mdx)(t.Di,{mdxType:"TypeCell"},(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-javascript"},"node\n"))),(0,o.mdx)(t.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,o.mdx)(t.mW,{mdxType:"DefaultValueCell"},(0,o.mdx)("p",null,"none")),(0,o.mdx)(t.Ex,{mdxType:"DescriptionCell"},(0,o.mdx)("p",null,"The components to be rendered in the body of the ModalManager. These components will receive the\ndisclosure capabilities through the DisclosureManger's context API."))),(0,o.mdx)(t.X2,{key:"ROW2",mdxType:"Row"},(0,o.mdx)(t.O,{mdxType:"PropNameCell"},"disclosureAccessory"),(0,o.mdx)(t.Di,{mdxType:"TypeCell"},(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-javascript"},"element\n"))),(0,o.mdx)(t.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,o.mdx)(t.mW,{mdxType:"DefaultValueCell"},(0,o.mdx)("p",null,"none")),(0,o.mdx)(t.Ex,{mdxType:"DescriptionCell"},(0,o.mdx)("p",null,"The component to render within the Modal above the disclosed content."))),(0,o.mdx)(t.X2,{key:"ROW3",mdxType:"Row"},(0,o.mdx)(t.O,{mdxType:"PropNameCell"},"navigationPromptResolutionOptions"),(0,o.mdx)(t.Di,{mdxType:"TypeCell"},(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-javascript"},"custom\n"))),(0,o.mdx)(t.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,o.mdx)(t.mW,{mdxType:"DefaultValueCell"},(0,o.mdx)("p",null,"none")),(0,o.mdx)(t.Ex,{mdxType:"DescriptionCell"},(0,o.mdx)("p",null,"The Object (or function that returns an Object) that specifies the messages\nused to prompt the user when disclosure dismissal occurs when pending state\nis present. If not provided, the default messaging will be used.")))))}p.isMDXComponent=!0;var c=["components"];function m(){return m=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var a=arguments[n];for(var o in a)Object.prototype.hasOwnProperty.call(a,o)&&(e[o]=a[o])}return e},m.apply(this,arguments)}function u(e,n){if(null==e)return{};var a,o,t=function(e,n){if(null==e)return{};var a,o,t={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],n.indexOf(a)>=0||(t[a]=e[a]);return t}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)a=r[o],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}var h={},x="wrapper";function g(e){var n=e.components,a=u(e,c);return(0,o.mdx)(x,m({},h,a,{components:n,mdxType:"MDXLayout"}),(0,o.mdx)("h1",{id:"modalmanager"},"ModalManager"),(0,o.mdx)("p",null,"The ModalManager exposes its children to modal presentation APIs through the\n",(0,o.mdx)("a",{parentName:"p",href:"/terra-ui/application/terra-application/contexts/disclosure-manager-context"},"DisclosureManagerContext"),"."),(0,o.mdx)("h2",{id:"usage"},"Usage"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-jsx"},"import ModalManager from 'terra-application/lib/modal-manager';\n")),(0,o.mdx)("h2",{id:"props"},"Props"),(0,o.mdx)(p,{mdxType:"PropsTable"}),(0,o.mdx)("h2",{id:"features"},"Features"),(0,o.mdx)("h3",{id:"exception-handling"},"Exception Handling"),(0,o.mdx)("p",null,"ModalManager renders an ",(0,o.mdx)("a",{parentName:"p",href:"/terra-ui/application/terra-application/components/application-error-boundary"},"ApplicationErrorBoundary"),"\naround its disclosed components. If the disclosed components throw exceptions during React lifecycle functions, ModalManager will\ncatch the exceptions and render a styled error component in place of the children."),(0,o.mdx)("blockquote",null,(0,o.mdx)("p",{parentName:"blockquote"},"If the disclosed modal contents do not utilize the DisclosureManagerHeaderAdapter and render their own modal header instead,\nit is recommended that those components render an additional ApplicationErrorBoundary below their modal header to keep the\nheader controls for modal dismissal exposed.")),(0,o.mdx)("h3",{id:"loading-overlays"},"Loading Overlays"),(0,o.mdx)("p",null,"ModalManager renders an ",(0,o.mdx)("a",{parentName:"p",href:"/terra-ui/application/terra-application/components/application-loading-overlay-provider"},"ApplicationLoadingOverlayProvider"),"\naround its disclosed components. Any ",(0,o.mdx)("a",{parentName:"p",href:"/terra-ui/application/terra-application/components/application-loading-overlay"},"ApplicationLoadingOverlay"),"\ncomponents rendered by children will cause a loading overlay to be rendered over the modal's contents."),(0,o.mdx)("blockquote",null,(0,o.mdx)("p",{parentName:"blockquote"},"If the disclosed modal contents do not utilize the DisclosureManagerHeaderAdapter and render their own modal header instead,\nit is recommended that those components render an additional ApplicationLoadingOverlayProvider below their modal header to keep\nthe header controls for modal dismissal exposed while the overlay is active.")),(0,o.mdx)("h3",{id:"status-views"},"Status Views"),(0,o.mdx)("p",null,"ModalManager renders an ",(0,o.mdx)("a",{parentName:"p",href:"/terra-ui/application/terra-application/components/application-status-overlay-provider"},"ApplicationStatusOverlayProvider"),"\naround its disclosed components. Any ",(0,o.mdx)("a",{parentName:"p",href:"/terra-ui/application/terra-application/components/application-status-overlay"},"ApplicationStatusOverlay"),"\ncomponents rendered by children will cause a status view to be rendered over the modal's contents."),(0,o.mdx)("blockquote",null,(0,o.mdx)("p",{parentName:"blockquote"},"If the disclosed modal contents do not utilize the DisclosureManagerHeaderAdapter and render their own modal header instead,\nit is recommended that those components render an additional ApplicationStatusOverlayProvider below their modal header to keep\nthe header controls for modal dismissal exposed while the status view is active.")),(0,o.mdx)("h3",{id:"unsaved-changes"},"Unsaved Changes"),(0,o.mdx)("p",null,"ModalManager monitors its disclosed content for the presence of rendered ",(0,o.mdx)("a",{parentName:"p",href:"/terra-ui/application/terra-application/components/navigation-prompt"},"NavigationPrompts"),"\nwithin its disclosed content. ModalManager will ensure that the user is prompted prior to dismissing the presented modal if any\n",(0,o.mdx)("a",{parentName:"p",href:"/terra-ui/application/terra-application/components/navigation-prompt"},"NavigationPrompts")," are rendered at the time of the dismissal request."),(0,o.mdx)("h2",{id:"details"},"Details"),(0,o.mdx)("h3",{id:"implementation-requirements"},"Implementation Requirements"),(0,o.mdx)("p",null,"The ModalManager utilizes the ",(0,o.mdx)("a",{parentName:"p",href:"/terra-ui/application/terra-application/contexts/disclosure-manager-context"},"DisclosureManagerContext")," to manage disclosure requests."),(0,o.mdx)("p",null,"The ModalManager responds to ",(0,o.mdx)("inlineCode",{parentName:"p"},'"modal"')," disclosure type requests. Components that wish to disclose content using the ModalManager\nshould provide a preferred type of ",(0,o.mdx)("inlineCode",{parentName:"p"},'"modal"'),"."),(0,o.mdx)("h3",{id:"disclosuremanagerheaderadapter-support"},"DisclosureManagerHeaderAdapter Support"),(0,o.mdx)("p",null,"If a component disclosed by the ModalManager renders a ",(0,o.mdx)("inlineCode",{parentName:"p"},"DisclosureManagerHeaderAdapter"),", the ModalManager will render an ActionHeader\nand provide the standard disclosure navigation controls (close, go back, maximize/minimize, etc.) within it. The disclosed component\ncan use the ",(0,o.mdx)("inlineCode",{parentName:"p"},"DisclosureManagerHeaderAdapter")," to inject its own title and CollapsibleButtonView into the ActionHeader."),(0,o.mdx)("p",null,"If the disclosed component does ",(0,o.mdx)("strong",{parentName:"p"},"not")," render a ",(0,o.mdx)("inlineCode",{parentName:"p"},"DisclosureManagerHeaderAdapter"),", the ModalManager will ",(0,o.mdx)("strong",{parentName:"p"},"not")," render an ActionHeader itself.\nIn this case, it is assumed that the disclosed component is rendering its own header. The disclosed component is responsible for rendering\nthe appropriate controls to navigate the disclosure stack."),(0,o.mdx)("blockquote",null,(0,o.mdx)("p",{parentName:"blockquote"},"Note: The DisclosureManagerHeaderAdapter is the preferred way to present a header within the ModalManager.\nIn a future major release, the ModalManager will ",(0,o.mdx)("strong",{parentName:"p"},"always")," render the header and navigation controls, regardless of the presence of a DisclosureManagerHeaderAdapter.")),(0,o.mdx)("h3",{id:"disclosure-accessory"},"Disclosure Accessory"),(0,o.mdx)("p",null,"The ",(0,o.mdx)("inlineCode",{parentName:"p"},"disclosureAccessory")," prop allows consumers of the ModalManager to render a static component above the disclosed modal content.\nThe provided component will be rendered below the standard ActionHeader and above the disclosed content. This can be used to easily\nprovide additional context to every disclosed component. This component is provided once to the ModalManager instance, not on a per-disclosure basis,\nand each component in the disclosure stack will be decorated with the same accessory component."),(0,o.mdx)("h3",{id:"example"},"Example"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Button from 'terra-button';\nimport ModalManager, { disclosureType } from 'terra-application/lib/modal-manager';\nimport { withDisclosureManager, DisclosureManagerContext, DisclosureManagerHeaderAdapter } from 'terra-application/lib/disclosure-manager';\nimport CollapsibleMenuView from 'terra-collapsible-menu-view';\n\nconst ModalComponentB = () => (\n  <React.Fragment>\n    <DisclosureManagerHeaderAdapter\n      title=\"Modal Component B\"\n    />\n    <p>I am ModalComponentB!</p>\n  </React.Fragment>\n);\n\nconst ModalComponentA = () => {\n  const disclosureManager = React.useContext(DisclosureManagerContext);\n\n  return (\n    <div>\n      <DisclosureManagerHeaderAdapter\n        title=\"Modal Component A\"\n        collapsibleMenuView={<CollapsibleMenuView />}\n      />\n      <p>I am ModalComponentA!</p>\n      <Button\n        text=\"Disclose ModalComponentB\"\n        onClick={() => {\n          disclosureManager.disclose({\n            preferredType: 'modal',\n            size: 'large',\n            content: {\n              key: 'modal-component-b-instance',\n              component: <ModalComponentB />\n            }\n          });\n        }}\n      />\n    </div>\n  );\n}\n\nconst MyContentComponent = withDisclosureManager(({ disclosureManager }) => (\n  <div>\n    <p>I am MyContentComponent!</p>\n    <Button\n      text=\"Disclose ModalComponentA\"\n      onClick={() => {\n        disclosureManager.disclose({\n          preferredType: 'modal',\n          size: 'large',\n          content: {\n            key: 'modal-component-a-instance',\n            component: <ModalComponentA />\n          }\n        });\n      }}\n    />\n  </div>\n));\n\nMyContentComponent.propTypes = {\n  disclosureManager: disclosureManagerShape,\n}\n\nconst MyModalManagerComponent = () => (\n  <ModalManager\n    disclosureAccessory={<div>Disclosure Accessory</div>}\n  >\n    <MyContentComponent />\n  </ModalManager>\n);\n")))}g.isMDXComponent=!0}}]);