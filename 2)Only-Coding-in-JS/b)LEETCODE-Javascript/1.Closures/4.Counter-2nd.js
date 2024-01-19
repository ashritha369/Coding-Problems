/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */

// https://leetcode.com/problems/counter-ii/?envType=study-plan-v2&envId=30-days-of-javascript
var createCounter = function (init) {
  let currentValue = init;
  return {
    increment: function () {
      return (currentValue = currentValue + 1);
    },
    decrement: function () {
      return (currentValue = currentValue - 1);
    },
    reset: function () {
      return (currentValue = init);
    },
  };
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */
