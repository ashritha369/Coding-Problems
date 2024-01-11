//https://leetcode.com/problems/richest-customer-wealth/description/
/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function (accounts) {
  let allCustomersWealth = accounts.map((eachCustomer) =>
    eachCustomer.reduce((sum, acc) => sum + acc, 0)
  );

  let maxWealth = allCustomersWealth[0]; // Assume the first customer has the maximum wealth
  // WITHOUT USING MATH.MAX
  for (let k = 1; k < allCustomersWealth.length; k++) {
    if (allCustomersWealth[k] > maxWealth) {
      maxWealth = allCustomersWealth[k];
    }
  }

  return maxWealth;
};

maximumWealth([
  [1, 2, 3],
  [3, 2, 1],
]);
////////////////////////////////////////////////////
// WITH MATH.MAX


/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    let allCustomersWealth=accounts.map((eachCustomer)=>{
       return eachCustomer.reduce((sum,acc)=>
            sum=sum+acc,0
        )
       
    })

return Math.max(...allCustomersWealth);

};

maximumWealth([[1,2,3],[3,2,1]])