(this["webpackJsonpmy-anime"]=this["webpackJsonpmy-anime"]||[]).push([[0],{83:function(e,t,n){},91:function(e,t,n){},96:function(e,t,n){"use strict";n.r(t),n.d(t,"Context",(function(){return D}));var a=n(1),c=n(15),i=n.n(c),r=n(22),o=(n(83),n(42)),s=n(17),j="/login",d="/chat",l=n(38),u=n.n(l),h=n(46),b=n(129),x=n(132),p=n(140),O=n(141),f=n(30),m=n(6),g=function(){var e=Object(a.useContext)(D).auth,t=function(){var t=Object(h.a)(u.a.mark((function t(){var n,a;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=new f.a.auth.GoogleAuthProvider,t.next=3,e.signInWithPopup(n);case 3:a=t.sent,a.user;case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(m.jsx)(b.a,{children:Object(m.jsx)(x.a,{container:!0,style:{height:window.innerHeight-50},alignItems:"center",justify:"center",children:Object(m.jsx)(x.a,{style:{width:400,background:"lightgray",borderRadius:10},container:!0,alignItems:"center",direction:"column",children:Object(m.jsx)(p.a,{p:5,children:Object(m.jsx)(O.a,{onClick:t,style:{background:"white"},variant:"outlined",children:"\u0412\u043e\u0439\u0442\u0438 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e Google"})})})})})},v=n(139),y=n(26),w=n(69),C=(n(91),function(){return Object(m.jsx)(b.a,{children:Object(m.jsx)(x.a,{container:!0,style:{height:window.innerHeight-50},alignItems:"center",justify:"center",children:Object(m.jsx)(x.a,{container:!0,alignItems:"center",direction:"column",children:Object(m.jsxs)("div",{class:"lds-ellipsis",children:[Object(m.jsx)("div",{}),Object(m.jsx)("div",{}),Object(m.jsx)("div",{}),Object(m.jsx)("div",{})]})})})})}),k=n(133),I=n(134),B=n(142),R=n(135),A=n(136),N=Object(k.a)({root:{Width:"50%",backgroundColor:"#ccc"},title:{fontSize:18,color:"#fff",marginLeft:"10px"},pos:{marginBottom:12}});function W(e){var t=e.data,n=e.key,c=e.displayName,i=e.photoURL,o=e.text,s=Object(a.useContext)(D),j=s.auth,d=(s.firestore,N()),l=Object(y.a)(j),u=Object(r.a)(l,1)[0];return console.log(t.uid),Object(m.jsx)(I.a,{style:{minWidth:150,fontFamily:"Roboto",backgroundColor:u.uid===t.uid?"#ccc":"#017AFB",marginLeft:u.uid===t.uid?"auto":"10px",marginRight:u.uid===t.uid?"10px":"auto",marginBottom:10,color:u.uid===n?"#000":"#fff",width:"fit-content",padding:10},children:Object(m.jsxs)(R.a,{children:[Object(m.jsxs)("div",{style:{display:"flex",maxWidth:"150px",height:"50%",alignItems:"center",justifyContent:"space-evenly",marginBottom:"5%"},children:[Object(m.jsx)(B.a,{src:i}),Object(m.jsx)(A.a,{className:d.title,color:"textSecondary",gutterBottom:!0,children:c})]}),Object(m.jsx)(A.a,{variant:"body2",component:"p",children:o})]})})}var L=[{path:j,Component:g}],F=[{path:d,Component:function(){var e=Object(a.useContext)(D),t=e.auth,n=e.firestore,c=Object(y.a)(t),i=Object(r.a)(c,1)[0],o=Object(a.useState)(""),s=Object(r.a)(o,2),j=s[0],d=s[1],l=Object(w.a)(n.collection("messages").orderBy("createdAt")),p=Object(r.a)(l,2),g=p[0],k=p[1],I=function(){var e=Object(h.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:""!=j&&(n.collection("messages").add({uid:i.uid,displayName:i.displayName,photoUrl:i.photoURL,text:j,createdAt:f.a.firestore.FieldValue.serverTimestamp()}),d(""));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),B=function(e){"Enter"==e.code&&I()};return k?Object(m.jsx)(C,{}):g<1?Object(m.jsx)(a.Fragment,{children:Object(m.jsxs)(x.a,{container:!0,alignItems:"center",direction:"column",style:{width:"80%"},children:[Object(m.jsx)("h1",{children:"\u0421\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0439 \u043f\u043e\u043a\u0430 \u043d\u0435\u0442!"}),Object(m.jsx)(v.a,{fullWidth:!0,style:{marginTop:30},placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435",value:j,onChange:function(e){return d(e.target.value)},variant:"outlined",onKeyDown:B}),Object(m.jsx)(O.a,{style:{marginTop:30,backgroundColor:"#017AFB",color:"#ffffff",borderRadius:"80px"},onClick:I,variant:"outlined",children:"\u2708"})]})}):Object(m.jsx)(b.a,{style:{overflow:"hidden"},children:Object(m.jsxs)(x.a,{container:!0,justify:"center",style:{height:window.innerHeight-50,marginTop:50},children:[Object(m.jsx)("div",{style:{width:"80%",height:"60vh",border:"1px solid #ccc",overflowY:"auto"},children:g.map((function(e){return Object(m.jsx)(W,{data:e,displayName:e.displayName,photoURL:e.photoUrl,text:e.text})}))}),Object(m.jsxs)(x.a,{container:!0,alignItems:"flex-end",direction:"column",style:{width:"80%"},children:[Object(m.jsx)(v.a,{fullWidth:!0,value:j,placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435",onChange:function(e){return d(e.target.value)},variant:"outlined",onKeyDown:B}),Object(m.jsx)(O.a,{style:{marginTop:30,backgroundColor:"#017AFB",color:"#ffffff",borderRadius:"80px"},onClick:I,variant:"outlined",children:"\u2708"})]})]})})}}],P=function(){var e=Object(a.useContext)(D).auth,t=Object(y.a)(e);return Object(r.a)(t,1)[0]?Object(m.jsxs)(s.d,{children:[F.map((function(e){var t=e.path,n=e.Component;return Object(m.jsx)(s.b,{path:t,component:n,exact:!0},t)})),Object(m.jsx)(s.a,{to:d})]}):Object(m.jsxs)(s.d,{children:[L.map((function(e){var t=e.path,n=e.Component;return Object(m.jsx)(s.b,{path:t,component:n,exact:!0},t)})),Object(m.jsx)(s.a,{to:j})]})},S=n(137),T=n(138),U=function(){var e=Object(a.useContext)(D).auth,t=Object(y.a)(e),n=Object(r.a)(t,1)[0];return Object(m.jsx)(S.a,{color:"secondary",position:"static",children:Object(m.jsxs)(T.a,{variant:"dense",children:[Object(m.jsx)(x.a,{container:!0,justify:"center",children:Object(m.jsx)(A.a,{variant:"h4",children:"Cute Chat"})}),Object(m.jsx)(x.a,{container:!0,justify:"flex-end",children:n?Object(m.jsx)(O.a,{onClick:function(){return e.signOut()},children:"\u0412\u044b\u0439\u0442\u0438"}):Object(m.jsx)(o.b,{to:j,children:Object(m.jsx)(O.a,{children:"\u041b\u043e\u0433\u0438\u043d"})})})]})})},z=function(){var e=Object(a.useContext)(D).auth,t=Object(y.a)(e),n=Object(r.a)(t,3),c=(n[0],n[1]);n[2];return c?Object(m.jsx)(C,{}):Object(m.jsx)("div",{className:"App",children:Object(m.jsxs)(o.a,{children:[Object(m.jsx)(U,{}),Object(m.jsx)(P,{})]})})};n(94),n(95);f.a.initializeApp({apiKey:"AIzaSyDrPPrxNdo-LItM79Rz6MNWmeJbsQ2fxbw",authDomain:"anime-aac6e.firebaseapp.com",projectId:"anime-aac6e",storageBucket:"anime-aac6e.appspot.com",messagingSenderId:"398506808340",appId:"1:398506808340:web:ef164bd12bd7ea254e4301",measurementId:"G-R6WV5VLXZ1"});var D=Object(a.createContext)(null),G=f.a.auth(),H=f.a.firestore();i.a.render(Object(m.jsx)(D.Provider,{value:{firebase:f.a,auth:G,firestore:H},children:Object(m.jsx)(z,{})}),document.getElementById("root"))}},[[96,1,2]]]);
//# sourceMappingURL=main.7c73e6b9.chunk.js.map