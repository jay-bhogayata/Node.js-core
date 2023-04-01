// import add from "./math-esm.mjs";

// console.log(add(2, 3));

/*
import math from "./math-esm.mjs";

console.log(math.add(23, 32));
console.log(math.subtract(10, 5));

const { add, subtract } = math;
console.log(add(23, 24));
console.log(subtract(12, 32));
*/

//
/*
import * as obj1 from "./math-esm.mjs";
console.log(obj1.multiply(25, 32));
console.log(obj1.divide(10, 2));
*/
// or
import { multiply, divide } from "./math-esm.mjs";
console.log(multiply(10, 2));
console.log(divide(10, 2));
