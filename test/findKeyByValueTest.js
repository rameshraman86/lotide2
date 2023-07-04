const _ = require('../index');

const assert = require('chai').assert;


describe('#findkeybyvalue', () => {
  it('return object key of the search value ', () => {
    const bestTVShowsByGenre = { 
      sci_fi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama:  "The Wire"
    };

    assert.equal(_.findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
    assert.equal(_.findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), 'comedy');
    assert.equal(_.findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
  });
});