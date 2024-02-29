const repeatString = function(string, num) {
  let myString = '';
  for (let i = 1; i <= num; i++) {
    myString += string;
  }
  if (num >= 0) return myString;
  else return 'ERROR';
};

// Do not edit below this line
module.exports = repeatString;
