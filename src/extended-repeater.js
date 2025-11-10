const { NotImplementedError } = require("../lib");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */

function repeater(str, options) {
  let ansStr = "";
  const repatTimes = options.repeatTimes ? options.repeatTimes : 1;
  const additionRepeatTimes = options.additionRepeatTimes
    ? options.additionRepeatTimes
    : 1;
  console.log(repatTimes, additionRepeatTimes);
  for (let i = 0; i < repatTimes; i += 1) {
    ansStr += str;
    for (let j = 0; j < additionRepeatTimes; j += 1) {
      ansStr += options.addition !== undefined ? options.addition : "";
      if (j !== additionRepeatTimes - 1) {
        if (options.additionSeparator) {
          ansStr += options.additionSeparator;
        } else {
          ansStr += "|";
        }
      }
    }
    if (i !== repatTimes - 1) {
      if (options.separator) {
        ansStr += options.separator;
      } else {
        ansStr += "+";
      }
    }
  }
  return ansStr;
}

module.exports = {
  repeater,
};
