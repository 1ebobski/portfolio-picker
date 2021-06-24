export default class Portfolio {
  constructor({
    catalogue,
    filterDict,
    recsCatalogue,
    matrixCurFull,
    matrixCurLb,
    matrixCurNone,
    matrixCurReady,
    matrixCurRec,
    matrixRubFull,
    matrixRubLb,
    matrixRubNone,
    matrixRubReady,
    matrixRubRec,
  }) {
    this.catalogue = catalogue;
    this.filterDict = filterDict;
    this.recsCatalogue = recsCatalogue;
    this.matrixCurFull = matrixCurFull;
    this.matrixCurLb = matrixCurLb;
    this.matrixCurNone = matrixCurNone;
    this.matrixCurReady = matrixCurReady;
    this.matrixCurRec = matrixCurRec;
    this.matrixRubFull = matrixRubFull;
    this.matrixRubLb = matrixRubLb;
    this.matrixRubNone = matrixRubNone;
    this.matrixRubReady = matrixRubReady;
    this.matrixRubRec = matrixRubRec;
  }

  getData({
    portfolioKeys,
    dueDate,
    investmentAmount,
    investmentAmountRubbles,
    isCurrency,
    currency,
    helpRequestString,
    helpRequestTicked,
  }) {
    this.portfolioKeys = portfolioKeys;
    this.dueDate = dueDate;
    this.investmentAmount = investmentAmount;
    this.investmentAmountRubbles = investmentAmountRubbles;
    this.isCurrency = isCurrency;
    this.currency = currency;
    this.helpRequestString = helpRequestString;
    this.helpRequestTicked = helpRequestTicked;
  }

  selectPapers() {
    const selectionMatrix = this._matrixApplier();

    this.selectedPapers = this.portfolioKeys
      .map((key) =>
        [".1", ".2", ".3"].map((subKey) =>
          this._selectSecurity(key + subKey, selectionMatrix)
        )
      )

      // filtering any bad papers got from catalogue (catalogue is not perfect)
      .map((element) =>
        element.filter(
          (element) =>
            element !== null &&
            element.name !== "" &&
            element.salesPoints !== ""
        )
      );

    this.portfolio = this.selectedPapers.map(this._composePortfolio.bind(this));

    // hotfix: before share sum could be less that 100 due to minAMount filtering in _composePortfolio()

    this.portfolio.forEach((portfolio) => {
      if (portfolio.length > 0) {
        const sharesSum = portfolio.reduce((acc, cur) => {
          return acc + cur.forDiagram;
        }, 0);

        if (sharesSum < 100) {
          if (portfolio.length > 1) {
            portfolio[portfolio.length - 1].forDiagram =
              100 - portfolio[0].forDiagram;
            portfolio[portfolio.length - 1].factAmount =
              (this.investmentAmount *
                portfolio[portfolio.length - 1].forDiagram) /
              100;
          } else {
            portfolio[0].forDiagram = 100;
            portfolio[0].factAmount = this.investmentAmount;
          }
        }
      }
    });
  }

  _matrixApplier() {
    if (!this.helpRequestTicked) {
      switch (this.helpRequestString) {
        case "Сопровождение не требуется, торгую самостоятельно":
          // console.log("NONE");
          return this.isCurrency ? this.matrixCurNone : this.matrixRubNone;
          break;
        case "Нужна аналитика и поддержка, включая инвестиционные идеи, но решения принимаю самостоятельно":
          // console.log("REC");
          return this.isCurrency ? this.matrixCurRec : this.matrixRubRec;
          break;
        case "Готов доверить инвестиционные решения профессиональным управляющим":
          // console.log("READY");
          return this.isCurrency ? this.matrixCurReady : this.matrixRubReady;
          break;
        case "Готов рассмотреть все варианты сопровождения":
          // console.log("FULL");
          return this.isCurrency ? this.matrixCurFull : this.matrixRubFull;
          break;
      }
    } else {
      // console.log("LB");
      return this.isCurrency ? this.matrixCurLb : this.matrixRubLb;
    }
  }

  _selectSecurity(key, portfolioMatrix) {
    // get all options with corresponding key

    // console.log(key, key.substring(1, 4), portfolioMatrix);

    const portfolioOption = portfolioMatrix[key.substring(1, 4)];

    // select one random option from portfolioOption

    const portfolioSelection =
      portfolioOption.portfolios[
        Math.floor(Math.random() * portfolioOption.portfolios.length)
      ];

    // select option with corresponding risk profile (number)
    const selectedCatalogueCode = portfolioSelection[key.charAt(0) - 1];

    if (
      this.catalogue.find((element) => {
        return element.code === selectedCatalogueCode;
      })
    ) {
      const shareArray = this.catalogue.filter(
        (element) => element.code === selectedCatalogueCode
      );

      const selectedSecurity =
        shareArray[Math.floor(Math.random() * shareArray.length)];

      selectedSecurity.share = portfolioOption.shares[key.charAt(0) - 1];

      return selectedSecurity;
    } else {
      return null;
    }
  }

  _composePortfolio(portfolioSet) {
    this.previousShare = 0;

    return portfolioSet
      .map((element) => this._composeOption(element))
      .filter((item) => item);
  }

  _composeOption(security) {
    const shareChoice = security.name;
    const minAmount = security.minAmount
      ? parseFloat(security.minAmount.replace(/,/g, ""), 10)
      : NaN;

    const shareInPercents = (security.share * (100 - this.previousShare)) / 100;

    if ((this.investmentAmount * shareInPercents) / 100 >= minAmount) {
      this.previousShare = shareInPercents + this.previousShare;

      const factAmount = (this.investmentAmount * shareInPercents) / 100;
      const factNumber = factAmount / minAmount;
      const forDiagram = shareInPercents;
      const roi = Math.round(
        Number(
          this.catalogue
            .find((element) => element.name === shareChoice)
            .return.replace("%", "")
        ),
        2
      );

      const salesPoints = this.catalogue.find(
        (element) => element.name === shareChoice
      ).salesPoints;
      const regularityType = this.catalogue.find(
        (element) => element.name === shareChoice
      ).regularityType;
      const regularityValue = this.catalogue.find(
        (element) => element.name === shareChoice
      ).regularityValue;

      return {
        shareChoice,
        forDiagram,
        shareInPercents,
        minAmount,
        roi,
        factNumber,
        factAmount,
        salesPoints,
        regularityType,
        regularityValue,
      };
    } else return null;
  }
}
