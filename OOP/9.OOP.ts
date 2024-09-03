//abstract classes and methods
abstract class Shape{
    constructor(public color:string){}
    abstract render():void   
    //abstract method can only exist within abstract classes
}

class Circle extends Shape{
    constructor(color:string,public radius:number){super(color)}
    // If you wrote public color: string in the Circle class,
    // it would create a new color property specific to the Circle
    // class, potentially shadowing the one inherited from Shape. 
     render(): void {
        console.log('Circle is getting rendered!'); 
    }
}

const obj5=new Circle('red',5);