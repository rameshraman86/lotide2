const findKeyByValue = function(obj, value) {
  for(let key in obj) {
    if (obj[key] === value) {
      return key;
    }
  }
};

module.exports = findKeyByValue;