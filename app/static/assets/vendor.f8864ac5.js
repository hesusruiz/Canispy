var b=t=>({get:e=>t.get(e),set:(e,n)=>(t.set(e,n),n)});const N=/([^\s\\>"'=]+)\s*=\s*(['"]?)$/,w=/^(?:area|base|br|col|embed|hr|img|input|keygen|link|menuitem|meta|param|source|track|wbr)$/i,j=/<[a-z][^>]+$/i,B=/>[^<>]*$/,P=/<([a-z]+[a-z0-9:._-]*)([^>]*?)(\/>)/ig,R=/\s+$/,C=(t,e)=>0<e--&&(j.test(t[e])||!B.test(t[e])&&C(t,e)),_=(t,e,n)=>w.test(e)?t:`<${e}${n.replace(R,"")}></${e}>`;var z=(t,e,n)=>{const r=[],{length:i}=t;for(let l=1;l<i;l++){const a=t[l-1];r.push(N.test(a)&&C(t,l)?a.replace(N,(c,o,f)=>`${e}${l-1}=${f||'"'}${o}${f?"":'"'}`):`${a}<!--${e}${l-1}-->`)}r.push(t[i-1]);const s=r.join("").trim();return n?s:s.replace(P,_)};const{isArray:x}=Array,{indexOf:D,slice:E}=[],F=1,A=111,q=({firstChild:t,lastChild:e})=>{const n=document.createRange();return n.setStartAfter(t),n.setEndAfter(e),n.deleteContents(),t},G=(t,e)=>t.nodeType===A?1/e<0?e?q(t):t.lastChild:e?t.valueOf():t.firstChild:t,I=t=>{const{childNodes:e}=t,{length:n}=e;if(n<2)return n?e[0]:t;const r=E.call(e,0),i=r[0],s=r[n-1];return{ELEMENT_NODE:F,nodeType:A,firstChild:i,lastChild:s,valueOf(){if(e.length!==n){let l=0;for(;l<n;)t.appendChild(r[l++])}return t}}};var U=(t,e,n,r,i)=>{const s=n.length;let l=e.length,a=s,c=0,o=0,f=null;for(;c<l||o<a;)if(l===c){const u=a<s?o?r(n[o-1],-0).nextSibling:r(n[a-o],0):i;for(;o<a;)t.insertBefore(r(n[o++],1),u)}else if(a===o)for(;c<l;)(!f||!f.has(e[c]))&&t.removeChild(r(e[c],-1)),c++;else if(e[c]===n[o])c++,o++;else if(e[l-1]===n[a-1])l--,a--;else if(e[c]===n[a-1]&&n[o]===e[l-1]){const u=r(e[--l],-1).nextSibling;t.insertBefore(r(n[o++],1),r(e[c++],-1).nextSibling),t.insertBefore(r(n[--a],1),u),e[l]=n[a]}else{if(!f){f=new Map;let u=o;for(;u<a;)f.set(n[u],u++)}if(f.has(e[c])){const u=f.get(e[c]);if(o<u&&u<a){let h=c,$=1;for(;++h<l&&h<a&&f.get(e[h])===u+$;)$++;if($>u-o){const W=r(e[c],0);for(;o<u;)t.insertBefore(r(n[o++],1),W)}else t.replaceChild(r(n[o++],1),r(e[c++],-1))}else c++}else t.removeChild(r(e[c++],-1))}return n};const J=t=>e=>{for(const n in e){const r=n==="role"?n:`aria-${n}`,i=e[n];i==null?t.removeAttribute(r):t.setAttribute(r,i)}},K=(t,e)=>{let n,r=!0;const i=document.createAttributeNS(null,e);return s=>{n!==s&&(n=s,n==null?r||(t.removeAttributeNode(i),r=!0):(i.value=s,r&&(t.setAttributeNodeNS(i),r=!1)))}},Q=(t,e,n)=>r=>{n!==!!r&&((n=!!r)?t.setAttribute(e,""):t.removeAttribute(e))},X=({dataset:t})=>e=>{for(const n in e){const r=e[n];r==null?delete t[n]:t[n]=r}},T=(t,e)=>{let n,r=e.slice(2);return!(e in t)&&e.toLowerCase()in t&&(r=r.toLowerCase()),i=>{const s=x(i)?i:[i,!1];n!==s[0]&&(n&&t.removeEventListener(r,n,s[1]),(n=s[0])&&t.addEventListener(r,n,s[1]))}},Y=t=>{let e;return n=>{e!==n&&(e=n,typeof n=="function"?n(t):n.current=t)}},Z=(t,e)=>e==="dataset"?X(t):n=>{t[e]=n},V=t=>{let e;return n=>{e!=n&&(e=n,t.textContent=n==null?"":n)}},tt=({childNodes:t},e)=>t[e],d=(t,e,n)=>U(t.parentNode,e,n,G,t),et=t=>{let e,n,r=[];const i=s=>{switch(typeof s){case"string":case"number":case"boolean":e!==s&&(e=s,n||(n=document.createTextNode("")),n.data=s,r=d(t,r,[n]));break;case"object":case"undefined":if(s==null){e!=s&&(e=s,r=d(t,r,[]));break}if(x(s)){e=s,s.length===0?r=d(t,r,[]):typeof s[0]=="object"?r=d(t,r,s):i(String(s));break}e!==s&&"ELEMENT_NODE"in s&&(e=s,r=d(t,r,s.nodeType===11?E.call(s.childNodes):[s]));break;case"function":i(s(t));break}};return i},nt=(t,e)=>{switch(e[0]){case"?":return Q(t,e.slice(1),!1);case".":return Z(t,e.slice(1));case"@":return T(t,"on"+e.slice(1));case"o":if(e[1]==="n")return T(t,e)}switch(e){case"ref":return Y(t);case"aria":return J(t)}return K(t,e)};function rt(t){const{type:e,path:n}=t,r=n.reduceRight(tt,this);return e==="node"?et(r):e==="attr"?nt(r,t.name):V(r)}/*! (c) Andrea Giammarchi - ISC */var L=function(t){var e="fragment",n="template",r="content"in l(n),i=r?function(c){var o=l(n);return o.innerHTML=c,o.content}:function(c){var o=l(e),f=l(n),u=null;if(/^[^\S]*?<(col(?:group)?|t(?:head|body|foot|r|d|h))/i.test(c)){var h=RegExp.$1;f.innerHTML="<table>"+c+"</table>",u=f.querySelectorAll(h)}else f.innerHTML=c,u=f.childNodes;return s(o,u),o};return function(o,f){return(f==="svg"?a:i)(o)};function s(c,o){for(var f=o.length;f--;)c.appendChild(o[0])}function l(c){return c===e?t.createDocumentFragment():t.createElementNS("http://www.w3.org/1999/xhtml",c)}function a(c){var o=l(e),f=l("div");return f.innerHTML='<svg xmlns="http://www.w3.org/2000/svg">'+c+"</svg>",s(o,f.firstChild.childNodes),o}}(document);const S=document.importNode.length!=1,st=S?(t,e,n)=>document.importNode(L(t,e,n),!0):L,ot=S?t=>document.createTreeWalker(t,1|128,null,!1):t=>document.createTreeWalker(t,1|128),y=t=>{const e=[];let{parentNode:n}=t;for(;n;)e.push(D.call(n.childNodes,t)),t=n,n=t.parentNode;return e},p="is\xB5",M=b(new WeakMap),it=/^(?:plaintext|script|style|textarea|title|xmp)$/i,g=()=>({stack:[],entry:null,wire:null}),ct=(t,e)=>{const{content:n,updates:r}=at(t,e);return{type:t,template:e,content:n,updates:r,wire:null}},lt=(t,e)=>{const n=z(e,p,t==="svg"),r=st(n,t),i=ot(r),s=[],l=e.length-1;let a=0,c=`${p}${a}`;for(;a<l;){const o=i.nextNode();if(!o)throw`bad template: ${n}`;if(o.nodeType===8)o.data===c&&(s.push({type:"node",path:y(o)}),c=`${p}${++a}`);else{for(;o.hasAttribute(c);)s.push({type:"attr",path:y(o),name:o.getAttribute(c)}),o.removeAttribute(c),c=`${p}${++a}`;it.test(o.tagName)&&o.textContent.trim()===`<!--${c}-->`&&(o.textContent="",s.push({type:"text",path:y(o)}),c=`${p}${++a}`)}}return{content:r,nodes:s}},at=(t,e)=>{const{content:n,nodes:r}=M.get(e)||M.set(e,lt(t,e)),i=document.importNode(n,!0),s=r.map(rt,i);return{content:i,updates:s}},v=(t,{type:e,template:n,values:r})=>{const{length:i}=r;k(t,r,i);let{entry:s}=t;(!s||s.template!==n||s.type!==e)&&(t.entry=s=ct(e,n));const{content:l,updates:a,wire:c}=s;for(let o=0;o<i;o++)a[o](r[o]);return c||(s.wire=I(l))},k=({stack:t},e,n)=>{for(let r=0;r<n;r++){const i=e[r];i instanceof m?e[r]=v(t[r]||(t[r]=g()),i):x(i)?k(t[r]||(t[r]=g()),i,i.length):t[r]=null}n<t.length&&t.splice(n)};function m(t,e,n){this.type=t,this.template=e,this.values=n}const{create:ft,defineProperties:ut}=Object,O=t=>{const e=b(new WeakMap),n=r=>(i,...s)=>v(r,{type:t,template:i,values:s});return ut((r,...i)=>new m(t,r,i),{for:{value(r,i){const s=e.get(r)||e.set(r,ft(null));return s[i]||(s[i]=n(g()))}},node:{value:(r,...i)=>v(g(),{type:t,template:r,values:i}).valueOf()}})},H=b(new WeakMap),ht=(t,e)=>{const n=typeof e=="function"?e():e,r=H.get(t)||H.set(t,g()),i=n instanceof m?v(r,n):n;return i!==r.wire&&(r.wire=i,t.textContent="",t.appendChild(i.valueOf())),t},dt=O("html");O("svg");export{dt as h,ht as r};
//# sourceMappingURL=vendor.f8864ac5.js.map