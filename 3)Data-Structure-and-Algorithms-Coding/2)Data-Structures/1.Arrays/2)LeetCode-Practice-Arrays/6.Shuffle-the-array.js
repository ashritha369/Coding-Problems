//https://leetcode.com/problems/shuffle-the-array/
var shuffle = function(nums, n) {
    let newArray=[];
    for(let i=0;i<n;i++){
        newArray.push(nums[i],nums[i+n])

    }
    return newArray;
};
shuffle([1,2,3,4,4,3,2,1])