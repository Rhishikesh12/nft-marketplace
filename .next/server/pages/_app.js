/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./components/provider/web3/index.tsx":
/*!********************************************!*\
  !*** ./components/provider/web3/index.tsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"useWeb3\": () => (/* binding */ useWeb3)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ \"./components/provider/web3/utils.ts\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ethers */ \"ethers\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ethers__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst Web3Context = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)((0,_utils__WEBPACK_IMPORTED_MODULE_2__.createDefaultState)());\nconst Web3Provider = ({ children  })=>{\n    const [web3Api, setWeb3Api] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)((0,_utils__WEBPACK_IMPORTED_MODULE_2__.createDefaultState)());\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        async function initWeb3() {\n            const provider = new ethers__WEBPACK_IMPORTED_MODULE_3__.ethers.providers.Web3Provider(window.ethereum);\n            const contract = await (0,_utils__WEBPACK_IMPORTED_MODULE_2__.loadContract)(\"NftMarket\", provider);\n            setWeb3Api({\n                ethereum: window.ethereum,\n                provider,\n                contract,\n                isLoading: false\n            });\n        }\n        initWeb3();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Web3Context.Provider, {\n        value: web3Api,\n        children: children\n    }, void 0, false, {\n        fileName: \"D:\\\\Blockchain\\\\nft-marketplace\\\\components\\\\provider\\\\web3\\\\index.tsx\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, undefined);\n};\nfunction useWeb3() {\n    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(Web3Context);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Web3Provider);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3Byb3ZpZGVyL3dlYjMvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQTBGO0FBQ3BCO0FBQ3RDO0FBTWhDLE1BQU1PLDRCQUFjUCxvREFBYUEsQ0FBWUksMERBQWtCQTtBQUMvRCxNQUFNSSxlQUF5QyxDQUFDLEVBQUNDLFNBQVEsRUFBQyxHQUFLO0lBQzdELE1BQU0sQ0FBQ0MsU0FBU0MsV0FBVyxHQUFHUiwrQ0FBUUEsQ0FBWUMsMERBQWtCQTtJQUVwRUYsZ0RBQVNBLENBQUMsSUFBTTtRQUNkLGVBQWVVLFdBQVc7WUFDeEIsTUFBTUMsV0FBVyxJQUFJUCxpRUFBNkIsQ0FBQ1MsT0FBT0MsUUFBUTtZQUNsRSxNQUFNQyxXQUFZLE1BQU1aLG9EQUFZQSxDQUFDLGFBQWFRO1lBQ2xERixXQUFXO2dCQUNUSyxVQUFVRCxPQUFPQyxRQUFRO2dCQUN6Qkg7Z0JBQ0FJO2dCQUNBQyxXQUFXLEtBQUs7WUFDbEI7UUFDRjtRQUVBTjtJQUNGLEdBQUcsRUFBRTtJQUNMLHFCQUNFLDhEQUFDTCxZQUFZWSxRQUFRO1FBQUNDLE9BQU9WO2tCQUMxQkQ7Ozs7OztBQUdQO0FBRU8sU0FBU1ksVUFBVTtJQUN4QixPQUFPcEIsaURBQVVBLENBQUNNO0FBQ3BCLENBQUM7QUFFRCxpRUFBZUMsWUFBWUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25mdC1tYXJrZXRwbGFjZS8uL2NvbXBvbmVudHMvcHJvdmlkZXIvd2ViMy9pbmRleC50c3g/M2E4OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCBGdW5jdGlvbkNvbXBvbmVudCwgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBjcmVhdGVEZWZhdWx0U3RhdGUsIGxvYWRDb250cmFjdCwgV2ViM1N0YXRlIH0gZnJvbSBcIi4vdXRpbHNcIjtcclxuaW1wb3J0IHsgZXRoZXJzIH0gZnJvbSBcImV0aGVyc1wiO1xyXG5cclxuXHJcbmludGVyZmFjZSBQcm9wcyB7XHJcbiAgICBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlO1xyXG59XHJcbmNvbnN0IFdlYjNDb250ZXh0ID0gY3JlYXRlQ29udGV4dDxXZWIzU3RhdGU+KGNyZWF0ZURlZmF1bHRTdGF0ZSgpKTtcclxuY29uc3QgV2ViM1Byb3ZpZGVyOiBGdW5jdGlvbkNvbXBvbmVudDxQcm9wcz4gPSAoe2NoaWxkcmVufSkgPT4ge1xyXG4gIGNvbnN0IFt3ZWIzQXBpLCBzZXRXZWIzQXBpXSA9IHVzZVN0YXRlPFdlYjNTdGF0ZT4oY3JlYXRlRGVmYXVsdFN0YXRlKCkpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgYXN5bmMgZnVuY3Rpb24gaW5pdFdlYjMoKSB7XHJcbiAgICAgIGNvbnN0IHByb3ZpZGVyID0gbmV3IGV0aGVycy5wcm92aWRlcnMuV2ViM1Byb3ZpZGVyKHdpbmRvdy5ldGhlcmV1bSBhcyBhbnkpO1xyXG4gICAgICBjb25zdCBjb250cmFjdCA9ICBhd2FpdCBsb2FkQ29udHJhY3QoXCJOZnRNYXJrZXRcIiwgcHJvdmlkZXIpO1xyXG4gICAgICBzZXRXZWIzQXBpKHtcclxuICAgICAgICBldGhlcmV1bTogd2luZG93LmV0aGVyZXVtLFxyXG4gICAgICAgIHByb3ZpZGVyLFxyXG4gICAgICAgIGNvbnRyYWN0LFxyXG4gICAgICAgIGlzTG9hZGluZzogZmFsc2VcclxuICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBpbml0V2ViMygpO1xyXG4gIH0sIFtdKVxyXG4gIHJldHVybiAoXHJcbiAgICA8V2ViM0NvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3dlYjNBcGl9PlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L1dlYjNDb250ZXh0LlByb3ZpZGVyPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZVdlYjMoKSB7XHJcbiAgcmV0dXJuIHVzZUNvbnRleHQoV2ViM0NvbnRleHQpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBXZWIzUHJvdmlkZXI7Il0sIm5hbWVzIjpbImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJjcmVhdGVEZWZhdWx0U3RhdGUiLCJsb2FkQ29udHJhY3QiLCJldGhlcnMiLCJXZWIzQ29udGV4dCIsIldlYjNQcm92aWRlciIsImNoaWxkcmVuIiwid2ViM0FwaSIsInNldFdlYjNBcGkiLCJpbml0V2ViMyIsInByb3ZpZGVyIiwicHJvdmlkZXJzIiwid2luZG93IiwiZXRoZXJldW0iLCJjb250cmFjdCIsImlzTG9hZGluZyIsIlByb3ZpZGVyIiwidmFsdWUiLCJ1c2VXZWIzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/provider/web3/index.tsx\n");

