let string = require("../extend-string");

describe("Extended String Methods", function() {
  it("Should return boolean if string contains a vowel", function() {
    let testString = "Michael";
    expect(testString.hasVowels()).toBeTruthy();
  });
});