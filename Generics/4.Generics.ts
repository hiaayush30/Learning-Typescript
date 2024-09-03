//Generic Interfaces

//http://mywebsite.com/users
//http://mywebsite.com/products  //to get all products
interface Result<T>{ 
   data:T|null,
   error:string | null
}

//we are returning an object of type interface Result<T>
function fetch<T>(url:string):Result<T>{
     return {data:null,error:null};   //this will go in the data in Result<T> 
}

interface User{
    username:string
}

interface Product{
    title:string
}

let user=fetch<User>('url');
