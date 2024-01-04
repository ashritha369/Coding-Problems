//https://leetcode.com/problems/left-and-right-sum-differences/
var leftRightDifference = function (nums) {
  let answer = [];
  for (let i = 0; i < nums.length; i++) {
    let leftSum = 0;
    let rightSum = 0;
    let leftArray = [0];
    let rightArray = [0];

    leftArray = nums.slice(0, i);
    rightArray = nums.slice(i + 1, nums.length + 1);

    leftSum = leftArray.reduce((acc, curr) => acc + curr, 0);
    rightSum = rightArray.reduce((acc, curr) => acc + curr, 0);

    answer[i] = Math.abs(leftSum - rightSum);
  }
  return answer;
};
