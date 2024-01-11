//https://leetcode.com/problems/build-array-from-permutation/
var buildArray = function(nums) {
    let array=[];
    for(let i=0;i<nums.length;i++){
        array.push(nums[nums[i]])
    }
    return array;
};