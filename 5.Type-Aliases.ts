//type readonly and optional
type User={
    name:string
    email:string
    isActive:Boolean
}   

function createUser(user:User):void{
    console.log(user);
}

type User2={
    readonly _id:string
    name:string
    email:string
    creditDetails?:number
}

const myUser:User2={
    '_id':'12345',
    'name':'h',
    'email':'hi'
}
myUser.email='hello@gmail.com';
// myUser._id='123'; //cant do it

type MegaUser=User & User2 & {salary:number};

const newUser:MegaUser={
    _id:'1',
    name:'aayush',
    email:'aayush@gmail.com',
    isActive:true,
    salary:10000000
}



