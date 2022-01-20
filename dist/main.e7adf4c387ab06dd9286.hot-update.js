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
            console.log(`dzialam1`)
            window.localStorage.setItem(`theme`, `light-theme`);
            this.setTheme(`light-theme`, `dark-theme`);
        } else {
            console.log(`dzialam2`)
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
/******/ 	__webpack_require__.h = () => ("415a80c342f98164ba49")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5lN2FkZjRjMzg3YWIwNmRkOTI4Ni5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7O1VDcENEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGF5b3V0Y2hhbGxlbmdlcy8uL3NyYy9jb21wb25lbnRzL3RvZ2dsZS1zd2l0Y2gtY29tcG9uZW50L3RvZ2dsZS1zd2l0Y2gtY29tcG9uZW50LmpzIiwid2VicGFjazovL2xheW91dGNoYWxsZW5nZXMvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFRvZ2dsZVN3aXRjaCB7XHJcbiAgICBjb25zdHJ1Y3Rvcih0b2dnbGUpIHtcclxuICAgICAgICB0aGlzLnRvZ2dsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXRvZ2dsZS1zd2l0Y2hdYCk7XHJcbiAgICB9XHJcbiAgICB0b2dnbGVUaGVtZSA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCB0aGVtZSA9IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShgdGhlbWVgKTtcclxuICAgICAgICBpZiAodGhlbWUgPT09IGBkYXJrLXRoZW1lYCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgZHppYWxhbTFgKVxyXG4gICAgICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oYHRoZW1lYCwgYGxpZ2h0LXRoZW1lYCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0VGhlbWUoYGxpZ2h0LXRoZW1lYCwgYGRhcmstdGhlbWVgKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgZHppYWxhbTJgKVxyXG4gICAgICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oYHRoZW1lYCwgYGRhcmstdGhlbWVgKTtcclxuICAgICAgICAgICAgdGhpcy5zZXRUaGVtZShgZGFyay10aGVtZWAsIGBsaWdodC10aGVtZWApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHNldFRoZW1lID0gKG5ld1RoZW1lLCBwcmV2VGhlbWUpID0+IHtcclxuICAgICAgICBpZiAocHJldlRoZW1lID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQocHJldlRoZW1lKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVwbGFjZShwcmV2VGhlbWUsIG5ld1RoZW1lKTtcclxuICAgIH1cclxuXHJcblxyXG59XHJcbmNvbnN0IHRvZ2dsZVN3aXRjaCA9IG5ldyBUb2dnbGVTd2l0Y2goKTtcclxudG9nZ2xlU3dpdGNoLnRvZ2dsZS5hZGRFdmVudExpc3RlbmVyKGBjbGlja2AsIHRvZ2dsZVN3aXRjaC50b2dnbGVUaGVtZSk7XHJcblxyXG4oKCkgPT4ge1xyXG4gICAgY29uc3QgYWN0dWFsVGhlbWUgPSB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oYHRoZW1lYCk7XHJcbiAgICBpZiAoYWN0dWFsVGhlbWUgPT09IGBkYXJrLXRoZW1lYCkge1xyXG4gICAgICAgIHRvZ2dsZVN3aXRjaC5zZXRUaGVtZShuZXdUaGVtZSA9IGBkYXJrLXRoZW1lYCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShgdGhlbWVgLCBgbGlnaHQtdGhlbWVgKTtcclxuICAgICAgICB0b2dnbGVTd2l0Y2guc2V0VGhlbWUobmV3VGhlbWUgPSBgbGlnaHQtdGhlbWVgKTtcclxuICAgIH1cclxufSkoKSIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjQxNWE4MGMzNDJmOTgxNjRiYTQ5XCIpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9