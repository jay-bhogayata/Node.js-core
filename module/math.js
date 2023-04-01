// const add = (a, b) => {
//   return a + b;
// };

// module.exports = add;

/*
to import above code
const add = require("./math")
console.log(add(2,3))

*/

// ---------------pattern 2----------------

module.exports = (a, b) => {
  return a + b;
};

/*
to import above code
const add = require("./math")
console.log(add(2,3))

*/

// ---------------pattern 3----------------

const add = (a, b) => {
  return a + b;
};

const subtract = (a, b) => {
  return a - b;
};

module.exports = {
  add,
  subtract,
};

/*
to import above code
const math = require("./math");
console.log(math.add(23, 32));
console.log(math.subtract(10, 5));
or
const { add, subtract } = math;

console.log(add(2, 3));
console.log(subtract(3, 2));


*/

// ---------------pattern 4----------------

module.exports.add = (a, b) => {
  return a + b;
};

module.exports.multiply = (a, b) => {
  return a * b;
};

/*
import work as same as above
*/

// ---------------pattern 5----------------

exports.div = (a, b) => {
  return a / b;
};
