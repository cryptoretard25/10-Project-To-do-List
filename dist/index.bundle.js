"use strict";
(self["webpackChunk_10_project_to_do_list"] = self["webpackChunk_10_project_to_do_list"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/BeautifulPeople.ttf */ "./src/fonts/BeautifulPeople.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/FactoryLjds.ttf */ "./src/fonts/FactoryLjds.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n  font-family: 'Beautiful-People';\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"truetype\");\n  font-weight: 600;\n  font-style: normal;\n}\n\n@font-face {\n  font-family: 'Factory-LJDS';\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"truetype\");\n  font-weight: 600;\n  font-style: normal;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  list-style-type: none;\n  text-decoration: none;\n\n}\n\n:root {\n  font-size: 62.5%;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica,\n    Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n\n  --main-font: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica,\n  Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n  --stale-900: #334155;\n  --stale-400: #94a3b8;\n  --stale-300: #cbd5e1;\n  --stale-200: #e2e8f0;\n  --stale-100: #f1f5f9;\n  color: black;\n}\n\nbutton {\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica,\n    Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n  border: none;\n  font-size: 1.6rem;\n  padding: 5px;\n  border-radius: 5px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n\nbody {\n  font-size: 1.6rem;\n  min-height: 100vh;\n}\n\n.grid-container {\n  min-height: 100vh;\n  display: grid;\n  grid-template-rows: 10rem 1fr 5rem;\n  grid-template-columns: minmax(25rem, 1fr) minmax(50rem ,5fr);\n  background-color: var(--stale-100);\n}\n\n.header {\n  grid-column: 1/4;\n  grid-row: 1;\n  font-family: 'Beautiful-People';\n  background-color: var(--stale-900);\n  color: white;\n  padding-left: 2rem;\n  display: flex;\n  align-items: center;\n}\n\n.sidebar {\n  grid-column: 1;\n  grid-row: 2;\n  background-color: var(--stale-200);\n\n  display: grid;\n  grid-template-rows: 15rem 1fr;\n\n}\n\n.menu, .projects {\n  padding: 0 1.5rem;\n  -border: 1px solid blue;\n  display: flex;\n  flex-direction: column;\n  gap: 2px\n  \n}\n\nh3 {\n  padding: 0 10px;\n  font-weight: bolder;\n  display: flex;\n  align-items: center;\n}\n.menu{\n  justify-content: center;\n}\n.projects {\n  -border: 1px solid green;\n  gap: 1.5rem;\n}\n\n.add-project-menu {\n  background-color: var(--stale-200);\n  gap: 1.5rem;\n  width: 100%;\n}\n\n.main-container {\n  grid-row: 2;\n  grid-column: 2/4;\n  background-color: var(--stale-100);\n  padding: 2rem 2rem;\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n  width: min(80rem, 100%);\n  margin: 0 auto;\n}\n\n.task, .project {\n  padding: 5px;\n  display: flex;\n  align-items: center;\n  gap: 1.5rem\n}\n\n.footer {\n  font-family: 'Factory-LJDS';\n  grid-column: 1/4;\n  grid-row: 3;\n  background-color: var(--stale-900);\n  color: white;\n\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.task-name {\n  cursor: pointer;\n  flex: 1;\n}\n\n.task-date {\n  cursor: pointer;\n}\n\n#o {\n  cursor: pointer;\n  border-radius: 50%;\n  width: 2rem;\n  min-width: 2rem;\n  height: 2rem;\n  border: 3px solid var(--stale-900);\n}\n\n#o-clicked{\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n  cursor: pointer;\n  width: 2rem;\n  min-width: 2rem;\n  border-radius: 50%;\n  height: 2rem;\n  border: 3px solid var(--stale-900);\n}\n\n#o-clicked::before{\n  position: absolute;\n  content: \"\";\n  width: 1rem;\n  height: 1rem;\n  border-radius: 50%;\n  background-color: var(--stale-900);\n}\n\n#x {\n  padding: 6px;\n  cursor: pointer;\n  border: 3px solid #334155;\n  background:\n    linear-gradient(45deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 43%, #fff 45%, #fff 55%, rgba(0, 0, 0, 0) 57%, rgba(0, 0, 0, 0) 100%),\n    linear-gradient(135deg, #334155 0%, #334155 43%, #fff 45%, #fff 55%, #334155 57%, #334155 100%);\n}\n\n#plus {\n  padding: 6px;\n  cursor: pointer;\n  display: inline-block;\n  border: 3px solid #334155;\n  background:\n    linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 43%, #fff 45%, #fff 55%, rgba(0, 0, 0, 0) 57%, rgba(0, 0, 0, 0) 100%),\n    linear-gradient(180deg, #334155 0%, #334155 43%, #fff 45%, #fff 55%, #334155 57%, #334155 100%);\n}\n\n.add-task-menu {\n  background-color: var(--stale-100);\n  gap: 1.5rem;\n  width: 100%;\n}\n\n.add-task-menu:hover {\n  background-color: var(--stale-200);\n}\n\n.side-menu {\n  background-color: var(--stale-200);\n}\n\n.side-menu:hover, .add-project-menu:hover, .project:hover {\n  background-color: var(--stale-300);\n}\n\n.side-menu>img, .project>img {\n  height: 2.5rem;\n}\n\n.project{\n  display: flex;\n  background-color: var(--stale-200);\n  width: 100%;\n  padding-right: 10px;\n  cursor: pointer;\n}\n.projects-list{\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 2px;\n}\n.project-name{\n  flex: 1;\n  text-align: left;\n}\n\n.popup-menu{\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  padding: 5px;\n}\n\n.popup-buttons{\n  display: flex;\n  gap: 1.5rem;\n}\n\n.popup-button{\n  font-weight: 700;\n  border:  1px solid var(--stale-400);\n  padding: 8px 16px;\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.button-add{\n  background-color: lightgreen;\n}\n.button-add:hover{\n  background-color: rgba(144, 238, 144, 0.74);\n}\n.button-cancel{\n  background-color: lightcoral;\n}\n.button-cancel:hover{\n  background-color: rgba(240, 128, 128, 0.664)\n}\n.popup-menu-input{\n  font-size: 1.6rem;\n  border: 2px solid var(--stale-400);\n  border-radius: 5px;\n  padding: 8px;\n}\n.popup-menu-input:focus{\n  outline: none;\n}\n\n.task-name-input{\n  font-size: 1.6rem;\n  border: 1px solid var(--stale-400);\n  border-radius: 5px;\n  padding: 2px;\n  flex: 1;\n}\n.task-name-input:focus{\n  outline: none;\n}\n\n.task-date-input{\n  font-family: var(--main-font) ;\n  font-size: 1.6rem;\n  border: 1px solid var(--stale-400);\n  border-radius: 5px;\n  padding: 2px;\n}\n\n.active{\n  display: flex;\n}\n.deactive{\n  display: none;\n}\n.green{\n  background-color: lightgreen;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\n  font-family: 'Beautiful-People';\n  src: url('./fonts/BeautifulPeople.ttf') format(\"truetype\");\n  font-weight: 600;\n  font-style: normal;\n}\n\n@font-face {\n  font-family: 'Factory-LJDS';\n  src: url('./fonts/FactoryLjds.ttf') format(\"truetype\");\n  font-weight: 600;\n  font-style: normal;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  list-style-type: none;\n  text-decoration: none;\n\n}\n\n:root {\n  font-size: 62.5%;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica,\n    Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n\n  --main-font: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica,\n  Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n  --stale-900: #334155;\n  --stale-400: #94a3b8;\n  --stale-300: #cbd5e1;\n  --stale-200: #e2e8f0;\n  --stale-100: #f1f5f9;\n  color: black;\n}\n\nbutton {\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica,\n    Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n  border: none;\n  font-size: 1.6rem;\n  padding: 5px;\n  border-radius: 5px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n\nbody {\n  font-size: 1.6rem;\n  min-height: 100vh;\n}\n\n.grid-container {\n  min-height: 100vh;\n  display: grid;\n  grid-template-rows: 10rem 1fr 5rem;\n  grid-template-columns: minmax(25rem, 1fr) minmax(50rem ,5fr);\n  background-color: var(--stale-100);\n}\n\n.header {\n  grid-column: 1/4;\n  grid-row: 1;\n  font-family: 'Beautiful-People';\n  background-color: var(--stale-900);\n  color: white;\n  padding-left: 2rem;\n  display: flex;\n  align-items: center;\n}\n\n.sidebar {\n  grid-column: 1;\n  grid-row: 2;\n  background-color: var(--stale-200);\n\n  display: grid;\n  grid-template-rows: 15rem 1fr;\n\n}\n\n.menu, .projects {\n  padding: 0 1.5rem;\n  -border: 1px solid blue;\n  display: flex;\n  flex-direction: column;\n  gap: 2px\n  \n}\n\nh3 {\n  padding: 0 10px;\n  font-weight: bolder;\n  display: flex;\n  align-items: center;\n}\n.menu{\n  justify-content: center;\n}\n.projects {\n  -border: 1px solid green;\n  gap: 1.5rem;\n}\n\n.add-project-menu {\n  background-color: var(--stale-200);\n  gap: 1.5rem;\n  width: 100%;\n}\n\n.main-container {\n  grid-row: 2;\n  grid-column: 2/4;\n  background-color: var(--stale-100);\n  padding: 2rem 2rem;\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n  width: min(80rem, 100%);\n  margin: 0 auto;\n}\n\n.task, .project {\n  padding: 5px;\n  display: flex;\n  align-items: center;\n  gap: 1.5rem\n}\n\n.footer {\n  font-family: 'Factory-LJDS';\n  grid-column: 1/4;\n  grid-row: 3;\n  background-color: var(--stale-900);\n  color: white;\n\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.task-name {\n  cursor: pointer;\n  flex: 1;\n}\n\n.task-date {\n  cursor: pointer;\n}\n\n#o {\n  cursor: pointer;\n  border-radius: 50%;\n  width: 2rem;\n  min-width: 2rem;\n  height: 2rem;\n  border: 3px solid var(--stale-900);\n}\n\n#o-clicked{\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n  cursor: pointer;\n  width: 2rem;\n  min-width: 2rem;\n  border-radius: 50%;\n  height: 2rem;\n  border: 3px solid var(--stale-900);\n}\n\n#o-clicked::before{\n  position: absolute;\n  content: \"\";\n  width: 1rem;\n  height: 1rem;\n  border-radius: 50%;\n  background-color: var(--stale-900);\n}\n\n#x {\n  padding: 6px;\n  cursor: pointer;\n  border: 3px solid #334155;\n  background:\n    linear-gradient(45deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 43%, #fff 45%, #fff 55%, rgba(0, 0, 0, 0) 57%, rgba(0, 0, 0, 0) 100%),\n    linear-gradient(135deg, #334155 0%, #334155 43%, #fff 45%, #fff 55%, #334155 57%, #334155 100%);\n}\n\n#plus {\n  padding: 6px;\n  cursor: pointer;\n  display: inline-block;\n  border: 3px solid #334155;\n  background:\n    linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 43%, #fff 45%, #fff 55%, rgba(0, 0, 0, 0) 57%, rgba(0, 0, 0, 0) 100%),\n    linear-gradient(180deg, #334155 0%, #334155 43%, #fff 45%, #fff 55%, #334155 57%, #334155 100%);\n}\n\n.add-task-menu {\n  background-color: var(--stale-100);\n  gap: 1.5rem;\n  width: 100%;\n}\n\n.add-task-menu:hover {\n  background-color: var(--stale-200);\n}\n\n.side-menu {\n  background-color: var(--stale-200);\n}\n\n.side-menu:hover, .add-project-menu:hover, .project:hover {\n  background-color: var(--stale-300);\n}\n\n.side-menu>img, .project>img {\n  height: 2.5rem;\n}\n\n.project{\n  display: flex;\n  background-color: var(--stale-200);\n  width: 100%;\n  padding-right: 10px;\n  cursor: pointer;\n}\n.projects-list{\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 2px;\n}\n.project-name{\n  flex: 1;\n  text-align: left;\n}\n\n.popup-menu{\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  padding: 5px;\n}\n\n.popup-buttons{\n  display: flex;\n  gap: 1.5rem;\n}\n\n.popup-button{\n  font-weight: 700;\n  border:  1px solid var(--stale-400);\n  padding: 8px 16px;\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.button-add{\n  background-color: lightgreen;\n}\n.button-add:hover{\n  background-color: rgba(144, 238, 144, 0.74);\n}\n.button-cancel{\n  background-color: lightcoral;\n}\n.button-cancel:hover{\n  background-color: rgba(240, 128, 128, 0.664)\n}\n.popup-menu-input{\n  font-size: 1.6rem;\n  border: 2px solid var(--stale-400);\n  border-radius: 5px;\n  padding: 8px;\n}\n.popup-menu-input:focus{\n  outline: none;\n}\n\n.task-name-input{\n  font-size: 1.6rem;\n  border: 1px solid var(--stale-400);\n  border-radius: 5px;\n  padding: 2px;\n  flex: 1;\n}\n.task-name-input:focus{\n  outline: none;\n}\n\n.task-date-input{\n  font-family: var(--main-font) ;\n  font-size: 1.6rem;\n  border: 1px solid var(--stale-400);\n  border-radius: 5px;\n  padding: 2px;\n}\n\n.active{\n  display: flex;\n}\n.deactive{\n  display: none;\n}\n.green{\n  background-color: lightgreen;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/defaultOptions/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getDefaultOptions": () => (/* binding */ getDefaultOptions),
/* harmony export */   "setDefaultOptions": () => (/* binding */ setDefaultOptions)
/* harmony export */ });
var defaultOptions = {};
function getDefaultOptions() {
  return defaultOptions;
}
function setDefaultOptions(newOptions) {
  defaultOptions = newOptions;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ requiredArgs)
/* harmony export */ });
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/toInteger/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/toInteger/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toInteger)
/* harmony export */ });
function toInteger(dirtyNumber) {
  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
    return NaN;
  }

  var number = Number(dirtyNumber);

  if (isNaN(number)) {
    return number;
  }

  return number < 0 ? Math.ceil(number) : Math.floor(number);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/addDays/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/addDays/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addDays)
/* harmony export */ });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name addDays
 * @category Day Helpers
 * @summary Add the specified number of days to the given date.
 *
 * @description
 * Add the specified number of days to the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of days to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} - the new date with the days added
 * @throws {TypeError} - 2 arguments required
 *
 * @example
 * // Add 10 days to 1 September 2014:
 * const result = addDays(new Date(2014, 8, 1), 10)
 * //=> Thu Sep 11 2014 00:00:00
 */

function addDays(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyAmount);

  if (isNaN(amount)) {
    return new Date(NaN);
  }

  if (!amount) {
    // If 0 days, no-op to avoid changing times in the hour before end of DST
    return date;
  }

  date.setDate(date.getDate() + amount);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isSameDay/index.js":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/esm/isSameDay/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isSameDay)
/* harmony export */ });
/* harmony import */ var _startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../startOfDay/index.js */ "./node_modules/date-fns/esm/startOfDay/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isSameDay
 * @category Day Helpers
 * @summary Are the given dates in the same day (and year and month)?
 *
 * @description
 * Are the given dates in the same day (and year and month)?
 *
 * @param {Date|Number} dateLeft - the first date to check
 * @param {Date|Number} dateRight - the second date to check
 * @returns {Boolean} the dates are in the same day (and year and month)
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Are 4 September 06:00:00 and 4 September 18:00:00 in the same day?
 * const result = isSameDay(new Date(2014, 8, 4, 6, 0), new Date(2014, 8, 4, 18, 0))
 * //=> true
 *
 * @example
 * // Are 4 September and 4 October in the same day?
 * const result = isSameDay(new Date(2014, 8, 4), new Date(2014, 9, 4))
 * //=> false
 *
 * @example
 * // Are 4 September, 2014 and 4 September, 2015 in the same day?
 * const result = isSameDay(new Date(2014, 8, 4), new Date(2015, 8, 4))
 * //=> false
 */

function isSameDay(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var dateLeftStartOfDay = (0,_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft);
  var dateRightStartOfDay = (0,_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight);
  return dateLeftStartOfDay.getTime() === dateRightStartOfDay.getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isSameWeek/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/isSameWeek/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isSameWeek)
/* harmony export */ });
/* harmony import */ var _startOfWeek_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../startOfWeek/index.js */ "./node_modules/date-fns/esm/startOfWeek/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name isSameWeek
 * @category Week Helpers
 * @summary Are the given dates in the same week (and month and year)?
 *
 * @description
 * Are the given dates in the same week (and month and year)?
 *
 * @param {Date|Number} dateLeft - the first date to check
 * @param {Date|Number} dateRight - the second date to check
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Boolean} the dates are in the same week (and month and year)
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 *
 * @example
 * // Are 31 August 2014 and 4 September 2014 in the same week?
 * const result = isSameWeek(new Date(2014, 7, 31), new Date(2014, 8, 4))
 * //=> true
 *
 * @example
 * // If week starts with Monday,
 * // are 31 August 2014 and 4 September 2014 in the same week?
 * const result = isSameWeek(new Date(2014, 7, 31), new Date(2014, 8, 4), {
 *   weekStartsOn: 1
 * })
 * //=> false
 *
 * @example
 * // Are 1 January 2014 and 1 January 2015 in the same week?
 * const result = isSameWeek(new Date(2014, 0, 1), new Date(2015, 0, 1))
 * //=> false
 */
function isSameWeek(dirtyDateLeft, dirtyDateRight, options) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var dateLeftStartOfWeek = (0,_startOfWeek_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft, options);
  var dateRightStartOfWeek = (0,_startOfWeek_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight, options);
  return dateLeftStartOfWeek.getTime() === dateRightStartOfWeek.getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isThisWeek/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/isThisWeek/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isThisWeek)
/* harmony export */ });
/* harmony import */ var _isSameWeek_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../isSameWeek/index.js */ "./node_modules/date-fns/esm/isSameWeek/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name isThisWeek
 * @category Week Helpers
 * @summary Is the given date in the same week as the current date?
 * @pure false
 *
 * @description
 * Is the given date in the same week as the current date?
 *
 * > ⚠️ Please note that this function is not present in the FP submodule as
 * > it uses `Date.now()` internally hence impure and can't be safely curried.
 *
 * @param {Date|Number} date - the date to check
 * @param {Object} [options] - the object with options
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Boolean} the date is in this week
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 *
 * @example
 * // If today is 25 September 2014, is 21 September 2014 in this week?
 * const result = isThisWeek(new Date(2014, 8, 21))
 * //=> true
 *
 * @example
 * // If today is 25 September 2014 and week starts with Monday
 * // is 21 September 2014 in this week?
 * const result = isThisWeek(new Date(2014, 8, 21), { weekStartsOn: 1 })
 * //=> false
 */
function isThisWeek(dirtyDate, options) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  return (0,_isSameWeek_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate, Date.now(), options);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isToday/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/isToday/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isToday)
/* harmony export */ });
/* harmony import */ var _isSameDay_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../isSameDay/index.js */ "./node_modules/date-fns/esm/isSameDay/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isToday
 * @category Day Helpers
 * @summary Is the given date today?
 * @pure false
 *
 * @description
 * Is the given date today?
 *
 * > ⚠️ Please note that this function is not present in the FP submodule as
 * > it uses `Date.now()` internally hence impure and can't be safely curried.
 *
 * @param {Date|Number} date - the date to check
 * @returns {Boolean} the date is today
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // If today is 6 October 2014, is 6 October 14:00:00 today?
 * const result = isToday(new Date(2014, 9, 6, 14, 0))
 * //=> true
 */

function isToday(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  return (0,_isSameDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate, Date.now());
}

/***/ }),

/***/ "./node_modules/date-fns/esm/startOfDay/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/startOfDay/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfDay)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name startOfDay
 * @category Day Helpers
 * @summary Return the start of a day for the given date.
 *
 * @description
 * Return the start of a day for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the start of a day
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The start of a day for 2 September 2014 11:55:00:
 * const result = startOfDay(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 02 2014 00:00:00
 */

function startOfDay(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  date.setHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/startOfWeek/index.js":
/*!********************************************************!*\
  !*** ./node_modules/date-fns/esm/startOfWeek/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _lib_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/defaultOptions/index.js */ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js");




/**
 * @name startOfWeek
 * @category Week Helpers
 * @summary Return the start of a week for the given date.
 *
 * @description
 * Return the start of a week for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|Number} date - the original date
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Date} the start of a week
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 *
 * @example
 * // The start of a week for 2 September 2014 11:55:00:
 * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Sun Aug 31 2014 00:00:00
 *
 * @example
 * // If the week starts on Monday, the start of the week for 2 September 2014 11:55:00:
 * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0), { weekStartsOn: 1 })
 * //=> Mon Sep 01 2014 00:00:00
 */

function startOfWeek(dirtyDate, options) {
  var _ref, _ref2, _ref3, _options$weekStartsOn, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;

  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var defaultOptions = (0,_lib_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__.getDefaultOptions)();
  var weekStartsOn = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])((_ref = (_ref2 = (_ref3 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.weekStartsOn) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.weekStartsOn) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.weekStartsOn) !== null && _ref !== void 0 ? _ref : 0); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }

  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(dirtyDate);
  var day = date.getDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setDate(date.getDate() - diff);
  date.setHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/subDays/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/subDays/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ subDays)
/* harmony export */ });
/* harmony import */ var _addDays_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../addDays/index.js */ "./node_modules/date-fns/esm/addDays/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");



/**
 * @name subDays
 * @category Day Helpers
 * @summary Subtract the specified number of days from the given date.
 *
 * @description
 * Subtract the specified number of days from the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of days to be subtracted. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the days subtracted
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Subtract 10 days from 1 September 2014:
 * const result = subDays(new Date(2014, 8, 1), 10)
 * //=> Fri Aug 22 2014 00:00:00
 */

function subDays(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyAmount);
  return (0,_addDays_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyDate, -amount);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/toDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toDate)
/* harmony export */ });
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }


/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @param {Date|Number} argument - the value to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */

function toDate(argument) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var argStr = Object.prototype.toString.call(argument); // Clone the date

  if (argument instanceof Date || _typeof(argument) === 'object' && argStr === '[object Date]') {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument === 'number' || argStr === '[object Number]') {
    return new Date(argument);
  } else {
    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"); // eslint-disable-next-line no-console

      console.warn(new Error().stack);
    }

    return new Date(NaN);
  }
}

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./node_modules/uuid/dist/commonjs-browser/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/uuid/dist/commonjs-browser/index.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "NIL", ({
  enumerable: true,
  get: function get() {
    return _nil.default;
  }
}));
Object.defineProperty(exports, "parse", ({
  enumerable: true,
  get: function get() {
    return _parse.default;
  }
}));
Object.defineProperty(exports, "stringify", ({
  enumerable: true,
  get: function get() {
    return _stringify.default;
  }
}));
Object.defineProperty(exports, "v1", ({
  enumerable: true,
  get: function get() {
    return _v.default;
  }
}));
Object.defineProperty(exports, "v3", ({
  enumerable: true,
  get: function get() {
    return _v2.default;
  }
}));
Object.defineProperty(exports, "v4", ({
  enumerable: true,
  get: function get() {
    return _v3.default;
  }
}));
Object.defineProperty(exports, "v5", ({
  enumerable: true,
  get: function get() {
    return _v4.default;
  }
}));
Object.defineProperty(exports, "validate", ({
  enumerable: true,
  get: function get() {
    return _validate.default;
  }
}));
Object.defineProperty(exports, "version", ({
  enumerable: true,
  get: function get() {
    return _version.default;
  }
}));

var _v = _interopRequireDefault(__webpack_require__(/*! ./v1.js */ "./node_modules/uuid/dist/commonjs-browser/v1.js"));

var _v2 = _interopRequireDefault(__webpack_require__(/*! ./v3.js */ "./node_modules/uuid/dist/commonjs-browser/v3.js"));

var _v3 = _interopRequireDefault(__webpack_require__(/*! ./v4.js */ "./node_modules/uuid/dist/commonjs-browser/v4.js"));

var _v4 = _interopRequireDefault(__webpack_require__(/*! ./v5.js */ "./node_modules/uuid/dist/commonjs-browser/v5.js"));

var _nil = _interopRequireDefault(__webpack_require__(/*! ./nil.js */ "./node_modules/uuid/dist/commonjs-browser/nil.js"));

var _version = _interopRequireDefault(__webpack_require__(/*! ./version.js */ "./node_modules/uuid/dist/commonjs-browser/version.js"));

var _validate = _interopRequireDefault(__webpack_require__(/*! ./validate.js */ "./node_modules/uuid/dist/commonjs-browser/validate.js"));

var _stringify = _interopRequireDefault(__webpack_require__(/*! ./stringify.js */ "./node_modules/uuid/dist/commonjs-browser/stringify.js"));

var _parse = _interopRequireDefault(__webpack_require__(/*! ./parse.js */ "./node_modules/uuid/dist/commonjs-browser/parse.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./node_modules/uuid/dist/commonjs-browser/md5.js":
/*!********************************************************!*\
  !*** ./node_modules/uuid/dist/commonjs-browser/md5.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

/*
 * Browser-compatible JavaScript MD5
 *
 * Modification of JavaScript MD5
 * https://github.com/blueimp/JavaScript-MD5
 *
 * Copyright 2011, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * https://opensource.org/licenses/MIT
 *
 * Based on
 * A JavaScript implementation of the RSA Data Security, Inc. MD5 Message
 * Digest Algorithm, as defined in RFC 1321.
 * Version 2.2 Copyright (C) Paul Johnston 1999 - 2009
 * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
 * Distributed under the BSD License
 * See http://pajhome.org.uk/crypt/md5 for more info.
 */
function md5(bytes) {
  if (typeof bytes === 'string') {
    const msg = unescape(encodeURIComponent(bytes)); // UTF8 escape

    bytes = new Uint8Array(msg.length);

    for (let i = 0; i < msg.length; ++i) {
      bytes[i] = msg.charCodeAt(i);
    }
  }

  return md5ToHexEncodedArray(wordsToMd5(bytesToWords(bytes), bytes.length * 8));
}
/*
 * Convert an array of little-endian words to an array of bytes
 */


function md5ToHexEncodedArray(input) {
  const output = [];
  const length32 = input.length * 32;
  const hexTab = '0123456789abcdef';

  for (let i = 0; i < length32; i += 8) {
    const x = input[i >> 5] >>> i % 32 & 0xff;
    const hex = parseInt(hexTab.charAt(x >>> 4 & 0x0f) + hexTab.charAt(x & 0x0f), 16);
    output.push(hex);
  }

  return output;
}
/**
 * Calculate output length with padding and bit length
 */


function getOutputLength(inputLength8) {
  return (inputLength8 + 64 >>> 9 << 4) + 14 + 1;
}
/*
 * Calculate the MD5 of an array of little-endian words, and a bit length.
 */


function wordsToMd5(x, len) {
  /* append padding */
  x[len >> 5] |= 0x80 << len % 32;
  x[getOutputLength(len) - 1] = len;
  let a = 1732584193;
  let b = -271733879;
  let c = -1732584194;
  let d = 271733878;

  for (let i = 0; i < x.length; i += 16) {
    const olda = a;
    const oldb = b;
    const oldc = c;
    const oldd = d;
    a = md5ff(a, b, c, d, x[i], 7, -680876936);
    d = md5ff(d, a, b, c, x[i + 1], 12, -389564586);
    c = md5ff(c, d, a, b, x[i + 2], 17, 606105819);
    b = md5ff(b, c, d, a, x[i + 3], 22, -1044525330);
    a = md5ff(a, b, c, d, x[i + 4], 7, -176418897);
    d = md5ff(d, a, b, c, x[i + 5], 12, 1200080426);
    c = md5ff(c, d, a, b, x[i + 6], 17, -1473231341);
    b = md5ff(b, c, d, a, x[i + 7], 22, -45705983);
    a = md5ff(a, b, c, d, x[i + 8], 7, 1770035416);
    d = md5ff(d, a, b, c, x[i + 9], 12, -1958414417);
    c = md5ff(c, d, a, b, x[i + 10], 17, -42063);
    b = md5ff(b, c, d, a, x[i + 11], 22, -1990404162);
    a = md5ff(a, b, c, d, x[i + 12], 7, 1804603682);
    d = md5ff(d, a, b, c, x[i + 13], 12, -40341101);
    c = md5ff(c, d, a, b, x[i + 14], 17, -1502002290);
    b = md5ff(b, c, d, a, x[i + 15], 22, 1236535329);
    a = md5gg(a, b, c, d, x[i + 1], 5, -165796510);
    d = md5gg(d, a, b, c, x[i + 6], 9, -1069501632);
    c = md5gg(c, d, a, b, x[i + 11], 14, 643717713);
    b = md5gg(b, c, d, a, x[i], 20, -373897302);
    a = md5gg(a, b, c, d, x[i + 5], 5, -701558691);
    d = md5gg(d, a, b, c, x[i + 10], 9, 38016083);
    c = md5gg(c, d, a, b, x[i + 15], 14, -660478335);
    b = md5gg(b, c, d, a, x[i + 4], 20, -405537848);
    a = md5gg(a, b, c, d, x[i + 9], 5, 568446438);
    d = md5gg(d, a, b, c, x[i + 14], 9, -1019803690);
    c = md5gg(c, d, a, b, x[i + 3], 14, -187363961);
    b = md5gg(b, c, d, a, x[i + 8], 20, 1163531501);
    a = md5gg(a, b, c, d, x[i + 13], 5, -1444681467);
    d = md5gg(d, a, b, c, x[i + 2], 9, -51403784);
    c = md5gg(c, d, a, b, x[i + 7], 14, 1735328473);
    b = md5gg(b, c, d, a, x[i + 12], 20, -1926607734);
    a = md5hh(a, b, c, d, x[i + 5], 4, -378558);
    d = md5hh(d, a, b, c, x[i + 8], 11, -2022574463);
    c = md5hh(c, d, a, b, x[i + 11], 16, 1839030562);
    b = md5hh(b, c, d, a, x[i + 14], 23, -35309556);
    a = md5hh(a, b, c, d, x[i + 1], 4, -1530992060);
    d = md5hh(d, a, b, c, x[i + 4], 11, 1272893353);
    c = md5hh(c, d, a, b, x[i + 7], 16, -155497632);
    b = md5hh(b, c, d, a, x[i + 10], 23, -1094730640);
    a = md5hh(a, b, c, d, x[i + 13], 4, 681279174);
    d = md5hh(d, a, b, c, x[i], 11, -358537222);
    c = md5hh(c, d, a, b, x[i + 3], 16, -722521979);
    b = md5hh(b, c, d, a, x[i + 6], 23, 76029189);
    a = md5hh(a, b, c, d, x[i + 9], 4, -640364487);
    d = md5hh(d, a, b, c, x[i + 12], 11, -421815835);
    c = md5hh(c, d, a, b, x[i + 15], 16, 530742520);
    b = md5hh(b, c, d, a, x[i + 2], 23, -995338651);
    a = md5ii(a, b, c, d, x[i], 6, -198630844);
    d = md5ii(d, a, b, c, x[i + 7], 10, 1126891415);
    c = md5ii(c, d, a, b, x[i + 14], 15, -1416354905);
    b = md5ii(b, c, d, a, x[i + 5], 21, -57434055);
    a = md5ii(a, b, c, d, x[i + 12], 6, 1700485571);
    d = md5ii(d, a, b, c, x[i + 3], 10, -1894986606);
    c = md5ii(c, d, a, b, x[i + 10], 15, -1051523);
    b = md5ii(b, c, d, a, x[i + 1], 21, -2054922799);
    a = md5ii(a, b, c, d, x[i + 8], 6, 1873313359);
    d = md5ii(d, a, b, c, x[i + 15], 10, -30611744);
    c = md5ii(c, d, a, b, x[i + 6], 15, -1560198380);
    b = md5ii(b, c, d, a, x[i + 13], 21, 1309151649);
    a = md5ii(a, b, c, d, x[i + 4], 6, -145523070);
    d = md5ii(d, a, b, c, x[i + 11], 10, -1120210379);
    c = md5ii(c, d, a, b, x[i + 2], 15, 718787259);
    b = md5ii(b, c, d, a, x[i + 9], 21, -343485551);
    a = safeAdd(a, olda);
    b = safeAdd(b, oldb);
    c = safeAdd(c, oldc);
    d = safeAdd(d, oldd);
  }

  return [a, b, c, d];
}
/*
 * Convert an array bytes to an array of little-endian words
 * Characters >255 have their high-byte silently ignored.
 */


function bytesToWords(input) {
  if (input.length === 0) {
    return [];
  }

  const length8 = input.length * 8;
  const output = new Uint32Array(getOutputLength(length8));

  for (let i = 0; i < length8; i += 8) {
    output[i >> 5] |= (input[i / 8] & 0xff) << i % 32;
  }

  return output;
}
/*
 * Add integers, wrapping at 2^32. This uses 16-bit operations internally
 * to work around bugs in some JS interpreters.
 */


function safeAdd(x, y) {
  const lsw = (x & 0xffff) + (y & 0xffff);
  const msw = (x >> 16) + (y >> 16) + (lsw >> 16);
  return msw << 16 | lsw & 0xffff;
}
/*
 * Bitwise rotate a 32-bit number to the left.
 */


function bitRotateLeft(num, cnt) {
  return num << cnt | num >>> 32 - cnt;
}
/*
 * These functions implement the four basic operations the algorithm uses.
 */


function md5cmn(q, a, b, x, s, t) {
  return safeAdd(bitRotateLeft(safeAdd(safeAdd(a, q), safeAdd(x, t)), s), b);
}

function md5ff(a, b, c, d, x, s, t) {
  return md5cmn(b & c | ~b & d, a, b, x, s, t);
}

function md5gg(a, b, c, d, x, s, t) {
  return md5cmn(b & d | c & ~d, a, b, x, s, t);
}

function md5hh(a, b, c, d, x, s, t) {
  return md5cmn(b ^ c ^ d, a, b, x, s, t);
}

function md5ii(a, b, c, d, x, s, t) {
  return md5cmn(c ^ (b | ~d), a, b, x, s, t);
}

var _default = md5;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/uuid/dist/commonjs-browser/native.js":
/*!***********************************************************!*\
  !*** ./node_modules/uuid/dist/commonjs-browser/native.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
const randomUUID = typeof crypto !== 'undefined' && crypto.randomUUID && crypto.randomUUID.bind(crypto);
var _default = {
  randomUUID
};
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/uuid/dist/commonjs-browser/nil.js":
/*!********************************************************!*\
  !*** ./node_modules/uuid/dist/commonjs-browser/nil.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _default = '00000000-0000-0000-0000-000000000000';
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/uuid/dist/commonjs-browser/parse.js":
/*!**********************************************************!*\
  !*** ./node_modules/uuid/dist/commonjs-browser/parse.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _validate = _interopRequireDefault(__webpack_require__(/*! ./validate.js */ "./node_modules/uuid/dist/commonjs-browser/validate.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function parse(uuid) {
  if (!(0, _validate.default)(uuid)) {
    throw TypeError('Invalid UUID');
  }

  let v;
  const arr = new Uint8Array(16); // Parse ########-....-....-....-............

  arr[0] = (v = parseInt(uuid.slice(0, 8), 16)) >>> 24;
  arr[1] = v >>> 16 & 0xff;
  arr[2] = v >>> 8 & 0xff;
  arr[3] = v & 0xff; // Parse ........-####-....-....-............

  arr[4] = (v = parseInt(uuid.slice(9, 13), 16)) >>> 8;
  arr[5] = v & 0xff; // Parse ........-....-####-....-............

  arr[6] = (v = parseInt(uuid.slice(14, 18), 16)) >>> 8;
  arr[7] = v & 0xff; // Parse ........-....-....-####-............

  arr[8] = (v = parseInt(uuid.slice(19, 23), 16)) >>> 8;
  arr[9] = v & 0xff; // Parse ........-....-....-....-############
  // (Use "/" to avoid 32-bit truncation when bit-shifting high-order bytes)

  arr[10] = (v = parseInt(uuid.slice(24, 36), 16)) / 0x10000000000 & 0xff;
  arr[11] = v / 0x100000000 & 0xff;
  arr[12] = v >>> 24 & 0xff;
  arr[13] = v >>> 16 & 0xff;
  arr[14] = v >>> 8 & 0xff;
  arr[15] = v & 0xff;
  return arr;
}

var _default = parse;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/uuid/dist/commonjs-browser/regex.js":
/*!**********************************************************!*\
  !*** ./node_modules/uuid/dist/commonjs-browser/regex.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _default = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/uuid/dist/commonjs-browser/rng.js":
/*!********************************************************!*\
  !*** ./node_modules/uuid/dist/commonjs-browser/rng.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = rng;
// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).
let getRandomValues;
const rnds8 = new Uint8Array(16);

function rng() {
  // lazy load so that environments that need to polyfill have a chance to do so
  if (!getRandomValues) {
    // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation.
    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto);

    if (!getRandomValues) {
      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
    }
  }

  return getRandomValues(rnds8);
}

/***/ }),

