const leapYears = function() {
  let year = arguments[0];
  if ((year % 4 === 0 && year % 100 !== 0) || (year % 100 === 0 && year % 400 === 0))
  {
    return true;
  } return false;
};

console.log(leapYears(1996));
// Do not edit below this line
module.exports = leapYears;
