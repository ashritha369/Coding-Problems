//https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/description/

//OUTPUT: TEST CASES WILL PASS 103/103:When submitted: EFFICIENT CODE
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


// OUTPUT: TEST CASES WILL PASS 82/103: OUTPUT LIMIT EXCEEDED When submitted: NOT AN EFFIECIENT CODE
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    let newArray=[];
 
    for (let i=0;i<nums.length;i++){
           let count=0;
        for(let j=0;j<nums.length;j++){
      
            if(nums[i]>nums[j]){
                     count++;
            }
                   while(nums[i]===nums[j]){
                       break;
                   } 
        }
        newArray.push(count)
    }
    return newArray;
};
smallerNumbersThanCurrent([8,1,2,2,3])