/***/ "./node_modules/uuid/dist/commonjs-browser/sha1.js":
/*!*********************************************************!*\
  !*** ./node_modules/uuid/dist/commonjs-browser/sha1.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

// Adapted from Chris Veness' SHA1 code at
// http://www.movable-type.co.uk/scripts/sha1.html
function f(s, x, y, z) {
  switch (s) {
    case 0:
      return x & y ^ ~x & z;

    case 1:
      return x ^ y ^ z;

    case 2:
      return x & y ^ x & z ^ y & z;

    case 3:
      return x ^ y ^ z;
  }
}

function ROTL(x, n) {
  return x << n | x >>> 32 - n;
}

function sha1(bytes) {
  const K = [0x5a827999, 0x6ed9eba1, 0x8f1bbcdc, 0xca62c1d6];
  const H = [0x67452301, 0xefcdab89, 0x98badcfe, 0x10325476, 0xc3d2e1f0];

  if (typeof bytes === 'string') {
    const msg = unescape(encodeURIComponent(bytes)); // UTF8 escape

    bytes = [];

    for (let i = 0; i < msg.length; ++i) {
      bytes.push(msg.charCodeAt(i));
    }
  } else if (!Array.isArray(bytes)) {
    // Convert Array-like to Array
    bytes = Array.prototype.slice.call(bytes);
  }

  bytes.push(0x80);
  const l = bytes.length / 4 + 2;
  const N = Math.ceil(l / 16);
  const M = new Array(N);

  for (let i = 0; i < N; ++i) {
    const arr = new Uint32Array(16);

    for (let j = 0; j < 16; ++j) {
      arr[j] = bytes[i * 64 + j * 4] << 24 | bytes[i * 64 + j * 4 + 1] << 16 | bytes[i * 64 + j * 4 + 2] << 8 | bytes[i * 64 + j * 4 + 3];
    }

    M[i] = arr;
  }

  M[N - 1][14] = (bytes.length - 1) * 8 / Math.pow(2, 32);
  M[N - 1][14] = Math.floor(M[N - 1][14]);
  M[N - 1][15] = (bytes.length - 1) * 8 & 0xffffffff;

  for (let i = 0; i < N; ++i) {
    const W = new Uint32Array(80);

    for (let t = 0; t < 16; ++t) {
      W[t] = M[i][t];
    }

    for (let t = 16; t < 80; ++t) {
      W[t] = ROTL(W[t - 3] ^ W[t - 8] ^ W[t - 14] ^ W[t - 16], 1);
    }

    let a = H[0];
    let b = H[1];
    let c = H[2];
    let d = H[3];
    let e = H[4];

    for (let t = 0; t < 80; ++t) {
      const s = Math.floor(t / 20);
      const T = ROTL(a, 5) + f(s, b, c, d) + e + K[s] + W[t] >>> 0;
      e = d;
      d = c;
      c = ROTL(b, 30) >>> 0;
      b = a;
      a = T;
    }

    H[0] = H[0] + a >>> 0;
    H[1] = H[1] + b >>> 0;
    H[2] = H[2] + c >>> 0;
    H[3] = H[3] + d >>> 0;
    H[4] = H[4] + e >>> 0;
  }

  return [H[0] >> 24 & 0xff, H[0] >> 16 & 0xff, H[0] >> 8 & 0xff, H[0] & 0xff, H[1] >> 24 & 0xff, H[1] >> 16 & 0xff, H[1] >> 8 & 0xff, H[1] & 0xff, H[2] >> 24 & 0xff, H[2] >> 16 & 0xff, H[2] >> 8 & 0xff, H[2] & 0xff, H[3] >> 24 & 0xff, H[3] >> 16 & 0xff, H[3] >> 8 & 0xff, H[3] & 0xff, H[4] >> 24 & 0xff, H[4] >> 16 & 0xff, H[4] >> 8 & 0xff, H[4] & 0xff];
}

var _default = sha1;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/uuid/dist/commonjs-browser/stringify.js":
/*!**************************************************************!*\
  !*** ./node_modules/uuid/dist/commonjs-browser/stringify.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
exports.unsafeStringify = unsafeStringify;

var _validate = _interopRequireDefault(__webpack_require__(/*! ./validate.js */ "./node_modules/uuid/dist/commonjs-browser/validate.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */
const byteToHex = [];

for (let i = 0; i < 256; ++i) {
  byteToHex.push((i + 0x100).toString(16).slice(1));
}

function unsafeStringify(arr, offset = 0) {
  // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
  return (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase();
}

function stringify(arr, offset = 0) {
  const uuid = unsafeStringify(arr, offset); // Consistency check for valid UUID.  If this throws, it's likely due to one
  // of the following:
  // - One or more input array values don't map to a hex octet (leading to
  // "undefined" in the uuid)
  // - Invalid input values for the RFC `version` or `variant` fields

  if (!(0, _validate.default)(uuid)) {
    throw TypeError('Stringified UUID is invalid');
  }

  return uuid;
}

var _default = stringify;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/uuid/dist/commonjs-browser/v1.js":
/*!*******************************************************!*\
  !*** ./node_modules/uuid/dist/commonjs-browser/v1.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _rng = _interopRequireDefault(__webpack_require__(/*! ./rng.js */ "./node_modules/uuid/dist/commonjs-browser/rng.js"));

var _stringify = __webpack_require__(/*! ./stringify.js */ "./node_modules/uuid/dist/commonjs-browser/stringify.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// **`v1()` - Generate time-based UUID**
//
// Inspired by https://github.com/LiosK/UUID.js
// and http://docs.python.org/library/uuid.html
let _nodeId;

let _clockseq; // Previous uuid creation time


let _lastMSecs = 0;
let _lastNSecs = 0; // See https://github.com/uuidjs/uuid for API details

function v1(options, buf, offset) {
  let i = buf && offset || 0;
  const b = buf || new Array(16);
  options = options || {};
  let node = options.node || _nodeId;
  let clockseq = options.clockseq !== undefined ? options.clockseq : _clockseq; // node and clockseq need to be initialized to random values if they're not
  // specified.  We do this lazily to minimize issues related to insufficient
  // system entropy.  See #189

  if (node == null || clockseq == null) {
    const seedBytes = options.random || (options.rng || _rng.default)();

    if (node == null) {
      // Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)
      node = _nodeId = [seedBytes[0] | 0x01, seedBytes[1], seedBytes[2], seedBytes[3], seedBytes[4], seedBytes[5]];
    }

    if (clockseq == null) {
      // Per 4.2.2, randomize (14 bit) clockseq
      clockseq = _clockseq = (seedBytes[6] << 8 | seedBytes[7]) & 0x3fff;
    }
  } // UUID timestamps are 100 nano-second units since the Gregorian epoch,
  // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so
  // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'
  // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.


  let msecs = options.msecs !== undefined ? options.msecs : Date.now(); // Per 4.2.1.2, use count of uuid's generated during the current clock
  // cycle to simulate higher resolution clock

  let nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1; // Time since last uuid creation (in msecs)

  const dt = msecs - _lastMSecs + (nsecs - _lastNSecs) / 10000; // Per 4.2.1.2, Bump clockseq on clock regression

  if (dt < 0 && options.clockseq === undefined) {
    clockseq = clockseq + 1 & 0x3fff;
  } // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new
  // time interval


  if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) {
    nsecs = 0;
  } // Per 4.2.1.2 Throw error if too many uuids are requested


  if (nsecs >= 10000) {
    throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
  }

  _lastMSecs = msecs;
  _lastNSecs = nsecs;
  _clockseq = clockseq; // Per 4.1.4 - Convert from unix epoch to Gregorian epoch

  msecs += 12219292800000; // `time_low`

  const tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;
  b[i++] = tl >>> 24 & 0xff;
  b[i++] = tl >>> 16 & 0xff;
  b[i++] = tl >>> 8 & 0xff;
  b[i++] = tl & 0xff; // `time_mid`

  const tmh = msecs / 0x100000000 * 10000 & 0xfffffff;
  b[i++] = tmh >>> 8 & 0xff;
  b[i++] = tmh & 0xff; // `time_high_and_version`

  b[i++] = tmh >>> 24 & 0xf | 0x10; // include version

  b[i++] = tmh >>> 16 & 0xff; // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)

  b[i++] = clockseq >>> 8 | 0x80; // `clock_seq_low`

  b[i++] = clockseq & 0xff; // `node`

  for (let n = 0; n < 6; ++n) {
    b[i + n] = node[n];
  }

  return buf || (0, _stringify.unsafeStringify)(b);
}

var _default = v1;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/uuid/dist/commonjs-browser/v3.js":
/*!*******************************************************!*\
  !*** ./node_modules/uuid/dist/commonjs-browser/v3.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _v = _interopRequireDefault(__webpack_require__(/*! ./v35.js */ "./node_modules/uuid/dist/commonjs-browser/v35.js"));

var _md = _interopRequireDefault(__webpack_require__(/*! ./md5.js */ "./node_modules/uuid/dist/commonjs-browser/md5.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const v3 = (0, _v.default)('v3', 0x30, _md.default);
var _default = v3;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/uuid/dist/commonjs-browser/v35.js":
/*!********************************************************!*\
  !*** ./node_modules/uuid/dist/commonjs-browser/v35.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.URL = exports.DNS = void 0;
exports["default"] = v35;

var _stringify = __webpack_require__(/*! ./stringify.js */ "./node_modules/uuid/dist/commonjs-browser/stringify.js");

var _parse = _interopRequireDefault(__webpack_require__(/*! ./parse.js */ "./node_modules/uuid/dist/commonjs-browser/parse.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function stringToBytes(str) {
  str = unescape(encodeURIComponent(str)); // UTF8 escape

  const bytes = [];

  for (let i = 0; i < str.length; ++i) {
    bytes.push(str.charCodeAt(i));
  }

  return bytes;
}

const DNS = '6ba7b810-9dad-11d1-80b4-00c04fd430c8';
exports.DNS = DNS;
const URL = '6ba7b811-9dad-11d1-80b4-00c04fd430c8';
exports.URL = URL;

function v35(name, version, hashfunc) {
  function generateUUID(value, namespace, buf, offset) {
    var _namespace;

    if (typeof value === 'string') {
      value = stringToBytes(value);
    }

    if (typeof namespace === 'string') {
      namespace = (0, _parse.default)(namespace);
    }

    if (((_namespace = namespace) === null || _namespace === void 0 ? void 0 : _namespace.length) !== 16) {
      throw TypeError('Namespace must be array-like (16 iterable integer values, 0-255)');
    } // Compute hash of namespace and value, Per 4.3
    // Future: Use spread syntax when supported on all platforms, e.g. `bytes =
    // hashfunc([...namespace, ... value])`


    let bytes = new Uint8Array(16 + value.length);
    bytes.set(namespace);
    bytes.set(value, namespace.length);
    bytes = hashfunc(bytes);
    bytes[6] = bytes[6] & 0x0f | version;
    bytes[8] = bytes[8] & 0x3f | 0x80;

    if (buf) {
      offset = offset || 0;

      for (let i = 0; i < 16; ++i) {
        buf[offset + i] = bytes[i];
      }

      return buf;
    }

    return (0, _stringify.unsafeStringify)(bytes);
  } // Function#name is not settable on some platforms (#270)


  try {
    generateUUID.name = name; // eslint-disable-next-line no-empty
  } catch (err) {} // For CommonJS default export support


  generateUUID.DNS = DNS;
  generateUUID.URL = URL;
  return generateUUID;
}

/***/ }),

/***/ "./node_modules/uuid/dist/commonjs-browser/v4.js":
/*!*******************************************************!*\
  !*** ./node_modules/uuid/dist/commonjs-browser/v4.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _native = _interopRequireDefault(__webpack_require__(/*! ./native.js */ "./node_modules/uuid/dist/commonjs-browser/native.js"));

var _rng = _interopRequireDefault(__webpack_require__(/*! ./rng.js */ "./node_modules/uuid/dist/commonjs-browser/rng.js"));

