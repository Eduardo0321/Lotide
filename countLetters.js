
let assertEqual = function(actual, expected) {
  if(actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`); 
  } else if (actual !== expected) {
        console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
      }
  }

  let countLetters = function(nbLetters) {
    const output = {};
    for (let letters of nbLetters) {
      if (letters !== " ") {
        if (output [letters]){
        output[letters] += 1;
      } else {
        output[letters] = 1;
      }}
    }
    return output;
  }

  console.log(countLetters("lighthouse in the house"));
  console.log(countLetters("First week already burned"));