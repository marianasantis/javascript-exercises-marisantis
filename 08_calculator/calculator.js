const add = function(n1, n2) {
	return n1+n2;
};

const subtract = function(n1, n2) {
	return n1-n2;
};

const sum = function(arr) {
	return arr.reduce((total, n) => {return total + n}, 0);
};

const multiply = function(arr) {
  return arr.reduce((total, n) => {return total * n})
};

const power = function(n, pwr) {
  let result = 1;
	for (let i = 1; i <= pwr; i++) {
    result *= n;
  }
  return result;
};

const factorial = function(n) {
	let result = 1;
  for (let i= n; i > 1; i--) {
    result *= i;
  };
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};