(this["webpackJsonpbegin-app"]=this["webpackJsonpbegin-app"]||[]).push([[0],{59:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){},72:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),r=a(17),s=a.n(r),i=a(6),l=a(15),o=a(10),d=a(2),b=a.n(d),u=a(7),j=a(18),h=a(0);var p=function(e){var t=e.id,a=e.type,n=void 0===a?"text":a,c=e.value,r=e.handleChange,s=e.label,i=Object(j.a)(e,["id","type","value","handleChange","label"]);return Object(h.jsxs)("div",{className:"mb-3",children:[Object(h.jsx)("label",{className:"form-label",htmlFor:t,children:s}),Object(h.jsx)("input",Object(o.a)({className:"form-control",type:n,name:t,value:c,onChange:r,id:t},i))]})},m=a(19),O=a.n(m),v=a(5),x=a(32),f="token",g=function(){return localStorage.getItem(f)},N={setToken:function(e){return localStorage.setItem(f,e)},deleteToken:function(){return localStorage.removeItem(f)},getToken:g,getUser:function(){var e=g();return e&&Object(x.a)(e)}};O.a.interceptors.response.use(null,(function(e){return e.response&&e.response.status>=400&&e.response.status<500?Promise.reject(e):(console.log(e),v.b.error("Unexpected error occured, please try again later"))})),O.a.defaults.headers.common["x-auth-token"]=N.getToken()||null;var w=O.a,_={apiUrl:"/api"},y={createUser:function(e){return w.post("".concat(_.apiUrl,"/users"),e)},loginUser:function(e){return w.post("".concat(_.apiUrl,"/auth"),e)}};var k=function(e){var t=Object(n.useState)({username:"",password:""}),a=Object(i.a)(t,2),c=a[0],r=a[1],s=function(){var e=Object(u.a)(b.a.mark((function e(t){var a,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,y.createUser(c);case 4:a=e.sent,n=a.data,N.setToken(n),window.location="/",e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),e.t0.response&&e.t0.response.status>=400&&e.t0.response.status<500&&v.b.error(e.t0.response.data);case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}(),d=function(e){var t=e.target;return r(Object(o.a)(Object(o.a)({},c),{},Object(l.a)({},t.name,t.value)))};return Object(h.jsxs)("div",{className:"container",children:[Object(h.jsx)("h1",{children:"Register"}),Object(h.jsxs)("form",{onSubmit:s,children:[Object(h.jsx)(p,{id:"username",handleChange:d,value:c.username,label:"Username"}),Object(h.jsx)(p,{type:"password",id:"password",handleChange:d,value:c.value,label:"Password"}),Object(h.jsx)("button",{type:"submit",className:"btn btn-success",children:"Submit"})]})]})},C=a(8),S=a(3),P=(a(58),c.a.createContext());P.displayName="UserContext";var U=P;var T=function(e){var t=Object(n.useState)({username:"",password:""}),a=Object(i.a)(t,2),c=a[0],r=a[1],s=function(){var e=Object(u.a)(b.a.mark((function e(t){var a,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,y.loginUser(c);case 4:a=e.sent,n=a.data,N.setToken(n),window.location="/",e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),e.t0.response&&e.t0.response.status>=400&&e.t0.response.status<500&&v.b.error(e.t0.response.data);case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}(),d=function(e){var t=e.target;return r(Object(o.a)(Object(o.a)({},c),{},Object(l.a)({},t.name,t.value)))};return Object(h.jsxs)("div",{className:"container",children:[Object(h.jsx)("h1",{children:"Login"}),Object(h.jsxs)("form",{onSubmit:s,children:[Object(h.jsx)(p,{id:"username",handleChange:d,value:c.username,label:"Username"}),Object(h.jsx)(p,{type:"password",id:"password",handleChange:d,value:c.value,label:"Password"}),Object(h.jsx)("button",{type:"submit",className:"btn btn-success",children:"Submit"})]})]})};a(59);var L=function(e){var t=Object(n.useContext)(U),a=t.user,c=t.setUser;return Object(h.jsx)("div",{children:Object(h.jsxs)("nav",{className:"navbar navbar-expand-sm navbar-light bg-white border-bottom",children:[Object(h.jsxs)(C.b,{className:"navbar-brand ml-2 font-weight-bold",to:"/",children:[Object(h.jsx)("span",{className:"burgundy",children:"CWZ"}),Object(h.jsx)("span",{className:"orange",children:"Sell"})]}),Object(h.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarColor","aria-controls":"navbarColor","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(h.jsx)("span",{className:"navbar-toggler-icon"})}),Object(h.jsx)("div",{className:"collapse navbar-collapse",id:"navbarColor",children:Object(h.jsxs)("ul",{className:"navbar-nav",children:[Object(h.jsxs)("li",{className:"nav-item rounded bg-light search-nav-item",children:[Object(h.jsx)("input",{type:"text",id:"search",className:"bg-light",placeholder:"Search Among products"}),Object(h.jsx)("span",{className:"fa fa-search text-muted"})]}),Object(h.jsxs)("div",{className:"dropdown",children:[Object(h.jsx)("button",{className:"nav-link btn btn-link dropdown-toggle",id:"authentication","data-bs-toggle":"dropdown","aria-expanded":"false",children:Object(h.jsx)("span",{className:"far fa-user"})}),Object(h.jsx)("ul",{className:"dropdown-menu","aria-labelledby":"authentication",children:a?Object(h.jsx)("li",{children:Object(h.jsx)("button",{className:"btn btn-link dropdown-item",onClick:function(){c(null),N.deleteToken()},children:"Logout"})}):Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("li",{children:Object(h.jsx)(C.b,{to:"/login",className:"dropdown-item",children:"Login"})}),Object(h.jsx)("li",{children:Object(h.jsx)(C.b,{to:"/register",className:"dropdown-item",children:"Register"})})]})})]}),Object(h.jsxs)("li",{className:"nav-item ",children:[Object(h.jsxs)(C.b,{to:"/cart",className:"nav-link",children:[Object(h.jsx)("span",{className:"fa fa-shopping-cart"}),Object(h.jsx)("span",{className:"text",children:"Cart"})]})," "]})]})})]})})},A=_.apiUrl,F={createProduct:function(e){return w.post("".concat(A,"/products"),e)},getProducts:function(){return w.get("".concat(A,"/products"))},getProduct:function(e){return w.get("".concat(A,"/products/").concat(e))}};a(68);var q=function(e){var t=e.product,a=e.removeProduct;return Object(h.jsx)("div",{className:"col-md-4",children:Object(h.jsxs)("div",{className:"card",children:[Object(h.jsx)("img",{src:t.img,className:"card-img-top",alt:"Failed"}),Object(h.jsxs)("div",{className:"card-body",children:[Object(h.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(h.jsx)("span",{className:"font-weight-bold",children:t.title})," ",Object(h.jsxs)("span",{className:"font-weight-bold",children:["$",t.price]})]}),Object(h.jsx)("p",{className:"card-text mb-1 mt-1",children:t.about})]}),Object(h.jsx)("hr",{}),Object(h.jsx)("div",{className:"card-body",children:Object(h.jsxs)("div",{className:"text-right buttons",children:[Object(h.jsx)(C.b,{to:"/products/".concat(t._id),className:"btn btn-dark",children:"Show"}),a&&Object(h.jsx)("button",{className:"btn btn-danger",onClick:function(){return a(t._id)},children:"Remove"})]})})]})})},E=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(!0),s=Object(i.a)(r,2),l=s[0],o=s[1],d=Object(n.useState)(null),j=Object(i.a)(d,2),h=j[0],p=j[1],m=function(){var e=Object(u.a)(b.a.mark((function e(t){var a,n,r,s,i,l=arguments;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(e.prev=0,a=l.length,n=new Array(a>1?a-1:0),r=1;r<a;r++)n[r-1]=l[r];return e.next=4,t.apply(void 0,n);case 4:s=e.sent,i=s.data,c(i),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),e.t0.response&&e.t0.response.status>=400&&e.t0.response.status<500&&p(e.t0.response.data),console.log(h);case 13:o(!1);case 14:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}();return{data:a,setData:c,loading:l,setLoading:o,error:h,setError:p,request:m}};var I=function(e){var t=E(),a=t.data,c=t.loading,r=t.error,s=t.request,i=Object(n.useContext)(U).user;return Object(n.useEffect)((function(){s(F.getProducts)}),[]),Object(h.jsxs)("div",{className:"container",children:[c&&Object(h.jsx)("h1",{children:"Loading..."}),r&&Object(h.jsx)("h1",{children:r}),Object(h.jsx)("div",{children:Object(h.jsx)("div",{className:"container-fluid mt-2 mb-5",children:Object(h.jsx)("div",{className:"products",children:Object(h.jsx)("div",{className:"tab-content",id:"myTabContent",children:Object(h.jsxs)("div",{className:"tab-pane fade show active",id:"home",role:"tabpanel","aria-labelledby":"home-tab",children:[Object(h.jsxs)("div",{className:"d-flex justify-content-between p-3 bg-white mb-3 align-items-center",children:[Object(h.jsxs)("span",{className:"font-weight-bold text-uppercase",children:["Hello ",i.username]}),Object(h.jsx)("div",{children:Object(h.jsx)(C.b,{to:"/sell",className:"btn btn-warning float-end",children:"Sell"})})]}),Object(h.jsx)("div",{className:"row g-3",children:a.map((function(e){return Object(h.jsx)(q,{product:e},e._id)}))})]})})})})})]})};var D=function(e){var t=e.path,a=e.Component,c=Object(j.a)(e,["path","Component"]),r=Object(n.useContext)(U),s=r.user;return r.userLoading?Object(h.jsx)("h1",{children:"Loading..."}):s?Object(h.jsx)(S.b,Object(o.a)({path:t,component:a},c)):Object(h.jsx)(S.a,{to:"/login"})};var B=function(e){var t=e.history,a=Object(n.useState)({title:"",about:"",img:"",price:9}),c=Object(i.a)(a,2),r=c[0],s=c[1],d=function(){var e=Object(u.a)(b.a.mark((function e(a){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.prev=1,e.next=4,F.createProduct(r);case 4:t.push("/"),e.next=11;break;case 7:if(e.prev=7,e.t0=e.catch(1),!(e.t0.response&&e.t0.response.status>=400&&e.t0.response.status<500)){e.next=11;break}return e.abrupt("return",v.b.error(e.t0.response.data));case 11:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t){return e.apply(this,arguments)}}(),j=function(e){var t=e.target;return s(Object(o.a)(Object(o.a)({},r),{},Object(l.a)({},t.name,t.value)))};return Object(h.jsxs)("div",{className:"container",children:[Object(h.jsx)("h1",{children:"Sell Screen"}),Object(h.jsxs)("form",{onSubmit:d,children:[Object(h.jsx)(p,{id:"title",label:"Title",value:r.title,handleChange:j,required:!0}),Object(h.jsx)(p,{id:"about",label:"About",value:r.about,handleChange:j,required:!0}),Object(h.jsx)(p,{type:"url",id:"img",label:"Image",value:r.img,handleChange:j,required:!0}),Object(h.jsx)(p,{type:"number",id:"price",label:"Price",value:r.price,handleChange:j,required:!0}),Object(h.jsx)("button",{type:"submit",className:"btn btn-success",children:"Submit"})]})]})};a(69);var R=function(e){var t=e.product,a=e.handleAddToCart;return Object(h.jsxs)("div",{children:[Object(h.jsx)("link",{rel:"stylesheet",href:"https://sachinchoolur.github.io/lightslider/dist/css/lightslider.css"}),Object(h.jsx)("div",{className:"container-fluid mt-2 mb-3",children:Object(h.jsxs)("div",{className:"row no-gutters",children:[Object(h.jsx)("div",{className:"col-md-5 pr-2",children:Object(h.jsx)("div",{className:"card",children:Object(h.jsx)("div",{className:"demo",children:Object(h.jsx)("ul",{id:"lightSlider",children:Object(h.jsxs)("li",{children:[" ",Object(h.jsx)("img",{src:t.img,alt:"Failed"})," "]})})})})}),Object(h.jsx)("div",{className:"col-md-7",children:Object(h.jsxs)("div",{className:"card",children:[Object(h.jsxs)("div",{className:"about",children:[Object(h.jsxs)("span",{className:"font-weight-bold",children:[t.title," "]}),Object(h.jsxs)("h4",{className:"font-weight-bold",children:["$",t.price]})]}),Object(h.jsx)("div",{className:"buttons",children:Object(h.jsx)("button",{className:"btn btn-warning btn-long buy",onClick:a,children:"Add to cart"})}),Object(h.jsx)("hr",{}),Object(h.jsx)("div",{className:"product-description",children:Object(h.jsxs)("div",{className:"mt-2",children:[" ",Object(h.jsx)("span",{className:"font-weight-bold",children:"About"}),Object(h.jsx)("p",{children:t.about})]})})]})})]})})]})};a(70);var $=function(e){var t=e.products,a=e.current;return!t||t.length<0?null:Object(h.jsx)("div",{children:Object(h.jsx)("div",{className:"bbb_viewed",children:Object(h.jsx)("div",{className:"container",children:Object(h.jsx)("div",{className:"row",children:Object(h.jsx)("div",{className:"col",children:Object(h.jsxs)("div",{className:"bbb_main_container",children:[Object(h.jsxs)("div",{className:"bbb_viewed_title_container",children:[Object(h.jsx)("h3",{className:"bbb_viewed_title",children:"Best selling products"}),Object(h.jsxs)("div",{className:"bbb_viewed_nav_container",children:[Object(h.jsx)("div",{className:"bbb_viewed_nav bbb_viewed_prev",children:Object(h.jsx)("i",{className:"fas fa-chevron-left"})}),Object(h.jsx)("div",{className:"bbb_viewed_nav bbb_viewed_next",children:Object(h.jsx)("i",{className:"fas fa-chevron-right"})})]})]}),Object(h.jsx)("div",{className:"bbb_viewed_slider_container",children:Object(h.jsx)("div",{className:"owl-carousel owl-theme bbb_viewed_slider",children:t.map((function(e){return e._id!==a._id&&Object(h.jsx)("div",{className:"owl-item",children:Object(h.jsxs)("div",{className:"bbb_viewed_item discount d-flex flex-column align-items-center justify-content-center text-center",children:[Object(h.jsx)("div",{className:"bbb_viewed_image",children:Object(h.jsx)("img",{src:e.img,alt:"Failed"})}),Object(h.jsxs)("div",{className:"bbb_viewed_content text-center",children:[Object(h.jsxs)("div",{className:"bbb_viewed_price",children:["$",e.price]}),Object(h.jsx)("div",{className:"bbb_viewed_name",children:Object(h.jsx)(C.b,{to:"/products/".concat(e._id),children:e.title})})]})]})},e._id)}))})})]})})})})})})},J={addToCart:function(e){return w.put(_.apiUrl+"/cart/add",{id:e})},getProducts:function(){return w.get(_.apiUrl+"/cart")},deleteProduct:function(e){return w.delete("".concat(_.apiUrl,"/cart/").concat(e))},getTotal:function(){return w.get(_.apiUrl+"/cart/total")},deleteAllProducts:function(){return w.delete(_.apiUrl+"/cart")}};var H=function(e){var t=e.match.params.id,a=E(),c=a.data,r=a.loading,s=a.setLoading,i=a.error,l=a.request,o=E(),d=o.data,j=o.request;Object(n.useEffect)((function(){l(F.getProduct,t),j(F.getProducts)}),[t]);var p=function(){var e=Object(u.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,s(!0),e.next=4,J.addToCart(t);case 4:s(!1),v.b.success("".concat(c.title," got added to your cart")),e.next=12;break;case 8:return e.prev=8,e.t0=e.catch(0),e.t0.response&&e.t0.response.status>=400&&e.t0.response.status<500&&v.b.error(e.t0.response.data),e.abrupt("return",s(!1));case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();return r?Object(h.jsx)("h1",{children:"Loading..."}):c?Object(h.jsxs)("div",{children:[Object(h.jsx)(R,{product:c,handleAddToCart:p}),Object(h.jsx)($,{products:d,current:c})]}):Object(h.jsx)("h1",{children:i})};var M=function(e){var t=Object(n.useState)([]),a=Object(i.a)(t,2),c=a[0],r=a[1],s=function(){var e=Object(u.a)(b.a.mark((function e(){var t,a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,J.getTotal();case 2:t=e.sent,a=t.data,window.paypal.Buttons({createOrder:function(e,t){return t.order.create({purchase_units:[{amount:{value:a}}]})},onApprove:function(e,t){return t.order.capture().then((function(e){v.b.success("Transaction completed by "+e.payer.name.given_name),r([]),J.deleteAllProducts()}))}}).render("#paypal-btn");case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){Object(u.a)(b.a.mark((function e(){var t,a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,J.getProducts();case 2:t=e.sent,a=t.data,r(a),a.length>0&&s();case 6:case"end":return e.stop()}}),e)})))()}),[]);var l=function(){var e=Object(u.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,J.deleteProduct(t);case 2:r(c.filter((function(e){return e._id!==t})));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(h.jsxs)("div",{className:"row g-3",children:[Object(h.jsx)("div",{id:"paypal-btn"}),c.map((function(e){return Object(h.jsx)(q,{product:e,removeProduct:l},e._id)}))]})};var W=function(){var e=Object(n.useState)(null),t=Object(i.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(!0),s=Object(i.a)(r,2),l=s[0],o=s[1];return Object(n.useEffect)((function(){c(N.getUser()||null),o(!1)}),[]),Object(h.jsx)(C.a,{children:Object(h.jsxs)(U.Provider,{value:{user:a,setUser:c,userLoading:l,setUserLoading:o},children:[Object(h.jsx)(v.a,{}),Object(h.jsx)(L,{}),Object(h.jsxs)(S.d,{children:[Object(h.jsx)(S.b,{path:"/products/:id",component:H}),Object(h.jsx)(S.b,{path:"/register",component:k}),Object(h.jsx)(S.b,{path:"/login",component:T}),Object(h.jsx)(D,{path:"/sell",component:B}),Object(h.jsx)(D,{path:"/cart",component:M}),Object(h.jsx)(D,{exact:!0,path:"/",component:I})]})]})})},Z=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,73)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),n(e),c(e),r(e),s(e)}))};a(71);s.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(W,{})}),document.getElementById("root")),Z()}},[[72,1,2]]]);
//# sourceMappingURL=main.e056abb4.chunk.js.map