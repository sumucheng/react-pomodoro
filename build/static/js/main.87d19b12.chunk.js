(this["webpackJsonpreact-pomodoro"]=this["webpackJsonpreact-pomodoro"]||[]).push([[0],{11:function(e,t,a){},5:function(e,t,a){e.exports=a(6)},6:function(e,t,a){"use strict";a.r(t);var n=a(2),c=a(1),r=a(0),l=a.n(r),o=a(4),i=a.n(o);a(11);i.a.render(l.a.createElement((function(){var e=Object(r.useState)(parseInt(localStorage.getItem("BL"))||1),t=Object(c.a)(e,2),a=t[0],o=t[1],i=Object(r.useState)(parseInt(localStorage.getItem("SL"))||1),s=Object(c.a)(i,2),m=s[0],u=s[1],d=Object(r.useState)(parseInt(localStorage.getItem("TM"))||60),E=Object(c.a)(d,2),b=E[0],g=E[1],f=Object(r.useState)(localStorage.getItem("TS")||"stopped"),p=Object(c.a)(f,2),v=p[0],S=p[1],k=Object(r.useState)(localStorage.getItem("TT")||""),N=Object(c.a)(k,2),O=N[0],I=N[1],j=Object(r.useState)(localStorage.getItem("CL")&&JSON.parse(localStorage.getItem("CL"))||[]),h=Object(c.a)(j,2),y=h[0],x=h[1],T=Object(r.useState)(localStorage.getItem("SD")&&JSON.parse(localStorage.getItem("SD"))||[]),C=Object(c.a)(T,2),H=C[0],D=C[1];function L(e,t){if(""===O){var n=m;"break"===e?o("add"===t?a<60?a+1:a:a>1?a-1:a):"add"===t?n<60&&(u(n+1),g(60*n+60)):n>1&&(u(n-1),g(60*n-60))}}return Object(r.useEffect)((function(){localStorage.setItem("BL",a),localStorage.setItem("SL",m),localStorage.setItem("TM",b),localStorage.setItem("TS",v),localStorage.setItem("TT",O),localStorage.setItem("CL",JSON.stringify(y)),localStorage.setItem("SD",JSON.stringify(H))})),function(e,t){var a=Object(r.useRef)();Object(r.useEffect)((function(){a.current=e})),Object(r.useEffect)((function(){if(null!==t){var e=setInterval((function(){a.current()}),t);return function(){return clearInterval(e)}}}),[t])}((function(){g(b-1),b<1&&("session"===O?(g(60*a),I("break"),x([].concat(Object(n.a)(y),[{end:Date.now(),length:m}]))):(g(60*m),I("session")))}),"running"===v?1e3:null),l.a.createElement("div",{className:"app ".concat(O)},l.a.createElement("div",{className:"title"},"Pomodoro"),l.a.createElement("div",{className:"label"},l.a.createElement("div",{id:"break-label"},l.a.createElement("div",null,"\u4f11\u606f\u65f6\u95f4"),l.a.createElement("div",{className:"length-button"},l.a.createElement("button",{onClick:function(){L("break","minus")}},l.a.createElement("svg",{className:"icon","aria-hidden":"true"},l.a.createElement("use",{xlinkHref:"break"===O?"#icon-minus-copy":"#icon-minus"}))),l.a.createElement("p",null,a),l.a.createElement("button",{onClick:function(){L("break","add")}},l.a.createElement("svg",{className:"icon","aria-hidden":"true"},l.a.createElement("use",{xlinkHref:"break"===O?"#icon-add-copy":"#icon-add"}))))),l.a.createElement("div",{id:"session-label"},l.a.createElement("div",null,"\u756a\u8304\u65f6\u95f4"),l.a.createElement("div",{className:"length-button"},l.a.createElement("button",{onClick:function(){L("session","minus")}},l.a.createElement("svg",{className:"icon","aria-hidden":"true"},l.a.createElement("use",{xlinkHref:"break"===O?"#icon-minus-copy":"#icon-minus"}))),l.a.createElement("p",null,m),l.a.createElement("button",{onClick:function(){L("session","add")}},l.a.createElement("svg",{className:"icon","aria-hidden":"true"},l.a.createElement("use",{xlinkHref:"break"===O?"#icon-add-copy":"#icon-add"})))))),l.a.createElement("div",{className:"clock"},l.a.createElement("div",{className:"wrapper"},l.a.createElement("div",{id:"time-left"},l.a.createElement("div",null,function(){var e=Math.floor(b/60),t=b-60*e;return(e=e<10?"0"+e:e)+":"+(t=t<10?"0"+t:t)}()),l.a.createElement("div",{className:"action-button"},l.a.createElement("button",{onClick:function(){""===O&&I("session"),S("running"===v?"stopped":"running")}},"running"===v?l.a.createElement("svg",{className:"icon","aria-hidden":"true"},l.a.createElement("use",{xlinkHref:"break"===O?"#icon-stop-copy":"#icon-stop"})):l.a.createElement("svg",{className:"icon","aria-hidden":"true"},l.a.createElement("use",{xlinkHref:"break"===O?"#icon-start-copy":"#icon-start"}))),l.a.createElement("button",{onClick:function(){g(60*m),S("stopped"),I("")}},l.a.createElement("svg",{className:"icon","aria-hidden":"true"},l.a.createElement("use",{xlinkHref:"break"===O?"#icon-reset-copy":"#icon-reset"})))))),l.a.createElement("div",{class:"info"},l.a.createElement("div",{className:"infoTitle"},l.a.createElement("svg",{className:"icon","aria-hidden":"true"},l.a.createElement("use",{xlinkHref:"break"===O?"#icon-completed-copy":"#icon-completed"})),l.a.createElement("p",{className:"todayTomato"},"\u4eca\u65e5\u756a\u8304\u603b\u8ba1"),l.a.createElement("svg",{className:"icon","aria-hidden":"true"},l.a.createElement("use",{xlinkHref:"break"===O?"#icon-completed-copy":"#icon-completed"}))),l.a.createElement("div",{className:"sum"},function(e){for(var t=0,a=e.length-1;a>=0;a--){var c=new Date(parseInt(e[a].end));if(c.getDate()!==(new Date).getDate()){D([].concat(Object(n.a)(H),[{date:c,sum:t}]));break}t+=e[a].length}return t}(y),l.a.createElement("p",{className:"min"},"\u5206\u949f")))))}),null),document.getElementById("root"))}},[[5,1,2]]]);
//# sourceMappingURL=main.87d19b12.chunk.js.map