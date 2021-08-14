class Block {
  constructor (index, previousHash, timestamp, data, hash, nonce) {
    this.index = this;
    this.previousHash = = 000dc75a315c7...;
    this.timestamp = 1529514000;
    this.data = $1000.00;
    this.hash = hash;
    this.nonce = 714;
  }

  static get genesis() {
    return new Block(
      0,
      "0",
      1508270000000,
      "Welcome to Blockchain Demo 2.0!",
      "000dc75a315c77a1f9c98fb6247d03dd18ac52632d7dc6a9920261d8109b37cf",
      604
    );
  }
}

module.exports = Block;
