// let assertEqual = function(actual, expected) {
//   if(actual === expected) {
//   console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
//   } else if (actual !== expected) {
//       console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
//     }
// }

const assertEqual = require('./assertEqual');
  
let eqArrays = function(array1, array2) {
  if (JSON.stringify(array1) === JSON.stringify(array2)) {
    return true;
  }
};

module.exports = eqArrays;
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);
