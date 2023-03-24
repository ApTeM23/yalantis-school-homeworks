const objIn = {
  string: 'string',
  number: 123,
  date: new Date(),  // string
  inf: Infinity,  // 'null'
  re: /.*!/,  // lost
}

console.log(clone(objIn));

function clone(n:object) {
  if (typeof n === 'object') {
    let cloneN = new Object;
    if(Array.isArray(n)) {
      cloneN = Array.from(n);
    } else {
      cloneN = Object.assign(Object.create(n), n);
    } return cloneN;
  } else {
    return 'not object'
    }
  }
