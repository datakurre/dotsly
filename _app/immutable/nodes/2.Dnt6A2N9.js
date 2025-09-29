import"../chunks/DsnmJJEf.js";import"../chunks/DXAwGQm7.js";import{i as Al,a as zl,c as Dl,d as Sl,n as Bl,b as Pl,e as Re,o as Ln,f as le,g as Sa,j as $l}from"../chunks/Csy9xEDe.js";import{B as Nn,w as Rt,aT as Ba,z as Ft,h as ie,aA as Pa,a as wn,g as s,W as ye,x as El,H as Rl,y as Vn,A as Ke,J as Xe,ag as Ll,aI as Nl,C as rt,F as Il,aU as Lt,aV as Nt,D as at,af as Zn,a8 as ee,X as Jn,aF as $a,ax as Ea,G as In,I as Ra,aW as Ol,aX as Wt,M as ql,an as ot,aY as Hl,at as Yl,aZ as Xl,aE as Gl,a_ as Ul,T as La,a$ as jl,E as Vl,b0 as Zl,aH as Jl,K as Na,b1 as Wl,b2 as Kl,av as Ql,b3 as e0,b4 as t0,b5 as n0,b6 as a0,b7 as l0,b8 as r0,U as o0,b9 as i0,ba as s0,bb as d0,bc as u0,aa as Ia,d as U,L as c0,bd as f0,p as Te,n as ge,q as Y,s as q,R as k,t as we,m as j,o as Ae,k as Ce,l as xe,v as oe,f as X,be as Tn,bf as Oa,bg as h0,bh as g0,ab as b0,bi as p0,bj as v0}from"../chunks/DckqTTcM.js";import{p as B,b as Wn,i as Ye,l as Se,s as Le}from"../chunks/q0klybCy.js";import{i as ze}from"../chunks/BBao4eQ6.js";import{s as Be}from"../chunks/M1l1I-Ar.js";function At(e,t){return t}function F0(e,t,n){for(var l=e.items,a=[],r=t.length,o=0;o<r;o++)Xl(t[o].e,a,!0);var i=r>0&&a.length===0&&n!==null;if(i){var d=n.parentNode;Gl(d),d.append(n),l.clear(),Pe(e,t[0].prev,t[r-1].next)}Ul(a,()=>{for(var c=0;c<r;c++){var f=t[c];i||(l.delete(f.k),Pe(e,f.prev,f.next)),ot(f.e,!i)}})}function zt(e,t,n,l,a,r=null){var o=e,i={flags:t,items:new Map,first:null},d=(t&Ba)!==0;if(d){var c=e;o=ie?Ft(Pa(c)):c.appendChild(Nn())}ie&&wn();var f=null,b=!1,g=new Map,u=ye(()=>{var C=n();return Ea(C)?C:C==null?[]:$a(C)}),h,v;function M(){m0(v,h,i,g,o,a,t,l,n),r!==null&&(h.length===0?f?In(f):f=rt(()=>r(o)):f!==null&&Ra(f,()=>{f=null}))}Rt(()=>{v??=La,h=s(u);var C=h.length;if(b&&C===0)return;b=C===0;let _=!1;if(ie){var $=El(o)===Rl;$!==(C===0)&&(o=Vn(),Ft(o),Ke(!1),_=!0)}if(ie){for(var T=null,P,F=0;F<C;F++){if(Xe.nodeType===Ll&&Xe.data===Nl){o=Xe,_=!0,Ke(!1);break}var m=h[F],D=l(m,F);P=An(Xe,i,T,null,m,D,F,a,t,n),i.items.set(D,P),T=P}C>0&&Ft(Vn())}if(ie)C===0&&r&&(f=rt(()=>r(o)));else if(Il()){var I=new Set,A=at;for(F=0;F<C;F+=1){m=h[F],D=l(m,F);var O=i.items.get(D)??g.get(D);O?(t&(Lt|Nt))!==0&&qa(O,m,F,t):(P=An(null,i,null,null,m,D,F,a,t,n,!0),g.set(D,P)),I.add(D)}for(const[N,V]of i.items)I.has(N)||A.skipped_effects.add(V.e);A.add_callback(M)}else M();_&&Ke(!0),s(u)}),ie&&(o=Xe)}function m0(e,t,n,l,a,r,o,i,d){var c=(o&Hl)!==0,f=(o&(Lt|Nt))!==0,b=t.length,g=n.items,u=n.first,h=u,v,M=null,C,_=[],$=[],T,P,F,m;if(c)for(m=0;m<b;m+=1)T=t[m],P=i(T,m),F=g.get(P),F!==void 0&&(F.a?.measure(),(C??=new Set).add(F));for(m=0;m<b;m+=1){if(T=t[m],P=i(T,m),F=g.get(P),F===void 0){var D=l.get(P);if(D!==void 0){l.delete(P),g.set(P,D);var I=M?M.next:h;Pe(n,M,D),Pe(n,D,I),Kt(D,I,a),M=D}else{var A=h?h.e.nodes_start:a;M=An(A,n,M,M===null?n.first:M.next,T,P,m,r,o,d)}g.set(P,M),_=[],$=[],h=M.next;continue}if(f&&qa(F,T,m,o),(F.e.f&Wt)!==0&&(In(F.e),c&&(F.a?.unfix(),(C??=new Set).delete(F))),F!==h){if(v!==void 0&&v.has(F)){if(_.length<$.length){var O=$[0],N;M=O.prev;var V=_[0],te=_[_.length-1];for(N=0;N<_.length;N+=1)Kt(_[N],O,a);for(N=0;N<$.length;N+=1)v.delete($[N]);Pe(n,V.prev,te.next),Pe(n,M,V),Pe(n,te,O),h=O,M=te,m-=1,_=[],$=[]}else v.delete(F),Kt(F,h,a),Pe(n,F.prev,F.next),Pe(n,F,M===null?n.first:M.next),Pe(n,M,F),M=F;continue}for(_=[],$=[];h!==null&&h.k!==P;)(h.e.f&Wt)===0&&(v??=new Set).add(h),$.push(h),h=h.next;if(h===null)continue;F=h}_.push(F),M=F,h=F.next}if(h!==null||v!==void 0){for(var ne=v===void 0?[]:$a(v);h!==null;)(h.e.f&Wt)===0&&ne.push(h),h=h.next;var re=ne.length;if(re>0){var S=(o&Ba)!==0&&b===0?a:null;if(c){for(m=0;m<re;m+=1)ne[m].a?.measure();for(m=0;m<re;m+=1)ne[m].a?.fix()}F0(n,ne,S)}}c&&ql(()=>{if(C!==void 0)for(F of C)F.a?.apply()}),e.first=n.first&&n.first.e,e.last=M&&M.e;for(var z of l.values())ot(z.e);l.clear()}function qa(e,t,n,l){(l&Lt)!==0&&Zn(e.v,t),(l&Nt)!==0?Zn(e.i,n):e.i=n}function An(e,t,n,l,a,r,o,i,d,c,f){var b=(d&Lt)!==0,g=(d&Ol)===0,u=b?g?ee(a,!1,!1):Jn(a):a,h=(d&Nt)===0?o:Jn(o),v={i:h,v:u,k:r,a:null,e:null,prev:n,next:l};try{if(e===null){var M=document.createDocumentFragment();M.append(e=Nn())}return v.e=rt(()=>i(e,u,h,c),ie),v.e.prev=n&&n.e,v.e.next=l&&l.e,n===null?f||(t.first=v):(n.next=v,n.e.next=v.e),l!==null&&(l.prev=v,l.e.prev=v.e),v}finally{}}function Kt(e,t,n){for(var l=e.next?e.next.e.nodes_start:n,a=t?t.e.nodes_start:n,r=e.e.nodes_start;r!==null&&r!==l;){var o=Yl(r);a.before(r),r=o}}function Pe(e,t,n){t===null?e.first=n:(t.next=n,t.e.next=n&&n.e),n!==null&&(n.prev=t,n.e.prev=t&&t.e)}function M0(e,t,n,l,a,r){let o=ie;ie&&wn();var i,d,c=null;ie&&Xe.nodeType===jl&&(c=Xe,wn());var f=ie?Xe:e,b;Rt(()=>{const g=t()||null;var u=Zl;g!==i&&(b&&(g===null?Ra(b,()=>{b=null,d=null}):g===d?In(b):ot(b)),g&&g!==d&&(b=rt(()=>{if(c=ie?c:document.createElementNS(u,g),Jl(c,c),l){ie&&Al(g)&&c.append(document.createComment(""));var h=ie?Pa(c):c.appendChild(Nn());ie&&(h===null?Ke(!1):Ft(h)),l(c,h)}La.nodes_end=c,f.before(c)})),i=g,i&&(d=i))},Vl),o&&(Ke(!0),Ft(f))}function y0(e,t){var n=void 0,l;Rt(()=>{n!==(n=t())&&(l&&(ot(l),l=null),n&&(l=rt(()=>{Na(()=>n(e))})))})}function Ha(e){var t,n,l="";if(typeof e=="string"||typeof e=="number")l+=e;else if(typeof e=="object")if(Array.isArray(e)){var a=e.length;for(t=0;t<a;t++)e[t]&&(n=Ha(e[t]))&&(l&&(l+=" "),l+=n)}else for(n in e)e[n]&&(l&&(l+=" "),l+=n);return l}function x0(){for(var e,t,n=0,l="",a=arguments.length;n<a;n++)(e=arguments[n])&&(t=Ha(e))&&(l&&(l+=" "),l+=t);return l}function k0(e){return typeof e=="object"?x0(e):e??""}const Kn=[...` 	
\r\f \v\uFEFF`];function C0(e,t,n){var l=e==null?"":""+e;if(t&&(l=l?l+" "+t:t),n){for(var a in n)if(n[a])l=l?l+" "+a:a;else if(l.length)for(var r=a.length,o=0;(o=l.indexOf(a,o))>=0;){var i=o+r;(o===0||Kn.includes(l[o-1]))&&(i===l.length||Kn.includes(l[i]))?l=(o===0?"":l.substring(0,o))+l.substring(i+1):o=i}}return l===""?null:l}function Qn(e,t=!1){var n=t?" !important;":";",l="";for(var a in e){var r=e[a];r!=null&&r!==""&&(l+=" "+a+": "+r+n)}return l}function Qt(e){return e[0]!=="-"||e[1]!=="-"?e.toLowerCase():e}function _0(e,t){if(t){var n="",l,a;if(Array.isArray(t)?(l=t[0],a=t[1]):l=t,e){e=String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();var r=!1,o=0,i=!1,d=[];l&&d.push(...Object.keys(l).map(Qt)),a&&d.push(...Object.keys(a).map(Qt));var c=0,f=-1;const v=e.length;for(var b=0;b<v;b++){var g=e[b];if(i?g==="/"&&e[b-1]==="*"&&(i=!1):r?r===g&&(r=!1):g==="/"&&e[b+1]==="*"?i=!0:g==='"'||g==="'"?r=g:g==="("?o++:g===")"&&o--,!i&&r===!1&&o===0){if(g===":"&&f===-1)f=b;else if(g===";"||b===v-1){if(f!==-1){var u=Qt(e.substring(c,f).trim());if(!d.includes(u)){g!==";"&&b++;var h=e.substring(c,b).trim();n+=" "+h+";"}}c=b+1,f=-1}}}}return l&&(n+=Qn(l)),a&&(n+=Qn(a,!0)),n=n.trim(),n===""?null:n}return e==null?null:String(e)}function Ee(e,t,n,l,a,r){var o=e.__className;if(ie||o!==n||o===void 0){var i=C0(n,l,r);(!ie||i!==e.getAttribute("class"))&&(i==null?e.removeAttribute("class"):t?e.className=i:e.setAttribute("class",i)),e.__className=n}else if(r&&a!==r)for(var d in r){var c=!!r[d];(a==null||c!==!!a[d])&&e.classList.toggle(d,c)}return r}function en(e,t={},n,l){for(var a in n){var r=n[a];t[a]!==r&&(n[a]==null?e.style.removeProperty(a):e.style.setProperty(a,r,l))}}function je(e,t,n,l){var a=e.__style;if(ie||a!==t){var r=_0(t,l);(!ie||r!==e.getAttribute("style"))&&(r==null?e.removeAttribute("style"):e.style.cssText=r),e.__style=t}else l&&(Array.isArray(l)?(en(e,n?.[0],l[0]),en(e,n?.[1],l[1],"important")):en(e,n,l));return l}function zn(e,t,n=!1){if(e.multiple){if(t==null)return;if(!Ea(t))return Wl();for(var l of e.options)l.selected=t.includes(ea(l));return}for(l of e.options){var a=ea(l);if(Kl(a,t)){l.selected=!0;return}}(!n||t!==void 0)&&(e.selectedIndex=-1)}function w0(e){var t=new MutationObserver(()=>{zn(e,e.__value)});t.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),Ql(()=>{t.disconnect()})}function ea(e){return"__value"in e?e.__value:e.value}const gt=Symbol("class"),bt=Symbol("style"),Ya=Symbol("is custom element"),Xa=Symbol("is html");function Ga(e){if(ie){var t=!1,n=()=>{if(!t){if(t=!0,e.hasAttribute("value")){var l=e.value;he(e,"value",null),e.value=l}if(e.hasAttribute("checked")){var a=e.checked;he(e,"checked",null),e.checked=a}}};e.__on_r=n,i0(n),s0()}}function T0(e,t){t?e.hasAttribute("selected")||e.setAttribute("selected",""):e.removeAttribute("selected")}function he(e,t,n,l){var a=Ua(e);ie&&(a[t]=e.getAttribute(t),t==="src"||t==="srcset"||t==="href"&&e.nodeName==="LINK")||a[t]!==(a[t]=n)&&(t==="loading"&&(e[d0]=n),n==null?e.removeAttribute(t):typeof n!="string"&&ja(e).includes(t)?e[t]=n:e.setAttribute(t,n))}function A0(e,t,n,l,a=!1,r=!1){if(ie&&a&&e.tagName==="INPUT"){var o=e,i=o.type==="checkbox"?"defaultChecked":"defaultValue";i in n||Ga(o)}var d=Ua(e),c=d[Ya],f=!d[Xa];let b=ie&&c;b&&Ke(!1);var g=t||{},u=e.tagName==="OPTION";for(var h in t)h in n||(n[h]=null);n.class?n.class=k0(n.class):n[gt]&&(n.class=null),n[bt]&&(n.style??=null);var v=ja(e);for(const F in n){let m=n[F];if(u&&F==="value"&&m==null){e.value=e.__value="",g[F]=m;continue}if(F==="class"){var M=e.namespaceURI==="http://www.w3.org/1999/xhtml";Ee(e,M,m,l,t?.[gt],n[gt]),g[F]=m,g[gt]=n[gt];continue}if(F==="style"){je(e,m,t?.[bt],n[bt]),g[F]=m,g[bt]=n[bt];continue}var C=g[F];if(!(m===C&&!(m===void 0&&e.hasAttribute(F)))){g[F]=m;var _=F[0]+F[1];if(_!=="$$")if(_==="on"){const D={},I="$$"+F;let A=F.slice(2);var $=Pl(A);if(zl(A)&&(A=A.slice(0,-7),D.capture=!0),!$&&C){if(m!=null)continue;e.removeEventListener(A,g[I],D),g[I]=null}if(m!=null)if($)e[`__${A}`]=m,Sl([A]);else{let O=function(N){g[F].call(this,N)};g[I]=Dl(A,e,O,D)}else $&&(e[`__${A}`]=void 0)}else if(F==="style")he(e,F,m);else if(F==="autofocus")r0(e,!!m);else if(!c&&(F==="__value"||F==="value"&&m!=null))e.value=e.__value=m;else if(F==="selected"&&u)T0(e,m);else{var T=F;f||(T=Bl(T));var P=T==="defaultValue"||T==="defaultChecked";if(m==null&&!c&&!P)if(d[F]=null,T==="value"||T==="checked"){let D=e;const I=t===void 0;if(T==="value"){let A=D.defaultValue;D.removeAttribute(T),D.defaultValue=A,D.value=D.__value=I?A:null}else{let A=D.defaultChecked;D.removeAttribute(T),D.defaultChecked=A,D.checked=I?A:!1}}else e.removeAttribute(F);else P||v.includes(T)&&(c||typeof m!="string")?(e[T]=m,T in d&&(d[T]=o0)):typeof m!="function"&&he(e,T,m)}}}return b&&Ke(!0),g}function ta(e,t,n=[],l=[],a,r=!1,o=!1){e0(n,l,i=>{var d=void 0,c={},f=e.nodeName==="SELECT",b=!1;if(Rt(()=>{var u=t(...i.map(s)),h=A0(e,d,u,a,r,o);b&&f&&"value"in u&&zn(e,u.value);for(let M of Object.getOwnPropertySymbols(c))u[M]||ot(c[M]);for(let M of Object.getOwnPropertySymbols(u)){var v=u[M];M.description===a0&&(!d||v!==d[M])&&(c[M]&&ot(c[M]),c[M]=rt(()=>y0(e,()=>v))),h[M]=v}d=h}),f){var g=e;Na(()=>{zn(g,d.value,!0),w0(g)})}b=!0})}function Ua(e){return e.__attributes??={[Ya]:e.nodeName.includes("-"),[Xa]:e.namespaceURI===t0}}var na=new Map;function ja(e){var t=e.getAttribute("is")||e.nodeName,n=na.get(t);if(n)return n;na.set(t,n=[]);for(var l,a=e,r=Element.prototype;r!==a;){l=l0(a);for(var o in l)l[o].set&&n.push(o);a=n0(a)}return n}function z0(e,t,n=t){var l=new WeakSet;u0(e,"input",async a=>{var r=a?e.defaultValue:e.value;if(r=tn(e)?nn(r):r,n(r),at!==null&&l.add(at),await Ia(),r!==(r=t())){var o=e.selectionStart,i=e.selectionEnd;e.value=r??"",i!==null&&(e.selectionStart=o,e.selectionEnd=Math.min(i,e.value.length))}}),(ie&&e.defaultValue!==e.value||U(t)==null&&e.value)&&(n(tn(e)?nn(e.value):e.value),at!==null&&l.add(at)),c0(()=>{var a=t();if(e===document.activeElement){var r=f0??at;if(l.has(r))return}tn(e)&&a===nn(e.value)||e.type==="date"&&!a&&!e.value||a!==e.value&&(e.value=a??"")})}function tn(e){var t=e.type;return t==="number"||t==="range"}function nn(e){return e===""?null:+e}const D0=`Part,Color,Quantity,Is Spare
3070b,0,4,False
25269,0,12,False
3710,212,6,False
3070b,212,10,False
25269,212,20,False
3070b,191,10,False
98138,191,6,False
25269,191,20,False
3070b,226,4,False
27925,226,4,False
25269,226,8,False
6215,272,1,False
11211,272,3,False
3023,272,6,False
3036,272,1,False
3070b,272,10,False
98138,272,6,False
25269,272,20,False
3710,85,6,False
3070b,320,10,False
98138,320,6,False
25269,320,20,False
3070b,3,10,False
98138,3,6,False
25269,3,20,False
3070b,31,10,False
98138,31,6,False
25269,31,20,False
37452,323,1,False
3710,323,6,False
3070b,323,10,False
98138,323,6,False
25269,323,20,False
22885,71,6,False
60470b,71,2,False
32803,71,2,False
3070b,71,10,False
98138,71,6,False
25269,71,20,False
98138,1055,14,False
25269,1059,20,False
78169,297,1,False
3036,19,1,False
30565,19,2,False
25269,41,20,False
3004,15,2,False
3245c,15,19,False
3009,15,8,False
33243,15,2,False
3666,15,4,False
3036,15,1,False
41948,15,1,False
30565,15,2,False
48336,15,2,False
87580,15,1,False
15068,15,2,False
3070b,15,10,False
3069b,15,2,False
4162,15,2,False
25269,15,40,False
1748,15,8,False
`,S0=`Part,Color,Quantity,Is Spare
98138,0,2,False
24246,0,1,False
98138pr0107,0,6,False
3070b,226,12,False
25269,226,18,False
3070b,29,12,False
98138,29,2,False
25269,29,19,False
54200,72,2,False
25269,72,9,False
22885,5,9,False
24246,5,1,False
25269,5,1,False
3070b,31,12,False
25269,31,18,False
37452,323,3,False
3023,323,9,False
3070b,323,12,False
3068b,323,3,False
25269,323,18,False
3005,71,8,False
2357,71,4,False
3031,71,5,False
41740,71,1,False
35464,71,2,False
3069b,71,2,False
2431,71,1,False
25269,71,20,False
901957,322,1,False
3070b,322,12,False
25269,322,18,False
49307,84,2,False
15573,84,3,False
54200,84,2,False
25269,84,12,False
3005,19,8,False
2357,19,4,False
3031,19,5,False
41740,19,1,False
3069b,19,2,False
2431,19,1,False
25269,19,18,False
901956,47,1,False
3005,15,8,False
2357,15,4,False
49307,15,4,False
3031,15,5,False
15573,15,4,False
41740,15,1,False
3069b,15,2,False
2431,15,1,False
98138,15,26,False
24246,15,4,False
25269,15,34,False
3070b,14,12,False
25269,14,18,False
`,B0=`Part,Color,Quantity,Is Spare
3070b,0,20,False
24246,0,20,False
25269,0,20,False
3070b,1,30,False
98138,1,30,False
24246,1,30,False
25269,1,30,False
3070b,10,20,False
3070b,226,20,False
3070b,1050,30,False
98138,1050,30,False
24246,1050,30,False
25269,1050,30,False
98138,272,20,False
25269,272,20,False
3070b,288,20,False
3070b,85,20,False
24246,85,20,False
25269,85,20,False
3070b,3,30,False
98138,3,30,False
24246,3,30,False
25269,3,30,False
98138,31,20,False
25269,31,20,False
98138,323,20,False
25269,323,20,False
3070b,26,20,False
25269,26,20,False
3070b,322,20,False
25269,322,20,False
98138,25,20,False
25269,25,20,False
98138,4,20,False
25269,4,20,False
3070b,378,20,False
3070b,15,20,False
24246,15,20,False
25269,15,20,False
3070b,14,30,False
98138,14,30,False
24246,14,30,False
25269,14,30,False
25269,158,20,False
`,P0=`Part,Color,Quantity,Is Spare
27925,10,16,False
98138,10,4,False
3070b,191,30,False
25269,191,12,False
3070b,29,30,False
25269,29,12,False
3070b,321,70,False
27925,321,16,False
98138,321,4,False
27925,31,16,False
98138,31,4,False
3070b,323,30,False
27925,323,16,False
25269,323,12,False
3070b,322,30,False
25269,322,12,False
98138,1055,30,False
98138,1053,30,False
3070b,4,80,False
27925,4,16,False
98138,4,4,False
25269,4,30,False
3070b,1062,80,False
27925,1062,16,False
98138,1062,30,False
25269,1062,30,False
27925,14,16,False
98138,14,4,False
3070b,158,30,False
25269,158,12,False
`,$0=`Part,Color,Quantity,Is Spare
3070b,10,22,False
25269,10,16,False
3070b,191,20,False
98138,191,20,False
25269,191,12,False
79759c01,226,1,False
3070b,226,12,False
98138,226,20,False
25269,226,10,False
79759c01,29,1,False
3070b,1050,14,False
98138,1050,20,False
25269,1050,22,False
3070b,321,22,False
98138,321,20,False
25269,321,30,False
79759c01,272,1,False
3070b,272,12,False
25269,272,10,False
79759c01,3,1,False
78169,3,1,False
98138,31,20,False
25269,31,22,False
98138,26,20,False
25269,26,12,False
901957,322,1,False
98138,1060,20,False
79759c01,25,1,False
901956,47,1,False
3070b,15,24,False
98138,15,30,False
24246,15,8,False
25269,15,32,False
`,E0=`Part,Color,Quantity,Is Spare
3956,0,2,False
3245c,0,11,False
3010,0,4,False
3009,0,8,False
2357,0,4,False
18653,0,8,False
33243,0,2,False
32952,0,2,False
11610,0,2,False
66821,0,1,False
4477,0,6,False
3623,0,4,False
91405,0,1,False
3035,0,2,False
3027,0,1,False
3070b,0,30,False
2431,0,1,False
4162,0,3,False
98138,0,20,False
25269,0,40,False
2357,1,8,False
30414,1,8,False
25269,10,36,False
80390,226,1,False
3666,226,2,False
3460,226,2,False
41539,226,1,False
41948,226,2,False
22888,226,2,False
35044,226,4,False
3070b,226,25,False
25269,226,36,False
79759c01,29,1,False
3070b,29,25,False
25269,29,36,False
3030,1050,8,False
35044,1050,4,False
3070b,1050,25,False
98138,1050,20,False
25269,1050,36,False
25269,321,36,False
25269,288,36,False
25269,85,36,False
79996,3,1,False
3070b,3,25,False
25269,3,36,False
98138,117,20,False
73767,31,1,False
3623,31,8,False
2420,31,4,False
3795,31,6,False
3027,31,1,False
92438,31,2,False
35044,31,4,False
3070b,31,25,False
98138,31,20,False
25269,31,36,False
3032,323,1,False
6003,323,2,False
18674,323,2,False
3070b,323,25,False
98138,323,22,False
25269,323,36,False
25269,26,36,False
3666,322,6,False
3460,322,4,False
78169,322,1,False
3004,30,4,False
3009,30,6,False
2357,30,4,False
79998,30,2,False
3660,30,8,False
96874,25,1,False
25269,4,36,False
22886,15,2,False
49311,15,6,False
3009,15,2,False
3008,15,2,False
22885,15,13,False
3070b,15,30,False
98138,15,20,False
25269,15,40,False
3010,14,4,False
3008,14,6,False
48092,14,8,False
25269,14,36,False
`,R0=`id,name,rgb,is_trans,num_parts,num_sets,y1,y2
-1,[Unknown],0033B2,False,17,2,2000,2000
0,Black,05131D,False,772634,214164,1957,2025
1,Blue,0055BF,False,197271,47669,1949,2025
2,Green,237841,False,84027,24961,1949,2025
3,Dark Turquoise,008F9B,False,20927,5528,1998,2025
4,Red,C91A09,False,302027,90126,1949,2025
5,Dark Pink,C870A0,False,14016,4440,2003,2025
6,Brown,583927,False,9554,3781,1974,2006
7,Light Gray,9BA19D,False,92789,25153,1954,2006
8,Dark Gray,6D6E5C,False,22432,7789,1978,2008
9,Light Blue,B4D2E3,False,42,33,1995,2007
10,Bright Green,4B9F4A,False,23584,7342,1949,2025
11,Light Turquoise,55A5AF,False,136,74,1998,2004
12,Salmon,F2705E,False,185,115,1997,2000
13,Pink,FC97AC,False,477,246,1994,2005
14,Yellow,F2CD37,False,203681,67948,1949,2025
15,White,FFFFFF,False,479524,140603,1949,2025
17,Light Green,C2DAB8,False,165,124,1992,2005
18,Light Yellow,FBE696,False,340,187,1994,2005
19,Tan,E4CD9E,False,174166,41652,1982,2025
20,Light Violet,C9CAE2,False,182,124,1994,2002
21,Glow In Dark Opaque,D4D5C9,False,209,151,1990,2006
22,Purple,81007B,False,1005,318,1997,2005
23,Dark Blue-Violet,2032B0,False,9,9,2004,2006
25,Orange,FE8A18,False,50359,16486,1997,2025
26,Magenta,923978,False,12485,4423,2000,2025
27,Lime,BBE90B,False,41418,13650,1997,2025
28,Dark Tan,958A73,False,62677,15082,2000,2025
29,Bright Pink,E4ADC8,False,16522,5257,2003,2025
30,Medium Lavender,AC78BA,False,8747,2984,2011,2025
31,Lavender,E1D5ED,False,7487,2043,2011,2025
32,Trans-Black IR Lens,635F52,True,0,0,,
33,Trans-Dark Blue,0020A0,True,10462,3233,1965,2025
34,Trans-Green,84B68D,True,5196,2208,1969,2025
35,Trans-Bright Green,D9E4A7,True,3424,1216,2010,2025
36,Trans-Red,C91A09,True,19791,6920,1969,2025
40,Trans-Brown,635F52,True,8653,3006,1999,2025
41,Trans-Light Blue,AEEFEC,True,30707,8869,1985,2025
42,Trans-Neon Green,F8F184,True,6797,2335,1990,2024
43,Trans-Very Lt Blue,C1DFF0,True,232,76,2003,2006
45,Trans-Dark Pink,DF6695,True,5527,1881,1998,2025
46,Trans-Yellow,F5CD2F,True,12810,4305,1969,2025
47,Trans-Clear,FCFCFC,True,43833,14160,1954,2025
52,Trans-Purple,A5A5CB,True,2920,827,2000,2025
54,Trans-Neon Yellow,DAB000,True,187,57,2001,2005
57,Trans-Neon Orange,FF800D,True,5603,1946,1993,2024
60,Chrome Antique Brass,645A4C,False,33,16,2001,2005
61,Chrome Blue,6C96BF,False,26,16,1998,2006
62,Chrome Green,3CB371,False,2,2,1999,1999
63,Chrome Pink,AA4D8E,False,19,12,2001,2018
64,Chrome Black,1B2A34,False,10,10,2008,2020
68,Very Light Orange,F3CF9B,False,16,16,2000,2002
69,Light Purple,CD6298,False,102,38,2003,2006
70,Reddish Brown,582A12,False,155471,44426,2003,2025
71,Light Bluish Gray,A0A5A9,False,473580,124076,2002,2025
72,Dark Bluish Gray,6C6E68,False,342789,96002,1999,2025
73,Medium Blue,5A93DB,False,13238,3480,1997,2025
74,Medium Green,73DCA1,False,569,307,1994,2005
75,Speckle Black-Copper,05131D,False,10,7,2006,2006
76,Speckle DBGray-Silver,6C6E68,False,12,9,2006,2006
77,Light Pink,FECCCF,False,184,81,1991,1994
78,Light Nougat,F6D7B3,False,9948,5491,2004,2025
79,Milky White,FFFFFF,False,238,157,1963,2008
80,Metallic Silver,A5A9B4,False,3839,1256,1998,2025
81,Metallic Green,899B5F,False,23,13,2001,2001
82,Metallic Gold,DBAC34,False,2595,650,1997,2025
84,Medium Nougat,AA7D55,False,35357,10164,2010,2025
85,Dark Purple,3F3691,False,15915,5583,2000,2025
86,Light Brown,7C503A,False,167,100,2002,2006
89,Royal Blue,4C61DB,False,190,67,2004,2005
92,Nougat,D09168,False,2667,1080,1979,2025
100,Light Salmon,FEBABD,False,180,111,1997,2002
110,Violet,4354A3,False,194,122,1992,2008
112,Medium Bluish Violet,6874CA,False,59,52,1999,2005
114,Glitter Trans-Dark Pink,DF6695,True,234,50,1999,2024
115,Medium Lime,C7D23C,False,192,105,1998,2005
117,Glitter Trans-Clear,FFFFFF,True,230,38,1999,2023
118,Aqua,B3D7D1,False,325,133,1998,2018
120,Light Lime,D9E4A7,False,28,20,1998,2007
125,Light Orange,F9BA61,False,66,46,1998,2004
129,Glitter Trans-Purple,A5A5CB,True,169,74,2000,2025
132,Speckle Black-Silver,05131D,False,244,91,2005,2013
133,Speckle Black-Gold,05131D,False,5,5,2010,2011
134,Copper,AE7A59,False,191,44,2004,2008
135,Pearl Light Gray,9CA3A8,False,5488,2388,2000,2011
137,Pearl Sand Blue,7988A1,False,171,77,2000,2006
142,Pearl Light Gold,DCBC81,False,28,27,2000,2005
143,Trans-Medium Blue,CFE2F7,True,704,250,2001,2018
148,Pearl Dark Gray,575857,False,532,281,2001,2010
150,Pearl Very Light Gray,ABADAC,False,40,29,2000,2004
151,Very Light Bluish Gray,E6E3E0,False,283,152,1998,2013
158,Yellowish Green,DFEEA5,False,3201,972,2012,2025
178,Flat Dark Gold,B48455,False,141,113,2002,2006
179,Flat Silver,898788,False,21680,8145,2009,2025
182,Trans-Orange,F08F1C,True,14777,4737,2002,2025
183,Pearl White,F2F3F2,False,46,19,2003,2021
191,Bright Light Orange,F8BB3D,False,27664,9264,2003,2025
212,Bright Light Blue,9FC3E9,False,7616,2326,2004,2025
216,Rust,B31004,False,31,17,1989,2001
226,Bright Light Yellow,FFF03A,False,10777,3340,2004,2025
230,Trans-Pink,E4ADC8,True,435,182,2003,2025
232,Sky Blue,7DBFDD,False,131,62,2003,2007
236,Trans-Light Purple,96709F,True,71,37,2000,2006
272,Dark Blue,0A3463,False,48637,13870,1999,2025
288,Dark Green,184632,False,22510,5438,1999,2025
294,Glow In Dark Trans,BDC6AD,True,131,43,2005,2011
297,Pearl Gold,AA7F2E,False,46803,13941,2004,2025
308,Dark Brown,352100,False,22029,6189,2008,2025
313,Maersk Blue,3592C3,False,469,101,1974,2006
320,Dark Red,720E0F,False,45671,11570,2001,2025
321,Dark Azure,078BC9,False,14491,5064,2011,2025
322,Medium Azure,36AEBF,False,25010,8957,2012,2025
323,Light Aqua,ADC3C0,False,9837,2871,2011,2025
326,Olive Green,9B9A5A,False,10503,2278,2010,2025
334,Chrome Gold,BBA53D,False,2171,838,1989,2025
335,Sand Red,D67572,False,603,51,2001,2004
351,Medium Dark Pink,F785B1,False,1092,574,1994,2005
366,Earth Orange,FA9C1C,False,170,132,1982,2005
373,Sand Purple,845E84,False,73,21,2001,2003
378,Sand Green,A0BCAC,False,22605,4607,2000,2025
379,Sand Blue,6074A1,False,9511,2613,2001,2025
383,Chrome Silver,E0E0E0,False,1325,625,1977,2025
450,Fabuland Brown,B67B50,False,55,43,1979,1991
462,Medium Orange,FFA70B,False,494,284,1996,2008
484,Dark Orange,A95500,False,23859,7216,1994,2025
503,Very Light Gray,E6E3DA,False,259,49,1997,2004
1000,Glow in Dark White,D9D9D9,False,643,178,2011,2025
1001,Medium Violet,9391E4,False,11,11,2000,2005
1002,Glitter Trans-Neon Green,C0F500,True,9,8,2015,2018
1003,Glitter Trans-Light Blue,68BCC5,True,91,43,2015,2024
1004,Trans-Flame Yellowish Orange,FCB76D,True,214,82,2003,2006
1005,Trans-Fire Yellow,FBE890,True,41,16,2003,2006
1006,Trans-Light Royal Blue,B4D4F7,True,90,48,2005,2005
1007,Reddish Lilac,8E5597,False,49,22,2004,2005
1008,Vintage Blue,039CBD,False,24,4,1949,1949
1009,Vintage Green,1E601E,False,32,8,1949,1949
1010,Vintage Red,CA1F08,False,31,8,1949,1949
1011,Vintage Yellow,F3C305,False,24,4,1949,1949
1012,Fabuland Orange,EF9121,False,5,3,1983,1987
1013,Modulex White,F4F4F4,False,2998,758,1963,1963
1014,Modulex Light Bluish Gray,AfB5C7,False,10,10,1963,1963
1015,Modulex Light Gray,9C9C9C,False,2249,62,1963,1963
1016,Modulex Charcoal Gray,595D60,False,2,2,1963,1963
1017,Modulex Tile Gray,6B5A5A,False,219,218,1963,1963
1018,Modulex Black,4D4C52,False,2499,310,1963,1963
1019,Modulex Tile Brown,330000,False,158,157,1963,1963
1020,Modulex Terracotta,5C5030,False,1622,38,1963,1963
1021,Modulex Brown,907450,False,2223,36,1963,1963
1022,Modulex Buff,DEC69C,False,1626,42,1963,1963
1023,Modulex Red,B52C20,False,26,26,1963,1963
1024,Modulex Pink Red,F45C40,False,7,7,1963,1963
1025,Modulex Orange,F47B30,False,26,25,1963,1963
1026,Modulex Light Orange,F7AD63,False,7,7,1963,1963
1027,Modulex Light Yellow,FFE371,False,8,8,1963,1963
1028,Modulex Ochre Yellow,FED557,False,1107,18,1963,1963
1029,Modulex Lemon,BDC618,False,23,23,1963,1963
1030,Modulex Pastel Green,7DB538,False,35,34,1963,1963
1031,Modulex Olive Green,7C9051,False,1111,21,1963,1963
1032,Modulex Aqua Green,27867E,False,16,16,1963,1963
1033,Modulex Teal Blue,467083,False,1104,15,1963,1963
1034,Modulex Tile Blue,0057A6,False,80,79,1963,1963
1035,Modulex Medium Blue,61AFFF,False,7,7,1963,1963
1036,Modulex Pastel Blue,68AECE,False,19,19,1963,1963
1037,Modulex Violet,BD7D85,False,7,7,1963,1963
1038,Modulex Pink,F785B1,False,18,18,1963,1963
1039,Modulex Clear,FFFFFF,False,1394,71,1963,1963
1040,Modulex Foil Dark Gray,595D60,False,0,0,,
1041,Modulex Foil Light Gray,9C9C9C,False,0,0,,
1042,Modulex Foil Dark Green,006400,False,0,0,,
1043,Modulex Foil Light Green,7DB538,False,0,0,,
1044,Modulex Foil Dark Blue,0057A6,False,0,0,,
1045,Modulex Foil Light Blue,68AECE,False,0,0,,
1046,Modulex Foil Violet,4B0082,False,0,0,,
1047,Modulex Foil Red,8B0000,False,0,0,,
1048,Modulex Foil Yellow,FED557,False,0,0,,
1049,Modulex Foil Orange,F7AD63,False,0,0,,
1050,Coral,FF698F,False,6975,1620,2019,2025
1051,Pastel Blue,5AC4DA,False,734,101,2000,2011
1052,Glitter Trans-Orange,F08F1C,True,1,1,2020,2020
1053,Opal Trans-Light Blue,68BCC5,True,827,224,2020,2025
1054,Opal Trans-Dark Pink,CE1D9B,True,133,64,2020,2025
1055,Opal Trans-Clear,FCFCFC,True,711,141,2020,2025
1056,Opal Trans-Brown,583927,True,140,16,2020,2023
1057,Trans-Light Bright Green,C9E788,True,119,48,2003,2006
1058,Trans-Light Green,94E5AB,True,42,16,2005,2006
1059,Opal Trans-Purple,8320B7,True,275,91,2020,2025
1060,Opal Trans-Bright Green,84B68D,True,131,21,2021,2025
1061,Opal Trans-Dark Blue,0020A0,True,209,52,2021,2025
1062,Vibrant Yellow,EBD800,False,1874,577,2022,2025
1063,Pearl Copper,B46A00,False,72,45,2017,2020
1064,Fabuland Red,FF8014,False,23,16,1979,1994
1065,Reddish Gold,AC8247,False,79,68,2002,2006
1066,Curry,DD982E,False,10,6,2004,2005
1067,Dark Nougat,AD6140,False,10,10,2001,2004
1068,Bright Reddish Orange,EE5434,False,16,13,2003,2004
1069,Pearl Red,D60026,False,24,14,2003,2006
1070,Pearl Blue,0059A3,False,21,16,2003,2009
1071,Pearl Green,008E3C,False,21,15,2003,2006
1072,Pearl Brown,57392C,False,35,17,2003,2006
1073,Pearl Black,0A1327,False,35,19,2000,2006
1074,Duplo Blue,009ECE,False,6,6,2003,2004
1075,Duplo Medium Blue,3E95B6,False,1,1,2004,2004
1076,Duplo Lime,FFF230,False,5,3,1992,1992
1077,Fabuland Lime,78FC78,False,16,15,1982,1986
1078,Duplo Medium Green,468A5F,False,1,1,2003,2003
1079,Duplo Light Green,60BA76,False,1,1,2004,2004
1080,Light Tan,F3C988,False,1,1,2006,2006
1081,Rust Orange,872B17,False,3,3,2004,2005
1082,Clikits Pink,FE78B0,False,32,10,2006,2006
1083,Two-tone Copper,945148,False,2,2,2001,2001
1084,Two-tone Gold,AB673A,False,6,6,2002,2002
1085,Two-tone Silver,737271,False,6,6,2002,2002
1086,Pearl Lime,6A7944,False,41,39,2002,2004
1087,Duplo Pink,FF879C,False,47,21,1992,1993
1088,Medium Brown,755945,False,181,180,2022,2025
1089,Warm Tan,CCA373,False,375,324,2022,2025
1090,Duplo Turquoise,3FB69E,False,2,2,2003,2003
1091,Warm Yellowish Orange,FFCB78,False,19,19,2004,2004
1092,Metallic Copper,764D3B,False,52,18,2008,2012
1093,Light Lilac,9195CA,False,51,19,2003,2011
1094,Trans-Medium Purple,8D73B3,False,258,92,2003,2006
1095,Trans-Black,635F52,True,807,158,2023,2025
1096,Glitter Trans-Bright Green,D9E4A7,True,0,0,,
1097,Glitter Trans-Medium Purple,8D73B3,True,6,3,2005,2005
1098,Glitter Trans-Green,84B68D,True,1,1,2000,2000
1099,Glitter Trans-Pink,E4ADC8,True,2,1,2005,2005
1100,Clikits Yellow,FFCF0B,False,22,6,2003,2004
1101,Duplo Dark Purple,5F27AA,False,1,1,2003,2003
1102,Trans-Neon Red,FF0040,True,22,9,2001,2004
1103,Pearl Titanium,3E3C39,False,7219,3149,2010,2025
1104,HO Aqua,B3D7D1,False,1,1,1958,1958
1105,HO Azure,1591cb,False,1,1,1963,1963
1106,HO Blue-gray,354e5a,False,3,3,1958,1970
1107,HO Cyan,5b98b3,False,1,1,1958,1958
1108,HO Dark Aqua,a7dccf,False,1,1,1958,1958
1109,HO Dark Blue,0A3463,False,9,9,1958,1965
1110,HO Dark Gray,6D6E5C,False,11,11,1961,1964
1111,HO Dark Green,184632,False,4,4,1958,1964
1112,HO Dark Lime,b2b955,False,1,1,1958,1958
1113,HO Dark Red,631314,False,10,10,1958,1964
1114,HO Dark Sand Green,627a62,False,1,1,1958,1958
1115,HO Dark Turquoise,10929d,False,1,1,1965,1965
1116,HO Earth Orange,bb771b,False,2,2,1957,1958
1117,HO Gold,b4a774,False,1,1,1958,1958
1118,HO Light Aqua,a3d1c0,False,1,1,1958,1958
1119,HO Light Brown,965336,False,1,1,1957,1957
1120,HO Light Gold,cdc298,False,2,2,1957,1958
1121,HO Light Tan,f9f1c7,False,4,4,1958,1964
1122,HO Light Yellow,f5fab7,False,1,1,1958,1958
1123,HO Medium Blue,7396c8,False,2,2,1958,1958
1124,HO Medium Red,c01111,False,4,4,1957,1958
1125,HO Metallic Blue,0d4763,False,3,3,1958,1961
1126,HO Metallic Dark Gray,5e5e5e,False,2,2,1958,1959
1127,HO Metallic Green,879867,False,1,1,1958,1958
1128,HO Metallic Sand Blue,5f7d8c,False,1,1,1958,1958
1129,HO Olive Green,9B9A5A,False,12,12,1957,1965
1130,HO Rose,d06262,False,1,1,1958,1958
1131,HO Sand Blue,6e8aa6,False,3,3,1957,1965
1132,HO Sand Green,A0BCAC,False,3,3,1958,1964
1133,HO Tan,E4CD9E,False,3,3,1957,1964
1134,HO Titanium,616161,False,1,1,1958,1958
1135,Metal,A5ADB4,False,54,29,1957,2021
1136,Reddish Orange,CA4C0B,False,2393,520,2024,2025
1137,Sienna Brown,915C3C,False,48,48,2024,2025
1138,Umber Brown,5E3F33,False,11,11,2024,2025
1139,Opal Trans-Yellow,F5CD2F,True,15,10,2024,2025
1140,Neon Orange,EC4612,False,8,3,1999,1999
1141,Neon Green,D2FC43,False,13,7,1999,1999
1142,Dark Olive Green,5d5c36,False,11,2,2000,2001
1143,Glitter Milky White,FFFFFF,False,4,4,1999,2005
1144,Chrome Red,CE3021,False,4,4,2003,2009
1145,Ochre Yellow,DD9E47,False,3,3,2025,2025
9999,[No Color/Any Color],05131D,False,9577,9349,1955,2025
`,Va=(e,t)=>{if(typeof e=="number"){if(t===3)return{mode:"rgb",r:(e>>8&15|e>>4&240)/255,g:(e>>4&15|e&240)/255,b:(e&15|e<<4&240)/255};if(t===4)return{mode:"rgb",r:(e>>12&15|e>>8&240)/255,g:(e>>8&15|e>>4&240)/255,b:(e>>4&15|e&240)/255,alpha:(e&15|e<<4&240)/255};if(t===6)return{mode:"rgb",r:(e>>16&255)/255,g:(e>>8&255)/255,b:(e&255)/255};if(t===8)return{mode:"rgb",r:(e>>24&255)/255,g:(e>>16&255)/255,b:(e>>8&255)/255,alpha:(e&255)/255}}},L0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},N0=e=>Va(L0[e.toLowerCase()],6),I0=/^#?([0-9a-f]{8}|[0-9a-f]{6}|[0-9a-f]{4}|[0-9a-f]{3})$/i,O0=e=>{let t;return(t=e.match(I0))?Va(parseInt(t[1],16),t[1].length):void 0},Ge="([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)",mt=`${Ge}%`,On=`(?:${Ge}%|${Ge})`,q0=`(?:${Ge}(deg|grad|rad|turn)|${Ge})`,it="\\s*,\\s*",H0=new RegExp(`^rgba?\\(\\s*${Ge}${it}${Ge}${it}${Ge}\\s*(?:,\\s*${On}\\s*)?\\)$`),Y0=new RegExp(`^rgba?\\(\\s*${mt}${it}${mt}${it}${mt}\\s*(?:,\\s*${On}\\s*)?\\)$`),X0=e=>{let t={mode:"rgb"},n;if(n=e.match(H0))n[1]!==void 0&&(t.r=n[1]/255),n[2]!==void 0&&(t.g=n[2]/255),n[3]!==void 0&&(t.b=n[3]/255);else if(n=e.match(Y0))n[1]!==void 0&&(t.r=n[1]/100),n[2]!==void 0&&(t.g=n[2]/100),n[3]!==void 0&&(t.b=n[3]/100);else return;return n[4]!==void 0?t.alpha=Math.max(0,Math.min(1,n[4]/100)):n[5]!==void 0&&(t.alpha=Math.max(0,Math.min(1,+n[5]))),t},G0=(e,t)=>e===void 0?void 0:typeof e!="object"?er(e):e.mode!==void 0?e:t?{...e,mode:t}:void 0,st=(e="rgb")=>t=>(t=G0(t,e))!==void 0?t.mode===e?t:$e[t.mode][e]?$e[t.mode][e](t):e==="rgb"?$e[t.mode].rgb(t):$e.rgb[e]($e[t.mode].rgb(t)):void 0,$e={},Za={},Dt=[],Ja={},U0=e=>e,W=e=>($e[e.mode]={...$e[e.mode],...e.toMode},Object.keys(e.fromMode||{}).forEach(t=>{$e[t]||($e[t]={}),$e[t][e.mode]=e.fromMode[t]}),e.ranges||(e.ranges={}),e.difference||(e.difference={}),e.channels.forEach(t=>{if(e.ranges[t]===void 0&&(e.ranges[t]=[0,1]),!e.interpolate[t])throw new Error(`Missing interpolator for: ${t}`);typeof e.interpolate[t]=="function"&&(e.interpolate[t]={use:e.interpolate[t]}),e.interpolate[t].fixup||(e.interpolate[t].fixup=U0)}),Za[e.mode]=e,(e.parse||[]).forEach(t=>{j0(t,e.mode)}),st(e.mode)),Wa=e=>Za[e],j0=(e,t)=>{if(typeof e=="string"){if(!t)throw new Error("'mode' required when 'parser' is a string");Ja[e]=t}else typeof e=="function"&&Dt.indexOf(e)<0&&Dt.push(e)},Dn=/[^\x00-\x7F]|[a-zA-Z_]/,V0=/[^\x00-\x7F]|[-\w]/,x={Function:"function",Ident:"ident",Number:"number",Percentage:"percentage",ParenClose:")",None:"none",Hue:"hue",Alpha:"alpha"};let L=0;function wt(e){let t=e[L],n=e[L+1];return t==="-"||t==="+"?/\d/.test(n)||n==="."&&/\d/.test(e[L+2]):t==="."?/\d/.test(n):/\d/.test(t)}function Sn(e){if(L>=e.length)return!1;let t=e[L];if(Dn.test(t))return!0;if(t==="-"){if(e.length-L<2)return!1;let n=e[L+1];return!!(n==="-"||Dn.test(n))}return!1}const Z0={deg:1,rad:180/Math.PI,grad:9/10,turn:360};function pt(e){let t="";if((e[L]==="-"||e[L]==="+")&&(t+=e[L++]),t+=Tt(e),e[L]==="."&&/\d/.test(e[L+1])&&(t+=e[L++]+Tt(e)),(e[L]==="e"||e[L]==="E")&&((e[L+1]==="-"||e[L+1]==="+")&&/\d/.test(e[L+2])?t+=e[L++]+e[L++]+Tt(e):/\d/.test(e[L+1])&&(t+=e[L++]+Tt(e))),Sn(e)){let n=St(e);return n==="deg"||n==="rad"||n==="turn"||n==="grad"?{type:x.Hue,value:t*Z0[n]}:void 0}return e[L]==="%"?(L++,{type:x.Percentage,value:+t}):{type:x.Number,value:+t}}function Tt(e){let t="";for(;/\d/.test(e[L]);)t+=e[L++];return t}function St(e){let t="";for(;L<e.length&&V0.test(e[L]);)t+=e[L++];return t}function J0(e){let t=St(e);return e[L]==="("?(L++,{type:x.Function,value:t}):t==="none"?{type:x.None,value:void 0}:{type:x.Ident,value:t}}function W0(e=""){let t=e.trim(),n=[],l;for(L=0;L<t.length;){if(l=t[L++],l===`
`||l==="	"||l===" "){for(;L<t.length&&(t[L]===`
`||t[L]==="	"||t[L]===" ");)L++;continue}if(l===",")return;if(l===")"){n.push({type:x.ParenClose});continue}if(l==="+"){if(L--,wt(t)){n.push(pt(t));continue}return}if(l==="-"){if(L--,wt(t)){n.push(pt(t));continue}if(Sn(t)){n.push({type:x.Ident,value:St(t)});continue}return}if(l==="."){if(L--,wt(t)){n.push(pt(t));continue}return}if(l==="/"){for(;L<t.length&&(t[L]===`
`||t[L]==="	"||t[L]===" ");)L++;let a;if(wt(t)&&(a=pt(t),a.type!==x.Hue)){n.push({type:x.Alpha,value:a});continue}if(Sn(t)&&St(t)==="none"){n.push({type:x.Alpha,value:{type:x.None,value:void 0}});continue}return}if(/\d/.test(l)){L--,n.push(pt(t));continue}if(Dn.test(l)){L--,n.push(J0(t));continue}return}return n}function K0(e){e._i=0;let t=e[e._i++];if(!t||t.type!==x.Function||t.value!=="color"||(t=e[e._i++],t.type!==x.Ident))return;const n=Ja[t.value];if(!n)return;const l={mode:n},a=Ka(e,!1);if(!a)return;const r=Wa(n).channels;for(let o=0,i,d;o<r.length;o++)i=a[o],d=r[o],i.type!==x.None&&(l[d]=i.type===x.Number?i.value:i.value/100,d==="alpha"&&(l[d]=Math.max(0,Math.min(1,l[d]))));return l}function Ka(e,t){const n=[];let l;for(;e._i<e.length;){if(l=e[e._i++],l.type===x.None||l.type===x.Number||l.type===x.Alpha||l.type===x.Percentage||t&&l.type===x.Hue){n.push(l);continue}if(l.type===x.ParenClose){if(e._i<e.length)return;continue}return}if(!(n.length<3||n.length>4)){if(n.length===4){if(n[3].type!==x.Alpha)return;n[3]=n[3].value}return n.length===3&&n.push({type:x.None,value:void 0}),n.every(a=>a.type!==x.Alpha)?n:void 0}}function Q0(e,t){e._i=0;let n=e[e._i++];if(!n||n.type!==x.Function)return;let l=Ka(e,t);if(l)return l.unshift(n.value),l}const er=e=>{if(typeof e!="string")return;const t=W0(e),n=t?Q0(t,!0):void 0;let l,a=0,r=Dt.length;for(;a<r;)if((l=Dt[a++](e,n))!==void 0)return l;return t?K0(t):void 0};function tr(e,t){if(!t||t[0]!=="rgb"&&t[0]!=="rgba")return;const n={mode:"rgb"},[,l,a,r,o]=t;if(!(l.type===x.Hue||a.type===x.Hue||r.type===x.Hue))return l.type!==x.None&&(n.r=l.type===x.Number?l.value/255:l.value/100),a.type!==x.None&&(n.g=a.type===x.Number?a.value/255:a.value/100),r.type!==x.None&&(n.b=r.type===x.Number?r.value/255:r.value/100),o.type!==x.None&&(n.alpha=Math.min(1,Math.max(0,o.type===x.Number?o.value:o.value/100))),n}const nr=e=>e==="transparent"?{mode:"rgb",r:0,g:0,b:0,alpha:0}:void 0,ar=(e,t,n)=>e+n*(t-e),lr=e=>{let t=[];for(let n=0;n<e.length-1;n++){let l=e[n],a=e[n+1];l===void 0&&a===void 0?t.push(void 0):l!==void 0&&a!==void 0?t.push([l,a]):t.push(l!==void 0?[l,l]:[a,a])}return t},rr=e=>t=>{let n=lr(t);return l=>{let a=l*n.length,r=l>=1?n.length-1:Math.max(Math.floor(a),0),o=n[r];return o===void 0?void 0:e(o[0],o[1],a-r)}},w=rr(ar),be=e=>{let t=!1,n=e.map(l=>l!==void 0?(t=!0,l):1);return t?n:e},dt={mode:"rgb",channels:["r","g","b","alpha"],parse:[tr,O0,X0,N0,nr,"srgb"],serialize:"srgb",interpolate:{r:w,g:w,b:w,alpha:{use:w,fixup:be}},gamut:!0,white:{r:1,g:1,b:1},black:{r:0,g:0,b:0}},an=(e=0)=>Math.pow(Math.abs(e),563/256)*Math.sign(e),aa=e=>{let t=an(e.r),n=an(e.g),l=an(e.b),a={mode:"xyz65",x:.5766690429101305*t+.1855582379065463*n+.1882286462349947*l,y:.297344975250536*t+.6273635662554661*n+.0752914584939979*l,z:.0270313613864123*t+.0706888525358272*n+.9913375368376386*l};return e.alpha!==void 0&&(a.alpha=e.alpha),a},ln=e=>Math.pow(Math.abs(e),256/563)*Math.sign(e),la=({x:e,y:t,z:n,alpha:l})=>{e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0);let a={mode:"a98",r:ln(e*2.0415879038107465-t*.5650069742788597-.3447313507783297*n),g:ln(e*-.9692436362808798+t*1.8759675015077206+.0415550574071756*n),b:ln(e*.0134442806320312-t*.1183623922310184+1.0151749943912058*n)};return l!==void 0&&(a.alpha=l),a},rn=(e=0)=>{const t=Math.abs(e);return t<=.04045?e/12.92:(Math.sign(e)||1)*Math.pow((t+.055)/1.055,2.4)},ut=({r:e,g:t,b:n,alpha:l})=>{let a={mode:"lrgb",r:rn(e),g:rn(t),b:rn(n)};return l!==void 0&&(a.alpha=l),a},et=e=>{let{r:t,g:n,b:l,alpha:a}=ut(e),r={mode:"xyz65",x:.4123907992659593*t+.357584339383878*n+.1804807884018343*l,y:.2126390058715102*t+.715168678767756*n+.0721923153607337*l,z:.0193308187155918*t+.119194779794626*n+.9505321522496607*l};return a!==void 0&&(r.alpha=a),r},on=(e=0)=>{const t=Math.abs(e);return t>.0031308?(Math.sign(e)||1)*(1.055*Math.pow(t,1/2.4)-.055):e*12.92},ct=({r:e,g:t,b:n,alpha:l},a="rgb")=>{let r={mode:a,r:on(e),g:on(t),b:on(n)};return l!==void 0&&(r.alpha=l),r},tt=({x:e,y:t,z:n,alpha:l})=>{e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0);let a=ct({r:e*3.2409699419045226-t*1.537383177570094-.4986107602930034*n,g:e*-.9692436362808796+t*1.8759675015077204+.0415550574071756*n,b:e*.0556300796969936-t*.2039769588889765+1.0569715142428784*n});return l!==void 0&&(a.alpha=l),a},or={...dt,mode:"a98",parse:["a98-rgb"],serialize:"a98-rgb",fromMode:{rgb:e=>la(et(e)),xyz65:la},toMode:{rgb:e=>tt(aa(e)),xyz65:aa}},me=e=>(e=e%360)<0?e+360:e,ir=(e,t)=>e.map((n,l,a)=>{if(n===void 0)return n;let r=me(n);return l===0||e[l-1]===void 0?r:t(r-me(a[l-1]))}).reduce((n,l)=>!n.length||l===void 0||n[n.length-1]===void 0?(n.push(l),n):(n.push(l+n[n.length-1]),n),[]),Ne=e=>ir(e,t=>Math.abs(t)<=180?t:t-360*Math.sign(t)),Fe=[-.14861,1.78277,-.29227,-.90649,1.97294,0],sr=Math.PI/180,dr=180/Math.PI;let ra=Fe[3]*Fe[4],oa=Fe[1]*Fe[4],ia=Fe[1]*Fe[2]-Fe[0]*Fe[3];const ur=({r:e,g:t,b:n,alpha:l})=>{e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0);let a=(ia*n+e*ra-t*oa)/(ia+ra-oa),r=n-a,o=(Fe[4]*(t-a)-Fe[2]*r)/Fe[3],i={mode:"cubehelix",l:a,s:a===0||a===1?void 0:Math.sqrt(r*r+o*o)/(Fe[4]*a*(1-a))};return i.s&&(i.h=Math.atan2(o,r)*dr-120),l!==void 0&&(i.alpha=l),i},cr=({h:e,s:t,l:n,alpha:l})=>{let a={mode:"rgb"};e=(e===void 0?0:e+120)*sr,n===void 0&&(n=0);let r=t===void 0?0:t*n*(1-n),o=Math.cos(e),i=Math.sin(e);return a.r=n+r*(Fe[0]*o+Fe[1]*i),a.g=n+r*(Fe[2]*o+Fe[3]*i),a.b=n+r*(Fe[4]*o+Fe[5]*i),l!==void 0&&(a.alpha=l),a},It=(e,t)=>{if(e.h===void 0||t.h===void 0||!e.s||!t.s)return 0;let n=me(e.h),l=me(t.h),a=Math.sin((l-n+360)/2*Math.PI/180);return 2*Math.sqrt(e.s*t.s)*a},fr=(e,t)=>{if(e.h===void 0||t.h===void 0)return 0;let n=me(e.h),l=me(t.h);return Math.abs(l-n)>180?n-(l-360*Math.sign(l-n)):l-n},Ot=(e,t)=>{if(e.h===void 0||t.h===void 0||!e.c||!t.c)return 0;let n=me(e.h),l=me(t.h),a=Math.sin((l-n+360)/2*Math.PI/180);return 2*Math.sqrt(e.c*t.c)*a},vt=(e="rgb",t=[1,1,1,0])=>{let n=Wa(e),l=n.channels,a=n.difference,r=st(e);return(o,i)=>{let d=r(o),c=r(i);return Math.sqrt(l.reduce((f,b,g)=>{let u=a[b]?a[b](d,c):d[b]-c[b];return f+(t[g]||0)*Math.pow(isNaN(u)?0:u,2)},0))}},Ie=e=>{let t=e.reduce((l,a)=>{if(a!==void 0){let r=a*Math.PI/180;l.sin+=Math.sin(r),l.cos+=Math.cos(r)}return l},{sin:0,cos:0}),n=Math.atan2(t.sin,t.cos)*180/Math.PI;return n<0?360+n:n},hr={mode:"cubehelix",channels:["h","s","l","alpha"],parse:["--cubehelix"],serialize:"--cubehelix",ranges:{h:[0,360],s:[0,4.614],l:[0,1]},fromMode:{rgb:ur},toMode:{rgb:cr},interpolate:{h:{use:w,fixup:Ne},s:w,l:w,alpha:{use:w,fixup:be}},difference:{h:It},average:{h:Ie}},Ve=({l:e,a:t,b:n,alpha:l},a="lch")=>{t===void 0&&(t=0),n===void 0&&(n=0);let r=Math.sqrt(t*t+n*n),o={mode:a,l:e,c:r};return r&&(o.h=me(Math.atan2(n,t)*180/Math.PI)),l!==void 0&&(o.alpha=l),o},Ze=({l:e,c:t,h:n,alpha:l},a="lab")=>{n===void 0&&(n=0);let r={mode:a,l:e,a:t?t*Math.cos(n/180*Math.PI):0,b:t?t*Math.sin(n/180*Math.PI):0};return l!==void 0&&(r.alpha=l),r},Qa=Math.pow(29,3)/Math.pow(3,3),el=Math.pow(6,3)/Math.pow(29,3),fe={X:.3457/.3585,Y:1,Z:(1-.3457-.3585)/.3585},lt={X:.3127/.329,Y:1,Z:(1-.3127-.329)/.329};let sn=e=>Math.pow(e,3)>el?Math.pow(e,3):(116*e-16)/Qa;const tl=({l:e,a:t,b:n,alpha:l})=>{e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0);let a=(e+16)/116,r=t/500+a,o=a-n/200,i={mode:"xyz65",x:sn(r)*lt.X,y:sn(a)*lt.Y,z:sn(o)*lt.Z};return l!==void 0&&(i.alpha=l),i},qt=e=>tt(tl(e)),dn=e=>e>el?Math.cbrt(e):(Qa*e+16)/116,nl=({x:e,y:t,z:n,alpha:l})=>{e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0);let a=dn(e/lt.X),r=dn(t/lt.Y),o=dn(n/lt.Z),i={mode:"lab65",l:116*r-16,a:500*(a-r),b:200*(r-o)};return l!==void 0&&(i.alpha=l),i},Ht=e=>{let t=nl(et(e));return e.r===e.b&&e.b===e.g&&(t.a=t.b=0),t},Bt=1,al=1,Mt=26/180*Math.PI,Pt=Math.cos(Mt),$t=Math.sin(Mt),ll=100/Math.log(139/100),Bn=({l:e,c:t,h:n,alpha:l})=>{e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0);let a={mode:"lab65",l:(Math.exp(e*Bt/ll)-1)/.0039},r=(Math.exp(.0435*t*al*Bt)-1)/.075,o=r*Math.cos(n/180*Math.PI-Mt),i=r*Math.sin(n/180*Math.PI-Mt);return a.a=o*Pt-i/.83*$t,a.b=o*$t+i/.83*Pt,l!==void 0&&(a.alpha=l),a},Pn=({l:e,a:t,b:n,alpha:l})=>{e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0);let a=t*Pt+n*$t,r=.83*(n*Pt-t*$t),o=Math.sqrt(a*a+r*r),i={mode:"dlch",l:ll/Bt*Math.log(1+.0039*e),c:Math.log(1+.075*o)/(.0435*al*Bt)};return i.c&&(i.h=me((Math.atan2(r,a)+Mt)/Math.PI*180)),l!==void 0&&(i.alpha=l),i},sa=e=>Bn(Ve(e,"dlch")),da=e=>Ze(Pn(e),"dlab"),gr={mode:"dlab",parse:["--din99o-lab"],serialize:"--din99o-lab",toMode:{lab65:sa,rgb:e=>qt(sa(e))},fromMode:{lab65:da,rgb:e=>da(Ht(e))},channels:["l","a","b","alpha"],ranges:{l:[0,100],a:[-40.09,45.501],b:[-40.469,44.344]},interpolate:{l:w,a:w,b:w,alpha:{use:w,fixup:be}}},br={mode:"dlch",parse:["--din99o-lch"],serialize:"--din99o-lch",toMode:{lab65:Bn,dlab:e=>Ze(e,"dlab"),rgb:e=>qt(Bn(e))},fromMode:{lab65:Pn,dlab:e=>Ve(e,"dlch"),rgb:e=>Pn(Ht(e))},channels:["l","c","h","alpha"],ranges:{l:[0,100],c:[0,51.484],h:[0,360]},interpolate:{l:w,c:w,h:{use:w,fixup:Ne},alpha:{use:w,fixup:be}},difference:{h:Ot},average:{h:Ie}};function pr({h:e,s:t,i:n,alpha:l}){e=me(e!==void 0?e:0),t===void 0&&(t=0),n===void 0&&(n=0);let a=Math.abs(e/60%2-1),r;switch(Math.floor(e/60)){case 0:r={r:n*(1+t*(3/(2-a)-1)),g:n*(1+t*(3*(1-a)/(2-a)-1)),b:n*(1-t)};break;case 1:r={r:n*(1+t*(3*(1-a)/(2-a)-1)),g:n*(1+t*(3/(2-a)-1)),b:n*(1-t)};break;case 2:r={r:n*(1-t),g:n*(1+t*(3/(2-a)-1)),b:n*(1+t*(3*(1-a)/(2-a)-1))};break;case 3:r={r:n*(1-t),g:n*(1+t*(3*(1-a)/(2-a)-1)),b:n*(1+t*(3/(2-a)-1))};break;case 4:r={r:n*(1+t*(3*(1-a)/(2-a)-1)),g:n*(1-t),b:n*(1+t*(3/(2-a)-1))};break;case 5:r={r:n*(1+t*(3/(2-a)-1)),g:n*(1-t),b:n*(1+t*(3*(1-a)/(2-a)-1))};break;default:r={r:n*(1-t),g:n*(1-t),b:n*(1-t)}}return r.mode="rgb",l!==void 0&&(r.alpha=l),r}function vr({r:e,g:t,b:n,alpha:l}){e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0);let a=Math.max(e,t,n),r=Math.min(e,t,n),o={mode:"hsi",s:e+t+n===0?0:1-3*r/(e+t+n),i:(e+t+n)/3};return a-r!==0&&(o.h=(a===e?(t-n)/(a-r)+(t<n)*6:a===t?(n-e)/(a-r)+2:(e-t)/(a-r)+4)*60),l!==void 0&&(o.alpha=l),o}const Fr={mode:"hsi",toMode:{rgb:pr},parse:["--hsi"],serialize:"--hsi",fromMode:{rgb:vr},channels:["h","s","i","alpha"],ranges:{h:[0,360]},gamut:"rgb",interpolate:{h:{use:w,fixup:Ne},s:w,i:w,alpha:{use:w,fixup:be}},difference:{h:It},average:{h:Ie}};function mr({h:e,s:t,l:n,alpha:l}){e=me(e!==void 0?e:0),t===void 0&&(t=0),n===void 0&&(n=0);let a=n+t*(n<.5?n:1-n),r=a-(a-n)*2*Math.abs(e/60%2-1),o;switch(Math.floor(e/60)){case 0:o={r:a,g:r,b:2*n-a};break;case 1:o={r,g:a,b:2*n-a};break;case 2:o={r:2*n-a,g:a,b:r};break;case 3:o={r:2*n-a,g:r,b:a};break;case 4:o={r,g:2*n-a,b:a};break;case 5:o={r:a,g:2*n-a,b:r};break;default:o={r:2*n-a,g:2*n-a,b:2*n-a}}return o.mode="rgb",l!==void 0&&(o.alpha=l),o}function Mr({r:e,g:t,b:n,alpha:l}){e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0);let a=Math.max(e,t,n),r=Math.min(e,t,n),o={mode:"hsl",s:a===r?0:(a-r)/(1-Math.abs(a+r-1)),l:.5*(a+r)};return a-r!==0&&(o.h=(a===e?(t-n)/(a-r)+(t<n)*6:a===t?(n-e)/(a-r)+2:(e-t)/(a-r)+4)*60),l!==void 0&&(o.alpha=l),o}const yr=(e,t)=>{switch(t){case"deg":return+e;case"rad":return e/Math.PI*180;case"grad":return e/10*9;case"turn":return e*360}},xr=new RegExp(`^hsla?\\(\\s*${q0}${it}${mt}${it}${mt}\\s*(?:,\\s*${On}\\s*)?\\)$`),kr=e=>{let t=e.match(xr);if(!t)return;let n={mode:"hsl"};return t[3]!==void 0?n.h=+t[3]:t[1]!==void 0&&t[2]!==void 0&&(n.h=yr(t[1],t[2])),t[4]!==void 0&&(n.s=Math.min(Math.max(0,t[4]/100),1)),t[5]!==void 0&&(n.l=Math.min(Math.max(0,t[5]/100),1)),t[6]!==void 0?n.alpha=Math.max(0,Math.min(1,t[6]/100)):t[7]!==void 0&&(n.alpha=Math.max(0,Math.min(1,+t[7]))),n};function Cr(e,t){if(!t||t[0]!=="hsl"&&t[0]!=="hsla")return;const n={mode:"hsl"},[,l,a,r,o]=t;if(l.type!==x.None){if(l.type===x.Percentage)return;n.h=l.value}if(a.type!==x.None){if(a.type===x.Hue)return;n.s=a.value/100}if(r.type!==x.None){if(r.type===x.Hue)return;n.l=r.value/100}return o.type!==x.None&&(n.alpha=Math.min(1,Math.max(0,o.type===x.Number?o.value:o.value/100))),n}const rl={mode:"hsl",toMode:{rgb:mr},fromMode:{rgb:Mr},channels:["h","s","l","alpha"],ranges:{h:[0,360]},gamut:"rgb",parse:[Cr,kr],serialize:e=>`hsl(${e.h!==void 0?e.h:"none"} ${e.s!==void 0?e.s*100+"%":"none"} ${e.l!==void 0?e.l*100+"%":"none"}${e.alpha<1?` / ${e.alpha}`:""})`,interpolate:{h:{use:w,fixup:Ne},s:w,l:w,alpha:{use:w,fixup:be}},difference:{h:It},average:{h:Ie}};function ol({h:e,s:t,v:n,alpha:l}){e=me(e!==void 0?e:0),t===void 0&&(t=0),n===void 0&&(n=0);let a=Math.abs(e/60%2-1),r;switch(Math.floor(e/60)){case 0:r={r:n,g:n*(1-t*a),b:n*(1-t)};break;case 1:r={r:n*(1-t*a),g:n,b:n*(1-t)};break;case 2:r={r:n*(1-t),g:n,b:n*(1-t*a)};break;case 3:r={r:n*(1-t),g:n*(1-t*a),b:n};break;case 4:r={r:n*(1-t*a),g:n*(1-t),b:n};break;case 5:r={r:n,g:n*(1-t),b:n*(1-t*a)};break;default:r={r:n*(1-t),g:n*(1-t),b:n*(1-t)}}return r.mode="rgb",l!==void 0&&(r.alpha=l),r}function il({r:e,g:t,b:n,alpha:l}){e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0);let a=Math.max(e,t,n),r=Math.min(e,t,n),o={mode:"hsv",s:a===0?0:1-r/a,v:a};return a-r!==0&&(o.h=(a===e?(t-n)/(a-r)+(t<n)*6:a===t?(n-e)/(a-r)+2:(e-t)/(a-r)+4)*60),l!==void 0&&(o.alpha=l),o}const sl={mode:"hsv",toMode:{rgb:ol},parse:["--hsv"],serialize:"--hsv",fromMode:{rgb:il},channels:["h","s","v","alpha"],ranges:{h:[0,360]},gamut:"rgb",interpolate:{h:{use:w,fixup:Ne},s:w,v:w,alpha:{use:w,fixup:be}},difference:{h:It},average:{h:Ie}};function _r({h:e,w:t,b:n,alpha:l}){if(t===void 0&&(t=0),n===void 0&&(n=0),t+n>1){let a=t+n;t/=a,n/=a}return ol({h:e,s:n===1?1:1-t/(1-n),v:1-n,alpha:l})}function wr(e){let t=il(e);if(t===void 0)return;let n=t.s!==void 0?t.s:0,l=t.v!==void 0?t.v:0,a={mode:"hwb",w:(1-n)*l,b:1-l};return t.h!==void 0&&(a.h=t.h),t.alpha!==void 0&&(a.alpha=t.alpha),a}function Tr(e,t){if(!t||t[0]!=="hwb")return;const n={mode:"hwb"},[,l,a,r,o]=t;if(l.type!==x.None){if(l.type===x.Percentage)return;n.h=l.value}if(a.type!==x.None){if(a.type===x.Hue)return;n.w=a.value/100}if(r.type!==x.None){if(r.type===x.Hue)return;n.b=r.value/100}return o.type!==x.None&&(n.alpha=Math.min(1,Math.max(0,o.type===x.Number?o.value:o.value/100))),n}const Ar={mode:"hwb",toMode:{rgb:_r},fromMode:{rgb:wr},channels:["h","w","b","alpha"],ranges:{h:[0,360]},gamut:"rgb",parse:[Tr],serialize:e=>`hwb(${e.h!==void 0?e.h:"none"} ${e.w!==void 0?e.w*100+"%":"none"} ${e.b!==void 0?e.b*100+"%":"none"}${e.alpha<1?` / ${e.alpha}`:""})`,interpolate:{h:{use:w,fixup:Ne},w,b:w,alpha:{use:w,fixup:be}},difference:{h:fr},average:{h:Ie}},dl=203,Yt=.1593017578125,ul=78.84375,Xt=.8359375,Gt=18.8515625,Ut=18.6875;function un(e){if(e<0)return 0;const t=Math.pow(e,1/ul);return 1e4*Math.pow(Math.max(0,t-Xt)/(Gt-Ut*t),1/Yt)}function cn(e){if(e<0)return 0;const t=Math.pow(e/1e4,Yt);return Math.pow((Xt+Gt*t)/(1+Ut*t),ul)}const fn=e=>Math.max(e/dl,0),ua=({i:e,t,p:n,alpha:l})=>{e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0);const a=un(e+.008609037037932761*t+.11102962500302593*n),r=un(e-.00860903703793275*t-.11102962500302599*n),o=un(e+.5600313357106791*t-.32062717498731885*n),i={mode:"xyz65",x:fn(2.070152218389422*a-1.3263473389671556*r+.2066510476294051*o),y:fn(.3647385209748074*a+.680566024947227*r-.0453045459220346*o),z:fn(-.049747207535812*a-.0492609666966138*r+1.1880659249923042*o)};return l!==void 0&&(i.alpha=l),i},hn=(e=0)=>Math.max(e*dl,0),ca=({x:e,y:t,z:n,alpha:l})=>{const a=hn(e),r=hn(t),o=hn(n),i=cn(.3592832590121217*a+.6976051147779502*r-.0358915932320289*o),d=cn(-.1920808463704995*a+1.1004767970374323*r+.0753748658519118*o),c=cn(.0070797844607477*a+.0748396662186366*r+.8433265453898765*o),f=.5*i+.5*d,b=1.61376953125*i-3.323486328125*d+1.709716796875*c,g=4.378173828125*i-4.24560546875*d-.132568359375*c,u={mode:"itp",i:f,t:b,p:g};return l!==void 0&&(u.alpha=l),u},zr={mode:"itp",channels:["i","t","p","alpha"],parse:["--ictcp"],serialize:"--ictcp",toMode:{xyz65:ua,rgb:e=>tt(ua(e))},fromMode:{xyz65:ca,rgb:e=>ca(et(e))},ranges:{i:[0,.581],t:[-.369,.272],p:[-.164,.331]},interpolate:{i:w,t:w,p:w,alpha:{use:w,fixup:be}}},Dr=134.03437499999998,Sr=16295499532821565e-27,gn=e=>{if(e<0)return 0;let t=Math.pow(e/1e4,Yt);return Math.pow((Xt+Gt*t)/(1+Ut*t),Dr)},bn=(e=0)=>Math.max(e*203,0),cl=({x:e,y:t,z:n,alpha:l})=>{e=bn(e),t=bn(t),n=bn(n);let a=1.15*e-.15*n,r=.66*t+.34*e,o=gn(.41478972*a+.579999*r+.014648*n),i=gn(-.20151*a+1.120649*r+.0531008*n),d=gn(-.0166008*a+.2648*r+.6684799*n),c=(o+i)/2,f={mode:"jab",j:.44*c/(1-.56*c)-Sr,a:3.524*o-4.066708*i+.542708*d,b:.199076*o+1.096799*i-1.295875*d};return l!==void 0&&(f.alpha=l),f},Br=134.03437499999998,fa=16295499532821565e-27,pn=e=>{if(e<0)return 0;let t=Math.pow(e,1/Br);return 1e4*Math.pow((Xt-t)/(Ut*t-Gt),1/Yt)},vn=e=>e/203,fl=({j:e,a:t,b:n,alpha:l})=>{e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0);let a=(e+fa)/(.44+.56*(e+fa)),r=pn(a+.13860504*t+.058047316*n),o=pn(a-.13860504*t-.058047316*n),i=pn(a-.096019242*t-.8118919*n),d={mode:"xyz65",x:vn(1.661373024652174*r-.914523081304348*o+.23136208173913045*i),y:vn(-.3250758611844533*r+1.571847026732543*o-.21825383453227928*i),z:vn(-.090982811*r-.31272829*o+1.5227666*i)};return l!==void 0&&(d.alpha=l),d},hl=e=>{let t=cl(et(e));return e.r===e.b&&e.b===e.g&&(t.a=t.b=0),t},gl=e=>tt(fl(e)),Pr={mode:"jab",channels:["j","a","b","alpha"],parse:["--jzazbz"],serialize:"--jzazbz",fromMode:{rgb:hl,xyz65:cl},toMode:{rgb:gl,xyz65:fl},ranges:{j:[0,.222],a:[-.109,.129],b:[-.185,.134]},interpolate:{j:w,a:w,b:w,alpha:{use:w,fixup:be}}},ha=({j:e,a:t,b:n,alpha:l})=>{t===void 0&&(t=0),n===void 0&&(n=0);let a=Math.sqrt(t*t+n*n),r={mode:"jch",j:e,c:a};return a&&(r.h=me(Math.atan2(n,t)*180/Math.PI)),l!==void 0&&(r.alpha=l),r},ga=({j:e,c:t,h:n,alpha:l})=>{n===void 0&&(n=0);let a={mode:"jab",j:e,a:t?t*Math.cos(n/180*Math.PI):0,b:t?t*Math.sin(n/180*Math.PI):0};return l!==void 0&&(a.alpha=l),a},$r={mode:"jch",parse:["--jzczhz"],serialize:"--jzczhz",toMode:{jab:ga,rgb:e=>gl(ga(e))},fromMode:{rgb:e=>ha(hl(e)),jab:ha},channels:["j","c","h","alpha"],ranges:{j:[0,.221],c:[0,.19],h:[0,360]},interpolate:{h:{use:w,fixup:Ne},c:w,j:w,alpha:{use:w,fixup:be}},difference:{h:Ot},average:{h:Ie}},jt=Math.pow(29,3)/Math.pow(3,3),qn=Math.pow(6,3)/Math.pow(29,3);let Fn=e=>Math.pow(e,3)>qn?Math.pow(e,3):(116*e-16)/jt;const Hn=({l:e,a:t,b:n,alpha:l})=>{e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0);let a=(e+16)/116,r=t/500+a,o=a-n/200,i={mode:"xyz50",x:Fn(r)*fe.X,y:Fn(a)*fe.Y,z:Fn(o)*fe.Z};return l!==void 0&&(i.alpha=l),i},yt=({x:e,y:t,z:n,alpha:l})=>{e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0);let a=ct({r:e*3.1341359569958707-t*1.6173863321612538-.4906619460083532*n,g:e*-.978795502912089+t*1.916254567259524+.03344273116131949*n,b:e*.07195537988411677-t*.2289768264158322+1.405386058324125*n});return l!==void 0&&(a.alpha=l),a},bl=e=>yt(Hn(e)),xt=e=>{let{r:t,g:n,b:l,alpha:a}=ut(e),r={mode:"xyz50",x:.436065742824811*t+.3851514688337912*n+.14307845442264197*l,y:.22249319175623702*t+.7168870538238823*n+.06061979053616537*l,z:.013923904500943465*t+.09708128566574634*n+.7140993584005155*l};return a!==void 0&&(r.alpha=a),r},mn=e=>e>qn?Math.cbrt(e):(jt*e+16)/116,Yn=({x:e,y:t,z:n,alpha:l})=>{e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0);let a=mn(e/fe.X),r=mn(t/fe.Y),o=mn(n/fe.Z),i={mode:"lab",l:116*r-16,a:500*(a-r),b:200*(r-o)};return l!==void 0&&(i.alpha=l),i},pl=e=>{let t=Yn(xt(e));return e.r===e.b&&e.b===e.g&&(t.a=t.b=0),t};function Er(e,t){if(!t||t[0]!=="lab")return;const n={mode:"lab"},[,l,a,r,o]=t;if(!(l.type===x.Hue||a.type===x.Hue||r.type===x.Hue))return l.type!==x.None&&(n.l=Math.min(Math.max(0,l.value),100)),a.type!==x.None&&(n.a=a.type===x.Number?a.value:a.value*125/100),r.type!==x.None&&(n.b=r.type===x.Number?r.value:r.value*125/100),o.type!==x.None&&(n.alpha=Math.min(1,Math.max(0,o.type===x.Number?o.value:o.value/100))),n}const Xn={mode:"lab",toMode:{xyz50:Hn,rgb:bl},fromMode:{xyz50:Yn,rgb:pl},channels:["l","a","b","alpha"],ranges:{l:[0,100],a:[-125,125],b:[-125,125]},parse:[Er],serialize:e=>`lab(${e.l!==void 0?e.l:"none"} ${e.a!==void 0?e.a:"none"} ${e.b!==void 0?e.b:"none"}${e.alpha<1?` / ${e.alpha}`:""})`,interpolate:{l:w,a:w,b:w,alpha:{use:w,fixup:be}}},Rr={...Xn,mode:"lab65",parse:["--lab-d65"],serialize:"--lab-d65",toMode:{xyz65:tl,rgb:qt},fromMode:{xyz65:nl,rgb:Ht},ranges:{l:[0,100],a:[-125,125],b:[-125,125]}};function Lr(e,t){if(!t||t[0]!=="lch")return;const n={mode:"lch"},[,l,a,r,o]=t;if(l.type!==x.None){if(l.type===x.Hue)return;n.l=Math.min(Math.max(0,l.value),100)}if(a.type!==x.None&&(n.c=Math.max(0,a.type===x.Number?a.value:a.value*150/100)),r.type!==x.None){if(r.type===x.Percentage)return;n.h=r.value}return o.type!==x.None&&(n.alpha=Math.min(1,Math.max(0,o.type===x.Number?o.value:o.value/100))),n}const Gn={mode:"lch",toMode:{lab:Ze,rgb:e=>bl(Ze(e))},fromMode:{rgb:e=>Ve(pl(e)),lab:Ve},channels:["l","c","h","alpha"],ranges:{l:[0,100],c:[0,150],h:[0,360]},parse:[Lr],serialize:e=>`lch(${e.l!==void 0?e.l:"none"} ${e.c!==void 0?e.c:"none"} ${e.h!==void 0?e.h:"none"}${e.alpha<1?` / ${e.alpha}`:""})`,interpolate:{h:{use:w,fixup:Ne},c:w,l:w,alpha:{use:w,fixup:be}},difference:{h:Ot},average:{h:Ie}},Nr={...Gn,mode:"lch65",parse:["--lch-d65"],serialize:"--lch-d65",toMode:{lab65:e=>Ze(e,"lab65"),rgb:e=>qt(Ze(e,"lab65"))},fromMode:{rgb:e=>Ve(Ht(e),"lch65"),lab65:e=>Ve(e,"lch65")},ranges:{l:[0,100],c:[0,150],h:[0,360]}},vl=({l:e,u:t,v:n,alpha:l})=>{t===void 0&&(t=0),n===void 0&&(n=0);let a=Math.sqrt(t*t+n*n),r={mode:"lchuv",l:e,c:a};return a&&(r.h=me(Math.atan2(n,t)*180/Math.PI)),l!==void 0&&(r.alpha=l),r},Fl=({l:e,c:t,h:n,alpha:l})=>{n===void 0&&(n=0);let a={mode:"luv",l:e,u:t?t*Math.cos(n/180*Math.PI):0,v:t?t*Math.sin(n/180*Math.PI):0};return l!==void 0&&(a.alpha=l),a},ml=(e,t,n)=>4*e/(e+15*t+3*n),Ml=(e,t,n)=>9*t/(e+15*t+3*n),Ir=ml(fe.X,fe.Y,fe.Z),Or=Ml(fe.X,fe.Y,fe.Z),qr=e=>e<=qn?jt*e:116*Math.cbrt(e)-16,$n=({x:e,y:t,z:n,alpha:l})=>{e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0);let a=qr(t/fe.Y),r=ml(e,t,n),o=Ml(e,t,n);!isFinite(r)||!isFinite(o)?a=r=o=0:(r=13*a*(r-Ir),o=13*a*(o-Or));let i={mode:"luv",l:a,u:r,v:o};return l!==void 0&&(i.alpha=l),i},Hr=(e,t,n)=>4*e/(e+15*t+3*n),Yr=(e,t,n)=>9*t/(e+15*t+3*n),Xr=Hr(fe.X,fe.Y,fe.Z),Gr=Yr(fe.X,fe.Y,fe.Z),En=({l:e,u:t,v:n,alpha:l})=>{if(e===void 0&&(e=0),e===0)return{mode:"xyz50",x:0,y:0,z:0};t===void 0&&(t=0),n===void 0&&(n=0);let a=t/(13*e)+Xr,r=n/(13*e)+Gr,o=fe.Y*(e<=8?e/jt:Math.pow((e+16)/116,3)),i=o*(9*a)/(4*r),d=o*(12-3*a-20*r)/(4*r),c={mode:"xyz50",x:i,y:o,z:d};return l!==void 0&&(c.alpha=l),c},Ur=e=>vl($n(xt(e))),jr=e=>yt(En(Fl(e))),Vr={mode:"lchuv",toMode:{luv:Fl,rgb:jr},fromMode:{rgb:Ur,luv:vl},channels:["l","c","h","alpha"],parse:["--lchuv"],serialize:"--lchuv",ranges:{l:[0,100],c:[0,176.956],h:[0,360]},interpolate:{h:{use:w,fixup:Ne},c:w,l:w,alpha:{use:w,fixup:be}},difference:{h:Ot},average:{h:Ie}},Zr={...dt,mode:"lrgb",toMode:{rgb:ct},fromMode:{rgb:ut},parse:["srgb-linear"],serialize:"srgb-linear"},Jr={mode:"luv",toMode:{xyz50:En,rgb:e=>yt(En(e))},fromMode:{xyz50:$n,rgb:e=>$n(xt(e))},channels:["l","u","v","alpha"],parse:["--luv"],serialize:"--luv",ranges:{l:[0,100],u:[-84.936,175.042],v:[-125.882,87.243]},interpolate:{l:w,u:w,v:w,alpha:{use:w,fixup:be}}},yl=({r:e,g:t,b:n,alpha:l})=>{e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0);let a=Math.cbrt(.412221469470763*e+.5363325372617348*t+.0514459932675022*n),r=Math.cbrt(.2119034958178252*e+.6806995506452344*t+.1073969535369406*n),o=Math.cbrt(.0883024591900564*e+.2817188391361215*t+.6299787016738222*n),i={mode:"oklab",l:.210454268309314*a+.7936177747023054*r-.0040720430116193*o,a:1.9779985324311684*a-2.42859224204858*r+.450593709617411*o,b:.0259040424655478*a+.7827717124575296*r-.8086757549230774*o};return l!==void 0&&(i.alpha=l),i},Vt=e=>{let t=yl(ut(e));return e.r===e.b&&e.b===e.g&&(t.a=t.b=0),t},kt=({l:e,a:t,b:n,alpha:l})=>{e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0);let a=Math.pow(e+.3963377773761749*t+.2158037573099136*n,3),r=Math.pow(e-.1055613458156586*t-.0638541728258133*n,3),o=Math.pow(e-.0894841775298119*t-1.2914855480194092*n,3),i={mode:"lrgb",r:4.076741636075957*a-3.3077115392580616*r+.2309699031821044*o,g:-1.2684379732850317*a+2.6097573492876887*r-.3413193760026573*o,b:-.0041960761386756*a-.7034186179359362*r+1.7076146940746117*o};return l!==void 0&&(i.alpha=l),i},Zt=e=>ct(kt(e));function Rn(e){const l=1.170873786407767;return .5*(l*e-.206+Math.sqrt((l*e-.206)*(l*e-.206)+4*.03*l*e))}function Et(e){return(e*e+.206*e)/(1.170873786407767*(e+.03))}function Wr(e,t){let n,l,a,r,o,i,d,c;-1.88170328*e-.80936493*t>1?(n=1.19086277,l=1.76576728,a=.59662641,r=.75515197,o=.56771245,i=4.0767416621,d=-3.3077115913,c=.2309699292):1.81444104*e-1.19445276*t>1?(n=.73956515,l=-.45954404,a=.08285427,r=.1254107,o=.14503204,i=-1.2684380046,d=2.6097574011,c=-.3413193965):(n=1.35733652,l=-.00915799,a=-1.1513021,r=-.50559606,o=.00692167,i=-.0041960863,d=-.7034186147,c=1.707614701);let f=n+l*e+a*t+r*e*e+o*e*t,b=.3963377774*e+.2158037573*t,g=-.1055613458*e-.0638541728*t,u=-.0894841775*e-1.291485548*t;{let h=1+f*b,v=1+f*g,M=1+f*u,C=h*h*h,_=v*v*v,$=M*M*M,T=3*b*h*h,P=3*g*v*v,F=3*u*M*M,m=6*b*b*h,D=6*g*g*v,I=6*u*u*M,A=i*C+d*_+c*$,O=i*T+d*P+c*F,N=i*m+d*D+c*I;f=f-A*O/(O*O-.5*A*N)}return f}function Un(e,t){let n=Wr(e,t),l=kt({l:1,a:n*e,b:n*t}),a=Math.cbrt(1/Math.max(l.r,l.g,l.b)),r=a*n;return[a,r]}function Kr(e,t,n,l,a,r=null){r||(r=Un(e,t));let o;if((n-a)*r[1]-(r[0]-a)*l<=0)o=r[1]*a/(l*r[0]+r[1]*(a-n));else{o=r[1]*(a-1)/(l*(r[0]-1)+r[1]*(a-n));{let i=n-a,d=l,c=.3963377774*e+.2158037573*t,f=-.1055613458*e-.0638541728*t,b=-.0894841775*e-1.291485548*t,g=i+d*c,u=i+d*f,h=i+d*b;{let v=a*(1-o)+o*n,M=o*l,C=v+M*c,_=v+M*f,$=v+M*b,T=C*C*C,P=_*_*_,F=$*$*$,m=3*g*C*C,D=3*u*_*_,I=3*h*$*$,A=6*g*g*C,O=6*u*u*_,N=6*h*h*$,V=4.0767416621*T-3.3077115913*P+.2309699292*F-1,te=4.0767416621*m-3.3077115913*D+.2309699292*I,ne=4.0767416621*A-3.3077115913*O+.2309699292*N,re=te/(te*te-.5*V*ne),S=-V*re,z=-1.2684380046*T+2.6097574011*P-.3413193965*F-1,G=-1.2684380046*m+2.6097574011*D-.3413193965*I,H=-1.2684380046*A+2.6097574011*O-.3413193965*N,y=G/(G*G-.5*z*H),R=-z*y,E=-.0041960863*T-.7034186147*P+1.707614701*F-1,J=-.0041960863*m-.7034186147*D+1.707614701*I,Z=-.0041960863*A-.7034186147*O+1.707614701*N,se=J/(J*J-.5*E*Z),Q=-E*se;S=re>=0?S:1e6,R=y>=0?R:1e6,Q=se>=0?Q:1e6,o+=Math.min(S,Math.min(R,Q))}}}return o}function jn(e,t,n=null){n||(n=Un(e,t));let l=n[0],a=n[1];return[a/l,a/(1-l)]}function xl(e,t,n){let l=Un(t,n),a=Kr(t,n,e,1,e,l),r=jn(t,n,l),o=.11516993+1/(7.4477897+4.1590124*n+t*(-2.19557347+1.75198401*n+t*(-2.13704948-10.02301043*n+t*(-4.24894561+5.38770819*n+4.69891013*t)))),i=.11239642+1/(1.6132032-.68124379*n+t*(.40370612+.90148123*n+t*(-.27087943+.6122399*n+t*(.00299215-.45399568*n-.14661872*t)))),d=a/Math.min(e*r[0],(1-e)*r[1]),c=e*o,f=(1-e)*i,b=.9*d*Math.sqrt(Math.sqrt(1/(1/(c*c*c*c)+1/(f*f*f*f))));return c=e*.4,f=(1-e)*.8,[Math.sqrt(1/(1/(c*c)+1/(f*f))),b,a]}function ba(e){const t=e.l!==void 0?e.l:0,n=e.a!==void 0?e.a:0,l=e.b!==void 0?e.b:0,a={mode:"okhsl",l:Rn(t)};e.alpha!==void 0&&(a.alpha=e.alpha);let r=Math.sqrt(n*n+l*l);if(!r)return a.s=0,a;let[o,i,d]=xl(t,n/r,l/r),c;if(r<i){let f=0,b=.8*o,g=1-b/i;c=(r-f)/(b+g*(r-f))*.8}else{let f=i,b=.2*i*i*1.25*1.25/o,g=1-b/(d-i);c=.8+.2*((r-f)/(b+g*(r-f)))}return c&&(a.s=c,a.h=me(Math.atan2(l,n)*180/Math.PI)),a}function pa(e){let t=e.h!==void 0?e.h:0,n=e.s!==void 0?e.s:0,l=e.l!==void 0?e.l:0;const a={mode:"oklab",l:Et(l)};if(e.alpha!==void 0&&(a.alpha=e.alpha),!n||l===1)return a.a=a.b=0,a;let r=Math.cos(t/180*Math.PI),o=Math.sin(t/180*Math.PI),[i,d,c]=xl(a.l,r,o),f,b,g,u;n<.8?(f=1.25*n,b=0,g=.8*i,u=1-g/d):(f=5*(n-.8),b=d,g=.2*d*d*1.25*1.25/i,u=1-g/(c-d));let h=b+f*g/(1-u*f);return a.a=h*r,a.b=h*o,a}const Qr={...rl,mode:"okhsl",channels:["h","s","l","alpha"],parse:["--okhsl"],serialize:"--okhsl",fromMode:{oklab:ba,rgb:e=>ba(Vt(e))},toMode:{oklab:pa,rgb:e=>Zt(pa(e))}};function va(e){let t=e.l!==void 0?e.l:0,n=e.a!==void 0?e.a:0,l=e.b!==void 0?e.b:0,a=Math.sqrt(n*n+l*l),r=a?n/a:1,o=a?l/a:1,[i,d]=jn(r,o),c=.5,f=1-c/i,b=d/(a+t*d),g=b*t,u=b*a,h=Et(g),v=u*h/g,M=kt({l:h,a:r*v,b:o*v}),C=Math.cbrt(1/Math.max(M.r,M.g,M.b,0));t=t/C,a=a/C*Rn(t)/t,t=Rn(t);const _={mode:"okhsv",s:a?(c+d)*u/(d*c+d*f*u):0,v:t?t/g:0};return _.s&&(_.h=me(Math.atan2(l,n)*180/Math.PI)),e.alpha!==void 0&&(_.alpha=e.alpha),_}function Fa(e){const t={mode:"oklab"};e.alpha!==void 0&&(t.alpha=e.alpha);const n=e.h!==void 0?e.h:0,l=e.s!==void 0?e.s:0,a=e.v!==void 0?e.v:0,r=Math.cos(n/180*Math.PI),o=Math.sin(n/180*Math.PI),[i,d]=jn(r,o),c=.5,f=1-c/i,b=1-l*c/(c+d-d*f*l),g=l*d*c/(c+d-d*f*l),u=Et(b),h=g*u/b,v=kt({l:u,a:r*h,b:o*h}),M=Math.cbrt(1/Math.max(v.r,v.g,v.b,0)),C=Et(a*b),_=g*C/b;return t.l=C*M,t.a=_*r*M,t.b=_*o*M,t}const eo={...sl,mode:"okhsv",channels:["h","s","v","alpha"],parse:["--okhsv"],serialize:"--okhsv",fromMode:{oklab:va,rgb:e=>va(Vt(e))},toMode:{oklab:Fa,rgb:e=>Zt(Fa(e))}};function to(e,t){if(!t||t[0]!=="oklab")return;const n={mode:"oklab"},[,l,a,r,o]=t;if(!(l.type===x.Hue||a.type===x.Hue||r.type===x.Hue))return l.type!==x.None&&(n.l=Math.min(Math.max(0,l.type===x.Number?l.value:l.value/100),1)),a.type!==x.None&&(n.a=a.type===x.Number?a.value:a.value*.4/100),r.type!==x.None&&(n.b=r.type===x.Number?r.value:r.value*.4/100),o.type!==x.None&&(n.alpha=Math.min(1,Math.max(0,o.type===x.Number?o.value:o.value/100))),n}const no={...Xn,mode:"oklab",toMode:{lrgb:kt,rgb:Zt},fromMode:{lrgb:yl,rgb:Vt},ranges:{l:[0,1],a:[-.4,.4],b:[-.4,.4]},parse:[to],serialize:e=>`oklab(${e.l!==void 0?e.l:"none"} ${e.a!==void 0?e.a:"none"} ${e.b!==void 0?e.b:"none"}${e.alpha<1?` / ${e.alpha}`:""})`};function ao(e,t){if(!t||t[0]!=="oklch")return;const n={mode:"oklch"},[,l,a,r,o]=t;if(l.type!==x.None){if(l.type===x.Hue)return;n.l=Math.min(Math.max(0,l.type===x.Number?l.value:l.value/100),1)}if(a.type!==x.None&&(n.c=Math.max(0,a.type===x.Number?a.value:a.value*.4/100)),r.type!==x.None){if(r.type===x.Percentage)return;n.h=r.value}return o.type!==x.None&&(n.alpha=Math.min(1,Math.max(0,o.type===x.Number?o.value:o.value/100))),n}const lo={...Gn,mode:"oklch",toMode:{oklab:e=>Ze(e,"oklab"),rgb:e=>Zt(Ze(e,"oklab"))},fromMode:{rgb:e=>Ve(Vt(e),"oklch"),oklab:e=>Ve(e,"oklch")},parse:[ao],serialize:e=>`oklch(${e.l!==void 0?e.l:"none"} ${e.c!==void 0?e.c:"none"} ${e.h!==void 0?e.h:"none"}${e.alpha<1?` / ${e.alpha}`:""})`,ranges:{l:[0,1],c:[0,.4],h:[0,360]}},ma=e=>{let{r:t,g:n,b:l,alpha:a}=ut(e),r={mode:"xyz65",x:.486570948648216*t+.265667693169093*n+.1982172852343625*l,y:.2289745640697487*t+.6917385218365062*n+.079286914093745*l,z:0*t+.0451133818589026*n+1.043944368900976*l};return a!==void 0&&(r.alpha=a),r},Ma=({x:e,y:t,z:n,alpha:l})=>{e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0);let a=ct({r:e*2.4934969119414263-t*.9313836179191242-.402710784450717*n,g:e*-.8294889695615749+t*1.7626640603183465+.0236246858419436*n,b:e*.0358458302437845-t*.0761723892680418+.9568845240076871*n},"p3");return l!==void 0&&(a.alpha=l),a},ro={...dt,mode:"p3",parse:["display-p3"],serialize:"display-p3",fromMode:{rgb:e=>Ma(et(e)),xyz65:Ma},toMode:{rgb:e=>tt(ma(e)),xyz65:ma}},Mn=e=>{let t=Math.abs(e);return t>=1/512?Math.sign(e)*Math.pow(t,1/1.8):16*e},ya=({x:e,y:t,z:n,alpha:l})=>{e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0);let a={mode:"prophoto",r:Mn(e*1.3457868816471585-t*.2555720873797946-.0511018649755453*n),g:Mn(e*-.5446307051249019+t*1.5082477428451466+.0205274474364214*n),b:Mn(e*0+t*0+1.2119675456389452*n)};return l!==void 0&&(a.alpha=l),a},yn=(e=0)=>{let t=Math.abs(e);return t>=16/512?Math.sign(e)*Math.pow(t,1.8):e/16},xa=e=>{let t=yn(e.r),n=yn(e.g),l=yn(e.b),a={mode:"xyz50",x:.7977666449006423*t+.1351812974005331*n+.0313477341283922*l,y:.2880748288194013*t+.7118352342418731*n+899369387256e-16*l,z:0*t+0*n+.8251046025104602*l};return e.alpha!==void 0&&(a.alpha=e.alpha),a},oo={...dt,mode:"prophoto",parse:["prophoto-rgb"],serialize:"prophoto-rgb",fromMode:{xyz50:ya,rgb:e=>ya(xt(e))},toMode:{xyz50:xa,rgb:e=>yt(xa(e))}},ka=1.09929682680944,io=.018053968510807,xn=e=>{const t=Math.abs(e);return t>io?(Math.sign(e)||1)*(ka*Math.pow(t,.45)-(ka-1)):4.5*e},Ca=({x:e,y:t,z:n,alpha:l})=>{e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0);let a={mode:"rec2020",r:xn(e*1.7166511879712683-t*.3556707837763925-.2533662813736599*n),g:xn(e*-.6666843518324893+t*1.6164812366349395+.0157685458139111*n),b:xn(e*.0176398574453108-t*.0427706132578085+.9421031212354739*n)};return l!==void 0&&(a.alpha=l),a},_a=1.09929682680944,so=.018053968510807,kn=(e=0)=>{let t=Math.abs(e);return t<so*4.5?e/4.5:(Math.sign(e)||1)*Math.pow((t+_a-1)/_a,1/.45)},wa=e=>{let t=kn(e.r),n=kn(e.g),l=kn(e.b),a={mode:"xyz65",x:.6369580483012911*t+.1446169035862083*n+.1688809751641721*l,y:.262700212011267*t+.6779980715188708*n+.059301716469862*l,z:0*t+.0280726930490874*n+1.0609850577107909*l};return e.alpha!==void 0&&(a.alpha=e.alpha),a},uo={...dt,mode:"rec2020",fromMode:{xyz65:Ca,rgb:e=>Ca(et(e))},toMode:{xyz65:wa,rgb:e=>tt(wa(e))},parse:["rec2020"],serialize:"rec2020"},Qe=.0037930732552754493,kl=Math.cbrt(Qe),Cn=e=>Math.cbrt(e)-kl,co=e=>{const{r:t,g:n,b:l,alpha:a}=ut(e),r=Cn(.3*t+.622*n+.078*l+Qe),o=Cn(.23*t+.692*n+.078*l+Qe),i=Cn(.2434226892454782*t+.2047674442449682*n+.5518098665095535*l+Qe),d={mode:"xyb",x:(r-o)/2,y:(r+o)/2,b:i-(r+o)/2};return a!==void 0&&(d.alpha=a),d},_n=e=>Math.pow(e+kl,3),fo=({x:e,y:t,b:n,alpha:l})=>{e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0);const a=_n(e+t)-Qe,r=_n(t-e)-Qe,o=_n(n+t)-Qe,i=ct({r:11.031566904639861*a-9.866943908131562*r-.16462299650829934*o,g:-3.2541473810744237*a+4.418770377582723*r-.16462299650829934*o,b:-3.6588512867136815*a+2.7129230459360922*r+1.9459282407775895*o});return l!==void 0&&(i.alpha=l),i},ho={mode:"xyb",channels:["x","y","b","alpha"],parse:["--xyb"],serialize:"--xyb",toMode:{rgb:fo},fromMode:{rgb:co},ranges:{x:[-.0154,.0281],y:[0,.8453],b:[-.2778,.388]},interpolate:{x:w,y:w,b:w,alpha:{use:w,fixup:be}}},go={mode:"xyz50",parse:["xyz-d50"],serialize:"xyz-d50",toMode:{rgb:yt,lab:Yn},fromMode:{rgb:xt,lab:Hn},channels:["x","y","z","alpha"],ranges:{x:[0,.964],y:[0,.999],z:[0,.825]},interpolate:{x:w,y:w,z:w,alpha:{use:w,fixup:be}}},bo=e=>{let{x:t,y:n,z:l,alpha:a}=e;t===void 0&&(t=0),n===void 0&&(n=0),l===void 0&&(l=0);let r={mode:"xyz50",x:1.0479298208405488*t+.0229467933410191*n-.0501922295431356*l,y:.0296278156881593*t+.990434484573249*n-.0170738250293851*l,z:-.0092430581525912*t+.0150551448965779*n+.7518742899580008*l};return a!==void 0&&(r.alpha=a),r},po=e=>{let{x:t,y:n,z:l,alpha:a}=e;t===void 0&&(t=0),n===void 0&&(n=0),l===void 0&&(l=0);let r={mode:"xyz65",x:.9554734527042182*t-.0230985368742614*n+.0632593086610217*l,y:-.0283697069632081*t+1.0099954580058226*n+.021041398966943*l,z:.0123140016883199*t-.0205076964334779*n+1.3303659366080753*l};return a!==void 0&&(r.alpha=a),r},vo={mode:"xyz65",toMode:{rgb:tt,xyz50:bo},fromMode:{rgb:et,xyz50:po},ranges:{x:[0,.95],y:[0,1],z:[0,1.088]},channels:["x","y","z","alpha"],parse:["xyz","xyz-d65"],serialize:"xyz-d65",interpolate:{x:w,y:w,z:w,alpha:{use:w,fixup:be}}},Fo=({r:e,g:t,b:n,alpha:l})=>{e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0);const a={mode:"yiq",y:.29889531*e+.58662247*t+.11448223*n,i:.59597799*e-.2741761*t-.32180189*n,q:.21147017*e-.52261711*t+.31114694*n};return l!==void 0&&(a.alpha=l),a},mo=({y:e,i:t,q:n,alpha:l})=>{e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0);const a={mode:"rgb",r:e+.95608445*t+.6208885*n,g:e-.27137664*t-.6486059*n,b:e-1.10561724*t+1.70250126*n};return l!==void 0&&(a.alpha=l),a},Mo={mode:"yiq",toMode:{rgb:mo},fromMode:{rgb:Fo},channels:["y","i","q","alpha"],parse:["--yiq"],serialize:"--yiq",ranges:{i:[-.595,.595],q:[-.522,.522]},interpolate:{y:w,i:w,q:w,alpha:{use:w,fixup:be}}};W(or);W(hr);W(gr);W(br);W(Fr);W(rl);W(sl);W(Ar);W(zr);W(Pr);W($r);W(Xn);W(Rr);W(Gn);W(Nr);W(Vr);W(Zr);W(Jr);W(Qr);W(eo);W(no);W(lo);W(ro);W(oo);W(uo);W(dt);W(ho);W(go);W(vo);W(Mo);const Ta=Object.assign({"../../data/sets/rebrickable_parts_41809-1-hedwig-pencil-holder.csv":D0,"../../data/sets/rebrickable_parts_41904-1-animal-picture-holders.csv":S0,"../../data/sets/rebrickable_parts_41935-1-lots-of-dots.csv":B0,"../../data/sets/rebrickable_parts_41950-1-lots-of-dots-lettering.csv":P0,"../../data/sets/rebrickable_parts_41957-1-adhesive-patches-mega-pack.csv":$0,"../../data/sets/rebrickable_parts_41961-1-designer-toolkit-patterns.csv":E0});function yo(e){return e.trim().split(`
`).slice(1).map(n=>{const[l,a,r,o]=n.split(",");return{id:Number(l),name:a,rgb:`#${r}`,is_trans:o==="True"}})}function xo(){const e=new Set;for(const t in Ta){const l=Ta[t].trim().split(`
`);for(const a of l.slice(1)){const r=Number(a.split(",")[1]);isNaN(r)||e.add(r)}}return e}const ko=st("hsl");function Co(e){const t=ko(e);return{h:t.h??0,s:t.s*100,l:t.l*100}}function _o(e,t=15,n=6){const l={},a=new Set;for(const i of e){if(a.has(i.rgb))continue;a.add(i.rgb);const d=i.s<10?999:Math.floor(i.h/t);l[d]||(l[d]=[]),l[d].push(i)}Object.values(l).forEach(i=>i.sort((d,c)=>d.l-c.l));const r=Object.keys(l).map(Number).sort((i,d)=>i-d).flatMap(i=>l[i]),o=[];for(let i=0;i<r.length;i+=n)o.push(r.slice(i,i+n));return o}const wo=yo(R0),To=xo(),Ue=wo.filter(e=>To.has(e.id)&&!e.name.includes("Trans-Clear")),Me=_o(Ue.map(e=>({...e,...Co(e.rgb)}))),Aa=st("oklch");[...Ue].sort((e,t)=>{const n=Aa(e.rgb),l=Aa(t.rgb),a=n.h??0,r=l.h??0;return Math.round(a)!==Math.round(r)?a-r:Math.round(n.c*100)!==Math.round(l.c*100)?n.c-l.c:n.l-l.l});var Ao=ge('<div class="zoom-pan-container svelte-b0dtxj" role="application" aria-label="Zoomable and pannable container" tabindex="0"><div class="zoom-pan-content svelte-b0dtxj"><!></div></div>');function zo(e,t){Te(t,!1);const n=Re();let l=B(t,"zoom",12,1),a=B(t,"panX",12,0),r=B(t,"panY",12,0),o=B(t,"selectMode",8,!1),i=ee(!1),d=0,c=0,f=ee(!1),b=ee(),g=ee(),u=!1;Ln(()=>{if(s(b)&&s(g)&&!u){const m=s(b).clientWidth,D=s(b).clientHeight;let I=0,A=0;s(g).firstElementChild instanceof HTMLElement?(I=s(g).firstElementChild.offsetWidth,A=s(g).firstElementChild.offsetHeight):(I=s(g).offsetWidth,A=s(g).offsetHeight),a((m-I*l())/2),r((D-A*l())/2),u=!0,n("panChanged",{panX:a(),panY:r()})}});function h(m){m.preventDefault();const D=s(b).getBoundingClientRect(),I=m.clientX-D.left,A=m.clientY-D.top,O=m.deltaY>0?.9:1.1,N=Math.max(.2,Math.min(5,l()*O));if(N!==l()){const V=N/l();a(I-(I-a())*V),r(A-(A-r())*V),l(N),n("zoomChanged",{zoom:l(),panX:a(),panY:r()})}}function v(m){o()||m.button===0&&(k(i,!0),k(f,!1),d=m.clientX,c=m.clientY,window.addEventListener("mousemove",M),window.addEventListener("mouseup",C),m.preventDefault())}function M(m){if(s(i)){const D=m.clientX-d,I=m.clientY-c;(Math.abs(D)>1||Math.abs(I)>1)&&k(f,!0),a(a()+D),r(r()+I),d=m.clientX,c=m.clientY,n("panChanged",{panX:a(),panY:r()})}}function C(){s(i)&&(k(i,!1),window.removeEventListener("mousemove",M),window.removeEventListener("mouseup",C),n("panEnd",{didPan:s(f)}),setTimeout(()=>{k(f,!1)},50))}function _(m){m.key===" "&&m.preventDefault()}function $(m){m.key===" "&&m.preventDefault()}ze();var T=Ao(),P=Y(T),F=Y(P);Be(F,t,"default",{get didPan(){return s(f)}}),q(P),Wn(P,m=>k(g,m),()=>s(g)),q(T),Wn(T,m=>k(b,m),()=>s(b)),we(()=>je(P,`transform: translate(${a()??""}px, ${r()??""}px) scale(${l()??""}); cursor: ${o()?"crosshair":s(i)?"grabbing":"grab"};`)),le("wheel",T,h),le("mousedown",T,v),le("keydown",T,_),le("keyup",T,$),j(e,T),Ae()}var Do=ge('<div class="square svelte-gxsx5p"></div>');function Cl(e,t){let n=B(t,"color",8,"#000");var l=Do();we(()=>je(l,`--color: ${n()??""}`)),j(e,l)}var So=ge('<div class="circle svelte-r5z0cw"></div>');function _l(e,t){let n=B(t,"color",8,"#000");var l=So();we(()=>je(l,`--color: ${n()??""}`)),j(e,l)}var Bo=ge('<div class="quarter-container svelte-19hi45o"><svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none" class="svelte-19hi45o"><path d="M 0,0 L 100,0 A 100,100 0 0,1 0,100 Z" stroke="none"></path></svg></div>');function wl(e,t){let n=B(t,"color",8,"#000"),l=B(t,"rotation",8,0);var a=Bo(),r=Y(a),o=Y(r);q(r),q(a),we(()=>{he(o,"fill",n()),he(o,"transform",`rotate(${l()*90}, 50, 50)`)}),j(e,a)}var Po=ge('<div class="tile svelte-ia1epz"><div class="square-half svelte-ia1epz"></div> <div class="circle-half svelte-ia1epz"></div></div>');function Tl(e,t){let n=B(t,"color",8,"#000"),l=B(t,"rotation",8,0);var a=Po();we(()=>je(a,`--color: ${n()??""}; transform: rotate(${l()*90}deg);`)),j(e,a)}var $o=ge('<div role="button" tabindex="0"><!></div>'),Eo=ge('<div class="selection-overlay svelte-1hhz0mg"></div>'),Ro=ge('<div class="grid svelte-1hhz0mg"><!> <!></div>');function Lo(e,t){Te(t,!1);const n=Re();let l=B(t,"grid",12),a=B(t,"width",8),r=B(t,"height",8),o=B(t,"selectedShape",8,"square"),i=B(t,"selectedColor",8),d=B(t,"paintMode",8,!1),c=B(t,"colorPickerMode",8,!1),f=B(t,"selectMode",8,!1),b=B(t,"quarterRotation",8,0),g=B(t,"halfCircleRotation",8,0),u=B(t,"selection",28,()=>({startX:0,startY:0,endX:0,endY:0,active:!1})),h=B(t,"didPan",8,!1),v=ee(!1),M=ee(!0);function C(S){const z=l()[S];if(!z)return _(S);const{shape:G,color:H}=z;if(G===o()&&H===i())return;const y=[S],R=new Set;for(;y.length;){const E=y.pop();if(E===void 0||R.has(E))continue;R.add(E);const J=l()[E];if(!J||J.shape!==G||J.color!==H)continue;l(l()[E]={shape:o(),color:i(),rotation:o()==="quarter"?b():o()==="halfCircle"?g():0},!0);const Z=E%a(),se=Math.floor(E/a());Z>0&&y.push(E-1),Z<a()-1&&y.push(E+1),se>0&&y.push(E-a()),se<r()-1&&y.push(E+a())}l([...l()]),n("gridChanged",{grid:l()})}function _(S){const z=l()[S];z&&z.shape===o()&&z.color===i()?l(l()[S]=null,!0):o()==="quarter"?l(l()[S]={shape:o(),color:i(),rotation:b()},!0):o()==="halfCircle"?l(l()[S]={shape:o(),color:i(),rotation:g()},!0):l(l()[S]={shape:o(),color:i(),rotation:0},!0),l([...l()]),n("gridChanged",{grid:l()})}function $(S){const z=l()[S];z&&z.color&&n("colorPicked",{color:z.color})}function T(S,z){z.stopPropagation(),!h()&&(f()?P(S):c()?$(S):d()?C(S):_(S))}function P(S,z){const G=S%a(),H=Math.floor(S/a());k(v,!0),u({startX:G,startY:H,endX:G,endY:H,active:!0}),n("selectionChanged",{selection:u()})}function F(S,z){f()&&P(S)}function m(S,z){if(f()&&s(v)){const G=S%a(),H=Math.floor(S/a());u({...u(),endX:G,endY:H}),n("selectionChanged",{selection:u()})}}function D(S,z){f()&&s(v)&&(k(v,!1),n("selectionChanged",{selection:u()}))}function I(){s(v)&&k(v,!1)}function A(S){S.key==="g"&&k(M,!s(M))}Ln(()=>{typeof window<"u"&&(window.addEventListener("mouseup",I),window.addEventListener("keydown",A))}),Sa(()=>{typeof window<"u"&&(window.removeEventListener("mouseup",I),window.removeEventListener("keydown",A))});function O(S){if(!u().active)return!1;const z=S%a(),G=Math.floor(S/a()),H=Math.min(u().startX,u().endX),y=Math.max(u().startX,u().endX),R=Math.min(u().startY,u().endY),E=Math.max(u().startY,u().endY);return z>=H&&z<=y&&G>=R&&G<=E}function N(S,z){S.key==="Enter"&&(c()?$(z):d()?C(z):_(z))}ze();var V=Ro(),te=Y(V);zt(te,1,l,At,(S,z,G)=>{var H=$o(),y=Y(H);{var R=E=>{var J=Ce(),Z=xe(J);{var se=ae=>{Cl(ae,{get color(){return s(z),U(()=>s(z).color)}})},Q=ae=>{var pe=Ce(),ke=xe(pe);{var ve=_e=>{_l(_e,{get color(){return s(z),U(()=>s(z).color)}})},Je=_e=>{var De=Ce(),qe=xe(De);{var ft=He=>{wl(He,{get color(){return s(z),U(()=>s(z).color)},get rotation(){return s(z),U(()=>s(z).rotation)}})},Ct=He=>{var _t=Ce(),Jt=xe(_t);{var p=K=>{Tl(K,{get color(){return s(z),U(()=>s(z).color)},get rotation(){return s(z),U(()=>s(z).rotation)}})};Ye(Jt,K=>{s(z),U(()=>s(z).shape==="halfCircle")&&K(p)},!0)}j(He,_t)};Ye(qe,He=>{s(z),U(()=>s(z).shape==="quarter")?He(ft):He(Ct,!1)},!0)}j(_e,De)};Ye(ke,_e=>{s(z),U(()=>s(z).shape==="circle")?_e(ve):_e(Je,!1)},!0)}j(ae,pe)};Ye(Z,ae=>{s(z),U(()=>s(z).shape==="square")?ae(se):ae(Q,!1)})}j(E,J)};Ye(y,E=>{s(z)&&E(R)})}q(H),we(E=>Ee(H,1,`cell ${E??""} ${f()?"select-mode":""} ${s(M)?"":"no-border"}`,"svelte-1hhz0mg"),[()=>U(()=>O(G)?"selected":"")]),le("click",H,E=>T(G,E)),le("mousedown",H,E=>F(G)),le("mouseenter",H,E=>m(G)),le("mouseup",H,E=>D()),le("keydown",H,E=>N(E,G)),j(S,H)});var ne=oe(te,2);{var re=S=>{const z=ye(()=>(X(u()),U(()=>Math.min(u().startX,u().endX)))),G=ye(()=>(X(u()),U(()=>Math.max(u().startX,u().endX)))),H=ye(()=>(X(u()),U(()=>Math.min(u().startY,u().endY)))),y=ye(()=>(X(u()),U(()=>Math.max(u().startY,u().endY)))),R=ye(()=>s(z)/a()*100),E=ye(()=>s(H)/r()*100),J=ye(()=>(s(G)-s(z)+1)/a()*100),Z=ye(()=>(s(y)-s(H)+1)/r()*100);var se=Eo();we(()=>je(se,`left: ${s(R)??""}%; top: ${s(E)??""}%; width: ${s(J)??""}%; height: ${s(Z)??""}%;`)),j(S,se)};Ye(ne,S=>{X(f()),X(u()),s(v),U(()=>f()&&u().active&&(s(v)||u().startX!==u().endX||u().startY!==u().endY))&&S(re)})}q(V),we(()=>je(V,`--width: ${a()??""}; --height: ${r()??""};`)),j(e,V),Ae()}var No=ge('<div class="container svelte-1w4104m"><!></div>');function za(e,t){Te(t,!1);const n=Re();let l=B(t,"grid",8,null),a=B(t,"width",8,32),r=B(t,"height",8,32),o=B(t,"selectedShape",8,"square"),i=B(t,"selectedColor",24,()=>Ue.length>0?Ue[0].rgb:"#000000"),d=B(t,"paintMode",8,!1),c=B(t,"colorPickerMode",8,!1),f=B(t,"selectMode",8,!1),b=B(t,"quarterRotation",8,0),g=B(t,"halfCircleRotation",8,0),u=B(t,"zoom",12,1),h=B(t,"selection",28,()=>({startX:0,startY:0,endX:0,endY:0,active:!1})),v=ee(),M=ee(0),C=ee(0);function _(A){u(A.detail.zoom)}function $(A){k(M,A.detail.panX),k(C,A.detail.panY)}function T(A){A.detail.didPan}function P(A){k(v,A.detail.grid),n("gridChanged",A.detail)}function F(A){n("colorPicked",A.detail)}function m(A){h(A.detail.selection),n("selectionChanged",A.detail)}Tn(()=>(X(l()),X(a()),X(r())),()=>{k(v,l()||Array(a()*r()).fill(null))}),Oa(),ze();var D=No(),I=Y(D);zo(I,{get zoom(){return u()},get panX(){return s(M)},get panY(){return s(C)},get selectMode(){return f()},$$events:{zoomChanged:_,panChanged:$,panEnd:T},children:h0,$$slots:{default:(A,O)=>{const N=ye(()=>O.didPan);Lo(A,{get grid(){return s(v)},get width(){return a()},get height(){return r()},get selectedShape(){return o()},get selectedColor(){return i()},get paintMode(){return d()},get colorPickerMode(){return c()},get selectMode(){return f()},get quarterRotation(){return b()},get halfCircleRotation(){return g()},get selection(){return h()},get didPan(){return s(N)},$$events:{gridChanged:P,colorPicked:F,selectionChanged:m}})}}}),q(D),j(e,D),Ae()}var Io=ge('<button type="button"></button>'),Oo=ge('<div class="palette-row"></div>'),qo=ge('<div class="color-picker"><!> <div class="colors"><div class="palette2d"></div></div></div>');function Ho(e,t){Te(t,!1);let n=B(t,"selectedColor",12,null);const l=Re();let a=ee(""),r=Ue,o=ee(!1),i=ee(null),d=ee(r);function c(h){n(h),l("colorSelected",{color:h})}Tn(()=>(s(o),s(i)),()=>{s(o)&&Ia().then(()=>{s(i)?.focus()})}),Tn(()=>s(a),()=>{k(d,s(a).trim()?r.filter(h=>h.name.toLowerCase().includes(s(a).toLowerCase())||h.rgb.replace("#","").includes(s(a).replace("#",""))):r)}),Oa(),ze();var f=qo(),b=Y(f);Ye(b,h=>{});var g=oe(b,2),u=Y(g);zt(u,5,()=>Me,At,(h,v)=>{var M=Oo();zt(M,5,()=>s(v),At,(C,_)=>{var $=Io();we(()=>{je($,`width: 1.5rem; height: 1.5rem; background: ${s(_),U(()=>s(_).rgb)??""}; border: 2px solid ${X(n()),s(_),U(()=>n()===s(_).rgb?"#333":"#ccc")??""}; border-radius: 0.25rem; cursor: pointer; margin: 0 0.1rem 0.1rem 0;`),he($,"aria-label",(s(_),U(()=>s(_).name))),he($,"title",(s(_),U(()=>s(_).name)))}),le("click",$,()=>c(s(_).rgb)),j(C,$)}),q(M),j(h,M)}),q(u),q(g),q(f),j(e,f),Ae()}const ue={select:{key:"v",action:"select"},square:{key:"s",action:"square"},circle:{key:"c",action:"circle"},quarter:{key:"q",action:"quarter"},halfCircle:{key:"h",action:"halfCircle"},fill:{key:"f",action:"fill"},colorPicker:{key:"i",action:"colorPicker"},zoomIn:{key:"+",action:"zoomIn"},zoomInAlt:{key:"=",action:"zoomIn"},zoomOut:{key:"-",action:"zoomOut"},undo:{key:"z",ctrl:!0,action:"undo"},redo:{key:"z",ctrl:!0,shift:!0,action:"redo"},cut:{key:"x",ctrl:!0,action:"cut"},copy:{key:"c",ctrl:!0,action:"copy"},paste:{key:"v",ctrl:!0,action:"paste"},selectAll:{key:"a",ctrl:!0,action:"selectAll"},deselect:{key:"d",ctrl:!0,action:"deselect"},rotateLeft:{key:"r",action:"rotateLeft"},rotateRight:{key:"r",shift:!0,action:"rotateRight"},moveUp:{key:"ArrowUp",action:"moveUp"},moveDown:{key:"ArrowDown",action:"moveDown"},moveLeft:{key:"ArrowLeft",action:"moveLeft"},moveRight:{key:"ArrowRight",action:"moveRight"},delete:{key:"Delete",action:"delete"},backspace:{key:"Backspace",action:"delete"},colorLeft:{key:"a",shift:!0,action:"colorLeft"},colorRight:{key:"d",shift:!0,action:"colorRight"},colorUp:{key:"w",shift:!0,action:"colorUp"},colorDown:{key:"s",shift:!0,action:"colorDown"}};function Yo(e,t){const l=(e.key===" "?"Space":e.key).toLowerCase(),a=t.key.toLowerCase();return l!==a||!!e.ctrlKey!=!!t.ctrl||!!e.altKey!=!!t.alt?!1:t.key==="+"||t.key==="-"||t.key==="="?!0:!!e.shiftKey==!!t.shift}function ce(e){const t=[];e.ctrl&&t.push("Ctrl"),e.shift&&t.push("Shift"),e.alt&&t.push("Alt");let n=e.key;return n===" "&&(n="Space"),n==="="&&(n="+"),t.push(n.toUpperCase()),t.join("+")}var Xo=ge('<div class="shape-group"><div class="group-label">Shapes</div> <div class="shape-grid"><button aria-label="Square"><div class="shape-icon"><!></div></button> <button aria-label="Circle"><div class="shape-icon"><!></div></button> <button aria-label="Quarter"><div class="shape-icon"><!></div></button> <button aria-label="Half Circle"><div class="shape-icon"><!></div></button></div></div>');function Go(e,t){Te(t,!1);const n=Re();let l=B(t,"selectedShape",12,"square"),a=B(t,"selectedColor",8,"#000000"),r=B(t,"quarterRotation",12,0),o=B(t,"halfCircleRotation",12,0);function i(A){if(A==="quarter")if(l()==="quarter"){r((r()+1)%4),n("quarterRotationChanged",{rotation:r()});return}else r(0);if(A==="halfCircle")if(l()==="halfCircle"){o((o()+1)%4),n("halfCircleRotationChanged",{rotation:o()});return}else o(0);l(A),n("shapeSelected",{shape:A}),A==="quarter"&&n("quarterRotationChanged",{rotation:r()}),A==="halfCircle"&&n("halfCircleRotationChanged",{rotation:o()})}ze();var d=Xo(),c=oe(Y(d),2),f=Y(c);let b;var g=Y(f),u=Y(g);Cl(u,{get color(){return a()}}),q(g),q(f);var h=oe(f,2);let v;var M=Y(h),C=Y(M);_l(C,{get color(){return a()}}),q(M),q(h);var _=oe(h,2);let $;var T=Y(_),P=Y(T);wl(P,{get color(){return a()},get rotation(){return r()}}),q(T),q(_);var F=oe(_,2);let m;var D=Y(F),I=Y(D);Tl(I,{get color(){return a()},get rotation(){return o()}}),q(D),q(F),q(c),q(d),we((A,O,N,V,te,ne,re,S)=>{b=Ee(f,1,"shape-button",null,b,A),he(f,"title",`Square (${O??""})`),v=Ee(h,1,"shape-button",null,v,N),he(h,"title",`Circle (${V??""})`),$=Ee(_,1,"shape-button",null,$,te),he(_,"title",`Quarter (${ne??""})`),m=Ee(F,1,"shape-button",null,m,re),he(F,"title",`Half Circle (${S??""})`)},[()=>({selected:l()==="square"}),()=>(X(ce),X(ue),U(()=>ce(ue.square))),()=>({selected:l()==="circle"}),()=>(X(ce),X(ue),U(()=>ce(ue.circle))),()=>({selected:l()==="quarter"}),()=>(X(ce),X(ue),U(()=>ce(ue.quarter))),()=>({selected:l()==="halfCircle"}),()=>(X(ce),X(ue),U(()=>ce(ue.halfCircle)))]),le("click",f,()=>i("square")),le("click",h,()=>i("circle")),le("click",_,()=>i("quarter")),le("click",F,()=>i("halfCircle")),j(e,d),Ae()}/**
 * @license lucide-svelte v0.544.0 - ISC
 *
 * ISC License
 * 
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 * 
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 * 
 * ---
 * 
 * The MIT License (MIT) (for portions derived from Feather)
 * 
 * Copyright (c) 2013-2023 Cole Bemis
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 * 
 */const Uo={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};var jo=g0("<svg><!><!></svg>");function Oe(e,t){const n=Se(t,["children","$$slots","$$events","$$legacy"]),l=Se(n,["name","color","size","strokeWidth","absoluteStrokeWidth","iconNode"]);Te(t,!1);let a=B(t,"name",8,void 0),r=B(t,"color",8,"currentColor"),o=B(t,"size",8,24),i=B(t,"strokeWidth",8,2),d=B(t,"absoluteStrokeWidth",8,!1),c=B(t,"iconNode",24,()=>[]);const f=(...h)=>h.filter((v,M,C)=>!!v&&C.indexOf(v)===M).join(" ");ze();var b=jo();ta(b,(h,v)=>({...Uo,...l,width:o(),height:o(),stroke:r(),"stroke-width":h,class:v}),[()=>(X(d()),X(i()),X(o()),U(()=>d()?Number(i())*24/Number(o()):i())),()=>(X(a()),X(n),U(()=>f("lucide-icon","lucide",a()?`lucide-${a()}`:"",n.class)))]);var g=Y(b);zt(g,1,c,At,(h,v)=>{var M=b0(()=>p0(s(v),2));let C=()=>s(M)[0],_=()=>s(M)[1];var $=Ce(),T=xe($);M0(T,C,!0,(P,F)=>{ta(P,()=>({..._()}))}),j(h,$)});var u=oe(g);Be(u,t,"default",{}),q(b),j(e,b),Ae()}function Vo(e,t){const n=Se(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.544.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const l=[["path",{d:"M12 15V3"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}],["path",{d:"m7 10 5 5 5-5"}]];Oe(e,Le({name:"download"},()=>n,{get iconNode(){return l},children:(a,r)=>{var o=Ce(),i=xe(o);Be(i,t,"default",{}),j(a,o)},$$slots:{default:!0}}))}function Zo(e,t){const n=Se(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.544.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const l=[["path",{d:"M14 4.1 12 6"}],["path",{d:"m5.1 8-2.9-.8"}],["path",{d:"m6 12-1.9 2"}],["path",{d:"M7.2 2.2 8 5.1"}],["path",{d:"M9.037 9.69a.498.498 0 0 1 .653-.653l11 4.5a.5.5 0 0 1-.074.949l-4.349 1.041a1 1 0 0 0-.74.739l-1.04 4.35a.5.5 0 0 1-.95.074z"}]];Oe(e,Le({name:"mouse-pointer-click"},()=>n,{get iconNode(){return l},children:(a,r)=>{var o=Ce(),i=xe(o);Be(i,t,"default",{}),j(a,o)},$$slots:{default:!0}}))}function Jo(e,t){const n=Se(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.544.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const l=[["path",{d:"m19 11-8-8-8.6 8.6a2 2 0 0 0 0 2.8l5.2 5.2c.8.8 2 .8 2.8 0L19 11Z"}],["path",{d:"m5 2 5 5"}],["path",{d:"M2 13h15"}],["path",{d:"M22 20a2 2 0 1 1-4 0c0-1.6 1.7-2.4 2-4 .3 1.6 2 2.4 2 4Z"}]];Oe(e,Le({name:"paint-bucket"},()=>n,{get iconNode(){return l},children:(a,r)=>{var o=Ce(),i=xe(o);Be(i,t,"default",{}),j(a,o)},$$slots:{default:!0}}))}function Wo(e,t){const n=Se(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.544.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const l=[["path",{d:"m12 9-8.414 8.414A2 2 0 0 0 3 18.828v1.344a2 2 0 0 1-.586 1.414A2 2 0 0 1 3.828 21h1.344a2 2 0 0 0 1.414-.586L15 12"}],["path",{d:"m18 9 .4.4a1 1 0 1 1-3 3l-3.8-3.8a1 1 0 1 1 3-3l.4.4 3.4-3.4a1 1 0 1 1 3 3z"}],["path",{d:"m2 22 .414-.414"}]];Oe(e,Le({name:"pipette"},()=>n,{get iconNode(){return l},children:(a,r)=>{var o=Ce(),i=xe(o);Be(i,t,"default",{}),j(a,o)},$$slots:{default:!0}}))}function Ko(e,t){const n=Se(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.544.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const l=[["path",{d:"M21 7v6h-6"}],["path",{d:"M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7"}]];Oe(e,Le({name:"redo"},()=>n,{get iconNode(){return l},children:(a,r)=>{var o=Ce(),i=xe(o);Be(i,t,"default",{}),j(a,o)},$$slots:{default:!0}}))}function Qo(e,t){const n=Se(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.544.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const l=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7"}]];Oe(e,Le({name:"save"},()=>n,{get iconNode(){return l},children:(a,r)=>{var o=Ce(),i=xe(o);Be(i,t,"default",{}),j(a,o)},$$slots:{default:!0}}))}function ei(e,t){const n=Se(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.544.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const l=[["path",{d:"M3 7v6h6"}],["path",{d:"M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13"}]];Oe(e,Le({name:"undo"},()=>n,{get iconNode(){return l},children:(a,r)=>{var o=Ce(),i=xe(o);Be(i,t,"default",{}),j(a,o)},$$slots:{default:!0}}))}function ti(e,t){const n=Se(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.544.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const l=[["circle",{cx:"11",cy:"11",r:"8"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65"}],["line",{x1:"11",x2:"11",y1:"8",y2:"14"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11"}]];Oe(e,Le({name:"zoom-in"},()=>n,{get iconNode(){return l},children:(a,r)=>{var o=Ce(),i=xe(o);Be(i,t,"default",{}),j(a,o)},$$slots:{default:!0}}))}function ni(e,t){const n=Se(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.544.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const l=[["circle",{cx:"11",cy:"11",r:"8"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11"}]];Oe(e,Le({name:"zoom-out"},()=>n,{get iconNode(){return l},children:(a,r)=>{var o=Ce(),i=xe(o);Be(i,t,"default",{}),j(a,o)},$$slots:{default:!0}}))}var ai=ge('<div class="tool-group"><div class="group-label">Tools</div> <div class="tool-grid"><button type="button" aria-label="Selection tool"><!></button> <button type="button" aria-label="Zoom in" class="tool-button"><!></button> <button type="button" aria-label="Zoom out" class="tool-button"><!></button> <button type="button" aria-label="Paint bucket tool"><!></button> <button type="button" aria-label="Color picker tool"><!></button> <button type="button" aria-label="Undo" class="tool-button"><!></button> <button type="button" aria-label="Redo" class="tool-button"><!></button> <button type="button" aria-label="Save" class="tool-button" title="Save Project"><!></button> <button type="button" aria-label="Load" class="tool-button" title="Load Project"><!></button></div></div>');function li(e,t){Te(t,!1);const n=Re();let l=B(t,"paintMode",12,!1),a=B(t,"colorPickerMode",12,!1),r=B(t,"selectMode",12,!1),o=B(t,"canUndo",8,!1),i=B(t,"canRedo",8,!1);function d(){l(!l()),l()&&(a(!1),r(!1)),n("paintModeToggled",{paintMode:l()})}function c(){a(!a()),a()&&(l(!1),r(!1)),n("colorPickerModeToggled",{colorPickerMode:a()})}function f(){r(!r()),r()&&(l(!1),a(!1)),n("selectModeToggled",{selectMode:r()})}function b(){n("undo")}function g(){n("redo")}function u(){n("save")}function h(){n("load")}ze();var v=ai(),M=oe(Y(v),2),C=Y(M);let _;var $=Y(C);{let R=ye(()=>r()?"#333":"#555");Zo($,{size:24,get color(){return s(R)}})}q(C);var T=oe(C,2),P=Y(T);ti(P,{size:24,color:"#555"}),q(T);var F=oe(T,2),m=Y(F);ni(m,{size:24,color:"#555"}),q(F);var D=oe(F,2);let I;var A=Y(D);{let R=ye(()=>l()?"#333":"#555");Jo(A,{size:24,get color(){return s(R)}})}q(D);var O=oe(D,2);let N;var V=Y(O);{let R=ye(()=>a()?"#333":"#555");Wo(V,{size:24,get color(){return s(R)}})}q(O);var te=oe(O,2),ne=Y(te);{let R=ye(()=>o()?"#555":"#ccc");ei(ne,{size:24,get color(){return s(R)}})}q(te);var re=oe(te,2),S=Y(re);{let R=ye(()=>i()?"#555":"#ccc");Ko(S,{size:24,get color(){return s(R)}})}q(re);var z=oe(re,2),G=Y(z);Qo(G,{size:24,color:"#555"}),q(z);var H=oe(z,2),y=Y(H);Vo(y,{size:24,color:"#555"}),q(H),q(M),q(v),we((R,E,J,Z,se,Q,ae,pe,ke,ve)=>{_=Ee(C,1,"tool-button",null,_,R),he(C,"title",`Selection Tool (${E??""})`),he(T,"title",`Zoom In (${J??""})`),he(F,"title",`Zoom Out (${Z??""})`),I=Ee(D,1,"tool-button",null,I,se),he(D,"title",`Fill Tool (${Q??""})`),N=Ee(O,1,"tool-button",null,N,ae),he(O,"title",`Color Picker (${pe??""})`),he(te,"title",`Undo (${ke??""})`),te.disabled=!o(),he(re,"title",`Redo (${ve??""})`),re.disabled=!i()},[()=>({active:r()}),()=>(X(ce),X(ue),U(()=>ce(ue.select))),()=>(X(ce),X(ue),U(()=>ce(ue.zoomIn))),()=>(X(ce),X(ue),U(()=>ce(ue.zoomOut))),()=>({active:l()}),()=>(X(ce),X(ue),U(()=>ce(ue.fill))),()=>({active:a()}),()=>(X(ce),X(ue),U(()=>ce(ue.colorPicker))),()=>(X(ce),X(ue),U(()=>ce(ue.undo))),()=>(X(ce),X(ue),U(()=>ce(ue.redo)))]),le("click",C,f),le("click",T,()=>n("zoomIn")),le("click",F,()=>n("zoomOut")),le("click",D,d),le("click",O,c),le("click",te,b),le("click",re,g),le("click",z,u),le("click",H,h),j(e,v),Ae()}var ri=ge('<div class="canvas-size-group" style="display:flex; justify-content:center; flex-direction: column; align-items:center; width:100%;"><div class="group-label">Size</div> <div class="tool-grid" style="display:flex; justify-content: center"><label style="display:flex; flex-direction:column; align-items:center;"><input type="number" min="1" max="256"/></label></div></div>');function oi(e,t){Te(t,!1);const n=Re();let l=B(t,"size",12,32);function a(c){const f=c.target;l(Math.max(1,Math.min(128,parseInt(f.value)||1))),n("sizeChanged",{size:l()})}ze();var r=ri(),o=oe(Y(r),2),i=Y(o),d=Y(i);Ga(d),q(i),q(o),q(r),z0(d,l),le("input",d,a),j(e,r),Ae()}var ii=ge('<div class="image-upload"><label class="upload-label"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#555" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align: middle;"><path d="M12 16V4"></path><polyline points="8 8 12 4 16 8"></polyline><rect x="4" y="16" width="16" height="4" rx="2"></rect></svg> <span>Upload image</span> <input type="file" accept="image/png, image/jpeg"/></label></div>');function si(e,t){Te(t,!1);const n=Re();function l(i){const d=i.target,c=d.files&&d.files[0];if(c){const f=new FileReader;f.onload=()=>{n("imageUploaded",{src:f.result,fileName:c.name})},f.readAsDataURL(c)}}ze();var a=ii(),r=Y(a),o=oe(Y(r),4);q(r),q(a),le("change",o,l),j(e,a),Ae()}var di=ge('<button class="toolbar-toggle" aria-label="Show/hide toolbar"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#555" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align: middle;"><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg></button>');function ui(e,t){Te(t,!1);const n=Re();function l(){n("toggle")}ze();var a=di();le("click",a,l),j(e,a),Ae()}var ci=ge("<!> <div><!> <!> <!> <!> <!></div>",1);function fi(e,t){Te(t,!1);const n=Re();let l=B(t,"selectedShape",12,"square"),a=B(t,"selectedColor",12,"#000000"),r=B(t,"paintMode",12,!1),o=B(t,"colorPickerMode",12,!1),i=B(t,"selectMode",12,!1),d=B(t,"size",12,32),c=ee(!0),f=B(t,"quarterRotation",12,0),b=B(t,"halfCircleRotation",12,0),g=B(t,"canUndo",12,!1),u=B(t,"canRedo",12,!1);function h(y){l(y.detail.shape),n("shapeSelected",y.detail)}function v(y){f(y.detail.rotation),n("quarterRotationChanged",y.detail)}function M(y){b(y.detail.rotation),n("halfCircleRotationChanged",y.detail)}function C(y){a(y.detail.color),n("colorSelected",y.detail)}function _(y){r(y.detail.paintMode),n("paintModeToggled",y.detail)}function $(y){o(y.detail.colorPickerMode),n("colorPickerModeToggled",y.detail)}function T(y){i(y.detail.selectMode),n("selectModeToggled",y.detail)}function P(){n("undo")}function F(){n("redo")}function m(y){d(y.detail.size),n("sizeChanged",y.detail)}function D(y){n("imageUploaded",y.detail)}function I(){n("save")}function A(){n("load")}function O(){k(c,!s(c))}ze();var N=ci(),V=xe(N);ui(V,{$$events:{toggle:O}});var te=oe(V,2);let ne;var re=Y(te);Go(re,{get selectedColor(){return a()},get selectedShape(){return l()},set selectedShape(y){l(y)},get quarterRotation(){return f()},set quarterRotation(y){f(y)},get halfCircleRotation(){return b()},set halfCircleRotation(y){b(y)},$$events:{shapeSelected:h,quarterRotationChanged:v,halfCircleRotationChanged:M},$$legacy:!0});var S=oe(re,2);li(S,{get paintMode(){return r()},set paintMode(y){r(y)},get colorPickerMode(){return o()},set colorPickerMode(y){o(y)},get selectMode(){return i()},set selectMode(y){i(y)},get canUndo(){return g()},set canUndo(y){g(y)},get canRedo(){return u()},set canRedo(y){u(y)},$$events:{paintModeToggled:_,colorPickerModeToggled:$,selectModeToggled:T,undo:P,redo:F,zoomIn:()=>n("zoomIn"),zoomOut:()=>n("zoomOut"),save:I,load:A},$$legacy:!0});var z=oe(S,2);Ho(z,{get selectedColor(){return a()},set selectedColor(y){a(y)},$$events:{colorSelected:C},$$legacy:!0});var G=oe(z,2);oi(G,{get size(){return d()},set size(y){d(y)},$$events:{sizeChanged:m},$$legacy:!0});var H=oe(G,2);si(H,{$$events:{imageUploaded:D}}),q(te),we(y=>ne=Ee(te,1,"toolbar left",null,ne,y),[()=>({visible:s(c)})]),j(e,N),Ae()}const hi=st("oklab");function Da(e,t,n,l){const a=hi({mode:"rgb",r:e/255,g:t/255,b:n/255});let r=1/0,o=l[0];for(const i of l){const d=vt("oklab")(a,i.lab);d<r&&(r=d,o=i)}return o}const gi=st("oklab");function bi(e,t,n=32,l=32){return new Promise((a,r)=>{const o=new window.Image;o.crossOrigin="Anonymous",o.src=e;const i=t.map(d=>({hex:d,lab:gi(d)}));o.onload=()=>{const d=o.width,c=o.height,f=document.createElement("canvas"),b=f.getContext("2d",{willReadFrequently:!0});if(!b){r(new Error("Could not get 2D context"));return}f.width=d,f.height=c,b.drawImage(o,0,0,d,c);const g=b.getImageData(0,0,d,c).data,u=[],h=d/n,v=c/l;for(let M=0;M<l;M++)for(let C=0;C<n;C++){const _=Math.floor(C*h),$=Math.floor(M*v),T=Math.floor((C+1)*h),P=Math.floor((M+1)*v),F=[{r:0,g:0,b:0,count:0,transparent:0},{r:0,g:0,b:0,count:0,transparent:0},{r:0,g:0,b:0,count:0,transparent:0},{r:0,g:0,b:0,count:0,transparent:0}];let m=0;const D=(T-_)*(P-$);for(let y=$;y<P;y++)for(let R=_;R<T;R++){const E=(y*d+R)*4,J=g[E],Z=g[E+1],se=g[E+2],Q=g[E+3];Q<128&&m++;const ae=R<_+h/2?0:1,ke=(y<$+v/2?0:1)*2+ae,ve=F[ke];Q>128?(ve.r+=J,ve.g+=Z,ve.b+=se,ve.count++):ve.transparent++}if(m/D>.95){u.push({shape:"empty",color:"#FFFFFF",rotation:0});continue}const I=F.reduce((y,R)=>y+R.r,0),A=F.reduce((y,R)=>y+R.g,0),O=F.reduce((y,R)=>y+R.b,0),N=F.reduce((y,R)=>y+R.count,0),V={r:I/N,g:A/N,b:O/N},te=F.map(y=>{const R=y.count||1,E=y.count>0?y.r/R:V.r,J=y.count>0?y.g/R:V.g,Z=y.count>0?y.b/R:V.b;return{r:E,g:J,b:Z}}),ne=Da(V.r,V.g,V.b,i),re=te.map(y=>Da(y.r,y.g,y.b,i));let S="square",z=0,G=ne.hex,H=[...re];for(let y=0;y<3;y++){const R=[...new Set(H.map(E=>E.hex))];if(R.length===1){S="square",G=R[0];break}if(R.length===2){const E=R[0],J=H.filter(Z=>Z.hex===E).length;if(J===1||J===3){S="quarter";const Z=J===1?E:R[1],se=J===3?E:R[1],Q=H.findIndex(pe=>pe.hex===Z);G=se,z=[2,3,1,0][Q]}else{const[Z,se,Q,ae]=H,pe=Z.hex===se.hex&&Q.hex===ae.hex,ke=Z.hex===Q.hex&&se.hex===ae.hex;if(pe||ke)S="halfCircle",G=ne.hex,pe?z=Z.hex===ne.hex?2:0:z=Z.hex===ne.hex?1:3;else{const ve=R[1],Je=i.find(qe=>qe.hex===E),_e=i.find(qe=>qe.hex===ve);vt("oklab")(Je.lab,_e.lab)>.15?S="circle":S="square",G=ne.hex}}break}if(R.length>2){let E=1/0,J=null;const Z=R.map(Q=>i.find(ae=>ae.hex===Q));for(let Q=0;Q<Z.length;Q++)for(let ae=Q+1;ae<Z.length;ae++){const pe=Z[Q],ke=Z[ae],ve=vt("oklab")(pe.lab,ke.lab);ve<E&&(E=ve,J=[pe,ke])}if(E<.05&&J){const[Q,ae]=J,pe=ne.lab,ke=vt("oklab")(pe,Q.lab),ve=vt("oklab")(pe,ae.lab),[Je,_e]=ke<ve?[Q,ae]:[ae,Q];H=H.map(De=>De.hex===_e.hex?Je:De)}else{S="circle",G=ne.hex;break}}}u.push({shape:S,color:G,rotation:z})}a(u)},o.onerror=d=>{console.error("Failed to load image:",o.src,d),r(new Error("Failed to load image. Check if the URL is correct and accessible."))}})}class pi{history=[];currentIndex=-1;maxHistory=50;constructor(t){t&&this.addState(t)}addState(t){this.currentIndex<this.history.length-1&&(this.history=this.history.slice(0,this.currentIndex+1)),this.history.push({grid:JSON.parse(JSON.stringify(t)),timestamp:Date.now()}),this.history.length>this.maxHistory?this.history.shift():this.currentIndex++}undo(){return this.canUndo()?(this.currentIndex--,JSON.parse(JSON.stringify(this.history[this.currentIndex].grid))):null}redo(){return this.canRedo()?(this.currentIndex++,JSON.parse(JSON.stringify(this.history[this.currentIndex].grid))):null}canUndo(){return this.currentIndex>0}canRedo(){return this.currentIndex<this.history.length-1}clear(){this.history=[],this.currentIndex=-1}getCurrentState(){return this.currentIndex>=0&&this.currentIndex<this.history.length?JSON.parse(JSON.stringify(this.history[this.currentIndex].grid)):null}}class vi{clipboardData=null;copy(t,n,l){const{startX:a,startY:r,endX:o,endY:i}=this.normalizeSelection(n),d=o-a+1,c=i-r+1,f=[];for(let b=r;b<=i;b++)for(let g=a;g<=o;g++){const u=b*l+g;f.push(t[u]?JSON.parse(JSON.stringify(t[u])):null)}this.clipboardData={cells:f,width:d,height:c}}cut(t,n,l){return this.copy(t,n,l),this.deleteSelection(t,n,l)}paste(t,n,l,a,r){if(!this.clipboardData)return t;const o=[...t],{cells:i,width:d,height:c}=this.clipboardData;for(let f=0;f<c;f++)for(let b=0;b<d;b++){const g=n+b,u=l+f;if(g>=0&&g<a&&u>=0&&u<r){const h=f*d+b,v=u*a+g;o[v]=i[h]?JSON.parse(JSON.stringify(i[h])):null}}return o}deleteSelection(t,n,l){const{startX:a,startY:r,endX:o,endY:i}=this.normalizeSelection(n),d=[...t];for(let c=r;c<=i;c++)for(let f=a;f<=o;f++){const b=c*l+f;d[b]=null}return d}rotateSelection(t,n,l,a=!0){const{startX:r,startY:o,endX:i,endY:d}=this.normalizeSelection(n),c=i-r+1,f=d-o+1,b=[];for(let u=o;u<=d;u++)for(let h=r;h<=i;h++){const v=u*l+h;b.push(t[v])}const g=new Array(c*f);for(let u=0;u<f;u++)for(let h=0;h<c;h++){const v=u*c+h;let M;a?M=h*f+(f-1-u):M=(c-1-h)*f+u;const C=b[v];g[M]=C?{...C,rotation:(C.rotation+(a?1:-1)+4)%4}:null}if(c===f){const u=[...t];for(let h=0;h<f;h++)for(let v=0;v<c;v++){const M=(o+h)*l+(r+v),C=h*c+v;u[M]=g[C]}return u}return t}moveSelection(t,n,l,a,r,o){const{startX:i,startY:d,endX:c,endY:f}=this.normalizeSelection(n),b=c-i+1,g=f-d+1,u=Math.max(0,Math.min(r-b,i+l)),h=Math.max(0,Math.min(o-g,d+a)),v=u+b-1,M=h+g-1;if(u===i&&h===d)return{grid:t,selection:n};const C=[];for(let T=d;T<=f;T++)for(let P=i;P<=c;P++){const F=T*r+P;C.push(t[F])}let _=this.deleteSelection(t,n,r);for(let T=0;T<g;T++)for(let P=0;P<b;P++){const F=T*b+P,m=(h+T)*r+(u+P);_[m]=C[F]}const $={...n,startX:u,startY:h,endX:v,endY:M};return{grid:_,selection:$}}hasClipboardData(){return this.clipboardData!==null}getClipboardSize(){return this.clipboardData?{width:this.clipboardData.width,height:this.clipboardData.height}:null}normalizeSelection(t){return{startX:Math.min(t.startX,t.endX),startY:Math.min(t.startY,t.endY),endX:Math.max(t.startX,t.endX),endY:Math.max(t.startY,t.endY)}}}var Fi=ge('<main class="svelte-1uha8ag"><!> <!></main>');function wi(e,t){Te(t,!1);let n=ee("square"),l=ee(Ue.length>0?Ue[0].rgb:"#000000"),a=ee(null),r=ee(!1),o=ee(!1),i=ee(1),d=ee(32),c=ee(!1),f=ee(0),b=ee(0),g="dotsly.json",u=ee({startX:0,startY:0,endX:0,endY:0,active:!1}),h,v,M=ee(!1),C=ee(!1);function _(){k(i,Math.min(s(i)+.1,3))}function $(){k(i,Math.max(s(i)-.1,.2))}function T(p){for(let K=0;K<Me.length;K++)for(let de=0;de<Me[K].length;de++)if(Me[K][de].rgb===p)return{row:K,col:de};return null}function P(){const p=T(s(l));if(p&&p.col>0)k(l,Me[p.row][p.col-1].rgb);else if(p&&p.row>0){const K=p.row-1,de=Me[K].length-1;k(l,Me[K][de].rgb)}}function F(){const p=T(s(l));p&&p.col<Me[p.row].length-1?k(l,Me[p.row][p.col+1].rgb):p&&p.row<Me.length-1&&k(l,Me[p.row+1][0].rgb)}function m(){const p=T(s(l));if(p&&p.row>0){const K=Math.min(p.col,Me[p.row-1].length-1);k(l,Me[p.row-1][K].rgb)}}function D(){const p=T(s(l));if(p&&p.row<Me.length-1){const K=Math.min(p.col,Me[p.row+1].length-1);k(l,Me[p.row+1][K].rgb)}}function I(){if(!s(a))return;const p={grid:s(a),size:s(d),version:"1.0"},K=JSON.stringify(p,null,2),de=new Blob([K],{type:"application/json"}),ht=URL.createObjectURL(de),We=document.createElement("a");We.href=ht,We.download=g,document.body.appendChild(We),We.click(),document.body.removeChild(We),URL.revokeObjectURL(ht)}function A(){const p=document.createElement("input");p.type="file",p.accept=".json",p.onchange=K=>{const de=K.target.files?.[0];if(!de)return;const ht=new FileReader;ht.onload=We=>{try{const nt=JSON.parse(We.target?.result);nt.grid&&nt.size?(k(a,nt.grid),k(d,nt.size),g=de.name,s(a)&&N(s(a))):alert("Invalid file format")}catch(nt){alert("Error loading file: "+nt)}},ht.readAsText(de)},p.click()}Ln(()=>{h=new pi,v=new vi,s(a)||(k(a,Array(s(d)*s(d)).fill(null)),h.addState(s(a))),O(),window.addEventListener("keydown",V)}),Sa(()=>{typeof window<"u"&&window.removeEventListener("keydown",V)});function O(){k(M,h?.canUndo()??!1),k(C,h?.canRedo()??!1)}function N(p){h&&(h.addState(p),O())}function V(p){if(!(p.target instanceof HTMLInputElement||p.target instanceof HTMLTextAreaElement)){for(const[K,de]of Object.entries(ue))if(Yo(p,de)){p.preventDefault(),te(de.action);break}}}function te(p){switch(p){case"select":k(o,!s(o)),s(o)&&(k(r,!1),k(c,!1));break;case"square":k(n,"square");break;case"circle":k(n,"circle");break;case"quarter":s(n)==="quarter"?k(f,(s(f)+1)%4):(k(n,"quarter"),k(f,0));break;case"halfCircle":s(n)==="halfCircle"?k(b,(s(b)+1)%4):(k(n,"halfCircle"),k(b,0));break;case"fill":k(r,!s(r)),s(r)&&(k(o,!1),k(c,!1));break;case"colorPicker":k(c,!s(c)),s(c)&&(k(o,!1),k(r,!1));break;case"zoomIn":_();break;case"zoomOut":$();break;case"undo":E();break;case"redo":J();break;case"cut":Q();break;case"copy":ae();break;case"paste":pe();break;case"selectAll":ve();break;case"deselect":Je();break;case"delete":ke();break;case"rotateLeft":s(u).active&&_e(!1);break;case"rotateRight":s(u).active&&_e(!0);break;case"moveUp":s(u).active&&De(0,-1);break;case"moveDown":s(u).active&&De(0,1);break;case"moveLeft":s(u).active&&De(-1,0);break;case"moveRight":s(u).active&&De(1,0);break;case"colorLeft":P();break;case"colorRight":F();break;case"colorUp":m();break;case"colorDown":D();break}}function ne(p){k(n,p.detail.shape)}function re(p){k(f,p.detail.rotation)}function S(p){k(b,p.detail.rotation)}function z(p){k(l,p.detail.color)}async function G(p){const K=Ue.map(de=>de.rgb);k(a,await bi(p.detail.src,K,s(d),s(d))),N(s(a)),p.detail.fileName?g=`${p.detail.fileName.replace(/\.[^/.]+$/,"")}.json`:g="dotsly.json"}function H(p){k(d,p.detail.size),k(a,null)}function y(p){k(c,p.detail.colorPickerMode)}function R(p){k(o,p.detail.selectMode),s(o)&&(k(r,!1),k(c,!1))}function E(){if(h){const p=h.undo();p&&(k(a,p),O())}}function J(){if(h){const p=h.redo();p&&(k(a,p),O())}}function Z(p){k(u,p.detail.selection)}function se(p){k(a,p.detail.grid),s(a)&&N(s(a))}function Q(){if(s(u).active&&s(a)&&v){const p=v.cut(s(a),s(u),s(d));k(a,p),N(s(a)),k(u,{...s(u),active:!1})}}function ae(){s(u).active&&s(a)&&v&&v.copy(s(a),s(u),s(d))}function pe(){if(s(a)&&v&&v.hasClipboardData()){const p=s(u).active?s(u).startX:0,K=s(u).active?s(u).startY:0,de=v.paste(s(a),p,K,s(d),s(d));k(a,de),N(s(a))}}function ke(){if(s(u).active&&s(a)&&v){const p=v.deleteSelection(s(a),s(u),s(d));k(a,p),N(s(a)),k(u,{...s(u),active:!1})}}function ve(){k(u,{startX:0,startY:0,endX:s(d)-1,endY:s(d)-1,active:!0}),k(o,!0),k(r,!1),k(c,!1)}function Je(){k(u,{...s(u),active:!1})}function _e(p=!0){if(s(u).active&&s(a)&&v){const K=v.rotateSelection(s(a),s(u),s(d),p);k(a,K),N(s(a))}}function De(p,K){if(s(u).active&&s(a)&&v){const de=v.moveSelection(s(a),s(u),p,K,s(d),s(d));k(a,de.grid),k(u,de.selection),N(s(a))}}function qe(p){k(l,p.detail.color),k(c,!1)}ze();var ft=Fi();$l(p=>{v0.title="Dotsly"});var Ct=Y(ft);fi(Ct,{get selectedColor(){return s(l)},set selectedColor(p){k(l,p)},get selectedShape(){return s(n)},set selectedShape(p){k(n,p)},get paintMode(){return s(r)},set paintMode(p){k(r,p)},get selectMode(){return s(o)},set selectMode(p){k(o,p)},get colorPickerMode(){return s(c)},set colorPickerMode(p){k(c,p)},get quarterRotation(){return s(f)},set quarterRotation(p){k(f,p)},get halfCircleRotation(){return s(b)},set halfCircleRotation(p){k(b,p)},get size(){return s(d)},set size(p){k(d,p)},get canUndo(){return s(M)},set canUndo(p){k(M,p)},get canRedo(){return s(C)},set canRedo(p){k(C,p)},$$events:{shapeSelected:ne,colorSelected:z,imageUploaded:G,paintModeToggled:p=>k(r,p.detail.paintMode),colorPickerModeToggled:y,selectModeToggled:R,undo:E,redo:J,zoomIn:_,zoomOut:$,quarterRotationChanged:re,halfCircleRotationChanged:S,sizeChanged:H,save:I,load:A},$$legacy:!0});var He=oe(Ct,2);{var _t=p=>{za(p,{get width(){return s(d)},get height(){return s(d)},get selectedShape(){return s(n)},get selectedColor(){return s(l)},get selectMode(){return s(o)},get grid(){return s(a)},get paintMode(){return s(r)},get colorPickerMode(){return s(c)},get zoom(){return s(i)},get quarterRotation(){return s(f)},get halfCircleRotation(){return s(b)},get selection(){return s(u)},$$events:{colorPicked:qe,selectionChanged:Z,gridChanged:se}})},Jt=p=>{za(p,{get width(){return s(d)},get height(){return s(d)},get selectedShape(){return s(n)},get selectedColor(){return s(l)},get selectMode(){return s(o)},get paintMode(){return s(r)},get colorPickerMode(){return s(c)},get zoom(){return s(i)},get quarterRotation(){return s(f)},get halfCircleRotation(){return s(b)},get selection(){return s(u)},$$events:{colorPicked:qe,selectionChanged:Z,gridChanged:se}})};Ye(He,p=>{s(a)?p(_t):p(Jt,!1)})}q(ft),j(e,ft),Ae()}export{wi as component};
