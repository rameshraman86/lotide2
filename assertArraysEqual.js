const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😀Assertion Passed`);
  } else {
    console.log(`🥵Assertion Failed`);
  }
};

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
    console.log(`Both the provided arrays are equal.`);
    return true;
  }
  console.log(`Both the provided arrays are not equal.`);
  return false;
};