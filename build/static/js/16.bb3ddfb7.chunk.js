(this["webpackJsonpreact-boilarplate"]=this["webpackJsonpreact-boilarplate"]||[]).push([[16],{319:function(e,t,a){"use strict";a(1);var s=a(100),r=a(101),c=a(2);t.a=function(e){var t=e.children;return Object(c.jsx)("div",{className:"w-screen h-screen text-white overflow-hidden",children:Object(c.jsxs)("div",{className:"grid xl:grid-cols-layout w-full h-screen max-w-screen-3xl mx-auto",children:[Object(c.jsx)("div",{className:"hidden xl:block",children:Object(c.jsx)(r.a,{})}),Object(c.jsxs)("div",{className:"grid grid-rows-layout w-full h-screen overflow-hidden bg-light text-dark",children:[Object(c.jsx)(s.a,{}),Object(c.jsx)("div",{className:"overflow-y-auto",children:Object(c.jsx)("div",{className:"grid grid-cols-1 p-4",children:t})})]})]})})}},322:function(e,t,a){"use strict";a(1);var s=a(12),r=a(40),c=a(327),n=a(2);t.a=function(e){var t=e.title,a=e.btnSave,i=e.path,l=void 0===i?"":i,d=Object(s.g)();return Object(n.jsxs)("div",{className:"flex justify-between px-0 pb-2",children:[Object(n.jsx)("h1",{className:"text-2xl font-medium",children:t}),a?Object(n.jsx)("button",{className:"btn-header text-dark",onClick:function(){return d.push(l)},children:Object(n.jsx)(r.c,{size:36})}):Object(n.jsx)("button",{className:"btn-header text-danger",onClick:function(){return d.push(l)},children:Object(n.jsx)(c.a,{size:36})})]})}},328:function(e,t,a){"use strict";a(1);var s=a(2);t.a=function(e){var t=e.btnText,a=e.disabled,r=e.isRow,c=void 0===r||r;return Object(s.jsx)("div",{className:c?"form-row w-full":"md:mt-6",children:Object(s.jsx)("button",{type:"submit",className:"btn-orange",disabled:a,children:t})})}},378:function(e,t,a){"use strict";a.r(t);var s=a(1),r=a(12),c=a(86),n=a(319),i=a(58),l=a(322),d=a(35),u=a(27),b=a(7),j=a.n(b),o=a(21),x=a(9),h=a(30),m=a(33),O=a(328),f=a(36),p=a(2),v="admin",g=function(e){var t=e.defaultValues,a=e.action,c=e.btnText,n=e.path,i=e.returnPath,l=Object(r.g)(),b=Object(s.useState)(!1),g=Object(x.a)(b,2),w=g[0],N=g[1],y=Object(d.d)().mutateAsync,k=Object(h.d)({defaultValues:t}),S=k.register,z=k.handleSubmit,E=function(){var e=Object(o.a)(j.a.mark((function e(t){var s;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return N(!0),e.prev=1,e.next=4,y({path:n,formData:t});case 4:s=e.sent,204===s.status&&(m.b.success("Update Successfully"),l.push(i)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),e.t0.response?m.b.error("Response : "+e.t0.response.data.message):e.t0.request?m.b.error("Request : "+e.t0.message):m.b.error("Error :",e.t0.message);case 12:return e.prev=12,a(),N(!1),e.finish(12);case 16:case"end":return e.stop()}}),e,null,[[1,9,12,16]])})));return function(t){return e.apply(this,arguments)}}();return Object(p.jsxs)("form",{onSubmit:z(E),children:[Object(p.jsx)(f.a,{name:"fullName",type:"text",label:"Username",register:S,disabled:!0}),Object(p.jsx)(f.a,{name:"email",type:"email",label:"Email",register:S,disabled:!0}),Object(p.jsxs)("select",Object(u.a)(Object(u.a)({className:"w-full h-10 px-3 my-3 capitalize bg-gray-200"},S("role")),{},{children:[Object(p.jsx)("option",{className:"capitalize",children:"--Select--"}),Object(p.jsx)("option",{className:"capitalize",value:v,children:v}),Object(p.jsx)("option",{className:"capitalize",value:"user",children:"User"})]})),Object(p.jsx)(O.a,{btnText:c,disabled:w})]})};t.default=function(){var e=Object(r.i)().id,t=Object(d.b)("users","/user/".concat(e)),a=t.data,s=t.error,u=t.isLoading,b=t.isError,j=t.refetch;if(u)return Object(p.jsx)(n.a,{children:Object(p.jsx)(i.b,{})});if(b)return Object(p.jsx)(n.a,{children:Object(p.jsx)(c.a,{message:s.message})});var o={fullName:a.data.fullName,avater:a.data.avater,email:a.data.email,role:a.data.role};return Object(p.jsx)(n.a,{children:Object(p.jsxs)("div",{className:"card w-full max-w-screen-xl",children:[Object(p.jsx)(l.a,{title:"User Edit",btnSave:!1,path:"/admin/user-list"}),Object(p.jsx)(g,{defaultValues:o,action:j,btnText:"Edit",path:"/user/edit/".concat(e),returnPath:"/admin/user-list"})]})})}}}]);
//# sourceMappingURL=16.bb3ddfb7.chunk.js.map