const assert = require('chai').assert;
// const assertEqual = require(`../assertEqual`);
const head = require('../head');

// assertEqual(head([1,2,3,4,5]), 1); //=> Should pass
// assertEqual(head([1,"ramesh"]), "ramesh"); //=> Should Fail

describe('#head', () => {
  it('returns 1 for [1,2,3]', () => {
    assert.strictEqual(head([1,2,3]), 1);
  });

  it('returns "5" for [5]', () => {
    assert.strictEqual(head(['5']), '56');
  });
});

