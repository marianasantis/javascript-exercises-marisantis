const fibonacci = function(member) {
  if (member < 0 ) return 'OOPS';
  const myArray = [0,1];
  for (i = 2; i <= member; i++) {
    let sum = myArray[myArray.length - 1] + myArray[myArray.length - 2];
    myArray.push(sum);
  }
  return myArray[member];
};

// Do not edit below this line
module.exports = fibonacci;
