//QUESTION : https://www.codewars.com/kata/56b1f01c247c01db92000076/train/javascript
/*
Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

Examples (Input -> Output):
* "String"      -> "SSttrriinngg"
* "Hello World" -> "HHeelllloo  WWoorrlldd"
* "1234!_ "     -> "11223344!!__  " 
*/

// SOLUTION
const array = "Hello World".split("");
const newArray = [];
array.map((i) => i + i).join("");

//FOR CODEWAR SOLUTION
function doubleChar(str) {
  // Your code here
  const array = str.split("");
  return array.map((i) => i + i).join("");
}
