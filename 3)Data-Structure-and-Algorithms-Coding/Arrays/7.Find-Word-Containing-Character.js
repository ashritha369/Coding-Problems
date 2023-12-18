//https://leetcode.com/problems/find-words-containing-character/description/

var findWordsContaining = function(words, x) {
    let indicesArray=[];
    words.forEach((item,index)=>{
        if(item.includes(x)) {
            indicesArray.push(index)
            }
        })
        return indicesArray;
};

findWordsContaining(["abc","bcd","aaaa","cbc"],"a");