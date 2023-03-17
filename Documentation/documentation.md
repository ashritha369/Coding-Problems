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
