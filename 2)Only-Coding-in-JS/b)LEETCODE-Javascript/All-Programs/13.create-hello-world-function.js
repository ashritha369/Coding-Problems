//https://leetcode.com/problems/create-hello-world-function/description/

var createHelloWorld = function() {
    let greeting="Hello World"
    return function(...args) {
       let condition=false;
       if(!condition){
          condition=true;
          return greeting;
       }else{
          return greeting;
       }
        
    }
};