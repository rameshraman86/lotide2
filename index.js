// index.js
const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');
const flattenRecursive = require('./flatten');
const eqArrays = require('./eqArrays');
const assertEqual = require('./assertEqual');
const assertArraysEqual = require('./assertArraysEqual');
const eqObjects = require('./eqObjects');


module.exports = {
  head,
  tail,
  middle,
  eqArrays,
  assertArraysEqual,
  assertEqual,
  eqObjects,
  flattenRecursive
};