export default class ExchangeRatesApi {
  constructor(options) {
    this._options = options;
  }

  getRates() {
    const url = `${this._options.baseUrl}${this._options.method}?base=${
      this._options.baseCurrency
    }&symbols=${this._options.currenciesList.join(",")}`;

    return fetch(
      url
      //     {
      //   method: "GET",
      //   headers: {
      //     "X-Api-Key": this._options.apiKey,
      //   },
      // }
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      })

      .catch((err) => console.log(err));
  }
}
