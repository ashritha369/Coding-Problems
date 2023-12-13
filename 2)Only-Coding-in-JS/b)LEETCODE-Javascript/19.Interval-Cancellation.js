//https://leetcode.com/problems/interval-cancellation/description/
// Define the cancellable function
var cancellable = function(fn, args, t) {
    // Call the function immediately with the provided arguments
    fn(...args);
  
    // Set up an interval to repeatedly call the function with the provided arguments
    let timer = setInterval(() => fn(...args), t);
  
    // Define a cancel function that clears the interval
    let cancelFn = () => clearInterval(timer);
  
    // Return the cancel function
    return cancelFn;
  };
  
  // Use the cancellable function to schedule the printMessage function
  const cancelPrint = cancellable(printMessage, ["Hello, world!"], 1000);
  
  // After 5 seconds, cancel the scheduled function
  setTimeout(() => {
    cancelPrint(); // This will cancel the scheduled function.
    console.log("Printing canceled.");
  }, 5000);
  
  // Define a simple function to print a message
  function printMessage(message) {
    console.log(message);
  }
  
  