//Generics allows us to create reusable components (fns,classes and interfaces) 
//which can work with variety of types


//Generic Function
function printSomething<T, X>(input: T): [T] {
    console.log(input);
    console.log(typeof input);
    return [input]
}

printSomething<string, number>("yo");
printSomething(23);   //Type inference

function getRandomKeyValPair<T>(obj: { [key: string]: T }): { key: string, value: T } {
    // This means the function expects an object (obj) where:
    // The keys of the object are strings ([key: string]).
    // The values corresponding to the keys are of a generic type T. 
    const keys = Object.keys(obj); //keys is an array of keys
    const randKey = keys[Math.floor(Math.random() * keys.length)];
    return { key: randKey, value: obj[randKey] }
}

const strObj = {
    a: 'apple',
    b: 'banana',
    c: 'cherry'
};
const res = getRandomKeyValPair<string>(strObj);
console.log(res);

const numObj = {
    a: 1,
    b: 2,
    c: 3
};
const res2 = getRandomKeyValPair<number>(numObj);
console.log(res2);