export default class ThemeSwitcher {
    constructor(calculator, switcher) {
        this.calculator = calculator;
        this.switcher = switcher;

    }
    getIndex = (number, array) => array.indexOf(number);
    getThemeName = index => {
        switch (index) {
            case 0:
                return `blue-theme`;
            case 1:
                return `light-theme`;
            case 2:
                return `purple-theme`
        }
    }
    setThemeInStorage = theme => {
        window.localStorage.setItem(`theme`, theme);
    }
    changeTheme = (number, array) => {
        const index = this.getIndex(number, array);
        const newTheme = this.getThemeName(index);
        this.setThemeInStorage(newTheme);
        this.calculator.className = ``;
        this.calculator.classList.add(newTheme);
    }
    changeThemeFromStorage = theme => {
        // set theme if it's first visit on website
        if (window.localStorage.getItem(`theme`) === null) {
            window.localStorage.setItem(`theme`, theme);
        }
        const newTheme = window.localStorage.getItem('theme');
        this.calculator.classList.add(newTheme);
    }

}