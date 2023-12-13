//https://leetcode.com/problems/timeout-cancellation/description/
var cancellable = function(fn, args, t) {
    let timerId;
   console.log('been said : 1')
    // Set up the main timer to call fn after t milliseconds
    timerId = setTimeout(() => {
        hellofn(...args); // Call fn with the provided arguments
    }, t);
     console.log('after hello been said : 2')
    // Create a cancelTimer function
    function cancelTimer() {
        console.log('inside cancelTimer 3')
        clearTimeout(timerId); // Cancel the main timer
    }
  console.log('displayed cancelTimer : 4')
    // Return the cancelTimer function
    return cancelTimer;
};

function hellofn(){
    console.log(`Executed hello function`);
}
cancellable(hellofn,[2023],3000)// hellofn executes
cancellable(hellofn,[2023],3000)(); // hellofn never executes
// ONE MORE SOLUTION:
/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */

//  UNDERSTANDABLE CODE
function createDelayedFunction(fn, args, t) {
  let timerId;

  // Set up the main timer to call fn after t milliseconds
  timerId = setTimeout(() => {
    fn(...args); // Call fn with the provided arguments
  }, t);

  // Create a cancel function that can be used to cancel the timer
  function cancel() {
    clearTimeout(timerId); // Cancel the main timer
  }

  // Return an object with the main function and the cancel function
  return {
    execute: () => {
      fn(...args); // Call fn immediately
      cancel(); // Cancel the timer
    },
    cancel, // Make the cancel function accessible
  };
}

// Example usage:

// Define a function to be executed
function sayHello(name) {
  console.log(`Hello, ${name}!`);
}

// Create a delayed function
const delayedFn = createDelayedFunction(sayHello, ["Alice"], 3000);

// To execute the function immediately
delayedFn.execute();

// To cancel the timer
// delayedFn.cancel(); // Uncomment this line to cancel the timer