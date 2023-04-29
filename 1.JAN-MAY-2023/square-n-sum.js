// https://www.codewars.com/kata/515e271a311df0350d00000f/train/javascript
// Complete the square sum function so that it squares each number passed into it and then sums the results  of all together.
// see imgs folder 1.png

function squareSum(numbers) {
  //   checking for non-empty array
  if (numbers.length !== 0) {
    let squaredArray = numbers.map((item) => {
      return item * item;
    });
    let sum = squaredArray.reduce((total, value) => {
      return total + value;
    });
    return sum;
  } else {
    //if it is empty array
    return 0;
  }
}
squareSum([1, 2, 2]);
