(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{12:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var c=n(1),o=n.n(c),s=n(7),a=n.n(s),r=n(6),u=n(3),i=(n(12),n(0)),l=origin.replace(/^http/,"ws");console.log(l);var j=function(){var e=Object(c.useState)("Atharv"),t=Object(u.a)(e,2),n=t[0],o=t[1],s=Object(c.useState)([]),a=Object(u.a)(s,2),j=a[0],b=a[1],O=Object(c.useState)([]),p=Object(u.a)(O,2),d=p[0],f=p[1],h=Object(c.useState)(new WebSocket(l)),g=Object(u.a)(h,2),m=g[0],x=g[1];return Object(c.useEffect)((function(){return m.onopen=function(){console.log("WebSocket Connected")},m.onmessage=function(e){var t=JSON.parse(e.data);console.log(JSON.parse(e.data)),f([t].concat(Object(r.a)(d))),console.log(d)},function(){m.onclose=function(){console.log("WebSocket Disconnected"),x(new WebSocket(l))}}}),[m,m.onmessage,m.onopen,m.onclose,d]),Object(i.jsxs)("div",{children:[Object(i.jsxs)("label",{htmlFor:"user",children:["Name:",Object(i.jsx)("input",{className:"nameInput",type:"text",id:"user",placeholder:"User",value:n,onChange:function(e){return o(e.target.value)}})]}),Object(i.jsxs)("form",{action:"",onSubmit:function(e){e.preventDefault(),function(e,t){var n={user:e,message:t};m.send(JSON.stringify(n)),f([n].concat(Object(r.a)(d)))}(n,j),b([])},children:[Object(i.jsx)("input",{type:"text",placeholder:"Type a message ...",value:j,onChange:function(e){return b(e.target.value)}}),Object(i.jsx)("input",{type:"submit",value:"Send"})]}),Object(i.jsx)("ul",{children:d.map((function(e,t){return Object(i.jsxs)("li",{children:[Object(i.jsx)("b",{children:e.user}),": ",Object(i.jsx)("em",{children:e.message})]},t)}))})]})};a.a.render(Object(i.jsx)(o.a.StrictMode,{children:Object(i.jsx)(j,{})}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.f4c040c1.chunk.js.map