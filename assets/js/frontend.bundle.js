!function(e){var t={};function n(c){if(t[c])return t[c].exports;var o=t[c]={i:c,l:!1,exports:{}};return e[c].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,c){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:c})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var c=Object.create(null);if(n.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(c,o,function(t){return e[t]}.bind(null,o));return c},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t,n){},function(e,t,n){"use strict";n.r(t);n(0);var c=function(){var e=document.querySelector(".menu-btn");try{e.addEventListener("click",(function(){document.body.classList.toggle("nav-active")}))}catch(e){}},o=function(){var e=document.querySelectorAll(".custom-number"),t=document.querySelectorAll(".minus-btn"),n=document.querySelectorAll(".plus-btn");try{t.forEach((function(t,n){t.addEventListener("click",(function(){e[n].value>1&&e[n].value--}))})),n.forEach((function(t,n){t.addEventListener("click",(function(){e[n].value>=1&&e[n].value++}))}))}catch(e){}},a=function(){var e=document.querySelector(".voucher-check"),t=document.querySelector(".voucher-input"),n=document.querySelector(".basket-btn"),c=document.querySelector(".cart-holder");try{e.addEventListener("change",(function(e){e.target.checked?t.classList.add("show-voucher"):t.classList.remove("show-voucher")})),n.addEventListener("click",(function(e){e.preventDefault(),e.target.classList.toggle("active-btn"),c.classList.toggle("active-cart")}))}catch(e){}},r=function(){var e=document.querySelector("#top-slider");document.querySelectorAll(".pagination .pagination-btn");try{new Splide(e,{type:"fade",perPage:1,autoplay:!0,interval:15e3,resetProgress:!1,navigation:!0,lazy:!0,classes:{pagination:"pagination",page:"splide__pagination__page pagination-btn"}}).on("pagination:updated",(function(e){var t=/\d+/g;e.items.map((function(e,n){var c=e.button.ariaLabel.match(t).join("");e.button.textContent=c<9?0+c:c}))})).mount()}catch(e){}},i=function(){var e=document.querySelectorAll(".modal-trigger"),t=document.querySelector(".modal"),n=document.querySelector(".modal .close"),c=document.createElement("div");document.querySelector(".modal-body");c.classList.add("overlay");var o=function(){t.classList.remove("open-modal"),document.body.classList.remove("modal-active"),c.remove()};try{console.log(e),e.forEach((function(e){e.addEventListener("click",(function(n){n.preventDefault(),console.log(e),t.classList.add("open-modal"),document.body.classList.add("modal-active"),document.body.append(c)}))})),c.addEventListener("click",o),n.addEventListener("click",(function(){o()}))}catch(e){}},l=function(){document.querySelectorAll("img").forEach((function(e){e.classList.add("lozad")})),lozad().observe()},d=function(){var e=document.querySelectorAll(".gallery-img"),t=document.createElement("div"),n=document.createElement("img"),c=document.createElement("span"),o=document.createElement("div");o.classList.add("gallery-arrow-holder");var a=document.createElement("i"),r=document.createElement("i");a.classList.add("icon-keyboard_arrow_left"),r.classList.add("icon-keyboard_arrow_right");var i=document.createElement("div");i.classList.add("overlay"),c.classList.add("close-gallery","icon-clear"),t.classList.add("modalGallery"),t.prepend(c),t.append(n),o.append(a),o.prepend(r),t.append(o);var l=0,d=function(e){document.body.append(t),n.setAttribute("src",e),document.body.append(i),document.body.classList.add("modal-active")},u=function(){t.remove(),i.remove(),document.body.classList.remove("modal-active")};if(e.forEach((function(e,t){e.addEventListener("click",(function(t){t.preventDefault(),d(e.getAttribute("href"))}))})),(c||i)&&(c.addEventListener("click",u),i.addEventListener("click",u)),a&&r){a.addEventListener("click",(function(){0===l?l=e.length:l--,void 0===e[l]?d(e[e.length-1].getAttribute("href")):d(e[l].getAttribute("href"))})),r.addEventListener("click",(function(){l===e.length?l=0:l++,void 0===e[l]?d(e[1].getAttribute("href")):d(e[l].getAttribute("href"))}))}},u=function(e){var t=e.tabNav,n=e.tabContent,c=document.querySelectorAll(t),o=document.querySelectorAll(n);try{c.forEach((function(e,t){e.addEventListener("click",(function(e){e.preventDefault(),o.forEach((function(e){e.classList.remove("active-tab")})),c.forEach((function(e){e.classList.remove("active")})),function(e){c[e].classList.add("active"),o[e].classList.add("active-tab")}(t)}))}))}catch(e){}};document.addEventListener("DOMContentLoaded",(function(){o(),c(),a(),r(),i(),l(),d(),u({tabNav:".tabs-nav a",tabContent:".tab-content"})}))}]);