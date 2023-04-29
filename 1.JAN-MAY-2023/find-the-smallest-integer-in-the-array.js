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

/*
- (...)-> Spread Operator:

1. The spread (...) syntax allows an iterable, such as an array or string, to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected

2. spread syntax is the opposite of rest syntax. Spread syntax "expands" an array into its elements

3. Spread syntax can be used when all elements from an object or array need to be included in a new array or object, or should be applied one-by-one in a function call's arguments list.

4. Only iterable objects, like Array, can be spread in array and function parameters. Many objects are not iterable, including all plain objects that lack a Symbol.iterator method

```
const obj = { key1: "value1" };
const array = [...obj]; // TypeError: obj is not iterable
```

```
On the other hand, spreading in object literals enumerates the own properties of the object. For typical arrays, all indices are enumerable own properties, so arrays can be spread into objects.

const array = [1, 2, 3];
const obj = { ...array }; // { 0: 1, 1: 2, 2: 3 }
```
*/
