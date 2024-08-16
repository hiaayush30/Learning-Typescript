//interface are not present in the final js file
interface yo{  //interface helps aggregate data
    name:string
    age?:number   //optional argument
}

const hey:yo={
    name:"aayush",
}

// Interfaces have another special property. 
// You can implement interfaces as a class. (unlike type)
//nut type lets you do unions(|) and intersections(&)
interface Person {
    name: string;
    age: number;
    greet(phrase: string): void;
}
// You can create a class which implements this interface.
class Employee implements Person {
    name: string;
    age: number;

    constructor(n: string, a: number) {
        this.name = n;
        // this.age = a;
    }

    greet(phrase: string) {
        console.log(`${phrase} ${this.name}`);
    }

    specialEmployeeFn(){
        console.log('hello there!');
    }
}

const e=new Employee("aayush",21); 
