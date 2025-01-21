//Type Assertion  when you know more about sth more than TS
// Type casting
// Non-null assertion operator

let a:any=12;
 (a as number).toFixed(1);
//or
(<number>a).toFixed(1);

let b= Number("12");  //Type casting
console.log(b);

let c:null|undefined|string;
c="hey";
c!.toLowerCase();  //Non null assertion ie we are asserting that c is not null or undefined