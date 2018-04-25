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
/******/ 	return __webpack_require__(__webpack_require__.s = 347);
/******/ })
/************************************************************************/
/******/ ({

/***/ 347:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(348);


/***/ }),

/***/ 348:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(349);

var _lighterBox = __webpack_require__(350);

document.querySelector('#btn-creator').addEventListener('click', function () {
    _lighterBox.lighter.render();
    _lighterBox.lighter.lighterSettings();
});

/***/ }),

/***/ 349:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 350:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.lighter = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(351);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ACTIVE_CLASS_NAME = 'active';
var DEACTIVE_TOOGL_CLASSNAME = 'deactivator';
var LIGHTER_BOX_CLASS_NAME = 'lighter-box';
var LIGHTERS_CLASS_NAME = 'lighters';
var LIGHTERS_TOOGL_CLASSNAME = 'lighters__toogl';
var LIGHTERS_LIGHT_CLASSNAME = 'lighters__light';

var CONTENT_TEMPLATE = ' \n    <div class="' + LIGHTERS_CLASS_NAME + '">\n        <button class="' + LIGHTERS_TOOGL_CLASSNAME + '"></button>\n        <div class="' + LIGHTERS_LIGHT_CLASSNAME + '"></div>\n    </div> \n';

var Lighter = function () {
    function Lighter(rootElement) {
        _classCallCheck(this, Lighter);

        this.rootElement = rootElement;

        this.render();
        this.lighterSettings();
    }

    _createClass(Lighter, [{
        key: 'render',
        value: function render() {
            this.rootElement.classList.add(LIGHTER_BOX_CLASS_NAME);

            this.renderLighter();
        }
    }, {
        key: 'renderLighter',
        value: function renderLighter() {
            this.lighter = document.createElement('div');

            this.lighter.classList.add(LIGHTERS_CLASS_NAME);
            this.lighter.innerHTML = CONTENT_TEMPLATE;

            this.rootElement.appendChild(this.lighter);
        }
    }, {
        key: 'lighterSettings',
        value: function lighterSettings() {
            var btnSwitch = this.lighter.querySelector('.' + LIGHTERS_TOOGL_CLASSNAME);
            var btnOff = document.querySelector('.' + DEACTIVE_TOOGL_CLASSNAME);
            var lamp = this.lighter.querySelector('.' + LIGHTERS_LIGHT_CLASSNAME);
            btnSwitch.innerText = 'OFF';
            var isOn = lamp.classList.contains('active');

            function On() {
                lamp.classList.add('active');
                isOn = true;
                btnSwitch.innerText = 'ON';
            }

            function Off() {
                lamp.classList.remove('active');
                isOn = false;
                btnSwitch.innerText = 'OFF';
            }

            function toggleBtn() {
                if (isOn) {
                    Off();
                } else {
                    On();
                }
            }
            btnSwitch.addEventListener('click', function (eventObject) {
                eventObject.stopPropagation();
                toggleBtn();
            });
            btnOff.addEventListener('click', function (eventObject) {
                eventObject.stopPropagation();
                Off();
            });
        }
    }]);

    return Lighter;
}();

var lighter = new Lighter(document.querySelector('#appLighterBox'));

exports.lighter = lighter;

/***/ }),

/***/ 351:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

/******/ });