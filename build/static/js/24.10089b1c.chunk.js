(this["webpackJsonpreact-boilarplate"]=this["webpackJsonpreact-boilarplate"]||[]).push([[24],{373:function(e,t,r){"use strict";r.r(t);r(1);var s=r(12),c=r(86),a=r(58),i=r(35),l=r(47),d=r(17),n=r(19),o=r(2),j=function(e){var t=e.product,r=Object(n.b)(),s=t.id,c=t.name,a=t.images,i=t.oldPrice,l=t.newPrice,j=t.discount,b=t.isNew;return Object(o.jsxs)("div",{className:"w-full h-96 bg-white group transform duration-300 overflow-hidden hover:-translate-x-1",children:[Object(o.jsxs)("div",{className:"h-56 relative overflow-hidden max-h-96",children:[Object(o.jsx)("img",{className:"w-full h-full absolute",src:a[0].url,alt:c}),Object(o.jsx)("img",{className:"w-full h-full relative transform duration-500 group-hover:opacity-0",src:a[1]?a[1].url:a[0].url,alt:c})]}),Object(o.jsxs)("div",{className:"px-3 py-5 text-gray-900 border-t group-hover:border-gray-300",children:[Object(o.jsx)(d.b,{to:"/product/".concat(s),className:"text-xl font-normal uppercase block break-words",children:c}),Object(o.jsxs)("div",{className:"flex justify-between py-4",children:[Object(o.jsxs)("div",{className:"flex gap-x-1",children:[Object(o.jsxs)("span",{className:"line-through",children:["AED",i]}),Object(o.jsxs)("span",{children:["AED ",l]})]}),Object(o.jsx)("div",{className:"px-2 text-xs py-0.5 bg-red-500 text-white flex justify-center items-center",children:j})]}),Object(o.jsx)("div",{className:"",children:Object(o.jsx)("button",{className:"py-1.5 px-2 text-gray-800 text-xs border border-gray-300 hover:bg-gray-800 hover:text-white",onClick:function(){var e={productId:t.id,name:c,oldPrice:i,newPrice:l,image:a[0].url,quantity:1};r.addToCart(e)},children:"ADD TO CART"})}),b&&Object(o.jsx)("div",{className:"absolute top-0 right-0",children:Object(o.jsx)("div",{className:"px-2 text-xs py-0.5 bg-red-500 text-white flex justify-center items-center",children:"NEW"})})]})]})},b=function(e){var t=e.items,r=e.type;return Object(o.jsxs)("div",{className:"pb-16",children:[Object(o.jsx)("div",{className:"my-5",children:Object(o.jsx)("h1",{className:"pb-2 font-medium text-4xl uppercase",children:r})}),Object(o.jsx)("div",{className:"grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5",children:t.map((function(e){return Object(o.jsx)(j,{product:e},e.id)}))})]})};t.default=function(){var e=Object(s.i)(),t=e.category,r=e.subCategory,d=e.superCategory||r||t,n=Object(i.b)("product-list","/product-list/".concat(d)),j=n.data,x=n.isLoading,u=n.isError,h=n.error;return x?Object(o.jsx)(l.a,{children:Object(o.jsx)(a.b,{})}):u?Object(o.jsx)(l.a,{children:Object(o.jsx)(c.a,{message:h.message})}):Object(o.jsx)(l.a,{children:Object(o.jsx)(b,{items:j.data,type:d})})}}}]);
//# sourceMappingURL=24.10089b1c.chunk.js.map