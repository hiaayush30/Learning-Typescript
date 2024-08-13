const  User:object={
    name:"aayush",
    email:'aayush@gmail.com',
    isActive:true
}



// const createUser=({name:string,isPaid:boolean})=>{} //incorrect way
const createUser = ({ name, isPaid }: { name: string; isPaid: boolean }) => {};
createUser({name:"Aayush",isPaid:true});

//but if i pass a created object i can pass much more key-value pairs
const obj={name:"Tony",isPaid:true,email:'aayush@gmail.com'};
createUser(obj);

function createCourse():object{
   return {
    
   }
}
//or
function createCourse2():{name:string,isPaid:boolean,price:number}{
    return {name:"Maths",isPaid:true,price:500}
 }
const myFn=(num:number):void=>{
   console.log('hello there!');
}

export {}