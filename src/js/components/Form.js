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

    // select accompaniment question

    // select money amount input element
    this.inputElements = this.formElement.querySelectorAll(
      ".question__input-text"
    );
    this.supportLevelElement = this.formElement.querySelector(".support-level");
    this.helpCheckboxElement = this.formElement.querySelector(
      ".question__help-checkbox"
    );

    this._goalElement = this.formElement.querySelector(".goal");
    // event listener
    [...this.inputElements].forEach((element) =>
      element.addEventListener("input", this._formatInput)
    );
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
      this._answers.push(question.selectedIndex - 1)
    );

    this.helpRequestString = this.supportLevelElement.options[
      this.supportLevelElement.selectedIndex
    ].text;

    this.helpRequestTicked = this.helpCheckboxElement.checked;
    // console.log(this.helpRequestTicked);
  }

  getInvestmentAmount() {
    this._getCurrency();

    this.investmentAmount =
      +[...this.inputElements][2].value.replace(/\s/g, "") >=
      10000 * this.prices[this.currency]
        ? +[...this.inputElements][2].value.replace(/\s/g, "")
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
    const goalArray = [
      ["Защитить сбережения от инфляции", "Создать подушку безопасности"],
      ["Попробовать торговать"],
      [
        "Обеспечить свою пенсию",
        "Позаботиться о будущем детей и близких",
        "Создать регулярный источник дохода",
      ],
      ["Торговать с целью финансировать крупную покупку"],
    ];

    let goalIndex;
    goalArray.forEach((element, index) => {
      if (
        element.includes(
          this._goalElement[this._goalElement.selectedIndex].text
        )
      ) {
        goalIndex = index;
      }
    });

    this.riskProfiles = [
      +this._riskMatrix[this._answers[6]][goalIndex],
      +this._riskMatrix[this._answers[6]][goalIndex] < 7
        ? +this._riskMatrix[this._answers[6]][goalIndex] + 1
        : +this._riskMatrix[this._answers[6]][goalIndex],
    ];
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
    switch (this._answers[3]) {
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

  // manageFilterState() {
  //   const filterButtonsElementsList = [
  //     ...this._filterElement.querySelectorAll(".question__label"),
  //   ];

  //   switch (this.supportLevelElement.selectedIndex) {
  //     case 0:
  //       this._pressFilterButton(filterButtonsElementsList[0]);
  //       this._unpressFilterButton(filterButtonsElementsList[1]);
  //       this._pressFilterButton(filterButtonsElementsList[2]);
  //       this._unpressFilterButton(filterButtonsElementsList[3]);
  //       break;
  //     case 1:
  //       this._unpressFilterButton(filterButtonsElementsList[0]);
  //       this._unpressFilterButton(filterButtonsElementsList[1]);
  //       this._pressFilterButton(filterButtonsElementsList[2]);
  //       this._unpressFilterButton(filterButtonsElementsList[3]);
  //       break;
  //     case 2:
  //       this._unpressFilterButton(filterButtonsElementsList[0]);
  //       this._pressFilterButton(filterButtonsElementsList[1]);
  //       this._unpressFilterButton(filterButtonsElementsList[2]);
  //       this._unpressFilterButton(filterButtonsElementsList[3]);
  //       break;
  //     case 3:
  //       filterButtonsElementsList.forEach(this._unpressFilterButton);
  //       break;
  //   }
  // }

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
