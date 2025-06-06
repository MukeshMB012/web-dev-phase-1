// async function

// // 1st example
// console.log("hi");

// setTimeout(function(){
//     console.log("hi there from inside");

//     setTimeout(function(){
//     console.log("hi there from inside inside")
//  },5000)
// }, 5000)

// let a=0;
// for(let i=0; i<10; i++){
//     a=a+1;
// }
// console.log("after");



// 2nd example:- creating(or wrapping) asynchronous function of my own
function myOwnSetTimeout(fn, duration) {
  setTimeout(fn, duration);
}

myOwnSetTimeout(function() {
  console.log("log the first thing");
  myOwnSetTimeout(function() {
    console.log("log the second thing");
  }, 2000)
}, 1000)
