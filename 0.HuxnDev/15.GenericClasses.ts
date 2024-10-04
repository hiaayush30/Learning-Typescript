class Box<T>{
    private content:T;
    constructor (initialContent:T){
        this.content=initialContent
    }

    setContent=(content:T)=>{
        this.content=content;
    }

    get myContent():T{
         return this.content;      
    }
}

const obj=new Box<string>("custom content");