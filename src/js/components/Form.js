export default class Form {
  constructor({ formElement, moneyScale, riskMatrix }) {
    // assign
    this.formElement = formElement;
    this._moneyScale = moneyScale;
    this._riskMatrix = riskMatrix;

    // select all dropdown elements
    this._questionElements = this.formElement.querySelectorAll(
      ".question__dropdown"
    );

    // select money amount input element
    this.inputElement = this.formElement.querySelector(".question__input-text");
    this.supportLevelElement = this.formElement.querySelector(".support-level");

    // event listener
    this.inputElement.addEventListener("input", this._formatInput);

    // console.log(this._questionElements, this.inputElement);
  }

  _formatInput(event) {
    event.target.value = event.target.value
      .replace(/[^\dA-Z]/g, "")
      .replace(/(\d)(?=(\d{3})+$)/g, "$1 ")
      .trim();
  }

  getAnswers() {
    this._answers = [];
    this._questionElements.forEach((question) =>
      this._answers.push(question.selectedIndex)
    );

    this.helpRequestString = this.supportLevelElement.options[
      this.supportLevelElement.selectedIndex
    ].text;
  }

  getInvestmentAmount() {
    this._getCurrency();

    this.investmentAmount =
      +this.inputElement.value.replace(/\s/g, "") >=
      10000 * this.prices[this.currency]
        ? +this.inputElement.value.replace(/\s/g, "")
        : 10000 * this.prices[this.currency];

    this.investmentAmountRubbles =
      this.investmentAmount / this.prices[this.currency];
  }

  updatePrices(prices) {
    this.prices = {
      dollar: prices["USD"],
      euro: prices["EUR"],
      ruble: 1,
    };
  }

  getFilter() {
    this.filterList = [...this._filterElement.querySelectorAll("label")]
      .filter((element) => {
        return element.querySelector("input").checked;
      })
      .map((element) => element.innerText);
  }

  assignRiskProfile() {
    this.riskProfiles = [
      +this._riskMatrix[this._answers[2]][this._answers[0]],
      +this._riskMatrix[this._answers[2]][this._answers[0]] < 7
        ? +this._riskMatrix[this._answers[2]][this._answers[0]] + 1
        : +this._riskMatrix[this._answers[2]][this._answers[0]],
    ];

    // console.log(this.riskProfiles);
  }

  assignPortfolioKeys() {
    this.portfolioKeys = this.riskProfiles.map(
      (profile) =>
        profile +
        Object.keys(this._moneyScale)
          .reverse()
          .find((key) => this._moneyScale[key] <= this.investmentAmountRubbles)
    );
  }

  assignDueDate() {
    switch (this._answers[3]) {
      case 0:
        this.dueDate = new Date(
          new Date().setFullYear(new Date().getFullYear() + 1)
        );
        break;
      case 1:
        this.dueDate = new Date(
          new Date().setFullYear(new Date().getFullYear() + 2)
        );
        break;
      case 2:
      default:
        this.dueDate = new Date(
          new Date().setFullYear(new Date().getFullYear() + 100)
        );
    }
  }

  _getCurrency() {
    switch (this._answers[1]) {
      case 0:
        this.currency = "ruble";
        this.isCurrency = false;
        break;
      case 1:
        this.currency = "dollar";
        this.isCurrency = true;
        break;
      case 2:
        this.currency = "euro";
        this.isCurrency = true;
        break;
    }
  }

  createFilter() {
    const filterArray = ["СП", "ВФА", "УК", "МП"];

    this._filterElement = document.createElement("fieldset");
    this._filterElement.classList.add("question", "filter");

    const filterLegentElement = document.createElement("legend");
    filterLegentElement.classList.add("question__text");
    filterLegentElement.textContent = "Фильтр";
    this._filterElement.appendChild(filterLegentElement);

    filterArray.forEach((element, index) => {
      const filterInputElement = document.createElement("input");
      filterInputElement.classList.add("question__checkbox");
      filterInputElement.type = "checkbox";
      filterInputElement.id = index;

      const filterLabelElement = document.createElement("label");
      filterLabelElement.classList.add(
        "question__label",
        "question__label_not-selected"
      );
      filterLabelElement.htmlFor = index;
      filterLabelElement.textContent = element;

      filterLabelElement.appendChild(filterInputElement);
      this._filterElement.appendChild(filterLabelElement);
    });

    this.formElement.insertBefore(
      this._filterElement,
      this.formElement.querySelector(".question")
    );

    this.formElement.querySelectorAll(".question__label").forEach((element) => {
      element.style.width = `calc((100% - ${18 * filterArray.length}px) / ${
        filterArray.length
      })`;
    });
  }

  updateFilter(event) {
    event.target.classList.toggle("question__label_selected");
    event.target.classList.toggle("question__label_not-selected");
  }

  manageFilterState() {
    const filterButtonsElementsList = [
      ...this._filterElement.querySelectorAll(".question__label"),
    ];

    switch ([...this._questionElements][4].selectedIndex) {
      case 0:
        filterButtonsElementsList.forEach(this._unpressFilterButton);
        break;
      case 1:
        this._pressFilterButton(filterButtonsElementsList[0]);
        this._unpressFilterButton(filterButtonsElementsList[1]);
        this._pressFilterButton(filterButtonsElementsList[2]);
        this._unpressFilterButton(filterButtonsElementsList[3]);
        break;
      case 2:
        this._unpressFilterButton(filterButtonsElementsList[0]);
        this._pressFilterButton(filterButtonsElementsList[1]);
        this._unpressFilterButton(filterButtonsElementsList[2]);
        this._pressFilterButton(filterButtonsElementsList[3]);
        break;
      case 3:
        this._unpressFilterButton(filterButtonsElementsList[0]);
        this._pressFilterButton(filterButtonsElementsList[1]);
        this._pressFilterButton(filterButtonsElementsList[2]);
        this._pressFilterButton(filterButtonsElementsList[3]);
        break;
    }
  }

  _unpressFilterButton(element) {
    element.querySelector("input").checked = false;
    element.classList.remove("question__label_selected");
    element.classList.add("question__label_not-selected");
  }

  _pressFilterButton(element) {
    element.querySelector("input").checked = true;
    element.classList.add("question__label_selected");
    element.classList.remove("question__label_not-selected");
  }
}
