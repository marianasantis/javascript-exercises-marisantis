const palindromes = function (string) {
  let noPunct = string.replaceAll(/[!|,|.| ]/g, '') // /g used to replace the characters inside [] globally
  let myString = noPunct.toLowerCase();
  const myArray = myString.split('');
  const reversedString = myArray.reverse().join('');

  return myString === reversedString;
};

// Do not edit below this line
module.exports = palindromes;
