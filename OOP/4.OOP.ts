//index signatures used to add properties to objects dynamically in Ts

class SeatAssignment{
    //Index Signature property
    [seatNumber:string]:string
}

let seats=new SeatAssignment();
seats.A1="Mosh";  //or seats['A1']="Mosh"
seats.A2="Aayush";
// seats.A3=21;  can't do it