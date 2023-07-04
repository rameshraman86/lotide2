const _ = require('./index');

const assertArraysEqual = function(arr1, arr2) {
  if (_.eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Pass. Both arrays are equal.`);
    return true;
  }
  console.log(`🛑🛑🛑 Failed: Both arrays are not equal.`);
  return false;
};

module.exports = assertArraysEqual;