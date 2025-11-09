const { NotImplementedError } = require("../lib");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let array = n.toString().split("");
  let temp = -1;
  for (let i = 0; i < array.length - 1; i += 1) {
    if (array[i] < array[i + 1]) {
      temp = array[i];
      break;
    }
  }
  if (temp === -1) array.pop();
  let ans = 0;
  let flag = true;
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] === temp && flag) {
      flag = false;
    } else {
      ans = ans * 10 + array[i] * 1;
    }
  }
  return ans;
}

module.exports = {
  deleteDigit,
};
