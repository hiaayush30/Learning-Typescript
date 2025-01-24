type Users={
    [key:string]:{
        id:string;
        username:string;
    }
}


const users:Users={
    "ras@qd1":{
        id:'ras@qd1',
        username:'aayush'
    },
    "ras1dr@":{
        id:'ras1dr@',
        username:'rahul'
    }
}

//Record lets you give a cleaner type to objects

type Users1=Record<string,{
    id:string;
    username:string;
}>;
//Users1 is a type which is an object with string keys and values as objects with id and username

const myUsers=new Map<string,{id:string,username:string}>();
myUsers.set('ras@qd1',{id:'ras@qd1',username:'aayush'});
myUsers.set('ras1dr@',{id:'ras1dr@',username:'rahul'});
myUsers.get('ras@qd1');  