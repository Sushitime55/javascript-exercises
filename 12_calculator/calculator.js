const add = function (x, y) {
  return x + y;
};

const subtract = function (x, y) {
  return x - y;
};

const sum = function (array) {
  let sum = array.reduce((total, currentArg) => {
    return total + currentArg;
  }, 0);
  return sum;
};

const multiply = function (array) {
  let product = array.reduce((product, currentArg) => {
    return product * currentArg;
  }, 1);
  return product;
};

const power = function (base, exp) {
  return base ** exp;
};

const factorial = function (x) {
  let fact = 1;
  for (let i = 2; i <= x; i++) {
    fact = fact * i;
  }
  return fact;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
