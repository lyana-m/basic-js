const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (Array.isArray(members)) {
    return members.reduce((acc, item) => {
      if (typeof (item) === 'string') {
        return acc + item.trim().toLowerCase()[0];
      } else {
        return acc;
      }
    }, '')
      .split('').sort().join('').toUpperCase();
  } return false;
};
