function processEvents():never{  
    //never tells explicitly that the function will never return sth
    while(true){
        //read message form queue
    }
}

// processEvents();

console.log('Hello World')
//this line will never get executed as the above function never returns

//set allowUnreachableCode in tsconfig to false
//and then see the errors

function reject(message:string):never{
    throw new Error(message);
}

reject('...');
console.log('Hello World!');

