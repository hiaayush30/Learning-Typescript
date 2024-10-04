//Intersection Types
type Person1={
    name:string;
    age:number
}
type Employee={
    id:number;
    title:string
};
type CustomPerson=Person1 & Employee; //Intersection 
const p1:CustomPerson={
    name:"Aayush",
    id:1,
    age:21,
    title:"yo"
}

//Union Types
const pass:string|number=23; //union
type CustomPerson1=Person1 | Employee;
function foo (param:string|string[]){}
const p2:CustomPerson1={
    name:"aayush",
    title:'yo',
    id:1
}

const items:(number|string)[]=["yo",1,2,"hey"];  //number or string as element
const items1:number[]|string[]=["yo","hey"];

//Literal Types
let color:'red'|'maroon'|'crimson';
color='red';
// color='blue';
 
let isTrue:true|false;
let password:'secret'='secret';