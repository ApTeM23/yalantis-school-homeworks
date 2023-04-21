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
