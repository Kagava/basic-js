const { NotImplementedError } = require("../lib");

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let ans = 0;
  let newN = n;
  let flag = true;
  while (flag) {
    ans += newN % 10;
    if (Math.floor(newN / 10) === 0) {
      if (ans >= 10) {
        newN = ans;
        ans = 0;
        continue;
      } else {
        flag = false;
      }
    }
    newN = Math.floor(newN / 10);
  }
  return ans;
}

module.exports = {
  getSumOfDigits,
};
