// https://leetcode.com/problems/counter/
// https://leetcode.com/problems/counter/submissions/992325489/
//My solution:
let createCounter = function(n) {

    return function() {
        let m=n++;
        return m;
        
    };
};
counter=createCounter();
counter();