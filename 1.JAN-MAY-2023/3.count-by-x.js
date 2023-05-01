// Count by Xs : https://www.codewars.com/kata/5513795bd3fafb56c200049e/train/javascript

// Same problem but  name as 'Count Monkeys' with scenario: https://www.codewars.com/kata/56f69d9f9400f508fb000ba7

//-------------------------------------------------------------------------------------------

// WE WILL SOLVE COUNT BY Xs : https://www.codewars.com/kata/5513795bd3fafb56c200049e/train/javascript

/*
Create a function with two arguments that will return an array of the first n multiples of x.

Assume both the given number and the number of times to count will be positive numbers greater than 0.

Return the results as an array or list ( depending on language ).

Examples
countBy(1,10) === [1,2,3,4,5,6,7,8,9,10]
countBy(2,5) === [2,4,6,8,10]
*/
//MY SOLUTION:
function countBy(x, n) {
  let z = [];
  for (let i = 1; i <= n; i++) {
    z.push(x * i);
  }

  return z;
}

//ANOTHER WAY SOLUTION -1
function countBy(x, n) {
  var z = [];
  let y = x;
  for(i=0; i<n; i++){
    z[i] = x;
    x += y;
  }

  return z;
}