function greet(name: string|null) {
    if (name==='string')   //type narrowing
        console.log(name.toUpperCase());
    else
        console.log('Hola!');
}

greet(null);


