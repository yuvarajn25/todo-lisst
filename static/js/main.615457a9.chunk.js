(this["webpackJsonptodo-list"]=this["webpackJsonptodo-list"]||[]).push([[0],{32:function(e,t,n){},33:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var c=n(2),a=n.n(c),r=n(21),s=n.n(r),i=(n(32),n(10)),o=n(27),u=n(8),j=(n(33),n(26));console.log({SUPERBASE_API_URL:"https://fbubmiirtajrzslefjmy.supabase.co",REACT_APP_NOT_SECRET_CODE:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYyMDEzNzgyNSwiZXhwIjoxOTM1NzEzODI1fQ.GjJeQFR4xIfE-T4HUa95FoqpCdHfyszRQ-Hsk3YZSNM"});var d=Object(j.a)("https://fbubmiirtajrzslefjmy.supabase.co","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYyMDEzNzgyNSwiZXhwIjoxOTM1NzEzODI1fQ.GjJeQFR4xIfE-T4HUa95FoqpCdHfyszRQ-Hsk3YZSNM"),b=n(1),l=n.n(b),p=n(11),f=n(4),O=n(14),h=n(3);function x(e){var t=e.isLogin,n=e.onNotification,c=Object(f.g)();d.auth.session()&&c.push("/home");var a=function(){var e=Object(p.a)(l.a.mark((function e(a){var r,s,i,o,u,j,b,p;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),r=a.target,s=r.email.value,i=r.password.value,o={email:s,password:i},!t){e.next=12;break}return e.next=6,d.auth.signIn(o);case 6:u=e.sent,(j=u.error)&&n("error",j.message),c.push("/home"),e.next=17;break;case 12:return e.next=14,d.auth.signUp(o);case 14:b=e.sent,(p=b.error)&&n("error",p.message);case 17:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(h.jsx)("div",{children:Object(h.jsx)("div",{className:"login",children:Object(h.jsxs)("form",{onSubmit:a,children:[Object(h.jsx)("input",{placeholder:"Email",className:"field",name:"email",type:"text"}),Object(h.jsx)("input",{placeholder:"Password",className:"field",name:"password",type:"password"}),Object(h.jsx)("input",{type:"submit",value:t?"Login":"Sign Up"}),Object(h.jsx)("div",{className:"signup",children:Object(h.jsx)(O.b,{to:t?"/signup":"/login",children:t?"do not have account? Signup here":"Already have account? Login here"})})]})})})}var m=n(24);function v(e){var t=Object(c.useState)(e.task),n=Object(u.a)(t,2),a=n[0],r=n[1];return a?Object(h.jsxs)("div",{className:"task-item",children:[Object(h.jsx)("input",{type:"checkbox",checked:a.is_completed,onChange:function(t){a.is_completed||(a.completed_date=parseInt(Date.now()/1e3)),e.onSave(Object(i.a)(Object(i.a)({},a),{},{is_completed:!a.is_completed}))},style:a.id?{}:{visibility:"hidden"}}),Object(h.jsx)("input",{type:"text",value:a.task,onChange:function(e){r(Object(i.a)(Object(i.a)({},a),{},{task:e.target.value}))},onBlur:function(){return e.onSave(a)},placeholder:a.id?"":"+ Add New"}),Object(h.jsx)(m.a,{onClick:function(){return e.onDelete(a.id)},style:!a.id&&{visibility:"hidden"}})]}):Object(h.jsx)("div",{})}function g(e){var t=this,n=e.onNotification,a=e.header,r=e.isCompleted,s=Object(c.useState)([]),i=Object(u.a)(s,2),o=i[0],j=i[1];Object(c.useEffect)(Object(p.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!o.length){e.next=2;break}return e.abrupt("return");case 2:(function(){var e=Object(p.a)(l.a.mark((function e(){var t,c,a,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.from("to_do").select("*").eq("is_completed",r).order("created_date");case 2:if(t=e.sent,c=t.data,!(a=t.error)){e.next=8;break}return n("error",a.message),e.abrupt("return");case 8:s=c,!r&&s.push({is_completed:!1,task:""}),j(s);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()();case 4:case"end":return e.stop()}}),e)}))),[o]);var b=function(){var e=Object(p.a)(l.a.mark((function e(n){var c,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==n.task){e.next=2;break}return e.abrupt("return");case 2:return n.id||(n.created_date=parseInt(Date.now()/1e3)),e.next=5,d.from("to_do").insert([n],{upsert:!0});case 5:c=e.sent,c.data,(a=c.error)&&t.props.onNotification("error",a.message),j([]);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=Object(p.a)(l.a.mark((function e(n){var c,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.from("to_do").delete().eq("id",n);case 2:c=e.sent,c.data,(a=c.error)&&t.props.onNotification("error",a.message),j([]);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(h.jsx)("div",{className:"todo-pending",children:Object(h.jsxs)("div",{children:[Object(h.jsx)("h2",{children:a}),o.map((function(e){return Object(h.jsx)(v,{task:e,onSave:b,onDelete:f})}))]})})}function N(e){e.onNotification;return Object(h.jsxs)("div",{children:[Object(h.jsx)(g,{header:"Pending Tasks",isCompleted:!1}),Object(h.jsx)(g,{header:"Completed Tasks",isCompleted:!0})]})}var I=n(25);function k(e){var t=e.onNotification;return Object(h.jsxs)("div",{className:"nav",children:[Object(h.jsx)("div",{children:"asdsad"}),Object(h.jsx)("div",{className:"appname",children:Object(h.jsx)(O.b,{to:"/home",children:"TODO List"})}),Object(h.jsx)("div",{className:"action",children:Object(h.jsx)(I.a,{onClick:function(){var e=d.auth.signOut().error;e?t("error",e.message):t("success","Logged Out")}})})]})}var y=Object(c.forwardRef)((function(e,t){var n=Object(c.useState)(!1),a=Object(u.a)(n,2),r=a[0],s=a[1],i=Object(c.useState)(null),o=Object(u.a)(i,2),j=o[0],d=o[1],b=Object(c.useState)(null),l=Object(u.a)(b,2),p=l[0],f=l[1],O=function(e,t){s(!0),d(e),f(t)};Object(c.useImperativeHandle)(t,(function(){return{showNotification:O}})),Object(c.useEffect)((function(){r&&setTimeout((function(){s(!1)}),1500)}),[r]);var x=r?"notification ".concat(j,"-notification"):"notification";return Object(h.jsx)("div",{className:x,children:Object(h.jsx)("p",{children:p})})}));var w=function(){var e=Object(c.useState)(d.auth.session()),t=Object(u.a)(e,2),n=t[0],a=t[1],r=Object(c.useRef)(null),s=function(e,t){r.current.showNotification(e,t)};d.auth.onAuthStateChange((function(e,t){a(t)})),console.log({session:n});var j=function(e){var t=e.component,c=Object(o.a)(e,["component"]);return Object(h.jsx)(f.b,Object(i.a)(Object(i.a)({},c),{},{render:function(e){return n?Object(h.jsxs)("div",{children:[Object(h.jsx)(k,{onNotification:s}),Object(h.jsx)(t,Object(i.a)({},e))]}):Object(h.jsx)(f.a,{to:"/login"})}}))};return Object(h.jsx)("div",{children:Object(h.jsxs)(O.a,{children:[Object(h.jsx)(y,{ref:r}),Object(h.jsxs)(f.d,{children:[Object(h.jsx)(f.b,{exact:!0,path:"/",render:function(){return n?Object(h.jsx)(f.a,{to:"/home"}):Object(h.jsx)(f.a,{to:"/login"})}}),Object(h.jsx)(f.b,{exact:!0,path:"/login",children:Object(h.jsx)(x,{isLogin:!0,onNotification:s})}),Object(h.jsx)(f.b,{exact:!0,path:"/signup",children:Object(h.jsx)(x,{isLogin:!1,onNotification:s})}),Object(h.jsx)(j,{exact:!0,path:"/home",component:function(){return Object(h.jsx)(N,{onNotification:s})}})]})]})})},C=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,47)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),r(e),s(e)}))};s.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(w,{})}),document.getElementById("root")),C()}},[[44,1,2]]]);
//# sourceMappingURL=main.615457a9.chunk.js.map