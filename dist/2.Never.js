"use strict";
//never type annotation
// Represents values that never occur. It indicates that a function does not
// complete normally (e.g., it throws an error or runs indefinitely).
//A fn that always throws an error
function throwError(msg) {
    throw new Error(msg);
}
//A fn that has an infinite loop
function infiniteLoop() {
    // The never type indicates that the function will never successfully complete.
    while (true) { }
}
//A variable that can never have a value
let x;
function neverReturns() {
    while (true) { }
}
x = neverReturns();
//this will cause a compile-time error bcz the fn never returns ie
//code after this will never be executed
