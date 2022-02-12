import './scss/style.scss';
import '../index.html';

// Modules
import Rules from './js/rules';
import Game from './js/game';
// Rules
const showRulesButton = document.querySelector(`[data-btn-show-rules]`);
const hideRulesButton = document.querySelector(`[data-btn-hide-rules]`);
const rulesButtons = [showRulesButton, hideRulesButton];
const rulesSheet = document.querySelector(`[data-rules-sheet]`);
const rules = new Rules(rulesSheet);

rulesButtons.forEach((button) => {
  button.addEventListener(`click`, () => {
    rules.toggleRulesSheet();
  });
});

// Game
const choiceTokens = [...document.querySelectorAll(`[data-choice-token]`)];
const choicePicker = document.querySelector(`[data-choice-picker]`);
const choicesComparisonBoard = document.querySelector(`[data-comparison-board]`);
const playerChoiceContainer = document.querySelector(`[data-player-choice-container]`);
const cpuChoiceContainer = document.querySelector(`[data-cpu-choice-container]`);
const resultWrapper = document.querySelector(`[data-result-wrapper]`);
const result = document.querySelector(`[data-result]`);
const winsSpan = document.querySelector(`[data-wins]`);
const lossesSpan = document.querySelector(`[data-losses]`);
const drawsSpan = document.querySelector(`[data-draws]`);
const playAgainBtn = document.querySelector(`[data-play-again-btn]`);

const game = new Game(
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
);

choiceTokens.forEach((token) => {
  token.addEventListener(`click`, () => {
    game.setPlayerChoice(token.dataset.choiceToken);
    game.setCpuChoice();
    game.updatePlayerChoiceContainer();
    game.updateCpuChoiceContainer();
    game.toggleChoicePicker();
    game.toggleChoicesComparisonBoard();
    game.toggleResult();
    game.updateScore();
  });
});

playAgainBtn.addEventListener(`click`, () => {
  game.toggleChoicesComparisonBoard();
  game.toggleChoicePicker();
  game.toggleResult();
  game.removeOldTokens();
});
