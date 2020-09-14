import qrCode from "../../images/qr-code.jpg";

export default class Terminal {
  constructor({ container, terminalContent, openBrokerLogo }) {
    this.container = container;
    this.terminalContent = terminalContent;
    this.openBrokerLogo = openBrokerLogo;
  }

  _createTerminalSection() {
    this.terminalSection = document.createElement("section");
    this.terminalSection.classList.add("section");

    const openBrokerLogo = document.createElement("img");
    openBrokerLogo.classList.add("section__logo");
    openBrokerLogo.src = this.openBrokerLogo;

    const sectionTitleElement = document.createElement("h2");
    sectionTitleElement.classList.add("section__title");
    sectionTitleElement.textContent = "Способ подачи торговых поручений";
    sectionTitleElement.textContent = "Торговый терминал";

    const sectionIntroElement = document.createElement("p");
    sectionIntroElement.classList.add("section__intro");
    sectionIntroElement.textContent =
      "Торговый терминал — это инструмент, с помощью которого Инвестор получает доступ на биржу. Мы обязательно рекомендуем зарегистрировать личный кабиент и скачать приложение Открытие Брокер.";

    const terminalElement = document.createElement("div");
    terminalElement.classList.add("terminal");

    const terminalTitleElement = document.createElement("h3");
    terminalTitleElement.classList.add("terminal__title");
    terminalTitleElement.textContent = "Выберите торговый терминал:";

    this.terminalDropdownElement = document.createElement("select");
    this.terminalDropdownElement.classList.add("terminal__dropdown");

    this.terminalDropdownElement.addEventListener("input", () => {
      this._updateTerminal();
    });

    this.terminalContent.forEach((element) => {
      const terminalOptionElement = document.createElement("option");
      terminalOptionElement.classList.add("terminal__option");
      terminalOptionElement.textContent = element.name;
      terminalOptionElement.selected = element.selected;
      this.terminalDropdownElement.appendChild(terminalOptionElement);
    });

    this.terminalIntroElement = document.createElement("p");
    this.terminalIntroElement.classList.add("terminal__intro");
    this.terminalIntroElement.textContent = this.terminalContent[0].intro;

    const terminalKeyAttributesTitleElement = document.createElement("h3");
    terminalKeyAttributesTitleElement.classList.add("terminal__heading");
    terminalKeyAttributesTitleElement.textContent = "Ключевые характеристики";

    this.terminalAttributesList = document.createElement("ul");
    this.terminalAttributesList.classList.add("terminal__attributes-list");

    this.terminalContent[0].keyAttributes.forEach((item) => {
      const listElement = document.createElement("li");
      listElement.classList.add("terminal__attribute");
      listElement.textContent = item;
      this.terminalAttributesList.appendChild(listElement);
    });

    const terminalInstallationElement = document.createElement("div");
    terminalInstallationElement.classList.add(
      "terminal__installation-container"
    );

    const terminalInstallationTitleElement = document.createElement("h3");
    terminalInstallationTitleElement.classList.add("terminal__heading");
    terminalInstallationTitleElement.textContent = "Инструкция по установке";

    const terminalInstallationTextElement = document.createElement("p");
    terminalInstallationTextElement.classList.add("terminal__text");
    terminalInstallationTextElement.textContent =
      "Для установки включите камеру своего телефона, наведите на QR-код, перейдите по появившейся ссылке и установите приложение";

    const terminalInstallationQRCode = document.createElement("img");
    terminalInstallationQRCode.classList.add("terminal__qr-code");

    terminalInstallationQRCode.src = qrCode;

    terminalElement.appendChild(terminalTitleElement);
    terminalElement.appendChild(this.terminalDropdownElement);
    terminalElement.appendChild(this.terminalIntroElement);
    terminalElement.appendChild(terminalKeyAttributesTitleElement);
    terminalElement.appendChild(this.terminalAttributesList);
    terminalElement.appendChild(terminalInstallationElement);

    terminalInstallationElement.appendChild(terminalInstallationTitleElement);
    terminalInstallationElement.appendChild(terminalInstallationTextElement);
    terminalInstallationElement.appendChild(terminalInstallationQRCode);

    this.terminalSection.appendChild(openBrokerLogo);
    this.terminalSection.appendChild(sectionTitleElement);
    this.terminalSection.appendChild(sectionIntroElement);
    this.terminalSection.appendChild(terminalElement);
    this.terminalSection.appendChild(terminalInstallationElement);
  }

  renderTerminal() {
    if (this.terminalSection) {
      this.container.removeChild(this.terminalSection);
    }
    this._createTerminalSection();
    this.container.appendChild(this.terminalSection);
  }

  _updateTerminal() {
    this.terminalIntroElement.textContent = this.terminalContent[
      this.terminalDropdownElement.selectedIndex
    ].intro;

    this.terminalAttributesList.innerHTML = "";

    this.terminalContent[
      this.terminalDropdownElement.selectedIndex
    ].keyAttributes.forEach((item) => {
      const listElement = document.createElement("li");
      listElement.classList.add("terminal__attribute");
      listElement.textContent = item;

      this.terminalAttributesList.appendChild(listElement);
    });
  }
}
