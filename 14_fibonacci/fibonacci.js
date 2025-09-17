// iterative
const fibonacci = function (x) {
  x = parseInt(x);

  if (x < 0) {
    return "OOPS";
  }

  if (x <= 1) {
    return x;
  }

  let a = 0;
  let b = 1;

  while (x > 1) {
    sum = a + b;
    a = b;
    b = sum;
    x -= 1;
  }

  return sum;
};

// Do not edit below this line
module.exports = fibonacci;
