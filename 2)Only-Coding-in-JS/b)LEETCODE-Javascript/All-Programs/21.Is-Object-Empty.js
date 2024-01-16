//https://leetcode.com/problems/is-object-empty/description/
//SOLUTION 1
var isEmpty = function(obj) {
    for (var key in obj){
      if(obj.hasOwnProperty(key)){
        return false;
      }
    }
    return true;
   };


   //SOLUTION 2
   var isEmpty = function(obj) {
    return Array.isArray(obj) ? obj.length === 0 : Object.keys(obj).length === 0; 
 };
 //SOLUTION 3
 var isEmpty = function(obj) {
    return Object.keys(obj).length === 0;
 };