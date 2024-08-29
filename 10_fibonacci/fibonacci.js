const fibonacci = function(input) {
  let f = Number(input);

  if (f < 0) return "OOPS"
  if (f === 0) return 0

  let current = 1;
  let prev = 1;
  let result = 1;

  for (i = 1; i < f-1; i++) {
    result = current + prev;
    prev = current;
    current = result;
  }
  return result;
};

// Do not edit below this line
module.exports = fibonacci;