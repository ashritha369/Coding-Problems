//https://leetcode.com/problems/apply-transform-over-each-element-in-array/description/
//Apply Transform Over Each Element in Array
//works for all test cases
var map = function(arr, fn) {
    const ans=[];
    for(let i=0;i<arr.length;i++)
    ans[i]=fn(arr[i],i);
    return ans;
};