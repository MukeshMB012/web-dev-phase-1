// callback function example
// here logWhatsPresent function callback log1 function or log2 function.

function log1(){
    console.log("hello world 1")
}
function log2(){
    console.log("hello world 2")
}

function logWhatsPresent(fn){
    fn();
}

logWhatsPresent(log1);