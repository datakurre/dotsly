import"../chunks/DsnmJJEf.js";import"../chunks/5-oCGudx.js";import{B as xe,w as Je,z as fe,h as N,ay as je,a as $e,g as o,W as Ge,x as ea,H as aa,y as Te,A as ve,J as se,ad as na,aG as la,C as ke,F as ta,D as le,ac as Ae,a4 as L,aa as we,aD as Le,av as ra,aR as ue,G as Oe,I as sa,aS as Fe,aT as oa,aU as ge,al as Re,ar as ia,aV as da,aC as ua,aW as Fa,T as ca,aX as qe,M as fa,aY as va,aZ as ga,a_ as ha,a$ as pa,b0 as ba,b1 as Ca,b2 as ma,b3 as _a,a6 as Ie,d as I,L as ka,b4 as Ba,p as U,b5 as de,R as E,f as ae,b6 as De,n as R,q as y,s as A,t as Y,m as x,o as X,k as he,l as pe,b7 as Da,am as ze,v as G,b8 as He,b9 as Ma}from"../chunks/Q-vj7pk7.js";import{c as K,e as q,s as be,a as Ta}from"../chunks/BVVwx5P-.js";import{p as M,b as Ne,i as ee}from"../chunks/4Br8f_pg.js";import{i as Z}from"../chunks/CD14ac8p.js";import{s as Aa}from"../chunks/B4RGounJ.js";function oe(a,n){return n}function wa(a,n,l){for(var e=a.items,t=[],r=n.length,s=0;s<r;s++)da(n[s].e,t,!0);var u=r>0&&t.length===0&&l!==null;if(u){var d=l.parentNode;ua(d),d.append(l),e.clear(),Q(a,n[0].prev,n[r-1].next)}Fa(t,()=>{for(var f=0;f<r;f++){var C=n[f];u||(e.delete(C.k),Q(a,C.prev,C.next)),Re(C.e,!u)}})}function ie(a,n,l,e,t,r=null){var s=a,u={flags:n,items:new Map,first:null},d=(n&qe)!==0;if(d){var f=a;s=N?fe(je(f)):f.appendChild(xe())}N&&$e();var C=null,_=!1,w=new Map,T=Ge(()=>{var D=l();return ra(D)?D:D==null?[]:Le(D)}),b,B;function k(){ya(B,b,u,w,s,t,n,e,l),r!==null&&(b.length===0?C?Oe(C):C=ke(()=>r(s)):C!==null&&sa(C,()=>{C=null}))}Je(()=>{B??=ca,b=o(T);var D=b.length;if(_&&D===0)return;_=D===0;let p=!1;if(N){var F=ea(s)===aa;F!==(D===0)&&(s=Te(),fe(s),ve(!1),p=!0)}if(N){for(var h=null,g,c=0;c<D;c++){if(se.nodeType===na&&se.data===la){s=se,p=!0,ve(!1);break}var v=b[c],m=e(v,c);g=Be(se,u,h,null,v,m,c,t,n,l),u.items.set(m,g),h=g}D>0&&fe(Te())}if(N)D===0&&r&&(C=ke(()=>r(s)));else if(ta()){var i=new Set,S=le;for(c=0;c<D;c+=1){v=b[c],m=e(v,c);var P=u.items.get(m)??w.get(m);P?(n&(Fe|ue))!==0&&Ye(P,v,c,n):(g=Be(null,u,null,null,v,m,c,t,n,l,!0),w.set(m,g)),i.add(m)}for(const[O,H]of u.items)i.has(O)||S.skipped_effects.add(H.e);S.add_callback(k)}else k();p&&ve(!0),o(T)}),N&&(s=se)}function ya(a,n,l,e,t,r,s,u,d){var f=(s&va)!==0,C=(s&(Fe|ue))!==0,_=n.length,w=l.items,T=l.first,b=T,B,k=null,D,p=[],F=[],h,g,c,v;if(f)for(v=0;v<_;v+=1)h=n[v],g=u(h,v),c=w.get(g),c!==void 0&&(c.a?.measure(),(D??=new Set).add(c));for(v=0;v<_;v+=1){if(h=n[v],g=u(h,v),c=w.get(g),c===void 0){var m=e.get(g);if(m!==void 0){e.delete(g),w.set(g,m);var i=k?k.next:b;Q(l,k,m),Q(l,m,i),Ce(m,i,t),k=m}else{var S=b?b.e.nodes_start:t;k=Be(S,l,k,k===null?l.first:k.next,h,g,v,r,s,d)}w.set(g,k),p=[],F=[],b=k.next;continue}if(C&&Ye(c,h,v,s),(c.e.f&ge)!==0&&(Oe(c.e),f&&(c.a?.unfix(),(D??=new Set).delete(c))),c!==b){if(B!==void 0&&B.has(c)){if(p.length<F.length){var P=F[0],O;k=P.prev;var H=p[0],W=p[p.length-1];for(O=0;O<p.length;O+=1)Ce(p[O],P,t);for(O=0;O<F.length;O+=1)B.delete(F[O]);Q(l,H.prev,W.next),Q(l,k,H),Q(l,W,P),b=P,k=W,v-=1,p=[],F=[]}else B.delete(c),Ce(c,b,t),Q(l,c.prev,c.next),Q(l,c,k===null?l.first:k.next),Q(l,k,c),k=c;continue}for(p=[],F=[];b!==null&&b.k!==g;)(b.e.f&ge)===0&&(B??=new Set).add(b),F.push(b),b=b.next;if(b===null)continue;c=b}p.push(c),k=c,b=c.next}if(b!==null||B!==void 0){for(var J=B===void 0?[]:Le(B);b!==null;)(b.e.f&ge)===0&&J.push(b),b=b.next;var j=J.length;if(j>0){var re=(s&qe)!==0&&_===0?t:null;if(f){for(v=0;v<j;v+=1)J[v].a?.measure();for(v=0;v<j;v+=1)J[v].a?.fix()}wa(l,J,re)}}f&&fa(()=>{if(D!==void 0)for(c of D)c.a?.apply()}),a.first=l.first&&l.first.e,a.last=k&&k.e;for(var $ of e.values())Re($.e);e.clear()}function Ye(a,n,l,e){(e&Fe)!==0&&Ae(a.v,n),(e&ue)!==0?Ae(a.i,l):a.i=l}function Be(a,n,l,e,t,r,s,u,d,f,C){var _=(d&Fe)!==0,w=(d&oa)===0,T=_?w?L(t,!1,!1):we(t):t,b=(d&ue)===0?s:we(s),B={i:b,v:T,k:r,a:null,e:null,prev:l,next:e};try{if(a===null){var k=document.createDocumentFragment();k.append(a=xe())}return B.e=ke(()=>u(a,T,b,f),N),B.e.prev=l&&l.e,B.e.next=e&&e.e,l===null?C||(n.first=B):(l.next=B,l.e.next=B.e),e!==null&&(e.prev=B,e.e.prev=B.e),B}finally{}}function Ce(a,n,l){for(var e=a.next?a.next.e.nodes_start:l,t=n?n.e.nodes_start:l,r=a.e.nodes_start;r!==null&&r!==e;){var s=ia(r);t.before(r),r=s}}function Q(a,n,l){n===null?a.first=l:(n.next=l,n.e.next=l&&l.e),l!==null&&(l.prev=n,l.e.prev=n&&n.e)}const ye=[...` 	
\r\f \v\uFEFF`];function Ea(a,n,l){var e=a==null?"":""+a;if(n&&(e=e?e+" "+n:n),l){for(var t in l)if(l[t])e=e?e+" "+t:t;else if(e.length)for(var r=t.length,s=0;(s=e.indexOf(t,s))>=0;){var u=s+r;(s===0||ye.includes(e[s-1]))&&(u===e.length||ye.includes(e[u]))?e=(s===0?"":e.substring(0,s))+e.substring(u+1):s=u}}return e===""?null:e}function Pa(a,n){return a==null?null:String(a)}function ne(a,n,l,e,t,r){var s=a.__className;if(N||s!==l||s===void 0){var u=Ea(l,e,r);(!N||u!==a.getAttribute("class"))&&(u==null?a.removeAttribute("class"):a.className=u),a.__className=l}else if(r&&t!==r)for(var d in r){var f=!!r[d];(t==null||f!==!!t[d])&&a.classList.toggle(d,f)}return r}function te(a,n,l,e){var t=a.__style;if(N||t!==n){var r=Pa(n);(!N||r!==a.getAttribute("style"))&&(r==null?a.removeAttribute("style"):a.style.cssText=r),a.__style=n}return e}const Sa=Symbol("is custom element"),xa=Symbol("is html");function Ve(a){if(N){var n=!1,l=()=>{if(!n){if(n=!0,a.hasAttribute("value")){var e=a.value;z(a,"value",null),a.value=e}if(a.hasAttribute("checked")){var t=a.checked;z(a,"checked",null),a.checked=t}}};a.__on_r=l,Ca(l),ma()}}function z(a,n,l,e){var t=Ga(a);N&&(t[n]=a.getAttribute(n),n==="src"||n==="srcset"||n==="href"&&a.nodeName==="LINK")||t[n]!==(t[n]=l)&&(n==="loading"&&(a[ga]=l),l==null?a.removeAttribute(n):typeof l!="string"&&La(a).includes(n)?a[n]=l:a.setAttribute(n,l))}function Ga(a){return a.__attributes??={[Sa]:a.nodeName.includes("-"),[xa]:a.namespaceURI===ha}}var Ee=new Map;function La(a){var n=a.getAttribute("is")||a.nodeName,l=Ee.get(n);if(l)return l;Ee.set(n,l=[]);for(var e,t=a,r=Element.prototype;r!==t;){e=ba(t);for(var s in e)e[s].set&&l.push(s);t=pa(t)}return l}function Ue(a,n,l=n){var e=new WeakSet;_a(a,"input",async t=>{var r=t?a.defaultValue:a.value;if(r=me(a)?_e(r):r,l(r),le!==null&&e.add(le),await Ie(),r!==(r=n())){var s=a.selectionStart,u=a.selectionEnd;a.value=r??"",u!==null&&(a.selectionStart=s,a.selectionEnd=Math.min(u,a.value.length))}}),(N&&a.defaultValue!==a.value||I(n)==null&&a.value)&&(l(me(a)?_e(a.value):a.value),le!==null&&e.add(le)),ka(()=>{var t=n();if(a===document.activeElement){var r=Ba??le;if(e.has(r))return}me(a)&&t===_e(a.value)||a.type==="date"&&!t&&!a.value||t!==a.value&&(a.value=t??"")})}function me(a){var n=a.type;return n==="number"||n==="range"}function _e(a){return a===""?null:+a}const Oa=`Part,Color,Quantity,Is Spare
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
`,Ra=`Part,Color,Quantity,Is Spare
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
`,qa=`Part,Color,Quantity,Is Spare
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
`,Ia=`Part,Color,Quantity,Is Spare
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
`,za=`Part,Color,Quantity,Is Spare
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
`,Ha=`Part,Color,Quantity,Is Spare
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
`,Na=`id,name,rgb,is_trans,num_parts,num_sets,y1,y2
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
`,Pe=Object.assign({"../../data/sets/rebrickable_parts_41809-1-hedwig-pencil-holder.csv":Oa,"../../data/sets/rebrickable_parts_41904-1-animal-picture-holders.csv":Ra,"../../data/sets/rebrickable_parts_41935-1-lots-of-dots.csv":qa,"../../data/sets/rebrickable_parts_41950-1-lots-of-dots-lettering.csv":Ia,"../../data/sets/rebrickable_parts_41957-1-adhesive-patches-mega-pack.csv":za,"../../data/sets/rebrickable_parts_41961-1-designer-toolkit-patterns.csv":Ha});function Ya(a){const n=a.trim().split(`
`);return n[0].split(","),n.slice(1).map(l=>{const e=l.split(",");return{id:Number(e[0]),name:e[1],rgb:`#${e[2]}`,is_trans:e[3]==="True"}})}function Va(a){let n=0,l=0,e=0;a.length===7?(n=parseInt(a.slice(1,3),16),l=parseInt(a.slice(3,5),16),e=parseInt(a.slice(5,7),16)):a.length===4&&(n=parseInt(a[1]+a[1],16),l=parseInt(a[2]+a[2],16),e=parseInt(a[3]+a[3],16)),n/=255,l/=255,e/=255;const t=Math.max(n,l,e),r=Math.min(n,l,e);let s=0,u=0,d=(t+r)/2;if(t!==r){const f=t-r;switch(u=d>.5?f/(2-t-r):f/(t+r),t){case n:s=(l-e)/f+(l<e?6:0);break;case l:s=(e-n)/f+2;break;case e:s=(n-l)/f+4;break}s/=6}return{h:s*360,s:u*100,l:d*100}}function Ua(a,n=15,l=5){const e={},t=new Set;for(const d of a){const f=d.s<10?999:Math.floor(d.h/n);e[f]||(e[f]=[]),t.has(d.rgb)||(e[f].push(d),t.add(d.rgb))}Object.values(e).forEach(d=>d.sort((f,C)=>f.l-C.l));const s=Object.keys(e).map(Number).sort((d,f)=>d-f).flatMap(d=>e[d]),u=[];for(let d=0;d<s.length;d+=l)u.push(s.slice(d,d+l));return u}function Xa(){const a=new Set;for(const n in Pe){const e=Pe[n].trim().split(`
`);for(const t of e.slice(1)){const r=t.split(",");if(r.length>1){const s=Number(r[1]);isNaN(s)||a.add(s)}}}return a}const Za=Xa(),V=Ya(Na).filter(a=>Za.has(a.id)&&!a.name.includes("Trans-Clear"));function Wa(){return V.map(a=>{const n=Va(a.rgb);return{...a,...n}})}const Qa=Ua(Wa());var Ka=R('<div class="zoomable-container svelte-b0dtxj" role="application" aria-label="Zoomable and pannable container" tabindex="0"><!></div>');function Ja(a,n){U(n,!1);const l=K();let e=M(n,"zoom",12,1),t=M(n,"panX",12,0),r=M(n,"panY",12,0),s=L(!1),u=0,d=0,f=L(!1),C=L(),_=L(e());function w(h){if(h.ctrlKey)return;h.preventDefault();const g=.1;let c=e();h.deltaY<0?c=Math.min(e()+g,5):h.deltaY>0&&(c=Math.max(e()-g,.2)),c!==e()&&(e(c),l("zoomChanged",{zoom:e()}))}function T(h){h.button===0&&(E(s,!0),E(f,!1),u=h.clientX,d=h.clientY,window.addEventListener("mousemove",b),window.addEventListener("mouseup",B),h.preventDefault())}function b(h){if(!o(s))return;const g=h.clientX-u,c=h.clientY-d;(Math.abs(g)>2||Math.abs(c)>2)&&E(f,!0),t(t()+g),r(r()+c),u=h.clientX,d=h.clientY,l("panChanged",{panX:t(),panY:r()})}function B(){E(s,!1),window.removeEventListener("mousemove",b),window.removeEventListener("mouseup",B),l("panEnd",{didPan:o(f)}),setTimeout(()=>{E(f,!1)},10)}function k(h){h.key===" "&&(h.preventDefault(),T({button:0,clientX:u,clientY:d,preventDefault:()=>{}}))}function D(h){h.key===" "&&(h.preventDefault(),B())}de(()=>(ae(e()),o(_),o(C),ae(t()),ae(r())),()=>{if(e()!==o(_)&&o(C)){const h=o(C).parentElement;if(h){const g=h.getBoundingClientRect(),c=g.left+g.width/2,v=g.top+g.height/2,m=o(C).getBoundingClientRect(),i=m.left+m.width/2,S=m.top+m.height/2,P=c-i,O=v-S;t(t()+(P-P*(e()/o(_)))),r(r()+(O-O*(e()/o(_)))),l("panChanged",{panX:t(),panY:r()})}E(_,e())}}),De(),Z();var p=Ka(),F=y(p);Aa(F,n,"default",{get didPan(){return o(f)}}),A(p),Ne(p,h=>E(C,h),()=>o(C)),Y(()=>te(p,`transform: translate(${t()??""}px, ${r()??""}px) scale(${e()??""}); cursor: ${o(s)?"grabbing":"grab"}; user-select: none; touch-action: none;`)),q("mousedown",p,T),q("keydown",p,k),q("keyup",p,D),q("wheel",p,w),x(a,p),X()}var ja=R('<div class="square svelte-gxsx5p"></div>');function Xe(a,n){let l=M(n,"color",8,"#000");var e=ja();Y(()=>te(e,`--color: ${l()??""}`)),x(a,e)}var $a=R('<div class="circle svelte-r5z0cw"></div>');function Ze(a,n){let l=M(n,"color",8,"#000");var e=$a();Y(()=>te(e,`--color: ${l()??""}`)),x(a,e)}var en=R('<div class="quarter-container svelte-19hi45o"><svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none" class="svelte-19hi45o"><path d="M 0,0 L 100,0 A 100,100 0 0,1 0,100 Z" stroke="none"></path></svg></div>');function We(a,n){let l=M(n,"color",8,"#000"),e=M(n,"rotation",8,0);var t=en(),r=y(t),s=y(r);A(r),A(t),Y(()=>{z(s,"fill",l()),z(s,"transform",`rotate(${e()*90}, 50, 50)`)}),x(a,t)}var an=R('<div class="cell svelte-1hhz0mg" role="button" tabindex="0"><!></div>'),nn=R('<div class="grid svelte-1hhz0mg"></div>');function ln(a,n){U(n,!1);const l=K();let e=M(n,"grid",12),t=M(n,"width",8),r=M(n,"height",8),s=M(n,"selectedShape",8,"square"),u=M(n,"selectedColor",8),d=M(n,"paintMode",8,!1),f=M(n,"colorPickerMode",8,!1),C=M(n,"quarterRotation",8,0);function _(p){const F=e()[p];if(!F)return w(p);const{shape:h,color:g}=F;if(h===s()&&g===u())return;const c=[p],v=new Set;for(;c.length;){const m=c.pop();if(m===void 0||v.has(m))continue;v.add(m);const i=e()[m];if(!i||i.shape!==h||i.color!==g)continue;e(e()[m]={shape:s(),color:u(),rotation:s()==="quarter"?C():0},!0);const S=m%t(),P=Math.floor(m/t());S>0&&c.push(m-1),S<t()-1&&c.push(m+1),P>0&&c.push(m-t()),P<r()-1&&c.push(m+t())}e([...e()]),l("gridChanged",{grid:e()})}function w(p){const F=e()[p];F&&F.shape===s()&&F.color===u()?e(e()[p]=null,!0):s()==="quarter"?e(e()[p]={shape:s(),color:u(),rotation:C()},!0):e(e()[p]={shape:s(),color:u(),rotation:0},!0),e([...e()]),l("gridChanged",{grid:e()})}function T(p){const F=e()[p];F&&F.color&&l("colorPicked",{color:F.color})}let b=M(n,"didPan",8,!1);function B(p){b()||(f()?T(p):d()?_(p):w(p))}function k(p,F){p.key==="Enter"&&(f()?T(F):d()?_(F):w(F))}Z();var D=nn();ie(D,5,e,oe,(p,F,h)=>{var g=an(),c=y(g);{var v=m=>{var i=he(),S=pe(i);{var P=H=>{Xe(H,{get color(){return o(F),I(()=>o(F).color)}})},O=H=>{var W=he(),J=pe(W);{var j=$=>{Ze($,{get color(){return o(F),I(()=>o(F).color)}})},re=$=>{var Me=he(),Qe=pe(Me);{var Ke=ce=>{We(ce,{get color(){return o(F),I(()=>o(F).color)},get rotation(){return o(F),I(()=>o(F).rotation)}})};ee(Qe,ce=>{o(F),I(()=>o(F).shape==="quarter")&&ce(Ke)},!0)}x($,Me)};ee(J,$=>{o(F),I(()=>o(F).shape==="circle")?$(j):$(re,!1)},!0)}x(H,W)};ee(S,H=>{o(F),I(()=>o(F).shape==="square")?H(P):H(O,!1)})}x(m,i)};ee(c,m=>{o(F)&&m(v)})}A(g),q("click",g,()=>B(h)),q("keydown",g,m=>k(m,h)),x(p,g)}),A(D),Y(()=>te(D,`--width: ${t()??""}; --height: ${r()??""};`)),x(a,D),X()}var tn=R("<div><!></div>");function Se(a,n){U(n,!1);const l=K();let e=M(n,"grid",8,null),t=M(n,"width",8,32),r=M(n,"height",8,32),s=M(n,"selectedShape",8,"square"),u=M(n,"selectedColor",24,()=>V.length>0?V[0].rgb:"#000000"),d=M(n,"paintMode",8,!1),f=M(n,"colorPickerMode",8,!1),C=M(n,"toolbarPosition",8,"left"),_=M(n,"quarterRotation",8,0),w=M(n,"zoom",12,1),T=L(),b=L(0),B=L(0);function k(v){w(v.detail.zoom)}function D(v){E(b,v.detail.panX),E(B,v.detail.panY)}function p(v){v.detail.didPan}function F(v){E(T,v.detail.grid)}function h(v){l("colorPicked",v.detail)}de(()=>(ae(e()),ae(t()),ae(r())),()=>{E(T,e()||Array(t()*r()).fill(null))}),De(),Z();var g=tn(),c=y(g);Ja(c,{get zoom(){return w()},get panX(){return o(b)},get panY(){return o(B)},$$events:{zoomChanged:k,panChanged:D,panEnd:p},children:Da,$$slots:{default:(v,m)=>{const i=Ge(()=>m.didPan);ln(v,{get grid(){return o(T)},get width(){return t()},get height(){return r()},get selectedShape(){return s()},get selectedColor(){return u()},get paintMode(){return d()},get colorPickerMode(){return f()},get quarterRotation(){return _()},get didPan(){return o(i)},$$events:{gridChanged:F,colorPicked:h}})}}}),A(g),Y(()=>ne(g,1,`container ${C()==="left"?"toolbar-left-margin":"toolbar-top-margin"}`,"svelte-1w4104m")),x(a,g),X()}var rn=R('<button type="button" class="dropdown-item" style="display: flex; align-items: center; width: 100%; background: none; border: none; padding: 0; text-align: left; cursor: pointer;"><span class="dropdown-swatch"></span> <span> </span> <span style="margin-left:auto; color:#888; font-size:0.9em"> </span></button>'),sn=R('<div class="dropdown-item">No colors found</div>'),on=R('<div class="dropdown-menu"><input type="text" placeholder="Search color..." class="dropdown-search"/> <div class="dropdown-list"><!> <!></div></div>'),dn=R('<button type="button"></button>'),un=R('<div class="palette-row"></div>'),Fn=R('<div class="color-picker"><div class="color-dropdown-container"><button type="button" class="dropdown-toggle"> <span style="margin-left:0.5em;">▼</span></button> <!></div> <div class="colors"><div class="palette2d"></div></div></div>');function cn(a,n){U(n,!1);const l=K();let e=M(n,"selectedColor",28,()=>V.length>0?V[0].rgb:"#000000"),t=L(""),r=L(!1),s=L(null),u=V,d=L(u);function f(F){e(F),l("colorSelected",{color:F})}function C(F){e(F.rgb),E(r,!1),E(t,""),l("colorSelected",{color:F.rgb})}de(()=>(o(r),o(s)),()=>{o(r)&&Ie().then(()=>{o(s)?.focus()})}),de(()=>o(t),()=>{E(d,o(t).trim()?u.filter(F=>F.name.toLowerCase().includes(o(t).toLowerCase())||F.rgb.replace("#","").includes(o(t).replace("#",""))):u)}),De(),Z();var _=Fn(),w=y(_),T=y(w),b=y(T);ze(),A(T);var B=G(T,2);{var k=F=>{var h=on(),g=y(h);Ve(g),Ne(g,S=>E(s,S),()=>o(s));var c=G(g,2),v=y(c);ie(v,1,()=>o(d),oe,(S,P)=>{var O=rn(),H=y(O),W=G(H,2),J=y(W,!0);A(W);var j=G(W,2),re=y(j,!0);A(j),A(O),Y(()=>{z(O,"aria-label",(o(P),I(()=>`Select color ${o(P).name}`))),te(H,`background:${o(P),I(()=>o(P).rgb)??""}`),be(J,(o(P),I(()=>o(P).name))),be(re,(o(P),I(()=>o(P).rgb)))}),q("click",O,()=>C(o(P))),x(S,O)});var m=G(v,2);{var i=S=>{var P=sn();x(S,P)};ee(m,S=>{o(d),I(()=>o(d).length===0)&&S(i)})}A(c),A(h),Ue(g,()=>o(t),S=>E(t,S)),x(F,h)};ee(B,F=>{o(r)&&F(k)})}A(w);var D=G(w,2),p=y(D);ie(p,5,()=>Qa,oe,(F,h)=>{var g=un();ie(g,5,()=>o(h),oe,(c,v)=>{var m=dn();Y(()=>{te(m,`width: 1.5rem; height: 1.5rem; background: ${o(v),I(()=>o(v).rgb)??""}; border: 2px solid ${ae(e()),o(v),I(()=>e()===o(v).rgb?"#333":"#ccc")??""}; border-radius: 0.25rem; cursor: pointer; margin: 0 0.1rem 0.1rem 0;`),z(m,"aria-label",(o(v),I(()=>o(v).name))),z(m,"title",(o(v),I(()=>o(v).name)))}),q("click",m,()=>f(o(v).rgb)),x(c,m)}),A(g),x(F,g)}),A(p),A(D),A(_),Y(F=>be(b,`${F??""} `),[()=>(ae(e()),I(()=>e()?u.find(F=>F.rgb===e())?.name||e():"Select color..."))]),q("click",T,()=>E(r,!o(r))),x(a,_),X()}var fn=R('<div class="shape-group"><div class="group-label">Shapes</div> <div class="shape-grid"><button aria-label="Square" title="Square - Draw square shapes"><div class="shape-icon"><!></div></button> <button aria-label="Circle" title="Circle - Draw circular shapes"><div class="shape-icon"><!></div></button> <button aria-label="Quarter" title="Quarter - Draw quarter tile shapes (click again to rotate)"><div class="shape-icon"><!></div></button></div></div>');function vn(a,n){U(n,!1);const l=K();let e=M(n,"selectedShape",12,"square"),t=M(n,"selectedColor",8,"#000000"),r=M(n,"quarterRotation",12,0);function s(g){if(g==="quarter")if(e()==="quarter"){r((r()+1)%4),l("quarterRotationChanged",{rotation:r()});return}else r(0);e(g),l("shapeSelected",{shape:g}),g==="quarter"&&l("quarterRotationChanged",{rotation:r()})}Z();var u=fn(),d=G(y(u),2),f=y(d);let C;var _=y(f),w=y(_);Xe(w,{get color(){return t()}}),A(_),A(f);var T=G(f,2);let b;var B=y(T),k=y(B);Ze(k,{get color(){return t()}}),A(B),A(T);var D=G(T,2);let p;var F=y(D),h=y(F);We(h,{get color(){return t()},get rotation(){return r()}}),A(F),A(D),A(d),A(u),Y((g,c,v)=>{C=ne(f,1,"shape-button",null,C,g),b=ne(T,1,"shape-button",null,b,c),p=ne(D,1,"shape-button",null,p,v)},[()=>({selected:e()==="square"}),()=>({selected:e()==="circle"}),()=>({selected:e()==="quarter"})]),q("click",f,()=>s("square")),q("click",T,()=>s("circle")),q("click",D,()=>s("quarter")),x(a,u),X()}var gn=R('<div class="tool-group"><div class="group-label">Tools</div> <div class="tool-grid"><button type="button" aria-label="Zoom in" class="tool-button" title="Zoom In"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#555" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="11" y1="8" x2="11" y2="14"></line><line x1="8" y1="11" x2="14" y2="11"></line><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg></button> <button type="button" aria-label="Zoom out" class="tool-button" title="Zoom Out"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#555" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="8" y1="11" x2="14" y2="11"></line><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg></button> <button type="button" aria-label="Paint roller tool" title="Fill Tool - Fill areas with selected color"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="4" width="10" height="4" rx="1.5"></rect><path d="M16 6v4c0 1-1 2-2 2H10c-1 0-2-1-2-2V6"></path><rect x="11" y="14" width="2" height="5" rx="1"></rect><path d="M12 12v2"></path></svg></button> <button type="button" aria-label="Pick color from canvas" title="Color Picker - Click to pick colors from the canvas"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="7" stroke-width="2"></circle><path d="M12 9v3l2 2" stroke-width="2"></path></svg></button></div></div>');function hn(a,n){U(n,!1);const l=K();let e=M(n,"paintMode",12,!1),t=M(n,"colorPickerMode",12,!1);function r(){e(!e()),e()&&t(!1),l("paintModeToggled",{paintMode:e()})}function s(){t(!t()),t()&&e(!1),l("colorPickerModeToggled",{colorPickerMode:t()})}Z();var u=gn(),d=G(y(u),2),f=y(d),C=G(f,2),_=G(C,2);let w;var T=y(_),b=y(T),B=G(b),k=G(B),D=G(k);A(T),A(_);var p=G(_,2);let F;var h=y(p),g=y(h);ze(),A(h),A(p),A(d),A(u),Y((c,v)=>{w=ne(_,1,"tool-button",null,w,c),z(T,"stroke",e()?"#333":"#888"),z(b,"fill",e()?"#f4d23e":"#fff"),z(b,"stroke",e()?"#333":"#888"),z(B,"stroke",e()?"#333":"#888"),z(k,"fill",e()?"#f4d23e":"#fff"),z(k,"stroke",e()?"#333":"#888"),z(D,"stroke",e()?"#333":"#888"),F=ne(p,1,"tool-button",null,F,v),z(h,"stroke",t()?"#333":"#888"),z(g,"fill",t()?"#aef":"#fff")},[()=>({active:e()}),()=>({active:t()})]),q("click",f,()=>l("zoomIn")),q("click",C,()=>l("zoomOut")),q("click",_,r),q("click",p,s),x(a,u),X()}var pn=R('<div class="canvas-size-group" style="display:flex; justify-content:center; align-items:center; width:100%;"><div class="group-label" style="margin-right: 1ex">Size</div> <div class="tool-grid"><label style="display:flex; flex-direction:column; align-items:center;"><input type="number" min="1" max="256"/></label></div></div>');function bn(a,n){U(n,!1);const l=K();let e=M(n,"size",12,32);function t(f){const C=f.target;e(Math.max(1,Math.min(128,parseInt(C.value)||1))),l("sizeChanged",{size:e()})}Z();var r=pn(),s=G(y(r),2),u=y(s),d=y(u);Ve(d),A(u),A(s),A(r),Ue(d,e),q("input",d,t),x(a,r),X()}var Cn=R('<div class="image-upload"><label class="upload-label"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#555" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align: middle;"><path d="M12 16V4"></path><polyline points="8 8 12 4 16 8"></polyline><rect x="4" y="16" width="16" height="4" rx="2"></rect></svg> <span>Upload image</span> <input type="file" accept="image/png, image/jpeg"/></label></div>');function mn(a,n){U(n,!1);const l=K();function e(u){const d=u.target,f=d.files&&d.files[0];if(f){const C=new FileReader;C.onload=()=>{l("imageUploaded",{src:C.result})},C.readAsDataURL(f)}}Z();var t=Cn(),r=y(t),s=G(y(r),4);A(r),A(t),q("change",s,e),x(a,t),X()}var _n=He('<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#555" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align: middle;"><polyline points="4 12 4 4 12 4"></polyline><line x1="4" y1="4" x2="20" y2="20"></line></svg>'),kn=He('<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#555" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align: middle;"><polyline points="12 4 20 4 20 12"></polyline><line x1="4" y1="4" x2="20" y2="20"></line></svg>'),Bn=R('<button class="toolbar-toggle"><!></button>');function Dn(a,n){U(n,!1);const l=K();let e=M(n,"toolbarPosition",12,"left");function t(){e(e()==="left"?"top":"left"),l("positionToggled",{position:e()})}Z();var r=Bn(),s=y(r);{var u=f=>{var C=_n();x(f,C)},d=f=>{var C=kn();x(f,C)};ee(s,f=>{e()==="left"?f(u):f(d,!1)})}A(r),Y(()=>z(r,"aria-label",e()==="left"?"Move toolbar to top":"Move toolbar to left")),q("click",r,t),x(a,r),X()}var Mn=R("<div><!> <!> <!> <!> <!> <!></div>");function Tn(a,n){U(n,!1);const l=K();let e=M(n,"selectedShape",12,"square"),t=M(n,"selectedColor",28,()=>V.length>0?V[0].rgb:"#000000"),r=M(n,"paintMode",12,!1),s=M(n,"colorPickerMode",12,!1),u=M(n,"size",12,32),d=M(n,"toolbarPosition",12,"left"),f=L(0);function C(i){e(i.detail.shape),l("shapeSelected",i.detail)}function _(i){E(f,i.detail.rotation),l("quarterRotationChanged",i.detail)}function w(i){t(i.detail.color),l("colorSelected",i.detail)}function T(i){r(i.detail.paintMode),l("paintModeToggled",i.detail)}function b(i){s(i.detail.colorPickerMode),l("colorPickerModeToggled",i.detail)}function B(i){u(i.detail.size),l("sizeChanged",i.detail)}function k(i){l("imageUploaded",i.detail)}function D(i){d(i.detail.position)}Z();var p=Mn(),F=y(p);Dn(F,{get toolbarPosition(){return d()},set toolbarPosition(i){d(i)},$$events:{positionToggled:D},$$legacy:!0});var h=G(F,2);vn(h,{get selectedColor(){return t()},get selectedShape(){return e()},set selectedShape(i){e(i)},get quarterRotation(){return o(f)},set quarterRotation(i){E(f,i)},$$events:{shapeSelected:C,quarterRotationChanged:_},$$legacy:!0});var g=G(h,2);hn(g,{get paintMode(){return r()},set paintMode(i){r(i)},get colorPickerMode(){return s()},set colorPickerMode(i){s(i)},$$events:{paintModeToggled:T,colorPickerModeToggled:b,zoomIn:()=>l("zoomIn"),zoomOut:()=>l("zoomOut")},$$legacy:!0});var c=G(g,2);cn(c,{get selectedColor(){return t()},set selectedColor(i){t(i)},$$events:{colorSelected:w},$$legacy:!0});var v=G(c,2);bn(v,{get size(){return u()},set size(i){u(i)},$$events:{sizeChanged:B},$$legacy:!0});var m=G(v,2);mn(m,{$$events:{imageUploaded:k}}),A(p),Y(()=>ne(p,1,`toolbar ${d()??""}`)),x(a,p),X()}function An(a){a=a.replace(/^#/,""),a.length===3&&(a=a.split("").map(l=>l+l).join(""));const n=parseInt(a,16);return{r:n>>16&255,g:n>>8&255,b:n&255}}function wn(a,n,l,e){let t=e[0],r=1/0;for(const s of e){const u=An(s),d=Math.sqrt(Math.pow(a-u.r,2)+Math.pow(n-u.g,2)+Math.pow(l-u.b,2));d<r&&(r=d,t=s)}return t}function yn(a){return a<85?"square":a<170?"quarter":"circle"}function En(a,n,l=32,e=32){return new Promise((t,r)=>{const s=new window.Image;s.src=a,s.onload=()=>{const u=document.createElement("canvas"),d=u.getContext("2d");if(u.width=l,u.height=e,!d){r(new Error("Could not get 2D context"));return}d.drawImage(s,0,0,l,e);const f=d.getImageData(0,0,l,e).data,C=[];for(let _=0;_<f.length;_+=4){const w=_/4,T=w%l,b=Math.floor(w/l);let B=f[_],k=f[_+1],D=f[_+2];f[_+3]===0&&(B=255,k=255,D=255);const F=(B+k+D)/3;let h=yn(F),g=0;const c=b===0,v=b===e-1,m=T===0,i=T===l-1;h==="quarter"&&(c||v||m||i)?c?g=2:v?g=0:m?g=1:i&&(g=3):h==="quarter"&&(h=F<128?"square":"circle");const S=wn(B,k,D,n);C.push({shape:h,color:S,rotation:g})}t(C)},s.onerror=r})}var Pn=R('<main class="svelte-1uha8ag"><!> <!></main>');function In(a,n){U(n,!1);let l=L("square"),e=L(V.length>0?V[0].rgb:"#000000"),t=L(null),r=L(!1),s=L("left"),u=L(1),d=L(32);function f(){E(u,Math.min(o(u)+.1,3))}function C(){E(u,Math.max(o(u)-.1,.2))}let _=L(!1),w=L(0);function T(i){E(l,i.detail.shape)}function b(i){E(w,i.detail.rotation)}function B(i){E(e,i.detail.color)}async function k(i){const S=V.map(P=>P.rgb);E(t,await En(i.detail.src,S,o(d),o(d)))}function D(i){E(d,i.detail.size),E(t,null)}function p(i){E(_,i.detail.colorPickerMode)}function F(i){E(e,i.detail.color),E(_,!1)}Z();var h=Pn();Ta(i=>{Ma.title="Dotsly"});var g=y(h);Tn(g,{get toolbarPosition(){return o(s)},set toolbarPosition(i){E(s,i)},get selectedColor(){return o(e)},set selectedColor(i){E(e,i)},get size(){return o(d)},set size(i){E(d,i)},$$events:{shapeSelected:T,colorSelected:B,imageUploaded:k,paintModeToggled:i=>E(r,i.detail.paintMode),colorPickerModeToggled:p,zoomIn:f,zoomOut:C,quarterRotationChanged:b,sizeChanged:D},$$legacy:!0});var c=G(g,2);{var v=i=>{Se(i,{get width(){return o(d)},get height(){return o(d)},get selectedShape(){return o(l)},get selectedColor(){return o(e)},get grid(){return o(t)},get paintMode(){return o(r)},get colorPickerMode(){return o(_)},get toolbarPosition(){return o(s)},get zoom(){return o(u)},get quarterRotation(){return o(w)},$$events:{colorPicked:F}})},m=i=>{Se(i,{get width(){return o(d)},get height(){return o(d)},get selectedShape(){return o(l)},get selectedColor(){return o(e)},get paintMode(){return o(r)},get colorPickerMode(){return o(_)},get toolbarPosition(){return o(s)},get zoom(){return o(u)},get quarterRotation(){return o(w)},$$events:{colorPicked:F}})};ee(c,i=>{o(t)?i(v):i(m,!1)})}A(h),x(a,h),X()}export{In as component};
