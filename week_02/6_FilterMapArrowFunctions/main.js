// map, filter, arrow fns

// // Traditional Function Declaration
// function sum(a,b){
//     return a+b;
// }

// // Arrow Function
// const sum= (a,b) => {
//     return a+b;
// }

// console.log(sum(2,4));



// map
// given an array, give me back a new array in which every value is multiplied by 2
// input: [1,2,3,4,5]
// output: [2,4,6,8,10]

// // ugly way of doing it
// const arr=[1,2,3,4,5];
// const newArr=[];
// for(let i=0; i<arr.length; i++){
//     newArr.push(arr[i]*2);
// }
// console.log(newArr);

// // smart way of doing it
// // using map(which is slightly easier)
// // map is used to transform the function
// const arr=[1,2,3,4,5];
 
// function transform(i){
//     return i*2;
// }
// const ans = arr.map(transform);
// console.log(ans);



// filtering 
// what if i tell u, given an input array, give me back all the even values from it
// input: [1,2,3,4,5,6,7,8,9,10]
// output: [2,4,6,8,10]

// // ugly way of doing it
// const arr = [1,2,3,4,5,6,7,8,9,10];
// const newArr =[];
// for(let i=0; i< arr.length; i++){
//     if(arr[i]%2 == 0){
//         newArr.push(arr[i])
//     }
// }
// console.log(newArr);

// smart way of doing it
// using filter
const arr = [1,2,3,4,5,6,7,8,9,10];
function filterLogic(n){
    if(n%2==0){
    //n.startsWith("h")- in case for strings 
        return true;
    }else{
        return false;
    }
}
const ans = arr.filter(filterLogic);
console.log(ans);