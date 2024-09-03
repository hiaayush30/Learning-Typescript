//Generic Constraints

function echo<T extends number|string>(value:T):T{
    return value;
}
// echo(true);

//we can also constraint by a shape of an object
function echo1<T extends {name:string}>(value:T):T{
    return value;
}
echo1({name:"Yo"})

//or
interface Person{
    name:string,
    age:number
}
function echo2<T extends Person>(value:T):T{
    return value;
}
echo2({name:"Yo",age:10})

//constraint by class
class Person{
    constructor(public name:string){}
}
function echo3<T extends Person>(value:T):T{
    return value
}
//will only accept objects of class Person or those extending it