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
    setThemeInStorage = () => {
        const theme = window.localStorage.getItem(`theme`);
        if (theme === `dark-theme`) {
            window.localStorage.setItem(`theme`, `light-theme`);
        } else {
            // document.body.classList.replace(`light-theme`, `dark-theme`);
            window.localStorage.setItem(`theme`, `dark-theme`);
        }
    }
    setTheme = () => {
        const actualTheme = window.localStorage.getItem(`theme`);

    }
}
const toggleSwitch = new ToggleSwitch();
toggleSwitch.toggle.addEventListener(`click`, )

(() => {
    const actualTheme = window.localStorage.getItem(`theme`);
    if (actualTheme === `dark-theme`) {
        // toggleSwitch.setTheme(`dark-theme`);
        window.localStorage.setItem(`theme`, `dark-theme`);

    } else {
        // toggleSwitch.setTheme(`light-theme`);
        window.localStorage.setItem(`theme`, `light-theme`);

    }
})()

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("a40af76b1e8babf758d8")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4yOTQ4MmJlMDc0MTgxZmJiMDNjMi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7OztVQ2hDRCIsInNvdXJjZXMiOlsid2VicGFjazovL2xheW91dGNoYWxsZW5nZXMvLi9zcmMvY29tcG9uZW50cy90b2dnbGUtc3dpdGNoLWNvbXBvbmVudC90b2dnbGUtc3dpdGNoLWNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly9sYXlvdXRjaGFsbGVuZ2VzL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBUb2dnbGVTd2l0Y2gge1xyXG4gICAgY29uc3RydWN0b3IodG9nZ2xlKSB7XHJcbiAgICAgICAgdGhpcy50b2dnbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS10b2dnbGUtc3dpdGNoXWApO1xyXG4gICAgfVxyXG4gICAgc2V0VGhlbWVJblN0b3JhZ2UgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgdGhlbWUgPSB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oYHRoZW1lYCk7XHJcbiAgICAgICAgaWYgKHRoZW1lID09PSBgZGFyay10aGVtZWApIHtcclxuICAgICAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKGB0aGVtZWAsIGBsaWdodC10aGVtZWApO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlcGxhY2UoYGxpZ2h0LXRoZW1lYCwgYGRhcmstdGhlbWVgKTtcclxuICAgICAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKGB0aGVtZWAsIGBkYXJrLXRoZW1lYCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgc2V0VGhlbWUgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgYWN0dWFsVGhlbWUgPSB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oYHRoZW1lYCk7XHJcblxyXG4gICAgfVxyXG59XHJcbmNvbnN0IHRvZ2dsZVN3aXRjaCA9IG5ldyBUb2dnbGVTd2l0Y2goKTtcclxudG9nZ2xlU3dpdGNoLnRvZ2dsZS5hZGRFdmVudExpc3RlbmVyKGBjbGlja2AsIClcclxuXHJcbigoKSA9PiB7XHJcbiAgICBjb25zdCBhY3R1YWxUaGVtZSA9IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShgdGhlbWVgKTtcclxuICAgIGlmIChhY3R1YWxUaGVtZSA9PT0gYGRhcmstdGhlbWVgKSB7XHJcbiAgICAgICAgLy8gdG9nZ2xlU3dpdGNoLnNldFRoZW1lKGBkYXJrLXRoZW1lYCk7XHJcbiAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKGB0aGVtZWAsIGBkYXJrLXRoZW1lYCk7XHJcblxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICAvLyB0b2dnbGVTd2l0Y2guc2V0VGhlbWUoYGxpZ2h0LXRoZW1lYCk7XHJcbiAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKGB0aGVtZWAsIGBsaWdodC10aGVtZWApO1xyXG5cclxuICAgIH1cclxufSkoKSIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImE0MGFmNzZiMWU4YmFiZjc1OGQ4XCIpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9