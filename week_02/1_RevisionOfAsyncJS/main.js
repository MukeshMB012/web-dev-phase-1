// // callback example
// function square(n) {
//   return n * n;
// }

// function cube(n) {
//   return n * n * n;
// }

// function sumOfSquares(a, b) {
//   let square1 = square(a);
//   let square2 = square(b);
//   return square1 + square2;
// }

// function sumOfCube(a, b) {
//   let square1 = cube(a);
//   let square2 = cube(b);
//   return square1 + square2;
// }

// let ans1 = sumOfSquares(1, 2);
// console.log(ans1);

// let ans2 = sumOfCube(1, 2);
// console.log(ans2);


// same above problem with more ease syntax.
function square(n) {
  return n * n;
}

function cube(n) {
  return n * n * n;
}

function sumOfSomething(a, b, callbackFn) {
  let ans1 = callbackFn(a);
  let ans2 = callbackFn(b);
  return ans1 + ans2;
}


let ans = sumOfSomething(1, 2, square);
console.log(ans);