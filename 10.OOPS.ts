//Classes and Modifiers
//in Js you do not have the concept of modifiers
//there are 3 tyoes of access modifiers in TS- 
//public => Members can be accessed from anywhere inside and outside the class
//private => only be accessed within the class thay are defined in
//protected => acessed within that class and the subclasses extending that class
class Person2{
    readonly name:string;
    protected age:number
    private marks:number
    
    constructor(name:string,age:number,marks:number){
        this.name=name;
        this.age=age;
        this.marks=marks;
    }

    // yo():void{
    //     console.log('yo')
    // }
    //or
    yo=():void=>{
        console.log('yo');
    }
    //getters and setters in TS
    get myMarks():number{
        return this.marks
    }
    set setMarks(marks:number){
        this.marks=marks;
    }
}

const p=new Person2("Aayush",21,100);
// console.log(p.marks); // can't do it
// console.log(p.age); //can't do it
console.log(p.myMarks);
// p.name="yo"  can't do it


class Temp extends Person2{
    lname:string;
    constructor(name:string,age:number,marks:number,lname:string){
        super(name,age,marks);
        this.lname=lname;
    }
    printAge=():void=>{
        console.log(this.age);
    }
}
const t=new Temp("Bruce",30,75,"Wayne");
t.setMarks=200;
console.log(t.myMarks);
