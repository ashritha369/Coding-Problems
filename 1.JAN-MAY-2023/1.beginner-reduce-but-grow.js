//https://www.codewars.com/kata/57f780909f7e8e3183000078/train/javascript
/*
Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

[1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24
*/
//SOLUTION-1
function grow(x) {
  let value = 1;
  x.forEach((item) => {
    value = item * value;
  });
  return value;
}
grow([1, 2, 3, 4]);

//SOLUTION-2
function grow(x) {
  let value = 1;
  x.forEach(multiply);

  function multiply(item) {
    value = item * value;
  }
  return value;
}
grow([1, 2, 3, 4]);
