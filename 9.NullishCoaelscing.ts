//Nullish Coaelscing Operator

let speed:number|null=null;
let ride={
    //falsy - undefined,null,'',false,0
    //speeed:speed||30      //all falsy values wwill lead to 30 getting assigned to speed
    speed:speed ?? 30    //will only check for null or undefined
}