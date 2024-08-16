let score:number|string='hello';
score=55;

type User4={
    name:string
    id:number
}

type Admin={
    username:string
    id:number
}

let aayush:User4|Admin={name:"aayush",id:334}

function getId(id:number | string):void{
    // id.toLowerCase(); throws error
    if(typeof id === 'string'){
       id.toLowerCase();
    }
    if(typeof id === 'number'){
        id +2;
     }
    console.log(id);
}

const data:string[]|number[]=['hey']  //this will either be array of strings OR numbers
const data2:(string|number)[]=['hey',2,'yo'];

let pi:3.14=3.14;
let seat:'window'|'middle'|'aisle';
seat='window';
