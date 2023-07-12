//https://www.codewars.com/kata/54ba84be607a92aa900000f1/train/javascript

//SOLUTION mine correct one

function isIsogram(str) {
  let arrayStr = str.str.toLowerCase().split("");
  let n = arrayStr.length;
  let arr = [];

  if (str === "") {
    return true;
  }

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (arrayStr[i] === arrayStr[j]) {
        arr.push(arrayStr[i]);
      }
    }
  }

  return arr.length > 0 ? false : true;
}

console.log(isIsogram("moOse")); // false

// Chat gpt correct one
/*
To fix the issue with case-insensitive comparison, you can convert all characters in the input string to lowercase or uppercase before checking for repeated characters. This will ensure that the function correctly identifies isograms regardless of the case of the characters in the input string.

Here's an updated version of the isIsogram() function that converts the input string to lowercase before checking for repeated characters:
In this version of the function, the input string str is first converted to lowercase using the toLowerCase() method before splitting it into an array of characters. This ensures that all characters in the array are in lowercase, allowing the function to correctly identify repeated characters regardless of their case.

With this change, the updated isIsogram() function should correctly identify isograms that contain repeated letters in different cases, such as "moOse", and return false.
*/
function isIsogram(str) {
  let arrayStr = str.toLowerCase().split("");
  let n = arrayStr.length;

  if (str === "") {
    return true;
  }

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (arrayStr[i] === arrayStr[j]) {
        return false;
      }
    }
  }

  return true;
}
