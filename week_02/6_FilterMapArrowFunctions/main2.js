// Assignment
// create a map function that takes 2 inputs an array, 
// and a transformation callback/fn and transform the array
// into a new one using the transformation fn

function map(arr, fnc){
    const newArr=[];
    for(let i=0; i< arr.length; i++){
        newArr.push(fnc(arr[i]));
    }
    return newArr; 
}

function transform(n){
    return n*2

}

let arr=[1,2,3,4,5];
const ans = map(arr, transform);
console.log(ans);