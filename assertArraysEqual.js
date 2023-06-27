const assertArraysEqual = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    console.log(`Both the provided arrays are not equal.`);
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      console.log(`Both the provided arrays are not equal.`);
      return false;
    }
  }
  console.log(`Both the provided arrays are equal.`)
  return true;
};


assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [3, 2, 1]);
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]);
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]);
