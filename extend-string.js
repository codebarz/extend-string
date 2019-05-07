String.prototype.hasVowels = function () {
  return (/[aeiou]/g).test(this);
};
String.prototype.toUpper = function () {
  let stringArray = this.split("");
  let regExPatter = /^[a-z][a-z]*/g;
  let capitalizedString = [];
  if(regExPatter.test(this)) {
    for(let index = 0; index < stringArray.length; index++) {
      capitalizedString.push(String.fromCharCode(stringArray[index].charCodeAt(stringArray[index]) - 32));
    }
    return capitalizedString.join("");
  }
  return "String is already uppercase";
};
String.prototype.toLower = function () {
  let stringArray = this.split("");
  let regExPatter = /^[A-Z][a-zA-Z]*/g;
  let capitalizedString = [];
  if(regExPatter.test(this)) {
    for(let index = 0; index < stringArray.length; index++) {
      capitalizedString.push(String.fromCharCode(stringArray[index].charCodeAt(stringArray[index]) + 32));
    }
    return capitalizedString.join("");
  }
  return "String is already lowercase";
};
String.prototype.ucFirst = function () {

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