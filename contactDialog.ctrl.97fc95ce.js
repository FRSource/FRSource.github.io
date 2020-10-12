!function(e,t,n,r,a){var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i="function"==typeof o.parcelRequire&&o.parcelRequire,c="undefined"!=typeof module&&"function"==typeof module.require&&module.require.bind(module);function l(n,r){if(!t[n]){if(!e[n]){var a="function"==typeof parcelRequire&&parcelRequire;if(!r&&a)return a(n,!0);if(i)return i(n,!0);if(c&&"string"==typeof n)return c(n);var o=new Error("Cannot find module '"+n+"'");throw o.code="MODULE_NOT_FOUND",o}u.resolve=function(t){return e[n][1][t]||t},u.cache={};var s=t[n]=new l.Module(n);e[n][0].call(s.exports,u,s,s.exports,this)}return t[n].exports;function u(e){return l(u.resolve(e))}}l.isParcelRequire=!0,l.Module=function(e){this.id=e,this.bundle=l,this.exports={}},l.modules=e,l.cache=t,l.parent=i,l.register=function(t,n){e[t]=[function(e,t){t.exports=n},{}]},o.parcelRequire=l;for(var s=0;s<n.length;s++)l(n[s])}({"18X4p":[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.ContactDialogCtrl=void 0;var r,a=(r=e("bundle-text:./contactDialog.tpl.html"))&&r.__esModule?r:{default:r};function o(e,t,n,r,a,o,i){try{var c=e[o](i),l=c.value}catch(e){return void n(e)}c.done?t(l):Promise.resolve(l).then(r,a)}function i(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var i=e.apply(t,n);function c(e){o(i,r,a,c,l,"next",e)}function l(e){o(i,r,a,c,l,"throw",e)}c(void 0)}))}}function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e("./_contactDialog.scss");var l=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n}(this,"grecaptchaCallbackResolver",(function(){})),e.grecaptchaScriptLoader||this.createScriptElement(),this.element=document.createElement("dialog"),this.element.innerHTML=a.default,this.element.querySelector(".dialog__btn-close").addEventListener("click",this.hide.bind(this)),this.element.querySelector(".gform").addEventListener("submit",this.onFormSubmit.bind(this))}var t,n,r,o,l,s;return t=e,(n=[{key:"createScriptElement",value:function(){var t=this;e.grecaptchaScriptLoader=new Promise((function(e){var n=document.createElement("script");n.onload=function(){var n=document.createElement("div");n.className="grecaptcha-wrapper",document.body.appendChild(n),window.grecaptcha.ready((function(){window.grecaptcha.render(n,{sitekey:"6LdQaM8ZAAAAAJwBCtGEYIyh9u6be1rBOlsd-FWj",size:"invisible",callback:function(e){return t.grecaptchaCallbackResolver(e)}}),e()}))},n.src="https://www.google.com/recaptcha/api.js?render=explicit",n.defer=!0,n.async=!0,document.body.appendChild(n)}))}},{key:"executeGrecaptcha",value:(s=i(regeneratorRuntime.mark((function e(){var t,n=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new Promise((function(e){n.grecaptchaCallbackResolver=e,window.grecaptcha.execute()}));case 2:return t=e.sent,window.grecaptcha.reset(),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)}))),function(){return s.apply(this,arguments)})},{key:"sendContactData",value:(l=i(regeneratorRuntime.mark((function e(t){var n,r=this,a=arguments;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.length>1&&void 0!==a[1]?a[1]:0,e.abrupt("return",new Promise(function(){var e=i(regeneratorRuntime.mark((function e(a,o){var i,c,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i="https://script.google.com/macros/s/AKfycbzrISB5QwRuuwGTgkxgKp7DGENDHPcxZTcka2_LRQ0zULSf5Ec/exec?"+t,e.next=3,r.executeGrecaptcha();case 3:c=e.sent,(l=new XMLHttpRequest).open("POST",i+"&token="+encodeURIComponent(c)),l.setRequestHeader("Content-type","application/x-www-form-urlencoded"),l.onreadystatechange=function(){if(4===l.readyState&&200===l.status){if("success"===JSON.parse(l.responseText).result)return a();++n<3?a(r.sendContactData(t,n)):o()}},l.send();case 9:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()));case 2:case"end":return e.stop()}}),e)}))),function(e){return l.apply(this,arguments)})},{key:"isShown",value:function(){return"open"===this.element.getAttribute("open")}},{key:"show",value:function(){this.element.setAttribute("open","open")}},{key:"hide",value:function(){this.element.removeAttribute("open")}},{key:"onFormSubmit",value:(o=i(regeneratorRuntime.mark((function t(n){var r,a,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.grecaptchaScriptLoader;case 2:return r=n.currentTarget,(a=r.querySelector("button")).disabled=!0,n.preventDefault(),o=Array.prototype.slice.apply(r.querySelectorAll("input,textarea")).map((function(e){return encodeURIComponent(e.name)+"="+encodeURIComponent(e.value)})).join("&"),t.next=9,this.sendContactData(o).then((function(){a.textContent="THX!"}),(function(){}));case 9:a.querySelector("button").disabled=!1;case 10:case"end":return t.stop()}}),t,this)}))),function(e){return o.apply(this,arguments)})}])&&c(t.prototype,n),r&&c(t,r),e}();n.ContactDialogCtrl=l},{"bundle-text:./contactDialog.tpl.html":"yijG0","./_contactDialog.scss":"1JDqz"}],yijG0:[function(e,t,n){t.exports='<link rel="stylesheet" href="/contactDialog.ctrl.fb977725.css"><script src="/contactDialog.ctrl.97fc95ce.js"><\/script><button type="button" class="dialog__btn-close outline" title="Click to close FRSource contact form" aria-label="Click to close FRSource contact form"><svg xmlns:xlink="http://www.w3.org/1999/xlink" class="icon"><use xlink:href="#arrow" href="#arrow"/></svg>\n</button><div class="dialog__body"> <form class="d-f f-col h-100p gform" method="POST" action="https://script.google.com/macros/s/AKfycbzrISB5QwRuuwGTgkxgKp7DGENDHPcxZTcka2_LRQ0zULSf5Ec/exec"> <label class="topline" for="form-name"><small class="topline__item">Your</small><span class="topline__item">&nbsp;name</span></label> <input type="text" name="name" id="form-name" required placeholder=" "> <label class="topline" for="form-email"><small class="topline__item">Your</small><span class="topline__item">&nbsp;email</span></label> <input type="email" name="email" id="form-email" required placeholder=" "> <label class="topline" for="form-message"><small class="topline__item">Your</small><span class="topline__item">&nbsp;message</span></label> <textarea type="text" name="message" id="form-message" class="f-grow" required placeholder=" "></textarea> <div class="d-f jc-sb"> <small class="tt-u d-n d-md-b">I will answer when<br>my cat falls asleep</small> <button class="tt-u f-grow f-md-grow-0" type="submit">Send</button> </div> </form>\n</div><svg aria-hidden="true" class="svg-sprite" version="1.1" xmlns="http://www.w3.org/2000/svg" xml:space="preserve"><symbol id="arrow" viewBox="0 0 131 131"><circle r="60" cx="65" cy="65" stroke-width="9" fill="none"/><path d="M92.98 65.53L81.11 82.45h-8.83l9.28-12.98h-50.8V61.6h50.83l-9.31-12.99h8.83l11.87 16.92z"/></symbol></svg>'},{}],"1JDqz":[function(){},{}]},{},[]);
//# sourceMappingURL=contactDialog.ctrl.97fc95ce.js.map
