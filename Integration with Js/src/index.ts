import {calculateTax} from './tax.js'
//by default Js code is not included in compilation process
//tsc cannot see out tax.js
console.log(calculateTax(3000));