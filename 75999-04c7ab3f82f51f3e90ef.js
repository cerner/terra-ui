"use strict";(self.webpackChunkterra_ui=self.webpackChunkterra_ui||[]).push([[75999,17711,40092,72949,95330,7235,29616,62473,84854,38663,61044,92260,69879,47498,25117,81784,59403,37022,14641,71308,48927,98463,20844],{55713:function(e,a,n){var l=n(24994);a.A=void 0;var d=l(n(96540)),t=l(n(5556)),r=l(n(67967)),i=l(n(25642)),m=r.default.bind(i.default),o={name:t.default.string.isRequired,src:t.default.string,url:t.default.string,version:t.default.string.isRequired},u=function(e){var a=e.src,n=e.name,l=e.url,t=e.version,r=d.default.createElement("a",{className:m("badge"),href:l||"https://www.npmjs.org/package/".concat(n,"/v/").concat(t)},d.default.createElement("span",{className:m("badge-name")},l?"package":"npm"),d.default.createElement("span",{className:m("badge-version")},"v".concat(t))),i=a?d.default.createElement("a",{className:m("badge"),href:a},d.default.createElement("span",{className:m("badge-name")},"github"),d.default.createElement("span",{className:m("badge-version")},"source")):void 0;return d.default.createElement("div",{className:m("badge-container")},r,i)};u.propTypes=o;a.A=u},75999:function(e,a,n){n.r(a),n.d(a,{default:function(){return h}});n(96540);var l=n(36665),d=n(20005),t=["components"];function r(){return r=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var n=arguments[a];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},r.apply(this,arguments)}function i(e,a){if(null==e)return{};var n,l,d=function(e,a){if(null==e)return{};var n,l,d={},t=Object.keys(e);for(l=0;l<t.length;l++)n=t[l],a.indexOf(n)>=0||(d[n]=e[n]);return d}(e,a);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(l=0;l<t.length;l++)n=t[l],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(d[n]=e[n])}return d}var m={},o="wrapper";function u(e){var a=e.components,n=i(e,t);return(0,l.mdx)(o,r({},m,n,{components:a,mdxType:"MDXLayout"}),(0,l.mdx)("h1",{id:"changelog"},"Changelog"),(0,l.mdx)("h2",{id:"unreleased"},"Unreleased"),(0,l.mdx)("h2",{id:"470---march-8-2024"},"4.7.0 - (March 8, 2024)"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"Added",(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"Added the ",(0,l.mdx)("inlineCode",{parentName:"li"},"--disable-server")," flag to disable the internal server so that the wdio test runner can connect to an external server (such as another webpack dev server).")))),(0,l.mdx)("h2",{id:"460---february-5-2024"},"4.6.0 - (February 5, 2024)"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"Changed",(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"Updated upload and download logic in Nexus screenshots based on current locale, theme, browser, and formFactor."),(0,l.mdx)("li",{parentName:"ul"},"Updated PR comment logic in Nexus screenshots."),(0,l.mdx)("li",{parentName:"ul"},"Updated Nexus mismatch warning to display testname and to be outputted via Logger.")))),(0,l.mdx)("h2",{id:"450---december-11-2023"},"4.5.0 - (December 11, 2023)"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"Changed",(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"Allow consumers to set maxInstances while executing wdio scripts.")))),(0,l.mdx)("h2",{id:"440---september-26-2023"},"4.4.0 - (September 26, 2023)"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"Changed",(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"Minor dependency version bump")))),(0,l.mdx)("h2",{id:"430---august-31-2023"},"4.3.0 - (August 31, 2023)"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"Changed",(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"Locked ",(0,l.mdx)("inlineCode",{parentName:"li"},"uuid")," to ",(0,l.mdx)("inlineCode",{parentName:"li"},"3.4.0")," for consistency across Terra packages.")))),(0,l.mdx)("h2",{id:"422---august-30-2023"},"4.2.2 - (August 30, 2023)"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"Changed",(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"Minor dependency version bump")))),(0,l.mdx)("h2",{id:"421---august-25-2023"},"4.2.1 - (August 25, 2023)"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"Fixed",(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"Fixed install failures by removing unnecessary ",(0,l.mdx)("inlineCode",{parentName:"li"},"postinstall")," step.")))),(0,l.mdx)("h2",{id:"420---august-24-2023"},"4.2.0 - (August 24, 2023)"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("p",{parentName:"li"},"Changed"),(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"Updated logic in Nexus screenshots to still allow screenshot downloads when not authorized."),(0,l.mdx)("li",{parentName:"ul"},"Updated logic in Nexus screenshots to consume repository names more cleanly."))),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("p",{parentName:"li"},"Fixed"),(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"Fixed an issue with whitespaces in the docker-compose file path causing failures.")))),(0,l.mdx)("h2",{id:"410---july-21-2023"},"4.1.0 - (July 21, 2023)"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"Fixed",(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"Fixed misnamed references in Nexus Screenshot logic.")))),(0,l.mdx)("h2",{id:"400---july-12-2023"},"4.0.0 - (July 12, 2023)"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"Breaking changes",(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"Updated to pull in the seleniarm 4.10 docker images.")))),(0,l.mdx)("h2",{id:"370---july-12-2023"},"3.7.0 - (July 12, 2023)"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"Changed",(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"Locked ",(0,l.mdx)("inlineCode",{parentName:"li"},"uuid")," dependency to ",(0,l.mdx)("inlineCode",{parentName:"li"},"7.0.3")," for consistency across Terra packages.")))),(0,l.mdx)("h2",{id:"360---july-10-2023"},"3.6.0 - (July 10, 2023)"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("p",{parentName:"li"},"Added"),(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"Added ",(0,l.mdx)("inlineCode",{parentName:"li"},"useHttps")," to use a secure http connection when the ",(0,l.mdx)("inlineCode",{parentName:"li"},"gridUrl")," flag is also provided."))),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("p",{parentName:"li"},"Changed"),(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"Updated ",(0,l.mdx)("inlineCode",{parentName:"li"},"uuid")," dependency to ",(0,l.mdx)("inlineCode",{parentName:"li"},"8.2.0")," for consistency across Terra packages.")))),(0,l.mdx)("h2",{id:"350---april-27-2023"},"3.5.0 - (April 27, 2023)"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"Fixed",(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"Fixed ",(0,l.mdx)("inlineCode",{parentName:"li"},"getIpAddress")," to check if ",(0,l.mdx)("inlineCode",{parentName:"li"},"ipv4")," address exists.")))),(0,l.mdx)("h2",{id:"340---april-14-2023"},"3.4.0 - (April 14, 2023)"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"Fixed",(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"Fixed WDIO failures on IE due to negative width value being passed to ",(0,l.mdx)("inlineCode",{parentName:"li"},"browser.setViewportSize()"),"."),(0,l.mdx)("li",{parentName:"ul"},"Fixed ",(0,l.mdx)("inlineCode",{parentName:"li"},"getIpAddress")," helper to return ",(0,l.mdx)("inlineCode",{parentName:"li"},"ipv4")," address for host when connected to VPN.")))),(0,l.mdx)("h2",{id:"331---march-29-2023"},"3.3.1 - (March 29, 2023)"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"Fixed",(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"Updated ",(0,l.mdx)("inlineCode",{parentName:"li"},"mocha")," to fix CVE"),(0,l.mdx)("li",{parentName:"ul"},"Added ",(0,l.mdx)("inlineCode",{parentName:"li"},"babel-cli")," to fix install issue ")))),(0,l.mdx)("h2",{id:"330---december-7-2022"},"3.3.0 - (December 7, 2022)"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"Updated",(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"Flexes the remote reference screenshot downloading location.")))),(0,l.mdx)("h2",{id:"321---august-30-2022"},"3.2.1 - (August 30, 2022)"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("p",{parentName:"li"},"Added"),(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"Added a util module for calling github's API."),(0,l.mdx)("li",{parentName:"ul"},"Added a logic to post to the github PR if during a PR build and there are mismatches."))),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("p",{parentName:"li"},"Removed"),(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"Removed getRemoteScreenshotConfiguration."))),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("p",{parentName:"li"},"Changed"),(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"Changed implementations to use getRemoteScreenshotConfiguration provided by wdio config.")))),(0,l.mdx)("h2",{id:"320---june-7-2022"},"3.2.0 - (June 7, 2022)"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"Added",(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"Added a check of the ",(0,l.mdx)("inlineCode",{parentName:"li"},"BUILD_TYPE")," environment variable to determine if tests should pass regardless of image mismatch.")))),(0,l.mdx)("h2",{id:"310---may-27-2022"},"3.1.0 - (May 27, 2022)"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("p",{parentName:"li"},"Changed"),(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"Updated chrome version for fixing wdio translation issue."),(0,l.mdx)("li",{parentName:"ul"},"Changed the ",(0,l.mdx)("inlineCode",{parentName:"li"},"useRemoteReferenceScreenshots")," CLI option to honor the USE_REMOTE_REFERENCE_SCREENSHOTS env variable."),(0,l.mdx)("li",{parentName:"ul"},"Enabled a check of the ",(0,l.mdx)("inlineCode",{parentName:"li"},"BUILD_TYPE")," and ",(0,l.mdx)("inlineCode",{parentName:"li"},"BUILD_BRANCH")," environment variable to determine if screenshots should be uploaded after a run."))),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("p",{parentName:"li"},"Fixed"),(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"Updated the screenshot upload logic to upload screenshots from the ",(0,l.mdx)("inlineCode",{parentName:"li"},"latest")," folder instead of the ",(0,l.mdx)("inlineCode",{parentName:"li"},"reference")," folder.")))),(0,l.mdx)("h2",{id:"300---may-12-2022"},"3.0.0 - (May 12, 2022)"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("p",{parentName:"li"},"Breaking"),(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"Updated webpack-dev-server to version 4"),(0,l.mdx)("li",{parentName:"ul"},"Added devMiddleWare to support webpack-dev-server v4"))),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("p",{parentName:"li"},"Added"),(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"Added authentication for accessing screenshots from the remote site."),(0,l.mdx)("li",{parentName:"ul"},"Added ",(0,l.mdx)("inlineCode",{parentName:"li"},"useRemoteReferenceScreenshots")," cli option for downloading reference screenshots from a remote site for screenshot comparisons."),(0,l.mdx)("li",{parentName:"ul"},"Delete the ",(0,l.mdx)("inlineCode",{parentName:"li"},"reference")," screenshot directory when ",(0,l.mdx)("inlineCode",{parentName:"li"},"useRemoteReferenceScreenshots")," is true."),(0,l.mdx)("li",{parentName:"ul"},"Added a check of the ",(0,l.mdx)("inlineCode",{parentName:"li"},"BUILD_BRANCH")," environment variable to determine if tests should pass regardless of image mismatch."),(0,l.mdx)("li",{parentName:"ul"},"Added load configurations for downloading screenshots."),(0,l.mdx)("li",{parentName:"ul"},"Added functions to upload and download screenshots from the remote repository."))),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("p",{parentName:"li"},"Changed"),(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"Changed how we consume ",(0,l.mdx)("inlineCode",{parentName:"li"},"BUILD_BRANCH")," environment variable to match what the expected values of it are."))),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("p",{parentName:"li"},"Fixed"),(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"Fixed deleting the ",(0,l.mdx)("inlineCode",{parentName:"li"},"diff"),", ",(0,l.mdx)("inlineCode",{parentName:"li"},"error"),", and optionally the ",(0,l.mdx)("inlineCode",{parentName:"li"},"latest")," screenshot directories at the beginning of each test run.")))),(0,l.mdx)("h2",{id:"270---february-11-2022"},"2.7.0 - (February 11, 2022)"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"Changed",(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"Minor dependency version bump")))),(0,l.mdx)("h2",{id:"260---february-8-2022"},"2.6.0 - (February 8, 2022)"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"Changed",(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"Updated component to support Node 14.")))),(0,l.mdx)("h2",{id:"250---september-28-2021"},"2.5.0 - (September 28, 2021)"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"Added",(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"Added hard-coded dependency ",(0,l.mdx)("inlineCode",{parentName:"li"},"inquirer@8.1.3"),". As latest i.e. v8.1.4 is using a dependency which is supported by node 14.")))),(0,l.mdx)("h2",{id:"240---september-2-2021"},"2.4.0 - (September 2, 2021)"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"Changed",(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"Updated to set screenshots using the viewport size instead of the browser's window size to maintain consistent screenshot dimensions in IE."),(0,l.mdx)("li",{parentName:"ul"},"Reverted the width of the ",(0,l.mdx)("inlineCode",{parentName:"li"},"large")," viewport size from ",(0,l.mdx)("inlineCode",{parentName:"li"},"1020")," to ",(0,l.mdx)("inlineCode",{parentName:"li"},"1000"),".")))),(0,l.mdx)("h2",{id:"230---august-17-2021"},"2.3.0 - (August 17, 2021)"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"Changed",(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"Update fileReporter to accept outputDir config option")))),(0,l.mdx)("h2",{id:"220---august-13-2021"},"2.2.0 - (August 13, 2021)"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"Added",(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"Added seleniumServiceUrl parameter for locating selenium service."),(0,l.mdx)("li",{parentName:"ul"},"Added port parameter for specifying port mapping for the selenium service or the external selenium grid.")))),(0,l.mdx)("h2",{id:"210---july-26-2021"},"2.1.0 - (July 26, 2021)"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"Fixed",(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"Run tests in all browsers provided by the ",(0,l.mdx)("inlineCode",{parentName:"li"},"BROWSERS")," env variable.")))),(0,l.mdx)("h2",{id:"200---july-16-2021"},"2.0.0 - (July 16, 2021)"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"Breaking",(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"Upgraded to wdio v7"),(0,l.mdx)("li",{parentName:"ul"},"Increased large viewport size to ",(0,l.mdx)("inlineCode",{parentName:"li"},"1020"))))),(0,l.mdx)("h2",{id:"1100---july-16-2021"},"1.10.0 - (July 16, 2021)"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"Added",(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"Added a status check to provided ",(0,l.mdx)("inlineCode",{parentName:"li"},"gridUrl"),"s, allowing for better logging when a grid fails.")))),(0,l.mdx)("h2",{id:"190---june-18-2021"},"1.9.0 - (June 18, 2021)"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("p",{parentName:"li"},"Fixed"),(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"Updated screenshot cleaning to match nested snapshot directories"),(0,l.mdx)("li",{parentName:"ul"},"Updated to size the test page to the viewport size instead of the browser's window size to correctly match the corresponding breakpoint. This change may affect the size of existing screenshots, particularly in IE and firefox. The affected screenshots may need to be regenerated."))),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("p",{parentName:"li"},"Added"),(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"Added screenshot paths for each test result to the spec reporter")))),(0,l.mdx)("h2",{id:"180---june-8-2021"},"1.8.0 - (June 8, 2021)"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"Added",(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"Added FileOutputReporter reporter that logs wdio test output to separate files based on locale, theme, and form-factor")))),(0,l.mdx)("h2",{id:"170---june-1-2021"},"1.7.0 - (June 1, 2021)"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("p",{parentName:"li"},"Added"),(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"cloudRegion")," namespace to screenshot directories - this is useful for full stack testing contexts that define a cloudRegion per test run."))),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("p",{parentName:"li"},"Fixed"),(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"Updated waitForSeleniumHubReady to accommodate Windows users.")))),(0,l.mdx)("h2",{id:"160---may-25-2021"},"1.6.0 - (May 25, 2021)"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"Added",(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"Added ",(0,l.mdx)("inlineCode",{parentName:"li"},"ignoreScreenshotMismatch")," flag to disable test failure on snapshot mismatch."),(0,l.mdx)("li",{parentName:"ul"},"Added configuration to retrieve and unzip screenshots from registry.")))),(0,l.mdx)("h2",{id:"150---may-19-2021"},"1.5.0 - (May 19, 2021)"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"Removed",(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"Removed lodash is array dependency in favor of Array.isArray.")))),(0,l.mdx)("h2",{id:"140---may-7-2021"},"1.4.0 - (May 7, 2021)"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("p",{parentName:"li"},"Added"),(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"Added useSeleniumStandaloneService option for using the standalone-chrome host instead of the selenium docker service when building in Jenkins."),(0,l.mdx)("li",{parentName:"ul"},"Added express-server CLI command. This is moved from @cerner/terra-open-source-scripts."))),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("p",{parentName:"li"},"Fixed"),(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"Update node-resemble-js version to fix ",(0,l.mdx)("inlineCode",{parentName:"li"},"Stream not writable")," error.")))),(0,l.mdx)("h2",{id:"130---may-4-2021"},"1.3.0 - (May 4, 2021)"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"Fixed",(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"Update specPath in BaseCompare to replace ",(0,l.mdx)("inlineCode",{parentName:"li"},"node_modules")," with ",(0,l.mdx)("inlineCode",{parentName:"li"},"tests/wdio"),".")))),(0,l.mdx)("h2",{id:"120---april-23-2021"},"1.2.0 - (April 23, 2021)"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"Added",(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"The ",(0,l.mdx)("inlineCode",{parentName:"li"},"diff"),", ",(0,l.mdx)("inlineCode",{parentName:"li"},"error"),", and ",(0,l.mdx)("inlineCode",{parentName:"li"},"latest")," folders in the ",(0,l.mdx)("inlineCode",{parentName:"li"},"__snapshots__")," directory will be deleted before each test run.")))),(0,l.mdx)("h2",{id:"110---april-13-2021"},"1.1.0 - (April 13, 2021)"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("p",{parentName:"li"},"Added"),(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"Error screenshot functionality."))),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("p",{parentName:"li"},"Changed"),(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"Honor terra-theme.config.js file when no theme is specified in the test runner.")))),(0,l.mdx)("h2",{id:"105---march-31-2021"},"1.0.5 - (March 31, 2021)"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"Fixed",(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"Fixed an issue in the spec reporter where the package name from scoped mono repos could result in an improper file path.")))),(0,l.mdx)("h2",{id:"104---march-29-2021"},"1.0.4 - (March 29, 2021)"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("p",{parentName:"li"},"Fixed"),(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"Fixed packageName in terra-functional-testing for output files"))),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("p",{parentName:"li"},"Added"),(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"Added a main index file to export the wdio.conf.js configuration file"))),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("p",{parentName:"li"},"Removed"),(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"Removed log message for out of range elements in screenshot because there are valid cases to have out of range elements.")))),(0,l.mdx)("h2",{id:"103---march-23-2021"},"1.0.3 - (March 23, 2021)"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("p",{parentName:"li"},"Added"),(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"Added describeTests helper to filter tests by form factors, locales, or themes"))),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("p",{parentName:"li"},"Changed"),(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"Throw error with a more meaningful message when an invalid selector is used to capture screenshot."))),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("p",{parentName:"li"},"Fixed"),(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"Fix endY/endX out of range error when selector element is larger than document size.")))),(0,l.mdx)("h2",{id:"102---march-9-2021"},"1.0.2 - (March 9, 2021)"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"Fixed",(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"Fix seleniumVersion service option to be read from serviceOptions instead of launcherOptions")))),(0,l.mdx)("h2",{id:"101---march-1-2021"},"1.0.1 - (March 1, 2021)"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"Fixed",(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"Correctly pass theme as ",(0,l.mdx)("inlineCode",{parentName:"li"},"defaultTheme")," to webpack-config-terra to run tests in the correct theme.")))),(0,l.mdx)("h2",{id:"100---february-25-2021"},"1.0.0 - (February 25, 2021)"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"Initial stable release")))}u.isMDXComponent=!0;var p=["components"];function s(){return s=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var n=arguments[a];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},s.apply(this,arguments)}function x(e,a){if(null==e)return{};var n,l,d=function(e,a){if(null==e)return{};var n,l,d={},t=Object.keys(e);for(l=0;l<t.length;l++)n=t[l],a.indexOf(n)>=0||(d[n]=e[n]);return d}(e,a);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(l=0;l<t.length;l++)n=t[l],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(d[n]=e[n])}return d}var c={},N="wrapper";function h(e){var a=e.components,n=x(e,p);return(0,l.mdx)(N,s({},c,n,{components:a,mdxType:"MDXLayout"}),(0,l.mdx)(d.E,{mdxType:"Badge"}),(0,l.mdx)(u,{mdxType:"ChangeLog"}))}h.isMDXComponent=!0},20005:function(e,a,n){n.d(a,{E:function(){return t}});var l=n(96540),d=n(55713),t=function(e){var a=e.url;return l.createElement(d.A,{src:"https://github.com/cerner/terra-toolk/tree/main/packages/terra-functional-testing",name:"@cerner/terra-functional-testing",version:"4.7.0",url:a})}},25642:function(e,a,n){n.r(a),a.default={badge:"Badges-module__badge___vex-+","badge-container":"Badges-module__badge-container___B13Mv","badge-name":"Badges-module__badge-name___jkN0m","badge-version":"Badges-module__badge-version___agZ+P"}}}]);