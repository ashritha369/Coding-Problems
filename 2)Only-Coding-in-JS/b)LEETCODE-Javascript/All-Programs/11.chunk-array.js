//https://leetcode.com/problems/chunk-array/
var chunk = function(arr, size) {
    let givenArray = arr;
    let chunkedArray = [];

    for (let i = 0; i < givenArray.length; i += size) {
        let subArray = givenArray.slice(i, i + size);
        chunkedArray.push(subArray);
    }

    return chunkedArray;
};
