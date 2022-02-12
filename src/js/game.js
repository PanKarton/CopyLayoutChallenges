class Game {
  constructor(
    choiceTokens,
    choicePicker,
    choicesComparisonBoard,
    playerChoiceContainer,
    cpuChoiceContainer,
    result,
    resultWrapper,
    winsSpan,
    lossesSpan,
    drawsSpan,
  ) {
    this.choiceTokens = choiceTokens;
    this.playerChoice = '';
    this.cpuChoice = '';
    this.choicePicker = choicePicker;
    this.choicesComparisonBoard = choicesComparisonBoard;
    this.playerChoiceContainer = playerChoiceContainer;
    this.cpuChoiceContainer = cpuChoiceContainer;
    this.result = result;
    this.resultWrapper = resultWrapper;
    this.winsSpan = winsSpan;
    this.lossesSpan = lossesSpan;
    this.drawsSpan = drawsSpan;
    this.wins = 0;
    this.losses = 0;
    this.draws = 0;
  }
  setPlayerChoice = (choice) => {
    this.playerChoice = choice;
  };
  setCpuChoice = () => {
    this.cpuChoice = Math.floor(Math.random() * 5).toString();
  };
  updatePlayerChoiceContainer = () => {
    const newToken = this.getTokenByDataNumber(this.playerChoice).cloneNode(true);
    this.playerChoiceContainer.append(newToken);
  };
  updateCpuChoiceContainer = () => {
    const newToken = this.getTokenByDataNumber(this.cpuChoice).cloneNode(true);
    this.cpuChoiceContainer.append(newToken);
  };
  getTokenByDataNumber = (number) => {
    let newToken = null;
    this.choiceTokens.forEach((token) => {
      if (token.dataset.choiceToken === number) {
        return (newToken = token);
      }
    });
    return newToken;
  };
  getClassName = (choice) => {
    switch (choice) {
      case '0':
        return `scissors`;
        break;
      case '1':
        return `paper`;
        break;
      case '2':
        return `rock`;
        break;
      case '3':
        return `lizard`;
        break;
      case '4':
        return `spock`;
        break;
    }
  };
  toggleChoicePicker = () => {
    this.choicePicker.classList.toggle(`picker--hidden`);
  };
  toggleChoicesComparisonBoard = () => {
    this.choicesComparisonBoard.classList.toggle(`choices-comparison--hidden`);
  };
  getResult = () => {
    const x = parseInt(this.playerChoice);
    const y = parseInt(this.cpuChoice);

    if (x === y) {
      return `draw`;
    }
    let tempY = y - 1;
    tempY === -1 ? (tempY = 4) : ``;
    if (x === tempY) {
      return `win`;
    }
    tempY = y + 2;
    tempY >= 5 ? (tempY = tempY - 5) : ``;
    if (x === tempY) {
      return `win`;
    }
    return `lose`;
  };
  toggleResult = () => {
    this.result.textContent = this.getResult();
    this.resultWrapper.classList.toggle(`choices-comparison__result-container--hidden`);
  };
  updateScore = () => {
    const result = this.getResult();
    switch (result) {
      case `win`:
        this.wins += 1;
        break;
      case `lose`:
        this.losses += 1;
        break;
      case `draw`:
        this.draws += 1;
        break;
    }
    this.winsSpan.textContent = this.wins;
    this.lossesSpan.textContent = this.losses;
    this.drawsSpan.textContent = this.draws;
  };
  removeOldTokens = () => {
    this.playerChoiceContainer.removeChild(this.playerChoiceContainer.lastChild);
    this.cpuChoiceContainer.removeChild(this.cpuChoiceContainer.lastChild);
  };
}

export default Game;
