//https://leetcode.com/problems/add-two-promises/description/
var addTwoPromises = function(promise1, promise2) {
    return Promise.all([promise1, promise2])
      .then(values => {
        const sum = values.reduce((acc, curr) => acc + curr, 0);
        return sum;
      });
  };
  
  // Usage:
  const PROMISE1 = Promise.resolve(2); // Resolves immediately with the value 2
  const PROMISE2 = Promise.resolve(5); // Resolves immediately with the value 5
  
  addTwoPromises(PROMISE1, PROMISE2)
    .then(console.log)
    .catch(console.error);

    
    //OR

    var addTwoPromises = function(promise1, promise2) {
        return Promise.all([promise1, promise2])
          .then(values => {
            console.log(`values`, values);
            const sum = values.reduce((acc, curr) => acc + curr, 0);
            return sum;
          });
      };
      
      // Usage:
      const PROMISE_1 = new Promise(resolve => setTimeout(() => resolve(2), 20));
      console.log(`PROMISE1`);
      PROMISE1.then((value) => console.log(value));
      
      const PROMISE_2 = new Promise(resolve => setTimeout(() => resolve(5), 60));
      console.log(`PROMISE2`);
      PROMISE2.then((value) => console.log(value));
      
      addTwoPromises(PROMISE_1, PROMISE_2)
        .then(console.log)
        .catch(console.error);
      