var _stringify = __webpack_require__(/*! ./stringify.js */ "./node_modules/uuid/dist/commonjs-browser/stringify.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function v4(options, buf, offset) {
  if (_native.default.randomUUID && !buf && !options) {
    return _native.default.randomUUID();
  }

  options = options || {};

  const rnds = options.random || (options.rng || _rng.default)(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`


  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    offset = offset || 0;

    for (let i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }

    return buf;
  }

  return (0, _stringify.unsafeStringify)(rnds);
}

var _default = v4;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/uuid/dist/commonjs-browser/v5.js":
/*!*******************************************************!*\
  !*** ./node_modules/uuid/dist/commonjs-browser/v5.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _v = _interopRequireDefault(__webpack_require__(/*! ./v35.js */ "./node_modules/uuid/dist/commonjs-browser/v35.js"));

var _sha = _interopRequireDefault(__webpack_require__(/*! ./sha1.js */ "./node_modules/uuid/dist/commonjs-browser/sha1.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const v5 = (0, _v.default)('v5', 0x50, _sha.default);
var _default = v5;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/uuid/dist/commonjs-browser/validate.js":
/*!*************************************************************!*\
  !*** ./node_modules/uuid/dist/commonjs-browser/validate.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _regex = _interopRequireDefault(__webpack_require__(/*! ./regex.js */ "./node_modules/uuid/dist/commonjs-browser/regex.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function validate(uuid) {
  return typeof uuid === 'string' && _regex.default.test(uuid);
}

var _default = validate;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/uuid/dist/commonjs-browser/version.js":
/*!************************************************************!*\
  !*** ./node_modules/uuid/dist/commonjs-browser/version.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _validate = _interopRequireDefault(__webpack_require__(/*! ./validate.js */ "./node_modules/uuid/dist/commonjs-browser/validate.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function version(uuid) {
  if (!(0, _validate.default)(uuid)) {
    throw TypeError('Invalid UUID');
  }

  return parseInt(uuid.slice(14, 15), 16);
}

var _default = version;
exports["default"] = _default;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/ui */ "./src/modules/ui.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
const {log} = console;



const uiHandler = (()=>{
  const inboxBtn = document.querySelector('#inbox-btn')
  const todayBtn = document.querySelector('#today-btn')
  const thisWeekBtn = document.querySelector('#thisweek-btn')
  
  _modules_ui__WEBPACK_IMPORTED_MODULE_0__.ProjectDOM.createStaticProject(_modules_ui__WEBPACK_IMPORTED_MODULE_0__.todoBack.getProject('Inbox') , inboxBtn);
  _modules_ui__WEBPACK_IMPORTED_MODULE_0__.ProjectDOM.createStaticProject(_modules_ui__WEBPACK_IMPORTED_MODULE_0__.todoBack.getProject('Today'), todayBtn);
  _modules_ui__WEBPACK_IMPORTED_MODULE_0__.ProjectDOM.createStaticProject(_modules_ui__WEBPACK_IMPORTED_MODULE_0__.todoBack.getProject('This week'), thisWeekBtn);
  _modules_ui__WEBPACK_IMPORTED_MODULE_0__.ProjectDOM.updateDOM()

  const onload =(() => inboxBtn.click())();
})()



/***/ }),

/***/ "./src/modules/projects.js":
/*!*********************************!*\
  !*** ./src/modules/projects.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Project)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/isToday/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/isThisWeek/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/subDays/index.js");
const uuid = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/commonjs-browser/index.js")

const {log} = console;


class Project {
  constructor(name){
    this.name = name;
    this.uid = uuid.v4();
    this.tasks = [];
    this.completed = [];
  }

  setName(name){
    this.name = name
  }

  getName(){
    return this.name;
  }

  getUID(){
    return this.uid;
  }

  setTasks(tasks){
    this.tasks = tasks;
  }

  getTasks(){
    return this.tasks;
  }


  getCompleted(){
    return this.completed;
  }

  setCompleted(completed){
    this.completed = completed;
  }
  
  getTask(title){
    return this.tasks.find(task => task.title === title)
  }

  getCompletedTask(title){
    return this.completed.find(todo => todo.title === title)
  }

  getTaskByUID(uid){
    return this.tasks.find(task=> task.uid === uid)
  }

  getCompletedTaskByUID(uid){
    return this.completed.find(todo => todo.uid === uid)
  }

  contains(title){
    return this.tasks.some(task=> task.title === title)
  }
  
  completedContains(title){
    return this.completed.some(todo => todo.title === title);
  }

  addTask(newTask){
    if(this.tasks.find(task=>task.title===newTask.title)) return;
    this.tasks.push(newTask)
  }

  addCompleted(task){
    //this.removeTask(task.uid);
    this.completed.push(task);
  }

  sortByCompleted(){
    this.getTasks().sort((a, b) => b.completed - a.completed)
  }

  removeTask(uid){
    this.tasks = this.tasks.filter(task => task.uid !== uid)
  }

  removeCompleted(uid){
    this.completed = this.completed.filter(todo => todo !== todo.uid);  
  }

  todayTasks(){
    return this.tasks.filter(task=>{
      const f = task.getFormattedDate()
      const taskDate = new Date(`${f.month}/${f.day}/${f.year}`)
      return (0,date_fns__WEBPACK_IMPORTED_MODULE_0__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_1__["default"])(taskDate))
    })
  }

  thisWeekTasks(){
    return this.tasks.filter(task=>{
      const f = task.getFormattedDate()
      const taskDate = new Date(`${f.month}/${f.day}/${f.year}`)
      return (0,date_fns__WEBPACK_IMPORTED_MODULE_2__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_3__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_1__["default"])(taskDate), 1));
    })
  }

}

/***/ }),

/***/ "./src/modules/storage.js":
/*!********************************!*\
  !*** ./src/modules/storage.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Storage)
/* harmony export */ });
/* harmony import */ var _to_do_back__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./to-do-back */ "./src/modules/to-do-back.js");
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects */ "./src/modules/projects.js");
/* harmony import */ var _todos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todos */ "./src/modules/todos.js");




const {log} = console;

class Storage {
  static saveTodoBack(data) {
    localStorage.setItem("TodoBack", JSON.stringify(data));
  }

  static getTodoBack() {
    const todoBack = Object.assign(
      new _to_do_back__WEBPACK_IMPORTED_MODULE_0__["default"](),
      JSON.parse(localStorage.getItem("TodoBack"))
    );

    todoBack.setProjects(
      todoBack
        .getProjects()
        .map((project) => Object.assign(new _projects__WEBPACK_IMPORTED_MODULE_1__["default"](), project))
    );

    todoBack.getProjects().forEach(project=>project.setTasks(
      project.getTasks().map(task=> Object.assign(new _todos__WEBPACK_IMPORTED_MODULE_2__["default"], task))
    ))

    todoBack.getProjects().forEach(project => project.setCompleted(
      project.getCompleted().map(task => Object.assign(new _todos__WEBPACK_IMPORTED_MODULE_2__["default"], task))
    ))

    
    log(todoBack);
    return todoBack;
  }
}

/***/ }),

/***/ "./src/modules/to-do-back.js":
/*!***********************************!*\
  !*** ./src/modules/to-do-back.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TodoBackEnd)
/* harmony export */ });
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects */ "./src/modules/projects.js");


const {log} = console

class TodoBackEnd {
  constructor() {
    this.projects = []
    this.projects.push(new _projects__WEBPACK_IMPORTED_MODULE_0__["default"]('Inbox'));
    this.projects.push(new _projects__WEBPACK_IMPORTED_MODULE_0__["default"]('Today'));
    this.projects.push(new _projects__WEBPACK_IMPORTED_MODULE_0__["default"]('This week'));
  }
  setProjects(projects){
    this.projects = projects;
  }
  getProjects(){
    return this.projects;
  }
  getProject(name){
    return this.projects.find(project => project.name === name)
  }
  getProjectByUID(uid){
    return this.projects.find(project=> project.getUID()===uid)
  }
  contains(name){
    return this.projects.some(project => project.name === name)
  }

  addProject(newProject){
    if(this.projects.find(project=> project.name === newProject.name)) return;
    this.projects.push(newProject)
  }
  deleteProject(uid){
    const index = this.projects.findIndex(project => project.uid === uid);
    if (index !== -1) this.projects.splice(index, 1)
  }
}

/***/ }),

/***/ "./src/modules/todos.js":
/*!******************************!*\
  !*** ./src/modules/todos.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Todo)
/* harmony export */ });
const uuid = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/commonjs-browser/index.js")

class Todo {
  constructor(title, source){
    this.title = title
    this.dueDate = 'No date';
    this.completed = false;
    this.uid = uuid.v4();
    this.source = source;
  }
  
  
  getComplete(){
    return this.completed;
  }

  setCompleted(){
    this.completed = !this.completed? true: false;
  }

  getTitle(){
    return this.title;
  }

  setTitle(value){
    this.title = value
  }

  returnCustomTitle(){
    return `${this.title} (${this.source})`
  }

  getSource(){
    return this.source;
  }

  setDueDate(date){
    this.dueDate = date
  }
  
  getDueDate(){
    const arr = this.dueDate.split("-");
    return arr.length > 1 ? `${arr[2]}/${arr[1]}/${arr[0]}` : `${arr[0]}`;
  }

  getFormattedDate(){
    const split = this.dueDate.split('-');
    const day = split[2]
    const month = split[1]
    const year = split[0]
    return {day, month, year}
  }
}

/***/ }),

/***/ "./src/modules/ui.js":
/*!***************************!*\
  !*** ./src/modules/ui.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectDOM": () => (/* binding */ ProjectDOM),
/* harmony export */   "todoBack": () => (/* binding */ todoBack)
/* harmony export */ });
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects */ "./src/modules/projects.js");
/* harmony import */ var _todos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todos */ "./src/modules/todos.js");
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./storage */ "./src/modules/storage.js");
const {log} = console;




const todoBack = _storage__WEBPACK_IMPORTED_MODULE_2__["default"].getTodoBack();

class CreateAddTask {
  static #mainTitle = document.querySelector(".main-title");
  static #menu = document.querySelector(".task-menu");

  static blank() {
    this.#menu.innerHTML = ''
  }

  static addTaskDOM() {
    function showHide(elementOne, elementTwo) {
      const fn = (element) => {
        element.classList.contains("active")
          ? (element.classList.remove("active"),
            element.classList.add("deactive"))
          : element.classList.remove(
              "deactive",
              element.classList.add("active")
            );
      };
      fn(elementOne);
      fn(elementTwo);
    }
    //------------------------------------------------------------------------------
    //ADD TASK BUTTON
    const addTaskButton = document.createElement("button");
    const createAddTask = () => {
      const addTaskPlus = document.createElement("div");
      const addTaskText = document.createElement("div");

      const properties = (() => {
        addTaskButton.classList.add("add-task-menu", "active");
        addTaskPlus.id = "plus";
        addTaskText.textContent = "Add Task";
      })();

      const listeners = (() => {
        addTaskButton.addEventListener("mousedown", () => {
          showHide(addTaskButton, popupContainer);
        });
      })();

      addTaskButton.append(addTaskPlus, addTaskText);
      return addTaskButton;
    };
    //POPUP
    const popupContainer = document.createElement("div");
    const createTaskPopup = () => {
      const popupInput = document.createElement("input");
      const popupButtons = document.createElement("div");
      const popupAdd = document.createElement("button");
      const popupCancel = document.createElement("button");

      const properties = (() => {
        popupContainer.classList.add(
          "popup-menu",
          "add-task-popup",
          "deactive"
        );
        popupInput.setAttribute("type", "text");
        popupInput.id = "input-add-task-popup";
        popupInput.className = "popup-menu-input";

        popupButtons.className = "popup-buttons";

        popupAdd.classList.add(
          "button-add",
          "popup-button",
          "task-popup-button-add"
        );
        popupAdd.textContent = "Add";

        popupCancel.classList.add(
          "button-cancel",
          "popup-button",
          "task-popup-button-cancel"
        );
        popupCancel.textContent = "Cancel";
      })();

      const listeners = (() => {

        popupCancel.addEventListener("mousedown", () => {
          showHide(addTaskButton, popupContainer);
        });

        popupAdd.addEventListener("mousedown", () => {
          //PUSH TASK CODE
          TaskDOM.toDOM(popupInput.value)
          popupInput.value = '';

          showHide(addTaskButton, popupContainer);

        });
      })();

      popupButtons.append(popupAdd, popupCancel);
      popupContainer.append(popupInput, popupButtons);

      return popupContainer;
    };
    this.#menu.append(createAddTask(), createTaskPopup());
  }
}

class CreateAddProject{
  static #menu = document.querySelector('.project-menu')

  static blank(){
    this.#menu.innerHTML = ''
  }
  
  static addProjectDOM(){
    function showHide(elementOne, elementTwo){
      const fn = (element)=>{
        element.classList.contains('active')?
        (element.classList.remove('active'), element.classList.add('deactive')):
        (element.classList.remove('deactive', element.classList.add('active')));
      }
      fn(elementOne);
      fn(elementTwo);
    }
    //ADD PROJECT BUTTON
    const addProjectButton = document.createElement("button");
    const createAddProject = ()=>{
      const addProjectPlus = document.createElement('div');
      const addProjectText = document.createElement('div');

      const properties = (()=>{
        addProjectButton.classList.add('add-project-menu', 'active')
        addProjectPlus.id = 'plus';
        addProjectText.className = 'add-project';
        addProjectText.textContent = 'Add Project';
      })()

      const listeners = (()=>{
        addProjectButton.addEventListener('mousedown', ()=>{
          showHide(addProjectButton, popupContainer);
        })
      })()

      addProjectButton.append(addProjectPlus, addProjectText)
      return addProjectButton;
    }
    //ADD PROJECT POPUP
    const popupContainer = document.createElement("div");

    const createProjectPopup = ()=>{
      const popupInput = document.createElement('input');
      const popupButtons = document.createElement('div');
      const popupAdd = document.createElement('button');
      const popupCancel = document.createElement('button');

      const properties = (()=>{
        popupContainer.classList.add('popup-menu', 'add-project-popup', 'deactive');
        popupContainer.id = 'add-project-popup';

        popupInput.className = 'popup-menu-input';
        popupButtons.className = 'popup-buttons';

        popupAdd.classList.add('button-add', 'popup-button', 'project-popup-button-add');
        popupAdd.textContent = 'Add';

        popupCancel.classList.add('button-cancel', 'popup-button', 'project-popup-button-cancel');
        popupCancel.textContent = 'Cancel';
      })()
      
      const listeners = (()=>{
        popupAdd.addEventListener('click', ()=>{
          log('ADD PROJECT CLICKED')
          ProjectDOM.toDOM(popupInput.value);
          popupInput.value = '';
          
          showHide(addProjectButton, popupContainer);
        })

        popupCancel.addEventListener('click', ()=>{
          showHide(addProjectButton, popupContainer);
        })
      })()

      popupButtons.append(popupAdd, popupCancel);
      popupContainer.append(popupInput, popupButtons)
      
      return popupContainer;
    }
    this.#menu.append(createAddProject(), createProjectPopup())
  }
}

class TaskDOM {
  static taskList = document.querySelector("#task-list");
  static title = document.querySelector(".main-title");

  static currentTitle(){
    return this.title.textContent;
  }

  static currentProject() {
    return todoBack.getProject(this.title.textContent);
  }

  static createTaskElement(task) {
    const taskEl = document.createElement("div");

    const complete = document.createElement("div");
    const title = document.createElement("div");
    const titleInput = document.createElement("input");
    const date = document.createElement("div");
    const dateInput = document.createElement("input");
    const close = document.createElement("div");

    const showHide = (first, second) => {
      const f = (el) =>
        el.classList.contains("active")
          ? (el.classList.remove("active"), el.classList.add("deactive"))
          : (el.classList.remove("deactive"), el.classList.add("active"));
      f(first);
      f(second);
    };

    const isCompleted = ()=>{
      if (task.getComplete()){ 
        //taskEl.classList.add('green');
        title.style.textDecoration = 'line-through';
        date.style.textDecoration = 'line-through';
        complete.id = 'o-clicked';
        
      }
    }

    const properties = (() => {
      taskEl.className = "task";
      complete.id = "o";

      title.classList.add("task-name", "active");
      titleInput.classList.add("task-name-input", "deactive");

      date.classList.add("task-date", "active");
      dateInput.classList.add("task-date-input", "deactive");
      dateInput.setAttribute("type", "date");

      close.className = "close";
      close.id = "x";
    })();

    const listeners = (() => {
      complete.addEventListener("click", (e) => {
        const parent = e.target.parentNode;
        this.setComplete(parent);
      });

      title.addEventListener("click", (e) => {
        const title = e.target;
        const input = title.nextSibling;
        //input.value = title.textContent;
        //CODE
        showHide(title, input);
      });

      titleInput.addEventListener("keydown", (e) => {
        const input = e.target;
        const title = input.previousSibling;

        if (e.key === "Escape") {
          showHide(title, input);
        }
        if (e.key === "Enter") {
          title.textContent = this.changeTitle(input);
          //Storage
          _storage__WEBPACK_IMPORTED_MODULE_2__["default"].saveTodoBack(todoBack)
          showHide(title, input);
        }
      });

      date.addEventListener("click", (e) => {
        const date = e.target;
        const input = date.nextSibling;
        showHide(date, input);
      });

      dateInput.addEventListener("change", (e) => {
        const input = e.target;
        const date = input.previousSibling;
        date.textContent = this.changeDate(input)
        //Storage
        _storage__WEBPACK_IMPORTED_MODULE_2__["default"].saveTodoBack(todoBack)

        if (this.currentTitle() === "Today") {
          this.todayDOM();
          this.updateDOM();
        }
        if (this.currentTitle() === "This week") {
          this.thisWeekDOM();
          this.updateDOM();
        }
        showHide(date, input);
      });

      close.addEventListener("click", (e) => {
        const parent = e.target.parentNode;
        this.removeFromDOM(parent);
      });
    })();

    taskEl.dataset.uid = task.uid;
    title.textContent = task.title;
    if(this.currentTitle()==='Today'|| this.currentTitle()==='This week'){
      title.textContent = task.returnCustomTitle();
    }
    titleInput.value = task.getTitle();
    date.textContent = task.getDueDate();

    taskEl.append(complete, title, titleInput, date, dateInput, close);
    isCompleted();
    this.taskList.append(taskEl);
  }

  static blankPage(){
    this.taskList.innerHTML = '';
  }

  static toDOM(value) {
    const project = this.currentProject();
    if (value === "") {
      alert("Cant add empty value");
      return;
    }
    if (project.contains(value)) {
      alert("Task already exists");
      return;
    }
    project.addTask(new _todos__WEBPACK_IMPORTED_MODULE_1__["default"](value, this.title.textContent));
    //Storage
    this.updateDOM()
    _storage__WEBPACK_IMPORTED_MODULE_2__["default"].saveTodoBack(todoBack);

    log(project);
  }

  static updateDOM(){
    const project = this.currentProject();
    this.blankPage();
    project.tasks.forEach(task => this.createTaskElement(task));
  }

  static todayDOM(){
    const projects = todoBack.getProjects();
    const today = todoBack.getProject('Today');
    let temp = [];
    projects.forEach(project => {
      if(project.getName()==='Today'|| project.getName()==='This week') return;
      temp.push(project.todayTasks())
    })
    temp = temp.flat();
    today.setTasks(temp);
    todoBack.getProjects().forEach(project => project.sortByCompleted())
  }

  static thisWeekDOM(){
    const projects = todoBack.getProjects();
    const thisWeek = todoBack.getProject('This week')
    let temp = [];
    projects.forEach(project => {
      if(project.getName()==='Today'|| project.getName()==='This week') return;
      temp.push(project.thisWeekTasks())
    })
    temp = temp.flat();
    thisWeek.setTasks(temp);
    todoBack.getProjects().forEach(project => project.sortByCompleted())
    log(temp)
  }
  //--------------------------------------------------------------------------------------------------
  // BUTTONS
  //--------------------------------------------------------------------------------------------------
  static setComplete(element) {
    const uid = element.dataset.uid;
    const project = this.currentProject();
    const task = project.getTaskByUID(uid);
    task.setCompleted();
    //project.addCompleted(task);
    //element.remove();
    todoBack.getProjects().forEach(project => project.sortByCompleted())
    //Storage
    _storage__WEBPACK_IMPORTED_MODULE_2__["default"].saveTodoBack(todoBack);

    this.updateDOM();
    log(task);
  }

  static changeTitle(element) {
    const project = this.currentProject();
    const uid = element.parentNode.dataset.uid;
    const task = project.getTaskByUID(uid);
    if (element.value === "") {
      alert("Input field is empty");
      return task.title;
    }
    if (project.contains(element.value)) {
      alert("This task already exists");
      return task.title;
    }
    task.setTitle(element.value);

    log(project);
    if(this.currentTitle()==='Today'|| this.currentTitle()==='This week'){
      return task.returnCustomTitle();
    }else{
    return task.getTitle()}
  }

  static changeDate(element) {
    const project = this.currentProject();
    const uid = element.parentNode.dataset.uid;
    const task = project.getTaskByUID(uid)
    task.setDueDate(element.value);

    log(task)
    return task.getDueDate()
  }

  static removeFromDOM(element) {
    const uid = element.dataset.uid;
    const project = this.currentProject();
    const task = project.getTaskByUID(uid);

    if(this.currentTitle() === 'Today'|| this.currentTitle() === 'This week'){
      const project = todoBack.getProject(task.getSource());
      project.removeTask(uid);
      element.remove()
    }

    project.removeTask(uid);
    element.remove();
    //Storage
    _storage__WEBPACK_IMPORTED_MODULE_2__["default"].saveTodoBack(todoBack)
  }
  //--------------------------------------------------------------------------------------------------
}

class ProjectDOM {
  static projectsList = document.querySelector(".projects-list");
  static mainTitle = document.querySelector(".main-title");

  static currentTitle(){
    return this.mainTitle.textContent;
  }

  static setTitle(title){
    this.mainTitle.textContent = title;
  }

  static projectTasksHandler = (project) => {
    this.setTitle(project.getName());

    CreateAddTask.blank();
    CreateAddProject.blank();
    CreateAddTask.addTaskDOM();
    CreateAddProject.addProjectDOM();

    if (this.mainTitle.textContent === "Today") {
      CreateAddTask.blank();
      TaskDOM.todayDOM();
    }
    if (this.mainTitle.textContent === "This week") {
      CreateAddTask.blank();
      TaskDOM.thisWeekDOM();
    }
    TaskDOM.updateDOM();
  }

  static createStaticProject(project, DOMelement) {
    DOMelement.addEventListener("click", () => this.projectTasksHandler(project));
  }

  static createProjectElement(project) {
    const projectEl = document.createElement("button");
    const projectImg = document.createElement("img");
    const projectName = document.createElement("div");
    const projectX = document.createElement("div");

    const addProperties = (() => {
      projectEl.className = "project";
      projectImg.setAttribute("src", "./img/list-box-outline.svg");
      projectName.className = "project-name";
      projectX.id = "x";
    })();

    const addListener = (() => {
      projectX.addEventListener("click", (e) => {
        const parent = e.target.parentNode;
        this.removeFromDOM(parent);
      });
      projectEl.addEventListener("click", (e) => {
        let parent = e.target.parentNode;
        if(e.target.id === 'x') return
        if (e.target.classList.contains('project')) parent = e.target; 
        const uid = parent.dataset.uid;
        const project = todoBack.getProjectByUID(uid)
        this.projectTasksHandler(project);
      });
    })();

    const constructProject = (() => {
      projectEl.append(projectImg, projectName, projectX);
    })();

    projectName.textContent = project.getName();
    projectEl.dataset.uid = project.getUID();

    this.projectsList.append(projectEl);
    
  }

  static resetTasks(){
    CreateAddTask.blank();
    TaskDOM.blankPage()
    this.mainTitle.textContent = '';
  }

  static blankPage() {
    this.projectsList.innerHTML = "";
  }

  static toDOM(value) {
    if (value === "") {
      alert("Project name cant be empty");
      return;
    }
    if (todoBack.contains(value)) {
      alert("Project already exists");
      return;
    }

    todoBack.addProject(new _projects__WEBPACK_IMPORTED_MODULE_0__["default"](value));
    this.updateDOM();
    //Storage
    _storage__WEBPACK_IMPORTED_MODULE_2__["default"].saveTodoBack(todoBack);

    log(todoBack);
  }

  static updateDOM() {
    this.blankPage();
    todoBack
      .getProjects()
      .forEach((project) => {
        if(project.getName()==='Inbox'|| project.getName()==='Today'|| project.getName()==='This week') return;
        this.createProjectElement(project)});
  }
  //---------------------------------------------------------------------------------------------
  // BUTTON
  static removeFromDOM(element) {
    const uid = element.dataset.uid;
    const project = todoBack.getProjectByUID(uid);
    const pageTitle = this.currentTitle();

    if (project.getName() === pageTitle) {
      this.resetTasks();
    }
    todoBack.deleteProject(uid);
    element.remove();

    if (pageTitle === "Today") {
      this.projectTasksHandler(todoBack.getProject(pageTitle))
    }
    if (pageTitle === "This week") {
      this.projectTasksHandler(todoBack.getProject(pageTitle));
    }
    //Storage
    _storage__WEBPACK_IMPORTED_MODULE_2__["default"].saveTodoBack(todoBack)
    log(todoBack)
  }
  //---------------------------------------------------------------------------------------------
}




/***/ }),

/***/ "./src/fonts/BeautifulPeople.ttf":
/*!***************************************!*\
  !*** ./src/fonts/BeautifulPeople.ttf ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "17efd45acf38dcea2253.ttf";

/***/ }),

/***/ "./src/fonts/FactoryLjds.ttf":
/*!***********************************!*\
  !*** ./src/fonts/FactoryLjds.ttf ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2df243ad623a11de1e9f.ttf";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQSxPQUFPOztBQUVQOztBQUVBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLFNBQVM7QUFDVCxPQUFPOztBQUVQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLDZEQUFvQjtBQUM5QjtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsNkRBQW9COztBQUU1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qiw4Q0FBSTtBQUM1QjtBQUNBO0FBQ0EsSUFBSSw2REFBb0I7O0FBRXhCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSw2REFBb0I7O0FBRXhCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUksNkRBQW9CO0FBQ3hCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDRCQUE0QixpREFBTztBQUNuQztBQUNBO0FBQ0EsSUFBSSw2REFBb0I7O0FBRXhCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLDZEQUFvQjtBQUN4QjtBQUNBO0FBQ0E7QUFDQTs7QUFFOEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8xMC1wcm9qZWN0LXRvLWRvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovLzEwLXByb2plY3QtdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vMTAtcHJvamVjdC10by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly8xMC1wcm9qZWN0LXRvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly8xMC1wcm9qZWN0LXRvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZGVmYXVsdE9wdGlvbnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vMTAtcHJvamVjdC10by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qcyIsIndlYnBhY2s6Ly8xMC1wcm9qZWN0LXRvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzIiwid2VicGFjazovLzEwLXByb2plY3QtdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vYWRkRGF5cy9pbmRleC5qcyIsIndlYnBhY2s6Ly8xMC1wcm9qZWN0LXRvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzU2FtZURheS9pbmRleC5qcyIsIndlYnBhY2s6Ly8xMC1wcm9qZWN0LXRvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzU2FtZVdlZWsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vMTAtcHJvamVjdC10by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc1RoaXNXZWVrL2luZGV4LmpzIiwid2VicGFjazovLzEwLXByb2plY3QtdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNUb2RheS9pbmRleC5qcyIsIndlYnBhY2s6Ly8xMC1wcm9qZWN0LXRvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3N0YXJ0T2ZEYXkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vMTAtcHJvamVjdC10by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9zdGFydE9mV2Vlay9pbmRleC5qcyIsIndlYnBhY2s6Ly8xMC1wcm9qZWN0LXRvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3N1YkRheXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vMTAtcHJvamVjdC10by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS90b0RhdGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vMTAtcHJvamVjdC10by1kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovLzEwLXByb2plY3QtdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly8xMC1wcm9qZWN0LXRvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovLzEwLXByb2plY3QtdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly8xMC1wcm9qZWN0LXRvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vMTAtcHJvamVjdC10by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vMTAtcHJvamVjdC10by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vMTAtcHJvamVjdC10by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9jb21tb25qcy1icm93c2VyL2luZGV4LmpzIiwid2VicGFjazovLzEwLXByb2plY3QtdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvY29tbW9uanMtYnJvd3Nlci9tZDUuanMiLCJ3ZWJwYWNrOi8vMTAtcHJvamVjdC10by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9jb21tb25qcy1icm93c2VyL25hdGl2ZS5qcyIsIndlYnBhY2s6Ly8xMC1wcm9qZWN0LXRvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2NvbW1vbmpzLWJyb3dzZXIvbmlsLmpzIiwid2VicGFjazovLzEwLXByb2plY3QtdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvY29tbW9uanMtYnJvd3Nlci9wYXJzZS5qcyIsIndlYnBhY2s6Ly8xMC1wcm9qZWN0LXRvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2NvbW1vbmpzLWJyb3dzZXIvcmVnZXguanMiLCJ3ZWJwYWNrOi8vMTAtcHJvamVjdC10by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9jb21tb25qcy1icm93c2VyL3JuZy5qcyIsIndlYnBhY2s6Ly8xMC1wcm9qZWN0LXRvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2NvbW1vbmpzLWJyb3dzZXIvc2hhMS5qcyIsIndlYnBhY2s6Ly8xMC1wcm9qZWN0LXRvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2NvbW1vbmpzLWJyb3dzZXIvc3RyaW5naWZ5LmpzIiwid2VicGFjazovLzEwLXByb2plY3QtdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvY29tbW9uanMtYnJvd3Nlci92MS5qcyIsIndlYnBhY2s6Ly8xMC1wcm9qZWN0LXRvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2NvbW1vbmpzLWJyb3dzZXIvdjMuanMiLCJ3ZWJwYWNrOi8vMTAtcHJvamVjdC10by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9jb21tb25qcy1icm93c2VyL3YzNS5qcyIsIndlYnBhY2s6Ly8xMC1wcm9qZWN0LXRvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2NvbW1vbmpzLWJyb3dzZXIvdjQuanMiLCJ3ZWJwYWNrOi8vMTAtcHJvamVjdC10by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9jb21tb25qcy1icm93c2VyL3Y1LmpzIiwid2VicGFjazovLzEwLXByb2plY3QtdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvY29tbW9uanMtYnJvd3Nlci92YWxpZGF0ZS5qcyIsIndlYnBhY2s6Ly8xMC1wcm9qZWN0LXRvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2NvbW1vbmpzLWJyb3dzZXIvdmVyc2lvbi5qcyIsIndlYnBhY2s6Ly8xMC1wcm9qZWN0LXRvLWRvLWxpc3QvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vMTAtcHJvamVjdC10by1kby1saXN0Ly4vc3JjL21vZHVsZXMvcHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vMTAtcHJvamVjdC10by1kby1saXN0Ly4vc3JjL21vZHVsZXMvc3RvcmFnZS5qcyIsIndlYnBhY2s6Ly8xMC1wcm9qZWN0LXRvLWRvLWxpc3QvLi9zcmMvbW9kdWxlcy90by1kby1iYWNrLmpzIiwid2VicGFjazovLzEwLXByb2plY3QtdG8tZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3RvZG9zLmpzIiwid2VicGFjazovLzEwLXByb2plY3QtdG8tZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3VpLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ZvbnRzL0JlYXV0aWZ1bFBlb3BsZS50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL2ZvbnRzL0ZhY3RvcnlMamRzLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnQmVhdXRpZnVsLVBlb3BsZSc7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIikgZm9ybWF0KFxcXCJ0cnVldHlwZVxcXCIpO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ0ZhY3RvcnktTEpEUyc7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIikgZm9ybWF0KFxcXCJ0cnVldHlwZVxcXCIpO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuXFxuKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG5cXG59XFxuXFxuOnJvb3Qge1xcbiAgZm9udC1zaXplOiA2Mi41JTtcXG4gIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFxcXCJTZWdvZSBVSVxcXCIsIFJvYm90bywgSGVsdmV0aWNhLFxcbiAgICBBcmlhbCwgc2Fucy1zZXJpZiwgXFxcIkFwcGxlIENvbG9yIEVtb2ppXFxcIiwgXFxcIlNlZ29lIFVJIEVtb2ppXFxcIiwgXFxcIlNlZ29lIFVJIFN5bWJvbFxcXCI7XFxuXFxuICAtLW1haW4tZm9udDogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcXFwiU2Vnb2UgVUlcXFwiLCBSb2JvdG8sIEhlbHZldGljYSxcXG4gIEFyaWFsLCBzYW5zLXNlcmlmLCBcXFwiQXBwbGUgQ29sb3IgRW1vamlcXFwiLCBcXFwiU2Vnb2UgVUkgRW1vamlcXFwiLCBcXFwiU2Vnb2UgVUkgU3ltYm9sXFxcIjtcXG4gIC0tc3RhbGUtOTAwOiAjMzM0MTU1O1xcbiAgLS1zdGFsZS00MDA6ICM5NGEzYjg7XFxuICAtLXN0YWxlLTMwMDogI2NiZDVlMTtcXG4gIC0tc3RhbGUtMjAwOiAjZTJlOGYwO1xcbiAgLS1zdGFsZS0xMDA6ICNmMWY1Zjk7XFxuICBjb2xvcjogYmxhY2s7XFxufVxcblxcbmJ1dHRvbiB7XFxuICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcXFwiU2Vnb2UgVUlcXFwiLCBSb2JvdG8sIEhlbHZldGljYSxcXG4gICAgQXJpYWwsIHNhbnMtc2VyaWYsIFxcXCJBcHBsZSBDb2xvciBFbW9qaVxcXCIsIFxcXCJTZWdvZSBVSSBFbW9qaVxcXCIsIFxcXCJTZWdvZSBVSSBTeW1ib2xcXFwiO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgZm9udC1zaXplOiAxLjZyZW07XFxuICBwYWRkaW5nOiA1cHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMXJlbTtcXG59XFxuXFxuYm9keSB7XFxuICBmb250LXNpemU6IDEuNnJlbTtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG4uZ3JpZC1jb250YWluZXIge1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMHJlbSAxZnIgNXJlbTtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWlubWF4KDI1cmVtLCAxZnIpIG1pbm1heCg1MHJlbSAsNWZyKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXN0YWxlLTEwMCk7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgZ3JpZC1jb2x1bW46IDEvNDtcXG4gIGdyaWQtcm93OiAxO1xcbiAgZm9udC1mYW1pbHk6ICdCZWF1dGlmdWwtUGVvcGxlJztcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXN0YWxlLTkwMCk7XFxuICBjb2xvcjogd2hpdGU7XFxuICBwYWRkaW5nLWxlZnQ6IDJyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnNpZGViYXIge1xcbiAgZ3JpZC1jb2x1bW46IDE7XFxuICBncmlkLXJvdzogMjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXN0YWxlLTIwMCk7XFxuXFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxNXJlbSAxZnI7XFxuXFxufVxcblxcbi5tZW51LCAucHJvamVjdHMge1xcbiAgcGFkZGluZzogMCAxLjVyZW07XFxuICAtYm9yZGVyOiAxcHggc29saWQgYmx1ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAycHhcXG4gIFxcbn1cXG5cXG5oMyB7XFxuICBwYWRkaW5nOiAwIDEwcHg7XFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5tZW51e1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbi5wcm9qZWN0cyB7XFxuICAtYm9yZGVyOiAxcHggc29saWQgZ3JlZW47XFxuICBnYXA6IDEuNXJlbTtcXG59XFxuXFxuLmFkZC1wcm9qZWN0LW1lbnUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc3RhbGUtMjAwKTtcXG4gIGdhcDogMS41cmVtO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5tYWluLWNvbnRhaW5lciB7XFxuICBncmlkLXJvdzogMjtcXG4gIGdyaWQtY29sdW1uOiAyLzQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zdGFsZS0xMDApO1xcbiAgcGFkZGluZzogMnJlbSAycmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDEuNXJlbTtcXG4gIHdpZHRoOiBtaW4oODByZW0sIDEwMCUpO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxufVxcblxcbi50YXNrLCAucHJvamVjdCB7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMS41cmVtXFxufVxcblxcbi5mb290ZXIge1xcbiAgZm9udC1mYW1pbHk6ICdGYWN0b3J5LUxKRFMnO1xcbiAgZ3JpZC1jb2x1bW46IDEvNDtcXG4gIGdyaWQtcm93OiAzO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc3RhbGUtOTAwKTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi50YXNrLW5hbWUge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZmxleDogMTtcXG59XFxuXFxuLnRhc2stZGF0ZSB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiNvIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIHdpZHRoOiAycmVtO1xcbiAgbWluLXdpZHRoOiAycmVtO1xcbiAgaGVpZ2h0OiAycmVtO1xcbiAgYm9yZGVyOiAzcHggc29saWQgdmFyKC0tc3RhbGUtOTAwKTtcXG59XFxuXFxuI28tY2xpY2tlZHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB3aWR0aDogMnJlbTtcXG4gIG1pbi13aWR0aDogMnJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGhlaWdodDogMnJlbTtcXG4gIGJvcmRlcjogM3B4IHNvbGlkIHZhcigtLXN0YWxlLTkwMCk7XFxufVxcblxcbiNvLWNsaWNrZWQ6OmJlZm9yZXtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgd2lkdGg6IDFyZW07XFxuICBoZWlnaHQ6IDFyZW07XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zdGFsZS05MDApO1xcbn1cXG5cXG4jeCB7XFxuICBwYWRkaW5nOiA2cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3JkZXI6IDNweCBzb2xpZCAjMzM0MTU1O1xcbiAgYmFja2dyb3VuZDpcXG4gICAgbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCByZ2JhKDAsIDAsIDAsIDApIDAlLCByZ2JhKDAsIDAsIDAsIDApIDQzJSwgI2ZmZiA0NSUsICNmZmYgNTUlLCByZ2JhKDAsIDAsIDAsIDApIDU3JSwgcmdiYSgwLCAwLCAwLCAwKSAxMDAlKSxcXG4gICAgbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzMzNDE1NSAwJSwgIzMzNDE1NSA0MyUsICNmZmYgNDUlLCAjZmZmIDU1JSwgIzMzNDE1NSA1NyUsICMzMzQxNTUgMTAwJSk7XFxufVxcblxcbiNwbHVzIHtcXG4gIHBhZGRpbmc6IDZweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGJvcmRlcjogM3B4IHNvbGlkICMzMzQxNTU7XFxuICBiYWNrZ3JvdW5kOlxcbiAgICBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHJnYmEoMCwgMCwgMCwgMCkgMCUsIHJnYmEoMCwgMCwgMCwgMCkgNDMlLCAjZmZmIDQ1JSwgI2ZmZiA1NSUsIHJnYmEoMCwgMCwgMCwgMCkgNTclLCByZ2JhKDAsIDAsIDAsIDApIDEwMCUpLFxcbiAgICBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjMzM0MTU1IDAlLCAjMzM0MTU1IDQzJSwgI2ZmZiA0NSUsICNmZmYgNTUlLCAjMzM0MTU1IDU3JSwgIzMzNDE1NSAxMDAlKTtcXG59XFxuXFxuLmFkZC10YXNrLW1lbnUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc3RhbGUtMTAwKTtcXG4gIGdhcDogMS41cmVtO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5hZGQtdGFzay1tZW51OmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXN0YWxlLTIwMCk7XFxufVxcblxcbi5zaWRlLW1lbnUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc3RhbGUtMjAwKTtcXG59XFxuXFxuLnNpZGUtbWVudTpob3ZlciwgLmFkZC1wcm9qZWN0LW1lbnU6aG92ZXIsIC5wcm9qZWN0OmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXN0YWxlLTMwMCk7XFxufVxcblxcbi5zaWRlLW1lbnU+aW1nLCAucHJvamVjdD5pbWcge1xcbiAgaGVpZ2h0OiAyLjVyZW07XFxufVxcblxcbi5wcm9qZWN0e1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXN0YWxlLTIwMCk7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5wcm9qZWN0cy1saXN0e1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAycHg7XFxufVxcbi5wcm9qZWN0LW5hbWV7XFxuICBmbGV4OiAxO1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG59XFxuXFxuLnBvcHVwLW1lbnV7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMXJlbTtcXG4gIHBhZGRpbmc6IDVweDtcXG59XFxuXFxuLnBvcHVwLWJ1dHRvbnN7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxLjVyZW07XFxufVxcblxcbi5wb3B1cC1idXR0b257XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgYm9yZGVyOiAgMXB4IHNvbGlkIHZhcigtLXN0YWxlLTQwMCk7XFxuICBwYWRkaW5nOiA4cHggMTZweDtcXG4gIGZsZXg6IDE7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG4uYnV0dG9uLWFkZHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JlZW47XFxufVxcbi5idXR0b24tYWRkOmhvdmVye1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNDQsIDIzOCwgMTQ0LCAwLjc0KTtcXG59XFxuLmJ1dHRvbi1jYW5jZWx7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGNvcmFsO1xcbn1cXG4uYnV0dG9uLWNhbmNlbDpob3ZlcntcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQwLCAxMjgsIDEyOCwgMC42NjQpXFxufVxcbi5wb3B1cC1tZW51LWlucHV0e1xcbiAgZm9udC1zaXplOiAxLjZyZW07XFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1zdGFsZS00MDApO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgcGFkZGluZzogOHB4O1xcbn1cXG4ucG9wdXAtbWVudS1pbnB1dDpmb2N1c3tcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbi50YXNrLW5hbWUtaW5wdXR7XFxuICBmb250LXNpemU6IDEuNnJlbTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXN0YWxlLTQwMCk7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBwYWRkaW5nOiAycHg7XFxuICBmbGV4OiAxO1xcbn1cXG4udGFzay1uYW1lLWlucHV0OmZvY3Vze1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLnRhc2stZGF0ZS1pbnB1dHtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1tYWluLWZvbnQpIDtcXG4gIGZvbnQtc2l6ZTogMS42cmVtO1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tc3RhbGUtNDAwKTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHBhZGRpbmc6IDJweDtcXG59XFxuXFxuLmFjdGl2ZXtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcbi5kZWFjdGl2ZXtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbi5ncmVlbntcXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JlZW47XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSwrQkFBK0I7RUFDL0IsK0RBQTBEO0VBQzFELGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSwyQkFBMkI7RUFDM0IsK0RBQXNEO0VBQ3RELGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLHNCQUFzQjtFQUN0QixxQkFBcUI7RUFDckIscUJBQXFCOztBQUV2Qjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQjsrRUFDNkU7O0VBRTdFOzZFQUMyRTtFQUMzRSxvQkFBb0I7RUFDcEIsb0JBQW9CO0VBQ3BCLG9CQUFvQjtFQUNwQixvQkFBb0I7RUFDcEIsb0JBQW9CO0VBQ3BCLFlBQVk7QUFDZDs7QUFFQTtFQUNFOytFQUM2RTtFQUM3RSxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsU0FBUztBQUNYOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2Isa0NBQWtDO0VBQ2xDLDREQUE0RDtFQUM1RCxrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLCtCQUErQjtFQUMvQixrQ0FBa0M7RUFDbEMsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsY0FBYztFQUNkLFdBQVc7RUFDWCxrQ0FBa0M7O0VBRWxDLGFBQWE7RUFDYiw2QkFBNkI7O0FBRS9COztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLHVCQUF1QjtFQUN2QixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCOztBQUVGOztBQUVBO0VBQ0UsZUFBZTtFQUNmLG1C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dWwtUGVvcGxlJztcXG4gIHNyYzogdXJsKCcuL2ZvbnRzL0JlYXV0aWZ1bFBlb3BsZS50dGYnKSBmb3JtYXQoXFxcInRydWV0eXBlXFxcIik7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnRmFjdG9yeS1MSkRTJztcXG4gIHNyYzogdXJsKCcuL2ZvbnRzL0ZhY3RvcnlMamRzLnR0ZicpIGZvcm1hdChcXFwidHJ1ZXR5cGVcXFwiKTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcbioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuXFxufVxcblxcbjpyb290IHtcXG4gIGZvbnQtc2l6ZTogNjIuNSU7XFxuICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcXFwiU2Vnb2UgVUlcXFwiLCBSb2JvdG8sIEhlbHZldGljYSxcXG4gICAgQXJpYWwsIHNhbnMtc2VyaWYsIFxcXCJBcHBsZSBDb2xvciBFbW9qaVxcXCIsIFxcXCJTZWdvZSBVSSBFbW9qaVxcXCIsIFxcXCJTZWdvZSBVSSBTeW1ib2xcXFwiO1xcblxcbiAgLS1tYWluLWZvbnQ6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXFxcIlNlZ29lIFVJXFxcIiwgUm9ib3RvLCBIZWx2ZXRpY2EsXFxuICBBcmlhbCwgc2Fucy1zZXJpZiwgXFxcIkFwcGxlIENvbG9yIEVtb2ppXFxcIiwgXFxcIlNlZ29lIFVJIEVtb2ppXFxcIiwgXFxcIlNlZ29lIFVJIFN5bWJvbFxcXCI7XFxuICAtLXN0YWxlLTkwMDogIzMzNDE1NTtcXG4gIC0tc3RhbGUtNDAwOiAjOTRhM2I4O1xcbiAgLS1zdGFsZS0zMDA6ICNjYmQ1ZTE7XFxuICAtLXN0YWxlLTIwMDogI2UyZThmMDtcXG4gIC0tc3RhbGUtMTAwOiAjZjFmNWY5O1xcbiAgY29sb3I6IGJsYWNrO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXFxcIlNlZ29lIFVJXFxcIiwgUm9ib3RvLCBIZWx2ZXRpY2EsXFxuICAgIEFyaWFsLCBzYW5zLXNlcmlmLCBcXFwiQXBwbGUgQ29sb3IgRW1vamlcXFwiLCBcXFwiU2Vnb2UgVUkgRW1vamlcXFwiLCBcXFwiU2Vnb2UgVUkgU3ltYm9sXFxcIjtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGZvbnQtc2l6ZTogMS42cmVtO1xcbiAgcGFkZGluZzogNXB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDFyZW07XFxufVxcblxcbmJvZHkge1xcbiAgZm9udC1zaXplOiAxLjZyZW07XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuLmdyaWQtY29udGFpbmVyIHtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMTByZW0gMWZyIDVyZW07XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbm1heCgyNXJlbSwgMWZyKSBtaW5tYXgoNTByZW0gLDVmcik7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zdGFsZS0xMDApO1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gIGdyaWQtY29sdW1uOiAxLzQ7XFxuICBncmlkLXJvdzogMTtcXG4gIGZvbnQtZmFtaWx5OiAnQmVhdXRpZnVsLVBlb3BsZSc7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zdGFsZS05MDApO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgcGFkZGluZy1sZWZ0OiAycmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5zaWRlYmFyIHtcXG4gIGdyaWQtY29sdW1uOiAxO1xcbiAgZ3JpZC1yb3c6IDI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zdGFsZS0yMDApO1xcblxcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMTVyZW0gMWZyO1xcblxcbn1cXG5cXG4ubWVudSwgLnByb2plY3RzIHtcXG4gIHBhZGRpbmc6IDAgMS41cmVtO1xcbiAgLWJvcmRlcjogMXB4IHNvbGlkIGJsdWU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMnB4XFxuICBcXG59XFxuXFxuaDMge1xcbiAgcGFkZGluZzogMCAxMHB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4ubWVudXtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG4ucHJvamVjdHMge1xcbiAgLWJvcmRlcjogMXB4IHNvbGlkIGdyZWVuO1xcbiAgZ2FwOiAxLjVyZW07XFxufVxcblxcbi5hZGQtcHJvamVjdC1tZW51IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXN0YWxlLTIwMCk7XFxuICBnYXA6IDEuNXJlbTtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4ubWFpbi1jb250YWluZXIge1xcbiAgZ3JpZC1yb3c6IDI7XFxuICBncmlkLWNvbHVtbjogMi80O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc3RhbGUtMTAwKTtcXG4gIHBhZGRpbmc6IDJyZW0gMnJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxLjVyZW07XFxuICB3aWR0aDogbWluKDgwcmVtLCAxMDAlKTtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbn1cXG5cXG4udGFzaywgLnByb2plY3Qge1xcbiAgcGFkZGluZzogNXB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDEuNXJlbVxcbn1cXG5cXG4uZm9vdGVyIHtcXG4gIGZvbnQtZmFtaWx5OiAnRmFjdG9yeS1MSkRTJztcXG4gIGdyaWQtY29sdW1uOiAxLzQ7XFxuICBncmlkLXJvdzogMztcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXN0YWxlLTkwMCk7XFxuICBjb2xvcjogd2hpdGU7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4udGFzay1uYW1lIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGZsZXg6IDE7XFxufVxcblxcbi50YXNrLWRhdGUge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jbyB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICB3aWR0aDogMnJlbTtcXG4gIG1pbi13aWR0aDogMnJlbTtcXG4gIGhlaWdodDogMnJlbTtcXG4gIGJvcmRlcjogM3B4IHNvbGlkIHZhcigtLXN0YWxlLTkwMCk7XFxufVxcblxcbiNvLWNsaWNrZWR7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgd2lkdGg6IDJyZW07XFxuICBtaW4td2lkdGg6IDJyZW07XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBoZWlnaHQ6IDJyZW07XFxuICBib3JkZXI6IDNweCBzb2xpZCB2YXIoLS1zdGFsZS05MDApO1xcbn1cXG5cXG4jby1jbGlja2VkOjpiZWZvcmV7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIHdpZHRoOiAxcmVtO1xcbiAgaGVpZ2h0OiAxcmVtO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc3RhbGUtOTAwKTtcXG59XFxuXFxuI3gge1xcbiAgcGFkZGluZzogNnB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm9yZGVyOiAzcHggc29saWQgIzMzNDE1NTtcXG4gIGJhY2tncm91bmQ6XFxuICAgIGxpbmVhci1ncmFkaWVudCg0NWRlZywgcmdiYSgwLCAwLCAwLCAwKSAwJSwgcmdiYSgwLCAwLCAwLCAwKSA0MyUsICNmZmYgNDUlLCAjZmZmIDU1JSwgcmdiYSgwLCAwLCAwLCAwKSA1NyUsIHJnYmEoMCwgMCwgMCwgMCkgMTAwJSksXFxuICAgIGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMzMzQxNTUgMCUsICMzMzQxNTUgNDMlLCAjZmZmIDQ1JSwgI2ZmZiA1NSUsICMzMzQxNTUgNTclLCAjMzM0MTU1IDEwMCUpO1xcbn1cXG5cXG4jcGx1cyB7XFxuICBwYWRkaW5nOiA2cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBib3JkZXI6IDNweCBzb2xpZCAjMzM0MTU1O1xcbiAgYmFja2dyb3VuZDpcXG4gICAgbGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2JhKDAsIDAsIDAsIDApIDAlLCByZ2JhKDAsIDAsIDAsIDApIDQzJSwgI2ZmZiA0NSUsICNmZmYgNTUlLCByZ2JhKDAsIDAsIDAsIDApIDU3JSwgcmdiYSgwLCAwLCAwLCAwKSAxMDAlKSxcXG4gICAgbGluZWFyLWdyYWRpZW50KDE4MGRlZywgIzMzNDE1NSAwJSwgIzMzNDE1NSA0MyUsICNmZmYgNDUlLCAjZmZmIDU1JSwgIzMzNDE1NSA1NyUsICMzMzQxNTUgMTAwJSk7XFxufVxcblxcbi5hZGQtdGFzay1tZW51IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXN0YWxlLTEwMCk7XFxuICBnYXA6IDEuNXJlbTtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uYWRkLXRhc2stbWVudTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zdGFsZS0yMDApO1xcbn1cXG5cXG4uc2lkZS1tZW51IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXN0YWxlLTIwMCk7XFxufVxcblxcbi5zaWRlLW1lbnU6aG92ZXIsIC5hZGQtcHJvamVjdC1tZW51OmhvdmVyLCAucHJvamVjdDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zdGFsZS0zMDApO1xcbn1cXG5cXG4uc2lkZS1tZW51PmltZywgLnByb2plY3Q+aW1nIHtcXG4gIGhlaWdodDogMi41cmVtO1xcbn1cXG5cXG4ucHJvamVjdHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zdGFsZS0yMDApO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4ucHJvamVjdHMtbGlzdHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMnB4O1xcbn1cXG4ucHJvamVjdC1uYW1le1xcbiAgZmxleDogMTtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxufVxcblxcbi5wb3B1cC1tZW51e1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDFyZW07XFxuICBwYWRkaW5nOiA1cHg7XFxufVxcblxcbi5wb3B1cC1idXR0b25ze1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMS41cmVtO1xcbn1cXG5cXG4ucG9wdXAtYnV0dG9ue1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGJvcmRlcjogIDFweCBzb2xpZCB2YXIoLS1zdGFsZS00MDApO1xcbiAgcGFkZGluZzogOHB4IDE2cHg7XFxuICBmbGV4OiAxO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuLmJ1dHRvbi1hZGR7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZWVuO1xcbn1cXG4uYnV0dG9uLWFkZDpob3ZlcntcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTQ0LCAyMzgsIDE0NCwgMC43NCk7XFxufVxcbi5idXR0b24tY2FuY2Vse1xcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRjb3JhbDtcXG59XFxuLmJ1dHRvbi1jYW5jZWw6aG92ZXJ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0MCwgMTI4LCAxMjgsIDAuNjY0KVxcbn1cXG4ucG9wdXAtbWVudS1pbnB1dHtcXG4gIGZvbnQtc2l6ZTogMS42cmVtO1xcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tc3RhbGUtNDAwKTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHBhZGRpbmc6IDhweDtcXG59XFxuLnBvcHVwLW1lbnUtaW5wdXQ6Zm9jdXN7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4udGFzay1uYW1lLWlucHV0e1xcbiAgZm9udC1zaXplOiAxLjZyZW07XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1zdGFsZS00MDApO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgcGFkZGluZzogMnB4O1xcbiAgZmxleDogMTtcXG59XFxuLnRhc2stbmFtZS1pbnB1dDpmb2N1c3tcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbi50YXNrLWRhdGUtaW5wdXR7XFxuICBmb250LWZhbWlseTogdmFyKC0tbWFpbi1mb250KSA7XFxuICBmb250LXNpemU6IDEuNnJlbTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXN0YWxlLTQwMCk7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBwYWRkaW5nOiAycHg7XFxufVxcblxcbi5hY3RpdmV7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG4uZGVhY3RpdmV7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG4uZ3JlZW57XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZWVuO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJ2YXIgZGVmYXVsdE9wdGlvbnMgPSB7fTtcbmV4cG9ydCBmdW5jdGlvbiBnZXREZWZhdWx0T3B0aW9ucygpIHtcbiAgcmV0dXJuIGRlZmF1bHRPcHRpb25zO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHNldERlZmF1bHRPcHRpb25zKG5ld09wdGlvbnMpIHtcbiAgZGVmYXVsdE9wdGlvbnMgPSBuZXdPcHRpb25zO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlcXVpcmVkQXJncyhyZXF1aXJlZCwgYXJncykge1xuICBpZiAoYXJncy5sZW5ndGggPCByZXF1aXJlZCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IocmVxdWlyZWQgKyAnIGFyZ3VtZW50JyArIChyZXF1aXJlZCA+IDEgPyAncycgOiAnJykgKyAnIHJlcXVpcmVkLCBidXQgb25seSAnICsgYXJncy5sZW5ndGggKyAnIHByZXNlbnQnKTtcbiAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvSW50ZWdlcihkaXJ0eU51bWJlcikge1xuICBpZiAoZGlydHlOdW1iZXIgPT09IG51bGwgfHwgZGlydHlOdW1iZXIgPT09IHRydWUgfHwgZGlydHlOdW1iZXIgPT09IGZhbHNlKSB7XG4gICAgcmV0dXJuIE5hTjtcbiAgfVxuXG4gIHZhciBudW1iZXIgPSBOdW1iZXIoZGlydHlOdW1iZXIpO1xuXG4gIGlmIChpc05hTihudW1iZXIpKSB7XG4gICAgcmV0dXJuIG51bWJlcjtcbiAgfVxuXG4gIHJldHVybiBudW1iZXIgPCAwID8gTWF0aC5jZWlsKG51bWJlcikgOiBNYXRoLmZsb29yKG51bWJlcik7XG59IiwiaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vX2xpYi90b0ludGVnZXIvaW5kZXguanNcIjtcbmltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgYWRkRGF5c1xuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBBZGQgdGhlIHNwZWNpZmllZCBudW1iZXIgb2YgZGF5cyB0byB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEFkZCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBkYXlzIHRvIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0byBiZSBjaGFuZ2VkXG4gKiBAcGFyYW0ge051bWJlcn0gYW1vdW50IC0gdGhlIGFtb3VudCBvZiBkYXlzIHRvIGJlIGFkZGVkLiBQb3NpdGl2ZSBkZWNpbWFscyB3aWxsIGJlIHJvdW5kZWQgdXNpbmcgYE1hdGguZmxvb3JgLCBkZWNpbWFscyBsZXNzIHRoYW4gemVybyB3aWxsIGJlIHJvdW5kZWQgdXNpbmcgYE1hdGguY2VpbGAuXG4gKiBAcmV0dXJucyB7RGF0ZX0gLSB0aGUgbmV3IGRhdGUgd2l0aCB0aGUgZGF5cyBhZGRlZFxuICogQHRocm93cyB7VHlwZUVycm9yfSAtIDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFkZCAxMCBkYXlzIHRvIDEgU2VwdGVtYmVyIDIwMTQ6XG4gKiBjb25zdCByZXN1bHQgPSBhZGREYXlzKG5ldyBEYXRlKDIwMTQsIDgsIDEpLCAxMClcbiAqIC8vPT4gVGh1IFNlcCAxMSAyMDE0IDAwOjAwOjAwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkRGF5cyhkaXJ0eURhdGUsIGRpcnR5QW1vdW50KSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgYW1vdW50ID0gdG9JbnRlZ2VyKGRpcnR5QW1vdW50KTtcblxuICBpZiAoaXNOYU4oYW1vdW50KSkge1xuICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB9XG5cbiAgaWYgKCFhbW91bnQpIHtcbiAgICAvLyBJZiAwIGRheXMsIG5vLW9wIHRvIGF2b2lkIGNoYW5naW5nIHRpbWVzIGluIHRoZSBob3VyIGJlZm9yZSBlbmQgb2YgRFNUXG4gICAgcmV0dXJuIGRhdGU7XG4gIH1cblxuICBkYXRlLnNldERhdGUoZGF0ZS5nZXREYXRlKCkgKyBhbW91bnQpO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJpbXBvcnQgc3RhcnRPZkRheSBmcm9tIFwiLi4vc3RhcnRPZkRheS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgaXNTYW1lRGF5XG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEFyZSB0aGUgZ2l2ZW4gZGF0ZXMgaW4gdGhlIHNhbWUgZGF5IChhbmQgeWVhciBhbmQgbW9udGgpP1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQXJlIHRoZSBnaXZlbiBkYXRlcyBpbiB0aGUgc2FtZSBkYXkgKGFuZCB5ZWFyIGFuZCBtb250aCk/XG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZUxlZnQgLSB0aGUgZmlyc3QgZGF0ZSB0byBjaGVja1xuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZVJpZ2h0IC0gdGhlIHNlY29uZCBkYXRlIHRvIGNoZWNrXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGRhdGVzIGFyZSBpbiB0aGUgc2FtZSBkYXkgKGFuZCB5ZWFyIGFuZCBtb250aClcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQXJlIDQgU2VwdGVtYmVyIDA2OjAwOjAwIGFuZCA0IFNlcHRlbWJlciAxODowMDowMCBpbiB0aGUgc2FtZSBkYXk/XG4gKiBjb25zdCByZXN1bHQgPSBpc1NhbWVEYXkobmV3IERhdGUoMjAxNCwgOCwgNCwgNiwgMCksIG5ldyBEYXRlKDIwMTQsIDgsIDQsIDE4LCAwKSlcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBcmUgNCBTZXB0ZW1iZXIgYW5kIDQgT2N0b2JlciBpbiB0aGUgc2FtZSBkYXk/XG4gKiBjb25zdCByZXN1bHQgPSBpc1NhbWVEYXkobmV3IERhdGUoMjAxNCwgOCwgNCksIG5ldyBEYXRlKDIwMTQsIDksIDQpKVxuICogLy89PiBmYWxzZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBcmUgNCBTZXB0ZW1iZXIsIDIwMTQgYW5kIDQgU2VwdGVtYmVyLCAyMDE1IGluIHRoZSBzYW1lIGRheT9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzU2FtZURheShuZXcgRGF0ZSgyMDE0LCA4LCA0KSwgbmV3IERhdGUoMjAxNSwgOCwgNCkpXG4gKiAvLz0+IGZhbHNlXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNTYW1lRGF5KGRpcnR5RGF0ZUxlZnQsIGRpcnR5RGF0ZVJpZ2h0KSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZUxlZnRTdGFydE9mRGF5ID0gc3RhcnRPZkRheShkaXJ0eURhdGVMZWZ0KTtcbiAgdmFyIGRhdGVSaWdodFN0YXJ0T2ZEYXkgPSBzdGFydE9mRGF5KGRpcnR5RGF0ZVJpZ2h0KTtcbiAgcmV0dXJuIGRhdGVMZWZ0U3RhcnRPZkRheS5nZXRUaW1lKCkgPT09IGRhdGVSaWdodFN0YXJ0T2ZEYXkuZ2V0VGltZSgpO1xufSIsImltcG9ydCBzdGFydE9mV2VlayBmcm9tIFwiLi4vc3RhcnRPZldlZWsvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5cbi8qKlxuICogQG5hbWUgaXNTYW1lV2Vla1xuICogQGNhdGVnb3J5IFdlZWsgSGVscGVyc1xuICogQHN1bW1hcnkgQXJlIHRoZSBnaXZlbiBkYXRlcyBpbiB0aGUgc2FtZSB3ZWVrIChhbmQgbW9udGggYW5kIHllYXIpP1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQXJlIHRoZSBnaXZlbiBkYXRlcyBpbiB0aGUgc2FtZSB3ZWVrIChhbmQgbW9udGggYW5kIHllYXIpP1xuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVMZWZ0IC0gdGhlIGZpcnN0IGRhdGUgdG8gY2hlY2tcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVSaWdodCAtIHRoZSBzZWNvbmQgZGF0ZSB0byBjaGVja1xuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSAtIGFuIG9iamVjdCB3aXRoIG9wdGlvbnMuXG4gKiBAcGFyYW0ge0xvY2FsZX0gW29wdGlvbnMubG9jYWxlPWRlZmF1bHRMb2NhbGVdIC0gdGhlIGxvY2FsZSBvYmplY3QuIFNlZSBbTG9jYWxlXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL0xvY2FsZX1cbiAqIEBwYXJhbSB7MHwxfDJ8M3w0fDV8Nn0gW29wdGlvbnMud2Vla1N0YXJ0c09uPTBdIC0gdGhlIGluZGV4IG9mIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsgKDAgLSBTdW5kYXkpXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGRhdGVzIGFyZSBpbiB0aGUgc2FtZSB3ZWVrIChhbmQgbW9udGggYW5kIHllYXIpXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy53ZWVrU3RhcnRzT25gIG11c3QgYmUgYmV0d2VlbiAwIGFuZCA2XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSAzMSBBdWd1c3QgMjAxNCBhbmQgNCBTZXB0ZW1iZXIgMjAxNCBpbiB0aGUgc2FtZSB3ZWVrP1xuICogY29uc3QgcmVzdWx0ID0gaXNTYW1lV2VlayhuZXcgRGF0ZSgyMDE0LCA3LCAzMSksIG5ldyBEYXRlKDIwMTQsIDgsIDQpKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHdlZWsgc3RhcnRzIHdpdGggTW9uZGF5LFxuICogLy8gYXJlIDMxIEF1Z3VzdCAyMDE0IGFuZCA0IFNlcHRlbWJlciAyMDE0IGluIHRoZSBzYW1lIHdlZWs/XG4gKiBjb25zdCByZXN1bHQgPSBpc1NhbWVXZWVrKG5ldyBEYXRlKDIwMTQsIDcsIDMxKSwgbmV3IERhdGUoMjAxNCwgOCwgNCksIHtcbiAqICAgd2Vla1N0YXJ0c09uOiAxXG4gKiB9KVxuICogLy89PiBmYWxzZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBcmUgMSBKYW51YXJ5IDIwMTQgYW5kIDEgSmFudWFyeSAyMDE1IGluIHRoZSBzYW1lIHdlZWs/XG4gKiBjb25zdCByZXN1bHQgPSBpc1NhbWVXZWVrKG5ldyBEYXRlKDIwMTQsIDAsIDEpLCBuZXcgRGF0ZSgyMDE1LCAwLCAxKSlcbiAqIC8vPT4gZmFsc2VcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNTYW1lV2VlayhkaXJ0eURhdGVMZWZ0LCBkaXJ0eURhdGVSaWdodCwgb3B0aW9ucykge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGVMZWZ0U3RhcnRPZldlZWsgPSBzdGFydE9mV2VlayhkaXJ0eURhdGVMZWZ0LCBvcHRpb25zKTtcbiAgdmFyIGRhdGVSaWdodFN0YXJ0T2ZXZWVrID0gc3RhcnRPZldlZWsoZGlydHlEYXRlUmlnaHQsIG9wdGlvbnMpO1xuICByZXR1cm4gZGF0ZUxlZnRTdGFydE9mV2Vlay5nZXRUaW1lKCkgPT09IGRhdGVSaWdodFN0YXJ0T2ZXZWVrLmdldFRpbWUoKTtcbn0iLCJpbXBvcnQgaXNTYW1lV2VlayBmcm9tIFwiLi4vaXNTYW1lV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcblxuLyoqXG4gKiBAbmFtZSBpc1RoaXNXZWVrXG4gKiBAY2F0ZWdvcnkgV2VlayBIZWxwZXJzXG4gKiBAc3VtbWFyeSBJcyB0aGUgZ2l2ZW4gZGF0ZSBpbiB0aGUgc2FtZSB3ZWVrIGFzIHRoZSBjdXJyZW50IGRhdGU/XG4gKiBAcHVyZSBmYWxzZVxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogSXMgdGhlIGdpdmVuIGRhdGUgaW4gdGhlIHNhbWUgd2VlayBhcyB0aGUgY3VycmVudCBkYXRlP1xuICpcbiAqID4g4pqg77iPIFBsZWFzZSBub3RlIHRoYXQgdGhpcyBmdW5jdGlvbiBpcyBub3QgcHJlc2VudCBpbiB0aGUgRlAgc3VibW9kdWxlIGFzXG4gKiA+IGl0IHVzZXMgYERhdGUubm93KClgIGludGVybmFsbHkgaGVuY2UgaW1wdXJlIGFuZCBjYW4ndCBiZSBzYWZlbHkgY3VycmllZC5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdG8gY2hlY2tcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gLSB0aGUgb2JqZWN0IHdpdGggb3B0aW9uc1xuICogQHBhcmFtIHtMb2NhbGV9IFtvcHRpb25zLmxvY2FsZT1kZWZhdWx0TG9jYWxlXSAtIHRoZSBsb2NhbGUgb2JqZWN0LiBTZWUgW0xvY2FsZV17QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy9Mb2NhbGV9XG4gKiBAcGFyYW0gezB8MXwyfDN8NHw1fDZ9IFtvcHRpb25zLndlZWtTdGFydHNPbj0wXSAtIHRoZSBpbmRleCBvZiB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrICgwIC0gU3VuZGF5KVxuICogQHJldHVybnMge0Jvb2xlYW59IHRoZSBkYXRlIGlzIGluIHRoaXMgd2Vla1xuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy53ZWVrU3RhcnRzT25gIG11c3QgYmUgYmV0d2VlbiAwIGFuZCA2XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHRvZGF5IGlzIDI1IFNlcHRlbWJlciAyMDE0LCBpcyAyMSBTZXB0ZW1iZXIgMjAxNCBpbiB0aGlzIHdlZWs/XG4gKiBjb25zdCByZXN1bHQgPSBpc1RoaXNXZWVrKG5ldyBEYXRlKDIwMTQsIDgsIDIxKSlcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiB0b2RheSBpcyAyNSBTZXB0ZW1iZXIgMjAxNCBhbmQgd2VlayBzdGFydHMgd2l0aCBNb25kYXlcbiAqIC8vIGlzIDIxIFNlcHRlbWJlciAyMDE0IGluIHRoaXMgd2Vlaz9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzVGhpc1dlZWsobmV3IERhdGUoMjAxNCwgOCwgMjEpLCB7IHdlZWtTdGFydHNPbjogMSB9KVxuICogLy89PiBmYWxzZVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc1RoaXNXZWVrKGRpcnR5RGF0ZSwgb3B0aW9ucykge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgcmV0dXJuIGlzU2FtZVdlZWsoZGlydHlEYXRlLCBEYXRlLm5vdygpLCBvcHRpb25zKTtcbn0iLCJpbXBvcnQgaXNTYW1lRGF5IGZyb20gXCIuLi9pc1NhbWVEYXkvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGlzVG9kYXlcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgSXMgdGhlIGdpdmVuIGRhdGUgdG9kYXk/XG4gKiBAcHVyZSBmYWxzZVxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogSXMgdGhlIGdpdmVuIGRhdGUgdG9kYXk/XG4gKlxuICogPiDimqDvuI8gUGxlYXNlIG5vdGUgdGhhdCB0aGlzIGZ1bmN0aW9uIGlzIG5vdCBwcmVzZW50IGluIHRoZSBGUCBzdWJtb2R1bGUgYXNcbiAqID4gaXQgdXNlcyBgRGF0ZS5ub3coKWAgaW50ZXJuYWxseSBoZW5jZSBpbXB1cmUgYW5kIGNhbid0IGJlIHNhZmVseSBjdXJyaWVkLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0byBjaGVja1xuICogQHJldHVybnMge0Jvb2xlYW59IHRoZSBkYXRlIGlzIHRvZGF5XG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgdG9kYXkgaXMgNiBPY3RvYmVyIDIwMTQsIGlzIDYgT2N0b2JlciAxNDowMDowMCB0b2RheT9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzVG9kYXkobmV3IERhdGUoMjAxNCwgOSwgNiwgMTQsIDApKVxuICogLy89PiB0cnVlXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNUb2RheShkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHJldHVybiBpc1NhbWVEYXkoZGlydHlEYXRlLCBEYXRlLm5vdygpKTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHN0YXJ0T2ZEYXlcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgUmV0dXJuIHRoZSBzdGFydCBvZiBhIGRheSBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgZGF5IGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqIFRoZSByZXN1bHQgd2lsbCBiZSBpbiB0aGUgbG9jYWwgdGltZXpvbmUuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBvcmlnaW5hbCBkYXRlXG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHN0YXJ0IG9mIGEgZGF5XG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gVGhlIHN0YXJ0IG9mIGEgZGF5IGZvciAyIFNlcHRlbWJlciAyMDE0IDExOjU1OjAwOlxuICogY29uc3QgcmVzdWx0ID0gc3RhcnRPZkRheShuZXcgRGF0ZSgyMDE0LCA4LCAyLCAxMSwgNTUsIDApKVxuICogLy89PiBUdWUgU2VwIDAyIDIwMTQgMDA6MDA6MDBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGFydE9mRGF5KGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgZGF0ZS5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi9fbGliL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbmltcG9ydCB7IGdldERlZmF1bHRPcHRpb25zIH0gZnJvbSBcIi4uL19saWIvZGVmYXVsdE9wdGlvbnMvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgc3RhcnRPZldlZWtcbiAqIEBjYXRlZ29yeSBXZWVrIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFJldHVybiB0aGUgc3RhcnQgb2YgYSB3ZWVrIGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgc3RhcnQgb2YgYSB3ZWVrIGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqIFRoZSByZXN1bHQgd2lsbCBiZSBpbiB0aGUgbG9jYWwgdGltZXpvbmUuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBvcmlnaW5hbCBkYXRlXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIC0gYW4gb2JqZWN0IHdpdGggb3B0aW9ucy5cbiAqIEBwYXJhbSB7TG9jYWxlfSBbb3B0aW9ucy5sb2NhbGU9ZGVmYXVsdExvY2FsZV0gLSB0aGUgbG9jYWxlIG9iamVjdC4gU2VlIFtMb2NhbGVde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvTG9jYWxlfVxuICogQHBhcmFtIHswfDF8MnwzfDR8NXw2fSBbb3B0aW9ucy53ZWVrU3RhcnRzT249MF0gLSB0aGUgaW5kZXggb2YgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2VlayAoMCAtIFN1bmRheSlcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgc3RhcnQgb2YgYSB3ZWVrXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLndlZWtTdGFydHNPbmAgbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDZcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gVGhlIHN0YXJ0IG9mIGEgd2VlayBmb3IgMiBTZXB0ZW1iZXIgMjAxNCAxMTo1NTowMDpcbiAqIGNvbnN0IHJlc3VsdCA9IHN0YXJ0T2ZXZWVrKG5ldyBEYXRlKDIwMTQsIDgsIDIsIDExLCA1NSwgMCkpXG4gKiAvLz0+IFN1biBBdWcgMzEgMjAxNCAwMDowMDowMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiB0aGUgd2VlayBzdGFydHMgb24gTW9uZGF5LCB0aGUgc3RhcnQgb2YgdGhlIHdlZWsgZm9yIDIgU2VwdGVtYmVyIDIwMTQgMTE6NTU6MDA6XG4gKiBjb25zdCByZXN1bHQgPSBzdGFydE9mV2VlayhuZXcgRGF0ZSgyMDE0LCA4LCAyLCAxMSwgNTUsIDApLCB7IHdlZWtTdGFydHNPbjogMSB9KVxuICogLy89PiBNb24gU2VwIDAxIDIwMTQgMDA6MDA6MDBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGFydE9mV2VlayhkaXJ0eURhdGUsIG9wdGlvbnMpIHtcbiAgdmFyIF9yZWYsIF9yZWYyLCBfcmVmMywgX29wdGlvbnMkd2Vla1N0YXJ0c09uLCBfb3B0aW9ucyRsb2NhbGUsIF9vcHRpb25zJGxvY2FsZSRvcHRpbywgX2RlZmF1bHRPcHRpb25zJGxvY2FsLCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyO1xuXG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGVmYXVsdE9wdGlvbnMgPSBnZXREZWZhdWx0T3B0aW9ucygpO1xuICB2YXIgd2Vla1N0YXJ0c09uID0gdG9JbnRlZ2VyKChfcmVmID0gKF9yZWYyID0gKF9yZWYzID0gKF9vcHRpb25zJHdlZWtTdGFydHNPbiA9IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9vcHRpb25zJHdlZWtTdGFydHNPbiAhPT0gdm9pZCAwID8gX29wdGlvbnMkd2Vla1N0YXJ0c09uIDogb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlID0gb3B0aW9ucy5sb2NhbGUpID09PSBudWxsIHx8IF9vcHRpb25zJGxvY2FsZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9vcHRpb25zJGxvY2FsZSRvcHRpbyA9IF9vcHRpb25zJGxvY2FsZS5vcHRpb25zKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUkb3B0aW8gPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9vcHRpb25zJGxvY2FsZSRvcHRpby53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9yZWYzICE9PSB2b2lkIDAgPyBfcmVmMyA6IGRlZmF1bHRPcHRpb25zLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX3JlZjIgIT09IHZvaWQgMCA/IF9yZWYyIDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbCA9IGRlZmF1bHRPcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX2RlZmF1bHRPcHRpb25zJGxvY2FsID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX2RlZmF1bHRPcHRpb25zJGxvY2FsMiA9IF9kZWZhdWx0T3B0aW9ucyRsb2NhbC5vcHRpb25zKSA9PT0gbnVsbCB8fCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX3JlZiAhPT0gdm9pZCAwID8gX3JlZiA6IDApOyAvLyBUZXN0IGlmIHdlZWtTdGFydHNPbiBpcyBiZXR3ZWVuIDAgYW5kIDYgX2FuZF8gaXMgbm90IE5hTlxuXG4gIGlmICghKHdlZWtTdGFydHNPbiA+PSAwICYmIHdlZWtTdGFydHNPbiA8PSA2KSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCd3ZWVrU3RhcnRzT24gbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDYgaW5jbHVzaXZlbHknKTtcbiAgfVxuXG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciBkYXkgPSBkYXRlLmdldERheSgpO1xuICB2YXIgZGlmZiA9IChkYXkgPCB3ZWVrU3RhcnRzT24gPyA3IDogMCkgKyBkYXkgLSB3ZWVrU3RhcnRzT247XG4gIGRhdGUuc2V0RGF0ZShkYXRlLmdldERhdGUoKSAtIGRpZmYpO1xuICBkYXRlLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJpbXBvcnQgYWRkRGF5cyBmcm9tIFwiLi4vYWRkRGF5cy9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbmltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHN1YkRheXNcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgU3VidHJhY3QgdGhlIHNwZWNpZmllZCBudW1iZXIgb2YgZGF5cyBmcm9tIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogU3VidHJhY3QgdGhlIHNwZWNpZmllZCBudW1iZXIgb2YgZGF5cyBmcm9tIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0byBiZSBjaGFuZ2VkXG4gKiBAcGFyYW0ge051bWJlcn0gYW1vdW50IC0gdGhlIGFtb3VudCBvZiBkYXlzIHRvIGJlIHN1YnRyYWN0ZWQuIFBvc2l0aXZlIGRlY2ltYWxzIHdpbGwgYmUgcm91bmRlZCB1c2luZyBgTWF0aC5mbG9vcmAsIGRlY2ltYWxzIGxlc3MgdGhhbiB6ZXJvIHdpbGwgYmUgcm91bmRlZCB1c2luZyBgTWF0aC5jZWlsYC5cbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgbmV3IGRhdGUgd2l0aCB0aGUgZGF5cyBzdWJ0cmFjdGVkXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFN1YnRyYWN0IDEwIGRheXMgZnJvbSAxIFNlcHRlbWJlciAyMDE0OlxuICogY29uc3QgcmVzdWx0ID0gc3ViRGF5cyhuZXcgRGF0ZSgyMDE0LCA4LCAxKSwgMTApXG4gKiAvLz0+IEZyaSBBdWcgMjIgMjAxNCAwMDowMDowMFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN1YkRheXMoZGlydHlEYXRlLCBkaXJ0eUFtb3VudCkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGFtb3VudCA9IHRvSW50ZWdlcihkaXJ0eUFtb3VudCk7XG4gIHJldHVybiBhZGREYXlzKGRpcnR5RGF0ZSwgLWFtb3VudCk7XG59IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSB0b0RhdGVcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGFuIGluc3RhbmNlIG9mIERhdGUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIGl0cyBjbG9uZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYSBudW1iZXIsIGl0IGlzIHRyZWF0ZWQgYXMgYSB0aW1lc3RhbXAuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIG5vbmUgb2YgdGhlIGFib3ZlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBJbnZhbGlkIERhdGUuXG4gKlxuICogKipOb3RlKio6ICphbGwqIERhdGUgYXJndW1lbnRzIHBhc3NlZCB0byBhbnkgKmRhdGUtZm5zKiBmdW5jdGlvbiBpcyBwcm9jZXNzZWQgYnkgYHRvRGF0ZWAuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gYXJndW1lbnQgLSB0aGUgdmFsdWUgdG8gY29udmVydFxuICogQHJldHVybnMge0RhdGV9IHRoZSBwYXJzZWQgZGF0ZSBpbiB0aGUgbG9jYWwgdGltZSB6b25lXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ2xvbmUgdGhlIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUobmV3IERhdGUoMjAxNCwgMSwgMTEsIDExLCAzMCwgMzApKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29udmVydCB0aGUgdGltZXN0YW1wIHRvIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUoMTM5MjA5ODQzMDAwMClcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9EYXRlKGFyZ3VtZW50KSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgYXJnU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFyZ3VtZW50KTsgLy8gQ2xvbmUgdGhlIGRhdGVcblxuICBpZiAoYXJndW1lbnQgaW5zdGFuY2VvZiBEYXRlIHx8IF90eXBlb2YoYXJndW1lbnQpID09PSAnb2JqZWN0JyAmJiBhcmdTdHIgPT09ICdbb2JqZWN0IERhdGVdJykge1xuICAgIC8vIFByZXZlbnQgdGhlIGRhdGUgdG8gbG9zZSB0aGUgbWlsbGlzZWNvbmRzIHdoZW4gcGFzc2VkIHRvIG5ldyBEYXRlKCkgaW4gSUUxMFxuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudC5nZXRUaW1lKCkpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBhcmd1bWVudCA9PT0gJ251bWJlcicgfHwgYXJnU3RyID09PSAnW29iamVjdCBOdW1iZXJdJykge1xuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudCk7XG4gIH0gZWxzZSB7XG4gICAgaWYgKCh0eXBlb2YgYXJndW1lbnQgPT09ICdzdHJpbmcnIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgU3RyaW5nXScpICYmIHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgIGNvbnNvbGUud2FybihcIlN0YXJ0aW5nIHdpdGggdjIuMC4wLWJldGEuMSBkYXRlLWZucyBkb2Vzbid0IGFjY2VwdCBzdHJpbmdzIGFzIGRhdGUgYXJndW1lbnRzLiBQbGVhc2UgdXNlIGBwYXJzZUlTT2AgdG8gcGFyc2Ugc3RyaW5ncy4gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjc3RyaW5nLWFyZ3VtZW50c1wiKTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcblxuICAgICAgY29uc29sZS53YXJuKG5ldyBFcnJvcigpLnN0YWNrKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgfVxufSIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIk5JTFwiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfbmlsLmRlZmF1bHQ7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwicGFyc2VcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX3BhcnNlLmRlZmF1bHQ7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwic3RyaW5naWZ5XCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9zdHJpbmdpZnkuZGVmYXVsdDtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJ2MVwiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfdi5kZWZhdWx0O1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcInYzXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF92Mi5kZWZhdWx0O1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcInY0XCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF92My5kZWZhdWx0O1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcInY1XCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF92NC5kZWZhdWx0O1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcInZhbGlkYXRlXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF92YWxpZGF0ZS5kZWZhdWx0O1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcInZlcnNpb25cIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX3ZlcnNpb24uZGVmYXVsdDtcbiAgfVxufSk7XG5cbnZhciBfdiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdjEuanNcIikpO1xuXG52YXIgX3YyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi92My5qc1wiKSk7XG5cbnZhciBfdjMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3Y0LmpzXCIpKTtcblxudmFyIF92NCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdjUuanNcIikpO1xuXG52YXIgX25pbCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vbmlsLmpzXCIpKTtcblxudmFyIF92ZXJzaW9uID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi92ZXJzaW9uLmpzXCIpKTtcblxudmFyIF92YWxpZGF0ZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdmFsaWRhdGUuanNcIikpO1xuXG52YXIgX3N0cmluZ2lmeSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vc3RyaW5naWZ5LmpzXCIpKTtcblxudmFyIF9wYXJzZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vcGFyc2UuanNcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfSIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG4vKlxuICogQnJvd3Nlci1jb21wYXRpYmxlIEphdmFTY3JpcHQgTUQ1XG4gKlxuICogTW9kaWZpY2F0aW9uIG9mIEphdmFTY3JpcHQgTUQ1XG4gKiBodHRwczovL2dpdGh1Yi5jb20vYmx1ZWltcC9KYXZhU2NyaXB0LU1ENVxuICpcbiAqIENvcHlyaWdodCAyMDExLCBTZWJhc3RpYW4gVHNjaGFuXG4gKiBodHRwczovL2JsdWVpbXAubmV0XG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlOlxuICogaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbiAqXG4gKiBCYXNlZCBvblxuICogQSBKYXZhU2NyaXB0IGltcGxlbWVudGF0aW9uIG9mIHRoZSBSU0EgRGF0YSBTZWN1cml0eSwgSW5jLiBNRDUgTWVzc2FnZVxuICogRGlnZXN0IEFsZ29yaXRobSwgYXMgZGVmaW5lZCBpbiBSRkMgMTMyMS5cbiAqIFZlcnNpb24gMi4yIENvcHlyaWdodCAoQykgUGF1bCBKb2huc3RvbiAxOTk5IC0gMjAwOVxuICogT3RoZXIgY29udHJpYnV0b3JzOiBHcmVnIEhvbHQsIEFuZHJldyBLZXBlcnQsIFlkbmFyLCBMb3N0aW5ldFxuICogRGlzdHJpYnV0ZWQgdW5kZXIgdGhlIEJTRCBMaWNlbnNlXG4gKiBTZWUgaHR0cDovL3BhamhvbWUub3JnLnVrL2NyeXB0L21kNSBmb3IgbW9yZSBpbmZvLlxuICovXG5mdW5jdGlvbiBtZDUoYnl0ZXMpIHtcbiAgaWYgKHR5cGVvZiBieXRlcyA9PT0gJ3N0cmluZycpIHtcbiAgICBjb25zdCBtc2cgPSB1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoYnl0ZXMpKTsgLy8gVVRGOCBlc2NhcGVcblxuICAgIGJ5dGVzID0gbmV3IFVpbnQ4QXJyYXkobXNnLmxlbmd0aCk7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1zZy5sZW5ndGg7ICsraSkge1xuICAgICAgYnl0ZXNbaV0gPSBtc2cuY2hhckNvZGVBdChpKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbWQ1VG9IZXhFbmNvZGVkQXJyYXkod29yZHNUb01kNShieXRlc1RvV29yZHMoYnl0ZXMpLCBieXRlcy5sZW5ndGggKiA4KSk7XG59XG4vKlxuICogQ29udmVydCBhbiBhcnJheSBvZiBsaXR0bGUtZW5kaWFuIHdvcmRzIHRvIGFuIGFycmF5IG9mIGJ5dGVzXG4gKi9cblxuXG5mdW5jdGlvbiBtZDVUb0hleEVuY29kZWRBcnJheShpbnB1dCkge1xuICBjb25zdCBvdXRwdXQgPSBbXTtcbiAgY29uc3QgbGVuZ3RoMzIgPSBpbnB1dC5sZW5ndGggKiAzMjtcbiAgY29uc3QgaGV4VGFiID0gJzAxMjM0NTY3ODlhYmNkZWYnO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoMzI7IGkgKz0gOCkge1xuICAgIGNvbnN0IHggPSBpbnB1dFtpID4+IDVdID4+PiBpICUgMzIgJiAweGZmO1xuICAgIGNvbnN0IGhleCA9IHBhcnNlSW50KGhleFRhYi5jaGFyQXQoeCA+Pj4gNCAmIDB4MGYpICsgaGV4VGFiLmNoYXJBdCh4ICYgMHgwZiksIDE2KTtcbiAgICBvdXRwdXQucHVzaChoZXgpO1xuICB9XG5cbiAgcmV0dXJuIG91dHB1dDtcbn1cbi8qKlxuICogQ2FsY3VsYXRlIG91dHB1dCBsZW5ndGggd2l0aCBwYWRkaW5nIGFuZCBiaXQgbGVuZ3RoXG4gKi9cblxuXG5mdW5jdGlvbiBnZXRPdXRwdXRMZW5ndGgoaW5wdXRMZW5ndGg4KSB7XG4gIHJldHVybiAoaW5wdXRMZW5ndGg4ICsgNjQgPj4+IDkgPDwgNCkgKyAxNCArIDE7XG59XG4vKlxuICogQ2FsY3VsYXRlIHRoZSBNRDUgb2YgYW4gYXJyYXkgb2YgbGl0dGxlLWVuZGlhbiB3b3JkcywgYW5kIGEgYml0IGxlbmd0aC5cbiAqL1xuXG5cbmZ1bmN0aW9uIHdvcmRzVG9NZDUoeCwgbGVuKSB7XG4gIC8qIGFwcGVuZCBwYWRkaW5nICovXG4gIHhbbGVuID4+IDVdIHw9IDB4ODAgPDwgbGVuICUgMzI7XG4gIHhbZ2V0T3V0cHV0TGVuZ3RoKGxlbikgLSAxXSA9IGxlbjtcbiAgbGV0IGEgPSAxNzMyNTg0MTkzO1xuICBsZXQgYiA9IC0yNzE3MzM4Nzk7XG4gIGxldCBjID0gLTE3MzI1ODQxOTQ7XG4gIGxldCBkID0gMjcxNzMzODc4O1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgeC5sZW5ndGg7IGkgKz0gMTYpIHtcbiAgICBjb25zdCBvbGRhID0gYTtcbiAgICBjb25zdCBvbGRiID0gYjtcbiAgICBjb25zdCBvbGRjID0gYztcbiAgICBjb25zdCBvbGRkID0gZDtcbiAgICBhID0gbWQ1ZmYoYSwgYiwgYywgZCwgeFtpXSwgNywgLTY4MDg3NjkzNik7XG4gICAgZCA9IG1kNWZmKGQsIGEsIGIsIGMsIHhbaSArIDFdLCAxMiwgLTM4OTU2NDU4Nik7XG4gICAgYyA9IG1kNWZmKGMsIGQsIGEsIGIsIHhbaSArIDJdLCAxNywgNjA2MTA1ODE5KTtcbiAgICBiID0gbWQ1ZmYoYiwgYywgZCwgYSwgeFtpICsgM10sIDIyLCAtMTA0NDUyNTMzMCk7XG4gICAgYSA9IG1kNWZmKGEsIGIsIGMsIGQsIHhbaSArIDRdLCA3LCAtMTc2NDE4ODk3KTtcbiAgICBkID0gbWQ1ZmYoZCwgYSwgYiwgYywgeFtpICsgNV0sIDEyLCAxMjAwMDgwNDI2KTtcbiAgICBjID0gbWQ1ZmYoYywgZCwgYSwgYiwgeFtpICsgNl0sIDE3LCAtMTQ3MzIzMTM0MSk7XG4gICAgYiA9IG1kNWZmKGIsIGMsIGQsIGEsIHhbaSArIDddLCAyMiwgLTQ1NzA1OTgzKTtcbiAgICBhID0gbWQ1ZmYoYSwgYiwgYywgZCwgeFtpICsgOF0sIDcsIDE3NzAwMzU0MTYpO1xuICAgIGQgPSBtZDVmZihkLCBhLCBiLCBjLCB4W2kgKyA5XSwgMTIsIC0xOTU4NDE0NDE3KTtcbiAgICBjID0gbWQ1ZmYoYywgZCwgYSwgYiwgeFtpICsgMTBdLCAxNywgLTQyMDYzKTtcbiAgICBiID0gbWQ1ZmYoYiwgYywgZCwgYSwgeFtpICsgMTFdLCAyMiwgLTE5OTA0MDQxNjIpO1xuICAgIGEgPSBtZDVmZihhLCBiLCBjLCBkLCB4W2kgKyAxMl0sIDcsIDE4MDQ2MDM2ODIpO1xuICAgIGQgPSBtZDVmZihkLCBhLCBiLCBjLCB4W2kgKyAxM10sIDEyLCAtNDAzNDExMDEpO1xuICAgIGMgPSBtZDVmZihjLCBkLCBhLCBiLCB4W2kgKyAxNF0sIDE3LCAtMTUwMjAwMjI5MCk7XG4gICAgYiA9IG1kNWZmKGIsIGMsIGQsIGEsIHhbaSArIDE1XSwgMjIsIDEyMzY1MzUzMjkpO1xuICAgIGEgPSBtZDVnZyhhLCBiLCBjLCBkLCB4W2kgKyAxXSwgNSwgLTE2NTc5NjUxMCk7XG4gICAgZCA9IG1kNWdnKGQsIGEsIGIsIGMsIHhbaSArIDZdLCA5LCAtMTA2OTUwMTYzMik7XG4gICAgYyA9IG1kNWdnKGMsIGQsIGEsIGIsIHhbaSArIDExXSwgMTQsIDY0MzcxNzcxMyk7XG4gICAgYiA9IG1kNWdnKGIsIGMsIGQsIGEsIHhbaV0sIDIwLCAtMzczODk3MzAyKTtcbiAgICBhID0gbWQ1Z2coYSwgYiwgYywgZCwgeFtpICsgNV0sIDUsIC03MDE1NTg2OTEpO1xuICAgIGQgPSBtZDVnZyhkLCBhLCBiLCBjLCB4W2kgKyAxMF0sIDksIDM4MDE2MDgzKTtcbiAgICBjID0gbWQ1Z2coYywgZCwgYSwgYiwgeFtpICsgMTVdLCAxNCwgLTY2MDQ3ODMzNSk7XG4gICAgYiA9IG1kNWdnKGIsIGMsIGQsIGEsIHhbaSArIDRdLCAyMCwgLTQwNTUzNzg0OCk7XG4gICAgYSA9IG1kNWdnKGEsIGIsIGMsIGQsIHhbaSArIDldLCA1LCA1Njg0NDY0MzgpO1xuICAgIGQgPSBtZDVnZyhkLCBhLCBiLCBjLCB4W2kgKyAxNF0sIDksIC0xMDE5ODAzNjkwKTtcbiAgICBjID0gbWQ1Z2coYywgZCwgYSwgYiwgeFtpICsgM10sIDE0LCAtMTg3MzYzOTYxKTtcbiAgICBiID0gbWQ1Z2coYiwgYywgZCwgYSwgeFtpICsgOF0sIDIwLCAxMTYzNTMxNTAxKTtcbiAgICBhID0gbWQ1Z2coYSwgYiwgYywgZCwgeFtpICsgMTNdLCA1LCAtMTQ0NDY4MTQ2Nyk7XG4gICAgZCA9IG1kNWdnKGQsIGEsIGIsIGMsIHhbaSArIDJdLCA5LCAtNTE0MDM3ODQpO1xuICAgIGMgPSBtZDVnZyhjLCBkLCBhLCBiLCB4W2kgKyA3XSwgMTQsIDE3MzUzMjg0NzMpO1xuICAgIGIgPSBtZDVnZyhiLCBjLCBkLCBhLCB4W2kgKyAxMl0sIDIwLCAtMTkyNjYwNzczNCk7XG4gICAgYSA9IG1kNWhoKGEsIGIsIGMsIGQsIHhbaSArIDVdLCA0LCAtMzc4NTU4KTtcbiAgICBkID0gbWQ1aGgoZCwgYSwgYiwgYywgeFtpICsgOF0sIDExLCAtMjAyMjU3NDQ2Myk7XG4gICAgYyA9IG1kNWhoKGMsIGQsIGEsIGIsIHhbaSArIDExXSwgMTYsIDE4MzkwMzA1NjIpO1xuICAgIGIgPSBtZDVoaChiLCBjLCBkLCBhLCB4W2kgKyAxNF0sIDIzLCAtMzUzMDk1NTYpO1xuICAgIGEgPSBtZDVoaChhLCBiLCBjLCBkLCB4W2kgKyAxXSwgNCwgLTE1MzA5OTIwNjApO1xuICAgIGQgPSBtZDVoaChkLCBhLCBiLCBjLCB4W2kgKyA0XSwgMTEsIDEyNzI4OTMzNTMpO1xuICAgIGMgPSBtZDVoaChjLCBkLCBhLCBiLCB4W2kgKyA3XSwgMTYsIC0xNTU0OTc2MzIpO1xuICAgIGIgPSBtZDVoaChiLCBjLCBkLCBhLCB4W2kgKyAxMF0sIDIzLCAtMTA5NDczMDY0MCk7XG4gICAgYSA9IG1kNWhoKGEsIGIsIGMsIGQsIHhbaSArIDEzXSwgNCwgNjgxMjc5MTc0KTtcbiAgICBkID0gbWQ1aGgoZCwgYSwgYiwgYywgeFtpXSwgMTEsIC0zNTg1MzcyMjIpO1xuICAgIGMgPSBtZDVoaChjLCBkLCBhLCBiLCB4W2kgKyAzXSwgMTYsIC03MjI1MjE5NzkpO1xuICAgIGIgPSBtZDVoaChiLCBjLCBkLCBhLCB4W2kgKyA2XSwgMjMsIDc2MDI5MTg5KTtcbiAgICBhID0gbWQ1aGgoYSwgYiwgYywgZCwgeFtpICsgOV0sIDQsIC02NDAzNjQ0ODcpO1xuICAgIGQgPSBtZDVoaChkLCBhLCBiLCBjLCB4W2kgKyAxMl0sIDExLCAtNDIxODE1ODM1KTtcbiAgICBjID0gbWQ1aGgoYywgZCwgYSwgYiwgeFtpICsgMTVdLCAxNiwgNTMwNzQyNTIwKTtcbiAgICBiID0gbWQ1aGgoYiwgYywgZCwgYSwgeFtpICsgMl0sIDIzLCAtOTk1MzM4NjUxKTtcbiAgICBhID0gbWQ1aWkoYSwgYiwgYywgZCwgeFtpXSwgNiwgLTE5ODYzMDg0NCk7XG4gICAgZCA9IG1kNWlpKGQsIGEsIGIsIGMsIHhbaSArIDddLCAxMCwgMTEyNjg5MTQxNSk7XG4gICAgYyA9IG1kNWlpKGMsIGQsIGEsIGIsIHhbaSArIDE0XSwgMTUsIC0xNDE2MzU0OTA1KTtcbiAgICBiID0gbWQ1aWkoYiwgYywgZCwgYSwgeFtpICsgNV0sIDIxLCAtNTc0MzQwNTUpO1xuICAgIGEgPSBtZDVpaShhLCBiLCBjLCBkLCB4W2kgKyAxMl0sIDYsIDE3MDA0ODU1NzEpO1xuICAgIGQgPSBtZDVpaShkLCBhLCBiLCBjLCB4W2kgKyAzXSwgMTAsIC0xODk0OTg2NjA2KTtcbiAgICBjID0gbWQ1aWkoYywgZCwgYSwgYiwgeFtpICsgMTBdLCAxNSwgLTEwNTE1MjMpO1xuICAgIGIgPSBtZDVpaShiLCBjLCBkLCBhLCB4W2kgKyAxXSwgMjEsIC0yMDU0OTIyNzk5KTtcbiAgICBhID0gbWQ1aWkoYSwgYiwgYywgZCwgeFtpICsgOF0sIDYsIDE4NzMzMTMzNTkpO1xuICAgIGQgPSBtZDVpaShkLCBhLCBiLCBjLCB4W2kgKyAxNV0sIDEwLCAtMzA2MTE3NDQpO1xuICAgIGMgPSBtZDVpaShjLCBkLCBhLCBiLCB4W2kgKyA2XSwgMTUsIC0xNTYwMTk4MzgwKTtcbiAgICBiID0gbWQ1aWkoYiwgYywgZCwgYSwgeFtpICsgMTNdLCAyMSwgMTMwOTE1MTY0OSk7XG4gICAgYSA9IG1kNWlpKGEsIGIsIGMsIGQsIHhbaSArIDRdLCA2LCAtMTQ1NTIzMDcwKTtcbiAgICBkID0gbWQ1aWkoZCwgYSwgYiwgYywgeFtpICsgMTFdLCAxMCwgLTExMjAyMTAzNzkpO1xuICAgIGMgPSBtZDVpaShjLCBkLCBhLCBiLCB4W2kgKyAyXSwgMTUsIDcxODc4NzI1OSk7XG4gICAgYiA9IG1kNWlpKGIsIGMsIGQsIGEsIHhbaSArIDldLCAyMSwgLTM0MzQ4NTU1MSk7XG4gICAgYSA9IHNhZmVBZGQoYSwgb2xkYSk7XG4gICAgYiA9IHNhZmVBZGQoYiwgb2xkYik7XG4gICAgYyA9IHNhZmVBZGQoYywgb2xkYyk7XG4gICAgZCA9IHNhZmVBZGQoZCwgb2xkZCk7XG4gIH1cblxuICByZXR1cm4gW2EsIGIsIGMsIGRdO1xufVxuLypcbiAqIENvbnZlcnQgYW4gYXJyYXkgYnl0ZXMgdG8gYW4gYXJyYXkgb2YgbGl0dGxlLWVuZGlhbiB3b3Jkc1xuICogQ2hhcmFjdGVycyA+MjU1IGhhdmUgdGhlaXIgaGlnaC1ieXRlIHNpbGVudGx5IGlnbm9yZWQuXG4gKi9cblxuXG5mdW5jdGlvbiBieXRlc1RvV29yZHMoaW5wdXQpIHtcbiAgaWYgKGlucHV0Lmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBbXTtcbiAgfVxuXG4gIGNvbnN0IGxlbmd0aDggPSBpbnB1dC5sZW5ndGggKiA4O1xuICBjb25zdCBvdXRwdXQgPSBuZXcgVWludDMyQXJyYXkoZ2V0T3V0cHV0TGVuZ3RoKGxlbmd0aDgpKTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDg7IGkgKz0gOCkge1xuICAgIG91dHB1dFtpID4+IDVdIHw9IChpbnB1dFtpIC8gOF0gJiAweGZmKSA8PCBpICUgMzI7XG4gIH1cblxuICByZXR1cm4gb3V0cHV0O1xufVxuLypcbiAqIEFkZCBpbnRlZ2Vycywgd3JhcHBpbmcgYXQgMl4zMi4gVGhpcyB1c2VzIDE2LWJpdCBvcGVyYXRpb25zIGludGVybmFsbHlcbiAqIHRvIHdvcmsgYXJvdW5kIGJ1Z3MgaW4gc29tZSBKUyBpbnRlcnByZXRlcnMuXG4gKi9cblxuXG5mdW5jdGlvbiBzYWZlQWRkKHgsIHkpIHtcbiAgY29uc3QgbHN3ID0gKHggJiAweGZmZmYpICsgKHkgJiAweGZmZmYpO1xuICBjb25zdCBtc3cgPSAoeCA+PiAxNikgKyAoeSA+PiAxNikgKyAobHN3ID4+IDE2KTtcbiAgcmV0dXJuIG1zdyA8PCAxNiB8IGxzdyAmIDB4ZmZmZjtcbn1cbi8qXG4gKiBCaXR3aXNlIHJvdGF0ZSBhIDMyLWJpdCBudW1iZXIgdG8gdGhlIGxlZnQuXG4gKi9cblxuXG5mdW5jdGlvbiBiaXRSb3RhdGVMZWZ0KG51bSwgY250KSB7XG4gIHJldHVybiBudW0gPDwgY250IHwgbnVtID4+PiAzMiAtIGNudDtcbn1cbi8qXG4gKiBUaGVzZSBmdW5jdGlvbnMgaW1wbGVtZW50IHRoZSBmb3VyIGJhc2ljIG9wZXJhdGlvbnMgdGhlIGFsZ29yaXRobSB1c2VzLlxuICovXG5cblxuZnVuY3Rpb24gbWQ1Y21uKHEsIGEsIGIsIHgsIHMsIHQpIHtcbiAgcmV0dXJuIHNhZmVBZGQoYml0Um90YXRlTGVmdChzYWZlQWRkKHNhZmVBZGQoYSwgcSksIHNhZmVBZGQoeCwgdCkpLCBzKSwgYik7XG59XG5cbmZ1bmN0aW9uIG1kNWZmKGEsIGIsIGMsIGQsIHgsIHMsIHQpIHtcbiAgcmV0dXJuIG1kNWNtbihiICYgYyB8IH5iICYgZCwgYSwgYiwgeCwgcywgdCk7XG59XG5cbmZ1bmN0aW9uIG1kNWdnKGEsIGIsIGMsIGQsIHgsIHMsIHQpIHtcbiAgcmV0dXJuIG1kNWNtbihiICYgZCB8IGMgJiB+ZCwgYSwgYiwgeCwgcywgdCk7XG59XG5cbmZ1bmN0aW9uIG1kNWhoKGEsIGIsIGMsIGQsIHgsIHMsIHQpIHtcbiAgcmV0dXJuIG1kNWNtbihiIF4gYyBeIGQsIGEsIGIsIHgsIHMsIHQpO1xufVxuXG5mdW5jdGlvbiBtZDVpaShhLCBiLCBjLCBkLCB4LCBzLCB0KSB7XG4gIHJldHVybiBtZDVjbW4oYyBeIChiIHwgfmQpLCBhLCBiLCB4LCBzLCB0KTtcbn1cblxudmFyIF9kZWZhdWx0ID0gbWQ1O1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5jb25zdCByYW5kb21VVUlEID0gdHlwZW9mIGNyeXB0byAhPT0gJ3VuZGVmaW5lZCcgJiYgY3J5cHRvLnJhbmRvbVVVSUQgJiYgY3J5cHRvLnJhbmRvbVVVSUQuYmluZChjcnlwdG8pO1xudmFyIF9kZWZhdWx0ID0ge1xuICByYW5kb21VVUlEXG59O1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG52YXIgX2RlZmF1bHQgPSAnMDAwMDAwMDAtMDAwMC0wMDAwLTAwMDAtMDAwMDAwMDAwMDAwJztcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgX3ZhbGlkYXRlID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi92YWxpZGF0ZS5qc1wiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIHBhcnNlKHV1aWQpIHtcbiAgaWYgKCEoMCwgX3ZhbGlkYXRlLmRlZmF1bHQpKHV1aWQpKSB7XG4gICAgdGhyb3cgVHlwZUVycm9yKCdJbnZhbGlkIFVVSUQnKTtcbiAgfVxuXG4gIGxldCB2O1xuICBjb25zdCBhcnIgPSBuZXcgVWludDhBcnJheSgxNik7IC8vIFBhcnNlICMjIyMjIyMjLS4uLi4tLi4uLi0uLi4uLS4uLi4uLi4uLi4uLlxuXG4gIGFyclswXSA9ICh2ID0gcGFyc2VJbnQodXVpZC5zbGljZSgwLCA4KSwgMTYpKSA+Pj4gMjQ7XG4gIGFyclsxXSA9IHYgPj4+IDE2ICYgMHhmZjtcbiAgYXJyWzJdID0gdiA+Pj4gOCAmIDB4ZmY7XG4gIGFyclszXSA9IHYgJiAweGZmOyAvLyBQYXJzZSAuLi4uLi4uLi0jIyMjLS4uLi4tLi4uLi0uLi4uLi4uLi4uLi5cblxuICBhcnJbNF0gPSAodiA9IHBhcnNlSW50KHV1aWQuc2xpY2UoOSwgMTMpLCAxNikpID4+PiA4O1xuICBhcnJbNV0gPSB2ICYgMHhmZjsgLy8gUGFyc2UgLi4uLi4uLi4tLi4uLi0jIyMjLS4uLi4tLi4uLi4uLi4uLi4uXG5cbiAgYXJyWzZdID0gKHYgPSBwYXJzZUludCh1dWlkLnNsaWNlKDE0LCAxOCksIDE2KSkgPj4+IDg7XG4gIGFycls3XSA9IHYgJiAweGZmOyAvLyBQYXJzZSAuLi4uLi4uLi0uLi4uLS4uLi4tIyMjIy0uLi4uLi4uLi4uLi5cblxuICBhcnJbOF0gPSAodiA9IHBhcnNlSW50KHV1aWQuc2xpY2UoMTksIDIzKSwgMTYpKSA+Pj4gODtcbiAgYXJyWzldID0gdiAmIDB4ZmY7IC8vIFBhcnNlIC4uLi4uLi4uLS4uLi4tLi4uLi0uLi4uLSMjIyMjIyMjIyMjI1xuICAvLyAoVXNlIFwiL1wiIHRvIGF2b2lkIDMyLWJpdCB0cnVuY2F0aW9uIHdoZW4gYml0LXNoaWZ0aW5nIGhpZ2gtb3JkZXIgYnl0ZXMpXG5cbiAgYXJyWzEwXSA9ICh2ID0gcGFyc2VJbnQodXVpZC5zbGljZSgyNCwgMzYpLCAxNikpIC8gMHgxMDAwMDAwMDAwMCAmIDB4ZmY7XG4gIGFyclsxMV0gPSB2IC8gMHgxMDAwMDAwMDAgJiAweGZmO1xuICBhcnJbMTJdID0gdiA+Pj4gMjQgJiAweGZmO1xuICBhcnJbMTNdID0gdiA+Pj4gMTYgJiAweGZmO1xuICBhcnJbMTRdID0gdiA+Pj4gOCAmIDB4ZmY7XG4gIGFyclsxNV0gPSB2ICYgMHhmZjtcbiAgcmV0dXJuIGFycjtcbn1cblxudmFyIF9kZWZhdWx0ID0gcGFyc2U7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBfZGVmYXVsdCA9IC9eKD86WzAtOWEtZl17OH0tWzAtOWEtZl17NH0tWzEtNV1bMC05YS1mXXszfS1bODlhYl1bMC05YS1mXXszfS1bMC05YS1mXXsxMn18MDAwMDAwMDAtMDAwMC0wMDAwLTAwMDAtMDAwMDAwMDAwMDAwKSQvaTtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gcm5nO1xuLy8gVW5pcXVlIElEIGNyZWF0aW9uIHJlcXVpcmVzIGEgaGlnaCBxdWFsaXR5IHJhbmRvbSAjIGdlbmVyYXRvci4gSW4gdGhlIGJyb3dzZXIgd2UgdGhlcmVmb3JlXG4vLyByZXF1aXJlIHRoZSBjcnlwdG8gQVBJIGFuZCBkbyBub3Qgc3VwcG9ydCBidWlsdC1pbiBmYWxsYmFjayB0byBsb3dlciBxdWFsaXR5IHJhbmRvbSBudW1iZXJcbi8vIGdlbmVyYXRvcnMgKGxpa2UgTWF0aC5yYW5kb20oKSkuXG5sZXQgZ2V0UmFuZG9tVmFsdWVzO1xuY29uc3Qgcm5kczggPSBuZXcgVWludDhBcnJheSgxNik7XG5cbmZ1bmN0aW9uIHJuZygpIHtcbiAgLy8gbGF6eSBsb2FkIHNvIHRoYXQgZW52aXJvbm1lbnRzIHRoYXQgbmVlZCB0byBwb2x5ZmlsbCBoYXZlIGEgY2hhbmNlIHRvIGRvIHNvXG4gIGlmICghZ2V0UmFuZG9tVmFsdWVzKSB7XG4gICAgLy8gZ2V0UmFuZG9tVmFsdWVzIG5lZWRzIHRvIGJlIGludm9rZWQgaW4gYSBjb250ZXh0IHdoZXJlIFwidGhpc1wiIGlzIGEgQ3J5cHRvIGltcGxlbWVudGF0aW9uLlxuICAgIGdldFJhbmRvbVZhbHVlcyA9IHR5cGVvZiBjcnlwdG8gIT09ICd1bmRlZmluZWQnICYmIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMgJiYgY3J5cHRvLmdldFJhbmRvbVZhbHVlcy5iaW5kKGNyeXB0byk7XG5cbiAgICBpZiAoIWdldFJhbmRvbVZhbHVlcykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKCkgbm90IHN1cHBvcnRlZC4gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS91dWlkanMvdXVpZCNnZXRyYW5kb212YWx1ZXMtbm90LXN1cHBvcnRlZCcpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBnZXRSYW5kb21WYWx1ZXMocm5kczgpO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG4vLyBBZGFwdGVkIGZyb20gQ2hyaXMgVmVuZXNzJyBTSEExIGNvZGUgYXRcbi8vIGh0dHA6Ly93d3cubW92YWJsZS10eXBlLmNvLnVrL3NjcmlwdHMvc2hhMS5odG1sXG5mdW5jdGlvbiBmKHMsIHgsIHksIHopIHtcbiAgc3dpdGNoIChzKSB7XG4gICAgY2FzZSAwOlxuICAgICAgcmV0dXJuIHggJiB5IF4gfnggJiB6O1xuXG4gICAgY2FzZSAxOlxuICAgICAgcmV0dXJuIHggXiB5IF4gejtcblxuICAgIGNhc2UgMjpcbiAgICAgIHJldHVybiB4ICYgeSBeIHggJiB6IF4geSAmIHo7XG5cbiAgICBjYXNlIDM6XG4gICAgICByZXR1cm4geCBeIHkgXiB6O1xuICB9XG59XG5cbmZ1bmN0aW9uIFJPVEwoeCwgbikge1xuICByZXR1cm4geCA8PCBuIHwgeCA+Pj4gMzIgLSBuO1xufVxuXG5mdW5jdGlvbiBzaGExKGJ5dGVzKSB7XG4gIGNvbnN0IEsgPSBbMHg1YTgyNzk5OSwgMHg2ZWQ5ZWJhMSwgMHg4ZjFiYmNkYywgMHhjYTYyYzFkNl07XG4gIGNvbnN0IEggPSBbMHg2NzQ1MjMwMSwgMHhlZmNkYWI4OSwgMHg5OGJhZGNmZSwgMHgxMDMyNTQ3NiwgMHhjM2QyZTFmMF07XG5cbiAgaWYgKHR5cGVvZiBieXRlcyA9PT0gJ3N0cmluZycpIHtcbiAgICBjb25zdCBtc2cgPSB1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoYnl0ZXMpKTsgLy8gVVRGOCBlc2NhcGVcblxuICAgIGJ5dGVzID0gW107XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1zZy5sZW5ndGg7ICsraSkge1xuICAgICAgYnl0ZXMucHVzaChtc2cuY2hhckNvZGVBdChpKSk7XG4gICAgfVxuICB9IGVsc2UgaWYgKCFBcnJheS5pc0FycmF5KGJ5dGVzKSkge1xuICAgIC8vIENvbnZlcnQgQXJyYXktbGlrZSB0byBBcnJheVxuICAgIGJ5dGVzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYnl0ZXMpO1xuICB9XG5cbiAgYnl0ZXMucHVzaCgweDgwKTtcbiAgY29uc3QgbCA9IGJ5dGVzLmxlbmd0aCAvIDQgKyAyO1xuICBjb25zdCBOID0gTWF0aC5jZWlsKGwgLyAxNik7XG4gIGNvbnN0IE0gPSBuZXcgQXJyYXkoTik7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBOOyArK2kpIHtcbiAgICBjb25zdCBhcnIgPSBuZXcgVWludDMyQXJyYXkoMTYpO1xuXG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCAxNjsgKytqKSB7XG4gICAgICBhcnJbal0gPSBieXRlc1tpICogNjQgKyBqICogNF0gPDwgMjQgfCBieXRlc1tpICogNjQgKyBqICogNCArIDFdIDw8IDE2IHwgYnl0ZXNbaSAqIDY0ICsgaiAqIDQgKyAyXSA8PCA4IHwgYnl0ZXNbaSAqIDY0ICsgaiAqIDQgKyAzXTtcbiAgICB9XG5cbiAgICBNW2ldID0gYXJyO1xuICB9XG5cbiAgTVtOIC0gMV1bMTRdID0gKGJ5dGVzLmxlbmd0aCAtIDEpICogOCAvIE1hdGgucG93KDIsIDMyKTtcbiAgTVtOIC0gMV1bMTRdID0gTWF0aC5mbG9vcihNW04gLSAxXVsxNF0pO1xuICBNW04gLSAxXVsxNV0gPSAoYnl0ZXMubGVuZ3RoIC0gMSkgKiA4ICYgMHhmZmZmZmZmZjtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IE47ICsraSkge1xuICAgIGNvbnN0IFcgPSBuZXcgVWludDMyQXJyYXkoODApO1xuXG4gICAgZm9yIChsZXQgdCA9IDA7IHQgPCAxNjsgKyt0KSB7XG4gICAgICBXW3RdID0gTVtpXVt0XTtcbiAgICB9XG5cbiAgICBmb3IgKGxldCB0ID0gMTY7IHQgPCA4MDsgKyt0KSB7XG4gICAgICBXW3RdID0gUk9UTChXW3QgLSAzXSBeIFdbdCAtIDhdIF4gV1t0IC0gMTRdIF4gV1t0IC0gMTZdLCAxKTtcbiAgICB9XG5cbiAgICBsZXQgYSA9IEhbMF07XG4gICAgbGV0IGIgPSBIWzFdO1xuICAgIGxldCBjID0gSFsyXTtcbiAgICBsZXQgZCA9IEhbM107XG4gICAgbGV0IGUgPSBIWzRdO1xuXG4gICAgZm9yIChsZXQgdCA9IDA7IHQgPCA4MDsgKyt0KSB7XG4gICAgICBjb25zdCBzID0gTWF0aC5mbG9vcih0IC8gMjApO1xuICAgICAgY29uc3QgVCA9IFJPVEwoYSwgNSkgKyBmKHMsIGIsIGMsIGQpICsgZSArIEtbc10gKyBXW3RdID4+PiAwO1xuICAgICAgZSA9IGQ7XG4gICAgICBkID0gYztcbiAgICAgIGMgPSBST1RMKGIsIDMwKSA+Pj4gMDtcbiAgICAgIGIgPSBhO1xuICAgICAgYSA9IFQ7XG4gICAgfVxuXG4gICAgSFswXSA9IEhbMF0gKyBhID4+PiAwO1xuICAgIEhbMV0gPSBIWzFdICsgYiA+Pj4gMDtcbiAgICBIWzJdID0gSFsyXSArIGMgPj4+IDA7XG4gICAgSFszXSA9IEhbM10gKyBkID4+PiAwO1xuICAgIEhbNF0gPSBIWzRdICsgZSA+Pj4gMDtcbiAgfVxuXG4gIHJldHVybiBbSFswXSA+PiAyNCAmIDB4ZmYsIEhbMF0gPj4gMTYgJiAweGZmLCBIWzBdID4+IDggJiAweGZmLCBIWzBdICYgMHhmZiwgSFsxXSA+PiAyNCAmIDB4ZmYsIEhbMV0gPj4gMTYgJiAweGZmLCBIWzFdID4+IDggJiAweGZmLCBIWzFdICYgMHhmZiwgSFsyXSA+PiAyNCAmIDB4ZmYsIEhbMl0gPj4gMTYgJiAweGZmLCBIWzJdID4+IDggJiAweGZmLCBIWzJdICYgMHhmZiwgSFszXSA+PiAyNCAmIDB4ZmYsIEhbM10gPj4gMTYgJiAweGZmLCBIWzNdID4+IDggJiAweGZmLCBIWzNdICYgMHhmZiwgSFs0XSA+PiAyNCAmIDB4ZmYsIEhbNF0gPj4gMTYgJiAweGZmLCBIWzRdID4+IDggJiAweGZmLCBIWzRdICYgMHhmZl07XG59XG5cbnZhciBfZGVmYXVsdCA9IHNoYTE7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbmV4cG9ydHMudW5zYWZlU3RyaW5naWZ5ID0gdW5zYWZlU3RyaW5naWZ5O1xuXG52YXIgX3ZhbGlkYXRlID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi92YWxpZGF0ZS5qc1wiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbi8qKlxuICogQ29udmVydCBhcnJheSBvZiAxNiBieXRlIHZhbHVlcyB0byBVVUlEIHN0cmluZyBmb3JtYXQgb2YgdGhlIGZvcm06XG4gKiBYWFhYWFhYWC1YWFhYLVhYWFgtWFhYWC1YWFhYWFhYWFhYWFhcbiAqL1xuY29uc3QgYnl0ZVRvSGV4ID0gW107XG5cbmZvciAobGV0IGkgPSAwOyBpIDwgMjU2OyArK2kpIHtcbiAgYnl0ZVRvSGV4LnB1c2goKGkgKyAweDEwMCkudG9TdHJpbmcoMTYpLnNsaWNlKDEpKTtcbn1cblxuZnVuY3Rpb24gdW5zYWZlU3RyaW5naWZ5KGFyciwgb2Zmc2V0ID0gMCkge1xuICAvLyBOb3RlOiBCZSBjYXJlZnVsIGVkaXRpbmcgdGhpcyBjb2RlISAgSXQncyBiZWVuIHR1bmVkIGZvciBwZXJmb3JtYW5jZVxuICAvLyBhbmQgd29ya3MgaW4gd2F5cyB5b3UgbWF5IG5vdCBleHBlY3QuIFNlZSBodHRwczovL2dpdGh1Yi5jb20vdXVpZGpzL3V1aWQvcHVsbC80MzRcbiAgcmV0dXJuIChieXRlVG9IZXhbYXJyW29mZnNldCArIDBdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMV1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAyXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDNdXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgNF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA1XV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDZdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgN11dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA4XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDldXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTBdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTFdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTJdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTNdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTRdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTVdXSkudG9Mb3dlckNhc2UoKTtcbn1cblxuZnVuY3Rpb24gc3RyaW5naWZ5KGFyciwgb2Zmc2V0ID0gMCkge1xuICBjb25zdCB1dWlkID0gdW5zYWZlU3RyaW5naWZ5KGFyciwgb2Zmc2V0KTsgLy8gQ29uc2lzdGVuY3kgY2hlY2sgZm9yIHZhbGlkIFVVSUQuICBJZiB0aGlzIHRocm93cywgaXQncyBsaWtlbHkgZHVlIHRvIG9uZVxuICAvLyBvZiB0aGUgZm9sbG93aW5nOlxuICAvLyAtIE9uZSBvciBtb3JlIGlucHV0IGFycmF5IHZhbHVlcyBkb24ndCBtYXAgdG8gYSBoZXggb2N0ZXQgKGxlYWRpbmcgdG9cbiAgLy8gXCJ1bmRlZmluZWRcIiBpbiB0aGUgdXVpZClcbiAgLy8gLSBJbnZhbGlkIGlucHV0IHZhbHVlcyBmb3IgdGhlIFJGQyBgdmVyc2lvbmAgb3IgYHZhcmlhbnRgIGZpZWxkc1xuXG4gIGlmICghKDAsIF92YWxpZGF0ZS5kZWZhdWx0KSh1dWlkKSkge1xuICAgIHRocm93IFR5cGVFcnJvcignU3RyaW5naWZpZWQgVVVJRCBpcyBpbnZhbGlkJyk7XG4gIH1cblxuICByZXR1cm4gdXVpZDtcbn1cblxudmFyIF9kZWZhdWx0ID0gc3RyaW5naWZ5O1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbnZhciBfcm5nID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9ybmcuanNcIikpO1xuXG52YXIgX3N0cmluZ2lmeSA9IHJlcXVpcmUoXCIuL3N0cmluZ2lmeS5qc1wiKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuLy8gKipgdjEoKWAgLSBHZW5lcmF0ZSB0aW1lLWJhc2VkIFVVSUQqKlxuLy9cbi8vIEluc3BpcmVkIGJ5IGh0dHBzOi8vZ2l0aHViLmNvbS9MaW9zSy9VVUlELmpzXG4vLyBhbmQgaHR0cDovL2RvY3MucHl0aG9uLm9yZy9saWJyYXJ5L3V1aWQuaHRtbFxubGV0IF9ub2RlSWQ7XG5cbmxldCBfY2xvY2tzZXE7IC8vIFByZXZpb3VzIHV1aWQgY3JlYXRpb24gdGltZVxuXG5cbmxldCBfbGFzdE1TZWNzID0gMDtcbmxldCBfbGFzdE5TZWNzID0gMDsgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS91dWlkanMvdXVpZCBmb3IgQVBJIGRldGFpbHNcblxuZnVuY3Rpb24gdjEob3B0aW9ucywgYnVmLCBvZmZzZXQpIHtcbiAgbGV0IGkgPSBidWYgJiYgb2Zmc2V0IHx8IDA7XG4gIGNvbnN0IGIgPSBidWYgfHwgbmV3IEFycmF5KDE2KTtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxldCBub2RlID0gb3B0aW9ucy5ub2RlIHx8IF9ub2RlSWQ7XG4gIGxldCBjbG9ja3NlcSA9IG9wdGlvbnMuY2xvY2tzZXEgIT09IHVuZGVmaW5lZCA/IG9wdGlvbnMuY2xvY2tzZXEgOiBfY2xvY2tzZXE7IC8vIG5vZGUgYW5kIGNsb2Nrc2VxIG5lZWQgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gcmFuZG9tIHZhbHVlcyBpZiB0aGV5J3JlIG5vdFxuICAvLyBzcGVjaWZpZWQuICBXZSBkbyB0aGlzIGxhemlseSB0byBtaW5pbWl6ZSBpc3N1ZXMgcmVsYXRlZCB0byBpbnN1ZmZpY2llbnRcbiAgLy8gc3lzdGVtIGVudHJvcHkuICBTZWUgIzE4OVxuXG4gIGlmIChub2RlID09IG51bGwgfHwgY2xvY2tzZXEgPT0gbnVsbCkge1xuICAgIGNvbnN0IHNlZWRCeXRlcyA9IG9wdGlvbnMucmFuZG9tIHx8IChvcHRpb25zLnJuZyB8fCBfcm5nLmRlZmF1bHQpKCk7XG5cbiAgICBpZiAobm9kZSA9PSBudWxsKSB7XG4gICAgICAvLyBQZXIgNC41LCBjcmVhdGUgYW5kIDQ4LWJpdCBub2RlIGlkLCAoNDcgcmFuZG9tIGJpdHMgKyBtdWx0aWNhc3QgYml0ID0gMSlcbiAgICAgIG5vZGUgPSBfbm9kZUlkID0gW3NlZWRCeXRlc1swXSB8IDB4MDEsIHNlZWRCeXRlc1sxXSwgc2VlZEJ5dGVzWzJdLCBzZWVkQnl0ZXNbM10sIHNlZWRCeXRlc1s0XSwgc2VlZEJ5dGVzWzVdXTtcbiAgICB9XG5cbiAgICBpZiAoY2xvY2tzZXEgPT0gbnVsbCkge1xuICAgICAgLy8gUGVyIDQuMi4yLCByYW5kb21pemUgKDE0IGJpdCkgY2xvY2tzZXFcbiAgICAgIGNsb2Nrc2VxID0gX2Nsb2Nrc2VxID0gKHNlZWRCeXRlc1s2XSA8PCA4IHwgc2VlZEJ5dGVzWzddKSAmIDB4M2ZmZjtcbiAgICB9XG4gIH0gLy8gVVVJRCB0aW1lc3RhbXBzIGFyZSAxMDAgbmFuby1zZWNvbmQgdW5pdHMgc2luY2UgdGhlIEdyZWdvcmlhbiBlcG9jaCxcbiAgLy8gKDE1ODItMTAtMTUgMDA6MDApLiAgSlNOdW1iZXJzIGFyZW4ndCBwcmVjaXNlIGVub3VnaCBmb3IgdGhpcywgc29cbiAgLy8gdGltZSBpcyBoYW5kbGVkIGludGVybmFsbHkgYXMgJ21zZWNzJyAoaW50ZWdlciBtaWxsaXNlY29uZHMpIGFuZCAnbnNlY3MnXG4gIC8vICgxMDAtbmFub3NlY29uZHMgb2Zmc2V0IGZyb20gbXNlY3MpIHNpbmNlIHVuaXggZXBvY2gsIDE5NzAtMDEtMDEgMDA6MDAuXG5cblxuICBsZXQgbXNlY3MgPSBvcHRpb25zLm1zZWNzICE9PSB1bmRlZmluZWQgPyBvcHRpb25zLm1zZWNzIDogRGF0ZS5ub3coKTsgLy8gUGVyIDQuMi4xLjIsIHVzZSBjb3VudCBvZiB1dWlkJ3MgZ2VuZXJhdGVkIGR1cmluZyB0aGUgY3VycmVudCBjbG9ja1xuICAvLyBjeWNsZSB0byBzaW11bGF0ZSBoaWdoZXIgcmVzb2x1dGlvbiBjbG9ja1xuXG4gIGxldCBuc2VjcyA9IG9wdGlvbnMubnNlY3MgIT09IHVuZGVmaW5lZCA/IG9wdGlvbnMubnNlY3MgOiBfbGFzdE5TZWNzICsgMTsgLy8gVGltZSBzaW5jZSBsYXN0IHV1aWQgY3JlYXRpb24gKGluIG1zZWNzKVxuXG4gIGNvbnN0IGR0ID0gbXNlY3MgLSBfbGFzdE1TZWNzICsgKG5zZWNzIC0gX2xhc3ROU2VjcykgLyAxMDAwMDsgLy8gUGVyIDQuMi4xLjIsIEJ1bXAgY2xvY2tzZXEgb24gY2xvY2sgcmVncmVzc2lvblxuXG4gIGlmIChkdCA8IDAgJiYgb3B0aW9ucy5jbG9ja3NlcSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgY2xvY2tzZXEgPSBjbG9ja3NlcSArIDEgJiAweDNmZmY7XG4gIH0gLy8gUmVzZXQgbnNlY3MgaWYgY2xvY2sgcmVncmVzc2VzIChuZXcgY2xvY2tzZXEpIG9yIHdlJ3ZlIG1vdmVkIG9udG8gYSBuZXdcbiAgLy8gdGltZSBpbnRlcnZhbFxuXG5cbiAgaWYgKChkdCA8IDAgfHwgbXNlY3MgPiBfbGFzdE1TZWNzKSAmJiBvcHRpb25zLm5zZWNzID09PSB1bmRlZmluZWQpIHtcbiAgICBuc2VjcyA9IDA7XG4gIH0gLy8gUGVyIDQuMi4xLjIgVGhyb3cgZXJyb3IgaWYgdG9vIG1hbnkgdXVpZHMgYXJlIHJlcXVlc3RlZFxuXG5cbiAgaWYgKG5zZWNzID49IDEwMDAwKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwidXVpZC52MSgpOiBDYW4ndCBjcmVhdGUgbW9yZSB0aGFuIDEwTSB1dWlkcy9zZWNcIik7XG4gIH1cblxuICBfbGFzdE1TZWNzID0gbXNlY3M7XG4gIF9sYXN0TlNlY3MgPSBuc2VjcztcbiAgX2Nsb2Nrc2VxID0gY2xvY2tzZXE7IC8vIFBlciA0LjEuNCAtIENvbnZlcnQgZnJvbSB1bml4IGVwb2NoIHRvIEdyZWdvcmlhbiBlcG9jaFxuXG4gIG1zZWNzICs9IDEyMjE5MjkyODAwMDAwOyAvLyBgdGltZV9sb3dgXG5cbiAgY29uc3QgdGwgPSAoKG1zZWNzICYgMHhmZmZmZmZmKSAqIDEwMDAwICsgbnNlY3MpICUgMHgxMDAwMDAwMDA7XG4gIGJbaSsrXSA9IHRsID4+PiAyNCAmIDB4ZmY7XG4gIGJbaSsrXSA9IHRsID4+PiAxNiAmIDB4ZmY7XG4gIGJbaSsrXSA9IHRsID4+PiA4ICYgMHhmZjtcbiAgYltpKytdID0gdGwgJiAweGZmOyAvLyBgdGltZV9taWRgXG5cbiAgY29uc3QgdG1oID0gbXNlY3MgLyAweDEwMDAwMDAwMCAqIDEwMDAwICYgMHhmZmZmZmZmO1xuICBiW2krK10gPSB0bWggPj4+IDggJiAweGZmO1xuICBiW2krK10gPSB0bWggJiAweGZmOyAvLyBgdGltZV9oaWdoX2FuZF92ZXJzaW9uYFxuXG4gIGJbaSsrXSA9IHRtaCA+Pj4gMjQgJiAweGYgfCAweDEwOyAvLyBpbmNsdWRlIHZlcnNpb25cblxuICBiW2krK10gPSB0bWggPj4+IDE2ICYgMHhmZjsgLy8gYGNsb2NrX3NlcV9oaV9hbmRfcmVzZXJ2ZWRgIChQZXIgNC4yLjIgLSBpbmNsdWRlIHZhcmlhbnQpXG5cbiAgYltpKytdID0gY2xvY2tzZXEgPj4+IDggfCAweDgwOyAvLyBgY2xvY2tfc2VxX2xvd2BcblxuICBiW2krK10gPSBjbG9ja3NlcSAmIDB4ZmY7IC8vIGBub2RlYFxuXG4gIGZvciAobGV0IG4gPSAwOyBuIDwgNjsgKytuKSB7XG4gICAgYltpICsgbl0gPSBub2RlW25dO1xuICB9XG5cbiAgcmV0dXJuIGJ1ZiB8fCAoMCwgX3N0cmluZ2lmeS51bnNhZmVTdHJpbmdpZnkpKGIpO1xufVxuXG52YXIgX2RlZmF1bHQgPSB2MTtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgX3YgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3YzNS5qc1wiKSk7XG5cbnZhciBfbWQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL21kNS5qc1wiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmNvbnN0IHYzID0gKDAsIF92LmRlZmF1bHQpKCd2MycsIDB4MzAsIF9tZC5kZWZhdWx0KTtcbnZhciBfZGVmYXVsdCA9IHYzO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLlVSTCA9IGV4cG9ydHMuRE5TID0gdm9pZCAwO1xuZXhwb3J0cy5kZWZhdWx0ID0gdjM1O1xuXG52YXIgX3N0cmluZ2lmeSA9IHJlcXVpcmUoXCIuL3N0cmluZ2lmeS5qc1wiKTtcblxudmFyIF9wYXJzZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vcGFyc2UuanNcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBzdHJpbmdUb0J5dGVzKHN0cikge1xuICBzdHIgPSB1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoc3RyKSk7IC8vIFVURjggZXNjYXBlXG5cbiAgY29uc3QgYnl0ZXMgPSBbXTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHN0ci5sZW5ndGg7ICsraSkge1xuICAgIGJ5dGVzLnB1c2goc3RyLmNoYXJDb2RlQXQoaSkpO1xuICB9XG5cbiAgcmV0dXJuIGJ5dGVzO1xufVxuXG5jb25zdCBETlMgPSAnNmJhN2I4MTAtOWRhZC0xMWQxLTgwYjQtMDBjMDRmZDQzMGM4JztcbmV4cG9ydHMuRE5TID0gRE5TO1xuY29uc3QgVVJMID0gJzZiYTdiODExLTlkYWQtMTFkMS04MGI0LTAwYzA0ZmQ0MzBjOCc7XG5leHBvcnRzLlVSTCA9IFVSTDtcblxuZnVuY3Rpb24gdjM1KG5hbWUsIHZlcnNpb24sIGhhc2hmdW5jKSB7XG4gIGZ1bmN0aW9uIGdlbmVyYXRlVVVJRCh2YWx1ZSwgbmFtZXNwYWNlLCBidWYsIG9mZnNldCkge1xuICAgIHZhciBfbmFtZXNwYWNlO1xuXG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHZhbHVlID0gc3RyaW5nVG9CeXRlcyh2YWx1ZSk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBuYW1lc3BhY2UgPT09ICdzdHJpbmcnKSB7XG4gICAgICBuYW1lc3BhY2UgPSAoMCwgX3BhcnNlLmRlZmF1bHQpKG5hbWVzcGFjZSk7XG4gICAgfVxuXG4gICAgaWYgKCgoX25hbWVzcGFjZSA9IG5hbWVzcGFjZSkgPT09IG51bGwgfHwgX25hbWVzcGFjZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX25hbWVzcGFjZS5sZW5ndGgpICE9PSAxNikge1xuICAgICAgdGhyb3cgVHlwZUVycm9yKCdOYW1lc3BhY2UgbXVzdCBiZSBhcnJheS1saWtlICgxNiBpdGVyYWJsZSBpbnRlZ2VyIHZhbHVlcywgMC0yNTUpJyk7XG4gICAgfSAvLyBDb21wdXRlIGhhc2ggb2YgbmFtZXNwYWNlIGFuZCB2YWx1ZSwgUGVyIDQuM1xuICAgIC8vIEZ1dHVyZTogVXNlIHNwcmVhZCBzeW50YXggd2hlbiBzdXBwb3J0ZWQgb24gYWxsIHBsYXRmb3JtcywgZS5nLiBgYnl0ZXMgPVxuICAgIC8vIGhhc2hmdW5jKFsuLi5uYW1lc3BhY2UsIC4uLiB2YWx1ZV0pYFxuXG5cbiAgICBsZXQgYnl0ZXMgPSBuZXcgVWludDhBcnJheSgxNiArIHZhbHVlLmxlbmd0aCk7XG4gICAgYnl0ZXMuc2V0KG5hbWVzcGFjZSk7XG4gICAgYnl0ZXMuc2V0KHZhbHVlLCBuYW1lc3BhY2UubGVuZ3RoKTtcbiAgICBieXRlcyA9IGhhc2hmdW5jKGJ5dGVzKTtcbiAgICBieXRlc1s2XSA9IGJ5dGVzWzZdICYgMHgwZiB8IHZlcnNpb247XG4gICAgYnl0ZXNbOF0gPSBieXRlc1s4XSAmIDB4M2YgfCAweDgwO1xuXG4gICAgaWYgKGJ1Zikge1xuICAgICAgb2Zmc2V0ID0gb2Zmc2V0IHx8IDA7XG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTY7ICsraSkge1xuICAgICAgICBidWZbb2Zmc2V0ICsgaV0gPSBieXRlc1tpXTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGJ1ZjtcbiAgICB9XG5cbiAgICByZXR1cm4gKDAsIF9zdHJpbmdpZnkudW5zYWZlU3RyaW5naWZ5KShieXRlcyk7XG4gIH0gLy8gRnVuY3Rpb24jbmFtZSBpcyBub3Qgc2V0dGFibGUgb24gc29tZSBwbGF0Zm9ybXMgKCMyNzApXG5cblxuICB0cnkge1xuICAgIGdlbmVyYXRlVVVJRC5uYW1lID0gbmFtZTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWVtcHR5XG4gIH0gY2F0Y2ggKGVycikge30gLy8gRm9yIENvbW1vbkpTIGRlZmF1bHQgZXhwb3J0IHN1cHBvcnRcblxuXG4gIGdlbmVyYXRlVVVJRC5ETlMgPSBETlM7XG4gIGdlbmVyYXRlVVVJRC5VUkwgPSBVUkw7XG4gIHJldHVybiBnZW5lcmF0ZVVVSUQ7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbnZhciBfbmF0aXZlID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9uYXRpdmUuanNcIikpO1xuXG52YXIgX3JuZyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vcm5nLmpzXCIpKTtcblxudmFyIF9zdHJpbmdpZnkgPSByZXF1aXJlKFwiLi9zdHJpbmdpZnkuanNcIik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIHY0KG9wdGlvbnMsIGJ1Ziwgb2Zmc2V0KSB7XG4gIGlmIChfbmF0aXZlLmRlZmF1bHQucmFuZG9tVVVJRCAmJiAhYnVmICYmICFvcHRpb25zKSB7XG4gICAgcmV0dXJuIF9uYXRpdmUuZGVmYXVsdC5yYW5kb21VVUlEKCk7XG4gIH1cblxuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuICBjb25zdCBybmRzID0gb3B0aW9ucy5yYW5kb20gfHwgKG9wdGlvbnMucm5nIHx8IF9ybmcuZGVmYXVsdCkoKTsgLy8gUGVyIDQuNCwgc2V0IGJpdHMgZm9yIHZlcnNpb24gYW5kIGBjbG9ja19zZXFfaGlfYW5kX3Jlc2VydmVkYFxuXG5cbiAgcm5kc1s2XSA9IHJuZHNbNl0gJiAweDBmIHwgMHg0MDtcbiAgcm5kc1s4XSA9IHJuZHNbOF0gJiAweDNmIHwgMHg4MDsgLy8gQ29weSBieXRlcyB0byBidWZmZXIsIGlmIHByb3ZpZGVkXG5cbiAgaWYgKGJ1Zikge1xuICAgIG9mZnNldCA9IG9mZnNldCB8fCAwO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxNjsgKytpKSB7XG4gICAgICBidWZbb2Zmc2V0ICsgaV0gPSBybmRzW2ldO1xuICAgIH1cblxuICAgIHJldHVybiBidWY7XG4gIH1cblxuICByZXR1cm4gKDAsIF9zdHJpbmdpZnkudW5zYWZlU3RyaW5naWZ5KShybmRzKTtcbn1cblxudmFyIF9kZWZhdWx0ID0gdjQ7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxudmFyIF92ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi92MzUuanNcIikpO1xuXG52YXIgX3NoYSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vc2hhMS5qc1wiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmNvbnN0IHY1ID0gKDAsIF92LmRlZmF1bHQpKCd2NScsIDB4NTAsIF9zaGEuZGVmYXVsdCk7XG52YXIgX2RlZmF1bHQgPSB2NTtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgX3JlZ2V4ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9yZWdleC5qc1wiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIHZhbGlkYXRlKHV1aWQpIHtcbiAgcmV0dXJuIHR5cGVvZiB1dWlkID09PSAnc3RyaW5nJyAmJiBfcmVnZXguZGVmYXVsdC50ZXN0KHV1aWQpO1xufVxuXG52YXIgX2RlZmF1bHQgPSB2YWxpZGF0ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgX3ZhbGlkYXRlID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi92YWxpZGF0ZS5qc1wiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIHZlcnNpb24odXVpZCkge1xuICBpZiAoISgwLCBfdmFsaWRhdGUuZGVmYXVsdCkodXVpZCkpIHtcbiAgICB0aHJvdyBUeXBlRXJyb3IoJ0ludmFsaWQgVVVJRCcpO1xuICB9XG5cbiAgcmV0dXJuIHBhcnNlSW50KHV1aWQuc2xpY2UoMTQsIDE1KSwgMTYpO1xufVxuXG52YXIgX2RlZmF1bHQgPSB2ZXJzaW9uO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7IiwiY29uc3Qge2xvZ30gPSBjb25zb2xlO1xuaW1wb3J0IHtQcm9qZWN0RE9NLCB0b2RvQmFja30gZnJvbSAnLi9tb2R1bGVzL3VpJ1xuaW1wb3J0ICcuL3N0eWxlLmNzcydcblxuY29uc3QgdWlIYW5kbGVyID0gKCgpPT57XG4gIGNvbnN0IGluYm94QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2luYm94LWJ0bicpXG4gIGNvbnN0IHRvZGF5QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZGF5LWJ0bicpXG4gIGNvbnN0IHRoaXNXZWVrQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RoaXN3ZWVrLWJ0bicpXG4gIFxuICBQcm9qZWN0RE9NLmNyZWF0ZVN0YXRpY1Byb2plY3QodG9kb0JhY2suZ2V0UHJvamVjdCgnSW5ib3gnKSAsIGluYm94QnRuKTtcbiAgUHJvamVjdERPTS5jcmVhdGVTdGF0aWNQcm9qZWN0KHRvZG9CYWNrLmdldFByb2plY3QoJ1RvZGF5JyksIHRvZGF5QnRuKTtcbiAgUHJvamVjdERPTS5jcmVhdGVTdGF0aWNQcm9qZWN0KHRvZG9CYWNrLmdldFByb2plY3QoJ1RoaXMgd2VlaycpLCB0aGlzV2Vla0J0bik7XG4gIFByb2plY3RET00udXBkYXRlRE9NKClcblxuICBjb25zdCBvbmxvYWQgPSgoKSA9PiBpbmJveEJ0bi5jbGljaygpKSgpO1xufSkoKVxuXG4iLCJjb25zdCB1dWlkID0gcmVxdWlyZSgndXVpZCcpXG5cbmNvbnN0IHtsb2d9ID0gY29uc29sZTtcbmltcG9ydCB7IHRvRGF0ZSwgaXNUb2RheSwgaXNUaGlzV2Vlaywgc3ViRGF5cyB9IGZyb20gXCJkYXRlLWZuc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9qZWN0IHtcbiAgY29uc3RydWN0b3IobmFtZSl7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLnVpZCA9IHV1aWQudjQoKTtcbiAgICB0aGlzLnRhc2tzID0gW107XG4gICAgdGhpcy5jb21wbGV0ZWQgPSBbXTtcbiAgfVxuXG4gIHNldE5hbWUobmFtZSl7XG4gICAgdGhpcy5uYW1lID0gbmFtZVxuICB9XG5cbiAgZ2V0TmFtZSgpe1xuICAgIHJldHVybiB0aGlzLm5hbWU7XG4gIH1cblxuICBnZXRVSUQoKXtcbiAgICByZXR1cm4gdGhpcy51aWQ7XG4gIH1cblxuICBzZXRUYXNrcyh0YXNrcyl7XG4gICAgdGhpcy50YXNrcyA9IHRhc2tzO1xuICB9XG5cbiAgZ2V0VGFza3MoKXtcbiAgICByZXR1cm4gdGhpcy50YXNrcztcbiAgfVxuXG5cbiAgZ2V0Q29tcGxldGVkKCl7XG4gICAgcmV0dXJuIHRoaXMuY29tcGxldGVkO1xuICB9XG5cbiAgc2V0Q29tcGxldGVkKGNvbXBsZXRlZCl7XG4gICAgdGhpcy5jb21wbGV0ZWQgPSBjb21wbGV0ZWQ7XG4gIH1cbiAgXG4gIGdldFRhc2sodGl0bGUpe1xuICAgIHJldHVybiB0aGlzLnRhc2tzLmZpbmQodGFzayA9PiB0YXNrLnRpdGxlID09PSB0aXRsZSlcbiAgfVxuXG4gIGdldENvbXBsZXRlZFRhc2sodGl0bGUpe1xuICAgIHJldHVybiB0aGlzLmNvbXBsZXRlZC5maW5kKHRvZG8gPT4gdG9kby50aXRsZSA9PT0gdGl0bGUpXG4gIH1cblxuICBnZXRUYXNrQnlVSUQodWlkKXtcbiAgICByZXR1cm4gdGhpcy50YXNrcy5maW5kKHRhc2s9PiB0YXNrLnVpZCA9PT0gdWlkKVxuICB9XG5cbiAgZ2V0Q29tcGxldGVkVGFza0J5VUlEKHVpZCl7XG4gICAgcmV0dXJuIHRoaXMuY29tcGxldGVkLmZpbmQodG9kbyA9PiB0b2RvLnVpZCA9PT0gdWlkKVxuICB9XG5cbiAgY29udGFpbnModGl0bGUpe1xuICAgIHJldHVybiB0aGlzLnRhc2tzLnNvbWUodGFzaz0+IHRhc2sudGl0bGUgPT09IHRpdGxlKVxuICB9XG4gIFxuICBjb21wbGV0ZWRDb250YWlucyh0aXRsZSl7XG4gICAgcmV0dXJuIHRoaXMuY29tcGxldGVkLnNvbWUodG9kbyA9PiB0b2RvLnRpdGxlID09PSB0aXRsZSk7XG4gIH1cblxuICBhZGRUYXNrKG5ld1Rhc2spe1xuICAgIGlmKHRoaXMudGFza3MuZmluZCh0YXNrPT50YXNrLnRpdGxlPT09bmV3VGFzay50aXRsZSkpIHJldHVybjtcbiAgICB0aGlzLnRhc2tzLnB1c2gobmV3VGFzaylcbiAgfVxuXG4gIGFkZENvbXBsZXRlZCh0YXNrKXtcbiAgICAvL3RoaXMucmVtb3ZlVGFzayh0YXNrLnVpZCk7XG4gICAgdGhpcy5jb21wbGV0ZWQucHVzaCh0YXNrKTtcbiAgfVxuXG4gIHNvcnRCeUNvbXBsZXRlZCgpe1xuICAgIHRoaXMuZ2V0VGFza3MoKS5zb3J0KChhLCBiKSA9PiBiLmNvbXBsZXRlZCAtIGEuY29tcGxldGVkKVxuICB9XG5cbiAgcmVtb3ZlVGFzayh1aWQpe1xuICAgIHRoaXMudGFza3MgPSB0aGlzLnRhc2tzLmZpbHRlcih0YXNrID0+IHRhc2sudWlkICE9PSB1aWQpXG4gIH1cblxuICByZW1vdmVDb21wbGV0ZWQodWlkKXtcbiAgICB0aGlzLmNvbXBsZXRlZCA9IHRoaXMuY29tcGxldGVkLmZpbHRlcih0b2RvID0+IHRvZG8gIT09IHRvZG8udWlkKTsgIFxuICB9XG5cbiAgdG9kYXlUYXNrcygpe1xuICAgIHJldHVybiB0aGlzLnRhc2tzLmZpbHRlcih0YXNrPT57XG4gICAgICBjb25zdCBmID0gdGFzay5nZXRGb3JtYXR0ZWREYXRlKClcbiAgICAgIGNvbnN0IHRhc2tEYXRlID0gbmV3IERhdGUoYCR7Zi5tb250aH0vJHtmLmRheX0vJHtmLnllYXJ9YClcbiAgICAgIHJldHVybiBpc1RvZGF5KHRvRGF0ZSh0YXNrRGF0ZSkpXG4gICAgfSlcbiAgfVxuXG4gIHRoaXNXZWVrVGFza3MoKXtcbiAgICByZXR1cm4gdGhpcy50YXNrcy5maWx0ZXIodGFzaz0+e1xuICAgICAgY29uc3QgZiA9IHRhc2suZ2V0Rm9ybWF0dGVkRGF0ZSgpXG4gICAgICBjb25zdCB0YXNrRGF0ZSA9IG5ldyBEYXRlKGAke2YubW9udGh9LyR7Zi5kYXl9LyR7Zi55ZWFyfWApXG4gICAgICByZXR1cm4gaXNUaGlzV2VlayhzdWJEYXlzKHRvRGF0ZSh0YXNrRGF0ZSksIDEpKTtcbiAgICB9KVxuICB9XG5cbn0iLCJpbXBvcnQgVG9kb0JhY2tFbmQgZnJvbSBcIi4vdG8tZG8tYmFja1wiO1xuaW1wb3J0IFByb2plY3QgZnJvbSBcIi4vcHJvamVjdHNcIjtcbmltcG9ydCBUb2RvIGZyb20gXCIuL3RvZG9zXCI7XG5cbmNvbnN0IHtsb2d9ID0gY29uc29sZTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RvcmFnZSB7XG4gIHN0YXRpYyBzYXZlVG9kb0JhY2soZGF0YSkge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiVG9kb0JhY2tcIiwgSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xuICB9XG5cbiAgc3RhdGljIGdldFRvZG9CYWNrKCkge1xuICAgIGNvbnN0IHRvZG9CYWNrID0gT2JqZWN0LmFzc2lnbihcbiAgICAgIG5ldyBUb2RvQmFja0VuZCgpLFxuICAgICAgSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIlRvZG9CYWNrXCIpKVxuICAgICk7XG5cbiAgICB0b2RvQmFjay5zZXRQcm9qZWN0cyhcbiAgICAgIHRvZG9CYWNrXG4gICAgICAgIC5nZXRQcm9qZWN0cygpXG4gICAgICAgIC5tYXAoKHByb2plY3QpID0+IE9iamVjdC5hc3NpZ24obmV3IFByb2plY3QoKSwgcHJvamVjdCkpXG4gICAgKTtcblxuICAgIHRvZG9CYWNrLmdldFByb2plY3RzKCkuZm9yRWFjaChwcm9qZWN0PT5wcm9qZWN0LnNldFRhc2tzKFxuICAgICAgcHJvamVjdC5nZXRUYXNrcygpLm1hcCh0YXNrPT4gT2JqZWN0LmFzc2lnbihuZXcgVG9kbywgdGFzaykpXG4gICAgKSlcblxuICAgIHRvZG9CYWNrLmdldFByb2plY3RzKCkuZm9yRWFjaChwcm9qZWN0ID0+IHByb2plY3Quc2V0Q29tcGxldGVkKFxuICAgICAgcHJvamVjdC5nZXRDb21wbGV0ZWQoKS5tYXAodGFzayA9PiBPYmplY3QuYXNzaWduKG5ldyBUb2RvLCB0YXNrKSlcbiAgICApKVxuXG4gICAgXG4gICAgbG9nKHRvZG9CYWNrKTtcbiAgICByZXR1cm4gdG9kb0JhY2s7XG4gIH1cbn0iLCJpbXBvcnQgUHJvamVjdCBmcm9tIFwiLi9wcm9qZWN0c1wiO1xuXG5jb25zdCB7bG9nfSA9IGNvbnNvbGVcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9kb0JhY2tFbmQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnByb2plY3RzID0gW11cbiAgICB0aGlzLnByb2plY3RzLnB1c2gobmV3IFByb2plY3QoJ0luYm94JykpO1xuICAgIHRoaXMucHJvamVjdHMucHVzaChuZXcgUHJvamVjdCgnVG9kYXknKSk7XG4gICAgdGhpcy5wcm9qZWN0cy5wdXNoKG5ldyBQcm9qZWN0KCdUaGlzIHdlZWsnKSk7XG4gIH1cbiAgc2V0UHJvamVjdHMocHJvamVjdHMpe1xuICAgIHRoaXMucHJvamVjdHMgPSBwcm9qZWN0cztcbiAgfVxuICBnZXRQcm9qZWN0cygpe1xuICAgIHJldHVybiB0aGlzLnByb2plY3RzO1xuICB9XG4gIGdldFByb2plY3QobmFtZSl7XG4gICAgcmV0dXJuIHRoaXMucHJvamVjdHMuZmluZChwcm9qZWN0ID0+IHByb2plY3QubmFtZSA9PT0gbmFtZSlcbiAgfVxuICBnZXRQcm9qZWN0QnlVSUQodWlkKXtcbiAgICByZXR1cm4gdGhpcy5wcm9qZWN0cy5maW5kKHByb2plY3Q9PiBwcm9qZWN0LmdldFVJRCgpPT09dWlkKVxuICB9XG4gIGNvbnRhaW5zKG5hbWUpe1xuICAgIHJldHVybiB0aGlzLnByb2plY3RzLnNvbWUocHJvamVjdCA9PiBwcm9qZWN0Lm5hbWUgPT09IG5hbWUpXG4gIH1cblxuICBhZGRQcm9qZWN0KG5ld1Byb2plY3Qpe1xuICAgIGlmKHRoaXMucHJvamVjdHMuZmluZChwcm9qZWN0PT4gcHJvamVjdC5uYW1lID09PSBuZXdQcm9qZWN0Lm5hbWUpKSByZXR1cm47XG4gICAgdGhpcy5wcm9qZWN0cy5wdXNoKG5ld1Byb2plY3QpXG4gIH1cbiAgZGVsZXRlUHJvamVjdCh1aWQpe1xuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5wcm9qZWN0cy5maW5kSW5kZXgocHJvamVjdCA9PiBwcm9qZWN0LnVpZCA9PT0gdWlkKTtcbiAgICBpZiAoaW5kZXggIT09IC0xKSB0aGlzLnByb2plY3RzLnNwbGljZShpbmRleCwgMSlcbiAgfVxufSIsImNvbnN0IHV1aWQgPSByZXF1aXJlKCd1dWlkJylcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9kbyB7XG4gIGNvbnN0cnVjdG9yKHRpdGxlLCBzb3VyY2Upe1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZVxuICAgIHRoaXMuZHVlRGF0ZSA9ICdObyBkYXRlJztcbiAgICB0aGlzLmNvbXBsZXRlZCA9IGZhbHNlO1xuICAgIHRoaXMudWlkID0gdXVpZC52NCgpO1xuICAgIHRoaXMuc291cmNlID0gc291cmNlO1xuICB9XG4gIFxuICBcbiAgZ2V0Q29tcGxldGUoKXtcbiAgICByZXR1cm4gdGhpcy5jb21wbGV0ZWQ7XG4gIH1cblxuICBzZXRDb21wbGV0ZWQoKXtcbiAgICB0aGlzLmNvbXBsZXRlZCA9ICF0aGlzLmNvbXBsZXRlZD8gdHJ1ZTogZmFsc2U7XG4gIH1cblxuICBnZXRUaXRsZSgpe1xuICAgIHJldHVybiB0aGlzLnRpdGxlO1xuICB9XG5cbiAgc2V0VGl0bGUodmFsdWUpe1xuICAgIHRoaXMudGl0bGUgPSB2YWx1ZVxuICB9XG5cbiAgcmV0dXJuQ3VzdG9tVGl0bGUoKXtcbiAgICByZXR1cm4gYCR7dGhpcy50aXRsZX0gKCR7dGhpcy5zb3VyY2V9KWBcbiAgfVxuXG4gIGdldFNvdXJjZSgpe1xuICAgIHJldHVybiB0aGlzLnNvdXJjZTtcbiAgfVxuXG4gIHNldER1ZURhdGUoZGF0ZSl7XG4gICAgdGhpcy5kdWVEYXRlID0gZGF0ZVxuICB9XG4gIFxuICBnZXREdWVEYXRlKCl7XG4gICAgY29uc3QgYXJyID0gdGhpcy5kdWVEYXRlLnNwbGl0KFwiLVwiKTtcbiAgICByZXR1cm4gYXJyLmxlbmd0aCA+IDEgPyBgJHthcnJbMl19LyR7YXJyWzFdfS8ke2FyclswXX1gIDogYCR7YXJyWzBdfWA7XG4gIH1cblxuICBnZXRGb3JtYXR0ZWREYXRlKCl7XG4gICAgY29uc3Qgc3BsaXQgPSB0aGlzLmR1ZURhdGUuc3BsaXQoJy0nKTtcbiAgICBjb25zdCBkYXkgPSBzcGxpdFsyXVxuICAgIGNvbnN0IG1vbnRoID0gc3BsaXRbMV1cbiAgICBjb25zdCB5ZWFyID0gc3BsaXRbMF1cbiAgICByZXR1cm4ge2RheSwgbW9udGgsIHllYXJ9XG4gIH1cbn0iLCJjb25zdCB7bG9nfSA9IGNvbnNvbGU7XG5pbXBvcnQgUHJvamVjdCBmcm9tIFwiLi9wcm9qZWN0c1wiO1xuaW1wb3J0IFRvZG8gZnJvbSBcIi4vdG9kb3NcIjtcbmltcG9ydCBTdG9yYWdlIGZyb20gXCIuL3N0b3JhZ2VcIjtcblxuY29uc3QgdG9kb0JhY2sgPSBTdG9yYWdlLmdldFRvZG9CYWNrKCk7XG5cbmNsYXNzIENyZWF0ZUFkZFRhc2sge1xuICBzdGF0aWMgI21haW5UaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpbi10aXRsZVwiKTtcbiAgc3RhdGljICNtZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrLW1lbnVcIik7XG5cbiAgc3RhdGljIGJsYW5rKCkge1xuICAgIHRoaXMuI21lbnUuaW5uZXJIVE1MID0gJydcbiAgfVxuXG4gIHN0YXRpYyBhZGRUYXNrRE9NKCkge1xuICAgIGZ1bmN0aW9uIHNob3dIaWRlKGVsZW1lbnRPbmUsIGVsZW1lbnRUd28pIHtcbiAgICAgIGNvbnN0IGZuID0gKGVsZW1lbnQpID0+IHtcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmVcIilcbiAgICAgICAgICA/IChlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIiksXG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJkZWFjdGl2ZVwiKSlcbiAgICAgICAgICA6IGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcbiAgICAgICAgICAgICAgXCJkZWFjdGl2ZVwiLFxuICAgICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIilcbiAgICAgICAgICAgICk7XG4gICAgICB9O1xuICAgICAgZm4oZWxlbWVudE9uZSk7XG4gICAgICBmbihlbGVtZW50VHdvKTtcbiAgICB9XG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvL0FERCBUQVNLIEJVVFRPTlxuICAgIGNvbnN0IGFkZFRhc2tCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGNvbnN0IGNyZWF0ZUFkZFRhc2sgPSAoKSA9PiB7XG4gICAgICBjb25zdCBhZGRUYXNrUGx1cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBjb25zdCBhZGRUYXNrVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgICAgIGNvbnN0IHByb3BlcnRpZXMgPSAoKCkgPT4ge1xuICAgICAgICBhZGRUYXNrQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJhZGQtdGFzay1tZW51XCIsIFwiYWN0aXZlXCIpO1xuICAgICAgICBhZGRUYXNrUGx1cy5pZCA9IFwicGx1c1wiO1xuICAgICAgICBhZGRUYXNrVGV4dC50ZXh0Q29udGVudCA9IFwiQWRkIFRhc2tcIjtcbiAgICAgIH0pKCk7XG5cbiAgICAgIGNvbnN0IGxpc3RlbmVycyA9ICgoKSA9PiB7XG4gICAgICAgIGFkZFRhc2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCAoKSA9PiB7XG4gICAgICAgICAgc2hvd0hpZGUoYWRkVGFza0J1dHRvbiwgcG9wdXBDb250YWluZXIpO1xuICAgICAgICB9KTtcbiAgICAgIH0pKCk7XG5cbiAgICAgIGFkZFRhc2tCdXR0b24uYXBwZW5kKGFkZFRhc2tQbHVzLCBhZGRUYXNrVGV4dCk7XG4gICAgICByZXR1cm4gYWRkVGFza0J1dHRvbjtcbiAgICB9O1xuICAgIC8vUE9QVVBcbiAgICBjb25zdCBwb3B1cENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgY3JlYXRlVGFza1BvcHVwID0gKCkgPT4ge1xuICAgICAgY29uc3QgcG9wdXBJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgIGNvbnN0IHBvcHVwQnV0dG9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBjb25zdCBwb3B1cEFkZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICBjb25zdCBwb3B1cENhbmNlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5cbiAgICAgIGNvbnN0IHByb3BlcnRpZXMgPSAoKCkgPT4ge1xuICAgICAgICBwb3B1cENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFxuICAgICAgICAgIFwicG9wdXAtbWVudVwiLFxuICAgICAgICAgIFwiYWRkLXRhc2stcG9wdXBcIixcbiAgICAgICAgICBcImRlYWN0aXZlXCJcbiAgICAgICAgKTtcbiAgICAgICAgcG9wdXBJbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtcbiAgICAgICAgcG9wdXBJbnB1dC5pZCA9IFwiaW5wdXQtYWRkLXRhc2stcG9wdXBcIjtcbiAgICAgICAgcG9wdXBJbnB1dC5jbGFzc05hbWUgPSBcInBvcHVwLW1lbnUtaW5wdXRcIjtcblxuICAgICAgICBwb3B1cEJ1dHRvbnMuY2xhc3NOYW1lID0gXCJwb3B1cC1idXR0b25zXCI7XG5cbiAgICAgICAgcG9wdXBBZGQuY2xhc3NMaXN0LmFkZChcbiAgICAgICAgICBcImJ1dHRvbi1hZGRcIixcbiAgICAgICAgICBcInBvcHVwLWJ1dHRvblwiLFxuICAgICAgICAgIFwidGFzay1wb3B1cC1idXR0b24tYWRkXCJcbiAgICAgICAgKTtcbiAgICAgICAgcG9wdXBBZGQudGV4dENvbnRlbnQgPSBcIkFkZFwiO1xuXG4gICAgICAgIHBvcHVwQ2FuY2VsLmNsYXNzTGlzdC5hZGQoXG4gICAgICAgICAgXCJidXR0b24tY2FuY2VsXCIsXG4gICAgICAgICAgXCJwb3B1cC1idXR0b25cIixcbiAgICAgICAgICBcInRhc2stcG9wdXAtYnV0dG9uLWNhbmNlbFwiXG4gICAgICAgICk7XG4gICAgICAgIHBvcHVwQ2FuY2VsLnRleHRDb250ZW50ID0gXCJDYW5jZWxcIjtcbiAgICAgIH0pKCk7XG5cbiAgICAgIGNvbnN0IGxpc3RlbmVycyA9ICgoKSA9PiB7XG5cbiAgICAgICAgcG9wdXBDYW5jZWwuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCAoKSA9PiB7XG4gICAgICAgICAgc2hvd0hpZGUoYWRkVGFza0J1dHRvbiwgcG9wdXBDb250YWluZXIpO1xuICAgICAgICB9KTtcblxuICAgICAgICBwb3B1cEFkZC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsICgpID0+IHtcbiAgICAgICAgICAvL1BVU0ggVEFTSyBDT0RFXG4gICAgICAgICAgVGFza0RPTS50b0RPTShwb3B1cElucHV0LnZhbHVlKVxuICAgICAgICAgIHBvcHVwSW5wdXQudmFsdWUgPSAnJztcblxuICAgICAgICAgIHNob3dIaWRlKGFkZFRhc2tCdXR0b24sIHBvcHVwQ29udGFpbmVyKTtcblxuICAgICAgICB9KTtcbiAgICAgIH0pKCk7XG5cbiAgICAgIHBvcHVwQnV0dG9ucy5hcHBlbmQocG9wdXBBZGQsIHBvcHVwQ2FuY2VsKTtcbiAgICAgIHBvcHVwQ29udGFpbmVyLmFwcGVuZChwb3B1cElucHV0LCBwb3B1cEJ1dHRvbnMpO1xuXG4gICAgICByZXR1cm4gcG9wdXBDb250YWluZXI7XG4gICAgfTtcbiAgICB0aGlzLiNtZW51LmFwcGVuZChjcmVhdGVBZGRUYXNrKCksIGNyZWF0ZVRhc2tQb3B1cCgpKTtcbiAgfVxufVxuXG5jbGFzcyBDcmVhdGVBZGRQcm9qZWN0e1xuICBzdGF0aWMgI21lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1tZW51JylcblxuICBzdGF0aWMgYmxhbmsoKXtcbiAgICB0aGlzLiNtZW51LmlubmVySFRNTCA9ICcnXG4gIH1cbiAgXG4gIHN0YXRpYyBhZGRQcm9qZWN0RE9NKCl7XG4gICAgZnVuY3Rpb24gc2hvd0hpZGUoZWxlbWVudE9uZSwgZWxlbWVudFR3byl7XG4gICAgICBjb25zdCBmbiA9IChlbGVtZW50KT0+e1xuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJyk/XG4gICAgICAgIChlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpLCBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2RlYWN0aXZlJykpOlxuICAgICAgICAoZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdkZWFjdGl2ZScsIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJykpKTtcbiAgICAgIH1cbiAgICAgIGZuKGVsZW1lbnRPbmUpO1xuICAgICAgZm4oZWxlbWVudFR3byk7XG4gICAgfVxuICAgIC8vQUREIFBST0pFQ1QgQlVUVE9OXG4gICAgY29uc3QgYWRkUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgY29uc3QgY3JlYXRlQWRkUHJvamVjdCA9ICgpPT57XG4gICAgICBjb25zdCBhZGRQcm9qZWN0UGx1cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgY29uc3QgYWRkUHJvamVjdFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgY29uc3QgcHJvcGVydGllcyA9ICgoKT0+e1xuICAgICAgICBhZGRQcm9qZWN0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2FkZC1wcm9qZWN0LW1lbnUnLCAnYWN0aXZlJylcbiAgICAgICAgYWRkUHJvamVjdFBsdXMuaWQgPSAncGx1cyc7XG4gICAgICAgIGFkZFByb2plY3RUZXh0LmNsYXNzTmFtZSA9ICdhZGQtcHJvamVjdCc7XG4gICAgICAgIGFkZFByb2plY3RUZXh0LnRleHRDb250ZW50ID0gJ0FkZCBQcm9qZWN0JztcbiAgICAgIH0pKClcblxuICAgICAgY29uc3QgbGlzdGVuZXJzID0gKCgpPT57XG4gICAgICAgIGFkZFByb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgKCk9PntcbiAgICAgICAgICBzaG93SGlkZShhZGRQcm9qZWN0QnV0dG9uLCBwb3B1cENvbnRhaW5lcik7XG4gICAgICAgIH0pXG4gICAgICB9KSgpXG5cbiAgICAgIGFkZFByb2plY3RCdXR0b24uYXBwZW5kKGFkZFByb2plY3RQbHVzLCBhZGRQcm9qZWN0VGV4dClcbiAgICAgIHJldHVybiBhZGRQcm9qZWN0QnV0dG9uO1xuICAgIH1cbiAgICAvL0FERCBQUk9KRUNUIFBPUFVQXG4gICAgY29uc3QgcG9wdXBDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gICAgY29uc3QgY3JlYXRlUHJvamVjdFBvcHVwID0gKCk9PntcbiAgICAgIGNvbnN0IHBvcHVwSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgY29uc3QgcG9wdXBCdXR0b25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBjb25zdCBwb3B1cEFkZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgY29uc3QgcG9wdXBDYW5jZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblxuICAgICAgY29uc3QgcHJvcGVydGllcyA9ICgoKT0+e1xuICAgICAgICBwb3B1cENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdwb3B1cC1tZW51JywgJ2FkZC1wcm9qZWN0LXBvcHVwJywgJ2RlYWN0aXZlJyk7XG4gICAgICAgIHBvcHVwQ29udGFpbmVyLmlkID0gJ2FkZC1wcm9qZWN0LXBvcHVwJztcblxuICAgICAgICBwb3B1cElucHV0LmNsYXNzTmFtZSA9ICdwb3B1cC1tZW51LWlucHV0JztcbiAgICAgICAgcG9wdXBCdXR0b25zLmNsYXNzTmFtZSA9ICdwb3B1cC1idXR0b25zJztcblxuICAgICAgICBwb3B1cEFkZC5jbGFzc0xpc3QuYWRkKCdidXR0b24tYWRkJywgJ3BvcHVwLWJ1dHRvbicsICdwcm9qZWN0LXBvcHVwLWJ1dHRvbi1hZGQnKTtcbiAgICAgICAgcG9wdXBBZGQudGV4dENvbnRlbnQgPSAnQWRkJztcblxuICAgICAgICBwb3B1cENhbmNlbC5jbGFzc0xpc3QuYWRkKCdidXR0b24tY2FuY2VsJywgJ3BvcHVwLWJ1dHRvbicsICdwcm9qZWN0LXBvcHVwLWJ1dHRvbi1jYW5jZWwnKTtcbiAgICAgICAgcG9wdXBDYW5jZWwudGV4dENvbnRlbnQgPSAnQ2FuY2VsJztcbiAgICAgIH0pKClcbiAgICAgIFxuICAgICAgY29uc3QgbGlzdGVuZXJzID0gKCgpPT57XG4gICAgICAgIHBvcHVwQWRkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcbiAgICAgICAgICBsb2coJ0FERCBQUk9KRUNUIENMSUNLRUQnKVxuICAgICAgICAgIFByb2plY3RET00udG9ET00ocG9wdXBJbnB1dC52YWx1ZSk7XG4gICAgICAgICAgcG9wdXBJbnB1dC52YWx1ZSA9ICcnO1xuICAgICAgICAgIFxuICAgICAgICAgIHNob3dIaWRlKGFkZFByb2plY3RCdXR0b24sIHBvcHVwQ29udGFpbmVyKTtcbiAgICAgICAgfSlcblxuICAgICAgICBwb3B1cENhbmNlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57XG4gICAgICAgICAgc2hvd0hpZGUoYWRkUHJvamVjdEJ1dHRvbiwgcG9wdXBDb250YWluZXIpO1xuICAgICAgICB9KVxuICAgICAgfSkoKVxuXG4gICAgICBwb3B1cEJ1dHRvbnMuYXBwZW5kKHBvcHVwQWRkLCBwb3B1cENhbmNlbCk7XG4gICAgICBwb3B1cENvbnRhaW5lci5hcHBlbmQocG9wdXBJbnB1dCwgcG9wdXBCdXR0b25zKVxuICAgICAgXG4gICAgICByZXR1cm4gcG9wdXBDb250YWluZXI7XG4gICAgfVxuICAgIHRoaXMuI21lbnUuYXBwZW5kKGNyZWF0ZUFkZFByb2plY3QoKSwgY3JlYXRlUHJvamVjdFBvcHVwKCkpXG4gIH1cbn1cblxuY2xhc3MgVGFza0RPTSB7XG4gIHN0YXRpYyB0YXNrTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFzay1saXN0XCIpO1xuICBzdGF0aWMgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW4tdGl0bGVcIik7XG5cbiAgc3RhdGljIGN1cnJlbnRUaXRsZSgpe1xuICAgIHJldHVybiB0aGlzLnRpdGxlLnRleHRDb250ZW50O1xuICB9XG5cbiAgc3RhdGljIGN1cnJlbnRQcm9qZWN0KCkge1xuICAgIHJldHVybiB0b2RvQmFjay5nZXRQcm9qZWN0KHRoaXMudGl0bGUudGV4dENvbnRlbnQpO1xuICB9XG5cbiAgc3RhdGljIGNyZWF0ZVRhc2tFbGVtZW50KHRhc2spIHtcbiAgICBjb25zdCB0YXNrRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gICAgY29uc3QgY29tcGxldGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCB0aXRsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGNvbnN0IGRhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IGRhdGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBjb25zdCBjbG9zZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgICBjb25zdCBzaG93SGlkZSA9IChmaXJzdCwgc2Vjb25kKSA9PiB7XG4gICAgICBjb25zdCBmID0gKGVsKSA9PlxuICAgICAgICBlbC5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmVcIilcbiAgICAgICAgICA/IChlbC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpLCBlbC5jbGFzc0xpc3QuYWRkKFwiZGVhY3RpdmVcIikpXG4gICAgICAgICAgOiAoZWwuY2xhc3NMaXN0LnJlbW92ZShcImRlYWN0aXZlXCIpLCBlbC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpKTtcbiAgICAgIGYoZmlyc3QpO1xuICAgICAgZihzZWNvbmQpO1xuICAgIH07XG5cbiAgICBjb25zdCBpc0NvbXBsZXRlZCA9ICgpPT57XG4gICAgICBpZiAodGFzay5nZXRDb21wbGV0ZSgpKXsgXG4gICAgICAgIC8vdGFza0VsLmNsYXNzTGlzdC5hZGQoJ2dyZWVuJyk7XG4gICAgICAgIHRpdGxlLnN0eWxlLnRleHREZWNvcmF0aW9uID0gJ2xpbmUtdGhyb3VnaCc7XG4gICAgICAgIGRhdGUuc3R5bGUudGV4dERlY29yYXRpb24gPSAnbGluZS10aHJvdWdoJztcbiAgICAgICAgY29tcGxldGUuaWQgPSAnby1jbGlja2VkJztcbiAgICAgICAgXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgcHJvcGVydGllcyA9ICgoKSA9PiB7XG4gICAgICB0YXNrRWwuY2xhc3NOYW1lID0gXCJ0YXNrXCI7XG4gICAgICBjb21wbGV0ZS5pZCA9IFwib1wiO1xuXG4gICAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKFwidGFzay1uYW1lXCIsIFwiYWN0aXZlXCIpO1xuICAgICAgdGl0bGVJbnB1dC5jbGFzc0xpc3QuYWRkKFwidGFzay1uYW1lLWlucHV0XCIsIFwiZGVhY3RpdmVcIik7XG5cbiAgICAgIGRhdGUuY2xhc3NMaXN0LmFkZChcInRhc2stZGF0ZVwiLCBcImFjdGl2ZVwiKTtcbiAgICAgIGRhdGVJbnB1dC5jbGFzc0xpc3QuYWRkKFwidGFzay1kYXRlLWlucHV0XCIsIFwiZGVhY3RpdmVcIik7XG4gICAgICBkYXRlSW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImRhdGVcIik7XG5cbiAgICAgIGNsb3NlLmNsYXNzTmFtZSA9IFwiY2xvc2VcIjtcbiAgICAgIGNsb3NlLmlkID0gXCJ4XCI7XG4gICAgfSkoKTtcblxuICAgIGNvbnN0IGxpc3RlbmVycyA9ICgoKSA9PiB7XG4gICAgICBjb21wbGV0ZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgY29uc3QgcGFyZW50ID0gZS50YXJnZXQucGFyZW50Tm9kZTtcbiAgICAgICAgdGhpcy5zZXRDb21wbGV0ZShwYXJlbnQpO1xuICAgICAgfSk7XG5cbiAgICAgIHRpdGxlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICBjb25zdCB0aXRsZSA9IGUudGFyZ2V0O1xuICAgICAgICBjb25zdCBpbnB1dCA9IHRpdGxlLm5leHRTaWJsaW5nO1xuICAgICAgICAvL2lucHV0LnZhbHVlID0gdGl0bGUudGV4dENvbnRlbnQ7XG4gICAgICAgIC8vQ09ERVxuICAgICAgICBzaG93SGlkZSh0aXRsZSwgaW5wdXQpO1xuICAgICAgfSk7XG5cbiAgICAgIHRpdGxlSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgKGUpID0+IHtcbiAgICAgICAgY29uc3QgaW5wdXQgPSBlLnRhcmdldDtcbiAgICAgICAgY29uc3QgdGl0bGUgPSBpbnB1dC5wcmV2aW91c1NpYmxpbmc7XG5cbiAgICAgICAgaWYgKGUua2V5ID09PSBcIkVzY2FwZVwiKSB7XG4gICAgICAgICAgc2hvd0hpZGUodGl0bGUsIGlucHV0KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZS5rZXkgPT09IFwiRW50ZXJcIikge1xuICAgICAgICAgIHRpdGxlLnRleHRDb250ZW50ID0gdGhpcy5jaGFuZ2VUaXRsZShpbnB1dCk7XG4gICAgICAgICAgLy9TdG9yYWdlXG4gICAgICAgICAgU3RvcmFnZS5zYXZlVG9kb0JhY2sodG9kb0JhY2spXG4gICAgICAgICAgc2hvd0hpZGUodGl0bGUsIGlucHV0KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGRhdGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgIGNvbnN0IGRhdGUgPSBlLnRhcmdldDtcbiAgICAgICAgY29uc3QgaW5wdXQgPSBkYXRlLm5leHRTaWJsaW5nO1xuICAgICAgICBzaG93SGlkZShkYXRlLCBpbnB1dCk7XG4gICAgICB9KTtcblxuICAgICAgZGF0ZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKGUpID0+IHtcbiAgICAgICAgY29uc3QgaW5wdXQgPSBlLnRhcmdldDtcbiAgICAgICAgY29uc3QgZGF0ZSA9IGlucHV0LnByZXZpb3VzU2libGluZztcbiAgICAgICAgZGF0ZS50ZXh0Q29udGVudCA9IHRoaXMuY2hhbmdlRGF0ZShpbnB1dClcbiAgICAgICAgLy9TdG9yYWdlXG4gICAgICAgIFN0b3JhZ2Uuc2F2ZVRvZG9CYWNrKHRvZG9CYWNrKVxuXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRUaXRsZSgpID09PSBcIlRvZGF5XCIpIHtcbiAgICAgICAgICB0aGlzLnRvZGF5RE9NKCk7XG4gICAgICAgICAgdGhpcy51cGRhdGVET00oKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5jdXJyZW50VGl0bGUoKSA9PT0gXCJUaGlzIHdlZWtcIikge1xuICAgICAgICAgIHRoaXMudGhpc1dlZWtET00oKTtcbiAgICAgICAgICB0aGlzLnVwZGF0ZURPTSgpO1xuICAgICAgICB9XG4gICAgICAgIHNob3dIaWRlKGRhdGUsIGlucHV0KTtcbiAgICAgIH0pO1xuXG4gICAgICBjbG9zZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgY29uc3QgcGFyZW50ID0gZS50YXJnZXQucGFyZW50Tm9kZTtcbiAgICAgICAgdGhpcy5yZW1vdmVGcm9tRE9NKHBhcmVudCk7XG4gICAgICB9KTtcbiAgICB9KSgpO1xuXG4gICAgdGFza0VsLmRhdGFzZXQudWlkID0gdGFzay51aWQ7XG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSB0YXNrLnRpdGxlO1xuICAgIGlmKHRoaXMuY3VycmVudFRpdGxlKCk9PT0nVG9kYXknfHwgdGhpcy5jdXJyZW50VGl0bGUoKT09PSdUaGlzIHdlZWsnKXtcbiAgICAgIHRpdGxlLnRleHRDb250ZW50ID0gdGFzay5yZXR1cm5DdXN0b21UaXRsZSgpO1xuICAgIH1cbiAgICB0aXRsZUlucHV0LnZhbHVlID0gdGFzay5nZXRUaXRsZSgpO1xuICAgIGRhdGUudGV4dENvbnRlbnQgPSB0YXNrLmdldER1ZURhdGUoKTtcblxuICAgIHRhc2tFbC5hcHBlbmQoY29tcGxldGUsIHRpdGxlLCB0aXRsZUlucHV0LCBkYXRlLCBkYXRlSW5wdXQsIGNsb3NlKTtcbiAgICBpc0NvbXBsZXRlZCgpO1xuICAgIHRoaXMudGFza0xpc3QuYXBwZW5kKHRhc2tFbCk7XG4gIH1cblxuICBzdGF0aWMgYmxhbmtQYWdlKCl7XG4gICAgdGhpcy50YXNrTGlzdC5pbm5lckhUTUwgPSAnJztcbiAgfVxuXG4gIHN0YXRpYyB0b0RPTSh2YWx1ZSkge1xuICAgIGNvbnN0IHByb2plY3QgPSB0aGlzLmN1cnJlbnRQcm9qZWN0KCk7XG4gICAgaWYgKHZhbHVlID09PSBcIlwiKSB7XG4gICAgICBhbGVydChcIkNhbnQgYWRkIGVtcHR5IHZhbHVlXCIpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAocHJvamVjdC5jb250YWlucyh2YWx1ZSkpIHtcbiAgICAgIGFsZXJ0KFwiVGFzayBhbHJlYWR5IGV4aXN0c1wiKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgcHJvamVjdC5hZGRUYXNrKG5ldyBUb2RvKHZhbHVlLCB0aGlzLnRpdGxlLnRleHRDb250ZW50KSk7XG4gICAgLy9TdG9yYWdlXG4gICAgdGhpcy51cGRhdGVET00oKVxuICAgIFN0b3JhZ2Uuc2F2ZVRvZG9CYWNrKHRvZG9CYWNrKTtcblxuICAgIGxvZyhwcm9qZWN0KTtcbiAgfVxuXG4gIHN0YXRpYyB1cGRhdGVET00oKXtcbiAgICBjb25zdCBwcm9qZWN0ID0gdGhpcy5jdXJyZW50UHJvamVjdCgpO1xuICAgIHRoaXMuYmxhbmtQYWdlKCk7XG4gICAgcHJvamVjdC50YXNrcy5mb3JFYWNoKHRhc2sgPT4gdGhpcy5jcmVhdGVUYXNrRWxlbWVudCh0YXNrKSk7XG4gIH1cblxuICBzdGF0aWMgdG9kYXlET00oKXtcbiAgICBjb25zdCBwcm9qZWN0cyA9IHRvZG9CYWNrLmdldFByb2plY3RzKCk7XG4gICAgY29uc3QgdG9kYXkgPSB0b2RvQmFjay5nZXRQcm9qZWN0KCdUb2RheScpO1xuICAgIGxldCB0ZW1wID0gW107XG4gICAgcHJvamVjdHMuZm9yRWFjaChwcm9qZWN0ID0+IHtcbiAgICAgIGlmKHByb2plY3QuZ2V0TmFtZSgpPT09J1RvZGF5J3x8IHByb2plY3QuZ2V0TmFtZSgpPT09J1RoaXMgd2VlaycpIHJldHVybjtcbiAgICAgIHRlbXAucHVzaChwcm9qZWN0LnRvZGF5VGFza3MoKSlcbiAgICB9KVxuICAgIHRlbXAgPSB0ZW1wLmZsYXQoKTtcbiAgICB0b2RheS5zZXRUYXNrcyh0ZW1wKTtcbiAgICB0b2RvQmFjay5nZXRQcm9qZWN0cygpLmZvckVhY2gocHJvamVjdCA9PiBwcm9qZWN0LnNvcnRCeUNvbXBsZXRlZCgpKVxuICB9XG5cbiAgc3RhdGljIHRoaXNXZWVrRE9NKCl7XG4gICAgY29uc3QgcHJvamVjdHMgPSB0b2RvQmFjay5nZXRQcm9qZWN0cygpO1xuICAgIGNvbnN0IHRoaXNXZWVrID0gdG9kb0JhY2suZ2V0UHJvamVjdCgnVGhpcyB3ZWVrJylcbiAgICBsZXQgdGVtcCA9IFtdO1xuICAgIHByb2plY3RzLmZvckVhY2gocHJvamVjdCA9PiB7XG4gICAgICBpZihwcm9qZWN0LmdldE5hbWUoKT09PSdUb2RheSd8fCBwcm9qZWN0LmdldE5hbWUoKT09PSdUaGlzIHdlZWsnKSByZXR1cm47XG4gICAgICB0ZW1wLnB1c2gocHJvamVjdC50aGlzV2Vla1Rhc2tzKCkpXG4gICAgfSlcbiAgICB0ZW1wID0gdGVtcC5mbGF0KCk7XG4gICAgdGhpc1dlZWsuc2V0VGFza3ModGVtcCk7XG4gICAgdG9kb0JhY2suZ2V0UHJvamVjdHMoKS5mb3JFYWNoKHByb2plY3QgPT4gcHJvamVjdC5zb3J0QnlDb21wbGV0ZWQoKSlcbiAgICBsb2codGVtcClcbiAgfVxuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIEJVVFRPTlNcbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBzdGF0aWMgc2V0Q29tcGxldGUoZWxlbWVudCkge1xuICAgIGNvbnN0IHVpZCA9IGVsZW1lbnQuZGF0YXNldC51aWQ7XG4gICAgY29uc3QgcHJvamVjdCA9IHRoaXMuY3VycmVudFByb2plY3QoKTtcbiAgICBjb25zdCB0YXNrID0gcHJvamVjdC5nZXRUYXNrQnlVSUQodWlkKTtcbiAgICB0YXNrLnNldENvbXBsZXRlZCgpO1xuICAgIC8vcHJvamVjdC5hZGRDb21wbGV0ZWQodGFzayk7XG4gICAgLy9lbGVtZW50LnJlbW92ZSgpO1xuICAgIHRvZG9CYWNrLmdldFByb2plY3RzKCkuZm9yRWFjaChwcm9qZWN0ID0+IHByb2plY3Quc29ydEJ5Q29tcGxldGVkKCkpXG4gICAgLy9TdG9yYWdlXG4gICAgU3RvcmFnZS5zYXZlVG9kb0JhY2sodG9kb0JhY2spO1xuXG4gICAgdGhpcy51cGRhdGVET00oKTtcbiAgICBsb2codGFzayk7XG4gIH1cblxuICBzdGF0aWMgY2hhbmdlVGl0bGUoZWxlbWVudCkge1xuICAgIGNvbnN0IHByb2plY3QgPSB0aGlzLmN1cnJlbnRQcm9qZWN0KCk7XG4gICAgY29uc3QgdWlkID0gZWxlbWVudC5wYXJlbnROb2RlLmRhdGFzZXQudWlkO1xuICAgIGNvbnN0IHRhc2sgPSBwcm9qZWN0LmdldFRhc2tCeVVJRCh1aWQpO1xuICAgIGlmIChlbGVtZW50LnZhbHVlID09PSBcIlwiKSB7XG4gICAgICBhbGVydChcIklucHV0IGZpZWxkIGlzIGVtcHR5XCIpO1xuICAgICAgcmV0dXJuIHRhc2sudGl0bGU7XG4gICAgfVxuICAgIGlmIChwcm9qZWN0LmNvbnRhaW5zKGVsZW1lbnQudmFsdWUpKSB7XG4gICAgICBhbGVydChcIlRoaXMgdGFzayBhbHJlYWR5IGV4aXN0c1wiKTtcbiAgICAgIHJldHVybiB0YXNrLnRpdGxlO1xuICAgIH1cbiAgICB0YXNrLnNldFRpdGxlKGVsZW1lbnQudmFsdWUpO1xuXG4gICAgbG9nKHByb2plY3QpO1xuICAgIGlmKHRoaXMuY3VycmVudFRpdGxlKCk9PT0nVG9kYXknfHwgdGhpcy5jdXJyZW50VGl0bGUoKT09PSdUaGlzIHdlZWsnKXtcbiAgICAgIHJldHVybiB0YXNrLnJldHVybkN1c3RvbVRpdGxlKCk7XG4gICAgfWVsc2V7XG4gICAgcmV0dXJuIHRhc2suZ2V0VGl0bGUoKX1cbiAgfVxuXG4gIHN0YXRpYyBjaGFuZ2VEYXRlKGVsZW1lbnQpIHtcbiAgICBjb25zdCBwcm9qZWN0ID0gdGhpcy5jdXJyZW50UHJvamVjdCgpO1xuICAgIGNvbnN0IHVpZCA9IGVsZW1lbnQucGFyZW50Tm9kZS5kYXRhc2V0LnVpZDtcbiAgICBjb25zdCB0YXNrID0gcHJvamVjdC5nZXRUYXNrQnlVSUQodWlkKVxuICAgIHRhc2suc2V0RHVlRGF0ZShlbGVtZW50LnZhbHVlKTtcblxuICAgIGxvZyh0YXNrKVxuICAgIHJldHVybiB0YXNrLmdldER1ZURhdGUoKVxuICB9XG5cbiAgc3RhdGljIHJlbW92ZUZyb21ET00oZWxlbWVudCkge1xuICAgIGNvbnN0IHVpZCA9IGVsZW1lbnQuZGF0YXNldC51aWQ7XG4gICAgY29uc3QgcHJvamVjdCA9IHRoaXMuY3VycmVudFByb2plY3QoKTtcbiAgICBjb25zdCB0YXNrID0gcHJvamVjdC5nZXRUYXNrQnlVSUQodWlkKTtcblxuICAgIGlmKHRoaXMuY3VycmVudFRpdGxlKCkgPT09ICdUb2RheSd8fCB0aGlzLmN1cnJlbnRUaXRsZSgpID09PSAnVGhpcyB3ZWVrJyl7XG4gICAgICBjb25zdCBwcm9qZWN0ID0gdG9kb0JhY2suZ2V0UHJvamVjdCh0YXNrLmdldFNvdXJjZSgpKTtcbiAgICAgIHByb2plY3QucmVtb3ZlVGFzayh1aWQpO1xuICAgICAgZWxlbWVudC5yZW1vdmUoKVxuICAgIH1cblxuICAgIHByb2plY3QucmVtb3ZlVGFzayh1aWQpO1xuICAgIGVsZW1lbnQucmVtb3ZlKCk7XG4gICAgLy9TdG9yYWdlXG4gICAgU3RvcmFnZS5zYXZlVG9kb0JhY2sodG9kb0JhY2spXG4gIH1cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxufVxuXG5jbGFzcyBQcm9qZWN0RE9NIHtcbiAgc3RhdGljIHByb2plY3RzTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdHMtbGlzdFwiKTtcbiAgc3RhdGljIG1haW5UaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpbi10aXRsZVwiKTtcblxuICBzdGF0aWMgY3VycmVudFRpdGxlKCl7XG4gICAgcmV0dXJuIHRoaXMubWFpblRpdGxlLnRleHRDb250ZW50O1xuICB9XG5cbiAgc3RhdGljIHNldFRpdGxlKHRpdGxlKXtcbiAgICB0aGlzLm1haW5UaXRsZS50ZXh0Q29udGVudCA9IHRpdGxlO1xuICB9XG5cbiAgc3RhdGljIHByb2plY3RUYXNrc0hhbmRsZXIgPSAocHJvamVjdCkgPT4ge1xuICAgIHRoaXMuc2V0VGl0bGUocHJvamVjdC5nZXROYW1lKCkpO1xuXG4gICAgQ3JlYXRlQWRkVGFzay5ibGFuaygpO1xuICAgIENyZWF0ZUFkZFByb2plY3QuYmxhbmsoKTtcbiAgICBDcmVhdGVBZGRUYXNrLmFkZFRhc2tET00oKTtcbiAgICBDcmVhdGVBZGRQcm9qZWN0LmFkZFByb2plY3RET00oKTtcblxuICAgIGlmICh0aGlzLm1haW5UaXRsZS50ZXh0Q29udGVudCA9PT0gXCJUb2RheVwiKSB7XG4gICAgICBDcmVhdGVBZGRUYXNrLmJsYW5rKCk7XG4gICAgICBUYXNrRE9NLnRvZGF5RE9NKCk7XG4gICAgfVxuICAgIGlmICh0aGlzLm1haW5UaXRsZS50ZXh0Q29udGVudCA9PT0gXCJUaGlzIHdlZWtcIikge1xuICAgICAgQ3JlYXRlQWRkVGFzay5ibGFuaygpO1xuICAgICAgVGFza0RPTS50aGlzV2Vla0RPTSgpO1xuICAgIH1cbiAgICBUYXNrRE9NLnVwZGF0ZURPTSgpO1xuICB9XG5cbiAgc3RhdGljIGNyZWF0ZVN0YXRpY1Byb2plY3QocHJvamVjdCwgRE9NZWxlbWVudCkge1xuICAgIERPTWVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHRoaXMucHJvamVjdFRhc2tzSGFuZGxlcihwcm9qZWN0KSk7XG4gIH1cblxuICBzdGF0aWMgY3JlYXRlUHJvamVjdEVsZW1lbnQocHJvamVjdCkge1xuICAgIGNvbnN0IHByb2plY3RFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgY29uc3QgcHJvamVjdEltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgY29uc3QgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IHByb2plY3RYID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICAgIGNvbnN0IGFkZFByb3BlcnRpZXMgPSAoKCkgPT4ge1xuICAgICAgcHJvamVjdEVsLmNsYXNzTmFtZSA9IFwicHJvamVjdFwiO1xuICAgICAgcHJvamVjdEltZy5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgXCIuL2ltZy9saXN0LWJveC1vdXRsaW5lLnN2Z1wiKTtcbiAgICAgIHByb2plY3ROYW1lLmNsYXNzTmFtZSA9IFwicHJvamVjdC1uYW1lXCI7XG4gICAgICBwcm9qZWN0WC5pZCA9IFwieFwiO1xuICAgIH0pKCk7XG5cbiAgICBjb25zdCBhZGRMaXN0ZW5lciA9ICgoKSA9PiB7XG4gICAgICBwcm9qZWN0WC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgY29uc3QgcGFyZW50ID0gZS50YXJnZXQucGFyZW50Tm9kZTtcbiAgICAgICAgdGhpcy5yZW1vdmVGcm9tRE9NKHBhcmVudCk7XG4gICAgICB9KTtcbiAgICAgIHByb2plY3RFbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgbGV0IHBhcmVudCA9IGUudGFyZ2V0LnBhcmVudE5vZGU7XG4gICAgICAgIGlmKGUudGFyZ2V0LmlkID09PSAneCcpIHJldHVyblxuICAgICAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdwcm9qZWN0JykpIHBhcmVudCA9IGUudGFyZ2V0OyBcbiAgICAgICAgY29uc3QgdWlkID0gcGFyZW50LmRhdGFzZXQudWlkO1xuICAgICAgICBjb25zdCBwcm9qZWN0ID0gdG9kb0JhY2suZ2V0UHJvamVjdEJ5VUlEKHVpZClcbiAgICAgICAgdGhpcy5wcm9qZWN0VGFza3NIYW5kbGVyKHByb2plY3QpO1xuICAgICAgfSk7XG4gICAgfSkoKTtcblxuICAgIGNvbnN0IGNvbnN0cnVjdFByb2plY3QgPSAoKCkgPT4ge1xuICAgICAgcHJvamVjdEVsLmFwcGVuZChwcm9qZWN0SW1nLCBwcm9qZWN0TmFtZSwgcHJvamVjdFgpO1xuICAgIH0pKCk7XG5cbiAgICBwcm9qZWN0TmFtZS50ZXh0Q29udGVudCA9IHByb2plY3QuZ2V0TmFtZSgpO1xuICAgIHByb2plY3RFbC5kYXRhc2V0LnVpZCA9IHByb2plY3QuZ2V0VUlEKCk7XG5cbiAgICB0aGlzLnByb2plY3RzTGlzdC5hcHBlbmQocHJvamVjdEVsKTtcbiAgICBcbiAgfVxuXG4gIHN0YXRpYyByZXNldFRhc2tzKCl7XG4gICAgQ3JlYXRlQWRkVGFzay5ibGFuaygpO1xuICAgIFRhc2tET00uYmxhbmtQYWdlKClcbiAgICB0aGlzLm1haW5UaXRsZS50ZXh0Q29udGVudCA9ICcnO1xuICB9XG5cbiAgc3RhdGljIGJsYW5rUGFnZSgpIHtcbiAgICB0aGlzLnByb2plY3RzTGlzdC5pbm5lckhUTUwgPSBcIlwiO1xuICB9XG5cbiAgc3RhdGljIHRvRE9NKHZhbHVlKSB7XG4gICAgaWYgKHZhbHVlID09PSBcIlwiKSB7XG4gICAgICBhbGVydChcIlByb2plY3QgbmFtZSBjYW50IGJlIGVtcHR5XCIpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodG9kb0JhY2suY29udGFpbnModmFsdWUpKSB7XG4gICAgICBhbGVydChcIlByb2plY3QgYWxyZWFkeSBleGlzdHNcIik7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdG9kb0JhY2suYWRkUHJvamVjdChuZXcgUHJvamVjdCh2YWx1ZSkpO1xuICAgIHRoaXMudXBkYXRlRE9NKCk7XG4gICAgLy9TdG9yYWdlXG4gICAgU3RvcmFnZS5zYXZlVG9kb0JhY2sodG9kb0JhY2spO1xuXG4gICAgbG9nKHRvZG9CYWNrKTtcbiAgfVxuXG4gIHN0YXRpYyB1cGRhdGVET00oKSB7XG4gICAgdGhpcy5ibGFua1BhZ2UoKTtcbiAgICB0b2RvQmFja1xuICAgICAgLmdldFByb2plY3RzKClcbiAgICAgIC5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgICAgIGlmKHByb2plY3QuZ2V0TmFtZSgpPT09J0luYm94J3x8IHByb2plY3QuZ2V0TmFtZSgpPT09J1RvZGF5J3x8IHByb2plY3QuZ2V0TmFtZSgpPT09J1RoaXMgd2VlaycpIHJldHVybjtcbiAgICAgICAgdGhpcy5jcmVhdGVQcm9qZWN0RWxlbWVudChwcm9qZWN0KX0pO1xuICB9XG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIEJVVFRPTlxuICBzdGF0aWMgcmVtb3ZlRnJvbURPTShlbGVtZW50KSB7XG4gICAgY29uc3QgdWlkID0gZWxlbWVudC5kYXRhc2V0LnVpZDtcbiAgICBjb25zdCBwcm9qZWN0ID0gdG9kb0JhY2suZ2V0UHJvamVjdEJ5VUlEKHVpZCk7XG4gICAgY29uc3QgcGFnZVRpdGxlID0gdGhpcy5jdXJyZW50VGl0bGUoKTtcblxuICAgIGlmIChwcm9qZWN0LmdldE5hbWUoKSA9PT0gcGFnZVRpdGxlKSB7XG4gICAgICB0aGlzLnJlc2V0VGFza3MoKTtcbiAgICB9XG4gICAgdG9kb0JhY2suZGVsZXRlUHJvamVjdCh1aWQpO1xuICAgIGVsZW1lbnQucmVtb3ZlKCk7XG5cbiAgICBpZiAocGFnZVRpdGxlID09PSBcIlRvZGF5XCIpIHtcbiAgICAgIHRoaXMucHJvamVjdFRhc2tzSGFuZGxlcih0b2RvQmFjay5nZXRQcm9qZWN0KHBhZ2VUaXRsZSkpXG4gICAgfVxuICAgIGlmIChwYWdlVGl0bGUgPT09IFwiVGhpcyB3ZWVrXCIpIHtcbiAgICAgIHRoaXMucHJvamVjdFRhc2tzSGFuZGxlcih0b2RvQmFjay5nZXRQcm9qZWN0KHBhZ2VUaXRsZSkpO1xuICAgIH1cbiAgICAvL1N0b3JhZ2VcbiAgICBTdG9yYWdlLnNhdmVUb2RvQmFjayh0b2RvQmFjaylcbiAgICBsb2codG9kb0JhY2spXG4gIH1cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbn1cblxuZXhwb3J0IHtQcm9qZWN0RE9NLCB0b2RvQmFja307XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=