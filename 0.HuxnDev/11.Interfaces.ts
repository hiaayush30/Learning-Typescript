// a way to define a contract for the shape of an object,functions and Classes
// and specifies properties and methods the object must have 
//interface for objects
interface MyPerson {
    readonly fname: string;
    lname: string;
    age?: number
    code(time: number): void | number
}

const exampleObject: MyPerson = {
    fname: "Aayush",
    lname: "Jha",
    // age:21,
    code: (time: number): void => {
        console.log(`coding for ${time} minutes`)
    }
}

// example.fname="yo" //can't do it as it's readonly
function greet1(person: MyPerson) {
    console.log(`hello ${person.fname}`)
}

//interface for functions
interface MathOperation {
    (x: number, y: number): number;
}
//usage
const add: MathOperation = (x: number, y: number): number => {
    return x + y;
}

//interfaces for classes
interface Vehicle {
    vehicleName: string;
    start(): void;
    stop(): void;
}

class Car implements Vehicle {
    vehicleName: string = "Honda City"
    start(): void {
        console.log('car started');
    }
    stop(): void {
        console.log('car stopped');
    }
}