// https://www.codewars.com/kata/53af2b8861023f1d88000832/train/javascript

/*
Create a function which answers the question "Are you playing banjo?".
If your name starts with the letter "R" or lower case "r", you are playing banjo!

The function takes a name as its only argument, and returns one of the following strings:

name + " plays banjo" 
name + " does not play banjo"
Names given are always valid strings.

STRINGSFUNDAMENTALS
*/
// My solution
function areYouPlayingBanjo(name) {
  // Implement me
  if (name[0] === "R" || name[0] === "r") {
    return `${name} plays banjo`;
  } else {
    return `${name} does not play banjo`;
  }
}

// Shortest solution- 1
function areYouPlayingBanjo(name) {
  return (
    name +
    (name[0].toLowerCase() == "r" ? " plays" : " does not play") +
    " banjo"
  );
}
// Shortest solution- 2
function areYouPlayingBanjo(name) {
  return name + (/^r/i.test(name) ? " plays " : " does not play ") + "banjo";
}
