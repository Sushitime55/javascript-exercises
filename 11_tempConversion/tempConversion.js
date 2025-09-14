const convertToCelsius = function (temp) {
  // c = (f - 32)/1.8
  newTemp = (temp - 32) / 1.8;
  newTemp = Math.round(newTemp * 10) / 10;
  return newTemp;
};

const convertToFahrenheit = function (temp) {
  // f = 1.8c + 32
  newTemp = temp * 1.8 + 32;
  newTemp = Math.round(newTemp * 10) / 10;
  return newTemp;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
