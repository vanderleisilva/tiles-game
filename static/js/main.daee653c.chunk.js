(this["webpackJsonptiles-game"]=this["webpackJsonptiles-game"]||[]).push([[0],{35:function(e,t,a){e.exports=a(50)},40:function(e,t,a){},50:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),r=a(15),c=a.n(r),o=a(19),u=a(34),s=(a(40),function(e){var t=e.children;return l.a.createElement("section",{className:"section"},l.a.createElement("div",{className:"container"},l.a.createElement("h1",{className:"title"},"Tiles Game"),l.a.createElement("p",{className:"subtitle"},"Inform the grid size and ",l.a.createElement("strong",null,"start")," the game!"),t))}),i=a(24),m=a(32),p=[{value:"red",label:"Red"},{value:"blue",label:"Blue"},{value:"yellow",label:"Yellow"},{value:"orange",label:"Orange"},{value:"purple",label:"Purple"},{value:"green",label:"Green"},{value:"black",label:"Black"}],b=[p[0],p[1],p[2]],g=function(e){return l.a.createElement("p",{class:"control",style:{marginBottom:16}},l.a.createElement(i.a,Object.assign({closeMenuOnSelect:!1,components:Object(m.a)(),defaultValue:b,isMulti:!0,options:p},e)),l.a.createElement("p",{class:"help"},"Select the colors"))};c.a.render(l.a.createElement((function(){var e=Object(n.useState)(6),t=Object(o.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(6),m=Object(o.a)(c,2),p=m[0],E=m[1],f=Object(n.useState)(!1),h=Object(o.a)(f,2),d=h[0],v=h[1],O=Object(n.useState)([]),j=Object(o.a)(O,2),y=j[0],S=j[1],C=Object(n.useState)(""),N=Object(o.a)(C,2),k=N[0],w=N[1],x=Object(n.useState)(b),B=Object(o.a)(x,2),M=B[0],A=B[1];return l.a.createElement(s,null,l.a.createElement(g,{onChange:A}),l.a.createElement("div",{class:"field is-grouped"},l.a.createElement("p",{class:"control"},l.a.createElement("input",{class:"input",value:a,onChange:function(e){return r(e.target.value)},type:"text",placeholder:"Columns"}),l.a.createElement("p",{class:"help"},"Number of columns")),l.a.createElement("p",{class:"control"},l.a.createElement("input",{class:"input",value:p,onChange:function(e){return E(e.target.value)},type:"text",placeholder:"Lines"}),l.a.createElement("p",{class:"help"},"Number of lines")),l.a.createElement("p",{class:"control"},l.a.createElement("button",{onClick:function(){v(!0),console.log(M),S(function(e,t,a){return Array.from({length:e}).map((function(e,n){return Array.from({length:t}).map((function(e,t){return{color:a[Math.floor(Math.random()*a.length)],origin:n+t==0}}))}))}(a,p,M.map((function(e){return e.value}))))},class:"button is-info"},d?"Restart":"Start"))),d&&l.a.createElement(n.Fragment,null,l.a.createElement("table",{className:"game"},l.a.createElement("tbody",null,y.map((function(e){return l.a.createElement("tr",null,e.map((function(e){return l.a.createElement("td",{style:{backgroundColor:e.color},className:e.origin?" origin":""},l.a.createElement("div",null))})))})))),l.a.createElement("div",{class:"field is-grouped"},l.a.createElement("p",{class:"control"},l.a.createElement(i.a,{options:M,onChange:function(e){return w(e.value)}}),l.a.createElement("p",{class:"help"},"Inform the next color")),l.a.createElement("p",{class:"control"},l.a.createElement("button",{onClick:function(){var e=function(e,t){var a=Object(u.a)(e),n=function(e,t){try{return a[e][t]||{}}catch(n){return!1}};return function e(l,r){a[l][r].color===t&&(a[l][r].origin=!0),a[l][r].origin&&(a[l][r].color=t),n(l+1,r).color===t^n(l+1,r).origin&&e(l+1,r),n(l,r+1).color===t^n(l,r+1).origin&&e(l,r+1),n(l-1,r).color===t^n(l-1,r).origin&&e(l-1,r),n(l,r-1).color===t^n(l,r-1).origin&&e(l,r-1)}(0,0),a}(y,k);S(e)},class:"button is-info"},"Apply")))))}),null),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.daee653c.chunk.js.map