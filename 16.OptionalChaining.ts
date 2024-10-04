//optional chaining
//console.log(customer?.birthday) // if customer exists then access it's birthday property
//else the result of this expression is undefined
let customer:number[]=[1,2,3,4,5];
// console.log(customer?.[0])

let fn:any=null;
// fn('a'); //this will crash the program
fn?.('a');  