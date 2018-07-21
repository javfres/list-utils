/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"app": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _jquery = __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\");\n\nvar _jquery2 = _interopRequireDefault(_jquery);\n\nvar _lodash = __webpack_require__(/*! lodash */ \"./node_modules/lodash/lodash.js\");\n\nvar _lodash2 = _interopRequireDefault(_lodash);\n\nvar _pad = __webpack_require__(/*! ./js/pad */ \"./src/js/pad.js\");\n\nvar _pad2 = _interopRequireDefault(_pad);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nwindow.$ = _jquery2.default;\n\nwindow._ = _lodash2.default;\n\nvar textarea = $('#textarea');\n\nfunction get_words() {\n\tvar text = textarea.val().trim();\n\tvar words = text.replace(/\\s+/g, \" \").split(\" \");\n\treturn words;\n}\n\n$('#a_random_names').click(function () {\n\tvar names = \"Eugene Zack\\tFred\\tSteve\\tRoy\\tLarry Zack\\n\\tRuby\\n\\tMary\\tMelissa Judy\\tTheresa\\tNicole\\t\";\n\ttextarea.val(names);\n});\n\n$('#a_random_table').click(function () {\n\tvar table = \"Person\\tRank\\tValue\\n\\tEugene\\t2\\t233232\\n\\tMelissa\\t3\\t232323\\n\\tZack\\t5\\t3\\n\\tFred\\t1\\t-2323\\n\\tNicole\\tB\\tnot valid\";\n\ttextarea.val(table);\n});\n\n//\n// Words to the same line\n//\n$('#b_sameline').click(function () {\n\n\tvar words = get_words();\n\tvar result = words.join(\" \");\n\n\ttextarea.val(result);\n});\n\n//\n// Words in a column\n//\n$('#b_incolumn').click(function () {\n\n\tvar words = get_words();\n\tvar result = words.join(\"\\n\");\n\n\ttextarea.val(result);\n});\n\n//\n// To sql format\n//\n$('#b_tosql').click(function () {\n\n\tvar words = get_words();\n\twords = words.map(function (w) {\n\t\treturn \"'\" + w + \"'\";\n\t});\n\n\tvar result = words.join(\",\");\n\ttextarea.val(result);\n});\n\n//\n// Parse sql format\n//\n$('#b_fromsql').click(function () {\n\n\tvar text = textarea.val().trim();\n\tvar words = text.split(\",\");\n\n\twords = words.map(function (w) {\n\t\treturn w.trim().replace(/^'(.+(?='$))'$/, '$1');\n\t});\n\n\tvar result = words.join(\" \");\n\ttextarea.val(result);\n});\n\n//\n// Sort\n//\n$('#b_sort').click(function () {\n\n\tvar words = get_words();\n\twords.sort();\n\n\tvar result = words.join(\"\\n\");\n\ttextarea.val(result);\n});\n\n//\n// Filter unique\n//\n$('#b_unique').click(function () {\n\n\tvar words = get_words();\n\n\tvar unique = [];\n\t$.each(words, function (i, el) {\n\t\tif ($.inArray(el, unique) === -1) unique.push(el);\n\t});\n\n\tvar result = unique.join(\"\\n\");\n\n\ttextarea.val(result);\n});\n\n//\n// Format as a txt table\n//\n$('#b_tabs2table').click(function () {\n\n\t// Take the row\n\tvar text = textarea.val().trim();\n\tvar rows = text.split(\"\\n\");\n\n\t// Calculate the colsize\n\tvar colsize = [];\n\n\trows = rows.map(function (r) {\n\t\treturn r.trim().split('\\t');\n\t});\n\n\trows.map(function (r) {\n\t\tr.map(function (c, i) {\n\t\t\tvar cl = c.length;\n\t\t\tcolsize[i] = !colsize[i] ? cl : Math.max(colsize[i], cl);\n\t\t});\n\t});\n\n\t// Build the result\n\tvar result = '';\n\n\trows.map(function (row) {\n\t\tvar trow = row.map(function (col, i) {\n\t\t\treturn (0, _pad2.default)(col, colsize[i]);\n\t\t});\n\n\t\tresult += trow.join(' | ') + '\\n';\n\t});\n\n\ttextarea.val(result);\n});\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/app.scss":
/*!**********************!*\
  !*** ./src/app.scss ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./src/app.scss?");

/***/ }),

/***/ "./src/index.html":
/*!************************!*\
  !*** ./src/index.html ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"index.html\";\n\n//# sourceURL=webpack:///./src/index.html?");

/***/ }),

/***/ "./src/js/pad.js":
/*!***********************!*\
  !*** ./src/js/pad.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.default = pad;\n\n\nvar STR_PAD_LEFT = 1;\nvar STR_PAD_RIGHT = 2;\nvar STR_PAD_BOTH = 3;\n\nfunction pad(str) {\n    var len = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;\n    var pad = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : ' ';\n    var dir = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : STR_PAD_RIGHT;\n\n\n    if (len + 1 >= str.length) {\n\n        switch (dir) {\n\n            case STR_PAD_LEFT:\n                str = Array(len + 1 - str.length).join(pad) + str;\n                break;\n\n            case STR_PAD_BOTH:\n                var right = Math.ceil((padlen = len - str.length) / 2);\n                var left = padlen - right;\n                str = Array(left + 1).join(pad) + str + Array(right + 1).join(pad);\n                break;\n\n            default:\n                str = str + Array(len + 1 - str.length).join(pad);\n                break;\n\n        } // switch\n    }\n\n    return str;\n}\n\n//# sourceURL=webpack:///./src/js/pad.js?");

/***/ }),

/***/ 0:
/*!**********************************************************!*\
  !*** multi ./src/app.scss ./src/app.js ./src/index.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./src/app.scss */\"./src/app.scss\");\n__webpack_require__(/*! ./src/app.js */\"./src/app.js\");\nmodule.exports = __webpack_require__(/*! ./src/index.html */\"./src/index.html\");\n\n\n//# sourceURL=webpack:///multi_./src/app.scss_./src/app.js_./src/index.html?");

/***/ })

/******/ });