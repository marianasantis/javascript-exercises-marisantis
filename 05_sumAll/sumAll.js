let finalSum = 1;
const sumAll = function(num1, num2) {

  if ((num1 && num2) >= 0) {

    for (i = num1 + 1; i <= num2 ; i++) {

      finalSum += i;
    }
    return finalSum;
  }
};

// Do not edit below this line
module.exports = sumAll;
