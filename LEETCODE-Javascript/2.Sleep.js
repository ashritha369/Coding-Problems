//https://leetcode.com/problems/sleep/
function fetchData(millis){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
           resolve(millis);
        },millis)
    })
}

async function sleep(millis) {
   try{
       let time=await fetchData(millis);
       console.log(time);
   }catch(error){console.log(error)}
}
sleep(100);