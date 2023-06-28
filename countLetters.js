const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(sentence) {
  let result = {};

  if (typeof (sentence) !== 'string') {
    return 'Invalid input';
  }

  let formattedSentence = sentence.split(' ').join('');
  for (let char of formattedSentence) {
    if (result[char]) {
      result[char] += 1;
    } else {
      result[char] = 1;
    }
  }
  return result;
};

console.log(countLetters("lighthouse in the house"));
console.log(countLetters(22));
console.log(countLetters([22]));