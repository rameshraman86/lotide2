const _ = require('../index');
const assert = require('chai').assert;


describe('#letterPositions', () => {
  it('return index of letter position i as 5', () => {
    assert.deepEqual(_.letterPositions('lighting').i, [1,5]);
    assert.deepEqual(_.letterPositions('coffees').f, [2,3]);
  })
})