//head.js will return the first element of an array.
const head = function(arr) {
  if (Array.isArray(arr) && arr.length !== 0) {
    return arr[0];
  }
  if (!Array.isArray(arr)) {
    return 'Not a valid value';
  }
};

module.exports = head;