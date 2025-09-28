import"../chunks/DsnmJJEf.js";import"../chunks/BcbL0YC6.js";import{B as Da,w as na,z as ze,o as W,ay as ja,q as Ja,g as r,W as el,x as al,H as ll,y as fa,A as me,J as De,ad as nl,aG as rl,C as Te,F as sl,D as he,ac as va,a4 as O,aa as ga,aD as Aa,av as ma,aR as qe,G as Ta,I as tl,aS as He,aT as ol,aU as We,al as we,ar as il,aV as ul,aC as Fl,aW as cl,T as dl,aX as wa,M as fl,aY as vl,K as Ma,aZ as gl,a_ as hl,at as pl,a$ as bl,b0 as Cl,b1 as _l,b2 as Bl,b3 as kl,b4 as Dl,b5 as Al,b6 as ml,b7 as Tl,U as wl,b8 as Ml,a6 as Ea,b as Y,L as El,b9 as yl,i as J,t as fe,k as U,m as y,n as w,p as ra,ba as Re,R as A,e as pe,bb as ya,v as Ze,j as Qe,l as sa,bc as Ge,s as R,am as ha,bd as Sa,be as Sl}from"../chunks/C6FDjAM0.js";import{i as Ll,c as Pl,d as Gl,n as Ol,a as xl,b as La,e as N,s as Xe,f as Il}from"../chunks/D4-iEtvf.js";import{p as V,i as ce,b as Pa}from"../chunks/DWEwxHGK.js";import{i as ta}from"../chunks/D1GnaSS7.js";function xe(e,n){return n}function Rl(e,n,a){for(var l=e.items,s=[],t=n.length,o=0;o<t;o++)ul(n[o].e,s,!0);var c=t>0&&s.length===0&&a!==null;if(c){var F=a.parentNode;Fl(F),F.append(a),l.clear(),re(e,n[0].prev,n[t-1].next)}cl(s,()=>{for(var f=0;f<t;f++){var h=n[f];c||(l.delete(h.k),re(e,h.prev,h.next)),we(h.e,!c)}})}function Ie(e,n,a,l,s,t=null){var o=e,c={flags:n,items:new Map,first:null},F=(n&wa)!==0;if(F){var f=e;o=W?ze(ja(f)):f.appendChild(Da())}W&&Ja();var h=null,C=!1,d=new Map,k=el(()=>{var D=a();return ma(D)?D:D==null?[]:Aa(D)}),v,b;function g(){ql(b,v,c,d,o,s,n,l,a),t!==null&&(v.length===0?h?Ta(h):h=Te(()=>t(o)):h!==null&&tl(h,()=>{h=null}))}na(()=>{b??=dl,v=r(k);var D=v.length;if(C&&D===0)return;C=D===0;let S=!1;if(W){var M=al(o)===ll;M!==(D===0)&&(o=fa(),ze(o),me(!1),S=!0)}if(W){for(var T=null,m,u=0;u<D;u++){if(De.nodeType===nl&&De.data===rl){o=De,S=!0,me(!1);break}var i=v[u],B=l(i,u);m=aa(De,c,T,null,i,B,u,s,n,a),c.items.set(B,m),T=m}D>0&&ze(fa())}if(W)D===0&&t&&(h=Te(()=>t(o)));else if(sl()){var I=new Set,L=he;for(u=0;u<D;u+=1){i=v[u],B=l(i,u);var Z=c.items.get(B)??d.get(B);Z?(n&(He|qe))!==0&&Ga(Z,i,u,n):(m=aa(null,c,null,null,i,B,u,s,n,a,!0),d.set(B,m)),I.add(B)}for(const[x,z]of c.items)I.has(x)||L.skipped_effects.add(z.e);L.add_callback(g)}else g();S&&me(!0),r(k)}),W&&(o=De)}function ql(e,n,a,l,s,t,o,c,F){var f=(o&vl)!==0,h=(o&(He|qe))!==0,C=n.length,d=a.items,k=a.first,v=k,b,g=null,D,S=[],M=[],T,m,u,i;if(f)for(i=0;i<C;i+=1)T=n[i],m=c(T,i),u=d.get(m),u!==void 0&&(u.a?.measure(),(D??=new Set).add(u));for(i=0;i<C;i+=1){if(T=n[i],m=c(T,i),u=d.get(m),u===void 0){var B=l.get(m);if(B!==void 0){l.delete(m),d.set(m,B);var I=g?g.next:v;re(a,g,B),re(a,B,I),Ke(B,I,s),g=B}else{var L=v?v.e.nodes_start:s;g=aa(L,a,g,g===null?a.first:g.next,T,m,i,t,o,F)}d.set(m,g),S=[],M=[],v=g.next;continue}if(h&&Ga(u,T,i,o),(u.e.f&We)!==0&&(Ta(u.e),f&&(u.a?.unfix(),(D??=new Set).delete(u))),u!==v){if(b!==void 0&&b.has(u)){if(S.length<M.length){var Z=M[0],x;g=Z.prev;var z=S[0],p=S[S.length-1];for(x=0;x<S.length;x+=1)Ke(S[x],Z,s);for(x=0;x<M.length;x+=1)b.delete(M[x]);re(a,z.prev,p.next),re(a,g,z),re(a,p,Z),v=Z,g=p,i-=1,S=[],M=[]}else b.delete(u),Ke(u,v,s),re(a,u.prev,u.next),re(a,u,g===null?a.first:g.next),re(a,g,u),g=u;continue}for(S=[],M=[];v!==null&&v.k!==m;)(v.e.f&We)===0&&(b??=new Set).add(v),M.push(v),v=v.next;if(v===null)continue;u=v}S.push(u),g=u,v=u.next}if(v!==null||b!==void 0){for(var _=b===void 0?[]:Aa(b);v!==null;)(v.e.f&We)===0&&_.push(v),v=v.next;var P=_.length;if(P>0){var Q=(o&wa)!==0&&C===0?s:null;if(f){for(i=0;i<P;i+=1)_[i].a?.measure();for(i=0;i<P;i+=1)_[i].a?.fix()}Rl(a,_,Q)}}f&&fl(()=>{if(D!==void 0)for(u of D)u.a?.apply()}),e.first=a.first&&a.first.e,e.last=g&&g.e;for(var H of l.values())we(H.e);l.clear()}function Ga(e,n,a,l){(l&He)!==0&&va(e.v,n),(l&qe)!==0?va(e.i,a):e.i=a}function aa(e,n,a,l,s,t,o,c,F,f,h){var C=(F&He)!==0,d=(F&ol)===0,k=C?d?O(s,!1,!1):ga(s):s,v=(F&qe)===0?o:ga(o),b={i:v,v:k,k:t,a:null,e:null,prev:a,next:l};try{if(e===null){var g=document.createDocumentFragment();g.append(e=Da())}return b.e=Te(()=>c(e,k,v,f),W),b.e.prev=a&&a.e,b.e.next=l&&l.e,a===null?h||(n.first=b):(a.next=b,a.e.next=b.e),l!==null&&(l.prev=b,l.e.prev=b.e),b}finally{}}function Ke(e,n,a){for(var l=e.next?e.next.e.nodes_start:a,s=n?n.e.nodes_start:a,t=e.e.nodes_start;t!==null&&t!==l;){var o=il(t);s.before(t),t=o}}function re(e,n,a){n===null?e.first=a:(n.next=a,n.e.next=a&&a.e),a!==null&&(a.prev=n,a.e.prev=n&&n.e)}function Hl(e,n){var a=void 0,l;na(()=>{a!==(a=n())&&(l&&(we(l),l=null),a&&(l=Te(()=>{Ma(()=>a(e))})))})}function Oa(e){var n,a,l="";if(typeof e=="string"||typeof e=="number")l+=e;else if(typeof e=="object")if(Array.isArray(e)){var s=e.length;for(n=0;n<s;n++)e[n]&&(a=Oa(e[n]))&&(l&&(l+=" "),l+=a)}else for(a in e)e[a]&&(l&&(l+=" "),l+=a);return l}function Nl(){for(var e,n,a=0,l="",s=arguments.length;a<s;a++)(e=arguments[a])&&(n=Oa(e))&&(l&&(l+=" "),l+=n);return l}function Yl(e){return typeof e=="object"?Nl(e):e??""}const pa=[...` 	
\r\f \v\uFEFF`];function Vl(e,n,a){var l=e==null?"":""+e;if(n&&(l=l?l+" "+n:n),a){for(var s in a)if(a[s])l=l?l+" "+s:s;else if(l.length)for(var t=s.length,o=0;(o=l.indexOf(s,o))>=0;){var c=o+t;(o===0||pa.includes(l[o-1]))&&(c===l.length||pa.includes(l[c]))?l=(o===0?"":l.substring(0,o))+l.substring(c+1):o=c}}return l===""?null:l}function ba(e,n=!1){var a=n?" !important;":";",l="";for(var s in e){var t=e[s];t!=null&&t!==""&&(l+=" "+s+": "+t+a)}return l}function $e(e){return e[0]!=="-"||e[1]!=="-"?e.toLowerCase():e}function Ul(e,n){if(n){var a="",l,s;if(Array.isArray(n)?(l=n[0],s=n[1]):l=n,e){e=String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();var t=!1,o=0,c=!1,F=[];l&&F.push(...Object.keys(l).map($e)),s&&F.push(...Object.keys(s).map($e));var f=0,h=-1;const b=e.length;for(var C=0;C<b;C++){var d=e[C];if(c?d==="/"&&e[C-1]==="*"&&(c=!1):t?t===d&&(t=!1):d==="/"&&e[C+1]==="*"?c=!0:d==='"'||d==="'"?t=d:d==="("?o++:d===")"&&o--,!c&&t===!1&&o===0){if(d===":"&&h===-1)h=C;else if(d===";"||C===b-1){if(h!==-1){var k=$e(e.substring(f,h).trim());if(!F.includes(k)){d!==";"&&C++;var v=e.substring(f,C).trim();a+=" "+v+";"}}f=C+1,h=-1}}}}return l&&(a+=ba(l)),s&&(a+=ba(s,!0)),a=a.trim(),a===""?null:a}return e==null?null:String(e)}function Fe(e,n,a,l,s,t){var o=e.__className;if(W||o!==a||o===void 0){var c=Vl(a,l,t);(!W||c!==e.getAttribute("class"))&&(c==null?e.removeAttribute("class"):n?e.className=c:e.setAttribute("class",c)),e.__className=a}else if(t&&s!==t)for(var F in t){var f=!!t[F];(s==null||f!==!!s[F])&&e.classList.toggle(F,f)}return t}function je(e,n={},a,l){for(var s in a){var t=a[s];n[s]!==t&&(a[s]==null?e.style.removeProperty(s):e.style.setProperty(s,t,l))}}function Me(e,n,a,l){var s=e.__style;if(W||s!==n){var t=Ul(n,l);(!W||t!==e.getAttribute("style"))&&(t==null?e.removeAttribute("style"):e.style.cssText=t),e.__style=n}else l&&(Array.isArray(l)?(je(e,a?.[0],l[0]),je(e,a?.[1],l[1],"important")):je(e,a,l));return l}function la(e,n,a=!1){if(e.multiple){if(n==null)return;if(!ma(n))return gl();for(var l of e.options)l.selected=n.includes(Ca(l));return}for(l of e.options){var s=Ca(l);if(hl(s,n)){l.selected=!0;return}}(!a||n!==void 0)&&(e.selectedIndex=-1)}function zl(e){var n=new MutationObserver(()=>{la(e,e.__value)});n.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),pl(()=>{n.disconnect()})}function Ca(e){return"__value"in e?e.__value:e.value}const Oe=Symbol("class"),Ae=Symbol("style"),xa=Symbol("is custom element"),Ia=Symbol("is html");function Ra(e){if(W){var n=!1,a=()=>{if(!n){if(n=!0,e.hasAttribute("value")){var l=e.value;q(e,"value",null),e.value=l}if(e.hasAttribute("checked")){var s=e.checked;q(e,"checked",null),e.checked=s}}};e.__on_r=a,kl(a),Dl()}}function Wl(e,n){n?e.hasAttribute("selected")||e.setAttribute("selected",""):e.removeAttribute("selected")}function q(e,n,a,l){var s=qa(e);W&&(s[n]=e.getAttribute(n),n==="src"||n==="srcset"||n==="href"&&e.nodeName==="LINK")||s[n]!==(s[n]=a)&&(n==="loading"&&(e[bl]=a),a==null?e.removeAttribute(n):typeof a!="string"&&Ha(e).includes(n)?e[n]=a:e.setAttribute(n,a))}function Zl(e,n,a,l,s=!1,t=!1){if(W&&s&&e.tagName==="INPUT"){var o=e,c=o.type==="checkbox"?"defaultChecked":"defaultValue";c in a||Ra(o)}var F=qa(e),f=F[xa],h=!F[Ia];let C=W&&f;C&&me(!1);var d=n||{},k=e.tagName==="OPTION";for(var v in n)v in a||(a[v]=null);a.class?a.class=Yl(a.class):a.class=null,a[Ae]&&(a.style??=null);var b=Ha(e);for(const u in a){let i=a[u];if(k&&u==="value"&&i==null){e.value=e.__value="",d[u]=i;continue}if(u==="class"){var g=e.namespaceURI==="http://www.w3.org/1999/xhtml";Fe(e,g,i,l,n?.[Oe],a[Oe]),d[u]=i,d[Oe]=a[Oe];continue}if(u==="style"){Me(e,i,n?.[Ae],a[Ae]),d[u]=i,d[Ae]=a[Ae];continue}var D=d[u];if(!(i===D&&!(i===void 0&&e.hasAttribute(u)))){d[u]=i;var S=u[0]+u[1];if(S!=="$$")if(S==="on"){const B={},I="$$"+u;let L=u.slice(2);var M=xl(L);if(Ll(L)&&(L=L.slice(0,-7),B.capture=!0),!M&&D){if(i!=null)continue;e.removeEventListener(L,d[I],B),d[I]=null}if(i!=null)if(M)e[`__${L}`]=i,Gl([L]);else{let Z=function(x){d[u].call(this,x)};d[I]=Pl(L,e,Z,B)}else M&&(e[`__${L}`]=void 0)}else if(u==="style")q(e,u,i);else if(u==="autofocus")Tl(e,!!i);else if(!f&&(u==="__value"||u==="value"&&i!=null))e.value=e.__value=i;else if(u==="selected"&&k)Wl(e,i);else{var T=u;h||(T=Ol(T));var m=T==="defaultValue"||T==="defaultChecked";if(i==null&&!f&&!m)if(F[u]=null,T==="value"||T==="checked"){let B=e;const I=n===void 0;if(T==="value"){let L=B.defaultValue;B.removeAttribute(T),B.defaultValue=L,B.value=B.__value=I?L:null}else{let L=B.defaultChecked;B.removeAttribute(T),B.defaultChecked=L,B.checked=I?L:!1}}else e.removeAttribute(u);else m||b.includes(T)&&(f||typeof i!="string")?(e[T]=i,T in F&&(F[T]=wl)):typeof i!="function"&&q(e,T,i)}}}return C&&me(!0),d}function Ql(e,n,a=[],l=[],s,t=!1,o=!1){Al(a,l,c=>{var F=void 0,f={},h=e.nodeName==="SELECT",C=!1;if(na(()=>{var k=n(...c.map(r)),v=Zl(e,F,k,s,t,o);C&&h&&"value"in k&&la(e,k.value);for(let g of Object.getOwnPropertySymbols(f))k[g]||we(f[g]);for(let g of Object.getOwnPropertySymbols(k)){var b=k[g];g.description===ml&&(!F||b!==F[g])&&(f[g]&&we(f[g]),f[g]=Te(()=>Hl(e,()=>b))),v[g]=b}F=v}),h){var d=e;Ma(()=>{la(d,F.value,!0),zl(d)})}C=!0})}function qa(e){return e.__attributes??={[xa]:e.nodeName.includes("-"),[Ia]:e.namespaceURI===Cl}}var _a=new Map;function Ha(e){var n=e.getAttribute("is")||e.nodeName,a=_a.get(n);if(a)return a;_a.set(n,a=[]);for(var l,s=e,t=Element.prototype;t!==s;){l=Bl(s);for(var o in l)l[o].set&&a.push(o);s=_l(s)}return a}function Xl(e,n,a=n){var l=new WeakSet;Ml(e,"input",async s=>{var t=s?e.defaultValue:e.value;if(t=Je(e)?ea(t):t,a(t),he!==null&&l.add(he),await Ea(),t!==(t=n())){var o=e.selectionStart,c=e.selectionEnd;e.value=t??"",c!==null&&(e.selectionStart=o,e.selectionEnd=Math.min(c,e.value.length))}}),(W&&e.defaultValue!==e.value||Y(n)==null&&e.value)&&(a(Je(e)?ea(e.value):e.value),he!==null&&l.add(he)),El(()=>{var s=n();if(e===document.activeElement){var t=yl??he;if(l.has(t))return}Je(e)&&s===ea(e.value)||e.type==="date"&&!s&&!e.value||s!==e.value&&(e.value=s??"")})}function Je(e){var n=e.type;return n==="number"||n==="range"}function ea(e){return e===""?null:+e}var Kl=J('<div class="square svelte-gxsx5p"></div>');function Na(e,n){let a=V(n,"color",8,"#000");var l=Kl();fe(()=>Me(l,`--color: ${a()??""}`)),U(e,l)}var $l=J('<div class="circle svelte-r5z0cw"></div>');function Ya(e,n){let a=V(n,"color",8,"#000");var l=$l();fe(()=>Me(l,`--color: ${a()??""}`)),U(e,l)}var jl=J('<div class="quarter-container svelte-19hi45o"><svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none" class="svelte-19hi45o"><path d="M 0,0 L 100,0 A 100,100 0 0,1 0,100 Z" stroke="none"></path></svg></div>');function Va(e,n){let a=V(n,"color",8,"#000"),l=V(n,"rotation",8,0);var s=jl(),t=y(s),o=y(t);w(t),w(s),fe(()=>{q(o,"fill",a()),q(o,"transform",`rotate(${l()*90}, 50, 50)`)}),U(e,s)}const Jl=`Part,Color,Quantity,Is Spare
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
`);return n[0].split(","),n.slice(1).map(a=>{const l=a.split(",");return{id:Number(l[0]),name:l[1],rgb:`#${l[2]}`,is_trans:l[3]==="True"}})}function on(e){let n=0,a=0,l=0;e.length===7?(n=parseInt(e.slice(1,3),16),a=parseInt(e.slice(3,5),16),l=parseInt(e.slice(5,7),16)):e.length===4&&(n=parseInt(e[1]+e[1],16),a=parseInt(e[2]+e[2],16),l=parseInt(e[3]+e[3],16)),n/=255,a/=255,l/=255;const s=Math.max(n,a,l),t=Math.min(n,a,l);let o=0,c=0,F=(s+t)/2;if(s!==t){const f=s-t;switch(c=F>.5?f/(2-s-t):f/(s+t),s){case n:o=(a-l)/f+(a<l?6:0);break;case a:o=(l-n)/f+2;break;case l:o=(n-a)/f+4;break}o/=6}return{h:o*360,s:c*100,l:F*100}}function un(e,n=15,a=5){const l={},s=new Set;for(const F of e){const f=F.s<10?999:Math.floor(F.h/n);l[f]||(l[f]=[]),s.has(F.rgb)||(l[f].push(F),s.add(F.rgb))}Object.values(l).forEach(F=>F.sort((f,h)=>f.l-h.l));const o=Object.keys(l).map(Number).sort((F,f)=>F-f).flatMap(F=>l[F]),c=[];for(let F=0;F<o.length;F+=a)c.push(o.slice(F,F+a));return c}function Fn(){const e=new Set;for(const n in Ba){const l=Ba[n].trim().split(`
`);for(const s of l.slice(1)){const t=s.split(",");if(t.length>1){const o=Number(t[1]);isNaN(o)||e.add(o)}}}return e}const cn=Fn(),ie=tn(sn).filter(e=>cn.has(e.id));function dn(){return ie.map(e=>{const n=on(e.rgb);return{...e,...n}})}const fn=un(dn());var vn=J('<div class="cell svelte-1w4104m" role="button" tabindex="0"><!></div>'),gn=J("<div><div></div></div>");function ka(e,n){ra(n,!1);const a=La();let l=V(n,"grid",8,null),s=V(n,"width",8,32),t=V(n,"height",8,32),o=V(n,"selectedShape",8,"square"),c=V(n,"selectedColor",24,()=>ie.length>0?ie[0].rgb:"#000000"),F=V(n,"paintMode",8,!1),f=V(n,"colorPickerMode",8,!1),h=V(n,"toolbarPosition",8,"left"),C=V(n,"quarterRotation",8,0),d=O(),k=V(n,"zoom",12,1),v=O(0),b=O(0),g=O(!1),D=O(0),S=O(0),M=O();function T(p){if(p.ctrlKey)return;p.preventDefault();const _=.1;let P=k();p.deltaY<0?P=Math.min(k()+_,5):p.deltaY>0&&(P=Math.max(k()-_,.2)),P!==k()&&k(P)}function m(p){p.button===0&&(A(g,!0),A(D,p.clientX),A(S,p.clientY),window.addEventListener("mousemove",u),window.addEventListener("mouseup",i),p.preventDefault())}function u(p){r(g)&&(A(v,r(v)+(p.clientX-r(D))),A(b,r(b)+(p.clientY-r(S))),A(D,p.clientX),A(S,p.clientY))}function i(){A(g,!1),window.removeEventListener("mousemove",u),window.removeEventListener("mouseup",i)}let B=O(k());function I(p){const _=r(d)[p];if(!_)return L(p);const{shape:P,color:Q}=_;if(P===o()&&Q===c())return;const H=[p],ue=new Set;for(;H.length;){const G=H.pop();if(G===void 0||ue.has(G))continue;ue.add(G);const j=r(d)[G];if(!j||j.shape!==P||j.color!==Q)continue;Ge(d,r(d)[G]={shape:o(),color:c(),rotation:o()==="quarter"?C():0});const ae=G%s(),ve=Math.floor(G/s());ae>0&&H.push(G-1),ae<s()-1&&H.push(G+1),ve>0&&H.push(G-s()),ve<t()-1&&H.push(G+s())}A(d,[...r(d)])}function L(p){const _=r(d)[p];_&&_.shape==="quarter"&&_.color===c()?Ge(d,r(d)[p]={..._,rotation:(_.rotation+1)%4}):o()==="quarter"?Ge(d,r(d)[p]={shape:o(),color:c(),rotation:C()}):Ge(d,r(d)[p]={shape:o(),color:c(),rotation:0}),A(d,[...r(d)])}function Z(p){const _=r(d)[p];_&&_.color&&a("colorPicked",{color:_.color})}Re(()=>(pe(l()),pe(s()),pe(t())),()=>{A(d,l()||Array(s()*t()).fill(null))}),Re(()=>(pe(k()),r(B),r(M),r(v),r(b)),()=>{if(k()!==r(B)&&r(M)){const p=r(M).parentElement;if(p){const _=p.getBoundingClientRect(),P=_.left+_.width/2,Q=_.top+_.height/2,H=r(M).getBoundingClientRect(),ue=H.left+H.width/2,G=H.top+H.height/2,j=P-ue,ae=Q-G;A(v,r(v)+(j-j*(k()/r(B)))),A(b,r(b)+(ae-ae*(k()/r(B))))}A(B,k())}}),ya(),ta();var x=gn(),z=y(x);Ql(z,()=>({class:"grid",role:"application","aria-label":"Drawing canvas",tabindex:"0",style:`--width: ${s()??""}; --height: ${t()??""}; transform: translate(${r(v)??""}px, ${r(b)??""}px) scale(${k()??""}); cursor: ${r(g)?"grabbing":"grab"}; user-select: none; touch-action: none;`,"on:mousedown":m,"on:keydown":p=>{p.key===" "&&(p.preventDefault(),m({button:0,clientX:r(D),clientY:r(S),preventDefault:()=>{}}))},"on:keyup":p=>{p.key===" "&&(p.preventDefault(),i())},"on:wheel":T}),void 0,void 0,"svelte-1w4104m"),Ie(z,5,()=>r(d),xe,(p,_,P)=>{var Q=vn(),H=y(Q);{var ue=G=>{var j=Ze(),ae=Qe(j);{var ve=se=>{Na(se,{get color(){return r(_),Y(()=>r(_).color)}})},be=se=>{var Ce=Ze(),Ee=Qe(Ce);{var de=le=>{Ya(le,{get color(){return r(_),Y(()=>r(_).color)}})},ye=le=>{var ge=Ze(),Se=Qe(ge);{var _e=Be=>{Va(Be,{get color(){return r(_),Y(()=>r(_).color)},get rotation(){return r(_),Y(()=>r(_).rotation)}})};ce(Se,Be=>{r(_),Y(()=>r(_).shape==="quarter")&&Be(_e)},!0)}U(le,ge)};ce(Ee,le=>{r(_),Y(()=>r(_).shape==="circle")?le(de):le(ye,!1)},!0)}U(se,Ce)};ce(ae,se=>{r(_),Y(()=>r(_).shape==="square")?se(ve):se(be,!1)})}U(G,j)};ce(H,G=>{r(_)&&G(ue)})}w(Q),N("click",Q,()=>f()?Z(P):F()?I(P):L(P)),N("keydown",Q,G=>{G.key==="Enter"&&(f()?Z(P):F()?I(P):L(P))}),U(p,Q)}),w(z),Pa(z,p=>A(M,p),()=>r(M)),w(x),fe(()=>Fe(x,1,`container ${h()==="left"?"toolbar-left-margin":"toolbar-top-margin"}`,"svelte-1w4104m")),N("mousedown",z,m),N("keydown",z,p=>{p.key===" "&&(p.preventDefault(),m({button:0,clientX:r(D),clientY:r(S),preventDefault:()=>{}}))}),N("keyup",z,p=>{p.key===" "&&(p.preventDefault(),i())}),N("wheel",z,T),U(e,x),sa()}var hn=Sa('<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#555" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align: middle;"><polyline points="4 12 4 4 12 4"></polyline><line x1="4" y1="4" x2="20" y2="20"></line></svg>'),pn=Sa('<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#555" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align: middle;"><polyline points="12 4 20 4 20 12"></polyline><line x1="4" y1="4" x2="20" y2="20"></line></svg>'),bn=J('<button type="button" class="dropdown-item" style="display: flex; align-items: center; width: 100%; background: none; border: none; padding: 0; text-align: left; cursor: pointer;"><span class="dropdown-swatch"></span> <span> </span> <span style="margin-left:auto; color:#888; font-size:0.9em"> </span></button>'),Cn=J('<div class="dropdown-item">No colors found</div>'),_n=J('<div class="dropdown-menu"><input type="text" placeholder="Search color..." class="dropdown-search"/> <div class="dropdown-list"><!> <!></div></div>'),Bn=J('<button type="button"></button>'),kn=J('<div class="palette-row"></div>'),Dn=J('<div><button class="toolbar-toggle"><!></button> <div class="shape-group"><div class="group-label">Shapes</div> <div class="shape-grid"><button aria-label="Square" title="Square - Draw square shapes"><div class="shape-icon"><!></div></button> <button aria-label="Circle" title="Circle - Draw circular shapes"><div class="shape-icon"><!></div></button> <button aria-label="Quarter" title="Quarter - Draw quarter tile shapes (click again to rotate)"><div class="shape-icon"><!></div></button></div></div> <div class="tool-group"><div class="group-label">Tools</div> <div class="tool-grid"><button type="button" aria-label="Zoom in" class="tool-button" title="Zoom In"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#555" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="11" y1="8" x2="11" y2="14"></line><line x1="8" y1="11" x2="14" y2="11"></line><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg></button> <button type="button" aria-label="Zoom out" class="tool-button" title="Zoom Out"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#555" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="8" y1="11" x2="14" y2="11"></line><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg></button> <button type="button" aria-label="Paint roller tool" title="Fill Tool - Fill areas with selected color"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="4" width="10" height="4" rx="1.5"></rect><path d="M16 6v4c0 1-1 2-2 2H10c-1 0-2-1-2-2V6"></path><rect x="11" y="14" width="2" height="5" rx="1"></rect><path d="M12 12v2"></path></svg></button> <button type="button" aria-label="Pick color from canvas" title="Color Picker - Click to pick colors from the canvas"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="7" stroke-width="2"></circle><path d="M12 9v3l2 2" stroke-width="2"></path></svg></button></div></div> <div class="color-dropdown-container"><button type="button" class="dropdown-toggle"> <span style="margin-left:0.5em;">▼</span></button> <!></div> <div class="colors"><div class="palette2d"></div></div> <div class="image-upload"><label class="upload-label"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#555" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align: middle;"><path d="M12 16V4"></path><polyline points="8 8 12 4 16 8"></polyline><rect x="4" y="16" width="16" height="4" rx="2"></rect></svg> <span>Upload image</span> <input type="file" accept="image/png, image/jpeg"/></label></div></div>');function An(e,n){ra(n,!1);let a=O(null),l=O(!1),s=V(n,"colorPickerMode",12,!1);function t(){A(l,!r(l)),r(l)&&s(!1),F("paintModeToggled",{paintMode:r(l)})}function o(){s(!s()),s()&&A(l,!1),F("colorPickerModeToggled",{colorPickerMode:s()})}function c(E){h(E),F("colorSelected",{color:E})}const F=La();let f=V(n,"selectedShape",12,"square"),h=V(n,"selectedColor",28,()=>ie.length>0?ie[0].rgb:"#000000"),C=O(0);function d(E){if(E==="quarter")if(f()==="quarter"){A(C,(r(C)+1)%4),F("quarterRotationChanged",{rotation:r(C)});return}else A(C,0);f(E),F("shapeSelected",{shape:E}),E==="quarter"&&F("quarterRotationChanged",{rotation:r(C)})}function k(E){const X=E.target,$=X.files&&X.files[0];if($){const ne=new FileReader;ne.onload=()=>{F("imageUploaded",{src:ne.result})},ne.readAsDataURL($)}}let v=O(""),b=O(!1),g=ie,D=O(g);function S(E){h(E.rgb),A(b,!1),A(v,""),F("colorSelected",{color:E.rgb})}let M=O("left");function T(){A(M,r(M)==="left"?"top":"left")}Re(()=>(r(b),r(a)),()=>{r(b)&&Ea().then(()=>{r(a)?.focus()})}),Re(()=>r(v),()=>{A(D,r(v).trim()?g.filter(E=>E.name.toLowerCase().includes(r(v).toLowerCase())||E.rgb.replace("#","").includes(r(v).replace("#",""))):g)}),ya(),ta();var m=Dn(),u=y(m),i=y(u);{var B=E=>{var X=hn();U(E,X)},I=E=>{var X=pn();U(E,X)};ce(i,E=>{r(M)==="left"?E(B):E(I,!1)})}w(u);var L=R(u,2),Z=R(y(L),2),x=y(Z);let z;var p=y(x),_=y(p);Na(_,{get color(){return h()}}),w(p),w(x);var P=R(x,2);let Q;var H=y(P),ue=y(H);Ya(ue,{get color(){return h()}}),w(H),w(P);var G=R(P,2);let j;var ae=y(G),ve=y(ae);Va(ve,{get color(){return h()},get rotation(){return r(C)}}),w(ae),w(G),w(Z),w(L);var be=R(L,2),se=R(y(be),2),Ce=y(se),Ee=R(Ce,2),de=R(Ee,2);let ye;var le=y(de),ge=y(le),Se=R(ge),_e=R(Se),Be=R(_e);w(le),w(de);var Le=R(de,2);let oa;var Ne=y(Le),Ua=y(Ne);ha(),w(Ne),w(Le),w(se),w(be);var Ye=R(be,2),Pe=y(Ye),za=y(Pe);ha(),w(Pe);var Wa=R(Pe,2);{var Za=E=>{var X=_n(),$=y(X);Ra($),Pa($,oe=>A(a,oe),()=>r(a));var ne=R($,2),K=y(ne);Ie(K,1,()=>r(D),xe,(oe,ee)=>{var ke=bn(),ca=y(ke),Ue=R(ca,2),Ka=y(Ue,!0);w(Ue);var da=R(Ue,2),$a=y(da,!0);w(da),w(ke),fe(()=>{q(ke,"aria-label",(r(ee),Y(()=>`Select color ${r(ee).name}`))),Me(ca,`background:${r(ee),Y(()=>r(ee).rgb)??""}`),Xe(Ka,(r(ee),Y(()=>r(ee).name))),Xe($a,(r(ee),Y(()=>r(ee).rgb)))}),N("click",ke,()=>S(r(ee))),U(oe,ke)});var te=R(K,2);{var Xa=oe=>{var ee=Cn();U(oe,ee)};ce(te,oe=>{r(D),Y(()=>r(D).length===0)&&oe(Xa)})}w(ne),w(X),Xl($,()=>r(v),oe=>A(v,oe)),U(E,X)};ce(Wa,E=>{r(b)&&E(Za)})}w(Ye);var Ve=R(Ye,2),ia=y(Ve);Ie(ia,5,()=>fn,xe,(E,X)=>{var $=kn();Ie($,5,()=>r(X),xe,(ne,K)=>{var te=Bn();fe(()=>{Me(te,`width: 1.5rem; height: 1.5rem; background: ${r(K),Y(()=>r(K).rgb)??""}; border: 2px solid ${pe(h()),r(K),Y(()=>h()===r(K).rgb?"#333":"#ccc")??""}; border-radius: 0.25rem; cursor: pointer; margin: 0 0.1rem 0.1rem 0;`),q(te,"aria-label",(r(K),Y(()=>r(K).name))),q(te,"title",(r(K),Y(()=>r(K).name)))}),N("click",te,()=>c(r(K).rgb)),U(ne,te)}),w($),U(E,$)}),w(ia),w(Ve);var ua=R(Ve,2),Fa=y(ua),Qa=R(y(Fa),4);w(Fa),w(ua),w(m),fe((E,X,$,ne,K,te)=>{Fe(m,1,`toolbar ${r(M)??""}`),q(u,"aria-label",r(M)==="left"?"Move toolbar to top":"Move toolbar to left"),z=Fe(x,1,"shape-button",null,z,E),Q=Fe(P,1,"shape-button",null,Q,X),j=Fe(G,1,"shape-button",null,j,$),ye=Fe(de,1,"tool-button",null,ye,ne),q(le,"stroke",r(l)?"#333":"#888"),q(ge,"fill",r(l)?"#f4d23e":"#fff"),q(ge,"stroke",r(l)?"#333":"#888"),q(Se,"stroke",r(l)?"#333":"#888"),q(_e,"fill",r(l)?"#f4d23e":"#fff"),q(_e,"stroke",r(l)?"#333":"#888"),q(Be,"stroke",r(l)?"#333":"#888"),oa=Fe(Le,1,"tool-button",null,oa,K),q(Ne,"stroke",s()?"#333":"#888"),q(Ua,"fill",s()?"#aef":"#fff"),Xe(za,`${te??""} `)},[()=>({selected:f()==="square"}),()=>({selected:f()==="circle"}),()=>({selected:f()==="quarter"}),()=>({active:r(l)}),()=>({active:s()}),()=>(pe(h()),Y(()=>h()?g.find(E=>E.rgb===h())?.name||h():"Select color..."))]),N("click",u,T),N("click",x,()=>d("square")),N("click",P,()=>d("circle")),N("click",G,()=>d("quarter")),N("click",Ce,()=>F("zoomIn")),N("click",Ee,()=>F("zoomOut")),N("click",de,t),N("click",Le,o),N("click",Pe,()=>A(b,!r(b))),N("change",Qa,k),U(e,m),sa()}function mn(e){e=e.replace(/^#/,""),e.length===3&&(e=e.split("").map(a=>a+a).join(""));const n=parseInt(e,16);return{r:n>>16&255,g:n>>8&255,b:n&255}}function Tn(e,n,a,l){let s=l[0],t=1/0;for(const o of l){const c=mn(o),F=Math.sqrt(Math.pow(e-c.r,2)+Math.pow(n-c.g,2)+Math.pow(a-c.b,2));F<t&&(t=F,s=o)}return s}function wn(e){return e<85?"square":e<170?"quarter":"circle"}function Mn(e,n,a=32,l=32){return new Promise((s,t)=>{const o=new window.Image;o.src=e,o.onload=()=>{const c=document.createElement("canvas"),F=c.getContext("2d");if(c.width=a,c.height=l,!F){t(new Error("Could not get 2D context"));return}F.drawImage(o,0,0,a,l);const f=F.getImageData(0,0,a,l).data,h=[];for(let C=0;C<f.length;C+=4){const d=C/4,k=d%a,v=Math.floor(d/a);let b=f[C],g=f[C+1],D=f[C+2];f[C+3]===0&&(b=255,g=255,D=255);const M=(b+g+D)/3;let T=wn(M),m=0;const u=v===0,i=v===l-1,B=k===0,I=k===a-1;T==="quarter"&&(u||i||B||I)?u?m=2:i?m=0:B?m=1:I&&(m=3):T==="quarter"&&(T=M<128?"square":"circle");const L=Tn(b,g,D,n);h.push({shape:T,color:L,rotation:m})}s(h)},o.onerror=t})}var En=J('<main class="svelte-1uha8ag"><!> <!></main>');function xn(e,n){ra(n,!1);let a=O("square"),l=O(ie.length>0?ie[0].rgb:"#000000"),s=O(null),t=O(!1),o=O("left"),c=O(1);function F(){A(c,Math.min(r(c)+.1,3))}function f(){A(c,Math.max(r(c)-.1,.2))}let h=O(!1),C=O(0);function d(i){A(a,i.detail.shape)}function k(i){A(C,i.detail.rotation)}function v(i){A(l,i.detail.color)}async function b(i){const B=ie.map(I=>I.rgb);A(s,await Mn(i.detail.src,B,32,32))}function g(i){A(h,i.detail.colorPickerMode)}function D(i){A(l,i.detail.color),A(h,!1)}ta();var S=En();Il(i=>{Sl.title="Dotsly"});var M=y(S);An(M,{get toolbarPosition(){return r(o)},set toolbarPosition(i){A(o,i)},get selectedColor(){return r(l)},set selectedColor(i){A(l,i)},$$events:{shapeSelected:d,colorSelected:v,imageUploaded:b,paintModeToggled:i=>A(t,i.detail.paintMode),colorPickerModeToggled:g,zoomIn:F,zoomOut:f,quarterRotationChanged:k},$$legacy:!0});var T=R(M,2);{var m=i=>{ka(i,{width:32,height:32,get selectedShape(){return r(a)},get selectedColor(){return r(l)},get grid(){return r(s)},get paintMode(){return r(t)},get colorPickerMode(){return r(h)},get toolbarPosition(){return r(o)},get zoom(){return r(c)},get quarterRotation(){return r(C)},$$events:{colorPicked:D}})},u=i=>{ka(i,{width:32,height:32,get selectedShape(){return r(a)},get selectedColor(){return r(l)},get paintMode(){return r(t)},get colorPickerMode(){return r(h)},get toolbarPosition(){return r(o)},get zoom(){return r(c)},get quarterRotation(){return r(C)},$$events:{colorPicked:D}})};ce(T,i=>{r(s)?i(m):i(u,!1)})}w(S),U(e,S),sa()}export{xn as component};
