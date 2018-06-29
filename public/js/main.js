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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "/js/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_hamburger_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_hamburger_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_hamburger_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_menu_dropdown_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_menu_dropdown_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_menu_dropdown_js__);





/***/ }),
/* 2 */
/***/ (function(module, exports) {

let body = document.body || document.querySelector('body');
let button = document.querySelector('.menu-toggle');
let menu = document.querySelector('.menu');

let opened = false;

button.addEventListener('click', function(e) {
  e.preventDefault();
  if (!opened) {
    open();
  } else {
    close();
  }
});

function open() {
  body.classList.add('menu-open');
  window.addEventListener('keydown', closeByEsc);
  opened = !opened;
}
function close() {
  body.classList.remove('menu-open');
  window.removeEventListener('keydown', closeByEsc);
  opened = !opened;
}
function closeByEsc(e) {
  if (e.keyCode == 27) close();
}

menu.addEventListener('click', function(e) {
  if (e.target === menu) close();
});

/***/ }),
/* 3 */
/***/ (function(module, exports) {

let menuList = document.querySelector('.main-navigation__list');

menuList.addEventListener('click', function(e) {
  if (e.target.classList.contains('main-navigation__link--dropdown')) {
    e.preventDefault();
    toggleOpen(e.target)
  }
});

function toggleOpen(link) {
  link.classList.toggle('main-navigation__link--open');
}

/***/ })
/******/ ]);