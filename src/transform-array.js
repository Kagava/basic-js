const { NotImplementedError } = require("../lib");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
//--discard-next
//--discard-prev
//--double-prev
//--double-next

function transform(arr) {
  if (!Array.isArray(arr)) return false;
  let newArr = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] === "--discard-next") {
      i += 1;
      continue;
    }
    if (arr[i] === "--double-next") {
      if (arr[i + 1] !== undefined) newArr.push(arr[i + 1]);
      continue;
    }
    if (arr[i] === "--discard-prev") {
      if (arr[i - 2] === "--discard-next") continue;
      if (arr[i - 1] !== undefined) newArr.pop();
      continue;
    }
    if (arr[i] === "--double-prev") {
      if (arr[i - 2] === "--discard-next") continue;
      if (arr[i - 1] !== undefined) newArr.push(arr[i - 1]);
      continue;
    }
    newArr.push(arr[i]);
  }
  return newArr;
}

module.exports = {
  transform,
};
