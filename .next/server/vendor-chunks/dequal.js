"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/dequal";
exports.ids = ["vendor-chunks/dequal"];
exports.modules = {

/***/ "(ssr)/./node_modules/dequal/lite/index.mjs":
/*!********************************************!*\
  !*** ./node_modules/dequal/lite/index.mjs ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   dequal: () => (/* binding */ dequal)\n/* harmony export */ });\nvar has = Object.prototype.hasOwnProperty;\nfunction dequal(foo, bar) {\n    var ctor, len;\n    if (foo === bar) return true;\n    if (foo && bar && (ctor = foo.constructor) === bar.constructor) {\n        if (ctor === Date) return foo.getTime() === bar.getTime();\n        if (ctor === RegExp) return foo.toString() === bar.toString();\n        if (ctor === Array) {\n            if ((len = foo.length) === bar.length) {\n                while(len-- && dequal(foo[len], bar[len]));\n            }\n            return len === -1;\n        }\n        if (!ctor || typeof foo === \"object\") {\n            len = 0;\n            for(ctor in foo){\n                if (has.call(foo, ctor) && ++len && !has.call(bar, ctor)) return false;\n                if (!(ctor in bar) || !dequal(foo[ctor], bar[ctor])) return false;\n            }\n            return Object.keys(bar).length === len;\n        }\n    }\n    return foo !== foo && bar !== bar;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvZGVxdWFsL2xpdGUvaW5kZXgubWpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSxJQUFJQSxNQUFNQyxPQUFPQyxTQUFTLENBQUNDLGNBQWM7QUFFbEMsU0FBU0MsT0FBT0MsR0FBRyxFQUFFQyxHQUFHO0lBQzlCLElBQUlDLE1BQU1DO0lBQ1YsSUFBSUgsUUFBUUMsS0FBSyxPQUFPO0lBRXhCLElBQUlELE9BQU9DLE9BQU8sQ0FBQ0MsT0FBS0YsSUFBSUksV0FBVyxNQUFNSCxJQUFJRyxXQUFXLEVBQUU7UUFDN0QsSUFBSUYsU0FBU0csTUFBTSxPQUFPTCxJQUFJTSxPQUFPLE9BQU9MLElBQUlLLE9BQU87UUFDdkQsSUFBSUosU0FBU0ssUUFBUSxPQUFPUCxJQUFJUSxRQUFRLE9BQU9QLElBQUlPLFFBQVE7UUFFM0QsSUFBSU4sU0FBU08sT0FBTztZQUNuQixJQUFJLENBQUNOLE1BQUlILElBQUlVLE1BQU0sTUFBTVQsSUFBSVMsTUFBTSxFQUFFO2dCQUNwQyxNQUFPUCxTQUFTSixPQUFPQyxHQUFHLENBQUNHLElBQUksRUFBRUYsR0FBRyxDQUFDRSxJQUFJO1lBQzFDO1lBQ0EsT0FBT0EsUUFBUSxDQUFDO1FBQ2pCO1FBRUEsSUFBSSxDQUFDRCxRQUFRLE9BQU9GLFFBQVEsVUFBVTtZQUNyQ0csTUFBTTtZQUNOLElBQUtELFFBQVFGLElBQUs7Z0JBQ2pCLElBQUlMLElBQUlnQixJQUFJLENBQUNYLEtBQUtFLFNBQVMsRUFBRUMsT0FBTyxDQUFDUixJQUFJZ0IsSUFBSSxDQUFDVixLQUFLQyxPQUFPLE9BQU87Z0JBQ2pFLElBQUksQ0FBRUEsQ0FBQUEsUUFBUUQsR0FBRSxLQUFNLENBQUNGLE9BQU9DLEdBQUcsQ0FBQ0UsS0FBSyxFQUFFRCxHQUFHLENBQUNDLEtBQUssR0FBRyxPQUFPO1lBQzdEO1lBQ0EsT0FBT04sT0FBT2dCLElBQUksQ0FBQ1gsS0FBS1MsTUFBTSxLQUFLUDtRQUNwQztJQUNEO0lBRUEsT0FBT0gsUUFBUUEsT0FBT0MsUUFBUUE7QUFDL0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jcmVhdGl2ZS00MDQvLi9ub2RlX21vZHVsZXMvZGVxdWFsL2xpdGUvaW5kZXgubWpzP2I5NWUiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIGhhcyA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG5cbmV4cG9ydCBmdW5jdGlvbiBkZXF1YWwoZm9vLCBiYXIpIHtcblx0dmFyIGN0b3IsIGxlbjtcblx0aWYgKGZvbyA9PT0gYmFyKSByZXR1cm4gdHJ1ZTtcblxuXHRpZiAoZm9vICYmIGJhciAmJiAoY3Rvcj1mb28uY29uc3RydWN0b3IpID09PSBiYXIuY29uc3RydWN0b3IpIHtcblx0XHRpZiAoY3RvciA9PT0gRGF0ZSkgcmV0dXJuIGZvby5nZXRUaW1lKCkgPT09IGJhci5nZXRUaW1lKCk7XG5cdFx0aWYgKGN0b3IgPT09IFJlZ0V4cCkgcmV0dXJuIGZvby50b1N0cmluZygpID09PSBiYXIudG9TdHJpbmcoKTtcblxuXHRcdGlmIChjdG9yID09PSBBcnJheSkge1xuXHRcdFx0aWYgKChsZW49Zm9vLmxlbmd0aCkgPT09IGJhci5sZW5ndGgpIHtcblx0XHRcdFx0d2hpbGUgKGxlbi0tICYmIGRlcXVhbChmb29bbGVuXSwgYmFyW2xlbl0pKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBsZW4gPT09IC0xO1xuXHRcdH1cblxuXHRcdGlmICghY3RvciB8fCB0eXBlb2YgZm9vID09PSAnb2JqZWN0Jykge1xuXHRcdFx0bGVuID0gMDtcblx0XHRcdGZvciAoY3RvciBpbiBmb28pIHtcblx0XHRcdFx0aWYgKGhhcy5jYWxsKGZvbywgY3RvcikgJiYgKytsZW4gJiYgIWhhcy5jYWxsKGJhciwgY3RvcikpIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWYgKCEoY3RvciBpbiBiYXIpIHx8ICFkZXF1YWwoZm9vW2N0b3JdLCBiYXJbY3Rvcl0pKSByZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gT2JqZWN0LmtleXMoYmFyKS5sZW5ndGggPT09IGxlbjtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gZm9vICE9PSBmb28gJiYgYmFyICE9PSBiYXI7XG59XG4iXSwibmFtZXMiOlsiaGFzIiwiT2JqZWN0IiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJkZXF1YWwiLCJmb28iLCJiYXIiLCJjdG9yIiwibGVuIiwiY29uc3RydWN0b3IiLCJEYXRlIiwiZ2V0VGltZSIsIlJlZ0V4cCIsInRvU3RyaW5nIiwiQXJyYXkiLCJsZW5ndGgiLCJjYWxsIiwia2V5cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/dequal/lite/index.mjs\n");

/***/ })

};
;