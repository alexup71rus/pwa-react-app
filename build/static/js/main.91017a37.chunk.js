(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,n,t){},16:function(e,n,t){},18:function(e,n,t){"use strict";t.r(n);var o=t(0),a=t.n(o),l=t(3),i=t.n(l),r=(t(14),t(4)),c=t(5),s=t(7),d=t(6),u=t(8),h=t(1),p=(t(16),function(e){function n(){var e;return Object(r.a)(this,n),(e=Object(s.a)(this,Object(d.a)(n).call(this))).state={readyToAdd:!1,successfullyInstalled:!1,acceptedInstall:!1,declinedInstall:!1},e.addToHome=e.addToHome.bind(Object(h.a)(Object(h.a)(e))),e.shouldShowAddButton=e.shouldShowAddButton.bind(Object(h.a)(Object(h.a)(e))),e.openWindowOrTab=e.openWindowOrTab.bind(Object(h.a)(Object(h.a)(e))),e}return Object(u.a)(n,e),Object(c.a)(n,[{key:"componentDidMount",value:function(){var e=this;window.matchMedia("(display-mode: standalone)").matches?(console.log("App is already installed and running in standalone"),this.setState({successfullyInstalled:!0})):(window.addEventListener("beforeinstallprompt",function(n){console.log("beforeinstallprompt has fired",n),n.preventDefault(),window.deferredPrompt=n,e.setState({readyToAdd:!0})}),window.addEventListener("appinstalled",function(n){console.log("App was successfully installed"),e.setState({successfullyInstalled:!0})})),this.addToHome()}},{key:"addToHome",value:function(){var e=this,n=window.deferredPrompt;n&&(n.prompt(),n.userChoice.then(function(t){"accepted"===t.outcome?(console.log("User accepted the A2HS prompt"),e.setState({acceptedInstall:!0})):(console.log("User dismissed the A2HS prompt"),e.setState({declinedInstall:!0})),n=null}))}},{key:"shouldShowAddButton",value:function(){var e=this.state.readyToAdd&&!this.state.successfullyInstalled&&!this.state.acceptedInstall&&!this.state.declinedInstall;return console.log("Should show add button",e),e}},{key:"openWindowOrTab",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window.location.href;window.open(e,"_blank")}},{key:"render",value:function(){var e=this;return a.a.createElement("div",{className:"App"},a.a.createElement("div",{className:"bg"},a.a.createElement("div",{className:"image"})),a.a.createElement("div",{className:"content"},a.a.createElement("ul",null,a.a.createElement("li",null,a.a.createElement("a",{href:"#",onClick:function(){return e.openWindowOrTab("https://github.com/alexup71rus")}},"Github")),a.a.createElement("li",null,a.a.createElement("a",{href:"#",onClick:function(){return e.openWindowOrTab("https://codepen.io/5ubjpogqdv6dcjz/")}},"CodePen")),a.a.createElement("li",null,a.a.createElement("a",{href:"#",onClick:function(){return e.openWindowOrTab("https://stackblitz.com/@alexup71rus")}},"StackBlitz")),a.a.createElement("li",null,a.a.createElement("a",{href:"#",onClick:function(){return e.openWindowOrTab("https://www.youtube.com/channel/UC9TnazUh1CaQZWrpSf33XZA")}},"YouTube")),a.a.createElement("li",null,a.a.createElement("a",{href:"#",onClick:function(){return e.openWindowOrTab("https://kwork.ru/user/alexup71rus")}},"Kwork")),a.a.createElement("li",null,a.a.createElement("a",{href:"#",onClick:function(){return e.openWindowOrTab("https://t-do.ru/alexup71rus")}},"\u0422\u0435\u043b\u0435\u0433\u0440\u0430\u043c")),a.a.createElement("li",null,a.a.createElement("a",{href:"#",onClick:function(){return e.openWindowOrTab("mailto:admin@khodyr.ru")}},"\u041f\u043e\u0447\u0442\u0430"))),this.shouldShowAddButton()?a.a.createElement("button",{onClick:this.addToHome},"Add to Home Screen"):null))}}]),n}(o.Component)),f=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function w(e,n){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}i.a.render(a.a.createElement(p,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var n="".concat("","/service-worker.js");f?(function(e,n){fetch(e).then(function(t){var o=t.headers.get("content-type");404===t.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):w(e,n)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(n,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):w(n,e)})}}()},9:function(e,n,t){e.exports=t(18)}},[[9,2,1]]]);
//# sourceMappingURL=main.91017a37.chunk.js.map