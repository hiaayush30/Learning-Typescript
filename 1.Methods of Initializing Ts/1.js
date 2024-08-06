//Browser can't run ts 
//ts is a superset of js
//ts ultimately gets transpiled into js before being run by the browser
//npm i typescript
//npx tsc --init
//to avoid tsc from creating a js file even if their is an error
// npx tsc 1.ts --noEmitOnError
var a = 1;
var b = 3;
function sum(a, b) {
    return a + b;
}
