- Pushing codewars solution to github
  [https://youtu.be/aoBOUmO4QP0](https://youtu.be/aoBOUmO4QP0)

- CODEWAR- in GOOGLE-DOC-PRACTICE- https://docs.google.com/document/d/15pm2DoU3yWhm7l87CkP3UI4bBrHDuRdiL4VBCvtKnNQ/edit

---

# MAIN REFERENCE : W3SCHOOLS - JavaScript and HTML DOM Reference

## --> [https://www.w3schools.com/jsref/](https://www.w3schools.com/jsref/)

- includes()-->[https://www.w3schools.com/jsref/jsref_includes.asp](https://www.w3schools.com/jsref/jsref_includes.asp)

- indexOf()-->[https://www.w3schools.com/jsref/jsref_indexof.asp](https://www.w3schools.com/jsref/jsref_indexof.asp)

- replace()-->[https://www.w3schools.com/jsref/jsref_replace.asp](https://www.w3schools.com/jsref/jsref_replace.asp)

  -map()-->[https://www.w3schools.com/jsref/jsref_map.asp](https://www.w3schools.com/jsref/jsref_map.asp)

- In a function, always remember to return the values.

- toString() [https://www.w3schools.com/jsref/jsref_tostring_number.asp](https://www.w3schools.com/jsref/jsref_tostring_number.asp)

- slice() [https://www.w3schools.com/jsref/jsref_slice_array.asp](https://www.w3schools.com/jsref/jsref_slice_array.asp) --> Geeks for geeks [https://www.geeksforgeeks.org/javascript-array-slice-method/](https://www.geeksforgeeks.org/javascript-array-slice-method/)

- shift() and pop() [https://www.geeksforgeeks.org/shift-vs-pop-method-in-javascript/](https://www.geeksforgeeks.org/shift-vs-pop-method-in-javascript/)

- Math.ceil(), Math.floor(), Math.round() -[https://stackabuse.com/rounding-numbers-in-javascript-using-ceil-floor-and-round/](https://stackabuse.com/rounding-numbers-in-javascript-using-ceil-floor-and-round/)

- forEach() : [https://www.w3schools.com/jsref/jsref_foreach.asp](https://www.w3schools.com/jsref/jsref_foreach.asp)

---

- Can you put a return in a ternary operator JavaScript?
  **You cannot assign a return statement to a variable.**
  [https://stackoverflow.com/questions/19439219/ternary-operator-with-return-statements-javascript](https://stackoverflow.com/questions/19439219/ternary-operator-with-return-statements-javascript)

- substring(): https://www.w3schools.com/jsref/jsref_substring.asp --> The substring() method extracts characters, between two indices (positions), from a string, and returns the substring.

- endsWith() :[https://www.w3schools.com/jsref/jsref_endswith.asp](https://www.w3schools.com/jsref/jsref_endswith.asp) -->The endsWith() method returns true if a string ends with a specified string.

- startsWith():[https://www.w3schools.com/jsref/jsref_startswith.asp](https://www.w3schools.com/jsref/jsref_startswith.asp)-->The startsWith() method returns true if a string starts with a specified string.

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
