//https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0/javascript
//QUESTION
/*It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.*/
//SOLUTION
function removeChar(str) {
  //You got this!
  let array = str.split("");
  array.pop();
  array.shift();
  let finalString = array.join("");
  return finalString;
}
removeChar("google");
