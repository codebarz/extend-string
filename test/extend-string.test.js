let string = require("../extend-string");
let testString = "Michael";
let sentence = "What is my name?";
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
});