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

const flatten = function(arr) {
  let flattendedArray = [];
  for (let mainArrVal of arr) {
    if (!Array.isArray(mainArrVal)) {
      flattendedArray.push(mainArrVal);
    } else {
      for (let innerArray of mainArrVal) {
        flattendedArray.push(innerArray);
      }
    }
  }
  return flattendedArray;
};

//Recursive method
const flattenRecursive = function(arr, flattendedArray = []) {
  for (let val of arr) {
    if (!Array.isArray(val)) {
      flattendedArray.push(val);
    } else {
      flattenRecursive(val, flattendedArray);
    }
  }
  return flattendedArray;
};

assertArraysEqual(flattenRecursive([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);