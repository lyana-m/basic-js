const CustomError = require("../extensions/custom-error");

const chainMaker = {
  result: [],
  getLength() {
    return this.result.length;
  },
  addLink(value) {
    this.result.push(value === undefined ? '( )' : `( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (isNaN(position) || !Number.isInteger(position) || position < 0 || position > this.result.length) {
      this.result = [];
      throw new Error('error');
    } 
    this.result.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.result.reverse();
    return this;
  },
  finishChain() {
    let b = [...this.result];
    this.result = [];
    return b.join('~~');
  }
};

module.exports = chainMaker;
