const sumAll = function (...args) {
  let theArray = args.sort();
  // Check if negative value is present
  if (theArray[0] < 0) return "ERROR";
  // Check if non integer value is present
  if (
    !Number.isInteger(theArray[0]) ||
    !Number.isInteger(theArray[theArray.length - 1])
  )
    return "ERROR";

  let sumArgs = 0;
  for (let i = theArray[0]; i <= theArray[theArray.length - 1]; i++) {
    sumArgs += i;
  }

  return sumArgs;
};

// Do not edit below this line
module.exports = sumAll;
