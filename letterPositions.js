let assertArraysEqual = function(actual, expected) {
  if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
} else if (JSON.stringify(actual) !== JSON.stringify(expected)) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
}

let eqArrays = function(array1, array2) {
  if (JSON.stringify(array1) === JSON.stringify(array2)) {
    return true;
}
}

const letterPositions = function(sentence) {
  const results = {};
  for(letters of sentence) {
      results[letters] = [];
  }
  for(var b in results) {
      for(var a = 0; a < sentence.length; a++) {
          if(b === sentence[a]) {
              results[b].push(a);
          }
      }
  }
  


  return results;
};

console.log(letterPositions('lighthouse in the house'));
assertArraysEqual(letterPositions("hello").e, [1]);