import"../chunks/DsnmJJEf.js";import"../chunks/BcbL0YC6.js";import{B as Ea,w as oa,z as Qe,o as X,ay as rl,q as tl,g as s,W as ol,x as il,H as ul,y as Ca,A as Ae,J as me,ad as Fl,aG as cl,C as Te,F as dl,D as be,ac as _a,a4 as G,aa as Ba,aD as Sa,av as Pa,aR as qe,G as La,I as fl,aS as He,aT as vl,aU as Xe,al as we,ar as gl,aV as hl,aC as pl,aW as bl,T as Cl,aX as Ga,M as _l,aY as Bl,K as Oa,aZ as kl,a_ as ml,at as Dl,a$ as Al,b0 as Tl,b1 as wl,b2 as Ml,b3 as yl,b4 as El,b5 as Sl,b6 as Pl,b7 as Ll,U as Gl,b8 as Ol,a6 as xa,b as z,L as xl,b9 as Il,i as ee,t as he,k as W,m as E,n as w,p as ia,ba as Re,R as m,e as Ce,bb as Ia,v as Ke,j as je,l as ua,bc as Ge,s as O,am as ka,bd as Ra,be as Rl}from"../chunks/C6FDjAM0.js";import{i as ql,c as Hl,d as Nl,n as Yl,a as zl,b as qa,e as q,s as $e,f as Vl}from"../chunks/D4-iEtvf.js";import{p as V,i as de,b as Ha}from"../chunks/DWEwxHGK.js";import{i as Fa}from"../chunks/D1GnaSS7.js";function xe(e,n){return n}function Ul(e,n,a){for(var l=e.items,r=[],t=n.length,o=0;o<t;o++)hl(n[o].e,r,!0);var c=t>0&&r.length===0&&a!==null;if(c){var i=a.parentNode;pl(i),i.append(a),l.clear(),re(e,n[0].prev,n[t-1].next)}bl(r,()=>{for(var f=0;f<t;f++){var C=n[f];c||(l.delete(C.k),re(e,C.prev,C.next)),we(C.e,!c)}})}function Ie(e,n,a,l,r,t=null){var o=e,c={flags:n,items:new Map,first:null},i=(n&Ga)!==0;if(i){var f=e;o=X?Qe(rl(f)):f.appendChild(Ea())}X&&tl();var C=null,_=!1,F=new Map,A=ol(()=>{var T=a();return Pa(T)?T:T==null?[]:Sa(T)}),v,b;function g(){Wl(b,v,c,F,o,r,n,l,a),t!==null&&(v.length===0?C?La(C):C=Te(()=>t(o)):C!==null&&fl(C,()=>{C=null}))}oa(()=>{b??=Cl,v=s(A);var T=v.length;if(_&&T===0)return;_=T===0;let L=!1;if(X){var S=il(o)===ul;S!==(T===0)&&(o=Ca(),Qe(o),Ae(!1),L=!0)}if(X){for(var D=null,M,u=0;u<T;u++){if(me.nodeType===Fl&&me.data===cl){o=me,L=!0,Ae(!1);break}var d=v[u],B=l(d,u);M=sa(me,c,D,null,d,B,u,r,n,a),c.items.set(B,M),D=M}T>0&&Qe(Ca())}if(X)T===0&&t&&(C=Te(()=>t(o)));else if(dl()){var h=new Set,P=be;for(u=0;u<T;u+=1){d=v[u],B=l(d,u);var U=c.items.get(B)??F.get(B);U?(n&(He|qe))!==0&&Na(U,d,u,n):(M=sa(null,c,null,null,d,B,u,r,n,a,!0),F.set(B,M)),h.add(B)}for(const[R,J]of c.items)h.has(R)||P.skipped_effects.add(J.e);P.add_callback(g)}else g();L&&Ae(!0),s(A)}),X&&(o=me)}function Wl(e,n,a,l,r,t,o,c,i){var f=(o&Bl)!==0,C=(o&(He|qe))!==0,_=n.length,F=a.items,A=a.first,v=A,b,g=null,T,L=[],S=[],D,M,u,d;if(f)for(d=0;d<_;d+=1)D=n[d],M=c(D,d),u=F.get(M),u!==void 0&&(u.a?.measure(),(T??=new Set).add(u));for(d=0;d<_;d+=1){if(D=n[d],M=c(D,d),u=F.get(M),u===void 0){var B=l.get(M);if(B!==void 0){l.delete(M),F.set(M,B);var h=g?g.next:v;re(a,g,B),re(a,B,h),Je(B,h,r),g=B}else{var P=v?v.e.nodes_start:r;g=sa(P,a,g,g===null?a.first:g.next,D,M,d,t,o,i)}F.set(M,g),L=[],S=[],v=g.next;continue}if(C&&Na(u,D,d,o),(u.e.f&Xe)!==0&&(La(u.e),f&&(u.a?.unfix(),(T??=new Set).delete(u))),u!==v){if(b!==void 0&&b.has(u)){if(L.length<S.length){var U=S[0],R;g=U.prev;var J=L[0],N=L[L.length-1];for(R=0;R<L.length;R+=1)Je(L[R],U,r);for(R=0;R<S.length;R+=1)b.delete(S[R]);re(a,J.prev,N.next),re(a,g,J),re(a,N,U),v=U,g=N,d-=1,L=[],S=[]}else b.delete(u),Je(u,v,r),re(a,u.prev,u.next),re(a,u,g===null?a.first:g.next),re(a,g,u),g=u;continue}for(L=[],S=[];v!==null&&v.k!==M;)(v.e.f&Xe)===0&&(b??=new Set).add(v),S.push(v),v=v.next;if(v===null)continue;u=v}L.push(u),g=u,v=u.next}if(v!==null||b!==void 0){for(var p=b===void 0?[]:Sa(b);v!==null;)(v.e.f&Xe)===0&&p.push(v),v=v.next;var k=p.length;if(k>0){var x=(o&Ga)!==0&&_===0?r:null;if(f){for(d=0;d<k;d+=1)p[d].a?.measure();for(d=0;d<k;d+=1)p[d].a?.fix()}Ul(a,p,x)}}f&&_l(()=>{if(T!==void 0)for(u of T)u.a?.apply()}),e.first=a.first&&a.first.e,e.last=g&&g.e;for(var Y of l.values())we(Y.e);l.clear()}function Na(e,n,a,l){(l&He)!==0&&_a(e.v,n),(l&qe)!==0?_a(e.i,a):e.i=a}function sa(e,n,a,l,r,t,o,c,i,f,C){var _=(i&He)!==0,F=(i&vl)===0,A=_?F?G(r,!1,!1):Ba(r):r,v=(i&qe)===0?o:Ba(o),b={i:v,v:A,k:t,a:null,e:null,prev:a,next:l};try{if(e===null){var g=document.createDocumentFragment();g.append(e=Ea())}return b.e=Te(()=>c(e,A,v,f),X),b.e.prev=a&&a.e,b.e.next=l&&l.e,a===null?C||(n.first=b):(a.next=b,a.e.next=b.e),l!==null&&(l.prev=b,l.e.prev=b.e),b}finally{}}function Je(e,n,a){for(var l=e.next?e.next.e.nodes_start:a,r=n?n.e.nodes_start:a,t=e.e.nodes_start;t!==null&&t!==l;){var o=gl(t);r.before(t),t=o}}function re(e,n,a){n===null?e.first=a:(n.next=a,n.e.next=a&&a.e),a!==null&&(a.prev=n,a.e.prev=n&&n.e)}function Zl(e,n){var a=void 0,l;oa(()=>{a!==(a=n())&&(l&&(we(l),l=null),a&&(l=Te(()=>{Oa(()=>a(e))})))})}function Ya(e){var n,a,l="";if(typeof e=="string"||typeof e=="number")l+=e;else if(typeof e=="object")if(Array.isArray(e)){var r=e.length;for(n=0;n<r;n++)e[n]&&(a=Ya(e[n]))&&(l&&(l+=" "),l+=a)}else for(a in e)e[a]&&(l&&(l+=" "),l+=a);return l}function Ql(){for(var e,n,a=0,l="",r=arguments.length;a<r;a++)(e=arguments[a])&&(n=Ya(e))&&(l&&(l+=" "),l+=n);return l}function Xl(e){return typeof e=="object"?Ql(e):e??""}const ma=[...` 	
\r\f \v\uFEFF`];function Kl(e,n,a){var l=e==null?"":""+e;if(n&&(l=l?l+" "+n:n),a){for(var r in a)if(a[r])l=l?l+" "+r:r;else if(l.length)for(var t=r.length,o=0;(o=l.indexOf(r,o))>=0;){var c=o+t;(o===0||ma.includes(l[o-1]))&&(c===l.length||ma.includes(l[c]))?l=(o===0?"":l.substring(0,o))+l.substring(c+1):o=c}}return l===""?null:l}function Da(e,n=!1){var a=n?" !important;":";",l="";for(var r in e){var t=e[r];t!=null&&t!==""&&(l+=" "+r+": "+t+a)}return l}function ea(e){return e[0]!=="-"||e[1]!=="-"?e.toLowerCase():e}function jl(e,n){if(n){var a="",l,r;if(Array.isArray(n)?(l=n[0],r=n[1]):l=n,e){e=String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();var t=!1,o=0,c=!1,i=[];l&&i.push(...Object.keys(l).map(ea)),r&&i.push(...Object.keys(r).map(ea));var f=0,C=-1;const b=e.length;for(var _=0;_<b;_++){var F=e[_];if(c?F==="/"&&e[_-1]==="*"&&(c=!1):t?t===F&&(t=!1):F==="/"&&e[_+1]==="*"?c=!0:F==='"'||F==="'"?t=F:F==="("?o++:F===")"&&o--,!c&&t===!1&&o===0){if(F===":"&&C===-1)C=_;else if(F===";"||_===b-1){if(C!==-1){var A=ea(e.substring(f,C).trim());if(!i.includes(A)){F!==";"&&_++;var v=e.substring(f,_).trim();a+=" "+v+";"}}f=_+1,C=-1}}}}return l&&(a+=Da(l)),r&&(a+=Da(r,!0)),a=a.trim(),a===""?null:a}return e==null?null:String(e)}function ce(e,n,a,l,r,t){var o=e.__className;if(X||o!==a||o===void 0){var c=Kl(a,l,t);(!X||c!==e.getAttribute("class"))&&(c==null?e.removeAttribute("class"):n?e.className=c:e.setAttribute("class",c)),e.__className=a}else if(t&&r!==t)for(var i in t){var f=!!t[i];(r==null||f!==!!r[i])&&e.classList.toggle(i,f)}return t}function aa(e,n={},a,l){for(var r in a){var t=a[r];n[r]!==t&&(a[r]==null?e.style.removeProperty(r):e.style.setProperty(r,t,l))}}function Me(e,n,a,l){var r=e.__style;if(X||r!==n){var t=jl(n,l);(!X||t!==e.getAttribute("style"))&&(t==null?e.removeAttribute("style"):e.style.cssText=t),e.__style=n}else l&&(Array.isArray(l)?(aa(e,a?.[0],l[0]),aa(e,a?.[1],l[1],"important")):aa(e,a,l));return l}function ra(e,n,a=!1){if(e.multiple){if(n==null)return;if(!Pa(n))return kl();for(var l of e.options)l.selected=n.includes(Aa(l));return}for(l of e.options){var r=Aa(l);if(ml(r,n)){l.selected=!0;return}}(!a||n!==void 0)&&(e.selectedIndex=-1)}function $l(e){var n=new MutationObserver(()=>{ra(e,e.__value)});n.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),Dl(()=>{n.disconnect()})}function Aa(e){return"__value"in e?e.__value:e.value}const Oe=Symbol("class"),De=Symbol("style"),za=Symbol("is custom element"),Va=Symbol("is html");function ta(e){if(X){var n=!1,a=()=>{if(!n){if(n=!0,e.hasAttribute("value")){var l=e.value;H(e,"value",null),e.value=l}if(e.hasAttribute("checked")){var r=e.checked;H(e,"checked",null),e.checked=r}}};e.__on_r=a,yl(a),El()}}function Jl(e,n){n?e.hasAttribute("selected")||e.setAttribute("selected",""):e.removeAttribute("selected")}function H(e,n,a,l){var r=Ua(e);X&&(r[n]=e.getAttribute(n),n==="src"||n==="srcset"||n==="href"&&e.nodeName==="LINK")||r[n]!==(r[n]=a)&&(n==="loading"&&(e[Al]=a),a==null?e.removeAttribute(n):typeof a!="string"&&Wa(e).includes(n)?e[n]=a:e.setAttribute(n,a))}function en(e,n,a,l,r=!1,t=!1){if(X&&r&&e.tagName==="INPUT"){var o=e,c=o.type==="checkbox"?"defaultChecked":"defaultValue";c in a||ta(o)}var i=Ua(e),f=i[za],C=!i[Va];let _=X&&f;_&&Ae(!1);var F=n||{},A=e.tagName==="OPTION";for(var v in n)v in a||(a[v]=null);a.class?a.class=Xl(a.class):a.class=null,a[De]&&(a.style??=null);var b=Wa(e);for(const u in a){let d=a[u];if(A&&u==="value"&&d==null){e.value=e.__value="",F[u]=d;continue}if(u==="class"){var g=e.namespaceURI==="http://www.w3.org/1999/xhtml";ce(e,g,d,l,n?.[Oe],a[Oe]),F[u]=d,F[Oe]=a[Oe];continue}if(u==="style"){Me(e,d,n?.[De],a[De]),F[u]=d,F[De]=a[De];continue}var T=F[u];if(!(d===T&&!(d===void 0&&e.hasAttribute(u)))){F[u]=d;var L=u[0]+u[1];if(L!=="$$")if(L==="on"){const B={},h="$$"+u;let P=u.slice(2);var S=zl(P);if(ql(P)&&(P=P.slice(0,-7),B.capture=!0),!S&&T){if(d!=null)continue;e.removeEventListener(P,F[h],B),F[h]=null}if(d!=null)if(S)e[`__${P}`]=d,Nl([P]);else{let U=function(R){F[u].call(this,R)};F[h]=Hl(P,e,U,B)}else S&&(e[`__${P}`]=void 0)}else if(u==="style")H(e,u,d);else if(u==="autofocus")Ll(e,!!d);else if(!f&&(u==="__value"||u==="value"&&d!=null))e.value=e.__value=d;else if(u==="selected"&&A)Jl(e,d);else{var D=u;C||(D=Yl(D));var M=D==="defaultValue"||D==="defaultChecked";if(d==null&&!f&&!M)if(i[u]=null,D==="value"||D==="checked"){let B=e;const h=n===void 0;if(D==="value"){let P=B.defaultValue;B.removeAttribute(D),B.defaultValue=P,B.value=B.__value=h?P:null}else{let P=B.defaultChecked;B.removeAttribute(D),B.defaultChecked=P,B.checked=h?P:!1}}else e.removeAttribute(u);else M||b.includes(D)&&(f||typeof d!="string")?(e[D]=d,D in i&&(i[D]=Gl)):typeof d!="function"&&H(e,D,d)}}}return _&&Ae(!0),F}function an(e,n,a=[],l=[],r,t=!1,o=!1){Sl(a,l,c=>{var i=void 0,f={},C=e.nodeName==="SELECT",_=!1;if(oa(()=>{var A=n(...c.map(s)),v=en(e,i,A,r,t,o);_&&C&&"value"in A&&ra(e,A.value);for(let g of Object.getOwnPropertySymbols(f))A[g]||we(f[g]);for(let g of Object.getOwnPropertySymbols(A)){var b=A[g];g.description===Pl&&(!i||b!==i[g])&&(f[g]&&we(f[g]),f[g]=Te(()=>Zl(e,()=>b))),v[g]=b}i=v}),C){var F=e;Oa(()=>{ra(F,i.value,!0),$l(F)})}_=!0})}function Ua(e){return e.__attributes??={[za]:e.nodeName.includes("-"),[Va]:e.namespaceURI===Tl}}var Ta=new Map;function Wa(e){var n=e.getAttribute("is")||e.nodeName,a=Ta.get(n);if(a)return a;Ta.set(n,a=[]);for(var l,r=e,t=Element.prototype;t!==r;){l=Ml(r);for(var o in l)l[o].set&&a.push(o);r=wl(r)}return a}function wa(e,n,a=n){var l=new WeakSet;Ol(e,"input",async r=>{var t=r?e.defaultValue:e.value;if(t=la(e)?na(t):t,a(t),be!==null&&l.add(be),await xa(),t!==(t=n())){var o=e.selectionStart,c=e.selectionEnd;e.value=t??"",c!==null&&(e.selectionStart=o,e.selectionEnd=Math.min(c,e.value.length))}}),(X&&e.defaultValue!==e.value||z(n)==null&&e.value)&&(a(la(e)?na(e.value):e.value),be!==null&&l.add(be)),xl(()=>{var r=n();if(e===document.activeElement){var t=Il??be;if(l.has(t))return}la(e)&&r===na(e.value)||e.type==="date"&&!r&&!e.value||r!==e.value&&(e.value=r??"")})}function la(e){var n=e.type;return n==="number"||n==="range"}function na(e){return e===""?null:+e}var ln=ee('<div class="square svelte-gxsx5p"></div>');function Za(e,n){let a=V(n,"color",8,"#000");var l=ln();he(()=>Me(l,`--color: ${a()??""}`)),W(e,l)}var nn=ee('<div class="circle svelte-r5z0cw"></div>');function Qa(e,n){let a=V(n,"color",8,"#000");var l=nn();he(()=>Me(l,`--color: ${a()??""}`)),W(e,l)}var sn=ee('<div class="quarter-container svelte-19hi45o"><svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none" class="svelte-19hi45o"><path d="M 0,0 L 100,0 A 100,100 0 0,1 0,100 Z" stroke="none"></path></svg></div>');function Xa(e,n){let a=V(n,"color",8,"#000"),l=V(n,"rotation",8,0);var r=sn(),t=E(r),o=E(t);w(t),w(r),he(()=>{H(o,"fill",a()),H(o,"transform",`rotate(${l()*90}, 50, 50)`)}),W(e,r)}const rn=`Part,Color,Quantity,Is Spare
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
`,tn=`Part,Color,Quantity,Is Spare
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
`,on=`Part,Color,Quantity,Is Spare
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
`,un=`Part,Color,Quantity,Is Spare
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
`,Fn=`Part,Color,Quantity,Is Spare
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
`,cn=`Part,Color,Quantity,Is Spare
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
`,dn=`id,name,rgb,is_trans,num_parts,num_sets,y1,y2
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
`,Ma=Object.assign({"../../data/sets/rebrickable_parts_41809-1-hedwig-pencil-holder.csv":rn,"../../data/sets/rebrickable_parts_41904-1-animal-picture-holders.csv":tn,"../../data/sets/rebrickable_parts_41935-1-lots-of-dots.csv":on,"../../data/sets/rebrickable_parts_41950-1-lots-of-dots-lettering.csv":un,"../../data/sets/rebrickable_parts_41957-1-adhesive-patches-mega-pack.csv":Fn,"../../data/sets/rebrickable_parts_41961-1-designer-toolkit-patterns.csv":cn});function fn(e){const n=e.trim().split(`
`);return n[0].split(","),n.slice(1).map(a=>{const l=a.split(",");return{id:Number(l[0]),name:l[1],rgb:`#${l[2]}`,is_trans:l[3]==="True"}})}function vn(e){let n=0,a=0,l=0;e.length===7?(n=parseInt(e.slice(1,3),16),a=parseInt(e.slice(3,5),16),l=parseInt(e.slice(5,7),16)):e.length===4&&(n=parseInt(e[1]+e[1],16),a=parseInt(e[2]+e[2],16),l=parseInt(e[3]+e[3],16)),n/=255,a/=255,l/=255;const r=Math.max(n,a,l),t=Math.min(n,a,l);let o=0,c=0,i=(r+t)/2;if(r!==t){const f=r-t;switch(c=i>.5?f/(2-r-t):f/(r+t),r){case n:o=(a-l)/f+(a<l?6:0);break;case a:o=(l-n)/f+2;break;case l:o=(n-a)/f+4;break}o/=6}return{h:o*360,s:c*100,l:i*100}}function gn(e,n=15,a=5){const l={},r=new Set;for(const i of e){const f=i.s<10?999:Math.floor(i.h/n);l[f]||(l[f]=[]),r.has(i.rgb)||(l[f].push(i),r.add(i.rgb))}Object.values(l).forEach(i=>i.sort((f,C)=>f.l-C.l));const o=Object.keys(l).map(Number).sort((i,f)=>i-f).flatMap(i=>l[i]),c=[];for(let i=0;i<o.length;i+=a)c.push(o.slice(i,i+a));return c}function hn(){const e=new Set;for(const n in Ma){const l=Ma[n].trim().split(`
`);for(const r of l.slice(1)){const t=r.split(",");if(t.length>1){const o=Number(t[1]);isNaN(o)||e.add(o)}}}return e}const pn=hn(),Fe=fn(dn).filter(e=>pn.has(e.id)&&!e.name.includes("Trans-Clear"));function bn(){return Fe.map(e=>{const n=vn(e.rgb);return{...e,...n}})}const Cn=gn(bn());var _n=ee('<div class="cell svelte-1w4104m" role="button" tabindex="0"><!></div>'),Bn=ee("<div><div></div></div>");function ya(e,n){ia(n,!1);const a=qa();let l=V(n,"grid",8,null),r=V(n,"width",8,32),t=V(n,"height",8,32),o=V(n,"selectedShape",8,"square"),c=V(n,"selectedColor",24,()=>Fe.length>0?Fe[0].rgb:"#000000"),i=V(n,"paintMode",8,!1),f=V(n,"colorPickerMode",8,!1),C=V(n,"toolbarPosition",8,"left"),_=V(n,"quarterRotation",8,0),F=G(),A=V(n,"zoom",12,1),v=G(0),b=G(0),g=G(!1),T=G(0),L=G(0),S=G(),D=G(!1);function M(p){if(p.ctrlKey)return;p.preventDefault();const k=.1;let x=A();p.deltaY<0?x=Math.min(A()+k,5):p.deltaY>0&&(x=Math.max(A()-k,.2)),x!==A()&&A(x)}function u(p){p.button===0&&(m(g,!0),m(D,!1),m(T,p.clientX),m(L,p.clientY),window.addEventListener("mousemove",d),window.addEventListener("mouseup",B),p.preventDefault())}function d(p){if(!s(g))return;const k=p.clientX-s(T),x=p.clientY-s(L);(Math.abs(k)>2||Math.abs(x)>2)&&m(D,!0),m(v,s(v)+k),m(b,s(b)+x),m(T,p.clientX),m(L,p.clientY)}function B(){m(g,!1),window.removeEventListener("mousemove",d),window.removeEventListener("mouseup",B)}let h=G(A());function P(p){const k=s(F)[p];if(!k)return U(p);const{shape:x,color:Y}=k;if(x===o()&&Y===c())return;const Z=[p],te=new Set;for(;Z.length;){const I=Z.pop();if(I===void 0||te.has(I))continue;te.add(I);const K=s(F)[I];if(!K||K.shape!==x||K.color!==Y)continue;Ge(F,s(F)[I]={shape:o(),color:c(),rotation:o()==="quarter"?_():0});const le=I%r(),fe=Math.floor(I/r());le>0&&Z.push(I-1),le<r()-1&&Z.push(I+1),fe>0&&Z.push(I-r()),fe<t()-1&&Z.push(I+r())}m(F,[...s(F)])}function U(p){const k=s(F)[p];k&&k.shape===o()&&k.color===c()?Ge(F,s(F)[p]=null):o()==="quarter"?Ge(F,s(F)[p]={shape:o(),color:c(),rotation:_()}):Ge(F,s(F)[p]={shape:o(),color:c(),rotation:0}),m(F,[...s(F)])}function R(p){const k=s(F)[p];k&&k.color&&a("colorPicked",{color:k.color})}Re(()=>(Ce(l()),Ce(r()),Ce(t())),()=>{m(F,l()||Array(r()*t()).fill(null))}),Re(()=>(Ce(A()),s(h),s(S),s(v),s(b)),()=>{if(A()!==s(h)&&s(S)){const p=s(S).parentElement;if(p){const k=p.getBoundingClientRect(),x=k.left+k.width/2,Y=k.top+k.height/2,Z=s(S).getBoundingClientRect(),te=Z.left+Z.width/2,I=Z.top+Z.height/2,K=x-te,le=Y-I;m(v,s(v)+(K-K*(A()/s(h)))),m(b,s(b)+(le-le*(A()/s(h))))}m(h,A())}}),Ia(),Fa();var J=Bn(),N=E(J);an(N,()=>({class:"grid",role:"application","aria-label":"Drawing canvas",tabindex:"0",style:`--width: ${r()??""}; --height: ${t()??""}; transform: translate(${s(v)??""}px, ${s(b)??""}px) scale(${A()??""}); cursor: ${s(g)?"grabbing":"grab"}; user-select: none; touch-action: none;`,"on:mousedown":u,"on:keydown":p=>{p.key===" "&&(p.preventDefault(),u({button:0,clientX:s(T),clientY:s(L),preventDefault:()=>{}}))},"on:keyup":p=>{p.key===" "&&(p.preventDefault(),B())},"on:wheel":M}),void 0,void 0,"svelte-1w4104m"),Ie(N,5,()=>s(F),xe,(p,k,x)=>{var Y=_n(),Z=E(Y);{var te=I=>{var K=Ke(),le=je(K);{var fe=ne=>{Za(ne,{get color(){return s(k),z(()=>s(k).color)}})},Ne=ne=>{var _e=Ke(),ye=je(_e);{var Ee=oe=>{Qa(oe,{get color(){return s(k),z(()=>s(k).color)}})},ve=oe=>{var pe=Ke(),Be=je(pe);{var Se=ge=>{Xa(ge,{get color(){return s(k),z(()=>s(k).color)},get rotation(){return s(k),z(()=>s(k).rotation)}})};de(Be,ge=>{s(k),z(()=>s(k).shape==="quarter")&&ge(Se)},!0)}W(oe,pe)};de(ye,oe=>{s(k),z(()=>s(k).shape==="circle")?oe(Ee):oe(ve,!1)},!0)}W(ne,_e)};de(le,ne=>{s(k),z(()=>s(k).shape==="square")?ne(fe):ne(Ne,!1)})}W(I,K)};de(Z,I=>{s(k)&&I(te)})}w(Y),q("click",Y,()=>{if(s(g)||s(D)){m(D,!1);return}f()?R(x):i()?P(x):U(x)}),q("keydown",Y,I=>{I.key==="Enter"&&!s(g)&&(f()?R(x):i()?P(x):U(x))}),W(p,Y)}),w(N),Ha(N,p=>m(S,p),()=>s(S)),w(J),he(()=>ce(J,1,`container ${C()==="left"?"toolbar-left-margin":"toolbar-top-margin"}`,"svelte-1w4104m")),q("mousedown",N,u),q("keydown",N,p=>{p.key===" "&&(p.preventDefault(),u({button:0,clientX:s(T),clientY:s(L),preventDefault:()=>{}}))}),q("keyup",N,p=>{p.key===" "&&(p.preventDefault(),B())}),q("wheel",N,M),W(e,J),ua()}var kn=Ra('<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#555" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align: middle;"><polyline points="4 12 4 4 12 4"></polyline><line x1="4" y1="4" x2="20" y2="20"></line></svg>'),mn=Ra('<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#555" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align: middle;"><polyline points="12 4 20 4 20 12"></polyline><line x1="4" y1="4" x2="20" y2="20"></line></svg>'),Dn=ee('<button type="button" class="dropdown-item" style="display: flex; align-items: center; width: 100%; background: none; border: none; padding: 0; text-align: left; cursor: pointer;"><span class="dropdown-swatch"></span> <span> </span> <span style="margin-left:auto; color:#888; font-size:0.9em"> </span></button>'),An=ee('<div class="dropdown-item">No colors found</div>'),Tn=ee('<div class="dropdown-menu"><input type="text" placeholder="Search color..." class="dropdown-search"/> <div class="dropdown-list"><!> <!></div></div>'),wn=ee('<button type="button"></button>'),Mn=ee('<div class="palette-row"></div>'),yn=ee('<div><button class="toolbar-toggle"><!></button> <div class="shape-group"><div class="group-label">Shapes</div> <div class="shape-grid"><button aria-label="Square" title="Square - Draw square shapes"><div class="shape-icon"><!></div></button> <button aria-label="Circle" title="Circle - Draw circular shapes"><div class="shape-icon"><!></div></button> <button aria-label="Quarter" title="Quarter - Draw quarter tile shapes (click again to rotate)"><div class="shape-icon"><!></div></button></div></div> <div class="tool-group"><div class="group-label">Tools</div> <div class="tool-grid"><button type="button" aria-label="Zoom in" class="tool-button" title="Zoom In"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#555" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="11" y1="8" x2="11" y2="14"></line><line x1="8" y1="11" x2="14" y2="11"></line><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg></button> <button type="button" aria-label="Zoom out" class="tool-button" title="Zoom Out"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#555" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="8" y1="11" x2="14" y2="11"></line><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg></button> <button type="button" aria-label="Paint roller tool" title="Fill Tool - Fill areas with selected color"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="4" width="10" height="4" rx="1.5"></rect><path d="M16 6v4c0 1-1 2-2 2H10c-1 0-2-1-2-2V6"></path><rect x="11" y="14" width="2" height="5" rx="1"></rect><path d="M12 12v2"></path></svg></button> <button type="button" aria-label="Pick color from canvas" title="Color Picker - Click to pick colors from the canvas"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="7" stroke-width="2"></circle><path d="M12 9v3l2 2" stroke-width="2"></path></svg></button></div></div> <div class="color-dropdown-container"><button type="button" class="dropdown-toggle"> <span style="margin-left:0.5em;">▼</span></button> <!></div> <div class="colors"><div class="palette2d"></div></div> <div class="canvas-size-group" style="display:flex; justify-content:center; align-items:center; width:100%;"><div class="group-label" style="margin-right: 1ex">Size</div> <div class="tool-grid"><label style="display:flex; flex-direction:column; align-items:center;"><input type="number" min="1" max="256"/></label></div></div> <div class="image-upload"><label class="upload-label"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#555" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align: middle;"><path d="M12 16V4"></path><polyline points="8 8 12 4 16 8"></polyline><rect x="4" y="16" width="16" height="4" rx="2"></rect></svg> <span>Upload image</span> <input type="file" accept="image/png, image/jpeg"/></label></div></div>');function En(e,n){ia(n,!1);let a=G(null),l=G(!1),r=V(n,"colorPickerMode",12,!1);function t(){m(l,!s(l)),s(l)&&r(!1),i("paintModeToggled",{paintMode:s(l)})}function o(){r(!r()),r()&&m(l,!1),i("colorPickerModeToggled",{colorPickerMode:r()})}function c(y){C(y),i("colorSelected",{color:y})}const i=qa();let f=V(n,"selectedShape",12,"square"),C=V(n,"selectedColor",28,()=>Fe.length>0?Fe[0].rgb:"#000000"),_=G(0);function F(y){if(y==="quarter")if(f()==="quarter"){m(_,(s(_)+1)%4),i("quarterRotationChanged",{rotation:s(_)});return}else m(_,0);f(y),i("shapeSelected",{shape:y}),y==="quarter"&&i("quarterRotationChanged",{rotation:s(_)})}function A(y){const Q=y.target,$=Q.files&&Q.files[0];if($){const se=new FileReader;se.onload=()=>{i("imageUploaded",{src:se.result})},se.readAsDataURL($)}}let v=G(""),b=G(!1),g=Fe,T=G(g);function L(y){C(y.rgb),m(b,!1),m(v,""),i("colorSelected",{color:y.rgb})}let S=G("left");function D(){m(S,s(S)==="left"?"top":"left")}let M=V(n,"size",12,32);function u(y){const Q=y.target;M(Math.max(1,Math.min(128,parseInt(Q.value)||1))),i("sizeChanged",{size:M()})}Re(()=>(s(b),s(a)),()=>{s(b)&&xa().then(()=>{s(a)?.focus()})}),Re(()=>s(v),()=>{m(T,s(v).trim()?g.filter(y=>y.name.toLowerCase().includes(s(v).toLowerCase())||y.rgb.replace("#","").includes(s(v).replace("#",""))):g)}),Ia(),Fa();var d=yn(),B=E(d),h=E(B);{var P=y=>{var Q=kn();W(y,Q)},U=y=>{var Q=mn();W(y,Q)};de(h,y=>{s(S)==="left"?y(P):y(U,!1)})}w(B);var R=O(B,2),J=O(E(R),2),N=E(J);let p;var k=E(N),x=E(k);Za(x,{get color(){return C()}}),w(k),w(N);var Y=O(N,2);let Z;var te=E(Y),I=E(te);Qa(I,{get color(){return C()}}),w(te),w(Y);var K=O(Y,2);let le;var fe=E(K),Ne=E(fe);Xa(Ne,{get color(){return C()},get rotation(){return s(_)}}),w(fe),w(K),w(J),w(R);var ne=O(R,2),_e=O(E(ne),2),ye=E(_e),Ee=O(ye,2),ve=O(Ee,2);let oe;var pe=E(ve),Be=E(pe),Se=O(Be),ge=O(Se),Ka=O(ge);w(pe),w(ve);var Pe=O(ve,2);let ca;var Ye=E(Pe),ja=E(Ye);ka(),w(Ye),w(Pe),w(_e),w(ne);var ze=O(ne,2),Le=E(ze),$a=E(Le);ka(),w(Le);var Ja=O(Le,2);{var el=y=>{var Q=Tn(),$=E(Q);ta($),Ha($,ue=>m(a,ue),()=>s(a));var se=O($,2),j=E(se);Ie(j,1,()=>s(T),xe,(ue,ae)=>{var ke=Dn(),pa=E(ke),Ze=O(pa,2),nl=E(Ze,!0);w(Ze);var ba=O(Ze,2),sl=E(ba,!0);w(ba),w(ke),he(()=>{H(ke,"aria-label",(s(ae),z(()=>`Select color ${s(ae).name}`))),Me(pa,`background:${s(ae),z(()=>s(ae).rgb)??""}`),$e(nl,(s(ae),z(()=>s(ae).name))),$e(sl,(s(ae),z(()=>s(ae).rgb)))}),q("click",ke,()=>L(s(ae))),W(ue,ke)});var ie=O(j,2);{var ll=ue=>{var ae=An();W(ue,ae)};de(ie,ue=>{s(T),z(()=>s(T).length===0)&&ue(ll)})}w(se),w(Q),wa($,()=>s(v),ue=>m(v,ue)),W(y,Q)};de(Ja,y=>{s(b)&&y(el)})}w(ze);var Ve=O(ze,2),da=E(Ve);Ie(da,5,()=>Cn,xe,(y,Q)=>{var $=Mn();Ie($,5,()=>s(Q),xe,(se,j)=>{var ie=wn();he(()=>{Me(ie,`width: 1.5rem; height: 1.5rem; background: ${s(j),z(()=>s(j).rgb)??""}; border: 2px solid ${Ce(C()),s(j),z(()=>C()===s(j).rgb?"#333":"#ccc")??""}; border-radius: 0.25rem; cursor: pointer; margin: 0 0.1rem 0.1rem 0;`),H(ie,"aria-label",(s(j),z(()=>s(j).name))),H(ie,"title",(s(j),z(()=>s(j).name)))}),q("click",ie,()=>c(s(j).rgb)),W(se,ie)}),w($),W(y,$)}),w(da),w(Ve);var Ue=O(Ve,2),fa=O(E(Ue),2),va=E(fa),We=E(va);ta(We),w(va),w(fa),w(Ue);var ga=O(Ue,2),ha=E(ga),al=O(E(ha),4);w(ha),w(ga),w(d),he((y,Q,$,se,j,ie)=>{ce(d,1,`toolbar ${s(S)??""}`),H(B,"aria-label",s(S)==="left"?"Move toolbar to top":"Move toolbar to left"),p=ce(N,1,"shape-button",null,p,y),Z=ce(Y,1,"shape-button",null,Z,Q),le=ce(K,1,"shape-button",null,le,$),oe=ce(ve,1,"tool-button",null,oe,se),H(pe,"stroke",s(l)?"#333":"#888"),H(Be,"fill",s(l)?"#f4d23e":"#fff"),H(Be,"stroke",s(l)?"#333":"#888"),H(Se,"stroke",s(l)?"#333":"#888"),H(ge,"fill",s(l)?"#f4d23e":"#fff"),H(ge,"stroke",s(l)?"#333":"#888"),H(Ka,"stroke",s(l)?"#333":"#888"),ca=ce(Pe,1,"tool-button",null,ca,j),H(Ye,"stroke",r()?"#333":"#888"),H(ja,"fill",r()?"#aef":"#fff"),$e($a,`${ie??""} `)},[()=>({selected:f()==="square"}),()=>({selected:f()==="circle"}),()=>({selected:f()==="quarter"}),()=>({active:s(l)}),()=>({active:r()}),()=>(Ce(C()),z(()=>C()?g.find(y=>y.rgb===C())?.name||C():"Select color..."))]),q("click",B,D),q("click",N,()=>F("square")),q("click",Y,()=>F("circle")),q("click",K,()=>F("quarter")),q("click",ye,()=>i("zoomIn")),q("click",Ee,()=>i("zoomOut")),q("click",ve,t),q("click",Pe,o),q("click",Le,()=>m(b,!s(b))),wa(We,M),q("input",We,u),q("change",al,A),W(e,d),ua()}function Sn(e){e=e.replace(/^#/,""),e.length===3&&(e=e.split("").map(a=>a+a).join(""));const n=parseInt(e,16);return{r:n>>16&255,g:n>>8&255,b:n&255}}function Pn(e,n,a,l){let r=l[0],t=1/0;for(const o of l){const c=Sn(o),i=Math.sqrt(Math.pow(e-c.r,2)+Math.pow(n-c.g,2)+Math.pow(a-c.b,2));i<t&&(t=i,r=o)}return r}function Ln(e){return e<85?"square":e<170?"quarter":"circle"}function Gn(e,n,a=32,l=32){return new Promise((r,t)=>{const o=new window.Image;o.src=e,o.onload=()=>{const c=document.createElement("canvas"),i=c.getContext("2d");if(c.width=a,c.height=l,!i){t(new Error("Could not get 2D context"));return}i.drawImage(o,0,0,a,l);const f=i.getImageData(0,0,a,l).data,C=[];for(let _=0;_<f.length;_+=4){const F=_/4,A=F%a,v=Math.floor(F/a);let b=f[_],g=f[_+1],T=f[_+2];f[_+3]===0&&(b=255,g=255,T=255);const S=(b+g+T)/3;let D=Ln(S),M=0;const u=v===0,d=v===l-1,B=A===0,h=A===a-1;D==="quarter"&&(u||d||B||h)?u?M=2:d?M=0:B?M=1:h&&(M=3):D==="quarter"&&(D=S<128?"square":"circle");const P=Pn(b,g,T,n);C.push({shape:D,color:P,rotation:M})}r(C)},o.onerror=t})}var On=ee('<main class="svelte-1uha8ag"><!> <!></main>');function Yn(e,n){ia(n,!1);let a=G("square"),l=G(Fe.length>0?Fe[0].rgb:"#000000"),r=G(null),t=G(!1),o=G("left"),c=G(1),i=G(32);function f(){m(c,Math.min(s(c)+.1,3))}function C(){m(c,Math.max(s(c)-.1,.2))}let _=G(!1),F=G(0);function A(h){m(a,h.detail.shape)}function v(h){m(F,h.detail.rotation)}function b(h){m(l,h.detail.color)}async function g(h){const P=Fe.map(U=>U.rgb);m(r,await Gn(h.detail.src,P,s(i),s(i)))}function T(h){m(i,h.detail.size),m(r,null)}function L(h){m(_,h.detail.colorPickerMode)}function S(h){m(l,h.detail.color),m(_,!1)}Fa();var D=On();Vl(h=>{Rl.title="Dotsly"});var M=E(D);En(M,{get toolbarPosition(){return s(o)},set toolbarPosition(h){m(o,h)},get selectedColor(){return s(l)},set selectedColor(h){m(l,h)},get size(){return s(i)},set size(h){m(i,h)},$$events:{shapeSelected:A,colorSelected:b,imageUploaded:g,paintModeToggled:h=>m(t,h.detail.paintMode),colorPickerModeToggled:L,zoomIn:f,zoomOut:C,quarterRotationChanged:v,sizeChanged:T},$$legacy:!0});var u=O(M,2);{var d=h=>{ya(h,{get width(){return s(i)},get height(){return s(i)},get selectedShape(){return s(a)},get selectedColor(){return s(l)},get grid(){return s(r)},get paintMode(){return s(t)},get colorPickerMode(){return s(_)},get toolbarPosition(){return s(o)},get zoom(){return s(c)},get quarterRotation(){return s(F)},$$events:{colorPicked:S}})},B=h=>{ya(h,{get width(){return s(i)},get height(){return s(i)},get selectedShape(){return s(a)},get selectedColor(){return s(l)},get paintMode(){return s(t)},get colorPickerMode(){return s(_)},get toolbarPosition(){return s(o)},get zoom(){return s(c)},get quarterRotation(){return s(F)},$$events:{colorPicked:S}})};de(u,h=>{s(r)?h(d):h(B,!1)})}w(D),W(e,D),ua()}export{Yn as component};
