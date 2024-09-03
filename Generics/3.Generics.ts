//Generic Functions
function wrapInArray<T>(value:T):T[]{
    return [value];
}

console.log(wrapInArray<number>(23));

class ArrayUtils{
    wrapInArray<T>(value:T):T[]{
        return [value];
    }
}

let utils=new ArrayUtils();
let nums=utils.wrapInArray(42);
console.log(nums);
