var rn=Object.create;var D=Object.defineProperty;var We=Object.getOwnPropertyDescriptor;var nn=Object.getOwnPropertyNames;var sn=Object.getPrototypeOf,on=Object.prototype.hasOwnProperty;var Be=t=>D(t,"__esModule",{value:!0}),s=(t,e)=>D(t,"name",{value:e,configurable:!0});var O=(t,e)=>()=>(t&&(e=t(t=0)),e);var p=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports),an=(t,e)=>{Be(t);for(var r in e)D(t,r,{get:e[r],enumerable:!0})},un=(t,e,r)=>{if(e&&typeof e=="object"||typeof e=="function")for(let n of nn(e))!on.call(t,n)&&n!=="default"&&D(t,n,{get:()=>e[n],enumerable:!(r=We(e,n))||r.enumerable});return t},Fe=t=>un(Be(D(t!=null?rn(sn(t)):{},"default",t&&t.__esModule&&"default"in t?{get:()=>t.default,enumerable:!0}:{value:t,enumerable:!0})),t),ze=(t,e,r,n)=>{for(var i=n>1?void 0:n?We(e,r):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(i=(n?a(e,r,i):a(i))||i);return n&&i&&D(e,r,i),i};function Z(t=[]){let e=[t].flat().join(`
`),r;try{r=new CSSStyleSheet,r.replaceSync(e)}catch(n){}return{css:e,constructedSheet:r}}function Y(t=[],e){let{css:r,constructedSheet:n}=Z(t);n?e.adoptedStyleSheets=[...e.adoptedStyleSheets,n]:(e.head?e.head:e).appendChild(Object.assign(document.createElement("style"),{textContent:t}))}var X=O(()=>{s(Z,"constructStyles");s(Y,"appendStyles")});function gn(t,e){return Array.from({length:Math.ceil(t.length/e)},(r,n)=>t.slice(n*e,n*e+e))}function Xe(t=[]){let e=t.length,r;for(;e;){let n=Math.floor(Math.random()*e--),i=t[e];r=t[e],t[n]=r}return t}function yn(t,e,r=.5){let n,i=Math.round((e[0]-t[0])*r+t[0])*65536+Math.round((e[1]-t[1])*r+t[1])*256+Math.round((e[2]-t[2])*r+t[2]);return t[3]>-1&&e[3]>-1?n=Math.round(((e[3]-t[3])*r+t[3])*255):e[3]>-1?n=Math.round(e[3]*255):t[3]>-1?n=Math.round(t[3]*255):n=255,"#"+(4294967296+n*16777216+i).toString(16).slice(t[3]>-1||e[3]>-1?1:3)}function mn(t,e,r=3){function n(u,c,l){return Math.sqrt((1-l)*Math.pow(u,2)+l*Math.pow(c,2))}s(n,"o"),f(n,"blendValue");function i(u){let c=new RegExp(/(rgb\(|)(?<r>\d{1,3}),(\s*|)(?<g>\d{1,3}),(\s*|)(?<b>\d{1,3})(\)|)/),l=new RegExp(/^#?(?<r>[a-f\d]{2})(?<g>[a-f\d]{2})(?<b>[a-f\d]{2})$/i),v=u.match(c),y=u.match(l);return v?v.groups:Object.keys(y.groups).reduce((d,b)=>(d[b]=parseInt(y.groups[b],16),d),{})}s(i,"s"),f(i,"inputToRGB");let[o,a]=[i(t),i(e)];return[...Array(r).keys()].map(u=>["r","g","b"].map(c=>n(o[c],a[c],u*(1/r))))}function bn(t=""){let e=parseInt(t,36).toString(16).slice(0,6).padEnd(6,"0").match(/.{1,2}/g).map(i=>+`0x${i}`),r=Math.min.apply(Math,e),n=e.indexOf(Math.min.apply(Math,e));return e[n]=255,{fg:e.map(i=>Math.floor(i).toString(16)).join(""),bg:e.map(i=>Math.floor(i*.35).toString(16)).join("")}}function wn(t){let e=/^#?([a-f\d])([a-f\d])([a-f\d])$/i;t.match(e)&&(t=t.replace(e,(n,i,o,a)=>i+i+o+o+a+a));let r=t.match(/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i);return[parseInt(r[1],16),parseInt(r[2],16),parseInt(r[3],16)]}function jn(t){return Object.keys(t).reduce((e,r)=>(e+=r,e+=JSON.stringify(t[r]).replace(/"/g,"").replace(/,/g,";"),e),"")}function xn(t=""){return parseInt(t.toUpperCase(),36).toString(16).slice(0,6).padEnd(6,"0")}function kn(t,e){return Object.keys(t).reduce((r,n)=>(r[n]=+`0x${+e[`--${t[n]}`].replace(/#/,"")}`,r),{})}function ue(t,e=2){return String(t).padStart(e,0)}function N(t,e={}){let r=new Date(t||Date.now()),n=Object.assign({},{utc:!1,padStart:2,join:!0},e),i=n.utc?"UTC":"",o=[r[`get${i}FullYear`](),r[`get${i}Month`]()+1,r[`get${i}Date`]()].map(a=>ue(a.toString(),n.padStart));return n.join?+o.join(""):o}function Q(t,e={}){let r=new Date(t||Date.now()),n=Object.assign({},{utc:!1,ms:!1,padStart:2,join:!0},e),i=n.utc?"UTC":"",o=[r[`get${i}Hours`](),r[`get${i}Minutes`](),r[`get${i}Seconds`](),n.ms?r[`get${i}Milliseconds`]():null].filter(a=>a!==null).map(a=>ue(a.toString(),n.padStart));return n.join?o.join(""):o}function Sn(t,e={}){let r=new Date(t||Date.now()),n=Object.assign({},{utc:!1,ms:!1,padStart:2},e,{join:!0});return+[N(t,n),Q(t,n)].join("")}function On(t,e={}){let r=new Date(t||Date.now()),n=Object.assign({},{utc:!1,padStart:2,delimiter:"/"},e);return N(t,Object.assign({},n,{join:!1})).join(n.delimiter||"")}function En(t,e={}){let r=new Date(t||Date.now()),n=Object.assign({},{utc:!1,ms:!1,padStart:2,delimiter:":"},e);return Q(t,Object.assign({},n,{join:!1})).join(n.delimiter||"")}function Cn(t,e={}){let r=new Date(t||Date.now()),n=Object.assign({},{utc:!1,ms:!1,padStart:2,dateDelimiter:"/",timeDelimiter:":"},e);return[N(t,Object.assign({},n,{join:!1})).join(n.dateDelimiter||""),Q(t,Object.assign({},n,{join:!1})).join(n.timeDelimiter||"")].join(" ")}async function Pn(t){if(!t)return"";let e=new FileReader;return e.readAsDataURL(t),new Promise(r=>{e.onloadend=()=>r(e.result)})}function Tn(t,e="png"){if(!t)return"";let r=(()=>typeof btoa=="function"?btoa((t.data||t).reduce((n,i)=>n+String.fromCharCode(i),"")):Buffer.from(t).toString("base64"))();return`data:image/${e};base64,${r}`}function Ne(t,e,r,n){let i=Math.min(r/t,n/e);return{width:t*i,height:e*i}}function An(t,e,r,n=!0){if(typeof document=="undefined")throw new Error("Must run in browser context");return new Promise(i=>{let o=f((u,c)=>{let l=document.createElement("canvas"),v=l.getContext("2d"),y=[e||u,r||c];return Object.assign(l,n?Ne(u,c,y[0],y[1]):{width:y[0],height:y[1]}),v.drawImage(a,0,0,l.width,l.height),l.toDataURL()},"draw"),a=new Image;a.src=t,a.onload=()=>{i(o(a.width,a.height))}})}function Qe(t,e,r){return Math.max(+e,Math.min(+t,+r))}function qn(t,e=1){return[typeof t=="string",typeof t?.[Symbol.iterator]!="function"].some(r=>r)?void 0:[["number","string"].includes(typeof e),!isNaN(e)].every(r=>r)?Xe(Array.from(t)).slice(0,Qe(Math.abs(e),1,t.length||t.size)):[]}function $n(t,e){return Math.floor(Math.random()*(e-t+1)+t)}function ee(t){return t||(t=""),t.replace(/([A-Z])/g,(e,r)=>" "+r.toLowerCase()).replace(/[_\- ]+(.)/g," $1").trim()}function I(t){return ee(t).replace(/\s(.)/g,(e,r)=>r.toUpperCase())}function ce(t){return Array.isArray(t)?t.map(e=>ce(e)):t!=null&&t.constructor===Object?Object.keys(t).reduce((e,r)=>({...e,[I(r)]:ce(t[r])}),{}):t}function et(t){return ee(t).replace(/[ ]/g,"_")}function Mn(t,e={}){let r={},n=Object.assign({},t,e);for(let i in n)r[et(i)]=n[i];return r}function fe(t){return ee(t).replace(/[ ]/g,"-")}function Dn(t,e={}){let r={},n=Object.assign({},t,e);for(let i in n)r[fe(i)]=n[i];return r}function tt(t){return t?typeof t=="string"?t:Object.keys(t).reduce((e,r)=>{let n=t[r];return typeof n=="object"&&n!==null?e+=`${r} {
${tt(n)}}
`:(r.startsWith("--")||(r=fe(r)),e+=`${r}: ${n};
`),e},""):""}function rt(t,e=[]){return new Proxy(t,{get(r,n,i){return typeof r[n]=="object"?(Object.defineProperty(r[n],"parentPath",{get:()=>e}),rt(r[n],e.concat([n]))):typeof r[n]=="function"?r[n].bind({get parentPath(){return e},...r}):r[n]}})}function Rn(t={},e){return Object.entries(t).reduce((r,[n,i])=>(r[e(n,i)]=i,r),{})}function _n(t={},e){return new Proxy(t,{set:function(r,n,i){return typeof e=="function"&&e({property:n,previousValue:r[n],newValue:i}),Reflect.set(...arguments)},deleteProperty:function(r,n){return e({property:n,previousValue:r[n],newValue:null}),!0}})}function Hn(t){let e=[];return I(t).replace(/^[a-z]|[A-Z]/g,r=>{e.push(r)}),e.join("").toUpperCase()}function Ln(t){return t||(t=""),t.replace(/([A-Z])/g,(e,r)=>" "+r.toLowerCase()).replace(/[_\- ]+(.)/g," $1").trim().split(" ").map(e=>e.charAt(0).toUpperCase()+e.slice(1)).join(" ")}function In(t=""){let e=/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/;return t.match(e)}function zn(t=5,e){e||(e=Fn);let r=[];for(;r.length<t;){let n=e.charAt(Math.floor(Math.random()*e.length));r.indexOf(n)==-1&&r.push(n)}return r.join("")}function st(t){try{return!!new new Proxy(t,it)}catch(e){return!1}}async function le(t=1e3){return new Promise(e=>setTimeout(e,t))}var vn,f,Un,Vn,Wn,Qs,nt,Bn,Fn,it,Gn,ot,Jn,he=O(()=>{vn=Object.defineProperty,f=s((t,e)=>vn(t,"name",{value:e,configurable:!0}),"n");s(gn,"H");f(gn,"chunk");s(Xe,"C");f(Xe,"shuffle");s(yn,"I");f(yn,"blendHex");s(mn,"E");f(mn,"gradient");s(bn,"_");f(bn,"generateHexColor");s(wn,"z");f(wn,"hexToRGB");s(jn,"F");f(jn,"jsonToCSS");s(xn,"K");f(xn,"stringToHexColor");s(kn,"L");f(kn,"varsToHex");s(ue,"h");f(ue,"padStart");s(N,"f");f(N,"datestamp");s(Q,"l");f(Q,"timestamp");s(Sn,"V");f(Sn,"datetimestamp");s(On,"G");f(On,"prettyDate");s(En,"W");f(En,"prettyTime");s(Cn,"N");f(Cn,"prettyDateTime");s(Pn,"Z");f(Pn,"imgFromBlob");s(Tn,"J");f(Tn,"imgFromBuffer");s(Ne,"S");f(Ne,"resizeWithAspectRatio");s(An,"Y");f(An,"imgToDataUri");s(Qe,"M");f(Qe,"clamp");s(qn,"q");f(qn,"randomItems");s($n,"X");f($n,"randomInt");s(ee,"d");f(ee,"sentenceCase");s(I,"g");f(I,"camelCase");s(ce,"k");f(ce,"camelKeys");s(et,"$");f(et,"snakeCase");s(Mn,"Q");f(Mn,"snakeKeys");s(fe,"x");f(fe,"kebabCase");s(Dn,"ee");f(Dn,"kebabKeys");s(tt,"v");f(tt,"objectToStyle");s(rt,"U");f(rt,"objectWithPath");s(Rn,"te");f(Rn,"mapKeys");s(_n,"re");f(_n,"changedProxy");s(Hn,"oe");f(Hn,"abbreviationCase");s(Ln,"ne");f(Ln,"humanCase");s(In,"se");f(In,"validURL");Un=[...Array(10)].map((t,e)=>String.fromCharCode(e+48)),Vn=[...Array(26)].map((t,e)=>String.fromCharCode(e+97)),Wn=[...Array(26)].map((t,e)=>String.fromCharCode(e+65)),Qs=Un.concat(Vn).concat(Wn),nt=[...Array(26)].map((t,e)=>String.fromCharCode(e+65)),Bn=[...Array(10).keys()],Fn=nt.join("")+nt.join("").toLowerCase()+Bn.join("");s(zn,"le");f(zn,"randomChars");it={construct(){return it}};s(st,"D");f(st,"isConstructor");Gn=s(class extends Map{constructor(t,e="CacheMap",r=console){super();st(r)?this.logger=new r(e):this.logger=r,this.maxSize=t,this.namespace=e}set(t,e){return this.size+1>=this.maxSize&&(this.logger&&typeof this.logger=="function"&&this.logger([`Unshifting ${this.namespace} due to imminent overflow.`,`Current size: ${this.size}.`].join(" ")),this.delete(Array.from(this.keys())[0])),super.set(t,e)}},"y");f(Gn,"CacheMap");ot=s(class{constructor(t){this.methods=["error","warn","debug","info","log","table"];for(let e of this.methods)this[e]=function(){let r=Array.prototype.slice.call(arguments);return this.prefix&&r.unshift(this.prefix),console[e].apply(console,r)}}},"j");f(ot,"Logger");Jn=s(class extends ot{constructor(t="HeapLogger"){super();this.namespace=t}get prefix(){return`[${this.namespace}] [${this.heap}]`}get relevantHeap(){return this.serverHeap||this.clientHeap||0}get heap(){let{value:t,unit:e}=this.bytesToUnit(this.relevantHeap);return`${t} ${e}`}bytesToUnit(t,e=2){if(!t)return 0;let r=1024,n=["Bytes","KB","MB","GB","TB","PB","EB","ZB","YB"],i=Math.floor(Math.log(t)/Math.log(r));return{value:parseFloat((t/Math.pow(r,i)).toFixed(e)),unit:n[i]}}get clientHeap(){if(typeof window=="object"&&window.performance?.memory)return window.performance.memory.usedJSHeapSize||0}get serverHeap(){if(typeof process=="object"&&process.memoryUsage)return process.memoryUsage().heapUsed||0}},"w");f(Jn,"HeapLogger");s(le,"de");f(le,"wait")});var te=p((to,at)=>{var Kn=Array.isArray,Zn=Object.prototype.toString;at.exports=Kn||Yn;function Yn(t){return Zn.call(t)==="[object Array]"}s(Yn,"isArray")});var R=p((ro,ut)=>{ut.exports="2"});var pe=p((no,ct)=>{var Xn=R();j.NONE=0;j.VTEXT=1;j.VNODE=2;j.WIDGET=3;j.PROPS=4;j.ORDER=5;j.INSERT=6;j.REMOVE=7;j.THUNK=8;ct.exports=j;function j(t,e,r){this.type=Number(t),this.vNode=e,this.patch=r}s(j,"VirtualPatch");j.prototype.version=Xn;j.prototype.type="VirtualPatch"});var _=p((io,ft)=>{var Nn=R();ft.exports=Qn;function Qn(t){return t&&t.type==="VirtualNode"&&t.version===Nn}s(Qn,"isVirtualNode")});var U=p((so,lt)=>{var ei=R();lt.exports=ti;function ti(t){return t&&t.type==="VirtualText"&&t.version===ei}s(ti,"isVirtualText")});var C=p((oo,ht)=>{ht.exports=ri;function ri(t){return t&&t.type==="Widget"}s(ri,"isWidget")});var V=p((ao,pt)=>{pt.exports=ni;function ni(t){return t&&t.type==="Thunk"}s(ni,"isThunk")});var de=p((uo,gt)=>{var ii=_(),si=U(),oi=C(),dt=V();gt.exports=ai;function ai(t,e){var r=t,n=e;return dt(e)&&(n=vt(e,t)),dt(t)&&(r=vt(t,null)),{a:r,b:n}}s(ai,"handleThunk");function vt(t,e){var r=t.vnode;if(r||(r=t.vnode=t.render(e)),!(ii(r)||si(r)||oi(r)))throw new Error("thunk did not return a valid node");return r}s(vt,"renderThunk")});var ve=p((co,yt)=>{"use strict";yt.exports=s(function(e){return typeof e=="object"&&e!==null},"isObject")});var W=p((fo,mt)=>{mt.exports=ui;function ui(t){return t&&(typeof t.hook=="function"&&!t.hasOwnProperty("hook")||typeof t.unhook=="function"&&!t.hasOwnProperty("unhook"))}s(ui,"isHook")});var kt=p((lo,xt)=>{var bt=ve(),ci=W();xt.exports=wt;function wt(t,e){var r;for(var n in t){n in e||(r=r||{},r[n]=void 0);var i=t[n],o=e[n];if(i!==o)if(bt(i)&&bt(o))if(jt(o)!==jt(i))r=r||{},r[n]=o;else if(ci(o))r=r||{},r[n]=o;else{var a=wt(i,o);a&&(r=r||{},r[n]=a)}else r=r||{},r[n]=o}for(var u in e)u in t||(r=r||{},r[u]=e[u]);return r}s(wt,"diffProps");function jt(t){if(Object.getPrototypeOf)return Object.getPrototypeOf(t);if(t.__proto__)return t.__proto__;if(t.constructor)return t.constructor.prototype}s(jt,"getPrototype")});var $t=p((ho,qt)=>{var fi=te(),g=pe(),A=_(),St=U(),re=C(),ne=V(),li=de(),hi=kt();qt.exports=Ot;function Ot(t,e){var r={a:t};return Et(t,e,r,0),r}s(Ot,"diff");function Et(t,e,r,n){if(t!==e){var i=r[n],o=!1;if(ne(t)||ne(e))ge(t,e,r,n);else if(e==null)re(t)||(Ct(t,r,n),i=r[n]),i=k(i,new g(g.REMOVE,t,e));else if(A(e))if(A(t))if(t.tagName===e.tagName&&t.namespace===e.namespace&&t.key===e.key){var a=hi(t.properties,e.properties);a&&(i=k(i,new g(g.PROPS,t,a))),i=pi(t,e,r,i,n)}else i=k(i,new g(g.VNODE,t,e)),o=!0;else i=k(i,new g(g.VNODE,t,e)),o=!0;else St(e)?St(t)?t.text!==e.text&&(i=k(i,new g(g.VTEXT,t,e))):(i=k(i,new g(g.VTEXT,t,e)),o=!0):re(e)&&(re(t)||(o=!0),i=k(i,new g(g.WIDGET,t,e)));i&&(r[n]=i),o&&Ct(t,r,n)}}s(Et,"walk");function pi(t,e,r,n,i){for(var o=t.children,a=gi(o,e.children),u=a.children,c=o.length,l=u.length,v=c>l?c:l,y=0;y<v;y++){var d=o[y],b=u[y];i+=1,d?Et(d,b,r,i):b&&(n=k(n,new g(g.INSERT,null,b))),A(d)&&d.count&&(i+=d.count)}return a.moves&&(n=k(n,new g(g.ORDER,t,a.moves))),n}s(pi,"diffChildren");function Ct(t,e,r){Tt(t,e,r),Pt(t,e,r)}s(Ct,"clearState");function Pt(t,e,r){if(re(t))typeof t.destroy=="function"&&(e[r]=k(e[r],new g(g.REMOVE,t,null)));else if(A(t)&&(t.hasWidgets||t.hasThunks))for(var n=t.children,i=n.length,o=0;o<i;o++){var a=n[o];r+=1,Pt(a,e,r),A(a)&&a.count&&(r+=a.count)}else ne(t)&&ge(t,null,e,r)}s(Pt,"destroyWidgets");function ge(t,e,r,n){var i=li(t,e),o=Ot(i.a,i.b);di(o)&&(r[n]=new g(g.THUNK,null,o))}s(ge,"thunks");function di(t){for(var e in t)if(e!=="a")return!0;return!1}s(di,"hasPatches");function Tt(t,e,r){if(A(t)){if(t.hooks&&(e[r]=k(e[r],new g(g.PROPS,t,vi(t.hooks)))),t.descendantHooks||t.hasThunks)for(var n=t.children,i=n.length,o=0;o<i;o++){var a=n[o];r+=1,Tt(a,e,r),A(a)&&a.count&&(r+=a.count)}}else ne(t)&&ge(t,null,e,r)}s(Tt,"unhook");function vi(t){var e={};for(var r in t)e[r]=void 0;return e}s(vi,"undefinedKeys");function gi(t,e){var r=At(e),n=r.keys,i=r.free;if(i.length===e.length)return{children:e,moves:null};var o=At(t),a=o.keys,u=o.free;if(u.length===t.length)return{children:e,moves:null};for(var c=[],l=0,v=i.length,y=0,d=0;d<t.length;d++){var b=t[d],m;b.key?n.hasOwnProperty(b.key)?(m=n[b.key],c.push(e[m])):(m=d-y++,c.push(null)):l<v?(m=i[l++],c.push(e[m])):(m=d-y++,c.push(null))}for(var q=l>=i.length?e.length:i[l],J=0;J<e.length;J++){var K=e[J];K.key?a.hasOwnProperty(K.key)||c.push(K):J>=q&&c.push(K)}for(var S=c.slice(),x=0,$=[],L=[],w,E=0;E<e.length;){var M=e[E];for(w=S[x];w===null&&S.length;)$.push(ie(S,x,null)),w=S[x];!w||w.key!==M.key?M.key?(w&&w.key?n[w.key]!==E+1?($.push(ie(S,x,w.key)),w=S[x],!w||w.key!==M.key?L.push({key:M.key,to:E}):x++):L.push({key:M.key,to:E}):L.push({key:M.key,to:E}),E++):w&&w.key&&$.push(ie(S,x,w.key)):(x++,E++)}for(;x<S.length;)w=S[x],$.push(ie(S,x,w&&w.key));return $.length===y&&!L.length?{children:c,moves:null}:{children:c,moves:{removes:$,inserts:L}}}s(gi,"reorder");function ie(t,e,r){return t.splice(e,1),{from:e,key:r}}s(ie,"remove");function At(t){for(var e={},r=[],n=t.length,i=0;i<n;i++){var o=t[i];o.key?e[o.key]=i:r.push(i)}return{keys:e,free:r}}s(At,"keyIndex");function k(t,e){return t?(fi(t)?t.push(e):t=[t,e],t):e}s(k,"appendPatch")});var Dt=p((po,Mt)=>{var yi=$t();Mt.exports=yi});var Rt=p(()=>{});var ye=p((yo,Ht)=>{var _t=typeof window!="undefined"||typeof window!="undefined"?window:{},mi=Rt(),B;typeof document!="undefined"?B=document:(B=_t["__GLOBAL_DOCUMENT_CACHE@4"],B||(B=_t["__GLOBAL_DOCUMENT_CACHE@4"]=mi));Ht.exports=B});var be=p((mo,Vt)=>{var me=ve(),Lt=W();Vt.exports=bi;function bi(t,e,r){for(var n in e){var i=e[n];i===void 0?It(t,n,i,r):Lt(i)?(It(t,n,i,r),i.hook&&i.hook(t,n,r?r[n]:void 0)):me(i)?wi(t,e,r,n,i):t[n]=i}}s(bi,"applyProperties");function It(t,e,r,n){if(n){var i=n[e];if(Lt(i))i.unhook&&i.unhook(t,e,r);else if(e==="attributes")for(var o in i)t.removeAttribute(o);else if(e==="style")for(var a in i)t.style[a]="";else typeof i=="string"?t[e]="":t[e]=null}}s(It,"removeProperty");function wi(t,e,r,n,i){var o=r?r[n]:void 0;if(n==="attributes"){for(var a in i){var u=i[a];u===void 0?t.removeAttribute(a):t.setAttribute(a,u)}return}if(o&&me(o)&&Ut(o)!==Ut(i)){t[n]=i;return}me(t[n])||(t[n]={});var c=n==="style"?"":void 0;for(var l in i){var v=i[l];t[n][l]=v===void 0?c:v}}s(wi,"patchObject");function Ut(t){if(Object.getPrototypeOf)return Object.getPrototypeOf(t);if(t.__proto__)return t.__proto__;if(t.constructor)return t.constructor.prototype}s(Ut,"getPrototype")});var we=p((bo,Ft)=>{var Wt=ye(),ji=be(),xi=_(),ki=U(),Si=C(),Oi=de();Ft.exports=Bt;function Bt(t,e){var r=e&&e.document||Wt,n=e?e.warn:null;if(t=Oi(t).a,Si(t))return t.init();if(ki(t))return r.createTextNode(t.text);if(!xi(t))return n&&n("Item is not a valid virtual dom node",t),null;var i=t.namespace===null?r.createElement(t.tagName):r.createElementNS(t.namespace,t.tagName),o=t.properties;ji(i,o);for(var a=t.children,u=0;u<a.length;u++){var c=Bt(a[u],e);c&&i.appendChild(c)}return i}s(Bt,"createElement")});var Kt=p((wo,Jt)=>{var Ei={};Jt.exports=Ci;function Ci(t,e,r,n){return!r||r.length===0?{}:(r.sort(Pi),zt(t,e,r,n,0))}s(Ci,"domIndex");function zt(t,e,r,n,i){if(n=n||{},t){Gt(r,i,i)&&(n[i]=t);var o=e.children;if(o)for(var a=t.childNodes,u=0;u<e.children.length;u++){i+=1;var c=o[u]||Ei,l=i+(c.count||0);Gt(r,i,l)&&zt(a[u],c,r,n,i),i=l}}return n}s(zt,"recurse");function Gt(t,e,r){if(t.length===0)return!1;for(var n=0,i=t.length-1,o,a;n<=i;){if(o=(i+n)/2>>0,a=t[o],n===i)return a>=e&&a<=r;if(a<e)n=o+1;else if(a>r)i=o-1;else return!0}return!1}s(Gt,"indexInRange");function Pi(t,e){return t>e?1:-1}s(Pi,"ascending")});var Xt=p((jo,Yt)=>{var Zt=C();Yt.exports=Ti;function Ti(t,e){return Zt(t)&&Zt(e)?"name"in t&&"name"in e?t.id===e.id:t.init===e.init:!1}s(Ti,"updateWidget")});var er=p((xo,Qt)=>{var Ai=be(),qi=C(),P=pe(),$i=Xt();Qt.exports=Mi;function Mi(t,e,r){var n=t.type,i=t.vNode,o=t.patch;switch(n){case P.REMOVE:return Di(e,i);case P.INSERT:return Ri(e,o,r);case P.VTEXT:return _i(e,i,o,r);case P.WIDGET:return Hi(e,i,o,r);case P.VNODE:return Li(e,i,o,r);case P.ORDER:return Ii(e,o),e;case P.PROPS:return Ai(e,o,i.properties),e;case P.THUNK:return Ui(e,r.patch(e,o,r));default:return e}}s(Mi,"applyPatch");function Di(t,e){var r=t.parentNode;return r&&r.removeChild(t),Nt(t,e),null}s(Di,"removeNode");function Ri(t,e,r){var n=r.render(e,r);return t&&t.appendChild(n),t}s(Ri,"insertNode");function _i(t,e,r,n){var i;if(t.nodeType===3)t.replaceData(0,t.length,r.text),i=t;else{var o=t.parentNode;i=n.render(r,n),o&&i!==t&&o.replaceChild(i,t)}return i}s(_i,"stringPatch");function Hi(t,e,r,n){var i=$i(e,r),o;i?o=r.update(e,t)||t:o=n.render(r,n);var a=t.parentNode;return a&&o!==t&&a.replaceChild(o,t),i||Nt(t,e),o}s(Hi,"widgetPatch");function Li(t,e,r,n){var i=t.parentNode,o=n.render(r,n);return i&&o!==t&&i.replaceChild(o,t),o}s(Li,"vNodePatch");function Nt(t,e){typeof e.destroy=="function"&&qi(e)&&e.destroy(t)}s(Nt,"destroyWidget");function Ii(t,e){for(var r=t.childNodes,n={},i,o,a,u=0;u<e.removes.length;u++)o=e.removes[u],i=r[o.from],o.key&&(n[o.key]=i),t.removeChild(i);for(var c=r.length,l=0;l<e.inserts.length;l++)a=e.inserts[l],i=n[a.key],t.insertBefore(i,a.to>=c++?null:r[a.to])}s(Ii,"reorderChildren");function Ui(t,e){return t&&e&&t!==e&&t.parentNode&&t.parentNode.replaceChild(e,t),e}s(Ui,"replaceRoot")});var ir=p((ko,nr)=>{var Vi=ye(),Wi=te(),Bi=we(),Fi=Kt(),tr=er();nr.exports=rr;function rr(t,e,r){return r=r||{},r.patch=r.patch&&r.patch!==rr?r.patch:zi,r.render=r.render||Bi,r.patch(t,e,r)}s(rr,"patch");function zi(t,e,r){var n=Ji(e);if(n.length===0)return t;var i=Fi(t,e.a,n),o=t.ownerDocument;!r.document&&o!==Vi&&(r.document=o);for(var a=0;a<n.length;a++){var u=n[a];t=Gi(t,i[u],e[u],r)}return t}s(zi,"patchRecursive");function Gi(t,e,r,n){if(!e)return t;var i;if(Wi(r))for(var o=0;o<r.length;o++)i=tr(r[o],e,n),e===t&&(t=i);else i=tr(r,e,n),e===t&&(t=i);return t}s(Gi,"applyPatch");function Ji(t){var e=[];for(var r in t)r!=="a"&&e.push(Number(r));return e}s(Ji,"patchIndices")});var or=p((So,sr)=>{var Ki=ir();sr.exports=Ki});var xe=p((Oo,ar)=>{var Zi=R(),Yi=_(),Xi=C(),Ni=V(),Qi=W();ar.exports=je;var es={},ts=[];function je(t,e,r,n,i){this.tagName=t,this.properties=e||es,this.children=r||ts,this.key=n!=null?String(n):void 0,this.namespace=typeof i=="string"?i:null;var o=r&&r.length||0,a=0,u=!1,c=!1,l=!1,v;for(var y in e)if(e.hasOwnProperty(y)){var d=e[y];Qi(d)&&d.unhook&&(v||(v={}),v[y]=d)}for(var b=0;b<o;b++){var m=r[b];Yi(m)?(a+=m.count||0,!u&&m.hasWidgets&&(u=!0),!c&&m.hasThunks&&(c=!0),!l&&(m.hooks||m.descendantHooks)&&(l=!0)):!u&&Xi(m)?typeof m.destroy=="function"&&(u=!0):!c&&Ni(m)&&(c=!0)}this.count=o+a,this.hasWidgets=u,this.hasThunks=c,this.hooks=v,this.descendantHooks=l}s(je,"VirtualNode");je.prototype.version=Zi;je.prototype.type="VirtualNode"});var Se=p((Eo,ur)=>{var rs=R();ur.exports=ke;function ke(t){this.text=String(t)}s(ke,"VirtualText");ke.prototype.version=rs;ke.prototype.type="VirtualText"});var fr=p((Co,cr)=>{cr.exports=s(function(e){var r=String.prototype.split,n=/()??/.exec("")[1]===e,i;return i=s(function(o,a,u){if(Object.prototype.toString.call(a)!=="[object RegExp]")return r.call(o,a,u);var c=[],l=(a.ignoreCase?"i":"")+(a.multiline?"m":"")+(a.extended?"x":"")+(a.sticky?"y":""),v=0,a=new RegExp(a.source,l+"g"),y,d,b,m;for(o+="",n||(y=new RegExp("^"+a.source+"$(?!\\s)",l)),u=u===e?-1>>>0:u>>>0;(d=a.exec(o))&&(b=d.index+d[0].length,!(b>v&&(c.push(o.slice(v,d.index)),!n&&d.length>1&&d[0].replace(y,function(){for(var q=1;q<arguments.length-2;q++)arguments[q]===e&&(d[q]=e)}),d.length>1&&d.index<o.length&&Array.prototype.push.apply(c,d.slice(1)),m=d[0].length,v=b,c.length>=u)));)a.lastIndex===d.index&&a.lastIndex++;return v===o.length?(m||!a.test(""))&&c.push(""):c.push(o.slice(v)),c.length>u?c.slice(0,u):c},"self"),i},"split")()});var hr=p((Po,lr)=>{"use strict";var ns=fr(),is=/([\.#]?[a-zA-Z0-9\u007F-\uFFFF_:-]+)/,ss=/^\.|#/;lr.exports=os;function os(t,e){if(!t)return"DIV";var r=!e.hasOwnProperty("id"),n=ns(t,is),i=null;ss.test(n[1])&&(i="DIV");var o,a,u,c;for(c=0;c<n.length;c++)a=n[c],!!a&&(u=a.charAt(0),i?u==="."?(o=o||[],o.push(a.substring(1,a.length))):u==="#"&&r&&(e.id=a.substring(1,a.length)):i=a);return o&&(e.className&&o.push(e.className),e.className=o.join(" ")),e.namespace?i:i.toUpperCase()}s(os,"parseTag")});var dr=p((To,pr)=>{"use strict";pr.exports=se;function se(t){if(!(this instanceof se))return new se(t);this.value=t}s(se,"SoftSetHook");se.prototype.hook=function(t,e){t[e]!==this.value&&(t[e]=this.value)}});var gr=p((Ao,vr)=>{"use strict";var Oe=typeof window!="undefined"||typeof window!="undefined"?window:{};vr.exports=as;function as(t,e){return t in Oe?Oe[t]:(Oe[t]=e,e)}s(as,"Individual")});var br=p((qo,mr)=>{"use strict";var yr=gr();mr.exports=us;function us(t,e,r){var n="__INDIVIDUAL_ONE_VERSION_"+t,i=n+"_ENFORCE_SINGLETON",o=yr(i,e);if(o!==e)throw new Error("Can only have one copy of "+t+`.
You already have version `+o+` installed.
This means you cannot install version `+e);return yr(n,r)}s(us,"OneVersion")});var kr=p(($o,xr)=>{"use strict";var cs=br(),wr="7";cs("ev-store",wr);var jr="__EV_STORE_KEY@"+wr;xr.exports=fs;function fs(t){var e=t[jr];return e||(e=t[jr]={}),e}s(fs,"EvStore")});var Er=p((Mo,Or)=>{"use strict";var Sr=kr();Or.exports=F;function F(t){if(!(this instanceof F))return new F(t);this.value=t}s(F,"EvHook");F.prototype.hook=function(t,e){var r=Sr(t),n=e.substr(3);r[n]=this.value};F.prototype.unhook=function(t,e){var r=Sr(t),n=e.substr(3);r[n]=void 0}});var Dr=p((Do,Mr)=>{"use strict";var Cr=te(),ls=xe(),Pr=Se(),hs=_(),ps=U(),ds=C(),Tr=W(),vs=V(),gs=hr(),ys=dr(),ms=Er();Mr.exports=bs;function bs(t,e,r){var n=[],i,o,a,u;return!r&&js(e)&&(r=e,o={}),o=o||e||{},i=gs(t,o),o.hasOwnProperty("key")&&(a=o.key,o.key=void 0),o.hasOwnProperty("namespace")&&(u=o.namespace,o.namespace=void 0),i==="INPUT"&&!u&&o.hasOwnProperty("value")&&o.value!==void 0&&!Tr(o.value)&&(o.value=ys(o.value)),ws(o),r!=null&&Ar(r,n,i,o),new ls(i,o,n,a,u)}s(bs,"h");function Ar(t,e,r,n){if(typeof t=="string")e.push(new Pr(t));else if(typeof t=="number")e.push(new Pr(String(t)));else if(qr(t))e.push(t);else if(Cr(t))for(var i=0;i<t.length;i++)Ar(t[i],e,r,n);else{if(t==null)return;throw xs({foreignObject:t,parentVnode:{tagName:r,properties:n}})}}s(Ar,"addChild");function ws(t){for(var e in t)if(t.hasOwnProperty(e)){var r=t[e];if(Tr(r))continue;e.substr(0,3)==="ev-"&&(t[e]=ms(r))}}s(ws,"transformProperties");function qr(t){return hs(t)||ps(t)||ds(t)||vs(t)}s(qr,"isChild");function js(t){return typeof t=="string"||Cr(t)||qr(t)}s(js,"isChildren");function xs(t){var e=new Error;return e.type="virtual-hyperscript.unexpected.virtual-element",e.message=`Unexpected virtual child passed to h().
Expected a VNode / Vthunk / VWidget / string but:
got:
`+$r(t.foreignObject)+`.
The parent vnode is:
`+$r(t.parentVnode),e.foreignObject=t.foreignObject,e.parentVnode=t.parentVnode,e}s(xs,"UnexpectedVirtualElement");function $r(t){try{return JSON.stringify(t,null,"    ")}catch(e){return String(t)}}s($r,"errorString")});var _r=p((Ro,Rr)=>{var ks=Dr();Rr.exports=ks});var Lr=p((_o,Hr)=>{var Ss=we();Hr.exports=Ss});var Ee=p((Ho,Ir)=>{var Os=Dt(),Es=or(),Cs=_r(),Ps=Lr(),Ts=xe(),As=Se();Ir.exports={diff:Os,patch:Es,h:Cs,create:Ps,VNode:Ts,VText:As}});function Te(t,e){return oe.size===0&&(Pe=Pe.then(Ds)),typeof e=="function"&&Ce.push(e),oe.add(t),Pe}function Ds(){try{_s()}catch(t){console.error(t)}finally{for(oe.clear();Ce.length;)Ce.pop()()}}function Rs(t){let e=t.shadowRoot||t,r=Wr.get(t),n=r||new Vr(e.nodeName),{constructedSheet:i,styles:o}=t,a=[];if(o&&(!t.shadowRoot||!i)){let l=Ms("style",o);a.unshift(l)}else t.shadowRoot&&i&&(t.shadowRoot.adoptedStyleSheets=[i]);if(t.template&&(a=a.concat(t.template(t))),!r&&e.childNodes?.length){let l=e.firstChild;for(;l;){let v=l.nextSibling;e.removeChild(l),l=v}}!t.shadowRoot&&!r&&(t.innerHTML="");let u=new Vr(e.nodeName,null,a),c=qs(n,u);$s(e,c),Wr.set(t,u)}function _s(){for(let t of oe)Rs(t)}function Br(t,e=String,r,n={}){var i=r.prototype.created;let o=s(function(){let c=this.getAttribute(t);if(c===null)return typeof n.default=="function"?n.default(this):n.default;if(e===Boolean)return c!=null&&c!="false";if(c&&(e===Array||e===JSON))try{return JSON.parse(c)}catch(l){console.error(l)}return e.prototype?new e(c).valueOf():c},"get"),a=s(function(c){if(c==null)return this.removeAttribute(t);if(e===Array||e===JSON)return this.setAttribute(t,JSON.stringify(c));if(!e.prototype)return this.setAttribute(t,e(c));this.setAttribute(t,c)},"set");r.prototype.created=function(){return Object.defineProperty(this,I(t),{get:o,set:a}),i?i.apply(this,arguments):void 0}}var Ur,Vr,qs,$s,Io,Ms,Ce,oe,Wr,Pe,Fr=O(()=>{Ur=Fe(Ee());he();({VNode:Vr,diff:qs,patch:$s,create:Io,h:Ms}=Ur.default),Ce=[],oe=new Set,Wr=new WeakMap,Pe=Promise.resolve();s(Te,"render");s(Ds,"attempt");s(Rs,"renderElement");s(_s,"apply");s(Br,"assignAttribute")});function Hs(t,...e){var[r,...n]=t.split("."),i=document.createElement(r||"div");return i.className=n.join(" "),e.forEach(o=>{typeof o=="string"?i.textContent=o:o instanceof Node?i.appendChild(o):Array.isArray(o)?o.forEach(function(a){typeof a=="string"?i.appendChild(document.createTextNode(a)):i.appendChild(a)}):o&&typeof o=="object"&&(Object.assign(i,o),Object.keys(o).forEach(a=>{typeof o[a]!="object"&&i.setAttribute(a,o[a])}))}),i}function Ls(t,e,r={}){return s(function(i){return i.attributes||(i.attributes={}),i.attributes[t]=e,Br(t,e,i,r)},"assign")}function Ae(t){return s(function(r){r.prototype.template=t},"assign")}function Is(t,e,r={}){z||(z=new Map),z.has(t)||z.set(t,new Set);var n=z.get(t);if(Object.assign(e.prototype,{createdCallback(){this.$$created||(this.$$created=!0,this.shadowRoot||this.attachShadow({mode:"open"}),this.created&&this.created())},connectedCallback(){this.$$connected||(this.$$connected=!0,n.add(this),this.render(()=>{this.connected&&this.connected()}))},disconnectedCallback(){this.disconnected&&this.disconnected()},adoptedCallback(){this.adopted&&this.adopted()},attributeChangedCallback(i,o,a){o!==a&&this.render(),this.attributeChanged&&this.attributeChanged(i,o,a)},render:function(i){return Te(this,i)},emit(i,o={},a={bubbles:!0,composed:!0}){return o.detail&&(a.detail=o.detail,delete o.detail),console.log({name:i,options:a,data:o}),this.dispatchEvent(Object.assign(new CustomEvent(i,a),o)),this},on(i,o){this.addEventListener(i,a=>o(a))},setState(...i){return Object.assign(this,...i),Te(this)},wait:async function(i=1e3){return le(i)}}),!customElements.get(t))customElements.define(t,s(class extends e{constructor(){super();this.createdCallback&&this.createdCallback()}},"FacadeComponent"));else{let i=customElements.get(t),o=Object.getOwnPropertyDescriptors(i.prototype),a=Object.getOwnPropertyDescriptors(i);try{Object.keys(o).forEach(u=>{Object.defineProperty(i.prototype,u,o[u])}),Object.keys(a).forEach(u=>{u!=="prototype"&&Object.defineProperty(i,u,a[u])})}catch(u){console.error(u)}transfer(i,e);for(let u of n)u.render()}return e}function qe(t,e){return s(function(n){n.attributes||(n.attributes={}),Object.defineProperty(n,"observedAttributes",{get:function(){return Object.keys(this.attributes)}});let i=[t||window.$facade.componentPrefix||"facade",n.name.replace(/[A-Z]/g,o=>"-"+o.toLowerCase())].join("");return Is(i,n,e),Hs.bind(null,i)},"define")}function Us(t,e,r={}){let n=Symbol.for(t);return s(function(o){Object.defineProperty(o.prototype,t,{configurable:!0,get(){let a=this[n];if(typeof a=="undefined"||a===null)return r.default||a;if(a&&typeof a=="string"&&(e===Array||e===JSON))try{return JSON.parse(a)}catch(u){return a}return a},set(a){if(this[n]===a)return;let u=Object.assign({},{prev:this[n],current:a}),c=this[`$${t}Changed`];this[n]=a,this.render(),typeof c=="function"&&c.call(this,u)}})},"define")}function $e(t){return s(function(r){let{css:n,constructedSheet:i}=Z(t);r.prototype.styles=n,r.prototype.constructedSheet=i},"assign")}var z,Me=O(()=>{he();X();Fr();s(Hs,"element");s(Ls,"Attribute");s(Ae,"Template");s(Is,"register");s(qe,"Define");s(Us,"Input");s($e,"Styles")});function Gr(t,e){for(let r=0,n=t.length;r<n;++r)e(t[r],r)}function Gs(t,e){let r=0;for(let n of t)Array.isArray(n)?e(n[0],n[1]):e(n,r++)}function Js(t,e){let r=Object.keys(t);for(let n=0,i=r.length;n<i;++n)e(t[r[n]],r[n])}var zs,ae,Re=O(()=>{zs=Array.call.bind(Array.prototype.slice);s(Gr,"arrayIterator");s(Gs,"IterableIterator");s(Js,"objectIterator");ae=class{init(){return this.create()}create(e){return{tagName:e,children:[]}}child(e,r){if(!e.children)debugger;e.children.push(r)}events(e,r){return r}element(e){return e}hooks(e,r){return Object.assign(e,r)}handles(e,r,n){e.handle=[r,n]}props(e,r){return Object.assign(e,r)}text(e){return e!=null?e+"":""}attrs(e,r){e.attributes||(e.attributes={}),r.class&&(r.class=this.attr(r.class));for(let n in r)r[n]===!1||r[n]==null||(e.attributes[n]=r[n]+"")}attr(e){if(!e)return"";if(Array.isArray(e))return e.map(this.attr,this).join(" ");if(typeof e=="object"){let r=[];for(let n in e)e[n]&&r.push(n);return r.join(" ")}return e+""}mixin(e,r,...n){r.properties=Object.assign({},r.properties,...n);let i=r.tagName.apply(r);for(let o of i)this.child(e,o)}each(e,r){if(!!e)return Array.isArray(e)?Gr(e,r):Symbol.iterable in e?Gs(e,r):"length"in e?Gr(zs(e),r):Js(e,r)}end(e){return e.children}};s(ae,"PugRuntime")});var Jr,_e,He,Le,Ie,Ue,Ve,T,Kr=O(()=>{Jr=Fe(Ee());Re();_e=class{constructor(e){this.events=e}hook(e,r,n){let i=n?n.events:[];for(var[o,a]of i)e.removeEventListener(o,a);for(var[o,a]of this.events)e.addEventListener(o,a)}unhook(e){for(let[r,n]of this.events)e.removeEventListener(r,n)}};s(_e,"EventHook");He=class{constructor(e){this.subscribe=e}hook(e,r,n){this.subscribe&&(this.unsubscribe=this.subscribe(e,r,n))}unhook(){typeof this.unsubscribe=="function"&&(this.unsubscribe(),delete this.unsubscribe)}};s(He,"FunctionHook");Le=class{constructor(e){this.value=e}hook(e,r,n){(!(n&&n.value)&&this.value!==void 0||e[r]!==this.value)&&(e[r]=this.value)}};s(Le,"PropertyHook");Ie=class{constructor(e,r){this.context=e,this.names=r}hook(e,r,n){for(let i of this.names)this.context[i]=e}unhook(){for(let e of this.names)this.context[e]=null}};s(Ie,"HandleHook");Ue=class{constructor(e){this.value=e}update(e){if(!e||e.value===this.value)return;let r=this.init(e);return e.nodes&&(e.nodes[0].replaceWith(r),this.removeNodes(e.nodes)),r}destroy(){this.removeNodes(this.nodes)}removeNodes(e){if(!e)return;let r=this.value&&this.value.unhook;for(let n of e)r&&this.value.unhook(n),n.remove()}init(e){let r=document.createElement("template");if(r.innerHTML=this.value+"",this.nodes=Array.from(r.content.childNodes),this.value&&this.value.hook)for(let n of this.nodes)this.value.hook(n,"innerHTML",e&&e.value);return r.content}get type(){return"Widget"}};s(Ue,"HTMLWidget");Ve=class extends ae{constructor(e){super();this.h=e}element(e){let r=e.tagName,n=e.children;return delete e.tagName,delete e.children,this.h(r,e,n)}hooks(e,r){for(var[n,r]of Object.entries(r))typeof r=="function"?e[n]=new He(r):e[n]=r}events(e,r,n){return e.events=new _e(n,r)}handles(e,r,n){e.handle=new Ie(r,n)}text(e,r){return e&&r?new Ue(e):e&&e.type==="VirtualNode"?e:super.text(e)}attrs(e,r){typeof r.style=="object"&&(e.style=r.style,delete r.style),e.attributes||(e.attributes={}),r.class&&(r.class=this.attr(r.class));for(let n in r)r[n]===!1||r[n]==null||(r[n].hook&&(e[n]=r[n]),e.attributes[n]=r[n]+"")}props(e,r){for(let i of Object.keys(r))switch(i){case"class":var n=this.attr(r[i]);if(!n)continue;e.attributes&&e.attributes.class&&(n=e.attributes.class+" "+n,delete e.attributes.class),e.className&&(n+=" "+e.className),e.className=n;break;case"style":e[i]=r[i];break;default:e[i]=new Le(r[i])}}};s(Ve,"VDomRuntime");T=new Ve(Jr.h)});var Zr=O(()=>{Re();Kr()});function Ks(t){let e=T.init(this,t),r=T.create("slot");return T.attrs(r,{name:"viewport"}),T.child(e,T.element(r)),T.end(e)}var Yr,Xr=O(()=>{Zr();s(Ks,"template");Yr=Ks});var Nr,Qr=O(()=>{Nr=`:host {
  display: flex;
  box-sizing: border-box;
  width: 100%;
}
::slotted(*) {
  box-sizing: border-box;
}
`});var en={};an(en,{default:()=>H});var H,tn=O(()=>{Me();Xr();Qr();H=class extends HTMLElement{};s(H,"Viewport"),H=ze([qe("facade"),Ae(Yr),$e(Nr)],H)});var Ge=new Set,Je,Ke=s(t=>t.split("/").filter(e=>e)[0],"rootPath"),cn=s(()=>{let t;return location.hash?t=location.hash.replace("#!",""):t=location.pathname.slice(1).toLowerCase()||"/",t},"parseLocation"),fn=s(t=>Array.from(Ge).find(e=>Ke(e.path)===Ke(t)),"findRouteByPath"),ln=s(t=>{let e=t.path.split("/").slice(2),r=new Map;for(let[n,i]of e.entries())i&&i.includes(":")&&r.set(n,i.replace(/[:?]/g,""));return{mappedParts:r}},"paramsFor"),hn=s(async()=>{if(Je)return;Je=!0;let t=cn(),e=fn(t);if(!e)return;let r=await e.component(),n=r.default||typeof r=="function"?r():r;if(!n)return;pn(e,n);let i=document.body.querySelector(`${window.$facade.componentPrefix}-viewport`)||document.body.querySelector("facade-viewport");if(!i)return console.warn("No viewport found!");i.innerHTML="",n.setAttribute("slot","viewport"),i.appendChild(n)},"router"),pn=s((t,e)=>{let{keys:r,mappedParts:n}=dn(t),i=r.next(),o=location.pathname.split("/").slice(2).filter(a=>a);for(;!i.done;){let a=i.value,u=n.get(a),c=o[a];c&&e.setAttribute(u,c),i=r.next()}},"assignParams"),dn=s(t=>{let{mappedParts:e}=ln(t);return{keys:e.keys(),mappedParts:e}},"mapFor");var Ze=s(t=>{for(let e of t)Ge.add(e)},"initRoutes");window.addEventListener("hashchange",hn);X();var Ye=`:root {
  --fa-padding: 5px;
  --fa-box-shadow: 0px 8px 20px rgba(0,0,0,0.35);
  --fa-box-background: rgba(0,0,0,0.25);
  --fa-box-gap: 10px;
  --fa-box-padding: 10px;
  --fa-accent-color: #0c4753;
  --fa-accent-color-hue: #092b32;
  --fa-accent-text: #fff;
  --fa-accent-text-hue: #829da2;
  --fa-accent-border: 1px solid var(--fa-accent-color-hue);
  --fa-success: #2bd46f;
  --fa-danger: #f00;
  --fa-warning: #ff9c00;
  --fa-warning-hue: #b36e00;
  --fa-primary-text: #fff;
  --fa-primary-color: #121719;
  --fa-primary-color-hue: #283133;
  --fa-secondary-color: #fff;
  --fa-secondary-color-hue: #eee;
  --fa-secondary-text: #000;
  --fa-selected-bg: #367fce;
  --fa-selected-color: #424242;
  --fa-border-color: rgba(255,255,255,0.25);
  --fa-border: 1px solid var(--fa-primary-color-hue);
  --fa-border-radius: 2px;
  --fa-border-radius-soft: 4px;
}
`;Me();X();var G=class{constructor(){}async get(e,r){let n=await this.url(e,r),i=await fetch(n),{status:o,headers:a}=i,u=a.get("content-type");return i.ok?u.match(/^image\/\w*$/)?i.blob():i.json():new Error(i.statusText)}async post(e,r,n){let i=await this.url(e),o={};return r&&Object.assign(o,{method:"POST",body:JSON.stringify(r)}),n?Object.assign(o,{headers:n}):Object.assign(o,{headers:{Accept:"application/json","Content-Type":"application/json"}}),fetch(i,o).then(a=>a.json())}async url(e,r){let n;if(Object.keys(r||{}).length){n=new URLSearchParams;for(let i in r)if(typeof r[i]=="object")for(let o of r[i])n.append(`${i}[]`,o);else n.append(i,r[i]);r=n.toString()}return`${e}${n?"?"+n.toString():""}`}};s(G,"Api");var zr=new G,De=class{};s(De,"Model");function Vs(t){return function(e){let r=Object.getOwnPropertyDescriptors(e.prototype);for(let n in r)Object.defineProperty(e,n,r[n]);return e}}s(Vs,"model");function Ws(t){let e=window.$facade.apiRoot||window.$facade.api||"";function r(n){return[e,t,n].filter(i=>i).join("/")}return s(r,"getPath"),function(n){n.load=async function(i,o={}){return zr.get(r(i),o)},n.post=async function(i,o={}){return zr.post(r(i),o)},n.prototype.load=n.load,n.prototype.post=n.post}}s(Ws,"Endpoint");function Bs(t,e,r){let n=new CustomEvent(e,{detail:r});t.dispatchEvent(n)}s(Bs,"emit");function Fs(t,e,r){let n=this.shadowRoot,i=t;typeof t=="string"&&(i=n.querySelector(t)),!!i&&i.addEventListener(e,o=>r(o))}s(Fs,"listen");Y(Ye,document);window.$facade={};async function ha(t){let{routes:e,styles:r}=t;Y(r,document),window.$facade=t,Ze(e||[]),await Promise.resolve().then(()=>(tn(),en)),window.dispatchEvent(new Event("hashchange"))}s(ha,"bootstrap");export{G as Api,Ls as Attribute,qe as Define,Ws as Endpoint,Us as Input,De as Model,$e as Styles,Ae as Template,Y as appendStyles,ha as bootstrap,Z as constructStyles,Bs as emit,Fs as listen,Vs as model};
/*!
 * Cross-Browser Split 1.1.1
 * Copyright 2007-2012 Steven Levithan <stevenlevithan.com>
 * Available under the MIT License
 * ECMAScript compliant, uniform cross-browser split method
 */
