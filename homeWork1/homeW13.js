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
