"use strict";(self.webpackChunkterra_ui=self.webpackChunkterra_ui||[]).push([[80640],{50528:function(e,r,t){var n=t(64836);Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var a=n(t(10434)),u=n(t(70215)),o=n(t(29270)),i=n(t(45697)),l=n(t(67294)),f=n(t(55142)),s=t(29523),d=["value","label","description","disabled","isInvalid","showIsInvalid"],c={value:i.default.string,label:i.default.string,description:i.default.string,disabled:i.default.bool,isInvalid:i.default.bool,showIsInvalid:i.default.bool};function v(e){var r=e.value,t=e.label,n=e.description,i=e.disabled,c=e.isInvalid,v=e.showIsInvalid,p=(0,u.default)(e,d),h=(0,s.v4)(),y="".concat(h,"-label"),g="".concat(h,"-description");return l.default.createElement(l.default.Fragment,null,r&&l.default.createElement(o.default,{text:t,id:y}),l.default.createElement(f.default,(0,a.default)({},p,{value:r,disabled:i,"aria-disabled":i,isInvalid:v&&c,"aria-invalid":c,"aria-labelledby":r?y:void 0,"aria-label":r?void 0:t,"aria-describedby":g})),l.default.createElement(o.default,{id:g,text:n}))}v.propTypes=c,v.defaultProps={isInvalid:!1,showIsInvalid:!1};var p=v;r.default=p},2811:function(e,r,t){var n=t(64836),a=t(18698);Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var u=n(t(27424)),o=function(e,r){if(!r&&e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!=typeof e)return{default:e};var t=f(r);if(t&&t.has(e))return t.get(e);var n={},u=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var i=u?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(t(67294)),i=n(t(29270)),l=n(t(45697));function f(e){if("function"!=typeof WeakMap)return null;var r=new WeakMap,t=new WeakMap;return(f=function(e){return e?t:r})(e)}var s={value:l.default.string,readThis:l.default.string};function d(e){var r=(0,o.useState)(void 0),t=(0,u.default)(r,2),n=t[0],a=t[1],l=(0,o.useState)(void 0),f=(0,u.default)(l,2),s=f[0],d=f[1],c=(0,o.useState)(e.value),v=(0,u.default)(c,2),p=v[0],h=v[1],y=function(){a("status"),d("polite"),h(e.value)};return e.value&&!p||e.value&&p&&e.value!==p?y():!e.value&&p&&(a(void 0),d(void 0),h(void 0)),o.default.createElement(i.default,{"aria-hidden":!e.value,text:e.readThis,"aria-live":s,role:n})}d.propTypes=s;var c=d;r.default=c},29523:function(e,r,t){var n;t.r(r),t.d(r,{NIL:function(){return T},parse:function(){return y},stringify:function(){return c},v1:function(){return h},v3:function(){return E},v4:function(){return M},v5:function(){return P},validate:function(){return i},version:function(){return _}});var a=new Uint8Array(16);function u(){if(!n&&!(n="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return n(a)}var o=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;for(var i=function(e){return"string"==typeof e&&o.test(e)},l=[],f=0;f<256;++f)l.push((f+256).toString(16).substr(1));var s,d,c=function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,t=(l[e[r+0]]+l[e[r+1]]+l[e[r+2]]+l[e[r+3]]+"-"+l[e[r+4]]+l[e[r+5]]+"-"+l[e[r+6]]+l[e[r+7]]+"-"+l[e[r+8]]+l[e[r+9]]+"-"+l[e[r+10]]+l[e[r+11]]+l[e[r+12]]+l[e[r+13]]+l[e[r+14]]+l[e[r+15]]).toLowerCase();if(!i(t))throw TypeError("Stringified UUID is invalid");return t},v=0,p=0;var h=function(e,r,t){var n=r&&t||0,a=r||new Array(16),o=(e=e||{}).node||s,i=void 0!==e.clockseq?e.clockseq:d;if(null==o||null==i){var l=e.random||(e.rng||u)();null==o&&(o=s=[1|l[0],l[1],l[2],l[3],l[4],l[5]]),null==i&&(i=d=16383&(l[6]<<8|l[7]))}var f=void 0!==e.msecs?e.msecs:Date.now(),h=void 0!==e.nsecs?e.nsecs:p+1,y=f-v+(h-p)/1e4;if(y<0&&void 0===e.clockseq&&(i=i+1&16383),(y<0||f>v)&&void 0===e.nsecs&&(h=0),h>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");v=f,p=h,d=i;var g=(1e4*(268435455&(f+=122192928e5))+h)%4294967296;a[n++]=g>>>24&255,a[n++]=g>>>16&255,a[n++]=g>>>8&255,a[n++]=255&g;var b=f/4294967296*1e4&268435455;a[n++]=b>>>8&255,a[n++]=255&b,a[n++]=b>>>24&15|16,a[n++]=b>>>16&255,a[n++]=i>>>8|128,a[n++]=255&i;for(var w=0;w<6;++w)a[n+w]=o[w];return r||c(a)};var y=function(e){if(!i(e))throw TypeError("Invalid UUID");var r,t=new Uint8Array(16);return t[0]=(r=parseInt(e.slice(0,8),16))>>>24,t[1]=r>>>16&255,t[2]=r>>>8&255,t[3]=255&r,t[4]=(r=parseInt(e.slice(9,13),16))>>>8,t[5]=255&r,t[6]=(r=parseInt(e.slice(14,18),16))>>>8,t[7]=255&r,t[8]=(r=parseInt(e.slice(19,23),16))>>>8,t[9]=255&r,t[10]=(r=parseInt(e.slice(24,36),16))/1099511627776&255,t[11]=r/4294967296&255,t[12]=r>>>24&255,t[13]=r>>>16&255,t[14]=r>>>8&255,t[15]=255&r,t};function g(e,r,t){function n(e,n,a,u){if("string"==typeof e&&(e=function(e){e=unescape(encodeURIComponent(e));for(var r=[],t=0;t<e.length;++t)r.push(e.charCodeAt(t));return r}(e)),"string"==typeof n&&(n=y(n)),16!==n.length)throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");var o=new Uint8Array(16+e.length);if(o.set(n),o.set(e,n.length),(o=t(o))[6]=15&o[6]|r,o[8]=63&o[8]|128,a){u=u||0;for(var i=0;i<16;++i)a[u+i]=o[i];return a}return c(o)}try{n.name=e}catch(e){}return n.DNS="6ba7b810-9dad-11d1-80b4-00c04fd430c8",n.URL="6ba7b811-9dad-11d1-80b4-00c04fd430c8",n}function b(e){return 14+(e+64>>>9<<4)+1}function w(e,r){var t=(65535&e)+(65535&r);return(e>>16)+(r>>16)+(t>>16)<<16|65535&t}function I(e,r,t,n,a,u){return w((o=w(w(r,e),w(n,u)))<<(i=a)|o>>>32-i,t);var o,i}function m(e,r,t,n,a,u,o){return I(r&t|~r&n,e,r,a,u,o)}function A(e,r,t,n,a,u,o){return I(r&n|t&~n,e,r,a,u,o)}function U(e,r,t,n,a,u,o){return I(r^t^n,e,r,a,u,o)}function C(e,r,t,n,a,u,o){return I(t^(r|~n),e,r,a,u,o)}var k=function(e){if("string"==typeof e){var r=unescape(encodeURIComponent(e));e=new Uint8Array(r.length);for(var t=0;t<r.length;++t)e[t]=r.charCodeAt(t)}return function(e){for(var r=[],t=32*e.length,n="0123456789abcdef",a=0;a<t;a+=8){var u=e[a>>5]>>>a%32&255,o=parseInt(n.charAt(u>>>4&15)+n.charAt(15&u),16);r.push(o)}return r}(function(e,r){e[r>>5]|=128<<r%32,e[b(r)-1]=r;for(var t=1732584193,n=-271733879,a=-1732584194,u=271733878,o=0;o<e.length;o+=16){var i=t,l=n,f=a,s=u;t=m(t,n,a,u,e[o],7,-680876936),u=m(u,t,n,a,e[o+1],12,-389564586),a=m(a,u,t,n,e[o+2],17,606105819),n=m(n,a,u,t,e[o+3],22,-1044525330),t=m(t,n,a,u,e[o+4],7,-176418897),u=m(u,t,n,a,e[o+5],12,1200080426),a=m(a,u,t,n,e[o+6],17,-1473231341),n=m(n,a,u,t,e[o+7],22,-45705983),t=m(t,n,a,u,e[o+8],7,1770035416),u=m(u,t,n,a,e[o+9],12,-1958414417),a=m(a,u,t,n,e[o+10],17,-42063),n=m(n,a,u,t,e[o+11],22,-1990404162),t=m(t,n,a,u,e[o+12],7,1804603682),u=m(u,t,n,a,e[o+13],12,-40341101),a=m(a,u,t,n,e[o+14],17,-1502002290),t=A(t,n=m(n,a,u,t,e[o+15],22,1236535329),a,u,e[o+1],5,-165796510),u=A(u,t,n,a,e[o+6],9,-1069501632),a=A(a,u,t,n,e[o+11],14,643717713),n=A(n,a,u,t,e[o],20,-373897302),t=A(t,n,a,u,e[o+5],5,-701558691),u=A(u,t,n,a,e[o+10],9,38016083),a=A(a,u,t,n,e[o+15],14,-660478335),n=A(n,a,u,t,e[o+4],20,-405537848),t=A(t,n,a,u,e[o+9],5,568446438),u=A(u,t,n,a,e[o+14],9,-1019803690),a=A(a,u,t,n,e[o+3],14,-187363961),n=A(n,a,u,t,e[o+8],20,1163531501),t=A(t,n,a,u,e[o+13],5,-1444681467),u=A(u,t,n,a,e[o+2],9,-51403784),a=A(a,u,t,n,e[o+7],14,1735328473),t=U(t,n=A(n,a,u,t,e[o+12],20,-1926607734),a,u,e[o+5],4,-378558),u=U(u,t,n,a,e[o+8],11,-2022574463),a=U(a,u,t,n,e[o+11],16,1839030562),n=U(n,a,u,t,e[o+14],23,-35309556),t=U(t,n,a,u,e[o+1],4,-1530992060),u=U(u,t,n,a,e[o+4],11,1272893353),a=U(a,u,t,n,e[o+7],16,-155497632),n=U(n,a,u,t,e[o+10],23,-1094730640),t=U(t,n,a,u,e[o+13],4,681279174),u=U(u,t,n,a,e[o],11,-358537222),a=U(a,u,t,n,e[o+3],16,-722521979),n=U(n,a,u,t,e[o+6],23,76029189),t=U(t,n,a,u,e[o+9],4,-640364487),u=U(u,t,n,a,e[o+12],11,-421815835),a=U(a,u,t,n,e[o+15],16,530742520),t=C(t,n=U(n,a,u,t,e[o+2],23,-995338651),a,u,e[o],6,-198630844),u=C(u,t,n,a,e[o+7],10,1126891415),a=C(a,u,t,n,e[o+14],15,-1416354905),n=C(n,a,u,t,e[o+5],21,-57434055),t=C(t,n,a,u,e[o+12],6,1700485571),u=C(u,t,n,a,e[o+3],10,-1894986606),a=C(a,u,t,n,e[o+10],15,-1051523),n=C(n,a,u,t,e[o+1],21,-2054922799),t=C(t,n,a,u,e[o+8],6,1873313359),u=C(u,t,n,a,e[o+15],10,-30611744),a=C(a,u,t,n,e[o+6],15,-1560198380),n=C(n,a,u,t,e[o+13],21,1309151649),t=C(t,n,a,u,e[o+4],6,-145523070),u=C(u,t,n,a,e[o+11],10,-1120210379),a=C(a,u,t,n,e[o+2],15,718787259),n=C(n,a,u,t,e[o+9],21,-343485551),t=w(t,i),n=w(n,l),a=w(a,f),u=w(u,s)}return[t,n,a,u]}(function(e){if(0===e.length)return[];for(var r=8*e.length,t=new Uint32Array(b(r)),n=0;n<r;n+=8)t[n>>5]|=(255&e[n/8])<<n%32;return t}(e),8*e.length))},E=g("v3",48,k);var M=function(e,r,t){var n=(e=e||{}).random||(e.rng||u)();if(n[6]=15&n[6]|64,n[8]=63&n[8]|128,r){t=t||0;for(var a=0;a<16;++a)r[t+a]=n[a];return r}return c(n)};function O(e,r,t,n){switch(e){case 0:return r&t^~r&n;case 1:case 3:return r^t^n;case 2:return r&t^r&n^t&n}}function j(e,r){return e<<r|e>>>32-r}var R=function(e){var r=[1518500249,1859775393,2400959708,3395469782],t=[1732584193,4023233417,2562383102,271733878,3285377520];if("string"==typeof e){var n=unescape(encodeURIComponent(e));e=[];for(var a=0;a<n.length;++a)e.push(n.charCodeAt(a))}else Array.isArray(e)||(e=Array.prototype.slice.call(e));e.push(128);for(var u=e.length/4+2,o=Math.ceil(u/16),i=new Array(o),l=0;l<o;++l){for(var f=new Uint32Array(16),s=0;s<16;++s)f[s]=e[64*l+4*s]<<24|e[64*l+4*s+1]<<16|e[64*l+4*s+2]<<8|e[64*l+4*s+3];i[l]=f}i[o-1][14]=8*(e.length-1)/Math.pow(2,32),i[o-1][14]=Math.floor(i[o-1][14]),i[o-1][15]=8*(e.length-1)&4294967295;for(var d=0;d<o;++d){for(var c=new Uint32Array(80),v=0;v<16;++v)c[v]=i[d][v];for(var p=16;p<80;++p)c[p]=j(c[p-3]^c[p-8]^c[p-14]^c[p-16],1);for(var h=t[0],y=t[1],g=t[2],b=t[3],w=t[4],I=0;I<80;++I){var m=Math.floor(I/20),A=j(h,5)+O(m,y,g,b)+w+r[m]+c[I]>>>0;w=b,b=g,g=j(y,30)>>>0,y=h,h=A}t[0]=t[0]+h>>>0,t[1]=t[1]+y>>>0,t[2]=t[2]+g>>>0,t[3]=t[3]+b>>>0,t[4]=t[4]+w>>>0}return[t[0]>>24&255,t[0]>>16&255,t[0]>>8&255,255&t[0],t[1]>>24&255,t[1]>>16&255,t[1]>>8&255,255&t[1],t[2]>>24&255,t[2]>>16&255,t[2]>>8&255,255&t[2],t[3]>>24&255,t[3]>>16&255,t[3]>>8&255,255&t[3],t[4]>>24&255,t[4]>>16&255,t[4]>>8&255,255&t[4]]},P=g("v5",80,R),T="00000000-0000-0000-0000-000000000000";var _=function(e){if(!i(e))throw TypeError("Invalid UUID");return parseInt(e.substr(14,1),16)}}}]);