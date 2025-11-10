const { NotImplementedError } = require("../lib");

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let result = 0;
  let indexColumn = 0;
  while (matrix[0][indexColumn] !== undefined) {
    result += matrix[0][indexColumn];
    for (let i = 1; i < matrix.length; i += 1) {
      if (matrix[i - 1][indexColumn] !== 0) result += matrix[i][indexColumn];
    }
    indexColumn += 1;
  }
  return result;
}

module.exports = {
  getMatrixElementsSum,
};
