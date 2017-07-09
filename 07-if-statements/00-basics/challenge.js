module.exports.favoriteNumber = function(a,b){
  if (a < b) return "Too high";
  else if (a > b) return "Too low";
  return "You got it!";
}

module.exports.checkLock = function(a,b,c,d){
  if (a != 3 && a != 5 && a != 7) return 'incorrect';
  else if (b != 2) return 'incorrect';
  else if (c < 5 || c > 100) return 'incorrect';
  else if (d >= 9 && d <= 20) return 'incorrect';
  return 'correct'
}

module.exports.canIGet = function(item, money) {
  switch (true) {
    case (item === "MacBook Air" && money >= 999):
    case (item === "MacBook Pro" && money >= 1299):
    case (item === "Mac Pro" && money >= 2499):
    case (item === "Apple Sticker" && money >= 1):
      return true
    default:
      return false;

  }
}
