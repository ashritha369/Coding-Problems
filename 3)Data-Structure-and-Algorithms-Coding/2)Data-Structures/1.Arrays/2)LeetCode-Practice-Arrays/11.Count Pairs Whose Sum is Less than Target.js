//https://leetcode.com/problems/count-pairs-whose-sum-is-less-than-target/
var countPairs = function(nums, target) {
    let count=0;
    for(let i=0;i<nums.length;i++){
        for(let j=i+1;j<nums.length;j++){
          if(nums[i]+(nums[j])<target){
              count++;
          }
        }
    }
    return count;
};