const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {

  constructor(flag) {
    this.flag = flag;
    this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  }

  encrypt(message, key) {

    if (message === undefined || key === undefined) {
      throw new Error('Argument absence');
    }

    let openMessage = message.toUpperCase().split('');

    if (key.length < message.length) {
      key = key.repeat(Math.ceil(message.length / key.length)).slice(0, message.length);
    };

    let keyWord = key.toUpperCase().split('');
    let newArr = [];
    let j = 0;
    for (let i = 0; i < openMessage.length; i++) {
      if (!this.alphabet.includes(openMessage[i])) {
        newArr.push(`${openMessage[i]}`)
        j--;
      } else {
        newArr.push(this.alphabet.find(letter => this.alphabet.indexOf(letter) === (this.alphabet.indexOf(openMessage[i]) + this.alphabet.indexOf(keyWord[j])) % 26))
      }
      j++;
    }

    return this.flag === true || this.flag === undefined ? newArr.join('') : newArr.reverse().join('');

  }
  decrypt(encryptedMessage, key) {
    if (encryptedMessage === undefined || key === undefined) {
      throw new Error('Argument absence');
    }

    let encryptedMessageArr = encryptedMessage.toUpperCase().split('');

    if (key.length < encryptedMessage.length) {
      key = key.repeat(Math.ceil(encryptedMessage.length / key.length)).slice(0, encryptedMessage.length);
    };

    let keyWord = key.toUpperCase().split('');
    let newArr = [];
    let j = 0;
    for (let i = 0; i < encryptedMessage.length; i++) {
      if (!this.alphabet.includes(encryptedMessage[i])) {
        newArr.push(`${encryptedMessage[i]}`)
        j--;
      } else {
        newArr.push(this.alphabet.find(letter => this.alphabet.indexOf(letter) === (this.alphabet.indexOf(encryptedMessage[i]) - this.alphabet.indexOf(keyWord[j]) + 26) % 26));
      }
      j++;
    }
    return this.flag === true || this.flag === undefined ? newArr.join('') : newArr.reverse().join('');
  }
}

module.exports = VigenereCipheringMachine;
