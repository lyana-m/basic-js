const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    return Math.max(...arr.map(item => {
  
      return Array.isArray(item) ? this.calculateDepth(item.length === 0 ? [item.push(1)] : item) : 0
    })) + 1;
    
  }
};