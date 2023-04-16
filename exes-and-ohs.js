//https://www.codewars.com/kata/55908aad6620c066bc00002a/train/javascript

/*Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false */

//Refer : https://www.w3schools.com/jsref/jsref_obj_regexp.asp
//Refer : https://www.w3schools.com/jsref/jsref_regexp_charset.asp

// correct solution

function XO(str) {
  let xCount = 0;
  let oCount = 0;
  let arrStr = str.toLowerCase().split("");
  // if  atleast 'x' or 'X' or 'o' or 'O' is present
  let regex = /[xXOo]/i;

  if (regex.test(arrStr)) {
    console.log("x or o is present");
    for (let i = 0; i < arrStr.length; i++) {
      if (arrStr[i] === "x" || arrStr[i] === "X") {
        xCount++;
      } else if (arrStr[i] === "o" || arrStr[i] === "O") {
        oCount++;
      }
    }
  } else {
    console.log("No x nor o is present");
    xCount = 0;
    oCount = 0;
  }

  console.log(`x is ${xCount}, o is ${oCount}`);
  return xCount === oCount ? true : false;
}

XO("ooxXm");

/*
how "xXOo".indexOf(arrStr[i]) !== -1 works.

indexOf() is a method of the String object that returns the index of the first occurrence of a specified value in a string. If the value is not found, it returns -1.

In this case, "xXOo".indexOf(arrStr[i]) is checking if the current character arrStr[i] is present in the string "xXOo". If it is, it will return the index of the character in the string (0 for "x", 1 for "X", 2 for "O", 3 for "o"). If it's not found, it will return -1.

So, "xXOo".indexOf(arrStr[i]) !== -1 is checking if the current character is present in the string. If it is, the expression will return true because the index of the character is not -1. If it's not present, the expression will return false because the index is -1.

For example, if arrStr[i] is "x", "xXOo".indexOf(arrStr[i])" will return 0, so the expression will evaluate to true. If arrStr[i]is "m","xXOo".indexOf(arrStr[i])" will return -1, so the expression will evaluate to false.
*/

// SHORTEST WAY

function XO(str) {
  const xCount = (str.match(/x/gi) || []).length;
  const oCount = (str.match(/o/gi) || []).length;
  return xCount === oCount;
}
/*This code uses the match() method to find all occurrences of "x" or "o" in the string, regardless of case (/x/gi and /o/gi are regular expressions that match all occurrences of "x" or "o", respectively, with the "i" flag making the match case-insensitive). If no matches are found, an empty array is returned, so we use the || [] to ensure that the .length property doesn't throw an error. Finally, we compare the counts of "x" and "o" and return true if they're equal, false otherwise.

STEP BY STEP explanation of the code:

The function XO takes a string str as input.

The match() method is called on the input string str with a regular expression /x/gi. This regular expression matches all occurrences of the letter "x" in the string, ignoring case (i flag) and global (g flag) so that it matches all occurrences, not just the first one.

The match() method returns an array of matches. If no matches are found, it returns null.

The || [] syntax is used to provide a default value of an empty array in case match() returns null. This ensures that the next step does not throw an error if there are no matches.

The length property is called on the resulting array to get the number of matches. This gives us the count of "x"s in the input string.

The same steps are repeated for the letter "o" to get the count of "o"s in the input string.

The counts of "x"s and "o"s are compared using the === operator.

The function returns true if the counts are equal, false otherwise.
*/
