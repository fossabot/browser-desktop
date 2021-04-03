(()=>{"use strict";var e={2875:function(e,n,t){var r=this&&this.__awaiter||function(e,n,t,r){return new(t||(t=Promise))((function(o,a){function i(e){try{u(r.next(e))}catch(e){a(e)}}function s(e){try{u(r.throw(e))}catch(e){a(e)}}function u(e){var n;e.done?o(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(i,s)}u((r=r.apply(e,n||[])).next())}))},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(n,"__esModule",{value:!0}),n.defineFn=n.remoteFn=n.initFn=void 0;const a=t(1614),i=o(t(8433));let s={};n.initFn=()=>i.default("co.dothq.shield.fn",(e=>e.onMessage.addListener((n=>r(void 0,void 0,void 0,(function*(){if(void 0===s[n.name])throw new Error(`The function ${n.name} has not been defined (yet). Please make sure that it is defined before use`);e.postMessage({id:n.id,payload:yield s[n.name](n.payload)})}))))));n.remoteFn=(e,n)=>{const t=a.v4(),r=browser.runtime.connect({name:"co.dothq.shield.fn"}),o=new Promise((e=>{r.onMessage.addListener((function(n){n.id===t&&e(n.payload)}))}));return r.postMessage({id:t,name:e,payload:n}),o};n.defineFn=(e,n)=>{s[e]=n}},5629:function(e,n,t){var r=this&&this.__awaiter||function(e,n,t,r){return new(t||(t=Promise))((function(o,a){function i(e){try{u(r.next(e))}catch(e){a(e)}}function s(e){try{u(r.throw(e))}catch(e){a(e)}}function u(e){var n;e.done?o(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(i,s)}u((r=r.apply(e,n||[])).next())}))};Object.defineProperty(n,"__esModule",{value:!0});const o=t(2875);r(void 0,void 0,void 0,(function*(){(yield o.remoteFn("getWhitelist")).includes("youtube.com")||(setInterval((()=>{const e=document.querySelector(".ytp-ad-text.ytp-ad-skip-button-text");e&&(e.click(),console.log("Video was skipped"))}),100),console.log("================================\nDot Shield is enabled on youtube.com\nWe will try to block all ads on this webpage"))}))},8433:(e,n)=>{Object.defineProperty(n,"__esModule",{value:!0}),n.sleep=void 0;n.sleep=e=>new Promise((n=>setTimeout(n,e))),n.default=(e,n,t)=>{browser.runtime.onConnect.addListener((r=>{r.name===e&&(console.log(`Connected to ${e}`),t&&t(r),n(r),r.onDisconnect.addListener((()=>{t&&t(void 0)})))}))}},1614:(e,n,t)=>{var r;t.r(n),t.d(n,{NIL:()=>k,parse:()=>h,stringify:()=>f,v1:()=>y,v3:()=>M,v4:()=>C,v5:()=>S,validate:()=>s,version:()=>R});var o=new Uint8Array(16);function a(){if(!r&&!(r="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return r(o)}const i=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;const s=function(e){return"string"==typeof e&&i.test(e)};for(var u=[],c=0;c<256;++c)u.push((c+256).toString(16).substr(1));const f=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,t=(u[e[n+0]]+u[e[n+1]]+u[e[n+2]]+u[e[n+3]]+"-"+u[e[n+4]]+u[e[n+5]]+"-"+u[e[n+6]]+u[e[n+7]]+"-"+u[e[n+8]]+u[e[n+9]]+"-"+u[e[n+10]]+u[e[n+11]]+u[e[n+12]]+u[e[n+13]]+u[e[n+14]]+u[e[n+15]]).toLowerCase();if(!s(t))throw TypeError("Stringified UUID is invalid");return t};var d,l,v=0,p=0;const y=function(e,n,t){var r=n&&t||0,o=n||new Array(16),i=(e=e||{}).node||d,s=void 0!==e.clockseq?e.clockseq:l;if(null==i||null==s){var u=e.random||(e.rng||a)();null==i&&(i=d=[1|u[0],u[1],u[2],u[3],u[4],u[5]]),null==s&&(s=l=16383&(u[6]<<8|u[7]))}var c=void 0!==e.msecs?e.msecs:Date.now(),y=void 0!==e.nsecs?e.nsecs:p+1,h=c-v+(y-p)/1e4;if(h<0&&void 0===e.clockseq&&(s=s+1&16383),(h<0||c>v)&&void 0===e.nsecs&&(y=0),y>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");v=c,p=y,l=s;var g=(1e4*(268435455&(c+=122192928e5))+y)%4294967296;o[r++]=g>>>24&255,o[r++]=g>>>16&255,o[r++]=g>>>8&255,o[r++]=255&g;var m=c/4294967296*1e4&268435455;o[r++]=m>>>8&255,o[r++]=255&m,o[r++]=m>>>24&15|16,o[r++]=m>>>16&255,o[r++]=s>>>8|128,o[r++]=255&s;for(var w=0;w<6;++w)o[r+w]=i[w];return n||f(o)};const h=function(e){if(!s(e))throw TypeError("Invalid UUID");var n,t=new Uint8Array(16);return t[0]=(n=parseInt(e.slice(0,8),16))>>>24,t[1]=n>>>16&255,t[2]=n>>>8&255,t[3]=255&n,t[4]=(n=parseInt(e.slice(9,13),16))>>>8,t[5]=255&n,t[6]=(n=parseInt(e.slice(14,18),16))>>>8,t[7]=255&n,t[8]=(n=parseInt(e.slice(19,23),16))>>>8,t[9]=255&n,t[10]=(n=parseInt(e.slice(24,36),16))/1099511627776&255,t[11]=n/4294967296&255,t[12]=n>>>24&255,t[13]=n>>>16&255,t[14]=n>>>8&255,t[15]=255&n,t};function g(e,n,t){function r(e,r,o,a){if("string"==typeof e&&(e=function(e){e=unescape(encodeURIComponent(e));for(var n=[],t=0;t<e.length;++t)n.push(e.charCodeAt(t));return n}(e)),"string"==typeof r&&(r=h(r)),16!==r.length)throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");var i=new Uint8Array(16+e.length);if(i.set(r),i.set(e,r.length),(i=t(i))[6]=15&i[6]|n,i[8]=63&i[8]|128,o){a=a||0;for(var s=0;s<16;++s)o[a+s]=i[s];return o}return f(i)}try{r.name=e}catch(e){}return r.DNS="6ba7b810-9dad-11d1-80b4-00c04fd430c8",r.URL="6ba7b811-9dad-11d1-80b4-00c04fd430c8",r}function m(e){return 14+(e+64>>>9<<4)+1}function w(e,n){var t=(65535&e)+(65535&n);return(e>>16)+(n>>16)+(t>>16)<<16|65535&t}function b(e,n,t,r,o,a){return w((i=w(w(n,e),w(r,a)))<<(s=o)|i>>>32-s,t);var i,s}function A(e,n,t,r,o,a,i){return b(n&t|~n&r,e,n,o,a,i)}function I(e,n,t,r,o,a,i){return b(n&r|t&~r,e,n,o,a,i)}function U(e,n,t,r,o,a,i){return b(n^t^r,e,n,o,a,i)}function _(e,n,t,r,o,a,i){return b(t^(n|~r),e,n,o,a,i)}const M=g("v3",48,(function(e){if("string"==typeof e){var n=unescape(encodeURIComponent(e));e=new Uint8Array(n.length);for(var t=0;t<n.length;++t)e[t]=n.charCodeAt(t)}return function(e){for(var n=[],t=32*e.length,r="0123456789abcdef",o=0;o<t;o+=8){var a=e[o>>5]>>>o%32&255,i=parseInt(r.charAt(a>>>4&15)+r.charAt(15&a),16);n.push(i)}return n}(function(e,n){e[n>>5]|=128<<n%32,e[m(n)-1]=n;for(var t=1732584193,r=-271733879,o=-1732584194,a=271733878,i=0;i<e.length;i+=16){var s=t,u=r,c=o,f=a;t=A(t,r,o,a,e[i],7,-680876936),a=A(a,t,r,o,e[i+1],12,-389564586),o=A(o,a,t,r,e[i+2],17,606105819),r=A(r,o,a,t,e[i+3],22,-1044525330),t=A(t,r,o,a,e[i+4],7,-176418897),a=A(a,t,r,o,e[i+5],12,1200080426),o=A(o,a,t,r,e[i+6],17,-1473231341),r=A(r,o,a,t,e[i+7],22,-45705983),t=A(t,r,o,a,e[i+8],7,1770035416),a=A(a,t,r,o,e[i+9],12,-1958414417),o=A(o,a,t,r,e[i+10],17,-42063),r=A(r,o,a,t,e[i+11],22,-1990404162),t=A(t,r,o,a,e[i+12],7,1804603682),a=A(a,t,r,o,e[i+13],12,-40341101),o=A(o,a,t,r,e[i+14],17,-1502002290),t=I(t,r=A(r,o,a,t,e[i+15],22,1236535329),o,a,e[i+1],5,-165796510),a=I(a,t,r,o,e[i+6],9,-1069501632),o=I(o,a,t,r,e[i+11],14,643717713),r=I(r,o,a,t,e[i],20,-373897302),t=I(t,r,o,a,e[i+5],5,-701558691),a=I(a,t,r,o,e[i+10],9,38016083),o=I(o,a,t,r,e[i+15],14,-660478335),r=I(r,o,a,t,e[i+4],20,-405537848),t=I(t,r,o,a,e[i+9],5,568446438),a=I(a,t,r,o,e[i+14],9,-1019803690),o=I(o,a,t,r,e[i+3],14,-187363961),r=I(r,o,a,t,e[i+8],20,1163531501),t=I(t,r,o,a,e[i+13],5,-1444681467),a=I(a,t,r,o,e[i+2],9,-51403784),o=I(o,a,t,r,e[i+7],14,1735328473),t=U(t,r=I(r,o,a,t,e[i+12],20,-1926607734),o,a,e[i+5],4,-378558),a=U(a,t,r,o,e[i+8],11,-2022574463),o=U(o,a,t,r,e[i+11],16,1839030562),r=U(r,o,a,t,e[i+14],23,-35309556),t=U(t,r,o,a,e[i+1],4,-1530992060),a=U(a,t,r,o,e[i+4],11,1272893353),o=U(o,a,t,r,e[i+7],16,-155497632),r=U(r,o,a,t,e[i+10],23,-1094730640),t=U(t,r,o,a,e[i+13],4,681279174),a=U(a,t,r,o,e[i],11,-358537222),o=U(o,a,t,r,e[i+3],16,-722521979),r=U(r,o,a,t,e[i+6],23,76029189),t=U(t,r,o,a,e[i+9],4,-640364487),a=U(a,t,r,o,e[i+12],11,-421815835),o=U(o,a,t,r,e[i+15],16,530742520),t=_(t,r=U(r,o,a,t,e[i+2],23,-995338651),o,a,e[i],6,-198630844),a=_(a,t,r,o,e[i+7],10,1126891415),o=_(o,a,t,r,e[i+14],15,-1416354905),r=_(r,o,a,t,e[i+5],21,-57434055),t=_(t,r,o,a,e[i+12],6,1700485571),a=_(a,t,r,o,e[i+3],10,-1894986606),o=_(o,a,t,r,e[i+10],15,-1051523),r=_(r,o,a,t,e[i+1],21,-2054922799),t=_(t,r,o,a,e[i+8],6,1873313359),a=_(a,t,r,o,e[i+15],10,-30611744),o=_(o,a,t,r,e[i+6],15,-1560198380),r=_(r,o,a,t,e[i+13],21,1309151649),t=_(t,r,o,a,e[i+4],6,-145523070),a=_(a,t,r,o,e[i+11],10,-1120210379),o=_(o,a,t,r,e[i+2],15,718787259),r=_(r,o,a,t,e[i+9],21,-343485551),t=w(t,s),r=w(r,u),o=w(o,c),a=w(a,f)}return[t,r,o,a]}(function(e){if(0===e.length)return[];for(var n=8*e.length,t=new Uint32Array(m(n)),r=0;r<n;r+=8)t[r>>5]|=(255&e[r/8])<<r%32;return t}(e),8*e.length))}));const C=function(e,n,t){var r=(e=e||{}).random||(e.rng||a)();if(r[6]=15&r[6]|64,r[8]=63&r[8]|128,n){t=t||0;for(var o=0;o<16;++o)n[t+o]=r[o];return n}return f(r)};function P(e,n,t,r){switch(e){case 0:return n&t^~n&r;case 1:return n^t^r;case 2:return n&t^n&r^t&r;case 3:return n^t^r}}function x(e,n){return e<<n|e>>>32-n}const S=g("v5",80,(function(e){var n=[1518500249,1859775393,2400959708,3395469782],t=[1732584193,4023233417,2562383102,271733878,3285377520];if("string"==typeof e){var r=unescape(encodeURIComponent(e));e=[];for(var o=0;o<r.length;++o)e.push(r.charCodeAt(o))}else Array.isArray(e)||(e=Array.prototype.slice.call(e));e.push(128);for(var a=e.length/4+2,i=Math.ceil(a/16),s=new Array(i),u=0;u<i;++u){for(var c=new Uint32Array(16),f=0;f<16;++f)c[f]=e[64*u+4*f]<<24|e[64*u+4*f+1]<<16|e[64*u+4*f+2]<<8|e[64*u+4*f+3];s[u]=c}s[i-1][14]=8*(e.length-1)/Math.pow(2,32),s[i-1][14]=Math.floor(s[i-1][14]),s[i-1][15]=8*(e.length-1)&4294967295;for(var d=0;d<i;++d){for(var l=new Uint32Array(80),v=0;v<16;++v)l[v]=s[d][v];for(var p=16;p<80;++p)l[p]=x(l[p-3]^l[p-8]^l[p-14]^l[p-16],1);for(var y=t[0],h=t[1],g=t[2],m=t[3],w=t[4],b=0;b<80;++b){var A=Math.floor(b/20),I=x(y,5)+P(A,h,g,m)+w+n[A]+l[b]>>>0;w=m,m=g,g=x(h,30)>>>0,h=y,y=I}t[0]=t[0]+y>>>0,t[1]=t[1]+h>>>0,t[2]=t[2]+g>>>0,t[3]=t[3]+m>>>0,t[4]=t[4]+w>>>0}return[t[0]>>24&255,t[0]>>16&255,t[0]>>8&255,255&t[0],t[1]>>24&255,t[1]>>16&255,t[1]>>8&255,255&t[1],t[2]>>24&255,t[2]>>16&255,t[2]>>8&255,255&t[2],t[3]>>24&255,t[3]>>16&255,t[3]>>8&255,255&t[3],t[4]>>24&255,t[4]>>16&255,t[4]>>8&255,255&t[4]]})),k="00000000-0000-0000-0000-000000000000";const R=function(e){if(!s(e))throw TypeError("Invalid UUID");return parseInt(e.substr(14,1),16)}}},n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={exports:{}};return e[r].call(o.exports,o,o.exports,t),o.exports}t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t(5629)})();