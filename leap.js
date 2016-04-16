function Year(year) {
  this.year = year;
};

Year.prototype.isLeap = function() {
  return hasNoRemainder(this.year, 4) &&
         !hasNoRemainder(this.year, 100) || hasNoRemainder(this.year, 400);
}

function hasNoRemainder(num, div) {
  return num % div === 0;
}

module.exports = Year;
