(this["webpackJsonpreact-boilarplate"]=this["webpackJsonpreact-boilarplate"]||[]).push([[25],{370:function(e,t,s){"use strict";s.r(t);s(1);var c=s(12),i=s(86),n=s(47),a=s(58),r=s(35),l=s(2),d=function(e){var t=e.description;return Object(l.jsxs)("div",{className:"",children:[Object(l.jsx)("h2",{className:"font-medium text-3xl uppercase mb-5",children:"Description"}),Object(l.jsx)("p",{children:t})]})},j=s(27),o=s(30),m=s(40),x=s(19),b=function(e){var t=e.productId,s=e.name,c=e.oldPrice,i=e.newPrice,n=e.discount,a=e.title,r=e.setincludes,d=e.shortDes,b=e.inStock,u=e.outStock,p=e.image,O=Object(x.b)(),h=Object(o.d)(),f=h.register,v=h.handleSubmit;return Object(l.jsxs)("div",{className:"lg:px-5 mt-10",children:[Object(l.jsx)("h2",{className:"font-medium text-3xl uppercase",children:s}),Object(l.jsxs)("div",{className:"py-5 flex gap-x-5",children:[Object(l.jsxs)("span",{className:"line-through text-2xl",children:["AED ",c]}),Object(l.jsxs)("span",{className:"text-2xl text-red-500",children:["AED ",i]}),Object(l.jsx)("div",{className:"px-5 text-md bg-red-500 text-white flex justify-center items-center",children:n})]}),Object(l.jsxs)("div",{className:"mb-4 text-md",children:[Object(l.jsx)("p",{className:"font-medium",children:a}),Object(l.jsx)("p",{className:"mt-4",children:r}),d.length>0&&d.map((function(e,t){return Object(l.jsx)("p",{className:"mt-4 font-normal",children:e},t)}))]}),Object(l.jsxs)("div",{children:[b&&Object(l.jsxs)("div",{className:"flex gap-x-2 items-center",children:[Object(l.jsx)(m.d,{}),"IN STOCK"]}),u&&Object(l.jsxs)("div",{className:"flex gap-x-2 items-center",children:[Object(l.jsx)(m.e,{}),"OUT STOCK"]})]}),Object(l.jsx)("form",{onSubmit:v((function(e){var n={productId:t,name:s,oldPrice:c,newPrice:i,image:p,quantity:+e.quantity};O.addToCart(n)})),children:Object(l.jsxs)("div",{className:"w-56 px-2 py-2 mt-4 bg-gray-900 flex gap-x-2",children:[Object(l.jsx)("input",Object(j.a)({type:"number",name:"quantity",min:1,defaultValue:1,className:"px-2 py-1 w-12 outline-none border-0",required:!0},f("quantity"))),Object(l.jsx)("button",{type:"submit",className:"text-white w-40 text-sm",children:"ADD TO CART"})]})})]})},u=s(340),p=s.n(u),O=s(341),h=s.n(O),f=(s(357),s(358),{dots:!0,infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1}),v=function(e){var t=e.images;return Object(l.jsx)("div",{className:"px-2 lg:px-0",children:Object(l.jsx)(h.a,Object(j.a)(Object(j.a)({},f),{},{children:t.map((function(e){return Object(l.jsx)(p.a,{src:e.url,zoomScale:10},e.id)}))}))})},g=function(e){var t=e.information;return Object(l.jsxs)("div",{className:"lg:px-5",children:[Object(l.jsx)("h2",{className:"font-medium text-3xl uppercase",children:"Information"}),Object(l.jsxs)("div",{className:"mt-2",children:[Object(l.jsx)("p",{className:"font-medium",children:"Shipping"}),Object(l.jsx)("p",{className:"font-normal",children:null===t||void 0===t?void 0:t.shipping})]}),Object(l.jsxs)("div",{className:"mt-5",children:[Object(l.jsx)("p",{className:"font-medium",children:"Sizing"}),Object(l.jsx)("p",{className:"font-normal",children:null===t||void 0===t?void 0:t.sizeing})]}),Object(l.jsxs)("div",{className:"mt-5",children:[Object(l.jsx)("p",{className:"font-medium",children:"Assistance"}),Object(l.jsx)("p",{className:"font-normal",children:null===t||void 0===t?void 0:t.assistance}),Object(l.jsx)("a",{href:"mailto:".concat(null===t||void 0===t?void 0:t.storeMail),className:"text-blue-500 hover:underline",children:null===t||void 0===t?void 0:t.storeMail})]})]})};t.default=function(){var e=Object(c.i)().productId,t=Object(r.b)("product","/product/".concat(e)),s=t.data,j=t.isLoading,o=t.isError,m=t.error;if(j)return Object(l.jsx)(n.a,{children:Object(l.jsx)(a.b,{})});if(o)return Object(l.jsx)(n.a,{children:Object(l.jsx)(i.a,{message:m.message})});var x=s.data,u=x.title,p=x.shortDes,O=x.setincludes,h=x.images,f=x.outStock,N=x.oldPrice,S=x.newPrice,w=x.name,y=x.information,k=x.inStock,D=x.discount,P=x.description;return Object(l.jsx)(n.a,{children:Object(l.jsxs)("div",{className:"pb-16 mt-5 grid grid-cols-1 gap-8 text-gray-900 lg:grid-cols-2",children:[Object(l.jsx)(v,{images:h}),Object(l.jsx)(b,{productId:e,name:w,oldPrice:N,newPrice:S,discount:D,title:u,setincludes:O,shortDes:p,inStock:k,outStock:f,image:h[0].url}),Object(l.jsx)(d,{description:P}),Object(l.jsx)(g,{information:y})]})})}}}]);
//# sourceMappingURL=25.8ac3c8e1.chunk.js.map