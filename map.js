const _ = require('./index');

const map = function(array, callback) {
  const results = [];
  for(let item of array) {
    results.push(callback(item));
  }
  return results;
}


_.assertArraysEqual(map(['ramesh', 'mouse'], word => word[0]), ['r', 'm']) // => true
_.assertArraysEqual(map(['light', 'india', 'gain', 'house', 'train'], word => word[0]), ['l', 'i', 'g', 'h', 't']) // => true