(this["webpackJsonpreact-boilarplate"]=this["webpackJsonpreact-boilarplate"]||[]).push([[15],{337:function(e,a,t){"use strict";t.d(a,"b",(function(){return c})),t.d(a,"a",(function(){return l}));t(2);var s=t(3),c=function(e){var a=e.label;return Object(s.jsx)("div",{className:"flex justify-start capitalize",children:Object(s.jsx)("span",{className:"font-semibold capitalize",children:a})})},l=function(e){var a=e.label,t=e.value;return Object(s.jsxs)("div",{className:"",children:[Object(s.jsx)("span",{className:"inline-block capitalize md:hidden font-semibold",children:a}),Object(s.jsx)("span",{className:"break-words",children:t})]})}},340:function(e,a,t){"use strict";t(2);var s=t(26),c=t(21),l=t(3);a.a=function(e){var a=e.path,t=Object(c.g)();return Object(l.jsx)("button",{className:"btn-edit",onClick:function(){return t.push(a)},children:Object(l.jsx)(s.e,{size:16})})}},341:function(e,a,t){"use strict";t(2);var s=t(25),c=t(62),l=t(3);a.a=function(){return Object(l.jsx)("div",{className:"text-darker",children:c.b.length>0&&c.b.map((function(e,a){return Object(l.jsx)("div",{children:Object(l.jsx)(s.c,{className:"my-2 pr-5 py-1 lg:block",activeClassName:"text-red-500",to:e.to,children:Object(l.jsx)("span",{className:"text-sm font-medium",children:e.label})})},a)}))})}},384:function(e,a,t){"use strict";t.r(a);var s=t(354),c=t.n(s),l=(t(2),t(340)),r=t(100),i=t(57),n=t(337),j=t(69),b=t(43),d=t(341),o=t(3);a.default=function(){var e=Object(b.b)("myOrders","/order-list/my-order"),a=e.data,t=e.error,s=e.isLoading,x=e.isError;return s?Object(o.jsx)(i.a,{children:Object(o.jsx)(j.b,{})}):x?Object(o.jsx)(i.a,{children:Object(o.jsx)(r.a,{message:t.message})}):Object(o.jsx)(i.a,{children:Object(o.jsxs)("div",{className:"grid gap-4 lg:grid-cols-6",children:[Object(o.jsx)(d.a,{}),Object(o.jsxs)("div",{className:"card w-full max-w-screen-xl lg:col-span-5",children:[Object(o.jsx)("div",{className:"flex justify-between px-0 pb-2",children:Object(o.jsx)("h1",{className:"text-2xl font-medium",children:"My Order"})}),Object(o.jsxs)("div",{className:"list-wrapper",children:[Object(o.jsxs)("div",{className:"md:grid grid-cols-7 list-header",children:[Object(o.jsx)(n.b,{label:"Order Id"}),Object(o.jsx)(n.b,{label:"Name"}),Object(o.jsx)(n.b,{label:"Shipping Address"}),Object(o.jsx)(n.b,{label:"Total Price"}),Object(o.jsx)(n.b,{label:"Date"}),Object(o.jsx)(n.b,{label:"Payment Type"}),Object(o.jsx)(n.b,{label:"Action"})]}),a.data.map((function(e){var a=e.id,t=e.user,s=e.shippingAddress,r=e.totalPrice,i=e.paymentType,j=e.orderDate;return Object(o.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-7 list-body",children:[Object(o.jsx)(n.a,{label:"Order Id : ",value:a}),Object(o.jsx)(n.a,{label:"Name : ",value:t.fullName}),Object(o.jsx)(n.a,{label:"Shipping Address : ",value:"".concat(s.streetAddress,",").concat(s.city,", ").concat(s.country)}),Object(o.jsx)(n.a,{label:"Total Price : ",value:"AED ".concat(r)}),Object(o.jsx)(n.a,{label:"Date : ",value:c.a.utc(j).local().format("YYYY-MM-DD")}),Object(o.jsx)(n.a,{label:"Status : ",value:i}),Object(o.jsx)("div",{children:Object(o.jsx)("div",{className:"flex justify-start space-x-2",children:Object(o.jsx)(l.a,{path:"/user/my-order/details/".concat(a)})})})]},a)}))]})]})]})})}}}]);
//# sourceMappingURL=15.b351755c.chunk.js.map