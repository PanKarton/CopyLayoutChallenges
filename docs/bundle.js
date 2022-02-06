/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./index.html":
/*!********************!*\
  !*** ./index.html ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/html-loader/dist/runtime/getUrl.js */ "./node_modules/html-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./src/img/favicon-32x32.png */ "./src/img/favicon-32x32.png"), __webpack_require__.b);
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);
var code = "<!DOCTYPE html>\n<html lang=\"en\">\n\n<head>\n    <meta charset=\"UTF-8\" />\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n    <!-- displays site properly based on user's device -->\n\n    <link rel=\"icon\" type=\"image/png\" sizes=\"32x32\" href=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" />\n\n    <title>Frontend Mentor | Launch countdown timer</title>\n    <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css\" integrity=\"sha512-Fo3rlrZj/k7ujTnHg4CGR2D7kSs0v4LLanw2qksYuRlEzO+tcaEPQogQ0KaoGN26/zrn20ImR1DfuLWnOo7aBA==\" crossorigin=\"anonymous\" referrerpolicy=\"no-referrer\"\n    />\n</head>\n\n<body>\n    <section class=\"countdown\">\n        <h1 class=\"countdown__title\">Zara odpalamy petarde!!!</h1>\n        <div class=\"timer l-flex\">\n            <div class=\"timer__tile-container\">\n                <div class=\"timer__tile\">\n                    <div data-days class=\"timer__tile-number\" data-number-before data-number-after>\n                        <span class=\"timer__flip-front\"></span>\n                        <span class=\"timer__flip-back flipped\"></span>\n                    </div>\n                </div>\n                <h2 class=\"timer__time-unit\">Days</h2>\n            </div>\n            <div class=\"timer__tile-container\"> \n                <div class=\"timer__tile\">\n                    <div data-hours class=\"timer__tile-number\" data-number-before data-number-after>\n                        <span class=\"timer__flip-front\"></span>\n                        <span class=\"timer__flip-back flipped\"></span>\n                    </div>\n                </div>\n                <h2 class=\"timer__time-unit\">Hours</h2>\n            </div>\n            <div class=\"timer__tile-container\">\n                <div class=\"timer__tile\">\n                    <div data-minutes class=\"timer__tile-number\" data-number-before data-number-after>\n                        <span class=\"timer__flip-front\"></span>\n                        <span class=\"timer__flip-back flipped\"></span>\n                    </div>\n                </div>\n                <h2 class=\"timer__time-unit\">Minutes</h2>\n            </div>\n            <div class=\"timer__tile-container\">\n                <div class=\"timer__tile\">\n                    <div data-seconds class=\"timer__tile-number\" data-number-before data-number-after>\n                        <span class=\"timer__flip-front\"></span>\n                        <span class=\"timer__flip-back flipped\"></span>\n                    </div>\n                </div>\n                <h2 class=\"timer__time-unit\">Seconds</h2>\n            </div>\n        </div>\n        <div class=\"countdown__socialmedia-container l-flex\">\n            <div class=\"countdown__socialmedia-icon\">\n                <i class=\"fab fa-facebook-square\"></i>\n            </div>\n            <div class=\"countdown__socialmedia-icon\">\n                <i class=\"fab fa-pinterest-square\"></i>\n            </div>\n            <div class=\"countdown__socialmedia-icon\">\n                <i class=\"fab fa-instagram-square\"></i>\n            </div>\n        </div>\n    </section>\n</body>\n\n</html>";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./node_modules/html-loader/dist/runtime/getUrl.js":
/*!*********************************************************!*\
  !*** ./node_modules/html-loader/dist/runtime/getUrl.js ***!
  \*********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  }

  if (!url) {
    return url;
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = String(url.__esModule ? url.default : url);

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  }

  if (options.maybeNeedQuotes && /[\t\n\f\r "'=<>`]/.test(url)) {
    return "\"".concat(url, "\"");
  }

  return url;
};

/***/ }),

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/js/countdown.js":
/*!*****************************!*\
  !*** ./src/js/countdown.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Countdown {
  constructor(daysContainer, hoursContainer, minutesContainer, secondsContainer, finalDate) {
    // Container
    this.daysContainer = daysContainer;
    this.hoursContainer = hoursContainer;
    this.minutesContainer = minutesContainer;
    this.secondsContainer = secondsContainer;
    // Final date
    this.finalDate = finalDate;
    // First update flag
    this.flag = false;
    // Prev values
    this.prevSec = ``;
    this.prevMin = ``;
    this.prevHour = ``;
    this.prevDay = ``;
  }

  runClock = () => {
    // Get current date and compute time gap
    const currentDate = new Date().getTime();
    const timeGap = this.finalDate - currentDate;
    // Stop when timer shows 0:0:0:0
    if (timeGap >= 0) {
      // Set time units
      const now = {
        sec: Math.floor((timeGap / 1000) % 60),
        min: Math.floor((timeGap / (1000 * 60)) % 60),
        hour: Math.floor((timeGap / (1000 * 60 * 60)) % 24),
        day: Math.floor(timeGap / (1000 * 60 * 60 * 24)),
      };

      this.checkIfFlipNeeden(now);
      this.updatePrevValues(now);

      // Recurency, invoke yourself after 1sec
      setTimeout(() => {
        this.runClock();
      }, 1000);
    }
  };

  // If unit is not the same as before, flip it
  checkIfFlipNeeden = ({ sec, min, hour, day }) => {
    if (this.prevDay !== day) this.flip(this.daysContainer, day);
    if (this.prevHour !== hour) this.flip(this.hoursContainer, hour);
    if (this.prevMin !== min) this.flip(this.minutesContainer, min);
    if (this.prevSec !== sec) this.flip(this.secondsContainer, sec);
  };

  // We need prev values to check if unit has changed
  updatePrevValues = ({ sec, min, hour, day }) => {
    this.prevSec = sec;
    this.prevMin = min;
    this.prevHour = hour;
    this.prevDay = day;
  };

  // Freez function for X ms because we want to remove flip cards after they flip
  sleep = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  flip = (card, currNumber) => {
    // console.log(currNumber)
    const nextNumber = this.getNextNumber(card, currNumber);
    // console.log(nextNumber)
    card.querySelector(`span.timer__flip-front`).classList.add(`flipped`); // Front do pionu
    card.querySelector(`span.timer__flip-back`).classList.remove(`flipped`); // Back na dół
    this.sleep(300).then(() => {
      this.removeFlippedCards(card); // Skasuj karty
      card.setAttribute(`data-number-before`, nextNumber); // Before
      card.setAttribute(`data-number-after`, currNumber); // After
      this.createNewFlipCards(card, currNumber, nextNumber); // Zrób karty
    });
  };

  getNextNumber = (card, currNumber) => {
    if (`days` in card.dataset) {
      // Update day
      --currNumber < 0 ? (currNumber = 0) : ``;
    } else if (`hours` in card.dataset) {
      // Update hour
      --currNumber < 0 ? (currNumber = 23) : ``;
    } else if (`minutes` in card.dataset || `seconds` in card.dataset) {
      // Update min / sec
      --currNumber < 0 ? (currNumber = 59) : ``;
    }
    return currNumber;
  };

  removeFlippedCards = (card) => {
    // Remove flipped cards
    card.querySelector(`span.timer__flip-front`).remove();
    card.querySelector(`span.timer__flip-back`).remove();
  };

  createNewFlipCards = (card, currNumber, nextNumber) => {
    // Create front card
    const newFront = document.createElement(`span`);
    newFront.classList.add(`timer__flip-front`);
    newFront.textContent = currNumber;
    // Create back card
    const newBack = document.createElement(`span`);
    newBack.classList.add(`timer__flip-back`, `flipped`);
    newBack.textContent = nextNumber;
    // Append Cards
    card.append(newFront, newBack);
  };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Countdown);


/***/ }),

