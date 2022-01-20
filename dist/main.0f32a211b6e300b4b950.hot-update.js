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
            this.setTheme(`light-theme`, `dark-theme`);
        } else {
            window.localStorage.setItem(`theme`, `dark-theme`);
            this.setTheme(`dark-theme`, `light-theme`);
        }
    }
    setTheme = (newTheme, prevTheme) => {
        if (prevTheme == undefined) {
            document.body.classList.add(prevTheme);
        }
        document.body.classList.replace(prevTheme, newTheme);
    }


}
const toggleSwitch = new ToggleSwitch();
toggleSwitch.toggle.addEventListener(`click`, toggleSwitch.toggleTheme);

(() => {
    const actualTheme = window.localStorage.getItem(`theme`);
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
/******/ 	__webpack_require__.h = () => ("0e8e42fb5403408c5779")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4wZjMyYTIxMWI2ZTMwMGI0Yjk1MC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7VUNsQ0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sYXlvdXRjaGFsbGVuZ2VzLy4vc3JjL2NvbXBvbmVudHMvdG9nZ2xlLXN3aXRjaC1jb21wb25lbnQvdG9nZ2xlLXN3aXRjaC1jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vbGF5b3V0Y2hhbGxlbmdlcy93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgVG9nZ2xlU3dpdGNoIHtcclxuICAgIGNvbnN0cnVjdG9yKHRvZ2dsZSkge1xyXG4gICAgICAgIHRoaXMudG9nZ2xlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtdG9nZ2xlLXN3aXRjaF1gKTtcclxuICAgIH1cclxuICAgIHRvZ2dsZVRoZW1lID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHRoZW1lID0gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKGB0aGVtZWApO1xyXG4gICAgICAgIGlmICh0aGVtZSA9PT0gYGRhcmstdGhlbWVgKSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShgdGhlbWVgLCBgbGlnaHQtdGhlbWVgKTtcclxuICAgICAgICAgICAgdGhpcy5zZXRUaGVtZShgbGlnaHQtdGhlbWVgLCBgZGFyay10aGVtZWApO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShgdGhlbWVgLCBgZGFyay10aGVtZWApO1xyXG4gICAgICAgICAgICB0aGlzLnNldFRoZW1lKGBkYXJrLXRoZW1lYCwgYGxpZ2h0LXRoZW1lYCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgc2V0VGhlbWUgPSAobmV3VGhlbWUsIHByZXZUaGVtZSkgPT4ge1xyXG4gICAgICAgIGlmIChwcmV2VGhlbWUgPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZChwcmV2VGhlbWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZXBsYWNlKHByZXZUaGVtZSwgbmV3VGhlbWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbn1cclxuY29uc3QgdG9nZ2xlU3dpdGNoID0gbmV3IFRvZ2dsZVN3aXRjaCgpO1xyXG50b2dnbGVTd2l0Y2gudG9nZ2xlLmFkZEV2ZW50TGlzdGVuZXIoYGNsaWNrYCwgdG9nZ2xlU3dpdGNoLnRvZ2dsZVRoZW1lKTtcclxuXHJcbigoKSA9PiB7XHJcbiAgICBjb25zdCBhY3R1YWxUaGVtZSA9IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShgdGhlbWVgKTtcclxuICAgIGlmIChhY3R1YWxUaGVtZSA9PT0gYGRhcmstdGhlbWVgKSB7XHJcbiAgICAgICAgdG9nZ2xlU3dpdGNoLnNldFRoZW1lKG5ld1RoZW1lID0gYGRhcmstdGhlbWVgKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKGB0aGVtZWAsIGBsaWdodC10aGVtZWApO1xyXG4gICAgICAgIHRvZ2dsZVN3aXRjaC5zZXRUaGVtZShuZXdUaGVtZSA9IGBsaWdodC10aGVtZWApO1xyXG4gICAgfVxyXG59KSgpIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiMGU4ZTQyZmI1NDAzNDA4YzU3NzlcIikiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=