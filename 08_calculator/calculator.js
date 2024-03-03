const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function([...nums]) {
  let result = 0;
  nums.forEach(num => result += num);
  return result;
};

const multiply = function([...nums]) {
  let result = 1;
  nums.forEach(num => result *= num);
  return result;
};

const power = function(num, pwr) {
	let result = num;
  for (i = 1; i < pwr; i++) result *= num;
  return result;
};

const factorial = function(num) {
  let result = 1;
	for (i = num; i > 1; i--) result *= i;
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
