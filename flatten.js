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