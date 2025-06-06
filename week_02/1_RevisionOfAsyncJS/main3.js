// creating asynchronous function using Approach #1 vs Approach #2

// // Approach #1:-wrapping another async function(using callback)
// function myOwnSetTimeout(fn, duration) {
//   setTimeout(fn, duration);
// }

// myOwnSetTimeout(function() {
//   console.log("log the first thing");
//   myOwnSetTimeout(function() {
//     console.log("log the second thing");
//   }, 2000)
// }, 1000)



// Approach #2:- using promises doing the same thing.
function myOwnSetTimeout(duration) {
  let p = new Promise(function (resolve) {
    // after 1 second, call resolve
    setTimeout(resolve, duration);
  });
  return p;
}

myOwnSetTimeout(1000)
  .then(function () {
    console.log("log the first thing");
  });

