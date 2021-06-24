export default class ExchangeRatesApi {
  constructor(options) {
    this._options = options;
  }

  getRates() {
    const url = `${this._options.baseUrl}${this._options.method}?app_id=${this._options.appId}`;

    return fetch(url)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      })

      .catch((err) => console.log(err));
  }
}
