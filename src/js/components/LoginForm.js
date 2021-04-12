export default class LoginForm {
  constructor({ container }) {
    this.container = container;
  }

  createLoginForm() {
    this.loginFormElement = document.createElement("form");
    this.loginFormElement.classList.add("login-form");

    const titleElement = document.createElement("h1");
    titleElement.classList.add("login-form__title");
    titleElement.textContent = "Вход";

    const loginFieldContainerElement = document.createElement("div");
    loginFieldContainerElement.classList.add("login-form__field-container");

    const errorElement = document.createElement("span");
    errorElement.classList.add("login-form__error");
    errorElement.textContent = "Ошибка";

    const loginInputElement = document.createElement("input");
    loginInputElement.classList.add("login-form__input");
    loginInputElement.type = "text";
    loginInputElement.id = "login";
    loginInputElement.name = "login";
    loginInputElement.placeholder = " ";
    loginInputElement.required = true;

    const loginLabelElement = document.createElement("label");
    loginLabelElement.classList.add("login-form__label");
    loginLabelElement.for = "login";
    loginLabelElement.textContent = "Логин";

    const passwordFieldContainerElement = document.createElement("div");
    passwordFieldContainerElement.classList.add("login-form__field-container");

    // const errorElement = document.createElement("span");
    // errorElement.classList.add("login-form__error");
    // errorElement.textContent = "Ошибка";

    const passwordInputElement = document.createElement("input");
    passwordInputElement.classList.add("login-form__input");
    passwordInputElement.type = "text";
    passwordInputElement.id = "password";
    passwordInputElement.name = "password";
    passwordInputElement.placeholder = " ";
    passwordInputElement.required = true;

    const passwordLabelElement = document.createElement("label");
    passwordLabelElement.classList.add("login-form__label");
    passwordLabelElement.for = "password";
    passwordLabelElement.textContent = "Пароль";

    const buttonElement = document.createElement("input");
    buttonElement.classList.add("login-form__button");
    buttonElement.type = "submit";
    buttonElement.value = "Авторизоваться";

    //////////////////////////////////////////////////////////////////////

    loginFieldContainerElement.appendChild(errorElement);
    loginFieldContainerElement.appendChild(loginInputElement);
    loginFieldContainerElement.appendChild(loginLabelElement);

    passwordFieldContainerElement.appendChild(errorElement);
    passwordFieldContainerElement.appendChild(passwordInputElement);
    passwordFieldContainerElement.appendChild(passwordLabelElement);

    this.loginFormElement.appendChild(titleElement);
    this.loginFormElement.appendChild(loginFieldContainerElement);
    this.loginFormElement.appendChild(passwordFieldContainerElement);
    this.loginFormElement.appendChild(buttonElement);

    this.container.appendChild(this.loginFormElement);
  }
}
