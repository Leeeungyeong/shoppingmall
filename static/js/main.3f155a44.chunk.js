(this.webpackJsonplegproject=this.webpackJsonplegproject||[]).push([[0],{56:function(e,t,n){"use strict";n.d(t,"b",(function(){return S}));var c=n(19),i=n(43),r=n(2),o=n(0),a=n.n(o),s=n(103),l=n(104),d=n(102),j=n(101),h=n(60),b=(n(69),[{id:0,title:"White and Black",content:"Born in France",price:12e4},{id:1,title:"Red Knit",content:"Born in Seoul",price:11e4},{id:2,title:"Grey Yordan",content:"Born in States",price:13e4}]),u=n(27),O=n(7),x=n(42),f=n.n(x),p=n(100),v=n(33);function g(e){return Object(r.jsxs)("div",{children:[Object(r.jsx)(m,{"\uc774\ub984":e.\uc774\ub984,children:" "}),Object(r.jsx)(w,{"\ub098\uc774":e.\ub098\uc774})]})}function m(e){return Object(o.useEffect)((function(){console.log("\ub80c\ub354\ub9c1\ub4281")})),Object(r.jsx)("div",{style:{color:"brown"},children:"LEGPROJECT"})}var w=Object(o.memo)((function(){return Object(o.useEffect)((function(){console.log("\ub80c\ub354\ub9c1\ub4282")})),Object(r.jsx)("div",{style:{color:"pink"},children:"from LeeEunGyeong"})})),k=Object(v.b)((function(e){return console.log(e),{state:e.reducer,"alert\uc5f4\ub838\ub2c8":e.reducer2}}))((function(e){return Object(r.jsxs)("div",{children:[Object(r.jsxs)(p.a,{striped:!0,bordered:!0,hover:!0,variant:"pink",children:[Object(r.jsx)("thead",{children:Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{children:"#"}),Object(r.jsx)("th",{children:"\uc0c1\ud488\uba85"}),Object(r.jsx)("th",{children:"\uc218\ub7c9"}),Object(r.jsx)("th",{children:"\ubcc0\uacbd"})]})}),Object(r.jsx)("tbody",{children:e.state.map((function(t,n){return Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:t.id}),Object(r.jsx)("td",{children:t.name}),Object(r.jsx)("td",{children:t.quan}),Object(r.jsxs)("td",{children:[Object(r.jsx)("button",{onClick:function(){e.dispatch({type:"\uc218\ub7c9\uc99d\uac00","\ub370\uc774\ud130":t.id})},className:"btn btn-secondary",children:"+"}),Object(r.jsx)("button",{onClick:function(){e.dispatch({type:"\uc218\ub7c9\uac10\uc18c","\ub370\uc774\ud130":t.id})},className:"btn btn-secondary",children:"-"})]})]},n)}))})]}),!0===e.alert\uc5f4\ub838\ub2c8?Object(r.jsxs)("div",{className:"my-alert2",children:[Object(r.jsx)("p",{style:{color:"red"},children:"\uc9c0\uae08 \uad6c\ub9e4\ud558\uc2dc\uba74 \uc2e0\uaddc\ud560\uc778 20%"}),Object(r.jsx)("button",{onClick:function(){e.dispatch({type:"alert\ub2eb\uae30"})},className:"btn btn-warning",children:"\ub2eb\uae30"})]}):null,Object(r.jsx)(g,{"\uc774\ub984":"\uc740\uacbd1","\ub098\uc774":"26"})]})})),y=Object(o.lazy)((function(){return Promise.all([n.e(3),n.e(4)]).then(n.bind(null,113))})),S=a.a.createContext();function C(e){var t=Object(o.useContext)(S),n=Object(O.f)();return Object(r.jsxs)("div",{className:"col-md-4",onClick:function(){n.push("/detail/"+e.shoes.id)},children:[Object(r.jsx)("img",{src:"https://codingapple1.github.io/shop/shoes"+(e.i+1)+".jpg",width:"100%"}),Object(r.jsx)("h4",{children:e.shoes.title}),Object(r.jsx)("p",{children:e.shoes.content}),Object(r.jsxs)("h6",{style:{color:"red"},children:["$",e.shoes.price]}),"\uc7ac\uace0:",t[e.i]]})}t.a=function(){var e=Object(o.useState)(b),t=Object(i.a)(e,2),n=t[0],a=t[1],x=Object(o.useState)([10,11,12]),p=Object(i.a)(x,2),v=p[0],g=p[1];return Object(r.jsxs)("div",{className:"App",children:[Object(r.jsxs)(s.a,{bg:"light",expand:"lg",children:[Object(r.jsx)(s.a.Brand,{href:"#home",children:"\uc740\uad65SHOP"}),Object(r.jsx)(s.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(r.jsx)(s.a.Collapse,{id:"basic-navbar-nav",children:Object(r.jsxs)(l.a,{className:"ml-auto",children:[Object(r.jsx)(l.a.Link,{as:u.b,to:"/",children:"Home"}),Object(r.jsx)(l.a.Link,{as:u.b,to:"/detail",children:"Detail"}),Object(r.jsxs)(d.a,{title:"Dropdown",id:"basic-nav-dropdown",children:[Object(r.jsx)(d.a.Item,{href:"#action/3.1",children:"Action"}),Object(r.jsx)(d.a.Item,{href:"#action/3.2",children:"Another action"}),Object(r.jsx)(d.a.Item,{href:"#action/3.3",children:"Something"}),Object(r.jsx)(d.a.Divider,{}),Object(r.jsx)(d.a.Item,{href:"#action/3.4",children:"Separated link"})]})]})})]}),Object(r.jsxs)(O.c,{children:[Object(r.jsxs)(O.a,{exact:!0,path:"/",children:[Object(r.jsxs)(j.a,{className:"background",children:[Object(r.jsx)("h1",{children:"50% Season OFF!"}),Object(r.jsx)("p",{style:{color:"pink"},children:"LEG Project"}),Object(r.jsx)("p",{children:Object(r.jsx)(h.a,{variant:"primary",children:"Learn more"})})]}),Object(r.jsxs)("div",{className:"container",children:[Object(r.jsx)(S.Provider,{value:v,children:Object(r.jsx)("div",{className:"row",children:n.map((function(e,t){return Object(r.jsx)(C,{shoes:n[t],i:t},t)}))})}),Object(r.jsx)("button",{className:"btn btn-secondary",onClick:function(){f.a.post("\uc11c\ubc84URL",{id:"coddingapple",pw:1234}),f.a.get("https://codingapple1.github.io/shop/data2.json").then((function(e){console.log(e.data),a([].concat(Object(c.a)(n),Object(c.a)(e.data)))})).catch((function(){console.log("\uc2e4\ud328")}))},children:"\ub354\ubcf4\uae30"})]})]}),Object(r.jsx)(O.a,{path:"/detail/:id",children:Object(r.jsx)(S.Provider,{value:v,children:Object(r.jsx)(o.Suspense,{fallback:Object(r.jsx)("div",{children:"\ub85c\ub529\uc911\uc774\uc5d0\uc694~~~^_^"}),children:Object(r.jsx)(y,{shoes:n,"\uc7ac\uace0":v,"\uc7ac\uace0\ubcc0\uacbd":g})})})}),Object(r.jsx)(O.a,{path:"/cart",children:Object(r.jsx)(k,{})}),Object(r.jsx)(O.a,{path:"/:id",children:Object(r.jsx)("div",{children:"\uc544\ubb34\uac70\ub098\uc801\uc5c8\uc744\ub54c\uc774\uac70\ubcf4\uc5ec\uc8fc\uc0bc"})})]})]})}},68:function(e,t,n){},69:function(e,t,n){},95:function(e,t,n){"use strict";n.r(t);var c=n(19),i=n(2),r=n(0),o=n.n(r),a=n(14),s=n.n(a),l=(n(68),n(56)),d=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function j(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var h=function(e){e&&e instanceof Function&&n.e(5).then(n.bind(null,114)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),c(e),i(e),r(e),o(e)}))},b=n(27),u=n(33),O=n(29);var x=[{id:0,name:"White and Black",quan:1},{id:1,name:"Red Knit",quan:2}];var f=Object(O.c)(Object(O.b)({reducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1?arguments[1]:void 0;if("\ud56d\ubaa9\ucd94\uac00"===t.type){var n=e.findIndex((function(e){return e.id===t.\ub370\uc774\ud130.id}));if(n>=0){var i=Object(c.a)(e);return i[n].quan++,i}var r=Object(c.a)(e);return r.push(t.\ub370\uc774\ud130),r}if("\uc218\ub7c9\uc99d\uac00"===t.type){var o=Object(c.a)(e);return o[t.\ub370\uc774\ud130].quan++,o}if("\uc218\ub7c9\uac10\uc18c"===t.type){var a=Object(c.a)(e);return a[t.\ub370\uc774\ud130].quan--,a}return e},reducer2:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],t=arguments.length>1?arguments[1]:void 0;return"alert\ub2eb\uae30"===t.type?e=!1:e}}));s.a.render(Object(i.jsx)(o.a.StrictMode,{children:Object(i.jsx)(b.a,{children:Object(i.jsx)(u.a,{store:f,children:Object(i.jsx)(l.a,{})})})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");d?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var c=n.headers.get("content-type");404===n.status||null!=c&&-1===c.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):j(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):j(t,e)}))}}(),h()}},[[95,1,2]]]);
//# sourceMappingURL=main.3f155a44.chunk.js.map