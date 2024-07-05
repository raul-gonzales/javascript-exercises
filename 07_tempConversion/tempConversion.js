const convertToCelsius = function(fValue) {
  return parseFloat(((fValue - 32) * (5/9)).toFixed(1));
};

const convertToFahrenheit = function(cValue) {
  return parseFloat((cValue * (9/5) + 32).toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
