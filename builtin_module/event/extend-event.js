const EventEmmiter = require("node:events");
const { PizzaShop, DrinkMachine } = require("./pizza-shop");

const pizzaShop = new PizzaShop();
const drinkMachine = new DrinkMachine();

pizzaShop.on("order", (size, topping) => {
  console.log(
    `order receive for baking pizza size ${size} and topping is ${topping}`
  );
  drinkMachine.serveDrink(size);
});

setTimeout(() => {
  pizzaShop.order("large", "mushroom");
}, 3000);

console.log("waiting for the orders....");
