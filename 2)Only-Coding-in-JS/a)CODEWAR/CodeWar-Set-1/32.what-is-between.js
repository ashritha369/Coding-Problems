//https://www.codewars.com/kata/55ecd718f46fba02e5000029/train/javascript
/*Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

For example:

a = 1
b = 4
--> [1, 2, 3, 4]
*/

// My Attempt:
function between(a, b) {
  // your code here
  let array = [];
  let i = 1;
  while (a != b) {
    array.push(a);
    a = a + i;
  }
  i++;
  array.push(b);
  return array;
}
between(-2, 2);
