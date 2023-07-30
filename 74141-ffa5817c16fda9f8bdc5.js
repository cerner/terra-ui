"use strict";(self.webpackChunkterra_ui=self.webpackChunkterra_ui||[]).push([[74141],{34597:function(e,t,n){n.r(t),t.default={"orion-fusion-theme":"SlidePanel-module__orion-fusion-theme___hejSR","slide-panel":"SlidePanel-module__slide-panel___tbu3J",main:"SlidePanel-module__main___CjYDC",panel:"SlidePanel-module__panel___G1bnA","is-open":"SlidePanel-module__is-open___pYOkq","is-fullscreen":"SlidePanel-module__is-fullscreen___vCbZa",fill:"SlidePanel-module__fill___9PGCQ"}},74141:function(e,t,n){var a=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.SlidePanelPositions=void 0;var r=a(n(10434)),l=a(n(70215)),i=a(n(56690)),o=a(n(89728)),u=a(n(66115)),d=a(n(61655)),s=a(n(94993)),f=a(n(73808)),c=a(n(67294)),p=a(n(45697)),v=a(n(94184)),h=a(n(47166)),m=a(n(50026)),y=a(n(29270)),_=n(25387),b=n(40289),g=a(n(34597)),P=["intl","isFullscreen","isOpen","fill","mainAriaLabel","mainContent","panelAriaLabel","panelContent","panelBehavior","panelPosition","panelSize","setSlidePanelRef"];function A(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=(0,f.default)(e);if(t){var r=(0,f.default)(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return(0,s.default)(this,n)}}var C=h.default.bind(g.default),O={START:"start",END:"end"};t.SlidePanelPositions=O;var N={panelAriaLabel:p.default.string,mainAriaLabel:p.default.string,mainContent:p.default.node,panelContent:p.default.node,panelBehavior:p.default.oneOf(["overlay","squish"]),panelPosition:p.default.oneOf(["start","end"]),panelSize:p.default.oneOf(["small","large"]),isFullscreen:p.default.bool,isOpen:p.default.bool,fill:p.default.bool,setSlidePanelRef:p.default.func,intl:p.default.shape({formatMessage:p.default.func,locale:p.default.string})},M={panelBehavior:"overlay",panelPosition:O.END,panelSize:"small"},S=function(e){(0,d.default)(n,e);var t=A(n);function n(e){var a;return(0,i.default)(this,n),(a=t.call(this,e)).setPanelNode=a.setPanelNode.bind((0,u.default)(a)),a.mainNode=c.default.createRef(),a.setLastClicked=a.setLastClicked.bind((0,u.default)(a)),a.setDisclosingNode=a.setDisclosingNode.bind((0,u.default)(a)),a.mainAriaDescribedByID="detail-panel-warning-".concat((0,b.v4)()),a}return(0,o.default)(n,[{key:"componentDidUpdate",value:function(e){if(this.props.isOpen&&this.props.isOpen!==e.isOpen)return this.setDisclosingNode(this.lastClicked),void this.panelNode.focus();if(!this.props.isOpen&&this.props.isOpen!==e.isOpen){if(this.disclosingNode)return this.disclosingNode.setAttribute("aria-expanded","false"),void this.disclosingNode.focus();this.mainNode.current.focus()}}},{key:"setPanelNode",value:function(e){this.props.setSlidePanelRef&&this.props.setSlidePanelRef(e),this.panelNode=e}},{key:"setLastClicked",value:function(e){this.lastClicked=e.target}},{key:"setDisclosingNode",value:function(e){e&&(e.setAttribute("aria-expanded","true"),this.disclosingNode=e)}},{key:"render",value:function(){var e=this.props,t=e.intl,n=e.isFullscreen,a=e.isOpen,i=e.fill,o=e.mainAriaLabel,u=e.mainContent,d=e.panelAriaLabel,s=e.panelContent,f=e.panelBehavior,p=e.panelPosition,h=e.panelSize,m=(e.setSlidePanelRef,(0,l.default)(e,P)),_=this.context,b=(0,v.default)(C("slide-panel",{"is-open":a},{"is-fullscreen":n},{fill:i},_.className),m.className),g=c.default.createElement("div",{className:C(["panel"]),key:"panel",tabIndex:"-1","aria-label":d||t.formatMessage({id:"Terra.slidePanel.defaultPanelLabel"}),"aria-hidden":a?"false":"true",role:"region",ref:this.setPanelNode},c.default.createElement(y.default,{text:d||t.formatMessage({id:"Terra.slidePanel.defaultPanelLabel"})}),s),A=c.default.createElement("div",{className:C("main"),key:"main",tabIndex:"-1","aria-label":o,"aria-describedby":this.mainAriaDescribedByID,"aria-hidden":a&&n?"true":"false",ref:this.mainNode,role:"main",onClick:this.setLastClicked,onKeyUp:this.setLastClicked},c.default.createElement(y.default,{tabIndex:"-1",id:this.mainAriaDescribedByID,text:t.formatMessage({id:"Terra.slidePanel.discloseWarning"})}),u),N=p===O.START?c.default.createElement(c.default.Fragment,null,g,A):c.default.createElement(c.default.Fragment,null,A,g);return c.default.createElement("div",(0,r.default)({},m,{className:b,"data-slide-panel-panel-behavior":f,"data-slide-panel-panel-position":p,"data-slide-panel-panel-size":h}),N)}}]),n}(c.default.Component);S.propTypes=N,S.defaultProps=M,S.contextType=m.default;var R=(0,_.injectIntl)(S);t.default=R},50046:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;for(var n=[],a=0;a<256;++a)n[a]=(a+256).toString(16).substr(1);var r=function(e,t){var a=t||0,r=n;return[r[e[a++]],r[e[a++]],r[e[a++]],r[e[a++]],"-",r[e[a++]],r[e[a++]],"-",r[e[a++]],r[e[a++]],"-",r[e[a++]],r[e[a++]],"-",r[e[a++]],r[e[a++]],r[e[a++]],r[e[a++]],r[e[a++]],r[e[a++]]].join("")};t.default=r,e.exports=t.default},40289:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"v1",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(t,"v3",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(t,"v4",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(t,"v5",{enumerable:!0,get:function(){return i.default}});var a=o(n(99135)),r=o(n(21255)),l=o(n(90227)),i=o(n(664));function o(e){return e&&e.__esModule?e:{default:e}}},93620:function(e,t){function n(e,t){var n=(65535&e)+(65535&t);return(e>>16)+(t>>16)+(n>>16)<<16|65535&n}function a(e,t,a,r,l,i){return n((o=n(n(t,e),n(r,i)))<<(u=l)|o>>>32-u,a);var o,u}function r(e,t,n,r,l,i,o){return a(t&n|~t&r,e,t,l,i,o)}function l(e,t,n,r,l,i,o){return a(t&r|n&~r,e,t,l,i,o)}function i(e,t,n,r,l,i,o){return a(t^n^r,e,t,l,i,o)}function o(e,t,n,r,l,i,o){return a(n^(t|~r),e,t,l,i,o)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=function(e){if("string"==typeof e){var t=unescape(encodeURIComponent(e));e=new Array(t.length);for(var a=0;a<t.length;a++)e[a]=t.charCodeAt(a)}return function(e){var t,n,a,r=[],l=32*e.length,i="0123456789abcdef";for(t=0;t<l;t+=8)n=e[t>>5]>>>t%32&255,a=parseInt(i.charAt(n>>>4&15)+i.charAt(15&n),16),r.push(a);return r}(function(e,t){var a,u,d,s,f;e[t>>5]|=128<<t%32,e[14+(t+64>>>9<<4)]=t;var c=1732584193,p=-271733879,v=-1732584194,h=271733878;for(a=0;a<e.length;a+=16)u=c,d=p,s=v,f=h,c=r(c,p,v,h,e[a],7,-680876936),h=r(h,c,p,v,e[a+1],12,-389564586),v=r(v,h,c,p,e[a+2],17,606105819),p=r(p,v,h,c,e[a+3],22,-1044525330),c=r(c,p,v,h,e[a+4],7,-176418897),h=r(h,c,p,v,e[a+5],12,1200080426),v=r(v,h,c,p,e[a+6],17,-1473231341),p=r(p,v,h,c,e[a+7],22,-45705983),c=r(c,p,v,h,e[a+8],7,1770035416),h=r(h,c,p,v,e[a+9],12,-1958414417),v=r(v,h,c,p,e[a+10],17,-42063),p=r(p,v,h,c,e[a+11],22,-1990404162),c=r(c,p,v,h,e[a+12],7,1804603682),h=r(h,c,p,v,e[a+13],12,-40341101),v=r(v,h,c,p,e[a+14],17,-1502002290),c=l(c,p=r(p,v,h,c,e[a+15],22,1236535329),v,h,e[a+1],5,-165796510),h=l(h,c,p,v,e[a+6],9,-1069501632),v=l(v,h,c,p,e[a+11],14,643717713),p=l(p,v,h,c,e[a],20,-373897302),c=l(c,p,v,h,e[a+5],5,-701558691),h=l(h,c,p,v,e[a+10],9,38016083),v=l(v,h,c,p,e[a+15],14,-660478335),p=l(p,v,h,c,e[a+4],20,-405537848),c=l(c,p,v,h,e[a+9],5,568446438),h=l(h,c,p,v,e[a+14],9,-1019803690),v=l(v,h,c,p,e[a+3],14,-187363961),p=l(p,v,h,c,e[a+8],20,1163531501),c=l(c,p,v,h,e[a+13],5,-1444681467),h=l(h,c,p,v,e[a+2],9,-51403784),v=l(v,h,c,p,e[a+7],14,1735328473),c=i(c,p=l(p,v,h,c,e[a+12],20,-1926607734),v,h,e[a+5],4,-378558),h=i(h,c,p,v,e[a+8],11,-2022574463),v=i(v,h,c,p,e[a+11],16,1839030562),p=i(p,v,h,c,e[a+14],23,-35309556),c=i(c,p,v,h,e[a+1],4,-1530992060),h=i(h,c,p,v,e[a+4],11,1272893353),v=i(v,h,c,p,e[a+7],16,-155497632),p=i(p,v,h,c,e[a+10],23,-1094730640),c=i(c,p,v,h,e[a+13],4,681279174),h=i(h,c,p,v,e[a],11,-358537222),v=i(v,h,c,p,e[a+3],16,-722521979),p=i(p,v,h,c,e[a+6],23,76029189),c=i(c,p,v,h,e[a+9],4,-640364487),h=i(h,c,p,v,e[a+12],11,-421815835),v=i(v,h,c,p,e[a+15],16,530742520),c=o(c,p=i(p,v,h,c,e[a+2],23,-995338651),v,h,e[a],6,-198630844),h=o(h,c,p,v,e[a+7],10,1126891415),v=o(v,h,c,p,e[a+14],15,-1416354905),p=o(p,v,h,c,e[a+5],21,-57434055),c=o(c,p,v,h,e[a+12],6,1700485571),h=o(h,c,p,v,e[a+3],10,-1894986606),v=o(v,h,c,p,e[a+10],15,-1051523),p=o(p,v,h,c,e[a+1],21,-2054922799),c=o(c,p,v,h,e[a+8],6,1873313359),h=o(h,c,p,v,e[a+15],10,-30611744),v=o(v,h,c,p,e[a+6],15,-1560198380),p=o(p,v,h,c,e[a+13],21,1309151649),c=o(c,p,v,h,e[a+4],6,-145523070),h=o(h,c,p,v,e[a+11],10,-1120210379),v=o(v,h,c,p,e[a+2],15,718787259),p=o(p,v,h,c,e[a+9],21,-343485551),c=n(c,u),p=n(p,d),v=n(v,s),h=n(h,f);return[c,p,v,h]}(function(e){var t,n=[];for(n[(e.length>>2)-1]=void 0,t=0;t<n.length;t+=1)n[t]=0;var a=8*e.length;for(t=0;t<a;t+=8)n[t>>5]|=(255&e[t/8])<<t%32;return n}(e),8*e.length))};t.default=u,e.exports=t.default},19861:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){if(!n)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return n(a)};var n="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto),a=new Uint8Array(16);e.exports=t.default},96143:function(e,t){function n(e,t,n,a){switch(e){case 0:return t&n^~t&a;case 1:case 3:return t^n^a;case 2:return t&n^t&a^n&a}}function a(e,t){return e<<t|e>>>32-t}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=function(e){var t=[1518500249,1859775393,2400959708,3395469782],r=[1732584193,4023233417,2562383102,271733878,3285377520];if("string"==typeof e){var l=unescape(encodeURIComponent(e));e=new Array(l.length);for(var i=0;i<l.length;i++)e[i]=l.charCodeAt(i)}e.push(128);var o=e.length/4+2,u=Math.ceil(o/16),d=new Array(u);for(i=0;i<u;i++){d[i]=new Array(16);for(var s=0;s<16;s++)d[i][s]=e[64*i+4*s]<<24|e[64*i+4*s+1]<<16|e[64*i+4*s+2]<<8|e[64*i+4*s+3]}for(d[u-1][14]=8*(e.length-1)/Math.pow(2,32),d[u-1][14]=Math.floor(d[u-1][14]),d[u-1][15]=8*(e.length-1)&4294967295,i=0;i<u;i++){for(var f=new Array(80),c=0;c<16;c++)f[c]=d[i][c];for(c=16;c<80;c++)f[c]=a(f[c-3]^f[c-8]^f[c-14]^f[c-16],1);var p=r[0],v=r[1],h=r[2],m=r[3],y=r[4];for(c=0;c<80;c++){var _=Math.floor(c/20),b=a(p,5)+n(_,v,h,m)+y+t[_]+f[c]>>>0;y=m,m=h,h=a(v,30)>>>0,v=p,p=b}r[0]=r[0]+p>>>0,r[1]=r[1]+v>>>0,r[2]=r[2]+h>>>0,r[3]=r[3]+m>>>0,r[4]=r[4]+y>>>0}return[r[0]>>24&255,r[0]>>16&255,r[0]>>8&255,255&r[0],r[1]>>24&255,r[1]>>16&255,r[1]>>8&255,255&r[1],r[2]>>24&255,r[2]>>16&255,r[2]>>8&255,255&r[2],r[3]>>24&255,r[3]>>16&255,r[3]>>8&255,255&r[3],r[4]>>24&255,r[4]>>16&255,r[4]>>8&255,255&r[4]]};t.default=r,e.exports=t.default},99135:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,r,l=o(n(19861)),i=o(n(50046));function o(e){return e&&e.__esModule?e:{default:e}}var u=0,d=0;var s=function(e,t,n){var o=t&&n||0,s=t||[],f=(e=e||{}).node||a,c=void 0!==e.clockseq?e.clockseq:r;if(null==f||null==c){var p=e.random||(e.rng||l.default)();null==f&&(f=a=[1|p[0],p[1],p[2],p[3],p[4],p[5]]),null==c&&(c=r=16383&(p[6]<<8|p[7]))}var v=void 0!==e.msecs?e.msecs:(new Date).getTime(),h=void 0!==e.nsecs?e.nsecs:d+1,m=v-u+(h-d)/1e4;if(m<0&&void 0===e.clockseq&&(c=c+1&16383),(m<0||v>u)&&void 0===e.nsecs&&(h=0),h>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");u=v,d=h,r=c;var y=(1e4*(268435455&(v+=122192928e5))+h)%4294967296;s[o++]=y>>>24&255,s[o++]=y>>>16&255,s[o++]=y>>>8&255,s[o++]=255&y;var _=v/4294967296*1e4&268435455;s[o++]=_>>>8&255,s[o++]=255&_,s[o++]=_>>>24&15|16,s[o++]=_>>>16&255,s[o++]=c>>>8|128,s[o++]=255&c;for(var b=0;b<6;++b)s[o+b]=f[b];return t||(0,i.default)(s)};t.default=s,e.exports=t.default},21255:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=l(n(11745)),r=l(n(93620));function l(e){return e&&e.__esModule?e:{default:e}}var i=(0,a.default)("v3",48,r.default);t.default=i,e.exports=t.default},11745:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n){var a=function(e,a,l,i){var o=l&&i||0;if("string"==typeof e&&(e=function(e){e=unescape(encodeURIComponent(e));for(var t=new Array(e.length),n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}(e)),"string"==typeof a&&(a=function(e){var t=[];return e.replace(/[a-fA-F0-9]{2}/g,(function(e){t.push(parseInt(e,16))})),t}(a)),!Array.isArray(e))throw TypeError("value must be an array of bytes");if(!Array.isArray(a)||16!==a.length)throw TypeError("namespace must be uuid string or an Array of 16 byte values");var u=n(a.concat(e));if(u[6]=15&u[6]|t,u[8]=63&u[8]|128,l)for(var d=0;d<16;++d)l[o+d]=u[d];return l||(0,r.default)(u)};try{a.name=e}catch(e){}return a.DNS=l,a.URL=i,a},t.URL=t.DNS=void 0;var a,r=(a=n(50046))&&a.__esModule?a:{default:a};const l="6ba7b810-9dad-11d1-80b4-00c04fd430c8";t.DNS=l;const i="6ba7b811-9dad-11d1-80b4-00c04fd430c8";t.URL=i},90227:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=l(n(19861)),r=l(n(50046));function l(e){return e&&e.__esModule?e:{default:e}}var i=function(e,t,n){var l=t&&n||0;"string"==typeof e&&(t="binary"===e?new Array(16):null,e=null);var i=(e=e||{}).random||(e.rng||a.default)();if(i[6]=15&i[6]|64,i[8]=63&i[8]|128,t)for(var o=0;o<16;++o)t[l+o]=i[o];return t||(0,r.default)(i)};t.default=i,e.exports=t.default},664:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=l(n(11745)),r=l(n(96143));function l(e){return e&&e.__esModule?e:{default:e}}var i=(0,a.default)("v5",80,r.default);t.default=i,e.exports=t.default}}]);