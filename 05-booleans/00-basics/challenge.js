module.exports.equalStrings = function(stringOne, stringTwo) {
  return stringOne === stringTwo ? true : false
};

module.exports.notEqual = function(one, two) {
  return typeof(one) === typeof(two) ? false : true
};

module.exports.inBetween = function(lower, middle, upper) {
  return lower < middle || middle > upper ? true : false
};

module.exports.outsideRanges = function(number) {

};

module.exports.nameAndPrice = function(name, price) {

};
