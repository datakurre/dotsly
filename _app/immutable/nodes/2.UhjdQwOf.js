import"../chunks/DsnmJJEf.js";import"../chunks/DXAwGQm7.js";import{i as Ua,a as Za,c as Va,d as Wa,n as Ka,b as Ja,e as Le,o as dn,f as J,g as Zn,j as Qa}from"../chunks/Csy9xEDe.js";import{B as hn,w as Pt,aT as Vn,z as yt,h as te,aA as Wn,a as rn,g as f,W as be,x as er,H as tr,y as wn,A as Ve,J as qe,ag as nr,aI as ar,C as ot,F as rr,aU as $t,aV as Nt,D as lt,af as Mn,a8 as K,X as An,aF as Kn,ax as Jn,G as bn,I as Qn,aW as lr,aX as It,M as or,an as st,aY as sr,at as ir,aZ as cr,aE as fr,a_ as ur,T as ea,a$ as dr,E as hr,b0 as br,aH as gr,K as ta,b1 as Fr,b2 as pr,av as mr,b3 as vr,b4 as kr,b5 as yr,b6 as _r,b7 as Cr,b8 as wr,U as Mr,b9 as Ar,ba as Er,bb as Br,bc as Sr,aa as na,d as Z,L as Dr,bd as Tr,p as _e,n as ce,q as I,s as Y,R as A,t as ve,m as V,o as Ce,k as pe,l as ge,v as ee,f as H,be as ln,bf as aa,bg as xr,bh as Rr,ab as Lr,bi as Pr,bj as $r}from"../chunks/DckqTTcM.js";import{p as P,b as En,i as Ie,l as Ee,s as Ge}from"../chunks/q0klybCy.js";import{i as we}from"../chunks/BBao4eQ6.js";import{s as Se}from"../chunks/M1l1I-Ar.js";function Dt(e,t){return t}function Nr(e,t,n){for(var a=e.items,r=[],l=t.length,o=0;o<l;o++)cr(t[o].e,r,!0);var s=l>0&&r.length===0&&n!==null;if(s){var i=n.parentNode;fr(i),i.append(n),a.clear(),Te(e,t[0].prev,t[l-1].next)}ur(r,()=>{for(var c=0;c<l;c++){var u=t[c];s||(a.delete(u.k),Te(e,u.prev,u.next)),st(u.e,!s)}})}function Tt(e,t,n,a,r,l=null){var o=e,s={flags:t,items:new Map,first:null},i=(t&Vn)!==0;if(i){var c=e;o=te?yt(Wn(c)):c.appendChild(hn())}te&&rn();var u=null,g=!1,h=new Map,F=be(()=>{var y=n();return Jn(y)?y:y==null?[]:Kn(y)}),b,v;function p(){Or(v,b,s,h,o,r,t,a,n),l!==null&&(b.length===0?u?bn(u):u=ot(()=>l(o)):u!==null&&Qn(u,()=>{u=null}))}Pt(()=>{v??=ea,b=f(F);var y=b.length;if(g&&y===0)return;g=y===0;let x=!1;if(te){var R=er(o)===tr;R!==(y===0)&&(o=wn(),yt(o),Ve(!1),x=!0)}if(te){for(var w=null,B,m=0;m<y;m++){if(qe.nodeType===nr&&qe.data===ar){o=qe,x=!0,Ve(!1);break}var d=b[m],_=a(d,m);B=on(qe,s,w,null,d,_,m,r,t,n),s.items.set(_,B),w=B}y>0&&yt(wn())}if(te)y===0&&l&&(u=ot(()=>l(o)));else if(rr()){var E=new Set,C=lt;for(m=0;m<y;m+=1){d=b[m],_=a(d,m);var L=s.items.get(_)??h.get(_);L?(t&($t|Nt))!==0&&ra(L,d,m,t):(B=on(null,s,null,null,d,_,m,r,t,n,!0),h.set(_,B)),E.add(_)}for(const[T,N]of s.items)E.has(T)||C.skipped_effects.add(N.e);C.add_callback(p)}else p();x&&Ve(!0),f(F)}),te&&(o=qe)}function Or(e,t,n,a,r,l,o,s,i){var c=(o&sr)!==0,u=(o&($t|Nt))!==0,g=t.length,h=n.items,F=n.first,b=F,v,p=null,y,x=[],R=[],w,B,m,d;if(c)for(d=0;d<g;d+=1)w=t[d],B=s(w,d),m=h.get(B),m!==void 0&&(m.a?.measure(),(y??=new Set).add(m));for(d=0;d<g;d+=1){if(w=t[d],B=s(w,d),m=h.get(B),m===void 0){var _=a.get(B);if(_!==void 0){a.delete(B),h.set(B,_);var E=p?p.next:b;Te(n,p,_),Te(n,_,E),qt(_,E,r),p=_}else{var C=b?b.e.nodes_start:r;p=on(C,n,p,p===null?n.first:p.next,w,B,d,l,o,i)}h.set(B,p),x=[],R=[],b=p.next;continue}if(u&&ra(m,w,d,o),(m.e.f&It)!==0&&(bn(m.e),c&&(m.a?.unfix(),(y??=new Set).delete(m))),m!==b){if(v!==void 0&&v.has(m)){if(x.length<R.length){var L=R[0],T;p=L.prev;var N=x[0],W=x[x.length-1];for(T=0;T<x.length;T+=1)qt(x[T],L,r);for(T=0;T<R.length;T+=1)v.delete(R[T]);Te(n,N.prev,W.next),Te(n,p,N),Te(n,W,L),b=L,p=W,d-=1,x=[],R=[]}else v.delete(m),qt(m,b,r),Te(n,m.prev,m.next),Te(n,m,p===null?n.first:p.next),Te(n,p,m),p=m;continue}for(x=[],R=[];b!==null&&b.k!==B;)(b.e.f&It)===0&&(v??=new Set).add(b),R.push(b),b=b.next;if(b===null)continue;m=b}x.push(m),p=m,b=m.next}if(b!==null||v!==void 0){for(var $=v===void 0?[]:Kn(v);b!==null;)(b.e.f&It)===0&&$.push(b),b=b.next;var D=$.length;if(D>0){var U=(o&Vn)!==0&&g===0?r:null;if(c){for(d=0;d<D;d+=1)$[d].a?.measure();for(d=0;d<D;d+=1)$[d].a?.fix()}Nr(n,$,U)}}c&&or(()=>{if(y!==void 0)for(m of y)m.a?.apply()}),e.first=n.first&&n.first.e,e.last=p&&p.e;for(var X of a.values())st(X.e);a.clear()}function ra(e,t,n,a){(a&$t)!==0&&Mn(e.v,t),(a&Nt)!==0?Mn(e.i,n):e.i=n}function on(e,t,n,a,r,l,o,s,i,c,u){var g=(i&$t)!==0,h=(i&lr)===0,F=g?h?K(r,!1,!1):An(r):r,b=(i&Nt)===0?o:An(o),v={i:b,v:F,k:l,a:null,e:null,prev:n,next:a};try{if(e===null){var p=document.createDocumentFragment();p.append(e=hn())}return v.e=ot(()=>s(e,F,b,c),te),v.e.prev=n&&n.e,v.e.next=a&&a.e,n===null?u||(t.first=v):(n.next=v,n.e.next=v.e),a!==null&&(a.prev=v,a.e.prev=v.e),v}finally{}}function qt(e,t,n){for(var a=e.next?e.next.e.nodes_start:n,r=t?t.e.nodes_start:n,l=e.e.nodes_start;l!==null&&l!==a;){var o=ir(l);r.before(l),l=o}}function Te(e,t,n){t===null?e.first=n:(t.next=n,t.e.next=n&&n.e),n!==null&&(n.prev=t,n.e.prev=t&&t.e)}function zr(e,t,n,a,r,l){let o=te;te&&rn();var s,i,c=null;te&&qe.nodeType===dr&&(c=qe,rn());var u=te?qe:e,g;Pt(()=>{const h=t()||null;var F=br;h!==s&&(g&&(h===null?Qn(g,()=>{g=null,i=null}):h===i?bn(g):st(g)),h&&h!==i&&(g=ot(()=>{if(c=te?c:document.createElementNS(F,h),gr(c,c),a){te&&Ua(h)&&c.append(document.createComment(""));var b=te?Wn(c):c.appendChild(hn());te&&(b===null?Ve(!1):yt(b)),a(c,b)}ea.nodes_end=c,u.before(c)})),s=h,s&&(i=s))},hr),o&&(Ve(!0),yt(u))}function Gr(e,t){var n=void 0,a;Pt(()=>{n!==(n=t())&&(a&&(st(a),a=null),n&&(a=ot(()=>{ta(()=>n(e))})))})}function la(e){var t,n,a="";if(typeof e=="string"||typeof e=="number")a+=e;else if(typeof e=="object")if(Array.isArray(e)){var r=e.length;for(t=0;t<r;t++)e[t]&&(n=la(e[t]))&&(a&&(a+=" "),a+=n)}else for(n in e)e[n]&&(a&&(a+=" "),a+=n);return a}function Yr(){for(var e,t,n=0,a="",r=arguments.length;n<r;n++)(e=arguments[n])&&(t=la(e))&&(a&&(a+=" "),a+=t);return a}function Ir(e){return typeof e=="object"?Yr(e):e??""}const Bn=[...` 	
\r\f \v\uFEFF`];function qr(e,t,n){var a=e==null?"":""+e;if(t&&(a=a?a+" "+t:t),n){for(var r in n)if(n[r])a=a?a+" "+r:r;else if(a.length)for(var l=r.length,o=0;(o=a.indexOf(r,o))>=0;){var s=o+l;(o===0||Bn.includes(a[o-1]))&&(s===a.length||Bn.includes(a[s]))?a=(o===0?"":a.substring(0,o))+a.substring(s+1):o=s}}return a===""?null:a}function Sn(e,t=!1){var n=t?" !important;":";",a="";for(var r in e){var l=e[r];l!=null&&l!==""&&(a+=" "+r+": "+l+n)}return a}function Xt(e){return e[0]!=="-"||e[1]!=="-"?e.toLowerCase():e}function Xr(e,t){if(t){var n="",a,r;if(Array.isArray(t)?(a=t[0],r=t[1]):a=t,e){e=String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();var l=!1,o=0,s=!1,i=[];a&&i.push(...Object.keys(a).map(Xt)),r&&i.push(...Object.keys(r).map(Xt));var c=0,u=-1;const v=e.length;for(var g=0;g<v;g++){var h=e[g];if(s?h==="/"&&e[g-1]==="*"&&(s=!1):l?l===h&&(l=!1):h==="/"&&e[g+1]==="*"?s=!0:h==='"'||h==="'"?l=h:h==="("?o++:h===")"&&o--,!s&&l===!1&&o===0){if(h===":"&&u===-1)u=g;else if(h===";"||g===v-1){if(u!==-1){var F=Xt(e.substring(c,u).trim());if(!i.includes(F)){h!==";"&&g++;var b=e.substring(c,g).trim();n+=" "+b+";"}}c=g+1,u=-1}}}}return a&&(n+=Sn(a)),r&&(n+=Sn(r,!0)),n=n.trim(),n===""?null:n}return e==null?null:String(e)}function xe(e,t,n,a,r,l){var o=e.__className;if(te||o!==n||o===void 0){var s=qr(n,a,l);(!te||s!==e.getAttribute("class"))&&(s==null?e.removeAttribute("class"):t?e.className=s:e.setAttribute("class",s)),e.__className=n}else if(l&&r!==l)for(var i in l){var c=!!l[i];(r==null||c!==!!r[i])&&e.classList.toggle(i,c)}return l}function Ht(e,t={},n,a){for(var r in n){var l=n[r];t[r]!==l&&(n[r]==null?e.style.removeProperty(r):e.style.setProperty(r,l,a))}}function Xe(e,t,n,a){var r=e.__style;if(te||r!==t){var l=Xr(t,a);(!te||l!==e.getAttribute("style"))&&(l==null?e.removeAttribute("style"):e.style.cssText=l),e.__style=t}else a&&(Array.isArray(a)?(Ht(e,n?.[0],a[0]),Ht(e,n?.[1],a[1],"important")):Ht(e,n,a));return a}function sn(e,t,n=!1){if(e.multiple){if(t==null)return;if(!Jn(t))return Fr();for(var a of e.options)a.selected=t.includes(Dn(a));return}for(a of e.options){var r=Dn(a);if(pr(r,t)){a.selected=!0;return}}(!n||t!==void 0)&&(e.selectedIndex=-1)}function Hr(e){var t=new MutationObserver(()=>{sn(e,e.__value)});t.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),mr(()=>{t.disconnect()})}function Dn(e){return"__value"in e?e.__value:e.value}const vt=Symbol("class"),kt=Symbol("style"),oa=Symbol("is custom element"),sa=Symbol("is html");function ia(e){if(te){var t=!1,n=()=>{if(!t){if(t=!0,e.hasAttribute("value")){var a=e.value;ie(e,"value",null),e.value=a}if(e.hasAttribute("checked")){var r=e.checked;ie(e,"checked",null),e.checked=r}}};e.__on_r=n,Ar(n),Er()}}function jr(e,t){t?e.hasAttribute("selected")||e.setAttribute("selected",""):e.removeAttribute("selected")}function ie(e,t,n,a){var r=ca(e);te&&(r[t]=e.getAttribute(t),t==="src"||t==="srcset"||t==="href"&&e.nodeName==="LINK")||r[t]!==(r[t]=n)&&(t==="loading"&&(e[Br]=n),n==null?e.removeAttribute(t):typeof n!="string"&&fa(e).includes(t)?e[t]=n:e.setAttribute(t,n))}function Ur(e,t,n,a,r=!1,l=!1){if(te&&r&&e.tagName==="INPUT"){var o=e,s=o.type==="checkbox"?"defaultChecked":"defaultValue";s in n||ia(o)}var i=ca(e),c=i[oa],u=!i[sa];let g=te&&c;g&&Ve(!1);var h=t||{},F=e.tagName==="OPTION";for(var b in t)b in n||(n[b]=null);n.class?n.class=Ir(n.class):n[vt]&&(n.class=null),n[kt]&&(n.style??=null);var v=fa(e);for(const m in n){let d=n[m];if(F&&m==="value"&&d==null){e.value=e.__value="",h[m]=d;continue}if(m==="class"){var p=e.namespaceURI==="http://www.w3.org/1999/xhtml";xe(e,p,d,a,t?.[vt],n[vt]),h[m]=d,h[vt]=n[vt];continue}if(m==="style"){Xe(e,d,t?.[kt],n[kt]),h[m]=d,h[kt]=n[kt];continue}var y=h[m];if(!(d===y&&!(d===void 0&&e.hasAttribute(m)))){h[m]=d;var x=m[0]+m[1];if(x!=="$$")if(x==="on"){const _={},E="$$"+m;let C=m.slice(2);var R=Ja(C);if(Za(C)&&(C=C.slice(0,-7),_.capture=!0),!R&&y){if(d!=null)continue;e.removeEventListener(C,h[E],_),h[E]=null}if(d!=null)if(R)e[`__${C}`]=d,Wa([C]);else{let L=function(T){h[m].call(this,T)};h[E]=Va(C,e,L,_)}else R&&(e[`__${C}`]=void 0)}else if(m==="style")ie(e,m,d);else if(m==="autofocus")wr(e,!!d);else if(!c&&(m==="__value"||m==="value"&&d!=null))e.value=e.__value=d;else if(m==="selected"&&F)jr(e,d);else{var w=m;u||(w=Ka(w));var B=w==="defaultValue"||w==="defaultChecked";if(d==null&&!c&&!B)if(i[m]=null,w==="value"||w==="checked"){let _=e;const E=t===void 0;if(w==="value"){let C=_.defaultValue;_.removeAttribute(w),_.defaultValue=C,_.value=_.__value=E?C:null}else{let C=_.defaultChecked;_.removeAttribute(w),_.defaultChecked=C,_.checked=E?C:!1}}else e.removeAttribute(m);else B||v.includes(w)&&(c||typeof d!="string")?(e[w]=d,w in i&&(i[w]=Mr)):typeof d!="function"&&ie(e,w,d)}}}return g&&Ve(!0),h}function Tn(e,t,n=[],a=[],r,l=!1,o=!1){vr(n,a,s=>{var i=void 0,c={},u=e.nodeName==="SELECT",g=!1;if(Pt(()=>{var F=t(...s.map(f)),b=Ur(e,i,F,r,l,o);g&&u&&"value"in F&&sn(e,F.value);for(let p of Object.getOwnPropertySymbols(c))F[p]||st(c[p]);for(let p of Object.getOwnPropertySymbols(F)){var v=F[p];p.description===_r&&(!i||v!==i[p])&&(c[p]&&st(c[p]),c[p]=ot(()=>Gr(e,()=>v))),b[p]=v}i=b}),u){var h=e;ta(()=>{sn(h,i.value,!0),Hr(h)})}g=!0})}function ca(e){return e.__attributes??={[oa]:e.nodeName.includes("-"),[sa]:e.namespaceURI===kr}}var xn=new Map;function fa(e){var t=e.getAttribute("is")||e.nodeName,n=xn.get(t);if(n)return n;xn.set(t,n=[]);for(var a,r=e,l=Element.prototype;l!==r;){a=Cr(r);for(var o in a)a[o].set&&n.push(o);r=yr(r)}return n}function Zr(e,t,n=t){var a=new WeakSet;Sr(e,"input",async r=>{var l=r?e.defaultValue:e.value;if(l=jt(e)?Ut(l):l,n(l),lt!==null&&a.add(lt),await na(),l!==(l=t())){var o=e.selectionStart,s=e.selectionEnd;e.value=l??"",s!==null&&(e.selectionStart=o,e.selectionEnd=Math.min(s,e.value.length))}}),(te&&e.defaultValue!==e.value||Z(t)==null&&e.value)&&(n(jt(e)?Ut(e.value):e.value),lt!==null&&a.add(lt)),Dr(()=>{var r=t();if(e===document.activeElement){var l=Tr??lt;if(a.has(l))return}jt(e)&&r===Ut(e.value)||e.type==="date"&&!r&&!e.value||r!==e.value&&(e.value=r??"")})}function jt(e){var t=e.type;return t==="number"||t==="range"}function Ut(e){return e===""?null:+e}const Vr=`Part,Color,Quantity,Is Spare
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
`,Wr=`Part,Color,Quantity,Is Spare
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
`,Kr=`Part,Color,Quantity,Is Spare
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
`,Jr=`Part,Color,Quantity,Is Spare
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
`,Qr=`Part,Color,Quantity,Is Spare
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
`,el=`Part,Color,Quantity,Is Spare
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
`,tl=`id,name,rgb,is_trans,num_parts,num_sets,y1,y2
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
`,{min:nl,max:al}=Math,We=(e,t=0,n=1)=>nl(al(t,e),n),gn=e=>{e._clipped=!1,e._unclipped=e.slice(0);for(let t=0;t<=3;t++)t<3?((e[t]<0||e[t]>255)&&(e._clipped=!0),e[t]=We(e[t],0,255)):t===3&&(e[t]=We(e[t],0,1));return e},ua={};for(let e of["Boolean","Number","String","Function","Array","Date","RegExp","Undefined","Null"])ua[`[object ${e}]`]=e.toLowerCase();function q(e){return ua[Object.prototype.toString.call(e)]||"object"}const G=(e,t=null)=>e.length>=3?Array.prototype.slice.call(e):q(e[0])=="object"&&t?t.split("").filter(n=>e[0][n]!==void 0).map(n=>e[0][n]):e[0].slice(0),ft=e=>{if(e.length<2)return null;const t=e.length-1;return q(e[t])=="string"?e[t].toLowerCase():null},{PI:Ot,min:da,max:ha}=Math,ke=e=>Math.round(e*100)/100,cn=e=>Math.round(e*100)/100,Ne=Ot*2,Zt=Ot/3,rl=Ot/180,ll=180/Ot;function ba(e){return[...e.slice(0,3).reverse(),...e.slice(3)]}const z={format:{},autodetect:[]};class M{constructor(...t){const n=this;if(q(t[0])==="object"&&t[0].constructor&&t[0].constructor===this.constructor)return t[0];let a=ft(t),r=!1;if(!a){r=!0,z.sorted||(z.autodetect=z.autodetect.sort((l,o)=>o.p-l.p),z.sorted=!0);for(let l of z.autodetect)if(a=l.test(...t),a)break}if(z.format[a]){const l=z.format[a].apply(null,r?t:t.slice(0,-1));n._rgb=gn(l)}else throw new Error("unknown format: "+t);n._rgb.length===3&&n._rgb.push(1)}toString(){return q(this.hex)=="function"?this.hex():`[${this._rgb.join(",")}]`}}const ol="3.1.2",O=(...e)=>new M(...e);O.version=ol;const it={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",gold:"#ffd700",goldenrod:"#daa520",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",laserlemon:"#ffff54",lavender:"#e6e6fa",lavenderblush:"#fff0f5",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrod:"#fafad2",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",maroon2:"#7f0000",maroon3:"#b03060",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",purple2:"#7f007f",purple3:"#a020f0",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"},sl=/^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/,il=/^#?([A-Fa-f0-9]{8}|[A-Fa-f0-9]{4})$/,ga=e=>{if(e.match(sl)){(e.length===4||e.length===7)&&(e=e.substr(1)),e.length===3&&(e=e.split(""),e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]);const t=parseInt(e,16),n=t>>16,a=t>>8&255,r=t&255;return[n,a,r,1]}if(e.match(il)){(e.length===5||e.length===9)&&(e=e.substr(1)),e.length===4&&(e=e.split(""),e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]+e[3]+e[3]);const t=parseInt(e,16),n=t>>24&255,a=t>>16&255,r=t>>8&255,l=Math.round((t&255)/255*100)/100;return[n,a,r,l]}throw new Error(`unknown hex color: ${e}`)},{round:At}=Math,Fa=(...e)=>{let[t,n,a,r]=G(e,"rgba"),l=ft(e)||"auto";r===void 0&&(r=1),l==="auto"&&(l=r<1?"rgba":"rgb"),t=At(t),n=At(n),a=At(a);let s="000000"+(t<<16|n<<8|a).toString(16);s=s.substr(s.length-6);let i="0"+At(r*255).toString(16);switch(i=i.substr(i.length-2),l.toLowerCase()){case"rgba":return`#${s}${i}`;case"argb":return`#${i}${s}`;default:return`#${s}`}};M.prototype.name=function(){const e=Fa(this._rgb,"rgb");for(let t of Object.keys(it))if(it[t]===e)return t.toLowerCase();return e};z.format.named=e=>{if(e=e.toLowerCase(),it[e])return ga(it[e]);throw new Error("unknown color name: "+e)};z.autodetect.push({p:5,test:(e,...t)=>{if(!t.length&&q(e)==="string"&&it[e.toLowerCase()])return"named"}});M.prototype.alpha=function(e,t=!1){return e!==void 0&&q(e)==="number"?t?(this._rgb[3]=e,this):new M([this._rgb[0],this._rgb[1],this._rgb[2],e],"rgb"):this._rgb[3]};M.prototype.clipped=function(){return this._rgb._clipped||!1};const Re={Kn:18,labWhitePoint:"d65",Xn:.95047,Yn:1,Zn:1.08883,kE:216/24389,kKE:8,kK:24389/27,RefWhiteRGB:{X:.95047,Y:1,Z:1.08883},MtxRGB2XYZ:{m00:.4124564390896922,m01:.21267285140562253,m02:.0193338955823293,m10:.357576077643909,m11:.715152155287818,m12:.11919202588130297,m20:.18043748326639894,m21:.07217499330655958,m22:.9503040785363679},MtxXYZ2RGB:{m00:3.2404541621141045,m01:-.9692660305051868,m02:.055643430959114726,m10:-1.5371385127977166,m11:1.8760108454466942,m12:-.2040259135167538,m20:-.498531409556016,m21:.041556017530349834,m22:1.0572251882231791},As:.9414285350000001,Bs:1.040417467,Cs:1.089532651,MtxAdaptMa:{m00:.8951,m01:-.7502,m02:.0389,m10:.2664,m11:1.7135,m12:-.0685,m20:-.1614,m21:.0367,m22:1.0296},MtxAdaptMaI:{m00:.9869929054667123,m01:.43230526972339456,m02:-.008528664575177328,m10:-.14705425642099013,m11:.5183602715367776,m12:.04004282165408487,m20:.15996265166373125,m21:.0492912282128556,m22:.9684866957875502}},cl=new Map([["a",[1.0985,.35585]],["b",[1.0985,.35585]],["c",[.98074,1.18232]],["d50",[.96422,.82521]],["d55",[.95682,.92149]],["d65",[.95047,1.08883]],["e",[1,1,1]],["f2",[.99186,.67393]],["f7",[.95041,1.08747]],["f11",[1.00962,.6435]],["icc",[.96422,.82521]]]);function Oe(e){const t=cl.get(String(e).toLowerCase());if(!t)throw new Error("unknown Lab illuminant "+e);Re.labWhitePoint=e,Re.Xn=t[0],Re.Zn=t[1]}function _t(){return Re.labWhitePoint}const Fn=(...e)=>{e=G(e,"lab");const[t,n,a]=e,[r,l,o]=fl(t,n,a),[s,i,c]=pa(r,l,o);return[s,i,c,e.length>3?e[3]:1]},fl=(e,t,n)=>{const{kE:a,kK:r,kKE:l,Xn:o,Yn:s,Zn:i}=Re,c=(e+16)/116,u=.002*t+c,g=c-.005*n,h=u*u*u,F=g*g*g,b=h>a?h:(116*u-16)/r,v=e>l?Math.pow((e+16)/116,3):e/r,p=F>a?F:(116*g-16)/r,y=b*o,x=v*s,R=p*i;return[y,x,R]},Vt=e=>{const t=Math.sign(e);return e=Math.abs(e),(e<=.0031308?e*12.92:1.055*Math.pow(e,1/2.4)-.055)*t},pa=(e,t,n)=>{const{MtxAdaptMa:a,MtxAdaptMaI:r,MtxXYZ2RGB:l,RefWhiteRGB:o,Xn:s,Yn:i,Zn:c}=Re,u=s*a.m00+i*a.m10+c*a.m20,g=s*a.m01+i*a.m11+c*a.m21,h=s*a.m02+i*a.m12+c*a.m22,F=o.X*a.m00+o.Y*a.m10+o.Z*a.m20,b=o.X*a.m01+o.Y*a.m11+o.Z*a.m21,v=o.X*a.m02+o.Y*a.m12+o.Z*a.m22,p=(e*a.m00+t*a.m10+n*a.m20)*(F/u),y=(e*a.m01+t*a.m11+n*a.m21)*(b/g),x=(e*a.m02+t*a.m12+n*a.m22)*(v/h),R=p*r.m00+y*r.m10+x*r.m20,w=p*r.m01+y*r.m11+x*r.m21,B=p*r.m02+y*r.m12+x*r.m22,m=Vt(R*l.m00+w*l.m10+B*l.m20),d=Vt(R*l.m01+w*l.m11+B*l.m21),_=Vt(R*l.m02+w*l.m12+B*l.m22);return[m*255,d*255,_*255]},pn=(...e)=>{const[t,n,a,...r]=G(e,"rgb"),[l,o,s]=ma(t,n,a),[i,c,u]=ul(l,o,s);return[i,c,u,...r.length>0&&r[0]<1?[r[0]]:[]]};function ul(e,t,n){const{Xn:a,Yn:r,Zn:l,kE:o,kK:s}=Re,i=e/a,c=t/r,u=n/l,g=i>o?Math.pow(i,1/3):(s*i+16)/116,h=c>o?Math.pow(c,1/3):(s*c+16)/116,F=u>o?Math.pow(u,1/3):(s*u+16)/116;return[116*h-16,500*(g-h),200*(h-F)]}function Wt(e){const t=Math.sign(e);return e=Math.abs(e),(e<=.04045?e/12.92:Math.pow((e+.055)/1.055,2.4))*t}const ma=(e,t,n)=>{e=Wt(e/255),t=Wt(t/255),n=Wt(n/255);const{MtxRGB2XYZ:a,MtxAdaptMa:r,MtxAdaptMaI:l,Xn:o,Yn:s,Zn:i,As:c,Bs:u,Cs:g}=Re;let h=e*a.m00+t*a.m10+n*a.m20,F=e*a.m01+t*a.m11+n*a.m21,b=e*a.m02+t*a.m12+n*a.m22;const v=o*r.m00+s*r.m10+i*r.m20,p=o*r.m01+s*r.m11+i*r.m21,y=o*r.m02+s*r.m12+i*r.m22;let x=h*r.m00+F*r.m10+b*r.m20,R=h*r.m01+F*r.m11+b*r.m21,w=h*r.m02+F*r.m12+b*r.m22;return x*=v/c,R*=p/u,w*=y/g,h=x*l.m00+R*l.m10+w*l.m20,F=x*l.m01+R*l.m11+w*l.m21,b=x*l.m02+R*l.m12+w*l.m22,[h,F,b]};M.prototype.lab=function(){return pn(this._rgb)};const dl=(...e)=>new M(...e,"lab");Object.assign(O,{lab:dl,getLabWhitePoint:_t,setLabWhitePoint:Oe});z.format.lab=Fn;z.autodetect.push({p:2,test:(...e)=>{if(e=G(e,"lab"),q(e)==="array"&&e.length===3)return"lab"}});M.prototype.darken=function(e=1){const t=this,n=t.lab();return n[0]-=Re.Kn*e,new M(n,"lab").alpha(t.alpha(),!0)};M.prototype.brighten=function(e=1){return this.darken(-e)};M.prototype.darker=M.prototype.darken;M.prototype.brighter=M.prototype.brighten;M.prototype.get=function(e){const[t,n]=e.split("."),a=this[t]();if(n){const r=t.indexOf(n)-(t.substr(0,2)==="ok"?2:0);if(r>-1)return a[r];throw new Error(`unknown channel ${n} in mode ${t}`)}else return a};const{pow:hl}=Math,bl=1e-7,gl=20;M.prototype.luminance=function(e,t="rgb"){if(e!==void 0&&q(e)==="number"){if(e===0)return new M([0,0,0,this._rgb[3]],"rgb");if(e===1)return new M([255,255,255,this._rgb[3]],"rgb");let n=this.luminance(),a=gl;const r=(o,s)=>{const i=o.interpolate(s,.5,t),c=i.luminance();return Math.abs(e-c)<bl||!a--?i:c>e?r(o,i):r(i,s)},l=(n>e?r(new M([0,0,0]),this):r(this,new M([255,255,255]))).rgb();return new M([...l,this._rgb[3]])}return Fl(...this._rgb.slice(0,3))};const Fl=(e,t,n)=>(e=Kt(e),t=Kt(t),n=Kt(n),.2126*e+.7152*t+.0722*n),Kt=e=>(e/=255,e<=.03928?e/12.92:hl((e+.055)/1.055,2.4)),de={},ct=(e,t,n=.5,...a)=>{let r=a[0]||"lrgb";if(!de[r]&&!a.length&&(r=Object.keys(de)[0]),!de[r])throw new Error(`interpolation mode ${r} is not defined`);return q(e)!=="object"&&(e=new M(e)),q(t)!=="object"&&(t=new M(t)),de[r](e,t,n).alpha(e.alpha()+n*(t.alpha()-e.alpha()))};M.prototype.mix=M.prototype.interpolate=function(e,t=.5,...n){return ct(this,e,t,...n)};M.prototype.premultiply=function(e=!1){const t=this._rgb,n=t[3];return e?(this._rgb=[t[0]*n,t[1]*n,t[2]*n,n],this):new M([t[0]*n,t[1]*n,t[2]*n,n],"rgb")};const{sin:pl,cos:ml}=Math,va=(...e)=>{let[t,n,a]=G(e,"lch");return isNaN(a)&&(a=0),a=a*rl,[t,ml(a)*n,pl(a)*n]},mn=(...e)=>{e=G(e,"lch");const[t,n,a]=e,[r,l,o]=va(t,n,a),[s,i,c]=Fn(r,l,o);return[s,i,c,e.length>3?e[3]:1]},vl=(...e)=>{const t=ba(G(e,"hcl"));return mn(...t)},{sqrt:kl,atan2:yl,round:_l}=Math,ka=(...e)=>{const[t,n,a]=G(e,"lab"),r=kl(n*n+a*a);let l=(yl(a,n)*ll+360)%360;return _l(r*1e4)===0&&(l=Number.NaN),[t,r,l]},vn=(...e)=>{const[t,n,a,...r]=G(e,"rgb"),[l,o,s]=pn(t,n,a),[i,c,u]=ka(l,o,s);return[i,c,u,...r.length>0&&r[0]<1?[r[0]]:[]]};M.prototype.lch=function(){return vn(this._rgb)};M.prototype.hcl=function(){return ba(vn(this._rgb))};const Cl=(...e)=>new M(...e,"lch"),wl=(...e)=>new M(...e,"hcl");Object.assign(O,{lch:Cl,hcl:wl});z.format.lch=mn;z.format.hcl=vl;["lch","hcl"].forEach(e=>z.autodetect.push({p:2,test:(...t)=>{if(t=G(t,e),q(t)==="array"&&t.length===3)return e}}));M.prototype.saturate=function(e=1){const t=this,n=t.lch();return n[1]+=Re.Kn*e,n[1]<0&&(n[1]=0),new M(n,"lch").alpha(t.alpha(),!0)};M.prototype.desaturate=function(e=1){return this.saturate(-e)};M.prototype.set=function(e,t,n=!1){const[a,r]=e.split("."),l=this[a]();if(r){const o=a.indexOf(r)-(a.substr(0,2)==="ok"?2:0);if(o>-1){if(q(t)=="string")switch(t.charAt(0)){case"+":l[o]+=+t;break;case"-":l[o]+=+t;break;case"*":l[o]*=+t.substr(1);break;case"/":l[o]/=+t.substr(1);break;default:l[o]=+t}else if(q(t)==="number")l[o]=t;else throw new Error("unsupported value for Color.set");const s=new M(l,a);return n?(this._rgb=s._rgb,this):s}throw new Error(`unknown channel ${r} in mode ${a}`)}else return l};M.prototype.tint=function(e=.5,...t){return ct(this,"white",e,...t)};M.prototype.shade=function(e=.5,...t){return ct(this,"black",e,...t)};const Ml=(e,t,n)=>{const a=e._rgb,r=t._rgb;return new M(a[0]+n*(r[0]-a[0]),a[1]+n*(r[1]-a[1]),a[2]+n*(r[2]-a[2]),"rgb")};de.rgb=Ml;const{sqrt:Jt,pow:nt}=Math,Al=(e,t,n)=>{const[a,r,l]=e._rgb,[o,s,i]=t._rgb;return new M(Jt(nt(a,2)*(1-n)+nt(o,2)*n),Jt(nt(r,2)*(1-n)+nt(s,2)*n),Jt(nt(l,2)*(1-n)+nt(i,2)*n),"rgb")};de.lrgb=Al;const El=(e,t,n)=>{const a=e.lab(),r=t.lab();return new M(a[0]+n*(r[0]-a[0]),a[1]+n*(r[1]-a[1]),a[2]+n*(r[2]-a[2]),"lab")};de.lab=El;const ut=(e,t,n,a)=>{let r,l;a==="hsl"?(r=e.hsl(),l=t.hsl()):a==="hsv"?(r=e.hsv(),l=t.hsv()):a==="hcg"?(r=e.hcg(),l=t.hcg()):a==="hsi"?(r=e.hsi(),l=t.hsi()):a==="lch"||a==="hcl"?(a="hcl",r=e.hcl(),l=t.hcl()):a==="oklch"&&(r=e.oklch().reverse(),l=t.oklch().reverse());let o,s,i,c,u,g;(a.substr(0,1)==="h"||a==="oklch")&&([o,i,u]=r,[s,c,g]=l);let h,F,b,v;return!isNaN(o)&&!isNaN(s)?(s>o&&s-o>180?v=s-(o+360):s<o&&o-s>180?v=s+360-o:v=s-o,F=o+n*v):isNaN(o)?isNaN(s)?F=Number.NaN:(F=s,(u==1||u==0)&&a!="hsv"&&(h=c)):(F=o,(g==1||g==0)&&a!="hsv"&&(h=i)),h===void 0&&(h=i+n*(c-i)),b=u+n*(g-u),a==="oklch"?new M([b,h,F],a):new M([F,h,b],a)},ya=(e,t,n)=>ut(e,t,n,"lch");de.lch=ya;de.hcl=ya;const Bl=e=>{if(q(e)=="number"&&e>=0&&e<=16777215){const t=e>>16,n=e>>8&255,a=e&255;return[t,n,a,1]}throw new Error("unknown num color: "+e)},Sl=(...e)=>{const[t,n,a]=G(e,"rgb");return(t<<16)+(n<<8)+a};M.prototype.num=function(){return Sl(this._rgb)};const Dl=(...e)=>new M(...e,"num");Object.assign(O,{num:Dl});z.format.num=Bl;z.autodetect.push({p:5,test:(...e)=>{if(e.length===1&&q(e[0])==="number"&&e[0]>=0&&e[0]<=16777215)return"num"}});const Tl=(e,t,n)=>{const a=e.num(),r=t.num();return new M(a+n*(r-a),"num")};de.num=Tl;const{floor:xl}=Math,Rl=(...e)=>{e=G(e,"hcg");let[t,n,a]=e,r,l,o;a=a*255;const s=n*255;if(n===0)r=l=o=a;else{t===360&&(t=0),t>360&&(t-=360),t<0&&(t+=360),t/=60;const i=xl(t),c=t-i,u=a*(1-n),g=u+s*(1-c),h=u+s*c,F=u+s;switch(i){case 0:[r,l,o]=[F,h,u];break;case 1:[r,l,o]=[g,F,u];break;case 2:[r,l,o]=[u,F,h];break;case 3:[r,l,o]=[u,g,F];break;case 4:[r,l,o]=[h,u,F];break;case 5:[r,l,o]=[F,u,g];break}}return[r,l,o,e.length>3?e[3]:1]},Ll=(...e)=>{const[t,n,a]=G(e,"rgb"),r=da(t,n,a),l=ha(t,n,a),o=l-r,s=o*100/255,i=r/(255-o)*100;let c;return o===0?c=Number.NaN:(t===l&&(c=(n-a)/o),n===l&&(c=2+(a-t)/o),a===l&&(c=4+(t-n)/o),c*=60,c<0&&(c+=360)),[c,s,i]};M.prototype.hcg=function(){return Ll(this._rgb)};const Pl=(...e)=>new M(...e,"hcg");O.hcg=Pl;z.format.hcg=Rl;z.autodetect.push({p:1,test:(...e)=>{if(e=G(e,"hcg"),q(e)==="array"&&e.length===3)return"hcg"}});const $l=(e,t,n)=>ut(e,t,n,"hcg");de.hcg=$l;const{cos:at}=Math,Nl=(...e)=>{e=G(e,"hsi");let[t,n,a]=e,r,l,o;return isNaN(t)&&(t=0),isNaN(n)&&(n=0),t>360&&(t-=360),t<0&&(t+=360),t/=360,t<1/3?(o=(1-n)/3,r=(1+n*at(Ne*t)/at(Zt-Ne*t))/3,l=1-(o+r)):t<2/3?(t-=1/3,r=(1-n)/3,l=(1+n*at(Ne*t)/at(Zt-Ne*t))/3,o=1-(r+l)):(t-=2/3,l=(1-n)/3,o=(1+n*at(Ne*t)/at(Zt-Ne*t))/3,r=1-(l+o)),r=We(a*r*3),l=We(a*l*3),o=We(a*o*3),[r*255,l*255,o*255,e.length>3?e[3]:1]},{min:Ol,sqrt:zl,acos:Gl}=Math,Yl=(...e)=>{let[t,n,a]=G(e,"rgb");t/=255,n/=255,a/=255;let r;const l=Ol(t,n,a),o=(t+n+a)/3,s=o>0?1-l/o:0;return s===0?r=NaN:(r=(t-n+(t-a))/2,r/=zl((t-n)*(t-n)+(t-a)*(n-a)),r=Gl(r),a>n&&(r=Ne-r),r/=Ne),[r*360,s,o]};M.prototype.hsi=function(){return Yl(this._rgb)};const Il=(...e)=>new M(...e,"hsi");O.hsi=Il;z.format.hsi=Nl;z.autodetect.push({p:2,test:(...e)=>{if(e=G(e,"hsi"),q(e)==="array"&&e.length===3)return"hsi"}});const ql=(e,t,n)=>ut(e,t,n,"hsi");de.hsi=ql;const fn=(...e)=>{e=G(e,"hsl");const[t,n,a]=e;let r,l,o;if(n===0)r=l=o=a*255;else{const s=[0,0,0],i=[0,0,0],c=a<.5?a*(1+n):a+n-a*n,u=2*a-c,g=t/360;s[0]=g+1/3,s[1]=g,s[2]=g-1/3;for(let h=0;h<3;h++)s[h]<0&&(s[h]+=1),s[h]>1&&(s[h]-=1),6*s[h]<1?i[h]=u+(c-u)*6*s[h]:2*s[h]<1?i[h]=c:3*s[h]<2?i[h]=u+(c-u)*(2/3-s[h])*6:i[h]=u;[r,l,o]=[i[0]*255,i[1]*255,i[2]*255]}return e.length>3?[r,l,o,e[3]]:[r,l,o,1]},_a=(...e)=>{e=G(e,"rgba");let[t,n,a]=e;t/=255,n/=255,a/=255;const r=da(t,n,a),l=ha(t,n,a),o=(l+r)/2;let s,i;return l===r?(s=0,i=Number.NaN):s=o<.5?(l-r)/(l+r):(l-r)/(2-l-r),t==l?i=(n-a)/(l-r):n==l?i=2+(a-t)/(l-r):a==l&&(i=4+(t-n)/(l-r)),i*=60,i<0&&(i+=360),e.length>3&&e[3]!==void 0?[i,s,o,e[3]]:[i,s,o]};M.prototype.hsl=function(){return _a(this._rgb)};const Xl=(...e)=>new M(...e,"hsl");O.hsl=Xl;z.format.hsl=fn;z.autodetect.push({p:2,test:(...e)=>{if(e=G(e,"hsl"),q(e)==="array"&&e.length===3)return"hsl"}});const Hl=(e,t,n)=>ut(e,t,n,"hsl");de.hsl=Hl;const{floor:jl}=Math,Ul=(...e)=>{e=G(e,"hsv");let[t,n,a]=e,r,l,o;if(a*=255,n===0)r=l=o=a;else{t===360&&(t=0),t>360&&(t-=360),t<0&&(t+=360),t/=60;const s=jl(t),i=t-s,c=a*(1-n),u=a*(1-n*i),g=a*(1-n*(1-i));switch(s){case 0:[r,l,o]=[a,g,c];break;case 1:[r,l,o]=[u,a,c];break;case 2:[r,l,o]=[c,a,g];break;case 3:[r,l,o]=[c,u,a];break;case 4:[r,l,o]=[g,c,a];break;case 5:[r,l,o]=[a,c,u];break}}return[r,l,o,e.length>3?e[3]:1]},{min:Zl,max:Vl}=Math,Wl=(...e)=>{e=G(e,"rgb");let[t,n,a]=e;const r=Zl(t,n,a),l=Vl(t,n,a),o=l-r;let s,i,c;return c=l/255,l===0?(s=Number.NaN,i=0):(i=o/l,t===l&&(s=(n-a)/o),n===l&&(s=2+(a-t)/o),a===l&&(s=4+(t-n)/o),s*=60,s<0&&(s+=360)),[s,i,c]};M.prototype.hsv=function(){return Wl(this._rgb)};const Kl=(...e)=>new M(...e,"hsv");O.hsv=Kl;z.format.hsv=Ul;z.autodetect.push({p:2,test:(...e)=>{if(e=G(e,"hsv"),q(e)==="array"&&e.length===3)return"hsv"}});const Jl=(e,t,n)=>ut(e,t,n,"hsv");de.hsv=Jl;function xt(e,t){let n=e.length;Array.isArray(e[0])||(e=[e]),Array.isArray(t[0])||(t=t.map(o=>[o]));let a=t[0].length,r=t[0].map((o,s)=>t.map(i=>i[s])),l=e.map(o=>r.map(s=>Array.isArray(o)?o.reduce((i,c,u)=>i+c*(s[u]||0),0):s.reduce((i,c)=>i+c*o,0)));return n===1&&(l=l[0]),a===1?l.map(o=>o[0]):l}const kn=(...e)=>{e=G(e,"lab");const[t,n,a,...r]=e,[l,o,s]=Ql([t,n,a]),[i,c,u]=pa(l,o,s);return[i,c,u,...r.length>0&&r[0]<1?[r[0]]:[]]};function Ql(e){var t=[[1.2268798758459243,-.5578149944602171,.2813910456659647],[-.0405757452148008,1.112286803280317,-.0717110580655164],[-.0763729366746601,-.4214933324022432,1.5869240198367816]],n=[[1,.3963377773761749,.2158037573099136],[1,-.1055613458156586,-.0638541728258133],[1,-.0894841775298119,-1.2914855480194092]],a=xt(n,e);return xt(t,a.map(r=>r**3))}const yn=(...e)=>{const[t,n,a,...r]=G(e,"rgb"),l=ma(t,n,a);return[...eo(l),...r.length>0&&r[0]<1?[r[0]]:[]]};function eo(e){const t=[[.819022437996703,.3619062600528904,-.1288737815209879],[.0329836539323885,.9292868615863434,.0361446663506424],[.0481771893596242,.2642395317527308,.6335478284694309]],n=[[.210454268309314,.7936177747023054,-.0040720430116193],[1.9779985324311684,-2.42859224204858,.450593709617411],[.0259040424655478,.7827717124575296,-.8086757549230774]],a=xt(t,e);return xt(n,a.map(r=>Math.cbrt(r)))}M.prototype.oklab=function(){return yn(this._rgb)};const to=(...e)=>new M(...e,"oklab");Object.assign(O,{oklab:to});z.format.oklab=kn;z.autodetect.push({p:2,test:(...e)=>{if(e=G(e,"oklab"),q(e)==="array"&&e.length===3)return"oklab"}});const no=(e,t,n)=>{const a=e.oklab(),r=t.oklab();return new M(a[0]+n*(r[0]-a[0]),a[1]+n*(r[1]-a[1]),a[2]+n*(r[2]-a[2]),"oklab")};de.oklab=no;const ao=(e,t,n)=>ut(e,t,n,"oklch");de.oklch=ao;const{pow:Qt,sqrt:en,PI:tn,cos:Rn,sin:Ln,atan2:ro}=Math,lo=(e,t="lrgb",n=null)=>{const a=e.length;n||(n=Array.from(new Array(a)).map(()=>1));const r=a/n.reduce(function(g,h){return g+h});if(n.forEach((g,h)=>{n[h]*=r}),e=e.map(g=>new M(g)),t==="lrgb")return oo(e,n);const l=e.shift(),o=l.get(t),s=[];let i=0,c=0;for(let g=0;g<o.length;g++)if(o[g]=(o[g]||0)*n[0],s.push(isNaN(o[g])?0:n[0]),t.charAt(g)==="h"&&!isNaN(o[g])){const h=o[g]/180*tn;i+=Rn(h)*n[0],c+=Ln(h)*n[0]}let u=l.alpha()*n[0];e.forEach((g,h)=>{const F=g.get(t);u+=g.alpha()*n[h+1];for(let b=0;b<o.length;b++)if(!isNaN(F[b]))if(s[b]+=n[h+1],t.charAt(b)==="h"){const v=F[b]/180*tn;i+=Rn(v)*n[h+1],c+=Ln(v)*n[h+1]}else o[b]+=F[b]*n[h+1]});for(let g=0;g<o.length;g++)if(t.charAt(g)==="h"){let h=ro(c/s[g],i/s[g])/tn*180;for(;h<0;)h+=360;for(;h>=360;)h-=360;o[g]=h}else o[g]=o[g]/s[g];return u/=a,new M(o,t).alpha(u>.99999?1:u,!0)},oo=(e,t)=>{const n=e.length,a=[0,0,0,0];for(let r=0;r<e.length;r++){const l=e[r],o=t[r]/n,s=l._rgb;a[0]+=Qt(s[0],2)*o,a[1]+=Qt(s[1],2)*o,a[2]+=Qt(s[2],2)*o,a[3]+=s[3]*o}return a[0]=en(a[0]),a[1]=en(a[1]),a[2]=en(a[2]),a[3]>.9999999&&(a[3]=1),new M(gn(a))},{pow:so}=Math;function Rt(e){let t="rgb",n=O("#ccc"),a=0,r=[0,1],l=[],o=[0,0],s=!1,i=[],c=!1,u=0,g=1,h=!1,F={},b=!0,v=1;const p=function(d){if(d=d||["#fff","#000"],d&&q(d)==="string"&&O.brewer&&O.brewer[d.toLowerCase()]&&(d=O.brewer[d.toLowerCase()]),q(d)==="array"){d.length===1&&(d=[d[0],d[0]]),d=d.slice(0);for(let _=0;_<d.length;_++)d[_]=O(d[_]);l.length=0;for(let _=0;_<d.length;_++)l.push(_/(d.length-1))}return B(),i=d},y=function(d){if(s!=null){const _=s.length-1;let E=0;for(;E<_&&d>=s[E];)E++;return E-1}return 0};let x=d=>d,R=d=>d;const w=function(d,_){let E,C;if(_==null&&(_=!1),isNaN(d)||d===null)return n;_?C=d:s&&s.length>2?C=y(d)/(s.length-2):g!==u?C=(d-u)/(g-u):C=1,C=R(C),_||(C=x(C)),v!==1&&(C=so(C,v)),C=o[0]+C*(1-o[0]-o[1]),C=We(C,0,1);const L=Math.floor(C*1e4);if(b&&F[L])E=F[L];else{if(q(i)==="array")for(let T=0;T<l.length;T++){const N=l[T];if(C<=N){E=i[T];break}if(C>=N&&T===l.length-1){E=i[T];break}if(C>N&&C<l[T+1]){C=(C-N)/(l[T+1]-N),E=O.interpolate(i[T],i[T+1],C,t);break}}else q(i)==="function"&&(E=i(C));b&&(F[L]=E)}return E};var B=()=>F={};p(e);const m=function(d){const _=O(w(d));return c&&_[c]?_[c]():_};return m.classes=function(d){if(d!=null){if(q(d)==="array")s=d,r=[d[0],d[d.length-1]];else{const _=O.analyze(r);d===0?s=[_.min,_.max]:s=O.limits(_,"e",d)}return m}return s},m.domain=function(d){if(!arguments.length)return r;u=d[0],g=d[d.length-1],l=[];const _=i.length;if(d.length===_&&u!==g)for(let E of Array.from(d))l.push((E-u)/(g-u));else{for(let E=0;E<_;E++)l.push(E/(_-1));if(d.length>2){const E=d.map((L,T)=>T/(d.length-1)),C=d.map(L=>(L-u)/(g-u));C.every((L,T)=>E[T]===L)||(R=L=>{if(L<=0||L>=1)return L;let T=0;for(;L>=C[T+1];)T++;const N=(L-C[T])/(C[T+1]-C[T]);return E[T]+N*(E[T+1]-E[T])})}}return r=[u,g],m},m.mode=function(d){return arguments.length?(t=d,B(),m):t},m.range=function(d,_){return p(d),m},m.out=function(d){return c=d,m},m.spread=function(d){return arguments.length?(a=d,m):a},m.correctLightness=function(d){return d==null&&(d=!0),h=d,B(),h?x=function(_){const E=w(0,!0).lab()[0],C=w(1,!0).lab()[0],L=E>C;let T=w(_,!0).lab()[0];const N=E+(C-E)*_;let W=T-N,$=0,D=1,U=20;for(;Math.abs(W)>.01&&U-- >0;)(function(){return L&&(W*=-1),W<0?($=_,_+=(D-_)*.5):(D=_,_+=($-_)*.5),T=w(_,!0).lab()[0],W=T-N})();return _}:x=_=>_,m},m.padding=function(d){return d!=null?(q(d)==="number"&&(d=[d,d]),o=d,m):o},m.colors=function(d,_){arguments.length<2&&(_="hex");let E=[];if(arguments.length===0)E=i.slice(0);else if(d===1)E=[m(.5)];else if(d>1){const C=r[0],L=r[1]-C;E=io(0,d).map(T=>m(C+T/(d-1)*L))}else{e=[];let C=[];if(s&&s.length>2)for(let L=1,T=s.length,N=1<=T;N?L<T:L>T;N?L++:L--)C.push((s[L-1]+s[L])*.5);else C=r;E=C.map(L=>m(L))}return O[_]&&(E=E.map(C=>C[_]())),E},m.cache=function(d){return d!=null?(b=d,m):b},m.gamma=function(d){return d!=null?(v=d,m):v},m.nodata=function(d){return d!=null?(n=O(d),m):n},m}function io(e,t,n){let a=[],r=e<t,l=t;for(let o=e;r?o<l:o>l;r?o++:o--)a.push(o);return a}const co=function(e){let t=[1,1];for(let n=1;n<e;n++){let a=[1];for(let r=1;r<=t.length;r++)a[r]=(t[r]||0)+t[r-1];t=a}return t},fo=function(e){let t,n,a,r;if(e=e.map(l=>new M(l)),e.length===2)[n,a]=e.map(l=>l.lab()),t=function(l){const o=[0,1,2].map(s=>n[s]+l*(a[s]-n[s]));return new M(o,"lab")};else if(e.length===3)[n,a,r]=e.map(l=>l.lab()),t=function(l){const o=[0,1,2].map(s=>(1-l)*(1-l)*n[s]+2*(1-l)*l*a[s]+l*l*r[s]);return new M(o,"lab")};else if(e.length===4){let l;[n,a,r,l]=e.map(o=>o.lab()),t=function(o){const s=[0,1,2].map(i=>(1-o)*(1-o)*(1-o)*n[i]+3*(1-o)*(1-o)*o*a[i]+3*(1-o)*o*o*r[i]+o*o*o*l[i]);return new M(s,"lab")}}else if(e.length>=5){let l,o,s;l=e.map(i=>i.lab()),s=e.length-1,o=co(s),t=function(i){const c=1-i,u=[0,1,2].map(g=>l.reduce((h,F,b)=>h+o[b]*c**(s-b)*i**b*F[g],0));return new M(u,"lab")}}else throw new RangeError("No point in running bezier with only one color.");return t},uo=e=>{const t=fo(e);return t.scale=()=>Rt(t),t},{round:Ca}=Math;M.prototype.rgb=function(e=!0){return e===!1?this._rgb.slice(0,3):this._rgb.slice(0,3).map(Ca)};M.prototype.rgba=function(e=!0){return this._rgb.slice(0,4).map((t,n)=>n<3?e===!1?t:Ca(t):t)};const ho=(...e)=>new M(...e,"rgb");Object.assign(O,{rgb:ho});z.format.rgb=(...e)=>{const t=G(e,"rgba");return t[3]===void 0&&(t[3]=1),t};z.autodetect.push({p:3,test:(...e)=>{if(e=G(e,"rgba"),q(e)==="array"&&(e.length===3||e.length===4&&q(e[3])=="number"&&e[3]>=0&&e[3]<=1))return"rgb"}});const Be=(e,t,n)=>{if(!Be[n])throw new Error("unknown blend mode "+n);return Be[n](e,t)},He=e=>(t,n)=>{const a=O(n).rgb(),r=O(t).rgb();return O.rgb(e(a,r))},je=e=>(t,n)=>{const a=[];return a[0]=e(t[0],n[0]),a[1]=e(t[1],n[1]),a[2]=e(t[2],n[2]),a},bo=e=>e,go=(e,t)=>e*t/255,Fo=(e,t)=>e>t?t:e,po=(e,t)=>e>t?e:t,mo=(e,t)=>255*(1-(1-e/255)*(1-t/255)),vo=(e,t)=>t<128?2*e*t/255:255*(1-2*(1-e/255)*(1-t/255)),ko=(e,t)=>255*(1-(1-t/255)/(e/255)),yo=(e,t)=>e===255?255:(e=255*(t/255)/(1-e/255),e>255?255:e);Be.normal=He(je(bo));Be.multiply=He(je(go));Be.screen=He(je(mo));Be.overlay=He(je(vo));Be.darken=He(je(Fo));Be.lighten=He(je(po));Be.dodge=He(je(yo));Be.burn=He(je(ko));const{pow:_o,sin:Co,cos:wo}=Math;function Mo(e=300,t=-1.5,n=1,a=1,r=[0,1]){let l=0,o;q(r)==="array"?o=r[1]-r[0]:(o=0,r=[r,r]);const s=function(i){const c=Ne*((e+120)/360+t*i),u=_o(r[0]+o*i,a),h=(l!==0?n[0]+i*l:n)*u*(1-u)/2,F=wo(c),b=Co(c),v=u+h*(-.14861*F+1.78277*b),p=u+h*(-.29227*F-.90649*b),y=u+h*(1.97294*F);return O(gn([v*255,p*255,y*255,1]))};return s.start=function(i){return i==null?e:(e=i,s)},s.rotations=function(i){return i==null?t:(t=i,s)},s.gamma=function(i){return i==null?a:(a=i,s)},s.hue=function(i){return i==null?n:(n=i,q(n)==="array"?(l=n[1]-n[0],l===0&&(n=n[1])):l=0,s)},s.lightness=function(i){return i==null?r:(q(i)==="array"?(r=i,o=i[1]-i[0]):(r=[i,i],o=0),s)},s.scale=()=>O.scale(s),s.hue(n),s}const Ao="0123456789abcdef",{floor:Eo,random:Bo}=Math,So=()=>{let e="#";for(let t=0;t<6;t++)e+=Ao.charAt(Eo(Bo()*16));return new M(e,"hex")},{log:Pn,pow:Do,floor:To,abs:xo}=Math;function wa(e,t=null){const n={min:Number.MAX_VALUE,max:Number.MAX_VALUE*-1,sum:0,values:[],count:0};return q(e)==="object"&&(e=Object.values(e)),e.forEach(a=>{t&&q(a)==="object"&&(a=a[t]),a!=null&&!isNaN(a)&&(n.values.push(a),n.sum+=a,a<n.min&&(n.min=a),a>n.max&&(n.max=a),n.count+=1)}),n.domain=[n.min,n.max],n.limits=(a,r)=>Ma(n,a,r),n}function Ma(e,t="equal",n=7){q(e)=="array"&&(e=wa(e));const{min:a,max:r}=e,l=e.values.sort((s,i)=>s-i);if(n===1)return[a,r];const o=[];if(t.substr(0,1)==="c"&&(o.push(a),o.push(r)),t.substr(0,1)==="e"){o.push(a);for(let s=1;s<n;s++)o.push(a+s/n*(r-a));o.push(r)}else if(t.substr(0,1)==="l"){if(a<=0)throw new Error("Logarithmic scales are only possible for values > 0");const s=Math.LOG10E*Pn(a),i=Math.LOG10E*Pn(r);o.push(a);for(let c=1;c<n;c++)o.push(Do(10,s+c/n*(i-s)));o.push(r)}else if(t.substr(0,1)==="q"){o.push(a);for(let s=1;s<n;s++){const i=(l.length-1)*s/n,c=To(i);if(c===i)o.push(l[c]);else{const u=i-c;o.push(l[c]*(1-u)+l[c+1]*u)}}o.push(r)}else if(t.substr(0,1)==="k"){let s;const i=l.length,c=new Array(i),u=new Array(n);let g=!0,h=0,F=null;F=[],F.push(a);for(let p=1;p<n;p++)F.push(a+p/n*(r-a));for(F.push(r);g;){for(let y=0;y<n;y++)u[y]=0;for(let y=0;y<i;y++){const x=l[y];let R=Number.MAX_VALUE,w;for(let B=0;B<n;B++){const m=xo(F[B]-x);m<R&&(R=m,w=B),u[w]++,c[y]=w}}const p=new Array(n);for(let y=0;y<n;y++)p[y]=null;for(let y=0;y<i;y++)s=c[y],p[s]===null?p[s]=l[y]:p[s]+=l[y];for(let y=0;y<n;y++)p[y]*=1/u[y];g=!1;for(let y=0;y<n;y++)if(p[y]!==F[y]){g=!0;break}F=p,h++,h>200&&(g=!1)}const b={};for(let p=0;p<n;p++)b[p]=[];for(let p=0;p<i;p++)s=c[p],b[s].push(l[p]);let v=[];for(let p=0;p<n;p++)v.push(b[p][0]),v.push(b[p][b[p].length-1]);v=v.sort((p,y)=>p-y),o.push(v[0]);for(let p=1;p<v.length;p+=2){const y=v[p];!isNaN(y)&&o.indexOf(y)===-1&&o.push(y)}}return o}const Ro=(e,t)=>{e=new M(e),t=new M(t);const n=e.luminance(),a=t.luminance();return n>a?(n+.05)/(a+.05):(a+.05)/(n+.05)};/**
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
 */const $n=.027,Lo=5e-4,Po=.1,Nn=1.14,Et=.022,On=1.414,$o=(e,t)=>{e=new M(e),t=new M(t),e.alpha()<1&&(e=ct(t,e,e.alpha(),"rgb"));const n=zn(...e.rgb()),a=zn(...t.rgb()),r=n>=Et?n:n+Math.pow(Et-n,On),l=a>=Et?a:a+Math.pow(Et-a,On),o=Math.pow(l,.56)-Math.pow(r,.57),s=Math.pow(l,.65)-Math.pow(r,.62),i=Math.abs(l-r)<Lo?0:r<l?o*Nn:s*Nn;return(Math.abs(i)<Po?0:i>0?i-$n:i+$n)*100};function zn(e,t,n){return .2126729*Math.pow(e/255,2.4)+.7151522*Math.pow(t/255,2.4)+.072175*Math.pow(n/255,2.4)}const{sqrt:$e,pow:oe,min:No,max:Oo,atan2:Gn,abs:Yn,cos:Bt,sin:In,exp:zo,PI:qn}=Math;function Go(e,t,n=1,a=1,r=1){var l=function(Fe){return 360*Fe/(2*qn)},o=function(Fe){return 2*qn*Fe/360};e=new M(e),t=new M(t);const[s,i,c]=Array.from(e.lab()),[u,g,h]=Array.from(t.lab()),F=(s+u)/2,b=$e(oe(i,2)+oe(c,2)),v=$e(oe(g,2)+oe(h,2)),p=(b+v)/2,y=.5*(1-$e(oe(p,7)/(oe(p,7)+oe(25,7)))),x=i*(1+y),R=g*(1+y),w=$e(oe(x,2)+oe(c,2)),B=$e(oe(R,2)+oe(h,2)),m=(w+B)/2,d=l(Gn(c,x)),_=l(Gn(h,R)),E=d>=0?d:d+360,C=_>=0?_:_+360,L=Yn(E-C)>180?(E+C+360)/2:(E+C)/2,T=1-.17*Bt(o(L-30))+.24*Bt(o(2*L))+.32*Bt(o(3*L+6))-.2*Bt(o(4*L-63));let N=C-E;N=Yn(N)<=180?N:C<=E?N+360:N-360,N=2*$e(w*B)*In(o(N)/2);const W=u-s,$=B-w,D=1+.015*oe(F-50,2)/$e(20+oe(F-50,2)),U=1+.045*m,X=1+.015*m*T,le=30*zo(-oe((L-275)/25,2)),j=-(2*$e(oe(m,7)/(oe(m,7)+oe(25,7))))*In(2*o(le)),S=$e(oe(W/(n*D),2)+oe($/(a*U),2)+oe(N/(r*X),2)+j*($/(a*U))*(N/(r*X)));return Oo(0,No(100,S))}function Yo(e,t,n="lab"){e=new M(e),t=new M(t);const a=e.get(n),r=t.get(n);let l=0;for(let o in a){const s=(a[o]||0)-(r[o]||0);l+=s*s}return Math.sqrt(l)}const Io=(...e)=>{try{return new M(...e),!0}catch{return!1}},qo={cool(){return Rt([O.hsl(180,1,.9),O.hsl(250,.7,.4)])},hot(){return Rt(["#000","#f00","#ff0","#fff"]).mode("rgb")}},un={OrRd:["#fff7ec","#fee8c8","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#b30000","#7f0000"],PuBu:["#fff7fb","#ece7f2","#d0d1e6","#a6bddb","#74a9cf","#3690c0","#0570b0","#045a8d","#023858"],BuPu:["#f7fcfd","#e0ecf4","#bfd3e6","#9ebcda","#8c96c6","#8c6bb1","#88419d","#810f7c","#4d004b"],Oranges:["#fff5eb","#fee6ce","#fdd0a2","#fdae6b","#fd8d3c","#f16913","#d94801","#a63603","#7f2704"],BuGn:["#f7fcfd","#e5f5f9","#ccece6","#99d8c9","#66c2a4","#41ae76","#238b45","#006d2c","#00441b"],YlOrBr:["#ffffe5","#fff7bc","#fee391","#fec44f","#fe9929","#ec7014","#cc4c02","#993404","#662506"],YlGn:["#ffffe5","#f7fcb9","#d9f0a3","#addd8e","#78c679","#41ab5d","#238443","#006837","#004529"],Reds:["#fff5f0","#fee0d2","#fcbba1","#fc9272","#fb6a4a","#ef3b2c","#cb181d","#a50f15","#67000d"],RdPu:["#fff7f3","#fde0dd","#fcc5c0","#fa9fb5","#f768a1","#dd3497","#ae017e","#7a0177","#49006a"],Greens:["#f7fcf5","#e5f5e0","#c7e9c0","#a1d99b","#74c476","#41ab5d","#238b45","#006d2c","#00441b"],YlGnBu:["#ffffd9","#edf8b1","#c7e9b4","#7fcdbb","#41b6c4","#1d91c0","#225ea8","#253494","#081d58"],Purples:["#fcfbfd","#efedf5","#dadaeb","#bcbddc","#9e9ac8","#807dba","#6a51a3","#54278f","#3f007d"],GnBu:["#f7fcf0","#e0f3db","#ccebc5","#a8ddb5","#7bccc4","#4eb3d3","#2b8cbe","#0868ac","#084081"],Greys:["#ffffff","#f0f0f0","#d9d9d9","#bdbdbd","#969696","#737373","#525252","#252525","#000000"],YlOrRd:["#ffffcc","#ffeda0","#fed976","#feb24c","#fd8d3c","#fc4e2a","#e31a1c","#bd0026","#800026"],PuRd:["#f7f4f9","#e7e1ef","#d4b9da","#c994c7","#df65b0","#e7298a","#ce1256","#980043","#67001f"],Blues:["#f7fbff","#deebf7","#c6dbef","#9ecae1","#6baed6","#4292c6","#2171b5","#08519c","#08306b"],PuBuGn:["#fff7fb","#ece2f0","#d0d1e6","#a6bddb","#67a9cf","#3690c0","#02818a","#016c59","#014636"],Viridis:["#440154","#482777","#3f4a8a","#31678e","#26838f","#1f9d8a","#6cce5a","#b6de2b","#fee825"],Spectral:["#9e0142","#d53e4f","#f46d43","#fdae61","#fee08b","#ffffbf","#e6f598","#abdda4","#66c2a5","#3288bd","#5e4fa2"],RdYlGn:["#a50026","#d73027","#f46d43","#fdae61","#fee08b","#ffffbf","#d9ef8b","#a6d96a","#66bd63","#1a9850","#006837"],RdBu:["#67001f","#b2182b","#d6604d","#f4a582","#fddbc7","#f7f7f7","#d1e5f0","#92c5de","#4393c3","#2166ac","#053061"],PiYG:["#8e0152","#c51b7d","#de77ae","#f1b6da","#fde0ef","#f7f7f7","#e6f5d0","#b8e186","#7fbc41","#4d9221","#276419"],PRGn:["#40004b","#762a83","#9970ab","#c2a5cf","#e7d4e8","#f7f7f7","#d9f0d3","#a6dba0","#5aae61","#1b7837","#00441b"],RdYlBu:["#a50026","#d73027","#f46d43","#fdae61","#fee090","#ffffbf","#e0f3f8","#abd9e9","#74add1","#4575b4","#313695"],BrBG:["#543005","#8c510a","#bf812d","#dfc27d","#f6e8c3","#f5f5f5","#c7eae5","#80cdc1","#35978f","#01665e","#003c30"],RdGy:["#67001f","#b2182b","#d6604d","#f4a582","#fddbc7","#ffffff","#e0e0e0","#bababa","#878787","#4d4d4d","#1a1a1a"],PuOr:["#7f3b08","#b35806","#e08214","#fdb863","#fee0b6","#f7f7f7","#d8daeb","#b2abd2","#8073ac","#542788","#2d004b"],Set2:["#66c2a5","#fc8d62","#8da0cb","#e78ac3","#a6d854","#ffd92f","#e5c494","#b3b3b3"],Accent:["#7fc97f","#beaed4","#fdc086","#ffff99","#386cb0","#f0027f","#bf5b17","#666666"],Set1:["#e41a1c","#377eb8","#4daf4a","#984ea3","#ff7f00","#ffff33","#a65628","#f781bf","#999999"],Set3:["#8dd3c7","#ffffb3","#bebada","#fb8072","#80b1d3","#fdb462","#b3de69","#fccde5","#d9d9d9","#bc80bd","#ccebc5","#ffed6f"],Dark2:["#1b9e77","#d95f02","#7570b3","#e7298a","#66a61e","#e6ab02","#a6761d","#666666"],Paired:["#a6cee3","#1f78b4","#b2df8a","#33a02c","#fb9a99","#e31a1c","#fdbf6f","#ff7f00","#cab2d6","#6a3d9a","#ffff99","#b15928"],Pastel2:["#b3e2cd","#fdcdac","#cbd5e8","#f4cae4","#e6f5c9","#fff2ae","#f1e2cc","#cccccc"],Pastel1:["#fbb4ae","#b3cde3","#ccebc5","#decbe4","#fed9a6","#ffffcc","#e5d8bd","#fddaec","#f2f2f2"]},Aa=Object.keys(un),Xn=new Map(Aa.map(e=>[e.toLowerCase(),e])),Xo=typeof Proxy=="function"?new Proxy(un,{get(e,t){const n=t.toLowerCase();if(Xn.has(n))return e[Xn.get(n)]},getOwnPropertyNames(){return Object.getOwnPropertyNames(Aa)}}):un,Ho=(...e)=>{e=G(e,"cmyk");const[t,n,a,r]=e,l=e.length>4?e[4]:1;return r===1?[0,0,0,l]:[t>=1?0:255*(1-t)*(1-r),n>=1?0:255*(1-n)*(1-r),a>=1?0:255*(1-a)*(1-r),l]},{max:Hn}=Math,jo=(...e)=>{let[t,n,a]=G(e,"rgb");t=t/255,n=n/255,a=a/255;const r=1-Hn(t,Hn(n,a)),l=r<1?1/(1-r):0,o=(1-t-r)*l,s=(1-n-r)*l,i=(1-a-r)*l;return[o,s,i,r]};M.prototype.cmyk=function(){return jo(this._rgb)};const Uo=(...e)=>new M(...e,"cmyk");Object.assign(O,{cmyk:Uo});z.format.cmyk=Ho;z.autodetect.push({p:2,test:(...e)=>{if(e=G(e,"cmyk"),q(e)==="array"&&e.length===4)return"cmyk"}});const Zo=(...e)=>{const t=G(e,"hsla");let n=ft(e)||"lsa";return t[0]=ke(t[0]||0)+"deg",t[1]=ke(t[1]*100)+"%",t[2]=ke(t[2]*100)+"%",n==="hsla"||t.length>3&&t[3]<1?(t[3]="/ "+(t.length>3?t[3]:1),n="hsla"):t.length=3,`${n.substr(0,3)}(${t.join(" ")})`},Vo=(...e)=>{const t=G(e,"lab");let n=ft(e)||"lab";return t[0]=ke(t[0])+"%",t[1]=ke(t[1]),t[2]=ke(t[2]),n==="laba"||t.length>3&&t[3]<1?t[3]="/ "+(t.length>3?t[3]:1):t.length=3,`lab(${t.join(" ")})`},Wo=(...e)=>{const t=G(e,"lch");let n=ft(e)||"lab";return t[0]=ke(t[0])+"%",t[1]=ke(t[1]),t[2]=isNaN(t[2])?"none":ke(t[2])+"deg",n==="lcha"||t.length>3&&t[3]<1?t[3]="/ "+(t.length>3?t[3]:1):t.length=3,`lch(${t.join(" ")})`},Ko=(...e)=>{const t=G(e,"lab");return t[0]=ke(t[0]*100)+"%",t[1]=cn(t[1]),t[2]=cn(t[2]),t.length>3&&t[3]<1?t[3]="/ "+(t.length>3?t[3]:1):t.length=3,`oklab(${t.join(" ")})`},Ea=(...e)=>{const[t,n,a,...r]=G(e,"rgb"),[l,o,s]=yn(t,n,a),[i,c,u]=ka(l,o,s);return[i,c,u,...r.length>0&&r[0]<1?[r[0]]:[]]},Jo=(...e)=>{const t=G(e,"lch");return t[0]=ke(t[0]*100)+"%",t[1]=cn(t[1]),t[2]=isNaN(t[2])?"none":ke(t[2])+"deg",t.length>3&&t[3]<1?t[3]="/ "+(t.length>3?t[3]:1):t.length=3,`oklch(${t.join(" ")})`},{round:nn}=Math,Qo=(...e)=>{const t=G(e,"rgba");let n=ft(e)||"rgb";if(n.substr(0,3)==="hsl")return Zo(_a(t),n);if(n.substr(0,3)==="lab"){const a=_t();Oe("d50");const r=Vo(pn(t),n);return Oe(a),r}if(n.substr(0,3)==="lch"){const a=_t();Oe("d50");const r=Wo(vn(t),n);return Oe(a),r}return n.substr(0,5)==="oklab"?Ko(yn(t)):n.substr(0,5)==="oklch"?Jo(Ea(t)):(t[0]=nn(t[0]),t[1]=nn(t[1]),t[2]=nn(t[2]),(n==="rgba"||t.length>3&&t[3]<1)&&(t[3]="/ "+(t.length>3?t[3]:1),n="rgba"),`${n.substr(0,3)}(${t.slice(0,n==="rgb"?3:4).join(" ")})`)},Ba=(...e)=>{e=G(e,"lch");const[t,n,a,...r]=e,[l,o,s]=va(t,n,a),[i,c,u]=kn(l,o,s);return[i,c,u,...r.length>0&&r[0]<1?[r[0]]:[]]},ze=/((?:-?\d+)|(?:-?\d+(?:\.\d+)?)%|none)/.source,Ae=/((?:-?(?:\d+(?:\.\d*)?|\.\d+)%?)|none)/.source,Lt=/((?:-?(?:\d+(?:\.\d*)?|\.\d+)%)|none)/.source,ye=/\s*/.source,dt=/\s+/.source,_n=/\s*,\s*/.source,zt=/((?:-?(?:\d+(?:\.\d*)?|\.\d+)(?:deg)?)|none)/.source,ht=/\s*(?:\/\s*((?:[01]|[01]?\.\d+)|\d+(?:\.\d+)?%))?/.source,Sa=new RegExp("^rgba?\\("+ye+[ze,ze,ze].join(dt)+ht+"\\)$"),Da=new RegExp("^rgb\\("+ye+[ze,ze,ze].join(_n)+ye+"\\)$"),Ta=new RegExp("^rgba\\("+ye+[ze,ze,ze,Ae].join(_n)+ye+"\\)$"),xa=new RegExp("^hsla?\\("+ye+[zt,Lt,Lt].join(dt)+ht+"\\)$"),Ra=new RegExp("^hsl?\\("+ye+[zt,Lt,Lt].join(_n)+ye+"\\)$"),La=/^hsla\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/,Pa=new RegExp("^lab\\("+ye+[Ae,Ae,Ae].join(dt)+ht+"\\)$"),$a=new RegExp("^lch\\("+ye+[Ae,Ae,zt].join(dt)+ht+"\\)$"),Na=new RegExp("^oklab\\("+ye+[Ae,Ae,Ae].join(dt)+ht+"\\)$"),Oa=new RegExp("^oklch\\("+ye+[Ae,Ae,zt].join(dt)+ht+"\\)$"),{round:za}=Math,rt=e=>e.map((t,n)=>n<=2?We(za(t),0,255):t),se=(e,t=0,n=100,a=!1)=>(typeof e=="string"&&e.endsWith("%")&&(e=parseFloat(e.substring(0,e.length-1))/100,a?e=t+(e+1)*.5*(n-t):e=t+e*(n-t)),+e),he=(e,t)=>e==="none"?t:e,Cn=e=>{if(e=e.toLowerCase().trim(),e==="transparent")return[0,0,0,0];let t;if(z.format.named)try{return z.format.named(e)}catch{}if((t=e.match(Sa))||(t=e.match(Da))){let n=t.slice(1,4);for(let r=0;r<3;r++)n[r]=+se(he(n[r],0),0,255);n=rt(n);const a=t[4]!==void 0?+se(t[4],0,1):1;return n[3]=a,n}if(t=e.match(Ta)){const n=t.slice(1,5);for(let a=0;a<4;a++)n[a]=+se(n[a],0,255);return n}if((t=e.match(xa))||(t=e.match(Ra))){const n=t.slice(1,4);n[0]=+he(n[0].replace("deg",""),0),n[1]=+se(he(n[1],0),0,100)*.01,n[2]=+se(he(n[2],0),0,100)*.01;const a=rt(fn(n)),r=t[4]!==void 0?+se(t[4],0,1):1;return a[3]=r,a}if(t=e.match(La)){const n=t.slice(1,4);n[1]*=.01,n[2]*=.01;const a=fn(n);for(let r=0;r<3;r++)a[r]=za(a[r]);return a[3]=+t[4],a}if(t=e.match(Pa)){const n=t.slice(1,4);n[0]=se(he(n[0],0),0,100),n[1]=se(he(n[1],0),-125,125,!0),n[2]=se(he(n[2],0),-125,125,!0);const a=_t();Oe("d50");const r=rt(Fn(n));Oe(a);const l=t[4]!==void 0?+se(t[4],0,1):1;return r[3]=l,r}if(t=e.match($a)){const n=t.slice(1,4);n[0]=se(n[0],0,100),n[1]=se(he(n[1],0),0,150,!1),n[2]=+he(n[2].replace("deg",""),0);const a=_t();Oe("d50");const r=rt(mn(n));Oe(a);const l=t[4]!==void 0?+se(t[4],0,1):1;return r[3]=l,r}if(t=e.match(Na)){const n=t.slice(1,4);n[0]=se(he(n[0],0),0,1),n[1]=se(he(n[1],0),-.4,.4,!0),n[2]=se(he(n[2],0),-.4,.4,!0);const a=rt(kn(n)),r=t[4]!==void 0?+se(t[4],0,1):1;return a[3]=r,a}if(t=e.match(Oa)){const n=t.slice(1,4);n[0]=se(he(n[0],0),0,1),n[1]=se(he(n[1],0),0,.4,!1),n[2]=+he(n[2].replace("deg",""),0);const a=rt(Ba(n)),r=t[4]!==void 0?+se(t[4],0,1):1;return a[3]=r,a}};Cn.test=e=>Sa.test(e)||xa.test(e)||Pa.test(e)||$a.test(e)||Na.test(e)||Oa.test(e)||Da.test(e)||Ta.test(e)||Ra.test(e)||La.test(e)||e==="transparent";M.prototype.css=function(e){return Qo(this._rgb,e)};const es=(...e)=>new M(...e,"css");O.css=es;z.format.css=Cn;z.autodetect.push({p:5,test:(e,...t)=>{if(!t.length&&q(e)==="string"&&Cn.test(e))return"css"}});z.format.gl=(...e)=>{const t=G(e,"rgba");return t[0]*=255,t[1]*=255,t[2]*=255,t};const ts=(...e)=>new M(...e,"gl");O.gl=ts;M.prototype.gl=function(){const e=this._rgb;return[e[0]/255,e[1]/255,e[2]/255,e[3]]};M.prototype.hex=function(e){return Fa(this._rgb,e)};const ns=(...e)=>new M(...e,"hex");O.hex=ns;z.format.hex=ga;z.autodetect.push({p:4,test:(e,...t)=>{if(!t.length&&q(e)==="string"&&[3,4,5,6,7,8,9].indexOf(e.length)>=0)return"hex"}});const{log:St}=Math,Ga=e=>{const t=e/100;let n,a,r;return t<66?(n=255,a=t<6?0:-155.25485562709179-.44596950469579133*(a=t-2)+104.49216199393888*St(a),r=t<20?0:-254.76935184120902+.8274096064007395*(r=t-10)+115.67994401066147*St(r)):(n=351.97690566805693+.114206453784165*(n=t-55)-40.25366309332127*St(n),a=325.4494125711974+.07943456536662342*(a=t-50)-28.0852963507957*St(a),r=255),[n,a,r,1]},{round:as}=Math,rs=(...e)=>{const t=G(e,"rgb"),n=t[0],a=t[2];let r=1e3,l=4e4;const o=.4;let s;for(;l-r>o;){s=(l+r)*.5;const i=Ga(s);i[2]/i[0]>=a/n?l=s:r=s}return as(s)};M.prototype.temp=M.prototype.kelvin=M.prototype.temperature=function(){return rs(this._rgb)};const an=(...e)=>new M(...e,"temp");Object.assign(O,{temp:an,kelvin:an,temperature:an});z.format.temp=z.format.kelvin=z.format.temperature=Ga;M.prototype.oklch=function(){return Ea(this._rgb)};const ls=(...e)=>new M(...e,"oklch");Object.assign(O,{oklch:ls});z.format.oklch=Ba;z.autodetect.push({p:2,test:(...e)=>{if(e=G(e,"oklch"),q(e)==="array"&&e.length===3)return"oklch"}});Object.assign(O,{analyze:wa,average:lo,bezier:uo,blend:Be,brewer:Xo,Color:M,colors:it,contrast:Ro,contrastAPCA:$o,cubehelix:Mo,deltaE:Go,distance:Yo,input:z,interpolate:ct,limits:Ma,mix:ct,random:So,scale:Rt,scales:qo,valid:Io});const jn=Object.assign({"../../data/sets/rebrickable_parts_41809-1-hedwig-pencil-holder.csv":Vr,"../../data/sets/rebrickable_parts_41904-1-animal-picture-holders.csv":Wr,"../../data/sets/rebrickable_parts_41935-1-lots-of-dots.csv":Kr,"../../data/sets/rebrickable_parts_41950-1-lots-of-dots-lettering.csv":Jr,"../../data/sets/rebrickable_parts_41957-1-adhesive-patches-mega-pack.csv":Qr,"../../data/sets/rebrickable_parts_41961-1-designer-toolkit-patterns.csv":el});function os(e){const t=e.trim().split(`
`);return t[0].split(","),t.slice(1).map(n=>{const a=n.split(",");return{id:Number(a[0]),name:a[1],rgb:`#${a[2]}`,is_trans:a[3]==="True"}})}function ss(e){const t=O(e).hsl();return{h:isNaN(t[0])?0:t[0],s:t[1]*100,l:t[2]*100}}function is(e,t=15,n=5){const a={},r=new Set;for(const i of e){const c=i.s<10?999:Math.floor(i.h/t);a[c]||(a[c]=[]),r.has(i.rgb)||(a[c].push(i),r.add(i.rgb))}Object.values(a).forEach(i=>i.sort((c,u)=>O(c.rgb).hcl()[2]-O(u.rgb).hcl()[2]));const o=Object.keys(a).map(Number).sort((i,c)=>i-c).flatMap(i=>a[i]),s=[];for(let i=0;i<o.length;i+=n)s.push(o.slice(i,i+n));return s}function cs(){const e=new Set;for(const t in jn){const a=jn[t].trim().split(`
`);for(const r of a.slice(1)){const l=r.split(",");if(l.length>1){const o=Number(l[1]);isNaN(o)||e.add(o)}}}return e}const fs=cs(),Ke=os(tl).filter(e=>fs.has(e.id)&&!e.name.includes("Trans-Clear"));function us(){return Ke.map(e=>{const t=ss(e.rgb);return{...e,...t}})}const ue=is(us(),15,6);function Ya(){return[...Ke].sort((e,t)=>{const n=O(e.rgb).hcl(),a=O(t.rgb).hcl();return a[0]-n[0]||a[1]-n[1]||a[2]-n[2]})}var ds=ce('<div class="zoom-pan-container svelte-b0dtxj" role="application" aria-label="Zoomable and pannable container" tabindex="0"><div class="zoom-pan-content svelte-b0dtxj"><!></div></div>');function hs(e,t){_e(t,!1);const n=Le();let a=P(t,"zoom",12,1),r=P(t,"panX",12,0),l=P(t,"panY",12,0),o=P(t,"selectMode",8,!1),s=K(!1),i=0,c=0,u=K(!1),g=K(),h=K(),F=!1;dn(()=>{if(f(g)&&f(h)&&!F){const d=f(g).clientWidth,_=f(g).clientHeight;let E=0,C=0;f(h).firstElementChild instanceof HTMLElement?(E=f(h).firstElementChild.offsetWidth,C=f(h).firstElementChild.offsetHeight):(E=f(h).offsetWidth,C=f(h).offsetHeight),r((d-E*a())/2),l((_-C*a())/2),F=!0,n("panChanged",{panX:r(),panY:l()})}});function b(d){d.preventDefault();const _=f(g).getBoundingClientRect(),E=d.clientX-_.left,C=d.clientY-_.top,L=d.deltaY>0?.9:1.1,T=Math.max(.2,Math.min(5,a()*L));if(T!==a()){const N=T/a();r(E-(E-r())*N),l(C-(C-l())*N),a(T),n("zoomChanged",{zoom:a(),panX:r(),panY:l()})}}function v(d){o()||d.button===0&&(A(s,!0),A(u,!1),i=d.clientX,c=d.clientY,window.addEventListener("mousemove",p),window.addEventListener("mouseup",y),d.preventDefault())}function p(d){if(f(s)){const _=d.clientX-i,E=d.clientY-c;(Math.abs(_)>1||Math.abs(E)>1)&&A(u,!0),r(r()+_),l(l()+E),i=d.clientX,c=d.clientY,n("panChanged",{panX:r(),panY:l()})}}function y(){f(s)&&(A(s,!1),window.removeEventListener("mousemove",p),window.removeEventListener("mouseup",y),n("panEnd",{didPan:f(u)}),setTimeout(()=>{A(u,!1)},50))}function x(d){d.key===" "&&d.preventDefault()}function R(d){d.key===" "&&d.preventDefault()}we();var w=ds(),B=I(w),m=I(B);Se(m,t,"default",{get didPan(){return f(u)}}),Y(B),En(B,d=>A(h,d),()=>f(h)),Y(w),En(w,d=>A(g,d),()=>f(g)),ve(()=>Xe(B,`transform: translate(${r()??""}px, ${l()??""}px) scale(${a()??""}); cursor: ${o()?"crosshair":f(s)?"grabbing":"grab"};`)),J("wheel",w,b),J("mousedown",w,v),J("keydown",w,x),J("keyup",w,R),V(e,w),Ce()}var bs=ce('<div class="square svelte-gxsx5p"></div>');function Ia(e,t){let n=P(t,"color",8,"#000");var a=bs();ve(()=>Xe(a,`--color: ${n()??""}`)),V(e,a)}var gs=ce('<div class="circle svelte-r5z0cw"></div>');function qa(e,t){let n=P(t,"color",8,"#000");var a=gs();ve(()=>Xe(a,`--color: ${n()??""}`)),V(e,a)}var Fs=ce('<div class="quarter-container svelte-19hi45o"><svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none" class="svelte-19hi45o"><path d="M 0,0 L 100,0 A 100,100 0 0,1 0,100 Z" stroke="none"></path></svg></div>');function Xa(e,t){let n=P(t,"color",8,"#000"),a=P(t,"rotation",8,0);var r=Fs(),l=I(r),o=I(l);Y(l),Y(r),ve(()=>{ie(o,"fill",n()),ie(o,"transform",`rotate(${a()*90}, 50, 50)`)}),V(e,r)}var ps=ce('<div class="tile svelte-ia1epz"><div class="square-half svelte-ia1epz"></div> <div class="circle-half svelte-ia1epz"></div></div>');function Ha(e,t){let n=P(t,"color",8,"#000"),a=P(t,"rotation",8,0);var r=ps();ve(()=>Xe(r,`--color: ${n()??""}; transform: rotate(${a()*90}deg);`)),V(e,r)}var ms=ce('<div role="button" tabindex="0"><!></div>'),vs=ce('<div class="selection-overlay svelte-1hhz0mg"></div>'),ks=ce('<div class="grid svelte-1hhz0mg"><!> <!></div>');function ys(e,t){_e(t,!1);const n=Le();let a=P(t,"grid",12),r=P(t,"width",8),l=P(t,"height",8),o=P(t,"selectedShape",8,"square"),s=P(t,"selectedColor",8),i=P(t,"paintMode",8,!1),c=P(t,"colorPickerMode",8,!1),u=P(t,"selectMode",8,!1),g=P(t,"quarterRotation",8,0),h=P(t,"halfCircleRotation",8,0),F=P(t,"selection",28,()=>({startX:0,startY:0,endX:0,endY:0,active:!1})),b=P(t,"didPan",8,!1),v=K(!1);function p($){const D=a()[$];if(!D)return y($);const{shape:U,color:X}=D;if(U===o()&&X===s())return;const le=[$],fe=new Set;for(;le.length;){const j=le.pop();if(j===void 0||fe.has(j))continue;fe.add(j);const S=a()[j];if(!S||S.shape!==U||S.color!==X)continue;a(a()[j]={shape:o(),color:s(),rotation:o()==="quarter"?g():o()==="halfCircle"?h():0},!0);const Fe=j%r(),me=Math.floor(j/r());Fe>0&&le.push(j-1),Fe<r()-1&&le.push(j+1),me>0&&le.push(j-r()),me<l()-1&&le.push(j+r())}a([...a()]),n("gridChanged",{grid:a()})}function y($){const D=a()[$];D&&D.shape===o()&&D.color===s()?a(a()[$]=null,!0):o()==="quarter"?a(a()[$]={shape:o(),color:s(),rotation:g()},!0):o()==="halfCircle"?a(a()[$]={shape:o(),color:s(),rotation:h()},!0):a(a()[$]={shape:o(),color:s(),rotation:0},!0),a([...a()]),n("gridChanged",{grid:a()})}function x($){const D=a()[$];D&&D.color&&n("colorPicked",{color:D.color})}function R($,D){D.stopPropagation(),!b()&&(u()?w($):c()?x($):i()?p($):y($))}function w($,D){const U=$%r(),X=Math.floor($/r());A(v,!0),F({startX:U,startY:X,endX:U,endY:X,active:!0}),n("selectionChanged",{selection:F()})}function B($,D){u()&&w($)}function m($,D){if(u()&&f(v)){const U=$%r(),X=Math.floor($/r());F({...F(),endX:U,endY:X}),n("selectionChanged",{selection:F()})}}function d($,D){u()&&f(v)&&(A(v,!1),n("selectionChanged",{selection:F()}))}function _(){f(v)&&A(v,!1)}dn(()=>{typeof window<"u"&&window.addEventListener("mouseup",_)}),Zn(()=>{typeof window<"u"&&window.removeEventListener("mouseup",_)});function E($){if(!F().active)return!1;const D=$%r(),U=Math.floor($/r()),X=Math.min(F().startX,F().endX),le=Math.max(F().startX,F().endX),fe=Math.min(F().startY,F().endY),j=Math.max(F().startY,F().endY);return D>=X&&D<=le&&U>=fe&&U<=j}function C($,D){$.key==="Enter"&&(c()?x(D):i()?p(D):y(D))}we();var L=ks(),T=I(L);Tt(T,1,a,Dt,($,D,U)=>{var X=ms(),le=I(X);{var fe=j=>{var S=pe(),Fe=ge(S);{var me=Me=>{Ia(Me,{get color(){return f(D),Z(()=>f(D).color)}})},Je=Me=>{var Ue=pe(),bt=ge(Ue);{var gt=De=>{qa(De,{get color(){return f(D),Z(()=>f(D).color)}})},Ft=De=>{var Ct=pe(),Gt=ge(Ct);{var wt=Pe=>{Xa(Pe,{get color(){return f(D),Z(()=>f(D).color)},get rotation(){return f(D),Z(()=>f(D).rotation)}})},Qe=Pe=>{var et=pe(),Mt=ge(et);{var Yt=pt=>{Ha(pt,{get color(){return f(D),Z(()=>f(D).color)},get rotation(){return f(D),Z(()=>f(D).rotation)}})};Ie(Mt,pt=>{f(D),Z(()=>f(D).shape==="halfCircle")&&pt(Yt)},!0)}V(Pe,et)};Ie(Gt,Pe=>{f(D),Z(()=>f(D).shape==="quarter")?Pe(wt):Pe(Qe,!1)},!0)}V(De,Ct)};Ie(bt,De=>{f(D),Z(()=>f(D).shape==="circle")?De(gt):De(Ft,!1)},!0)}V(Me,Ue)};Ie(Fe,Me=>{f(D),Z(()=>f(D).shape==="square")?Me(me):Me(Je,!1)})}V(j,S)};Ie(le,j=>{f(D)&&j(fe)})}Y(X),ve(j=>xe(X,1,`cell ${j??""} ${u()?"select-mode":""}`,"svelte-1hhz0mg"),[()=>Z(()=>E(U)?"selected":"")]),J("click",X,j=>R(U,j)),J("mousedown",X,j=>B(U)),J("mouseenter",X,j=>m(U)),J("mouseup",X,j=>d()),J("keydown",X,j=>C(j,U)),V($,X)});var N=ee(T,2);{var W=$=>{const D=be(()=>(H(F()),Z(()=>Math.min(F().startX,F().endX)))),U=be(()=>(H(F()),Z(()=>Math.max(F().startX,F().endX)))),X=be(()=>(H(F()),Z(()=>Math.min(F().startY,F().endY)))),le=be(()=>(H(F()),Z(()=>Math.max(F().startY,F().endY)))),fe=be(()=>f(D)/r()*100),j=be(()=>f(X)/l()*100),S=be(()=>(f(U)-f(D)+1)/r()*100),Fe=be(()=>(f(le)-f(X)+1)/l()*100);var me=vs();ve(()=>Xe(me,`left: ${f(fe)??""}%; top: ${f(j)??""}%; width: ${f(S)??""}%; height: ${f(Fe)??""}%;`)),V($,me)};Ie(N,$=>{H(u()),H(F()),f(v),Z(()=>u()&&F().active&&(f(v)||F().startX!==F().endX||F().startY!==F().endY))&&$(W)})}Y(L),ve(()=>Xe(L,`--width: ${r()??""}; --height: ${l()??""};`)),V(e,L),Ce()}var _s=ce('<div class="container svelte-1w4104m"><!></div>');function Un(e,t){_e(t,!1);const n=Le();let a=P(t,"grid",8,null),r=P(t,"width",8,32),l=P(t,"height",8,32),o=P(t,"selectedShape",8,"square"),s=P(t,"selectedColor",24,()=>Ke.length>0?Ke[0].rgb:"#000000"),i=P(t,"paintMode",8,!1),c=P(t,"colorPickerMode",8,!1),u=P(t,"selectMode",8,!1),g=P(t,"quarterRotation",8,0),h=P(t,"halfCircleRotation",8,0),F=P(t,"zoom",12,1),b=P(t,"selection",28,()=>({startX:0,startY:0,endX:0,endY:0,active:!1})),v=K(),p=K(0),y=K(0);function x(C){F(C.detail.zoom)}function R(C){A(p,C.detail.panX),A(y,C.detail.panY)}function w(C){C.detail.didPan}function B(C){A(v,C.detail.grid),n("gridChanged",C.detail)}function m(C){n("colorPicked",C.detail)}function d(C){b(C.detail.selection),n("selectionChanged",C.detail)}ln(()=>(H(a()),H(r()),H(l())),()=>{A(v,a()||Array(r()*l()).fill(null))}),aa(),we();var _=_s(),E=I(_);hs(E,{get zoom(){return F()},get panX(){return f(p)},get panY(){return f(y)},get selectMode(){return u()},$$events:{zoomChanged:x,panChanged:R,panEnd:w},children:xr,$$slots:{default:(C,L)=>{const T=be(()=>L.didPan);ys(C,{get grid(){return f(v)},get width(){return r()},get height(){return l()},get selectedShape(){return o()},get selectedColor(){return s()},get paintMode(){return i()},get colorPickerMode(){return c()},get selectMode(){return u()},get quarterRotation(){return g()},get halfCircleRotation(){return h()},get selection(){return b()},get didPan(){return f(T)},$$events:{gridChanged:B,colorPicked:m,selectionChanged:d}})}}}),Y(_),V(e,_),Ce()}var Cs=ce('<button type="button"></button>'),ws=ce('<div class="palette-row"></div>'),Ms=ce('<div class="color-picker"><!> <div class="colors"><div class="palette2d"></div></div></div>');function As(e,t){_e(t,!1);const n=Ya(),a=Le();let r=P(t,"selectedColor",28,()=>n.length>0?n[0].rgb:"#000000"),l=K(""),o=K(!1),s=K(null),i=n,c=K(i);function u(v){r(v),a("colorSelected",{color:v})}ln(()=>(f(o),f(s)),()=>{f(o)&&na().then(()=>{f(s)?.focus()})}),ln(()=>f(l),()=>{A(c,f(l).trim()?i.filter(v=>v.name.toLowerCase().includes(f(l).toLowerCase())||v.rgb.replace("#","").includes(f(l).replace("#",""))):i)}),aa(),we();var g=Ms(),h=I(g);Ie(h,v=>{});var F=ee(h,2),b=I(F);Tt(b,5,()=>ue,Dt,(v,p)=>{var y=ws();Tt(y,5,()=>f(p),Dt,(x,R)=>{var w=Cs();ve(()=>{Xe(w,`width: 1.5rem; height: 1.5rem; background: ${f(R),Z(()=>f(R).rgb)??""}; border: 2px solid ${H(r()),f(R),Z(()=>r()===f(R).rgb?"#333":"#ccc")??""}; border-radius: 0.25rem; cursor: pointer; margin: 0 0.1rem 0.1rem 0;`),ie(w,"aria-label",(f(R),Z(()=>f(R).name))),ie(w,"title",(f(R),Z(()=>f(R).name)))}),J("click",w,()=>u(f(R).rgb)),V(x,w)}),Y(y),V(v,y)}),Y(b),Y(F),Y(g),V(e,g),Ce()}const ae={select:{key:"v",action:"select"},square:{key:"s",action:"square"},circle:{key:"c",action:"circle"},quarter:{key:"q",action:"quarter"},halfCircle:{key:"h",action:"halfCircle"},fill:{key:"f",action:"fill"},colorPicker:{key:"i",action:"colorPicker"},zoomIn:{key:"+",action:"zoomIn"},zoomInAlt:{key:"=",action:"zoomIn"},zoomOut:{key:"-",action:"zoomOut"},undo:{key:"z",ctrl:!0,action:"undo"},redo:{key:"z",ctrl:!0,shift:!0,action:"redo"},cut:{key:"x",ctrl:!0,action:"cut"},copy:{key:"c",ctrl:!0,action:"copy"},paste:{key:"v",ctrl:!0,action:"paste"},selectAll:{key:"a",ctrl:!0,action:"selectAll"},deselect:{key:"d",ctrl:!0,action:"deselect"},rotateLeft:{key:"r",action:"rotateLeft"},rotateRight:{key:"r",shift:!0,action:"rotateRight"},moveUp:{key:"ArrowUp",action:"moveUp"},moveDown:{key:"ArrowDown",action:"moveDown"},moveLeft:{key:"ArrowLeft",action:"moveLeft"},moveRight:{key:"ArrowRight",action:"moveRight"},delete:{key:"Delete",action:"delete"},backspace:{key:"Backspace",action:"delete"},colorLeft:{key:"a",shift:!0,action:"colorLeft"},colorRight:{key:"d",shift:!0,action:"colorRight"},colorUp:{key:"w",shift:!0,action:"colorUp"},colorDown:{key:"s",shift:!0,action:"colorDown"}};function Es(e,t){const a=(e.key===" "?"Space":e.key).toLowerCase(),r=t.key.toLowerCase();return a!==r||!!e.ctrlKey!=!!t.ctrl||!!e.altKey!=!!t.alt?!1:t.key==="+"||t.key==="-"||t.key==="="?!0:!!e.shiftKey==!!t.shift}function re(e){const t=[];e.ctrl&&t.push("Ctrl"),e.shift&&t.push("Shift"),e.alt&&t.push("Alt");let n=e.key;return n===" "&&(n="Space"),n==="="&&(n="+"),t.push(n.toUpperCase()),t.join("+")}var Bs=ce('<div class="shape-group"><div class="group-label">Shapes</div> <div class="shape-grid"><button aria-label="Square"><div class="shape-icon"><!></div></button> <button aria-label="Circle"><div class="shape-icon"><!></div></button> <button aria-label="Quarter"><div class="shape-icon"><!></div></button> <button aria-label="Half Circle"><div class="shape-icon"><!></div></button></div></div>');function Ss(e,t){_e(t,!1);const n=Le();let a=P(t,"selectedShape",12,"square"),r=P(t,"selectedColor",8,"#000000"),l=P(t,"quarterRotation",12,0),o=P(t,"halfCircleRotation",12,0);function s(C){if(C==="quarter")if(a()==="quarter"){l((l()+1)%4),n("quarterRotationChanged",{rotation:l()});return}else l(0);if(C==="halfCircle")if(a()==="halfCircle"){o((o()+1)%4),n("halfCircleRotationChanged",{rotation:o()});return}else o(0);a(C),n("shapeSelected",{shape:C}),C==="quarter"&&n("quarterRotationChanged",{rotation:l()}),C==="halfCircle"&&n("halfCircleRotationChanged",{rotation:o()})}we();var i=Bs(),c=ee(I(i),2),u=I(c);let g;var h=I(u),F=I(h);Ia(F,{get color(){return r()}}),Y(h),Y(u);var b=ee(u,2);let v;var p=I(b),y=I(p);qa(y,{get color(){return r()}}),Y(p),Y(b);var x=ee(b,2);let R;var w=I(x),B=I(w);Xa(B,{get color(){return r()},get rotation(){return l()}}),Y(w),Y(x);var m=ee(x,2);let d;var _=I(m),E=I(_);Ha(E,{get color(){return r()},get rotation(){return o()}}),Y(_),Y(m),Y(c),Y(i),ve((C,L,T,N,W,$,D,U)=>{g=xe(u,1,"shape-button",null,g,C),ie(u,"title",`Square (${L??""})`),v=xe(b,1,"shape-button",null,v,T),ie(b,"title",`Circle (${N??""})`),R=xe(x,1,"shape-button",null,R,W),ie(x,"title",`Quarter (${$??""})`),d=xe(m,1,"shape-button",null,d,D),ie(m,"title",`Half Circle (${U??""})`)},[()=>({selected:a()==="square"}),()=>(H(re),H(ae),Z(()=>re(ae.square))),()=>({selected:a()==="circle"}),()=>(H(re),H(ae),Z(()=>re(ae.circle))),()=>({selected:a()==="quarter"}),()=>(H(re),H(ae),Z(()=>re(ae.quarter))),()=>({selected:a()==="halfCircle"}),()=>(H(re),H(ae),Z(()=>re(ae.halfCircle)))]),J("click",u,()=>s("square")),J("click",b,()=>s("circle")),J("click",x,()=>s("quarter")),J("click",m,()=>s("halfCircle")),V(e,i),Ce()}/**
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
 */const Ds={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};var Ts=Rr("<svg><!><!></svg>");function Ye(e,t){const n=Ee(t,["children","$$slots","$$events","$$legacy"]),a=Ee(n,["name","color","size","strokeWidth","absoluteStrokeWidth","iconNode"]);_e(t,!1);let r=P(t,"name",8,void 0),l=P(t,"color",8,"currentColor"),o=P(t,"size",8,24),s=P(t,"strokeWidth",8,2),i=P(t,"absoluteStrokeWidth",8,!1),c=P(t,"iconNode",24,()=>[]);const u=(...b)=>b.filter((v,p,y)=>!!v&&y.indexOf(v)===p).join(" ");we();var g=Ts();Tn(g,(b,v)=>({...Ds,...a,width:o(),height:o(),stroke:l(),"stroke-width":b,class:v}),[()=>(H(i()),H(s()),H(o()),Z(()=>i()?Number(s())*24/Number(o()):s())),()=>(H(r()),H(n),Z(()=>u("lucide-icon","lucide",r()?`lucide-${r()}`:"",n.class)))]);var h=I(g);Tt(h,1,c,Dt,(b,v)=>{var p=Lr(()=>Pr(f(v),2));let y=()=>f(p)[0],x=()=>f(p)[1];var R=pe(),w=ge(R);zr(w,y,!0,(B,m)=>{Tn(B,()=>({...x()}))}),V(b,R)});var F=ee(h);Se(F,t,"default",{}),Y(g),V(e,g),Ce()}function xs(e,t){const n=Ee(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const a=[["path",{d:"M12 15V3"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}],["path",{d:"m7 10 5 5 5-5"}]];Ye(e,Ge({name:"download"},()=>n,{get iconNode(){return a},children:(r,l)=>{var o=pe(),s=ge(o);Se(s,t,"default",{}),V(r,o)},$$slots:{default:!0}}))}function Rs(e,t){const n=Ee(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const a=[["path",{d:"M14 4.1 12 6"}],["path",{d:"m5.1 8-2.9-.8"}],["path",{d:"m6 12-1.9 2"}],["path",{d:"M7.2 2.2 8 5.1"}],["path",{d:"M9.037 9.69a.498.498 0 0 1 .653-.653l11 4.5a.5.5 0 0 1-.074.949l-4.349 1.041a1 1 0 0 0-.74.739l-1.04 4.35a.5.5 0 0 1-.95.074z"}]];Ye(e,Ge({name:"mouse-pointer-click"},()=>n,{get iconNode(){return a},children:(r,l)=>{var o=pe(),s=ge(o);Se(s,t,"default",{}),V(r,o)},$$slots:{default:!0}}))}function Ls(e,t){const n=Ee(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const a=[["path",{d:"m19 11-8-8-8.6 8.6a2 2 0 0 0 0 2.8l5.2 5.2c.8.8 2 .8 2.8 0L19 11Z"}],["path",{d:"m5 2 5 5"}],["path",{d:"M2 13h15"}],["path",{d:"M22 20a2 2 0 1 1-4 0c0-1.6 1.7-2.4 2-4 .3 1.6 2 2.4 2 4Z"}]];Ye(e,Ge({name:"paint-bucket"},()=>n,{get iconNode(){return a},children:(r,l)=>{var o=pe(),s=ge(o);Se(s,t,"default",{}),V(r,o)},$$slots:{default:!0}}))}function Ps(e,t){const n=Ee(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const a=[["path",{d:"m12 9-8.414 8.414A2 2 0 0 0 3 18.828v1.344a2 2 0 0 1-.586 1.414A2 2 0 0 1 3.828 21h1.344a2 2 0 0 0 1.414-.586L15 12"}],["path",{d:"m18 9 .4.4a1 1 0 1 1-3 3l-3.8-3.8a1 1 0 1 1 3-3l.4.4 3.4-3.4a1 1 0 1 1 3 3z"}],["path",{d:"m2 22 .414-.414"}]];Ye(e,Ge({name:"pipette"},()=>n,{get iconNode(){return a},children:(r,l)=>{var o=pe(),s=ge(o);Se(s,t,"default",{}),V(r,o)},$$slots:{default:!0}}))}function $s(e,t){const n=Ee(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const a=[["path",{d:"M21 7v6h-6"}],["path",{d:"M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7"}]];Ye(e,Ge({name:"redo"},()=>n,{get iconNode(){return a},children:(r,l)=>{var o=pe(),s=ge(o);Se(s,t,"default",{}),V(r,o)},$$slots:{default:!0}}))}function Ns(e,t){const n=Ee(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const a=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7"}]];Ye(e,Ge({name:"save"},()=>n,{get iconNode(){return a},children:(r,l)=>{var o=pe(),s=ge(o);Se(s,t,"default",{}),V(r,o)},$$slots:{default:!0}}))}function Os(e,t){const n=Ee(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const a=[["path",{d:"M3 7v6h6"}],["path",{d:"M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13"}]];Ye(e,Ge({name:"undo"},()=>n,{get iconNode(){return a},children:(r,l)=>{var o=pe(),s=ge(o);Se(s,t,"default",{}),V(r,o)},$$slots:{default:!0}}))}function zs(e,t){const n=Ee(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const a=[["circle",{cx:"11",cy:"11",r:"8"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65"}],["line",{x1:"11",x2:"11",y1:"8",y2:"14"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11"}]];Ye(e,Ge({name:"zoom-in"},()=>n,{get iconNode(){return a},children:(r,l)=>{var o=pe(),s=ge(o);Se(s,t,"default",{}),V(r,o)},$$slots:{default:!0}}))}function Gs(e,t){const n=Ee(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const a=[["circle",{cx:"11",cy:"11",r:"8"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11"}]];Ye(e,Ge({name:"zoom-out"},()=>n,{get iconNode(){return a},children:(r,l)=>{var o=pe(),s=ge(o);Se(s,t,"default",{}),V(r,o)},$$slots:{default:!0}}))}var Ys=ce('<div class="tool-group"><div class="group-label">Tools</div> <div class="tool-grid"><button type="button" aria-label="Selection tool"><!></button> <button type="button" aria-label="Zoom in" class="tool-button"><!></button> <button type="button" aria-label="Zoom out" class="tool-button"><!></button> <button type="button" aria-label="Paint bucket tool"><!></button> <button type="button" aria-label="Color picker tool"><!></button> <button type="button" aria-label="Undo" class="tool-button"><!></button> <button type="button" aria-label="Redo" class="tool-button"><!></button> <button type="button" aria-label="Save" class="tool-button" title="Save Project"><!></button> <button type="button" aria-label="Load" class="tool-button" title="Load Project"><!></button></div></div>');function Is(e,t){_e(t,!1);const n=Le();let a=P(t,"paintMode",12,!1),r=P(t,"colorPickerMode",12,!1),l=P(t,"selectMode",12,!1),o=P(t,"canUndo",8,!1),s=P(t,"canRedo",8,!1);function i(){a(!a()),a()&&(r(!1),l(!1)),n("paintModeToggled",{paintMode:a()})}function c(){r(!r()),r()&&(a(!1),l(!1)),n("colorPickerModeToggled",{colorPickerMode:r()})}function u(){l(!l()),l()&&(a(!1),r(!1)),n("selectModeToggled",{selectMode:l()})}function g(){n("undo")}function h(){n("redo")}function F(){n("save")}function b(){n("load")}we();var v=Ys(),p=ee(I(v),2),y=I(p);let x;var R=I(y);{let S=be(()=>l()?"#333":"#555");Rs(R,{size:24,get color(){return f(S)}})}Y(y);var w=ee(y,2),B=I(w);zs(B,{size:24,color:"#555"}),Y(w);var m=ee(w,2),d=I(m);Gs(d,{size:24,color:"#555"}),Y(m);var _=ee(m,2);let E;var C=I(_);{let S=be(()=>a()?"#333":"#555");Ls(C,{size:24,get color(){return f(S)}})}Y(_);var L=ee(_,2);let T;var N=I(L);{let S=be(()=>r()?"#333":"#555");Ps(N,{size:24,get color(){return f(S)}})}Y(L);var W=ee(L,2),$=I(W);{let S=be(()=>o()?"#555":"#ccc");Os($,{size:24,get color(){return f(S)}})}Y(W);var D=ee(W,2),U=I(D);{let S=be(()=>s()?"#555":"#ccc");$s(U,{size:24,get color(){return f(S)}})}Y(D);var X=ee(D,2),le=I(X);Ns(le,{size:24,color:"#555"}),Y(X);var fe=ee(X,2),j=I(fe);xs(j,{size:24,color:"#555"}),Y(fe),Y(p),Y(v),ve((S,Fe,me,Je,Me,Ue,bt,gt,Ft,De)=>{x=xe(y,1,"tool-button",null,x,S),ie(y,"title",`Selection Tool (${Fe??""})`),ie(w,"title",`Zoom In (${me??""})`),ie(m,"title",`Zoom Out (${Je??""})`),E=xe(_,1,"tool-button",null,E,Me),ie(_,"title",`Fill Tool (${Ue??""})`),T=xe(L,1,"tool-button",null,T,bt),ie(L,"title",`Color Picker (${gt??""})`),ie(W,"title",`Undo (${Ft??""})`),W.disabled=!o(),ie(D,"title",`Redo (${De??""})`),D.disabled=!s()},[()=>({active:l()}),()=>(H(re),H(ae),Z(()=>re(ae.select))),()=>(H(re),H(ae),Z(()=>re(ae.zoomIn))),()=>(H(re),H(ae),Z(()=>re(ae.zoomOut))),()=>({active:a()}),()=>(H(re),H(ae),Z(()=>re(ae.fill))),()=>({active:r()}),()=>(H(re),H(ae),Z(()=>re(ae.colorPicker))),()=>(H(re),H(ae),Z(()=>re(ae.undo))),()=>(H(re),H(ae),Z(()=>re(ae.redo)))]),J("click",y,u),J("click",w,()=>n("zoomIn")),J("click",m,()=>n("zoomOut")),J("click",_,i),J("click",L,c),J("click",W,g),J("click",D,h),J("click",X,F),J("click",fe,b),V(e,v),Ce()}var qs=ce('<div class="canvas-size-group" style="display:flex; justify-content:center; flex-direction: column; align-items:center; width:100%;"><div class="group-label">Size</div> <div class="tool-grid" style="display:flex; justify-content: center"><label style="display:flex; flex-direction:column; align-items:center;"><input type="number" min="1" max="256"/></label></div></div>');function Xs(e,t){_e(t,!1);const n=Le();let a=P(t,"size",12,32);function r(c){const u=c.target;a(Math.max(1,Math.min(128,parseInt(u.value)||1))),n("sizeChanged",{size:a()})}we();var l=qs(),o=ee(I(l),2),s=I(o),i=I(s);ia(i),Y(s),Y(o),Y(l),Zr(i,a),J("input",i,r),V(e,l),Ce()}var Hs=ce('<div class="image-upload"><label class="upload-label"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#555" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align: middle;"><path d="M12 16V4"></path><polyline points="8 8 12 4 16 8"></polyline><rect x="4" y="16" width="16" height="4" rx="2"></rect></svg> <span>Upload image</span> <input type="file" accept="image/png, image/jpeg"/></label></div>');function js(e,t){_e(t,!1);const n=Le();function a(s){const i=s.target,c=i.files&&i.files[0];if(c){const u=new FileReader;u.onload=()=>{n("imageUploaded",{src:u.result,fileName:c.name})},u.readAsDataURL(c)}}we();var r=Hs(),l=I(r),o=ee(I(l),4);Y(l),Y(r),J("change",o,a),V(e,r),Ce()}var Us=ce('<button class="toolbar-toggle" aria-label="Show/hide toolbar"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#555" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align: middle;"><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg></button>');function Zs(e,t){_e(t,!1);const n=Le();function a(){n("toggle")}we();var r=Us();J("click",r,a),V(e,r),Ce()}var Vs=ce("<!> <div><!> <!> <!> <!> <!></div>",1);function Ws(e,t){_e(t,!1);const n=Le();let a=P(t,"selectedShape",12,"square");const r=Ya();let l=P(t,"selectedColor",28,()=>r.length>0?r[0].rgb:"#000000"),o=P(t,"paintMode",12,!1),s=P(t,"colorPickerMode",12,!1),i=P(t,"selectMode",12,!1),c=P(t,"size",12,32),u=K(!0),g=P(t,"quarterRotation",12,0),h=P(t,"halfCircleRotation",12,0),F=P(t,"canUndo",12,!1),b=P(t,"canRedo",12,!1);function v(S){a(S.detail.shape),n("shapeSelected",S.detail)}function p(S){g(S.detail.rotation),n("quarterRotationChanged",S.detail)}function y(S){h(S.detail.rotation),n("halfCircleRotationChanged",S.detail)}function x(S){l(S.detail.color),n("colorSelected",S.detail)}function R(S){o(S.detail.paintMode),n("paintModeToggled",S.detail)}function w(S){s(S.detail.colorPickerMode),n("colorPickerModeToggled",S.detail)}function B(S){i(S.detail.selectMode),n("selectModeToggled",S.detail)}function m(){n("undo")}function d(){n("redo")}function _(S){c(S.detail.size),n("sizeChanged",S.detail)}function E(S){n("imageUploaded",S.detail)}function C(){n("save")}function L(){n("load")}function T(){A(u,!f(u))}we();var N=Vs(),W=ge(N);Zs(W,{$$events:{toggle:T}});var $=ee(W,2);let D;var U=I($);Ss(U,{get selectedColor(){return l()},get selectedShape(){return a()},set selectedShape(S){a(S)},get quarterRotation(){return g()},set quarterRotation(S){g(S)},get halfCircleRotation(){return h()},set halfCircleRotation(S){h(S)},$$events:{shapeSelected:v,quarterRotationChanged:p,halfCircleRotationChanged:y},$$legacy:!0});var X=ee(U,2);Is(X,{get paintMode(){return o()},set paintMode(S){o(S)},get colorPickerMode(){return s()},set colorPickerMode(S){s(S)},get selectMode(){return i()},set selectMode(S){i(S)},get canUndo(){return F()},set canUndo(S){F(S)},get canRedo(){return b()},set canRedo(S){b(S)},$$events:{paintModeToggled:R,colorPickerModeToggled:w,selectModeToggled:B,undo:m,redo:d,zoomIn:()=>n("zoomIn"),zoomOut:()=>n("zoomOut"),save:C,load:L},$$legacy:!0});var le=ee(X,2);As(le,{get sortedColorPalette(){return r},get selectedColor(){return l()},set selectedColor(S){l(S)},$$events:{colorSelected:x},$$legacy:!0});var fe=ee(le,2);Xs(fe,{get size(){return c()},set size(S){c(S)},$$events:{sizeChanged:_},$$legacy:!0});var j=ee(fe,2);js(j,{$$events:{imageUploaded:E}}),Y($),ve(S=>D=xe($,1,"toolbar left",null,D,S),[()=>({visible:f(u)})]),V(e,N),Ce()}function Ks(e,t,n,a){const r=O(e,t,n).lab();let l=a[0],o=1/0;for(const s of a){const i=O.deltaE(r,O(s).lab());i<o&&(o=i,l=s)}return l}function Js(e){return e<85?"square":e<170?"circle":"quarter"}function Qs(e,t,n=32,a=32){return new Promise((r,l)=>{const o=new window.Image;o.src=e,o.onload=()=>{const s=document.createElement("canvas"),i=s.getContext("2d");if(s.width=n,s.height=a,!i){l(new Error("Could not get 2D context"));return}i.drawImage(o,0,0,n,a);const c=i.getImageData(0,0,n,a).data,u=[];for(let g=0;g<c.length;g+=4){const h=g/4,F=h%n,b=Math.floor(h/n);let v=c[g],p=c[g+1],y=c[g+2];c[g+3]===0&&(v=255,p=255,y=255);const R=(v+p+y)/3;let w=Js(R),B=0;const m=b===0,d=b===a-1,_=F===0,E=F===n-1;w==="quarter"&&(m||d||_||E)?m?B=2:d?B=0:_?B=1:E&&(B=3):w==="quarter"&&(w=R<128?"square":"circle");const C=Ks(v,p,y,t);u.push({shape:w,color:C,rotation:B})}r(u)},o.onerror=l})}class e0{history=[];currentIndex=-1;maxHistory=50;constructor(t){t&&this.addState(t)}addState(t){this.currentIndex<this.history.length-1&&(this.history=this.history.slice(0,this.currentIndex+1)),this.history.push({grid:JSON.parse(JSON.stringify(t)),timestamp:Date.now()}),this.history.length>this.maxHistory?this.history.shift():this.currentIndex++}undo(){return this.canUndo()?(this.currentIndex--,JSON.parse(JSON.stringify(this.history[this.currentIndex].grid))):null}redo(){return this.canRedo()?(this.currentIndex++,JSON.parse(JSON.stringify(this.history[this.currentIndex].grid))):null}canUndo(){return this.currentIndex>0}canRedo(){return this.currentIndex<this.history.length-1}clear(){this.history=[],this.currentIndex=-1}getCurrentState(){return this.currentIndex>=0&&this.currentIndex<this.history.length?JSON.parse(JSON.stringify(this.history[this.currentIndex].grid)):null}}class t0{clipboardData=null;copy(t,n,a){const{startX:r,startY:l,endX:o,endY:s}=this.normalizeSelection(n),i=o-r+1,c=s-l+1,u=[];for(let g=l;g<=s;g++)for(let h=r;h<=o;h++){const F=g*a+h;u.push(t[F]?JSON.parse(JSON.stringify(t[F])):null)}this.clipboardData={cells:u,width:i,height:c}}cut(t,n,a){return this.copy(t,n,a),this.deleteSelection(t,n,a)}paste(t,n,a,r,l){if(!this.clipboardData)return t;const o=[...t],{cells:s,width:i,height:c}=this.clipboardData;for(let u=0;u<c;u++)for(let g=0;g<i;g++){const h=n+g,F=a+u;if(h>=0&&h<r&&F>=0&&F<l){const b=u*i+g,v=F*r+h;o[v]=s[b]?JSON.parse(JSON.stringify(s[b])):null}}return o}deleteSelection(t,n,a){const{startX:r,startY:l,endX:o,endY:s}=this.normalizeSelection(n),i=[...t];for(let c=l;c<=s;c++)for(let u=r;u<=o;u++){const g=c*a+u;i[g]=null}return i}rotateSelection(t,n,a,r=!0){const{startX:l,startY:o,endX:s,endY:i}=this.normalizeSelection(n),c=s-l+1,u=i-o+1,g=[];for(let F=o;F<=i;F++)for(let b=l;b<=s;b++){const v=F*a+b;g.push(t[v])}const h=new Array(c*u);for(let F=0;F<u;F++)for(let b=0;b<c;b++){const v=F*c+b;let p;r?p=b*u+(u-1-F):p=(c-1-b)*u+F;const y=g[v];h[p]=y?{...y,rotation:(y.rotation+(r?1:-1)+4)%4}:null}if(c===u){const F=[...t];for(let b=0;b<u;b++)for(let v=0;v<c;v++){const p=(o+b)*a+(l+v),y=b*c+v;F[p]=h[y]}return F}return t}moveSelection(t,n,a,r,l,o){const{startX:s,startY:i,endX:c,endY:u}=this.normalizeSelection(n),g=c-s+1,h=u-i+1,F=Math.max(0,Math.min(l-g,s+a)),b=Math.max(0,Math.min(o-h,i+r)),v=F+g-1,p=b+h-1;if(F===s&&b===i)return{grid:t,selection:n};const y=[];for(let w=i;w<=u;w++)for(let B=s;B<=c;B++){const m=w*l+B;y.push(t[m])}let x=this.deleteSelection(t,n,l);for(let w=0;w<h;w++)for(let B=0;B<g;B++){const m=w*g+B,d=(b+w)*l+(F+B);x[d]=y[m]}const R={...n,startX:F,startY:b,endX:v,endY:p};return{grid:x,selection:R}}hasClipboardData(){return this.clipboardData!==null}getClipboardSize(){return this.clipboardData?{width:this.clipboardData.width,height:this.clipboardData.height}:null}normalizeSelection(t){return{startX:Math.min(t.startX,t.endX),startY:Math.min(t.startY,t.endY),endX:Math.max(t.startX,t.endX),endY:Math.max(t.startY,t.endY)}}}var n0=ce('<main class="svelte-1uha8ag"><!> <!></main>');function f0(e,t){_e(t,!1);let n=K("square"),a=K(Ke.length>0?Ke[0].rgb:"#000000"),r=K(null),l=K(!1),o=K(!1),s=K("left"),i=K(1),c=K(32),u=K(!1),g=K(0),h=K(0),F="dotsly.json",b=K({startX:0,startY:0,endX:0,endY:0,active:!1}),v,p,y=K(!1),x=K(!1);function R(){A(i,Math.min(f(i)+.1,3))}function w(){A(i,Math.max(f(i)-.1,.2))}function B(k){for(let Q=0;Q<ue.length;Q++)for(let ne=0;ne<ue[Q].length;ne++)if(ue[Q][ne].rgb===k)return{row:Q,col:ne};return null}function m(){const k=B(f(a));if(k&&k.col>0)A(a,ue[k.row][k.col-1].rgb);else if(k&&k.row>0){const Q=k.row-1,ne=ue[Q].length-1;A(a,ue[Q][ne].rgb)}}function d(){const k=B(f(a));k&&k.col<ue[k.row].length-1?A(a,ue[k.row][k.col+1].rgb):k&&k.row<ue.length-1&&A(a,ue[k.row+1][0].rgb)}function _(){const k=B(f(a));if(k&&k.row>0){const Q=Math.min(k.col,ue[k.row-1].length-1);A(a,ue[k.row-1][Q].rgb)}}function E(){const k=B(f(a));if(k&&k.row<ue.length-1){const Q=Math.min(k.col,ue[k.row+1].length-1);A(a,ue[k.row+1][Q].rgb)}}function C(){if(!f(r))return;const k={grid:f(r),size:f(c),version:"1.0"},Q=JSON.stringify(k,null,2),ne=new Blob([Q],{type:"application/json"}),mt=URL.createObjectURL(ne),Ze=document.createElement("a");Ze.href=mt,Ze.download=F,document.body.appendChild(Ze),Ze.click(),document.body.removeChild(Ze),URL.revokeObjectURL(mt)}function L(){const k=document.createElement("input");k.type="file",k.accept=".json",k.onchange=Q=>{const ne=Q.target.files?.[0];if(!ne)return;const mt=new FileReader;mt.onload=Ze=>{try{const tt=JSON.parse(Ze.target?.result);tt.grid&&tt.size?(A(r,tt.grid),A(c,tt.size),F=ne.name,N(f(r))):alert("Invalid file format")}catch(tt){alert("Error loading file: "+tt)}},mt.readAsText(ne)},k.click()}dn(()=>{v=new e0,p=new t0,f(r)||(A(r,Array(f(c)*f(c)).fill(null)),v.addState(f(r))),T(),window.addEventListener("keydown",W)}),Zn(()=>{typeof window<"u"&&window.removeEventListener("keydown",W)});function T(){A(y,v?.canUndo()??!1),A(x,v?.canRedo()??!1)}function N(k){v&&(v.addState(k),T())}function W(k){if(!(k.target instanceof HTMLInputElement||k.target instanceof HTMLTextAreaElement)){for(const[Q,ne]of Object.entries(ae))if(Es(k,ne)){k.preventDefault(),$(ne.action);break}}}function $(k){switch(k){case"select":A(o,!f(o)),f(o)&&(A(l,!1),A(u,!1));break;case"square":A(n,"square");break;case"circle":A(n,"circle");break;case"quarter":f(n)==="quarter"?A(g,(f(g)+1)%4):(A(n,"quarter"),A(g,0));break;case"halfCircle":f(n)==="halfCircle"?A(h,(f(h)+1)%4):(A(n,"halfCircle"),A(h,0));break;case"fill":A(l,!f(l)),f(l)&&(A(o,!1),A(u,!1));break;case"colorPicker":A(u,!f(u)),f(u)&&(A(o,!1),A(l,!1));break;case"zoomIn":R();break;case"zoomOut":w();break;case"undo":me();break;case"redo":Je();break;case"cut":bt();break;case"copy":gt();break;case"paste":Ft();break;case"selectAll":Ct();break;case"deselect":Gt();break;case"delete":De();break;case"rotateLeft":f(b).active&&wt(!1);break;case"rotateRight":f(b).active&&wt(!0);break;case"moveUp":f(b).active&&Qe(0,-1);break;case"moveDown":f(b).active&&Qe(0,1);break;case"moveLeft":f(b).active&&Qe(-1,0);break;case"moveRight":f(b).active&&Qe(1,0);break;case"colorLeft":m();break;case"colorRight":d();break;case"colorUp":_();break;case"colorDown":E();break}}function D(k){A(n,k.detail.shape)}function U(k){A(g,k.detail.rotation)}function X(k){A(h,k.detail.rotation)}function le(k){A(a,k.detail.color)}async function fe(k){const Q=Ke.map(ne=>ne.rgb);A(r,await Qs(k.detail.src,Q,f(c),f(c))),N(f(r)),k.detail.fileName?F=`${k.detail.fileName.replace(/\.[^/.]+$/,"")}.json`:F="dotsly.json"}function j(k){A(c,k.detail.size),A(r,null)}function S(k){A(u,k.detail.colorPickerMode)}function Fe(k){A(o,k.detail.selectMode),f(o)&&(A(l,!1),A(u,!1))}function me(){if(v){const k=v.undo();k&&(A(r,k),T())}}function Je(){if(v){const k=v.redo();k&&(A(r,k),T())}}function Me(k){A(b,k.detail.selection)}function Ue(k){A(r,k.detail.grid),f(r)&&N(f(r))}function bt(){if(f(b).active&&f(r)&&p){const k=p.cut(f(r),f(b),f(c));A(r,k),N(f(r)),A(b,{...f(b),active:!1})}}function gt(){f(b).active&&f(r)&&p&&p.copy(f(r),f(b),f(c))}function Ft(){if(f(r)&&p&&p.hasClipboardData()){const k=f(b).active?f(b).startX:0,Q=f(b).active?f(b).startY:0,ne=p.paste(f(r),k,Q,f(c),f(c));A(r,ne),N(f(r))}}function De(){if(f(b).active&&f(r)&&p){const k=p.deleteSelection(f(r),f(b),f(c));A(r,k),N(f(r)),A(b,{...f(b),active:!1})}}function Ct(){A(b,{startX:0,startY:0,endX:f(c)-1,endY:f(c)-1,active:!0}),A(o,!0),A(l,!1),A(u,!1)}function Gt(){A(b,{...f(b),active:!1})}function wt(k=!0){if(f(b).active&&f(r)&&p){const Q=p.rotateSelection(f(r),f(b),f(c),k);A(r,Q),N(f(r))}}function Qe(k,Q){if(f(b).active&&f(r)&&p){const ne=p.moveSelection(f(r),f(b),k,Q,f(c),f(c));A(r,ne.grid),A(b,ne.selection),N(f(r))}}function Pe(k){A(a,k.detail.color),A(u,!1)}we();var et=n0();Qa(k=>{$r.title="Dotsly"});var Mt=I(et);Ws(Mt,{get toolbarPosition(){return f(s)},set toolbarPosition(k){A(s,k)},get selectedColor(){return f(a)},set selectedColor(k){A(a,k)},get selectedShape(){return f(n)},set selectedShape(k){A(n,k)},get paintMode(){return f(l)},set paintMode(k){A(l,k)},get selectMode(){return f(o)},set selectMode(k){A(o,k)},get colorPickerMode(){return f(u)},set colorPickerMode(k){A(u,k)},get quarterRotation(){return f(g)},set quarterRotation(k){A(g,k)},get halfCircleRotation(){return f(h)},set halfCircleRotation(k){A(h,k)},get size(){return f(c)},set size(k){A(c,k)},get canUndo(){return f(y)},set canUndo(k){A(y,k)},get canRedo(){return f(x)},set canRedo(k){A(x,k)},$$events:{shapeSelected:D,colorSelected:le,imageUploaded:fe,paintModeToggled:k=>A(l,k.detail.paintMode),colorPickerModeToggled:S,selectModeToggled:Fe,undo:me,redo:Je,zoomIn:R,zoomOut:w,quarterRotationChanged:U,halfCircleRotationChanged:X,sizeChanged:j,save:C,load:L},$$legacy:!0});var Yt=ee(Mt,2);{var pt=k=>{Un(k,{get width(){return f(c)},get height(){return f(c)},get selectedShape(){return f(n)},get selectedColor(){return f(a)},get selectMode(){return f(o)},get grid(){return f(r)},get paintMode(){return f(l)},get colorPickerMode(){return f(u)},get toolbarPosition(){return f(s)},get zoom(){return f(i)},get quarterRotation(){return f(g)},get halfCircleRotation(){return f(h)},get selection(){return f(b)},$$events:{colorPicked:Pe,selectionChanged:Me,gridChanged:Ue}})},ja=k=>{Un(k,{get width(){return f(c)},get height(){return f(c)},get selectedShape(){return f(n)},get selectedColor(){return f(a)},get selectMode(){return f(o)},get paintMode(){return f(l)},get colorPickerMode(){return f(u)},get toolbarPosition(){return f(s)},get zoom(){return f(i)},get quarterRotation(){return f(g)},get halfCircleRotation(){return f(h)},get selection(){return f(b)},$$events:{colorPicked:Pe,selectionChanged:Me,gridChanged:Ue}})};Ie(Yt,k=>{f(r)?k(pt):k(ja,!1)})}Y(et),V(e,et),Ce()}export{f0 as component};
