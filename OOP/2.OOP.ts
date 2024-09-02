class Account2 {
    // readonly id:number;   
    // owner:string;
    //private _balance:number;  //convention to pefix pvt properties with _

    //Parameter properties to declare and initializa at once
    constructor(public readonly id:number,public owner:string,private _balance:number){
        // this.id=id;
        // this.owner=owner;
        // this._balance=balance;
    }
    deposit=(amount:number):void=>{
      if(amount<=0)
        throw new Error('invalid amount!');
      this._balance+=amount;
    }

    getBalance=():number=>{
        return this._balance;
    }

    private calculateTax=()=>{}
   }

   let obj1=new Account2(1,"Aayush",99999999);
// obj1.balance=99;  //cant access private property outside the class
//now have to use getters and setters to access it
console.log(obj1.getBalance())


