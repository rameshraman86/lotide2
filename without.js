const assertArraysEqual = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    console.log(`Both the provided arrays are not equal.`);
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      console.log(`Both the provided arrays are not equal.`);
      console.log("running this");
      return false;
    }
  }
  console.log(`Both the provided arrays are equal.`);
  return true;
};

const without = function(source, itemsToRemove) {
  let updatedSource = source.slice();

  for (let item of itemsToRemove) {
    for (let i = 0; i < updatedSource.length; i++) {
      if (item === updatedSource[i]) {
        updatedSource.splice(i, 1);
      }
    }
  }
  return updatedSource;
};



assertArraysEqual(without([1, 2, 3, 1], [1]), [2, 3]); //Pass
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]); //Pass
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2", "3"]); //fail

//test for original array
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);