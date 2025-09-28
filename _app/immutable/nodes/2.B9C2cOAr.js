import"../chunks/DsnmJJEf.js";import"../chunks/DXAwGQm7.js";import{i as Ot,a as zt,c as Rt,d as Gt,n as It,b as Yt,e as ve,o as tt,f as H,g as vt,s as Xe,j as Nt}from"../chunks/Csy9xEDe.js";import{B as at,w as Ie,aT as gt,z as Le,h as U,aA as bt,a as Ke,g as r,W as j,x as qt,H as Xt,y as rt,A as Me,J as Ce,ag as $t,aI as Ht,C as Te,F as Ut,aU as Ye,aV as Ne,D as De,af as st,a8 as X,X as ot,aF as pt,ax as mt,G as nt,I as Ct,aW as Vt,aX as $e,M as Wt,an as Be,aY as Zt,at as Kt,aZ as Jt,aE as Qt,a_ as jt,T as kt,a$ as ea,E as ta,b0 as aa,aH as na,K as _t,b1 as la,b2 as ra,av as sa,b3 as oa,b4 as ia,b5 as ca,b6 as da,b7 as ua,b8 as fa,U as Fa,b9 as ha,ba as va,bb as ga,bc as ba,aa as Mt,d as I,L as pa,bd as ma,p as se,n as W,q as z,s as L,R as m,t as ae,m as N,o as oe,k as de,l as re,v as $,f as G,be as Je,bf as yt,bg as Ca,ao as ka,bh as _a,ab as Ma,bi as ya,bj as wa}from"../chunks/DckqTTcM.js";import{p as E,b as Qe,i as ke,l as be,s as ye}from"../chunks/q0klybCy.js";import{i as ie}from"../chunks/BBao4eQ6.js";import{s as pe}from"../chunks/M1l1I-Ar.js";function Oe(t,e){return e}function Aa(t,e,a){for(var n=t.items,l=[],s=e.length,o=0;o<s;o++)Jt(e[o].e,l,!0);var d=s>0&&l.length===0&&a!==null;if(d){var u=a.parentNode;Qt(u),u.append(a),n.clear(),he(t,e[0].prev,e[s-1].next)}jt(l,()=>{for(var c=0;c<s;c++){var h=e[c];d||(n.delete(h.k),he(t,h.prev,h.next)),Be(h.e,!d)}})}function ze(t,e,a,n,l,s=null){var o=t,d={flags:e,items:new Map,first:null},u=(e&gt)!==0;if(u){var c=t;o=U?Le(bt(c)):c.appendChild(at())}U&&Ke();var h=null,v=!1,i=new Map,b=j(()=>{var w=a();return mt(w)?w:w==null?[]:pt(w)}),f,p;function C(){Da(p,f,d,i,o,l,e,n,a),s!==null&&(f.length===0?h?nt(h):h=Te(()=>s(o)):h!==null&&Ct(h,()=>{h=null}))}Ie(()=>{p??=kt,f=r(b);var w=f.length;if(v&&w===0)return;v=w===0;let x=!1;if(U){var D=qt(o)===Xt;D!==(w===0)&&(o=rt(),Le(o),Me(!1),x=!0)}if(U){for(var k=null,y,g=0;g<w;g++){if(Ce.nodeType===$t&&Ce.data===Ht){o=Ce,x=!0,Me(!1);break}var F=f[g],A=n(F,g);y=je(Ce,d,k,null,F,A,g,l,e,a),d.items.set(A,y),k=y}w>0&&Le(rt())}if(U)w===0&&s&&(h=Te(()=>s(o)));else if(Ut()){var T=new Set,S=De;for(g=0;g<w;g+=1){F=f[g],A=n(F,g);var Y=d.items.get(A)??i.get(A);Y?(e&(Ye|Ne))!==0&&wt(Y,F,g,e):(y=je(null,d,null,null,F,A,g,l,e,a,!0),i.set(A,y)),T.add(A)}for(const[R,K]of d.items)T.has(R)||S.skipped_effects.add(K.e);S.add_callback(C)}else C();x&&Me(!0),r(b)}),U&&(o=Ce)}function Da(t,e,a,n,l,s,o,d,u){var c=(o&Zt)!==0,h=(o&(Ye|Ne))!==0,v=e.length,i=a.items,b=a.first,f=b,p,C=null,w,x=[],D=[],k,y,g,F;if(c)for(F=0;F<v;F+=1)k=e[F],y=d(k,F),g=i.get(y),g!==void 0&&(g.a?.measure(),(w??=new Set).add(g));for(F=0;F<v;F+=1){if(k=e[F],y=d(k,F),g=i.get(y),g===void 0){var A=n.get(y);if(A!==void 0){n.delete(y),i.set(y,A);var T=C?C.next:f;he(a,C,A),he(a,A,T),He(A,T,l),C=A}else{var S=f?f.e.nodes_start:l;C=je(S,a,C,C===null?a.first:C.next,k,y,F,s,o,u)}i.set(y,C),x=[],D=[],f=C.next;continue}if(h&&wt(g,k,F,o),(g.e.f&$e)!==0&&(nt(g.e),c&&(g.a?.unfix(),(w??=new Set).delete(g))),g!==f){if(p!==void 0&&p.has(g)){if(x.length<D.length){var Y=D[0],R;C=Y.prev;var K=x[0],P=x[x.length-1];for(R=0;R<x.length;R+=1)He(x[R],Y,l);for(R=0;R<D.length;R+=1)p.delete(D[R]);he(a,K.prev,P.next),he(a,C,K),he(a,P,Y),f=Y,C=P,F-=1,x=[],D=[]}else p.delete(g),He(g,f,l),he(a,g.prev,g.next),he(a,g,C===null?a.first:C.next),he(a,C,g),C=g;continue}for(x=[],D=[];f!==null&&f.k!==y;)(f.e.f&$e)===0&&(p??=new Set).add(f),D.push(f),f=f.next;if(f===null)continue;g=f}x.push(g),C=g,f=g.next}if(f!==null||p!==void 0){for(var B=p===void 0?[]:pt(p);f!==null;)(f.e.f&$e)===0&&B.push(f),f=f.next;var O=B.length;if(O>0){var M=(o&gt)!==0&&v===0?l:null;if(c){for(F=0;F<O;F+=1)B[F].a?.measure();for(F=0;F<O;F+=1)B[F].a?.fix()}Aa(a,B,M)}}c&&Wt(()=>{if(w!==void 0)for(g of w)g.a?.apply()}),t.first=a.first&&a.first.e,t.last=C&&C.e;for(var Q of n.values())Be(Q.e);n.clear()}function wt(t,e,a,n){(n&Ye)!==0&&st(t.v,e),(n&Ne)!==0?st(t.i,a):t.i=a}function je(t,e,a,n,l,s,o,d,u,c,h){var v=(u&Ye)!==0,i=(u&Vt)===0,b=v?i?X(l,!1,!1):ot(l):l,f=(u&Ne)===0?o:ot(o),p={i:f,v:b,k:s,a:null,e:null,prev:a,next:n};try{if(t===null){var C=document.createDocumentFragment();C.append(t=at())}return p.e=Te(()=>d(t,b,f,c),U),p.e.prev=a&&a.e,p.e.next=n&&n.e,a===null?h||(e.first=p):(a.next=p,a.e.next=p.e),n!==null&&(n.prev=p,n.e.prev=p.e),p}finally{}}function He(t,e,a){for(var n=t.next?t.next.e.nodes_start:a,l=e?e.e.nodes_start:a,s=t.e.nodes_start;s!==null&&s!==n;){var o=Kt(s);l.before(s),s=o}}function he(t,e,a){e===null?t.first=a:(e.next=a,e.e.next=a&&a.e),a!==null&&(a.prev=e,a.e.prev=e&&e.e)}function Ta(t,e,a,n,l,s){let o=U;U&&Ke();var d,u,c=null;U&&Ce.nodeType===ea&&(c=Ce,Ke());var h=U?Ce:t,v;Ie(()=>{const i=e()||null;var b=aa;i!==d&&(v&&(i===null?Ct(v,()=>{v=null,u=null}):i===u?nt(v):Be(v)),i&&i!==u&&(v=Te(()=>{if(c=U?c:document.createElementNS(b,i),na(c,c),n){U&&Ot(i)&&c.append(document.createComment(""));var f=U?bt(c):c.appendChild(at());U&&(f===null?Me(!1):Le(f)),n(c,f)}kt.nodes_end=c,h.before(c)})),d=i,d&&(u=d))},ta),o&&(Me(!0),Le(h))}function Ba(t,e){var a=void 0,n;Ie(()=>{a!==(a=e())&&(n&&(Be(n),n=null),a&&(n=Te(()=>{_t(()=>a(t))})))})}function At(t){var e,a,n="";if(typeof t=="string"||typeof t=="number")n+=t;else if(typeof t=="object")if(Array.isArray(t)){var l=t.length;for(e=0;e<l;e++)t[e]&&(a=At(t[e]))&&(n&&(n+=" "),n+=a)}else for(a in t)t[a]&&(n&&(n+=" "),n+=a);return n}function Sa(){for(var t,e,a=0,n="",l=arguments.length;a<l;a++)(t=arguments[a])&&(e=At(t))&&(n&&(n+=" "),n+=e);return n}function Ea(t){return typeof t=="object"?Sa(t):t??""}const it=[...` 	
\r\f \v\uFEFF`];function Pa(t,e,a){var n=t==null?"":""+t;if(e&&(n=n?n+" "+e:e),a){for(var l in a)if(a[l])n=n?n+" "+l:l;else if(n.length)for(var s=l.length,o=0;(o=n.indexOf(l,o))>=0;){var d=o+s;(o===0||it.includes(n[o-1]))&&(d===n.length||it.includes(n[d]))?n=(o===0?"":n.substring(0,o))+n.substring(d+1):o=d}}return n===""?null:n}function ct(t,e=!1){var a=e?" !important;":";",n="";for(var l in t){var s=t[l];s!=null&&s!==""&&(n+=" "+l+": "+s+a)}return n}function Ue(t){return t[0]!=="-"||t[1]!=="-"?t.toLowerCase():t}function xa(t,e){if(e){var a="",n,l;if(Array.isArray(e)?(n=e[0],l=e[1]):n=e,t){t=String(t).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();var s=!1,o=0,d=!1,u=[];n&&u.push(...Object.keys(n).map(Ue)),l&&u.push(...Object.keys(l).map(Ue));var c=0,h=-1;const p=t.length;for(var v=0;v<p;v++){var i=t[v];if(d?i==="/"&&t[v-1]==="*"&&(d=!1):s?s===i&&(s=!1):i==="/"&&t[v+1]==="*"?d=!0:i==='"'||i==="'"?s=i:i==="("?o++:i===")"&&o--,!d&&s===!1&&o===0){if(i===":"&&h===-1)h=v;else if(i===";"||v===p-1){if(h!==-1){var b=Ue(t.substring(c,h).trim());if(!u.includes(b)){i!==";"&&v++;var f=t.substring(c,v).trim();a+=" "+f+";"}}c=v+1,h=-1}}}}return n&&(a+=ct(n)),l&&(a+=ct(l,!0)),a=a.trim(),a===""?null:a}return t==null?null:String(t)}function ge(t,e,a,n,l,s){var o=t.__className;if(U||o!==a||o===void 0){var d=Pa(a,n,s);(!U||d!==t.getAttribute("class"))&&(d==null?t.removeAttribute("class"):e?t.className=d:t.setAttribute("class",d)),t.__className=a}else if(s&&l!==s)for(var u in s){var c=!!s[u];(l==null||c!==!!l[u])&&t.classList.toggle(u,c)}return s}function Ve(t,e={},a,n){for(var l in a){var s=a[l];e[l]!==s&&(a[l]==null?t.style.removeProperty(l):t.style.setProperty(l,s,n))}}function _e(t,e,a,n){var l=t.__style;if(U||l!==e){var s=xa(e,n);(!U||s!==t.getAttribute("style"))&&(s==null?t.removeAttribute("style"):t.style.cssText=s),t.__style=e}else n&&(Array.isArray(n)?(Ve(t,a?.[0],n[0]),Ve(t,a?.[1],n[1],"important")):Ve(t,a,n));return n}function et(t,e,a=!1){if(t.multiple){if(e==null)return;if(!mt(e))return la();for(var n of t.options)n.selected=e.includes(dt(n));return}for(n of t.options){var l=dt(n);if(ra(l,e)){n.selected=!0;return}}(!a||e!==void 0)&&(t.selectedIndex=-1)}function La(t){var e=new MutationObserver(()=>{et(t,t.__value)});e.observe(t,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),sa(()=>{e.disconnect()})}function dt(t){return"__value"in t?t.__value:t.value}const Pe=Symbol("class"),xe=Symbol("style"),Dt=Symbol("is custom element"),Tt=Symbol("is html");function lt(t){if(U){var e=!1,a=()=>{if(!e){if(e=!0,t.hasAttribute("value")){var n=t.value;J(t,"value",null),t.value=n}if(t.hasAttribute("checked")){var l=t.checked;J(t,"checked",null),t.checked=l}}};t.__on_r=a,ha(a),va()}}function Oa(t,e){e?t.hasAttribute("selected")||t.setAttribute("selected",""):t.removeAttribute("selected")}function J(t,e,a,n){var l=Bt(t);U&&(l[e]=t.getAttribute(e),e==="src"||e==="srcset"||e==="href"&&t.nodeName==="LINK")||l[e]!==(l[e]=a)&&(e==="loading"&&(t[ga]=a),a==null?t.removeAttribute(e):typeof a!="string"&&St(t).includes(e)?t[e]=a:t.setAttribute(e,a))}function za(t,e,a,n,l=!1,s=!1){if(U&&l&&t.tagName==="INPUT"){var o=t,d=o.type==="checkbox"?"defaultChecked":"defaultValue";d in a||lt(o)}var u=Bt(t),c=u[Dt],h=!u[Tt];let v=U&&c;v&&Me(!1);var i=e||{},b=t.tagName==="OPTION";for(var f in e)f in a||(a[f]=null);a.class?a.class=Ea(a.class):a[Pe]&&(a.class=null),a[xe]&&(a.style??=null);var p=St(t);for(const g in a){let F=a[g];if(b&&g==="value"&&F==null){t.value=t.__value="",i[g]=F;continue}if(g==="class"){var C=t.namespaceURI==="http://www.w3.org/1999/xhtml";ge(t,C,F,n,e?.[Pe],a[Pe]),i[g]=F,i[Pe]=a[Pe];continue}if(g==="style"){_e(t,F,e?.[xe],a[xe]),i[g]=F,i[xe]=a[xe];continue}var w=i[g];if(!(F===w&&!(F===void 0&&t.hasAttribute(g)))){i[g]=F;var x=g[0]+g[1];if(x!=="$$")if(x==="on"){const A={},T="$$"+g;let S=g.slice(2);var D=Yt(S);if(zt(S)&&(S=S.slice(0,-7),A.capture=!0),!D&&w){if(F!=null)continue;t.removeEventListener(S,i[T],A),i[T]=null}if(F!=null)if(D)t[`__${S}`]=F,Gt([S]);else{let Y=function(R){i[g].call(this,R)};i[T]=Rt(S,t,Y,A)}else D&&(t[`__${S}`]=void 0)}else if(g==="style")J(t,g,F);else if(g==="autofocus")fa(t,!!F);else if(!c&&(g==="__value"||g==="value"&&F!=null))t.value=t.__value=F;else if(g==="selected"&&b)Oa(t,F);else{var k=g;h||(k=It(k));var y=k==="defaultValue"||k==="defaultChecked";if(F==null&&!c&&!y)if(u[g]=null,k==="value"||k==="checked"){let A=t;const T=e===void 0;if(k==="value"){let S=A.defaultValue;A.removeAttribute(k),A.defaultValue=S,A.value=A.__value=T?S:null}else{let S=A.defaultChecked;A.removeAttribute(k),A.defaultChecked=S,A.checked=T?S:!1}}else t.removeAttribute(g);else y||p.includes(k)&&(c||typeof F!="string")?(t[k]=F,k in u&&(u[k]=Fa)):typeof F!="function"&&J(t,k,F)}}}return v&&Me(!0),i}function ut(t,e,a=[],n=[],l,s=!1,o=!1){oa(a,n,d=>{var u=void 0,c={},h=t.nodeName==="SELECT",v=!1;if(Ie(()=>{var b=e(...d.map(r)),f=za(t,u,b,l,s,o);v&&h&&"value"in b&&et(t,b.value);for(let C of Object.getOwnPropertySymbols(c))b[C]||Be(c[C]);for(let C of Object.getOwnPropertySymbols(b)){var p=b[C];C.description===da&&(!u||p!==u[C])&&(c[C]&&Be(c[C]),c[C]=Te(()=>Ba(t,()=>p))),f[C]=p}u=f}),h){var i=t;_t(()=>{et(i,u.value,!0),La(i)})}v=!0})}function Bt(t){return t.__attributes??={[Dt]:t.nodeName.includes("-"),[Tt]:t.namespaceURI===ia}}var ft=new Map;function St(t){var e=t.getAttribute("is")||t.nodeName,a=ft.get(e);if(a)return a;ft.set(e,a=[]);for(var n,l=t,s=Element.prototype;s!==l;){n=ua(l);for(var o in n)n[o].set&&a.push(o);l=ca(l)}return a}function Et(t,e,a=e){var n=new WeakSet;ba(t,"input",async l=>{var s=l?t.defaultValue:t.value;if(s=We(t)?Ze(s):s,a(s),De!==null&&n.add(De),await Mt(),s!==(s=e())){var o=t.selectionStart,d=t.selectionEnd;t.value=s??"",d!==null&&(t.selectionStart=o,t.selectionEnd=Math.min(d,t.value.length))}}),(U&&t.defaultValue!==t.value||I(e)==null&&t.value)&&(a(We(t)?Ze(t.value):t.value),De!==null&&n.add(De)),pa(()=>{var l=e();if(t===document.activeElement){var s=ma??De;if(n.has(s))return}We(t)&&l===Ze(t.value)||t.type==="date"&&!l&&!t.value||l!==t.value&&(t.value=l??"")})}function We(t){var e=t.type;return e==="number"||e==="range"}function Ze(t){return t===""?null:+t}const Ra=`Part,Color,Quantity,Is Spare
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
`,Ga=`Part,Color,Quantity,Is Spare
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
`,Ia=`Part,Color,Quantity,Is Spare
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
`,Ya=`Part,Color,Quantity,Is Spare
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
`,Na=`Part,Color,Quantity,Is Spare
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
`,qa=`Part,Color,Quantity,Is Spare
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
`,Xa=`id,name,rgb,is_trans,num_parts,num_sets,y1,y2
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
`,Ft=Object.assign({"../../data/sets/rebrickable_parts_41809-1-hedwig-pencil-holder.csv":Ra,"../../data/sets/rebrickable_parts_41904-1-animal-picture-holders.csv":Ga,"../../data/sets/rebrickable_parts_41935-1-lots-of-dots.csv":Ia,"../../data/sets/rebrickable_parts_41950-1-lots-of-dots-lettering.csv":Ya,"../../data/sets/rebrickable_parts_41957-1-adhesive-patches-mega-pack.csv":Na,"../../data/sets/rebrickable_parts_41961-1-designer-toolkit-patterns.csv":qa});function $a(t){const e=t.trim().split(`
`);return e[0].split(","),e.slice(1).map(a=>{const n=a.split(",");return{id:Number(n[0]),name:n[1],rgb:`#${n[2]}`,is_trans:n[3]==="True"}})}function Ha(t){let e=0,a=0,n=0;t.length===7?(e=parseInt(t.slice(1,3),16),a=parseInt(t.slice(3,5),16),n=parseInt(t.slice(5,7),16)):t.length===4&&(e=parseInt(t[1]+t[1],16),a=parseInt(t[2]+t[2],16),n=parseInt(t[3]+t[3],16)),e/=255,a/=255,n/=255;const l=Math.max(e,a,n),s=Math.min(e,a,n);let o=0,d=0,u=(l+s)/2;if(l!==s){const c=l-s;switch(d=u>.5?c/(2-l-s):c/(l+s),l){case e:o=(a-n)/c+(a<n?6:0);break;case a:o=(n-e)/c+2;break;case n:o=(e-a)/c+4;break}o/=6}return{h:o*360,s:d*100,l:u*100}}function Ua(t,e=15,a=5){const n={},l=new Set;for(const u of t){const c=u.s<10?999:Math.floor(u.h/e);n[c]||(n[c]=[]),l.has(u.rgb)||(n[c].push(u),l.add(u.rgb))}Object.values(n).forEach(u=>u.sort((c,h)=>c.l-h.l));const o=Object.keys(n).map(Number).sort((u,c)=>u-c).flatMap(u=>n[u]),d=[];for(let u=0;u<o.length;u+=a)d.push(o.slice(u,u+a));return d}function Va(){const t=new Set;for(const e in Ft){const n=Ft[e].trim().split(`
`);for(const l of n.slice(1)){const s=l.split(",");if(s.length>1){const o=Number(s[1]);isNaN(o)||t.add(o)}}}return t}const Wa=Va(),ue=$a(Xa).filter(t=>Wa.has(t.id)&&!t.name.includes("Trans-Clear"));function Za(){return ue.map(t=>{const e=Ha(t.rgb);return{...t,...e}})}const Ka=Ua(Za(),15,6);var Ja=W('<div class="zoom-pan-container svelte-b0dtxj" role="application" aria-label="Zoomable and pannable container" tabindex="0"><div class="zoom-pan-content svelte-b0dtxj"><!></div></div>');function Qa(t,e){se(e,!1);const a=ve();let n=E(e,"zoom",12,1),l=E(e,"panX",12,0),s=E(e,"panY",12,0),o=E(e,"selectMode",8,!1),d=X(!1),u=0,c=0,h=X(!1),v=X(),i=X(),b=!1;tt(()=>{if(r(v)&&r(i)&&!b){const F=r(v).clientWidth,A=r(v).clientHeight;let T=0,S=0;r(i).firstElementChild instanceof HTMLElement?(T=r(i).firstElementChild.offsetWidth,S=r(i).firstElementChild.offsetHeight):(T=r(i).offsetWidth,S=r(i).offsetHeight),l((F-T*n())/2),s((A-S*n())/2),b=!0,a("panChanged",{panX:l(),panY:s()})}});function f(F){F.preventDefault();const A=r(v).getBoundingClientRect(),T=F.clientX-A.left,S=F.clientY-A.top,Y=F.deltaY>0?.9:1.1,R=Math.max(.2,Math.min(5,n()*Y));if(R!==n()){const K=R/n();l(T-(T-l())*K),s(S-(S-s())*K),n(R),a("zoomChanged",{zoom:n(),panX:l(),panY:s()})}}function p(F){o()||F.button===0&&(m(d,!0),m(h,!1),u=F.clientX,c=F.clientY,window.addEventListener("mousemove",C),window.addEventListener("mouseup",w),F.preventDefault())}function C(F){if(r(d)){const A=F.clientX-u,T=F.clientY-c;(Math.abs(A)>1||Math.abs(T)>1)&&m(h,!0),l(l()+A),s(s()+T),u=F.clientX,c=F.clientY,a("panChanged",{panX:l(),panY:s()})}}function w(){r(d)&&(m(d,!1),window.removeEventListener("mousemove",C),window.removeEventListener("mouseup",w),a("panEnd",{didPan:r(h)}),setTimeout(()=>{m(h,!1)},50))}function x(F){F.key===" "&&F.preventDefault()}function D(F){F.key===" "&&F.preventDefault()}ie();var k=Ja(),y=z(k),g=z(y);pe(g,e,"default",{get didPan(){return r(h)}}),L(y),Qe(y,F=>m(i,F),()=>r(i)),L(k),Qe(k,F=>m(v,F),()=>r(v)),ae(()=>_e(y,`transform: translate(${l()??""}px, ${s()??""}px) scale(${n()??""}); cursor: ${o()?"crosshair":r(d)?"grabbing":"grab"};`)),H("wheel",k,f),H("mousedown",k,p),H("keydown",k,x),H("keyup",k,D),N(t,k),oe()}var ja=W('<div class="square svelte-gxsx5p"></div>');function Pt(t,e){let a=E(e,"color",8,"#000");var n=ja();ae(()=>_e(n,`--color: ${a()??""}`)),N(t,n)}var en=W('<div class="circle svelte-r5z0cw"></div>');function xt(t,e){let a=E(e,"color",8,"#000");var n=en();ae(()=>_e(n,`--color: ${a()??""}`)),N(t,n)}var tn=W('<div class="quarter-container svelte-19hi45o"><svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none" class="svelte-19hi45o"><path d="M 0,0 L 100,0 A 100,100 0 0,1 0,100 Z" stroke="none"></path></svg></div>');function Lt(t,e){let a=E(e,"color",8,"#000"),n=E(e,"rotation",8,0);var l=tn(),s=z(l),o=z(s);L(s),L(l),ae(()=>{J(o,"fill",a()),J(o,"transform",`rotate(${n()*90}, 50, 50)`)}),N(t,l)}var an=W('<div role="button" tabindex="0"><!></div>'),nn=W('<div class="selection-overlay svelte-1hhz0mg"></div>'),ln=W('<div class="grid svelte-1hhz0mg"><!> <!></div>');function rn(t,e){se(e,!1);const a=ve();let n=E(e,"grid",12),l=E(e,"width",8),s=E(e,"height",8),o=E(e,"selectedShape",8,"square"),d=E(e,"selectedColor",8),u=E(e,"paintMode",8,!1),c=E(e,"colorPickerMode",8,!1),h=E(e,"selectMode",8,!1),v=E(e,"quarterRotation",8,0),i=E(e,"selection",28,()=>({startX:0,startY:0,endX:0,endY:0,active:!1})),b=E(e,"didPan",8,!1),f=X(!1);function p(P){const B=n()[P];if(!B)return C(P);const{shape:O,color:M}=B;if(O===o()&&M===d())return;const Q=[P],ne=new Set;for(;Q.length;){const q=Q.pop();if(q===void 0||ne.has(q))continue;ne.add(q);const le=n()[q];if(!le||le.shape!==O||le.color!==M)continue;n(n()[q]={shape:o(),color:d(),rotation:o()==="quarter"?v():0},!0);const fe=q%l(),ce=Math.floor(q/l());fe>0&&Q.push(q-1),fe<l()-1&&Q.push(q+1),ce>0&&Q.push(q-l()),ce<s()-1&&Q.push(q+l())}n([...n()]),a("gridChanged",{grid:n()})}function C(P){const B=n()[P];B&&B.shape===o()&&B.color===d()?n(n()[P]=null,!0):o()==="quarter"?n(n()[P]={shape:o(),color:d(),rotation:v()},!0):n(n()[P]={shape:o(),color:d(),rotation:0},!0),n([...n()]),a("gridChanged",{grid:n()})}function w(P){const B=n()[P];B&&B.color&&a("colorPicked",{color:B.color})}function x(P,B){B.stopPropagation(),!b()&&(h()?D(P):c()?w(P):u()?p(P):C(P))}function D(P,B){const O=P%l(),M=Math.floor(P/l());m(f,!0),i({startX:O,startY:M,endX:O,endY:M,active:!0}),a("selectionChanged",{selection:i()})}function k(P,B){h()&&D(P)}function y(P,B){if(h()&&r(f)){const O=P%l(),M=Math.floor(P/l());i({...i(),endX:O,endY:M}),a("selectionChanged",{selection:i()})}}function g(P,B){h()&&r(f)&&(m(f,!1),a("selectionChanged",{selection:i()}))}function F(){r(f)&&m(f,!1)}tt(()=>{typeof window<"u"&&window.addEventListener("mouseup",F)}),vt(()=>{typeof window<"u"&&window.removeEventListener("mouseup",F)});function A(P){if(!i().active)return!1;const B=P%l(),O=Math.floor(P/l()),M=Math.min(i().startX,i().endX),Q=Math.max(i().startX,i().endX),ne=Math.min(i().startY,i().endY),q=Math.max(i().startY,i().endY);return B>=M&&B<=Q&&O>=ne&&O<=q}function T(P,B){P.key==="Enter"&&(c()?w(B):u()?p(B):C(B))}ie();var S=ln(),Y=z(S);ze(Y,1,n,Oe,(P,B,O)=>{var M=an(),Q=z(M);{var ne=q=>{var le=de(),fe=re(le);{var ce=ee=>{Pt(ee,{get color(){return r(B),I(()=>r(B).color)}})},Ae=ee=>{var Se=de(),Ee=re(Se);{var Re=me=>{xt(me,{get color(){return r(B),I(()=>r(B).color)}})},qe=me=>{var Ge=de(),_=re(Ge);{var Fe=te=>{Lt(te,{get color(){return r(B),I(()=>r(B).color)},get rotation(){return r(B),I(()=>r(B).rotation)}})};ke(_,te=>{r(B),I(()=>r(B).shape==="quarter")&&te(Fe)},!0)}N(me,Ge)};ke(Ee,me=>{r(B),I(()=>r(B).shape==="circle")?me(Re):me(qe,!1)},!0)}N(ee,Se)};ke(fe,ee=>{r(B),I(()=>r(B).shape==="square")?ee(ce):ee(Ae,!1)})}N(q,le)};ke(Q,q=>{r(B)&&q(ne)})}L(M),ae(q=>ge(M,1,`cell ${q??""} ${h()?"select-mode":""}`,"svelte-1hhz0mg"),[()=>I(()=>A(O)?"selected":"")]),H("click",M,q=>x(O,q)),H("mousedown",M,q=>k(O)),H("mouseenter",M,q=>y(O)),H("mouseup",M,q=>g()),H("keydown",M,q=>T(q,O)),N(P,M)});var R=$(Y,2);{var K=P=>{const B=j(()=>(G(i()),I(()=>Math.min(i().startX,i().endX)))),O=j(()=>(G(i()),I(()=>Math.max(i().startX,i().endX)))),M=j(()=>(G(i()),I(()=>Math.min(i().startY,i().endY)))),Q=j(()=>(G(i()),I(()=>Math.max(i().startY,i().endY)))),ne=j(()=>r(B)/l()*100),q=j(()=>r(M)/s()*100),le=j(()=>(r(O)-r(B)+1)/l()*100),fe=j(()=>(r(Q)-r(M)+1)/s()*100);var ce=nn();ae(()=>_e(ce,`left: ${r(ne)??""}%; top: ${r(q)??""}%; width: ${r(le)??""}%; height: ${r(fe)??""}%;`)),N(P,ce)};ke(R,P=>{G(h()),G(i()),r(f),I(()=>h()&&i().active&&(r(f)||i().startX!==i().endX||i().startY!==i().endY))&&P(K)})}L(S),ae(()=>_e(S,`--width: ${l()??""}; --height: ${s()??""};`)),N(t,S),oe()}var sn=W('<div class="container svelte-1w4104m"><!></div>');function ht(t,e){se(e,!1);const a=ve();let n=E(e,"grid",8,null),l=E(e,"width",8,32),s=E(e,"height",8,32),o=E(e,"selectedShape",8,"square"),d=E(e,"selectedColor",24,()=>ue.length>0?ue[0].rgb:"#000000"),u=E(e,"paintMode",8,!1),c=E(e,"colorPickerMode",8,!1),h=E(e,"selectMode",8,!1);E(e,"toolbarPosition",8,"left");let v=E(e,"quarterRotation",8,0),i=E(e,"zoom",12,1),b=E(e,"selection",28,()=>({startX:0,startY:0,endX:0,endY:0,active:!1})),f=X(),p=X(0),C=X(0);function w(T){i(T.detail.zoom)}function x(T){m(p,T.detail.panX),m(C,T.detail.panY)}function D(T){T.detail.didPan}function k(T){m(f,T.detail.grid),a("gridChanged",T.detail)}function y(T){a("colorPicked",T.detail)}function g(T){b(T.detail.selection),a("selectionChanged",T.detail)}Je(()=>(G(n()),G(l()),G(s())),()=>{m(f,n()||Array(l()*s()).fill(null))}),yt(),ie();var F=sn(),A=z(F);Qa(A,{get zoom(){return i()},get panX(){return r(p)},get panY(){return r(C)},get selectMode(){return h()},$$events:{zoomChanged:w,panChanged:x,panEnd:D},children:Ca,$$slots:{default:(T,S)=>{const Y=j(()=>S.didPan);rn(T,{get grid(){return r(f)},get width(){return l()},get height(){return s()},get selectedShape(){return o()},get selectedColor(){return d()},get paintMode(){return u()},get colorPickerMode(){return c()},get selectMode(){return h()},get quarterRotation(){return v()},get selection(){return b()},get didPan(){return r(Y)},$$events:{gridChanged:k,colorPicked:y,selectionChanged:g}})}}}),L(F),N(t,F),oe()}var on=W('<button type="button" class="dropdown-item" style="display: flex; align-items: center; width: 100%; background: none; border: none; padding: 0; text-align: left; cursor: pointer;"><span class="dropdown-swatch"></span> <span> </span> <span style="margin-left:auto; color:#888; font-size:0.9em"> </span></button>'),cn=W('<div class="dropdown-item">No colors found</div>'),dn=W('<div class="dropdown-menu"><input type="text" placeholder="Search color..." class="dropdown-search"/> <div class="dropdown-list"><!> <!></div></div>'),un=W('<button type="button"></button>'),fn=W('<div class="palette-row"></div>'),Fn=W('<div class="color-picker"><div class="color-dropdown-container"><button type="button" class="dropdown-toggle"> <span style="margin-left:0.5em;">▼</span></button> <!></div> <div class="colors"><div class="palette2d"></div></div></div>');function hn(t,e){se(e,!1);const a=ve();let n=E(e,"selectedColor",28,()=>ue.length>0?ue[0].rgb:"#000000"),l=X(""),s=X(!1),o=X(null),d=ue,u=X(d);function c(D){n(D),a("colorSelected",{color:D})}function h(D){n(D.rgb),m(s,!1),m(l,""),a("colorSelected",{color:D.rgb})}Je(()=>(r(s),r(o)),()=>{r(s)&&Mt().then(()=>{r(o)?.focus()})}),Je(()=>r(l),()=>{m(u,r(l).trim()?d.filter(D=>D.name.toLowerCase().includes(r(l).toLowerCase())||D.rgb.replace("#","").includes(r(l).replace("#",""))):d)}),yt(),ie();var v=Fn(),i=z(v),b=z(i),f=z(b);ka(),L(b);var p=$(b,2);{var C=D=>{var k=dn(),y=z(k);lt(y),Qe(y,S=>m(o,S),()=>r(o));var g=$(y,2),F=z(g);ze(F,1,()=>r(u),Oe,(S,Y)=>{var R=on(),K=z(R),P=$(K,2),B=z(P,!0);L(P);var O=$(P,2),M=z(O,!0);L(O),L(R),ae(()=>{J(R,"aria-label",(r(Y),I(()=>`Select color ${r(Y).name}`))),_e(K,`background:${r(Y),I(()=>r(Y).rgb)??""}`),Xe(B,(r(Y),I(()=>r(Y).name))),Xe(M,(r(Y),I(()=>r(Y).rgb)))}),H("click",R,()=>h(r(Y))),N(S,R)});var A=$(F,2);{var T=S=>{var Y=cn();N(S,Y)};ke(A,S=>{r(u),I(()=>r(u).length===0)&&S(T)})}L(g),L(k),Et(y,()=>r(l),S=>m(l,S)),N(D,k)};ke(p,D=>{r(s)&&D(C)})}L(i);var w=$(i,2),x=z(w);ze(x,5,()=>Ka,Oe,(D,k)=>{var y=fn();ze(y,5,()=>r(k),Oe,(g,F)=>{var A=un();ae(()=>{_e(A,`width: 1.5rem; height: 1.5rem; background: ${r(F),I(()=>r(F).rgb)??""}; border: 2px solid ${G(n()),r(F),I(()=>n()===r(F).rgb?"#333":"#ccc")??""}; border-radius: 0.25rem; cursor: pointer; margin: 0 0.1rem 0.1rem 0;`),J(A,"aria-label",(r(F),I(()=>r(F).name))),J(A,"title",(r(F),I(()=>r(F).name)))}),H("click",A,()=>c(r(F).rgb)),N(g,A)}),L(y),N(D,y)}),L(x),L(w),L(v),ae(D=>Xe(f,`${D??""} `),[()=>(G(n()),I(()=>n()?d.find(D=>D.rgb===n())?.name||n():"Select color..."))]),H("click",b,()=>m(s,!r(s))),N(t,v),oe()}const V={select:{key:"v",action:"select"},square:{key:"s",action:"square"},circle:{key:"c",action:"circle"},quarter:{key:"q",action:"quarter"},fill:{key:"f",action:"fill"},colorPicker:{key:"i",action:"colorPicker"},zoomIn:{key:"+",action:"zoomIn"},zoomInAlt:{key:"=",action:"zoomIn"},zoomOut:{key:"-",action:"zoomOut"},undo:{key:"z",ctrl:!0,action:"undo"},redo:{key:"z",ctrl:!0,shift:!0,action:"redo"},cut:{key:"x",ctrl:!0,action:"cut"},copy:{key:"c",ctrl:!0,action:"copy"},paste:{key:"v",ctrl:!0,action:"paste"},selectAll:{key:"a",ctrl:!0,action:"selectAll"},deselect:{key:"d",ctrl:!0,action:"deselect"},rotateLeft:{key:"r",action:"rotateLeft"},rotateRight:{key:"r",shift:!0,action:"rotateRight"},moveUp:{key:"ArrowUp",action:"moveUp"},moveDown:{key:"ArrowDown",action:"moveDown"},moveLeft:{key:"ArrowLeft",action:"moveLeft"},moveRight:{key:"ArrowRight",action:"moveRight"},delete:{key:"Delete",action:"delete"},backspace:{key:"Backspace",action:"delete"}};function vn(t,e){const n=(t.key===" "?"Space":t.key).toLowerCase(),l=e.key.toLowerCase();return n!==l||!!t.ctrlKey!=!!e.ctrl||!!t.altKey!=!!e.alt?!1:e.key==="+"||e.key==="-"||e.key==="="?!0:!!t.shiftKey==!!e.shift}function Z(t){const e=[];t.ctrl&&e.push("Ctrl"),t.shift&&e.push("Shift"),t.alt&&e.push("Alt");let a=t.key;return a===" "&&(a="Space"),a==="="&&(a="+"),e.push(a.toUpperCase()),e.join("+")}var gn=W('<div class="shape-group"><div class="group-label">Shapes</div> <div class="shape-grid"><button aria-label="Square"><div class="shape-icon"><!></div></button> <button aria-label="Circle"><div class="shape-icon"><!></div></button> <button aria-label="Quarter"><div class="shape-icon"><!></div></button></div></div>');function bn(t,e){se(e,!1);const a=ve();let n=E(e,"selectedShape",12,"square"),l=E(e,"selectedColor",8,"#000000"),s=E(e,"quarterRotation",12,0);function o(y){if(y==="quarter")if(n()==="quarter"){s((s()+1)%4),a("quarterRotationChanged",{rotation:s()});return}else s(0);n(y),a("shapeSelected",{shape:y}),y==="quarter"&&a("quarterRotationChanged",{rotation:s()})}ie();var d=gn(),u=$(z(d),2),c=z(u);let h;var v=z(c),i=z(v);Pt(i,{get color(){return l()}}),L(v),L(c);var b=$(c,2);let f;var p=z(b),C=z(p);xt(C,{get color(){return l()}}),L(p),L(b);var w=$(b,2);let x;var D=z(w),k=z(D);Lt(k,{get color(){return l()},get rotation(){return s()}}),L(D),L(w),L(u),L(d),ae((y,g,F,A,T,S)=>{h=ge(c,1,"shape-button",null,h,y),J(c,"title",`Square (${g??""})`),f=ge(b,1,"shape-button",null,f,F),J(b,"title",`Circle (${A??""})`),x=ge(w,1,"shape-button",null,x,T),J(w,"title",`Quarter (${S??""})`)},[()=>({selected:n()==="square"}),()=>(G(Z),G(V),I(()=>Z(V.square))),()=>({selected:n()==="circle"}),()=>(G(Z),G(V),I(()=>Z(V.circle))),()=>({selected:n()==="quarter"}),()=>(G(Z),G(V),I(()=>Z(V.quarter)))]),H("click",c,()=>o("square")),H("click",b,()=>o("circle")),H("click",w,()=>o("quarter")),N(t,d),oe()}/**
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
 */const pn={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};var mn=_a("<svg><!><!></svg>");function we(t,e){const a=be(e,["children","$$slots","$$events","$$legacy"]),n=be(a,["name","color","size","strokeWidth","absoluteStrokeWidth","iconNode"]);se(e,!1);let l=E(e,"name",8,void 0),s=E(e,"color",8,"currentColor"),o=E(e,"size",8,24),d=E(e,"strokeWidth",8,2),u=E(e,"absoluteStrokeWidth",8,!1),c=E(e,"iconNode",24,()=>[]);const h=(...f)=>f.filter((p,C,w)=>!!p&&w.indexOf(p)===C).join(" ");ie();var v=mn();ut(v,(f,p)=>({...pn,...n,width:o(),height:o(),stroke:s(),"stroke-width":f,class:p}),[()=>(G(u()),G(d()),G(o()),I(()=>u()?Number(d())*24/Number(o()):d())),()=>(G(l()),G(a),I(()=>h("lucide-icon","lucide",l()?`lucide-${l()}`:"",a.class)))]);var i=z(v);ze(i,1,c,Oe,(f,p)=>{var C=Ma(()=>ya(r(p),2));let w=()=>r(C)[0],x=()=>r(C)[1];var D=de(),k=re(D);Ta(k,w,!0,(y,g)=>{ut(y,()=>({...x()}))}),N(f,D)});var b=$(i);pe(b,e,"default",{}),L(v),N(t,v),oe()}function Cn(t,e){const a=be(e,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M14 4.1 12 6"}],["path",{d:"m5.1 8-2.9-.8"}],["path",{d:"m6 12-1.9 2"}],["path",{d:"M7.2 2.2 8 5.1"}],["path",{d:"M9.037 9.69a.498.498 0 0 1 .653-.653l11 4.5a.5.5 0 0 1-.074.949l-4.349 1.041a1 1 0 0 0-.74.739l-1.04 4.35a.5.5 0 0 1-.95.074z"}]];we(t,ye({name:"mouse-pointer-click"},()=>a,{get iconNode(){return n},children:(l,s)=>{var o=de(),d=re(o);pe(d,e,"default",{}),N(l,o)},$$slots:{default:!0}}))}function kn(t,e){const a=be(e,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"m19 11-8-8-8.6 8.6a2 2 0 0 0 0 2.8l5.2 5.2c.8.8 2 .8 2.8 0L19 11Z"}],["path",{d:"m5 2 5 5"}],["path",{d:"M2 13h15"}],["path",{d:"M22 20a2 2 0 1 1-4 0c0-1.6 1.7-2.4 2-4 .3 1.6 2 2.4 2 4Z"}]];we(t,ye({name:"paint-bucket"},()=>a,{get iconNode(){return n},children:(l,s)=>{var o=de(),d=re(o);pe(d,e,"default",{}),N(l,o)},$$slots:{default:!0}}))}function _n(t,e){const a=be(e,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"m12 9-8.414 8.414A2 2 0 0 0 3 18.828v1.344a2 2 0 0 1-.586 1.414A2 2 0 0 1 3.828 21h1.344a2 2 0 0 0 1.414-.586L15 12"}],["path",{d:"m18 9 .4.4a1 1 0 1 1-3 3l-3.8-3.8a1 1 0 1 1 3-3l.4.4 3.4-3.4a1 1 0 1 1 3 3z"}],["path",{d:"m2 22 .414-.414"}]];we(t,ye({name:"pipette"},()=>a,{get iconNode(){return n},children:(l,s)=>{var o=de(),d=re(o);pe(d,e,"default",{}),N(l,o)},$$slots:{default:!0}}))}function Mn(t,e){const a=be(e,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M21 7v6h-6"}],["path",{d:"M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7"}]];we(t,ye({name:"redo"},()=>a,{get iconNode(){return n},children:(l,s)=>{var o=de(),d=re(o);pe(d,e,"default",{}),N(l,o)},$$slots:{default:!0}}))}function yn(t,e){const a=be(e,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M3 7v6h6"}],["path",{d:"M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13"}]];we(t,ye({name:"undo"},()=>a,{get iconNode(){return n},children:(l,s)=>{var o=de(),d=re(o);pe(d,e,"default",{}),N(l,o)},$$slots:{default:!0}}))}function wn(t,e){const a=be(e,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["circle",{cx:"11",cy:"11",r:"8"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65"}],["line",{x1:"11",x2:"11",y1:"8",y2:"14"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11"}]];we(t,ye({name:"zoom-in"},()=>a,{get iconNode(){return n},children:(l,s)=>{var o=de(),d=re(o);pe(d,e,"default",{}),N(l,o)},$$slots:{default:!0}}))}function An(t,e){const a=be(e,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["circle",{cx:"11",cy:"11",r:"8"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11"}]];we(t,ye({name:"zoom-out"},()=>a,{get iconNode(){return n},children:(l,s)=>{var o=de(),d=re(o);pe(d,e,"default",{}),N(l,o)},$$slots:{default:!0}}))}var Dn=W('<div class="tool-group"><div class="group-label">Tools</div> <div class="tool-grid"><button type="button" aria-label="Selection tool"><!></button> <button type="button" aria-label="Zoom in" class="tool-button"><!></button> <button type="button" aria-label="Zoom out" class="tool-button"><!></button> <button type="button" aria-label="Paint bucket tool"><!></button> <button type="button" aria-label="Color picker tool"><!></button> <button type="button" aria-label="Undo" class="tool-button"><!></button> <button type="button" aria-label="Redo" class="tool-button"><!></button></div></div>');function Tn(t,e){se(e,!1);const a=ve();let n=E(e,"paintMode",12,!1),l=E(e,"colorPickerMode",12,!1),s=E(e,"selectMode",12,!1),o=E(e,"canUndo",8,!1),d=E(e,"canRedo",8,!1);function u(){n(!n()),n()&&(l(!1),s(!1)),a("paintModeToggled",{paintMode:n()})}function c(){l(!l()),l()&&(n(!1),s(!1)),a("colorPickerModeToggled",{colorPickerMode:l()})}function h(){s(!s()),s()&&(n(!1),l(!1)),a("selectModeToggled",{selectMode:s()})}function v(){a("undo")}function i(){a("redo")}ie();var b=Dn(),f=$(z(b),2),p=z(f);let C;var w=z(p);{let O=j(()=>s()?"#333":"#555");Cn(w,{size:24,get color(){return r(O)}})}L(p);var x=$(p,2),D=z(x);wn(D,{size:24,color:"#555"}),L(x);var k=$(x,2),y=z(k);An(y,{size:24,color:"#555"}),L(k);var g=$(k,2);let F;var A=z(g);{let O=j(()=>n()?"#333":"#555");kn(A,{size:24,get color(){return r(O)}})}L(g);var T=$(g,2);let S;var Y=z(T);{let O=j(()=>l()?"#333":"#555");_n(Y,{size:24,get color(){return r(O)}})}L(T);var R=$(T,2),K=z(R);{let O=j(()=>o()?"#555":"#ccc");yn(K,{size:24,get color(){return r(O)}})}L(R);var P=$(R,2),B=z(P);{let O=j(()=>d()?"#555":"#ccc");Mn(B,{size:24,get color(){return r(O)}})}L(P),L(f),L(b),ae((O,M,Q,ne,q,le,fe,ce,Ae,ee)=>{C=ge(p,1,"tool-button",null,C,O),J(p,"title",`Selection Tool (${M??""})`),J(x,"title",`Zoom In (${Q??""})`),J(k,"title",`Zoom Out (${ne??""})`),F=ge(g,1,"tool-button",null,F,q),J(g,"title",`Fill Tool (${le??""})`),S=ge(T,1,"tool-button",null,S,fe),J(T,"title",`Color Picker (${ce??""})`),J(R,"title",`Undo (${Ae??""})`),R.disabled=!o(),J(P,"title",`Redo (${ee??""})`),P.disabled=!d()},[()=>({active:s()}),()=>(G(Z),G(V),I(()=>Z(V.select))),()=>(G(Z),G(V),I(()=>Z(V.zoomIn))),()=>(G(Z),G(V),I(()=>Z(V.zoomOut))),()=>({active:n()}),()=>(G(Z),G(V),I(()=>Z(V.fill))),()=>({active:l()}),()=>(G(Z),G(V),I(()=>Z(V.colorPicker))),()=>(G(Z),G(V),I(()=>Z(V.undo))),()=>(G(Z),G(V),I(()=>Z(V.redo)))]),H("click",p,h),H("click",x,()=>a("zoomIn")),H("click",k,()=>a("zoomOut")),H("click",g,u),H("click",T,c),H("click",R,v),H("click",P,i),N(t,b),oe()}var Bn=W('<div class="canvas-size-group" style="display:flex; justify-content:center; flex-direction: column; align-items:center; width:100%;"><div class="group-label">Size</div> <div class="tool-grid" style="display:flex; justify-content: center"><label style="display:flex; flex-direction:column; align-items:center;"><input type="number" min="1" max="256"/></label></div></div>');function Sn(t,e){se(e,!1);const a=ve();let n=E(e,"size",12,32);function l(c){const h=c.target;n(Math.max(1,Math.min(128,parseInt(h.value)||1))),a("sizeChanged",{size:n()})}ie();var s=Bn(),o=$(z(s),2),d=z(o),u=z(d);lt(u),L(d),L(o),L(s),Et(u,n),H("input",u,l),N(t,s),oe()}var En=W('<div class="image-upload"><label class="upload-label"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#555" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align: middle;"><path d="M12 16V4"></path><polyline points="8 8 12 4 16 8"></polyline><rect x="4" y="16" width="16" height="4" rx="2"></rect></svg> <span>Upload image</span> <input type="file" accept="image/png, image/jpeg"/></label></div>');function Pn(t,e){se(e,!1);const a=ve();function n(d){const u=d.target,c=u.files&&u.files[0];if(c){const h=new FileReader;h.onload=()=>{a("imageUploaded",{src:h.result})},h.readAsDataURL(c)}}ie();var l=En(),s=z(l),o=$(z(s),4);L(s),L(l),H("change",o,n),N(t,l),oe()}var xn=W('<button class="toolbar-toggle" aria-label="Show/hide toolbar"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#555" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align: middle;"><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg></button>');function Ln(t,e){se(e,!1);const a=ve();function n(){a("toggle")}ie();var l=xn();H("click",l,n),N(t,l),oe()}var On=W("<!> <div><!> <!> <!> <!> <!></div>",1);function zn(t,e){se(e,!1);const a=ve();let n=E(e,"selectedShape",12,"square"),l=E(e,"selectedColor",28,()=>ue.length>0?ue[0].rgb:"#000000"),s=E(e,"paintMode",12,!1),o=E(e,"colorPickerMode",12,!1),d=E(e,"selectMode",12,!1),u=E(e,"size",12,32),c=X(!0),h=E(e,"quarterRotation",12,0),v=E(e,"canUndo",12,!1),i=E(e,"canRedo",12,!1);function b(M){n(M.detail.shape),a("shapeSelected",M.detail)}function f(M){h(M.detail.rotation),a("quarterRotationChanged",M.detail)}function p(M){l(M.detail.color),a("colorSelected",M.detail)}function C(M){s(M.detail.paintMode),a("paintModeToggled",M.detail)}function w(M){o(M.detail.colorPickerMode),a("colorPickerModeToggled",M.detail)}function x(M){d(M.detail.selectMode),a("selectModeToggled",M.detail)}function D(){a("undo")}function k(){a("redo")}function y(M){u(M.detail.size),a("sizeChanged",M.detail)}function g(M){a("imageUploaded",M.detail)}function F(){m(c,!r(c))}ie();var A=On(),T=re(A);Ln(T,{$$events:{toggle:F}});var S=$(T,2);let Y;var R=z(S);bn(R,{get selectedColor(){return l()},get selectedShape(){return n()},set selectedShape(M){n(M)},get quarterRotation(){return h()},set quarterRotation(M){h(M)},$$events:{shapeSelected:b,quarterRotationChanged:f},$$legacy:!0});var K=$(R,2);Tn(K,{get paintMode(){return s()},set paintMode(M){s(M)},get colorPickerMode(){return o()},set colorPickerMode(M){o(M)},get selectMode(){return d()},set selectMode(M){d(M)},get canUndo(){return v()},set canUndo(M){v(M)},get canRedo(){return i()},set canRedo(M){i(M)},$$events:{paintModeToggled:C,colorPickerModeToggled:w,selectModeToggled:x,undo:D,redo:k,zoomIn:()=>a("zoomIn"),zoomOut:()=>a("zoomOut")},$$legacy:!0});var P=$(K,2);hn(P,{get selectedColor(){return l()},set selectedColor(M){l(M)},$$events:{colorSelected:p},$$legacy:!0});var B=$(P,2);Sn(B,{get size(){return u()},set size(M){u(M)},$$events:{sizeChanged:y},$$legacy:!0});var O=$(B,2);Pn(O,{$$events:{imageUploaded:g}}),L(S),ae(M=>Y=ge(S,1,"toolbar left",null,Y,M),[()=>({visible:r(c)})]),N(t,A),oe()}function Rn(t){t=t.replace(/^#/,""),t.length===3&&(t=t.split("").map(a=>a+a).join(""));const e=parseInt(t,16);return{r:e>>16&255,g:e>>8&255,b:e&255}}function Gn(t,e,a,n){let l=n[0],s=1/0;for(const o of n){const d=Rn(o),u=Math.sqrt(Math.pow(t-d.r,2)+Math.pow(e-d.g,2)+Math.pow(a-d.b,2));u<s&&(s=u,l=o)}return l}function In(t){return t<85?"square":t<170?"quarter":"circle"}function Yn(t,e,a=32,n=32){return new Promise((l,s)=>{const o=new window.Image;o.src=t,o.onload=()=>{const d=document.createElement("canvas"),u=d.getContext("2d");if(d.width=a,d.height=n,!u){s(new Error("Could not get 2D context"));return}u.drawImage(o,0,0,a,n);const c=u.getImageData(0,0,a,n).data,h=[];for(let v=0;v<c.length;v+=4){const i=v/4,b=i%a,f=Math.floor(i/a);let p=c[v],C=c[v+1],w=c[v+2];c[v+3]===0&&(p=255,C=255,w=255);const D=(p+C+w)/3;let k=In(D),y=0;const g=f===0,F=f===n-1,A=b===0,T=b===a-1;k==="quarter"&&(g||F||A||T)?g?y=2:F?y=0:A?y=1:T&&(y=3):k==="quarter"&&(k=D<128?"square":"circle");const S=Gn(p,C,w,e);h.push({shape:k,color:S,rotation:y})}l(h)},o.onerror=s})}class Nn{history=[];currentIndex=-1;maxHistory=50;constructor(e){e&&this.addState(e)}addState(e){this.currentIndex<this.history.length-1&&(this.history=this.history.slice(0,this.currentIndex+1)),this.history.push({grid:JSON.parse(JSON.stringify(e)),timestamp:Date.now()}),this.history.length>this.maxHistory?this.history.shift():this.currentIndex++}undo(){return this.canUndo()?(this.currentIndex--,JSON.parse(JSON.stringify(this.history[this.currentIndex].grid))):null}redo(){return this.canRedo()?(this.currentIndex++,JSON.parse(JSON.stringify(this.history[this.currentIndex].grid))):null}canUndo(){return this.currentIndex>0}canRedo(){return this.currentIndex<this.history.length-1}clear(){this.history=[],this.currentIndex=-1}getCurrentState(){return this.currentIndex>=0&&this.currentIndex<this.history.length?JSON.parse(JSON.stringify(this.history[this.currentIndex].grid)):null}}class qn{clipboardData=null;copy(e,a,n){const{startX:l,startY:s,endX:o,endY:d}=this.normalizeSelection(a),u=o-l+1,c=d-s+1,h=[];for(let v=s;v<=d;v++)for(let i=l;i<=o;i++){const b=v*n+i;h.push(e[b]?JSON.parse(JSON.stringify(e[b])):null)}this.clipboardData={cells:h,width:u,height:c}}cut(e,a,n){return this.copy(e,a,n),this.deleteSelection(e,a,n)}paste(e,a,n,l,s){if(!this.clipboardData)return e;const o=[...e],{cells:d,width:u,height:c}=this.clipboardData;for(let h=0;h<c;h++)for(let v=0;v<u;v++){const i=a+v,b=n+h;if(i>=0&&i<l&&b>=0&&b<s){const f=h*u+v,p=b*l+i;o[p]=d[f]?JSON.parse(JSON.stringify(d[f])):null}}return o}deleteSelection(e,a,n){const{startX:l,startY:s,endX:o,endY:d}=this.normalizeSelection(a),u=[...e];for(let c=s;c<=d;c++)for(let h=l;h<=o;h++){const v=c*n+h;u[v]=null}return u}rotateSelection(e,a,n,l=!0){const{startX:s,startY:o,endX:d,endY:u}=this.normalizeSelection(a),c=d-s+1,h=u-o+1,v=[];for(let b=o;b<=u;b++)for(let f=s;f<=d;f++){const p=b*n+f;v.push(e[p])}const i=new Array(c*h);for(let b=0;b<h;b++)for(let f=0;f<c;f++){const p=b*c+f;let C;l?C=f*h+(h-1-b):C=(c-1-f)*h+b;const w=v[p];i[C]=w?{...w,rotation:(w.rotation+(l?1:-1)+4)%4}:null}if(c===h){const b=[...e];for(let f=0;f<h;f++)for(let p=0;p<c;p++){const C=(o+f)*n+(s+p),w=f*c+p;b[C]=i[w]}return b}return e}moveSelection(e,a,n,l,s,o){const{startX:d,startY:u,endX:c,endY:h}=this.normalizeSelection(a),v=c-d+1,i=h-u+1,b=Math.max(0,Math.min(s-v,d+n)),f=Math.max(0,Math.min(o-i,u+l)),p=b+v-1,C=f+i-1;if(b===d&&f===u)return{grid:e,selection:a};const w=[];for(let k=u;k<=h;k++)for(let y=d;y<=c;y++){const g=k*s+y;w.push(e[g])}let x=this.deleteSelection(e,a,s);for(let k=0;k<i;k++)for(let y=0;y<v;y++){const g=k*v+y,F=(f+k)*s+(b+y);x[F]=w[g]}const D={...a,startX:b,startY:f,endX:p,endY:C};return{grid:x,selection:D}}hasClipboardData(){return this.clipboardData!==null}getClipboardSize(){return this.clipboardData?{width:this.clipboardData.width,height:this.clipboardData.height}:null}normalizeSelection(e){return{startX:Math.min(e.startX,e.endX),startY:Math.min(e.startY,e.endY),endX:Math.max(e.startX,e.endX),endY:Math.max(e.startY,e.endY)}}}var Xn=W('<main class="svelte-1uha8ag"><!> <!></main>');function Jn(t,e){se(e,!1);let a=X("square"),n=X(ue.length>0?ue[0].rgb:"#000000"),l=X(null),s=X(!1),o=X(!1),d=X("left"),u=X(1),c=X(32),h=X(!1),v=X(0),i=X({startX:0,startY:0,endX:0,endY:0,active:!1}),b,f,p=X(!1),C=X(!1);function w(){m(u,Math.min(r(u)+.1,3))}function x(){m(u,Math.max(r(u)-.1,.2))}tt(()=>{b=new Nn,f=new qn,r(l)||(m(l,Array(r(c)*r(c)).fill(null)),b.addState(r(l))),D(),window.addEventListener("keydown",y)}),vt(()=>{typeof window<"u"&&window.removeEventListener("keydown",y)});function D(){m(p,b?.canUndo()??!1),m(C,b?.canRedo()??!1)}function k(_){b&&(b.addState(_),D())}function y(_){if(!(_.target instanceof HTMLInputElement||_.target instanceof HTMLTextAreaElement)){for(const[Fe,te]of Object.entries(V))if(vn(_,te)){_.preventDefault(),g(te.action);break}}}function g(_){switch(_){case"select":m(o,!0),m(s,!1),m(h,!1);break;case"square":m(a,"square");break;case"circle":m(a,"circle");break;case"quarter":r(a)==="quarter"?m(v,(r(v)+1)%4):(m(a,"quarter"),m(v,0));break;case"fill":m(s,!r(s)),r(s)&&(m(o,!1),m(h,!1));break;case"colorPicker":m(h,!r(h)),r(h)&&(m(o,!1),m(s,!1));break;case"zoomIn":w();break;case"zoomOut":x();break;case"undo":P();break;case"redo":B();break;case"cut":Q();break;case"copy":ne();break;case"paste":q();break;case"selectAll":fe();break;case"deselect":ce();break;case"delete":le();break;case"rotateLeft":r(i).active&&Ae(!1);break;case"rotateRight":r(i).active&&Ae(!0);break;case"moveUp":r(i).active&&ee(0,-1);break;case"moveDown":r(i).active&&ee(0,1);break;case"moveLeft":r(i).active&&ee(-1,0);break;case"moveRight":r(i).active&&ee(1,0);break}}function F(_){m(a,_.detail.shape)}function A(_){m(v,_.detail.rotation)}function T(_){m(n,_.detail.color)}async function S(_){const Fe=ue.map(te=>te.rgb);m(l,await Yn(_.detail.src,Fe,r(c),r(c)))}function Y(_){m(c,_.detail.size),m(l,null)}function R(_){m(h,_.detail.colorPickerMode)}function K(_){m(o,_.detail.selectMode),r(o)&&(m(s,!1),m(h,!1))}function P(){if(b){const _=b.undo();_&&(m(l,_),D())}}function B(){if(b){const _=b.redo();_&&(m(l,_),D())}}function O(_){m(i,_.detail.selection)}function M(_){m(l,_.detail.grid),r(l)&&k(r(l))}function Q(){if(r(i).active&&r(l)&&f){const _=f.cut(r(l),r(i),r(c));m(l,_),k(r(l)),m(i,{...r(i),active:!1})}}function ne(){r(i).active&&r(l)&&f&&f.copy(r(l),r(i),r(c))}function q(){if(r(l)&&f&&f.hasClipboardData()){const _=r(i).active?r(i).startX:0,Fe=r(i).active?r(i).startY:0,te=f.paste(r(l),_,Fe,r(c),r(c));m(l,te),k(r(l))}}function le(){if(r(i).active&&r(l)&&f){const _=f.deleteSelection(r(l),r(i),r(c));m(l,_),k(r(l)),m(i,{...r(i),active:!1})}}function fe(){m(i,{startX:0,startY:0,endX:r(c)-1,endY:r(c)-1,active:!0}),m(o,!0),m(s,!1),m(h,!1)}function ce(){m(i,{...r(i),active:!1})}function Ae(_=!0){if(r(i).active&&r(l)&&f){const Fe=f.rotateSelection(r(l),r(i),r(c),_);m(l,Fe),k(r(l))}}function ee(_,Fe){if(r(i).active&&r(l)&&f){const te=f.moveSelection(r(l),r(i),_,Fe,r(c),r(c));m(l,te.grid),m(i,te.selection),k(r(l))}}function Se(_){m(n,_.detail.color),m(h,!1)}ie();var Ee=Xn();Nt(_=>{wa.title="Dotsly"});var Re=z(Ee);zn(Re,{get toolbarPosition(){return r(d)},set toolbarPosition(_){m(d,_)},get selectedColor(){return r(n)},set selectedColor(_){m(n,_)},get selectedShape(){return r(a)},set selectedShape(_){m(a,_)},get paintMode(){return r(s)},set paintMode(_){m(s,_)},get selectMode(){return r(o)},set selectMode(_){m(o,_)},get colorPickerMode(){return r(h)},set colorPickerMode(_){m(h,_)},get quarterRotation(){return r(v)},set quarterRotation(_){m(v,_)},get size(){return r(c)},set size(_){m(c,_)},get canUndo(){return r(p)},set canUndo(_){m(p,_)},get canRedo(){return r(C)},set canRedo(_){m(C,_)},$$events:{shapeSelected:F,colorSelected:T,imageUploaded:S,paintModeToggled:_=>m(s,_.detail.paintMode),colorPickerModeToggled:R,selectModeToggled:K,undo:P,redo:B,zoomIn:w,zoomOut:x,quarterRotationChanged:A,sizeChanged:Y},$$legacy:!0});var qe=$(Re,2);{var me=_=>{ht(_,{get width(){return r(c)},get height(){return r(c)},get selectedShape(){return r(a)},get selectedColor(){return r(n)},get selectMode(){return r(o)},get grid(){return r(l)},get paintMode(){return r(s)},get colorPickerMode(){return r(h)},get toolbarPosition(){return r(d)},get zoom(){return r(u)},get quarterRotation(){return r(v)},get selection(){return r(i)},$$events:{colorPicked:Se,selectionChanged:O,gridChanged:M}})},Ge=_=>{ht(_,{get width(){return r(c)},get height(){return r(c)},get selectedShape(){return r(a)},get selectedColor(){return r(n)},get selectMode(){return r(o)},get paintMode(){return r(s)},get colorPickerMode(){return r(h)},get toolbarPosition(){return r(d)},get zoom(){return r(u)},get quarterRotation(){return r(v)},get selection(){return r(i)},$$events:{colorPicked:Se,selectionChanged:O,gridChanged:M}})};ke(qe,_=>{r(l)?_(me):_(Ge,!1)})}L(Ee),N(t,Ee),oe()}export{Jn as component};
