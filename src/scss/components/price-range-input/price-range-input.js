class PriceRangeInput {
    constructor(thumb, slider) {
        this.slider = document.querySelector(`input[type="range"].price-range-input`);
    }
    updateBackground = () => {
        const value = this.slider.value;
        // Updates var every time that slider moves, var is a division in linear gradient  
        this.slider.style.setProperty(`--thumbPosition`, value);
    }
}
const x = new PriceRangeInput()
x.slider.addEventListener(`input`, x.updateBackground);