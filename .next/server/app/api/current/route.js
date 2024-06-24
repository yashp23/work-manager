"use strict";
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
exports.id = "app/api/current/route";
exports.ids = ["app/api/current/route"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fcurrent%2Froute&page=%2Fapi%2Fcurrent%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fcurrent%2Froute.js&appDir=D%3A%5Ctask-manager%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5Ctask-manager&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fcurrent%2Froute&page=%2Fapi%2Fcurrent%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fcurrent%2Froute.js&appDir=D%3A%5Ctask-manager%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5Ctask-manager&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   headerHooks: () => (/* binding */ headerHooks),\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),\n/* harmony export */   staticGenerationBailout: () => (/* binding */ staticGenerationBailout)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var D_task_manager_src_app_api_current_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/current/route.js */ \"(rsc)/./src/app/api/current/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/current/route\",\n        pathname: \"/api/current\",\n        filename: \"route\",\n        bundlePath: \"app/api/current/route\"\n    },\n    resolvedPagePath: \"D:\\\\task-manager\\\\src\\\\app\\\\api\\\\current\\\\route.js\",\n    nextConfigOutput,\n    userland: D_task_manager_src_app_api_current_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks, headerHooks, staticGenerationBailout } = routeModule;\nconst originalPathname = \"/api/current/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZjdXJyZW50JTJGcm91dGUmcGFnZT0lMkZhcGklMkZjdXJyZW50JTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGY3VycmVudCUyRnJvdXRlLmpzJmFwcERpcj1EJTNBJTVDdGFzay1tYW5hZ2VyJTVDc3JjJTVDYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj1EJTNBJTVDdGFzay1tYW5hZ2VyJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFzRztBQUN2QztBQUNjO0FBQ0U7QUFDL0U7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGdIQUFtQjtBQUMzQztBQUNBLGNBQWMseUVBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSx1R0FBdUc7QUFDL0c7QUFDQTtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUM2Sjs7QUFFN0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90YXNrLW1hbmFnZXIvPzEyYzQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiRDpcXFxcdGFzay1tYW5hZ2VyXFxcXHNyY1xcXFxhcHBcXFxcYXBpXFxcXGN1cnJlbnRcXFxccm91dGUuanNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL2N1cnJlbnQvcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9jdXJyZW50XCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9jdXJyZW50L3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiRDpcXFxcdGFzay1tYW5hZ2VyXFxcXHNyY1xcXFxhcHBcXFxcYXBpXFxcXGN1cnJlbnRcXFxccm91dGUuanNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgaGVhZGVySG9va3MsIHN0YXRpY0dlbmVyYXRpb25CYWlsb3V0IH0gPSByb3V0ZU1vZHVsZTtcbmNvbnN0IG9yaWdpbmFsUGF0aG5hbWUgPSBcIi9hcGkvY3VycmVudC9yb3V0ZVwiO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICBzZXJ2ZXJIb29rcyxcbiAgICAgICAgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBoZWFkZXJIb29rcywgc3RhdGljR2VuZXJhdGlvbkJhaWxvdXQsIG9yaWdpbmFsUGF0aG5hbWUsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fcurrent%2Froute&page=%2Fapi%2Fcurrent%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fcurrent%2Froute.js&appDir=D%3A%5Ctask-manager%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5Ctask-manager&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/api/current/route.js":
/*!**************************************!*\
  !*** ./src/app/api/current/route.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET)\n/* harmony export */ });\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jsonwebtoken */ \"(rsc)/./node_modules/jsonwebtoken/index.js\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _models_schema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/models/schema */ \"(rsc)/./src/models/schema.js\");\n/* harmony import */ var _models_schema__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_models_schema__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/web/exports/next-response */ \"(rsc)/./node_modules/next/dist/server/web/exports/next-response.js\");\n\n\n\nasync function GET(request) {\n    try {\n        const authToken = request.cookies.get(\"authToken\")?.value;\n        if (!authToken) {\n            // Handle case where authentication token is missing\n            return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_2__[\"default\"].error(\"Authentication token missing\", {\n                status: 404\n            });\n        }\n        const token = jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default().verify(authToken, process.env.JWT_KEY);\n        // Assuming token contains the user's _id\n        const user = await _models_schema__WEBPACK_IMPORTED_MODULE_1__.User.findById(token._id).select(\"-password\");\n        if (!user) {\n            // Handle case where user data is not found\n            return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_2__[\"default\"].error(\"User not found\", {\n                status: 404\n            });\n        }\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_2__[\"default\"].json(user);\n    } catch (error) {\n        // Handle token verification errors\n        console.error(\"Error verifying authentication token:\", error);\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_2__[\"default\"].error(\"Authentication failed\", {\n            status: 404\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9jdXJyZW50L3JvdXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUErQjtBQUNRO0FBQ0k7QUFFcEMsZUFBZUcsSUFBSUMsT0FBTztJQUM3QixJQUFJO1FBQ0EsTUFBTUMsWUFBWUQsUUFBUUUsT0FBTyxDQUFDQyxHQUFHLENBQUMsY0FBY0M7UUFFcEQsSUFBSSxDQUFDSCxXQUFXO1lBQ1osb0RBQW9EO1lBQ3BELE9BQU9ILGtGQUFZQSxDQUFDTyxLQUFLLENBQUMsZ0NBQWdDO2dCQUFFQyxRQUFRO1lBQUk7UUFDNUU7UUFFQSxNQUFNQyxRQUFRWCwwREFBVSxDQUFDSyxXQUFXUSxRQUFRQyxHQUFHLENBQUNDLE9BQU87UUFFdkQseUNBQXlDO1FBQ3pDLE1BQU1DLE9BQU8sTUFBTWYsZ0RBQUlBLENBQUNnQixRQUFRLENBQUNOLE1BQU1PLEdBQUcsRUFBRUMsTUFBTSxDQUFDO1FBRW5ELElBQUksQ0FBQ0gsTUFBTTtZQUNQLDJDQUEyQztZQUMzQyxPQUFPZCxrRkFBWUEsQ0FBQ08sS0FBSyxDQUFDLGtCQUFrQjtnQkFBRUMsUUFBUTtZQUFJO1FBQzlEO1FBRUEsT0FBT1Isa0ZBQVlBLENBQUNrQixJQUFJLENBQUNKO0lBQzdCLEVBQUUsT0FBT1AsT0FBTztRQUNaLG1DQUFtQztRQUNuQ1ksUUFBUVosS0FBSyxDQUFDLHlDQUF5Q0E7UUFDdkQsT0FBT1Asa0ZBQVlBLENBQUNPLEtBQUssQ0FBQyx5QkFBeUI7WUFBRUMsUUFBUTtRQUFJO0lBQ3JFO0FBQ0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90YXNrLW1hbmFnZXIvLi9zcmMvYXBwL2FwaS9jdXJyZW50L3JvdXRlLmpzPzIxNzQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGp3dCBmcm9tIFwianNvbndlYnRva2VuXCI7XHJcbmltcG9ydCB7IFVzZXIgfSBmcm9tIFwiQC9tb2RlbHMvc2NoZW1hXCI7XHJcbmltcG9ydCB7IE5leHRSZXNwb25zZSB9IGZyb20gXCJuZXh0L3NlcnZlclwiO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIEdFVChyZXF1ZXN0KSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGF1dGhUb2tlbiA9IHJlcXVlc3QuY29va2llcy5nZXQoXCJhdXRoVG9rZW5cIik/LnZhbHVlO1xyXG5cclxuICAgICAgICBpZiAoIWF1dGhUb2tlbikge1xyXG4gICAgICAgICAgICAvLyBIYW5kbGUgY2FzZSB3aGVyZSBhdXRoZW50aWNhdGlvbiB0b2tlbiBpcyBtaXNzaW5nXHJcbiAgICAgICAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuZXJyb3IoXCJBdXRoZW50aWNhdGlvbiB0b2tlbiBtaXNzaW5nXCIsIHsgc3RhdHVzOiA0MDQgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCB0b2tlbiA9IGp3dC52ZXJpZnkoYXV0aFRva2VuLCBwcm9jZXNzLmVudi5KV1RfS0VZKTtcclxuXHJcbiAgICAgICAgLy8gQXNzdW1pbmcgdG9rZW4gY29udGFpbnMgdGhlIHVzZXIncyBfaWRcclxuICAgICAgICBjb25zdCB1c2VyID0gYXdhaXQgVXNlci5maW5kQnlJZCh0b2tlbi5faWQpLnNlbGVjdChcIi1wYXNzd29yZFwiKTtcclxuXHJcbiAgICAgICAgaWYgKCF1c2VyKSB7XHJcbiAgICAgICAgICAgIC8vIEhhbmRsZSBjYXNlIHdoZXJlIHVzZXIgZGF0YSBpcyBub3QgZm91bmRcclxuICAgICAgICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5lcnJvcihcIlVzZXIgbm90IGZvdW5kXCIsIHsgc3RhdHVzOiA0MDQgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24odXNlcik7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIC8vIEhhbmRsZSB0b2tlbiB2ZXJpZmljYXRpb24gZXJyb3JzXHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIHZlcmlmeWluZyBhdXRoZW50aWNhdGlvbiB0b2tlbjpcIiwgZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuZXJyb3IoXCJBdXRoZW50aWNhdGlvbiBmYWlsZWRcIiwgeyBzdGF0dXM6IDQwNCB9KTtcclxuICAgIH1cclxufVxyXG4iXSwibmFtZXMiOlsiand0IiwiVXNlciIsIk5leHRSZXNwb25zZSIsIkdFVCIsInJlcXVlc3QiLCJhdXRoVG9rZW4iLCJjb29raWVzIiwiZ2V0IiwidmFsdWUiLCJlcnJvciIsInN0YXR1cyIsInRva2VuIiwidmVyaWZ5IiwicHJvY2VzcyIsImVudiIsIkpXVF9LRVkiLCJ1c2VyIiwiZmluZEJ5SWQiLCJfaWQiLCJzZWxlY3QiLCJqc29uIiwiY29uc29sZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/current/route.js\n");

