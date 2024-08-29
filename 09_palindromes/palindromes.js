const palindromes = function (str) {
  const cleanStr = str
    .toLowerCase()
    .replace(/[" "!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g, "");

  const reversedStr = cleanStr.split("").reverse().join("");
  
  return (cleanStr === reversedStr);
};

// Do not edit below this line
module.exports = palindromes;
