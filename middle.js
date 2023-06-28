const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Pass. Both arrays are equal.`);
    return true;
  }
  console.log(`🛑🛑🛑 Failed: Both arrays are not equal.`);
  return false;
};

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

assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3, 4]);