//it's a language independent concept

function firstEl(arr:(string|number)[]){
    return arr[0];
}

const element=firstEl(['aayush','dev']);
// console.log(element.toUpperCase()); throws an error
if(typeof element==='string'){
    console.log(element.toUpperCase());
}

//better way to solve this-generics
// Generics enable you to create components that work with any data type while still providing compile-time type safety.
function identity<T>(arg:T){  //instead of function identity(arg:string|number)
    return arg
} 
let o1=identity<string>("mystring");
let o2=identity<number>(100);

console.log(o1.toUpperCase());
console.log(o2.toFixed());
//solving the earlier problem
function newFirstEl<T>(arr:T[]):T
{
    return arr[1];
}
let result=newFirstEl(['aayush','dev']);
//or
let result1=newFirstEl<string>(['aayush','dev']);
console.log(result.toUpperCase());