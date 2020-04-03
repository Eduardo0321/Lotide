let eqArrays = function(array1, array2) {
  if (JSON.stringify(array1) === JSON.stringify(array2)) {
    return true;
}
}


let assertArraysEqual = function(actual, expected) {
  if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
} else if (JSON.stringify(actual) !== JSON.stringify(expected)) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
}


const middle = function(array) {
  if (array.length <= 2) {
    return [];
  } else {
    let midIndex = Math.ceil(array.length / 2) - 1;
    if (array.length % 2) {
      return [array[midIndex]];
    } else {
      return [array[midIndex], array[midIndex + 1]];
    }
  }
};
module.exports = middle;


middle([1]) // => []
middle([1, 2]) // => []
middle([1, 2, 3]) // => [2]
middle([1, 2, 3, 4, 5]) // => [3]
middle([1, 2, 3, 4]) // => [2, 3]
middle([1, 2, 3, 4, 5, 6]) // => [3, 4]
assertArraysEqual(eqArrays(middle([1, 2, 3, 4, 5, 6], [3, 4])));
assertArraysEqual(eqArrays(middle([1, 2, 3, 4, 5], [3])));
assertArraysEqual(eqArrays(middle([1, 2],[])));