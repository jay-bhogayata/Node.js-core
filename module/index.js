// require("./add");
require("./spiderman");
require("./ironman");
const addFunc = require("./add");

// --------------------------------------------

console.log("Hello Node.js");

// --------------------------------------------

const sum = addFunc(23, 32);
const sum2 = addFunc(2, 3);
console.log(sum);
console.log(sum2);

// --------------------------------------------

/*
const superHero = require("./super-hero");
console.log(superHero.getName());
superHero.setName("Spidy");
console.log(superHero.getName());

const superHero2 = require("./super-hero");
console.log(superHero2.getName()); //this line give spidy bcz of module caching
*/

const superHero3 = require("./super-hero");

const IronMan = new superHero3("ironman");
console.log(IronMan.getName());
IronMan.setName("tony stark");
console.log(IronMan.getName());

const SpiderMan = new superHero3("spiderman");
console.log(SpiderMan.getName());

// --------------------------------------------

// const add = require("./math");
// console.log(add(22, 33));

// ---------------------------------------------

const math = require("./math");

console.log(math.add(23, 32));
console.log(math.subtract(10, 5));

const { add, subtract } = math;

console.log(add(2, 3));
console.log(subtract(3, 2));

