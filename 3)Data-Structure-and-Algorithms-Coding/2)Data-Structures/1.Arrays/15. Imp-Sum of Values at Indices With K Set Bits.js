//https://leetcode.com/problems/sum-of-values-at-indices-with-k-set-bits/description/
var sumIndicesWithKSetBits = function(nums, k) {
    let valuesAtIndices=[];

    for(let index=0;index<nums.length;index++){
      let count=0;

      let tempIndex=index;
      
      while(tempIndex!==0){
        let remainder=tempIndex%2;
        let quotient=Math.floor(tempIndex/2);
        tempIndex=quotient;
        count=count+remainder;
      }
      if(count===k){
          valuesAtIndices.push(nums[index]);
      }

    }
          let totalValue=valuesAtIndices.reduce((curr,acc) => curr+acc,0);
          return totalValue
};
sumIndicesWithKSetBits([5,10,1,5,2],1)


