//https://www.codewars.com/kata/577a98a6ae28071780000989/javascript
//QUESTION
/*
Your task is to make two functions ( max and min, or maximum and minimum, etc., depending on the language ) that receive a list of integers as input, and return the largest and lowest number in that list, respectively.

Examples (Input -> Output)
* [4,6,2,1,9,63,-134,566]         -> max = 566, min = -134
* [-52, 56, 30, 29, -54, 0, -110] -> min = -110, max = 56
* [42, 54, 65, 87, 0]             -> min = 0, max = 87
* [5]                             -> min = 5, max = 5
Notes
You may consider that there will not be any empty arrays/vectors.
*/
// SOLUTION

//LOGIC PRACTICE -1

/*

const integerArray = [-1, 0, 3, 2]
const result = integerArray.filter(checkInteger);
function checkInteger(eachInteger) {
  for (i = 0; i < integerArray.length; i++) {

////
    while (eachInteger === integerArray[i + 1]){
      // 
      if (eachInteger < integerArray[i + 1]) {
        console.log('eachInteger is lesser than compared value', eachInteger, integerArray[i + 1])
      } else {
        console.log('eachInteger is greater than compared value', eachInteger, integerArray[i + 1])
      }
// above is if and else bracket ending
    }
//above is While loop bracket ending
  }
}

*/
