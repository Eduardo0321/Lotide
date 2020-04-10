// const assertEqual = require('./assertEqual');

//   const words = (["Hello", "Lighthouse", "Labs"]);
//   let newArray = tail(words);
//   assertEqual(newArray.length, 2); // ensure we get back two elements
//   assertEqual(newArray[0], "Lighthouse"); // ensure first element is "Lighthouse"
//   assertEqual(newArray[1], "Labs"); // ensure second element is "Labs"
  
//   const words = ["Lighthouse", "Labs"];
//   tail(words);
//   assertEqual(words.length, 3);


  const assert = require('chai').assert;
const head   = require('../tail');

describe("#tail", () => {
  it("returns [2, 3] for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), [2, 3]);
  });
});

it("returns ['5', 3] for ['7', '5', '3']", () => {
  assert.strictEqual(head(['7', '5', '3']), ['5', '3']); 
});