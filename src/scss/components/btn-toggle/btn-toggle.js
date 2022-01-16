class BtnToggle {
    constructor(btn, pLeft, pRight) {
        this.btn = document.querySelector(`.btn-toggle > input[type="checkbox"]`);
        this.pLeft = document.querySelector(`[data-monthly]`);
        this.pRight = document.querySelector(`[data-yearly]`);
    }
    togglePlan = () => {
        this.pLeft.classList.toggle(`active`);
        this.pRight.classList.toggle(`active`);
    }
}

const btnToggle = new BtnToggle();
btnToggle.btn.addEventListener(`click`, btnToggle.togglePlan);