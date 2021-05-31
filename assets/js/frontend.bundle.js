/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/index.js":
/*!*********************!*\
  !*** ./js/index.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sass_styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sass/styles.scss */ \"./sass/styles.scss\");\n/* harmony import */ var _sass_styles_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sass_styles_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _modules_navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/navigation */ \"./js/modules/navigation.js\");\n/* harmony import */ var _modules_customInputNumber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/customInputNumber */ \"./js/modules/customInputNumber.js\");\n/* harmony import */ var _modules_cart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/cart */ \"./js/modules/cart.js\");\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/slider */ \"./js/modules/slider.js\");\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/modal */ \"./js/modules/modal.js\");\n/* harmony import */ var _modules_lazyload__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/lazyload */ \"./js/modules/lazyload.js\");\n/* harmony import */ var _modules_gallery__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/gallery */ \"./js/modules/gallery.js\");\n/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/tabs */ \"./js/modules/tabs.js\");\n\n\n\n\n\n\n\n\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  Object(_modules_customInputNumber__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n  Object(_modules_navigation__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n  Object(_modules_cart__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n  Object(_modules_slider__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n  Object(_modules_modal__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n  Object(_modules_lazyload__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\n  Object(_modules_gallery__WEBPACK_IMPORTED_MODULE_7__[\"default\"])();\n  Object(_modules_tabs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])({\n    tabNav: '.tabs-nav a',\n    tabContent: '.tab-content'\n  });\n});\n\n//# sourceURL=webpack:///./js/index.js?");

/***/ }),

/***/ "./js/modules/cart.js":
/*!****************************!*\
  !*** ./js/modules/cart.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar cart = function cart() {\n  var vaucherCheckbox = document.querySelector('.voucher-check');\n  var inputVaucher = document.querySelector('.voucher-input');\n  var basketBtn = document.querySelector('.basket-btn');\n  var cartHolder = document.querySelector('.cart-holder');\n\n  try {\n    vaucherCheckbox.addEventListener('change', function (e) {\n      if (e.target.checked) {\n        inputVaucher.classList.add('show-voucher');\n      } else {\n        inputVaucher.classList.remove('show-voucher');\n      }\n    });\n    basketBtn.addEventListener('click', function (e) {\n      e.preventDefault();\n      e.target.classList.toggle('active-btn');\n      cartHolder.classList.toggle('active-cart');\n    });\n  } catch (e) {}\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (cart);\n\n//# sourceURL=webpack:///./js/modules/cart.js?");

/***/ }),

/***/ "./js/modules/customInputNumber.js":
/*!*****************************************!*\
  !*** ./js/modules/customInputNumber.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar customInputNumber = function customInputNumber() {\n  var customNumberInput = document.querySelectorAll('.custom-number');\n  var minusBtn = document.querySelectorAll('.minus-btn');\n  var plusBtn = document.querySelectorAll('.plus-btn');\n\n  try {\n    minusBtn.forEach(function (item, i) {\n      item.addEventListener('click', function () {\n        if (customNumberInput[i].value > 1) {\n          customNumberInput[i].value--;\n        }\n      });\n    });\n    plusBtn.forEach(function (item, i) {\n      item.addEventListener('click', function () {\n        if (customNumberInput[i].value >= 1) {\n          customNumberInput[i].value++;\n        }\n      });\n    });\n  } catch (e) {}\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (customInputNumber);\n\n//# sourceURL=webpack:///./js/modules/customInputNumber.js?");

/***/ }),

/***/ "./js/modules/gallery.js":
/*!*******************************!*\
  !*** ./js/modules/gallery.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar gallery = function gallery() {\n  var allImages = document.querySelectorAll('.gallery-img');\n  var modal = document.createElement('div');\n  var modalImg = document.createElement('img');\n  var closeBtn = document.createElement('span');\n  var arrows = document.createElement('div');\n  arrows.classList.add('gallery-arrow-holder');\n  var leftArrow = document.createElement('i');\n  var rightArrow = document.createElement('i');\n  leftArrow.classList.add('icon-keyboard_arrow_left');\n  rightArrow.classList.add('icon-keyboard_arrow_right');\n  var overlay = document.createElement('div');\n  overlay.classList.add('overlay');\n  closeBtn.classList.add('close-gallery', 'icon-clear');\n  modal.classList.add('modalGallery');\n  modal.prepend(closeBtn);\n  modal.append(modalImg);\n  arrows.append(leftArrow);\n  arrows.prepend(rightArrow);\n  modal.append(arrows);\n  var slideIndex = 0;\n\n  var addModal = function addModal(src) {\n    document.body.append(modal);\n    modalImg.setAttribute('src', src);\n    document.body.append(overlay);\n    document.body.classList.add('modal-active');\n  };\n\n  var closeGallery = function closeGallery() {\n    modal.remove();\n    overlay.remove();\n    document.body.classList.remove('modal-active');\n  };\n\n  var galleryEvent = function galleryEvent() {\n    allImages.forEach(function (image, index) {\n      image.addEventListener('click', function (e) {\n        e.preventDefault();\n        addModal(image.getAttribute('href'));\n      });\n    });\n\n    if (!closeBtn && !overlay) {\n      return;\n    }\n\n    function removeLetters(element) {\n      return +element.replace(/\\D/g, '');\n    }\n\n    closeBtn.addEventListener('click', closeGallery);\n    overlay.addEventListener('click', closeGallery);\n  };\n\n  galleryEvent();\n\n  if (!leftArrow || !rightArrow) {\n    return;\n  }\n\n  var gallerySlider = function gallerySlider() {\n    leftArrow.addEventListener('click', function () {\n      if (slideIndex === 0) {\n        slideIndex = allImages.length;\n      } else {\n        slideIndex--;\n      }\n\n      if (typeof allImages[slideIndex] === 'undefined') {\n        addModal(allImages[allImages.length - 1].getAttribute('href'));\n      } else {\n        addModal(allImages[slideIndex].getAttribute('href'));\n      }\n    });\n    rightArrow.addEventListener('click', function () {\n      if (slideIndex === allImages.length) {\n        slideIndex = 0;\n      } else {\n        slideIndex++;\n      }\n\n      if (typeof allImages[slideIndex] === 'undefined') {\n        addModal(allImages[1].getAttribute('href'));\n      } else {\n        addModal(allImages[slideIndex].getAttribute('href'));\n      }\n    });\n  };\n\n  gallerySlider();\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (gallery);\n\n//# sourceURL=webpack:///./js/modules/gallery.js?");

/***/ }),

