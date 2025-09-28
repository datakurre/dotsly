import"../chunks/DsnmJJEf.js";import"../chunks/5-oCGudx.js";import{B as xe,w as Je,z as ce,h as N,ay as je,a as $e,g as o,W as Ge,x as ea,H as aa,y as Te,A as fe,J as se,ad as na,aG as la,C as _e,F as ta,D as ne,ac as Ae,a4 as L,aa as we,aD as Le,av as sa,aR as de,G as Oe,I as ra,aS as ue,aT as oa,aU as ve,al as qe,ar as ia,aV as da,aC as ua,aW as Fa,T as ca,aX as Re,M as fa,aY as va,aZ as ga,a_ as ha,a$ as pa,b0 as ba,b1 as Ca,b2 as ma,b3 as _a,a6 as Ie,d as I,L as ka,b4 as Ba,p as U,n as q,q as y,s as M,t as Y,m as x,o as W,R as E,k as ge,l as he,b5 as ke,f as re,b6 as ze,b7 as Da,am as He,v as G,b8 as Ne,b9 as Ma}from"../chunks/Q-vj7pk7.js";import{c as K,o as Ta,e as R,s as pe,a as Aa}from"../chunks/BVVwx5P-.js";import{p as T,b as Be,i as ee}from"../chunks/4Br8f_pg.js";import{i as X}from"../chunks/CD14ac8p.js";import{s as wa}from"../chunks/B4RGounJ.js";function oe(a,n){return n}function ya(a,n,l){for(var e=a.items,t=[],s=n.length,r=0;r<s;r++)da(n[r].e,t,!0);var c=s>0&&t.length===0&&l!==null;if(c){var F=l.parentNode;ua(F),F.append(l),e.clear(),Q(a,n[0].prev,n[s-1].next)}Fa(t,()=>{for(var v=0;v<s;v++){var C=n[v];c||(e.delete(C.k),Q(a,C.prev,C.next)),qe(C.e,!c)}})}function ie(a,n,l,e,t,s=null){var r=a,c={flags:n,items:new Map,first:null},F=(n&Re)!==0;if(F){var v=a;r=N?ce(je(v)):v.appendChild(xe())}N&&$e();var C=null,m=!1,A=new Map,w=Ge(()=>{var D=l();return sa(D)?D:D==null?[]:Le(D)}),p,B;function _(){Ea(B,p,c,A,r,t,n,e,l),s!==null&&(p.length===0?C?Oe(C):C=_e(()=>s(r)):C!==null&&ra(C,()=>{C=null}))}Je(()=>{B??=ca,p=o(w);var D=p.length;if(m&&D===0)return;m=D===0;let b=!1;if(N){var u=ea(r)===aa;u!==(D===0)&&(r=Te(),ce(r),fe(!1),b=!0)}if(N){for(var k=null,g,i=0;i<D;i++){if(se.nodeType===na&&se.data===la){r=se,b=!0,fe(!1);break}var f=p[i],h=e(f,i);g=De(se,c,k,null,f,h,i,t,n,l),c.items.set(h,g),k=g}D>0&&ce(Te())}if(N)D===0&&s&&(C=_e(()=>s(r)));else if(ta()){var d=new Set,S=ne;for(i=0;i<D;i+=1){f=p[i],h=e(f,i);var P=c.items.get(h)??A.get(h);P?(n&(ue|de))!==0&&Ye(P,f,i,n):(g=De(null,c,null,null,f,h,i,t,n,l,!0),A.set(h,g)),d.add(h)}for(const[O,H]of c.items)d.has(O)||S.skipped_effects.add(H.e);S.add_callback(_)}else _();b&&fe(!0),o(w)}),N&&(r=se)}function Ea(a,n,l,e,t,s,r,c,F){var v=(r&va)!==0,C=(r&(ue|de))!==0,m=n.length,A=l.items,w=l.first,p=w,B,_=null,D,b=[],u=[],k,g,i,f;if(v)for(f=0;f<m;f+=1)k=n[f],g=c(k,f),i=A.get(g),i!==void 0&&(i.a?.measure(),(D??=new Set).add(i));for(f=0;f<m;f+=1){if(k=n[f],g=c(k,f),i=A.get(g),i===void 0){var h=e.get(g);if(h!==void 0){e.delete(g),A.set(g,h);var d=_?_.next:p;Q(l,_,h),Q(l,h,d),be(h,d,t),_=h}else{var S=p?p.e.nodes_start:t;_=De(S,l,_,_===null?l.first:_.next,k,g,f,s,r,F)}A.set(g,_),b=[],u=[],p=_.next;continue}if(C&&Ye(i,k,f,r),(i.e.f&ve)!==0&&(Oe(i.e),v&&(i.a?.unfix(),(D??=new Set).delete(i))),i!==p){if(B!==void 0&&B.has(i)){if(b.length<u.length){var P=u[0],O;_=P.prev;var H=b[0],Z=b[b.length-1];for(O=0;O<b.length;O+=1)be(b[O],P,t);for(O=0;O<u.length;O+=1)B.delete(u[O]);Q(l,H.prev,Z.next),Q(l,_,H),Q(l,Z,P),p=P,_=Z,f-=1,b=[],u=[]}else B.delete(i),be(i,p,t),Q(l,i.prev,i.next),Q(l,i,_===null?l.first:_.next),Q(l,_,i),_=i;continue}for(b=[],u=[];p!==null&&p.k!==g;)(p.e.f&ve)===0&&(B??=new Set).add(p),u.push(p),p=p.next;if(p===null)continue;i=p}b.push(i),_=i,p=i.next}if(p!==null||B!==void 0){for(var J=B===void 0?[]:Le(B);p!==null;)(p.e.f&ve)===0&&J.push(p),p=p.next;var j=J.length;if(j>0){var te=(r&Re)!==0&&m===0?t:null;if(v){for(f=0;f<j;f+=1)J[f].a?.measure();for(f=0;f<j;f+=1)J[f].a?.fix()}ya(l,J,te)}}v&&fa(()=>{if(D!==void 0)for(i of D)i.a?.apply()}),a.first=l.first&&l.first.e,a.last=_&&_.e;for(var $ of e.values())qe($.e);e.clear()}function Ye(a,n,l,e){(e&ue)!==0&&Ae(a.v,n),(e&de)!==0?Ae(a.i,l):a.i=l}function De(a,n,l,e,t,s,r,c,F,v,C){var m=(F&ue)!==0,A=(F&oa)===0,w=m?A?L(t,!1,!1):we(t):t,p=(F&de)===0?r:we(r),B={i:p,v:w,k:s,a:null,e:null,prev:l,next:e};try{if(a===null){var _=document.createDocumentFragment();_.append(a=xe())}return B.e=_e(()=>c(a,w,p,v),N),B.e.prev=l&&l.e,B.e.next=e&&e.e,l===null?C||(n.first=B):(l.next=B,l.e.next=B.e),e!==null&&(e.prev=B,e.e.prev=B.e),B}finally{}}function be(a,n,l){for(var e=a.next?a.next.e.nodes_start:l,t=n?n.e.nodes_start:l,s=a.e.nodes_start;s!==null&&s!==e;){var r=ia(s);t.before(s),s=r}}function Q(a,n,l){n===null?a.first=l:(n.next=l,n.e.next=l&&l.e),l!==null&&(l.prev=n,l.e.prev=n&&n.e)}const ye=[...` 	
\r\f \v\uFEFF`];function Pa(a,n,l){var e=a==null?"":""+a;if(n&&(e=e?e+" "+n:n),l){for(var t in l)if(l[t])e=e?e+" "+t:t;else if(e.length)for(var s=t.length,r=0;(r=e.indexOf(t,r))>=0;){var c=r+s;(r===0||ye.includes(e[r-1]))&&(c===e.length||ye.includes(e[c]))?e=(r===0?"":e.substring(0,r))+e.substring(c+1):r=c}}return e===""?null:e}function Sa(a,n){return a==null?null:String(a)}function ae(a,n,l,e,t,s){var r=a.__className;if(N||r!==l||r===void 0){var c=Pa(l,e,s);(!N||c!==a.getAttribute("class"))&&(c==null?a.removeAttribute("class"):a.className=c),a.__className=l}else if(s&&t!==s)for(var F in s){var v=!!s[F];(t==null||v!==!!t[F])&&a.classList.toggle(F,v)}return s}function le(a,n,l,e){var t=a.__style;if(N||t!==n){var s=Sa(n);(!N||s!==a.getAttribute("style"))&&(s==null?a.removeAttribute("style"):a.style.cssText=s),a.__style=n}return e}const xa=Symbol("is custom element"),Ga=Symbol("is html");function Ve(a){if(N){var n=!1,l=()=>{if(!n){if(n=!0,a.hasAttribute("value")){var e=a.value;z(a,"value",null),a.value=e}if(a.hasAttribute("checked")){var t=a.checked;z(a,"checked",null),a.checked=t}}};a.__on_r=l,Ca(l),ma()}}function z(a,n,l,e){var t=La(a);N&&(t[n]=a.getAttribute(n),n==="src"||n==="srcset"||n==="href"&&a.nodeName==="LINK")||t[n]!==(t[n]=l)&&(n==="loading"&&(a[ga]=l),l==null?a.removeAttribute(n):typeof l!="string"&&Oa(a).includes(n)?a[n]=l:a.setAttribute(n,l))}function La(a){return a.__attributes??={[xa]:a.nodeName.includes("-"),[Ga]:a.namespaceURI===ha}}var Ee=new Map;function Oa(a){var n=a.getAttribute("is")||a.nodeName,l=Ee.get(n);if(l)return l;Ee.set(n,l=[]);for(var e,t=a,s=Element.prototype;s!==t;){e=ba(t);for(var r in e)e[r].set&&l.push(r);t=pa(t)}return l}function Ue(a,n,l=n){var e=new WeakSet;_a(a,"input",async t=>{var s=t?a.defaultValue:a.value;if(s=Ce(a)?me(s):s,l(s),ne!==null&&e.add(ne),await Ie(),s!==(s=n())){var r=a.selectionStart,c=a.selectionEnd;a.value=s??"",c!==null&&(a.selectionStart=r,a.selectionEnd=Math.min(c,a.value.length))}}),(N&&a.defaultValue!==a.value||I(n)==null&&a.value)&&(l(Ce(a)?me(a.value):a.value),ne!==null&&e.add(ne)),ka(()=>{var t=n();if(a===document.activeElement){var s=Ba??ne;if(e.has(s))return}Ce(a)&&t===me(a.value)||a.type==="date"&&!t&&!a.value||t!==a.value&&(a.value=t??"")})}function Ce(a){var n=a.type;return n==="number"||n==="range"}function me(a){return a===""?null:+a}const qa=`Part,Color,Quantity,Is Spare
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
`,za=`Part,Color,Quantity,Is Spare
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
`,Ha=`Part,Color,Quantity,Is Spare
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
`,Na=`Part,Color,Quantity,Is Spare
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
`,Ya=`id,name,rgb,is_trans,num_parts,num_sets,y1,y2
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
`,Pe=Object.assign({"../../data/sets/rebrickable_parts_41809-1-hedwig-pencil-holder.csv":qa,"../../data/sets/rebrickable_parts_41904-1-animal-picture-holders.csv":Ra,"../../data/sets/rebrickable_parts_41935-1-lots-of-dots.csv":Ia,"../../data/sets/rebrickable_parts_41950-1-lots-of-dots-lettering.csv":za,"../../data/sets/rebrickable_parts_41957-1-adhesive-patches-mega-pack.csv":Ha,"../../data/sets/rebrickable_parts_41961-1-designer-toolkit-patterns.csv":Na});function Va(a){const n=a.trim().split(`
`);return n[0].split(","),n.slice(1).map(l=>{const e=l.split(",");return{id:Number(e[0]),name:e[1],rgb:`#${e[2]}`,is_trans:e[3]==="True"}})}function Ua(a){let n=0,l=0,e=0;a.length===7?(n=parseInt(a.slice(1,3),16),l=parseInt(a.slice(3,5),16),e=parseInt(a.slice(5,7),16)):a.length===4&&(n=parseInt(a[1]+a[1],16),l=parseInt(a[2]+a[2],16),e=parseInt(a[3]+a[3],16)),n/=255,l/=255,e/=255;const t=Math.max(n,l,e),s=Math.min(n,l,e);let r=0,c=0,F=(t+s)/2;if(t!==s){const v=t-s;switch(c=F>.5?v/(2-t-s):v/(t+s),t){case n:r=(l-e)/v+(l<e?6:0);break;case l:r=(e-n)/v+2;break;case e:r=(n-l)/v+4;break}r/=6}return{h:r*360,s:c*100,l:F*100}}function Wa(a,n=15,l=5){const e={},t=new Set;for(const F of a){const v=F.s<10?999:Math.floor(F.h/n);e[v]||(e[v]=[]),t.has(F.rgb)||(e[v].push(F),t.add(F.rgb))}Object.values(e).forEach(F=>F.sort((v,C)=>v.l-C.l));const r=Object.keys(e).map(Number).sort((F,v)=>F-v).flatMap(F=>e[F]),c=[];for(let F=0;F<r.length;F+=l)c.push(r.slice(F,F+l));return c}function Xa(){const a=new Set;for(const n in Pe){const e=Pe[n].trim().split(`
`);for(const t of e.slice(1)){const s=t.split(",");if(s.length>1){const r=Number(s[1]);isNaN(r)||a.add(r)}}}return a}const Za=Xa(),V=Va(Ya).filter(a=>Za.has(a.id)&&!a.name.includes("Trans-Clear"));function Qa(){return V.map(a=>{const n=Ua(a.rgb);return{...a,...n}})}const Ka=Wa(Qa());var Ja=q('<div class="zoom-pan-container svelte-b0dtxj" role="application" aria-label="Zoomable and pannable container" tabindex="0"><div class="zoom-pan-content svelte-b0dtxj"><!></div></div>');function ja(a,n){U(n,!1);const l=K();let e=T(n,"zoom",12,1),t=T(n,"panX",12,0),s=T(n,"panY",12,0),r=L(!1),c=0,F=0,v=L(!1),C=L(),m=L(),A=!1;Ta(()=>{if(o(C)&&o(m)&&!A){const i=o(C).clientWidth,f=o(C).clientHeight;let h=0,d=0;o(m).firstElementChild instanceof HTMLElement?(h=o(m).firstElementChild.offsetWidth,d=o(m).firstElementChild.offsetHeight):(h=o(m).offsetWidth,d=o(m).offsetHeight),t((i-h*e())/2),s((f-d*e())/2),A=!0,l("panChanged",{panX:t(),panY:s()})}});function w(i){i.preventDefault();const f=o(C).getBoundingClientRect(),h=i.clientX-f.left,d=i.clientY-f.top,S=i.deltaY>0?.9:1.1,P=Math.max(.2,Math.min(5,e()*S));if(P!==e()){const O=P/e();t(h-(h-t())*O),s(d-(d-s())*O),e(P),l("zoomChanged",{zoom:e(),panX:t(),panY:s()})}}function p(i){i.button===0&&(E(r,!0),E(v,!1),c=i.clientX,F=i.clientY,window.addEventListener("mousemove",B),window.addEventListener("mouseup",_),i.preventDefault())}function B(i){if(o(r)){const f=i.clientX-c,h=i.clientY-F;(Math.abs(f)>1||Math.abs(h)>1)&&E(v,!0),t(t()+f),s(s()+h),c=i.clientX,F=i.clientY,l("panChanged",{panX:t(),panY:s()})}}function _(){o(r)&&(E(r,!1),window.removeEventListener("mousemove",B),window.removeEventListener("mouseup",_),l("panEnd",{didPan:o(v)}),setTimeout(()=>{E(v,!1)},50))}function D(i){i.key===" "&&i.preventDefault()}function b(i){i.key===" "&&i.preventDefault()}X();var u=Ja(),k=y(u),g=y(k);wa(g,n,"default",{get didPan(){return o(v)}}),M(k),Be(k,i=>E(m,i),()=>o(m)),M(u),Be(u,i=>E(C,i),()=>o(C)),Y(()=>le(k,`transform: translate(${t()??""}px, ${s()??""}px) scale(${e()??""}); cursor: ${o(r)?"grabbing":"grab"};`)),R("wheel",u,w),R("mousedown",u,p),R("keydown",u,D),R("keyup",u,b),x(a,u),W()}var $a=q('<div class="square svelte-gxsx5p"></div>');function We(a,n){let l=T(n,"color",8,"#000");var e=$a();Y(()=>le(e,`--color: ${l()??""}`)),x(a,e)}var en=q('<div class="circle svelte-r5z0cw"></div>');function Xe(a,n){let l=T(n,"color",8,"#000");var e=en();Y(()=>le(e,`--color: ${l()??""}`)),x(a,e)}var an=q('<div class="quarter-container svelte-19hi45o"><svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none" class="svelte-19hi45o"><path d="M 0,0 L 100,0 A 100,100 0 0,1 0,100 Z" stroke="none"></path></svg></div>');function Ze(a,n){let l=T(n,"color",8,"#000"),e=T(n,"rotation",8,0);var t=an(),s=y(t),r=y(s);M(s),M(t),Y(()=>{z(r,"fill",l()),z(r,"transform",`rotate(${e()*90}, 50, 50)`)}),x(a,t)}var nn=q('<div class="cell svelte-1hhz0mg" role="button" tabindex="0"><!></div>'),ln=q('<div class="grid svelte-1hhz0mg"></div>');function tn(a,n){U(n,!1);const l=K();let e=T(n,"grid",12),t=T(n,"width",8),s=T(n,"height",8),r=T(n,"selectedShape",8,"square"),c=T(n,"selectedColor",8),F=T(n,"paintMode",8,!1),v=T(n,"colorPickerMode",8,!1),C=T(n,"quarterRotation",8,0);function m(b){const u=e()[b];if(!u)return A(b);const{shape:k,color:g}=u;if(k===r()&&g===c())return;const i=[b],f=new Set;for(;i.length;){const h=i.pop();if(h===void 0||f.has(h))continue;f.add(h);const d=e()[h];if(!d||d.shape!==k||d.color!==g)continue;e(e()[h]={shape:r(),color:c(),rotation:r()==="quarter"?C():0},!0);const S=h%t(),P=Math.floor(h/t());S>0&&i.push(h-1),S<t()-1&&i.push(h+1),P>0&&i.push(h-t()),P<s()-1&&i.push(h+t())}e([...e()]),l("gridChanged",{grid:e()})}function A(b){const u=e()[b];u&&u.shape===r()&&u.color===c()?e(e()[b]=null,!0):r()==="quarter"?e(e()[b]={shape:r(),color:c(),rotation:C()},!0):e(e()[b]={shape:r(),color:c(),rotation:0},!0),e([...e()]),l("gridChanged",{grid:e()})}function w(b){const u=e()[b];u&&u.color&&l("colorPicked",{color:u.color})}let p=T(n,"didPan",8,!1);function B(b,u){u.stopPropagation(),!p()&&(v()?w(b):F()?m(b):A(b))}function _(b,u){b.key==="Enter"&&(v()?w(u):F()?m(u):A(u))}X();var D=ln();ie(D,5,e,oe,(b,u,k)=>{var g=nn(),i=y(g);{var f=h=>{var d=ge(),S=he(d);{var P=H=>{We(H,{get color(){return o(u),I(()=>o(u).color)}})},O=H=>{var Z=ge(),J=he(Z);{var j=$=>{Xe($,{get color(){return o(u),I(()=>o(u).color)}})},te=$=>{var Me=ge(),Qe=he(Me);{var Ke=Fe=>{Ze(Fe,{get color(){return o(u),I(()=>o(u).color)},get rotation(){return o(u),I(()=>o(u).rotation)}})};ee(Qe,Fe=>{o(u),I(()=>o(u).shape==="quarter")&&Fe(Ke)},!0)}x($,Me)};ee(J,$=>{o(u),I(()=>o(u).shape==="circle")?$(j):$(te,!1)},!0)}x(H,Z)};ee(S,H=>{o(u),I(()=>o(u).shape==="square")?H(P):H(O,!1)})}x(h,d)};ee(i,h=>{o(u)&&h(f)})}M(g),R("click",g,h=>B(k,h)),R("keydown",g,h=>_(h,k)),x(b,g)}),M(D),Y(()=>le(D,`--width: ${t()??""}; --height: ${s()??""};`)),x(a,D),W()}var sn=q("<div><!></div>");function Se(a,n){U(n,!1);const l=K();let e=T(n,"grid",8,null),t=T(n,"width",8,32),s=T(n,"height",8,32),r=T(n,"selectedShape",8,"square"),c=T(n,"selectedColor",24,()=>V.length>0?V[0].rgb:"#000000"),F=T(n,"paintMode",8,!1),v=T(n,"colorPickerMode",8,!1),C=T(n,"toolbarPosition",8,"left"),m=T(n,"quarterRotation",8,0),A=T(n,"zoom",12,1),w=L(),p=L(0),B=L(0);function _(f){A(f.detail.zoom)}function D(f){E(p,f.detail.panX),E(B,f.detail.panY)}function b(f){f.detail.didPan}function u(f){E(w,f.detail.grid)}function k(f){l("colorPicked",f.detail)}ke(()=>(re(e()),re(t()),re(s())),()=>{E(w,e()||Array(t()*s()).fill(null))}),ze(),X();var g=sn(),i=y(g);ja(i,{get zoom(){return A()},get panX(){return o(p)},get panY(){return o(B)},$$events:{zoomChanged:_,panChanged:D,panEnd:b},children:Da,$$slots:{default:(f,h)=>{const d=Ge(()=>h.didPan);tn(f,{get grid(){return o(w)},get width(){return t()},get height(){return s()},get selectedShape(){return r()},get selectedColor(){return c()},get paintMode(){return F()},get colorPickerMode(){return v()},get quarterRotation(){return m()},get didPan(){return o(d)},$$events:{gridChanged:u,colorPicked:k}})}}}),M(g),Y(()=>ae(g,1,`container ${C()==="left"?"toolbar-left-margin":"toolbar-top-margin"}`,"svelte-1w4104m")),x(a,g),W()}var rn=q('<button type="button" class="dropdown-item" style="display: flex; align-items: center; width: 100%; background: none; border: none; padding: 0; text-align: left; cursor: pointer;"><span class="dropdown-swatch"></span> <span> </span> <span style="margin-left:auto; color:#888; font-size:0.9em"> </span></button>'),on=q('<div class="dropdown-item">No colors found</div>'),dn=q('<div class="dropdown-menu"><input type="text" placeholder="Search color..." class="dropdown-search"/> <div class="dropdown-list"><!> <!></div></div>'),un=q('<button type="button"></button>'),Fn=q('<div class="palette-row"></div>'),cn=q('<div class="color-picker"><div class="color-dropdown-container"><button type="button" class="dropdown-toggle"> <span style="margin-left:0.5em;">▼</span></button> <!></div> <div class="colors"><div class="palette2d"></div></div></div>');function fn(a,n){U(n,!1);const l=K();let e=T(n,"selectedColor",28,()=>V.length>0?V[0].rgb:"#000000"),t=L(""),s=L(!1),r=L(null),c=V,F=L(c);function v(u){e(u),l("colorSelected",{color:u})}function C(u){e(u.rgb),E(s,!1),E(t,""),l("colorSelected",{color:u.rgb})}ke(()=>(o(s),o(r)),()=>{o(s)&&Ie().then(()=>{o(r)?.focus()})}),ke(()=>o(t),()=>{E(F,o(t).trim()?c.filter(u=>u.name.toLowerCase().includes(o(t).toLowerCase())||u.rgb.replace("#","").includes(o(t).replace("#",""))):c)}),ze(),X();var m=cn(),A=y(m),w=y(A),p=y(w);He(),M(w);var B=G(w,2);{var _=u=>{var k=dn(),g=y(k);Ve(g),Be(g,S=>E(r,S),()=>o(r));var i=G(g,2),f=y(i);ie(f,1,()=>o(F),oe,(S,P)=>{var O=rn(),H=y(O),Z=G(H,2),J=y(Z,!0);M(Z);var j=G(Z,2),te=y(j,!0);M(j),M(O),Y(()=>{z(O,"aria-label",(o(P),I(()=>`Select color ${o(P).name}`))),le(H,`background:${o(P),I(()=>o(P).rgb)??""}`),pe(J,(o(P),I(()=>o(P).name))),pe(te,(o(P),I(()=>o(P).rgb)))}),R("click",O,()=>C(o(P))),x(S,O)});var h=G(f,2);{var d=S=>{var P=on();x(S,P)};ee(h,S=>{o(F),I(()=>o(F).length===0)&&S(d)})}M(i),M(k),Ue(g,()=>o(t),S=>E(t,S)),x(u,k)};ee(B,u=>{o(s)&&u(_)})}M(A);var D=G(A,2),b=y(D);ie(b,5,()=>Ka,oe,(u,k)=>{var g=Fn();ie(g,5,()=>o(k),oe,(i,f)=>{var h=un();Y(()=>{le(h,`width: 1.5rem; height: 1.5rem; background: ${o(f),I(()=>o(f).rgb)??""}; border: 2px solid ${re(e()),o(f),I(()=>e()===o(f).rgb?"#333":"#ccc")??""}; border-radius: 0.25rem; cursor: pointer; margin: 0 0.1rem 0.1rem 0;`),z(h,"aria-label",(o(f),I(()=>o(f).name))),z(h,"title",(o(f),I(()=>o(f).name)))}),R("click",h,()=>v(o(f).rgb)),x(i,h)}),M(g),x(u,g)}),M(b),M(D),M(m),Y(u=>pe(p,`${u??""} `),[()=>(re(e()),I(()=>e()?c.find(u=>u.rgb===e())?.name||e():"Select color..."))]),R("click",w,()=>E(s,!o(s))),x(a,m),W()}var vn=q('<div class="shape-group"><div class="group-label">Shapes</div> <div class="shape-grid"><button aria-label="Square" title="Square - Draw square shapes"><div class="shape-icon"><!></div></button> <button aria-label="Circle" title="Circle - Draw circular shapes"><div class="shape-icon"><!></div></button> <button aria-label="Quarter" title="Quarter - Draw quarter tile shapes (click again to rotate)"><div class="shape-icon"><!></div></button></div></div>');function gn(a,n){U(n,!1);const l=K();let e=T(n,"selectedShape",12,"square"),t=T(n,"selectedColor",8,"#000000"),s=T(n,"quarterRotation",12,0);function r(g){if(g==="quarter")if(e()==="quarter"){s((s()+1)%4),l("quarterRotationChanged",{rotation:s()});return}else s(0);e(g),l("shapeSelected",{shape:g}),g==="quarter"&&l("quarterRotationChanged",{rotation:s()})}X();var c=vn(),F=G(y(c),2),v=y(F);let C;var m=y(v),A=y(m);We(A,{get color(){return t()}}),M(m),M(v);var w=G(v,2);let p;var B=y(w),_=y(B);Xe(_,{get color(){return t()}}),M(B),M(w);var D=G(w,2);let b;var u=y(D),k=y(u);Ze(k,{get color(){return t()},get rotation(){return s()}}),M(u),M(D),M(F),M(c),Y((g,i,f)=>{C=ae(v,1,"shape-button",null,C,g),p=ae(w,1,"shape-button",null,p,i),b=ae(D,1,"shape-button",null,b,f)},[()=>({selected:e()==="square"}),()=>({selected:e()==="circle"}),()=>({selected:e()==="quarter"})]),R("click",v,()=>r("square")),R("click",w,()=>r("circle")),R("click",D,()=>r("quarter")),x(a,c),W()}var hn=q('<div class="tool-group"><div class="group-label">Tools</div> <div class="tool-grid"><button type="button" aria-label="Zoom in" class="tool-button" title="Zoom In"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#555" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="11" y1="8" x2="11" y2="14"></line><line x1="8" y1="11" x2="14" y2="11"></line><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg></button> <button type="button" aria-label="Zoom out" class="tool-button" title="Zoom Out"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#555" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="8" y1="11" x2="14" y2="11"></line><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg></button> <button type="button" aria-label="Paint roller tool" title="Fill Tool - Fill areas with selected color"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="4" width="10" height="4" rx="1.5"></rect><path d="M16 6v4c0 1-1 2-2 2H10c-1 0-2-1-2-2V6"></path><rect x="11" y="14" width="2" height="5" rx="1"></rect><path d="M12 12v2"></path></svg></button> <button type="button" aria-label="Pick color from canvas" title="Color Picker - Click to pick colors from the canvas"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="7" stroke-width="2"></circle><path d="M12 9v3l2 2" stroke-width="2"></path></svg></button></div></div>');function pn(a,n){U(n,!1);const l=K();let e=T(n,"paintMode",12,!1),t=T(n,"colorPickerMode",12,!1);function s(){e(!e()),e()&&t(!1),l("paintModeToggled",{paintMode:e()})}function r(){t(!t()),t()&&e(!1),l("colorPickerModeToggled",{colorPickerMode:t()})}X();var c=hn(),F=G(y(c),2),v=y(F),C=G(v,2),m=G(C,2);let A;var w=y(m),p=y(w),B=G(p),_=G(B),D=G(_);M(w),M(m);var b=G(m,2);let u;var k=y(b),g=y(k);He(),M(k),M(b),M(F),M(c),Y((i,f)=>{A=ae(m,1,"tool-button",null,A,i),z(w,"stroke",e()?"#333":"#888"),z(p,"fill",e()?"#f4d23e":"#fff"),z(p,"stroke",e()?"#333":"#888"),z(B,"stroke",e()?"#333":"#888"),z(_,"fill",e()?"#f4d23e":"#fff"),z(_,"stroke",e()?"#333":"#888"),z(D,"stroke",e()?"#333":"#888"),u=ae(b,1,"tool-button",null,u,f),z(k,"stroke",t()?"#333":"#888"),z(g,"fill",t()?"#aef":"#fff")},[()=>({active:e()}),()=>({active:t()})]),R("click",v,()=>l("zoomIn")),R("click",C,()=>l("zoomOut")),R("click",m,s),R("click",b,r),x(a,c),W()}var bn=q('<div class="canvas-size-group" style="display:flex; justify-content:center; flex-direction: column; align-items:center; width:100%;"><div class="group-label">Size</div> <div class="tool-grid" style="display:flex; justify-content: center"><label style="display:flex; flex-direction:column; align-items:center;"><input type="number" min="1" max="256"/></label></div></div>');function Cn(a,n){U(n,!1);const l=K();let e=T(n,"size",12,32);function t(v){const C=v.target;e(Math.max(1,Math.min(128,parseInt(C.value)||1))),l("sizeChanged",{size:e()})}X();var s=bn(),r=G(y(s),2),c=y(r),F=y(c);Ve(F),M(c),M(r),M(s),Ue(F,e),R("input",F,t),x(a,s),W()}var mn=q('<div class="image-upload"><label class="upload-label"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#555" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align: middle;"><path d="M12 16V4"></path><polyline points="8 8 12 4 16 8"></polyline><rect x="4" y="16" width="16" height="4" rx="2"></rect></svg> <span>Upload image</span> <input type="file" accept="image/png, image/jpeg"/></label></div>');function _n(a,n){U(n,!1);const l=K();function e(c){const F=c.target,v=F.files&&F.files[0];if(v){const C=new FileReader;C.onload=()=>{l("imageUploaded",{src:C.result})},C.readAsDataURL(v)}}X();var t=mn(),s=y(t),r=G(y(s),4);M(s),M(t),R("change",r,e),x(a,t),W()}var kn=Ne('<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#555" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align: middle;"><polyline points="4 12 4 4 12 4"></polyline><line x1="4" y1="4" x2="20" y2="20"></line></svg>'),Bn=Ne('<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#555" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align: middle;"><polyline points="12 4 20 4 20 12"></polyline><line x1="4" y1="4" x2="20" y2="20"></line></svg>'),Dn=q('<button class="toolbar-toggle"><!></button>');function Mn(a,n){U(n,!1);const l=K();let e=T(n,"toolbarPosition",12,"left");function t(){e(e()==="left"?"top":"left"),l("positionToggled",{position:e()})}X();var s=Dn(),r=y(s);{var c=v=>{var C=kn();x(v,C)},F=v=>{var C=Bn();x(v,C)};ee(r,v=>{e()==="left"?v(c):v(F,!1)})}M(s),Y(()=>z(s,"aria-label",e()==="left"?"Move toolbar to top":"Move toolbar to left")),R("click",s,t),x(a,s),W()}var Tn=q("<div><!> <!> <!> <!> <!> <!></div>");function An(a,n){U(n,!1);const l=K();let e=T(n,"selectedShape",12,"square"),t=T(n,"selectedColor",28,()=>V.length>0?V[0].rgb:"#000000"),s=T(n,"paintMode",12,!1),r=T(n,"colorPickerMode",12,!1),c=T(n,"size",12,32),F=T(n,"toolbarPosition",12,"left"),v=L(0);function C(d){e(d.detail.shape),l("shapeSelected",d.detail)}function m(d){E(v,d.detail.rotation),l("quarterRotationChanged",d.detail)}function A(d){t(d.detail.color),l("colorSelected",d.detail)}function w(d){s(d.detail.paintMode),l("paintModeToggled",d.detail)}function p(d){r(d.detail.colorPickerMode),l("colorPickerModeToggled",d.detail)}function B(d){c(d.detail.size),l("sizeChanged",d.detail)}function _(d){l("imageUploaded",d.detail)}function D(d){F(d.detail.position)}X();var b=Tn(),u=y(b);Mn(u,{get toolbarPosition(){return F()},set toolbarPosition(d){F(d)},$$events:{positionToggled:D},$$legacy:!0});var k=G(u,2);gn(k,{get selectedColor(){return t()},get selectedShape(){return e()},set selectedShape(d){e(d)},get quarterRotation(){return o(v)},set quarterRotation(d){E(v,d)},$$events:{shapeSelected:C,quarterRotationChanged:m},$$legacy:!0});var g=G(k,2);pn(g,{get paintMode(){return s()},set paintMode(d){s(d)},get colorPickerMode(){return r()},set colorPickerMode(d){r(d)},$$events:{paintModeToggled:w,colorPickerModeToggled:p,zoomIn:()=>l("zoomIn"),zoomOut:()=>l("zoomOut")},$$legacy:!0});var i=G(g,2);fn(i,{get selectedColor(){return t()},set selectedColor(d){t(d)},$$events:{colorSelected:A},$$legacy:!0});var f=G(i,2);Cn(f,{get size(){return c()},set size(d){c(d)},$$events:{sizeChanged:B},$$legacy:!0});var h=G(f,2);_n(h,{$$events:{imageUploaded:_}}),M(b),Y(()=>ae(b,1,`toolbar ${F()??""}`)),x(a,b),W()}function wn(a){a=a.replace(/^#/,""),a.length===3&&(a=a.split("").map(l=>l+l).join(""));const n=parseInt(a,16);return{r:n>>16&255,g:n>>8&255,b:n&255}}function yn(a,n,l,e){let t=e[0],s=1/0;for(const r of e){const c=wn(r),F=Math.sqrt(Math.pow(a-c.r,2)+Math.pow(n-c.g,2)+Math.pow(l-c.b,2));F<s&&(s=F,t=r)}return t}function En(a){return a<85?"square":a<170?"quarter":"circle"}function Pn(a,n,l=32,e=32){return new Promise((t,s)=>{const r=new window.Image;r.src=a,r.onload=()=>{const c=document.createElement("canvas"),F=c.getContext("2d");if(c.width=l,c.height=e,!F){s(new Error("Could not get 2D context"));return}F.drawImage(r,0,0,l,e);const v=F.getImageData(0,0,l,e).data,C=[];for(let m=0;m<v.length;m+=4){const A=m/4,w=A%l,p=Math.floor(A/l);let B=v[m],_=v[m+1],D=v[m+2];v[m+3]===0&&(B=255,_=255,D=255);const u=(B+_+D)/3;let k=En(u),g=0;const i=p===0,f=p===e-1,h=w===0,d=w===l-1;k==="quarter"&&(i||f||h||d)?i?g=2:f?g=0:h?g=1:d&&(g=3):k==="quarter"&&(k=u<128?"square":"circle");const S=yn(B,_,D,n);C.push({shape:k,color:S,rotation:g})}t(C)},r.onerror=s})}var Sn=q('<main class="svelte-1uha8ag"><!> <!></main>');function zn(a,n){U(n,!1);let l=L("square"),e=L(V.length>0?V[0].rgb:"#000000"),t=L(null),s=L(!1),r=L("left"),c=L(1),F=L(32);function v(){E(c,Math.min(o(c)+.1,3))}function C(){E(c,Math.max(o(c)-.1,.2))}let m=L(!1),A=L(0);function w(d){E(l,d.detail.shape)}function p(d){E(A,d.detail.rotation)}function B(d){E(e,d.detail.color)}async function _(d){const S=V.map(P=>P.rgb);E(t,await Pn(d.detail.src,S,o(F),o(F)))}function D(d){E(F,d.detail.size),E(t,null)}function b(d){E(m,d.detail.colorPickerMode)}function u(d){E(e,d.detail.color),E(m,!1)}X();var k=Sn();Aa(d=>{Ma.title="Dotsly"});var g=y(k);An(g,{get toolbarPosition(){return o(r)},set toolbarPosition(d){E(r,d)},get selectedColor(){return o(e)},set selectedColor(d){E(e,d)},get size(){return o(F)},set size(d){E(F,d)},$$events:{shapeSelected:w,colorSelected:B,imageUploaded:_,paintModeToggled:d=>E(s,d.detail.paintMode),colorPickerModeToggled:b,zoomIn:v,zoomOut:C,quarterRotationChanged:p,sizeChanged:D},$$legacy:!0});var i=G(g,2);{var f=d=>{Se(d,{get width(){return o(F)},get height(){return o(F)},get selectedShape(){return o(l)},get selectedColor(){return o(e)},get grid(){return o(t)},get paintMode(){return o(s)},get colorPickerMode(){return o(m)},get toolbarPosition(){return o(r)},get zoom(){return o(c)},get quarterRotation(){return o(A)},$$events:{colorPicked:u}})},h=d=>{Se(d,{get width(){return o(F)},get height(){return o(F)},get selectedShape(){return o(l)},get selectedColor(){return o(e)},get paintMode(){return o(s)},get colorPickerMode(){return o(m)},get toolbarPosition(){return o(r)},get zoom(){return o(c)},get quarterRotation(){return o(A)},$$events:{colorPicked:u}})};ee(i,d=>{o(t)?d(f):d(h,!1)})}M(k),x(a,k),W()}export{zn as component};
