export const matrixConverter = (matrix) => {
  const newMatrix = {};
  Object.keys(matrix).forEach((portfolioKey) => {
    const option = {};
    const shareArray = Object.keys(matrix[portfolioKey][0])
      .filter((element) => element.length > 1)
      .map((key) => {
        return Number(
          matrix[portfolioKey][0][key]
          // .replace(/% ?/g, "")
        ) === 0 && Number(portfolioKey.slice(portfolioKey.length - 1)) === 3
          ? 100
          : Number(
              matrix[portfolioKey][0][key]
              // .replace(/% ?/g, "")
            );
      });
    option.shares = shareArray;

    const portfolioArray = matrix[portfolioKey].map((element, index) => {
      return Object.keys(matrix[portfolioKey][index])
        .filter((element) => {
          // console.log(element.length);
          return element.length === 1;
        })
        .map((key) => matrix[portfolioKey][index][key]);
    });

    option.portfolios = portfolioArray;
    newMatrix[portfolioKey] = option;
  });
  return newMatrix;
};
