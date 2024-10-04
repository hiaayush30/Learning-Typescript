function filterArray<T>(array:T[],condition:(item:T)=>boolean):T[]{
    return array.filter(item=>condition(item));
}

const numArray=[1,2,3,4,5,6,7,8];
const evenNums=filterArray<number>(numArray,(num)=>num%2==0);
console.log(evenNums)

type Fruits={
    name:string
}
const fruitsArray:Fruits[]=[
    {name:'banana'},
    {name:'apple'},
    {name:'mango'}
]
const filteredFruits=filterArray<Fruits>(fruitsArray,(fruit)=>fruit.name!=='apple');
console.log(filteredFruits)