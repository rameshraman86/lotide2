// Implement takeUntil which will keep collecting items from a provided array until the callback provided returns a truthy value.

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


const takeUntil = function(array, callback) {
  let results = [];
  for (let val of array) {
    if (callback(val)) {
      return results;
    } else {
      results.push(val);
    }
  }
  return results;
}



assertArraysEqual(takeUntil([1, 2, 5, 7, 2, -1, 2, 4, 5], x => x < 0), [ 1, 2, 5, 7, 2 ]) //--> Pass
console.log('---');
assertArraysEqual(takeUntil([1, 2, 5, 7, 2, -1, 2, 4, 5], x => x < 0), [ 1, 2, 5, 7, 2, 5 ]) //--> Fail
console.log('---');
assertArraysEqual(takeUntil(["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"],x => x === ',' ), [ 'I\'ve', 'been', 'to', 'Hollywood' ]); //--> Pass