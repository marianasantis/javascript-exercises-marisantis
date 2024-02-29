const removeFromArray = function(myArray, ...removed) {

  let removedIndex;

  for (i = 0; i < myArray.length; i++) {

    arrayItem = myArray[i];
    for (let removedItem of removed) {

      if (arrayItem === removedItem) {

        removedIndex = myArray.indexOf(removedItem); 
        myArray.splice(removedIndex, 1);
        i--;
      }
    }
  }
  return myArray;
};

module.exports = removeFromArray;