String.prototype.hasVowels = function () {
  return (/[aeiou]/g).test(this);
};
String.prototype.toUpper = function () {

};
String.prototype.toLower = function () {

};
String.prototype.ucFirst = function () {

};
String.prototype.isQuestion = function () {
  return (/\?$/g).test(this);
};
String.prototype.words = function () {
  return this.match(/[a-zA-z]+/g);
};
String.prototype.wordCount = function () {
  return this.words().length;
};


module.exports = String.prototype;