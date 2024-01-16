//https://leetcode.com/problems/array-wrapper/
var ArrayWrapper = function(nums) {
    this.nums = nums;
};

ArrayWrapper.prototype.valueOf = function() {
    let newNum = [...this.nums[0], ...this.nums[1]];
    console.log('newNum',newNum)
    let total = newNum.reduce((sum, value) => sum + value, 0);
    return total;
}

ArrayWrapper.prototype.toString = function() {
    return JSON.stringify(this.nums);
}

const obj1 = new ArrayWrapper([[1,2], [3,4]]);
const obj2 = new ArrayWrapper([[], []]);
console.log(obj1 + obj2); // 0
console.log(String(obj1)); // "[[],[]]"