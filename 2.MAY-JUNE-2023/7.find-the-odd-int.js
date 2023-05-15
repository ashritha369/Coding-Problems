//https://www.codewars.com/kata/54da5a58ea159efa38000836/train/javascript
/*
Given an array of integers, find the one that appears an odd number of times.

There will always be only one integer that appears an odd number of times.

Examples
[7] should return 7, because it occurs 1 time (which is odd).
[0] should return 0, because it occurs 1 time (which is odd).
[1,1,2] should return 2, because it occurs 1 time (which is odd).
[0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
[1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).
*/

function findOdd(A) {
  let oddArray = [];
  for (let i = 0; i < A.length; i++) {
    let count = 0;
    for (let j = 0; j < A.length; j++) {
      if (A[j] === A[i]) {
        console.log(A[i], A[j]);
        count++;
      }
    }
    console.log(count);
    if (count % 2 !== 0) {
      oddArray.push(A[i]);
      console.log(oddArray);
    }
  }
  return oddArray.length > 0 ? oddArray[0] : null;
}

findOdd([5, 8, 5, 8, 5]);
