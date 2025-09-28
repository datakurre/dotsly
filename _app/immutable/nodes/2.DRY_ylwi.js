import"../chunks/DsnmJJEf.js";import"../chunks/DXAwGQm7.js";import{i as za,a as Ga,c as Ya,d as Ia,n as qa,b as Xa,e as Te,o as tn,f as Q,g as zn,j as Ha}from"../chunks/Csy9xEDe.js";import{B as nn,w as Mt,aT as Gn,z as ut,h as J,aA as Yn,a as Zt,g as u,W as ue,x as Ua,H as ja,y as gn,A as Xe,J as ze,ag as Za,aI as Va,C as Qe,F as Wa,aU as At,aV as Et,D as Je,af as Fn,a8 as W,X as pn,aF as In,ax as qn,G as an,I as Xn,aW as Ka,aX as xt,M as Ja,an as et,aY as Qa,at as er,aZ as tr,aE as nr,a_ as ar,T as Hn,a$ as rr,E as lr,b0 as or,aH as sr,K as Un,b1 as ir,b2 as cr,av as fr,b3 as ur,b4 as dr,b5 as hr,b6 as br,b7 as gr,b8 as Fr,U as pr,b9 as mr,ba as vr,bb as kr,bc as yr,aa as jn,d as Z,L as _r,bd as Cr,p as ve,n as se,q as X,s as Y,R as E,t as Fe,m as V,o as ke,k as ge,l as be,v as ne,f as q,be as Vt,bf as Zn,bg as wr,bh as Mr,ab as Ar,bi as Er,bj as Br}from"../chunks/DckqTTcM.js";import{p as L,b as mn,i as $e,l as Le,s as je}from"../chunks/q0klybCy.js";import{i as ye}from"../chunks/BBao4eQ6.js";import{s as Oe}from"../chunks/M1l1I-Ar.js";function kt(e,t){return t}function Tr(e,t,n){for(var a=e.items,r=[],l=t.length,o=0;o<l;o++)tr(t[o].e,r,!0);var s=l>0&&r.length===0&&n!==null;if(s){var i=n.parentNode;nr(i),i.append(n),a.clear(),Ae(e,t[0].prev,t[l-1].next)}ar(r,()=>{for(var c=0;c<l;c++){var f=t[c];s||(a.delete(f.k),Ae(e,f.prev,f.next)),et(f.e,!s)}})}function yt(e,t,n,a,r,l=null){var o=e,s={flags:t,items:new Map,first:null},i=(t&Gn)!==0;if(i){var c=e;o=J?ut(Yn(c)):c.appendChild(nn())}J&&Zt();var f=null,g=!1,b=new Map,h=ue(()=>{var y=n();return qn(y)?y:y==null?[]:In(y)}),F,p;function v(){Dr(p,F,s,b,o,r,t,a,n),l!==null&&(F.length===0?f?an(f):f=Qe(()=>l(o)):f!==null&&Xn(f,()=>{f=null}))}Mt(()=>{p??=Hn,F=u(h);var y=F.length;if(g&&y===0)return;g=y===0;let S=!1;if(J){var x=Ua(o)===ja;x!==(y===0)&&(o=gn(),ut(o),Xe(!1),S=!0)}if(J){for(var C=null,T,m=0;m<y;m++){if(ze.nodeType===Za&&ze.data===Va){o=ze,S=!0,Xe(!1);break}var d=F[m],_=a(d,m);T=Wt(ze,s,C,null,d,_,m,r,t,n),s.items.set(_,T),C=T}y>0&&ut(gn())}if(J)y===0&&l&&(f=Qe(()=>l(o)));else if(Wa()){var M=new Set,k=Je;for(m=0;m<y;m+=1){d=F[m],_=a(d,m);var R=s.items.get(_)??b.get(_);R?(t&(At|Et))!==0&&Vn(R,d,m,t):(T=Wt(null,s,null,null,d,_,m,r,t,n,!0),b.set(_,T)),M.add(_)}for(const[D,N]of s.items)M.has(D)||k.skipped_effects.add(N.e);k.add_callback(v)}else v();S&&Xe(!0),u(h)}),J&&(o=ze)}function Dr(e,t,n,a,r,l,o,s,i){var c=(o&Qa)!==0,f=(o&(At|Et))!==0,g=t.length,b=n.items,h=n.first,F=h,p,v=null,y,S=[],x=[],C,T,m,d;if(c)for(d=0;d<g;d+=1)C=t[d],T=s(C,d),m=b.get(T),m!==void 0&&(m.a?.measure(),(y??=new Set).add(m));for(d=0;d<g;d+=1){if(C=t[d],T=s(C,d),m=b.get(T),m===void 0){var _=a.get(T);if(_!==void 0){a.delete(T),b.set(T,_);var M=v?v.next:F;Ae(n,v,_),Ae(n,_,M),Rt(_,M,r),v=_}else{var k=F?F.e.nodes_start:r;v=Wt(k,n,v,v===null?n.first:v.next,C,T,d,l,o,i)}b.set(T,v),S=[],x=[],F=v.next;continue}if(f&&Vn(m,C,d,o),(m.e.f&xt)!==0&&(an(m.e),c&&(m.a?.unfix(),(y??=new Set).delete(m))),m!==F){if(p!==void 0&&p.has(m)){if(S.length<x.length){var R=x[0],D;v=R.prev;var N=S[0],K=S[S.length-1];for(D=0;D<S.length;D+=1)Rt(S[D],R,r);for(D=0;D<x.length;D+=1)p.delete(x[D]);Ae(n,N.prev,K.next),Ae(n,v,N),Ae(n,K,R),F=R,v=K,d-=1,S=[],x=[]}else p.delete(m),Rt(m,F,r),Ae(n,m.prev,m.next),Ae(n,m,v===null?n.first:v.next),Ae(n,v,m),v=m;continue}for(S=[],x=[];F!==null&&F.k!==T;)(F.e.f&xt)===0&&(p??=new Set).add(F),x.push(F),F=F.next;if(F===null)continue;m=F}S.push(m),v=m,F=m.next}if(F!==null||p!==void 0){for(var O=p===void 0?[]:In(p);F!==null;)(F.e.f&xt)===0&&O.push(F),F=F.next;var B=O.length;if(B>0){var H=(o&Gn)!==0&&g===0?r:null;if(c){for(d=0;d<B;d+=1)O[d].a?.measure();for(d=0;d<B;d+=1)O[d].a?.fix()}Tr(n,O,H)}}c&&Ja(()=>{if(y!==void 0)for(m of y)m.a?.apply()}),e.first=n.first&&n.first.e,e.last=v&&v.e;for(var U of a.values())et(U.e);a.clear()}function Vn(e,t,n,a){(a&At)!==0&&Fn(e.v,t),(a&Et)!==0?Fn(e.i,n):e.i=n}function Wt(e,t,n,a,r,l,o,s,i,c,f){var g=(i&At)!==0,b=(i&Ka)===0,h=g?b?W(r,!1,!1):pn(r):r,F=(i&Et)===0?o:pn(o),p={i:F,v:h,k:l,a:null,e:null,prev:n,next:a};try{if(e===null){var v=document.createDocumentFragment();v.append(e=nn())}return p.e=Qe(()=>s(e,h,F,c),J),p.e.prev=n&&n.e,p.e.next=a&&a.e,n===null?f||(t.first=p):(n.next=p,n.e.next=p.e),a!==null&&(a.prev=p,a.e.prev=p.e),p}finally{}}function Rt(e,t,n){for(var a=e.next?e.next.e.nodes_start:n,r=t?t.e.nodes_start:n,l=e.e.nodes_start;l!==null&&l!==a;){var o=er(l);r.before(l),l=o}}function Ae(e,t,n){t===null?e.first=n:(t.next=n,t.e.next=n&&n.e),n!==null&&(n.prev=t,n.e.prev=t&&t.e)}function Sr(e,t,n,a,r,l){let o=J;J&&Zt();var s,i,c=null;J&&ze.nodeType===rr&&(c=ze,Zt());var f=J?ze:e,g;Mt(()=>{const b=t()||null;var h=or;b!==s&&(g&&(b===null?Xn(g,()=>{g=null,i=null}):b===i?an(g):et(g)),b&&b!==i&&(g=Qe(()=>{if(c=J?c:document.createElementNS(h,b),sr(c,c),a){J&&za(b)&&c.append(document.createComment(""));var F=J?Yn(c):c.appendChild(nn());J&&(F===null?Xe(!1):ut(F)),a(c,F)}Hn.nodes_end=c,f.before(c)})),s=b,s&&(i=s))},lr),o&&(Xe(!0),ut(f))}function xr(e,t){var n=void 0,a;Mt(()=>{n!==(n=t())&&(a&&(et(a),a=null),n&&(a=Qe(()=>{Un(()=>n(e))})))})}function Wn(e){var t,n,a="";if(typeof e=="string"||typeof e=="number")a+=e;else if(typeof e=="object")if(Array.isArray(e)){var r=e.length;for(t=0;t<r;t++)e[t]&&(n=Wn(e[t]))&&(a&&(a+=" "),a+=n)}else for(n in e)e[n]&&(a&&(a+=" "),a+=n);return a}function Rr(){for(var e,t,n=0,a="",r=arguments.length;n<r;n++)(e=arguments[n])&&(t=Wn(e))&&(a&&(a+=" "),a+=t);return a}function Pr(e){return typeof e=="object"?Rr(e):e??""}const vn=[...` 	
\r\f \v\uFEFF`];function Lr(e,t,n){var a=e==null?"":""+e;if(t&&(a=a?a+" "+t:t),n){for(var r in n)if(n[r])a=a?a+" "+r:r;else if(a.length)for(var l=r.length,o=0;(o=a.indexOf(r,o))>=0;){var s=o+l;(o===0||vn.includes(a[o-1]))&&(s===a.length||vn.includes(a[s]))?a=(o===0?"":a.substring(0,o))+a.substring(s+1):o=s}}return a===""?null:a}function kn(e,t=!1){var n=t?" !important;":";",a="";for(var r in e){var l=e[r];l!=null&&l!==""&&(a+=" "+r+": "+l+n)}return a}function Pt(e){return e[0]!=="-"||e[1]!=="-"?e.toLowerCase():e}function Or(e,t){if(t){var n="",a,r;if(Array.isArray(t)?(a=t[0],r=t[1]):a=t,e){e=String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();var l=!1,o=0,s=!1,i=[];a&&i.push(...Object.keys(a).map(Pt)),r&&i.push(...Object.keys(r).map(Pt));var c=0,f=-1;const p=e.length;for(var g=0;g<p;g++){var b=e[g];if(s?b==="/"&&e[g-1]==="*"&&(s=!1):l?l===b&&(l=!1):b==="/"&&e[g+1]==="*"?s=!0:b==='"'||b==="'"?l=b:b==="("?o++:b===")"&&o--,!s&&l===!1&&o===0){if(b===":"&&f===-1)f=g;else if(b===";"||g===p-1){if(f!==-1){var h=Pt(e.substring(c,f).trim());if(!i.includes(h)){b!==";"&&g++;var F=e.substring(c,g).trim();n+=" "+F+";"}}c=g+1,f=-1}}}}return a&&(n+=kn(a)),r&&(n+=kn(r,!0)),n=n.trim(),n===""?null:n}return e==null?null:String(e)}function Ee(e,t,n,a,r,l){var o=e.__className;if(J||o!==n||o===void 0){var s=Lr(n,a,l);(!J||s!==e.getAttribute("class"))&&(s==null?e.removeAttribute("class"):t?e.className=s:e.setAttribute("class",s)),e.__className=n}else if(l&&r!==l)for(var i in l){var c=!!l[i];(r==null||c!==!!r[i])&&e.classList.toggle(i,c)}return l}function Lt(e,t={},n,a){for(var r in n){var l=n[r];t[r]!==l&&(n[r]==null?e.style.removeProperty(r):e.style.setProperty(r,l,a))}}function Ge(e,t,n,a){var r=e.__style;if(J||r!==t){var l=Or(t,a);(!J||l!==e.getAttribute("style"))&&(l==null?e.removeAttribute("style"):e.style.cssText=l),e.__style=t}else a&&(Array.isArray(a)?(Lt(e,n?.[0],a[0]),Lt(e,n?.[1],a[1],"important")):Lt(e,n,a));return a}function Kt(e,t,n=!1){if(e.multiple){if(t==null)return;if(!qn(t))return ir();for(var a of e.options)a.selected=t.includes(yn(a));return}for(a of e.options){var r=yn(a);if(cr(r,t)){a.selected=!0;return}}(!n||t!==void 0)&&(e.selectedIndex=-1)}function Nr(e){var t=new MutationObserver(()=>{Kt(e,e.__value)});t.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),fr(()=>{t.disconnect()})}function yn(e){return"__value"in e?e.__value:e.value}const ct=Symbol("class"),ft=Symbol("style"),Kn=Symbol("is custom element"),Jn=Symbol("is html");function Qn(e){if(J){var t=!1,n=()=>{if(!t){if(t=!0,e.hasAttribute("value")){var a=e.value;oe(e,"value",null),e.value=a}if(e.hasAttribute("checked")){var r=e.checked;oe(e,"checked",null),e.checked=r}}};e.__on_r=n,mr(n),vr()}}function $r(e,t){t?e.hasAttribute("selected")||e.setAttribute("selected",""):e.removeAttribute("selected")}function oe(e,t,n,a){var r=ea(e);J&&(r[t]=e.getAttribute(t),t==="src"||t==="srcset"||t==="href"&&e.nodeName==="LINK")||r[t]!==(r[t]=n)&&(t==="loading"&&(e[kr]=n),n==null?e.removeAttribute(t):typeof n!="string"&&ta(e).includes(t)?e[t]=n:e.setAttribute(t,n))}function zr(e,t,n,a,r=!1,l=!1){if(J&&r&&e.tagName==="INPUT"){var o=e,s=o.type==="checkbox"?"defaultChecked":"defaultValue";s in n||Qn(o)}var i=ea(e),c=i[Kn],f=!i[Jn];let g=J&&c;g&&Xe(!1);var b=t||{},h=e.tagName==="OPTION";for(var F in t)F in n||(n[F]=null);n.class?n.class=Pr(n.class):n[ct]&&(n.class=null),n[ft]&&(n.style??=null);var p=ta(e);for(const m in n){let d=n[m];if(h&&m==="value"&&d==null){e.value=e.__value="",b[m]=d;continue}if(m==="class"){var v=e.namespaceURI==="http://www.w3.org/1999/xhtml";Ee(e,v,d,a,t?.[ct],n[ct]),b[m]=d,b[ct]=n[ct];continue}if(m==="style"){Ge(e,d,t?.[ft],n[ft]),b[m]=d,b[ft]=n[ft];continue}var y=b[m];if(!(d===y&&!(d===void 0&&e.hasAttribute(m)))){b[m]=d;var S=m[0]+m[1];if(S!=="$$")if(S==="on"){const _={},M="$$"+m;let k=m.slice(2);var x=Xa(k);if(Ga(k)&&(k=k.slice(0,-7),_.capture=!0),!x&&y){if(d!=null)continue;e.removeEventListener(k,b[M],_),b[M]=null}if(d!=null)if(x)e[`__${k}`]=d,Ia([k]);else{let R=function(D){b[m].call(this,D)};b[M]=Ya(k,e,R,_)}else x&&(e[`__${k}`]=void 0)}else if(m==="style")oe(e,m,d);else if(m==="autofocus")Fr(e,!!d);else if(!c&&(m==="__value"||m==="value"&&d!=null))e.value=e.__value=d;else if(m==="selected"&&h)$r(e,d);else{var C=m;f||(C=qa(C));var T=C==="defaultValue"||C==="defaultChecked";if(d==null&&!c&&!T)if(i[m]=null,C==="value"||C==="checked"){let _=e;const M=t===void 0;if(C==="value"){let k=_.defaultValue;_.removeAttribute(C),_.defaultValue=k,_.value=_.__value=M?k:null}else{let k=_.defaultChecked;_.removeAttribute(C),_.defaultChecked=k,_.checked=M?k:!1}}else e.removeAttribute(m);else T||p.includes(C)&&(c||typeof d!="string")?(e[C]=d,C in i&&(i[C]=pr)):typeof d!="function"&&oe(e,C,d)}}}return g&&Xe(!0),b}function _n(e,t,n=[],a=[],r,l=!1,o=!1){ur(n,a,s=>{var i=void 0,c={},f=e.nodeName==="SELECT",g=!1;if(Mt(()=>{var h=t(...s.map(u)),F=zr(e,i,h,r,l,o);g&&f&&"value"in h&&Kt(e,h.value);for(let v of Object.getOwnPropertySymbols(c))h[v]||et(c[v]);for(let v of Object.getOwnPropertySymbols(h)){var p=h[v];v.description===br&&(!i||p!==i[v])&&(c[v]&&et(c[v]),c[v]=Qe(()=>xr(e,()=>p))),F[v]=p}i=F}),f){var b=e;Un(()=>{Kt(b,i.value,!0),Nr(b)})}g=!0})}function ea(e){return e.__attributes??={[Kn]:e.nodeName.includes("-"),[Jn]:e.namespaceURI===dr}}var Cn=new Map;function ta(e){var t=e.getAttribute("is")||e.nodeName,n=Cn.get(t);if(n)return n;Cn.set(t,n=[]);for(var a,r=e,l=Element.prototype;l!==r;){a=gr(r);for(var o in a)a[o].set&&n.push(o);r=hr(r)}return n}function Gr(e,t,n=t){var a=new WeakSet;yr(e,"input",async r=>{var l=r?e.defaultValue:e.value;if(l=Ot(e)?Nt(l):l,n(l),Je!==null&&a.add(Je),await jn(),l!==(l=t())){var o=e.selectionStart,s=e.selectionEnd;e.value=l??"",s!==null&&(e.selectionStart=o,e.selectionEnd=Math.min(s,e.value.length))}}),(J&&e.defaultValue!==e.value||Z(t)==null&&e.value)&&(n(Ot(e)?Nt(e.value):e.value),Je!==null&&a.add(Je)),_r(()=>{var r=t();if(e===document.activeElement){var l=Cr??Je;if(a.has(l))return}Ot(e)&&r===Nt(e.value)||e.type==="date"&&!r&&!e.value||r!==e.value&&(e.value=r??"")})}function Ot(e){var t=e.type;return t==="number"||t==="range"}function Nt(e){return e===""?null:+e}const Yr=`Part,Color,Quantity,Is Spare
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
`,Ir=`Part,Color,Quantity,Is Spare
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
`,qr=`Part,Color,Quantity,Is Spare
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
`,Xr=`Part,Color,Quantity,Is Spare
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
`,Hr=`Part,Color,Quantity,Is Spare
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
`,Ur=`Part,Color,Quantity,Is Spare
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
`,jr=`id,name,rgb,is_trans,num_parts,num_sets,y1,y2
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
`,{min:Zr,max:Vr}=Math,He=(e,t=0,n=1)=>Zr(Vr(t,e),n),rn=e=>{e._clipped=!1,e._unclipped=e.slice(0);for(let t=0;t<=3;t++)t<3?((e[t]<0||e[t]>255)&&(e._clipped=!0),e[t]=He(e[t],0,255)):t===3&&(e[t]=He(e[t],0,1));return e},na={};for(let e of["Boolean","Number","String","Function","Array","Date","RegExp","Undefined","Null"])na[`[object ${e}]`]=e.toLowerCase();function I(e){return na[Object.prototype.toString.call(e)]||"object"}const G=(e,t=null)=>e.length>=3?Array.prototype.slice.call(e):I(e[0])=="object"&&t?t.split("").filter(n=>e[0][n]!==void 0).map(n=>e[0][n]):e[0].slice(0),at=e=>{if(e.length<2)return null;const t=e.length-1;return I(e[t])=="string"?e[t].toLowerCase():null},{PI:Bt,min:aa,max:ra}=Math,pe=e=>Math.round(e*100)/100,Jt=e=>Math.round(e*100)/100,xe=Bt*2,$t=Bt/3,Wr=Bt/180,Kr=180/Bt;function la(e){return[...e.slice(0,3).reverse(),...e.slice(3)]}const z={format:{},autodetect:[]};class w{constructor(...t){const n=this;if(I(t[0])==="object"&&t[0].constructor&&t[0].constructor===this.constructor)return t[0];let a=at(t),r=!1;if(!a){r=!0,z.sorted||(z.autodetect=z.autodetect.sort((l,o)=>o.p-l.p),z.sorted=!0);for(let l of z.autodetect)if(a=l.test(...t),a)break}if(z.format[a]){const l=z.format[a].apply(null,r?t:t.slice(0,-1));n._rgb=rn(l)}else throw new Error("unknown format: "+t);n._rgb.length===3&&n._rgb.push(1)}toString(){return I(this.hex)=="function"?this.hex():`[${this._rgb.join(",")}]`}}const Jr="3.1.2",$=(...e)=>new w(...e);$.version=Jr;const tt={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",gold:"#ffd700",goldenrod:"#daa520",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",laserlemon:"#ffff54",lavender:"#e6e6fa",lavenderblush:"#fff0f5",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrod:"#fafad2",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",maroon2:"#7f0000",maroon3:"#b03060",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",purple2:"#7f007f",purple3:"#a020f0",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"},Qr=/^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/,el=/^#?([A-Fa-f0-9]{8}|[A-Fa-f0-9]{4})$/,oa=e=>{if(e.match(Qr)){(e.length===4||e.length===7)&&(e=e.substr(1)),e.length===3&&(e=e.split(""),e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]);const t=parseInt(e,16),n=t>>16,a=t>>8&255,r=t&255;return[n,a,r,1]}if(e.match(el)){(e.length===5||e.length===9)&&(e=e.substr(1)),e.length===4&&(e=e.split(""),e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]+e[3]+e[3]);const t=parseInt(e,16),n=t>>24&255,a=t>>16&255,r=t>>8&255,l=Math.round((t&255)/255*100)/100;return[n,a,r,l]}throw new Error(`unknown hex color: ${e}`)},{round:Ft}=Math,sa=(...e)=>{let[t,n,a,r]=G(e,"rgba"),l=at(e)||"auto";r===void 0&&(r=1),l==="auto"&&(l=r<1?"rgba":"rgb"),t=Ft(t),n=Ft(n),a=Ft(a);let s="000000"+(t<<16|n<<8|a).toString(16);s=s.substr(s.length-6);let i="0"+Ft(r*255).toString(16);switch(i=i.substr(i.length-2),l.toLowerCase()){case"rgba":return`#${s}${i}`;case"argb":return`#${i}${s}`;default:return`#${s}`}};w.prototype.name=function(){const e=sa(this._rgb,"rgb");for(let t of Object.keys(tt))if(tt[t]===e)return t.toLowerCase();return e};z.format.named=e=>{if(e=e.toLowerCase(),tt[e])return oa(tt[e]);throw new Error("unknown color name: "+e)};z.autodetect.push({p:5,test:(e,...t)=>{if(!t.length&&I(e)==="string"&&tt[e.toLowerCase()])return"named"}});w.prototype.alpha=function(e,t=!1){return e!==void 0&&I(e)==="number"?t?(this._rgb[3]=e,this):new w([this._rgb[0],this._rgb[1],this._rgb[2],e],"rgb"):this._rgb[3]};w.prototype.clipped=function(){return this._rgb._clipped||!1};const Be={Kn:18,labWhitePoint:"d65",Xn:.95047,Yn:1,Zn:1.08883,kE:216/24389,kKE:8,kK:24389/27,RefWhiteRGB:{X:.95047,Y:1,Z:1.08883},MtxRGB2XYZ:{m00:.4124564390896922,m01:.21267285140562253,m02:.0193338955823293,m10:.357576077643909,m11:.715152155287818,m12:.11919202588130297,m20:.18043748326639894,m21:.07217499330655958,m22:.9503040785363679},MtxXYZ2RGB:{m00:3.2404541621141045,m01:-.9692660305051868,m02:.055643430959114726,m10:-1.5371385127977166,m11:1.8760108454466942,m12:-.2040259135167538,m20:-.498531409556016,m21:.041556017530349834,m22:1.0572251882231791},As:.9414285350000001,Bs:1.040417467,Cs:1.089532651,MtxAdaptMa:{m00:.8951,m01:-.7502,m02:.0389,m10:.2664,m11:1.7135,m12:-.0685,m20:-.1614,m21:.0367,m22:1.0296},MtxAdaptMaI:{m00:.9869929054667123,m01:.43230526972339456,m02:-.008528664575177328,m10:-.14705425642099013,m11:.5183602715367776,m12:.04004282165408487,m20:.15996265166373125,m21:.0492912282128556,m22:.9684866957875502}},tl=new Map([["a",[1.0985,.35585]],["b",[1.0985,.35585]],["c",[.98074,1.18232]],["d50",[.96422,.82521]],["d55",[.95682,.92149]],["d65",[.95047,1.08883]],["e",[1,1,1]],["f2",[.99186,.67393]],["f7",[.95041,1.08747]],["f11",[1.00962,.6435]],["icc",[.96422,.82521]]]);function Re(e){const t=tl.get(String(e).toLowerCase());if(!t)throw new Error("unknown Lab illuminant "+e);Be.labWhitePoint=e,Be.Xn=t[0],Be.Zn=t[1]}function dt(){return Be.labWhitePoint}const ln=(...e)=>{e=G(e,"lab");const[t,n,a]=e,[r,l,o]=nl(t,n,a),[s,i,c]=ia(r,l,o);return[s,i,c,e.length>3?e[3]:1]},nl=(e,t,n)=>{const{kE:a,kK:r,kKE:l,Xn:o,Yn:s,Zn:i}=Be,c=(e+16)/116,f=.002*t+c,g=c-.005*n,b=f*f*f,h=g*g*g,F=b>a?b:(116*f-16)/r,p=e>l?Math.pow((e+16)/116,3):e/r,v=h>a?h:(116*g-16)/r,y=F*o,S=p*s,x=v*i;return[y,S,x]},zt=e=>{const t=Math.sign(e);return e=Math.abs(e),(e<=.0031308?e*12.92:1.055*Math.pow(e,1/2.4)-.055)*t},ia=(e,t,n)=>{const{MtxAdaptMa:a,MtxAdaptMaI:r,MtxXYZ2RGB:l,RefWhiteRGB:o,Xn:s,Yn:i,Zn:c}=Be,f=s*a.m00+i*a.m10+c*a.m20,g=s*a.m01+i*a.m11+c*a.m21,b=s*a.m02+i*a.m12+c*a.m22,h=o.X*a.m00+o.Y*a.m10+o.Z*a.m20,F=o.X*a.m01+o.Y*a.m11+o.Z*a.m21,p=o.X*a.m02+o.Y*a.m12+o.Z*a.m22,v=(e*a.m00+t*a.m10+n*a.m20)*(h/f),y=(e*a.m01+t*a.m11+n*a.m21)*(F/g),S=(e*a.m02+t*a.m12+n*a.m22)*(p/b),x=v*r.m00+y*r.m10+S*r.m20,C=v*r.m01+y*r.m11+S*r.m21,T=v*r.m02+y*r.m12+S*r.m22,m=zt(x*l.m00+C*l.m10+T*l.m20),d=zt(x*l.m01+C*l.m11+T*l.m21),_=zt(x*l.m02+C*l.m12+T*l.m22);return[m*255,d*255,_*255]},on=(...e)=>{const[t,n,a,...r]=G(e,"rgb"),[l,o,s]=ca(t,n,a),[i,c,f]=al(l,o,s);return[i,c,f,...r.length>0&&r[0]<1?[r[0]]:[]]};function al(e,t,n){const{Xn:a,Yn:r,Zn:l,kE:o,kK:s}=Be,i=e/a,c=t/r,f=n/l,g=i>o?Math.pow(i,1/3):(s*i+16)/116,b=c>o?Math.pow(c,1/3):(s*c+16)/116,h=f>o?Math.pow(f,1/3):(s*f+16)/116;return[116*b-16,500*(g-b),200*(b-h)]}function Gt(e){const t=Math.sign(e);return e=Math.abs(e),(e<=.04045?e/12.92:Math.pow((e+.055)/1.055,2.4))*t}const ca=(e,t,n)=>{e=Gt(e/255),t=Gt(t/255),n=Gt(n/255);const{MtxRGB2XYZ:a,MtxAdaptMa:r,MtxAdaptMaI:l,Xn:o,Yn:s,Zn:i,As:c,Bs:f,Cs:g}=Be;let b=e*a.m00+t*a.m10+n*a.m20,h=e*a.m01+t*a.m11+n*a.m21,F=e*a.m02+t*a.m12+n*a.m22;const p=o*r.m00+s*r.m10+i*r.m20,v=o*r.m01+s*r.m11+i*r.m21,y=o*r.m02+s*r.m12+i*r.m22;let S=b*r.m00+h*r.m10+F*r.m20,x=b*r.m01+h*r.m11+F*r.m21,C=b*r.m02+h*r.m12+F*r.m22;return S*=p/c,x*=v/f,C*=y/g,b=S*l.m00+x*l.m10+C*l.m20,h=S*l.m01+x*l.m11+C*l.m21,F=S*l.m02+x*l.m12+C*l.m22,[b,h,F]};w.prototype.lab=function(){return on(this._rgb)};const rl=(...e)=>new w(...e,"lab");Object.assign($,{lab:rl,getLabWhitePoint:dt,setLabWhitePoint:Re});z.format.lab=ln;z.autodetect.push({p:2,test:(...e)=>{if(e=G(e,"lab"),I(e)==="array"&&e.length===3)return"lab"}});w.prototype.darken=function(e=1){const t=this,n=t.lab();return n[0]-=Be.Kn*e,new w(n,"lab").alpha(t.alpha(),!0)};w.prototype.brighten=function(e=1){return this.darken(-e)};w.prototype.darker=w.prototype.darken;w.prototype.brighter=w.prototype.brighten;w.prototype.get=function(e){const[t,n]=e.split("."),a=this[t]();if(n){const r=t.indexOf(n)-(t.substr(0,2)==="ok"?2:0);if(r>-1)return a[r];throw new Error(`unknown channel ${n} in mode ${t}`)}else return a};const{pow:ll}=Math,ol=1e-7,sl=20;w.prototype.luminance=function(e,t="rgb"){if(e!==void 0&&I(e)==="number"){if(e===0)return new w([0,0,0,this._rgb[3]],"rgb");if(e===1)return new w([255,255,255,this._rgb[3]],"rgb");let n=this.luminance(),a=sl;const r=(o,s)=>{const i=o.interpolate(s,.5,t),c=i.luminance();return Math.abs(e-c)<ol||!a--?i:c>e?r(o,i):r(i,s)},l=(n>e?r(new w([0,0,0]),this):r(this,new w([255,255,255]))).rgb();return new w([...l,this._rgb[3]])}return il(...this._rgb.slice(0,3))};const il=(e,t,n)=>(e=Yt(e),t=Yt(t),n=Yt(n),.2126*e+.7152*t+.0722*n),Yt=e=>(e/=255,e<=.03928?e/12.92:ll((e+.055)/1.055,2.4)),ce={},nt=(e,t,n=.5,...a)=>{let r=a[0]||"lrgb";if(!ce[r]&&!a.length&&(r=Object.keys(ce)[0]),!ce[r])throw new Error(`interpolation mode ${r} is not defined`);return I(e)!=="object"&&(e=new w(e)),I(t)!=="object"&&(t=new w(t)),ce[r](e,t,n).alpha(e.alpha()+n*(t.alpha()-e.alpha()))};w.prototype.mix=w.prototype.interpolate=function(e,t=.5,...n){return nt(this,e,t,...n)};w.prototype.premultiply=function(e=!1){const t=this._rgb,n=t[3];return e?(this._rgb=[t[0]*n,t[1]*n,t[2]*n,n],this):new w([t[0]*n,t[1]*n,t[2]*n,n],"rgb")};const{sin:cl,cos:fl}=Math,fa=(...e)=>{let[t,n,a]=G(e,"lch");return isNaN(a)&&(a=0),a=a*Wr,[t,fl(a)*n,cl(a)*n]},sn=(...e)=>{e=G(e,"lch");const[t,n,a]=e,[r,l,o]=fa(t,n,a),[s,i,c]=ln(r,l,o);return[s,i,c,e.length>3?e[3]:1]},ul=(...e)=>{const t=la(G(e,"hcl"));return sn(...t)},{sqrt:dl,atan2:hl,round:bl}=Math,ua=(...e)=>{const[t,n,a]=G(e,"lab"),r=dl(n*n+a*a);let l=(hl(a,n)*Kr+360)%360;return bl(r*1e4)===0&&(l=Number.NaN),[t,r,l]},cn=(...e)=>{const[t,n,a,...r]=G(e,"rgb"),[l,o,s]=on(t,n,a),[i,c,f]=ua(l,o,s);return[i,c,f,...r.length>0&&r[0]<1?[r[0]]:[]]};w.prototype.lch=function(){return cn(this._rgb)};w.prototype.hcl=function(){return la(cn(this._rgb))};const gl=(...e)=>new w(...e,"lch"),Fl=(...e)=>new w(...e,"hcl");Object.assign($,{lch:gl,hcl:Fl});z.format.lch=sn;z.format.hcl=ul;["lch","hcl"].forEach(e=>z.autodetect.push({p:2,test:(...t)=>{if(t=G(t,e),I(t)==="array"&&t.length===3)return e}}));w.prototype.saturate=function(e=1){const t=this,n=t.lch();return n[1]+=Be.Kn*e,n[1]<0&&(n[1]=0),new w(n,"lch").alpha(t.alpha(),!0)};w.prototype.desaturate=function(e=1){return this.saturate(-e)};w.prototype.set=function(e,t,n=!1){const[a,r]=e.split("."),l=this[a]();if(r){const o=a.indexOf(r)-(a.substr(0,2)==="ok"?2:0);if(o>-1){if(I(t)=="string")switch(t.charAt(0)){case"+":l[o]+=+t;break;case"-":l[o]+=+t;break;case"*":l[o]*=+t.substr(1);break;case"/":l[o]/=+t.substr(1);break;default:l[o]=+t}else if(I(t)==="number")l[o]=t;else throw new Error("unsupported value for Color.set");const s=new w(l,a);return n?(this._rgb=s._rgb,this):s}throw new Error(`unknown channel ${r} in mode ${a}`)}else return l};w.prototype.tint=function(e=.5,...t){return nt(this,"white",e,...t)};w.prototype.shade=function(e=.5,...t){return nt(this,"black",e,...t)};const pl=(e,t,n)=>{const a=e._rgb,r=t._rgb;return new w(a[0]+n*(r[0]-a[0]),a[1]+n*(r[1]-a[1]),a[2]+n*(r[2]-a[2]),"rgb")};ce.rgb=pl;const{sqrt:It,pow:Ve}=Math,ml=(e,t,n)=>{const[a,r,l]=e._rgb,[o,s,i]=t._rgb;return new w(It(Ve(a,2)*(1-n)+Ve(o,2)*n),It(Ve(r,2)*(1-n)+Ve(s,2)*n),It(Ve(l,2)*(1-n)+Ve(i,2)*n),"rgb")};ce.lrgb=ml;const vl=(e,t,n)=>{const a=e.lab(),r=t.lab();return new w(a[0]+n*(r[0]-a[0]),a[1]+n*(r[1]-a[1]),a[2]+n*(r[2]-a[2]),"lab")};ce.lab=vl;const rt=(e,t,n,a)=>{let r,l;a==="hsl"?(r=e.hsl(),l=t.hsl()):a==="hsv"?(r=e.hsv(),l=t.hsv()):a==="hcg"?(r=e.hcg(),l=t.hcg()):a==="hsi"?(r=e.hsi(),l=t.hsi()):a==="lch"||a==="hcl"?(a="hcl",r=e.hcl(),l=t.hcl()):a==="oklch"&&(r=e.oklch().reverse(),l=t.oklch().reverse());let o,s,i,c,f,g;(a.substr(0,1)==="h"||a==="oklch")&&([o,i,f]=r,[s,c,g]=l);let b,h,F,p;return!isNaN(o)&&!isNaN(s)?(s>o&&s-o>180?p=s-(o+360):s<o&&o-s>180?p=s+360-o:p=s-o,h=o+n*p):isNaN(o)?isNaN(s)?h=Number.NaN:(h=s,(f==1||f==0)&&a!="hsv"&&(b=c)):(h=o,(g==1||g==0)&&a!="hsv"&&(b=i)),b===void 0&&(b=i+n*(c-i)),F=f+n*(g-f),a==="oklch"?new w([F,b,h],a):new w([h,b,F],a)},da=(e,t,n)=>rt(e,t,n,"lch");ce.lch=da;ce.hcl=da;const kl=e=>{if(I(e)=="number"&&e>=0&&e<=16777215){const t=e>>16,n=e>>8&255,a=e&255;return[t,n,a,1]}throw new Error("unknown num color: "+e)},yl=(...e)=>{const[t,n,a]=G(e,"rgb");return(t<<16)+(n<<8)+a};w.prototype.num=function(){return yl(this._rgb)};const _l=(...e)=>new w(...e,"num");Object.assign($,{num:_l});z.format.num=kl;z.autodetect.push({p:5,test:(...e)=>{if(e.length===1&&I(e[0])==="number"&&e[0]>=0&&e[0]<=16777215)return"num"}});const Cl=(e,t,n)=>{const a=e.num(),r=t.num();return new w(a+n*(r-a),"num")};ce.num=Cl;const{floor:wl}=Math,Ml=(...e)=>{e=G(e,"hcg");let[t,n,a]=e,r,l,o;a=a*255;const s=n*255;if(n===0)r=l=o=a;else{t===360&&(t=0),t>360&&(t-=360),t<0&&(t+=360),t/=60;const i=wl(t),c=t-i,f=a*(1-n),g=f+s*(1-c),b=f+s*c,h=f+s;switch(i){case 0:[r,l,o]=[h,b,f];break;case 1:[r,l,o]=[g,h,f];break;case 2:[r,l,o]=[f,h,b];break;case 3:[r,l,o]=[f,g,h];break;case 4:[r,l,o]=[b,f,h];break;case 5:[r,l,o]=[h,f,g];break}}return[r,l,o,e.length>3?e[3]:1]},Al=(...e)=>{const[t,n,a]=G(e,"rgb"),r=aa(t,n,a),l=ra(t,n,a),o=l-r,s=o*100/255,i=r/(255-o)*100;let c;return o===0?c=Number.NaN:(t===l&&(c=(n-a)/o),n===l&&(c=2+(a-t)/o),a===l&&(c=4+(t-n)/o),c*=60,c<0&&(c+=360)),[c,s,i]};w.prototype.hcg=function(){return Al(this._rgb)};const El=(...e)=>new w(...e,"hcg");$.hcg=El;z.format.hcg=Ml;z.autodetect.push({p:1,test:(...e)=>{if(e=G(e,"hcg"),I(e)==="array"&&e.length===3)return"hcg"}});const Bl=(e,t,n)=>rt(e,t,n,"hcg");ce.hcg=Bl;const{cos:We}=Math,Tl=(...e)=>{e=G(e,"hsi");let[t,n,a]=e,r,l,o;return isNaN(t)&&(t=0),isNaN(n)&&(n=0),t>360&&(t-=360),t<0&&(t+=360),t/=360,t<1/3?(o=(1-n)/3,r=(1+n*We(xe*t)/We($t-xe*t))/3,l=1-(o+r)):t<2/3?(t-=1/3,r=(1-n)/3,l=(1+n*We(xe*t)/We($t-xe*t))/3,o=1-(r+l)):(t-=2/3,l=(1-n)/3,o=(1+n*We(xe*t)/We($t-xe*t))/3,r=1-(l+o)),r=He(a*r*3),l=He(a*l*3),o=He(a*o*3),[r*255,l*255,o*255,e.length>3?e[3]:1]},{min:Dl,sqrt:Sl,acos:xl}=Math,Rl=(...e)=>{let[t,n,a]=G(e,"rgb");t/=255,n/=255,a/=255;let r;const l=Dl(t,n,a),o=(t+n+a)/3,s=o>0?1-l/o:0;return s===0?r=NaN:(r=(t-n+(t-a))/2,r/=Sl((t-n)*(t-n)+(t-a)*(n-a)),r=xl(r),a>n&&(r=xe-r),r/=xe),[r*360,s,o]};w.prototype.hsi=function(){return Rl(this._rgb)};const Pl=(...e)=>new w(...e,"hsi");$.hsi=Pl;z.format.hsi=Tl;z.autodetect.push({p:2,test:(...e)=>{if(e=G(e,"hsi"),I(e)==="array"&&e.length===3)return"hsi"}});const Ll=(e,t,n)=>rt(e,t,n,"hsi");ce.hsi=Ll;const Qt=(...e)=>{e=G(e,"hsl");const[t,n,a]=e;let r,l,o;if(n===0)r=l=o=a*255;else{const s=[0,0,0],i=[0,0,0],c=a<.5?a*(1+n):a+n-a*n,f=2*a-c,g=t/360;s[0]=g+1/3,s[1]=g,s[2]=g-1/3;for(let b=0;b<3;b++)s[b]<0&&(s[b]+=1),s[b]>1&&(s[b]-=1),6*s[b]<1?i[b]=f+(c-f)*6*s[b]:2*s[b]<1?i[b]=c:3*s[b]<2?i[b]=f+(c-f)*(2/3-s[b])*6:i[b]=f;[r,l,o]=[i[0]*255,i[1]*255,i[2]*255]}return e.length>3?[r,l,o,e[3]]:[r,l,o,1]},ha=(...e)=>{e=G(e,"rgba");let[t,n,a]=e;t/=255,n/=255,a/=255;const r=aa(t,n,a),l=ra(t,n,a),o=(l+r)/2;let s,i;return l===r?(s=0,i=Number.NaN):s=o<.5?(l-r)/(l+r):(l-r)/(2-l-r),t==l?i=(n-a)/(l-r):n==l?i=2+(a-t)/(l-r):a==l&&(i=4+(t-n)/(l-r)),i*=60,i<0&&(i+=360),e.length>3&&e[3]!==void 0?[i,s,o,e[3]]:[i,s,o]};w.prototype.hsl=function(){return ha(this._rgb)};const Ol=(...e)=>new w(...e,"hsl");$.hsl=Ol;z.format.hsl=Qt;z.autodetect.push({p:2,test:(...e)=>{if(e=G(e,"hsl"),I(e)==="array"&&e.length===3)return"hsl"}});const Nl=(e,t,n)=>rt(e,t,n,"hsl");ce.hsl=Nl;const{floor:$l}=Math,zl=(...e)=>{e=G(e,"hsv");let[t,n,a]=e,r,l,o;if(a*=255,n===0)r=l=o=a;else{t===360&&(t=0),t>360&&(t-=360),t<0&&(t+=360),t/=60;const s=$l(t),i=t-s,c=a*(1-n),f=a*(1-n*i),g=a*(1-n*(1-i));switch(s){case 0:[r,l,o]=[a,g,c];break;case 1:[r,l,o]=[f,a,c];break;case 2:[r,l,o]=[c,a,g];break;case 3:[r,l,o]=[c,f,a];break;case 4:[r,l,o]=[g,c,a];break;case 5:[r,l,o]=[a,c,f];break}}return[r,l,o,e.length>3?e[3]:1]},{min:Gl,max:Yl}=Math,Il=(...e)=>{e=G(e,"rgb");let[t,n,a]=e;const r=Gl(t,n,a),l=Yl(t,n,a),o=l-r;let s,i,c;return c=l/255,l===0?(s=Number.NaN,i=0):(i=o/l,t===l&&(s=(n-a)/o),n===l&&(s=2+(a-t)/o),a===l&&(s=4+(t-n)/o),s*=60,s<0&&(s+=360)),[s,i,c]};w.prototype.hsv=function(){return Il(this._rgb)};const ql=(...e)=>new w(...e,"hsv");$.hsv=ql;z.format.hsv=zl;z.autodetect.push({p:2,test:(...e)=>{if(e=G(e,"hsv"),I(e)==="array"&&e.length===3)return"hsv"}});const Xl=(e,t,n)=>rt(e,t,n,"hsv");ce.hsv=Xl;function _t(e,t){let n=e.length;Array.isArray(e[0])||(e=[e]),Array.isArray(t[0])||(t=t.map(o=>[o]));let a=t[0].length,r=t[0].map((o,s)=>t.map(i=>i[s])),l=e.map(o=>r.map(s=>Array.isArray(o)?o.reduce((i,c,f)=>i+c*(s[f]||0),0):s.reduce((i,c)=>i+c*o,0)));return n===1&&(l=l[0]),a===1?l.map(o=>o[0]):l}const fn=(...e)=>{e=G(e,"lab");const[t,n,a,...r]=e,[l,o,s]=Hl([t,n,a]),[i,c,f]=ia(l,o,s);return[i,c,f,...r.length>0&&r[0]<1?[r[0]]:[]]};function Hl(e){var t=[[1.2268798758459243,-.5578149944602171,.2813910456659647],[-.0405757452148008,1.112286803280317,-.0717110580655164],[-.0763729366746601,-.4214933324022432,1.5869240198367816]],n=[[1,.3963377773761749,.2158037573099136],[1,-.1055613458156586,-.0638541728258133],[1,-.0894841775298119,-1.2914855480194092]],a=_t(n,e);return _t(t,a.map(r=>r**3))}const un=(...e)=>{const[t,n,a,...r]=G(e,"rgb"),l=ca(t,n,a);return[...Ul(l),...r.length>0&&r[0]<1?[r[0]]:[]]};function Ul(e){const t=[[.819022437996703,.3619062600528904,-.1288737815209879],[.0329836539323885,.9292868615863434,.0361446663506424],[.0481771893596242,.2642395317527308,.6335478284694309]],n=[[.210454268309314,.7936177747023054,-.0040720430116193],[1.9779985324311684,-2.42859224204858,.450593709617411],[.0259040424655478,.7827717124575296,-.8086757549230774]],a=_t(t,e);return _t(n,a.map(r=>Math.cbrt(r)))}w.prototype.oklab=function(){return un(this._rgb)};const jl=(...e)=>new w(...e,"oklab");Object.assign($,{oklab:jl});z.format.oklab=fn;z.autodetect.push({p:2,test:(...e)=>{if(e=G(e,"oklab"),I(e)==="array"&&e.length===3)return"oklab"}});const Zl=(e,t,n)=>{const a=e.oklab(),r=t.oklab();return new w(a[0]+n*(r[0]-a[0]),a[1]+n*(r[1]-a[1]),a[2]+n*(r[2]-a[2]),"oklab")};ce.oklab=Zl;const Vl=(e,t,n)=>rt(e,t,n,"oklch");ce.oklch=Vl;const{pow:qt,sqrt:Xt,PI:Ht,cos:wn,sin:Mn,atan2:Wl}=Math,Kl=(e,t="lrgb",n=null)=>{const a=e.length;n||(n=Array.from(new Array(a)).map(()=>1));const r=a/n.reduce(function(g,b){return g+b});if(n.forEach((g,b)=>{n[b]*=r}),e=e.map(g=>new w(g)),t==="lrgb")return Jl(e,n);const l=e.shift(),o=l.get(t),s=[];let i=0,c=0;for(let g=0;g<o.length;g++)if(o[g]=(o[g]||0)*n[0],s.push(isNaN(o[g])?0:n[0]),t.charAt(g)==="h"&&!isNaN(o[g])){const b=o[g]/180*Ht;i+=wn(b)*n[0],c+=Mn(b)*n[0]}let f=l.alpha()*n[0];e.forEach((g,b)=>{const h=g.get(t);f+=g.alpha()*n[b+1];for(let F=0;F<o.length;F++)if(!isNaN(h[F]))if(s[F]+=n[b+1],t.charAt(F)==="h"){const p=h[F]/180*Ht;i+=wn(p)*n[b+1],c+=Mn(p)*n[b+1]}else o[F]+=h[F]*n[b+1]});for(let g=0;g<o.length;g++)if(t.charAt(g)==="h"){let b=Wl(c/s[g],i/s[g])/Ht*180;for(;b<0;)b+=360;for(;b>=360;)b-=360;o[g]=b}else o[g]=o[g]/s[g];return f/=a,new w(o,t).alpha(f>.99999?1:f,!0)},Jl=(e,t)=>{const n=e.length,a=[0,0,0,0];for(let r=0;r<e.length;r++){const l=e[r],o=t[r]/n,s=l._rgb;a[0]+=qt(s[0],2)*o,a[1]+=qt(s[1],2)*o,a[2]+=qt(s[2],2)*o,a[3]+=s[3]*o}return a[0]=Xt(a[0]),a[1]=Xt(a[1]),a[2]=Xt(a[2]),a[3]>.9999999&&(a[3]=1),new w(rn(a))},{pow:Ql}=Math;function Ct(e){let t="rgb",n=$("#ccc"),a=0,r=[0,1],l=[],o=[0,0],s=!1,i=[],c=!1,f=0,g=1,b=!1,h={},F=!0,p=1;const v=function(d){if(d=d||["#fff","#000"],d&&I(d)==="string"&&$.brewer&&$.brewer[d.toLowerCase()]&&(d=$.brewer[d.toLowerCase()]),I(d)==="array"){d.length===1&&(d=[d[0],d[0]]),d=d.slice(0);for(let _=0;_<d.length;_++)d[_]=$(d[_]);l.length=0;for(let _=0;_<d.length;_++)l.push(_/(d.length-1))}return T(),i=d},y=function(d){if(s!=null){const _=s.length-1;let M=0;for(;M<_&&d>=s[M];)M++;return M-1}return 0};let S=d=>d,x=d=>d;const C=function(d,_){let M,k;if(_==null&&(_=!1),isNaN(d)||d===null)return n;_?k=d:s&&s.length>2?k=y(d)/(s.length-2):g!==f?k=(d-f)/(g-f):k=1,k=x(k),_||(k=S(k)),p!==1&&(k=Ql(k,p)),k=o[0]+k*(1-o[0]-o[1]),k=He(k,0,1);const R=Math.floor(k*1e4);if(F&&h[R])M=h[R];else{if(I(i)==="array")for(let D=0;D<l.length;D++){const N=l[D];if(k<=N){M=i[D];break}if(k>=N&&D===l.length-1){M=i[D];break}if(k>N&&k<l[D+1]){k=(k-N)/(l[D+1]-N),M=$.interpolate(i[D],i[D+1],k,t);break}}else I(i)==="function"&&(M=i(k));F&&(h[R]=M)}return M};var T=()=>h={};v(e);const m=function(d){const _=$(C(d));return c&&_[c]?_[c]():_};return m.classes=function(d){if(d!=null){if(I(d)==="array")s=d,r=[d[0],d[d.length-1]];else{const _=$.analyze(r);d===0?s=[_.min,_.max]:s=$.limits(_,"e",d)}return m}return s},m.domain=function(d){if(!arguments.length)return r;f=d[0],g=d[d.length-1],l=[];const _=i.length;if(d.length===_&&f!==g)for(let M of Array.from(d))l.push((M-f)/(g-f));else{for(let M=0;M<_;M++)l.push(M/(_-1));if(d.length>2){const M=d.map((R,D)=>D/(d.length-1)),k=d.map(R=>(R-f)/(g-f));k.every((R,D)=>M[D]===R)||(x=R=>{if(R<=0||R>=1)return R;let D=0;for(;R>=k[D+1];)D++;const N=(R-k[D])/(k[D+1]-k[D]);return M[D]+N*(M[D+1]-M[D])})}}return r=[f,g],m},m.mode=function(d){return arguments.length?(t=d,T(),m):t},m.range=function(d,_){return v(d),m},m.out=function(d){return c=d,m},m.spread=function(d){return arguments.length?(a=d,m):a},m.correctLightness=function(d){return d==null&&(d=!0),b=d,T(),b?S=function(_){const M=C(0,!0).lab()[0],k=C(1,!0).lab()[0],R=M>k;let D=C(_,!0).lab()[0];const N=M+(k-M)*_;let K=D-N,O=0,B=1,H=20;for(;Math.abs(K)>.01&&H-- >0;)(function(){return R&&(K*=-1),K<0?(O=_,_+=(B-_)*.5):(B=_,_+=(O-_)*.5),D=C(_,!0).lab()[0],K=D-N})();return _}:S=_=>_,m},m.padding=function(d){return d!=null?(I(d)==="number"&&(d=[d,d]),o=d,m):o},m.colors=function(d,_){arguments.length<2&&(_="hex");let M=[];if(arguments.length===0)M=i.slice(0);else if(d===1)M=[m(.5)];else if(d>1){const k=r[0],R=r[1]-k;M=eo(0,d).map(D=>m(k+D/(d-1)*R))}else{e=[];let k=[];if(s&&s.length>2)for(let R=1,D=s.length,N=1<=D;N?R<D:R>D;N?R++:R--)k.push((s[R-1]+s[R])*.5);else k=r;M=k.map(R=>m(R))}return $[_]&&(M=M.map(k=>k[_]())),M},m.cache=function(d){return d!=null?(F=d,m):F},m.gamma=function(d){return d!=null?(p=d,m):p},m.nodata=function(d){return d!=null?(n=$(d),m):n},m}function eo(e,t,n){let a=[],r=e<t,l=t;for(let o=e;r?o<l:o>l;r?o++:o--)a.push(o);return a}const to=function(e){let t=[1,1];for(let n=1;n<e;n++){let a=[1];for(let r=1;r<=t.length;r++)a[r]=(t[r]||0)+t[r-1];t=a}return t},no=function(e){let t,n,a,r;if(e=e.map(l=>new w(l)),e.length===2)[n,a]=e.map(l=>l.lab()),t=function(l){const o=[0,1,2].map(s=>n[s]+l*(a[s]-n[s]));return new w(o,"lab")};else if(e.length===3)[n,a,r]=e.map(l=>l.lab()),t=function(l){const o=[0,1,2].map(s=>(1-l)*(1-l)*n[s]+2*(1-l)*l*a[s]+l*l*r[s]);return new w(o,"lab")};else if(e.length===4){let l;[n,a,r,l]=e.map(o=>o.lab()),t=function(o){const s=[0,1,2].map(i=>(1-o)*(1-o)*(1-o)*n[i]+3*(1-o)*(1-o)*o*a[i]+3*(1-o)*o*o*r[i]+o*o*o*l[i]);return new w(s,"lab")}}else if(e.length>=5){let l,o,s;l=e.map(i=>i.lab()),s=e.length-1,o=to(s),t=function(i){const c=1-i,f=[0,1,2].map(g=>l.reduce((b,h,F)=>b+o[F]*c**(s-F)*i**F*h[g],0));return new w(f,"lab")}}else throw new RangeError("No point in running bezier with only one color.");return t},ao=e=>{const t=no(e);return t.scale=()=>Ct(t),t},{round:ba}=Math;w.prototype.rgb=function(e=!0){return e===!1?this._rgb.slice(0,3):this._rgb.slice(0,3).map(ba)};w.prototype.rgba=function(e=!0){return this._rgb.slice(0,4).map((t,n)=>n<3?e===!1?t:ba(t):t)};const ro=(...e)=>new w(...e,"rgb");Object.assign($,{rgb:ro});z.format.rgb=(...e)=>{const t=G(e,"rgba");return t[3]===void 0&&(t[3]=1),t};z.autodetect.push({p:3,test:(...e)=>{if(e=G(e,"rgba"),I(e)==="array"&&(e.length===3||e.length===4&&I(e[3])=="number"&&e[3]>=0&&e[3]<=1))return"rgb"}});const we=(e,t,n)=>{if(!we[n])throw new Error("unknown blend mode "+n);return we[n](e,t)},Ye=e=>(t,n)=>{const a=$(n).rgb(),r=$(t).rgb();return $.rgb(e(a,r))},Ie=e=>(t,n)=>{const a=[];return a[0]=e(t[0],n[0]),a[1]=e(t[1],n[1]),a[2]=e(t[2],n[2]),a},lo=e=>e,oo=(e,t)=>e*t/255,so=(e,t)=>e>t?t:e,io=(e,t)=>e>t?e:t,co=(e,t)=>255*(1-(1-e/255)*(1-t/255)),fo=(e,t)=>t<128?2*e*t/255:255*(1-2*(1-e/255)*(1-t/255)),uo=(e,t)=>255*(1-(1-t/255)/(e/255)),ho=(e,t)=>e===255?255:(e=255*(t/255)/(1-e/255),e>255?255:e);we.normal=Ye(Ie(lo));we.multiply=Ye(Ie(oo));we.screen=Ye(Ie(co));we.overlay=Ye(Ie(fo));we.darken=Ye(Ie(so));we.lighten=Ye(Ie(io));we.dodge=Ye(Ie(ho));we.burn=Ye(Ie(uo));const{pow:bo,sin:go,cos:Fo}=Math;function po(e=300,t=-1.5,n=1,a=1,r=[0,1]){let l=0,o;I(r)==="array"?o=r[1]-r[0]:(o=0,r=[r,r]);const s=function(i){const c=xe*((e+120)/360+t*i),f=bo(r[0]+o*i,a),b=(l!==0?n[0]+i*l:n)*f*(1-f)/2,h=Fo(c),F=go(c),p=f+b*(-.14861*h+1.78277*F),v=f+b*(-.29227*h-.90649*F),y=f+b*(1.97294*h);return $(rn([p*255,v*255,y*255,1]))};return s.start=function(i){return i==null?e:(e=i,s)},s.rotations=function(i){return i==null?t:(t=i,s)},s.gamma=function(i){return i==null?a:(a=i,s)},s.hue=function(i){return i==null?n:(n=i,I(n)==="array"?(l=n[1]-n[0],l===0&&(n=n[1])):l=0,s)},s.lightness=function(i){return i==null?r:(I(i)==="array"?(r=i,o=i[1]-i[0]):(r=[i,i],o=0),s)},s.scale=()=>$.scale(s),s.hue(n),s}const mo="0123456789abcdef",{floor:vo,random:ko}=Math,yo=()=>{let e="#";for(let t=0;t<6;t++)e+=mo.charAt(vo(ko()*16));return new w(e,"hex")},{log:An,pow:_o,floor:Co,abs:wo}=Math;function ga(e,t=null){const n={min:Number.MAX_VALUE,max:Number.MAX_VALUE*-1,sum:0,values:[],count:0};return I(e)==="object"&&(e=Object.values(e)),e.forEach(a=>{t&&I(a)==="object"&&(a=a[t]),a!=null&&!isNaN(a)&&(n.values.push(a),n.sum+=a,a<n.min&&(n.min=a),a>n.max&&(n.max=a),n.count+=1)}),n.domain=[n.min,n.max],n.limits=(a,r)=>Fa(n,a,r),n}function Fa(e,t="equal",n=7){I(e)=="array"&&(e=ga(e));const{min:a,max:r}=e,l=e.values.sort((s,i)=>s-i);if(n===1)return[a,r];const o=[];if(t.substr(0,1)==="c"&&(o.push(a),o.push(r)),t.substr(0,1)==="e"){o.push(a);for(let s=1;s<n;s++)o.push(a+s/n*(r-a));o.push(r)}else if(t.substr(0,1)==="l"){if(a<=0)throw new Error("Logarithmic scales are only possible for values > 0");const s=Math.LOG10E*An(a),i=Math.LOG10E*An(r);o.push(a);for(let c=1;c<n;c++)o.push(_o(10,s+c/n*(i-s)));o.push(r)}else if(t.substr(0,1)==="q"){o.push(a);for(let s=1;s<n;s++){const i=(l.length-1)*s/n,c=Co(i);if(c===i)o.push(l[c]);else{const f=i-c;o.push(l[c]*(1-f)+l[c+1]*f)}}o.push(r)}else if(t.substr(0,1)==="k"){let s;const i=l.length,c=new Array(i),f=new Array(n);let g=!0,b=0,h=null;h=[],h.push(a);for(let v=1;v<n;v++)h.push(a+v/n*(r-a));for(h.push(r);g;){for(let y=0;y<n;y++)f[y]=0;for(let y=0;y<i;y++){const S=l[y];let x=Number.MAX_VALUE,C;for(let T=0;T<n;T++){const m=wo(h[T]-S);m<x&&(x=m,C=T),f[C]++,c[y]=C}}const v=new Array(n);for(let y=0;y<n;y++)v[y]=null;for(let y=0;y<i;y++)s=c[y],v[s]===null?v[s]=l[y]:v[s]+=l[y];for(let y=0;y<n;y++)v[y]*=1/f[y];g=!1;for(let y=0;y<n;y++)if(v[y]!==h[y]){g=!0;break}h=v,b++,b>200&&(g=!1)}const F={};for(let v=0;v<n;v++)F[v]=[];for(let v=0;v<i;v++)s=c[v],F[s].push(l[v]);let p=[];for(let v=0;v<n;v++)p.push(F[v][0]),p.push(F[v][F[v].length-1]);p=p.sort((v,y)=>v-y),o.push(p[0]);for(let v=1;v<p.length;v+=2){const y=p[v];!isNaN(y)&&o.indexOf(y)===-1&&o.push(y)}}return o}const Mo=(e,t)=>{e=new w(e),t=new w(t);const n=e.luminance(),a=t.luminance();return n>a?(n+.05)/(a+.05):(a+.05)/(n+.05)};/**
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
 */const En=.027,Ao=5e-4,Eo=.1,Bn=1.14,pt=.022,Tn=1.414,Bo=(e,t)=>{e=new w(e),t=new w(t),e.alpha()<1&&(e=nt(t,e,e.alpha(),"rgb"));const n=Dn(...e.rgb()),a=Dn(...t.rgb()),r=n>=pt?n:n+Math.pow(pt-n,Tn),l=a>=pt?a:a+Math.pow(pt-a,Tn),o=Math.pow(l,.56)-Math.pow(r,.57),s=Math.pow(l,.65)-Math.pow(r,.62),i=Math.abs(l-r)<Ao?0:r<l?o*Bn:s*Bn;return(Math.abs(i)<Eo?0:i>0?i-En:i+En)*100};function Dn(e,t,n){return .2126729*Math.pow(e/255,2.4)+.7151522*Math.pow(t/255,2.4)+.072175*Math.pow(n/255,2.4)}const{sqrt:Se,pow:re,min:To,max:Do,atan2:Sn,abs:xn,cos:mt,sin:Rn,exp:So,PI:Pn}=Math;function xo(e,t,n=1,a=1,r=1){var l=function(he){return 360*he/(2*Pn)},o=function(he){return 2*Pn*he/360};e=new w(e),t=new w(t);const[s,i,c]=Array.from(e.lab()),[f,g,b]=Array.from(t.lab()),h=(s+f)/2,F=Se(re(i,2)+re(c,2)),p=Se(re(g,2)+re(b,2)),v=(F+p)/2,y=.5*(1-Se(re(v,7)/(re(v,7)+re(25,7)))),S=i*(1+y),x=g*(1+y),C=Se(re(S,2)+re(c,2)),T=Se(re(x,2)+re(b,2)),m=(C+T)/2,d=l(Sn(c,S)),_=l(Sn(b,x)),M=d>=0?d:d+360,k=_>=0?_:_+360,R=xn(M-k)>180?(M+k+360)/2:(M+k)/2,D=1-.17*mt(o(R-30))+.24*mt(o(2*R))+.32*mt(o(3*R+6))-.2*mt(o(4*R-63));let N=k-M;N=xn(N)<=180?N:k<=M?N+360:N-360,N=2*Se(C*T)*Rn(o(N)/2);const K=f-s,O=T-C,B=1+.015*re(h-50,2)/Se(20+re(h-50,2)),H=1+.045*m,U=1+.015*m*D,ae=30*So(-re((R-275)/25,2)),j=-(2*Se(re(m,7)/(re(m,7)+re(25,7))))*Rn(2*o(ae)),de=Se(re(K/(n*B),2)+re(O/(a*H),2)+re(N/(r*U),2)+j*(O/(a*H))*(N/(r*U)));return Do(0,To(100,de))}function Ro(e,t,n="lab"){e=new w(e),t=new w(t);const a=e.get(n),r=t.get(n);let l=0;for(let o in a){const s=(a[o]||0)-(r[o]||0);l+=s*s}return Math.sqrt(l)}const Po=(...e)=>{try{return new w(...e),!0}catch{return!1}},Lo={cool(){return Ct([$.hsl(180,1,.9),$.hsl(250,.7,.4)])},hot(){return Ct(["#000","#f00","#ff0","#fff"]).mode("rgb")}},en={OrRd:["#fff7ec","#fee8c8","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#b30000","#7f0000"],PuBu:["#fff7fb","#ece7f2","#d0d1e6","#a6bddb","#74a9cf","#3690c0","#0570b0","#045a8d","#023858"],BuPu:["#f7fcfd","#e0ecf4","#bfd3e6","#9ebcda","#8c96c6","#8c6bb1","#88419d","#810f7c","#4d004b"],Oranges:["#fff5eb","#fee6ce","#fdd0a2","#fdae6b","#fd8d3c","#f16913","#d94801","#a63603","#7f2704"],BuGn:["#f7fcfd","#e5f5f9","#ccece6","#99d8c9","#66c2a4","#41ae76","#238b45","#006d2c","#00441b"],YlOrBr:["#ffffe5","#fff7bc","#fee391","#fec44f","#fe9929","#ec7014","#cc4c02","#993404","#662506"],YlGn:["#ffffe5","#f7fcb9","#d9f0a3","#addd8e","#78c679","#41ab5d","#238443","#006837","#004529"],Reds:["#fff5f0","#fee0d2","#fcbba1","#fc9272","#fb6a4a","#ef3b2c","#cb181d","#a50f15","#67000d"],RdPu:["#fff7f3","#fde0dd","#fcc5c0","#fa9fb5","#f768a1","#dd3497","#ae017e","#7a0177","#49006a"],Greens:["#f7fcf5","#e5f5e0","#c7e9c0","#a1d99b","#74c476","#41ab5d","#238b45","#006d2c","#00441b"],YlGnBu:["#ffffd9","#edf8b1","#c7e9b4","#7fcdbb","#41b6c4","#1d91c0","#225ea8","#253494","#081d58"],Purples:["#fcfbfd","#efedf5","#dadaeb","#bcbddc","#9e9ac8","#807dba","#6a51a3","#54278f","#3f007d"],GnBu:["#f7fcf0","#e0f3db","#ccebc5","#a8ddb5","#7bccc4","#4eb3d3","#2b8cbe","#0868ac","#084081"],Greys:["#ffffff","#f0f0f0","#d9d9d9","#bdbdbd","#969696","#737373","#525252","#252525","#000000"],YlOrRd:["#ffffcc","#ffeda0","#fed976","#feb24c","#fd8d3c","#fc4e2a","#e31a1c","#bd0026","#800026"],PuRd:["#f7f4f9","#e7e1ef","#d4b9da","#c994c7","#df65b0","#e7298a","#ce1256","#980043","#67001f"],Blues:["#f7fbff","#deebf7","#c6dbef","#9ecae1","#6baed6","#4292c6","#2171b5","#08519c","#08306b"],PuBuGn:["#fff7fb","#ece2f0","#d0d1e6","#a6bddb","#67a9cf","#3690c0","#02818a","#016c59","#014636"],Viridis:["#440154","#482777","#3f4a8a","#31678e","#26838f","#1f9d8a","#6cce5a","#b6de2b","#fee825"],Spectral:["#9e0142","#d53e4f","#f46d43","#fdae61","#fee08b","#ffffbf","#e6f598","#abdda4","#66c2a5","#3288bd","#5e4fa2"],RdYlGn:["#a50026","#d73027","#f46d43","#fdae61","#fee08b","#ffffbf","#d9ef8b","#a6d96a","#66bd63","#1a9850","#006837"],RdBu:["#67001f","#b2182b","#d6604d","#f4a582","#fddbc7","#f7f7f7","#d1e5f0","#92c5de","#4393c3","#2166ac","#053061"],PiYG:["#8e0152","#c51b7d","#de77ae","#f1b6da","#fde0ef","#f7f7f7","#e6f5d0","#b8e186","#7fbc41","#4d9221","#276419"],PRGn:["#40004b","#762a83","#9970ab","#c2a5cf","#e7d4e8","#f7f7f7","#d9f0d3","#a6dba0","#5aae61","#1b7837","#00441b"],RdYlBu:["#a50026","#d73027","#f46d43","#fdae61","#fee090","#ffffbf","#e0f3f8","#abd9e9","#74add1","#4575b4","#313695"],BrBG:["#543005","#8c510a","#bf812d","#dfc27d","#f6e8c3","#f5f5f5","#c7eae5","#80cdc1","#35978f","#01665e","#003c30"],RdGy:["#67001f","#b2182b","#d6604d","#f4a582","#fddbc7","#ffffff","#e0e0e0","#bababa","#878787","#4d4d4d","#1a1a1a"],PuOr:["#7f3b08","#b35806","#e08214","#fdb863","#fee0b6","#f7f7f7","#d8daeb","#b2abd2","#8073ac","#542788","#2d004b"],Set2:["#66c2a5","#fc8d62","#8da0cb","#e78ac3","#a6d854","#ffd92f","#e5c494","#b3b3b3"],Accent:["#7fc97f","#beaed4","#fdc086","#ffff99","#386cb0","#f0027f","#bf5b17","#666666"],Set1:["#e41a1c","#377eb8","#4daf4a","#984ea3","#ff7f00","#ffff33","#a65628","#f781bf","#999999"],Set3:["#8dd3c7","#ffffb3","#bebada","#fb8072","#80b1d3","#fdb462","#b3de69","#fccde5","#d9d9d9","#bc80bd","#ccebc5","#ffed6f"],Dark2:["#1b9e77","#d95f02","#7570b3","#e7298a","#66a61e","#e6ab02","#a6761d","#666666"],Paired:["#a6cee3","#1f78b4","#b2df8a","#33a02c","#fb9a99","#e31a1c","#fdbf6f","#ff7f00","#cab2d6","#6a3d9a","#ffff99","#b15928"],Pastel2:["#b3e2cd","#fdcdac","#cbd5e8","#f4cae4","#e6f5c9","#fff2ae","#f1e2cc","#cccccc"],Pastel1:["#fbb4ae","#b3cde3","#ccebc5","#decbe4","#fed9a6","#ffffcc","#e5d8bd","#fddaec","#f2f2f2"]},pa=Object.keys(en),Ln=new Map(pa.map(e=>[e.toLowerCase(),e])),Oo=typeof Proxy=="function"?new Proxy(en,{get(e,t){const n=t.toLowerCase();if(Ln.has(n))return e[Ln.get(n)]},getOwnPropertyNames(){return Object.getOwnPropertyNames(pa)}}):en,No=(...e)=>{e=G(e,"cmyk");const[t,n,a,r]=e,l=e.length>4?e[4]:1;return r===1?[0,0,0,l]:[t>=1?0:255*(1-t)*(1-r),n>=1?0:255*(1-n)*(1-r),a>=1?0:255*(1-a)*(1-r),l]},{max:On}=Math,$o=(...e)=>{let[t,n,a]=G(e,"rgb");t=t/255,n=n/255,a=a/255;const r=1-On(t,On(n,a)),l=r<1?1/(1-r):0,o=(1-t-r)*l,s=(1-n-r)*l,i=(1-a-r)*l;return[o,s,i,r]};w.prototype.cmyk=function(){return $o(this._rgb)};const zo=(...e)=>new w(...e,"cmyk");Object.assign($,{cmyk:zo});z.format.cmyk=No;z.autodetect.push({p:2,test:(...e)=>{if(e=G(e,"cmyk"),I(e)==="array"&&e.length===4)return"cmyk"}});const Go=(...e)=>{const t=G(e,"hsla");let n=at(e)||"lsa";return t[0]=pe(t[0]||0)+"deg",t[1]=pe(t[1]*100)+"%",t[2]=pe(t[2]*100)+"%",n==="hsla"||t.length>3&&t[3]<1?(t[3]="/ "+(t.length>3?t[3]:1),n="hsla"):t.length=3,`${n.substr(0,3)}(${t.join(" ")})`},Yo=(...e)=>{const t=G(e,"lab");let n=at(e)||"lab";return t[0]=pe(t[0])+"%",t[1]=pe(t[1]),t[2]=pe(t[2]),n==="laba"||t.length>3&&t[3]<1?t[3]="/ "+(t.length>3?t[3]:1):t.length=3,`lab(${t.join(" ")})`},Io=(...e)=>{const t=G(e,"lch");let n=at(e)||"lab";return t[0]=pe(t[0])+"%",t[1]=pe(t[1]),t[2]=isNaN(t[2])?"none":pe(t[2])+"deg",n==="lcha"||t.length>3&&t[3]<1?t[3]="/ "+(t.length>3?t[3]:1):t.length=3,`lch(${t.join(" ")})`},qo=(...e)=>{const t=G(e,"lab");return t[0]=pe(t[0]*100)+"%",t[1]=Jt(t[1]),t[2]=Jt(t[2]),t.length>3&&t[3]<1?t[3]="/ "+(t.length>3?t[3]:1):t.length=3,`oklab(${t.join(" ")})`},ma=(...e)=>{const[t,n,a,...r]=G(e,"rgb"),[l,o,s]=un(t,n,a),[i,c,f]=ua(l,o,s);return[i,c,f,...r.length>0&&r[0]<1?[r[0]]:[]]},Xo=(...e)=>{const t=G(e,"lch");return t[0]=pe(t[0]*100)+"%",t[1]=Jt(t[1]),t[2]=isNaN(t[2])?"none":pe(t[2])+"deg",t.length>3&&t[3]<1?t[3]="/ "+(t.length>3?t[3]:1):t.length=3,`oklch(${t.join(" ")})`},{round:Ut}=Math,Ho=(...e)=>{const t=G(e,"rgba");let n=at(e)||"rgb";if(n.substr(0,3)==="hsl")return Go(ha(t),n);if(n.substr(0,3)==="lab"){const a=dt();Re("d50");const r=Yo(on(t),n);return Re(a),r}if(n.substr(0,3)==="lch"){const a=dt();Re("d50");const r=Io(cn(t),n);return Re(a),r}return n.substr(0,5)==="oklab"?qo(un(t)):n.substr(0,5)==="oklch"?Xo(ma(t)):(t[0]=Ut(t[0]),t[1]=Ut(t[1]),t[2]=Ut(t[2]),(n==="rgba"||t.length>3&&t[3]<1)&&(t[3]="/ "+(t.length>3?t[3]:1),n="rgba"),`${n.substr(0,3)}(${t.slice(0,n==="rgb"?3:4).join(" ")})`)},va=(...e)=>{e=G(e,"lch");const[t,n,a,...r]=e,[l,o,s]=fa(t,n,a),[i,c,f]=fn(l,o,s);return[i,c,f,...r.length>0&&r[0]<1?[r[0]]:[]]},Pe=/((?:-?\d+)|(?:-?\d+(?:\.\d+)?)%|none)/.source,Ce=/((?:-?(?:\d+(?:\.\d*)?|\.\d+)%?)|none)/.source,wt=/((?:-?(?:\d+(?:\.\d*)?|\.\d+)%)|none)/.source,me=/\s*/.source,lt=/\s+/.source,dn=/\s*,\s*/.source,Tt=/((?:-?(?:\d+(?:\.\d*)?|\.\d+)(?:deg)?)|none)/.source,ot=/\s*(?:\/\s*((?:[01]|[01]?\.\d+)|\d+(?:\.\d+)?%))?/.source,ka=new RegExp("^rgba?\\("+me+[Pe,Pe,Pe].join(lt)+ot+"\\)$"),ya=new RegExp("^rgb\\("+me+[Pe,Pe,Pe].join(dn)+me+"\\)$"),_a=new RegExp("^rgba\\("+me+[Pe,Pe,Pe,Ce].join(dn)+me+"\\)$"),Ca=new RegExp("^hsla?\\("+me+[Tt,wt,wt].join(lt)+ot+"\\)$"),wa=new RegExp("^hsl?\\("+me+[Tt,wt,wt].join(dn)+me+"\\)$"),Ma=/^hsla\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/,Aa=new RegExp("^lab\\("+me+[Ce,Ce,Ce].join(lt)+ot+"\\)$"),Ea=new RegExp("^lch\\("+me+[Ce,Ce,Tt].join(lt)+ot+"\\)$"),Ba=new RegExp("^oklab\\("+me+[Ce,Ce,Ce].join(lt)+ot+"\\)$"),Ta=new RegExp("^oklch\\("+me+[Ce,Ce,Tt].join(lt)+ot+"\\)$"),{round:Da}=Math,Ke=e=>e.map((t,n)=>n<=2?He(Da(t),0,255):t),le=(e,t=0,n=100,a=!1)=>(typeof e=="string"&&e.endsWith("%")&&(e=parseFloat(e.substring(0,e.length-1))/100,a?e=t+(e+1)*.5*(n-t):e=t+e*(n-t)),+e),fe=(e,t)=>e==="none"?t:e,hn=e=>{if(e=e.toLowerCase().trim(),e==="transparent")return[0,0,0,0];let t;if(z.format.named)try{return z.format.named(e)}catch{}if((t=e.match(ka))||(t=e.match(ya))){let n=t.slice(1,4);for(let r=0;r<3;r++)n[r]=+le(fe(n[r],0),0,255);n=Ke(n);const a=t[4]!==void 0?+le(t[4],0,1):1;return n[3]=a,n}if(t=e.match(_a)){const n=t.slice(1,5);for(let a=0;a<4;a++)n[a]=+le(n[a],0,255);return n}if((t=e.match(Ca))||(t=e.match(wa))){const n=t.slice(1,4);n[0]=+fe(n[0].replace("deg",""),0),n[1]=+le(fe(n[1],0),0,100)*.01,n[2]=+le(fe(n[2],0),0,100)*.01;const a=Ke(Qt(n)),r=t[4]!==void 0?+le(t[4],0,1):1;return a[3]=r,a}if(t=e.match(Ma)){const n=t.slice(1,4);n[1]*=.01,n[2]*=.01;const a=Qt(n);for(let r=0;r<3;r++)a[r]=Da(a[r]);return a[3]=+t[4],a}if(t=e.match(Aa)){const n=t.slice(1,4);n[0]=le(fe(n[0],0),0,100),n[1]=le(fe(n[1],0),-125,125,!0),n[2]=le(fe(n[2],0),-125,125,!0);const a=dt();Re("d50");const r=Ke(ln(n));Re(a);const l=t[4]!==void 0?+le(t[4],0,1):1;return r[3]=l,r}if(t=e.match(Ea)){const n=t.slice(1,4);n[0]=le(n[0],0,100),n[1]=le(fe(n[1],0),0,150,!1),n[2]=+fe(n[2].replace("deg",""),0);const a=dt();Re("d50");const r=Ke(sn(n));Re(a);const l=t[4]!==void 0?+le(t[4],0,1):1;return r[3]=l,r}if(t=e.match(Ba)){const n=t.slice(1,4);n[0]=le(fe(n[0],0),0,1),n[1]=le(fe(n[1],0),-.4,.4,!0),n[2]=le(fe(n[2],0),-.4,.4,!0);const a=Ke(fn(n)),r=t[4]!==void 0?+le(t[4],0,1):1;return a[3]=r,a}if(t=e.match(Ta)){const n=t.slice(1,4);n[0]=le(fe(n[0],0),0,1),n[1]=le(fe(n[1],0),0,.4,!1),n[2]=+fe(n[2].replace("deg",""),0);const a=Ke(va(n)),r=t[4]!==void 0?+le(t[4],0,1):1;return a[3]=r,a}};hn.test=e=>ka.test(e)||Ca.test(e)||Aa.test(e)||Ea.test(e)||Ba.test(e)||Ta.test(e)||ya.test(e)||_a.test(e)||wa.test(e)||Ma.test(e)||e==="transparent";w.prototype.css=function(e){return Ho(this._rgb,e)};const Uo=(...e)=>new w(...e,"css");$.css=Uo;z.format.css=hn;z.autodetect.push({p:5,test:(e,...t)=>{if(!t.length&&I(e)==="string"&&hn.test(e))return"css"}});z.format.gl=(...e)=>{const t=G(e,"rgba");return t[0]*=255,t[1]*=255,t[2]*=255,t};const jo=(...e)=>new w(...e,"gl");$.gl=jo;w.prototype.gl=function(){const e=this._rgb;return[e[0]/255,e[1]/255,e[2]/255,e[3]]};w.prototype.hex=function(e){return sa(this._rgb,e)};const Zo=(...e)=>new w(...e,"hex");$.hex=Zo;z.format.hex=oa;z.autodetect.push({p:4,test:(e,...t)=>{if(!t.length&&I(e)==="string"&&[3,4,5,6,7,8,9].indexOf(e.length)>=0)return"hex"}});const{log:vt}=Math,Sa=e=>{const t=e/100;let n,a,r;return t<66?(n=255,a=t<6?0:-155.25485562709179-.44596950469579133*(a=t-2)+104.49216199393888*vt(a),r=t<20?0:-254.76935184120902+.8274096064007395*(r=t-10)+115.67994401066147*vt(r)):(n=351.97690566805693+.114206453784165*(n=t-55)-40.25366309332127*vt(n),a=325.4494125711974+.07943456536662342*(a=t-50)-28.0852963507957*vt(a),r=255),[n,a,r,1]},{round:Vo}=Math,Wo=(...e)=>{const t=G(e,"rgb"),n=t[0],a=t[2];let r=1e3,l=4e4;const o=.4;let s;for(;l-r>o;){s=(l+r)*.5;const i=Sa(s);i[2]/i[0]>=a/n?l=s:r=s}return Vo(s)};w.prototype.temp=w.prototype.kelvin=w.prototype.temperature=function(){return Wo(this._rgb)};const jt=(...e)=>new w(...e,"temp");Object.assign($,{temp:jt,kelvin:jt,temperature:jt});z.format.temp=z.format.kelvin=z.format.temperature=Sa;w.prototype.oklch=function(){return ma(this._rgb)};const Ko=(...e)=>new w(...e,"oklch");Object.assign($,{oklch:Ko});z.format.oklch=va;z.autodetect.push({p:2,test:(...e)=>{if(e=G(e,"oklch"),I(e)==="array"&&e.length===3)return"oklch"}});Object.assign($,{analyze:ga,average:Kl,bezier:ao,blend:we,brewer:Oo,Color:w,colors:tt,contrast:Mo,contrastAPCA:Bo,cubehelix:po,deltaE:xo,distance:Ro,input:z,interpolate:nt,limits:Fa,mix:nt,random:yo,scale:Ct,scales:Lo,valid:Po});const Nn=Object.assign({"../../data/sets/rebrickable_parts_41809-1-hedwig-pencil-holder.csv":Yr,"../../data/sets/rebrickable_parts_41904-1-animal-picture-holders.csv":Ir,"../../data/sets/rebrickable_parts_41935-1-lots-of-dots.csv":qr,"../../data/sets/rebrickable_parts_41950-1-lots-of-dots-lettering.csv":Xr,"../../data/sets/rebrickable_parts_41957-1-adhesive-patches-mega-pack.csv":Hr,"../../data/sets/rebrickable_parts_41961-1-designer-toolkit-patterns.csv":Ur});function Jo(e){const t=e.trim().split(`
`);return t[0].split(","),t.slice(1).map(n=>{const a=n.split(",");return{id:Number(a[0]),name:a[1],rgb:`#${a[2]}`,is_trans:a[3]==="True"}})}function Qo(e){const t=$(e).hsl();return{h:isNaN(t[0])?0:t[0],s:t[1]*100,l:t[2]*100}}function es(e,t=15,n=5){const a={},r=new Set;for(const i of e){const c=i.s<10?999:Math.floor(i.h/t);a[c]||(a[c]=[]),r.has(i.rgb)||(a[c].push(i),r.add(i.rgb))}Object.values(a).forEach(i=>i.sort((c,f)=>$(c.rgb).hcl()[2]-$(f.rgb).hcl()[2]));const o=Object.keys(a).map(Number).sort((i,c)=>i-c).flatMap(i=>a[i]),s=[];for(let i=0;i<o.length;i+=n)s.push(o.slice(i,i+n));return s}function ts(){const e=new Set;for(const t in Nn){const a=Nn[t].trim().split(`
`);for(const r of a.slice(1)){const l=r.split(",");if(l.length>1){const o=Number(l[1]);isNaN(o)||e.add(o)}}}return e}const ns=ts(),Ue=Jo(jr).filter(e=>ns.has(e.id)&&!e.name.includes("Trans-Clear"));function as(){return Ue.map(e=>{const t=Qo(e.rgb);return{...e,...t}})}const rs=es(as(),15,6);function xa(){return[...Ue].sort((e,t)=>{const n=$(e.rgb).hcl(),a=$(t.rgb).hcl();return a[0]-n[0]||a[1]-n[1]||a[2]-n[2]})}var ls=se('<div class="zoom-pan-container svelte-b0dtxj" role="application" aria-label="Zoomable and pannable container" tabindex="0"><div class="zoom-pan-content svelte-b0dtxj"><!></div></div>');function os(e,t){ve(t,!1);const n=Te();let a=L(t,"zoom",12,1),r=L(t,"panX",12,0),l=L(t,"panY",12,0),o=L(t,"selectMode",8,!1),s=W(!1),i=0,c=0,f=W(!1),g=W(),b=W(),h=!1;tn(()=>{if(u(g)&&u(b)&&!h){const d=u(g).clientWidth,_=u(g).clientHeight;let M=0,k=0;u(b).firstElementChild instanceof HTMLElement?(M=u(b).firstElementChild.offsetWidth,k=u(b).firstElementChild.offsetHeight):(M=u(b).offsetWidth,k=u(b).offsetHeight),r((d-M*a())/2),l((_-k*a())/2),h=!0,n("panChanged",{panX:r(),panY:l()})}});function F(d){d.preventDefault();const _=u(g).getBoundingClientRect(),M=d.clientX-_.left,k=d.clientY-_.top,R=d.deltaY>0?.9:1.1,D=Math.max(.2,Math.min(5,a()*R));if(D!==a()){const N=D/a();r(M-(M-r())*N),l(k-(k-l())*N),a(D),n("zoomChanged",{zoom:a(),panX:r(),panY:l()})}}function p(d){o()||d.button===0&&(E(s,!0),E(f,!1),i=d.clientX,c=d.clientY,window.addEventListener("mousemove",v),window.addEventListener("mouseup",y),d.preventDefault())}function v(d){if(u(s)){const _=d.clientX-i,M=d.clientY-c;(Math.abs(_)>1||Math.abs(M)>1)&&E(f,!0),r(r()+_),l(l()+M),i=d.clientX,c=d.clientY,n("panChanged",{panX:r(),panY:l()})}}function y(){u(s)&&(E(s,!1),window.removeEventListener("mousemove",v),window.removeEventListener("mouseup",y),n("panEnd",{didPan:u(f)}),setTimeout(()=>{E(f,!1)},50))}function S(d){d.key===" "&&d.preventDefault()}function x(d){d.key===" "&&d.preventDefault()}ye();var C=ls(),T=X(C),m=X(T);Oe(m,t,"default",{get didPan(){return u(f)}}),Y(T),mn(T,d=>E(b,d),()=>u(b)),Y(C),mn(C,d=>E(g,d),()=>u(g)),Fe(()=>Ge(T,`transform: translate(${r()??""}px, ${l()??""}px) scale(${a()??""}); cursor: ${o()?"crosshair":u(s)?"grabbing":"grab"};`)),Q("wheel",C,F),Q("mousedown",C,p),Q("keydown",C,S),Q("keyup",C,x),V(e,C),ke()}var ss=se('<div class="square svelte-gxsx5p"></div>');function Ra(e,t){let n=L(t,"color",8,"#000");var a=ss();Fe(()=>Ge(a,`--color: ${n()??""}`)),V(e,a)}var is=se('<div class="circle svelte-r5z0cw"></div>');function Pa(e,t){let n=L(t,"color",8,"#000");var a=is();Fe(()=>Ge(a,`--color: ${n()??""}`)),V(e,a)}var cs=se('<div class="quarter-container svelte-19hi45o"><svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none" class="svelte-19hi45o"><path d="M 0,0 L 100,0 A 100,100 0 0,1 0,100 Z" stroke="none"></path></svg></div>');function La(e,t){let n=L(t,"color",8,"#000"),a=L(t,"rotation",8,0);var r=cs(),l=X(r),o=X(l);Y(l),Y(r),Fe(()=>{oe(o,"fill",n()),oe(o,"transform",`rotate(${a()*90}, 50, 50)`)}),V(e,r)}var fs=se('<div class="tile svelte-ia1epz"><div class="square-half svelte-ia1epz"></div> <div class="circle-half svelte-ia1epz"></div></div>');function Oa(e,t){let n=L(t,"color",8,"#000"),a=L(t,"rotation",8,0);var r=fs();Fe(()=>Ge(r,`--color: ${n()??""}; transform: rotate(${a()*90}deg);`)),V(e,r)}var us=se('<div role="button" tabindex="0"><!></div>'),ds=se('<div class="selection-overlay svelte-1hhz0mg"></div>'),hs=se('<div class="grid svelte-1hhz0mg"><!> <!></div>');function bs(e,t){ve(t,!1);const n=Te();let a=L(t,"grid",12),r=L(t,"width",8),l=L(t,"height",8),o=L(t,"selectedShape",8,"square"),s=L(t,"selectedColor",8),i=L(t,"paintMode",8,!1),c=L(t,"colorPickerMode",8,!1),f=L(t,"selectMode",8,!1),g=L(t,"quarterRotation",8,0),b=L(t,"halfCircleRotation",8,0),h=L(t,"selection",28,()=>({startX:0,startY:0,endX:0,endY:0,active:!1})),F=L(t,"didPan",8,!1),p=W(!1);function v(O){const B=a()[O];if(!B)return y(O);const{shape:H,color:U}=B;if(H===o()&&U===s())return;const ae=[O],P=new Set;for(;ae.length;){const j=ae.pop();if(j===void 0||P.has(j))continue;P.add(j);const de=a()[j];if(!de||de.shape!==H||de.color!==U)continue;a(a()[j]={shape:o(),color:s(),rotation:o()==="quarter"?g():o()==="halfCircle"?b():0},!0);const he=j%r(),_e=Math.floor(j/r());he>0&&ae.push(j-1),he<r()-1&&ae.push(j+1),_e>0&&ae.push(j-r()),_e<l()-1&&ae.push(j+r())}a([...a()]),n("gridChanged",{grid:a()})}function y(O){const B=a()[O];B&&B.shape===o()&&B.color===s()?a(a()[O]=null,!0):o()==="quarter"?a(a()[O]={shape:o(),color:s(),rotation:g()},!0):o()==="halfCircle"?a(a()[O]={shape:o(),color:s(),rotation:b()},!0):a(a()[O]={shape:o(),color:s(),rotation:0},!0),a([...a()]),n("gridChanged",{grid:a()})}function S(O){const B=a()[O];B&&B.color&&n("colorPicked",{color:B.color})}function x(O,B){B.stopPropagation(),!F()&&(f()?C(O):c()?S(O):i()?v(O):y(O))}function C(O,B){const H=O%r(),U=Math.floor(O/r());E(p,!0),h({startX:H,startY:U,endX:H,endY:U,active:!0}),n("selectionChanged",{selection:h()})}function T(O,B){f()&&C(O)}function m(O,B){if(f()&&u(p)){const H=O%r(),U=Math.floor(O/r());h({...h(),endX:H,endY:U}),n("selectionChanged",{selection:h()})}}function d(O,B){f()&&u(p)&&(E(p,!1),n("selectionChanged",{selection:h()}))}function _(){u(p)&&E(p,!1)}tn(()=>{typeof window<"u"&&window.addEventListener("mouseup",_)}),zn(()=>{typeof window<"u"&&window.removeEventListener("mouseup",_)});function M(O){if(!h().active)return!1;const B=O%r(),H=Math.floor(O/r()),U=Math.min(h().startX,h().endX),ae=Math.max(h().startX,h().endX),P=Math.min(h().startY,h().endY),j=Math.max(h().startY,h().endY);return B>=U&&B<=ae&&H>=P&&H<=j}function k(O,B){O.key==="Enter"&&(c()?S(B):i()?v(B):y(B))}ye();var R=hs(),D=X(R);yt(D,1,a,kt,(O,B,H)=>{var U=us(),ae=X(U);{var P=j=>{var de=ge(),he=be(de);{var _e=De=>{Ra(De,{get color(){return u(B),Z(()=>u(B).color)}})},st=De=>{var qe=ge(),ht=be(qe);{var it=Ne=>{Pa(Ne,{get color(){return u(B),Z(()=>u(B).color)}})},bt=Ne=>{var gt=ge(),Dt=be(gt);{var A=ie=>{La(ie,{get color(){return u(B),Z(()=>u(B).color)},get rotation(){return u(B),Z(()=>u(B).rotation)}})},Me=ie=>{var bn=ge(),Na=be(bn);{var $a=St=>{Oa(St,{get color(){return u(B),Z(()=>u(B).color)},get rotation(){return u(B),Z(()=>u(B).rotation)}})};$e(Na,St=>{u(B),Z(()=>u(B).shape==="halfCircle")&&St($a)},!0)}V(ie,bn)};$e(Dt,ie=>{u(B),Z(()=>u(B).shape==="quarter")?ie(A):ie(Me,!1)},!0)}V(Ne,gt)};$e(ht,Ne=>{u(B),Z(()=>u(B).shape==="circle")?Ne(it):Ne(bt,!1)},!0)}V(De,qe)};$e(he,De=>{u(B),Z(()=>u(B).shape==="square")?De(_e):De(st,!1)})}V(j,de)};$e(ae,j=>{u(B)&&j(P)})}Y(U),Fe(j=>Ee(U,1,`cell ${j??""} ${f()?"select-mode":""}`,"svelte-1hhz0mg"),[()=>Z(()=>M(H)?"selected":"")]),Q("click",U,j=>x(H,j)),Q("mousedown",U,j=>T(H)),Q("mouseenter",U,j=>m(H)),Q("mouseup",U,j=>d()),Q("keydown",U,j=>k(j,H)),V(O,U)});var N=ne(D,2);{var K=O=>{const B=ue(()=>(q(h()),Z(()=>Math.min(h().startX,h().endX)))),H=ue(()=>(q(h()),Z(()=>Math.max(h().startX,h().endX)))),U=ue(()=>(q(h()),Z(()=>Math.min(h().startY,h().endY)))),ae=ue(()=>(q(h()),Z(()=>Math.max(h().startY,h().endY)))),P=ue(()=>u(B)/r()*100),j=ue(()=>u(U)/l()*100),de=ue(()=>(u(H)-u(B)+1)/r()*100),he=ue(()=>(u(ae)-u(U)+1)/l()*100);var _e=ds();Fe(()=>Ge(_e,`left: ${u(P)??""}%; top: ${u(j)??""}%; width: ${u(de)??""}%; height: ${u(he)??""}%;`)),V(O,_e)};$e(N,O=>{q(f()),q(h()),u(p),Z(()=>f()&&h().active&&(u(p)||h().startX!==h().endX||h().startY!==h().endY))&&O(K)})}Y(R),Fe(()=>Ge(R,`--width: ${r()??""}; --height: ${l()??""};`)),V(e,R),ke()}var gs=se('<div class="container svelte-1w4104m"><!></div>');function $n(e,t){ve(t,!1);const n=Te();let a=L(t,"grid",8,null),r=L(t,"width",8,32),l=L(t,"height",8,32),o=L(t,"selectedShape",8,"square"),s=L(t,"selectedColor",24,()=>Ue.length>0?Ue[0].rgb:"#000000"),i=L(t,"paintMode",8,!1),c=L(t,"colorPickerMode",8,!1),f=L(t,"selectMode",8,!1),g=L(t,"quarterRotation",8,0),b=L(t,"halfCircleRotation",8,0),h=L(t,"zoom",12,1),F=L(t,"selection",28,()=>({startX:0,startY:0,endX:0,endY:0,active:!1})),p=W(),v=W(0),y=W(0);function S(k){h(k.detail.zoom)}function x(k){E(v,k.detail.panX),E(y,k.detail.panY)}function C(k){k.detail.didPan}function T(k){E(p,k.detail.grid),n("gridChanged",k.detail)}function m(k){n("colorPicked",k.detail)}function d(k){F(k.detail.selection),n("selectionChanged",k.detail)}Vt(()=>(q(a()),q(r()),q(l())),()=>{E(p,a()||Array(r()*l()).fill(null))}),Zn(),ye();var _=gs(),M=X(_);os(M,{get zoom(){return h()},get panX(){return u(v)},get panY(){return u(y)},get selectMode(){return f()},$$events:{zoomChanged:S,panChanged:x,panEnd:C},children:wr,$$slots:{default:(k,R)=>{const D=ue(()=>R.didPan);bs(k,{get grid(){return u(p)},get width(){return r()},get height(){return l()},get selectedShape(){return o()},get selectedColor(){return s()},get paintMode(){return i()},get colorPickerMode(){return c()},get selectMode(){return f()},get quarterRotation(){return g()},get halfCircleRotation(){return b()},get selection(){return F()},get didPan(){return u(D)},$$events:{gridChanged:T,colorPicked:m,selectionChanged:d}})}}}),Y(_),V(e,_),ke()}var Fs=se('<button type="button"></button>'),ps=se('<div class="palette-row"></div>'),ms=se('<div class="color-picker"><!> <div class="colors"><div class="palette2d"></div></div></div>');function vs(e,t){ve(t,!1);const n=xa(),a=Te();let r=L(t,"selectedColor",28,()=>n.length>0?n[0].rgb:"#000000"),l=W(""),o=W(!1),s=W(null),i=n,c=W(i);function f(p){r(p),a("colorSelected",{color:p})}Vt(()=>(u(o),u(s)),()=>{u(o)&&jn().then(()=>{u(s)?.focus()})}),Vt(()=>u(l),()=>{E(c,u(l).trim()?i.filter(p=>p.name.toLowerCase().includes(u(l).toLowerCase())||p.rgb.replace("#","").includes(u(l).replace("#",""))):i)}),Zn(),ye();var g=ms(),b=X(g);$e(b,p=>{});var h=ne(b,2),F=X(h);yt(F,5,()=>rs,kt,(p,v)=>{var y=ps();yt(y,5,()=>u(v),kt,(S,x)=>{var C=Fs();Fe(()=>{Ge(C,`width: 1.5rem; height: 1.5rem; background: ${u(x),Z(()=>u(x).rgb)??""}; border: 2px solid ${q(r()),u(x),Z(()=>r()===u(x).rgb?"#333":"#ccc")??""}; border-radius: 0.25rem; cursor: pointer; margin: 0 0.1rem 0.1rem 0;`),oe(C,"aria-label",(u(x),Z(()=>u(x).name))),oe(C,"title",(u(x),Z(()=>u(x).name)))}),Q("click",C,()=>f(u(x).rgb)),V(S,C)}),Y(y),V(p,y)}),Y(F),Y(h),Y(g),V(e,g),ke()}const ee={select:{key:"v",action:"select"},square:{key:"s",action:"square"},circle:{key:"c",action:"circle"},quarter:{key:"q",action:"quarter"},halfCircle:{key:"h",action:"halfCircle"},fill:{key:"f",action:"fill"},colorPicker:{key:"i",action:"colorPicker"},zoomIn:{key:"+",action:"zoomIn"},zoomInAlt:{key:"=",action:"zoomIn"},zoomOut:{key:"-",action:"zoomOut"},undo:{key:"z",ctrl:!0,action:"undo"},redo:{key:"z",ctrl:!0,shift:!0,action:"redo"},cut:{key:"x",ctrl:!0,action:"cut"},copy:{key:"c",ctrl:!0,action:"copy"},paste:{key:"v",ctrl:!0,action:"paste"},selectAll:{key:"a",ctrl:!0,action:"selectAll"},deselect:{key:"d",ctrl:!0,action:"deselect"},rotateLeft:{key:"r",action:"rotateLeft"},rotateRight:{key:"r",shift:!0,action:"rotateRight"},moveUp:{key:"ArrowUp",action:"moveUp"},moveDown:{key:"ArrowDown",action:"moveDown"},moveLeft:{key:"ArrowLeft",action:"moveLeft"},moveRight:{key:"ArrowRight",action:"moveRight"},delete:{key:"Delete",action:"delete"},backspace:{key:"Backspace",action:"delete"}};function ks(e,t){const a=(e.key===" "?"Space":e.key).toLowerCase(),r=t.key.toLowerCase();return a!==r||!!e.ctrlKey!=!!t.ctrl||!!e.altKey!=!!t.alt?!1:t.key==="+"||t.key==="-"||t.key==="="?!0:!!e.shiftKey==!!t.shift}function te(e){const t=[];e.ctrl&&t.push("Ctrl"),e.shift&&t.push("Shift"),e.alt&&t.push("Alt");let n=e.key;return n===" "&&(n="Space"),n==="="&&(n="+"),t.push(n.toUpperCase()),t.join("+")}var ys=se('<div class="shape-group"><div class="group-label">Shapes</div> <div class="shape-grid"><button aria-label="Square"><div class="shape-icon"><!></div></button> <button aria-label="Circle"><div class="shape-icon"><!></div></button> <button aria-label="Quarter"><div class="shape-icon"><!></div></button> <button aria-label="Half Circle"><div class="shape-icon"><!></div></button></div></div>');function _s(e,t){ve(t,!1);const n=Te();let a=L(t,"selectedShape",12,"square"),r=L(t,"selectedColor",8,"#000000"),l=L(t,"quarterRotation",12,0),o=L(t,"halfCircleRotation",12,0);function s(k){if(k==="quarter")if(a()==="quarter"){l((l()+1)%4),n("quarterRotationChanged",{rotation:l()});return}else l(0);if(k==="halfCircle")if(a()==="halfCircle"){o((o()+1)%4),n("halfCircleRotationChanged",{rotation:o()});return}else o(0);a(k),n("shapeSelected",{shape:k}),k==="quarter"&&n("quarterRotationChanged",{rotation:l()}),k==="halfCircle"&&n("halfCircleRotationChanged",{rotation:o()})}ye();var i=ys(),c=ne(X(i),2),f=X(c);let g;var b=X(f),h=X(b);Ra(h,{get color(){return r()}}),Y(b),Y(f);var F=ne(f,2);let p;var v=X(F),y=X(v);Pa(y,{get color(){return r()}}),Y(v),Y(F);var S=ne(F,2);let x;var C=X(S),T=X(C);La(T,{get color(){return r()},get rotation(){return l()}}),Y(C),Y(S);var m=ne(S,2);let d;var _=X(m),M=X(_);Oa(M,{get color(){return r()},get rotation(){return o()}}),Y(_),Y(m),Y(c),Y(i),Fe((k,R,D,N,K,O,B,H)=>{g=Ee(f,1,"shape-button",null,g,k),oe(f,"title",`Square (${R??""})`),p=Ee(F,1,"shape-button",null,p,D),oe(F,"title",`Circle (${N??""})`),x=Ee(S,1,"shape-button",null,x,K),oe(S,"title",`Quarter (${O??""})`),d=Ee(m,1,"shape-button",null,d,B),oe(m,"title",`Half Circle (${H??""})`)},[()=>({selected:a()==="square"}),()=>(q(te),q(ee),Z(()=>te(ee.square))),()=>({selected:a()==="circle"}),()=>(q(te),q(ee),Z(()=>te(ee.circle))),()=>({selected:a()==="quarter"}),()=>(q(te),q(ee),Z(()=>te(ee.quarter))),()=>({selected:a()==="halfCircle"}),()=>(q(te),q(ee),Z(()=>te(ee.halfCircle)))]),Q("click",f,()=>s("square")),Q("click",F,()=>s("circle")),Q("click",S,()=>s("quarter")),Q("click",m,()=>s("halfCircle")),V(e,i),ke()}/**
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
 */const Cs={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};var ws=Mr("<svg><!><!></svg>");function Ze(e,t){const n=Le(t,["children","$$slots","$$events","$$legacy"]),a=Le(n,["name","color","size","strokeWidth","absoluteStrokeWidth","iconNode"]);ve(t,!1);let r=L(t,"name",8,void 0),l=L(t,"color",8,"currentColor"),o=L(t,"size",8,24),s=L(t,"strokeWidth",8,2),i=L(t,"absoluteStrokeWidth",8,!1),c=L(t,"iconNode",24,()=>[]);const f=(...F)=>F.filter((p,v,y)=>!!p&&y.indexOf(p)===v).join(" ");ye();var g=ws();_n(g,(F,p)=>({...Cs,...a,width:o(),height:o(),stroke:l(),"stroke-width":F,class:p}),[()=>(q(i()),q(s()),q(o()),Z(()=>i()?Number(s())*24/Number(o()):s())),()=>(q(r()),q(n),Z(()=>f("lucide-icon","lucide",r()?`lucide-${r()}`:"",n.class)))]);var b=X(g);yt(b,1,c,kt,(F,p)=>{var v=Ar(()=>Er(u(p),2));let y=()=>u(v)[0],S=()=>u(v)[1];var x=ge(),C=be(x);Sr(C,y,!0,(T,m)=>{_n(T,()=>({...S()}))}),V(F,x)});var h=ne(b);Oe(h,t,"default",{}),Y(g),V(e,g),ke()}function Ms(e,t){const n=Le(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const a=[["path",{d:"M14 4.1 12 6"}],["path",{d:"m5.1 8-2.9-.8"}],["path",{d:"m6 12-1.9 2"}],["path",{d:"M7.2 2.2 8 5.1"}],["path",{d:"M9.037 9.69a.498.498 0 0 1 .653-.653l11 4.5a.5.5 0 0 1-.074.949l-4.349 1.041a1 1 0 0 0-.74.739l-1.04 4.35a.5.5 0 0 1-.95.074z"}]];Ze(e,je({name:"mouse-pointer-click"},()=>n,{get iconNode(){return a},children:(r,l)=>{var o=ge(),s=be(o);Oe(s,t,"default",{}),V(r,o)},$$slots:{default:!0}}))}function As(e,t){const n=Le(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const a=[["path",{d:"m19 11-8-8-8.6 8.6a2 2 0 0 0 0 2.8l5.2 5.2c.8.8 2 .8 2.8 0L19 11Z"}],["path",{d:"m5 2 5 5"}],["path",{d:"M2 13h15"}],["path",{d:"M22 20a2 2 0 1 1-4 0c0-1.6 1.7-2.4 2-4 .3 1.6 2 2.4 2 4Z"}]];Ze(e,je({name:"paint-bucket"},()=>n,{get iconNode(){return a},children:(r,l)=>{var o=ge(),s=be(o);Oe(s,t,"default",{}),V(r,o)},$$slots:{default:!0}}))}function Es(e,t){const n=Le(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const a=[["path",{d:"m12 9-8.414 8.414A2 2 0 0 0 3 18.828v1.344a2 2 0 0 1-.586 1.414A2 2 0 0 1 3.828 21h1.344a2 2 0 0 0 1.414-.586L15 12"}],["path",{d:"m18 9 .4.4a1 1 0 1 1-3 3l-3.8-3.8a1 1 0 1 1 3-3l.4.4 3.4-3.4a1 1 0 1 1 3 3z"}],["path",{d:"m2 22 .414-.414"}]];Ze(e,je({name:"pipette"},()=>n,{get iconNode(){return a},children:(r,l)=>{var o=ge(),s=be(o);Oe(s,t,"default",{}),V(r,o)},$$slots:{default:!0}}))}function Bs(e,t){const n=Le(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const a=[["path",{d:"M21 7v6h-6"}],["path",{d:"M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7"}]];Ze(e,je({name:"redo"},()=>n,{get iconNode(){return a},children:(r,l)=>{var o=ge(),s=be(o);Oe(s,t,"default",{}),V(r,o)},$$slots:{default:!0}}))}function Ts(e,t){const n=Le(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const a=[["path",{d:"M3 7v6h6"}],["path",{d:"M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13"}]];Ze(e,je({name:"undo"},()=>n,{get iconNode(){return a},children:(r,l)=>{var o=ge(),s=be(o);Oe(s,t,"default",{}),V(r,o)},$$slots:{default:!0}}))}function Ds(e,t){const n=Le(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const a=[["circle",{cx:"11",cy:"11",r:"8"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65"}],["line",{x1:"11",x2:"11",y1:"8",y2:"14"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11"}]];Ze(e,je({name:"zoom-in"},()=>n,{get iconNode(){return a},children:(r,l)=>{var o=ge(),s=be(o);Oe(s,t,"default",{}),V(r,o)},$$slots:{default:!0}}))}function Ss(e,t){const n=Le(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const a=[["circle",{cx:"11",cy:"11",r:"8"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11"}]];Ze(e,je({name:"zoom-out"},()=>n,{get iconNode(){return a},children:(r,l)=>{var o=ge(),s=be(o);Oe(s,t,"default",{}),V(r,o)},$$slots:{default:!0}}))}var xs=se('<div class="tool-group"><div class="group-label">Tools</div> <div class="tool-grid"><button type="button" aria-label="Selection tool"><!></button> <button type="button" aria-label="Zoom in" class="tool-button"><!></button> <button type="button" aria-label="Zoom out" class="tool-button"><!></button> <button type="button" aria-label="Paint bucket tool"><!></button> <button type="button" aria-label="Color picker tool"><!></button> <button type="button" aria-label="Undo" class="tool-button"><!></button> <button type="button" aria-label="Redo" class="tool-button"><!></button></div></div>');function Rs(e,t){ve(t,!1);const n=Te();let a=L(t,"paintMode",12,!1),r=L(t,"colorPickerMode",12,!1),l=L(t,"selectMode",12,!1),o=L(t,"canUndo",8,!1),s=L(t,"canRedo",8,!1);function i(){a(!a()),a()&&(r(!1),l(!1)),n("paintModeToggled",{paintMode:a()})}function c(){r(!r()),r()&&(a(!1),l(!1)),n("colorPickerModeToggled",{colorPickerMode:r()})}function f(){l(!l()),l()&&(a(!1),r(!1)),n("selectModeToggled",{selectMode:l()})}function g(){n("undo")}function b(){n("redo")}ye();var h=xs(),F=ne(X(h),2),p=X(F);let v;var y=X(p);{let B=ue(()=>l()?"#333":"#555");Ms(y,{size:24,get color(){return u(B)}})}Y(p);var S=ne(p,2),x=X(S);Ds(x,{size:24,color:"#555"}),Y(S);var C=ne(S,2),T=X(C);Ss(T,{size:24,color:"#555"}),Y(C);var m=ne(C,2);let d;var _=X(m);{let B=ue(()=>a()?"#333":"#555");As(_,{size:24,get color(){return u(B)}})}Y(m);var M=ne(m,2);let k;var R=X(M);{let B=ue(()=>r()?"#333":"#555");Es(R,{size:24,get color(){return u(B)}})}Y(M);var D=ne(M,2),N=X(D);{let B=ue(()=>o()?"#555":"#ccc");Ts(N,{size:24,get color(){return u(B)}})}Y(D);var K=ne(D,2),O=X(K);{let B=ue(()=>s()?"#555":"#ccc");Bs(O,{size:24,get color(){return u(B)}})}Y(K),Y(F),Y(h),Fe((B,H,U,ae,P,j,de,he,_e,st)=>{v=Ee(p,1,"tool-button",null,v,B),oe(p,"title",`Selection Tool (${H??""})`),oe(S,"title",`Zoom In (${U??""})`),oe(C,"title",`Zoom Out (${ae??""})`),d=Ee(m,1,"tool-button",null,d,P),oe(m,"title",`Fill Tool (${j??""})`),k=Ee(M,1,"tool-button",null,k,de),oe(M,"title",`Color Picker (${he??""})`),oe(D,"title",`Undo (${_e??""})`),D.disabled=!o(),oe(K,"title",`Redo (${st??""})`),K.disabled=!s()},[()=>({active:l()}),()=>(q(te),q(ee),Z(()=>te(ee.select))),()=>(q(te),q(ee),Z(()=>te(ee.zoomIn))),()=>(q(te),q(ee),Z(()=>te(ee.zoomOut))),()=>({active:a()}),()=>(q(te),q(ee),Z(()=>te(ee.fill))),()=>({active:r()}),()=>(q(te),q(ee),Z(()=>te(ee.colorPicker))),()=>(q(te),q(ee),Z(()=>te(ee.undo))),()=>(q(te),q(ee),Z(()=>te(ee.redo)))]),Q("click",p,f),Q("click",S,()=>n("zoomIn")),Q("click",C,()=>n("zoomOut")),Q("click",m,i),Q("click",M,c),Q("click",D,g),Q("click",K,b),V(e,h),ke()}var Ps=se('<div class="canvas-size-group" style="display:flex; justify-content:center; flex-direction: column; align-items:center; width:100%;"><div class="group-label">Size</div> <div class="tool-grid" style="display:flex; justify-content: center"><label style="display:flex; flex-direction:column; align-items:center;"><input type="number" min="1" max="256"/></label></div></div>');function Ls(e,t){ve(t,!1);const n=Te();let a=L(t,"size",12,32);function r(c){const f=c.target;a(Math.max(1,Math.min(128,parseInt(f.value)||1))),n("sizeChanged",{size:a()})}ye();var l=Ps(),o=ne(X(l),2),s=X(o),i=X(s);Qn(i),Y(s),Y(o),Y(l),Gr(i,a),Q("input",i,r),V(e,l),ke()}var Os=se('<div class="image-upload"><label class="upload-label"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#555" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align: middle;"><path d="M12 16V4"></path><polyline points="8 8 12 4 16 8"></polyline><rect x="4" y="16" width="16" height="4" rx="2"></rect></svg> <span>Upload image</span> <input type="file" accept="image/png, image/jpeg"/></label></div>');function Ns(e,t){ve(t,!1);const n=Te();function a(s){const i=s.target,c=i.files&&i.files[0];if(c){const f=new FileReader;f.onload=()=>{n("imageUploaded",{src:f.result})},f.readAsDataURL(c)}}ye();var r=Os(),l=X(r),o=ne(X(l),4);Y(l),Y(r),Q("change",o,a),V(e,r),ke()}var $s=se('<button class="toolbar-toggle" aria-label="Show/hide toolbar"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#555" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align: middle;"><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg></button>');function zs(e,t){ve(t,!1);const n=Te();function a(){n("toggle")}ye();var r=$s();Q("click",r,a),V(e,r),ke()}var Gs=se("<!> <div><!> <!> <!> <!> <!></div>",1);function Ys(e,t){ve(t,!1);const n=Te();let a=L(t,"selectedShape",12,"square");const r=xa();let l=L(t,"selectedColor",28,()=>r.length>0?r[0].rgb:"#000000"),o=L(t,"paintMode",12,!1),s=L(t,"colorPickerMode",12,!1),i=L(t,"selectMode",12,!1),c=L(t,"size",12,32),f=W(!0),g=L(t,"quarterRotation",12,0),b=L(t,"halfCircleRotation",12,0),h=L(t,"canUndo",12,!1),F=L(t,"canRedo",12,!1);function p(P){a(P.detail.shape),n("shapeSelected",P.detail)}function v(P){g(P.detail.rotation),n("quarterRotationChanged",P.detail)}function y(P){b(P.detail.rotation),n("halfCircleRotationChanged",P.detail)}function S(P){l(P.detail.color),n("colorSelected",P.detail)}function x(P){o(P.detail.paintMode),n("paintModeToggled",P.detail)}function C(P){s(P.detail.colorPickerMode),n("colorPickerModeToggled",P.detail)}function T(P){i(P.detail.selectMode),n("selectModeToggled",P.detail)}function m(){n("undo")}function d(){n("redo")}function _(P){c(P.detail.size),n("sizeChanged",P.detail)}function M(P){n("imageUploaded",P.detail)}function k(){E(f,!u(f))}ye();var R=Gs(),D=be(R);zs(D,{$$events:{toggle:k}});var N=ne(D,2);let K;var O=X(N);_s(O,{get selectedColor(){return l()},get selectedShape(){return a()},set selectedShape(P){a(P)},get quarterRotation(){return g()},set quarterRotation(P){g(P)},get halfCircleRotation(){return b()},set halfCircleRotation(P){b(P)},$$events:{shapeSelected:p,quarterRotationChanged:v,halfCircleRotationChanged:y},$$legacy:!0});var B=ne(O,2);Rs(B,{get paintMode(){return o()},set paintMode(P){o(P)},get colorPickerMode(){return s()},set colorPickerMode(P){s(P)},get selectMode(){return i()},set selectMode(P){i(P)},get canUndo(){return h()},set canUndo(P){h(P)},get canRedo(){return F()},set canRedo(P){F(P)},$$events:{paintModeToggled:x,colorPickerModeToggled:C,selectModeToggled:T,undo:m,redo:d,zoomIn:()=>n("zoomIn"),zoomOut:()=>n("zoomOut")},$$legacy:!0});var H=ne(B,2);vs(H,{get sortedColorPalette(){return r},get selectedColor(){return l()},set selectedColor(P){l(P)},$$events:{colorSelected:S},$$legacy:!0});var U=ne(H,2);Ls(U,{get size(){return c()},set size(P){c(P)},$$events:{sizeChanged:_},$$legacy:!0});var ae=ne(U,2);Ns(ae,{$$events:{imageUploaded:M}}),Y(N),Fe(P=>K=Ee(N,1,"toolbar left",null,K,P),[()=>({visible:u(f)})]),V(e,R),ke()}function Is(e,t,n,a){const r=$(e,t,n).lab();let l=a[0],o=1/0;for(const s of a){const i=$.deltaE(r,$(s).lab());i<o&&(o=i,l=s)}return l}function qs(e){return e<85?"square":e<170?"circle":"quarter"}function Xs(e,t,n=32,a=32){return new Promise((r,l)=>{const o=new window.Image;o.src=e,o.onload=()=>{const s=document.createElement("canvas"),i=s.getContext("2d");if(s.width=n,s.height=a,!i){l(new Error("Could not get 2D context"));return}i.drawImage(o,0,0,n,a);const c=i.getImageData(0,0,n,a).data,f=[];for(let g=0;g<c.length;g+=4){const b=g/4,h=b%n,F=Math.floor(b/n);let p=c[g],v=c[g+1],y=c[g+2];c[g+3]===0&&(p=255,v=255,y=255);const x=(p+v+y)/3;let C=qs(x),T=0;const m=F===0,d=F===a-1,_=h===0,M=h===n-1;C==="quarter"&&(m||d||_||M)?m?T=2:d?T=0:_?T=1:M&&(T=3):C==="quarter"&&(C=x<128?"square":"circle");const k=Is(p,v,y,t);f.push({shape:C,color:k,rotation:T})}r(f)},o.onerror=l})}class Hs{history=[];currentIndex=-1;maxHistory=50;constructor(t){t&&this.addState(t)}addState(t){this.currentIndex<this.history.length-1&&(this.history=this.history.slice(0,this.currentIndex+1)),this.history.push({grid:JSON.parse(JSON.stringify(t)),timestamp:Date.now()}),this.history.length>this.maxHistory?this.history.shift():this.currentIndex++}undo(){return this.canUndo()?(this.currentIndex--,JSON.parse(JSON.stringify(this.history[this.currentIndex].grid))):null}redo(){return this.canRedo()?(this.currentIndex++,JSON.parse(JSON.stringify(this.history[this.currentIndex].grid))):null}canUndo(){return this.currentIndex>0}canRedo(){return this.currentIndex<this.history.length-1}clear(){this.history=[],this.currentIndex=-1}getCurrentState(){return this.currentIndex>=0&&this.currentIndex<this.history.length?JSON.parse(JSON.stringify(this.history[this.currentIndex].grid)):null}}class Us{clipboardData=null;copy(t,n,a){const{startX:r,startY:l,endX:o,endY:s}=this.normalizeSelection(n),i=o-r+1,c=s-l+1,f=[];for(let g=l;g<=s;g++)for(let b=r;b<=o;b++){const h=g*a+b;f.push(t[h]?JSON.parse(JSON.stringify(t[h])):null)}this.clipboardData={cells:f,width:i,height:c}}cut(t,n,a){return this.copy(t,n,a),this.deleteSelection(t,n,a)}paste(t,n,a,r,l){if(!this.clipboardData)return t;const o=[...t],{cells:s,width:i,height:c}=this.clipboardData;for(let f=0;f<c;f++)for(let g=0;g<i;g++){const b=n+g,h=a+f;if(b>=0&&b<r&&h>=0&&h<l){const F=f*i+g,p=h*r+b;o[p]=s[F]?JSON.parse(JSON.stringify(s[F])):null}}return o}deleteSelection(t,n,a){const{startX:r,startY:l,endX:o,endY:s}=this.normalizeSelection(n),i=[...t];for(let c=l;c<=s;c++)for(let f=r;f<=o;f++){const g=c*a+f;i[g]=null}return i}rotateSelection(t,n,a,r=!0){const{startX:l,startY:o,endX:s,endY:i}=this.normalizeSelection(n),c=s-l+1,f=i-o+1,g=[];for(let h=o;h<=i;h++)for(let F=l;F<=s;F++){const p=h*a+F;g.push(t[p])}const b=new Array(c*f);for(let h=0;h<f;h++)for(let F=0;F<c;F++){const p=h*c+F;let v;r?v=F*f+(f-1-h):v=(c-1-F)*f+h;const y=g[p];b[v]=y?{...y,rotation:(y.rotation+(r?1:-1)+4)%4}:null}if(c===f){const h=[...t];for(let F=0;F<f;F++)for(let p=0;p<c;p++){const v=(o+F)*a+(l+p),y=F*c+p;h[v]=b[y]}return h}return t}moveSelection(t,n,a,r,l,o){const{startX:s,startY:i,endX:c,endY:f}=this.normalizeSelection(n),g=c-s+1,b=f-i+1,h=Math.max(0,Math.min(l-g,s+a)),F=Math.max(0,Math.min(o-b,i+r)),p=h+g-1,v=F+b-1;if(h===s&&F===i)return{grid:t,selection:n};const y=[];for(let C=i;C<=f;C++)for(let T=s;T<=c;T++){const m=C*l+T;y.push(t[m])}let S=this.deleteSelection(t,n,l);for(let C=0;C<b;C++)for(let T=0;T<g;T++){const m=C*g+T,d=(F+C)*l+(h+T);S[d]=y[m]}const x={...n,startX:h,startY:F,endX:p,endY:v};return{grid:S,selection:x}}hasClipboardData(){return this.clipboardData!==null}getClipboardSize(){return this.clipboardData?{width:this.clipboardData.width,height:this.clipboardData.height}:null}normalizeSelection(t){return{startX:Math.min(t.startX,t.endX),startY:Math.min(t.startY,t.endY),endX:Math.max(t.startX,t.endX),endY:Math.max(t.startY,t.endY)}}}var js=se('<main class="svelte-1uha8ag"><!> <!></main>');function t0(e,t){ve(t,!1);let n=W("square"),a=W(Ue.length>0?Ue[0].rgb:"#000000"),r=W(null),l=W(!1),o=W(!1),s=W("left"),i=W(1),c=W(32),f=W(!1),g=W(0),b=W(0),h=W({startX:0,startY:0,endX:0,endY:0,active:!1}),F,p,v=W(!1),y=W(!1);function S(){E(i,Math.min(u(i)+.1,3))}function x(){E(i,Math.max(u(i)-.1,.2))}tn(()=>{F=new Hs,p=new Us,u(r)||(E(r,Array(u(c)*u(c)).fill(null)),F.addState(u(r))),C(),window.addEventListener("keydown",m)}),zn(()=>{typeof window<"u"&&window.removeEventListener("keydown",m)});function C(){E(v,F?.canUndo()??!1),E(y,F?.canRedo()??!1)}function T(A){F&&(F.addState(A),C())}function m(A){if(!(A.target instanceof HTMLInputElement||A.target instanceof HTMLTextAreaElement)){for(const[Me,ie]of Object.entries(ee))if(ks(A,ie)){A.preventDefault(),d(ie.action);break}}}function d(A){switch(A){case"select":E(o,!0),E(l,!1),E(f,!1);break;case"square":E(n,"square");break;case"circle":E(n,"circle");break;case"quarter":u(n)==="quarter"?E(g,(u(g)+1)%4):(E(n,"quarter"),E(g,0));break;case"halfCircle":u(n)==="halfCircle"?E(b,(u(b)+1)%4):(E(n,"halfCircle"),E(b,0));break;case"fill":E(l,!u(l)),u(l)&&(E(o,!1),E(f,!1));break;case"colorPicker":E(f,!u(f)),u(f)&&(E(o,!1),E(l,!1));break;case"zoomIn":S();break;case"zoomOut":x();break;case"undo":B();break;case"redo":H();break;case"cut":P();break;case"copy":j();break;case"paste":de();break;case"selectAll":_e();break;case"deselect":st();break;case"delete":he();break;case"rotateLeft":u(h).active&&De(!1);break;case"rotateRight":u(h).active&&De(!0);break;case"moveUp":u(h).active&&qe(0,-1);break;case"moveDown":u(h).active&&qe(0,1);break;case"moveLeft":u(h).active&&qe(-1,0);break;case"moveRight":u(h).active&&qe(1,0);break}}function _(A){E(n,A.detail.shape)}function M(A){E(g,A.detail.rotation)}function k(A){E(b,A.detail.rotation)}function R(A){E(a,A.detail.color)}async function D(A){const Me=Ue.map(ie=>ie.rgb);E(r,await Xs(A.detail.src,Me,u(c),u(c)))}function N(A){E(c,A.detail.size),E(r,null)}function K(A){E(f,A.detail.colorPickerMode)}function O(A){E(o,A.detail.selectMode),u(o)&&(E(l,!1),E(f,!1))}function B(){if(F){const A=F.undo();A&&(E(r,A),C())}}function H(){if(F){const A=F.redo();A&&(E(r,A),C())}}function U(A){E(h,A.detail.selection)}function ae(A){E(r,A.detail.grid),u(r)&&T(u(r))}function P(){if(u(h).active&&u(r)&&p){const A=p.cut(u(r),u(h),u(c));E(r,A),T(u(r)),E(h,{...u(h),active:!1})}}function j(){u(h).active&&u(r)&&p&&p.copy(u(r),u(h),u(c))}function de(){if(u(r)&&p&&p.hasClipboardData()){const A=u(h).active?u(h).startX:0,Me=u(h).active?u(h).startY:0,ie=p.paste(u(r),A,Me,u(c),u(c));E(r,ie),T(u(r))}}function he(){if(u(h).active&&u(r)&&p){const A=p.deleteSelection(u(r),u(h),u(c));E(r,A),T(u(r)),E(h,{...u(h),active:!1})}}function _e(){E(h,{startX:0,startY:0,endX:u(c)-1,endY:u(c)-1,active:!0}),E(o,!0),E(l,!1),E(f,!1)}function st(){E(h,{...u(h),active:!1})}function De(A=!0){if(u(h).active&&u(r)&&p){const Me=p.rotateSelection(u(r),u(h),u(c),A);E(r,Me),T(u(r))}}function qe(A,Me){if(u(h).active&&u(r)&&p){const ie=p.moveSelection(u(r),u(h),A,Me,u(c),u(c));E(r,ie.grid),E(h,ie.selection),T(u(r))}}function ht(A){E(a,A.detail.color),E(f,!1)}ye();var it=js();Ha(A=>{Br.title="Dotsly"});var bt=X(it);Ys(bt,{get toolbarPosition(){return u(s)},set toolbarPosition(A){E(s,A)},get selectedColor(){return u(a)},set selectedColor(A){E(a,A)},get selectedShape(){return u(n)},set selectedShape(A){E(n,A)},get paintMode(){return u(l)},set paintMode(A){E(l,A)},get selectMode(){return u(o)},set selectMode(A){E(o,A)},get colorPickerMode(){return u(f)},set colorPickerMode(A){E(f,A)},get quarterRotation(){return u(g)},set quarterRotation(A){E(g,A)},get halfCircleRotation(){return u(b)},set halfCircleRotation(A){E(b,A)},get size(){return u(c)},set size(A){E(c,A)},get canUndo(){return u(v)},set canUndo(A){E(v,A)},get canRedo(){return u(y)},set canRedo(A){E(y,A)},$$events:{shapeSelected:_,colorSelected:R,imageUploaded:D,paintModeToggled:A=>E(l,A.detail.paintMode),colorPickerModeToggled:K,selectModeToggled:O,undo:B,redo:H,zoomIn:S,zoomOut:x,quarterRotationChanged:M,halfCircleRotationChanged:k,sizeChanged:N},$$legacy:!0});var Ne=ne(bt,2);{var gt=A=>{$n(A,{get width(){return u(c)},get height(){return u(c)},get selectedShape(){return u(n)},get selectedColor(){return u(a)},get selectMode(){return u(o)},get grid(){return u(r)},get paintMode(){return u(l)},get colorPickerMode(){return u(f)},get toolbarPosition(){return u(s)},get zoom(){return u(i)},get quarterRotation(){return u(g)},get halfCircleRotation(){return u(b)},get selection(){return u(h)},$$events:{colorPicked:ht,selectionChanged:U,gridChanged:ae}})},Dt=A=>{$n(A,{get width(){return u(c)},get height(){return u(c)},get selectedShape(){return u(n)},get selectedColor(){return u(a)},get selectMode(){return u(o)},get paintMode(){return u(l)},get colorPickerMode(){return u(f)},get toolbarPosition(){return u(s)},get zoom(){return u(i)},get quarterRotation(){return u(g)},get halfCircleRotation(){return u(b)},get selection(){return u(h)},$$events:{colorPicked:ht,selectionChanged:U,gridChanged:ae}})};$e(Ne,A=>{u(r)?A(gt):A(Dt,!1)})}Y(it),V(e,it),ke()}export{t0 as component};
