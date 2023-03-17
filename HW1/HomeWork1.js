/*Write an `add()` function that will take any number of parameters in the next manner:
    ```js
   console.log(add(2)(5)(7)(1)(6)(5)(10)()); // 36-
 */
const sum = (...args1) => (...args2) => args2.length === 0 ? args1.reduce((accumulator, i) => accumulator + i, 0) : sum(...args1, ...args2);
console.log(sum(2)(5)(7)(1)(6)(5)(10)());

// Write function, which takes two strings, and returns true if they are anagrams of one another.
function Anagrams(x1, x2) {

    let txt1 = x1.split('').sort().join('').trim();
    let txt2 = x2.split('').sort().join('').trim();
    if(txt1 === txt2){
        console.log("True");
    } else {
        console.log("False");
    }
}
Anagrams('str1','s t1r');

// Write the clone function so that it can clone deeply the object passed as a parameter.
function clone(n) {
    if (typeof n === 'object') {
        let cloneN = {};
        for (const key in n) {
            cloneN[key] = n[key];
        }
        return cloneN;
    } else {
        return 'not object';
    }
};
const i = {
    string: 'string',
    number: 123,
    date: new Date(),  // string
    undef: undefined,  // lost
    inf: Infinity,  // 'null'
    re: /.*!/,  // lost
}
console.log(clone(i));  // console.log(clone(2));

/*Write a function-wrapper, that will cache the result of any other function. Look at the example of use case in pseudocode:
    const add = (a, b) => a+b;
const wrapper = (args) => {
    // implementation
};
const cachedAdd = wrapper(add);
cachedAdd(2,2); // 4 calculated
cachedAdd(5,8); // 13 calculated
cachedAdd(2,2); // 4 from cache
*/
const add = (a, b) => a+b;
const wrapper = (args) => {
    let cache = {};
    return function () {
        let stamp = JSON.stringify(arguments);
        //console.log(cache);
        if (!(stamp in cache)) {
            cache[stamp] = args.apply(this, arguments);
            console.log(cache[stamp] + ' calculated');
        }
        else {console.log(cache[stamp] + " from cache" + "\n\n");
            return cache[stamp];}
    }
}
const cachedAdd = wrapper(add);
cachedAdd(2,2); // 4 calculated
cachedAdd(5,8); // 13 calculated
cachedAdd(2,2); // 4 from cache


