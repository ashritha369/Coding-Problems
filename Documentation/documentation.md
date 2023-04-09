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

# Modifying arrays

1. [https://www.freecodecamp.org/news/manipulating-arrays-in-javascript/](https://www.freecodecamp.org/news/manipulating-arrays-in-javascript/)

2. Array Methods - [https://www.w3schools.com/js/js_array_methods.asp](https://www.w3schools.com/js/js_array_methods.asp)

- JavaScript Array **pop()** : The pop() method **removes the last element from an array**, The pop() method returns the value that was "popped out".

- JavaScript Array **push()**: The push() method **adds a new element to an array (at the end)**, The push() method returns the new array length.

- JavaScript Array **shift()**: The shift() method **removes the first array element** and "shifts" all other elements to a lower index. The shift() method returns the value that was "shifted out".

- JavaScript Array **unshift()**: The unshift() method **adds a new element to an array**(at the beginning), and "unshifts" older elements, The unshift() method returns the new array length.

- JavaScript Array length : The length property provides an easy way to append a new element to an array.

```const fruits = ["Banana", "Orange", "Apple", "Mango"];
  fruits[fruits.length] = "Kiwi";
  console.log(fruits);
  VM604:3 (5) ['Banana', 'Orange', 'Apple', 'Mango', 'Kiwi']
```

- JavaScript Array **delete()**

```
Warning !
Array elements can be deleted using the JavaScript operator delete.

Using delete leaves undefined holes in the array.

Use pop() or shift() instead.
```

# Merging or Concatenating Arrays

- **concate()** : The concat() method creates a new array by merging (concatenating) existing arrays. The _concat() method does not change the existing arrays. It always returns a new array_. The concat() method can also take strings as arguments.

```
const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];

const myChildren = myGirls.concat(myBoys);
console.log(myChildren)

OUTPUT:  ['Cecilie', 'Lone', 'Emil', 'Tobias', 'Linus']
```

# Splicing and Slicing Arrays

- The splice() method adds new items to an array.

- The slice() method slices out a piece of an array.

---

- **JavaScript Array splice()** : The splice() method can be used to add new items to an array.
  --> The first parameter (2) defines the position where new elements should be added (spliced in).

  --> The second parameter (0) defines how many elements should be removed.

  --> The rest of the parameters ("Lemon" , "Kiwi") define the new elements to be added.

  --> The splice() method returns an array with the deleted items

```
const fruits = ["Banana", "Orange", "Apple", "Mango"];
const splicedFruits=fruits.splice(2, 0, "Lemon", "Kiwi");
console.log(splicedFruits);
console.log(fruits);
OUTPUT: []
OUTPUT: ['Banana', 'Orange', 'Lemon', 'Kiwi', 'Apple', 'Mango']
```

--> The first parameter (1) defines the position where new elements should be added (spliced in).

--> The second parameter (3) defines how many elements should be removed.

--> The rest of the parameters ("Lemon" , "Kiwi") define the new elements to be added.

```
const fruits = ["Banana", "Orange", "Apple", "Mango"];
const splicedFruits=fruits.splice(1, 3, "Lemon", "Kiwi");
console.log(splicedFruits);
console.log(fruits);
OUTPUT: ['Orange', 'Apple', 'Mango']
OUTPUT: ['Banana', 'Lemon', 'Kiwi']
```

- **Using splice() to Remove Elements**

```const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(0, 1);
```

--> The first parameter (0) defines the position where new elements should be added (spliced in).

--> The second parameter (1) defines how many elements should be removed.

--> The rest of the parameters are omitted. No new elements will be added.\_\_

---

- **JavaScript Array slice()** : The slice() method slices out a piece of an array into a new array.

This example slices out a part of an array starting from array element 1 ("Orange"):

```
const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(1);
console.log(citrus);
console.log(fruits);
OUTPUT: ['Orange', 'Lemon', 'Apple', 'Mango']
OUTPUT: ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango']
```

--> The slice() method creates a new array.

--> _The slice() method does not remove any elements from the source array_.

--> The slice() method can take two arguments like slice(1, 3).

--> The method then selects elements from the start argument, and up to (but not including) the end argument.

```
const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(1, 3);
console.log(citrus);
console.log(fruits);
OUTPUT: ['Orange', 'Lemon']
OUTPUT: ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango']
```

--> If the end argument is omitted, like in the first examples, the slice() method slices out the rest of the array.

```
const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(2);
console.log(citrus);
console.log(fruits);
OUTPUT:  ['Lemon', 'Apple', 'Mango']
OUTPUT:  ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango']
```

# Sorting Arrays

Reference: [https://www.w3schools.com/js/js_array_sort.asp](https://www.w3schools.com/js/js_array_sort.asp)

- **Sorting an Array** : The sort() method sorts an array alphabetically

```
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();
OUTPUT:  ['Apple', 'Banana', 'Mango', 'Orange']
```

- **Reversing an Array** : The reverse() method reverses the elements in an array. We can use it to sort an array in descending order

```
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();
fruits.reverse();
```

- **Numeric Sort** :
  --> By default, the sort() function sorts values as strings.

--> This works well for strings ("Apple" comes before "Banana").

--> However, if numbers are sorted as strings, "25" is bigger than "100", because "2" is bigger than "1".

--> Because of this, the sort() method will produce incorrect result when sorting numbers.

--> You can fix this by providing a compare function:

```const points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return a - b});
OUTPUT:  [1, 5, 10, 25, 40, 100]
```

--> Use the same trick to sort an array descending:

```const points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return b - a});
OUTPUT: [100, 40, 25, 10, 5, 1]
```

- **The Compare Function**
  --> The purpose of the compare function is to define an alternative sort order.

--> The compare function should return a negative, zero, or positive value, depending on the arguments:

```
function(a, b){return a - b}
```

--> When the sort() function compares two values, it sends the values to the compare function, and sorts the values according to the returned (negative, zero, positive) value.

--> If the result is negative, a is sorted before b.

--> If the result is positive, b is sorted before a.

--> If the result is 0, no changes are done with the sort order of the two values.

Example:

--> The compare function compares all the values in the array, two values at a time (a, b).

--> When comparing 40 and 100, the sort() method calls the compare function(40, 100).

--> The function calculates 40 - 100 (a - b), and since the result is negative (-60), the sort function will sort 40 as a value lower than 100.

--> You can use this code snippet to experiment with numerically and alphabetically sorting:

```
const points = [40, 100, 1, 5, 25, 10];

// ALPHABETICALLY SORTING OF AN ARRAY

function myFunction1() {
  return points.sort();
}
function myFunction2() {
  return points.sort(function(a, b){return a - b});
}
myFunction1();
OUTPUT:  [1, 10, 100, 25, 40, 5]

//NUMERICAL SORTING OF AN ARRAY

const points = [40, 100, 1, 5, 25, 10];
function myFunction1() {
  return points.sort();
}
function myFunction2() {
  return points.sort(function(a, b){return a - b});
}

myFunction2();

OUTPUT: [1, 5, 10, 25, 40, 100]
```

--> Have a look on 'Fisher Yates Method'

- **Find the Highest (or Lowest) Array Value**

There are no built-in functions for finding the max or min value in an array.

However, after you have sorted an array, you can use the index to obtain the highest and lowest values.

1. Sorting ascending:

```
const points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return a - b});
// now points[0] contains the lowest value
// and points[points.length-1] contains the highest value
```

2. Sorting descending:

```const points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return b - a});
// now points[0] contains the highest value
// and points[points.length-1] contains the lowest value
```

Note : Sorting a whole array is a very inefficient method if you only want to find the highest (or lowest) value.

- **Using Math.max() on an Array**

--> we can use Math.max.apply to find the highest number in an array:

```
function myArrayMax(arr) {
  return Math.max.apply(null, arr);
}
myArrayMax([1,369,99,90])
OUTPUT: 369
```

NOTE: Math.max.apply(null, [1, 2, 3]) is equivalent to Math.max(1, 2, 3).

if arr=[1,2,3]
So we have to destructure if we have to pass the array for Math.max(...arr) else it will result in NaN

Example:

```
function myArrayMax(arr) {
  return Math.max(arr);
}
myArrayMax([1,369,99,90])
OUTPUT: NaN

//Destructuring array

function myArrayMax(arr) {
  return Math.max(...arr);
}
myArrayMax([1,369,99,90])
OUTPUT: 369
```

- **Using Math.min() on an Array**

--> You can use Math.min.apply to find the lowest number in an array

```
function myArrayMin(arr) {
  return Math.min.apply(null, arr);
}
myArrayMin([1,369,99,90])
OUTPUT: 1
```

NOTE: Math.min.apply(null, [1, 2, 3]) is equivalent to Math.min(1, 2, 3).

if arr=[1,2,3]
So we have to destructure if we have to pass the array for Math.min(...arr) else it will result in NaN

Example:

```
function myArrayMin(arr) {
  return Math.min(arr);
}
myArrayMin([1,369,99,90])
OUTPUT: NaN

//Destructuring array

function myArrayMin(arr) {
  return Math.min(...arr);
}
myArrayMin([1,369,99,90])
OUTPUT: 1
```

- **My Min / Max JavaScript Methods/ Home made method: using -Infinity and +Infinity**

-> The fastest solution is to use a "home made" method.

-> _This function loops through an array comparing each value with the highest value found:_
_Example (Find Max)_

```
function myArrayMax(arr) {
let len = arr.length;
let max = -Infinity;
while (len--) {
if (arr[len] > max) {
max = arr[len];
}
}
return max;
}
myArrayMax([33,66,99])
OUTPUT: 99
```

-> _This function loops through an array comparing each value with the lowest value found:_
_Example (Find Min)_

```function myArrayMin(arr) {
let len = arr.length;
let min = Infinity;
while (len--) {
if (arr[len] < min) {
min = arr[len];
}
}
return min;
}
myArrayMin([33,66,99])
OUTPUT: 33

```

- **Sorting Object Arrays**
  JavaScript arrays often contain objects:

Example

```
const cars = [
  {type:"Volvo", year:2016},
  {type:"Saab", year:2001},
  {type:"BMW", year:2010}
];
```

Even if objects have properties of different data types, the sort() method can be used to sort the array.

The solution is to write a compare function to compare the property values:

Example

```
cars.sort(function(a, b){return a.year - b.year});
```

# Array Iteration

## 1. JavaScript Array **forEach()**

- The forEach() method calls a function (a callback function) once for each array element.

```
const numbers = [45, 4, 9, 16, 25];
numbers.forEach(myFunction);

function myFunction(value, index, array) {
 console.log('The value, index, array are:', value, index, array)
}

OUTPUT:
VM498:5 The value, index, array are: 45 0 (5) [45, 4, 9, 16, 25]
VM498:5 The value, index, array are: 4 1 (5) [45, 4, 9, 16, 25]
VM498:5 The value, index, array are: 9 2 (5) [45, 4, 9, 16, 25]
VM498:5 The value, index, array are: 16 3 (5) [45, 4, 9, 16, 25]
VM498:5 The value, index, array are: 25 4 (5) [45, 4, 9, 16, 25]
```

## 2. JavaScript Array **map()**

- The map() method creates a new array by performing a function on each array element.

- The map() method does not execute the function for array elements without values.

- The map() method does not change the original array.

const numbers1 = [45, 4, 9, 16, 25];
const numbers2 = numbers1.map(myFunction);
console.log('Final Output Array is',numbers2)

```
function myFunction(value, index, array) {
 console.log('The value, index and array are:', value, index, array)
 return value * 2;
}
OUTPUT:
VM1309:7 The value, index and array are: 45 0 (5) [45, 4, 9, 16, 25]
VM1309:7 The value, index and array are: 4 1 (5) [45, 4, 9, 16, 25]
VM1309:7 The value, index and array are: 9 2 (5) [45, 4, 9, 16, 25]
VM1309:7 The value, index and array are: 16 3 (5) [45, 4, 9, 16, 25]
VM1309:7 The value, index and array are: 25 4 (5) [45, 4, 9, 16, 25]
VM1309:3 Final Output Array is (5) [90, 8, 18, 32, 50]
```

- Note that the function takes 3 arguments:
- The item value
- The item index
- The array itself
- When a callback function uses only the value parameter, the index and array parameters can be omitted:

## 3. JavaScript Array **filter()**

- The filter() method creates a new array with array elements that pass a test.

- This example creates a new array from elements with a value larger than 18:
- Note that the function takes 3 arguments:

The item value
The item index
The array itself
In certain examples , the callback function does not use the index and array parameters, so they can be omitted.

```const numbers = [45, 4, 9, 16, 25];
const over18 = numbers.filter(myFunction);
console.log('Final Filtered Array', over18)

function myFunction(value, index, array) {
    console.log('The value, index, array: ',value, index, array)
  return value > 18;
}
OUTPUT:
VM1913:6 The value, index, array:  45 0 (5) [45, 4, 9, 16, 25]
VM1913:6 The value, index, array:  4 1 (5) [45, 4, 9, 16, 25]
VM1913:6 The value, index, array:  9 2 (5) [45, 4, 9, 16, 25]
VM1913:6 The value, index, array:  16 3 (5) [45, 4, 9, 16, 25]
VM1913:6 The value, index, array:  25 4 (5) [45, 4, 9, 16, 25]
VM1913:3 Final Filtered Array (2) [45, 25]
```

## 4. JavaScript Array **reduce()**

- The reduce() method runs a function on each array element to produce (reduce it to) a single value.

- The reduce() method works from left-to-right in the array. See also reduceRight().

- The reduce() method does not reduce the original array.

- This example finds the sum of all numbers in an array

```const numbers = [45, 4, 9, 16, 25];
let sum = numbers.reduce(myFunction);
console.log('The sum is',sum)
function myFunction(total, value, index, array) {
    console.log('The total, value, index, array value are',total,value,index,array);
  return total + value;
}

OUTPUT:
VM2518:5 The total, value, index, array value are 45 4 1 (5) [45, 4, 9, 16, 25]
VM2518:5 The total, value, index, array value are 49 9 2 (5) [45, 4, 9, 16, 25]
VM2518:5 The total, value, index, array value are 58 16 3 (5) [45, 4, 9, 16, 25]
VM2518:5 The total, value, index, array value are 74 25 4 (5) [45, 4, 9, 16, 25]
VM2518:3 The sum is 99
```

Note that the function takes 4 arguments:

The total (the initial value / previously returned value)
The item value
The item index
The array itself
The example above does not use the index and array parameters. It can be rewritten to:

```
const numbers = [45, 4, 9, 16, 25];
let sum = numbers.reduce(myFunction);

function myFunction(total, value) {
  return total + value;
}
```

- The reduce() method can accept an initial value:

```const numbers = [45, 4, 9, 16, 25];
let sum = numbers.reduce(myFunction, 100);

function myFunction(total, value) {
  return total + value;
}

```

## 5. JavaScript Array **every()**

- The every() method checks if all array values pass a test.

- This example checks if all array values are larger than 18:

- The return value of applying this mthod on an array is boolean

```
const numbers = [45, 4, 9, 16, 25];
let allOver18 = numbers.every(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}
console.log(allOver18);
OUTPUT: s false
```

- Note that the function takes 3 arguments:

The item value
The item index
The array itself
When a callback function uses the first parameter only (value), the other parameters can be omitted:

```
const numbers = [45, 4, 9, 16, 25];
let allOver18 = numbers.every(myFunction);

function myFunction(value) {
  return value > 18;
}

```

## 6. JavaScript Array **some()**

- The some() method checks if some array values pass a test.

- This example checks if some array values are larger than 18:

```
const numbers = [45, 4, 9, 16, 25];
let someOver18 = numbers.some(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}
OUTPUT: true
```

## 7. JavaScript Array **indexOf()**

- The indexOf() method searches an array for an element value and returns its position.
- Note: The first item has position 0, the second item has position 1, and so on.

```
const fruits = ["Apple", "Orange", "Guava", "Mango"];
let position = fruits.indexOf("Guava");
console.log(position)

OUTPUT:  2
```

**Syntax** :

- `array.indexOf(item, start)`
  - item Required. The item to search for.
  - start Optional. Where to start the search. Negative values will start at the given position counting from the end, and search to the end.
  - Array.indexOf() returns -1 if the item is not found.

If the item is present more than once, it returns the position of the first occurrence.

## 8. JavaScript Array **lastIndexOf()**

- Array.lastIndexOf() is the same as Array.indexOf(), but returns the position of the last occurrence of the specified element.

```
const fruits = ["Apple", "Orange", "Apple", "Mango"];
let position = fruits.lastIndexOf("Apple");
console.log(position)
OUTPUT: 2
```

**Syntax**

- `array.lastIndexOf(item, start)`
  - item Required. The item to search for
  - start Optional. Where to start the search. Negative values will start at the given position counting - from the end, and search to the beginning

## 9. JavaScript Array **find()**

- The find() method returns the value of the first array element that passes a test function.

- This example finds (returns the value of) the first element that is larger than 18:

```
const numbers = [4, 9, 16, 25, 29];
let first = numbers.find(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}
console.log(first)
OUTPUT:  25
```

- Note that the function takes 3 arguments:

  - The item value
  - The item index
  - The array itself

- find() is not supported in Internet Explorer.

## 10. JavaScript Array **findIndex()**

- The findIndex() method returns the index of the first array element that passes a test function.

- This example finds the index of the first element that is larger than 18:

```
const numbers = [4, 9, 16, 25, 29];
let first = numbers.findIndex(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}
console.log(first)
OUTPUT: 3
```

## 11. JavaScript **Array.from()**

## 12. JavaScript Array **Keys()**

## 13. JavaScript Array **entries()**

## 14. JavaScript Array **includes()**

## 15. JavaScript Array **Spread (...)**

---

# Regular Expressions

- Refer this website : [https://regexr.com/](https://regexr.com/)

- [https://www.w3schools.com/jsref/jsref_obj_regexp.asp](https://www.w3schools.com/jsref/jsref_obj_regexp.asp)

- [https://youtu.be/zeMPry3ak6Y](https://youtu.be/zeMPry3ak6Y) by Code With Harry

- - Regular expressions in JavaScript (also known as regex or regexp) are a powerful tool for matching patterns in strings. Regular expressions are defined using a syntax that allows for the specification of patterns and rules to search, replace, and manipulate text.

**1. Matching a pattern in a string:**

```
const text = "Hello, world!";
const pattern = /world/;
const result = text.match(pattern);
console.log(result); // Output: ["world"]
```

In this example, we use the match() method to search for the word "world" in the string "Hello, world!". We define the regular expression pattern /world/ to match the text. The match() method returns an array containing the match if it is found, or null if it is not.

**2. Matching multiple occurrences of a pattern in a string**

```
const text = "The quick brown fox jumps over the lazy dog.";
const pattern = /the/gi;
const result = text.match(pattern);
console.log(result); // Output: ["The", "the", "the"]
```

In this example, we use the match() method to find all occurrences of the word "the" in the string "The quick brown fox jumps over the lazy dog." We define the regular expression pattern /the/gi to match all occurrences of the word "the" in a case-insensitive manner. The g flag stands for "global" and tells the regular expression engine to find all matches in the string, not just the first one.

**3. Replacing a pattern in a string:**

```
const text = "The quick brown fox jumps over the lazy dog.";
const pattern = /the/gi;
const replacement = "a";
const result = text.replace(pattern, replacement);
console.log(result); // Output: "a quick brown fox jumps over a lazy dog."
```

In this example, we use the replace() method to replace all occurrences of the word "the" with the letter "a" in the string "The quick brown fox jumps over the lazy dog." We define the regular expression pattern /the/gi to match all occurrences of the word "the" in a case-insensitive manner. We pass the string "a" as the replacement argument to replace all matches with the letter "a".

**4. Matching a pattern with special characters:**

```
const text = "The quick brown fox jumps over the lazy dog.";
const pattern = /\b\w{5}\b/g;
const result = text.match(pattern);
console.log(result); // Output: ["quick", "brown"]
```

In this example, we use the match() method to find all words in the string "The quick brown fox jumps over the lazy dog." that are exactly five characters long. We define the regular expression pattern /\b\w{5}\b/g to match all words that are exactly five characters long. The \b character is a word boundary that matches the beginning or end of a word. The \w character class matches any word character (letters, digits, and underscores), and the {5} quantifier specifies that we want exactly five characters. The g flag again stands for "global" and tells the regular expression engine to find all matches in the string, not just the first one.

## These are just a few examples of how regular expressions can be used in JavaScript. There are many more features and techniques that can be used to match and manipulate text using regular expressions.

# Difference between map() and forEach()

--> [https://www.geeksforgeeks.org/difference-between-foreach-and-map-loop-in-javascript/](https://www.geeksforgeeks.org/difference-between-foreach-and-map-loop-in-javascript/)

-->**Differences between forEach() and map() methods:**

1. The _forEach()_ method does not returns a new array based on the given array. _The map()_ method returns an entirely new array.

2. The _forEach()_ method returns “undefined“. The _map()_ method returns the newly created array according to the provided callback function.

3. The _forEach()_ method doesn’t return anything hence the method chaining technique cannot be applied here. With the _map()_ method, we can chain other methods like, reduce(),sort() etc.

4. The _forEach()_ is not executed for empty elements. _map()_ does not change the original array.
