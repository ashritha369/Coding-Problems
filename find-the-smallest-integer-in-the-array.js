/*Given an array of integers your solution should find the smallest integer.
/https://www.codewars.com/kata/55a2d7ebe362935a210000b2
For example:

Given [34, 15, 88, 2] your solution will return 2
Given [34, -345, -1, 100] your solution will return -345
You can assume, for the purpose of this kata, that the supplied array will not be empty.*/
function smallInteger(array) {
  return Math.min(...array);
}
smallInteger([-3, -2, -1, 0, 1, 2, 3]);