//npm i -D ts-node  it combines the 2 steps into 1 step (transpile and run)
//ts-node index.ts
//or nodemon index.ts
//@types/node @types/express - type declaration files ie provide type declaration 
//for Js libraries

import express from 'express';
const app=express();

interface CreateBodyDto{  //dto=data transfer object-> sent by client to the server
    title:string
}

app.use(express.json());

app.get('/',(req,res)=>{
    res.send('LFG'); 
});

app.post('/',(req,res)=>{
    const {title}=req.body as CreateBodyDto;
    res.json({
        title
    })
})

app.listen(3000,()=>{
    console.log(`server running on port ${3000}`);
})
