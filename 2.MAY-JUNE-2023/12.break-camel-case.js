//https://www.codewars.com/kata/5208f99aee097e6552000148/train/javascript
/*
Complete the solution so that the function will break up camel casing, using a space between words.

Example
"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  ""

*/
function solution(string) {
  let array = [];

  while (string.length !== 0) {
    let index = 0;
    for (let i = 1; i < string.length; i++) {
      if (string[i] === string[i].toUpperCase()) {
        index = i;
        break;
      }
    }
    //below if , is for the condition where we dont find Capital Letter, at that case, we will assign the length of string(as it is the last index) and will assign to index.
    if (index === 0) {
      index = string.length;
    }
    let beginString = string.slice(0, index);
    console.log(`Begin String, ${beginString}`);
    array.push(beginString);
    string = string.slice(index);
    console.log(`string ${string}`);
  }

  return array.join(" ");
}

solution("camelCasingTest");
