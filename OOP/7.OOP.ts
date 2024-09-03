//method overriding
//inheritence
//reuse code from one class in another class


class Person1{
    constructor(public fname:string,public lname:string){}
    get fullname():string{
        return this.fname+' '+this.lname;
    }
    walking(){
        console.log('waling');
    }
}

class Student1 extends Person{
    //parameter property not needed for fname and lname here
    constructor(public studentId:number,fname:string,lname:string){
        super(fname,lname);
    }
    //noImpliciteOverride:true
    override get fullname():string{
        return 'student '+this.fname;
    }

    override walking(): void {
        console.log('student is walking')
    }
    takeTest(){
        console.log('taking a test!');
    }
}