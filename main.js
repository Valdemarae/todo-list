(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>a});var o=n(81),r=n.n(o),c=n(645),i=n.n(c)()(r());i.push([e.id,"body {\n  background-color: rgb(78, 30, 30);\n  display: flex;\n  flex-direction: column;\n  width: 100vw;\n  min-height: 100vh;\n  justify-content: space-between;\n}\n\n* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  color: white;\n}\n\n.header {\n  display: flex;\n  flex-direction: column;\n  margin-left: 20vw;\n}\n\n.header h1 {\n  font-size: 110px;\n}\n\nh1 {\n  font-size: 40px;\n  margin: 20px;\n}\n\n.plus {\n  font-size: 150px;\n  margin-right: 10px;\n  color: rgb(116, 215, 116);\n}\n\n.plus:hover, .project_plus:hover {\n  cursor: pointer;\n  color: rgb(78, 144, 78);\n}\n\n.main {\n  display: flex;\n  flex: 1;\n}\n\n.content {\n  width: 100%;\n}\n\n.sidebar {\n  background-color: rgb(110, 43, 43);\n  width: 23vw;\n}\n\n.footer {\n  background-color: rgb(110, 43, 43);\n  height: 6vh;\n  display: flex;\n  font-size: larger;\n  justify-content: center;\n  align-items: center;\n}\n\na {\n  margin: 0 10px;\n}\n\n.form {\n  background-color: rgb(110, 43, 43);\n  position: absolute;\n  left: 40%;\n  top: 30%;\n  display: flex;\n  flex-direction: column;\n  height: 30vh;\n  min-width: max-content;\n  height: max-content;\n  justify-content: center;\n  width: 28vw;\n  border: 2px solid black;\n  border-radius: 30px;\n  padding: 17px 6vw;\n  font-size: 28px;\n  pointer-events: all;\n}\n\n.form .x {\n  background-color: rgb(110, 43, 43);\n  color: red;\n  outline: none;\n  border: none;\n  cursor: pointer;\n  padding: 0;\n  margin: 0;\n  position: absolute;\n  top: 6%;\n  right: 9%;\n  font-weight: bold;\n  font-size: 50px;\n}\n\n.form input, .form button, .form select {\n  background-color: rgb(78, 30, 30);\n  font-size: 24px;\n  margin: 5px 0 18px 0;\n}\n\n.form button {\n  padding: 10px 30px;\n  border-radius: 20px;\n}\n\n@media (max-height: 1000px) {\n  .header h1 {\n    font-size: 70px;\n  }\n  .plus {\n    font-size: 100px;\n  }\n}\n\n.list {\n  display: flex;\n  margin: 90px 50px;\n  gap: 30px;\n  flex-wrap: wrap;\n}\n\n.todo {\n  background-color: rgb(110, 43, 43);\n  padding: 10px 20px;\n  max-width: 700px;\n  min-width: 500px;\n  flex: 1;\n  border: 2px solid black;\n  border-radius: 10px;\n  min-height: 96px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\n.project_plus {\n  color: rgb(143, 244, 143);\n  font-size: 50px;\n}\n\n.project_list h2 {\n  margin: 20px;\n}\n\n.project_list h2:hover {\n  color: rgb(197, 197, 197);\n  cursor: pointer;\n}\n\n.project_list .project_chosen {\n  color: rgb(197, 197, 197);\n  margin-left: 40px;\n}",""]);const a=i},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,r,c){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(o)for(var a=0;a<this.length;a++){var d=this[a][0];null!=d&&(i[d]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);o&&i[l[0]]||(void 0!==c&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=c),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),t.push(l))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var c={},i=[],a=0;a<e.length;a++){var d=e[a],s=o.base?d[0]+o.base:d[0],l=c[s]||0,p="".concat(s," ").concat(l);c[s]=l+1;var u=n(p),m={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==u)t[u].references++,t[u].updater(m);else{var f=r(m,o);o.byIndex=a,t.splice(a,0,{identifier:p,updater:f,references:1})}i.push(p)}return i}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var c=o(e=e||[],r=r||{});return function(e){e=e||[];for(var i=0;i<c.length;i++){var a=n(c[i]);t[a].references--}for(var d=o(e,r),s=0;s<c.length;s++){var l=n(c[s]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}c=d}}},569:e=>{var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,r&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var c=n.sourceMap;c&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(c))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var c=t[o]={id:o,exports:{}};return e[o](c,c.exports,n),c.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0;var o={};(()=>{n.d(o,{y1:()=>_,t9:()=>w,rh:()=>L});let e={},t=["general"];class r{constructor(e,t,n,o){this.title=e,this.description=t,this.dueDate=n,this.#e(o)}#e(t){e[t]?e[t].push(this):e[t]=[this]}static getList(t){return e[t]}static getProjects(){return t}static addProject(e){t.push(e)}}var c=n(379),i=n.n(c),a=n(795),d=n.n(a),s=n(569),l=n.n(s),p=n(565),u=n.n(p),m=n(216),f=n.n(m),h=n(589),x=n.n(h),v=n(426),g={};g.styleTagTransform=x(),g.setAttributes=u(),g.insert=l().bind(null,"head"),g.domAPI=d(),g.insertStyleElement=f(),i()(v.Z,g),v.Z&&v.Z.locals&&v.Z.locals;const b=document.querySelector(".main"),y=document.querySelector(".content"),C=()=>{const e=document.querySelector(".form");b.removeChild(e),b.setAttribute("style","pointer-events: all;")},j=e=>{const t=document.querySelector(".list"),n=document.createElement("div");n.classList.add("todo");const o=document.createElement("h2");o.textContent=e.title;const r=document.createElement("p");r.textContent=e.description;const c=document.createElement("p");c.textContent="Due: "+e.dueDate,n.appendChild(o),n.appendChild(r),n.appendChild(c),t.appendChild(n)},E=e=>{const t=document.querySelector(".project_list"),n=document.createElement("h2");n.textContent=e,n.classList.add("project"),t.appendChild(n)};!function(){const e=r.getList("general");e&&e.forEach((e=>{j(e)}));const t=r.getProjects();t&&t.forEach((e=>{E(e)})),document.querySelector(".project_list").firstElementChild.classList.add("project_chosen")}(),document.querySelector(".plus").addEventListener("click",(()=>{(e=>{const t=document.createElement("div");t.classList.add("form"),b.setAttribute("style","pointer-events: none;");const n=document.createElement("button");n.textContent="x",n.classList.add("x");const o=document.createElement("label");o.for="title",o.textContent="Title";const r=document.createElement("input");r.type="text",r.id="title",r.placeholder="must be present";const c=document.createElement("label");c.for="due_date",c.textContent="Description";const i=document.createElement("input");i.type="description",i.id="description",i.placeholder="optional";const a=document.createElement("label");a.for="due_date",a.textContent="Due Date";const d=document.createElement("input");d.type="date",d.valueAsDate=new Date,d.id="due_date";const s=document.createElement("button");s.textContent="Create Todo",s.classList.add("add_todo");const l=document.createElement("label");l.for="project",l.textContent="Project";const p=document.createElement("select");p.id="project",e.forEach((e=>{const t=document.createElement("option");t.value=e,t.textContent=e,p.appendChild(t)})),t.appendChild(n),t.appendChild(o),t.appendChild(r),t.appendChild(c),t.appendChild(i),t.appendChild(a),t.appendChild(d),t.appendChild(l),t.appendChild(p),t.appendChild(s),b.appendChild(t),s.addEventListener("click",w),n.addEventListener("click",L)})(r.getProjects())})),document.querySelector(".project_plus").addEventListener("click",(()=>{const e=document.createElement("div");e.classList.add("form"),b.setAttribute("style","pointer-events: none;");const t=document.createElement("button");t.textContent="x",t.classList.add("x");const n=document.createElement("label");n.for="project",n.textContent="Project";const o=document.createElement("input");o.type="text",o.id="project",o.placeholder="must be present";const r=document.createElement("button");r.textContent="Create Project",r.classList.add("add_project"),e.appendChild(t),e.appendChild(n),e.appendChild(o),e.appendChild(r),b.appendChild(e),r.addEventListener("click",_),t.addEventListener("click",L)}));const L=()=>{C()},w=()=>{const e=document.querySelector("#title").value;if(q(e)){const t=document.querySelector("#description").value,n=document.querySelector("#due_date").value,o=document.querySelector("#project").value;new r(e,t,n,o),S(o),C()}};function S(e){const t=r.getList(e);(()=>{y.removeChild(document.querySelector(".list"));const e=document.createElement("div");e.classList.add("list"),y.appendChild(e)})(),t&&t.forEach((e=>{j(e)}))}const _=()=>{const e=document.querySelector("#project").value;q(e)&&(r.addProject(e),function(){const e=r.getProjects();(()=>{const e=document.querySelector(".projects");e.removeChild(document.querySelector(".project_list"));const t=document.createElement("div");t.classList.add("project_list"),e.appendChild(t)})(),e.forEach((e=>{E(e)})),document.querySelector(".project_list").addEventListener("click",(t=>{if(e.includes(t.target.textContent)){S(t.target.textContent);const e=document.querySelector(".project_chosen");console.log(e),e&&e.classList.remove("project_chosen"),t.target.classList.add("project_chosen")}})),document.querySelector(".project_list").lastElementChild.classList.add("project_chosen")}(),C())};function q(e){return""!=e}})()})();