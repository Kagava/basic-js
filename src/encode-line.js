const { NotImplementedError } = require("../lib");

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */

function encodeLine(str) {
  if (!str) return "";
  let ans = "";
  let temp = str[0];
  let sum = 0;
  for (let i = 0; i < str.length; i += 1) {
    if (temp === str[i]) {
      sum += 1;
    } else {
      ans += sum === 1 ? `${temp}` : `${sum}${temp}`;
      temp = str[i];
      sum = 1;
    }
  }
  ans += sum === 1 ? `${temp}` : `${sum}${temp}`;
  return ans;
}

module.exports = {
  encodeLine,
};
