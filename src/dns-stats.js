const { NotImplementedError } = require("../lib");

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const domainsNew = domains;
  let matrix = [];
  let ans = {};
  for (let i = 0; i < domainsNew.length; i += 1) {
    matrix[i] = domainsNew[i].split(".");
  }
  for (let i = 0; i < matrix.length; i += 1) {
    let key = "";
    for (let j = matrix[i].length - 1; j >= 0; j -= 1) {
      key += `.${matrix[i][j]}`;
      if (Object.keys(ans).includes(key)) {
        ans[key] += 1;
      } else {
        ans[key] = 1;
      }
    }
  }
  return ans;
}

module.exports = {
  getDNSStats,
};
