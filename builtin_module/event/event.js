/**
 * the event module is allowed us to work with event.
 *
 * an event is an action or an occurrence that has happened in our application that we can respond to.
 *
 * using the event module we can dispatch our own custom event and respond to those custom event in non blocking manner.
 */

const EventEmmiter = require("node:events");

const emmiter = new EventEmmiter();

setTimeout(() => {
  emmiter.emit("order-pizza");
}, 1000);

emmiter.on("order-pizza", () => {
  console.log("pizza order is arrived");
});

// it also possible to pass argument with emit

setTimeout(() => {
  emmiter.emit("order-pizza-2", "large", "extra-chess");
}, 2000);

emmiter.on("order-pizza-2", (size, topping) => {
  console.log(`order of 2nd pizza is arrived size ${size} with ${topping}`);
});

emmiter.on("order-pizza-2", (size) => {
  if (size === "large") {
    console.log("server extra cold drink with order number 2");
  }
});

console.log("print me before event");
