"use strict";(self.webpackChunkterra_ui=self.webpackChunkterra_ui||[]).push([[48117,45627,85565,3353,5161,45865,85355,3193,4845,46647,85161,38681,15318,40411,18101,38443,11264,34319,20116,33609],{22863:function(e,a,n){var t=n(64836);a.Z=void 0;var i=t(n(67294)),o=t(n(45697)),r=t(n(19845)),d=t(n(17422)),l=r.default.bind(d.default),m={name:o.default.string.isRequired,src:o.default.string,url:o.default.string,version:o.default.string.isRequired},s=function(e){var a=e.src,n=e.name,t=e.url,o=e.version,r=i.default.createElement("a",{className:l("badge"),href:t||"https://www.npmjs.org/package/".concat(n,"/v/").concat(o)},i.default.createElement("span",{className:l("badge-name")},t?"package":"npm"),i.default.createElement("span",{className:l("badge-version")},"v".concat(o))),d=a?i.default.createElement("a",{className:l("badge"),href:a},i.default.createElement("span",{className:l("badge-name")},"github"),i.default.createElement("span",{className:l("badge-version")},"source")):void 0;return i.default.createElement("div",{className:l("badge-container")},r,d)};s.propTypes=m;var c=s;a.Z=c},48117:function(e,a,n){n.r(a),n.d(a,{default:function(){return s}});n(67294);var t=n(81254),i=n(28997),o=["components"];function r(){return r=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var n=arguments[a];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},r.apply(this,arguments)}function d(e,a){if(null==e)return{};var n,t,i=function(e,a){if(null==e)return{};var n,t,i={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||(i[n]=e[n]);return i}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l={},m="wrapper";function s(e){var a=e.components,n=d(e,o);return(0,t.mdx)(m,r({},l,n,{components:a,mdxType:"MDXLayout"}),(0,t.mdx)(i.C,{mdxType:"Badge"}),(0,t.mdx)("h1",{id:"terra-notification-dialog-upgrade-guide"},"Terra Notification Dialog Upgrade Guide"),(0,t.mdx)("h2",{id:"upgrading-from-version-3-to-version-4"},"Upgrading from version 3 to version 4"),(0,t.mdx)("p",null,"The latest changes to the Notification Dialog reflect risk vs non-risk situations on when a dialog is presented and we have changed the variants provided by the Notification Dialog to reflect these. To align with standards, the ability to change the header and dialog icon is no longer available for the defined variant types. The ",(0,t.mdx)("inlineCode",{parentName:"p"},"custom")," variant will need to be used if the predefined signal word and icon combination for a variant does not meet your needs."),(0,t.mdx)("h3",{id:"new-props"},"New Props"),(0,t.mdx)("ul",null,(0,t.mdx)("li",{parentName:"ul"},"Added ",(0,t.mdx)("inlineCode",{parentName:"li"},"dialogTitle")," prop"),(0,t.mdx)("li",{parentName:"ul"},"Added ",(0,t.mdx)("inlineCode",{parentName:"li"},"custom")," prop which accepts an object of keys",(0,t.mdx)("ul",{parentName:"li"},(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("inlineCode",{parentName:"li"},"signalWord")),(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("inlineCode",{parentName:"li"},"iconClassName"))))),(0,t.mdx)("h3",{id:"changed-props"},"Changed Props"),(0,t.mdx)("ul",null,(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("inlineCode",{parentName:"li"},"variant")," prop is now required and the supported values have changes. The previous variants were ",(0,t.mdx)("inlineCode",{parentName:"li"},"alert"),", ",(0,t.mdx)("inlineCode",{parentName:"li"},"warning"),", ",(0,t.mdx)("inlineCode",{parentName:"li"},"error"),", ",(0,t.mdx)("inlineCode",{parentName:"li"},"success"),", ",(0,t.mdx)("inlineCode",{parentName:"li"},"info"),", and ",(0,t.mdx)("inlineCode",{parentName:"li"},"custom"),". The new variants are ",(0,t.mdx)("inlineCode",{parentName:"li"},"hazard-high"),", ",(0,t.mdx)("inlineCode",{parentName:"li"},"hazard-medium"),", ",(0,t.mdx)("inlineCode",{parentName:"li"},"hazard-low"),", ",(0,t.mdx)("inlineCode",{parentName:"li"},"error"),", and ",(0,t.mdx)("inlineCode",{parentName:"li"},"custom"),". The mappings from the v3 variants to the v4 variants are as follows:",(0,t.mdx)("ul",{parentName:"li"},(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("inlineCode",{parentName:"li"},"alert")," -> ",(0,t.mdx)("inlineCode",{parentName:"li"},"hazard-high")),(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("inlineCode",{parentName:"li"},"warning")," -> ",(0,t.mdx)("inlineCode",{parentName:"li"},"hazard-medium")),(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("inlineCode",{parentName:"li"},"info")," -> ",(0,t.mdx)("inlineCode",{parentName:"li"},"hazard-low")),(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("inlineCode",{parentName:"li"},"error")," and ",(0,t.mdx)("inlineCode",{parentName:"li"},"custom")," - these are the same."),(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("inlineCode",{parentName:"li"},"success")," - this variant has been removed.")))),(0,t.mdx)("h3",{id:"removed-props"},"Removed Props"),(0,t.mdx)("ul",null,(0,t.mdx)("li",{parentName:"ul"},"Removed ",(0,t.mdx)("inlineCode",{parentName:"li"},"title")," - use ",(0,t.mdx)("inlineCode",{parentName:"li"},"dialogTitle")," prop instead"),(0,t.mdx)("li",{parentName:"ul"},"Removed ",(0,t.mdx)("inlineCode",{parentName:"li"},"header")," - create a custom notification dialog if a custom signal word is needed"),(0,t.mdx)("li",{parentName:"ul"},"Removed ",(0,t.mdx)("inlineCode",{parentName:"li"},"customIcon")," - use ",(0,t.mdx)("inlineCode",{parentName:"li"},"custom.iconClassName")," prop instead"),(0,t.mdx)("li",{parentName:"ul"},"Removed ",(0,t.mdx)("inlineCode",{parentName:"li"},"primaryAction")," - use ",(0,t.mdx)("inlineCode",{parentName:"li"},"acceptAction")," prop instead"),(0,t.mdx)("li",{parentName:"ul"},"Removed ",(0,t.mdx)("inlineCode",{parentName:"li"},"secondaryAction")," - use ",(0,t.mdx)("inlineCode",{parentName:"li"},"rejectAction")," prop instead"),(0,t.mdx)("li",{parentName:"ul"},"Removed ",(0,t.mdx)("inlineCode",{parentName:"li"},"message")," - use ",(0,t.mdx)("inlineCode",{parentName:"li"},"startMessage")," prop instead"),(0,t.mdx)("li",{parentName:"ul"},"Removed ",(0,t.mdx)("inlineCode",{parentName:"li"},"isOpen")," - render NotificationDialog when it should be open")),(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre",className:"language-diff"},"import NotificationDialog from 'terra-notification-dialog';\n\nconst Dialog = () => {\n  const [showDialog, setShowDialog] = React.useState(true);\n\n  return (\n+   {showDialog && <NotificationDialog\n-   <NotificationDialog\n-     isOpen\n      variant=\"error\"\n..\n")),(0,t.mdx)("h3",{id:"removed-notificationdialogvariants-export"},"Removed NotificationDialogVariants Export"),(0,t.mdx)("p",null,"The NotificationDialogVariants export was removed. Use the variant string instead."),(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre",className:"language-diff"},"- import NotificationDialog, { NotificationDialogVariants } from 'terra-notification-dialog';\n+ import NotificationDialog from 'terra-notification-dialog';\n\nconst Dialog = () => {\n  return (\n    <NotificationDialog\n-     variant={NotificationDialogVariants.ERROR}\n+     variant=\"error\"\n..\n")),(0,t.mdx)("h3",{id:"changes-to-creating-custom-dialogs"},"Changes to Creating Custom Dialogs"),(0,t.mdx)("p",null,"Use the prop ",(0,t.mdx)("inlineCode",{parentName:"p"},"custom")," to create a custom Notification Dialog and provided"),(0,t.mdx)("ul",null,(0,t.mdx)("li",{parentName:"ul"},"a keyword to the ",(0,t.mdx)("inlineCode",{parentName:"li"},"signalWord")," prop - previously referenced as header prop"),(0,t.mdx)("li",{parentName:"ul"},"a icon as a background-image style via the ",(0,t.mdx)("inlineCode",{parentName:"li"},"iconClassName")," prop - previously provided as a React component using customIcon prop")),(0,t.mdx)("p",null,"Not providing these pieces will render a Custom Notification dialog with space allocated for the missing pieces."),(0,t.mdx)("p",null,(0,t.mdx)("strong",{parentName:"p"},"Note:")," by choosing to create a custom Notification Dialog, you are responsible for providing an icon that is themed correctly in the terra-default-theme, orion-fusion-theme and in the clinical-lowlight-theme. See Terra's ",(0,t.mdx)("a",{parentName:"p",href:"https://engineering.cerner.com/terra-ui/guides/terra-application/theme-strategy"},"Theme Strategy Guide")," for more information."),(0,t.mdx)("h4",{id:"componentjsx"},"Component.jsx"),(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre",className:"language-diff"},"  import NotificationDialog from 'terra-notification-dialog';\n- import MyIcon from './MyIcon';\n+ import ThemeContext from 'terra-theme-context';\n+ import classnamesBind from 'classnames/bind';\n\n+ import styles from './Component.module.scss';\n+ cx = classnamesBind.bind(styles);\n\nconst Dialog = () => {\n+ const theme = React.useContext(ThemeContext);\n\n  return (\n    <NotificationDialog\n      variant=\"custom\"\n-     header=\"Issue\"\n-     customIcon={<MyIcon />}\n+     custom={{\n+       signalWord: 'Issue',\n+       iconClassName: cx('my-icon', theme.className)\n+     }}\n      dialogTitle=\"There was an issue when you saved.\"\n      startMessage=\"Please resumbit the form to save your progress.\"\n      acceptAction={{\n        text: 'OK',\n        onClick: handleCloseModal,\n      }}\n    />\n  );\n };\n")),(0,t.mdx)("h4",{id:"componentmodulescss"},"Component.module.scss"),(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre",className:"language-diff"},"+ @import '~terra-mixins/lib/Mixins';\n\n:local {\n+  .my-icon { \n+    background: var(--example-custom-icon-background, inline-svg(\"...\"));\n+  }\n\n+  .orion-fusion-theme {\n+    @include terra-inline-svg-var('--example-custom-icon-background', \"...\");\n+  }\n\n+  .clinical-lowlight-theme {\n+    @include terra-inline-svg-var('--example-custom-icon-background', \"...\");\n+  }\n}\n")),(0,t.mdx)("h3",{id:"added-layout-for-rendering-lists-with-content-prop"},"Added Layout for Rendering Lists with content Prop"),(0,t.mdx)("p",null,"The Notification Dialog provides has added the ",(0,t.mdx)("inlineCode",{parentName:"p"},"ContentLayoutAsList")," layout component to be used with the ",(0,t.mdx)("inlineCode",{parentName:"p"},"content")," prop. This layout renders a list of strings with styles that align with the Notification Dialog. Usage like:"),(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre",className:"language-diff"},"- import NotificationDialog from 'terra-notification-dialog';\n+ import NotificationDialog, { ContentLayoutAsList } from 'terra-notification-dialog';\n\nconst Dialog = () => (\n  <NotificationDialog\n    variant=\"hazard-low\"\n    dialogTitle=\"Medical Dose Not Selected\"\n    startMessage=\"There are multiple dose options:\"\n-   content={() => {\n-     <ul>\n-       <li key='hazard-low-1'>200 mg every 3 hours</li>\n-       <li key='hazard-low-2'>400 mg ever 6 hours</li>\n-     </ul>\n-   }}\n+   content={(\n+     <ContentLayoutAsList\n+        items={['200 mg every 3 hours', '400 mg ever 6 hours']}\n+     />\n+   )}\n    endMessage=\"Please specify the dose and frequency to order the medication.\"\n    acceptAction={{\n      text: 'OK',\n      onClick: handleCloseModal,\n    }}\n  />\n);\n")),(0,t.mdx)("h3",{id:"added-data-attributes-for-testing"},"Added Data Attributes for Testing"),(0,t.mdx)("p",null,"The data attribute, ",(0,t.mdx)("inlineCode",{parentName:"p"},"data-terra-notification-dialog"),", was added to assist with validating the Notification Dialog was presented. This can be used like:"),(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre",className:"language-diff"},"  it('opens a notification dialog', () => {\n    $('#triggerNotificationDialog').click();\n-   expect(browser.isExisting('[class*=\"notification-dialog\"]')).toBeTruthy();\n-   expect(browser.hasFocus('[class*=\"notification-dialog\"]')).toBeTruthy();\n+   expect(browser.isExisting('[data-terra-notification-dialog]')).toBeTruthy();\n+   expect(browser.hasFocus('[data-terra-notification-dialog]')).toBeTruthy();\n    Terra.validates.element();\n  });\n")),(0,t.mdx)("p",null,"The data attribute, ",(0,t.mdx)("inlineCode",{parentName:"p"},"data-terra-notification-dialog-button")," was added to assist with selecting the accept and reject buttons when writing browser tests:"),(0,t.mdx)("ul",null,(0,t.mdx)("li",{parentName:"ul"},"use ",(0,t.mdx)("inlineCode",{parentName:"li"},'data-terra-notification-dialog-button="accept"')," to select the accept button"),(0,t.mdx)("li",{parentName:"ul"},"use ",(0,t.mdx)("inlineCode",{parentName:"li"},'data-terra-notification-dialog-button="reject"')," to select the reject button")),(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre",className:"language-diff"},"  it('rejects the notification dialog', () => {\n-   $('[class*=\"notification-dialog-inner-wrapper\"] button:last-child').click();\n+   $('[data-terra-notification-dialog-button=\"reject\"]').click();\n    Terra.validates.element('rejected', { selector: '#root' });\n  });\n")),(0,t.mdx)("h2",{id:"changes-from-version-1-to-version-2"},"Changes from version 1 to version 2"),(0,t.mdx)("h3",{id:"changes-to-css-custom-properties"},"Changes to CSS Custom Properties"),(0,t.mdx)("h4",{id:"renamed"},"Renamed"),(0,t.mdx)("table",null,(0,t.mdx)("thead",{parentName:"table"},(0,t.mdx)("tr",{parentName:"thead"},(0,t.mdx)("th",{parentName:"tr",align:null},"Previous"),(0,t.mdx)("th",{parentName:"tr",align:null},"New"))),(0,t.mdx)("tbody",{parentName:"table"},(0,t.mdx)("tr",{parentName:"tbody"},(0,t.mdx)("td",{parentName:"tr",align:null},"--notification-dialog-background"),(0,t.mdx)("td",{parentName:"tr",align:null},"--terra-notification-dialog-background")),(0,t.mdx)("tr",{parentName:"tbody"},(0,t.mdx)("td",{parentName:"tr",align:null},"--notification-dialog-border-radius"),(0,t.mdx)("td",{parentName:"tr",align:null},"--terra-notification-dialog-border-radius")),(0,t.mdx)("tr",{parentName:"tbody"},(0,t.mdx)("td",{parentName:"tr",align:null},"--notification-dialog-small-horizontal-inset"),(0,t.mdx)("td",{parentName:"tr",align:null},"--terra-notification-dialog-small-horizontal-inset")),(0,t.mdx)("tr",{parentName:"tbody"},(0,t.mdx)("td",{parentName:"tr",align:null},"--notification-dialog-body-background-color"),(0,t.mdx)("td",{parentName:"tr",align:null},"--terra-notification-dialog-body-background-color")),(0,t.mdx)("tr",{parentName:"tbody"},(0,t.mdx)("td",{parentName:"tr",align:null},"--notification-dialog-body-padding"),(0,t.mdx)("td",{parentName:"tr",align:null},"--terra-notification-dialog-body-padding")),(0,t.mdx)("tr",{parentName:"tbody"},(0,t.mdx)("td",{parentName:"tr",align:null},"--notification-dialog-header-background-color"),(0,t.mdx)("td",{parentName:"tr",align:null},"--terra-notification-dialog-header-background-color")),(0,t.mdx)("tr",{parentName:"tbody"},(0,t.mdx)("td",{parentName:"tr",align:null},"--notification-dialog-header-border-bottom"),(0,t.mdx)("td",{parentName:"tr",align:null},"--terra-notification-dialog-header-border-bottom")),(0,t.mdx)("tr",{parentName:"tbody"},(0,t.mdx)("td",{parentName:"tr",align:null},"--notification-dialog-header-font-size"),(0,t.mdx)("td",{parentName:"tr",align:null},"--terra-notification-dialog-header-font-size")),(0,t.mdx)("tr",{parentName:"tbody"},(0,t.mdx)("td",{parentName:"tr",align:null},"--notification-dialog-header-padding"),(0,t.mdx)("td",{parentName:"tr",align:null},"--terra-notification-dialog-header-padding")),(0,t.mdx)("tr",{parentName:"tbody"},(0,t.mdx)("td",{parentName:"tr",align:null},"--notification-dialog-footer-background-color"),(0,t.mdx)("td",{parentName:"tr",align:null},"--terra-notification-dialog-footer-background-color")),(0,t.mdx)("tr",{parentName:"tbody"},(0,t.mdx)("td",{parentName:"tr",align:null},"--notification-dialog-footer-border-top"),(0,t.mdx)("td",{parentName:"tr",align:null},"--terra-notification-dialog-footer-border-top")),(0,t.mdx)("tr",{parentName:"tbody"},(0,t.mdx)("td",{parentName:"tr",align:null},"--notification-dialog-footer-font-size"),(0,t.mdx)("td",{parentName:"tr",align:null},"--terra-notification-dialog-footer-font-size")),(0,t.mdx)("tr",{parentName:"tbody"},(0,t.mdx)("td",{parentName:"tr",align:null},"--terra-notification-dialog-hazard-alert-icon"),(0,t.mdx)("td",{parentName:"tr",align:null},"--terra-notification-dialog-hazard-alert-icon-background")),(0,t.mdx)("tr",{parentName:"tbody"},(0,t.mdx)("td",{parentName:"tr",align:null},"--terra-notification-dialog-hazard-medium-icon"),(0,t.mdx)("td",{parentName:"tr",align:null},"--terra-notification-dialog-hazard-medium-icon-background")),(0,t.mdx)("tr",{parentName:"tbody"},(0,t.mdx)("td",{parentName:"tr",align:null},"--terra-notification-dialog-hazard-low-icon"),(0,t.mdx)("td",{parentName:"tr",align:null},"--terra-notification-dialog-hazard-low-icon-background")),(0,t.mdx)("tr",{parentName:"tbody"},(0,t.mdx)("td",{parentName:"tr",align:null},"--terra-notification-dialog-success-icon"),(0,t.mdx)("td",{parentName:"tr",align:null},"--terra-notification-dialog-success-icon-background")),(0,t.mdx)("tr",{parentName:"tbody"},(0,t.mdx)("td",{parentName:"tr",align:null},"--terra-notification-dialog-error-icon"),(0,t.mdx)("td",{parentName:"tr",align:null},"--terra-notification-dialog-error-icon-background")))),(0,t.mdx)("h4",{id:"added"},"Added"),(0,t.mdx)("ul",null,(0,t.mdx)("li",{parentName:"ul"},"--terra-notification-dialog-icon-height"),(0,t.mdx)("li",{parentName:"ul"},"--terra-notification-dialog-icon-width")))}s.isMDXComponent=!0},28997:function(e,a,n){n.d(a,{C:function(){return o}});var t=n(67294),i=n(22863),o=function(e){var a=e.url;return t.createElement(i.Z,{src:"https://github.com/cerner/terra-framework/tree/main/packages/terra-notification-dialog",name:"terra-notification-dialog",version:"4.37.1",url:a})}},17422:function(e,a,n){n.r(a),a.default={badge:"Badges-module__badge___vex-+","badge-container":"Badges-module__badge-container___B13Mv","badge-name":"Badges-module__badge-name___jkN0m","badge-version":"Badges-module__badge-version___agZ+P"}}}]);