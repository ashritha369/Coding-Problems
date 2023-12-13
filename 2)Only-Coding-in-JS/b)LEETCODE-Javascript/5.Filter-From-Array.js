//https://leetcode.com/problems/filter-elements-from-array/

// generic code woeks for all test cases in leetcode
const filter = function(arr, specificFn) {
    const newArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (specificFn(arr[i], i)) {
            newArray.push(arr[i]);
        }
    }
    return newArray;
};

