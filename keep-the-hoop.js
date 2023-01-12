//https://www.codewars.com/kata/55cb632c1a5d7b3ad0000145/javascript
//Hula hooping is a fun, invigorating way to fit more aerobic exercise into your routine. It has the potential to provide similar benefits to salsa dancing or belly dancing.
//PROBLEM
/*
Alex just got a new hula hoop, he loves it but feels discouraged because his little brother is better than him

Write a program where Alex can input (n) how many times the hoop goes round and it will return him an encouraging message :)

If Alex gets 10 or more hoops, return the string "Great, now move on to tricks".
If he doesn't get 10 hoops, return the string "Keep at it until you get it".
*/
//SOLUTION

function hoopCount(n) {
  //your code goes here
  if (n >= 10) {
    return "Great, now move on to tricks";
  } else {
    return "Keep at it until you get it";
  }
}
hoopCount(3);
