// https://www.codewars.com/kata/55fab1ffda3e2e44f00000c6/train/javascript
//QUESTION
/*
The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored).

For example:

1.08 --> 30
Note! The input is a Real number (actual type is language dependent) and is >= 0. The result should be an Integer.

*/

// SOLUTION
function cockroachSpeed(s) {
  //1km=1000m
  //1m=100cm
  //1.08*100000

  /*1km-100000
    1.08km-x
    x=[1.08km*100000]/1km
    x=108000cm
    
    
    1hour=60min=3600sec
    
    108000/3600
    
    = 1080/36
    = 30 */

  let x = s * 100000;
  const seconds = 3600;
  let result = Math.floor(x / seconds);
  return result;
}
cockroachSpeed(1.08);

//SHORTEST SOLUTIONS

//SHORTEST SOLUTION 1
const cockroachSpeed = (s) => Math.floor(s / 0.036);

//SHORTEST SOLUTION 2
function cockroachSpeed(s) {
  //multiply km/m by 27.7777777778
  return Math.floor(s * 27.7777777778);
}
