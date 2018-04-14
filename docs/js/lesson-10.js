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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 333);
/******/ })
/************************************************************************/
/******/ ({

/***/ 333:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(334);


/***/ }),

/***/ 334:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(335);

var MyBtn = document.querySelector('#MyBtn');
var MyOutput = document.querySelector('#MyOutput');
var nameField = document.querySelector('#nameField');
var passwordField = document.querySelector('#passwordField');
var btnAdd = document.querySelector('#btnAdd');
var newElements = document.querySelector('#newElements');

btnAdd.onclick = addElements;
MyBtn.onclick = login;

function login() {
    var name = nameField.value;
    nameField.value = '';
    var password = passwordField.value;
    passwordField.value = '';
    if (name && password) {
        if (name === 'admin' && password === '1111') {
            MyBtn.classList.remove('notValid');
            MyOutput.classList.remove('textValid');
            MyOutput.innerHTML = '<h2>Welcome, admin!</h2>';
        } else {
            MyOutput.classList.add('textValid');
            MyOutput.innerHTML = '<h2>Credentials are wrong!</h2>';
        }
    } else {
        MyBtn.classList.add('notValid');
        MyOutput.classList.add('textValid');
        MyOutput.innerHTML = '<h2>Not valid</h2>';
    }
}

function addElements() {
    var newElement = document.createElement('div');
    newElement.innerHTML = 'Hello, world!';
    newElements.appendChild(newElement);
}

/***/ }),

/***/ 335:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

/******/ });