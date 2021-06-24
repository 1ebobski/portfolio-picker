// columns are "protect savings", "try and learn", "investing", "trading"
// rows are "return +8%, drop -5%, return +13%, drop -10%", "return +20%, drop -15%", "return max, drop any"

const RISK_MATRIX = [
  [1, 3, 3, 3],
  [2, 3, 4, 5],
  [2, 4, 5, 6],
  [2, 5, 6, 7],
];

// keys are keys and values are money breakpoints in rubles

const MONEY_SCALE = {
  a: 10000,
  b: 500000,
  c: 2000000,
  d: 10000000,
};

const GOAL_ARRAY = [
  ["Защитить сбережения от инфляции", "Создать подушку безопасности"],
  ["Попробовать торговать"],
  [
    "Обеспечить свою пенсию",
    "Позаботиться о будущем детей и близких",
    "Создать регулярный источник дохода",
  ],
  ["Торговать с целью финансировать крупную покупку"],
];

export { RISK_MATRIX, MONEY_SCALE, GOAL_ARRAY };
