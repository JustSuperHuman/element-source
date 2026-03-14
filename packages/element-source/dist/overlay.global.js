"use strict";var ElementSourceOverlay=(()=>{var te=Object.defineProperty;var It=Object.getOwnPropertyDescriptor;var Mt=Object.getOwnPropertyNames;var At=Object.prototype.hasOwnProperty;var Pt=(e,t)=>{for(var n in t)te(e,n,{get:t[n],enumerable:!0})},Ht=(e,t,n,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let o of Mt(t))!At.call(e,o)&&o!==n&&te(e,o,{get:()=>t[o],enumerable:!(r=It(t,o))||r.enumerable});return e};var $t=e=>Ht(te({},"__esModule",{value:!0}),e);var Tr={};Pt(Tr,{init:()=>Ie});var ne="0.5.32",W=`bippy-${ne}`,Pe=Object.defineProperty,Dt=Object.prototype.hasOwnProperty,x=()=>{},$e=e=>{try{Function.prototype.toString.call(e).indexOf("^_^")>-1&&setTimeout(()=>{throw Error("React is running in production mode, but dead code elimination has not been applied. Read how to correctly configure React for production: https://reactjs.org/link/perf-use-production-build")})}catch{}},V=(e=globalThis.__REACT_DEVTOOLS_GLOBAL_HOOK__)=>!!(e&&"getFiberRoots"in e),De=!1,He,L=(e=globalThis.__REACT_DEVTOOLS_GLOBAL_HOOK__)=>De?!0:(e&&typeof e.inject=="function"&&(He=e.inject.toString()),!!He?.includes("(injected)")),z=new Set,R=new Set,re=e=>{let t=new Map,n=0,r={_instrumentationIsActive:!1,_instrumentationSource:W,checkDCE:$e,hasUnsupportedRendererAttached:!1,inject(o){let s=++n;return t.set(s,o),R.add(o),r._instrumentationIsActive||(r._instrumentationIsActive=!0,z.forEach(a=>a())),s},on:x,onCommitFiberRoot:x,onCommitFiberUnmount:x,onPostCommitFiberRoot:x,renderers:t,supportsFiber:!0,supportsFlight:!0};try{Pe(globalThis,"__REACT_DEVTOOLS_GLOBAL_HOOK__",{configurable:!0,enumerable:!0,get(){return r},set(a){if(a&&typeof a=="object"){let i=r.renderers;r=a,i.size>0&&(i.forEach((c,u)=>{R.add(c),a.renderers.set(u,c)}),I(e))}}});let o=window.hasOwnProperty,s=!1;Pe(window,"hasOwnProperty",{configurable:!0,value:function(...a){try{if(!s&&a[0]==="__REACT_DEVTOOLS_GLOBAL_HOOK__")return globalThis.__REACT_DEVTOOLS_GLOBAL_HOOK__=void 0,s=!0,-0}catch{}return o.apply(this,a)},writable:!0})}catch{I(e)}return r},I=e=>{e&&z.add(e);try{let t=globalThis.__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!t)return;if(!t._instrumentationSource){t.checkDCE=$e,t.supportsFiber=!0,t.supportsFlight=!0,t.hasUnsupportedRendererAttached=!1,t._instrumentationSource=W,t._instrumentationIsActive=!1;let n=V(t);if(n||(t.on=x),t.renderers.size){t._instrumentationIsActive=!0,z.forEach(s=>s());return}let r=t.inject,o=L(t);o&&!n&&(De=!0,t.inject({scheduleRefresh(){}})&&(t._instrumentationIsActive=!0)),t.inject=s=>{let a=r(s);return R.add(s),o&&t.renderers.set(a,s),t._instrumentationIsActive=!0,z.forEach(i=>i()),a}}(t.renderers.size||t._instrumentationIsActive||L())&&e?.()}catch{}},oe=()=>Dt.call(globalThis,"__REACT_DEVTOOLS_GLOBAL_HOOK__"),M=e=>oe()?(I(e),globalThis.__REACT_DEVTOOLS_GLOBAL_HOOK__):re(e),se=()=>!!(typeof window<"u"&&(window.document?.createElement||window.navigator?.product==="ReactNative")),Y=()=>{try{se()&&M()}catch{}};Y();var ae=0,ie=1;var le=5;var ce=11,ue=13;var me=15,fe=16;var de=19;var pe=26,ge=27,be=28,he=30;var Se=e=>{switch(e.tag){case 1:case 11:case 0:case 14:case 15:return!0;default:return!1}};function A(e,t,n=!1){if(!e)return null;let r=t(e);if(r instanceof Promise)return(async()=>{if(await r===!0)return e;let s=n?e.return:e.child;for(;s;){let a=await Ne(s,t,n);if(a)return a;s=n?null:s.sibling}return null})();if(r===!0)return e;let o=n?e.return:e.child;for(;o;){let s=ye(o,t,n);if(s)return s;o=n?null:o.sibling}return null}var ye=(e,t,n=!1)=>{if(!e)return null;if(t(e)===!0)return e;let r=n?e.return:e.child;for(;r;){let o=ye(r,t,n);if(o)return o;r=n?null:r.sibling}return null},Ne=async(e,t,n=!1)=>{if(!e)return null;if(await t(e)===!0)return e;let r=n?e.return:e.child;for(;r;){let o=await Ne(r,t,n);if(o)return o;r=n?null:r.sibling}return null};var ve=e=>{let t=e;return typeof t=="function"?t:typeof t=="object"&&t?ve(t.type||t.render):null},w=e=>{let t=e;if(typeof t=="string")return t;if(typeof t!="function"&&!(typeof t=="object"&&t))return null;let n=t.displayName||t.name||null;if(n)return n;let r=ve(t);return r&&(r.displayName||r.name)||null};var P=()=>{let e=globalThis.__REACT_DEVTOOLS_GLOBAL_HOOK__;return!!e?._instrumentationIsActive||V(e)||L(e)};var k=e=>{let t=globalThis.__REACT_DEVTOOLS_GLOBAL_HOOK__;if(t?.renderers)for(let n of t.renderers.values())try{let r=n.findFiberByHostInstance?.(e);if(r)return r}catch{}if(typeof e=="object"&&e){if("_reactRootContainer"in e)return e._reactRootContainer?._internalRoot?.current?.child;for(let n in e)if(n.startsWith("__reactContainer$")||n.startsWith("__reactInternalInstance$")||n.startsWith("__reactFiber"))return e[n]||null}return null},jt=Error();var je=/^[a-zA-Z][a-zA-Z\d+\-.]*:/,Ut=["rsc://","file:///","webpack://","webpack-internal://","node:","turbopack://","metro://","/app-pages-browser/","/(app-pages-browser)/"],Bt=["<anonymous>","eval",""],qe=/\.(jsx|tsx|ts|js)$/,zt=/(\.min|bundle|chunk|vendor|vendors|runtime|polyfill|polyfills)\.(js|mjs|cjs)$|(chunk|bundle|vendor|vendors|runtime|polyfill|polyfills|framework|app|main|index)[-_.][A-Za-z0-9_-]{4,}\.(js|mjs|cjs)$|[\da-f]{8,}\.(js|mjs|cjs)$|[-_.][\da-f]{20,}\.(js|mjs|cjs)$|\/dist\/|\/build\/|\/.next\/|\/out\/|\/node_modules\/|\.webpack\.|\.vite\.|\.turbopack\./i,Wt=/^\?[\w~.-]+(?:=[^&#]*)?(?:&[\w~.-]+(?:=[^&#]*)?)*$/,Ke="(at Server)",Vt=/(^|@)\S+:\d+/,Je=/^\s*at .*(\S+:\d+|\(native\))/m,Yt=/^(eval@)?(\[native code\])?$/;var X=(e,t)=>{if(t?.includeInElement!==!1){let n=e.split(`
`),r=[];for(let o of n)if(/^\s*at\s+/.test(o)){let s=Ue(o,void 0)[0];s&&r.push(s)}else if(/^\s*in\s+/.test(o)){let s=o.replace(/^\s*in\s+/,"").replace(/\s*\(at .*\)$/,"");r.push({functionName:s,source:o})}else if(o.match(Vt)){let s=Be(o,void 0)[0];s&&r.push(s)}return Re(r,t)}return e.match(Je)?Ue(e,t):Be(e,t)},Ze=e=>{if(!e.includes(":"))return[e,void 0,void 0];let t=e.startsWith("(")&&/:\d+\)$/.test(e)?e.slice(1,-1):e,n=/(.+?)(?::(\d+))?(?::(\d+))?$/.exec(t);return n?[n[1],n[2]||void 0,n[3]||void 0]:[t,void 0,void 0]},Re=(e,t)=>t&&t.slice!=null?Array.isArray(t.slice)?e.slice(t.slice[0],t.slice[1]):e.slice(0,t.slice):e;var Ue=(e,t)=>Re(e.split(`
`).filter(n=>!!n.match(Je)),t).map(n=>{let r=n;r.includes("(eval ")&&(r=r.replace(/eval code/g,"eval").replace(/(\(eval at [^()]*)|(,.*$)/g,""));let o=r.replace(/^\s+/,"").replace(/\(eval code/g,"(").replace(/^.*?\s+/,""),s=o.match(/ (\(.+\)$)/);o=s?o.replace(s[0],""):o;let a=Ze(s?s[1]:o);return{functionName:s&&o||void 0,fileName:["eval","<anonymous>"].includes(a[0])?void 0:a[0],lineNumber:a[1]?+a[1]:void 0,columnNumber:a[2]?+a[2]:void 0,source:r}});var Be=(e,t)=>Re(e.split(`
`).filter(n=>!n.match(Yt)),t).map(n=>{let r=n;if(r.includes(" > eval")&&(r=r.replace(/ line (\d+)(?: > eval line \d+)* > eval:\d+:\d+/g,":$1")),!r.includes("@")&&!r.includes(":"))return{functionName:r};{let o=/(([^\n\r"\u2028\u2029]*".[^\n\r"\u2028\u2029]*"[^\n\r@\u2028\u2029]*(?:@[^\n\r"\u2028\u2029]*"[^\n\r@\u2028\u2029]*)*(?:[\n\r\u2028\u2029][^@]*)?)?[^@]*)@/,s=r.match(o),a=s&&s[1]?s[1]:void 0,i=Ze(r.replace(o,""));return{functionName:a,fileName:i[0],lineNumber:i[1]?+i[1]:void 0,columnNumber:i[2]?+i[2]:void 0,source:r}}});var Gt=44,ze="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",Xt=new Uint8Array(64),Qe=new Uint8Array(128);for(let e=0;e<ze.length;e++){let t=ze.charCodeAt(e);Xt[e]=t,Qe[t]=e}function H(e,t){let n=0,r=0,o=0;do o=Qe[e.next()],n|=(o&31)<<r,r+=5;while(o&32);let s=n&1;return n>>>=1,s&&(n=-2147483648|-n),t+n}function We(e,t){return e.pos>=t?!1:e.peek()!==Gt}var qt=class{constructor(e){this.pos=0,this.buffer=e}next(){return this.buffer.charCodeAt(this.pos++)}peek(){return this.buffer.charCodeAt(this.pos)}indexOf(e){let{buffer:t,pos:n}=this,r=t.indexOf(e,n);return r===-1?t.length:r}};function et(e){let{length:t}=e,n=new qt(e),r=[],o=0,s=0,a=0,i=0,c=0;do{let u=n.indexOf(";"),l=[],m=!0,g=0;for(o=0;n.pos<u;){let d;o=H(n,o),o<g&&(m=!1),g=o,We(n,u)?(s=H(n,s),a=H(n,a),i=H(n,i),We(n,u)?(c=H(n,c),d=[o,s,a,i,c]):d=[o,s,a,i]):d=[o],l.push(d),n.pos++}m||Kt(l),r.push(l),n.pos=u+1}while(n.pos<=t);return r}function Kt(e){e.sort(Jt)}function Jt(e,t){return e[0]-t[0]}var tt=/^[a-zA-Z][a-zA-Z\d+\-.]*:/,Zt=/^data:application\/json[^,]+base64,/,Qt=/(?:\/\/[@#][ \t]+sourceMappingURL=([^\s'"]+?)[ \t]*$)|(?:\/\*[@#][ \t]+sourceMappingURL=([^*]+?)[ \t]*(?:\*\/)[ \t]*$)/,nt=typeof WeakRef<"u",$=new Map,G=new Map,en=e=>nt&&e instanceof WeakRef,Ve=(e,t,n,r)=>{if(n<0||n>=e.length)return null;let o=e[n];if(!o||o.length===0)return null;let s=null;for(let l of o)if(l[0]<=r)s=l;else break;if(!s||s.length<4)return null;let[,a,i,c]=s;if(a===void 0||i===void 0||c===void 0)return null;let u=t[a];return u?{columnNumber:c,fileName:u,lineNumber:i+1}:null},tn=(e,t,n)=>{if(e.sections){let r=null;for(let a of e.sections)if(t>a.offset.line||t===a.offset.line&&n>=a.offset.column)r=a;else break;if(!r)return null;let o=t-r.offset.line,s=t===r.offset.line?n-r.offset.column:n;return Ve(r.map.mappings,r.map.sources,o,s)}return Ve(e.mappings,e.sources,t-1,n)},nn=(e,t)=>{let n=t.split(`
`),r;for(let s=n.length-1;s>=0&&!r;s--){let a=n[s].match(Qt);a&&(r=a[1]||a[2])}if(!r)return null;let o=tt.test(r);if(!(Zt.test(r)||o||r.startsWith("/"))){let s=e.split("/");s[s.length-1]=r,r=s.join("/")}return r},rn=e=>({file:e.file,mappings:et(e.mappings),names:e.names,sourceRoot:e.sourceRoot,sources:e.sources,sourcesContent:e.sourcesContent,version:3}),on=e=>{let t=e.sections.map(({map:r,offset:o})=>({map:{...r,mappings:et(r.mappings)},offset:o})),n=new Set;for(let r of t)for(let o of r.map.sources)n.add(o);return{file:e.file,mappings:[],names:[],sections:t,sourceRoot:void 0,sources:Array.from(n),sourcesContent:void 0,version:3}},Ye=e=>{if(!e)return!1;let t=e.trim();if(!t)return!1;let n=t.match(tt);if(!n)return!0;let r=n[0].toLowerCase();return r==="http:"||r==="https:"},sn=async(e,t=fetch)=>{if(!Ye(e))return null;let n;try{let o=await t(e);if(!o.ok)return null;n=await o.text()}catch{return null}if(!n)return null;let r=nn(e,n);if(!r||!Ye(r))return null;try{let o=await t(r);if(!o.ok)return null;let s=await o.json();return"sections"in s?on(s):rn(s)}catch{return null}},an=async(e,t=!0,n)=>{if(t&&$.has(e)){let s=$.get(e);if(s==null)return null;if(en(s)){let a=s.deref();if(a)return a;$.delete(e)}else return s}if(t&&G.has(e))return G.get(e);let r=sn(e,n);t&&G.set(e,r);let o=await r;return t&&G.delete(e),t&&(o===null?$.set(e,null):$.set(e,nt?new WeakRef(o):o)),o},ln=async(e,t=!0,n)=>await Promise.all(e.map(async r=>{if(!r.fileName)return r;let o=await an(r.fileName,t,n);if(!o||typeof r.lineNumber!="number"||typeof r.columnNumber!="number")return r;let s=tn(o,r.lineNumber,r.columnNumber);return s?{...r,source:s.fileName&&r.source?r.source.replace(r.fileName,s.fileName):r.source,fileName:s.fileName,lineNumber:s.lineNumber,columnNumber:s.columnNumber,isSymbolicated:!0}:r})),_e=e=>e._debugStack instanceof Error&&typeof e._debugStack?.stack=="string",cn=()=>{let e=M();for(let t of[...Array.from(R),...Array.from(e.renderers.values())]){let n=t.currentDispatcherRef;if(n&&typeof n=="object")return"H"in n?n.H:n.current}return null},Ge=e=>{for(let t of R){let n=t.currentDispatcherRef;n&&typeof n=="object"&&("H"in n?n.H=e:n.current=e)}},N=e=>`
    in ${e}`,un=(e,t)=>{let n=N(e);return t&&(n+=` (at ${t})`),n},Ee=!1,Te=(e,t)=>{if(!e||Ee)return"";let n=Error.prepareStackTrace;Error.prepareStackTrace=void 0,Ee=!0;let r=cn();Ge(null);let o=console.error,s=console.warn;console.error=()=>{},console.warn=()=>{};try{let i={DetermineComponentFrameRoot(){let l;try{if(t){let m=function(){throw Error()};if(Object.defineProperty(m.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(m,[])}catch(g){l=g}Reflect.construct(e,[],m)}else{try{m.call()}catch(g){l=g}e.call(m.prototype)}}else{try{throw Error()}catch(g){l=g}let m=e();m&&typeof m.catch=="function"&&m.catch(()=>{})}}catch(m){if(m instanceof Error&&l instanceof Error&&typeof m.stack=="string")return[m.stack,l.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot",Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name")?.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});let[c,u]=i.DetermineComponentFrameRoot();if(c&&u){let l=c.split(`
`),m=u.split(`
`),g=0,d=0;for(;g<l.length&&!l[g].includes("DetermineComponentFrameRoot");)g++;for(;d<m.length&&!m[d].includes("DetermineComponentFrameRoot");)d++;if(g===l.length||d===m.length)for(g=l.length-1,d=m.length-1;g>=1&&d>=0&&l[g]!==m[d];)d--;for(;g>=1&&d>=0;g--,d--)if(l[g]!==m[d]){if(g!==1||d!==1)do if(g--,d--,d<0||l[g]!==m[d]){let C=`
${l[g].replace(" at new "," at ")}`,O=w(e);return O&&C.includes("<anonymous>")&&(C=C.replace("<anonymous>",O)),C}while(g>=1&&d>=0);break}}}finally{Ee=!1,Error.prepareStackTrace=n,Ge(r),console.error=o,console.warn=s}let a=e?w(e):"";return a?N(a):""},mn=(e,t)=>{let n=e.tag,r="";switch(n){case be:r=N("Activity");break;case ie:r=Te(e.type,!0);break;case ce:r=Te(e.type.render,!1);break;case ae:case me:r=Te(e.type,!1);break;case le:case pe:case ge:r=N(e.type);break;case fe:r=N("Lazy");break;case ue:r=e.child!==t&&t!==null?N("Suspense Fallback"):N("Suspense");break;case de:r=N("SuspenseList");break;case he:r=N("ViewTransition");break;default:return""}return r},fn=e=>{try{let t="",n=e,r=null;do{t+=mn(n,r);let o=n._debugInfo;if(o&&Array.isArray(o))for(let s=o.length-1;s>=0;s--){let a=o[s];typeof a.name=="string"&&(t+=un(a.name,a.env))}r=n,n=n.return}while(n);return t}catch(t){return t instanceof Error?`
Error generating stack: ${t.message}
${t.stack}`:""}},Ce=e=>{let t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;let n=e;if(!n)return"";Error.prepareStackTrace=t,n.startsWith(`Error: react-stack-top-frame
`)&&(n=n.slice(29));let r=n.indexOf(`
`);if(r!==-1&&(n=n.slice(r+1)),r=Math.max(n.indexOf("react_stack_bottom_frame"),n.indexOf("react-stack-bottom-frame")),r!==-1&&(r=n.lastIndexOf(`
`,r)),r!==-1)n=n.slice(0,r);else return"";return n},dn=e=>!!(e.fileName?.startsWith("rsc://")&&e.functionName),pn=(e,t)=>e.fileName===t.fileName&&e.lineNumber===t.lineNumber&&e.columnNumber===t.columnNumber,gn=e=>{let t=new Map;for(let n of e)for(let r of n.stackFrames){if(!dn(r))continue;let o=r.functionName,s=t.get(o)??[];s.some(a=>pn(a,r))||(s.push(r),t.set(o,s))}return t},bn=(e,t,n)=>{if(!e.functionName)return{...e,isServer:!0};let r=t.get(e.functionName);if(!r||r.length===0)return{...e,isServer:!0};let o=n.get(e.functionName)??0,s=r[o%r.length];return n.set(e.functionName,o+1),{...e,isServer:!0,fileName:s.fileName,lineNumber:s.lineNumber,columnNumber:s.columnNumber,source:e.source?.replace(Ke,`(${s.fileName}:${s.lineNumber}:${s.columnNumber})`)}},hn=e=>{let t=[];return A(e,n=>{if(!_e(n))return;let r=typeof n.type=="string"?n.type:w(n.type)||"<anonymous>";t.push({componentName:r,stackFrames:X(Ce(n._debugStack?.stack))})},!0),t},rt=async(e,t=!0,n)=>{let r=hn(e),o=X(fn(e)),s=gn(r),a=new Map;return ln(o.map(i=>i.source?.includes(Ke)??!1?bn(i,s,a):i).filter((i,c,u)=>{if(c===0)return!0;let l=u[c-1];return i.functionName!==l.functionName}),t,n)};var Xe=e=>e.split("/").filter(Boolean).length,Sn=e=>e.split("/").filter(Boolean)[0]??null,yn=e=>{let t=e.indexOf("/",1);if(t===-1||Xe(e.slice(0,t))!==1)return e;let n=e.slice(t);if(!qe.test(n)||Xe(n)<2)return e;let r=Sn(n);return!r||r.startsWith("@")||r.length>4?e:n},Fe=e=>{if(!e||Bt.some(s=>s===e))return"";let t=e,n=t.startsWith("http://")||t.startsWith("https://");if(n)try{t=new URL(t).pathname}catch{}if(n&&(t=yn(t)),t.startsWith("about://React/")){let s=t.slice(14),a=s.indexOf("/"),i=s.indexOf(":");t=a!==-1&&(i===-1||a<i)?s.slice(a+1):s}let r=!0;for(;r;){r=!1;for(let s of Ut)if(t.startsWith(s)){t=t.slice(s.length),s==="file:///"&&(t=`/${t.replace(/^\/+/,"")}`),r=!0;break}}if(je.test(t)){let s=t.match(je);s&&(t=t.slice(s[0].length))}if(t.startsWith("//")){let s=t.indexOf("/",2);t=s===-1?"":t.slice(s)}let o=t.indexOf("?");if(o!==-1){let s=t.slice(o);Wt.test(s)&&(t=t.slice(0,o))}return t},ot=e=>{let t=Fe(e);return!(!t||!qe.test(t)||zt.test(t))};var D=e=>typeof Element<"u"&&e instanceof Element;var En=["_","$","motion.","styled.","chakra.","ark.","Primitive.","Slot."],Tn=new Set(["InnerLayoutRouter","RedirectErrorBoundary","RedirectBoundary","HTTPAccessFallbackErrorBoundary","HTTPAccessFallbackBoundary","LoadingBoundary","ErrorBoundary","InnerScrollAndFocusHandler","ScrollAndFocusHandler","RenderFromTemplateContext","OuterLayoutRouter","body","html","DevRootHTTPAccessFallbackBoundary","AppDevOverlayErrorBoundary","AppDevOverlay","HotReload","Router","ErrorBoundaryHandler","AppRouter","ServerRoot","SegmentStateProvider","RootErrorBoundary","LoadableComponent","MotionDOMComponent"]),Rn=new Set(["Suspense","Fragment","StrictMode","Profiler","SuspenseList"]),we,_n=e=>(e&&(we=void 0),we??=typeof document<"u"&&!!(document.getElementById("__NEXT_DATA__")||document.querySelector("nextjs-portal")),we),at=e=>Tn.has(e)||Rn.has(e)?!0:En.some(t=>e.startsWith(t)),it=e=>!(e.length<=1||at(e)||e[0]!==e[0].toUpperCase()||e.includes("Provider")||e.includes("Context")),Cn=e=>!(!e||at(e)||e==="SlotClone"||e==="Slot"),lt=["about://React/","rsc://React/"],Fn=e=>lt.some(t=>e.startsWith(t)),wn=e=>{for(let t of lt){if(!e.startsWith(t))continue;let n=e.indexOf("/",t.length),r=e.lastIndexOf("?");if(n>-1&&r>-1)return decodeURI(e.slice(n+1,r))}return e},kn=async e=>{let t=[],n=[];for(let s=0;s<e.length;s++){let a=e[s];!a.isServer||!a.fileName||(t.push(s),n.push({file:wn(a.fileName),methodName:a.functionName??"<unknown>",line1:a.lineNumber??null,column1:a.columnNumber??null,arguments:[]}))}if(n.length===0)return e;let r=new AbortController,o=setTimeout(()=>r.abort(),5e3);try{let s=await fetch("/__nextjs_original-stack-frames",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({frames:n,isServer:!0,isEdgeServer:!1,isAppDirectory:!0}),signal:r.signal});if(!s.ok)return e;let a=await s.json(),i=[...e];for(let c=0;c<t.length;c++){let u=a[c];if(u?.status!=="fulfilled")continue;let l=u.value?.originalStackFrame;if(!l?.file||l.ignored)continue;let m=t[c];i[m]={...e[m],fileName:l.file,lineNumber:l.line1??void 0,columnNumber:l.column1??void 0,isSymbolicated:!0}}return i}catch{return e}finally{clearTimeout(o)}},On=e=>{let t=new Map;return A(e,n=>{if(!_e(n))return!1;let r=Ce(n._debugStack.stack);if(!r)return!1;for(let o of X(r))!o.functionName||!o.fileName||Fn(o.fileName)&&(t.has(o.functionName)||t.set(o.functionName,{...o,isServer:!0}));return!1},!0),t},xn=(e,t)=>{if(!t.some(o=>o.isServer&&!o.fileName&&o.functionName))return t;let r=On(e);return r.size===0?t:t.map(o=>{if(!o.isServer||o.fileName||!o.functionName)return o;let s=r.get(o.functionName);return s?{...o,fileName:s.fileName,lineNumber:s.lineNumber,columnNumber:s.columnNumber}:o})},ct=e=>{if(!P()||k(e))return e;if(D(e)){let t=e.parentElement;for(;t;){if(k(t))return t;t=t.parentElement}}return e},st=new WeakMap,Ln=async e=>{try{let t=k(e);if(!t)return null;let n=await rt(t);if(_n()){let r=xn(t,n);return kn(r)}return n}catch{return null}},ut=e=>{if(!P())return Promise.resolve([]);let t=ct(e),n=st.get(t);if(n)return n;let r=Ln(t);return st.set(t,r),r},In=e=>{if(!e||e.length===0)return null;for(let t of e)if(t.fileName&&ot(t.fileName))return{filePath:Fe(t.fileName),lineNumber:t.lineNumber??null,columnNumber:null,componentName:t.functionName&&it(t.functionName)?t.functionName:null};return null},Mn=async e=>{let t=await ut(e),n=In(t);return n?[n]:[]},An=async e=>{if(!P())return null;let t=await ut(e);if(t){for(let s of t)if(s.functionName&&it(s.functionName))return s.functionName}let n=ct(e),r=k(n);if(!r)return null;let o=r.return;for(;o;){if(Se(o)){let s=w(o.type);if(s&&Cn(s))return s}o=o.return}return null},q={name:"react",resolveStack:Mn,resolveComponentName:An};var v=e=>typeof e=="object"&&e!==null&&!Array.isArray(e);var E=e=>typeof e=="string"?e:null;var j=e=>typeof e=="number"&&Number.isFinite(e)?e:null;var Pn="__svelte_meta",Hn=e=>{let t=e;for(;t;){let n=Reflect.get(t,Pn);if(v(n))return n;t=t.parentElement}return null},$n=e=>{let t=e.loc;if(!v(t))return null;let n=E(t.file),r=j(t.line),o=j(t.column);return!n||r===null||o===null?null:{filePath:n,lineNumber:r,columnNumber:o+1}},Dn=e=>{let t=e.parent;for(;v(t);){let n=E(t.componentTag);if(n)return n;t=t.parent}return null},jn=e=>{let t=[],n=e.parent;for(;v(n);){let r=E(n.file),o=j(n.line),s=j(n.column),a=E(n.componentTag);r&&o!==null&&s!==null&&t.push({filePath:r,lineNumber:o,columnNumber:s+1,componentName:a}),n=n.parent}return t},Un=e=>{let t=Hn(e);if(!t)return[];let n=$n(t);if(!n)return[];let r=[{filePath:n.filePath,lineNumber:n.lineNumber,columnNumber:n.columnNumber,componentName:Dn(t)}],o=new Set([`${n.filePath}:${n.lineNumber}:${n.columnNumber}`]);for(let s of jn(t)){let a=`${s.filePath}:${s.lineNumber??""}:${s.columnNumber??""}`;o.has(a)||(o.add(a),r.push(s))}return r},ft={name:"svelte",resolveStack:Un};var dt=e=>{let t=Number.parseInt(e,10);return Number.isNaN(t)||t<1?null:t},K=e=>{let t=e.lastIndexOf(":");if(t===-1)return null;let n=e.lastIndexOf(":",t-1);if(n===-1)return null;let r=e.slice(0,n);if(!r)return null;let o=e.slice(n+1,t),s=e.slice(t+1),a=dt(o),i=dt(s);return a===null||i===null?null:{filePath:r,lineNumber:a,columnNumber:i}};var pt="data-v-inspector",Bn=`[${pt}]`,zn="__vueParentComponent",gt=e=>{if(!e)return null;let t=e.type;return v(t)?t:null},Wn=e=>{let t=Reflect.get(e,zn);return v(t)?t:null},bt=e=>{let t=e;for(;t;){let n=Wn(t);if(n)return n;t=t.parentElement}return null},ht=e=>e?E(e.__name)??E(e.name):null,Vn=e=>e?E(e.__file):null,Yn=e=>{if(!e)return null;let t=Reflect.get(e,"parent");return v(t)?t:null},Gn=e=>{let t=[],n=bt(e);for(;n;)t.push(n),n=Yn(n);return t},Xn=e=>Gn(e).map(t=>{let n=gt(t),r=Vn(n);return r?{filePath:r,lineNumber:null,columnNumber:null,componentName:ht(n)}:null}).filter(t=>!!t),qn=e=>{let t=e.closest(Bn);if(!t)return null;let n=t.getAttribute(pt);if(!n)return null;let r=K(n);if(!r)return null;let o=bt(e),s=gt(o);return{filePath:r.filePath,lineNumber:r.lineNumber,columnNumber:r.columnNumber,componentName:ht(s)}},Kn=e=>{let t=[],n=new Set,r=qn(e);if(r){let o=`${r.filePath}|${r.componentName??""}`;t.push(r),n.add(o)}for(let o of Xn(e)){let s=`${o.filePath}|${o.componentName??""}`;n.has(s)||(n.add(s),t.push(o))}return t},St={name:"vue",resolveStack:Kn};var Qn="$$",er=/location:\s*["']([^"']+:\d+:\d+)["']/g,Et="/src/",tr=".css",nr="?import",rr="__SOLID_RUNTIME_MODULES__",Nt=new Map,vt=new Map,or=e=>{if(e.includes(nr))return!1;let t=new URL(e,window.location.href).pathname;return t.endsWith(tr)?!1:t.includes(Et)},sr=()=>{if(typeof window>"u")return[];let e=performance.getEntriesByType("resource"),t=new Set;for(let n of e)!n.name||!or(n.name)||t.add(n.name);return Array.from(t)},ar=e=>{let t=Nt.get(e);if(t)return t;let n=fetch(e).then(r=>r.ok?r.text():null).catch(()=>null);return Nt.set(e,n),n},ir=()=>{if(typeof window>"u")return[];let e=Reflect.get(window,rr);return Array.isArray(e)?e:[]},lr=async e=>{for(let t of ir()){let n=t.content.indexOf(e);if(n!==-1)return{moduleUrl:t.url,moduleContent:t.content,handlerSourceIndex:n}}for(let t of sr()){let n=await ar(t);if(!n)continue;let r=n.indexOf(e);if(r!==-1)return{moduleUrl:t,moduleContent:n,handlerSourceIndex:r}}return null},cr=(e,t)=>{let n=Math.max(0,t-2e3),r=Math.min(e.length,t+2e3),o=e.slice(n,r),s=[];for(let c of o.matchAll(er)){let u=c[1];if(!u)continue;let l=K(u);if(!l||c.index===void 0)continue;let m=n+c.index;s.push({sourceInfo:{filePath:l.filePath,lineNumber:l.lineNumber,columnNumber:l.columnNumber,componentName:null},distance:Math.abs(m-t)})}s.sort((c,u)=>{let l=c.sourceInfo.lineNumber??0,m=u.sourceInfo.lineNumber??0;return m!==l?m-l:c.distance-u.distance});let a=new Set,i=[];for(let c of s){let u=`${c.sourceInfo.filePath}:${c.sourceInfo.lineNumber}:${c.sourceInfo.columnNumber}`;a.has(u)||(a.add(u),i.push(c.sourceInfo))}return i},ur=e=>{try{let t=decodeURIComponent(new URL(e,window.location.href).pathname);return t.includes(Et)?t.startsWith("/")?t.slice(1):t:null}catch{return null}},mr=(e,t)=>{let r=e.slice(0,t).split(`
`),o=r[r.length-1]??"";return{lineNumber:r.length,columnNumber:o.length+1}},fr=e=>{let t=e;for(;t;){for(let n of Object.getOwnPropertyNames(t)){if(!n.startsWith(Qn))continue;let r=Reflect.get(t,n);if(typeof r!="function")continue;let o=String(r).trim();if(!(o.length<3))return{source:o}}t=t.parentElement}return null},dr=e=>{let t=vt.get(e);if(t)return t;let n=(async()=>{let r=await lr(e);if(!r)return[];let o=cr(r.moduleContent,r.handlerSourceIndex);if(o.length>0)return o;let s=ur(r.moduleUrl);if(!s)return[];let a=mr(r.moduleContent,r.handlerSourceIndex);return[{filePath:s,lineNumber:a.lineNumber,columnNumber:a.columnNumber,componentName:null}]})();return vt.set(e,n),n},pr=e=>{let t=fr(e);return t?dr(t.source):Promise.resolve([])},Tt={name:"solid",resolveStack:pr};var Rt=e=>"tagName"in e&&typeof e.tagName=="string"?e.tagName.toLowerCase():"nodeName"in e&&typeof e.nodeName=="string"?e.nodeName.toLowerCase():"";var gr=[ft,St,Tt],_t=async(e,t)=>{for(let n of t){let o=(await n.resolveStack(e)).filter(s=>s.filePath.length>0);if(o.length>0)return o}return[]},br=(e={})=>{let t=e.resolvers??gr,n=async a=>{let i=await q.resolveStack(a);if(D(a)){let c=await _t(a,t);return i.length>0?[...i,...c]:c}return i};return{resolveSource:async a=>(await n(a))[0]??null,resolveStack:n,resolveComponentName:async a=>{let i=await q.resolveComponentName?.(a);return i||(D(a)?(await _t(a,t)).find(l=>l.componentName)?.componentName??null:null)},resolveElementInfo:async a=>{let i=await n(a),c=i[0]??null,u=i.find(l=>l.componentName)?.componentName??await q.resolveComponentName?.(a)??null;return{tagName:Rt(a),componentName:u,source:c,stack:i}}}},J=br(),is=J.resolveSource,ls=J.resolveStack,cs=J.resolveComponentName,ke=J.resolveElementInfo;var hr=e=>{let t=[e.filePath];return e.lineNumber!==null&&t.push(String(e.lineNumber)),e.columnNumber!==null&&t.push(String(e.columnNumber)),t.join(":")},Ct=e=>{let t=hr(e);return e.componentName?`
  in ${e.componentName} (at ${t})`:`
  in ${t}`};var Ft="element-source-overlay",p="element-source-overlay",xe="element-source-highlight",Le="element-source-label",y="element-source-tab",Oe={enabled:!1,x:16,y:16,logToConsole:!1,collapsed:!1,dock:"none"},Z=40,Sr=24,yr=()=>{try{let e=localStorage.getItem(Ft);return e?{...Oe,...JSON.parse(e)}:{...Oe}}catch{return{...Oe}}},_=e=>{try{localStorage.setItem(Ft,JSON.stringify(e))}catch{}},Nr=()=>{let e=document.createElement("style");return e.textContent=`
    #${p} {
      position: fixed;
      z-index: 2147483647;
      font-family: ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace;
      font-size: 12px;
      user-select: none;
      -webkit-user-select: none;
      pointer-events: auto;
      transition: opacity 0.2s, transform 0.2s;
    }

    #${p}.es-collapsed {
      pointer-events: none;
      opacity: 0;
      transform: scale(0.95);
    }

    #${p}.es-dock-left {
      pointer-events: none;
      opacity: 0;
      transform: translateX(-100%);
    }

    #${p}.es-dock-right {
      pointer-events: none;
      opacity: 0;
      transform: translateX(100%);
    }

    #${p} .es-panel {
      background: #1a1a2e;
      color: #e0e0e0;
      border: 1px solid #333;
      border-radius: 8px;
      box-shadow: 0 4px 24px rgba(0, 0, 0, 0.4);
      overflow: hidden;
      min-width: 220px;
    }

    #${p} .es-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 6px 10px;
      background: #16213e;
      cursor: grab;
      gap: 8px;
    }

    #${p} .es-header:active {
      cursor: grabbing;
    }

    #${p} .es-title {
      font-weight: 600;
      font-size: 11px;
      color: #a0c4ff;
      white-space: nowrap;
    }

    #${p} .es-controls {
      display: flex;
      align-items: center;
      gap: 6px;
    }

    #${p} .es-toggle {
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

    #${p} .es-toggle.es-on {
      background: #4caf50;
    }

    #${p} .es-toggle::after {
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

    #${p} .es-toggle.es-on::after {
      transform: translateX(18px);
    }

    #${p} .es-icon-btn {
      background: none;
      border: 1px solid #555;
      color: #999;
      border-radius: 4px;
      padding: 1px 5px;
      cursor: pointer;
      font-size: 10px;
      font-family: inherit;
      transition: all 0.15s;
      line-height: 1.4;
    }

    #${p} .es-icon-btn:hover {
      border-color: #888;
      color: #ccc;
    }

    #${p} .es-icon-btn.es-on {
      border-color: #ff9800;
      color: #ff9800;
    }

    #${p} .es-body {
      padding: 8px 10px;
      max-height: 200px;
      overflow-y: auto;
      line-height: 1.5;
    }

    #${p} .es-body:empty::after {
      content: "Hover over elements...";
      color: #666;
      font-style: italic;
    }

    #${p} .es-tag {
      color: #ff79c6;
    }

    #${p} .es-component {
      color: #50fa7b;
    }

    #${p} .es-file {
      color: #8be9fd;
      word-break: break-all;
    }

    #${p} .es-line {
      color: #ffb86c;
    }

    #${p} .es-separator {
      color: #555;
      margin: 2px 0;
    }

    #${y} {
      position: fixed;
      z-index: 2147483647;
      pointer-events: auto;
      cursor: pointer;
      background: #16213e;
      border: 1px solid #333;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
      display: flex;
      align-items: center;
      justify-content: center;
      width: ${Sr}px;
      height: 80px;
      transition: opacity 0.2s, transform 0.2s, background 0.15s;
      writing-mode: vertical-lr;
      font-family: ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace;
      font-size: 10px;
      font-weight: 600;
      color: #a0c4ff;
      letter-spacing: 1px;
      user-select: none;
      -webkit-user-select: none;
    }

    #${y}:hover {
      background: #1a1a2e;
      color: #c0d8ff;
    }

    #${y}.es-tab-left {
      left: 0;
      border-radius: 0 6px 6px 0;
      border-left: none;
    }

    #${y}.es-tab-right {
      right: 0;
      border-radius: 6px 0 0 6px;
      border-right: none;
    }

    #${y}.es-tab-hidden {
      opacity: 0;
      pointer-events: none;
    }

    #${y}.es-tab-left.es-tab-hidden {
      transform: translateX(-100%);
    }

    #${y}.es-tab-right.es-tab-hidden {
      transform: translateX(100%);
    }

    #${y}.es-active {
      color: #4caf50;
    }

    #${xe} {
      position: fixed;
      z-index: 2147483646;
      pointer-events: none;
      border: 2px solid #4caf50;
      background: rgba(76, 175, 80, 0.1);
      border-radius: 2px;
      transition: all 0.05s ease-out;
    }

    #${Le} {
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
  `,e},U=e=>e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"),vr=e=>{let t=[];if(t.push(`<span class="es-tag">&lt;${U(e.tagName)}&gt;</span>`),e.componentName&&t.push(`<span class="es-component">${U(e.componentName)}</span>`),e.source){let n=e.source.lineNumber?`<span class="es-file">${U(e.source.filePath)}</span>:<span class="es-line">${e.source.lineNumber}</span>`:`<span class="es-file">${U(e.source.filePath)}</span>`;t.push(n)}return t.join("<br>")},Er=e=>{let t=`<${e.tagName}>`;return e.componentName?`${e.componentName} ${t}`:t},Ie=()=>{if(typeof document>"u"||document.getElementById(p))return;let e=yr(),t=document.createElement("div");t.id=xe,t.style.display="none",document.body.appendChild(t);let n=document.createElement("div");n.id=Le,n.style.display="none",document.body.appendChild(n);let r=document.createElement("div");r.id=y,r.textContent="ES",document.body.appendChild(r);let o=document.createElement("div");o.id=p,o.style.left=`${e.x}px`,o.style.top=`${e.y}px`,o.innerHTML=`
    <div class="es-panel">
      <div class="es-header">
        <span class="es-title">element-source</span>
        <div class="es-controls">
          <button class="es-icon-btn ${e.logToConsole?"es-on":""}" data-action="log" title="Log to console">log</button>
          <button class="es-toggle ${e.enabled?"es-on":""}" title="Toggle inspection"></button>
          <button class="es-icon-btn" data-action="collapse" title="Collapse panel">&times;</button>
        </div>
      </div>
      <div class="es-body"></div>
    </div>
  `,document.body.appendChild(o),document.head.appendChild(Nr());let s=o.querySelector(".es-header"),a=o.querySelector(".es-toggle"),i=o.querySelector('[data-action="log"]'),c=o.querySelector('[data-action="collapse"]'),u=o.querySelector(".es-body"),l=()=>{o.classList.remove("es-collapsed","es-dock-left","es-dock-right"),r.classList.remove("es-tab-left","es-tab-right","es-tab-hidden","es-active"),e.enabled&&r.classList.add("es-active"),e.collapsed?e.dock==="left"?(o.classList.add("es-dock-left"),r.classList.add("es-tab-left"),r.style.top=`${e.y}px`):e.dock==="right"?(o.classList.add("es-dock-right"),r.classList.add("es-tab-right"),r.style.top=`${e.y}px`):(o.classList.add("es-collapsed"),r.classList.add("es-tab-right"),r.style.top=`${e.y}px`,e.dock="right",_(e)):(r.classList.add("es-tab-hidden"),e.dock==="left"?r.classList.add("es-tab-left"):r.classList.add("es-tab-right"))},m=()=>{e.collapsed=!0;let f=window.innerWidth/2;e.dock=e.x+110<f?"left":"right",_(e),l()},g=()=>{e.collapsed=!1,_(e),l()};l(),r.addEventListener("click",g),c.addEventListener("click",m);let d=!1,C=0,O=0,wt=f=>f===a||f===i||f===c,kt=f=>{wt(f.target)||(d=!0,C=f.clientX-o.offsetLeft,O=f.clientY-o.offsetTop,f.preventDefault())},Ot=f=>{if(!d)return;let b=Math.max(0,Math.min(window.innerWidth-100,f.clientX-C)),S=Math.max(0,Math.min(window.innerHeight-40,f.clientY-O));o.style.left=`${b}px`,o.style.top=`${S}px`,e.x=b,e.y=S,r.classList.remove("es-tab-hidden","es-tab-left","es-tab-right"),b<=Z?(r.classList.add("es-tab-left"),r.style.top=`${S}px`):b+o.offsetWidth>=window.innerWidth-Z?(r.classList.add("es-tab-right"),r.style.top=`${S}px`):r.classList.add("es-tab-hidden","es-tab-right")},xt=()=>{d&&(d=!1,e.x<=Z?(e.dock="left",e.collapsed=!0,_(e),l()):e.x+o.offsetWidth>=window.innerWidth-Z?(e.dock="right",e.collapsed=!0,_(e),l()):(e.dock="none",_(e),l()))};s.addEventListener("mousedown",kt),document.addEventListener("mousemove",Ot),document.addEventListener("mouseup",xt),a.addEventListener("click",()=>{e.enabled=!e.enabled,a.classList.toggle("es-on",e.enabled),_(e),e.enabled?r.classList.add("es-active"):(r.classList.remove("es-active"),t.style.display="none",n.style.display="none",u.innerHTML="")}),i.addEventListener("click",()=>{e.logToConsole=!e.logToConsole,i.classList.toggle("es-on",e.logToConsole),_(e)});let B=null,Q=null,Me=f=>f.id===p||f.id===xe||f.id===Le||f.id===y||f.closest(`#${p}`)!==null,Lt=f=>{let b=f.getBoundingClientRect();t.style.display="block",t.style.left=`${b.left}px`,t.style.top=`${b.top}px`,t.style.width=`${b.width}px`,t.style.height=`${b.height}px`},Ae=(f,b,S,F)=>{n.textContent=b,n.style.display="block";let h=n.getBoundingClientRect(),T=S+12,ee=F-h.height-8;T+h.width>window.innerWidth&&(T=S-h.width-12),ee<0&&(ee=F+20),n.style.left=`${T}px`,n.style.top=`${ee}px`};document.addEventListener("mousemove",f=>{if(!e.enabled||d)return;let b=document.elementFromPoint(f.clientX,f.clientY);if(!b||Me(b)){t.style.display="none",n.style.display="none";return}if(Lt(b),b===Q){n.style.display!=="none"&&Ae(b,n.textContent??"",f.clientX,f.clientY);return}Q=b,B!==null&&cancelAnimationFrame(B);let S=f.clientX,F=f.clientY;B=requestAnimationFrame(()=>{B=null,ke(b).then(h=>{if(Q===b&&(e.collapsed||(u.innerHTML=vr(h)),Ae(b,Er(h),S,F),e.logToConsole)){let T=[`<${h.tagName}>`];h.componentName&&T.push(`Component: ${h.componentName}`),h.source&&T.push(`Source: ${h.source.filePath}:${h.source.lineNumber??"?"}`),h.stack.length>1&&T.push(`Stack:${h.stack.map(Ct).join("")}`),console.log(`%c[element-source]%c ${T.join(" | ")}`,"color: #4caf50; font-weight: bold","color: inherit"),typeof console.groupCollapsed=="function"&&(console.groupCollapsed("[element-source] Element details"),console.log("Element:",b),console.log("Info:",h),console.groupEnd())}})})},{passive:!0}),document.addEventListener("click",f=>{if(!e.enabled)return;let b=document.elementFromPoint(f.clientX,f.clientY);!b||Me(b)||(f.preventDefault(),f.stopPropagation(),ke(b).then(S=>{if(!S.source)return;let F=S.source.lineNumber?`${S.source.filePath}:${S.source.lineNumber}`:S.source.filePath;navigator.clipboard.writeText(F).then(()=>{if(!e.collapsed){let h=u.innerHTML;u.innerHTML=`<span style="color: #4caf50">Copied: ${U(F)}</span>`,setTimeout(()=>{u.innerHTML=h},1500)}})}))},!0)};typeof document<"u"&&(document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Ie):Ie());return $t(Tr);})();
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