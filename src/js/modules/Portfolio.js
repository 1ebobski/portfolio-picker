export default class Portfolio {
  constructor({
    catalogue,
    filterDict,
    recsCatalogue,

    matrixCurFull,
    matrixCurLb,
    matrixCurNone,
    matrixCurRec,
    matrixRubFull,
    matrixRubLb,
    matrixRubNone,
    matrixRubRec,
  }) {
    this.catalogue = catalogue;
    this.filterDict = filterDict;
    this.recsCatalogue = recsCatalogue;

    this.matrixCurFull = matrixCurFull;
    this.matrixCurLb = matrixCurLb;
    this.matrixCurNone = matrixCurNone;
    this.matrixCurRec = matrixCurRec;
    this.matrixRubFull = matrixRubFull;
    this.matrixRubLb = matrixRubLb;
    this.matrixRubNone = matrixRubNone;
    this.matrixRubRec = matrixRubRec;
  }

  _matrixApplier(isCurrency) {
    switch (this.helpRequestString) {
      case "Решения принимаю только сам лично, даже какие ценные бумаги и когда покупать":
        return isCurrency ? this.matrixCurFull : this.matrixRubFull;
      case "Решения принимаю сам, но мне нужна аналитика и поддержка, включая инвестиционные идеи":
        return isCurrency ? this.matrixCurRec : this.matrixRubRec;
      case "Готов нечасто принимать инвестиционные решения и предоставить аналитическую работу профессионалам":
        return isCurrency ? this.matrixCurLb : this.matrixRubLb;
      case "Не готов ответить":
        return isCurrency ? this.matrixCurNone : this.matrixRubNone;
    }
  }

  updatePortfolio({
    portfolioKeys,
    dueDate,
    investmentAmount,
    investmentAmountRubbles,
    isCurrency,
    currency,
    // filterList,
    helpRequestString,
  }) {
    this.currency = currency;
    // this.filterList = filterList;
    this.investmentAmount = investmentAmount;
    this.investmentAmountRubbles = investmentAmountRubbles;
    this.previousShare = 0;
    this.helpRequestString = helpRequestString;

    // const filterArray = [];
    // this.filterList.forEach((element) =>
    //   filterArray.push(...this.filterDict[element])
    // );

    // this.filteredCatalogue = this.catalogue.filter(
    //   (element) => !filterArray.includes(element.code)
    // );

    this.filteredCatalogue = this.catalogue;

    this.selectedPapers = portfolioKeys
      .map((key) =>
        [".1", ".2", ".3"].map((subKey) => {
          return this._selectSecurities(
            key + subKey,
            this._matrixApplier(isCurrency)
          );
        })
      )
      .map((element) =>
        element.filter(
          (element) =>
            element !== null &&
            element.name !== "" &&
            element.salesPoints !== ""
        )
      );

    // console.log(this.selectedPapers);

    this.portfolio = this.selectedPapers.map((element) =>
      this._composePortfolio(element)
    );

    // console.log(this.portfolio);

    // this.portfolio[0].forEach((element) => console.log(element.forDiagram));

    // hotfix: before share sum could be less that 100 due to minAMount filtering in _composePortfolio()

    this.portfolio.forEach((portfolio) => {
      const sharesSum = portfolio.reduce((acc, cur) => {
        // console.log(acc, cur);
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
      // console.log(sharesSum);
    });

    // console.log(test1, test2);

    // this.portfolio.forEach((element) => console.log(element));

    this.dueDate = dueDate;
    // console.log(portfolioKeys);
  }

  _selectSecurities(key, portfolioMatrix) {
    // get all options with corresponding key
    const portfolioOption = portfolioMatrix[key.substring(1, 4)];

    // select one random option from portfolioOption
    const portfolioSelection =
      portfolioOption.portfolios[
        Math.floor(Math.random() * portfolioOption.portfolios.length)
      ];

    // select option with corresponding risk profile (number)
    const selectedCatalogueCode = portfolioSelection[key.charAt(0) - 1];

    if (
      this.filteredCatalogue.find((element) => {
        // console.log(element.code);
        return element.code === selectedCatalogueCode;
      })
    ) {
      const shareArray = this.filteredCatalogue.filter(
        (element) => element.code === selectedCatalogueCode
      );

      const selectedSecurity =
        shareArray[Math.floor(Math.random() * shareArray.length)];

      selectedSecurity.share = portfolioOption.shares[key.charAt(0) - 1];

      // console.log(selectedSecurity);

      return selectedSecurity;
    } else {
      return null;
    }
  }

  _composePortfolio(portfolioSet) {
    this.previousShare = 0;

    // console.log(portfolioSet);
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

    // console.log(this.investmentAmount, shareInPercents, this.previousShare);

    if ((this.investmentAmount * shareInPercents) / 100 >= minAmount) {
      this.previousShare = shareInPercents + this.previousShare;

      const factAmount = (this.investmentAmount * shareInPercents) / 100;
      const factNumber = factAmount / minAmount;
      const forDiagram = shareInPercents;
      const roi = Math.round(
        Number(
          this.filteredCatalogue
            .find((element) => element.name === shareChoice)
            .return.replace("%", "")
        ),
        2
      );

      const salesPoints = this.filteredCatalogue.find(
        (element) => element.name === shareChoice
      ).salesPoints;
      const regularityType = this.filteredCatalogue.find(
        (element) => element.name === shareChoice
      ).regularityType;
      const regularityValue = this.filteredCatalogue.find(
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
