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
        if (theme === `dark-theme`) {
            window.localStorage.setItem(`theme`, `light-theme`);
            document.body.classList.replace(`dark-theme`, `light-theme`)
        } else {
            console.log(`ustawiam ciemne theme`);
            window.localStorage.setItem(`theme`, `dark-theme`);
            document.body.classList.replace(`light-theme`, `dark-theme`)
        }
    }
    setTheme = () => {
        window.localStorage.setItem(`theme`, `light-theme`);
        document.body.classList.replace(`dark-theme`, `light-theme`)
    }


}
const toggleSwitch = new ToggleSwitch();
toggleSwitch.toggle.addEventListener(`click`, toggleSwitch.setTheme);

(() => {
    const actualTheme = window.localStorage.getItem(`theme`);
    console.log(actualTheme);

    if (actualTheme === `dark-theme`) {
        window.localStorage.setItem(`theme`, `dark-theme`);
        console.log(`ciemne theme`);
    } else {
        window.localStorage.setItem(`theme`, `light-theme`);
        console.log(`jasne theme`);

    }
    toggleSwitch.setTheme();
})()

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("ea6feb037b99b1e7e147")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi42YjIxMzVhNjE2MDFkMDBlYzA4Ny5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7OztVQ3RDRCIsInNvdXJjZXMiOlsid2VicGFjazovL2xheW91dGNoYWxsZW5nZXMvLi9zcmMvY29tcG9uZW50cy90b2dnbGUtc3dpdGNoLWNvbXBvbmVudC90b2dnbGUtc3dpdGNoLWNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly9sYXlvdXRjaGFsbGVuZ2VzL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBUb2dnbGVTd2l0Y2gge1xyXG4gICAgY29uc3RydWN0b3IodG9nZ2xlKSB7XHJcbiAgICAgICAgdGhpcy50b2dnbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS10b2dnbGUtc3dpdGNoXWApO1xyXG4gICAgfVxyXG4gICAgdG9nZ2xlVGhlbWUgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgdGhlbWUgPSB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oYHRoZW1lYCk7XHJcbiAgICAgICAgaWYgKHRoZW1lID09PSBgZGFyay10aGVtZWApIHtcclxuICAgICAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKGB0aGVtZWAsIGBsaWdodC10aGVtZWApO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZXBsYWNlKGBkYXJrLXRoZW1lYCwgYGxpZ2h0LXRoZW1lYClcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgdXN0YXdpYW0gY2llbW5lIHRoZW1lYCk7XHJcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShgdGhlbWVgLCBgZGFyay10aGVtZWApO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZXBsYWNlKGBsaWdodC10aGVtZWAsIGBkYXJrLXRoZW1lYClcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBzZXRUaGVtZSA9ICgpID0+IHtcclxuICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oYHRoZW1lYCwgYGxpZ2h0LXRoZW1lYCk7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVwbGFjZShgZGFyay10aGVtZWAsIGBsaWdodC10aGVtZWApXHJcbiAgICB9XHJcblxyXG5cclxufVxyXG5jb25zdCB0b2dnbGVTd2l0Y2ggPSBuZXcgVG9nZ2xlU3dpdGNoKCk7XHJcbnRvZ2dsZVN3aXRjaC50b2dnbGUuYWRkRXZlbnRMaXN0ZW5lcihgY2xpY2tgLCB0b2dnbGVTd2l0Y2guc2V0VGhlbWUpO1xyXG5cclxuKCgpID0+IHtcclxuICAgIGNvbnN0IGFjdHVhbFRoZW1lID0gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKGB0aGVtZWApO1xyXG4gICAgY29uc29sZS5sb2coYWN0dWFsVGhlbWUpO1xyXG5cclxuICAgIGlmIChhY3R1YWxUaGVtZSA9PT0gYGRhcmstdGhlbWVgKSB7XHJcbiAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKGB0aGVtZWAsIGBkYXJrLXRoZW1lYCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coYGNpZW1uZSB0aGVtZWApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oYHRoZW1lYCwgYGxpZ2h0LXRoZW1lYCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coYGphc25lIHRoZW1lYCk7XHJcblxyXG4gICAgfVxyXG4gICAgdG9nZ2xlU3dpdGNoLnNldFRoZW1lKCk7XHJcbn0pKCkiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJlYTZmZWIwMzdiOTliMWU3ZTE0N1wiKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==