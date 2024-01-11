//https://leetcode.com/problems/maximum-number-of-words-found-in-sentences/description/
var mostWordsFound = function(sentences) {
    let output =sentences.map((item)=> {return item.split(' ')})
    let numberOutput=output.map((number)=>{return number.length});

 let maxNumber=numberOutput[0];
 for(let i=1;i<numberOutput.length;i++){
     if(numberOutput[i]>maxNumber){
         maxNumber=numberOutput[i];
     }

 }
    return maxNumber;
};

mostWordsFound(["alice and bob love leetcode","i think so too","this is great thanks very much"])