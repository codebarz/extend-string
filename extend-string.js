String.prototype.hasVowels = function () {
  return (/[aeiou]/g).test(this);
};
String.prototype.toUpper = function () {
  let regExPatter = /^[a-z][a-z]*/g;
  let capitalizedString = "";
  if(regExPatter.test(this)) {
    for(let index = 0; index < this.length; index++) capitalizedString += String.fromCharCode(this[index].charCodeAt(this[index]) - 32);
  }
  return capitalizedString;
};
String.prototype.toLower = function () {
  let regExPatter = /^[A-Z][a-zA-Z]*/g;
  let lowercaseString = "";
  if(regExPatter.test(this)) {
    for(let index = 0; index < this.length; index++) {
      lowercaseString += String.fromCharCode(this[index].charCodeAt(this[index]) + 32);
    }
  }
  return lowercaseString;
};
String.prototype.ucFirst = function () {
  if(/^[a-z]/.test(this)) {
    let stringArray = this.split("");
    stringArray[0] = stringArray[0].toUpper();
    return stringArray.join("");
  }
  return "First letter is already uppercase";
};
String.prototype.isQuestion = function () {
  return (/.\?$/g).test(this);
};
String.prototype.words = function () {
  return this.match(/[a-zA-z]+/g);
};
String.prototype.wordCount = function () {
  return this.words().length;
};
String.prototype.toCurrency = function () {

};
String.prototype.fromCurrency = function () {

};
String.prototype.inverseCase = function () {
  let inverseString = "";
  for(let index = 0; index < this.length; index++) {
    if(/[A-Z]/g.test(this[index])) {
      inverseString += this[index].toLower();
    }
    inverseString += this[index].toUpper();
  }
  return inverseString;
};
String.prototype.alternatingCase = function () {

};
String.prototype.numberWords = function () {
  let numberWords = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"];
  let digitArray = this.split("");
  let regExPattern = /\d/g;
  let result = [];
  if(this.match(regExPattern)) {
    numberWords.forEach((value, index) => {
      if(index = +digitArray[index]) {
        result.push(numberWords[index]);
      }
    });
    return result.join(" ");
  }
  return "Kindly enter digits in string format";
};
String.prototype.isDigit = function () {
  return (/\b[\d?]\b/).test(this);
};
module.exports = String.prototype;