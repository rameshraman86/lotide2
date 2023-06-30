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

const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length === Object.keys(object2).length) {
    for (let key in object1) {
      if (!object2[key]) {
        return false;
      }
      if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
        if (!eqArrays(object1[key], object2[key])) {
          return false;
        }
      } else {
        if (object1[key] !== object2[key]) {
          return false;
        }
      }
    }
    return true;
  }
  return false;
};


//Implement assertObjectsEqual which will take in two objects and console.log an appropriate message to the console.

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Pass. ${actual} === ${expected}`);
  }
  else {
    console.log(`🛑🛑🛑 Failed: ${actual} == ${expected}`);
  }
};

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };

const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };

const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue", "green"], sleeveLength: "long" };

assertObjectsEqual(eqObjects(shirtObject, anotherShirtObject), true); // => true
assertObjectsEqual(eqObjects(shirtObject, longSleeveShirtObject), false); // => false
assertObjectsEqual(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject), true); // => true
assertObjectsEqual(eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject), false); // => false
