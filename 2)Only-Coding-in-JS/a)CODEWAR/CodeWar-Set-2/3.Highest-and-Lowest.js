//https://www.codewars.com/kata/554b4ac871d6813a03000035/train/javascript

// MY SOLUTION:
function highAndLow(numbers) {
  // ...
  let newString = [];

  let newNumbers = numbers.split(" ");
  console.log(`newNumbers`, newNumbers);

  let numberArray = newNumbers.map((item) => Number(item));

  let sortedNumbers = numberArray.sort(function (a, b) {
    return a - b;
  });
  console.log(`sortedNumbers`, sortedNumbers);

  newString.push(sortedNumbers[sortedNumbers.length - 1]);
  newString.push(sortedNumbers[0]);

  console.log(`newString`, newString);

  let output = String(newString.join(" "));
  console.log(output);

  return output;
}

// SHORTEST SOLUTION-1

function highAndLow(numbers) {
  numbers = numbers.split(" ");
  return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
}

// SHORTEDT SOLUTION 2
function highAndLow(numbers) {
  let arr = numbers.split(" ").map(Number);
  return Math.max(...arr) + " " + Math.min(...arr);
}

/*
Number is a built-in JavaScript function that converts a given value into a number data type.

In the code map(Number), the map method is being called on an array of strings, which represents the numbers in the input string. The Number function is passed as an argument to the map method, which causes each string element in the array to be converted into a number data type.

*/
