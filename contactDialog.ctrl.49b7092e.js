!function(e,t,a,o,n){var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},s="function"==typeof r.parcelRequire&&r.parcelRequire,l="undefined"!=typeof module&&"function"==typeof module.require&&module.require.bind(module);function c(a,o){if(!t[a]){if(!e[a]){var n="function"==typeof parcelRequire&&parcelRequire;if(!o&&n)return n(a,!0);if(s)return s(a,!0);if(l&&"string"==typeof a)return l(a);var r=new Error("Cannot find module '"+a+"'");throw r.code="MODULE_NOT_FOUND",r}p.resolve=function(t){return e[a][1][t]||t},p.cache={};var i=t[a]=new c.Module(a);e[a][0].call(i.exports,p,i,i.exports,this)}return t[a].exports;function p(e){return c(p.resolve(e))}}c.isParcelRequire=!0,c.Module=function(e){this.id=e,this.bundle=c,this.exports={}},c.modules=e,c.cache=t,c.parent=s,c.register=function(t,a){e[t]=[function(e,t){t.exports=a},{}]},r.parcelRequire=c;for(var i=0;i<a.length;i++)c(a[i])}({eJVHu:[function(e,t,a){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.ContactDialogCtrl=void 0;var o,n=(o=e("bundle-text:./contactDialog.tpl.html"))&&o.__esModule?o:{default:o};e("./_contactDialog.scss");class r{grecaptchaCallbackResolver=()=>{};constructor(){r.grecaptchaScriptLoader||this.createScriptElement(),this.element=document.createElement("dialog"),this.element.innerHTML=n.default,this.element.querySelector(".dialog__btn-close").addEventListener("click",this.hide.bind(this)),this.element.querySelector(".gform").addEventListener("submit",this.onFormSubmit.bind(this))}createScriptElement(){r.grecaptchaScriptLoader=new Promise((e=>{const t=document.createElement("script");t.onload=()=>{const t=document.createElement("div");t.className="grecaptcha-wrapper",document.body.appendChild(t),window.grecaptcha.ready((()=>{window.grecaptcha.render(t,{sitekey:"6LdQaM8ZAAAAAJwBCtGEYIyh9u6be1rBOlsd-FWj",size:"invisible",callback:e=>this.grecaptchaCallbackResolver(e)}),e()}))},t.src="https://www.google.com/recaptcha/api.js?render=explicit",t.defer=!0,t.async=!0,document.body.appendChild(t)}))}async executeGrecaptcha(){const e=await new Promise((e=>{this.grecaptchaCallbackResolver=e,window.grecaptcha.execute()}));return window.grecaptcha.reset(),e}async sendContactData(e,t=0){return new Promise((async(a,o)=>{const n="https://script.google.com/macros/s/AKfycbzrISB5QwRuuwGTgkxgKp7DGENDHPcxZTcka2_LRQ0zULSf5Ec/exec?"+e,r=await this.executeGrecaptcha(),s=new XMLHttpRequest;s.open("POST",n+"&token="+encodeURIComponent(r)),s.setRequestHeader("Content-type","application/x-www-form-urlencoded"),s.onreadystatechange=()=>{if(4===s.readyState&&200===s.status){if("success"===JSON.parse(s.responseText).result)return a();++t<3?a(this.sendContactData(e,t)):o()}},s.send()}))}isShown(){return"open"===this.element.getAttribute("open")}show(){this.element.setAttribute("open","open")}hide(){this.element.removeAttribute("open")}async onFormSubmit(e){await r.grecaptchaScriptLoader;const t=e.currentTarget,a=t.querySelector("button");a.disabled=!0,e.preventDefault();const o=Array.prototype.slice.apply(t.querySelectorAll("input,textarea")).map((e=>encodeURIComponent(e.name)+"="+encodeURIComponent(e.value))).join("&");await this.sendContactData(o).then((()=>{a.textContent="THX!"}),(()=>{})),a.querySelector("button").disabled=!1}}a.ContactDialogCtrl=r},{"bundle-text:./contactDialog.tpl.html":"1K58D","./_contactDialog.scss":"3k4sQ"}],"1K58D":[function(e,t,a){t.exports='<link rel="stylesheet" href="/contactDialog.ctrl.ea646190.css"><script src="/contactDialog.ctrl.49b7092e.js"><\/script><button type="button" class="dialog__btn-close outline" title="Click to close FRSource contact form" aria-label="Click to close FRSource contact form"><svg xmlns:xlink="http://www.w3.org/1999/xlink" class="icon"><use xlink:href="#arrow" href="#arrow"/></svg>\n</button><div class="dialog__body"> <form class="d-f f-col h-100p gform" method="POST" action="https://script.google.com/macros/s/AKfycbzrISB5QwRuuwGTgkxgKp7DGENDHPcxZTcka2_LRQ0zULSf5Ec/exec"> <label class="topline" for="form-name"><small class="topline__item">Your</small><span class="topline__item">&nbsp;name</span></label> <input type="text" name="name" id="form-name" required placeholder=" "> <label class="topline" for="form-email"><small class="topline__item">Your</small><span class="topline__item">&nbsp;email</span></label> <input type="email" name="email" id="form-email" required placeholder=" "> <label class="topline" for="form-message"><small class="topline__item">Your</small><span class="topline__item">&nbsp;message</span></label> <textarea type="text" name="message" id="form-message" class="f-grow" required placeholder=" "></textarea> <div class="d-f jc-sb"> <small class="tt-u d-n d-md-b">I will answer when<br>my cat falls asleep</small> <button class="tt-u f-grow f-md-grow-0" type="submit">Send</button> </div> </form>\n</div><svg aria-hidden="true" class="svg-sprite" version="1.1" xmlns="http://www.w3.org/2000/svg" xml:space="preserve"><symbol id="arrow" viewBox="0 0 131 131"><circle r="60" cx="65" cy="65" stroke-width="9" fill="none"/><path d="M92.98 65.53L81.11 82.45h-8.83l9.28-12.98h-50.8V61.6h50.83l-9.31-12.99h8.83l11.87 16.92z"/></symbol></svg>'},{}],"3k4sQ":[function(){},{}]},{},[]);
//# sourceMappingURL=contactDialog.ctrl.49b7092e.js.map
