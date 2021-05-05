export default class Form {
  constructor({
    container,
    moneyScale,
    riskMatrix,
    openBrokerLogo,
    graphImage,
  }) {
    this.container = container;

    // assign
    // this.formElement = this.formSectionElement.querySelector(".form");
    this._moneyScale = moneyScale;
    this._riskMatrix = riskMatrix;

    this.openBrokerLogo = openBrokerLogo;
    this.graphImage = graphImage;

    // select all dropdown elements
    // this._questionElements = this.formElement.querySelectorAll(
    //   ".question__dropdown"
    // );

    // select accompaniment question

    // select money amount input element
    // this.inputElements = this.formElement.querySelectorAll(
    //   ".question__input-text"
    // );
    // this.supportLevelElement = this.formElement.querySelector(".support-level");
    // this.helpCheckboxElement = this.formElement.querySelector(
    //   ".question__help-checkbox"
    // );

    // this.clientIdInputElement = this.formElement.querySelector(
    //   ".form__client-id-input"
    // );

    // this._goalElement = this.formElement.querySelector(".goal");
    // // event listener
    // [...this.inputElements].forEach((element) =>
    //   element.addEventListener("input", this._formatInput)
    // );
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

    const goalQuestionDropdownElement = document.createElement("select");
    goalQuestionDropdownElement.classList.add(
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
    goalOptionSix.textContent = "Попробовать торговать";

    const goalOptionSeven = document.createElement("option");
    goalOptionSeven.textContent =
      "Торговать с целью финансировать крупную покупку";

    goalQuestionDropdownElement.appendChild(goalOptionOne);
    goalQuestionDropdownElement.appendChild(goalOptionTwo);
    goalQuestionDropdownElement.appendChild(goalOptionThree);
    goalQuestionDropdownElement.appendChild(goalOptionFour);
    goalQuestionDropdownElement.appendChild(goalOptionFive);
    goalQuestionDropdownElement.appendChild(goalOptionSix);
    goalQuestionDropdownElement.appendChild(goalOptionSeven);

    ////////////////////////////////////////////////////////////////

    const sumQuestionTextElement = document.createElement("h3");
    sumQuestionTextElement.classList.add("question__text");
    sumQuestionTextElement.textContent =
      "2. Какая сумма удовлетворит вашу цель?";

    const sumQuestionInputTextElement = document.createElement("input");
    sumQuestionInputTextElement.classList.add("question__input-text");
    sumQuestionInputTextElement.type = "text";
    sumQuestionInputTextElement.value = "";

    const sumQuestionDropdownElement = document.createElement("select");
    sumQuestionDropdownElement.classList.add(
      "question__dropdown",
      "question__dropdown_no-input",
      "goal"
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

    const termQuestionInputTextElement = document.createElement("input");
    termQuestionInputTextElement.classList.add("question__input-text");
    termQuestionInputTextElement.type = "text";
    termQuestionInputTextElement.value = "";

    const termQuestionDropdownElement = document.createElement("select");
    termQuestionDropdownElement.classList.add(
      "question__dropdown",
      "question__dropdown_no-input",
      "goal"
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

    termQuestionDropdownElement.appendChild(termOptionOne);
    termQuestionDropdownElement.appendChild(termOptionTwo);
    termQuestionDropdownElement.appendChild(termOptionThree);

    ////////////////////////////////////////////////////////////////

    goalQuestionElement.appendChild(goalQuestionTitleElement);
    goalQuestionElement.appendChild(goalQuestionTextElement);
    goalQuestionElement.appendChild(goalQuestionDropdownElement);

    goalQuestionElement.appendChild(sumQuestionTextElement);
    goalQuestionElement.appendChild(sumQuestionInputTextElement);
    goalQuestionElement.appendChild(sumQuestionDropdownElement);

    goalQuestionElement.appendChild(termQuestionTextElement);
    goalQuestionElement.appendChild(termQuestionInputTextElement);
    goalQuestionElement.appendChild(termQuestionDropdownElement);

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

    const startQuestionInputTextElement = document.createElement("input");
    startQuestionInputTextElement.classList.add("question__input-text");
    startQuestionInputTextElement.type = "text";
    startQuestionInputTextElement.value = "";

    const startQuestionDropdownElement = document.createElement("select");
    startQuestionDropdownElement.classList.add(
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

    startQuestionDropdownElement.appendChild(startOptionOne);
    startQuestionDropdownElement.appendChild(startOptionTwo);
    startQuestionDropdownElement.appendChild(startOptionThree);
    startQuestionDropdownElement.appendChild(startOptionFour);

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

    const installmentQuestionInputTextElement = document.createElement("input");
    installmentQuestionInputTextElement.classList.add("question__input-text");
    installmentQuestionInputTextElement.type = "text";
    installmentQuestionInputTextElement.value = "";

    const installmentQuestionDropdownElement = document.createElement("select");
    installmentQuestionDropdownElement.classList.add(
      "question__dropdown",
      "question__dropdown_no-input"
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
    investmentQuestionElement.appendChild(startQuestionInputTextElement);
    investmentQuestionElement.appendChild(startQuestionDropdownElement);
    investmentQuestionElement.appendChild(installmentQuestionTextElement);
    investmentQuestionElement.appendChild(frequencyQuestionDropdownElement);
    investmentQuestionElement.appendChild(installmentQuestionInputTextElement);
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

    const resultQuestionDropdownElement = document.createElement("select");
    resultQuestionDropdownElement.classList.add(
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

    resultQuestionDropdownElement.appendChild(resultOptionOne);
    resultQuestionDropdownElement.appendChild(resultOptionTwo);
    resultQuestionDropdownElement.appendChild(resultOptionThree);
    resultQuestionDropdownElement.appendChild(resultOptionFour);
    resultQuestionDropdownElement.appendChild(resultOptionFive);

    ////////////////////////////////////////////////////////////////

    resultQuestionElement.appendChild(resultQuestionTitleElement);
    resultQuestionElement.appendChild(resultQuestionTextElement);
    resultQuestionElement.appendChild(resultQuestionDropdownElement);

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

    const supportQuestionDropdownElement = document.createElement("select");
    supportQuestionDropdownElement.classList.add(
      "question__dropdown",
      "question__dropdown_no-input",
      "support-level"
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

    supportQuestionDropdownElement.appendChild(supportOptionOne);
    supportQuestionDropdownElement.appendChild(supportOptionTwo);
    supportQuestionDropdownElement.appendChild(supportOptionThree);
    supportQuestionDropdownElement.appendChild(supportOptionFour);

    const supportQuestionInputTextElement = document.createElement("input");
    supportQuestionInputTextElement.classList.add("question__help-checkbox");
    supportQuestionInputTextElement.id = "support";
    supportQuestionInputTextElement.type = "checkbox";
    supportQuestionInputTextElement.value = "";

    const supportQuestionCheckboxTextElement = document.createElement("label");
    supportQuestionCheckboxTextElement.classList.add("question__checkbox-text");
    supportQuestionCheckboxTextElement.for = "support";
    supportQuestionCheckboxTextElement.textContent =
      "Готов рассмотреть услугу индивидуального сопровождения от Персонального брокера";

    ////////////////////////////////////////////////////////////////

    supportQuestionElement.appendChild(supportQuestionTitleElement);
    supportQuestionElement.appendChild(supportQuestionTextElement);
    supportQuestionElement.appendChild(supportQuestionDropdownElement);
    supportQuestionElement.appendChild(supportQuestionInputTextElement);
    supportQuestionElement.appendChild(supportQuestionCheckboxTextElement);

    ////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////

    const formClientIdInputElement = document.createElement("input");
    formClientIdInputElement.classList.add("form__client-id-input");
    formClientIdInputElement.type = "text";
    formClientIdInputElement.value = "";
    formClientIdInputElement.placeholder = "id клиента";

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

    this.formSectionElement.appendChild(openBrokerLogoElement);
    this.formSectionElement.appendChild(sectionTitleElement);
    this.formSectionElement.appendChild(this.formElement);
    this.formSectionElement.appendChild(graphImageElement);

    // this.formSectionElement.innerHTML = `<h2 class="section__title">Анкета</h2>

    // <form class="form">
    //   <fieldset class="question">
    //     <legend class="question__title"> Цель </legend>
    //     <h3 class="question__text">1. Выберите вашу цель</h3>
    //     <select
    //       class="question__dropdown question__dropdown_no-input goal"
    //       name="first"
    //     >
    //       <option value="0" hidden disabled selected
    //         >-- выберите вариант --</option
    //       >
    //       <option value="1">Создать подушку безопасности</option>
    //       <option value="2">Защитить сбережения от инфляции</option>
    //       <option value="3">Обеспечить свою пенсию</option>
    //       <option value="4"
    //         >Позаботиться о будущем детей и близких
    //       </option>
    //       <option value="5">Создать регулярный источник дохода </option>
    //       <option value="6">Попробовать торговать </option>
    //       <option value="7"
    //         >Торговать с целью финансировать крупную покупку
    //       </option>
    //     </select>

    //     <h3 class="question__text"
    //       >2. Какая сумма удовлетворит вашу цель?</h3
    //     >

    //     <input class="question__input-text" type="text" value="" />

    //     <select
    //       class="question__dropdown question__dropdown_with-input"
    //       name="currency"
    //       ><option value="0" hidden disabled selected
    //         >-- выберите валюту --</option
    //       >
    //       <option value="1">рублей</option>
    //       <option value="2">долларов</option>
    //       <option value="3">евро</option>
    //     </select>
    //     <h3 class="question__text"
    //       >3. В какой срок вы планируете достижение цели?</h3
    //     >

    //     <input class="question__input-text" type="text" value="" />

    //     <select
    //       class="question__dropdown question__dropdown_with-input"
    //       name="currency"
    //       ><option value="0" hidden disabled selected
    //         >-- выберите срок --</option
    //       >
    //       <option value="1">года</option>
    //       <option value="2">месяца</option>
    //     </select>
    //   </fieldset>

    //   <fieldset class="question question_with-input">
    //     <legend class="question__title"> Сумма инвестирования </legend>
    //     <h3 class="question__text"
    //       >1. Какая ваша стартовая сумма инвестиций?</h3
    //     >
    //     <input class="question__input-text" type="text" value="" />

    //     <select
    //       class="question__dropdown question__dropdown_with-input"
    //       name="currency"
    //       ><option value="0" hidden disabled selected
    //         >-- выберите валюту --</option
    //       >
    //       <option value="1">рублей</option>
    //       <option value="2">долларов</option>
    //       <option value="3">евро</option>
    //     </select>

    //     <h3 class="question__text"
    //       >2. Планируете ли вы регулярные довнесения денежных средств?</h3
    //     >

    //     <select
    //       class="question__dropdown question__dropdown_no-input"
    //       name="first"
    //       ><option value="0" hidden disabled selected
    //         >-- выберите срок --</option
    //       >
    //       <option value="1">каждый месяц</option>
    //       <option value="2">каждый квартал</option>
    //       <option value="3">каждый год</option>
    //     </select>
    //     <input class="question__input-text" type="text" value="" />

    //     <select
    //       class="question__dropdown question__dropdown_with-input"
    //       name="currency"
    //       ><option value="0" hidden disabled selected
    //         >-- выберите валюту --</option
    //       >
    //       <option value="1">рублей</option>
    //       <option value="2">долларов</option>
    //       <option value="3">евро</option>
    //     </select>
    //   </fieldset>
    //   <fieldset class="question">
    //     <legend class="question__title"> Доходность / Просадка </legend>
    //     <h3 class="question__text"
    //       >1. Какой потенциальный результат инвестиций вы приемлете?</h3
    //     >
    //     <select
    //       class="question__dropdown question__dropdown_no-input"
    //       name="first"
    //       ><option value="0" hidden disabled selected
    //         >-- выберите вариант --</option
    //       >
    //       <option value="1">Доходность: +8%; Просадка: -5%</option>
    //       <option value="2">Доходность: +15%; Просадка: -10%</option>
    //       <option value="3">Доходность: +20%; Просадка: -15%</option>
    //       <option value="4"
    //         >Доходность: максимальная; Просадка: любая</option
    //       >
    //     </select>
    //   </fieldset>

    //   <fieldset class="question">
    //     <legend class="question__title">Параметры сопровождения</legend>
    //     <h3 class="question__text"
    //       >1. Выберите подходящие параметры сопровождения:</h3
    //     >
    //     <select
    //       class="question__dropdown question__dropdown_no-input support-level"
    //       name="first"
    //       ><option value="0" hidden disabled selected
    //         >-- выберите вариант --</option
    //       >
    //       <option value="1"
    //         >Сопровождение не требуется, торгую самостоятельно</option
    //       >
    //       <option value="2"
    //         >Нужна аналитика и поддержка, включая инвестиционные идеи, но
    //         решения принимаю самостоятельно</option
    //       >

    //       <option value="3"
    //         >Готов доверить инвестиционные решения профессиональным
    //         управляющим</option
    //       >
    //       <option value="4"
    //         >Готов рассмотреть все варианты сопровождения</option
    //       >
    //     </select>

    //     <input
    //       type="checkbox"
    //       id="accompaniment"
    //       class="question__help-checkbox"
    //     />
    //     <label for="accompaniment" class="question__checkbox-text"
    //       >Готов рассмотреть услугу индивидуального сопровождения от
    //       Персонального брокера</label
    //     >
    //   </fieldset>

    //   <input
    //     class="form__client-id-input"
    //     type="text"
    //     value=""
    //     placeholder="id клиента"
    //   />

    //   <div class="form__button-container">
    //     <button class="button form__refresh-button" type="button"
    //       >Новый портфель</button
    //     ><button class="button form__print-button"
    //       >Распечатать</button
    //     ></div
    //   >
    // </form>`;

    this.container.appendChild(this.formSectionElement);

    // this.formSectionElement.insertBefore(
    //   openBrokerLogoElement,
    //   this.formSectionElement.firstChild
    // );
  }

  _formatInput(event) {
    event.target.value = event.target.value
      .replace(/[^\dA-Z]/g, "")
      .replace(/(\d)(?=(\d{3})+$)/g, "$1 ")
      .trim();
  }

  getAnswers() {
    this._questionElements = this.formElement.querySelectorAll(
      ".question__dropdown"
    );

    this.supportLevelElement = this.formElement.querySelector(".support-level");
    this.helpCheckboxElement = this.formElement.querySelector(
      ".question__help-checkbox"
    );

    this.clientIdInputElement = this.formElement.querySelector(
      ".form__client-id-input"
    );

    this._goalElement = this.formElement.querySelector(".goal");
    // event listener
    [...this.inputElements].forEach((element) =>
      element.addEventListener("input", this._formatInput)
    );

    ////////////////////////////////////////////////////

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

  getClientId() {
    this.clientId = this.clientIdInputElement.value;
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
}
