"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/components/Model.jsx":
/*!**********************************!*\
  !*** ./src/components/Model.jsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Model; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _react_three_drei__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @react-three/drei */ \"(app-pages-browser)/./node_modules/@react-three/drei/core/useGLTF.js\");\n/* harmony import */ var _react_three_drei__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @react-three/drei */ \"(app-pages-browser)/./node_modules/@react-three/drei/core/Text.js\");\n/* harmony import */ var _react_three_drei__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @react-three/drei */ \"(app-pages-browser)/./node_modules/@react-three/drei/core/Float.js\");\n/* harmony import */ var _react_three_drei__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @react-three/drei */ \"(app-pages-browser)/./node_modules/@react-three/drei/core/MeshTransmissionMaterial.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _react_three_fiber__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @react-three/fiber */ \"(app-pages-browser)/./node_modules/@react-three/fiber/dist/index-8afac004.esm.js\");\n/* harmony import */ var leva__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! leva */ \"(app-pages-browser)/./node_modules/leva/dist/leva.esm.js\");\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\n\n\nfunction Model() {\n    _s();\n    const { viewport } = (0,_react_three_fiber__WEBPACK_IMPORTED_MODULE_3__.A)();\n    const { nodes } = (0,_react_three_drei__WEBPACK_IMPORTED_MODULE_4__.useGLTF)(\"/medias/shards.glb\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"group\", {\n        scale: viewport.width / 1.5,\n        children: [\n            nodes.Scene.children.map((mesh, i)=>{\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Mesh, {\n                    data: mesh\n                }, i, false, {\n                    fileName: \"/home/vaibhav/Desktop/404-page-portfolio/src/components/Model.jsx\",\n                    lineNumber: 14,\n                    columnNumber: 32\n                }, this);\n            }),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Font, {}, void 0, false, {\n                fileName: \"/home/vaibhav/Desktop/404-page-portfolio/src/components/Model.jsx\",\n                lineNumber: 17,\n                columnNumber: 17\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/vaibhav/Desktop/404-page-portfolio/src/components/Model.jsx\",\n        lineNumber: 11,\n        columnNumber: 13\n    }, this);\n}\n_s(Model, \"4n5aGP+J1DlixBPGYHaoFuC2EaA=\", false, function() {\n    return [\n        _react_three_fiber__WEBPACK_IMPORTED_MODULE_3__.A,\n        _react_three_drei__WEBPACK_IMPORTED_MODULE_4__.useGLTF\n    ];\n});\n_c = Model;\nfunction Font() {\n    const src = \"/fonts/PPNeueMontreal-Bold.otf\";\n    const textOption = {\n        color: \"white\",\n        anchorX: \"center\",\n        anchorY: \"middle\"\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"group\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_three_drei__WEBPACK_IMPORTED_MODULE_5__.Text, {\n                font: src,\n                position: [\n                    0,\n                    0,\n                    -.1\n                ],\n                fontSize: 0.4,\n                ...textOption,\n                children: \"404\"\n            }, void 0, false, {\n                fileName: \"/home/vaibhav/Desktop/404-page-portfolio/src/components/Model.jsx\",\n                lineNumber: 31,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_three_drei__WEBPACK_IMPORTED_MODULE_5__.Text, {\n                font: src,\n                position: [\n                    0,\n                    -.15,\n                    -.1\n                ],\n                fontSize: 0.03,\n                ...textOption,\n                children: \"The link is broken\"\n            }, void 0, false, {\n                fileName: \"/home/vaibhav/Desktop/404-page-portfolio/src/components/Model.jsx\",\n                lineNumber: 34,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"mesh\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"sphereGeometry\", {\n                        args: [\n                            0.1,\n                            16,\n                            16\n                        ]\n                    }, void 0, false, {\n                        fileName: \"/home/vaibhav/Desktop/404-page-portfolio/src/components/Model.jsx\",\n                        lineNumber: 38,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meshStandardMaterial\", {}, void 0, false, {\n                        fileName: \"/home/vaibhav/Desktop/404-page-portfolio/src/components/Model.jsx\",\n                        lineNumber: 39,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactThreeFiber.Canvas, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(a.primitive, {\n                            object: new THREE.Html(),\n                            href: \"/\",\n                            style: {\n                                display: \"block\",\n                                width: \"48px\",\n                                height: \"48px\",\n                                backgroundColor: \"#0000ff\",\n                                color: \"#ffffff\",\n                                textAlign: \"center\",\n                                fontSize: \"16px\",\n                                lineHeight: \"48px\",\n                                cursor: \"pointer\"\n                            },\n                            children: \"Home\"\n                        }, void 0, false, {\n                            fileName: \"/home/vaibhav/Desktop/404-page-portfolio/src/components/Model.jsx\",\n                            lineNumber: 42,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/vaibhav/Desktop/404-page-portfolio/src/components/Model.jsx\",\n                        lineNumber: 41,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/vaibhav/Desktop/404-page-portfolio/src/components/Model.jsx\",\n                lineNumber: 37,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/vaibhav/Desktop/404-page-portfolio/src/components/Model.jsx\",\n        lineNumber: 30,\n        columnNumber: 9\n    }, this);\n}\n_c1 = Font;\nfunction Mesh(param) {\n    let { data } = param;\n    _s1();\n    const materialProps = (0,leva__WEBPACK_IMPORTED_MODULE_2__.useControls)({\n        thickness: {\n            value: 0.275,\n            min: 0,\n            max: 1,\n            step: 0.01\n        },\n        ior: {\n            value: 1.8,\n            min: 0,\n            max: 3,\n            step: 0.1\n        },\n        chromaticAberration: {\n            value: 0.75,\n            min: 0,\n            max: 1\n        },\n        resolution: {\n            value: 300\n        }\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_three_drei__WEBPACK_IMPORTED_MODULE_6__.Float, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"mesh\", {\n            ...data,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_three_drei__WEBPACK_IMPORTED_MODULE_7__.MeshTransmissionMaterial, {\n                roughness: 0,\n                transmission: 0.99,\n                ...materialProps\n            }, void 0, false, {\n                fileName: \"/home/vaibhav/Desktop/404-page-portfolio/src/components/Model.jsx\",\n                lineNumber: 71,\n                columnNumber: 17\n            }, this)\n        }, void 0, false, {\n            fileName: \"/home/vaibhav/Desktop/404-page-portfolio/src/components/Model.jsx\",\n            lineNumber: 70,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/vaibhav/Desktop/404-page-portfolio/src/components/Model.jsx\",\n        lineNumber: 69,\n        columnNumber: 9\n    }, this);\n}\n_s1(Mesh, \"D7ag7TRszUAk+HLPf6z1soC9Bz4=\", false, function() {\n    return [\n        leva__WEBPACK_IMPORTED_MODULE_2__.useControls\n    ];\n});\n_c2 = Mesh;\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"Model\");\n$RefreshReg$(_c1, \"Font\");\n$RefreshReg$(_c2, \"Mesh\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL01vZGVsLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBa0Y7QUFDekQ7QUFDb0I7QUFDWDtBQUVuQixTQUFTTzs7SUFDcEIsTUFBTSxFQUFFQyxRQUFRLEVBQUUsR0FBR0gscURBQVFBO0lBQzdCLE1BQU0sRUFBRUksS0FBSyxFQUFFLEdBQUdULDBEQUFPQSxDQUFDO0lBRTFCLHFCQUNRLDhEQUFDVTtRQUFNQyxPQUFPSCxTQUFTSSxLQUFLLEdBQUc7O1lBRXZCSCxNQUFNSSxLQUFLLENBQUNDLFFBQVEsQ0FBQ0MsR0FBRyxDQUFFLENBQUNDLE1BQU1DO2dCQUM3QixxQkFBTyw4REFBQ0M7b0JBQUtDLE1BQU1IO21CQUFXQzs7Ozs7WUFDbEM7MEJBRUosOERBQUNHOzs7Ozs7Ozs7OztBQUdqQjtHQWR3QmI7O1FBQ0NGLGlEQUFRQTtRQUNYTCxzREFBT0E7OztLQUZMTztBQWdCeEIsU0FBU2E7SUFDTCxNQUFNQyxNQUFNO0lBQ1osTUFBTUMsYUFBYTtRQUNmQyxPQUFPO1FBQ1BDLFNBQVM7UUFDVEMsU0FBUztJQUNiO0lBQ0EscUJBQ0ksOERBQUNmOzswQkFDRyw4REFBQ1QsbURBQUlBO2dCQUFDeUIsTUFBTUw7Z0JBQUtNLFVBQVU7b0JBQUM7b0JBQUc7b0JBQUcsQ0FBQztpQkFBRztnQkFBRUMsVUFBVTtnQkFBTSxHQUFHTixVQUFVOzBCQUFFOzs7Ozs7MEJBR3ZFLDhEQUFDckIsbURBQUlBO2dCQUFDeUIsTUFBTUw7Z0JBQUtNLFVBQVU7b0JBQUM7b0JBQUcsQ0FBQztvQkFBSyxDQUFDO2lCQUFHO2dCQUFFQyxVQUFVO2dCQUFPLEdBQUdOLFVBQVU7MEJBQUU7Ozs7OzswQkFHM0UsOERBQUNOOztrQ0FDRyw4REFBQ2E7d0JBQWVDLE1BQU07NEJBQUM7NEJBQUs7NEJBQUk7eUJBQUc7Ozs7OztrQ0FDbkMsOERBQUNDOzs7OztrQ0FFRCw4REFBQ0MsZ0JBQWdCQyxNQUFNO2tDQUNuQiw0RUFBQ0MsRUFBRUMsU0FBUzs0QkFBQ0MsUUFBUSxJQUFJQyxNQUFNQyxJQUFJOzRCQUFJQyxNQUFLOzRCQUFJQyxPQUFPO2dDQUNuREMsU0FBUztnQ0FDVDdCLE9BQU87Z0NBQ1A4QixRQUFRO2dDQUNSQyxpQkFBaUI7Z0NBQ2pCcEIsT0FBTztnQ0FDUHFCLFdBQVc7Z0NBQ1hoQixVQUFVO2dDQUNWaUIsWUFBWTtnQ0FDWkMsUUFBUTs0QkFDWjtzQ0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLdkI7TUFuQ1MxQjtBQXFDVCxTQUFTRixLQUFLLEtBQU07UUFBTixFQUFDQyxJQUFJLEVBQUMsR0FBTjs7SUFFVixNQUFNNEIsZ0JBQWdCekMsaURBQVdBLENBQUM7UUFDOUIwQyxXQUFXO1lBQUVDLE9BQU87WUFBT0MsS0FBSztZQUFHQyxLQUFLO1lBQUdDLE1BQU07UUFBSztRQUN0REMsS0FBSztZQUFFSixPQUFPO1lBQUtDLEtBQUs7WUFBR0MsS0FBSztZQUFHQyxNQUFNO1FBQUk7UUFDN0NFLHFCQUFxQjtZQUFFTCxPQUFPO1lBQU1DLEtBQUs7WUFBR0MsS0FBSztRQUFDO1FBQ2xESSxZQUFZO1lBQUNOLE9BQU87UUFBRztJQUMzQjtJQUVBLHFCQUNJLDhEQUFDL0Msb0RBQUtBO2tCQUNGLDRFQUFDYztZQUFNLEdBQUdHLElBQUk7c0JBQ1YsNEVBQUNoQix1RUFBd0JBO2dCQUFDcUQsV0FBVztnQkFBR0MsY0FBYztnQkFBTyxHQUFHVixhQUFhOzs7Ozs7Ozs7Ozs7Ozs7O0FBSTdGO0lBaEJTN0I7O1FBRWlCWiw2Q0FBV0E7OztNQUY1QlkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTW9kZWwuanN4P2MwZmMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlR0xURiwgVGV4dCwgRmxvYXQsIE1lc2hUcmFuc21pc3Npb25NYXRlcmlhbCB9IGZyb20gJ0ByZWFjdC10aHJlZS9kcmVpJ1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlVGhyZWUgfSBmcm9tICdAcmVhY3QtdGhyZWUvZmliZXInXG5pbXBvcnQgeyB1c2VDb250cm9scyB9IGZyb20gJ2xldmEnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1vZGVsKCkge1xuICAgIGNvbnN0IHsgdmlld3BvcnQgfSA9IHVzZVRocmVlKClcbiAgICBjb25zdCB7IG5vZGVzIH0gPSB1c2VHTFRGKCcvbWVkaWFzL3NoYXJkcy5nbGInKVxuICAgIFxuICAgIHJldHVybiAoXG4gICAgICAgICAgICA8Z3JvdXAgc2NhbGU9e3ZpZXdwb3J0LndpZHRoIC8gMS41fSA+XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBub2Rlcy5TY2VuZS5jaGlsZHJlbi5tYXAoIChtZXNoLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPE1lc2ggZGF0YT17bWVzaH0ga2V5PXtpfS8+XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDxGb250IC8+XG4gICAgICAgICAgICA8L2dyb3VwPlxuICAgIClcbn1cblxuZnVuY3Rpb24gRm9udCgpIHtcbiAgICBjb25zdCBzcmMgPSAnL2ZvbnRzL1BQTmV1ZU1vbnRyZWFsLUJvbGQub3RmJ1xuICAgIGNvbnN0IHRleHRPcHRpb24gPSB7XG4gICAgICAgIGNvbG9yOiBcIndoaXRlXCIsXG4gICAgICAgIGFuY2hvclg6IFwiY2VudGVyXCIsXG4gICAgICAgIGFuY2hvclk6IFwibWlkZGxlXCJcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGdyb3VwPlxuICAgICAgICAgICAgPFRleHQgZm9udD17c3JjfSBwb3NpdGlvbj17WzAsIDAsIC0uMV19IGZvbnRTaXplPXswLjR9IHsuLi50ZXh0T3B0aW9ufT5cbiAgICAgICAgICAgIDQwNFxuICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgPFRleHQgZm9udD17c3JjfSBwb3NpdGlvbj17WzAsIC0uMTUsIC0uMV19IGZvbnRTaXplPXswLjAzfSB7Li4udGV4dE9wdGlvbn0+XG4gICAgICAgICAgICBUaGUgbGluayBpcyBicm9rZW5cbiAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgIDxtZXNoPlxuICAgICAgICAgICAgICAgIDxzcGhlcmVHZW9tZXRyeSBhcmdzPXtbMC4xLCAxNiwgMTZdfSAvPlxuICAgICAgICAgICAgICAgIDxtZXNoU3RhbmRhcmRNYXRlcmlhbCAvPlxuICAgICAgICAgICAgICAgIHsvKiBSZW5kZXIgSFRNTCB1c2luZyB0aGUgQ2FudmFzIGNvbXBvbmVudCAqL31cbiAgICAgICAgICAgICAgICA8cmVhY3RUaHJlZUZpYmVyLkNhbnZhcz5cbiAgICAgICAgICAgICAgICAgICAgPGEucHJpbWl0aXZlIG9iamVjdD17bmV3IFRIUkVFLkh0bWwoKX0gaHJlZj1cIi9cIiBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJibG9ja1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiNDhweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjQ4cHhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjMDAwMGZmXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCIjZmZmZmZmXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogXCIxNnB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lSGVpZ2h0OiBcIjQ4cHhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogXCJwb2ludGVyXCJcbiAgICAgICAgICAgICAgICAgICAgfX0+SG9tZTwvYS5wcmltaXRpdmU+XG4gICAgICAgICAgICAgICAgPC9yZWFjdFRocmVlRmliZXIuQ2FudmFzPlxuICAgICAgICAgICAgPC9tZXNoPlxuICAgICAgICA8L2dyb3VwPlxuICAgIClcbn1cblxuZnVuY3Rpb24gTWVzaCh7ZGF0YX0pIHtcblxuICAgIGNvbnN0IG1hdGVyaWFsUHJvcHMgPSB1c2VDb250cm9scyh7XG4gICAgICAgIHRoaWNrbmVzczogeyB2YWx1ZTogMC4yNzUsIG1pbjogMCwgbWF4OiAxLCBzdGVwOiAwLjAxIH0sXG4gICAgICAgIGlvcjogeyB2YWx1ZTogMS44LCBtaW46IDAsIG1heDogMywgc3RlcDogMC4xIH0sXG4gICAgICAgIGNocm9tYXRpY0FiZXJyYXRpb246IHsgdmFsdWU6IDAuNzUsIG1pbjogMCwgbWF4OiAxfSxcbiAgICAgICAgcmVzb2x1dGlvbjoge3ZhbHVlOiAzMDB9LFxuICAgIH0pXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8RmxvYXQ+XG4gICAgICAgICAgICA8bWVzaCB7Li4uZGF0YX0+XG4gICAgICAgICAgICAgICAgPE1lc2hUcmFuc21pc3Npb25NYXRlcmlhbCByb3VnaG5lc3M9ezB9IHRyYW5zbWlzc2lvbj17MC45OX0gey4uLm1hdGVyaWFsUHJvcHN9Lz5cbiAgICAgICAgICAgIDwvbWVzaD5cbiAgICAgICAgPC9GbG9hdD5cbiAgICApXG59Il0sIm5hbWVzIjpbInVzZUdMVEYiLCJUZXh0IiwiRmxvYXQiLCJNZXNoVHJhbnNtaXNzaW9uTWF0ZXJpYWwiLCJSZWFjdCIsInVzZVRocmVlIiwidXNlQ29udHJvbHMiLCJNb2RlbCIsInZpZXdwb3J0Iiwibm9kZXMiLCJncm91cCIsInNjYWxlIiwid2lkdGgiLCJTY2VuZSIsImNoaWxkcmVuIiwibWFwIiwibWVzaCIsImkiLCJNZXNoIiwiZGF0YSIsIkZvbnQiLCJzcmMiLCJ0ZXh0T3B0aW9uIiwiY29sb3IiLCJhbmNob3JYIiwiYW5jaG9yWSIsImZvbnQiLCJwb3NpdGlvbiIsImZvbnRTaXplIiwic3BoZXJlR2VvbWV0cnkiLCJhcmdzIiwibWVzaFN0YW5kYXJkTWF0ZXJpYWwiLCJyZWFjdFRocmVlRmliZXIiLCJDYW52YXMiLCJhIiwicHJpbWl0aXZlIiwib2JqZWN0IiwiVEhSRUUiLCJIdG1sIiwiaHJlZiIsInN0eWxlIiwiZGlzcGxheSIsImhlaWdodCIsImJhY2tncm91bmRDb2xvciIsInRleHRBbGlnbiIsImxpbmVIZWlnaHQiLCJjdXJzb3IiLCJtYXRlcmlhbFByb3BzIiwidGhpY2tuZXNzIiwidmFsdWUiLCJtaW4iLCJtYXgiLCJzdGVwIiwiaW9yIiwiY2hyb21hdGljQWJlcnJhdGlvbiIsInJlc29sdXRpb24iLCJyb3VnaG5lc3MiLCJ0cmFuc21pc3Npb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Model.jsx\n"));

/***/ })

});