// columns are "protect savings", "try and learn", "investing", "trading"
// rows are "return +8%, drop -5%, return +13%, drop -10%", "return +20%, drop -15%", "return max, drop any"

const RISK_MATRIX = [
  [1, 2, 3, 3],
  [2, 3, 4, 5],
  [2, 4, 5, 6],
  [2, 4, 6, 7],
];

// keys are keys and values are money breakpoints in rubles

const MONEY_SCALE = {
  a: 1000,
  b: 200000,
  c: 300000,
  d: 1000000,
  f: 5000000,
  e: 60000000,
};

export { RISK_MATRIX, MONEY_SCALE };
