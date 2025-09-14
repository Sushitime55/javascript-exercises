const sumAll = function (x, y) {
  if (x < 0 || y < 0) return "ERROR";

  if (!Number.isInteger(x) || !Number.isInteger(y)) {
    return "ERROR";
  }

  let smaller = Math.min(x, y);
  let larger = Math.max(x, y);
  let sum = 0;
  for (i = smaller; i <= larger; i++) {
    sum += i;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
