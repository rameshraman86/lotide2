const assertArraysEqual = require('./assertArraysEqual');

const middle = function(array) {
  const arrayLength = array.length;
  const arrayMidIndex = Math.floor((arrayLength - 1) / 2);

  let result = [];

  if (arrayLength === 1 || arrayLength === 2) {
    return result;
  }
  if (arrayLength % 2 === 0) {
    result = array.slice(arrayMidIndex, arrayMidIndex + 2);
    return result;
  }
  result.push(array[(arrayLength - 1) / 2]);
  return result;

};

module.exports = middle;