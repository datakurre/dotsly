import"../chunks/DsnmJJEf.js";import"../chunks/DXAwGQm7.js";import{i as _l,a as xl,c as wl,d as Cl,n as Al,b as Tl,e as Ve,o as Ba,f as le,g as W0,j as $l}from"../chunks/Csy9xEDe.js";import{B as Da,w as vn,aT as K0,z as Ut,h as ie,aA as J0,a as Ma,g as h,W as Te,x as zl,H as El,y as t0,A as pt,J as st,ag as Rl,aI as Sl,C as Tt,F as Pl,aU as Fn,aV as yn,D as Ct,af as n0,a8 as re,X as a0,aF as Q0,ax as er,G as La,I as tr,aW as Bl,aX as Ln,M as Dl,an as $t,aY as Ll,at as Nl,aZ as Ol,aE as Il,a_ as Yl,T as nr,a$ as ql,E as Xl,b0 as Gl,aH as Hl,K as ar,b1 as jl,b2 as Ul,av as Zl,b3 as Vl,b4 as Wl,b5 as Kl,b6 as Jl,b7 as Ql,b8 as eo,U as to,b9 as no,ba as ao,bb as ro,bc as lo,aa as rr,d as Q,L as oo,bd as so,p as Pe,n as ye,q as U,s as H,R as $,t as Ee,m as ee,o as Be,k as ze,l as $e,v as se,f as W,be as ka,bf as lr,bg as io,bh as co,ab as fo,bi as uo,bj as ho}from"../chunks/DckqTTcM.js";import{p as N,b as r0,i as ot,l as Ie,s as et}from"../chunks/q0klybCy.js";import{i as De}from"../chunks/BBao4eQ6.js";import{s as qe}from"../chunks/M1l1I-Ar.js";function on(e,t){return t}function bo(e,t,n){for(var a=e.items,r=[],l=t.length,o=0;o<l;o++)Ol(t[o].e,r,!0);var s=l>0&&r.length===0&&n!==null;if(s){var i=n.parentNode;Il(i),i.append(n),a.clear(),He(e,t[0].prev,t[l-1].next)}Yl(r,()=>{for(var c=0;c<l;c++){var f=t[c];s||(a.delete(f.k),He(e,f.prev,f.next)),$t(f.e,!s)}})}function sn(e,t,n,a,r,l=null){var o=e,s={flags:t,items:new Map,first:null},i=(t&K0)!==0;if(i){var c=e;o=ie?Ut(J0(c)):c.appendChild(Da())}ie&&Ma();var f=null,b=!1,u=new Map,d=Te(()=>{var y=n();return er(y)?y:y==null?[]:Q0(y)}),p,v;function m(){go(v,p,s,u,o,r,t,a,n),l!==null&&(p.length===0?f?La(f):f=Tt(()=>l(o)):f!==null&&tr(f,()=>{f=null}))}vn(()=>{v??=nr,p=h(d);var y=p.length;if(b&&y===0)return;b=y===0;let w=!1;if(ie){var B=zl(o)===El;B!==(y===0)&&(o=t0(),Ut(o),pt(!1),w=!0)}if(ie){for(var x=null,D,F=0;F<y;F++){if(st.nodeType===Rl&&st.data===Sl){o=st,w=!0,pt(!1);break}var g=p[F],M=a(g,F);D=_a(st,s,x,null,g,M,F,r,t,n),s.items.set(M,D),x=D}y>0&&Ut(t0())}if(ie)y===0&&l&&(f=Tt(()=>l(o)));else if(Pl()){var z=new Set,k=Ct;for(F=0;F<y;F+=1){g=p[F],M=a(g,F);var S=s.items.get(M)??u.get(M);S?(t&(Fn|yn))!==0&&or(S,g,F,t):(D=_a(null,s,null,null,g,M,F,r,t,n,!0),u.set(M,D)),z.add(M)}for(const[E,O]of s.items)z.has(E)||k.skipped_effects.add(O.e);k.add_callback(m)}else m();w&&pt(!0),h(d)}),ie&&(o=st)}function go(e,t,n,a,r,l,o,s,i){var c=(o&Ll)!==0,f=(o&(Fn|yn))!==0,b=t.length,u=n.items,d=n.first,p=d,v,m=null,y,w=[],B=[],x,D,F,g;if(c)for(g=0;g<b;g+=1)x=t[g],D=s(x,g),F=u.get(D),F!==void 0&&(F.a?.measure(),(y??=new Set).add(F));for(g=0;g<b;g+=1){if(x=t[g],D=s(x,g),F=u.get(D),F===void 0){var M=a.get(D);if(M!==void 0){a.delete(D),u.set(D,M);var z=m?m.next:p;He(n,m,M),He(n,M,z),Nn(M,z,r),m=M}else{var k=p?p.e.nodes_start:r;m=_a(k,n,m,m===null?n.first:m.next,x,D,g,l,o,i)}u.set(D,m),w=[],B=[],p=m.next;continue}if(f&&or(F,x,g,o),(F.e.f&Ln)!==0&&(La(F.e),c&&(F.a?.unfix(),(y??=new Set).delete(F))),F!==p){if(v!==void 0&&v.has(F)){if(w.length<B.length){var S=B[0],E;m=S.prev;var O=w[0],J=w[w.length-1];for(E=0;E<w.length;E+=1)Nn(w[E],S,r);for(E=0;E<B.length;E+=1)v.delete(B[E]);He(n,O.prev,J.next),He(n,m,O),He(n,J,S),p=S,m=J,g-=1,w=[],B=[]}else v.delete(F),Nn(F,p,r),He(n,F.prev,F.next),He(n,F,m===null?n.first:m.next),He(n,m,F),m=F;continue}for(w=[],B=[];p!==null&&p.k!==D;)(p.e.f&Ln)===0&&(v??=new Set).add(p),B.push(p),p=p.next;if(p===null)continue;F=p}w.push(F),m=F,p=F.next}if(p!==null||v!==void 0){for(var L=v===void 0?[]:Q0(v);p!==null;)(p.e.f&Ln)===0&&L.push(p),p=p.next;var R=L.length;if(R>0){var Y=(o&K0)!==0&&b===0?r:null;if(c){for(g=0;g<R;g+=1)L[g].a?.measure();for(g=0;g<R;g+=1)L[g].a?.fix()}bo(n,L,Y)}}c&&Dl(()=>{if(y!==void 0)for(F of y)F.a?.apply()}),e.first=n.first&&n.first.e,e.last=m&&m.e;for(var q of a.values())$t(q.e);a.clear()}function or(e,t,n,a){(a&Fn)!==0&&n0(e.v,t),(a&yn)!==0?n0(e.i,n):e.i=n}function _a(e,t,n,a,r,l,o,s,i,c,f){var b=(i&Fn)!==0,u=(i&Bl)===0,d=b?u?re(r,!1,!1):a0(r):r,p=(i&yn)===0?o:a0(o),v={i:p,v:d,k:l,a:null,e:null,prev:n,next:a};try{if(e===null){var m=document.createDocumentFragment();m.append(e=Da())}return v.e=Tt(()=>s(e,d,p,c),ie),v.e.prev=n&&n.e,v.e.next=a&&a.e,n===null?f||(t.first=v):(n.next=v,n.e.next=v.e),a!==null&&(a.prev=v,a.e.prev=v.e),v}finally{}}function Nn(e,t,n){for(var a=e.next?e.next.e.nodes_start:n,r=t?t.e.nodes_start:n,l=e.e.nodes_start;l!==null&&l!==a;){var o=Nl(l);r.before(l),l=o}}function He(e,t,n){t===null?e.first=n:(t.next=n,t.e.next=n&&n.e),n!==null&&(n.prev=t,n.e.prev=t&&t.e)}function po(e,t,n,a,r,l){let o=ie;ie&&Ma();var s,i,c=null;ie&&st.nodeType===ql&&(c=st,Ma());var f=ie?st:e,b;vn(()=>{const u=t()||null;var d=Gl;u!==s&&(b&&(u===null?tr(b,()=>{b=null,i=null}):u===i?La(b):$t(b)),u&&u!==i&&(b=Tt(()=>{if(c=ie?c:document.createElementNS(d,u),Hl(c,c),a){ie&&_l(u)&&c.append(document.createComment(""));var p=ie?J0(c):c.appendChild(Da());ie&&(p===null?pt(!1):Ut(p)),a(c,p)}nr.nodes_end=c,f.before(c)})),s=u,s&&(i=s))},Xl),o&&(pt(!0),Ut(f))}function mo(e,t){var n=void 0,a;vn(()=>{n!==(n=t())&&(a&&($t(a),a=null),n&&(a=Tt(()=>{ar(()=>n(e))})))})}function sr(e){var t,n,a="";if(typeof e=="string"||typeof e=="number")a+=e;else if(typeof e=="object")if(Array.isArray(e)){var r=e.length;for(t=0;t<r;t++)e[t]&&(n=sr(e[t]))&&(a&&(a+=" "),a+=n)}else for(n in e)e[n]&&(a&&(a+=" "),a+=n);return a}function vo(){for(var e,t,n=0,a="",r=arguments.length;n<r;n++)(e=arguments[n])&&(t=sr(e))&&(a&&(a+=" "),a+=t);return a}function Fo(e){return typeof e=="object"?vo(e):e??""}const l0=[...` 	
\r\f \v\uFEFF`];function yo(e,t,n){var a=e==null?"":""+e;if(t&&(a=a?a+" "+t:t),n){for(var r in n)if(n[r])a=a?a+" "+r:r;else if(a.length)for(var l=r.length,o=0;(o=a.indexOf(r,o))>=0;){var s=o+l;(o===0||l0.includes(a[o-1]))&&(s===a.length||l0.includes(a[s]))?a=(o===0?"":a.substring(0,o))+a.substring(s+1):o=s}}return a===""?null:a}function o0(e,t=!1){var n=t?" !important;":";",a="";for(var r in e){var l=e[r];l!=null&&l!==""&&(a+=" "+r+": "+l+n)}return a}function On(e){return e[0]!=="-"||e[1]!=="-"?e.toLowerCase():e}function Mo(e,t){if(t){var n="",a,r;if(Array.isArray(t)?(a=t[0],r=t[1]):a=t,e){e=String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();var l=!1,o=0,s=!1,i=[];a&&i.push(...Object.keys(a).map(On)),r&&i.push(...Object.keys(r).map(On));var c=0,f=-1;const v=e.length;for(var b=0;b<v;b++){var u=e[b];if(s?u==="/"&&e[b-1]==="*"&&(s=!1):l?l===u&&(l=!1):u==="/"&&e[b+1]==="*"?s=!0:u==='"'||u==="'"?l=u:u==="("?o++:u===")"&&o--,!s&&l===!1&&o===0){if(u===":"&&f===-1)f=b;else if(u===";"||b===v-1){if(f!==-1){var d=On(e.substring(c,f).trim());if(!i.includes(d)){u!==";"&&b++;var p=e.substring(c,b).trim();n+=" "+p+";"}}c=b+1,f=-1}}}}return a&&(n+=o0(a)),r&&(n+=o0(r,!0)),n=n.trim(),n===""?null:n}return e==null?null:String(e)}function Ue(e,t,n,a,r,l){var o=e.__className;if(ie||o!==n||o===void 0){var s=yo(n,a,l);(!ie||s!==e.getAttribute("class"))&&(s==null?e.removeAttribute("class"):t?e.className=s:e.setAttribute("class",s)),e.__className=n}else if(l&&r!==l)for(var i in l){var c=!!l[i];(r==null||c!==!!r[i])&&e.classList.toggle(i,c)}return l}function In(e,t={},n,a){for(var r in n){var l=n[r];t[r]!==l&&(n[r]==null?e.style.removeProperty(r):e.style.setProperty(r,l,a))}}function ft(e,t,n,a){var r=e.__style;if(ie||r!==t){var l=Mo(t,a);(!ie||l!==e.getAttribute("style"))&&(l==null?e.removeAttribute("style"):e.style.cssText=l),e.__style=t}else a&&(Array.isArray(a)?(In(e,n?.[0],a[0]),In(e,n?.[1],a[1],"important")):In(e,n,a));return a}function xa(e,t,n=!1){if(e.multiple){if(t==null)return;if(!er(t))return jl();for(var a of e.options)a.selected=t.includes(s0(a));return}for(a of e.options){var r=s0(a);if(Ul(r,t)){a.selected=!0;return}}(!n||t!==void 0)&&(e.selectedIndex=-1)}function ko(e){var t=new MutationObserver(()=>{xa(e,e.__value)});t.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),Zl(()=>{t.disconnect()})}function s0(e){return"__value"in e?e.__value:e.value}const Gt=Symbol("class"),Ht=Symbol("style"),ir=Symbol("is custom element"),cr=Symbol("is html");function fr(e){if(ie){var t=!1,n=()=>{if(!t){if(t=!0,e.hasAttribute("value")){var a=e.value;Fe(e,"value",null),e.value=a}if(e.hasAttribute("checked")){var r=e.checked;Fe(e,"checked",null),e.checked=r}}};e.__on_r=n,no(n),ao()}}function _o(e,t){t?e.hasAttribute("selected")||e.setAttribute("selected",""):e.removeAttribute("selected")}function Fe(e,t,n,a){var r=dr(e);ie&&(r[t]=e.getAttribute(t),t==="src"||t==="srcset"||t==="href"&&e.nodeName==="LINK")||r[t]!==(r[t]=n)&&(t==="loading"&&(e[ro]=n),n==null?e.removeAttribute(t):typeof n!="string"&&ur(e).includes(t)?e[t]=n:e.setAttribute(t,n))}function xo(e,t,n,a,r=!1,l=!1){if(ie&&r&&e.tagName==="INPUT"){var o=e,s=o.type==="checkbox"?"defaultChecked":"defaultValue";s in n||fr(o)}var i=dr(e),c=i[ir],f=!i[cr];let b=ie&&c;b&&pt(!1);var u=t||{},d=e.tagName==="OPTION";for(var p in t)p in n||(n[p]=null);n.class?n.class=Fo(n.class):n[Gt]&&(n.class=null),n[Ht]&&(n.style??=null);var v=ur(e);for(const F in n){let g=n[F];if(d&&F==="value"&&g==null){e.value=e.__value="",u[F]=g;continue}if(F==="class"){var m=e.namespaceURI==="http://www.w3.org/1999/xhtml";Ue(e,m,g,a,t?.[Gt],n[Gt]),u[F]=g,u[Gt]=n[Gt];continue}if(F==="style"){ft(e,g,t?.[Ht],n[Ht]),u[F]=g,u[Ht]=n[Ht];continue}var y=u[F];if(!(g===y&&!(g===void 0&&e.hasAttribute(F)))){u[F]=g;var w=F[0]+F[1];if(w!=="$$")if(w==="on"){const M={},z="$$"+F;let k=F.slice(2);var B=Tl(k);if(xl(k)&&(k=k.slice(0,-7),M.capture=!0),!B&&y){if(g!=null)continue;e.removeEventListener(k,u[z],M),u[z]=null}if(g!=null)if(B)e[`__${k}`]=g,Cl([k]);else{let S=function(E){u[F].call(this,E)};u[z]=wl(k,e,S,M)}else B&&(e[`__${k}`]=void 0)}else if(F==="style")Fe(e,F,g);else if(F==="autofocus")eo(e,!!g);else if(!c&&(F==="__value"||F==="value"&&g!=null))e.value=e.__value=g;else if(F==="selected"&&d)_o(e,g);else{var x=F;f||(x=Al(x));var D=x==="defaultValue"||x==="defaultChecked";if(g==null&&!c&&!D)if(i[F]=null,x==="value"||x==="checked"){let M=e;const z=t===void 0;if(x==="value"){let k=M.defaultValue;M.removeAttribute(x),M.defaultValue=k,M.value=M.__value=z?k:null}else{let k=M.defaultChecked;M.removeAttribute(x),M.defaultChecked=k,M.checked=z?k:!1}}else e.removeAttribute(F);else D||v.includes(x)&&(c||typeof g!="string")?(e[x]=g,x in i&&(i[x]=to)):typeof g!="function"&&Fe(e,x,g)}}}return b&&pt(!0),u}function i0(e,t,n=[],a=[],r,l=!1,o=!1){Vl(n,a,s=>{var i=void 0,c={},f=e.nodeName==="SELECT",b=!1;if(vn(()=>{var d=t(...s.map(h)),p=xo(e,i,d,r,l,o);b&&f&&"value"in d&&xa(e,d.value);for(let m of Object.getOwnPropertySymbols(c))d[m]||$t(c[m]);for(let m of Object.getOwnPropertySymbols(d)){var v=d[m];m.description===Jl&&(!i||v!==i[m])&&(c[m]&&$t(c[m]),c[m]=Tt(()=>mo(e,()=>v))),p[m]=v}i=p}),f){var u=e;ar(()=>{xa(u,i.value,!0),ko(u)})}b=!0})}function dr(e){return e.__attributes??={[ir]:e.nodeName.includes("-"),[cr]:e.namespaceURI===Wl}}var c0=new Map;function ur(e){var t=e.getAttribute("is")||e.nodeName,n=c0.get(t);if(n)return n;c0.set(t,n=[]);for(var a,r=e,l=Element.prototype;l!==r;){a=Ql(r);for(var o in a)a[o].set&&n.push(o);r=Kl(r)}return n}function wo(e,t,n=t){var a=new WeakSet;lo(e,"input",async r=>{var l=r?e.defaultValue:e.value;if(l=Yn(e)?qn(l):l,n(l),Ct!==null&&a.add(Ct),await rr(),l!==(l=t())){var o=e.selectionStart,s=e.selectionEnd;e.value=l??"",s!==null&&(e.selectionStart=o,e.selectionEnd=Math.min(s,e.value.length))}}),(ie&&e.defaultValue!==e.value||Q(t)==null&&e.value)&&(n(Yn(e)?qn(e.value):e.value),Ct!==null&&a.add(Ct)),oo(()=>{var r=t();if(e===document.activeElement){var l=so??Ct;if(a.has(l))return}Yn(e)&&r===qn(e.value)||e.type==="date"&&!r&&!e.value||r!==e.value&&(e.value=r??"")})}function Yn(e){var t=e.type;return t==="number"||t==="range"}function qn(e){return e===""?null:+e}const Co=`Part,Color,Quantity,Is Spare
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
`,Ao=`Part,Color,Quantity,Is Spare
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
`,To=`Part,Color,Quantity,Is Spare
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
`,$o=`Part,Color,Quantity,Is Spare
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
`,zo=`Part,Color,Quantity,Is Spare
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
`,Eo=`Part,Color,Quantity,Is Spare
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
`,Ro=`id,name,rgb,is_trans,num_parts,num_sets,y1,y2
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
`,{min:So,max:Po}=Math,mt=(e,t=0,n=1)=>So(Po(t,e),n),Na=e=>{e._clipped=!1,e._unclipped=e.slice(0);for(let t=0;t<=3;t++)t<3?((e[t]<0||e[t]>255)&&(e._clipped=!0),e[t]=mt(e[t],0,255)):t===3&&(e[t]=mt(e[t],0,1));return e},hr={};for(let e of["Boolean","Number","String","Function","Array","Date","RegExp","Undefined","Null"])hr[`[object ${e}]`]=e.toLowerCase();function V(e){return hr[Object.prototype.toString.call(e)]||"object"}const G=(e,t=null)=>e.length>=3?Array.prototype.slice.call(e):V(e[0])=="object"&&t?t.split("").filter(n=>e[0][n]!==void 0).map(n=>e[0][n]):e[0].slice(0),St=e=>{if(e.length<2)return null;const t=e.length-1;return V(e[t])=="string"?e[t].toLowerCase():null},{PI:Mn,min:br,max:gr}=Math,Re=e=>Math.round(e*100)/100,wa=e=>Math.round(e*100)/100,Ke=Mn*2,Xn=Mn/3,Bo=Mn/180,Do=180/Mn;function pr(e){return[...e.slice(0,3).reverse(),...e.slice(3)]}const X={format:{},autodetect:[]};class A{constructor(...t){const n=this;if(V(t[0])==="object"&&t[0].constructor&&t[0].constructor===this.constructor)return t[0];let a=St(t),r=!1;if(!a){r=!0,X.sorted||(X.autodetect=X.autodetect.sort((l,o)=>o.p-l.p),X.sorted=!0);for(let l of X.autodetect)if(a=l.test(...t),a)break}if(X.format[a]){const l=X.format[a].apply(null,r?t:t.slice(0,-1));n._rgb=Na(l)}else throw new Error("unknown format: "+t);n._rgb.length===3&&n._rgb.push(1)}toString(){return V(this.hex)=="function"?this.hex():`[${this._rgb.join(",")}]`}}const Lo="3.1.2",Z=(...e)=>new A(...e);Z.version=Lo;const zt={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",gold:"#ffd700",goldenrod:"#daa520",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",laserlemon:"#ffff54",lavender:"#e6e6fa",lavenderblush:"#fff0f5",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrod:"#fafad2",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",maroon2:"#7f0000",maroon3:"#b03060",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",purple2:"#7f007f",purple3:"#a020f0",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"},No=/^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/,Oo=/^#?([A-Fa-f0-9]{8}|[A-Fa-f0-9]{4})$/,mr=e=>{if(e.match(No)){(e.length===4||e.length===7)&&(e=e.substr(1)),e.length===3&&(e=e.split(""),e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]);const t=parseInt(e,16),n=t>>16,a=t>>8&255,r=t&255;return[n,a,r,1]}if(e.match(Oo)){(e.length===5||e.length===9)&&(e=e.substr(1)),e.length===4&&(e=e.split(""),e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]+e[3]+e[3]);const t=parseInt(e,16),n=t>>24&255,a=t>>16&255,r=t>>8&255,l=Math.round((t&255)/255*100)/100;return[n,a,r,l]}throw new Error(`unknown hex color: ${e}`)},{round:en}=Math,vr=(...e)=>{let[t,n,a,r]=G(e,"rgba"),l=St(e)||"auto";r===void 0&&(r=1),l==="auto"&&(l=r<1?"rgba":"rgb"),t=en(t),n=en(n),a=en(a);let s="000000"+(t<<16|n<<8|a).toString(16);s=s.substr(s.length-6);let i="0"+en(r*255).toString(16);switch(i=i.substr(i.length-2),l.toLowerCase()){case"rgba":return`#${s}${i}`;case"argb":return`#${i}${s}`;default:return`#${s}`}};A.prototype.name=function(){const e=vr(this._rgb,"rgb");for(let t of Object.keys(zt))if(zt[t]===e)return t.toLowerCase();return e};X.format.named=e=>{if(e=e.toLowerCase(),zt[e])return mr(zt[e]);throw new Error("unknown color name: "+e)};X.autodetect.push({p:5,test:(e,...t)=>{if(!t.length&&V(e)==="string"&&zt[e.toLowerCase()])return"named"}});A.prototype.alpha=function(e,t=!1){return e!==void 0&&V(e)==="number"?t?(this._rgb[3]=e,this):new A([this._rgb[0],this._rgb[1],this._rgb[2],e],"rgb"):this._rgb[3]};A.prototype.clipped=function(){return this._rgb._clipped||!1};const Ze={Kn:18,labWhitePoint:"d65",Xn:.95047,Yn:1,Zn:1.08883,kE:216/24389,kKE:8,kK:24389/27,RefWhiteRGB:{X:.95047,Y:1,Z:1.08883},MtxRGB2XYZ:{m00:.4124564390896922,m01:.21267285140562253,m02:.0193338955823293,m10:.357576077643909,m11:.715152155287818,m12:.11919202588130297,m20:.18043748326639894,m21:.07217499330655958,m22:.9503040785363679},MtxXYZ2RGB:{m00:3.2404541621141045,m01:-.9692660305051868,m02:.055643430959114726,m10:-1.5371385127977166,m11:1.8760108454466942,m12:-.2040259135167538,m20:-.498531409556016,m21:.041556017530349834,m22:1.0572251882231791},As:.9414285350000001,Bs:1.040417467,Cs:1.089532651,MtxAdaptMa:{m00:.8951,m01:-.7502,m02:.0389,m10:.2664,m11:1.7135,m12:-.0685,m20:-.1614,m21:.0367,m22:1.0296},MtxAdaptMaI:{m00:.9869929054667123,m01:.43230526972339456,m02:-.008528664575177328,m10:-.14705425642099013,m11:.5183602715367776,m12:.04004282165408487,m20:.15996265166373125,m21:.0492912282128556,m22:.9684866957875502}},Io=new Map([["a",[1.0985,.35585]],["b",[1.0985,.35585]],["c",[.98074,1.18232]],["d50",[.96422,.82521]],["d55",[.95682,.92149]],["d65",[.95047,1.08883]],["e",[1,1,1]],["f2",[.99186,.67393]],["f7",[.95041,1.08747]],["f11",[1.00962,.6435]],["icc",[.96422,.82521]]]);function Je(e){const t=Io.get(String(e).toLowerCase());if(!t)throw new Error("unknown Lab illuminant "+e);Ze.labWhitePoint=e,Ze.Xn=t[0],Ze.Zn=t[1]}function Vt(){return Ze.labWhitePoint}const Oa=(...e)=>{e=G(e,"lab");const[t,n,a]=e,[r,l,o]=Yo(t,n,a),[s,i,c]=Fr(r,l,o);return[s,i,c,e.length>3?e[3]:1]},Yo=(e,t,n)=>{const{kE:a,kK:r,kKE:l,Xn:o,Yn:s,Zn:i}=Ze,c=(e+16)/116,f=.002*t+c,b=c-.005*n,u=f*f*f,d=b*b*b,p=u>a?u:(116*f-16)/r,v=e>l?Math.pow((e+16)/116,3):e/r,m=d>a?d:(116*b-16)/r,y=p*o,w=v*s,B=m*i;return[y,w,B]},Gn=e=>{const t=Math.sign(e);return e=Math.abs(e),(e<=.0031308?e*12.92:1.055*Math.pow(e,1/2.4)-.055)*t},Fr=(e,t,n)=>{const{MtxAdaptMa:a,MtxAdaptMaI:r,MtxXYZ2RGB:l,RefWhiteRGB:o,Xn:s,Yn:i,Zn:c}=Ze,f=s*a.m00+i*a.m10+c*a.m20,b=s*a.m01+i*a.m11+c*a.m21,u=s*a.m02+i*a.m12+c*a.m22,d=o.X*a.m00+o.Y*a.m10+o.Z*a.m20,p=o.X*a.m01+o.Y*a.m11+o.Z*a.m21,v=o.X*a.m02+o.Y*a.m12+o.Z*a.m22,m=(e*a.m00+t*a.m10+n*a.m20)*(d/f),y=(e*a.m01+t*a.m11+n*a.m21)*(p/b),w=(e*a.m02+t*a.m12+n*a.m22)*(v/u),B=m*r.m00+y*r.m10+w*r.m20,x=m*r.m01+y*r.m11+w*r.m21,D=m*r.m02+y*r.m12+w*r.m22,F=Gn(B*l.m00+x*l.m10+D*l.m20),g=Gn(B*l.m01+x*l.m11+D*l.m21),M=Gn(B*l.m02+x*l.m12+D*l.m22);return[F*255,g*255,M*255]},Ia=(...e)=>{const[t,n,a,...r]=G(e,"rgb"),[l,o,s]=yr(t,n,a),[i,c,f]=qo(l,o,s);return[i,c,f,...r.length>0&&r[0]<1?[r[0]]:[]]};function qo(e,t,n){const{Xn:a,Yn:r,Zn:l,kE:o,kK:s}=Ze,i=e/a,c=t/r,f=n/l,b=i>o?Math.pow(i,1/3):(s*i+16)/116,u=c>o?Math.pow(c,1/3):(s*c+16)/116,d=f>o?Math.pow(f,1/3):(s*f+16)/116;return[116*u-16,500*(b-u),200*(u-d)]}function Hn(e){const t=Math.sign(e);return e=Math.abs(e),(e<=.04045?e/12.92:Math.pow((e+.055)/1.055,2.4))*t}const yr=(e,t,n)=>{e=Hn(e/255),t=Hn(t/255),n=Hn(n/255);const{MtxRGB2XYZ:a,MtxAdaptMa:r,MtxAdaptMaI:l,Xn:o,Yn:s,Zn:i,As:c,Bs:f,Cs:b}=Ze;let u=e*a.m00+t*a.m10+n*a.m20,d=e*a.m01+t*a.m11+n*a.m21,p=e*a.m02+t*a.m12+n*a.m22;const v=o*r.m00+s*r.m10+i*r.m20,m=o*r.m01+s*r.m11+i*r.m21,y=o*r.m02+s*r.m12+i*r.m22;let w=u*r.m00+d*r.m10+p*r.m20,B=u*r.m01+d*r.m11+p*r.m21,x=u*r.m02+d*r.m12+p*r.m22;return w*=v/c,B*=m/f,x*=y/b,u=w*l.m00+B*l.m10+x*l.m20,d=w*l.m01+B*l.m11+x*l.m21,p=w*l.m02+B*l.m12+x*l.m22,[u,d,p]};A.prototype.lab=function(){return Ia(this._rgb)};const Xo=(...e)=>new A(...e,"lab");Object.assign(Z,{lab:Xo,getLabWhitePoint:Vt,setLabWhitePoint:Je});X.format.lab=Oa;X.autodetect.push({p:2,test:(...e)=>{if(e=G(e,"lab"),V(e)==="array"&&e.length===3)return"lab"}});A.prototype.darken=function(e=1){const t=this,n=t.lab();return n[0]-=Ze.Kn*e,new A(n,"lab").alpha(t.alpha(),!0)};A.prototype.brighten=function(e=1){return this.darken(-e)};A.prototype.darker=A.prototype.darken;A.prototype.brighter=A.prototype.brighten;A.prototype.get=function(e){const[t,n]=e.split("."),a=this[t]();if(n){const r=t.indexOf(n)-(t.substr(0,2)==="ok"?2:0);if(r>-1)return a[r];throw new Error(`unknown channel ${n} in mode ${t}`)}else return a};const{pow:Go}=Math,Ho=1e-7,jo=20;A.prototype.luminance=function(e,t="rgb"){if(e!==void 0&&V(e)==="number"){if(e===0)return new A([0,0,0,this._rgb[3]],"rgb");if(e===1)return new A([255,255,255,this._rgb[3]],"rgb");let n=this.luminance(),a=jo;const r=(o,s)=>{const i=o.interpolate(s,.5,t),c=i.luminance();return Math.abs(e-c)<Ho||!a--?i:c>e?r(o,i):r(i,s)},l=(n>e?r(new A([0,0,0]),this):r(this,new A([255,255,255]))).rgb();return new A([...l,this._rgb[3]])}return Uo(...this._rgb.slice(0,3))};const Uo=(e,t,n)=>(e=jn(e),t=jn(t),n=jn(n),.2126*e+.7152*t+.0722*n),jn=e=>(e/=255,e<=.03928?e/12.92:Go((e+.055)/1.055,2.4)),we={},Et=(e,t,n=.5,...a)=>{let r=a[0]||"lrgb";if(!we[r]&&!a.length&&(r=Object.keys(we)[0]),!we[r])throw new Error(`interpolation mode ${r} is not defined`);return V(e)!=="object"&&(e=new A(e)),V(t)!=="object"&&(t=new A(t)),we[r](e,t,n).alpha(e.alpha()+n*(t.alpha()-e.alpha()))};A.prototype.mix=A.prototype.interpolate=function(e,t=.5,...n){return Et(this,e,t,...n)};A.prototype.premultiply=function(e=!1){const t=this._rgb,n=t[3];return e?(this._rgb=[t[0]*n,t[1]*n,t[2]*n,n],this):new A([t[0]*n,t[1]*n,t[2]*n,n],"rgb")};const{sin:Zo,cos:Vo}=Math,Mr=(...e)=>{let[t,n,a]=G(e,"lch");return isNaN(a)&&(a=0),a=a*Bo,[t,Vo(a)*n,Zo(a)*n]},Ya=(...e)=>{e=G(e,"lch");const[t,n,a]=e,[r,l,o]=Mr(t,n,a),[s,i,c]=Oa(r,l,o);return[s,i,c,e.length>3?e[3]:1]},Wo=(...e)=>{const t=pr(G(e,"hcl"));return Ya(...t)},{sqrt:Ko,atan2:Jo,round:Qo}=Math,kr=(...e)=>{const[t,n,a]=G(e,"lab"),r=Ko(n*n+a*a);let l=(Jo(a,n)*Do+360)%360;return Qo(r*1e4)===0&&(l=Number.NaN),[t,r,l]},qa=(...e)=>{const[t,n,a,...r]=G(e,"rgb"),[l,o,s]=Ia(t,n,a),[i,c,f]=kr(l,o,s);return[i,c,f,...r.length>0&&r[0]<1?[r[0]]:[]]};A.prototype.lch=function(){return qa(this._rgb)};A.prototype.hcl=function(){return pr(qa(this._rgb))};const es=(...e)=>new A(...e,"lch"),ts=(...e)=>new A(...e,"hcl");Object.assign(Z,{lch:es,hcl:ts});X.format.lch=Ya;X.format.hcl=Wo;["lch","hcl"].forEach(e=>X.autodetect.push({p:2,test:(...t)=>{if(t=G(t,e),V(t)==="array"&&t.length===3)return e}}));A.prototype.saturate=function(e=1){const t=this,n=t.lch();return n[1]+=Ze.Kn*e,n[1]<0&&(n[1]=0),new A(n,"lch").alpha(t.alpha(),!0)};A.prototype.desaturate=function(e=1){return this.saturate(-e)};A.prototype.set=function(e,t,n=!1){const[a,r]=e.split("."),l=this[a]();if(r){const o=a.indexOf(r)-(a.substr(0,2)==="ok"?2:0);if(o>-1){if(V(t)=="string")switch(t.charAt(0)){case"+":l[o]+=+t;break;case"-":l[o]+=+t;break;case"*":l[o]*=+t.substr(1);break;case"/":l[o]/=+t.substr(1);break;default:l[o]=+t}else if(V(t)==="number")l[o]=t;else throw new Error("unsupported value for Color.set");const s=new A(l,a);return n?(this._rgb=s._rgb,this):s}throw new Error(`unknown channel ${r} in mode ${a}`)}else return l};A.prototype.tint=function(e=.5,...t){return Et(this,"white",e,...t)};A.prototype.shade=function(e=.5,...t){return Et(this,"black",e,...t)};const ns=(e,t,n)=>{const a=e._rgb,r=t._rgb;return new A(a[0]+n*(r[0]-a[0]),a[1]+n*(r[1]-a[1]),a[2]+n*(r[2]-a[2]),"rgb")};we.rgb=ns;const{sqrt:Un,pow:_t}=Math,as=(e,t,n)=>{const[a,r,l]=e._rgb,[o,s,i]=t._rgb;return new A(Un(_t(a,2)*(1-n)+_t(o,2)*n),Un(_t(r,2)*(1-n)+_t(s,2)*n),Un(_t(l,2)*(1-n)+_t(i,2)*n),"rgb")};we.lrgb=as;const rs=(e,t,n)=>{const a=e.lab(),r=t.lab();return new A(a[0]+n*(r[0]-a[0]),a[1]+n*(r[1]-a[1]),a[2]+n*(r[2]-a[2]),"lab")};we.lab=rs;const Pt=(e,t,n,a)=>{let r,l;a==="hsl"?(r=e.hsl(),l=t.hsl()):a==="hsv"?(r=e.hsv(),l=t.hsv()):a==="hcg"?(r=e.hcg(),l=t.hcg()):a==="hsi"?(r=e.hsi(),l=t.hsi()):a==="lch"||a==="hcl"?(a="hcl",r=e.hcl(),l=t.hcl()):a==="oklch"&&(r=e.oklch().reverse(),l=t.oklch().reverse());let o,s,i,c,f,b;(a.substr(0,1)==="h"||a==="oklch")&&([o,i,f]=r,[s,c,b]=l);let u,d,p,v;return!isNaN(o)&&!isNaN(s)?(s>o&&s-o>180?v=s-(o+360):s<o&&o-s>180?v=s+360-o:v=s-o,d=o+n*v):isNaN(o)?isNaN(s)?d=Number.NaN:(d=s,(f==1||f==0)&&a!="hsv"&&(u=c)):(d=o,(b==1||b==0)&&a!="hsv"&&(u=i)),u===void 0&&(u=i+n*(c-i)),p=f+n*(b-f),a==="oklch"?new A([p,u,d],a):new A([d,u,p],a)},_r=(e,t,n)=>Pt(e,t,n,"lch");we.lch=_r;we.hcl=_r;const ls=e=>{if(V(e)=="number"&&e>=0&&e<=16777215){const t=e>>16,n=e>>8&255,a=e&255;return[t,n,a,1]}throw new Error("unknown num color: "+e)},os=(...e)=>{const[t,n,a]=G(e,"rgb");return(t<<16)+(n<<8)+a};A.prototype.num=function(){return os(this._rgb)};const ss=(...e)=>new A(...e,"num");Object.assign(Z,{num:ss});X.format.num=ls;X.autodetect.push({p:5,test:(...e)=>{if(e.length===1&&V(e[0])==="number"&&e[0]>=0&&e[0]<=16777215)return"num"}});const is=(e,t,n)=>{const a=e.num(),r=t.num();return new A(a+n*(r-a),"num")};we.num=is;const{floor:cs}=Math,fs=(...e)=>{e=G(e,"hcg");let[t,n,a]=e,r,l,o;a=a*255;const s=n*255;if(n===0)r=l=o=a;else{t===360&&(t=0),t>360&&(t-=360),t<0&&(t+=360),t/=60;const i=cs(t),c=t-i,f=a*(1-n),b=f+s*(1-c),u=f+s*c,d=f+s;switch(i){case 0:[r,l,o]=[d,u,f];break;case 1:[r,l,o]=[b,d,f];break;case 2:[r,l,o]=[f,d,u];break;case 3:[r,l,o]=[f,b,d];break;case 4:[r,l,o]=[u,f,d];break;case 5:[r,l,o]=[d,f,b];break}}return[r,l,o,e.length>3?e[3]:1]},ds=(...e)=>{const[t,n,a]=G(e,"rgb"),r=br(t,n,a),l=gr(t,n,a),o=l-r,s=o*100/255,i=r/(255-o)*100;let c;return o===0?c=Number.NaN:(t===l&&(c=(n-a)/o),n===l&&(c=2+(a-t)/o),a===l&&(c=4+(t-n)/o),c*=60,c<0&&(c+=360)),[c,s,i]};A.prototype.hcg=function(){return ds(this._rgb)};const us=(...e)=>new A(...e,"hcg");Z.hcg=us;X.format.hcg=fs;X.autodetect.push({p:1,test:(...e)=>{if(e=G(e,"hcg"),V(e)==="array"&&e.length===3)return"hcg"}});const hs=(e,t,n)=>Pt(e,t,n,"hcg");we.hcg=hs;const{cos:xt}=Math,bs=(...e)=>{e=G(e,"hsi");let[t,n,a]=e,r,l,o;return isNaN(t)&&(t=0),isNaN(n)&&(n=0),t>360&&(t-=360),t<0&&(t+=360),t/=360,t<1/3?(o=(1-n)/3,r=(1+n*xt(Ke*t)/xt(Xn-Ke*t))/3,l=1-(o+r)):t<2/3?(t-=1/3,r=(1-n)/3,l=(1+n*xt(Ke*t)/xt(Xn-Ke*t))/3,o=1-(r+l)):(t-=2/3,l=(1-n)/3,o=(1+n*xt(Ke*t)/xt(Xn-Ke*t))/3,r=1-(l+o)),r=mt(a*r*3),l=mt(a*l*3),o=mt(a*o*3),[r*255,l*255,o*255,e.length>3?e[3]:1]},{min:gs,sqrt:ps,acos:ms}=Math,vs=(...e)=>{let[t,n,a]=G(e,"rgb");t/=255,n/=255,a/=255;let r;const l=gs(t,n,a),o=(t+n+a)/3,s=o>0?1-l/o:0;return s===0?r=NaN:(r=(t-n+(t-a))/2,r/=ps((t-n)*(t-n)+(t-a)*(n-a)),r=ms(r),a>n&&(r=Ke-r),r/=Ke),[r*360,s,o]};A.prototype.hsi=function(){return vs(this._rgb)};const Fs=(...e)=>new A(...e,"hsi");Z.hsi=Fs;X.format.hsi=bs;X.autodetect.push({p:2,test:(...e)=>{if(e=G(e,"hsi"),V(e)==="array"&&e.length===3)return"hsi"}});const ys=(e,t,n)=>Pt(e,t,n,"hsi");we.hsi=ys;const Ca=(...e)=>{e=G(e,"hsl");const[t,n,a]=e;let r,l,o;if(n===0)r=l=o=a*255;else{const s=[0,0,0],i=[0,0,0],c=a<.5?a*(1+n):a+n-a*n,f=2*a-c,b=t/360;s[0]=b+1/3,s[1]=b,s[2]=b-1/3;for(let u=0;u<3;u++)s[u]<0&&(s[u]+=1),s[u]>1&&(s[u]-=1),6*s[u]<1?i[u]=f+(c-f)*6*s[u]:2*s[u]<1?i[u]=c:3*s[u]<2?i[u]=f+(c-f)*(2/3-s[u])*6:i[u]=f;[r,l,o]=[i[0]*255,i[1]*255,i[2]*255]}return e.length>3?[r,l,o,e[3]]:[r,l,o,1]},xr=(...e)=>{e=G(e,"rgba");let[t,n,a]=e;t/=255,n/=255,a/=255;const r=br(t,n,a),l=gr(t,n,a),o=(l+r)/2;let s,i;return l===r?(s=0,i=Number.NaN):s=o<.5?(l-r)/(l+r):(l-r)/(2-l-r),t==l?i=(n-a)/(l-r):n==l?i=2+(a-t)/(l-r):a==l&&(i=4+(t-n)/(l-r)),i*=60,i<0&&(i+=360),e.length>3&&e[3]!==void 0?[i,s,o,e[3]]:[i,s,o]};A.prototype.hsl=function(){return xr(this._rgb)};const Ms=(...e)=>new A(...e,"hsl");Z.hsl=Ms;X.format.hsl=Ca;X.autodetect.push({p:2,test:(...e)=>{if(e=G(e,"hsl"),V(e)==="array"&&e.length===3)return"hsl"}});const ks=(e,t,n)=>Pt(e,t,n,"hsl");we.hsl=ks;const{floor:_s}=Math,xs=(...e)=>{e=G(e,"hsv");let[t,n,a]=e,r,l,o;if(a*=255,n===0)r=l=o=a;else{t===360&&(t=0),t>360&&(t-=360),t<0&&(t+=360),t/=60;const s=_s(t),i=t-s,c=a*(1-n),f=a*(1-n*i),b=a*(1-n*(1-i));switch(s){case 0:[r,l,o]=[a,b,c];break;case 1:[r,l,o]=[f,a,c];break;case 2:[r,l,o]=[c,a,b];break;case 3:[r,l,o]=[c,f,a];break;case 4:[r,l,o]=[b,c,a];break;case 5:[r,l,o]=[a,c,f];break}}return[r,l,o,e.length>3?e[3]:1]},{min:ws,max:Cs}=Math,As=(...e)=>{e=G(e,"rgb");let[t,n,a]=e;const r=ws(t,n,a),l=Cs(t,n,a),o=l-r;let s,i,c;return c=l/255,l===0?(s=Number.NaN,i=0):(i=o/l,t===l&&(s=(n-a)/o),n===l&&(s=2+(a-t)/o),a===l&&(s=4+(t-n)/o),s*=60,s<0&&(s+=360)),[s,i,c]};A.prototype.hsv=function(){return As(this._rgb)};const Ts=(...e)=>new A(...e,"hsv");Z.hsv=Ts;X.format.hsv=xs;X.autodetect.push({p:2,test:(...e)=>{if(e=G(e,"hsv"),V(e)==="array"&&e.length===3)return"hsv"}});const $s=(e,t,n)=>Pt(e,t,n,"hsv");we.hsv=$s;function cn(e,t){let n=e.length;Array.isArray(e[0])||(e=[e]),Array.isArray(t[0])||(t=t.map(o=>[o]));let a=t[0].length,r=t[0].map((o,s)=>t.map(i=>i[s])),l=e.map(o=>r.map(s=>Array.isArray(o)?o.reduce((i,c,f)=>i+c*(s[f]||0),0):s.reduce((i,c)=>i+c*o,0)));return n===1&&(l=l[0]),a===1?l.map(o=>o[0]):l}const Xa=(...e)=>{e=G(e,"lab");const[t,n,a,...r]=e,[l,o,s]=zs([t,n,a]),[i,c,f]=Fr(l,o,s);return[i,c,f,...r.length>0&&r[0]<1?[r[0]]:[]]};function zs(e){var t=[[1.2268798758459243,-.5578149944602171,.2813910456659647],[-.0405757452148008,1.112286803280317,-.0717110580655164],[-.0763729366746601,-.4214933324022432,1.5869240198367816]],n=[[1,.3963377773761749,.2158037573099136],[1,-.1055613458156586,-.0638541728258133],[1,-.0894841775298119,-1.2914855480194092]],a=cn(n,e);return cn(t,a.map(r=>r**3))}const Ga=(...e)=>{const[t,n,a,...r]=G(e,"rgb"),l=yr(t,n,a);return[...Es(l),...r.length>0&&r[0]<1?[r[0]]:[]]};function Es(e){const t=[[.819022437996703,.3619062600528904,-.1288737815209879],[.0329836539323885,.9292868615863434,.0361446663506424],[.0481771893596242,.2642395317527308,.6335478284694309]],n=[[.210454268309314,.7936177747023054,-.0040720430116193],[1.9779985324311684,-2.42859224204858,.450593709617411],[.0259040424655478,.7827717124575296,-.8086757549230774]],a=cn(t,e);return cn(n,a.map(r=>Math.cbrt(r)))}A.prototype.oklab=function(){return Ga(this._rgb)};const Rs=(...e)=>new A(...e,"oklab");Object.assign(Z,{oklab:Rs});X.format.oklab=Xa;X.autodetect.push({p:2,test:(...e)=>{if(e=G(e,"oklab"),V(e)==="array"&&e.length===3)return"oklab"}});const Ss=(e,t,n)=>{const a=e.oklab(),r=t.oklab();return new A(a[0]+n*(r[0]-a[0]),a[1]+n*(r[1]-a[1]),a[2]+n*(r[2]-a[2]),"oklab")};we.oklab=Ss;const Ps=(e,t,n)=>Pt(e,t,n,"oklch");we.oklch=Ps;const{pow:Zn,sqrt:Vn,PI:Wn,cos:f0,sin:d0,atan2:Bs}=Math,Ds=(e,t="lrgb",n=null)=>{const a=e.length;n||(n=Array.from(new Array(a)).map(()=>1));const r=a/n.reduce(function(b,u){return b+u});if(n.forEach((b,u)=>{n[u]*=r}),e=e.map(b=>new A(b)),t==="lrgb")return Ls(e,n);const l=e.shift(),o=l.get(t),s=[];let i=0,c=0;for(let b=0;b<o.length;b++)if(o[b]=(o[b]||0)*n[0],s.push(isNaN(o[b])?0:n[0]),t.charAt(b)==="h"&&!isNaN(o[b])){const u=o[b]/180*Wn;i+=f0(u)*n[0],c+=d0(u)*n[0]}let f=l.alpha()*n[0];e.forEach((b,u)=>{const d=b.get(t);f+=b.alpha()*n[u+1];for(let p=0;p<o.length;p++)if(!isNaN(d[p]))if(s[p]+=n[u+1],t.charAt(p)==="h"){const v=d[p]/180*Wn;i+=f0(v)*n[u+1],c+=d0(v)*n[u+1]}else o[p]+=d[p]*n[u+1]});for(let b=0;b<o.length;b++)if(t.charAt(b)==="h"){let u=Bs(c/s[b],i/s[b])/Wn*180;for(;u<0;)u+=360;for(;u>=360;)u-=360;o[b]=u}else o[b]=o[b]/s[b];return f/=a,new A(o,t).alpha(f>.99999?1:f,!0)},Ls=(e,t)=>{const n=e.length,a=[0,0,0,0];for(let r=0;r<e.length;r++){const l=e[r],o=t[r]/n,s=l._rgb;a[0]+=Zn(s[0],2)*o,a[1]+=Zn(s[1],2)*o,a[2]+=Zn(s[2],2)*o,a[3]+=s[3]*o}return a[0]=Vn(a[0]),a[1]=Vn(a[1]),a[2]=Vn(a[2]),a[3]>.9999999&&(a[3]=1),new A(Na(a))},{pow:Ns}=Math;function fn(e){let t="rgb",n=Z("#ccc"),a=0,r=[0,1],l=[],o=[0,0],s=!1,i=[],c=!1,f=0,b=1,u=!1,d={},p=!0,v=1;const m=function(g){if(g=g||["#fff","#000"],g&&V(g)==="string"&&Z.brewer&&Z.brewer[g.toLowerCase()]&&(g=Z.brewer[g.toLowerCase()]),V(g)==="array"){g.length===1&&(g=[g[0],g[0]]),g=g.slice(0);for(let M=0;M<g.length;M++)g[M]=Z(g[M]);l.length=0;for(let M=0;M<g.length;M++)l.push(M/(g.length-1))}return D(),i=g},y=function(g){if(s!=null){const M=s.length-1;let z=0;for(;z<M&&g>=s[z];)z++;return z-1}return 0};let w=g=>g,B=g=>g;const x=function(g,M){let z,k;if(M==null&&(M=!1),isNaN(g)||g===null)return n;M?k=g:s&&s.length>2?k=y(g)/(s.length-2):b!==f?k=(g-f)/(b-f):k=1,k=B(k),M||(k=w(k)),v!==1&&(k=Ns(k,v)),k=o[0]+k*(1-o[0]-o[1]),k=mt(k,0,1);const S=Math.floor(k*1e4);if(p&&d[S])z=d[S];else{if(V(i)==="array")for(let E=0;E<l.length;E++){const O=l[E];if(k<=O){z=i[E];break}if(k>=O&&E===l.length-1){z=i[E];break}if(k>O&&k<l[E+1]){k=(k-O)/(l[E+1]-O),z=Z.interpolate(i[E],i[E+1],k,t);break}}else V(i)==="function"&&(z=i(k));p&&(d[S]=z)}return z};var D=()=>d={};m(e);const F=function(g){const M=Z(x(g));return c&&M[c]?M[c]():M};return F.classes=function(g){if(g!=null){if(V(g)==="array")s=g,r=[g[0],g[g.length-1]];else{const M=Z.analyze(r);g===0?s=[M.min,M.max]:s=Z.limits(M,"e",g)}return F}return s},F.domain=function(g){if(!arguments.length)return r;f=g[0],b=g[g.length-1],l=[];const M=i.length;if(g.length===M&&f!==b)for(let z of Array.from(g))l.push((z-f)/(b-f));else{for(let z=0;z<M;z++)l.push(z/(M-1));if(g.length>2){const z=g.map((S,E)=>E/(g.length-1)),k=g.map(S=>(S-f)/(b-f));k.every((S,E)=>z[E]===S)||(B=S=>{if(S<=0||S>=1)return S;let E=0;for(;S>=k[E+1];)E++;const O=(S-k[E])/(k[E+1]-k[E]);return z[E]+O*(z[E+1]-z[E])})}}return r=[f,b],F},F.mode=function(g){return arguments.length?(t=g,D(),F):t},F.range=function(g,M){return m(g),F},F.out=function(g){return c=g,F},F.spread=function(g){return arguments.length?(a=g,F):a},F.correctLightness=function(g){return g==null&&(g=!0),u=g,D(),u?w=function(M){const z=x(0,!0).lab()[0],k=x(1,!0).lab()[0],S=z>k;let E=x(M,!0).lab()[0];const O=z+(k-z)*M;let J=E-O,L=0,R=1,Y=20;for(;Math.abs(J)>.01&&Y-- >0;)(function(){return S&&(J*=-1),J<0?(L=M,M+=(R-M)*.5):(R=M,M+=(L-M)*.5),E=x(M,!0).lab()[0],J=E-O})();return M}:w=M=>M,F},F.padding=function(g){return g!=null?(V(g)==="number"&&(g=[g,g]),o=g,F):o},F.colors=function(g,M){arguments.length<2&&(M="hex");let z=[];if(arguments.length===0)z=i.slice(0);else if(g===1)z=[F(.5)];else if(g>1){const k=r[0],S=r[1]-k;z=Os(0,g).map(E=>F(k+E/(g-1)*S))}else{e=[];let k=[];if(s&&s.length>2)for(let S=1,E=s.length,O=1<=E;O?S<E:S>E;O?S++:S--)k.push((s[S-1]+s[S])*.5);else k=r;z=k.map(S=>F(S))}return Z[M]&&(z=z.map(k=>k[M]())),z},F.cache=function(g){return g!=null?(p=g,F):p},F.gamma=function(g){return g!=null?(v=g,F):v},F.nodata=function(g){return g!=null?(n=Z(g),F):n},F}function Os(e,t,n){let a=[],r=e<t,l=t;for(let o=e;r?o<l:o>l;r?o++:o--)a.push(o);return a}const Is=function(e){let t=[1,1];for(let n=1;n<e;n++){let a=[1];for(let r=1;r<=t.length;r++)a[r]=(t[r]||0)+t[r-1];t=a}return t},Ys=function(e){let t,n,a,r;if(e=e.map(l=>new A(l)),e.length===2)[n,a]=e.map(l=>l.lab()),t=function(l){const o=[0,1,2].map(s=>n[s]+l*(a[s]-n[s]));return new A(o,"lab")};else if(e.length===3)[n,a,r]=e.map(l=>l.lab()),t=function(l){const o=[0,1,2].map(s=>(1-l)*(1-l)*n[s]+2*(1-l)*l*a[s]+l*l*r[s]);return new A(o,"lab")};else if(e.length===4){let l;[n,a,r,l]=e.map(o=>o.lab()),t=function(o){const s=[0,1,2].map(i=>(1-o)*(1-o)*(1-o)*n[i]+3*(1-o)*(1-o)*o*a[i]+3*(1-o)*o*o*r[i]+o*o*o*l[i]);return new A(s,"lab")}}else if(e.length>=5){let l,o,s;l=e.map(i=>i.lab()),s=e.length-1,o=Is(s),t=function(i){const c=1-i,f=[0,1,2].map(b=>l.reduce((u,d,p)=>u+o[p]*c**(s-p)*i**p*d[b],0));return new A(f,"lab")}}else throw new RangeError("No point in running bezier with only one color.");return t},qs=e=>{const t=Ys(e);return t.scale=()=>fn(t),t},{round:wr}=Math;A.prototype.rgb=function(e=!0){return e===!1?this._rgb.slice(0,3):this._rgb.slice(0,3).map(wr)};A.prototype.rgba=function(e=!0){return this._rgb.slice(0,4).map((t,n)=>n<3?e===!1?t:wr(t):t)};const Xs=(...e)=>new A(...e,"rgb");Object.assign(Z,{rgb:Xs});X.format.rgb=(...e)=>{const t=G(e,"rgba");return t[3]===void 0&&(t[3]=1),t};X.autodetect.push({p:3,test:(...e)=>{if(e=G(e,"rgba"),V(e)==="array"&&(e.length===3||e.length===4&&V(e[3])=="number"&&e[3]>=0&&e[3]<=1))return"rgb"}});const Ye=(e,t,n)=>{if(!Ye[n])throw new Error("unknown blend mode "+n);return Ye[n](e,t)},ht=e=>(t,n)=>{const a=Z(n).rgb(),r=Z(t).rgb();return Z.rgb(e(a,r))},bt=e=>(t,n)=>{const a=[];return a[0]=e(t[0],n[0]),a[1]=e(t[1],n[1]),a[2]=e(t[2],n[2]),a},Gs=e=>e,Hs=(e,t)=>e*t/255,js=(e,t)=>e>t?t:e,Us=(e,t)=>e>t?e:t,Zs=(e,t)=>255*(1-(1-e/255)*(1-t/255)),Vs=(e,t)=>t<128?2*e*t/255:255*(1-2*(1-e/255)*(1-t/255)),Ws=(e,t)=>255*(1-(1-t/255)/(e/255)),Ks=(e,t)=>e===255?255:(e=255*(t/255)/(1-e/255),e>255?255:e);Ye.normal=ht(bt(Gs));Ye.multiply=ht(bt(Hs));Ye.screen=ht(bt(Zs));Ye.overlay=ht(bt(Vs));Ye.darken=ht(bt(js));Ye.lighten=ht(bt(Us));Ye.dodge=ht(bt(Ks));Ye.burn=ht(bt(Ws));const{pow:Js,sin:Qs,cos:ei}=Math;function ti(e=300,t=-1.5,n=1,a=1,r=[0,1]){let l=0,o;V(r)==="array"?o=r[1]-r[0]:(o=0,r=[r,r]);const s=function(i){const c=Ke*((e+120)/360+t*i),f=Js(r[0]+o*i,a),u=(l!==0?n[0]+i*l:n)*f*(1-f)/2,d=ei(c),p=Qs(c),v=f+u*(-.14861*d+1.78277*p),m=f+u*(-.29227*d-.90649*p),y=f+u*(1.97294*d);return Z(Na([v*255,m*255,y*255,1]))};return s.start=function(i){return i==null?e:(e=i,s)},s.rotations=function(i){return i==null?t:(t=i,s)},s.gamma=function(i){return i==null?a:(a=i,s)},s.hue=function(i){return i==null?n:(n=i,V(n)==="array"?(l=n[1]-n[0],l===0&&(n=n[1])):l=0,s)},s.lightness=function(i){return i==null?r:(V(i)==="array"?(r=i,o=i[1]-i[0]):(r=[i,i],o=0),s)},s.scale=()=>Z.scale(s),s.hue(n),s}const ni="0123456789abcdef",{floor:ai,random:ri}=Math,li=()=>{let e="#";for(let t=0;t<6;t++)e+=ni.charAt(ai(ri()*16));return new A(e,"hex")},{log:u0,pow:oi,floor:si,abs:ii}=Math;function Cr(e,t=null){const n={min:Number.MAX_VALUE,max:Number.MAX_VALUE*-1,sum:0,values:[],count:0};return V(e)==="object"&&(e=Object.values(e)),e.forEach(a=>{t&&V(a)==="object"&&(a=a[t]),a!=null&&!isNaN(a)&&(n.values.push(a),n.sum+=a,a<n.min&&(n.min=a),a>n.max&&(n.max=a),n.count+=1)}),n.domain=[n.min,n.max],n.limits=(a,r)=>Ar(n,a,r),n}function Ar(e,t="equal",n=7){V(e)=="array"&&(e=Cr(e));const{min:a,max:r}=e,l=e.values.sort((s,i)=>s-i);if(n===1)return[a,r];const o=[];if(t.substr(0,1)==="c"&&(o.push(a),o.push(r)),t.substr(0,1)==="e"){o.push(a);for(let s=1;s<n;s++)o.push(a+s/n*(r-a));o.push(r)}else if(t.substr(0,1)==="l"){if(a<=0)throw new Error("Logarithmic scales are only possible for values > 0");const s=Math.LOG10E*u0(a),i=Math.LOG10E*u0(r);o.push(a);for(let c=1;c<n;c++)o.push(oi(10,s+c/n*(i-s)));o.push(r)}else if(t.substr(0,1)==="q"){o.push(a);for(let s=1;s<n;s++){const i=(l.length-1)*s/n,c=si(i);if(c===i)o.push(l[c]);else{const f=i-c;o.push(l[c]*(1-f)+l[c+1]*f)}}o.push(r)}else if(t.substr(0,1)==="k"){let s;const i=l.length,c=new Array(i),f=new Array(n);let b=!0,u=0,d=null;d=[],d.push(a);for(let m=1;m<n;m++)d.push(a+m/n*(r-a));for(d.push(r);b;){for(let y=0;y<n;y++)f[y]=0;for(let y=0;y<i;y++){const w=l[y];let B=Number.MAX_VALUE,x;for(let D=0;D<n;D++){const F=ii(d[D]-w);F<B&&(B=F,x=D),f[x]++,c[y]=x}}const m=new Array(n);for(let y=0;y<n;y++)m[y]=null;for(let y=0;y<i;y++)s=c[y],m[s]===null?m[s]=l[y]:m[s]+=l[y];for(let y=0;y<n;y++)m[y]*=1/f[y];b=!1;for(let y=0;y<n;y++)if(m[y]!==d[y]){b=!0;break}d=m,u++,u>200&&(b=!1)}const p={};for(let m=0;m<n;m++)p[m]=[];for(let m=0;m<i;m++)s=c[m],p[s].push(l[m]);let v=[];for(let m=0;m<n;m++)v.push(p[m][0]),v.push(p[m][p[m].length-1]);v=v.sort((m,y)=>m-y),o.push(v[0]);for(let m=1;m<v.length;m+=2){const y=v[m];!isNaN(y)&&o.indexOf(y)===-1&&o.push(y)}}return o}const ci=(e,t)=>{e=new A(e),t=new A(t);const n=e.luminance(),a=t.luminance();return n>a?(n+.05)/(a+.05):(a+.05)/(n+.05)};/**
 * @license
 *
 * The APCA contrast prediction algorithm is based of the formulas published
 * in the APCA-1.0.98G specification by Myndex. The specification is available at:
 * https://raw.githubusercontent.com/Myndex/apca-w3/master/images/APCAw3_0.1.17_APCA0.0.98G.svg
 *
 * Note that the APCA implementation is still beta, so please update to
 * future versions of chroma.js when they become available.
 *
 * You can read more about the APCA Readability Criterion at
 * https://readtech.org/ARC/
 */const h0=.027,fi=5e-4,di=.1,b0=1.14,tn=.022,g0=1.414,ui=(e,t)=>{e=new A(e),t=new A(t),e.alpha()<1&&(e=Et(t,e,e.alpha(),"rgb"));const n=p0(...e.rgb()),a=p0(...t.rgb()),r=n>=tn?n:n+Math.pow(tn-n,g0),l=a>=tn?a:a+Math.pow(tn-a,g0),o=Math.pow(l,.56)-Math.pow(r,.57),s=Math.pow(l,.65)-Math.pow(r,.62),i=Math.abs(l-r)<fi?0:r<l?o*b0:s*b0;return(Math.abs(i)<di?0:i>0?i-h0:i+h0)*100};function p0(e,t,n){return .2126729*Math.pow(e/255,2.4)+.7151522*Math.pow(t/255,2.4)+.072175*Math.pow(n/255,2.4)}const{sqrt:We,pow:pe,min:hi,max:bi,atan2:m0,abs:v0,cos:nn,sin:F0,exp:gi,PI:y0}=Math;function pi(e,t,n=1,a=1,r=1){var l=function(be){return 360*be/(2*y0)},o=function(be){return 2*y0*be/360};e=new A(e),t=new A(t);const[s,i,c]=Array.from(e.lab()),[f,b,u]=Array.from(t.lab()),d=(s+f)/2,p=We(pe(i,2)+pe(c,2)),v=We(pe(b,2)+pe(u,2)),m=(p+v)/2,y=.5*(1-We(pe(m,7)/(pe(m,7)+pe(25,7)))),w=i*(1+y),B=b*(1+y),x=We(pe(w,2)+pe(c,2)),D=We(pe(B,2)+pe(u,2)),F=(x+D)/2,g=l(m0(c,w)),M=l(m0(u,B)),z=g>=0?g:g+360,k=M>=0?M:M+360,S=v0(z-k)>180?(z+k+360)/2:(z+k)/2,E=1-.17*nn(o(S-30))+.24*nn(o(2*S))+.32*nn(o(3*S+6))-.2*nn(o(4*S-63));let O=k-z;O=v0(O)<=180?O:k<=z?O+360:O-360,O=2*We(x*D)*F0(o(O)/2);const J=f-s,L=D-x,R=1+.015*pe(d-50,2)/We(20+pe(d-50,2)),Y=1+.045*F,q=1+.015*F*E,ae=30*gi(-pe((S-275)/25,2)),C=-(2*We(pe(F,7)/(pe(F,7)+pe(25,7))))*F0(2*o(ae)),te=We(pe(J/(n*R),2)+pe(L/(a*Y),2)+pe(O/(r*q),2)+C*(L/(a*Y))*(O/(r*q)));return bi(0,hi(100,te))}function mi(e,t,n="lab"){e=new A(e),t=new A(t);const a=e.get(n),r=t.get(n);let l=0;for(let o in a){const s=(a[o]||0)-(r[o]||0);l+=s*s}return Math.sqrt(l)}const vi=(...e)=>{try{return new A(...e),!0}catch{return!1}},Fi={cool(){return fn([Z.hsl(180,1,.9),Z.hsl(250,.7,.4)])},hot(){return fn(["#000","#f00","#ff0","#fff"]).mode("rgb")}},Aa={OrRd:["#fff7ec","#fee8c8","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#b30000","#7f0000"],PuBu:["#fff7fb","#ece7f2","#d0d1e6","#a6bddb","#74a9cf","#3690c0","#0570b0","#045a8d","#023858"],BuPu:["#f7fcfd","#e0ecf4","#bfd3e6","#9ebcda","#8c96c6","#8c6bb1","#88419d","#810f7c","#4d004b"],Oranges:["#fff5eb","#fee6ce","#fdd0a2","#fdae6b","#fd8d3c","#f16913","#d94801","#a63603","#7f2704"],BuGn:["#f7fcfd","#e5f5f9","#ccece6","#99d8c9","#66c2a4","#41ae76","#238b45","#006d2c","#00441b"],YlOrBr:["#ffffe5","#fff7bc","#fee391","#fec44f","#fe9929","#ec7014","#cc4c02","#993404","#662506"],YlGn:["#ffffe5","#f7fcb9","#d9f0a3","#addd8e","#78c679","#41ab5d","#238443","#006837","#004529"],Reds:["#fff5f0","#fee0d2","#fcbba1","#fc9272","#fb6a4a","#ef3b2c","#cb181d","#a50f15","#67000d"],RdPu:["#fff7f3","#fde0dd","#fcc5c0","#fa9fb5","#f768a1","#dd3497","#ae017e","#7a0177","#49006a"],Greens:["#f7fcf5","#e5f5e0","#c7e9c0","#a1d99b","#74c476","#41ab5d","#238b45","#006d2c","#00441b"],YlGnBu:["#ffffd9","#edf8b1","#c7e9b4","#7fcdbb","#41b6c4","#1d91c0","#225ea8","#253494","#081d58"],Purples:["#fcfbfd","#efedf5","#dadaeb","#bcbddc","#9e9ac8","#807dba","#6a51a3","#54278f","#3f007d"],GnBu:["#f7fcf0","#e0f3db","#ccebc5","#a8ddb5","#7bccc4","#4eb3d3","#2b8cbe","#0868ac","#084081"],Greys:["#ffffff","#f0f0f0","#d9d9d9","#bdbdbd","#969696","#737373","#525252","#252525","#000000"],YlOrRd:["#ffffcc","#ffeda0","#fed976","#feb24c","#fd8d3c","#fc4e2a","#e31a1c","#bd0026","#800026"],PuRd:["#f7f4f9","#e7e1ef","#d4b9da","#c994c7","#df65b0","#e7298a","#ce1256","#980043","#67001f"],Blues:["#f7fbff","#deebf7","#c6dbef","#9ecae1","#6baed6","#4292c6","#2171b5","#08519c","#08306b"],PuBuGn:["#fff7fb","#ece2f0","#d0d1e6","#a6bddb","#67a9cf","#3690c0","#02818a","#016c59","#014636"],Viridis:["#440154","#482777","#3f4a8a","#31678e","#26838f","#1f9d8a","#6cce5a","#b6de2b","#fee825"],Spectral:["#9e0142","#d53e4f","#f46d43","#fdae61","#fee08b","#ffffbf","#e6f598","#abdda4","#66c2a5","#3288bd","#5e4fa2"],RdYlGn:["#a50026","#d73027","#f46d43","#fdae61","#fee08b","#ffffbf","#d9ef8b","#a6d96a","#66bd63","#1a9850","#006837"],RdBu:["#67001f","#b2182b","#d6604d","#f4a582","#fddbc7","#f7f7f7","#d1e5f0","#92c5de","#4393c3","#2166ac","#053061"],PiYG:["#8e0152","#c51b7d","#de77ae","#f1b6da","#fde0ef","#f7f7f7","#e6f5d0","#b8e186","#7fbc41","#4d9221","#276419"],PRGn:["#40004b","#762a83","#9970ab","#c2a5cf","#e7d4e8","#f7f7f7","#d9f0d3","#a6dba0","#5aae61","#1b7837","#00441b"],RdYlBu:["#a50026","#d73027","#f46d43","#fdae61","#fee090","#ffffbf","#e0f3f8","#abd9e9","#74add1","#4575b4","#313695"],BrBG:["#543005","#8c510a","#bf812d","#dfc27d","#f6e8c3","#f5f5f5","#c7eae5","#80cdc1","#35978f","#01665e","#003c30"],RdGy:["#67001f","#b2182b","#d6604d","#f4a582","#fddbc7","#ffffff","#e0e0e0","#bababa","#878787","#4d4d4d","#1a1a1a"],PuOr:["#7f3b08","#b35806","#e08214","#fdb863","#fee0b6","#f7f7f7","#d8daeb","#b2abd2","#8073ac","#542788","#2d004b"],Set2:["#66c2a5","#fc8d62","#8da0cb","#e78ac3","#a6d854","#ffd92f","#e5c494","#b3b3b3"],Accent:["#7fc97f","#beaed4","#fdc086","#ffff99","#386cb0","#f0027f","#bf5b17","#666666"],Set1:["#e41a1c","#377eb8","#4daf4a","#984ea3","#ff7f00","#ffff33","#a65628","#f781bf","#999999"],Set3:["#8dd3c7","#ffffb3","#bebada","#fb8072","#80b1d3","#fdb462","#b3de69","#fccde5","#d9d9d9","#bc80bd","#ccebc5","#ffed6f"],Dark2:["#1b9e77","#d95f02","#7570b3","#e7298a","#66a61e","#e6ab02","#a6761d","#666666"],Paired:["#a6cee3","#1f78b4","#b2df8a","#33a02c","#fb9a99","#e31a1c","#fdbf6f","#ff7f00","#cab2d6","#6a3d9a","#ffff99","#b15928"],Pastel2:["#b3e2cd","#fdcdac","#cbd5e8","#f4cae4","#e6f5c9","#fff2ae","#f1e2cc","#cccccc"],Pastel1:["#fbb4ae","#b3cde3","#ccebc5","#decbe4","#fed9a6","#ffffcc","#e5d8bd","#fddaec","#f2f2f2"]},Tr=Object.keys(Aa),M0=new Map(Tr.map(e=>[e.toLowerCase(),e])),yi=typeof Proxy=="function"?new Proxy(Aa,{get(e,t){const n=t.toLowerCase();if(M0.has(n))return e[M0.get(n)]},getOwnPropertyNames(){return Object.getOwnPropertyNames(Tr)}}):Aa,Mi=(...e)=>{e=G(e,"cmyk");const[t,n,a,r]=e,l=e.length>4?e[4]:1;return r===1?[0,0,0,l]:[t>=1?0:255*(1-t)*(1-r),n>=1?0:255*(1-n)*(1-r),a>=1?0:255*(1-a)*(1-r),l]},{max:k0}=Math,ki=(...e)=>{let[t,n,a]=G(e,"rgb");t=t/255,n=n/255,a=a/255;const r=1-k0(t,k0(n,a)),l=r<1?1/(1-r):0,o=(1-t-r)*l,s=(1-n-r)*l,i=(1-a-r)*l;return[o,s,i,r]};A.prototype.cmyk=function(){return ki(this._rgb)};const _i=(...e)=>new A(...e,"cmyk");Object.assign(Z,{cmyk:_i});X.format.cmyk=Mi;X.autodetect.push({p:2,test:(...e)=>{if(e=G(e,"cmyk"),V(e)==="array"&&e.length===4)return"cmyk"}});const xi=(...e)=>{const t=G(e,"hsla");let n=St(e)||"lsa";return t[0]=Re(t[0]||0)+"deg",t[1]=Re(t[1]*100)+"%",t[2]=Re(t[2]*100)+"%",n==="hsla"||t.length>3&&t[3]<1?(t[3]="/ "+(t.length>3?t[3]:1),n="hsla"):t.length=3,`${n.substr(0,3)}(${t.join(" ")})`},wi=(...e)=>{const t=G(e,"lab");let n=St(e)||"lab";return t[0]=Re(t[0])+"%",t[1]=Re(t[1]),t[2]=Re(t[2]),n==="laba"||t.length>3&&t[3]<1?t[3]="/ "+(t.length>3?t[3]:1):t.length=3,`lab(${t.join(" ")})`},Ci=(...e)=>{const t=G(e,"lch");let n=St(e)||"lab";return t[0]=Re(t[0])+"%",t[1]=Re(t[1]),t[2]=isNaN(t[2])?"none":Re(t[2])+"deg",n==="lcha"||t.length>3&&t[3]<1?t[3]="/ "+(t.length>3?t[3]:1):t.length=3,`lch(${t.join(" ")})`},Ai=(...e)=>{const t=G(e,"lab");return t[0]=Re(t[0]*100)+"%",t[1]=wa(t[1]),t[2]=wa(t[2]),t.length>3&&t[3]<1?t[3]="/ "+(t.length>3?t[3]:1):t.length=3,`oklab(${t.join(" ")})`},$r=(...e)=>{const[t,n,a,...r]=G(e,"rgb"),[l,o,s]=Ga(t,n,a),[i,c,f]=kr(l,o,s);return[i,c,f,...r.length>0&&r[0]<1?[r[0]]:[]]},Ti=(...e)=>{const t=G(e,"lch");return t[0]=Re(t[0]*100)+"%",t[1]=wa(t[1]),t[2]=isNaN(t[2])?"none":Re(t[2])+"deg",t.length>3&&t[3]<1?t[3]="/ "+(t.length>3?t[3]:1):t.length=3,`oklch(${t.join(" ")})`},{round:Kn}=Math,$i=(...e)=>{const t=G(e,"rgba");let n=St(e)||"rgb";if(n.substr(0,3)==="hsl")return xi(xr(t),n);if(n.substr(0,3)==="lab"){const a=Vt();Je("d50");const r=wi(Ia(t),n);return Je(a),r}if(n.substr(0,3)==="lch"){const a=Vt();Je("d50");const r=Ci(qa(t),n);return Je(a),r}return n.substr(0,5)==="oklab"?Ai(Ga(t)):n.substr(0,5)==="oklch"?Ti($r(t)):(t[0]=Kn(t[0]),t[1]=Kn(t[1]),t[2]=Kn(t[2]),(n==="rgba"||t.length>3&&t[3]<1)&&(t[3]="/ "+(t.length>3?t[3]:1),n="rgba"),`${n.substr(0,3)}(${t.slice(0,n==="rgb"?3:4).join(" ")})`)},zr=(...e)=>{e=G(e,"lch");const[t,n,a,...r]=e,[l,o,s]=Mr(t,n,a),[i,c,f]=Xa(l,o,s);return[i,c,f,...r.length>0&&r[0]<1?[r[0]]:[]]},Qe=/((?:-?\d+)|(?:-?\d+(?:\.\d+)?)%|none)/.source,Oe=/((?:-?(?:\d+(?:\.\d*)?|\.\d+)%?)|none)/.source,dn=/((?:-?(?:\d+(?:\.\d*)?|\.\d+)%)|none)/.source,Se=/\s*/.source,Bt=/\s+/.source,Ha=/\s*,\s*/.source,kn=/((?:-?(?:\d+(?:\.\d*)?|\.\d+)(?:deg)?)|none)/.source,Dt=/\s*(?:\/\s*((?:[01]|[01]?\.\d+)|\d+(?:\.\d+)?%))?/.source,Er=new RegExp("^rgba?\\("+Se+[Qe,Qe,Qe].join(Bt)+Dt+"\\)$"),Rr=new RegExp("^rgb\\("+Se+[Qe,Qe,Qe].join(Ha)+Se+"\\)$"),Sr=new RegExp("^rgba\\("+Se+[Qe,Qe,Qe,Oe].join(Ha)+Se+"\\)$"),Pr=new RegExp("^hsla?\\("+Se+[kn,dn,dn].join(Bt)+Dt+"\\)$"),Br=new RegExp("^hsl?\\("+Se+[kn,dn,dn].join(Ha)+Se+"\\)$"),Dr=/^hsla\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/,Lr=new RegExp("^lab\\("+Se+[Oe,Oe,Oe].join(Bt)+Dt+"\\)$"),Nr=new RegExp("^lch\\("+Se+[Oe,Oe,kn].join(Bt)+Dt+"\\)$"),Or=new RegExp("^oklab\\("+Se+[Oe,Oe,Oe].join(Bt)+Dt+"\\)$"),Ir=new RegExp("^oklch\\("+Se+[Oe,Oe,kn].join(Bt)+Dt+"\\)$"),{round:Yr}=Math,wt=e=>e.map((t,n)=>n<=2?mt(Yr(t),0,255):t),me=(e,t=0,n=100,a=!1)=>(typeof e=="string"&&e.endsWith("%")&&(e=parseFloat(e.substring(0,e.length-1))/100,a?e=t+(e+1)*.5*(n-t):e=t+e*(n-t)),+e),Ae=(e,t)=>e==="none"?t:e,ja=e=>{if(e=e.toLowerCase().trim(),e==="transparent")return[0,0,0,0];let t;if(X.format.named)try{return X.format.named(e)}catch{}if((t=e.match(Er))||(t=e.match(Rr))){let n=t.slice(1,4);for(let r=0;r<3;r++)n[r]=+me(Ae(n[r],0),0,255);n=wt(n);const a=t[4]!==void 0?+me(t[4],0,1):1;return n[3]=a,n}if(t=e.match(Sr)){const n=t.slice(1,5);for(let a=0;a<4;a++)n[a]=+me(n[a],0,255);return n}if((t=e.match(Pr))||(t=e.match(Br))){const n=t.slice(1,4);n[0]=+Ae(n[0].replace("deg",""),0),n[1]=+me(Ae(n[1],0),0,100)*.01,n[2]=+me(Ae(n[2],0),0,100)*.01;const a=wt(Ca(n)),r=t[4]!==void 0?+me(t[4],0,1):1;return a[3]=r,a}if(t=e.match(Dr)){const n=t.slice(1,4);n[1]*=.01,n[2]*=.01;const a=Ca(n);for(let r=0;r<3;r++)a[r]=Yr(a[r]);return a[3]=+t[4],a}if(t=e.match(Lr)){const n=t.slice(1,4);n[0]=me(Ae(n[0],0),0,100),n[1]=me(Ae(n[1],0),-125,125,!0),n[2]=me(Ae(n[2],0),-125,125,!0);const a=Vt();Je("d50");const r=wt(Oa(n));Je(a);const l=t[4]!==void 0?+me(t[4],0,1):1;return r[3]=l,r}if(t=e.match(Nr)){const n=t.slice(1,4);n[0]=me(n[0],0,100),n[1]=me(Ae(n[1],0),0,150,!1),n[2]=+Ae(n[2].replace("deg",""),0);const a=Vt();Je("d50");const r=wt(Ya(n));Je(a);const l=t[4]!==void 0?+me(t[4],0,1):1;return r[3]=l,r}if(t=e.match(Or)){const n=t.slice(1,4);n[0]=me(Ae(n[0],0),0,1),n[1]=me(Ae(n[1],0),-.4,.4,!0),n[2]=me(Ae(n[2],0),-.4,.4,!0);const a=wt(Xa(n)),r=t[4]!==void 0?+me(t[4],0,1):1;return a[3]=r,a}if(t=e.match(Ir)){const n=t.slice(1,4);n[0]=me(Ae(n[0],0),0,1),n[1]=me(Ae(n[1],0),0,.4,!1),n[2]=+Ae(n[2].replace("deg",""),0);const a=wt(zr(n)),r=t[4]!==void 0?+me(t[4],0,1):1;return a[3]=r,a}};ja.test=e=>Er.test(e)||Pr.test(e)||Lr.test(e)||Nr.test(e)||Or.test(e)||Ir.test(e)||Rr.test(e)||Sr.test(e)||Br.test(e)||Dr.test(e)||e==="transparent";A.prototype.css=function(e){return $i(this._rgb,e)};const zi=(...e)=>new A(...e,"css");Z.css=zi;X.format.css=ja;X.autodetect.push({p:5,test:(e,...t)=>{if(!t.length&&V(e)==="string"&&ja.test(e))return"css"}});X.format.gl=(...e)=>{const t=G(e,"rgba");return t[0]*=255,t[1]*=255,t[2]*=255,t};const Ei=(...e)=>new A(...e,"gl");Z.gl=Ei;A.prototype.gl=function(){const e=this._rgb;return[e[0]/255,e[1]/255,e[2]/255,e[3]]};A.prototype.hex=function(e){return vr(this._rgb,e)};const Ri=(...e)=>new A(...e,"hex");Z.hex=Ri;X.format.hex=mr;X.autodetect.push({p:4,test:(e,...t)=>{if(!t.length&&V(e)==="string"&&[3,4,5,6,7,8,9].indexOf(e.length)>=0)return"hex"}});const{log:an}=Math,qr=e=>{const t=e/100;let n,a,r;return t<66?(n=255,a=t<6?0:-155.25485562709179-.44596950469579133*(a=t-2)+104.49216199393888*an(a),r=t<20?0:-254.76935184120902+.8274096064007395*(r=t-10)+115.67994401066147*an(r)):(n=351.97690566805693+.114206453784165*(n=t-55)-40.25366309332127*an(n),a=325.4494125711974+.07943456536662342*(a=t-50)-28.0852963507957*an(a),r=255),[n,a,r,1]},{round:Si}=Math,Pi=(...e)=>{const t=G(e,"rgb"),n=t[0],a=t[2];let r=1e3,l=4e4;const o=.4;let s;for(;l-r>o;){s=(l+r)*.5;const i=qr(s);i[2]/i[0]>=a/n?l=s:r=s}return Si(s)};A.prototype.temp=A.prototype.kelvin=A.prototype.temperature=function(){return Pi(this._rgb)};const Jn=(...e)=>new A(...e,"temp");Object.assign(Z,{temp:Jn,kelvin:Jn,temperature:Jn});X.format.temp=X.format.kelvin=X.format.temperature=qr;A.prototype.oklch=function(){return $r(this._rgb)};const Bi=(...e)=>new A(...e,"oklch");Object.assign(Z,{oklch:Bi});X.format.oklch=zr;X.autodetect.push({p:2,test:(...e)=>{if(e=G(e,"oklch"),V(e)==="array"&&e.length===3)return"oklch"}});Object.assign(Z,{analyze:Cr,average:Ds,bezier:qs,blend:Ye,brewer:yi,Color:A,colors:zt,contrast:ci,contrastAPCA:ui,cubehelix:ti,deltaE:pi,distance:mi,input:X,interpolate:Et,limits:Ar,mix:Et,random:li,scale:fn,scales:Fi,valid:vi});const _0=Object.assign({"../../data/sets/rebrickable_parts_41809-1-hedwig-pencil-holder.csv":Co,"../../data/sets/rebrickable_parts_41904-1-animal-picture-holders.csv":Ao,"../../data/sets/rebrickable_parts_41935-1-lots-of-dots.csv":To,"../../data/sets/rebrickable_parts_41950-1-lots-of-dots-lettering.csv":$o,"../../data/sets/rebrickable_parts_41957-1-adhesive-patches-mega-pack.csv":zo,"../../data/sets/rebrickable_parts_41961-1-designer-toolkit-patterns.csv":Eo});function Di(e){return e.trim().split(`
`).slice(1).map(n=>{const[a,r,l,o]=n.split(",");return{id:Number(a),name:r,rgb:`#${l}`,is_trans:o==="True"}})}function Li(){const e=new Set;for(const t in _0){const a=_0[t].trim().split(`
`);for(const r of a.slice(1)){const l=Number(r.split(",")[1]);isNaN(l)||e.add(l)}}return e}function Ni(e){const t=Z(e).hsl();return{h:isNaN(t[0])?0:t[0],s:t[1]*100,l:t[2]*100}}function Oi(e,t=15,n=6){const a={},r=new Set;for(const s of e){if(r.has(s.rgb))continue;r.add(s.rgb);const i=s.s<10?999:Math.floor(s.h/t);a[i]||(a[i]=[]),a[i].push(s)}Object.values(a).forEach(s=>s.sort((i,c)=>i.l-c.l));const l=Object.keys(a).map(Number).sort((s,i)=>s-i).flatMap(s=>a[s]),o=[];for(let s=0;s<l.length;s+=n)o.push(l.slice(s,s+n));return o}const Ii=Di(Ro),Yi=Li(),it=Ii.filter(e=>Yi.has(e.id)&&!e.name.includes("Trans-Clear")),xe=Oi(it.map(e=>({...e,...Ni(e.rgb)})));[...it].sort((e,t)=>{const[n,a,r]=Z(e.rgb).hcl(),[l,o,s]=Z(t.rgb).hcl();return n!==l?n-l:a!==o?a-o:r-s});var qi=ye('<div class="zoom-pan-container svelte-b0dtxj" role="application" aria-label="Zoomable and pannable container" tabindex="0"><div class="zoom-pan-content svelte-b0dtxj"><!></div></div>');function Xi(e,t){Pe(t,!1);const n=Ve();let a=N(t,"zoom",12,1),r=N(t,"panX",12,0),l=N(t,"panY",12,0),o=N(t,"selectMode",8,!1),s=re(!1),i=0,c=0,f=re(!1),b=re(),u=re(),d=!1;Ba(()=>{if(h(b)&&h(u)&&!d){const g=h(b).clientWidth,M=h(b).clientHeight;let z=0,k=0;h(u).firstElementChild instanceof HTMLElement?(z=h(u).firstElementChild.offsetWidth,k=h(u).firstElementChild.offsetHeight):(z=h(u).offsetWidth,k=h(u).offsetHeight),r((g-z*a())/2),l((M-k*a())/2),d=!0,n("panChanged",{panX:r(),panY:l()})}});function p(g){g.preventDefault();const M=h(b).getBoundingClientRect(),z=g.clientX-M.left,k=g.clientY-M.top,S=g.deltaY>0?.9:1.1,E=Math.max(.2,Math.min(5,a()*S));if(E!==a()){const O=E/a();r(z-(z-r())*O),l(k-(k-l())*O),a(E),n("zoomChanged",{zoom:a(),panX:r(),panY:l()})}}function v(g){o()||g.button===0&&($(s,!0),$(f,!1),i=g.clientX,c=g.clientY,window.addEventListener("mousemove",m),window.addEventListener("mouseup",y),g.preventDefault())}function m(g){if(h(s)){const M=g.clientX-i,z=g.clientY-c;(Math.abs(M)>1||Math.abs(z)>1)&&$(f,!0),r(r()+M),l(l()+z),i=g.clientX,c=g.clientY,n("panChanged",{panX:r(),panY:l()})}}function y(){h(s)&&($(s,!1),window.removeEventListener("mousemove",m),window.removeEventListener("mouseup",y),n("panEnd",{didPan:h(f)}),setTimeout(()=>{$(f,!1)},50))}function w(g){g.key===" "&&g.preventDefault()}function B(g){g.key===" "&&g.preventDefault()}De();var x=qi(),D=U(x),F=U(D);qe(F,t,"default",{get didPan(){return h(f)}}),H(D),r0(D,g=>$(u,g),()=>h(u)),H(x),r0(x,g=>$(b,g),()=>h(b)),Ee(()=>ft(D,`transform: translate(${r()??""}px, ${l()??""}px) scale(${a()??""}); cursor: ${o()?"crosshair":h(s)?"grabbing":"grab"};`)),le("wheel",x,p),le("mousedown",x,v),le("keydown",x,w),le("keyup",x,B),ee(e,x),Be()}var Gi=ye('<div class="square svelte-gxsx5p"></div>');function Xr(e,t){let n=N(t,"color",8,"#000");var a=Gi();Ee(()=>ft(a,`--color: ${n()??""}`)),ee(e,a)}var Hi=ye('<div class="circle svelte-r5z0cw"></div>');function Gr(e,t){let n=N(t,"color",8,"#000");var a=Hi();Ee(()=>ft(a,`--color: ${n()??""}`)),ee(e,a)}var ji=ye('<div class="quarter-container svelte-19hi45o"><svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none" class="svelte-19hi45o"><path d="M 0,0 L 100,0 A 100,100 0 0,1 0,100 Z" stroke="none"></path></svg></div>');function Hr(e,t){let n=N(t,"color",8,"#000"),a=N(t,"rotation",8,0);var r=ji(),l=U(r),o=U(l);H(l),H(r),Ee(()=>{Fe(o,"fill",n()),Fe(o,"transform",`rotate(${a()*90}, 50, 50)`)}),ee(e,r)}var Ui=ye('<div class="tile svelte-ia1epz"><div class="square-half svelte-ia1epz"></div> <div class="circle-half svelte-ia1epz"></div></div>');function jr(e,t){let n=N(t,"color",8,"#000"),a=N(t,"rotation",8,0);var r=Ui();Ee(()=>ft(r,`--color: ${n()??""}; transform: rotate(${a()*90}deg);`)),ee(e,r)}var Zi=ye('<div role="button" tabindex="0"><!></div>'),Vi=ye('<div class="selection-overlay svelte-1hhz0mg"></div>'),Wi=ye('<div class="grid svelte-1hhz0mg"><!> <!></div>');function Ki(e,t){Pe(t,!1);const n=Ve();let a=N(t,"grid",12),r=N(t,"width",8),l=N(t,"height",8),o=N(t,"selectedShape",8,"square"),s=N(t,"selectedColor",8),i=N(t,"paintMode",8,!1),c=N(t,"colorPickerMode",8,!1),f=N(t,"selectMode",8,!1),b=N(t,"quarterRotation",8,0),u=N(t,"halfCircleRotation",8,0),d=N(t,"selection",28,()=>({startX:0,startY:0,endX:0,endY:0,active:!1})),p=N(t,"didPan",8,!1),v=re(!1);function m(L){const R=a()[L];if(!R)return y(L);const{shape:Y,color:q}=R;if(Y===o()&&q===s())return;const ae=[L],de=new Set;for(;ae.length;){const C=ae.pop();if(C===void 0||de.has(C))continue;de.add(C);const te=a()[C];if(!te||te.shape!==Y||te.color!==q)continue;a(a()[C]={shape:o(),color:s(),rotation:o()==="quarter"?b():o()==="halfCircle"?u():0},!0);const be=C%r(),ue=Math.floor(C/r());be>0&&ae.push(C-1),be<r()-1&&ae.push(C+1),ue>0&&ae.push(C-r()),ue<l()-1&&ae.push(C+r())}a([...a()]),n("gridChanged",{grid:a()})}function y(L){const R=a()[L];R&&R.shape===o()&&R.color===s()?a(a()[L]=null,!0):o()==="quarter"?a(a()[L]={shape:o(),color:s(),rotation:b()},!0):o()==="halfCircle"?a(a()[L]={shape:o(),color:s(),rotation:u()},!0):a(a()[L]={shape:o(),color:s(),rotation:0},!0),a([...a()]),n("gridChanged",{grid:a()})}function w(L){const R=a()[L];R&&R.color&&n("colorPicked",{color:R.color})}function B(L,R){R.stopPropagation(),!p()&&(f()?x(L):c()?w(L):i()?m(L):y(L))}function x(L,R){const Y=L%r(),q=Math.floor(L/r());$(v,!0),d({startX:Y,startY:q,endX:Y,endY:q,active:!0}),n("selectionChanged",{selection:d()})}function D(L,R){f()&&x(L)}function F(L,R){if(f()&&h(v)){const Y=L%r(),q=Math.floor(L/r());d({...d(),endX:Y,endY:q}),n("selectionChanged",{selection:d()})}}function g(L,R){f()&&h(v)&&($(v,!1),n("selectionChanged",{selection:d()}))}function M(){h(v)&&$(v,!1)}Ba(()=>{typeof window<"u"&&window.addEventListener("mouseup",M)}),W0(()=>{typeof window<"u"&&window.removeEventListener("mouseup",M)});function z(L){if(!d().active)return!1;const R=L%r(),Y=Math.floor(L/r()),q=Math.min(d().startX,d().endX),ae=Math.max(d().startX,d().endX),de=Math.min(d().startY,d().endY),C=Math.max(d().startY,d().endY);return R>=q&&R<=ae&&Y>=de&&Y<=C}function k(L,R){L.key==="Enter"&&(c()?w(R):i()?m(R):y(R))}De();var S=Wi(),E=U(S);sn(E,1,a,on,(L,R,Y)=>{var q=Zi(),ae=U(q);{var de=C=>{var te=ze(),be=$e(te);{var ue=K=>{Xr(K,{get color(){return h(R),Q(()=>h(R).color)}})},j=K=>{var ge=ze(),Le=$e(ge);{var Ne=Ce=>{Gr(Ce,{get color(){return h(R),Q(()=>h(R).color)}})},rt=Ce=>{var Mt=ze(),It=$e(Mt);{var lt=Ge=>{Hr(Ge,{get color(){return h(R),Q(()=>h(R).color)},get rotation(){return h(R),Q(()=>h(R).rotation)}})},Xe=Ge=>{var Yt=ze(),Bn=$e(Yt);{var Dn=qt=>{jr(qt,{get color(){return h(R),Q(()=>h(R).color)},get rotation(){return h(R),Q(()=>h(R).rotation)}})};ot(Bn,qt=>{h(R),Q(()=>h(R).shape==="halfCircle")&&qt(Dn)},!0)}ee(Ge,Yt)};ot(It,Ge=>{h(R),Q(()=>h(R).shape==="quarter")?Ge(lt):Ge(Xe,!1)},!0)}ee(Ce,Mt)};ot(Le,Ce=>{h(R),Q(()=>h(R).shape==="circle")?Ce(Ne):Ce(rt,!1)},!0)}ee(K,ge)};ot(be,K=>{h(R),Q(()=>h(R).shape==="square")?K(ue):K(j,!1)})}ee(C,te)};ot(ae,C=>{h(R)&&C(de)})}H(q),Ee(C=>Ue(q,1,`cell ${C??""} ${f()?"select-mode":""}`,"svelte-1hhz0mg"),[()=>Q(()=>z(Y)?"selected":"")]),le("click",q,C=>B(Y,C)),le("mousedown",q,C=>D(Y)),le("mouseenter",q,C=>F(Y)),le("mouseup",q,C=>g()),le("keydown",q,C=>k(C,Y)),ee(L,q)});var O=se(E,2);{var J=L=>{const R=Te(()=>(W(d()),Q(()=>Math.min(d().startX,d().endX)))),Y=Te(()=>(W(d()),Q(()=>Math.max(d().startX,d().endX)))),q=Te(()=>(W(d()),Q(()=>Math.min(d().startY,d().endY)))),ae=Te(()=>(W(d()),Q(()=>Math.max(d().startY,d().endY)))),de=Te(()=>h(R)/r()*100),C=Te(()=>h(q)/l()*100),te=Te(()=>(h(Y)-h(R)+1)/r()*100),be=Te(()=>(h(ae)-h(q)+1)/l()*100);var ue=Vi();Ee(()=>ft(ue,`left: ${h(de)??""}%; top: ${h(C)??""}%; width: ${h(te)??""}%; height: ${h(be)??""}%;`)),ee(L,ue)};ot(O,L=>{W(f()),W(d()),h(v),Q(()=>f()&&d().active&&(h(v)||d().startX!==d().endX||d().startY!==d().endY))&&L(J)})}H(S),Ee(()=>ft(S,`--width: ${r()??""}; --height: ${l()??""};`)),ee(e,S),Be()}var Ji=ye('<div class="container svelte-1w4104m"><!></div>');function x0(e,t){Pe(t,!1);const n=Ve();let a=N(t,"grid",8,null),r=N(t,"width",8,32),l=N(t,"height",8,32),o=N(t,"selectedShape",8,"square"),s=N(t,"selectedColor",24,()=>it.length>0?it[0].rgb:"#000000"),i=N(t,"paintMode",8,!1),c=N(t,"colorPickerMode",8,!1),f=N(t,"selectMode",8,!1),b=N(t,"quarterRotation",8,0),u=N(t,"halfCircleRotation",8,0),d=N(t,"zoom",12,1),p=N(t,"selection",28,()=>({startX:0,startY:0,endX:0,endY:0,active:!1})),v=re(),m=re(0),y=re(0);function w(k){d(k.detail.zoom)}function B(k){$(m,k.detail.panX),$(y,k.detail.panY)}function x(k){k.detail.didPan}function D(k){$(v,k.detail.grid),n("gridChanged",k.detail)}function F(k){n("colorPicked",k.detail)}function g(k){p(k.detail.selection),n("selectionChanged",k.detail)}ka(()=>(W(a()),W(r()),W(l())),()=>{$(v,a()||Array(r()*l()).fill(null))}),lr(),De();var M=Ji(),z=U(M);Xi(z,{get zoom(){return d()},get panX(){return h(m)},get panY(){return h(y)},get selectMode(){return f()},$$events:{zoomChanged:w,panChanged:B,panEnd:x},children:io,$$slots:{default:(k,S)=>{const E=Te(()=>S.didPan);Ki(k,{get grid(){return h(v)},get width(){return r()},get height(){return l()},get selectedShape(){return o()},get selectedColor(){return s()},get paintMode(){return i()},get colorPickerMode(){return c()},get selectMode(){return f()},get quarterRotation(){return b()},get halfCircleRotation(){return u()},get selection(){return p()},get didPan(){return h(E)},$$events:{gridChanged:D,colorPicked:F,selectionChanged:g}})}}}),H(M),ee(e,M),Be()}var Qi=ye('<button type="button"></button>'),e1=ye('<div class="palette-row"></div>'),t1=ye('<div class="color-picker"><!> <div class="colors"><div class="palette2d"></div></div></div>');function n1(e,t){Pe(t,!1);let n=N(t,"selectedColor",12,null);const a=Ve();let r=re(""),l=it,o=re(!1),s=re(null),i=re(l);function c(p){n(p),a("colorSelected",{color:p})}ka(()=>(h(o),h(s)),()=>{h(o)&&rr().then(()=>{h(s)?.focus()})}),ka(()=>h(r),()=>{$(i,h(r).trim()?l.filter(p=>p.name.toLowerCase().includes(h(r).toLowerCase())||p.rgb.replace("#","").includes(h(r).replace("#",""))):l)}),lr(),De();var f=t1(),b=U(f);ot(b,p=>{});var u=se(b,2),d=U(u);sn(d,5,()=>xe,on,(p,v)=>{var m=e1();sn(m,5,()=>h(v),on,(y,w)=>{var B=Qi();Ee(()=>{ft(B,`width: 1.5rem; height: 1.5rem; background: ${h(w),Q(()=>h(w).rgb)??""}; border: 2px solid ${W(n()),h(w),Q(()=>n()===h(w).rgb?"#333":"#ccc")??""}; border-radius: 0.25rem; cursor: pointer; margin: 0 0.1rem 0.1rem 0;`),Fe(B,"aria-label",(h(w),Q(()=>h(w).name))),Fe(B,"title",(h(w),Q(()=>h(w).name)))}),le("click",B,()=>c(h(w).rgb)),ee(y,B)}),H(m),ee(p,m)}),H(d),H(u),H(f),ee(e,f),Be()}const fe={select:{key:"v",action:"select"},square:{key:"s",action:"square"},circle:{key:"c",action:"circle"},quarter:{key:"q",action:"quarter"},halfCircle:{key:"h",action:"halfCircle"},fill:{key:"f",action:"fill"},colorPicker:{key:"i",action:"colorPicker"},zoomIn:{key:"+",action:"zoomIn"},zoomInAlt:{key:"=",action:"zoomIn"},zoomOut:{key:"-",action:"zoomOut"},undo:{key:"z",ctrl:!0,action:"undo"},redo:{key:"z",ctrl:!0,shift:!0,action:"redo"},cut:{key:"x",ctrl:!0,action:"cut"},copy:{key:"c",ctrl:!0,action:"copy"},paste:{key:"v",ctrl:!0,action:"paste"},selectAll:{key:"a",ctrl:!0,action:"selectAll"},deselect:{key:"d",ctrl:!0,action:"deselect"},rotateLeft:{key:"r",action:"rotateLeft"},rotateRight:{key:"r",shift:!0,action:"rotateRight"},moveUp:{key:"ArrowUp",action:"moveUp"},moveDown:{key:"ArrowDown",action:"moveDown"},moveLeft:{key:"ArrowLeft",action:"moveLeft"},moveRight:{key:"ArrowRight",action:"moveRight"},delete:{key:"Delete",action:"delete"},backspace:{key:"Backspace",action:"delete"},colorLeft:{key:"a",shift:!0,action:"colorLeft"},colorRight:{key:"d",shift:!0,action:"colorRight"},colorUp:{key:"w",shift:!0,action:"colorUp"},colorDown:{key:"s",shift:!0,action:"colorDown"}};function a1(e,t){const a=(e.key===" "?"Space":e.key).toLowerCase(),r=t.key.toLowerCase();return a!==r||!!e.ctrlKey!=!!t.ctrl||!!e.altKey!=!!t.alt?!1:t.key==="+"||t.key==="-"||t.key==="="?!0:!!e.shiftKey==!!t.shift}function he(e){const t=[];e.ctrl&&t.push("Ctrl"),e.shift&&t.push("Shift"),e.alt&&t.push("Alt");let n=e.key;return n===" "&&(n="Space"),n==="="&&(n="+"),t.push(n.toUpperCase()),t.join("+")}var r1=ye('<div class="shape-group"><div class="group-label">Shapes</div> <div class="shape-grid"><button aria-label="Square"><div class="shape-icon"><!></div></button> <button aria-label="Circle"><div class="shape-icon"><!></div></button> <button aria-label="Quarter"><div class="shape-icon"><!></div></button> <button aria-label="Half Circle"><div class="shape-icon"><!></div></button></div></div>');function l1(e,t){Pe(t,!1);const n=Ve();let a=N(t,"selectedShape",12,"square"),r=N(t,"selectedColor",8,"#000000"),l=N(t,"quarterRotation",12,0),o=N(t,"halfCircleRotation",12,0);function s(k){if(k==="quarter")if(a()==="quarter"){l((l()+1)%4),n("quarterRotationChanged",{rotation:l()});return}else l(0);if(k==="halfCircle")if(a()==="halfCircle"){o((o()+1)%4),n("halfCircleRotationChanged",{rotation:o()});return}else o(0);a(k),n("shapeSelected",{shape:k}),k==="quarter"&&n("quarterRotationChanged",{rotation:l()}),k==="halfCircle"&&n("halfCircleRotationChanged",{rotation:o()})}De();var i=r1(),c=se(U(i),2),f=U(c);let b;var u=U(f),d=U(u);Xr(d,{get color(){return r()}}),H(u),H(f);var p=se(f,2);let v;var m=U(p),y=U(m);Gr(y,{get color(){return r()}}),H(m),H(p);var w=se(p,2);let B;var x=U(w),D=U(x);Hr(D,{get color(){return r()},get rotation(){return l()}}),H(x),H(w);var F=se(w,2);let g;var M=U(F),z=U(M);jr(z,{get color(){return r()},get rotation(){return o()}}),H(M),H(F),H(c),H(i),Ee((k,S,E,O,J,L,R,Y)=>{b=Ue(f,1,"shape-button",null,b,k),Fe(f,"title",`Square (${S??""})`),v=Ue(p,1,"shape-button",null,v,E),Fe(p,"title",`Circle (${O??""})`),B=Ue(w,1,"shape-button",null,B,J),Fe(w,"title",`Quarter (${L??""})`),g=Ue(F,1,"shape-button",null,g,R),Fe(F,"title",`Half Circle (${Y??""})`)},[()=>({selected:a()==="square"}),()=>(W(he),W(fe),Q(()=>he(fe.square))),()=>({selected:a()==="circle"}),()=>(W(he),W(fe),Q(()=>he(fe.circle))),()=>({selected:a()==="quarter"}),()=>(W(he),W(fe),Q(()=>he(fe.quarter))),()=>({selected:a()==="halfCircle"}),()=>(W(he),W(fe),Q(()=>he(fe.halfCircle)))]),le("click",f,()=>s("square")),le("click",p,()=>s("circle")),le("click",w,()=>s("quarter")),le("click",F,()=>s("halfCircle")),ee(e,i),Be()}/**
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
 */const o1={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};var s1=co("<svg><!><!></svg>");function tt(e,t){const n=Ie(t,["children","$$slots","$$events","$$legacy"]),a=Ie(n,["name","color","size","strokeWidth","absoluteStrokeWidth","iconNode"]);Pe(t,!1);let r=N(t,"name",8,void 0),l=N(t,"color",8,"currentColor"),o=N(t,"size",8,24),s=N(t,"strokeWidth",8,2),i=N(t,"absoluteStrokeWidth",8,!1),c=N(t,"iconNode",24,()=>[]);const f=(...p)=>p.filter((v,m,y)=>!!v&&y.indexOf(v)===m).join(" ");De();var b=s1();i0(b,(p,v)=>({...o1,...a,width:o(),height:o(),stroke:l(),"stroke-width":p,class:v}),[()=>(W(i()),W(s()),W(o()),Q(()=>i()?Number(s())*24/Number(o()):s())),()=>(W(r()),W(n),Q(()=>f("lucide-icon","lucide",r()?`lucide-${r()}`:"",n.class)))]);var u=U(b);sn(u,1,c,on,(p,v)=>{var m=fo(()=>uo(h(v),2));let y=()=>h(m)[0],w=()=>h(m)[1];var B=ze(),x=$e(B);po(x,y,!0,(D,F)=>{i0(D,()=>({...w()}))}),ee(p,B)});var d=se(u);qe(d,t,"default",{}),H(b),ee(e,b),Be()}function i1(e,t){const n=Ie(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const a=[["path",{d:"M12 15V3"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}],["path",{d:"m7 10 5 5 5-5"}]];tt(e,et({name:"download"},()=>n,{get iconNode(){return a},children:(r,l)=>{var o=ze(),s=$e(o);qe(s,t,"default",{}),ee(r,o)},$$slots:{default:!0}}))}function c1(e,t){const n=Ie(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const a=[["path",{d:"M14 4.1 12 6"}],["path",{d:"m5.1 8-2.9-.8"}],["path",{d:"m6 12-1.9 2"}],["path",{d:"M7.2 2.2 8 5.1"}],["path",{d:"M9.037 9.69a.498.498 0 0 1 .653-.653l11 4.5a.5.5 0 0 1-.074.949l-4.349 1.041a1 1 0 0 0-.74.739l-1.04 4.35a.5.5 0 0 1-.95.074z"}]];tt(e,et({name:"mouse-pointer-click"},()=>n,{get iconNode(){return a},children:(r,l)=>{var o=ze(),s=$e(o);qe(s,t,"default",{}),ee(r,o)},$$slots:{default:!0}}))}function f1(e,t){const n=Ie(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const a=[["path",{d:"m19 11-8-8-8.6 8.6a2 2 0 0 0 0 2.8l5.2 5.2c.8.8 2 .8 2.8 0L19 11Z"}],["path",{d:"m5 2 5 5"}],["path",{d:"M2 13h15"}],["path",{d:"M22 20a2 2 0 1 1-4 0c0-1.6 1.7-2.4 2-4 .3 1.6 2 2.4 2 4Z"}]];tt(e,et({name:"paint-bucket"},()=>n,{get iconNode(){return a},children:(r,l)=>{var o=ze(),s=$e(o);qe(s,t,"default",{}),ee(r,o)},$$slots:{default:!0}}))}function d1(e,t){const n=Ie(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const a=[["path",{d:"m12 9-8.414 8.414A2 2 0 0 0 3 18.828v1.344a2 2 0 0 1-.586 1.414A2 2 0 0 1 3.828 21h1.344a2 2 0 0 0 1.414-.586L15 12"}],["path",{d:"m18 9 .4.4a1 1 0 1 1-3 3l-3.8-3.8a1 1 0 1 1 3-3l.4.4 3.4-3.4a1 1 0 1 1 3 3z"}],["path",{d:"m2 22 .414-.414"}]];tt(e,et({name:"pipette"},()=>n,{get iconNode(){return a},children:(r,l)=>{var o=ze(),s=$e(o);qe(s,t,"default",{}),ee(r,o)},$$slots:{default:!0}}))}function u1(e,t){const n=Ie(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const a=[["path",{d:"M21 7v6h-6"}],["path",{d:"M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7"}]];tt(e,et({name:"redo"},()=>n,{get iconNode(){return a},children:(r,l)=>{var o=ze(),s=$e(o);qe(s,t,"default",{}),ee(r,o)},$$slots:{default:!0}}))}function h1(e,t){const n=Ie(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const a=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7"}]];tt(e,et({name:"save"},()=>n,{get iconNode(){return a},children:(r,l)=>{var o=ze(),s=$e(o);qe(s,t,"default",{}),ee(r,o)},$$slots:{default:!0}}))}function b1(e,t){const n=Ie(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const a=[["path",{d:"M3 7v6h6"}],["path",{d:"M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13"}]];tt(e,et({name:"undo"},()=>n,{get iconNode(){return a},children:(r,l)=>{var o=ze(),s=$e(o);qe(s,t,"default",{}),ee(r,o)},$$slots:{default:!0}}))}function g1(e,t){const n=Ie(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const a=[["circle",{cx:"11",cy:"11",r:"8"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65"}],["line",{x1:"11",x2:"11",y1:"8",y2:"14"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11"}]];tt(e,et({name:"zoom-in"},()=>n,{get iconNode(){return a},children:(r,l)=>{var o=ze(),s=$e(o);qe(s,t,"default",{}),ee(r,o)},$$slots:{default:!0}}))}function p1(e,t){const n=Ie(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const a=[["circle",{cx:"11",cy:"11",r:"8"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11"}]];tt(e,et({name:"zoom-out"},()=>n,{get iconNode(){return a},children:(r,l)=>{var o=ze(),s=$e(o);qe(s,t,"default",{}),ee(r,o)},$$slots:{default:!0}}))}var m1=ye('<div class="tool-group"><div class="group-label">Tools</div> <div class="tool-grid"><button type="button" aria-label="Selection tool"><!></button> <button type="button" aria-label="Zoom in" class="tool-button"><!></button> <button type="button" aria-label="Zoom out" class="tool-button"><!></button> <button type="button" aria-label="Paint bucket tool"><!></button> <button type="button" aria-label="Color picker tool"><!></button> <button type="button" aria-label="Undo" class="tool-button"><!></button> <button type="button" aria-label="Redo" class="tool-button"><!></button> <button type="button" aria-label="Save" class="tool-button" title="Save Project"><!></button> <button type="button" aria-label="Load" class="tool-button" title="Load Project"><!></button></div></div>');function v1(e,t){Pe(t,!1);const n=Ve();let a=N(t,"paintMode",12,!1),r=N(t,"colorPickerMode",12,!1),l=N(t,"selectMode",12,!1),o=N(t,"canUndo",8,!1),s=N(t,"canRedo",8,!1);function i(){a(!a()),a()&&(r(!1),l(!1)),n("paintModeToggled",{paintMode:a()})}function c(){r(!r()),r()&&(a(!1),l(!1)),n("colorPickerModeToggled",{colorPickerMode:r()})}function f(){l(!l()),l()&&(a(!1),r(!1)),n("selectModeToggled",{selectMode:l()})}function b(){n("undo")}function u(){n("redo")}function d(){n("save")}function p(){n("load")}De();var v=m1(),m=se(U(v),2),y=U(m);let w;var B=U(y);{let te=Te(()=>l()?"#333":"#555");c1(B,{size:24,get color(){return h(te)}})}H(y);var x=se(y,2),D=U(x);g1(D,{size:24,color:"#555"}),H(x);var F=se(x,2),g=U(F);p1(g,{size:24,color:"#555"}),H(F);var M=se(F,2);let z;var k=U(M);{let te=Te(()=>a()?"#333":"#555");f1(k,{size:24,get color(){return h(te)}})}H(M);var S=se(M,2);let E;var O=U(S);{let te=Te(()=>r()?"#333":"#555");d1(O,{size:24,get color(){return h(te)}})}H(S);var J=se(S,2),L=U(J);{let te=Te(()=>o()?"#555":"#ccc");b1(L,{size:24,get color(){return h(te)}})}H(J);var R=se(J,2),Y=U(R);{let te=Te(()=>s()?"#555":"#ccc");u1(Y,{size:24,get color(){return h(te)}})}H(R);var q=se(R,2),ae=U(q);h1(ae,{size:24,color:"#555"}),H(q);var de=se(q,2),C=U(de);i1(C,{size:24,color:"#555"}),H(de),H(m),H(v),Ee((te,be,ue,j,K,ge,Le,Ne,rt,Ce)=>{w=Ue(y,1,"tool-button",null,w,te),Fe(y,"title",`Selection Tool (${be??""})`),Fe(x,"title",`Zoom In (${ue??""})`),Fe(F,"title",`Zoom Out (${j??""})`),z=Ue(M,1,"tool-button",null,z,K),Fe(M,"title",`Fill Tool (${ge??""})`),E=Ue(S,1,"tool-button",null,E,Le),Fe(S,"title",`Color Picker (${Ne??""})`),Fe(J,"title",`Undo (${rt??""})`),J.disabled=!o(),Fe(R,"title",`Redo (${Ce??""})`),R.disabled=!s()},[()=>({active:l()}),()=>(W(he),W(fe),Q(()=>he(fe.select))),()=>(W(he),W(fe),Q(()=>he(fe.zoomIn))),()=>(W(he),W(fe),Q(()=>he(fe.zoomOut))),()=>({active:a()}),()=>(W(he),W(fe),Q(()=>he(fe.fill))),()=>({active:r()}),()=>(W(he),W(fe),Q(()=>he(fe.colorPicker))),()=>(W(he),W(fe),Q(()=>he(fe.undo))),()=>(W(he),W(fe),Q(()=>he(fe.redo)))]),le("click",y,f),le("click",x,()=>n("zoomIn")),le("click",F,()=>n("zoomOut")),le("click",M,i),le("click",S,c),le("click",J,b),le("click",R,u),le("click",q,d),le("click",de,p),ee(e,v),Be()}var F1=ye('<div class="canvas-size-group" style="display:flex; justify-content:center; flex-direction: column; align-items:center; width:100%;"><div class="group-label">Size</div> <div class="tool-grid" style="display:flex; justify-content: center"><label style="display:flex; flex-direction:column; align-items:center;"><input type="number" min="1" max="256"/></label></div></div>');function y1(e,t){Pe(t,!1);const n=Ve();let a=N(t,"size",12,32);function r(c){const f=c.target;a(Math.max(1,Math.min(128,parseInt(f.value)||1))),n("sizeChanged",{size:a()})}De();var l=F1(),o=se(U(l),2),s=U(o),i=U(s);fr(i),H(s),H(o),H(l),wo(i,a),le("input",i,r),ee(e,l),Be()}var M1=ye('<div class="image-upload"><label class="upload-label"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#555" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align: middle;"><path d="M12 16V4"></path><polyline points="8 8 12 4 16 8"></polyline><rect x="4" y="16" width="16" height="4" rx="2"></rect></svg> <span>Upload image</span> <input type="file" accept="image/png, image/jpeg"/></label></div>');function k1(e,t){Pe(t,!1);const n=Ve();function a(s){const i=s.target,c=i.files&&i.files[0];if(c){const f=new FileReader;f.onload=()=>{n("imageUploaded",{src:f.result,fileName:c.name})},f.readAsDataURL(c)}}De();var r=M1(),l=U(r),o=se(U(l),4);H(l),H(r),le("change",o,a),ee(e,r),Be()}var _1=ye('<button class="toolbar-toggle" aria-label="Show/hide toolbar"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#555" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align: middle;"><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg></button>');function x1(e,t){Pe(t,!1);const n=Ve();function a(){n("toggle")}De();var r=_1();le("click",r,a),ee(e,r),Be()}var w1=ye("<!> <div><!> <!> <!> <!> <!></div>",1);function C1(e,t){Pe(t,!1);const n=Ve();let a=N(t,"selectedShape",12,"square"),r=N(t,"selectedColor",12,"#000000"),l=N(t,"paintMode",12,!1),o=N(t,"colorPickerMode",12,!1),s=N(t,"selectMode",12,!1),i=N(t,"size",12,32),c=re(!0),f=N(t,"quarterRotation",12,0),b=N(t,"halfCircleRotation",12,0),u=N(t,"canUndo",12,!1),d=N(t,"canRedo",12,!1);function p(C){a(C.detail.shape),n("shapeSelected",C.detail)}function v(C){f(C.detail.rotation),n("quarterRotationChanged",C.detail)}function m(C){b(C.detail.rotation),n("halfCircleRotationChanged",C.detail)}function y(C){r(C.detail.color),n("colorSelected",C.detail)}function w(C){l(C.detail.paintMode),n("paintModeToggled",C.detail)}function B(C){o(C.detail.colorPickerMode),n("colorPickerModeToggled",C.detail)}function x(C){s(C.detail.selectMode),n("selectModeToggled",C.detail)}function D(){n("undo")}function F(){n("redo")}function g(C){i(C.detail.size),n("sizeChanged",C.detail)}function M(C){n("imageUploaded",C.detail)}function z(){n("save")}function k(){n("load")}function S(){$(c,!h(c))}De();var E=w1(),O=$e(E);x1(O,{$$events:{toggle:S}});var J=se(O,2);let L;var R=U(J);l1(R,{get selectedColor(){return r()},get selectedShape(){return a()},set selectedShape(C){a(C)},get quarterRotation(){return f()},set quarterRotation(C){f(C)},get halfCircleRotation(){return b()},set halfCircleRotation(C){b(C)},$$events:{shapeSelected:p,quarterRotationChanged:v,halfCircleRotationChanged:m},$$legacy:!0});var Y=se(R,2);v1(Y,{get paintMode(){return l()},set paintMode(C){l(C)},get colorPickerMode(){return o()},set colorPickerMode(C){o(C)},get selectMode(){return s()},set selectMode(C){s(C)},get canUndo(){return u()},set canUndo(C){u(C)},get canRedo(){return d()},set canRedo(C){d(C)},$$events:{paintModeToggled:w,colorPickerModeToggled:B,selectModeToggled:x,undo:D,redo:F,zoomIn:()=>n("zoomIn"),zoomOut:()=>n("zoomOut"),save:z,load:k},$$legacy:!0});var q=se(Y,2);n1(q,{get selectedColor(){return r()},set selectedColor(C){r(C)},$$events:{colorSelected:y},$$legacy:!0});var ae=se(q,2);y1(ae,{get size(){return i()},set size(C){i(C)},$$events:{sizeChanged:g},$$legacy:!0});var de=se(ae,2);k1(de,{$$events:{imageUploaded:M}}),H(J),Ee(C=>L=Ue(J,1,"toolbar left",null,L,C),[()=>({visible:h(c)})]),ee(e,E),Be()}const Ur=(e,t)=>{if(typeof e=="number"){if(t===3)return{mode:"rgb",r:(e>>8&15|e>>4&240)/255,g:(e>>4&15|e&240)/255,b:(e&15|e<<4&240)/255};if(t===4)return{mode:"rgb",r:(e>>12&15|e>>8&240)/255,g:(e>>8&15|e>>4&240)/255,b:(e>>4&15|e&240)/255,alpha:(e&15|e<<4&240)/255};if(t===6)return{mode:"rgb",r:(e>>16&255)/255,g:(e>>8&255)/255,b:(e&255)/255};if(t===8)return{mode:"rgb",r:(e>>24&255)/255,g:(e>>16&255)/255,b:(e>>8&255)/255,alpha:(e&255)/255}}},A1={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},T1=e=>Ur(A1[e.toLowerCase()],6),$1=/^#?([0-9a-f]{8}|[0-9a-f]{6}|[0-9a-f]{4}|[0-9a-f]{3})$/i,z1=e=>{let t;return(t=e.match($1))?Ur(parseInt(t[1],16),t[1].length):void 0},ct="([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)",Zt=`${ct}%`,Ua=`(?:${ct}%|${ct})`,E1=`(?:${ct}(deg|grad|rad|turn)|${ct})`,Rt="\\s*,\\s*",R1=new RegExp(`^rgba?\\(\\s*${ct}${Rt}${ct}${Rt}${ct}\\s*(?:,\\s*${Ua}\\s*)?\\)$`),S1=new RegExp(`^rgba?\\(\\s*${Zt}${Rt}${Zt}${Rt}${Zt}\\s*(?:,\\s*${Ua}\\s*)?\\)$`),P1=e=>{let t={mode:"rgb"},n;if(n=e.match(R1))n[1]!==void 0&&(t.r=n[1]/255),n[2]!==void 0&&(t.g=n[2]/255),n[3]!==void 0&&(t.b=n[3]/255);else if(n=e.match(S1))n[1]!==void 0&&(t.r=n[1]/100),n[2]!==void 0&&(t.g=n[2]/100),n[3]!==void 0&&(t.b=n[3]/100);else return;return n[4]!==void 0?t.alpha=Math.max(0,Math.min(1,n[4]/100)):n[5]!==void 0&&(t.alpha=Math.max(0,Math.min(1,+n[5]))),t},B1=(e,t)=>e===void 0?void 0:typeof e!="object"?G1(e):e.mode!==void 0?e:t?{...e,mode:t}:void 0,_n=(e="rgb")=>t=>(t=B1(t,e))!==void 0?t.mode===e?t:je[t.mode][e]?je[t.mode][e](t):e==="rgb"?je[t.mode].rgb(t):je.rgb[e](je[t.mode].rgb(t)):void 0,je={},Zr={},un=[],Vr={},D1=e=>e,ne=e=>(je[e.mode]={...je[e.mode],...e.toMode},Object.keys(e.fromMode||{}).forEach(t=>{je[t]||(je[t]={}),je[t][e.mode]=e.fromMode[t]}),e.ranges||(e.ranges={}),e.difference||(e.difference={}),e.channels.forEach(t=>{if(e.ranges[t]===void 0&&(e.ranges[t]=[0,1]),!e.interpolate[t])throw new Error(`Missing interpolator for: ${t}`);typeof e.interpolate[t]=="function"&&(e.interpolate[t]={use:e.interpolate[t]}),e.interpolate[t].fixup||(e.interpolate[t].fixup=D1)}),Zr[e.mode]=e,(e.parse||[]).forEach(t=>{L1(t,e.mode)}),_n(e.mode)),Wr=e=>Zr[e],L1=(e,t)=>{if(typeof e=="string"){if(!t)throw new Error("'mode' required when 'parser' is a string");Vr[e]=t}else typeof e=="function"&&un.indexOf(e)<0&&un.push(e)},Ta=/[^\x00-\x7F]|[a-zA-Z_]/,N1=/[^\x00-\x7F]|[-\w]/,T={Function:"function",Ident:"ident",Number:"number",Percentage:"percentage",ParenClose:")",None:"none",Hue:"hue",Alpha:"alpha"};let I=0;function rn(e){let t=e[I],n=e[I+1];return t==="-"||t==="+"?/\d/.test(n)||n==="."&&/\d/.test(e[I+2]):t==="."?/\d/.test(n):/\d/.test(t)}function $a(e){if(I>=e.length)return!1;let t=e[I];if(Ta.test(t))return!0;if(t==="-"){if(e.length-I<2)return!1;let n=e[I+1];return!!(n==="-"||Ta.test(n))}return!1}const O1={deg:1,rad:180/Math.PI,grad:9/10,turn:360};function jt(e){let t="";if((e[I]==="-"||e[I]==="+")&&(t+=e[I++]),t+=ln(e),e[I]==="."&&/\d/.test(e[I+1])&&(t+=e[I++]+ln(e)),(e[I]==="e"||e[I]==="E")&&((e[I+1]==="-"||e[I+1]==="+")&&/\d/.test(e[I+2])?t+=e[I++]+e[I++]+ln(e):/\d/.test(e[I+1])&&(t+=e[I++]+ln(e))),$a(e)){let n=hn(e);return n==="deg"||n==="rad"||n==="turn"||n==="grad"?{type:T.Hue,value:t*O1[n]}:void 0}return e[I]==="%"?(I++,{type:T.Percentage,value:+t}):{type:T.Number,value:+t}}function ln(e){let t="";for(;/\d/.test(e[I]);)t+=e[I++];return t}function hn(e){let t="";for(;I<e.length&&N1.test(e[I]);)t+=e[I++];return t}function I1(e){let t=hn(e);return e[I]==="("?(I++,{type:T.Function,value:t}):t==="none"?{type:T.None,value:void 0}:{type:T.Ident,value:t}}function Y1(e=""){let t=e.trim(),n=[],a;for(I=0;I<t.length;){if(a=t[I++],a===`
`||a==="	"||a===" "){for(;I<t.length&&(t[I]===`
`||t[I]==="	"||t[I]===" ");)I++;continue}if(a===",")return;if(a===")"){n.push({type:T.ParenClose});continue}if(a==="+"){if(I--,rn(t)){n.push(jt(t));continue}return}if(a==="-"){if(I--,rn(t)){n.push(jt(t));continue}if($a(t)){n.push({type:T.Ident,value:hn(t)});continue}return}if(a==="."){if(I--,rn(t)){n.push(jt(t));continue}return}if(a==="/"){for(;I<t.length&&(t[I]===`
`||t[I]==="	"||t[I]===" ");)I++;let r;if(rn(t)&&(r=jt(t),r.type!==T.Hue)){n.push({type:T.Alpha,value:r});continue}if($a(t)&&hn(t)==="none"){n.push({type:T.Alpha,value:{type:T.None,value:void 0}});continue}return}if(/\d/.test(a)){I--,n.push(jt(t));continue}if(Ta.test(a)){I--,n.push(I1(t));continue}return}return n}function q1(e){e._i=0;let t=e[e._i++];if(!t||t.type!==T.Function||t.value!=="color"||(t=e[e._i++],t.type!==T.Ident))return;const n=Vr[t.value];if(!n)return;const a={mode:n},r=Kr(e,!1);if(!r)return;const l=Wr(n).channels;for(let o=0,s,i;o<l.length;o++)s=r[o],i=l[o],s.type!==T.None&&(a[i]=s.type===T.Number?s.value:s.value/100,i==="alpha"&&(a[i]=Math.max(0,Math.min(1,a[i]))));return a}function Kr(e,t){const n=[];let a;for(;e._i<e.length;){if(a=e[e._i++],a.type===T.None||a.type===T.Number||a.type===T.Alpha||a.type===T.Percentage||t&&a.type===T.Hue){n.push(a);continue}if(a.type===T.ParenClose){if(e._i<e.length)return;continue}return}if(!(n.length<3||n.length>4)){if(n.length===4){if(n[3].type!==T.Alpha)return;n[3]=n[3].value}return n.length===3&&n.push({type:T.None,value:void 0}),n.every(r=>r.type!==T.Alpha)?n:void 0}}function X1(e,t){e._i=0;let n=e[e._i++];if(!n||n.type!==T.Function)return;let a=Kr(e,t);if(a)return a.unshift(n.value),a}const G1=e=>{if(typeof e!="string")return;const t=Y1(e),n=t?X1(t,!0):void 0;let a,r=0,l=un.length;for(;r<l;)if((a=un[r++](e,n))!==void 0)return a;return t?q1(t):void 0};function H1(e,t){if(!t||t[0]!=="rgb"&&t[0]!=="rgba")return;const n={mode:"rgb"},[,a,r,l,o]=t;if(!(a.type===T.Hue||r.type===T.Hue||l.type===T.Hue))return a.type!==T.None&&(n.r=a.type===T.Number?a.value/255:a.value/100),r.type!==T.None&&(n.g=r.type===T.Number?r.value/255:r.value/100),l.type!==T.None&&(n.b=l.type===T.Number?l.value/255:l.value/100),o.type!==T.None&&(n.alpha=Math.min(1,Math.max(0,o.type===T.Number?o.value:o.value/100))),n}const j1=e=>e==="transparent"?{mode:"rgb",r:0,g:0,b:0,alpha:0}:void 0,U1=(e,t,n)=>e+n*(t-e),Z1=e=>{let t=[];for(let n=0;n<e.length-1;n++){let a=e[n],r=e[n+1];a===void 0&&r===void 0?t.push(void 0):a!==void 0&&r!==void 0?t.push([a,r]):t.push(a!==void 0?[a,a]:[r,r])}return t},V1=e=>t=>{let n=Z1(t);return a=>{let r=a*n.length,l=a>=1?n.length-1:Math.max(Math.floor(r),0),o=n[l];return o===void 0?void 0:e(o[0],o[1],r-l)}},P=V1(U1),Me=e=>{let t=!1,n=e.map(a=>a!==void 0?(t=!0,a):1);return t?n:e},Lt={mode:"rgb",channels:["r","g","b","alpha"],parse:[H1,z1,P1,T1,j1,"srgb"],serialize:"srgb",interpolate:{r:P,g:P,b:P,alpha:{use:P,fixup:Me}},gamut:!0,white:{r:1,g:1,b:1},black:{r:0,g:0,b:0}},Qn=(e=0)=>Math.pow(Math.abs(e),563/256)*Math.sign(e),w0=e=>{let t=Qn(e.r),n=Qn(e.g),a=Qn(e.b),r={mode:"xyz65",x:.5766690429101305*t+.1855582379065463*n+.1882286462349947*a,y:.297344975250536*t+.6273635662554661*n+.0752914584939979*a,z:.0270313613864123*t+.0706888525358272*n+.9913375368376386*a};return e.alpha!==void 0&&(r.alpha=e.alpha),r},ea=e=>Math.pow(Math.abs(e),256/563)*Math.sign(e),C0=({x:e,y:t,z:n,alpha:a})=>{e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0);let r={mode:"a98",r:ea(e*2.0415879038107465-t*.5650069742788597-.3447313507783297*n),g:ea(e*-.9692436362808798+t*1.8759675015077206+.0415550574071756*n),b:ea(e*.0134442806320312-t*.1183623922310184+1.0151749943912058*n)};return a!==void 0&&(r.alpha=a),r},ta=(e=0)=>{const t=Math.abs(e);return t<=.04045?e/12.92:(Math.sign(e)||1)*Math.pow((t+.055)/1.055,2.4)},Nt=({r:e,g:t,b:n,alpha:a})=>{let r={mode:"lrgb",r:ta(e),g:ta(t),b:ta(n)};return a!==void 0&&(r.alpha=a),r},Ft=e=>{let{r:t,g:n,b:a,alpha:r}=Nt(e),l={mode:"xyz65",x:.4123907992659593*t+.357584339383878*n+.1804807884018343*a,y:.2126390058715102*t+.715168678767756*n+.0721923153607337*a,z:.0193308187155918*t+.119194779794626*n+.9505321522496607*a};return r!==void 0&&(l.alpha=r),l},na=(e=0)=>{const t=Math.abs(e);return t>.0031308?(Math.sign(e)||1)*(1.055*Math.pow(t,1/2.4)-.055):e*12.92},Ot=({r:e,g:t,b:n,alpha:a},r="rgb")=>{let l={mode:r,r:na(e),g:na(t),b:na(n)};return a!==void 0&&(l.alpha=a),l},yt=({x:e,y:t,z:n,alpha:a})=>{e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0);let r=Ot({r:e*3.2409699419045226-t*1.537383177570094-.4986107602930034*n,g:e*-.9692436362808796+t*1.8759675015077204+.0415550574071756*n,b:e*.0556300796969936-t*.2039769588889765+1.0569715142428784*n});return a!==void 0&&(r.alpha=a),r},W1={...Lt,mode:"a98",parse:["a98-rgb"],serialize:"a98-rgb",fromMode:{rgb:e=>C0(Ft(e)),xyz65:C0},toMode:{rgb:e=>yt(w0(e)),xyz65:w0}},_e=e=>(e=e%360)<0?e+360:e,K1=(e,t)=>e.map((n,a,r)=>{if(n===void 0)return n;let l=_e(n);return a===0||e[a-1]===void 0?l:t(l-_e(r[a-1]))}).reduce((n,a)=>!n.length||a===void 0||n[n.length-1]===void 0?(n.push(a),n):(n.push(a+n[n.length-1]),n),[]),nt=e=>K1(e,t=>Math.abs(t)<=180?t:t-360*Math.sign(t)),ke=[-.14861,1.78277,-.29227,-.90649,1.97294,0],J1=Math.PI/180,Q1=180/Math.PI;let A0=ke[3]*ke[4],T0=ke[1]*ke[4],$0=ke[1]*ke[2]-ke[0]*ke[3];const ec=({r:e,g:t,b:n,alpha:a})=>{e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0);let r=($0*n+e*A0-t*T0)/($0+A0-T0),l=n-r,o=(ke[4]*(t-r)-ke[2]*l)/ke[3],s={mode:"cubehelix",l:r,s:r===0||r===1?void 0:Math.sqrt(l*l+o*o)/(ke[4]*r*(1-r))};return s.s&&(s.h=Math.atan2(o,l)*Q1-120),a!==void 0&&(s.alpha=a),s},tc=({h:e,s:t,l:n,alpha:a})=>{let r={mode:"rgb"};e=(e===void 0?0:e+120)*J1,n===void 0&&(n=0);let l=t===void 0?0:t*n*(1-n),o=Math.cos(e),s=Math.sin(e);return r.r=n+l*(ke[0]*o+ke[1]*s),r.g=n+l*(ke[2]*o+ke[3]*s),r.b=n+l*(ke[4]*o+ke[5]*s),a!==void 0&&(r.alpha=a),r},xn=(e,t)=>{if(e.h===void 0||t.h===void 0||!e.s||!t.s)return 0;let n=_e(e.h),a=_e(t.h),r=Math.sin((a-n+360)/2*Math.PI/180);return 2*Math.sqrt(e.s*t.s)*r},nc=(e,t)=>{if(e.h===void 0||t.h===void 0)return 0;let n=_e(e.h),a=_e(t.h);return Math.abs(a-n)>180?n-(a-360*Math.sign(a-n)):a-n},wn=(e,t)=>{if(e.h===void 0||t.h===void 0||!e.c||!t.c)return 0;let n=_e(e.h),a=_e(t.h),r=Math.sin((a-n+360)/2*Math.PI/180);return 2*Math.sqrt(e.c*t.c)*r},ac=(e="rgb",t=[1,1,1,0])=>{let n=Wr(e),a=n.channels,r=n.difference,l=_n(e);return(o,s)=>{let i=l(o),c=l(s);return Math.sqrt(a.reduce((f,b,u)=>{let d=r[b]?r[b](i,c):i[b]-c[b];return f+(t[u]||0)*Math.pow(isNaN(d)?0:d,2)},0))}},at=e=>{let t=e.reduce((a,r)=>{if(r!==void 0){let l=r*Math.PI/180;a.sin+=Math.sin(l),a.cos+=Math.cos(l)}return a},{sin:0,cos:0}),n=Math.atan2(t.sin,t.cos)*180/Math.PI;return n<0?360+n:n},rc={mode:"cubehelix",channels:["h","s","l","alpha"],parse:["--cubehelix"],serialize:"--cubehelix",ranges:{h:[0,360],s:[0,4.614],l:[0,1]},fromMode:{rgb:ec},toMode:{rgb:tc},interpolate:{h:{use:P,fixup:nt},s:P,l:P,alpha:{use:P,fixup:Me}},difference:{h:xn},average:{h:at}},dt=({l:e,a:t,b:n,alpha:a},r="lch")=>{t===void 0&&(t=0),n===void 0&&(n=0);let l=Math.sqrt(t*t+n*n),o={mode:r,l:e,c:l};return l&&(o.h=_e(Math.atan2(n,t)*180/Math.PI)),a!==void 0&&(o.alpha=a),o},ut=({l:e,c:t,h:n,alpha:a},r="lab")=>{n===void 0&&(n=0);let l={mode:r,l:e,a:t?t*Math.cos(n/180*Math.PI):0,b:t?t*Math.sin(n/180*Math.PI):0};return a!==void 0&&(l.alpha=a),l},Jr=Math.pow(29,3)/Math.pow(3,3),Qr=Math.pow(6,3)/Math.pow(29,3),ve={X:.3457/.3585,Y:1,Z:(1-.3457-.3585)/.3585},At={X:.3127/.329,Y:1,Z:(1-.3127-.329)/.329};let aa=e=>Math.pow(e,3)>Qr?Math.pow(e,3):(116*e-16)/Jr;const el=({l:e,a:t,b:n,alpha:a})=>{e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0);let r=(e+16)/116,l=t/500+r,o=r-n/200,s={mode:"xyz65",x:aa(l)*At.X,y:aa(r)*At.Y,z:aa(o)*At.Z};return a!==void 0&&(s.alpha=a),s},Cn=e=>yt(el(e)),ra=e=>e>Qr?Math.cbrt(e):(Jr*e+16)/116,tl=({x:e,y:t,z:n,alpha:a})=>{e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0);let r=ra(e/At.X),l=ra(t/At.Y),o=ra(n/At.Z),s={mode:"lab65",l:116*l-16,a:500*(r-l),b:200*(l-o)};return a!==void 0&&(s.alpha=a),s},An=e=>{let t=tl(Ft(e));return e.r===e.b&&e.b===e.g&&(t.a=t.b=0),t},bn=1,nl=1,Wt=26/180*Math.PI,gn=Math.cos(Wt),pn=Math.sin(Wt),al=100/Math.log(139/100),za=({l:e,c:t,h:n,alpha:a})=>{e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0);let r={mode:"lab65",l:(Math.exp(e*bn/al)-1)/.0039},l=(Math.exp(.0435*t*nl*bn)-1)/.075,o=l*Math.cos(n/180*Math.PI-Wt),s=l*Math.sin(n/180*Math.PI-Wt);return r.a=o*gn-s/.83*pn,r.b=o*pn+s/.83*gn,a!==void 0&&(r.alpha=a),r},Ea=({l:e,a:t,b:n,alpha:a})=>{e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0);let r=t*gn+n*pn,l=.83*(n*gn-t*pn),o=Math.sqrt(r*r+l*l),s={mode:"dlch",l:al/bn*Math.log(1+.0039*e),c:Math.log(1+.075*o)/(.0435*nl*bn)};return s.c&&(s.h=_e((Math.atan2(l,r)+Wt)/Math.PI*180)),a!==void 0&&(s.alpha=a),s},z0=e=>za(dt(e,"dlch")),E0=e=>ut(Ea(e),"dlab"),lc={mode:"dlab",parse:["--din99o-lab"],serialize:"--din99o-lab",toMode:{lab65:z0,rgb:e=>Cn(z0(e))},fromMode:{lab65:E0,rgb:e=>E0(An(e))},channels:["l","a","b","alpha"],ranges:{l:[0,100],a:[-40.09,45.501],b:[-40.469,44.344]},interpolate:{l:P,a:P,b:P,alpha:{use:P,fixup:Me}}},oc={mode:"dlch",parse:["--din99o-lch"],serialize:"--din99o-lch",toMode:{lab65:za,dlab:e=>ut(e,"dlab"),rgb:e=>Cn(za(e))},fromMode:{lab65:Ea,dlab:e=>dt(e,"dlch"),rgb:e=>Ea(An(e))},channels:["l","c","h","alpha"],ranges:{l:[0,100],c:[0,51.484],h:[0,360]},interpolate:{l:P,c:P,h:{use:P,fixup:nt},alpha:{use:P,fixup:Me}},difference:{h:wn},average:{h:at}};function sc({h:e,s:t,i:n,alpha:a}){e=_e(e!==void 0?e:0),t===void 0&&(t=0),n===void 0&&(n=0);let r=Math.abs(e/60%2-1),l;switch(Math.floor(e/60)){case 0:l={r:n*(1+t*(3/(2-r)-1)),g:n*(1+t*(3*(1-r)/(2-r)-1)),b:n*(1-t)};break;case 1:l={r:n*(1+t*(3*(1-r)/(2-r)-1)),g:n*(1+t*(3/(2-r)-1)),b:n*(1-t)};break;case 2:l={r:n*(1-t),g:n*(1+t*(3/(2-r)-1)),b:n*(1+t*(3*(1-r)/(2-r)-1))};break;case 3:l={r:n*(1-t),g:n*(1+t*(3*(1-r)/(2-r)-1)),b:n*(1+t*(3/(2-r)-1))};break;case 4:l={r:n*(1+t*(3*(1-r)/(2-r)-1)),g:n*(1-t),b:n*(1+t*(3/(2-r)-1))};break;case 5:l={r:n*(1+t*(3/(2-r)-1)),g:n*(1-t),b:n*(1+t*(3*(1-r)/(2-r)-1))};break;default:l={r:n*(1-t),g:n*(1-t),b:n*(1-t)}}return l.mode="rgb",a!==void 0&&(l.alpha=a),l}function ic({r:e,g:t,b:n,alpha:a}){e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0);let r=Math.max(e,t,n),l=Math.min(e,t,n),o={mode:"hsi",s:e+t+n===0?0:1-3*l/(e+t+n),i:(e+t+n)/3};return r-l!==0&&(o.h=(r===e?(t-n)/(r-l)+(t<n)*6:r===t?(n-e)/(r-l)+2:(e-t)/(r-l)+4)*60),a!==void 0&&(o.alpha=a),o}const cc={mode:"hsi",toMode:{rgb:sc},parse:["--hsi"],serialize:"--hsi",fromMode:{rgb:ic},channels:["h","s","i","alpha"],ranges:{h:[0,360]},gamut:"rgb",interpolate:{h:{use:P,fixup:nt},s:P,i:P,alpha:{use:P,fixup:Me}},difference:{h:xn},average:{h:at}};function fc({h:e,s:t,l:n,alpha:a}){e=_e(e!==void 0?e:0),t===void 0&&(t=0),n===void 0&&(n=0);let r=n+t*(n<.5?n:1-n),l=r-(r-n)*2*Math.abs(e/60%2-1),o;switch(Math.floor(e/60)){case 0:o={r,g:l,b:2*n-r};break;case 1:o={r:l,g:r,b:2*n-r};break;case 2:o={r:2*n-r,g:r,b:l};break;case 3:o={r:2*n-r,g:l,b:r};break;case 4:o={r:l,g:2*n-r,b:r};break;case 5:o={r,g:2*n-r,b:l};break;default:o={r:2*n-r,g:2*n-r,b:2*n-r}}return o.mode="rgb",a!==void 0&&(o.alpha=a),o}function dc({r:e,g:t,b:n,alpha:a}){e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0);let r=Math.max(e,t,n),l=Math.min(e,t,n),o={mode:"hsl",s:r===l?0:(r-l)/(1-Math.abs(r+l-1)),l:.5*(r+l)};return r-l!==0&&(o.h=(r===e?(t-n)/(r-l)+(t<n)*6:r===t?(n-e)/(r-l)+2:(e-t)/(r-l)+4)*60),a!==void 0&&(o.alpha=a),o}const uc=(e,t)=>{switch(t){case"deg":return+e;case"rad":return e/Math.PI*180;case"grad":return e/10*9;case"turn":return e*360}},hc=new RegExp(`^hsla?\\(\\s*${E1}${Rt}${Zt}${Rt}${Zt}\\s*(?:,\\s*${Ua}\\s*)?\\)$`),bc=e=>{let t=e.match(hc);if(!t)return;let n={mode:"hsl"};return t[3]!==void 0?n.h=+t[3]:t[1]!==void 0&&t[2]!==void 0&&(n.h=uc(t[1],t[2])),t[4]!==void 0&&(n.s=Math.min(Math.max(0,t[4]/100),1)),t[5]!==void 0&&(n.l=Math.min(Math.max(0,t[5]/100),1)),t[6]!==void 0?n.alpha=Math.max(0,Math.min(1,t[6]/100)):t[7]!==void 0&&(n.alpha=Math.max(0,Math.min(1,+t[7]))),n};function gc(e,t){if(!t||t[0]!=="hsl"&&t[0]!=="hsla")return;const n={mode:"hsl"},[,a,r,l,o]=t;if(a.type!==T.None){if(a.type===T.Percentage)return;n.h=a.value}if(r.type!==T.None){if(r.type===T.Hue)return;n.s=r.value/100}if(l.type!==T.None){if(l.type===T.Hue)return;n.l=l.value/100}return o.type!==T.None&&(n.alpha=Math.min(1,Math.max(0,o.type===T.Number?o.value:o.value/100))),n}const rl={mode:"hsl",toMode:{rgb:fc},fromMode:{rgb:dc},channels:["h","s","l","alpha"],ranges:{h:[0,360]},gamut:"rgb",parse:[gc,bc],serialize:e=>`hsl(${e.h!==void 0?e.h:"none"} ${e.s!==void 0?e.s*100+"%":"none"} ${e.l!==void 0?e.l*100+"%":"none"}${e.alpha<1?` / ${e.alpha}`:""})`,interpolate:{h:{use:P,fixup:nt},s:P,l:P,alpha:{use:P,fixup:Me}},difference:{h:xn},average:{h:at}};function ll({h:e,s:t,v:n,alpha:a}){e=_e(e!==void 0?e:0),t===void 0&&(t=0),n===void 0&&(n=0);let r=Math.abs(e/60%2-1),l;switch(Math.floor(e/60)){case 0:l={r:n,g:n*(1-t*r),b:n*(1-t)};break;case 1:l={r:n*(1-t*r),g:n,b:n*(1-t)};break;case 2:l={r:n*(1-t),g:n,b:n*(1-t*r)};break;case 3:l={r:n*(1-t),g:n*(1-t*r),b:n};break;case 4:l={r:n*(1-t*r),g:n*(1-t),b:n};break;case 5:l={r:n,g:n*(1-t),b:n*(1-t*r)};break;default:l={r:n*(1-t),g:n*(1-t),b:n*(1-t)}}return l.mode="rgb",a!==void 0&&(l.alpha=a),l}function ol({r:e,g:t,b:n,alpha:a}){e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0);let r=Math.max(e,t,n),l=Math.min(e,t,n),o={mode:"hsv",s:r===0?0:1-l/r,v:r};return r-l!==0&&(o.h=(r===e?(t-n)/(r-l)+(t<n)*6:r===t?(n-e)/(r-l)+2:(e-t)/(r-l)+4)*60),a!==void 0&&(o.alpha=a),o}const sl={mode:"hsv",toMode:{rgb:ll},parse:["--hsv"],serialize:"--hsv",fromMode:{rgb:ol},channels:["h","s","v","alpha"],ranges:{h:[0,360]},gamut:"rgb",interpolate:{h:{use:P,fixup:nt},s:P,v:P,alpha:{use:P,fixup:Me}},difference:{h:xn},average:{h:at}};function pc({h:e,w:t,b:n,alpha:a}){if(t===void 0&&(t=0),n===void 0&&(n=0),t+n>1){let r=t+n;t/=r,n/=r}return ll({h:e,s:n===1?1:1-t/(1-n),v:1-n,alpha:a})}function mc(e){let t=ol(e);if(t===void 0)return;let n=t.s!==void 0?t.s:0,a=t.v!==void 0?t.v:0,r={mode:"hwb",w:(1-n)*a,b:1-a};return t.h!==void 0&&(r.h=t.h),t.alpha!==void 0&&(r.alpha=t.alpha),r}function vc(e,t){if(!t||t[0]!=="hwb")return;const n={mode:"hwb"},[,a,r,l,o]=t;if(a.type!==T.None){if(a.type===T.Percentage)return;n.h=a.value}if(r.type!==T.None){if(r.type===T.Hue)return;n.w=r.value/100}if(l.type!==T.None){if(l.type===T.Hue)return;n.b=l.value/100}return o.type!==T.None&&(n.alpha=Math.min(1,Math.max(0,o.type===T.Number?o.value:o.value/100))),n}const Fc={mode:"hwb",toMode:{rgb:pc},fromMode:{rgb:mc},channels:["h","w","b","alpha"],ranges:{h:[0,360]},gamut:"rgb",parse:[vc],serialize:e=>`hwb(${e.h!==void 0?e.h:"none"} ${e.w!==void 0?e.w*100+"%":"none"} ${e.b!==void 0?e.b*100+"%":"none"}${e.alpha<1?` / ${e.alpha}`:""})`,interpolate:{h:{use:P,fixup:nt},w:P,b:P,alpha:{use:P,fixup:Me}},difference:{h:nc},average:{h:at}},il=203,Tn=.1593017578125,cl=78.84375,$n=.8359375,zn=18.8515625,En=18.6875;function la(e){if(e<0)return 0;const t=Math.pow(e,1/cl);return 1e4*Math.pow(Math.max(0,t-$n)/(zn-En*t),1/Tn)}function oa(e){if(e<0)return 0;const t=Math.pow(e/1e4,Tn);return Math.pow(($n+zn*t)/(1+En*t),cl)}const sa=e=>Math.max(e/il,0),R0=({i:e,t,p:n,alpha:a})=>{e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0);const r=la(e+.008609037037932761*t+.11102962500302593*n),l=la(e-.00860903703793275*t-.11102962500302599*n),o=la(e+.5600313357106791*t-.32062717498731885*n),s={mode:"xyz65",x:sa(2.070152218389422*r-1.3263473389671556*l+.2066510476294051*o),y:sa(.3647385209748074*r+.680566024947227*l-.0453045459220346*o),z:sa(-.049747207535812*r-.0492609666966138*l+1.1880659249923042*o)};return a!==void 0&&(s.alpha=a),s},ia=(e=0)=>Math.max(e*il,0),S0=({x:e,y:t,z:n,alpha:a})=>{const r=ia(e),l=ia(t),o=ia(n),s=oa(.3592832590121217*r+.6976051147779502*l-.0358915932320289*o),i=oa(-.1920808463704995*r+1.1004767970374323*l+.0753748658519118*o),c=oa(.0070797844607477*r+.0748396662186366*l+.8433265453898765*o),f=.5*s+.5*i,b=1.61376953125*s-3.323486328125*i+1.709716796875*c,u=4.378173828125*s-4.24560546875*i-.132568359375*c,d={mode:"itp",i:f,t:b,p:u};return a!==void 0&&(d.alpha=a),d},yc={mode:"itp",channels:["i","t","p","alpha"],parse:["--ictcp"],serialize:"--ictcp",toMode:{xyz65:R0,rgb:e=>yt(R0(e))},fromMode:{xyz65:S0,rgb:e=>S0(Ft(e))},ranges:{i:[0,.581],t:[-.369,.272],p:[-.164,.331]},interpolate:{i:P,t:P,p:P,alpha:{use:P,fixup:Me}}},Mc=134.03437499999998,kc=16295499532821565e-27,ca=e=>{if(e<0)return 0;let t=Math.pow(e/1e4,Tn);return Math.pow(($n+zn*t)/(1+En*t),Mc)},fa=(e=0)=>Math.max(e*203,0),fl=({x:e,y:t,z:n,alpha:a})=>{e=fa(e),t=fa(t),n=fa(n);let r=1.15*e-.15*n,l=.66*t+.34*e,o=ca(.41478972*r+.579999*l+.014648*n),s=ca(-.20151*r+1.120649*l+.0531008*n),i=ca(-.0166008*r+.2648*l+.6684799*n),c=(o+s)/2,f={mode:"jab",j:.44*c/(1-.56*c)-kc,a:3.524*o-4.066708*s+.542708*i,b:.199076*o+1.096799*s-1.295875*i};return a!==void 0&&(f.alpha=a),f},_c=134.03437499999998,P0=16295499532821565e-27,da=e=>{if(e<0)return 0;let t=Math.pow(e,1/_c);return 1e4*Math.pow(($n-t)/(En*t-zn),1/Tn)},ua=e=>e/203,dl=({j:e,a:t,b:n,alpha:a})=>{e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0);let r=(e+P0)/(.44+.56*(e+P0)),l=da(r+.13860504*t+.058047316*n),o=da(r-.13860504*t-.058047316*n),s=da(r-.096019242*t-.8118919*n),i={mode:"xyz65",x:ua(1.661373024652174*l-.914523081304348*o+.23136208173913045*s),y:ua(-.3250758611844533*l+1.571847026732543*o-.21825383453227928*s),z:ua(-.090982811*l-.31272829*o+1.5227666*s)};return a!==void 0&&(i.alpha=a),i},ul=e=>{let t=fl(Ft(e));return e.r===e.b&&e.b===e.g&&(t.a=t.b=0),t},hl=e=>yt(dl(e)),xc={mode:"jab",channels:["j","a","b","alpha"],parse:["--jzazbz"],serialize:"--jzazbz",fromMode:{rgb:ul,xyz65:fl},toMode:{rgb:hl,xyz65:dl},ranges:{j:[0,.222],a:[-.109,.129],b:[-.185,.134]},interpolate:{j:P,a:P,b:P,alpha:{use:P,fixup:Me}}},B0=({j:e,a:t,b:n,alpha:a})=>{t===void 0&&(t=0),n===void 0&&(n=0);let r=Math.sqrt(t*t+n*n),l={mode:"jch",j:e,c:r};return r&&(l.h=_e(Math.atan2(n,t)*180/Math.PI)),a!==void 0&&(l.alpha=a),l},D0=({j:e,c:t,h:n,alpha:a})=>{n===void 0&&(n=0);let r={mode:"jab",j:e,a:t?t*Math.cos(n/180*Math.PI):0,b:t?t*Math.sin(n/180*Math.PI):0};return a!==void 0&&(r.alpha=a),r},wc={mode:"jch",parse:["--jzczhz"],serialize:"--jzczhz",toMode:{jab:D0,rgb:e=>hl(D0(e))},fromMode:{rgb:e=>B0(ul(e)),jab:B0},channels:["j","c","h","alpha"],ranges:{j:[0,.221],c:[0,.19],h:[0,360]},interpolate:{h:{use:P,fixup:nt},c:P,j:P,alpha:{use:P,fixup:Me}},difference:{h:wn},average:{h:at}},Rn=Math.pow(29,3)/Math.pow(3,3),Za=Math.pow(6,3)/Math.pow(29,3);let ha=e=>Math.pow(e,3)>Za?Math.pow(e,3):(116*e-16)/Rn;const Va=({l:e,a:t,b:n,alpha:a})=>{e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0);let r=(e+16)/116,l=t/500+r,o=r-n/200,s={mode:"xyz50",x:ha(l)*ve.X,y:ha(r)*ve.Y,z:ha(o)*ve.Z};return a!==void 0&&(s.alpha=a),s},Kt=({x:e,y:t,z:n,alpha:a})=>{e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0);let r=Ot({r:e*3.1341359569958707-t*1.6173863321612538-.4906619460083532*n,g:e*-.978795502912089+t*1.916254567259524+.03344273116131949*n,b:e*.07195537988411677-t*.2289768264158322+1.405386058324125*n});return a!==void 0&&(r.alpha=a),r},bl=e=>Kt(Va(e)),Jt=e=>{let{r:t,g:n,b:a,alpha:r}=Nt(e),l={mode:"xyz50",x:.436065742824811*t+.3851514688337912*n+.14307845442264197*a,y:.22249319175623702*t+.7168870538238823*n+.06061979053616537*a,z:.013923904500943465*t+.09708128566574634*n+.7140993584005155*a};return r!==void 0&&(l.alpha=r),l},ba=e=>e>Za?Math.cbrt(e):(Rn*e+16)/116,Wa=({x:e,y:t,z:n,alpha:a})=>{e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0);let r=ba(e/ve.X),l=ba(t/ve.Y),o=ba(n/ve.Z),s={mode:"lab",l:116*l-16,a:500*(r-l),b:200*(l-o)};return a!==void 0&&(s.alpha=a),s},gl=e=>{let t=Wa(Jt(e));return e.r===e.b&&e.b===e.g&&(t.a=t.b=0),t};function Cc(e,t){if(!t||t[0]!=="lab")return;const n={mode:"lab"},[,a,r,l,o]=t;if(!(a.type===T.Hue||r.type===T.Hue||l.type===T.Hue))return a.type!==T.None&&(n.l=Math.min(Math.max(0,a.value),100)),r.type!==T.None&&(n.a=r.type===T.Number?r.value:r.value*125/100),l.type!==T.None&&(n.b=l.type===T.Number?l.value:l.value*125/100),o.type!==T.None&&(n.alpha=Math.min(1,Math.max(0,o.type===T.Number?o.value:o.value/100))),n}const Ka={mode:"lab",toMode:{xyz50:Va,rgb:bl},fromMode:{xyz50:Wa,rgb:gl},channels:["l","a","b","alpha"],ranges:{l:[0,100],a:[-125,125],b:[-125,125]},parse:[Cc],serialize:e=>`lab(${e.l!==void 0?e.l:"none"} ${e.a!==void 0?e.a:"none"} ${e.b!==void 0?e.b:"none"}${e.alpha<1?` / ${e.alpha}`:""})`,interpolate:{l:P,a:P,b:P,alpha:{use:P,fixup:Me}}},Ac={...Ka,mode:"lab65",parse:["--lab-d65"],serialize:"--lab-d65",toMode:{xyz65:el,rgb:Cn},fromMode:{xyz65:tl,rgb:An},ranges:{l:[0,100],a:[-125,125],b:[-125,125]}};function Tc(e,t){if(!t||t[0]!=="lch")return;const n={mode:"lch"},[,a,r,l,o]=t;if(a.type!==T.None){if(a.type===T.Hue)return;n.l=Math.min(Math.max(0,a.value),100)}if(r.type!==T.None&&(n.c=Math.max(0,r.type===T.Number?r.value:r.value*150/100)),l.type!==T.None){if(l.type===T.Percentage)return;n.h=l.value}return o.type!==T.None&&(n.alpha=Math.min(1,Math.max(0,o.type===T.Number?o.value:o.value/100))),n}const Ja={mode:"lch",toMode:{lab:ut,rgb:e=>bl(ut(e))},fromMode:{rgb:e=>dt(gl(e)),lab:dt},channels:["l","c","h","alpha"],ranges:{l:[0,100],c:[0,150],h:[0,360]},parse:[Tc],serialize:e=>`lch(${e.l!==void 0?e.l:"none"} ${e.c!==void 0?e.c:"none"} ${e.h!==void 0?e.h:"none"}${e.alpha<1?` / ${e.alpha}`:""})`,interpolate:{h:{use:P,fixup:nt},c:P,l:P,alpha:{use:P,fixup:Me}},difference:{h:wn},average:{h:at}},$c={...Ja,mode:"lch65",parse:["--lch-d65"],serialize:"--lch-d65",toMode:{lab65:e=>ut(e,"lab65"),rgb:e=>Cn(ut(e,"lab65"))},fromMode:{rgb:e=>dt(An(e),"lch65"),lab65:e=>dt(e,"lch65")},ranges:{l:[0,100],c:[0,150],h:[0,360]}},pl=({l:e,u:t,v:n,alpha:a})=>{t===void 0&&(t=0),n===void 0&&(n=0);let r=Math.sqrt(t*t+n*n),l={mode:"lchuv",l:e,c:r};return r&&(l.h=_e(Math.atan2(n,t)*180/Math.PI)),a!==void 0&&(l.alpha=a),l},ml=({l:e,c:t,h:n,alpha:a})=>{n===void 0&&(n=0);let r={mode:"luv",l:e,u:t?t*Math.cos(n/180*Math.PI):0,v:t?t*Math.sin(n/180*Math.PI):0};return a!==void 0&&(r.alpha=a),r},vl=(e,t,n)=>4*e/(e+15*t+3*n),Fl=(e,t,n)=>9*t/(e+15*t+3*n),zc=vl(ve.X,ve.Y,ve.Z),Ec=Fl(ve.X,ve.Y,ve.Z),Rc=e=>e<=Za?Rn*e:116*Math.cbrt(e)-16,Ra=({x:e,y:t,z:n,alpha:a})=>{e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0);let r=Rc(t/ve.Y),l=vl(e,t,n),o=Fl(e,t,n);!isFinite(l)||!isFinite(o)?r=l=o=0:(l=13*r*(l-zc),o=13*r*(o-Ec));let s={mode:"luv",l:r,u:l,v:o};return a!==void 0&&(s.alpha=a),s},Sc=(e,t,n)=>4*e/(e+15*t+3*n),Pc=(e,t,n)=>9*t/(e+15*t+3*n),Bc=Sc(ve.X,ve.Y,ve.Z),Dc=Pc(ve.X,ve.Y,ve.Z),Sa=({l:e,u:t,v:n,alpha:a})=>{if(e===void 0&&(e=0),e===0)return{mode:"xyz50",x:0,y:0,z:0};t===void 0&&(t=0),n===void 0&&(n=0);let r=t/(13*e)+Bc,l=n/(13*e)+Dc,o=ve.Y*(e<=8?e/Rn:Math.pow((e+16)/116,3)),s=o*(9*r)/(4*l),i=o*(12-3*r-20*l)/(4*l),c={mode:"xyz50",x:s,y:o,z:i};return a!==void 0&&(c.alpha=a),c},Lc=e=>pl(Ra(Jt(e))),Nc=e=>Kt(Sa(ml(e))),Oc={mode:"lchuv",toMode:{luv:ml,rgb:Nc},fromMode:{rgb:Lc,luv:pl},channels:["l","c","h","alpha"],parse:["--lchuv"],serialize:"--lchuv",ranges:{l:[0,100],c:[0,176.956],h:[0,360]},interpolate:{h:{use:P,fixup:nt},c:P,l:P,alpha:{use:P,fixup:Me}},difference:{h:wn},average:{h:at}},Ic={...Lt,mode:"lrgb",toMode:{rgb:Ot},fromMode:{rgb:Nt},parse:["srgb-linear"],serialize:"srgb-linear"},Yc={mode:"luv",toMode:{xyz50:Sa,rgb:e=>Kt(Sa(e))},fromMode:{xyz50:Ra,rgb:e=>Ra(Jt(e))},channels:["l","u","v","alpha"],parse:["--luv"],serialize:"--luv",ranges:{l:[0,100],u:[-84.936,175.042],v:[-125.882,87.243]},interpolate:{l:P,u:P,v:P,alpha:{use:P,fixup:Me}}},yl=({r:e,g:t,b:n,alpha:a})=>{e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0);let r=Math.cbrt(.412221469470763*e+.5363325372617348*t+.0514459932675022*n),l=Math.cbrt(.2119034958178252*e+.6806995506452344*t+.1073969535369406*n),o=Math.cbrt(.0883024591900564*e+.2817188391361215*t+.6299787016738222*n),s={mode:"oklab",l:.210454268309314*r+.7936177747023054*l-.0040720430116193*o,a:1.9779985324311684*r-2.42859224204858*l+.450593709617411*o,b:.0259040424655478*r+.7827717124575296*l-.8086757549230774*o};return a!==void 0&&(s.alpha=a),s},Sn=e=>{let t=yl(Nt(e));return e.r===e.b&&e.b===e.g&&(t.a=t.b=0),t},Qt=({l:e,a:t,b:n,alpha:a})=>{e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0);let r=Math.pow(e+.3963377773761749*t+.2158037573099136*n,3),l=Math.pow(e-.1055613458156586*t-.0638541728258133*n,3),o=Math.pow(e-.0894841775298119*t-1.2914855480194092*n,3),s={mode:"lrgb",r:4.076741636075957*r-3.3077115392580616*l+.2309699031821044*o,g:-1.2684379732850317*r+2.6097573492876887*l-.3413193760026573*o,b:-.0041960761386756*r-.7034186179359362*l+1.7076146940746117*o};return a!==void 0&&(s.alpha=a),s},Pn=e=>Ot(Qt(e));function Pa(e){const a=1.170873786407767;return .5*(a*e-.206+Math.sqrt((a*e-.206)*(a*e-.206)+4*.03*a*e))}function mn(e){return(e*e+.206*e)/(1.170873786407767*(e+.03))}function qc(e,t){let n,a,r,l,o,s,i,c;-1.88170328*e-.80936493*t>1?(n=1.19086277,a=1.76576728,r=.59662641,l=.75515197,o=.56771245,s=4.0767416621,i=-3.3077115913,c=.2309699292):1.81444104*e-1.19445276*t>1?(n=.73956515,a=-.45954404,r=.08285427,l=.1254107,o=.14503204,s=-1.2684380046,i=2.6097574011,c=-.3413193965):(n=1.35733652,a=-.00915799,r=-1.1513021,l=-.50559606,o=.00692167,s=-.0041960863,i=-.7034186147,c=1.707614701);let f=n+a*e+r*t+l*e*e+o*e*t,b=.3963377774*e+.2158037573*t,u=-.1055613458*e-.0638541728*t,d=-.0894841775*e-1.291485548*t;{let p=1+f*b,v=1+f*u,m=1+f*d,y=p*p*p,w=v*v*v,B=m*m*m,x=3*b*p*p,D=3*u*v*v,F=3*d*m*m,g=6*b*b*p,M=6*u*u*v,z=6*d*d*m,k=s*y+i*w+c*B,S=s*x+i*D+c*F,E=s*g+i*M+c*z;f=f-k*S/(S*S-.5*k*E)}return f}function Qa(e,t){let n=qc(e,t),a=Qt({l:1,a:n*e,b:n*t}),r=Math.cbrt(1/Math.max(a.r,a.g,a.b)),l=r*n;return[r,l]}function Xc(e,t,n,a,r,l=null){l||(l=Qa(e,t));let o;if((n-r)*l[1]-(l[0]-r)*a<=0)o=l[1]*r/(a*l[0]+l[1]*(r-n));else{o=l[1]*(r-1)/(a*(l[0]-1)+l[1]*(r-n));{let s=n-r,i=a,c=.3963377774*e+.2158037573*t,f=-.1055613458*e-.0638541728*t,b=-.0894841775*e-1.291485548*t,u=s+i*c,d=s+i*f,p=s+i*b;{let v=r*(1-o)+o*n,m=o*a,y=v+m*c,w=v+m*f,B=v+m*b,x=y*y*y,D=w*w*w,F=B*B*B,g=3*u*y*y,M=3*d*w*w,z=3*p*B*B,k=6*u*u*y,S=6*d*d*w,E=6*p*p*B,O=4.0767416621*x-3.3077115913*D+.2309699292*F-1,J=4.0767416621*g-3.3077115913*M+.2309699292*z,L=4.0767416621*k-3.3077115913*S+.2309699292*E,R=J/(J*J-.5*O*L),Y=-O*R,q=-1.2684380046*x+2.6097574011*D-.3413193965*F-1,ae=-1.2684380046*g+2.6097574011*M-.3413193965*z,de=-1.2684380046*k+2.6097574011*S-.3413193965*E,C=ae/(ae*ae-.5*q*de),te=-q*C,be=-.0041960863*x-.7034186147*D+1.707614701*F-1,ue=-.0041960863*g-.7034186147*M+1.707614701*z,j=-.0041960863*k-.7034186147*S+1.707614701*E,K=ue/(ue*ue-.5*be*j),ge=-be*K;Y=R>=0?Y:1e6,te=C>=0?te:1e6,ge=K>=0?ge:1e6,o+=Math.min(Y,Math.min(te,ge))}}}return o}function e0(e,t,n=null){n||(n=Qa(e,t));let a=n[0],r=n[1];return[r/a,r/(1-a)]}function Ml(e,t,n){let a=Qa(t,n),r=Xc(t,n,e,1,e,a),l=e0(t,n,a),o=.11516993+1/(7.4477897+4.1590124*n+t*(-2.19557347+1.75198401*n+t*(-2.13704948-10.02301043*n+t*(-4.24894561+5.38770819*n+4.69891013*t)))),s=.11239642+1/(1.6132032-.68124379*n+t*(.40370612+.90148123*n+t*(-.27087943+.6122399*n+t*(.00299215-.45399568*n-.14661872*t)))),i=r/Math.min(e*l[0],(1-e)*l[1]),c=e*o,f=(1-e)*s,b=.9*i*Math.sqrt(Math.sqrt(1/(1/(c*c*c*c)+1/(f*f*f*f))));return c=e*.4,f=(1-e)*.8,[Math.sqrt(1/(1/(c*c)+1/(f*f))),b,r]}function L0(e){const t=e.l!==void 0?e.l:0,n=e.a!==void 0?e.a:0,a=e.b!==void 0?e.b:0,r={mode:"okhsl",l:Pa(t)};e.alpha!==void 0&&(r.alpha=e.alpha);let l=Math.sqrt(n*n+a*a);if(!l)return r.s=0,r;let[o,s,i]=Ml(t,n/l,a/l),c;if(l<s){let f=0,b=.8*o,u=1-b/s;c=(l-f)/(b+u*(l-f))*.8}else{let f=s,b=.2*s*s*1.25*1.25/o,u=1-b/(i-s);c=.8+.2*((l-f)/(b+u*(l-f)))}return c&&(r.s=c,r.h=_e(Math.atan2(a,n)*180/Math.PI)),r}function N0(e){let t=e.h!==void 0?e.h:0,n=e.s!==void 0?e.s:0,a=e.l!==void 0?e.l:0;const r={mode:"oklab",l:mn(a)};if(e.alpha!==void 0&&(r.alpha=e.alpha),!n||a===1)return r.a=r.b=0,r;let l=Math.cos(t/180*Math.PI),o=Math.sin(t/180*Math.PI),[s,i,c]=Ml(r.l,l,o),f,b,u,d;n<.8?(f=1.25*n,b=0,u=.8*s,d=1-u/i):(f=5*(n-.8),b=i,u=.2*i*i*1.25*1.25/s,d=1-u/(c-i));let p=b+f*u/(1-d*f);return r.a=p*l,r.b=p*o,r}const Gc={...rl,mode:"okhsl",channels:["h","s","l","alpha"],parse:["--okhsl"],serialize:"--okhsl",fromMode:{oklab:L0,rgb:e=>L0(Sn(e))},toMode:{oklab:N0,rgb:e=>Pn(N0(e))}};function O0(e){let t=e.l!==void 0?e.l:0,n=e.a!==void 0?e.a:0,a=e.b!==void 0?e.b:0,r=Math.sqrt(n*n+a*a),l=r?n/r:1,o=r?a/r:1,[s,i]=e0(l,o),c=.5,f=1-c/s,b=i/(r+t*i),u=b*t,d=b*r,p=mn(u),v=d*p/u,m=Qt({l:p,a:l*v,b:o*v}),y=Math.cbrt(1/Math.max(m.r,m.g,m.b,0));t=t/y,r=r/y*Pa(t)/t,t=Pa(t);const w={mode:"okhsv",s:r?(c+i)*d/(i*c+i*f*d):0,v:t?t/u:0};return w.s&&(w.h=_e(Math.atan2(a,n)*180/Math.PI)),e.alpha!==void 0&&(w.alpha=e.alpha),w}function I0(e){const t={mode:"oklab"};e.alpha!==void 0&&(t.alpha=e.alpha);const n=e.h!==void 0?e.h:0,a=e.s!==void 0?e.s:0,r=e.v!==void 0?e.v:0,l=Math.cos(n/180*Math.PI),o=Math.sin(n/180*Math.PI),[s,i]=e0(l,o),c=.5,f=1-c/s,b=1-a*c/(c+i-i*f*a),u=a*i*c/(c+i-i*f*a),d=mn(b),p=u*d/b,v=Qt({l:d,a:l*p,b:o*p}),m=Math.cbrt(1/Math.max(v.r,v.g,v.b,0)),y=mn(r*b),w=u*y/b;return t.l=y*m,t.a=w*l*m,t.b=w*o*m,t}const Hc={...sl,mode:"okhsv",channels:["h","s","v","alpha"],parse:["--okhsv"],serialize:"--okhsv",fromMode:{oklab:O0,rgb:e=>O0(Sn(e))},toMode:{oklab:I0,rgb:e=>Pn(I0(e))}};function jc(e,t){if(!t||t[0]!=="oklab")return;const n={mode:"oklab"},[,a,r,l,o]=t;if(!(a.type===T.Hue||r.type===T.Hue||l.type===T.Hue))return a.type!==T.None&&(n.l=Math.min(Math.max(0,a.type===T.Number?a.value:a.value/100),1)),r.type!==T.None&&(n.a=r.type===T.Number?r.value:r.value*.4/100),l.type!==T.None&&(n.b=l.type===T.Number?l.value:l.value*.4/100),o.type!==T.None&&(n.alpha=Math.min(1,Math.max(0,o.type===T.Number?o.value:o.value/100))),n}const Uc={...Ka,mode:"oklab",toMode:{lrgb:Qt,rgb:Pn},fromMode:{lrgb:yl,rgb:Sn},ranges:{l:[0,1],a:[-.4,.4],b:[-.4,.4]},parse:[jc],serialize:e=>`oklab(${e.l!==void 0?e.l:"none"} ${e.a!==void 0?e.a:"none"} ${e.b!==void 0?e.b:"none"}${e.alpha<1?` / ${e.alpha}`:""})`};function Zc(e,t){if(!t||t[0]!=="oklch")return;const n={mode:"oklch"},[,a,r,l,o]=t;if(a.type!==T.None){if(a.type===T.Hue)return;n.l=Math.min(Math.max(0,a.type===T.Number?a.value:a.value/100),1)}if(r.type!==T.None&&(n.c=Math.max(0,r.type===T.Number?r.value:r.value*.4/100)),l.type!==T.None){if(l.type===T.Percentage)return;n.h=l.value}return o.type!==T.None&&(n.alpha=Math.min(1,Math.max(0,o.type===T.Number?o.value:o.value/100))),n}const Vc={...Ja,mode:"oklch",toMode:{oklab:e=>ut(e,"oklab"),rgb:e=>Pn(ut(e,"oklab"))},fromMode:{rgb:e=>dt(Sn(e),"oklch"),oklab:e=>dt(e,"oklch")},parse:[Zc],serialize:e=>`oklch(${e.l!==void 0?e.l:"none"} ${e.c!==void 0?e.c:"none"} ${e.h!==void 0?e.h:"none"}${e.alpha<1?` / ${e.alpha}`:""})`,ranges:{l:[0,1],c:[0,.4],h:[0,360]}},Y0=e=>{let{r:t,g:n,b:a,alpha:r}=Nt(e),l={mode:"xyz65",x:.486570948648216*t+.265667693169093*n+.1982172852343625*a,y:.2289745640697487*t+.6917385218365062*n+.079286914093745*a,z:0*t+.0451133818589026*n+1.043944368900976*a};return r!==void 0&&(l.alpha=r),l},q0=({x:e,y:t,z:n,alpha:a})=>{e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0);let r=Ot({r:e*2.4934969119414263-t*.9313836179191242-.402710784450717*n,g:e*-.8294889695615749+t*1.7626640603183465+.0236246858419436*n,b:e*.0358458302437845-t*.0761723892680418+.9568845240076871*n},"p3");return a!==void 0&&(r.alpha=a),r},Wc={...Lt,mode:"p3",parse:["display-p3"],serialize:"display-p3",fromMode:{rgb:e=>q0(Ft(e)),xyz65:q0},toMode:{rgb:e=>yt(Y0(e)),xyz65:Y0}},ga=e=>{let t=Math.abs(e);return t>=1/512?Math.sign(e)*Math.pow(t,1/1.8):16*e},X0=({x:e,y:t,z:n,alpha:a})=>{e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0);let r={mode:"prophoto",r:ga(e*1.3457868816471585-t*.2555720873797946-.0511018649755453*n),g:ga(e*-.5446307051249019+t*1.5082477428451466+.0205274474364214*n),b:ga(e*0+t*0+1.2119675456389452*n)};return a!==void 0&&(r.alpha=a),r},pa=(e=0)=>{let t=Math.abs(e);return t>=16/512?Math.sign(e)*Math.pow(t,1.8):e/16},G0=e=>{let t=pa(e.r),n=pa(e.g),a=pa(e.b),r={mode:"xyz50",x:.7977666449006423*t+.1351812974005331*n+.0313477341283922*a,y:.2880748288194013*t+.7118352342418731*n+899369387256e-16*a,z:0*t+0*n+.8251046025104602*a};return e.alpha!==void 0&&(r.alpha=e.alpha),r},Kc={...Lt,mode:"prophoto",parse:["prophoto-rgb"],serialize:"prophoto-rgb",fromMode:{xyz50:X0,rgb:e=>X0(Jt(e))},toMode:{xyz50:G0,rgb:e=>Kt(G0(e))}},H0=1.09929682680944,Jc=.018053968510807,ma=e=>{const t=Math.abs(e);return t>Jc?(Math.sign(e)||1)*(H0*Math.pow(t,.45)-(H0-1)):4.5*e},j0=({x:e,y:t,z:n,alpha:a})=>{e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0);let r={mode:"rec2020",r:ma(e*1.7166511879712683-t*.3556707837763925-.2533662813736599*n),g:ma(e*-.6666843518324893+t*1.6164812366349395+.0157685458139111*n),b:ma(e*.0176398574453108-t*.0427706132578085+.9421031212354739*n)};return a!==void 0&&(r.alpha=a),r},U0=1.09929682680944,Qc=.018053968510807,va=(e=0)=>{let t=Math.abs(e);return t<Qc*4.5?e/4.5:(Math.sign(e)||1)*Math.pow((t+U0-1)/U0,1/.45)},Z0=e=>{let t=va(e.r),n=va(e.g),a=va(e.b),r={mode:"xyz65",x:.6369580483012911*t+.1446169035862083*n+.1688809751641721*a,y:.262700212011267*t+.6779980715188708*n+.059301716469862*a,z:0*t+.0280726930490874*n+1.0609850577107909*a};return e.alpha!==void 0&&(r.alpha=e.alpha),r},ef={...Lt,mode:"rec2020",fromMode:{xyz65:j0,rgb:e=>j0(Ft(e))},toMode:{xyz65:Z0,rgb:e=>yt(Z0(e))},parse:["rec2020"],serialize:"rec2020"},vt=.0037930732552754493,kl=Math.cbrt(vt),Fa=e=>Math.cbrt(e)-kl,tf=e=>{const{r:t,g:n,b:a,alpha:r}=Nt(e),l=Fa(.3*t+.622*n+.078*a+vt),o=Fa(.23*t+.692*n+.078*a+vt),s=Fa(.2434226892454782*t+.2047674442449682*n+.5518098665095535*a+vt),i={mode:"xyb",x:(l-o)/2,y:(l+o)/2,b:s-(l+o)/2};return r!==void 0&&(i.alpha=r),i},ya=e=>Math.pow(e+kl,3),nf=({x:e,y:t,b:n,alpha:a})=>{e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0);const r=ya(e+t)-vt,l=ya(t-e)-vt,o=ya(n+t)-vt,s=Ot({r:11.031566904639861*r-9.866943908131562*l-.16462299650829934*o,g:-3.2541473810744237*r+4.418770377582723*l-.16462299650829934*o,b:-3.6588512867136815*r+2.7129230459360922*l+1.9459282407775895*o});return a!==void 0&&(s.alpha=a),s},af={mode:"xyb",channels:["x","y","b","alpha"],parse:["--xyb"],serialize:"--xyb",toMode:{rgb:nf},fromMode:{rgb:tf},ranges:{x:[-.0154,.0281],y:[0,.8453],b:[-.2778,.388]},interpolate:{x:P,y:P,b:P,alpha:{use:P,fixup:Me}}},rf={mode:"xyz50",parse:["xyz-d50"],serialize:"xyz-d50",toMode:{rgb:Kt,lab:Wa},fromMode:{rgb:Jt,lab:Va},channels:["x","y","z","alpha"],ranges:{x:[0,.964],y:[0,.999],z:[0,.825]},interpolate:{x:P,y:P,z:P,alpha:{use:P,fixup:Me}}},lf=e=>{let{x:t,y:n,z:a,alpha:r}=e;t===void 0&&(t=0),n===void 0&&(n=0),a===void 0&&(a=0);let l={mode:"xyz50",x:1.0479298208405488*t+.0229467933410191*n-.0501922295431356*a,y:.0296278156881593*t+.990434484573249*n-.0170738250293851*a,z:-.0092430581525912*t+.0150551448965779*n+.7518742899580008*a};return r!==void 0&&(l.alpha=r),l},of=e=>{let{x:t,y:n,z:a,alpha:r}=e;t===void 0&&(t=0),n===void 0&&(n=0),a===void 0&&(a=0);let l={mode:"xyz65",x:.9554734527042182*t-.0230985368742614*n+.0632593086610217*a,y:-.0283697069632081*t+1.0099954580058226*n+.021041398966943*a,z:.0123140016883199*t-.0205076964334779*n+1.3303659366080753*a};return r!==void 0&&(l.alpha=r),l},sf={mode:"xyz65",toMode:{rgb:yt,xyz50:lf},fromMode:{rgb:Ft,xyz50:of},ranges:{x:[0,.95],y:[0,1],z:[0,1.088]},channels:["x","y","z","alpha"],parse:["xyz","xyz-d65"],serialize:"xyz-d65",interpolate:{x:P,y:P,z:P,alpha:{use:P,fixup:Me}}},cf=({r:e,g:t,b:n,alpha:a})=>{e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0);const r={mode:"yiq",y:.29889531*e+.58662247*t+.11448223*n,i:.59597799*e-.2741761*t-.32180189*n,q:.21147017*e-.52261711*t+.31114694*n};return a!==void 0&&(r.alpha=a),r},ff=({y:e,i:t,q:n,alpha:a})=>{e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0);const r={mode:"rgb",r:e+.95608445*t+.6208885*n,g:e-.27137664*t-.6486059*n,b:e-1.10561724*t+1.70250126*n};return a!==void 0&&(r.alpha=a),r},df={mode:"yiq",toMode:{rgb:ff},fromMode:{rgb:cf},channels:["y","i","q","alpha"],parse:["--yiq"],serialize:"--yiq",ranges:{i:[-.595,.595],q:[-.522,.522]},interpolate:{y:P,i:P,q:P,alpha:{use:P,fixup:Me}}};ne(W1);ne(rc);ne(lc);ne(oc);ne(cc);ne(rl);ne(sl);ne(Fc);ne(yc);ne(xc);ne(wc);ne(Ka);ne(Ac);ne(Ja);ne($c);ne(Oc);ne(Ic);ne(Yc);ne(Gc);ne(Hc);ne(Uc);ne(Vc);ne(Wc);ne(Kc);ne(ef);ne(Lt);ne(af);ne(rf);ne(sf);ne(df);const uf=_n("oklab");function V0(e,t,n,a){const r=uf({mode:"rgb",r:e/255,g:t/255,b:n/255});let l=1/0,o=a[0];for(const s of a){const i=ac("oklab")(r,s.lab);i<l&&(l=i,o=s)}return o}const hf=_n("oklab");function bf(e,t,n=32,a=32){return new Promise((r,l)=>{const o=new window.Image;o.crossOrigin="Anonymous",o.src=e;const s=t.map(i=>({hex:i,lab:hf(i)}));o.onload=()=>{const i=o.width,c=o.height,f=document.createElement("canvas"),b=f.getContext("2d",{willReadFrequently:!0});if(!b){l(new Error("Could not get 2D context"));return}f.width=i,f.height=c,b.drawImage(o,0,0,i,c);const u=b.getImageData(0,0,i,c).data,d=[],p=i/n,v=c/a;for(let m=0;m<a;m++)for(let y=0;y<n;y++){const w=Math.floor(y*p),B=Math.floor(m*v),x=Math.floor((y+1)*p),D=Math.floor((m+1)*v),F=[{r:0,g:0,b:0,count:0,transparent:0},{r:0,g:0,b:0,count:0,transparent:0},{r:0,g:0,b:0,count:0,transparent:0},{r:0,g:0,b:0,count:0,transparent:0}];let g=0;const M=(x-w)*(D-B);for(let j=B;j<D;j++)for(let K=w;K<x;K++){const ge=(j*i+K)*4,Le=u[ge],Ne=u[ge+1],rt=u[ge+2],Ce=u[ge+3];Ce<128&&g++;const Mt=K<w+p/2?0:1,lt=(j<B+v/2?0:1)*2+Mt,Xe=F[lt];Ce>128?(Xe.r+=Le,Xe.g+=Ne,Xe.b+=rt,Xe.count++):Xe.transparent++}if(g/M>.95){d.push({shape:"empty",color:"#FFFFFF",rotation:0});continue}const z=F.reduce((j,K)=>j+K.r,0),k=F.reduce((j,K)=>j+K.g,0),S=F.reduce((j,K)=>j+K.b,0),E=F.reduce((j,K)=>j+K.count,0),O={r:z/E,g:k/E,b:S/E},J=F.map(j=>{const K=j.count||1,ge=j.count>0?j.r/K:O.r,Le=j.count>0?j.g/K:O.g,Ne=j.count>0?j.b/K:O.b;return{r:ge,g:Le,b:Ne}}),L=V0(O.r,O.g,O.b,s),R=J.map(j=>V0(j.r,j.g,j.b,s)),[Y,q,ae,de]=R;let C="square",te=0,be=L.hex;const ue=[...new Set(R.map(j=>j.hex))];if(ue.length===1)C="square";else if(ue.length===2){const j=ue[0],K=R.filter(ge=>ge.hex===j).length;if(K===1||K===3){C="quarter";const ge=K===1?j:ue[1],Le=K===3?j:ue[1],Ne=R.findIndex(Ce=>Ce.hex===ge);be=Le,te=[2,3,1,0][Ne]}else Y.hex===q.hex&&ae.hex===de.hex?(C="halfCircle",te=Y.hex===L.hex?2:0):Y.hex===ae.hex&&q.hex===de.hex?(C="halfCircle",te=Y.hex===L.hex?1:3):C="square"}else C="circle";d.push({shape:C,color:be,rotation:te})}r(d)},o.onerror=i=>{console.error("Failed to load image:",o.src,i),l(new Error("Failed to load image. Check if the URL is correct and accessible."))}})}class gf{history=[];currentIndex=-1;maxHistory=50;constructor(t){t&&this.addState(t)}addState(t){this.currentIndex<this.history.length-1&&(this.history=this.history.slice(0,this.currentIndex+1)),this.history.push({grid:JSON.parse(JSON.stringify(t)),timestamp:Date.now()}),this.history.length>this.maxHistory?this.history.shift():this.currentIndex++}undo(){return this.canUndo()?(this.currentIndex--,JSON.parse(JSON.stringify(this.history[this.currentIndex].grid))):null}redo(){return this.canRedo()?(this.currentIndex++,JSON.parse(JSON.stringify(this.history[this.currentIndex].grid))):null}canUndo(){return this.currentIndex>0}canRedo(){return this.currentIndex<this.history.length-1}clear(){this.history=[],this.currentIndex=-1}getCurrentState(){return this.currentIndex>=0&&this.currentIndex<this.history.length?JSON.parse(JSON.stringify(this.history[this.currentIndex].grid)):null}}class pf{clipboardData=null;copy(t,n,a){const{startX:r,startY:l,endX:o,endY:s}=this.normalizeSelection(n),i=o-r+1,c=s-l+1,f=[];for(let b=l;b<=s;b++)for(let u=r;u<=o;u++){const d=b*a+u;f.push(t[d]?JSON.parse(JSON.stringify(t[d])):null)}this.clipboardData={cells:f,width:i,height:c}}cut(t,n,a){return this.copy(t,n,a),this.deleteSelection(t,n,a)}paste(t,n,a,r,l){if(!this.clipboardData)return t;const o=[...t],{cells:s,width:i,height:c}=this.clipboardData;for(let f=0;f<c;f++)for(let b=0;b<i;b++){const u=n+b,d=a+f;if(u>=0&&u<r&&d>=0&&d<l){const p=f*i+b,v=d*r+u;o[v]=s[p]?JSON.parse(JSON.stringify(s[p])):null}}return o}deleteSelection(t,n,a){const{startX:r,startY:l,endX:o,endY:s}=this.normalizeSelection(n),i=[...t];for(let c=l;c<=s;c++)for(let f=r;f<=o;f++){const b=c*a+f;i[b]=null}return i}rotateSelection(t,n,a,r=!0){const{startX:l,startY:o,endX:s,endY:i}=this.normalizeSelection(n),c=s-l+1,f=i-o+1,b=[];for(let d=o;d<=i;d++)for(let p=l;p<=s;p++){const v=d*a+p;b.push(t[v])}const u=new Array(c*f);for(let d=0;d<f;d++)for(let p=0;p<c;p++){const v=d*c+p;let m;r?m=p*f+(f-1-d):m=(c-1-p)*f+d;const y=b[v];u[m]=y?{...y,rotation:(y.rotation+(r?1:-1)+4)%4}:null}if(c===f){const d=[...t];for(let p=0;p<f;p++)for(let v=0;v<c;v++){const m=(o+p)*a+(l+v),y=p*c+v;d[m]=u[y]}return d}return t}moveSelection(t,n,a,r,l,o){const{startX:s,startY:i,endX:c,endY:f}=this.normalizeSelection(n),b=c-s+1,u=f-i+1,d=Math.max(0,Math.min(l-b,s+a)),p=Math.max(0,Math.min(o-u,i+r)),v=d+b-1,m=p+u-1;if(d===s&&p===i)return{grid:t,selection:n};const y=[];for(let x=i;x<=f;x++)for(let D=s;D<=c;D++){const F=x*l+D;y.push(t[F])}let w=this.deleteSelection(t,n,l);for(let x=0;x<u;x++)for(let D=0;D<b;D++){const F=x*b+D,g=(p+x)*l+(d+D);w[g]=y[F]}const B={...n,startX:d,startY:p,endX:v,endY:m};return{grid:w,selection:B}}hasClipboardData(){return this.clipboardData!==null}getClipboardSize(){return this.clipboardData?{width:this.clipboardData.width,height:this.clipboardData.height}:null}normalizeSelection(t){return{startX:Math.min(t.startX,t.endX),startY:Math.min(t.startY,t.endY),endX:Math.max(t.startX,t.endX),endY:Math.max(t.startY,t.endY)}}}var mf=ye('<main class="svelte-1uha8ag"><!> <!></main>');function wf(e,t){Pe(t,!1);let n=re("square"),a=re(it.length>0?it[0].rgb:"#000000"),r=re(null),l=re(!1),o=re(!1),s=re(1),i=re(32),c=re(!1),f=re(0),b=re(0),u="dotsly.json",d=re({startX:0,startY:0,endX:0,endY:0,active:!1}),p,v,m=re(!1),y=re(!1);function w(){$(s,Math.min(h(s)+.1,3))}function B(){$(s,Math.max(h(s)-.1,.2))}function x(_){for(let oe=0;oe<xe.length;oe++)for(let ce=0;ce<xe[oe].length;ce++)if(xe[oe][ce].rgb===_)return{row:oe,col:ce};return null}function D(){const _=x(h(a));if(_&&_.col>0)$(a,xe[_.row][_.col-1].rgb);else if(_&&_.row>0){const oe=_.row-1,ce=xe[oe].length-1;$(a,xe[oe][ce].rgb)}}function F(){const _=x(h(a));_&&_.col<xe[_.row].length-1?$(a,xe[_.row][_.col+1].rgb):_&&_.row<xe.length-1&&$(a,xe[_.row+1][0].rgb)}function g(){const _=x(h(a));if(_&&_.row>0){const oe=Math.min(_.col,xe[_.row-1].length-1);$(a,xe[_.row-1][oe].rgb)}}function M(){const _=x(h(a));if(_&&_.row<xe.length-1){const oe=Math.min(_.col,xe[_.row+1].length-1);$(a,xe[_.row+1][oe].rgb)}}function z(){if(!h(r))return;const _={grid:h(r),size:h(i),version:"1.0"},oe=JSON.stringify(_,null,2),ce=new Blob([oe],{type:"application/json"}),Xt=URL.createObjectURL(ce),gt=document.createElement("a");gt.href=Xt,gt.download=u,document.body.appendChild(gt),gt.click(),document.body.removeChild(gt),URL.revokeObjectURL(Xt)}function k(){const _=document.createElement("input");_.type="file",_.accept=".json",_.onchange=oe=>{const ce=oe.target.files?.[0];if(!ce)return;const Xt=new FileReader;Xt.onload=gt=>{try{const kt=JSON.parse(gt.target?.result);kt.grid&&kt.size?($(r,kt.grid),$(i,kt.size),u=ce.name,h(r)&&E(h(r))):alert("Invalid file format")}catch(kt){alert("Error loading file: "+kt)}},Xt.readAsText(ce)},_.click()}Ba(()=>{p=new gf,v=new pf,h(r)||($(r,Array(h(i)*h(i)).fill(null)),p.addState(h(r))),S(),window.addEventListener("keydown",O)}),W0(()=>{typeof window<"u"&&window.removeEventListener("keydown",O)});function S(){$(m,p?.canUndo()??!1),$(y,p?.canRedo()??!1)}function E(_){p&&(p.addState(_),S())}function O(_){if(!(_.target instanceof HTMLInputElement||_.target instanceof HTMLTextAreaElement)){for(const[oe,ce]of Object.entries(fe))if(a1(_,ce)){_.preventDefault(),J(ce.action);break}}}function J(_){switch(_){case"select":$(o,!h(o)),h(o)&&($(l,!1),$(c,!1));break;case"square":$(n,"square");break;case"circle":$(n,"circle");break;case"quarter":h(n)==="quarter"?$(f,(h(f)+1)%4):($(n,"quarter"),$(f,0));break;case"halfCircle":h(n)==="halfCircle"?$(b,(h(b)+1)%4):($(n,"halfCircle"),$(b,0));break;case"fill":$(l,!h(l)),h(l)&&($(o,!1),$(c,!1));break;case"colorPicker":$(c,!h(c)),h(c)&&($(o,!1),$(l,!1));break;case"zoomIn":w();break;case"zoomOut":B();break;case"undo":be();break;case"redo":ue();break;case"cut":ge();break;case"copy":Le();break;case"paste":Ne();break;case"selectAll":Ce();break;case"deselect":Mt();break;case"delete":rt();break;case"rotateLeft":h(d).active&&It(!1);break;case"rotateRight":h(d).active&&It(!0);break;case"moveUp":h(d).active&&lt(0,-1);break;case"moveDown":h(d).active&&lt(0,1);break;case"moveLeft":h(d).active&&lt(-1,0);break;case"moveRight":h(d).active&&lt(1,0);break;case"colorLeft":D();break;case"colorRight":F();break;case"colorUp":g();break;case"colorDown":M();break}}function L(_){$(n,_.detail.shape)}function R(_){$(f,_.detail.rotation)}function Y(_){$(b,_.detail.rotation)}function q(_){$(a,_.detail.color)}async function ae(_){const oe=it.map(ce=>ce.rgb);$(r,await bf(_.detail.src,oe,h(i),h(i))),E(h(r)),_.detail.fileName?u=`${_.detail.fileName.replace(/\.[^/.]+$/,"")}.json`:u="dotsly.json"}function de(_){$(i,_.detail.size),$(r,null)}function C(_){$(c,_.detail.colorPickerMode)}function te(_){$(o,_.detail.selectMode),h(o)&&($(l,!1),$(c,!1))}function be(){if(p){const _=p.undo();_&&($(r,_),S())}}function ue(){if(p){const _=p.redo();_&&($(r,_),S())}}function j(_){$(d,_.detail.selection)}function K(_){$(r,_.detail.grid),h(r)&&E(h(r))}function ge(){if(h(d).active&&h(r)&&v){const _=v.cut(h(r),h(d),h(i));$(r,_),E(h(r)),$(d,{...h(d),active:!1})}}function Le(){h(d).active&&h(r)&&v&&v.copy(h(r),h(d),h(i))}function Ne(){if(h(r)&&v&&v.hasClipboardData()){const _=h(d).active?h(d).startX:0,oe=h(d).active?h(d).startY:0,ce=v.paste(h(r),_,oe,h(i),h(i));$(r,ce),E(h(r))}}function rt(){if(h(d).active&&h(r)&&v){const _=v.deleteSelection(h(r),h(d),h(i));$(r,_),E(h(r)),$(d,{...h(d),active:!1})}}function Ce(){$(d,{startX:0,startY:0,endX:h(i)-1,endY:h(i)-1,active:!0}),$(o,!0),$(l,!1),$(c,!1)}function Mt(){$(d,{...h(d),active:!1})}function It(_=!0){if(h(d).active&&h(r)&&v){const oe=v.rotateSelection(h(r),h(d),h(i),_);$(r,oe),E(h(r))}}function lt(_,oe){if(h(d).active&&h(r)&&v){const ce=v.moveSelection(h(r),h(d),_,oe,h(i),h(i));$(r,ce.grid),$(d,ce.selection),E(h(r))}}function Xe(_){$(a,_.detail.color),$(c,!1)}De();var Ge=mf();$l(_=>{ho.title="Dotsly"});var Yt=U(Ge);C1(Yt,{get selectedColor(){return h(a)},set selectedColor(_){$(a,_)},get selectedShape(){return h(n)},set selectedShape(_){$(n,_)},get paintMode(){return h(l)},set paintMode(_){$(l,_)},get selectMode(){return h(o)},set selectMode(_){$(o,_)},get colorPickerMode(){return h(c)},set colorPickerMode(_){$(c,_)},get quarterRotation(){return h(f)},set quarterRotation(_){$(f,_)},get halfCircleRotation(){return h(b)},set halfCircleRotation(_){$(b,_)},get size(){return h(i)},set size(_){$(i,_)},get canUndo(){return h(m)},set canUndo(_){$(m,_)},get canRedo(){return h(y)},set canRedo(_){$(y,_)},$$events:{shapeSelected:L,colorSelected:q,imageUploaded:ae,paintModeToggled:_=>$(l,_.detail.paintMode),colorPickerModeToggled:C,selectModeToggled:te,undo:be,redo:ue,zoomIn:w,zoomOut:B,quarterRotationChanged:R,halfCircleRotationChanged:Y,sizeChanged:de,save:z,load:k},$$legacy:!0});var Bn=se(Yt,2);{var Dn=_=>{x0(_,{get width(){return h(i)},get height(){return h(i)},get selectedShape(){return h(n)},get selectedColor(){return h(a)},get selectMode(){return h(o)},get grid(){return h(r)},get paintMode(){return h(l)},get colorPickerMode(){return h(c)},get zoom(){return h(s)},get quarterRotation(){return h(f)},get halfCircleRotation(){return h(b)},get selection(){return h(d)},$$events:{colorPicked:Xe,selectionChanged:j,gridChanged:K}})},qt=_=>{x0(_,{get width(){return h(i)},get height(){return h(i)},get selectedShape(){return h(n)},get selectedColor(){return h(a)},get selectMode(){return h(o)},get paintMode(){return h(l)},get colorPickerMode(){return h(c)},get zoom(){return h(s)},get quarterRotation(){return h(f)},get halfCircleRotation(){return h(b)},get selection(){return h(d)},$$events:{colorPicked:Xe,selectionChanged:j,gridChanged:K}})};ot(Bn,_=>{h(r)?_(Dn):_(qt,!1)})}H(Ge),ee(e,Ge),Be()}export{wf as component};
