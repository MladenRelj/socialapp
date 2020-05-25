(this["webpackJsonpreact-redux-market"]=this["webpackJsonpreact-redux-market"]||[]).push([[0],{216:function(e,t,a){e.exports=a(408)},221:function(e,t,a){},408:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(88),l=a.n(c),i=(a(221),a(7)),s=a(30),o=a(6),m=a(13),u=a(25),d=Object(o.b)(null,(function(e){return{signOut:function(){return e((function(e,t,a){(0,a.getFirebase)().auth().signOut().then((function(){e({type:"SIGNOUT_SUCCESS"})}))}))}}}))((function(e){return r.a.createElement("ul",{className:"right"},r.a.createElement("li",null,r.a.createElement(i.c,{className:"hide-on-small-only btn-floating btn-small waves-effect waves  blue-grey darken-1",to:"/create"},r.a.createElement("i",{className:"material-icons"},"add"))),r.a.createElement("li",null,r.a.createElement("a",{onClick:e.signOut},"Log Out")),r.a.createElement("li",null,r.a.createElement(i.c,{to:"/",className:"btn  btn-floating grey lighten-1"},e.profile.initials)))})),p=function(){return r.a.createElement("ul",{className:"right"},r.a.createElement("li",{className:""},r.a.createElement(i.c,{to:"/signup"},"Signup")),r.a.createElement("li",null,r.a.createElement(i.c,{to:"/signin"},"Login")))},h=Object(o.b)((function(e){return{auth:e.firebase.auth,profile:e.firebase.profile}}))((function(e){var t=e.auth,a=e.profile,n=t.uid?r.a.createElement(d,{profile:a}):r.a.createElement(p,null);return r.a.createElement("nav",{className:"nav-wrapper  grey darken-3"},r.a.createElement("div",{className:"container"},r.a.createElement(i.b,{to:"/",className:"brand-logo left"},"ReactRedux"),n))})),f=a(26),E=a(27),b=a(29),g=a(28),N=a(15),v=a(49),j=a.n(v),O=function(e){var t=e.notifications;return r.a.createElement("div",{className:"section"},r.a.createElement("div",{className:"card z-depth-0"},r.a.createElement("div",{className:"card-content grey lighten-4"},r.a.createElement("span",{className:"card-title"},"Notifications"),r.a.createElement("ul",{className:"notifications"},t&&t.map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement("span",{className:""}," ",e.user),r.a.createElement("span",null," ",e.content),r.a.createElement("div",{className:"grey-text note-data"},j()(e.time.toDate()).fromNow()))}))))))},y=function(e){var t=e.project;return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col s12 m12"},r.a.createElement("div",{className:"card blue-grey darken-2"},r.a.createElement("div",{className:"card-content white-text"},r.a.createElement("span",{className:"card-title "},t.title),r.a.createElement("p",null,t.content)),r.a.createElement("div",{className:"card-action blue-grey-text text-lighten-4"},r.a.createElement("div",null,r.a.createElement("i",null,"Posted by ",t.authorFirstName," ",t.authorLastName)),r.a.createElement("div",null,r.a.createElement("i",null,j()(t.createdAt).calendar()))))))},C=function(e){var t=e.projects;return r.a.createElement("div",{className:" project-list section"},t&&t.map((function(e){return r.a.createElement(i.b,{to:"/project/"+e.id,key:e.id},r.a.createElement(y,{project:e,key:e.id}))})))},x=function(e){Object(b.a)(a,e);var t=Object(g.a)(a);function a(){return Object(f.a)(this,a),t.apply(this,arguments)}return Object(E.a)(a,[{key:"render",value:function(){var e=this.props,t=e.projects,a=e.auth,n=e.notifications;return a.uid?r.a.createElement("div",{className:"dashboard container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col s6 m6"},r.a.createElement(C,{projects:t})),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col s6 m5 offset-m1"},r.a.createElement(O,{notifications:n}))))):r.a.createElement(s.a,{to:"/signin"})}}]),a}(n.Component),w=Object(N.d)(Object(o.b)((function(e){return console.log(e),{projects:e.firestore.ordered.projects,auth:e.firebase.auth,notifications:e.firestore.ordered.notifications}})),Object(m.firestoreConnect)([{collection:"projects",limit:5,orderBy:["createdAt","desc"]},{collection:"notifications",limit:3,orderBy:["time","desc"]}]))(x);var S=Object(N.d)(Object(o.b)((function(e,t){console.log(e);var a=t.match.params.id,n=e.firestore.data.projects;return{project:n?n[a]:null,auth:e.firebase.auth}})),Object(m.firestoreConnect)([{collection:"projects"}]))((function(e){var t=e.project;return e.auth.uid?t?r.a.createElement("div",{className:"container section project-details"},r.a.createElement("div",{className:"card-panel z-depth-1  grey lighten-3"},r.a.createElement("div",{className:"card-content"},r.a.createElement("h4",{className:"card-title"},t.title),r.a.createElement("p",{className:"flow-text transparent"},t.content),r.a.createElement("div",{className:"card-action darken-text text-darken-2"},r.a.createElement("div",null,r.a.createElement("i",null,"Posted by ",t.authorFirstName," ",t.authorLastName)),r.a.createElement("div",null,j()(t.createdAt).calendar()," "))))):r.a.createElement("div",{className:"container center"},r.a.createElement("p",null,"Loading project...")):r.a.createElement(s.a,{to:"/signin"})})),R=a(4),k=function(e){Object(b.a)(a,e);var t=Object(g.a)(a);function a(){var e;Object(f.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={email:"",password:""},e.handleChange=function(t){e.setState(Object(R.a)({},t.target.id,t.target.value))},e.handleSubmit=function(t){t.preventDefault(),e.props.signIn(e.state),console.log(e.state)},e}return Object(E.a)(a,[{key:"render",value:function(){var e=this.props,t=e.authError;return e.auth.uid?r.a.createElement(s.a,{to:"/"}):r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col s12 m4 l8"},r.a.createElement("form",{onSubmit:this.handleSubmit,className:"transparent"},r.a.createElement("h5",{className:"grey-text text-darken-3"},"Sign In"),r.a.createElement("div",{className:"input-field input-outlined"},r.a.createElement("label",{className:" grey-text text-lighten-5",htmlFor:"email"},"Email"),r.a.createElement("input",{autoComplete:"off",className:" blue-grey-text text-darken-4",type:"email",id:"email",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{className:"grey-text text-lighten-5",htmlFor:"password"},"Password"),r.a.createElement("input",{autoComplete:"off",className:"blue-grey-text text-darken-4",type:"password",id:"password",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("button",{className:"waves-effect waves-light btn"},"Login"),r.a.createElement("div",{className:"red-text center"},t?r.a.createElement("p",null,t):null))))))}}]),a}(n.Component),F=Object(o.b)((function(e){return{authError:e.auth.authError,auth:e.firebase.auth}}),(function(e){return{signIn:function(t){return e((a=t,function(e,t,n){(0,n.getFirebase)().auth().signInWithEmailAndPassword(a.email,a.password).then((function(){e({type:"LOGIN_SUCCESS"})})).catch((function(t){e({type:"LOGIN_ERROR",err:t})}))}));var a}}}))(k),I=function(e){Object(b.a)(a,e);var t=Object(g.a)(a);function a(){var e;Object(f.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={firstName:"",lastName:"",email:"",password:""},e.handleChange=function(t){e.setState(Object(R.a)({},t.target.id,t.target.value))},e.handleSubmit=function(t){t.preventDefault(),e.props.signUp(e.state)},e}return Object(E.a)(a,[{key:"render",value:function(){var e,t,a,n,c=this.props,l=c.auth,i=c.authErr;return l.uid?r.a.createElement(s.a,{to:"/"}):r.a.createElement("div",{className:"container"},r.a.createElement("form",{onSubmit:this.handleSubmit,className:"transparent"},r.a.createElement("h5",{className:"grey-text text-darken-3"},"Sign Up"),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{className:" grey-text text-lighten-5",htmlFor:"firstName"},"First Name"),r.a.createElement("input",(e={autoComplete:"off",className:" blue-grey-text text-darken-4"},Object(R.a)(e,"autoComplete","off"),Object(R.a)(e,"type","text"),Object(R.a)(e,"id","firstName"),Object(R.a)(e,"onChange",this.handleChange),e))),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{className:" grey-text text-lighten-5",htmlFor:"lastName"},"Last Name"),r.a.createElement("input",(t={autoComplete:"off",className:" blue-grey-text text-darken-4"},Object(R.a)(t,"autoComplete","off"),Object(R.a)(t,"type","text"),Object(R.a)(t,"id","lastName"),Object(R.a)(t,"onChange",this.handleChange),t))),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{className:" grey-text text-lighten-5",htmlFor:"email"},"Email"),r.a.createElement("input",(a={autoComplete:"off",className:" blue-grey-text text-darken-4"},Object(R.a)(a,"autoComplete","off"),Object(R.a)(a,"type","email"),Object(R.a)(a,"id","email"),Object(R.a)(a,"onChange",this.handleChange),a))),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{className:" grey-text text-lighten-5",htmlFor:"password"},"Password"),r.a.createElement("input",(n={autoComplete:"off",className:" blue-grey-text text-darken-4"},Object(R.a)(n,"autoComplete","off"),Object(R.a)(n,"type","password"),Object(R.a)(n,"id","password"),Object(R.a)(n,"onChange",this.handleChange),n))),r.a.createElement("div",{className:"input-field"},r.a.createElement("button",{autoComplete:"off",className:"waves-effect waves-light btn"},"Sign Up"),r.a.createElement("div",{className:"red-text center"},i?r.a.createElement("p",null,i):null))))}}]),a}(n.Component),P=Object(o.b)((function(e){return{auth:e.firebase.auth,authError:e.firebase.authErr}}),(function(e){return{signUp:function(t){return e(function(e){return function(t,a,n){var r=n.getFirebase,c=n.getFirestore,l=r(),i=c();l.auth().createUserWithEmailAndPassword(e.email,e.password).then((function(t){return i.collection("users").doc(t.user.uid).set({firstName:e.firstName,lastName:e.lastName,initials:e.firstName[0]+e.lastName[0]})})).then((function(){t({type:"SIGNUP_SUCCESS"})})).catch((function(e){t({type:"SIGNUP_ERROR",err:e})}))}}(t))}}}))(I),A=a(38),U=function(e){Object(b.a)(a,e);var t=Object(g.a)(a);function a(){var e;Object(f.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={title:"",content:""},e.handleChange=function(t){e.setState(Object(R.a)({},t.target.id,t.target.value)),console.log(e.state)},e.handleSubmit=function(t){""!==e.state[{}]?(t.preventDefault(),e.props.createProject(e.state),e.props.history.push("/")):console.log("Error")},e}return Object(E.a)(a,[{key:"render",value:function(){return this.props.auth.uid?r.a.createElement("div",{className:"container"},r.a.createElement("form",{onSubmit:this.handleSubmit,className:"grey lighten-4"},r.a.createElement("h5",{className:"grey-text text-darken-3"},"Create Project"),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"title"},"Title"),r.a.createElement("input",{type:"text",id:"title",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"content"},"Content"),r.a.createElement("textarea",{id:"content",className:"materialize-textarea",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("button",{className:"btn grey darken-1 z-depth-0"},"Create")))):r.a.createElement(s.a,{to:"/signin"})}}]),a}(n.Component),_=Object(o.b)((function(e){return{auth:e.firebase.auth}}),(function(e){return{createProject:function(t){return e(function(e){return function(t,a,n){n.getFirebase;var r=(0,n.getFirestore)(),c=a().firebase.profile,l=a().firebase.auth;r.collection("projects").add(Object(A.a)({},e,{authorFirstName:c.firstName,authorLastName:c.lastName,author_id:l,createdAt:(new Date).toDateString()})).then((function(){t({type:"CREATE_PROJECT",project:e})})).catch((function(e){t({type:"CREATE_PROJECT_ERROR",err:e})}))}}(t))}}}))(U);var L=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(i.a,null,r.a.createElement(h,null),r.a.createElement(s.d,null,r.a.createElement(s.b,{exact:!0,path:"/",component:w}),r.a.createElement(s.b,{path:"/project/:id",component:S}),r.a.createElement(s.b,{path:"/signin",component:F}),r.a.createElement(s.b,{path:"/signup",component:P}),r.a.createElement(s.b,{path:"/create",component:_}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var G={authError:null},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN_ERROR":return Object(A.a)({},e,{authError:"Login failed"});case"LOGIN_SUCCESS":return console.log("login success"),Object(A.a)({},e,{authError:null});case"SIGNOUT_SUCCESS":return console.log("signout success"),e;case"SIGNUP_ERROR":return Object(A.a)({},e,{authError:t.err.message});case"SIGNUP_SUCCESS":return console.log("signup success"),Object(A.a)({},e,{authError:null});default:return e}},B={projects:[{id:"1",title:"some title",content:"some content"},{id:"12",title:"some title",content:"some content"},{id:"3",title:"some title",content:"some content"}]},D=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CREATE_PROJECT":return console.log("created project",t.project),e;case"CREATE_PROJECT_ERROR":return console.log("created project error",t.err),e;default:return e}},z=Object(N.c)({auth:T,project:D,firebase:m.firebaseReducer,firestore:u.firestoreReducer}),J=a(50),W=a.n(J),K=(a(212),a(213),a(138));W.a.initializeApp({apiKey:"AIzaSyAu7U6sRw6JzBa_P-KkSntB4_9fRyDY2dw",authDomain:"redux-market-34962.firebaseapp.com",databaseURL:"https://redux-market-34962.firebaseio.com",projectId:"redux-market-34962",storageBucket:"redux-market-34962.appspot.com",messagingSenderId:"814624506446",appId:"1:814624506446:web:0855085e41a1ff0d96f91f",measurementId:"G-YQZ7VQ8L28"}),W.a.firestore();var Q=W.a,Y=(K.a.withExtraArgument({getFirebase:m.getFirebase,getFirestore:u.getFirestore}),Object(N.e)(z,{},Object(N.d)(Object(N.a)(K.a.withExtraArgument({getFirestore:u.getFirestore,getFirebase:m.getFirebase})),Object(u.reduxFirestore)(Q)))),H={firebase:W.a,config:{userProfile:"users",useFirestoreForProfile:!0,enableRedirectHandling:!1,resetBeforeLogin:!1},dispatch:Y.dispatch,createFirestoreInstance:u.createFirestoreInstance,userProfile:"users",presence:"presence",sessions:"sessions"};function M(e){var t=e.children,a=Object(o.c)((function(e){return e.firebase.auth}));return Object(m.isLoaded)(a)?t:r.a.createElement("div",null,"splash screen...")}l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(o.a,{store:Y},r.a.createElement(m.ReactReduxFirebaseProvider,H,r.a.createElement(M,null,r.a.createElement(L,null))))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[216,1,2]]]);
//# sourceMappingURL=main.d5d042bf.chunk.js.map