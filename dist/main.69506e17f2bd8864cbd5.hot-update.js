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
    setTheme = () => {
        const theme = window.localStorage.getItem(`theme`);
        if (theme === `dark-theme`) {
            console.log(`ustawiam jasne theme`);
            window.localStorage.setItem(`theme`, `light-theme`);
            document.body.classList.replace(`dark-theme`, `light-theme`)
        } else {
            console.log(`ustawiam ciemne theme`);
            window.localStorage.setItem(`theme`, `dark-theme`);
            document.body.classList.replace(`light-theme`, `dark-theme`)
        }
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
/******/ 	__webpack_require__.h = () => ("6b2135a61601d00ec087")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi42OTUwNmUxN2YyYmQ4ODY0Y2JkNS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7VUNsQ0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sYXlvdXRjaGFsbGVuZ2VzLy4vc3JjL2NvbXBvbmVudHMvdG9nZ2xlLXN3aXRjaC1jb21wb25lbnQvdG9nZ2xlLXN3aXRjaC1jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vbGF5b3V0Y2hhbGxlbmdlcy93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgVG9nZ2xlU3dpdGNoIHtcclxuICAgIGNvbnN0cnVjdG9yKHRvZ2dsZSkge1xyXG4gICAgICAgIHRoaXMudG9nZ2xlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtdG9nZ2xlLXN3aXRjaF1gKTtcclxuICAgIH1cclxuICAgIHNldFRoZW1lID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHRoZW1lID0gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKGB0aGVtZWApO1xyXG4gICAgICAgIGlmICh0aGVtZSA9PT0gYGRhcmstdGhlbWVgKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGB1c3Rhd2lhbSBqYXNuZSB0aGVtZWApO1xyXG4gICAgICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oYHRoZW1lYCwgYGxpZ2h0LXRoZW1lYCk7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlcGxhY2UoYGRhcmstdGhlbWVgLCBgbGlnaHQtdGhlbWVgKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGB1c3Rhd2lhbSBjaWVtbmUgdGhlbWVgKTtcclxuICAgICAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKGB0aGVtZWAsIGBkYXJrLXRoZW1lYCk7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlcGxhY2UoYGxpZ2h0LXRoZW1lYCwgYGRhcmstdGhlbWVgKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cclxuY29uc3QgdG9nZ2xlU3dpdGNoID0gbmV3IFRvZ2dsZVN3aXRjaCgpO1xyXG50b2dnbGVTd2l0Y2gudG9nZ2xlLmFkZEV2ZW50TGlzdGVuZXIoYGNsaWNrYCwgdG9nZ2xlU3dpdGNoLnNldFRoZW1lKTtcclxuXHJcbigoKSA9PiB7XHJcbiAgICBjb25zdCBhY3R1YWxUaGVtZSA9IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShgdGhlbWVgKTtcclxuICAgIGNvbnNvbGUubG9nKGFjdHVhbFRoZW1lKTtcclxuXHJcbiAgICBpZiAoYWN0dWFsVGhlbWUgPT09IGBkYXJrLXRoZW1lYCkge1xyXG4gICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShgdGhlbWVgLCBgZGFyay10aGVtZWApO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGBjaWVtbmUgdGhlbWVgKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKGB0aGVtZWAsIGBsaWdodC10aGVtZWApO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGBqYXNuZSB0aGVtZWApO1xyXG5cclxuICAgIH1cclxuICAgIHRvZ2dsZVN3aXRjaC5zZXRUaGVtZSgpO1xyXG59KSgpIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiNmIyMTM1YTYxNjAxZDAwZWMwODdcIikiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=