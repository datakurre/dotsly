import"../chunks/DsnmJJEf.js";import"../chunks/BcbL0YC6.js";import{B as Da,w as na,z as ze,o as z,ay as ja,q as Ja,g as r,W as el,x as al,H as ll,y as fa,A as Te,J as Ae,ad as nl,aG as rl,C as we,F as sl,D as pe,ac as va,a4 as G,aa as ha,aD as Aa,av as ma,aR as Re,G as Ta,I as tl,aS as qe,aT as ol,aU as We,al as Me,ar as il,aV as ul,aC as Fl,aW as cl,T as dl,aX as wa,M as fl,aY as vl,K as Ma,aZ as hl,a_ as gl,at as pl,a$ as bl,b0 as Cl,b1 as _l,b2 as Bl,b3 as kl,b4 as Dl,b5 as Al,b6 as ml,b7 as Tl,U as wl,b8 as Ml,a6 as Ea,b as N,L as El,b9 as yl,i as ee,t as ge,k as V,m as y,n as w,p as ra,ba as Ie,R as k,e as be,bb as ya,v as Ze,j as Qe,l as sa,bc as Le,s as I,am as ga,bd as Pa,be as Pl}from"../chunks/C6FDjAM0.js";import{i as Sl,c as Ll,d as Gl,n as Ol,a as xl,b as Sa,e as H,s as Xe,f as Il}from"../chunks/D4-iEtvf.js";import{p as Y,i as ve,b as La}from"../chunks/DWEwxHGK.js";import{i as ta}from"../chunks/D1GnaSS7.js";function Oe(e,n){return n}function Rl(e,n,a){for(var l=e.items,s=[],t=n.length,o=0;o<t;o++)ul(n[o].e,s,!0);var c=t>0&&s.length===0&&a!==null;if(c){var F=a.parentNode;Fl(F),F.append(a),l.clear(),se(e,n[0].prev,n[t-1].next)}cl(s,()=>{for(var f=0;f<t;f++){var p=n[f];c||(l.delete(p.k),se(e,p.prev,p.next)),Me(p.e,!c)}})}function xe(e,n,a,l,s,t=null){var o=e,c={flags:n,items:new Map,first:null},F=(n&wa)!==0;if(F){var f=e;o=z?ze(ja(f)):f.appendChild(Da())}z&&Ja();var p=null,C=!1,d=new Map,D=el(()=>{var A=a();return ma(A)?A:A==null?[]:Aa(A)}),v,b;function h(){ql(b,v,c,d,o,s,n,l,a),t!==null&&(v.length===0?p?Ta(p):p=we(()=>t(o)):p!==null&&tl(p,()=>{p=null}))}na(()=>{b??=dl,v=r(D);var A=v.length;if(C&&A===0)return;C=A===0;let P=!1;if(z){var M=al(o)===ll;M!==(A===0)&&(o=fa(),ze(o),Te(!1),P=!0)}if(z){for(var m=null,T,u=0;u<A;u++){if(Ae.nodeType===nl&&Ae.data===rl){o=Ae,P=!0,Te(!1);break}var i=v[u],B=l(i,u);T=aa(Ae,c,m,null,i,B,u,s,n,a),c.items.set(B,T),m=T}A>0&&ze(fa())}if(z)A===0&&t&&(p=we(()=>t(o)));else if(sl()){var L=new Set,S=pe;for(u=0;u<A;u+=1){i=v[u],B=l(i,u);var U=c.items.get(B)??d.get(B);U?(n&(qe|Re))!==0&&Ga(U,i,u,n):(T=aa(null,c,null,null,i,B,u,s,n,a,!0),d.set(B,T)),L.add(B)}for(const[R,j]of c.items)L.has(R)||S.skipped_effects.add(j.e);S.add_callback(h)}else h();P&&Te(!0),r(D)}),z&&(o=Ae)}function ql(e,n,a,l,s,t,o,c,F){var f=(o&vl)!==0,p=(o&(qe|Re))!==0,C=n.length,d=a.items,D=a.first,v=D,b,h=null,A,P=[],M=[],m,T,u,i;if(f)for(i=0;i<C;i+=1)m=n[i],T=c(m,i),u=d.get(T),u!==void 0&&(u.a?.measure(),(A??=new Set).add(u));for(i=0;i<C;i+=1){if(m=n[i],T=c(m,i),u=d.get(T),u===void 0){var B=l.get(T);if(B!==void 0){l.delete(T),d.set(T,B);var L=h?h.next:v;se(a,h,B),se(a,B,L),Ke(B,L,s),h=B}else{var S=v?v.e.nodes_start:s;h=aa(S,a,h,h===null?a.first:h.next,m,T,i,t,o,F)}d.set(T,h),P=[],M=[],v=h.next;continue}if(p&&Ga(u,m,i,o),(u.e.f&We)!==0&&(Ta(u.e),f&&(u.a?.unfix(),(A??=new Set).delete(u))),u!==v){if(b!==void 0&&b.has(u)){if(P.length<M.length){var U=M[0],R;h=U.prev;var j=P[0],W=P[P.length-1];for(R=0;R<P.length;R+=1)Ke(P[R],U,s);for(R=0;R<M.length;R+=1)b.delete(M[R]);se(a,j.prev,W.next),se(a,h,j),se(a,W,U),v=U,h=W,i-=1,P=[],M=[]}else b.delete(u),Ke(u,v,s),se(a,u.prev,u.next),se(a,u,h===null?a.first:h.next),se(a,h,u),h=u;continue}for(P=[],M=[];v!==null&&v.k!==T;)(v.e.f&We)===0&&(b??=new Set).add(v),M.push(v),v=v.next;if(v===null)continue;u=v}P.push(u),h=u,v=u.next}if(v!==null||b!==void 0){for(var g=b===void 0?[]:Aa(b);v!==null;)(v.e.f&We)===0&&g.push(v),v=v.next;var _=g.length;if(_>0){var O=(o&wa)!==0&&C===0?s:null;if(f){for(i=0;i<_;i+=1)g[i].a?.measure();for(i=0;i<_;i+=1)g[i].a?.fix()}Rl(a,g,O)}}f&&fl(()=>{if(A!==void 0)for(u of A)u.a?.apply()}),e.first=a.first&&a.first.e,e.last=h&&h.e;for(var Z of l.values())Me(Z.e);l.clear()}function Ga(e,n,a,l){(l&qe)!==0&&va(e.v,n),(l&Re)!==0?va(e.i,a):e.i=a}function aa(e,n,a,l,s,t,o,c,F,f,p){var C=(F&qe)!==0,d=(F&ol)===0,D=C?d?G(s,!1,!1):ha(s):s,v=(F&Re)===0?o:ha(o),b={i:v,v:D,k:t,a:null,e:null,prev:a,next:l};try{if(e===null){var h=document.createDocumentFragment();h.append(e=Da())}return b.e=we(()=>c(e,D,v,f),z),b.e.prev=a&&a.e,b.e.next=l&&l.e,a===null?p||(n.first=b):(a.next=b,a.e.next=b.e),l!==null&&(l.prev=b,l.e.prev=b.e),b}finally{}}function Ke(e,n,a){for(var l=e.next?e.next.e.nodes_start:a,s=n?n.e.nodes_start:a,t=e.e.nodes_start;t!==null&&t!==l;){var o=il(t);s.before(t),t=o}}function se(e,n,a){n===null?e.first=a:(n.next=a,n.e.next=a&&a.e),a!==null&&(a.prev=n,a.e.prev=n&&n.e)}function Hl(e,n){var a=void 0,l;na(()=>{a!==(a=n())&&(l&&(Me(l),l=null),a&&(l=we(()=>{Ma(()=>a(e))})))})}function Oa(e){var n,a,l="";if(typeof e=="string"||typeof e=="number")l+=e;else if(typeof e=="object")if(Array.isArray(e)){var s=e.length;for(n=0;n<s;n++)e[n]&&(a=Oa(e[n]))&&(l&&(l+=" "),l+=a)}else for(a in e)e[a]&&(l&&(l+=" "),l+=a);return l}function Nl(){for(var e,n,a=0,l="",s=arguments.length;a<s;a++)(e=arguments[a])&&(n=Oa(e))&&(l&&(l+=" "),l+=n);return l}function Yl(e){return typeof e=="object"?Nl(e):e??""}const pa=[...` 	
\r\f \v\uFEFF`];function Vl(e,n,a){var l=e==null?"":""+e;if(n&&(l=l?l+" "+n:n),a){for(var s in a)if(a[s])l=l?l+" "+s:s;else if(l.length)for(var t=s.length,o=0;(o=l.indexOf(s,o))>=0;){var c=o+t;(o===0||pa.includes(l[o-1]))&&(c===l.length||pa.includes(l[c]))?l=(o===0?"":l.substring(0,o))+l.substring(c+1):o=c}}return l===""?null:l}function ba(e,n=!1){var a=n?" !important;":";",l="";for(var s in e){var t=e[s];t!=null&&t!==""&&(l+=" "+s+": "+t+a)}return l}function $e(e){return e[0]!=="-"||e[1]!=="-"?e.toLowerCase():e}function Ul(e,n){if(n){var a="",l,s;if(Array.isArray(n)?(l=n[0],s=n[1]):l=n,e){e=String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();var t=!1,o=0,c=!1,F=[];l&&F.push(...Object.keys(l).map($e)),s&&F.push(...Object.keys(s).map($e));var f=0,p=-1;const b=e.length;for(var C=0;C<b;C++){var d=e[C];if(c?d==="/"&&e[C-1]==="*"&&(c=!1):t?t===d&&(t=!1):d==="/"&&e[C+1]==="*"?c=!0:d==='"'||d==="'"?t=d:d==="("?o++:d===")"&&o--,!c&&t===!1&&o===0){if(d===":"&&p===-1)p=C;else if(d===";"||C===b-1){if(p!==-1){var D=$e(e.substring(f,p).trim());if(!F.includes(D)){d!==";"&&C++;var v=e.substring(f,C).trim();a+=" "+v+";"}}f=C+1,p=-1}}}}return l&&(a+=ba(l)),s&&(a+=ba(s,!0)),a=a.trim(),a===""?null:a}return e==null?null:String(e)}function fe(e,n,a,l,s,t){var o=e.__className;if(z||o!==a||o===void 0){var c=Vl(a,l,t);(!z||c!==e.getAttribute("class"))&&(c==null?e.removeAttribute("class"):n?e.className=c:e.setAttribute("class",c)),e.__className=a}else if(t&&s!==t)for(var F in t){var f=!!t[F];(s==null||f!==!!s[F])&&e.classList.toggle(F,f)}return t}function je(e,n={},a,l){for(var s in a){var t=a[s];n[s]!==t&&(a[s]==null?e.style.removeProperty(s):e.style.setProperty(s,t,l))}}function Ee(e,n,a,l){var s=e.__style;if(z||s!==n){var t=Ul(n,l);(!z||t!==e.getAttribute("style"))&&(t==null?e.removeAttribute("style"):e.style.cssText=t),e.__style=n}else l&&(Array.isArray(l)?(je(e,a?.[0],l[0]),je(e,a?.[1],l[1],"important")):je(e,a,l));return l}function la(e,n,a=!1){if(e.multiple){if(n==null)return;if(!ma(n))return hl();for(var l of e.options)l.selected=n.includes(Ca(l));return}for(l of e.options){var s=Ca(l);if(gl(s,n)){l.selected=!0;return}}(!a||n!==void 0)&&(e.selectedIndex=-1)}function zl(e){var n=new MutationObserver(()=>{la(e,e.__value)});n.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),pl(()=>{n.disconnect()})}function Ca(e){return"__value"in e?e.__value:e.value}const Ge=Symbol("class"),me=Symbol("style"),xa=Symbol("is custom element"),Ia=Symbol("is html");function Ra(e){if(z){var n=!1,a=()=>{if(!n){if(n=!0,e.hasAttribute("value")){var l=e.value;q(e,"value",null),e.value=l}if(e.hasAttribute("checked")){var s=e.checked;q(e,"checked",null),e.checked=s}}};e.__on_r=a,kl(a),Dl()}}function Wl(e,n){n?e.hasAttribute("selected")||e.setAttribute("selected",""):e.removeAttribute("selected")}function q(e,n,a,l){var s=qa(e);z&&(s[n]=e.getAttribute(n),n==="src"||n==="srcset"||n==="href"&&e.nodeName==="LINK")||s[n]!==(s[n]=a)&&(n==="loading"&&(e[bl]=a),a==null?e.removeAttribute(n):typeof a!="string"&&Ha(e).includes(n)?e[n]=a:e.setAttribute(n,a))}function Zl(e,n,a,l,s=!1,t=!1){if(z&&s&&e.tagName==="INPUT"){var o=e,c=o.type==="checkbox"?"defaultChecked":"defaultValue";c in a||Ra(o)}var F=qa(e),f=F[xa],p=!F[Ia];let C=z&&f;C&&Te(!1);var d=n||{},D=e.tagName==="OPTION";for(var v in n)v in a||(a[v]=null);a.class?a.class=Yl(a.class):a.class=null,a[me]&&(a.style??=null);var b=Ha(e);for(const u in a){let i=a[u];if(D&&u==="value"&&i==null){e.value=e.__value="",d[u]=i;continue}if(u==="class"){var h=e.namespaceURI==="http://www.w3.org/1999/xhtml";fe(e,h,i,l,n?.[Ge],a[Ge]),d[u]=i,d[Ge]=a[Ge];continue}if(u==="style"){Ee(e,i,n?.[me],a[me]),d[u]=i,d[me]=a[me];continue}var A=d[u];if(!(i===A&&!(i===void 0&&e.hasAttribute(u)))){d[u]=i;var P=u[0]+u[1];if(P!=="$$")if(P==="on"){const B={},L="$$"+u;let S=u.slice(2);var M=xl(S);if(Sl(S)&&(S=S.slice(0,-7),B.capture=!0),!M&&A){if(i!=null)continue;e.removeEventListener(S,d[L],B),d[L]=null}if(i!=null)if(M)e[`__${S}`]=i,Gl([S]);else{let U=function(R){d[u].call(this,R)};d[L]=Ll(S,e,U,B)}else M&&(e[`__${S}`]=void 0)}else if(u==="style")q(e,u,i);else if(u==="autofocus")Tl(e,!!i);else if(!f&&(u==="__value"||u==="value"&&i!=null))e.value=e.__value=i;else if(u==="selected"&&D)Wl(e,i);else{var m=u;p||(m=Ol(m));var T=m==="defaultValue"||m==="defaultChecked";if(i==null&&!f&&!T)if(F[u]=null,m==="value"||m==="checked"){let B=e;const L=n===void 0;if(m==="value"){let S=B.defaultValue;B.removeAttribute(m),B.defaultValue=S,B.value=B.__value=L?S:null}else{let S=B.defaultChecked;B.removeAttribute(m),B.defaultChecked=S,B.checked=L?S:!1}}else e.removeAttribute(u);else T||b.includes(m)&&(f||typeof i!="string")?(e[m]=i,m in F&&(F[m]=wl)):typeof i!="function"&&q(e,m,i)}}}return C&&Te(!0),d}function Ql(e,n,a=[],l=[],s,t=!1,o=!1){Al(a,l,c=>{var F=void 0,f={},p=e.nodeName==="SELECT",C=!1;if(na(()=>{var D=n(...c.map(r)),v=Zl(e,F,D,s,t,o);C&&p&&"value"in D&&la(e,D.value);for(let h of Object.getOwnPropertySymbols(f))D[h]||Me(f[h]);for(let h of Object.getOwnPropertySymbols(D)){var b=D[h];h.description===ml&&(!F||b!==F[h])&&(f[h]&&Me(f[h]),f[h]=we(()=>Hl(e,()=>b))),v[h]=b}F=v}),p){var d=e;Ma(()=>{la(d,F.value,!0),zl(d)})}C=!0})}function qa(e){return e.__attributes??={[xa]:e.nodeName.includes("-"),[Ia]:e.namespaceURI===Cl}}var _a=new Map;function Ha(e){var n=e.getAttribute("is")||e.nodeName,a=_a.get(n);if(a)return a;_a.set(n,a=[]);for(var l,s=e,t=Element.prototype;t!==s;){l=Bl(s);for(var o in l)l[o].set&&a.push(o);s=_l(s)}return a}function Xl(e,n,a=n){var l=new WeakSet;Ml(e,"input",async s=>{var t=s?e.defaultValue:e.value;if(t=Je(e)?ea(t):t,a(t),pe!==null&&l.add(pe),await Ea(),t!==(t=n())){var o=e.selectionStart,c=e.selectionEnd;e.value=t??"",c!==null&&(e.selectionStart=o,e.selectionEnd=Math.min(c,e.value.length))}}),(z&&e.defaultValue!==e.value||N(n)==null&&e.value)&&(a(Je(e)?ea(e.value):e.value),pe!==null&&l.add(pe)),El(()=>{var s=n();if(e===document.activeElement){var t=yl??pe;if(l.has(t))return}Je(e)&&s===ea(e.value)||e.type==="date"&&!s&&!e.value||s!==e.value&&(e.value=s??"")})}function Je(e){var n=e.type;return n==="number"||n==="range"}function ea(e){return e===""?null:+e}var Kl=ee('<div class="square svelte-gxsx5p"></div>');function Na(e,n){let a=Y(n,"color",8,"#000");var l=Kl();ge(()=>Ee(l,`--color: ${a()??""}`)),V(e,l)}var $l=ee('<div class="circle svelte-r5z0cw"></div>');function Ya(e,n){let a=Y(n,"color",8,"#000");var l=$l();ge(()=>Ee(l,`--color: ${a()??""}`)),V(e,l)}var jl=ee('<div class="quarter-container svelte-19hi45o"><svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none" class="svelte-19hi45o"><path d="M 0,0 L 100,0 A 100,100 0 0,1 0,100 Z" stroke="none"></path></svg></div>');function Va(e,n){let a=Y(n,"color",8,"#000"),l=Y(n,"rotation",8,0);var s=jl(),t=y(s),o=y(t);w(t),w(s),ge(()=>{q(o,"fill",a()),q(o,"transform",`rotate(${l()*90}, 50, 50)`)}),V(e,s)}const Jl=`Part,Color,Quantity,Is Spare
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
`,en=`Part,Color,Quantity,Is Spare
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
`,an=`Part,Color,Quantity,Is Spare
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
`,ln=`Part,Color,Quantity,Is Spare
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
`,nn=`Part,Color,Quantity,Is Spare
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
`,rn=`Part,Color,Quantity,Is Spare
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
`,Ba=Object.assign({"../../data/sets/rebrickable_parts_41809-1-hedwig-pencil-holder.csv":Jl,"../../data/sets/rebrickable_parts_41904-1-animal-picture-holders.csv":en,"../../data/sets/rebrickable_parts_41935-1-lots-of-dots.csv":an,"../../data/sets/rebrickable_parts_41950-1-lots-of-dots-lettering.csv":ln,"../../data/sets/rebrickable_parts_41957-1-adhesive-patches-mega-pack.csv":nn,"../../data/sets/rebrickable_parts_41961-1-designer-toolkit-patterns.csv":rn});function tn(e){const n=e.trim().split(`
`);return n[0].split(","),n.slice(1).map(a=>{const l=a.split(",");return{id:Number(l[0]),name:l[1],rgb:`#${l[2]}`,is_trans:l[3]==="True"}})}function on(e){let n=0,a=0,l=0;e.length===7?(n=parseInt(e.slice(1,3),16),a=parseInt(e.slice(3,5),16),l=parseInt(e.slice(5,7),16)):e.length===4&&(n=parseInt(e[1]+e[1],16),a=parseInt(e[2]+e[2],16),l=parseInt(e[3]+e[3],16)),n/=255,a/=255,l/=255;const s=Math.max(n,a,l),t=Math.min(n,a,l);let o=0,c=0,F=(s+t)/2;if(s!==t){const f=s-t;switch(c=F>.5?f/(2-s-t):f/(s+t),s){case n:o=(a-l)/f+(a<l?6:0);break;case a:o=(l-n)/f+2;break;case l:o=(n-a)/f+4;break}o/=6}return{h:o*360,s:c*100,l:F*100}}function un(e,n=15,a=5){const l={},s=new Set;for(const F of e){const f=F.s<10?999:Math.floor(F.h/n);l[f]||(l[f]=[]),s.has(F.rgb)||(l[f].push(F),s.add(F.rgb))}Object.values(l).forEach(F=>F.sort((f,p)=>f.l-p.l));const o=Object.keys(l).map(Number).sort((F,f)=>F-f).flatMap(F=>l[F]),c=[];for(let F=0;F<o.length;F+=a)c.push(o.slice(F,F+a));return c}function Fn(){const e=new Set;for(const n in Ba){const l=Ba[n].trim().split(`
`);for(const s of l.slice(1)){const t=s.split(",");if(t.length>1){const o=Number(t[1]);isNaN(o)||e.add(o)}}}return e}const cn=Fn(),Fe=tn(sn).filter(e=>cn.has(e.id));function dn(){return Fe.map(e=>{const n=on(e.rgb);return{...e,...n}})}const fn=un(dn());var vn=ee('<div class="cell svelte-1w4104m" role="button" tabindex="0"><!></div>'),hn=ee("<div><div></div></div>");function ka(e,n){ra(n,!1);const a=Sa();let l=Y(n,"grid",8,null),s=Y(n,"width",8,32),t=Y(n,"height",8,32),o=Y(n,"selectedShape",8,"square"),c=Y(n,"selectedColor",24,()=>Fe.length>0?Fe[0].rgb:"#000000"),F=Y(n,"paintMode",8,!1),f=Y(n,"colorPickerMode",8,!1),p=Y(n,"toolbarPosition",8,"left"),C=Y(n,"quarterRotation",8,0),d=G(),D=Y(n,"zoom",12,1),v=G(0),b=G(0),h=G(!1),A=G(0),P=G(0),M=G(),m=G(!1);function T(g){if(g.ctrlKey)return;g.preventDefault();const _=.1;let O=D();g.deltaY<0?O=Math.min(D()+_,5):g.deltaY>0&&(O=Math.max(D()-_,.2)),O!==D()&&D(O)}function u(g){g.button===0&&(k(h,!0),k(m,!1),k(A,g.clientX),k(P,g.clientY),window.addEventListener("mousemove",i),window.addEventListener("mouseup",B),g.preventDefault())}function i(g){if(!r(h))return;const _=g.clientX-r(A),O=g.clientY-r(P);(Math.abs(_)>2||Math.abs(O)>2)&&k(m,!0),k(v,r(v)+_),k(b,r(b)+O),k(A,g.clientX),k(P,g.clientY)}function B(){k(h,!1),window.removeEventListener("mousemove",i),window.removeEventListener("mouseup",B)}let L=G(D());function S(g){const _=r(d)[g];if(!_)return U(g);const{shape:O,color:Z}=_;if(O===o()&&Z===c())return;const Q=[g],ae=new Set;for(;Q.length;){const x=Q.pop();if(x===void 0||ae.has(x))continue;ae.add(x);const J=r(d)[x];if(!J||J.shape!==O||J.color!==Z)continue;Le(d,r(d)[x]={shape:o(),color:c(),rotation:o()==="quarter"?C():0});const te=x%s(),ce=Math.floor(x/s());te>0&&Q.push(x-1),te<s()-1&&Q.push(x+1),ce>0&&Q.push(x-s()),ce<t()-1&&Q.push(x+s())}k(d,[...r(d)])}function U(g){const _=r(d)[g];_&&_.shape===o()&&_.color===c()?Le(d,r(d)[g]=null):o()==="quarter"?Le(d,r(d)[g]={shape:o(),color:c(),rotation:C()}):Le(d,r(d)[g]={shape:o(),color:c(),rotation:0}),k(d,[...r(d)])}function R(g){const _=r(d)[g];_&&_.color&&a("colorPicked",{color:_.color})}Ie(()=>(be(l()),be(s()),be(t())),()=>{k(d,l()||Array(s()*t()).fill(null))}),Ie(()=>(be(D()),r(L),r(M),r(v),r(b)),()=>{if(D()!==r(L)&&r(M)){const g=r(M).parentElement;if(g){const _=g.getBoundingClientRect(),O=_.left+_.width/2,Z=_.top+_.height/2,Q=r(M).getBoundingClientRect(),ae=Q.left+Q.width/2,x=Q.top+Q.height/2,J=O-ae,te=Z-x;k(v,r(v)+(J-J*(D()/r(L)))),k(b,r(b)+(te-te*(D()/r(L))))}k(L,D())}}),ya(),ta();var j=hn(),W=y(j);Ql(W,()=>({class:"grid",role:"application","aria-label":"Drawing canvas",tabindex:"0",style:`--width: ${s()??""}; --height: ${t()??""}; transform: translate(${r(v)??""}px, ${r(b)??""}px) scale(${D()??""}); cursor: ${r(h)?"grabbing":"grab"}; user-select: none; touch-action: none;`,"on:mousedown":u,"on:keydown":g=>{g.key===" "&&(g.preventDefault(),u({button:0,clientX:r(A),clientY:r(P),preventDefault:()=>{}}))},"on:keyup":g=>{g.key===" "&&(g.preventDefault(),B())},"on:wheel":T}),void 0,void 0,"svelte-1w4104m"),xe(W,5,()=>r(d),Oe,(g,_,O)=>{var Z=vn(),Q=y(Z);{var ae=x=>{var J=Ze(),te=Qe(J);{var ce=oe=>{Na(oe,{get color(){return r(_),N(()=>r(_).color)}})},ye=oe=>{var Ce=Ze(),he=Qe(Ce);{var Pe=ne=>{Ya(ne,{get color(){return r(_),N(()=>r(_).color)}})},_e=ne=>{var Be=Ze(),ke=Qe(Be);{var He=de=>{Va(de,{get color(){return r(_),N(()=>r(_).color)},get rotation(){return r(_),N(()=>r(_).rotation)}})};ve(ke,de=>{r(_),N(()=>r(_).shape==="quarter")&&de(He)},!0)}V(ne,Be)};ve(he,ne=>{r(_),N(()=>r(_).shape==="circle")?ne(Pe):ne(_e,!1)},!0)}V(oe,Ce)};ve(te,oe=>{r(_),N(()=>r(_).shape==="square")?oe(ce):oe(ye,!1)})}V(x,J)};ve(Q,x=>{r(_)&&x(ae)})}w(Z),H("click",Z,()=>{if(r(h)||r(m)){k(m,!1);return}f()?R(O):F()?S(O):U(O)}),H("keydown",Z,x=>{x.key==="Enter"&&!r(h)&&(f()?R(O):F()?S(O):U(O))}),V(g,Z)}),w(W),La(W,g=>k(M,g),()=>r(M)),w(j),ge(()=>fe(j,1,`container ${p()==="left"?"toolbar-left-margin":"toolbar-top-margin"}`,"svelte-1w4104m")),H("mousedown",W,u),H("keydown",W,g=>{g.key===" "&&(g.preventDefault(),u({button:0,clientX:r(A),clientY:r(P),preventDefault:()=>{}}))}),H("keyup",W,g=>{g.key===" "&&(g.preventDefault(),B())}),H("wheel",W,T),V(e,j),sa()}var gn=Pa('<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#555" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align: middle;"><polyline points="4 12 4 4 12 4"></polyline><line x1="4" y1="4" x2="20" y2="20"></line></svg>'),pn=Pa('<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#555" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align: middle;"><polyline points="12 4 20 4 20 12"></polyline><line x1="4" y1="4" x2="20" y2="20"></line></svg>'),bn=ee('<button type="button" class="dropdown-item" style="display: flex; align-items: center; width: 100%; background: none; border: none; padding: 0; text-align: left; cursor: pointer;"><span class="dropdown-swatch"></span> <span> </span> <span style="margin-left:auto; color:#888; font-size:0.9em"> </span></button>'),Cn=ee('<div class="dropdown-item">No colors found</div>'),_n=ee('<div class="dropdown-menu"><input type="text" placeholder="Search color..." class="dropdown-search"/> <div class="dropdown-list"><!> <!></div></div>'),Bn=ee('<button type="button"></button>'),kn=ee('<div class="palette-row"></div>'),Dn=ee('<div><button class="toolbar-toggle"><!></button> <div class="shape-group"><div class="group-label">Shapes</div> <div class="shape-grid"><button aria-label="Square" title="Square - Draw square shapes"><div class="shape-icon"><!></div></button> <button aria-label="Circle" title="Circle - Draw circular shapes"><div class="shape-icon"><!></div></button> <button aria-label="Quarter" title="Quarter - Draw quarter tile shapes (click again to rotate)"><div class="shape-icon"><!></div></button></div></div> <div class="tool-group"><div class="group-label">Tools</div> <div class="tool-grid"><button type="button" aria-label="Zoom in" class="tool-button" title="Zoom In"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#555" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="11" y1="8" x2="11" y2="14"></line><line x1="8" y1="11" x2="14" y2="11"></line><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg></button> <button type="button" aria-label="Zoom out" class="tool-button" title="Zoom Out"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#555" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="8" y1="11" x2="14" y2="11"></line><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg></button> <button type="button" aria-label="Paint roller tool" title="Fill Tool - Fill areas with selected color"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="4" width="10" height="4" rx="1.5"></rect><path d="M16 6v4c0 1-1 2-2 2H10c-1 0-2-1-2-2V6"></path><rect x="11" y="14" width="2" height="5" rx="1"></rect><path d="M12 12v2"></path></svg></button> <button type="button" aria-label="Pick color from canvas" title="Color Picker - Click to pick colors from the canvas"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="7" stroke-width="2"></circle><path d="M12 9v3l2 2" stroke-width="2"></path></svg></button></div></div> <div class="color-dropdown-container"><button type="button" class="dropdown-toggle"> <span style="margin-left:0.5em;">▼</span></button> <!></div> <div class="colors"><div class="palette2d"></div></div> <div class="image-upload"><label class="upload-label"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#555" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align: middle;"><path d="M12 16V4"></path><polyline points="8 8 12 4 16 8"></polyline><rect x="4" y="16" width="16" height="4" rx="2"></rect></svg> <span>Upload image</span> <input type="file" accept="image/png, image/jpeg"/></label></div></div>');function An(e,n){ra(n,!1);let a=G(null),l=G(!1),s=Y(n,"colorPickerMode",12,!1);function t(){k(l,!r(l)),r(l)&&s(!1),F("paintModeToggled",{paintMode:r(l)})}function o(){s(!s()),s()&&k(l,!1),F("colorPickerModeToggled",{colorPickerMode:s()})}function c(E){p(E),F("colorSelected",{color:E})}const F=Sa();let f=Y(n,"selectedShape",12,"square"),p=Y(n,"selectedColor",28,()=>Fe.length>0?Fe[0].rgb:"#000000"),C=G(0);function d(E){if(E==="quarter")if(f()==="quarter"){k(C,(r(C)+1)%4),F("quarterRotationChanged",{rotation:r(C)});return}else k(C,0);f(E),F("shapeSelected",{shape:E}),E==="quarter"&&F("quarterRotationChanged",{rotation:r(C)})}function D(E){const X=E.target,$=X.files&&X.files[0];if($){const re=new FileReader;re.onload=()=>{F("imageUploaded",{src:re.result})},re.readAsDataURL($)}}let v=G(""),b=G(!1),h=Fe,A=G(h);function P(E){p(E.rgb),k(b,!1),k(v,""),F("colorSelected",{color:E.rgb})}let M=G("left");function m(){k(M,r(M)==="left"?"top":"left")}Ie(()=>(r(b),r(a)),()=>{r(b)&&Ea().then(()=>{r(a)?.focus()})}),Ie(()=>r(v),()=>{k(A,r(v).trim()?h.filter(E=>E.name.toLowerCase().includes(r(v).toLowerCase())||E.rgb.replace("#","").includes(r(v).replace("#",""))):h)}),ya(),ta();var T=Dn(),u=y(T),i=y(u);{var B=E=>{var X=gn();V(E,X)},L=E=>{var X=pn();V(E,X)};ve(i,E=>{r(M)==="left"?E(B):E(L,!1)})}w(u);var S=I(u,2),U=I(y(S),2),R=y(U);let j;var W=y(R),g=y(W);Na(g,{get color(){return p()}}),w(W),w(R);var _=I(R,2);let O;var Z=y(_),Q=y(Z);Ya(Q,{get color(){return p()}}),w(Z),w(_);var ae=I(_,2);let x;var J=y(ae),te=y(J);Va(te,{get color(){return p()},get rotation(){return r(C)}}),w(J),w(ae),w(U),w(S);var ce=I(S,2),ye=I(y(ce),2),oe=y(ye),Ce=I(oe,2),he=I(Ce,2);let Pe;var _e=y(he),ne=y(_e),Be=I(ne),ke=I(Be),He=I(ke);w(_e),w(he);var de=I(he,2);let oa;var Ne=y(de),Ua=y(Ne);ga(),w(Ne),w(de),w(ye),w(ce);var Ye=I(ce,2),Se=y(Ye),za=y(Se);ga(),w(Se);var Wa=I(Se,2);{var Za=E=>{var X=_n(),$=y(X);Ra($),La($,ue=>k(a,ue),()=>r(a));var re=I($,2),K=y(re);xe(K,1,()=>r(A),Oe,(ue,le)=>{var De=bn(),ca=y(De),Ue=I(ca,2),Ka=y(Ue,!0);w(Ue);var da=I(Ue,2),$a=y(da,!0);w(da),w(De),ge(()=>{q(De,"aria-label",(r(le),N(()=>`Select color ${r(le).name}`))),Ee(ca,`background:${r(le),N(()=>r(le).rgb)??""}`),Xe(Ka,(r(le),N(()=>r(le).name))),Xe($a,(r(le),N(()=>r(le).rgb)))}),H("click",De,()=>P(r(le))),V(ue,De)});var ie=I(K,2);{var Xa=ue=>{var le=Cn();V(ue,le)};ve(ie,ue=>{r(A),N(()=>r(A).length===0)&&ue(Xa)})}w(re),w(X),Xl($,()=>r(v),ue=>k(v,ue)),V(E,X)};ve(Wa,E=>{r(b)&&E(Za)})}w(Ye);var Ve=I(Ye,2),ia=y(Ve);xe(ia,5,()=>fn,Oe,(E,X)=>{var $=kn();xe($,5,()=>r(X),Oe,(re,K)=>{var ie=Bn();ge(()=>{Ee(ie,`width: 1.5rem; height: 1.5rem; background: ${r(K),N(()=>r(K).rgb)??""}; border: 2px solid ${be(p()),r(K),N(()=>p()===r(K).rgb?"#333":"#ccc")??""}; border-radius: 0.25rem; cursor: pointer; margin: 0 0.1rem 0.1rem 0;`),q(ie,"aria-label",(r(K),N(()=>r(K).name))),q(ie,"title",(r(K),N(()=>r(K).name)))}),H("click",ie,()=>c(r(K).rgb)),V(re,ie)}),w($),V(E,$)}),w(ia),w(Ve);var ua=I(Ve,2),Fa=y(ua),Qa=I(y(Fa),4);w(Fa),w(ua),w(T),ge((E,X,$,re,K,ie)=>{fe(T,1,`toolbar ${r(M)??""}`),q(u,"aria-label",r(M)==="left"?"Move toolbar to top":"Move toolbar to left"),j=fe(R,1,"shape-button",null,j,E),O=fe(_,1,"shape-button",null,O,X),x=fe(ae,1,"shape-button",null,x,$),Pe=fe(he,1,"tool-button",null,Pe,re),q(_e,"stroke",r(l)?"#333":"#888"),q(ne,"fill",r(l)?"#f4d23e":"#fff"),q(ne,"stroke",r(l)?"#333":"#888"),q(Be,"stroke",r(l)?"#333":"#888"),q(ke,"fill",r(l)?"#f4d23e":"#fff"),q(ke,"stroke",r(l)?"#333":"#888"),q(He,"stroke",r(l)?"#333":"#888"),oa=fe(de,1,"tool-button",null,oa,K),q(Ne,"stroke",s()?"#333":"#888"),q(Ua,"fill",s()?"#aef":"#fff"),Xe(za,`${ie??""} `)},[()=>({selected:f()==="square"}),()=>({selected:f()==="circle"}),()=>({selected:f()==="quarter"}),()=>({active:r(l)}),()=>({active:s()}),()=>(be(p()),N(()=>p()?h.find(E=>E.rgb===p())?.name||p():"Select color..."))]),H("click",u,m),H("click",R,()=>d("square")),H("click",_,()=>d("circle")),H("click",ae,()=>d("quarter")),H("click",oe,()=>F("zoomIn")),H("click",Ce,()=>F("zoomOut")),H("click",he,t),H("click",de,o),H("click",Se,()=>k(b,!r(b))),H("change",Qa,D),V(e,T),sa()}function mn(e){e=e.replace(/^#/,""),e.length===3&&(e=e.split("").map(a=>a+a).join(""));const n=parseInt(e,16);return{r:n>>16&255,g:n>>8&255,b:n&255}}function Tn(e,n,a,l){let s=l[0],t=1/0;for(const o of l){const c=mn(o),F=Math.sqrt(Math.pow(e-c.r,2)+Math.pow(n-c.g,2)+Math.pow(a-c.b,2));F<t&&(t=F,s=o)}return s}function wn(e){return e<85?"square":e<170?"quarter":"circle"}function Mn(e,n,a=32,l=32){return new Promise((s,t)=>{const o=new window.Image;o.src=e,o.onload=()=>{const c=document.createElement("canvas"),F=c.getContext("2d");if(c.width=a,c.height=l,!F){t(new Error("Could not get 2D context"));return}F.drawImage(o,0,0,a,l);const f=F.getImageData(0,0,a,l).data,p=[];for(let C=0;C<f.length;C+=4){const d=C/4,D=d%a,v=Math.floor(d/a);let b=f[C],h=f[C+1],A=f[C+2];f[C+3]===0&&(b=255,h=255,A=255);const M=(b+h+A)/3;let m=wn(M),T=0;const u=v===0,i=v===l-1,B=D===0,L=D===a-1;m==="quarter"&&(u||i||B||L)?u?T=2:i?T=0:B?T=1:L&&(T=3):m==="quarter"&&(m=M<128?"square":"circle");const S=Tn(b,h,A,n);p.push({shape:m,color:S,rotation:T})}s(p)},o.onerror=t})}var En=ee('<main class="svelte-1uha8ag"><!> <!></main>');function xn(e,n){ra(n,!1);let a=G("square"),l=G(Fe.length>0?Fe[0].rgb:"#000000"),s=G(null),t=G(!1),o=G("left"),c=G(1);function F(){k(c,Math.min(r(c)+.1,3))}function f(){k(c,Math.max(r(c)-.1,.2))}let p=G(!1),C=G(0);function d(i){k(a,i.detail.shape)}function D(i){k(C,i.detail.rotation)}function v(i){k(l,i.detail.color)}async function b(i){const B=Fe.map(L=>L.rgb);k(s,await Mn(i.detail.src,B,32,32))}function h(i){k(p,i.detail.colorPickerMode)}function A(i){k(l,i.detail.color),k(p,!1)}ta();var P=En();Il(i=>{Pl.title="Dotsly"});var M=y(P);An(M,{get toolbarPosition(){return r(o)},set toolbarPosition(i){k(o,i)},get selectedColor(){return r(l)},set selectedColor(i){k(l,i)},$$events:{shapeSelected:d,colorSelected:v,imageUploaded:b,paintModeToggled:i=>k(t,i.detail.paintMode),colorPickerModeToggled:h,zoomIn:F,zoomOut:f,quarterRotationChanged:D},$$legacy:!0});var m=I(M,2);{var T=i=>{ka(i,{width:32,height:32,get selectedShape(){return r(a)},get selectedColor(){return r(l)},get grid(){return r(s)},get paintMode(){return r(t)},get colorPickerMode(){return r(p)},get toolbarPosition(){return r(o)},get zoom(){return r(c)},get quarterRotation(){return r(C)},$$events:{colorPicked:A}})},u=i=>{ka(i,{width:32,height:32,get selectedShape(){return r(a)},get selectedColor(){return r(l)},get paintMode(){return r(t)},get colorPickerMode(){return r(p)},get toolbarPosition(){return r(o)},get zoom(){return r(c)},get quarterRotation(){return r(C)},$$events:{colorPicked:A}})};ve(m,i=>{r(s)?i(T):i(u,!1)})}w(P),V(e,P),sa()}export{xn as component};
