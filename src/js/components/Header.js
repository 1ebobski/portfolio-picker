export default class Header {
  constructor({ container, openBrokerLogo }) {
    this.container = container;
    this.openBrokerLogo = openBrokerLogo;
  }

  createHeader() {
    this.headerElement = document.createElement("header");
    this.headerElement.classList.add("header");

    const openBrokerLogoElement = document.createElement("img");
    openBrokerLogoElement.classList.add("header__logo");
    openBrokerLogoElement.src = this.openBrokerLogo;

    this.headerElement.appendChild(openBrokerLogoElement);

    this.container.appendChild(this.headerElement);

    
  }
}
