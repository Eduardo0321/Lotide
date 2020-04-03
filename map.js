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



let words = ["ground", "control", "to", "major", "tom"];

let map = function(array, callback) {
    let results = [];
    for (let item of array) {
      results.push(callback(item));
    }
    return results;
  }



let results1 = map(words, word => word[3]);

console.log(results1);