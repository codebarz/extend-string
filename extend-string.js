/* Checks if a string contains vowels */
String.prototype.hasVowels = function () {
  return (/[aeiou]/g).test(this); //use .test to match regEx patter against string to return boolean
};

/*Converts entire string to uppercase letter*/
String.prototype.toUpper = function () {
  let capitalizedString = ""; //empty string variable to store result
  for(let index = 0; index < this.length; index++) { //loop through the string to get each letter
    let characterCode = this.charCodeAt(index); //get the character code of each character
    if(characterCode >= 97 && characterCode <= 122) { //check if character code is in lowercase using ascii code
      characterCode -= 32; //subtract 32 from character code to get uppercase equivalent character code
    }
    capitalizedString += String.fromCharCode(characterCode); //get letter from character code
  }
  return capitalizedString;
};

/*Converts entire string to lowercase letter*/
String.prototype.toLower = function () {
  let lowercaseString = ""; //empty string variable to store result
  for(let index = 0; index < this.length; index++) { //loop through the string to get each letter
    let characterCode = this.charCodeAt(index); //get the character code of each character
    if(characterCode >= 65 && characterCode <= 90) { //check if character code is in uppercase using ascii code
      characterCode += 32; //add 32 from character code to get lowercase equivalent character code
    }
    lowercaseString += String.fromCharCode(characterCode); //get character equivalent from character code
  }
  return lowercaseString;
};

/*Changes the first letter of a string to uppercase*/
String.prototype.ucFirst = function () {
  if(/^[a-z]/.test(this)) { //check if string starts with a small letter
    let stringArray = this.split(""); //split the string to an array
    stringArray[0] = stringArray[0].toUpper(); //convert first letter to uppercase
    return stringArray.join(""); //Join the array with no special character to get string
  }
  return "First letter is already uppercase"; //return an error if string doesn't start with lowercase letter
};

/*Checks if the string is a question*/
String.prototype.isQuestion = function () {
  return (/.+\?$/g).test(this); //pattern returns boolean if string ends with a ?.
};

/*Gets all the words in a string*/
String.prototype.words = function () {
  return this.match(/[a-zA-z0-9]+/g); //return an array of words that match regEx pattern.
};

/*Gets the amount of word in a string*/
String.prototype.wordCount = function () {
  return this.words().length; //return the length of array of words gotten from a string
};

/*Gets currency representation of a string*/
String.prototype.toCurrency = function () {
  return this.replace(/\d(?=(\d{3})+\.)/g, '$&,'); //replace patter result with pattern result + , (result,)
};

/*Gets integer from currency*/
String.prototype.fromCurrency = function () {
  let regExPatter = /,/g; //regEx patter to get all "," in the currency
  return +this.replace(regExPatter, ""); //replace all , with nothing
};

/*Changes each character to an inverse of its case*/
String.prototype.inverseCase = function () {
  let inverseString = ""; //empty string to store result
  for(let index = 0; index < this.length; index++) {
    if(/[A-Z]/g.test(this[index])) { //check if character is uppercase
      inverseString += this[index].toLower(); //convert character to lowercase
      continue; //restart a new iteration
    }
    inverseString += this[index].toUpper(); //change to uppercase if character is not uppercase
  }
  return inverseString;
};

/*Changes a string to alternating cases*/
String.prototype.alternatingCase = function () {
  let alternatedString = ""; //empty string to store our result
  for(let index = 0; index < this.length; index++) { //loop through the string
    if(index % 2 !== 0) { //check if string as index divisible by 2 so it always picks next character
      alternatedString += this[index].toUpper(); //convert the next character to upper case
      continue; //start a new iteration
    }
    alternatedString += this[index].toLower();//convert character to lowercase
  }
  return alternatedString;
};

/*Converts numbers to its word equivalent*/
String.prototype.numberWords = function () {
  //array of existing numbers in words (increasing order)
  let numberWords = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"];
  let digitArray = this.split("");
  let regExPattern = /\d/g;
  let result = []; //empty array to store result
  if(this.match(regExPattern)) { //check if string is a digit
    for(let i = 0; i < digitArray.length; i++){ //loop through string array
      result.push(numberWords[digitArray[i]]); //push word at index equal to digit
    }
    return result.join(" "); //return joined result
  }
  return "Kindly enter digits in string format"; //return error if string is not digits
};

/*Checks if a string is a digit*/
String.prototype.isDigit = function () {
  return (/\b[\d?]\b/).test(this); //return boolean (true) if regEx pattern match single digit
};
module.exports = String.prototype;