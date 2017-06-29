module.exports.formLetter = function(firstName, senderName, message) {
return "Hello " + firstName + ",\n\n" + message + "\n\nSincerely,\n" + senderName
};

module.exports.sliceItAndCombineIt = function(bigString, startA, endA, startB, endB) {
  let first = bigString.slice(startA,endA)
  let last = bigString.slice(startB,endB)
  return first + last
};

module.exports.findFirstMatch = function(text, searchString) {
  return text.indexOf(searchString)
};

module.exports.findLastMatch = function(text, searchString) {
  return text.lastIndexOf(searchString)

};

module.exports.substringBetweenMatches = function(text, searchString) {
return text.substring(text.indexOf(searchString)+searchString.length,text.lastIndexOf(searchString));
};
