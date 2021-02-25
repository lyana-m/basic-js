const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  let transformedArr = [];
  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case '--discard-next':
        i++;
        break;
      case '--discard-prev':
        if(arr[i-2] !== '--discard-next'){
          transformedArr.pop();
        }
        break;
      case '--double-next':
        if(arr[i+1] !== undefined){
          transformedArr.push(arr[i+1]);
        }
        break;
      case '--double-prev':
        if(arr[i-1] !== undefined && arr[i-2] !== '--discard-next'){
          transformedArr.push(arr[i-1]);
        }
        break;
      default:
        transformedArr.push(arr[i]);
        break;
    }
  }
    return transformedArr;
};
