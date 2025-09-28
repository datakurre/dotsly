import"../chunks/DsnmJJEf.js";import"../chunks/DXAwGQm7.js";import{i as Ha,a as ja,c as Ua,d as Za,n as Va,b as Wa,e as Ge,o as dn,f as J,g as Zn,j as Ka}from"../chunks/Csy9xEDe.js";import{B as hn,w as Pt,aT as Vn,z as _t,h as te,aA as Wn,a as rn,g as f,W as ve,x as Ja,H as Qa,y as wn,A as tt,J as Ve,ag as er,aI as tr,C as ct,F as nr,aU as $t,aV as Ot,D as it,af as Mn,a8 as W,X as An,aF as Kn,ax as Jn,G as bn,I as Qn,aW as ar,aX as It,M as rr,an as ft,aY as lr,at as or,aZ as sr,aE as ir,a_ as cr,T as ea,a$ as fr,E as ur,b0 as dr,aH as hr,K as ta,b1 as br,b2 as gr,av as Fr,b3 as pr,b4 as mr,b5 as vr,b6 as kr,b7 as yr,b8 as Cr,U as _r,b9 as wr,ba as Mr,bb as Ar,bc as Br,aa as na,d as U,L as Er,bd as xr,p as Ee,n as de,q as X,s as Y,R as B,t as Me,m as Z,o as xe,k as _e,l as ke,v as ee,f as j,be as ln,bf as aa,bg as Dr,bh as Sr,ab as Tr,bi as Rr,bj as Lr}from"../chunks/DckqTTcM.js";import{p as $,b as Bn,i as Ze,l as Te,s as He}from"../chunks/q0klybCy.js";import{i as De}from"../chunks/BBao4eQ6.js";import{s as Le}from"../chunks/M1l1I-Ar.js";function Dt(e,t){return t}function Pr(e,t,n){for(var a=e.items,r=[],l=t.length,o=0;o<l;o++)sr(t[o].e,r,!0);var s=l>0&&r.length===0&&n!==null;if(s){var i=n.parentNode;ir(i),i.append(n),a.clear(),Oe(e,t[0].prev,t[l-1].next)}cr(r,()=>{for(var c=0;c<l;c++){var u=t[c];s||(a.delete(u.k),Oe(e,u.prev,u.next)),ft(u.e,!s)}})}function St(e,t,n,a,r,l=null){var o=e,s={flags:t,items:new Map,first:null},i=(t&Vn)!==0;if(i){var c=e;o=te?_t(Wn(c)):c.appendChild(hn())}te&&rn();var u=null,g=!1,b=new Map,h=ve(()=>{var k=n();return Jn(k)?k:k==null?[]:Kn(k)}),F,m;function p(){$r(m,F,s,b,o,r,t,a,n),l!==null&&(F.length===0?u?bn(u):u=ct(()=>l(o)):u!==null&&Qn(u,()=>{u=null}))}Pt(()=>{m??=ea,F=f(h);var k=F.length;if(g&&k===0)return;g=k===0;let x=!1;if(te){var L=Ja(o)===Qa;L!==(k===0)&&(o=wn(),_t(o),tt(!1),x=!0)}if(te){for(var M=null,R,v=0;v<k;v++){if(Ve.nodeType===er&&Ve.data===tr){o=Ve,x=!0,tt(!1);break}var d=F[v],C=a(d,v);R=on(Ve,s,M,null,d,C,v,r,t,n),s.items.set(C,R),M=R}k>0&&_t(wn())}if(te)k===0&&l&&(u=ct(()=>l(o)));else if(nr()){var E=new Set,_=it;for(v=0;v<k;v+=1){d=F[v],C=a(d,v);var T=s.items.get(C)??b.get(C);T?(t&($t|Ot))!==0&&ra(T,d,v,t):(R=on(null,s,null,null,d,C,v,r,t,n,!0),b.set(C,R)),E.add(C)}for(const[D,O]of s.items)E.has(D)||_.skipped_effects.add(O.e);_.add_callback(p)}else p();x&&tt(!0),f(h)}),te&&(o=Ve)}function $r(e,t,n,a,r,l,o,s,i){var c=(o&lr)!==0,u=(o&($t|Ot))!==0,g=t.length,b=n.items,h=n.first,F=h,m,p=null,k,x=[],L=[],M,R,v,d;if(c)for(d=0;d<g;d+=1)M=t[d],R=s(M,d),v=b.get(R),v!==void 0&&(v.a?.measure(),(k??=new Set).add(v));for(d=0;d<g;d+=1){if(M=t[d],R=s(M,d),v=b.get(R),v===void 0){var C=a.get(R);if(C!==void 0){a.delete(R),b.set(R,C);var E=p?p.next:F;Oe(n,p,C),Oe(n,C,E),qt(C,E,r),p=C}else{var _=F?F.e.nodes_start:r;p=on(_,n,p,p===null?n.first:p.next,M,R,d,l,o,i)}b.set(R,p),x=[],L=[],F=p.next;continue}if(u&&ra(v,M,d,o),(v.e.f&It)!==0&&(bn(v.e),c&&(v.a?.unfix(),(k??=new Set).delete(v))),v!==F){if(m!==void 0&&m.has(v)){if(x.length<L.length){var T=L[0],D;p=T.prev;var O=x[0],V=x[x.length-1];for(D=0;D<x.length;D+=1)qt(x[D],T,r);for(D=0;D<L.length;D+=1)m.delete(L[D]);Oe(n,O.prev,V.next),Oe(n,p,O),Oe(n,V,T),F=T,p=V,d-=1,x=[],L=[]}else m.delete(v),qt(v,F,r),Oe(n,v.prev,v.next),Oe(n,v,p===null?n.first:p.next),Oe(n,p,v),p=v;continue}for(x=[],L=[];F!==null&&F.k!==R;)(F.e.f&It)===0&&(m??=new Set).add(F),L.push(F),F=F.next;if(F===null)continue;v=F}x.push(v),p=v,F=v.next}if(F!==null||m!==void 0){for(var P=m===void 0?[]:Kn(m);F!==null;)(F.e.f&It)===0&&P.push(F),F=F.next;var S=P.length;if(S>0){var q=(o&Vn)!==0&&g===0?r:null;if(c){for(d=0;d<S;d+=1)P[d].a?.measure();for(d=0;d<S;d+=1)P[d].a?.fix()}Pr(n,P,q)}}c&&rr(()=>{if(k!==void 0)for(v of k)v.a?.apply()}),e.first=n.first&&n.first.e,e.last=p&&p.e;for(var I of a.values())ft(I.e);a.clear()}function ra(e,t,n,a){(a&$t)!==0&&Mn(e.v,t),(a&Ot)!==0?Mn(e.i,n):e.i=n}function on(e,t,n,a,r,l,o,s,i,c,u){var g=(i&$t)!==0,b=(i&ar)===0,h=g?b?W(r,!1,!1):An(r):r,F=(i&Ot)===0?o:An(o),m={i:F,v:h,k:l,a:null,e:null,prev:n,next:a};try{if(e===null){var p=document.createDocumentFragment();p.append(e=hn())}return m.e=ct(()=>s(e,h,F,c),te),m.e.prev=n&&n.e,m.e.next=a&&a.e,n===null?u||(t.first=m):(n.next=m,n.e.next=m.e),a!==null&&(a.prev=m,a.e.prev=m.e),m}finally{}}function qt(e,t,n){for(var a=e.next?e.next.e.nodes_start:n,r=t?t.e.nodes_start:n,l=e.e.nodes_start;l!==null&&l!==a;){var o=or(l);r.before(l),l=o}}function Oe(e,t,n){t===null?e.first=n:(t.next=n,t.e.next=n&&n.e),n!==null&&(n.prev=t,n.e.prev=t&&t.e)}function Or(e,t,n,a,r,l){let o=te;te&&rn();var s,i,c=null;te&&Ve.nodeType===fr&&(c=Ve,rn());var u=te?Ve:e,g;Pt(()=>{const b=t()||null;var h=dr;b!==s&&(g&&(b===null?Qn(g,()=>{g=null,i=null}):b===i?bn(g):ft(g)),b&&b!==i&&(g=ct(()=>{if(c=te?c:document.createElementNS(h,b),hr(c,c),a){te&&Ha(b)&&c.append(document.createComment(""));var F=te?Wn(c):c.appendChild(hn());te&&(F===null?tt(!1):_t(F)),a(c,F)}ea.nodes_end=c,u.before(c)})),s=b,s&&(i=s))},ur),o&&(tt(!0),_t(u))}function Nr(e,t){var n=void 0,a;Pt(()=>{n!==(n=t())&&(a&&(ft(a),a=null),n&&(a=ct(()=>{ta(()=>n(e))})))})}function la(e){var t,n,a="";if(typeof e=="string"||typeof e=="number")a+=e;else if(typeof e=="object")if(Array.isArray(e)){var r=e.length;for(t=0;t<r;t++)e[t]&&(n=la(e[t]))&&(a&&(a+=" "),a+=n)}else for(n in e)e[n]&&(a&&(a+=" "),a+=n);return a}function zr(){for(var e,t,n=0,a="",r=arguments.length;n<r;n++)(e=arguments[n])&&(t=la(e))&&(a&&(a+=" "),a+=t);return a}function Gr(e){return typeof e=="object"?zr(e):e??""}const En=[...` 	
\r\f \v\uFEFF`];function Yr(e,t,n){var a=e==null?"":""+e;if(t&&(a=a?a+" "+t:t),n){for(var r in n)if(n[r])a=a?a+" "+r:r;else if(a.length)for(var l=r.length,o=0;(o=a.indexOf(r,o))>=0;){var s=o+l;(o===0||En.includes(a[o-1]))&&(s===a.length||En.includes(a[s]))?a=(o===0?"":a.substring(0,o))+a.substring(s+1):o=s}}return a===""?null:a}function xn(e,t=!1){var n=t?" !important;":";",a="";for(var r in e){var l=e[r];l!=null&&l!==""&&(a+=" "+r+": "+l+n)}return a}function Xt(e){return e[0]!=="-"||e[1]!=="-"?e.toLowerCase():e}function Ir(e,t){if(t){var n="",a,r;if(Array.isArray(t)?(a=t[0],r=t[1]):a=t,e){e=String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();var l=!1,o=0,s=!1,i=[];a&&i.push(...Object.keys(a).map(Xt)),r&&i.push(...Object.keys(r).map(Xt));var c=0,u=-1;const m=e.length;for(var g=0;g<m;g++){var b=e[g];if(s?b==="/"&&e[g-1]==="*"&&(s=!1):l?l===b&&(l=!1):b==="/"&&e[g+1]==="*"?s=!0:b==='"'||b==="'"?l=b:b==="("?o++:b===")"&&o--,!s&&l===!1&&o===0){if(b===":"&&u===-1)u=g;else if(b===";"||g===m-1){if(u!==-1){var h=Xt(e.substring(c,u).trim());if(!i.includes(h)){b!==";"&&g++;var F=e.substring(c,g).trim();n+=" "+F+";"}}c=g+1,u=-1}}}}return a&&(n+=xn(a)),r&&(n+=xn(r,!0)),n=n.trim(),n===""?null:n}return e==null?null:String(e)}function Ne(e,t,n,a,r,l){var o=e.__className;if(te||o!==n||o===void 0){var s=Yr(n,a,l);(!te||s!==e.getAttribute("class"))&&(s==null?e.removeAttribute("class"):t?e.className=s:e.setAttribute("class",s)),e.__className=n}else if(l&&r!==l)for(var i in l){var c=!!l[i];(r==null||c!==!!r[i])&&e.classList.toggle(i,c)}return l}function Ht(e,t={},n,a){for(var r in n){var l=n[r];t[r]!==l&&(n[r]==null?e.style.removeProperty(r):e.style.setProperty(r,l,a))}}function Ke(e,t,n,a){var r=e.__style;if(te||r!==t){var l=Ir(t,a);(!te||l!==e.getAttribute("style"))&&(l==null?e.removeAttribute("style"):e.style.cssText=l),e.__style=t}else a&&(Array.isArray(a)?(Ht(e,n?.[0],a[0]),Ht(e,n?.[1],a[1],"important")):Ht(e,n,a));return a}function sn(e,t,n=!1){if(e.multiple){if(t==null)return;if(!Jn(t))return br();for(var a of e.options)a.selected=t.includes(Dn(a));return}for(a of e.options){var r=Dn(a);if(gr(r,t)){a.selected=!0;return}}(!n||t!==void 0)&&(e.selectedIndex=-1)}function qr(e){var t=new MutationObserver(()=>{sn(e,e.__value)});t.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),Fr(()=>{t.disconnect()})}function Dn(e){return"__value"in e?e.__value:e.value}const yt=Symbol("class"),Ct=Symbol("style"),oa=Symbol("is custom element"),sa=Symbol("is html");function ia(e){if(te){var t=!1,n=()=>{if(!t){if(t=!0,e.hasAttribute("value")){var a=e.value;ue(e,"value",null),e.value=a}if(e.hasAttribute("checked")){var r=e.checked;ue(e,"checked",null),e.checked=r}}};e.__on_r=n,wr(n),Mr()}}function Xr(e,t){t?e.hasAttribute("selected")||e.setAttribute("selected",""):e.removeAttribute("selected")}function ue(e,t,n,a){var r=ca(e);te&&(r[t]=e.getAttribute(t),t==="src"||t==="srcset"||t==="href"&&e.nodeName==="LINK")||r[t]!==(r[t]=n)&&(t==="loading"&&(e[Ar]=n),n==null?e.removeAttribute(t):typeof n!="string"&&fa(e).includes(t)?e[t]=n:e.setAttribute(t,n))}function Hr(e,t,n,a,r=!1,l=!1){if(te&&r&&e.tagName==="INPUT"){var o=e,s=o.type==="checkbox"?"defaultChecked":"defaultValue";s in n||ia(o)}var i=ca(e),c=i[oa],u=!i[sa];let g=te&&c;g&&tt(!1);var b=t||{},h=e.tagName==="OPTION";for(var F in t)F in n||(n[F]=null);n.class?n.class=Gr(n.class):n[yt]&&(n.class=null),n[Ct]&&(n.style??=null);var m=fa(e);for(const v in n){let d=n[v];if(h&&v==="value"&&d==null){e.value=e.__value="",b[v]=d;continue}if(v==="class"){var p=e.namespaceURI==="http://www.w3.org/1999/xhtml";Ne(e,p,d,a,t?.[yt],n[yt]),b[v]=d,b[yt]=n[yt];continue}if(v==="style"){Ke(e,d,t?.[Ct],n[Ct]),b[v]=d,b[Ct]=n[Ct];continue}var k=b[v];if(!(d===k&&!(d===void 0&&e.hasAttribute(v)))){b[v]=d;var x=v[0]+v[1];if(x!=="$$")if(x==="on"){const C={},E="$$"+v;let _=v.slice(2);var L=Wa(_);if(ja(_)&&(_=_.slice(0,-7),C.capture=!0),!L&&k){if(d!=null)continue;e.removeEventListener(_,b[E],C),b[E]=null}if(d!=null)if(L)e[`__${_}`]=d,Za([_]);else{let T=function(D){b[v].call(this,D)};b[E]=Ua(_,e,T,C)}else L&&(e[`__${_}`]=void 0)}else if(v==="style")ue(e,v,d);else if(v==="autofocus")Cr(e,!!d);else if(!c&&(v==="__value"||v==="value"&&d!=null))e.value=e.__value=d;else if(v==="selected"&&h)Xr(e,d);else{var M=v;u||(M=Va(M));var R=M==="defaultValue"||M==="defaultChecked";if(d==null&&!c&&!R)if(i[v]=null,M==="value"||M==="checked"){let C=e;const E=t===void 0;if(M==="value"){let _=C.defaultValue;C.removeAttribute(M),C.defaultValue=_,C.value=C.__value=E?_:null}else{let _=C.defaultChecked;C.removeAttribute(M),C.defaultChecked=_,C.checked=E?_:!1}}else e.removeAttribute(v);else R||m.includes(M)&&(c||typeof d!="string")?(e[M]=d,M in i&&(i[M]=_r)):typeof d!="function"&&ue(e,M,d)}}}return g&&tt(!0),b}function Sn(e,t,n=[],a=[],r,l=!1,o=!1){pr(n,a,s=>{var i=void 0,c={},u=e.nodeName==="SELECT",g=!1;if(Pt(()=>{var h=t(...s.map(f)),F=Hr(e,i,h,r,l,o);g&&u&&"value"in h&&sn(e,h.value);for(let p of Object.getOwnPropertySymbols(c))h[p]||ft(c[p]);for(let p of Object.getOwnPropertySymbols(h)){var m=h[p];p.description===kr&&(!i||m!==i[p])&&(c[p]&&ft(c[p]),c[p]=ct(()=>Nr(e,()=>m))),F[p]=m}i=F}),u){var b=e;ta(()=>{sn(b,i.value,!0),qr(b)})}g=!0})}function ca(e){return e.__attributes??={[oa]:e.nodeName.includes("-"),[sa]:e.namespaceURI===mr}}var Tn=new Map;function fa(e){var t=e.getAttribute("is")||e.nodeName,n=Tn.get(t);if(n)return n;Tn.set(t,n=[]);for(var a,r=e,l=Element.prototype;l!==r;){a=yr(r);for(var o in a)a[o].set&&n.push(o);r=vr(r)}return n}function jr(e,t,n=t){var a=new WeakSet;Br(e,"input",async r=>{var l=r?e.defaultValue:e.value;if(l=jt(e)?Ut(l):l,n(l),it!==null&&a.add(it),await na(),l!==(l=t())){var o=e.selectionStart,s=e.selectionEnd;e.value=l??"",s!==null&&(e.selectionStart=o,e.selectionEnd=Math.min(s,e.value.length))}}),(te&&e.defaultValue!==e.value||U(t)==null&&e.value)&&(n(jt(e)?Ut(e.value):e.value),it!==null&&a.add(it)),Er(()=>{var r=t();if(e===document.activeElement){var l=xr??it;if(a.has(l))return}jt(e)&&r===Ut(e.value)||e.type==="date"&&!r&&!e.value||r!==e.value&&(e.value=r??"")})}function jt(e){var t=e.type;return t==="number"||t==="range"}function Ut(e){return e===""?null:+e}const Ur=`Part,Color,Quantity,Is Spare
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
`,Zr=`Part,Color,Quantity,Is Spare
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
`,Vr=`Part,Color,Quantity,Is Spare
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
`,Wr=`Part,Color,Quantity,Is Spare
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
`,Kr=`Part,Color,Quantity,Is Spare
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
`,Jr=`Part,Color,Quantity,Is Spare
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
`,Qr=`id,name,rgb,is_trans,num_parts,num_sets,y1,y2
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
`,{min:el,max:tl}=Math,nt=(e,t=0,n=1)=>el(tl(t,e),n),gn=e=>{e._clipped=!1,e._unclipped=e.slice(0);for(let t=0;t<=3;t++)t<3?((e[t]<0||e[t]>255)&&(e._clipped=!0),e[t]=nt(e[t],0,255)):t===3&&(e[t]=nt(e[t],0,1));return e},ua={};for(let e of["Boolean","Number","String","Function","Array","Date","RegExp","Undefined","Null"])ua[`[object ${e}]`]=e.toLowerCase();function H(e){return ua[Object.prototype.toString.call(e)]||"object"}const z=(e,t=null)=>e.length>=3?Array.prototype.slice.call(e):H(e[0])=="object"&&t?t.split("").filter(n=>e[0][n]!==void 0).map(n=>e[0][n]):e[0].slice(0),ht=e=>{if(e.length<2)return null;const t=e.length-1;return H(e[t])=="string"?e[t].toLowerCase():null},{PI:Nt,min:da,max:ha}=Math,Ae=e=>Math.round(e*100)/100,cn=e=>Math.round(e*100)/100,Ie=Nt*2,Zt=Nt/3,nl=Nt/180,al=180/Nt;function ba(e){return[...e.slice(0,3).reverse(),...e.slice(3)]}const N={format:{},autodetect:[]};class w{constructor(...t){const n=this;if(H(t[0])==="object"&&t[0].constructor&&t[0].constructor===this.constructor)return t[0];let a=ht(t),r=!1;if(!a){r=!0,N.sorted||(N.autodetect=N.autodetect.sort((l,o)=>o.p-l.p),N.sorted=!0);for(let l of N.autodetect)if(a=l.test(...t),a)break}if(N.format[a]){const l=N.format[a].apply(null,r?t:t.slice(0,-1));n._rgb=gn(l)}else throw new Error("unknown format: "+t);n._rgb.length===3&&n._rgb.push(1)}toString(){return H(this.hex)=="function"?this.hex():`[${this._rgb.join(",")}]`}}const rl="3.1.2",G=(...e)=>new w(...e);G.version=rl;const ut={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",gold:"#ffd700",goldenrod:"#daa520",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",laserlemon:"#ffff54",lavender:"#e6e6fa",lavenderblush:"#fff0f5",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrod:"#fafad2",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",maroon2:"#7f0000",maroon3:"#b03060",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",purple2:"#7f007f",purple3:"#a020f0",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"},ll=/^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/,ol=/^#?([A-Fa-f0-9]{8}|[A-Fa-f0-9]{4})$/,ga=e=>{if(e.match(ll)){(e.length===4||e.length===7)&&(e=e.substr(1)),e.length===3&&(e=e.split(""),e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]);const t=parseInt(e,16),n=t>>16,a=t>>8&255,r=t&255;return[n,a,r,1]}if(e.match(ol)){(e.length===5||e.length===9)&&(e=e.substr(1)),e.length===4&&(e=e.split(""),e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]+e[3]+e[3]);const t=parseInt(e,16),n=t>>24&255,a=t>>16&255,r=t>>8&255,l=Math.round((t&255)/255*100)/100;return[n,a,r,l]}throw new Error(`unknown hex color: ${e}`)},{round:At}=Math,Fa=(...e)=>{let[t,n,a,r]=z(e,"rgba"),l=ht(e)||"auto";r===void 0&&(r=1),l==="auto"&&(l=r<1?"rgba":"rgb"),t=At(t),n=At(n),a=At(a);let s="000000"+(t<<16|n<<8|a).toString(16);s=s.substr(s.length-6);let i="0"+At(r*255).toString(16);switch(i=i.substr(i.length-2),l.toLowerCase()){case"rgba":return`#${s}${i}`;case"argb":return`#${i}${s}`;default:return`#${s}`}};w.prototype.name=function(){const e=Fa(this._rgb,"rgb");for(let t of Object.keys(ut))if(ut[t]===e)return t.toLowerCase();return e};N.format.named=e=>{if(e=e.toLowerCase(),ut[e])return ga(ut[e]);throw new Error("unknown color name: "+e)};N.autodetect.push({p:5,test:(e,...t)=>{if(!t.length&&H(e)==="string"&&ut[e.toLowerCase()])return"named"}});w.prototype.alpha=function(e,t=!1){return e!==void 0&&H(e)==="number"?t?(this._rgb[3]=e,this):new w([this._rgb[0],this._rgb[1],this._rgb[2],e],"rgb"):this._rgb[3]};w.prototype.clipped=function(){return this._rgb._clipped||!1};const ze={Kn:18,labWhitePoint:"d65",Xn:.95047,Yn:1,Zn:1.08883,kE:216/24389,kKE:8,kK:24389/27,RefWhiteRGB:{X:.95047,Y:1,Z:1.08883},MtxRGB2XYZ:{m00:.4124564390896922,m01:.21267285140562253,m02:.0193338955823293,m10:.357576077643909,m11:.715152155287818,m12:.11919202588130297,m20:.18043748326639894,m21:.07217499330655958,m22:.9503040785363679},MtxXYZ2RGB:{m00:3.2404541621141045,m01:-.9692660305051868,m02:.055643430959114726,m10:-1.5371385127977166,m11:1.8760108454466942,m12:-.2040259135167538,m20:-.498531409556016,m21:.041556017530349834,m22:1.0572251882231791},As:.9414285350000001,Bs:1.040417467,Cs:1.089532651,MtxAdaptMa:{m00:.8951,m01:-.7502,m02:.0389,m10:.2664,m11:1.7135,m12:-.0685,m20:-.1614,m21:.0367,m22:1.0296},MtxAdaptMaI:{m00:.9869929054667123,m01:.43230526972339456,m02:-.008528664575177328,m10:-.14705425642099013,m11:.5183602715367776,m12:.04004282165408487,m20:.15996265166373125,m21:.0492912282128556,m22:.9684866957875502}},sl=new Map([["a",[1.0985,.35585]],["b",[1.0985,.35585]],["c",[.98074,1.18232]],["d50",[.96422,.82521]],["d55",[.95682,.92149]],["d65",[.95047,1.08883]],["e",[1,1,1]],["f2",[.99186,.67393]],["f7",[.95041,1.08747]],["f11",[1.00962,.6435]],["icc",[.96422,.82521]]]);function qe(e){const t=sl.get(String(e).toLowerCase());if(!t)throw new Error("unknown Lab illuminant "+e);ze.labWhitePoint=e,ze.Xn=t[0],ze.Zn=t[1]}function wt(){return ze.labWhitePoint}const Fn=(...e)=>{e=z(e,"lab");const[t,n,a]=e,[r,l,o]=il(t,n,a),[s,i,c]=pa(r,l,o);return[s,i,c,e.length>3?e[3]:1]},il=(e,t,n)=>{const{kE:a,kK:r,kKE:l,Xn:o,Yn:s,Zn:i}=ze,c=(e+16)/116,u=.002*t+c,g=c-.005*n,b=u*u*u,h=g*g*g,F=b>a?b:(116*u-16)/r,m=e>l?Math.pow((e+16)/116,3):e/r,p=h>a?h:(116*g-16)/r,k=F*o,x=m*s,L=p*i;return[k,x,L]},Vt=e=>{const t=Math.sign(e);return e=Math.abs(e),(e<=.0031308?e*12.92:1.055*Math.pow(e,1/2.4)-.055)*t},pa=(e,t,n)=>{const{MtxAdaptMa:a,MtxAdaptMaI:r,MtxXYZ2RGB:l,RefWhiteRGB:o,Xn:s,Yn:i,Zn:c}=ze,u=s*a.m00+i*a.m10+c*a.m20,g=s*a.m01+i*a.m11+c*a.m21,b=s*a.m02+i*a.m12+c*a.m22,h=o.X*a.m00+o.Y*a.m10+o.Z*a.m20,F=o.X*a.m01+o.Y*a.m11+o.Z*a.m21,m=o.X*a.m02+o.Y*a.m12+o.Z*a.m22,p=(e*a.m00+t*a.m10+n*a.m20)*(h/u),k=(e*a.m01+t*a.m11+n*a.m21)*(F/g),x=(e*a.m02+t*a.m12+n*a.m22)*(m/b),L=p*r.m00+k*r.m10+x*r.m20,M=p*r.m01+k*r.m11+x*r.m21,R=p*r.m02+k*r.m12+x*r.m22,v=Vt(L*l.m00+M*l.m10+R*l.m20),d=Vt(L*l.m01+M*l.m11+R*l.m21),C=Vt(L*l.m02+M*l.m12+R*l.m22);return[v*255,d*255,C*255]},pn=(...e)=>{const[t,n,a,...r]=z(e,"rgb"),[l,o,s]=ma(t,n,a),[i,c,u]=cl(l,o,s);return[i,c,u,...r.length>0&&r[0]<1?[r[0]]:[]]};function cl(e,t,n){const{Xn:a,Yn:r,Zn:l,kE:o,kK:s}=ze,i=e/a,c=t/r,u=n/l,g=i>o?Math.pow(i,1/3):(s*i+16)/116,b=c>o?Math.pow(c,1/3):(s*c+16)/116,h=u>o?Math.pow(u,1/3):(s*u+16)/116;return[116*b-16,500*(g-b),200*(b-h)]}function Wt(e){const t=Math.sign(e);return e=Math.abs(e),(e<=.04045?e/12.92:Math.pow((e+.055)/1.055,2.4))*t}const ma=(e,t,n)=>{e=Wt(e/255),t=Wt(t/255),n=Wt(n/255);const{MtxRGB2XYZ:a,MtxAdaptMa:r,MtxAdaptMaI:l,Xn:o,Yn:s,Zn:i,As:c,Bs:u,Cs:g}=ze;let b=e*a.m00+t*a.m10+n*a.m20,h=e*a.m01+t*a.m11+n*a.m21,F=e*a.m02+t*a.m12+n*a.m22;const m=o*r.m00+s*r.m10+i*r.m20,p=o*r.m01+s*r.m11+i*r.m21,k=o*r.m02+s*r.m12+i*r.m22;let x=b*r.m00+h*r.m10+F*r.m20,L=b*r.m01+h*r.m11+F*r.m21,M=b*r.m02+h*r.m12+F*r.m22;return x*=m/c,L*=p/u,M*=k/g,b=x*l.m00+L*l.m10+M*l.m20,h=x*l.m01+L*l.m11+M*l.m21,F=x*l.m02+L*l.m12+M*l.m22,[b,h,F]};w.prototype.lab=function(){return pn(this._rgb)};const fl=(...e)=>new w(...e,"lab");Object.assign(G,{lab:fl,getLabWhitePoint:wt,setLabWhitePoint:qe});N.format.lab=Fn;N.autodetect.push({p:2,test:(...e)=>{if(e=z(e,"lab"),H(e)==="array"&&e.length===3)return"lab"}});w.prototype.darken=function(e=1){const t=this,n=t.lab();return n[0]-=ze.Kn*e,new w(n,"lab").alpha(t.alpha(),!0)};w.prototype.brighten=function(e=1){return this.darken(-e)};w.prototype.darker=w.prototype.darken;w.prototype.brighter=w.prototype.brighten;w.prototype.get=function(e){const[t,n]=e.split("."),a=this[t]();if(n){const r=t.indexOf(n)-(t.substr(0,2)==="ok"?2:0);if(r>-1)return a[r];throw new Error(`unknown channel ${n} in mode ${t}`)}else return a};const{pow:ul}=Math,dl=1e-7,hl=20;w.prototype.luminance=function(e,t="rgb"){if(e!==void 0&&H(e)==="number"){if(e===0)return new w([0,0,0,this._rgb[3]],"rgb");if(e===1)return new w([255,255,255,this._rgb[3]],"rgb");let n=this.luminance(),a=hl;const r=(o,s)=>{const i=o.interpolate(s,.5,t),c=i.luminance();return Math.abs(e-c)<dl||!a--?i:c>e?r(o,i):r(i,s)},l=(n>e?r(new w([0,0,0]),this):r(this,new w([255,255,255]))).rgb();return new w([...l,this._rgb[3]])}return bl(...this._rgb.slice(0,3))};const bl=(e,t,n)=>(e=Kt(e),t=Kt(t),n=Kt(n),.2126*e+.7152*t+.0722*n),Kt=e=>(e/=255,e<=.03928?e/12.92:ul((e+.055)/1.055,2.4)),ge={},dt=(e,t,n=.5,...a)=>{let r=a[0]||"lrgb";if(!ge[r]&&!a.length&&(r=Object.keys(ge)[0]),!ge[r])throw new Error(`interpolation mode ${r} is not defined`);return H(e)!=="object"&&(e=new w(e)),H(t)!=="object"&&(t=new w(t)),ge[r](e,t,n).alpha(e.alpha()+n*(t.alpha()-e.alpha()))};w.prototype.mix=w.prototype.interpolate=function(e,t=.5,...n){return dt(this,e,t,...n)};w.prototype.premultiply=function(e=!1){const t=this._rgb,n=t[3];return e?(this._rgb=[t[0]*n,t[1]*n,t[2]*n,n],this):new w([t[0]*n,t[1]*n,t[2]*n,n],"rgb")};const{sin:gl,cos:Fl}=Math,va=(...e)=>{let[t,n,a]=z(e,"lch");return isNaN(a)&&(a=0),a=a*nl,[t,Fl(a)*n,gl(a)*n]},mn=(...e)=>{e=z(e,"lch");const[t,n,a]=e,[r,l,o]=va(t,n,a),[s,i,c]=Fn(r,l,o);return[s,i,c,e.length>3?e[3]:1]},pl=(...e)=>{const t=ba(z(e,"hcl"));return mn(...t)},{sqrt:ml,atan2:vl,round:kl}=Math,ka=(...e)=>{const[t,n,a]=z(e,"lab"),r=ml(n*n+a*a);let l=(vl(a,n)*al+360)%360;return kl(r*1e4)===0&&(l=Number.NaN),[t,r,l]},vn=(...e)=>{const[t,n,a,...r]=z(e,"rgb"),[l,o,s]=pn(t,n,a),[i,c,u]=ka(l,o,s);return[i,c,u,...r.length>0&&r[0]<1?[r[0]]:[]]};w.prototype.lch=function(){return vn(this._rgb)};w.prototype.hcl=function(){return ba(vn(this._rgb))};const yl=(...e)=>new w(...e,"lch"),Cl=(...e)=>new w(...e,"hcl");Object.assign(G,{lch:yl,hcl:Cl});N.format.lch=mn;N.format.hcl=pl;["lch","hcl"].forEach(e=>N.autodetect.push({p:2,test:(...t)=>{if(t=z(t,e),H(t)==="array"&&t.length===3)return e}}));w.prototype.saturate=function(e=1){const t=this,n=t.lch();return n[1]+=ze.Kn*e,n[1]<0&&(n[1]=0),new w(n,"lch").alpha(t.alpha(),!0)};w.prototype.desaturate=function(e=1){return this.saturate(-e)};w.prototype.set=function(e,t,n=!1){const[a,r]=e.split("."),l=this[a]();if(r){const o=a.indexOf(r)-(a.substr(0,2)==="ok"?2:0);if(o>-1){if(H(t)=="string")switch(t.charAt(0)){case"+":l[o]+=+t;break;case"-":l[o]+=+t;break;case"*":l[o]*=+t.substr(1);break;case"/":l[o]/=+t.substr(1);break;default:l[o]=+t}else if(H(t)==="number")l[o]=t;else throw new Error("unsupported value for Color.set");const s=new w(l,a);return n?(this._rgb=s._rgb,this):s}throw new Error(`unknown channel ${r} in mode ${a}`)}else return l};w.prototype.tint=function(e=.5,...t){return dt(this,"white",e,...t)};w.prototype.shade=function(e=.5,...t){return dt(this,"black",e,...t)};const _l=(e,t,n)=>{const a=e._rgb,r=t._rgb;return new w(a[0]+n*(r[0]-a[0]),a[1]+n*(r[1]-a[1]),a[2]+n*(r[2]-a[2]),"rgb")};ge.rgb=_l;const{sqrt:Jt,pow:lt}=Math,wl=(e,t,n)=>{const[a,r,l]=e._rgb,[o,s,i]=t._rgb;return new w(Jt(lt(a,2)*(1-n)+lt(o,2)*n),Jt(lt(r,2)*(1-n)+lt(s,2)*n),Jt(lt(l,2)*(1-n)+lt(i,2)*n),"rgb")};ge.lrgb=wl;const Ml=(e,t,n)=>{const a=e.lab(),r=t.lab();return new w(a[0]+n*(r[0]-a[0]),a[1]+n*(r[1]-a[1]),a[2]+n*(r[2]-a[2]),"lab")};ge.lab=Ml;const bt=(e,t,n,a)=>{let r,l;a==="hsl"?(r=e.hsl(),l=t.hsl()):a==="hsv"?(r=e.hsv(),l=t.hsv()):a==="hcg"?(r=e.hcg(),l=t.hcg()):a==="hsi"?(r=e.hsi(),l=t.hsi()):a==="lch"||a==="hcl"?(a="hcl",r=e.hcl(),l=t.hcl()):a==="oklch"&&(r=e.oklch().reverse(),l=t.oklch().reverse());let o,s,i,c,u,g;(a.substr(0,1)==="h"||a==="oklch")&&([o,i,u]=r,[s,c,g]=l);let b,h,F,m;return!isNaN(o)&&!isNaN(s)?(s>o&&s-o>180?m=s-(o+360):s<o&&o-s>180?m=s+360-o:m=s-o,h=o+n*m):isNaN(o)?isNaN(s)?h=Number.NaN:(h=s,(u==1||u==0)&&a!="hsv"&&(b=c)):(h=o,(g==1||g==0)&&a!="hsv"&&(b=i)),b===void 0&&(b=i+n*(c-i)),F=u+n*(g-u),a==="oklch"?new w([F,b,h],a):new w([h,b,F],a)},ya=(e,t,n)=>bt(e,t,n,"lch");ge.lch=ya;ge.hcl=ya;const Al=e=>{if(H(e)=="number"&&e>=0&&e<=16777215){const t=e>>16,n=e>>8&255,a=e&255;return[t,n,a,1]}throw new Error("unknown num color: "+e)},Bl=(...e)=>{const[t,n,a]=z(e,"rgb");return(t<<16)+(n<<8)+a};w.prototype.num=function(){return Bl(this._rgb)};const El=(...e)=>new w(...e,"num");Object.assign(G,{num:El});N.format.num=Al;N.autodetect.push({p:5,test:(...e)=>{if(e.length===1&&H(e[0])==="number"&&e[0]>=0&&e[0]<=16777215)return"num"}});const xl=(e,t,n)=>{const a=e.num(),r=t.num();return new w(a+n*(r-a),"num")};ge.num=xl;const{floor:Dl}=Math,Sl=(...e)=>{e=z(e,"hcg");let[t,n,a]=e,r,l,o;a=a*255;const s=n*255;if(n===0)r=l=o=a;else{t===360&&(t=0),t>360&&(t-=360),t<0&&(t+=360),t/=60;const i=Dl(t),c=t-i,u=a*(1-n),g=u+s*(1-c),b=u+s*c,h=u+s;switch(i){case 0:[r,l,o]=[h,b,u];break;case 1:[r,l,o]=[g,h,u];break;case 2:[r,l,o]=[u,h,b];break;case 3:[r,l,o]=[u,g,h];break;case 4:[r,l,o]=[b,u,h];break;case 5:[r,l,o]=[h,u,g];break}}return[r,l,o,e.length>3?e[3]:1]},Tl=(...e)=>{const[t,n,a]=z(e,"rgb"),r=da(t,n,a),l=ha(t,n,a),o=l-r,s=o*100/255,i=r/(255-o)*100;let c;return o===0?c=Number.NaN:(t===l&&(c=(n-a)/o),n===l&&(c=2+(a-t)/o),a===l&&(c=4+(t-n)/o),c*=60,c<0&&(c+=360)),[c,s,i]};w.prototype.hcg=function(){return Tl(this._rgb)};const Rl=(...e)=>new w(...e,"hcg");G.hcg=Rl;N.format.hcg=Sl;N.autodetect.push({p:1,test:(...e)=>{if(e=z(e,"hcg"),H(e)==="array"&&e.length===3)return"hcg"}});const Ll=(e,t,n)=>bt(e,t,n,"hcg");ge.hcg=Ll;const{cos:ot}=Math,Pl=(...e)=>{e=z(e,"hsi");let[t,n,a]=e,r,l,o;return isNaN(t)&&(t=0),isNaN(n)&&(n=0),t>360&&(t-=360),t<0&&(t+=360),t/=360,t<1/3?(o=(1-n)/3,r=(1+n*ot(Ie*t)/ot(Zt-Ie*t))/3,l=1-(o+r)):t<2/3?(t-=1/3,r=(1-n)/3,l=(1+n*ot(Ie*t)/ot(Zt-Ie*t))/3,o=1-(r+l)):(t-=2/3,l=(1-n)/3,o=(1+n*ot(Ie*t)/ot(Zt-Ie*t))/3,r=1-(l+o)),r=nt(a*r*3),l=nt(a*l*3),o=nt(a*o*3),[r*255,l*255,o*255,e.length>3?e[3]:1]},{min:$l,sqrt:Ol,acos:Nl}=Math,zl=(...e)=>{let[t,n,a]=z(e,"rgb");t/=255,n/=255,a/=255;let r;const l=$l(t,n,a),o=(t+n+a)/3,s=o>0?1-l/o:0;return s===0?r=NaN:(r=(t-n+(t-a))/2,r/=Ol((t-n)*(t-n)+(t-a)*(n-a)),r=Nl(r),a>n&&(r=Ie-r),r/=Ie),[r*360,s,o]};w.prototype.hsi=function(){return zl(this._rgb)};const Gl=(...e)=>new w(...e,"hsi");G.hsi=Gl;N.format.hsi=Pl;N.autodetect.push({p:2,test:(...e)=>{if(e=z(e,"hsi"),H(e)==="array"&&e.length===3)return"hsi"}});const Yl=(e,t,n)=>bt(e,t,n,"hsi");ge.hsi=Yl;const fn=(...e)=>{e=z(e,"hsl");const[t,n,a]=e;let r,l,o;if(n===0)r=l=o=a*255;else{const s=[0,0,0],i=[0,0,0],c=a<.5?a*(1+n):a+n-a*n,u=2*a-c,g=t/360;s[0]=g+1/3,s[1]=g,s[2]=g-1/3;for(let b=0;b<3;b++)s[b]<0&&(s[b]+=1),s[b]>1&&(s[b]-=1),6*s[b]<1?i[b]=u+(c-u)*6*s[b]:2*s[b]<1?i[b]=c:3*s[b]<2?i[b]=u+(c-u)*(2/3-s[b])*6:i[b]=u;[r,l,o]=[i[0]*255,i[1]*255,i[2]*255]}return e.length>3?[r,l,o,e[3]]:[r,l,o,1]},Ca=(...e)=>{e=z(e,"rgba");let[t,n,a]=e;t/=255,n/=255,a/=255;const r=da(t,n,a),l=ha(t,n,a),o=(l+r)/2;let s,i;return l===r?(s=0,i=Number.NaN):s=o<.5?(l-r)/(l+r):(l-r)/(2-l-r),t==l?i=(n-a)/(l-r):n==l?i=2+(a-t)/(l-r):a==l&&(i=4+(t-n)/(l-r)),i*=60,i<0&&(i+=360),e.length>3&&e[3]!==void 0?[i,s,o,e[3]]:[i,s,o]};w.prototype.hsl=function(){return Ca(this._rgb)};const Il=(...e)=>new w(...e,"hsl");G.hsl=Il;N.format.hsl=fn;N.autodetect.push({p:2,test:(...e)=>{if(e=z(e,"hsl"),H(e)==="array"&&e.length===3)return"hsl"}});const ql=(e,t,n)=>bt(e,t,n,"hsl");ge.hsl=ql;const{floor:Xl}=Math,Hl=(...e)=>{e=z(e,"hsv");let[t,n,a]=e,r,l,o;if(a*=255,n===0)r=l=o=a;else{t===360&&(t=0),t>360&&(t-=360),t<0&&(t+=360),t/=60;const s=Xl(t),i=t-s,c=a*(1-n),u=a*(1-n*i),g=a*(1-n*(1-i));switch(s){case 0:[r,l,o]=[a,g,c];break;case 1:[r,l,o]=[u,a,c];break;case 2:[r,l,o]=[c,a,g];break;case 3:[r,l,o]=[c,u,a];break;case 4:[r,l,o]=[g,c,a];break;case 5:[r,l,o]=[a,c,u];break}}return[r,l,o,e.length>3?e[3]:1]},{min:jl,max:Ul}=Math,Zl=(...e)=>{e=z(e,"rgb");let[t,n,a]=e;const r=jl(t,n,a),l=Ul(t,n,a),o=l-r;let s,i,c;return c=l/255,l===0?(s=Number.NaN,i=0):(i=o/l,t===l&&(s=(n-a)/o),n===l&&(s=2+(a-t)/o),a===l&&(s=4+(t-n)/o),s*=60,s<0&&(s+=360)),[s,i,c]};w.prototype.hsv=function(){return Zl(this._rgb)};const Vl=(...e)=>new w(...e,"hsv");G.hsv=Vl;N.format.hsv=Hl;N.autodetect.push({p:2,test:(...e)=>{if(e=z(e,"hsv"),H(e)==="array"&&e.length===3)return"hsv"}});const Wl=(e,t,n)=>bt(e,t,n,"hsv");ge.hsv=Wl;function Tt(e,t){let n=e.length;Array.isArray(e[0])||(e=[e]),Array.isArray(t[0])||(t=t.map(o=>[o]));let a=t[0].length,r=t[0].map((o,s)=>t.map(i=>i[s])),l=e.map(o=>r.map(s=>Array.isArray(o)?o.reduce((i,c,u)=>i+c*(s[u]||0),0):s.reduce((i,c)=>i+c*o,0)));return n===1&&(l=l[0]),a===1?l.map(o=>o[0]):l}const kn=(...e)=>{e=z(e,"lab");const[t,n,a,...r]=e,[l,o,s]=Kl([t,n,a]),[i,c,u]=pa(l,o,s);return[i,c,u,...r.length>0&&r[0]<1?[r[0]]:[]]};function Kl(e){var t=[[1.2268798758459243,-.5578149944602171,.2813910456659647],[-.0405757452148008,1.112286803280317,-.0717110580655164],[-.0763729366746601,-.4214933324022432,1.5869240198367816]],n=[[1,.3963377773761749,.2158037573099136],[1,-.1055613458156586,-.0638541728258133],[1,-.0894841775298119,-1.2914855480194092]],a=Tt(n,e);return Tt(t,a.map(r=>r**3))}const yn=(...e)=>{const[t,n,a,...r]=z(e,"rgb"),l=ma(t,n,a);return[...Jl(l),...r.length>0&&r[0]<1?[r[0]]:[]]};function Jl(e){const t=[[.819022437996703,.3619062600528904,-.1288737815209879],[.0329836539323885,.9292868615863434,.0361446663506424],[.0481771893596242,.2642395317527308,.6335478284694309]],n=[[.210454268309314,.7936177747023054,-.0040720430116193],[1.9779985324311684,-2.42859224204858,.450593709617411],[.0259040424655478,.7827717124575296,-.8086757549230774]],a=Tt(t,e);return Tt(n,a.map(r=>Math.cbrt(r)))}w.prototype.oklab=function(){return yn(this._rgb)};const Ql=(...e)=>new w(...e,"oklab");Object.assign(G,{oklab:Ql});N.format.oklab=kn;N.autodetect.push({p:2,test:(...e)=>{if(e=z(e,"oklab"),H(e)==="array"&&e.length===3)return"oklab"}});const eo=(e,t,n)=>{const a=e.oklab(),r=t.oklab();return new w(a[0]+n*(r[0]-a[0]),a[1]+n*(r[1]-a[1]),a[2]+n*(r[2]-a[2]),"oklab")};ge.oklab=eo;const to=(e,t,n)=>bt(e,t,n,"oklch");ge.oklch=to;const{pow:Qt,sqrt:en,PI:tn,cos:Rn,sin:Ln,atan2:no}=Math,ao=(e,t="lrgb",n=null)=>{const a=e.length;n||(n=Array.from(new Array(a)).map(()=>1));const r=a/n.reduce(function(g,b){return g+b});if(n.forEach((g,b)=>{n[b]*=r}),e=e.map(g=>new w(g)),t==="lrgb")return ro(e,n);const l=e.shift(),o=l.get(t),s=[];let i=0,c=0;for(let g=0;g<o.length;g++)if(o[g]=(o[g]||0)*n[0],s.push(isNaN(o[g])?0:n[0]),t.charAt(g)==="h"&&!isNaN(o[g])){const b=o[g]/180*tn;i+=Rn(b)*n[0],c+=Ln(b)*n[0]}let u=l.alpha()*n[0];e.forEach((g,b)=>{const h=g.get(t);u+=g.alpha()*n[b+1];for(let F=0;F<o.length;F++)if(!isNaN(h[F]))if(s[F]+=n[b+1],t.charAt(F)==="h"){const m=h[F]/180*tn;i+=Rn(m)*n[b+1],c+=Ln(m)*n[b+1]}else o[F]+=h[F]*n[b+1]});for(let g=0;g<o.length;g++)if(t.charAt(g)==="h"){let b=no(c/s[g],i/s[g])/tn*180;for(;b<0;)b+=360;for(;b>=360;)b-=360;o[g]=b}else o[g]=o[g]/s[g];return u/=a,new w(o,t).alpha(u>.99999?1:u,!0)},ro=(e,t)=>{const n=e.length,a=[0,0,0,0];for(let r=0;r<e.length;r++){const l=e[r],o=t[r]/n,s=l._rgb;a[0]+=Qt(s[0],2)*o,a[1]+=Qt(s[1],2)*o,a[2]+=Qt(s[2],2)*o,a[3]+=s[3]*o}return a[0]=en(a[0]),a[1]=en(a[1]),a[2]=en(a[2]),a[3]>.9999999&&(a[3]=1),new w(gn(a))},{pow:lo}=Math;function Rt(e){let t="rgb",n=G("#ccc"),a=0,r=[0,1],l=[],o=[0,0],s=!1,i=[],c=!1,u=0,g=1,b=!1,h={},F=!0,m=1;const p=function(d){if(d=d||["#fff","#000"],d&&H(d)==="string"&&G.brewer&&G.brewer[d.toLowerCase()]&&(d=G.brewer[d.toLowerCase()]),H(d)==="array"){d.length===1&&(d=[d[0],d[0]]),d=d.slice(0);for(let C=0;C<d.length;C++)d[C]=G(d[C]);l.length=0;for(let C=0;C<d.length;C++)l.push(C/(d.length-1))}return R(),i=d},k=function(d){if(s!=null){const C=s.length-1;let E=0;for(;E<C&&d>=s[E];)E++;return E-1}return 0};let x=d=>d,L=d=>d;const M=function(d,C){let E,_;if(C==null&&(C=!1),isNaN(d)||d===null)return n;C?_=d:s&&s.length>2?_=k(d)/(s.length-2):g!==u?_=(d-u)/(g-u):_=1,_=L(_),C||(_=x(_)),m!==1&&(_=lo(_,m)),_=o[0]+_*(1-o[0]-o[1]),_=nt(_,0,1);const T=Math.floor(_*1e4);if(F&&h[T])E=h[T];else{if(H(i)==="array")for(let D=0;D<l.length;D++){const O=l[D];if(_<=O){E=i[D];break}if(_>=O&&D===l.length-1){E=i[D];break}if(_>O&&_<l[D+1]){_=(_-O)/(l[D+1]-O),E=G.interpolate(i[D],i[D+1],_,t);break}}else H(i)==="function"&&(E=i(_));F&&(h[T]=E)}return E};var R=()=>h={};p(e);const v=function(d){const C=G(M(d));return c&&C[c]?C[c]():C};return v.classes=function(d){if(d!=null){if(H(d)==="array")s=d,r=[d[0],d[d.length-1]];else{const C=G.analyze(r);d===0?s=[C.min,C.max]:s=G.limits(C,"e",d)}return v}return s},v.domain=function(d){if(!arguments.length)return r;u=d[0],g=d[d.length-1],l=[];const C=i.length;if(d.length===C&&u!==g)for(let E of Array.from(d))l.push((E-u)/(g-u));else{for(let E=0;E<C;E++)l.push(E/(C-1));if(d.length>2){const E=d.map((T,D)=>D/(d.length-1)),_=d.map(T=>(T-u)/(g-u));_.every((T,D)=>E[D]===T)||(L=T=>{if(T<=0||T>=1)return T;let D=0;for(;T>=_[D+1];)D++;const O=(T-_[D])/(_[D+1]-_[D]);return E[D]+O*(E[D+1]-E[D])})}}return r=[u,g],v},v.mode=function(d){return arguments.length?(t=d,R(),v):t},v.range=function(d,C){return p(d),v},v.out=function(d){return c=d,v},v.spread=function(d){return arguments.length?(a=d,v):a},v.correctLightness=function(d){return d==null&&(d=!0),b=d,R(),b?x=function(C){const E=M(0,!0).lab()[0],_=M(1,!0).lab()[0],T=E>_;let D=M(C,!0).lab()[0];const O=E+(_-E)*C;let V=D-O,P=0,S=1,q=20;for(;Math.abs(V)>.01&&q-- >0;)(function(){return T&&(V*=-1),V<0?(P=C,C+=(S-C)*.5):(S=C,C+=(P-C)*.5),D=M(C,!0).lab()[0],V=D-O})();return C}:x=C=>C,v},v.padding=function(d){return d!=null?(H(d)==="number"&&(d=[d,d]),o=d,v):o},v.colors=function(d,C){arguments.length<2&&(C="hex");let E=[];if(arguments.length===0)E=i.slice(0);else if(d===1)E=[v(.5)];else if(d>1){const _=r[0],T=r[1]-_;E=oo(0,d).map(D=>v(_+D/(d-1)*T))}else{e=[];let _=[];if(s&&s.length>2)for(let T=1,D=s.length,O=1<=D;O?T<D:T>D;O?T++:T--)_.push((s[T-1]+s[T])*.5);else _=r;E=_.map(T=>v(T))}return G[C]&&(E=E.map(_=>_[C]())),E},v.cache=function(d){return d!=null?(F=d,v):F},v.gamma=function(d){return d!=null?(m=d,v):m},v.nodata=function(d){return d!=null?(n=G(d),v):n},v}function oo(e,t,n){let a=[],r=e<t,l=t;for(let o=e;r?o<l:o>l;r?o++:o--)a.push(o);return a}const so=function(e){let t=[1,1];for(let n=1;n<e;n++){let a=[1];for(let r=1;r<=t.length;r++)a[r]=(t[r]||0)+t[r-1];t=a}return t},io=function(e){let t,n,a,r;if(e=e.map(l=>new w(l)),e.length===2)[n,a]=e.map(l=>l.lab()),t=function(l){const o=[0,1,2].map(s=>n[s]+l*(a[s]-n[s]));return new w(o,"lab")};else if(e.length===3)[n,a,r]=e.map(l=>l.lab()),t=function(l){const o=[0,1,2].map(s=>(1-l)*(1-l)*n[s]+2*(1-l)*l*a[s]+l*l*r[s]);return new w(o,"lab")};else if(e.length===4){let l;[n,a,r,l]=e.map(o=>o.lab()),t=function(o){const s=[0,1,2].map(i=>(1-o)*(1-o)*(1-o)*n[i]+3*(1-o)*(1-o)*o*a[i]+3*(1-o)*o*o*r[i]+o*o*o*l[i]);return new w(s,"lab")}}else if(e.length>=5){let l,o,s;l=e.map(i=>i.lab()),s=e.length-1,o=so(s),t=function(i){const c=1-i,u=[0,1,2].map(g=>l.reduce((b,h,F)=>b+o[F]*c**(s-F)*i**F*h[g],0));return new w(u,"lab")}}else throw new RangeError("No point in running bezier with only one color.");return t},co=e=>{const t=io(e);return t.scale=()=>Rt(t),t},{round:_a}=Math;w.prototype.rgb=function(e=!0){return e===!1?this._rgb.slice(0,3):this._rgb.slice(0,3).map(_a)};w.prototype.rgba=function(e=!0){return this._rgb.slice(0,4).map((t,n)=>n<3?e===!1?t:_a(t):t)};const fo=(...e)=>new w(...e,"rgb");Object.assign(G,{rgb:fo});N.format.rgb=(...e)=>{const t=z(e,"rgba");return t[3]===void 0&&(t[3]=1),t};N.autodetect.push({p:3,test:(...e)=>{if(e=z(e,"rgba"),H(e)==="array"&&(e.length===3||e.length===4&&H(e[3])=="number"&&e[3]>=0&&e[3]<=1))return"rgb"}});const Re=(e,t,n)=>{if(!Re[n])throw new Error("unknown blend mode "+n);return Re[n](e,t)},Je=e=>(t,n)=>{const a=G(n).rgb(),r=G(t).rgb();return G.rgb(e(a,r))},Qe=e=>(t,n)=>{const a=[];return a[0]=e(t[0],n[0]),a[1]=e(t[1],n[1]),a[2]=e(t[2],n[2]),a},uo=e=>e,ho=(e,t)=>e*t/255,bo=(e,t)=>e>t?t:e,go=(e,t)=>e>t?e:t,Fo=(e,t)=>255*(1-(1-e/255)*(1-t/255)),po=(e,t)=>t<128?2*e*t/255:255*(1-2*(1-e/255)*(1-t/255)),mo=(e,t)=>255*(1-(1-t/255)/(e/255)),vo=(e,t)=>e===255?255:(e=255*(t/255)/(1-e/255),e>255?255:e);Re.normal=Je(Qe(uo));Re.multiply=Je(Qe(ho));Re.screen=Je(Qe(Fo));Re.overlay=Je(Qe(po));Re.darken=Je(Qe(bo));Re.lighten=Je(Qe(go));Re.dodge=Je(Qe(vo));Re.burn=Je(Qe(mo));const{pow:ko,sin:yo,cos:Co}=Math;function _o(e=300,t=-1.5,n=1,a=1,r=[0,1]){let l=0,o;H(r)==="array"?o=r[1]-r[0]:(o=0,r=[r,r]);const s=function(i){const c=Ie*((e+120)/360+t*i),u=ko(r[0]+o*i,a),b=(l!==0?n[0]+i*l:n)*u*(1-u)/2,h=Co(c),F=yo(c),m=u+b*(-.14861*h+1.78277*F),p=u+b*(-.29227*h-.90649*F),k=u+b*(1.97294*h);return G(gn([m*255,p*255,k*255,1]))};return s.start=function(i){return i==null?e:(e=i,s)},s.rotations=function(i){return i==null?t:(t=i,s)},s.gamma=function(i){return i==null?a:(a=i,s)},s.hue=function(i){return i==null?n:(n=i,H(n)==="array"?(l=n[1]-n[0],l===0&&(n=n[1])):l=0,s)},s.lightness=function(i){return i==null?r:(H(i)==="array"?(r=i,o=i[1]-i[0]):(r=[i,i],o=0),s)},s.scale=()=>G.scale(s),s.hue(n),s}const wo="0123456789abcdef",{floor:Mo,random:Ao}=Math,Bo=()=>{let e="#";for(let t=0;t<6;t++)e+=wo.charAt(Mo(Ao()*16));return new w(e,"hex")},{log:Pn,pow:Eo,floor:xo,abs:Do}=Math;function wa(e,t=null){const n={min:Number.MAX_VALUE,max:Number.MAX_VALUE*-1,sum:0,values:[],count:0};return H(e)==="object"&&(e=Object.values(e)),e.forEach(a=>{t&&H(a)==="object"&&(a=a[t]),a!=null&&!isNaN(a)&&(n.values.push(a),n.sum+=a,a<n.min&&(n.min=a),a>n.max&&(n.max=a),n.count+=1)}),n.domain=[n.min,n.max],n.limits=(a,r)=>Ma(n,a,r),n}function Ma(e,t="equal",n=7){H(e)=="array"&&(e=wa(e));const{min:a,max:r}=e,l=e.values.sort((s,i)=>s-i);if(n===1)return[a,r];const o=[];if(t.substr(0,1)==="c"&&(o.push(a),o.push(r)),t.substr(0,1)==="e"){o.push(a);for(let s=1;s<n;s++)o.push(a+s/n*(r-a));o.push(r)}else if(t.substr(0,1)==="l"){if(a<=0)throw new Error("Logarithmic scales are only possible for values > 0");const s=Math.LOG10E*Pn(a),i=Math.LOG10E*Pn(r);o.push(a);for(let c=1;c<n;c++)o.push(Eo(10,s+c/n*(i-s)));o.push(r)}else if(t.substr(0,1)==="q"){o.push(a);for(let s=1;s<n;s++){const i=(l.length-1)*s/n,c=xo(i);if(c===i)o.push(l[c]);else{const u=i-c;o.push(l[c]*(1-u)+l[c+1]*u)}}o.push(r)}else if(t.substr(0,1)==="k"){let s;const i=l.length,c=new Array(i),u=new Array(n);let g=!0,b=0,h=null;h=[],h.push(a);for(let p=1;p<n;p++)h.push(a+p/n*(r-a));for(h.push(r);g;){for(let k=0;k<n;k++)u[k]=0;for(let k=0;k<i;k++){const x=l[k];let L=Number.MAX_VALUE,M;for(let R=0;R<n;R++){const v=Do(h[R]-x);v<L&&(L=v,M=R),u[M]++,c[k]=M}}const p=new Array(n);for(let k=0;k<n;k++)p[k]=null;for(let k=0;k<i;k++)s=c[k],p[s]===null?p[s]=l[k]:p[s]+=l[k];for(let k=0;k<n;k++)p[k]*=1/u[k];g=!1;for(let k=0;k<n;k++)if(p[k]!==h[k]){g=!0;break}h=p,b++,b>200&&(g=!1)}const F={};for(let p=0;p<n;p++)F[p]=[];for(let p=0;p<i;p++)s=c[p],F[s].push(l[p]);let m=[];for(let p=0;p<n;p++)m.push(F[p][0]),m.push(F[p][F[p].length-1]);m=m.sort((p,k)=>p-k),o.push(m[0]);for(let p=1;p<m.length;p+=2){const k=m[p];!isNaN(k)&&o.indexOf(k)===-1&&o.push(k)}}return o}const So=(e,t)=>{e=new w(e),t=new w(t);const n=e.luminance(),a=t.luminance();return n>a?(n+.05)/(a+.05):(a+.05)/(n+.05)};/**
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
 */const $n=.027,To=5e-4,Ro=.1,On=1.14,Bt=.022,Nn=1.414,Lo=(e,t)=>{e=new w(e),t=new w(t),e.alpha()<1&&(e=dt(t,e,e.alpha(),"rgb"));const n=zn(...e.rgb()),a=zn(...t.rgb()),r=n>=Bt?n:n+Math.pow(Bt-n,Nn),l=a>=Bt?a:a+Math.pow(Bt-a,Nn),o=Math.pow(l,.56)-Math.pow(r,.57),s=Math.pow(l,.65)-Math.pow(r,.62),i=Math.abs(l-r)<To?0:r<l?o*On:s*On;return(Math.abs(i)<Ro?0:i>0?i-$n:i+$n)*100};function zn(e,t,n){return .2126729*Math.pow(e/255,2.4)+.7151522*Math.pow(t/255,2.4)+.072175*Math.pow(n/255,2.4)}const{sqrt:Ye,pow:ie,min:Po,max:$o,atan2:Gn,abs:Yn,cos:Et,sin:In,exp:Oo,PI:qn}=Math;function No(e,t,n=1,a=1,r=1){var l=function(oe){return 360*oe/(2*qn)},o=function(oe){return 2*qn*oe/360};e=new w(e),t=new w(t);const[s,i,c]=Array.from(e.lab()),[u,g,b]=Array.from(t.lab()),h=(s+u)/2,F=Ye(ie(i,2)+ie(c,2)),m=Ye(ie(g,2)+ie(b,2)),p=(F+m)/2,k=.5*(1-Ye(ie(p,7)/(ie(p,7)+ie(25,7)))),x=i*(1+k),L=g*(1+k),M=Ye(ie(x,2)+ie(c,2)),R=Ye(ie(L,2)+ie(b,2)),v=(M+R)/2,d=l(Gn(c,x)),C=l(Gn(b,L)),E=d>=0?d:d+360,_=C>=0?C:C+360,T=Yn(E-_)>180?(E+_+360)/2:(E+_)/2,D=1-.17*Et(o(T-30))+.24*Et(o(2*T))+.32*Et(o(3*T+6))-.2*Et(o(4*T-63));let O=_-E;O=Yn(O)<=180?O:_<=E?O+360:O-360,O=2*Ye(M*R)*In(o(O)/2);const V=u-s,P=R-M,S=1+.015*ie(h-50,2)/Ye(20+ie(h-50,2)),q=1+.045*v,I=1+.015*v*D,ne=30*Oo(-ie((T-275)/25,2)),A=-(2*Ye(ie(v,7)/(ie(v,7)+ie(25,7))))*In(2*o(ne)),K=Ye(ie(V/(n*S),2)+ie(P/(a*q),2)+ie(O/(r*I),2)+A*(P/(a*q))*(O/(r*I)));return $o(0,Po(100,K))}function zo(e,t,n="lab"){e=new w(e),t=new w(t);const a=e.get(n),r=t.get(n);let l=0;for(let o in a){const s=(a[o]||0)-(r[o]||0);l+=s*s}return Math.sqrt(l)}const Go=(...e)=>{try{return new w(...e),!0}catch{return!1}},Yo={cool(){return Rt([G.hsl(180,1,.9),G.hsl(250,.7,.4)])},hot(){return Rt(["#000","#f00","#ff0","#fff"]).mode("rgb")}},un={OrRd:["#fff7ec","#fee8c8","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#b30000","#7f0000"],PuBu:["#fff7fb","#ece7f2","#d0d1e6","#a6bddb","#74a9cf","#3690c0","#0570b0","#045a8d","#023858"],BuPu:["#f7fcfd","#e0ecf4","#bfd3e6","#9ebcda","#8c96c6","#8c6bb1","#88419d","#810f7c","#4d004b"],Oranges:["#fff5eb","#fee6ce","#fdd0a2","#fdae6b","#fd8d3c","#f16913","#d94801","#a63603","#7f2704"],BuGn:["#f7fcfd","#e5f5f9","#ccece6","#99d8c9","#66c2a4","#41ae76","#238b45","#006d2c","#00441b"],YlOrBr:["#ffffe5","#fff7bc","#fee391","#fec44f","#fe9929","#ec7014","#cc4c02","#993404","#662506"],YlGn:["#ffffe5","#f7fcb9","#d9f0a3","#addd8e","#78c679","#41ab5d","#238443","#006837","#004529"],Reds:["#fff5f0","#fee0d2","#fcbba1","#fc9272","#fb6a4a","#ef3b2c","#cb181d","#a50f15","#67000d"],RdPu:["#fff7f3","#fde0dd","#fcc5c0","#fa9fb5","#f768a1","#dd3497","#ae017e","#7a0177","#49006a"],Greens:["#f7fcf5","#e5f5e0","#c7e9c0","#a1d99b","#74c476","#41ab5d","#238b45","#006d2c","#00441b"],YlGnBu:["#ffffd9","#edf8b1","#c7e9b4","#7fcdbb","#41b6c4","#1d91c0","#225ea8","#253494","#081d58"],Purples:["#fcfbfd","#efedf5","#dadaeb","#bcbddc","#9e9ac8","#807dba","#6a51a3","#54278f","#3f007d"],GnBu:["#f7fcf0","#e0f3db","#ccebc5","#a8ddb5","#7bccc4","#4eb3d3","#2b8cbe","#0868ac","#084081"],Greys:["#ffffff","#f0f0f0","#d9d9d9","#bdbdbd","#969696","#737373","#525252","#252525","#000000"],YlOrRd:["#ffffcc","#ffeda0","#fed976","#feb24c","#fd8d3c","#fc4e2a","#e31a1c","#bd0026","#800026"],PuRd:["#f7f4f9","#e7e1ef","#d4b9da","#c994c7","#df65b0","#e7298a","#ce1256","#980043","#67001f"],Blues:["#f7fbff","#deebf7","#c6dbef","#9ecae1","#6baed6","#4292c6","#2171b5","#08519c","#08306b"],PuBuGn:["#fff7fb","#ece2f0","#d0d1e6","#a6bddb","#67a9cf","#3690c0","#02818a","#016c59","#014636"],Viridis:["#440154","#482777","#3f4a8a","#31678e","#26838f","#1f9d8a","#6cce5a","#b6de2b","#fee825"],Spectral:["#9e0142","#d53e4f","#f46d43","#fdae61","#fee08b","#ffffbf","#e6f598","#abdda4","#66c2a5","#3288bd","#5e4fa2"],RdYlGn:["#a50026","#d73027","#f46d43","#fdae61","#fee08b","#ffffbf","#d9ef8b","#a6d96a","#66bd63","#1a9850","#006837"],RdBu:["#67001f","#b2182b","#d6604d","#f4a582","#fddbc7","#f7f7f7","#d1e5f0","#92c5de","#4393c3","#2166ac","#053061"],PiYG:["#8e0152","#c51b7d","#de77ae","#f1b6da","#fde0ef","#f7f7f7","#e6f5d0","#b8e186","#7fbc41","#4d9221","#276419"],PRGn:["#40004b","#762a83","#9970ab","#c2a5cf","#e7d4e8","#f7f7f7","#d9f0d3","#a6dba0","#5aae61","#1b7837","#00441b"],RdYlBu:["#a50026","#d73027","#f46d43","#fdae61","#fee090","#ffffbf","#e0f3f8","#abd9e9","#74add1","#4575b4","#313695"],BrBG:["#543005","#8c510a","#bf812d","#dfc27d","#f6e8c3","#f5f5f5","#c7eae5","#80cdc1","#35978f","#01665e","#003c30"],RdGy:["#67001f","#b2182b","#d6604d","#f4a582","#fddbc7","#ffffff","#e0e0e0","#bababa","#878787","#4d4d4d","#1a1a1a"],PuOr:["#7f3b08","#b35806","#e08214","#fdb863","#fee0b6","#f7f7f7","#d8daeb","#b2abd2","#8073ac","#542788","#2d004b"],Set2:["#66c2a5","#fc8d62","#8da0cb","#e78ac3","#a6d854","#ffd92f","#e5c494","#b3b3b3"],Accent:["#7fc97f","#beaed4","#fdc086","#ffff99","#386cb0","#f0027f","#bf5b17","#666666"],Set1:["#e41a1c","#377eb8","#4daf4a","#984ea3","#ff7f00","#ffff33","#a65628","#f781bf","#999999"],Set3:["#8dd3c7","#ffffb3","#bebada","#fb8072","#80b1d3","#fdb462","#b3de69","#fccde5","#d9d9d9","#bc80bd","#ccebc5","#ffed6f"],Dark2:["#1b9e77","#d95f02","#7570b3","#e7298a","#66a61e","#e6ab02","#a6761d","#666666"],Paired:["#a6cee3","#1f78b4","#b2df8a","#33a02c","#fb9a99","#e31a1c","#fdbf6f","#ff7f00","#cab2d6","#6a3d9a","#ffff99","#b15928"],Pastel2:["#b3e2cd","#fdcdac","#cbd5e8","#f4cae4","#e6f5c9","#fff2ae","#f1e2cc","#cccccc"],Pastel1:["#fbb4ae","#b3cde3","#ccebc5","#decbe4","#fed9a6","#ffffcc","#e5d8bd","#fddaec","#f2f2f2"]},Aa=Object.keys(un),Xn=new Map(Aa.map(e=>[e.toLowerCase(),e])),Io=typeof Proxy=="function"?new Proxy(un,{get(e,t){const n=t.toLowerCase();if(Xn.has(n))return e[Xn.get(n)]},getOwnPropertyNames(){return Object.getOwnPropertyNames(Aa)}}):un,qo=(...e)=>{e=z(e,"cmyk");const[t,n,a,r]=e,l=e.length>4?e[4]:1;return r===1?[0,0,0,l]:[t>=1?0:255*(1-t)*(1-r),n>=1?0:255*(1-n)*(1-r),a>=1?0:255*(1-a)*(1-r),l]},{max:Hn}=Math,Xo=(...e)=>{let[t,n,a]=z(e,"rgb");t=t/255,n=n/255,a=a/255;const r=1-Hn(t,Hn(n,a)),l=r<1?1/(1-r):0,o=(1-t-r)*l,s=(1-n-r)*l,i=(1-a-r)*l;return[o,s,i,r]};w.prototype.cmyk=function(){return Xo(this._rgb)};const Ho=(...e)=>new w(...e,"cmyk");Object.assign(G,{cmyk:Ho});N.format.cmyk=qo;N.autodetect.push({p:2,test:(...e)=>{if(e=z(e,"cmyk"),H(e)==="array"&&e.length===4)return"cmyk"}});const jo=(...e)=>{const t=z(e,"hsla");let n=ht(e)||"lsa";return t[0]=Ae(t[0]||0)+"deg",t[1]=Ae(t[1]*100)+"%",t[2]=Ae(t[2]*100)+"%",n==="hsla"||t.length>3&&t[3]<1?(t[3]="/ "+(t.length>3?t[3]:1),n="hsla"):t.length=3,`${n.substr(0,3)}(${t.join(" ")})`},Uo=(...e)=>{const t=z(e,"lab");let n=ht(e)||"lab";return t[0]=Ae(t[0])+"%",t[1]=Ae(t[1]),t[2]=Ae(t[2]),n==="laba"||t.length>3&&t[3]<1?t[3]="/ "+(t.length>3?t[3]:1):t.length=3,`lab(${t.join(" ")})`},Zo=(...e)=>{const t=z(e,"lch");let n=ht(e)||"lab";return t[0]=Ae(t[0])+"%",t[1]=Ae(t[1]),t[2]=isNaN(t[2])?"none":Ae(t[2])+"deg",n==="lcha"||t.length>3&&t[3]<1?t[3]="/ "+(t.length>3?t[3]:1):t.length=3,`lch(${t.join(" ")})`},Vo=(...e)=>{const t=z(e,"lab");return t[0]=Ae(t[0]*100)+"%",t[1]=cn(t[1]),t[2]=cn(t[2]),t.length>3&&t[3]<1?t[3]="/ "+(t.length>3?t[3]:1):t.length=3,`oklab(${t.join(" ")})`},Ba=(...e)=>{const[t,n,a,...r]=z(e,"rgb"),[l,o,s]=yn(t,n,a),[i,c,u]=ka(l,o,s);return[i,c,u,...r.length>0&&r[0]<1?[r[0]]:[]]},Wo=(...e)=>{const t=z(e,"lch");return t[0]=Ae(t[0]*100)+"%",t[1]=cn(t[1]),t[2]=isNaN(t[2])?"none":Ae(t[2])+"deg",t.length>3&&t[3]<1?t[3]="/ "+(t.length>3?t[3]:1):t.length=3,`oklch(${t.join(" ")})`},{round:nn}=Math,Ko=(...e)=>{const t=z(e,"rgba");let n=ht(e)||"rgb";if(n.substr(0,3)==="hsl")return jo(Ca(t),n);if(n.substr(0,3)==="lab"){const a=wt();qe("d50");const r=Uo(pn(t),n);return qe(a),r}if(n.substr(0,3)==="lch"){const a=wt();qe("d50");const r=Zo(vn(t),n);return qe(a),r}return n.substr(0,5)==="oklab"?Vo(yn(t)):n.substr(0,5)==="oklch"?Wo(Ba(t)):(t[0]=nn(t[0]),t[1]=nn(t[1]),t[2]=nn(t[2]),(n==="rgba"||t.length>3&&t[3]<1)&&(t[3]="/ "+(t.length>3?t[3]:1),n="rgba"),`${n.substr(0,3)}(${t.slice(0,n==="rgb"?3:4).join(" ")})`)},Ea=(...e)=>{e=z(e,"lch");const[t,n,a,...r]=e,[l,o,s]=va(t,n,a),[i,c,u]=kn(l,o,s);return[i,c,u,...r.length>0&&r[0]<1?[r[0]]:[]]},Xe=/((?:-?\d+)|(?:-?\d+(?:\.\d+)?)%|none)/.source,Se=/((?:-?(?:\d+(?:\.\d*)?|\.\d+)%?)|none)/.source,Lt=/((?:-?(?:\d+(?:\.\d*)?|\.\d+)%)|none)/.source,Be=/\s*/.source,gt=/\s+/.source,Cn=/\s*,\s*/.source,zt=/((?:-?(?:\d+(?:\.\d*)?|\.\d+)(?:deg)?)|none)/.source,Ft=/\s*(?:\/\s*((?:[01]|[01]?\.\d+)|\d+(?:\.\d+)?%))?/.source,xa=new RegExp("^rgba?\\("+Be+[Xe,Xe,Xe].join(gt)+Ft+"\\)$"),Da=new RegExp("^rgb\\("+Be+[Xe,Xe,Xe].join(Cn)+Be+"\\)$"),Sa=new RegExp("^rgba\\("+Be+[Xe,Xe,Xe,Se].join(Cn)+Be+"\\)$"),Ta=new RegExp("^hsla?\\("+Be+[zt,Lt,Lt].join(gt)+Ft+"\\)$"),Ra=new RegExp("^hsl?\\("+Be+[zt,Lt,Lt].join(Cn)+Be+"\\)$"),La=/^hsla\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/,Pa=new RegExp("^lab\\("+Be+[Se,Se,Se].join(gt)+Ft+"\\)$"),$a=new RegExp("^lch\\("+Be+[Se,Se,zt].join(gt)+Ft+"\\)$"),Oa=new RegExp("^oklab\\("+Be+[Se,Se,Se].join(gt)+Ft+"\\)$"),Na=new RegExp("^oklch\\("+Be+[Se,Se,zt].join(gt)+Ft+"\\)$"),{round:za}=Math,st=e=>e.map((t,n)=>n<=2?nt(za(t),0,255):t),ce=(e,t=0,n=100,a=!1)=>(typeof e=="string"&&e.endsWith("%")&&(e=parseFloat(e.substring(0,e.length-1))/100,a?e=t+(e+1)*.5*(n-t):e=t+e*(n-t)),+e),me=(e,t)=>e==="none"?t:e,_n=e=>{if(e=e.toLowerCase().trim(),e==="transparent")return[0,0,0,0];let t;if(N.format.named)try{return N.format.named(e)}catch{}if((t=e.match(xa))||(t=e.match(Da))){let n=t.slice(1,4);for(let r=0;r<3;r++)n[r]=+ce(me(n[r],0),0,255);n=st(n);const a=t[4]!==void 0?+ce(t[4],0,1):1;return n[3]=a,n}if(t=e.match(Sa)){const n=t.slice(1,5);for(let a=0;a<4;a++)n[a]=+ce(n[a],0,255);return n}if((t=e.match(Ta))||(t=e.match(Ra))){const n=t.slice(1,4);n[0]=+me(n[0].replace("deg",""),0),n[1]=+ce(me(n[1],0),0,100)*.01,n[2]=+ce(me(n[2],0),0,100)*.01;const a=st(fn(n)),r=t[4]!==void 0?+ce(t[4],0,1):1;return a[3]=r,a}if(t=e.match(La)){const n=t.slice(1,4);n[1]*=.01,n[2]*=.01;const a=fn(n);for(let r=0;r<3;r++)a[r]=za(a[r]);return a[3]=+t[4],a}if(t=e.match(Pa)){const n=t.slice(1,4);n[0]=ce(me(n[0],0),0,100),n[1]=ce(me(n[1],0),-125,125,!0),n[2]=ce(me(n[2],0),-125,125,!0);const a=wt();qe("d50");const r=st(Fn(n));qe(a);const l=t[4]!==void 0?+ce(t[4],0,1):1;return r[3]=l,r}if(t=e.match($a)){const n=t.slice(1,4);n[0]=ce(n[0],0,100),n[1]=ce(me(n[1],0),0,150,!1),n[2]=+me(n[2].replace("deg",""),0);const a=wt();qe("d50");const r=st(mn(n));qe(a);const l=t[4]!==void 0?+ce(t[4],0,1):1;return r[3]=l,r}if(t=e.match(Oa)){const n=t.slice(1,4);n[0]=ce(me(n[0],0),0,1),n[1]=ce(me(n[1],0),-.4,.4,!0),n[2]=ce(me(n[2],0),-.4,.4,!0);const a=st(kn(n)),r=t[4]!==void 0?+ce(t[4],0,1):1;return a[3]=r,a}if(t=e.match(Na)){const n=t.slice(1,4);n[0]=ce(me(n[0],0),0,1),n[1]=ce(me(n[1],0),0,.4,!1),n[2]=+me(n[2].replace("deg",""),0);const a=st(Ea(n)),r=t[4]!==void 0?+ce(t[4],0,1):1;return a[3]=r,a}};_n.test=e=>xa.test(e)||Ta.test(e)||Pa.test(e)||$a.test(e)||Oa.test(e)||Na.test(e)||Da.test(e)||Sa.test(e)||Ra.test(e)||La.test(e)||e==="transparent";w.prototype.css=function(e){return Ko(this._rgb,e)};const Jo=(...e)=>new w(...e,"css");G.css=Jo;N.format.css=_n;N.autodetect.push({p:5,test:(e,...t)=>{if(!t.length&&H(e)==="string"&&_n.test(e))return"css"}});N.format.gl=(...e)=>{const t=z(e,"rgba");return t[0]*=255,t[1]*=255,t[2]*=255,t};const Qo=(...e)=>new w(...e,"gl");G.gl=Qo;w.prototype.gl=function(){const e=this._rgb;return[e[0]/255,e[1]/255,e[2]/255,e[3]]};w.prototype.hex=function(e){return Fa(this._rgb,e)};const es=(...e)=>new w(...e,"hex");G.hex=es;N.format.hex=ga;N.autodetect.push({p:4,test:(e,...t)=>{if(!t.length&&H(e)==="string"&&[3,4,5,6,7,8,9].indexOf(e.length)>=0)return"hex"}});const{log:xt}=Math,Ga=e=>{const t=e/100;let n,a,r;return t<66?(n=255,a=t<6?0:-155.25485562709179-.44596950469579133*(a=t-2)+104.49216199393888*xt(a),r=t<20?0:-254.76935184120902+.8274096064007395*(r=t-10)+115.67994401066147*xt(r)):(n=351.97690566805693+.114206453784165*(n=t-55)-40.25366309332127*xt(n),a=325.4494125711974+.07943456536662342*(a=t-50)-28.0852963507957*xt(a),r=255),[n,a,r,1]},{round:ts}=Math,ns=(...e)=>{const t=z(e,"rgb"),n=t[0],a=t[2];let r=1e3,l=4e4;const o=.4;let s;for(;l-r>o;){s=(l+r)*.5;const i=Ga(s);i[2]/i[0]>=a/n?l=s:r=s}return ts(s)};w.prototype.temp=w.prototype.kelvin=w.prototype.temperature=function(){return ns(this._rgb)};const an=(...e)=>new w(...e,"temp");Object.assign(G,{temp:an,kelvin:an,temperature:an});N.format.temp=N.format.kelvin=N.format.temperature=Ga;w.prototype.oklch=function(){return Ba(this._rgb)};const as=(...e)=>new w(...e,"oklch");Object.assign(G,{oklch:as});N.format.oklch=Ea;N.autodetect.push({p:2,test:(...e)=>{if(e=z(e,"oklch"),H(e)==="array"&&e.length===3)return"oklch"}});Object.assign(G,{analyze:wa,average:ao,bezier:co,blend:Re,brewer:Io,Color:w,colors:ut,contrast:So,contrastAPCA:Lo,cubehelix:_o,deltaE:No,distance:zo,input:N,interpolate:dt,limits:Ma,mix:dt,random:Bo,scale:Rt,scales:Yo,valid:Go});const jn=Object.assign({"../../data/sets/rebrickable_parts_41809-1-hedwig-pencil-holder.csv":Ur,"../../data/sets/rebrickable_parts_41904-1-animal-picture-holders.csv":Zr,"../../data/sets/rebrickable_parts_41935-1-lots-of-dots.csv":Vr,"../../data/sets/rebrickable_parts_41950-1-lots-of-dots-lettering.csv":Wr,"../../data/sets/rebrickable_parts_41957-1-adhesive-patches-mega-pack.csv":Kr,"../../data/sets/rebrickable_parts_41961-1-designer-toolkit-patterns.csv":Jr});function rs(e){return e.trim().split(`
`).slice(1).map(n=>{const[a,r,l,o]=n.split(",");return{id:Number(a),name:r,rgb:`#${l}`,is_trans:o==="True"}})}function ls(){const e=new Set;for(const t in jn){const a=jn[t].trim().split(`
`);for(const r of a.slice(1)){const l=Number(r.split(",")[1]);isNaN(l)||e.add(l)}}return e}function os(e){const t=G(e).hsl();return{h:isNaN(t[0])?0:t[0],s:t[1]*100,l:t[2]*100}}function ss(e,t=15,n=6){const a={},r=new Set;for(const s of e){if(r.has(s.rgb))continue;r.add(s.rgb);const i=s.s<10?999:Math.floor(s.h/t);a[i]||(a[i]=[]),a[i].push(s)}Object.values(a).forEach(s=>s.sort((i,c)=>i.l-c.l));const l=Object.keys(a).map(Number).sort((s,i)=>s-i).flatMap(s=>a[s]),o=[];for(let s=0;s<l.length;s+=n)o.push(l.slice(s,s+n));return o}const is=rs(Qr),cs=ls(),We=is.filter(e=>cs.has(e.id)&&!e.name.includes("Trans-Clear")),be=ss(We.map(e=>({...e,...os(e.rgb)})));[...We].sort((e,t)=>{const[n,a,r]=G(e.rgb).hcl(),[l,o,s]=G(t.rgb).hcl();return n!==l?n-l:a!==o?a-o:r-s});var fs=de('<div class="zoom-pan-container svelte-b0dtxj" role="application" aria-label="Zoomable and pannable container" tabindex="0"><div class="zoom-pan-content svelte-b0dtxj"><!></div></div>');function us(e,t){Ee(t,!1);const n=Ge();let a=$(t,"zoom",12,1),r=$(t,"panX",12,0),l=$(t,"panY",12,0),o=$(t,"selectMode",8,!1),s=W(!1),i=0,c=0,u=W(!1),g=W(),b=W(),h=!1;dn(()=>{if(f(g)&&f(b)&&!h){const d=f(g).clientWidth,C=f(g).clientHeight;let E=0,_=0;f(b).firstElementChild instanceof HTMLElement?(E=f(b).firstElementChild.offsetWidth,_=f(b).firstElementChild.offsetHeight):(E=f(b).offsetWidth,_=f(b).offsetHeight),r((d-E*a())/2),l((C-_*a())/2),h=!0,n("panChanged",{panX:r(),panY:l()})}});function F(d){d.preventDefault();const C=f(g).getBoundingClientRect(),E=d.clientX-C.left,_=d.clientY-C.top,T=d.deltaY>0?.9:1.1,D=Math.max(.2,Math.min(5,a()*T));if(D!==a()){const O=D/a();r(E-(E-r())*O),l(_-(_-l())*O),a(D),n("zoomChanged",{zoom:a(),panX:r(),panY:l()})}}function m(d){o()||d.button===0&&(B(s,!0),B(u,!1),i=d.clientX,c=d.clientY,window.addEventListener("mousemove",p),window.addEventListener("mouseup",k),d.preventDefault())}function p(d){if(f(s)){const C=d.clientX-i,E=d.clientY-c;(Math.abs(C)>1||Math.abs(E)>1)&&B(u,!0),r(r()+C),l(l()+E),i=d.clientX,c=d.clientY,n("panChanged",{panX:r(),panY:l()})}}function k(){f(s)&&(B(s,!1),window.removeEventListener("mousemove",p),window.removeEventListener("mouseup",k),n("panEnd",{didPan:f(u)}),setTimeout(()=>{B(u,!1)},50))}function x(d){d.key===" "&&d.preventDefault()}function L(d){d.key===" "&&d.preventDefault()}De();var M=fs(),R=X(M),v=X(R);Le(v,t,"default",{get didPan(){return f(u)}}),Y(R),Bn(R,d=>B(b,d),()=>f(b)),Y(M),Bn(M,d=>B(g,d),()=>f(g)),Me(()=>Ke(R,`transform: translate(${r()??""}px, ${l()??""}px) scale(${a()??""}); cursor: ${o()?"crosshair":f(s)?"grabbing":"grab"};`)),J("wheel",M,F),J("mousedown",M,m),J("keydown",M,x),J("keyup",M,L),Z(e,M),xe()}var ds=de('<div class="square svelte-gxsx5p"></div>');function Ya(e,t){let n=$(t,"color",8,"#000");var a=ds();Me(()=>Ke(a,`--color: ${n()??""}`)),Z(e,a)}var hs=de('<div class="circle svelte-r5z0cw"></div>');function Ia(e,t){let n=$(t,"color",8,"#000");var a=hs();Me(()=>Ke(a,`--color: ${n()??""}`)),Z(e,a)}var bs=de('<div class="quarter-container svelte-19hi45o"><svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none" class="svelte-19hi45o"><path d="M 0,0 L 100,0 A 100,100 0 0,1 0,100 Z" stroke="none"></path></svg></div>');function qa(e,t){let n=$(t,"color",8,"#000"),a=$(t,"rotation",8,0);var r=bs(),l=X(r),o=X(l);Y(l),Y(r),Me(()=>{ue(o,"fill",n()),ue(o,"transform",`rotate(${a()*90}, 50, 50)`)}),Z(e,r)}var gs=de('<div class="tile svelte-ia1epz"><div class="square-half svelte-ia1epz"></div> <div class="circle-half svelte-ia1epz"></div></div>');function Xa(e,t){let n=$(t,"color",8,"#000"),a=$(t,"rotation",8,0);var r=gs();Me(()=>Ke(r,`--color: ${n()??""}; transform: rotate(${a()*90}deg);`)),Z(e,r)}var Fs=de('<div role="button" tabindex="0"><!></div>'),ps=de('<div class="selection-overlay svelte-1hhz0mg"></div>'),ms=de('<div class="grid svelte-1hhz0mg"><!> <!></div>');function vs(e,t){Ee(t,!1);const n=Ge();let a=$(t,"grid",12),r=$(t,"width",8),l=$(t,"height",8),o=$(t,"selectedShape",8,"square"),s=$(t,"selectedColor",8),i=$(t,"paintMode",8,!1),c=$(t,"colorPickerMode",8,!1),u=$(t,"selectMode",8,!1),g=$(t,"quarterRotation",8,0),b=$(t,"halfCircleRotation",8,0),h=$(t,"selection",28,()=>({startX:0,startY:0,endX:0,endY:0,active:!1})),F=$(t,"didPan",8,!1),m=W(!1);function p(P){const S=a()[P];if(!S)return k(P);const{shape:q,color:I}=S;if(q===o()&&I===s())return;const ne=[P],fe=new Set;for(;ne.length;){const A=ne.pop();if(A===void 0||fe.has(A))continue;fe.add(A);const K=a()[A];if(!K||K.shape!==q||K.color!==I)continue;a(a()[A]={shape:o(),color:s(),rotation:o()==="quarter"?g():o()==="halfCircle"?b():0},!0);const oe=A%r(),he=Math.floor(A/r());oe>0&&ne.push(A-1),oe<r()-1&&ne.push(A+1),he>0&&ne.push(A-r()),he<l()-1&&ne.push(A+r())}a([...a()]),n("gridChanged",{grid:a()})}function k(P){const S=a()[P];S&&S.shape===o()&&S.color===s()?a(a()[P]=null,!0):o()==="quarter"?a(a()[P]={shape:o(),color:s(),rotation:g()},!0):o()==="halfCircle"?a(a()[P]={shape:o(),color:s(),rotation:b()},!0):a(a()[P]={shape:o(),color:s(),rotation:0},!0),a([...a()]),n("gridChanged",{grid:a()})}function x(P){const S=a()[P];S&&S.color&&n("colorPicked",{color:S.color})}function L(P,S){S.stopPropagation(),!F()&&(u()?M(P):c()?x(P):i()?p(P):k(P))}function M(P,S){const q=P%r(),I=Math.floor(P/r());B(m,!0),h({startX:q,startY:I,endX:q,endY:I,active:!0}),n("selectionChanged",{selection:h()})}function R(P,S){u()&&M(P)}function v(P,S){if(u()&&f(m)){const q=P%r(),I=Math.floor(P/r());h({...h(),endX:q,endY:I}),n("selectionChanged",{selection:h()})}}function d(P,S){u()&&f(m)&&(B(m,!1),n("selectionChanged",{selection:h()}))}function C(){f(m)&&B(m,!1)}dn(()=>{typeof window<"u"&&window.addEventListener("mouseup",C)}),Zn(()=>{typeof window<"u"&&window.removeEventListener("mouseup",C)});function E(P){if(!h().active)return!1;const S=P%r(),q=Math.floor(P/r()),I=Math.min(h().startX,h().endX),ne=Math.max(h().startX,h().endX),fe=Math.min(h().startY,h().endY),A=Math.max(h().startY,h().endY);return S>=I&&S<=ne&&q>=fe&&q<=A}function _(P,S){P.key==="Enter"&&(c()?x(S):i()?p(S):k(S))}De();var T=ms(),D=X(T);St(D,1,a,Dt,(P,S,q)=>{var I=Fs(),ne=X(I);{var fe=A=>{var K=_e(),oe=ke(K);{var he=se=>{Ya(se,{get color(){return f(S),U(()=>f(S).color)}})},Ue=se=>{var Fe=_e(),ye=ke(Fe);{var we=pe=>{Ia(pe,{get color(){return f(S),U(()=>f(S).color)}})},Ce=pe=>{var pt=_e(),Pe=ke(pt);{var at=$e=>{qa($e,{get color(){return f(S),U(()=>f(S).color)},get rotation(){return f(S),U(()=>f(S).rotation)}})},Mt=$e=>{var mt=_e(),Gt=ke(mt);{var Yt=vt=>{Xa(vt,{get color(){return f(S),U(()=>f(S).color)},get rotation(){return f(S),U(()=>f(S).rotation)}})};Ze(Gt,vt=>{f(S),U(()=>f(S).shape==="halfCircle")&&vt(Yt)},!0)}Z($e,mt)};Ze(Pe,$e=>{f(S),U(()=>f(S).shape==="quarter")?$e(at):$e(Mt,!1)},!0)}Z(pe,pt)};Ze(ye,pe=>{f(S),U(()=>f(S).shape==="circle")?pe(we):pe(Ce,!1)},!0)}Z(se,Fe)};Ze(oe,se=>{f(S),U(()=>f(S).shape==="square")?se(he):se(Ue,!1)})}Z(A,K)};Ze(ne,A=>{f(S)&&A(fe)})}Y(I),Me(A=>Ne(I,1,`cell ${A??""} ${u()?"select-mode":""}`,"svelte-1hhz0mg"),[()=>U(()=>E(q)?"selected":"")]),J("click",I,A=>L(q,A)),J("mousedown",I,A=>R(q)),J("mouseenter",I,A=>v(q)),J("mouseup",I,A=>d()),J("keydown",I,A=>_(A,q)),Z(P,I)});var O=ee(D,2);{var V=P=>{const S=ve(()=>(j(h()),U(()=>Math.min(h().startX,h().endX)))),q=ve(()=>(j(h()),U(()=>Math.max(h().startX,h().endX)))),I=ve(()=>(j(h()),U(()=>Math.min(h().startY,h().endY)))),ne=ve(()=>(j(h()),U(()=>Math.max(h().startY,h().endY)))),fe=ve(()=>f(S)/r()*100),A=ve(()=>f(I)/l()*100),K=ve(()=>(f(q)-f(S)+1)/r()*100),oe=ve(()=>(f(ne)-f(I)+1)/l()*100);var he=ps();Me(()=>Ke(he,`left: ${f(fe)??""}%; top: ${f(A)??""}%; width: ${f(K)??""}%; height: ${f(oe)??""}%;`)),Z(P,he)};Ze(O,P=>{j(u()),j(h()),f(m),U(()=>u()&&h().active&&(f(m)||h().startX!==h().endX||h().startY!==h().endY))&&P(V)})}Y(T),Me(()=>Ke(T,`--width: ${r()??""}; --height: ${l()??""};`)),Z(e,T),xe()}var ks=de('<div class="container svelte-1w4104m"><!></div>');function Un(e,t){Ee(t,!1);const n=Ge();let a=$(t,"grid",8,null),r=$(t,"width",8,32),l=$(t,"height",8,32),o=$(t,"selectedShape",8,"square"),s=$(t,"selectedColor",24,()=>We.length>0?We[0].rgb:"#000000"),i=$(t,"paintMode",8,!1),c=$(t,"colorPickerMode",8,!1),u=$(t,"selectMode",8,!1),g=$(t,"quarterRotation",8,0),b=$(t,"halfCircleRotation",8,0),h=$(t,"zoom",12,1),F=$(t,"selection",28,()=>({startX:0,startY:0,endX:0,endY:0,active:!1})),m=W(),p=W(0),k=W(0);function x(_){h(_.detail.zoom)}function L(_){B(p,_.detail.panX),B(k,_.detail.panY)}function M(_){_.detail.didPan}function R(_){B(m,_.detail.grid),n("gridChanged",_.detail)}function v(_){n("colorPicked",_.detail)}function d(_){F(_.detail.selection),n("selectionChanged",_.detail)}ln(()=>(j(a()),j(r()),j(l())),()=>{B(m,a()||Array(r()*l()).fill(null))}),aa(),De();var C=ks(),E=X(C);us(E,{get zoom(){return h()},get panX(){return f(p)},get panY(){return f(k)},get selectMode(){return u()},$$events:{zoomChanged:x,panChanged:L,panEnd:M},children:Dr,$$slots:{default:(_,T)=>{const D=ve(()=>T.didPan);vs(_,{get grid(){return f(m)},get width(){return r()},get height(){return l()},get selectedShape(){return o()},get selectedColor(){return s()},get paintMode(){return i()},get colorPickerMode(){return c()},get selectMode(){return u()},get quarterRotation(){return g()},get halfCircleRotation(){return b()},get selection(){return F()},get didPan(){return f(D)},$$events:{gridChanged:R,colorPicked:v,selectionChanged:d}})}}}),Y(C),Z(e,C),xe()}var ys=de('<button type="button"></button>'),Cs=de('<div class="palette-row"></div>'),_s=de('<div class="color-picker"><!> <div class="colors"><div class="palette2d"></div></div></div>');function ws(e,t){Ee(t,!1);let n=$(t,"selectedColor",12,null);const a=Ge();let r=W(""),l=We,o=W(!1),s=W(null),i=W(l);function c(F){n(F),a("colorSelected",{color:F})}ln(()=>(f(o),f(s)),()=>{f(o)&&na().then(()=>{f(s)?.focus()})}),ln(()=>f(r),()=>{B(i,f(r).trim()?l.filter(F=>F.name.toLowerCase().includes(f(r).toLowerCase())||F.rgb.replace("#","").includes(f(r).replace("#",""))):l)}),aa(),De();var u=_s(),g=X(u);Ze(g,F=>{});var b=ee(g,2),h=X(b);St(h,5,()=>be,Dt,(F,m)=>{var p=Cs();St(p,5,()=>f(m),Dt,(k,x)=>{var L=ys();Me(()=>{Ke(L,`width: 1.5rem; height: 1.5rem; background: ${f(x),U(()=>f(x).rgb)??""}; border: 2px solid ${j(n()),f(x),U(()=>n()===f(x).rgb?"#333":"#ccc")??""}; border-radius: 0.25rem; cursor: pointer; margin: 0 0.1rem 0.1rem 0;`),ue(L,"aria-label",(f(x),U(()=>f(x).name))),ue(L,"title",(f(x),U(()=>f(x).name)))}),J("click",L,()=>c(f(x).rgb)),Z(k,L)}),Y(p),Z(F,p)}),Y(h),Y(b),Y(u),Z(e,u),xe()}const re={select:{key:"v",action:"select"},square:{key:"s",action:"square"},circle:{key:"c",action:"circle"},quarter:{key:"q",action:"quarter"},halfCircle:{key:"h",action:"halfCircle"},fill:{key:"f",action:"fill"},colorPicker:{key:"i",action:"colorPicker"},zoomIn:{key:"+",action:"zoomIn"},zoomInAlt:{key:"=",action:"zoomIn"},zoomOut:{key:"-",action:"zoomOut"},undo:{key:"z",ctrl:!0,action:"undo"},redo:{key:"z",ctrl:!0,shift:!0,action:"redo"},cut:{key:"x",ctrl:!0,action:"cut"},copy:{key:"c",ctrl:!0,action:"copy"},paste:{key:"v",ctrl:!0,action:"paste"},selectAll:{key:"a",ctrl:!0,action:"selectAll"},deselect:{key:"d",ctrl:!0,action:"deselect"},rotateLeft:{key:"r",action:"rotateLeft"},rotateRight:{key:"r",shift:!0,action:"rotateRight"},moveUp:{key:"ArrowUp",action:"moveUp"},moveDown:{key:"ArrowDown",action:"moveDown"},moveLeft:{key:"ArrowLeft",action:"moveLeft"},moveRight:{key:"ArrowRight",action:"moveRight"},delete:{key:"Delete",action:"delete"},backspace:{key:"Backspace",action:"delete"},colorLeft:{key:"a",shift:!0,action:"colorLeft"},colorRight:{key:"d",shift:!0,action:"colorRight"},colorUp:{key:"w",shift:!0,action:"colorUp"},colorDown:{key:"s",shift:!0,action:"colorDown"}};function Ms(e,t){const a=(e.key===" "?"Space":e.key).toLowerCase(),r=t.key.toLowerCase();return a!==r||!!e.ctrlKey!=!!t.ctrl||!!e.altKey!=!!t.alt?!1:t.key==="+"||t.key==="-"||t.key==="="?!0:!!e.shiftKey==!!t.shift}function le(e){const t=[];e.ctrl&&t.push("Ctrl"),e.shift&&t.push("Shift"),e.alt&&t.push("Alt");let n=e.key;return n===" "&&(n="Space"),n==="="&&(n="+"),t.push(n.toUpperCase()),t.join("+")}var As=de('<div class="shape-group"><div class="group-label">Shapes</div> <div class="shape-grid"><button aria-label="Square"><div class="shape-icon"><!></div></button> <button aria-label="Circle"><div class="shape-icon"><!></div></button> <button aria-label="Quarter"><div class="shape-icon"><!></div></button> <button aria-label="Half Circle"><div class="shape-icon"><!></div></button></div></div>');function Bs(e,t){Ee(t,!1);const n=Ge();let a=$(t,"selectedShape",12,"square"),r=$(t,"selectedColor",8,"#000000"),l=$(t,"quarterRotation",12,0),o=$(t,"halfCircleRotation",12,0);function s(_){if(_==="quarter")if(a()==="quarter"){l((l()+1)%4),n("quarterRotationChanged",{rotation:l()});return}else l(0);if(_==="halfCircle")if(a()==="halfCircle"){o((o()+1)%4),n("halfCircleRotationChanged",{rotation:o()});return}else o(0);a(_),n("shapeSelected",{shape:_}),_==="quarter"&&n("quarterRotationChanged",{rotation:l()}),_==="halfCircle"&&n("halfCircleRotationChanged",{rotation:o()})}De();var i=As(),c=ee(X(i),2),u=X(c);let g;var b=X(u),h=X(b);Ya(h,{get color(){return r()}}),Y(b),Y(u);var F=ee(u,2);let m;var p=X(F),k=X(p);Ia(k,{get color(){return r()}}),Y(p),Y(F);var x=ee(F,2);let L;var M=X(x),R=X(M);qa(R,{get color(){return r()},get rotation(){return l()}}),Y(M),Y(x);var v=ee(x,2);let d;var C=X(v),E=X(C);Xa(E,{get color(){return r()},get rotation(){return o()}}),Y(C),Y(v),Y(c),Y(i),Me((_,T,D,O,V,P,S,q)=>{g=Ne(u,1,"shape-button",null,g,_),ue(u,"title",`Square (${T??""})`),m=Ne(F,1,"shape-button",null,m,D),ue(F,"title",`Circle (${O??""})`),L=Ne(x,1,"shape-button",null,L,V),ue(x,"title",`Quarter (${P??""})`),d=Ne(v,1,"shape-button",null,d,S),ue(v,"title",`Half Circle (${q??""})`)},[()=>({selected:a()==="square"}),()=>(j(le),j(re),U(()=>le(re.square))),()=>({selected:a()==="circle"}),()=>(j(le),j(re),U(()=>le(re.circle))),()=>({selected:a()==="quarter"}),()=>(j(le),j(re),U(()=>le(re.quarter))),()=>({selected:a()==="halfCircle"}),()=>(j(le),j(re),U(()=>le(re.halfCircle)))]),J("click",u,()=>s("square")),J("click",F,()=>s("circle")),J("click",x,()=>s("quarter")),J("click",v,()=>s("halfCircle")),Z(e,i),xe()}/**
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
 */const Es={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};var xs=Sr("<svg><!><!></svg>");function je(e,t){const n=Te(t,["children","$$slots","$$events","$$legacy"]),a=Te(n,["name","color","size","strokeWidth","absoluteStrokeWidth","iconNode"]);Ee(t,!1);let r=$(t,"name",8,void 0),l=$(t,"color",8,"currentColor"),o=$(t,"size",8,24),s=$(t,"strokeWidth",8,2),i=$(t,"absoluteStrokeWidth",8,!1),c=$(t,"iconNode",24,()=>[]);const u=(...F)=>F.filter((m,p,k)=>!!m&&k.indexOf(m)===p).join(" ");De();var g=xs();Sn(g,(F,m)=>({...Es,...a,width:o(),height:o(),stroke:l(),"stroke-width":F,class:m}),[()=>(j(i()),j(s()),j(o()),U(()=>i()?Number(s())*24/Number(o()):s())),()=>(j(r()),j(n),U(()=>u("lucide-icon","lucide",r()?`lucide-${r()}`:"",n.class)))]);var b=X(g);St(b,1,c,Dt,(F,m)=>{var p=Tr(()=>Rr(f(m),2));let k=()=>f(p)[0],x=()=>f(p)[1];var L=_e(),M=ke(L);Or(M,k,!0,(R,v)=>{Sn(R,()=>({...x()}))}),Z(F,L)});var h=ee(b);Le(h,t,"default",{}),Y(g),Z(e,g),xe()}function Ds(e,t){const n=Te(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const a=[["path",{d:"M12 15V3"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}],["path",{d:"m7 10 5 5 5-5"}]];je(e,He({name:"download"},()=>n,{get iconNode(){return a},children:(r,l)=>{var o=_e(),s=ke(o);Le(s,t,"default",{}),Z(r,o)},$$slots:{default:!0}}))}function Ss(e,t){const n=Te(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const a=[["path",{d:"M14 4.1 12 6"}],["path",{d:"m5.1 8-2.9-.8"}],["path",{d:"m6 12-1.9 2"}],["path",{d:"M7.2 2.2 8 5.1"}],["path",{d:"M9.037 9.69a.498.498 0 0 1 .653-.653l11 4.5a.5.5 0 0 1-.074.949l-4.349 1.041a1 1 0 0 0-.74.739l-1.04 4.35a.5.5 0 0 1-.95.074z"}]];je(e,He({name:"mouse-pointer-click"},()=>n,{get iconNode(){return a},children:(r,l)=>{var o=_e(),s=ke(o);Le(s,t,"default",{}),Z(r,o)},$$slots:{default:!0}}))}function Ts(e,t){const n=Te(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const a=[["path",{d:"m19 11-8-8-8.6 8.6a2 2 0 0 0 0 2.8l5.2 5.2c.8.8 2 .8 2.8 0L19 11Z"}],["path",{d:"m5 2 5 5"}],["path",{d:"M2 13h15"}],["path",{d:"M22 20a2 2 0 1 1-4 0c0-1.6 1.7-2.4 2-4 .3 1.6 2 2.4 2 4Z"}]];je(e,He({name:"paint-bucket"},()=>n,{get iconNode(){return a},children:(r,l)=>{var o=_e(),s=ke(o);Le(s,t,"default",{}),Z(r,o)},$$slots:{default:!0}}))}function Rs(e,t){const n=Te(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const a=[["path",{d:"m12 9-8.414 8.414A2 2 0 0 0 3 18.828v1.344a2 2 0 0 1-.586 1.414A2 2 0 0 1 3.828 21h1.344a2 2 0 0 0 1.414-.586L15 12"}],["path",{d:"m18 9 .4.4a1 1 0 1 1-3 3l-3.8-3.8a1 1 0 1 1 3-3l.4.4 3.4-3.4a1 1 0 1 1 3 3z"}],["path",{d:"m2 22 .414-.414"}]];je(e,He({name:"pipette"},()=>n,{get iconNode(){return a},children:(r,l)=>{var o=_e(),s=ke(o);Le(s,t,"default",{}),Z(r,o)},$$slots:{default:!0}}))}function Ls(e,t){const n=Te(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const a=[["path",{d:"M21 7v6h-6"}],["path",{d:"M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7"}]];je(e,He({name:"redo"},()=>n,{get iconNode(){return a},children:(r,l)=>{var o=_e(),s=ke(o);Le(s,t,"default",{}),Z(r,o)},$$slots:{default:!0}}))}function Ps(e,t){const n=Te(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const a=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7"}]];je(e,He({name:"save"},()=>n,{get iconNode(){return a},children:(r,l)=>{var o=_e(),s=ke(o);Le(s,t,"default",{}),Z(r,o)},$$slots:{default:!0}}))}function $s(e,t){const n=Te(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const a=[["path",{d:"M3 7v6h6"}],["path",{d:"M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13"}]];je(e,He({name:"undo"},()=>n,{get iconNode(){return a},children:(r,l)=>{var o=_e(),s=ke(o);Le(s,t,"default",{}),Z(r,o)},$$slots:{default:!0}}))}function Os(e,t){const n=Te(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const a=[["circle",{cx:"11",cy:"11",r:"8"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65"}],["line",{x1:"11",x2:"11",y1:"8",y2:"14"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11"}]];je(e,He({name:"zoom-in"},()=>n,{get iconNode(){return a},children:(r,l)=>{var o=_e(),s=ke(o);Le(s,t,"default",{}),Z(r,o)},$$slots:{default:!0}}))}function Ns(e,t){const n=Te(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const a=[["circle",{cx:"11",cy:"11",r:"8"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11"}]];je(e,He({name:"zoom-out"},()=>n,{get iconNode(){return a},children:(r,l)=>{var o=_e(),s=ke(o);Le(s,t,"default",{}),Z(r,o)},$$slots:{default:!0}}))}var zs=de('<div class="tool-group"><div class="group-label">Tools</div> <div class="tool-grid"><button type="button" aria-label="Selection tool"><!></button> <button type="button" aria-label="Zoom in" class="tool-button"><!></button> <button type="button" aria-label="Zoom out" class="tool-button"><!></button> <button type="button" aria-label="Paint bucket tool"><!></button> <button type="button" aria-label="Color picker tool"><!></button> <button type="button" aria-label="Undo" class="tool-button"><!></button> <button type="button" aria-label="Redo" class="tool-button"><!></button> <button type="button" aria-label="Save" class="tool-button" title="Save Project"><!></button> <button type="button" aria-label="Load" class="tool-button" title="Load Project"><!></button></div></div>');function Gs(e,t){Ee(t,!1);const n=Ge();let a=$(t,"paintMode",12,!1),r=$(t,"colorPickerMode",12,!1),l=$(t,"selectMode",12,!1),o=$(t,"canUndo",8,!1),s=$(t,"canRedo",8,!1);function i(){a(!a()),a()&&(r(!1),l(!1)),n("paintModeToggled",{paintMode:a()})}function c(){r(!r()),r()&&(a(!1),l(!1)),n("colorPickerModeToggled",{colorPickerMode:r()})}function u(){l(!l()),l()&&(a(!1),r(!1)),n("selectModeToggled",{selectMode:l()})}function g(){n("undo")}function b(){n("redo")}function h(){n("save")}function F(){n("load")}De();var m=zs(),p=ee(X(m),2),k=X(p);let x;var L=X(k);{let K=ve(()=>l()?"#333":"#555");Ss(L,{size:24,get color(){return f(K)}})}Y(k);var M=ee(k,2),R=X(M);Os(R,{size:24,color:"#555"}),Y(M);var v=ee(M,2),d=X(v);Ns(d,{size:24,color:"#555"}),Y(v);var C=ee(v,2);let E;var _=X(C);{let K=ve(()=>a()?"#333":"#555");Ts(_,{size:24,get color(){return f(K)}})}Y(C);var T=ee(C,2);let D;var O=X(T);{let K=ve(()=>r()?"#333":"#555");Rs(O,{size:24,get color(){return f(K)}})}Y(T);var V=ee(T,2),P=X(V);{let K=ve(()=>o()?"#555":"#ccc");$s(P,{size:24,get color(){return f(K)}})}Y(V);var S=ee(V,2),q=X(S);{let K=ve(()=>s()?"#555":"#ccc");Ls(q,{size:24,get color(){return f(K)}})}Y(S);var I=ee(S,2),ne=X(I);Ps(ne,{size:24,color:"#555"}),Y(I);var fe=ee(I,2),A=X(fe);Ds(A,{size:24,color:"#555"}),Y(fe),Y(p),Y(m),Me((K,oe,he,Ue,se,Fe,ye,we,Ce,pe)=>{x=Ne(k,1,"tool-button",null,x,K),ue(k,"title",`Selection Tool (${oe??""})`),ue(M,"title",`Zoom In (${he??""})`),ue(v,"title",`Zoom Out (${Ue??""})`),E=Ne(C,1,"tool-button",null,E,se),ue(C,"title",`Fill Tool (${Fe??""})`),D=Ne(T,1,"tool-button",null,D,ye),ue(T,"title",`Color Picker (${we??""})`),ue(V,"title",`Undo (${Ce??""})`),V.disabled=!o(),ue(S,"title",`Redo (${pe??""})`),S.disabled=!s()},[()=>({active:l()}),()=>(j(le),j(re),U(()=>le(re.select))),()=>(j(le),j(re),U(()=>le(re.zoomIn))),()=>(j(le),j(re),U(()=>le(re.zoomOut))),()=>({active:a()}),()=>(j(le),j(re),U(()=>le(re.fill))),()=>({active:r()}),()=>(j(le),j(re),U(()=>le(re.colorPicker))),()=>(j(le),j(re),U(()=>le(re.undo))),()=>(j(le),j(re),U(()=>le(re.redo)))]),J("click",k,u),J("click",M,()=>n("zoomIn")),J("click",v,()=>n("zoomOut")),J("click",C,i),J("click",T,c),J("click",V,g),J("click",S,b),J("click",I,h),J("click",fe,F),Z(e,m),xe()}var Ys=de('<div class="canvas-size-group" style="display:flex; justify-content:center; flex-direction: column; align-items:center; width:100%;"><div class="group-label">Size</div> <div class="tool-grid" style="display:flex; justify-content: center"><label style="display:flex; flex-direction:column; align-items:center;"><input type="number" min="1" max="256"/></label></div></div>');function Is(e,t){Ee(t,!1);const n=Ge();let a=$(t,"size",12,32);function r(c){const u=c.target;a(Math.max(1,Math.min(128,parseInt(u.value)||1))),n("sizeChanged",{size:a()})}De();var l=Ys(),o=ee(X(l),2),s=X(o),i=X(s);ia(i),Y(s),Y(o),Y(l),jr(i,a),J("input",i,r),Z(e,l),xe()}var qs=de('<div class="image-upload"><label class="upload-label"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#555" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align: middle;"><path d="M12 16V4"></path><polyline points="8 8 12 4 16 8"></polyline><rect x="4" y="16" width="16" height="4" rx="2"></rect></svg> <span>Upload image</span> <input type="file" accept="image/png, image/jpeg"/></label></div>');function Xs(e,t){Ee(t,!1);const n=Ge();function a(s){const i=s.target,c=i.files&&i.files[0];if(c){const u=new FileReader;u.onload=()=>{n("imageUploaded",{src:u.result,fileName:c.name})},u.readAsDataURL(c)}}De();var r=qs(),l=X(r),o=ee(X(l),4);Y(l),Y(r),J("change",o,a),Z(e,r),xe()}var Hs=de('<button class="toolbar-toggle" aria-label="Show/hide toolbar"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#555" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align: middle;"><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg></button>');function js(e,t){Ee(t,!1);const n=Ge();function a(){n("toggle")}De();var r=Hs();J("click",r,a),Z(e,r),xe()}var Us=de("<!> <div><!> <!> <!> <!> <!></div>",1);function Zs(e,t){Ee(t,!1);const n=Ge();let a=$(t,"selectedShape",12,"square"),r=$(t,"selectedColor",12,"#000000"),l=$(t,"paintMode",12,!1),o=$(t,"colorPickerMode",12,!1),s=$(t,"selectMode",12,!1),i=$(t,"size",12,32),c=W(!0),u=$(t,"quarterRotation",12,0),g=$(t,"halfCircleRotation",12,0),b=$(t,"canUndo",12,!1),h=$(t,"canRedo",12,!1);function F(A){a(A.detail.shape),n("shapeSelected",A.detail)}function m(A){u(A.detail.rotation),n("quarterRotationChanged",A.detail)}function p(A){g(A.detail.rotation),n("halfCircleRotationChanged",A.detail)}function k(A){r(A.detail.color),n("colorSelected",A.detail)}function x(A){l(A.detail.paintMode),n("paintModeToggled",A.detail)}function L(A){o(A.detail.colorPickerMode),n("colorPickerModeToggled",A.detail)}function M(A){s(A.detail.selectMode),n("selectModeToggled",A.detail)}function R(){n("undo")}function v(){n("redo")}function d(A){i(A.detail.size),n("sizeChanged",A.detail)}function C(A){n("imageUploaded",A.detail)}function E(){n("save")}function _(){n("load")}function T(){B(c,!f(c))}De();var D=Us(),O=ke(D);js(O,{$$events:{toggle:T}});var V=ee(O,2);let P;var S=X(V);Bs(S,{get selectedColor(){return r()},get selectedShape(){return a()},set selectedShape(A){a(A)},get quarterRotation(){return u()},set quarterRotation(A){u(A)},get halfCircleRotation(){return g()},set halfCircleRotation(A){g(A)},$$events:{shapeSelected:F,quarterRotationChanged:m,halfCircleRotationChanged:p},$$legacy:!0});var q=ee(S,2);Gs(q,{get paintMode(){return l()},set paintMode(A){l(A)},get colorPickerMode(){return o()},set colorPickerMode(A){o(A)},get selectMode(){return s()},set selectMode(A){s(A)},get canUndo(){return b()},set canUndo(A){b(A)},get canRedo(){return h()},set canRedo(A){h(A)},$$events:{paintModeToggled:x,colorPickerModeToggled:L,selectModeToggled:M,undo:R,redo:v,zoomIn:()=>n("zoomIn"),zoomOut:()=>n("zoomOut"),save:E,load:_},$$legacy:!0});var I=ee(q,2);ws(I,{get selectedColor(){return r()},set selectedColor(A){r(A)},$$events:{colorSelected:k},$$legacy:!0});var ne=ee(I,2);Is(ne,{get size(){return i()},set size(A){i(A)},$$events:{sizeChanged:d},$$legacy:!0});var fe=ee(ne,2);Xs(fe,{$$events:{imageUploaded:C}}),Y(V),Me(A=>P=Ne(V,1,"toolbar left",null,P,A),[()=>({visible:f(c)})]),Z(e,D),xe()}function Vs(e,t,n,a){const r=G(e,t,n),l=r.lab(),[o,s,i]=r.hcl();let c=a[0],u=1/0;for(const g of a){const b=G(g),h=b.lab(),[F,m,p]=b.hcl();let k=G.deltaE(l,h);i>85&&p>75?k*=.6:i>70&&p>65&&(k*=.8),s>40?m>s*.7?k*=.6:m>30&&(k*=.8):s>20&&m>25&&(k*=.85);const x=s<15,L=m>45;x&&L&&k>10&&(k*=1.4),k<u&&(u=k,c=g)}return c}function Ws(e,t,n,a){return e===0||t===0||e===n-1||t===a-1}function Ks(e,t=!1){const n=e/255;return t?n<.2?"quarter":n<.5?"halfCircle":n<.8?"circle":"square":n<.1?"quarter":n<.25?"circle":"square"}function Js(e,t,n=32,a=32){return new Promise((r,l)=>{const o=new window.Image;o.src=e,o.onload=()=>{const s=o.width,i=o.height,c=document.createElement("canvas"),u=c.getContext("2d");if(!u){l(new Error("Could not get 2D context"));return}c.width=s,c.height=i,u.drawImage(o,0,0,s,i);const g=u.getImageData(0,0,s,i).data,b=[],h=s/n,F=i/a;for(let m=0;m<a;m++)for(let p=0;p<n;p++){const k=Math.floor(p*h),x=Math.floor(m*F),L=Math.floor((p+1)*h),M=Math.floor((m+1)*F);let R=0,v=0,d=0,C=0,E=0,_=0,T=0,D=0,O=0,V=0,P=0,S=0,q=0;for(let se=x;se<M;se++)for(let Fe=k;Fe<L;Fe++){const ye=(se*s+Fe)*4,we=g[ye],Ce=g[ye+1],pe=g[ye+2];if(g[ye+3]>0){const Pe=(we+Ce+pe)/3;R+=we,v+=Ce,d+=pe,C+=Pe,E++,se<x+(M-x)/2?(_+=Pe,T++):(D+=Pe,O++),Fe<k+(L-k)/2?(V+=Pe,P++):(S+=Pe,q++)}}if(E===0){b.push({shape:"empty",color:"#FFFFFF",rotation:0});continue}const I=Math.round(R/E),ne=Math.round(v/E),fe=Math.round(d/E),A=C/E,K=Ws(p,m,n,a),oe=Ks(A,K);let he=0;if(oe==="halfCircle"||oe==="quarter"){const se=T>0?_/T:A,Fe=O>0?D/O:A,ye=P>0?V/P:A,we=q>0?S/q:A;if(oe==="halfCircle"){const Ce=[se,we,Fe,ye];he=Ce.indexOf(Math.min(...Ce))}else if(oe==="quarter"){const Ce=[(we+Fe)/2,(ye+Fe)/2,(ye+se)/2,(we+se)/2];he=Ce.indexOf(Math.max(...Ce))}}const Ue=Vs(I,ne,fe,t);b.push({shape:oe,color:Ue,rotation:he})}r(b)},o.onerror=l})}class Qs{history=[];currentIndex=-1;maxHistory=50;constructor(t){t&&this.addState(t)}addState(t){this.currentIndex<this.history.length-1&&(this.history=this.history.slice(0,this.currentIndex+1)),this.history.push({grid:JSON.parse(JSON.stringify(t)),timestamp:Date.now()}),this.history.length>this.maxHistory?this.history.shift():this.currentIndex++}undo(){return this.canUndo()?(this.currentIndex--,JSON.parse(JSON.stringify(this.history[this.currentIndex].grid))):null}redo(){return this.canRedo()?(this.currentIndex++,JSON.parse(JSON.stringify(this.history[this.currentIndex].grid))):null}canUndo(){return this.currentIndex>0}canRedo(){return this.currentIndex<this.history.length-1}clear(){this.history=[],this.currentIndex=-1}getCurrentState(){return this.currentIndex>=0&&this.currentIndex<this.history.length?JSON.parse(JSON.stringify(this.history[this.currentIndex].grid)):null}}class e0{clipboardData=null;copy(t,n,a){const{startX:r,startY:l,endX:o,endY:s}=this.normalizeSelection(n),i=o-r+1,c=s-l+1,u=[];for(let g=l;g<=s;g++)for(let b=r;b<=o;b++){const h=g*a+b;u.push(t[h]?JSON.parse(JSON.stringify(t[h])):null)}this.clipboardData={cells:u,width:i,height:c}}cut(t,n,a){return this.copy(t,n,a),this.deleteSelection(t,n,a)}paste(t,n,a,r,l){if(!this.clipboardData)return t;const o=[...t],{cells:s,width:i,height:c}=this.clipboardData;for(let u=0;u<c;u++)for(let g=0;g<i;g++){const b=n+g,h=a+u;if(b>=0&&b<r&&h>=0&&h<l){const F=u*i+g,m=h*r+b;o[m]=s[F]?JSON.parse(JSON.stringify(s[F])):null}}return o}deleteSelection(t,n,a){const{startX:r,startY:l,endX:o,endY:s}=this.normalizeSelection(n),i=[...t];for(let c=l;c<=s;c++)for(let u=r;u<=o;u++){const g=c*a+u;i[g]=null}return i}rotateSelection(t,n,a,r=!0){const{startX:l,startY:o,endX:s,endY:i}=this.normalizeSelection(n),c=s-l+1,u=i-o+1,g=[];for(let h=o;h<=i;h++)for(let F=l;F<=s;F++){const m=h*a+F;g.push(t[m])}const b=new Array(c*u);for(let h=0;h<u;h++)for(let F=0;F<c;F++){const m=h*c+F;let p;r?p=F*u+(u-1-h):p=(c-1-F)*u+h;const k=g[m];b[p]=k?{...k,rotation:(k.rotation+(r?1:-1)+4)%4}:null}if(c===u){const h=[...t];for(let F=0;F<u;F++)for(let m=0;m<c;m++){const p=(o+F)*a+(l+m),k=F*c+m;h[p]=b[k]}return h}return t}moveSelection(t,n,a,r,l,o){const{startX:s,startY:i,endX:c,endY:u}=this.normalizeSelection(n),g=c-s+1,b=u-i+1,h=Math.max(0,Math.min(l-g,s+a)),F=Math.max(0,Math.min(o-b,i+r)),m=h+g-1,p=F+b-1;if(h===s&&F===i)return{grid:t,selection:n};const k=[];for(let M=i;M<=u;M++)for(let R=s;R<=c;R++){const v=M*l+R;k.push(t[v])}let x=this.deleteSelection(t,n,l);for(let M=0;M<b;M++)for(let R=0;R<g;R++){const v=M*g+R,d=(F+M)*l+(h+R);x[d]=k[v]}const L={...n,startX:h,startY:F,endX:m,endY:p};return{grid:x,selection:L}}hasClipboardData(){return this.clipboardData!==null}getClipboardSize(){return this.clipboardData?{width:this.clipboardData.width,height:this.clipboardData.height}:null}normalizeSelection(t){return{startX:Math.min(t.startX,t.endX),startY:Math.min(t.startY,t.endY),endX:Math.max(t.startX,t.endX),endY:Math.max(t.startY,t.endY)}}}var t0=de('<main class="svelte-1uha8ag"><!> <!></main>');function c0(e,t){Ee(t,!1);let n=W("square"),a=W(We.length>0?We[0].rgb:"#000000"),r=W(null),l=W(!1),o=W(!1),s=W(1),i=W(32),c=W(!1),u=W(0),g=W(0),b="dotsly.json",h=W({startX:0,startY:0,endX:0,endY:0,active:!1}),F,m,p=W(!1),k=W(!1);function x(){B(s,Math.min(f(s)+.1,3))}function L(){B(s,Math.max(f(s)-.1,.2))}function M(y){for(let Q=0;Q<be.length;Q++)for(let ae=0;ae<be[Q].length;ae++)if(be[Q][ae].rgb===y)return{row:Q,col:ae};return null}function R(){const y=M(f(a));if(y&&y.col>0)B(a,be[y.row][y.col-1].rgb);else if(y&&y.row>0){const Q=y.row-1,ae=be[Q].length-1;B(a,be[Q][ae].rgb)}}function v(){const y=M(f(a));y&&y.col<be[y.row].length-1?B(a,be[y.row][y.col+1].rgb):y&&y.row<be.length-1&&B(a,be[y.row+1][0].rgb)}function d(){const y=M(f(a));if(y&&y.row>0){const Q=Math.min(y.col,be[y.row-1].length-1);B(a,be[y.row-1][Q].rgb)}}function C(){const y=M(f(a));if(y&&y.row<be.length-1){const Q=Math.min(y.col,be[y.row+1].length-1);B(a,be[y.row+1][Q].rgb)}}function E(){if(!f(r))return;const y={grid:f(r),size:f(i),version:"1.0"},Q=JSON.stringify(y,null,2),ae=new Blob([Q],{type:"application/json"}),kt=URL.createObjectURL(ae),et=document.createElement("a");et.href=kt,et.download=b,document.body.appendChild(et),et.click(),document.body.removeChild(et),URL.revokeObjectURL(kt)}function _(){const y=document.createElement("input");y.type="file",y.accept=".json",y.onchange=Q=>{const ae=Q.target.files?.[0];if(!ae)return;const kt=new FileReader;kt.onload=et=>{try{const rt=JSON.parse(et.target?.result);rt.grid&&rt.size?(B(r,rt.grid),B(i,rt.size),b=ae.name,f(r)&&D(f(r))):alert("Invalid file format")}catch(rt){alert("Error loading file: "+rt)}},kt.readAsText(ae)},y.click()}dn(()=>{F=new Qs,m=new e0,f(r)||(B(r,Array(f(i)*f(i)).fill(null)),F.addState(f(r))),T(),window.addEventListener("keydown",O)}),Zn(()=>{typeof window<"u"&&window.removeEventListener("keydown",O)});function T(){B(p,F?.canUndo()??!1),B(k,F?.canRedo()??!1)}function D(y){F&&(F.addState(y),T())}function O(y){if(!(y.target instanceof HTMLInputElement||y.target instanceof HTMLTextAreaElement)){for(const[Q,ae]of Object.entries(re))if(Ms(y,ae)){y.preventDefault(),V(ae.action);break}}}function V(y){switch(y){case"select":B(o,!f(o)),f(o)&&(B(l,!1),B(c,!1));break;case"square":B(n,"square");break;case"circle":B(n,"circle");break;case"quarter":f(n)==="quarter"?B(u,(f(u)+1)%4):(B(n,"quarter"),B(u,0));break;case"halfCircle":f(n)==="halfCircle"?B(g,(f(g)+1)%4):(B(n,"halfCircle"),B(g,0));break;case"fill":B(l,!f(l)),f(l)&&(B(o,!1),B(c,!1));break;case"colorPicker":B(c,!f(c)),f(c)&&(B(o,!1),B(l,!1));break;case"zoomIn":x();break;case"zoomOut":L();break;case"undo":oe();break;case"redo":he();break;case"cut":Fe();break;case"copy":ye();break;case"paste":we();break;case"selectAll":pe();break;case"deselect":pt();break;case"delete":Ce();break;case"rotateLeft":f(h).active&&Pe(!1);break;case"rotateRight":f(h).active&&Pe(!0);break;case"moveUp":f(h).active&&at(0,-1);break;case"moveDown":f(h).active&&at(0,1);break;case"moveLeft":f(h).active&&at(-1,0);break;case"moveRight":f(h).active&&at(1,0);break;case"colorLeft":R();break;case"colorRight":v();break;case"colorUp":d();break;case"colorDown":C();break}}function P(y){B(n,y.detail.shape)}function S(y){B(u,y.detail.rotation)}function q(y){B(g,y.detail.rotation)}function I(y){B(a,y.detail.color)}async function ne(y){const Q=We.map(ae=>ae.rgb);B(r,await Js(y.detail.src,Q,f(i),f(i))),D(f(r)),y.detail.fileName?b=`${y.detail.fileName.replace(/\.[^/.]+$/,"")}.json`:b="dotsly.json"}function fe(y){B(i,y.detail.size),B(r,null)}function A(y){B(c,y.detail.colorPickerMode)}function K(y){B(o,y.detail.selectMode),f(o)&&(B(l,!1),B(c,!1))}function oe(){if(F){const y=F.undo();y&&(B(r,y),T())}}function he(){if(F){const y=F.redo();y&&(B(r,y),T())}}function Ue(y){B(h,y.detail.selection)}function se(y){B(r,y.detail.grid),f(r)&&D(f(r))}function Fe(){if(f(h).active&&f(r)&&m){const y=m.cut(f(r),f(h),f(i));B(r,y),D(f(r)),B(h,{...f(h),active:!1})}}function ye(){f(h).active&&f(r)&&m&&m.copy(f(r),f(h),f(i))}function we(){if(f(r)&&m&&m.hasClipboardData()){const y=f(h).active?f(h).startX:0,Q=f(h).active?f(h).startY:0,ae=m.paste(f(r),y,Q,f(i),f(i));B(r,ae),D(f(r))}}function Ce(){if(f(h).active&&f(r)&&m){const y=m.deleteSelection(f(r),f(h),f(i));B(r,y),D(f(r)),B(h,{...f(h),active:!1})}}function pe(){B(h,{startX:0,startY:0,endX:f(i)-1,endY:f(i)-1,active:!0}),B(o,!0),B(l,!1),B(c,!1)}function pt(){B(h,{...f(h),active:!1})}function Pe(y=!0){if(f(h).active&&f(r)&&m){const Q=m.rotateSelection(f(r),f(h),f(i),y);B(r,Q),D(f(r))}}function at(y,Q){if(f(h).active&&f(r)&&m){const ae=m.moveSelection(f(r),f(h),y,Q,f(i),f(i));B(r,ae.grid),B(h,ae.selection),D(f(r))}}function Mt(y){B(a,y.detail.color),B(c,!1)}De();var $e=t0();Ka(y=>{Lr.title="Dotsly"});var mt=X($e);Zs(mt,{get selectedColor(){return f(a)},set selectedColor(y){B(a,y)},get selectedShape(){return f(n)},set selectedShape(y){B(n,y)},get paintMode(){return f(l)},set paintMode(y){B(l,y)},get selectMode(){return f(o)},set selectMode(y){B(o,y)},get colorPickerMode(){return f(c)},set colorPickerMode(y){B(c,y)},get quarterRotation(){return f(u)},set quarterRotation(y){B(u,y)},get halfCircleRotation(){return f(g)},set halfCircleRotation(y){B(g,y)},get size(){return f(i)},set size(y){B(i,y)},get canUndo(){return f(p)},set canUndo(y){B(p,y)},get canRedo(){return f(k)},set canRedo(y){B(k,y)},$$events:{shapeSelected:P,colorSelected:I,imageUploaded:ne,paintModeToggled:y=>B(l,y.detail.paintMode),colorPickerModeToggled:A,selectModeToggled:K,undo:oe,redo:he,zoomIn:x,zoomOut:L,quarterRotationChanged:S,halfCircleRotationChanged:q,sizeChanged:fe,save:E,load:_},$$legacy:!0});var Gt=ee(mt,2);{var Yt=y=>{Un(y,{get width(){return f(i)},get height(){return f(i)},get selectedShape(){return f(n)},get selectedColor(){return f(a)},get selectMode(){return f(o)},get grid(){return f(r)},get paintMode(){return f(l)},get colorPickerMode(){return f(c)},get zoom(){return f(s)},get quarterRotation(){return f(u)},get halfCircleRotation(){return f(g)},get selection(){return f(h)},$$events:{colorPicked:Mt,selectionChanged:Ue,gridChanged:se}})},vt=y=>{Un(y,{get width(){return f(i)},get height(){return f(i)},get selectedShape(){return f(n)},get selectedColor(){return f(a)},get selectMode(){return f(o)},get paintMode(){return f(l)},get colorPickerMode(){return f(c)},get zoom(){return f(s)},get quarterRotation(){return f(u)},get halfCircleRotation(){return f(g)},get selection(){return f(h)},$$events:{colorPicked:Mt,selectionChanged:Ue,gridChanged:se}})};Ze(Gt,y=>{f(r)?y(Yt):y(vt,!1)})}Y($e),Z(e,$e),xe()}export{c0 as component};