/***/ }),

/***/ "./components/provider/web3/utils.ts":
/*!*******************************************!*\
  !*** ./components/provider/web3/utils.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createDefaultState\": () => (/* binding */ createDefaultState),\n/* harmony export */   \"loadContract\": () => (/* binding */ loadContract)\n/* harmony export */ });\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ethers */ \"ethers\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ethers__WEBPACK_IMPORTED_MODULE_0__);\n\nconst createDefaultState = ()=>{\n    return {\n        ethereum: null,\n        provider: null,\n        contract: null,\n        isLoading: true\n    };\n};\nconst NETWORK_ID = \"5777\";\nconst loadContract = async (name, provider)=>{\n    if (!NETWORK_ID) {\n        return Promise.reject(\"Network ID is not defined!\");\n    }\n    const res = await fetch(`/contracts/${name}.json`);\n    const Artifact = await res.json();\n    if (Artifact.networks[NETWORK_ID].address) {\n        const contract = new ethers__WEBPACK_IMPORTED_MODULE_0__.ethers.Contract(Artifact.networks[NETWORK_ID].address, Artifact.abi, provider);\n        return contract;\n    } else {\n        return Promise.reject(`Contract: [${name}] cannot be loaded!`);\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3Byb3ZpZGVyL3dlYjMvdXRpbHMudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNxRDtBQW1COUMsTUFBTUMscUJBQXFCLElBQU07SUFDdEMsT0FBTztRQUNMQyxVQUFVLElBQUk7UUFDZEMsVUFBVSxJQUFJO1FBQ2RDLFVBQVUsSUFBSTtRQUNkQyxXQUFXLElBQUk7SUFDakI7QUFDRixFQUFDO0FBRUQsTUFBTUMsYUFBYUMsTUFBa0M7QUFFOUMsTUFBTUcsZUFBZSxPQUMxQkMsTUFDQVIsV0FDc0I7SUFFdEIsSUFBSSxDQUFDRyxZQUFZO1FBQ2YsT0FBT00sUUFBUUMsTUFBTSxDQUFDO0lBQ3hCLENBQUM7SUFFRCxNQUFNQyxNQUFNLE1BQU1DLE1BQU0sQ0FBQyxXQUFXLEVBQUVKLEtBQUssS0FBSyxDQUFDO0lBQ2pELE1BQU1LLFdBQVcsTUFBTUYsSUFBSUcsSUFBSTtJQUUvQixJQUFJRCxTQUFTRSxRQUFRLENBQUNaLFdBQVcsQ0FBQ2EsT0FBTyxFQUFFO1FBQ3pDLE1BQU1mLFdBQVcsSUFBSUosbURBQWUsQ0FDbENnQixTQUFTRSxRQUFRLENBQUNaLFdBQVcsQ0FBQ2EsT0FBTyxFQUNyQ0gsU0FBU0ssR0FBRyxFQUNabEI7UUFHRixPQUFPQztJQUNULE9BQU87UUFDTCxPQUFPUSxRQUFRQyxNQUFNLENBQUMsQ0FBQyxXQUFXLEVBQUVGLEtBQUssbUJBQW1CLENBQUM7SUFDL0QsQ0FBQztBQUNILEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZnQtbWFya2V0cGxhY2UvLi9jb21wb25lbnRzL3Byb3ZpZGVyL3dlYjMvdXRpbHMudHM/NmIxOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNZXRhTWFza0lucGFnZVByb3ZpZGVyIH0gZnJvbSBcIkBtZXRhbWFzay9wcm92aWRlcnNcIjtcclxuaW1wb3J0IHsgQ29udHJhY3QsIGV0aGVycywgcHJvdmlkZXJzIH0gZnJvbSBcImV0aGVyc1wiO1xyXG5cclxuZGVjbGFyZSBnbG9iYWwge1xyXG4gIGludGVyZmFjZSBXaW5kb3cge1xyXG4gICAgZXRoZXJldW06IE1ldGFNYXNrSW5wYWdlUHJvdmlkZXI7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuZXhwb3J0IHR5cGUgV2ViM1BhcmFtcyA9IHtcclxuICBldGhlcmV1bTogTWV0YU1hc2tJbnBhZ2VQcm92aWRlciB8IG51bGw7XHJcbiAgcHJvdmlkZXI6IHByb3ZpZGVycy5XZWIzUHJvdmlkZXIgfCBudWxsO1xyXG4gIGNvbnRyYWN0OiBDb250cmFjdCB8IG51bGw7XHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIFdlYjNTdGF0ZSA9IHtcclxuICBpc0xvYWRpbmc6IGJvb2xlYW47IC8vIHRydWUgd2hpbGUgbG9hZGluZyB3ZWIzU3RhdGVcclxufSAmIFdlYjNQYXJhbXNcclxuXHJcbmV4cG9ydCBjb25zdCBjcmVhdGVEZWZhdWx0U3RhdGUgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIGV0aGVyZXVtOiBudWxsLFxyXG4gICAgcHJvdmlkZXI6IG51bGwsXHJcbiAgICBjb250cmFjdDogbnVsbCxcclxuICAgIGlzTG9hZGluZzogdHJ1ZSxcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IE5FVFdPUktfSUQgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19ORVRXT1JLX0lEO1xyXG5cclxuZXhwb3J0IGNvbnN0IGxvYWRDb250cmFjdCA9IGFzeW5jIChcclxuICBuYW1lOiBzdHJpbmcsICAvLyBOZnRNYXJrZXRcclxuICBwcm92aWRlcjogcHJvdmlkZXJzLldlYjNQcm92aWRlclxyXG4pOiBQcm9taXNlPENvbnRyYWN0PiA9PiB7XHJcblxyXG4gIGlmICghTkVUV09SS19JRCkge1xyXG4gICAgcmV0dXJuIFByb21pc2UucmVqZWN0KFwiTmV0d29yayBJRCBpcyBub3QgZGVmaW5lZCFcIik7XHJcbiAgfVxyXG5cclxuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgL2NvbnRyYWN0cy8ke25hbWV9Lmpzb25gKTtcclxuICBjb25zdCBBcnRpZmFjdCA9IGF3YWl0IHJlcy5qc29uKCk7XHJcblxyXG4gIGlmIChBcnRpZmFjdC5uZXR3b3Jrc1tORVRXT1JLX0lEXS5hZGRyZXNzKSB7XHJcbiAgICBjb25zdCBjb250cmFjdCA9IG5ldyBldGhlcnMuQ29udHJhY3QoXHJcbiAgICAgIEFydGlmYWN0Lm5ldHdvcmtzW05FVFdPUktfSURdLmFkZHJlc3MsXHJcbiAgICAgIEFydGlmYWN0LmFiaSxcclxuICAgICAgcHJvdmlkZXJcclxuICAgIClcclxuXHJcbiAgICByZXR1cm4gY29udHJhY3Q7XHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiBQcm9taXNlLnJlamVjdChgQ29udHJhY3Q6IFske25hbWV9XSBjYW5ub3QgYmUgbG9hZGVkIWApO1xyXG4gIH1cclxufSJdLCJuYW1lcyI6WyJldGhlcnMiLCJjcmVhdGVEZWZhdWx0U3RhdGUiLCJldGhlcmV1bSIsInByb3ZpZGVyIiwiY29udHJhY3QiLCJpc0xvYWRpbmciLCJORVRXT1JLX0lEIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX05FVFdPUktfSUQiLCJsb2FkQ29udHJhY3QiLCJuYW1lIiwiUHJvbWlzZSIsInJlamVjdCIsInJlcyIsImZldGNoIiwiQXJ0aWZhY3QiLCJqc29uIiwibmV0d29ya3MiLCJhZGRyZXNzIiwiQ29udHJhY3QiLCJhYmkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/provider/web3/utils.ts\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _providers_web3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @providers/web3 */ \"./components/provider/web3/index.tsx\");\n\n\n\nfunction App({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_providers_web3__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"D:\\\\Blockchain\\\\nft-marketplace\\\\pages\\\\_app.tsx\",\n                lineNumber: 9,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"D:\\\\Blockchain\\\\nft-marketplace\\\\pages\\\\_app.tsx\",\n            lineNumber: 8,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUE4QjtBQUVZO0FBRTFDLFNBQVNDLElBQUksRUFBRUMsVUFBUyxFQUFFQyxVQUFTLEVBQVksRUFBRTtJQUMvQyxxQkFDRTtrQkFDRSw0RUFBQ0gsdURBQVlBO3NCQUNYLDRFQUFDRTtnQkFBVyxHQUFHQyxTQUFTOzs7Ozs7Ozs7Ozs7QUFJaEM7QUFFQSxpRUFBZUYsR0FBR0EsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL25mdC1tYXJrZXRwbGFjZS8uL3BhZ2VzL19hcHAudHN4PzJmYmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFscy5jc3MnXG5pbXBvcnQgdHlwZSB7IEFwcFByb3BzIH0gZnJvbSAnbmV4dC9hcHAnXG5pbXBvcnQgV2ViM1Byb3ZpZGVyIGZyb20gJ0Bwcm92aWRlcnMvd2ViMydcblxuZnVuY3Rpb24gQXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfTogQXBwUHJvcHMpIHtcbiAgcmV0dXJuKFxuICAgIDw+XG4gICAgICA8V2ViM1Byb3ZpZGVyPlxuICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICA8L1dlYjNQcm92aWRlcj5cbiAgICA8Lz5cbiAgKSBcbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBwXG4iXSwibmFtZXMiOlsiV2ViM1Byb3ZpZGVyIiwiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "ethers":
/*!*************************!*\
  !*** external "ethers" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("ethers");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();