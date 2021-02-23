const CustomError = require("../extensions/custom-error");

module.exports = function countCats(backyard) {
  return backyard.reduce((acc, item) => acc.concat(item), []).filter(item => item === '^^').length;
};
