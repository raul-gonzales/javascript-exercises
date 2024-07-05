const leapYears = function (theYear) {
  let isLeapYear = false;

  if (theYear % 4 === 0){
    if (theYear % 400 === 0) return !isLeapYear;
    else if (theYear % 100 === 0) return isLeapYear;
    else return !isLeapYear;
  }
  return isLeapYear;
};

// Do not edit below this line
module.exports = leapYears;
