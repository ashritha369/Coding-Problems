//https://www.codewars.com/kata/5467e4d82edf8bbf40000155/train/javascript
//Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

/*
Examples:
Input: 42145 Output: 54421

Input: 145263 Output: 654321

Input: 123456789 Output: 987654321
*/
//MY SOLUTION
function descendingOrder(n) {
  let splitedArray = n
    .toString()
    .split("")
    .map((item) => Number(item));
  let descendingArray = splitedArray
    .sort(function (a, b) {
      return b - a;
    })
    .map((item) => {
      return item.toString();
    })
    .join("");
  return Number(descendingArray);
}

//EASIEST WAY
function descendingOrder(n) {
  return parseInt(String(n).split("").sort().reverse().join(""));
}
