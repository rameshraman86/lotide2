const _ = require('../index');
const assert = require('chai').assert;


describe('#middle', () => {
  it('return [] for [1] or [1,2]', () => {
    assert.deepEqual(_.middle([1]), []);
    assert.deepEqual(_.middle([1,2]), []);
  });

  it('return middle 2 elements for [1, 2, 3, 4]', () => {
    assert.deepEqual(_.middle([1, 2, 3, 4]), [2,3]);
  });

  it('return [3] for [1, 2, 3, 4, 5]', () => {
    assert.deepEqual(_.middle([1, 2, 3, 4, 5]), [3]);
  })
});

