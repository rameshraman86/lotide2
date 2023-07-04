const assertEqual = require('./assertEqual');

const tail = function(arr) {
  if (Array.isArray(arr)) {
    let tailOfArray = arr.slice(1);
    return tailOfArray;
  }
  if (!arr.length) {
    return arr;
  }
};

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!