/***/ }),

/***/ "(rsc)/./src/models/schema.js":
/*!******************************!*\
  !*** ./src/models/schema.js ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nconst { default: mongoose } = __webpack_require__(/*! mongoose */ \"mongoose\");\nconst UserSchema = mongoose.Schema({\n    name: String,\n    email: {\n        type: String,\n        require: true,\n        unique: true\n    },\n    password: {\n        type: String,\n        require: true\n    },\n    about: {\n        type: String,\n        require: true\n    },\n    profileURL: String\n});\nconst User = mongoose.models.User || mongoose.model(\"User\", UserSchema);\nmodule.exports = {\n    User\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbW9kZWxzL3NjaGVtYS5qcyIsIm1hcHBpbmdzIjoiO0FBQUEsTUFBTSxFQUFFQSxTQUFTQyxRQUFRLEVBQUUsR0FBR0MsbUJBQU9BLENBQUMsMEJBQVU7QUFHaEQsTUFBTUMsYUFBYUYsU0FBU0csTUFBTSxDQUFDO0lBQy9CQyxNQUFNQztJQUNOQyxPQUFPO1FBQ0hDLE1BQU1GO1FBQ05KLFNBQVM7UUFDVE8sUUFBUTtJQUNaO0lBQ0FDLFVBQVU7UUFDTkYsTUFBTUY7UUFDTkosU0FBUztJQUNiO0lBQ0FTLE9BQU87UUFDSEgsTUFBTUY7UUFDTkosU0FBUztJQUNiO0lBQ0FVLFlBQVlOO0FBRWhCO0FBRUEsTUFBTU8sT0FBT1osU0FBU2EsTUFBTSxDQUFDRCxJQUFJLElBQUlaLFNBQVNjLEtBQUssQ0FBQyxRQUFRWjtBQUU1RGEsT0FBT0MsT0FBTyxHQUFHO0lBQUVKO0FBQUsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90YXNrLW1hbmFnZXIvLi9zcmMvbW9kZWxzL3NjaGVtYS5qcz9lMmRhIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgZGVmYXVsdDogbW9uZ29vc2UgfSA9IHJlcXVpcmUoXCJtb25nb29zZVwiKTtcclxuXHJcblxyXG5jb25zdCBVc2VyU2NoZW1hID0gbW9uZ29vc2UuU2NoZW1hKHtcclxuICAgIG5hbWU6IFN0cmluZyxcclxuICAgIGVtYWlsOiB7XHJcbiAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgIHJlcXVpcmU6IHRydWUsXHJcbiAgICAgICAgdW5pcXVlOiB0cnVlLFxyXG4gICAgfSxcclxuICAgIHBhc3N3b3JkOiB7XHJcbiAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgIHJlcXVpcmU6IHRydWUsXHJcbiAgICB9LFxyXG4gICAgYWJvdXQ6IHtcclxuICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgcmVxdWlyZTogdHJ1ZSxcclxuICAgIH0sXHJcbiAgICBwcm9maWxlVVJMOiBTdHJpbmcsXHJcblxyXG59KVxyXG5cclxuY29uc3QgVXNlciA9IG1vbmdvb3NlLm1vZGVscy5Vc2VyIHx8IG1vbmdvb3NlLm1vZGVsKFwiVXNlclwiLCBVc2VyU2NoZW1hKTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0geyBVc2VyIH1cclxuIl0sIm5hbWVzIjpbImRlZmF1bHQiLCJtb25nb29zZSIsInJlcXVpcmUiLCJVc2VyU2NoZW1hIiwiU2NoZW1hIiwibmFtZSIsIlN0cmluZyIsImVtYWlsIiwidHlwZSIsInVuaXF1ZSIsInBhc3N3b3JkIiwiYWJvdXQiLCJwcm9maWxlVVJMIiwiVXNlciIsIm1vZGVscyIsIm1vZGVsIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/models/schema.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/semver","vendor-chunks/jsonwebtoken","vendor-chunks/lodash.includes","vendor-chunks/yallist","vendor-chunks/jws","vendor-chunks/lodash.once","vendor-chunks/jwa","vendor-chunks/lodash.isinteger","vendor-chunks/ecdsa-sig-formatter","vendor-chunks/lodash.isplainobject","vendor-chunks/ms","vendor-chunks/lodash.isstring","vendor-chunks/lodash.isnumber","vendor-chunks/lodash.isboolean","vendor-chunks/safe-buffer","vendor-chunks/buffer-equal-constant-time"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fcurrent%2Froute&page=%2Fapi%2Fcurrent%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fcurrent%2Froute.js&appDir=D%3A%5Ctask-manager%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5Ctask-manager&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();