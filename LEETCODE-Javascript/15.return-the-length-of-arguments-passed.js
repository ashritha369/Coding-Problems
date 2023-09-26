//https://leetcode.com/problems/return-length-of-arguments-passed/description/
var argumentsLength = function(...args) {
    let array=[];
    array.push(...args);
    return array.length;
 
};

argumentsLength(1, 2, 3); // 3