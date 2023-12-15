//https://leetcode.com/problems/concatenation-of-array/
//SOLUTION 1:

var getConcatenation = function(nums) {
    let array=[];
    array.push(...nums);
    for(i=0;i<nums.length;i++){
        array.push(nums[i])
    }
    return array;
};
getConcatenation([1,2,3]);