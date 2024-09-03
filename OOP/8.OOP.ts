//Polymorphism
//Open Closed Principle of OOP-classes should be open for extension 
//but closed for modification
class Person3{
    constructor(public fname:string,public lname:string){}
    get fullname():string{
        return this.fname+' '+this.lname;
    }
    protected walking(){   
        //protected method can be inerited unlike private where
        //it is not available in objects of child class
        console.log('waling');
    }
}

class Teacher3 extends Person3{
    constructor(fname:string,lname:string){super(fname,lname)}
    override get fullname():string{
        return 'Professor '+this.fname+' '+this.lname;
    }
}

const obj3=new Teacher3('Aayush','Jha');
// console.log(obj3.fullname);

printNames([
    new Person3('Aayush','jha'),
    new Teacher3('Mr','Mosh')
])


function printNames(people:Person3[]){
   for(const person of people){
        console.log(person.fullname)
   }
}