/***/ "./js/modules/lazyload.js":
/*!********************************!*\
  !*** ./js/modules/lazyload.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar lazyLoad = function lazyLoad() {\n  var allImages = document.querySelectorAll('img');\n  allImages.forEach(function (image) {\n    image.classList.add('lozad');\n  });\n  var observer = lozad();\n  observer.observe();\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (lazyLoad);\n\n//# sourceURL=webpack:///./js/modules/lazyload.js?");

/***/ }),

/***/ "./js/modules/modal.js":
/*!*****************************!*\
  !*** ./js/modules/modal.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar modal = function modal() {\n  var modalBtn = document.querySelectorAll('.modal-trigger');\n  var modal = document.querySelector(\".modal\");\n  var closeModalBtn = document.querySelector(\".modal .close\");\n  var overlay = document.createElement(\"div\");\n  var modalBody = document.querySelector(\".modal-body\");\n  overlay.classList.add(\"overlay\");\n\n  var closeModal = function closeModal() {\n    modal.classList.remove(\"open-modal\");\n    document.body.classList.remove(\"modal-active\");\n    overlay.remove();\n  };\n\n  var openModal = function openModal() {\n    modal.classList.add(\"open-modal\");\n    document.body.classList.add(\"modal-active\");\n    document.body.append(overlay);\n  };\n\n  try {\n    console.log(modalBtn);\n    modalBtn.forEach(function (item) {\n      item.addEventListener('click', function (e) {\n        e.preventDefault();\n        console.log(item);\n        openModal(); // if(item.getAttribute.href())\n      });\n    });\n    overlay.addEventListener(\"click\", closeModal);\n    closeModalBtn.addEventListener(\"click\", function () {\n      closeModal();\n    });\n  } catch (e) {}\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (modal);\n\n//# sourceURL=webpack:///./js/modules/modal.js?");

/***/ }),

/***/ "./js/modules/navigation.js":
/*!**********************************!*\
  !*** ./js/modules/navigation.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar navigation = function navigation() {\n  var navTrigger = document.querySelector('.menu-btn');\n\n  try {\n    navTrigger.addEventListener('click', function () {\n      document.body.classList.toggle('nav-active');\n    });\n  } catch (e) {}\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (navigation);\n\n//# sourceURL=webpack:///./js/modules/navigation.js?");

/***/ }),

/***/ "./js/modules/slider.js":
/*!******************************!*\
  !*** ./js/modules/slider.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar slider = function slider() {\n  var slider = document.querySelector('#top-slider');\n  var sliderPagination = document.querySelectorAll('.pagination .pagination-btn');\n\n  try {\n    var splide = new Splide(slider, {\n      type: 'fade',\n      perPage: 1,\n      autoplay: true,\n      interval: 15000,\n      resetProgress: false,\n      navigation: true,\n      lazy: true,\n      classes: {\n        pagination: 'pagination',\n        page: 'splide__pagination__page pagination-btn' // each button\n\n      }\n    });\n    splide.on('pagination:updated', function (data) {\n      var pathern = /\\d+/g;\n      data.items.map(function (item, i) {\n        var numbers = item.button.ariaLabel.match(pathern).join('');\n        item.button.textContent = numbers < 9 ? 0 + numbers : numbers;\n      });\n    }).mount();\n  } catch (e) {}\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (slider);\n\n//# sourceURL=webpack:///./js/modules/slider.js?");

/***/ }),

/***/ "./js/modules/tabs.js":
/*!****************************!*\
  !*** ./js/modules/tabs.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar tabs = function tabs(_ref) {\n  var tabNav = _ref.tabNav,\n      tabContent = _ref.tabContent;\n  var tabsNav = document.querySelectorAll(tabNav);\n  var tabsContent = document.querySelectorAll(tabContent);\n\n  var openTabs = function openTabs(i) {\n    tabsNav[i].classList.add('active');\n    tabsContent[i].classList.add('active-tab');\n  };\n\n  var hideTabs = function hideTabs() {\n    tabsContent.forEach(function (item) {\n      item.classList.remove('active-tab');\n    });\n    tabsNav.forEach(function (item) {\n      item.classList.remove('active');\n    });\n  };\n\n  try {\n    tabsNav.forEach(function (item, i) {\n      item.addEventListener('click', function (e) {\n        e.preventDefault();\n        hideTabs();\n        openTabs(i);\n      });\n    });\n  } catch (e) {}\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (tabs);\n\n//# sourceURL=webpack:///./js/modules/tabs.js?");

/***/ }),

/***/ "./sass/styles.scss":
/*!**************************!*\
  !*** ./sass/styles.scss ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./sass/styles.scss?");

/***/ })

/******/ });