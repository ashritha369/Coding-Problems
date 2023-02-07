//https://www.codewars.com/kata/51f2d1cafc9c0f745c00037d/train/javascript
/*
Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

Examples:

solution('abc', 'bc') // returns true
solution('abc', 'd') // returns false
*/
//SOLUTION for Endswith string- asked in this question

function solution(str, ending) {
  if (str.endsWith(ending)) {
    return true;
  } else {
    return false;
  }
}

/*
[a,b,c,d]-->[a,b]-->True
[a,b,c,d]--->[c,d]-->True
*/

//SOLTION FOR BEGINSWITH AND ENDSWITH BOTH- Good to know
function solution(str, ending) {
  if (str.startsWith(ending) || str.endsWith(ending)) {
    return true;
  } else {
    return false;
  }
}
