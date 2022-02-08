class Countdown {
  constructor(daysContainer, hoursContainer, minutesContainer, secondsContainer, finalDate) {
    // Container
    this.daysContainer = daysContainer;
    this.hoursContainer = hoursContainer;
    this.minutesContainer = minutesContainer;
    this.secondsContainer = secondsContainer;
    // Final date
    this.finalDate = finalDate;
    // First update flag
    this.flag = false;
    // Prev values
    this.prevSec = ``;
    this.prevMin = ``;
    this.prevHour = ``;
    this.prevDay = ``;
  }

  runClock = () => {
    // Get current date and compute time gap
    const currentDate = new Date().getTime();
    const timeGap = this.finalDate - currentDate;
    // Stop when timer shows 0:0:0:0
    if (timeGap >= 0) {
      // Set time units
      const now = {
        sec: Math.floor((timeGap / 1000) % 60),
        min: Math.floor((timeGap / (1000 * 60)) % 60),
        hour: Math.floor((timeGap / (1000 * 60 * 60)) % 24),
        day: Math.floor(timeGap / (1000 * 60 * 60 * 24)),
      };

      this.checkIfFlipNeeden(now);
      this.updatePrevValues(now);

      // Recurency, invoke yourself after 1sec
      setTimeout(() => {
        this.runClock();
      }, 1000);
    }
  };

  // If unit is not the same as before, flip it
  checkIfFlipNeeden = ({ sec, min, hour, day }) => {
    if (this.prevDay !== day) this.flip(this.daysContainer, day);
    if (this.prevHour !== hour) this.flip(this.hoursContainer, hour);
    if (this.prevMin !== min) this.flip(this.minutesContainer, min);
    if (this.prevSec !== sec) this.flip(this.secondsContainer, sec);
  };

  // We need prev values to check if unit has changed
  updatePrevValues = ({ sec, min, hour, day }) => {
    this.prevSec = sec;
    this.prevMin = min;
    this.prevHour = hour;
    this.prevDay = day;
  };

  // Freez function for X ms because we want to remove flip cards after they flip
  sleep = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  flip = (card, currNumber) => {
    // Create next number to prepare hidden
    const nextNumber = this.getNextNumber(card, currNumber);
    // Get flip cards
    const frontCard = card.querySelector(`span.timer__flip-front`);
    const backCard = card.querySelector(`span.timer__flip-back`);
    // Flip those cards
    frontCard.classList.add(`flipped`); // Front goes 90deg
    backCard.classList.add(`unflipped`); // Back goes down
    // Wait for flip to get done
    this.sleep(300).then(() => {
      // Update pseudo elements before and after
      card.setAttribute(`data-number-before`, nextNumber); // Before
      card.setAttribute(`data-number-after`, currNumber); // After

      // Unflip cards
      frontCard.classList.remove(`flipped`); // Front goes 90deg
      backCard.classList.remove(`unflipped`); // Back goes down

      // Set new values to cards
      frontCard.textContent = currNumber;
      backCard.textContent = nextNumber;

      // this.createNewFlipCards(card, currNumber, nextNumber); // Zrób karty
    });
  };

  getNextNumber = (card, currNumber) => {
    if (`days` in card.dataset) {
      // Update day
      --currNumber < 0 ? (currNumber = 0) : ``;
    } else if (`hours` in card.dataset) {
      // Update hour
      --currNumber < 0 ? (currNumber = 23) : ``;
    } else if (`minutes` in card.dataset || `seconds` in card.dataset) {
      // Update min / sec
      --currNumber < 0 ? (currNumber = 59) : ``;
    }
    return currNumber;
  };

  // removeFlippedCards = (card) => {
  //   // Remove flipped cards
  //   card.querySelector(`span.timer__flip-front`).remove();
  //   card.querySelector(`span.timer__flip-back`).remove();
  // };

  // createNewFlipCards = (card, currNumber, nextNumber) => {
  //   // Create front card
  //   const newFront = document.createElement(`span`);
  //   newFront.classList.add(`timer__flip-front`);
  //   newFront.textContent = currNumber;
  //   // Create back card
  //   const newBack = document.createElement(`span`);
  //   newBack.classList.add(`timer__flip-back`, `flipped`);
  //   newBack.textContent = nextNumber;
  //   // Append Cards
  //   card.append(newFront, newBack);
  // };
}

export default Countdown;
