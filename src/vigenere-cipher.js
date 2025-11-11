const { NotImplementedError } = require("../lib");

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(param = true) {
    if (typeof param !== "boolean") throw new Error("Incorrect arguments!");
    this.type = param;
    this.alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  encrypt(strM, strK) {
    if (!strM || !strK) throw new Error("Incorrect arguments!");
    let newM = strM.toUpperCase();
    let newK = "";
    let indexK = 0;
    for (let i = 0; i < newM.length; i += 1) {
      if (this.alphabet.includes(newM[i])) {
        newK += strK[indexK].toUpperCase();
        indexK += 1;
        if (indexK === strK.length) indexK = 0;
      } else {
        newK += newM[i];
      }
    }
    let newC = "";
    if (!this.param) {
      for (let i = 0; i < newM.length; i += 1) {
        if (this.alphabet.includes(newM[i])) {
          newC +=
            this.alphabet[(newM[i].charCodeAt() + newK[i].charCodeAt()) % 26];
        } else {
          newC += newM[i];
        }
      }
    } else {
      for (let i = newM.length - 1; i >= 0; i -= 1) {
        if (this.alphabet.includes(newM[i])) {
          newC +=
            this.alphabet[(newM[i].charCodeAt() + newK[i].charCodeAt()) % 26];
        } else {
          newC += newM[i];
        }
      }
    }
    return newC;
  }

  decrypt(strC, strK) {
    if (!strC || !strK) throw new Error("Incorrect arguments!");
    let newC = strC.toUpperCase();
    let newK = "";
    let indexK = 0;
    for (let i = 0; i < newC.length; i += 1) {
      if (this.alphabet.includes(newC[i])) {
        newK += strK[indexK].toUpperCase();
        indexK += 1;
        if (indexK === strK.length) indexK = 0;
      } else {
        newK += newC[i];
      }
    }
    let newM = "";
    if (!this.param) {
      for (let i = 0; i < newC.length; i += 1) {
        if (this.alphabet.includes(newC[i])) {
          newM +=
            this.alphabet[
              (newC[i].charCodeAt() - newK[i].charCodeAt() + 26) % 26
            ];
        } else {
          newM += newC[i];
        }
      }
    } else {
      for (let i = newC.length - 1; i >= 0; i -= 1) {
        if (this.alphabet.includes(newC[i])) {
          newM +=
            this.alphabet[
              (newC[i].charCodeAt() - newK[i].charCodeAt() + 26) % 26
            ];
        } else {
          newM += newC[i];
        }
      }
    }
    return newM;
  }
}

module.exports = {
  directMachine: new VigenereCipheringMachine(),
  reverseMachine: new VigenereCipheringMachine(false),
  VigenereCipheringMachine,
};
