//program to return everything except for first element of array
const tail = function(arr) {
  if (Array.isArray(arr)) {
    let tailOfArray = arr.slice(1);
    return tailOfArray;
  }
  if (!arr.length) {
    return arr;
  }
};

module.exports = tail;