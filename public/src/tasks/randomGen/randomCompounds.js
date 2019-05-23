export default class randomCompounds {
  constructor(words) {
    this.words = words;
    this.keys = [];
  }

  random() {
    let wordsArr = [];
    for (let i = 0; i < 4; i++) {
      let keyGen = Object.keys(this.words)[
        Math.floor(Math.random() * Object.keys(this.words).length)
      ];
      wordsArr[i] = this.words[keyGen];
      this.keys[i] = this.getKeyByValue(wordsArr[i]);
      delete this.words[keyGen];
    }
    return wordsArr;
  }

  getKeyByValue(value) {
    for (let prop in this.words) {
      if (this.words.hasOwnProperty(prop)) {

        if (this.words[prop] === value) { return prop; }
      }
    }
  }
}
