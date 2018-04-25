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

/**
 * @param {Element} dropdownContainer Html element for dropdown
 * */
function dropdown(dropdownContainer) {
    var title = dropdownContainer.querySelector('.dropdown__title');
    var options = dropdownContainer.querySelectorAll('.dropdown__option');
    var isOpened = dropdownContainer.classList.contains('active');

    function open() {
        dropdownContainer.classList.add('active');
        isOpened = true;
        document.addEventListener('click', close);
    }

    function close() {
        console.log('Drop down closed');
        dropdownContainer.classList.remove('active');
        isOpened = false;
        document.removeEventListener('click', close);
    }

    function toggleDropdown() {
        if (isOpened) {
            close();
        } else {
            open();
        }
    }

    function changeTitle(text) {
        title.textContent = text;
        close();
    }

    title.addEventListener('click', function (eventObject) {
        console.log(eventObject);
        eventObject.stopPropagation();
        toggleDropdown();
    });

    title.addEventListener('keypress', function (eventObject) {
        console.log(eventObject);
        console.log('Keypressed');
        if (eventObject.keyCode === 13) {
            toggleDropdown();
        }
    });

    options.forEach(function (option) {
        option.addEventListener('click', function () {
            changeTitle(option.textContent);
        });
        option.addEventListener('keypress', function (eventObject) {
            if (eventObject.keyCode === 13) {
                changeTitle(option.textContent);
            }
        });
    });
}

dropdown(document.querySelector('#countries'));
dropdown(document.querySelector('#movies'));

function accordion(accordionContainer) {
    var elems = accordionContainer.querySelectorAll('accordion__block');
    var titles = accordionContainer.querySelectorAll('accordion__title');
    function closeAll() {
        elems.forEach(function (el) {
            return el.classList.remove(ACCTIVE_CLASS_NAME);
        });
    }

    titles.forEach(function (title) {
        title.addEventListener('click', function () {
            var accordionBlock = closeAll();
            title.parentElement.classList.add(ACTIVE_CLASS_NAME);
        });
    });
}

accordion(document.querySelector('.accordion'));

/***/ }),

/***/ 335:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

/******/ });