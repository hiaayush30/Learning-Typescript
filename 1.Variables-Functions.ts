const num:number=10;

let num2=15;  //Type inference

//annotating functions (param and return annotation)
const greet=(name:string):void=>{
   console.log(`hello ${name}`)
}
//or
const greet2=function(name:string='User'):void{  //passing default values to params
    console.log(`hello ${name}`);
}
  

