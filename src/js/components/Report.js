import Chart from "chart.js";
import "chartjs-plugin-labels";

export default class Report {
  constructor({ container, openBrokerLogo }) {
    this.container = container;

    this.openBrokerLogo = openBrokerLogo;
  }

  updateReportData({ portfolio, currency }) {
    this.portfolio = portfolio;
    this.currency = currency;
  }

  createReportSection() {
    this.reportSection = document.createElement("section");
    this.reportSection.classList.add("section");

    const openBrokerLogo = document.createElement("img");
    openBrokerLogo.classList.add("section__logo");
    openBrokerLogo.src = this.openBrokerLogo;

    const sectionTitleElement = document.createElement("h2");
    sectionTitleElement.classList.add(
      "section__title",
      "section__title_portfolio"
    );
    sectionTitleElement.textContent = "Рекомендуемый портфель";

    const reportElement = document.createElement("div");
    reportElement.classList.add("report");

    const reportPreviewElement = document.createElement("div");
    reportPreviewElement.classList.add("report__preview");

    const reportGraphElement = document.createElement("canvas");
    reportGraphElement.classList.add("report__graph");
    reportGraphElement.width = 450;
    reportGraphElement.height = 150;

    this.reportMainElement = document.createElement("div");
    this.reportMainElement.classList.add("report__main");

    this.reportAlternativeElement = document.createElement("div");
    this.reportAlternativeElement.classList.add("report__alternative");

    const reportAlternativeTitleElement = document.createElement("h3");
    reportAlternativeTitleElement.classList.add("report__alternative-title");
    reportAlternativeTitleElement.textContent = "Альтернативный портфель";

    const reportAlternativeSubtitleElement = document.createElement("p");
    reportAlternativeSubtitleElement.classList.add(
      "report__alternative-subtitle"
    );
    reportAlternativeSubtitleElement.textContent =
      "(этот портфель чуть более рисковый, чем выбранный вами)";

    this.reportAlternativeСontainer = document.createElement("div");
    this.reportAlternativeСontainer.classList.add(
      "report__alternative-container"
    );

    reportPreviewElement.appendChild(reportGraphElement);
    reportElement.appendChild(reportPreviewElement);

    reportElement.appendChild(this.reportMainElement);

    this.reportAlternativeElement.appendChild(reportAlternativeTitleElement);
    this.reportAlternativeElement.appendChild(reportAlternativeSubtitleElement);

    this.reportAlternativeElement.appendChild(this.reportAlternativeСontainer);

    reportElement.appendChild(this.reportAlternativeElement);

    this.chart = this._createChart(reportGraphElement);

    this.portfolioTotalElement = document.createElement("span");
    this.portfolioTotalElement.classList.add(
      "report__total-return",
      "report__total-return_main"
    );

    this.reportTotalReturnAlternativeElement = document.createElement("span");
    this.reportTotalReturnAlternativeElement.classList.add(
      "report__total-return",
      "report__total-return_alternative"
    );

    this.reportAlternativeElement.appendChild(
      this.reportTotalReturnAlternativeElement
    );

    reportPreviewElement.appendChild(this.portfolioTotalElement);

    this.reportSection.appendChild(openBrokerLogo);
    this.reportSection.appendChild(sectionTitleElement);
    this.reportSection.appendChild(reportElement);

    this.container.appendChild(this.reportSection);
  }

  renderReport() {
    // update pie chart with new data
    this._updateGraph();

    // clean main and alternative portfolio elements from children to add new ones
    while (this.reportMainElement.firstChild) {
      this.reportMainElement.removeChild(this.reportMainElement.firstChild);
    }

    while (this.reportAlternativeСontainer.firstChild) {
      this.reportAlternativeСontainer.removeChild(
        this.reportAlternativeСontainer.firstChild
      );
    }

    // calculate total return from each portfolio
    const totalReturnArray = this.portfolio.map(
      (element) =>
        Math.round(
          (element.reduce((acc, curr) => {
            return acc + curr.factAmount * parseFloat(curr.roi);
          }, 0) *
            100) /
            this.portfolio[0].reduce((acc, curr) => {
              return acc + curr.factAmount;
            }, 0),
          2
        ) / 100
    );

    // add new calculated total return to main and alternative portfolios
    [
      this.portfolioTotalElement,
      this.reportTotalReturnAlternativeElement,
    ].forEach((element, index) => {
      if (index === 0) {
        element.textContent = `Суммарная доходность: +${totalReturnArray[index]}%`;
      } else {
        element.textContent = `+${totalReturnArray[index]}%`;
      }
    });

    // go through this.portfolio object and add new cards/lines for primary portfolio and alternative
    this.portfolio[0].forEach((element) => {
      if (element.factAmount > 0) {
        this.reportMainElement.appendChild(
          this._createOptionMainElement(element)
        );
      }
    });

    this.portfolio[1].forEach((element) => {
      if (element.factAmount > 0) {
        this.reportAlternativeСontainer.appendChild(
          this._createAlternativeElement(element)
        );
      }
    });
  }

