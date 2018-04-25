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
/******/ 	return __webpack_require__(__webpack_require__.s = 344);
/******/ })
/************************************************************************/
/******/ ({

/***/ 344:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(345);


/***/ }),

/***/ 345:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(346);

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
// const accordion = document.querySelector('.card');
// const accordionItems = document.querySelectorAll('.Chapter');
// function open() {
//     for (let chapter of accordionItems) {
//         chapter.onclick = function () {
//            close();
//             chapter.classList.add('active');
//         };
//         chapter.addEventListener('keypress', (event)=>{
//             if(event.keyCode === 13){
//             close();
//             chapter.classList.add('active');
//             }
//         });
//     }
// }
//
// function close() {
//     for (let chapter of accordionItems) {
//         chapter.classList.remove('active');
//     }
// }
//
//
// open();


function accordion(accordionContaier) {
    var ACTIVE_CLASS_NAME = 'active';
    var elems = Array.from(accordionContaier.querySelectorAll('.accordion__card'));
    var titles = Array.from(accordionContaier.querySelectorAll('.accordion__title'));

    function closeAll() {
        elems.forEach(function (el) {
            return el.classList.remove(ACTIVE_CLASS_NAME);
        });
    }

    titles.forEach(function (title) {
        title.addEventListener('click', function () {
            var accordionBlock = title.parentElement;
            if (accordionBlock.classList.contains(ACTIVE_CLASS_NAME)) {
                accordionBlock.classList.remove(ACTIVE_CLASS_NAME);
            } else {
                closeAll();
                accordionBlock.classList.add(ACTIVE_CLASS_NAME);
            }
        });
        title.addEventListener('keypress', function (event) {
            if (event.keyCode === 13) {
                var accordionBlock = title.parentElement;
                if (accordionBlock.classList.contains(ACTIVE_CLASS_NAME)) {
                    accordionBlock.classList.remove(ACTIVE_CLASS_NAME);
                } else {
                    closeAll();
                    accordionBlock.classList.add(ACTIVE_CLASS_NAME);
                }
            }
        });
    });
}

accordion(document.querySelector('.accordion'));

/***/ }),

/***/ 346:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

/******/ });