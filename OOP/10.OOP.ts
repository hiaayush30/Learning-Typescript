//Interface
//classes-blueprint for creating objects
//Interface-to define the shape of an object


//abstract is purely a Ts concept
// abstract class Calender{
//     constructor(public name:string){}
//     abstract addEvent():void
//     abstract removeEvent():void;
// }


interface Calender{
    name:string;
    addEvent():void;
    removeEvent():void;
}

//but there can be no method implementation in an ainterface
//unlike in an abstract class

interface CloudCal extends Calender{
    sync():void
}

// Interfaces define a contract or structure that a class must
// follow, specifying properties, methods, and their types.
class GoogleCalender implements CloudCal {
    constructor(public name:string){}
    sync(): void {
        throw new Error("Method not implemented.");
    }
    addEvent(): void {
        throw new Error("Method not implemented.");
    }
    removeEvent(): void {
        throw new Error("Method not implemented.");
    }

}
