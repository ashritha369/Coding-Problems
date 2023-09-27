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