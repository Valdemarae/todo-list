(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>c});var o=t(81),r=t.n(o),i=t(645),a=t.n(i)()(r());a.push([e.id,"body {\n  background-color: rgb(78, 30, 30);\n  display: flex;\n  flex-direction: column;\n  width: 100vw;\n  min-height: 100vh;\n  justify-content: space-between;\n}\n\n* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  color: white;\n}\n\n.header {\n  display: flex;\n  flex-direction: column;\n  margin-left: 20vw;\n}\n\n.header h1 {\n  font-size: 110px;\n}\n\nh1 {\n  font-size: 40px;\n  margin: 20px;\n}\n\n.plus {\n  font-size: 150px;\n  margin-right: 10px;\n  color: rgb(116, 215, 116);\n}\n\n.plus:hover {\n  cursor: pointer;\n  color: rgb(78, 144, 78);\n}\n\n.main {\n  display: flex;\n  flex: 1;\n}\n\n.content {\n  width: 100%;\n}\n\n.sidebar {\n  background-color: rgb(110, 43, 43);\n  width: 23vw;\n}\n\n.footer {\n  background-color: rgb(110, 43, 43);\n  height: 6vh;\n  display: flex;\n  font-size: larger;\n  justify-content: center;\n  align-items: center;\n}\n\na {\n  margin: 0 10px;\n}\n\n.form {\n  background-color: rgb(110, 43, 43);\n  position: absolute;\n  left: 40%;\n  top: 30%;\n  display: flex;\n  flex-direction: column;\n  height: 30vh;\n  min-width: max-content;\n  height: max-content;\n  justify-content: center;\n  width: 28vw;\n  border: 2px solid black;\n  border-radius: 30px;\n  padding: 17px 6vw;\n  font-size: 28px;\n  pointer-events: all;\n}\n\n.form .x {\n  background-color: rgb(110, 43, 43);\n  color: red;\n  outline: none;\n  border: none;\n  cursor: pointer;\n  padding: 0;\n  margin: 0;\n  position: absolute;\n  top: 6%;\n  right: 9%;\n  font-weight: bold;\n  font-size: 50px;\n}\n\n.form input, .form button, .form select {\n  background-color: rgb(78, 30, 30);\n  font-size: 24px;\n  margin: 5px 0 18px 0;\n}\n\n.form button {\n  padding: 10px 30px;\n  border-radius: 20px;\n}\n\n@media (max-height: 1000px) {\n  .header h1 {\n    font-size: 70px;\n  }\n  .plus {\n    font-size: 100px;\n  }\n}\n\n.list {\n  display: flex;\n  margin: 90px 50px;\n  gap: 30px;\n  flex-wrap: wrap;\n}\n\n.todo {\n  background-color: rgb(110, 43, 43);\n  padding: 10px 20px;\n  max-width: 700px;\n  min-width: 500px;\n  flex: 1;\n  border: 2px solid black;\n  border-radius: 10px;\n  min-height: 96px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}",""]);const c=a},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",o=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),o&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),o&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,o,r,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(o)for(var c=0;c<this.length;c++){var d=this[c][0];null!=d&&(a[d]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);o&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),n.push(l))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,o=0;o<n.length;o++)if(n[o].identifier===e){t=o;break}return t}function o(e,o){for(var i={},a=[],c=0;c<e.length;c++){var d=e[c],s=o.base?d[0]+o.base:d[0],l=i[s]||0,p="".concat(s," ").concat(l);i[s]=l+1;var u=t(p),m={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==u)n[u].references++,n[u].updater(m);else{var f=r(m,o);o.byIndex=c,n.splice(c,0,{identifier:p,updater:f,references:1})}a.push(p)}return a}function r(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,r){var i=o(e=e||[],r=r||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var c=t(i[a]);n[c].references--}for(var d=o(e,r),s=0;s<i.length;s++){var l=t(i[s]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}i=d}}},569:e=>{var n={};e.exports=function(e,t){var o=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleTagTransform(o,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(o){var r=n[o];if(void 0!==r)return r.exports;var i=n[o]={id:o,exports:{}};return e[o](i,i.exports,t),i.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.nc=void 0;var o={};(()=>{t.d(o,{t:()=>w,r:()=>E});let e={},n=["general"];class r{constructor(e,n,t,o="general"){this.title=e,this.description=n,this.dueDate=t,this.#e(o)}#e(n){e[n]?e[n].push(this):e[n]=[this]}static getList(n="general"){return e[n]}static getProjects(){return n}}var i=t(379),a=t.n(i),c=t(795),d=t.n(c),s=t(569),l=t.n(s),p=t(565),u=t.n(p),m=t(216),f=t.n(m),h=t(589),x=t.n(h),v=t(426),g={};g.styleTagTransform=x(),g.setAttributes=u(),g.insert=l().bind(null,"head"),g.domAPI=d(),g.insertStyleElement=f(),a()(v.Z,g),v.Z&&v.Z.locals&&v.Z.locals;const b=document.querySelector(".main"),y=document.querySelector(".content"),C=()=>{const e=document.querySelector(".form");b.removeChild(e),b.setAttribute("style","pointer-events: all;")};document.querySelector(".plus").addEventListener("click",(()=>{(e=>{const n=document.createElement("div");n.classList.add("form"),b.setAttribute("style","pointer-events: none;");const t=document.createElement("button");t.textContent="x",t.classList.add("x");const o=document.createElement("label");o.for="title",o.textContent="Title";const r=document.createElement("input");r.type="text",r.id="title",r.placeholder="must be present";const i=document.createElement("label");i.for="due_date",i.textContent="Description";const a=document.createElement("input");a.type="description",a.id="description",a.placeholder="optional";const c=document.createElement("label");c.for="due_date",c.textContent="Due Date";const d=document.createElement("input");d.type="date",d.valueAsDate=new Date,d.id="due_date";const s=document.createElement("button");s.textContent="Create Todo",s.classList.add("add_todo");const l=document.createElement("label");l.for="project",l.textContent="Project";const p=document.createElement("select");p.id="project",e.forEach((e=>{const n=document.createElement("option");n.value=e,n.textContent=e,p.appendChild(n)})),n.appendChild(t),n.appendChild(o),n.appendChild(r),n.appendChild(i),n.appendChild(a),n.appendChild(c),n.appendChild(d),n.appendChild(l),n.appendChild(p),n.appendChild(s),b.appendChild(n),s.addEventListener("click",w),t.addEventListener("click",E)})(r.getProjects())}));const E=()=>{C()},w=()=>{const e=document.querySelector("#title");if(function(e){return""!=e}(e.value)){const n=document.querySelector("#description"),t=document.querySelector("#due_date");new r(e.value,n.value,t.value);const o=r.getList();(()=>{y.removeChild(document.querySelector(".list"));const e=document.createElement("div");e.classList.add("list"),y.appendChild(e)})(),o.forEach((e=>{(e=>{const n=document.querySelector(".list"),t=document.createElement("div");t.classList.add("todo");const o=document.createElement("h2");o.textContent=e.title;const r=document.createElement("p");r.textContent=e.description;const i=document.createElement("p");i.textContent="Due: "+e.dueDate,t.appendChild(o),t.appendChild(r),t.appendChild(i),n.appendChild(t)})(e)})),C()}}})()})();