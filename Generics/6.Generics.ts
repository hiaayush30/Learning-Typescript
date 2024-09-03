//Extending Generic Classes
//when extending a generic class you have 3 options
interface Product{
    name:string;
    price:number;
}

class Store<T>{
    protected  _objects:T[]=[];  //intialized to an empty array
    add(obj:T):void{
        this._objects.push(obj);
    }
}

//1.passing on the generic type parameter
class CompressibleStore<T> extends Store<T>{
//now the compiler knows whatever we pass to this class will be used for the Store 
compress(){}   
}


//2.Restricting the generic type parameter
class SearchableStore<T extends {name:string}> extends Store<T>{
    find(name:string):T|undefined {
        return this._objects.find(obj=>obj.name===name);
    }
}

//3.Fixing or terminating the generic type parameter
class ProductStore extends Store<Product>{
    filterByCategory(category:string){
        return []
    }
}

const store=new Store();


