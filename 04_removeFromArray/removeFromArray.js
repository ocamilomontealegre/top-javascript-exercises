const removeFromArray = function(array, element) {
  if (arguments.length > 1) {
    let newArray = arguments[0];
    for (let i = 1; i < arguments.length; i++) {
      if (newArray.includes(arguments[i])) {
        let indexOfElement = newArray.indexOf(arguments[i]);
        newArray.splice(indexOfElement, 1);
      }
    }
    return newArray;
  }
};

// Do not edit below this line
module.exports = removeFromArray;


