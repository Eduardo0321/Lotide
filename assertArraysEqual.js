let assertArraysEquals = function(array1, array2) {
  if (JSON.stringify(array1) === JSON.stringify(array2)) {
    console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`);
} else if (JSON.stringify(array1) !== JSON.stringify(array2)) {
    console.log(`🛑🛑🛑 Assertion Failed: ${array1} !== ${array2}`);
  }
}

assertArraysEquals([1, 2, 3], [1, 2, 3]) // => true
assertArraysEquals([1, 2, 3], [3, 2, 1]) // => false
assertArraysEquals(["1", "2", "3"], ["1", "2", "3"]) // => true
assertArraysEquals(["1", "2", "3"], ["1", "2", 3]) // => false