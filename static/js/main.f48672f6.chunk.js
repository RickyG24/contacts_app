(this.webpackJsonpcontacts_app=this.webpackJsonpcontacts_app||[]).push([[0],{10:function(e,t,n){},12:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),s=n(5),a=n.n(s),o=(n(10),n(3)),i=(n(4),n(0)),u=function(e){var t=e.searchQuery,n=e.setSearchQuery;return Object(i.jsx)("form",{method:"get",autoComplete:"off",onSubmit:function(e){e.preventDefault()},children:Object(i.jsx)("input",{value:t,onInput:function(e){return n(e.target.value)},type:"text",name:"s",placeholder:"Search-contact-list"})})};var l=function(){var e=Object(c.useState)([]),t=Object(o.a)(e,2),n=t[0],r=t[1],s=window.location.search,a=new URLSearchParams(s).get("s"),l=Object(c.useState)(a||""),h=Object(o.a)(l,2),j=h[0],d=h[1],b=function(e,t){return t?e.filter((function(e){var n=e.name.toLowerCase(),c=e.phone,r=e.email.toLowerCase();return n.includes(t.toLowerCase())||c.includes(t)||r.includes(t.toLowerCase())})):e}(n,j);return Object(c.useEffect)((function(){fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(e){r(e)}))}),[]),Object(i.jsxs)("div",{children:[Object(i.jsx)(u,{searchQuery:j,setSearchQuery:d}),Object(i.jsx)("ul",{children:b.map((function(e){return Object(i.jsx)("li",{children:Object(i.jsx)("div",{class:"card",children:Object(i.jsxs)("div",{children:[Object(i.jsx)("h5",{class:"card-title",children:e.name}),Object(i.jsx)("h6",{class:"card-subtitle mb-2",children:e.email}),Object(i.jsx)("p",{class:"card-text",children:e.phone})]})})},e.name)}))})]})},h=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,13)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),c(e),r(e),s(e),a(e)}))};a.a.render(Object(i.jsx)(r.a.StrictMode,{children:Object(i.jsx)(l,{})}),document.getElementById("root")),h()},4:function(e,t,n){}},[[12,1,2]]]);
//# sourceMappingURL=main.f48672f6.chunk.js.map