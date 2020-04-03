let assertEqual = function(actual, expected) {
  if(actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`); 
  } else if (actual !== expected) {
        console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
      }
  }

let eqArrays = function(array1, array2) {
   if (JSON.stringify(array1) === JSON.stringify(array2)) {
     return true;
 }
 }


let eqObjects = function(object1, object2) {
 let objArr1 = Object.keys(object1);
 let objArr2 = Object.keys(object2);

if (objArr1.length !== objArr2.length) {
  return false
}
for (key of objArr1) {
 if (object1[key] !== object2[key]) {
 return false
 }
return true
 }
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
       
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }


};
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(assertObjectsEqual(ab, ba)); // => true
  
const abc = { a: "1", b: "2", c: "3" };
console.log(assertObjectsEqual(ab, abc)); // => false
  
assertEqual(assertObjectsEqual(ab, ba), true);
assertEqual(assertObjectsEqual(ab, abc), false);