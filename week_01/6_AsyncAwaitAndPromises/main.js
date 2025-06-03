// synchronous vs asynchronous

// // Asynchronous example
// function findSum(n){
//     let ans =0;
//     for(let i=0; i<n; i++){
//         ans= ans + i;
//     }
//     return ans; 
// }

// function findsumTill100(){
//     console.log(findSum(100));
// }

// setTimeout(findsumTill100, 2000);  //this is asynchronous 
// console.log("hello world");



// Synchronous example
function findSum(n){
    let ans =0;
    for(let i=0; i<n; i++){
        ans= ans + i;
    }
    return ans; 
}

function findsumTill100(){
    console.log(findSum(100));
}
// busy waiting
function syncSleep(){
    let a =1; 
    for(let i=0; i<10000000000; i++){
        a++;
    }
}
syncSleep();
findsumTill100();

console.log("hello world");