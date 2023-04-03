//https://www.codewars.com/kata/55fd2d567d94ac3bc9000064/train/javascript
/*

Given the triangle of consecutive odd numbers:
             1
          3     5
       7     9    11
   13    15    17    19
21    23    25    27    29

Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)
1 -->  1
2 --> 3 + 5 = 8

ARRAYS,LISTS,MATHEMATICS,FUNDAMENTALS

Test cases with output:
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(rowSumOddNumbers(1), 1);
    assert.strictEqual(rowSumOddNumbers(42), 74088);
  });
});

*/

function rowSumOddNumbers(n) {
  // TODO
  let array = [];
  for (let i = 1; i < n * 2; i = i + 2) {
    array.push(n * (n - 1) + i);
  }
  console.log(array);
  return array.reduce((total, value) => {
    return total + value;
  });
}
