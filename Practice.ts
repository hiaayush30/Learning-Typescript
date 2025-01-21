type User={
    name:string;
    age:number
}

type Admin={
    name:string;
    role:'admin';
}

const greet=(obj:(Admin|User)):void=>{
    console.log('Hello there '+obj.name);
}

const u:User={
    name:"AAYUSH",
    age:21
}
greet(u);