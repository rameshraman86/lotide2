const letterPositions = function(sentence) {
  if (typeof (sentence) !== 'string') {
    return 'incorrect input';
  }
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    if (results[sentence[i]]) {
      results[sentence[i]].push(i);
    } else {
      results[sentence[i]] = [];
      results[sentence[i]].push(i);
    }
  }
  delete results[' '];
  return results;
};

module.exports = letterPositions;