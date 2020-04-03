let assertEqual = function(actual, expected) {
  if(actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`); 
  } else if (actual !== expected) {
        console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
      }
  }

const findKeyByValue = function(obj, value) {
   for (let key of value) {
     if (obj[key] === value) {
       return key
     }
   }
   return undefined;
 };

const bestTVShowsByGenre = { 
   sci_fi: "The Expanse",
   comedy: "Brooklyn Nine-Nine",
   drama:  "The Wire"
 };
 
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), undefined);

console.log(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
console.log(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
