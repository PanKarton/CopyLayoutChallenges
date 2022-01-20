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
    setThemeInStorage = theme => {
        if (theme === `dark-theme`) {
            // document.body.classList.replace(`dark-theme`, `light-theme`);
            window.localStorage.setItem(`theme`, `light-theme`);
        } else {
            // document.body.classList.replace(`light-theme`, `dark-theme`);
            window.localStorage.setItem(`theme`, `dark-theme`);
        }
    }
}
const toggleSwitch = new ToggleSwitch();
toggleSwitch.toggle.addEventListener(`click`, toggl)

(() => {
    const actualTheme = window.localStorage.getItem(`theme`);
    if (actualTheme === `dark-theme`) {
        toggleSwitch.setTheme(`dark-theme`);

    } else {
        toggleSwitch.setTheme(`light-theme`);
    }
})()

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("f2c2a5fca98fe1eed1f5")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4xZmE1ZTcxYmYxM2I3NmFhMTg0ZS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7VUN6QkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sYXlvdXRjaGFsbGVuZ2VzLy4vc3JjL2NvbXBvbmVudHMvdG9nZ2xlLXN3aXRjaC1jb21wb25lbnQvdG9nZ2xlLXN3aXRjaC1jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vbGF5b3V0Y2hhbGxlbmdlcy93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgVG9nZ2xlU3dpdGNoIHtcclxuICAgIGNvbnN0cnVjdG9yKHRvZ2dsZSkge1xyXG4gICAgICAgIHRoaXMudG9nZ2xlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtdG9nZ2xlLXN3aXRjaF1gKTtcclxuICAgIH1cclxuICAgIHNldFRoZW1lSW5TdG9yYWdlID0gdGhlbWUgPT4ge1xyXG4gICAgICAgIGlmICh0aGVtZSA9PT0gYGRhcmstdGhlbWVgKSB7XHJcbiAgICAgICAgICAgIC8vIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlcGxhY2UoYGRhcmstdGhlbWVgLCBgbGlnaHQtdGhlbWVgKTtcclxuICAgICAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKGB0aGVtZWAsIGBsaWdodC10aGVtZWApO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlcGxhY2UoYGxpZ2h0LXRoZW1lYCwgYGRhcmstdGhlbWVgKTtcclxuICAgICAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKGB0aGVtZWAsIGBkYXJrLXRoZW1lYCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbmNvbnN0IHRvZ2dsZVN3aXRjaCA9IG5ldyBUb2dnbGVTd2l0Y2goKTtcclxudG9nZ2xlU3dpdGNoLnRvZ2dsZS5hZGRFdmVudExpc3RlbmVyKGBjbGlja2AsIHRvZ2dsKVxyXG5cclxuKCgpID0+IHtcclxuICAgIGNvbnN0IGFjdHVhbFRoZW1lID0gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKGB0aGVtZWApO1xyXG4gICAgaWYgKGFjdHVhbFRoZW1lID09PSBgZGFyay10aGVtZWApIHtcclxuICAgICAgICB0b2dnbGVTd2l0Y2guc2V0VGhlbWUoYGRhcmstdGhlbWVgKTtcclxuXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRvZ2dsZVN3aXRjaC5zZXRUaGVtZShgbGlnaHQtdGhlbWVgKTtcclxuICAgIH1cclxufSkoKSIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImYyYzJhNWZjYTk4ZmUxZWVkMWY1XCIpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9