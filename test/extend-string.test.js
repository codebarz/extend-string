let string = require("../extend-string");
let testString = "michael";
let sentence = "What is my name?";
let currencyDigits = "11111.11";
let aNumber = "325";
describe("Extended String Methods", function () {
  it("Should return boolean if string contains a vowel", function () {
    expect(testString.hasVowels()).toBeTruthy();
  });
  it("Should check if all string characters can be converted to upper case", function () {
    expect(testString.toUpper()).toBe("MICHAEL")
  });
  it("Should check if all string characters can be converted to lower case", function () {
    expect(testString.toLower()).toBe("michael");
  });
  it("Should check conversion of first character to upper case", function () {
    expect(testString.ucFirst()).toBe("Michael");
  });
  it("Should check if a string is a question", function () {
    expect(testString.isQuestion()).toBeFalsy();
    expect(sentence.isQuestion()).toBeTruthy();
  });
  it("Should return a list of words in an array from string", function () {
    expect(sentence.words()).toEqual(["What", "is", "my", "name"]);
  });
  it("Should check the amount of words in a sentence", function () {
    expect(sentence.wordCount()).toEqual(4);
  });
  it("Should return currency representation", function () {
    expect(currencyDigits.toCurrency()).toBe("11,111.11");
  });
  it("Should return number representation of currency", function () {
    expect(currency.fromCurrency()).toBe("11111.11");
  });
  it("Should return each letter in a string as inverse", function () {
    expect(sentence.inverseCase()).toBe("wHAT is my name");
  });
  it("Should check if string can be alternated", function () {
    expect(testString.alternatingCase()).toBe("mIcHaEl");
  });
  it("Should check if number can be converted to words", function () {
    expect(aNumber.numberWords()).toBe("three two five");
  });
  it("Should return boolean if the number is digit", function () {
    expect(aNumber.isDigit()).toBeFalsy();
  });
});