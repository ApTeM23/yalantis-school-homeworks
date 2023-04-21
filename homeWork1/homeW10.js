/*Write an `add()` function that will take any number of parameters in the next manner:
    ```js
   console.log(add(2)(5)(7)(1)(6)(5)(10)()); // 36-
 */
const sum = (...args1) => (...args2) => args2.length === 0 ? args1.reduce((accumulator, i) => accumulator + i, 0) : sum(...args1, ...args2);
console.log(sum(2)(5)(7)(1)(6)(5)(10)());
