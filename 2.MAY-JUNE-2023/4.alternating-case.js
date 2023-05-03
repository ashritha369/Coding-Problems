//https://www.codewars.com/kata/56efc695740d30f963000557/train/javascript
/*
Define String.prototype.toAlternatingCase (or a similar function/method such as to_alternating_case/toAlternatingCase/ToAlternatingCase in your selected language; see the initial solution for details) such that each lowercase letter becomes uppercase and each uppercase letter becomes lowercase. For example:
*/

//MY SOLUTION 1
function toAlternateCase(givenString) {
  let alternateCase = [];
  for (let i = 0; i < givenString.length; i++) {
    if (givenString[i] === givenString[i].toLowerCase()) {
      alternateCase.push(givenString[i].toUpperCase());
    } else if (givenString[i] === givenString[i].toUpperCase()) {
      alternateCase.push(givenString[i].toLowerCase());
    } else {
      alternateCase.push(" ");
    }
  }
  return alternateCase.join("");
}
toAlternateCase("hEllo woRld");

// MY SOLUTION 2 : with the prototype and this

`We use the this keyword instead of String in the second code because we are defining a method on the String object's prototype.

When we define a method on an object's prototype, the this keyword refers to the instance of the object on which the method is called.

In this case, when we call the toAlternatingCase method on a string object (like "hEllo woRld".toAlternatingCase()), the this keyword refers to that string object.

If we used String instead of this inside the method, we would be referencing the String object itself, rather than the instance of the object on which the method is being called. This would cause our method to not work as intended, because we need to modify the specific instance of the string object we're calling the method on.

So, to summarize: we use the this keyword inside the method to refer to the instance of the String object on which the method is being called, which allows us to modify that instance of the string object as intended.`;
String.prototype.toAlternatingCase = function () {
  // Define your method here :)
  let alternateCase = [];
  for (let i = 0; i < this.length; i++) {
    if (this[i] === this[i].toLowerCase()) {
      alternateCase.push(this[i].toUpperCase());
    } else if (this[i] === this[i].toUpperCase()) {
      alternateCase.push(this[i].toLowerCase());
    } else {
      alternateCase.push(this[i]);
    }
  }
  return alternateCase.join("");
};
"hEllo woRld".toAlternatingCase();

`
The difference between the two codes is that the first code defines a function toAlternateCase that takes a string argument givenString and returns the string in alternating case, while the second code extends the built-in String object by defining a method toAlternatingCase that can be called on any string and returns the string in alternating case.

In terms of the implementation, the first code is a standalone function that takes a string as input and returns the output as a result. The second code extends the String object prototype by adding a new method, toAlternatingCase, that can be called on any string object. When called on a string object, the method returns the output as a result.

The second code is more elegant and efficient since it extends the built-in String object prototype, and the method can be called on any string object without needing to define and call a standalone function each time.
`;

`In object-oriented programming, an instance is an occurrence of a class or object. A class is a blueprint for creating objects, and an object is an instance of a class.

In JavaScript, objects can be created using constructor functions or object literals. When you create a new object using a constructor function, you are creating an instance of that object. For example, when you create a new Date object using the Date constructor, like this: var myDate = new Date(), myDate is an instance of the Date object.

Similarly, when you create a string using the String constructor or a string literal, like this: var myString = "hello", myString is an instance of the String object.

Each instance of an object has its own unique set of properties and values, which can be accessed and modified independently of other instances of the same object.`;

`
In our code ,The string "hEllo woRld" is an instance of the String object. We call the toAlternatingCase method on this string instance using the dot notation, like this: "hEllo woRld".toAlternatingCase(). This applies the toAlternatingCase method to the specific string instance that we have created.

`;
// OBJECT PROTOTYPES : https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes

// STRING PROTOTYPES : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

//SHORTEST SOLUTION 1
String.prototype.toAlternatingCase = function () {
  return this.split("")
    .map((a) => (a === a.toUpperCase() ? a.toLowerCase() : a.toUpperCase()))
    .join("");
};

//SHORTEST SOLUTION 2
String.prototype.toAlternatingCase = function () {
  new_str = "";
  for (var i = 0; i < this.length; i++) {
    if (this[i] === this[i].toUpperCase()) {
      new_str += this[i].toLowerCase();
    } else {
      new_str += this[i].toUpperCase();
    }
  }
  return new_str;
};

//SHORTEDT SOLUTION 3
String.prototype.toAlternatingCase = function () {
  return this.replace(/[a-z]/gi, (e) =>
    /[a-z]/.test(e) ? e.toUpperCase() : e.toLowerCase()
  );
};
