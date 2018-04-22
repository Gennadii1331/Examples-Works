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
/******/ 	return __webpack_require__(__webpack_require__.s = 339);
/******/ })
/************************************************************************/
/******/ ({

/***/ 339:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(340);


/***/ }),

/***/ 340:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(341);

/*
const accordion = document.querySelector('#accordion');
accordion.addEventListener('click', open);
accordion.addEventListener('keypress', open);
function open() {
    const title = document.querySelectorAll('.Chapter');
    for (let i = 0; i < title.length; i++) {
        title[i].addEventListener('click', function () {
            if (!(this.classList.contains('active'))) {
                for (let i = 0; i < title.length; i++) {
                    title[i].classList.remove('active');

                }
                title[i].classList.add('active');
            }
        });
        title[i].addEventListener('keypress', (ev) => {
            if(ev.keyCode === 13){
                if (!(this.classList.contains('active'))) {
                    for (let i = 0; i < title.length; i++) {
                        title[i].classList.remove('active');
                    }
                    title[i].classList.add('active');
                }
            }
        });
    }
}


*/
var accordion = document.querySelector('.card');
var accordionItems = document.querySelectorAll('.Chapter');
function open() {
    var _loop = function _loop(chapter) {
        chapter.onclick = function () {
            close();
            chapter.classList.add('active');
        };
        chapter.addEventListener('keypress', function (event) {
            if (event.keyCode === 13) {
                close();
                chapter.classList.add('active');
            }
        });
    };

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = accordionItems[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var chapter = _step.value;

            _loop(chapter);
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
}

function close() {
    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
        for (var _iterator2 = accordionItems[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var chapter = _step2.value;

            chapter.classList.remove('active');
        }
    } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion2 && _iterator2.return) {
                _iterator2.return();
            }
        } finally {
            if (_didIteratorError2) {
                throw _iteratorError2;
            }
        }
    }
}

open();

/***/ }),

/***/ 341:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

/******/ });