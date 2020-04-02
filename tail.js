let assertEqual = function(actual, expected) {
  if(actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`); 
  } else if (actual !== expected) {
        console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
      }
  }

  let tail = function() {
    return words.slice(1);
  };

  const words = (["Hello", "Lighthouse", "Labs"]);
  let newArray = tail(words);
  assertEqual(newArray.length, 2); // ensure we get back two elements
  assertEqual(newArray[0], "Lighthouse"); // ensure first element is "Lighthouse"
  assertEqual(newArray[1], "Labs"); // ensure second element is "Labs"
  


  const words = ["Lighthouse", "Labs"];
  tail(words);
  assertEqual(words.length, 3);

