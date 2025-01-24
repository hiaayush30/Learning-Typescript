interface User{
    name:string;
    id:string;
    age:number;
    password:string;
    email:string;
}

//Pick : allows you to select ceratin properties from an existing type/interface
type UpdateProps = Pick<User, | 'name' |'age' | 'email'>;

const updateUser=(user:UpdateProps)=>{
    //hit the db to update user
}
// updateUser({name:'John',age:30}) error as age also required

//Partial : makes all properties of a type optional
type  UpdatePropsOptional=Partial<User>;


// readonly 
type User1={
    readonly name:string;
    readonly id:string;
    readonly age:number;
}

const u:User1={
    name:'John',
    id:'123',
    age:30
}
//or
const u1:Readonly<User1>={
    name:'John',
    id:'123',
    age:30
}
// u.age=32; error as age is readonly