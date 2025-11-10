const { decorateObject } = require("../lib");
const { NotImplementedError } = require("../lib");

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  chain: "",
  len: 0,
  getLength() {
    return this.len;
  },
  addLink(value) {
    if (this.len === 0) {
      this.chain += `( ${value} )`;
    } else {
      this.chain += `~~( ${value} )`;
    }
    this.len += 1;
    return this;
  },
  removeLink(position) {
    console.log(position);
    if (isNaN(+position)) throw new Error("You can't remove incorrect link!");

    if (position - 1 < 0 || position > this.len)
      throw new Error("You can't remove incorrect link!");
    position -= 1;
    const regex = /\(\s.+?\s\)/g;
    const chainArray = this.chain.match(regex);
    const beginChainIndex =
      position === 0
        ? this.chain.indexOf(chainArray[position])
        : this.chain.indexOf(chainArray[position]) - 2;
    const beginChain = this.chain.slice(0, beginChainIndex);
    const endChain = this.chain.slice(
      beginChainIndex + chainArray[position].length + 2,
      this.chain.length
    );
    this.chain = `${beginChain}${endChain}`;
    this.len -= 1;
    return this;
  },
  reverseChain() {
    if (this.len < 2) return this;
    const regex = /\(\s.+?\s\)/g;
    const chainArray = this.chain.match(regex);
    this.chain = "";
    for (let i = chainArray.length - 1; i >= 0; i -= 1) {
      if (i === chainArray.length - 1) {
        this.chain += `${chainArray[i]}`;
      } else {
        this.chain += `~~${chainArray[i]}`;
      }
    }
    return this;
  },
  finishChain() {
    const newChain = this.chain;
    this.chain = "";
    this.len = 0;
    return newChain;
  },
};

module.exports = {
  chainMaker,
};
