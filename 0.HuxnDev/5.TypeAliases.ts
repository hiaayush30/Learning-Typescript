//it is a custom new name for an existing type

//by convention the first letter of a Type Alias is in capital
type MyStr=string;
const name1:MyStr="yo";
type User={
    name:string;
    age:number;
    email?:string;  //optional property
    readonly location:string
}
const user:User={
    name:"Aayush",
    age:21,
    location:"India"
}
console.log(user.email);  //undefined
// user.location="Nepal";  //can't do it
const printUser1=():User=>{
    return{
        name:'Bruce',
        age:30,
        location:"USA"
    }
}