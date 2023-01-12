//https://www.codewars.com/kata/55d24f55d7dd296eb9000030/train/javascript
//PROBLEM
/*
Summation
Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

For example (Input -> Output):

2 -> 3 (1 + 2)
8 -> 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)

*/
//SOLUTION
var summation = function (num) {
  // Code here
  let array = [];
  while (num != 0) {
    array.push(num--);
  }
  // return array;

  while (array.length != 0) {
    let sum = 0;
    sum = sum + array[array.length - 1];
    return sum;
  }
};
