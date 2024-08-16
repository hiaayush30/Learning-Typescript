//Browser can't run ts 
//ts is a superset of js
//ts ultimately gets transpiled into js before being run by the browser

//Create a react project using ts interface on command line (tsc) like below or use a bundler like vite
//npm i -g typescript
//tsc --init

// The command npm tsc --init initializes a new TypeScript project by generating
// a tsconfig.json file with default configuration settings. This file controls
// the TypeScript compiler's behavior, such as which files to include, compiler
// options, and output settings.
//*to avoid tsc from creating a js file even if their is an error
//npx tsc 1.ts --noEmitOnError or enable this flag in config file
const a=1;
const b=5;

function sum(a:number,b:number){
    return a+b;
}

//tsc -b to build the js file