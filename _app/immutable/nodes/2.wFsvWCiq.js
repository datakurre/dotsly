import"../chunks/DsnmJJEf.js";import"../chunks/Cn1QM1BN.js";import{B as Fa,w as Pa,z as ye,o as q,ay as Sa,q as La,g as r,W as Oa,x as xa,H as Ha,y as aa,A as Ge,J as ve,ad as Ia,aG as Ra,C as Ne,F as Na,D as Fe,ac as la,a4 as V,aa as na,aD as ca,av as qa,aR as _e,G as ua,I as Va,aS as Be,aT as Ya,aU as Pe,al as da,ar as Ua,aV as Wa,aC as za,aW as Qa,T as Ka,aX as va,M as Xa,aY as Ja,aZ as Za,a_ as $a,a$ as ja,b0 as el,b1 as al,b2 as ll,b3 as nl,a6 as fa,b as P,L as sl,b4 as rl,i as z,t as re,k as L,m,n as B,p as Ye,b5 as qe,R as E,e as fe,b6 as ha,v as Se,j as Le,l as Ue,b7 as Oe,s as G,am as sa,b8 as ga,b9 as tl}from"../chunks/BaTXMALA.js";import{c as pa,e as W,s as xe,a as ol}from"../chunks/BEavlA6p.js";import{p as H,i as le,b as il}from"../chunks/5uDJtnhD.js";import{i as We}from"../chunks/DrJFlOKt.js";function be(e,a){return a}function Fl(e,a,l){for(var n=e.items,s=[],t=a.length,o=0;o<t;o++)Wa(a[o].e,s,!0);var F=t>0&&s.length===0&&l!==null;if(F){var c=l.parentNode;za(c),c.append(l),n.clear(),Z(e,a[0].prev,a[t-1].next)}Qa(s,()=>{for(var f=0;f<t;f++){var p=a[f];F||(n.delete(p.k),Z(e,p.prev,p.next)),da(p.e,!F)}})}function Ce(e,a,l,n,s,t=null){var o=e,F={flags:a,items:new Map,first:null},c=(a&va)!==0;if(c){var f=e;o=q?ye(Sa(f)):f.appendChild(Fa())}q&&La();var p=null,g=!1,w=new Map,M=Oa(()=>{var C=l();return qa(C)?C:C==null?[]:ca(C)}),d,b;function h(){cl(b,d,F,w,o,s,a,n,l),t!==null&&(d.length===0?p?ua(p):p=Ne(()=>t(o)):p!==null&&Va(p,()=>{p=null}))}Pa(()=>{b??=Ka,d=r(M);var C=d.length;if(g&&C===0)return;g=C===0;let i=!1;if(q){var A=xa(o)===Ha;A!==(C===0)&&(o=aa(),ye(o),Ge(!1),i=!0)}if(q){for(var D=null,_,v=0;v<C;v++){if(ve.nodeType===Ia&&ve.data===Ra){o=ve,i=!0,Ge(!1);break}var u=d[v],T=n(u,v);_=Ve(ve,F,D,null,u,T,v,s,a,l),F.items.set(T,_),D=_}C>0&&ye(aa())}if(q)C===0&&t&&(p=Ne(()=>t(o)));else if(Na()){var S=new Set,I=Fe;for(v=0;v<C;v+=1){u=d[v],T=n(u,v);var x=F.items.get(T)??w.get(T);x?(a&(Be|_e))!==0&&ba(x,u,v,a):(_=Ve(null,F,null,null,u,T,v,s,a,l,!0),w.set(T,_)),S.add(T)}for(const[y,X]of F.items)S.has(y)||I.skipped_effects.add(X.e);I.add_callback(h)}else h();i&&Ge(!0),r(M)}),q&&(o=ve)}function cl(e,a,l,n,s,t,o,F,c){var f=(o&Ja)!==0,p=(o&(Be|_e))!==0,g=a.length,w=l.items,M=l.first,d=M,b,h=null,C,i=[],A=[],D,_,v,u;if(f)for(u=0;u<g;u+=1)D=a[u],_=F(D,u),v=w.get(_),v!==void 0&&(v.a?.measure(),(C??=new Set).add(v));for(u=0;u<g;u+=1){if(D=a[u],_=F(D,u),v=w.get(_),v===void 0){var T=n.get(_);if(T!==void 0){n.delete(_),w.set(_,T);var S=h?h.next:d;Z(l,h,T),Z(l,T,S),He(T,S,s),h=T}else{var I=d?d.e.nodes_start:s;h=Ve(I,l,h,h===null?l.first:h.next,D,_,u,t,o,c)}w.set(_,h),i=[],A=[],d=h.next;continue}if(p&&ba(v,D,u,o),(v.e.f&Pe)!==0&&(ua(v.e),f&&(v.a?.unfix(),(C??=new Set).delete(v))),v!==d){if(b!==void 0&&b.has(v)){if(i.length<A.length){var x=A[0],y;h=x.prev;var X=i[0],ne=i[i.length-1];for(y=0;y<i.length;y+=1)He(i[y],x,s);for(y=0;y<A.length;y+=1)b.delete(A[y]);Z(l,X.prev,ne.next),Z(l,h,X),Z(l,ne,x),d=x,h=ne,u-=1,i=[],A=[]}else b.delete(v),He(v,d,s),Z(l,v.prev,v.next),Z(l,v,h===null?l.first:h.next),Z(l,h,v),h=v;continue}for(i=[],A=[];d!==null&&d.k!==_;)(d.e.f&Pe)===0&&(b??=new Set).add(d),A.push(d),d=d.next;if(d===null)continue;v=d}i.push(v),h=v,d=v.next}if(d!==null||b!==void 0){for(var Y=b===void 0?[]:ca(b);d!==null;)(d.e.f&Pe)===0&&Y.push(d),d=d.next;var ae=Y.length;if(ae>0){var Q=(o&va)!==0&&g===0?s:null;if(f){for(u=0;u<ae;u+=1)Y[u].a?.measure();for(u=0;u<ae;u+=1)Y[u].a?.fix()}Fl(l,Y,Q)}}f&&Xa(()=>{if(C!==void 0)for(v of C)v.a?.apply()}),e.first=l.first&&l.first.e,e.last=h&&h.e;for(var te of n.values())da(te.e);n.clear()}function ba(e,a,l,n){(n&Be)!==0&&la(e.v,a),(n&_e)!==0?la(e.i,l):e.i=l}function Ve(e,a,l,n,s,t,o,F,c,f,p){var g=(c&Be)!==0,w=(c&Ya)===0,M=g?w?V(s,!1,!1):na(s):s,d=(c&_e)===0?o:na(o),b={i:d,v:M,k:t,a:null,e:null,prev:l,next:n};try{if(e===null){var h=document.createDocumentFragment();h.append(e=Fa())}return b.e=Ne(()=>F(e,M,d,f),q),b.e.prev=l&&l.e,b.e.next=n&&n.e,l===null?p||(a.first=b):(l.next=b,l.e.next=b.e),n!==null&&(n.prev=b,n.e.prev=b.e),b}finally{}}function He(e,a,l){for(var n=e.next?e.next.e.nodes_start:l,s=a?a.e.nodes_start:l,t=e.e.nodes_start;t!==null&&t!==n;){var o=Ua(t);s.before(t),t=o}}function Z(e,a,l){a===null?e.first=l:(a.next=l,a.e.next=l&&l.e),l!==null&&(l.prev=a,l.e.prev=a&&a.e)}const ra=[...` 	
\r\f \v\uFEFF`];function ul(e,a,l){var n=e==null?"":""+e;if(a&&(n=n?n+" "+a:a),l){for(var s in l)if(l[s])n=n?n+" "+s:s;else if(n.length)for(var t=s.length,o=0;(o=n.indexOf(s,o))>=0;){var F=o+t;(o===0||ra.includes(n[o-1]))&&(F===n.length||ra.includes(n[F]))?n=(o===0?"":n.substring(0,o))+n.substring(F+1):o=F}}return n===""?null:n}function dl(e,a){return e==null?null:String(e)}function se(e,a,l,n,s,t){var o=e.__className;if(q||o!==l||o===void 0){var F=ul(l,n,t);(!q||F!==e.getAttribute("class"))&&(F==null?e.removeAttribute("class"):e.className=F),e.__className=l}else if(t&&s!==t)for(var c in t){var f=!!t[c];(s==null||f!==!!s[c])&&e.classList.toggle(c,f)}return t}function ce(e,a,l,n){var s=e.__style;if(q||s!==a){var t=dl(a);(!q||t!==e.getAttribute("style"))&&(t==null?e.removeAttribute("style"):e.style.cssText=t),e.__style=a}return n}const vl=Symbol("is custom element"),fl=Symbol("is html");function hl(e){if(q){var a=!1,l=()=>{if(!a){if(a=!0,e.hasAttribute("value")){var n=e.value;O(e,"value",null),e.value=n}if(e.hasAttribute("checked")){var s=e.checked;O(e,"checked",null),e.checked=s}}};e.__on_r=l,al(l),ll()}}function O(e,a,l,n){var s=gl(e);q&&(s[a]=e.getAttribute(a),a==="src"||a==="srcset"||a==="href"&&e.nodeName==="LINK")||s[a]!==(s[a]=l)&&(a==="loading"&&(e[Za]=l),l==null?e.removeAttribute(a):typeof l!="string"&&pl(e).includes(a)?e[a]=l:e.setAttribute(a,l))}function gl(e){return e.__attributes??={[vl]:e.nodeName.includes("-"),[fl]:e.namespaceURI===$a}}var ta=new Map;function pl(e){var a=e.getAttribute("is")||e.nodeName,l=ta.get(a);if(l)return l;ta.set(a,l=[]);for(var n,s=e,t=Element.prototype;t!==s;){n=el(s);for(var o in n)n[o].set&&l.push(o);s=ja(s)}return l}function bl(e,a,l=a){var n=new WeakSet;nl(e,"input",async s=>{var t=s?e.defaultValue:e.value;if(t=Ie(e)?Re(t):t,l(t),Fe!==null&&n.add(Fe),await fa(),t!==(t=a())){var o=e.selectionStart,F=e.selectionEnd;e.value=t??"",F!==null&&(e.selectionStart=o,e.selectionEnd=Math.min(F,e.value.length))}}),(q&&e.defaultValue!==e.value||P(a)==null&&e.value)&&(l(Ie(e)?Re(e.value):e.value),Fe!==null&&n.add(Fe)),sl(()=>{var s=a();if(e===document.activeElement){var t=rl??Fe;if(n.has(t))return}Ie(e)&&s===Re(e.value)||e.type==="date"&&!s&&!e.value||s!==e.value&&(e.value=s??"")})}function Ie(e){var a=e.type;return a==="number"||a==="range"}function Re(e){return e===""?null:+e}var Cl=z('<div class="square svelte-gxsx5p"></div>');function Ca(e,a){let l=H(a,"color",8,"#000");var n=Cl();re(()=>ce(n,`--color: ${l()??""}`)),L(e,n)}var _l=z('<div class="circle svelte-r5z0cw"></div>');function _a(e,a){let l=H(a,"color",8,"#000");var n=_l();re(()=>ce(n,`--color: ${l()??""}`)),L(e,n)}var Bl=z('<div class="arch-container svelte-1isloo0"><svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none"><circle cx="0" cy="0" r="100"></circle></svg></div>');function Ba(e,a){let l=H(a,"color",8,"#000"),n=H(a,"rotation",8,0);var s=Bl(),t=m(s),o=m(t);B(t),B(s),re(()=>{ce(s,`transform: rotate(${n()*90}deg);`),O(o,"fill",l())}),L(e,s)}const ml=`Part,Color,Quantity,Is Spare
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
`,Dl=`Part,Color,Quantity,Is Spare
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
`,kl=`Part,Color,Quantity,Is Spare
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
`,Al=`Part,Color,Quantity,Is Spare
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
`,Tl=`id,name,rgb,is_trans,num_parts,num_sets,y1,y2
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
`,oa=Object.assign({"../../data/sets/rebrickable_parts_41935-1-lots-of-dots.csv":ml,"../../data/sets/rebrickable_parts_41950-1-lots-of-dots-lettering.csv":Dl,"../../data/sets/rebrickable_parts_41957-1-adhesive-patches-mega-pack.csv":kl,"../../data/sets/rebrickable_parts_41961-1-designer-toolkit-patterns.csv":Al});function Ml(e){const a=e.trim().split(`
`);return a[0].split(","),a.slice(1).map(l=>{const n=l.split(",");return{id:Number(n[0]),name:n[1],rgb:`#${n[2]}`,is_trans:n[3]==="True"}})}function wl(e){let a=0,l=0,n=0;e.length===7?(a=parseInt(e.slice(1,3),16),l=parseInt(e.slice(3,5),16),n=parseInt(e.slice(5,7),16)):e.length===4&&(a=parseInt(e[1]+e[1],16),l=parseInt(e[2]+e[2],16),n=parseInt(e[3]+e[3],16)),a/=255,l/=255,n/=255;const s=Math.max(a,l,n),t=Math.min(a,l,n);let o=0,F=0,c=(s+t)/2;if(s!==t){const f=s-t;switch(F=c>.5?f/(2-s-t):f/(s+t),s){case a:o=(l-n)/f+(l<n?6:0);break;case l:o=(n-a)/f+2;break;case n:o=(a-l)/f+4;break}o/=6}return{h:o*360,s:F*100,l:c*100}}function El(e,a=15,l=5){const n={},s=new Set;for(const c of e){const f=c.s<10?999:Math.floor(c.h/a);n[f]||(n[f]=[]),s.has(c.rgb)||(n[f].push(c),s.add(c.rgb))}Object.values(n).forEach(c=>c.sort((f,p)=>f.l-p.l));const o=Object.keys(n).map(Number).sort((c,f)=>c-f).flatMap(c=>n[c]),F=[];for(let c=0;c<o.length;c+=l)F.push(o.slice(c,c+l));return F}function yl(){const e=new Set;for(const a in oa){const n=oa[a].trim().split(`
`);for(const s of n.slice(1)){const t=s.split(",");if(t.length>1){const o=Number(t[1]);isNaN(o)||e.add(o)}}}return e}const Gl=yl(),ee=Ml(Tl).filter(e=>Gl.has(e.id));function Pl(){return ee.map(e=>{const a=wl(e.rgb);return{...e,...a}})}const Sl=El(Pl());var Ll=z('<div class="cell svelte-1w4104m" role="button" tabindex="0"><!></div>'),Ol=z('<div><div class="grid svelte-1w4104m"></div></div>');function ia(e,a){Ye(a,!1);const l=pa();let n=H(a,"grid",8,null),s=H(a,"width",8,32),t=H(a,"height",8,32),o=H(a,"selectedShape",8,"square"),F=H(a,"selectedColor",24,()=>ee.length>0?ee[0].rgb:"#000000"),c=H(a,"paintMode",8,!1),f=H(a,"colorPickerMode",8,!1),p=H(a,"toolbarPosition",8,"left"),g=V();function w(C){const i=r(g)[C];if(!i)return M(C);const{shape:A,color:D}=i;if(A===o()&&D===F())return;const _=[C],v=new Set;for(;_.length;){const u=_.pop();if(u===void 0||v.has(u))continue;v.add(u);const T=r(g)[u];if(!T||T.shape!==A||T.color!==D)continue;Oe(g,r(g)[u]={shape:o(),color:F(),rotation:0});const S=u%s(),I=Math.floor(u/s());S>0&&_.push(u-1),S<s()-1&&_.push(u+1),I>0&&_.push(u-s()),I<t()-1&&_.push(u+s())}E(g,[...r(g)])}function M(C){const i=r(g)[C];i&&i.shape==="arch"&&i.color===F()?Oe(g,r(g)[C]={...i,rotation:(i.rotation+1)%4}):Oe(g,r(g)[C]={shape:o(),color:F(),rotation:0}),E(g,[...r(g)])}function d(C){const i=r(g)[C];i&&i.color&&l("colorPicked",{color:i.color})}qe(()=>(fe(n()),fe(s()),fe(t())),()=>{E(g,n()||Array(s()*t()).fill(null))}),ha(),We();var b=Ol(),h=m(b);Ce(h,5,()=>r(g),be,(C,i,A)=>{var D=Ll(),_=m(D);{var v=u=>{var T=Se(),S=Le(T);{var I=y=>{Ca(y,{get color(){return r(i),P(()=>r(i).color)}})},x=y=>{var X=Se(),ne=Le(X);{var Y=Q=>{_a(Q,{get color(){return r(i),P(()=>r(i).color)}})},ae=Q=>{var te=Se(),oe=Le(te);{var he=ie=>{Ba(ie,{get color(){return r(i),P(()=>r(i).color)},get rotation(){return r(i),P(()=>r(i).rotation)}})};le(oe,ie=>{r(i),P(()=>r(i).shape==="arch")&&ie(he)},!0)}L(Q,te)};le(ne,Q=>{r(i),P(()=>r(i).shape==="circle")?Q(Y):Q(ae,!1)},!0)}L(y,X)};le(S,y=>{r(i),P(()=>r(i).shape==="square")?y(I):y(x,!1)})}L(u,T)};le(_,u=>{r(i)&&u(v)})}B(D),W("click",D,()=>f()?d(A):c()?w(A):M(A)),W("keydown",D,u=>{u.key==="Enter"&&(f()?d(A):c()?w(A):M(A))}),L(C,D)}),B(h),B(b),re(()=>{se(b,1,`container ${p()==="left"?"toolbar-left-margin":"toolbar-top-margin"}`,"svelte-1w4104m"),ce(h,`--width: ${s()??""}; --height: ${t()??""};`)}),L(e,b),Ue()}var xl=ga('<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#555" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align: middle;"><polyline points="4 12 4 4 12 4"></polyline><line x1="4" y1="4" x2="20" y2="20"></line></svg>'),Hl=ga('<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#555" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align: middle;"><polyline points="12 4 20 4 20 12"></polyline><line x1="4" y1="4" x2="20" y2="20"></line></svg>'),Il=z('<button type="button" class="dropdown-item" style="display: flex; align-items: center; width: 100%; background: none; border: none; padding: 0; text-align: left; cursor: pointer;"><span class="dropdown-swatch"></span> <span> </span> <span style="margin-left:auto; color:#888; font-size:0.9em"> </span></button>'),Rl=z('<div class="dropdown-item">No colors found</div>'),Nl=z('<div class="dropdown-menu"><input type="text" placeholder="Search color..." class="dropdown-search"/> <div class="dropdown-list"><!> <!></div></div>'),ql=z('<button type="button"></button>'),Vl=z('<div class="palette-row"></div>'),Yl=z('<div><button class="toolbar-toggle"><!></button> <div class="shape-group"><div class="group-label">Shapes</div> <div class="shape-grid"><button aria-label="Square" title="Square - Draw square shapes"><div class="shape-icon"><!></div></button> <button aria-label="Circle" title="Circle - Draw circular shapes"><div class="shape-icon"><!></div></button> <button aria-label="Arch" title="Arch - Draw arch shapes"><div class="shape-icon"><!></div></button></div></div> <div class="tool-group"><div class="group-label">Tools</div> <div class="tool-grid"><button type="button" aria-label="Paint roller tool" title="Fill Tool - Fill areas with selected color"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="4" width="10" height="4" rx="1.5"></rect><path d="M16 6v4c0 1-1 2-2 2H10c-1 0-2-1-2-2V6"></path><rect x="11" y="14" width="2" height="5" rx="1"></rect><path d="M12 12v2"></path></svg></button> <button type="button" aria-label="Pick color from canvas" title="Color Picker - Click to pick colors from the canvas"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="7" stroke-width="2"></circle><path d="M12 9v3l2 2" stroke-width="2"></path></svg></button></div></div> <div class="color-dropdown-container"><button type="button" class="dropdown-toggle"> <span style="margin-left:0.5em;">▼</span></button> <!></div> <div class="colors"><div class="palette2d"></div></div> <div class="image-upload"><label class="upload-label"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#555" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align: middle;"><path d="M12 16V4"></path><polyline points="8 8 12 4 16 8"></polyline><rect x="4" y="16" width="16" height="4" rx="2"></rect></svg> <span>Upload image</span> <input type="file" accept="image/png, image/jpeg"/></label></div></div>');function Ul(e,a){Ye(a,!1);let l=V(null),n=V(!1),s=H(a,"colorPickerMode",12,!1);function t(){E(n,!r(n)),r(n)&&s(!1),c("paintModeToggled",{paintMode:r(n)})}function o(){s(!s()),s()&&E(n,!1),c("colorPickerModeToggled",{colorPickerMode:s()})}function F(k){p(k),c("colorSelected",{color:k})}const c=pa();let f=H(a,"selectedShape",12,"square"),p=H(a,"selectedColor",28,()=>ee.length>0?ee[0].rgb:"#000000");function g(k){f(k),c("shapeSelected",{shape:k})}function w(k){const R=k.target,U=R.files&&R.files[0];if(U){const J=new FileReader;J.onload=()=>{c("imageUploaded",{src:J.result})},J.readAsDataURL(U)}}let M=V(""),d=V(!1),b=ee,h=V(b);function C(k){p(k.rgb),E(d,!1),E(M,""),c("colorSelected",{color:k.rgb})}let i=V("left");function A(){E(i,r(i)==="left"?"top":"left")}qe(()=>(r(d),r(l)),()=>{r(d)&&fa().then(()=>{r(l)?.focus()})}),qe(()=>r(M),()=>{E(h,r(M).trim()?b.filter(k=>k.name.toLowerCase().includes(r(M).toLowerCase())||k.rgb.replace("#","").includes(r(M).replace("#",""))):b)}),ha(),We();var D=Yl(),_=m(D),v=m(_);{var u=k=>{var R=xl();L(k,R)},T=k=>{var R=Hl();L(k,R)};le(v,k=>{r(i)==="left"?k(u):k(T,!1)})}B(_);var S=G(_,2),I=G(m(S),2),x=m(I);let y;var X=m(x),ne=m(X);Ca(ne,{get color(){return p()}}),B(X),B(x);var Y=G(x,2);let ae;var Q=m(Y),te=m(Q);_a(te,{get color(){return p()}}),B(Q),B(Y);var oe=G(Y,2);let he;var ie=m(oe),ma=m(ie);Ba(ma,{get color(){return p()},rotation:0}),B(ie),B(oe),B(I),B(S);var me=G(S,2),ze=G(m(me),2),ue=m(ze);let Qe;var De=m(ue),ke=m(De),Ke=G(ke),Ae=G(Ke),Da=G(Ae);B(De),B(ue);var ge=G(ue,2);let Xe;var Te=m(ge),ka=m(Te);sa(),B(Te),B(ge),B(ze),B(me);var Me=G(me,2),pe=m(Me),Aa=m(pe);sa(),B(pe);var Ta=G(pe,2);{var Ma=k=>{var R=Nl(),U=m(R);hl(U),il(U,j=>E(l,j),()=>r(l));var J=G(U,2),N=m(J);Ce(N,1,()=>r(h),be,(j,K)=>{var de=Il(),je=m(de),Ee=G(je,2),ya=m(Ee,!0);B(Ee);var ea=G(Ee,2),Ga=m(ea,!0);B(ea),B(de),re(()=>{O(de,"aria-label",(r(K),P(()=>`Select color ${r(K).name}`))),ce(je,`background:${r(K),P(()=>r(K).rgb)??""}`),xe(ya,(r(K),P(()=>r(K).name))),xe(Ga,(r(K),P(()=>r(K).rgb)))}),W("click",de,()=>C(r(K))),L(j,de)});var $=G(N,2);{var Ea=j=>{var K=Rl();L(j,K)};le($,j=>{r(h),P(()=>r(h).length===0)&&j(Ea)})}B(J),B(R),bl(U,()=>r(M),j=>E(M,j)),L(k,R)};le(Ta,k=>{r(d)&&k(Ma)})}B(Me);var we=G(Me,2),Je=m(we);Ce(Je,5,()=>Sl,be,(k,R)=>{var U=Vl();Ce(U,5,()=>r(R),be,(J,N)=>{var $=ql();re(()=>{ce($,`width: 1.5rem; height: 1.5rem; background: ${r(N),P(()=>r(N).rgb)??""}; border: 2px solid ${fe(p()),r(N),P(()=>p()===r(N).rgb?"#333":"#ccc")??""}; border-radius: 0.25rem; cursor: pointer; margin: 0 0.1rem 0.1rem 0;`),O($,"aria-label",(r(N),P(()=>r(N).name))),O($,"title",(r(N),P(()=>r(N).name)))}),W("click",$,()=>F(r(N).rgb)),L(J,$)}),B(U),L(k,U)}),B(Je),B(we);var Ze=G(we,2),$e=m(Ze),wa=G(m($e),4);B($e),B(Ze),B(D),re((k,R,U,J,N,$)=>{se(D,1,`toolbar ${r(i)??""}`),O(_,"aria-label",r(i)==="left"?"Move toolbar to top":"Move toolbar to left"),y=se(x,1,"shape-button",null,y,k),ae=se(Y,1,"shape-button",null,ae,R),he=se(oe,1,"shape-button",null,he,U),Qe=se(ue,1,"tool-button",null,Qe,J),O(De,"stroke",r(n)?"#333":"#888"),O(ke,"fill",r(n)?"#f4d23e":"#fff"),O(ke,"stroke",r(n)?"#333":"#888"),O(Ke,"stroke",r(n)?"#333":"#888"),O(Ae,"fill",r(n)?"#f4d23e":"#fff"),O(Ae,"stroke",r(n)?"#333":"#888"),O(Da,"stroke",r(n)?"#333":"#888"),Xe=se(ge,1,"tool-button",null,Xe,N),O(Te,"stroke",s()?"#333":"#888"),O(ka,"fill",s()?"#aef":"#fff"),xe(Aa,`${$??""} `)},[()=>({selected:f()==="square"}),()=>({selected:f()==="circle"}),()=>({selected:f()==="arch"}),()=>({active:r(n)}),()=>({active:s()}),()=>(fe(p()),P(()=>p()?b.find(k=>k.rgb===p())?.name||p():"Select color..."))]),W("click",_,A),W("click",x,()=>g("square")),W("click",Y,()=>g("circle")),W("click",oe,()=>g("arch")),W("click",ue,t),W("click",ge,o),W("click",pe,()=>E(d,!r(d))),W("change",wa,w),L(e,D),Ue()}function Wl(e){e=e.replace(/^#/,""),e.length===3&&(e=e.split("").map(l=>l+l).join(""));const a=parseInt(e,16);return{r:a>>16&255,g:a>>8&255,b:a&255}}function zl(e,a,l,n){let s=n[0],t=1/0;for(const o of n){const F=Wl(o),c=Math.sqrt(Math.pow(e-F.r,2)+Math.pow(a-F.g,2)+Math.pow(l-F.b,2));c<t&&(t=c,s=o)}return s}function Ql(e){return e<85?"square":e<170?"arch":"circle"}function Kl(e,a,l=32,n=32){return new Promise((s,t)=>{const o=new window.Image;o.src=e,o.onload=()=>{const F=document.createElement("canvas"),c=F.getContext("2d");if(F.width=l,F.height=n,!c){t(new Error("Could not get 2D context"));return}c.drawImage(o,0,0,l,n);const f=c.getImageData(0,0,l,n).data,p=[];for(let g=0;g<f.length;g+=4){const w=g/4,M=w%l,d=Math.floor(w/l);let b=f[g],h=f[g+1],C=f[g+2];f[g+3]===0&&(b=255,h=255,C=255);const A=(b+h+C)/3;let D=Ql(A),_=0;const v=d===0,u=d===n-1,T=M===0,S=M===l-1;D==="arch"&&(v||u||T||S)?v?_=2:u?_=0:T?_=1:S&&(_=3):D==="arch"&&(D=A<128?"square":"circle");const I=zl(b,h,C,a);p.push({shape:D,color:I,rotation:_})}s(p)},o.onerror=t})}var Xl=z('<main class="svelte-1uha8ag"><!> <!></main>');function l0(e,a){Ye(a,!1);let l=V("square"),n=V(ee.length>0?ee[0].rgb:"#000000"),s=V(null),t=V(!1),o=V("left"),F=V(!1);function c(i){E(l,i.detail.shape)}function f(i){E(n,i.detail.color)}async function p(i){const A=ee.map(D=>D.rgb);E(s,await Kl(i.detail.src,A,32,32))}function g(i){E(F,i.detail.colorPickerMode)}function w(i){E(n,i.detail.color),E(F,!1)}We();var M=Xl();ol(i=>{tl.title="Dotsly"});var d=m(M);Ul(d,{get toolbarPosition(){return r(o)},set toolbarPosition(i){E(o,i)},get selectedColor(){return r(n)},set selectedColor(i){E(n,i)},$$events:{shapeSelected:c,colorSelected:f,imageUploaded:p,paintModeToggled:i=>E(t,i.detail.paintMode),colorPickerModeToggled:g},$$legacy:!0});var b=G(d,2);{var h=i=>{ia(i,{width:32,height:32,get selectedShape(){return r(l)},get selectedColor(){return r(n)},get grid(){return r(s)},get paintMode(){return r(t)},get colorPickerMode(){return r(F)},get toolbarPosition(){return r(o)},$$events:{colorPicked:w}})},C=i=>{ia(i,{width:32,height:32,get selectedShape(){return r(l)},get selectedColor(){return r(n)},get paintMode(){return r(t)},get colorPickerMode(){return r(F)},get toolbarPosition(){return r(o)},$$events:{colorPicked:w}})};le(b,i=>{r(s)?i(h):i(C,!1)})}B(M),L(e,M),Ue()}export{l0 as component};
