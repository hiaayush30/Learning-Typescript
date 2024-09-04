//the keyof operator
interface Product{
    name:string;
    price:number;
}

class Store1<T>{
    protected  _objects:T[]=[];  //intialized to an empty array
    add(obj:T):void{
        this._objects.push(obj);
    }
    find(property:keyof T,value:unknown):T|undefined{
         return this._objects.find(obj=>obj[property]===value);
    }
}

const store1=new Store1<Product>();
store1.add({name:'a',price:1});
store1.find('name','a');
// store1.find('nonExistentProperty',1);
