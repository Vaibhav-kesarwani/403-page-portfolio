"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/attr-accept";
exports.ids = ["vendor-chunks/attr-accept"];
exports.modules = {

/***/ "(ssr)/./node_modules/attr-accept/dist/es/index.js":
/*!***************************************************!*\
  !*** ./node_modules/attr-accept/dist/es/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nexports.__esModule = true;\nexports[\"default\"] = function(file, acceptedFiles) {\n    if (file && acceptedFiles) {\n        var acceptedFilesArray = Array.isArray(acceptedFiles) ? acceptedFiles : acceptedFiles.split(\",\");\n        var fileName = file.name || \"\";\n        var mimeType = (file.type || \"\").toLowerCase();\n        var baseMimeType = mimeType.replace(/\\/.*$/, \"\");\n        return acceptedFilesArray.some(function(type) {\n            var validType = type.trim().toLowerCase();\n            if (validType.charAt(0) === \".\") {\n                return fileName.toLowerCase().endsWith(validType);\n            } else if (validType.endsWith(\"/*\")) {\n                // This is something like a image/* mime type\n                return baseMimeType === validType.replace(/\\/.*$/, \"\");\n            }\n            return mimeType === validType;\n        });\n    }\n    return true;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvYXR0ci1hY2NlcHQvZGlzdC9lcy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiQUFBYTtBQUViQSxrQkFBa0IsR0FBRztBQUVyQkEsa0JBQWUsR0FBRyxTQUFVRyxJQUFJLEVBQUVDLGFBQWE7SUFDN0MsSUFBSUQsUUFBUUMsZUFBZTtRQUN6QixJQUFJQyxxQkFBcUJDLE1BQU1DLE9BQU8sQ0FBQ0gsaUJBQWlCQSxnQkFBZ0JBLGNBQWNJLEtBQUssQ0FBQztRQUM1RixJQUFJQyxXQUFXTixLQUFLTyxJQUFJLElBQUk7UUFDNUIsSUFBSUMsV0FBVyxDQUFDUixLQUFLUyxJQUFJLElBQUksRUFBQyxFQUFHQyxXQUFXO1FBQzVDLElBQUlDLGVBQWVILFNBQVNJLE9BQU8sQ0FBQyxTQUFTO1FBQzdDLE9BQU9WLG1CQUFtQlcsSUFBSSxDQUFDLFNBQVVKLElBQUk7WUFDM0MsSUFBSUssWUFBWUwsS0FBS00sSUFBSSxHQUFHTCxXQUFXO1lBRXZDLElBQUlJLFVBQVVFLE1BQU0sQ0FBQyxPQUFPLEtBQUs7Z0JBQy9CLE9BQU9WLFNBQVNJLFdBQVcsR0FBR08sUUFBUSxDQUFDSDtZQUN6QyxPQUFPLElBQUlBLFVBQVVHLFFBQVEsQ0FBQyxPQUFPO2dCQUNuQyw2Q0FBNkM7Z0JBQzdDLE9BQU9OLGlCQUFpQkcsVUFBVUYsT0FBTyxDQUFDLFNBQVM7WUFDckQ7WUFFQSxPQUFPSixhQUFhTTtRQUN0QjtJQUNGO0lBRUEsT0FBTztBQUNUIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY3JlYXRpdmUtNDA0Ly4vbm9kZV9tb2R1bGVzL2F0dHItYWNjZXB0L2Rpc3QvZXMvaW5kZXguanM/NzE2NCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKGZpbGUsIGFjY2VwdGVkRmlsZXMpIHtcbiAgaWYgKGZpbGUgJiYgYWNjZXB0ZWRGaWxlcykge1xuICAgIHZhciBhY2NlcHRlZEZpbGVzQXJyYXkgPSBBcnJheS5pc0FycmF5KGFjY2VwdGVkRmlsZXMpID8gYWNjZXB0ZWRGaWxlcyA6IGFjY2VwdGVkRmlsZXMuc3BsaXQoJywnKTtcbiAgICB2YXIgZmlsZU5hbWUgPSBmaWxlLm5hbWUgfHwgJyc7XG4gICAgdmFyIG1pbWVUeXBlID0gKGZpbGUudHlwZSB8fCAnJykudG9Mb3dlckNhc2UoKTtcbiAgICB2YXIgYmFzZU1pbWVUeXBlID0gbWltZVR5cGUucmVwbGFjZSgvXFwvLiokLywgJycpO1xuICAgIHJldHVybiBhY2NlcHRlZEZpbGVzQXJyYXkuc29tZShmdW5jdGlvbiAodHlwZSkge1xuICAgICAgdmFyIHZhbGlkVHlwZSA9IHR5cGUudHJpbSgpLnRvTG93ZXJDYXNlKCk7XG5cbiAgICAgIGlmICh2YWxpZFR5cGUuY2hhckF0KDApID09PSAnLicpIHtcbiAgICAgICAgcmV0dXJuIGZpbGVOYW1lLnRvTG93ZXJDYXNlKCkuZW5kc1dpdGgodmFsaWRUeXBlKTtcbiAgICAgIH0gZWxzZSBpZiAodmFsaWRUeXBlLmVuZHNXaXRoKCcvKicpKSB7XG4gICAgICAgIC8vIFRoaXMgaXMgc29tZXRoaW5nIGxpa2UgYSBpbWFnZS8qIG1pbWUgdHlwZVxuICAgICAgICByZXR1cm4gYmFzZU1pbWVUeXBlID09PSB2YWxpZFR5cGUucmVwbGFjZSgvXFwvLiokLywgJycpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gbWltZVR5cGUgPT09IHZhbGlkVHlwZTtcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufTsiXSwibmFtZXMiOlsiZXhwb3J0cyIsIl9fZXNNb2R1bGUiLCJkZWZhdWx0IiwiZmlsZSIsImFjY2VwdGVkRmlsZXMiLCJhY2NlcHRlZEZpbGVzQXJyYXkiLCJBcnJheSIsImlzQXJyYXkiLCJzcGxpdCIsImZpbGVOYW1lIiwibmFtZSIsIm1pbWVUeXBlIiwidHlwZSIsInRvTG93ZXJDYXNlIiwiYmFzZU1pbWVUeXBlIiwicmVwbGFjZSIsInNvbWUiLCJ2YWxpZFR5cGUiLCJ0cmltIiwiY2hhckF0IiwiZW5kc1dpdGgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/attr-accept/dist/es/index.js\n");

/***/ })

};
;