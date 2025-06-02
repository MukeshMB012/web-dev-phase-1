// setTimeout function, setInterval function

// // setTimeout function
// function greet(){
//     console.log("hello world");
// }
// function greetalien(){
//     console.log("hello alien");
// }

// setTimeout(greetalien, 3*1000);
// setTimeout(greet, 1*1000);

// setInterval function:- function will call itself after every interval of time given
function greetalien(){
    console.log("hello alien");
}
setInterval(greetalien, 1*1000);