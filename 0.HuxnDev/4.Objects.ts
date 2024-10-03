const person:{
    firstname:string;
    age:number
}={firstname:"Aayush",age:21}


function printUser():{name:string;age:number;location:string}{
    return {
        name:"Aayush",
        age:21,
        location:"India"
    }
}
console.log(printUser())