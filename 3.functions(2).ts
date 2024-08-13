function consoleError(errMsg:string):void{
    console.log(errMsg); 
}

//the never type is used when the fn throws an exception 
//or terminates the execution of the program 
//never type also eppears when ts determines nothing left in the union
function Fail(errMsg:string):never{
    throw new Error(errMsg);
}