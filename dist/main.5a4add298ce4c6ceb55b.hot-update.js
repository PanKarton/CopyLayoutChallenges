self["webpackHotUpdatelayoutchallenges"]("main",{

/***/ "./src/components/toggle-switch-component/toggle-switch-component.js":
/*!***************************************************************************!*\
  !*** ./src/components/toggle-switch-component/toggle-switch-component.js ***!
  \***************************************************************************/
/***/ (() => {

class ToggleSwitch {
    constructor(toggle) {
        this.toggle = document.querySelector(`[data-toggle-switch]`);
    }
    toggleTheme = () => {
        const theme = window.localStorage.getItem(`theme`);
        console.log(theme)
        if (theme === `dark-theme`) {
            window.localStorage.setItem(`theme`, `light-theme`);
            this.setTheme(`light-theme`, `dark-theme`);
        } else {
            window.localStorage.setItem(`theme`, `dark-theme`);
            this.setTheme(`dark-theme`, `light-theme`);
        }
    }
    setTheme = (newTheme, prevTheme) => {
        if (prevTheme == undefined) {
            document.body.classList.add(newTheme);
        } else {
            document.body.classList.replace(prevTheme, newTheme);
        }
    }


}
const toggleSwitch = new ToggleSwitch();
toggleSwitch.toggle.addEventListener(`click`, toggleSwitch.toggleTheme);

(() => {
    const actualTheme = window.localStorage.getItem(`theme`);
    console.log(`1`)

    if (actualTheme === `dark-theme`) {
        toggleSwitch.setTheme(newTheme = `dark-theme`);
    } else {
        window.localStorage.setItem(`theme`, `light-theme`);
        toggleSwitch.setTheme(newTheme = `light-theme`);
    }
})()

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/style.scss */ "./src/scss/style.scss");
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../index.html */ "./index.html");
/* harmony import */ var _components_toggle_switch_component_toggle_switch_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/toggle-switch-component/toggle-switch-component */ "./src/components/toggle-switch-component/toggle-switch-component.js");
/* harmony import */ var _components_toggle_switch_component_toggle_switch_component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_components_toggle_switch_component_toggle_switch_component__WEBPACK_IMPORTED_MODULE_2__);


// js modules


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("2fe8fa473a40944e2cc7")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi41YTRhZGQyOThjZTRjNmNlYjU1Yi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0QzBCO0FBQ0o7QUFDdkI7Ozs7Ozs7OztVQ0ZBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGF5b3V0Y2hhbGxlbmdlcy8uL3NyYy9jb21wb25lbnRzL3RvZ2dsZS1zd2l0Y2gtY29tcG9uZW50L3RvZ2dsZS1zd2l0Y2gtY29tcG9uZW50LmpzIiwid2VicGFjazovL2xheW91dGNoYWxsZW5nZXMvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbGF5b3V0Y2hhbGxlbmdlcy93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgVG9nZ2xlU3dpdGNoIHtcclxuICAgIGNvbnN0cnVjdG9yKHRvZ2dsZSkge1xyXG4gICAgICAgIHRoaXMudG9nZ2xlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtdG9nZ2xlLXN3aXRjaF1gKTtcclxuICAgIH1cclxuICAgIHRvZ2dsZVRoZW1lID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHRoZW1lID0gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKGB0aGVtZWApO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoZW1lKVxyXG4gICAgICAgIGlmICh0aGVtZSA9PT0gYGRhcmstdGhlbWVgKSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShgdGhlbWVgLCBgbGlnaHQtdGhlbWVgKTtcclxuICAgICAgICAgICAgdGhpcy5zZXRUaGVtZShgbGlnaHQtdGhlbWVgLCBgZGFyay10aGVtZWApO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShgdGhlbWVgLCBgZGFyay10aGVtZWApO1xyXG4gICAgICAgICAgICB0aGlzLnNldFRoZW1lKGBkYXJrLXRoZW1lYCwgYGxpZ2h0LXRoZW1lYCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgc2V0VGhlbWUgPSAobmV3VGhlbWUsIHByZXZUaGVtZSkgPT4ge1xyXG4gICAgICAgIGlmIChwcmV2VGhlbWUgPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZChuZXdUaGVtZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVwbGFjZShwcmV2VGhlbWUsIG5ld1RoZW1lKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxufVxyXG5jb25zdCB0b2dnbGVTd2l0Y2ggPSBuZXcgVG9nZ2xlU3dpdGNoKCk7XHJcbnRvZ2dsZVN3aXRjaC50b2dnbGUuYWRkRXZlbnRMaXN0ZW5lcihgY2xpY2tgLCB0b2dnbGVTd2l0Y2gudG9nZ2xlVGhlbWUpO1xyXG5cclxuKCgpID0+IHtcclxuICAgIGNvbnN0IGFjdHVhbFRoZW1lID0gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKGB0aGVtZWApO1xyXG4gICAgY29uc29sZS5sb2coYDFgKVxyXG5cclxuICAgIGlmIChhY3R1YWxUaGVtZSA9PT0gYGRhcmstdGhlbWVgKSB7XHJcbiAgICAgICAgdG9nZ2xlU3dpdGNoLnNldFRoZW1lKG5ld1RoZW1lID0gYGRhcmstdGhlbWVgKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKGB0aGVtZWAsIGBsaWdodC10aGVtZWApO1xyXG4gICAgICAgIHRvZ2dsZVN3aXRjaC5zZXRUaGVtZShuZXdUaGVtZSA9IGBsaWdodC10aGVtZWApO1xyXG4gICAgfVxyXG59KSgpIiwiaW1wb3J0ICcuL3Njc3Mvc3R5bGUuc2Nzcyc7XHJcbmltcG9ydCAnLi4vaW5kZXguaHRtbCc7XHJcbi8vIGpzIG1vZHVsZXNcclxuaW1wb3J0ICcuL2NvbXBvbmVudHMvdG9nZ2xlLXN3aXRjaC1jb21wb25lbnQvdG9nZ2xlLXN3aXRjaC1jb21wb25lbnQnOyIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjJmZThmYTQ3M2E0MDk0NGUyY2M3XCIpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9