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
        document.body.classList.replace(`dark-theme`, `light-theme`);
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
// toggleSwitch.toggle.addEventListener(`click`, )

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
/******/ 	__webpack_require__.h = () => ("1b9067ceb80ebedb95a4")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4zMjcyZDk4YWY5YWE3N2U1YjkxMy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7OztVQzdCRCIsInNvdXJjZXMiOlsid2VicGFjazovL2xheW91dGNoYWxsZW5nZXMvLi9zcmMvY29tcG9uZW50cy90b2dnbGUtc3dpdGNoLWNvbXBvbmVudC90b2dnbGUtc3dpdGNoLWNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly9sYXlvdXRjaGFsbGVuZ2VzL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBUb2dnbGVTd2l0Y2gge1xyXG4gICAgY29uc3RydWN0b3IodG9nZ2xlKSB7XHJcbiAgICAgICAgdGhpcy50b2dnbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS10b2dnbGUtc3dpdGNoXWApO1xyXG4gICAgfVxyXG4gICAgc2V0VGhlbWVJblN0b3JhZ2UgPSB0aGVtZSA9PiB7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVwbGFjZShgZGFyay10aGVtZWAsIGBsaWdodC10aGVtZWApO1xyXG4gICAgICAgIGlmICh0aGVtZSA9PT0gYGRhcmstdGhlbWVgKSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShgdGhlbWVgLCBgbGlnaHQtdGhlbWVgKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZXBsYWNlKGBsaWdodC10aGVtZWAsIGBkYXJrLXRoZW1lYCk7XHJcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShgdGhlbWVgLCBgZGFyay10aGVtZWApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHNldFRoZW1lID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGFjdHVhbFRoZW1lID0gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKGB0aGVtZWApO1xyXG5cclxuICAgIH1cclxufVxyXG5jb25zdCB0b2dnbGVTd2l0Y2ggPSBuZXcgVG9nZ2xlU3dpdGNoKCk7XHJcbi8vIHRvZ2dsZVN3aXRjaC50b2dnbGUuYWRkRXZlbnRMaXN0ZW5lcihgY2xpY2tgLCApXHJcblxyXG4oKCkgPT4ge1xyXG4gICAgY29uc3QgYWN0dWFsVGhlbWUgPSB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oYHRoZW1lYCk7XHJcbiAgICBpZiAoYWN0dWFsVGhlbWUgPT09IGBkYXJrLXRoZW1lYCkge1xyXG4gICAgICAgIHRvZ2dsZVN3aXRjaC5zZXRUaGVtZShgZGFyay10aGVtZWApO1xyXG5cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdG9nZ2xlU3dpdGNoLnNldFRoZW1lKGBsaWdodC10aGVtZWApO1xyXG4gICAgfVxyXG59KSgpIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiMWI5MDY3Y2ViODBlYmVkYjk1YTRcIikiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=