//getters and setters
class Account4 {
    constructor(public readonly id:number,public owner:string,private _balance:number){}

    deposit=(amount:number):void=>{
        if(amount<=0)
          throw new Error('invalid amount!');
        this._balance+=amount;
      }

      get balance():number {
             return this._balance
      }

    //   set balance(value:number){   //not needed here
    //      if(value<0)
    //         throw new Error('Invalid Value!');
    //     else
    //      this._balance=value;
    //   }
}

let obj2=new Account4(1,"Aayush",99999999);
console.log(obj2.balance);