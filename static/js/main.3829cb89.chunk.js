(this["webpackJsonptodos-list"]=this["webpackJsonptodos-list"]||[]).push([[0],{24:function(e,t,n){},25:function(e,t,n){},35:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),s=n(17),o=n.n(s),l=(n(24),n(19)),r=n(11),i=(n(25),n(8)),b=n(0);function j(e){return Object(b.jsx)("div",{children:Object(b.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:Object(b.jsxs)("div",{className:"container-fluid",children:[Object(b.jsx)(i.b,{className:"navbar-brand",to:"/",children:e.title}),Object(b.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(b.jsx)("span",{className:"navbar-toggler-icon"})}),Object(b.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(b.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)(i.b,{className:"nav-link active","aria-current":"page",to:"/",children:"Home"})}),Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)(i.b,{className:"nav-link",to:"/about",children:"About"})})]}),e.searchBar?Object(b.jsxs)("form",{className:"d-flex",children:[Object(b.jsx)("input",{className:"form-control me-2",type:"search",placeholder:"Search","aria-label":"Search"}),Object(b.jsx)("button",{className:"btn btn-outline-success",type:"submit",children:"Search"})]}):""]})]})})})}function d(){return Object(b.jsx)("footer",{className:"bg-dark text-light",style:{width:"100%",border:"2px solid red"},children:Object(b.jsx)("p",{className:"text-center",children:"Copyright \xa9 My TodoList.com"})})}function u(e){var t=e.todo,n=e.onDelete;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("div",{children:[Object(b.jsx)("h4",{children:t.title}),Object(b.jsx)("p",{children:t.desc}),Object(b.jsx)("button",{className:"btn btn-sm btn-danger ",onClick:function(){n(t)},children:"Delete"})]}),Object(b.jsx)("hr",{})]})}function h(e){return Object(b.jsxs)("div",{className:"container my-3",style:{minHeight:"70vh",margin:"50px auto"},children:[Object(b.jsx)("h3",{className:" my-3",children:"Todo List"}),0===e.todos.length?"No Todo to Display":e.todos.map((function(t){return Object(b.jsx)(u,{todo:t,onDelete:e.onDelete},t.sno)}))]})}function m(e){var t=Object(c.useState)(""),n=Object(r.a)(t,2),a=n[0],s=n[1],o=Object(c.useState)(""),l=Object(r.a)(o,2),i=l[0],j=l[1];return Object(b.jsx)("div",{className:"container my-3",children:Object(b.jsxs)("form",{onSubmit:function(t){t.preventDefault(),a&&i?(e.addTodo(a,i),s(""),j("")):alert("Title And Description are Blank")},children:[Object(b.jsxs)("div",{className:"mb-3",children:[Object(b.jsx)("label",{htmlFor:"title",className:"form-label",children:"Todo Title"}),Object(b.jsx)("input",{type:"text",value:a,onChange:function(e){s(e.target.value)},className:"form-control",id:"title",placeholder:"TOdo?"})]}),Object(b.jsxs)("div",{className:"mb-3",children:[Object(b.jsx)("label",{htmlFor:"desc",className:"form-label",children:"Todo Description"}),Object(b.jsx)("input",{type:"text",value:i,onChange:function(e){j(e.target.value)},className:"form-control",id:"text",placeholder:"Description?"})]}),Object(b.jsx)("button",{type:"submit",className:"btn  btn-sm btn-success",children:"Add Todo"})]})})}function x(){return Object(b.jsxs)("div",{children:["This is an about Component",Object(b.jsx)("p",{children:"cdsninfwkc weenbwnb jdbcjs cb skj wjnecsknk ncknskn nxsnakn nknkxnsakn jnkansknn kndinn nnn\\ scomsoc scnkcnsknknn"})]})}j.defaultProps={tittle:"YOur Title Is Here"};var O=n(2);var g=function(){var e;e=null===localStorage.getItem("todos")?[]:JSON.parse(localStorage.getItem("todos"));var t=Object(c.useState)(e),n=Object(r.a)(t,2),a=n[0],s=n[1];Object(c.useEffect)((function(){localStorage.setItem("todos",JSON.stringify(a))}),[a]);var o=function(e){s(a.filter((function(t){return t!==e}))),localStorage.setItem("todos",JSON.stringify(a))},u=function(e,t){console.log("Adding",e,t);var n={sno:0===a.length?0:a[a.length-1].sno+1,title:e,desc:t};s([].concat(Object(l.a)(a),[n]))};return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)(i.a,{children:[Object(b.jsx)(j,{title:"ToDoLISt",searchBar:!1}),Object(b.jsxs)(O.c,{children:[Object(b.jsx)(O.a,{exact:!0,path:"/",render:function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(m,{addTodo:u}),Object(b.jsx)(h,{todos:a,onDelete:o})]})}}),Object(b.jsx)(O.a,{exact:!0,path:"/about",children:Object(b.jsx)(x,{})})]}),Object(b.jsx)(d,{})]})})},p=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,36)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),c(e),a(e),s(e),o(e)}))};o.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(g,{})}),document.getElementById("root")),p()}},[[35,1,2]]]);
//# sourceMappingURL=main.3829cb89.chunk.js.map