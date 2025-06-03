// date method
// ⏱️ Time in Milliseconds Since 1970 (Unix Epoch Time) :- use of it below:
function calculatSum(){
    let a= 0;
    for(let i=0; i<1000000000; i++){
        a=a+1;
    
    }
    return a;
}

const beforeDate = new Date();
const beforeTimeInMs = beforeDate.getTime();

console.log(calculatSum());

const afterDate = new Date();
const afterTimeInMs = afterDate.getTime();

console.log(afterTimeInMs-beforeTimeInMs);
