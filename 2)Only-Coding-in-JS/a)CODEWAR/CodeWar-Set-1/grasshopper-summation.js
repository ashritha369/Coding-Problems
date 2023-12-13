//https://www.codewars.com/kata/55d24f55d7dd296eb9000030/train/javascript
//PROBLEM
/*
Summation
Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

For example (Input -> Output):

2 -> 3 (1 + 2)
8 -> 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)

*/
//SOLUTION USING FOR LOOP
var summation = function (num) {
  // Code here
  let array = [];
  let sum = 0;
  for (i = 0; i + 1 <= num; i++) {
    array.push(i + 1);
  }
  console.log(array);
  //   return array;

  for (i = 0; i < array.length; i++) {
    sum = array[i] + sum;
  }
  return sum;
};

//SOLUTION USING WHILE LOOP

var summation = function (num) {
  // Code here
  let array = [];
  let sum = 0;
  while (num != 0) {
    array.push(num);
    num--;
  }
  console.log(array);
  let i = 0;
  while (i != array.length) {
    sum = array[i] + sum;
    i++;
  }
  return sum;
};
summation(8);
