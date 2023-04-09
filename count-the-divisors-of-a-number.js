//https://www.codewars.com/kata/542c0f198e077084c0000c2e/train/javascript
/*
Count the number of divisors of a positive integer n.

Random tests go up to n = 500000.

Examples (input --> output)
4 --> 3 (1, 2, 4)
5 --> 2 (1, 5)
12 --> 6 (1, 2, 3, 4, 6, 12)
30 --> 8 (1, 2, 3, 5, 6, 10, 15, 30)
Note you should only return a number, the count of divisors. The numbers between parentheses are shown only for you to see which numbers are counted in each case.

NUMBER THEORY + MATHEMATICS + FUNDAMENTALS
*/
//My Attempt
function getDivisorsCnt(n) {
  // todo
  let array = [];
  let y = 1; // 'y' to generate natural positive numbers
  while (y <= n) {
    if (n % y === 0) {
      array.push(y);
    }
    y++;
  }
  return array.length;
}
