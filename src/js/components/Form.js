export default class Form {
  constructor({
    container,
    moneyScale,
    riskMatrix,
    GOAL_ARRAY,
    openBrokerLogo,
    graphImage,
  }) {
    this.container = container;

    // assign
    // this.formElement = this.formSectionElement.querySelector(".form");
    this._moneyScale = moneyScale;
    this._riskMatrix = riskMatrix;
    this._goalArray = GOAL_ARRAY;

    this.openBrokerLogo = openBrokerLogo;
    this.graphImage = graphImage;
  }

  createFormSection() {
    this.formSectionElement = document.createElement("section");
    this.formSectionElement.classList.add("section");

    this.container.appendChild(this.formSectionElement);

    const openBrokerLogoElement = document.createElement("img");
    openBrokerLogoElement.classList.add("section__logo");
    openBrokerLogoElement.src = this.openBrokerLogo;

    const sectionTitleElement = document.createElement("h2");
    sectionTitleElement.classList.add("section__title");
    sectionTitleElement.textContent = "Анкета";

    this.formElement = document.createElement("form");
    this.formElement.classList.add("form");

    const graphImageElement = document.createElement("img");
    graphImageElement.classList.add("section__svg");
    graphImageElement.src = this.graphImageElement;

    ////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////

    const goalQuestionElement = document.createElement("fieldset");
    goalQuestionElement.classList.add("question");

    ////////////////////////////////////////////////////////////////

    const goalQuestionTitleElement = document.createElement("legend");
    goalQuestionTitleElement.classList.add("question__title");
    goalQuestionTitleElement.textContent = "Цель";

    const goalQuestionTextElement = document.createElement("h3");
    goalQuestionTextElement.classList.add("question__text");
    goalQuestionTextElement.textContent = "1. Выберите вашу цель";

    this._goalQuestionDropdownElement = document.createElement("select");
    this._goalQuestionDropdownElement.classList.add(
      "question__dropdown",
      "question__dropdown_no-input",
      "goal"
    );

    const goalOptionOne = document.createElement("option");
    goalOptionOne.textContent = "-- выберите вариант --";
    goalOptionOne.hidden = true;
    goalOptionOne.disabled = true;
    goalOptionOne.selected = true;

    const goalOptionTwo = document.createElement("option");
    goalOptionTwo.textContent = "Создать подушку безопасности";

    const goalOptionThree = document.createElement("option");
    goalOptionThree.textContent = "Защитить сбережения от инфляции";

    const goalOptionFour = document.createElement("option");
    goalOptionFour.textContent = "Обеспечить свою пенсию";

    const goalOptionFive = document.createElement("option");
    goalOptionFive.textContent = "Позаботиться о будущем детей и близких";

    const goalOptionSix = document.createElement("option");
    goalOptionSix.textContent = "Создать регулярный источник дохода";

    const goalOptionSeven = document.createElement("option");
    goalOptionSeven.textContent = "Попробовать торговать";

    const goalOptionEight = document.createElement("option");
    goalOptionEight.textContent =
      "Торговать с целью финансировать крупную покупку";

    this._goalQuestionDropdownElement.appendChild(goalOptionOne);
    this._goalQuestionDropdownElement.appendChild(goalOptionTwo);
    this._goalQuestionDropdownElement.appendChild(goalOptionThree);
    this._goalQuestionDropdownElement.appendChild(goalOptionFour);
    this._goalQuestionDropdownElement.appendChild(goalOptionFive);
    this._goalQuestionDropdownElement.appendChild(goalOptionSix);
    this._goalQuestionDropdownElement.appendChild(goalOptionSeven);
    this._goalQuestionDropdownElement.appendChild(goalOptionEight);

    ////////////////////////////////////////////////////////////////

    const sumQuestionTextElement = document.createElement("h3");
    sumQuestionTextElement.classList.add("question__text");
    sumQuestionTextElement.textContent =
      "2. Какая сумма удовлетворит вашу цель?";

    this.sumQuestionInputTextElement = document.createElement("input");
    this.sumQuestionInputTextElement.classList.add("question__input-text");
    this.sumQuestionInputTextElement.type = "text";
    this.sumQuestionInputTextElement.value = "";

    const sumQuestionDropdownElement = document.createElement("select");
    sumQuestionDropdownElement.classList.add(
      "question__dropdown",
      "question__dropdown_with-input"
    );

    const sumOptionOne = document.createElement("option");
    sumOptionOne.textContent = "-- выберите валюту --";
    sumOptionOne.hidden = true;
    sumOptionOne.disabled = true;
    sumOptionOne.selected = true;

    const sumOptionTwo = document.createElement("option");
    sumOptionTwo.textContent = "рублей";

    const sumOptionThree = document.createElement("option");
    sumOptionThree.textContent = "долларов";

    const sumOptionFour = document.createElement("option");
    sumOptionFour.textContent = "евро";

    sumQuestionDropdownElement.appendChild(sumOptionOne);
    sumQuestionDropdownElement.appendChild(sumOptionTwo);
    sumQuestionDropdownElement.appendChild(sumOptionThree);
    sumQuestionDropdownElement.appendChild(sumOptionFour);

    ////////////////////////////////////////////////////////////////

    const termQuestionTextElement = document.createElement("h3");
    termQuestionTextElement.classList.add("question__text");
    termQuestionTextElement.textContent =
      "3. В какой срок вы планируете достижение цели?";

    this._termQuestionInputTextElement = document.createElement("input");
    this._termQuestionInputTextElement.classList.add("question__input-text");
    this._termQuestionInputTextElement.type = "text";
    this._termQuestionInputTextElement.value = "";

    this._termQuestionDropdownElement = document.createElement("select");
    this._termQuestionDropdownElement.classList.add(
      "question__dropdown",
      "question__dropdown_with-input"
    );

    const termOptionOne = document.createElement("option");
    termOptionOne.textContent = "-- выберите срок --";
    termOptionOne.hidden = true;
    termOptionOne.disabled = true;
    termOptionOne.selected = true;

    const termOptionTwo = document.createElement("option");
    termOptionTwo.textContent = "года";

    const termOptionThree = document.createElement("option");
    termOptionThree.textContent = "месяца";

    this._termQuestionDropdownElement.appendChild(termOptionOne);
    this._termQuestionDropdownElement.appendChild(termOptionTwo);
    this._termQuestionDropdownElement.appendChild(termOptionThree);

    ////////////////////////////////////////////////////////////////

    goalQuestionElement.appendChild(goalQuestionTitleElement);
    goalQuestionElement.appendChild(goalQuestionTextElement);
    goalQuestionElement.appendChild(this._goalQuestionDropdownElement);

    goalQuestionElement.appendChild(sumQuestionTextElement);
    goalQuestionElement.appendChild(this.sumQuestionInputTextElement);
    goalQuestionElement.appendChild(sumQuestionDropdownElement);

    goalQuestionElement.appendChild(termQuestionTextElement);
    goalQuestionElement.appendChild(this._termQuestionInputTextElement);
    goalQuestionElement.appendChild(this._termQuestionDropdownElement);

    ////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////

    const investmentQuestionElement = document.createElement("fieldset");
    investmentQuestionElement.classList.add("question", "question_with-input");

    ////////////////////////////////////////////////////////////////

    const investmentQuestionTitleElement = document.createElement("legend");
    investmentQuestionTitleElement.classList.add("question__title");
    investmentQuestionTitleElement.textContent = "Сумма инвестирования";

    const startQuestionTextElement = document.createElement("h3");
    startQuestionTextElement.classList.add("question__text");
    startQuestionTextElement.textContent =
      "1. Какая ваша стартовая сумма инвестиций?";

    this.startQuestionInputTextElement = document.createElement("input");
    this.startQuestionInputTextElement.classList.add("question__input-text");
    this.startQuestionInputTextElement.type = "text";
    this.startQuestionInputTextElement.value = "";

    this._startQuestionDropdownElement = document.createElement("select");
    this._startQuestionDropdownElement.classList.add(
      "question__dropdown",
      "question__dropdown_with-input"
    );

    const startOptionOne = document.createElement("option");
    startOptionOne.textContent = "-- выберите валюту --";
    startOptionOne.hidden = true;
    startOptionOne.disabled = true;
    startOptionOne.selected = true;

    const startOptionTwo = document.createElement("option");
    startOptionTwo.textContent = "рублей";

    const startOptionThree = document.createElement("option");
    startOptionThree.textContent = "долларов";

    const startOptionFour = document.createElement("option");
    startOptionFour.textContent = "евро";

    this._startQuestionDropdownElement.appendChild(startOptionOne);
    this._startQuestionDropdownElement.appendChild(startOptionTwo);
    this._startQuestionDropdownElement.appendChild(startOptionThree);
    this._startQuestionDropdownElement.appendChild(startOptionFour);

    ////////////////////////////////////////////////////////////////

    const installmentQuestionTextElement = document.createElement("h3");
    installmentQuestionTextElement.classList.add("question__text");
    installmentQuestionTextElement.textContent =
      "2. Планируете ли вы регулярные довнесения денежных средств?";

    const frequencyQuestionDropdownElement = document.createElement("select");
    frequencyQuestionDropdownElement.classList.add(
      "question__dropdown",
      "question__dropdown_no-input"
    );

    const frequencyOptionOne = document.createElement("option");
    frequencyOptionOne.textContent = "-- выберите срок --";
    frequencyOptionOne.hidden = true;
    frequencyOptionOne.disabled = true;
    frequencyOptionOne.selected = true;

    const frequencyOptionTwo = document.createElement("option");
    frequencyOptionTwo.textContent = "каждый месяц";

    const frequencyOptionThree = document.createElement("option");
    frequencyOptionThree.textContent = "каждый квартал";

    const frequencyOptionFour = document.createElement("option");
    frequencyOptionFour.textContent = "каждый год";

    frequencyQuestionDropdownElement.appendChild(frequencyOptionOne);
    frequencyQuestionDropdownElement.appendChild(frequencyOptionTwo);
    frequencyQuestionDropdownElement.appendChild(frequencyOptionThree);
    frequencyQuestionDropdownElement.appendChild(frequencyOptionFour);

    this.installmentQuestionInputTextElement = document.createElement("input");
    this.installmentQuestionInputTextElement.classList.add(
      "question__input-text"
    );
    this.installmentQuestionInputTextElement.type = "text";
    this.installmentQuestionInputTextElement.value = "";

    const installmentQuestionDropdownElement = document.createElement("select");
    installmentQuestionDropdownElement.classList.add(
      "question__dropdown",
      "question__dropdown_with-input"
    );

    const installmentOptionOne = document.createElement("option");
    installmentOptionOne.textContent = "-- выберите валюту --";
    installmentOptionOne.hidden = true;
    installmentOptionOne.disabled = true;
    installmentOptionOne.selected = true;

    const installmentOptionTwo = document.createElement("option");
    installmentOptionTwo.textContent = "рублей";

    const installmentOptionThree = document.createElement("option");
    installmentOptionThree.textContent = "долларов";

    const installmentOptionFour = document.createElement("option");
    installmentOptionFour.textContent = "евро";

    installmentQuestionDropdownElement.appendChild(installmentOptionOne);
    installmentQuestionDropdownElement.appendChild(installmentOptionTwo);
    installmentQuestionDropdownElement.appendChild(installmentOptionThree);
    installmentQuestionDropdownElement.appendChild(installmentOptionFour);

    ////////////////////////////////////////////////////////////////

    investmentQuestionElement.appendChild(investmentQuestionTitleElement);
    investmentQuestionElement.appendChild(startQuestionTextElement);
    investmentQuestionElement.appendChild(this.startQuestionInputTextElement);
    investmentQuestionElement.appendChild(this._startQuestionDropdownElement);
    investmentQuestionElement.appendChild(installmentQuestionTextElement);
    investmentQuestionElement.appendChild(frequencyQuestionDropdownElement);
    investmentQuestionElement.appendChild(
      this.installmentQuestionInputTextElement
    );
    investmentQuestionElement.appendChild(installmentQuestionDropdownElement);

    ////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////

    const resultQuestionElement = document.createElement("fieldset");
    resultQuestionElement.classList.add("question");

    ////////////////////////////////////////////////////////////////

    const resultQuestionTitleElement = document.createElement("legend");
    resultQuestionTitleElement.classList.add("question__title");
    resultQuestionTitleElement.textContent = "Доходность / Просадка";

    const resultQuestionTextElement = document.createElement("h3");
    resultQuestionTextElement.classList.add("question__text");
    resultQuestionTextElement.textContent =
      "1. Какой потенциальный результат инвестиций вы приемлете?";

    this._resultQuestionDropdownElement = document.createElement("select");
    this._resultQuestionDropdownElement.classList.add(
      "question__dropdown",
      "question__dropdown_no-input"
    );

    const resultOptionOne = document.createElement("option");
    resultOptionOne.textContent = "-- выберите вариант --";
    resultOptionOne.hidden = true;
    resultOptionOne.disabled = true;
    resultOptionOne.selected = true;

    const resultOptionTwo = document.createElement("option");
    resultOptionTwo.textContent = "Доходность: +8%; Просадка: -5%";

    const resultOptionThree = document.createElement("option");
    resultOptionThree.textContent = "Доходность: +15%; Просадка: -10%";

    const resultOptionFour = document.createElement("option");
    resultOptionFour.textContent = "Доходность: +20%; Просадка: -15%";

    const resultOptionFive = document.createElement("option");
    resultOptionFive.textContent = "Доходность: максимальная; Просадка: любая";

    this._resultQuestionDropdownElement.appendChild(resultOptionOne);
    this._resultQuestionDropdownElement.appendChild(resultOptionTwo);
    this._resultQuestionDropdownElement.appendChild(resultOptionThree);
    this._resultQuestionDropdownElement.appendChild(resultOptionFour);
    this._resultQuestionDropdownElement.appendChild(resultOptionFive);

    ////////////////////////////////////////////////////////////////

    resultQuestionElement.appendChild(resultQuestionTitleElement);
    resultQuestionElement.appendChild(resultQuestionTextElement);
    resultQuestionElement.appendChild(this._resultQuestionDropdownElement);

    ////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////

    const supportQuestionElement = document.createElement("fieldset");
    supportQuestionElement.classList.add("question");

    ////////////////////////////////////////////////////////////////

    const supportQuestionTitleElement = document.createElement("legend");
    supportQuestionTitleElement.classList.add("question__title");
    supportQuestionTitleElement.textContent = "Параметры сопровождения";

    const supportQuestionTextElement = document.createElement("h3");
    supportQuestionTextElement.classList.add("question__text");
    supportQuestionTextElement.textContent =
      "1. Выберите подходящие параметры сопровождения:";

    this._supportQuestionDropdownElement = document.createElement("select");
    this._supportQuestionDropdownElement.classList.add(
      "question__dropdown",
      "question__dropdown_no-input"
    );

    const supportOptionOne = document.createElement("option");
    supportOptionOne.textContent = "-- выберите вариант --";
    supportOptionOne.hidden = true;
    supportOptionOne.disabled = true;
    supportOptionOne.selected = true;

    const supportOptionTwo = document.createElement("option");
    supportOptionTwo.textContent =
      "Сопровождение не требуется, торгую самостоятельно";

    const supportOptionThree = document.createElement("option");
    supportOptionThree.textContent =
      "Нужна аналитика и поддержка, включая инвестиционные идеи, но решения принимаю самостоятельно";

    const supportOptionFour = document.createElement("option");
    supportOptionFour.textContent =
      "Готов доверить инвестиционные решения профессиональным управляющим";

    const supportOptionFive = document.createElement("option");
    supportOptionFive.textContent =
      "Готов рассмотреть все варианты сопровождения";

    this._supportQuestionDropdownElement.appendChild(supportOptionOne);
    this._supportQuestionDropdownElement.appendChild(supportOptionTwo);
    this._supportQuestionDropdownElement.appendChild(supportOptionThree);
    this._supportQuestionDropdownElement.appendChild(supportOptionFour);
    this._supportQuestionDropdownElement.appendChild(supportOptionFive);

    this._supportQuestionInputTextElement = document.createElement("input");
    this._supportQuestionInputTextElement.classList.add(
      "question__help-checkbox"
    );
    this._supportQuestionInputTextElement.id = "support";
    this._supportQuestionInputTextElement.type = "checkbox";
    this._supportQuestionInputTextElement.value = "";

    const supportQuestionCheckboxTextElement = document.createElement("label");
    supportQuestionCheckboxTextElement.classList.add("question__checkbox-text");
    supportQuestionCheckboxTextElement.htmlFor = "support";
    supportQuestionCheckboxTextElement.textContent =
      "Готов рассмотреть услугу индивидуального сопровождения от Персонального брокера";

    ////////////////////////////////////////////////////////////////

    supportQuestionElement.appendChild(supportQuestionTitleElement);
    supportQuestionElement.appendChild(supportQuestionTextElement);
    supportQuestionElement.appendChild(this._supportQuestionDropdownElement);
    supportQuestionElement.appendChild(this._supportQuestionInputTextElement);
    supportQuestionElement.appendChild(supportQuestionCheckboxTextElement);

    ////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////

    // const formClientIdInputElement = document.createElement("input");
    // formClientIdInputElement.classList.add("form__client-id-input");
    // formClientIdInputElement.type = "text";
    // formClientIdInputElement.value = "";
    // formClientIdInputElement.placeholder = "id клиента";

    const buttonContainerElement = document.createElement("div");
    buttonContainerElement.classList.add("form__button-container");

    this.refreshButtonElement = document.createElement("button");
    this.refreshButtonElement.classList.add("button", "form__refresh-button");
    this.refreshButtonElement.textContent = "Новый портфель";

    this.printButtonElement = document.createElement("button");
    this.printButtonElement.classList.add("button", "form__print-button");
    this.printButtonElement.textContent = "Распечатать";

    buttonContainerElement.appendChild(this.refreshButtonElement);
    buttonContainerElement.appendChild(this.printButtonElement);

    ////////////////////////////////////////////////////////////////

    this.formElement.appendChild(goalQuestionElement);
    this.formElement.appendChild(investmentQuestionElement);
    this.formElement.appendChild(resultQuestionElement);
    this.formElement.appendChild(supportQuestionElement);
    // this.formElement.appendChild(formClientIdInputElement);
    this.formElement.appendChild(buttonContainerElement);

    this.formSectionElement.appendChild(openBrokerLogoElement);
    this.formSectionElement.appendChild(sectionTitleElement);
    this.formSectionElement.appendChild(this.formElement);
    this.formSectionElement.appendChild(graphImageElement);

    this.container.appendChild(this.formSectionElement);
  }

  getAnswers() {
    switch (this._startQuestionDropdownElement.selectedIndex) {
      case 1:
        this.currency = "ruble";
        this.isCurrency = false;
        break;
      case 2:
        this.currency = "dollar";
        this.isCurrency = true;
        break;
      case 3:
        this.currency = "euro";
        this.isCurrency = true;
        break;
    }

    this.investmentAmount =
      +this.startQuestionInputTextElement.value.replace(/\s/g, "") >=
      10000 * this.prices[this.currency]
        ? +this.startQuestionInputTextElement.value.replace(/\s/g, "")
        : 10000 * this.prices[this.currency];

    this.investmentAmountRubbles =
      this.investmentAmount / this.prices[this.currency];

    this.helpRequestString =
      this._supportQuestionDropdownElement[
        this._supportQuestionDropdownElement.selectedIndex
      ].text;

    this.helpRequestTicked = this._supportQuestionInputTextElement.checked;

    this._termName =
      this._termQuestionDropdownElement[
        this._termQuestionDropdownElement.selectedIndex
      ].text;
    this._termNumber = +this._termQuestionInputTextElement.value;
  }

  updatePrices(prices) {
    this.prices = {
      dollar: prices["USD"],
      euro: prices["EUR"],
      ruble: 1,
    };
  }

  // getClientId() {
  //   this.clientId = this.clientIdInputElement.value;
  // }

  assignRiskProfile() {
    let goalIndex;
    this._goalArray.forEach((element, index) => {
      if (
        element.includes(
          this._goalQuestionDropdownElement[
            this._goalQuestionDropdownElement.selectedIndex
          ].text
        )
      ) {
        goalIndex = index;
      }
    });

    this.riskProfiles = [
      +this._riskMatrix[this._resultQuestionDropdownElement.selectedIndex - 1][
        goalIndex
      ],
      +this._riskMatrix[this._resultQuestionDropdownElement.selectedIndex - 1][
        goalIndex
      ] < 7
        ? +this._riskMatrix[
            this._resultQuestionDropdownElement.selectedIndex - 1
          ][goalIndex] + 1
        : +this._riskMatrix[
            this._resultQuestionDropdownElement.selectedIndex - 1
          ][goalIndex],
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
    // console.log(this._termName);
    switch (this._termName) {
      case "месяца":
        new Date(new Date().setMonth(new Date().getMonth() + this._termNumber));
        break;

      case "года":
        new Date(
          new Date().setFullYear(new Date().getFullYear() + this._termNumber)
        );
        break;

      default:
        this.dueDate = new Date(
          new Date().setFullYear(new Date().getFullYear() + 100)
        );
    }
  }
}
