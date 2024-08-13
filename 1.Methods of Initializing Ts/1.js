//Browser can't run ts 
//ts is a superset of js
//ts ultimately gets transpiled into js before being run by the browser
//Create a react project using ts interface on command line (tsc) like below or use a bundler like vite
//npm i typescript
//tsc --init
//to avoid tsc from creating a js file even if their is an error
//npx tsc 1.ts --noEmitOnError or enable this flag in config file
var a = 1;
var b = 5;
function sum(a, b) {
    return a + b;
}
