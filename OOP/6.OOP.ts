//inheritence
//reuse code from one class in another class


class Person{
    constructor(public fname:string,public lname:string){}
    get fullname():string{
        return this.fname+' '+this.lname;
    }
    walking(){
        console.log('waling');
    }
}

class Student extends Person{
    //parameter property not needed for fname and lname here
    constructor(public studentId:number,fname:string,lname:string){
        super(fname,lname);
    }

    takeTest(){
        console.log('taking a test!');
    }
}