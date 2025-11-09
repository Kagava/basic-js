const { NotImplementedError } = require("../lib");

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */

function getCommonCharacterCount(s1, s2) {
  function findCount(tempItem, s1, s2) {
    let sum1 = 0;
    let sum2 = 0;
    for (let i = 0; i < s1.length; i += 1) {
      if (s1[i] === tempItem) {
        sum1 += 1;
      }
    }
    for (let i = 0; i < s2.length; i += 1) {
      if (s2[i] === tempItem) {
        sum2 += 1;
      }
    }
    return sum1 > sum2 ? sum2 : sum1;
  }
  let sum = 0;
  const set = new Set();
  for (let i = 0; i < s1.length; i += 1) {
    if (!set.has(s1[i])) {
      const tempItem = s1[i];
      set.add(tempItem);
      sum += findCount(tempItem, s1, s2);
    }
  }
  return sum;
}

module.exports = {
  getCommonCharacterCount,
};
