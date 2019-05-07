let string = require("../extend-string");
let testString = "Michael";
describe("Extended String Methods", function() {
  it("Should return boolean if string contains a vowel", function() {
    expect(testString.hasVowels()).toBeTruthy();
  });
  it("Should check if all string characters can be converted to upper case", function() {
    expect(testString.toUpper()).toBe("MICHAEL")
  });
});