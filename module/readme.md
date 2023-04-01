# Modules

- a module is encapsulated and reusable chunk of code that has its own context.

- in nodejs each file is treated as a separate module.

- **types of module**
  1.  Local module - module that we create in our project.
  2.  built-in module - module that is provided by nodejs.
  3.  third-party module - module that is provided by third-party.

## Local module

- Module that we create and use in our application.

### Common js

- stander that state how a module should be defined and exported.

- nodejs started with common js module system.

- to load a module we use `require` function.

- .js extension is optional.

```js
//index.js
require("./module1"); // in module1 no need to export anything
const data = require("./module2");
// in module2 we have to export something
```

```js
const add = (a, b) => a + b;
module.exports = add;

const addition = require("./module");
// the addition will be the add function
console.log(addition(1, 2));
```

#### IIFE:

    ```js
    (function () {
      console.log("IIFE");
    })();
    ```
    - before the module executed the code inside the module will be wrapped in IIFE that provide module scope.
    - this saves us from having to worry about variable  name or function name collision.
    - provide popper encapsulation and reusability is unaffected.

- each module has its own scope.

#### Module wrapper function

- every model is wrapped as in as IIFE before it is loaded.

  ```js
  (function (exports, require, module, __filename, __dirname) {
    // module code actually lives in here
  })();
  ```

- node does module caching for the performance gain so that if we require the same module again it will not be loaded again.

### ES Module

- es module is ecma script standard for module.

- it was introduced in es2015.

- nodejs 14 and above support es module.

- instead of `require` we use `import` keyword.

- instead of `module.exports` we use `export` keyword.

- export can be named or default.

- if we use default export we can import it with any name.

- if we use named export we have to import it with the same name.

```js
// module1.js
export default function () {
  console.log("module1");
}
```

```js
// module2.js
export function add(a, b) {
  return a + b;
}
```

```js
// index.js
import module1 from "./module1";
import { add } from "./module2";

module1();
console.log(add(1, 2));
```
