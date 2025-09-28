import"../chunks/DsnmJJEf.js";import"../chunks/DXAwGQm7.js";import{i as La,a as Ra,c as $a,d as Oa,n as Na,b as za,e as Be,o as en,f as J,g as On,s as St,j as Ga}from"../chunks/Csy9xEDe.js";import{B as tn,w as wt,aT as Nn,z as ft,h as Q,aA as zn,a as Ut,g as u,W as ce,x as Ya,H as Ia,y as bn,A as Ie,J as Oe,ag as qa,aI as Xa,C as Je,F as Ha,aU as Ct,aV as Mt,D as Ke,af as gn,a8 as W,X as Fn,aF as Gn,ax as Yn,G as nn,I as In,aW as Ua,aX as Tt,M as ja,an as Qe,aY as Za,at as Va,aZ as Wa,aE as Ka,a_ as Ja,T as qn,a$ as Qa,E as er,b0 as tr,aH as nr,K as Xn,b1 as ar,b2 as rr,av as lr,b3 as sr,b4 as or,b5 as ir,b6 as cr,b7 as fr,b8 as ur,U as dr,b9 as hr,ba as br,bb as gr,bc as Fr,aa as Hn,d as j,L as pr,bd as mr,p as ve,n as te,q as I,s as z,R as E,t as be,m as V,o as ke,k as ye,l as Fe,v as K,f as U,be as jt,bf as Un,bg as vr,ao as kr,bh as _r,ab as yr,bi as wr,bj as Cr}from"../chunks/DckqTTcM.js";import{p as $,b as Zt,i as Ne,l as Le,s as He}from"../chunks/q0klybCy.js";import{i as _e}from"../chunks/BBao4eQ6.js";import{s as Re}from"../chunks/M1l1I-Ar.js";function ut(e,t){return t}function Mr(e,t,n){for(var a=e.items,r=[],l=t.length,s=0;s<l;s++)Wa(t[s].e,r,!0);var o=l>0&&r.length===0&&n!==null;if(o){var i=n.parentNode;Ka(i),i.append(n),a.clear(),Ae(e,t[0].prev,t[l-1].next)}Ja(r,()=>{for(var f=0;f<l;f++){var h=t[f];o||(a.delete(h.k),Ae(e,h.prev,h.next)),Qe(h.e,!o)}})}function dt(e,t,n,a,r,l=null){var s=e,o={flags:t,items:new Map,first:null},i=(t&Nn)!==0;if(i){var f=e;s=Q?ft(zn(f)):f.appendChild(tn())}Q&&Ut();var h=null,b=!1,c=new Map,F=ce(()=>{var y=n();return Yn(y)?y:y==null?[]:Gn(y)}),g,_;function m(){Ar(_,g,o,c,s,r,t,a,n),l!==null&&(g.length===0?h?nn(h):h=Je(()=>l(s)):h!==null&&In(h,()=>{h=null}))}wt(()=>{_??=qn,g=u(F);var y=g.length;if(b&&y===0)return;b=y===0;let D=!1;if(Q){var L=Ya(s)===Ia;L!==(y===0)&&(s=bn(),ft(s),Ie(!1),D=!0)}if(Q){for(var k=null,A,p=0;p<y;p++){if(Oe.nodeType===qa&&Oe.data===Xa){s=Oe,D=!0,Ie(!1);break}var d=g[p],v=a(d,p);A=Vt(Oe,o,k,null,d,v,p,r,t,n),o.items.set(v,A),k=A}y>0&&ft(bn())}if(Q)y===0&&l&&(h=Je(()=>l(s)));else if(Ha()){var w=new Set,C=Ke;for(p=0;p<y;p+=1){d=g[p],v=a(d,p);var T=o.items.get(v)??c.get(v);T?(t&(Ct|Mt))!==0&&jn(T,d,p,t):(A=Vt(null,o,null,null,d,v,p,r,t,n,!0),c.set(v,A)),w.add(v)}for(const[B,N]of o.items)w.has(B)||C.skipped_effects.add(N.e);C.add_callback(m)}else m();D&&Ie(!0),u(F)}),Q&&(s=Oe)}function Ar(e,t,n,a,r,l,s,o,i){var f=(s&Za)!==0,h=(s&(Ct|Mt))!==0,b=t.length,c=n.items,F=n.first,g=F,_,m=null,y,D=[],L=[],k,A,p,d;if(f)for(d=0;d<b;d+=1)k=t[d],A=o(k,d),p=c.get(A),p!==void 0&&(p.a?.measure(),(y??=new Set).add(p));for(d=0;d<b;d+=1){if(k=t[d],A=o(k,d),p=c.get(A),p===void 0){var v=a.get(A);if(v!==void 0){a.delete(A),c.set(A,v);var w=m?m.next:g;Ae(n,m,v),Ae(n,v,w),Dt(v,w,r),m=v}else{var C=g?g.e.nodes_start:r;m=Vt(C,n,m,m===null?n.first:m.next,k,A,d,l,s,i)}c.set(A,m),D=[],L=[],g=m.next;continue}if(h&&jn(p,k,d,s),(p.e.f&Tt)!==0&&(nn(p.e),f&&(p.a?.unfix(),(y??=new Set).delete(p))),p!==g){if(_!==void 0&&_.has(p)){if(D.length<L.length){var T=L[0],B;m=T.prev;var N=D[0],R=D[D.length-1];for(B=0;B<D.length;B+=1)Dt(D[B],T,r);for(B=0;B<L.length;B+=1)_.delete(L[B]);Ae(n,N.prev,R.next),Ae(n,m,N),Ae(n,R,T),g=T,m=R,d-=1,D=[],L=[]}else _.delete(p),Dt(p,g,r),Ae(n,p.prev,p.next),Ae(n,p,m===null?n.first:m.next),Ae(n,m,p),m=p;continue}for(D=[],L=[];g!==null&&g.k!==A;)(g.e.f&Tt)===0&&(_??=new Set).add(g),L.push(g),g=g.next;if(g===null)continue;p=g}D.push(p),m=p,g=p.next}if(g!==null||_!==void 0){for(var x=_===void 0?[]:Gn(_);g!==null;)(g.e.f&Tt)===0&&x.push(g),g=g.next;var O=x.length;if(O>0){var X=(s&Nn)!==0&&b===0?r:null;if(f){for(d=0;d<O;d+=1)x[d].a?.measure();for(d=0;d<O;d+=1)x[d].a?.fix()}Mr(n,x,X)}}f&&ja(()=>{if(y!==void 0)for(p of y)p.a?.apply()}),e.first=n.first&&n.first.e,e.last=m&&m.e;for(var P of a.values())Qe(P.e);a.clear()}function jn(e,t,n,a){(a&Ct)!==0&&gn(e.v,t),(a&Mt)!==0?gn(e.i,n):e.i=n}function Vt(e,t,n,a,r,l,s,o,i,f,h){var b=(i&Ct)!==0,c=(i&Ua)===0,F=b?c?W(r,!1,!1):Fn(r):r,g=(i&Mt)===0?s:Fn(s),_={i:g,v:F,k:l,a:null,e:null,prev:n,next:a};try{if(e===null){var m=document.createDocumentFragment();m.append(e=tn())}return _.e=Je(()=>o(e,F,g,f),Q),_.e.prev=n&&n.e,_.e.next=a&&a.e,n===null?h||(t.first=_):(n.next=_,n.e.next=_.e),a!==null&&(a.prev=_,a.e.prev=_.e),_}finally{}}function Dt(e,t,n){for(var a=e.next?e.next.e.nodes_start:n,r=t?t.e.nodes_start:n,l=e.e.nodes_start;l!==null&&l!==a;){var s=Va(l);r.before(l),l=s}}function Ae(e,t,n){t===null?e.first=n:(t.next=n,t.e.next=n&&n.e),n!==null&&(n.prev=t,n.e.prev=t&&t.e)}function Er(e,t,n,a,r,l){let s=Q;Q&&Ut();var o,i,f=null;Q&&Oe.nodeType===Qa&&(f=Oe,Ut());var h=Q?Oe:e,b;wt(()=>{const c=t()||null;var F=tr;c!==o&&(b&&(c===null?In(b,()=>{b=null,i=null}):c===i?nn(b):Qe(b)),c&&c!==i&&(b=Je(()=>{if(f=Q?f:document.createElementNS(F,c),nr(f,f),a){Q&&La(c)&&f.append(document.createComment(""));var g=Q?zn(f):f.appendChild(tn());Q&&(g===null?Ie(!1):ft(g)),a(f,g)}qn.nodes_end=f,h.before(f)})),o=c,o&&(i=o))},er),s&&(Ie(!0),ft(h))}function Br(e,t){var n=void 0,a;wt(()=>{n!==(n=t())&&(a&&(Qe(a),a=null),n&&(a=Je(()=>{Xn(()=>n(e))})))})}function Zn(e){var t,n,a="";if(typeof e=="string"||typeof e=="number")a+=e;else if(typeof e=="object")if(Array.isArray(e)){var r=e.length;for(t=0;t<r;t++)e[t]&&(n=Zn(e[t]))&&(a&&(a+=" "),a+=n)}else for(n in e)e[n]&&(a&&(a+=" "),a+=n);return a}function Sr(){for(var e,t,n=0,a="",r=arguments.length;n<r;n++)(e=arguments[n])&&(t=Zn(e))&&(a&&(a+=" "),a+=t);return a}function Tr(e){return typeof e=="object"?Sr(e):e??""}const pn=[...` 	
\r\f \v\uFEFF`];function Dr(e,t,n){var a=e==null?"":""+e;if(t&&(a=a?a+" "+t:t),n){for(var r in n)if(n[r])a=a?a+" "+r:r;else if(a.length)for(var l=r.length,s=0;(s=a.indexOf(r,s))>=0;){var o=s+l;(s===0||pn.includes(a[s-1]))&&(o===a.length||pn.includes(a[o]))?a=(s===0?"":a.substring(0,s))+a.substring(o+1):s=o}}return a===""?null:a}function mn(e,t=!1){var n=t?" !important;":";",a="";for(var r in e){var l=e[r];l!=null&&l!==""&&(a+=" "+r+": "+l+n)}return a}function xt(e){return e[0]!=="-"||e[1]!=="-"?e.toLowerCase():e}function xr(e,t){if(t){var n="",a,r;if(Array.isArray(t)?(a=t[0],r=t[1]):a=t,e){e=String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();var l=!1,s=0,o=!1,i=[];a&&i.push(...Object.keys(a).map(xt)),r&&i.push(...Object.keys(r).map(xt));var f=0,h=-1;const _=e.length;for(var b=0;b<_;b++){var c=e[b];if(o?c==="/"&&e[b-1]==="*"&&(o=!1):l?l===c&&(l=!1):c==="/"&&e[b+1]==="*"?o=!0:c==='"'||c==="'"?l=c:c==="("?s++:c===")"&&s--,!o&&l===!1&&s===0){if(c===":"&&h===-1)h=b;else if(c===";"||b===_-1){if(h!==-1){var F=xt(e.substring(f,h).trim());if(!i.includes(F)){c!==";"&&b++;var g=e.substring(f,b).trim();n+=" "+g+";"}}f=b+1,h=-1}}}}return a&&(n+=mn(a)),r&&(n+=mn(r,!0)),n=n.trim(),n===""?null:n}return e==null?null:String(e)}function xe(e,t,n,a,r,l){var s=e.__className;if(Q||s!==n||s===void 0){var o=Dr(n,a,l);(!Q||o!==e.getAttribute("class"))&&(o==null?e.removeAttribute("class"):t?e.className=o:e.setAttribute("class",o)),e.__className=n}else if(l&&r!==l)for(var i in l){var f=!!l[i];(r==null||f!==!!r[i])&&e.classList.toggle(i,f)}return l}function Pt(e,t={},n,a){for(var r in n){var l=n[r];t[r]!==l&&(n[r]==null?e.style.removeProperty(r):e.style.setProperty(r,l,a))}}function ze(e,t,n,a){var r=e.__style;if(Q||r!==t){var l=xr(t,a);(!Q||l!==e.getAttribute("style"))&&(l==null?e.removeAttribute("style"):e.style.cssText=l),e.__style=t}else a&&(Array.isArray(a)?(Pt(e,n?.[0],a[0]),Pt(e,n?.[1],a[1],"important")):Pt(e,n,a));return a}function Wt(e,t,n=!1){if(e.multiple){if(t==null)return;if(!Yn(t))return ar();for(var a of e.options)a.selected=t.includes(vn(a));return}for(a of e.options){var r=vn(a);if(rr(r,t)){a.selected=!0;return}}(!n||t!==void 0)&&(e.selectedIndex=-1)}function Pr(e){var t=new MutationObserver(()=>{Wt(e,e.__value)});t.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),lr(()=>{t.disconnect()})}function vn(e){return"__value"in e?e.__value:e.value}const it=Symbol("class"),ct=Symbol("style"),Vn=Symbol("is custom element"),Wn=Symbol("is html");function an(e){if(Q){var t=!1,n=()=>{if(!t){if(t=!0,e.hasAttribute("value")){var a=e.value;le(e,"value",null),e.value=a}if(e.hasAttribute("checked")){var r=e.checked;le(e,"checked",null),e.checked=r}}};e.__on_r=n,hr(n),br()}}function Lr(e,t){t?e.hasAttribute("selected")||e.setAttribute("selected",""):e.removeAttribute("selected")}function le(e,t,n,a){var r=Kn(e);Q&&(r[t]=e.getAttribute(t),t==="src"||t==="srcset"||t==="href"&&e.nodeName==="LINK")||r[t]!==(r[t]=n)&&(t==="loading"&&(e[gr]=n),n==null?e.removeAttribute(t):typeof n!="string"&&Jn(e).includes(t)?e[t]=n:e.setAttribute(t,n))}function Rr(e,t,n,a,r=!1,l=!1){if(Q&&r&&e.tagName==="INPUT"){var s=e,o=s.type==="checkbox"?"defaultChecked":"defaultValue";o in n||an(s)}var i=Kn(e),f=i[Vn],h=!i[Wn];let b=Q&&f;b&&Ie(!1);var c=t||{},F=e.tagName==="OPTION";for(var g in t)g in n||(n[g]=null);n.class?n.class=Tr(n.class):n[it]&&(n.class=null),n[ct]&&(n.style??=null);var _=Jn(e);for(const p in n){let d=n[p];if(F&&p==="value"&&d==null){e.value=e.__value="",c[p]=d;continue}if(p==="class"){var m=e.namespaceURI==="http://www.w3.org/1999/xhtml";xe(e,m,d,a,t?.[it],n[it]),c[p]=d,c[it]=n[it];continue}if(p==="style"){ze(e,d,t?.[ct],n[ct]),c[p]=d,c[ct]=n[ct];continue}var y=c[p];if(!(d===y&&!(d===void 0&&e.hasAttribute(p)))){c[p]=d;var D=p[0]+p[1];if(D!=="$$")if(D==="on"){const v={},w="$$"+p;let C=p.slice(2);var L=za(C);if(Ra(C)&&(C=C.slice(0,-7),v.capture=!0),!L&&y){if(d!=null)continue;e.removeEventListener(C,c[w],v),c[w]=null}if(d!=null)if(L)e[`__${C}`]=d,Oa([C]);else{let T=function(B){c[p].call(this,B)};c[w]=$a(C,e,T,v)}else L&&(e[`__${C}`]=void 0)}else if(p==="style")le(e,p,d);else if(p==="autofocus")ur(e,!!d);else if(!f&&(p==="__value"||p==="value"&&d!=null))e.value=e.__value=d;else if(p==="selected"&&F)Lr(e,d);else{var k=p;h||(k=Na(k));var A=k==="defaultValue"||k==="defaultChecked";if(d==null&&!f&&!A)if(i[p]=null,k==="value"||k==="checked"){let v=e;const w=t===void 0;if(k==="value"){let C=v.defaultValue;v.removeAttribute(k),v.defaultValue=C,v.value=v.__value=w?C:null}else{let C=v.defaultChecked;v.removeAttribute(k),v.defaultChecked=C,v.checked=w?C:!1}}else e.removeAttribute(p);else A||_.includes(k)&&(f||typeof d!="string")?(e[k]=d,k in i&&(i[k]=dr)):typeof d!="function"&&le(e,k,d)}}}return b&&Ie(!0),c}function kn(e,t,n=[],a=[],r,l=!1,s=!1){sr(n,a,o=>{var i=void 0,f={},h=e.nodeName==="SELECT",b=!1;if(wt(()=>{var F=t(...o.map(u)),g=Rr(e,i,F,r,l,s);b&&h&&"value"in F&&Wt(e,F.value);for(let m of Object.getOwnPropertySymbols(f))F[m]||Qe(f[m]);for(let m of Object.getOwnPropertySymbols(F)){var _=F[m];m.description===cr&&(!i||_!==i[m])&&(f[m]&&Qe(f[m]),f[m]=Je(()=>Br(e,()=>_))),g[m]=_}i=g}),h){var c=e;Xn(()=>{Wt(c,i.value,!0),Pr(c)})}b=!0})}function Kn(e){return e.__attributes??={[Vn]:e.nodeName.includes("-"),[Wn]:e.namespaceURI===or}}var _n=new Map;function Jn(e){var t=e.getAttribute("is")||e.nodeName,n=_n.get(t);if(n)return n;_n.set(t,n=[]);for(var a,r=e,l=Element.prototype;l!==r;){a=fr(r);for(var s in a)a[s].set&&n.push(s);r=ir(r)}return n}function Qn(e,t,n=t){var a=new WeakSet;Fr(e,"input",async r=>{var l=r?e.defaultValue:e.value;if(l=Lt(e)?Rt(l):l,n(l),Ke!==null&&a.add(Ke),await Hn(),l!==(l=t())){var s=e.selectionStart,o=e.selectionEnd;e.value=l??"",o!==null&&(e.selectionStart=s,e.selectionEnd=Math.min(o,e.value.length))}}),(Q&&e.defaultValue!==e.value||j(t)==null&&e.value)&&(n(Lt(e)?Rt(e.value):e.value),Ke!==null&&a.add(Ke)),pr(()=>{var r=t();if(e===document.activeElement){var l=mr??Ke;if(a.has(l))return}Lt(e)&&r===Rt(e.value)||e.type==="date"&&!r&&!e.value||r!==e.value&&(e.value=r??"")})}function Lt(e){var t=e.type;return t==="number"||t==="range"}function Rt(e){return e===""?null:+e}const $r=`Part,Color,Quantity,Is Spare
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
`,Or=`Part,Color,Quantity,Is Spare
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
`,Nr=`Part,Color,Quantity,Is Spare
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
`,zr=`Part,Color,Quantity,Is Spare
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
`,Gr=`Part,Color,Quantity,Is Spare
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
`,Yr=`Part,Color,Quantity,Is Spare
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
`,Ir=`id,name,rgb,is_trans,num_parts,num_sets,y1,y2
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
`,{min:qr,max:Xr}=Math,qe=(e,t=0,n=1)=>qr(Xr(t,e),n),rn=e=>{e._clipped=!1,e._unclipped=e.slice(0);for(let t=0;t<=3;t++)t<3?((e[t]<0||e[t]>255)&&(e._clipped=!0),e[t]=qe(e[t],0,255)):t===3&&(e[t]=qe(e[t],0,1));return e},ea={};for(let e of["Boolean","Number","String","Function","Array","Date","RegExp","Undefined","Null"])ea[`[object ${e}]`]=e.toLowerCase();function H(e){return ea[Object.prototype.toString.call(e)]||"object"}const Y=(e,t=null)=>e.length>=3?Array.prototype.slice.call(e):H(e[0])=="object"&&t?t.split("").filter(n=>e[0][n]!==void 0).map(n=>e[0][n]):e[0].slice(0),nt=e=>{if(e.length<2)return null;const t=e.length-1;return H(e[t])=="string"?e[t].toLowerCase():null},{PI:At,min:ta,max:na}=Math,pe=e=>Math.round(e*100)/100,Kt=e=>Math.round(e*100)/100,Te=At*2,$t=At/3,Hr=At/180,Ur=180/At;function aa(e){return[...e.slice(0,3).reverse(),...e.slice(3)]}const G={format:{},autodetect:[]};class M{constructor(...t){const n=this;if(H(t[0])==="object"&&t[0].constructor&&t[0].constructor===this.constructor)return t[0];let a=nt(t),r=!1;if(!a){r=!0,G.sorted||(G.autodetect=G.autodetect.sort((l,s)=>s.p-l.p),G.sorted=!0);for(let l of G.autodetect)if(a=l.test(...t),a)break}if(G.format[a]){const l=G.format[a].apply(null,r?t:t.slice(0,-1));n._rgb=rn(l)}else throw new Error("unknown format: "+t);n._rgb.length===3&&n._rgb.push(1)}toString(){return H(this.hex)=="function"?this.hex():`[${this._rgb.join(",")}]`}}const jr="3.1.2",q=(...e)=>new M(...e);q.version=jr;const et={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",gold:"#ffd700",goldenrod:"#daa520",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",laserlemon:"#ffff54",lavender:"#e6e6fa",lavenderblush:"#fff0f5",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrod:"#fafad2",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",maroon2:"#7f0000",maroon3:"#b03060",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",purple2:"#7f007f",purple3:"#a020f0",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"},Zr=/^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/,Vr=/^#?([A-Fa-f0-9]{8}|[A-Fa-f0-9]{4})$/,ra=e=>{if(e.match(Zr)){(e.length===4||e.length===7)&&(e=e.substr(1)),e.length===3&&(e=e.split(""),e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]);const t=parseInt(e,16),n=t>>16,a=t>>8&255,r=t&255;return[n,a,r,1]}if(e.match(Vr)){(e.length===5||e.length===9)&&(e=e.substr(1)),e.length===4&&(e=e.split(""),e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]+e[3]+e[3]);const t=parseInt(e,16),n=t>>24&255,a=t>>16&255,r=t>>8&255,l=Math.round((t&255)/255*100)/100;return[n,a,r,l]}throw new Error(`unknown hex color: ${e}`)},{round:Ft}=Math,la=(...e)=>{let[t,n,a,r]=Y(e,"rgba"),l=nt(e)||"auto";r===void 0&&(r=1),l==="auto"&&(l=r<1?"rgba":"rgb"),t=Ft(t),n=Ft(n),a=Ft(a);let o="000000"+(t<<16|n<<8|a).toString(16);o=o.substr(o.length-6);let i="0"+Ft(r*255).toString(16);switch(i=i.substr(i.length-2),l.toLowerCase()){case"rgba":return`#${o}${i}`;case"argb":return`#${i}${o}`;default:return`#${o}`}};M.prototype.name=function(){const e=la(this._rgb,"rgb");for(let t of Object.keys(et))if(et[t]===e)return t.toLowerCase();return e};G.format.named=e=>{if(e=e.toLowerCase(),et[e])return ra(et[e]);throw new Error("unknown color name: "+e)};G.autodetect.push({p:5,test:(e,...t)=>{if(!t.length&&H(e)==="string"&&et[e.toLowerCase()])return"named"}});M.prototype.alpha=function(e,t=!1){return e!==void 0&&H(e)==="number"?t?(this._rgb[3]=e,this):new M([this._rgb[0],this._rgb[1],this._rgb[2],e],"rgb"):this._rgb[3]};M.prototype.clipped=function(){return this._rgb._clipped||!1};const Ee={Kn:18,labWhitePoint:"d65",Xn:.95047,Yn:1,Zn:1.08883,kE:216/24389,kKE:8,kK:24389/27,RefWhiteRGB:{X:.95047,Y:1,Z:1.08883},MtxRGB2XYZ:{m00:.4124564390896922,m01:.21267285140562253,m02:.0193338955823293,m10:.357576077643909,m11:.715152155287818,m12:.11919202588130297,m20:.18043748326639894,m21:.07217499330655958,m22:.9503040785363679},MtxXYZ2RGB:{m00:3.2404541621141045,m01:-.9692660305051868,m02:.055643430959114726,m10:-1.5371385127977166,m11:1.8760108454466942,m12:-.2040259135167538,m20:-.498531409556016,m21:.041556017530349834,m22:1.0572251882231791},As:.9414285350000001,Bs:1.040417467,Cs:1.089532651,MtxAdaptMa:{m00:.8951,m01:-.7502,m02:.0389,m10:.2664,m11:1.7135,m12:-.0685,m20:-.1614,m21:.0367,m22:1.0296},MtxAdaptMaI:{m00:.9869929054667123,m01:.43230526972339456,m02:-.008528664575177328,m10:-.14705425642099013,m11:.5183602715367776,m12:.04004282165408487,m20:.15996265166373125,m21:.0492912282128556,m22:.9684866957875502}},Wr=new Map([["a",[1.0985,.35585]],["b",[1.0985,.35585]],["c",[.98074,1.18232]],["d50",[.96422,.82521]],["d55",[.95682,.92149]],["d65",[.95047,1.08883]],["e",[1,1,1]],["f2",[.99186,.67393]],["f7",[.95041,1.08747]],["f11",[1.00962,.6435]],["icc",[.96422,.82521]]]);function De(e){const t=Wr.get(String(e).toLowerCase());if(!t)throw new Error("unknown Lab illuminant "+e);Ee.labWhitePoint=e,Ee.Xn=t[0],Ee.Zn=t[1]}function ht(){return Ee.labWhitePoint}const ln=(...e)=>{e=Y(e,"lab");const[t,n,a]=e,[r,l,s]=Kr(t,n,a),[o,i,f]=sa(r,l,s);return[o,i,f,e.length>3?e[3]:1]},Kr=(e,t,n)=>{const{kE:a,kK:r,kKE:l,Xn:s,Yn:o,Zn:i}=Ee,f=(e+16)/116,h=.002*t+f,b=f-.005*n,c=h*h*h,F=b*b*b,g=c>a?c:(116*h-16)/r,_=e>l?Math.pow((e+16)/116,3):e/r,m=F>a?F:(116*b-16)/r,y=g*s,D=_*o,L=m*i;return[y,D,L]},Ot=e=>{const t=Math.sign(e);return e=Math.abs(e),(e<=.0031308?e*12.92:1.055*Math.pow(e,1/2.4)-.055)*t},sa=(e,t,n)=>{const{MtxAdaptMa:a,MtxAdaptMaI:r,MtxXYZ2RGB:l,RefWhiteRGB:s,Xn:o,Yn:i,Zn:f}=Ee,h=o*a.m00+i*a.m10+f*a.m20,b=o*a.m01+i*a.m11+f*a.m21,c=o*a.m02+i*a.m12+f*a.m22,F=s.X*a.m00+s.Y*a.m10+s.Z*a.m20,g=s.X*a.m01+s.Y*a.m11+s.Z*a.m21,_=s.X*a.m02+s.Y*a.m12+s.Z*a.m22,m=(e*a.m00+t*a.m10+n*a.m20)*(F/h),y=(e*a.m01+t*a.m11+n*a.m21)*(g/b),D=(e*a.m02+t*a.m12+n*a.m22)*(_/c),L=m*r.m00+y*r.m10+D*r.m20,k=m*r.m01+y*r.m11+D*r.m21,A=m*r.m02+y*r.m12+D*r.m22,p=Ot(L*l.m00+k*l.m10+A*l.m20),d=Ot(L*l.m01+k*l.m11+A*l.m21),v=Ot(L*l.m02+k*l.m12+A*l.m22);return[p*255,d*255,v*255]},sn=(...e)=>{const[t,n,a,...r]=Y(e,"rgb"),[l,s,o]=oa(t,n,a),[i,f,h]=Jr(l,s,o);return[i,f,h,...r.length>0&&r[0]<1?[r[0]]:[]]};function Jr(e,t,n){const{Xn:a,Yn:r,Zn:l,kE:s,kK:o}=Ee,i=e/a,f=t/r,h=n/l,b=i>s?Math.pow(i,1/3):(o*i+16)/116,c=f>s?Math.pow(f,1/3):(o*f+16)/116,F=h>s?Math.pow(h,1/3):(o*h+16)/116;return[116*c-16,500*(b-c),200*(c-F)]}function Nt(e){const t=Math.sign(e);return e=Math.abs(e),(e<=.04045?e/12.92:Math.pow((e+.055)/1.055,2.4))*t}const oa=(e,t,n)=>{e=Nt(e/255),t=Nt(t/255),n=Nt(n/255);const{MtxRGB2XYZ:a,MtxAdaptMa:r,MtxAdaptMaI:l,Xn:s,Yn:o,Zn:i,As:f,Bs:h,Cs:b}=Ee;let c=e*a.m00+t*a.m10+n*a.m20,F=e*a.m01+t*a.m11+n*a.m21,g=e*a.m02+t*a.m12+n*a.m22;const _=s*r.m00+o*r.m10+i*r.m20,m=s*r.m01+o*r.m11+i*r.m21,y=s*r.m02+o*r.m12+i*r.m22;let D=c*r.m00+F*r.m10+g*r.m20,L=c*r.m01+F*r.m11+g*r.m21,k=c*r.m02+F*r.m12+g*r.m22;return D*=_/f,L*=m/h,k*=y/b,c=D*l.m00+L*l.m10+k*l.m20,F=D*l.m01+L*l.m11+k*l.m21,g=D*l.m02+L*l.m12+k*l.m22,[c,F,g]};M.prototype.lab=function(){return sn(this._rgb)};const Qr=(...e)=>new M(...e,"lab");Object.assign(q,{lab:Qr,getLabWhitePoint:ht,setLabWhitePoint:De});G.format.lab=ln;G.autodetect.push({p:2,test:(...e)=>{if(e=Y(e,"lab"),H(e)==="array"&&e.length===3)return"lab"}});M.prototype.darken=function(e=1){const t=this,n=t.lab();return n[0]-=Ee.Kn*e,new M(n,"lab").alpha(t.alpha(),!0)};M.prototype.brighten=function(e=1){return this.darken(-e)};M.prototype.darker=M.prototype.darken;M.prototype.brighter=M.prototype.brighten;M.prototype.get=function(e){const[t,n]=e.split("."),a=this[t]();if(n){const r=t.indexOf(n)-(t.substr(0,2)==="ok"?2:0);if(r>-1)return a[r];throw new Error(`unknown channel ${n} in mode ${t}`)}else return a};const{pow:el}=Math,tl=1e-7,nl=20;M.prototype.luminance=function(e,t="rgb"){if(e!==void 0&&H(e)==="number"){if(e===0)return new M([0,0,0,this._rgb[3]],"rgb");if(e===1)return new M([255,255,255,this._rgb[3]],"rgb");let n=this.luminance(),a=nl;const r=(s,o)=>{const i=s.interpolate(o,.5,t),f=i.luminance();return Math.abs(e-f)<tl||!a--?i:f>e?r(s,i):r(i,o)},l=(n>e?r(new M([0,0,0]),this):r(this,new M([255,255,255]))).rgb();return new M([...l,this._rgb[3]])}return al(...this._rgb.slice(0,3))};const al=(e,t,n)=>(e=zt(e),t=zt(t),n=zt(n),.2126*e+.7152*t+.0722*n),zt=e=>(e/=255,e<=.03928?e/12.92:el((e+.055)/1.055,2.4)),se={},tt=(e,t,n=.5,...a)=>{let r=a[0]||"lrgb";if(!se[r]&&!a.length&&(r=Object.keys(se)[0]),!se[r])throw new Error(`interpolation mode ${r} is not defined`);return H(e)!=="object"&&(e=new M(e)),H(t)!=="object"&&(t=new M(t)),se[r](e,t,n).alpha(e.alpha()+n*(t.alpha()-e.alpha()))};M.prototype.mix=M.prototype.interpolate=function(e,t=.5,...n){return tt(this,e,t,...n)};M.prototype.premultiply=function(e=!1){const t=this._rgb,n=t[3];return e?(this._rgb=[t[0]*n,t[1]*n,t[2]*n,n],this):new M([t[0]*n,t[1]*n,t[2]*n,n],"rgb")};const{sin:rl,cos:ll}=Math,ia=(...e)=>{let[t,n,a]=Y(e,"lch");return isNaN(a)&&(a=0),a=a*Hr,[t,ll(a)*n,rl(a)*n]},on=(...e)=>{e=Y(e,"lch");const[t,n,a]=e,[r,l,s]=ia(t,n,a),[o,i,f]=ln(r,l,s);return[o,i,f,e.length>3?e[3]:1]},sl=(...e)=>{const t=aa(Y(e,"hcl"));return on(...t)},{sqrt:ol,atan2:il,round:cl}=Math,ca=(...e)=>{const[t,n,a]=Y(e,"lab"),r=ol(n*n+a*a);let l=(il(a,n)*Ur+360)%360;return cl(r*1e4)===0&&(l=Number.NaN),[t,r,l]},cn=(...e)=>{const[t,n,a,...r]=Y(e,"rgb"),[l,s,o]=sn(t,n,a),[i,f,h]=ca(l,s,o);return[i,f,h,...r.length>0&&r[0]<1?[r[0]]:[]]};M.prototype.lch=function(){return cn(this._rgb)};M.prototype.hcl=function(){return aa(cn(this._rgb))};const fl=(...e)=>new M(...e,"lch"),ul=(...e)=>new M(...e,"hcl");Object.assign(q,{lch:fl,hcl:ul});G.format.lch=on;G.format.hcl=sl;["lch","hcl"].forEach(e=>G.autodetect.push({p:2,test:(...t)=>{if(t=Y(t,e),H(t)==="array"&&t.length===3)return e}}));M.prototype.saturate=function(e=1){const t=this,n=t.lch();return n[1]+=Ee.Kn*e,n[1]<0&&(n[1]=0),new M(n,"lch").alpha(t.alpha(),!0)};M.prototype.desaturate=function(e=1){return this.saturate(-e)};M.prototype.set=function(e,t,n=!1){const[a,r]=e.split("."),l=this[a]();if(r){const s=a.indexOf(r)-(a.substr(0,2)==="ok"?2:0);if(s>-1){if(H(t)=="string")switch(t.charAt(0)){case"+":l[s]+=+t;break;case"-":l[s]+=+t;break;case"*":l[s]*=+t.substr(1);break;case"/":l[s]/=+t.substr(1);break;default:l[s]=+t}else if(H(t)==="number")l[s]=t;else throw new Error("unsupported value for Color.set");const o=new M(l,a);return n?(this._rgb=o._rgb,this):o}throw new Error(`unknown channel ${r} in mode ${a}`)}else return l};M.prototype.tint=function(e=.5,...t){return tt(this,"white",e,...t)};M.prototype.shade=function(e=.5,...t){return tt(this,"black",e,...t)};const dl=(e,t,n)=>{const a=e._rgb,r=t._rgb;return new M(a[0]+n*(r[0]-a[0]),a[1]+n*(r[1]-a[1]),a[2]+n*(r[2]-a[2]),"rgb")};se.rgb=dl;const{sqrt:Gt,pow:Ze}=Math,hl=(e,t,n)=>{const[a,r,l]=e._rgb,[s,o,i]=t._rgb;return new M(Gt(Ze(a,2)*(1-n)+Ze(s,2)*n),Gt(Ze(r,2)*(1-n)+Ze(o,2)*n),Gt(Ze(l,2)*(1-n)+Ze(i,2)*n),"rgb")};se.lrgb=hl;const bl=(e,t,n)=>{const a=e.lab(),r=t.lab();return new M(a[0]+n*(r[0]-a[0]),a[1]+n*(r[1]-a[1]),a[2]+n*(r[2]-a[2]),"lab")};se.lab=bl;const at=(e,t,n,a)=>{let r,l;a==="hsl"?(r=e.hsl(),l=t.hsl()):a==="hsv"?(r=e.hsv(),l=t.hsv()):a==="hcg"?(r=e.hcg(),l=t.hcg()):a==="hsi"?(r=e.hsi(),l=t.hsi()):a==="lch"||a==="hcl"?(a="hcl",r=e.hcl(),l=t.hcl()):a==="oklch"&&(r=e.oklch().reverse(),l=t.oklch().reverse());let s,o,i,f,h,b;(a.substr(0,1)==="h"||a==="oklch")&&([s,i,h]=r,[o,f,b]=l);let c,F,g,_;return!isNaN(s)&&!isNaN(o)?(o>s&&o-s>180?_=o-(s+360):o<s&&s-o>180?_=o+360-s:_=o-s,F=s+n*_):isNaN(s)?isNaN(o)?F=Number.NaN:(F=o,(h==1||h==0)&&a!="hsv"&&(c=f)):(F=s,(b==1||b==0)&&a!="hsv"&&(c=i)),c===void 0&&(c=i+n*(f-i)),g=h+n*(b-h),a==="oklch"?new M([g,c,F],a):new M([F,c,g],a)},fa=(e,t,n)=>at(e,t,n,"lch");se.lch=fa;se.hcl=fa;const gl=e=>{if(H(e)=="number"&&e>=0&&e<=16777215){const t=e>>16,n=e>>8&255,a=e&255;return[t,n,a,1]}throw new Error("unknown num color: "+e)},Fl=(...e)=>{const[t,n,a]=Y(e,"rgb");return(t<<16)+(n<<8)+a};M.prototype.num=function(){return Fl(this._rgb)};const pl=(...e)=>new M(...e,"num");Object.assign(q,{num:pl});G.format.num=gl;G.autodetect.push({p:5,test:(...e)=>{if(e.length===1&&H(e[0])==="number"&&e[0]>=0&&e[0]<=16777215)return"num"}});const ml=(e,t,n)=>{const a=e.num(),r=t.num();return new M(a+n*(r-a),"num")};se.num=ml;const{floor:vl}=Math,kl=(...e)=>{e=Y(e,"hcg");let[t,n,a]=e,r,l,s;a=a*255;const o=n*255;if(n===0)r=l=s=a;else{t===360&&(t=0),t>360&&(t-=360),t<0&&(t+=360),t/=60;const i=vl(t),f=t-i,h=a*(1-n),b=h+o*(1-f),c=h+o*f,F=h+o;switch(i){case 0:[r,l,s]=[F,c,h];break;case 1:[r,l,s]=[b,F,h];break;case 2:[r,l,s]=[h,F,c];break;case 3:[r,l,s]=[h,b,F];break;case 4:[r,l,s]=[c,h,F];break;case 5:[r,l,s]=[F,h,b];break}}return[r,l,s,e.length>3?e[3]:1]},_l=(...e)=>{const[t,n,a]=Y(e,"rgb"),r=ta(t,n,a),l=na(t,n,a),s=l-r,o=s*100/255,i=r/(255-s)*100;let f;return s===0?f=Number.NaN:(t===l&&(f=(n-a)/s),n===l&&(f=2+(a-t)/s),a===l&&(f=4+(t-n)/s),f*=60,f<0&&(f+=360)),[f,o,i]};M.prototype.hcg=function(){return _l(this._rgb)};const yl=(...e)=>new M(...e,"hcg");q.hcg=yl;G.format.hcg=kl;G.autodetect.push({p:1,test:(...e)=>{if(e=Y(e,"hcg"),H(e)==="array"&&e.length===3)return"hcg"}});const wl=(e,t,n)=>at(e,t,n,"hcg");se.hcg=wl;const{cos:Ve}=Math,Cl=(...e)=>{e=Y(e,"hsi");let[t,n,a]=e,r,l,s;return isNaN(t)&&(t=0),isNaN(n)&&(n=0),t>360&&(t-=360),t<0&&(t+=360),t/=360,t<1/3?(s=(1-n)/3,r=(1+n*Ve(Te*t)/Ve($t-Te*t))/3,l=1-(s+r)):t<2/3?(t-=1/3,r=(1-n)/3,l=(1+n*Ve(Te*t)/Ve($t-Te*t))/3,s=1-(r+l)):(t-=2/3,l=(1-n)/3,s=(1+n*Ve(Te*t)/Ve($t-Te*t))/3,r=1-(l+s)),r=qe(a*r*3),l=qe(a*l*3),s=qe(a*s*3),[r*255,l*255,s*255,e.length>3?e[3]:1]},{min:Ml,sqrt:Al,acos:El}=Math,Bl=(...e)=>{let[t,n,a]=Y(e,"rgb");t/=255,n/=255,a/=255;let r;const l=Ml(t,n,a),s=(t+n+a)/3,o=s>0?1-l/s:0;return o===0?r=NaN:(r=(t-n+(t-a))/2,r/=Al((t-n)*(t-n)+(t-a)*(n-a)),r=El(r),a>n&&(r=Te-r),r/=Te),[r*360,o,s]};M.prototype.hsi=function(){return Bl(this._rgb)};const Sl=(...e)=>new M(...e,"hsi");q.hsi=Sl;G.format.hsi=Cl;G.autodetect.push({p:2,test:(...e)=>{if(e=Y(e,"hsi"),H(e)==="array"&&e.length===3)return"hsi"}});const Tl=(e,t,n)=>at(e,t,n,"hsi");se.hsi=Tl;const Jt=(...e)=>{e=Y(e,"hsl");const[t,n,a]=e;let r,l,s;if(n===0)r=l=s=a*255;else{const o=[0,0,0],i=[0,0,0],f=a<.5?a*(1+n):a+n-a*n,h=2*a-f,b=t/360;o[0]=b+1/3,o[1]=b,o[2]=b-1/3;for(let c=0;c<3;c++)o[c]<0&&(o[c]+=1),o[c]>1&&(o[c]-=1),6*o[c]<1?i[c]=h+(f-h)*6*o[c]:2*o[c]<1?i[c]=f:3*o[c]<2?i[c]=h+(f-h)*(2/3-o[c])*6:i[c]=h;[r,l,s]=[i[0]*255,i[1]*255,i[2]*255]}return e.length>3?[r,l,s,e[3]]:[r,l,s,1]},ua=(...e)=>{e=Y(e,"rgba");let[t,n,a]=e;t/=255,n/=255,a/=255;const r=ta(t,n,a),l=na(t,n,a),s=(l+r)/2;let o,i;return l===r?(o=0,i=Number.NaN):o=s<.5?(l-r)/(l+r):(l-r)/(2-l-r),t==l?i=(n-a)/(l-r):n==l?i=2+(a-t)/(l-r):a==l&&(i=4+(t-n)/(l-r)),i*=60,i<0&&(i+=360),e.length>3&&e[3]!==void 0?[i,o,s,e[3]]:[i,o,s]};M.prototype.hsl=function(){return ua(this._rgb)};const Dl=(...e)=>new M(...e,"hsl");q.hsl=Dl;G.format.hsl=Jt;G.autodetect.push({p:2,test:(...e)=>{if(e=Y(e,"hsl"),H(e)==="array"&&e.length===3)return"hsl"}});const xl=(e,t,n)=>at(e,t,n,"hsl");se.hsl=xl;const{floor:Pl}=Math,Ll=(...e)=>{e=Y(e,"hsv");let[t,n,a]=e,r,l,s;if(a*=255,n===0)r=l=s=a;else{t===360&&(t=0),t>360&&(t-=360),t<0&&(t+=360),t/=60;const o=Pl(t),i=t-o,f=a*(1-n),h=a*(1-n*i),b=a*(1-n*(1-i));switch(o){case 0:[r,l,s]=[a,b,f];break;case 1:[r,l,s]=[h,a,f];break;case 2:[r,l,s]=[f,a,b];break;case 3:[r,l,s]=[f,h,a];break;case 4:[r,l,s]=[b,f,a];break;case 5:[r,l,s]=[a,f,h];break}}return[r,l,s,e.length>3?e[3]:1]},{min:Rl,max:$l}=Math,Ol=(...e)=>{e=Y(e,"rgb");let[t,n,a]=e;const r=Rl(t,n,a),l=$l(t,n,a),s=l-r;let o,i,f;return f=l/255,l===0?(o=Number.NaN,i=0):(i=s/l,t===l&&(o=(n-a)/s),n===l&&(o=2+(a-t)/s),a===l&&(o=4+(t-n)/s),o*=60,o<0&&(o+=360)),[o,i,f]};M.prototype.hsv=function(){return Ol(this._rgb)};const Nl=(...e)=>new M(...e,"hsv");q.hsv=Nl;G.format.hsv=Ll;G.autodetect.push({p:2,test:(...e)=>{if(e=Y(e,"hsv"),H(e)==="array"&&e.length===3)return"hsv"}});const zl=(e,t,n)=>at(e,t,n,"hsv");se.hsv=zl;function kt(e,t){let n=e.length;Array.isArray(e[0])||(e=[e]),Array.isArray(t[0])||(t=t.map(s=>[s]));let a=t[0].length,r=t[0].map((s,o)=>t.map(i=>i[o])),l=e.map(s=>r.map(o=>Array.isArray(s)?s.reduce((i,f,h)=>i+f*(o[h]||0),0):o.reduce((i,f)=>i+f*s,0)));return n===1&&(l=l[0]),a===1?l.map(s=>s[0]):l}const fn=(...e)=>{e=Y(e,"lab");const[t,n,a,...r]=e,[l,s,o]=Gl([t,n,a]),[i,f,h]=sa(l,s,o);return[i,f,h,...r.length>0&&r[0]<1?[r[0]]:[]]};function Gl(e){var t=[[1.2268798758459243,-.5578149944602171,.2813910456659647],[-.0405757452148008,1.112286803280317,-.0717110580655164],[-.0763729366746601,-.4214933324022432,1.5869240198367816]],n=[[1,.3963377773761749,.2158037573099136],[1,-.1055613458156586,-.0638541728258133],[1,-.0894841775298119,-1.2914855480194092]],a=kt(n,e);return kt(t,a.map(r=>r**3))}const un=(...e)=>{const[t,n,a,...r]=Y(e,"rgb"),l=oa(t,n,a);return[...Yl(l),...r.length>0&&r[0]<1?[r[0]]:[]]};function Yl(e){const t=[[.819022437996703,.3619062600528904,-.1288737815209879],[.0329836539323885,.9292868615863434,.0361446663506424],[.0481771893596242,.2642395317527308,.6335478284694309]],n=[[.210454268309314,.7936177747023054,-.0040720430116193],[1.9779985324311684,-2.42859224204858,.450593709617411],[.0259040424655478,.7827717124575296,-.8086757549230774]],a=kt(t,e);return kt(n,a.map(r=>Math.cbrt(r)))}M.prototype.oklab=function(){return un(this._rgb)};const Il=(...e)=>new M(...e,"oklab");Object.assign(q,{oklab:Il});G.format.oklab=fn;G.autodetect.push({p:2,test:(...e)=>{if(e=Y(e,"oklab"),H(e)==="array"&&e.length===3)return"oklab"}});const ql=(e,t,n)=>{const a=e.oklab(),r=t.oklab();return new M(a[0]+n*(r[0]-a[0]),a[1]+n*(r[1]-a[1]),a[2]+n*(r[2]-a[2]),"oklab")};se.oklab=ql;const Xl=(e,t,n)=>at(e,t,n,"oklch");se.oklch=Xl;const{pow:Yt,sqrt:It,PI:qt,cos:yn,sin:wn,atan2:Hl}=Math,Ul=(e,t="lrgb",n=null)=>{const a=e.length;n||(n=Array.from(new Array(a)).map(()=>1));const r=a/n.reduce(function(b,c){return b+c});if(n.forEach((b,c)=>{n[c]*=r}),e=e.map(b=>new M(b)),t==="lrgb")return jl(e,n);const l=e.shift(),s=l.get(t),o=[];let i=0,f=0;for(let b=0;b<s.length;b++)if(s[b]=(s[b]||0)*n[0],o.push(isNaN(s[b])?0:n[0]),t.charAt(b)==="h"&&!isNaN(s[b])){const c=s[b]/180*qt;i+=yn(c)*n[0],f+=wn(c)*n[0]}let h=l.alpha()*n[0];e.forEach((b,c)=>{const F=b.get(t);h+=b.alpha()*n[c+1];for(let g=0;g<s.length;g++)if(!isNaN(F[g]))if(o[g]+=n[c+1],t.charAt(g)==="h"){const _=F[g]/180*qt;i+=yn(_)*n[c+1],f+=wn(_)*n[c+1]}else s[g]+=F[g]*n[c+1]});for(let b=0;b<s.length;b++)if(t.charAt(b)==="h"){let c=Hl(f/o[b],i/o[b])/qt*180;for(;c<0;)c+=360;for(;c>=360;)c-=360;s[b]=c}else s[b]=s[b]/o[b];return h/=a,new M(s,t).alpha(h>.99999?1:h,!0)},jl=(e,t)=>{const n=e.length,a=[0,0,0,0];for(let r=0;r<e.length;r++){const l=e[r],s=t[r]/n,o=l._rgb;a[0]+=Yt(o[0],2)*s,a[1]+=Yt(o[1],2)*s,a[2]+=Yt(o[2],2)*s,a[3]+=o[3]*s}return a[0]=It(a[0]),a[1]=It(a[1]),a[2]=It(a[2]),a[3]>.9999999&&(a[3]=1),new M(rn(a))},{pow:Zl}=Math;function _t(e){let t="rgb",n=q("#ccc"),a=0,r=[0,1],l=[],s=[0,0],o=!1,i=[],f=!1,h=0,b=1,c=!1,F={},g=!0,_=1;const m=function(d){if(d=d||["#fff","#000"],d&&H(d)==="string"&&q.brewer&&q.brewer[d.toLowerCase()]&&(d=q.brewer[d.toLowerCase()]),H(d)==="array"){d.length===1&&(d=[d[0],d[0]]),d=d.slice(0);for(let v=0;v<d.length;v++)d[v]=q(d[v]);l.length=0;for(let v=0;v<d.length;v++)l.push(v/(d.length-1))}return A(),i=d},y=function(d){if(o!=null){const v=o.length-1;let w=0;for(;w<v&&d>=o[w];)w++;return w-1}return 0};let D=d=>d,L=d=>d;const k=function(d,v){let w,C;if(v==null&&(v=!1),isNaN(d)||d===null)return n;v?C=d:o&&o.length>2?C=y(d)/(o.length-2):b!==h?C=(d-h)/(b-h):C=1,C=L(C),v||(C=D(C)),_!==1&&(C=Zl(C,_)),C=s[0]+C*(1-s[0]-s[1]),C=qe(C,0,1);const T=Math.floor(C*1e4);if(g&&F[T])w=F[T];else{if(H(i)==="array")for(let B=0;B<l.length;B++){const N=l[B];if(C<=N){w=i[B];break}if(C>=N&&B===l.length-1){w=i[B];break}if(C>N&&C<l[B+1]){C=(C-N)/(l[B+1]-N),w=q.interpolate(i[B],i[B+1],C,t);break}}else H(i)==="function"&&(w=i(C));g&&(F[T]=w)}return w};var A=()=>F={};m(e);const p=function(d){const v=q(k(d));return f&&v[f]?v[f]():v};return p.classes=function(d){if(d!=null){if(H(d)==="array")o=d,r=[d[0],d[d.length-1]];else{const v=q.analyze(r);d===0?o=[v.min,v.max]:o=q.limits(v,"e",d)}return p}return o},p.domain=function(d){if(!arguments.length)return r;h=d[0],b=d[d.length-1],l=[];const v=i.length;if(d.length===v&&h!==b)for(let w of Array.from(d))l.push((w-h)/(b-h));else{for(let w=0;w<v;w++)l.push(w/(v-1));if(d.length>2){const w=d.map((T,B)=>B/(d.length-1)),C=d.map(T=>(T-h)/(b-h));C.every((T,B)=>w[B]===T)||(L=T=>{if(T<=0||T>=1)return T;let B=0;for(;T>=C[B+1];)B++;const N=(T-C[B])/(C[B+1]-C[B]);return w[B]+N*(w[B+1]-w[B])})}}return r=[h,b],p},p.mode=function(d){return arguments.length?(t=d,A(),p):t},p.range=function(d,v){return m(d),p},p.out=function(d){return f=d,p},p.spread=function(d){return arguments.length?(a=d,p):a},p.correctLightness=function(d){return d==null&&(d=!0),c=d,A(),c?D=function(v){const w=k(0,!0).lab()[0],C=k(1,!0).lab()[0],T=w>C;let B=k(v,!0).lab()[0];const N=w+(C-w)*v;let R=B-N,x=0,O=1,X=20;for(;Math.abs(R)>.01&&X-- >0;)(function(){return T&&(R*=-1),R<0?(x=v,v+=(O-v)*.5):(O=v,v+=(x-v)*.5),B=k(v,!0).lab()[0],R=B-N})();return v}:D=v=>v,p},p.padding=function(d){return d!=null?(H(d)==="number"&&(d=[d,d]),s=d,p):s},p.colors=function(d,v){arguments.length<2&&(v="hex");let w=[];if(arguments.length===0)w=i.slice(0);else if(d===1)w=[p(.5)];else if(d>1){const C=r[0],T=r[1]-C;w=Vl(0,d).map(B=>p(C+B/(d-1)*T))}else{e=[];let C=[];if(o&&o.length>2)for(let T=1,B=o.length,N=1<=B;N?T<B:T>B;N?T++:T--)C.push((o[T-1]+o[T])*.5);else C=r;w=C.map(T=>p(T))}return q[v]&&(w=w.map(C=>C[v]())),w},p.cache=function(d){return d!=null?(g=d,p):g},p.gamma=function(d){return d!=null?(_=d,p):_},p.nodata=function(d){return d!=null?(n=q(d),p):n},p}function Vl(e,t,n){let a=[],r=e<t,l=t;for(let s=e;r?s<l:s>l;r?s++:s--)a.push(s);return a}const Wl=function(e){let t=[1,1];for(let n=1;n<e;n++){let a=[1];for(let r=1;r<=t.length;r++)a[r]=(t[r]||0)+t[r-1];t=a}return t},Kl=function(e){let t,n,a,r;if(e=e.map(l=>new M(l)),e.length===2)[n,a]=e.map(l=>l.lab()),t=function(l){const s=[0,1,2].map(o=>n[o]+l*(a[o]-n[o]));return new M(s,"lab")};else if(e.length===3)[n,a,r]=e.map(l=>l.lab()),t=function(l){const s=[0,1,2].map(o=>(1-l)*(1-l)*n[o]+2*(1-l)*l*a[o]+l*l*r[o]);return new M(s,"lab")};else if(e.length===4){let l;[n,a,r,l]=e.map(s=>s.lab()),t=function(s){const o=[0,1,2].map(i=>(1-s)*(1-s)*(1-s)*n[i]+3*(1-s)*(1-s)*s*a[i]+3*(1-s)*s*s*r[i]+s*s*s*l[i]);return new M(o,"lab")}}else if(e.length>=5){let l,s,o;l=e.map(i=>i.lab()),o=e.length-1,s=Wl(o),t=function(i){const f=1-i,h=[0,1,2].map(b=>l.reduce((c,F,g)=>c+s[g]*f**(o-g)*i**g*F[b],0));return new M(h,"lab")}}else throw new RangeError("No point in running bezier with only one color.");return t},Jl=e=>{const t=Kl(e);return t.scale=()=>_t(t),t},{round:da}=Math;M.prototype.rgb=function(e=!0){return e===!1?this._rgb.slice(0,3):this._rgb.slice(0,3).map(da)};M.prototype.rgba=function(e=!0){return this._rgb.slice(0,4).map((t,n)=>n<3?e===!1?t:da(t):t)};const Ql=(...e)=>new M(...e,"rgb");Object.assign(q,{rgb:Ql});G.format.rgb=(...e)=>{const t=Y(e,"rgba");return t[3]===void 0&&(t[3]=1),t};G.autodetect.push({p:3,test:(...e)=>{if(e=Y(e,"rgba"),H(e)==="array"&&(e.length===3||e.length===4&&H(e[3])=="number"&&e[3]>=0&&e[3]<=1))return"rgb"}});const Ce=(e,t,n)=>{if(!Ce[n])throw new Error("unknown blend mode "+n);return Ce[n](e,t)},Ge=e=>(t,n)=>{const a=q(n).rgb(),r=q(t).rgb();return q.rgb(e(a,r))},Ye=e=>(t,n)=>{const a=[];return a[0]=e(t[0],n[0]),a[1]=e(t[1],n[1]),a[2]=e(t[2],n[2]),a},es=e=>e,ts=(e,t)=>e*t/255,ns=(e,t)=>e>t?t:e,as=(e,t)=>e>t?e:t,rs=(e,t)=>255*(1-(1-e/255)*(1-t/255)),ls=(e,t)=>t<128?2*e*t/255:255*(1-2*(1-e/255)*(1-t/255)),ss=(e,t)=>255*(1-(1-t/255)/(e/255)),os=(e,t)=>e===255?255:(e=255*(t/255)/(1-e/255),e>255?255:e);Ce.normal=Ge(Ye(es));Ce.multiply=Ge(Ye(ts));Ce.screen=Ge(Ye(rs));Ce.overlay=Ge(Ye(ls));Ce.darken=Ge(Ye(ns));Ce.lighten=Ge(Ye(as));Ce.dodge=Ge(Ye(os));Ce.burn=Ge(Ye(ss));const{pow:is,sin:cs,cos:fs}=Math;function us(e=300,t=-1.5,n=1,a=1,r=[0,1]){let l=0,s;H(r)==="array"?s=r[1]-r[0]:(s=0,r=[r,r]);const o=function(i){const f=Te*((e+120)/360+t*i),h=is(r[0]+s*i,a),c=(l!==0?n[0]+i*l:n)*h*(1-h)/2,F=fs(f),g=cs(f),_=h+c*(-.14861*F+1.78277*g),m=h+c*(-.29227*F-.90649*g),y=h+c*(1.97294*F);return q(rn([_*255,m*255,y*255,1]))};return o.start=function(i){return i==null?e:(e=i,o)},o.rotations=function(i){return i==null?t:(t=i,o)},o.gamma=function(i){return i==null?a:(a=i,o)},o.hue=function(i){return i==null?n:(n=i,H(n)==="array"?(l=n[1]-n[0],l===0&&(n=n[1])):l=0,o)},o.lightness=function(i){return i==null?r:(H(i)==="array"?(r=i,s=i[1]-i[0]):(r=[i,i],s=0),o)},o.scale=()=>q.scale(o),o.hue(n),o}const ds="0123456789abcdef",{floor:hs,random:bs}=Math,gs=()=>{let e="#";for(let t=0;t<6;t++)e+=ds.charAt(hs(bs()*16));return new M(e,"hex")},{log:Cn,pow:Fs,floor:ps,abs:ms}=Math;function ha(e,t=null){const n={min:Number.MAX_VALUE,max:Number.MAX_VALUE*-1,sum:0,values:[],count:0};return H(e)==="object"&&(e=Object.values(e)),e.forEach(a=>{t&&H(a)==="object"&&(a=a[t]),a!=null&&!isNaN(a)&&(n.values.push(a),n.sum+=a,a<n.min&&(n.min=a),a>n.max&&(n.max=a),n.count+=1)}),n.domain=[n.min,n.max],n.limits=(a,r)=>ba(n,a,r),n}function ba(e,t="equal",n=7){H(e)=="array"&&(e=ha(e));const{min:a,max:r}=e,l=e.values.sort((o,i)=>o-i);if(n===1)return[a,r];const s=[];if(t.substr(0,1)==="c"&&(s.push(a),s.push(r)),t.substr(0,1)==="e"){s.push(a);for(let o=1;o<n;o++)s.push(a+o/n*(r-a));s.push(r)}else if(t.substr(0,1)==="l"){if(a<=0)throw new Error("Logarithmic scales are only possible for values > 0");const o=Math.LOG10E*Cn(a),i=Math.LOG10E*Cn(r);s.push(a);for(let f=1;f<n;f++)s.push(Fs(10,o+f/n*(i-o)));s.push(r)}else if(t.substr(0,1)==="q"){s.push(a);for(let o=1;o<n;o++){const i=(l.length-1)*o/n,f=ps(i);if(f===i)s.push(l[f]);else{const h=i-f;s.push(l[f]*(1-h)+l[f+1]*h)}}s.push(r)}else if(t.substr(0,1)==="k"){let o;const i=l.length,f=new Array(i),h=new Array(n);let b=!0,c=0,F=null;F=[],F.push(a);for(let m=1;m<n;m++)F.push(a+m/n*(r-a));for(F.push(r);b;){for(let y=0;y<n;y++)h[y]=0;for(let y=0;y<i;y++){const D=l[y];let L=Number.MAX_VALUE,k;for(let A=0;A<n;A++){const p=ms(F[A]-D);p<L&&(L=p,k=A),h[k]++,f[y]=k}}const m=new Array(n);for(let y=0;y<n;y++)m[y]=null;for(let y=0;y<i;y++)o=f[y],m[o]===null?m[o]=l[y]:m[o]+=l[y];for(let y=0;y<n;y++)m[y]*=1/h[y];b=!1;for(let y=0;y<n;y++)if(m[y]!==F[y]){b=!0;break}F=m,c++,c>200&&(b=!1)}const g={};for(let m=0;m<n;m++)g[m]=[];for(let m=0;m<i;m++)o=f[m],g[o].push(l[m]);let _=[];for(let m=0;m<n;m++)_.push(g[m][0]),_.push(g[m][g[m].length-1]);_=_.sort((m,y)=>m-y),s.push(_[0]);for(let m=1;m<_.length;m+=2){const y=_[m];!isNaN(y)&&s.indexOf(y)===-1&&s.push(y)}}return s}const vs=(e,t)=>{e=new M(e),t=new M(t);const n=e.luminance(),a=t.luminance();return n>a?(n+.05)/(a+.05):(a+.05)/(n+.05)};/**
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
 */const Mn=.027,ks=5e-4,_s=.1,An=1.14,pt=.022,En=1.414,ys=(e,t)=>{e=new M(e),t=new M(t),e.alpha()<1&&(e=tt(t,e,e.alpha(),"rgb"));const n=Bn(...e.rgb()),a=Bn(...t.rgb()),r=n>=pt?n:n+Math.pow(pt-n,En),l=a>=pt?a:a+Math.pow(pt-a,En),s=Math.pow(l,.56)-Math.pow(r,.57),o=Math.pow(l,.65)-Math.pow(r,.62),i=Math.abs(l-r)<ks?0:r<l?s*An:o*An;return(Math.abs(i)<_s?0:i>0?i-Mn:i+Mn)*100};function Bn(e,t,n){return .2126729*Math.pow(e/255,2.4)+.7151522*Math.pow(t/255,2.4)+.072175*Math.pow(n/255,2.4)}const{sqrt:Se,pow:ne,min:ws,max:Cs,atan2:Sn,abs:Tn,cos:mt,sin:Dn,exp:Ms,PI:xn}=Math;function As(e,t,n=1,a=1,r=1){var l=function(oe){return 360*oe/(2*xn)},s=function(oe){return 2*xn*oe/360};e=new M(e),t=new M(t);const[o,i,f]=Array.from(e.lab()),[h,b,c]=Array.from(t.lab()),F=(o+h)/2,g=Se(ne(i,2)+ne(f,2)),_=Se(ne(b,2)+ne(c,2)),m=(g+_)/2,y=.5*(1-Se(ne(m,7)/(ne(m,7)+ne(25,7)))),D=i*(1+y),L=b*(1+y),k=Se(ne(D,2)+ne(f,2)),A=Se(ne(L,2)+ne(c,2)),p=(k+A)/2,d=l(Sn(f,D)),v=l(Sn(c,L)),w=d>=0?d:d+360,C=v>=0?v:v+360,T=Tn(w-C)>180?(w+C+360)/2:(w+C)/2,B=1-.17*mt(s(T-30))+.24*mt(s(2*T))+.32*mt(s(3*T+6))-.2*mt(s(4*T-63));let N=C-w;N=Tn(N)<=180?N:C<=w?N+360:N-360,N=2*Se(k*A)*Dn(s(N)/2);const R=h-o,x=A-k,O=1+.015*ne(F-50,2)/Se(20+ne(F-50,2)),X=1+.045*p,P=1+.015*p*B,fe=30*Ms(-ne((T-275)/25,2)),ue=-(2*Se(ne(p,7)/(ne(p,7)+ne(25,7))))*Dn(2*s(fe)),ge=Se(ne(R/(n*O),2)+ne(x/(a*X),2)+ne(N/(r*P),2)+ue*(x/(a*X))*(N/(r*P)));return Cs(0,ws(100,ge))}function Es(e,t,n="lab"){e=new M(e),t=new M(t);const a=e.get(n),r=t.get(n);let l=0;for(let s in a){const o=(a[s]||0)-(r[s]||0);l+=o*o}return Math.sqrt(l)}const Bs=(...e)=>{try{return new M(...e),!0}catch{return!1}},Ss={cool(){return _t([q.hsl(180,1,.9),q.hsl(250,.7,.4)])},hot(){return _t(["#000","#f00","#ff0","#fff"]).mode("rgb")}},Qt={OrRd:["#fff7ec","#fee8c8","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#b30000","#7f0000"],PuBu:["#fff7fb","#ece7f2","#d0d1e6","#a6bddb","#74a9cf","#3690c0","#0570b0","#045a8d","#023858"],BuPu:["#f7fcfd","#e0ecf4","#bfd3e6","#9ebcda","#8c96c6","#8c6bb1","#88419d","#810f7c","#4d004b"],Oranges:["#fff5eb","#fee6ce","#fdd0a2","#fdae6b","#fd8d3c","#f16913","#d94801","#a63603","#7f2704"],BuGn:["#f7fcfd","#e5f5f9","#ccece6","#99d8c9","#66c2a4","#41ae76","#238b45","#006d2c","#00441b"],YlOrBr:["#ffffe5","#fff7bc","#fee391","#fec44f","#fe9929","#ec7014","#cc4c02","#993404","#662506"],YlGn:["#ffffe5","#f7fcb9","#d9f0a3","#addd8e","#78c679","#41ab5d","#238443","#006837","#004529"],Reds:["#fff5f0","#fee0d2","#fcbba1","#fc9272","#fb6a4a","#ef3b2c","#cb181d","#a50f15","#67000d"],RdPu:["#fff7f3","#fde0dd","#fcc5c0","#fa9fb5","#f768a1","#dd3497","#ae017e","#7a0177","#49006a"],Greens:["#f7fcf5","#e5f5e0","#c7e9c0","#a1d99b","#74c476","#41ab5d","#238b45","#006d2c","#00441b"],YlGnBu:["#ffffd9","#edf8b1","#c7e9b4","#7fcdbb","#41b6c4","#1d91c0","#225ea8","#253494","#081d58"],Purples:["#fcfbfd","#efedf5","#dadaeb","#bcbddc","#9e9ac8","#807dba","#6a51a3","#54278f","#3f007d"],GnBu:["#f7fcf0","#e0f3db","#ccebc5","#a8ddb5","#7bccc4","#4eb3d3","#2b8cbe","#0868ac","#084081"],Greys:["#ffffff","#f0f0f0","#d9d9d9","#bdbdbd","#969696","#737373","#525252","#252525","#000000"],YlOrRd:["#ffffcc","#ffeda0","#fed976","#feb24c","#fd8d3c","#fc4e2a","#e31a1c","#bd0026","#800026"],PuRd:["#f7f4f9","#e7e1ef","#d4b9da","#c994c7","#df65b0","#e7298a","#ce1256","#980043","#67001f"],Blues:["#f7fbff","#deebf7","#c6dbef","#9ecae1","#6baed6","#4292c6","#2171b5","#08519c","#08306b"],PuBuGn:["#fff7fb","#ece2f0","#d0d1e6","#a6bddb","#67a9cf","#3690c0","#02818a","#016c59","#014636"],Viridis:["#440154","#482777","#3f4a8a","#31678e","#26838f","#1f9d8a","#6cce5a","#b6de2b","#fee825"],Spectral:["#9e0142","#d53e4f","#f46d43","#fdae61","#fee08b","#ffffbf","#e6f598","#abdda4","#66c2a5","#3288bd","#5e4fa2"],RdYlGn:["#a50026","#d73027","#f46d43","#fdae61","#fee08b","#ffffbf","#d9ef8b","#a6d96a","#66bd63","#1a9850","#006837"],RdBu:["#67001f","#b2182b","#d6604d","#f4a582","#fddbc7","#f7f7f7","#d1e5f0","#92c5de","#4393c3","#2166ac","#053061"],PiYG:["#8e0152","#c51b7d","#de77ae","#f1b6da","#fde0ef","#f7f7f7","#e6f5d0","#b8e186","#7fbc41","#4d9221","#276419"],PRGn:["#40004b","#762a83","#9970ab","#c2a5cf","#e7d4e8","#f7f7f7","#d9f0d3","#a6dba0","#5aae61","#1b7837","#00441b"],RdYlBu:["#a50026","#d73027","#f46d43","#fdae61","#fee090","#ffffbf","#e0f3f8","#abd9e9","#74add1","#4575b4","#313695"],BrBG:["#543005","#8c510a","#bf812d","#dfc27d","#f6e8c3","#f5f5f5","#c7eae5","#80cdc1","#35978f","#01665e","#003c30"],RdGy:["#67001f","#b2182b","#d6604d","#f4a582","#fddbc7","#ffffff","#e0e0e0","#bababa","#878787","#4d4d4d","#1a1a1a"],PuOr:["#7f3b08","#b35806","#e08214","#fdb863","#fee0b6","#f7f7f7","#d8daeb","#b2abd2","#8073ac","#542788","#2d004b"],Set2:["#66c2a5","#fc8d62","#8da0cb","#e78ac3","#a6d854","#ffd92f","#e5c494","#b3b3b3"],Accent:["#7fc97f","#beaed4","#fdc086","#ffff99","#386cb0","#f0027f","#bf5b17","#666666"],Set1:["#e41a1c","#377eb8","#4daf4a","#984ea3","#ff7f00","#ffff33","#a65628","#f781bf","#999999"],Set3:["#8dd3c7","#ffffb3","#bebada","#fb8072","#80b1d3","#fdb462","#b3de69","#fccde5","#d9d9d9","#bc80bd","#ccebc5","#ffed6f"],Dark2:["#1b9e77","#d95f02","#7570b3","#e7298a","#66a61e","#e6ab02","#a6761d","#666666"],Paired:["#a6cee3","#1f78b4","#b2df8a","#33a02c","#fb9a99","#e31a1c","#fdbf6f","#ff7f00","#cab2d6","#6a3d9a","#ffff99","#b15928"],Pastel2:["#b3e2cd","#fdcdac","#cbd5e8","#f4cae4","#e6f5c9","#fff2ae","#f1e2cc","#cccccc"],Pastel1:["#fbb4ae","#b3cde3","#ccebc5","#decbe4","#fed9a6","#ffffcc","#e5d8bd","#fddaec","#f2f2f2"]},ga=Object.keys(Qt),Pn=new Map(ga.map(e=>[e.toLowerCase(),e])),Ts=typeof Proxy=="function"?new Proxy(Qt,{get(e,t){const n=t.toLowerCase();if(Pn.has(n))return e[Pn.get(n)]},getOwnPropertyNames(){return Object.getOwnPropertyNames(ga)}}):Qt,Ds=(...e)=>{e=Y(e,"cmyk");const[t,n,a,r]=e,l=e.length>4?e[4]:1;return r===1?[0,0,0,l]:[t>=1?0:255*(1-t)*(1-r),n>=1?0:255*(1-n)*(1-r),a>=1?0:255*(1-a)*(1-r),l]},{max:Ln}=Math,xs=(...e)=>{let[t,n,a]=Y(e,"rgb");t=t/255,n=n/255,a=a/255;const r=1-Ln(t,Ln(n,a)),l=r<1?1/(1-r):0,s=(1-t-r)*l,o=(1-n-r)*l,i=(1-a-r)*l;return[s,o,i,r]};M.prototype.cmyk=function(){return xs(this._rgb)};const Ps=(...e)=>new M(...e,"cmyk");Object.assign(q,{cmyk:Ps});G.format.cmyk=Ds;G.autodetect.push({p:2,test:(...e)=>{if(e=Y(e,"cmyk"),H(e)==="array"&&e.length===4)return"cmyk"}});const Ls=(...e)=>{const t=Y(e,"hsla");let n=nt(e)||"lsa";return t[0]=pe(t[0]||0)+"deg",t[1]=pe(t[1]*100)+"%",t[2]=pe(t[2]*100)+"%",n==="hsla"||t.length>3&&t[3]<1?(t[3]="/ "+(t.length>3?t[3]:1),n="hsla"):t.length=3,`${n.substr(0,3)}(${t.join(" ")})`},Rs=(...e)=>{const t=Y(e,"lab");let n=nt(e)||"lab";return t[0]=pe(t[0])+"%",t[1]=pe(t[1]),t[2]=pe(t[2]),n==="laba"||t.length>3&&t[3]<1?t[3]="/ "+(t.length>3?t[3]:1):t.length=3,`lab(${t.join(" ")})`},$s=(...e)=>{const t=Y(e,"lch");let n=nt(e)||"lab";return t[0]=pe(t[0])+"%",t[1]=pe(t[1]),t[2]=isNaN(t[2])?"none":pe(t[2])+"deg",n==="lcha"||t.length>3&&t[3]<1?t[3]="/ "+(t.length>3?t[3]:1):t.length=3,`lch(${t.join(" ")})`},Os=(...e)=>{const t=Y(e,"lab");return t[0]=pe(t[0]*100)+"%",t[1]=Kt(t[1]),t[2]=Kt(t[2]),t.length>3&&t[3]<1?t[3]="/ "+(t.length>3?t[3]:1):t.length=3,`oklab(${t.join(" ")})`},Fa=(...e)=>{const[t,n,a,...r]=Y(e,"rgb"),[l,s,o]=un(t,n,a),[i,f,h]=ca(l,s,o);return[i,f,h,...r.length>0&&r[0]<1?[r[0]]:[]]},Ns=(...e)=>{const t=Y(e,"lch");return t[0]=pe(t[0]*100)+"%",t[1]=Kt(t[1]),t[2]=isNaN(t[2])?"none":pe(t[2])+"deg",t.length>3&&t[3]<1?t[3]="/ "+(t.length>3?t[3]:1):t.length=3,`oklch(${t.join(" ")})`},{round:Xt}=Math,zs=(...e)=>{const t=Y(e,"rgba");let n=nt(e)||"rgb";if(n.substr(0,3)==="hsl")return Ls(ua(t),n);if(n.substr(0,3)==="lab"){const a=ht();De("d50");const r=Rs(sn(t),n);return De(a),r}if(n.substr(0,3)==="lch"){const a=ht();De("d50");const r=$s(cn(t),n);return De(a),r}return n.substr(0,5)==="oklab"?Os(un(t)):n.substr(0,5)==="oklch"?Ns(Fa(t)):(t[0]=Xt(t[0]),t[1]=Xt(t[1]),t[2]=Xt(t[2]),(n==="rgba"||t.length>3&&t[3]<1)&&(t[3]="/ "+(t.length>3?t[3]:1),n="rgba"),`${n.substr(0,3)}(${t.slice(0,n==="rgb"?3:4).join(" ")})`)},pa=(...e)=>{e=Y(e,"lch");const[t,n,a,...r]=e,[l,s,o]=ia(t,n,a),[i,f,h]=fn(l,s,o);return[i,f,h,...r.length>0&&r[0]<1?[r[0]]:[]]},Pe=/((?:-?\d+)|(?:-?\d+(?:\.\d+)?)%|none)/.source,we=/((?:-?(?:\d+(?:\.\d*)?|\.\d+)%?)|none)/.source,yt=/((?:-?(?:\d+(?:\.\d*)?|\.\d+)%)|none)/.source,me=/\s*/.source,rt=/\s+/.source,dn=/\s*,\s*/.source,Et=/((?:-?(?:\d+(?:\.\d*)?|\.\d+)(?:deg)?)|none)/.source,lt=/\s*(?:\/\s*((?:[01]|[01]?\.\d+)|\d+(?:\.\d+)?%))?/.source,ma=new RegExp("^rgba?\\("+me+[Pe,Pe,Pe].join(rt)+lt+"\\)$"),va=new RegExp("^rgb\\("+me+[Pe,Pe,Pe].join(dn)+me+"\\)$"),ka=new RegExp("^rgba\\("+me+[Pe,Pe,Pe,we].join(dn)+me+"\\)$"),_a=new RegExp("^hsla?\\("+me+[Et,yt,yt].join(rt)+lt+"\\)$"),ya=new RegExp("^hsl?\\("+me+[Et,yt,yt].join(dn)+me+"\\)$"),wa=/^hsla\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/,Ca=new RegExp("^lab\\("+me+[we,we,we].join(rt)+lt+"\\)$"),Ma=new RegExp("^lch\\("+me+[we,we,Et].join(rt)+lt+"\\)$"),Aa=new RegExp("^oklab\\("+me+[we,we,we].join(rt)+lt+"\\)$"),Ea=new RegExp("^oklch\\("+me+[we,we,Et].join(rt)+lt+"\\)$"),{round:Ba}=Math,We=e=>e.map((t,n)=>n<=2?qe(Ba(t),0,255):t),ae=(e,t=0,n=100,a=!1)=>(typeof e=="string"&&e.endsWith("%")&&(e=parseFloat(e.substring(0,e.length-1))/100,a?e=t+(e+1)*.5*(n-t):e=t+e*(n-t)),+e),ie=(e,t)=>e==="none"?t:e,hn=e=>{if(e=e.toLowerCase().trim(),e==="transparent")return[0,0,0,0];let t;if(G.format.named)try{return G.format.named(e)}catch{}if((t=e.match(ma))||(t=e.match(va))){let n=t.slice(1,4);for(let r=0;r<3;r++)n[r]=+ae(ie(n[r],0),0,255);n=We(n);const a=t[4]!==void 0?+ae(t[4],0,1):1;return n[3]=a,n}if(t=e.match(ka)){const n=t.slice(1,5);for(let a=0;a<4;a++)n[a]=+ae(n[a],0,255);return n}if((t=e.match(_a))||(t=e.match(ya))){const n=t.slice(1,4);n[0]=+ie(n[0].replace("deg",""),0),n[1]=+ae(ie(n[1],0),0,100)*.01,n[2]=+ae(ie(n[2],0),0,100)*.01;const a=We(Jt(n)),r=t[4]!==void 0?+ae(t[4],0,1):1;return a[3]=r,a}if(t=e.match(wa)){const n=t.slice(1,4);n[1]*=.01,n[2]*=.01;const a=Jt(n);for(let r=0;r<3;r++)a[r]=Ba(a[r]);return a[3]=+t[4],a}if(t=e.match(Ca)){const n=t.slice(1,4);n[0]=ae(ie(n[0],0),0,100),n[1]=ae(ie(n[1],0),-125,125,!0),n[2]=ae(ie(n[2],0),-125,125,!0);const a=ht();De("d50");const r=We(ln(n));De(a);const l=t[4]!==void 0?+ae(t[4],0,1):1;return r[3]=l,r}if(t=e.match(Ma)){const n=t.slice(1,4);n[0]=ae(n[0],0,100),n[1]=ae(ie(n[1],0),0,150,!1),n[2]=+ie(n[2].replace("deg",""),0);const a=ht();De("d50");const r=We(on(n));De(a);const l=t[4]!==void 0?+ae(t[4],0,1):1;return r[3]=l,r}if(t=e.match(Aa)){const n=t.slice(1,4);n[0]=ae(ie(n[0],0),0,1),n[1]=ae(ie(n[1],0),-.4,.4,!0),n[2]=ae(ie(n[2],0),-.4,.4,!0);const a=We(fn(n)),r=t[4]!==void 0?+ae(t[4],0,1):1;return a[3]=r,a}if(t=e.match(Ea)){const n=t.slice(1,4);n[0]=ae(ie(n[0],0),0,1),n[1]=ae(ie(n[1],0),0,.4,!1),n[2]=+ie(n[2].replace("deg",""),0);const a=We(pa(n)),r=t[4]!==void 0?+ae(t[4],0,1):1;return a[3]=r,a}};hn.test=e=>ma.test(e)||_a.test(e)||Ca.test(e)||Ma.test(e)||Aa.test(e)||Ea.test(e)||va.test(e)||ka.test(e)||ya.test(e)||wa.test(e)||e==="transparent";M.prototype.css=function(e){return zs(this._rgb,e)};const Gs=(...e)=>new M(...e,"css");q.css=Gs;G.format.css=hn;G.autodetect.push({p:5,test:(e,...t)=>{if(!t.length&&H(e)==="string"&&hn.test(e))return"css"}});G.format.gl=(...e)=>{const t=Y(e,"rgba");return t[0]*=255,t[1]*=255,t[2]*=255,t};const Ys=(...e)=>new M(...e,"gl");q.gl=Ys;M.prototype.gl=function(){const e=this._rgb;return[e[0]/255,e[1]/255,e[2]/255,e[3]]};M.prototype.hex=function(e){return la(this._rgb,e)};const Is=(...e)=>new M(...e,"hex");q.hex=Is;G.format.hex=ra;G.autodetect.push({p:4,test:(e,...t)=>{if(!t.length&&H(e)==="string"&&[3,4,5,6,7,8,9].indexOf(e.length)>=0)return"hex"}});const{log:vt}=Math,Sa=e=>{const t=e/100;let n,a,r;return t<66?(n=255,a=t<6?0:-155.25485562709179-.44596950469579133*(a=t-2)+104.49216199393888*vt(a),r=t<20?0:-254.76935184120902+.8274096064007395*(r=t-10)+115.67994401066147*vt(r)):(n=351.97690566805693+.114206453784165*(n=t-55)-40.25366309332127*vt(n),a=325.4494125711974+.07943456536662342*(a=t-50)-28.0852963507957*vt(a),r=255),[n,a,r,1]},{round:qs}=Math,Xs=(...e)=>{const t=Y(e,"rgb"),n=t[0],a=t[2];let r=1e3,l=4e4;const s=.4;let o;for(;l-r>s;){o=(l+r)*.5;const i=Sa(o);i[2]/i[0]>=a/n?l=o:r=o}return qs(o)};M.prototype.temp=M.prototype.kelvin=M.prototype.temperature=function(){return Xs(this._rgb)};const Ht=(...e)=>new M(...e,"temp");Object.assign(q,{temp:Ht,kelvin:Ht,temperature:Ht});G.format.temp=G.format.kelvin=G.format.temperature=Sa;M.prototype.oklch=function(){return Fa(this._rgb)};const Hs=(...e)=>new M(...e,"oklch");Object.assign(q,{oklch:Hs});G.format.oklch=pa;G.autodetect.push({p:2,test:(...e)=>{if(e=Y(e,"oklch"),H(e)==="array"&&e.length===3)return"oklch"}});Object.assign(q,{analyze:ha,average:Ul,bezier:Jl,blend:Ce,brewer:Ts,Color:M,colors:et,contrast:vs,contrastAPCA:ys,cubehelix:us,deltaE:As,distance:Es,input:G,interpolate:tt,limits:ba,mix:tt,random:gs,scale:_t,scales:Ss,valid:Bs});const Rn=Object.assign({"../../data/sets/rebrickable_parts_41809-1-hedwig-pencil-holder.csv":$r,"../../data/sets/rebrickable_parts_41904-1-animal-picture-holders.csv":Or,"../../data/sets/rebrickable_parts_41935-1-lots-of-dots.csv":Nr,"../../data/sets/rebrickable_parts_41950-1-lots-of-dots-lettering.csv":zr,"../../data/sets/rebrickable_parts_41957-1-adhesive-patches-mega-pack.csv":Gr,"../../data/sets/rebrickable_parts_41961-1-designer-toolkit-patterns.csv":Yr});function Us(e){const t=e.trim().split(`
`);return t[0].split(","),t.slice(1).map(n=>{const a=n.split(",");return{id:Number(a[0]),name:a[1],rgb:`#${a[2]}`,is_trans:a[3]==="True"}})}function js(e){const t=q(e).hsl();return{h:isNaN(t[0])?0:t[0],s:t[1]*100,l:t[2]*100}}function Zs(e,t=15,n=5){const a={},r=new Set;for(const i of e){const f=i.s<10?999:Math.floor(i.h/t);a[f]||(a[f]=[]),r.has(i.rgb)||(a[f].push(i),r.add(i.rgb))}Object.values(a).forEach(i=>i.sort((f,h)=>q(f.rgb).hcl()[2]-q(h.rgb).hcl()[2]));const s=Object.keys(a).map(Number).sort((i,f)=>i-f).flatMap(i=>a[i]),o=[];for(let i=0;i<s.length;i+=n)o.push(s.slice(i,i+n));return o}function Vs(){const e=new Set;for(const t in Rn){const a=Rn[t].trim().split(`
`);for(const r of a.slice(1)){const l=r.split(",");if(l.length>1){const s=Number(l[1]);isNaN(s)||e.add(s)}}}return e}const Ws=Vs(),Xe=Us(Ir).filter(e=>Ws.has(e.id)&&!e.name.includes("Trans-Clear"));function Ks(){return Xe.map(e=>{const t=js(e.rgb);return{...e,...t}})}const Js=Zs(Ks(),15,6);function Ta(){return[...Xe].sort((e,t)=>{const n=q(e.rgb).hcl(),a=q(t.rgb).hcl();return a[0]-n[0]||a[1]-n[1]||a[2]-n[2]})}var Qs=te('<div class="zoom-pan-container svelte-b0dtxj" role="application" aria-label="Zoomable and pannable container" tabindex="0"><div class="zoom-pan-content svelte-b0dtxj"><!></div></div>');function eo(e,t){ve(t,!1);const n=Be();let a=$(t,"zoom",12,1),r=$(t,"panX",12,0),l=$(t,"panY",12,0),s=$(t,"selectMode",8,!1),o=W(!1),i=0,f=0,h=W(!1),b=W(),c=W(),F=!1;en(()=>{if(u(b)&&u(c)&&!F){const d=u(b).clientWidth,v=u(b).clientHeight;let w=0,C=0;u(c).firstElementChild instanceof HTMLElement?(w=u(c).firstElementChild.offsetWidth,C=u(c).firstElementChild.offsetHeight):(w=u(c).offsetWidth,C=u(c).offsetHeight),r((d-w*a())/2),l((v-C*a())/2),F=!0,n("panChanged",{panX:r(),panY:l()})}});function g(d){d.preventDefault();const v=u(b).getBoundingClientRect(),w=d.clientX-v.left,C=d.clientY-v.top,T=d.deltaY>0?.9:1.1,B=Math.max(.2,Math.min(5,a()*T));if(B!==a()){const N=B/a();r(w-(w-r())*N),l(C-(C-l())*N),a(B),n("zoomChanged",{zoom:a(),panX:r(),panY:l()})}}function _(d){s()||d.button===0&&(E(o,!0),E(h,!1),i=d.clientX,f=d.clientY,window.addEventListener("mousemove",m),window.addEventListener("mouseup",y),d.preventDefault())}function m(d){if(u(o)){const v=d.clientX-i,w=d.clientY-f;(Math.abs(v)>1||Math.abs(w)>1)&&E(h,!0),r(r()+v),l(l()+w),i=d.clientX,f=d.clientY,n("panChanged",{panX:r(),panY:l()})}}function y(){u(o)&&(E(o,!1),window.removeEventListener("mousemove",m),window.removeEventListener("mouseup",y),n("panEnd",{didPan:u(h)}),setTimeout(()=>{E(h,!1)},50))}function D(d){d.key===" "&&d.preventDefault()}function L(d){d.key===" "&&d.preventDefault()}_e();var k=Qs(),A=I(k),p=I(A);Re(p,t,"default",{get didPan(){return u(h)}}),z(A),Zt(A,d=>E(c,d),()=>u(c)),z(k),Zt(k,d=>E(b,d),()=>u(b)),be(()=>ze(A,`transform: translate(${r()??""}px, ${l()??""}px) scale(${a()??""}); cursor: ${s()?"crosshair":u(o)?"grabbing":"grab"};`)),J("wheel",k,g),J("mousedown",k,_),J("keydown",k,D),J("keyup",k,L),V(e,k),ke()}var to=te('<div class="square svelte-gxsx5p"></div>');function Da(e,t){let n=$(t,"color",8,"#000");var a=to();be(()=>ze(a,`--color: ${n()??""}`)),V(e,a)}var no=te('<div class="circle svelte-r5z0cw"></div>');function xa(e,t){let n=$(t,"color",8,"#000");var a=no();be(()=>ze(a,`--color: ${n()??""}`)),V(e,a)}var ao=te('<div class="quarter-container svelte-19hi45o"><svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none" class="svelte-19hi45o"><path d="M 0,0 L 100,0 A 100,100 0 0,1 0,100 Z" stroke="none"></path></svg></div>');function Pa(e,t){let n=$(t,"color",8,"#000"),a=$(t,"rotation",8,0);var r=ao(),l=I(r),s=I(l);z(l),z(r),be(()=>{le(s,"fill",n()),le(s,"transform",`rotate(${a()*90}, 50, 50)`)}),V(e,r)}var ro=te('<div role="button" tabindex="0"><!></div>'),lo=te('<div class="selection-overlay svelte-1hhz0mg"></div>'),so=te('<div class="grid svelte-1hhz0mg"><!> <!></div>');function oo(e,t){ve(t,!1);const n=Be();let a=$(t,"grid",12),r=$(t,"width",8),l=$(t,"height",8),s=$(t,"selectedShape",8,"square"),o=$(t,"selectedColor",8),i=$(t,"paintMode",8,!1),f=$(t,"colorPickerMode",8,!1),h=$(t,"selectMode",8,!1),b=$(t,"quarterRotation",8,0),c=$(t,"selection",28,()=>({startX:0,startY:0,endX:0,endY:0,active:!1})),F=$(t,"didPan",8,!1),g=W(!1);function _(R){const x=a()[R];if(!x)return m(R);const{shape:O,color:X}=x;if(O===s()&&X===o())return;const P=[R],fe=new Set;for(;P.length;){const Z=P.pop();if(Z===void 0||fe.has(Z))continue;fe.add(Z);const ue=a()[Z];if(!ue||ue.shape!==O||ue.color!==X)continue;a(a()[Z]={shape:s(),color:o(),rotation:s()==="quarter"?b():0},!0);const ge=Z%r(),oe=Math.floor(Z/r());ge>0&&P.push(Z-1),ge<r()-1&&P.push(Z+1),oe>0&&P.push(Z-r()),oe<l()-1&&P.push(Z+r())}a([...a()]),n("gridChanged",{grid:a()})}function m(R){const x=a()[R];x&&x.shape===s()&&x.color===o()?a(a()[R]=null,!0):s()==="quarter"?a(a()[R]={shape:s(),color:o(),rotation:b()},!0):a(a()[R]={shape:s(),color:o(),rotation:0},!0),a([...a()]),n("gridChanged",{grid:a()})}function y(R){const x=a()[R];x&&x.color&&n("colorPicked",{color:x.color})}function D(R,x){x.stopPropagation(),!F()&&(h()?L(R):f()?y(R):i()?_(R):m(R))}function L(R,x){const O=R%r(),X=Math.floor(R/r());E(g,!0),c({startX:O,startY:X,endX:O,endY:X,active:!0}),n("selectionChanged",{selection:c()})}function k(R,x){h()&&L(R)}function A(R,x){if(h()&&u(g)){const O=R%r(),X=Math.floor(R/r());c({...c(),endX:O,endY:X}),n("selectionChanged",{selection:c()})}}function p(R,x){h()&&u(g)&&(E(g,!1),n("selectionChanged",{selection:c()}))}function d(){u(g)&&E(g,!1)}en(()=>{typeof window<"u"&&window.addEventListener("mouseup",d)}),On(()=>{typeof window<"u"&&window.removeEventListener("mouseup",d)});function v(R){if(!c().active)return!1;const x=R%r(),O=Math.floor(R/r()),X=Math.min(c().startX,c().endX),P=Math.max(c().startX,c().endX),fe=Math.min(c().startY,c().endY),Z=Math.max(c().startY,c().endY);return x>=X&&x<=P&&O>=fe&&O<=Z}function w(R,x){R.key==="Enter"&&(f()?y(x):i()?_(x):m(x))}_e();var C=so(),T=I(C);dt(T,1,a,ut,(R,x,O)=>{var X=ro(),P=I(X);{var fe=Z=>{var ue=ye(),ge=Fe(ue);{var oe=de=>{Da(de,{get color(){return u(x),j(()=>u(x).color)}})},je=de=>{var st=ye(),ot=Fe(st);{var bt=$e=>{xa($e,{get color(){return u(x),j(()=>u(x).color)}})},Bt=$e=>{var gt=ye(),S=Fe(gt);{var Me=he=>{Pa(he,{get color(){return u(x),j(()=>u(x).color)},get rotation(){return u(x),j(()=>u(x).rotation)}})};Ne(S,he=>{u(x),j(()=>u(x).shape==="quarter")&&he(Me)},!0)}V($e,gt)};Ne(ot,$e=>{u(x),j(()=>u(x).shape==="circle")?$e(bt):$e(Bt,!1)},!0)}V(de,st)};Ne(ge,de=>{u(x),j(()=>u(x).shape==="square")?de(oe):de(je,!1)})}V(Z,ue)};Ne(P,Z=>{u(x)&&Z(fe)})}z(X),be(Z=>xe(X,1,`cell ${Z??""} ${h()?"select-mode":""}`,"svelte-1hhz0mg"),[()=>j(()=>v(O)?"selected":"")]),J("click",X,Z=>D(O,Z)),J("mousedown",X,Z=>k(O)),J("mouseenter",X,Z=>A(O)),J("mouseup",X,Z=>p()),J("keydown",X,Z=>w(Z,O)),V(R,X)});var B=K(T,2);{var N=R=>{const x=ce(()=>(U(c()),j(()=>Math.min(c().startX,c().endX)))),O=ce(()=>(U(c()),j(()=>Math.max(c().startX,c().endX)))),X=ce(()=>(U(c()),j(()=>Math.min(c().startY,c().endY)))),P=ce(()=>(U(c()),j(()=>Math.max(c().startY,c().endY)))),fe=ce(()=>u(x)/r()*100),Z=ce(()=>u(X)/l()*100),ue=ce(()=>(u(O)-u(x)+1)/r()*100),ge=ce(()=>(u(P)-u(X)+1)/l()*100);var oe=lo();be(()=>ze(oe,`left: ${u(fe)??""}%; top: ${u(Z)??""}%; width: ${u(ue)??""}%; height: ${u(ge)??""}%;`)),V(R,oe)};Ne(B,R=>{U(h()),U(c()),u(g),j(()=>h()&&c().active&&(u(g)||c().startX!==c().endX||c().startY!==c().endY))&&R(N)})}z(C),be(()=>ze(C,`--width: ${r()??""}; --height: ${l()??""};`)),V(e,C),ke()}var io=te('<div class="container svelte-1w4104m"><!></div>');function $n(e,t){ve(t,!1);const n=Be();let a=$(t,"grid",8,null),r=$(t,"width",8,32),l=$(t,"height",8,32),s=$(t,"selectedShape",8,"square"),o=$(t,"selectedColor",24,()=>Xe.length>0?Xe[0].rgb:"#000000"),i=$(t,"paintMode",8,!1),f=$(t,"colorPickerMode",8,!1),h=$(t,"selectMode",8,!1),b=$(t,"quarterRotation",8,0),c=$(t,"zoom",12,1),F=$(t,"selection",28,()=>({startX:0,startY:0,endX:0,endY:0,active:!1})),g=W(),_=W(0),m=W(0);function y(w){c(w.detail.zoom)}function D(w){E(_,w.detail.panX),E(m,w.detail.panY)}function L(w){w.detail.didPan}function k(w){E(g,w.detail.grid),n("gridChanged",w.detail)}function A(w){n("colorPicked",w.detail)}function p(w){F(w.detail.selection),n("selectionChanged",w.detail)}jt(()=>(U(a()),U(r()),U(l())),()=>{E(g,a()||Array(r()*l()).fill(null))}),Un(),_e();var d=io(),v=I(d);eo(v,{get zoom(){return c()},get panX(){return u(_)},get panY(){return u(m)},get selectMode(){return h()},$$events:{zoomChanged:y,panChanged:D,panEnd:L},children:vr,$$slots:{default:(w,C)=>{const T=ce(()=>C.didPan);oo(w,{get grid(){return u(g)},get width(){return r()},get height(){return l()},get selectedShape(){return s()},get selectedColor(){return o()},get paintMode(){return i()},get colorPickerMode(){return f()},get selectMode(){return h()},get quarterRotation(){return b()},get selection(){return F()},get didPan(){return u(T)},$$events:{gridChanged:k,colorPicked:A,selectionChanged:p}})}}}),z(d),V(e,d),ke()}var co=te('<button type="button" class="dropdown-item" style="display: flex; align-items: center; width: 100%; background: none; border: none; padding: 0; text-align: left; cursor: pointer;"><span class="dropdown-swatch"></span> <span> </span> <span style="margin-left:auto; color:#888; font-size:0.9em"> </span></button>'),fo=te('<div class="dropdown-item">No colors found</div>'),uo=te('<div class="dropdown-menu"><input type="text" placeholder="Search color..." class="dropdown-search"/> <div class="dropdown-list"><!> <!></div></div>'),ho=te('<button type="button"></button>'),bo=te('<div class="palette-row"></div>'),go=te('<div class="color-picker"><div class="color-dropdown-container"><button type="button" class="dropdown-toggle"> <span style="margin-left:0.5em;">▼</span></button> <!></div> <div class="colors"><div class="palette2d"></div></div></div>');function Fo(e,t){ve(t,!1);const n=Ta(),a=Be();let r=$(t,"selectedColor",28,()=>n.length>0?n[0].rgb:"#000000"),l=W(""),s=W(!1),o=W(null),i=n,f=W(i);function h(k){r(k),a("colorSelected",{color:k})}function b(k){r(k.rgb),E(s,!1),E(l,""),a("colorSelected",{color:k.rgb})}jt(()=>(u(s),u(o)),()=>{u(s)&&Hn().then(()=>{u(o)?.focus()})}),jt(()=>u(l),()=>{E(f,u(l).trim()?i.filter(k=>k.name.toLowerCase().includes(u(l).toLowerCase())||k.rgb.replace("#","").includes(u(l).replace("#",""))):i)}),Un(),_e();var c=go(),F=I(c),g=I(F),_=I(g);kr(),z(g);var m=K(g,2);{var y=k=>{var A=uo(),p=I(A);an(p),Zt(p,T=>E(o,T),()=>u(o));var d=K(p,2),v=I(d);dt(v,1,()=>u(f),ut,(T,B)=>{var N=co(),R=I(N),x=K(R,2),O=I(x,!0);z(x);var X=K(x,2),P=I(X,!0);z(X),z(N),be(()=>{le(N,"aria-label",(u(B),j(()=>`Select color ${u(B).name}`))),ze(R,`background:${u(B),j(()=>u(B).rgb)??""}`),St(O,(u(B),j(()=>u(B).name))),St(P,(u(B),j(()=>u(B).rgb)))}),J("click",N,()=>b(u(B))),V(T,N)});var w=K(v,2);{var C=T=>{var B=fo();V(T,B)};Ne(w,T=>{u(f),j(()=>u(f).length===0)&&T(C)})}z(d),z(A),Qn(p,()=>u(l),T=>E(l,T)),V(k,A)};Ne(m,k=>{u(s)&&k(y)})}z(F);var D=K(F,2),L=I(D);dt(L,5,()=>Js,ut,(k,A)=>{var p=bo();dt(p,5,()=>u(A),ut,(d,v)=>{var w=ho();be(()=>{ze(w,`width: 1.5rem; height: 1.5rem; background: ${u(v),j(()=>u(v).rgb)??""}; border: 2px solid ${U(r()),u(v),j(()=>r()===u(v).rgb?"#333":"#ccc")??""}; border-radius: 0.25rem; cursor: pointer; margin: 0 0.1rem 0.1rem 0;`),le(w,"aria-label",(u(v),j(()=>u(v).name))),le(w,"title",(u(v),j(()=>u(v).name)))}),J("click",w,()=>h(u(v).rgb)),V(d,w)}),z(p),V(k,p)}),z(L),z(D),z(c),be(k=>St(_,`${k??""} `),[()=>(U(r()),j(()=>r()?i.find(k=>k.rgb===r())?.name||r():"Select color..."))]),J("click",g,()=>E(s,!u(s))),V(e,c),ke()}const ee={select:{key:"v",action:"select"},square:{key:"s",action:"square"},circle:{key:"c",action:"circle"},quarter:{key:"q",action:"quarter"},fill:{key:"f",action:"fill"},colorPicker:{key:"i",action:"colorPicker"},zoomIn:{key:"+",action:"zoomIn"},zoomInAlt:{key:"=",action:"zoomIn"},zoomOut:{key:"-",action:"zoomOut"},undo:{key:"z",ctrl:!0,action:"undo"},redo:{key:"z",ctrl:!0,shift:!0,action:"redo"},cut:{key:"x",ctrl:!0,action:"cut"},copy:{key:"c",ctrl:!0,action:"copy"},paste:{key:"v",ctrl:!0,action:"paste"},selectAll:{key:"a",ctrl:!0,action:"selectAll"},deselect:{key:"d",ctrl:!0,action:"deselect"},rotateLeft:{key:"r",action:"rotateLeft"},rotateRight:{key:"r",shift:!0,action:"rotateRight"},moveUp:{key:"ArrowUp",action:"moveUp"},moveDown:{key:"ArrowDown",action:"moveDown"},moveLeft:{key:"ArrowLeft",action:"moveLeft"},moveRight:{key:"ArrowRight",action:"moveRight"},delete:{key:"Delete",action:"delete"},backspace:{key:"Backspace",action:"delete"}};function po(e,t){const a=(e.key===" "?"Space":e.key).toLowerCase(),r=t.key.toLowerCase();return a!==r||!!e.ctrlKey!=!!t.ctrl||!!e.altKey!=!!t.alt?!1:t.key==="+"||t.key==="-"||t.key==="="?!0:!!e.shiftKey==!!t.shift}function re(e){const t=[];e.ctrl&&t.push("Ctrl"),e.shift&&t.push("Shift"),e.alt&&t.push("Alt");let n=e.key;return n===" "&&(n="Space"),n==="="&&(n="+"),t.push(n.toUpperCase()),t.join("+")}var mo=te('<div class="shape-group"><div class="group-label">Shapes</div> <div class="shape-grid"><button aria-label="Square"><div class="shape-icon"><!></div></button> <button aria-label="Circle"><div class="shape-icon"><!></div></button> <button aria-label="Quarter"><div class="shape-icon"><!></div></button></div></div>');function vo(e,t){ve(t,!1);const n=Be();let a=$(t,"selectedShape",12,"square"),r=$(t,"selectedColor",8,"#000000"),l=$(t,"quarterRotation",12,0);function s(A){if(A==="quarter")if(a()==="quarter"){l((l()+1)%4),n("quarterRotationChanged",{rotation:l()});return}else l(0);a(A),n("shapeSelected",{shape:A}),A==="quarter"&&n("quarterRotationChanged",{rotation:l()})}_e();var o=mo(),i=K(I(o),2),f=I(i);let h;var b=I(f),c=I(b);Da(c,{get color(){return r()}}),z(b),z(f);var F=K(f,2);let g;var _=I(F),m=I(_);xa(m,{get color(){return r()}}),z(_),z(F);var y=K(F,2);let D;var L=I(y),k=I(L);Pa(k,{get color(){return r()},get rotation(){return l()}}),z(L),z(y),z(i),z(o),be((A,p,d,v,w,C)=>{h=xe(f,1,"shape-button",null,h,A),le(f,"title",`Square (${p??""})`),g=xe(F,1,"shape-button",null,g,d),le(F,"title",`Circle (${v??""})`),D=xe(y,1,"shape-button",null,D,w),le(y,"title",`Quarter (${C??""})`)},[()=>({selected:a()==="square"}),()=>(U(re),U(ee),j(()=>re(ee.square))),()=>({selected:a()==="circle"}),()=>(U(re),U(ee),j(()=>re(ee.circle))),()=>({selected:a()==="quarter"}),()=>(U(re),U(ee),j(()=>re(ee.quarter)))]),J("click",f,()=>s("square")),J("click",F,()=>s("circle")),J("click",y,()=>s("quarter")),V(e,o),ke()}/**
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
 */const ko={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};var _o=_r("<svg><!><!></svg>");function Ue(e,t){const n=Le(t,["children","$$slots","$$events","$$legacy"]),a=Le(n,["name","color","size","strokeWidth","absoluteStrokeWidth","iconNode"]);ve(t,!1);let r=$(t,"name",8,void 0),l=$(t,"color",8,"currentColor"),s=$(t,"size",8,24),o=$(t,"strokeWidth",8,2),i=$(t,"absoluteStrokeWidth",8,!1),f=$(t,"iconNode",24,()=>[]);const h=(...g)=>g.filter((_,m,y)=>!!_&&y.indexOf(_)===m).join(" ");_e();var b=_o();kn(b,(g,_)=>({...ko,...a,width:s(),height:s(),stroke:l(),"stroke-width":g,class:_}),[()=>(U(i()),U(o()),U(s()),j(()=>i()?Number(o())*24/Number(s()):o())),()=>(U(r()),U(n),j(()=>h("lucide-icon","lucide",r()?`lucide-${r()}`:"",n.class)))]);var c=I(b);dt(c,1,f,ut,(g,_)=>{var m=yr(()=>wr(u(_),2));let y=()=>u(m)[0],D=()=>u(m)[1];var L=ye(),k=Fe(L);Er(k,y,!0,(A,p)=>{kn(A,()=>({...D()}))}),V(g,L)});var F=K(c);Re(F,t,"default",{}),z(b),V(e,b),ke()}function yo(e,t){const n=Le(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const a=[["path",{d:"M14 4.1 12 6"}],["path",{d:"m5.1 8-2.9-.8"}],["path",{d:"m6 12-1.9 2"}],["path",{d:"M7.2 2.2 8 5.1"}],["path",{d:"M9.037 9.69a.498.498 0 0 1 .653-.653l11 4.5a.5.5 0 0 1-.074.949l-4.349 1.041a1 1 0 0 0-.74.739l-1.04 4.35a.5.5 0 0 1-.95.074z"}]];Ue(e,He({name:"mouse-pointer-click"},()=>n,{get iconNode(){return a},children:(r,l)=>{var s=ye(),o=Fe(s);Re(o,t,"default",{}),V(r,s)},$$slots:{default:!0}}))}function wo(e,t){const n=Le(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const a=[["path",{d:"m19 11-8-8-8.6 8.6a2 2 0 0 0 0 2.8l5.2 5.2c.8.8 2 .8 2.8 0L19 11Z"}],["path",{d:"m5 2 5 5"}],["path",{d:"M2 13h15"}],["path",{d:"M22 20a2 2 0 1 1-4 0c0-1.6 1.7-2.4 2-4 .3 1.6 2 2.4 2 4Z"}]];Ue(e,He({name:"paint-bucket"},()=>n,{get iconNode(){return a},children:(r,l)=>{var s=ye(),o=Fe(s);Re(o,t,"default",{}),V(r,s)},$$slots:{default:!0}}))}function Co(e,t){const n=Le(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const a=[["path",{d:"m12 9-8.414 8.414A2 2 0 0 0 3 18.828v1.344a2 2 0 0 1-.586 1.414A2 2 0 0 1 3.828 21h1.344a2 2 0 0 0 1.414-.586L15 12"}],["path",{d:"m18 9 .4.4a1 1 0 1 1-3 3l-3.8-3.8a1 1 0 1 1 3-3l.4.4 3.4-3.4a1 1 0 1 1 3 3z"}],["path",{d:"m2 22 .414-.414"}]];Ue(e,He({name:"pipette"},()=>n,{get iconNode(){return a},children:(r,l)=>{var s=ye(),o=Fe(s);Re(o,t,"default",{}),V(r,s)},$$slots:{default:!0}}))}function Mo(e,t){const n=Le(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const a=[["path",{d:"M21 7v6h-6"}],["path",{d:"M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7"}]];Ue(e,He({name:"redo"},()=>n,{get iconNode(){return a},children:(r,l)=>{var s=ye(),o=Fe(s);Re(o,t,"default",{}),V(r,s)},$$slots:{default:!0}}))}function Ao(e,t){const n=Le(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const a=[["path",{d:"M3 7v6h6"}],["path",{d:"M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13"}]];Ue(e,He({name:"undo"},()=>n,{get iconNode(){return a},children:(r,l)=>{var s=ye(),o=Fe(s);Re(o,t,"default",{}),V(r,s)},$$slots:{default:!0}}))}function Eo(e,t){const n=Le(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const a=[["circle",{cx:"11",cy:"11",r:"8"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65"}],["line",{x1:"11",x2:"11",y1:"8",y2:"14"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11"}]];Ue(e,He({name:"zoom-in"},()=>n,{get iconNode(){return a},children:(r,l)=>{var s=ye(),o=Fe(s);Re(o,t,"default",{}),V(r,s)},$$slots:{default:!0}}))}function Bo(e,t){const n=Le(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const a=[["circle",{cx:"11",cy:"11",r:"8"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11"}]];Ue(e,He({name:"zoom-out"},()=>n,{get iconNode(){return a},children:(r,l)=>{var s=ye(),o=Fe(s);Re(o,t,"default",{}),V(r,s)},$$slots:{default:!0}}))}var So=te('<div class="tool-group"><div class="group-label">Tools</div> <div class="tool-grid"><button type="button" aria-label="Selection tool"><!></button> <button type="button" aria-label="Zoom in" class="tool-button"><!></button> <button type="button" aria-label="Zoom out" class="tool-button"><!></button> <button type="button" aria-label="Paint bucket tool"><!></button> <button type="button" aria-label="Color picker tool"><!></button> <button type="button" aria-label="Undo" class="tool-button"><!></button> <button type="button" aria-label="Redo" class="tool-button"><!></button></div></div>');function To(e,t){ve(t,!1);const n=Be();let a=$(t,"paintMode",12,!1),r=$(t,"colorPickerMode",12,!1),l=$(t,"selectMode",12,!1),s=$(t,"canUndo",8,!1),o=$(t,"canRedo",8,!1);function i(){a(!a()),a()&&(r(!1),l(!1)),n("paintModeToggled",{paintMode:a()})}function f(){r(!r()),r()&&(a(!1),l(!1)),n("colorPickerModeToggled",{colorPickerMode:r()})}function h(){l(!l()),l()&&(a(!1),r(!1)),n("selectModeToggled",{selectMode:l()})}function b(){n("undo")}function c(){n("redo")}_e();var F=So(),g=K(I(F),2),_=I(g);let m;var y=I(_);{let O=ce(()=>l()?"#333":"#555");yo(y,{size:24,get color(){return u(O)}})}z(_);var D=K(_,2),L=I(D);Eo(L,{size:24,color:"#555"}),z(D);var k=K(D,2),A=I(k);Bo(A,{size:24,color:"#555"}),z(k);var p=K(k,2);let d;var v=I(p);{let O=ce(()=>a()?"#333":"#555");wo(v,{size:24,get color(){return u(O)}})}z(p);var w=K(p,2);let C;var T=I(w);{let O=ce(()=>r()?"#333":"#555");Co(T,{size:24,get color(){return u(O)}})}z(w);var B=K(w,2),N=I(B);{let O=ce(()=>s()?"#555":"#ccc");Ao(N,{size:24,get color(){return u(O)}})}z(B);var R=K(B,2),x=I(R);{let O=ce(()=>o()?"#555":"#ccc");Mo(x,{size:24,get color(){return u(O)}})}z(R),z(g),z(F),be((O,X,P,fe,Z,ue,ge,oe,je,de)=>{m=xe(_,1,"tool-button",null,m,O),le(_,"title",`Selection Tool (${X??""})`),le(D,"title",`Zoom In (${P??""})`),le(k,"title",`Zoom Out (${fe??""})`),d=xe(p,1,"tool-button",null,d,Z),le(p,"title",`Fill Tool (${ue??""})`),C=xe(w,1,"tool-button",null,C,ge),le(w,"title",`Color Picker (${oe??""})`),le(B,"title",`Undo (${je??""})`),B.disabled=!s(),le(R,"title",`Redo (${de??""})`),R.disabled=!o()},[()=>({active:l()}),()=>(U(re),U(ee),j(()=>re(ee.select))),()=>(U(re),U(ee),j(()=>re(ee.zoomIn))),()=>(U(re),U(ee),j(()=>re(ee.zoomOut))),()=>({active:a()}),()=>(U(re),U(ee),j(()=>re(ee.fill))),()=>({active:r()}),()=>(U(re),U(ee),j(()=>re(ee.colorPicker))),()=>(U(re),U(ee),j(()=>re(ee.undo))),()=>(U(re),U(ee),j(()=>re(ee.redo)))]),J("click",_,h),J("click",D,()=>n("zoomIn")),J("click",k,()=>n("zoomOut")),J("click",p,i),J("click",w,f),J("click",B,b),J("click",R,c),V(e,F),ke()}var Do=te('<div class="canvas-size-group" style="display:flex; justify-content:center; flex-direction: column; align-items:center; width:100%;"><div class="group-label">Size</div> <div class="tool-grid" style="display:flex; justify-content: center"><label style="display:flex; flex-direction:column; align-items:center;"><input type="number" min="1" max="256"/></label></div></div>');function xo(e,t){ve(t,!1);const n=Be();let a=$(t,"size",12,32);function r(f){const h=f.target;a(Math.max(1,Math.min(128,parseInt(h.value)||1))),n("sizeChanged",{size:a()})}_e();var l=Do(),s=K(I(l),2),o=I(s),i=I(o);an(i),z(o),z(s),z(l),Qn(i,a),J("input",i,r),V(e,l),ke()}var Po=te('<div class="image-upload"><label class="upload-label"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#555" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align: middle;"><path d="M12 16V4"></path><polyline points="8 8 12 4 16 8"></polyline><rect x="4" y="16" width="16" height="4" rx="2"></rect></svg> <span>Upload image</span> <input type="file" accept="image/png, image/jpeg"/></label></div>');function Lo(e,t){ve(t,!1);const n=Be();function a(o){const i=o.target,f=i.files&&i.files[0];if(f){const h=new FileReader;h.onload=()=>{n("imageUploaded",{src:h.result})},h.readAsDataURL(f)}}_e();var r=Po(),l=I(r),s=K(I(l),4);z(l),z(r),J("change",s,a),V(e,r),ke()}var Ro=te('<button class="toolbar-toggle" aria-label="Show/hide toolbar"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#555" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align: middle;"><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg></button>');function $o(e,t){ve(t,!1);const n=Be();function a(){n("toggle")}_e();var r=Ro();J("click",r,a),V(e,r),ke()}var Oo=te("<!> <div><!> <!> <!> <!> <!></div>",1);function No(e,t){ve(t,!1);const n=Be();let a=$(t,"selectedShape",12,"square");const r=Ta();let l=$(t,"selectedColor",28,()=>r.length>0?r[0].rgb:"#000000"),s=$(t,"paintMode",12,!1),o=$(t,"colorPickerMode",12,!1),i=$(t,"selectMode",12,!1),f=$(t,"size",12,32),h=W(!0),b=$(t,"quarterRotation",12,0),c=$(t,"canUndo",12,!1),F=$(t,"canRedo",12,!1);function g(P){a(P.detail.shape),n("shapeSelected",P.detail)}function _(P){b(P.detail.rotation),n("quarterRotationChanged",P.detail)}function m(P){l(P.detail.color),n("colorSelected",P.detail)}function y(P){s(P.detail.paintMode),n("paintModeToggled",P.detail)}function D(P){o(P.detail.colorPickerMode),n("colorPickerModeToggled",P.detail)}function L(P){i(P.detail.selectMode),n("selectModeToggled",P.detail)}function k(){n("undo")}function A(){n("redo")}function p(P){f(P.detail.size),n("sizeChanged",P.detail)}function d(P){n("imageUploaded",P.detail)}function v(){E(h,!u(h))}_e();var w=Oo(),C=Fe(w);$o(C,{$$events:{toggle:v}});var T=K(C,2);let B;var N=I(T);vo(N,{get selectedColor(){return l()},get selectedShape(){return a()},set selectedShape(P){a(P)},get quarterRotation(){return b()},set quarterRotation(P){b(P)},$$events:{shapeSelected:g,quarterRotationChanged:_},$$legacy:!0});var R=K(N,2);To(R,{get paintMode(){return s()},set paintMode(P){s(P)},get colorPickerMode(){return o()},set colorPickerMode(P){o(P)},get selectMode(){return i()},set selectMode(P){i(P)},get canUndo(){return c()},set canUndo(P){c(P)},get canRedo(){return F()},set canRedo(P){F(P)},$$events:{paintModeToggled:y,colorPickerModeToggled:D,selectModeToggled:L,undo:k,redo:A,zoomIn:()=>n("zoomIn"),zoomOut:()=>n("zoomOut")},$$legacy:!0});var x=K(R,2);Fo(x,{get sortedColorPalette(){return r},get selectedColor(){return l()},set selectedColor(P){l(P)},$$events:{colorSelected:m},$$legacy:!0});var O=K(x,2);xo(O,{get size(){return f()},set size(P){f(P)},$$events:{sizeChanged:p},$$legacy:!0});var X=K(O,2);Lo(X,{$$events:{imageUploaded:d}}),z(T),be(P=>B=xe(T,1,"toolbar left",null,B,P),[()=>({visible:u(h)})]),V(e,w),ke()}function zo(e){e=e.replace(/^#/,""),e.length===3&&(e=e.split("").map(n=>n+n).join(""));const t=parseInt(e,16);return{r:t>>16&255,g:t>>8&255,b:t&255}}function Go(e,t,n,a){let r=a[0],l=1/0;for(const s of a){const o=zo(s),i=Math.sqrt(Math.pow(e-o.r,2)+Math.pow(t-o.g,2)+Math.pow(n-o.b,2));i<l&&(l=i,r=s)}return r}function Yo(e){return e<85?"square":e<170?"quarter":"circle"}function Io(e,t,n=32,a=32){return new Promise((r,l)=>{const s=new window.Image;s.src=e,s.onload=()=>{const o=document.createElement("canvas"),i=o.getContext("2d");if(o.width=n,o.height=a,!i){l(new Error("Could not get 2D context"));return}i.drawImage(s,0,0,n,a);const f=i.getImageData(0,0,n,a).data,h=[];for(let b=0;b<f.length;b+=4){const c=b/4,F=c%n,g=Math.floor(c/n);let _=f[b],m=f[b+1],y=f[b+2];f[b+3]===0&&(_=255,m=255,y=255);const L=(_+m+y)/3;let k=Yo(L),A=0;const p=g===0,d=g===a-1,v=F===0,w=F===n-1;k==="quarter"&&(p||d||v||w)?p?A=2:d?A=0:v?A=1:w&&(A=3):k==="quarter"&&(k=L<128?"square":"circle");const C=Go(_,m,y,t);h.push({shape:k,color:C,rotation:A})}r(h)},s.onerror=l})}class qo{history=[];currentIndex=-1;maxHistory=50;constructor(t){t&&this.addState(t)}addState(t){this.currentIndex<this.history.length-1&&(this.history=this.history.slice(0,this.currentIndex+1)),this.history.push({grid:JSON.parse(JSON.stringify(t)),timestamp:Date.now()}),this.history.length>this.maxHistory?this.history.shift():this.currentIndex++}undo(){return this.canUndo()?(this.currentIndex--,JSON.parse(JSON.stringify(this.history[this.currentIndex].grid))):null}redo(){return this.canRedo()?(this.currentIndex++,JSON.parse(JSON.stringify(this.history[this.currentIndex].grid))):null}canUndo(){return this.currentIndex>0}canRedo(){return this.currentIndex<this.history.length-1}clear(){this.history=[],this.currentIndex=-1}getCurrentState(){return this.currentIndex>=0&&this.currentIndex<this.history.length?JSON.parse(JSON.stringify(this.history[this.currentIndex].grid)):null}}class Xo{clipboardData=null;copy(t,n,a){const{startX:r,startY:l,endX:s,endY:o}=this.normalizeSelection(n),i=s-r+1,f=o-l+1,h=[];for(let b=l;b<=o;b++)for(let c=r;c<=s;c++){const F=b*a+c;h.push(t[F]?JSON.parse(JSON.stringify(t[F])):null)}this.clipboardData={cells:h,width:i,height:f}}cut(t,n,a){return this.copy(t,n,a),this.deleteSelection(t,n,a)}paste(t,n,a,r,l){if(!this.clipboardData)return t;const s=[...t],{cells:o,width:i,height:f}=this.clipboardData;for(let h=0;h<f;h++)for(let b=0;b<i;b++){const c=n+b,F=a+h;if(c>=0&&c<r&&F>=0&&F<l){const g=h*i+b,_=F*r+c;s[_]=o[g]?JSON.parse(JSON.stringify(o[g])):null}}return s}deleteSelection(t,n,a){const{startX:r,startY:l,endX:s,endY:o}=this.normalizeSelection(n),i=[...t];for(let f=l;f<=o;f++)for(let h=r;h<=s;h++){const b=f*a+h;i[b]=null}return i}rotateSelection(t,n,a,r=!0){const{startX:l,startY:s,endX:o,endY:i}=this.normalizeSelection(n),f=o-l+1,h=i-s+1,b=[];for(let F=s;F<=i;F++)for(let g=l;g<=o;g++){const _=F*a+g;b.push(t[_])}const c=new Array(f*h);for(let F=0;F<h;F++)for(let g=0;g<f;g++){const _=F*f+g;let m;r?m=g*h+(h-1-F):m=(f-1-g)*h+F;const y=b[_];c[m]=y?{...y,rotation:(y.rotation+(r?1:-1)+4)%4}:null}if(f===h){const F=[...t];for(let g=0;g<h;g++)for(let _=0;_<f;_++){const m=(s+g)*a+(l+_),y=g*f+_;F[m]=c[y]}return F}return t}moveSelection(t,n,a,r,l,s){const{startX:o,startY:i,endX:f,endY:h}=this.normalizeSelection(n),b=f-o+1,c=h-i+1,F=Math.max(0,Math.min(l-b,o+a)),g=Math.max(0,Math.min(s-c,i+r)),_=F+b-1,m=g+c-1;if(F===o&&g===i)return{grid:t,selection:n};const y=[];for(let k=i;k<=h;k++)for(let A=o;A<=f;A++){const p=k*l+A;y.push(t[p])}let D=this.deleteSelection(t,n,l);for(let k=0;k<c;k++)for(let A=0;A<b;A++){const p=k*b+A,d=(g+k)*l+(F+A);D[d]=y[p]}const L={...n,startX:F,startY:g,endX:_,endY:m};return{grid:D,selection:L}}hasClipboardData(){return this.clipboardData!==null}getClipboardSize(){return this.clipboardData?{width:this.clipboardData.width,height:this.clipboardData.height}:null}normalizeSelection(t){return{startX:Math.min(t.startX,t.endX),startY:Math.min(t.startY,t.endY),endX:Math.max(t.startX,t.endX),endY:Math.max(t.startY,t.endY)}}}var Ho=te('<main class="svelte-1uha8ag"><!> <!></main>');function Qo(e,t){ve(t,!1);let n=W("square"),a=W(Xe.length>0?Xe[0].rgb:"#000000"),r=W(null),l=W(!1),s=W(!1),o=W("left"),i=W(1),f=W(32),h=W(!1),b=W(0),c=W({startX:0,startY:0,endX:0,endY:0,active:!1}),F,g,_=W(!1),m=W(!1);function y(){E(i,Math.min(u(i)+.1,3))}function D(){E(i,Math.max(u(i)-.1,.2))}en(()=>{F=new qo,g=new Xo,u(r)||(E(r,Array(u(f)*u(f)).fill(null)),F.addState(u(r))),L(),window.addEventListener("keydown",A)}),On(()=>{typeof window<"u"&&window.removeEventListener("keydown",A)});function L(){E(_,F?.canUndo()??!1),E(m,F?.canRedo()??!1)}function k(S){F&&(F.addState(S),L())}function A(S){if(!(S.target instanceof HTMLInputElement||S.target instanceof HTMLTextAreaElement)){for(const[Me,he]of Object.entries(ee))if(po(S,he)){S.preventDefault(),p(he.action);break}}}function p(S){switch(S){case"select":E(s,!0),E(l,!1),E(h,!1);break;case"square":E(n,"square");break;case"circle":E(n,"circle");break;case"quarter":u(n)==="quarter"?E(b,(u(b)+1)%4):(E(n,"quarter"),E(b,0));break;case"fill":E(l,!u(l)),u(l)&&(E(s,!1),E(h,!1));break;case"colorPicker":E(h,!u(h)),u(h)&&(E(s,!1),E(l,!1));break;case"zoomIn":y();break;case"zoomOut":D();break;case"undo":R();break;case"redo":x();break;case"cut":P();break;case"copy":fe();break;case"paste":Z();break;case"selectAll":ge();break;case"deselect":oe();break;case"delete":ue();break;case"rotateLeft":u(c).active&&je(!1);break;case"rotateRight":u(c).active&&je(!0);break;case"moveUp":u(c).active&&de(0,-1);break;case"moveDown":u(c).active&&de(0,1);break;case"moveLeft":u(c).active&&de(-1,0);break;case"moveRight":u(c).active&&de(1,0);break}}function d(S){E(n,S.detail.shape)}function v(S){E(b,S.detail.rotation)}function w(S){E(a,S.detail.color)}async function C(S){const Me=Xe.map(he=>he.rgb);E(r,await Io(S.detail.src,Me,u(f),u(f)))}function T(S){E(f,S.detail.size),E(r,null)}function B(S){E(h,S.detail.colorPickerMode)}function N(S){E(s,S.detail.selectMode),u(s)&&(E(l,!1),E(h,!1))}function R(){if(F){const S=F.undo();S&&(E(r,S),L())}}function x(){if(F){const S=F.redo();S&&(E(r,S),L())}}function O(S){E(c,S.detail.selection)}function X(S){E(r,S.detail.grid),u(r)&&k(u(r))}function P(){if(u(c).active&&u(r)&&g){const S=g.cut(u(r),u(c),u(f));E(r,S),k(u(r)),E(c,{...u(c),active:!1})}}function fe(){u(c).active&&u(r)&&g&&g.copy(u(r),u(c),u(f))}function Z(){if(u(r)&&g&&g.hasClipboardData()){const S=u(c).active?u(c).startX:0,Me=u(c).active?u(c).startY:0,he=g.paste(u(r),S,Me,u(f),u(f));E(r,he),k(u(r))}}function ue(){if(u(c).active&&u(r)&&g){const S=g.deleteSelection(u(r),u(c),u(f));E(r,S),k(u(r)),E(c,{...u(c),active:!1})}}function ge(){E(c,{startX:0,startY:0,endX:u(f)-1,endY:u(f)-1,active:!0}),E(s,!0),E(l,!1),E(h,!1)}function oe(){E(c,{...u(c),active:!1})}function je(S=!0){if(u(c).active&&u(r)&&g){const Me=g.rotateSelection(u(r),u(c),u(f),S);E(r,Me),k(u(r))}}function de(S,Me){if(u(c).active&&u(r)&&g){const he=g.moveSelection(u(r),u(c),S,Me,u(f),u(f));E(r,he.grid),E(c,he.selection),k(u(r))}}function st(S){E(a,S.detail.color),E(h,!1)}_e();var ot=Ho();Ga(S=>{Cr.title="Dotsly"});var bt=I(ot);No(bt,{get toolbarPosition(){return u(o)},set toolbarPosition(S){E(o,S)},get selectedColor(){return u(a)},set selectedColor(S){E(a,S)},get selectedShape(){return u(n)},set selectedShape(S){E(n,S)},get paintMode(){return u(l)},set paintMode(S){E(l,S)},get selectMode(){return u(s)},set selectMode(S){E(s,S)},get colorPickerMode(){return u(h)},set colorPickerMode(S){E(h,S)},get quarterRotation(){return u(b)},set quarterRotation(S){E(b,S)},get size(){return u(f)},set size(S){E(f,S)},get canUndo(){return u(_)},set canUndo(S){E(_,S)},get canRedo(){return u(m)},set canRedo(S){E(m,S)},$$events:{shapeSelected:d,colorSelected:w,imageUploaded:C,paintModeToggled:S=>E(l,S.detail.paintMode),colorPickerModeToggled:B,selectModeToggled:N,undo:R,redo:x,zoomIn:y,zoomOut:D,quarterRotationChanged:v,sizeChanged:T},$$legacy:!0});var Bt=K(bt,2);{var $e=S=>{$n(S,{get width(){return u(f)},get height(){return u(f)},get selectedShape(){return u(n)},get selectedColor(){return u(a)},get selectMode(){return u(s)},get grid(){return u(r)},get paintMode(){return u(l)},get colorPickerMode(){return u(h)},get toolbarPosition(){return u(o)},get zoom(){return u(i)},get quarterRotation(){return u(b)},get selection(){return u(c)},$$events:{colorPicked:st,selectionChanged:O,gridChanged:X}})},gt=S=>{$n(S,{get width(){return u(f)},get height(){return u(f)},get selectedShape(){return u(n)},get selectedColor(){return u(a)},get selectMode(){return u(s)},get paintMode(){return u(l)},get colorPickerMode(){return u(h)},get toolbarPosition(){return u(o)},get zoom(){return u(i)},get quarterRotation(){return u(b)},get selection(){return u(c)},$$events:{colorPicked:st,selectionChanged:O,gridChanged:X}})};Ne(Bt,S=>{u(r)?S($e):S(gt,!1)})}z(ot),V(e,ot),ke()}export{Qo as component};
