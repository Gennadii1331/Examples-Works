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
/******/ 	return __webpack_require__(__webpack_require__.s = 336);
/******/ })
/************************************************************************/
/******/ ({

/***/ 336:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(337);


/***/ }),

/***/ 337:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(338);

var _modalWindow = __webpack_require__(339);

document.querySelector('#btn').addEventListener('click', function () {
    var options = {
        title: 'Hello world',
        content: '<p>Hello Content</p>',
        controls: [{
            text: 'Cancel!',
            callback: function callback() {
                return console.log('Canceled!');
            }
        }, {
            text: 'OK!',
            callback: function callback() {
                return console.log('CONFIRMED!');
            }
        }]
    };
    _modalWindow.modalWindow.show(options);
});

setTimeout(function () {
    var options = {
        title: 'Hello world',
        content: '<p>Hello Content</p>',
        controls: []
    };
    _modalWindow.modalWindow.show(options);
});

/***/ }),

/***/ 338:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 339:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.modalWindow = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(340);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SHOWED_CLASS_NAME = 'visible';
var MODAL_WINDOW_CLASS_NAME = 'modal';
var OVERLAY_CLASS_NAME = 'modal__overlay';
var CONTENT_CLASS_NAME = 'modal__content';
var MODAL_TITLE_CLASSNAME = 'modal__title';
var MODAL_MAIN_CLASSNAME = 'modal__main';
var MODAL_CONTROLS_CLASSNAME = 'modal__controls';
var MODAL_CANCEL_CLASSNAME = 'modal__cancel';
var MODAL_CONFIRM_CLASSNAME = 'modal__confirm';
var MODAL_CONTROL_CLASSNAME = 'modal__control';

var CONTENT_TEMPLATE = '\n  <h1 class="' + MODAL_TITLE_CLASSNAME + '"></h1> \n  <div class="' + MODAL_MAIN_CLASSNAME + '"></div> \n  <div class="' + MODAL_CONTROLS_CLASSNAME + '">\n    <button class="' + MODAL_CANCEL_CLASSNAME + ' ' + MODAL_CONTROL_CLASSNAME + '"></button>\n    <button class="' + MODAL_CONFIRM_CLASSNAME + ' ' + MODAL_CONTROL_CLASSNAME + '"></button>\n  </div> \n';

var ModalWindow = function () {
    function ModalWindow(rootElement) {
        _classCallCheck(this, ModalWindow);

        this.rootElement = rootElement;

        this.render();
    }
    /**
     * @param {Object} options
     * @param {string|undefined} options.title
     * @param {string|undefined} options.content
     * @param {Array|undefined} options.controls
     * @param {object} options.controls
     * @param {string} options.controls.cancel.text
     * @param {function} options.controls.cancel.callback
     * @param {object} options.controls
     * @param {string} options.controls.confirm.text
     * @param {function} options.controls.confirm.callback
     * */


    _createClass(ModalWindow, [{
        key: 'show',
        value: function show(options) {
            var _this = this;

            if (options.title) {
                var title = this.content.querySelector('.' + MODAL_TITLE_CLASSNAME);
                title.innerHTML = options.title;
                title.classList.add(MODAL_TITLE_CLASSNAME + '_visible');
            }

            if (options.content) {
                var content = this.content.querySelector('.' + MODAL_MAIN_CLASSNAME);
                content.innerHTML = options.content;
            }

            if (options.controls && options.controls.length > 0) {
                var controlsWrapper = this.content.querySelector('.' + MODAL_CONTROLS_CLASSNAME);
                controlsWrapper.classList.add(MODAL_CONTROLS_CLASSNAME + '_visible');

                var controls = this.content.querySelectorAll('.' + MODAL_CONTROL_CLASSNAME);
                controls.forEach(function (control, i) {
                    control.innerHTML = options.controls[i].text;
                    control.onclick = function () {
                        _this.hide();
                        options.controls[i].callback();
                    };
                });
            }

            this.rootElement.classList.add(SHOWED_CLASS_NAME);
        }
    }, {
        key: 'hide',
        value: function hide() {
            this.rootElement.classList.remove(SHOWED_CLASS_NAME);
        }
    }, {
        key: 'render',
        value: function render() {
            this.rootElement.classList.add(MODAL_WINDOW_CLASS_NAME);

            this.renderOverlay();
            this.renderContent();
        }
    }, {
        key: 'renderOverlay',
        value: function renderOverlay() {
            var _this2 = this;

            this.overlay = document.createElement('div');
            this.overlay.classList.add(OVERLAY_CLASS_NAME);

            this.overlay.addEventListener('click', function () {
                return _this2.hide();
            });

            this.rootElement.appendChild(this.overlay);
        }
    }, {
        key: 'renderContent',
        value: function renderContent() {
            this.content = document.createElement('div');

            this.content.classList.add(CONTENT_CLASS_NAME);
            this.content.innerHTML = CONTENT_TEMPLATE;

            this.rootElement.appendChild(this.content);
        }
    }]);

    return ModalWindow;
}();

var modalWindow = new ModalWindow(document.querySelector('#appModalContainer')); // singleton

exports.modalWindow = modalWindow;

/***/ }),

/***/ 340:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

/******/ });