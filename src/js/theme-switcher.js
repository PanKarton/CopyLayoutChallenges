class ThemeSwitcher {
    constructor(calculator, switcher, numbers) {
        this.calculator = document.querySelector(`[data-calculator]`);
        this.switcher = document.querySelector(`[data-switcher]`);
        // this.numbers = [...document.querySelectorAll(`[data-number]`)];
        this.numbers = [...document.querySelectorAll(`[data-number]`)];
    }
    getIndex = number => this.numbers.indexOf(number);
    getTheme = index => {
        switch (index) {
            case 0:
                return `blue-theme`;
                break;
            case 1:
                return `light-theme`;
                break;
            case 2:
                return `purple-theme`
                break;
        }
    }
    setThemeInStorage = theme => {
        window.localStorage.setItem(`theme`, theme);
    }
    changeTheme = number => {
        const index = this.getIndex(number);
        const newTheme = this.getTheme(index);
        this.setThemeInStorage(newTheme);
        this.calculator.className = ``;
        this.calculator.classList.add(newTheme);
    }

}
const themeSwitcher = new ThemeSwitcher();

themeSwitcher.numbers.forEach(number => {
    number.addEventListener(`click`, () => {
        themeSwitcher.changeTheme(number);
    })
});

// set theme right after page load
(() => {
    const actualTheme = window.localStorage.getItem(`theme`);
    if (actualTheme === `purple-theme`) {
        console.log(`purple`);
    } else if (actualTheme === `light-theme`) {
        console.log(`light`);
    } else {
        console.log(`blue`);
    }
})()