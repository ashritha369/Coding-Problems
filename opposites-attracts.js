//https://www.codewars.com/kata/555086d53eac039a2a000083/train/javascript
/* 
Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.

Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.
*/

//SOLUTION 1:
function lovefunc(flower1, flower2) {
  // moment of truth
  if (flower1 % 2 == 1 && flower2 % 2 == 0) {
    return true;
  }
  if (flower1 % 2 == 0 && flower2 % 2 == 1) {
    return true;
  } else {
    return false;
  }
}

////SOLUTION 2:
function lovefunc(flower1, flower2) {
  // checking for the result of modular is not same because 0 !==1 should be the result value ===> true
  return flower1 % 2 !== flower2 % 2;
}
