import"../chunks/DsnmJJEf.js";import"../chunks/BcbL0YC6.js";import{B as ka,w as la,z as Ve,o as Z,ay as Ka,q as ja,g as s,W as Ja,x as el,H as al,y as da,A as Ae,J as ke,ad as ll,aG as nl,C as me,F as sl,D as he,ac as fa,a4 as H,aa as va,aD as Da,av as Aa,aR as Ie,G as ma,I as rl,aS as He,aT as tl,aU as Ue,al as Te,ar as ol,aV as il,aC as ul,aW as Fl,T as cl,aX as Ta,M as dl,aY as fl,K as wa,aZ as vl,a_ as hl,at as gl,a$ as pl,b0 as bl,b1 as _l,b2 as Cl,b3 as Bl,b4 as kl,b5 as Dl,b6 as Al,b7 as ml,U as Tl,b8 as wl,a6 as Ma,b as V,L as Ml,b9 as El,i as j,t as de,k as z,m as E,n as w,p as na,ba as xe,R as T,e as ge,bb as Ea,v as ze,j as We,l as sa,bc as Ze,s as I,am as ha,bd as ya,be as yl}from"../chunks/C6FDjAM0.js";import{i as Sl,c as Ll,d as Pl,n as Gl,a as Ol,b as Sa,e as Y,s as Xe,f as xl}from"../chunks/D4-iEtvf.js";import{p as W,i as Fe,b as La}from"../chunks/DWEwxHGK.js";import{i as ra}from"../chunks/D1GnaSS7.js";function Ge(e,n){return n}function Il(e,n,a){for(var l=e.items,r=[],t=n.length,o=0;o<t;o++)il(n[o].e,r,!0);var F=t>0&&r.length===0&&a!==null;if(F){var u=a.parentNode;ul(u),u.append(a),l.clear(),se(e,n[0].prev,n[t-1].next)}Fl(r,()=>{for(var d=0;d<t;d++){var b=n[d];F||(l.delete(b.k),se(e,b.prev,b.next)),Te(b.e,!F)}})}function Oe(e,n,a,l,r,t=null){var o=e,F={flags:n,items:new Map,first:null},u=(n&Ta)!==0;if(u){var d=e;o=Z?Ve(Ka(d)):d.appendChild(ka())}Z&&ja();var b=null,p=!1,v=new Map,D=Ja(()=>{var m=a();return Aa(m)?m:m==null?[]:Da(m)}),f,C;function g(){Hl(C,f,F,v,o,r,n,l,a),t!==null&&(f.length===0?b?ma(b):b=me(()=>t(o)):b!==null&&rl(b,()=>{b=null}))}la(()=>{C??=cl,f=s(D);var m=f.length;if(p&&m===0)return;p=m===0;let M=!1;if(Z){var P=el(o)===al;P!==(m===0)&&(o=da(),Ve(o),Ae(!1),M=!0)}if(Z){for(var k=null,h,i=0;i<m;i++){if(ke.nodeType===ll&&ke.data===nl){o=ke,M=!0,Ae(!1);break}var c=f[i],A=l(c,i);h=ea(ke,F,k,null,c,A,i,r,n,a),F.items.set(A,h),k=h}m>0&&Ve(da())}if(Z)m===0&&t&&(b=me(()=>t(o)));else if(sl()){var x=new Set,S=he;for(i=0;i<m;i+=1){c=f[i],A=l(c,i);var N=F.items.get(A)??v.get(A);N?(n&(He|Ie))!==0&&Pa(N,c,i,n):(h=ea(null,F,null,null,c,A,i,r,n,a,!0),v.set(A,h)),x.add(A)}for(const[G,_]of F.items)x.has(G)||S.skipped_effects.add(_.e);S.add_callback(g)}else g();M&&Ae(!0),s(D)}),Z&&(o=ke)}function Hl(e,n,a,l,r,t,o,F,u){var d=(o&fl)!==0,b=(o&(He|Ie))!==0,p=n.length,v=a.items,D=a.first,f=D,C,g=null,m,M=[],P=[],k,h,i,c;if(d)for(c=0;c<p;c+=1)k=n[c],h=F(k,c),i=v.get(h),i!==void 0&&(i.a?.measure(),(m??=new Set).add(i));for(c=0;c<p;c+=1){if(k=n[c],h=F(k,c),i=v.get(h),i===void 0){var A=l.get(h);if(A!==void 0){l.delete(h),v.set(h,A);var x=g?g.next:f;se(a,g,A),se(a,A,x),Qe(A,x,r),g=A}else{var S=f?f.e.nodes_start:r;g=ea(S,a,g,g===null?a.first:g.next,k,h,c,t,o,u)}v.set(h,g),M=[],P=[],f=g.next;continue}if(b&&Pa(i,k,c,o),(i.e.f&Ue)!==0&&(ma(i.e),d&&(i.a?.unfix(),(m??=new Set).delete(i))),i!==f){if(C!==void 0&&C.has(i)){if(M.length<P.length){var N=P[0],G;g=N.prev;var _=M[0],B=M[M.length-1];for(G=0;G<M.length;G+=1)Qe(M[G],N,r);for(G=0;G<P.length;G+=1)C.delete(P[G]);se(a,_.prev,B.next),se(a,g,_),se(a,B,N),f=N,g=B,c-=1,M=[],P=[]}else C.delete(i),Qe(i,f,r),se(a,i.prev,i.next),se(a,i,g===null?a.first:g.next),se(a,g,i),g=i;continue}for(M=[],P=[];f!==null&&f.k!==h;)(f.e.f&Ue)===0&&(C??=new Set).add(f),P.push(f),f=f.next;if(f===null)continue;i=f}M.push(i),g=i,f=i.next}if(f!==null||C!==void 0){for(var L=C===void 0?[]:Da(C);f!==null;)(f.e.f&Ue)===0&&L.push(f),f=f.next;var U=L.length;if(U>0){var q=(o&Ta)!==0&&p===0?r:null;if(d){for(c=0;c<U;c+=1)L[c].a?.measure();for(c=0;c<U;c+=1)L[c].a?.fix()}Il(a,L,q)}}d&&dl(()=>{if(m!==void 0)for(i of m)i.a?.apply()}),e.first=a.first&&a.first.e,e.last=g&&g.e;for(var ee of l.values())Te(ee.e);l.clear()}function Pa(e,n,a,l){(l&He)!==0&&fa(e.v,n),(l&Ie)!==0?fa(e.i,a):e.i=a}function ea(e,n,a,l,r,t,o,F,u,d,b){var p=(u&He)!==0,v=(u&tl)===0,D=p?v?H(r,!1,!1):va(r):r,f=(u&Ie)===0?o:va(o),C={i:f,v:D,k:t,a:null,e:null,prev:a,next:l};try{if(e===null){var g=document.createDocumentFragment();g.append(e=ka())}return C.e=me(()=>F(e,D,f,d),Z),C.e.prev=a&&a.e,C.e.next=l&&l.e,a===null?b||(n.first=C):(a.next=C,a.e.next=C.e),l!==null&&(l.prev=C,l.e.prev=C.e),C}finally{}}function Qe(e,n,a){for(var l=e.next?e.next.e.nodes_start:a,r=n?n.e.nodes_start:a,t=e.e.nodes_start;t!==null&&t!==l;){var o=ol(t);r.before(t),t=o}}function se(e,n,a){n===null?e.first=a:(n.next=a,n.e.next=a&&a.e),a!==null&&(a.prev=n,a.e.prev=n&&n.e)}function Nl(e,n){var a=void 0,l;la(()=>{a!==(a=n())&&(l&&(Te(l),l=null),a&&(l=me(()=>{wa(()=>a(e))})))})}function Ga(e){var n,a,l="";if(typeof e=="string"||typeof e=="number")l+=e;else if(typeof e=="object")if(Array.isArray(e)){var r=e.length;for(n=0;n<r;n++)e[n]&&(a=Ga(e[n]))&&(l&&(l+=" "),l+=a)}else for(a in e)e[a]&&(l&&(l+=" "),l+=a);return l}function Rl(){for(var e,n,a=0,l="",r=arguments.length;a<r;a++)(e=arguments[a])&&(n=Ga(e))&&(l&&(l+=" "),l+=n);return l}function ql(e){return typeof e=="object"?Rl(e):e??""}const ga=[...` 	
\r\f \v\uFEFF`];function Yl(e,n,a){var l=e==null?"":""+e;if(n&&(l=l?l+" "+n:n),a){for(var r in a)if(a[r])l=l?l+" "+r:r;else if(l.length)for(var t=r.length,o=0;(o=l.indexOf(r,o))>=0;){var F=o+t;(o===0||ga.includes(l[o-1]))&&(F===l.length||ga.includes(l[F]))?l=(o===0?"":l.substring(0,o))+l.substring(F+1):o=F}}return l===""?null:l}function pa(e,n=!1){var a=n?" !important;":";",l="";for(var r in e){var t=e[r];t!=null&&t!==""&&(l+=" "+r+": "+t+a)}return l}function $e(e){return e[0]!=="-"||e[1]!=="-"?e.toLowerCase():e}function Vl(e,n){if(n){var a="",l,r;if(Array.isArray(n)?(l=n[0],r=n[1]):l=n,e){e=String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();var t=!1,o=0,F=!1,u=[];l&&u.push(...Object.keys(l).map($e)),r&&u.push(...Object.keys(r).map($e));var d=0,b=-1;const C=e.length;for(var p=0;p<C;p++){var v=e[p];if(F?v==="/"&&e[p-1]==="*"&&(F=!1):t?t===v&&(t=!1):v==="/"&&e[p+1]==="*"?F=!0:v==='"'||v==="'"?t=v:v==="("?o++:v===")"&&o--,!F&&t===!1&&o===0){if(v===":"&&b===-1)b=p;else if(v===";"||p===C-1){if(b!==-1){var D=$e(e.substring(d,b).trim());if(!u.includes(D)){v!==";"&&p++;var f=e.substring(d,p).trim();a+=" "+f+";"}}d=p+1,b=-1}}}}return l&&(a+=pa(l)),r&&(a+=pa(r,!0)),a=a.trim(),a===""?null:a}return e==null?null:String(e)}function ue(e,n,a,l,r,t){var o=e.__className;if(Z||o!==a||o===void 0){var F=Yl(a,l,t);(!Z||F!==e.getAttribute("class"))&&(F==null?e.removeAttribute("class"):n?e.className=F:e.setAttribute("class",F)),e.__className=a}else if(t&&r!==t)for(var u in t){var d=!!t[u];(r==null||d!==!!r[u])&&e.classList.toggle(u,d)}return t}function Ke(e,n={},a,l){for(var r in a){var t=a[r];n[r]!==t&&(a[r]==null?e.style.removeProperty(r):e.style.setProperty(r,t,l))}}function we(e,n,a,l){var r=e.__style;if(Z||r!==n){var t=Vl(n,l);(!Z||t!==e.getAttribute("style"))&&(t==null?e.removeAttribute("style"):e.style.cssText=t),e.__style=n}else l&&(Array.isArray(l)?(Ke(e,a?.[0],l[0]),Ke(e,a?.[1],l[1],"important")):Ke(e,a,l));return l}function aa(e,n,a=!1){if(e.multiple){if(n==null)return;if(!Aa(n))return vl();for(var l of e.options)l.selected=n.includes(ba(l));return}for(l of e.options){var r=ba(l);if(hl(r,n)){l.selected=!0;return}}(!a||n!==void 0)&&(e.selectedIndex=-1)}function Ul(e){var n=new MutationObserver(()=>{aa(e,e.__value)});n.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),gl(()=>{n.disconnect()})}function ba(e){return"__value"in e?e.__value:e.value}const Pe=Symbol("class"),De=Symbol("style"),Oa=Symbol("is custom element"),xa=Symbol("is html");function Ia(e){if(Z){var n=!1,a=()=>{if(!n){if(n=!0,e.hasAttribute("value")){var l=e.value;R(e,"value",null),e.value=l}if(e.hasAttribute("checked")){var r=e.checked;R(e,"checked",null),e.checked=r}}};e.__on_r=a,Bl(a),kl()}}function zl(e,n){n?e.hasAttribute("selected")||e.setAttribute("selected",""):e.removeAttribute("selected")}function R(e,n,a,l){var r=Ha(e);Z&&(r[n]=e.getAttribute(n),n==="src"||n==="srcset"||n==="href"&&e.nodeName==="LINK")||r[n]!==(r[n]=a)&&(n==="loading"&&(e[pl]=a),a==null?e.removeAttribute(n):typeof a!="string"&&Na(e).includes(n)?e[n]=a:e.setAttribute(n,a))}function Wl(e,n,a,l,r=!1,t=!1){if(Z&&r&&e.tagName==="INPUT"){var o=e,F=o.type==="checkbox"?"defaultChecked":"defaultValue";F in a||Ia(o)}var u=Ha(e),d=u[Oa],b=!u[xa];let p=Z&&d;p&&Ae(!1);var v=n||{},D=e.tagName==="OPTION";for(var f in n)f in a||(a[f]=null);a.class?a.class=ql(a.class):a.class=null,a[De]&&(a.style??=null);var C=Na(e);for(const i in a){let c=a[i];if(D&&i==="value"&&c==null){e.value=e.__value="",v[i]=c;continue}if(i==="class"){var g=e.namespaceURI==="http://www.w3.org/1999/xhtml";ue(e,g,c,l,n?.[Pe],a[Pe]),v[i]=c,v[Pe]=a[Pe];continue}if(i==="style"){we(e,c,n?.[De],a[De]),v[i]=c,v[De]=a[De];continue}var m=v[i];if(!(c===m&&!(c===void 0&&e.hasAttribute(i)))){v[i]=c;var M=i[0]+i[1];if(M!=="$$")if(M==="on"){const A={},x="$$"+i;let S=i.slice(2);var P=Ol(S);if(Sl(S)&&(S=S.slice(0,-7),A.capture=!0),!P&&m){if(c!=null)continue;e.removeEventListener(S,v[x],A),v[x]=null}if(c!=null)if(P)e[`__${S}`]=c,Pl([S]);else{let N=function(G){v[i].call(this,G)};v[x]=Ll(S,e,N,A)}else P&&(e[`__${S}`]=void 0)}else if(i==="style")R(e,i,c);else if(i==="autofocus")ml(e,!!c);else if(!d&&(i==="__value"||i==="value"&&c!=null))e.value=e.__value=c;else if(i==="selected"&&D)zl(e,c);else{var k=i;b||(k=Gl(k));var h=k==="defaultValue"||k==="defaultChecked";if(c==null&&!d&&!h)if(u[i]=null,k==="value"||k==="checked"){let A=e;const x=n===void 0;if(k==="value"){let S=A.defaultValue;A.removeAttribute(k),A.defaultValue=S,A.value=A.__value=x?S:null}else{let S=A.defaultChecked;A.removeAttribute(k),A.defaultChecked=S,A.checked=x?S:!1}}else e.removeAttribute(i);else h||C.includes(k)&&(d||typeof c!="string")?(e[k]=c,k in u&&(u[k]=Tl)):typeof c!="function"&&R(e,k,c)}}}return p&&Ae(!0),v}function Zl(e,n,a=[],l=[],r,t=!1,o=!1){Dl(a,l,F=>{var u=void 0,d={},b=e.nodeName==="SELECT",p=!1;if(la(()=>{var D=n(...F.map(s)),f=Wl(e,u,D,r,t,o);p&&b&&"value"in D&&aa(e,D.value);for(let g of Object.getOwnPropertySymbols(d))D[g]||Te(d[g]);for(let g of Object.getOwnPropertySymbols(D)){var C=D[g];g.description===Al&&(!u||C!==u[g])&&(d[g]&&Te(d[g]),d[g]=me(()=>Nl(e,()=>C))),f[g]=C}u=f}),b){var v=e;wa(()=>{aa(v,u.value,!0),Ul(v)})}p=!0})}function Ha(e){return e.__attributes??={[Oa]:e.nodeName.includes("-"),[xa]:e.namespaceURI===bl}}var _a=new Map;function Na(e){var n=e.getAttribute("is")||e.nodeName,a=_a.get(n);if(a)return a;_a.set(n,a=[]);for(var l,r=e,t=Element.prototype;t!==r;){l=Cl(r);for(var o in l)l[o].set&&a.push(o);r=_l(r)}return a}function Xl(e,n,a=n){var l=new WeakSet;wl(e,"input",async r=>{var t=r?e.defaultValue:e.value;if(t=je(e)?Je(t):t,a(t),he!==null&&l.add(he),await Ma(),t!==(t=n())){var o=e.selectionStart,F=e.selectionEnd;e.value=t??"",F!==null&&(e.selectionStart=o,e.selectionEnd=Math.min(F,e.value.length))}}),(Z&&e.defaultValue!==e.value||V(n)==null&&e.value)&&(a(je(e)?Je(e.value):e.value),he!==null&&l.add(he)),Ml(()=>{var r=n();if(e===document.activeElement){var t=El??he;if(l.has(t))return}je(e)&&r===Je(e.value)||e.type==="date"&&!r&&!e.value||r!==e.value&&(e.value=r??"")})}function je(e){var n=e.type;return n==="number"||n==="range"}function Je(e){return e===""?null:+e}var Ql=j('<div class="square svelte-gxsx5p"></div>');function Ra(e,n){let a=W(n,"color",8,"#000");var l=Ql();de(()=>we(l,`--color: ${a()??""}`)),z(e,l)}var $l=j('<div class="circle svelte-r5z0cw"></div>');function qa(e,n){let a=W(n,"color",8,"#000");var l=$l();de(()=>we(l,`--color: ${a()??""}`)),z(e,l)}var Kl=j('<div class="quarter-container svelte-19hi45o" style="margin-top: -25%"><svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none"><path d="M 0,0 L 100,0 A 100,100 0 0,1 0,100 Z" stroke="none"></path></svg></div>');function Ya(e,n){let a=W(n,"color",8,"#000"),l=W(n,"rotation",8,0);var r=Kl(),t=E(r),o=E(t);w(t),w(r),de(()=>{R(o,"fill",a()),R(o,"transform",`rotate(${l()*90}, 50, 50)`)}),z(e,r)}const jl=`Part,Color,Quantity,Is Spare
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
`,Jl=`Part,Color,Quantity,Is Spare
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
`,en=`Part,Color,Quantity,Is Spare
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
`,an=`Part,Color,Quantity,Is Spare
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
`,ln=`Part,Color,Quantity,Is Spare
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
`,nn=`Part,Color,Quantity,Is Spare
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
`,sn=`id,name,rgb,is_trans,num_parts,num_sets,y1,y2
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
`,Ca=Object.assign({"../../data/sets/rebrickable_parts_41809-1-hedwig-pencil-holder.csv":jl,"../../data/sets/rebrickable_parts_41904-1-animal-picture-holders.csv":Jl,"../../data/sets/rebrickable_parts_41935-1-lots-of-dots.csv":en,"../../data/sets/rebrickable_parts_41950-1-lots-of-dots-lettering.csv":an,"../../data/sets/rebrickable_parts_41957-1-adhesive-patches-mega-pack.csv":ln,"../../data/sets/rebrickable_parts_41961-1-designer-toolkit-patterns.csv":nn});function rn(e){const n=e.trim().split(`
`);return n[0].split(","),n.slice(1).map(a=>{const l=a.split(",");return{id:Number(l[0]),name:l[1],rgb:`#${l[2]}`,is_trans:l[3]==="True"}})}function tn(e){let n=0,a=0,l=0;e.length===7?(n=parseInt(e.slice(1,3),16),a=parseInt(e.slice(3,5),16),l=parseInt(e.slice(5,7),16)):e.length===4&&(n=parseInt(e[1]+e[1],16),a=parseInt(e[2]+e[2],16),l=parseInt(e[3]+e[3],16)),n/=255,a/=255,l/=255;const r=Math.max(n,a,l),t=Math.min(n,a,l);let o=0,F=0,u=(r+t)/2;if(r!==t){const d=r-t;switch(F=u>.5?d/(2-r-t):d/(r+t),r){case n:o=(a-l)/d+(a<l?6:0);break;case a:o=(l-n)/d+2;break;case l:o=(n-a)/d+4;break}o/=6}return{h:o*360,s:F*100,l:u*100}}function on(e,n=15,a=5){const l={},r=new Set;for(const u of e){const d=u.s<10?999:Math.floor(u.h/n);l[d]||(l[d]=[]),r.has(u.rgb)||(l[d].push(u),r.add(u.rgb))}Object.values(l).forEach(u=>u.sort((d,b)=>d.l-b.l));const o=Object.keys(l).map(Number).sort((u,d)=>u-d).flatMap(u=>l[u]),F=[];for(let u=0;u<o.length;u+=a)F.push(o.slice(u,u+a));return F}function un(){const e=new Set;for(const n in Ca){const l=Ca[n].trim().split(`
`);for(const r of l.slice(1)){const t=r.split(",");if(t.length>1){const o=Number(t[1]);isNaN(o)||e.add(o)}}}return e}const Fn=un(),ie=rn(sn).filter(e=>Fn.has(e.id));function cn(){return ie.map(e=>{const n=tn(e.rgb);return{...e,...n}})}const dn=on(cn());var fn=j('<div class="cell svelte-1w4104m" role="button" tabindex="0"><!></div>'),vn=j("<div><div></div></div>");function Ba(e,n){na(n,!1);const a=Sa();let l=W(n,"grid",8,null),r=W(n,"width",8,32),t=W(n,"height",8,32),o=W(n,"selectedShape",8,"square"),F=W(n,"selectedColor",24,()=>ie.length>0?ie[0].rgb:"#000000"),u=W(n,"paintMode",8,!1),d=W(n,"colorPickerMode",8,!1),b=W(n,"toolbarPosition",8,"left"),p=H(),v=W(n,"zoom",12,1),D=H(0),f=H(0),C=H(!1),g=H(0),m=H(0),M=H();function P(_){if(_.ctrlKey)return;_.preventDefault();const B=.1;let L=v();_.deltaY<0?L=Math.min(v()+B,5):_.deltaY>0&&(L=Math.max(v()-B,.2)),L!==v()&&v(L)}function k(_){_.button===0&&(T(C,!0),T(g,_.clientX),T(m,_.clientY),window.addEventListener("mousemove",h),window.addEventListener("mouseup",i),_.preventDefault())}function h(_){s(C)&&(T(D,s(D)+(_.clientX-s(g))),T(f,s(f)+(_.clientY-s(m))),T(g,_.clientX),T(m,_.clientY))}function i(){T(C,!1),window.removeEventListener("mousemove",h),window.removeEventListener("mouseup",i)}let c=H(v());function A(_){const B=s(p)[_];if(!B)return x(_);const{shape:L,color:U}=B;if(L===o()&&U===F())return;const q=[_],ee=new Set;for(;q.length;){const O=q.pop();if(O===void 0||ee.has(O))continue;ee.add(O);const K=s(p)[O];if(!K||K.shape!==L||K.color!==U)continue;Ze(p,s(p)[O]={shape:o(),color:F(),rotation:0});const ae=O%r(),fe=Math.floor(O/r());ae>0&&q.push(O-1),ae<r()-1&&q.push(O+1),fe>0&&q.push(O-r()),fe<t()-1&&q.push(O+r())}T(p,[...s(p)])}function x(_){const B=s(p)[_];B&&B.shape==="quarter"&&B.color===F()?Ze(p,s(p)[_]={...B,rotation:(B.rotation+1)%4}):Ze(p,s(p)[_]={shape:o(),color:F(),rotation:0}),T(p,[...s(p)])}function S(_){const B=s(p)[_];B&&B.color&&a("colorPicked",{color:B.color})}xe(()=>(ge(l()),ge(r()),ge(t())),()=>{T(p,l()||Array(r()*t()).fill(null))}),xe(()=>(ge(v()),s(c),s(M),s(D),s(f)),()=>{if(v()!==s(c)&&s(M)){const _=s(M).parentElement;if(_){const B=_.getBoundingClientRect(),L=B.left+B.width/2,U=B.top+B.height/2,q=s(M).getBoundingClientRect(),ee=q.left+q.width/2,O=q.top+q.height/2,K=L-ee,ae=U-O;T(D,s(D)+(K-K*(v()/s(c)))),T(f,s(f)+(ae-ae*(v()/s(c))))}T(c,v())}}),Ea(),ra();var N=vn(),G=E(N);Zl(G,()=>({class:"grid",role:"application","aria-label":"Drawing canvas",tabindex:"0",style:`--width: ${r()??""}; --height: ${t()??""}; transform: translate(${s(D)??""}px, ${s(f)??""}px) scale(${v()??""}); cursor: ${s(C)?"grabbing":"grab"}; user-select: none; touch-action: none;`,"on:mousedown":k,"on:keydown":_=>{_.key===" "&&(_.preventDefault(),k({button:0,clientX:s(g),clientY:s(m),preventDefault:()=>{}}))},"on:keyup":_=>{_.key===" "&&(_.preventDefault(),i())},"on:wheel":P}),void 0,void 0,"svelte-1w4104m"),Oe(G,5,()=>s(p),Ge,(_,B,L)=>{var U=fn(),q=E(U);{var ee=O=>{var K=ze(),ae=We(K);{var fe=re=>{Ra(re,{get color(){return s(B),V(()=>s(B).color)}})},pe=re=>{var be=ze(),Me=We(be);{var ce=le=>{qa(le,{get color(){return s(B),V(()=>s(B).color)}})},Ee=le=>{var ve=ze(),ye=We(ve);{var _e=Ce=>{Ya(Ce,{get color(){return s(B),V(()=>s(B).color)},get rotation(){return s(B),V(()=>s(B).rotation)}})};Fe(ye,Ce=>{s(B),V(()=>s(B).shape==="quarter")&&Ce(_e)},!0)}z(le,ve)};Fe(Me,le=>{s(B),V(()=>s(B).shape==="circle")?le(ce):le(Ee,!1)},!0)}z(re,be)};Fe(ae,re=>{s(B),V(()=>s(B).shape==="square")?re(fe):re(pe,!1)})}z(O,K)};Fe(q,O=>{s(B)&&O(ee)})}w(U),Y("click",U,()=>d()?S(L):u()?A(L):x(L)),Y("keydown",U,O=>{O.key==="Enter"&&(d()?S(L):u()?A(L):x(L))}),z(_,U)}),w(G),La(G,_=>T(M,_),()=>s(M)),w(N),de(()=>ue(N,1,`container ${b()==="left"?"toolbar-left-margin":"toolbar-top-margin"}`,"svelte-1w4104m")),Y("mousedown",G,k),Y("keydown",G,_=>{_.key===" "&&(_.preventDefault(),k({button:0,clientX:s(g),clientY:s(m),preventDefault:()=>{}}))}),Y("keyup",G,_=>{_.key===" "&&(_.preventDefault(),i())}),Y("wheel",G,P),z(e,N),sa()}var hn=ya('<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#555" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align: middle;"><polyline points="4 12 4 4 12 4"></polyline><line x1="4" y1="4" x2="20" y2="20"></line></svg>'),gn=ya('<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#555" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align: middle;"><polyline points="12 4 20 4 20 12"></polyline><line x1="4" y1="4" x2="20" y2="20"></line></svg>'),pn=j('<button type="button" class="dropdown-item" style="display: flex; align-items: center; width: 100%; background: none; border: none; padding: 0; text-align: left; cursor: pointer;"><span class="dropdown-swatch"></span> <span> </span> <span style="margin-left:auto; color:#888; font-size:0.9em"> </span></button>'),bn=j('<div class="dropdown-item">No colors found</div>'),_n=j('<div class="dropdown-menu"><input type="text" placeholder="Search color..." class="dropdown-search"/> <div class="dropdown-list"><!> <!></div></div>'),Cn=j('<button type="button"></button>'),Bn=j('<div class="palette-row"></div>'),kn=j('<div><button class="toolbar-toggle"><!></button> <div class="shape-group"><div class="group-label">Shapes</div> <div class="shape-grid"><button aria-label="Square" title="Square - Draw square shapes"><div class="shape-icon"><!></div></button> <button aria-label="Circle" title="Circle - Draw circular shapes"><div class="shape-icon"><!></div></button> <button aria-label="Quarter" title="Quarter - Draw quarter tile shapes"><div class="shape-icon"><!></div></button></div></div> <div class="tool-group"><div class="group-label">Tools</div> <div class="tool-grid"><button type="button" aria-label="Zoom in" class="tool-button" title="Zoom In"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#555" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="11" y1="8" x2="11" y2="14"></line><line x1="8" y1="11" x2="14" y2="11"></line><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg></button> <button type="button" aria-label="Zoom out" class="tool-button" title="Zoom Out"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#555" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="8" y1="11" x2="14" y2="11"></line><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg></button> <button type="button" aria-label="Paint roller tool" title="Fill Tool - Fill areas with selected color"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="4" width="10" height="4" rx="1.5"></rect><path d="M16 6v4c0 1-1 2-2 2H10c-1 0-2-1-2-2V6"></path><rect x="11" y="14" width="2" height="5" rx="1"></rect><path d="M12 12v2"></path></svg></button> <button type="button" aria-label="Pick color from canvas" title="Color Picker - Click to pick colors from the canvas"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="7" stroke-width="2"></circle><path d="M12 9v3l2 2" stroke-width="2"></path></svg></button></div></div> <div class="color-dropdown-container"><button type="button" class="dropdown-toggle"> <span style="margin-left:0.5em;">▼</span></button> <!></div> <div class="colors"><div class="palette2d"></div></div> <div class="image-upload"><label class="upload-label"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#555" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align: middle;"><path d="M12 16V4"></path><polyline points="8 8 12 4 16 8"></polyline><rect x="4" y="16" width="16" height="4" rx="2"></rect></svg> <span>Upload image</span> <input type="file" accept="image/png, image/jpeg"/></label></div></div>');function Dn(e,n){na(n,!1);let a=H(null),l=H(!1),r=W(n,"colorPickerMode",12,!1);function t(){T(l,!s(l)),s(l)&&r(!1),u("paintModeToggled",{paintMode:s(l)})}function o(){r(!r()),r()&&T(l,!1),u("colorPickerModeToggled",{colorPickerMode:r()})}function F(y){b(y),u("colorSelected",{color:y})}const u=Sa();let d=W(n,"selectedShape",12,"square"),b=W(n,"selectedColor",28,()=>ie.length>0?ie[0].rgb:"#000000");function p(y){d(y),u("shapeSelected",{shape:y})}function v(y){const X=y.target,$=X.files&&X.files[0];if($){const ne=new FileReader;ne.onload=()=>{u("imageUploaded",{src:ne.result})},ne.readAsDataURL($)}}let D=H(""),f=H(!1),C=ie,g=H(C);function m(y){b(y.rgb),T(f,!1),T(D,""),u("colorSelected",{color:y.rgb})}let M=H("left");function P(){T(M,s(M)==="left"?"top":"left")}xe(()=>(s(f),s(a)),()=>{s(f)&&Ma().then(()=>{s(a)?.focus()})}),xe(()=>s(D),()=>{T(g,s(D).trim()?C.filter(y=>y.name.toLowerCase().includes(s(D).toLowerCase())||y.rgb.replace("#","").includes(s(D).replace("#",""))):C)}),Ea(),ra();var k=kn(),h=E(k),i=E(h);{var c=y=>{var X=hn();z(y,X)},A=y=>{var X=gn();z(y,X)};Fe(i,y=>{s(M)==="left"?y(c):y(A,!1)})}w(h);var x=I(h,2),S=I(E(x),2),N=E(S);let G;var _=E(N),B=E(_);Ra(B,{get color(){return b()}}),w(_),w(N);var L=I(N,2);let U;var q=E(L),ee=E(q);qa(ee,{get color(){return b()}}),w(q),w(L);var O=I(L,2);let K;var ae=E(O),fe=E(ae);Ya(fe,{get color(){return b()},rotation:0}),w(ae),w(O),w(S),w(x);var pe=I(x,2),re=I(E(pe),2),be=E(re),Me=I(be,2),ce=I(Me,2);let Ee;var le=E(ce),ve=E(le),ye=I(ve),_e=I(ye),Ce=I(_e);w(le),w(ce);var Se=I(ce,2);let ta;var Ne=E(Se),Va=E(Ne);ha(),w(Ne),w(Se),w(re),w(pe);var Re=I(pe,2),Le=E(Re),Ua=E(Le);ha(),w(Le);var za=I(Le,2);{var Wa=y=>{var X=_n(),$=E(X);Ia($),La($,oe=>T(a,oe),()=>s(a));var ne=I($,2),Q=E(ne);Oe(Q,1,()=>s(g),Ge,(oe,J)=>{var Be=pn(),Fa=E(Be),Ye=I(Fa,2),Qa=E(Ye,!0);w(Ye);var ca=I(Ye,2),$a=E(ca,!0);w(ca),w(Be),de(()=>{R(Be,"aria-label",(s(J),V(()=>`Select color ${s(J).name}`))),we(Fa,`background:${s(J),V(()=>s(J).rgb)??""}`),Xe(Qa,(s(J),V(()=>s(J).name))),Xe($a,(s(J),V(()=>s(J).rgb)))}),Y("click",Be,()=>m(s(J))),z(oe,Be)});var te=I(Q,2);{var Xa=oe=>{var J=bn();z(oe,J)};Fe(te,oe=>{s(g),V(()=>s(g).length===0)&&oe(Xa)})}w(ne),w(X),Xl($,()=>s(D),oe=>T(D,oe)),z(y,X)};Fe(za,y=>{s(f)&&y(Wa)})}w(Re);var qe=I(Re,2),oa=E(qe);Oe(oa,5,()=>dn,Ge,(y,X)=>{var $=Bn();Oe($,5,()=>s(X),Ge,(ne,Q)=>{var te=Cn();de(()=>{we(te,`width: 1.5rem; height: 1.5rem; background: ${s(Q),V(()=>s(Q).rgb)??""}; border: 2px solid ${ge(b()),s(Q),V(()=>b()===s(Q).rgb?"#333":"#ccc")??""}; border-radius: 0.25rem; cursor: pointer; margin: 0 0.1rem 0.1rem 0;`),R(te,"aria-label",(s(Q),V(()=>s(Q).name))),R(te,"title",(s(Q),V(()=>s(Q).name)))}),Y("click",te,()=>F(s(Q).rgb)),z(ne,te)}),w($),z(y,$)}),w(oa),w(qe);var ia=I(qe,2),ua=E(ia),Za=I(E(ua),4);w(ua),w(ia),w(k),de((y,X,$,ne,Q,te)=>{ue(k,1,`toolbar ${s(M)??""}`),R(h,"aria-label",s(M)==="left"?"Move toolbar to top":"Move toolbar to left"),G=ue(N,1,"shape-button",null,G,y),U=ue(L,1,"shape-button",null,U,X),K=ue(O,1,"shape-button",null,K,$),Ee=ue(ce,1,"tool-button",null,Ee,ne),R(le,"stroke",s(l)?"#333":"#888"),R(ve,"fill",s(l)?"#f4d23e":"#fff"),R(ve,"stroke",s(l)?"#333":"#888"),R(ye,"stroke",s(l)?"#333":"#888"),R(_e,"fill",s(l)?"#f4d23e":"#fff"),R(_e,"stroke",s(l)?"#333":"#888"),R(Ce,"stroke",s(l)?"#333":"#888"),ta=ue(Se,1,"tool-button",null,ta,Q),R(Ne,"stroke",r()?"#333":"#888"),R(Va,"fill",r()?"#aef":"#fff"),Xe(Ua,`${te??""} `)},[()=>({selected:d()==="square"}),()=>({selected:d()==="circle"}),()=>({selected:d()==="quarter"}),()=>({active:s(l)}),()=>({active:r()}),()=>(ge(b()),V(()=>b()?C.find(y=>y.rgb===b())?.name||b():"Select color..."))]),Y("click",h,P),Y("click",N,()=>p("square")),Y("click",L,()=>p("circle")),Y("click",O,()=>p("quarter")),Y("click",be,()=>u("zoomIn")),Y("click",Me,()=>u("zoomOut")),Y("click",ce,t),Y("click",Se,o),Y("click",Le,()=>T(f,!s(f))),Y("change",Za,v),z(e,k),sa()}function An(e){e=e.replace(/^#/,""),e.length===3&&(e=e.split("").map(a=>a+a).join(""));const n=parseInt(e,16);return{r:n>>16&255,g:n>>8&255,b:n&255}}function mn(e,n,a,l){let r=l[0],t=1/0;for(const o of l){const F=An(o),u=Math.sqrt(Math.pow(e-F.r,2)+Math.pow(n-F.g,2)+Math.pow(a-F.b,2));u<t&&(t=u,r=o)}return r}function Tn(e){return e<85?"square":e<170?"quarter":"circle"}function wn(e,n,a=32,l=32){return new Promise((r,t)=>{const o=new window.Image;o.src=e,o.onload=()=>{const F=document.createElement("canvas"),u=F.getContext("2d");if(F.width=a,F.height=l,!u){t(new Error("Could not get 2D context"));return}u.drawImage(o,0,0,a,l);const d=u.getImageData(0,0,a,l).data,b=[];for(let p=0;p<d.length;p+=4){const v=p/4,D=v%a,f=Math.floor(v/a);let C=d[p],g=d[p+1],m=d[p+2];d[p+3]===0&&(C=255,g=255,m=255);const P=(C+g+m)/3;let k=Tn(P),h=0;const i=f===0,c=f===l-1,A=D===0,x=D===a-1;k==="quarter"&&(i||c||A||x)?i?h=2:c?h=0:A?h=1:x&&(h=3):k==="quarter"&&(k=P<128?"square":"circle");const S=mn(C,g,m,n);b.push({shape:k,color:S,rotation:h})}r(b)},o.onerror=t})}var Mn=j('<main class="svelte-1uha8ag"><!> <!></main>');function On(e,n){na(n,!1);let a=H("square"),l=H(ie.length>0?ie[0].rgb:"#000000"),r=H(null),t=H(!1),o=H("left"),F=H(1);function u(){T(F,Math.min(s(F)+.1,3))}function d(){T(F,Math.max(s(F)-.1,.2))}let b=H(!1);function p(h){T(a,h.detail.shape)}function v(h){T(l,h.detail.color)}async function D(h){const i=ie.map(c=>c.rgb);T(r,await wn(h.detail.src,i,32,32))}function f(h){T(b,h.detail.colorPickerMode)}function C(h){T(l,h.detail.color),T(b,!1)}ra();var g=Mn();xl(h=>{yl.title="Dotsly"});var m=E(g);Dn(m,{get toolbarPosition(){return s(o)},set toolbarPosition(h){T(o,h)},get selectedColor(){return s(l)},set selectedColor(h){T(l,h)},$$events:{shapeSelected:p,colorSelected:v,imageUploaded:D,paintModeToggled:h=>T(t,h.detail.paintMode),colorPickerModeToggled:f,zoomIn:u,zoomOut:d},$$legacy:!0});var M=I(m,2);{var P=h=>{Ba(h,{width:32,height:32,get selectedShape(){return s(a)},get selectedColor(){return s(l)},get grid(){return s(r)},get paintMode(){return s(t)},get colorPickerMode(){return s(b)},get toolbarPosition(){return s(o)},get zoom(){return s(F)},$$events:{colorPicked:C}})},k=h=>{Ba(h,{width:32,height:32,get selectedShape(){return s(a)},get selectedColor(){return s(l)},get paintMode(){return s(t)},get colorPickerMode(){return s(b)},get toolbarPosition(){return s(o)},get zoom(){return s(F)},$$events:{colorPicked:C}})};Fe(M,h=>{s(r)?h(P):h(k,!1)})}w(g),z(e,g),sa()}export{On as component};
