// if-else, loops, array, object, object inside array
// node main.js
// // if else condition
// let a= 10;
// if(a%2==0){
//     console.log("the number is even");
// }
// else{
//     console.log("the number is odd")
// }

// // loops
// let sum=0;
// for(let i=1; i<=100; i++){
//     sum= sum+ i;
   
// }
// console.log(sum);

// // arrays
// const personArray = ["rakesh", "chandan", "krishna"];
// console.log(personArray[0]);
// console.log(personArray[1]);
// console.log(personArray[2]);  

// Questions
// 1.write a program to prints all the even number in an Array
// 2.write a program to prints the biggest number in an arrays
// 3.write  a program that prints all the male people's first name given a complex object
// 4.write a program that reverses all the elements of an arrays

// // 1.answer
// const a=[23,54,66,57,86,22];
// for(let i=0; i<a.length; i++){
//     if(a[i]%2==0){
//         console.log(a[i])
//     }
// }

// // 2.answer
// let biggi=0;
// const a1=[23,54,66,57,86,22];
// for(i=0; i<a1.length; i++){
//     if(a1[i]>biggi){
//         biggi= a1[i];
//     }
// }
// console.log("the biggest number of the array is:", biggi);

// // 3.answer
// const personArray = ["harkirat", "raman", "priya"];
// const genderArray= ["male", "male", "female"];

// for(let i=0; i<personArray.length; i++){
//     if(genderArray[i]=="male"){
//         console.log(personArray[i]);
//     }
// }

// // 3.answer:- doing it again in other way (object inside the array)
// const allUsers=[{
//     firstName: "mukesh",
//     gender: "male"
// },{
//     firstName: "rakesh",
//     gender: "male"
// },{
//     firstName: "priya",
//     gender: "female"
// }];
// for(i=0; i<allUsers.length; i++){
//     if(allUsers[i]["gender"]=="male"){
//         console.log(allUsers[i]["firstName"]);
//     }
// }

// 4. answer
const a2=[40,54,66,57,86,22];
let first=0;
let end=a2.length - 1;
while(first<end){
    let temp= a2[first];
    a2[first]= a2[end];
    a2[end]= temp;
    first++;
    end--;
}
console.log(a2);