  updatePrices(prices) {
    this.prices = {
      dollar: { price: prices["USD"], sign: "&#36;" },
      euro: { price: prices["EUR"], sign: "&#8364;" },
      ruble: { price: 1, sign: "&#8381;" },
    };
  }

  _createOptionMainElement(option) {
    const optionElement = document.createElement("div");
    optionElement.classList.add("option");

    const optionHeaderElement = document.createElement("div");
    optionHeaderElement.classList.add("option__header");

    const optionNameElement = document.createElement("h3");
    optionNameElement.classList.add("option__name");
    optionNameElement.textContent = option.shareChoice;

    const optionAmountElement = document.createElement("div");
    optionAmountElement.classList.add("option__amount");

    const optionNumberElement = document.createElement("span");
    optionNumberElement.classList.add("option__number");
    optionNumberElement.textContent = Math.round(option.factAmount)
      .toString()
      .replace(/(\d)(?=(\d{3})+$)/g, "$1 ");

    const optionCurrencyElement = document.createElement("span");
    optionCurrencyElement.classList.add("option__currency");
    optionCurrencyElement.innerHTML = this.prices[this.currency].sign;

    const optionMainElement = document.createElement("div");
    optionMainElement.classList.add("option__main");

    const optionAboutElement = document.createElement("p");
    optionAboutElement.classList.add("option__about");
    optionAboutElement.textContent = option.salesPoints;

    optionAmountElement.appendChild(optionNumberElement);
    optionAmountElement.appendChild(optionCurrencyElement);
    optionHeaderElement.appendChild(optionNameElement);
    optionHeaderElement.appendChild(optionAmountElement);

    optionElement.appendChild(optionHeaderElement);
    optionElement.appendChild(optionAboutElement);

    //   optionElement.innerHTML = `<div class="option__header"
    //   ><h3 class="option__name">${option.shareChoice}</h3>
    //   <div class="option__amount">
    //   <span class="option__number">${Math.round(option.factAmount)
    //     .toString()
    //     .replace(/(\d)(?=(\d{3})+$)/g, "$1 ")}</span
    //   ><span class="option__currency"> ${
    //     this.prices[this.currency].sign
    //   }</span></div></div
    // >
    // <div class="option__main"
    //   ><p class="option__about"
    //     >${option.salesPoints}</p
    //   ></div>`;

    // salesPoints,
    //     regularityType,
    //     regularityValue,

    const regularityTypeArray = option.regularityType.split("\n");
    const regularityValueArray = option.regularityValue.split("\n");

    regularityTypeArray.map((element, index) => {
      const detailsElement = document.createElement("div");
      detailsElement.classList.add("option__details");
      const detailsKeyElement = document.createElement("span");
      detailsKeyElement.textContent = element;
      const detailsValueElement = document.createElement("span");
      detailsValueElement.textContent = regularityValueArray[index];
      detailsElement.appendChild(detailsKeyElement);
      detailsElement.appendChild(detailsValueElement);
      optionElement.appendChild(detailsElement);
    });

    return optionElement;
  }

  _createAlternativeElement(option) {
    const optionPreview = document.createElement("div");
    optionPreview.classList.add("report__mini-option");
    optionPreview.innerHTML = `<span class="report__option-share"
    >${option.forDiagram}%</span
  ><span class="report__option-name"
  >${option.shareChoice}</span
><span class="report__option-return">+${option.roi}%</span>`;
    return optionPreview;
  }

  _createChart(chartElement) {
    return new Chart(chartElement, {
      type: "pie",
      options: {
        // segmentShowStroke: false,
        plugins: {
          labels: {
            render: "percentage",
            fontColor: "white",
            fontSize: 16,
            fontFamily: "Inter, Arial, sans-serif",
            fontStyle: "bold",
          },
          responsive: false,
        },
        tooltips: {
          legend: {
            position: "top",

            align: "start",
            labels: {
              fontColor: "white",
              fontSize: 16,
              fontFamily: "Inter, Arial, sans-serif",
              fontStyle: "bold",
            },
          },
          callbacks: {
            // label: item => `${item} %`
          },
        },
        legend: { position: "right" },
        responsive: false,
      },
      data: {
        datasets: [
          {
            label: "test",
            data: [],
            // backgroundColor: ["#3E61E0", "#29B1A9", "#E9984D"],
            backgroundColor: ["#00BEF0", "#C8C8F0", "#96DCEB"],
          },
        ],
        labels: [],
      },
    });
  }

  _updateGraph() {
    this.chart.data.datasets[0].data = this.portfolio[0].map(
      (option) => option.forDiagram
    );

    this.chart.data.labels = this.portfolio[0].map(
      (option) => option.shareChoice + " - " + option.roi + "%"
    );

    this.chart.update();
  }
}
