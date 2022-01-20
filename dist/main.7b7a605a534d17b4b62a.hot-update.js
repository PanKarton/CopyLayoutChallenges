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
        console.log(`2`)
        if (theme === `dark-theme`) {
            window.localStorage.setItem(`theme`, `light-theme`);
            this.setTheme(`light-theme`, `dark-theme`);
        } else {
            window.localStorage.setItem(`theme`, `dark-theme`);
            this.setTheme(`dark-theme`, `light-theme`);
        }
    }
    setTheme = (newTheme, prevTheme) => {
        // console.log(newTheme, prevTheme);
        if (prevTheme == undefined) {
            // console.log(`1 ustawienie`)
            document.body.classList.add(newTheme);
        } else {
            // console.log(`kolejne ustawienie`)
            // document.body.classList.replace(prevTheme, newTheme);
            document.body.classList.remove(prevTheme);
            document.body.classList.add(newTheme);
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

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("9a9ef2f8f6818624adc7")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi43YjdhNjA1YTUzNGQxN2I0YjYyYS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7OztVQzNDRCIsInNvdXJjZXMiOlsid2VicGFjazovL2xheW91dGNoYWxsZW5nZXMvLi9zcmMvY29tcG9uZW50cy90b2dnbGUtc3dpdGNoLWNvbXBvbmVudC90b2dnbGUtc3dpdGNoLWNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly9sYXlvdXRjaGFsbGVuZ2VzL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBUb2dnbGVTd2l0Y2gge1xyXG4gICAgY29uc3RydWN0b3IodG9nZ2xlKSB7XHJcbiAgICAgICAgdGhpcy50b2dnbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS10b2dnbGUtc3dpdGNoXWApO1xyXG4gICAgfVxyXG4gICAgdG9nZ2xlVGhlbWUgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgdGhlbWUgPSB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oYHRoZW1lYCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coYDJgKVxyXG4gICAgICAgIGlmICh0aGVtZSA9PT0gYGRhcmstdGhlbWVgKSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShgdGhlbWVgLCBgbGlnaHQtdGhlbWVgKTtcclxuICAgICAgICAgICAgdGhpcy5zZXRUaGVtZShgbGlnaHQtdGhlbWVgLCBgZGFyay10aGVtZWApO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShgdGhlbWVgLCBgZGFyay10aGVtZWApO1xyXG4gICAgICAgICAgICB0aGlzLnNldFRoZW1lKGBkYXJrLXRoZW1lYCwgYGxpZ2h0LXRoZW1lYCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgc2V0VGhlbWUgPSAobmV3VGhlbWUsIHByZXZUaGVtZSkgPT4ge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKG5ld1RoZW1lLCBwcmV2VGhlbWUpO1xyXG4gICAgICAgIGlmIChwcmV2VGhlbWUgPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGAxIHVzdGF3aWVuaWVgKVxyXG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQobmV3VGhlbWUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGBrb2xlam5lIHVzdGF3aWVuaWVgKVxyXG4gICAgICAgICAgICAvLyBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZXBsYWNlKHByZXZUaGVtZSwgbmV3VGhlbWUpO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUocHJldlRoZW1lKTtcclxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKG5ld1RoZW1lKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxufVxyXG5jb25zdCB0b2dnbGVTd2l0Y2ggPSBuZXcgVG9nZ2xlU3dpdGNoKCk7XHJcbnRvZ2dsZVN3aXRjaC50b2dnbGUuYWRkRXZlbnRMaXN0ZW5lcihgY2xpY2tgLCB0b2dnbGVTd2l0Y2gudG9nZ2xlVGhlbWUpO1xyXG5cclxuKCgpID0+IHtcclxuICAgIGNvbnN0IGFjdHVhbFRoZW1lID0gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKGB0aGVtZWApO1xyXG4gICAgY29uc29sZS5sb2coYDFgKVxyXG5cclxuICAgIGlmIChhY3R1YWxUaGVtZSA9PT0gYGRhcmstdGhlbWVgKSB7XHJcbiAgICAgICAgdG9nZ2xlU3dpdGNoLnNldFRoZW1lKG5ld1RoZW1lID0gYGRhcmstdGhlbWVgKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKGB0aGVtZWAsIGBsaWdodC10aGVtZWApO1xyXG4gICAgICAgIHRvZ2dsZVN3aXRjaC5zZXRUaGVtZShuZXdUaGVtZSA9IGBsaWdodC10aGVtZWApO1xyXG4gICAgfVxyXG59KSgpIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiOWE5ZWYyZjhmNjgxODYyNGFkYzdcIikiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=