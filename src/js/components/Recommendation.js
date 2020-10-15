export default class Recommendation {
  constructor({
    container,
    recsCatalogue,
    recommendationMatrix,
    openBrokerLogo,
    cardIcon,
    humanIcon,
    medalIcon,
    presentIcon,
  }) {
    this.container = container;
    this.recsCatalogue = recsCatalogue;
    this.recommendationMatrix = recommendationMatrix;
    this.openBrokerLogo = openBrokerLogo;
    this.iconsArray = [cardIcon, humanIcon, medalIcon, presentIcon];
  }

  updateRecommendation(investmentAmountRubbles, currency, helpRequestString) {
    this.investmentAmountRubbles = investmentAmountRubbles;
    this.currency = currency;
    this.helpRequestString = helpRequestString;
  }

  renderRecommendation() {
    if (this.investmentAmountRubbles <= 1000000) {
      this.firstRecommendationElement.querySelector(
        ".recommendations__item-title"
      ).textContent = this.recsCatalogue[0].title;
      this.firstRecommendationElement.querySelector(
        ".recommendations__item-text"
      ).textContent = this.recsCatalogue[0].salesPoint;
    } else {
      this.firstRecommendationElement.querySelector(
        ".recommendations__item-title"
      ).textContent = this.recsCatalogue[1].title;
      this.firstRecommendationElement.querySelector(
        ".recommendations__item-text"
      ).textContent = this.recsCatalogue[1].salesPoint;
    }

    this.thirdRecommendationElement.querySelector(
      ".recommendations__item-text"
    ).textContent = (this.recommendationMatrix.find(
      (element) => element.minAmount <= this.investmentAmountRubbles
    ) || this.recommendationMatrix[2])[this.helpRequestString];
  }

  createRecommendationsSection() {
    this.recommendationsSectionElement = document.createElement("section");
    this.recommendationsSectionElement.classList.add("section");

    const openBrokerLogo = document.createElement("img");
    openBrokerLogo.classList.add("section__logo");
    openBrokerLogo.src = this.openBrokerLogo;

    const sectionTitleElement = document.createElement("h2");
    sectionTitleElement.classList.add("section__title");
    sectionTitleElement.textContent = "Дополнительные рекомендации";

    this.recommendationsElement = document.createElement("ul");
    this.recommendationsElement.classList.add("recommendations");

    const createRecommendation = ({ title, salesPoint }) => {
      const recommendationElement = document.createElement("li");
      recommendationElement.classList.add("recommendations__item");

      const recommendationTitleElement = document.createElement("h3");
      recommendationTitleElement.classList.add("recommendations__item-title");
      recommendationTitleElement.textContent = title;

      const recommendationTextElement = document.createElement("p");
      recommendationTextElement.classList.add("recommendations__item-text");
      recommendationTextElement.textContent = salesPoint;

      recommendationElement.append(
        recommendationTitleElement,
        recommendationTextElement
      );

      return recommendationElement;
    };

    this.recommendationsSectionElement.appendChild(openBrokerLogo);
    this.recommendationsSectionElement.appendChild(sectionTitleElement);
    this.recommendationsSectionElement.appendChild(this.recommendationsElement);

    this.firstRecommendationElement = createRecommendation({
      title: "",
      salesPoint: "",
    });

    const secondRecommendationElement = createRecommendation(
      this.recsCatalogue[7]
    );

    this.thirdRecommendationElement = createRecommendation({
      title: "Используйте экспертизу Открытие Брокер",
      salesPoint: "",
    });

    this.recommendationsElement.appendChild(this.firstRecommendationElement);
    this.recommendationsElement.appendChild(secondRecommendationElement);
    this.recommendationsElement.appendChild(this.thirdRecommendationElement);

    this.container.appendChild(this.recommendationsSectionElement);

    this.recommendationsSectionElement.appendChild(
      this._createBonusContainerElement()
    );
  }

  _createBonusContainerElement() {
    const recommendationsBonusElement = document.createElement("div");
    recommendationsBonusElement.classList.add(
      "recommendations__bonus-container"
    );

    const recommendationsBonusTitleElement = document.createElement("h4");
    recommendationsBonusTitleElement.classList.add(
      "recommendations__bonus-title"
    );
    recommendationsBonusTitleElement.textContent = "Получайте бонусные баллы";

    const bonusArray = [
      "За совершение сделок до 5% кэшбека",
      "За рекомендации «Открытие Брокер»",
      "За каждый год нашего знакомства",
      "За участие в акциях и мероприятиях",
    ];

    const recommendationsBonusList = document.createElement("ul");
    recommendationsBonusList.classList.add("recommendations__bonus-list");

    bonusArray.forEach((title, index) => {
      const bonusElement = document.createElement("li");
      bonusElement.classList.add("recommendations__bonus");

      const bonusIconElement = document.createElement("img");
      bonusIconElement.classList.add("recommendations__bonus-icon");
      bonusIconElement.src = this.iconsArray[index];

      const bonusCaptionElement = document.createElement("h4");
      bonusCaptionElement.classList.add("recommendations__bonus-caption");
      bonusCaptionElement.textContent = title;

      bonusElement.appendChild(bonusIconElement);
      bonusElement.appendChild(bonusCaptionElement);

      recommendationsBonusList.appendChild(bonusElement);
    });

    const bonusTextElement = document.createElement("p");
    bonusTextElement.classList.add("recommendations__bonus-text");
    bonusTextElement.textContent =
      "Потратить накопленные бонусы можно в своём личном кабинете — специально для клиентов-участников бонусной программы мы разработали удобную витрину вознаграждений, на которой представлено более 10 000 товаров с доставкой по всей России.*";

    const bonusBannerElement = document.createElement("div");
    bonusBannerElement.classList.add("recommendations__bonus-banner");

    const bonusDigitsElement = document.createElement("span");
    bonusDigitsElement.classList.add("recommendations__bonus-digits");
    bonusDigitsElement.textContent = "1 = 1";

    const bonusBannerTextElement = document.createElement("span");
    bonusBannerTextElement.classList.add("recommendations__bonus-banner-text");
    bonusBannerTextElement.textContent =
      "при нехватке бонусных баллов возможна доплата банковской картой";

    const bonusFootnoteElement = document.createElement("span");
    bonusFootnoteElement.classList.add("recommendations__bonus-footnote");
    bonusFootnoteElement.textContent = "*с марта 2019 года.";

    recommendationsBonusElement.appendChild(recommendationsBonusTitleElement);
    recommendationsBonusElement.appendChild(recommendationsBonusList);
    recommendationsBonusElement.appendChild(bonusTextElement);

    recommendationsBonusElement.appendChild(bonusBannerElement);

    bonusBannerElement.appendChild(bonusDigitsElement);
    bonusBannerElement.appendChild(bonusBannerTextElement);

    recommendationsBonusElement.appendChild(bonusFootnoteElement);

    return recommendationsBonusElement;
  }
}