/***/ "./src/img/favicon-32x32.png":
/*!***********************************!*\
  !*** ./src/img/favicon-32x32.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "736eae1ff09acfe04c50.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/style.scss */ "./src/scss/style.scss");
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../index.html */ "./index.html");
/* harmony import */ var _js_countdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/countdown */ "./src/js/countdown.js");



// js modules


// =====================================================================
// =====================    COUNTDOWN     ==============================
// =====================================================================

// containers
const daysContainer = document.querySelector(`[data-days]`);
const hoursContainer = document.querySelector(`[data-hours]`);
const minutesContainer = document.querySelector(`[data-minutes]`);
const secondsContainer = document.querySelector(`[data-seconds]`);

// getTime turns date into miliseconds since 1 january 1970 00:00:00
const finalDate = new Date(`April 17, 2022 00:00:00`).getTime();

const countdown = new _js_countdown__WEBPACK_IMPORTED_MODULE_2__["default"](daysContainer, hoursContainer, minutesContainer, secondsContainer, finalDate);

// Just run damn clock
countdown.runClock();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUN5RztBQUN6Ryx5Q0FBeUMsK0hBQThDO0FBQ3ZGO0FBQ0Esc0NBQXNDLHVGQUF3QztBQUM5RTtBQUNBO0FBQ0EsaUVBQWUsSUFBSTs7Ozs7Ozs7OztBQ1BOOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7OztBQUdKOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7OztBQ3pCQTs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixxQkFBcUI7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IscUJBQXFCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJFQUEyRTtBQUMzRSw2RUFBNkU7QUFDN0U7QUFDQSxxQ0FBcUM7QUFDckMsMkRBQTJEO0FBQzNELDBEQUEwRDtBQUMxRCw2REFBNkQ7QUFDN0QsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxTQUFTLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDL0d6QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7Ozs7Ozs7Ozs7QUNyQjJCO0FBQ0o7QUFDdkI7QUFDQTtBQUN1QztBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLHFEQUFTO0FBQy9CO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2xheW91dGNoYWxsZW5nZXMvLi9pbmRleC5odG1sIiwid2VicGFjazovL2xheW91dGNoYWxsZW5nZXMvLi9ub2RlX21vZHVsZXMvaHRtbC1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9sYXlvdXRjaGFsbGVuZ2VzLy4vc3JjL3Njc3Mvc3R5bGUuc2Nzcz85OGFmIiwid2VicGFjazovL2xheW91dGNoYWxsZW5nZXMvLi9zcmMvanMvY291bnRkb3duLmpzIiwid2VicGFjazovL2xheW91dGNoYWxsZW5nZXMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbGF5b3V0Y2hhbGxlbmdlcy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9sYXlvdXRjaGFsbGVuZ2VzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9sYXlvdXRjaGFsbGVuZ2VzL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vbGF5b3V0Y2hhbGxlbmdlcy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2xheW91dGNoYWxsZW5nZXMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9sYXlvdXRjaGFsbGVuZ2VzL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2xheW91dGNoYWxsZW5nZXMvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vbGF5b3V0Y2hhbGxlbmdlcy8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyBmcm9tIFwiLi9ub2RlX21vZHVsZXMvaHRtbC1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0hUTUxfTE9BREVSX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vc3JjL2ltZy9mYXZpY29uLTMyeDMyLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xuLy8gTW9kdWxlXG52YXIgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0hUTUxfTE9BREVSX0dFVF9TT1VSQ0VfRlJPTV9JTVBPUlRfX18oX19fSFRNTF9MT0FERVJfSU1QT1JUXzBfX18pO1xudmFyIGNvZGUgPSBcIjwhRE9DVFlQRSBodG1sPlxcbjxodG1sIGxhbmc9XFxcImVuXFxcIj5cXG5cXG48aGVhZD5cXG4gICAgPG1ldGEgY2hhcnNldD1cXFwiVVRGLThcXFwiIC8+XFxuICAgIDxtZXRhIG5hbWU9XFxcInZpZXdwb3J0XFxcIiBjb250ZW50PVxcXCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MS4wXFxcIiAvPlxcbiAgICA8IS0tIGRpc3BsYXlzIHNpdGUgcHJvcGVybHkgYmFzZWQgb24gdXNlcidzIGRldmljZSAtLT5cXG5cXG4gICAgPGxpbmsgcmVsPVxcXCJpY29uXFxcIiB0eXBlPVxcXCJpbWFnZS9wbmdcXFwiIHNpemVzPVxcXCIzMngzMlxcXCIgaHJlZj1cXFwiXCIgKyBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8wX19fICsgXCJcXFwiIC8+XFxuXFxuICAgIDx0aXRsZT5Gcm9udGVuZCBNZW50b3IgfCBMYXVuY2ggY291bnRkb3duIHRpbWVyPC90aXRsZT5cXG4gICAgPGxpbmsgcmVsPVxcXCJzdHlsZXNoZWV0XFxcIiBocmVmPVxcXCJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9mb250LWF3ZXNvbWUvNi4wLjAtYmV0YTMvY3NzL2FsbC5taW4uY3NzXFxcIiBpbnRlZ3JpdHk9XFxcInNoYTUxMi1GbzNybHJaai9rN3VqVG5IZzRDR1IyRDdrU3MwdjRMTGFudzJxa3NZdVJsRXpPK3RjYUVQUW9nUTBLYW9HTjI2L3pybjIwSW1SMURmdUxXbk9vN2FCQT09XFxcIiBjcm9zc29yaWdpbj1cXFwiYW5vbnltb3VzXFxcIiByZWZlcnJlcnBvbGljeT1cXFwibm8tcmVmZXJyZXJcXFwiXFxuICAgIC8+XFxuPC9oZWFkPlxcblxcbjxib2R5PlxcbiAgICA8c2VjdGlvbiBjbGFzcz1cXFwiY291bnRkb3duXFxcIj5cXG4gICAgICAgIDxoMSBjbGFzcz1cXFwiY291bnRkb3duX190aXRsZVxcXCI+WmFyYSBvZHBhbGFteSBwZXRhcmRlISEhPC9oMT5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInRpbWVyIGwtZmxleFxcXCI+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwidGltZXJfX3RpbGUtY29udGFpbmVyXFxcIj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwidGltZXJfX3RpbGVcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBkYXRhLWRheXMgY2xhc3M9XFxcInRpbWVyX190aWxlLW51bWJlclxcXCIgZGF0YS1udW1iZXItYmVmb3JlIGRhdGEtbnVtYmVyLWFmdGVyPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJ0aW1lcl9fZmxpcC1mcm9udFxcXCI+PC9zcGFuPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJ0aW1lcl9fZmxpcC1iYWNrIGZsaXBwZWRcXFwiPjwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzPVxcXCJ0aW1lcl9fdGltZS11bml0XFxcIj5EYXlzPC9oMj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ0aW1lcl9fdGlsZS1jb250YWluZXJcXFwiPiBcXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwidGltZXJfX3RpbGVcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBkYXRhLWhvdXJzIGNsYXNzPVxcXCJ0aW1lcl9fdGlsZS1udW1iZXJcXFwiIGRhdGEtbnVtYmVyLWJlZm9yZSBkYXRhLW51bWJlci1hZnRlcj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwidGltZXJfX2ZsaXAtZnJvbnRcXFwiPjwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwidGltZXJfX2ZsaXAtYmFjayBmbGlwcGVkXFxcIj48L3NwYW4+XFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDxoMiBjbGFzcz1cXFwidGltZXJfX3RpbWUtdW5pdFxcXCI+SG91cnM8L2gyPlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInRpbWVyX190aWxlLWNvbnRhaW5lclxcXCI+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInRpbWVyX190aWxlXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgZGF0YS1taW51dGVzIGNsYXNzPVxcXCJ0aW1lcl9fdGlsZS1udW1iZXJcXFwiIGRhdGEtbnVtYmVyLWJlZm9yZSBkYXRhLW51bWJlci1hZnRlcj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwidGltZXJfX2ZsaXAtZnJvbnRcXFwiPjwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwidGltZXJfX2ZsaXAtYmFjayBmbGlwcGVkXFxcIj48L3NwYW4+XFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDxoMiBjbGFzcz1cXFwidGltZXJfX3RpbWUtdW5pdFxcXCI+TWludXRlczwvaDI+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwidGltZXJfX3RpbGUtY29udGFpbmVyXFxcIj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwidGltZXJfX3RpbGVcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBkYXRhLXNlY29uZHMgY2xhc3M9XFxcInRpbWVyX190aWxlLW51bWJlclxcXCIgZGF0YS1udW1iZXItYmVmb3JlIGRhdGEtbnVtYmVyLWFmdGVyPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJ0aW1lcl9fZmxpcC1mcm9udFxcXCI+PC9zcGFuPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJ0aW1lcl9fZmxpcC1iYWNrIGZsaXBwZWRcXFwiPjwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzPVxcXCJ0aW1lcl9fdGltZS11bml0XFxcIj5TZWNvbmRzPC9oMj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY291bnRkb3duX19zb2NpYWxtZWRpYS1jb250YWluZXIgbC1mbGV4XFxcIj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb3VudGRvd25fX3NvY2lhbG1lZGlhLWljb25cXFwiPlxcbiAgICAgICAgICAgICAgICA8aSBjbGFzcz1cXFwiZmFiIGZhLWZhY2Vib29rLXNxdWFyZVxcXCI+PC9pPlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvdW50ZG93bl9fc29jaWFsbWVkaWEtaWNvblxcXCI+XFxuICAgICAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJmYWIgZmEtcGludGVyZXN0LXNxdWFyZVxcXCI+PC9pPlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvdW50ZG93bl9fc29jaWFsbWVkaWEtaWNvblxcXCI+XFxuICAgICAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJmYWIgZmEtaW5zdGFncmFtLXNxdWFyZVxcXCI+PC9pPlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgPC9kaXY+XFxuICAgIDwvc2VjdGlvbj5cXG48L2JvZHk+XFxuXFxuPC9odG1sPlwiO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgY29kZTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZXJzY29yZS1kYW5nbGUsIG5vLXBhcmFtLXJlYXNzaWduXG5cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICBpZiAob3B0aW9ucy5tYXliZU5lZWRRdW90ZXMgJiYgL1tcXHRcXG5cXGZcXHIgXCInPTw+YF0vLnRlc3QodXJsKSkge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJjbGFzcyBDb3VudGRvd24ge1xyXG4gIGNvbnN0cnVjdG9yKGRheXNDb250YWluZXIsIGhvdXJzQ29udGFpbmVyLCBtaW51dGVzQ29udGFpbmVyLCBzZWNvbmRzQ29udGFpbmVyLCBmaW5hbERhdGUpIHtcclxuICAgIC8vIENvbnRhaW5lclxyXG4gICAgdGhpcy5kYXlzQ29udGFpbmVyID0gZGF5c0NvbnRhaW5lcjtcclxuICAgIHRoaXMuaG91cnNDb250YWluZXIgPSBob3Vyc0NvbnRhaW5lcjtcclxuICAgIHRoaXMubWludXRlc0NvbnRhaW5lciA9IG1pbnV0ZXNDb250YWluZXI7XHJcbiAgICB0aGlzLnNlY29uZHNDb250YWluZXIgPSBzZWNvbmRzQ29udGFpbmVyO1xyXG4gICAgLy8gRmluYWwgZGF0ZVxyXG4gICAgdGhpcy5maW5hbERhdGUgPSBmaW5hbERhdGU7XHJcbiAgICAvLyBGaXJzdCB1cGRhdGUgZmxhZ1xyXG4gICAgdGhpcy5mbGFnID0gZmFsc2U7XHJcbiAgICAvLyBQcmV2IHZhbHVlc1xyXG4gICAgdGhpcy5wcmV2U2VjID0gYGA7XHJcbiAgICB0aGlzLnByZXZNaW4gPSBgYDtcclxuICAgIHRoaXMucHJldkhvdXIgPSBgYDtcclxuICAgIHRoaXMucHJldkRheSA9IGBgO1xyXG4gIH1cclxuXHJcbiAgcnVuQ2xvY2sgPSAoKSA9PiB7XHJcbiAgICAvLyBHZXQgY3VycmVudCBkYXRlIGFuZCBjb21wdXRlIHRpbWUgZ2FwXHJcbiAgICBjb25zdCBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG4gICAgY29uc3QgdGltZUdhcCA9IHRoaXMuZmluYWxEYXRlIC0gY3VycmVudERhdGU7XHJcbiAgICAvLyBTdG9wIHdoZW4gdGltZXIgc2hvd3MgMDowOjA6MFxyXG4gICAgaWYgKHRpbWVHYXAgPj0gMCkge1xyXG4gICAgICAvLyBTZXQgdGltZSB1bml0c1xyXG4gICAgICBjb25zdCBub3cgPSB7XHJcbiAgICAgICAgc2VjOiBNYXRoLmZsb29yKCh0aW1lR2FwIC8gMTAwMCkgJSA2MCksXHJcbiAgICAgICAgbWluOiBNYXRoLmZsb29yKCh0aW1lR2FwIC8gKDEwMDAgKiA2MCkpICUgNjApLFxyXG4gICAgICAgIGhvdXI6IE1hdGguZmxvb3IoKHRpbWVHYXAgLyAoMTAwMCAqIDYwICogNjApKSAlIDI0KSxcclxuICAgICAgICBkYXk6IE1hdGguZmxvb3IodGltZUdhcCAvICgxMDAwICogNjAgKiA2MCAqIDI0KSksXHJcbiAgICAgIH07XHJcblxyXG4gICAgICB0aGlzLmNoZWNrSWZGbGlwTmVlZGVuKG5vdyk7XHJcbiAgICAgIHRoaXMudXBkYXRlUHJldlZhbHVlcyhub3cpO1xyXG5cclxuICAgICAgLy8gUmVjdXJlbmN5LCBpbnZva2UgeW91cnNlbGYgYWZ0ZXIgMXNlY1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICB0aGlzLnJ1bkNsb2NrKCk7XHJcbiAgICAgIH0sIDEwMDApO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIC8vIElmIHVuaXQgaXMgbm90IHRoZSBzYW1lIGFzIGJlZm9yZSwgZmxpcCBpdFxyXG4gIGNoZWNrSWZGbGlwTmVlZGVuID0gKHsgc2VjLCBtaW4sIGhvdXIsIGRheSB9KSA9PiB7XHJcbiAgICBpZiAodGhpcy5wcmV2RGF5ICE9PSBkYXkpIHRoaXMuZmxpcCh0aGlzLmRheXNDb250YWluZXIsIGRheSk7XHJcbiAgICBpZiAodGhpcy5wcmV2SG91ciAhPT0gaG91cikgdGhpcy5mbGlwKHRoaXMuaG91cnNDb250YWluZXIsIGhvdXIpO1xyXG4gICAgaWYgKHRoaXMucHJldk1pbiAhPT0gbWluKSB0aGlzLmZsaXAodGhpcy5taW51dGVzQ29udGFpbmVyLCBtaW4pO1xyXG4gICAgaWYgKHRoaXMucHJldlNlYyAhPT0gc2VjKSB0aGlzLmZsaXAodGhpcy5zZWNvbmRzQ29udGFpbmVyLCBzZWMpO1xyXG4gIH07XHJcblxyXG4gIC8vIFdlIG5lZWQgcHJldiB2YWx1ZXMgdG8gY2hlY2sgaWYgdW5pdCBoYXMgY2hhbmdlZFxyXG4gIHVwZGF0ZVByZXZWYWx1ZXMgPSAoeyBzZWMsIG1pbiwgaG91ciwgZGF5IH0pID0+IHtcclxuICAgIHRoaXMucHJldlNlYyA9IHNlYztcclxuICAgIHRoaXMucHJldk1pbiA9IG1pbjtcclxuICAgIHRoaXMucHJldkhvdXIgPSBob3VyO1xyXG4gICAgdGhpcy5wcmV2RGF5ID0gZGF5O1xyXG4gIH07XHJcblxyXG4gIC8vIEZyZWV6IGZ1bmN0aW9uIGZvciBYIG1zIGJlY2F1c2Ugd2Ugd2FudCB0byByZW1vdmUgZmxpcCBjYXJkcyBhZnRlciB0aGV5IGZsaXBcclxuICBzbGVlcCA9IChtcykgPT4ge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIG1zKSk7XHJcbiAgfTtcclxuXHJcbiAgZmxpcCA9IChjYXJkLCBjdXJyTnVtYmVyKSA9PiB7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhjdXJyTnVtYmVyKVxyXG4gICAgY29uc3QgbmV4dE51bWJlciA9IHRoaXMuZ2V0TmV4dE51bWJlcihjYXJkLCBjdXJyTnVtYmVyKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKG5leHROdW1iZXIpXHJcbiAgICBjYXJkLnF1ZXJ5U2VsZWN0b3IoYHNwYW4udGltZXJfX2ZsaXAtZnJvbnRgKS5jbGFzc0xpc3QuYWRkKGBmbGlwcGVkYCk7IC8vIEZyb250IGRvIHBpb251XHJcbiAgICBjYXJkLnF1ZXJ5U2VsZWN0b3IoYHNwYW4udGltZXJfX2ZsaXAtYmFja2ApLmNsYXNzTGlzdC5yZW1vdmUoYGZsaXBwZWRgKTsgLy8gQmFjayBuYSBkw7PFglxyXG4gICAgdGhpcy5zbGVlcCgzMDApLnRoZW4oKCkgPT4ge1xyXG4gICAgICB0aGlzLnJlbW92ZUZsaXBwZWRDYXJkcyhjYXJkKTsgLy8gU2thc3VqIGthcnR5XHJcbiAgICAgIGNhcmQuc2V0QXR0cmlidXRlKGBkYXRhLW51bWJlci1iZWZvcmVgLCBuZXh0TnVtYmVyKTsgLy8gQmVmb3JlXHJcbiAgICAgIGNhcmQuc2V0QXR0cmlidXRlKGBkYXRhLW51bWJlci1hZnRlcmAsIGN1cnJOdW1iZXIpOyAvLyBBZnRlclxyXG4gICAgICB0aGlzLmNyZWF0ZU5ld0ZsaXBDYXJkcyhjYXJkLCBjdXJyTnVtYmVyLCBuZXh0TnVtYmVyKTsgLy8gWnLDs2Iga2FydHlcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGdldE5leHROdW1iZXIgPSAoY2FyZCwgY3Vyck51bWJlcikgPT4ge1xyXG4gICAgaWYgKGBkYXlzYCBpbiBjYXJkLmRhdGFzZXQpIHtcclxuICAgICAgLy8gVXBkYXRlIGRheVxyXG4gICAgICAtLWN1cnJOdW1iZXIgPCAwID8gKGN1cnJOdW1iZXIgPSAwKSA6IGBgO1xyXG4gICAgfSBlbHNlIGlmIChgaG91cnNgIGluIGNhcmQuZGF0YXNldCkge1xyXG4gICAgICAvLyBVcGRhdGUgaG91clxyXG4gICAgICAtLWN1cnJOdW1iZXIgPCAwID8gKGN1cnJOdW1iZXIgPSAyMykgOiBgYDtcclxuICAgIH0gZWxzZSBpZiAoYG1pbnV0ZXNgIGluIGNhcmQuZGF0YXNldCB8fCBgc2Vjb25kc2AgaW4gY2FyZC5kYXRhc2V0KSB7XHJcbiAgICAgIC8vIFVwZGF0ZSBtaW4gLyBzZWNcclxuICAgICAgLS1jdXJyTnVtYmVyIDwgMCA/IChjdXJyTnVtYmVyID0gNTkpIDogYGA7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gY3Vyck51bWJlcjtcclxuICB9O1xyXG5cclxuICByZW1vdmVGbGlwcGVkQ2FyZHMgPSAoY2FyZCkgPT4ge1xyXG4gICAgLy8gUmVtb3ZlIGZsaXBwZWQgY2FyZHNcclxuICAgIGNhcmQucXVlcnlTZWxlY3Rvcihgc3Bhbi50aW1lcl9fZmxpcC1mcm9udGApLnJlbW92ZSgpO1xyXG4gICAgY2FyZC5xdWVyeVNlbGVjdG9yKGBzcGFuLnRpbWVyX19mbGlwLWJhY2tgKS5yZW1vdmUoKTtcclxuICB9O1xyXG5cclxuICBjcmVhdGVOZXdGbGlwQ2FyZHMgPSAoY2FyZCwgY3Vyck51bWJlciwgbmV4dE51bWJlcikgPT4ge1xyXG4gICAgLy8gQ3JlYXRlIGZyb250IGNhcmRcclxuICAgIGNvbnN0IG5ld0Zyb250ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgc3BhbmApO1xyXG4gICAgbmV3RnJvbnQuY2xhc3NMaXN0LmFkZChgdGltZXJfX2ZsaXAtZnJvbnRgKTtcclxuICAgIG5ld0Zyb250LnRleHRDb250ZW50ID0gY3Vyck51bWJlcjtcclxuICAgIC8vIENyZWF0ZSBiYWNrIGNhcmRcclxuICAgIGNvbnN0IG5ld0JhY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGBzcGFuYCk7XHJcbiAgICBuZXdCYWNrLmNsYXNzTGlzdC5hZGQoYHRpbWVyX19mbGlwLWJhY2tgLCBgZmxpcHBlZGApO1xyXG4gICAgbmV3QmFjay50ZXh0Q29udGVudCA9IG5leHROdW1iZXI7XHJcbiAgICAvLyBBcHBlbmQgQ2FyZHNcclxuICAgIGNhcmQuYXBwZW5kKG5ld0Zyb250LCBuZXdCYWNrKTtcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb3VudGRvd247XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiaW1wb3J0ICcuL3Njc3Mvc3R5bGUuc2Nzcyc7XHJcbmltcG9ydCAnLi4vaW5kZXguaHRtbCc7XHJcblxyXG4vLyBqcyBtb2R1bGVzXHJcbmltcG9ydCBDb3VudGRvd24gZnJvbSAnLi9qcy9jb3VudGRvd24nO1xyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vID09PT09PT09PT09PT09PT09PT09PSAgICBDT1VOVERPV04gICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbi8vIGNvbnRhaW5lcnNcclxuY29uc3QgZGF5c0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWRheXNdYCk7XHJcbmNvbnN0IGhvdXJzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtaG91cnNdYCk7XHJcbmNvbnN0IG1pbnV0ZXNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1taW51dGVzXWApO1xyXG5jb25zdCBzZWNvbmRzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtc2Vjb25kc11gKTtcclxuXHJcbi8vIGdldFRpbWUgdHVybnMgZGF0ZSBpbnRvIG1pbGlzZWNvbmRzIHNpbmNlIDEgamFudWFyeSAxOTcwIDAwOjAwOjAwXHJcbmNvbnN0IGZpbmFsRGF0ZSA9IG5ldyBEYXRlKGBBcHJpbCAxNywgMjAyMiAwMDowMDowMGApLmdldFRpbWUoKTtcclxuXHJcbmNvbnN0IGNvdW50ZG93biA9IG5ldyBDb3VudGRvd24oZGF5c0NvbnRhaW5lciwgaG91cnNDb250YWluZXIsIG1pbnV0ZXNDb250YWluZXIsIHNlY29uZHNDb250YWluZXIsIGZpbmFsRGF0ZSk7XHJcblxyXG4vLyBKdXN0IHJ1biBkYW1uIGNsb2NrXHJcbmNvdW50ZG93bi5ydW5DbG9jaygpO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=