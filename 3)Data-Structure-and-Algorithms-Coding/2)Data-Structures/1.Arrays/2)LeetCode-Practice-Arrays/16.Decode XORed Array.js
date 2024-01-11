//https://leetcode.com/problems/decode-xored-array/description/
var decode = function(encoded, first) {
  
    let arr=[first]
    for(let i=0;i<encoded.length;i++){
        arr[i+1]=encoded[i]^arr[i];
     
    }
    return arr;
};