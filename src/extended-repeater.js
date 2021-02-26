const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {

  let additionArr = [];

  if (options.repeatTimes == undefined) {
    return str + options.addition;
  }

  for (i = 0; i < options.additionRepeatTimes; i++) {
    additionArr.push(typeof (options.addition) === 'string' ? options.addition : String(options.addition));
  }

  let mainStr = (typeof (str) === 'string' ? str : String(str)) + additionArr.join(options.additionSeparator === undefined ? '|' : options.additionSeparator);
  let mainArr = [];

  for (i = 0; i < options.repeatTimes; i++) {
    mainArr.push(mainStr);
  }

  return mainArr.join(options.separator === undefined ? '+' : options.separator);
}