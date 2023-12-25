//https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/description/

var smallerNumbersThanCurrent = function(nums) {
    let newArray=[];
    for (let i=0;i<nums.length;i++){
           let count=0;
        for(let j=0;j<nums.length;j++){
            if(nums[i]>nums[j]){
                     count++;
            }    
        }
        newArray.push(count)
    }
    return newArray;
};
smallerNumbersThanCurrent([8,1,2,2,3])