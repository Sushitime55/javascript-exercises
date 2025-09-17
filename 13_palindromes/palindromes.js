const palindromes = function (string) {
  allowedChars = "abcdefghijklmnopqrstuvwxyz0123456789";

  // force lower case, remove punctuation
  let cleanedString = string
    .toLowerCase()
    .split("")
    .filter((char) => allowedChars.includes(char))
    .join("");

  // make 2nd clean string that is reversed
  let reversedString = cleanedString.split("").reverse().join("");

  return cleanedString === reversedString;
};

// Do not edit below this line
module.exports = palindromes;
