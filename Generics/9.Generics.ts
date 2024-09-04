//Type Mapping
//sometimes we want to base a type on another type

interface Product{
    name:string;
    price:number
}

type ReadOnlyProduct={
   //Index signature
   //keyof
   readonly [K in keyof Product]:Product[K]
}

//even better (generalize)
type ReadOnly<T>={
    //Index signature
    //keyof
    readonly [K in keyof T]:T[K]
 }

let prod:ReadOnlyProduct={
    name:"a",
    price:1
}

type Optional<T>={
    [K in keyof T]?:T[K]
}