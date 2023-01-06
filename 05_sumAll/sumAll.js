const sumAll = function(num1, num2) {
  if ((typeof num1 === "number" && num1 > 0) && (typeof num2 === "number" && num2 > 0)) {
    let sum = 0;
    if (num1 < num2) {
      for (let i = num1; i <= num2; i++) {
        sum += i;
      }
      return sum;
    } else if (num1 > num2) {
      for (let i = num1; i >= num2; i--) {
        sum += i;
      }
      return sum;
    }
  } else {
   return "ERROR";
  }
};

console.log(sumAll(-7, 4));

// Do not edit below this line
module.exports = sumAll;
