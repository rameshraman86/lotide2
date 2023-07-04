const _ = require('../index');
const assert = require('chai').assert;


describe("#flatten ", () => {
  it('if [1, 2, [3, 4], 5, [6]], output should be flattended array [1, 2, 3, 4, 5, 6]', () => {
    assert.deepEqual(_.flattenRecursive([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
  });
});