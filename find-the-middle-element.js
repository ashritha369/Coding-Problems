//https://www.codewars.com/kata/545a4c5a61aa4c6916000755/train/javascript

/*
As a part of this Kata, you need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.

The input to the function will be an array of three distinct numbers (Haskell: a tuple).

For example:

gimme([2, 3, 1]) => 0
2 is the number that fits between 1 and 3 and the index of 2 in the input array is 0.

Another example (just to make sure it is clear):

gimme([5, 10, 14]) => 1
10 is the number that fits between 5 and 14 and the index of 10 in the input array is 1.

*/

// code working for 101 test cases except 3 test cases and 3 exit code

function gimme(triplet) {
  //The expression [...triplet] creates a shallow copy of the triplet array. Because sort modifies original array
  let sorted = [...triplet].sort(function (a, b) {
    return a - b;
  });
  let middleValueAtAscending = sorted.find(checkValue);

  function checkValue(value) {
    if (value === sorted[1]) {
      return value;
    }
  }

  console.log("middle value at ascending", middleValueAtAscending);
  console.log("givenTriplets", triplet);

  return triplet.indexOf(middleValueAtAscending);
}

gimme([33, 1, 18]);

// This code if failing when we encounter 0,
/*
The issue seems to be related to the fact that the sort() method sorts the elements of the array in place, which can lead to unexpected behavior when sorting arrays that contain non-numeric values such as undefined, null, or NaN.

In this case, it looks like the input array contains a 0 value, which can cause issues when sorting the array using the a-b comparison function.
*/

//i.e is for

//[ -33, 0, 38 ]

//CORRECT CODE PASSING FOR ALL TEST CASES
function gimme(triplet) {
  let sorted = [...triplet].sort(function (a, b) {
    return a - b;
  });
  let middleValue = sorted[1];

  console.log("middle value", middleValue);
  console.log("givenTriplets", triplet);

  let index = triplet.indexOf(middleValue);
  if (index === -1) {
    // middleValue not found in triplet
    return 0;
  }
  return index;
}
