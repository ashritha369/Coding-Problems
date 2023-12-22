//https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/
//Whats wrong with below code?

var kidsWithCandies = function(candies, extraCandies) {
    let boolean=[];
    let overAllBoolean=[];
    
    candies.forEach((candy=>
    {
        let totalCandy=candy+extraCandies;
        let i=0;
        while(i<=candies.length-1){
            totalCandy>=candies[i]?boolean.push(true):boolean.push(false);
             i++;
        }
       
    if(boolean.includes(false)){
        overAllBoolean.push(false)
    }else{
        overAllBoolean.push(true);
    }
    // Reset the boolean array for the next iteration
     boolean=[];
        
    }))
    return overAllBoolean;
};
