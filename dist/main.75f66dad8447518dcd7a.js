(()=>{"use strict";var e={331:(e,n,r)=>{r.d(n,{Z:()=>A});var t=r(537),o=r.n(t),a=r(645),i=r.n(a)()(o());i.push([e.id,"html{scroll-behavior:smooth}*{box-sizing:border-box;margin:0;padding:0}body{font-family:Arial,Helvetica,sans-serif;background:#171723}i{cursor:pointer}.msg{display:none;position:absolute;right:0;left:0;margin:auto;margin-top:20px;width:300px;padding:10px 80px;border-radius:15px;text-align:center;color:#fff}.container{display:flex;justify-content:center;align-items:center;height:100vh;padding:0 40px;max-width:600px;margin:auto}.card{width:100%;background-color:#fff;box-shadow:0 3px 10px rgba(243,239,239,.2)}.card-header{display:flex;justify-content:space-between;align-items:center;height:100%;padding:15px 15px;background:#24273d;color:#fff}.card-body{height:100%;border-bottom:1px solid #ccc;max-height:500px;overflow-y:auto}.card-body .form-field{padding:15px 15px;border-bottom:1px solid #ccc}.card-body .form-field i{color:#171723}.form{display:flex;justify-content:space-between;gap:10px}.ul .edit{width:93%;font-size:16px;border:none;background:rgba(0,0,0,0)}.form .desc{width:100%;font-size:16px;font-style:italic;border:none;background:rgba(0,0,0,0)}.form .desc:focus{outline:none}.ul .edit:focus{outline:none}ul{list-style-type:none}ul li{border-bottom:1px solid #ccc;padding:15px 15px;display:flex;justify-content:space-between;align-items:center;height:100%}.active{background:#fffeca}.hidden{display:none}.completed{text-decoration:line-through;color:gray;font-style:italic}ul li div{display:flex;justify-content:start;align-items:center;width:100%;gap:10px;height:100%}li.dragging{background:rgba(224,223,223,.5)}li.placeholder{height:50px;background:#f1f1f1;border:1px dashed #ccc}.card-footer{display:flex;justify-content:space-between;align-items:center;height:100%;padding:15px 15px;background:#09ba09}button{display:inline-block;cursor:pointer;border:none;background:none;margin:auto;color:#fff;font-weight:600}button:active{transform:scale(0.9)}","",{version:3,sources:["webpack://./src/styles/style.css"],names:[],mappings:"AAAA,KACE,sBAAA,CAGF,EACE,qBAAA,CACA,QAAA,CACA,SAAA,CAGF,KACE,sCAAA,CACA,kBAAA,CAGF,EACE,cAAA,CAGF,KACE,YAAA,CACA,iBAAA,CACA,OAAA,CACA,MAAA,CACA,WAAA,CACA,eAAA,CACA,WAAA,CACA,iBAAA,CACA,kBAAA,CACA,iBAAA,CACA,UAAA,CAGF,WACE,YAAA,CACA,sBAAA,CACA,kBAAA,CACA,YAAA,CACA,cAAA,CACA,eAAA,CACA,WAAA,CAGF,MACE,UAAA,CACA,qBAAA,CACA,0CAAA,CAGF,aACE,YAAA,CACA,6BAAA,CACA,kBAAA,CACA,WAAA,CACA,iBAAA,CACA,kBAAA,CACA,UAAA,CAGF,WACE,WAAA,CACA,4BAAA,CACA,gBAAA,CACA,eAAA,CAGF,uBACE,iBAAA,CACA,4BAAA,CAGF,yBACE,aAAA,CAGF,MACE,YAAA,CACA,6BAAA,CACA,QAAA,CAGF,UACE,SAAA,CACA,cAAA,CACA,WAAA,CACA,wBAAA,CAGF,YACE,UAAA,CACA,cAAA,CACA,iBAAA,CACA,WAAA,CACA,wBAAA,CAGF,kBACE,YAAA,CAGF,gBACE,YAAA,CAGF,GAEE,oBAAA,CAGF,MACE,4BAAA,CACA,iBAAA,CACA,YAAA,CACA,6BAAA,CACA,kBAAA,CACA,WAAA,CAGF,QACE,kBAAA,CAGF,QACE,YAAA,CAGF,WACE,4BAAA,CACA,UAAA,CACA,iBAAA,CAGF,UACE,YAAA,CACA,qBAAA,CACA,kBAAA,CACA,UAAA,CACA,QAAA,CACA,WAAA,CAGF,YACE,+BAAA,CAGF,eACE,WAAA,CACA,kBAAA,CACA,sBAAA,CAGF,aACE,YAAA,CACA,6BAAA,CACA,kBAAA,CACA,WAAA,CACA,iBAAA,CACA,kBAAA,CAGF,OACE,oBAAA,CACA,cAAA,CACA,WAAA,CACA,eAAA,CACA,WAAA,CACA,UAAA,CACA,eAAA,CAGF,cACE,oBAAA",sourcesContent:["html {\r\n  scroll-behavior: smooth;\r\n}\r\n\r\n* {\r\n  box-sizing: border-box;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\nbody {\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  background: #171723;\r\n}\r\n\r\ni {\r\n  cursor: pointer;\r\n}\r\n\r\n.msg {\r\n  display: none;\r\n  position: absolute;\r\n  right: 0;\r\n  left: 0;\r\n  margin: auto;\r\n  margin-top: 20px;\r\n  width: 300px;\r\n  padding: 10px 80px;\r\n  border-radius: 15px;\r\n  text-align: center;\r\n  color: #fff;\r\n}\r\n\r\n.container {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  height: 100vh;\r\n  padding: 0 40px;\r\n  max-width: 600px;\r\n  margin: auto;\r\n}\r\n\r\n.card {\r\n  width: 100%;\r\n  background-color: #fff;\r\n  box-shadow: 0 3px 10px rgba(243, 239, 239, 0.2);\r\n}\r\n\r\n.card-header {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  height: 100%;\r\n  padding: 15px 15px;\r\n  background: #24273d;\r\n  color: #fff;\r\n}\r\n\r\n.card-body {\r\n  height: 100%;\r\n  border-bottom: 1px solid #ccc;\r\n  max-height: 500px;\r\n  overflow-y: auto;\r\n}\r\n\r\n.card-body .form-field {\r\n  padding: 15px 15px;\r\n  border-bottom: 1px solid #ccc;\r\n}\r\n\r\n.card-body .form-field i {\r\n  color: #171723;\r\n}\r\n\r\n.form {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  gap: 10px;\r\n}\r\n\r\n.ul .edit {\r\n  width: 93%;\r\n  font-size: 16px;\r\n  border: none;\r\n  background: transparent;\r\n}\r\n\r\n.form .desc {\r\n  width: 100%;\r\n  font-size: 16px;\r\n  font-style: italic;\r\n  border: none;\r\n  background: transparent;\r\n}\r\n\r\n.form .desc:focus {\r\n  outline: none;\r\n}\r\n\r\n.ul .edit:focus {\r\n  outline: none;\r\n}\r\n\r\nul {\r\n  /* padding: 15px 15px; */\r\n  list-style-type: none;\r\n}\r\n\r\nul li {\r\n  border-bottom: 1px solid #ccc;\r\n  padding: 15px 15px;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  height: 100%;\r\n}\r\n\r\n.active {\r\n  background: #fffeca;\r\n}\r\n\r\n.hidden {\r\n  display: none;\r\n}\r\n\r\n.completed {\r\n  text-decoration: line-through;\r\n  color: gray;\r\n  font-style: italic;\r\n}\r\n\r\nul li div {\r\n  display: flex;\r\n  justify-content: start;\r\n  align-items: center;\r\n  width: 100%;\r\n  gap: 10px;\r\n  height: 100%;\r\n}\r\n\r\nli.dragging {\r\n  background: rgba(224, 223, 223, 0.5);\r\n}\r\n\r\nli.placeholder {\r\n  height: 50px;\r\n  background: #f1f1f1;\r\n  border: 1px dashed #ccc;\r\n}\r\n\r\n.card-footer {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  height: 100%;\r\n  padding: 15px 15px;\r\n  background: #09ba09;\r\n}\r\n\r\nbutton {\r\n  display: inline-block;\r\n  cursor: pointer;\r\n  border: none;\r\n  background: none;\r\n  margin: auto;\r\n  color: #fff;\r\n  font-weight: 600;\r\n}\r\n\r\nbutton:active {\r\n  transform: scale(0.9);\r\n}\r\n"],sourceRoot:""}]);const A=i},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var r="",t=void 0!==n[5];return n[4]&&(r+="@supports (".concat(n[4],") {")),n[2]&&(r+="@media ".concat(n[2]," {")),t&&(r+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),r+=e(n),t&&(r+="}"),n[2]&&(r+="}"),n[4]&&(r+="}"),r})).join("")},n.i=function(e,r,t,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(t)for(var A=0;A<this.length;A++){var c=this[A][0];null!=c&&(i[c]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);t&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),r&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=r):l[2]=r),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),n.push(l))}},n}},537:e=>{e.exports=function(e){var n=e[1],r=e[3];if(!r)return n;if("function"==typeof btoa){var t=btoa(unescape(encodeURIComponent(JSON.stringify(r)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(t),a="/*# ".concat(o," */");return[n].concat([a]).join("\n")}return[n].join("\n")}},379:e=>{var n=[];function r(e){for(var r=-1,t=0;t<n.length;t++)if(n[t].identifier===e){r=t;break}return r}function t(e,t){for(var a={},i=[],A=0;A<e.length;A++){var c=e[A],s=t.base?c[0]+t.base:c[0],l=a[s]||0,d="".concat(s," ").concat(l);a[s]=l+1;var u=r(d),p={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)n[u].references++,n[u].updater(p);else{var f=o(p,t);t.byIndex=A,n.splice(A,0,{identifier:d,updater:f,references:1})}i.push(d)}return i}function o(e,n){var r=n.domAPI(n);return r.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;r.update(e=n)}else r.remove()}}e.exports=function(e,o){var a=t(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var A=r(a[i]);n[A].references--}for(var c=t(e,o),s=0;s<a.length;s++){var l=r(a[s]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}a=c}}},569:e=>{var n={};e.exports=function(e,r){var t=function(e){if(void 0===n[e]){var r=document.querySelector(e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}n[e]=r}return n[e]}(e);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(r)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,r)=>{e.exports=function(e){var n=r.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(r){!function(e,n,r){var t="";r.supports&&(t+="@supports (".concat(r.supports,") {")),r.media&&(t+="@media ".concat(r.media," {"));var o=void 0!==r.layer;o&&(t+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),t+=r.css,o&&(t+="}"),r.media&&(t+="}"),r.supports&&(t+="}");var a=r.sourceMap;a&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(t,e,n.options)}(n,e,r)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function r(t){var o=n[t];if(void 0!==o)return o.exports;var a=n[t]={id:t,exports:{}};return e[t](a,a.exports,r),a.exports}r.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return r.d(n,{a:n}),n},r.d=(e,n)=>{for(var t in n)r.o(n,t)&&!r.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},r.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),r.nc=void 0,(()=>{var e=r(379),n=r.n(e),t=r(795),o=r.n(t),a=r(569),i=r.n(a),A=r(565),c=r.n(A),s=r(216),l=r.n(s),d=r(589),u=r.n(d),p=r(331),f={};function C(e){return C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},C(e)}function m(e,n){for(var r=0;r<n.length;r++){var t=n[r];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,(void 0,o=function(e,n){if("object"!==C(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var t=r.call(e,"string");if("object"!==C(t))return t;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(t.key),"symbol"===C(o)?o:String(o)),t)}var o}function g(e,n,r){return n&&m(e.prototype,n),r&&m(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}f.styleTagTransform=u(),f.setAttributes=c(),f.insert=i().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=l(),n()(p.Z,f),p.Z&&p.Z.locals&&p.Z.locals;const y=g((function e(n,r,t){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.index=n,this.description=r,this.completed=t}));function h(e){return h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},h(e)}function v(e,n){for(var r=0;r<n.length;r++){var t=n[r];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,(void 0,o=function(e,n){if("object"!==h(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var t=r.call(e,"string");if("object"!==h(t))return t;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(t.key),"symbol"===h(o)?o:String(o)),t)}var o}var b=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e)}var n,r,t;return n=e,t=[{key:"getItem",value:function(){return null===localStorage.getItem("todoData")?[]:JSON.parse(localStorage.getItem("todoData"))}},{key:"addToLocalStorage",value:function(n){this.newTodo=n;var r=e.getItem();r.push(n),localStorage.setItem("todoData",JSON.stringify(r))}},{key:"updateTaskInLocalStorage",value:function(n,r){var t=e.getItem(),o=t.findIndex((function(e){return e.index===n}));-1!==o&&(t[o]=r,localStorage.setItem("todoData",JSON.stringify(t)))}},{key:"deleteTaskFromLocalStorage",value:function(n){var r=new e,t=e.getItem(),o=t.findIndex((function(e){return e.index===n}));-1!==o&&(t.splice(o,1),localStorage.setItem("todoData",JSON.stringify(t))),r.errorMsg("Success","rgba(9, 186, 9, 0.5)")}},{key:"clearCompletedTasks",value:function(){var n=e.getItem(),r=new e,t=n.filter((function(e){return!e.completed}));localStorage.setItem("todoData",JSON.stringify(t)),document.querySelectorAll(".completed").forEach((function(e){var n=e.closest("li");n.parentNode.removeChild(n)})),r.errorMsg("Success","rgba(9, 186, 9, 0.5)")}},{key:"displayFromLocalStorage",value:function(){var n=new e;e.getItem().forEach((function(e){n.displayTask(e)}))}}],(r=[{key:"errorMsg",value:function(e,n){this.message=e,this.color=n;var r=document.querySelector(".msg");r.style.display="block",r.innerText=e,r.style.background=n,setTimeout((function(){r.style.display="none"}),3e3)}},{key:"displayTask",value:function(n){this.newTodo=n;var r=document.querySelector(".ul"),t=document.createElement("li");t.id="list",t.className=n.index;var o=document.createElement("div");o.className="divn";var a=document.createElement("input");a.type="checkbox",a.id=n.index,a.className="check";var i=document.createElement("input");i.type="text",i.id=n.index,i.className="edit",i.value=n.description,!0===n.completed?(i.classList.add("completed"),a.checked=!0):(i.classList.remove("completed"),a.checked=!1);var A=document.createElement("i");A.id="bar",A.className="fas fa-ellipsis-v";var c=document.createElement("i");c.id="remove",c.className="fas fa-trash-alt hidden",o.appendChild(a),o.appendChild(i),t.appendChild(o),t.appendChild(A),t.appendChild(c),r.appendChild(t);var s=t.querySelector(".edit");s.addEventListener("input",(function(){n.description=s.value,e.updateTaskInLocalStorage(n.index,n)})),s.addEventListener("focusin",(function(){document.querySelectorAll(".ul li").forEach((function(e){if(e===t){e.classList.add("active");var n=e.querySelector(".fa-trash-alt"),r=e.querySelector(".fa-ellipsis-v");n.classList.remove("hidden"),r.classList.add("hidden")}})),t.classList.contains("active")&&(c.classList.remove("hidden"),A.classList.add("hidden"))})),s.addEventListener("focusout",(function(){document.querySelectorAll(".ul li").forEach((function(e){if(e!==t){e.classList.remove("active");var n=e.querySelector(".fa-trash-alt"),r=e.querySelector(".fa-ellipsis-v");n.classList.add("hidden"),r.classList.remove("hidden")}}))})),t.querySelector(".check").addEventListener("change",(function(){n.completed=!n.completed,!0===n.completed?(i.classList.add("completed"),a.checked=!0):(i.classList.remove("completed"),a.checked=!1),e.updateTaskInLocalStorage(n.index,n)})),c.addEventListener("click",(function(){var o=n.index;r.removeChild(t),e.deleteTaskFromLocalStorage(o)}))}}])&&v(n.prototype,r),t&&v(n,t),Object.defineProperty(n,"prototype",{writable:!1}),e}();const x=b;var k=new x,S=document.querySelector(".form"),E=document.querySelector(".clearBtn");document.addEventListener("DOMContentLoaded",x.displayFromLocalStorage),S.addEventListener("submit",(function(e){var n,r=document.querySelector(".desc").value,t=x.getItem();if(n=t.length>0?t[t.length-1].index+1:0,""===r)k.errorMsg("Error","rgba(255, 0, 0, 0.5)");else{var o=new y(n,r,!1);k.displayTask(o),x.addToLocalStorage(o),k.errorMsg("Success","rgba(9, 186, 9, 0.5)"),document.querySelector(".desc").value=""}e.preventDefault()})),E.addEventListener("click",x.clearCompletedTasks)})()})();
//# sourceMappingURL=main.75f66dad8447518dcd7a.js.map