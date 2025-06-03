// loops, function, callback function

// callback function:- A callback function is a function that you pass as an argument to another function, so it can be called (or executed) inside that function.

// // find the square of the input
// function square(n){
//     return n*n;
// }
// // find the cubes of the input
// function cube(n){
//     return n*n*n;
// }

// // finds the sum of the squares of the inputs
// function sumOfSquares(a,b){
//     const val1= square(a);
//     const val2= square(b);

//     return val1 +val2;
// }
// // finds the sum of the cubes of the inputs
// function sumOfCube(a,b){
//     const val1= cube(a);
//     const val2= cube(b);

//     return val1 +val2;
// }

// console.log(sumOfSquares(1,2));
// console.log(sumOfCube(1,2));




// doing the above same thing in better way
// find the square of the input
function square(n){
    return n*n;
}
// find the cubes of the input
function cube(n){
    return n*n*n;
}
function sumOfSomething(a,b,fn){
    const val1= fn(a);
    const val2= fn(b);
    return val1 + val2;
}

console.log(sumOfSomething(1,2,square));
console.log(sumOfSomething(1,3,cube));