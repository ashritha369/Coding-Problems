//Count Consonents:  https://www.codewars.com/kata/564e7fc20f0b53eb02000106
/*
Complete the function that takes a string of English-language text and returns the number of consonants in the string.

Consonants are all letters used to write English excluding the vowels a, e, i, o, u.
*/

//MY WRONG ATTEMPT -1
function consonantCount(str) {
  let vowelsORCharactersRemovedExceptConsonents = str.replace(
    "/[aeiou]|[^bcdfghjklmnpqrstvwxyz]/gi",
    ""
  );
  return vowelsORCharactersRemovedExceptConsonents.length;
}

//WRONG ATTEMPT 2
function consonantCount(str) {
  let vowelsORCharactersRemovedExceptConsonents = str.replace(
    "/[aeiou]|[^bcdfghjklmnpqrstvwxyz|[0123456789_]|[ ^&$#]/gi",
    ""
  );
  return vowelsORCharactersRemovedExceptConsonents.length;
}
/*Firstly, when you're using the replace() method to remove the vowels and non-consonant characters, you need to remove the quotes around the regular expression. The regular expression itself should not be a string, but rather a regular expression literal. So, the line should be like this:

Secondly, the regular expression is also removing spaces and underscores from the string, which are not vowels or non-consonants. To fix this, you can remove the [0123456789_]|[ ^&$#] part from the regular expression.*/

//MY CORRECT ATTEMPT 3
//passed to below tests
/*Empty string
Only vowels
Only consonants
Test with 'Y'
Regex \w trap
Special characters
Full  alphabet*/

function consonantCount(str) {
  let vowelsORCharactersRemovedExceptConsonents = str
    .replace(/[aeiou]/gi, "")
    .replace(/[^bcdfghjklmnpqrstvwxyz]/gi, "");
  return vowelsORCharactersRemovedExceptConsonents.length;
}
