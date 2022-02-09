(this["webpackJsonpreact-boilarplate"]=this["webpackJsonpreact-boilarplate"]||[]).push([[12],{324:function(e,t,s){"use strict";s(1);var r=s(17),a=s(52),i=s(2);t.a=function(){return Object(i.jsx)("div",{className:"text-darker",children:a.b.length>0&&a.b.map((function(e,t){return Object(i.jsx)("div",{children:Object(i.jsx)(r.c,{className:"my-2 pr-5 py-1 lg:block",activeClassName:"text-red-500",to:e.to,children:Object(i.jsx)("span",{className:"text-sm font-medium",children:e.label})})},t)}))})}},330:function(e,t,s){"use strict";s(1);var r=s(36),a=s(2);t.a=function(e){var t=e.register,s=e.errors,i=s.firstName,n=s.lastName,l=s.country,c=s.streetAddress,o=s.city,p=s.phone,d=s.email;return Object(a.jsxs)("div",{className:"form-col",children:[Object(a.jsx)("p",{className:"font-medium text-gray-700",children:"BILLING DETAILS"}),Object(a.jsxs)("div",{className:"grid grid-cols-2 gap-x-8",children:[Object(a.jsx)(r.a,{name:"firstName",type:"text",placeholder:"",label:"First Name",register:t,errorMessage:null===i||void 0===i?void 0:i.message}),Object(a.jsx)(r.a,{name:"lastName",type:"text",placeholder:"",label:"Last Name",register:t,errorMessage:null===n||void 0===n?void 0:n.message})]}),Object(a.jsx)(r.a,{name:"companyName",type:"text",placeholder:"",label:"Company Name(Optional)",register:t}),Object(a.jsx)(r.a,{name:"country",type:"text",placeholder:"",label:"COUNTRY / REGION",register:t,errorMessage:null===l||void 0===l?void 0:l.message}),Object(a.jsx)(r.a,{name:"streetAddress",type:"text",placeholder:"House number & street name",label:"STREET ADDRESS",register:t,errorMessage:null===c||void 0===c?void 0:c.message}),Object(a.jsx)(r.a,{name:"apartment",type:"text",placeholder:"Apartment, suite, unit, etc. (optional)",register:t}),Object(a.jsx)(r.a,{name:"city",type:"text",placeholder:"",label:"TOWN / CITY",register:t,errorMessage:null===o||void 0===o?void 0:o.message}),Object(a.jsx)(r.a,{name:"state",type:"text",placeholder:"",label:"STATE / COUNTRY(OPTIONAL)",register:t}),Object(a.jsx)(r.a,{name:"phone",type:"text",placeholder:"",label:"PHONE",register:t,errorMessage:null===p||void 0===p?void 0:p.message}),Object(a.jsx)(r.a,{name:"email",type:"email",placeholder:"",label:"EMAIL ADDRESS",register:t,errorMessage:null===d||void 0===d?void 0:d.message})]})}},331:function(e,t,s){"use strict";var r=s(27),a=s(9),i=s(1),n=s(36),l=s(2);t.a=function(e){var t=e.register,s=e.errors,c=e.show,o=Object(i.useState)(c),p=Object(a.a)(o,2),d=p[0],m=p[1],u=s.shippingFirstName,g=s.shippingLastName,b=s.shippingCountry,j=s.shippingStreetAddress,h=s.shippingCity,x=s.shippingDistrict;return Object(l.jsxs)("div",{className:"form-col relative",children:[Object(l.jsxs)("div",{className:"flex items-center gap-x-2 absolute -top-5",children:[Object(l.jsx)("input",{type:"checkbox",id:"shippingAddress",className:"cursor-pointer",onChange:function(){return m(!d)}}),Object(l.jsx)("label",{className:"font-medium text-gray-700 cursor-pointer",htmlFor:"shippingAddress",children:"SHIP TO A DIFFERENT ADDRESS?"})]}),d&&Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("div",{className:"mt-5 grid grid-cols-2 gap-x-8",children:[Object(l.jsx)(n.a,{name:"shippingFirstName",type:"text",placeholder:"",label:"First Name",register:t,errorMessage:null===u||void 0===u?void 0:u.message}),Object(l.jsx)(n.a,{name:"shippingLastName",type:"text",placeholder:"",label:"Last Name",register:t,errorMessage:null===g||void 0===g?void 0:g.message})]}),Object(l.jsx)(n.a,{name:"shippingCompanyName",type:"text",placeholder:"",label:"Company Name(Optional)",register:t}),Object(l.jsx)(n.a,{name:"shippingCountry",type:"text",placeholder:"",label:"COUNTRY / REGION",register:t,errorMessage:null===b||void 0===b?void 0:b.message}),Object(l.jsx)(n.a,{name:"shippingStreetAddress",type:"text",placeholder:"House number & street name",label:"STREET ADDRESS",register:t,errorMessage:null===j||void 0===j?void 0:j.message}),Object(l.jsx)(n.a,{name:"shippingApartment",type:"text",placeholder:"Apartment, suite, unit, etc. (optional)",register:t}),Object(l.jsx)(n.a,{name:"shippingCity",type:"text",placeholder:"",label:"TOWN / CITY",register:t,errorMessage:null===h||void 0===h?void 0:h.message}),Object(l.jsx)(n.a,{name:"shippingDistrict",type:"text",placeholder:"",label:"DISTRICT",register:t,errorMessage:null===x||void 0===x?void 0:x.message}),Object(l.jsx)(n.a,{name:"shippingPostalCode",type:"text",placeholder:"",label:"POSTAL / ZIP CODE(OPTIONAL)",register:t}),!c&&Object(l.jsxs)("div",{className:"form-row",children:[Object(l.jsx)("label",{className:"pb-0.5 text-gray-600 font-medium text-xs uppercase",children:"ORDER NOTES (OPTIONAL)"}),Object(l.jsx)("textarea",Object(r.a)({type:"text",className:"form-control input-border-primary ",placeholder:""},t("shippingOrderNotes")))]})]})]})}},332:function(e,t,s){"use strict";s(1);var r=s(2);t.a=function(e){var t=e.btnText,s=e.type,a=e.disabled;return Object(r.jsx)("button",{className:"mt-5 w-full text-center btn-secondary ".concat(a&&"cursor-not-allowed"),type:s,disabled:a,children:t})}},379:function(e,t,s){"use strict";s.r(t);var r=s(1),a=s(86),i=s(47),n=s(58),l=s(35),c=s(324),o=s(7),p=s.n(o),d=s(21),m=s(9),u=s(38),g=s(68),b=s(30),j=s(332),h=s(33),x=s(330),O=s(331),N=s(2),y=u.c().shape({firstName:u.e().required("First name is required").min(4).max(10),lastName:u.e().required("Last name is required").min(4).max(10),country:u.e().required("Country is required"),streetAddress:u.e().required("Street address is required"),city:u.e().required("City is required"),phone:u.e().required("Phone is required").matches(/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,"Phone number is not valid"),email:u.e().email("Please enter a valid email address.").required("Email is required")}),v=function(e){var t=e.defaultValues,s=Object(l.d)().mutateAsync,a=Object(r.useState)(!1),i=Object(m.a)(a,2),n=i[0],c=i[1],o=Object(b.d)({defaultValues:t,resolver:Object(g.a)(y)}),u=o.register,v=o.handleSubmit,f=o.reset,A=o.formState.errors,C=function(){var e=Object(d.a)(p.a.mark((function e(t){var r,a,i,n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={firstName:t.firstName,lastName:t.lastName,companyName:t.companyName,country:t.country,streetAddress:t.streetAddress,apartment:t.apartment,city:t.city,state:t.state,phone:t.phone,email:t.email},a={firstName:t.shippingFirstName,lastName:t.shippingLastName,companyName:t.shippingCompanyName,country:t.shippingCountry,streetAddress:t.shippingStreetAddress,apartment:t.shippingApartment,city:t.shippingCity,district:t.shippingDistrict,postalCode:t.shippingPostalCode,orderNotes:t.shippingOrderNotes},i={billingDetails:r,shippingAddress:a},c(!0),e.prev=4,e.next=7,s({path:"/user/address-book/add",formData:i});case 7:n=e.sent,204===n.status&&(h.b.success("Update successfully."),f()),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(4),e.t0.response?h.b.error("Response : "+e.t0.response.data.message):e.t0.request?h.b.error("Request : "+e.t0.message):h.b.error("Error :",e.t0.message);case 15:return e.prev=15,c(!1),e.finish(15);case 18:case"end":return e.stop()}}),e,null,[[4,12,15,18]])})));return function(t){return e.apply(this,arguments)}}();return Object(N.jsxs)("form",{onSubmit:v(C),children:[Object(N.jsxs)("div",{className:"mt-5 grid grid-cols-1 gap-8 lg:grid-cols-2",children:[Object(N.jsx)(x.a,{register:u,errors:A}),Object(N.jsx)(O.a,{register:u,errors:A,show:!0})]}),Object(N.jsx)(j.a,{btnText:"SAVE",type:"submit",disabled:n})]})};t.default=function(){var e=Object(l.b)("userAddress","/user-address-book"),t=e.data,s=e.isLoading,r=e.isError,o=e.error;if(s)return Object(N.jsx)(i.a,{children:Object(N.jsx)(n.b,{})});if(r)return Object(N.jsx)(i.a,{children:Object(N.jsx)(a.a,{message:o.message})});var p=t.data,d=p.billingDetails,m=p.shippingAddress,u={firstName:d.firstName,lastName:d.lastName,companyName:d.companyName,country:d.country,streetAddress:d.streetAddress,apartment:d.apartment,city:d.city,state:d.state,phone:d.phone,email:d.email,shippingFirstName:m.firstName,shippingLastName:m.lastName,shippingCompanyName:m.companyName,shippingCountry:m.country,shippingStreetAddress:m.streetAddress,shippingApartment:m.apartment,shippingCity:m.city,shippingDistrict:m.district,shippingPostalCode:m.postalCode};return Object(N.jsx)(i.a,{children:Object(N.jsxs)("div",{className:"grid gap-4 lg:grid-cols-6",children:[Object(N.jsx)(c.a,{}),Object(N.jsxs)("div",{className:"card w-full max-w-screen-xl lg:col-span-5",children:[Object(N.jsx)("h1",{className:"text-2xl font-medium",children:"My Address"}),Object(N.jsx)(v,{defaultValues:u})]})]})})}}}]);
//# sourceMappingURL=12.108fbe60.chunk.js.map