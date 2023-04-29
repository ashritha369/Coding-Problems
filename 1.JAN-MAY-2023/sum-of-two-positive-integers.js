//https://www.codewars.com/kata/558fc85d8fd1938afb000014/javascript
// Need the concept of modifying arrays, splicing and slicing concepts
// Array sorting

function sumTwoSmallestNumbers(numbers) {
  numbers.sort(function (a, b) {
    return a - b;
  });
  return numbers[0] + numbers[1];
}
