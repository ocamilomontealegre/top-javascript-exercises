const repeatString = function(string, number) {
  let newString = "";
  if (number > 0) {
    for (let i = 1; i < number + 1; i++) {
      newString = newString + string;
    }
  } else if (number < 0) {
    return "ERROR";
  } else if ("") {
    return "";
  }
  return newString;
};

// Do not edit below this line
module.exports = repeatString;
