import"../chunks/DsnmJJEf.js";import"../chunks/DXAwGQm7.js";import{i as Sl,a as Al,c as Pl,d as zl,n as Dl,b as Bl,e as Re,o as Ia,f as le,g as zt,j as $l}from"../chunks/Csy9xEDe.js";import{B as La,w as In,aT as Dt,z as mn,h as oe,aA as Bt,a as wa,g as i,W as Me,x as El,H as Rl,y as ja,A as We,J as Xe,ag as Il,aI as Ll,C as sn,F as Nl,aU as Ln,aV as Nn,D as tn,af as Va,a8 as ee,X as Za,aF as $t,ax as Et,G as Na,I as Rt,aW as Ol,aX as Wn,M as ql,an as rn,aY as Hl,at as Yl,aZ as Xl,aE as Gl,a_ as Ul,T as It,a$ as Ql,E as jl,b0 as Vl,aH as Zl,K as Lt,b1 as Jl,b2 as Wl,av as Kl,b3 as e0,b4 as n0,b5 as a0,b6 as t0,b7 as l0,b8 as s0,U as r0,b9 as o0,ba as i0,bb as d0,bc as c0,aa as Nt,d as U,L as u0,bd as f0,p as Te,n as he,q as Y,s as q,R as k,t as we,m as Q,o as Se,k as xe,l as ye,v as re,f as X,be as Ta,bf as Ot,bg as F0,bh as h0,ab as b0,bi as g0,bj as p0}from"../chunks/DckqTTcM.js";import{p as D,b as Ja,i as Ye,l as ze,s as Ie}from"../chunks/q0klybCy.js";import{i as Ae}from"../chunks/BBao4eQ6.js";import{s as De}from"../chunks/M1l1I-Ar.js";function An(e,n){return n}function v0(e,n,a){for(var l=e.items,t=[],s=n.length,r=0;r<s;r++)Xl(n[r].e,t,!0);var o=s>0&&t.length===0&&a!==null;if(o){var d=a.parentNode;Gl(d),d.append(a),l.clear(),Be(e,n[0].prev,n[s-1].next)}Ul(t,()=>{for(var u=0;u<s;u++){var f=n[u];o||(l.delete(f.k),Be(e,f.prev,f.next)),rn(f.e,!o)}})}function Pn(e,n,a,l,t,s=null){var r=e,o={flags:n,items:new Map,first:null},d=(n&Dt)!==0;if(d){var u=e;r=oe?mn(Bt(u)):u.appendChild(La())}oe&&wa();var f=null,b=!1,h=new Map,c=Me(()=>{var x=a();return Et(x)?x:x==null?[]:$t(x)}),F,p;function _(){m0(p,F,o,h,r,t,n,l,a),s!==null&&(F.length===0?f?Na(f):f=sn(()=>s(r)):f!==null&&Rt(f,()=>{f=null}))}In(()=>{p??=It,F=i(c);var x=F.length;if(b&&x===0)return;b=x===0;let C=!1;if(oe){var $=El(r)===Rl;$!==(x===0)&&(r=ja(),mn(r),We(!1),C=!0)}if(oe){for(var T=null,B,v=0;v<x;v++){if(Xe.nodeType===Il&&Xe.data===Ll){r=Xe,C=!0,We(!1);break}var m=F[v],P=l(m,v);B=Sa(Xe,o,T,null,m,P,v,t,n,a),o.items.set(P,B),T=B}x>0&&mn(ja())}if(oe)x===0&&s&&(f=sn(()=>s(r)));else if(Nl()){var N=new Set,S=tn;for(v=0;v<x;v+=1){m=F[v],P=l(m,v);var O=o.items.get(P)??h.get(P);O?(n&(Ln|Nn))!==0&&qt(O,m,v,n):(B=Sa(null,o,null,null,m,P,v,t,n,a,!0),h.set(P,B)),N.add(P)}for(const[L,j]of o.items)N.has(L)||S.skipped_effects.add(j.e);S.add_callback(_)}else _();C&&We(!0),i(c)}),oe&&(r=Xe)}function m0(e,n,a,l,t,s,r,o,d){var u=(r&Hl)!==0,f=(r&(Ln|Nn))!==0,b=n.length,h=a.items,c=a.first,F=c,p,_=null,x,C=[],$=[],T,B,v,m;if(u)for(m=0;m<b;m+=1)T=n[m],B=o(T,m),v=h.get(B),v!==void 0&&(v.a?.measure(),(x??=new Set).add(v));for(m=0;m<b;m+=1){if(T=n[m],B=o(T,m),v=h.get(B),v===void 0){var P=l.get(B);if(P!==void 0){l.delete(B),h.set(B,P);var N=_?_.next:F;Be(a,_,P),Be(a,P,N),Kn(P,N,t),_=P}else{var S=F?F.e.nodes_start:t;_=Sa(S,a,_,_===null?a.first:_.next,T,B,m,s,r,d)}h.set(B,_),C=[],$=[],F=_.next;continue}if(f&&qt(v,T,m,r),(v.e.f&Wn)!==0&&(Na(v.e),u&&(v.a?.unfix(),(x??=new Set).delete(v))),v!==F){if(p!==void 0&&p.has(v)){if(C.length<$.length){var O=$[0],L;_=O.prev;var j=C[0],ne=C[C.length-1];for(L=0;L<C.length;L+=1)Kn(C[L],O,t);for(L=0;L<$.length;L+=1)p.delete($[L]);Be(a,j.prev,ne.next),Be(a,_,j),Be(a,ne,O),F=O,_=ne,m-=1,C=[],$=[]}else p.delete(v),Kn(v,F,t),Be(a,v.prev,v.next),Be(a,v,_===null?a.first:_.next),Be(a,_,v),_=v;continue}for(C=[],$=[];F!==null&&F.k!==B;)(F.e.f&Wn)===0&&(p??=new Set).add(F),$.push(F),F=F.next;if(F===null)continue;v=F}C.push(v),_=v,F=v.next}if(F!==null||p!==void 0){for(var ae=p===void 0?[]:$t(p);F!==null;)(F.e.f&Wn)===0&&ae.push(F),F=F.next;var se=ae.length;if(se>0){var z=(r&Dt)!==0&&b===0?t:null;if(u){for(m=0;m<se;m+=1)ae[m].a?.measure();for(m=0;m<se;m+=1)ae[m].a?.fix()}v0(a,ae,z)}}u&&ql(()=>{if(x!==void 0)for(v of x)v.a?.apply()}),e.first=a.first&&a.first.e,e.last=_&&_.e;for(var A of l.values())rn(A.e);l.clear()}function qt(e,n,a,l){(l&Ln)!==0&&Va(e.v,n),(l&Nn)!==0?Va(e.i,a):e.i=a}function Sa(e,n,a,l,t,s,r,o,d,u,f){var b=(d&Ln)!==0,h=(d&Ol)===0,c=b?h?ee(t,!1,!1):Za(t):t,F=(d&Nn)===0?r:Za(r),p={i:F,v:c,k:s,a:null,e:null,prev:a,next:l};try{if(e===null){var _=document.createDocumentFragment();_.append(e=La())}return p.e=sn(()=>o(e,c,F,u),oe),p.e.prev=a&&a.e,p.e.next=l&&l.e,a===null?f||(n.first=p):(a.next=p,a.e.next=p.e),l!==null&&(l.prev=p,l.e.prev=p.e),p}finally{}}function Kn(e,n,a){for(var l=e.next?e.next.e.nodes_start:a,t=n?n.e.nodes_start:a,s=e.e.nodes_start;s!==null&&s!==l;){var r=Yl(s);t.before(s),s=r}}function Be(e,n,a){n===null?e.first=a:(n.next=a,n.e.next=a&&a.e),a!==null&&(a.prev=n,a.e.prev=n&&n.e)}function _0(e,n,a,l,t,s){let r=oe;oe&&wa();var o,d,u=null;oe&&Xe.nodeType===Ql&&(u=Xe,wa());var f=oe?Xe:e,b;In(()=>{const h=n()||null;var c=Vl;h!==o&&(b&&(h===null?Rt(b,()=>{b=null,d=null}):h===d?Na(b):rn(b)),h&&h!==d&&(b=sn(()=>{if(u=oe?u:document.createElementNS(c,h),Zl(u,u),l){oe&&Sl(h)&&u.append(document.createComment(""));var F=oe?Bt(u):u.appendChild(La());oe&&(F===null?We(!1):mn(F)),l(u,F)}It.nodes_end=u,f.before(u)})),o=h,o&&(d=o))},jl),r&&(We(!0),mn(f))}function M0(e,n){var a=void 0,l;In(()=>{a!==(a=n())&&(l&&(rn(l),l=null),a&&(l=sn(()=>{Lt(()=>a(e))})))})}function Ht(e){var n,a,l="";if(typeof e=="string"||typeof e=="number")l+=e;else if(typeof e=="object")if(Array.isArray(e)){var t=e.length;for(n=0;n<t;n++)e[n]&&(a=Ht(e[n]))&&(l&&(l+=" "),l+=a)}else for(a in e)e[a]&&(l&&(l+=" "),l+=a);return l}function y0(){for(var e,n,a=0,l="",t=arguments.length;a<t;a++)(e=arguments[a])&&(n=Ht(e))&&(l&&(l+=" "),l+=n);return l}function k0(e){return typeof e=="object"?y0(e):e??""}const Wa=[...` 	
\r\f \v\uFEFF`];function x0(e,n,a){var l=e==null?"":""+e;if(n&&(l=l?l+" "+n:n),a){for(var t in a)if(a[t])l=l?l+" "+t:t;else if(l.length)for(var s=t.length,r=0;(r=l.indexOf(t,r))>=0;){var o=r+s;(r===0||Wa.includes(l[r-1]))&&(o===l.length||Wa.includes(l[o]))?l=(r===0?"":l.substring(0,r))+l.substring(o+1):r=o}}return l===""?null:l}function Ka(e,n=!1){var a=n?" !important;":";",l="";for(var t in e){var s=e[t];s!=null&&s!==""&&(l+=" "+t+": "+s+a)}return l}function ea(e){return e[0]!=="-"||e[1]!=="-"?e.toLowerCase():e}function C0(e,n){if(n){var a="",l,t;if(Array.isArray(n)?(l=n[0],t=n[1]):l=n,e){e=String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();var s=!1,r=0,o=!1,d=[];l&&d.push(...Object.keys(l).map(ea)),t&&d.push(...Object.keys(t).map(ea));var u=0,f=-1;const p=e.length;for(var b=0;b<p;b++){var h=e[b];if(o?h==="/"&&e[b-1]==="*"&&(o=!1):s?s===h&&(s=!1):h==="/"&&e[b+1]==="*"?o=!0:h==='"'||h==="'"?s=h:h==="("?r++:h===")"&&r--,!o&&s===!1&&r===0){if(h===":"&&f===-1)f=b;else if(h===";"||b===p-1){if(f!==-1){var c=ea(e.substring(u,f).trim());if(!d.includes(c)){h!==";"&&b++;var F=e.substring(u,b).trim();a+=" "+F+";"}}u=b+1,f=-1}}}}return l&&(a+=Ka(l)),t&&(a+=Ka(t,!0)),a=a.trim(),a===""?null:a}return e==null?null:String(e)}function Ee(e,n,a,l,t,s){var r=e.__className;if(oe||r!==a||r===void 0){var o=x0(a,l,s);(!oe||o!==e.getAttribute("class"))&&(o==null?e.removeAttribute("class"):n?e.className=o:e.setAttribute("class",o)),e.__className=a}else if(s&&t!==s)for(var d in s){var u=!!s[d];(t==null||u!==!!t[d])&&e.classList.toggle(d,u)}return s}function na(e,n={},a,l){for(var t in a){var s=a[t];n[t]!==s&&(a[t]==null?e.style.removeProperty(t):e.style.setProperty(t,s,l))}}function Qe(e,n,a,l){var t=e.__style;if(oe||t!==n){var s=C0(n,l);(!oe||s!==e.getAttribute("style"))&&(s==null?e.removeAttribute("style"):e.style.cssText=s),e.__style=n}else l&&(Array.isArray(l)?(na(e,a?.[0],l[0]),na(e,a?.[1],l[1],"important")):na(e,a,l));return l}function Aa(e,n,a=!1){if(e.multiple){if(n==null)return;if(!Et(n))return Jl();for(var l of e.options)l.selected=n.includes(et(l));return}for(l of e.options){var t=et(l);if(Wl(t,n)){l.selected=!0;return}}(!a||n!==void 0)&&(e.selectedIndex=-1)}function w0(e){var n=new MutationObserver(()=>{Aa(e,e.__value)});n.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),Kl(()=>{n.disconnect()})}function et(e){return"__value"in e?e.__value:e.value}const bn=Symbol("class"),gn=Symbol("style"),Yt=Symbol("is custom element"),Xt=Symbol("is html");function Gt(e){if(oe){var n=!1,a=()=>{if(!n){if(n=!0,e.hasAttribute("value")){var l=e.value;Fe(e,"value",null),e.value=l}if(e.hasAttribute("checked")){var t=e.checked;Fe(e,"checked",null),e.checked=t}}};e.__on_r=a,o0(a),i0()}}function T0(e,n){n?e.hasAttribute("selected")||e.setAttribute("selected",""):e.removeAttribute("selected")}function Fe(e,n,a,l){var t=Ut(e);oe&&(t[n]=e.getAttribute(n),n==="src"||n==="srcset"||n==="href"&&e.nodeName==="LINK")||t[n]!==(t[n]=a)&&(n==="loading"&&(e[d0]=a),a==null?e.removeAttribute(n):typeof a!="string"&&Qt(e).includes(n)?e[n]=a:e.setAttribute(n,a))}function S0(e,n,a,l,t=!1,s=!1){if(oe&&t&&e.tagName==="INPUT"){var r=e,o=r.type==="checkbox"?"defaultChecked":"defaultValue";o in a||Gt(r)}var d=Ut(e),u=d[Yt],f=!d[Xt];let b=oe&&u;b&&We(!1);var h=n||{},c=e.tagName==="OPTION";for(var F in n)F in a||(a[F]=null);a.class?a.class=k0(a.class):a[bn]&&(a.class=null),a[gn]&&(a.style??=null);var p=Qt(e);for(const v in a){let m=a[v];if(c&&v==="value"&&m==null){e.value=e.__value="",h[v]=m;continue}if(v==="class"){var _=e.namespaceURI==="http://www.w3.org/1999/xhtml";Ee(e,_,m,l,n?.[bn],a[bn]),h[v]=m,h[bn]=a[bn];continue}if(v==="style"){Qe(e,m,n?.[gn],a[gn]),h[v]=m,h[gn]=a[gn];continue}var x=h[v];if(!(m===x&&!(m===void 0&&e.hasAttribute(v)))){h[v]=m;var C=v[0]+v[1];if(C!=="$$")if(C==="on"){const P={},N="$$"+v;let S=v.slice(2);var $=Bl(S);if(Al(S)&&(S=S.slice(0,-7),P.capture=!0),!$&&x){if(m!=null)continue;e.removeEventListener(S,h[N],P),h[N]=null}if(m!=null)if($)e[`__${S}`]=m,zl([S]);else{let O=function(L){h[v].call(this,L)};h[N]=Pl(S,e,O,P)}else $&&(e[`__${S}`]=void 0)}else if(v==="style")Fe(e,v,m);else if(v==="autofocus")s0(e,!!m);else if(!u&&(v==="__value"||v==="value"&&m!=null))e.value=e.__value=m;else if(v==="selected"&&c)T0(e,m);else{var T=v;f||(T=Dl(T));var B=T==="defaultValue"||T==="defaultChecked";if(m==null&&!u&&!B)if(d[v]=null,T==="value"||T==="checked"){let P=e;const N=n===void 0;if(T==="value"){let S=P.defaultValue;P.removeAttribute(T),P.defaultValue=S,P.value=P.__value=N?S:null}else{let S=P.defaultChecked;P.removeAttribute(T),P.defaultChecked=S,P.checked=N?S:!1}}else e.removeAttribute(v);else B||p.includes(T)&&(u||typeof m!="string")?(e[T]=m,T in d&&(d[T]=r0)):typeof m!="function"&&Fe(e,T,m)}}}return b&&We(!0),h}function nt(e,n,a=[],l=[],t,s=!1,r=!1){e0(a,l,o=>{var d=void 0,u={},f=e.nodeName==="SELECT",b=!1;if(In(()=>{var c=n(...o.map(i)),F=S0(e,d,c,t,s,r);b&&f&&"value"in c&&Aa(e,c.value);for(let _ of Object.getOwnPropertySymbols(u))c[_]||rn(u[_]);for(let _ of Object.getOwnPropertySymbols(c)){var p=c[_];_.description===t0&&(!d||p!==d[_])&&(u[_]&&rn(u[_]),u[_]=sn(()=>M0(e,()=>p))),F[_]=p}d=F}),f){var h=e;Lt(()=>{Aa(h,d.value,!0),w0(h)})}b=!0})}function Ut(e){return e.__attributes??={[Yt]:e.nodeName.includes("-"),[Xt]:e.namespaceURI===n0}}var at=new Map;function Qt(e){var n=e.getAttribute("is")||e.nodeName,a=at.get(n);if(a)return a;at.set(n,a=[]);for(var l,t=e,s=Element.prototype;s!==t;){l=l0(t);for(var r in l)l[r].set&&a.push(r);t=a0(t)}return a}function A0(e,n,a=n){var l=new WeakSet;c0(e,"input",async t=>{var s=t?e.defaultValue:e.value;if(s=aa(e)?ta(s):s,a(s),tn!==null&&l.add(tn),await Nt(),s!==(s=n())){var r=e.selectionStart,o=e.selectionEnd;e.value=s??"",o!==null&&(e.selectionStart=r,e.selectionEnd=Math.min(o,e.value.length))}}),(oe&&e.defaultValue!==e.value||U(n)==null&&e.value)&&(a(aa(e)?ta(e.value):e.value),tn!==null&&l.add(tn)),u0(()=>{var t=n();if(e===document.activeElement){var s=f0??tn;if(l.has(s))return}aa(e)&&t===ta(e.value)||e.type==="date"&&!t&&!e.value||t!==e.value&&(e.value=t??"")})}function aa(e){var n=e.type;return n==="number"||n==="range"}function ta(e){return e===""?null:+e}const P0=`Part,Color,Quantity,Is Spare
73767,0,1,False
24246,0,4,False
25269,0,11,False
41770,0,1,False
41769,0,1,False
25269,321,7,False
3070b,3,6,False
78169,3,1,False
24246,3,3,False
25269,3,4,False
25269,30,12,False
3062b,25,2,False
3024,25,2,False
3710,25,4,False
30565,25,2,False
3070b,25,2,False
80390,15,1,False
3004,15,2,False
3009,15,1,False
3008,15,2,False
3035,15,2,False
35480,15,2,False
15573,15,1,False
3747b,15,1,False
24246,15,4,False
25269,15,10,False
98138,158,5,False
`,z0=`Part,Color,Quantity,Is Spare
3070b,0,10,False
98138,0,7,False
24246,0,7,False
25269,0,7,False
3070b,4,10,False
24246,4,7,False
25269,4,7,False
3070b,15,10,False
3070bpr0233,15,7,False
98138,15,7,False
24246,15,7,False
25269,15,7,False
3070b,14,10,False
25269,14,7,False
`,D0=`Part,Color,Quantity,Is Spare
25269,0,15,False
72046pat0001,212,10,False
25269,29,15,False
25269,321,15,False
98138,117,10,False
25269,1056,15,False
65092,1055,10,False
98138,52,15,False
`,B0=`Part,Color,Quantity,Is Spare
4477,0,1,False
3623,0,4,False
3666,0,1,False
2445,0,3,False
2420,0,2,False
3028,0,2,False
4510,0,2,False
3070b,0,16,False
27925,0,8,False
98138,0,2,False
25269,0,16,False
6111,1,3,False
3004,1,2,False
2357,1,2,False
30414,1,8,False
63864,1,2,False
4162,1,3,False
3958,212,12,False
98138,1050,2,False
25269,1050,8,False
4477,321,6,False
3710,321,4,False
3070b,321,40,False
25269,321,40,False
3003,272,4,False
88292,272,2,False
37352,272,4,False
33243,272,2,False
6215,272,2,False
3070b,272,40,False
25269,272,40,False
3070b,323,40,False
25269,323,40,False
6112,71,2,False
3622,71,4,False
3008,71,4,False
3070b,26,40,False
25269,26,40,False
78169,322,1,False
3942c,297,1,False
3070b,1062,40,False
25269,1062,40,False
6111,15,4,False
3010,15,2,False
49307,15,8,False
37352,15,2,False
6215,15,4,False
2653,15,6,False
4477,15,1,False
60479,15,2,False
3710,15,1,False
3666,15,1,False
3030,15,1,False
3033,15,1,False
41740,15,6,False
54200,15,8,False
3070b,15,16,False
63864,15,2,False
2431,15,2,False
6636,15,2,False
14719,15,4,False
27925,15,8,False
3068b,15,3,False
87079,15,6,False
98138,15,2,False
25269,15,16,False
`,$0=`Part,Color,Quantity,Is Spare
66821,0,1,False
3070b,0,4,False
98138,0,4,False
24246,0,4,False
25269,0,6,False
3070b,1,6,False
98138,1,4,False
24246,1,4,False
25269,1,6,False
3070b,212,6,False
25269,212,12,False
66821,191,1,False
3070b,191,6,False
98138,191,4,False
24246,191,2,False
25269,191,6,False
3070b,226,4,False
98138,226,4,False
25269,226,6,False
3070b,29,6,False
98138,29,4,False
24246,29,4,False
25269,29,6,False
3070b,1050,6,False
98138,1050,4,False
25269,1050,6,False
3070b,272,6,False
98138,272,4,False
25269,272,6,False
3070b,288,4,False
98138,288,4,False
25269,288,6,False
3070b,5,6,False
98138,5,4,False
25269,5,6,False
66821,85,1,False
3070b,85,6,False
25269,85,6,False
66821,3,1,False
3070b,3,6,False
98138,3,6,False
24246,3,2,False
25269,3,6,False
66821,31,1,False
3070b,31,4,False
98138,31,4,False
25269,31,6,False
3070b,323,4,False
98138,323,4,False
25269,323,12,False
98138,27,4,False
25269,27,8,False
77813,322,12,False
3070b,30,6,False
98138,30,4,False
24246,30,2,False
25269,30,6,False
25269,1061,8,False
25269,1053,4,False
1954f,1059,2,False
1954b,1059,2,False
1954e,1059,2,False
1954d,1059,2,False
1954a,1059,2,False
1954c,1059,2,False
3070b,25,6,False
98138,25,4,False
25269,25,6,False
3070b,4,6,False
24246,4,4,False
25269,4,6,False
25269,378,4,False
3070b,15,6,False
98138,15,4,False
24246,15,2,False
25269,15,6,False
3070b,158,6,False
98138,158,6,False
25269,158,6,False
`,E0=`Part,Color,Quantity,Is Spare
73767,0,1,False
2234,0,1,False
66821,0,1,False
3070bpr0293,0,2,False
3070b,0,6,False
25269,0,14,False
3070b,212,3,False
25269,212,11,False
3070b,191,3,False
25269,191,10,False
77817,226,2,False
25269,226,12,False
25269,1050,12,False
3070b,272,6,False
25269,272,10,False
3070b,288,6,False
25269,288,10,False
79996,85,1,False
3070b,320,6,False
25269,320,8,False
79998,31,1,False
25269,323,14,False
77813,323,2,False
3070b,27,3,False
25269,27,4,False
25269,30,9,False
25269,1060,6,False
98138,1055,6,False
25269,1061,10,False
78169,297,1,False
3070b,36,4,False
25269,15,5,False
3070b,14,6,False
98138,14,4,False
25269,14,12,False
25269,158,12,False
`,R0=`Part,Color,Quantity,Is Spare
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
`,I0=`Part,Color,Quantity,Is Spare
79759c01,0,1,False
3956,0,1,False
32952,0,1,False
2653,0,8,False
3024,0,3,False
3710,0,3,False
2445,0,2,False
3021,0,2,False
3795,0,4,False
3032,0,2,False
3033,0,2,False
11833,0,3,False
80015,0,1,False
6003,0,2,False
35480,0,1,False
41740,0,1,False
72008,0,1,False
3070b,0,18,False
27507,0,2,False
24246,0,4,False
25269,0,16,False
49153,0,2,False
3023,1,3,False
43093,1,1,False
3070b,1,13,False
27507,1,1,False
25269,1,16,False
3070b,10,14,False
27925,10,2,False
25269,10,4,False
3070b,212,19,False
25269,212,18,False
3070b,191,18,False
25269,191,39,False
3070b,226,6,False
25269,226,36,False
25269,1050,14,False
3005,72,1,False
3004,72,1,False
3010,72,3,False
2357,72,2,False
3001,72,1,False
48092,72,1,False
3666,72,4,False
3021,72,1,False
3795,72,1,False
3031,72,1,False
10247,72,2,False
25269,72,4,False
3070b,288,10,False
25269,288,10,False
2420,85,1,False
3020,85,1,False
3031,85,1,False
3070b,85,9,False
24246,85,9,False
25269,85,14,False
3070b,320,22,False
27507,320,1,False
25269,320,36,False
72045,3,2,False
3070b,3,4,False
25269,3,19,False
51739,3,1,False
43723,3,1,False
43722,3,1,False
3070b,2,4,False
27925,2,1,False
25269,2,4,False
37452,323,1,False
3070b,323,14,False
25269,323,38,False
3070b,71,7,False
98138,71,3,False
25269,71,6,False
3070b,27,9,False
27507,27,1,False
25269,27,12,False
3070b,30,4,False
25269,30,24,False
3070b,84,4,False
24246,84,4,False
25269,1060,12,False
98138,1055,15,False
25269,1061,12,False
68547,297,2,False
65304,297,2,False
78169,297,1,False
3069b,19,2,False
2431,19,1,False
3070b,36,12,False
3005,15,8,False
2357,15,4,False
22885,15,3,False
3070b,15,29,False
27925,15,2,False
24246,15,12,False
25269,15,15,False
3022,14,3,False
3020,14,1,False
3031,14,5,False
6141,14,2,False
3070b,14,30,False
27925,14,12,False
24246,14,10,False
25269,14,36,False
15712,14,2,False
41769,14,2,False
3070b,158,10,False
25269,158,17,False
`,L0=`Part,Color,Quantity,Is Spare
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
`,N0=`Part,Color,Quantity,Is Spare
902221,226,1,False
33243,29,2,False
37452,29,1,False
3023,29,1,False
3710,29,5,False
92438,29,1,False
41539,29,1,False
3070b,29,24,False
25269,29,48,False
3070b,1050,24,False
25269,1050,48,False
87087,321,2,False
23950,321,2,False
3036,321,4,False
3069b,321,2,False
2431,321,9,False
3004,71,4,False
2357,71,4,False
30414,71,4,False
6636,71,3,False
3004,25,1,False
3622,25,1,False
3009,25,3,False
2357,25,3,False
96874,25,1,False
3710,25,2,False
3666,25,2,False
3070b,25,24,False
25269,25,48,False
32062,4,1,False
902222,47,1,False
3245c,15,22,False
3010,15,4,False
3008,15,2,False
2357,15,4,False
25214,15,2,False
6231,15,2,False
15207,15,3,False
3024,15,2,False
3623,15,2,False
3460,15,3,False
3958,15,1,False
32028,15,6,False
6636,15,1,False
98138,15,28,False
25269,15,48,False
`,O0=`Part,Color,Quantity,Is Spare
25269,29,19,False
25269,3,20,False
98138,1003,20,False
25269,26,20,False
25269,158,20,False
`,q0=`Part,Color,Quantity,Is Spare
2780,0,2,False
902221,226,1,False
15068,29,1,False
3070b,29,22,False
63864,29,14,False
4162,29,5,False
25269,29,26,False
96874,3,1,False
3070b,3,22,False
25269,3,26,False
6112,31,7,False
3004,31,9,False
3010,31,7,False
3070b,31,22,False
25269,31,26,False
3009,323,2,False
3008,323,1,False
91405,323,2,False
3070b,323,22,False
25269,323,26,False
60470b,71,1,False
60478,71,2,False
43045,26,2,False
3023,26,2,False
3666,26,11,False
3070b,26,24,False
25269,26,26,False
902222,47,1,False
11211,15,1,False
43056,15,2,False
3023,15,1,False
3666,15,8,False
3022,15,1,False
88072,15,1,False
3176,15,1,False
3070b,158,22,False
25269,158,26,False
`,H0=`Part,Color,Quantity,Is Spare
98138,1,19,False
25269,191,20,False
98138,1050,20,False
25269,322,20,False
98138,1055,20,False
`,Y0=`Part,Color,Quantity,Is Spare
25269,321,21,False
72078pat0001,272,8,False
25269,85,21,False
72046pat0001,31,8,False
25269,323,19,False
98138,45,20,False
`,X0=`Part,Color,Quantity,Is Spare
72024,226,3,False
25269,226,32,False
72024,29,2,False
15470,29,32,False
25269,29,32,False
37762,1050,11,False
25269,1050,64,False
69871,321,3,False
25269,3,32,False
25269,31,64,False
72024,323,3,False
25269,323,64,False
25269,322,64,False
98138,84,32,False
15470,70,32,False
98138,70,32,False
37775,182,11,False
15470,15,16,False
85861,15,11,False
74611,15,8,False
14769,15,10,False
25269,14,64,False
73101,9999,1,False
`,G0=`Part,Color,Quantity,Is Spare
98138,1,6,False
25269,1,4,False
69871,321,1,False
49307,84,2,False
54200,84,1,False
25269,84,10,False
98138pr0187,84,2,False
69182,92,1,False
73767,25,1,False
3070bpr0248,4,8,False
98138,4,6,False
25269,4,4,False
53119,70,1,False
25269,70,10,False
49307,19,2,False
54200,19,1,False
25269,19,12,False
24246pr0017,15,1,False
15573,15,1,False
24246pr0016,15,1,False
24246,15,1,False
25269,15,8,False
`,U0=`Part,Color,Quantity,Is Spare
69871,321,1,False
49307,3,2,False
69182,3,1,False
25269,3,10,False
25269,31,10,False
15573,323,1,False
24246pr0018,323,1,False
24246pr0019,323,1,False
3070b,323,2,False
24246,323,2,False
25269,323,12,False
25269,73,10,False
25269,30,10,False
98138,1055,10,False
73767,25,1,False
98138pr0188,41,8,False
53119,15,1,False
98138pr0189,15,2,False
`,Q0=`Part,Color,Quantity,Is Spare
49307,0,2,False
25269,212,8,False
24246,191,2,False
25269,191,10,False
25269,226,8,False
98138pr0200,226,2,False
69871,321,1,False
25269,484,10,False
25269,85,8,False
25269,31,8,False
73767,25,1,False
69182,25,1,False
49307,15,4,False
15573,15,1,False
24246pr0020,15,1,False
24246pr0021,15,1,False
3070bpr0249,14,8,False
25269,14,8,False
`,j0=`Part,Color,Quantity,Is Spare
49307,0,6,False
3070b,0,6,False
98138,0,2,False
24246,0,6,False
25269,0,6,False
98138pr0191,0,2,False
25269,10,4,False
98138,29,4,False
69871,321,1,False
25269,27,4,False
98138,26,4,False
73767,25,1,False
69182,15,1,False
15573,15,1,False
24246pr0024,15,1,False
24246pr0025,15,1,False
3070bpr0252,15,8,False
3070b,15,6,False
24246,15,10,False
25269,15,6,False
25269,158,4,False
`,V0=`Part,Color,Quantity,Is Spare
25269,10,19,False
98138,1000,15,False
98138,26,19,False
25269,322,19,False
25269,25,19,False
25269,14,19,False
`,Z0=`Part,Color,Quantity,Is Spare
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
`,J0=`Part,Color,Quantity,Is Spare
3956,0,2,False
22885,0,4,False
2445,0,6,False
41539,0,2,False
22888,0,2,False
3070b,0,53,False
98138,0,8,False
24246,0,12,False
25269,0,40,False
91405,1,1,False
3034,1,6,False
3036,1,2,False
92438,1,1,False
3070b,1,22,False
25269,1,24,False
3023,226,10,False
3710,226,14,False
3460,226,6,False
3070b,226,20,False
25269,226,20,False
37452,29,2,False
3070b,29,22,False
25269,29,24,False
3035,31,2,False
41539,31,2,False
3070b,31,38,False
3069b,31,4,False
2431,31,6,False
4162,31,6,False
25269,31,34,False
41682,323,4,False
91405,323,1,False
22888,323,2,False
78168,323,2,False
3070b,323,28,False
25269,323,28,False
78169,322,1,False
96874,25,1,False
3062b,4,2,False
46342,4,2,False
32474,4,2,False
3070b,4,36,False
25269,4,44,False
3004,15,4,False
22886,15,10,False
3010,15,8,False
49311,15,11,False
3008,15,8,False
48092,15,4,False
3029,15,1,False
65486,15,2,False
3070b,15,52,False
98138,15,8,False
24246,15,12,False
25269,15,40,False
98138pr0226,15,4,False
98138pr0227,15,2,False
98138pr0228,15,2,False
98138pr0229,15,2,False
98138pr0230,15,4,False
98138pr0231,15,2,False
98138pr0232,15,2,False
98138pr0233,15,2,False
98138pr0234,15,4,False
98138pr0235,15,2,False
98138pr0236,15,2,False
98138pr0237,15,4,False
98138pr0238,15,6,False
98138pr0239,15,4,False
98138pr0240,15,4,False
98138pr0241,15,2,False
98138pr0242,15,2,False
98138pr0243,15,4,False
98138pr0244,15,4,False
98138pr0245,15,4,False
98138pr0246,15,2,False
98138pr0247,15,2,False
98138pr0249,15,2,False
98138pr0250,15,2,False
98138pr0251,15,2,False
30355,15,1,False
11211,14,6,False
30414,14,6,False
3070b,14,20,False
3069b,14,4,False
2431,14,6,False
4162,14,6,False
25269,14,20,False
`,W0=`Part,Color,Quantity,Is Spare
54200,226,6,False
25269,226,6,False
98138pr0225,226,2,False
24246,1050,10,False
24246,321,10,False
69182,85,1,False
15573,85,1,False
24246,3,10,False
24246pr0022,31,1,False
24246pr0023,31,1,False
24246,31,10,False
78169,322,1,False
49307,30,4,False
65092,1055,2,False
73767,25,1,False
3070bpr0250,47,8,False
22388,15,2,False
25269,15,6,False
`,K0=`Part,Color,Quantity,Is Spare
3070b,1050,6,False
25269,1050,4,False
98138,5,2,False
54200,3,2,False
3070b,3,6,False
98138,117,8,False
69182,323,1,False
15573,323,1,False
98138pr0252,323,2,False
3070b,322,6,False
78169,322,1,False
3070b,30,6,False
25269,30,4,False
73767,25,1,False
22388,47,1,False
49307,15,4,False
24246pr0027,15,1,False
24246pr0028,15,1,False
3070bpr0192,15,3,False
25269,15,8,False
25269pr0006,15,2,False
3070b,14,6,False
25269,14,4,False
`,es=`Part,Color,Quantity,Is Spare
35464,212,2,False
24246,212,2,False
25269,212,7,False
66821,226,1,False
24246,226,6,False
25269,226,9,False
3070b,29,6,False
98138,29,2,False
25269,29,12,False
69871,321,1,False
24246,5,4,False
25269,5,17,False
73767,31,1,False
24246,31,6,False
25269,31,9,False
24246,323,6,False
25269,323,9,False
25269,322,17,False
49307,30,4,False
98138,1055,8,False
22388,47,1,False
98138pr0276,47,8,False
69182,15,1,False
15573,15,1,False
24246pr0032,15,1,False
3070bpr0264,15,6,False
24246,15,4,False
25269,15,6,False
25269pr0034,15,4,False
98138pr0278,15,2,False
98138pr0181,15,8,False
25269,14,17,False
`,ns=`Part,Color,Quantity,Is Spare
25269,1,19,False
77817,226,3,False
98138,5,19,False
77814,85,3,False
25269,31,19,False
77813,322,7,False
25269,42,19,False
98138,158,19,False
`,as=`Part,Color,Quantity,Is Spare
30414,0,2,False
66956,0,1,False
25269,0,14,False
3070b,10,17,False
25269,10,40,False
3070b,191,21,False
25269,191,61,False
6060,226,2,False
3024,226,2,False
3666,226,5,False
902221,226,1,False
2431,226,3,False
25269,226,22,False
98138,484,20,False
25269,484,16,False
3245c,71,8,False
3070b,26,17,False
25269,26,40,False
3070b,322,17,False
78169,322,1,False
25269,322,40,False
3710,70,4,False
2357,19,4,False
11211,19,10,False
902222,47,1,False
3245c,15,12,False
3009,15,1,False
32952,15,2,False
87079,15,2,False
98138,15,26,False
6005,14,2,False
22885,14,2,False
3023,14,3,False
3795,14,1,False
3958,14,6,False
6003,14,6,False
3297,14,4,False
3040b,14,4,False
`,ts=`Part,Color,Quantity,Is Spare
3070b,1,2,False
24246,1,5,False
25269,1,11,False
80390,226,2,False
3070b,29,2,False
24246,29,5,False
25269,29,11,False
79996,1050,1,False
3070b,1050,2,False
24246,1050,5,False
25269,1050,11,False
3070b,5,2,False
24246,5,5,False
25269,5,11,False
3070b,85,2,False
24246,85,5,False
25269,85,11,False
73767,31,2,False
3070b,27,2,False
24246,27,5,False
25269,27,11,False
79996,322,2,False
901957,322,1,False
3070b,322,2,False
78169,322,1,False
24246,322,5,False
25269,322,11,False
25269,1060,9,False
65092,1055,6,False
98138,1053,6,False
73767,25,1,False
3070b,25,2,False
24246,25,5,False
25269,25,11,False
3070b,4,2,False
24246,4,5,False
25269,4,11,False
901956,47,1,False
98138,45,6,False
98138pr0226,15,4,False
98138pr0227,15,2,False
98138pr0228,15,2,False
98138pr0229,15,2,False
98138pr0230,15,4,False
98138pr0231,15,2,False
98138pr0232,15,2,False
98138pr0233,15,2,False
98138pr0234,15,4,False
98138pr0235,15,2,False
98138pr0236,15,2,False
98138pr0237,15,4,False
98138pr0238,15,6,False
98138pr0239,15,4,False
98138pr0240,15,4,False
98138pr0241,15,2,False
98138pr0242,15,2,False
98138pr0243,15,4,False
98138pr0244,15,4,False
98138pr0245,15,4,False
98138pr0246,15,2,False
98138pr0247,15,2,False
98138pr0249,15,2,False
98138pr0250,15,2,False
98138pr0251,15,2,False
3070b,14,2,False
24246,14,5,False
25269,14,11,False
`,ls=`Part,Color,Quantity,Is Spare
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
`,ss=`Part,Color,Quantity,Is Spare
91405,1,4,False
3070b,10,97,False
25269,10,30,False
3070b,1050,127,False
25269,1050,40,False
79756,321,36,False
79757,321,4,False
78168,321,2,False
25269,321,106,False
3022,72,6,False
3034,72,18,False
2639,72,4,False
3070b,31,127,False
25269,31,40,False
78169,322,1,False
96874,25,1,False
3070b,15,127,False
25269,15,40,False
3795,14,6,False
3070b,14,97,False
25269,14,30,False
`,rs=`Part,Color,Quantity,Is Spare
79759c01,0,1,False
3070b,0,2,False
3070b,1,6,False
98138,1,2,False
25269,1,8,False
3070b,212,4,False
25269,212,8,False
3070b,29,6,False
98138,29,2,False
25269,29,8,False
3070b,4,6,False
25269,4,8,False
3070b,15,8,False
24246,15,3,False
25269,15,8,False
3070b,14,6,False
24246,14,1,False
25269,14,8,False
`,os=`Part,Color,Quantity,Is Spare
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
`,is=`Part,Color,Quantity,Is Spare
25269,1050,15,False
25269,272,15,False
25269,3,15,False
98138,323,15,False
25269,71,15,False
98138,1061,15,False
98138,1062,15,False
`,ds=`Part,Color,Quantity,Is Spare
2357,0,2,False
30165,0,2,False
30414,0,2,False
3021,0,8,False
60474,0,1,False
3039,0,4,False
3660,0,4,False
3070b,0,26,False
3069b,0,5,False
2431,0,9,False
14719,0,4,False
24246,0,2,False
25269,0,40,False
61485,0,1,False
3070b,212,10,False
25269,212,47,False
25269,191,47,False
902221,226,1,False
24246,29,1,False
25269,29,2,False
98138,1050,2,False
3070b,3,17,False
25269,3,50,False
3070b,31,10,False
25269,31,47,False
30414,71,6,False
63864,71,2,False
3010,19,2,False
22885,19,4,False
902222,47,1,False
98138,182,28,False
6112,15,4,False
3010,15,4,False
3009,15,6,False
2357,15,10,False
3023,15,2,False
3029,15,4,False
3032,15,4,False
3028,15,2,False
3958,15,2,False
54200,15,2,False
3039,15,1,False
2449,15,4,False
98138,15,4,False
25269,15,14,False
3023,14,5,False
3070b,158,17,False
25269,158,47,False
`,cs=`Part,Color,Quantity,Is Spare
2357,0,20,False
59349,0,8,False
25269,0,96,False
25269,1050,48,False
89678,72,12,False
27925,85,24,False
25269,85,32,False
65803,31,1,False
4282,31,4,False
69871,31,1,False
91405,323,1,False
41740,323,2,False
63864,323,12,False
4162,323,2,False
27925,323,24,False
25269,323,32,False
27925,78,24,False
25269,78,32,False
27925,1062,24,False
25269,1062,32,False
25269,15,48,False
`,us=`Part,Color,Quantity,Is Spare
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
`,fs=`Part,Color,Quantity,Is Spare
73767,0,1,False
41682,0,2,False
6112,0,2,False
2465,0,2,False
22886,0,2,False
49311,0,5,False
11211,0,2,False
4282,0,1,False
3031,0,4,False
3456,0,1,False
11213,0,2,False
74611,0,2,False
11477,0,2,False
3070b,0,14,False
3069b,0,2,False
27925,0,4,False
74169,0,2,False
98138,0,1,False
24246,0,6,False
25269,0,34,False
67095,0,2,False
41770,0,3,False
41769,0,3,False
91405,1,1,False
3070b,1,21,False
24246,1,8,False
25269,1,24,False
49311,191,11,False
92438,191,1,False
3070b,191,19,False
24246,191,8,False
25269,191,24,False
6111,29,2,False
3245c,29,12,False
22885,29,1,False
37452,29,1,False
3023,29,4,False
3036,29,2,False
3070b,29,19,False
6636,29,8,False
87079,29,3,False
98138,29,2,False
24246,29,10,False
25269,29,32,False
79759c01,3,1,False
96874,3,1,False
3070b,3,19,False
78169,3,1,False
24246,3,10,False
25269,3,24,False
22885,71,3,False
3070b,30,19,False
24246,30,12,False
25269,30,24,False
79996,4,1,False
3001,4,4,False
3034,4,2,False
3070b,4,19,False
24246,4,10,False
25269,4,24,False
80390,15,1,False
3005,15,8,False
6111,15,2,False
3245c,15,10,False
2357,15,4,False
22885,15,1,False
3023,15,1,False
91405,15,1,False
3031,15,1,False
3028,15,1,False
15573,15,1,False
41740,15,1,False
3070bpr0271,15,2,False
3070b,15,16,False
3069b,15,2,False
2431,15,11,False
27925,15,4,False
87079,15,3,False
24246,15,12,False
25269,15,37,False
3070b,14,19,False
24246,14,11,False
25269,14,24,False
`,Fs=`Part,Color,Quantity,Is Spare
98138pr0107,0,2,False
3070b,226,4,False
25269,226,4,False
3070b,29,4,False
98138,29,4,False
25269,29,4,False
25269,72,4,False
24246,5,1,False
3070b,31,4,False
25269,31,6,False
3070b,323,4,False
25269,323,6,False
3031,322,1,False
3070b,322,4,False
25269,322,6,False
25269,19,4,False
3031,15,1,False
98138,15,8,False
25269,15,6,False
3070b,14,4,False
25269,14,4,False
`,hs=`Part,Color,Quantity,Is Spare
3023,0,5,False
3070b,0,2,False
3069b,0,3,False
6636,0,1,False
27925,0,2,False
24246,0,4,False
25269,0,9,False
3070b,29,6,False
98138,29,1,False
25269,29,1,False
41539,321,1,False
41539,3,2,False
3070b,71,2,False
3069b,71,6,False
98138,71,3,False
25269,71,16,False
3023,4,3,False
15573,70,1,False
27925,70,3,False
25269,70,6,False
3024,15,2,False
3023,15,2,False
41539,15,1,False
15573,15,4,False
3069b,15,16,False
27925,15,1,False
25269,15,26,False
98138pr0026,15,2,False
98138pr0082,15,4,False
98138pr0008,15,2,False
`,bs=`id,name,rgb,is_trans,num_parts,num_sets,y1,y2
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
`,jt=(e,n)=>{if(typeof e=="number"){if(n===3)return{mode:"rgb",r:(e>>8&15|e>>4&240)/255,g:(e>>4&15|e&240)/255,b:(e&15|e<<4&240)/255};if(n===4)return{mode:"rgb",r:(e>>12&15|e>>8&240)/255,g:(e>>8&15|e>>4&240)/255,b:(e>>4&15|e&240)/255,alpha:(e&15|e<<4&240)/255};if(n===6)return{mode:"rgb",r:(e>>16&255)/255,g:(e>>8&255)/255,b:(e&255)/255};if(n===8)return{mode:"rgb",r:(e>>24&255)/255,g:(e>>16&255)/255,b:(e>>8&255)/255,alpha:(e&255)/255}}},gs={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ps=e=>jt(gs[e.toLowerCase()],6),vs=/^#?([0-9a-f]{8}|[0-9a-f]{6}|[0-9a-f]{4}|[0-9a-f]{3})$/i,ms=e=>{let n;return(n=e.match(vs))?jt(parseInt(n[1],16),n[1].length):void 0},Ge="([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)",_n=`${Ge}%`,Oa=`(?:${Ge}%|${Ge})`,_s=`(?:${Ge}(deg|grad|rad|turn)|${Ge})`,on="\\s*,\\s*",Ms=new RegExp(`^rgba?\\(\\s*${Ge}${on}${Ge}${on}${Ge}\\s*(?:,\\s*${Oa}\\s*)?\\)$`),ys=new RegExp(`^rgba?\\(\\s*${_n}${on}${_n}${on}${_n}\\s*(?:,\\s*${Oa}\\s*)?\\)$`),ks=e=>{let n={mode:"rgb"},a;if(a=e.match(Ms))a[1]!==void 0&&(n.r=a[1]/255),a[2]!==void 0&&(n.g=a[2]/255),a[3]!==void 0&&(n.b=a[3]/255);else if(a=e.match(ys))a[1]!==void 0&&(n.r=a[1]/100),a[2]!==void 0&&(n.g=a[2]/100),a[3]!==void 0&&(n.b=a[3]/100);else return;return a[4]!==void 0?n.alpha=Math.max(0,Math.min(1,a[4]/100)):a[5]!==void 0&&(n.alpha=Math.max(0,Math.min(1,+a[5]))),n},xs=(e,n)=>e===void 0?void 0:typeof e!="object"?Bs(e):e.mode!==void 0?e:n?{...e,mode:n}:void 0,dn=(e="rgb")=>n=>(n=xs(n,e))!==void 0?n.mode===e?n:$e[n.mode][e]?$e[n.mode][e](n):e==="rgb"?$e[n.mode].rgb(n):$e.rgb[e]($e[n.mode].rgb(n)):void 0,$e={},Vt={},zn=[],Zt={},Cs=e=>e,J=e=>($e[e.mode]={...$e[e.mode],...e.toMode},Object.keys(e.fromMode||{}).forEach(n=>{$e[n]||($e[n]={}),$e[n][e.mode]=e.fromMode[n]}),e.ranges||(e.ranges={}),e.difference||(e.difference={}),e.channels.forEach(n=>{if(e.ranges[n]===void 0&&(e.ranges[n]=[0,1]),!e.interpolate[n])throw new Error(`Missing interpolator for: ${n}`);typeof e.interpolate[n]=="function"&&(e.interpolate[n]={use:e.interpolate[n]}),e.interpolate[n].fixup||(e.interpolate[n].fixup=Cs)}),Vt[e.mode]=e,(e.parse||[]).forEach(n=>{ws(n,e.mode)}),dn(e.mode)),Jt=e=>Vt[e],ws=(e,n)=>{if(typeof e=="string"){if(!n)throw new Error("'mode' required when 'parser' is a string");Zt[e]=n}else typeof e=="function"&&zn.indexOf(e)<0&&zn.push(e)},Pa=/[^\x00-\x7F]|[a-zA-Z_]/,Ts=/[^\x00-\x7F]|[-\w]/,y={Function:"function",Ident:"ident",Number:"number",Percentage:"percentage",ParenClose:")",None:"none",Hue:"hue",Alpha:"alpha"};let I=0;function Tn(e){let n=e[I],a=e[I+1];return n==="-"||n==="+"?/\d/.test(a)||a==="."&&/\d/.test(e[I+2]):n==="."?/\d/.test(a):/\d/.test(n)}function za(e){if(I>=e.length)return!1;let n=e[I];if(Pa.test(n))return!0;if(n==="-"){if(e.length-I<2)return!1;let a=e[I+1];return!!(a==="-"||Pa.test(a))}return!1}const Ss={deg:1,rad:180/Math.PI,grad:9/10,turn:360};function pn(e){let n="";if((e[I]==="-"||e[I]==="+")&&(n+=e[I++]),n+=Sn(e),e[I]==="."&&/\d/.test(e[I+1])&&(n+=e[I++]+Sn(e)),(e[I]==="e"||e[I]==="E")&&((e[I+1]==="-"||e[I+1]==="+")&&/\d/.test(e[I+2])?n+=e[I++]+e[I++]+Sn(e):/\d/.test(e[I+1])&&(n+=e[I++]+Sn(e))),za(e)){let a=Dn(e);return a==="deg"||a==="rad"||a==="turn"||a==="grad"?{type:y.Hue,value:n*Ss[a]}:void 0}return e[I]==="%"?(I++,{type:y.Percentage,value:+n}):{type:y.Number,value:+n}}function Sn(e){let n="";for(;/\d/.test(e[I]);)n+=e[I++];return n}function Dn(e){let n="";for(;I<e.length&&Ts.test(e[I]);)n+=e[I++];return n}function As(e){let n=Dn(e);return e[I]==="("?(I++,{type:y.Function,value:n}):n==="none"?{type:y.None,value:void 0}:{type:y.Ident,value:n}}function Ps(e=""){let n=e.trim(),a=[],l;for(I=0;I<n.length;){if(l=n[I++],l===`
`||l==="	"||l===" "){for(;I<n.length&&(n[I]===`
`||n[I]==="	"||n[I]===" ");)I++;continue}if(l===",")return;if(l===")"){a.push({type:y.ParenClose});continue}if(l==="+"){if(I--,Tn(n)){a.push(pn(n));continue}return}if(l==="-"){if(I--,Tn(n)){a.push(pn(n));continue}if(za(n)){a.push({type:y.Ident,value:Dn(n)});continue}return}if(l==="."){if(I--,Tn(n)){a.push(pn(n));continue}return}if(l==="/"){for(;I<n.length&&(n[I]===`
`||n[I]==="	"||n[I]===" ");)I++;let t;if(Tn(n)&&(t=pn(n),t.type!==y.Hue)){a.push({type:y.Alpha,value:t});continue}if(za(n)&&Dn(n)==="none"){a.push({type:y.Alpha,value:{type:y.None,value:void 0}});continue}return}if(/\d/.test(l)){I--,a.push(pn(n));continue}if(Pa.test(l)){I--,a.push(As(n));continue}return}return a}function zs(e){e._i=0;let n=e[e._i++];if(!n||n.type!==y.Function||n.value!=="color"||(n=e[e._i++],n.type!==y.Ident))return;const a=Zt[n.value];if(!a)return;const l={mode:a},t=Wt(e,!1);if(!t)return;const s=Jt(a).channels;for(let r=0,o,d;r<s.length;r++)o=t[r],d=s[r],o.type!==y.None&&(l[d]=o.type===y.Number?o.value:o.value/100,d==="alpha"&&(l[d]=Math.max(0,Math.min(1,l[d]))));return l}function Wt(e,n){const a=[];let l;for(;e._i<e.length;){if(l=e[e._i++],l.type===y.None||l.type===y.Number||l.type===y.Alpha||l.type===y.Percentage||n&&l.type===y.Hue){a.push(l);continue}if(l.type===y.ParenClose){if(e._i<e.length)return;continue}return}if(!(a.length<3||a.length>4)){if(a.length===4){if(a[3].type!==y.Alpha)return;a[3]=a[3].value}return a.length===3&&a.push({type:y.None,value:void 0}),a.every(t=>t.type!==y.Alpha)?a:void 0}}function Ds(e,n){e._i=0;let a=e[e._i++];if(!a||a.type!==y.Function)return;let l=Wt(e,n);if(l)return l.unshift(a.value),l}const Bs=e=>{if(typeof e!="string")return;const n=Ps(e),a=n?Ds(n,!0):void 0;let l,t=0,s=zn.length;for(;t<s;)if((l=zn[t++](e,a))!==void 0)return l;return n?zs(n):void 0};function $s(e,n){if(!n||n[0]!=="rgb"&&n[0]!=="rgba")return;const a={mode:"rgb"},[,l,t,s,r]=n;if(!(l.type===y.Hue||t.type===y.Hue||s.type===y.Hue))return l.type!==y.None&&(a.r=l.type===y.Number?l.value/255:l.value/100),t.type!==y.None&&(a.g=t.type===y.Number?t.value/255:t.value/100),s.type!==y.None&&(a.b=s.type===y.Number?s.value/255:s.value/100),r.type!==y.None&&(a.alpha=Math.min(1,Math.max(0,r.type===y.Number?r.value:r.value/100))),a}const Es=e=>e==="transparent"?{mode:"rgb",r:0,g:0,b:0,alpha:0}:void 0,Rs=(e,n,a)=>e+a*(n-e),Is=e=>{let n=[];for(let a=0;a<e.length-1;a++){let l=e[a],t=e[a+1];l===void 0&&t===void 0?n.push(void 0):l!==void 0&&t!==void 0?n.push([l,t]):n.push(l!==void 0?[l,l]:[t,t])}return n},Ls=e=>n=>{let a=Is(n);return l=>{let t=l*a.length,s=l>=1?a.length-1:Math.max(Math.floor(t),0),r=a[s];return r===void 0?void 0:e(r[0],r[1],t-s)}},w=Ls(Rs),be=e=>{let n=!1,a=e.map(l=>l!==void 0?(n=!0,l):1);return n?a:e},cn={mode:"rgb",channels:["r","g","b","alpha"],parse:[$s,ms,ks,ps,Es,"srgb"],serialize:"srgb",interpolate:{r:w,g:w,b:w,alpha:{use:w,fixup:be}},gamut:!0,white:{r:1,g:1,b:1},black:{r:0,g:0,b:0}},la=(e=0)=>Math.pow(Math.abs(e),563/256)*Math.sign(e),tt=e=>{let n=la(e.r),a=la(e.g),l=la(e.b),t={mode:"xyz65",x:.5766690429101305*n+.1855582379065463*a+.1882286462349947*l,y:.297344975250536*n+.6273635662554661*a+.0752914584939979*l,z:.0270313613864123*n+.0706888525358272*a+.9913375368376386*l};return e.alpha!==void 0&&(t.alpha=e.alpha),t},sa=e=>Math.pow(Math.abs(e),256/563)*Math.sign(e),lt=({x:e,y:n,z:a,alpha:l})=>{e===void 0&&(e=0),n===void 0&&(n=0),a===void 0&&(a=0);let t={mode:"a98",r:sa(e*2.0415879038107465-n*.5650069742788597-.3447313507783297*a),g:sa(e*-.9692436362808798+n*1.8759675015077206+.0415550574071756*a),b:sa(e*.0134442806320312-n*.1183623922310184+1.0151749943912058*a)};return l!==void 0&&(t.alpha=l),t},ra=(e=0)=>{const n=Math.abs(e);return n<=.04045?e/12.92:(Math.sign(e)||1)*Math.pow((n+.055)/1.055,2.4)},un=({r:e,g:n,b:a,alpha:l})=>{let t={mode:"lrgb",r:ra(e),g:ra(n),b:ra(a)};return l!==void 0&&(t.alpha=l),t},en=e=>{let{r:n,g:a,b:l,alpha:t}=un(e),s={mode:"xyz65",x:.4123907992659593*n+.357584339383878*a+.1804807884018343*l,y:.2126390058715102*n+.715168678767756*a+.0721923153607337*l,z:.0193308187155918*n+.119194779794626*a+.9505321522496607*l};return t!==void 0&&(s.alpha=t),s},oa=(e=0)=>{const n=Math.abs(e);return n>.0031308?(Math.sign(e)||1)*(1.055*Math.pow(n,1/2.4)-.055):e*12.92},fn=({r:e,g:n,b:a,alpha:l},t="rgb")=>{let s={mode:t,r:oa(e),g:oa(n),b:oa(a)};return l!==void 0&&(s.alpha=l),s},nn=({x:e,y:n,z:a,alpha:l})=>{e===void 0&&(e=0),n===void 0&&(n=0),a===void 0&&(a=0);let t=fn({r:e*3.2409699419045226-n*1.537383177570094-.4986107602930034*a,g:e*-.9692436362808796+n*1.8759675015077204+.0415550574071756*a,b:e*.0556300796969936-n*.2039769588889765+1.0569715142428784*a});return l!==void 0&&(t.alpha=l),t},Ns={...cn,mode:"a98",parse:["a98-rgb"],serialize:"a98-rgb",fromMode:{rgb:e=>lt(en(e)),xyz65:lt},toMode:{rgb:e=>nn(tt(e)),xyz65:tt}},me=e=>(e=e%360)<0?e+360:e,Os=(e,n)=>e.map((a,l,t)=>{if(a===void 0)return a;let s=me(a);return l===0||e[l-1]===void 0?s:n(s-me(t[l-1]))}).reduce((a,l)=>!a.length||l===void 0||a[a.length-1]===void 0?(a.push(l),a):(a.push(l+a[a.length-1]),a),[]),Le=e=>Os(e,n=>Math.abs(n)<=180?n:n-360*Math.sign(n)),ve=[-.14861,1.78277,-.29227,-.90649,1.97294,0],qs=Math.PI/180,Hs=180/Math.PI;let st=ve[3]*ve[4],rt=ve[1]*ve[4],ot=ve[1]*ve[2]-ve[0]*ve[3];const Ys=({r:e,g:n,b:a,alpha:l})=>{e===void 0&&(e=0),n===void 0&&(n=0),a===void 0&&(a=0);let t=(ot*a+e*st-n*rt)/(ot+st-rt),s=a-t,r=(ve[4]*(n-t)-ve[2]*s)/ve[3],o={mode:"cubehelix",l:t,s:t===0||t===1?void 0:Math.sqrt(s*s+r*r)/(ve[4]*t*(1-t))};return o.s&&(o.h=Math.atan2(r,s)*Hs-120),l!==void 0&&(o.alpha=l),o},Xs=({h:e,s:n,l:a,alpha:l})=>{let t={mode:"rgb"};e=(e===void 0?0:e+120)*qs,a===void 0&&(a=0);let s=n===void 0?0:n*a*(1-a),r=Math.cos(e),o=Math.sin(e);return t.r=a+s*(ve[0]*r+ve[1]*o),t.g=a+s*(ve[2]*r+ve[3]*o),t.b=a+s*(ve[4]*r+ve[5]*o),l!==void 0&&(t.alpha=l),t},On=(e,n)=>{if(e.h===void 0||n.h===void 0||!e.s||!n.s)return 0;let a=me(e.h),l=me(n.h),t=Math.sin((l-a+360)/2*Math.PI/180);return 2*Math.sqrt(e.s*n.s)*t},Gs=(e,n)=>{if(e.h===void 0||n.h===void 0)return 0;let a=me(e.h),l=me(n.h);return Math.abs(l-a)>180?a-(l-360*Math.sign(l-a)):l-a},qn=(e,n)=>{if(e.h===void 0||n.h===void 0||!e.c||!n.c)return 0;let a=me(e.h),l=me(n.h),t=Math.sin((l-a+360)/2*Math.PI/180);return 2*Math.sqrt(e.c*n.c)*t},vn=(e="rgb",n=[1,1,1,0])=>{let a=Jt(e),l=a.channels,t=a.difference,s=dn(e);return(r,o)=>{let d=s(r),u=s(o);return Math.sqrt(l.reduce((f,b,h)=>{let c=t[b]?t[b](d,u):d[b]-u[b];return f+(n[h]||0)*Math.pow(isNaN(c)?0:c,2)},0))}},Ne=e=>{let n=e.reduce((l,t)=>{if(t!==void 0){let s=t*Math.PI/180;l.sin+=Math.sin(s),l.cos+=Math.cos(s)}return l},{sin:0,cos:0}),a=Math.atan2(n.sin,n.cos)*180/Math.PI;return a<0?360+a:a},Us={mode:"cubehelix",channels:["h","s","l","alpha"],parse:["--cubehelix"],serialize:"--cubehelix",ranges:{h:[0,360],s:[0,4.614],l:[0,1]},fromMode:{rgb:Ys},toMode:{rgb:Xs},interpolate:{h:{use:w,fixup:Le},s:w,l:w,alpha:{use:w,fixup:be}},difference:{h:On},average:{h:Ne}},je=({l:e,a:n,b:a,alpha:l},t="lch")=>{n===void 0&&(n=0),a===void 0&&(a=0);let s=Math.sqrt(n*n+a*a),r={mode:t,l:e,c:s};return s&&(r.h=me(Math.atan2(a,n)*180/Math.PI)),l!==void 0&&(r.alpha=l),r},Ve=({l:e,c:n,h:a,alpha:l},t="lab")=>{a===void 0&&(a=0);let s={mode:t,l:e,a:n?n*Math.cos(a/180*Math.PI):0,b:n?n*Math.sin(a/180*Math.PI):0};return l!==void 0&&(s.alpha=l),s},Kt=Math.pow(29,3)/Math.pow(3,3),el=Math.pow(6,3)/Math.pow(29,3),fe={X:.3457/.3585,Y:1,Z:(1-.3457-.3585)/.3585},ln={X:.3127/.329,Y:1,Z:(1-.3127-.329)/.329};let ia=e=>Math.pow(e,3)>el?Math.pow(e,3):(116*e-16)/Kt;const nl=({l:e,a:n,b:a,alpha:l})=>{e===void 0&&(e=0),n===void 0&&(n=0),a===void 0&&(a=0);let t=(e+16)/116,s=n/500+t,r=t-a/200,o={mode:"xyz65",x:ia(s)*ln.X,y:ia(t)*ln.Y,z:ia(r)*ln.Z};return l!==void 0&&(o.alpha=l),o},Hn=e=>nn(nl(e)),da=e=>e>el?Math.cbrt(e):(Kt*e+16)/116,al=({x:e,y:n,z:a,alpha:l})=>{e===void 0&&(e=0),n===void 0&&(n=0),a===void 0&&(a=0);let t=da(e/ln.X),s=da(n/ln.Y),r=da(a/ln.Z),o={mode:"lab65",l:116*s-16,a:500*(t-s),b:200*(s-r)};return l!==void 0&&(o.alpha=l),o},Yn=e=>{let n=al(en(e));return e.r===e.b&&e.b===e.g&&(n.a=n.b=0),n},Bn=1,tl=1,Mn=26/180*Math.PI,$n=Math.cos(Mn),En=Math.sin(Mn),ll=100/Math.log(139/100),Da=({l:e,c:n,h:a,alpha:l})=>{e===void 0&&(e=0),n===void 0&&(n=0),a===void 0&&(a=0);let t={mode:"lab65",l:(Math.exp(e*Bn/ll)-1)/.0039},s=(Math.exp(.0435*n*tl*Bn)-1)/.075,r=s*Math.cos(a/180*Math.PI-Mn),o=s*Math.sin(a/180*Math.PI-Mn);return t.a=r*$n-o/.83*En,t.b=r*En+o/.83*$n,l!==void 0&&(t.alpha=l),t},Ba=({l:e,a:n,b:a,alpha:l})=>{e===void 0&&(e=0),n===void 0&&(n=0),a===void 0&&(a=0);let t=n*$n+a*En,s=.83*(a*$n-n*En),r=Math.sqrt(t*t+s*s),o={mode:"dlch",l:ll/Bn*Math.log(1+.0039*e),c:Math.log(1+.075*r)/(.0435*tl*Bn)};return o.c&&(o.h=me((Math.atan2(s,t)+Mn)/Math.PI*180)),l!==void 0&&(o.alpha=l),o},it=e=>Da(je(e,"dlch")),dt=e=>Ve(Ba(e),"dlab"),Qs={mode:"dlab",parse:["--din99o-lab"],serialize:"--din99o-lab",toMode:{lab65:it,rgb:e=>Hn(it(e))},fromMode:{lab65:dt,rgb:e=>dt(Yn(e))},channels:["l","a","b","alpha"],ranges:{l:[0,100],a:[-40.09,45.501],b:[-40.469,44.344]},interpolate:{l:w,a:w,b:w,alpha:{use:w,fixup:be}}},js={mode:"dlch",parse:["--din99o-lch"],serialize:"--din99o-lch",toMode:{lab65:Da,dlab:e=>Ve(e,"dlab"),rgb:e=>Hn(Da(e))},fromMode:{lab65:Ba,dlab:e=>je(e,"dlch"),rgb:e=>Ba(Yn(e))},channels:["l","c","h","alpha"],ranges:{l:[0,100],c:[0,51.484],h:[0,360]},interpolate:{l:w,c:w,h:{use:w,fixup:Le},alpha:{use:w,fixup:be}},difference:{h:qn},average:{h:Ne}};function Vs({h:e,s:n,i:a,alpha:l}){e=me(e!==void 0?e:0),n===void 0&&(n=0),a===void 0&&(a=0);let t=Math.abs(e/60%2-1),s;switch(Math.floor(e/60)){case 0:s={r:a*(1+n*(3/(2-t)-1)),g:a*(1+n*(3*(1-t)/(2-t)-1)),b:a*(1-n)};break;case 1:s={r:a*(1+n*(3*(1-t)/(2-t)-1)),g:a*(1+n*(3/(2-t)-1)),b:a*(1-n)};break;case 2:s={r:a*(1-n),g:a*(1+n*(3/(2-t)-1)),b:a*(1+n*(3*(1-t)/(2-t)-1))};break;case 3:s={r:a*(1-n),g:a*(1+n*(3*(1-t)/(2-t)-1)),b:a*(1+n*(3/(2-t)-1))};break;case 4:s={r:a*(1+n*(3*(1-t)/(2-t)-1)),g:a*(1-n),b:a*(1+n*(3/(2-t)-1))};break;case 5:s={r:a*(1+n*(3/(2-t)-1)),g:a*(1-n),b:a*(1+n*(3*(1-t)/(2-t)-1))};break;default:s={r:a*(1-n),g:a*(1-n),b:a*(1-n)}}return s.mode="rgb",l!==void 0&&(s.alpha=l),s}function Zs({r:e,g:n,b:a,alpha:l}){e===void 0&&(e=0),n===void 0&&(n=0),a===void 0&&(a=0);let t=Math.max(e,n,a),s=Math.min(e,n,a),r={mode:"hsi",s:e+n+a===0?0:1-3*s/(e+n+a),i:(e+n+a)/3};return t-s!==0&&(r.h=(t===e?(n-a)/(t-s)+(n<a)*6:t===n?(a-e)/(t-s)+2:(e-n)/(t-s)+4)*60),l!==void 0&&(r.alpha=l),r}const Js={mode:"hsi",toMode:{rgb:Vs},parse:["--hsi"],serialize:"--hsi",fromMode:{rgb:Zs},channels:["h","s","i","alpha"],ranges:{h:[0,360]},gamut:"rgb",interpolate:{h:{use:w,fixup:Le},s:w,i:w,alpha:{use:w,fixup:be}},difference:{h:On},average:{h:Ne}};function Ws({h:e,s:n,l:a,alpha:l}){e=me(e!==void 0?e:0),n===void 0&&(n=0),a===void 0&&(a=0);let t=a+n*(a<.5?a:1-a),s=t-(t-a)*2*Math.abs(e/60%2-1),r;switch(Math.floor(e/60)){case 0:r={r:t,g:s,b:2*a-t};break;case 1:r={r:s,g:t,b:2*a-t};break;case 2:r={r:2*a-t,g:t,b:s};break;case 3:r={r:2*a-t,g:s,b:t};break;case 4:r={r:s,g:2*a-t,b:t};break;case 5:r={r:t,g:2*a-t,b:s};break;default:r={r:2*a-t,g:2*a-t,b:2*a-t}}return r.mode="rgb",l!==void 0&&(r.alpha=l),r}function Ks({r:e,g:n,b:a,alpha:l}){e===void 0&&(e=0),n===void 0&&(n=0),a===void 0&&(a=0);let t=Math.max(e,n,a),s=Math.min(e,n,a),r={mode:"hsl",s:t===s?0:(t-s)/(1-Math.abs(t+s-1)),l:.5*(t+s)};return t-s!==0&&(r.h=(t===e?(n-a)/(t-s)+(n<a)*6:t===n?(a-e)/(t-s)+2:(e-n)/(t-s)+4)*60),l!==void 0&&(r.alpha=l),r}const e1=(e,n)=>{switch(n){case"deg":return+e;case"rad":return e/Math.PI*180;case"grad":return e/10*9;case"turn":return e*360}},n1=new RegExp(`^hsla?\\(\\s*${_s}${on}${_n}${on}${_n}\\s*(?:,\\s*${Oa}\\s*)?\\)$`),a1=e=>{let n=e.match(n1);if(!n)return;let a={mode:"hsl"};return n[3]!==void 0?a.h=+n[3]:n[1]!==void 0&&n[2]!==void 0&&(a.h=e1(n[1],n[2])),n[4]!==void 0&&(a.s=Math.min(Math.max(0,n[4]/100),1)),n[5]!==void 0&&(a.l=Math.min(Math.max(0,n[5]/100),1)),n[6]!==void 0?a.alpha=Math.max(0,Math.min(1,n[6]/100)):n[7]!==void 0&&(a.alpha=Math.max(0,Math.min(1,+n[7]))),a};function t1(e,n){if(!n||n[0]!=="hsl"&&n[0]!=="hsla")return;const a={mode:"hsl"},[,l,t,s,r]=n;if(l.type!==y.None){if(l.type===y.Percentage)return;a.h=l.value}if(t.type!==y.None){if(t.type===y.Hue)return;a.s=t.value/100}if(s.type!==y.None){if(s.type===y.Hue)return;a.l=s.value/100}return r.type!==y.None&&(a.alpha=Math.min(1,Math.max(0,r.type===y.Number?r.value:r.value/100))),a}const sl={mode:"hsl",toMode:{rgb:Ws},fromMode:{rgb:Ks},channels:["h","s","l","alpha"],ranges:{h:[0,360]},gamut:"rgb",parse:[t1,a1],serialize:e=>`hsl(${e.h!==void 0?e.h:"none"} ${e.s!==void 0?e.s*100+"%":"none"} ${e.l!==void 0?e.l*100+"%":"none"}${e.alpha<1?` / ${e.alpha}`:""})`,interpolate:{h:{use:w,fixup:Le},s:w,l:w,alpha:{use:w,fixup:be}},difference:{h:On},average:{h:Ne}};function rl({h:e,s:n,v:a,alpha:l}){e=me(e!==void 0?e:0),n===void 0&&(n=0),a===void 0&&(a=0);let t=Math.abs(e/60%2-1),s;switch(Math.floor(e/60)){case 0:s={r:a,g:a*(1-n*t),b:a*(1-n)};break;case 1:s={r:a*(1-n*t),g:a,b:a*(1-n)};break;case 2:s={r:a*(1-n),g:a,b:a*(1-n*t)};break;case 3:s={r:a*(1-n),g:a*(1-n*t),b:a};break;case 4:s={r:a*(1-n*t),g:a*(1-n),b:a};break;case 5:s={r:a,g:a*(1-n),b:a*(1-n*t)};break;default:s={r:a*(1-n),g:a*(1-n),b:a*(1-n)}}return s.mode="rgb",l!==void 0&&(s.alpha=l),s}function ol({r:e,g:n,b:a,alpha:l}){e===void 0&&(e=0),n===void 0&&(n=0),a===void 0&&(a=0);let t=Math.max(e,n,a),s=Math.min(e,n,a),r={mode:"hsv",s:t===0?0:1-s/t,v:t};return t-s!==0&&(r.h=(t===e?(n-a)/(t-s)+(n<a)*6:t===n?(a-e)/(t-s)+2:(e-n)/(t-s)+4)*60),l!==void 0&&(r.alpha=l),r}const il={mode:"hsv",toMode:{rgb:rl},parse:["--hsv"],serialize:"--hsv",fromMode:{rgb:ol},channels:["h","s","v","alpha"],ranges:{h:[0,360]},gamut:"rgb",interpolate:{h:{use:w,fixup:Le},s:w,v:w,alpha:{use:w,fixup:be}},difference:{h:On},average:{h:Ne}};function l1({h:e,w:n,b:a,alpha:l}){if(n===void 0&&(n=0),a===void 0&&(a=0),n+a>1){let t=n+a;n/=t,a/=t}return rl({h:e,s:a===1?1:1-n/(1-a),v:1-a,alpha:l})}function s1(e){let n=ol(e);if(n===void 0)return;let a=n.s!==void 0?n.s:0,l=n.v!==void 0?n.v:0,t={mode:"hwb",w:(1-a)*l,b:1-l};return n.h!==void 0&&(t.h=n.h),n.alpha!==void 0&&(t.alpha=n.alpha),t}function r1(e,n){if(!n||n[0]!=="hwb")return;const a={mode:"hwb"},[,l,t,s,r]=n;if(l.type!==y.None){if(l.type===y.Percentage)return;a.h=l.value}if(t.type!==y.None){if(t.type===y.Hue)return;a.w=t.value/100}if(s.type!==y.None){if(s.type===y.Hue)return;a.b=s.value/100}return r.type!==y.None&&(a.alpha=Math.min(1,Math.max(0,r.type===y.Number?r.value:r.value/100))),a}const o1={mode:"hwb",toMode:{rgb:l1},fromMode:{rgb:s1},channels:["h","w","b","alpha"],ranges:{h:[0,360]},gamut:"rgb",parse:[r1],serialize:e=>`hwb(${e.h!==void 0?e.h:"none"} ${e.w!==void 0?e.w*100+"%":"none"} ${e.b!==void 0?e.b*100+"%":"none"}${e.alpha<1?` / ${e.alpha}`:""})`,interpolate:{h:{use:w,fixup:Le},w,b:w,alpha:{use:w,fixup:be}},difference:{h:Gs},average:{h:Ne}},dl=203,Xn=.1593017578125,cl=78.84375,Gn=.8359375,Un=18.8515625,Qn=18.6875;function ca(e){if(e<0)return 0;const n=Math.pow(e,1/cl);return 1e4*Math.pow(Math.max(0,n-Gn)/(Un-Qn*n),1/Xn)}function ua(e){if(e<0)return 0;const n=Math.pow(e/1e4,Xn);return Math.pow((Gn+Un*n)/(1+Qn*n),cl)}const fa=e=>Math.max(e/dl,0),ct=({i:e,t:n,p:a,alpha:l})=>{e===void 0&&(e=0),n===void 0&&(n=0),a===void 0&&(a=0);const t=ca(e+.008609037037932761*n+.11102962500302593*a),s=ca(e-.00860903703793275*n-.11102962500302599*a),r=ca(e+.5600313357106791*n-.32062717498731885*a),o={mode:"xyz65",x:fa(2.070152218389422*t-1.3263473389671556*s+.2066510476294051*r),y:fa(.3647385209748074*t+.680566024947227*s-.0453045459220346*r),z:fa(-.049747207535812*t-.0492609666966138*s+1.1880659249923042*r)};return l!==void 0&&(o.alpha=l),o},Fa=(e=0)=>Math.max(e*dl,0),ut=({x:e,y:n,z:a,alpha:l})=>{const t=Fa(e),s=Fa(n),r=Fa(a),o=ua(.3592832590121217*t+.6976051147779502*s-.0358915932320289*r),d=ua(-.1920808463704995*t+1.1004767970374323*s+.0753748658519118*r),u=ua(.0070797844607477*t+.0748396662186366*s+.8433265453898765*r),f=.5*o+.5*d,b=1.61376953125*o-3.323486328125*d+1.709716796875*u,h=4.378173828125*o-4.24560546875*d-.132568359375*u,c={mode:"itp",i:f,t:b,p:h};return l!==void 0&&(c.alpha=l),c},i1={mode:"itp",channels:["i","t","p","alpha"],parse:["--ictcp"],serialize:"--ictcp",toMode:{xyz65:ct,rgb:e=>nn(ct(e))},fromMode:{xyz65:ut,rgb:e=>ut(en(e))},ranges:{i:[0,.581],t:[-.369,.272],p:[-.164,.331]},interpolate:{i:w,t:w,p:w,alpha:{use:w,fixup:be}}},d1=134.03437499999998,c1=16295499532821565e-27,ha=e=>{if(e<0)return 0;let n=Math.pow(e/1e4,Xn);return Math.pow((Gn+Un*n)/(1+Qn*n),d1)},ba=(e=0)=>Math.max(e*203,0),ul=({x:e,y:n,z:a,alpha:l})=>{e=ba(e),n=ba(n),a=ba(a);let t=1.15*e-.15*a,s=.66*n+.34*e,r=ha(.41478972*t+.579999*s+.014648*a),o=ha(-.20151*t+1.120649*s+.0531008*a),d=ha(-.0166008*t+.2648*s+.6684799*a),u=(r+o)/2,f={mode:"jab",j:.44*u/(1-.56*u)-c1,a:3.524*r-4.066708*o+.542708*d,b:.199076*r+1.096799*o-1.295875*d};return l!==void 0&&(f.alpha=l),f},u1=134.03437499999998,ft=16295499532821565e-27,ga=e=>{if(e<0)return 0;let n=Math.pow(e,1/u1);return 1e4*Math.pow((Gn-n)/(Qn*n-Un),1/Xn)},pa=e=>e/203,fl=({j:e,a:n,b:a,alpha:l})=>{e===void 0&&(e=0),n===void 0&&(n=0),a===void 0&&(a=0);let t=(e+ft)/(.44+.56*(e+ft)),s=ga(t+.13860504*n+.058047316*a),r=ga(t-.13860504*n-.058047316*a),o=ga(t-.096019242*n-.8118919*a),d={mode:"xyz65",x:pa(1.661373024652174*s-.914523081304348*r+.23136208173913045*o),y:pa(-.3250758611844533*s+1.571847026732543*r-.21825383453227928*o),z:pa(-.090982811*s-.31272829*r+1.5227666*o)};return l!==void 0&&(d.alpha=l),d},Fl=e=>{let n=ul(en(e));return e.r===e.b&&e.b===e.g&&(n.a=n.b=0),n},hl=e=>nn(fl(e)),f1={mode:"jab",channels:["j","a","b","alpha"],parse:["--jzazbz"],serialize:"--jzazbz",fromMode:{rgb:Fl,xyz65:ul},toMode:{rgb:hl,xyz65:fl},ranges:{j:[0,.222],a:[-.109,.129],b:[-.185,.134]},interpolate:{j:w,a:w,b:w,alpha:{use:w,fixup:be}}},Ft=({j:e,a:n,b:a,alpha:l})=>{n===void 0&&(n=0),a===void 0&&(a=0);let t=Math.sqrt(n*n+a*a),s={mode:"jch",j:e,c:t};return t&&(s.h=me(Math.atan2(a,n)*180/Math.PI)),l!==void 0&&(s.alpha=l),s},ht=({j:e,c:n,h:a,alpha:l})=>{a===void 0&&(a=0);let t={mode:"jab",j:e,a:n?n*Math.cos(a/180*Math.PI):0,b:n?n*Math.sin(a/180*Math.PI):0};return l!==void 0&&(t.alpha=l),t},F1={mode:"jch",parse:["--jzczhz"],serialize:"--jzczhz",toMode:{jab:ht,rgb:e=>hl(ht(e))},fromMode:{rgb:e=>Ft(Fl(e)),jab:Ft},channels:["j","c","h","alpha"],ranges:{j:[0,.221],c:[0,.19],h:[0,360]},interpolate:{h:{use:w,fixup:Le},c:w,j:w,alpha:{use:w,fixup:be}},difference:{h:qn},average:{h:Ne}},jn=Math.pow(29,3)/Math.pow(3,3),qa=Math.pow(6,3)/Math.pow(29,3);let va=e=>Math.pow(e,3)>qa?Math.pow(e,3):(116*e-16)/jn;const Ha=({l:e,a:n,b:a,alpha:l})=>{e===void 0&&(e=0),n===void 0&&(n=0),a===void 0&&(a=0);let t=(e+16)/116,s=n/500+t,r=t-a/200,o={mode:"xyz50",x:va(s)*fe.X,y:va(t)*fe.Y,z:va(r)*fe.Z};return l!==void 0&&(o.alpha=l),o},yn=({x:e,y:n,z:a,alpha:l})=>{e===void 0&&(e=0),n===void 0&&(n=0),a===void 0&&(a=0);let t=fn({r:e*3.1341359569958707-n*1.6173863321612538-.4906619460083532*a,g:e*-.978795502912089+n*1.916254567259524+.03344273116131949*a,b:e*.07195537988411677-n*.2289768264158322+1.405386058324125*a});return l!==void 0&&(t.alpha=l),t},bl=e=>yn(Ha(e)),kn=e=>{let{r:n,g:a,b:l,alpha:t}=un(e),s={mode:"xyz50",x:.436065742824811*n+.3851514688337912*a+.14307845442264197*l,y:.22249319175623702*n+.7168870538238823*a+.06061979053616537*l,z:.013923904500943465*n+.09708128566574634*a+.7140993584005155*l};return t!==void 0&&(s.alpha=t),s},ma=e=>e>qa?Math.cbrt(e):(jn*e+16)/116,Ya=({x:e,y:n,z:a,alpha:l})=>{e===void 0&&(e=0),n===void 0&&(n=0),a===void 0&&(a=0);let t=ma(e/fe.X),s=ma(n/fe.Y),r=ma(a/fe.Z),o={mode:"lab",l:116*s-16,a:500*(t-s),b:200*(s-r)};return l!==void 0&&(o.alpha=l),o},gl=e=>{let n=Ya(kn(e));return e.r===e.b&&e.b===e.g&&(n.a=n.b=0),n};function h1(e,n){if(!n||n[0]!=="lab")return;const a={mode:"lab"},[,l,t,s,r]=n;if(!(l.type===y.Hue||t.type===y.Hue||s.type===y.Hue))return l.type!==y.None&&(a.l=Math.min(Math.max(0,l.value),100)),t.type!==y.None&&(a.a=t.type===y.Number?t.value:t.value*125/100),s.type!==y.None&&(a.b=s.type===y.Number?s.value:s.value*125/100),r.type!==y.None&&(a.alpha=Math.min(1,Math.max(0,r.type===y.Number?r.value:r.value/100))),a}const Xa={mode:"lab",toMode:{xyz50:Ha,rgb:bl},fromMode:{xyz50:Ya,rgb:gl},channels:["l","a","b","alpha"],ranges:{l:[0,100],a:[-125,125],b:[-125,125]},parse:[h1],serialize:e=>`lab(${e.l!==void 0?e.l:"none"} ${e.a!==void 0?e.a:"none"} ${e.b!==void 0?e.b:"none"}${e.alpha<1?` / ${e.alpha}`:""})`,interpolate:{l:w,a:w,b:w,alpha:{use:w,fixup:be}}},b1={...Xa,mode:"lab65",parse:["--lab-d65"],serialize:"--lab-d65",toMode:{xyz65:nl,rgb:Hn},fromMode:{xyz65:al,rgb:Yn},ranges:{l:[0,100],a:[-125,125],b:[-125,125]}};function g1(e,n){if(!n||n[0]!=="lch")return;const a={mode:"lch"},[,l,t,s,r]=n;if(l.type!==y.None){if(l.type===y.Hue)return;a.l=Math.min(Math.max(0,l.value),100)}if(t.type!==y.None&&(a.c=Math.max(0,t.type===y.Number?t.value:t.value*150/100)),s.type!==y.None){if(s.type===y.Percentage)return;a.h=s.value}return r.type!==y.None&&(a.alpha=Math.min(1,Math.max(0,r.type===y.Number?r.value:r.value/100))),a}const Ga={mode:"lch",toMode:{lab:Ve,rgb:e=>bl(Ve(e))},fromMode:{rgb:e=>je(gl(e)),lab:je},channels:["l","c","h","alpha"],ranges:{l:[0,100],c:[0,150],h:[0,360]},parse:[g1],serialize:e=>`lch(${e.l!==void 0?e.l:"none"} ${e.c!==void 0?e.c:"none"} ${e.h!==void 0?e.h:"none"}${e.alpha<1?` / ${e.alpha}`:""})`,interpolate:{h:{use:w,fixup:Le},c:w,l:w,alpha:{use:w,fixup:be}},difference:{h:qn},average:{h:Ne}},p1={...Ga,mode:"lch65",parse:["--lch-d65"],serialize:"--lch-d65",toMode:{lab65:e=>Ve(e,"lab65"),rgb:e=>Hn(Ve(e,"lab65"))},fromMode:{rgb:e=>je(Yn(e),"lch65"),lab65:e=>je(e,"lch65")},ranges:{l:[0,100],c:[0,150],h:[0,360]}},pl=({l:e,u:n,v:a,alpha:l})=>{n===void 0&&(n=0),a===void 0&&(a=0);let t=Math.sqrt(n*n+a*a),s={mode:"lchuv",l:e,c:t};return t&&(s.h=me(Math.atan2(a,n)*180/Math.PI)),l!==void 0&&(s.alpha=l),s},vl=({l:e,c:n,h:a,alpha:l})=>{a===void 0&&(a=0);let t={mode:"luv",l:e,u:n?n*Math.cos(a/180*Math.PI):0,v:n?n*Math.sin(a/180*Math.PI):0};return l!==void 0&&(t.alpha=l),t},ml=(e,n,a)=>4*e/(e+15*n+3*a),_l=(e,n,a)=>9*n/(e+15*n+3*a),v1=ml(fe.X,fe.Y,fe.Z),m1=_l(fe.X,fe.Y,fe.Z),_1=e=>e<=qa?jn*e:116*Math.cbrt(e)-16,$a=({x:e,y:n,z:a,alpha:l})=>{e===void 0&&(e=0),n===void 0&&(n=0),a===void 0&&(a=0);let t=_1(n/fe.Y),s=ml(e,n,a),r=_l(e,n,a);!isFinite(s)||!isFinite(r)?t=s=r=0:(s=13*t*(s-v1),r=13*t*(r-m1));let o={mode:"luv",l:t,u:s,v:r};return l!==void 0&&(o.alpha=l),o},M1=(e,n,a)=>4*e/(e+15*n+3*a),y1=(e,n,a)=>9*n/(e+15*n+3*a),k1=M1(fe.X,fe.Y,fe.Z),x1=y1(fe.X,fe.Y,fe.Z),Ea=({l:e,u:n,v:a,alpha:l})=>{if(e===void 0&&(e=0),e===0)return{mode:"xyz50",x:0,y:0,z:0};n===void 0&&(n=0),a===void 0&&(a=0);let t=n/(13*e)+k1,s=a/(13*e)+x1,r=fe.Y*(e<=8?e/jn:Math.pow((e+16)/116,3)),o=r*(9*t)/(4*s),d=r*(12-3*t-20*s)/(4*s),u={mode:"xyz50",x:o,y:r,z:d};return l!==void 0&&(u.alpha=l),u},C1=e=>pl($a(kn(e))),w1=e=>yn(Ea(vl(e))),T1={mode:"lchuv",toMode:{luv:vl,rgb:w1},fromMode:{rgb:C1,luv:pl},channels:["l","c","h","alpha"],parse:["--lchuv"],serialize:"--lchuv",ranges:{l:[0,100],c:[0,176.956],h:[0,360]},interpolate:{h:{use:w,fixup:Le},c:w,l:w,alpha:{use:w,fixup:be}},difference:{h:qn},average:{h:Ne}},S1={...cn,mode:"lrgb",toMode:{rgb:fn},fromMode:{rgb:un},parse:["srgb-linear"],serialize:"srgb-linear"},A1={mode:"luv",toMode:{xyz50:Ea,rgb:e=>yn(Ea(e))},fromMode:{xyz50:$a,rgb:e=>$a(kn(e))},channels:["l","u","v","alpha"],parse:["--luv"],serialize:"--luv",ranges:{l:[0,100],u:[-84.936,175.042],v:[-125.882,87.243]},interpolate:{l:w,u:w,v:w,alpha:{use:w,fixup:be}}},Ml=({r:e,g:n,b:a,alpha:l})=>{e===void 0&&(e=0),n===void 0&&(n=0),a===void 0&&(a=0);let t=Math.cbrt(.412221469470763*e+.5363325372617348*n+.0514459932675022*a),s=Math.cbrt(.2119034958178252*e+.6806995506452344*n+.1073969535369406*a),r=Math.cbrt(.0883024591900564*e+.2817188391361215*n+.6299787016738222*a),o={mode:"oklab",l:.210454268309314*t+.7936177747023054*s-.0040720430116193*r,a:1.9779985324311684*t-2.42859224204858*s+.450593709617411*r,b:.0259040424655478*t+.7827717124575296*s-.8086757549230774*r};return l!==void 0&&(o.alpha=l),o},Vn=e=>{let n=Ml(un(e));return e.r===e.b&&e.b===e.g&&(n.a=n.b=0),n},xn=({l:e,a:n,b:a,alpha:l})=>{e===void 0&&(e=0),n===void 0&&(n=0),a===void 0&&(a=0);let t=Math.pow(e+.3963377773761749*n+.2158037573099136*a,3),s=Math.pow(e-.1055613458156586*n-.0638541728258133*a,3),r=Math.pow(e-.0894841775298119*n-1.2914855480194092*a,3),o={mode:"lrgb",r:4.076741636075957*t-3.3077115392580616*s+.2309699031821044*r,g:-1.2684379732850317*t+2.6097573492876887*s-.3413193760026573*r,b:-.0041960761386756*t-.7034186179359362*s+1.7076146940746117*r};return l!==void 0&&(o.alpha=l),o},Zn=e=>fn(xn(e));function Ra(e){const l=1.170873786407767;return .5*(l*e-.206+Math.sqrt((l*e-.206)*(l*e-.206)+4*.03*l*e))}function Rn(e){return(e*e+.206*e)/(1.170873786407767*(e+.03))}function P1(e,n){let a,l,t,s,r,o,d,u;-1.88170328*e-.80936493*n>1?(a=1.19086277,l=1.76576728,t=.59662641,s=.75515197,r=.56771245,o=4.0767416621,d=-3.3077115913,u=.2309699292):1.81444104*e-1.19445276*n>1?(a=.73956515,l=-.45954404,t=.08285427,s=.1254107,r=.14503204,o=-1.2684380046,d=2.6097574011,u=-.3413193965):(a=1.35733652,l=-.00915799,t=-1.1513021,s=-.50559606,r=.00692167,o=-.0041960863,d=-.7034186147,u=1.707614701);let f=a+l*e+t*n+s*e*e+r*e*n,b=.3963377774*e+.2158037573*n,h=-.1055613458*e-.0638541728*n,c=-.0894841775*e-1.291485548*n;{let F=1+f*b,p=1+f*h,_=1+f*c,x=F*F*F,C=p*p*p,$=_*_*_,T=3*b*F*F,B=3*h*p*p,v=3*c*_*_,m=6*b*b*F,P=6*h*h*p,N=6*c*c*_,S=o*x+d*C+u*$,O=o*T+d*B+u*v,L=o*m+d*P+u*N;f=f-S*O/(O*O-.5*S*L)}return f}function Ua(e,n){let a=P1(e,n),l=xn({l:1,a:a*e,b:a*n}),t=Math.cbrt(1/Math.max(l.r,l.g,l.b)),s=t*a;return[t,s]}function z1(e,n,a,l,t,s=null){s||(s=Ua(e,n));let r;if((a-t)*s[1]-(s[0]-t)*l<=0)r=s[1]*t/(l*s[0]+s[1]*(t-a));else{r=s[1]*(t-1)/(l*(s[0]-1)+s[1]*(t-a));{let o=a-t,d=l,u=.3963377774*e+.2158037573*n,f=-.1055613458*e-.0638541728*n,b=-.0894841775*e-1.291485548*n,h=o+d*u,c=o+d*f,F=o+d*b;{let p=t*(1-r)+r*a,_=r*l,x=p+_*u,C=p+_*f,$=p+_*b,T=x*x*x,B=C*C*C,v=$*$*$,m=3*h*x*x,P=3*c*C*C,N=3*F*$*$,S=6*h*h*x,O=6*c*c*C,L=6*F*F*$,j=4.0767416621*T-3.3077115913*B+.2309699292*v-1,ne=4.0767416621*m-3.3077115913*P+.2309699292*N,ae=4.0767416621*S-3.3077115913*O+.2309699292*L,se=ne/(ne*ne-.5*j*ae),z=-j*se,A=-1.2684380046*T+2.6097574011*B-.3413193965*v-1,G=-1.2684380046*m+2.6097574011*P-.3413193965*N,H=-1.2684380046*S+2.6097574011*O-.3413193965*L,M=G/(G*G-.5*A*H),R=-A*M,E=-.0041960863*T-.7034186147*B+1.707614701*v-1,Z=-.0041960863*m-.7034186147*P+1.707614701*N,V=-.0041960863*S-.7034186147*O+1.707614701*L,ie=Z/(Z*Z-.5*E*V),K=-E*ie;z=se>=0?z:1e6,R=M>=0?R:1e6,K=ie>=0?K:1e6,r+=Math.min(z,Math.min(R,K))}}}return r}function Qa(e,n,a=null){a||(a=Ua(e,n));let l=a[0],t=a[1];return[t/l,t/(1-l)]}function yl(e,n,a){let l=Ua(n,a),t=z1(n,a,e,1,e,l),s=Qa(n,a,l),r=.11516993+1/(7.4477897+4.1590124*a+n*(-2.19557347+1.75198401*a+n*(-2.13704948-10.02301043*a+n*(-4.24894561+5.38770819*a+4.69891013*n)))),o=.11239642+1/(1.6132032-.68124379*a+n*(.40370612+.90148123*a+n*(-.27087943+.6122399*a+n*(.00299215-.45399568*a-.14661872*n)))),d=t/Math.min(e*s[0],(1-e)*s[1]),u=e*r,f=(1-e)*o,b=.9*d*Math.sqrt(Math.sqrt(1/(1/(u*u*u*u)+1/(f*f*f*f))));return u=e*.4,f=(1-e)*.8,[Math.sqrt(1/(1/(u*u)+1/(f*f))),b,t]}function bt(e){const n=e.l!==void 0?e.l:0,a=e.a!==void 0?e.a:0,l=e.b!==void 0?e.b:0,t={mode:"okhsl",l:Ra(n)};e.alpha!==void 0&&(t.alpha=e.alpha);let s=Math.sqrt(a*a+l*l);if(!s)return t.s=0,t;let[r,o,d]=yl(n,a/s,l/s),u;if(s<o){let f=0,b=.8*r,h=1-b/o;u=(s-f)/(b+h*(s-f))*.8}else{let f=o,b=.2*o*o*1.25*1.25/r,h=1-b/(d-o);u=.8+.2*((s-f)/(b+h*(s-f)))}return u&&(t.s=u,t.h=me(Math.atan2(l,a)*180/Math.PI)),t}function gt(e){let n=e.h!==void 0?e.h:0,a=e.s!==void 0?e.s:0,l=e.l!==void 0?e.l:0;const t={mode:"oklab",l:Rn(l)};if(e.alpha!==void 0&&(t.alpha=e.alpha),!a||l===1)return t.a=t.b=0,t;let s=Math.cos(n/180*Math.PI),r=Math.sin(n/180*Math.PI),[o,d,u]=yl(t.l,s,r),f,b,h,c;a<.8?(f=1.25*a,b=0,h=.8*o,c=1-h/d):(f=5*(a-.8),b=d,h=.2*d*d*1.25*1.25/o,c=1-h/(u-d));let F=b+f*h/(1-c*f);return t.a=F*s,t.b=F*r,t}const D1={...sl,mode:"okhsl",channels:["h","s","l","alpha"],parse:["--okhsl"],serialize:"--okhsl",fromMode:{oklab:bt,rgb:e=>bt(Vn(e))},toMode:{oklab:gt,rgb:e=>Zn(gt(e))}};function pt(e){let n=e.l!==void 0?e.l:0,a=e.a!==void 0?e.a:0,l=e.b!==void 0?e.b:0,t=Math.sqrt(a*a+l*l),s=t?a/t:1,r=t?l/t:1,[o,d]=Qa(s,r),u=.5,f=1-u/o,b=d/(t+n*d),h=b*n,c=b*t,F=Rn(h),p=c*F/h,_=xn({l:F,a:s*p,b:r*p}),x=Math.cbrt(1/Math.max(_.r,_.g,_.b,0));n=n/x,t=t/x*Ra(n)/n,n=Ra(n);const C={mode:"okhsv",s:t?(u+d)*c/(d*u+d*f*c):0,v:n?n/h:0};return C.s&&(C.h=me(Math.atan2(l,a)*180/Math.PI)),e.alpha!==void 0&&(C.alpha=e.alpha),C}function vt(e){const n={mode:"oklab"};e.alpha!==void 0&&(n.alpha=e.alpha);const a=e.h!==void 0?e.h:0,l=e.s!==void 0?e.s:0,t=e.v!==void 0?e.v:0,s=Math.cos(a/180*Math.PI),r=Math.sin(a/180*Math.PI),[o,d]=Qa(s,r),u=.5,f=1-u/o,b=1-l*u/(u+d-d*f*l),h=l*d*u/(u+d-d*f*l),c=Rn(b),F=h*c/b,p=xn({l:c,a:s*F,b:r*F}),_=Math.cbrt(1/Math.max(p.r,p.g,p.b,0)),x=Rn(t*b),C=h*x/b;return n.l=x*_,n.a=C*s*_,n.b=C*r*_,n}const B1={...il,mode:"okhsv",channels:["h","s","v","alpha"],parse:["--okhsv"],serialize:"--okhsv",fromMode:{oklab:pt,rgb:e=>pt(Vn(e))},toMode:{oklab:vt,rgb:e=>Zn(vt(e))}};function $1(e,n){if(!n||n[0]!=="oklab")return;const a={mode:"oklab"},[,l,t,s,r]=n;if(!(l.type===y.Hue||t.type===y.Hue||s.type===y.Hue))return l.type!==y.None&&(a.l=Math.min(Math.max(0,l.type===y.Number?l.value:l.value/100),1)),t.type!==y.None&&(a.a=t.type===y.Number?t.value:t.value*.4/100),s.type!==y.None&&(a.b=s.type===y.Number?s.value:s.value*.4/100),r.type!==y.None&&(a.alpha=Math.min(1,Math.max(0,r.type===y.Number?r.value:r.value/100))),a}const E1={...Xa,mode:"oklab",toMode:{lrgb:xn,rgb:Zn},fromMode:{lrgb:Ml,rgb:Vn},ranges:{l:[0,1],a:[-.4,.4],b:[-.4,.4]},parse:[$1],serialize:e=>`oklab(${e.l!==void 0?e.l:"none"} ${e.a!==void 0?e.a:"none"} ${e.b!==void 0?e.b:"none"}${e.alpha<1?` / ${e.alpha}`:""})`};function R1(e,n){if(!n||n[0]!=="oklch")return;const a={mode:"oklch"},[,l,t,s,r]=n;if(l.type!==y.None){if(l.type===y.Hue)return;a.l=Math.min(Math.max(0,l.type===y.Number?l.value:l.value/100),1)}if(t.type!==y.None&&(a.c=Math.max(0,t.type===y.Number?t.value:t.value*.4/100)),s.type!==y.None){if(s.type===y.Percentage)return;a.h=s.value}return r.type!==y.None&&(a.alpha=Math.min(1,Math.max(0,r.type===y.Number?r.value:r.value/100))),a}const I1={...Ga,mode:"oklch",toMode:{oklab:e=>Ve(e,"oklab"),rgb:e=>Zn(Ve(e,"oklab"))},fromMode:{rgb:e=>je(Vn(e),"oklch"),oklab:e=>je(e,"oklch")},parse:[R1],serialize:e=>`oklch(${e.l!==void 0?e.l:"none"} ${e.c!==void 0?e.c:"none"} ${e.h!==void 0?e.h:"none"}${e.alpha<1?` / ${e.alpha}`:""})`,ranges:{l:[0,1],c:[0,.4],h:[0,360]}},mt=e=>{let{r:n,g:a,b:l,alpha:t}=un(e),s={mode:"xyz65",x:.486570948648216*n+.265667693169093*a+.1982172852343625*l,y:.2289745640697487*n+.6917385218365062*a+.079286914093745*l,z:0*n+.0451133818589026*a+1.043944368900976*l};return t!==void 0&&(s.alpha=t),s},_t=({x:e,y:n,z:a,alpha:l})=>{e===void 0&&(e=0),n===void 0&&(n=0),a===void 0&&(a=0);let t=fn({r:e*2.4934969119414263-n*.9313836179191242-.402710784450717*a,g:e*-.8294889695615749+n*1.7626640603183465+.0236246858419436*a,b:e*.0358458302437845-n*.0761723892680418+.9568845240076871*a},"p3");return l!==void 0&&(t.alpha=l),t},L1={...cn,mode:"p3",parse:["display-p3"],serialize:"display-p3",fromMode:{rgb:e=>_t(en(e)),xyz65:_t},toMode:{rgb:e=>nn(mt(e)),xyz65:mt}},_a=e=>{let n=Math.abs(e);return n>=1/512?Math.sign(e)*Math.pow(n,1/1.8):16*e},Mt=({x:e,y:n,z:a,alpha:l})=>{e===void 0&&(e=0),n===void 0&&(n=0),a===void 0&&(a=0);let t={mode:"prophoto",r:_a(e*1.3457868816471585-n*.2555720873797946-.0511018649755453*a),g:_a(e*-.5446307051249019+n*1.5082477428451466+.0205274474364214*a),b:_a(e*0+n*0+1.2119675456389452*a)};return l!==void 0&&(t.alpha=l),t},Ma=(e=0)=>{let n=Math.abs(e);return n>=16/512?Math.sign(e)*Math.pow(n,1.8):e/16},yt=e=>{let n=Ma(e.r),a=Ma(e.g),l=Ma(e.b),t={mode:"xyz50",x:.7977666449006423*n+.1351812974005331*a+.0313477341283922*l,y:.2880748288194013*n+.7118352342418731*a+899369387256e-16*l,z:0*n+0*a+.8251046025104602*l};return e.alpha!==void 0&&(t.alpha=e.alpha),t},N1={...cn,mode:"prophoto",parse:["prophoto-rgb"],serialize:"prophoto-rgb",fromMode:{xyz50:Mt,rgb:e=>Mt(kn(e))},toMode:{xyz50:yt,rgb:e=>yn(yt(e))}},kt=1.09929682680944,O1=.018053968510807,ya=e=>{const n=Math.abs(e);return n>O1?(Math.sign(e)||1)*(kt*Math.pow(n,.45)-(kt-1)):4.5*e},xt=({x:e,y:n,z:a,alpha:l})=>{e===void 0&&(e=0),n===void 0&&(n=0),a===void 0&&(a=0);let t={mode:"rec2020",r:ya(e*1.7166511879712683-n*.3556707837763925-.2533662813736599*a),g:ya(e*-.6666843518324893+n*1.6164812366349395+.0157685458139111*a),b:ya(e*.0176398574453108-n*.0427706132578085+.9421031212354739*a)};return l!==void 0&&(t.alpha=l),t},Ct=1.09929682680944,q1=.018053968510807,ka=(e=0)=>{let n=Math.abs(e);return n<q1*4.5?e/4.5:(Math.sign(e)||1)*Math.pow((n+Ct-1)/Ct,1/.45)},wt=e=>{let n=ka(e.r),a=ka(e.g),l=ka(e.b),t={mode:"xyz65",x:.6369580483012911*n+.1446169035862083*a+.1688809751641721*l,y:.262700212011267*n+.6779980715188708*a+.059301716469862*l,z:0*n+.0280726930490874*a+1.0609850577107909*l};return e.alpha!==void 0&&(t.alpha=e.alpha),t},H1={...cn,mode:"rec2020",fromMode:{xyz65:xt,rgb:e=>xt(en(e))},toMode:{xyz65:wt,rgb:e=>nn(wt(e))},parse:["rec2020"],serialize:"rec2020"},Ke=.0037930732552754493,kl=Math.cbrt(Ke),xa=e=>Math.cbrt(e)-kl,Y1=e=>{const{r:n,g:a,b:l,alpha:t}=un(e),s=xa(.3*n+.622*a+.078*l+Ke),r=xa(.23*n+.692*a+.078*l+Ke),o=xa(.2434226892454782*n+.2047674442449682*a+.5518098665095535*l+Ke),d={mode:"xyb",x:(s-r)/2,y:(s+r)/2,b:o-(s+r)/2};return t!==void 0&&(d.alpha=t),d},Ca=e=>Math.pow(e+kl,3),X1=({x:e,y:n,b:a,alpha:l})=>{e===void 0&&(e=0),n===void 0&&(n=0),a===void 0&&(a=0);const t=Ca(e+n)-Ke,s=Ca(n-e)-Ke,r=Ca(a+n)-Ke,o=fn({r:11.031566904639861*t-9.866943908131562*s-.16462299650829934*r,g:-3.2541473810744237*t+4.418770377582723*s-.16462299650829934*r,b:-3.6588512867136815*t+2.7129230459360922*s+1.9459282407775895*r});return l!==void 0&&(o.alpha=l),o},G1={mode:"xyb",channels:["x","y","b","alpha"],parse:["--xyb"],serialize:"--xyb",toMode:{rgb:X1},fromMode:{rgb:Y1},ranges:{x:[-.0154,.0281],y:[0,.8453],b:[-.2778,.388]},interpolate:{x:w,y:w,b:w,alpha:{use:w,fixup:be}}},U1={mode:"xyz50",parse:["xyz-d50"],serialize:"xyz-d50",toMode:{rgb:yn,lab:Ya},fromMode:{rgb:kn,lab:Ha},channels:["x","y","z","alpha"],ranges:{x:[0,.964],y:[0,.999],z:[0,.825]},interpolate:{x:w,y:w,z:w,alpha:{use:w,fixup:be}}},Q1=e=>{let{x:n,y:a,z:l,alpha:t}=e;n===void 0&&(n=0),a===void 0&&(a=0),l===void 0&&(l=0);let s={mode:"xyz50",x:1.0479298208405488*n+.0229467933410191*a-.0501922295431356*l,y:.0296278156881593*n+.990434484573249*a-.0170738250293851*l,z:-.0092430581525912*n+.0150551448965779*a+.7518742899580008*l};return t!==void 0&&(s.alpha=t),s},j1=e=>{let{x:n,y:a,z:l,alpha:t}=e;n===void 0&&(n=0),a===void 0&&(a=0),l===void 0&&(l=0);let s={mode:"xyz65",x:.9554734527042182*n-.0230985368742614*a+.0632593086610217*l,y:-.0283697069632081*n+1.0099954580058226*a+.021041398966943*l,z:.0123140016883199*n-.0205076964334779*a+1.3303659366080753*l};return t!==void 0&&(s.alpha=t),s},V1={mode:"xyz65",toMode:{rgb:nn,xyz50:Q1},fromMode:{rgb:en,xyz50:j1},ranges:{x:[0,.95],y:[0,1],z:[0,1.088]},channels:["x","y","z","alpha"],parse:["xyz","xyz-d65"],serialize:"xyz-d65",interpolate:{x:w,y:w,z:w,alpha:{use:w,fixup:be}}},Z1=({r:e,g:n,b:a,alpha:l})=>{e===void 0&&(e=0),n===void 0&&(n=0),a===void 0&&(a=0);const t={mode:"yiq",y:.29889531*e+.58662247*n+.11448223*a,i:.59597799*e-.2741761*n-.32180189*a,q:.21147017*e-.52261711*n+.31114694*a};return l!==void 0&&(t.alpha=l),t},J1=({y:e,i:n,q:a,alpha:l})=>{e===void 0&&(e=0),n===void 0&&(n=0),a===void 0&&(a=0);const t={mode:"rgb",r:e+.95608445*n+.6208885*a,g:e-.27137664*n-.6486059*a,b:e-1.10561724*n+1.70250126*a};return l!==void 0&&(t.alpha=l),t},W1={mode:"yiq",toMode:{rgb:J1},fromMode:{rgb:Z1},channels:["y","i","q","alpha"],parse:["--yiq"],serialize:"--yiq",ranges:{i:[-.595,.595],q:[-.522,.522]},interpolate:{y:w,i:w,q:w,alpha:{use:w,fixup:be}}};J(Ns);J(Us);J(Qs);J(js);J(Js);J(sl);J(il);J(o1);J(i1);J(f1);J(F1);J(Xa);J(b1);J(Ga);J(p1);J(T1);J(S1);J(A1);J(D1);J(B1);J(E1);J(I1);J(L1);J(N1);J(H1);J(cn);J(G1);J(U1);J(V1);J(W1);const Tt=Object.assign({"../../data/sets/rebrickable_parts_30637-1-animal-tray-and-bag-tag.csv":P0,"../../data/sets/rebrickable_parts_40438-1-extra-dots-levis-confetti-bag.csv":z0,"../../data/sets/rebrickable_parts_41803-1-extra-dots-series-8-glitter-and-shine.csv":D0,"../../data/sets/rebrickable_parts_41805-1-creative-animal-drawer.csv":B0,"../../data/sets/rebrickable_parts_41807-1-bracelet-designer-mega-pack.csv":$0,"../../data/sets/rebrickable_parts_41808-1-hogwarts-accessories-pack.csv":E0,"../../data/sets/rebrickable_parts_41809-1-hedwig-pencil-holder.csv":R0,"../../data/sets/rebrickable_parts_41811-1-hogwarts-desktop-kit.csv":I0,"../../data/sets/rebrickable_parts_41904-1-animal-picture-holders.csv":L0,"../../data/sets/rebrickable_parts_41907-1-desk-organizer.csv":N0,"../../data/sets/rebrickable_parts_41908-1-extra-dots-series-1.csv":O0,"../../data/sets/rebrickable_parts_41915-1-jewelry-box.csv":q0,"../../data/sets/rebrickable_parts_41916-1-extra-dots-series-2.csv":H0,"../../data/sets/rebrickable_parts_41921-1-extra-dots-series-3.csv":Y0,"../../data/sets/rebrickable_parts_41926-1-creative-party-kit.csv":X0,"../../data/sets/rebrickable_parts_41927-1-bag-tag-dog.csv":G0,"../../data/sets/rebrickable_parts_41928-1-bag-tag-narwhal.csv":U0,"../../data/sets/rebrickable_parts_41929-1-bag-tag-leopard.csv":Q0,"../../data/sets/rebrickable_parts_41930-1-bag-tag-panda.csv":j0,"../../data/sets/rebrickable_parts_41932-1-extra-dots-series-5.csv":V0,"../../data/sets/rebrickable_parts_41935-1-lots-of-dots.csv":Z0,"../../data/sets/rebrickable_parts_41938-1-creative-designer-box.csv":J0,"../../data/sets/rebrickable_parts_41939-1-bag-tag-dragon.csv":W0,"../../data/sets/rebrickable_parts_41940-1-bag-tag-unicorn.csv":K0,"../../data/sets/rebrickable_parts_41944-1-candy-kitty-bracelet-bag-tag.csv":es,"../../data/sets/rebrickable_parts_41946-1-extra-dots-series-6.csv":ns,"../../data/sets/rebrickable_parts_41948-1-cute-banana-pen-holder.csv":as,"../../data/sets/rebrickable_parts_41949-1-bag-tags-mega-pack-messaging.csv":ts,"../../data/sets/rebrickable_parts_41950-1-lots-of-dots-lettering.csv":ls,"../../data/sets/rebrickable_parts_41952-1-big-message-board.csv":ss,"../../data/sets/rebrickable_parts_41954-1-adhesive-patch.csv":rs,"../../data/sets/rebrickable_parts_41957-1-adhesive-patches-mega-pack.csv":os,"../../data/sets/rebrickable_parts_41958-1-extra-dots-series-7-sport.csv":is,"../../data/sets/rebrickable_parts_41959-1-cute-panda-tray.csv":ds,"../../data/sets/rebrickable_parts_41960-1-big-box.csv":cs,"../../data/sets/rebrickable_parts_41961-1-designer-toolkit-patterns.csv":us,"../../data/sets/rebrickable_parts_41964-1-back-to-school-project-box.csv":fs,"../../data/sets/rebrickable_parts_6385440-1-dots-sampler.csv":Fs,"../../data/sets/rebrickable_parts_6513792-1-dots-creative-animals.csv":hs});function K1(e){return e.trim().split(`
`).slice(1).map(a=>{const[l,t,s,r]=a.split(",");return{id:Number(l),name:t,rgb:`#${s}`,is_trans:r==="True"}})}function e2(){const e=new Set;for(const n in Tt){const l=Tt[n].trim().split(`
`);for(const t of l.slice(1)){const s=Number(t.split(",")[1]);isNaN(s)||e.add(s)}}return e}const n2=dn("hsl");function a2(e){const n=n2(e);return{h:n.h??0,s:n.s*100,l:n.l*100}}function t2(e,n=15,a=6){const l={},t=new Set;for(const o of e){if(t.has(o.rgb))continue;t.add(o.rgb);const d=o.s<10?999:Math.floor(o.h/n);l[d]||(l[d]=[]),l[d].push(o)}Object.values(l).forEach(o=>o.sort((d,u)=>d.l-u.l));const s=Object.keys(l).map(Number).sort((o,d)=>o-d).flatMap(o=>l[o]),r=[];for(let o=0;o<s.length;o+=a)r.push(s.slice(o,o+a));return r}const l2=K1(bs),s2=e2(),Ue=l2.filter(e=>s2.has(e.id)&&!e.name.includes("Trans")),_e=t2(Ue.map(e=>({...e,...a2(e.rgb)}))),St=dn("oklch");[...Ue].sort((e,n)=>{const a=St(e.rgb),l=St(n.rgb),t=a.h??0,s=l.h??0;return Math.round(t)!==Math.round(s)?t-s:Math.round(a.c*100)!==Math.round(l.c*100)?a.c-l.c:a.l-l.l});var r2=he('<div class="zoom-pan-container svelte-b0dtxj" role="application" aria-label="Zoomable and pannable container" tabindex="0"><div class="zoom-pan-content svelte-b0dtxj"><!></div></div>');function o2(e,n){Te(n,!1);const a=Re();let l=D(n,"zoom",12,1),t=D(n,"panX",12,0),s=D(n,"panY",12,0),r=D(n,"selectMode",8,!1),o=ee(!1),d=0,u=0,f=ee(!1),b=ee(),h=ee(),c=!1;Ia(()=>{if(i(b)&&i(h)&&!c){const m=i(b).clientWidth,P=i(b).clientHeight;let N=0,S=0;i(h).firstElementChild instanceof HTMLElement?(N=i(h).firstElementChild.offsetWidth,S=i(h).firstElementChild.offsetHeight):(N=i(h).offsetWidth,S=i(h).offsetHeight),t((m-N*l())/2),s((P-S*l())/2),c=!0,a("panChanged",{panX:t(),panY:s()})}});function F(m){m.preventDefault();const P=i(b).getBoundingClientRect(),N=m.clientX-P.left,S=m.clientY-P.top,O=m.deltaY>0?.9:1.1,L=Math.max(.2,Math.min(5,l()*O));if(L!==l()){const j=L/l();t(N-(N-t())*j),s(S-(S-s())*j),l(L),a("zoomChanged",{zoom:l(),panX:t(),panY:s()})}}function p(m){r()||m.button===0&&(k(o,!0),k(f,!1),d=m.clientX,u=m.clientY,window.addEventListener("mousemove",_),window.addEventListener("mouseup",x),m.preventDefault())}function _(m){if(i(o)){const P=m.clientX-d,N=m.clientY-u;(Math.abs(P)>1||Math.abs(N)>1)&&k(f,!0),t(t()+P),s(s()+N),d=m.clientX,u=m.clientY,a("panChanged",{panX:t(),panY:s()})}}function x(){i(o)&&(k(o,!1),window.removeEventListener("mousemove",_),window.removeEventListener("mouseup",x),a("panEnd",{didPan:i(f)}),setTimeout(()=>{k(f,!1)},50))}function C(m){m.key===" "&&m.preventDefault()}function $(m){m.key===" "&&m.preventDefault()}Ae();var T=r2(),B=Y(T),v=Y(B);De(v,n,"default",{get didPan(){return i(f)}}),q(B),Ja(B,m=>k(h,m),()=>i(h)),q(T),Ja(T,m=>k(b,m),()=>i(b)),we(()=>Qe(B,`transform: translate(${t()??""}px, ${s()??""}px) scale(${l()??""}); cursor: ${r()?"crosshair":i(o)?"grabbing":"grab"};`)),le("wheel",T,F),le("mousedown",T,p),le("keydown",T,C),le("keyup",T,$),Q(e,T),Se()}var i2=he('<div class="square svelte-gxsx5p"></div>');function xl(e,n){let a=D(n,"color",8,"#000");var l=i2();we(()=>Qe(l,`--color: ${a()??""}`)),Q(e,l)}var d2=he('<div class="circle svelte-r5z0cw"></div>');function Cl(e,n){let a=D(n,"color",8,"#000");var l=d2();we(()=>Qe(l,`--color: ${a()??""}`)),Q(e,l)}var c2=he('<div class="quarter-container svelte-19hi45o"><svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none" class="svelte-19hi45o"><path d="M 0,0 L 100,0 A 100,100 0 0,1 0,100 Z" stroke="none"></path></svg></div>');function wl(e,n){let a=D(n,"color",8,"#000"),l=D(n,"rotation",8,0);var t=c2(),s=Y(t),r=Y(s);q(s),q(t),we(()=>{Fe(r,"fill",a()),Fe(r,"transform",`rotate(${l()*90}, 50, 50)`)}),Q(e,t)}var u2=he('<div class="tile svelte-ia1epz"><div class="square-half svelte-ia1epz"></div> <div class="circle-half svelte-ia1epz"></div></div>');function Tl(e,n){let a=D(n,"color",8,"#000"),l=D(n,"rotation",8,0);var t=u2();we(()=>Qe(t,`--color: ${a()??""}; transform: rotate(${l()*90}deg);`)),Q(e,t)}var f2=he('<div role="button" tabindex="0"><!></div>'),F2=he('<div class="selection-overlay svelte-1hhz0mg"></div>'),h2=he('<div class="grid svelte-1hhz0mg"><!> <!></div>');function b2(e,n){Te(n,!1);const a=Re();let l=D(n,"grid",12),t=D(n,"width",8),s=D(n,"height",8),r=D(n,"selectedShape",8,"square"),o=D(n,"selectedColor",8),d=D(n,"paintMode",8,!1),u=D(n,"colorPickerMode",8,!1),f=D(n,"selectMode",8,!1),b=D(n,"quarterRotation",8,0),h=D(n,"halfCircleRotation",8,0),c=D(n,"selection",28,()=>({startX:0,startY:0,endX:0,endY:0,active:!1})),F=D(n,"didPan",8,!1),p=ee(!1),_=ee(!0);function x(z){const A=l()[z];if(!A)return C(z);const{shape:G,color:H}=A;if(G===r()&&H===o())return;const M=[z],R=new Set;for(;M.length;){const E=M.pop();if(E===void 0||R.has(E))continue;R.add(E);const Z=l()[E];if(!Z||Z.shape!==G||Z.color!==H)continue;l(l()[E]={shape:r(),color:o(),rotation:r()==="quarter"?b():r()==="halfCircle"?h():0},!0);const V=E%t(),ie=Math.floor(E/t());V>0&&M.push(E-1),V<t()-1&&M.push(E+1),ie>0&&M.push(E-t()),ie<s()-1&&M.push(E+t())}l([...l()]),a("gridChanged",{grid:l()})}function C(z){const A=l()[z];A&&A.shape===r()&&A.color===o()?l(l()[z]=null,!0):r()==="quarter"?l(l()[z]={shape:r(),color:o(),rotation:b()},!0):r()==="halfCircle"?l(l()[z]={shape:r(),color:o(),rotation:h()},!0):l(l()[z]={shape:r(),color:o(),rotation:0},!0),l([...l()]),a("gridChanged",{grid:l()})}function $(z){const A=l()[z];A&&A.color&&a("colorPicked",{color:A.color})}function T(z,A){A.stopPropagation(),!F()&&(f()?B(z):u()?$(z):d()?x(z):C(z))}function B(z,A){const G=z%t(),H=Math.floor(z/t());k(p,!0),c({startX:G,startY:H,endX:G,endY:H,active:!0}),a("selectionChanged",{selection:c()})}function v(z,A){f()&&B(z)}function m(z,A){if(f()&&i(p)){const G=z%t(),H=Math.floor(z/t());c({...c(),endX:G,endY:H}),a("selectionChanged",{selection:c()})}}function P(z,A){f()&&i(p)&&(k(p,!1),a("selectionChanged",{selection:c()}))}function N(){i(p)&&k(p,!1)}function S(z){z.key==="g"&&k(_,!i(_))}Ia(()=>{typeof window<"u"&&(window.addEventListener("mouseup",N),window.addEventListener("keydown",S))}),zt(()=>{typeof window<"u"&&(window.removeEventListener("mouseup",N),window.removeEventListener("keydown",S))});function O(z){if(!c().active)return!1;const A=z%t(),G=Math.floor(z/t()),H=Math.min(c().startX,c().endX),M=Math.max(c().startX,c().endX),R=Math.min(c().startY,c().endY),E=Math.max(c().startY,c().endY);return A>=H&&A<=M&&G>=R&&G<=E}function L(z,A){z.key==="Enter"&&(u()?$(A):d()?x(A):C(A))}Ae();var j=h2(),ne=Y(j);Pn(ne,1,l,An,(z,A,G)=>{var H=f2(),M=Y(H);{var R=E=>{var Z=xe(),V=ye(Z);{var ie=te=>{xl(te,{get color(){return i(A),U(()=>i(A).color)}})},K=te=>{var ge=xe(),ke=ye(ge);{var pe=Ce=>{Cl(Ce,{get color(){return i(A),U(()=>i(A).color)}})},Ze=Ce=>{var Pe=xe(),qe=ye(Pe);{var Fn=He=>{wl(He,{get color(){return i(A),U(()=>i(A).color)},get rotation(){return i(A),U(()=>i(A).rotation)}})},Cn=He=>{var wn=xe(),Jn=ye(wn);{var g=W=>{Tl(W,{get color(){return i(A),U(()=>i(A).color)},get rotation(){return i(A),U(()=>i(A).rotation)}})};Ye(Jn,W=>{i(A),U(()=>i(A).shape==="halfCircle")&&W(g)},!0)}Q(He,wn)};Ye(qe,He=>{i(A),U(()=>i(A).shape==="quarter")?He(Fn):He(Cn,!1)},!0)}Q(Ce,Pe)};Ye(ke,Ce=>{i(A),U(()=>i(A).shape==="circle")?Ce(pe):Ce(Ze,!1)},!0)}Q(te,ge)};Ye(V,te=>{i(A),U(()=>i(A).shape==="square")?te(ie):te(K,!1)})}Q(E,Z)};Ye(M,E=>{i(A)&&E(R)})}q(H),we(E=>Ee(H,1,`cell ${E??""} ${f()?"select-mode":""} ${i(_)?"":"no-border"}`,"svelte-1hhz0mg"),[()=>U(()=>O(G)?"selected":"")]),le("click",H,E=>T(G,E)),le("mousedown",H,E=>v(G)),le("mouseenter",H,E=>m(G)),le("mouseup",H,E=>P()),le("keydown",H,E=>L(E,G)),Q(z,H)});var ae=re(ne,2);{var se=z=>{const A=Me(()=>(X(c()),U(()=>Math.min(c().startX,c().endX)))),G=Me(()=>(X(c()),U(()=>Math.max(c().startX,c().endX)))),H=Me(()=>(X(c()),U(()=>Math.min(c().startY,c().endY)))),M=Me(()=>(X(c()),U(()=>Math.max(c().startY,c().endY)))),R=Me(()=>i(A)/t()*100),E=Me(()=>i(H)/s()*100),Z=Me(()=>(i(G)-i(A)+1)/t()*100),V=Me(()=>(i(M)-i(H)+1)/s()*100);var ie=F2();we(()=>Qe(ie,`left: ${i(R)??""}%; top: ${i(E)??""}%; width: ${i(Z)??""}%; height: ${i(V)??""}%;`)),Q(z,ie)};Ye(ae,z=>{X(f()),X(c()),i(p),U(()=>f()&&c().active&&(i(p)||c().startX!==c().endX||c().startY!==c().endY))&&z(se)})}q(j),we(()=>Qe(j,`--width: ${t()??""}; --height: ${s()??""};`)),Q(e,j),Se()}var g2=he('<div class="container svelte-1w4104m"><!></div>');function At(e,n){Te(n,!1);const a=Re();let l=D(n,"grid",8,null),t=D(n,"width",8,32),s=D(n,"height",8,32),r=D(n,"selectedShape",8,"square"),o=D(n,"selectedColor",24,()=>Ue.length>0?Ue[0].rgb:"#000000"),d=D(n,"paintMode",8,!1),u=D(n,"colorPickerMode",8,!1),f=D(n,"selectMode",8,!1),b=D(n,"quarterRotation",8,0),h=D(n,"halfCircleRotation",8,0),c=D(n,"zoom",12,1),F=D(n,"selection",28,()=>({startX:0,startY:0,endX:0,endY:0,active:!1})),p=ee(),_=ee(0),x=ee(0);function C(S){c(S.detail.zoom)}function $(S){k(_,S.detail.panX),k(x,S.detail.panY)}function T(S){S.detail.didPan}function B(S){k(p,S.detail.grid),a("gridChanged",S.detail)}function v(S){a("colorPicked",S.detail)}function m(S){F(S.detail.selection),a("selectionChanged",S.detail)}Ta(()=>(X(l()),X(t()),X(s())),()=>{k(p,l()||Array(t()*s()).fill(null))}),Ot(),Ae();var P=g2(),N=Y(P);o2(N,{get zoom(){return c()},get panX(){return i(_)},get panY(){return i(x)},get selectMode(){return f()},$$events:{zoomChanged:C,panChanged:$,panEnd:T},children:F0,$$slots:{default:(S,O)=>{const L=Me(()=>O.didPan);b2(S,{get grid(){return i(p)},get width(){return t()},get height(){return s()},get selectedShape(){return r()},get selectedColor(){return o()},get paintMode(){return d()},get colorPickerMode(){return u()},get selectMode(){return f()},get quarterRotation(){return b()},get halfCircleRotation(){return h()},get selection(){return F()},get didPan(){return i(L)},$$events:{gridChanged:B,colorPicked:v,selectionChanged:m}})}}}),q(P),Q(e,P),Se()}var p2=he('<button type="button"></button>'),v2=he('<div class="palette-row"></div>'),m2=he('<div class="color-picker"><!> <div class="colors"><div class="palette2d"></div></div></div>');function _2(e,n){Te(n,!1);let a=D(n,"selectedColor",12,null);const l=Re();let t=ee(""),s=Ue,r=ee(!1),o=ee(null),d=ee(s);function u(F){a(F),l("colorSelected",{color:F})}Ta(()=>(i(r),i(o)),()=>{i(r)&&Nt().then(()=>{i(o)?.focus()})}),Ta(()=>i(t),()=>{k(d,i(t).trim()?s.filter(F=>F.name.toLowerCase().includes(i(t).toLowerCase())||F.rgb.replace("#","").includes(i(t).replace("#",""))):s)}),Ot(),Ae();var f=m2(),b=Y(f);Ye(b,F=>{});var h=re(b,2),c=Y(h);Pn(c,5,()=>_e,An,(F,p)=>{var _=v2();Pn(_,5,()=>i(p),An,(x,C)=>{var $=p2();we(()=>{Qe($,`width: 1.5rem; height: 1.5rem; background: ${i(C),U(()=>i(C).rgb)??""}; border: 2px solid ${X(a()),i(C),U(()=>a()===i(C).rgb?"#333":"#ccc")??""}; border-radius: 0.25rem; cursor: pointer; margin: 0 0.1rem 0.1rem 0;`),Fe($,"aria-label",(i(C),U(()=>i(C).name))),Fe($,"title",(i(C),U(()=>i(C).name)))}),le("click",$,()=>u(i(C).rgb)),Q(x,$)}),q(_),Q(F,_)}),q(c),q(h),q(f),Q(e,f),Se()}const ce={select:{key:"v",action:"select"},square:{key:"s",action:"square"},circle:{key:"c",action:"circle"},quarter:{key:"q",action:"quarter"},halfCircle:{key:"h",action:"halfCircle"},fill:{key:"f",action:"fill"},colorPicker:{key:"i",action:"colorPicker"},zoomIn:{key:"+",action:"zoomIn"},zoomInAlt:{key:"=",action:"zoomIn"},zoomOut:{key:"-",action:"zoomOut"},undo:{key:"z",ctrl:!0,action:"undo"},redo:{key:"z",ctrl:!0,shift:!0,action:"redo"},cut:{key:"x",ctrl:!0,action:"cut"},copy:{key:"c",ctrl:!0,action:"copy"},paste:{key:"v",ctrl:!0,action:"paste"},selectAll:{key:"a",ctrl:!0,action:"selectAll"},deselect:{key:"d",ctrl:!0,action:"deselect"},rotateLeft:{key:"r",action:"rotateLeft"},rotateRight:{key:"r",shift:!0,action:"rotateRight"},moveUp:{key:"ArrowUp",action:"moveUp"},moveDown:{key:"ArrowDown",action:"moveDown"},moveLeft:{key:"ArrowLeft",action:"moveLeft"},moveRight:{key:"ArrowRight",action:"moveRight"},delete:{key:"Delete",action:"delete"},backspace:{key:"Backspace",action:"delete"},colorLeft:{key:"a",shift:!0,action:"colorLeft"},colorRight:{key:"d",shift:!0,action:"colorRight"},colorUp:{key:"w",shift:!0,action:"colorUp"},colorDown:{key:"s",shift:!0,action:"colorDown"}};function M2(e,n){const l=(e.key===" "?"Space":e.key).toLowerCase(),t=n.key.toLowerCase();return l!==t||!!e.ctrlKey!=!!n.ctrl||!!e.altKey!=!!n.alt?!1:n.key==="+"||n.key==="-"||n.key==="="?!0:!!e.shiftKey==!!n.shift}function ue(e){const n=[];e.ctrl&&n.push("Ctrl"),e.shift&&n.push("Shift"),e.alt&&n.push("Alt");let a=e.key;return a===" "&&(a="Space"),a==="="&&(a="+"),n.push(a.toUpperCase()),n.join("+")}var y2=he('<div class="shape-group"><div class="group-label">Shapes</div> <div class="shape-grid"><button aria-label="Square"><div class="shape-icon"><!></div></button> <button aria-label="Circle"><div class="shape-icon"><!></div></button> <button aria-label="Quarter"><div class="shape-icon"><!></div></button> <button aria-label="Half Circle"><div class="shape-icon"><!></div></button></div></div>');function k2(e,n){Te(n,!1);const a=Re();let l=D(n,"selectedShape",12,"square"),t=D(n,"selectedColor",8,"#000000"),s=D(n,"quarterRotation",12,0),r=D(n,"halfCircleRotation",12,0);function o(S){if(S==="quarter")if(l()==="quarter"){s((s()+1)%4),a("quarterRotationChanged",{rotation:s()});return}else s(0);if(S==="halfCircle")if(l()==="halfCircle"){r((r()+1)%4),a("halfCircleRotationChanged",{rotation:r()});return}else r(0);l(S),a("shapeSelected",{shape:S}),S==="quarter"&&a("quarterRotationChanged",{rotation:s()}),S==="halfCircle"&&a("halfCircleRotationChanged",{rotation:r()})}Ae();var d=y2(),u=re(Y(d),2),f=Y(u);let b;var h=Y(f),c=Y(h);xl(c,{get color(){return t()}}),q(h),q(f);var F=re(f,2);let p;var _=Y(F),x=Y(_);Cl(x,{get color(){return t()}}),q(_),q(F);var C=re(F,2);let $;var T=Y(C),B=Y(T);wl(B,{get color(){return t()},get rotation(){return s()}}),q(T),q(C);var v=re(C,2);let m;var P=Y(v),N=Y(P);Tl(N,{get color(){return t()},get rotation(){return r()}}),q(P),q(v),q(u),q(d),we((S,O,L,j,ne,ae,se,z)=>{b=Ee(f,1,"shape-button",null,b,S),Fe(f,"title",`Square (${O??""})`),p=Ee(F,1,"shape-button",null,p,L),Fe(F,"title",`Circle (${j??""})`),$=Ee(C,1,"shape-button",null,$,ne),Fe(C,"title",`Quarter (${ae??""})`),m=Ee(v,1,"shape-button",null,m,se),Fe(v,"title",`Half Circle (${z??""})`)},[()=>({selected:l()==="square"}),()=>(X(ue),X(ce),U(()=>ue(ce.square))),()=>({selected:l()==="circle"}),()=>(X(ue),X(ce),U(()=>ue(ce.circle))),()=>({selected:l()==="quarter"}),()=>(X(ue),X(ce),U(()=>ue(ce.quarter))),()=>({selected:l()==="halfCircle"}),()=>(X(ue),X(ce),U(()=>ue(ce.halfCircle)))]),le("click",f,()=>o("square")),le("click",F,()=>o("circle")),le("click",C,()=>o("quarter")),le("click",v,()=>o("halfCircle")),Q(e,d),Se()}/**
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
 */const x2={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};var C2=h0("<svg><!><!></svg>");function Oe(e,n){const a=ze(n,["children","$$slots","$$events","$$legacy"]),l=ze(a,["name","color","size","strokeWidth","absoluteStrokeWidth","iconNode"]);Te(n,!1);let t=D(n,"name",8,void 0),s=D(n,"color",8,"currentColor"),r=D(n,"size",8,24),o=D(n,"strokeWidth",8,2),d=D(n,"absoluteStrokeWidth",8,!1),u=D(n,"iconNode",24,()=>[]);const f=(...F)=>F.filter((p,_,x)=>!!p&&x.indexOf(p)===_).join(" ");Ae();var b=C2();nt(b,(F,p)=>({...x2,...l,width:r(),height:r(),stroke:s(),"stroke-width":F,class:p}),[()=>(X(d()),X(o()),X(r()),U(()=>d()?Number(o())*24/Number(r()):o())),()=>(X(t()),X(a),U(()=>f("lucide-icon","lucide",t()?`lucide-${t()}`:"",a.class)))]);var h=Y(b);Pn(h,1,u,An,(F,p)=>{var _=b0(()=>g0(i(p),2));let x=()=>i(_)[0],C=()=>i(_)[1];var $=xe(),T=ye($);_0(T,x,!0,(B,v)=>{nt(B,()=>({...C()}))}),Q(F,$)});var c=re(h);De(c,n,"default",{}),q(b),Q(e,b),Se()}function w2(e,n){const a=ze(n,["children","$$slots","$$events","$$legacy"]);/**
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
 */const l=[["path",{d:"M12 15V3"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}],["path",{d:"m7 10 5 5 5-5"}]];Oe(e,Ie({name:"download"},()=>a,{get iconNode(){return l},children:(t,s)=>{var r=xe(),o=ye(r);De(o,n,"default",{}),Q(t,r)},$$slots:{default:!0}}))}function T2(e,n){const a=ze(n,["children","$$slots","$$events","$$legacy"]);/**
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
 */const l=[["path",{d:"M14 4.1 12 6"}],["path",{d:"m5.1 8-2.9-.8"}],["path",{d:"m6 12-1.9 2"}],["path",{d:"M7.2 2.2 8 5.1"}],["path",{d:"M9.037 9.69a.498.498 0 0 1 .653-.653l11 4.5a.5.5 0 0 1-.074.949l-4.349 1.041a1 1 0 0 0-.74.739l-1.04 4.35a.5.5 0 0 1-.95.074z"}]];Oe(e,Ie({name:"mouse-pointer-click"},()=>a,{get iconNode(){return l},children:(t,s)=>{var r=xe(),o=ye(r);De(o,n,"default",{}),Q(t,r)},$$slots:{default:!0}}))}function S2(e,n){const a=ze(n,["children","$$slots","$$events","$$legacy"]);/**
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
 */const l=[["path",{d:"m19 11-8-8-8.6 8.6a2 2 0 0 0 0 2.8l5.2 5.2c.8.8 2 .8 2.8 0L19 11Z"}],["path",{d:"m5 2 5 5"}],["path",{d:"M2 13h15"}],["path",{d:"M22 20a2 2 0 1 1-4 0c0-1.6 1.7-2.4 2-4 .3 1.6 2 2.4 2 4Z"}]];Oe(e,Ie({name:"paint-bucket"},()=>a,{get iconNode(){return l},children:(t,s)=>{var r=xe(),o=ye(r);De(o,n,"default",{}),Q(t,r)},$$slots:{default:!0}}))}function A2(e,n){const a=ze(n,["children","$$slots","$$events","$$legacy"]);/**
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
 */const l=[["path",{d:"m12 9-8.414 8.414A2 2 0 0 0 3 18.828v1.344a2 2 0 0 1-.586 1.414A2 2 0 0 1 3.828 21h1.344a2 2 0 0 0 1.414-.586L15 12"}],["path",{d:"m18 9 .4.4a1 1 0 1 1-3 3l-3.8-3.8a1 1 0 1 1 3-3l.4.4 3.4-3.4a1 1 0 1 1 3 3z"}],["path",{d:"m2 22 .414-.414"}]];Oe(e,Ie({name:"pipette"},()=>a,{get iconNode(){return l},children:(t,s)=>{var r=xe(),o=ye(r);De(o,n,"default",{}),Q(t,r)},$$slots:{default:!0}}))}function P2(e,n){const a=ze(n,["children","$$slots","$$events","$$legacy"]);/**
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
 */const l=[["path",{d:"M21 7v6h-6"}],["path",{d:"M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7"}]];Oe(e,Ie({name:"redo"},()=>a,{get iconNode(){return l},children:(t,s)=>{var r=xe(),o=ye(r);De(o,n,"default",{}),Q(t,r)},$$slots:{default:!0}}))}function z2(e,n){const a=ze(n,["children","$$slots","$$events","$$legacy"]);/**
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
 */const l=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7"}]];Oe(e,Ie({name:"save"},()=>a,{get iconNode(){return l},children:(t,s)=>{var r=xe(),o=ye(r);De(o,n,"default",{}),Q(t,r)},$$slots:{default:!0}}))}function D2(e,n){const a=ze(n,["children","$$slots","$$events","$$legacy"]);/**
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
 */const l=[["path",{d:"M3 7v6h6"}],["path",{d:"M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13"}]];Oe(e,Ie({name:"undo"},()=>a,{get iconNode(){return l},children:(t,s)=>{var r=xe(),o=ye(r);De(o,n,"default",{}),Q(t,r)},$$slots:{default:!0}}))}function B2(e,n){const a=ze(n,["children","$$slots","$$events","$$legacy"]);/**
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
 */const l=[["circle",{cx:"11",cy:"11",r:"8"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65"}],["line",{x1:"11",x2:"11",y1:"8",y2:"14"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11"}]];Oe(e,Ie({name:"zoom-in"},()=>a,{get iconNode(){return l},children:(t,s)=>{var r=xe(),o=ye(r);De(o,n,"default",{}),Q(t,r)},$$slots:{default:!0}}))}function $2(e,n){const a=ze(n,["children","$$slots","$$events","$$legacy"]);/**
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
 */const l=[["circle",{cx:"11",cy:"11",r:"8"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11"}]];Oe(e,Ie({name:"zoom-out"},()=>a,{get iconNode(){return l},children:(t,s)=>{var r=xe(),o=ye(r);De(o,n,"default",{}),Q(t,r)},$$slots:{default:!0}}))}var E2=he('<div class="tool-group"><div class="group-label">Tools</div> <div class="tool-grid"><button type="button" aria-label="Selection tool"><!></button> <button type="button" aria-label="Zoom in" class="tool-button"><!></button> <button type="button" aria-label="Zoom out" class="tool-button"><!></button> <button type="button" aria-label="Paint bucket tool"><!></button> <button type="button" aria-label="Color picker tool"><!></button> <button type="button" aria-label="Undo" class="tool-button"><!></button> <button type="button" aria-label="Redo" class="tool-button"><!></button> <button type="button" aria-label="Save" class="tool-button" title="Save Project"><!></button> <button type="button" aria-label="Load" class="tool-button" title="Load Project"><!></button></div></div>');function R2(e,n){Te(n,!1);const a=Re();let l=D(n,"paintMode",12,!1),t=D(n,"colorPickerMode",12,!1),s=D(n,"selectMode",12,!1),r=D(n,"canUndo",8,!1),o=D(n,"canRedo",8,!1);function d(){l(!l()),l()&&(t(!1),s(!1)),a("paintModeToggled",{paintMode:l()})}function u(){t(!t()),t()&&(l(!1),s(!1)),a("colorPickerModeToggled",{colorPickerMode:t()})}function f(){s(!s()),s()&&(l(!1),t(!1)),a("selectModeToggled",{selectMode:s()})}function b(){a("undo")}function h(){a("redo")}function c(){a("save")}function F(){a("load")}Ae();var p=E2(),_=re(Y(p),2),x=Y(_);let C;var $=Y(x);{let R=Me(()=>s()?"#333":"#555");T2($,{size:24,get color(){return i(R)}})}q(x);var T=re(x,2),B=Y(T);B2(B,{size:24,color:"#555"}),q(T);var v=re(T,2),m=Y(v);$2(m,{size:24,color:"#555"}),q(v);var P=re(v,2);let N;var S=Y(P);{let R=Me(()=>l()?"#333":"#555");S2(S,{size:24,get color(){return i(R)}})}q(P);var O=re(P,2);let L;var j=Y(O);{let R=Me(()=>t()?"#333":"#555");A2(j,{size:24,get color(){return i(R)}})}q(O);var ne=re(O,2),ae=Y(ne);{let R=Me(()=>r()?"#555":"#ccc");D2(ae,{size:24,get color(){return i(R)}})}q(ne);var se=re(ne,2),z=Y(se);{let R=Me(()=>o()?"#555":"#ccc");P2(z,{size:24,get color(){return i(R)}})}q(se);var A=re(se,2),G=Y(A);z2(G,{size:24,color:"#555"}),q(A);var H=re(A,2),M=Y(H);w2(M,{size:24,color:"#555"}),q(H),q(_),q(p),we((R,E,Z,V,ie,K,te,ge,ke,pe)=>{C=Ee(x,1,"tool-button",null,C,R),Fe(x,"title",`Selection Tool (${E??""})`),Fe(T,"title",`Zoom In (${Z??""})`),Fe(v,"title",`Zoom Out (${V??""})`),N=Ee(P,1,"tool-button",null,N,ie),Fe(P,"title",`Fill Tool (${K??""})`),L=Ee(O,1,"tool-button",null,L,te),Fe(O,"title",`Color Picker (${ge??""})`),Fe(ne,"title",`Undo (${ke??""})`),ne.disabled=!r(),Fe(se,"title",`Redo (${pe??""})`),se.disabled=!o()},[()=>({active:s()}),()=>(X(ue),X(ce),U(()=>ue(ce.select))),()=>(X(ue),X(ce),U(()=>ue(ce.zoomIn))),()=>(X(ue),X(ce),U(()=>ue(ce.zoomOut))),()=>({active:l()}),()=>(X(ue),X(ce),U(()=>ue(ce.fill))),()=>({active:t()}),()=>(X(ue),X(ce),U(()=>ue(ce.colorPicker))),()=>(X(ue),X(ce),U(()=>ue(ce.undo))),()=>(X(ue),X(ce),U(()=>ue(ce.redo)))]),le("click",x,f),le("click",T,()=>a("zoomIn")),le("click",v,()=>a("zoomOut")),le("click",P,d),le("click",O,u),le("click",ne,b),le("click",se,h),le("click",A,c),le("click",H,F),Q(e,p),Se()}var I2=he('<div class="canvas-size-group" style="display:flex; justify-content:center; flex-direction: column; align-items:center; width:100%;"><div class="group-label">Size</div> <div class="tool-grid" style="display:flex; justify-content: center"><label style="display:flex; flex-direction:column; align-items:center;"><input type="number" min="1" max="256"/></label></div></div>');function L2(e,n){Te(n,!1);const a=Re();let l=D(n,"size",12,32);function t(u){const f=u.target;l(Math.max(1,Math.min(128,parseInt(f.value)||1))),a("sizeChanged",{size:l()})}Ae();var s=I2(),r=re(Y(s),2),o=Y(r),d=Y(o);Gt(d),q(o),q(r),q(s),A0(d,l),le("input",d,t),Q(e,s),Se()}var N2=he('<div class="image-upload"><label class="upload-label"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#555" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align: middle;"><path d="M12 16V4"></path><polyline points="8 8 12 4 16 8"></polyline><rect x="4" y="16" width="16" height="4" rx="2"></rect></svg> <span>Upload image</span> <input type="file" accept="image/png, image/jpeg"/></label></div>');function O2(e,n){Te(n,!1);const a=Re();function l(o){const d=o.target,u=d.files&&d.files[0];if(u){const f=new FileReader;f.onload=()=>{a("imageUploaded",{src:f.result,fileName:u.name})},f.readAsDataURL(u)}}Ae();var t=N2(),s=Y(t),r=re(Y(s),4);q(s),q(t),le("change",r,l),Q(e,t),Se()}var q2=he('<button class="toolbar-toggle" aria-label="Show/hide toolbar"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#555" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align: middle;"><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg></button>');function H2(e,n){Te(n,!1);const a=Re();function l(){a("toggle")}Ae();var t=q2();le("click",t,l),Q(e,t),Se()}var Y2=he("<!> <div><!> <!> <!> <!> <!></div>",1);function X2(e,n){Te(n,!1);const a=Re();let l=D(n,"selectedShape",12,"square"),t=D(n,"selectedColor",12,"#000000"),s=D(n,"paintMode",12,!1),r=D(n,"colorPickerMode",12,!1),o=D(n,"selectMode",12,!1),d=D(n,"size",12,32),u=ee(!0),f=D(n,"quarterRotation",12,0),b=D(n,"halfCircleRotation",12,0),h=D(n,"canUndo",12,!1),c=D(n,"canRedo",12,!1);function F(M){l(M.detail.shape),a("shapeSelected",M.detail)}function p(M){f(M.detail.rotation),a("quarterRotationChanged",M.detail)}function _(M){b(M.detail.rotation),a("halfCircleRotationChanged",M.detail)}function x(M){t(M.detail.color),a("colorSelected",M.detail)}function C(M){s(M.detail.paintMode),a("paintModeToggled",M.detail)}function $(M){r(M.detail.colorPickerMode),a("colorPickerModeToggled",M.detail)}function T(M){o(M.detail.selectMode),a("selectModeToggled",M.detail)}function B(){a("undo")}function v(){a("redo")}function m(M){d(M.detail.size),a("sizeChanged",M.detail)}function P(M){a("imageUploaded",M.detail)}function N(){a("save")}function S(){a("load")}function O(){k(u,!i(u))}Ae();var L=Y2(),j=ye(L);H2(j,{$$events:{toggle:O}});var ne=re(j,2);let ae;var se=Y(ne);k2(se,{get selectedColor(){return t()},get selectedShape(){return l()},set selectedShape(M){l(M)},get quarterRotation(){return f()},set quarterRotation(M){f(M)},get halfCircleRotation(){return b()},set halfCircleRotation(M){b(M)},$$events:{shapeSelected:F,quarterRotationChanged:p,halfCircleRotationChanged:_},$$legacy:!0});var z=re(se,2);R2(z,{get paintMode(){return s()},set paintMode(M){s(M)},get colorPickerMode(){return r()},set colorPickerMode(M){r(M)},get selectMode(){return o()},set selectMode(M){o(M)},get canUndo(){return h()},set canUndo(M){h(M)},get canRedo(){return c()},set canRedo(M){c(M)},$$events:{paintModeToggled:C,colorPickerModeToggled:$,selectModeToggled:T,undo:B,redo:v,zoomIn:()=>a("zoomIn"),zoomOut:()=>a("zoomOut"),save:N,load:S},$$legacy:!0});var A=re(z,2);_2(A,{get selectedColor(){return t()},set selectedColor(M){t(M)},$$events:{colorSelected:x},$$legacy:!0});var G=re(A,2);L2(G,{get size(){return d()},set size(M){d(M)},$$events:{sizeChanged:m},$$legacy:!0});var H=re(G,2);O2(H,{$$events:{imageUploaded:P}}),q(ne),we(M=>ae=Ee(ne,1,"toolbar left",null,ae,M),[()=>({visible:i(u)})]),Q(e,L),Se()}const G2=dn("oklab");function Pt(e,n,a,l){const t=G2({mode:"rgb",r:e/255,g:n/255,b:a/255});let s=1/0,r=l[0];for(const o of l){const d=vn("oklab")(t,o.lab);d<s&&(s=d,r=o)}return r}const U2=dn("oklab");function Q2(e,n,a=32,l=32){return new Promise((t,s)=>{const r=new window.Image;r.crossOrigin="Anonymous",r.src=e;const o=n.map(d=>({hex:d,lab:U2(d)}));r.onload=()=>{const d=r.width,u=r.height,f=document.createElement("canvas"),b=f.getContext("2d",{willReadFrequently:!0});if(!b){s(new Error("Could not get 2D context"));return}f.width=d,f.height=u,b.drawImage(r,0,0,d,u);const h=b.getImageData(0,0,d,u).data,c=[],F=d/a,p=u/l;for(let _=0;_<l;_++)for(let x=0;x<a;x++){const C=Math.floor(x*F),$=Math.floor(_*p),T=Math.floor((x+1)*F),B=Math.floor((_+1)*p),v=[{r:0,g:0,b:0,count:0,transparent:0},{r:0,g:0,b:0,count:0,transparent:0},{r:0,g:0,b:0,count:0,transparent:0},{r:0,g:0,b:0,count:0,transparent:0}];let m=0;const P=(T-C)*(B-$);for(let M=$;M<B;M++)for(let R=C;R<T;R++){const E=(M*d+R)*4,Z=h[E],V=h[E+1],ie=h[E+2],K=h[E+3];K<128&&m++;const te=R<C+F/2?0:1,ke=(M<$+p/2?0:1)*2+te,pe=v[ke];K>128?(pe.r+=Z,pe.g+=V,pe.b+=ie,pe.count++):pe.transparent++}if(m/P>.95){c.push({shape:"empty",color:"#FFFFFF",rotation:0});continue}const N=v.reduce((M,R)=>M+R.r,0),S=v.reduce((M,R)=>M+R.g,0),O=v.reduce((M,R)=>M+R.b,0),L=v.reduce((M,R)=>M+R.count,0),j={r:N/L,g:S/L,b:O/L},ne=v.map(M=>{const R=M.count||1,E=M.count>0?M.r/R:j.r,Z=M.count>0?M.g/R:j.g,V=M.count>0?M.b/R:j.b;return{r:E,g:Z,b:V}}),ae=Pt(j.r,j.g,j.b,o),se=ne.map(M=>Pt(M.r,M.g,M.b,o));let z="square",A=0,G=ae.hex,H=[...se];for(let M=0;M<3;M++){const R=[...new Set(H.map(E=>E.hex))];if(R.length===1){z="square",G=R[0];break}if(R.length===2){const E=R[0],Z=H.filter(V=>V.hex===E).length;if(Z===1||Z===3){z="quarter";const V=Z===1?E:R[1],ie=Z===3?E:R[1],K=H.findIndex(ge=>ge.hex===V);G=ie,A=[2,3,1,0][K]}else{const[V,ie,K,te]=H,ge=V.hex===ie.hex&&K.hex===te.hex,ke=V.hex===K.hex&&ie.hex===te.hex;if(ge||ke)z="halfCircle",G=ae.hex,ge?A=V.hex===ae.hex?2:0:A=V.hex===ae.hex?1:3;else{const pe=R[1],Ze=o.find(qe=>qe.hex===E),Ce=o.find(qe=>qe.hex===pe);vn("oklab")(Ze.lab,Ce.lab)>.15?z="circle":z="square",G=ae.hex}}break}if(R.length>2){let E=1/0,Z=null;const V=R.map(K=>o.find(te=>te.hex===K));for(let K=0;K<V.length;K++)for(let te=K+1;te<V.length;te++){const ge=V[K],ke=V[te],pe=vn("oklab")(ge.lab,ke.lab);pe<E&&(E=pe,Z=[ge,ke])}if(E<.05&&Z){const[K,te]=Z,ge=ae.lab,ke=vn("oklab")(ge,K.lab),pe=vn("oklab")(ge,te.lab),[Ze,Ce]=ke<pe?[K,te]:[te,K];H=H.map(Pe=>Pe.hex===Ce.hex?Ze:Pe)}else{z="circle",G=ae.hex;break}}}c.push({shape:z,color:G,rotation:A})}t(c)},r.onerror=d=>{console.error("Failed to load image:",r.src,d),s(new Error("Failed to load image. Check if the URL is correct and accessible."))}})}class j2{history=[];currentIndex=-1;maxHistory=50;constructor(n){n&&this.addState(n)}addState(n){this.currentIndex<this.history.length-1&&(this.history=this.history.slice(0,this.currentIndex+1)),this.history.push({grid:JSON.parse(JSON.stringify(n)),timestamp:Date.now()}),this.history.length>this.maxHistory?this.history.shift():this.currentIndex++}undo(){return this.canUndo()?(this.currentIndex--,JSON.parse(JSON.stringify(this.history[this.currentIndex].grid))):null}redo(){return this.canRedo()?(this.currentIndex++,JSON.parse(JSON.stringify(this.history[this.currentIndex].grid))):null}canUndo(){return this.currentIndex>0}canRedo(){return this.currentIndex<this.history.length-1}clear(){this.history=[],this.currentIndex=-1}getCurrentState(){return this.currentIndex>=0&&this.currentIndex<this.history.length?JSON.parse(JSON.stringify(this.history[this.currentIndex].grid)):null}}class V2{clipboardData=null;copy(n,a,l){const{startX:t,startY:s,endX:r,endY:o}=this.normalizeSelection(a),d=r-t+1,u=o-s+1,f=[];for(let b=s;b<=o;b++)for(let h=t;h<=r;h++){const c=b*l+h;f.push(n[c]?JSON.parse(JSON.stringify(n[c])):null)}this.clipboardData={cells:f,width:d,height:u}}cut(n,a,l){return this.copy(n,a,l),this.deleteSelection(n,a,l)}paste(n,a,l,t,s){if(!this.clipboardData)return n;const r=[...n],{cells:o,width:d,height:u}=this.clipboardData;for(let f=0;f<u;f++)for(let b=0;b<d;b++){const h=a+b,c=l+f;if(h>=0&&h<t&&c>=0&&c<s){const F=f*d+b,p=c*t+h;r[p]=o[F]?JSON.parse(JSON.stringify(o[F])):null}}return r}deleteSelection(n,a,l){const{startX:t,startY:s,endX:r,endY:o}=this.normalizeSelection(a),d=[...n];for(let u=s;u<=o;u++)for(let f=t;f<=r;f++){const b=u*l+f;d[b]=null}return d}rotateSelection(n,a,l,t=!0){const{startX:s,startY:r,endX:o,endY:d}=this.normalizeSelection(a),u=o-s+1,f=d-r+1,b=[];for(let c=r;c<=d;c++)for(let F=s;F<=o;F++){const p=c*l+F;b.push(n[p])}const h=new Array(u*f);for(let c=0;c<f;c++)for(let F=0;F<u;F++){const p=c*u+F;let _;t?_=F*f+(f-1-c):_=(u-1-F)*f+c;const x=b[p];h[_]=x?{...x,rotation:(x.rotation+(t?1:-1)+4)%4}:null}if(u===f){const c=[...n];for(let F=0;F<f;F++)for(let p=0;p<u;p++){const _=(r+F)*l+(s+p),x=F*u+p;c[_]=h[x]}return c}return n}moveSelection(n,a,l,t,s,r){const{startX:o,startY:d,endX:u,endY:f}=this.normalizeSelection(a),b=u-o+1,h=f-d+1,c=Math.max(0,Math.min(s-b,o+l)),F=Math.max(0,Math.min(r-h,d+t)),p=c+b-1,_=F+h-1;if(c===o&&F===d)return{grid:n,selection:a};const x=[];for(let T=d;T<=f;T++)for(let B=o;B<=u;B++){const v=T*s+B;x.push(n[v])}let C=this.deleteSelection(n,a,s);for(let T=0;T<h;T++)for(let B=0;B<b;B++){const v=T*b+B,m=(F+T)*s+(c+B);C[m]=x[v]}const $={...a,startX:c,startY:F,endX:p,endY:_};return{grid:C,selection:$}}hasClipboardData(){return this.clipboardData!==null}getClipboardSize(){return this.clipboardData?{width:this.clipboardData.width,height:this.clipboardData.height}:null}normalizeSelection(n){return{startX:Math.min(n.startX,n.endX),startY:Math.min(n.startY,n.endY),endX:Math.max(n.startX,n.endX),endY:Math.max(n.startY,n.endY)}}}var Z2=he('<main class="svelte-1uha8ag"><!> <!></main>');function lr(e,n){Te(n,!1);let a=ee("square"),l=ee(Ue.length>0?Ue[0].rgb:"#000000"),t=ee(null),s=ee(!1),r=ee(!1),o=ee(1),d=ee(32),u=ee(!1),f=ee(0),b=ee(0),h="dotsly.json",c=ee({startX:0,startY:0,endX:0,endY:0,active:!1}),F,p,_=ee(!1),x=ee(!1);function C(){k(o,Math.min(i(o)+.1,3))}function $(){k(o,Math.max(i(o)-.1,.2))}function T(g){for(let W=0;W<_e.length;W++)for(let de=0;de<_e[W].length;de++)if(_e[W][de].rgb===g)return{row:W,col:de};return null}function B(){const g=T(i(l));if(g&&g.col>0)k(l,_e[g.row][g.col-1].rgb);else if(g&&g.row>0){const W=g.row-1,de=_e[W].length-1;k(l,_e[W][de].rgb)}}function v(){const g=T(i(l));g&&g.col<_e[g.row].length-1?k(l,_e[g.row][g.col+1].rgb):g&&g.row<_e.length-1&&k(l,_e[g.row+1][0].rgb)}function m(){const g=T(i(l));if(g&&g.row>0){const W=Math.min(g.col,_e[g.row-1].length-1);k(l,_e[g.row-1][W].rgb)}}function P(){const g=T(i(l));if(g&&g.row<_e.length-1){const W=Math.min(g.col,_e[g.row+1].length-1);k(l,_e[g.row+1][W].rgb)}}function N(){if(!i(t))return;const g={grid:i(t),size:i(d),version:"1.0"},W=JSON.stringify(g,null,2),de=new Blob([W],{type:"application/json"}),hn=URL.createObjectURL(de),Je=document.createElement("a");Je.href=hn,Je.download=h,document.body.appendChild(Je),Je.click(),document.body.removeChild(Je),URL.revokeObjectURL(hn)}function S(){const g=document.createElement("input");g.type="file",g.accept=".json",g.onchange=W=>{const de=W.target.files?.[0];if(!de)return;const hn=new FileReader;hn.onload=Je=>{try{const an=JSON.parse(Je.target?.result);an.grid&&an.size?(k(t,an.grid),k(d,an.size),h=de.name,i(t)&&L(i(t))):alert("Invalid file format")}catch(an){alert("Error loading file: "+an)}},hn.readAsText(de)},g.click()}Ia(()=>{F=new j2,p=new V2,i(t)||(k(t,Array(i(d)*i(d)).fill(null)),F.addState(i(t))),O(),window.addEventListener("keydown",j)}),zt(()=>{typeof window<"u"&&window.removeEventListener("keydown",j)});function O(){k(_,F?.canUndo()??!1),k(x,F?.canRedo()??!1)}function L(g){F&&(F.addState(g),O())}function j(g){if(!(g.target instanceof HTMLInputElement||g.target instanceof HTMLTextAreaElement)){for(const[W,de]of Object.entries(ce))if(M2(g,de)){g.preventDefault(),ne(de.action);break}}}function ne(g){switch(g){case"select":k(r,!i(r)),i(r)&&(k(s,!1),k(u,!1));break;case"square":k(a,"square");break;case"circle":k(a,"circle");break;case"quarter":i(a)==="quarter"?k(f,(i(f)+1)%4):(k(a,"quarter"),k(f,0));break;case"halfCircle":i(a)==="halfCircle"?k(b,(i(b)+1)%4):(k(a,"halfCircle"),k(b,0));break;case"fill":k(s,!i(s)),i(s)&&(k(r,!1),k(u,!1));break;case"colorPicker":k(u,!i(u)),i(u)&&(k(r,!1),k(s,!1));break;case"zoomIn":C();break;case"zoomOut":$();break;case"undo":E();break;case"redo":Z();break;case"cut":K();break;case"copy":te();break;case"paste":ge();break;case"selectAll":pe();break;case"deselect":Ze();break;case"delete":ke();break;case"rotateLeft":i(c).active&&Ce(!1);break;case"rotateRight":i(c).active&&Ce(!0);break;case"moveUp":i(c).active&&Pe(0,-1);break;case"moveDown":i(c).active&&Pe(0,1);break;case"moveLeft":i(c).active&&Pe(-1,0);break;case"moveRight":i(c).active&&Pe(1,0);break;case"colorLeft":B();break;case"colorRight":v();break;case"colorUp":m();break;case"colorDown":P();break}}function ae(g){k(a,g.detail.shape)}function se(g){k(f,g.detail.rotation)}function z(g){k(b,g.detail.rotation)}function A(g){k(l,g.detail.color)}async function G(g){const W=Ue.map(de=>de.rgb);k(t,await Q2(g.detail.src,W,i(d),i(d))),L(i(t)),g.detail.fileName?h=`${g.detail.fileName.replace(/\.[^/.]+$/,"")}.json`:h="dotsly.json"}function H(g){k(d,g.detail.size),k(t,null)}function M(g){k(u,g.detail.colorPickerMode)}function R(g){k(r,g.detail.selectMode),i(r)&&(k(s,!1),k(u,!1))}function E(){if(F){const g=F.undo();g&&(k(t,g),O())}}function Z(){if(F){const g=F.redo();g&&(k(t,g),O())}}function V(g){k(c,g.detail.selection)}function ie(g){k(t,g.detail.grid),i(t)&&L(i(t))}function K(){if(i(c).active&&i(t)&&p){const g=p.cut(i(t),i(c),i(d));k(t,g),L(i(t)),k(c,{...i(c),active:!1})}}function te(){i(c).active&&i(t)&&p&&p.copy(i(t),i(c),i(d))}function ge(){if(i(t)&&p&&p.hasClipboardData()){const g=i(c).active?i(c).startX:0,W=i(c).active?i(c).startY:0,de=p.paste(i(t),g,W,i(d),i(d));k(t,de),L(i(t))}}function ke(){if(i(c).active&&i(t)&&p){const g=p.deleteSelection(i(t),i(c),i(d));k(t,g),L(i(t)),k(c,{...i(c),active:!1})}}function pe(){k(c,{startX:0,startY:0,endX:i(d)-1,endY:i(d)-1,active:!0}),k(r,!0),k(s,!1),k(u,!1)}function Ze(){k(c,{...i(c),active:!1})}function Ce(g=!0){if(i(c).active&&i(t)&&p){const W=p.rotateSelection(i(t),i(c),i(d),g);k(t,W),L(i(t))}}function Pe(g,W){if(i(c).active&&i(t)&&p){const de=p.moveSelection(i(t),i(c),g,W,i(d),i(d));k(t,de.grid),k(c,de.selection),L(i(t))}}function qe(g){k(l,g.detail.color),k(u,!1)}Ae();var Fn=Z2();$l(g=>{p0.title="Dotsly"});var Cn=Y(Fn);X2(Cn,{get selectedColor(){return i(l)},set selectedColor(g){k(l,g)},get selectedShape(){return i(a)},set selectedShape(g){k(a,g)},get paintMode(){return i(s)},set paintMode(g){k(s,g)},get selectMode(){return i(r)},set selectMode(g){k(r,g)},get colorPickerMode(){return i(u)},set colorPickerMode(g){k(u,g)},get quarterRotation(){return i(f)},set quarterRotation(g){k(f,g)},get halfCircleRotation(){return i(b)},set halfCircleRotation(g){k(b,g)},get size(){return i(d)},set size(g){k(d,g)},get canUndo(){return i(_)},set canUndo(g){k(_,g)},get canRedo(){return i(x)},set canRedo(g){k(x,g)},$$events:{shapeSelected:ae,colorSelected:A,imageUploaded:G,paintModeToggled:g=>k(s,g.detail.paintMode),colorPickerModeToggled:M,selectModeToggled:R,undo:E,redo:Z,zoomIn:C,zoomOut:$,quarterRotationChanged:se,halfCircleRotationChanged:z,sizeChanged:H,save:N,load:S},$$legacy:!0});var He=re(Cn,2);{var wn=g=>{At(g,{get width(){return i(d)},get height(){return i(d)},get selectedShape(){return i(a)},get selectedColor(){return i(l)},get selectMode(){return i(r)},get grid(){return i(t)},get paintMode(){return i(s)},get colorPickerMode(){return i(u)},get zoom(){return i(o)},get quarterRotation(){return i(f)},get halfCircleRotation(){return i(b)},get selection(){return i(c)},$$events:{colorPicked:qe,selectionChanged:V,gridChanged:ie}})},Jn=g=>{At(g,{get width(){return i(d)},get height(){return i(d)},get selectedShape(){return i(a)},get selectedColor(){return i(l)},get selectMode(){return i(r)},get paintMode(){return i(s)},get colorPickerMode(){return i(u)},get zoom(){return i(o)},get quarterRotation(){return i(f)},get halfCircleRotation(){return i(b)},get selection(){return i(c)},$$events:{colorPicked:qe,selectionChanged:V,gridChanged:ie}})};Ye(He,g=>{i(t)?g(wn):g(Jn,!1)})}q(Fn),Q(e,Fn),Se()}export{lr as component};
