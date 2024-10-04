//it refers to the ability to extend or argument an existinf declaration 
//including interfaces
//can be useful when assing new properties or methods to an existing interface 
//without modifying the original declaration

interface Car2{
    brand:string;
    start():void
}

//Declaration merging (interface extension)
interface Car2{
    model:string;
    stop():void
}

//usage of the extended interface
const myCar:Car2={
    brand:"Honda",
    model:"City",
    start:()=>{
        console.log('Honda City is starting')
    },
    stop:()=>{
        console.log("Honda City is stopping")
    }
}

myCar.start();
myCar.stop();