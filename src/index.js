import './scss/style.scss';
import '../index.html';
// js modules
import Calculator from './js/calculator';
import ThemeSwitcher from './js/theme-switcher';



// ---------------------------------------------
// ============== calculator ===================
// ---------------------------------------------


// displays
const previousOperand = document.querySelector(`[data-prev-operand]`);
const currentOperand = document.querySelector(`[data-current-operand]`);
// buttons
const resetBtn = document.querySelector(`[data-reset]`);
const equalsBtn = document.querySelector(`[data-equals]`);
const deleteBtn = document.querySelector(`[data-delete]`);
const numberBtns = [...document.querySelectorAll(`[data-number]`)];
const operationBtns = [...document.querySelectorAll(`[data-operation]`)];
const allButtons = [resetBtn, equalsBtn, deleteBtn, ...numberBtns, ...operationBtns];

const calculator = new Calculator(previousOperand, currentOperand);

// push button effect
allButtons.forEach(button => {
    button.addEventListener(`mousedown`, event => {
        calculator.toggleButtonState(event.currentTarget);
    });
    button.addEventListener(`mouseup`, event => {
        calculator.toggleButtonState(event.currentTarget);
    });
});

// add char
numberBtns.forEach(number => {
    number.addEventListener(`click`, event => {
        calculator.appendChar(event.currentTarget.textContent);
        calculator.updateDisplay();
    })
});

// delete last char 
deleteBtn.addEventListener(`click`, () => {
    calculator.deleteLastChar();
    calculator.updateDisplay();
});

// delete all
resetBtn.addEventListener(`click`, () => {
    calculator.clear();
    calculator.updateDisplay();
});

//add operation
operationBtns.forEach(operation => {
    operation.addEventListener(`click`, event => {
        calculator.addOperation(event.currentTarget.textContent);
        calculator.updateDisplay();
    })
});
equalsBtn.addEventListener(`click`, () => {
    calculator.showResult();
    calculator.updateDisplay();
});


// ---------------------------------------------
// ============== calculator ===================
// ---------------------------------------------



const numbers = [...document.querySelectorAll(`[data-theme-number]`)];
const hitboxes = [...document.querySelectorAll(`[data-switcher-hitbox]`)];

const calculatorModule = document.querySelector(`[data-calculator]`);
const switcher = document.querySelector(`[data-switcher]`);

const themeSwitcher = new ThemeSwitcher(calculatorModule, switcher);

// set theme 
numbers.forEach(number => {
    number.addEventListener(`click`, () => {
        themeSwitcher.changeTheme(number, numbers);
    })
});
// switch is covered with 3 identical, transparent squares that work as hitbox to change theme if we want to click on `stadium shape` thing. Each index in array represents theme
hitboxes.forEach(hitbox => {
    hitbox.addEventListener(`click`, () => {
        themeSwitcher.changeTheme(hitbox, hitboxes);
    })
});

// set theme right after page load
(() => {
    const actualTheme = window.localStorage.getItem(`theme`);
    if (actualTheme === `purple-theme`) {
        themeSwitcher.changeThemeFromStorage(`purple-theme`);
    } else if (actualTheme === `light-theme`) {
        themeSwitcher.changeThemeFromStorage(`light-theme`);
    } else {
        themeSwitcher.changeThemeFromStorage(`blue-theme`);
    }
})()