//Generic Classes
// class KeyValPair{
//     constructor(public key:number,public value:string){}
// }

// class StringKeyValPair{
//     constructor(public key:string,public value:string){}
// }

//T is a generic type parameter
//Generic classes are similar to template classes in C++
class KeyValPair<T>{
    constructor(public key:T,public value:string){}
}

class KeyValPair2<K,V>{
    constructor(public key:K,public value:V){}
}

let pair=new KeyValPair<string>('1','a');
let pair2=new KeyValPair('1','a');   //Ts inferred by itself 


