//https://leetcode.com/problems/left-and-right-sum-differences/
var leftRightDifference = function (nums) {
  let answer = [];
  for (let i = 0; i < nums.length; i++) {
    let leftSum = 0;
    let rightSum = 0;

    // Slicing leftArray and rightArray correctly
    let leftArray = nums.slice(0, i);
    let rightArray = nums.slice(i + 1);

    leftSum = leftArray.reduce((acc, curr) => acc + curr, 0);
    rightSum = rightArray.reduce((acc, curr) => acc + curr, 0);

    answer[i] = Math.abs(leftSum - rightSum);
  }
  return answer;
};

console.log(leftRightDifference([6, 4, 1, 2, 9]));

//  BETTER TIME AND SPACE COMPLEXITIES
var leftRightDifference = function (nums) {
  let totalSum = nums.reduce((acc, curr) => acc + curr, 0);
  let leftSum = 0;
  let answer = [];
  for (let i = 0; i < nums.length; i++) {
    answer[i] = Math.abs(leftSum - (totalSum - leftSum - nums[i]));
    leftSum += nums[i];
  }
  return answer;
};

console.log(leftRightDifference([6, 4, 1, 2, 9]));
