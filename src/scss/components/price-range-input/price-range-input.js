class PriceRangeInput {
    constructor(thumb, slider) {
        this.slider = document.querySelector(`input[type="range"].price-range-input`);
        this.priceDisplay = document.querySelector(`.window__price  .dolars`);
    }
    updateBackground = () => {
        const value = this.slider.value;
        // Updates var every time that slider moves, var is a division in linear gradient  
        this.slider.style.setProperty(`--thumbPosition`, value);
    }
    updatePriceDisplay = () => {
        const value = this.slider.value;
        this.priceDisplay.textContent = value;
    }
}
const slider = new PriceRangeInput()
slider.slider.addEventListener(`input`, () => {
    slider.updateBackground();
    slider.updatePriceDisplay();
});

console.log(slider.priceDisplay);