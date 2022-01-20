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
                console.log(`poprzednie: ${theme}`)
                window.localStorage.setItem(`theme`, `light-theme`);
                console.log(`nowe: ${window.localStorage.getItem(`theme`)}`)
            this.setTheme(`light-theme`, `dark-theme`);
        } else {
            console.log(`poprzednie: ${theme}`)
            window.localStorage.setItem(`theme`, `dark-theme`);
            console.log(`nowe: ${window.localStorage.getItem(`theme`)}`)
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
/******/ 	__webpack_require__.h = () => ("0f32a211b6e300b4b950")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4xYjE4ZjVjMjUzMjBiMzhhZGM2NC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsTUFBTTtBQUNqRDtBQUNBLHFDQUFxQyxxQ0FBcUM7QUFDMUU7QUFDQSxVQUFVO0FBQ1YsdUNBQXVDLE1BQU07QUFDN0M7QUFDQSxpQ0FBaUMscUNBQXFDO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7O1VDdENEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGF5b3V0Y2hhbGxlbmdlcy8uL3NyYy9jb21wb25lbnRzL3RvZ2dsZS1zd2l0Y2gtY29tcG9uZW50L3RvZ2dsZS1zd2l0Y2gtY29tcG9uZW50LmpzIiwid2VicGFjazovL2xheW91dGNoYWxsZW5nZXMvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFRvZ2dsZVN3aXRjaCB7XHJcbiAgICBjb25zdHJ1Y3Rvcih0b2dnbGUpIHtcclxuICAgICAgICB0aGlzLnRvZ2dsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXRvZ2dsZS1zd2l0Y2hdYCk7XHJcbiAgICB9XHJcbiAgICB0b2dnbGVUaGVtZSA9ICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgdGhlbWUgPSB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oYHRoZW1lYCk7XHJcbiAgICAgICAgICAgIGlmICh0aGVtZSA9PT0gYGRhcmstdGhlbWVgKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgcG9wcnplZG5pZTogJHt0aGVtZX1gKVxyXG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKGB0aGVtZWAsIGBsaWdodC10aGVtZWApO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYG5vd2U6ICR7d2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKGB0aGVtZWApfWApXHJcbiAgICAgICAgICAgIHRoaXMuc2V0VGhlbWUoYGxpZ2h0LXRoZW1lYCwgYGRhcmstdGhlbWVgKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgcG9wcnplZG5pZTogJHt0aGVtZX1gKVxyXG4gICAgICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oYHRoZW1lYCwgYGRhcmstdGhlbWVgKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYG5vd2U6ICR7d2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKGB0aGVtZWApfWApXHJcbiAgICAgICAgICAgIHRoaXMuc2V0VGhlbWUoYGRhcmstdGhlbWVgLCBgbGlnaHQtdGhlbWVgKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBzZXRUaGVtZSA9IChuZXdUaGVtZSwgcHJldlRoZW1lKSA9PiB7XHJcbiAgICAgICAgaWYgKHByZXZUaGVtZSA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKHByZXZUaGVtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlcGxhY2UocHJldlRoZW1lLCBuZXdUaGVtZSk7XHJcbiAgICB9XHJcblxyXG5cclxufVxyXG5jb25zdCB0b2dnbGVTd2l0Y2ggPSBuZXcgVG9nZ2xlU3dpdGNoKCk7XHJcbnRvZ2dsZVN3aXRjaC50b2dnbGUuYWRkRXZlbnRMaXN0ZW5lcihgY2xpY2tgLCB0b2dnbGVTd2l0Y2gudG9nZ2xlVGhlbWUpO1xyXG5cclxuKCgpID0+IHtcclxuICAgIGNvbnN0IGFjdHVhbFRoZW1lID0gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKGB0aGVtZWApO1xyXG4gICAgaWYgKGFjdHVhbFRoZW1lID09PSBgZGFyay10aGVtZWApIHtcclxuICAgICAgICB0b2dnbGVTd2l0Y2guc2V0VGhlbWUobmV3VGhlbWUgPSBgZGFyay10aGVtZWApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oYHRoZW1lYCwgYGxpZ2h0LXRoZW1lYCk7XHJcbiAgICAgICAgdG9nZ2xlU3dpdGNoLnNldFRoZW1lKG5ld1RoZW1lID0gYGxpZ2h0LXRoZW1lYCk7XHJcbiAgICB9XHJcbn0pKCkiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIwZjMyYTIxMWI2ZTMwMGI0Yjk1MFwiKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==