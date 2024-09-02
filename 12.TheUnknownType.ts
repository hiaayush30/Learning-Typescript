function render(document:unknown){
//    document.whatever();  
//unlike any it will not allow just anything to work without narrowing
//which ensures that the methods we are calling exist on the target object
 if(typeof document==='string'){
    document.toLowerCase();
 }
} 