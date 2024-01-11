// Polyfill for Array.prototype.map
if (!Array.prototype.map) {
  Array.prototype.map = function (callback, thisArg) {
    if (this == null) {
      throw new TypeError("Array.prototype.map called on null or undefined");
    }

    if (typeof callback !== "function") {
      throw new TypeError(callback + " is not a function");
    }

    let newArr = [];
    for (let i = 0; i < this.length; i++) {
      if (i in this) {
        newArr[i] = callback.call(thisArg, this[i], i, this);
      }
    }

    return newArr;
  };
}

// Example usage
let originalArray = [1, 2, 3];

let mappedArray = originalArray.map(function (item) {
  return item * 2;
});

console.log(mappedArray); // Output: [2, 4, 6]
