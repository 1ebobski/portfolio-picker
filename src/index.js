// for matrix convertation from wrong json (got from csv to json converter) to right one

// import { RAW_RUB_LB } from "./js/constants/raw-matrixes/raw_rub_lb.js";
// import { RAW_RUB_FULL } from "./js/constants/raw-matrixes/raw_rub_full.js";
// import { RAW_RUB_NONE } from "./js/constants/raw-matrixes/raw_rub_none.js";
// import { RAW_RUB_READY } from "./js/constants/raw-matrixes/raw_rub_ready.js";
// import { RAW_RUB_REC } from "./js/constants/raw-matrixes/raw_rub_rec.js";
// import { RAW_CUR_LB } from "./js/constants/raw-matrixes/raw_cur_lb.js";
// import { RAW_CUR_FULL } from "./js/constants/raw-matrixes/raw_cur_full.js";
// import { RAW_CUR_NONE } from "./js/constants/raw-matrixes/raw_cur_none.js";
// import { RAW_CUR_READY } from "./js/constants/raw-matrixes/raw_cur_ready.js";
// import { RAW_CUR_REC } from "./js/constants/raw-matrixes/raw_cur_rec.js";

// import { matrixConverter } from "./js/utils/matrixConverter.js";

// const matrixNamesArray = [
//   "MATRIX_CUR_FULL",
//   "MATRIX_CUR_LB",
//   "MATRIX_CUR_NONE",
//   "MATRIX_CUR_READY",
//   "MATRIX_CUR_REC",
//   "MATRIX_RUB_FULL",
//   "MATRIX_RUB_LB",
//   "MATRIX_RUB_NONE",
//   "MATRIX_RUB_READY",
//   "MATRIX_RUB_REC",
// ];

// [
//   RAW_CUR_FULL,
//   RAW_CUR_LB,
//   RAW_CUR_NONE,
//   RAW_CUR_READY,
//   RAW_CUR_REC,
//   RAW_RUB_FULL,
//   RAW_RUB_LB,
//   RAW_RUB_NONE,
//   RAW_RUB_READY,
//   RAW_RUB_REC,
// ].forEach((matrix, index) =>
//   console.log(
//     `export const ${matrixNamesArray[index]} =`,
//     JSON.stringify(matrixConverter(matrix))
//   )
// );

//import logo and qr code images
import qrCode from "./images/qr-code.jpg";
import openBrokerLogo from "./images/open-logo.svg";
import humanIcon from "./images/human-icon.svg";
import medalIcon from "./images/medal-icon.svg";
import presentIcon from "./images/present-icon.svg";
import cardIcon from "./images/card-icon.svg";

// console.log(logo);

// import styles, components and modules
import "./index.css";
import Form from "./js/components/Form.js";
import Portfolio from "./js/modules/Portfolio.js";
import ExchangeRatesApi from "./js/modules/ExchangeRatesApi.js";
import Report from "./js/components/Report.js";
import Recommendation from "./js/components/Recommendation.js";
import Terminal from "./js/components/Terminal.js";

// import various scales, matrixes and dicts for correct portfolio selection
import { MATRIX_CUR_FULL } from "./js/constants/matrixes/matrix_cur_full.js";
import { MATRIX_CUR_LB } from "./js/constants/matrixes/matrix_cur_lb.js";
import { MATRIX_CUR_NONE } from "./js/constants/matrixes/matrix_cur_none.js";
import { MATRIX_CUR_READY } from "./js/constants/matrixes/matrix_cur_ready.js";
import { MATRIX_CUR_REC } from "./js/constants/matrixes/matrix_cur_rec.js";
import { MATRIX_RUB_FULL } from "./js/constants/matrixes/matrix_rub_full.js";
import { MATRIX_RUB_LB } from "./js/constants/matrixes/matrix_rub_lb.js";
import { MATRIX_RUB_NONE } from "./js/constants/matrixes/matrix_rub_none.js";
import { MATRIX_RUB_READY } from "./js/constants/matrixes/matrix_rub_ready.js";
import { MATRIX_RUB_REC } from "./js/constants/matrixes/matrix_rub_rec.js";

import { MONEY_SCALE, RISK_MATRIX } from "./js/constants/scales.js";
import { RECS_LIST } from "./js/constants/recs-list.js";
import { FILTER_DICT } from "./js/constants/filter-dict.js";
import { RECOMMENDATION_MATRIX } from "./js/constants/recommendation-matrix.js";
import { CATALOGUE } from "./js/constants/catalogue.js";

// import constants required for exchange rates api
import {
  BASE_URL,
  METHOD,
  CURRENCIES,
  BASE_CURRENCY,
} from "./js/constants/exchange-rates-api-url.js";
import { TERMINAL_CONTENT } from "./js/constants/terminal-content.js";

// select dom elements for components as either element or element container + refresh button
const refreshButton = document.querySelector(".form__refresh-button");
const mainElement = document.querySelector(".main");
const formElement = document.querySelector(".form");

// create components instances passing required props regardless user question responses
const form = new Form({
  formElement: formElement,
  moneyScale: MONEY_SCALE,
  riskMatrix: RISK_MATRIX,
  // openBrokerLogo: openBrokerLogo,
});
const report = new Report({
  container: mainElement,
  openBrokerLogo,
});

const recommendation = new Recommendation({
  container: mainElement,
  recsCatalogue: RECS_LIST,
  recommendationMatrix: RECOMMENDATION_MATRIX,
  openBrokerLogo,
  cardIcon,
  humanIcon,
  medalIcon,
  presentIcon,
});

const terminal = new Terminal({
  container: mainElement,
  terminalContent: TERMINAL_CONTENT,
  openBrokerLogo,
});

// create api instance and passing props
const exchangeRatesApi = new ExchangeRatesApi({
  baseUrl: BASE_URL,
  method: METHOD,
  currenciesList: CURRENCIES,
  baseCurrency: BASE_CURRENCY,
});

// create portfolio instance, used in portfolio selection process
const portfolio = new Portfolio({
  catalogue: CATALOGUE,
  filterDict: FILTER_DICT,
  recsCatalogue: RECS_LIST,

  matrixCurFull: MATRIX_CUR_FULL,
  matrixCurLb: MATRIX_CUR_LB,
  matrixCurNone: MATRIX_CUR_NONE,
  matrixCurReady: MATRIX_CUR_READY,
  matrixCurRec: MATRIX_CUR_REC,
  matrixRubFull: MATRIX_RUB_FULL,
  matrixRubLb: MATRIX_RUB_LB,
  matrixRubNone: MATRIX_RUB_NONE,
  matrixRubReady: MATRIX_RUB_READY,
  matrixRubRec: MATRIX_RUB_REC,
});

// creates filter element in form component
// form.insertLogo();
// form.createFilter();
report.createReportSection();
recommendation.createRecommendationsSection();

// requests exchange rates from https://api.exchangeratesapi.io/, returns promise
// and then updates rates in form and report component instances
// and afterwards executes the function that handles all the process in portfolio selection
exchangeRatesApi
  .getRates()
  .then((response) => {
    // const tempRates = { EUR: 0.0125875781, USD: 0.0142063406 };
    // report.updatePrices(tempRates);
    form.updatePrices(response.rates);
    report.updatePrices(response.rates);
    handleChanges();
  })
  .catch((error) => {
    console.log(error);
  });

// function that handles any changes in form responses and
const handleChanges = () => {
  // form methods that get answers, investment amount and filter selections
  // and assign risk profiles, portfolio keys and due date for portfolio selection
  form.getAnswers();
  form.getInvestmentAmount();
  // form.getFilter();
  form.assignRiskProfile();
  form.assignPortfolioKeys();
  form.assignDueDate();

  // update portfolio with required data from form component
  portfolio.updatePortfolio({
    portfolioKeys: form.portfolioKeys,
    dueDate: form.dueDate,
    investmentAmount: form.investmentAmount,
    investmentAmountRubbles: form.investmentAmountRubbles,
    isCurrency: form.isCurrency,
    currency: form.currency,
    // filterList: form.filterList,
    helpRequestString: form.helpRequestString,
    helpRequestTicked: form.helpRequestTicked,
  });

  // update report with required data from form and portfolio components
  report.updateReportData({
    portfolio: portfolio.portfolio,
    currency: portfolio.currency,
  });

  // update recommendation with required data from form and portfolio components
  recommendation.updateRecommendation(
    portfolio.investmentAmountRubbles,
    portfolio.currency,
    form.helpRequestString
  );

  // render report, recommendation and terminal sections
  report.renderReport();
  recommendation.renderRecommendation();
  terminal.renderTerminal();
};

// add eventlisteneer to refresh button to get new portfolio rendered
refreshButton.addEventListener("click", () => {
  handleChanges();
});

// add eventlistener to form element, handles changes only if input was via checkbox dropdown or text input
// AND investment amount in rubles is more than 10000 (Portfolio can find portfolio for lower sums of money,
// but either will get and error or it's not feasible in terms of investing)
form.formElement.addEventListener("input", (event) => {
  if (
    (event.target.classList.contains("question__dropdown") ||
      event.target.classList.contains("question__input-text") ||
      event.target.classList.contains("question__checkbox")) &&
    form.investmentAmountRubbles >= 10000
  ) {
    handleChanges();
  }
});

// add eventlistener to support level element (5th question) and implements a logic that autoselects corresponding filters
// form.supportLevelElement.addEventListener("input", () => {
//   form.manageFilterState();
// });

// add click event listener to form element that works only when clicked on filter buttons and updates filters' state
form.formElement.addEventListener("click", (event) => {
  if (event.target.classList.contains("question__label")) {
    form.updateFilter(event);
  }
});
