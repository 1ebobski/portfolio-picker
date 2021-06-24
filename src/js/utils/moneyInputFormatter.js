export const moneyInputFormatter = (event) => {
  event.preventDefault();
  event.target.value = event.target.value
    .replace(/[^\dA-Z]/g, "")
    .replace(/(\d)(?=(\d{3})+$)/g, "$1 ")
    .trim();
};
