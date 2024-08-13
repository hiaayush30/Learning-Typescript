function addTwo(num:number):number{
    return num+2;
}
let result=addTwo(5);

function getUpper(val:string){
    return val.toUpperCase();
}
const res=getUpper("hello");

function signUp(name:string,email:string,password:string,isPaid:boolean){

}
signUp('aayush','aayush@gmail.com','123',true);

let loginUser=function(name:string,email:string,isPaid:boolean=false){
}
loginUser('a','a@gmail.com',true)

const greet=(name:string):string=>{
    return `hello ${name}`;
}

const heroes=["thor","siderman"];
//the ts infers that the elements are string which we then do nat have to declare in the mapp fn
heroes.map((hero):string=>{
    return `hello ${hero}`;
})
export{}