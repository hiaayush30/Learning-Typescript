// import {Circle,Square as Sq} from './shapes'
import * as Shapes from './shapes'   //wildcard import 
import * as Circle from "./Circle";
import Store,{Format} from './storage';

let circle=new Circle.Circle(1);
console.log(circle.radius)

// Module Formats-
// 1.AMD
// 2.UMD

// 3.CommonJS
// const shapes_1 = require("./shapes");  //require fn used

// 4.ES2015/ES6
// import {Circle,Square as Sq} from './shapes'

//in modules directory do tsc to generate dist