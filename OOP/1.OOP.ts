   //Classes
   //it is a blueprint for creating objects

   class Account {
    readonly id:number;    //these do not exist in js ie only for ts
    owner:string;
    balance:number;
    nickname?:string;
    constructor(id:number,owner:string,balance:number){
        this.id=id;
        this.owner=owner;
        this.balance=balance;
    }
    deposit=(amount:number):void=>{
      if(amount<=0)
        throw new Error('invalid amount!');
      this.balance+=amount;
    }
   }

   let obj=new Account(1,"Aayush",99999999);

   console.log(typeof obj);
   console.log(obj instanceof Account);

   obj.deposit(100);
   console.log(obj);

