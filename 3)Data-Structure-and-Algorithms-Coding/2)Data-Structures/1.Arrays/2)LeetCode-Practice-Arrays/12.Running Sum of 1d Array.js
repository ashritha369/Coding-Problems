//https://leetcode.com/problems/running-sum-of-1d-array/
var runningSum = function(nums) {
    let runningSum=[];
     let sum=0;
    for(let i=0;i<nums.length;i++){
        sum=nums[i]+sum;
        runningSum.push(sum);
    }
return runningSum;
};
