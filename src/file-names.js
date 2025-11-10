const { NotImplementedError } = require("../lib");

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const namesObj = {};
  const ansArray = [];
  for (let i = 0; i < names.length; i += 1) {
    if (namesObj[names[i]]) {
      namesObj[names[i]] += 1;
    } else {
      namesObj[names[i]] = 1;
    }
    const currentIndex = namesObj[names[i]];
    if (!ansArray.includes(names[i])) {
      ansArray.push(names[i]);
    } else {
      const regex = /\(/;
      const countBracket = names[i].match(regex)
        ? names[i].match(regex).length
        : 0;
      const currentValue = `${names[i]}(${
        namesObj[names[i]] - 1 + countBracket
      })`;
      ansArray.push(currentValue);
    }
  }
  return ansArray;
}

module.exports = {
  renameFiles,
};
