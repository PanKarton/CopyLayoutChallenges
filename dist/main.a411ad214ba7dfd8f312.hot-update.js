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

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("2fb62c039069523ac1a6")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5hNDExYWQyMTRiYTdkZmQ4ZjMxMi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7O1VDdENEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGF5b3V0Y2hhbGxlbmdlcy8uL3NyYy9jb21wb25lbnRzL3RvZ2dsZS1zd2l0Y2gtY29tcG9uZW50L3RvZ2dsZS1zd2l0Y2gtY29tcG9uZW50LmpzIiwid2VicGFjazovL2xheW91dGNoYWxsZW5nZXMvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFRvZ2dsZVN3aXRjaCB7XHJcbiAgICBjb25zdHJ1Y3Rvcih0b2dnbGUpIHtcclxuICAgICAgICB0aGlzLnRvZ2dsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXRvZ2dsZS1zd2l0Y2hdYCk7XHJcbiAgICB9XHJcbiAgICB0b2dnbGVUaGVtZSA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCB0aGVtZSA9IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShgdGhlbWVgKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGVtZSlcclxuICAgICAgICBpZiAodGhlbWUgPT09IGBkYXJrLXRoZW1lYCkge1xyXG4gICAgICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oYHRoZW1lYCwgYGxpZ2h0LXRoZW1lYCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0VGhlbWUoYGxpZ2h0LXRoZW1lYCwgYGRhcmstdGhlbWVgKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oYHRoZW1lYCwgYGRhcmstdGhlbWVgKTtcclxuICAgICAgICAgICAgdGhpcy5zZXRUaGVtZShgZGFyay10aGVtZWAsIGBsaWdodC10aGVtZWApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHNldFRoZW1lID0gKG5ld1RoZW1lLCBwcmV2VGhlbWUpID0+IHtcclxuICAgICAgICBpZiAocHJldlRoZW1lID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQobmV3VGhlbWUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlcGxhY2UocHJldlRoZW1lLCBuZXdUaGVtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbn1cclxuY29uc3QgdG9nZ2xlU3dpdGNoID0gbmV3IFRvZ2dsZVN3aXRjaCgpO1xyXG50b2dnbGVTd2l0Y2gudG9nZ2xlLmFkZEV2ZW50TGlzdGVuZXIoYGNsaWNrYCwgdG9nZ2xlU3dpdGNoLnRvZ2dsZVRoZW1lKTtcclxuXHJcbigoKSA9PiB7XHJcbiAgICBjb25zdCBhY3R1YWxUaGVtZSA9IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShgdGhlbWVgKTtcclxuICAgIGNvbnNvbGUubG9nKGAxYClcclxuXHJcbiAgICBpZiAoYWN0dWFsVGhlbWUgPT09IGBkYXJrLXRoZW1lYCkge1xyXG4gICAgICAgIHRvZ2dsZVN3aXRjaC5zZXRUaGVtZShuZXdUaGVtZSA9IGBkYXJrLXRoZW1lYCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShgdGhlbWVgLCBgbGlnaHQtdGhlbWVgKTtcclxuICAgICAgICB0b2dnbGVTd2l0Y2guc2V0VGhlbWUobmV3VGhlbWUgPSBgbGlnaHQtdGhlbWVgKTtcclxuICAgIH1cclxufSkoKSIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjJmYjYyYzAzOTA2OTUyM2FjMWE2XCIpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9