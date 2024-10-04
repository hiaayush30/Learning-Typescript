//TS provides several mechanisms for narrowing types=>
//Type gaurds like typeof operator
//The instanceof operator (another type gaurd)
// Intersection types


//using Type Gaurds
type MyType=string|number;
function exampleFn(value:MyType){
    if(typeof value==='string') console.log(value.toUpperCase());
    else console.log(value.toFixed(2));
}

exampleFn(2.356);
exampleFn("hello");

//instanceof operator
class Cat{
    meow=():void=>{
        console.log('meowing!');
    }
}

class Sparrow{
    chirp():void{
        console.log('chirping!')
    }
}
console.log(document);
function animalSound(animal:Cat|Sparrow){
   if(animal instanceof Cat) animal.meow();
   else animal.chirp()
}

animalSound(new Sparrow);

//intersection types
type Employee1={
    id:number;
    name:string
}

type Manager={
    dept:string;
    role:string
}

type SuperEmployee=Employee1 & Manager;

const m:SuperEmployee={
    id:12,
    name:'Bob',
    dept:'Marketing',
    role:'Team Lead'
}
console.log(m);