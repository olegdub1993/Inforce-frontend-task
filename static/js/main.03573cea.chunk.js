(this["webpackJsonpreact-way-of-samurai"]=this["webpackJsonpreact-way-of-samurai"]||[]).push([[0],{14:function(e,t,n){e.exports={modal:"MyModal_modal__G3nD2",myModal__content:"MyModal_myModal__content__201kq",button:"MyModal_button__34ml-"}},18:function(e,t,n){e.exports={product:"Product_product__3pq92",button:"Product_button__1QFCP",productInfoLink:"Product_productInfoLink__NAL2o"}},28:function(e,t,n){e.exports=n(41)},33:function(e,t,n){},34:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(15),c=n.n(o),u=(n(33),n(2)),l=n(11),d=(n(34),n(9)),s=n(25),m=n(12),i=n.n(m),p=n(17),E=n(7),f={product:{}},_=function(e){return{type:"SET_PRODUCT_INFO",product:e}},b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_PRODUCT_INFO":return Object(E.a)(Object(E.a)({},e),{},{product:t.product});default:return e}},v=n(27),O={products:[{}],modalAdd:!1,modalRemove:!1},g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case" users/SET-PRODUCT-LIST":return Object(E.a)(Object(E.a)({},e),{},{products:Object(v.a)(t.products)});case"users/TOGGLE_ADD":return Object(E.a)(Object(E.a)({},e),{},{modalAdd:t.modal});case"users/TOGGLE_REMOVE":return Object(E.a)(Object(E.a)({},e),{},{modalRemove:t.modal});default:return e}},h=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||d.d,y=Object(d.c)({productsListPage:g,productItemPage:b}),M=Object(d.e)(y,h(Object(d.a)(s.a))),j=n(8),P=n(18),L=n.n(P),R=function(e){var t=e.data,n=e.toggleModalAdd,a=e.toggleModalRemove;return r.a.createElement("div",{className:L.a.product,to:"/product"},r.a.createElement("h2",null," ",t.title),r.a.createElement("div",null,t.body),r.a.createElement("button",{className:L.a.button,onClick:function(e){n(!0)}},"Add"),r.a.createElement("button",{onClick:function(e){a(!0)}},"Remove"),r.a.createElement(l.b,{className:L.a.productInfoLink,to:"/product"},"See more"))},T=n(14),w=n.n(T),A=function(e){var t=e.children,n=e.toggleModal;return r.a.createElement("div",{className:w.a.modal},r.a.createElement("div",{className:w.a.myModal__content},r.a.createElement("form",{action:""},t),r.a.createElement("button",{className:w.a.button,onClick:function(){n(!1)}},"Confirm"),r.a.createElement("button",{className:w.a.button,onClick:function(){n(!1)}},"Cancel")))},k=Object(j.b)((function(e){return{products:e.productsListPage.products,modalAdd:e.productsListPage.modalAdd,modalRemove:e.productsListPage.modalRemove}}),{requestProducts:function(){return function(){var e=Object(p.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://jsonplaceholder.typicode.com/posts");case 2:return e.next=4,e.sent.json();case 4:n=e.sent,t({type:" users/SET-PRODUCT-LIST",products:n});case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},toggleModalAdd:function(e){return{type:"users/TOGGLE_ADD",modal:e}},toggleModalRemove:function(e){return{type:"users/TOGGLE_REMOVE",modal:e}}})((function(e){var t=e.products,n=e.requestProducts,o=e.modalAdd,c=e.modalRemove,u=e.toggleModalAdd,l=e.toggleModalRemove;return Object(a.useEffect)((function(){n()}),[]),r.a.createElement("div",null,o&&r.a.createElement(A,{toggleModal:u},r.a.createElement("div",null,r.a.createElement("input",{type:"text",placeholder:"size"})),r.a.createElement("div",null,r.a.createElement("input",{type:"text",placeholder:"color"})),r.a.createElement("div",null,r.a.createElement("input",{type:"text",placeholder:"weight"}))),c&&r.a.createElement(A,{toggleModal:l},"Are you shure?"),r.a.createElement("h1",null,"ProductList"),t.map((function(e){return r.a.createElement(R,{data:e,key:e.id,toggleModalAdd:u,toggleModalRemove:l})})))})),I=Object(j.b)((function(e){return{productItem:e.productItemPage.product}}),{requestProduct:function(){return function(){var e=Object(p.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://jsonplaceholder.typicode.com/posts/1");case 2:return e.next=4,e.sent.json();case 4:n=e.sent,t(_(n));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})((function(e){var t=e.productItem,n=e.requestProduct;return Object(a.useEffect)((function(){n()}),[]),r.a.createElement("div",null,r.a.createElement("h2",null," ",t.title),r.a.createElement("div",null,t.body))})),N=function(){return r.a.createElement("div",{className:"app-wrapper"},r.a.createElement(u.d,null,r.a.createElement(u.b,{path:"/productList",render:function(){return r.a.createElement(k,null)}}),r.a.createElement(u.b,{path:"/product",render:function(){return r.a.createElement(I,null)}}),r.a.createElement(u.a,{to:"/productList"})))},x=function(){return r.a.createElement(l.a,null,r.a.createElement(j.a,{store:M},r.a.createElement(N,null)))};c.a.render(r.a.createElement(l.a,null,r.a.createElement(j.a,{store:M},r.a.createElement(x,null))),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.03573cea.chunk.js.map