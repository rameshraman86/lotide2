//head.js will return the first element of an array.

const assertEqual = require(`./assertEqual`);

const head = function(arr) {
  if (Array.isArray(arr) && arr.length !== 0) {
    return arr[0];
  }
  if (!Array.isArray(arr)) {
    return 'Not a valid value';
  }
};

assertEqual(head([1,2,3,4,5]), 1); //=> Should pass
assertEqual(head([1,"ramesh"]), "ramesh"); //=> Should Fail