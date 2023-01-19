//https://www.codewars.com/kata/583710ccaa6717322c000105/train/javascript
//PROBLEM:
//This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.
//SOLUTION
function simpleMultiplication(number) {
  // your code........
  let i = 0;
  number % 2 === 0 ? (i = number * 8) : (i = number * 9);
  return i;
}
