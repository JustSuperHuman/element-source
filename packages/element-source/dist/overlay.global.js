"use strict";var ElementSourceOverlay=(()=>{var K=Object.defineProperty;var _t=Object.getOwnPropertyDescriptor;var Ct=Object.getOwnPropertyNames;var Ft=Object.prototype.hasOwnProperty;var Ot=(e,t)=>{for(var n in t)K(e,n,{get:t[n],enumerable:!0})},wt=(e,t,n,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of Ct(t))!Ft.call(e,s)&&s!==n&&K(e,s,{get:()=>t[s],enumerable:!(r=_t(t,s))||r.enumerable});return e};var kt=e=>wt(K({},"__esModule",{value:!0}),e);var dr={};Ot(dr,{init:()=>we});var J="0.5.32",U=`bippy-${J}`,Ie=Object.defineProperty,xt=Object.prototype.hasOwnProperty,w=()=>{},Me=e=>{try{Function.prototype.toString.call(e).indexOf("^_^")>-1&&setTimeout(()=>{throw Error("React is running in production mode, but dead code elimination has not been applied. Read how to correctly configure React for production: https://reactjs.org/link/perf-use-production-build")})}catch{}},B=(e=globalThis.__REACT_DEVTOOLS_GLOBAL_HOOK__)=>!!(e&&"getFiberRoots"in e),Ae=!1,Le,k=(e=globalThis.__REACT_DEVTOOLS_GLOBAL_HOOK__)=>Ae?!0:(e&&typeof e.inject=="function"&&(Le=e.inject.toString()),!!Le?.includes("(injected)")),j=new Set,R=new Set,Z=e=>{let t=new Map,n=0,r={_instrumentationIsActive:!1,_instrumentationSource:U,checkDCE:Me,hasUnsupportedRendererAttached:!1,inject(s){let o=++n;return t.set(o,s),R.add(s),r._instrumentationIsActive||(r._instrumentationIsActive=!0,j.forEach(a=>a())),o},on:w,onCommitFiberRoot:w,onCommitFiberUnmount:w,onPostCommitFiberRoot:w,renderers:t,supportsFiber:!0,supportsFlight:!0};try{Ie(globalThis,"__REACT_DEVTOOLS_GLOBAL_HOOK__",{configurable:!0,enumerable:!0,get(){return r},set(a){if(a&&typeof a=="object"){let i=r.renderers;r=a,i.size>0&&(i.forEach((c,m)=>{R.add(c),a.renderers.set(m,c)}),x(e))}}});let s=window.hasOwnProperty,o=!1;Ie(window,"hasOwnProperty",{configurable:!0,value:function(...a){try{if(!o&&a[0]==="__REACT_DEVTOOLS_GLOBAL_HOOK__")return globalThis.__REACT_DEVTOOLS_GLOBAL_HOOK__=void 0,o=!0,-0}catch{}return s.apply(this,a)},writable:!0})}catch{x(e)}return r},x=e=>{e&&j.add(e);try{let t=globalThis.__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!t)return;if(!t._instrumentationSource){t.checkDCE=Me,t.supportsFiber=!0,t.supportsFlight=!0,t.hasUnsupportedRendererAttached=!1,t._instrumentationSource=U,t._instrumentationIsActive=!1;let n=B(t);if(n||(t.on=w),t.renderers.size){t._instrumentationIsActive=!0,j.forEach(o=>o());return}let r=t.inject,s=k(t);s&&!n&&(Ae=!0,t.inject({scheduleRefresh(){}})&&(t._instrumentationIsActive=!0)),t.inject=o=>{let a=r(o);return R.add(o),s&&t.renderers.set(a,o),t._instrumentationIsActive=!0,j.forEach(i=>i()),a}}(t.renderers.size||t._instrumentationIsActive||k())&&e?.()}catch{}},Q=()=>xt.call(globalThis,"__REACT_DEVTOOLS_GLOBAL_HOOK__"),I=e=>Q()?(x(e),globalThis.__REACT_DEVTOOLS_GLOBAL_HOOK__):Z(e),ee=()=>!!(typeof window<"u"&&(window.document?.createElement||window.navigator?.product==="ReactNative")),z=()=>{try{ee()&&I()}catch{}};z();var te=0,ne=1;var re=5;var oe=11,se=13;var ae=15,ie=16;var le=19;var ce=26,ue=27,me=28,fe=30;var pe=e=>{switch(e.tag){case 1:case 11:case 0:case 14:case 15:return!0;default:return!1}};function L(e,t,n=!1){if(!e)return null;let r=t(e);if(r instanceof Promise)return(async()=>{if(await r===!0)return e;let o=n?e.return:e.child;for(;o;){let a=await ge(o,t,n);if(a)return a;o=n?null:o.sibling}return null})();if(r===!0)return e;let s=n?e.return:e.child;for(;s;){let o=de(s,t,n);if(o)return o;s=n?null:s.sibling}return null}var de=(e,t,n=!1)=>{if(!e)return null;if(t(e)===!0)return e;let r=n?e.return:e.child;for(;r;){let s=de(r,t,n);if(s)return s;r=n?null:r.sibling}return null},ge=async(e,t,n=!1)=>{if(!e)return null;if(await t(e)===!0)return e;let r=n?e.return:e.child;for(;r;){let s=await ge(r,t,n);if(s)return s;r=n?null:r.sibling}return null};var be=e=>{let t=e;return typeof t=="function"?t:typeof t=="object"&&t?be(t.type||t.render):null},C=e=>{let t=e;if(typeof t=="string")return t;if(typeof t!="function"&&!(typeof t=="object"&&t))return null;let n=t.displayName||t.name||null;if(n)return n;let r=be(t);return r&&(r.displayName||r.name)||null};var M=()=>{let e=globalThis.__REACT_DEVTOOLS_GLOBAL_HOOK__;return!!e?._instrumentationIsActive||B(e)||k(e)};var O=e=>{let t=globalThis.__REACT_DEVTOOLS_GLOBAL_HOOK__;if(t?.renderers)for(let n of t.renderers.values())try{let r=n.findFiberByHostInstance?.(e);if(r)return r}catch{}if(typeof e=="object"&&e){if("_reactRootContainer"in e)return e._reactRootContainer?._internalRoot?.current?.child;for(let n in e)if(n.startsWith("__reactContainer$")||n.startsWith("__reactInternalInstance$")||n.startsWith("__reactFiber"))return e[n]||null}return null},It=Error();var Pe=/^[a-zA-Z][a-zA-Z\d+\-.]*:/,Lt=["rsc://","file:///","webpack://","webpack-internal://","node:","turbopack://","metro://","/app-pages-browser/","/(app-pages-browser)/"],Mt=["<anonymous>","eval",""],Ve=/\.(jsx|tsx|ts|js)$/,At=/(\.min|bundle|chunk|vendor|vendors|runtime|polyfill|polyfills)\.(js|mjs|cjs)$|(chunk|bundle|vendor|vendors|runtime|polyfill|polyfills|framework|app|main|index)[-_.][A-Za-z0-9_-]{4,}\.(js|mjs|cjs)$|[\da-f]{8,}\.(js|mjs|cjs)$|[-_.][\da-f]{20,}\.(js|mjs|cjs)$|\/dist\/|\/build\/|\/.next\/|\/out\/|\/node_modules\/|\.webpack\.|\.vite\.|\.turbopack\./i,Pt=/^\?[\w~.-]+(?:=[^&#]*)?(?:&[\w~.-]+(?:=[^&#]*)?)*$/,We="(at Server)",Ht=/(^|@)\S+:\d+/,Ge=/^\s*at .*(\S+:\d+|\(native\))/m,Dt=/^(eval@)?(\[native code\])?$/;var V=(e,t)=>{if(t?.includeInElement!==!1){let n=e.split(`
`),r=[];for(let s of n)if(/^\s*at\s+/.test(s)){let o=He(s,void 0)[0];o&&r.push(o)}else if(/^\s*in\s+/.test(s)){let o=s.replace(/^\s*in\s+/,"").replace(/\s*\(at .*\)$/,"");r.push({functionName:o,source:s})}else if(s.match(Ht)){let o=De(s,void 0)[0];o&&r.push(o)}return Se(r,t)}return e.match(Ge)?He(e,t):De(e,t)},Xe=e=>{if(!e.includes(":"))return[e,void 0,void 0];let t=e.startsWith("(")&&/:\d+\)$/.test(e)?e.slice(1,-1):e,n=/(.+?)(?::(\d+))?(?::(\d+))?$/.exec(t);return n?[n[1],n[2]||void 0,n[3]||void 0]:[t,void 0,void 0]},Se=(e,t)=>t&&t.slice!=null?Array.isArray(t.slice)?e.slice(t.slice[0],t.slice[1]):e.slice(0,t.slice):e;var He=(e,t)=>Se(e.split(`
`).filter(n=>!!n.match(Ge)),t).map(n=>{let r=n;r.includes("(eval ")&&(r=r.replace(/eval code/g,"eval").replace(/(\(eval at [^()]*)|(,.*$)/g,""));let s=r.replace(/^\s+/,"").replace(/\(eval code/g,"(").replace(/^.*?\s+/,""),o=s.match(/ (\(.+\)$)/);s=o?s.replace(o[0],""):s;let a=Xe(o?o[1]:s);return{functionName:o&&s||void 0,fileName:["eval","<anonymous>"].includes(a[0])?void 0:a[0],lineNumber:a[1]?+a[1]:void 0,columnNumber:a[2]?+a[2]:void 0,source:r}});var De=(e,t)=>Se(e.split(`
`).filter(n=>!n.match(Dt)),t).map(n=>{let r=n;if(r.includes(" > eval")&&(r=r.replace(/ line (\d+)(?: > eval line \d+)* > eval:\d+:\d+/g,":$1")),!r.includes("@")&&!r.includes(":"))return{functionName:r};{let s=/(([^\n\r"\u2028\u2029]*".[^\n\r"\u2028\u2029]*"[^\n\r@\u2028\u2029]*(?:@[^\n\r"\u2028\u2029]*"[^\n\r@\u2028\u2029]*)*(?:[\n\r\u2028\u2029][^@]*)?)?[^@]*)@/,o=r.match(s),a=o&&o[1]?o[1]:void 0,i=Xe(r.replace(s,""));return{functionName:a,fileName:i[0],lineNumber:i[1]?+i[1]:void 0,columnNumber:i[2]?+i[2]:void 0,source:r}}});var $t=44,$e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",jt=new Uint8Array(64),qe=new Uint8Array(128);for(let e=0;e<$e.length;e++){let t=$e.charCodeAt(e);jt[e]=t,qe[t]=e}function A(e,t){let n=0,r=0,s=0;do s=qe[e.next()],n|=(s&31)<<r,r+=5;while(s&32);let o=n&1;return n>>>=1,o&&(n=-2147483648|-n),t+n}function je(e,t){return e.pos>=t?!1:e.peek()!==$t}var Ut=class{constructor(e){this.pos=0,this.buffer=e}next(){return this.buffer.charCodeAt(this.pos++)}peek(){return this.buffer.charCodeAt(this.pos)}indexOf(e){let{buffer:t,pos:n}=this,r=t.indexOf(e,n);return r===-1?t.length:r}};function Ke(e){let{length:t}=e,n=new Ut(e),r=[],s=0,o=0,a=0,i=0,c=0;do{let m=n.indexOf(";"),l=[],u=!0,p=0;for(s=0;n.pos<m;){let g;s=A(n,s),s<p&&(u=!1),p=s,je(n,m)?(o=A(n,o),a=A(n,a),i=A(n,i),je(n,m)?(c=A(n,c),g=[s,o,a,i,c]):g=[s,o,a,i]):g=[s],l.push(g),n.pos++}u||Bt(l),r.push(l),n.pos=m+1}while(n.pos<=t);return r}function Bt(e){e.sort(zt)}function zt(e,t){return e[0]-t[0]}var Je=/^[a-zA-Z][a-zA-Z\d+\-.]*:/,Yt=/^data:application\/json[^,]+base64,/,Vt=/(?:\/\/[@#][ \t]+sourceMappingURL=([^\s'"]+?)[ \t]*$)|(?:\/\*[@#][ \t]+sourceMappingURL=([^*]+?)[ \t]*(?:\*\/)[ \t]*$)/,Ze=typeof WeakRef<"u",P=new Map,Y=new Map,Wt=e=>Ze&&e instanceof WeakRef,Ue=(e,t,n,r)=>{if(n<0||n>=e.length)return null;let s=e[n];if(!s||s.length===0)return null;let o=null;for(let l of s)if(l[0]<=r)o=l;else break;if(!o||o.length<4)return null;let[,a,i,c]=o;if(a===void 0||i===void 0||c===void 0)return null;let m=t[a];return m?{columnNumber:c,fileName:m,lineNumber:i+1}:null},Gt=(e,t,n)=>{if(e.sections){let r=null;for(let a of e.sections)if(t>a.offset.line||t===a.offset.line&&n>=a.offset.column)r=a;else break;if(!r)return null;let s=t-r.offset.line,o=t===r.offset.line?n-r.offset.column:n;return Ue(r.map.mappings,r.map.sources,s,o)}return Ue(e.mappings,e.sources,t-1,n)},Xt=(e,t)=>{let n=t.split(`
`),r;for(let o=n.length-1;o>=0&&!r;o--){let a=n[o].match(Vt);a&&(r=a[1]||a[2])}if(!r)return null;let s=Je.test(r);if(!(Yt.test(r)||s||r.startsWith("/"))){let o=e.split("/");o[o.length-1]=r,r=o.join("/")}return r},qt=e=>({file:e.file,mappings:Ke(e.mappings),names:e.names,sourceRoot:e.sourceRoot,sources:e.sources,sourcesContent:e.sourcesContent,version:3}),Kt=e=>{let t=e.sections.map(({map:r,offset:s})=>({map:{...r,mappings:Ke(r.mappings)},offset:s})),n=new Set;for(let r of t)for(let s of r.map.sources)n.add(s);return{file:e.file,mappings:[],names:[],sections:t,sourceRoot:void 0,sources:Array.from(n),sourcesContent:void 0,version:3}},Be=e=>{if(!e)return!1;let t=e.trim();if(!t)return!1;let n=t.match(Je);if(!n)return!0;let r=n[0].toLowerCase();return r==="http:"||r==="https:"},Jt=async(e,t=fetch)=>{if(!Be(e))return null;let n;try{let s=await t(e);if(!s.ok)return null;n=await s.text()}catch{return null}if(!n)return null;let r=Xt(e,n);if(!r||!Be(r))return null;try{let s=await t(r);if(!s.ok)return null;let o=await s.json();return"sections"in o?Kt(o):qt(o)}catch{return null}},Zt=async(e,t=!0,n)=>{if(t&&P.has(e)){let o=P.get(e);if(o==null)return null;if(Wt(o)){let a=o.deref();if(a)return a;P.delete(e)}else return o}if(t&&Y.has(e))return Y.get(e);let r=Jt(e,n);t&&Y.set(e,r);let s=await r;return t&&Y.delete(e),t&&(s===null?P.set(e,null):P.set(e,Ze?new WeakRef(s):s)),s},Qt=async(e,t=!0,n)=>await Promise.all(e.map(async r=>{if(!r.fileName)return r;let s=await Zt(r.fileName,t,n);if(!s||typeof r.lineNumber!="number"||typeof r.columnNumber!="number")return r;let o=Gt(s,r.lineNumber,r.columnNumber);return o?{...r,source:o.fileName&&r.source?r.source.replace(r.fileName,o.fileName):r.source,fileName:o.fileName,lineNumber:o.lineNumber,columnNumber:o.columnNumber,isSymbolicated:!0}:r})),ye=e=>e._debugStack instanceof Error&&typeof e._debugStack?.stack=="string",en=()=>{let e=I();for(let t of[...Array.from(R),...Array.from(e.renderers.values())]){let n=t.currentDispatcherRef;if(n&&typeof n=="object")return"H"in n?n.H:n.current}return null},ze=e=>{for(let t of R){let n=t.currentDispatcherRef;n&&typeof n=="object"&&("H"in n?n.H=e:n.current=e)}},y=e=>`
    in ${e}`,tn=(e,t)=>{let n=y(e);return t&&(n+=` (at ${t})`),n},he=!1,Ne=(e,t)=>{if(!e||he)return"";let n=Error.prepareStackTrace;Error.prepareStackTrace=void 0,he=!0;let r=en();ze(null);let s=console.error,o=console.warn;console.error=()=>{},console.warn=()=>{};try{let i={DetermineComponentFrameRoot(){let l;try{if(t){let u=function(){throw Error()};if(Object.defineProperty(u.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(u,[])}catch(p){l=p}Reflect.construct(e,[],u)}else{try{u.call()}catch(p){l=p}e.call(u.prototype)}}else{try{throw Error()}catch(p){l=p}let u=e();u&&typeof u.catch=="function"&&u.catch(()=>{})}}catch(u){if(u instanceof Error&&l instanceof Error&&typeof u.stack=="string")return[u.stack,l.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot",Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name")?.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});let[c,m]=i.DetermineComponentFrameRoot();if(c&&m){let l=c.split(`
`),u=m.split(`
`),p=0,g=0;for(;p<l.length&&!l[p].includes("DetermineComponentFrameRoot");)p++;for(;g<u.length&&!u[g].includes("DetermineComponentFrameRoot");)g++;if(p===l.length||g===u.length)for(p=l.length-1,g=u.length-1;p>=1&&g>=0&&l[p]!==u[g];)g--;for(;p>=1&&g>=0;p--,g--)if(l[p]!==u[g]){if(p!==1||g!==1)do if(p--,g--,g<0||l[p]!==u[g]){let S=`
${l[p].replace(" at new "," at ")}`,F=C(e);return F&&S.includes("<anonymous>")&&(S=S.replace("<anonymous>",F)),S}while(p>=1&&g>=0);break}}}finally{he=!1,Error.prepareStackTrace=n,ze(r),console.error=s,console.warn=o}let a=e?C(e):"";return a?y(a):""},nn=(e,t)=>{let n=e.tag,r="";switch(n){case me:r=y("Activity");break;case ne:r=Ne(e.type,!0);break;case oe:r=Ne(e.type.render,!1);break;case te:case ae:r=Ne(e.type,!1);break;case re:case ce:case ue:r=y(e.type);break;case ie:r=y("Lazy");break;case se:r=e.child!==t&&t!==null?y("Suspense Fallback"):y("Suspense");break;case le:r=y("SuspenseList");break;case fe:r=y("ViewTransition");break;default:return""}return r},rn=e=>{try{let t="",n=e,r=null;do{t+=nn(n,r);let s=n._debugInfo;if(s&&Array.isArray(s))for(let o=s.length-1;o>=0;o--){let a=s[o];typeof a.name=="string"&&(t+=tn(a.name,a.env))}r=n,n=n.return}while(n);return t}catch(t){return t instanceof Error?`
Error generating stack: ${t.message}
${t.stack}`:""}},Ee=e=>{let t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;let n=e;if(!n)return"";Error.prepareStackTrace=t,n.startsWith(`Error: react-stack-top-frame
`)&&(n=n.slice(29));let r=n.indexOf(`
`);if(r!==-1&&(n=n.slice(r+1)),r=Math.max(n.indexOf("react_stack_bottom_frame"),n.indexOf("react-stack-bottom-frame")),r!==-1&&(r=n.lastIndexOf(`
`,r)),r!==-1)n=n.slice(0,r);else return"";return n},on=e=>!!(e.fileName?.startsWith("rsc://")&&e.functionName),sn=(e,t)=>e.fileName===t.fileName&&e.lineNumber===t.lineNumber&&e.columnNumber===t.columnNumber,an=e=>{let t=new Map;for(let n of e)for(let r of n.stackFrames){if(!on(r))continue;let s=r.functionName,o=t.get(s)??[];o.some(a=>sn(a,r))||(o.push(r),t.set(s,o))}return t},ln=(e,t,n)=>{if(!e.functionName)return{...e,isServer:!0};let r=t.get(e.functionName);if(!r||r.length===0)return{...e,isServer:!0};let s=n.get(e.functionName)??0,o=r[s%r.length];return n.set(e.functionName,s+1),{...e,isServer:!0,fileName:o.fileName,lineNumber:o.lineNumber,columnNumber:o.columnNumber,source:e.source?.replace(We,`(${o.fileName}:${o.lineNumber}:${o.columnNumber})`)}},cn=e=>{let t=[];return L(e,n=>{if(!ye(n))return;let r=typeof n.type=="string"?n.type:C(n.type)||"<anonymous>";t.push({componentName:r,stackFrames:V(Ee(n._debugStack?.stack))})},!0),t},Qe=async(e,t=!0,n)=>{let r=cn(e),s=V(rn(e)),o=an(r),a=new Map;return Qt(s.map(i=>i.source?.includes(We)??!1?ln(i,o,a):i).filter((i,c,m)=>{if(c===0)return!0;let l=m[c-1];return i.functionName!==l.functionName}),t,n)};var Ye=e=>e.split("/").filter(Boolean).length,un=e=>e.split("/").filter(Boolean)[0]??null,mn=e=>{let t=e.indexOf("/",1);if(t===-1||Ye(e.slice(0,t))!==1)return e;let n=e.slice(t);if(!Ve.test(n)||Ye(n)<2)return e;let r=un(n);return!r||r.startsWith("@")||r.length>4?e:n},ve=e=>{if(!e||Mt.some(o=>o===e))return"";let t=e,n=t.startsWith("http://")||t.startsWith("https://");if(n)try{t=new URL(t).pathname}catch{}if(n&&(t=mn(t)),t.startsWith("about://React/")){let o=t.slice(14),a=o.indexOf("/"),i=o.indexOf(":");t=a!==-1&&(i===-1||a<i)?o.slice(a+1):o}let r=!0;for(;r;){r=!1;for(let o of Lt)if(t.startsWith(o)){t=t.slice(o.length),o==="file:///"&&(t=`/${t.replace(/^\/+/,"")}`),r=!0;break}}if(Pe.test(t)){let o=t.match(Pe);o&&(t=t.slice(o[0].length))}if(t.startsWith("//")){let o=t.indexOf("/",2);t=o===-1?"":t.slice(o)}let s=t.indexOf("?");if(s!==-1){let o=t.slice(s);Pt.test(o)&&(t=t.slice(0,s))}return t},et=e=>{let t=ve(e);return!(!t||!Ve.test(t)||At.test(t))};var H=e=>typeof Element<"u"&&e instanceof Element;var dn=["_","$","motion.","styled.","chakra.","ark.","Primitive.","Slot."],gn=new Set(["InnerLayoutRouter","RedirectErrorBoundary","RedirectBoundary","HTTPAccessFallbackErrorBoundary","HTTPAccessFallbackBoundary","LoadingBoundary","ErrorBoundary","InnerScrollAndFocusHandler","ScrollAndFocusHandler","RenderFromTemplateContext","OuterLayoutRouter","body","html","DevRootHTTPAccessFallbackBoundary","AppDevOverlayErrorBoundary","AppDevOverlay","HotReload","Router","ErrorBoundaryHandler","AppRouter","ServerRoot","SegmentStateProvider","RootErrorBoundary","LoadableComponent","MotionDOMComponent"]),bn=new Set(["Suspense","Fragment","StrictMode","Profiler","SuspenseList"]),Te,hn=e=>(e&&(Te=void 0),Te??=typeof document<"u"&&!!(document.getElementById("__NEXT_DATA__")||document.querySelector("nextjs-portal")),Te),nt=e=>gn.has(e)||bn.has(e)?!0:dn.some(t=>e.startsWith(t)),rt=e=>!(e.length<=1||nt(e)||e[0]!==e[0].toUpperCase()||e.includes("Provider")||e.includes("Context")),Nn=e=>!(!e||nt(e)||e==="SlotClone"||e==="Slot"),ot=["about://React/","rsc://React/"],Sn=e=>ot.some(t=>e.startsWith(t)),yn=e=>{for(let t of ot){if(!e.startsWith(t))continue;let n=e.indexOf("/",t.length),r=e.lastIndexOf("?");if(n>-1&&r>-1)return decodeURI(e.slice(n+1,r))}return e},En=async e=>{let t=[],n=[];for(let o=0;o<e.length;o++){let a=e[o];!a.isServer||!a.fileName||(t.push(o),n.push({file:yn(a.fileName),methodName:a.functionName??"<unknown>",line1:a.lineNumber??null,column1:a.columnNumber??null,arguments:[]}))}if(n.length===0)return e;let r=new AbortController,s=setTimeout(()=>r.abort(),5e3);try{let o=await fetch("/__nextjs_original-stack-frames",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({frames:n,isServer:!0,isEdgeServer:!1,isAppDirectory:!0}),signal:r.signal});if(!o.ok)return e;let a=await o.json(),i=[...e];for(let c=0;c<t.length;c++){let m=a[c];if(m?.status!=="fulfilled")continue;let l=m.value?.originalStackFrame;if(!l?.file||l.ignored)continue;let u=t[c];i[u]={...e[u],fileName:l.file,lineNumber:l.line1??void 0,columnNumber:l.column1??void 0,isSymbolicated:!0}}return i}catch{return e}finally{clearTimeout(s)}},vn=e=>{let t=new Map;return L(e,n=>{if(!ye(n))return!1;let r=Ee(n._debugStack.stack);if(!r)return!1;for(let s of V(r))!s.functionName||!s.fileName||Sn(s.fileName)&&(t.has(s.functionName)||t.set(s.functionName,{...s,isServer:!0}));return!1},!0),t},Tn=(e,t)=>{if(!t.some(s=>s.isServer&&!s.fileName&&s.functionName))return t;let r=vn(e);return r.size===0?t:t.map(s=>{if(!s.isServer||s.fileName||!s.functionName)return s;let o=r.get(s.functionName);return o?{...s,fileName:o.fileName,lineNumber:o.lineNumber,columnNumber:o.columnNumber}:s})},st=e=>{if(!M()||O(e))return e;if(H(e)){let t=e.parentElement;for(;t;){if(O(t))return t;t=t.parentElement}}return e},tt=new WeakMap,Rn=async e=>{try{let t=O(e);if(!t)return null;let n=await Qe(t);if(hn()){let r=Tn(t,n);return En(r)}return n}catch{return null}},at=e=>{if(!M())return Promise.resolve([]);let t=st(e),n=tt.get(t);if(n)return n;let r=Rn(t);return tt.set(t,r),r},_n=e=>{if(!e||e.length===0)return null;for(let t of e)if(t.fileName&&et(t.fileName))return{filePath:ve(t.fileName),lineNumber:t.lineNumber??null,columnNumber:null,componentName:t.functionName&&rt(t.functionName)?t.functionName:null};return null},Cn=async e=>{let t=await at(e),n=_n(t);return n?[n]:[]},Fn=async e=>{if(!M())return null;let t=await at(e);if(t){for(let o of t)if(o.functionName&&rt(o.functionName))return o.functionName}let n=st(e),r=O(n);if(!r)return null;let s=r.return;for(;s;){if(pe(s)){let o=C(s.type);if(o&&Nn(o))return o}s=s.return}return null},W={name:"react",resolveStack:Cn,resolveComponentName:Fn};var E=e=>typeof e=="object"&&e!==null&&!Array.isArray(e);var v=e=>typeof e=="string"?e:null;var D=e=>typeof e=="number"&&Number.isFinite(e)?e:null;var On="__svelte_meta",wn=e=>{let t=e;for(;t;){let n=Reflect.get(t,On);if(E(n))return n;t=t.parentElement}return null},kn=e=>{let t=e.loc;if(!E(t))return null;let n=v(t.file),r=D(t.line),s=D(t.column);return!n||r===null||s===null?null:{filePath:n,lineNumber:r,columnNumber:s+1}},xn=e=>{let t=e.parent;for(;E(t);){let n=v(t.componentTag);if(n)return n;t=t.parent}return null},In=e=>{let t=[],n=e.parent;for(;E(n);){let r=v(n.file),s=D(n.line),o=D(n.column),a=v(n.componentTag);r&&s!==null&&o!==null&&t.push({filePath:r,lineNumber:s,columnNumber:o+1,componentName:a}),n=n.parent}return t},Ln=e=>{let t=wn(e);if(!t)return[];let n=kn(t);if(!n)return[];let r=[{filePath:n.filePath,lineNumber:n.lineNumber,columnNumber:n.columnNumber,componentName:xn(t)}],s=new Set([`${n.filePath}:${n.lineNumber}:${n.columnNumber}`]);for(let o of In(t)){let a=`${o.filePath}:${o.lineNumber??""}:${o.columnNumber??""}`;s.has(a)||(s.add(a),r.push(o))}return r},lt={name:"svelte",resolveStack:Ln};var ct=e=>{let t=Number.parseInt(e,10);return Number.isNaN(t)||t<1?null:t},G=e=>{let t=e.lastIndexOf(":");if(t===-1)return null;let n=e.lastIndexOf(":",t-1);if(n===-1)return null;let r=e.slice(0,n);if(!r)return null;let s=e.slice(n+1,t),o=e.slice(t+1),a=ct(s),i=ct(o);return a===null||i===null?null:{filePath:r,lineNumber:a,columnNumber:i}};var ut="data-v-inspector",Mn=`[${ut}]`,An="__vueParentComponent",mt=e=>{if(!e)return null;let t=e.type;return E(t)?t:null},Pn=e=>{let t=Reflect.get(e,An);return E(t)?t:null},ft=e=>{let t=e;for(;t;){let n=Pn(t);if(n)return n;t=t.parentElement}return null},pt=e=>e?v(e.__name)??v(e.name):null,Hn=e=>e?v(e.__file):null,Dn=e=>{if(!e)return null;let t=Reflect.get(e,"parent");return E(t)?t:null},$n=e=>{let t=[],n=ft(e);for(;n;)t.push(n),n=Dn(n);return t},jn=e=>$n(e).map(t=>{let n=mt(t),r=Hn(n);return r?{filePath:r,lineNumber:null,columnNumber:null,componentName:pt(n)}:null}).filter(t=>!!t),Un=e=>{let t=e.closest(Mn);if(!t)return null;let n=t.getAttribute(ut);if(!n)return null;let r=G(n);if(!r)return null;let s=ft(e),o=mt(s);return{filePath:r.filePath,lineNumber:r.lineNumber,columnNumber:r.columnNumber,componentName:pt(o)}},Bn=e=>{let t=[],n=new Set,r=Un(e);if(r){let s=`${r.filePath}|${r.componentName??""}`;t.push(r),n.add(s)}for(let s of jn(e)){let o=`${s.filePath}|${s.componentName??""}`;n.has(o)||(n.add(o),t.push(s))}return t},dt={name:"vue",resolveStack:Bn};var Vn="$$",Wn=/location:\s*["']([^"']+:\d+:\d+)["']/g,Nt="/src/",Gn=".css",Xn="?import",qn="__SOLID_RUNTIME_MODULES__",bt=new Map,ht=new Map,Kn=e=>{if(e.includes(Xn))return!1;let t=new URL(e,window.location.href).pathname;return t.endsWith(Gn)?!1:t.includes(Nt)},Jn=()=>{if(typeof window>"u")return[];let e=performance.getEntriesByType("resource"),t=new Set;for(let n of e)!n.name||!Kn(n.name)||t.add(n.name);return Array.from(t)},Zn=e=>{let t=bt.get(e);if(t)return t;let n=fetch(e).then(r=>r.ok?r.text():null).catch(()=>null);return bt.set(e,n),n},Qn=()=>{if(typeof window>"u")return[];let e=Reflect.get(window,qn);return Array.isArray(e)?e:[]},er=async e=>{for(let t of Qn()){let n=t.content.indexOf(e);if(n!==-1)return{moduleUrl:t.url,moduleContent:t.content,handlerSourceIndex:n}}for(let t of Jn()){let n=await Zn(t);if(!n)continue;let r=n.indexOf(e);if(r!==-1)return{moduleUrl:t,moduleContent:n,handlerSourceIndex:r}}return null},tr=(e,t)=>{let n=Math.max(0,t-2e3),r=Math.min(e.length,t+2e3),s=e.slice(n,r),o=[];for(let c of s.matchAll(Wn)){let m=c[1];if(!m)continue;let l=G(m);if(!l||c.index===void 0)continue;let u=n+c.index;o.push({sourceInfo:{filePath:l.filePath,lineNumber:l.lineNumber,columnNumber:l.columnNumber,componentName:null},distance:Math.abs(u-t)})}o.sort((c,m)=>{let l=c.sourceInfo.lineNumber??0,u=m.sourceInfo.lineNumber??0;return u!==l?u-l:c.distance-m.distance});let a=new Set,i=[];for(let c of o){let m=`${c.sourceInfo.filePath}:${c.sourceInfo.lineNumber}:${c.sourceInfo.columnNumber}`;a.has(m)||(a.add(m),i.push(c.sourceInfo))}return i},nr=e=>{try{let t=decodeURIComponent(new URL(e,window.location.href).pathname);return t.includes(Nt)?t.startsWith("/")?t.slice(1):t:null}catch{return null}},rr=(e,t)=>{let r=e.slice(0,t).split(`
`),s=r[r.length-1]??"";return{lineNumber:r.length,columnNumber:s.length+1}},or=e=>{let t=e;for(;t;){for(let n of Object.getOwnPropertyNames(t)){if(!n.startsWith(Vn))continue;let r=Reflect.get(t,n);if(typeof r!="function")continue;let s=String(r).trim();if(!(s.length<3))return{source:s}}t=t.parentElement}return null},sr=e=>{let t=ht.get(e);if(t)return t;let n=(async()=>{let r=await er(e);if(!r)return[];let s=tr(r.moduleContent,r.handlerSourceIndex);if(s.length>0)return s;let o=nr(r.moduleUrl);if(!o)return[];let a=rr(r.moduleContent,r.handlerSourceIndex);return[{filePath:o,lineNumber:a.lineNumber,columnNumber:a.columnNumber,componentName:null}]})();return ht.set(e,n),n},ar=e=>{let t=or(e);return t?sr(t.source):Promise.resolve([])},St={name:"solid",resolveStack:ar};var yt=e=>"tagName"in e&&typeof e.tagName=="string"?e.tagName.toLowerCase():"nodeName"in e&&typeof e.nodeName=="string"?e.nodeName.toLowerCase():"";var ir=[lt,dt,St],Et=async(e,t)=>{for(let n of t){let s=(await n.resolveStack(e)).filter(o=>o.filePath.length>0);if(s.length>0)return s}return[]},lr=(e={})=>{let t=e.resolvers??ir,n=async a=>{let i=await W.resolveStack(a);if(H(a)){let c=await Et(a,t);return i.length>0?[...i,...c]:c}return i};return{resolveSource:async a=>(await n(a))[0]??null,resolveStack:n,resolveComponentName:async a=>{let i=await W.resolveComponentName?.(a);return i||(H(a)?(await Et(a,t)).find(l=>l.componentName)?.componentName??null:null)},resolveElementInfo:async a=>{let i=await n(a),c=i[0]??null,m=i.find(l=>l.componentName)?.componentName??await W.resolveComponentName?.(a)??null;return{tagName:yt(a),componentName:m,source:c,stack:i}}}},X=lr(),Zo=X.resolveSource,Qo=X.resolveStack,es=X.resolveComponentName,Re=X.resolveElementInfo;var cr=e=>{let t=[e.filePath];return e.lineNumber!==null&&t.push(String(e.lineNumber)),e.columnNumber!==null&&t.push(String(e.columnNumber)),t.join(":")},vt=e=>{let t=cr(e);return e.componentName?`
  in ${e.componentName} (at ${t})`:`
  in ${t}`};var Tt="element-source-overlay",b="element-source-overlay",Fe="element-source-highlight",Oe="element-source-label",_e={enabled:!1,x:16,y:16,logToConsole:!1},ur=()=>{try{let e=localStorage.getItem(Tt);return e?{..._e,...JSON.parse(e)}:{..._e}}catch{return{..._e}}},Ce=e=>{try{localStorage.setItem(Tt,JSON.stringify(e))}catch{}},mr=()=>{let e=document.createElement("style");return e.textContent=`
    #${b} {
      position: fixed;
      z-index: 2147483647;
      font-family: ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace;
      font-size: 12px;
      user-select: none;
      -webkit-user-select: none;
      pointer-events: auto;
    }

    #${b} .es-panel {
      background: #1a1a2e;
      color: #e0e0e0;
      border: 1px solid #333;
      border-radius: 8px;
      box-shadow: 0 4px 24px rgba(0, 0, 0, 0.4);
      overflow: hidden;
      min-width: 220px;
    }

    #${b} .es-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 6px 10px;
      background: #16213e;
      cursor: grab;
      gap: 8px;
    }

    #${b} .es-header:active {
      cursor: grabbing;
    }

    #${b} .es-title {
      font-weight: 600;
      font-size: 11px;
      color: #a0c4ff;
      white-space: nowrap;
    }

    #${b} .es-controls {
      display: flex;
      align-items: center;
      gap: 6px;
    }

    #${b} .es-toggle {
      position: relative;
      width: 36px;
      height: 18px;
      background: #444;
      border-radius: 9px;
      cursor: pointer;
      transition: background 0.2s;
      border: none;
      padding: 0;
    }

    #${b} .es-toggle.es-on {
      background: #4caf50;
    }

    #${b} .es-toggle::after {
      content: "";
      position: absolute;
      top: 2px;
      left: 2px;
      width: 14px;
      height: 14px;
      background: #fff;
      border-radius: 50%;
      transition: transform 0.2s;
    }

    #${b} .es-toggle.es-on::after {
      transform: translateX(18px);
    }

    #${b} .es-log-btn {
      background: none;
      border: 1px solid #555;
      color: #999;
      border-radius: 4px;
      padding: 1px 5px;
      cursor: pointer;
      font-size: 10px;
      font-family: inherit;
      transition: all 0.15s;
    }

    #${b} .es-log-btn.es-on {
      border-color: #ff9800;
      color: #ff9800;
    }

    #${b} .es-body {
      padding: 8px 10px;
      max-height: 200px;
      overflow-y: auto;
      line-height: 1.5;
    }

    #${b} .es-body:empty::after {
      content: "Hover over elements...";
      color: #666;
      font-style: italic;
    }

    #${b} .es-tag {
      color: #ff79c6;
    }

    #${b} .es-component {
      color: #50fa7b;
    }

    #${b} .es-file {
      color: #8be9fd;
      word-break: break-all;
    }

    #${b} .es-line {
      color: #ffb86c;
    }

    #${b} .es-separator {
      color: #555;
      margin: 2px 0;
    }

    #${Fe} {
      position: fixed;
      z-index: 2147483646;
      pointer-events: none;
      border: 2px solid #4caf50;
      background: rgba(76, 175, 80, 0.1);
      border-radius: 2px;
      transition: all 0.05s ease-out;
    }

    #${Oe} {
      position: fixed;
      z-index: 2147483647;
      pointer-events: none;
      background: #1a1a2e;
      color: #e0e0e0;
      font-family: ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace;
      font-size: 11px;
      padding: 3px 8px;
      border-radius: 4px;
      border: 1px solid #333;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
      white-space: nowrap;
    }
  `,e},$=e=>e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"),fr=e=>{let t=[];if(t.push(`<span class="es-tag">&lt;${$(e.tagName)}&gt;</span>`),e.componentName&&t.push(`<span class="es-component">${$(e.componentName)}</span>`),e.source){let n=e.source.lineNumber?`<span class="es-file">${$(e.source.filePath)}</span>:<span class="es-line">${e.source.lineNumber}</span>`:`<span class="es-file">${$(e.source.filePath)}</span>`;t.push(n)}return t.join("<br>")},pr=e=>{let t=`<${e.tagName}>`;return e.componentName?`${e.componentName} ${t}`:t},we=()=>{if(typeof document>"u"||document.getElementById(b))return;let e=ur(),t=document.createElement("div");t.id=Fe,t.style.display="none",document.body.appendChild(t);let n=document.createElement("div");n.id=Oe,n.style.display="none",document.body.appendChild(n);let r=document.createElement("div");r.id=b,r.style.left=`${e.x}px`,r.style.top=`${e.y}px`,r.innerHTML=`
    <div class="es-panel">
      <div class="es-header">
        <span class="es-title">element-source</span>
        <div class="es-controls">
          <button class="es-log-btn ${e.logToConsole?"es-on":""}" title="Log to console">log</button>
          <button class="es-toggle ${e.enabled?"es-on":""}" title="Toggle inspection"></button>
        </div>
      </div>
      <div class="es-body"></div>
    </div>
  `,document.body.appendChild(r),document.head.appendChild(mr());let s=r.querySelector(".es-header"),o=r.querySelector(".es-toggle"),a=r.querySelector(".es-log-btn"),i=r.querySelector(".es-body"),c=!1,m=0,l=0,u=f=>{f.target===o||f.target===a||(c=!0,m=f.clientX-r.offsetLeft,l=f.clientY-r.offsetTop,f.preventDefault())},p=f=>{if(!c)return;let d=Math.max(0,Math.min(window.innerWidth-100,f.clientX-m)),N=Math.max(0,Math.min(window.innerHeight-40,f.clientY-l));r.style.left=`${d}px`,r.style.top=`${N}px`,e.x=d,e.y=N,Ce(e)},g=()=>{c=!1};s.addEventListener("mousedown",u),document.addEventListener("mousemove",p),document.addEventListener("mouseup",g),o.addEventListener("click",()=>{e.enabled=!e.enabled,o.classList.toggle("es-on",e.enabled),Ce(e),e.enabled||(t.style.display="none",n.style.display="none",i.innerHTML="")}),a.addEventListener("click",()=>{e.logToConsole=!e.logToConsole,a.classList.toggle("es-on",e.logToConsole),Ce(e)});let S=null,F=null,ke=f=>f.id===b||f.id===Fe||f.id===Oe||f.closest(`#${b}`)!==null,Rt=f=>{let d=f.getBoundingClientRect();t.style.display="block",t.style.left=`${d.left}px`,t.style.top=`${d.top}px`,t.style.width=`${d.width}px`,t.style.height=`${d.height}px`},xe=(f,d,N,_)=>{n.textContent=d,n.style.display="block";let h=n.getBoundingClientRect(),T=N+12,q=_-h.height-8;T+h.width>window.innerWidth&&(T=N-h.width-12),q<0&&(q=_+20),n.style.left=`${T}px`,n.style.top=`${q}px`};document.addEventListener("mousemove",f=>{if(!e.enabled||c)return;let d=document.elementFromPoint(f.clientX,f.clientY);if(!d||ke(d)){t.style.display="none",n.style.display="none";return}if(Rt(d),d===F){n.style.display!=="none"&&xe(d,n.textContent??"",f.clientX,f.clientY);return}F=d,S!==null&&cancelAnimationFrame(S);let N=f.clientX,_=f.clientY;S=requestAnimationFrame(()=>{S=null,Re(d).then(h=>{if(F===d&&(i.innerHTML=fr(h),xe(d,pr(h),N,_),e.logToConsole)){let T=[`<${h.tagName}>`];h.componentName&&T.push(`Component: ${h.componentName}`),h.source&&T.push(`Source: ${h.source.filePath}:${h.source.lineNumber??"?"}`),h.stack.length>1&&T.push(`Stack:${h.stack.map(vt).join("")}`),console.log(`%c[element-source]%c ${T.join(" | ")}`,"color: #4caf50; font-weight: bold","color: inherit"),typeof console.groupCollapsed=="function"&&(console.groupCollapsed("[element-source] Element details"),console.log("Element:",d),console.log("Info:",h),console.groupEnd())}})})},{passive:!0}),document.addEventListener("click",f=>{if(!e.enabled)return;let d=document.elementFromPoint(f.clientX,f.clientY);!d||ke(d)||(f.preventDefault(),f.stopPropagation(),Re(d).then(N=>{if(!N.source)return;let _=N.source.lineNumber?`${N.source.filePath}:${N.source.lineNumber}`:N.source.filePath;navigator.clipboard.writeText(_).then(()=>{let h=i.innerHTML;i.innerHTML=`<span style="color: #4caf50">Copied: ${$(_)}</span>`,setTimeout(()=>{i.innerHTML=h},1500)})}))},!0)};typeof document<"u"&&(document.readyState==="loading"?document.addEventListener("DOMContentLoaded",we):we());return kt(dr);})();
/*! Bundled license information:

bippy/dist/rdt-hook.js:
bippy/dist/install-hook-only.js:
bippy/dist/core.js:
bippy/dist/index.js:
bippy/dist/source.js:
  (**
   * @license bippy
   *
   * Copyright (c) Aiden Bai
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
//# sourceMappingURL=overlay.global.js.map