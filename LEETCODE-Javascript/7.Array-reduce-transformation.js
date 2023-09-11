//https://leetcode.com/problems/array-reduce-transformation/description/

//solution
var reduce = function(nums, fn, init) {

    for(let i=0;i<nums.length;i++){
    init=fn(init,nums[i]);
    }
    return init;
};

reduce([1,2,3,4],
function(acc,currentValue){return acc+currentValue}
,0)