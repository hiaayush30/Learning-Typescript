// let phone=document.getElementById('phone');
//HTMLElement is a class defined in JS which represents any html elements

//but we know that phone is an HTMLInputElement (which is more specefic) 
//as we want to see properties related to it like value so

let phone=document.getElementById('phone') as HTMLInputElement;
//or
let phone1=<HTMLInputElement>document.getElementById('phone');
console.log(phone.value);
//but the program will crash if the phone is not HTMLInputELement and does not have a
//value property

