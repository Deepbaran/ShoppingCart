(this["webpackJsonpnine-shoppingcart"]=this["webpackJsonpnine-shoppingcart"]||[]).push([[0],{1560:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c.n(n),a=c(11),s=c.n(a),i=(c(45),c(8)),d=c(9),j=(c.p,c(46),c(47),c(48),c(1559),c(1568)),o=c(1569),u=c(1570),l=c(14),b=c(17),h=c.n(b),m=c(39),x=c(40),O=c.n(x),p=c(1563),f=c(1564),g=c(1565),N=c(1566),y=c(1567),I=c(1575),v=c(2),C=function(e){var t=e.product,c=e.addInCart;return Object(v.jsxs)(p.a,{className:"mt-2 mb-1",children:[Object(v.jsx)(f.a,{top:!0,height:"250",width:"100%",src:t.smallImage}),Object(v.jsxs)(g.a,{className:"text-center",children:[Object(v.jsx)(N.a,{children:t.productName}),Object(v.jsxs)(y.a,{className:"secondary",children:["price: Rs. ",t.productPrice]}),Object(v.jsx)(I.a,{className:"rounded-circle",color:"success",onClick:function(){return c(t)},children:"+"})]})]})},w=c(13),P=function(e){var t=e.addInCart,c=Object(n.useState)([]),r=Object(d.a)(c,2),a=r[0],s=r[1],i=function(){var e=Object(m.a)(h.a.mark((function e(){var t,c,n,r;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.get("./PEXELS.json");case 2:t=e.sent,c=t.data,n=c.photos,r=n.map((function(e){return{smallImage:e.src.medium,tinyImage:e.src.tiny,productName:w.random.word(),productPrice:w.commerce.price(),id:w.random.uuid()}})),s(r);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){i()}),[]),Object(v.jsxs)(j.a,{fluid:!0,children:[Object(v.jsx)("h1",{className:"text-success text-center",children:"Buy Page"}),Object(v.jsx)(o.a,{children:a.map((function(e){return Object(v.jsx)(u.a,{md:4,children:Object(v.jsx)(C,{product:e,addInCart:t})},e.id)}))})]})},k=c(1571),F=c(1572),E=c(1573),S=c(1574),B=function(e){var t=e.cartItem,c=e.removeItem,n=e.buyNow,r=0;return t.forEach((function(e){r=parseFloat(r)+parseFloat(e.productPrice)})),Object(v.jsxs)(j.a,{fluid:!0,children:[Object(v.jsx)("h1",{className:"text-success",children:"Your Cart"}),Object(v.jsx)(k.a,{children:t.map((function(e){return Object(v.jsx)(F.a,{children:Object(v.jsxs)(o.a,{children:[Object(v.jsx)(u.a,{children:Object(v.jsx)("img",{height:80,src:e.tinyImage})}),Object(v.jsxs)(u.a,{className:"text-center",children:[Object(v.jsx)("div",{className:"text-primary",children:e.productName}),Object(v.jsxs)("span",{children:["price :- ",e.productPrice]}),Object(v.jsx)(I.a,{color:"danger",onClick:function(){return c(e)},children:"-"})]})]})},e.id)}))}),t.length>=1?Object(v.jsxs)(p.a,{className:"text-center mt-3",children:[Object(v.jsx)(E.a,{children:"Grand Total"}),Object(v.jsxs)(g.a,{children:["Your amount for ",t.length," products is Rs. ",r]}),Object(v.jsx)(S.a,{children:Object(v.jsx)(I.a,{color:"success",onClick:n,children:"Buy Now"})})]}):Object(v.jsx)("h1",{className:"text-warning",children:"Cart is empty"})]})};var L=function(){var e=Object(n.useState)([]),t=Object(d.a)(e,2),c=t[0],r=t[1];return Object(v.jsxs)(j.a,{fluid:!0,children:[Object(v.jsx)(l.a,{}),Object(v.jsxs)(o.a,{children:[Object(v.jsx)(u.a,{md:8,children:Object(v.jsx)(P,{addInCart:function(e){if(-1!=c.findIndex((function(t){return t.id===e.id})))return Object(l.b)("already added in cart",{type:"error"});r([].concat(Object(i.a)(c),[e]))}})}),Object(v.jsx)(u.a,{md:4,children:Object(v.jsx)(B,{cartItem:c,removeItem:function(e){r(c.filter((function(t){return t.id!==e.id})))},buyNow:function(){return r([]),Object(l.b)("Purchase Complete",{type:"success"})}})})]})]})},T=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,1576)).then((function(t){var c=t.getCLS,n=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;c(e),n(e),r(e),a(e),s(e)}))};s.a.render(Object(v.jsx)(r.a.StrictMode,{children:Object(v.jsx)(L,{})}),document.getElementById("root")),T()},45:function(e,t,c){},48:function(e,t,c){}},[[1560,1,2]]]);
//# sourceMappingURL=main.7d629b9b.chunk.js.map