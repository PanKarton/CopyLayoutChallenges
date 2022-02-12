export default class Rules {
  constructor(rulesSheet) {
    this.rulesSheet = rulesSheet;
  }
  toggleRulesSheet = () => {
    this.rulesSheet.classList.toggle(`rules--hidden`);
  };
}
