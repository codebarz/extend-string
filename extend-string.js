String.prototype.hasVowels = function () {
  return (/[aeiou]/g).test(this);
};
String.prototype.toUpper = function () {
  let capitalizedString = "";
  for(let index = 0; index < this.length; index++) {
    let characterCode = this.charCodeAt(index);
    if(characterCode >= 97 && characterCode <= 122) {
      characterCode -= 32;
    }
    capitalizedString += String.fromCharCode(characterCode);
  }
  return capitalizedString;
};
String.prototype.toLower = function () {
  let lowercaseString = "";
  for(let index = 0; index < this.length; index++) {
    let characterCode = this.charCodeAt(index);
    if(characterCode >= 65 && characterCode <= 90) {
      characterCode += 32;
    }
    lowercaseString += String.fromCharCode(characterCode);
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
  return this.replace(/\d(?=(\d{3})+\.)/g, '$&,');
};
String.prototype.fromCurrency = function () {
  let regExPatter = /,/g;
  return +this.replace(regExPatter, "");
};
String.prototype.inverseCase = function () {
  let inverseString = "";
  for(let index = 0; index < this.length; index++) {
    if(/[A-Z]/g.test(this[index])) {
      inverseString += this[index].toLower();
      continue;
    }
    inverseString += this[index].toUpper();
  }
  return inverseString;
};
String.prototype.alternatingCase = function () {
  let alternatedString = "";
  for(let index = 0; index < this.length; index++) {
    if(index % 2 !== 0) {
      alternatedString += this[index].toUpper();
      continue;
    }
    alternatedString += this[index].toLower();
  }
  return alternatedString;
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