//https://www.codewars.com/kata/577a98a6ae28071780000989/javascript
//QUESTION
/*
Your task is to make two functions ( max and min, or maximum and minimum, etc., depending on the language ) that receive a list of integers as input, and return the largest and lowest number in that list, respectively.

Examples (Input -> Output)
* [4,6,2,1,9,63,-134,566]         -> max = 566, min = -134
* [-52, 56, 30, 29, -54, 0, -110] -> min = -110, max = 56
* [42, 54, 65, 87, 0]             -> min = 0, max = 87
* [5]                             -> min = 5, max = 5
Notes
You may consider that there will not be any empty arrays/vectors.
*/
// SOLUTION
//  READ THIS LINK, TO UNDERSTAND VARIOUS WAYS TO SORT AN ARRAY  TO FIND IT'S HIGHEST AND LOWEST VALUES
//https://www.w3schools.com/js/js_array_sort.asp
// while loop in js: The while loop loops through a block of code as long as a specified condition is true.
//LOGIC PRACTICE -1

const integerArray = [-1, 0, 3, 2];

function checkIntegerMax(integerArray) {
  let length = integerArray.length;
  let max = -Infinity;
  while (length--) {
    if (integerArray[length] > max) {
      max = integerArray[length];
    }
  }
  return max;
}
function checkIntegerMin(integerArray) {
  let length = integerArray.length;
  let min = Infinity;
  while (length--) {
    if (integerArray[length] < min) {
      min = integerArray[length];
    }
  }
  return min;
}

checkIntegerMax();
checkIntegerMin();

// check this link
// https://www.youtube.com/watch?v=tPCOYESqQiY
