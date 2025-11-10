const { NotImplementedError } = require("../lib");

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const sortedArr = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] !== -1) {
      sortedArr.push(arr[i]);
    }
  }
  sortedArr.sort((a, b) => a - b);
  const result = [];
  let indexSorted = 0;
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] === -1) {
      result[i] = -1;
    } else {
      result[i] = sortedArr[indexSorted];
      indexSorted += 1;
    }
  }
  return result;
}

module.exports = {
  sortByHeight,
};
