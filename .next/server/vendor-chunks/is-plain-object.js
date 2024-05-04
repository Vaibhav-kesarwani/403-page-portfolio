"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/is-plain-object";
exports.ids = ["vendor-chunks/is-plain-object"];
exports.modules = {

/***/ "(ssr)/./node_modules/is-plain-object/index.js":
/*!***********************************************!*\
  !*** ./node_modules/is-plain-object/index.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("/*!\n * is-plain-object <https://github.com/jonschlinkert/is-plain-object>\n *\n * Copyright (c) 2014-2017, Jon Schlinkert.\n * Released under the MIT License.\n */ \nvar isObject = __webpack_require__(/*! isobject */ \"(ssr)/./node_modules/isobject/index.js\");\nfunction isObjectObject(o) {\n    return isObject(o) === true && Object.prototype.toString.call(o) === \"[object Object]\";\n}\nmodule.exports = function isPlainObject(o) {\n    var ctor, prot;\n    if (isObjectObject(o) === false) return false;\n    // If has modified constructor\n    ctor = o.constructor;\n    if (typeof ctor !== \"function\") return false;\n    // If has modified prototype\n    prot = ctor.prototype;\n    if (isObjectObject(prot) === false) return false;\n    // If constructor does not have an Object-specific method\n    if (prot.hasOwnProperty(\"isPrototypeOf\") === false) {\n        return false;\n    }\n    // Most likely a plain Object\n    return true;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvaXMtcGxhaW4tb2JqZWN0L2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFBOzs7OztDQUtDLEdBRUQ7QUFFQSxJQUFJQSxXQUFXQyxtQkFBT0EsQ0FBQztBQUV2QixTQUFTQyxlQUFlQyxDQUFDO0lBQ3ZCLE9BQU9ILFNBQVNHLE9BQU8sUUFDbEJDLE9BQU9DLFNBQVMsQ0FBQ0MsUUFBUSxDQUFDQyxJQUFJLENBQUNKLE9BQU87QUFDN0M7QUFFQUssT0FBT0MsT0FBTyxHQUFHLFNBQVNDLGNBQWNQLENBQUM7SUFDdkMsSUFBSVEsTUFBS0M7SUFFVCxJQUFJVixlQUFlQyxPQUFPLE9BQU8sT0FBTztJQUV4Qyw4QkFBOEI7SUFDOUJRLE9BQU9SLEVBQUVVLFdBQVc7SUFDcEIsSUFBSSxPQUFPRixTQUFTLFlBQVksT0FBTztJQUV2Qyw0QkFBNEI7SUFDNUJDLE9BQU9ELEtBQUtOLFNBQVM7SUFDckIsSUFBSUgsZUFBZVUsVUFBVSxPQUFPLE9BQU87SUFFM0MseURBQXlEO0lBQ3pELElBQUlBLEtBQUtFLGNBQWMsQ0FBQyxxQkFBcUIsT0FBTztRQUNsRCxPQUFPO0lBQ1Q7SUFFQSw2QkFBNkI7SUFDN0IsT0FBTztBQUNUIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY3JlYXRpdmUtNDA0Ly4vbm9kZV9tb2R1bGVzL2lzLXBsYWluLW9iamVjdC9pbmRleC5qcz9jYmNmIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICogaXMtcGxhaW4tb2JqZWN0IDxodHRwczovL2dpdGh1Yi5jb20vam9uc2NobGlua2VydC9pcy1wbGFpbi1vYmplY3Q+XG4gKlxuICogQ29weXJpZ2h0IChjKSAyMDE0LTIwMTcsIEpvbiBTY2hsaW5rZXJ0LlxuICogUmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnaXNvYmplY3QnKTtcblxuZnVuY3Rpb24gaXNPYmplY3RPYmplY3Qobykge1xuICByZXR1cm4gaXNPYmplY3QobykgPT09IHRydWVcbiAgICAmJiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykgPT09ICdbb2JqZWN0IE9iamVjdF0nO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzUGxhaW5PYmplY3Qobykge1xuICB2YXIgY3Rvcixwcm90O1xuXG4gIGlmIChpc09iamVjdE9iamVjdChvKSA9PT0gZmFsc2UpIHJldHVybiBmYWxzZTtcblxuICAvLyBJZiBoYXMgbW9kaWZpZWQgY29uc3RydWN0b3JcbiAgY3RvciA9IG8uY29uc3RydWN0b3I7XG4gIGlmICh0eXBlb2YgY3RvciAhPT0gJ2Z1bmN0aW9uJykgcmV0dXJuIGZhbHNlO1xuXG4gIC8vIElmIGhhcyBtb2RpZmllZCBwcm90b3R5cGVcbiAgcHJvdCA9IGN0b3IucHJvdG90eXBlO1xuICBpZiAoaXNPYmplY3RPYmplY3QocHJvdCkgPT09IGZhbHNlKSByZXR1cm4gZmFsc2U7XG5cbiAgLy8gSWYgY29uc3RydWN0b3IgZG9lcyBub3QgaGF2ZSBhbiBPYmplY3Qtc3BlY2lmaWMgbWV0aG9kXG4gIGlmIChwcm90Lmhhc093blByb3BlcnR5KCdpc1Byb3RvdHlwZU9mJykgPT09IGZhbHNlKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLy8gTW9zdCBsaWtlbHkgYSBwbGFpbiBPYmplY3RcbiAgcmV0dXJuIHRydWU7XG59O1xuIl0sIm5hbWVzIjpbImlzT2JqZWN0IiwicmVxdWlyZSIsImlzT2JqZWN0T2JqZWN0IiwibyIsIk9iamVjdCIsInByb3RvdHlwZSIsInRvU3RyaW5nIiwiY2FsbCIsIm1vZHVsZSIsImV4cG9ydHMiLCJpc1BsYWluT2JqZWN0IiwiY3RvciIsInByb3QiLCJjb25zdHJ1Y3RvciIsImhhc093blByb3BlcnR5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/is-plain-object/index.js\n");

/***/ })

};
;